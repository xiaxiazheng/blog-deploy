(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[14],{199:function(e,a,t){"use strict";var n=t(13),c=t.n(n),r=t(200),o=t(20),i=t(7),s=t(0),u=t(748),l=t(772),d=t(745),j=t(177),m=t(520),h=t(43),p=t(94),b=t(203),f=t.n(b),O=t(198),_=t(193),v=t.n(_),x=t(10);a.a=function(e){var a=e.type,t=e.refresh,n=e.other_id,b=void 0===n?"":n,_=e.width,g=void 0===_?"170px":_,y=Object(s.useContext)(p.a).username,w=Object(s.useState)(),N=Object(i.a)(w,2),C=N[0],S=N[1],k=Object(s.useState)(),M=Object(i.a)(k,2),L=M[0],B=M[1],I=Object(s.useState)(),D=Object(i.a)(I,2),P=D[0],E=D[1],F=function(){var e=Object(o.a)(c.a.mark((function e(){var a,t,n,o,i,s,l,d,j,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.read();case 2:a=e.sent,t=!1,n=Object(r.a)(a),e.prev=5,n.s();case 7:if((o=n.n()).done){e.next=34;break}i=o.value,s=Object(r.a)(i.types),e.prev=10,s.s();case 12:if((l=s.n()).done){e.next=24;break}if(d=l.value,t||-1===d.indexOf("image")){e.next=22;break}return console.log("clipboardItem",i),t=!0,e.next=19,i.getType(d);case 19:j=e.sent,m=new File([j],v()().format("YYYY-MM-DD HH:mm:ss")+"."+d.split("/").pop(),{type:j.type}),q(m);case 22:e.next=12;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(10),s.e(e.t0);case 29:return e.prev=29,s.f(),e.finish(29);case 32:e.next=7;break;case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(5),n.e(e.t1);case 39:return e.prev=39,n.f(),e.finish(39);case 42:t||u.a.warning("\u8bf7\u5148\u622a\u56fe\uff0c\u518d\u7c98\u8d34");case 43:case"end":return e.stop()}}),e,null,[[5,36,39,42],[10,26,29,32]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(a=prompt("\u8bf7\u8f93\u5165\u5c06\u4e0a\u4f20\u7684\u56fe\u7247\u7684 url"))||""===a){e.next=6;break}return e.next=4,fetch(a).then((function(e){return e.blob()})).then((function(e){return e.type.includes("images")?new File([e],v()().format("YYYY-MM-DD HH:mm:ss")+"."+e.type.split("/").pop(),{type:e.type}):(u.a.error("\u8bf7\u8f93\u5165\u56fe\u7247\u7684 url\uff0c\u5f53\u524d url \u6293\u4e0d\u5230\u56fe\u7247"),!1)}));case 4:(t=e.sent)&&q(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=Object(s.useState)(!1),Y=Object(i.a)(W,2),z=Y[0],T=Y[1],q=function(e){T(!0);var n=new FormData;n.append("other_id",b),n.append("username",y),n.append(a,e),fetch("".concat(h.d,"/api/").concat(a,"_upload"),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){u.a.success(e.message),t()})).catch((function(e){console.log(e)})).finally((function(){T(!1)}))};return Object(x.jsx)("div",{className:f.a.uploadWrapper,style:{width:"".concat(g),height:"".concat(g)},children:Object(x.jsx)(l.a,{className:f.a.upload,style:{width:"".concat(g),height:"".concat(g)},name:a,showUploadList:!1,action:"".concat(h.d,"/api/").concat(a,"_upload"),data:{other_id:b,username:y},beforeUpload:function(e){return S(e.name),B(0),E(e.size),!0},listType:"picture-card",onChange:function(e){"uploading"===e.file.status&&B(e.file.percent),"done"===e.file.status&&(u.a.success("\u4e0a\u4f20\u56fe\u7247\u6210\u529f"),S(void 0),t()),"error"===e.file.status&&u.a.error("\u4e0a\u4f20\u56fe\u7247\u5931\u8d25")},children:C?Object(x.jsxs)("div",{className:f.a.progress,children:[Object(x.jsx)("div",{className:f.a.name,children:C}),Object(x.jsx)("div",{children:Object(O.b)(P||0)}),Object(x.jsxs)("div",{children:["\u8fdb\u5ea6\uff1a",(L||0).toFixed(1),"%"]}),Object(x.jsx)(d.a,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:L,status:"active"})]}):Object(x.jsxs)("div",{className:f.a.beforeUpload,children:[Object(x.jsx)(m.a,{className:f.a.addIcon}),"\u70b9\u51fb\u4e0a\u4f20\u56fe\u7247/\u6587\u4ef6",Object(x.jsx)(j.a,{className:f.a.parseButton,onClick:function(e){F(),e.preventDefault(),e.stopPropagation()},loading:z,children:"\u7c98\u8d34\u56fe\u7247"}),Object(x.jsx)(j.a,{onClick:function(e){H(),e.preventDefault(),e.stopPropagation()},loading:z,children:"\u7c98\u8d34\u94fe\u63a5"})]})})})}},203:function(e,a,t){e.exports={uploadWrapper:"file-image-upload_uploadWrapper__1HNB_",upload:"file-image-upload_upload__1o4vw",addIcon:"file-image-upload_addIcon__M8biy",progress:"file-image-upload_progress__2z4Sh",name:"file-image-upload_name__3s7jm"}},256:function(e,a,t){"use strict";var n=t(2),c=t(0),r=t(217),o=t(186),i=function(e,a){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:r.a}))};i.displayName="LeftOutlined",a.a=c.forwardRef(i)},277:function(e,a,t){"use strict";var n=t(1);a.a=function(e){var a;return Object(n.a)({},e.componentCls,(a={},Object(n.a)(a,"".concat(e.antCls,"-motion-collapse-legacy"),{overflow:"hidden","&-active":{transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}}),Object(n.a)(a,"".concat(e.antCls,"-motion-collapse"),{overflow:"hidden",transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}),a))}},401:function(e,a,t){"use strict";var n=t(2),c=t(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},o=t(186),i=function(e,a){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:r}))};i.displayName="SaveOutlined";a.a=c.forwardRef(i)},644:function(e,a,t){e.exports={MaoPu:"mao-pu_MaoPu__34iSi",maopuWrapper:"mao-pu_maopuWrapper__1k47q",addButton:"mao-pu_addButton__3da9Z",switchShowType:"mao-pu_switchShowType__2juOk",active:"mao-pu_active__3KmgC",showMaoStatus:"mao-pu_showMaoStatus__hO0I6",hold:"mao-pu_hold__283HY",gone:"mao-pu_gone__28fyj",dead:"mao-pu_dead__1H4d3",colorCloud:"mao-pu_colorCloud__2q7NF",status:"mao-pu_status__17R8p",maoList:"mao-pu_maoList__8B-6Q",levelMao:"mao-pu_levelMao__UPBte",box:"mao-pu_box__j6umA",hover:"mao-pu_hover__1SHGl",hoverBroSis:"mao-pu_hoverBroSis__2efFc",hoverChildren:"mao-pu_hoverChildren__295Hx",hoverParent:"mao-pu_hoverParent__1nbqK",parent:"mao-pu_parent__1EoqP",allMao:"mao-pu_allMao__Oi6fY",children:"mao-pu_children__1aGq1"}},645:function(e,a,t){e.exports={MaoDetail:"mao-detail_MaoDetail__34hro",backButton:"mao-detail_backButton__3O2l3",saveButton:"mao-detail_saveButton__2RzG6",maoData:"mao-detail_maoData__2jvat",boxWrapper:"mao-detail_boxWrapper__orAKi",box:"mao-detail_box__2aouf",maoContent:"mao-detail_maoContent__1c3z1"}},646:function(e,a,t){e.exports={ImgManage:"mao-img-manage_ImgManage__1l7x2"}},647:function(e,a,t){e.exports={compareMao:"compare-mao_compareMao__2pW_k"}},648:function(e,a,t){e.exports={ParentMao:"parent-mao_ParentMao__9ORZ2",maoBox:"parent-mao_maoBox__3DAQq",self:"parent-mao_self__2oFbe",parent:"parent-mao_parent__1EeVr",father:"parent-mao_father__1oYSq",mother:"parent-mao_mother__3xg6F"}},778:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t.n(n),r=t(188),o=t(20),i=t(7),s=t(0),u=t(644),l=t.n(u),d=t(645),j=t.n(d),m=t(646),h=t.n(m),p=t(205),b=t(199),f=t(10),O=function(e){var a=e.type,t=e.imageList,n=e.other_id,c=e.initImgList,r=e.isShowUpload,o=void 0===r||r,i=e.width,s=void 0===i?"150px":i,u=e.style,l=e.margin;return Object(f.jsxs)("div",{className:h.a.ImgManage,style:{margin:l},children:[o&&Object(f.jsx)(b.a,{type:a,other_id:n,width:s,refresh:c}),Object(f.jsx)(p.a,{type:a,refresh:c,width:s,imageList:t,style:u})]})},_=t(213),v=t(94),x=t(397),g=t(746),y=t(748),w=t(177),N=t(256),C=t(401),S=t(32);function k(){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)("/maopu/getMaoPuList");case 2:return a=e.sent,e.abrupt("return",!(!a||"success"!==a.resultsCode)&&a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)("/maopu/addMaoPu",a);case 2:return t=e.sent,e.abrupt("return",!(!t||"success"!==t.resultsCode)&&t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)("/maopu/updateMaoPu",a);case 2:return t=e.sent,e.abrupt("return",!(!t||"success"!==t.resultsCode));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=t(216),E=x.a.Option,F=[{label:"\u6301\u6709",value:"hold"},{label:"\u5df2\u9001\u8d70",value:"gone"},{label:"\u6b7b\u4ea1",value:"dead"}],H=function(e){var a=e.mao,t=e.back,n=e.initFn,r=e.maoList,u=Object(s.useContext)(v.a).username,l=g.a.TextArea,d=Object(s.useState)(!1),m=Object(i.a)(d,2),h=m[0],p=m[1],b=Object(s.useState)(a.name),S=Object(i.a)(b,2),k=S[0],M=S[1],L=Object(s.useState)(a.birthday),B=Object(i.a)(L,2),D=B[0],H=B[1],W=Object(s.useState)(a.status),Y=Object(i.a)(W,2),z=Y[0],T=Y[1],q=Object(s.useState)(a.father),U=Object(i.a)(q,2),V=U[0],A=U[1],R=Object(s.useState)(a.father_id),G=Object(i.a)(R,2),K=G[0],J=G[1],Q=Object(s.useState)(a.mother),Z=Object(i.a)(Q,2),X=Z[0],$=Z[1],ee=Object(s.useState)(a.mother_id),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],ce=Object(s.useState)(a.appearance),re=Object(i.a)(ce,2),oe=re[0],ie=re[1],se=Object(s.useState)(a.feature),ue=Object(i.a)(se,2),le=ue[0],de=ue[1],je=Object(s.useState)(a.description),me=Object(i.a)(je,2),he=me[0],pe=me[1],be=Object(s.useState)(a.remarks),fe=Object(i.a)(be,2),Oe=fe[0],_e=fe[1];Object(P.a)((function(){Le()})),Object(s.useEffect)((function(){var e=!1;k===a.name&&D===a.birthday&&V===a.father&&X===a.mother&&oe===a.appearance&&le===a.feature&&he===a.description&&K===a.father_id&&te===a.mother_id&&z===a.status&&Oe===a.remarks||(e=!0),p(e)}),[k,D,V,X,oe,le,he,K,te,z,Oe]);var ve=Object(s.useState)(a.headImgList),xe=Object(i.a)(ve,2),ge=xe[0],ye=xe[1],we=Object(s.useState)(a.imgList),Ne=Object(i.a)(we,2),Ce=Ne[0],Se=Ne[1],ke=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.c)(a.head_img_id,u);case 2:t=e.sent,ye(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.c)(a.mao_id,u);case 2:t=e.sent,Se(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={mao_id:a.mao_id,name:k,birthday:D,father:V,mother:X,appearance:oe,feature:le,description:he,father_id:K,mother_id:te,status:z,remarks:Oe},e.next=3,I(t);case 3:e.sent?(y.a.success("\u66f4\u65b0\u6210\u529f"),p(!1),n()):y.a.error("\u66f4\u65b0\u5931\u8d25");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"".concat(j.a.MaoDetail," ScrollBar"),children:[Object(f.jsxs)(w.a,{className:j.a.backButton,type:"primary",onClick:function(){return t()},children:[Object(f.jsx)(N.a,{type:"left"}),"\u8fd4\u56de"]}),Object(f.jsxs)(w.a,{className:j.a.saveButton,type:"primary",danger:h,onClick:Le,children:[Object(f.jsx)(C.a,{}),"\u4fdd\u5b58"]}),Object(f.jsxs)("div",{className:j.a.maoData,children:[Object(f.jsx)("h2",{children:a.name}),Object(f.jsxs)("div",{className:j.a.boxWrapper,children:[Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u59d3\u540d\uff1a"}),Object(f.jsx)(g.a,{value:k,onChange:function(e){return M(e.target.value)}})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u751f\u65e5\uff1a"}),Object(f.jsx)(g.a,{value:D,placeholder:"\u5c3d\u91cf\u519910\u4f4d\u65e5\u671f\u5982\uff1a2020-01-01\uff0c\u7528\u4e8e\u627e\u5144\u5f1f\u59d0\u59b9",onChange:function(e){return H(e.target.value)}})]})]}),Object(f.jsxs)("div",{className:j.a.boxWrapper,children:[Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u7236\u4eb2\u59d3\u540d\uff1a"}),Object(f.jsx)(g.a,{value:V,onChange:function(e){return A(e.target.value)}})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u7236\u4eb2 ID\uff1a"}),Object(f.jsxs)(x.a,{value:K,onChange:function(e){J(e||"")},style:{flex:1},children:[Object(f.jsx)(E,{value:"",children:"\u65e0\u8bb0\u5f55"},"\u65e0\u8bb0\u5f55"),r.filter((function(e){return e.mao_id!==a.mao_id})).map((function(e){return Object(f.jsx)(E,{value:e.mao_id,children:e.name},e.mao_id)}))]})]})]}),Object(f.jsxs)("div",{className:j.a.boxWrapper,children:[Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u6bcd\u4eb2\u59d3\u540d\uff1a"}),Object(f.jsx)(g.a,{value:X,onChange:function(e){return $(e.target.value)}})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u6bcd\u4eb2 ID\uff1a"}),Object(f.jsxs)(x.a,{value:te,onChange:function(e){ne(e||"")},style:{flex:1},children:[Object(f.jsx)(E,{value:"",children:"\u65e0\u8bb0\u5f55"},"\u65e0\u8bb0\u5f55"),r.filter((function(e){return e.mao_id!==a.mao_id})).map((function(e){return Object(f.jsx)(E,{value:e.mao_id,children:e.name},e.mao_id)}))]})]})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u72b6\u6001\uff1a"}),Object(f.jsx)(x.a,{value:z,onChange:function(e){return T(e)},style:{flex:1},children:F.map((function(e){return Object(f.jsx)(E,{value:e.value,children:e.label},e.value)}))})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u5916\u8c8c\uff1a"}),Object(f.jsx)(g.a,{value:oe,onChange:function(e){return ie(e.target.value)}})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u7279\u70b9\uff1a"}),Object(f.jsx)(g.a,{value:le,onChange:function(e){return de(e.target.value)}})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u63cf\u8ff0\uff1a"}),Object(f.jsx)(l,{rows:6,value:he,onChange:function(e){return pe(e.target.value)}})]}),Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsx)("span",{children:"\u5907\u6ce8\uff1a"}),Object(f.jsx)(l,{rows:2,placeholder:"\u8fd9\u4e2a\u5b57\u6bb5\u4e0d\u4f1a\u663e\u793a\u5728\u5c0f\u7a0b\u5e8f",value:Oe,onChange:function(e){return _e(e.target.value)}})]})]}),Object(f.jsxs)("div",{className:j.a.maoContent,children:[Object(f.jsx)("div",{children:"\u5934\u50cf\u56fe\u7247"}),Object(f.jsx)(O,{type:"mao",other_id:a.head_img_id,imageList:ge,initImgList:ke,isShowUpload:0===ge.length}),Object(f.jsxs)("div",{children:["\u5176\u4ed6\u56fe\u7247 (",null===Ce||void 0===Ce?void 0:Ce.length,")"]}),Object(f.jsx)(O,{type:"mao",other_id:a.mao_id,imageList:Ce,initImgList:Me})]})]})},W=t(191),Y=t(750),z=t(520),T=t(197),q=t(647),U=t.n(q),V=t(648),A=t.n(V),R=function(e){var a=e.mao;return Object(f.jsx)("div",{className:A.a.ParentMao,children:function e(a){return Object(f.jsxs)("div",{className:A.a.maoBox,children:[Object(f.jsx)("div",{className:A.a.self,children:a.name}),(a.fatherObject||a.motherObject)&&Object(f.jsxs)("div",{className:A.a.parent,children:[Object(f.jsx)("div",{className:A.a.father,children:a.fatherObject?e(a.fatherObject):Object(f.jsx)("div",{className:A.a.self,children:a.father})}),Object(f.jsx)("div",{className:A.a.mother,children:a.motherObject?e(a.motherObject):Object(f.jsx)("div",{className:A.a.self,children:a.mother})})]})]},a.mao_id)}(a)})},G=function(e){var a=e.maoList,t=Object(s.useState)(),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(f.jsxs)("div",{className:U.a.compareMao,children:[Object(f.jsx)(x.a,{style:{width:300},value:null===c||void 0===c?void 0:c.mao_id,showSearch:!0,filterOption:function(e,a){return-1!==(null===a||void 0===a?void 0:a.children.indexOf(e))},onChange:function(e){var t;return r(null===(t=a.filter((function(a){return a.mao_id===e})))||void 0===t?void 0:t[0])},children:a.map((function(e){return Object(f.jsx)(x.a.Option,{value:e.mao_id,children:e.name},e.mao_id)}))}),c&&Object(f.jsx)(R,{mao:c})]})},K=function(e){var a=e.maoList,t=(e.setActiveMao,Object(s.useState)([0,0])),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(f.jsxs)("div",{className:U.a.maoTree,children:[Object(f.jsx)(w.a,{onClick:function(){return r((function(e){return console.log(e),[].concat(Object(T.a)(e),[0])}))},children:"\u65b0\u589e\u5bf9\u6bd4"}),Object(f.jsx)("div",{className:U.a.compareBox,children:c.map((function(e,t){return Object(f.jsx)(G,{maoList:a},t)}))})]})},J=["\u6240\u6709\u732b\u732b","\u5173\u8054\u732b\u732b","\u5206\u5c42\u732b\u732b","\u5bf9\u6bd4\u732b\u732b"],Q=["\u5f53\u524d\u732b\u54aa","\u7236\u6bcd","\u5144\u5f1f\u59d0\u59b9","\u5b69\u5b50","\u6301\u6709","\u5df2\u9001\u8d70","\u6b7b\u4ea1"],Z={hold:l.a.hold,gone:l.a.gone,dead:l.a.dead};a.default=function(){var e,a;Object(s.useEffect)((function(){C()}),[]),Object(W.a)("\u732b\u8c31");var t=Object(s.useState)([]),n=Object(i.a)(t,2),u=n[0],d=n[1],j=Object(s.useState)(),m=Object(i.a)(j,2),h=m[0],p=m[1],b=Object(s.useState)(null),_=Object(i.a)(b,2),v=_[0],x=_[1],N=function(e){var a={};return e.forEach((function(e){a[e.mao_id]=e})),e.forEach((function(e){e.father_id&&(a[e.father_id].children?a[e.father_id].children.push(a[e.mao_id]):a[e.father_id].children=[a[e.mao_id]],e.fatherObject=a[e.father_id]),e.mother_id&&(a[e.mother_id].children?a[e.mother_id].children.push(a[e.mao_id]):a[e.mother_id].children=[a[e.mao_id]],e.motherObject=a[e.mother_id])})),e},C=function(){var e=Object(o.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:(a=e.sent)&&(t=a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{key:e.mao_id,title:e.name})})),d(N(t)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({});case 2:(a=e.sent)&&(y.a.success("\u65b0\u589e\u732b\u732b\u6210\u529f"),p(a),C());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=Object(s.useState)("\u6240\u6709\u732b\u732b"),B=Object(i.a)(M,2),I=B[0],D=B[1],P=Object(s.useState)(),E=Object(i.a)(P,2),F=E[0],T=E[1],q=function(e){return Object(f.jsx)("div",{className:"".concat(l.a.parent," ").concat(v&&v.mao_id===e.mao_id?l.a.hover:""," ").concat(v&&v.mao_id!==e.mao_id&&10===v.birthday.length&&v.birthday===e.birthday?l.a.hoverBroSis:""," ").concat(v&&e.children&&e.children.some((function(e){return e.mao_id===v.mao_id}))?l.a.hoverChildren:""," ").concat(!v||e.mother_id!==v.mao_id&&e.father_id!==v.mao_id?"":l.a.hoverParent," ").concat(A?Z[e.status]:"","\n              "),onMouseEnter:function(a){a.stopPropagation(),!A&&(!v||v.mao_id!==e.mao_id)&&x(e)},onClick:function(){return p(e)},children:Object(f.jsx)("span",{children:e.name})},e.mao_id)},U=Object(s.useState)(!1),V=Object(i.a)(U,2),A=V[0],G=V[1];return Object(f.jsxs)("div",{className:l.a.MaoPu,children:[!h&&Object(f.jsxs)("div",{className:"".concat(l.a.maopuWrapper," ScrollBar"),children:[Object(f.jsxs)(w.a,{className:l.a.addButton,type:"primary",onClick:S,children:[Object(f.jsx)(z.a,{}),"\u65b0\u589e\u732b\u732b"]}),Object(f.jsx)("div",{className:l.a.switchShowType,children:J.map((function(e){return Object(f.jsx)("span",{className:I===e?l.a.active:"",onClick:function(){return D(e)},children:e},e)}))}),Object(f.jsx)("div",{className:l.a.showMaoStatus,children:Object(f.jsx)(Y.a,{checkedChildren:"\u663e\u793a\u732b\u54aa\u72b6\u6001",unCheckedChildren:"\u663e\u793a\u732b\u54aa\u72b6\u6001",defaultChecked:!0,checked:A,onChange:function(e){return function(e){G(e),x(null)}(e)}})}),"\u5206\u5c42\u732b\u732b"===I&&Object(f.jsxs)("div",{className:"".concat(l.a.levelMao),children:[Object(f.jsx)("div",{className:l.a.singleMao,children:u.filter((function(e){return""===e.father_id&&""===e.mother_id&&!e.children})).map((function(e){return q(e)}))}),function e(a){return"undefined"===typeof a?null:a.map((function(a){return Object(f.jsxs)("div",{className:a.children?l.a.box:"",children:[q(a),a.children&&Object(f.jsx)("div",{className:l.a.children,children:e(a.children)})]},a.mao_id)}))}(u.filter((function(e){return""===e.father_id&&""===e.mother_id&&e.children})))]}),Object(f.jsx)("div",{className:l.a.colorCloud,children:Q.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:l.a.status})," ",e]},e)}))}),"\u5173\u8054\u732b\u732b"===I&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g.a,{value:F,onChange:function(e){return T(e.target.value)},style:{width:300},allowClear:!0}),Object(f.jsx)("div",{className:l.a.maoList,children:null===(e=F?u.filter((function(e){return-1!==e.name.indexOf(F)})):u)||void 0===e?void 0:e.map((function(e){return q(e)}))}),v&&Object(f.jsx)(R,{mao:v})]}),"\u6240\u6709\u732b\u732b"===I&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g.a,{value:F,onChange:function(e){return T(e.target.value)},style:{width:300},allowClear:!0}),Object(f.jsx)("div",{className:l.a.maoList,children:null===(a=F?u.filter((function(e){return-1!==e.name.indexOf(F)})):u)||void 0===a?void 0:a.map((function(e){return Object(f.jsxs)("span",{className:l.a.allMao,onMouseEnter:function(a){a.stopPropagation(),!A&&(!v||v.mao_id!==e.mao_id)&&x(e)},onClick:function(){return p(e)},children:[0!==e.headImgList.length&&Object(f.jsx)(O,{type:"mao",other_id:e.head_img_id,imageList:e.headImgList,initImgList:function(){},isShowUpload:!1,width:"100px",margin:"5px",style:{margin:0,padding:0}}),Object(f.jsx)("div",{children:e.name})]},e.mao_id)}))})]}),"\u5bf9\u6bd4\u732b\u732b"===I&&Object(f.jsx)(K,{maoList:u,setActiveMao:p})]}),h&&Object(f.jsx)(H,{maoList:u,mao:h,back:function(){p(void 0),C()},initFn:function(){return C()}})]})}}}]);