(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[41],{417:function(e,t,n){e.exports={keepalive:"keep-alive_keepalive__3hevg",router:"keep-alive_router__1ewSh",test:"keep-alive_test__3ohon"}},424:function(e,t,n){"use strict";n.r(t);var c=n(99),r=n(5),a=n(0),i=n(417),o=n.n(i),s=n(1),l=function(e){var t=e.flag,n=Object(a.useState)(1),c=Object(r.a)(n,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){console.log("\u521d\u59cb\u5316\uff1a".concat(i)),l(1)}),[]),Object(s.jsxs)("div",{className:o.a.test,children:[t,"\uff1a",i,Object(s.jsx)("button",{onClick:function(){l((i||0)+1)},children:"\u70b9\u6211 + 1"})]})};t.default=function(){var e=["A","B","C","D","E","F","G"],t=Object(a.useState)("A"),n=Object(r.a)(t,2),i=n[0],u=n[1],b=Object(a.useState)([]),j=Object(r.a)(b,2),d=j[0],f=j[1];return Object(a.useEffect)((function(){d.includes(i)||f([].concat(Object(c.a)(d),[i]))}),[i]),Object(s.jsxs)("div",{className:o.a.keepalive,children:[Object(s.jsx)("div",{children:"\u6d4b\u8bd5\u7528\u6570\u7ec4\u5b9e\u73b0\u7684\u7ec4\u4ef6 keep-alive\uff0c\u539f\u7406 list.map + \u5224\u65ad\u6761\u4ef6\uff0c\u8fd8\u6709 display: none"}),Object(s.jsxs)("div",{className:o.a.router,children:["\u70b9\u51fb\u5207\u6362\u8def\u7531\uff1a",e.map((function(e){return Object(s.jsx)("span",{onClick:function(){return u(e)},children:e},e)}))]}),Object(s.jsxs)("div",{children:["\u5177\u4f53\u7ec4\u4ef6\uff1a",e.map((function(e){return d.includes(e)?Object(s.jsx)("div",{style:{display:e===i?"block":"none"},children:Object(s.jsx)(l,{flag:e},e)}):e===i?Object(s.jsx)("div",{children:Object(s.jsx)(l,{flag:e},e)}):Object(s.jsx)("div",{})}))]})]})}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(9);var r=n(19);function a(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);