(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[24],{125:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(51),a=r.n(o),i=r(52),s=r(4),c=r(20),u=r(0),l=r(148),h=r(9),d=r(54),f=r(1);e.default=function(t){var e=Object(u.useState)({code:"",password:"",emailAddress:"",newPassword:"",isloading:!1,errorMessage:"",success:"",open:!1}),r=Object(c.a)(e,2),o=r[0],p=r[1],v=(o.code,o.emailAddress),m=o.newPassword,g=o.success,b=o.errorMessage,j=o.open,y=o.isloading,w=function(t){return t.preventDefault(),m?v?void O():p(Object(s.a)(Object(s.a)({},o),{},{errorMessage:"Email address is required"})):p(Object(s.a)(Object(s.a)({},o),{},{errorMessage:"New password is required"}))},O=function(){var e=Object(i.a)(a.a.mark((function e(){var r,n,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(Object(s.a)(Object(s.a)({},o),{},{isloading:!0})),r={newPassword:m,emailAddress:v},e.prev=2,e.next=5,d.a.post("/changepassword/".concat(t.match.params.code),r);case 5:n=e.sent,n.data.data,console.log(n),p(Object(s.a)(Object(s.a)({},o),{},{success:"Password reset successful",isloading:!1})),setTimeout((function(){window.location.assign("/login")}),3e3),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),p(Object(s.a)(Object(s.a)({},o),{},{errorMessage:(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i||null===(c=i.data)||void 0===c?void 0:c.newPassword)+"Password reset failed",isloading:!1}));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),x=function(t){var e;p(Object(s.a)(Object(s.a)({},o),{},(e={},Object(n.a)(e,t.target.name,t.target.value),Object(n.a)(e,"errorMessage",""),e)))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container-fluid lgwrap",children:Object(f.jsx)("div",{className:"row justify-center",children:Object(f.jsxs)("div",{className:"col-md-5 loginformbody",children:[Object(f.jsx)("div",{className:"ft3",children:"Reset your password"}),Object(f.jsxs)("form",{className:"form-wrapper",onSubmit:w,children:[Object(f.jsxs)("div",{className:"form-header",children:[b&&Object(f.jsx)("div",{className:"signinalertmssg",children:Object(f.jsx)(l.a,{variant:"danger",children:b})}),g&&Object(f.jsx)("div",{className:"signinalertmssg",children:Object(f.jsx)(l.a,{variant:"info",children:g})})]}),Object(f.jsxs)("div",{className:"padded-signin-wrapper",children:[Object(f.jsxs)("label",{className:"inputlabel",children:[Object(f.jsxs)("span",{className:"rdfrmlbl",children:[" ","Email Address ",Object(f.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(f.jsx)("input",{type:"text",name:"emailAddress",value:v,onChange:x,placeholder:"Enter email",size:60,className:"form-control forminput"})]}),Object(f.jsxs)("label",{className:"inputlabel",children:[Object(f.jsxs)("span",{className:"rdfrmlbl",children:[" ","New Password ",Object(f.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(f.jsx)("input",{type:j?"text":"password",name:"newPassword",value:m,onChange:x,placeholder:"Enter new password",size:60,className:"form-control forminput"})]}),Object(f.jsxs)("div",{className:"text-righ",children:[" ",Object(f.jsx)("span",{onClick:function(){p(Object(s.a)(Object(s.a)({},o),{},{open:!j}))},children:"\ud83d\udc41"})]}),Object(f.jsx)("div",{className:"forgotpassword",children:Object(f.jsx)(h.a,{to:"/login",children:"Login "})}),Object(f.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(f.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:w,value:y?"Submitting...":"Submit"})}),Object(f.jsx)("p",{className:"signuprgqt1",children:"\xa9 Drug Monitoring, 2021"})]})]})]})})})})}},51:function(t,e,r){t.exports=r(56)},52:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}r.d(e,"a",(function(){return o}))},53:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return a}));r(0);var n=r(13),o="https://medipharm-test.herokuapp.com/api",a=function(t){Object(n.b)(t)}},54:function(t,e,r){"use strict";var n=r(58),o=r.n(n),a=r(16),i=r(53),s=o.a.create();s.interceptors.request.use((function(t){return t.baseURL=i.b,console.log(t),"undefined"!==Object(a.d)()&&"/login"!==t.url&&"/changepassword"!==t.url&&(t.headers.Authorization=Object(a.d)()?"Bearer ".concat(Object(a.d)()):""),t.headers["Content-Type"]="application/json",t.headers.Accept="application/json",t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return console.log(t),t}),(function(t){var e,r,n,o;return console.error("error_status",t.response),Object(i.a)(null===t||void 0===t||null===(e=t.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message),401!==(null===t||void 0===t||null===(n=t.response)||void 0===n?void 0:n.status)&&404!==(null===t||void 0===t||null===(o=t.response)||void 0===o?void 0:o.status)||Object(i.a)("Failed to process please try again later"),Promise.reject(t)})),e.a=s},56:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(A){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function m(){}function g(){}function b(){}var j={};c(j,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(k([])));w&&w!==r&&n.call(w,a)&&(j=w);var O=b.prototype=m.prototype=Object.create(j);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=b,c(O,"constructor",b),c(b,"constructor",g),g.displayName=c(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(N.prototype),c(N.prototype,i,(function(){return this})),t.AsyncIterator=N,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new N(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(O),c(O,s,"Generator"),c(O,a,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=24.005d5454.chunk.js.map