(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[47],{140:function(e,a,s){"use strict";s.r(a);var n=s(50),t=s.n(n),l=s(51),c=s(23),r=s(4),i=s(17),d=s(1),o=s.n(d),m=s(149),j=s(20),b=s(21),p=(s(30),s(54)),u=s(8),h=s(58),x=s(57),O=s(0);a.default=function(){var e=Object(d.useState)({email:"",password:"",first_name:"",last_name:"",other_name:"",acceptTermsAndConditions:!1,phone:"",imageName:"",image:"",companyName:"",contactEmailAddress:"",contactPhoneNumber:"",officeAddress:"",city:"",location_state:"",uploadLoading:!1,gender:"",isloading:!1,errorMessage:"",clientType:"",assigneeId:"",selectedrole:"",organisationId:"",allusers:[]}),a=Object(i.a)(e,2),s=a[0],n=a[1],f=s.email,v=(s.other_name,s.organisationId,s.selectedrole,s.clientType),N=s.assigneeId,C=s.first_name,g=s.last_name,y=s.errorMessage,w=s.phone,_=s.companyName,A=s.contactEmailAddress,E=s.contactPhoneNumber,H=s.officeAddress,M=s.city,L=s.location_state,P=s.isloading,z=s.allusers,I=function(e){return console.log(N,"assigneeId"),N?(e.preventDefault(),_&&A&&E&&H&&M&&L&&f&&C&&g&&w?void Z():(window.scrollTo(0,0),n(Object(r.a)(Object(r.a)({},s),{},{errorMessage:"All fields are required"})))):n(Object(r.a)(Object(r.a)({},s),{},{errorMessage:"Please assign a user"}))},T=function(e){var a;n(Object(r.a)(Object(r.a)({},s),{},(a={},Object(c.a)(a,e.target.name,e.target.value),Object(c.a)(a,"errorMessage",""),a)))},S=(o.a.useRef(""),Object(b.b)()),V=Object(b.c)((function(e){return e.dashboardStats.all_roles}));Object(d.useEffect)((function(){var e=function(){var e=Object(l.a)(t.a.mark((function e(){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(p.a.getDashboardStats());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(l.a)(t.a.mark((function e(){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(p.a.getAllRoles());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a(),e()}),[S]),Object(d.useEffect)((function(){}),[s]);var Z=function(){var e,a={companyName:_,contactEmailAddress:A,contactPhoneNumber:E,officeAddress:H,city:M,state:L,clientType:v,assigneeId:N,organisationId:null===(e=Object(u.c)("admin_data"))||void 0===e?void 0:e.organisationId,adminUser:{emailAddress:f,firstName:C,lastName:g,phoneNumber:w,acceptTermsAndConditions:!0}};S(p.a.registerClient(a))},k=function(){var e=Object(l.a)(t.a.mark((function e(a){var l,c,i,d;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(x.b,"/users/").concat(a,"/role?pageNo=",1,"&sizePerPage=",100));case 3:l=e.sent,c=l.data.data,n(Object(r.a)(Object(r.a)({},s),{},{allusers:null===c||void 0===c?void 0:c.content})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),401==(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)&&n(Object(r.a)(Object(r.a)({},s),{},{errorMessage:null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.message}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return console.log(N),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"contaniner-fluid",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"dashboard_main_area pb-0 row dashboard_block",children:[Object(O.jsx)("div",{className:"back1 pl231",children:Object(O.jsx)(j.a,{to:"/admin/client",children:Object(O.jsxs)("svg",{width:"87",height:"24",viewBox:"0 0 87 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("path",{d:"M54.4764 12.176C55.159 12.3147 55.7084 12.64 56.1244 13.152C56.551 13.664 56.7644 14.2613 56.7644 14.944C56.7644 15.8827 56.4497 16.6293 55.8204 17.184C55.191 17.728 54.279 18 53.0844 18H48.5884V6.704H53.0044C54.135 6.704 54.999 6.96 55.5964 7.472C56.2044 7.97333 56.5084 8.66667 56.5084 9.552C56.5084 10.2667 56.3217 10.848 55.9484 11.296C55.575 11.7333 55.0844 12.0267 54.4764 12.176ZM50.4124 11.568H52.6684C53.3084 11.568 53.7937 11.4187 54.1244 11.12C54.4657 10.8213 54.6364 10.4053 54.6364 9.872C54.6364 9.34933 54.4657 8.93867 54.1244 8.64C53.7937 8.34133 53.287 8.192 52.6044 8.192H50.4124V11.568ZM52.7164 16.496C53.4097 16.496 53.943 16.3413 54.3164 16.032C54.7004 15.712 54.8924 15.2693 54.8924 14.704C54.8924 14.1387 54.7004 13.696 54.3164 13.376C53.9324 13.056 53.3937 12.896 52.7004 12.896H50.4124V16.496H52.7164ZM62.015 9.072C62.815 9.072 63.4977 9.26933 64.063 9.664C64.6283 10.0587 65.0283 10.5813 65.263 11.232V9.184H67.087V18H65.263V15.952C65.0283 16.6027 64.6283 17.1253 64.063 17.52C63.4977 17.9147 62.815 18.112 62.015 18.112C61.247 18.112 60.559 17.9307 59.951 17.568C59.3537 17.2053 58.8843 16.6827 58.543 16C58.2017 15.3173 58.031 14.512 58.031 13.584C58.031 12.6667 58.2017 11.8667 58.543 11.184C58.8843 10.5013 59.3537 9.97867 59.951 9.616C60.559 9.25333 61.247 9.072 62.015 9.072ZM62.575 10.672C61.7643 10.672 61.1137 10.9333 60.623 11.456C60.143 11.968 59.903 12.6773 59.903 13.584C59.903 14.4907 60.143 15.2053 60.623 15.728C61.1137 16.24 61.7643 16.496 62.575 16.496C63.087 16.496 63.5457 16.3787 63.951 16.144C64.3563 15.8987 64.6763 15.5573 64.911 15.12C65.1457 14.6827 65.263 14.1707 65.263 13.584C65.263 13.008 65.1457 12.5013 64.911 12.064C64.6763 11.616 64.3563 11.2747 63.951 11.04C63.5457 10.7947 63.087 10.672 62.575 10.672ZM73.1959 9.072C74.3372 9.072 75.2812 9.376 76.0279 9.984C76.7745 10.5813 77.2385 11.3973 77.4199 12.432H75.4839C75.3772 11.8773 75.1159 11.4453 74.6999 11.136C74.2945 10.816 73.7825 10.656 73.1639 10.656C72.4599 10.656 71.8732 10.9067 71.4039 11.408C70.9345 11.8987 70.6999 12.624 70.6999 13.584C70.6999 14.544 70.9345 15.2747 71.4039 15.776C71.8732 16.2773 72.4599 16.528 73.1639 16.528C73.7825 16.528 74.2945 16.368 74.6999 16.048C75.1159 15.728 75.3772 15.2907 75.4839 14.736H77.4199C77.2385 15.7707 76.7745 16.592 76.0279 17.2C75.2812 17.808 74.3372 18.112 73.1959 18.112C72.3425 18.112 71.5852 17.9307 70.9239 17.568C70.2732 17.2053 69.7612 16.6827 69.3879 16C69.0145 15.3173 68.8279 14.512 68.8279 13.584C68.8279 12.6667 69.0145 11.8667 69.3879 11.184C69.7612 10.5013 70.2732 9.97867 70.9239 9.616C71.5852 9.25333 72.3425 9.072 73.1959 9.072ZM84.1741 18L81.0061 14.08V18H79.1821V6.16H81.0061V12.944L84.1421 9.184H86.3341L82.4941 13.568L86.4301 18H84.1741Z",fill:"#00B5FF"}),Object(O.jsx)("path",{d:"M0 13L15 21.6603L15 4.33975L0 13ZM13.5 14.5L37 14.5L37 11.5L13.5 11.5L13.5 14.5Z",fill:"#00B5FF"})]})})}),Object(O.jsx)("div",{className:"col-md-11 expand12 mx8",children:Object(O.jsx)("div",{className:"row jcenter pt-9",children:Object(O.jsx)("div",{className:"col-md-12 charthome ml23",children:Object(O.jsxs)("form",{className:"form-wrapper",onSubmit:I,children:[Object(O.jsxs)("div",{className:"form-header",children:[Object(O.jsx)("div",{className:"titleheader_",children:"Add Client"}),y&&Object(O.jsx)("div",{className:"signinalertmssg",children:Object(O.jsx)(m.a,{variant:"danger",children:y})})]}),Object(O.jsxs)("div",{className:"padded-signin-wrapper padded-signin-wrapper2",children:[Object(O.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:[" ","Company Name ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"text",name:"companyName",value:_,onChange:T,placeholder:"Enter your Company Name",size:60,className:"form-control forminput"})]}),Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:[" ","Company Email",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"email",name:"contactEmailAddress",value:A,onChange:T,placeholder:"Enter Company Email",size:60,className:"form-control forminput"})]})]}),Object(O.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:["Company Phone Number",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"tel",name:"contactPhoneNumber",value:E,onChange:T,placeholder:"Enter Company Phone",size:60,className:"form-control forminput"})]}),Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsx)("span",{className:"rdfrmlbl",children:"Company Office Address"}),Object(O.jsx)("input",{type:"tel",name:"officeAddress",value:H,onChange:T,placeholder:"Enter Company Address",size:60,className:"form-control forminput"})]})]}),Object(O.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:["Company City",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"text",name:"city",value:M,onChange:T,placeholder:"Enter Company City",size:60,className:"form-control forminput"})]}),Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:["Company State",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"text",name:"location_state",value:L,onChange:T,placeholder:"Enter Company State",size:60,className:"form-control forminput"})]})]}),Object(O.jsx)("div",{className:"row inputlabel label_pad justify-between",children:Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:["Client type",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsxs)("select",{onChange:T,className:"form-control forminput",name:"clientType",children:[Object(O.jsx)("option",{}),Object(O.jsx)("option",{value:"HOSPITAL",children:"HOSPITAL"}),Object(O.jsx)("option",{value:"PHARMACY",children:"PHARMACY"}),Object(O.jsx)("option",{value:"OTHER",children:"OTHER"})]})]})})]}),Object(O.jsx)("div",{className:"admin_entry",children:"Setup Assignee"}),Object(O.jsx)("div",{className:"padded-signin-wrapper padded-signin-wrapper2",children:Object(O.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:["Assign Role",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsxs)("select",{onChange:function(e){return k(e.target.value)},className:"form-control forminput",name:"selectedrole",children:[Object(O.jsx)("option",{})," ",null===V||void 0===V?void 0:V.map((function(e,a){return Object(O.jsx)("option",{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},a)})),Object(O.jsx)("option",{})]})]}),Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:["Available User",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsxs)("select",{onChange:T,className:"form-control forminput",name:"assigneeId",children:[Object(O.jsx)("option",{})," ",null===z||void 0===z?void 0:z.map((function(e,a){return Object(O.jsxs)("option",{value:null===e||void 0===e?void 0:e.id,children:[null===e||void 0===e?void 0:e.firstName," ",null===e||void 0===e?void 0:e.lastName]},a)})),Object(O.jsx)("option",{})]})]})]})}),Object(O.jsx)("div",{className:"admin_entry",children:"Create Admin"}),Object(O.jsxs)("div",{className:"padded-signin-wrapper padded-signin-wrapper2",children:[Object(O.jsxs)("div",{className:"row inputlabel label_pad justify-between",children:[Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:[" ","First Name",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"text",name:"first_name",value:C,onChange:T,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]}),Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2right",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:[" ","Last Name",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"text",name:"last_name",value:g,onChange:T,placeholder:"Enter your First Name",size:60,className:"form-control forminput"})]})]}),Object(O.jsx)("div",{className:"row inputlabel label_pad justify-between",children:Object(O.jsxs)("div",{className:"col-md-12",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:["Phone Number",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"phone",name:"phone",value:w,onChange:T,placeholder:"Enter your phone number",size:60,className:"form-control forminput"})]})}),Object(O.jsx)("div",{className:"row inputlabel label_pad justify-between",children:Object(O.jsxs)("div",{className:"col-md-6 rdfrmlbl2",children:[Object(O.jsxs)("span",{className:"rdfrmlbl",children:[" ","Email",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("input",{type:"email",name:"email",value:f,onChange:T,placeholder:"Enter your Email",size:60,className:"form-control forminput"})]})}),Object(O.jsx)("div",{className:"form-btn-wrapper loginbtdv",children:Object(O.jsx)("input",{className:"signinbtn",type:"submit",onSubmit:I,value:P?"processing...":"Create Client"})})]})]})})})})]})})})})}}}]);
//# sourceMappingURL=47.b817d805.chunk.js.map