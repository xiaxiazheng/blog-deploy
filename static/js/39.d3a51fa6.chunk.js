(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[39],{185:function(e,t,a){"use strict";a.r(t);var n=a(220),c=a(0),s=a(12),r=a(108),i=a.n(r),o=a(7),d=a(537),b=a.n(d),h=a(89),l=a(751),j=a(484),u=a(753),O=a(90),m=a(97),x=a(93),g=a(792),p=a(10),f=Object(s.g)((function(e){var t=e.location,a=(e.history,Object(c.useContext)(m.a)),n=a.theme,s=a.setTheme,r=Object(c.useContext)(x.a),i=r.username,d=(r.setUsername,Object(c.useContext)(O.a).isLogin),f=Object(c.useState)("home"),_=Object(o.a)(f,2),y=_[0],v=_[1],I=function(e){"github"===e.key?window.open("https://github.com/xiaxiazheng/reactblog","_blank"):"baidu"===e.key?window.open("https://tongji.baidu.com/web/10000199972/overview/index?siteId=15040289","_blank"):v(e.key),S(!1)};Object(c.useEffect)((function(){["admin/tree","admin/blog","admin/cloud","admin/media"].forEach((function(e){-1!==t.pathname.indexOf(e)&&v(e.replace(/admin\//g,""))})),"/login"===t.pathname&&v("admin")}),[t]);var k=function(){var e="dark"===n?"light":"dark";localStorage.setItem("theme",e),s(e)};Object(c.useEffect)((function(){document.querySelector(".App").setAttribute("class","App ".concat(n,"Theme"))}),[n]);var C={zyb:"XIAXIAZheng",hyp:"\u963f\u82f9\u7684\u5c0f\u7ad9"},w=Object(c.useState)(!0),T=Object(o.a)(w,2),S=(T[0],T[1]),N=function(){return Object(p.jsxs)("header",{className:b.a.Header,children:[Object(p.jsx)("span",{className:b.a.headerLeft,onClick:function(){return v(d?"admin":"home")},children:Object(p.jsx)(h.b,{to:"/",children:C[i]})}),Object(p.jsxs)("span",{className:b.a.headerRight,children:[Object(p.jsx)(l.a,{className:b.a.switch,checkedChildren:"light",unCheckedChildren:"dark",checked:"light"===n,onClick:k}),Object(p.jsxs)(j.a,{onClick:I,selectedKeys:[y],mode:"horizontal",className:b.a.headerRouteList,children:[Object(p.jsxs)(j.a.Item,{children:[Object(p.jsx)(u.a,{className:b.a.headerIcon}),Object(p.jsx)(h.b,{to:"/blog",children:"Blog"})]},"blog"),Object(p.jsxs)(j.a.Item,{children:[Object(p.jsx)(g.a,{className:b.a.headerIcon}),Object(p.jsx)(h.b,{to:"/test-page",children:"TestPage"})]},"test-page")]})]})]})};return Object(p.jsx)(N,{})})),_=a(210),y=a(244),v=a(107),I=["component"],k=Object(c.lazy)((function(){return a.e(36).then(a.bind(null,785))})),C=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(5),a.e(27)]).then(a.bind(null,742))})),w=Object(c.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(5),a.e(33),a.e(30)]).then(a.bind(null,744))})),T=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(26)]).then(a.bind(null,748))})),S=Object(c.lazy)((function(){return a.e(37).then(a.bind(null,646))}));t.default=function(e){e.component,Object(n.a)(e,I);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:i.a.RouterHead,children:Object(p.jsx)(f,{})}),Object(p.jsx)(c.Suspense,{fallback:Object(v.b)(),children:Object(p.jsxs)("div",{className:i.a.RouterView,children:[Object(p.jsx)(s.a,{exact:!0,path:"/",component:k}),Object(p.jsx)(y.b,{children:Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/tree/:first_id/:second_id",exact:!0,component:C}),Object(p.jsx)(s.a,{path:"/tree",component:C})]})}),Object(p.jsx)(_.b,{children:Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/blog/:blog_id",exact:!0,component:T}),Object(p.jsx)(s.a,{path:"/blog",component:w})]})}),Object(p.jsx)(s.a,{path:"/test-page",component:S})]})})]})}},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a(7),c=a(0),s=a(10),r=Object(c.createContext)({}),i=function(e){var t=Object(c.useState)({keyword:null,pageNo:1,pageSize:20,orderBy:"modify",showVisible:!0,showInvisible:!0,showNotTag:!1}),a=Object(n.a)(t,2),i=a[0],o=a[1],d=Object(c.useState)(),b=Object(n.a)(d,2),h=b[0],l=b[1],j=Object(c.useState)(!1),u=Object(n.a)(j,2),O=u[0],m=u[1],x=Object(c.useState)([]),g=Object(n.a)(x,2),p=g[0],f=g[1],_=Object(c.useState)(!1),y=Object(n.a)(_,2),v=y[0],I=y[1];return Object(s.jsx)(r.Provider,{value:{tabsState:i,setTabsState:o,isTagChange:O,setIsTagChange:m,activeTagId:h,setActiveTagIdId:l,tagList:p,setTagList:f,isUpdateTag:v,setIsUpdateTag:I},children:e.children})};r.Consumer},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a(7),c=a(0),s=a(10),r=Object(c.createContext)({}),i=function(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),i=a[0],o=a[1];return Object(s.jsx)(r.Provider,{value:{treeContTitle:i,setTreeContTitle:o},children:e.children})};r.Consumer},537:function(e,t,a){e.exports={Header:"header_Header__1afXt",headerLeft:"header_headerLeft__3yhDE",headerRight:"header_headerRight__1fZJO",already:"header_already__3dK-e",switch:"header_switch__1qOIm",headerRouteList:"header_headerRouteList__2-sy2",headerIcon:"header_headerIcon__1ryxH",exportIcon:"header_exportIcon__3-Ybj"}}}]);