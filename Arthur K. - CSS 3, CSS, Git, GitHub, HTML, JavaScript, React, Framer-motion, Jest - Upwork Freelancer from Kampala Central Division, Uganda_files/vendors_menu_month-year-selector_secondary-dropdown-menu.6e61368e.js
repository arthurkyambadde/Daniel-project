/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1177:function(e,t,n){"use strict";n.r(t);var o=n(59),r=n(590),menu=n(1972),l=n.n(menu),c=n(805),d=n.n(c);class h{constructor(e,t){this.supportInlineHeader=e,this.onChangeIndex=t,this.itemList=[],this.index=-1}setItemList(e){this.itemList=e}setInlineHeader(e){this.supportInlineHeader=e}detectActiveItem(){this.resetIndex(),this.itemList.every(((e,t)=>(e.isChecked&&!this.isHeader(e)&&this.setIndex(t),!0)))}resetIndex(){this.setIndex(-1)}getIndex(){return this.index}setIndex(e){this.index=e,this.onChangeIndex(this.index)}scan(e){const t=e?1:-1;let{index:n}=this;for(;!e&&n>0||e&&n<this.itemList.length-1;)if(n+=t,!this.isHeader(this.itemList[n]))return this.setIndex(n),!0;return!1}isHeader(e){return!(!this.supportInlineHeader||!e.isHeader)}}var m={en:n(1833),is:n(1834)};var f={injectStyles:[l.a],name:"UpCMenu",components:{upCCheckbox:r.a,UpCIconV2:()=>Promise.resolve().then(n.bind(null,73)),UpCIcon:()=>Promise.resolve().then(n.bind(null,76))},i18n:{messages:m},props:{items:{type:Array,default:()=>[]},search:{type:Boolean,default:!1},nested:{type:Boolean,default:!1},inlineHeader:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},showNoResults:{type:Boolean,default:!1},itemLink:{type:String,default:""},itemKey:{type:String,default:"id"},itemText:{type:String,default:"label"},itemSublabel:{type:String,default:""},nestedKey:{type:String,default:"items"},checkableBehavior:{type:String,validator:e=>["single","multiple","none"].includes(e),default:"none"},htmlAsText:{type:Boolean,default:!0},sanitizeHtml:{type:Boolean,default:!0},mixed:{type:Boolean,default:!1},disableCheckMark:{type:Boolean,default:!1},isOpen:{type:Boolean,default:!1},id:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:()=>({arrowNextIcon:()=>n.e(46).then(n.bind(null,229)),checkIcon:()=>Promise.resolve().then(n.bind(null,221)),infoIcon:()=>n.e(85).then(n.bind(null,398)),mq:o.a.data(),activeIndex:-1}),computed:{isFullscreen(){return this.mq.mobile},multi(){return"multiple"===this.checkableBehavior},single(){return"single"===this.checkableBehavior},isNonCheckable(e){return"none"===this.checkableBehavior},showMenuDecoration(){return this.$slots["menu-decoration"]},hasNoResults(){return(this.search||this.showNoResults)&&(!this.items||!this.items.length)&&!this.loading}},watch:{items:{deep:!0,handler(e,t){(t||e&&e.length)&&(t&&t.length!==e.length&&this.$emit("menu-updated",e.filter((e=>!e.isHeader)).length),this.updateNavigationItems())}},loading(){this.search&&this.getNavigation().resetIndex()},inlineHeader(){this.getNavigation().setInlineHeader(this.inlineHeader),this.updateNavigationItems()},isOpen:{handler(e,t){e&&this.setMenuFocus()}}},beforeMount(){o.a.install(this),this.updateNavigationItems(),this.search&&this.getNavigation().resetIndex()},mounted(){this.getNavigation().detectActiveItem(),this.$emit("menu-loaded")},updated(){!this.isFullscreen&&this.getActiveIndex()>=0&&this.setMenuFocus()},methods:{getListItemComponent(e){return e[this.itemLink]?"a":"span"},setFocus(){const e=this.isFullscreen&&!!this.items.find((i=>i.isChecked));this.search&&this.getActiveIndex()<0&&!e&&!this.mixed?this.setInputFocus():!this.isFullscreen&&this.getActiveIndex()>=0&&this.setMenuFocus()},setInputFocus(){this.$emit("focus-input")},setMenuFocus(){const e=this.getActiveIndex();e>=0&&this.items[e]?this.items[e].isOpened||this.$refs["item-".concat(e)][0].focus():this.$refs["item-0"]&&this.$refs["item-0"].length&&!this.isNonCheckable&&this.$refs["item-0"][0].focus()},resetIndex(){this.items.forEach(((e,t)=>{e.isOpened=!1,this.$set(this.items,t,e),e[this.nestedKey]&&e[this.nestedKey].length&&this.$refs["menu-".concat(t)][0].resetIndex()})),this.resetMenuActiveMenuIndex()},resetMenuActiveMenuIndex(){this.getNavigation().resetIndex()},onMenuKeydown(e){switch(e.keyCode){case 40:this.nested&&e.stopPropagation(),this.mixed&&this.activeIndex===this.items.length-1?this.mixed&&(this.resetIndex(),this.$nextTick((()=>{this.moveToNextGroup()}))):this.selectNextItem(),e.preventDefault();break;case 38:this.nested&&e.stopPropagation(),0!==this.activeIndex&&this.activeIndex!==this.getFirstItemIndex()?this.selectPreviousItem():this.mixed?(this.resetIndex(),this.$nextTick((()=>{this.moveToNextGroup(!0)}))):this.search?this.resetIndex():this.$emit("menu-focus-up"),e.preventDefault();break;case 39:e.stopPropagation(),this.onPageRight(),e.preventDefault();break;case 37:e.stopPropagation(),this.onPageLeft(),e.preventDefault();break;case 9:if(e.shiftKey){if(0!==this.activeIndex)return;if(this.mixed)this.resetIndex(),this.$nextTick((()=>{this.moveToNextGroup(!0,e)}));else{if(this.search)return;this.resetIndex()}}else{if(this.activeIndex!==this.items.length-1)return;this.mixed?(this.resetIndex(),this.$nextTick((()=>{this.moveToNextGroup(!1,e)}))):this.activeIndex===this.items.length-1&&this.$emit("close-sub-menu")}break;case 27:e.stopPropagation(),this.onClose(),e.preventDefault();break;case 13:case 32:e.stopPropagation(),this.onEnter(),e.preventDefault();break;case 36:e.stopPropagation(),this.mixed?(this.resetIndex(),this.$nextTick((()=>{this.$emit("focus-group-home")}))):this.onHomeOption(),e.preventDefault();break;case 35:e.stopPropagation(),this.mixed?(this.resetIndex(),this.$nextTick((()=>{this.$emit("focus-group-end")}))):this.onEndOption(),e.preventDefault()}},moveToNextGroup(e,t){this.$emit("focus-group",e,t)},getActiveIndex(){return this.activeIndex},setActiveIndex(e){this.getNavigation().setIndex(e)},selectPreviousItem(){this.onPageUp()},selectNextItem(){this.onPageDown()},onClose(){this.$emit("close")},onSelect(e){if(e.disabled)return;const{activeIndex:t}=this;e[this.nestedKey]?this.isFullscreen?(this.$refs.menuContainer.scrollTop=0,this.$emit("open",e)):this.onPageRight():(this.getNavigation().isHeader(e)||this.$emit("select",e),this.$nextTick((()=>{this.setActiveIndex(t)})))},onEnter(){this.items[this.activeIndex]&&this.onSelect(this.items[this.activeIndex],!0)},sanitizedHtml(){if(!this.sanitizeHtml||this.htmlAsText)return this.items;this.items.forEach((e=>{e.sanitized||(e[this.itemText]=d.a.sanitize(e[this.itemText]),e[this.itemSublabel]=d.a.sanitize(e[this.itemSublabel]),e.sanitized=!0)}))},onPageUp(){this.getNavigation().scan(!1)&&this.scrollToOption(!1)},onPageDown(){this.getNavigation().scan(!0)&&this.scrollToOption(!0)},onPageRight(){const e=this.items[this.activeIndex],{activeIndex:t}=this;e&&this.hasChildItem(e)&&(e.isOpened=!0,this.$set(this.items,t,e),this.$nextTick((()=>{this.setActiveIndex(t)})),this.items.forEach(((t,n)=>{t[this.itemKey]!==e[this.itemKey]&&((t.hover||t.isOpened)&&t[this.nestedKey]&&this.$refs["menu-".concat(n)][0].resetIndex(),t.isOpened=!1,t.hover=!1,this.$set(this.items,n,t))})),setTimeout((()=>{this.$refs["item-".concat(t)][0].querySelector("li").focus()}),0))},onPageLeft(){this.$el.parentNode.classList.contains("up-menu-item")&&(this.getNavigation().resetIndex(),setTimeout((()=>{this.$el.parentNode.closest("ul").focus()}),0))},onCloseSubMenu(e){e.isOpened=!1},onMenuFocus(){if(!this.items.length)return;this.activeIndex<0&&this.getNavigation().detectActiveItem();const{activeIndex:e}=this,t=this.items[this.activeIndex];this.activeIndex>=0&&t.isOpened?(t.isOpened=!1,this.$set(this.items,e,t),this.$nextTick((()=>{this.setActiveIndex(e)})),setTimeout((()=>{this.$el.focus()}),0)):this.activeIndex<0&&this.setActiveIndex(this.getFirstItemIndex())},onMenuItemFocus(e){this.getActiveIndex()!==e&&this.setActiveIndex(e)},onHomeOption(){this.items.length&&(this.setActiveIndex(this.getFirstItemIndex()),this.scrollToOption())},onEndOption(){this.items.length&&(this.setActiveIndex(this.items.length-1),this.scrollToOption(!0))},onMouseEnter(e){const{activeIndex:t}=this;!this.hasChildItem(e)||this.isFullscreen||e.disabled||(this.items.forEach(((t,n)=>{t[this.itemKey]===e[this.itemKey]?(t.hover=!0,this.$set(this.items,n,t)):t[this.nestedKey]&&t[this.nestedKey].length&&((t.hover||t.isOpened)&&t[this.nestedKey]&&this.$refs["menu-".concat(n)][0].resetIndex(),t.isOpened=!1,this.$set(this.items,n,t))})),this.$nextTick((()=>{this.setActiveIndex(t)})))},onMouseLeave(e){const{activeIndex:t}=this;!this.hasChildItem(e)||this.isFullscreen||e.disabled||(this.items.forEach(((t,n)=>{t[this.itemKey]===e[this.itemKey]&&((t.hover||t.isOpened)&&t[this.nestedKey]&&this.$refs["menu-".concat(n)][0].resetIndex(),t.hover=!1,t.isOpened=!1,this.$set(this.items,n,t))})),this.$nextTick((()=>{this.setActiveIndex(t)})))},scrollToOption(e){const t=this.mixed&&this.$el.parentElement?this.$el.parentElement.parentElement.parentElement:this.$el.parentElement;if(t){const n=this.search?t.querySelector(".up-input-group"):null,option=this.$refs["item-".concat(this.activeIndex)][0].closest("li, a"),o=t.scrollTop+t.offsetHeight,r=option.offsetTop+option.offsetHeight;e&&o<r?t.scrollTop=r-t.offsetHeight:e||(!this.search&&t.scrollTop>option.offsetTop?t.scrollTop=option.offsetTop:this.search&&n&&t.scrollTop+n.offsetHeight>option.offsetTop&&(t.scrollTop=option.offsetTop-n.offsetHeight))}},checkChildSelected(e){const t=e=>e.reduce(((e,n)=>e.concat(n.isChecked).concat(t(n[this.nestedKey]||[]))),[]);return!!t([e]).find((option=>option))},getSelectedLabels(e){const t=e=>e.reduce(((e,n)=>e.concat(n.isChecked).concat(t(n[this.nestedKey]||[]))),[]),n=t([e]),o=e=>e.reduce(((e,t)=>e.concat(t[this.itemText]).concat(o(t[this.nestedKey]||[]))),[]);return o([e]).filter(((label,e)=>n[e])).join(", ")},isShowingSubChild(e){return this.isFullscreen&&this.checkChildSelected(e)&&this.hasChildItem(e)},hasChildItem(e){return e[this.nestedKey]&&e[this.nestedKey].length},updateNavigationItems(){this.sanitizedHtml(),this.getNavigation().setItemList(this.items)},getFirstItemIndex(){let e=-1;return this.items.every(((t,n)=>(t.isHeader&&this.inlineHeader||(e=n),e<0))),e},getNavigation(){return this.navigation||(this.navigation=new h(this.inlineHeader,(e=>{this.activeIndex=e}))),this.navigation}}},v=n(3),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",{ref:"menuContainer",staticClass:"up-menu-container",attrs:{"data-test":"menu-container"},on:{keydown:function(t){return e.onMenuKeydown(t)}}},[t("ul",{directives:[{name:"show",rawName:"v-show",value:!e.hasNoResults,expression:"!hasNoResults"}],ref:"list",staticClass:"up-menu-list",class:{"up-nested-menu":e.nested},attrs:{id:e.id,"aria-labelledby":e.ariaLabelledby,role:e.isNonCheckable?void 0:"listbox","aria-multiselectable":e.multi?"true":void 0,tabindex:"-1","data-test":"menu"},on:{focus:function(t){return e.onMenuFocus()}}},e._l(e.items,(function(n,o){return t("li",{key:n[e.itemKey],ref:"item-"+o,refInFor:!0,class:{active:n.isChecked,"focused-menu":o===e.activeIndex&&!e.isFullscreen,open:n.isOpened,"up-nested-menu-list":e.hasChildItem(n),"up-multi-select":e.multi,"up-dropdown-menu-header":e.getNavigation().isHeader(n),hover:n.hover||n.isOpened,"checkable-none":e.isNonCheckable||e.hasChildItem(n)||e.disableCheckMark,disabled:n.disabled,"up-menu-item-with-sublabel":e.isShowingSubChild(n)&&!e.multi,"up-menu-item-without-sublabel":e.hasChildItem(n)&&e.multi&&!e.isShowingSubChild(n)&&e.isFullscreen,"up-menu-item":!e.getNavigation().isHeader(n)},attrs:{role:e.isNonCheckable?void 0:"option","aria-selected":e.isNonCheckable?void 0:n.isChecked?"true":"false","aria-disabled":n.disabled,tabindex:!e.getNavigation().isHeader(n)&&"0"},on:{mouseenter:function(t){return e.onMouseEnter(n)},mouseleave:function(t){return e.onMouseLeave(n)},click:function(t){return t.preventDefault(),t.stopPropagation(),e.onSelect(n)},focus:function(t){return e.onMenuItemFocus(o)}}},[e.multi&&!e.hasChildItem(n)?t("up-c-checkbox",{attrs:{disabled:n.disabled}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.isChecked,expression:"item.isChecked"}],attrs:{slot:"input",id:n[e.itemKey],type:"checkbox",tabindex:"-1",disabled:n.disabled},domProps:{checked:Array.isArray(n.isChecked)?e._i(n.isChecked,null)>-1:n.isChecked},on:{change:function(t){var o=n.isChecked,r=t.target,l=!!r.checked;if(Array.isArray(o)){var c=e._i(o,null);r.checked?c<0&&e.$set(n,"isChecked",o.concat([null])):c>-1&&e.$set(n,"isChecked",o.slice(0,c).concat(o.slice(c+1)))}else e.$set(n,"isChecked",l)}},slot:"input"}),e._v(" "),t("span",{staticClass:"up-menu-checkbox-label",attrs:{slot:"label"},slot:"label"},[e._v("\n          "+e._s(n[e.itemText])+"\n        ")])]):e._e(),e._v(" "),n.isChecked&&e.single&&!e.disableCheckMark?t("up-c-icon-v2",{staticClass:"up-menu-item-active",attrs:{icon:e.checkIcon}}):e._e(),e._v(" "),n.icon?t("up-c-icon",{staticClass:"up-menu-item-icon",attrs:{name:n.icon}}):e._e(),e._v(" "),n.iconImport?t("up-c-icon-v2",{staticClass:"up-menu-item-icon",attrs:{icon:n.iconImport}}):e._e(),e._v(" "),!e.multi||e.hasChildItem(n)?t(e.getListItemComponent(n),{tag:"component",staticClass:"up-menu-item-text",attrs:{href:n[e.itemLink],role:e.isNonCheckable&&!n[e.itemLink]?"button":void 0,tabindex:n[e.itemLink]?-1:void 0}},[e.htmlAsText?t("span",[e._v("\n          "+e._s(n[e.itemText])+"\n        ")]):t("span",{domProps:{innerHTML:e._s(n[e.itemText])}}),e._v(" "),e.itemSublabel&&!e.htmlAsText?t("span",{staticClass:"up-menu-item-subtext ellipsis",domProps:{innerHTML:e._s(n[e.itemSublabel])}}):e._e(),e._v(" "),e.itemSublabel&&e.htmlAsText?t("span",{staticClass:"up-menu-item-subtext ellipsis"},[e._v("\n          "+e._s(n[e.itemSublabel])+"\n        ")]):e._e(),e._v(" "),e.isShowingSubChild(n)?t("span",{staticClass:"up-menu-item-subtext ellipsis"},[e._v("\n          "+e._s(e.getSelectedLabels(n))+"\n        ")]):e._e(),e._v(" "),n.isChecked&&e.single?t("span",{staticClass:"sr-only"},[e._v("selected")]):e._e()]):e._e(),e._v(" "),e.hasChildItem(n)?t("up-c-icon-v2",{staticClass:"up-nested-menu-item-icon",class:{"up-active-parent-item":e.checkChildSelected(n)},attrs:{icon:e.arrowNextIcon}}):e._e(),e._v(" "),e.hasChildItem(n)?t("up-c-menu",{ref:"menu-"+o,refInFor:!0,attrs:{items:n[e.nestedKey],nested:!0,"checkable-behavior":e.checkableBehavior,"item-key":e.itemKey,"item-link":e.itemLink,"item-text":e.itemText,"nested-key":e.nestedKey,"item-sublabel":e.itemSublabel},on:{close:e.onClose,select:e.onSelect,open:e.onSelect,"close-sub-menu":function(t){return e.onCloseSubMenu(n)}}}):e._e()],1)})),0),e._v(" "),t("div",{attrs:{role:"alert"}},[e.hasNoResults?t("div",{staticClass:"up-result-feedback",attrs:{"data-test":"menu-results-feedback"}},[e._t("no-result-icon",(function(){return[t("up-c-icon-v2",{attrs:{icon:e.infoIcon}})]})),e._v(" "),t("span",{staticClass:"up-result-feedback-text"},[e._t("no-result-text",(function(){return[t("span",[e._v(e._s(e.$t("vc_NoResultsFound_90")))])]}))],2)],2):e._e()]),e._v(" "),e.showMenuDecoration?t("div",{staticClass:"up-menu-decoration",attrs:{id:e.id&&"menu-decoration-".concat(e.id)}},[e._t("menu-decoration")],2):e._e()])}),[],!1,null,null,null);t.default=component.exports},1833:function(e){e.exports=JSON.parse('{"vc_NoResultsFound_90":"No results found"}')},1834:function(e){e.exports=JSON.parse("{}")},805:function(e,t,n){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,p){return t=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e},t(e,p)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,r,l){return o=n()?Reflect.construct:function(e,n,o){var a=[null];a.push.apply(a,n);var r=new(Function.bind.apply(e,a));return o&&t(r,o.prototype),r},o.apply(null,arguments)}function r(e){return l(e)||c(e)||d(e)||m()}function l(e){if(Array.isArray(e))return h(e)}function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function d(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.hasOwnProperty,v=Object.setPrototypeOf,y=Object.isFrozen,x=Object.getPrototypeOf,I=Object.getOwnPropertyDescriptor,T=Object.freeze,k=Object.seal,N=Object.create,C="undefined"!=typeof Reflect&&Reflect,A=C.apply,_=C.construct;A||(A=function(e,t,n){return e.apply(t,n)}),T||(T=function(e){return e}),k||(k=function(e){return e}),_||(_=function(e,t){return o(e,r(t))});var S=$(Array.prototype.forEach),w=$(Array.prototype.pop),E=$(Array.prototype.push),O=$(String.prototype.toLowerCase),M=$(String.prototype.match),L=$(String.prototype.replace),D=$(String.prototype.indexOf),R=$(String.prototype.trim),F=$(RegExp.prototype.test),H=P(TypeError);function $(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return A(e,t,o)}}function P(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return _(e,n)}}function U(e,t,n){n=n||O,v&&v(e,null);for(var o=t.length;o--;){var element=t[o];if("string"==typeof element){var r=n(element);r!==element&&(y(t)||(t[o]=r),element=r)}e[element]=!0}return e}function z(object){var e,t=N(null);for(e in object)A(f,object,[e])&&(t[e]=object[e]);return t}function B(object,e){for(;null!==object;){var desc=I(object,e);if(desc){if(desc.get)return $(desc.get);if("function"==typeof desc.value)return $(desc.value)}object=x(object)}function t(element){return console.warn("fallback value for",element),null}return t}var K=T(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),j=T(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),G=T(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),W=T(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Y=T(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),V=T(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),text=T(["#text"]),html=T(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),svg=T(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),J=T(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),X=T(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Z=k(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Q=k(/<%[\w\W]*|[\w\W]*%>/gm),ee=k(/^data-[\-\w.\u00B7-\uFFFF]/),te=k(/^aria-[\-\w]+$/),ie=k(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ne=k(/^(?:\w+script|data):/i),se=k(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),oe=k(/^html$/i),re=function(){return"undefined"==typeof window?null:window},ae=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var o=null,r="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(r)&&(o=n.currentScript.getAttribute(r));var l="dompurify"+(o?"#"+o:"");try{return t.createPolicy(l,{createHTML:function(html){return html},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+l+" could not be created."),null}};function le(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re(),n=function(e){return le(e)};if(n.version="2.4.0",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,l=t.document,c=t.DocumentFragment,d=t.HTMLTemplateElement,h=t.Node,m=t.Element,f=t.NodeFilter,v=t.NamedNodeMap,y=void 0===v?t.NamedNodeMap||t.MozNamedAttrMap:v,x=t.HTMLFormElement,I=t.DOMParser,k=t.trustedTypes,N=m.prototype,C=B(N,"cloneNode"),A=B(N,"nextSibling"),_=B(N,"childNodes"),$=B(N,"parentNode");if("function"==typeof d){var template=l.createElement("template");template.content&&template.content.ownerDocument&&(l=template.content.ownerDocument)}var P=ae(k,o),ce=P?P.createHTML(""):"",ue=l,de=ue.implementation,he=ue.createNodeIterator,me=ue.createDocumentFragment,pe=ue.getElementsByTagName,fe=o.importNode,ge={};try{ge=z(l).documentMode?l.documentMode:{}}catch(e){}var ve={};n.isSupported="function"==typeof $&&de&&void 0!==de.createHTMLDocument&&9!==ge;var ye,be,xe=Z,Ie=Q,Te=ee,ke=te,Ne=ne,Ce=se,Ae=ie,_e=null,Se=U({},[].concat(r(K),r(j),r(G),r(Y),r(text))),we=null,Ee=U({},[].concat(r(html),r(svg),r(J),r(X))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Le=null,De=!0,Re=!0,Fe=!1,He=!1,$e=!1,Pe=!1,Ue=!1,ze=!1,Be=!1,Ke=!1,je=!0,Ge=!1,We="user-content-",qe=!0,Ye=!1,Ve={},Je=null,Xe=U({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ze=null,Qe=U({},["audio","video","img","source","image","track"]),et=null,tt=U({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",ot=st,at=!1,lt=["application/xhtml+xml","text/html"],ct="text/html",ut=null,ht=l.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},pt=function(t){ut&&ut===t||(t&&"object"===e(t)||(t={}),t=z(t),ye=ye=-1===lt.indexOf(t.PARSER_MEDIA_TYPE)?ct:t.PARSER_MEDIA_TYPE,be="application/xhtml+xml"===ye?function(e){return e}:O,_e="ALLOWED_TAGS"in t?U({},t.ALLOWED_TAGS,be):Se,we="ALLOWED_ATTR"in t?U({},t.ALLOWED_ATTR,be):Ee,et="ADD_URI_SAFE_ATTR"in t?U(z(tt),t.ADD_URI_SAFE_ATTR,be):tt,Ze="ADD_DATA_URI_TAGS"in t?U(z(Qe),t.ADD_DATA_URI_TAGS,be):Qe,Je="FORBID_CONTENTS"in t?U({},t.FORBID_CONTENTS,be):Xe,Me="FORBID_TAGS"in t?U({},t.FORBID_TAGS,be):{},Le="FORBID_ATTR"in t?U({},t.FORBID_ATTR,be):{},Ve="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,Fe=t.ALLOW_UNKNOWN_PROTOCOLS||!1,He=t.SAFE_FOR_TEMPLATES||!1,$e=t.WHOLE_DOCUMENT||!1,ze=t.RETURN_DOM||!1,Be=t.RETURN_DOM_FRAGMENT||!1,Ke=t.RETURN_TRUSTED_TYPE||!1,Ue=t.FORCE_BODY||!1,je=!1!==t.SANITIZE_DOM,Ge=t.SANITIZE_NAMED_PROPS||!1,qe=!1!==t.KEEP_CONTENT,Ye=t.IN_PLACE||!1,Ae=t.ALLOWED_URI_REGEXP||Ae,ot=t.NAMESPACE||st,t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),He&&(Re=!1),Be&&(ze=!0),Ve&&(_e=U({},r(text)),we=[],!0===Ve.html&&(U(_e,K),U(we,html)),!0===Ve.svg&&(U(_e,j),U(we,svg),U(we,X)),!0===Ve.svgFilters&&(U(_e,G),U(we,svg),U(we,X)),!0===Ve.mathMl&&(U(_e,Y),U(we,J),U(we,X))),t.ADD_TAGS&&(_e===Se&&(_e=z(_e)),U(_e,t.ADD_TAGS,be)),t.ADD_ATTR&&(we===Ee&&(we=z(we)),U(we,t.ADD_ATTR,be)),t.ADD_URI_SAFE_ATTR&&U(et,t.ADD_URI_SAFE_ATTR,be),t.FORBID_CONTENTS&&(Je===Xe&&(Je=z(Je)),U(Je,t.FORBID_CONTENTS,be)),qe&&(_e["#text"]=!0),$e&&U(_e,["html","head","body"]),_e.table&&(U(_e,["tbody"]),delete Me.tbody),T&&T(t),ut=t)},ft=U({},["mi","mo","mn","ms","mtext"]),gt=U({},["foreignobject","desc","title","annotation-xml"]),vt=U({},["title","style","font","a","script"]),yt=U({},j);U(yt,G),U(yt,W);var bt=U({},Y);U(bt,V);var xt=function(element){var e=$(element);e&&e.tagName||(e={namespaceURI:st,tagName:"template"});var t=O(element.tagName),n=O(e.tagName);return element.namespaceURI===nt?e.namespaceURI===st?"svg"===t:e.namespaceURI===it?"svg"===t&&("annotation-xml"===n||ft[n]):Boolean(yt[t]):element.namespaceURI===it?e.namespaceURI===st?"math"===t:e.namespaceURI===nt?"math"===t&&gt[n]:Boolean(bt[t]):element.namespaceURI===st&&!(e.namespaceURI===nt&&!gt[n])&&!(e.namespaceURI===it&&!ft[n])&&!bt[t]&&(vt[t]||!yt[t])},It=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(t){e.remove()}}},Tt=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!we[e])if(ze||Be)try{It(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},kt=function(e){var t,n;if(Ue)e="<remove></remove>"+e;else{var o=M(e,/^[\r\n\t ]+/);n=o&&o[0]}"application/xhtml+xml"===ye&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var r=P?P.createHTML(e):e;if(ot===st)try{t=(new I).parseFromString(r,ye)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(ot,"template",null);try{t.documentElement.innerHTML=at?"":r}catch(e){}}var body=t.body||t.documentElement;return e&&n&&body.insertBefore(l.createTextNode(n),body.childNodes[0]||null),ot===st?pe.call(t,$e?"html":"body")[0]:$e?t.documentElement:body},Nt=function(e){return he.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},Ct=function(e){return e instanceof x&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof y)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},At=function(object){return"object"===e(h)?object instanceof h:object&&"object"===e(object)&&"number"==typeof object.nodeType&&"string"==typeof object.nodeName},_t=function(e,t,data){ve[e]&&S(ve[e],(function(e){e.call(n,t,data,ut)}))},St=function(e){var content;if(_t("beforeSanitizeElements",e,null),Ct(e))return It(e),!0;if(F(/[\u0080-\uFFFF]/,e.nodeName))return It(e),!0;var t=be(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:t,allowedTags:_e}),e.hasChildNodes()&&!At(e.firstElementChild)&&(!At(e.content)||!At(e.content.firstElementChild))&&F(/<[/\w]/g,e.innerHTML)&&F(/<[/\w]/g,e.textContent))return It(e),!0;if("select"===t&&F(/<template/i,e.innerHTML))return It(e),!0;if(!_e[t]||Me[t]){if(!Me[t]&&Et(t)){if(Oe.tagNameCheck instanceof RegExp&&F(Oe.tagNameCheck,t))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(t))return!1}if(qe&&!Je[t]){var o=$(e)||e.parentNode,r=_(e)||e.childNodes;if(r&&o)for(var i=r.length-1;i>=0;--i)o.insertBefore(C(r[i],!0),A(e))}return It(e),!0}return e instanceof m&&!xt(e)?(It(e),!0):"noscript"!==t&&"noembed"!==t||!F(/<\/no(script|embed)/i,e.innerHTML)?(He&&3===e.nodeType&&(content=e.textContent,content=L(content,xe," "),content=L(content,Ie," "),e.textContent!==content&&(E(n.removed,{element:e.cloneNode()}),e.textContent=content)),_t("afterSanitizeElements",e,null),!1):(It(e),!0)},wt=function(e,t,n){if(je&&("id"===t||"name"===t)&&(n in l||n in ht))return!1;if(Re&&!Le[t]&&F(Te,t));else if(De&&F(ke,t));else if(!we[t]||Le[t]){if(!(Et(e)&&(Oe.tagNameCheck instanceof RegExp&&F(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&F(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&F(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(et[t]);else if(F(Ae,L(n,Ce,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==D(n,"data:")||!Ze[e])if(Fe&&!F(Ne,L(n,Ce,"")));else if(n)return!1;return!0},Et=function(e){return e.indexOf("-")>0},Ot=function(t){var o,r,l,c;_t("beforeSanitizeAttributes",t,null);var d=t.attributes;if(d){var h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:we};for(c=d.length;c--;){var m=o=d[c],f=m.name,v=m.namespaceURI;if(r="value"===f?o.value:R(o.value),l=be(f),h.attrName=l,h.attrValue=r,h.keepAttr=!0,h.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,h),r=h.attrValue,!h.forceKeepAttr&&(Tt(f,t),h.keepAttr))if(F(/\/>/i,r))Tt(f,t);else{He&&(r=L(r,xe," "),r=L(r,Ie," "));var y=be(t.nodeName);if(wt(y,l,r)){if(!Ge||"id"!==l&&"name"!==l||(Tt(f,t),r=We+r),P&&"object"===e(k)&&"function"==typeof k.getAttributeType)if(v);else switch(k.getAttributeType(y,l)){case"TrustedHTML":r=P.createHTML(r);break;case"TrustedScriptURL":r=P.createScriptURL(r)}try{v?t.setAttributeNS(v,f,r):t.setAttribute(f,r),w(n.removed)}catch(e){}}}}_t("afterSanitizeAttributes",t,null)}},Mt=function e(t){var n,o=Nt(t);for(_t("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)_t("uponSanitizeShadowNode",n,null),St(n)||(n.content instanceof c&&e(n.content),Ot(n));_t("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(r){var body,l,d,m,f,v=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((at=!r)&&(r="\x3c!--\x3e"),"string"!=typeof r&&!At(r)){if("function"!=typeof r.toString)throw H("toString is not a function");if("string"!=typeof(r=r.toString()))throw H("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof r)return t.toStaticHTML(r);if(At(r))return t.toStaticHTML(r.outerHTML)}return r}if(Pe||pt(v),n.removed=[],"string"==typeof r&&(Ye=!1),Ye){if(r.nodeName){var y=be(r.nodeName);if(!_e[y]||Me[y])throw H("root node is forbidden and cannot be sanitized in-place")}}else if(r instanceof h)1===(l=(body=kt("\x3c!----\x3e")).ownerDocument.importNode(r,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?body=l:body.appendChild(l);else{if(!ze&&!He&&!$e&&-1===r.indexOf("<"))return P&&Ke?P.createHTML(r):r;if(!(body=kt(r)))return ze?null:Ke?ce:""}body&&Ue&&It(body.firstChild);for(var x=Nt(Ye?r:body);d=x.nextNode();)3===d.nodeType&&d===m||St(d)||(d.content instanceof c&&Mt(d.content),Ot(d),m=d);if(m=null,Ye)return r;if(ze){if(Be)for(f=me.call(body.ownerDocument);body.firstChild;)f.appendChild(body.firstChild);else f=body;return we.shadowroot&&(f=fe.call(o,f,!0)),f}var I=$e?body.outerHTML:body.innerHTML;return $e&&_e["!doctype"]&&body.ownerDocument&&body.ownerDocument.doctype&&body.ownerDocument.doctype.name&&F(oe,body.ownerDocument.doctype.name)&&(I="<!DOCTYPE "+body.ownerDocument.doctype.name+">\n"+I),He&&(I=L(I,xe," "),I=L(I,Ie," ")),P&&Ke?P.createHTML(I):I},n.setConfig=function(e){pt(e),Pe=!0},n.clearConfig=function(){ut=null,Pe=!1},n.isValidAttribute=function(e,t,n){ut||pt({});var o=be(e),r=be(t);return wt(o,r,n)},n.addHook=function(e,t){"function"==typeof t&&(ve[e]=ve[e]||[],E(ve[e],t))},n.removeHook=function(e){if(ve[e])return w(ve[e])},n.removeHooks=function(e){ve[e]&&(ve[e]=[])},n.removeAllHooks=function(){ve={}},n}return le()}()}}]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/FreelancerProfileNuxt/vendors~menu~month-year-selector~secondary-dropdown-menu.6e61368e.js.map