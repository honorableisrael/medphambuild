(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[35],{137:function(e,t,c){"use strict";c.r(t);c(4);var s=c(50),n=c.n(s),a=c(51),l=c(19),r=c(0),i=c.n(r),d=c(67),o=c(23),j=c(8),h=c(56),b=c(60),u=(c(31),c(131)),x=c(1),m=function(e){var t,c=i.a.useState(!1),s=Object(l.a)(c,2),n=s[0],a=s[1],r=i.a.createRef(),d=i.a.createRef();return console.log(n),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("a",{className:"text-blueGray-500 py-1 px-3 colreverse",ref:r,onClick:function(e){e.preventDefault(),n?a(!1):(Object(u.a)(r.current,d.current,{placement:"left-start"}),a(!0))},children:Object(x.jsxs)("svg",{width:"4",height:"16",viewBox:"0 0 4 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("mask",{id:"mask0_50_573",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"4",height:"16",children:Object(x.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z",fill:"white"})}),Object(x.jsx)("g",{mask:"url(#mask0_50_573)",children:Object(x.jsx)("rect",{x:"-10",y:"-4",width:"24",height:"24",fill:"#9EA0A5"})})]})}),n&&Object(x.jsx)("div",{className:"reltv",children:Object(x.jsx)("div",{ref:d,className:(n?"block ":"hidden ")+"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 colreverse",children:Object(x.jsx)("a",{href:"/admin/manufacturer/edit/".concat(null===e||void 0===e||null===(t=e.company_info)||void 0===t?void 0:t.id),className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"Edit"})})})]})};t.default=function(e){var t,c,s,i=Object(r.useState)({filterby:""}),u=Object(l.a)(i,2),O=u[0],p=(u[1],Object(o.b)()),v=Object(o.c)((function(e){return e.dashboardStats.manufacturer_list})),f=function(){var e=Object(a.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(h.a.getAllManufacturers());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){f()}),[p]);console.log(v);O.filterby;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"contaniner-fluid",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"dashboard_main_area pb-0 row",children:[Object(x.jsx)(b.a,{}),Object(x.jsx)("div",{className:"col-md-11 expand12",children:Object(x.jsx)("div",{className:"row jcenter pt-9",children:Object(x.jsx)("div",{className:"col-md-12 charthome",children:Object(x.jsxs)("div",{className:"col-md-12 charthome",children:[Object(x.jsxs)("div",{className:"sidebarUpdate1 text-left",children:[Object(x.jsxs)("span",{children:[(null===v||void 0===v?void 0:v.length)>0&&(null===v||void 0===v||null===(t=v[0])||void 0===t?void 0:t.clientName)," ",!(null===v||void 0===v||null===(c=v[0])||void 0===c?void 0:c.name)&&(null===v||void 0===v?void 0:v.length)>0&&(null===v||void 0===v||null===(s=v[0])||void 0===s?void 0:s.organisationName),"  Manufacturer"]}),Object(x.jsxs)("span",{children:[" ",Object(x.jsx)("input",{type:"text",className:"search_on1 searchz form-control",placeholder:"search"})]}),Object(x.jsx)("span",{children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(j.a,{to:"/admin/manufacturer/create",children:Object(x.jsx)("button",{className:"addstaff bluebtn",children:"+ Add Manufacturer"})})})})]}),Object(x.jsxs)(d.a,{className:"table",responsive:!0,striped:!0,children:[Object(x.jsx)("thead",{className:"",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:" Name"}),Object(x.jsx)("th",{scope:"col",children:"Address"}),Object(x.jsx)("th",{scope:"col",children:"Mobile"}),Object(x.jsx)("th",{scope:"col",children:" Actions "})]})}),Object(x.jsx)("tbody",{children:(null===v||void 0===v?void 0:v.length)>0&&(null===v||void 0===v?void 0:v.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("th",{scope:"row",className:"thd",children:[Object(x.jsx)("span",{className:"slect3",children:Object(x.jsx)("input",{type:"checkbox",name:"selectstaff",id:""})})," ",Object(x.jsx)("td",{children:null===e||void 0===e?void 0:e.name})]}),Object(x.jsxs)("td",{children:[Object(x.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.address}),Object(x.jsx)("span",{className:"notif1"})]}),Object(x.jsxs)("td",{children:[Object(x.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.phoneNumber}),Object(x.jsx)("span",{className:"notif1"})]}),Object(x.jsx)("td",{children:Object(x.jsx)(m,{company_info:e})})]},t)})))})]})]})})})})]})})})})}}}]);
//# sourceMappingURL=35.bd64658a.chunk.js.map