(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[10],{111:function(e,t,a){"use strict";var n=a(55),c=a.n(n),r=a(136),o=a(56),i=a(5),s=a(0),u=a(320),p=a(738),l=a(705),d=a(104),f=a(526),b=a(11),m=a(15),j=a(130),h=a.n(j),O=a(101),v=a(88),x=a.n(v),g=a(1);t.a=function(e){var t=e.type,a=e.refresh,n=e.other_id,j=void 0===n?"":n,v=e.width,_=void 0===v?"170px":v,y=Object(s.useContext)(m.a).username,w=Object(s.useState)(),k=Object(i.a)(w,2),D=k[0],N=k[1],C=Object(s.useState)(),M=Object(i.a)(C,2),I=M[0],Y=M[1],S=Object(s.useState)(),E=Object(i.a)(S,2),H=E[0],F=E[1],T=function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,o,i,s,p,l,d,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.read();case 2:t=e.sent,a=!1,n=Object(r.a)(t),e.prev=5,n.s();case 7:if((o=n.n()).done){e.next=34;break}i=o.value,s=Object(r.a)(i.types),e.prev=10,s.s();case 12:if((p=s.n()).done){e.next=24;break}if(l=p.value,a||-1===l.indexOf("image")){e.next=22;break}return console.log("clipboardItem",i),a=!0,e.next=19,i.getType(l);case 19:d=e.sent,f=new File([d],x()().format("YYYY-MM-DD HH:mm:ss")+"."+l.split("/").pop(),{type:d.type}),B(f);case 22:e.next=12;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(10),s.e(e.t0);case 29:return e.prev=29,s.f(),e.finish(29);case 32:e.next=7;break;case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(5),n.e(e.t1);case 39:return e.prev=39,n.f(),e.finish(39);case 42:a||u.a.warning("\u8bf7\u5148\u622a\u56fe\uff0c\u518d\u7c98\u8d34");case 43:case"end":return e.stop()}}),e,null,[[5,36,39,42],[10,26,29,32]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=prompt("\u8bf7\u8f93\u5165\u5c06\u4e0a\u4f20\u7684\u56fe\u7247\u7684 url"))||""===t){e.next=6;break}return e.next=4,fetch(t).then((function(e){return e.blob()})).then((function(e){return e.type.includes("images")?new File([e],x()().format("YYYY-MM-DD HH:mm:ss")+"."+e.type.split("/").pop(),{type:e.type}):(u.a.error("\u8bf7\u8f93\u5165\u56fe\u7247\u7684 url\uff0c\u5f53\u524d url \u6293\u4e0d\u5230\u56fe\u7247"),!1)}));case 4:(a=e.sent)&&B(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=Object(s.useState)(!1),U=Object(i.a)(P,2),W=U[0],z=U[1],B=function(e){z(!0);var n=new FormData;n.append("other_id",j),n.append("username",y),n.append(t,e),fetch("".concat(b.d,"/api/").concat(t,"_upload"),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){u.a.success(e.message),a()})).catch((function(e){console.log(e)})).finally((function(){z(!1)}))};return Object(g.jsx)("div",{className:h.a.uploadWrapper,style:{width:"".concat(_),height:"".concat(_)},children:Object(g.jsx)(p.a,{className:h.a.upload,style:{width:"".concat(_),height:"".concat(_)},name:t,showUploadList:!1,action:"".concat(b.d,"/api/").concat(t,"_upload"),data:{other_id:j,username:y},beforeUpload:function(e){return N(e.name),Y(0),F(e.size),!0},listType:"picture-card",onChange:function(e){"uploading"===e.file.status&&Y(e.file.percent),"done"===e.file.status&&(u.a.success("\u4e0a\u4f20\u56fe\u7247\u6210\u529f"),N(void 0),a()),"error"===e.file.status&&u.a.error("\u4e0a\u4f20\u56fe\u7247\u5931\u8d25")},children:D?Object(g.jsxs)("div",{className:h.a.progress,children:[Object(g.jsx)("div",{className:h.a.name,children:D}),Object(g.jsx)("div",{children:Object(O.b)(H||0)}),Object(g.jsxs)("div",{children:["\u8fdb\u5ea6\uff1a",(I||0).toFixed(1),"%"]}),Object(g.jsx)(l.a,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:I,status:"active"})]}):Object(g.jsxs)("div",{className:h.a.beforeUpload,children:[Object(g.jsx)(f.a,{className:h.a.addIcon}),"\u70b9\u51fb\u4e0a\u4f20\u56fe\u7247/\u6587\u4ef6",Object(g.jsx)(d.a,{className:h.a.parseButton,onClick:function(e){T(),e.preventDefault(),e.stopPropagation()},loading:W,children:"\u7c98\u8d34\u56fe\u7247"}),Object(g.jsx)(d.a,{onClick:function(e){A(),e.preventDefault(),e.stopPropagation()},loading:W,children:"\u7c98\u8d34\u94fe\u63a5"})]})})})}},130:function(e,t,a){e.exports={uploadWrapper:"file-image-upload_uploadWrapper__1HNB_",upload:"file-image-upload_upload__1o4vw",addIcon:"file-image-upload_addIcon__M8biy",progress:"file-image-upload_progress__2z4Sh",name:"file-image-upload_name__3s7jm"}},286:function(e,t,a){"use strict";var n=a(49);t.a=function(e){var t;return Object(n.a)({},e.componentCls,(t={},Object(n.a)(t,"".concat(e.antCls,"-motion-collapse-legacy"),{overflow:"hidden","&-active":{transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}}),Object(n.a)(t,"".concat(e.antCls,"-motion-collapse"),{overflow:"hidden",transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}),t))}},588:function(e,t,a){e.exports={Admin:"admin_Admin__1NnTj"}},727:function(e,t,a){"use strict";a.r(t);var n=a(55),c=a.n(n),r=a(56),o=a(5),i=a(0),s=a(188),u=a(140),p=a(588),l=a.n(p),d=a(15),f=a(111),b=a(1),m=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],p=Object(i.useContext)(d.a).username;Object(i.useEffect)((function(){m()}),[]);var m=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)("main",p);case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:l.a.Admin,children:[Object(b.jsx)(f.a,{type:"main",refresh:m}),Object(b.jsx)(u.a,{type:"main",imageList:a,refresh:m})]})};t.default=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(m,{})})}}}]);