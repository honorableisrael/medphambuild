(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[28],{123:function(e,s,a){"use strict";a.r(s);var t=a(25),r=a(4),n=a(19),c=a(0),i=a(148),l=a(9),o=a(54),d=a(1);s.default=function(e){var s=Object(c.useState)({email:"",password:"",first_name:"",last_name:"",phone:"",isloading:!1,errorMessage:""}),a=Object(n.a)(s,2),m=a[0],j=a[1],u=m.email,p=m.password,b=m.first_name,h=m.last_name,O=m.errorMessage,f=m.phone,g=m.isloading,v=function(e){return e.preventDefault(),u?p?void x():j(Object(r.a)(Object(r.a)({},m),{},{errorMessage:"Password is required"})):j(Object(r.a)(Object(r.a)({},m),{},{errorMessage:"Email address is required"}))},x=function(){j(Object(r.a)(Object(r.a)({},m),{},{isloading:!0}));Object(o.a)("/login")},N=function(e){var s;console.log(e.target.value),j(Object(r.a)(Object(r.a)({},m),{},(s={},Object(t.a)(s,e.target.name,e.target.value),Object(t.a)(s,"errorMessage",""),s)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid lgwrap signupwrapp",children:Object(d.jsxs)("div",{className:"row justify-center",children:[Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsx)("div",{className:"lgwrap30",children:Object(d.jsx)("span",{className:"xmc",children:"MediPharm Assitant"})})}),Object(d.jsxs)("div",{className:"col-md-6 loginformbody signup8",children:[Object(d.jsx)("div",{className:"ft3",children:"Sign up"}),Object(d.jsx)("div",{className:"ft12 f_u1 check_12",children:"Sign up as a Super Admin and create other accounts"}),Object(d.jsxs)("form",{className:"form-wrapper",onSubmit:v,children:[Object(d.jsx)("div",{className:"form-header",children:O&&Object(d.jsx)("div",{className:"signinalertmssg",children:Object(d.jsx)(i.a,{variant:"danger",children:O})})}),Object(d.jsxs)("div",{className:"padded-signin-wrapper",children:[Object(d.jsxs)("div",{className:"row inputlabel justify-between",children:[Object(d.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:" First Name"}),Object(d.jsx)("input",{type:"text",name:"first_name",value:b,onChange:N,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("div",{className:"col-md-6 rdfrmlbl2right",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:" Last Name"}),Object(d.jsx)("input",{type:"text",name:"last_name",value:h,onChange:N,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]})]}),Object(d.jsxs)("label",{className:"inputlabel",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:"Email Address"}),Object(d.jsx)("input",{type:"text",name:"email",value:u,onChange:N,placeholder:"Enter your email",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("label",{className:"inputlabel",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:"Phone"}),Object(d.jsx)("input",{type:"text",name:"phone",value:f,onChange:N,placeholder:"Enter your phone",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("label",{className:"inputlabel",children:[Object(d.jsx)("span",{className:"rdfrmlbl",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",value:p,onChange:N,placeholder:"Enter your Password",size:60,className:"form-control forminput"})]}),Object(d.jsxs)("div",{className:"forgotpassword font-200 text-dark",children:[Object(d.jsx)("input",{type:"checkbox",name:"agreement",className:"check_12",id:""}),"Creating an account means you\u2019re okay with our Terms of Service, Privacy Policy, and our default Notification Settings."]}),Object(d.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(d.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:v,value:g?"Signing up...":"Sign up"})}),Object(d.jsx)(l.a,{to:"/login",children:Object(d.jsx)("p",{className:"signuprgqt",children:"Have an account? Login"})}),Object(d.jsx)("p",{className:"signuprgqt1",children:"\xa9 Drug Monitoring, 2021"})]})]})]})]})})})}},53:function(e,s,a){"use strict";a.d(s,"b",(function(){return r})),a.d(s,"a",(function(){return n}));a(0);var t=a(13),r="https://medipharm-test.herokuapp.com/api",n=function(e){Object(t.b)(e)}},54:function(e,s,a){"use strict";var t=a(58),r=a.n(t),n=a(23),c=a(53),i=r.a.create();i.interceptors.request.use((function(e){return e.baseURL=c.b,console.log(Object(n.d)()),"undefined"!==Object(n.d)()&&(e.headers.Authorization=Object(n.d)()?"Bearer ".concat(Object(n.d)()):""),e.headers["Content-Type"]="application/json",e.headers.Accept="application/json",e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return console.log(e),e}),(function(e){var s,a,t,r;return console.error("error_status",e.response),Object(c.a)(null===e||void 0===e||null===(s=e.response)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.message),401!==(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&404!==(null===e||void 0===e||null===(r=e.response)||void 0===r?void 0:r.status)||Object(c.a)("Failed to process please try again later"),Promise.reject(e)})),s.a=i}}]);
//# sourceMappingURL=28.d7be9240.chunk.js.map