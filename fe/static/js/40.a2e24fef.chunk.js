(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[40],{181:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n.n(a),o=n(20),s=n(7),c=n(0),l=n(242),i=n(471),u=n(469),g=n(726),j=n(176),b=n(763),f=n(764),p=n(487),d=n(411),_=n(486),m=n.n(_),O=n(113),h=n(12),v=n(91),x=n(93),k=n(192),y=n(10),w=l.a.Group;t.default=Object(h.g)((function(e){var t=e.history,n=e.location,a=Object(c.useState)(""),_=Object(s.a)(a,2),h=_[0],I=_[1],E=Object(c.useState)(""),C=Object(s.a)(E,2),N=C[0],S=C[1],B=Object(c.useState)(!1),L=Object(s.a)(B,2),z=L[0],P=L[1],F=Object(c.useContext)(v.a).setIsLogin,J=Object(c.useContext)(x.a).setUsername,Q=!localStorage.getItem("refresh_token")||""===localStorage.getItem("refresh_token"),A=Object(c.useState)(!Q),G=Object(s.a)(A,2),R=G[0],T=G[1];Object(k.a)("login"),Object(c.useEffect)((function(){n.search&&i.a.warning("\u72b6\u6001\u7801 401\uff1a\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55")}),[]);var U=function(){var e=Object(o.a)(r.a.mark((function e(){var a,o,s,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==h&&""!==N||(i.a.warning("".concat(""===h?"\u8d26\u53f7":"\u5bc6\u7801","\u4e0d\u53ef\u4e3a\u7a7a")),0)){e.next=2;break}return e.abrupt("return");case 2:return a={username:h,password:N},e.next=5,Object(O.b)(a);case 5:(null===(o=e.sent)||void 0===o?void 0:o.access_token)?(F(!0),localStorage.setItem("token",o.access_token),R?localStorage.setItem("refresh_token",o.refresh_token):localStorage.setItem("refresh_token",""),localStorage.setItem("username",h),J(h),i.a.success("\u767b\u5f55\u6210\u529f"),s=n.search,c=t.location.state,l=s?s.replace("?from=",""):c&&c.from?c.from:"/admin",t.push(l)):(i.a.error("\u5bc6\u7801\u9519\u8bef\u6216\u7528\u6237\u4e0d\u5b58\u5728\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),S(""));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(e){"Enter"===e.key&&U()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[h,N]),Object(y.jsx)("div",{className:m.a.Login,children:Object(y.jsx)("div",{className:m.a.loginCont,children:Object(y.jsxs)("div",{className:m.a.loginBox,children:[Object(y.jsx)("span",{className:m.a.please,children:"Please Login:"}),Object(y.jsx)(u.a,{className:m.a.userInput,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",size:"large",value:h,onChange:function(e){return I(e.target.value)},onPressEnter:U,prefix:Object(y.jsx)(b.a,{style:{color:"rgba(0,0,0,.25)"}})}),Object(y.jsx)(u.a,{className:m.a.pwdInput,type:z?"text":"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",size:"large",value:N,onChange:function(e){return S(e.target.value)},onPressEnter:U,prefix:Object(y.jsx)(f.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),suffix:z?Object(y.jsx)(d.a,{className:m.a.pwdEye,style:{color:"rgba(0,0,0,.25)"},onClick:function(){return P(!z)}}):Object(y.jsx)(p.a,{className:m.a.pwdEye,style:{color:"rgba(0,0,0,.25)"},onClick:function(){return P(!z)}})}),Object(y.jsxs)(w,{className:m.a.trust,value:R,onChange:function(e){e.target.value&&Q?g.a.confirm({title:"\u4f60\u5728\u4e00\u53f0\u65b0\u8bbe\u5907\u6216\u4e4b\u524d\u4e0d\u53d7\u4fe1\u4efb\u7684\u8bbe\u5907\u4e0a\u767b\u5f55\uff0c\u6216\u8005\u4e4b\u524d\u624b\u52a8\u9000\u51fa\u8fc7\u767b\u5f55\uff0c\u786e\u8ba4\u4fe1\u4efb\u8be5\u8bbe\u5907\u5417\uff1f",onOk:function(){return T(e.target.value)}}):T(e.target.value)},children:[Object(y.jsx)(l.a,{value:!0,children:"\u4fe1\u4efb\u8be5\u8bbe\u5907"}),Object(y.jsx)(l.a,{value:!1,children:"\u4e0d\u4fe1\u4efb\u8be5\u8bbe\u5907"})]}),Object(y.jsx)(j.a,{className:m.a.loginButton,type:"primary",size:"large",htmlType:"submit",onClick:U,children:"\u767b\u5f55"})]})})})}))},192:function(e,t,n){"use strict";var a=n(0);t.a=function(e){Object(a.useEffect)((function(){return document.title="[\u867e]".concat(e),function(){document.title="\u867e\u867e\u90d1\u7684\u4e2a\u4eba\u7f51\u7ad9"}}),[e])}},486:function(e,t,n){e.exports={Login:"login_Login__1gIRi",loginCont:"login_loginCont__3EFjB",loginBox:"login_loginBox__s0vOA",please:"login_please__1bQEd",userInput:"login_userInput__F_Bsd",pwdInput:"login_pwdInput__376tz",pwdEye:"login_pwdEye__2Isy4",trust:"login_trust__lQ_Wd",loginButton:"login_loginButton__1yuf3"}}}]);