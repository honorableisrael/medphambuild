(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{54:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n(4),r=n(50),c=n.n(r),o=n(51),u=n(5),s=n(58),i=n(8),d=n(57),p={getDashboardStats:function(){var t,e=null===(t=Object(i.c)("admin_data"))||void 0===t?void 0:t.organisationId;return console.log(e),function(){var t=Object(o.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/organisations/".concat(e,"/clients"));case 2:a=t.sent,r=a.data.data,n({type:u.a.DASHBOARD_STATS_SUCCESS,payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAllRoles:function(){return function(){var t=Object(o.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/roles");case 2:n=t.sent,a=n.data.data,console.log(a),e({type:u.a.DASHBOARD_ROLES_SUCCESS,payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAllStaffs:function(t,e){return function(){var n=Object(o.a)(c.a.mark((function n(a){var r,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.get("/users/".concat(t,"/company?type=").concat(e));case 2:r=n.sent,o=r.data.data,console.log(o),a({type:u.a.DASHBOARD_USERS_SUCCESS,payload:o});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},registerOrganisation:function(t){try{return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/organisations/register",t);case 2:r=e.sent,console.log(r),Object(d.a)(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(d.a)("failed to process")}},getAllOrganisation:function(){var t,e=null===(t=Object(i.c)("admin_data"))||void 0===t?void 0:t.organisationId;return function(){var t=Object(o.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/organisations/".concat(e,"/suborganisations"));case 2:a=t.sent,r=a.data.data,console.log(r),n({type:u.a.DASHBOARD_ORGANISATIONS_SUCCESS,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},registerClient:function(t){try{return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/clients/register",t);case 2:r=e.sent,console.log(r),Object(d.a)(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(d.a)("failed to process")}},registerStaff:function(t){try{return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/users/register",t);case 2:r=e.sent,console.log(r),Object(d.a)(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(d.a)("failed to process")}},getAllDrugs:function(){return function(){var t=Object(o.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/drugs");case 2:n=t.sent,a=n.data.data,console.log(a),e({type:u.a.DASHBOARD_GET_DRUGS_SUCCESS,payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAllDispatchedDrugs:function(){return function(){var t=Object(o.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/dispatcheddrugs?pageNo=".concat(1,"&sizePerPage=",20));case 2:n=t.sent,a=n.data.data,console.log(a),e({type:u.a.DASHBOARD_GET_DISPATCHED_DRUGS_SUCCESS,payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAllDrugsCategories:function(){var t,e;if(null===(t=Object(i.c)("admin_data"))||void 0===t?void 0:t.clientId){var n,a=null===(n=Object(i.c)("admin_data"))||void 0===n?void 0:n.clientId;return console.log(a),function(){var t=Object(o.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/drugscategories/".concat(a,"/paged?pageNo=",1,"&sizePerPage=",100));case 2:r=t.sent,console.log(r),e({type:u.a.DASHBOARD_GET_DRUGS_CATEGORY,payload:null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}if(!(null===(e=Object(i.c)("admin_data"))||void 0===e?void 0:e.clientId))return function(){var t=Object(o.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/drugscategories");case 2:n=t.sent,a=n.data.data,console.log(a),e({type:u.a.DASHBOARD_GET_DRUGS_CATEGORY,payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createDrug:function(t){if(console.log(Object(i.c)("admin_data").clientId),Object(i.c)("admin_data").clientId)var e=Object(a.a)(Object(a.a)({},t),{},{clientId:Object(i.c)("admin_data").clientId});try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.post("/drugs",Object(i.c)("admin_data").clientId?e:t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully created");case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to process")}},getOneDrug:function(t){return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/drugs/".concat(t));case 2:a=e.sent,r=a.data.data,console.log(r),n({type:u.a.DASHBOARD_GET_ONE_DRUG,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getOneUser:function(t){return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/users/".concat(t));case 2:a=e.sent,r=a.data.data,console.log(r),n({type:u.a.DASHBOARD_GET_ONE_USER,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},editStaff:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/users/".concat(e),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully updated");case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to process")}},getAllManufacturers:function(){var t;if(null===(t=Object(i.c)("admin_data"))||void 0===t?void 0:t.clientId){var e,n=null===(e=Object(i.c)("admin_data"))||void 0===e?void 0:e.clientId;return console.log(n),function(){var t=Object(o.a)(c.a.mark((function t(e){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/manufacturers/".concat(n,"/paged?pageNo=",1,"&sizePerPage=",100));case 2:r=t.sent,console.log(r),e({type:u.a.DASHBOARD_GET_MANUFACTURERS,payload:null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}if(!Object(i.c)("admin_data").clientId)return function(){var t=Object(o.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/manufacturers");case 2:n=t.sent,a=n.data.data,console.log(a),e({type:u.a.DASHBOARD_GET_MANUFACTURERS,payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getOneManufacturer:function(t){return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/manufacturers/".concat(t));case 2:a=e.sent,r=a.data.data,n({type:u.a.DASHBOARD_GET_ONE_MANUFACTURER,payload:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},registerManufacturer:function(t){try{if(Object(i.c)("admin_data").clientId)var e=Object(a.a)(Object(a.a)({},t),{},{clientId:Object(i.c)("admin_data").clientId});return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.post("/manufacturers",Object(i.c)("admin_data").clientId?e:t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully created"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to process")}},updateManufacturer:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/manufacturers/".concat(e),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully updated"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to update")}},updateSuppliers:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/suppliers/".concat(e),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully updated"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to update")}},getAllSuppliers:function(){var t;if(console.log(Object(i.c)("admin_data").clientId,"client id"),null===(t=Object(i.c)("admin_data"))||void 0===t?void 0:t.clientId){var e,n=null===(e=Object(i.c)("admin_data"))||void 0===e?void 0:e.clientId;return console.log(n),function(){var t=Object(o.a)(c.a.mark((function t(e){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/suppliers/".concat(n,"/paged?pageNo=",1,"&sizePerPage=",100));case 2:r=t.sent,console.log(r),e({type:u.a.DASHBOARD_GET_SUPLIERS,payload:null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}if(!Object(i.c)("admin_data").clientId)return function(){var t=Object(o.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/suppliers");case 2:n=t.sent,a=n.data.data,console.log(a),e({type:u.a.DASHBOARD_GET_SUPLIERS,payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},registerSupplier:function(t){try{if(Object(i.c)("admin_data").clientId)var e=Object(a.a)(Object(a.a)({},t),{},{clientId:Object(i.c)("admin_data").clientId});return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.post("/suppliers",Object(i.c)("admin_data").clientId?e:t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully created"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to process")}},getOneSupplier:function(t){return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/suppliers/".concat(t));case 2:a=e.sent,r=a.data.data,n({type:u.a.DASHBOARD_GET_ONE_SUPPLIER,payload:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateDrug:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/drugs/".concat(e),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully updated"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to process")}},getAllInventory:function(){var t,e;if(null===(t=Object(i.c)("admin_data"))||void 0===t?void 0:t.clientId){var n,a=null===(n=Object(i.c)("admin_data"))||void 0===n?void 0:n.clientId;return console.log(a),function(){var t=Object(o.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/inventories/".concat(a,"/paged?pageNo=",1,"&sizePerPage=",100));case 2:r=t.sent,console.log(r),e({type:u.a.DASHBOARD_GET_INVENTORY,payload:null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}if(!(null===(e=Object(i.c)("admin_data"))||void 0===e?void 0:e.clientId))return function(){var t=Object(o.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/inventories");case 2:n=t.sent,a=n.data.data,console.log(a),e({type:u.a.DASHBOARD_GET_INVENTORY,payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createInventory:function(t){try{if(Object(i.c)("admin_data").clientId)var e=Object(a.a)(Object(a.a)({},t),{},{clientId:Object(i.c)("admin_data").clientId});return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.post("/inventories",Object(i.c)("admin_data").clientId?e:t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully created"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to process")}},updateInventory:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/inventories/".concat(e),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully updated"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to update")}},getOneInventory:function(t){return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/inventories/".concat(t));case 2:a=e.sent,r=a.data.data,console.log(r),n({type:u.a.DASHBOARD_GET_ONE_INVENTORY,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},approveInventory:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/inventories/".concat(e,"/approval"),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully approved inventory"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to update")}},rejectInventory:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/inventories/".concat(e,"/approval"),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully rejected inventory"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to update")}},getAllClients:function(t){return function(){var e=Object(o.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/clients/".concat(t));case 2:a=e.sent,r=a.data.data,console.log(r),n({type:u.a.DASHBOARD_GET_ClIENT_SUCCESS,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},dispatchDrug:function(t){try{return function(){var e=Object(o.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/dispatcheddrugs",t);case 2:a=e.sent,console.log(a),Object(d.a)("Success"),Object(i.e)();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){Object(d.a)("failed to process")}},registerDrugCategory:function(t){try{if(Object(i.c)("admin_data").clientId)var e=Object(a.a)(Object(a.a)({},t),{},{clientId:Object(i.c)("admin_data").clientId});return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.post("/drugscategories",Object(i.c)("admin_data").clientId?e:t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully created"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to process")}},returnDispatchedDrugs:function(t,e){try{return function(){var n=Object(o.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.put("/dispatcheddrugs/".concat(e,"/returned"),t);case 2:r=n.sent,console.log(r),Object(d.a)("Successfully returned drugs"),Object(i.e)();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}catch(n){Object(d.a)("failed to update")}}}},57:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));n(1);var a=n(12),r="https://medipharm-test.herokuapp.com/api",c=function(t){Object(a.b)(t)}},58:function(t,e,n){"use strict";var a=n(62),r=n.n(a),c=n(8),o=n(57),u=r.a.create();u.interceptors.request.use((function(t){return t.baseURL=o.b,console.log(t),"undefined"!==Object(c.d)()&&"/login"!==t.url&&"/changepassword"!==t.url&&(t.headers.Authorization=Object(c.d)()?"Bearer ".concat(Object(c.d)()):""),t.headers["Content-Type"]="application/json",t.headers.Accept="application/json",t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return console.log(t),t}),(function(t){var e,n,a,r;return console.error("error_status",null===t||void 0===t?void 0:t.response),Object(o.a)(null===t||void 0===t||null===(e=t.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message),401!==(null===t||void 0===t||null===(a=t.response)||void 0===a?void 0:a.status)&&404!==(null===t||void 0===t||null===(r=t.response)||void 0===r?void 0:r.status)||Object(o.a)("Failed to process please try again later"),Promise.reject(t)})),e.a=u}}]);
//# sourceMappingURL=1.a8175da6.chunk.js.map