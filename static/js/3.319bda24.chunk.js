(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[3],{277:function(t,e,o){"use strict";var n=o(1);e.a=function(t){var e;return Object(n.a)({},t.componentCls,(e={},Object(n.a)(e,"".concat(t.antCls,"-motion-collapse-legacy"),{overflow:"hidden","&-active":{transition:"height ".concat(t.motionDurationMid," ").concat(t.motionEaseInOut,",\n        opacity ").concat(t.motionDurationMid," ").concat(t.motionEaseInOut," !important")}}),Object(n.a)(e,"".concat(t.antCls,"-motion-collapse"),{overflow:"hidden",transition:"height ".concat(t.motionDurationMid," ").concat(t.motionEaseInOut,",\n        opacity ").concat(t.motionDurationMid," ").concat(t.motionEaseInOut," !important")}),e))}},361:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(0),c=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}return o},a=n.createContext(null),r=function(t){var e=t.children,o=c(t,["children"]),r=n.useContext(a),i=n.useMemo((function(){return Object.assign(Object.assign({},r),o)}),[r,o.prefixCls,o.mode,o.selectable]);return n.createElement(a.Provider,{value:i},e)};e.b=a},484:function(t,e,o){"use strict";var n=o(232),c=o(0),a=o(7),r=o(91),i=o(211),l=o(15),s=o.n(l),d=o(331),u=o(202),b=o(57),m=o(29),g=o(1),p=o(139),O=o(277),f=o(516),j=o(764),h=o(132),v=o(52),x=function(t){var e,o=t.componentCls,n=t.motionDurationSlow,c=t.menuHorizontalHeight,a=t.colorSplit,r=t.lineWidth,i=t.lineType,l=t.menuItemPaddingInline;return Object(g.a)({},"".concat(o,"-horizontal"),(e={lineHeight:"".concat(c,"px"),border:0,borderBottom:"".concat(r,"px ").concat(i," ").concat(a),boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'}},Object(g.a)(e,"".concat(o,"-item, ").concat(o,"-submenu"),{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:l}),Object(g.a)(e,"> ".concat(o,"-item:hover,\n        > ").concat(o,"-item-active,\n        > ").concat(o,"-submenu ").concat(o,"-submenu-title:hover"),{backgroundColor:"transparent"}),Object(g.a)(e,"".concat(o,"-item, ").concat(o,"-submenu-title"),{transition:["border-color ".concat(n),"background ".concat(n)].join(",")}),Object(g.a)(e,"".concat(o,"-submenu-arrow"),{display:"none"}),e))},y=function(t){var e,o=t.componentCls,n=t.menuArrowOffset;return e={},Object(g.a)(e,"".concat(o,"-rtl"),{direction:"rtl"}),Object(g.a)(e,"".concat(o,"-submenu-rtl"),{transformOrigin:"100% 0"}),Object(g.a)(e,"".concat(o,"-rtl").concat(o,"-vertical,\n    ").concat(o,"-submenu-rtl ").concat(o,"-vertical"),Object(g.a)({},"".concat(o,"-submenu-arrow"),{"&::before":{transform:"rotate(-45deg) translateY(-".concat(n,")")},"&::after":{transform:"rotate(45deg) translateY(".concat(n,")")}})),e},I=o(33),S=function(t){return Object.assign({},Object(I.c)(t))},C=function(t,e){var o,n,c,a,r,i,l=t.componentCls,s=t.colorItemText,d=t.colorItemTextSelected,u=t.colorGroupTitle,b=t.colorItemBg,m=t.colorSubItemBg,p=t.colorItemBgSelected,O=t.colorActiveBarHeight,f=t.colorActiveBarWidth,j=t.colorActiveBarBorderSize,h=t.motionDurationSlow,v=t.motionEaseInOut,x=t.motionEaseOut,y=t.menuItemPaddingInline,I=t.motionDurationMid,C=t.colorItemTextHover,w=t.lineType,B=t.colorSplit,H=t.colorItemTextDisabled,E=t.colorDangerItemText,k=t.colorDangerItemTextHover,T=t.colorDangerItemTextSelected,z=t.colorDangerItemBgActive,N=t.colorDangerItemBgSelected,P=t.colorItemBgHover,D=t.menuSubMenuBg,M=t.colorItemTextSelectedHorizontal,A=t.colorItemBgSelectedHorizontal;return Object(g.a)({},"".concat(l,"-").concat(e,", ").concat(l,"-").concat(e," > ").concat(l),(i={color:s,background:b},Object(g.a)(i,"&".concat(l,"-root:focus-visible"),Object.assign({},S(t))),Object(g.a)(i,"".concat(l,"-item-group-title"),{color:u}),Object(g.a)(i,"".concat(l,"-submenu-selected"),Object(g.a)({},"> ".concat(l,"-submenu-title"),{color:d})),Object(g.a)(i,"".concat(l,"-item-disabled, ").concat(l,"-submenu-disabled"),{color:"".concat(H," !important")}),Object(g.a)(i,"".concat(l,"-item:hover, ").concat(l,"-submenu-title:hover"),Object(g.a)({},"&:not(".concat(l,"-item-selected):not(").concat(l,"-submenu-selected)"),{color:C})),Object(g.a)(i,"&:not(".concat(l,"-horizontal)"),(o={},Object(g.a)(o,"".concat(l,"-item:not(").concat(l,"-item-selected)"),{"&:hover":{backgroundColor:P},"&:active":{backgroundColor:p}}),Object(g.a)(o,"".concat(l,"-submenu-title"),{"&:hover":{backgroundColor:P},"&:active":{backgroundColor:p}}),o)),Object(g.a)(i,"".concat(l,"-item-danger"),(n={color:E},Object(g.a)(n,"&".concat(l,"-item:hover"),Object(g.a)({},"&:not(".concat(l,"-item-selected):not(").concat(l,"-submenu-selected)"),{color:k})),Object(g.a)(n,"&".concat(l,"-item:active"),{background:z}),n)),Object(g.a)(i,"".concat(l,"-item a"),{"&, &:hover":{color:"inherit"}}),Object(g.a)(i,"".concat(l,"-item-selected"),(c={color:d},Object(g.a)(c,"&".concat(l,"-item-danger"),{color:T}),Object(g.a)(c,"a, a:hover",{color:"inherit"}),c)),Object(g.a)(i,"& ".concat(l,"-item-selected"),Object(g.a)({backgroundColor:p},"&".concat(l,"-item-danger"),{backgroundColor:N})),Object(g.a)(i,"".concat(l,"-item, ").concat(l,"-submenu-title"),Object(g.a)({},"&:not(".concat(l,"-item-disabled):focus-visible"),Object.assign({},S(t)))),Object(g.a)(i,"&".concat(l,"-submenu > ").concat(l),{backgroundColor:D}),Object(g.a)(i,"&".concat(l,"-popup > ").concat(l),{backgroundColor:b}),Object(g.a)(i,"&".concat(l,"-horizontal"),Object.assign(Object.assign({},"dark"===e?{borderBottom:0}:{}),Object(g.a)({},"> ".concat(l,"-item, > ").concat(l,"-submenu"),(a={top:j,marginTop:-j,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:y,bottom:0,borderBottom:"".concat(O,"px solid transparent"),transition:"border-color ".concat(h," ").concat(v),content:'""'}},Object(g.a)(a,"&:hover, &-active, &-open",{"&::after":{borderBottomWidth:O,borderBottomColor:M}}),Object(g.a)(a,"&-selected",{color:M,backgroundColor:A,"&::after":{borderBottomWidth:O,borderBottomColor:M}}),a)))),Object(g.a)(i,"&".concat(l,"-root"),Object(g.a)({},"&".concat(l,"-inline, &").concat(l,"-vertical"),{borderInlineEnd:"".concat(j,"px ").concat(w," ").concat(B)})),Object(g.a)(i,"&".concat(l,"-inline"),(r={},Object(g.a)(r,"".concat(l,"-sub").concat(l,"-inline"),{background:m}),Object(g.a)(r,"".concat(l,"-item, ").concat(l,"-submenu-title"),j&&f?{width:"calc(100% + ".concat(j,"px)")}:{}),Object(g.a)(r,"".concat(l,"-item"),Object(g.a)({position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:"".concat(f,"px solid ").concat(d),transform:"scaleY(0.0001)",opacity:0,transition:["transform ".concat(I," ").concat(x),"opacity ".concat(I," ").concat(x)].join(","),content:'""'}},"&".concat(l,"-item-danger"),{"&::after":{borderInlineEndColor:T}})),Object(g.a)(r,"".concat(l,"-selected, ").concat(l,"-item-selected"),{"&::after":{transform:"scaleY(1)",opacity:1,transition:["transform ".concat(I," ").concat(v),"opacity ".concat(I," ").concat(v)].join(",")}}),r)),i))},w=function(t){var e,o=t.componentCls,n=t.menuItemHeight,c=t.itemMarginInline,a=t.padding,r=t.menuArrowSize,i=t.marginXS,l=t.marginXXS,s=a+r+i;return e={},Object(g.a)(e,"".concat(o,"-item"),{position:"relative"}),Object(g.a)(e,"".concat(o,"-item, ").concat(o,"-submenu-title"),{height:n,lineHeight:"".concat(n,"px"),paddingInline:a,overflow:"hidden",textOverflow:"ellipsis",marginInline:c,marginBlock:l,width:"calc(100% - ".concat(2*c,"px)")}),Object(g.a)(e,"".concat(o,"-submenu"),{paddingBottom:.02}),Object(g.a)(e,"> ".concat(o,"-item,\n            > ").concat(o,"-submenu > ").concat(o,"-submenu-title"),{height:n,lineHeight:"".concat(n,"px")}),Object(g.a)(e,"".concat(o,"-item-group-list ").concat(o,"-submenu-title,\n            ").concat(o,"-submenu-title"),{paddingInlineEnd:s}),e},B=function(t){var e,o,n,c,a,r,i,l=t.componentCls,s=t.iconCls,d=t.menuItemHeight,u=t.colorTextLightSolid,b=t.dropdownWidth,m=t.controlHeightLG,p=t.motionDurationMid,O=t.motionEaseOut,f=t.paddingXL,j=t.fontSizeSM,h=t.fontSizeLG,v=t.motionDurationSlow,x=t.paddingXS,y=t.boxShadowSecondary,S={height:d,lineHeight:"".concat(d,"px"),listStylePosition:"inside",listStyleType:"disc"};return[(e={},Object(g.a)(e,l,Object(g.a)({},"&-inline, &-vertical",Object.assign(Object(g.a)({},"&".concat(l,"-root"),{boxShadow:"none"}),w(t)))),Object(g.a)(e,"".concat(l,"-submenu-popup"),Object(g.a)({},"".concat(l,"-vertical"),Object.assign(Object.assign({},w(t)),{boxShadow:y}))),e),Object(g.a)({},"".concat(l,"-submenu-popup ").concat(l,"-vertical").concat(l,"-sub"),{minWidth:b,maxHeight:"calc(100vh - ".concat(2.5*m,"px)"),padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}),Object(g.a)({},"".concat(l,"-inline"),(c={width:"100%"},Object(g.a)(c,"&".concat(l,"-root"),Object(g.a)({},"".concat(l,"-item, ").concat(l,"-submenu-title"),(o={display:"flex",alignItems:"center",transition:["border-color ".concat(v),"background ".concat(v),"padding ".concat(p," ").concat(O)].join(",")},Object(g.a)(o,"> ".concat(l,"-title-content"),{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"}),Object(g.a)(o,"> *",{flex:"none"}),o))),Object(g.a)(c,"".concat(l,"-sub").concat(l,"-inline"),(n={padding:0,border:0,borderRadius:0,boxShadow:"none"},Object(g.a)(n,"& > ".concat(l,"-submenu > ").concat(l,"-submenu-title"),S),Object(g.a)(n,"& ".concat(l,"-item-group-title"),{paddingInlineStart:f}),n)),Object(g.a)(c,"".concat(l,"-item"),S),c)),Object(g.a)({},"".concat(l,"-inline-collapsed"),(i={width:2*d},Object(g.a)(i,"&".concat(l,"-root"),Object(g.a)({},"".concat(l,"-item, ").concat(l,"-submenu ").concat(l,"-submenu-title"),Object(g.a)({},"> ".concat(l,"-inline-collapsed-noicon"),{fontSize:h,textAlign:"center"}))),Object(g.a)(i,"> ".concat(l,"-item,\n          > ").concat(l,"-item-group > ").concat(l,"-item-group-list > ").concat(l,"-item,\n          > ").concat(l,"-item-group > ").concat(l,"-item-group-list > ").concat(l,"-submenu > ").concat(l,"-submenu-title,\n          > ").concat(l,"-submenu > ").concat(l,"-submenu-title"),(a={insetInlineStart:0,paddingInline:"calc(50% - ".concat(j,"px)"),textOverflow:"clip"},Object(g.a)(a,"\n            ".concat(l,"-submenu-arrow,\n            ").concat(l,"-submenu-expand-icon\n          "),{opacity:0}),Object(g.a)(a,"".concat(l,"-item-icon, ").concat(s),{margin:0,fontSize:h,lineHeight:"".concat(d,"px"),"+ span":{display:"inline-block",opacity:0}}),a)),Object(g.a)(i,"".concat(l,"-item-icon, ").concat(s),{display:"inline-block"}),Object(g.a)(i,"&-tooltip",(r={pointerEvents:"none"},Object(g.a)(r,"".concat(l,"-item-icon, ").concat(s),{display:"none"}),Object(g.a)(r,"a, a:hover",{color:u}),r)),Object(g.a)(i,"".concat(l,"-item-group-title"),Object.assign(Object.assign({},I.h),{paddingInline:x})),i))]},H=function(t){var e,o,n=t.componentCls,c=t.fontSize,a=t.motionDurationSlow,r=t.motionDurationMid,i=t.motionEaseInOut,l=t.motionEaseOut,s=t.iconCls,d=t.controlHeightSM;return o={},Object(g.a)(o,"".concat(n,"-item, ").concat(n,"-submenu-title"),(e={position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:["border-color ".concat(a),"background ".concat(a),"padding ".concat(a," ").concat(i)].join(",")},Object(g.a)(e,"".concat(n,"-item-icon, ").concat(s),{minWidth:c,fontSize:c,transition:["font-size ".concat(r," ").concat(l),"margin ".concat(a," ").concat(i),"color ".concat(a)].join(","),"+ span":{marginInlineStart:d-c,opacity:1,transition:["opacity ".concat(a," ").concat(i),"margin ".concat(a),"color ".concat(a)].join(",")}}),Object(g.a)(e,"".concat(n,"-item-icon"),Object.assign({},Object(I.g)())),Object(g.a)(e,"&".concat(n,"-item-only-child"),Object(g.a)({},"> ".concat(s,", > ").concat(n,"-item-icon"),{marginInlineEnd:0})),e)),Object(g.a)(o,"".concat(n,"-item-disabled, ").concat(n,"-submenu-disabled"),Object(g.a)({background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"}},"> ".concat(n,"-submenu-title"),{color:"inherit !important",cursor:"not-allowed"})),o},E=function(t){var e,o=t.componentCls,n=t.motionDurationSlow,c=t.motionEaseInOut,a=t.borderRadius,r=t.menuArrowSize,i=t.menuArrowOffset;return Object(g.a)({},"".concat(o,"-submenu"),(e={},Object(g.a)(e,"&-expand-icon, &-arrow",{position:"absolute",top:"50%",insetInlineEnd:t.margin,width:r,color:"currentcolor",transform:"translateY(-50%)",transition:"transform ".concat(n," ").concat(c,", opacity ").concat(n)}),Object(g.a)(e,"&-arrow",{"&::before, &::after":{position:"absolute",width:.6*r,height:.15*r,backgroundColor:"currentcolor",borderRadius:a,transition:["background ".concat(n," ").concat(c),"transform ".concat(n," ").concat(c),"top ".concat(n," ").concat(c),"color ".concat(n," ").concat(c)].join(","),content:'""'},"&::before":{transform:"rotate(45deg) translateY(-".concat(i,")")},"&::after":{transform:"rotate(-45deg) translateY(".concat(i,")")}}),e))},k=function(t){var e,o,n,c,a=t.antCls,r=t.componentCls,i=t.fontSize,l=t.motionDurationSlow,s=t.motionDurationMid,d=t.motionEaseInOut,u=t.lineHeight,b=t.paddingXS,m=t.padding,p=t.colorSplit,O=t.lineWidth,f=t.zIndexPopup,j=t.borderRadiusLG,h=t.radiusSubMenuItem,v=t.menuArrowSize,x=t.menuArrowOffset,y=t.lineType,S=t.menuPanelMaskInset;return[Object(g.a)({"":Object(g.a)({},"".concat(r),Object.assign(Object.assign({},Object(I.a)()),Object(g.a)({},"&-hidden",{display:"none"})))},"".concat(r,"-submenu-hidden"),{display:"none"}),Object(g.a)({},r,Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Object(I.f)(t)),Object(I.a)()),(e={marginBottom:0,paddingInlineStart:0,fontSize:i,lineHeight:0,listStyle:"none",outline:"none",transition:["background ".concat(l),"width ".concat(l," cubic-bezier(0.2, 0, 0, 1) 0s")].join(",")},Object(g.a)(e,"ul, ol",{margin:0,padding:0,listStyle:"none"}),Object(g.a)(e,"&-overflow",Object(g.a)({display:"flex"},"".concat(r,"-item"),{flex:"none"})),Object(g.a)(e,"".concat(r,"-item, ").concat(r,"-submenu, ").concat(r,"-submenu-title"),{borderRadius:t.radiusItem}),Object(g.a)(e,"".concat(r,"-item-group-title"),{padding:"".concat(b,"px ").concat(m,"px"),fontSize:i,lineHeight:u,transition:"all ".concat(l)}),Object(g.a)(e,"&-horizontal ".concat(r,"-submenu"),{transition:["border-color ".concat(l," ").concat(d),"background ".concat(l," ").concat(d)].join(",")}),Object(g.a)(e,"".concat(r,"-submenu, ").concat(r,"-submenu-inline"),{transition:["border-color ".concat(l," ").concat(d),"background ".concat(l," ").concat(d),"padding ".concat(s," ").concat(d)].join(",")}),Object(g.a)(e,"".concat(r,"-submenu ").concat(r,"-sub"),{cursor:"initial",transition:["background ".concat(l," ").concat(d),"padding ".concat(l," ").concat(d)].join(",")}),Object(g.a)(e,"".concat(r,"-title-content"),{transition:"color ".concat(l)}),Object(g.a)(e,"".concat(r,"-item a"),{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}}),Object(g.a)(e,"".concat(r,"-item-divider"),{overflow:"hidden",lineHeight:0,borderColor:p,borderStyle:y,borderWidth:0,borderTopWidth:O,marginBlock:O,padding:0,"&-dashed":{borderStyle:"dashed"}}),e)),H(t)),(n={},Object(g.a)(n,"".concat(r,"-item-group"),Object(g.a)({},"".concat(r,"-item-group-list"),Object(g.a)({margin:0,padding:0},"".concat(r,"-item, ").concat(r,"-submenu-title"),{paddingInline:"".concat(2*i,"px ").concat(m,"px")}))),Object(g.a)(n,"&-submenu",Object(g.a)({"&-popup":{position:"absolute",zIndex:f,background:"transparent",borderRadius:j,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:"".concat(S,"px 0 0"),zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:S}},"> ".concat(r),Object.assign(Object.assign(Object.assign({borderRadius:j},H(t)),E(t)),(o={},Object(g.a)(o,"".concat(r,"-item, ").concat(r,"-submenu > ").concat(r,"-submenu-title"),{borderRadius:h}),Object(g.a)(o,"".concat(r,"-submenu-title::after"),{transition:"transform ".concat(l," ").concat(d)}),o)))),n)),E(t)),(c={},Object(g.a)(c,"&-inline-collapsed ".concat(r,"-submenu-arrow,\n        &-inline ").concat(r,"-submenu-arrow"),{"&::before":{transform:"rotate(-45deg) translateX(".concat(x,")")},"&::after":{transform:"rotate(45deg) translateX(-".concat(x,")")}}),Object(g.a)(c,"".concat(r,"-submenu-open").concat(r,"-submenu-inline > ").concat(r,"-submenu-title > ").concat(r,"-submenu-arrow"),{transform:"translateY(-".concat(.2*v,"px)"),"&::after":{transform:"rotate(-45deg) translateX(-".concat(x,")")},"&::before":{transform:"rotate(45deg) translateX(".concat(x,")")}}),c))),Object(g.a)({},"".concat(a,"-layout-header"),Object(g.a)({},r,{lineHeight:"inherit"}))]},T=o(361),z=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}return o},N=function(t){var e=t.prefixCls,o=t.className,a=t.dashed,r=z(t,["prefixCls","className","dashed"]),i=(0,c.useContext(m.a).getPrefixCls)("menu",e),l=s()(Object(g.a)({},"".concat(i,"-item-divider-dashed"),!!a),o);return c.createElement(n.a,Object.assign({className:l},r))},P=o(66),D=o(2),M={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},A=o(28),R=function(t,e){return c.createElement(A.a,Object(D.a)(Object(D.a)({},t),{},{ref:e,icon:M}))};R.displayName="BarsOutlined";o(301),o(251);var L=o(4),W=function(t){var e,o=t.componentCls,n=t.colorBgContainer,c=t.colorBgBody,a=t.colorText;return Object(g.a)({},"".concat(o,"-sider-light"),(e={background:n},Object(g.a)(e,"".concat(o,"-sider-trigger"),{color:a,background:n}),Object(g.a)(e,"".concat(o,"-sider-zero-width-trigger"),{color:a,background:n,border:"1px solid ".concat(c),borderInlineStart:0}),e))},X=function(t){var e,o,n=t.antCls,c=t.componentCls,a=t.colorText,r=t.colorTextLightSolid,i=t.colorBgHeader,l=t.colorBgBody,s=t.colorBgTrigger,d=t.layoutHeaderHeight,u=t.layoutHeaderPaddingInline,b=t.layoutHeaderColor,m=t.layoutFooterPadding,p=t.layoutTriggerHeight,O=t.layoutZeroTriggerSize,f=t.motionDurationMid,j=t.motionDurationSlow,h=t.fontSize,v=t.borderRadius;return o={},Object(g.a)(o,c,Object.assign(Object.assign((e={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:l,"&, *":{boxSizing:"border-box"}},Object(g.a)(e,"&".concat(c,"-has-sider"),Object(g.a)({flexDirection:"row"},"> ".concat(c,", > ").concat(c,"-content"),{width:0})),Object(g.a)(e,"".concat(c,"-header, &").concat(c,"-footer"),{flex:"0 0 auto"}),Object(g.a)(e,"".concat(c,"-sider"),{position:"relative",minWidth:0,background:i,transition:"all ".concat(f),"&-children":Object(g.a)({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(n,"-menu").concat(n,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:p},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:p,color:r,lineHeight:"".concat(p,"px"),textAlign:"center",background:s,cursor:"pointer",transition:"all ".concat(f)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:d,insetInlineEnd:-O,zIndex:1,width:O,height:O,color:r,fontSize:t.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:i,borderStartStartRadius:0,borderStartEndRadius:v,borderEndEndRadius:v,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(j," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(j),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-O,borderStartStartRadius:v,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:v}}}}),e),W(t)),{"&-rtl":{direction:"rtl"}})),Object(g.a)(o,"".concat(c,"-header"),Object(g.a)({height:d,paddingInline:u,color:b,lineHeight:"".concat(d,"px"),background:i},"".concat(n,"-menu"),{lineHeight:"inherit"})),Object(g.a)(o,"".concat(c,"-footer"),{padding:m,color:a,fontSize:h,background:l}),Object(g.a)(o,"".concat(c,"-content"),{flex:"auto",minHeight:0}),o},G=Object(h.a)("Layout",(function(t){var e=t.colorText,o=t.controlHeightSM,n=t.controlHeight,c=t.controlHeightLG,a=t.marginXXS,r=1.25*c,i=Object(v.b)(t,{layoutHeaderHeight:2*n,layoutHeaderPaddingInline:r,layoutHeaderColor:e,layoutFooterPadding:"".concat(o,"px ").concat(r,"px"),layoutTriggerHeight:c+2*a,layoutZeroTriggerSize:c});return[X(i)]}),(function(t){return{colorBgHeader:"#001529",colorBgBody:t.colorBgLayout,colorBgTrigger:"#002140"}})),Y=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}return o},F=c.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function J(t){var e=t.suffixCls,o=t.tagName;t.displayName;return function(t){return c.forwardRef((function(n,a){return c.createElement(t,Object.assign({ref:a,suffixCls:e,tagName:o},n))}))}}var Z=c.forwardRef((function(t,e){var o=t.prefixCls,n=t.suffixCls,r=t.className,i=t.tagName,l=Y(t,["prefixCls","suffixCls","className","tagName"]),d=(0,c.useContext(m.a).getPrefixCls)("layout",o),u=G(d),b=Object(a.a)(u,2),g=b[0],p=b[1],O=n?"".concat(d,"-").concat(n):d;return g(c.createElement(i,Object.assign({className:s()(o||O,r,p),ref:e},l)))})),_=c.forwardRef((function(t,e){var o,n=c.useContext(m.a).direction,i=c.useState([]),l=Object(a.a)(i,2),d=l[0],u=l[1],b=t.prefixCls,p=t.className,O=t.rootClassName,f=t.children,j=t.hasSider,h=t.tagName,v=Y(t,["prefixCls","className","rootClassName","children","hasSider","tagName"]),x=Object(r.a)(v,["suffixCls"]),y=(0,c.useContext(m.a).getPrefixCls)("layout",b),I=G(y),S=Object(a.a)(I,2),C=S[0],w=S[1],B=s()(y,(o={},Object(g.a)(o,"".concat(y,"-has-sider"),"boolean"===typeof j?j:d.length>0),Object(g.a)(o,"".concat(y,"-rtl"),"rtl"===n),o),p,O,w),H=c.useMemo((function(){return{siderHook:{addSider:function(t){u((function(e){return[].concat(Object(L.a)(e),[t])}))},removeSider:function(t){u((function(e){return e.filter((function(e){return e!==t}))}))}}}}),[]);return C(c.createElement(F.Provider,{value:H},c.createElement(h,Object.assign({ref:e,className:B},x),f)))})),q=(J({tagName:"section",displayName:"Layout"})(_),J({suffixCls:"header",tagName:"header",displayName:"Header"})(Z),J({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Z),J({suffixCls:"content",tagName:"main",displayName:"Content"})(Z),c.createContext({}));!function(){var t=0}();var K=o(226),Q=Object(c.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),U=function(t){var e,o,a=t.className,i=t.children,l=t.icon,d=t.title,u=t.danger,m=c.useContext(Q),p=m.prefixCls,O=m.firstLevel,f=m.direction,j=m.disableMenuItemTitleTooltip,h=m.inlineCollapsed,v=c.useContext(q).siderCollapsed,x=d;"undefined"===typeof d?x=O?i:"":!1===d&&(x="");var y={title:x};v||h||(y.title=null,y.open=!1);var I=Object(P.a)(i).length,S=c.createElement(n.b,Object.assign({},Object(r.a)(t,["title","icon","danger"]),{className:s()((e={},Object(g.a)(e,"".concat(p,"-item-danger"),u),Object(g.a)(e,"".concat(p,"-item-only-child"),1===(l?I+1:I)),e),a),title:"string"===typeof d?d:void 0}),Object(b.a)(l,{className:s()(Object(b.c)(l)?null===(o=l.props)||void 0===o?void 0:o.className:"","".concat(p,"-item-icon"))}),function(t){var e=c.createElement("span",{className:"".concat(p,"-title-content")},i);return(!l||Object(b.c)(i)&&"span"===i.type)&&i&&t&&O&&"string"===typeof i?c.createElement("div",{className:"".concat(p,"-inline-collapsed-noicon")},i.charAt(0)):e}(h));return j||(S=c.createElement(K.a,Object.assign({},y,{placement:"rtl"===f?"left":"right",overlayClassName:"".concat(p,"-inline-collapsed-tooltip")}),S)),S},V=function(t){var e,o,a=t.popupClassName,i=t.icon,l=t.title,d=t.theme,u=c.useContext(Q),m=u.prefixCls,g=u.inlineCollapsed,p=u.theme,O=u.mode,f=Object(n.h)();if(i){var j=Object(b.c)(l)&&"span"===l.type;o=c.createElement(c.Fragment,null,Object(b.a)(i,{className:s()(Object(b.c)(i)?null===(e=i.props)||void 0===e?void 0:e.className:"","".concat(m,"-item-icon"))}),j?l:c.createElement("span",{className:"".concat(m,"-title-content")},l))}else o=g&&!f.length&&l&&"string"===typeof l?c.createElement("div",{className:"".concat(m,"-inline-collapsed-noicon")},l.charAt(0)):c.createElement("span",{className:"".concat(m,"-title-content")},l);var h=c.useMemo((function(){return Object.assign(Object.assign({},u),{firstLevel:!1})}),[u]),v="horizontal"===O?[0,8]:[10,0];return c.createElement(Q.Provider,{value:h},c.createElement(n.f,Object.assign({popupOffset:v},Object(r.a)(t,["icon"]),{title:o,popupClassName:s()(m,a,"".concat(m,"-").concat(d||p))})))},$=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}return o};function tt(t){return(t||[]).map((function(t,e){if(t&&"object"===typeof t){var o=t,a=o.label,r=o.children,i=o.key,l=o.type,s=$(o,["label","children","key","type"]),d=null!==i&&void 0!==i?i:"tmp-".concat(e);return r||"group"===l?"group"===l?c.createElement(n.c,Object.assign({key:d},s,{title:a}),tt(r)):c.createElement(V,Object.assign({key:d},s,{title:a}),tt(r)):"divider"===l?c.createElement(N,Object.assign({key:d},s)):c.createElement(U,Object.assign({key:d},s),a)}return null})).filter((function(t){return t}))}function et(t){return c.useMemo((function(){return t?tt(t):t}),[t])}var ot=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}return o},nt=Object(c.forwardRef)((function(t,e){var o,l,g=c.useContext(T.b),I=g||{},S=c.useContext(m.a),w=S.getPrefixCls,H=S.getPopupContainer,E=S.direction,z=w(),N=t.prefixCls,P=t.className,D=t.theme,M=void 0===D?"light":D,A=t.expandIcon,R=t._internalDisableMenuItemTitleTooltip,L=t.inlineCollapsed,W=t.siderCollapsed,X=t.items,G=t.children,Y=t.rootClassName,F=t.mode,J=t.selectable,Z=t.onClick,_=ot(t,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick"]),q=Object(r.a)(_,["collapsedWidth"]),K=et(X)||G;null===(o=I.validator)||void 0===o||o.call(I,{mode:F});var U,V=Object(i.a)((function(){var t;null===Z||void 0===Z||Z.apply(void 0,arguments),null===(t=I.onClick)||void 0===t||t.call(I)})),$=I.mode||F,tt=null!==J&&void 0!==J?J:I.selectable,nt=c.useMemo((function(){return void 0!==W?W:L}),[L,W]),ct={horizontal:{motionName:"".concat(z,"-slide-up")},inline:Object(u.a)(z),other:{motionName:"".concat(z,"-zoom-big")}},at=w("menu",N||I.prefixCls),rt=function(t,e){return Object(h.a)("Menu",(function(t,o){var n=o.overrideComponentToken;if(!1===e)return[];var c=t.colorBgElevated,a=t.colorPrimary,r=t.colorError,i=t.colorErrorHover,l=t.colorTextLightSolid,s=t.controlHeightLG,d=t.fontSize/7*5,u=Object(v.b)(t,{menuItemHeight:s,menuItemPaddingInline:t.margin,menuArrowSize:d,menuHorizontalHeight:1.15*s,menuArrowOffset:"".concat(.25*d,"px"),menuPanelMaskInset:-7,menuSubMenuBg:c}),b=new p.a(l).setAlpha(.65).toRgbString(),m=Object(v.b)(u,{colorItemText:b,colorItemTextHover:l,colorGroupTitle:b,colorItemTextSelected:l,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:a,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new p.a(l).setAlpha(.25).toRgbString(),colorDangerItemText:r,colorDangerItemTextHover:i,colorDangerItemTextSelected:l,colorDangerItemBgActive:r,colorDangerItemBgSelected:r,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:l,colorItemBgSelectedHorizontal:a},Object.assign({},n));return[k(u),x(u),B(u),C(u,"light"),C(m,"dark"),y(u),Object(O.a)(u),Object(f.a)(u,"slide-up"),Object(f.a)(u,"slide-down"),Object(j.a)(u,"zoom-big")]}),(function(t){var e=t.colorPrimary,o=t.colorError,n=t.colorTextDisabled,c=t.colorErrorBg,a=t.colorText,r=t.colorTextDescription,i=t.colorBgContainer,l=t.colorFillAlter,s=t.colorFillContent,d=t.lineWidth,u=t.lineWidthBold,b=t.controlItemBgActive,m=t.colorBgTextHover;return{dropdownWidth:160,zIndexPopup:t.zIndexPopupBase+50,radiusItem:t.borderRadiusLG,radiusSubMenuItem:t.borderRadiusSM,colorItemText:a,colorItemTextHover:a,colorItemTextHoverHorizontal:e,colorGroupTitle:r,colorItemTextSelected:e,colorItemTextSelectedHorizontal:e,colorItemBg:i,colorItemBgHover:m,colorItemBgActive:s,colorSubItemBg:l,colorItemBgSelected:b,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:u,colorActiveBarBorderSize:d,colorItemTextDisabled:n,colorDangerItemText:o,colorDangerItemTextHover:o,colorDangerItemTextSelected:o,colorDangerItemBgActive:c,colorDangerItemBgSelected:c,itemMarginInline:t.marginXXS}}))(t)}(at,!g),it=Object(a.a)(rt,2),lt=it[0],st=it[1],dt=s()("".concat(at,"-").concat(M),P);if("function"===typeof A)U=A;else{var ut=A||I.expandIcon;U=Object(b.a)(ut,{className:s()("".concat(at,"-submenu-expand-icon"),null===(l=null===ut||void 0===ut?void 0:ut.props)||void 0===l?void 0:l.className)})}var bt=c.useMemo((function(){return{prefixCls:at,inlineCollapsed:nt||!1,direction:E,firstLevel:!0,theme:M,mode:$,disableMenuItemTitleTooltip:R}}),[at,nt,E,R,M]);return lt(c.createElement(T.b.Provider,{value:null},c.createElement(Q.Provider,{value:bt},c.createElement(n.g,Object.assign({getPopupContainer:H,overflowedIndicator:c.createElement(d.a,null),overflowedIndicatorPopupClassName:"".concat(at,"-").concat(M),mode:$,selectable:tt,onClick:V},q,{inlineCollapsed:nt,className:dt,prefixCls:at,direction:E,defaultMotions:ct,expandIcon:U,ref:e,rootClassName:s()(Y,st)}),K))))})),ct=Object(c.forwardRef)((function(t,e){var o=Object(c.useRef)(null),n=c.useContext(q);return Object(c.useImperativeHandle)(e,(function(){return{menu:o.current,focus:function(t){var e;null===(e=o.current)||void 0===e||e.focus(t)}}})),c.createElement(nt,Object.assign({ref:o},t,n))}));ct.Item=U,ct.SubMenu=V,ct.Divider=N,ct.ItemGroup=n.c;e.a=ct}}]);