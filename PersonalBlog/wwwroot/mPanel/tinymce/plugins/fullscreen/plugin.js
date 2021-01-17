!function(){"use strict";var n=function(n){var e=n;return{get:function(){return e},set:function(n){e=n}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(){},r=function(n){return function(){return n}};function o(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.concat(t);return n.apply(null,o)}}var u,i,c,l=r(!1),f=r(!0),a=function(){return s},s=(u=function(n){return n.isNone()},{fold:function(n,e){return n()},is:l,isSome:l,isNone:f,getOr:c=function(n){return n},getOrThunk:i=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:r(null),getOrUndefined:r(void 0),or:c,orThunk:i,map:a,each:t,bind:a,exists:l,forall:f,filter:a,equals:u,equals_:u,toArray:function(){return[]},toString:r("none()")}),d=function(n){var e=r(n),t=function(){return u},o=function(e){return e(n)},u={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:f,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return d(e(n))},each:function(e){e(n)},bind:o,exists:o,forall:o,filter:function(e){return e(n)?u:s},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(l,(function(e){return t(n,e)}))}};return u},m={some:d,none:a,from:function(n){return null==n?s:d(n)}},h=function(){return e=function(n){return n.unbind()},t=n(m.none()),r=function(){return t.get().each(e)},{clear:function(){r(),t.set(m.none())},isSet:function(){return t.get().isSome()},set:function(n){r(),t.set(m.some(n))}};var e,t,r},v=function(n){return function(e){return r=typeof(t=e),(null===t?"null":"object"===r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===n;var t,r}},g=function(n){return function(e){return typeof e===n}},p=v("string"),y=v("array"),w=g("boolean"),b=function(n){return!function(n){return null==n}(n)},S=g("function"),E=g("number"),F=Array.prototype.push,T=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var u=n[o];r[o]=e(u,o)}return r},x=function(n,e){for(var t=0,r=n.length;t<r;t++)e(n[t],t)},k=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++){var u=n[r];e(u,r)&&t.push(u)}return t},O=Object.keys,A=function(n){return void 0!==n.style&&S(n.style.getPropertyValue)},C=function(n){if(null==n)throw new Error("Node cannot be null or undefined");return{dom:n}},M=C,N=("undefined"!=typeof window?window:Function("return this;")(),function(n){return function(e){return function(n){return n.dom.nodeType}(e)===n}}),P=N(1),q=N(3),D=N(9),L=N(11),H=function(n,e){var t=n.dom;if(1!==t.nodeType)return!1;var r=t;if(void 0!==r.matches)return r.matches(e);if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e);if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")},R=function(n){return M(n.dom.ownerDocument)},V=function(n){return T(n.dom.childNodes,M)},W=S(Element.prototype.attachShadow)&&S(Node.prototype.getRootNode),B=r(W),j=W?function(n){return M(n.dom.getRootNode())}:function(n){return D(n)?n:R(n)},z=function(n){var e=j(n);return L(e)?m.some(e):m.none()},I=function(n){return M(n.dom.host)},U=function(n){var e=q(n)?n.dom.parentNode:n.dom;if(null==e||null===e.ownerDocument)return!1;var t,r,o=e.ownerDocument;return z(M(e)).fold((function(){return o.body.contains(e)}),(t=U,r=I,function(n){return t(r(n))}))},_=function(n,e){var t=n.dom.getAttribute(e);return null===t?void 0:t},K=function(n,e){n.dom.removeAttribute(e)},X=function(n,e){var t=n.dom;!function(n,e){for(var t=O(n),r=0,o=t.length;r<o;r++){var u=t[r];e(n[u],u)}}(e,(function(n,e){!function(n,e,t){if(!p(t))throw console.error("Invalid call to CSS.set. Property ",e,":: Value ",t,":: Element ",n),new Error("CSS value must be a string: "+t);A(n)&&n.style.setProperty(e,t)}(t,e,n)}))},Y=function(n){var e,t,r=M(function(n){if(B()&&b(n.target)){var e=M(n.target);if(P(e)&&b(e.dom.shadowRoot)&&n.composed&&n.composedPath){var t=n.composedPath();if(t)return function(n,e){return 0<n.length?m.some(n[0]):m.none()}(t)}}return m.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(e=u,t=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e(t.apply(null,n))});return function(n,e,t,r,o,u,i){return{target:n,x:e,y:t,stop:r,prevent:o,kill:u,raw:i}}(r,n.clientX,n.clientY,o,u,i,n)},G=function(n,e,t,r){n.dom.removeEventListener(e,t,r)},J=f,Q=function(n,e,t){return function(n,e,t,r){return function(n,e,t,r,u){var i=function(n,e){return function(t){n(t)&&e(Y(t))}}(t,r);return n.dom.addEventListener(e,i,u),{unbind:o(G,n,e,i,u)}}(n,e,t,r,!1)}(n,e,J,t)},Z=function(n,e){return{left:n,top:e,translate:function(t,r){return Z(n+t,e+r)}}},$=Z,nn=function(n){var e=void 0===n?window:n;return m.from(e.visualViewport)},en=function(n,e,t,r){return{x:n,y:e,width:t,height:r,right:n+t,bottom:e+r}},tn=function(n){var e=void 0===n?window:n,t=e.document,r=function(n){var e=void 0!==n?n.dom:document,t=e.body.scrollLeft||e.documentElement.scrollLeft,r=e.body.scrollTop||e.documentElement.scrollTop;return $(t,r)}(M(t));return nn(e).fold((function(){var n=e.document.documentElement,t=n.clientWidth,o=n.clientHeight;return en(r.left,r.top,t,o)}),(function(n){return en(Math.max(n.pageLeft,r.left),Math.max(n.pageTop,r.top),n.width,n.height)}))},rn=function(n,e,r){return nn(r).map((function(t){var r=function(n){return e(Y(n))};return t.addEventListener(n,r),{unbind:function(){return t.removeEventListener(n,r)}}})).getOrThunk((function(){return{unbind:t}}))},on=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),un=tinymce.util.Tools.resolve("tinymce.Env"),cn=tinymce.util.Tools.resolve("tinymce.util.Delay"),ln=function(n,e){n.fire("FullscreenStateChanged",{state:e})},fn=function(n){return n.getParam("fullscreen_native",!1,"boolean")},an=function(n){return n.dom===(void 0!==(e=R(n).dom).fullscreenElement?e.fullscreenElement:void 0!==e.msFullscreenElement?e.msFullscreenElement:void 0!==e.webkitFullscreenElement?e.webkitFullscreenElement:null);var e},sn=function(n,e,t){return function(n,e,t){return k(function(n,e){for(var t=S(e)?e:l,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,i=M(u);if(o.push(i),!0===t(i))break;r=u}return o}(n,t),e)}(n,(function(n){return H(n,e)}),t)},dn=function(n,e){return function(n,t){return k(function(n){return m.from(n.dom.parentNode).map(M)}(r=n).map(V).map((function(n){return k(n,(function(n){return e=n,!(r.dom===e.dom);var e}))})).getOr([]),(function(n){return H(n,e)}));var r}(n)},mn="data-ephox-mobile-fullscreen-style",hn="position:absolute!important;",vn="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",gn=un.os.isAndroid(),pn=function(n){var e=function(n,e){var t=n.dom,r=window.getComputedStyle(t).getPropertyValue(e);return""!==r||U(n)?r:function(n,e){return A(n)?n.style.getPropertyValue(e):""}(t,e)}(n,"background-color");return void 0!==e&&""!==e?"background-color:"+e+"!important":"background-color:rgb(255,255,255)!important;"},yn=on.DOM,wn=nn().fold((function(){return{bind:t,unbind:t}}),(function(e){var t,r=(t=n(m.none()),{clear:function(){return t.set(m.none())},set:function(n){return t.set(m.some(n))},isSet:function(){return t.get().isSome()},on:function(n){return t.get().each(n)}}),o=h(),u=h(),i=cn.throttle((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.requestAnimationFrame((function(){r.on((function(n){return X(n,{top:e.offsetTop+"px",left:e.offsetLeft+"px",height:e.height+"px",width:e.width+"px"})}))}))}),50);return{bind:function(n){r.set(n),i(),o.set(rn("resize",i)),u.set(rn("scroll",i))},unbind:function(){r.on((function(){o.clear(),u.clear()})),r.clear()}}})),bn=function(n,e){var t,r,o,u,i=document.body,c=document.documentElement,l=n.getContainer(),f=M(l),a=function(n){var e=M(n.getElement());return z(e).map(I).getOrThunk((function(){return function(n){var e=n.dom.body;if(null==e)throw new Error("Body is not available yet");return M(e)}(R(e))}))}(n),s=e.get(),d=M(n.getBody()),h=un.deviceType.isTouch(),v=l.style,g=n.iframeElement.style,b=function(n){n(i,"tox-fullscreen"),n(c,"tox-fullscreen"),n(l,"tox-fullscreen"),z(f).map((function(n){return I(n).dom})).each((function(e){n(e,"tox-fullscreen"),n(e,"tox-shadowhost")}))},S=function(){var t,r;h&&(t=n.dom,r=function(n,e){var t,r=document;return 1!==(t=r).nodeType&&9!==t.nodeType&&11!==t.nodeType||0===t.childElementCount?[]:T(r.querySelectorAll(n),M)}("["+mn+"]"),x(r,(function(n){var e=_(n,mn);"no-styles"!==e?X(n,t.parseStyle(e)):K(n,"style"),K(n,mn)}))),b(yn.removeClass),wn.unbind(),m.from(e.get()).each((function(n){return n.fullscreenChangeHandler.unbind()}))};if(s)s.fullscreenChangeHandler.unbind(),fn(n)&&an(a)&&((r=R(a).dom).exitFullscreen?r.exitFullscreen():r.msExitFullscreen?r.msExitFullscreen():r.webkitCancelFullScreen&&r.webkitCancelFullScreen()),g.width=s.iframeWidth,g.height=s.iframeHeight,v.width=s.containerWidth,v.height=s.containerHeight,v.top=s.containerTop,v.left=s.containerLeft,t=s.scrollPos,window.scrollTo(t.x,t.y),e.set(null),ln(n,!1),S(),n.off("remove",S);else{var k=Q(R(a),void 0!==document.fullscreenElement?"fullscreenchange":void 0!==document.msFullscreenElement?"MSFullscreenChange":void 0!==document.webkitFullscreenElement?"webkitfullscreenchange":"fullscreenchange",(function(t){fn(n)&&(an(a)||null===e.get()||bn(n,e))})),O={scrollPos:(u=tn(window),{x:u.x,y:u.y}),containerWidth:v.width,containerHeight:v.height,containerTop:v.top,containerLeft:v.left,iframeWidth:g.width,iframeHeight:g.height,fullscreenChangeHandler:k};h&&function(n,e,t){var r=function(e){return function(t){var r=_(t,"style"),o=void 0===r?"no-styles":r.trim();o!==e&&(function(n,e,t){!function(n,e,t){if(!(p(t)||w(t)||E(t)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",t,":: Element ",n),new Error("Attribute value was not simple");n.setAttribute(e,t+"")}(n.dom,e,t)}(t,mn,o),X(t,n.parseStyle(e)))}},o=sn(e,"*"),u=function(n){for(var e=[],t=0,r=n.length;t<r;++t){if(!y(n[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+n);F.apply(e,n[t])}return e}(T(o,(function(n){return dn(n,"*:not(.tox-silver-sink)")}))),i=pn(t);x(u,r("display:none!important;")),x(o,r(hn+vn+i)),r((!0===gn?"":hn)+vn+i)(e)}(n.dom,f,d),g.width=g.height="100%",v.width=v.height="",b(yn.addClass),wn.bind(f),n.on("remove",S),e.set(O),fn(n)&&((o=a.dom).requestFullscreen?o.requestFullscreen():o.msRequestFullscreen?o.msRequestFullscreen():o.webkitRequestFullScreen&&o.webkitRequestFullScreen()),ln(n,!0)}},Sn=function(n,e){return function(t){t.setActive(null!==e.get());var r=function(n){return t.setActive(n.state)};return n.on("FullscreenStateChanged",r),function(){return n.off("FullscreenStateChanged",r)}}};e.add("fullscreen",(function(e){var t=n(null);return e.inline||(function(n,e){n.addCommand("mceFullScreen",(function(){bn(n,e)}))}(e,t),function(n,e){n.ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return n.execCommand("mceFullScreen")},onSetup:Sn(n,e)}),n.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return n.execCommand("mceFullScreen")},onSetup:Sn(n,e)})}(e,t),e.addShortcut("Meta+Shift+F","","mceFullScreen")),function(n){return{isFullscreen:function(){return null!==n.get()}}}(t)}))}();