(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[43],{154:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(9);var o=n(18);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},448:function(t,e,n){"use strict";n.r(e);var r=n(86),o=n(154),a=n(5),c=n(0),i=n(510),u=n.n(i),s=n(45),l=n(1);e.default=function(){var t=Object(c.useRef)(null),e=function(t,e,n){return Math.floor((t-e)/(n-e)*1e4)/1e4},n=Object(c.useState)(20),i=Object(a.a)(n,2),f=i[0],b=i[1],y=function(t,e,n){var r=Object(o.a)(t);return r.forEach((function(t){var r,o,a,c;t.distance=(r=t.x,o=t.y,a=e,c=n,Math.sqrt(Math.pow(a-r,2)+Math.pow(c-o,2)))})),r},p=function(t,e,n,r){var o=y(t,n,r);return o.sort((function(t,e){return t.distance-e.distance})),function(t){var e={};t.forEach((function(t){e[t.type]?e[t.type]+=1/(t.distance+1):e[t.type]=1/(t.distance+1)}));var n="",r=0;return Object.keys(e).forEach((function(t){e[t]>r&&(r=e[t],n=t)})),n}(o.splice(0,e))};Object(c.useEffect)((function(){h()}),[]);var j=Object(c.useState)([]),d=Object(a.a)(j,2),m=d[0],x=d[1],h=function(){var t=function(){for(var t=[],e=["I\u7c7b","II\u7c7b","III\u7c7b"],n=0;n<f;n++)t.push({x:Math.floor(100*Math.random()),y:Math.floor(80*Math.random()),type:e[n%e.length]});return t}();x(t),console.log("\u8bad\u7ec3\u6570\u636e",m)},v=Object(c.useState)([{x:2,y:2},{x:2,y:10},{x:50,y:5},{x:99,y:2},{x:99,y:9}]),O=Object(a.a)(v,2),g=O[0],_=O[1],I=Object(c.useState)(0),k=Object(a.a)(I,2),S=k[0],E=k[1],N=Object(c.useState)(0),M=Object(a.a)(N,2),A=M[0],T=M[1];Object(c.useEffect)((function(){0!==m.length&&0!==g.length&&V()}),[m,g]);var C=Object(c.useState)(0),L=Object(a.a)(C,2),z=L[0],w=L[1],V=function(){var n=Object(o.a)(g);console.log("\u6d4b\u8bd5\u6570\u636e",n);var a=function(t,n){var a=[].concat(Object(o.a)(t),Object(o.a)(n)),c=Number.MIN_VALUE,i=Number.MAX_VALUE,u=Number.MIN_VALUE,s=Number.MAX_VALUE;return a.forEach((function(t){t.x>c&&(c=t.x),t.y>u&&(u=t.y),t.x<i&&(i=t.x),t.y<s&&(s=t.y)})),{meanRandomList:t=t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{x:e(t.x,i,c),y:e(t.y,s,u)})})),meanTestList:n=n.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{x:e(t.x,i,c),y:e(t.y,s,u)})}))}}(m,n),c=a.meanRandomList,i=a.meanTestList;console.log("\u5f52\u4e00\u5316\u540e\u7684\u8bad\u7ec3\u6570\u636e",c),console.log("\u5f52\u4e00\u5316\u540e\u7684\u6d4b\u8bd5\u6570\u636e",i);var u=function(t){for(var e=Math.floor(t.length/5),n=[],r=function(r){for(var a=[],c=function(n){var c=Object(o.a)(t),i=c.splice(n*e,e),u=0;i.forEach((function(t){t.type===p(c,r,t.x,t.y)&&u++})),a.push(u/(4===n?t.length-4*e:e))},i=0;i<5;i++)c(i);var u=0;a.forEach((function(t){u+=t})),n.push(u/5),console.log("k = ".concat(r," \u7684\u6b63\u786e\u7387: ").concat(u/5))},a=1;a<=20;a+=2)r(a);var c=0,i=0;return n.forEach((function(t,e){t>c&&(c=t,i=2*e+1)})),i}(c);w(u),console.log("\u7528\u8bad\u7ec3\u6570\u636e\u4ea4\u53c9\u9a8c\u8bc1\u5f97\u5230\u7684 k \u503c",u),console.log("\u7528 knn \u8ba1\u7b97\u5230\u6bcf\u4e2a\u70b9\u7684\u8ddd\u79bb\uff0c\u8fd4\u56de\u6743\u91cd\u6700\u5927\u7684\u5206\u7c7b\uff1a"),i.forEach((function(t,e){var r=p(c,u,t.x,t.y);n[e].type=r,console.log("[".concat(n[e].x,", ").concat(n[e].y,"]: ").concat(r))})),function(e,n){var r=t.current,o=s.init(r),a="black",c="orange",i="red",u={xAxis:{},yAxis:{},series:[{symbolSize:20,data:e.filter((function(t){return"I\u7c7b"===t.type})).map((function(t){return[t.x,t.y]})),color:a,type:"scatter"},{symbolSize:20,data:e.filter((function(t){return"II\u7c7b"===t.type})).map((function(t){return[t.x,t.y]})),color:c,type:"scatter"},{symbolSize:20,data:e.filter((function(t){return"III\u7c7b"===t.type})).map((function(t){return[t.x,t.y]})),color:i,type:"scatter"},{symbolSize:20,data:n.filter((function(t){return"I\u7c7b"===t.type})).map((function(t){return[t.x,t.y]})),color:"transparent",type:"scatter",itemStyle:{borderColor:a,borderWidth:3}},{symbolSize:20,data:n.filter((function(t){return"II\u7c7b"===t.type})).map((function(t){return[t.x,t.y]})),color:"transparent",type:"scatter",itemStyle:{borderColor:c,borderWidth:3}},{symbolSize:20,data:n.filter((function(t){return"III\u7c7b"===t.type})).map((function(t){return[t.x,t.y]})),color:"transparent",type:"scatter",itemStyle:{borderColor:i,borderWidth:3}}]};o.setOption(u)}(m,n),console.log("------------------------------------")};return Object(l.jsxs)("div",{className:u.a.video,children:[Object(l.jsxs)("div",{className:u.a.lookTab,children:[Object(l.jsx)("input",{className:u.a.inputTest,type:"text",value:S,onChange:function(t){E(t.target.value)}}),Object(l.jsx)("input",{className:u.a.inputTest,type:"text",value:A,onChange:function(t){T(t.target.value)}}),Object(l.jsx)("button",{className:u.a.button,onClick:function(){!function(){var t=[].concat(Object(o.a)(g),[{x:S,y:A}]);_(t)}()},children:"\u52a0\u5165\u6d4b\u8bd5\u6570\u636e"}),Object(l.jsx)("input",{className:u.a.inputTest,type:"text",value:f,onChange:function(t){b(t.target.value)}}),Object(l.jsx)("button",{className:u.a.button,onClick:function(){h()},children:"\u5237\u65b0\u8bad\u7ec3\u6570\u636e"}),Object(l.jsxs)("div",{children:["\u4ea4\u53c9\u9a8c\u8bc1\u540e\u7684 K \u503c\uff1a",z]})]}),Object(l.jsx)("div",{className:u.a.ringBox,children:Object(l.jsx)("div",{ref:t,className:u.a.ring})})]})}},510:function(t,e,n){t.exports={video:"knn_video__38eHu",lookTab:"knn_lookTab__CDu_s",inputTest:"knn_inputTest__3eYVH",button:"knn_button__zFAFF",ringBox:"knn_ringBox__1CVjc",ring:"knn_ring__2EKB4"}}}]);