(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[42],{157:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a(5),c=a(0),s=a(1),r=Object(c.createContext)({}),i=function(e){var t=Object(c.useState)({keyword:null,pageNo:1,pageSize:20,orderBy:"modify",showVisible:!0,showInvisible:!0,showNotTag:!1}),a=Object(n.a)(t,2),i=a[0],o=a[1],d=Object(c.useState)(),b=Object(n.a)(d,2),l=b[0],h=b[1],j=Object(c.useState)(!1),u=Object(n.a)(j,2),O=u[0],m=u[1],g=Object(c.useState)([]),p=Object(n.a)(g,2),x=p[0],f=p[1],_=Object(c.useState)(!1),v=Object(n.a)(_,2),y=v[0],k=v[1];return Object(s.jsx)(r.Provider,{value:{tabsState:i,setTabsState:o,isTagChange:O,setIsTagChange:m,activeTagId:l,setActiveTagIdId:h,tagList:x,setTagList:f,isUpdateTag:y,setIsUpdateTag:k},children:e.children})};r.Consumer},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a(5),c=a(0),s=a(1),r=Object(c.createContext)({}),i=function(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),i=a[0],o=a[1];return Object(s.jsx)(r.Provider,{value:{treeContTitle:i,setTreeContTitle:o},children:e.children})};r.Consumer},48:function(e,t,a){"use strict";a.r(t);var n=a(268),c=a(0),s=a(2),r=a(21),i=a.n(r),o=a(5),d=a(585),b=a.n(d),l=a(12),h=a(710),j=a(741),u=a(715),O=a(13),m=a(17),g=a(15),p=a(750),x=a(1),f=Object(s.g)((function(e){var t=e.location,a=(e.history,Object(c.useContext)(m.a)),n=a.theme,s=a.setTheme,r=Object(c.useContext)(g.a),i=r.username,d=(r.setUsername,Object(c.useContext)(O.a).isLogin),f=Object(c.useState)("home"),_=Object(o.a)(f,2),v=_[0],y=_[1],k=function(e){"github"===e.key?window.open("https://github.com/xiaxiazheng/reactblog","_blank"):"baidu"===e.key?window.open("https://tongji.baidu.com/web/10000199972/overview/index?siteId=15040289","_blank"):y(e.key),S(!1)};Object(c.useEffect)((function(){["admin/tree","admin/blog","admin/cloud","admin/media"].forEach((function(e){-1!==t.pathname.indexOf(e)&&y(e.replace(/admin\//g,""))})),"/login"===t.pathname&&y("admin")}),[t]);var I=function(){var e="dark"===n?"light":"dark";localStorage.setItem("theme",e),s(e)};Object(c.useEffect)((function(){document.querySelector(".App").setAttribute("class","App ".concat(n,"Theme"))}),[n]);var C={zyb:"XIAXIAZheng",hyp:"\u963f\u82f9\u7684\u5c0f\u7ad9"},w=Object(c.useState)(!0),T=Object(o.a)(w,2),S=(T[0],T[1]),N=function(){return Object(x.jsxs)("header",{className:b.a.Header,children:[Object(x.jsx)("span",{className:b.a.headerLeft,onClick:function(){return y(d?"admin":"home")},children:Object(x.jsx)(l.b,{to:"/",children:C[i]})}),Object(x.jsxs)("span",{className:b.a.headerRight,children:[Object(x.jsx)(h.a,{className:b.a.switch,checkedChildren:"light",unCheckedChildren:"dark",checked:"light"===n,onClick:I}),Object(x.jsxs)(j.a,{onClick:k,selectedKeys:[v],mode:"horizontal",className:b.a.headerRouteList,children:[Object(x.jsxs)(j.a.Item,{children:[Object(x.jsx)(u.a,{className:b.a.headerIcon}),Object(x.jsx)(l.b,{to:"/blog",children:"Blog"})]},"blog"),Object(x.jsxs)(j.a.Item,{children:[Object(x.jsx)(p.a,{className:b.a.headerIcon}),Object(x.jsx)(l.b,{to:"/test-page",children:"TestPage"})]},"test-page")]})]})]})};return Object(x.jsx)(N,{})})),_=a(157),v=a(240),y=a(20),k=["component"],I=Object(c.lazy)((function(){return Promise.all([a.e(1),a.e(4),a.e(5),a.e(32),a.e(40)]).then(a.bind(null,749))})),C=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(27)]).then(a.bind(null,705))})),w=Object(c.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(28)]).then(a.bind(null,708))})),T=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(5),a.e(25)]).then(a.bind(null,709))})),S=Object(c.lazy)((function(){return Promise.all([a.e(4),a.e(39)]).then(a.bind(null,599))}));t.default=function(e){e.component,Object(n.a)(e,k);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:i.a.RouterHead,children:Object(x.jsx)(f,{})}),Object(x.jsx)(c.Suspense,{fallback:Object(y.b)(),children:Object(x.jsxs)("div",{className:i.a.RouterView,children:[Object(x.jsx)(s.a,{exact:!0,path:"/",component:I}),Object(x.jsx)(v.b,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/tree/:first_id/:second_id",exact:!0,component:C}),Object(x.jsx)(s.a,{path:"/tree",component:C})]})}),Object(x.jsx)(_.b,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/blog/:blog_id",exact:!0,component:T}),Object(x.jsx)(s.a,{path:"/blog",component:w})]})}),Object(x.jsx)(s.a,{path:"/test-page",component:S})]})})]})}},585:function(e,t,a){e.exports={Header:"header_Header__1AeOD",headerLeft:"header_headerLeft__1sXyu",headerRight:"header_headerRight__21PPH",already:"header_already__10gM1",switch:"header_switch__15Mng",headerRouteList:"header_headerRouteList__VVvj0",headerIcon:"header_headerIcon__3pgta",exportIcon:"header_exportIcon__3b8Kz"}}}]);