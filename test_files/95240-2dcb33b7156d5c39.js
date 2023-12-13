"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95240],{38353:function(n,t,e){e.r(t),e.d(t,{CmsDarkHeaderBanner:function(){return W}});var o=e(70865),r=e(26297),a=e(52322),i=e(96976),c=e(68052),u=e(87394),d=e(97599),l=e(65532),s=e(12649),_=e(72075),f=e(27764),m=e(5632),h=e(2784),v=e(80589),p=function(n){var t,e,o=n.children,r=(0,m.useRouter)(),i=null==r?void 0:r.asPath,c=(0,u.Z)((0,h.useState)(),2),p=c[0],g=c[1],k=((0,s.jy)().data||{}).id,y=(0,l.PE)();_.j&&(e=null==window?void 0:null===(t=window.location)||void 0===t?void 0:t.href);var Z=(0,f.qw)(i),w=(0,h.useCallback)(function(n){var t,o;g(n),console.error(JSON.stringify({message:n.message,stack:n.stack,err:n,msg:"BannerErrorBoundary onError"})),null===(t=window.NREUM)||void 0===t||null===(o=t.noticeError)||void 0===o||o.call(t,n,{assetType:Z,currentAsPath:i,localeData:y,msg:"MPENG-14 banner error",url:e,userId:k})},[Z,i,y,e,k]);return(0,a.jsx)(v.ErrorBoundary,{onError:w,FallbackComponent:function(){return(0,a.jsx)(d.F,{error:p,statusCode:500,withSearchBar:!0})},children:o})},g=e(8149),k=e(76279),y=e(9823),Z=e(92931),w=e(59877),x=e(3407),b=e(62767),I=e(47842),P=e(62197),E=e(4418),F=e(52983),C=e(64192),R=e(40233),S=e(8740),j=e(75053),A=(0,S.ZL)()(function(n){var t,e,o=n.breakpoints,r=n.palette,a=n.tokens.spacing;return{root:(t={display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"".concat(a.s," ").concat(a.base),backgroundColor:r.background.default,color:r.primary.main},(0,I.Z)(t,o.down("sm"),{flexDirection:"column",minHeight:"".concat(j.oQ,"px")}),(0,I.Z)(t,"minHeight","".concat(j.ep,"px")),t),title:(0,I.Z)({},o.up("sm"),{marginRight:a.m}),button:(e={},(0,I.Z)(e,o.down("sm"),{marginTop:a.s,width:"100%"}),(0,I.Z)(e,"backgroundColor",r.common.white),(0,I.Z)(e,"color",r.common.black),(0,I.Z)(e,"&:hover",{color:r.common.white}),e),buttonRoot:(0,I.Z)({},o.down("sm"),{width:"100%"})}}),N=function(n){var t=n.title,e=n.cta,o=n.tags,r=A().classes,i=(0,R.d)();return(0,a.jsx)(F.k,{Component:(0,a.jsxs)("div",{className:r.root,"data-automation":"header-banner","data-optimize":"CmsHeaderBanner-banner",children:[(0,a.jsx)(P.Z,{variant:"body2",className:r.title,"data-automation":"header-banner-title",children:t}),!!e&&(0,a.jsx)(E.Y,{dataAutomation:"header-banner-cta",label:e.label,href:e.href,trackAnalytics:e.trackAnalytics,classesProps:{root:r.buttonRoot,button:r.button},size:"medium",additionalButtonProps:{onClick:function(){i({actionName:C.hk.CMS_APP_HEADER_BANNER_CTA_CLICK,customAttributes:{component:"CmsAppHeaderBanner",bannerTitle:t,ctaLabel:e.label,ctaHref:e.href}})}}})]}),tags:o})};N.defaultProps={title:void 0,cta:void 0,tags:[]};var B={title:void 0,cta:void 0},D=function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,b.V9)().data,r=(0,x.x)({slug:k.U0}).data;return n=(t.title||t.cta)&&e?(0,o.Z)({},t):void 0===e?B:r&&r.headerBanner?t.disableCmsContent?B:r.headerBanner:B,(0,a.jsx)(N,(0,o.Z)({},n))};D.defaultProps={title:"",cta:null,disableCmsContent:!1};var T=e(96670),M=e(33301),X=e(58332),q=e(21370),L=e(51078),Q=e(92405),z=e(32787),Y=e(67550),U=function(n){var t=n.dark,e=void 0!==t&&t;return(0,a.jsx)(Y.Z,{width:"100%",sx:function(n){var t=n.breakpoints,r=n.palette;return(0,o.Z)((0,I.Z)({height:j.ep},t.down("sm"),{height:j.oQ}),e&&{backgroundColor:r.background.default})}})},V=new Set(["/_shutterstock","/_shutterstock/".concat(g.Y_),"/_shutterstock/image-photo/[title]","/_shutterstock/".concat(k.mo),"/_shutterstock/".concat(k.mo,"/[term]")]),O=new Set(["/_shutterstock","/_shutterstock/".concat(g.Y_),"/_shutterstock/image-photo/[title]","/_shutterstock/".concat(k.mo),"/_shutterstock/".concat(k.mo,"/[term]"),"/_shutterstock/".concat(g.pX),"/_shutterstock/".concat(g.pX,"/[slug]"),"/_shutterstock/".concat(g.pX,"/").concat(k.mo),"/_shutterstock/".concat(g.pX,"/").concat(k.mo,"/[term]"),"/_shutterstock/".concat(g.xF),"/_shutterstock/".concat(g.xF,"/[title]"),"/_shutterstock/".concat(g.xF,"/").concat(k.mo),"/_shutterstock/".concat(g.xF,"/").concat(k.mo,"/[term]"),"/_shutterstock/".concat(g.Qp)]),H=new Set(["/_shutterstock/".concat(g.Qp,"/[title]"),"/_shutterstock/".concat(g.Qp,"/").concat(k.mo),"/_shutterstock/".concat(g.Qp,"/").concat(k.mo,"/[term]")]),K=function(n){var t,e,r=n.banners,i=void 0===r?[]:r,c=(0,l.PE)().region,d=void 0===c?"US":c,_=(0,s.B)(),f=(0,y.D)().isBrandEnterprise,h=(0,m.useRouter)().pathname,v=(0,Q.p)(M.q2,!1,!1,!0),p=O.has(h),g=H.has(h)&&v,k=(0,X.s)(),Z=(0,q._)().href,w=(0,b.V9)().data,x=(0,z.w)().data,I=(null==x?void 0:null===(t=x.data)||void 0===t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.audiences.q32023PromoAudienceVariantGroup)||!1;if(g)return null;if(v&&p&&i.length>=2){var P=(0,u.Z)(i,2),E=P[0],F=P[1];return(0,a.jsx)(N,(0,o.Z)({},I?E:F))}if(void 0===w)return(0,a.jsx)(U,{dark:!0});if(!(null==i?void 0:i.length))return null;var C=i.find(function(n){var t=n.tags;return(0,L.Ee)({tags:void 0===t?[]:t,region:d,isLoggedIn:_,subscriptionData:w,isBrandEnterprise:f})});if(!C)return null;var R=_&&(null==w?void 0:w.totalNumSubscriptionsAllTime)===0&&(null==w?void 0:w.totalNumSubscriptionsActive)===0;if(k&&V.has(h)&&(!_||R)){var S=(0,T.Z)((0,o.Z)({},C.cta),{href:Z});return(0,a.jsx)(N,(0,T.Z)((0,o.Z)({},C),{cta:S}))}return(0,a.jsx)(N,(0,o.Z)({},C))};K.defaultProps={banners:null};var J=new Set(["/_shutterstock","/_shutterstock/".concat(g.Y_),"/_shutterstock/image-photo/[title]","/_shutterstock/".concat(k.mo),"/_shutterstock/".concat(k.mo,"/[term]"),"/_shutterstock/".concat(g.pX),"/_shutterstock/".concat(g.pX,"/[slug]"),"/_shutterstock/".concat(g.pX,"/").concat(k.mo),"/_shutterstock/".concat(g.pX,"/").concat(k.mo,"/[term]"),"/_shutterstock/".concat(g.xF),"/_shutterstock/".concat(g.xF,"/[title]"),"/_shutterstock/".concat(g.xF,"/").concat(k.mo),"/_shutterstock/".concat(g.xF,"/").concat(k.mo,"/[term]"),"/_shutterstock/".concat(g.Qp),"/_shutterstock/".concat(g.Qp,"/[title]"),"/_shutterstock/".concat(g.Qp,"/").concat(k.mo),"/_shutterstock/".concat(g.Qp,"/").concat(k.mo,"/[term]")]),W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.banners,e=n.showHeaderBanner,u=(0,r.Z)(n,["banners","showHeaderBanner"]),d=(0,y.D)().isBrandEnterprise,l=(0,w.$G)(c.aGO).t,s=(0,m.useRouter)().pathname,_=J.has(s),f={title:l("fallback_header_banner_title"),cta:{label:l("fallback_header_banner_button"),href:"/pricing"},tags:[]};if(!e&&0===t.length&&_&&t.push(f),!e&&!_)return null;var h=!(null==t?void 0:t.length)||d;return(0,a.jsx)(i.Z,{theme:Z.q,children:(0,a.jsx)(p,{children:h?(0,a.jsx)(D,(0,o.Z)({},u)):(0,a.jsx)(K,{banners:t})})})};W.defaultProps={title:"",cta:null,banners:null,showHeaderBanner:!1}},52983:function(n,t,e){e.d(t,{k:function(){return a}});var o=e(51078),r=e(2784),a=(0,r.memo)(function(n){var t=n.Component,e=n.tags;return(0,o.EQ)({tags:e})?(0,r.cloneElement)(t):null});a.displayName="CmsTags"},47999:function(n,t,e){e.d(t,{z:function(){return r}});var o=e(83249),r=(0,e(12281).g)(o.Z)},27739:function(n,t,e){e.d(t,{Akq:function(){return S},Aov:function(){return nM},C5H:function(){return nf},CNf:function(){return nA},E3O:function(){return nH},E65:function(){return H},EVc:function(){return P},Em3:function(){return x},HzW:function(){return K},Jbb:function(){return G},KBP:function(){return Y},KQ8:function(){return nu},KgI:function(){return nR},LeO:function(){return nQ},MGI:function(){return nr},MJu:function(){return nT},NH3:function(){return nP},PSS:function(){return nS},PWf:function(){return na},Pvj:function(){return V},Q9B:function(){return w},RDR:function(){return h},RY3:function(){return y},Rmq:function(){return nO},SDc:function(){return n_},SK9:function(){return Q},SxR:function(){return ny},TVC:function(){return nX},Tj5:function(){return W},TsA:function(){return nN},WNh:function(){return nc},Wj7:function(){return nt},XWS:function(){return nq},XdV:function(){return O},Xvg:function(){return nF},YW5:function(){return nD},_xw:function(){return M},bPQ:function(){return nd},bQs:function(){return m},bk6:function(){return v},cLo:function(){return q},cNV:function(){return ni},cdI:function(){return B},czw:function(){return z},dFf:function(){return nn},dMO:function(){return nU},dm5:function(){return R},doD:function(){return nB},fnJ:function(){return nb},fnR:function(){return Z},gIk:function(){return nE},hTg:function(){return p},ikm:function(){return nY},jhn:function(){return L},mem:function(){return nl},njx:function(){return J},pKi:function(){return nI},qik:function(){return g},tqQ:function(){return I},ue$:function(){return nV},v88:function(){return k},vCw:function(){return D},vIt:function(){return T},x1o:function(){return N},xY:function(){return ns},yDj:function(){return nz},yLW:function(){return nL},zCm:function(){return nj},zVs:function(){return nC},zWL:function(){return X}});var o,r,a=e(47842),i=e(50930),c=e(97258),u="ultrahd4k_video",d="hd_video",l="sd_video",s="enhanced_footage_4k_clips",_="enhanced_footage_hd_clips",f="enhanced_footage_sd_clips",m=(o={},(0,a.Z)(o,c.yF,s),(0,a.Z)(o,c.HD,_),(0,a.Z)(o,c.SD,f),o),h=(r={},(0,a.Z)(r,c.yF,u),(0,a.Z)(r,c.HD,d),(0,a.Z)(r,c.SD,l),r),v="portfolio_credit_rules",p="flex3_ecomm_monthly",g="flex10_monthly",k="flex10_cmt_x12",y="flex10_cmt_upfront",Z=k,w="TRYFLEX10",x="freetrialflex10",b="flex25_monthly",I="flex25_cmt_x12",P="flex25_cmt_upfront",E=[b,I,P],F=["flex50_ecomm_monthly","flex50_ecomm_cmt_x12","flex50_ecomm_cmt_upfront"],C=["flex150_ecomm_monthly","flex150_ecomm_cmt_x12","flex150_ecomm_cmt_upfront"],R="flex350_ecomm_cmt_x12",S="flex350_ecomm_cmt_upfront",j=["flex350_ecomm_monthly",R,S],A=["flex750_ecomm_monthly","flex750_ecomm_cmt_x12","flex750_ecomm_cmt_upfront"];(0,i.Z)(E).concat((0,i.Z)(F),(0,i.Z)(C),(0,i.Z)(j),(0,i.Z)(A));var N=(0,i.Z)([p]).concat((0,i.Z)([g,k,y]),(0,i.Z)(E),(0,i.Z)(F),(0,i.Z)(C),(0,i.Z)(j),(0,i.Z)(A),(0,i.Z)(["flex150_cmt_x12","flex150_annual_upf","flex300_cmt_x12","flex300_annual_upf","flex500_cmt_x12","flex500_annual_upf","flex750_cmt_x12","flex750_annual_upf","flex1000_cmt_x12","flex1000_annual_upf"])),B="on_demand_large_1_download",D="on_demand_large_2_download",T="enhanced_2_download_365_day",M="on_demand_large_5_download",X="enhanced_5_download_365_day",q="on_demand_large_25_download",L="enhanced_25_download_365_day",Q=(0,i.Z)([D,T]).concat((0,i.Z)([M,X]),(0,i.Z)([q,L])),z="monthly_10_download_1_month_cmt_x12",Y="monthly_10_download_12_month_upf",U=["monthly_10_download_1_month_upf",z,Y],V=z,O="PICK10FREE",H="freetrialimage",K="freetrialimageaips",J="CREATEFREE",W=[O,J,w],G="monthly_50_download_1_month_cmt_x12",$=["monthly_50_download_1_month_upf",G,"monthly_50_download_12_month_upf"],nn="monthly_350_download_1_month_no_ro_cmt_x12",nt="monthly_350_download_12_month_upf",ne=["monthly_350_download_1_month_no_ro_upf",nn,nt],no=["monthly_750_download_1_month_no_ro_upf","monthly_750_download_1_month_no_ro_cmt_x12","monthly_750_download_12_month_upf"],nr=(0,i.Z)(U).concat((0,i.Z)($),(0,i.Z)(ne),(0,i.Z)(no)),na="standard",ni="enhanced",nc="standard",nu="2_credit_pack",nd="5_credit_pack",nl="30_credit_pack",ns="125_credit_pack",n_="250_credit_pack",nf=[nu,nd,nl,ns,n_],nm=["footage_5_download_nonhd","footage_5_download_hd","footage_5_download_ultrahd4k"],nh=["enhanced_footage_sd_5_pack","enhanced_footage_hd_5_pack","enhanced_footage_4k_5_pack"];["footage_5_download_lowres"].concat((0,i.Z)(nm),(0,i.Z)(nh));var nv=["footage_10_download_nonhd","footage_10_download_hd","footage_10_download_ultrahd4k"],np=["enhanced_footage_sd_10_pack","enhanced_footage_hd_10_pack","enhanced_footage_4k_10_pack"];["footage_10_download_lowres"].concat((0,i.Z)(nv),(0,i.Z)(np));var ng=["footage_25_download_nonhd","footage_25_download_hd","footage_25_download_ultrahd4k"],nk=["enhanced_footage_sd_25_pack","enhanced_footage_hd_25_pack","enhanced_footage_4k_25_pack"];["footage_25_download_lowres"].concat((0,i.Z)(ng),(0,i.Z)(nk));var ny=(0,i.Z)(nm).concat((0,i.Z)(nv),(0,i.Z)(ng),(0,i.Z)(nh),(0,i.Z)(np),(0,i.Z)(nk));(0,i.Z)([l,d,u]).concat((0,i.Z)([f,_,s]),(0,i.Z)(ny));var nZ=["footage_monthly_5_download_1_month_upf","footage_monthly_5_download_1_month_cmt_x12","footage_monthly_5_download_12_month_upf"],nw=["footage_monthly_10_download_1_month_cmt_x12","footage_monthly_10_download_12_month_upf","footage_monthly_10_download_1_month_upf"],nx=["footage_monthly_20_download_1_month_upf","footage_monthly_20_download_1_month_cmt_x12","footage_monthly_20_download_12_month_upf"],nb=(0,i.Z)(nZ).concat((0,i.Z)(nw),(0,i.Z)(nx)),nI="on_demand_editorial_25_download",nP="creative_flow_plus_monthly",nE="single_image_standard_license",nF=["hd_video","ultrahd4k_video","select_video","sd_video","audio_standard_track","audio_enhanced_track","footage_elements_low","footage_elements_medium","footage_elements_high","sfx_standard_track","sfx_enhanced_track","editorial_footage_ecomm_clips",nE,s,_,f,"single_premium_image_standard_license","single_premium_image_enhanced_license"],nC="OUT_OF_CREDITS",nR=["shared_monthly_1000_download_1_month_cmt_x12","shared_monthly_12000_download_12_month_upf","shared_monthly_12000_download_365_day","shared_monthly_750_download_1_month_cmt_x12","shared_monthly_9000_download_12_month_upf","shared_monthly_9000_download_365_day","shared_standard_1_month_cmt_x12","shared_standard_12_month_upf","shared_standard_365_day"],nS="multi_share",nj="footage_standard",nA="footage_enhanced",nN=/^.*(_nonhd|_sd|sd_).*$/gm,nB=/^.*(_hd|hd_).*$/gm,nD=/^.*(_ultrahd4k|_4k_|ultrahd4k_).*$/gm,nT=[g,k,y,b,I,P],nM=(0,i.Z)(U).concat((0,i.Z)($),(0,i.Z)(ne),(0,i.Z)(no),["shared_monthly_750_download_1_month_plus_cmt_x12_2"]),nX=(0,i.Z)(nZ).concat((0,i.Z)(nw),(0,i.Z)(nx)),nq=[D,M,q],nL=[nu,nd,nl],nQ=[nl,ns,n_],nz=(0,i.Z)([B,"enhanced_1_download_365_day"]),nY=["IN"],nU=["IN"],nV="early_cancellation_fee-var-0002",nO="early_cancellation_fee",nH="membership_monthly"},83835:function(n,t,e){e.d(t,{U:function(){return r},V:function(){return o}});var o={default:450,xlarge:550},r="H01"},19522:function(n,t,e){e.d(t,{KQ:function(){return a},LX:function(){return u},Qs:function(){return r},YU:function(){return c},_3:function(){return o},_Y:function(){return l},iH:function(){return d},yI:function(){return i}});var o="jpg",r="eps",a="JPEG",i="png",c="psd",u="tiff",d="mp3",l="wav"},25949:function(n,t,e){e.d(t,{FI:function(){return a},Fi:function(){return o},Nd:function(){return i},YC:function(){return r}});var o="model",r="model_and_property",a="model_released",i="property"},58332:function(n,t,e){e.d(t,{s:function(){return c}});var o=e(88849),r=e(94656),a=e(14985),i=e(81643),c=function(){var n=(0,i.A)(),t=(0,r.l)(a.jm),e=t.variationId,c=t.inExperiment;return e===o.vG&&n&&c}},29292:function(n,t,e){e.d(t,{Be:function(){return R},CP:function(){return y},Ky:function(){return Z},LJ:function(){return I},OB:function(){return C},Rz:function(){return p},SO:function(){return j},UM:function(){return A},bR:function(){return E},f_:function(){return v},jN:function(){return h},lt:function(){return S},mq:function(){return w},qI:function(){return b},zm:function(){return F}});var o,r=e(47842),a=e(70865),i=e(96670),c=e(50930),u=e(81034),d=e(8149),l=e(86795),s=e(44297),_=e(37546),f=e(18174),m=(o={},(0,r.Z)(o,d.gP,d.k4),(0,r.Z)(o,d.nj,d.pX),(0,r.Z)(o,d.cF,d.pX),(0,r.Z)(o,d.k4,d.k4),(0,r.Z)(o,d.Y_,d.k4),(0,r.Z)(o,d.pX,d.pX),(0,r.Z)(o,d.FM,d.pX),(0,r.Z)(o,d.j0,d.xF),(0,r.Z)(o,d.xF,d.xF),(0,r.Z)(o,d.jr,d.xF),(0,r.Z)(o,d.tn,d.tn),(0,r.Z)(o,d.zo,d.zo),o),h=function(n){return m[(0,_.Lr)(n).type]||m[n.type]||d.k4},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.channels,e=n.isOffsetAsset;if((0,s.PD)({channels:t})||e)return u.P$o},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.channels,e=n.isOffsetAsset;if((0,s.PD)({channels:t})||e)return u.Fz$},g=function(n){var t=n.genres,e=n.moods,o=(void 0===e?[]:e).map(function(n){return"Mood:".concat(n)}),r=(void 0===t?[]:t).map(function(n){return"Genre:".concat(n)});return(0,c.Z)(o).concat((0,c.Z)(r)).join(", ")},k=function(n){var t=n.ucsCategory,e=void 0===t?"":t,o=n.ucsSubCategory,r=void 0===o?"":o;return(0,c.Z)(e?["Category:".concat(e)]:[]).concat((0,c.Z)(r?["Category:".concat(r)]:[])).join(", ")},y=function(n){var t,e=(0,_.Lr)(n);switch(h(n)){case d.xF:return g(e);case d.tn:return k(e);case d.k4:case d.pX:default:return Array.isArray(t=e.categories)?t.map(function(n){return n.name}).join(", "):t}},Z=function(n){var t;return(t=n.channels||(0,_.Lr)(n).channels)&&t.join(",")},w=function(n){var t,e,o,r,a,i,c,u,d,l,s=n.gridItems,f=n.item,m=(0,_.Lr)(f),h=s.findIndex(function(n){var t=n.asset,e=n.image,o=n.mediaItem,r=n.item,a=n.id;return(null==t?void 0:t.mediaItem)?t.mediaItem.id===m.id:t?t.id===m.id:(null==r?void 0:r.mediaItem)?r.mediaItem.id===m.id:o?o.id===m.id:e?e.id===m.id:a===m.id});if(-1===h)return{};var v=h,p=(null===(t=f.meta)||void 0===t?void 0:null===(e=t.pagination)||void 0===e?void 0:e.pageNumber)||(null===(o=f.meta)||void 0===o?void 0:null===(r=o.page)||void 0===r?void 0:r.number),g=(null===(a=f.meta)||void 0===a?void 0:null===(i=a.pagination)||void 0===i?void 0:i.pageSize)||(null===(c=f.meta)||void 0===c?void 0:null===(u=c.page)||void 0===u?void 0:u.size),k=(null===(d=f.meta)||void 0===d?void 0:null===(l=d.pagination)||void 0===l?void 0:l.numInjected)||0;return p&&g&&(v=h+(g+k)*(p-1)),{position:v}},x=function(n){var t=n.cartData,e=n.item,o=n.licenseId,r=n.licensePrice;if(o&&r)return{variant:o,price:r===d.q9?0:Number(r)};if(e.licenseId&&e.price){var a=e.price===d.q9?0:Number(e.price);return{variant:e.licenseId,price:a}}var i=t.items.find(function(n){return n.id===e.id})||{},c=!!i.price||0===parseFloat(i.price),u=i.price===d.q9?0:Number(i.price);return i.licenseId&&c?{variant:i.licenseId,price:u}:{}},b=function(n){var t;return null===(t=(0,_.Lr)(n).id)||void 0===t?void 0:t.toString()},I=function(n){var t=(0,_.Lr)(n),e=t.title,o=t.alt,r=t.description;return e||r||o},P=function(n){var t=n.asset,e=n.language;if(!t)return"en";var o=t.descriptionLanguageMap;return o&&o[e]?e:"en"},E=function(n){var t,e,o,r=n.asset,c=n.cartData,u=n.getSearchContext,d=n.gridItems,l=n.licenseId,_=n.licensePrice,f=n.shouldGetSearchContextFromAsset,m=n.pageSection,g=y(r),k=b(r),Z=v(r),P=p(r);t=f?(null==r?void 0:null===(e=r.meta)||void 0===e?void 0:e.search_context)?{search_context:null==r?void 0:null===(o=r.meta)||void 0===o?void 0:o.search_context}:{}:{search_context:u(r)};var E=(0,a.Z)((0,i.Z)((0,a.Z)((0,i.Z)((0,a.Z)({is_relicense:r.isRelicense,asset_type:(0,s.ZZ)(r),brand:Z||h(r)},g?{category:g}:{}),{name:I(r),product_id:k}),P&&{product_line:P},t),{sku:k,page_section:m}),d?w({gridItems:d,item:r}):{});return c?(0,a.Z)((0,i.Z)((0,a.Z)({},E),{cart_id:c.id,quantity:1}),x({item:r,cartData:c,licenseId:l,licensePrice:_})):(0,i.Z)((0,a.Z)({},E),{variant:l||r.licenseId})},F=function(n){var t,e,o,r,a,i,c,u=n.asset,_=n.index,f=n.cartId,m=b(u),h=(null==u?void 0:u.price)===d.q9?0:null==u?void 0:u.price;return{cartItemId:(0,l.Q)({collectionId:f,mappedAssetType:(0,s.A8)(u),assetId:u.id}),currency:null==u?void 0:u.currency,category:"string"==typeof(null==u?void 0:u.categories)?null==u?void 0:u.categories:((null==u?void 0:u.categories)||[]).map(function(n){return n.name}).join(","),title:u.id,license:null==u?void 0:null===(t=u.metadata)||void 0===t?void 0:null===(e=t.cart)||void 0===e?void 0:e.licenseId,format:null==u?void 0:null===(o=u.metadata)||void 0===o?void 0:null===(r=o.cart)||void 0===r?void 0:r.format,size:null==u?void 0:null===(a=u.metadata)||void 0===a?void 0:null===(i=a.cart)||void 0===i?void 0:i.size,description:u.description,idOfProduct:m,image_url:null==u?void 0:null===(c=u.preview)||void 0===c?void 0:c.url,isFootageSelect:u.isFootageSelect,position:_,price:Number(h),productId:m,type:u.type}},C=function(n){var t=n.asset,e=n.isComp,o=n.isPaid,r=n.isQuickDownload,a=n.isRedownload;return{display_meta_lang:P({asset:t,language:n.language}),is_comp:(void 0!==e&&e).toString(),is_editorial:(0,f.pi)(t).toString(),is_paid_license:(void 0!==o&&o).toString(),is_quick_download:(void 0===r||r).toString(),is_redownload:(void 0===a||a).toString()}},R=function(n){var t=n.trackingId,e=n.searchTerm;return(0,a.Z)({},t?{search_tracking_id:t}:{},e?{search_term:e}:{})},S=function(n){var t=n.asset,e=void 0===t?{}:t,o=e.meta,r=void 0===o?{}:o,a=e.id,i=(0,s.EK)(e),c=(null===(u=r.search_context)||void 0===u?void 0:u.search_tracking_id)||r.trackingId;if(i){var u,d,l=a.toUpperCase(),_=Object.keys(r).find(function(n){return n.toUpperCase()===l});return(null===(d=r[_])||void 0===d?void 0:d.trackingId)||c}return c},j=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).trackAnalytics;if(n){var t=n.label,e=n.section;return"".concat(e,".").concat(t)}return""},A=function(n){var t,e;return(null==n?void 0:null===(t=n._analyticsData)||void 0===t?void 0:null===(e=t._data)||void 0===e?void 0:e.page)||{}}},86795:function(n,t,e){e.d(t,{Q:function(){return r}});var o=e(32456),r=function(n){var t=n.collectionId,e=n.mappedAssetType,r=n.assetId;return"".concat(t,"-").concat(o.EY[e],"-").concat(r)}},61765:function(n,t,e){e.d(t,{Fy:function(){return d},JD:function(){return i},Js:function(){return l},qw:function(){return c},rw:function(){return u}});var o=e(8149),r=e(94054),a=e(44297),i=function(n){var t=n.assetId,e=n.assetType;if((0,a.EK)({id:t}))return o.gP;switch(e){case o.k4:case o.Y_:case o.ox:case o.w5:return o.pV;case o.FM:return o.pX;case o.xF:case o.jr:return o.j0;case o.tn:return o.tn;default:return e}},c=function(n){var t,e=n.asset;if(null===(t=e.image)||void 0===t?void 0:t.isVector)return o.ox;if((0,a.EK)(e))return o.gP;var r=e.imageType||e.itemType||e.type;switch(r){case o.e3:case o.X2:case o.Y_:return o.k4;case o.FM:return o.pX;case o.jr:return o.j0;case o.tn:return o.tn;default:return r}},u=function(n){var t=n.asset;if((0,a.N3)(t))return o.gP;if((0,a.so)(t))return o.cF;var e=t.imageType||t.itemType||t.type;switch(e){case o.ox:case o.pV:case o.e3:case o.X2:case o.Y_:return o.k4;case o.FM:return o.pX;case o.jr:return o.j0;case o.tn:return o.tn;default:return e}},d=function(n){var t=n.asset;if((0,a.N3)(t))return o.nX;if((0,a.so)(t))return o.A7;var e=t.imageType||t.itemType||t.type;switch(e){case o.ox:case o.pV:case o.e3:case o.X2:case o.Y_:return o.k4;case o.FM:return o.pX;case o.jr:case o.xF:return o.j0;case o.tn:return o.tn;default:return e}},l=function(n){var t=d({asset:n.mediaItem});return n.licenseName===r._rW[t]}},18174:function(n,t,e){e.d(t,{WB:function(){return s},pi:function(){return l},z6:function(){return d}});var o=e(8149),r=e(25949),a=e(44297),i=function(n){var t=n.hasModelRelease,e=n.hasPropertyRelease,a=n.isEditorialModelRelease,i=n.isPremium,c=n.modelReleaseInfo;return t&&e&&c===r.FI?r.YC:t&&!e&&c===r.FI?r.Fi:!t&&e&&c===r.FI?r.Nd:i&&a?o.ow:a?o.gP:""},c=function(n){var t=n.hasPropertyRelease,e=n.modelReleaseInfo,a=n.isPremium,i=n.isEditorialModelRelease;return t&&e===r.FI?r.YC:t||e!==r.FI?t?r.Nd:a&&i?o.Od:i?o.gP:"":r.Fi},u=function(n){var t=n.type,e=n.isEditorial,r=n.isRexEditorial,a=n.modelReleaseInfo;switch(t){case o.k4:case o.Y_:return!!e&&a===o.gP||r;case o.pX:case o.FM:return a===o.gP||r;default:return!1}},d=function(n){var t=n.hasModelRelease,e=n.hasPropertyRelease,r=n.isEditorial,a=n.isRexEditorial,d=n.isPremium,l=n.modelReleaseInfo,s=n.type,_=u({type:s,isEditorial:r,isRexEditorial:a,modelReleaseInfo:l});switch(s){case o.k4:case o.Y_:return i({hasModelRelease:t,hasPropertyRelease:e,isEditorialModelRelease:_,isPremium:d,modelReleaseInfo:l});case o.pX:case o.FM:return c({isEditorialModelRelease:_,isPremium:d,hasPropertyRelease:e,modelReleaseInfo:l});default:return""}},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,a.MJ)(n)||(0,a.EK)(n))return!0;var t=n.isEditorial,e=n.modelReleaseInfo;switch(n.type){case o.k4:case o.Y_:case o.pX:case o.FM:return!!t&&e===o.gP;default:return!1}},s=function(n){return l(n)||(null==n?void 0:n.hasModelRelease)||(null==n?void 0:n.hasPropertyRelease)}},3407:function(n,t,e){e.d(t,{x:function(){return Z}});var o=e(70865),r=e(81740),a=e(27050),i=e(33701),c=e(53957),u=e(96670),d=e(27764),l=function(n){var t,e,r=n.id,i=n.entries,l=(0,a.E6)(i,r);if(!l)return null;switch(l.ctaButtonType){case c.n8.outline:case c.n8.outlineDarkMode:t=c.Qh;break;case c.n8.primaryRed:t=c.xJ,e=c.Vb;break;default:t=c.xJ}return(0,u.Z)((0,o.Z)((0,u.Z)((0,o.Z)({id:r,label:l.ctaButtonText,href:(0,d.en)(l.ctaButtonUrl)},l.trackAnalytics&&{trackAnalytics:(0,a.AV)({trackAnalytics:l.trackAnalytics,entries:i})}),{variant:t}),e?{color:e}:{}),{contentType:c.wF.button,ctaButtonType:l.ctaButtonType,openLinkInNewTab:l.openLinkInNewTab||null})},s=function(n){var t=n.logoMedia,e=(0,a.U2)({image:t}),o=e.url,r=e.title,i=e.description;return o?{url:o,title:r,description:i}:null},_=function(n){var t=n.id,e=n.entries,o=(0,a.E6)(e,t),r=(0,a.zu)(e,t);if(!o)return null;var c=o.title,u=o.subtitle,d=o.logo,_=o.backgroundImage,f=o.backgroundColor,m=o.width,h=o.alignment,v=o.colorTheme,p=o.height,g=o.cta;return{title:c,subtitle:void 0===u?null:u,logo:s({logoMedia:d}),backgroundImage:(0,a.U2)({image:_,srcSet:(0,a.cK)({heroSize:i.bn})}),backgroundColor:f,width:void 0===m?null:m,alignment:void 0===h?null:h,colorTheme:void 0===v?null:v,height:void 0===p?null:p,cta:g&&l({id:g.id,entries:e}),tags:r}},f=function(n){var t=n.fields.modules,e=n.entries;return _({id:((0,a.v2)(t,c.wF.cmsBanner)||{}).id,entries:e})},m=function(n){var t=n.fields.modules,e=n.entries;return(0,a.Eb)(t,c.wF.cmsBanner).map(function(n){return _({id:n.id,entries:e})})},h=function(n){var t=n.slug;return{contentType:c.wF.fetchComponentsContainer,fieldName:c.mA.slug,fieldValue:t}},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.rawData,e=n.locale;if(!t)return{};var o=(0,a.iG)(t,e);return{headerBanner:f(o),headerBanners:m(o)}},p=e(65532),g=e(49670),k=e(5632),y=e(3255),Z=function(n){var t=n.slug,e=n.normalizer,i=void 0===e?v:e,c=(0,p.PE)().locale,u=(0,k.useRouter)().query,d=h({slug:t}),l=(0,a.pK)((0,o.Z)({query:u,locale:c},d)),s=(0,r.Dn)({queryParams:l}).formattedUrl;return(0,y.ZP)(t?s:null,function(n){return g.Yq.get(n,{}).then(function(n){return i({rawData:n.data,locale:c})}).catch(function(n){var t,e;throw null===(t=window.NREUM)||void 0===t||null===(e=t.addPageAction)||void 0===e||e.call(t,"graceful degradation of cms banner, error fetching CMS data, nothing will be shown to the user",{msg:"graceful degradation of cms banner, error fetching CMS data, nothing will be shown to the user",message:n.message,stack:n.stack,referrerPath:window.location.pathname,referrerQuery:window.location.search}),n})},{})}},51078:function(n,t,e){e.d(t,{EQ:function(){return v},Ee:function(){return m},zx:function(){return h}});var o=e(47842),r=e(65532),a=e(9823),i=e(12649),c=e(62767),u="EXCLUDE",d="loggedIn",l="ACTIVE",s="FLEX",_="LAPSED",f=new Set([d,"LO",l,"FBA",s,_]),m=function(n){var t,e,r,a,i,c=n.tags,m=n.region,h=n.isLoggedIn,v=n.subscriptionData,p=n.isBrandEnterprise;if(0===c.length)return!0;if(p)return!1;var g=h&&(null==v?void 0:v.totalNumSubscriptionsAllTime)===0&&(null==v?void 0:v.totalNumSubscriptionsActive)===0,k=h&&(null==v?void 0:null===(r=v.flexSubscriptions)||void 0===r?void 0:r.length)>0,y=h&&(null==v?void 0:null===(a=v.activeSubscriptions)||void 0===a?void 0:a.length)>0,Z=h&&(null==v?void 0:v.totalNumSubscriptionsAllTime)>0&&(null==v?void 0:v.totalNumSubscriptionsActive)===0,w=(i={},(0,o.Z)(i,d,h),(0,o.Z)(i,"LO",!h),(0,o.Z)(i,l,y),(0,o.Z)(i,"FBA",g),(0,o.Z)(i,s,k),(0,o.Z)(i,_,Z),i);if(c.filter(function(n){return f.has(n)}).length>1||1===c.length&&c[0]===u)return!1;var x=c.includes(u),b=c.some(function(n){return/^[A-Z]{2}$/.test(n)&&"LO"!==n}),I=c.includes(m),P=c.find(function(n){return f.has(n)});return!P&&b?x?!I:I:(!!P||!!b)&&(t=w[P],e=b?I&&t:t,x?!e:e)},h=function(){var n=(0,r.PE)().region,t=(0,i.B)(),e=(0,a.D)().isBrandEnterprise;return{region:void 0===n?"US":n,isLoggedIn:t,subscriptionData:(0,c.V9)().data,isBrandEnterprise:e}},v=function(n){var t=n.tags,e=h();return m({tags:void 0===t?[]:t,region:e.region,isLoggedIn:e.isLoggedIn,subscriptionData:e.subscriptionData,isBrandEnterprise:e.isBrandEnterprise})}},59979:function(n,t,e){e.d(t,{Sl:function(){return C},Ov:function(){return F},cM:function(){return E}});var o,r,a=e(47842),i=e(70865),c=e(26297),u=e(87394),d=e(8149),l=e(38398),s=e.n(l),_="signup",f="login",m=(o={},(0,a.Z)(o,_,"/".concat(_)),(0,a.Z)(o,f,"/".concat(f)),o),h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.query,e=s().format({pathname:m[_],query:void 0===t?{}:t});return[e,e]},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.query,e=s().format({pathname:m[f],query:void 0===t?{}:t});return[e,e]},p=e(21805),g=e(70314),k=e.n(g)()().publicRuntimeConfig.authSsoCookieName,y=function(){var n,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).cookies;return"-undefined"===(t?t[k]:p.Z.get(k))},Z=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).cookies,t=y({cookies:n});return{getPathProps:t?v:h,isSignUp:!t}},w=e(9823),x=e(27764),b=e(5632),I=(r={},(0,a.Z)(r,d.k4,d.k4),(0,a.Z)(r,d.pX,d.gW),(0,a.Z)(r,d.VT,d.gP),(0,a.Z)(r,d.nj,d.gP),(0,a.Z)(r,d.xF,d.xF),(0,a.Z)(r,d.Nk,"aigen"),r),P=function(n){var t=n.getPathProps,e=n.query,o=(void 0===e?{}:e).landing_page,r=(0,c.Z)(n.query,["landing_page"]),a=(0,b.useRouter)().asPath,d=(0,w.D)(),l=d.isBrandSstk,s=d.isBrandEnterprise,_=I[(0,x.N6)(a)],f=o||(s?"/"===a?null:a:null),m=(0,i.Z)({},l&&{site:_},f&&{landing_page:decodeURIComponent(f)},r);return(0,u.Z)(t({query:m}),1)[0]},E=function(n){return P({getPathProps:h,query:n})},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return P({getPathProps:v,query:(0,w.D)().isBrandEnterprise?{site:"premier"}:n})},C=function(n){var t=n.cookies,e=n.queryParams,o=n.signUpView,r=Z({cookies:t}),a=r.getPathProps,c=r.isSignUp;return P({getPathProps:a,query:(0,i.Z)({},e,c&&o?{view:o}:{})})}},40233:function(n,t,e){e.d(t,{d:function(){return u}});var o=e(70865),r=e(96670),a=e(2784),i=e(12649),c=e(25936),u=function(){var n=(0,i.jy)().data,t=(0,c.u)().data;return(0,a.useCallback)(function(e){var a,i,c=e.actionName,u=e.customAttributes,d=(0,r.Z)((0,o.Z)({},void 0===u?{}:u),{userId:null==n?void 0:n.id,impersonatorId:t.impersonatorId,organizationId:null==n?void 0:n.organizationId,msg:c,referrerPath:window.location.pathname,referrerQuery:window.location.search});null===(a=window.NREUM)||void 0===a||null===(i=a.addPageAction)||void 0===i||i.call(a,c,(0,o.Z)({},window.location||{},d))},[n,t])}},88436:function(n,t,e){e.d(t,{r:function(){return r}});var o=e(776),r=function(){var n=(0,o.yh)(),t=n.anonymousId,e=n.analytics,r=(void 0===e?{}:e).getAnonID,a=void 0===r?function(){return""}:r;return t||(null==a?void 0:a())}}}]);
//# sourceMappingURL=95240-2dcb33b7156d5c39.js.map