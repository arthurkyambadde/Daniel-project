(window.webpackJsonp=window.webpackJsonp||[]).push([[824,24,60],{1882:function(e,t,l){"use strict";var r=l(73),n=l(226),o={components:{UpCIconV2:r.default},data:()=>({iconAdd:n.default})},c=l(3),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e._t("default"),e._v(" "),t("button",{staticClass:"margin-fix d-inline-block ml-10 up-btn up-btn-sm up-btn-circle up-btn-default vertical-align-middle",on:{click:function(t){return e.$emit("add-military-veteran")}}},[t("up-c-icon-v2",{attrs:{icon:e.iconAdd,size:"sm"}})],1)],2)}),[],!1,null,null,null);t.a=component.exports},1883:function(e,t,l){"use strict";var r=l(73),dialog=l(649),n=l(80),o=l(1655),c=l.n(o),d=l(74),m=l.n(d),v=l(58),_=l.n(v),f=l(581),y=l.n(f),h=l(75),M=l.n(h),C=l(236),D=l(233),x={i18n:{messages:l(580).a},injectStyles:[m.a,c.a,M.a,y.a,_.a],components:{UpCIconV2:r.default,UpCDialog:dialog.a,UpCPopover:n.default},props:{isEditModeEnabled:{type:Boolean,default:!1},isDisabledEditMode:{type:Boolean,default:!1},militaryServiceHistory:{type:Object,required:!0},profile:{type:Object,required:!0}},data(){return{iconVerified:C.default,iconDelete:D.default,deleteDialog:{actions:[{label:this.$t("cfeui_pro_Cancel_75"),kind:"default"},{label:this.$t("cfeui_pro_Delete_262"),btnClick:()=>{this.$emit("delete-service-history")},kind:"primary"}],message:this.$t("cfeui_pro_AreYouSureYouWantToDeleteYourMilitary_263")}}},methods:{openDeleteConfirmationModal(){this.$refs.militaryUsDeleteConfirmationDialog.openDialog()}}},E=l(3),component=Object(E.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"d-flex align-items-center"},[t("div",{attrs:{id:"military-veteran-us"}},[e._m(0),e._v(" "),t("span",[t("strong",[e._v(e._s(e.$t("cfeui_pro_MilitaryVeteran_61")))])]),e._v(" "),t("up-c-icon-v2",{staticClass:"text-complimentary ml-5",attrs:{size:"sm",icon:e.iconVerified}})],1),e._v(" "),e.isEditModeEnabled?t("button",{staticClass:"margin-fix d-inline-block ml-10 up-btn up-btn-sm up-btn-circle up-btn-default vertical-align-middle",attrs:{disabled:e.isDisabledEditMode},on:{click:e.openDeleteConfirmationModal}},[t("up-c-icon-v2",{attrs:{icon:e.iconDelete,size:"sm"}})],1):e._e()]),e._v(" "),t("up-c-popover",{attrs:{"append-to-body":!0,"auto-close":!0,target:"#military-veteran-us",size:"md",trigger:"hover",placement:"bottom"}},[t("p",[t("span",{staticClass:"up-country-flag"},[t("span",{staticClass:"vti__flag us"})]),e._v("\n      "+e._s(e.$t("cfeui_pro_UnitedStatesMiliitaryServiceBranch_194",{branch:e.militaryServiceHistory.serviceBranch}))+"\n    ")]),e._v(" "),t("p",[e._v("\n      "+e._s(e.$t("cfeui_pro_VeterenServiceHistoryHasBeenVerfied_195",{name:e.profile.profile.name}))+"\n    ")]),e._v(" "),t("hr"),e._v(" "),t("i18n",{attrs:{path:"cfeui_pro_LearnMoreAboutMilitaryVeterans_205.fullText"},scopedSlots:e._u([{key:"linkText",fn:function(){return[t("a",{attrs:{href:"https://support.upwork.com/hc/en-us/articles/1500005736241",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          "+e._s(e.$t("cfeui_pro_LearnMoreAboutMilitaryVeterans_205.linkText"))+"\n        ")])]},proxy:!0}])})],1),e._v(" "),t("up-c-dialog",{ref:"militaryUsDeleteConfirmationDialog",attrs:{message:e.deleteDialog.message,actions:e.deleteDialog.actions}})],1)}),[function(){var e=this._self._c;return e("span",{staticClass:"up-country-flag mr-5"},[e("span",{staticClass:"vti__flag us"})])}],!1,null,null,null);t.a=component.exports},1884:function(e,t,l){"use strict";var r=l(74),n=l.n(r),o=l(58),c=l.n(o),d=l(581),m=l.n(d),v=l(75),_=l.n(v),dialog=l(649),f=l(73),y=l(1655),h=l.n(y),M=l(80),C=l(232),D=l(233),x={i18n:{messages:l(580).a},injectStyles:[n.a,h.a,c.a,m.a,_.a],components:{UpCDialog:dialog.a,UpCPopover:M.default,UpCIconV2:f.default},props:{isEditModeEnabled:{type:Boolean,default:!1},isDisabledEditMode:{type:Boolean,default:!1},militaryServiceHistory:{type:Object,required:!0}},data(){return{iconEdit:C.default,iconDelete:D.default,deleteDialog:{actions:[{label:this.$t("cfeui_pro_Cancel_75"),kind:"default"},{label:this.$t("cfeui_pro_Delete_262"),btnClick:()=>{this.$emit("delete-service-history")},kind:"primary"}],message:this.$t("cfeui_pro_AreYouSureYouWantToDeleteYourMilitary_263")}}},computed:{getFlagClassName(){var e;return this.militaryServiceHistory&&"vti__flag ".concat(null===(e=this.militaryServiceHistory.countryIso2Code)||void 0===e?void 0:e.toLowerCase())}},methods:{openDeleteConfirmationModal(){this.$refs.militaryDeleteConfirmationDialog.openDialog()}}},E=l(3),component=Object(E.a)(x,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-column"},[e._t("default"),e._v(" "),t("div",{staticClass:"d-flex pl-0"},[t("div",{staticClass:"details d-flex",attrs:{id:"military-veteran-global"}},[t("div",{staticClass:"flag mr-5 pt-5"},[t("span",{staticClass:"up-country-flag"},[t("span",{class:e.getFlagClassName})])]),e._v(" "),t("div",{staticClass:"description"},[t("span",[t("strong",[e._v(e._s(e.$t("cfeui_pro_MilitaryVeteran_61")))])]),e._v(" "),t("div",[e._v(e._s(e.$t("cfeui_pro_SelfReported_62")))])])]),e._v(" "),t("div",{staticClass:"buttons"},[e.isEditModeEnabled?t("button",{staticClass:"margin-fix d-inline-block ml-10 up-btn up-btn-sm up-btn-circle up-btn-default vertical-align-middle",attrs:{disabled:e.isDisabledEditMode},on:{click:function(t){return e.$emit("edit-global-military-veteran")}}},[t("up-c-icon-v2",{attrs:{icon:e.iconEdit,size:"sm"}})],1):e._e(),e._v(" "),e.isEditModeEnabled?t("button",{staticClass:"margin-fix d-inline-block ml-10 up-btn up-btn-sm up-btn-circle up-btn-default vertical-align-middle",attrs:{disabled:e.isDisabledEditMode},on:{click:e.openDeleteConfirmationModal}},[t("up-c-icon-v2",{attrs:{icon:e.iconDelete,size:"sm"}})],1):e._e()])]),e._v(" "),t("up-c-popover",{attrs:{"append-to-body":!0,"auto-close":!0,target:"#military-veteran-global",size:"md",trigger:"hover",placement:"bottom"}},[t("div",{staticClass:"popover-text-container d-flex"},[t("div",{staticClass:"flag d-inline-block pt-5 mr-5"},[t("span",{staticClass:"up-country-flag"},[t("span",{class:e.getFlagClassName})])]),e._v(" "),t("div",[e._v("\n        "+e._s(e.militaryServiceHistory.countryName)+", "+e._s(e.militaryServiceHistory.serviceBranch)+"\n      ")])]),e._v(" "),t("hr"),e._v(" "),t("i18n",{attrs:{path:"cfeui_pro_LearnMoreAboutMilitaryVeterans_205.fullText"},scopedSlots:e._u([{key:"linkText",fn:function(){return[t("a",{attrs:{href:"https://support.upwork.com/hc/en-us/articles/1500005736241",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          "+e._s(e.$t("cfeui_pro_LearnMoreAboutMilitaryVeterans_205.linkText"))+"\n        ")])]},proxy:!0}])})],1),e._v(" "),t("up-c-dialog",{ref:"militaryDeleteConfirmationDialog",attrs:{message:e.deleteDialog.message,actions:e.deleteDialog.actions}})],2)}),[],!1,null,null,null);t.a=component.exports},233:function(e,t,l){"use strict";l.r(t);var r={},n=l(3),component=Object(n.a)(r,(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-name":"Layer 1",viewBox:"0 0 14 14",role:"img"}},[e("path",{attrs:{d:"M12.57 2.16h-1.91L10.13.48A.7.7 0 009.46 0H4.53a.7.7 0 00-.66.48l-.53 1.68H1.43a.7.7 0 100 1.39h11.14a.7.7 0 100-1.39zM5 1.39h4l.22.7h-4.4zm1.3 9.48V6a.7.7 0 10-1.39 0v4.88a.7.7 0 001.39 0zm2.79 0V6A.7.7 0 107.7 6v4.88a.7.7 0 001.39 0z"}}),e("path",{attrs:{d:"M11.59 5a.7.7 0 00-.76.63l-.58 7h-6.5l-.58-7A.7.7 0 002.41 5a.69.69 0 00-.63.75l.63 7.66a.71.71 0 00.7.64h7.78a.7.7 0 00.69-.64l.64-7.66a.69.69 0 00-.63-.75z"}})])}),[],!1,null,null,null);t.default=component.exports},236:function(e,t,l){"use strict";l.r(t);var r={},n=l(3),component=Object(n.a)(r,(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 14 14",role:"img"}},[e("path",{attrs:{d:"M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z"}})])}),[],!1,null,null,null);t.default=component.exports},3173:function(e,t,l){"use strict";l.r(t);var r=l(1882),n=l(1883),o=l(1884),c={i18n:{messages:l(580).a},components:{MilitaryVeteranAdd:r.a,MilitaryVeteranUs:n.a,MilitaryVeteranGlobal:o.a},props:{isEditModeEnabled:{type:Boolean,default:!1},isDisabledEditMode:{type:Boolean,default:!1},profile:{type:Object,required:!0},militaryVeteran:{type:Object,required:!0}},computed:{militaryServiceHistory(){return this.militaryVeteran.serviceHistory},isMilitaryUsType(){return"us"===this.militaryVeteran.type},isMilitaryGlobalType(){return"global"===this.militaryVeteran.type}}},d=l(3),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.militaryServiceHistory||!e.isEditModeEnabled||e.isDisabledEditMode?e._e():t("military-veteran-add",{on:{"add-military-veteran":function(t){return e.$emit("add-military-veteran")}}},[t("span",[t("strong",[e._v(e._s(e.$t("cfeui_pro_MilitaryVeteran_61")))])])]),e._v(" "),e.isMilitaryUsType&&e.militaryServiceHistory?t("military-veteran-us",{attrs:{profile:e.profile,"military-service-history":e.militaryServiceHistory,"is-edit-mode-enabled":e.isEditModeEnabled,"is-disabled-edit-mode":e.isDisabledEditMode},on:{"delete-service-history":function(t){return e.$emit("delete-us-service-history")}}}):e._e(),e._v(" "),e.isMilitaryGlobalType&&e.militaryServiceHistory?t("military-veteran-global",{staticClass:"mt-5",attrs:{"is-edit-mode-enabled":e.isEditModeEnabled,"is-disabled-edit-mode":e.isDisabledEditMode,"military-service-history":e.militaryServiceHistory},on:{"edit-global-military-veteran":function(t){return e.$emit("edit-global-military-veteran")},"delete-service-history":function(t){return e.$emit("delete-global-service-history")}}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/FreelancerProfileNuxt/military-veteran-line-xwdwg.523809b7.js.map