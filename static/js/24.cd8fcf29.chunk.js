(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[24],{122:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(51),a=r.n(o),i=r(52),c=r(4),s=r(20),u=r(0),l=r(149),h=r(9),f=r(54),d=r(14),p=r(1);e.default=function(t){var e=Object(u.useState)({email:"",password:"",isloading:!1,errorMessage:"",open:!1}),r=Object(s.a)(e,2),o=r[0],v=r[1],g=o.email,m=o.password,y=o.errorMessage,b=o.open,j=o.isloading,w=function(t){return t.preventDefault(),g?m?void O():v(Object(c.a)(Object(c.a)({},o),{},{errorMessage:"Password is required"})):v(Object(c.a)(Object(c.a)({},o),{},{errorMessage:"Email address is required"}))},O=function(){var t=Object(i.a)(a.a.mark((function t(){var e,r,n,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(Object(c.a)(Object(c.a)({},o),{},{isloading:!0})),e={username:g,password:m},t.prev=2,t.next=5,f.a.post("/login",e);case 5:r=t.sent,r.data.data,Object(d.f)(r.data.data),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),401==(null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status)&&v(Object(c.a)(Object(c.a)({},o),{},{errorMessage:null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i?void 0:i.message,isloading:!1})),v(Object(c.a)(Object(c.a)({},o),{},{isloading:!1,errorMessage:"failed to login"}));case 15:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}(),x=function(t){var e;v(Object(c.a)(Object(c.a)({},o),{},(e={},Object(n.a)(e,t.target.name,t.target.value),Object(n.a)(e,"errorMessage",""),e)))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container-fluid lgwrap",children:Object(p.jsx)("div",{className:"row justify-center",children:Object(p.jsxs)("div",{className:"col-md-5 loginformbody",children:[Object(p.jsx)("div",{className:"ft1",children:"Welcome Back!"}),Object(p.jsx)("div",{className:"ft3",children:"Login to your Account"}),Object(p.jsxs)("form",{className:"form-wrapper",onSubmit:w,children:[Object(p.jsx)("div",{className:"form-header",children:y&&Object(p.jsx)("div",{className:"signinalertmssg",children:Object(p.jsx)(l.a,{variant:"danger",children:y})})}),Object(p.jsxs)("div",{className:"padded-signin-wrapper",children:[Object(p.jsxs)("label",{className:"inputlabel",children:[Object(p.jsx)("span",{className:"rdfrmlbl",children:" Email Address"}),Object(p.jsx)("input",{type:"text",name:"email",value:g,onChange:x,placeholder:"Enter your Email Address",size:60,className:"form-control forminput"})]}),Object(p.jsxs)("label",{className:"inputlabel",children:[Object(p.jsx)("span",{className:"rdfrmlbl",children:"Password"}),Object(p.jsx)("input",{type:b?"text":"password",name:"password",value:m,onChange:x,placeholder:"Enter your Password",size:60,className:"form-control forminput"})]}),Object(p.jsxs)("div",{className:"text-righ",children:[" ",Object(p.jsx)("span",{onClick:function(){v(Object(c.a)(Object(c.a)({},o),{},{open:!b}))},children:"\ud83d\udc41"})]}),Object(p.jsx)("div",{className:"forgotpassword",children:Object(p.jsx)(h.a,{to:"/forgot-password",children:"Forgot Password?"})}),Object(p.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(p.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:w,value:j?"Logging in...":"Login"})}),Object(p.jsx)(h.a,{to:"/register"}),Object(p.jsx)("p",{className:"signuprgqt1",children:"\xa9 Drug Monitoring, 2021"})]})]})]})})})})}},51:function(t,e,r){t.exports=r(56)},52:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},53:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return a}));r(0);var n=r(13),o="https://medipharm-test.herokuapp.com/api",a=function(t){Object(n.b)(t)}},54:function(t,e,r){"use strict";var n=r(58),o=r.n(n),a=r(14),i=r(53),c=o.a.create();c.interceptors.request.use((function(t){return t.baseURL=i.b,console.log(t),"undefined"!==Object(a.d)()&&"/login"!==t.url&&"/changepassword"!==t.url&&(t.headers.Authorization=Object(a.d)()?"Bearer ".concat(Object(a.d)()):""),t.headers["Content-Type"]="application/json",t.headers.Accept="application/json",t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return console.log(t),t}),(function(t){var e,r,n,o;return console.error("error_status",t.response),Object(i.a)(null===t||void 0===t||null===(e=t.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message),401!==(null===t||void 0===t||null===(n=t.response)||void 0===n?void 0:n.status)&&404!==(null===t||void 0===t||null===(o=t.response)||void 0===o?void 0:o.status)||Object(i.a)("Failed to process please try again later"),Promise.reject(t)})),e.a=c},56:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return F()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};s(b,a,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(P([])));w&&w!==r&&n.call(w,a)&&(b=w);var O=y.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=y,s(O,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(O),s(O,c,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=24.cd8fcf29.chunk.js.map