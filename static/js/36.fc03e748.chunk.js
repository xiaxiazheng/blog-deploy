(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[36,19],{188:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(1);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},190:function(t,e,n){"use strict";var c=n(0);e.a=function(t){Object(c.useEffect)((function(){return document.title="[\u867e]".concat(t),function(){document.title="\u867e\u867e\u90d1\u7684\u4e2a\u4eba\u7f51\u7ad9"}}),[t])}},254:function(t,e,n){"use strict";var c=n(2),a=n(0),r=n(217),o=n(186),i=function(t,e){return a.createElement(o.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:r.a}))};i.displayName="LeftOutlined",e.a=a.forwardRef(i)},385:function(t,e,n){t.exports={testPage:"test-page_testPage__1nSxo",home:"test-page_home__2cjWz",backButton:"test-page_backButton__2lL0a"}},637:function(t,e,n){"use strict";n.r(e);var c=n(188),a=n(0),r=n(385),o=n.n(r),i=n(12),u=n(190),s=n(90),l=n(177),p=n(254),b=n(10),m=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(29),n.e(34)]).then(n.bind(null,475))})),f=Object(a.lazy)((function(){return Promise.all([n.e(40),n.e(42)]).then(n.bind(null,464))})),j=Object(a.lazy)((function(){return n.e(44).then(n.bind(null,465))})),O=[{path:"H5",name:"H5",component:m},{path:"knn",name:"knn",component:f},{path:"virtual-scroll",name:"virtual-scroll",component:j},{path:"mouse-position",name:"mouse-position",component:Object(a.lazy)((function(){return n.e(45).then(n.bind(null,467))}))},{path:"drag-zoom",name:"drag-zoom",component:Object(a.lazy)((function(){return n.e(41).then(n.bind(null,485))}))},{path:"transform",name:"file\u3001blob\u3001Base64 \u4ee5\u53ca url \u76f8\u4e92\u8f6c\u6362",component:Object(a.lazy)((function(){return n.e(43).then(n.bind(null,468))}))},{path:"parse-image",name:"\u4ece\u526a\u8d34\u677f\u83b7\u53d6\u56fe\u7247\u5e76\u5c55\u793a",component:Object(a.lazy)((function(){return n.e(46).then(n.bind(null,469))}))}],h=function(){var t=Object(a.useContext)(s.a).isLogin,e=Object(i.f)();return Object(b.jsx)("div",{className:o.a.home,children:O.map((function(n){var c="".concat(t?"/admin":"","/test-page/").concat(n.path);return Object(b.jsx)("div",{onClick:function(){return e.push(c)},children:n.name},n.name)}))})};e.default=Object(i.g)((function(){var t=Object(a.useContext)(s.a).isLogin,e=Object(i.f)();return Object(u.a)("\u6d4b\u8bd5\u9875"),Object(b.jsxs)("div",{className:"".concat(o.a.testPage," ScrollBar"),children:[Object(b.jsx)(i.a,{path:"".concat(t?"/admin":"","/test-page"),component:h,exact:!0}),O.map((function(n){var a="".concat(t?"/admin":"","/test-page/").concat(n.path);return Object(b.jsx)(i.a,{path:a,component:function(a){var r=n.component;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(l.a,{className:o.a.backButton,type:"primary",onClick:function(){return e.push("".concat(t?"/admin":"","/test-page"))},children:[Object(b.jsx)(p.a,{type:"left"}),"\u8fd4\u56de"]}),Object(b.jsx)(r,Object(c.a)({},a))]})}},n.name)}))]})}))}}]);