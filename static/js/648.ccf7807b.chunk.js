"use strict";(self.webpackChunkcbj_group=self.webpackChunkcbj_group||[]).push([[648],{8697:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7022),c=r(9743),s=r(2677),o=r.p+"static/media/table.c96637810cb2ae358aca.jpg",i=r(184),l=function(e){e.title;return(0,i.jsxs)("div",{className:"image-container",children:[(0,i.jsx)("img",{src:o,alt:"Product-bg"}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsx)(n.Z,{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(s.Z,{children:(0,i.jsx)("h2",{children:"Welcome to CBJ Accessories"})})})})})]})}},9135:function(e,t,r){var n=r(9743),c=r(2791),s=r(5434),o=r(184),i=function(e){var t=e.productItems;return(0,c.useEffect)((function(){}),[t]),0===t.length?(0,o.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,o.jsx)(n.Z,{className:"justify-content-center",children:t.map((function(e){return(0,o.jsx)(s.Z,{title:null,productItem:e},e.id)}))})};t.Z=(0,c.memo)(i)},167:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(9439),c=r(7022),s=r(9743),o=r(2677),i=r(1413),l=r(3351),a=r(5384),u=r(184),d=[{value:"Accessories Electronics",label:"Accessories Electronics"},{value:"ATK",label:"ATK"},{value:"Mobile Accessories",label:"Mobile Accessories"},{value:"Webcam Cover",label:"Webcam Cover"},{value:"New Products",label:"New Products"}],h={control:function(e){return(0,i.Z)((0,i.Z)({},e),{},{backgroundColor:"#0f3460",color:"white",borderRadius:"5px",border:"none",boxShadow:"none",width:"200px",height:"40px"})},option:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{backgroundColor:t.isSelected?"#0f3460":"white",color:t.isSelected?"white":"#0f3460","&:hover":{backgroundColor:"#0f3460",color:"white"}})},singleValue:function(e){return(0,i.Z)((0,i.Z)({},e),{},{color:"white"})}},f=function(e){var t=e.setFilterList;return(0,u.jsx)(l.ZP,{options:d,defaultValue:{value:"",label:"Filter By Category"},styles:h,onChange:function(e){t(a.RB.filter((function(t){return t.category===e.value})))}})},j=r(2791),x=function(e){var t=e.setFilterList,r=(0,j.useState)(null),c=(0,n.Z)(r,2),s=c[0],o=c[1];return(0,u.jsxs)("div",{className:"search-container",children:[(0,u.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){o(e.target.value),t(a.RB.filter((function(e){var t;return null===(t=e.productName)||void 0===t?void 0:t.toLowerCase().includes(null===s||void 0===s?void 0:s.toLowerCase())})))}}),(0,u.jsx)("ion-icon",{name:"search-outline",className:"search-icon"})]})},v=r(9135),m=r(8697),b=r(76),Z=function(){var e=(0,j.useState)(a.RB.filter((function(e){return"Accessories Electronics"===e.category}))),t=(0,n.Z)(e,2),r=t[0],i=t[1];return(0,b.Z)(),(0,u.jsxs)(j.Fragment,{children:[(0,u.jsx)(m.Z,{title:"product"}),(0,u.jsxs)("section",{className:"filter-bar",children:[(0,u.jsx)(c.Z,{className:"filter-bar-contianer",children:(0,u.jsxs)(s.Z,{className:"justify-content-center",children:[(0,u.jsx)(o.Z,{md:4,children:(0,u.jsx)(f,{setFilterList:i})}),(0,u.jsx)(o.Z,{md:8,children:(0,u.jsx)(x,{setFilterList:i})})]})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(v.Z,{productItems:r})})]})]})}}}]);
//# sourceMappingURL=648.ccf7807b.chunk.js.map