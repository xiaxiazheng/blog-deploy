(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[45],{449:function(t,e,c){"use strict";c.r(e);var l=c(5),s=c(0),o=c(511),r=c.n(o),a=c(1),i=50,n=Math.floor(6)+1;e.default=function(){var t=Object(s.useState)([]),e=Object(l.a)(t,2),c=e[0],o=e[1],j=Object(s.useState)([]),d=Object(l.a)(j,2),b=d[0],u=d[1],p=Object(s.useState)(0),h=Object(l.a)(p,2),O=h[0],v=h[1],x=Object(s.useState)(0),f=Object(l.a)(x,2),g=f[0],m=f[1];Object(s.useEffect)((function(){for(var t=[],e=0;e<100;e++)t.push(e);o(t),u(t.slice(0,n)),m((100-n)*i)}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:r.a.scroll,style:{height:300},onScroll:function(t){var e=t.target.scrollTop,l=Math.floor(e/i);v(l*i),m((100-n-l)*i),u(c.slice(l+1,l+1+n))},children:Object(a.jsx)("div",{className:r.a.scrollBox,style:{paddingTop:O,paddingBottom:g},children:b.map((function(t){return Object(a.jsx)("div",{className:r.a.scrollItem,style:{height:i},children:t},t)}))})}),Object(a.jsxs)("div",{children:["paddingTop\uff1a",O,"px"]}),Object(a.jsxs)("div",{children:["paddingBottom\uff1a",g,"px"]}),Object(a.jsxs)("div",{children:["\u5f53\u524d\u6e32\u67d3\u5143\u7d20\uff1a",b.join(",")]})]})}},511:function(t,e,c){t.exports={scroll:"virtual-scroll_scroll__1J62y",scrollBox:"virtual-scroll_scrollBox__2PV4p",scrollItem:"virtual-scroll_scrollItem__2Rv81"}}}]);