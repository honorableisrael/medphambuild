(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[46],{127:function(e,t,n){"use strict";n.r(t);var c=n(50),a=n.n(c),r=n(51),s=n(1),l=n(89),i=n(20),o=n(59),d=n(64),j=n(21),u=(n(30),n(54)),f=n(0);t.default=function(){var e,t,n=Object(j.b)();return t=Object(j.c)((function(e){var t;return null===(t=e.dashboardStats)||void 0===t?void 0:t.dashboardStats})),Object(s.useEffect)((function(){var e=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(u.a.getDashboardStats());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),console.log(t),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"contaniner-fluid",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"dashboard_main_area pb-0 row",children:[Object(f.jsx)(o.a,{}),Object(f.jsx)("div",{className:"col-md-11 expand12",children:Object(f.jsx)("div",{className:"row jcenter pt-9",children:Object(f.jsx)("div",{className:"col-md-12 charthome",children:Object(f.jsxs)("div",{className:"col-md-12 charthome",children:[Object(f.jsxs)("div",{className:"sidebarUpdate1 text-left",children:[Object(f.jsx)("span",{children:"All Hospitals "}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("input",{type:"text",className:"search_on1 searchz form-control",placeholder:"search"})]}),Object(f.jsx)("span",{children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(i.a,{to:"/staffonboarding",children:Object(f.jsx)("button",{className:"addstaff bluebtn",children:"+ Add Hospital"})})})})]}),Object(f.jsxs)(l.a,{className:"table",responsive:!0,striped:!0,children:[Object(f.jsx)("thead",{className:"",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Company Name"}),Object(f.jsx)("th",{scope:"col",children:"Mobile"}),Object(f.jsx)("th",{scope:"col",children:"Email"}),Object(f.jsx)("th",{scope:"col",children:"Address"}),Object(f.jsx)("th",{scope:"col",children:" Actions "})]})}),Object(f.jsx)("tbody",{children:t.length>0&&(null===(e=t)||void 0===e?void 0:e.map((function(e,t){return"HOSPITAL"==(null===e||void 0===e?void 0:e.clientType)?Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{scope:"row",className:"thd",children:[Object(f.jsx)("span",{className:"slect3",children:Object(f.jsx)("input",{type:"checkbox",name:"selectstaff",id:""})})," ",Object(f.jsx)("td",{children:null===e||void 0===e?void 0:e.companyName})]}),Object(f.jsx)("td",{children:null===e||void 0===e?void 0:e.contactPhoneNumber}),Object(f.jsx)("td",{children:Object(f.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.contactEmailAddress})}),Object(f.jsxs)("td",{children:[Object(f.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.officeAddress}),Object(f.jsx)("span",{className:"notif1"})]}),Object(f.jsx)("td",{children:Object(f.jsx)(d.a,{})})]},t):null})))})]})]})})})})]})})})})}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(46),a=n(7),r=n(1),s=n.n(r),l=n(9),i=(n(2),n(3)),o=n(6),d=n(8);s.a.Component;s.a.Component;var j=function(e,t){return"function"===typeof e?e(t):e},u=function(e,t){return"string"===typeof e?Object(l.c)(e,null,null,t):e},f=function(e){return e},b=s.a.forwardRef;"undefined"===typeof b&&(b=f);var h=b((function(e,t){var n=e.innerRef,c=e.navigate,a=e.onClick,r=Object(o.a)(e,["innerRef","navigate","onClick"]),l=r.target,d=Object(i.a)({},r,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),c())}});return d.ref=f!==b&&t||n,s.a.createElement("a",d)}));var p=b((function(e,t){var n=e.component,a=void 0===n?h:n,r=e.replace,p=e.to,m=e.innerRef,v=Object(o.a)(e,["component","replace","to","innerRef"]);return s.a.createElement(c.d.Consumer,null,(function(e){e||Object(d.a)(!1);var n=e.history,c=u(j(p,e.location),e.location),o=c?n.createHref(c):"",h=Object(i.a)({},v,{href:o,navigate:function(){var t=j(p,e.location),c=Object(l.e)(e.location)===Object(l.e)(u(t));(r||c?n.replace:n.push)(t)}});return f!==b?h.ref=t||m:h.innerRef=m,s.a.createElement(a,h)}))})),m=function(e){return e},v=s.a.forwardRef;"undefined"===typeof v&&(v=m);v((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,r=e.activeClassName,l=void 0===r?"active":r,f=e.activeStyle,b=e.className,h=e.exact,x=e.isActive,O=e.location,y=e.sensitive,w=e.strict,N=e.style,g=e.to,C=e.innerRef,k=Object(o.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return s.a.createElement(c.d.Consumer,null,(function(e){e||Object(d.a)(!1);var n=O||e.location,r=u(j(g,n),n),o=r.pathname,A=o&&o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=A?Object(c.e)(n.pathname,{path:A,exact:h,sensitive:y,strict:w}):null,_=!!(x?x(R,n):R),E="function"===typeof b?b(_):b,S="function"===typeof N?N(_):N;_&&(E=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(E,l),S=Object(i.a)({},S,f));var D=Object(i.a)({"aria-current":_&&a||null,className:E,style:S,to:r},k);return m!==v?D.ref=t||C:D.innerRef=C,s.a.createElement(p,D)}))}))},64:function(e,t,n){"use strict";var c=n(17),a=n(1),r=n.n(a),s=n(145),l=n(0);t.a=function(e){var t,n,a,i=r.a.useState(!1),o=Object(c.a)(i,2),d=o[0],j=o[1],u=r.a.createRef(),f=r.a.createRef();return console.log(d),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("a",{className:"text-blueGray-500 py-1 px-3 colreverse",ref:u,onClick:function(e){e.preventDefault(),d?j(!1):(Object(s.a)(u.current,f.current,{placement:"left-start"}),j(!0))},children:Object(l.jsxs)("svg",{width:"4",height:"16",viewBox:"0 0 4 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("mask",{id:"mask0_50_573",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"4",height:"16",children:Object(l.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z",fill:"white"})}),Object(l.jsx)("g",{mask:"url(#mask0_50_573)",children:Object(l.jsx)("rect",{x:"-10",y:"-4",width:"24",height:"24",fill:"#9EA0A5"})})]})}),d&&Object(l.jsx)("div",{className:"reltv",children:Object(l.jsxs)("div",{ref:f,className:(d?"block ":"hidden ")+"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 colreverse",children:[(null===(t=e.company_info)||void 0===t?void 0:t.deleted_at)&&Object(l.jsx)("a",{href:"#pablo",className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"Restore"}),Object(l.jsx)("a",{href:"/admin/staffs/".concat(null===e||void 0===e||null===(n=e.company_info)||void 0===n?void 0:n.id,"/CLIENT"),className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"View Staffs"}),Object(l.jsx)("a",{href:"/admin/null/staffs/add/".concat(null===e||void 0===e||null===(a=e.company_info)||void 0===a?void 0:a.id),className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"Add Staff"})]})})]})}}}]);
//# sourceMappingURL=46.64682c09.chunk.js.map