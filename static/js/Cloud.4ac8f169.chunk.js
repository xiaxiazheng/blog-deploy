(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[13],{110:function(e,t,n){"use strict";n(215);var r=n(217),a=(n(69),n(66)),c=(n(202),n(203)),o=n(55),i=n.n(o),s=n(146),u=n(56),l=(n(65),n(62)),d=n(5),f=n(0),p=n(392),b=n(8),j=n(16),h=n(125),m=n.n(h),x=n(112),O=n(216),_=n.n(O),v=n(1);t.a=function(e){var t=e.type,n=e.refresh,o=e.other_id,h=void 0===o?"":o,O=e.width,g=void 0===O?"170px":O,w=Object(f.useContext)(j.a).username,y=Object(f.useState)(),k=Object(d.a)(y,2),N=k[0],I=k[1],C=Object(f.useState)(),F=Object(d.a)(C,2),L=F[0],S=F[1],T=Object(f.useState)(),B=Object(d.a)(T,2),M=B[0],A=B[1],P=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a,c,o,u,d,f,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.read();case 2:t=e.sent,n=!1,r=Object(s.a)(t),e.prev=5,r.s();case 7:if((a=r.n()).done){e.next=34;break}c=a.value,o=Object(s.a)(c.types),e.prev=10,o.s();case 12:if((u=o.n()).done){e.next=24;break}if(d=u.value,n||-1===d.indexOf("image")){e.next=22;break}return console.log("clipboardItem",c),n=!0,e.next=19,c.getType(d);case 19:f=e.sent,p=new File([f],_()().format("YYYY-MM-DD HH:mm:ss")+"."+d.split("/").pop(),{type:f.type}),R(p);case 22:e.next=12;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(10),o.e(e.t0);case 29:return e.prev=29,o.f(),e.finish(29);case 32:e.next=7;break;case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(5),r.e(e.t1);case 39:return e.prev=39,r.f(),e.finish(39);case 42:n||l.b.warning("\u8bf7\u5148\u622a\u56fe\uff0c\u518d\u7c98\u8d34");case 43:case"end":return e.stop()}}),e,null,[[5,36,39,42],[10,26,29,32]])})));return function(){return e.apply(this,arguments)}}(),U=Object(f.useState)(!1),D=Object(d.a)(U,2),E=D[0],z=D[1],R=function(e){z(!0);var r=new FormData;r.append("other_id",h),r.append("username",w),r.append(t,e),fetch("".concat(b.d,"/api/").concat(t,"_upload"),{method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){l.b.success(e.message),n()})).catch((function(e){console.log(e)})).finally((function(){z(!1)}))};return Object(v.jsx)("div",{className:m.a.uploadWrapper,style:{width:"".concat(g),height:"".concat(g)},children:Object(v.jsx)(r.a,{className:m.a.upload,style:{width:"".concat(g),height:"".concat(g)},name:t,showUploadList:!1,action:"".concat(b.d,"/api/").concat(t,"_upload"),data:{other_id:h,username:w},beforeUpload:function(e){return I(e.name),S(0),A(e.size),!0},listType:"picture-card",onChange:function(e){"uploading"===e.file.status&&S(e.file.percent),"done"===e.file.status&&(l.b.success("\u4e0a\u4f20\u56fe\u7247\u6210\u529f"),I(void 0),n()),"error"===e.file.status&&l.b.error("\u4e0a\u4f20\u56fe\u7247\u5931\u8d25")},children:N?Object(v.jsxs)("div",{className:m.a.progress,children:[Object(v.jsx)("div",{className:m.a.name,children:N}),Object(v.jsx)("div",{children:Object(x.b)(M||0)}),Object(v.jsxs)("div",{children:["\u8fdb\u5ea6\uff1a",(L||0).toFixed(1),"%"]}),Object(v.jsx)(c.a,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:L,status:"active"})]}):Object(v.jsxs)("div",{className:m.a.beforeUpload,children:[Object(v.jsx)(p.a,{className:m.a.addIcon}),"\u70b9\u51fb\u4e0a\u4f20\u56fe\u7247/\u6587\u4ef6",Object(v.jsx)(a.a,{className:m.a.parseButton,onClick:function(e){P(),e.preventDefault(),e.stopPropagation()},loading:E,children:"\u7c98\u8d34\u56fe\u7247"})]})})})}},125:function(e,t,n){e.exports={uploadWrapper:"file-image-upload_uploadWrapper__2KNmk",upload:"file-image-upload_upload__1_D8X",addIcon:"file-image-upload_addIcon__1icNG",progress:"file-image-upload_progress__1bAIy",name:"file-image-upload_name__2Am_K"}},195:function(e,t,n){"use strict";n(102);var r=n(93),a=n(55),c=n.n(a),o=(n(65),n(62)),i=n(56),s=n(5),u=(n(80),n(81)),l=n(75),d=n(0),f=n(461),p=n(532),b=n(390),j=n(156),h=n(310),m=n.n(h),x=n(8),O=n(235),_=n(112),v=n(1),g=function(e){var t=e.type,n=e.fileId,a=e.originalName,l=e.fileName,h=e.fileUrl,x=e.initFileList,g=e.width,w=void 0===g?"170px":g,y=e.isOnlyShow,k=void 0!==y&&y,N=e.fileData,I=e.iconRender,C=u.a.confirm,F=Object(d.useState)(!1),L=Object(s.a)(F,2),S=L[0],T=L[1],B=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C({title:'\u4f60\u5c06\u5220\u9664"'.concat(a,'"'),content:"Are you sure\uff1f",centered:!0,okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){var e=Object(i.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={type:t,file_id:n,filename:l},e.next=3,Object(O.a)(r);case 3:if(!e.sent){e.next=10;break}return o.b.success("\u5220\u9664\u6210\u529f"),e.next=8,x();case 8:e.next=11;break;case 10:o.b.error("\u5220\u9664\u5931\u8d25");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){o.b.info("\u5df2\u53d6\u6d88\u5220\u9664",1)}});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:m.a.filebox,style:{width:"".concat(w),height:"".concat(w)},onMouseLeave:function(e){e.stopPropagation(),T(!1)},children:[Object(v.jsxs)("div",{className:m.a.content,onMouseEnter:function(e){e.stopPropagation(),T(!0)},children:[Object(v.jsx)("div",{className:m.a.filename,children:a}),Object(v.jsx)("div",{className:m.a.size,children:Object(_.b)(Number(N.size||0))}),Object(v.jsx)("div",{className:m.a.time,children:N.cTime})]}),S&&Object(v.jsxs)("div",{className:m.a.Icons,children:[Object(v.jsx)(f.a,{className:m.a.iconBoxIcon,title:"\u590d\u5236\u6587\u4ef6\u94fe\u63a5",onClick:_.a.bind(null,h)}),Object(v.jsx)(p.a,{className:m.a.iconBoxIcon,title:"\u4e0b\u8f7d\u6587\u4ef6",onClick:function(){var e=document.createElement("a");e.href=h,e.download=a||"\u6587\u4ef6\u540d",e.click()}}),!k&&Object(v.jsx)(b.a,{className:m.a.iconBoxIcon,title:"\u5220\u9664\u6587\u4ef6",onClick:B}),Object(v.jsx)(r.a,{title:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:m.a.name,children:["\u6587\u4ef6\u540d\u79f0\uff1a",N.filename]}),Object(v.jsxs)("div",{className:m.a.size,children:["\u6587\u4ef6\u5927\u5c0f\uff1a",Object(_.b)(Number(N.size||0))]}),Object(v.jsxs)("div",{className:m.a.time,children:["\u66f4\u65b0\u65f6\u95f4\uff1a",N.cTime]})]}),placement:"bottom",children:Object(v.jsx)(j.a,{className:m.a.iconBoxIcon,title:"\u56fe\u7247\u8be6\u7ec6\u4fe1\u606f"})}),I||Object(v.jsx)(v.Fragment,{})]})]})};t.a=function(e){var t=e.type,n=e.fileList,r=e.refresh,a=e.width,c=e.isOnlyShow,o=e.iconRender,i=n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{fileUrl:"".concat(x.d,"/file/").concat(t,"/").concat(e.filename)})}));return Object(v.jsx)(v.Fragment,{children:null===i||void 0===i?void 0:i.map((function(e){return Object(v.jsx)(g,{type:t,fileId:e.file_id,originalName:e.originalname,fileName:e.filename,fileUrl:e.fileUrl,initFileList:r,width:a,fileData:e,isOnlyShow:c,iconRender:function(){return o&&o(e)}},e.file_id)}))})}},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return j}));var r=n(55),a=n.n(r),c=n(56),o=n(73),i=n(104),s=n.n(i),u=n(8);function l(e,t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("/file/getFileListByOtherId?otherId=".concat(t,"&username=").concat(n));case 2:return r=e.sent,e.abrupt("return",r&&"success"===r.resultsCode?r.data:[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)("/file/switchFileOtherId",t);case 2:return n=e.sent,e.abrupt("return",!(!n||"success"!==n.resultsCode));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=s.a.create({baseURL:"".concat(u.d,"/api"),timeout:u.c?5e3:1e4});function j(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/deleteFile",t);case 2:return n=e.sent,e.abrupt("return",!(!n||"success"!==n.resultsCode));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post(t,n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:r=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log("post\u8bf7\u6c42\u5931\u8d25",e.t0),e.abrupt("return");case 10:if("error"!==r.data.resultsCode){e.next=13;break}return console.log(r.data.message),e.abrupt("return");case 13:return e.abrupt("return",r.data);case 14:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()},310:function(e,t,n){e.exports={filebox:"file-list-box_filebox__1vIr4",Upload:"file-list-box_Upload__2REzk",progress:"file-list-box_progress__2wK-B",name:"file-list-box_name__2f-tw",addIcon:"file-list-box_addIcon__LApwl",content:"file-list-box_content__cSKwJ",filename:"file-list-box_filename__3H_Mm",size:"file-list-box_size__3R15T",time:"file-list-box_time__2BsmV",shower:"file-list-box_shower__2LDXb",Icons:"file-list-box_Icons__Xohzs",iconBoxIcon:"file-list-box_iconBoxIcon__1RPNr"}},486:function(e,t,n){e.exports={cloud:"cloud_cloud__3vbVo",cloudContent:"cloud_cloudContent__3OX5i"}},487:function(e,t,n){e.exports={cloudTree:"cloud-storage_cloudTree__3Pf6b",addFolder:"cloud-storage_addFolder__JL0yp",goback:"cloud-storage_goback__3TVFE"}},490:function(e,t,n){e.exports={cloudStorage:"folder-content_cloudStorage__snpcg",folderBox:"folder-content_folderBox__2IvK4",folderIcon:"folder-content_folderIcon__lUamr",icon:"folder-content_icon__3lmL7",imgLength:"folder-content_imgLength__1Iqry"}},491:function(e,t,n){e.exports={folderBox:"folder-list_folderBox__1IgNJ",folderIcon:"folder-list_folderIcon__32PNC",icon:"folder-list_icon__vCEFg",imgLength:"folder-list_imgLength__3VaBr"}},557:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(486),c=n.n(a),o=n(79),i=(n(65),n(62)),s=n(55),u=n.n(s),l=n(56),d=n(5),f=n(487),p=n.n(f),b=n(16),j=n(73);function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)("/folder/getFolder?parentId=".concat(t,"&username=").concat(n));case 2:return r=e.sent,e.abrupt("return",r&&"success"===r.resultsCode?r.data:[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)("/folder/getAllFolder?username=".concat(t));case 2:return n=e.sent,e.abrupt("return",!(!n||"success"!==n.resultsCode)&&n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)("/folder/addFolder",t);case 2:return n=e.sent,e.abrupt("return",!(!n||"success"!==n.resultsCode)&&n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)("/folder/updateFolderName",t);case 2:return n=e.sent,e.abrupt("return",!(!n||"success"!==n.resultsCode)&&n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)("/folder/switchFolderParent",t);case 2:return n=e.sent,e.abrupt("return",!(!n||"success"!==n.resultsCode));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)("/folder/deleteFolder",t);case 2:return n=e.sent,e.abrupt("return",!(!n||"success"!==n.resultsCode)&&n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=n(2),F=n(462),L=n(564),S=n(562),T=n(563),B=(n(80),n(81)),M=(n(488),n(526)),A=n(75),P=n(146),U=n(131),D=n(490),E=n.n(D),z=n(463),R=n(464),K=n(183),Y=n(235),J=n(8),W=n(133),V=n(17),X=n(110),H=n(195),q=n(491),G=n.n(q),Q=n(535),Z=n(536),$=n(393),ee=n(390),te=n(1),ne=B.a.confirm,re=Object(C.h)((function(e){var t=e.folderList,n=e.Width,a=e.history,c=e.getFolderList,o=e.parentId,s=e.folderMap,f=e.getAllFolderList,p=e.showModal,b=Object(r.useState)(),j=Object(d.a)(b,2),h=j[0],m=j[1],x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=prompt("\u8bf7\u8f93\u5165\u65b0\u589e\u7684\u6587\u4ef6\u5939\u7684\u540d\u79f0",t))||""===r){e.next=7;break}return a={name:r,folder_id:n},e.next=5,g(a);case 5:e.sent?(i.b.success("\u65b0\u589e\u6587\u4ef6\u5939\u6210\u529f"),c(o)):i.b.error("\u65b0\u589e\u6587\u4ef6\u5939\u5931\u8d25");case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){a.push("/admin/cloud/".concat(e))},_=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof s[n].children){e.next=3;break}return i.b.warn("\u8be5\u6587\u4ef6\u5939\u5185\u8fd8\u6709\u6587\u4ef6\u5939\uff0c\u6682\u4e0d\u652f\u6301\u9012\u5f52\u5220\u9664\uff08\u5176\u5b9e\u91cc\u9762\u6709\u6587\u4ef6\u7684\u8bdd\u4e5f\u4e0d\u63a8\u8350\u5220\u9664\uff09"),e.abrupt("return");case 3:ne({title:'\u4f60\u5c06\u5220\u9664"'.concat(t,'"'),content:"Are you sure\uff1f",centered:!0,okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={folder_id:n},e.next=3,N(t);case 3:e.sent?(i.b.success("\u5220\u9664\u6587\u4ef6\u5939\u6210\u529f"),c(o)):i.b.error("\u5220\u9664\u6587\u4ef6\u5939\u5931\u8d25"),f();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){i.b.info("\u5df2\u53d6\u6d88\u5220\u9664\u6587\u4ef6\u5939",1)}});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(te.jsx)(te.Fragment,{children:t.map((function(e){return Object(te.jsxs)("div",{className:G.a.folderBox,style:{width:"".concat(n),height:"".concat(n)},onClick:O.bind(null,e.folder_id),onMouseEnter:function(){m(e)},onMouseLeave:function(){m(void 0)},children:[h&&h.folder_id===e.folder_id?Object(te.jsx)(Q.a,{className:G.a.folderIcon}):Object(te.jsx)(Z.a,{className:G.a.folderIcon}),Object(te.jsx)("div",{children:e.name}),h&&h.folder_id===e.folder_id&&Object(te.jsxs)("div",{children:[Object(te.jsx)($.a,{className:G.a.icon,title:"\u7f16\u8f91\u6587\u4ef6\u5939\u540d\u79f0",onClick:function(t){x(e.name,e.folder_id),t.stopPropagation()}}),Object(te.jsx)(ee.a,{className:G.a.icon,title:"\u5220\u9664\u6587\u4ef6\u5939",onClick:function(t){_(e.name,e.folder_id),t.stopPropagation()}}),Object(te.jsx)(z.a,{className:G.a.icon,title:"\u5207\u6362\u6587\u4ef6\u5939",onClick:function(t){p(e,"folder"),t.stopPropagation()}})]})]},e.folder_id)}))})})),ae="160px",ce=Object(C.h)((function(e){var t=e.parentId,n=e.folderTree,a=e.folderMap,c=e.folderList,o=e.getFolderList,s=e.getAllFolderList,f=Object(r.useState)(!0),p=Object(d.a)(f,2),j=p[0],h=p[1],m=Object(r.useContext)(b.a).username;Object(r.useEffect)((function(){o(t),I(t),C(t)}),[t]);var x=Object(r.useState)([]),O=Object(d.a)(x,2),_=O[0],v=O[1],g=Object(r.useState)([]),w=Object(d.a)(g,2),k=w[0],N=w[1],I=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v([]),h(!0),e.next=4,Object(K.c)(t,m);case 4:(n=e.sent)&&(r=Object(U.a)(n),""===t&&(r=r.filter((function(e){return"cloud"===e.type}))),v(r)),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,c,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N([]),h(!0),e.next=4,Object(Y.b)(t,m);case 4:if(n=e.sent){r=[],a=Object(U.a)(n),""===t&&(a=a.filter((function(e){return"cloud"===e.type}))),c=Object(P.a)(a);try{for(c.s();!(o=c.n()).done;)i=o.value,r.push(Object(A.a)(Object(A.a)({},i),{},{fileUrl:"".concat(J.d,"/file/cloud/").concat(i.filename)}))}catch(s){c.e(s)}finally{c.f()}N(r)}h(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){console.log(e),"folder"===t&&$({name:e.name,id:e.folder_id,parent_id:e.parent_id}),"image"===t&&$({name:e.imgname,id:e.img_id,parent_id:e.parent_id}),"file"===t&&$({name:e.originalname,id:e.file_id,parent_id:e.parent_id}),oe(t),q(!0),le(e.parent_id)},L=function(){var e=Object(l.a)(u.a.mark((function e(){var n,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue){e.next=3;break}return i.b.warn("\u8bf7\u9009\u62e9\u4e00\u4e2a\u8282\u70b9",.5),e.abrupt("return");case 3:if(ue!==Z.parent_id){e.next=6;break}return i.b.warn("\u4e0e\u539f\u6587\u4ef6\u5939\u76f8\u540c\uff0c\u65e0\u9700\u5207\u6362",.5),e.abrupt("return");case 6:return n=new Promise((function(){})),r={},"file"===ce&&(n=Y.c,r={file_id:Z.id,other_id:ue}),"image"===ce&&(n=K.e,r={img_id:Z.id,other_id:ue}),"folder"===ce&&(n=y,r={folder_id:Z.id,parent_id:ue}),e.next=13,n(r);case 13:c=e.sent,l={folder:"\u6587\u4ef6\u5939",image:"\u56fe\u7247",file:"\u6587\u4ef6"},c?(i.b.success("\u66f4\u6362".concat(l[ce||""]," \u201c").concat(Z.name,"\u201d \u5230 \u201c").concat(a[ue]?a[ue].name:"\u6839\u76ee\u5f55","\u201d \u6587\u4ef6\u5939\u4e0b\u6210\u529f")),q(!1),$(void 0),oe(void 0),le(void 0),"image"===ce&&I(t),"file"===ce&&C(t),"folder"===ce&&(o(t),s())):i.b.error("\u66f4\u6362".concat(l[ce||""]," \u201c").concat(Z.name,"\u201d \u5230 \u201c").concat(a[ue]?a[ue].name:"\u6839\u76ee\u5f55","\u201d \u6587\u4ef6\u5939\u4e0b\u5931\u8d25"));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=Object(r.useState)(!1),T=Object(d.a)(S,2),D=T[0],q=T[1],G=Object(r.useState)(),Q=Object(d.a)(G,2),Z=Q[0],$=Q[1],ee=Object(r.useState)(),ne=Object(d.a)(ee,2),ce=ne[0],oe=ne[1],ie=Object(r.useState)(),se=Object(d.a)(ie,2),ue=se[0],le=se[1];return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)("div",{className:E.a.imgLength,children:[!j&&Object(te.jsxs)(te.Fragment,{children:["\u5171 ",_.length," \u5f20\u56fe\u7247"]}),Object(te.jsx)("br",{}),!j&&Object(te.jsxs)(te.Fragment,{children:["\u5171 ",k.length," \u4e2a\u6587\u4ef6"]})]}),Object(te.jsxs)("div",{className:E.a.cloudStorage,children:[j&&Object(te.jsx)(V.a,{}),Object(te.jsx)(re,{folderList:c,Width:ae,getFolderList:o,parentId:t,folderMap:a,getAllFolderList:s,showModal:F}),Object(te.jsx)(X.a,{type:"cloud",width:ae,refresh:function(){I(t),C(t)},other_id:t}),Object(te.jsx)(W.a,{type:"cloud",imageList:_,width:ae,refresh:I.bind(null,t),iconRender:function(e){return Object(te.jsx)(z.a,{title:"\u5207\u6362\u6587\u4ef6\u5939",onClick:F.bind(null,e,"image")})}}),Object(te.jsx)(H.a,{fileList:k,width:ae,refresh:C.bind(null,t),type:"cloud",iconRender:function(e){return Object(te.jsx)(z.a,{title:"\u5207\u6362\u6587\u4ef6\u5939",onClick:F.bind(null,e,"file")})}})]}),Object(te.jsx)(B.a,{title:"\u8bf7\u9009\u62e9\u8981\u5c06 \u201c".concat(Z?Z.name:"","\u201d \u66f4\u6362\u5230\u7684\u76ee\u5f55"),visible:D,onOk:L,onCancel:function(){i.b.warn("\u5df2\u53d6\u6d88\u66f4\u6362\u6587\u4ef6\u5939",.5),q(!1),$(void 0),oe(void 0),le(void 0)},children:Object(te.jsx)(M.a,{showIcon:!0,defaultExpandAll:!0,onSelect:function(e,t){e[0]===Z.parent_id?i.b.warn("\u4e0e\u6e90\u6587\u4ef6\u5939\u4e00\u81f4",.5):(le(e[0]),console.log(e[0]))},switcherIcon:Object(te.jsx)(R.a,{}),treeData:n,selectedKeys:[ue||""]})})]})})),oe=Object(C.h)((function(e){var t=e.match,n=e.history,a=Object(r.useContext)(b.a).username,c=Object(r.useState)(),o=Object(d.a)(c,2),s=o[0],f=o[1],j=Object(r.useState)({}),m=Object(d.a)(j,2),O=m[0],v=m[1],g=Object(r.useState)([]),w=Object(d.a)(g,2),y=w[0],k=w[1],N=Object(r.useState)("root"),I=Object(d.a)(N,2),C=I[0],B=I[1];Object(r.useEffect)((function(){M()}),[]),Object(r.useEffect)((function(){var e=t.params.parent_id||"root";B(e)}),[t]);var M=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a);case 2:(t=e.sent)&&(n=t.tree,r={},c=function e(t){return t.forEach((function(t){t.title=t.name,t.icon=function(e){return e.selected?Object(te.jsx)(S.a,{}):Object(te.jsx)(T.a,{})},t.key=t.folder_id,t.children&&(t.children=e(t.children)),r[t.folder_id]=t})),t}(n),f([{title:"\u6839\u76ee\u5f55",key:"root",icon:function(e){return e.selected?Object(te.jsx)(S.a,{}):Object(te.jsx)(T.a,{})},children:c}]),v(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=prompt("\u8bf7\u8f93\u5165\u65b0\u589e\u7684\u6587\u4ef6\u5939\u7684\u540d\u79f0","new folder"))||""===t){e.next=7;break}return n={name:t,parent_id:C},e.next=5,_(n);case 5:e.sent?(i.b.success("\u65b0\u589e\u6587\u4ef6\u5939\u6210\u529f"),P(C),M()):i.b.error("\u65b0\u589e\u6587\u4ef6\u5939\u5931\u8d25");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k([]),e.next=3,h(t,a);case 3:(n=e.sent)&&k(n.sort((function(e,t){return new Date(t.cTime).getTime()-new Date(e.cTime).getTime()})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(te.jsxs)(te.Fragment,{children:["root"!==C&&Object(te.jsxs)("div",{className:p.a.goback,onClick:function(){n.push("/admin/cloud/".concat(O[C].parent_id))},children:[Object(te.jsx)(F.a,{}),"\u8fd4\u56de\u4e0a\u4e00\u5c42"]}),Object(te.jsxs)("div",{className:p.a.addFolder,onClick:A,children:[Object(te.jsx)(L.a,{}),"\u65b0\u589e\u6587\u4ef6\u5939"]}),Object(te.jsx)(ce,{parentId:C,folderList:y,folderMap:O,folderTree:s,getFolderList:P,getAllFolderList:M})]})}));t.default=function(){return Object(o.a)("cloud"),Object(te.jsx)("div",{className:c.a.cloud,children:Object(te.jsx)("div",{className:c.a.cloudContent,children:Object(te.jsx)(oe,{})})})}}}]);