(window.webpackJsonp=window.webpackJsonp||[]).push([[999,155],{1653:function(e,t,n){"use strict";var r=new Map;var o="undefined"==typeof window;function l(component,e){return Object.assign({mixins:[{beforeCreate:function(){this.cleanupHandlers=[];var e=function(){var e=function(){},t=new Promise((function(t){e=t}));return{hydrate:e,hydrationPromise:t}}(),t=e.hydrate,n=e.hydrationPromise;this.Nonce=function(e){var component=e.component,t=e.hydrationPromise;return o?component:function(){return t.then((function(){return function(e){return"function"==typeof e}(e=component)?e().then((function(e){return e.default})):e;var e}))}}({component:component,hydrationPromise:n}),this.hydrate=t,this.hydrationPromise=n},beforeDestroy:function(){this.cleanup()},mounted:function(){var e=this;if(this.$el.nodeType!==Node.COMMENT_NODE){if(!this.never){if(this.whenVisible){var t=function(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(r.has(t))return r.get(t);var n=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return r.set(t,n),n}(!0!==this.whenVisible?this.whenVisible:void 0);if(!t)return void this.hydrate();this.$el.hydrate=this.hydrate;var n=function(){return t.unobserve(e.$el)};return this.cleanupHandlers.push(n),this.hydrationPromise.then(n),void t.observe(this.$el)}if(this.whenIdle){if(!("requestIdleCallback"in window)||!("requestAnimationFrame"in window))return void this.hydrate();var o=requestIdleCallback((function(){requestAnimationFrame(e.hydrate)}),{timeout:this.idleTimeout}),l=function(){return cancelIdleCallback(o)};this.cleanupHandlers.push(l),this.hydrationPromise.then(l)}if(this.interactionEvents&&this.interactionEvents.length){var d={capture:!0,once:!0,passive:!0};this.interactionEvents.forEach((function(t){e.$el.addEventListener(t,e.hydrate,d);e.cleanupHandlers.push((function(){e.$el.removeEventListener(t,e.hydrate,d)}))}))}}}else this.hydrate()},methods:{cleanup:function(){this.cleanupHandlers.forEach((function(e){return e()}))}},render:function(e){return e(this.Nonce,{attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}}]},e)}var d=l({render:function(){return this.$slots.default}},{props:{idleTimeout:{default:2e3,type:Number},never:{type:Boolean},onInteraction:{type:[Array,Boolean,String]},triggerHydration:{default:!1,type:Boolean},whenIdle:{type:Boolean},whenVisible:{type:[Boolean,Object]}},computed:{interactionEvents:function(){return this.onInteraction?!0===this.onInteraction?["focus"]:Array.isArray(this.onInteraction)?this.onInteraction:[this.onInteraction]:[]}},watch:{triggerHydration:{immediate:!0,handler:function(e){e&&this.hydrate()}}}});t.a=d},1876:function(e,t,n){"use strict";var r={components:{cookieBanner:{render(e){let t="";return this.$store.state.cookieBanner&&this.$store.state.cookieBanner.isShown&&(this.$nextTick((()=>{n.e(140).then(n.t.bind(null,3057,7))})),t=e("up-cookie-banner")),t}}}},o=n(3),component=Object(o.a)(r,(function(){var e=this._self._c;return e("client-only",[e("cookie-banner")],1)}),[],!1,null,null,null);t.a=component.exports},2387:function(e){e.exports=JSON.parse('{"nc_ReminderYouAreCurrentlyInSudoModeAsUserR_262":"Reminder: You are currently in SUDO mode as user \\"{storeStateUserNid}\\""}')},2388:function(e){e.exports=JSON.parse("{}")},3082:function(e,t,n){"use strict";n.r(t);var r=n(17),o=n(1653),l=n(107),d=n(106),c=n(643),h={en:n(2387),is:n(2388)},f={name:"SudoWarning",components:{upCAlert:c.default},i18n:{messages:h}},m=n(3),v=Object(m.a)(f,(function(){var e=this;return(0,e._self._c)("up-c-alert",[e._v("\n  "+e._s(e.$t("nc_ReminderYouAreCurrentlyInSudoModeAsUserR_262",{storeStateUserNid:e.$store.state.user.nid}))+"\n")])}),[],!1,null,null,null).exports,_=n(2389),y=n.n(_),w=n(1876),$={injectStyles:[y.a],components:{cookieBanner:w.a},computed:{navHaveErrors(){const{state:e}=this.$store;return e.orgs&&e.orgs.error||e.topNav&&e.topNav.error},shouldShowSmf(){return!this.$fetchState.pending&&this.$store.state.orgs&&this.$store.state.orgs.loaded&&!this.$store.state.orgs.error},localStorage:()=>r.a,getSmfComponent(){return this.isAir3Design()?()=>Promise.all([n.e(42),n.e(129),n.e(917)]).then(n.bind(null,3214)):()=>n.e(916).then(n.bind(null,3215))},commonSmfProps(){return{http:this.$store.state.flags.ff.CI7646GraphqlSmf?null:this.$http,"http-gql":this.$store.state.flags.ff.CI7646GraphqlSmf?this.$httpGql:null,tracker:this.$tracker,location:"very_top","org-uid":this.$store.state.orgs.current.id,"skip-fetch":this.preloadSmf,"local-storage":this.localStorage}}},methods:{isAir3Design(){var e;return"air-3"===(null===(e=this.$nuxt.context.$config)||void 0===e?void 0:e.designSystem)||"air-3"===this.$route.meta.designSystem}},fetchDelay:0},x=Object(m.a)($,undefined,undefined,!1,null,null,null).exports,C={name:"NuxtLayoutUserBase",components:{topNav:()=>Promise.resolve({}),upFooter:()=>Promise.resolve({}),SudoWarning:v,LazyHydrate:o.a},mixins:[x],props:{preloadSmf:{type:Boolean,default:!1}},async fetch(){await Object(d.a)(this.$nuxt.context,this.preloadSmf)},data:()=>({topNavHtml:'<div class="nav-v2"><div>'}),computed:{shouldShowTopNav(){return!this.$fetchState.pending&&!this.navHaveErrors},oneTrustBannerEnabled(){return this.$config.oneTrustBannerEnabled&&this.$store.state.flags.ff.OTBnrOn}},created(){Object(l.a)(this.$store)},beforeMount(){const e=this.$cookies.get("".concat(this.$config.cookiePrefix,"current_organization_uid")),t=r.a.get("".concat(e,"top-nav-html"));t&&(this.topNavHtml=t)}},S={name:"NuxtLayoutUserSsr",components:{topNav:()=>Promise.all([n.e(3),n.e(55),n.e(1012)]).then(n.bind(null,3067)),upFooter:()=>Promise.all([n.e(122),n.e(933),n.e(198)]).then(n.bind(null,3129))},extends:Object(m.a)(C,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"layout-container"},[t("div",{staticClass:"layout"},[!e.$isNativeApp&&e.shouldShowTopNav?t("top-nav"):e.$isNativeApp?e._e():t("div",{domProps:{innerHTML:e._s(e.topNavHtml)}}),e._v(" "),t("main",{attrs:{id:"main",tabindex:"-1"}},[e.$profilingPromise?t("div",{staticClass:"dashboard-placeholder"}):e._e(),e._v(" "),e.shouldShowSmf?e._t("smfVeryTop",(function(){return[t(e.preloadSmf?"div":"client-only",{tag:"component"},[t(e.getSmfComponent,e._b({tag:"component",staticClass:"up-smf-very-top",attrs:{location:"very_top"}},"component",e.commonSmfProps,!1))],1)]})):e._e(),e._v(" "),e._t("beforeContent"),e._v(" "),t("div",{staticClass:"container"},[e.shouldShowSmf?e._t("smfTop",(function(){return[t(e.preloadSmf?"div":"client-only",{tag:"component"},[t(e.getSmfComponent,e._b({tag:"component",staticClass:"up-smf",attrs:{location:"top"}},"component",e.commonSmfProps,!1))],1)]})):e._e(),e._v(" "),!e.$fetchState.pending&&e.$store.state.user.isSudo?t("sudo-warning"):e._e(),e._v(" "),e._t("content",(function(){return[t("nuxt")]}))],2)],2)],1),e._v(" "),t("LazyHydrate",{attrs:{"when-visible":""}},[e.$isNativeApp?e._e():t("up-footer",{attrs:{http:e.$http,"server-cache-key":"footer-".concat(e.$i18n.locale),"should-show-ot-cookie-settings":e.oneTrustBannerEnabled}})],1),e._v(" "),t("cookie-banner")],1)}),[],!1,null,null,null).exports},k=Object(m.a)(S,undefined,undefined,!1,null,null,null);t.default=k.exports},611:function(e,t,n){"use strict";var r=n(653),o=n(747),l=n.n(o),d=n(74),c=n.n(d),h=n(60),f={injectStyles:[l.a,c.a],name:"UpCLineClampV2",components:{UpCResizeObserver:r.a},props:{lines:{type:Number,default:3,required:!0},labelLess:{type:String,default:"less"},labelMore:{type:String,default:"more"},hiddenLabel:{type:String,default:""},expandable:{type:Boolean,default:!0}},data:()=>({expanded:!1,id:Object(h.a)().toString(),hasMore:!0,clamped:!0,lineClampHeight:null}),computed:{style(){return"--lines:".concat(this.lines,";").concat(this.expandable?"--line-clamp-height:".concat(this.lineClampHeight,"px"):"")}},watch:{expanded:{async handler(e){await this.$nextTick(),e&&(this.lineClampHeight=this.$refs["line-clamp"].scrollHeight)}}},mounted(){this.expandable&&(this.handleResize(),this.lineClampHeight=this.$refs["line-clamp"].scrollHeight)},methods:{toggle(){this.clamped=!1,this.expanded=!this.expanded,this.$emit("toggle",{expanded:this.expanded})},handleResize(){const e=this.$refs["line-clamp"];this.hasMore=!this.expanded&&e.scrollHeight>e.clientHeight},onTransitionend(){this.clamped=!this.expanded}}},m=n(3),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{ref:"wrapper",staticClass:"up-line-clamp-v2-wrapper",style:e.style},[e.expandable?t("UpCResizeObserver",{on:{notify:e.handleResize}}):e._e(),e._v(" "),t("div",{ref:"line-clamp",staticClass:"up-line-clamp-v2",class:{expanded:e.expanded,clamped:e.clamped},attrs:{id:"up-line-clamp-v2-".concat(e.id)},on:{transitionend:e.onTransitionend}},[e._t("default")],2),e._v(" "),e.expandable&&e.hasMore||!e.clamped?t("button",{ref:"line-clamp-btn",staticClass:"up-btn-link up-line-clamp-v2-btn",attrs:{"aria-expanded":e.expanded?"true":"false","aria-controls":"up-line-clamp-v2-".concat(e.id),type:"button"},on:{click:function(t){return t.preventDefault(),e.toggle()}}},[e.clamped?e._e():t("span",[t("span",[e._v(e._s(e.labelLess))]),e._v(" "),e.hiddenLabel?t("span",{staticClass:"sr-only"},[e._v(", "+e._s(e.hiddenLabel))]):e._e()]),e._v(" "),!e.expanded&&e.hasMore&&e.clamped?t("span",[t("span",[e._v(e._s(e.labelMore))]),e._v(" "),e.hiddenLabel?t("span",{staticClass:"sr-only"},[e._v(e._s(e.hiddenLabel))]):e._e()]):e._e()]):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},622:function(e,t,n){var content=n(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("3232e0cb",content,!0,{sourceMap:!1,manualInject:!0})},643:function(e,t,n){"use strict";n.r(t);var r=n(720),o=n.n(r),l=n(611),d=n(73),c=n(61),h=n(75),f=n.n(h);var m={info:()=>n.e(99).then(n.bind(null,254)),success:()=>n.e(48).then(n.bind(null,248)),warning:()=>n.e(40).then(n.bind(null,220)),danger:()=>n.e(40).then(n.bind(null,220)),notification:()=>null},v={en:n(666),is:n(667)},_={injectStyles:[o.a,f.a],name:"UpCAlert",components:{UpCLineClampV2:l.a,UpCIconV2:d.default},i18n:{messages:v},props:{type:{type:String,default:"warning"},close:{type:Boolean,default:!1},lineClampLines:{type:Number,default:3},hiddenLabel:{type:String,default:""}},data:()=>({closeIcon:c.default}),computed:{alertType:e=>-1===Object.keys(m).indexOf(e.type)?"warning":e.type,alertClass:e=>"up-alert-".concat(e.alertType),icon:e=>m[e.alertType]},methods:{closeAlert(){this.$emit("alert-close"),setTimeout((()=>{this.$destroy(),this.$el.remove()}))}}},y=n(3),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"up-alert",class:[e.alertClass]},["notification"!==e.type?t("div",{staticClass:"up-alert-icon"},[t("up-c-icon-v2",{attrs:{icon:e.icon,size:["success","info"].indexOf(e.type)>-1?"sm":"md"}})],1):e._e(),e._v(" "),t("div",{staticClass:"up-alert-content break",attrs:{"data-test":"alert-content",role:"alert"}},[e.lineClampLines>0?t("div",{staticClass:"d-md-none"},[t("UpCLineClampV2",{attrs:{lines:e.lineClampLines}},[e._t("default")],2)],1):e._e(),e._v(" "),t("div",{class:[e.lineClampLines>0?"d-none d-md-block":""]},[e._t("default")],2)]),e._v(" "),e.close?t("button",{staticClass:"up-btn-reset up-alert-close",attrs:{type:"button"},on:{click:function(t){return e.closeAlert()}}},[t("span",{staticClass:"sr-only"},[e.hiddenLabel?t("i18n",{attrs:{path:"vc_CloseTheHiddenlabelAlert_37",tag:!1},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n          "+e._s(e.hiddenLabel)+"\n        ")]},proxy:!0}],null,!1,3888493882)}):t("i18n",{attrs:{path:"vc_CloseAlert_38",tag:!1}})],1),e._v(" "),t("up-c-icon-v2",{attrs:{icon:e.closeIcon,size:"sm"}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports},653:function(e,t,n){"use strict";const r=e=>e.sort(((a,b)=>a-b)),o="notify";var l={name:"UpCResizeObserver",props:{widths:{type:Array,default:()=>[],validator:e=>e.every((e=>Number.isFinite(e)&&e>0))},heights:{type:Array,default:()=>[],validator:e=>e.every((e=>Number.isFinite(e)&&e>0))},observeViewport:{type:Boolean,default:!1}},data:()=>({observer:null,width:0,height:0}),computed:{sortedWidthBreakpoints(){return this.widths.length?[...r(this.widths),1/0]:[]},sortedHeightBreakpoints(){return this.heights.length?[...r(this.heights),1/0]:[]}},mounted(){window.requestAnimationFrame((()=>{this.width=this.$el.offsetWidth,this.height=this.$el.offsetHeight,window.up_c_observer_map||(window.up_c_observer_map=new WeakMap),this.widths.length||this.heights.length?(window.up_c_observer_map.set(this.$el,(()=>{this.compareAndNotify("width","offsetWidth",this.sortedWidthBreakpoints),this.compareAndNotify("height","offsetHeight",this.sortedHeightBreakpoints)})),this.notify()):window.up_c_observer_map.set(this.$el,(()=>{this.$emit(o,{width:this.$el.offsetWidth,height:this.$el.offsetHeight})}))})),window.up_c_observer||(window.up_c_observer=new ResizeObserver((e=>{window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length&&window.up_c_observer_map&&e.forEach((e=>{window.up_c_observer_map.has(e.target)&&window.up_c_observer_map.get(e.target)()}))}))}))),window.up_c_observer.observe(this.$el)},beforeDestroy(){window.up_c_observer&&window.up_c_observer.unobserve(this.$el),window.up_c_observer_map&&window.up_c_observer_map.has(this.$el)&&window.up_c_observer_map.delete(this.$el)},methods:{notify(){let e=this.sortedWidthBreakpoints.findIndex((e=>this.width<=e));const t=e<0?this.sortedWidthBreakpoints.length:e;e=this.sortedHeightBreakpoints.findIndex((e=>this.height<=e));const n=e<0?this.sortedHeightBreakpoints.length:e;this.$emit(o,{widthIndex:t,heightIndex:n})},compareAndNotify(e,t,n){if(!n.length)return;const r=n.findIndex(((r,i)=>this[e]<=r&&this.$el[t]>r&&this.$el[t]<=n[i+1]||this[e]>r&&this.$el[t]<=r));r<0||(this.$emit(o,{["".concat(e,"Index")]:r+(this.$el[t]>n[r]?1:0)}),this[e]=this.$el[t])}}},d=(n(664),n(3)),component=Object(d.a)(l,(function(){return(0,this._self._c)("div",{class:["resize-observer",{"observe-viewport":this.observeViewport}],attrs:{tabindex:"-1"}})}),[],!1,null,"5b2135c2",null);t.a=component.exports},664:function(e,t,n){"use strict";n(622)},665:function(e,t,n){var r=n(5)(!1);r.push([e.i,".resize-observer[data-v-5b2135c2]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;display:block;overflow:hidden;visibility:hidden}.resize-observer.observe-viewport[data-v-5b2135c2]{position:fixed;width:100vw;height:100vh}",""]),e.exports=r},666:function(e){e.exports=JSON.parse('{"vc_CloseTheHiddenlabelAlert_37":"Close the {label} alert","vc_CloseAlert_38":"Close the alert"}')},667:function(e){e.exports=JSON.parse("{}")}}]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/FreelancerProfileNuxt/vendors~nuxt-core-layout-user.a586484b.js.map