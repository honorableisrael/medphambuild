(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[18],{129:function(t,e,n){"use strict";n.r(e);var r=n(50),a=n.n(r),o=n(51),c=n(24),s=n(4),i=n(19),u=n(0),l=n.n(u),d=n(132),f=n(9),p=n(23),h=(n(31),n(56)),v=n(1);e.default=function(t){var e=Object(u.useState)({email:"",password:"",first_name:"",last_name:"",other_name:"",acceptTermsAndConditions:!1,phone:"",imageName:"",image:"",officeAddress:"",city:"",location_state:"",uploadLoading:!1,gender:"",isloading:!1,errorMessage:"",clientType:"",assigneeId:"",selectedrole:"",organisationId:"",allusers:[]}),n=Object(i.a)(e,2),r=n[0],m=n[1],b=r.email,j=r.other_name,g=r.selectedrole,y=r.first_name,O=r.last_name,x=r.errorMessage,w=r.phone,_=r.isloading,N=function(t){var e={emailAddress:b,firstName:y,lastName:O,phoneNumber:w,otherName:j,roleId:g};return t.preventDefault(),g&&b&&y&&O&&w?11!==w.length?m(Object(s.a)(Object(s.a)({},r),{},{errorMessage:"Phone number must be 11 digit"})):void k(e):(window.scrollTo(0,0),m(Object(s.a)(Object(s.a)({},r),{},{errorMessage:"All fields are required"})))},S=function(t){var e;console.log(t.target.value),m(Object(s.a)(Object(s.a)({},r),{},(e={},Object(c.a)(e,t.target.name,t.target.value),Object(c.a)(e,"errorMessage",""),e)))},C=(l.a.useRef(""),Object(p.b)()),E=Object(p.c)((function(t){return t.dashboardStats.all_roles})),A=Object(p.c)((function(t){return t.dashboardStats.one_user}));Object(u.useEffect)((function(){var e=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(h.a.getOneUser(t.match.params.id));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var t=Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(h.a.getAllRoles());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e(),n(),m(Object(s.a)(Object(s.a)({},r),{},{email:null===A||void 0===A?void 0:A.emailAddress,first_name:null===A||void 0===A?void 0:A.firstName,last_name:null===A||void 0===A?void 0:A.lastName,phone:null===A||void 0===A?void 0:A.phoneNumber,other_name:null===A||void 0===A?void 0:A.otherName,selectedrole:null===A||void 0===A?void 0:A.role}))}),[C]),Object(u.useEffect)((function(){m(Object(s.a)(Object(s.a)({},r),{},{email:null===A||void 0===A?void 0:A.emailAddress,first_name:null===A||void 0===A?void 0:A.firstName,last_name:null===A||void 0===A?void 0:A.lastName,phone:null===A||void 0===A?void 0:A.phoneNumber,other_name:null===A||void 0===A?void 0:A.otherName,selectedrole:null===A||void 0===A?void 0:A.role}))}),[A]);var k=function(e){C(h.a.editStaff(e,t.match.params.id))};return console.log(A,"user_data "),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"contaniner-fluid",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"dashboard_main_area pb-0 row dashboard_block",children:[Object(v.jsx)("div",{className:"back1 pl231",children:Object(v.jsx)(f.a,{to:"/admin/drugs",children:Object(v.jsxs)("svg",{width:"87",height:"24",viewBox:"0 0 87 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(v.jsx)("path",{d:"M54.4764 12.176C55.159 12.3147 55.7084 12.64 56.1244 13.152C56.551 13.664 56.7644 14.2613 56.7644 14.944C56.7644 15.8827 56.4497 16.6293 55.8204 17.184C55.191 17.728 54.279 18 53.0844 18H48.5884V6.704H53.0044C54.135 6.704 54.999 6.96 55.5964 7.472C56.2044 7.97333 56.5084 8.66667 56.5084 9.552C56.5084 10.2667 56.3217 10.848 55.9484 11.296C55.575 11.7333 55.0844 12.0267 54.4764 12.176ZM50.4124 11.568H52.6684C53.3084 11.568 53.7937 11.4187 54.1244 11.12C54.4657 10.8213 54.6364 10.4053 54.6364 9.872C54.6364 9.34933 54.4657 8.93867 54.1244 8.64C53.7937 8.34133 53.287 8.192 52.6044 8.192H50.4124V11.568ZM52.7164 16.496C53.4097 16.496 53.943 16.3413 54.3164 16.032C54.7004 15.712 54.8924 15.2693 54.8924 14.704C54.8924 14.1387 54.7004 13.696 54.3164 13.376C53.9324 13.056 53.3937 12.896 52.7004 12.896H50.4124V16.496H52.7164ZM62.015 9.072C62.815 9.072 63.4977 9.26933 64.063 9.664C64.6283 10.0587 65.0283 10.5813 65.263 11.232V9.184H67.087V18H65.263V15.952C65.0283 16.6027 64.6283 17.1253 64.063 17.52C63.4977 17.9147 62.815 18.112 62.015 18.112C61.247 18.112 60.559 17.9307 59.951 17.568C59.3537 17.2053 58.8843 16.6827 58.543 16C58.2017 15.3173 58.031 14.512 58.031 13.584C58.031 12.6667 58.2017 11.8667 58.543 11.184C58.8843 10.5013 59.3537 9.97867 59.951 9.616C60.559 9.25333 61.247 9.072 62.015 9.072ZM62.575 10.672C61.7643 10.672 61.1137 10.9333 60.623 11.456C60.143 11.968 59.903 12.6773 59.903 13.584C59.903 14.4907 60.143 15.2053 60.623 15.728C61.1137 16.24 61.7643 16.496 62.575 16.496C63.087 16.496 63.5457 16.3787 63.951 16.144C64.3563 15.8987 64.6763 15.5573 64.911 15.12C65.1457 14.6827 65.263 14.1707 65.263 13.584C65.263 13.008 65.1457 12.5013 64.911 12.064C64.6763 11.616 64.3563 11.2747 63.951 11.04C63.5457 10.7947 63.087 10.672 62.575 10.672ZM73.1959 9.072C74.3372 9.072 75.2812 9.376 76.0279 9.984C76.7745 10.5813 77.2385 11.3973 77.4199 12.432H75.4839C75.3772 11.8773 75.1159 11.4453 74.6999 11.136C74.2945 10.816 73.7825 10.656 73.1639 10.656C72.4599 10.656 71.8732 10.9067 71.4039 11.408C70.9345 11.8987 70.6999 12.624 70.6999 13.584C70.6999 14.544 70.9345 15.2747 71.4039 15.776C71.8732 16.2773 72.4599 16.528 73.1639 16.528C73.7825 16.528 74.2945 16.368 74.6999 16.048C75.1159 15.728 75.3772 15.2907 75.4839 14.736H77.4199C77.2385 15.7707 76.7745 16.592 76.0279 17.2C75.2812 17.808 74.3372 18.112 73.1959 18.112C72.3425 18.112 71.5852 17.9307 70.9239 17.568C70.2732 17.2053 69.7612 16.6827 69.3879 16C69.0145 15.3173 68.8279 14.512 68.8279 13.584C68.8279 12.6667 69.0145 11.8667 69.3879 11.184C69.7612 10.5013 70.2732 9.97867 70.9239 9.616C71.5852 9.25333 72.3425 9.072 73.1959 9.072ZM84.1741 18L81.0061 14.08V18H79.1821V6.16H81.0061V12.944L84.1421 9.184H86.3341L82.4941 13.568L86.4301 18H84.1741Z",fill:"#00B5FF"}),Object(v.jsx)("path",{d:"M0 13L15 21.6603L15 4.33975L0 13ZM13.5 14.5L37 14.5L37 11.5L13.5 11.5L13.5 14.5Z",fill:"#00B5FF"})]})})}),Object(v.jsx)("div",{className:"col-md-11 expand12 mx8",children:Object(v.jsx)("div",{className:"col-md-11 expand12 mx8",children:Object(v.jsx)("div",{className:"row jcenter pt-9 mr_1",children:Object(v.jsx)("div",{className:"col-md-12 charthome ml23",children:Object(v.jsxs)("form",{className:"form-wrapper",onSubmit:N,children:[Object(v.jsxs)("div",{className:"form-header",children:[Object(v.jsx)("div",{className:"titleheader_",children:"Edit Staff"}),x&&Object(v.jsx)("div",{className:"signinalertmssg",children:Object(v.jsx)(d.a,{variant:"danger",children:x})})]}),Object(v.jsxs)("div",{className:"padded-signin-wrapper padded-signin-wrapper2",children:[Object(v.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(v.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(v.jsxs)("span",{className:"rdfrmlbl",children:[" ","First Name",Object(v.jsx)("span",{className:"text-danger",children:"*"})]}),Object(v.jsx)("input",{type:"text",name:"first_name",value:y,onChange:S,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]}),Object(v.jsxs)("div",{className:"col-md-6 rdfrmlbl2right",children:[Object(v.jsxs)("span",{className:"rdfrmlbl",children:[" ","Last Name",Object(v.jsx)("span",{className:"text-danger",children:"*"})]}),Object(v.jsx)("input",{type:"text",name:"last_name",value:O,onChange:S,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]})]}),Object(v.jsx)("div",{className:"row inputlabel label_pad justify-between",children:Object(v.jsxs)("div",{className:"col-md-12",children:[Object(v.jsxs)("span",{className:"rdfrmlbl",children:["Phone Number",Object(v.jsx)("span",{className:"text-danger",children:"*"})]}),Object(v.jsx)("input",{type:"phone",name:"phone",value:w,onChange:S,placeholder:"Enter your phone number",size:60,disabled:!0,className:"form-control forminput"})]})}),Object(v.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(v.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(v.jsxs)("span",{className:"rdfrmlbl",children:[" ","Email",Object(v.jsx)("span",{className:"text-danger",children:"*"})]}),Object(v.jsx)("input",{type:"email",name:"email",value:b,onChange:S,placeholder:"Enter your Email",size:60,disabled:!0,className:"form-control forminput"})]}),Object(v.jsxs)("div",{className:"col-md-6 rdfrmlbl2right",children:[Object(v.jsxs)("span",{className:"rdfrmlbl",children:[" ","Other name",Object(v.jsx)("span",{className:"text-danger"})]}),Object(v.jsx)("input",{type:"text",name:"other_name",value:j,onChange:S,placeholder:"Other name",size:60,className:"form-control forminput"})]})]}),Object(v.jsx)("div",{className:"row inputlabel label_pad justify-between",children:Object(v.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(v.jsxs)("span",{className:"rdfrmlbl",children:["Assign Role",Object(v.jsx)("span",{className:"text-danger",children:"*"})]}),Object(v.jsxs)("select",{onChange:S,className:"form-control forminput",name:"selectedrole",children:[Object(v.jsx)("option",{children:g||""})," ",null===E||void 0===E?void 0:E.map((function(t,e){return Object(v.jsx)("option",{value:null===t||void 0===t?void 0:t.id,children:null===t||void 0===t?void 0:t.name},e)})),Object(v.jsx)("option",{})]})]})}),Object(v.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(v.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:N,value:_?"processing...":"Edit Staff"})})]})]})})})})})]})})})})}},50:function(t,e,n){t.exports=n(55)},51:function(t,e,n){"use strict";function r(t,e,n,r,a,o,c){try{var s=t[o](c),i=s.value}catch(u){return void n(u)}s.done?e(i):Promise.resolve(i).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var c=t.apply(e,n);function s(t){r(c,a,o,s,i,"next",t)}function i(t){r(c,a,o,s,i,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return a}))},52:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return s}));var r=function(){return localStorage.getItem("auth_token")},a=function(){return localStorage.removeItem("auth_token")},o=function(t){var e;e=t.token,localStorage.setItem("auth_token",e),localStorage.setItem("admin_data",JSON.stringify(t)),window.location.assign("/admin/dashboard")},c=function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):""},s=function(){setTimeout((function(){window.location.reload()}),2e3)}},53:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));n(0);var r=n(13),a="https://medipharm-test.herokuapp.com/api",o=function(t){Object(r.b)(t)}},54:function(t,e,n){"use strict";var r=n(58),a=n.n(r),o=n(52),c=n(53),s=a.a.create();s.interceptors.request.use((function(t){return t.baseURL=c.b,console.log(Object(o.c)()),"undefined"!==Object(o.c)()&&(t.headers.Authorization=Object(o.c)()?"Bearer ".concat(Object(o.c)()):""),t.headers["Content-Type"]="application/json",t.headers.Accept="application/json",t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return console.log(t),t}),(function(t){var e,n,r,a;return console.error("error_status",t.response),Object(c.a)(null===t||void 0===t||null===(e=t.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message),401!==(null===t||void 0===t||null===(r=t.response)||void 0===r?void 0:r.status)&&404!==(null===t||void 0===t||null===(a=t.response)||void 0===a?void 0:a.status)||Object(c.a)("Failed to process please try again later"),Promise.reject(t)})),e.a=s},55:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(L){i=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),c=new E(r||[]);return o._invoke=function(t,e,n){var r=d;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var s=N(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var i=l(t,e,n);if("normal"===i.type){if(r=n.done?h:f,i.arg===v)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r=h,n.method="throw",n.arg=i.arg)}}}(t,n,c),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function m(){}function b(){}function j(){}var g={};i(g,o,(function(){return this}));var y=Object.getPrototypeOf,O=y&&y(y(A([])));O&&O!==n&&r.call(O,o)&&(g=O);var x=j.prototype=m.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(a,o,c,s){var i=l(t[a],t,o);if("throw"!==i.type){var u=i.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(i.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function N(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:k}}function k(){return{value:e,done:!0}}return b.prototype=j,i(x,"constructor",j),i(j,"constructor",b),b.displayName=i(j,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,i(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(_.prototype),i(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new _(u(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(x),i(x,s,"Generator"),i(x,o,(function(){return this})),i(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],s=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var i=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(50),a=n.n(r),o=n(51),c=n(8),s=n(54),i=n(52),u=n(53),l={getDashboardStats:function(){var t,e=null===(t=Object(i.b)("admin_data"))||void 0===t?void 0:t.organisationId;return console.log(e),function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/organisations/".concat(e,"/clients"));case 2:r=t.sent,o=r.data.data,n({type:c.a.DASHBOARD_STATS_SUCCESS,payload:o});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAllRoles:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/roles");case 2:n=t.sent,r=n.data.data,console.log(r),e({type:c.a.DASHBOARD_ROLES_SUCCESS,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAllStaffs:function(t,e){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.get("/users/".concat(t,"/company?type=").concat(e));case 2:o=n.sent,i=o.data.data,console.log(i),r({type:c.a.DASHBOARD_USERS_SUCCESS,payload:i});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},registerOrganisation:function(t){try{return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/organisations/register",t);case 2:o=e.sent,console.log(o),Object(u.a)(null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(u.a)("failed to process")}},getAllOrganisation:function(){var t,e=null===(t=Object(i.b)("admin_data"))||void 0===t?void 0:t.organisationId;return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/organisations/".concat(e,"/suborganisations"));case 2:r=t.sent,o=r.data.data,console.log(o),n({type:c.a.DASHBOARD_ORGANISATIONS_SUCCESS,payload:o});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},registerClient:function(t){try{return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/clients/register",t);case 2:o=e.sent,console.log(o),Object(u.a)(null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(u.a)("failed to process")}},registerStaff:function(t){try{return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/users/register",t);case 2:o=e.sent,console.log(o),Object(u.a)(null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(u.a)("failed to process")}},getAllDrugs:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/drugs");case 2:n=t.sent,r=n.data.data,console.log(r),e({type:c.a.DASHBOARD_GET_DRUGS_SUCCESS,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAllDrugsCategories:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/drugscategories");case 2:n=t.sent,r=n.data.data,console.log(r),e({type:c.a.DASHBOARD_GET_DRUGS_CATEGORY,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createDrug:function(t){try{return function(){var e=Object(o.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/drugs",t);case 2:r=e.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(u.a)("failed to process")}},getOneDrug:function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/drugs/".concat(t));case 2:r=e.sent,o=r.data.data,console.log(o),n({type:c.a.DASHBOARD_GET_ONE_DRUG,payload:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getOneUser:function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/users/".concat(t));case 2:r=e.sent,o=r.data.data,console.log(o),n({type:c.a.DASHBOARD_GET_ONE_USER,payload:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},editStaff:function(t,e){try{return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/users/".concat(e),t);case 2:o=n.sent,console.log(o),Object(u.a)("Successfully updated");case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to process")}},getAllManufacturers:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/manufacturers");case 2:n=t.sent,r=n.data.data,console.log(r),e({type:c.a.DASHBOARD_GET_MANUFACTURERS,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getOneManufacturer:function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/manufacturers/".concat(t));case 2:r=e.sent,o=r.data.data,n({type:c.a.DASHBOARD_GET_ONE_MANUFACTURER,payload:o});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},registerManufacturer:function(t){try{return function(){var e=Object(o.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/manufacturers",t);case 2:r=e.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(u.a)("failed to process")}},updateManufacturer:function(t,e){try{return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/manufacturers/".concat(e),t);case 2:o=n.sent,console.log(o),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}},updateSuppliers:function(t,e){try{return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/suppliers/".concat(e),t);case 2:o=n.sent,console.log(o),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}},getAllSuppliers:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/suppliers");case 2:n=t.sent,r=n.data.data,console.log(r),e({type:c.a.DASHBOARD_GET_SUPLIERS,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},registerSupplier:function(t){try{return function(){var e=Object(o.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/suppliers",t);case 2:r=e.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(u.a)("failed to process")}},getOneSupplier:function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/suppliers/".concat(t));case 2:r=e.sent,o=r.data.data,n({type:c.a.DASHBOARD_GET_ONE_SUPPLIER,payload:o});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateDrug:function(t,e){try{return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/drugs/".concat(e),t);case 2:o=n.sent,console.log(o),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to process")}},getAllInventory:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/inventories");case 2:n=t.sent,r=n.data.data,console.log(r),e({type:c.a.DASHBOARD_GET_INVENTORY,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createInventory:function(t){try{return function(){var e=Object(o.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/inventories",t);case 2:r=e.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(u.a)("failed to process")}},updateInventory:function(t,e){try{return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/inventories/".concat(e),t);case 2:o=n.sent,console.log(o),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}},getOneInventory:function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/inventories/".concat(t));case 2:r=e.sent,o=r.data.data,console.log(o),n({type:c.a.DASHBOARD_GET_ONE_INVENTORY,payload:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}}]);
//# sourceMappingURL=18.6b5c5963.chunk.js.map