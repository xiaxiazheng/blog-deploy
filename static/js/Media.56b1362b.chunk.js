(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[15],{645:function(e,c,t){e.exports={video:"media_video__1PQH8",tabs:"media_tabs__aX2j5",active:"media_active__1o93H",musicBox:"media_musicBox__hcnq1",videoList:"media_videoList__15XQe",videoBox:"media_videoBox__1EBDk"}},767:function(e,c,t){"use strict";t.r(c);var n=t(13),a=t.n(n),i=t(20),r=t(7),s=t(0),o=t(645),u=t.n(o),d=t(342),l=t(43),j=t(407),b=t(192),m=t(10);c.default=function(){Object(b.a)("media"),Object(s.useEffect)((function(){y()}),[]);var e=Object(s.useState)("\u97f3\u4e50"),c=Object(r.a)(e,2),t=c[0],n=c[1],o=Object(s.useState)([]),v=Object(r.a)(o,2),O=v[0],f=v[1],p=Object(s.useState)([]),h=Object(r.a)(p,2),x=h[0],_=h[1],N=Object(s.useState)([]),k=Object(r.a)(N,2),B=k[0],S=k[1],y=function(){var e=Object(i.a)(a.a.mark((function e(){var c,t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)();case 2:(c=e.sent)&&(t=c.filter((function(e){return e.mimeType.includes("audio")})),S(t),f(t),n=c.filter((function(e){return e.mimeType.includes("video")})),_(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=Object(s.useRef)(null),E=Object(s.useState)(),g=Object(r.a)(E,2),w=g[0],L=g[1];Object(s.useEffect)((function(){if(w&&"\u89c6\u9891"===t){var e=C;if(e.current){e.current.childNodes[0].pause(),e.current.childNodes[0].src="",e.current.childNodes[0].childNodes[0].src="",e.current.removeChild(e.current.childNodes[0]);var c=document.createElement("video");c.controls=!0;var n=document.createElement("source");n.src="".concat(l.b,"/").concat(w.key),n.type=w.mimeType,c.appendChild(n),e.current.appendChild(c)}}}),[w]);var T=function(e){L(e),X(!1)},H=function(){return Object(m.jsx)(m.Fragment,{children:O&&O.map((function(e){return Object(m.jsx)("span",{onClick:T.bind(null,e),className:w===e?u.a.active:"",children:e.key},e.key)}))})},J=Object(s.useState)(!1),Q=Object(r.a)(J,2),X=(Q[0],Q[1]);return Object(m.jsxs)("div",{className:"".concat(u.a.video," ScrollBar"),children:["\u97f3\u4e50"===t&&Object(m.jsx)("div",{className:u.a.musicBox,children:Object(m.jsx)(j.a,{activeSong:w})}),Object(m.jsx)("div",{className:u.a.tabs,children:["\u97f3\u4e50","\u89c6\u9891"].map((function(e){return Object(m.jsx)("span",{className:e===t?u.a.active:"",onClick:function(){return function(e){n(e),L(void 0),f("\u97f3\u4e50"===e?B:x)}(e)},children:e},e)}))}),Object(m.jsx)("div",{className:"".concat(u.a.videoList," ScrollBar"),children:Object(m.jsx)(H,{})}),"\u89c6\u9891"===t&&Object(m.jsx)("div",{className:u.a.videoBox,ref:C,children:Object(m.jsx)("audio",{controls:!0,children:Object(m.jsx)("source",{src:""})})})]})}}}]);