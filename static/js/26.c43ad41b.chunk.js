(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[26],{110:function(e,t,a){"use strict";a.r(t);var n=a(24),s=a(4),r=a(19),c=a(0),i=a(132),o=a(8),l=a(55),d=a(1);t.default=function(e){var t=Object(c.useState)({email:"",password:"",first_name:"",last_name:"",phone:"",isloading:!1,errorMessage:""}),a=Object(r.a)(t,2),u=a[0],m=a[1],j=u.email,p=u.password,b=u.first_name,h=u.last_name,f=u.errorMessage,g=u.phone,O=u.isloading,v=function(e){return e.preventDefault(),j?p?void x():m(Object(s.a)(Object(s.a)({},u),{},{errorMessage:"Password is required"})):m(Object(s.a)(Object(s.a)({},u),{},{errorMessage:"Email address is required"}))},x=function(){m(Object(s.a)(Object(s.a)({},u),{},{isloading:!0}));Object(l.a)("/login")},N=function(e){var t;console.log(e.target.value),m(Object(s.a)(Object(s.a)({},u),{},(t={},Object(n.a)(t,e.target.name,e.target.value),Object(n.a)(t,"errorMessage",""),t)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid lgwrap signupwrapp",children:Object(d.jsxs)("div",{className:"row justify-center",children:[Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsx)("div",{className:"lgwrap30",children:Object(d.jsx)("span",{className:"xmc",children:"MediPharm Assitant"})})}),Object(d.jsxs)("div",{className:"col-md-6 loginformbody signup8",children:[Object(d.jsx)("div",{className:"ft3",children:"Sign up"}),Object(d.jsx)("div",{className:"ft12 f_u1 check_12",children:"Sign up as a Super Admin and create other accounts"}),Object(d.jsxs)("form",{className:"form-wrapper",onSubmit:v,children:[Object(d.jsx)("div",{className:"form-header",children:f&&Object(d.jsx)("div",{className:"signinalertmssg",children:Object(d.jsx)(i.a,{variant:"danger",children:f})})}),Object(d.jsxs)("div",{className:"padded-signin-wrapper",children:[Object(d.jsxs)("div",{className:"row inputlabel justify-between",children:[Object(d.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:" First Name"}),Object(d.jsx)("input",{type:"text",name:"first_name",value:b,onChange:N,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("div",{className:"col-md-6 rdfrmlbl2right",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:" Last Name"}),Object(d.jsx)("input",{type:"text",name:"last_name",value:h,onChange:N,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]})]}),Object(d.jsxs)("label",{className:"inputlabel",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:"Email Address"}),Object(d.jsx)("input",{type:"text",name:"email",value:j,onChange:N,placeholder:"Enter your email",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("label",{className:"inputlabel",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:"Phone"}),Object(d.jsx)("input",{type:"text",name:"phone",value:g,onChange:N,placeholder:"Enter your phone",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("label",{className:"inputlabel",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",value:p,onChange:N,placeholder:"Enter your Password",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("div",{className:"forgotpassword font-200 text-dark",children:[Object(d.jsx)("input",{type:"checkbox",name:"agreement",className:"check_12",id:""}),"Creating an account means you\u2019re okay with our Terms of Service, Privacy Policy, and our default Notification Settings."]}),Object(d.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(d.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:v,value:O?"Signing up...":"Sign up"})}),Object(d.jsx)(o.a,{to:"/login",children:Object(d.jsx)("p",{className:"signuprgqt",children:"Have an account? Login"})}),Object(d.jsx)("p",{className:"signuprgqt1",children:"\xa9 Drug Monitoring, 2021"})]})]})]})]})})})}},52:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return i}));var n=function(){return localStorage.getItem("auth_token")},s=function(){return localStorage.removeItem("auth_token")},r=function(e){var t;t=e.token,localStorage.setItem("auth_token",t),localStorage.setItem("admin_data",JSON.stringify(e)),window.location.assign("/admin/dashboard")},c=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):""},i=function(){setTimeout((function(){window.location.reload()}),2e3)}},53:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return r}));a(0);var n=a(13),s="https://medipharm-test.herokuapp.com/api",r=function(e){Object(n.b)(e)}},55:function(e,t,a){"use strict";var n=a(58),s=a.n(n),r=a(52),c=a(53),i=s.a.create();i.interceptors.request.use((function(e){return e.baseURL=c.b,console.log(Object(r.c)()),"undefined"!==Object(r.c)()&&(e.headers.Authorization=Object(r.c)()?"Bearer ".concat(Object(r.c)()):""),e.headers["Content-Type"]="application/json",e.headers.Accept="application/json",e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return console.log(e),e}),(function(e){var t,a,n,s;return console.error("error_status",e.response),Object(c.a)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message),401!==(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status)&&404!==(null===e||void 0===e||null===(s=e.response)||void 0===s?void 0:s.status)||Object(c.a)("Failed to process please try again later"),Promise.reject(e)})),t.a=i}}]);
//# sourceMappingURL=26.c43ad41b.chunk.js.map