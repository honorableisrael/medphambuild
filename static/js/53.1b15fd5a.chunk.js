(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[53],{152:function(e,t,n){"use strict";n.r(t);n(4);var c=n(50),a=n.n(c),r=n(51),s=n(17),i=n(1),l=n.n(i),o=n(89),d=n(21),u=n(20),j=n(54),f=n(59),b=(n(30),n(145)),h=n(0),v=function(e){var t,n=l.a.useState(!1),c=Object(s.a)(n,2),a=c[0],r=c[1],i=l.a.createRef(),o=l.a.createRef();return console.log(a),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("a",{className:"text-blueGray-500 py-1 px-3 colreverse",ref:i,onClick:function(e){e.preventDefault(),a?r(!1):(Object(b.a)(i.current,o.current,{placement:"left-start"}),r(!0))},children:Object(h.jsxs)("svg",{width:"4",height:"16",viewBox:"0 0 4 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("mask",{id:"mask0_50_573",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"4",height:"16",children:Object(h.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z",fill:"white"})}),Object(h.jsx)("g",{mask:"url(#mask0_50_573)",children:Object(h.jsx)("rect",{x:"-10",y:"-4",width:"24",height:"24",fill:"#9EA0A5"})})]})}),a&&Object(h.jsx)("div",{className:"reltv",children:Object(h.jsx)("div",{ref:o,className:(a?"block ":"hidden ")+"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 colreverse",children:Object(h.jsx)("a",{href:"/admin/manufacturer/edit/".concat(null===e||void 0===e||null===(t=e.company_info)||void 0===t?void 0:t.id),className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",children:"Edit"})})})]})};t.default=function(e){var t,n,c,l=Object(i.useState)({filterby:""}),b=Object(s.a)(l,2),m=b[0],p=(b[1],Object(d.b)()),O=Object(d.c)((function(e){return e.dashboardStats.manufacturer_list})),x=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(j.a.getAllManufacturers());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){x()}),[p]);console.log(O);m.filterby;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"contaniner-fluid",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"dashboard_main_area pb-0 row",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)("div",{className:"col-md-11 expand12",children:Object(h.jsx)("div",{className:"row jcenter pt-9",children:Object(h.jsx)("div",{className:"col-md-12 charthome",children:Object(h.jsxs)("div",{className:"col-md-12 charthome",children:[Object(h.jsxs)("div",{className:"sidebarUpdate1 text-left",children:[Object(h.jsxs)("span",{children:[(null===O||void 0===O?void 0:O.length)>0&&(null===O||void 0===O||null===(t=O[0])||void 0===t?void 0:t.clientName)," ",!(null===O||void 0===O||null===(n=O[0])||void 0===n?void 0:n.name)&&(null===O||void 0===O?void 0:O.length)>0&&(null===O||void 0===O||null===(c=O[0])||void 0===c?void 0:c.organisationName),"  Manufacturer"]}),Object(h.jsxs)("span",{children:[" ",Object(h.jsx)("input",{type:"text",className:"search_on1 searchz form-control",placeholder:"search"})]}),Object(h.jsx)("span",{children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(u.a,{to:"/admin/manufacturer/create",children:Object(h.jsx)("button",{className:"addstaff bluebtn",children:"+ Add Manufacturer"})})})})]}),Object(h.jsxs)(o.a,{className:"table",responsive:!0,striped:!0,children:[Object(h.jsx)("thead",{className:"",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:" Name"}),Object(h.jsx)("th",{scope:"col",children:"Address"}),Object(h.jsx)("th",{scope:"col",children:"Mobile"}),Object(h.jsx)("th",{scope:"col",children:" Actions "})]})}),Object(h.jsx)("tbody",{children:(null===O||void 0===O?void 0:O.length)>0&&(null===O||void 0===O?void 0:O.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{scope:"row",className:"thd",children:[Object(h.jsx)("span",{className:"slect3",children:Object(h.jsx)("input",{type:"checkbox",name:"selectstaff",id:""})})," ",Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.name})]}),Object(h.jsxs)("td",{children:[Object(h.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.address}),Object(h.jsx)("span",{className:"notif1"})]}),Object(h.jsxs)("td",{children:[Object(h.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.phoneNumber}),Object(h.jsx)("span",{className:"notif1"})]}),Object(h.jsx)("td",{children:Object(h.jsx)(v,{company_info:e})})]},t)})))})]})]})})})})]})})})})}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n(46),a=n(7),r=n(1),s=n.n(r),i=n(9),l=(n(2),n(3)),o=n(6),d=n(8);s.a.Component;s.a.Component;var u=function(e,t){return"function"===typeof e?e(t):e},j=function(e,t){return"string"===typeof e?Object(i.c)(e,null,null,t):e},f=function(e){return e},b=s.a.forwardRef;"undefined"===typeof b&&(b=f);var h=b((function(e,t){var n=e.innerRef,c=e.navigate,a=e.onClick,r=Object(o.a)(e,["innerRef","navigate","onClick"]),i=r.target,d=Object(l.a)({},r,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),c())}});return d.ref=f!==b&&t||n,s.a.createElement("a",d)}));var v=b((function(e,t){var n=e.component,a=void 0===n?h:n,r=e.replace,v=e.to,m=e.innerRef,p=Object(o.a)(e,["component","replace","to","innerRef"]);return s.a.createElement(c.d.Consumer,null,(function(e){e||Object(d.a)(!1);var n=e.history,c=j(u(v,e.location),e.location),o=c?n.createHref(c):"",h=Object(l.a)({},p,{href:o,navigate:function(){var t=u(v,e.location),c=Object(i.e)(e.location)===Object(i.e)(j(t));(r||c?n.replace:n.push)(t)}});return f!==b?h.ref=t||m:h.innerRef=m,s.a.createElement(a,h)}))})),m=function(e){return e},p=s.a.forwardRef;"undefined"===typeof p&&(p=m);p((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,r=e.activeClassName,i=void 0===r?"active":r,f=e.activeStyle,b=e.className,h=e.exact,O=e.isActive,x=e.location,y=e.sensitive,N=e.strict,w=e.style,g=e.to,C=e.innerRef,k=Object(o.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return s.a.createElement(c.d.Consumer,null,(function(e){e||Object(d.a)(!1);var n=x||e.location,r=j(u(g,n),n),o=r.pathname,R=o&&o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),_=R?Object(c.e)(n.pathname,{path:R,exact:h,sensitive:y,strict:N}):null,A=!!(O?O(_,n):_),E="function"===typeof b?b(A):b,M="function"===typeof w?w(A):w;A&&(E=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(E,i),M=Object(l.a)({},M,f));var S=Object(l.a)({"aria-current":A&&a||null,className:E,style:M,to:r},k);return m!==p?S.ref=t||C:S.innerRef=C,s.a.createElement(v,S)}))}))}}]);
//# sourceMappingURL=53.1b15fd5a.chunk.js.map