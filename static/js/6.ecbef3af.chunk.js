(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[6],{210:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(6),c=n(51),r=n(52),o=n(65),i=n(0),l=n.n(i),s=n(50),u=n.n(s),f=n(76),b=n(148),p=n(58),d=function e(t){return Object(p.a)(this,e),new Error("unreachable case: ".concat(JSON.stringify(t)))},m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},g=function(e){return i.createElement(b.a,null,(function(t){var n,r=t.getPrefixCls,o=t.direction,l=e.prefixCls,s=e.size,f=e.className,b=m(e,["prefixCls","size","className"]),p=r("btn-group",l),g="";switch(s){case"large":g="lg";break;case"small":g="sm";break;case"middle":case void 0:break;default:console.warn(new d(s))}var O=u()(p,(n={},Object(c.a)(n,"".concat(p,"-").concat(g),g),Object(c.a)(n,"".concat(p,"-rtl"),"rtl"===o),n),f);return i.createElement("div",Object(a.a)({},b,{className:O}))}))},O=n(225),v=n(136),y=n(80),h=n(82),j=n(94),E=n(102),x=function(){return{width:0,opacity:0,transform:"scale(0)"}},w=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},k=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?l.a.createElement("span",{className:"".concat(t,"-loading-icon")},l.a.createElement(E.a,null)):l.a.createElement(j.b,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:x,onAppearActive:w,onEnterStart:x,onEnterActive:w,onLeaveStart:w,onLeaveActive:x},(function(e,n){var a=e.className,c=e.style;return l.a.createElement("span",{className:"".concat(t,"-loading-icon"),style:c,ref:n},l.a.createElement(E.a,{className:a}))}))},C=n(86),N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},S=/^[\u4e00-\u9fa5]{2}$/,P=S.test.bind(S);function T(e){return"text"===e||"link"===e}function A(e,t){if(null!=e){var n,a=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&P(e.props.children)?Object(C.a)(e,{children:e.props.children.split("").join(a)}):"string"===typeof e?P(e)?i.createElement("span",null,e.split("").join(a)):i.createElement("span",null,e):(n=e,i.isValidElement(n)&&n.type===i.Fragment?i.createElement("span",null,e):e)}}Object(v.a)("default","primary","ghost","dashed","link","text"),Object(v.a)("circle","round"),Object(v.a)("submit","button","reset");function I(e){return"danger"===e?{danger:!0}:{type:e}}var B=function(e,t){var n,l,s=e.loading,p=void 0!==s&&s,d=e.prefixCls,m=e.type,g=e.danger,v=e.shape,j=e.size,E=e.className,x=e.children,w=e.icon,C=e.ghost,S=void 0!==C&&C,I=e.block,B=void 0!==I&&I,z=e.htmlType,R=void 0===z?"button":z,J=N(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),L=i.useContext(h.b),_=i.useState(!!p),D=Object(r.a)(_,2),F=D[0],G=D[1],U=i.useState(!1),V=Object(r.a)(U,2),W=V[0],$=V[1],q=i.useContext(b.b),H=q.getPrefixCls,K=q.autoInsertSpaceInButton,M=q.direction,Q=t||i.createRef(),X=i.useRef(),Y=function(){return 1===i.Children.count(x)&&!w&&!T(m)};l="object"===Object(o.a)(p)&&p.delay?p.delay||!0:!!p,i.useEffect((function(){clearTimeout(X.current),"number"===typeof l?X.current=window.setTimeout((function(){G(l)}),l):G(l)}),[l]),i.useEffect((function(){if(Q&&Q.current&&!1!==K){var e=Q.current.textContent;Y()&&P(e)?W||$(!0):W&&$(!1)}}),[Q]);var Z=function(t){var n,a=e.onClick,c=e.disabled;F||c?t.preventDefault():null===(n=a)||void 0===n||n(t)};Object(y.a)(!("string"===typeof w&&w.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(w,"` at https://ant.design/components/icon")),Object(y.a)(!(S&&T(m)),"Button","`link` or `text` button can't be a `ghost` button.");var ee=H("btn",d),te=!1!==K,ne="";switch(j||L){case"large":ne="lg";break;case"small":ne="sm"}var ae=F?"loading":w,ce=u()(ee,(n={},Object(c.a)(n,"".concat(ee,"-").concat(m),m),Object(c.a)(n,"".concat(ee,"-").concat(v),v),Object(c.a)(n,"".concat(ee,"-").concat(ne),ne),Object(c.a)(n,"".concat(ee,"-icon-only"),!x&&0!==x&&!!ae),Object(c.a)(n,"".concat(ee,"-background-ghost"),S&&!T(m)),Object(c.a)(n,"".concat(ee,"-loading"),F),Object(c.a)(n,"".concat(ee,"-two-chinese-chars"),W&&te),Object(c.a)(n,"".concat(ee,"-block"),B),Object(c.a)(n,"".concat(ee,"-dangerous"),!!g),Object(c.a)(n,"".concat(ee,"-rtl"),"rtl"===M),n),E),re=w&&!F?w:i.createElement(k,{existIcon:!!w,prefixCls:ee,loading:!!F}),oe=x||0===x?function(e,t){var n=!1,a=[];return i.Children.forEach(e,(function(e){var t=Object(o.a)(e),c="string"===t||"number"===t;if(n&&c){var r=a.length-1,i=a[r];a[r]="".concat(i).concat(e)}else a.push(e);n=c})),i.Children.map(a,(function(e){return A(e,t)}))}(x,Y()&&te):null,ie=Object(f.a)(J,["navigate"]);if(void 0!==ie.href)return i.createElement("a",Object(a.a)({},ie,{className:ce,onClick:Z,ref:Q}),re,oe);var le=i.createElement("button",Object(a.a)({},J,{type:R,className:ce,onClick:Z,ref:Q}),re,oe);return T(m)?le:i.createElement(O.a,null,le)},z=i.forwardRef(B);z.displayName="Button",z.Group=g,z.__ANT_BUTTON=!0;t.b=z},245:function(e,t,n){},72:function(e,t,n){"use strict";var a=n(210);t.a=a.b},73:function(e,t,n){"use strict";n(64),n(245)}}]);