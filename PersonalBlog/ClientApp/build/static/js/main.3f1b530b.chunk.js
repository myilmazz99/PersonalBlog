(this.webpackJsonppersonalblog=this.webpackJsonppersonalblog||[]).push([[1],{2:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return i})),n.d(t,"n",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"m",(function(){return b})),n.d(t,"l",(function(){return p})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return m}));var a="GET_BLOGS_SUCCESS",r="GET_CATEGORIES_SUCCESS",c="CHANGE_CATEGORY",o="GET_BLOGBYID_SUCCESS",l="GET_BLOG_COUNT_SUCCESS",u="ADD_COMMENT_SUCCESS",i="LOADING_UI",s="STOP_LOADING_UI",d="LOADING_BLOGS",f="LOADING_COMMENTS",b="STOP_LOADING_COMMENTS",p="SET_ACTION_SUCCESS",g="SET_ACTION_ERROR",m="CLEAR_ACTION_RESULT"},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return p}));var a=n(9),r=n.n(a),c=n(15),o=n(16),l=n.n(o),u=n(2),i=function(e,t,n){e(t?{type:u.l,payload:n}:{type:u.k,payload:n}),setTimeout((function(){e({type:u.c})}),5e3)},s=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/api/blogs/count");case 3:n=e.sent,t({type:u.f,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:u.h}),t.next=4,l.a.get("/api/blogs/?page=".concat(e||0));case 4:a=t.sent,n({type:u.e,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),i(n,!1,"Beklenmedik bir hata olu\u015ftu. L\xfctfen daha sonra tekrar deneyin.");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:u.h}),n.next=4,l.a.get("/api/blogs/".concat(e));case 4:c=n.sent,a({type:u.d,payload:c.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t.push("/404");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},b=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.put("/api/blogs/incrementview?blogId=".concat(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:u.i}),t.prev=1,t.next=4,l.a.post("/api/blogs/addcomment",e);case 4:n({type:u.a,payload:e}),i(n,!0,"Yorumunuz eklendi."),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),i(n,!1,"Yorumunuz eklenirken bir hata olu\u015ftu. L\xfcften daha sonra tekrar deneyiniz."),n({type:u.m});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},32:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(45),o=n.n(c),l={display:"block",width:"70px",margin:"0 auto"};t.a=function(){return r.a.createElement("img",{src:o.a,alt:"",style:l})}},45:function(e,t,n){e.exports=n.p+"static/media/LoadingSpinner.954e0c81.gif"},48:function(e,t,n){e.exports=n(81)},50:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=(n(50),n(11)),l=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",null,r.a.createElement("div",{className:"credentials"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("i",{className:"far fa-envelope-open"}),r.a.createElement("span",null,"mfyilmaz95@gmail.com")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-globe"}),r.a.createElement("span",null,"www.myyilmaz.com")),r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-linkedin-in"})))),r.a.createElement("div",{className:"copyright"},r.a.createElement("small",null,"\xa9 2020 T\xfcm haklar\u0131 sakl\u0131d\u0131r. www.myblog.com"))))},u=n(20),i=n(31),s=function(){var e=Object(o.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},d=n(29),f=n.n(d),b=(n(77),n(10)),p=n(32),g=function(){return r.a.createElement("div",{style:{height:"100vh",width:"100wh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(p.a,null))},m=n(19),O=Object(u.b)((function(e){return{ui:e.uiReducer}}),(function(e){return{getBlogCount:Object(b.b)(i.c,e)}}))((function(e){var t=e.ui,u=t.isSuccess,i=t.resultMessage,d=e.getBlogCount,b=Object(a.useState)(!0),p=Object(c.a)(b,2),O=p[0],h=p[1];Object(a.useEffect)((function(){d()}),[]),Object(a.useEffect)((function(){O||""===i||(u?f.a.success(i):f.a.error(i)),h(!1)}),[u,i]);var E=Object(m.a)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,92))}),{fallback:r.a.createElement(g,null)}),v=Object(m.a)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,93))}),{fallback:r.a.createElement(g,null)}),j=Object(m.a)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,94))}),{fallback:r.a.createElement(g,null)}),y=Object(m.a)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,95))}),{fallback:r.a.createElement(g,null)});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:E}),r.a.createElement(o.a,{exact:!0,path:"/blogs",component:j}),r.a.createElement(o.a,{exact:!0,path:"/blogs/:id",component:y}),r.a.createElement(o.a,{component:v})),r.a.createElement(l,null))})),h=n(46);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(21),v=(n(80),n(17)),j=n(3),y=n(2),S={blogs:[],page:0,blogCount:0,hasMoreBlogs:!0,loadingComments:!1,loadingBlogs:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.f:return Object(j.a)(Object(j.a)({},e),{},{blogCount:t.payload});case y.e:for(var n=0;n<t.payload.length;n++)for(var a=0;a<e.blogs.length;a++)t.payload[n].blogId===e.blogs[a].blogId&&e.blogs.splice(a,1);return Object(j.a)(Object(j.a)({},e),{},{blogs:[].concat(Object(v.a)(e.blogs),Object(v.a)(t.payload)),loadingBlogs:!1,page:e.page+1,hasMoreBlogs:!(t.payload.length<3)});case y.d:return Object(j.a)(Object(j.a)({},e),{},{blogs:[].concat(Object(v.a)(e.blogs),[t.payload]),loadingBlogs:!1});case y.i:return Object(j.a)(Object(j.a)({},e),{},{loadingComments:!0});case y.m:return Object(j.a)(Object(j.a)({},e),{},{loadingComments:!1});case y.h:return Object(j.a)(Object(j.a)({},e),{},{loadingBlogs:!0});case y.a:var r=e.blogs.find((function(e){return e.blogId===t.payload.blogId})),c=e.blogs.map((function(e){return e.blogId===t.payload.blogId?Object.assign({},r,{comments:[].concat(Object(v.a)(r.comments),[t.payload])}):e}));return{blogs:Object(v.a)(c),loadingComments:!1};default:return e}},C={categories:[],currentCategory:{}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.g:return Object(j.a)(Object(j.a)({},e),{},{categories:t.payload});case y.b:return Object(j.a)(Object(j.a)({},e),{},{currentCategory:t.payload});default:return e}},_={loading:!1,isSuccess:!0,resultMessage:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.j:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case y.n:return Object(j.a)(Object(j.a)({},e),{},{loading:!1});case y.l:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,isSuccess:!0,resultMessage:t.payload});case y.k:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,isSuccess:!1,resultMessage:t.payload});case y.c:return Object(j.a)(Object(j.a)({},e),{},{resultMessage:""});default:return e}},x=Object(b.c)({blogReducer:w,categoryReducer:k,uiReducer:T}),I=n(47),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,B=function(){return Object(b.e)(x,N(Object(b.a)(I.a)))}();Object(h.render)(r.a.createElement(E.a,null,r.a.createElement(u.a,{store:B},r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,2,3]]]);
//# sourceMappingURL=main.3f1b530b.chunk.js.map