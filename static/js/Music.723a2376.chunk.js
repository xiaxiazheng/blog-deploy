(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[17],{718:function(e,t,c){e.exports={music:"music_music__1lgFb",keyword:"music_keyword__1wQna",playerBox:"music_playerBox__2GZpr",musicList:"music_musicList__2QWzW",songItem:"music_songItem__3_JAw",active:"music_active__3Alul"}},759:function(e,t,c){"use strict";c.r(t);var a=c(13),n=c.n(a),s=c(20),i=c(7),r=c(0),u=c(740),o=c(398),l=c(395),j=c(718),b=c.n(j),m=c(190),f=c(338),O=c(10);t.default=function(){Object(m.a)("\u97f3\u4e50\u64ad\u653e\u5668");var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],j=Object(r.useState)([]),d=Object(i.a)(j,2),v=d[0],_=d[1],p=Object(r.useState)([]),x=Object(i.a)(p,2),y=x[0],g=x[1],k=Object(r.useState)(),h=Object(i.a)(k,2),w=h[0],S=h[1],L=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)();case 2:(t=e.sent)&&(c=t.filter((function(e){return e.mimeType.includes("audio")})),_(c),g(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){L()}),[]),Object(r.useEffect)((function(){_(y.filter((function(e){return-1!==e.key.toLowerCase().indexOf(c.toLowerCase())})))}),[c]),Object(O.jsxs)("div",{className:b.a.music,children:[Object(O.jsx)("div",{className:b.a.playerBox,children:Object(O.jsx)(l.a,{activeSong:w,setActiveSong:S})}),Object(O.jsxs)("div",{className:"".concat(b.a.musicList," ScrollBar"),children:[Object(O.jsx)(u.a,{className:b.a.keyword,value:c,onChange:function(e){return a(e.target.value)}}),c&&0===(null===v||void 0===v?void 0:v.length)&&Object(O.jsx)(o.a,{style:{marginTop:30}}),null===v||void 0===v?void 0:v.map((function(e){return Object(O.jsx)("div",{onClick:function(){return S(e)},className:"".concat(b.a.songItem," ").concat(w&&w.key===e.key?b.a.active:""),children:e.key},e.key)}))]})]})}}}]);