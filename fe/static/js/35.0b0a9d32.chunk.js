(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[35],{291:function(e,t,n){"use strict";n.r(t);n(0);var r=n(10);t.default=function(e){e.style;return Object(r.jsx)("div",{children:"\u4e00\u5f20\u56fe\u7247"})}},292:function(e,t,n){"use strict";n.r(t);n(0);var r=n(10);t.default=function(e){var t=e.formData.title;return Object(r.jsx)("h2",{style:{},children:t||"\u5934\u90e8\u6807\u9898"})}},317:function(e,t,n){"use strict";n.r(t),n.d(t,"componentsList",(function(){return i}));var r=n(291),c=n(292),i=[{type:"image",Component:r.default,formItems:[{key:"image_url",label:"\u56fe\u7247\u94fe\u63a5",type:"Input"}],formData:{image_url:"\u9ed8\u8ba4\u56fe\u7247"}},{type:"header",Component:c.default,formItems:[{key:"title",label:"\u6807\u9898",type:"Input"}],formData:{title:"\u9ed8\u8ba4\u6807\u9898"}}]},463:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(188),i=n(263),o=n(0),a=n.n(o),s=n(705),d=n.n(s),u=n(197),l=n(706),j=n.n(l),b=n(754),f=n(753),m=n(748),O=n(721),v=n(707),h=n.n(v),x=n(317),p=n(10),g="formItem",y=function(e){var t=e.item,n=Object(f.a)({type:g,item:t}),c=Object(r.a)(n,2),i=(c[0],c[1]);return Object(p.jsx)("div",{ref:i,children:e.children})},_=function(e){var t=e.handleDrop,n=Object(b.a)({accept:g,drop:function(e,n){t(e)},collect:function(e){return{isOver:e.isOver()}}}),c=Object(r.a)(n,2),i=c[0].isOver,o=c[1];return Object(p.jsx)("div",{ref:o,style:i?{background:"#ccc"}:{},children:e.children})},k=function(e){var t=e.id,n=e.index,c=e.moveCard,i=Object(o.useRef)(null),a=Object(b.a)({accept:"box",collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var r;if(i.current){var o=e.index,a=n;if(o!==a){var s=null===(r=i.current)||void 0===r?void 0:r.getBoundingClientRect(),d=(s.bottom-s.top)/2,u=t.getClientOffset().y-s.top;o<a&&u<d||o>a&&u>d||(c(o,a),e.index=a)}}}}),s=Object(r.a)(a,2),d=s[0].handlerId,u=s[1],l=Object(f.a)({type:"box",item:function(){return{id:t,index:n}},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(r.a)(l,3),O=m[0].isDragging,v=m[1],h=O?0:1;return(0,m[2])(v(u(i))),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("span",{className:j.a.handleMove,ref:i,style:{opacity:h},"data-handler-id":d,children:e.children})})},C=function(e){var t=e.cards,n=e.setCards,r=Object(o.useCallback)((function(e,r){var c=t[e];n(h()(t,{$splice:[[e,1],[r,0,c]]}))}),[t]);return Object(p.jsx)(m.a,{backend:O.a,children:Object(p.jsxs)("div",{className:j.a.dnd_sort,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"\u5f85\u9009\u533a"}),Object(p.jsx)("div",{className:j.a.source,children:x.componentsList.map((function(e,t){var n=e.Component;return Object(p.jsx)(y,{item:e,children:Object(p.jsx)(n,Object(c.a)({},e))},t)}))})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"\u9884\u89c8\u533a"}),Object(p.jsx)(_,{handleDrop:function(e){var r=Object(u.a)(t);r.push(Object(c.a)({id:Math.floor(1e5*Math.random())},e)),console.log(r),n(r)},children:Object(p.jsx)("div",{className:j.a.preview,children:t.map((function(t,n){return Object(p.jsx)(k,{index:n,id:t.id,moveCard:r,children:e.render(t)},t.id)}))})})]})]})})},E=n(718),D=n(176),w=function(e){var t=Object(o.useRef)(null),n=Object(o.useState)(),c=Object(r.a)(n,2),i=c[0],a=c[1],s=Object(o.useState)(),d=Object(r.a)(s,2),u=d[0],l=d[1],j=Object(o.useState)(!1),b=Object(r.a)(j,2),f=b[0],m=b[1],O=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e,n,r=0,c=0,i=0,o=0,s=function(e){r=t.current.offsetWidth,c=t.current.offsetHeight,i=e.clientX,o=e.clientY,document.documentElement.addEventListener("mousemove",u,!1)},d=function(e){document.documentElement.removeEventListener("mousemove",u,!1)},u=function(e){var n=r+e.clientX-i;t.current.style.width="".concat(n,"px"),a(n);var s=c+e.clientY-o;t.current.style.height="".concat(s,"px"),l(s)};f?(null===(e=O.current)||void 0===e||e.addEventListener("mousedown",s,!1),document.documentElement.addEventListener("mouseup",d,!1)):(null===(n=O.current)||void 0===n||n.removeEventListener("mousedown",s,!1),document.documentElement.removeEventListener("mouseup",d,!1))}),[f]),Object(p.jsxs)("span",{ref:t,style:{position:"relative",display:"inline-block",border:f?"1px solid black":"none",boxSizing:"border-box"},onDoubleClick:function(){return m((function(e){return!e}))},children:[e.render(i,u),f&&Object(p.jsx)("span",{ref:O,style:{position:"absolute",backgroundColor:"black",display:"inline-block",width:4,height:4,bottom:0,right:0,cursor:"se-resize"}})]})},I=n(724),L=["style"],N=["item"],M={Input:function(e){var t=e.style,n=Object(i.a)(e,L);return Object(p.jsx)(I.a,Object(c.a)({style:t},n))},Button:function(e){var t=e.style;return Object(p.jsx)(D.a,{style:t,children:"\u6309\u94ae"})}},S=function(e){var t=e.item,n=Object(i.a)(e,N),r=n.value;console.log(r);var o=M[t.type];return a.a.cloneElement(Object(p.jsx)(o,Object(c.a)({},n)))},F=["type"],R=function(e){var t=e.type,r=Object(i.a)(e,F),o=a.a.lazy((function(){return n(711)("./".concat(t))}));return Object(p.jsx)(w,{render:function(e,t){return Object(p.jsx)(o,Object(c.a)(Object(c.a)({},r),{},{style:{width:e,height:t}}))}})};t.default=function(){var e,t=E.a.useForm(),n=Object(r.a)(t,1)[0],i=Object(o.useState)([]),a=Object(r.a)(i,2),s=a[0],u=a[1];Object(o.useEffect)((function(){console.log("cards",s)}),[s]);var l,j=Object(o.useState)(),b=Object(r.a)(j,2),f=b[0],m=b[1];return Object(p.jsxs)("div",{className:d.a.h5,children:[Object(p.jsx)("div",{children:Object(p.jsx)(C,{cards:s,setCards:u,render:function(e){return Object(p.jsx)("span",{onClick:function(){var t;m(e.id),n.setFieldsValue((null===(t=s.find((function(t){return t.id===e.id})))||void 0===t?void 0:t.formData)||{})},children:R(e)})}})}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{style:{padding:30},children:[Object(p.jsx)("div",{style:{marginBottom:50},children:"\u7f16\u8f91\u5c5e\u6027"}),f&&Object(p.jsxs)(E.a,{form:n,onFinish:function(e){console.log("activeCardId",f),console.log(e);var t=s.map((function(t){return t.id!==f?t:Object(c.a)(Object(c.a)({},t),{},{formData:e})}));u(t)},children:[(l=(null===(e=s.find((function(e){return e.id===f})))||void 0===e?void 0:e.formItems)||[],l.map((function(e,t){return Object(p.jsx)(E.a.Item,{name:e.key,label:e.label,children:Object(p.jsx)(S,{item:e})},t)}))),Object(p.jsx)(D.a,{htmlType:"submit",children:"\u63d0\u4ea4\u4fee\u6539"})]})]})})]})}},705:function(e,t,n){e.exports={h5:"h5_h5__1f1du"}},706:function(e,t,n){e.exports={handleMove:"dnd-sort_handleMove__109di",dnd_sort:"dnd-sort_dnd_sort__2hy5V",preview:"dnd-sort_preview__3JYeP",source:"dnd-sort_source__ld93c"}},711:function(e,t,n){var r={"./":317,"./header":292,"./header/":292,"./header/index":292,"./header/index.tsx":292,"./image":291,"./image/":291,"./image/index":291,"./image/index.tsx":291,"./index":317,"./index.tsx":317};function c(e){return Promise.resolve().then((function(){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n(r[e])}))}c.keys=function(){return Object.keys(r)},c.id=711,e.exports=c}}]);