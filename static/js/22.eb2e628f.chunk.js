(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[22],{124:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(51),i=r.n(o),a=r(52),c=r(4),s=r(20),u=r(0),l=r(148),h=r(9),f=r(54),d=r(1);e.default=function(t){var e=Object(u.useState)({email:"",isloading:!1,errorMessage:"",success:""}),r=Object(s.a)(e,2),o=r[0],p=r[1],v=o.email,m=o.success,g=o.errorMessage,y=o.isloading,b=function(t){if(t.preventDefault(),!v)return p(Object(c.a)(Object(c.a)({},o),{},{errorMessage:"Email address is required"}));j()},j=function(){var t=Object(a.a)(i.a.mark((function t(){var e,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(Object(c.a)(Object(c.a)({},o),{},{isloading:!0})),t.prev=1,t.next=4,f.a.post("/requestpasswordreset/".concat(v));case 4:e=t.sent,e.data.data,p(Object(c.a)(Object(c.a)({},o),{},{success:"A token has been sent to the provided email address, please check your inbox to proceed",isloading:!1})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),404==(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.status)&&p(Object(c.a)(Object(c.a)({},o),{},{errorMessage:"Failed to reset password, email does not exist",isloading:!1}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid lgwrap",children:Object(d.jsx)("div",{className:"row justify-center",children:Object(d.jsxs)("div",{className:"col-md-5 loginformbody",children:[Object(d.jsx)("div",{className:"ft1",children:"Forgot Password"}),Object(d.jsx)("div",{className:"ft3",children:"Recover your Account"}),Object(d.jsxs)("form",{className:"form-wrapper",onSubmit:b,children:[Object(d.jsxs)("div",{className:"form-header",children:[g&&Object(d.jsx)("div",{className:"signinalertmssg",children:Object(d.jsx)(l.a,{variant:"danger",children:g})}),m&&Object(d.jsx)("div",{className:"signinalertmssg",children:Object(d.jsx)(l.a,{variant:"info",children:m})})]}),Object(d.jsxs)("div",{className:"padded-signin-wrapper",children:[Object(d.jsxs)("label",{className:"inputlabel",children:[Object(d.jsxs)("span",{className:"rdfrmlbl",children:[" ","Email Address ",Object(d.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(d.jsx)("input",{type:"text",name:"email",value:v,onChange:function(t){var e;p(Object(c.a)(Object(c.a)({},o),{},(e={},Object(n.a)(e,t.target.name,t.target.value),Object(n.a)(e,"errorMessage",""),e)))},placeholder:"Enter your Email Address",size:60,className:"form-control forminput"})]}),Object(d.jsx)("div",{className:"forgotpassword",children:Object(d.jsx)(h.a,{to:"/login",children:"Login "})}),Object(d.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(d.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:b,value:y?"Submitting...":"Submit"})}),Object(d.jsx)("p",{className:"signuprgqt1",children:"\xa9 Drug Monitoring, 2021"})]})]})]})})})})}},51:function(t,e,r){t.exports=r(56)},52:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},53:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));r(0);var n=r(13),o="https://medipharm-test.herokuapp.com/api",i=function(t){Object(n.b)(t)}},54:function(t,e,r){"use strict";var n=r(58),o=r.n(n),i=r(16),a=r(53),c=o.a.create();c.interceptors.request.use((function(t){return t.baseURL=a.b,console.log(t),"undefined"!==Object(i.d)()&&"/login"!==t.url&&"/changepassword"!==t.url&&(t.headers.Authorization=Object(i.d)()?"Bearer ".concat(Object(i.d)()):""),t.headers["Content-Type"]="application/json",t.headers.Accept="application/json",t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return console.log(t),t}),(function(t){var e,r,n,o;return console.error("error_status",t.response),Object(a.a)(null===t||void 0===t||null===(e=t.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message),401!==(null===t||void 0===t||null===(n=t.response)||void 0===n?void 0:n.status)&&404!==(null===t||void 0===t||null===(o=t.response)||void 0===o?void 0:o.status)||Object(a.a)("Failed to process please try again later"),Promise.reject(t)})),e.a=c},56:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(F){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function g(){}function y(){}var b={};s(b,i,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(P([])));w&&w!==r&&n.call(w,i)&&(b=w);var x=y.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=y,s(x,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(L.prototype),s(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=22.eb2e628f.chunk.js.map