(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[10],{117:function(e,t,n){"use strict";n.r(t);var a=n(52),c=n.n(a),r=n(53),s=n(0),i=n(75),l=n(10),o=n(61),d=n(63),u=n(24),j=(n(31),n(56)),p=n(1);t.default=function(){var e,t,n=Object(u.b)();return t=Object(u.c)((function(e){var t;return null===(t=e.dashboardStats)||void 0===t?void 0:t.dashboardStats})),Object(s.useEffect)((function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(j.a.getDashboardStats());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),console.log(t),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"contaniner-fluid",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"dashboard_main_area pb-0 row",children:[Object(p.jsx)(o.a,{}),Object(p.jsx)("div",{className:"col-md-11 expand12",children:Object(p.jsx)("div",{className:"row jcenter pt-9",children:Object(p.jsx)("div",{className:"col-md-12 charthome",children:Object(p.jsxs)("div",{className:"col-md-12 charthome",children:[Object(p.jsxs)("div",{className:"sidebarUpdate1 text-left",children:[Object(p.jsx)("span",{children:"All Clients "}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)("input",{type:"text",className:"search_on1 searchz form-control",placeholder:"search"})]}),Object(p.jsx)("span",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("select",{name:"filter",className:"filter1",id:"",children:Object(p.jsx)("option",{value:"",children:"Filter"})}),Object(p.jsx)(l.a,{to:"/admin/client/add",children:Object(p.jsx)("button",{className:"addstaff bluebtn",children:"+ Add Client"})})]})})]}),Object(p.jsxs)(i.a,{className:"table",responsive:!0,striped:!0,children:[Object(p.jsx)("thead",{className:"",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Company Name"}),Object(p.jsx)("th",{scope:"col",children:"Mobile"}),Object(p.jsx)("th",{scope:"col",children:"Email"}),Object(p.jsx)("th",{scope:"col",children:"Address"}),Object(p.jsx)("th",{scope:"col",children:"Client type"}),Object(p.jsx)("th",{scope:"col",children:" Actions "})]})}),Object(p.jsx)("tbody",{children:t.length>0&&(null===(e=t)||void 0===e?void 0:e.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("th",{scope:"row",className:"thd",children:[Object(p.jsx)("span",{className:"slect3",children:Object(p.jsx)("input",{type:"checkbox",name:"selectstaff",id:""})})," ",Object(p.jsx)("td",{children:null===e||void 0===e?void 0:e.companyName})]}),Object(p.jsx)("td",{children:null===e||void 0===e?void 0:e.contactPhoneNumber}),Object(p.jsx)("td",{children:Object(p.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.contactEmailAddress})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.officeAddress}),Object(p.jsx)("span",{className:"notif1"})]}),Object(p.jsxs)("td",{children:[Object(p.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.clientType}),Object(p.jsx)("span",{className:"notif1"})]}),Object(p.jsx)("td",{children:Object(p.jsx)(d.a,{company_info:e})})]},t)})))})]})]})})})})]})})})})}},50:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return s}));var a=function(){return localStorage.getItem("auth_token")},c=function(){return localStorage.removeItem("auth_token")},r=function(e){var t;t=e.token,localStorage.setItem("auth_token",t),localStorage.setItem("admin_data",JSON.stringify(e)),window.location.assign("/admin/dashboard")},s=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):""}},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));n(0);var a=n(12),c="http://172.105.71.75:8091/api",r=function(e){Object(a.b)(e)}},54:function(e,t,n){"use strict";var a=n(58),c=n.n(a),r=n(50),s=n(51),i=c.a.create();i.interceptors.request.use((function(e){return e.baseURL=s.b,console.log(Object(r.c)()),"undefined"!==Object(r.c)()&&(e.headers.Authorization=Object(r.c)()?"Bearer ".concat(Object(r.c)()):""),e.headers["Content-Type"]="application/json",e.headers.Accept="application/json",e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return console.log(e),e}),(function(e){var t,n,a,c;return console.error("error_status",e.response),Object(s.a)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message),401!==(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)&&404!==(null===e||void 0===e||null===(c=e.response)||void 0===c?void 0:c.status)||Object(s.a)("Failed to process please try again later"),Promise.reject(e)})),t.a=i},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(52),c=n.n(a),r=n(53),s=n(13),i=n(54),l=n(50),o=n(51),d={getDashboardStats:function(){var e,t=null===(e=Object(l.b)("admin_data"))||void 0===e?void 0:e.organisationId;return console.log(t),function(){var e=Object(r.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/organisations/".concat(t,"/clients"));case 2:a=e.sent,r=a.data.data,n({type:s.a.DASHBOARD_STATS_SUCCESS,payload:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAllRoles:function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/roles");case 2:n=e.sent,a=n.data.data,console.log(a),t({type:s.a.DASHBOARD_ROLES_SUCCESS,payload:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAllStaffs:function(e,t){return function(){var n=Object(r.a)(c.a.mark((function n(a){var r,l;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.get("/users/".concat(e,"/company?type=").concat(t));case 2:r=n.sent,l=r.data.data,console.log(l),a({type:s.a.DASHBOARD_USERS_SUCCESS,payload:l});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},registerOrganisation:function(e){try{return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/organisations/register",e);case 2:r=t.sent,console.log(r),Object(o.a)(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(o.a)("failed to process")}},getAllOrganisation:function(){var e,t=null===(e=Object(l.b)("admin_data"))||void 0===e?void 0:e.organisationId;return function(){var e=Object(r.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/organisations/".concat(t,"/suborganisations"));case 2:a=e.sent,r=a.data.data,console.log(r),n({type:s.a.DASHBOARD_ORGANISATIONS_SUCCESS,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},registerClient:function(e){try{return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/clients/register",e);case 2:r=t.sent,console.log(r),Object(o.a)(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(o.a)("failed to process")}},registerStaff:function(e){try{return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/users/register",e);case 2:r=t.sent,console.log(r),Object(o.a)(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){Object(o.a)("failed to process")}}}},60:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},61:function(e,t,n){"use strict";n(0);var a=n(60),c=n(1),r=function(e){return Object(c.jsxs)("div",{className:"card1 card12",children:[Object(c.jsx)("div",{className:"cardfirst",children:e.icon_}),Object(c.jsxs)("div",{className:"cardsecond",children:[Object(c.jsx)("div",{className:"cardsecond1",children:e.title}),Object(c.jsxs)("div",{className:"cardnumeb",children:[" ",Object(c.jsx)("span",{children:null===e||void 0===e?void 0:e.card_value})," ",Object(c.jsxs)("span",{className:"metricsz",children:[Object(c.jsx)("svg",{width:"15",height:"10",viewBox:"0 0 15 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M10.6503 2.16654L7.68983 5.12696L5.12696 2.56287L0 7.68983L1.70858 9.39842L5.12696 5.98125L7.68983 8.54413L12.3588 3.87512L14.5254 6.04167V0H8.48371L10.6503 2.16654Z",fill:"#27AE60"})}),"2.1%"]})]})]})]})};t.a=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"col-md-12 _main_area2",children:[Object(c.jsx)(r,{title:"Total Staff",card_value:15,icon_:Object(c.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("rect",{width:"40",height:"40",rx:"6",fill:"url(#paint0_linear_260_2824)"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M31.2994 27.7182H28.9109V14.7363C28.8614 9.11253 23.1018 7.43186 18.3624 7V12.0434V27.7223H16.9372V12.7187L12.3898 14.8766C12.0012 15.0591 11.6753 15.3366 11.4481 15.6783C11.2209 16.0201 11.1013 16.4128 11.1026 16.8131V17.6685H14.1242C14.311 17.6685 14.4901 17.7366 14.6222 17.8577C14.7543 17.9788 14.8285 18.143 14.8285 18.3143C14.8285 18.4855 14.7543 18.6498 14.6222 18.7709C14.4901 18.892 14.311 18.96 14.1242 18.96H11.1026V20.0685H14.1242C14.311 20.0685 14.4901 20.1366 14.6222 20.2577C14.7543 20.3787 14.8285 20.543 14.8285 20.7142C14.8285 20.8855 14.7543 21.0497 14.6222 21.1708C14.4901 21.2919 14.311 21.36 14.1242 21.36H11.1026V22.4369H14.1242C14.3104 22.4369 14.489 22.5047 14.6206 22.6254C14.7523 22.7461 14.8263 22.9098 14.8263 23.0805C14.8263 23.2512 14.7523 23.415 14.6206 23.5357C14.489 23.6564 14.3104 23.7242 14.1242 23.7242H11.1026V27.7127H8.70211C8.5159 27.7127 8.3373 27.7805 8.20562 27.9012C8.07395 28.0219 8 28.1856 8 28.3564C8 28.5271 8.07395 28.6908 8.20562 28.8115C8.3373 28.9322 8.5159 29 8.70211 29H31.2979C31.4841 29 31.6627 28.9322 31.7944 28.8115C31.9261 28.6908 32 28.5271 32 28.3564C32 28.1856 31.9261 28.0219 31.7944 27.9012C31.6627 27.7805 31.4841 27.7127 31.2979 27.7127L31.2994 27.7182ZM13.4205 27.7182V25.6662C13.4205 25.4949 13.4947 25.3307 13.6268 25.2096C13.7589 25.0885 13.9381 25.0204 14.1249 25.0204C14.3117 25.0204 14.4909 25.0885 14.623 25.2096C14.7551 25.3307 14.8293 25.4949 14.8293 25.6662V27.7182H13.4205ZM25.7558 23.0805C25.7558 23.1651 25.7377 23.2488 25.7024 23.3268C25.6671 23.4049 25.6154 23.4759 25.5502 23.5357C25.485 23.5954 25.4076 23.6429 25.3224 23.6752C25.2372 23.7075 25.1459 23.7242 25.0537 23.7242C24.9615 23.7242 24.8702 23.7075 24.785 23.6752C24.6998 23.6429 24.6224 23.5954 24.5572 23.5357C24.492 23.4759 24.4403 23.4049 24.405 23.3268C24.3698 23.2488 24.3516 23.1651 24.3516 23.0805V21.7739C24.3516 21.6032 24.4256 21.4395 24.5572 21.3188C24.6889 21.1981 24.8675 21.1303 25.0537 21.1303C25.2399 21.1303 25.4185 21.1981 25.5502 21.3188C25.6818 21.4395 25.7558 21.6032 25.7558 21.7739V23.0805ZM24.3471 14.867C24.3471 14.6963 24.4211 14.5325 24.5527 14.4118C24.6844 14.2911 24.863 14.2233 25.0492 14.2233C25.2354 14.2233 25.414 14.2911 25.5457 14.4118C25.6774 14.5325 25.7514 14.6963 25.7514 14.867V16.1777C25.7514 16.3484 25.6774 16.5121 25.5457 16.6328C25.414 16.7535 25.2354 16.8213 25.0492 16.8213C24.863 16.8213 24.6844 16.7535 24.5527 16.6328C24.4211 16.5121 24.3471 16.3484 24.3471 16.1777V14.867ZM24.3381 18.3163C24.3381 18.1451 24.4123 17.9808 24.5444 17.8597C24.6765 17.7386 24.8556 17.6706 25.0425 17.6706C25.2293 17.6706 25.4084 17.7386 25.5405 17.8597C25.6726 17.9808 25.7468 18.1451 25.7468 18.3163V19.6229C25.7468 19.7942 25.6726 19.9584 25.5405 20.0795C25.4084 20.2006 25.2293 20.2686 25.0425 20.2686C24.8556 20.2686 24.6765 20.2006 24.5444 20.0795C24.4123 19.9584 24.3381 19.7942 24.3381 19.6229V18.3163ZM21.5205 14.867C21.5205 14.6963 21.5945 14.5325 21.7262 14.4118C21.8579 14.2911 22.0364 14.2233 22.2227 14.2233C22.4089 14.2233 22.5875 14.2911 22.7191 14.4118C22.8508 14.5325 22.9248 14.6963 22.9248 14.867V16.1777C22.9248 16.3484 22.8508 16.5121 22.7191 16.6328C22.5875 16.7535 22.4089 16.8213 22.2227 16.8213C22.0364 16.8213 21.8579 16.7535 21.7262 16.6328C21.5945 16.5121 21.5205 16.3484 21.5205 16.1777V14.867ZM22.9293 21.7739V23.0805C22.9293 23.2512 22.8553 23.415 22.7236 23.5357C22.592 23.6564 22.4134 23.7242 22.2272 23.7242C22.041 23.7242 21.8624 23.6564 21.7307 23.5357C21.599 23.415 21.525 23.2512 21.525 23.0805V21.7739C21.525 21.6032 21.599 21.4395 21.7307 21.3188C21.8624 21.1981 22.041 21.1303 22.2272 21.1303C22.4134 21.1303 22.592 21.1981 22.7236 21.3188C22.8553 21.4395 22.9293 21.6032 22.9293 21.7739ZM21.513 18.3163C21.513 18.1451 21.5872 17.9808 21.7193 17.8597C21.8514 17.7386 22.0306 17.6706 22.2174 17.6706C22.4043 17.6706 22.5834 17.7386 22.7155 17.8597C22.8476 17.9808 22.9218 18.1451 22.9218 18.3163V19.6229C22.9218 19.7942 22.8476 19.9584 22.7155 20.0795C22.5834 20.2006 22.4043 20.2686 22.2174 20.2686C22.0306 20.2686 21.8514 20.2006 21.7193 20.0795C21.5872 19.9584 21.513 19.7942 21.513 19.6229V18.3163ZM21.525 27.7182V25.6662C21.525 25.4949 21.5992 25.3307 21.7313 25.2096C21.8634 25.0885 22.0426 25.0204 22.2294 25.0204C22.4162 25.0204 22.5954 25.0885 22.7275 25.2096C22.8596 25.3307 22.9338 25.4949 22.9338 25.6662V27.7182H21.525ZM24.3381 27.7182V25.6662C24.3381 25.4949 24.4123 25.3307 24.5444 25.2096C24.6765 25.0885 24.8556 25.0204 25.0425 25.0204C25.2293 25.0204 25.4084 25.0885 25.5405 25.2096C25.6726 25.3307 25.7468 25.4949 25.7468 25.6662V27.7182H24.3381Z",fill:"white"}),Object(c.jsx)("defs",{children:Object(c.jsxs)("linearGradient",{id:"paint0_linear_260_2824",x1:"20",y1:"0",x2:"20",y2:"40",gradientUnits:"userSpaceOnUse",children:[Object(c.jsx)("stop",{"stop-color":"#FFC5A9"}),Object(c.jsx)("stop",{offset:"1","stop-color":"#F79463","stop-opacity":"0.94"})]})})]})}),Object(c.jsx)(r,{title:"Administrators",card_value:105,icon_:Object(c.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("rect",{width:"40",height:"40",rx:"6",fill:"url(#paint0_linear_260_2823)"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.0397 30.0524C32.0401 31.1572 31.1446 32.053 30.0397 32.053H10C8.89543 32.053 8 31.1576 8 30.053V10.0126C8 8.90806 8.89543 8.01263 10 8.01263H25.1797C25.7101 8.01263 26.2188 8.22335 26.5939 8.59842L31.4489 13.4534C31.8238 13.8283 32.0345 14.3368 32.0347 14.867L32.0397 30.0524Z",fill:"#666666"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.0419 14.0263L26.0156 8V11.3326C26.016 12.0453 26.2987 12.7289 26.8019 13.2337C27.305 13.7385 27.9876 14.0235 28.7004 14.0263H32.0419Z",fill:"#F79463"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9367 15.7224H17.8229C18.2371 15.7239 18.634 15.8892 18.9269 16.1821C19.2198 16.4751 19.3851 16.8719 19.3867 17.2862C19.3851 17.7004 19.2198 18.0973 18.9269 18.3902C18.634 18.6831 18.2371 18.8484 17.8229 18.85H11.9367C11.523 18.848 11.1268 18.6825 10.8347 18.3895C10.5425 18.0965 10.3782 17.6999 10.3774 17.2862C10.3782 16.8724 10.5425 16.4758 10.8347 16.1829C11.1268 15.8899 11.523 15.7243 11.9367 15.7224Z",fill:"#D5D5D5"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9382 21.003H26.9678C27.3818 21.0046 27.7783 21.17 28.0707 21.463C28.3632 21.756 28.5278 22.1528 28.5286 22.5668C28.5278 22.9808 28.3632 23.3777 28.0707 23.6707C27.7783 23.9637 27.3818 24.1291 26.9678 24.1306H11.9382C11.5242 24.1291 11.1277 23.9637 10.8352 23.6707C10.5428 23.3777 10.3782 22.9808 10.3774 22.5668C10.3782 22.1528 10.5428 21.756 10.8352 21.463C11.1277 21.17 11.5242 21.0046 11.9382 21.003Z",fill:"#D5D5D5"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9382 26.2886H26.9678C27.3818 26.2902 27.7783 26.4556 28.0707 26.7486C28.3632 27.0416 28.5278 27.4385 28.5286 27.8525C28.5278 28.2664 28.3632 28.6633 28.0707 28.9563C27.7783 29.2493 27.3818 29.4147 26.9678 29.4163H11.9382C11.5242 29.4147 11.1277 29.2493 10.8352 28.9563C10.5428 28.6633 10.3782 28.2664 10.3774 27.8525C10.3782 27.4385 10.5428 27.0416 10.8352 26.7486C11.1277 26.4556 11.5242 26.2902 11.9382 26.2886Z",fill:"#D5D5D5"}),Object(c.jsx)("defs",{children:Object(c.jsxs)("linearGradient",{id:"paint0_linear_260_2823",x1:"20",y1:"0",x2:"20",y2:"40",gradientUnits:"userSpaceOnUse",children:[Object(c.jsx)("stop",{"stop-color":"#92E7BF"}),Object(c.jsx)("stop",{offset:"1","stop-color":"#39B67B"})]})})]})}),Object(c.jsx)(r,{title:"Other Role",card_value:195,icon_:Object(c.jsx)("img",{src:a.a})})]})})}},63:function(e,t,n){"use strict";var a=n(19),c=n(0),r=n.n(c),s=n(120),i=n(1);t.a=function(e){var t,n,c,l=r.a.useState(!1),o=Object(a.a)(l,2),d=o[0],u=o[1],j=r.a.createRef(),p=r.a.createRef();return console.log(d),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("a",{className:"text-blueGray-500 py-1 px-3 colreverse",ref:j,onClick:function(e){e.preventDefault(),d?u(!1):(Object(s.a)(j.current,p.current,{placement:"left-start"}),u(!0))},children:Object(i.jsxs)("svg",{width:"4",height:"16",viewBox:"0 0 4 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("mask",{id:"mask0_50_573",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"4",height:"16",children:Object(i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z",fill:"white"})}),Object(i.jsx)("g",{mask:"url(#mask0_50_573)",children:Object(i.jsx)("rect",{x:"-10",y:"-4",width:"24",height:"24",fill:"#9EA0A5"})})]})}),d&&Object(i.jsx)("div",{className:"reltv",children:Object(i.jsxs)("div",{ref:p,className:(d?"block ":"hidden ")+"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 colreverse",children:[(null===(t=e.company_info)||void 0===t?void 0:t.deleted_at)&&Object(i.jsx)("a",{href:"#pablo",className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"Restore"}),Object(i.jsx)("a",{href:"/admin/staffs/".concat(null===e||void 0===e||null===(n=e.company_info)||void 0===n?void 0:n.id,"/CLIENT"),className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"View Staffs"}),Object(i.jsx)("a",{href:"/admin/null/staffs/add/".concat(null===e||void 0===e||null===(c=e.company_info)||void 0===c?void 0:c.id),className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"Add Staff"})]})})]})}}}]);
//# sourceMappingURL=10.b454f540.chunk.js.map