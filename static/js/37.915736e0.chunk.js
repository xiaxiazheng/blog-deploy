(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[37],{377:function(e,t,n){"use strict";n.r(t);n(0);var r=n(1);t.default=function(e){e.style;return Object(r.jsx)("div",{children:"\u4e00\u5f20\u56fe\u7247"})}},378:function(e,t,n){"use strict";n.r(t);n(0);var r=n(1);t.default=function(e){var t=e.formData.title;return Object(r.jsx)("h2",{style:{},children:t||"\u5934\u90e8\u6807\u9898"})}},390:function(e,t,n){"use strict";n.r(t),n.d(t,"componentsList",(function(){return i}));var r=n(377),c=n(378),i=[{type:"image",Component:r.default,formItems:[{key:"image_url",label:"\u56fe\u7247\u94fe\u63a5",type:"Input"}],formData:{image_url:"\u9ed8\u8ba4\u56fe\u7247"}},{type:"header",Component:c.default,formItems:[{key:"title",label:"\u6807\u9898",type:"Input"}],formData:{title:"\u9ed8\u8ba4\u6807\u9898"}}]},453:function(e,t,n){"use strict";n.r(t);n(71);var r=n(70),c=(n(256),n(255)),i=n(5),o=n(86),a=n(267),s=n(0),d=n.n(s),u=n(503),l=n.n(u),j=n(154),b=n(504),f=n.n(b),m=n(535),O=n(534),v=n(529),h=n(515),x=n(505),p=n.n(x),g=n(390),y=n(1),_="formItem",k=function(e){var t=e.item,n=Object(O.a)({type:_,item:t}),r=Object(i.a)(n,2),c=(r[0],r[1]);return Object(y.jsx)("div",{ref:c,children:e.children})},C=function(e){var t=e.handleDrop,n=Object(m.a)({accept:_,drop:function(e,n){t(e)},collect:function(e){return{isOver:e.isOver()}}}),r=Object(i.a)(n,2),c=r[0].isOver,o=r[1];return Object(y.jsx)("div",{ref:o,style:c?{background:"#ccc"}:{},children:e.children})},E=function(e){var t=e.id,n=e.index,r=e.moveCard,c=Object(s.useRef)(null),o=Object(m.a)({accept:"box",collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var i;if(c.current){var o=e.index,a=n;if(o!==a){var s=null===(i=c.current)||void 0===i?void 0:i.getBoundingClientRect(),d=(s.bottom-s.top)/2,u=t.getClientOffset().y-s.top;o<a&&u<d||o>a&&u>d||(r(o,a),e.index=a)}}}}),a=Object(i.a)(o,2),d=a[0].handlerId,u=a[1],l=Object(O.a)({type:"box",item:function(){return{id:t,index:n}},collect:function(e){return{isDragging:e.isDragging()}}}),j=Object(i.a)(l,3),b=j[0].isDragging,v=j[1],h=b?0:1;return(0,j[2])(v(u(c))),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("span",{className:f.a.handleMove,ref:c,style:{opacity:h},"data-handler-id":d,children:e.children})})},w=function(e){var t=e.cards,n=e.setCards,r=Object(s.useCallback)((function(e,r){var c=t[e];n(p()(t,{$splice:[[e,1],[r,0,c]]}))}),[t]);return Object(y.jsx)(v.a,{backend:h.a,children:Object(y.jsxs)("div",{className:f.a.dnd_sort,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"\u5f85\u9009\u533a"}),Object(y.jsx)("div",{className:f.a.source,children:g.componentsList.map((function(e,t){var n=e.Component;return Object(y.jsx)(k,{item:e,children:Object(y.jsx)(n,Object(o.a)({},e))},t)}))})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"\u9884\u89c8\u533a"}),Object(y.jsx)(C,{handleDrop:function(e){var r=Object(j.a)(t);r.push(Object(o.a)({id:Math.floor(1e5*Math.random())},e)),console.log(r),n(r)},children:Object(y.jsx)("div",{className:f.a.preview,children:t.map((function(t,n){return Object(y.jsx)(E,{index:n,id:t.id,moveCard:r,children:e.render(t)},t.id)}))})})]})]})})},D=function(e){var t=Object(s.useRef)(null),n=Object(s.useState)(),r=Object(i.a)(n,2),c=r[0],o=r[1],a=Object(s.useState)(),d=Object(i.a)(a,2),u=d[0],l=d[1],j=Object(s.useState)(!1),b=Object(i.a)(j,2),f=b[0],m=b[1],O=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e,n,r=0,c=0,i=0,a=0,s=function(e){r=t.current.offsetWidth,c=t.current.offsetHeight,i=e.clientX,a=e.clientY,document.documentElement.addEventListener("mousemove",u,!1)},d=function(e){document.documentElement.removeEventListener("mousemove",u,!1)},u=function(e){var n=r+e.clientX-i;t.current.style.width="".concat(n,"px"),o(n);var s=c+e.clientY-a;t.current.style.height="".concat(s,"px"),l(s)};f?(null===(e=O.current)||void 0===e||e.addEventListener("mousedown",s,!1),document.documentElement.addEventListener("mouseup",d,!1)):(null===(n=O.current)||void 0===n||n.removeEventListener("mousedown",s,!1),document.documentElement.removeEventListener("mouseup",d,!1))}),[f]),Object(y.jsxs)("span",{ref:t,style:{position:"relative",display:"inline-block",border:f?"1px solid black":"none",boxSizing:"border-box"},onDoubleClick:function(){return m((function(e){return!e}))},children:[e.render(c,u),f&&Object(y.jsx)("span",{ref:O,style:{position:"absolute",backgroundColor:"black",display:"inline-block",width:4,height:4,bottom:0,right:0,cursor:"se-resize"}})]})},I=(n(102),n(108)),L=["style"],N=["item"],F={Input:function(e){var t=e.style,n=Object(a.a)(e,L);return Object(y.jsx)(I.a,Object(o.a)({style:t},n))},Button:function(e){var t=e.style;return Object(y.jsx)(r.a,{style:t,children:"\u6309\u94ae"})}},M=function(e){var t=e.item,n=Object(a.a)(e,N),r=n.value;console.log(r);var c=F[t.type];return d.a.cloneElement(Object(y.jsx)(c,Object(o.a)({},n)))},S=["type"],J=function(e){var t=e.type,r=Object(a.a)(e,S),c=d.a.lazy((function(){return n(509)("./".concat(t))}));return Object(y.jsx)(D,{render:function(e,t){return Object(y.jsx)(c,Object(o.a)(Object(o.a)({},r),{},{style:{width:e,height:t}}))}})};t.default=function(){var e,t=c.a.useForm(),n=Object(i.a)(t,1)[0],a=Object(s.useState)([]),d=Object(i.a)(a,2),u=d[0],j=d[1];Object(s.useEffect)((function(){console.log("cards",u)}),[u]);var b,f=Object(s.useState)(),m=Object(i.a)(f,2),O=m[0],v=m[1];return Object(y.jsxs)("div",{className:l.a.h5,children:[Object(y.jsx)("div",{children:Object(y.jsx)(w,{cards:u,setCards:j,render:function(e){return Object(y.jsx)("span",{onClick:function(){var t;v(e.id),n.setFieldsValue((null===(t=u.find((function(t){return t.id===e.id})))||void 0===t?void 0:t.formData)||{})},children:J(e)})}})}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{style:{padding:30},children:[Object(y.jsx)("div",{style:{marginBottom:50},children:"\u7f16\u8f91\u5c5e\u6027"}),O&&Object(y.jsxs)(c.a,{form:n,onFinish:function(e){console.log("activeCardId",O),console.log(e);var t=u.map((function(t){return t.id!==O?t:Object(o.a)(Object(o.a)({},t),{},{formData:e})}));j(t)},children:[(b=(null===(e=u.find((function(e){return e.id===O})))||void 0===e?void 0:e.formItems)||[],b.map((function(e,t){return Object(y.jsx)(c.a.Item,{name:e.key,label:e.label,children:Object(y.jsx)(M,{item:e})},t)}))),Object(y.jsx)(r.a,{htmlType:"submit",children:"\u63d0\u4ea4\u4fee\u6539"})]})]})})]})}},503:function(e,t,n){e.exports={h5:"h5_h5__2mwi8"}},504:function(e,t,n){e.exports={handleMove:"dnd-sort_handleMove__7dVJI",dnd_sort:"dnd-sort_dnd_sort__3VJTj",preview:"dnd-sort_preview__1iNK_",source:"dnd-sort_source__2jFxO"}},509:function(e,t,n){var r={"./":390,"./header":378,"./header/":378,"./header/index":378,"./header/index.tsx":378,"./image":377,"./image/":377,"./image/index":377,"./image/index.tsx":377,"./index":390,"./index.tsx":390};function c(e){return Promise.resolve().then((function(){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n(r[e])}))}c.keys=function(){return Object.keys(r)},c.id=509,e.exports=c}}]);