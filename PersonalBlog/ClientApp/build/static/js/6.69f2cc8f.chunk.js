(this.webpackJsonppersonalblog=this.webpackJsonppersonalblog||[]).push([[6],{82:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(a,"a",(function(){return n}))},83:function(e,a,t){e.exports=t.p+"static/media/logo.bebb124e.png"},84:function(e,a,t){"use strict";var n=t(30),l=t(0),c=t.n(l),r=t(21),m=t(83),s=t.n(m),i=(t(20),function(e){var a=e.header,t=Object(l.useState)(!1),m=Object(n.a)(t,2),i=m[0],o=m[1],u=Object(l.useRef)();Object(l.useEffect)((function(){var e=u.current,a=new IntersectionObserver((function(e){var a=Object(n.a)(e,1)[0];return o(a.intersectionRatio<1)}),{threshold:[1]});return a.observe(e),function(){a.unobserve(e)}}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{ref:u,className:i?"isSticky":""},c.a.createElement("div",{className:"container"},a&&i?"":c.a.createElement("div",{className:"brand"},c.a.createElement(r.b,{to:"/"},c.a.createElement("img",{src:s.a,alt:"",className:"brand-img"}))),c.a.createElement("div",{className:"sticky-header"},i&&a?c.a.createElement(c.a.Fragment,null,c.a.createElement(r.b,{to:"/blogs"},c.a.createElement("i",{className:"fas fa-angle-left fa-2x"})),c.a.createElement("div",null,a)):""),c.a.createElement("div",{onClick:function(){document.querySelector(".first-line").classList.toggle("first-line-activated"),document.querySelector(".second-line").classList.toggle("second-line-activated"),document.querySelector(".third-line").classList.toggle("third-line-activated"),document.querySelector(".nav-expand").classList.toggle("expanded"),document.querySelector(".nav-expand-links").classList.toggle("d-none")},className:"nav-expand-btn"},c.a.createElement("div",{className:"btn-line first-line"}),c.a.createElement("div",{className:"btn-line second-line"}),c.a.createElement("div",{className:"btn-line third-line"})),c.a.createElement("div",{className:"nav-expand"},c.a.createElement("ul",{className:"nav-expand-links d-none"},c.a.createElement("li",null,c.a.createElement(r.b,{to:"/blogs"},"Yaz\u0131lar\u0131m")))),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(r.b,{to:"/blogs"},"Yaz\u0131lar\u0131m"))))))});a.a=function(e){var a=e.img,t=e.text,r=e.pickAphorism,m=Object(l.useState)(),s=Object(n.a)(m,2),o=s[0],u=s[1];return Object(l.useEffect)((function(){r&&r().then((function(e){return u(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"jumbotron"},c.a.createElement("img",{src:a,alt:""}),c.a.createElement("h1",{className:"jumbotron-text"},c.a.createElement("div",null,o?o.aphorism:t||"myblog.com'a ho\u015fgeldiniz! Keyifli okumalar."),c.a.createElement("small",null,o?"- ".concat(o.writer):""))),c.a.createElement(i,{header:t}))}},92:function(e,a,t){e.exports=t.p+"static/media/profile.b862ee27.jpg"},96:function(e,a,t){"use strict";t.r(a);var n=t(30),l=t(82),c=t(0),r=t.n(c),m=t(92),s=t.n(m),i=t(42),o=t(3),u=function(e,a){var t=Object(c.useState)({}),l=Object(n.a)(t,2),r=l[0],m=l[1],s=Object(c.useState)({}),u=Object(n.a)(s,2),d=u[0],E=u[1],b=Object(c.useState)(!1),f=Object(n.a)(b,2),g=f[0],v=f[1];return Object(c.useEffect)((function(){0===Object.keys(d).length&&g&&(e(),v(!1))}),[e,d,g]),{values:r,handleSubmit:function(e){e.preventDefault(),v(!0),E(a(r))},handleChange:function(e){var a=e.target,t=a.name,n=a.value;m((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t,n))}))},errors:d}},d=function(e){var a={};return e.username?e.username.length>30&&(a.username="\u0130sim alan\u0131 en fazla 30 karakter olmal\u0131d\u0131r."):a.username="\u0130sim girmek zorunludur.",e.commentText?e.commentText>140&&(a.commentText="Yorumunuz en fazla 140 karakter olmal\u0131d\u0131r."):a.commentText="Yorum k\u0131sm\u0131 bo\u015f b\u0131rak\u0131lamaz",a},E=t(20),b=t(10),f=t(31),g=t(32),v=Object(E.b)((function(e){return{blogReducer:e.blogReducer}}),(function(e){return{addComment:Object(b.b)(f.a,e)}}))((function(e){var a=e.commentList,t=e.addComment,n=e.blogId,l=e.blogReducer.loadingComments,c=u((function(){i.blogId=n,t(i)}),d),m=c.handleChange,s=c.handleSubmit,i=c.values,o=c.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"comment-section"},r.a.createElement("h3",null,"Yorumlar"),r.a.createElement("form",{onSubmit:s},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:m,type:"text",name:"username",placeholder:"\u0130sminiz..",value:i.username||""}),o.username&&r.a.createElement("small",{className:"input-error"},o.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{onChange:m,type:"text",name:"commentText",placeholder:"Yorumunuz..",value:i.commentText||"",rows:"4"}),o.commenttext&&r.a.createElement("small",{className:"input-error"},o.commenttext)),r.a.createElement("div",null,l?r.a.createElement(g.a,null):"",r.a.createElement("button",{type:"submit"},l?"Yorumunuz ekleniyor..":"Yorum Yap"))),r.a.createElement("div",{className:"comments"},a&&a.sort((function(e,a){return e.commentId-a.commentId})).reverse().map((function(e,a){return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("div",{className:"card-details"},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,e.commentText)))})))))})),N=t(84),p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"blog-detail-layout"},r.a.createElement("section",{id:"blog-content"},r.a.createElement("div",{className:"blog-info"},r.a.createElement("div",{className:"small-line"})),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"})),r.a.createElement("section",{className:"author"},r.a.createElement("div",{className:"img-skeleton"}),r.a.createElement("div",{className:"small-line"}),r.a.createElement("div",{className:"small-line"}),r.a.createElement("div",{className:"full-line"}),r.a.createElement("div",{className:"full-line"}))))},h=t(11),O=t(85);a.default=Object(E.b)((function(e,a){var t=a.match.params.id;return{blog:t&&e.blogReducer.blogs.find((function(e){return e.blogId===Number(t)}))||null,blogReducer:e.blogReducer,ui:e.uiReducer}}),(function(e){return{getBlogById:Object(b.b)(f.b,e),incrementView:f.e}}))((function(e){var a=e.getBlogById,t=e.blog,m=e.ui.loading,i=(Object(l.a)(e,["getBlogById","blog","ui"]),Object(h.h)().id),o=Object(h.f)(),u=Object(c.useState)(0),d=Object(n.a)(u,2),E=d[0],b=d[1];return Object(c.useEffect)((function(){if(t||a(i,o),t){b(Math.floor(t.content.split(" ").length/200));var e=setTimeout((function(){Object(f.e)(t.blogId)}),1e4)}return function(){return clearTimeout(e)}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement("title",null,t?t.header:"Bilelim - Makale")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{img:t.mainImage,text:t.header}),r.a.createElement("main",{className:"container"},m?r.a.createElement(p,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"blog-detail-layout"},r.a.createElement("section",{id:"blog-content"},r.a.createElement("p",{className:"blog-info"},r.a.createElement("span",{className:"blog-details-icon"},r.a.createElement("i",{className:"fas fa-eye"})," ",t.viewCount),r.a.createElement("span",{className:"blog-details-icon"},r.a.createElement("i",{className:"fas fa-comment"})," ",t.commentCount),r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-clock"})," ",E," dakikal\u0131k okuma")),r.a.createElement("div",{className:"html-content",dangerouslySetInnerHTML:{__html:t.content}})),r.a.createElement("section",{className:"author"},r.a.createElement("div",{className:"author-img"},r.a.createElement("img",{src:t.writerProfilePictureUrl||s.a,alt:"profile placeholder"})),r.a.createElement("div",{className:"author-details"},r.a.createElement("small",null,"Yazar"),r.a.createElement("h4",null,t.writerName),r.a.createElement("p",null,t.writerSummary)))),r.a.createElement(v,{blogId:t.blogId,commentList:t.comments})))))}))}}]);
//# sourceMappingURL=6.69f2cc8f.chunk.js.map