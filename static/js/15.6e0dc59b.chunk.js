(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[15],{144:function(e,t,n){"use strict";n.r(t);var r=n(50),a=n.n(r),c=n(51),o=n(24),s=n(4),i=n(19),u=n(0),l=n.n(u),p=n(148),d=n(9),f=n(23),h=(n(31),n(55)),m=n(1);t.default=function(){var e=Object(u.useState)({email:"",password:"",first_name:"",last_name:"",other_name:"",acceptTermsAndConditions:!1,phone:"",imageName:"",image:"",companyName:"",contactEmailAddress:"",contactPhoneNumber:"",officeAddress:"",city:"",location_state:"",uploadLoading:!1,gender:"",isloading:!1,errorMessage:""}),t=Object(i.a)(e,2),n=t[0],r=t[1],v=n.email,j=(n.other_name,n.first_name),b=n.last_name,y=n.errorMessage,g=n.phone,O=n.companyName,x=n.contactEmailAddress,w=n.contactPhoneNumber,N=n.officeAddress,C=n.city,S=n.location_state,_=n.isloading,E=function(e){if(e.preventDefault(),!O||!x||!w||!N||!C||!S||!v||!j||!b||!g)return window.scrollTo(0,0),r(Object(s.a)(Object(s.a)({},n),{},{errorMessage:"All fields are required"}));D()},A=function(e){var t;console.log(e.target.value),r(Object(s.a)(Object(s.a)({},n),{},(t={},Object(o.a)(t,e.target.name,e.target.value),Object(o.a)(t,"errorMessage",""),t)))},k=l.a.useRef("");console.log(k);var L=Object(f.b)();Object(f.c)((function(e){var t;return null===(t=e.dashboardStats)||void 0===t?void 0:t.dashboardStats})),Object(u.useEffect)((function(){var e=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(h.a.getDashboardStats());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[L]);var D=function(){Math.random().toString(36).slice(-8);var e={companyName:O,contactEmailAddress:x,contactPhoneNumber:w,officeAddress:N,city:C,state:S,adminUser:{emailAddress:v,firstName:j,lastName:b,phoneNumber:g,acceptTermsAndConditions:!0}};L(h.a.registerOrganisation(e))};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"contaniner-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"dashboard_main_area pb-0 row dashboard_block",children:[Object(m.jsx)("div",{className:"back1 pl231",children:Object(m.jsx)(d.a,{to:"/admin/organisation",children:Object(m.jsxs)("svg",{width:"87",height:"24",viewBox:"0 0 87 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{d:"M54.4764 12.176C55.159 12.3147 55.7084 12.64 56.1244 13.152C56.551 13.664 56.7644 14.2613 56.7644 14.944C56.7644 15.8827 56.4497 16.6293 55.8204 17.184C55.191 17.728 54.279 18 53.0844 18H48.5884V6.704H53.0044C54.135 6.704 54.999 6.96 55.5964 7.472C56.2044 7.97333 56.5084 8.66667 56.5084 9.552C56.5084 10.2667 56.3217 10.848 55.9484 11.296C55.575 11.7333 55.0844 12.0267 54.4764 12.176ZM50.4124 11.568H52.6684C53.3084 11.568 53.7937 11.4187 54.1244 11.12C54.4657 10.8213 54.6364 10.4053 54.6364 9.872C54.6364 9.34933 54.4657 8.93867 54.1244 8.64C53.7937 8.34133 53.287 8.192 52.6044 8.192H50.4124V11.568ZM52.7164 16.496C53.4097 16.496 53.943 16.3413 54.3164 16.032C54.7004 15.712 54.8924 15.2693 54.8924 14.704C54.8924 14.1387 54.7004 13.696 54.3164 13.376C53.9324 13.056 53.3937 12.896 52.7004 12.896H50.4124V16.496H52.7164ZM62.015 9.072C62.815 9.072 63.4977 9.26933 64.063 9.664C64.6283 10.0587 65.0283 10.5813 65.263 11.232V9.184H67.087V18H65.263V15.952C65.0283 16.6027 64.6283 17.1253 64.063 17.52C63.4977 17.9147 62.815 18.112 62.015 18.112C61.247 18.112 60.559 17.9307 59.951 17.568C59.3537 17.2053 58.8843 16.6827 58.543 16C58.2017 15.3173 58.031 14.512 58.031 13.584C58.031 12.6667 58.2017 11.8667 58.543 11.184C58.8843 10.5013 59.3537 9.97867 59.951 9.616C60.559 9.25333 61.247 9.072 62.015 9.072ZM62.575 10.672C61.7643 10.672 61.1137 10.9333 60.623 11.456C60.143 11.968 59.903 12.6773 59.903 13.584C59.903 14.4907 60.143 15.2053 60.623 15.728C61.1137 16.24 61.7643 16.496 62.575 16.496C63.087 16.496 63.5457 16.3787 63.951 16.144C64.3563 15.8987 64.6763 15.5573 64.911 15.12C65.1457 14.6827 65.263 14.1707 65.263 13.584C65.263 13.008 65.1457 12.5013 64.911 12.064C64.6763 11.616 64.3563 11.2747 63.951 11.04C63.5457 10.7947 63.087 10.672 62.575 10.672ZM73.1959 9.072C74.3372 9.072 75.2812 9.376 76.0279 9.984C76.7745 10.5813 77.2385 11.3973 77.4199 12.432H75.4839C75.3772 11.8773 75.1159 11.4453 74.6999 11.136C74.2945 10.816 73.7825 10.656 73.1639 10.656C72.4599 10.656 71.8732 10.9067 71.4039 11.408C70.9345 11.8987 70.6999 12.624 70.6999 13.584C70.6999 14.544 70.9345 15.2747 71.4039 15.776C71.8732 16.2773 72.4599 16.528 73.1639 16.528C73.7825 16.528 74.2945 16.368 74.6999 16.048C75.1159 15.728 75.3772 15.2907 75.4839 14.736H77.4199C77.2385 15.7707 76.7745 16.592 76.0279 17.2C75.2812 17.808 74.3372 18.112 73.1959 18.112C72.3425 18.112 71.5852 17.9307 70.9239 17.568C70.2732 17.2053 69.7612 16.6827 69.3879 16C69.0145 15.3173 68.8279 14.512 68.8279 13.584C68.8279 12.6667 69.0145 11.8667 69.3879 11.184C69.7612 10.5013 70.2732 9.97867 70.9239 9.616C71.5852 9.25333 72.3425 9.072 73.1959 9.072ZM84.1741 18L81.0061 14.08V18H79.1821V6.16H81.0061V12.944L84.1421 9.184H86.3341L82.4941 13.568L86.4301 18H84.1741Z",fill:"#00B5FF"}),Object(m.jsx)("path",{d:"M0 13L15 21.6603L15 4.33975L0 13ZM13.5 14.5L37 14.5L37 11.5L13.5 11.5L13.5 14.5Z",fill:"#00B5FF"})]})})}),Object(m.jsx)("div",{className:"col-md-11 expand12 mx8",children:Object(m.jsx)("div",{className:"row jcenter pt-9",children:Object(m.jsx)("div",{className:"col-md-12 charthome ml23",children:Object(m.jsxs)("form",{className:"form-wrapper",onSubmit:E,children:[Object(m.jsxs)("div",{className:"form-header",children:[Object(m.jsx)("div",{className:"titleheader_",children:"Add Organisation"}),y&&Object(m.jsx)("div",{className:"signinalertmssg",children:Object(m.jsx)(p.a,{variant:"danger",children:y})})]}),Object(m.jsxs)("div",{className:"padded-signin-wrapper padded-signin-wrapper2",children:[Object(m.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:[" ","Company Name ",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",name:"companyName",value:O,onChange:A,placeholder:"Enter your Company Name",size:60,className:"form-control forminput"})]}),Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:[" ","Company Email",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"email",name:"contactEmailAddress",value:x,onChange:A,placeholder:"Enter Company Email",size:60,className:"form-control forminput"})]})]}),Object(m.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:["Company Phone Number",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"tel",name:"contactPhoneNumber",value:w,onChange:A,placeholder:"Enter Company Phone",size:60,className:"form-control forminput"})]}),Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsx)("span",{className:"rdfrmlbl",children:"Company Office Address"}),Object(m.jsx)("input",{type:"tel",name:"officeAddress",value:N,onChange:A,placeholder:"Enter Company Address",size:60,className:"form-control forminput"})]})]}),Object(m.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:["Company City",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",name:"city",value:C,onChange:A,placeholder:"Enter Company City",size:60,className:"form-control forminput"})]}),Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:["Company State",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",name:"location_state",value:S,onChange:A,placeholder:"Enter Company State",size:60,className:"form-control forminput"})]})]})]}),Object(m.jsx)("div",{className:"admin_entry",children:" Organization Admin Entry"}),Object(m.jsxs)("div",{className:"padded-signin-wrapper padded-signin-wrapper2",children:[Object(m.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:[" ","First Name",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",name:"first_name",value:j,onChange:A,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]}),Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2right",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:[" ","Last Name",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",name:"last_name",value:b,onChange:A,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]})]}),Object(m.jsx)("div",{className:"row inputlabel label_pad justify-between",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:["Phone Number",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"phone",name:"phone",value:g,onChange:A,placeholder:"Enter your phone number",size:60,className:"form-control forminput"})]})}),Object(m.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:[" ","Email",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"email",name:"email",value:v,onChange:A,placeholder:"Enter your Email",size:60,className:"form-control forminput"})]}),Object(m.jsxs)("div",{className:"col-md-6 rdfrmlbl2right",children:[Object(m.jsxs)("span",{className:"rdfrmlbl",children:[" ","Gender",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsxs)("select",{onChange:A,className:"form-control forminput",name:"gender",children:[Object(m.jsx)("option",{}),Object(m.jsx)("option",{value:"Male",children:"Male"}),Object(m.jsx)("option",{value:"Female",children:"Female"}),Object(m.jsx)("option",{value:"Other",children:"Other"})]})]})]}),Object(m.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(m.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:E,value:_?"processing...":"Create Organisation"})})]})]})})})})]})})})})}},50:function(e,t,n){e.exports=n(56)},51:function(e,t,n){"use strict";function r(e,t,n,r,a,c,o){try{var s=e[c](o),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function s(e){r(o,a,c,s,i,"next",e)}function i(e){r(o,a,c,s,i,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return a}))},52:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return s}));var r=function(){return localStorage.getItem("auth_token")},a=function(){return localStorage.removeItem("auth_token")},c=function(e){var t;t=e.token,localStorage.setItem("auth_token",t),localStorage.setItem("admin_data",JSON.stringify(e)),window.location.assign("/admin/dashboard")},o=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):""},s=function(){setTimeout((function(){window.location.reload()}),2e3)}},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));n(0);var r=n(13),a="https://medipharm-test.herokuapp.com/api",c=function(e){Object(r.b)(e)}},54:function(e,t,n){"use strict";var r=n(58),a=n.n(r),c=n(52),o=n(53),s=a.a.create();s.interceptors.request.use((function(e){return e.baseURL=o.b,console.log(Object(c.c)()),"undefined"!==Object(c.c)()&&(e.headers.Authorization=Object(c.c)()?"Bearer ".concat(Object(c.c)()):""),e.headers["Content-Type"]="application/json",e.headers.Accept="application/json",e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return console.log(e),e}),(function(e){var t,n,r,a;return console.error("error_status",e.response),Object(o.a)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message),401!==(null===e||void 0===e||null===(r=e.response)||void 0===r?void 0:r.status)&&404!==(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)||Object(o.a)("Failed to process please try again later"),Promise.reject(e)})),t.a=s},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(50),a=n.n(r),c=n(51),o=n(8),s=n(54),i=n(52),u=n(53),l={getDashboardStats:function(){var e,t=null===(e=Object(i.b)("admin_data"))||void 0===e?void 0:e.organisationId;return console.log(t),function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/organisations/".concat(t,"/clients"));case 2:r=e.sent,c=r.data.data,n({type:o.a.DASHBOARD_STATS_SUCCESS,payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAllRoles:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/roles");case 2:n=e.sent,r=n.data.data,console.log(r),t({type:o.a.DASHBOARD_ROLES_SUCCESS,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAllStaffs:function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.get("/users/".concat(e,"/company?type=").concat(t));case 2:c=n.sent,i=c.data.data,console.log(i),r({type:o.a.DASHBOARD_USERS_SUCCESS,payload:i});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},registerOrganisation:function(e){try{return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/organisations/register",e);case 2:c=t.sent,console.log(c),Object(u.a)(null===c||void 0===c||null===(r=c.data)||void 0===r?void 0:r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(u.a)("failed to process")}},getAllOrganisation:function(){var e,t=null===(e=Object(i.b)("admin_data"))||void 0===e?void 0:e.organisationId;return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/organisations/".concat(t,"/suborganisations"));case 2:r=e.sent,c=r.data.data,console.log(c),n({type:o.a.DASHBOARD_ORGANISATIONS_SUCCESS,payload:c});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},registerClient:function(e){try{return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/clients/register",e);case 2:c=t.sent,console.log(c),Object(u.a)(null===c||void 0===c||null===(r=c.data)||void 0===r?void 0:r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(u.a)("failed to process")}},registerStaff:function(e){try{return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/users/register",e);case 2:c=t.sent,console.log(c),Object(u.a)(null===c||void 0===c||null===(r=c.data)||void 0===r?void 0:r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(u.a)("failed to process")}},getAllDrugs:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/drugs");case 2:n=e.sent,r=n.data.data,console.log(r),t({type:o.a.DASHBOARD_GET_DRUGS_SUCCESS,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAllDrugsCategories:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/drugscategories");case 2:n=e.sent,r=n.data.data,console.log(r),t({type:o.a.DASHBOARD_GET_DRUGS_CATEGORY,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},createDrug:function(e){try{return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/drugs",e);case 2:r=t.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(u.a)("failed to process")}},getOneDrug:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/drugs/".concat(e));case 2:r=t.sent,c=r.data.data,console.log(c),n({type:o.a.DASHBOARD_GET_ONE_DRUG,payload:c});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getOneUser:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/users/".concat(e));case 2:r=t.sent,c=r.data.data,console.log(c),n({type:o.a.DASHBOARD_GET_ONE_USER,payload:c});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editStaff:function(e,t){try{return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/users/".concat(t),e);case 2:c=n.sent,console.log(c),Object(u.a)("Successfully updated");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to process")}},getAllManufacturers:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/manufacturers");case 2:n=e.sent,r=n.data.data,console.log(r),t({type:o.a.DASHBOARD_GET_MANUFACTURERS,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getOneManufacturer:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/manufacturers/".concat(e));case 2:r=t.sent,c=r.data.data,n({type:o.a.DASHBOARD_GET_ONE_MANUFACTURER,payload:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},registerManufacturer:function(e){try{return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/manufacturers",e);case 2:r=t.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(u.a)("failed to process")}},updateManufacturer:function(e,t){try{return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/manufacturers/".concat(t),e);case 2:c=n.sent,console.log(c),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}},updateSuppliers:function(e,t){try{return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/suppliers/".concat(t),e);case 2:c=n.sent,console.log(c),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}},getAllSuppliers:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/suppliers");case 2:n=e.sent,r=n.data.data,console.log(r),t({type:o.a.DASHBOARD_GET_SUPLIERS,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},registerSupplier:function(e){try{return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/suppliers",e);case 2:r=t.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(u.a)("failed to process")}},getOneSupplier:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/suppliers/".concat(e));case 2:r=t.sent,c=r.data.data,n({type:o.a.DASHBOARD_GET_ONE_SUPPLIER,payload:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateDrug:function(e,t){try{return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/drugs/".concat(t),e);case 2:c=n.sent,console.log(c),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to process")}},getAllInventory:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/inventories");case 2:n=e.sent,r=n.data.data,console.log(r),t({type:o.a.DASHBOARD_GET_INVENTORY,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},createInventory:function(e){try{return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/inventories",e);case 2:r=t.sent,console.log(r),Object(u.a)("Successfully created"),Object(i.d)();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(u.a)("failed to process")}},updateInventory:function(e,t){try{return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/inventories/".concat(t),e);case 2:c=n.sent,console.log(c),Object(u.a)("Successfully updated"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}},getOneInventory:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/inventories/".concat(e));case 2:r=t.sent,c=r.data.data,console.log(c),n({type:o.a.DASHBOARD_GET_ONE_INVENTORY,payload:c});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},approveInventory:function(e,t){try{return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/inventories/".concat(t,"/approval"),e);case 2:c=n.sent,console.log(c),Object(u.a)("Successfully approved inventory"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}},rejectInventory:function(e,t){try{return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/inventories/".concat(t,"/approval"),e);case 2:c=n.sent,console.log(c),Object(u.a)("Successfully rejected inventory"),Object(i.d)();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){Object(u.a)("failed to update")}}}},56:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(L){i=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,c=Object.create(a.prototype),o=new E(r||[]);return c._invoke=function(e,t,n){var r=p;return function(a,c){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw c;return k()}for(n.method=a,n.arg=c;;){var o=n.delegate;if(o){var s=C(o,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var i=l(e,t,n);if("normal"===i.type){if(r=n.done?h:d,i.arg===m)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r=h,n.method="throw",n.arg=i.arg)}}}(e,n,o),c}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var p="suspendedStart",d="suspendedYield",f="executing",h="completed",m={};function v(){}function j(){}function b(){}var y={};i(y,c,(function(){return this}));var g=Object.getPrototypeOf,O=g&&g(g(A([])));O&&O!==n&&r.call(O,c)&&(y=O);var x=b.prototype=v.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(a,c,o,s){var i=l(e[a],e,c);if("throw"!==i.type){var u=i.arg,p=u.value;return p&&"object"===typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(p).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(i.arg)}var a;this._invoke=function(e,r){function c(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(c,c):c()}}function C(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function A(e){if(e){var n=e[c];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:k}}function k(){return{value:t,done:!0}}return j.prototype=b,i(x,"constructor",b),i(b,"constructor",j),j.displayName=i(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,i(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},w(N.prototype),i(N.prototype,o,(function(){return this})),e.AsyncIterator=N,e.async=function(t,n,r,a,c){void 0===c&&(c=Promise);var o=new N(u(t,n,r,a),c);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(x),i(x,s,"Generator"),i(x,c,(function(){return this})),i(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=15.6e0dc59b.chunk.js.map