(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[43],{498:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(732),c=n.n(r),i=n(7),u=n(10),s=function(e){var t=Object(o.useRef)(null),n=Object(o.useState)(),r=Object(i.a)(n,2),c=r[0],s=r[1],l=Object(o.useState)(),d=Object(i.a)(l,2),a=d[0],m=d[1],b=Object(o.useState)(!1),h=Object(i.a)(b,2),j=h[0],f=h[1],v=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e,n,o=0,r=0,c=0,i=0,u=function(e){o=t.current.offsetWidth,r=t.current.offsetHeight,c=e.clientX,i=e.clientY,document.documentElement.addEventListener("mousemove",d,!1)},l=function(e){document.documentElement.removeEventListener("mousemove",d,!1)},d=function(e){var n=o+e.clientX-c;t.current.style.width="".concat(n,"px"),s(n);var u=r+e.clientY-i;t.current.style.height="".concat(u,"px"),m(u)};j?(null===(e=v.current)||void 0===e||e.addEventListener("mousedown",u,!1),document.documentElement.addEventListener("mouseup",l,!1)):(null===(n=v.current)||void 0===n||n.removeEventListener("mousedown",u,!1),document.documentElement.removeEventListener("mouseup",l,!1))}),[j]),Object(u.jsxs)("span",{ref:t,style:{position:"relative",display:"inline-block",border:j?"1px solid black":"none"},onDoubleClick:function(){return f((function(e){return!e}))},children:[e.render(c,a),j&&Object(u.jsx)("span",{ref:v,style:{position:"absolute",backgroundColor:"black",display:"inline-block",width:4,height:4,bottom:0,right:0,cursor:"se-resize"}})]})};t.default=function(){var e=function(e){var t=e.width,n=e.height,o=e.title,r={display:"inline-block",width:t,height:n,margin:10,padding:20,border:"1px solid #ccc",textAlign:"center"};return Object(u.jsx)("div",{style:r,children:o})};return Object(u.jsxs)("div",{className:c.a.drag_zoom,children:[Object(u.jsx)(s,{render:function(t,n){return Object(u.jsx)(e,{width:t,height:n,title:"demo1"})}}),Object(u.jsx)(s,{render:function(t,n){return Object(u.jsx)(e,{width:t,height:n,title:"demo2"})}})]})}},732:function(e,t,n){e.exports={drag_zoom:"drag-zoom_drag_zoom__KmzDl"}}}]);