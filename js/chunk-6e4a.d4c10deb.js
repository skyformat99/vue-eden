(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e4a"],{1383:function(t,e,a){},"19cf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-breadcrumb",{staticClass:"eden-breadcrumb",attrs:{separator:"/"}},[a("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.list,function(e,n){return e.meta.title?a("el-breadcrumb-item",{key:e.path},["noredirect"===e.redirect||n===e.length-1?a("span",{staticClass:"no-redirect"},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")]):a("router-link",{attrs:{to:e.redirect||e.path}},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")])],1):t._e()}))],1)},r=[],i=(a("7f7f"),a("cadf"),a("551c"),a("097d"),{name:"breadcrumb",data:function(){return{list:null}},created:function(){this.getBreadcrumb()},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.name});t[0]&&"dashboard"!==t[0].name&&(t=[{path:"/dashboard",meta:{title:"dashboard"}}].concat(t)),this.list=t},getTitle:function(t){return this.$te("route.".concat(t))?this.$t("route.".concat(t)):t}}}),c=i,u=(a("92bd"),a("34aa"),a("2877")),s=Object(u["a"])(c,n,r,!1,null,"7dd9b3ae",null);s.options.__file="index.vue";e["default"]=s.exports},"34aa":function(t,e,a){"use strict";var n=a("1383"),r=a.n(n);r.a},"58e8":function(t,e,a){},"92bd":function(t,e,a){"use strict";var n=a("58e8"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-6e4a.d4c10deb.js.map