"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[243],{304:function(e,n,t){var r=t(861),o=t(757),a=t.n(o),i=null,c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmE4YzE2NTE5Mzk1NjVmMjI4MWU1MDY0MzJjYWIwMyIsInN1YiI6IjY0NzRlZTJjOTI0Y2U2MDBkY2IyODliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2X4n5YSX4hGgZkP27xnajtjEfUPUoPxkoDMVouWB-ek"}},s=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("trend"===(null===n||void 0===n?void 0:n.type)&&(i="https://api.themoviedb.org/3/trending/all/day?language=en-US"),"movies"===(null===n||void 0===n?void 0:n.type)&&(i="https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(n.search)),"details"===(null===n||void 0===n?void 0:n.type)&&(i="https://api.themoviedb.org/3/movie/".concat(n.searchId,"?language=en-US")),"credits"===(null===n||void 0===n?void 0:n.type)&&(i="https://api.themoviedb.org/3/movie/".concat(n.searchId,"/credits?language=en-US")),"review"===(null===n||void 0===n?void 0:n.type)&&(i="https://api.themoviedb.org/3/movie/".concat(n.searchId,"/reviews?language=en-US&page=1")),"images"===(null===n||void 0===n?void 0:n.type)&&(i="https://api.themoviedb.org/3/movie/".concat(n.searchId,"/images")),e.prev=6,i){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,fetch(i,c);case 11:return t=e.sent,console.log("data :>> ",t),e.next=15,t.json();case 15:return r=e.sent,e.t0=console,e.next=19,r;case 19:return e.t1=e.sent,e.t0.log.call(e.t0,"response in api .json() :>> ",e.t1),e.next=23,r;case 23:return e.abrupt("return",e.sent);case 26:e.prev=26,e.t2=e.catch(6),console.log(e.t2);case 29:case"end":return e.stop()}}),e,null,[[6,26]])})));return function(n){return e.apply(this,arguments)}}();n.Z=s},243:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(689),o=t(87),a=t(304),i="Header_mainMenu__+HH0X",c="Header_menuLink__p4lFP",s=t(184),l=function(){return console.log("before"),(0,a.Z)(),console.log("after"),(0,s.jsxs)("ul",{className:i,children:[(0,s.jsx)("li",{children:(0,s.jsx)(o.OL,{to:"/",className:c,children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o.OL,{to:"/movies",className:c,children:"Movies"})})]})},u=t(791),d=function(){return console.log("rendering of header"),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),(0,s.jsx)(u.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(r.j3,{})})]})}},861:function(e,n,t){function r(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var i=e.apply(n,t);function c(e){r(i,o,a,c,s,"next",e)}function s(e){r(i,o,a,c,s,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=243.44c58d4b.chunk.js.map