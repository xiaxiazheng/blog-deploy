(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[48],{554:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c(0),r=c(1),i=function(e){var t=Object(s.useState)(0),c=Object(n.a)(t,2),i=c[0],u=c[1],o=Object(s.useState)(0),j=Object(n.a)(o,2),a=j[0],b=j[1];return Object(r.jsx)("div",{onMouseMove:function(e){u(e.clientX),b(e.clientY)},className:"Mouse",style:{width:"500px",height:"300px",border:"1px solid #ccc"},children:e.render({x:i,y:a})})},u=function(e){var t=e.mouse;return Object(r.jsxs)("div",{className:"cat",children:["cat:(",t.x,", ",t.y,")"]})},o=function(e){var t=e.mouse;return Object(r.jsxs)("div",{className:"dog",children:["dog:(",t.x,", ",t.y,")"]})};t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u79fb\u52a8\u9f20\u6807"}),Object(r.jsx)(i,{render:function(e){return Object(r.jsx)(u,{mouse:e})}}),Object(r.jsx)(i,{render:function(e){return Object(r.jsx)(o,{mouse:e})}})]})}}}]);