"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80837],{15454:function(e,n,t){t.d(n,{p:function(){return i}});var o=t(25237),i=t.n(o)()(function(){return Promise.all([t.e(27310),t.e(81503),t.e(88272),t.e(90964),t.e(41290)]).then(t.bind(t,90964)).then(function(e){return e.AddToCartSnackbar})},{loadableGenerated:{webpack:function(){return[90964]}},ssr:!1})},80837:function(e,n,t){t.d(n,{i:function(){return U}});var o=t(47842),i=t(70865),s=t(96670),r=t(52322),a=t(68052),l=t(79441),u=t(11164),d=t(73287),c=t(49328),f=t(86669),h=t(54112),v=t(94909),w=t(73377),g=t(32545),p=t(25237),b=t.n(p),m=t(2784),A=t(8740),S=t(15454),L=t(46159),y=t(685),B=t(18731),T=(0,m.createContext)({}),k=function(e){var n=e.monitoringOrigin,t=(0,m.useContext)(T),o=t.color,i=t.shouldUseIcon,s=t.variant;return(0,r.jsx)(L.F,{color:o,shouldUseIcon:i,variant:s,width:y.G,monitoringOrigin:n})},C=b()(function(){return Promise.all([t.e(34482),t.e(94412)]).then(t.bind(t,21169)).then(function(e){return e.OpenLicenseDrawerButton})},{loadableGenerated:{webpack:function(){return[21169]}},ssr:!1,loading:function(){return(0,r.jsx)(k,{monitoringOrigin:"LicenseDrawerDownloadButton LoadingButtonFallback"})}}),I=function(e){var n=e.eligibility,t=e.asset,o=e.canOpenDrawerOnLoad,s=e.clickAnalyticsLabel,a=e.clickTrackOptions,l=e.label,u=e.addToCartSuccessHandler,d=e.color,c=e.variant,f=e.showIcon,h=e.disabled;return(0,r.jsx)(B.l,{allSizesAssetEligibility:n,asset:t,children:(0,r.jsx)(C,(0,i.Z)({clickAnalyticsLabel:s,label:l,onAddToCartSuccess:u,color:d,variant:c,shouldUseDownloadIcon:f,disabled:h,canOpenDrawerOnLoad:o},a))})},O=t(98202),x=b()(function(){return t.e(43299).then(t.bind(t,43299)).then(function(e){return e.DownloadButton})},{loadableGenerated:{webpack:function(){return[43299]}},ssr:!0}),D=b()(function(){return Promise.all([t.e(41075),t.e(95772),t.e(46243),t.e(35012),t.e(37822),t.e(1818),t.e(75223),t.e(94513),t.e(47309)]).then(t.bind(t,94513)).then(function(e){return e.ExperimentSDAQ434DownloadButton})},{loadableGenerated:{webpack:function(){return[94513]}},ssr:!0}),E=b()(function(){return Promise.all([t.e(41075),t.e(46243),t.e(35012),t.e(1818),t.e(75223),t.e(29131),t.e(85088)]).then(t.bind(t,3075)).then(function(e){return e.ExperimentSDAQ433DownloadButton})},{loadableGenerated:{webpack:function(){return[3075]}},ssr:!0}),F=b()(function(){return Promise.all([t.e(1738),t.e(61668),t.e(68439)]).then(t.bind(t,68439)).then(function(e){return e.AddToCartButton})},{loadableGenerated:{webpack:function(){return[68439]}},ssr:!1,loading:function(){return(0,r.jsx)(k,{monitoringOrigin:"AddToCartButton LoadingButtonFallback"})}}),_=(0,A.ZL)()(function(e,n){var t=e.breakpoints,i=n.iconBreakpoint;return{root:(0,o.Z)({minWidth:150},t.down(i),{minWidth:0})}}),P={download:"common:actions_download",downloadForFree:"image:logout_adp_free_trial_download",redownload:"common:actions_redownload"},U=function(e){var n=e.asset,t=e.assetSize,o=e.clickAnalyticsLabels,p=e.canOpenDrawerOnLoad,b=e.color,A=e.iconBreakpoint,B=e.hideCtaComponent,k=e.variant,C=e.isScrollCTABar,U=e.hideConditionsAreLoading,z=e.isInsideAssetDetails,Z=e.disabled,N=e.isOverlay,j=_({iconBreakpoint:A}).classes,R=(0,h.D)({namespace:a.Otp,translationKeys:P}).labels,V=(0,c.T)({asset:n}).showExperimentSDAQ434,G=(0,d.Z)({asset:n}).showExperimentSDAQ433,W=(0,u.m)(),H=(0,m.useCallback)(function(e){var n=e.hasExistingLicense?o.redownloadButton:o.downloadButton;return(0,w.U_)(n)},[o.downloadButton,o.redownloadButton]),Q=(0,g.iP)(null==n?void 0:n.holding),K=(0,O.A)({asset:n,clickAnalyticsLabels:o,labels:R,assetIsLicensed:Q,hideCtaComponent:B,shouldFetchEligibility:!Q,showExperimentSDAQ434:V}),M=K.addToCartFailureHandler,X=K.addToCartStatus,q=K.addToCartSuccessHandler,J=K.closeAddToCartSnackbarHandler,Y=K.downloadButtonClickAnalyticsLabel,$=K.downloadButtonLabel,ee=K.eligibility,en=K.hasExistingLicense,et=K.shouldShowAddToCartButton,eo=K.shouldShowDownloadButton,ei=K.shouldShowOpenLicenseDrawerButton,es=K.shouldShowButtonLoadingPlaceholder,er=(0,l.L)({asset:n,isInsideAssetDetails:z}).showLoggedOutConversionPanel,ea=(0,v.d)({breakpoint:A}),el=(null==W?void 0:W.insightType)?{clickTrackOptions:{insightType:W.insightType}}:{};return(0,r.jsx)("div",{className:j.root,children:es&&!eo||U?(0,r.jsx)(L.F,{color:b,shouldUseIcon:ea,variant:k,width:y.G,monitoringOrigin:"AssetDownloadCTA-".concat(null==n?void 0:n.type)}):(0,r.jsxs)(T.Provider,{value:{color:b,shouldUseIcon:ea,variant:k},children:[eo&&(C||!er&&!G&&!V)&&(0,r.jsx)(x,(0,s.Z)((0,i.Z)({asset:n,clickAnalyticsLabel:(0,w.U_)(Y)},el),{label:$,color:b,variant:k,shouldUseDownloadIcon:ea,isOverlay:N})),eo&&G&&(0,r.jsx)(E,(0,s.Z)((0,i.Z)({asset:n,clickAnalyticsLabel:(0,w.U_)(Y)},el),{label:$,color:b,variant:k,shouldUseDownloadIcon:ea})),eo&&!C&&V&&(0,r.jsx)(D,(0,s.Z)((0,i.Z)({asset:n,clickAnalyticsLabel:(0,w.U_)(Y)},el),{label:$,color:b,variant:k,shouldUseDownloadIcon:ea})),ei&&(0,r.jsx)(I,{eligibility:ee,asset:n,canOpenDrawerOnLoad:p,clickAnalyticsLabel:H({hasExistingLicense:en}),clickTrackOptions:el,label:en?R.redownload:R.download,addToCartSuccessHandler:q,color:b,variant:k,showIcon:ea,disabled:Z}),et&&(0,r.jsx)(F,(0,i.Z)({asset:n,itemsToAdd:[(0,f.zg)({asset:n,assetSize:t})],onAddToCartSuccess:q,onAddToCartFailure:M,color:b,variant:k,shouldUseIcon:ea,clickAnalyticsLabel:(0,w.U_)(o.addToCartButton)},el)),!!X.status&&(0,r.jsx)(S.p,{alertSeverity:X.status,onCloseSnackbar:J,error:X.error})]})})};U.defaultProps={asset:{},clickAnalyticsLabels:{},iconBreakpoint:null,hideCtaComponent:!1,disabled:!1,isInsideAssetDetails:!0,isOverlay:!1}},685:function(e,n,t){t.d(n,{G:function(){return o},r:function(){return i}});var o=70,i="showDrawerOnLoad"},98202:function(e,n,t){t.d(n,{A:function(){return L}});var o=t(47842),i=t(87394),s=t(44699),r=t(8149),a=t(44297),l=t(37443),u=t(95775),d=t(70008),c=t(59004),f=t(12649),h=t(62767),v=t(2784),w=t(70865),g=t(96670),p=function(e){var n=e.clickAnalyticsLabels,t=e.hasExistingLicense,o=e.isOffsetAsset,i=e.isRexEditorialAsset,s=e.isLoggedInUser,r=e.labels,a=e.override;return(0,w.Z)((0,g.Z)((0,w.Z)({},i?{downloadButtonClickAnalyticsLabel:n.downloadButton,downloadButtonLabel:r.download}:{downloadButtonClickAnalyticsLabel:n.downloadFreeButton,downloadButtonLabel:r.downloadForFree}),{shouldShowDownloadButton:!s&&!o,shouldShowAddToCartButton:!!o&&!t,shouldShowOpenLicenseDrawerButton:s&&!o||s&&o&&t}),null==a?void 0:a())},b=function(e){var n=e.isFootageSelect,t=e.isLoggedInUser,o=e.isLoggedInWithoutPlan;return{shouldShowAddToCartButton:!t||o||n,shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:e.isLoggedInWithPlan&&!n}},m=function(e){var n=e.clickAnalyticsLabels,t=e.hasVideoRenderUrl,o=e.labels;return{downloadButtonClickAnalyticsLabel:n.downloadButton,downloadButtonLabel:o.download,shouldShowAddToCartButton:!1,shouldShowDownloadButton:t,shouldShowOpenLicenseDrawerButton:!1}},A=function(e){var n,t=e.assetType,o=e.clickAnalyticsLabels,i=e.hasExistingLicense,s=e.hasExistingSubscription,a=e.isFootageSelect,l=e.isLoggedInUser,u=e.isOffsetAsset,d=e.isRexEditorialAsset,c=e.hasVideoRenderUrl,f=e.labels,h=e.overrides,v=s||i,w=l&&!v,g=l&&v;switch(t){case r.k4:n=p({clickAnalyticsLabels:o,hasExistingLicense:i,hasPlan:v,isLoggedInUser:l,isOffsetAsset:u,isRexEditorialAsset:d,labels:f,override:h[r.k4]});break;case r.pX:n=b({isFootageSelect:a,isLoggedInUser:l,isLoggedInWithoutPlan:w,isLoggedInWithPlan:g});break;case r.bz:n=m({clickAnalyticsLabels:o,hasVideoRenderUrl:c,labels:f});break;case r.xF:case r.tn:default:n={shouldShowAddToCartButton:!l||w||a,shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:g&&!a}}return t===r.pX&&d?{shouldShowAddToCartButton:!i,shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:i}:n},S=function(e){var n=e.isLoggedInUser,t=e.shouldFetchEligibility,o=e.hasActiveSubscriptionForAssetType,i=e.assetType,s=e.isFootageSelect,a=e.isOffsetAsset,l=!s&&(a&&i===r.k4||i===r.pX||i===r.xF||i===r.tn);return!!(n&&t&&(!1===o||a)&&l)},L=function(e){var n,t,w=e.asset,g=e.clickAnalyticsLabels,p=e.hideCtaComponent,b=void 0!==p&&p,m=e.showExperimentSDAQ434,L=void 0!==m&&m,y=e.labels,B=e.shouldFetchEligibility,T=e.assetIsLicensed,k=w.isFootageSelect,C=(0,a.Tp)(w),I=(0,a.PD)(w),O=(0,a.EK)(w),x=(0,f.B)(),D=(0,d.B)().isIndiaRegion,E=(0,h.DJ)(),F=E.data,_=E.error,P=(0,l.l)({subscriptions:F,assetType:C,isRexEditorialAsset:O}),U=S({isLoggedInUser:x,shouldFetchEligibility:void 0===B||B,hasActiveSubscriptionForAssetType:P,assetType:C,isFootageSelect:k,isOffsetAsset:I}),z=(0,u.IP)({assets:[w],shouldFetch:U}),Z=z.data,N=z.error,j=(0,i.Z)((0,v.useState)({status:"",error:void 0}),2),R=j[0],V=j[1],G=void 0!==T&&T||!!(null==Z?void 0:null===(n=Z.licenses)||void 0===n?void 0:n.length),W=!!(null==Z?void 0:null===(t=Z.subscriptions)||void 0===t?void 0:t.length)||P,H=!!w.videoRenderUrl,Q=A({assetType:C,clickAnalyticsLabels:void 0===g?{}:g,hasExistingLicense:G,hasExistingSubscription:W,isFootageSelect:k,isLoggedInUser:x,isOffsetAsset:I,isRexEditorialAsset:O,hasVideoRenderUrl:H,labels:void 0===y?{}:y,overrides:(0,o.Z)({},r.k4,function(){return!D||x||O||I?L?{shouldShowOpenLicenseDrawerButton:!1}:b&&I?{shouldShowAddToCartButton:!1}:{}:{shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:!0}})}),K=Q.shouldShowDownloadButton,M=Q.shouldShowOpenLicenseDrawerButton,X=Q.shouldShowAddToCartButton,q=Q.downloadButtonClickAnalyticsLabel,J=Q.downloadButtonLabel,Y=(0,v.useCallback)(function(){return V({status:s.MR,error:void 0})},[]),$=(0,v.useCallback)(function(e){return V({status:s.cM,error:e})},[]),ee=(0,v.useCallback)(function(){return V({status:"",error:void 0})},[]);return(0,c.L)({customAttributes:{actionText:J||"",component:"useAssetDownloadCta.js",downloadButtonClickAnalyticsLabel:q,hasExistingLicense:G,hasExistingSubscription:W,hasVideoRenderUrl:H,isFootageSelect:k,isLoggedInUser:x,isOffsetAsset:I,isRexEditorialAsset:O,shouldShowAddToCartButton:X,shouldShowDownloadButton:K,shouldShowOpenLicenseDrawerButton:M},error:N||_,level:N?"error":_?"warn":"",msg:_?"FREN-361 Failed to fetch subscriptions":"render useAssetDownloadCta"}),{addToCartFailureHandler:$,addToCartStatus:R,addToCartSuccessHandler:Y,closeAddToCartSnackbarHandler:ee,downloadButtonClickAnalyticsLabel:q,downloadButtonLabel:J,eligibility:Z,hasExistingLicense:G,shouldShowAddToCartButton:X,shouldShowButtonLoadingPlaceholder:!1,shouldShowDownloadButton:K,shouldShowOpenLicenseDrawerButton:M}}},46159:function(e,n,t){t.d(n,{F:function(){return c}});var o=t(52322),i=t(83249),s=t(72841),r=t(85801),a=t(21647),l=t(40233),u=t(2784),d=(0,t(8740).ZL)()(function(e){var n=e.palette;return{secondary:{"&:disabled":{backgroundColor:n.secondary.main}},"skeleton-secondary":{backgroundColor:n.secondary.dark}}}),c=function(e){var n=e.color,t=e.classesProps,c=e.shouldUseIcon,f=e.shouldUseIconWithLabelBelow,h=e.monitoringOrigin,v=e.variant,w=e.width,g=d().classes,p=(0,l.d)();return((0,u.useEffect)(function(){var e=setTimeout(function(){p({actionName:"FREN-331: ButtonLoadingPlaceholder timeout - ".concat(h)})},1e4);return function(){return clearTimeout(e)}},[]),f)?(0,o.jsx)(i.Z,{className:t.addToCartButton,disabled:!0,variant:"text",size:"large",children:(0,o.jsx)(s.Z,{color:"inherit",size:24})}):c||f?(0,o.jsx)(r.Z,{disabled:!0,size:"large",children:(0,o.jsx)(s.Z,{color:"inherit",size:24})}):(0,o.jsx)(i.Z,{"aria-label":"Loading",classes:{root:g[n]},variant:v,fullWidth:!0,disabled:!0,children:(0,o.jsx)(a.Z,{variant:"text",width:w,classes:{root:g["skeleton-".concat(n)]}})})};c.defaultProps={color:"secondary",shouldUseIcon:!1,shouldUseIconWithLabelBelow:!1,monitoringOrigin:"",variant:"contained",width:"100%"}},79441:function(e,n,t){t.d(n,{L:function(){return u}});var o=t(65532),i=t(44297),s=t(70008),r=t(94909),a=t(12649),l=t(62767),u=function(e){var n=e.asset,t=e.isInsideAssetDetails,u=(0,a.B)(),d=(0,i.aT)(n)&&!(0,i.N3)(n)&&!(0,i.f8)(n)&&!(0,i.PD)({channels:null==n?void 0:n.channels}),c=(0,r.d)(),f=(0,s.B)().isIndiaRegion,h="en"===(0,o.PE)().locale,v=(0,l.V9)().data,w=(void 0===v?{}:v).totalNumSubscriptionsActive;return{showLoggedOutConversionPanel:!u&&d&&!c&&!f&&h&&(void 0===t||t),showLoggedInConversionPanel:u&&d&&!c&&!f&&h&&0===w}}},19928:function(e,n,t){t.d(n,{w:function(){return o}});var o=(0,t(2784).createContext)({})},18731:function(e,n,t){t.d(n,{l:function(){return r}});var o=t(52322),i=t(2784),s=t(19928),r=function(e){var n=e.allSizesAssetEligibility,t=e.asset,r=e.children;return(0,o.jsx)(s.w.Provider,{value:(0,i.useMemo)(function(){return{allSizesAssetEligibility:n,asset:t}},[n,t]),children:r})};r.defaultProps={allSizesAssetEligibility:{},asset:{}}},73287:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(65532),i=t(44297),s=t(70008),r=t(94909),a=t(12649),l=function(e){var n=e.asset,t=(0,i.aT)(n)&&!(0,i.N3)(n)&&!(0,i.f8)(n),l=(0,i.PD)({channels:null==n?void 0:n.channels}),u=(0,a.B)(),d=(0,r.d)(),c=(0,s.B)().isIndiaRegion,f=(0,o.PE)().locale;return{showExperimentSDAQ433:!u&&t&&!d&&!l&&!c&&"en"!==f}}},49328:function(e,n,t){t.d(n,{T:function(){return u}});var o=t(65532),i=t(44297),s=t(70008),r=t(94909),a=t(12649),l=t(62767),u=function(e){var n=e.asset,t=(0,i.aT)(n)&&!(0,i.N3)(n)&&!(0,i.f8)(n),u=(0,i.PD)({channels:null==n?void 0:n.channels}),d=(0,a.B)(),c=(0,r.d)(),f=(0,s.B)().isIndiaRegion,h=(0,o.PE)().locale,v=(0,l.V9)().data,w=void 0===v?{}:v,g=w.totalNumSubscriptionsAllTime,p=w.totalNumSubscriptionsActive;return{showExperimentSDAQ434:0===g&&0===p&&d&&t&&!c&&!u&&!f&&"en"!==h}}},86669:function(e,n,t){t.d(n,{pd:function(){return m},Kw:function(){return A},zg:function(){return S},pl:function(){return w}});var o=t(47842),i=t(70865),s="cart-items",r=t(98217),a=t(27739),l=t(56495),u=t(8149),d=t(12969),c=t(37546),f=t(44297),h=t(18411),v=h.Oy.SSTK_TO_LEGACY;h.Oy.LEGACY_TO_SSTK;var w=function(e){var n,t=e.cartData,o=e.asset,i=e.licenseType,s=void 0===i?null:i;return null==t?void 0:null===(n=t.items)||void 0===n?void 0:n.find(function(e){var n,t,i=(null==e?void 0:null===(n=e.mediaItem)||void 0===n?void 0:n.id)===(null==o?void 0:o.id);return s?i&&(null==e?void 0:null===(t=e.product)||void 0===t?void 0:t.license)===s:i})},g=function(e){var n=e.license,t=e.type,o=e.isVideoAsset;return e.isOffsetAsset&&!n?a.WNh:n||o?n:t===u.tn?l.bK:r.X},p=function(e){var n=e.isVideoAsset,t=e.size,o=e.isFootageSelect,i=e.isOffsetAsset;if(n){var s=t.resolution;return o?"select":v[s]||s.toLowerCase()}if(i)return"offset"},b=function(e){var n=(0,f.Am)(e),t=e.id,r=e.size,a=e.isFootageSelect,l=e.type,u=e.license,d=e.isOffsetAsset,c={type:s,relationships:{"media-item":{data:{id:d?t.toString():t,type:l}}}},h=p({isVideoAsset:n,size:r,isFootageSelect:a,isOffsetAsset:d}),v=g({type:l,license:u,isVideoAsset:n,isOffsetAsset:d});return c.meta=(0,o.Z)({},"legacy_cart",(0,o.Z)({},"cart",(0,i.Z)({},v?{license:v}:{},h?{size:h}:{}))),c},m=function(e){var n=e.items;return null==n?void 0:n.map(function(e){return b(e)})},A=function(e){var n=e.items;return null==n?void 0:n.map(function(e){return{type:s,id:e.id}})},S=function(e){var n=e.asset,t=e.assetSize,o=e.license,i=n.id,s=n.type,r=n.isFootageSelect,a=(0,f.PD)(n),l=(0,f.Tp)(n),h=t;return t||l===u.xF||l===u.tn||l===u.bz||(h=(0,f.Tp)(n)===u.pX?(0,c.kS)(Object.values(n.sizes))[0]:(0,d.M)({asset:n})),{id:i,type:s,isOffsetAsset:a,isFootageSelect:r,size:h,license:o}}},12969:function(e,n,t){t.d(n,{L:function(){return h},M:function(){return f}});var o=t(70865),i=t(96670),s=t(87394),r=t(83835),a=t(19522),l=t(8149),u=t(61765),d=t(37546),c=t(44297),f=function(e){var n=e.asset;switch((0,c.Tp)(n)){case l.pX:return(0,d.FG)(Object.values(n.sizes));case l.k4:default:return(0,d.Nf)((null==n?void 0:n.sizes)&&Object.values(n.sizes))}},h=function(e){var n,t,f,h=e.asset,v=e.selectedAssetSize,w=e.selectedShadowsOption,g=(0,u.qw)({asset:h}),p=(0,c.f8)(h);(0,c.so)(h)&&(g=l.A7);var b=h.id.toString(),m=(0,u.JD)({assetType:g,assetId:b});switch(g){case l.pX:case l.A7:t=null==(n=v||(null===(f=(0,d.Z)({sizes:h.sizes}))||void 0===f?void 0:f[0]))?void 0:n.resolution;break;case l.j0:case l.tn:case l.xF:t=null==(n=v)?void 0:n.resolution;break;case l.pV:case l.ox:default:n=v||(0,d.Nf)(h.sizes),t=(0,s.Z)(n.name.split("_"),1)[0]}return(0,o.Z)({content_id:b,content_type:m,content_size:t,content_format:null==n?void 0:n.format},p?(0,i.Z)((0,o.Z)({},v.format===a.yI&&{include_shadows:"on"===w}),{angle:(null==h?void 0:h.angle)||r.U}):{})}},37443:function(e,n,t){t.d(n,{l:function(){return r}});var o=t(56495),i=t(8149),s=t(24861),r=function(e){var n=e.subscriptions,t=e.assetType;return null==n?void 0:n.some(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.product,r=void 0===n?{status:"",businessUnit:"",name:""}:n,a=r.status,l=r.businessUnit,u=r.name;return a===s.PP&&(t===i.tn?o.LY.includes(u):l===t||"none"===l)})}},95775:function(e,n,t){t.d(n,{IP:function(){return S},jC:function(){return A}});var o=t(70865),i=t(81740),s=t(19522),r=t(8149),a=t(94054),l=t(60591),u=t(61765),d=t(44297),c=t(18411),f=t(37121),h=t(49670),v=t(9009),w=t(81232),g=t(3255),p=t(12649),b=function(e){var n=e.assetTypeFromAsset,t=e.licenseName,i=e.selectedAssetSize;switch(n){case r.pX:return(0,o.Z)({},(null==i?void 0:i.name)&&{content_size:c.Oy.SSTK_TO_LEGACY_ELIGIBILTY[i.name]||i.name});case r.j0:case r.xF:return{content_format:r.j0};case r.tn:return{content_format:s._Y};default:return(0,o.Z)({},(null==i?void 0:i.name)&&{content_size:c.nd[(0,w.z)(i.name)].downloadName},(null==i?void 0:i.format)&&{content_format:i.format},t===l.HS&&{license_name:l.HS},(t===a.sVc||n===r.gP)&&{license_name:a.sVc})}},m=function(e){var n=e.assets,t=e.include,i=e.licenseName,s=e.selectedAssetSize,r=n[0],a=(0,d._L)(r),l={},c=(0,d.f8)(r);(null==n?void 0:n.length)>=2?l.content_ids=n.filter(function(e){return!!e.id}).join(","):l.content_id=null==r?void 0:r.id;var f=b({assetTypeFromAsset:a,licenseName:i,selectedAssetSize:s});return(0,o.Z)({include:void 0===t?"subscriptions,licenses,licenses.product,subscriptions.product":t,content_type:(0,u.JD)({assetType:a,assetId:null==r?void 0:r.id})},f,c&&{content_provider:"pixelsquid-media"},l)},A=function(e){var n=e.licenseeIdentifier,t=e.assets,o=e.licenseName,s=e.selectedAssetSize;return(0,i.Td)({urlParams:{licenseeIdentifier:n},queryParams:m({assets:t,licenseName:o,selectedAssetSize:s})}).formattedUrl},S=function(e){var n,t=e.assets,o=e.licenseeIdentifier,i=void 0===o?a.RU_:o,s=e.licenseName,r=e.selectedAssetSize,l=e.shouldFetch,u=(0,p.B)(),c=(0,d.vh)(null===(n=t[0])||void 0===n?void 0:n.type),w=(0,f.O)({defaultTosStatus:!1}).tosStatus;return(0,g.ZP)((void 0===l||l)&&u&&!c&&w?A({licenseeIdentifier:i,assets:t,licenseName:s,selectedAssetSize:r}):null,function(e){return h.uS.get(e).then(function(e){return(0,v.O)(e.data)})})}},59004:function(e,n,t){t.d(n,{L:function(){return c}});var o=t(70865),i=t(96670),s=t(23490),r=t(776),a=t(21805),l=t(2784),u=t(12649),d=t(25936),c=function(e){var n=e.customAttributes,t=void 0===n?{}:n,c=e.error,f=e.level,h=void 0===f?"error":f,v=e.msg,w=(0,u.jy)().data,g=(0,d.u)().data,p=(0,r.yh)().analytics,b=a.Z.get("n_v"),m=(0,s.N)(),A=m.isGoodBot,S=m.isSuspectedBadBot;(0,l.useEffect)(function(){if(w&&g){var e,n,s,r,a,l=c||Error(v),u="function"==typeof l.toJSON?null===(e=l.toJSON)||void 0===e?void 0:e.call(l):{},d=(0,i.Z)((0,o.Z)({},t,u),{clientVersion:b,errorCode:l.code,errorStatus:l.status,errorDetail:l.detail,errorMessage:l.message,errorStack:l.stack||"useNewRelicNoticeError",errorTitle:l.title,createTime:w.createTime,impersonatorId:g.impersonatorId,isGoodBot:A,isSuspectedBadBot:S,msg:v,organizationId:w.organizationId,path:window.location.pathname,referrerPath:window.location.pathname,query:window.location.search,referrerQuery:window.location.search,userId:w.id,username:w.username});"error"===h?(null===(n=window.NREUM)||void 0===n||null===(s=n.noticeError)||void 0===s||s.call(n,l,d),p.click({name:t.component,eventAction:t.eventAction||"seeError",eventCategory:h,eventLabel:"error-experience",eventValue:t.actionText}),window.origin.includes("localhost")&&console.warn("sent newrelic noticeError",d)):"warn"===h&&(null===(r=window.NREUM)||void 0===r||null===(a=r.addPageAction)||void 0===a||a.call(r,l.message,(0,i.Z)((0,o.Z)({},d),{warning:!0})),window.origin.includes("localhost")&&console.log("sent newrelic addPageAction",d))}},[c,g,h,v,w])}},32545:function(e,n,t){t.d(n,{EC:function(){return T},Il:function(){return u},Jk:function(){return f},KN:function(){return b},N4:function(){return L},R8:function(){return g},Sx:function(){return y},Vx:function(){return B},ZD:function(){return A},_f:function(){return l},ch:function(){return m},iP:function(){return h},qT:function(){return v},sb:function(){return d},wy:function(){return c},yo:function(){return p}});var o=t(68827),i=t(8149),s=t(44297),r=t(56219),a=t(22037),l=function(e){return e.filter(function(e){return!e.mediaItem.isWithdrawn})},u=function(e){return l(e).filter(function(e){return!e.mediaItem.isUpload})},d=function(e){var n;return null===(n=e.assetStatus)||void 0===n?void 0:n.includes(o.ue)},c=function(e){return"3d-object"===e.mediaItem.imageType},f=function(e){return(0,r.sU)(e.mediaItem)},h=function(e){var n;return null==e?void 0:null===(n=e.assetStatus)||void 0===n?void 0:n.includes(o.Th)},v=function(e){var n;return null==e?void 0:null===(n=e.assetStatus)||void 0===n?void 0:n.includes(o.O1)},w=function(e){return d(e)||f(e)},g=function(e){return e.length>0&&e.every(w)},p=function(e){return e.length>0&&!e.some(w)},b=function(e){return e.length>0&&e.every(h)},m=function(e){return e.length>0&&e.every(function(e){return e.isPrivate})},A=function(e){return e.some(function(e){var n=e.mediaItem;return(0,r.tq)(n)})},S=function(e){return(0,r.gS)(e.mediaItem)||(0,r.tq)(e.mediaItem)},L=function(e){return e.some(S)},y=function(e){return e.some(c)},B=function(e){var n={};return e.some(function(e){var t=e.mediaItem;if(t.type===i.bz||t.isUpload)return!1;var o=(0,a.bW)(t);return o in n?n[o]!==(0,s.nF)(t):(n[o]=(0,s.nF)(t),!1)})},T=function(e){return!e.some(function(e){return d(e)||(0,r.aA)(e.mediaItem)||S(e)})}}}]);
//# sourceMappingURL=80837-7930ff43a7821832.js.map