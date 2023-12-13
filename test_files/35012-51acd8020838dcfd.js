"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35012],{89654:function(e,r,n){n.d(r,{B:function(){return c}});var t=n(70865),i=n(52322),o=n(62197),a=n(25709),s=(0,n(8740).ZL)()(function(e,r){var n=e.palette,i=e.tokens,o=i.fontSize,a=i.fontWeight,s=r.showDesignUpliftP32215;return{pricing:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"center",gap:s?"0 2px":"0 5px"},priceValue:(0,t.Z)({},s&&{fontSize:"60px"}),pricingDetails:{fontSize:s?o.m:o.xl,fontWeight:a.normal},pricingDetailsAnnotation:{flexBasis:"100%",fontSize:o.s,fontWeight:a.normal,display:"block",color:n.action.active,whiteSpace:"pre-wrap"}}}),c=function(e){var r=e.productPrice,n=e.pricingDetails,t=e.pricingDetailsAnnotation,c=s({showDesignUpliftP32215:(0,a.u)().showDesignUpliftP32215}).classes;return(0,i.jsxs)(o.Z,{className:c.pricing,variant:"h4",align:"center",children:[(0,i.jsx)("span",{className:c.priceValue,children:r}),n&&(0,i.jsx)("span",{className:c.pricingDetails,children:" ".concat(n)}),t&&(0,i.jsx)("span",{className:c.pricingDetailsAnnotation,children:" ".concat(t)})]})}},32665:function(e,r,n){n.d(r,{RR:function(){return P},sZ:function(){return g}});var t,i=n(52322),o=n(89263),a=n(64106),s=n(70865),c=n(89654),u=function(e){var r=e.initialProps;return(0,i.jsx)(c.B,(0,s.Z)({},r))},l=n(47842),d=n(88849),p=n(2784),f=n(96670),v=n(87414),m=n(22921),y=(t={},(0,l.Z)(t,d.NM,function(e){var r=e.experiment,n=e.initialProps;return(0,p.useEffect)(function(){r.recordImpression()},[]),(0,i.jsx)(u,{initialProps:n})}),(0,l.Z)(t,d.vG,function(e){var r=e.experiment,n=e.initialProps;(0,p.useEffect)(function(){r.recordImpression()},[]);var t=n.product||{},o=t.prices,a=void 0===o?{}:o,c=t.pricesPerSeat,l=t.seatCount,d=(0,v.Yy)({prices:a,localeCurrency:"INR"}),y=a[null==d?void 0:d.toLowerCase()],g=(void 0===c?{}:c)[null==d?void 0:d.toLowerCase()],C=y;g&&l&&(C=y+g*l);var P=(0,f.Z)((0,s.Z)({},n),{productPrice:(0,m.P)(C,d)});return(0,i.jsx)(u,{initialProps:P})}),t),g={flagID:a.T,id:a.s,name:"INR Currency",treatments:y},C=function(){return(0,i.jsx)(i.Fragment,{})},P=function(e){return(0,i.jsx)(o.K,{config:g,initialProps:e,Portal:u,SkeletonLoader:C})}},64106:function(e,r,n){n.d(r,{T:function(){return t},s:function(){return i}});var t="p3-1920-INR",i="P3-1920"},86799:function(e,r,n){n.d(r,{hs:function(){return P},sZ:function(){return g}});var t,i=n(52322),o=n(89263),a=n(60538),s=n(70865),c=n(89654),u=function(e){var r=e.initialProps;return(0,i.jsx)(c.B,(0,s.Z)({},r))},l=n(47842),d=n(88849),p=n(2784),f=n(96670),v=n(87414),m=n(22921),y=(t={},(0,l.Z)(t,d.NM,function(e){var r=e.experiment,n=e.initialProps;return(0,p.useEffect)(function(){r.recordImpression()},[]),(0,i.jsx)(u,{initialProps:n})}),(0,l.Z)(t,d.vG,function(e){var r=e.experiment,n=e.initialProps;(0,p.useEffect)(function(){r.recordImpression()},[]);var t=n.product||{},o=t.prices,a=void 0===o?{}:o,c=t.pricesPerSeat,l=t.seatCount,d=(0,v.Yy)({prices:a,localeCurrency:"BRL"}),y=a[null==d?void 0:d.toLowerCase()],g=(void 0===c?{}:c)[null==d?void 0:d.toLowerCase()],C=y;g&&l&&(C=y+g*l);var P=(0,f.Z)((0,s.Z)({},n),{productPrice:(0,m.P)(C,d)});return(0,i.jsx)(u,{initialProps:P})}),t),g={flagID:a.T,id:a.s,name:"P3-2160 BRL currency",treatments:y},C=function(){return(0,i.jsx)(i.Fragment,{})},P=function(e){return(0,i.jsx)(o.K,{config:g,initialProps:e,Portal:u,SkeletonLoader:C})}},25709:function(e,r,n){n.d(r,{B:function(){return i},u:function(){return o}});var t=n(2784),i=(0,t.createContext)({showDesignUpliftP32215:!1}),o=function(){return(0,t.useContext)(i)}},16077:function(e,r,n){n.d(r,{y:function(){return t}});var t="Flat fee cancellation"},88692:function(e,r,n){n.d(r,{n:function(){return t}});var t="Flat fee cancellation v2"},35012:function(e,r,n){n.d(r,{Q:function(){return W}});var t=n(98788),i=n(47842),o=n(70865),a=n(96670),s=n(87394),c=n(45680),u=n(27739),l=n(44699),d=n(60591),p=n(43801),f=n(65532),v=n(75445),m=n(23490),y=n(88849),g=n(4122),C=n(87414),P=n(32665),h=function(e){var r=e.prices,n=void 0===r?{}:r,t=(0,g.a)(P.sZ).experiment,i=(0,m.N)().isGoodBot,o=(0,f.PE)(),a=o.region,s=o.currencyData.currency,c=void 0===s?v.a:s;return i||t.isInactiveForUser||t.isLoading?(0,C.Yy)({prices:n,localeCurrency:c}):t.variant.treatmentID===y.vG&&"IN"===a?(0,C.Yy)({prices:n,localeCurrency:"INR"}):(0,C.Yy)({prices:n,localeCurrency:c})},I=n(86799),w=function(e){var r=e.prices,n=void 0===r?{}:r,t=(0,g.a)(I.sZ).experiment,i=(0,m.N)().isGoodBot,o=(0,f.PE)(),a=o.region,s=o.currencyData.currency,c=void 0===s?v.a:s;return i||t.isInactiveForUser||t.isLoading?(0,C.Yy)({prices:n,localeCurrency:c}):t.variant.treatmentID===y.vG&&"BR"===a?(0,C.Yy)({prices:n,localeCurrency:"BRL"}):(0,C.Yy)({prices:n,localeCurrency:c})},N=n(16077),Z=n(88692),x=n(66970),D=n(12708),R=function(e){var r=e.couponCode,n=e.productName,t=null;return n===u.Pvj&&r===u.XdV?t=u.E65:n===u.fnR&&r===u.Q9B&&(t=u.Em3),t},b=n(44297),E=n(38419),S=n(18167),j=n(38367),L=n(59979),k=n(70008),F=n(40233),O=n(12649),B=n(25936),T=n(24114),U=n(38204),_=n(31683),z=n(34406).env.NODE_CONFIG_ENV,M=function(){var e=(0,_.u4)()?"production":"qa";switch(z||e){case"dev":return"65021";case"qa":return"12424";case"production":return"14156";default:return"NO_ENV_DEFINED"}},A=function(){var e=(0,_.u4)()?"production":"qa";switch(z||e){case"dev":return"65035";case"qa":return"19606";case"production":return"17383";default:return"NO_ENV_DEFINED"}},G=n(21805),V=n(5632),Y=n(2784),q=function(e){var r,n=e.couponCode,t=e.displayInlineCancellationFlow,a=(0,V.useRouter)(),s=(0,p.v)(),c=!!(null==s?void 0:null===(r=s.current)||void 0===r?void 0:r.isPeacock);return(0,Y.useCallback)(function(e){var r,s=e.orderId,u=(0,E.DW)({language:a.locale,relativePath:(0,U.U2)({queryParams:(0,o.Z)({orderId:s},(null==a?void 0:a.query)||{},c&&{isCreativeAiOrder:"true"},n?(r={},(0,i.Z)(r,d.d9,n),(0,i.Z)(r,d.Gp,n),r):{},t&&{display:"inlineCancellationFlow"})})});a.push(u)},[n,c,a,t])},W=function(e){var r=e.products,n=e.asset,i=e.assetSize,p=e.couponCode,v=e.productId,m=e.productType,y=void 0===m?d.Cs:m,g=e.productOverride,P=e.seatCount,I=e.setCreateOrderStatus,E=void 0===I?function(){}:I,U=e.setIsInvalidCoupon,_=void 0===U?function(){}:U,z=e.vatNumber,W=e.license,Q=e.isLicenseDrawer,H=void 0!==Q&&Q,K=e.preset,X=void 0===K?void 0:K,$=e.eligibilityData,J=void 0===$?{}:$,ee=e.existingUserRedirectPath,er=e.selectedShadowsOption,en=e.shouldForceAsset,et=e.subscriptionIdentifier,ei=e.cancellationReason,eo=(0,f.PE)().region,ea=(0,k.B)().isIndiaRegion,es=(0,O.jy)().data,ec=(0,B.u)().data,eu=(0,O.B)(),el=(0,s.Z)((0,Y.useState)(!1),2),ed=el[0],ep=el[1],ef=(0,s.Z)((0,T.QD)(n)||[],2)[1],ev=J.eligibilityCurrency,em=J.debitableIdentifier,ey=(0,Y.useMemo)(function(){return null!=g?g:(0,o.Z)({},(0,C.$A)(r,v),P?{seatCount:P}:{})},[g,v,r,P]),eg=null==ey?void 0:ey.id,eC=h({prices:null==ey?void 0:ey.prices}),eP=w({prices:null==ey?void 0:ey.prices}),eh=ea?eC:eP,eI=(0,j.Z)({shouldFetch:!!eu}).data,ew=p||ey.couponCode,eN=R({couponCode:ew,productName:null==ey?void 0:ey.name}),eZ=(0,L.Sl)({queryParams:(0,o.Z)({landing_page:(0,S.t)({couponCode:ew,productId:eg,vatNumber:z,seatCount:null==ey?void 0:ey.seatCount,doNotRedirect:!0,asset:ea||void 0!==en&&en?n:void 0,existingUserRedirect:ee||ef,license:W})},X&&{preset:X}),signUpView:eN}),ex=(0,V.useRouter)().asPath,eD=(0,Y.useCallback)(function(){if(window){var e,r;G.Z.set("referer_page",ex),null===(e=window.NREUM)||void 0===e||null===(r=e.addPageAction)||void 0===r||r.call(e,"UP3-1623 assign loggedOutHandler authRedirectPath to href",(0,a.Z)((0,o.Z)({},window.location||{}),{asPath:ex,authRedirectPath:eZ})),window.location.href=eZ}},[ex,eZ]),eR=(0,D.F3)({paymentProfiles:eI}),eb=(0,Y.useCallback)(function(e){var r,n,t={createTime:null==es?void 0:es.createTime,component:"useCreateOrder.js",errorCode:e.code,errorStatus:e.status,errorDetail:e.detail,errorMessage:e.message,errorStack:e.stack||"useCreateOrder",errorTitle:e.title,impersonatorId:ec.impersonatorId,msg:"UP1-2650 Order creation failed",organizationId:null==es?void 0:es.organizationId,referrerPath:window.location.pathname,referrerQuery:window.location.search,userId:null==es?void 0:es.id,username:null==es?void 0:es.username,isLicenseDrawer:H};null===(r=window.NREUM)||void 0===r||null===(n=r.noticeError)||void 0===n||n.call(r,e,t)},[ec,es,H]),eE=q({couponCode:ew,displayInlineCancellationFlow:[N.y,Z.n].includes(ei)}),eS=(0,F.d)(),ej=(0,s.Z)((0,Y.useState)({status:"",error:void 0}),2),eL=ej[0],ek=ej[1],eF=(0,Y.useCallback)((0,t.Z)(function(){var e,r,t,s,p;return(0,c.__generator)(this,function(c){switch(c.label){case 0:if(c.trys.push([0,3,,4]),E({status:"",error:void 0}),ek({status:"",error:void 0}),ep(!0),ea&&u.Tj5.includes(ew))throw Error("free trial offer not available in India");if(!eI)return[3,2];return e=n?{assets:[{asset:n,selectedAssetSize:(0,x.DW)({assetType:(0,b.Tp)(n),assetSize:i})}]}:{},r=[],ei===N.y||ei===Z.n?r.push({product:{id:ei===Z.n?A():M(),type:"products"},cancellationReason:ei,subscriptionIdentifier:et}):(r.push((0,a.Z)((0,o.Z)({},e),{product:ey,productType:y})),null!=ei&&null!=et&&r.push({product:{id:M(),type:"products"},cancellationReason:ei,subscriptionIdentifier:et})),[4,(0,D.LV)({country:eo,currency:ev||eh,paymentProfileId:null==eR?void 0:eR.paymentId,orderItems:r,selectedShadowsOption:er,vatNumber:z,couponCode:ew,license:W,debitableIdentifier:em})];case 1:t=c.sent().data,E({status:l.MR,error:void 0}),ek({status:l.MR,error:void 0}),ep(!1),eE({orderId:t.id}),eS({actionName:"convert - order creation success",customAttributes:{productName:ey.name,productType:y,country:eo,currency:ev||eh,assetType:(0,b.Tp)(n),assetSize:i,license:W,isLicenseDrawer:H}}),c.label=2;case 2:return[3,4];case 3:return s=c.sent(),E({status:l.cM,error:s}),ek({status:l.cM,error:s}),ep(!1),(null==s?void 0:null===(p=s.detail)||void 0===p?void 0:p.toLowerCase())===d.LQ&&_(!0),eb(s),[3,4];case 4:return[2]}})}),[E,ea,ew,eI,n,i,eo,ev,eh,null==eR?void 0:eR.paymentId,ey,y,z,W,em,eE,eS,H,eb,_,er,et,ei]);return{createOrderHandler:eu?eF:eD,isCreateOrderInProgress:ed,product:ey,orderStatus:eL}}}}]);
//# sourceMappingURL=35012-51acd8020838dcfd.js.map