(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{134:function(t,e,r){"use strict";r.r(e);var n=r(50),i=r.n(n),o=r(51),c=r(1),a=r(89),s=r(20),l=r(56),u=r(21),d=(r(30),r(54)),h=r(64),f=r(0);e.default=function(){var t,e,r,n=Object(u.b)();return r=Object(u.c)((function(t){var e;return null===(e=t.dashboardStats)||void 0===e?void 0:e.drugs_category_list})),Object(c.useEffect)((function(){var t=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(d.a.getAllDrugsCategories());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),console.log(r),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"contaniner-fluid",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"dashboard_main_area pb-0 row",children:[Object(f.jsx)(l.a,{}),Object(f.jsx)("div",{className:"col-md-11 expand12 pr0",children:Object(f.jsx)("div",{className:"row jcenter pt-9 mr0p",children:Object(f.jsx)("div",{className:"col-md-12 charthome",children:Object(f.jsxs)("div",{className:"col-md-12 charthome",children:[Object(f.jsxs)("div",{className:"sidebarUpdate1 text-left",children:[Object(f.jsx)("span",{children:"Drugs Categories "}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("input",{type:"text",className:"search_on1 searchz form-control",placeholder:"search"})]}),Object(f.jsx)("span",{children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("select",{name:"filter",className:"filter1",id:"",children:Object(f.jsx)("option",{value:"",children:"Filter"})}),Object(f.jsx)(s.a,{to:"/admin/drugs/category/add",children:Object(f.jsx)("button",{className:"addstaff bluebtn",children:"+ Add Category"})})]})})]}),Object(f.jsxs)(a.a,{className:"table",responsive:!0,striped:!0,children:[Object(f.jsx)("thead",{className:"",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Category name"}),Object(f.jsx)("th",{scope:"col",children:"Description"}),Object(f.jsx)("th",{scope:"col",children:"Date"}),Object(f.jsx)("th",{scope:"col",children:"Created By"})]})}),Object(f.jsx)("tbody",{children:(null===(t=r)||void 0===t?void 0:t.length)>0&&(null===(e=r)||void 0===e?void 0:e.map((function(t,e){return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{scope:"row",className:"thd",children:[Object(f.jsx)("span",{className:"slect3",children:Object(f.jsx)("input",{type:"checkbox",name:"selectstaff",id:""})})," ",Object(f.jsx)("td",{children:null===t||void 0===t?void 0:t.name})]}),Object(f.jsx)("td",{children:null===t||void 0===t?void 0:t.description}),Object(f.jsx)("td",{children:Object(h.a)(null===t||void 0===t?void 0:t.createdAt)}),Object(f.jsx)("td",{children:Object(f.jsx)("span",{className:"",children:null===t||void 0===t?void 0:t.createdBy})}),Object(f.jsx)("td",{})]},e)})))})]})]})})})})]})})})})}},50:function(t,e,r){t.exports=r(52)},51:function(t,e,r){"use strict";function n(t,e,r,n,i,o,c){try{var a=t[o](c),s=a.value}catch(l){return void r(l)}a.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var c=t.apply(e,r);function a(t){n(c,i,o,a,s,"next",t)}function s(t){n(c,i,o,a,s,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return i}))},52:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(M){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),c=new V(n||[]);return o._invoke=function(t,e,r){var n=d;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return B()}for(r.method=i,r.arg=o;;){var c=r.delegate;if(c){var a=A(c,r);if(a){if(a===j)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===j)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,c),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(M){return{type:"throw",arg:M}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",j={};function v(){}function b(){}function m(){}var C={};s(C,o,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(N([])));x&&x!==r&&n.call(x,o)&&(C=x);var O=m.prototype=v.prototype=Object.create(C);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(i,o,c,a){var s=u(t[i],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,a)}))}a(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function A(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method))return j;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,j;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,j):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,j)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function V(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,c=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:B}}function B(){return{value:e,done:!0}}return b.prototype=m,s(O,"constructor",m),s(m,"constructor",b),b.displayName=s(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,a,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var c=new w(l(e,r,n,i),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},y(O),s(O,a,"Generator"),s(O,o,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,V.prototype={constructor:V,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return a.type="throw",a.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),j}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},55:function(t,e,r){"use strict";e.a="data:image/png;base64,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"},56:function(t,e,r){"use strict";r(1);var n=r(55),i=r(0),o=function(t){return Object(i.jsxs)("div",{className:"card1 card12",children:[Object(i.jsx)("div",{className:"cardfirst",children:t.icon_}),Object(i.jsxs)("div",{className:"cardsecond",children:[Object(i.jsx)("div",{className:"cardsecond1",children:t.title}),Object(i.jsxs)("div",{className:"cardnumeb",children:[" ",Object(i.jsx)("span",{children:null===t||void 0===t?void 0:t.card_value})," ",Object(i.jsxs)("span",{className:"metricsz",children:[Object(i.jsx)("svg",{width:"15",height:"10",viewBox:"0 0 15 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M10.6503 2.16654L7.68983 5.12696L5.12696 2.56287L0 7.68983L1.70858 9.39842L5.12696 5.98125L7.68983 8.54413L12.3588 3.87512L14.5254 6.04167V0H8.48371L10.6503 2.16654Z",fill:"#27AE60"})}),"2.1%"]})]})]})]})};e.a=function(t){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"col-md-12 _main_area2",children:[Object(i.jsx)(o,{title:"Total Staff",card_value:15,icon_:Object(i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("rect",{width:"40",height:"40",rx:"6",fill:"url(#paint0_linear_260_2824)"}),Object(i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M31.2994 27.7182H28.9109V14.7363C28.8614 9.11253 23.1018 7.43186 18.3624 7V12.0434V27.7223H16.9372V12.7187L12.3898 14.8766C12.0012 15.0591 11.6753 15.3366 11.4481 15.6783C11.2209 16.0201 11.1013 16.4128 11.1026 16.8131V17.6685H14.1242C14.311 17.6685 14.4901 17.7366 14.6222 17.8577C14.7543 17.9788 14.8285 18.143 14.8285 18.3143C14.8285 18.4855 14.7543 18.6498 14.6222 18.7709C14.4901 18.892 14.311 18.96 14.1242 18.96H11.1026V20.0685H14.1242C14.311 20.0685 14.4901 20.1366 14.6222 20.2577C14.7543 20.3787 14.8285 20.543 14.8285 20.7142C14.8285 20.8855 14.7543 21.0497 14.6222 21.1708C14.4901 21.2919 14.311 21.36 14.1242 21.36H11.1026V22.4369H14.1242C14.3104 22.4369 14.489 22.5047 14.6206 22.6254C14.7523 22.7461 14.8263 22.9098 14.8263 23.0805C14.8263 23.2512 14.7523 23.415 14.6206 23.5357C14.489 23.6564 14.3104 23.7242 14.1242 23.7242H11.1026V27.7127H8.70211C8.5159 27.7127 8.3373 27.7805 8.20562 27.9012C8.07395 28.0219 8 28.1856 8 28.3564C8 28.5271 8.07395 28.6908 8.20562 28.8115C8.3373 28.9322 8.5159 29 8.70211 29H31.2979C31.4841 29 31.6627 28.9322 31.7944 28.8115C31.9261 28.6908 32 28.5271 32 28.3564C32 28.1856 31.9261 28.0219 31.7944 27.9012C31.6627 27.7805 31.4841 27.7127 31.2979 27.7127L31.2994 27.7182ZM13.4205 27.7182V25.6662C13.4205 25.4949 13.4947 25.3307 13.6268 25.2096C13.7589 25.0885 13.9381 25.0204 14.1249 25.0204C14.3117 25.0204 14.4909 25.0885 14.623 25.2096C14.7551 25.3307 14.8293 25.4949 14.8293 25.6662V27.7182H13.4205ZM25.7558 23.0805C25.7558 23.1651 25.7377 23.2488 25.7024 23.3268C25.6671 23.4049 25.6154 23.4759 25.5502 23.5357C25.485 23.5954 25.4076 23.6429 25.3224 23.6752C25.2372 23.7075 25.1459 23.7242 25.0537 23.7242C24.9615 23.7242 24.8702 23.7075 24.785 23.6752C24.6998 23.6429 24.6224 23.5954 24.5572 23.5357C24.492 23.4759 24.4403 23.4049 24.405 23.3268C24.3698 23.2488 24.3516 23.1651 24.3516 23.0805V21.7739C24.3516 21.6032 24.4256 21.4395 24.5572 21.3188C24.6889 21.1981 24.8675 21.1303 25.0537 21.1303C25.2399 21.1303 25.4185 21.1981 25.5502 21.3188C25.6818 21.4395 25.7558 21.6032 25.7558 21.7739V23.0805ZM24.3471 14.867C24.3471 14.6963 24.4211 14.5325 24.5527 14.4118C24.6844 14.2911 24.863 14.2233 25.0492 14.2233C25.2354 14.2233 25.414 14.2911 25.5457 14.4118C25.6774 14.5325 25.7514 14.6963 25.7514 14.867V16.1777C25.7514 16.3484 25.6774 16.5121 25.5457 16.6328C25.414 16.7535 25.2354 16.8213 25.0492 16.8213C24.863 16.8213 24.6844 16.7535 24.5527 16.6328C24.4211 16.5121 24.3471 16.3484 24.3471 16.1777V14.867ZM24.3381 18.3163C24.3381 18.1451 24.4123 17.9808 24.5444 17.8597C24.6765 17.7386 24.8556 17.6706 25.0425 17.6706C25.2293 17.6706 25.4084 17.7386 25.5405 17.8597C25.6726 17.9808 25.7468 18.1451 25.7468 18.3163V19.6229C25.7468 19.7942 25.6726 19.9584 25.5405 20.0795C25.4084 20.2006 25.2293 20.2686 25.0425 20.2686C24.8556 20.2686 24.6765 20.2006 24.5444 20.0795C24.4123 19.9584 24.3381 19.7942 24.3381 19.6229V18.3163ZM21.5205 14.867C21.5205 14.6963 21.5945 14.5325 21.7262 14.4118C21.8579 14.2911 22.0364 14.2233 22.2227 14.2233C22.4089 14.2233 22.5875 14.2911 22.7191 14.4118C22.8508 14.5325 22.9248 14.6963 22.9248 14.867V16.1777C22.9248 16.3484 22.8508 16.5121 22.7191 16.6328C22.5875 16.7535 22.4089 16.8213 22.2227 16.8213C22.0364 16.8213 21.8579 16.7535 21.7262 16.6328C21.5945 16.5121 21.5205 16.3484 21.5205 16.1777V14.867ZM22.9293 21.7739V23.0805C22.9293 23.2512 22.8553 23.415 22.7236 23.5357C22.592 23.6564 22.4134 23.7242 22.2272 23.7242C22.041 23.7242 21.8624 23.6564 21.7307 23.5357C21.599 23.415 21.525 23.2512 21.525 23.0805V21.7739C21.525 21.6032 21.599 21.4395 21.7307 21.3188C21.8624 21.1981 22.041 21.1303 22.2272 21.1303C22.4134 21.1303 22.592 21.1981 22.7236 21.3188C22.8553 21.4395 22.9293 21.6032 22.9293 21.7739ZM21.513 18.3163C21.513 18.1451 21.5872 17.9808 21.7193 17.8597C21.8514 17.7386 22.0306 17.6706 22.2174 17.6706C22.4043 17.6706 22.5834 17.7386 22.7155 17.8597C22.8476 17.9808 22.9218 18.1451 22.9218 18.3163V19.6229C22.9218 19.7942 22.8476 19.9584 22.7155 20.0795C22.5834 20.2006 22.4043 20.2686 22.2174 20.2686C22.0306 20.2686 21.8514 20.2006 21.7193 20.0795C21.5872 19.9584 21.513 19.7942 21.513 19.6229V18.3163ZM21.525 27.7182V25.6662C21.525 25.4949 21.5992 25.3307 21.7313 25.2096C21.8634 25.0885 22.0426 25.0204 22.2294 25.0204C22.4162 25.0204 22.5954 25.0885 22.7275 25.2096C22.8596 25.3307 22.9338 25.4949 22.9338 25.6662V27.7182H21.525ZM24.3381 27.7182V25.6662C24.3381 25.4949 24.4123 25.3307 24.5444 25.2096C24.6765 25.0885 24.8556 25.0204 25.0425 25.0204C25.2293 25.0204 25.4084 25.0885 25.5405 25.2096C25.6726 25.3307 25.7468 25.4949 25.7468 25.6662V27.7182H24.3381Z",fill:"white"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"paint0_linear_260_2824",x1:"20",y1:"0",x2:"20",y2:"40",gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{"stop-color":"#FFC5A9"}),Object(i.jsx)("stop",{offset:"1","stop-color":"#F79463","stop-opacity":"0.94"})]})})]})}),Object(i.jsx)(o,{title:"Administrators",card_value:105,icon_:Object(i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("rect",{width:"40",height:"40",rx:"6",fill:"url(#paint0_linear_260_2823)"}),Object(i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.0397 30.0524C32.0401 31.1572 31.1446 32.053 30.0397 32.053H10C8.89543 32.053 8 31.1576 8 30.053V10.0126C8 8.90806 8.89543 8.01263 10 8.01263H25.1797C25.7101 8.01263 26.2188 8.22335 26.5939 8.59842L31.4489 13.4534C31.8238 13.8283 32.0345 14.3368 32.0347 14.867L32.0397 30.0524Z",fill:"#666666"}),Object(i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.0419 14.0263L26.0156 8V11.3326C26.016 12.0453 26.2987 12.7289 26.8019 13.2337C27.305 13.7385 27.9876 14.0235 28.7004 14.0263H32.0419Z",fill:"#F79463"}),Object(i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9367 15.7224H17.8229C18.2371 15.7239 18.634 15.8892 18.9269 16.1821C19.2198 16.4751 19.3851 16.8719 19.3867 17.2862C19.3851 17.7004 19.2198 18.0973 18.9269 18.3902C18.634 18.6831 18.2371 18.8484 17.8229 18.85H11.9367C11.523 18.848 11.1268 18.6825 10.8347 18.3895C10.5425 18.0965 10.3782 17.6999 10.3774 17.2862C10.3782 16.8724 10.5425 16.4758 10.8347 16.1829C11.1268 15.8899 11.523 15.7243 11.9367 15.7224Z",fill:"#D5D5D5"}),Object(i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9382 21.003H26.9678C27.3818 21.0046 27.7783 21.17 28.0707 21.463C28.3632 21.756 28.5278 22.1528 28.5286 22.5668C28.5278 22.9808 28.3632 23.3777 28.0707 23.6707C27.7783 23.9637 27.3818 24.1291 26.9678 24.1306H11.9382C11.5242 24.1291 11.1277 23.9637 10.8352 23.6707C10.5428 23.3777 10.3782 22.9808 10.3774 22.5668C10.3782 22.1528 10.5428 21.756 10.8352 21.463C11.1277 21.17 11.5242 21.0046 11.9382 21.003Z",fill:"#D5D5D5"}),Object(i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9382 26.2886H26.9678C27.3818 26.2902 27.7783 26.4556 28.0707 26.7486C28.3632 27.0416 28.5278 27.4385 28.5286 27.8525C28.5278 28.2664 28.3632 28.6633 28.0707 28.9563C27.7783 29.2493 27.3818 29.4147 26.9678 29.4163H11.9382C11.5242 29.4147 11.1277 29.2493 10.8352 28.9563C10.5428 28.6633 10.3782 28.2664 10.3774 27.8525C10.3782 27.4385 10.5428 27.0416 10.8352 26.7486C11.1277 26.4556 11.5242 26.2902 11.9382 26.2886Z",fill:"#D5D5D5"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"paint0_linear_260_2823",x1:"20",y1:"0",x2:"20",y2:"40",gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{"stop-color":"#92E7BF"}),Object(i.jsx)("stop",{offset:"1","stop-color":"#39B67B"})]})})]})}),Object(i.jsx)(o,{title:"Other Role",card_value:195,icon_:Object(i.jsx)("img",{src:n.a})})]})})}},64:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}));var n=r(68),i=function(t){return t?n(t).format("Do MMM YYYY"):""},o=function(t){if(t){var e=n(t).format("YYYY-MM-DD");return console.log(e.currentTime),e}return""}},89:function(t,e,r){"use strict";var n=r(3),i=r(6),o=r(15),c=r.n(o),a=r(1),s=r.n(a),l=r(60),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=s.a.forwardRef((function(t,e){var r=t.bsPrefix,o=t.className,a=t.striped,d=t.bordered,h=t.borderless,f=t.hover,p=t.size,j=t.variant,v=t.responsive,b=Object(i.a)(t,u),m=Object(l.a)(r,"table"),C=c()(o,m,j&&m+"-"+j,p&&m+"-"+p,a&&m+"-striped",d&&m+"-bordered",h&&m+"-borderless",f&&m+"-hover"),g=s.a.createElement("table",Object(n.a)({},b,{className:C,ref:e}));if(v){var x=m+"-responsive";return"string"===typeof v&&(x=x+"-"+v),s.a.createElement("div",{className:x},g)}return g}));e.a=d}}]);
//# sourceMappingURL=9.786824fd.chunk.js.map