(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1631:function(e,t,n){"use strict";var o=n(941);const r="/freelancers/api/v1/profile/me/pib";var c={getStatus:e=>e({cache:!1,handleApiErrors:!1}).url("".concat(r,"/status")).get().json(),getStatuses:(e,t)=>e({cache:!1,handleApiErrors:!1}).url("".concat(r,"/statuses?profileUids=").concat(t.join(","))).get().json(),getIsViewedRecently:e=>e({cache:!0,handleApiErrors:!1}).url("".concat(r,"/is-viewed-recently")).get().json(),postTurnOff:(e,t)=>e({cache:!1,handleApiErrors:!1}).url("".concat(r,"/off")).post({reason:t}).json(),postTurnOn:(e,t)=>e({cache:!1,handleApiErrors:!1}).url("".concat(r,"/on")).post({maxPrice:t}).json()};var l={namespaced:!0,state:()=>({isFetching:!1,context:{isFreelancer:!1,isAgency:!1,hasAgencies:!1,currentAgencyName:null},availability:{capacity:null},visibility:null,personUid:null,active:!1,currentPrice:-1,maxPrice:-1,consumedConnectFraction:null,eligible:!1,availableConnects:-1,statuses:{},isViewedRecentlyFetching:!1,isViewedRecentlyFetched:!1,isViewedRecently:null}),mutations:{setFetching(e,t){e.isFetching=t},setStatus(e,t){let{personUid:n,active:o,currentPrice:r,maxPrice:c,consumedConnectFraction:l,eligible:d,availableConnects:h}=t;e.personUid=n,e.active=o,e.currentPrice=r,e.maxPrice=c,e.consumedConnectFraction=l,e.eligible=d,e.availableConnects=h},setContext(e,t){let{isFreelancer:n,isAgency:o,hasAgencies:r,currentAgencyName:c}=t;if("boolean"!=typeof n)throw new TypeError("`isFreelancer` should be a boolean.");if("boolean"!=typeof o)throw new TypeError("`isAgency` should be a boolean.");if("boolean"!=typeof r)throw new TypeError("`hasAgencies` should be a boolean.");if("string"!=typeof c&&null!==c)throw new TypeError("`currentAgencyName` should either be a string or null.");e.context.isFreelancer=n,e.context.isAgency=o,e.context.hasAgencies=r,e.context.currentAgencyName=c},setAvailability(e,t){let{capacity:n}=t;if(void 0===n)throw new TypeError("`capacity` should be defined.");e.availability.capacity=n},setVisibility(e,t){if("number"!=typeof t||Number.isNaN(t))throw new TypeError("`visibility` should be a number.");e.visibility=t},setActive(e,t){if("boolean"!=typeof t)throw new TypeError("`active` should be a boolean.");e.active=t},setMaxPrice(e,t){if("number"!=typeof t||Number.isNaN(t))throw new TypeError("`maxPrice` should be a number.");e.maxPrice=t},setStatuses(e,t){if(Array.isArray(t)||"object"!=typeof t)throw new TypeError("`statuses` should be an object.");if(Object.keys(t).find((e=>"boolean"!=typeof t[e])))throw new TypeError("`statuses` object should contain only booleans.");e.statuses=t},setIsViewedRecentlyFetching(e,t){e.isViewedRecentlyFetching=t},setIsViewedRecentlyFetched(e,t){e.isViewedRecentlyFetched=t},setIsViewedRecently(e,t){e.isViewedRecently=t}},getters:{getStatus:e=>t=>!!e.statuses[t]},actions:{async fetchStatus(e){let{commit:t}=e;try{t("setFetching",!0);const e=await c.getStatus(this.$http);t("setStatus",e),t("setContext",e.context),t("setAvailability",e.availability),t("setVisibility",e.visibility),t("setFetching",!1)}catch(e){throw t("setFetching",!1),console.error("Failed to fetchStatus.",e),e}},async fetchStatuses(e,t){let{commit:n}=e,{profileUids:o}=t;try{n("setStatuses",(await c.getStatuses(this.$http,o)).statuses)}catch(e){throw console.error("Failed to fetchStatuses.",e),e}},async fetchIsViewedRecently(e){let{commit:t}=e;try{t("setIsViewedRecentlyFetching",!0);t("setIsViewedRecently",(await c.getIsViewedRecently(this.$http)).viewedRecently),t("setIsViewedRecentlyFetched",!0)}catch(e){throw console.error("Failed to fetchIsViewedRecently.",e),e}finally{t("setIsViewedRecentlyFetching",!1)}},async turnOff(e,t){let{commit:n}=e,{reason:o}=t;try{await c.postTurnOff(this.$http,o),n("setActive",!1)}catch(e){throw console.error("Failed to turnOff.",e),e}},async turnOn(e,t){let{commit:n}=e,{maxPrice:o}=t;try{await c.postTurnOn(this.$http,o),n("setActive",!0)}catch(e){throw console.error("Failed to turnOn.",e),e}},async setMaxPrice(e,t){let{commit:n}=e,{maxPrice:o}=t;try{await c.postTurnOff(this.$http,"System limitation. Turning off, before setting a new price."),await c.postTurnOn(this.$http,o),n("setMaxPrice",o)}catch(e){throw console.error("Failed to setMaxPrice.",e),e}}}},d={beforeCreate(){var e,t;null!==(e=(t=this.$store).hasModule)&&void 0!==e&&e.call(t,o.a)||this.$store._modules.get([o.a])||this.$store.registerModule(o.a,l,{preserveState:!!this.$store.state[o.a]})}},h=n(3),component=Object(h.a)(d,undefined,undefined,!1,null,null,null);t.a=component.exports},1839:function(e,t,n){"use strict";(function(e){var o=n(0),r=n(599),c=n(59),l=n(38),d=n(941),h=n(1631),f=n(896);o.a.use(r.a),t.a={i18n:{messages:f.a},components:{PibManagementModalTurnOn:()=>Promise.all([n.e(1),n.e(15),n.e(1004)]).then(n.bind(null,3031)),PibManagementModalTurnOff:()=>n.e(878).then(n.bind(null,3032)),PibManagementModalTurnedOn:()=>n.e(879).then(n.bind(null,3033)),PibManagementModalNewBadgeAnnouncement:()=>Promise.all([n.e(36),n.e(57),n.e(940),n.e(1003)]).then(n.bind(null,2714))},mixins:[h.a],props:{angularRefFallbackName:{type:String,default:""}},data:()=>({mq:c.a.data(),state:[],isOperationInProgress:!1}),computed:{...Object(l.f)(d.a,["eligible","active","currentPrice","maxPrice","availableConnects","context","availability","visibility","isViewedRecentlyFetching","isViewedRecentlyFetched","isViewedRecently"]),isTurnOnState(){return this.state.includes("stateTurnOn")},isTurnOffState(){return this.state.includes("stateTurnOff")},isTurnedOnState(){return this.state.includes("stateTurnedOn")},isNewBadgeAnnouncementState(){return this.state.includes("stateNewBadgeAnnouncement")},isFooterInverse(){return["xs","sm"].includes(this.mq.breakpoint)},isUnavailable(){return null===this.availability.capacity},isPrivate(){return 2===this.visibility},isFetchingUsageDisclaimer(){return this.isViewedRecentlyFetching},isUsageDisclaimerVisible(){return this.isViewedRecentlyFetching||this.isViewedRecentlyFetched||this.$store.dispatch("".concat(d.a,"/fetchIsViewedRecently")),this.isViewedRecentlyFetched&&!this.isViewedRecently}},beforeMount(){this.angularRefFallbackName&&(e.angularRefFallbacks=e.angularRefFallbacks||{},e.angularRefFallbacks[this.angularRefFallbackName]=this),c.a.install(this)},destroyed(){this.angularRefFallbackName&&e.angularRefFallbacks&&(delete e.angularRefFallbacks[this.angularRefFallbackName],0===Object.keys(e.angularRefFallbacks).length&&delete e.angularRefFallbacks)},methods:{createErrorToaster(content){this.createToaster({type:"danger",duration:5e3,content:content,close:!0})},logCommonEditClick(){try{this.$tracker.track({trackers:["snowplow"],event:"click",sublocation:"PIB_settings",label:"PIB_click_edit",data:{PIB_status:this.active}})}catch(e){console.error("Failed to track an event.",e)}},doEdit(){this.showTurnOn(),this.logCommonEditClick()},showTurnOn(){this.state.push("stateTurnOn")},hideTurnOn(){this.isTurnOnState&&this.$refs.modalTurnOn.close()},removeTurnOnFromState(){this.state=this.state.filter((s=>"stateTurnOn"!==s))},showTurnOff(){this.state.push("stateTurnOff")},hideTurnOff(){this.isTurnOffState&&this.$refs.modalTurnOff.close()},removeTurnOffFromState(){this.state=this.state.filter((s=>"stateTurnOff"!==s))},showTurnedOn(){this.state.push("stateTurnedOn")},hideTurnedOn(){this.isTurnedOnState&&this.$refs.modalTurnedOn.close()},removeTurnedOnFromState(){this.state=this.state.filter((s=>"stateTurnedOn"!==s))},showNewBadgeAnnouncement(){this.state.push("stateNewBadgeAnnouncement")},hideNewBadgeAnnouncement(){this.isNewBadgeAnnouncementState&&this.$refs.modalNewBadgeAnnouncement.close()},removeNewBadgeAnnouncementFromState(){this.state=this.state.filter((s=>"stateNewBadgeAnnouncement"!==s))},async handleTurnOnClick(e){let{maxPrice:t}=e;try{this.isOperationInProgress=!0,await this.$store.dispatch("".concat(d.a,"/turnOn"),{maxPrice:t}),this.hideTurnOn(),this.showTurnedOn()}catch(e){this.createErrorToaster(this.$t("cfeui_pib_FailedToTurnOnBadge_63")),console.error(e)}finally{this.isOperationInProgress=!1}},async handleTurnOffClick(e){let{reason:t}=e;try{this.isOperationInProgress=!0,await this.$store.dispatch("".concat(d.a,"/turnOff"),{reason:t}),this.hideTurnOff()}catch(e){this.createErrorToaster(this.$t("cfeui_pib_FailedToTurnOffBadge_64")),console.error(e)}finally{this.isOperationInProgress=!1}},async handleRequestTurnOffClick(){this.hideTurnOn(),this.showTurnOff()},async handleSetMaximumClick(e){let{maxPrice:t}=e;try{this.isOperationInProgress=!0,await this.$store.dispatch("".concat(d.a,"/setMaxPrice"),{maxPrice:t}),this.hideTurnOn()}catch(e){this.createErrorToaster(this.$t("cfeui_pib_FailedToSetMaximum_65")),console.error(e)}finally{this.isOperationInProgress=!1}},handleTurnedOnCtaClick(){this.hideTurnedOn(),this.$emit("turned-on-cta-click"),this.$emit("angularTurnedOnCtaClick")},handleNewBadgeAnnouncementCtaClick(){this.hideNewBadgeAnnouncement(),this.showTurnOn()},handleNewBadgeAnnouncementCancelClick(){this.hideNewBadgeAnnouncement()},handleNewBadgeAnnouncementModalClosed(){this.removeNewBadgeAnnouncementFromState(),this.$emit("angularNewBadgeAnnouncementModalClosed")}}}}).call(this,n(39))},1840:function(e){e.exports=JSON.parse('{"cfeui_pib_FreelancerPromotingOpenToMoreWork_1":"This freelancer is promoting they\'re open to more work.","cfeui_pib_YouHaveConnectsInYourFreelancerAccount_2":"You have {availableConnects} Connects in your freelancer account.","cfeui_pib_YouHaveConnectsAgencyAccount_3":"You have {availableConnects} Connects: {currentAgencyName} agency account.","cfeui_pib_GotIt_4":"Got it","cfeui_pib_AvailableNow_5":"Available now","cfeui_pib_Off_6":"off","cfeui_pib_HowAvailabilityBadgeWorks_7":"How availability badge works","cfeui_pib_WhereDoesTheBadgeAppear_8":"Where does the badge appear?","cfeui_pib_ClientsWillSeeYourBadgeOnSearchNProfile_9":"Clients will see your availability badge on search results, recommendations, and on your profile.","cfeui_pib_HowDoYouUseMyConnects_10":"How do you use my Connects?","cfeui_pib_WellOnlyChargeYouForTheTimeYouHaveBadge_11":"We’ll only charge you for the time you have the badge on. We will deduct one connect at a time.","cfeui_pib_ThePriceToTurnOnTheBadgeMayGoUpOrDownDep_12":"The price to turn on the badge may go up or down depending on how many people have it on","cfeui_pib_WellLetYouKnowIfWeChangeNumberOfConnects_13":"We\'ll let you know if we change the number of Connects it takes to have the badge on","cfeui_pib_WhatDoesMyMaximumMean_14":"What does “My maximum” mean?","cfeui_pib_YouCanSetTheTotalNumberOfConnectsPerWeek_15":"You can set the total number of Connects per week you\'d like to use on the badge.","cfeui_pib_HowManyConnectsDoIHave_16":"How many Connects do I have?","cfeui_pib_WhyCanTITurnOnMyBadge_17":"Why can’t I turn on my badge?","cfeui_pib_IfYourProfileVisibilityIsSetToPrivateThe_18":"If your profile visibility is set to private, then Clients won’t find you in search results or see the badge.","cfeui_pib_YouCanViewYourConnectsNBalanceAndHistory_19":{"fullText":"You can view your Connects {balanceLink} anytime. You can also {buyLink} if you need them.","balanceLinkText":"balance and history","buyLinkText":"buy more Connects"},"cfeui_pib_IfYouHave0ConnectsWeTurnTheBadgeOffForYo_20":{"fullText":"If you have 0 Connects, we turn the badge off for you. {buyLink} or wait until the beginning of each month when we send you some for free.","buyLinkText":"Buy Connects"},"cfeui_pib_StandOutWithANewBadge_21":"Stand out with a new badge","cfeui_pib_CloseTheDialog_22":"Close the dialog","cfeui_pib_ShowClientsYouReReadyForMoreWork_23":"Show clients you’re ready for more work so they can invite you to their job.","cfeui_pib_UseYourConnectsToTurnOnTheBadge_24":"Use your Connects to turn on the badge","cfeui_pib_YouReOnlyChargedAsLongAsTheBadgeIsOn_25":"You’re only charged as long as the badge is on","cfeui_pib_TurnOffTheBadgeAtAnyTime_26":"Turn off the badge at any time","cfeui_pib_ItWillAppearInSearchAndOnYourProfile_27":"It will appear to clients in search and on your profile","cfeui_pib_HowDoesThisWork_28":"How does this work?","cfeui_pib_Cancel_29":"Cancel","cfeui_pib_GetStarted_30":"Get Started","cfeui_pib_SelectReason_31":"Select reason","cfeui_pib_AreYouSureYouWantToTurnOffYourBadge_32":"Are you sure you want to turn off your badge?","cfeui_pib_TellUsMore_33":"Tell us more","cfeui_pib_WhyDoYouWantToTurnOffYourBadge_34":"Why do you want to turn off your badge?","cfeui_pib_TurnOff_35":"Turn Off","cfeui_pib_YouHadNoProfileViewsInTheLast7DaysItIsUp_36":"You had no profile views in the last 7 days. It is up to you when and whether to use the availability badge, but freelancers with significant profile views seem to get the best use out of this feature.","cfeui_pib_ThePriceToTurnOnTheBadgeMayGoUpOrDownDep_37":"The price to turn on the badge may go up or down depending on how many people have it on. We’ll turn the badge off automatically if the price exceeds your maximum.","cfeui_pib_CurrentPrice_38":"Current price","cfeui_pib_PriceConnectsPerWeek_39":"{currentPrice} Connects per week","cfeui_pib_MyMaximum_40":"My maximum","cfeui_pib_SetTheLimitYouReWillingToSpendPerWeek_41":"Set the limit you’re willing to spend per week. We’ll turn the badge off automatically if the price exceeds this number.","cfeui_pib_CurrentPriceMinus_42":"Current price minus","cfeui_pib_CurrentPricePlus_43":"Current price plus","cfeui_pib_PleaseChooseAWholeNumberBetween_44":"Please choose a whole number between {currentPrice} (current price) and {availableConnects} (available Connects)","cfeui_pib_YouDonTHaveEnoughConnectsToTurnOnTheBadg_45":"You don\'t have enough Connects to turn on the badge.","cfeui_pib_SetAMaximumAtOrBelowYourAvailableConnect_46":"Set a maximum at or below your available Connects {availableConnects}","cfeui_pib_YouCanTTurnOnThisBadgeBecauseYourProfile_47":"You can\'t turn on this badge because your profile is set to private or unavailable.","cfeui_pib_BuyMoreConnects_48":"Buy more Connects","cfeui_pib_TurnOn_49":"Turn On","cfeui_pib_YouveAddedTheBadge_50":"You’ve added the badge!","cfeui_pib_SetMaximum_51":"Set Maximum","cfeui_pib_ViewMyProfile_52":"View My Profile","cfeui_pib_YouHaveConnects_53":"You have {availableConnects} Connects.","cfeui_pib_Edit_54":"Edit","cfeui_pib_AcceptedNewWork_55":"Accepted new work","cfeui_pib_BadgeWasTooExpensive_56":"Badge was too expensive","cfeui_pib_DidntGetMoreInvitations_57":"Didn’t get more invitations","cfeui_pib_InvitationsWerentAGoodFit_58":"Invitations weren’t a good fit","cfeui_pib_Other_59":"Other","cfeui_pib_EditBadgeSettings_60":"Edit badge settings","cfeui_pib_TurnOnAvailabilityBadge_61":"Turn on availability badge","cfeui_pib_TurnOffAvailabilityBadge_62":"Turn off availability badge","cfeui_pib_FailedToTurnOnBadge_63":"Failed to turn on availability badge. Please, try again later.","cfeui_pib_FailedToTurnOffBadge_64":"Failed to turn off availability badge. Please, try again later.","cfeui_pib_FailedToSetMaximum_65":"Failed to set maximum. Please, try again later.","cfeui_pib_ConnectsPerWeek_66":"Connects per week","cfeui_pib_PreviewCardDefaultName_67":"Jessica J."}')},1841:function(e){e.exports=JSON.parse("{}")},3207:function(e,t,n){"use strict";n.r(t);var o=n(1839).a,r=n(3),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.isTurnOnState?t("pib-management-modal-turn-on",{ref:"modalTurnOn",attrs:{"is-footer-inverse":e.isFooterInverse,"is-loading":e.isOperationInProgress||e.isFetchingUsageDisclaimer,"is-active":e.active,"current-price":e.currentPrice,"current-max-price":e.maxPrice,"available-connects":e.availableConnects,"is-freelancer":e.context.isFreelancer,"is-agency":e.context.isAgency,"has-agencies":e.context.hasAgencies,"current-agency-name":e.context.currentAgencyName,"is-unavailable":e.isUnavailable,"is-private":e.isPrivate,"is-usage-disclaimer-visible":e.isUsageDisclaimerVisible},on:{"modal-closed":e.removeTurnOnFromState,"cancel-click":e.hideTurnOn,"turn-on-click":e.handleTurnOnClick,"request-turn-off-click":e.handleRequestTurnOffClick,"set-maximum-click":e.handleSetMaximumClick}}):e._e(),e._v(" "),e.isTurnOffState?t("pib-management-modal-turn-off",{ref:"modalTurnOff",attrs:{"is-footer-inverse":e.isFooterInverse,"is-loading":e.isOperationInProgress,"is-active":e.active,"current-price":e.currentPrice,"current-max-price":e.maxPrice,"available-connects":e.availableConnects},on:{"modal-closed":e.removeTurnOffFromState,"cancel-click":e.hideTurnOff,"turn-off-click":e.handleTurnOffClick}}):e._e(),e._v(" "),e.isTurnedOnState?t("pib-management-modal-turned-on",{ref:"modalTurnedOn",attrs:{"is-footer-inverse":e.isFooterInverse},on:{"modal-closed":e.removeTurnedOnFromState,"cancel-click":e.hideTurnedOn,"cta-click":e.handleTurnedOnCtaClick}}):e._e(),e._v(" "),e.isNewBadgeAnnouncementState?t("pib-management-modal-new-badge-announcement",{ref:"modalNewBadgeAnnouncement",attrs:{"is-footer-inverse":e.isFooterInverse},on:{"modal-closed":e.handleNewBadgeAnnouncementModalClosed,"cancel-click":e.handleNewBadgeAnnouncementCancelClick,"cta-click":e.handleNewBadgeAnnouncementCtaClick}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},896:function(e,t,n){"use strict";var o=n(1840),r=n(1841);t.a={en:o,is:r}},941:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o="pib"}}]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/FreelancerProfileNuxt/pib-management-H9cg8.28a2b6e3.js.map