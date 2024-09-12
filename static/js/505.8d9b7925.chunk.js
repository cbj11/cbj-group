"use strict";(self.webpackChunkcbj_group=self.webpackChunkcbj_group||[]).push([[505],{8697:function(e,s,n){n.d(s,{Z:function(){return l}});var c=n(7022),t=n(9743),i=n(2677),r=n.p+"static/media/table.c96637810cb2ae358aca.jpg",a=n(184),l=function(e){e.title;return(0,a.jsxs)("div",{className:"image-container",children:[(0,a.jsx)("img",{src:r,alt:"Product-bg"}),(0,a.jsx)("div",{className:"overlay",children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(t.Z,{children:(0,a.jsx)(i.Z,{children:(0,a.jsx)("h2",{children:"Welcome to CBJ Accessories"})})})})})]})}},9135:function(e,s,n){var c=n(9743),t=n(2791),i=n(5434),r=n(184),a=function(e){var s=e.productItems;return(0,t.useEffect)((function(){}),[s]),0===s.length?(0,r.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,r.jsx)(c.Z,{className:"justify-content-center",children:s.map((function(e){return(0,r.jsx)(i.Z,{title:null,productItem:e},e.id)}))})};s.Z=(0,t.memo)(a)},1030:function(e,s,n){n.r(s),n.d(s,{default:function(){return g}});var c=n(9439),t=n(2791),i=n(8697),r=n(7022),a=n(9135),l=n(7111),d=n(7689),o=n(9743),u=n(2677),j=n(9434),h=n(9085),x=n(9597),v=n(184),f=function(e){var s=e.selectedProduct,n=(0,j.I0)(),i=(0,t.useState)(1),a=(0,c.Z)(i,2),l=a[0],d=a[1];return(0,v.jsx)("section",{className:"product-page",children:(0,v.jsx)(r.Z,{children:(0,v.jsxs)(o.Z,{className:"justify-content-center",children:[(0,v.jsx)(u.Z,{md:6,children:(0,v.jsx)("img",{loading:"lazy",src:null===s||void 0===s?void 0:s.imgUrl,alt:""})}),(0,v.jsxs)(u.Z,{md:6,children:[(0,v.jsx)("h2",{children:null===s||void 0===s?void 0:s.productName}),(0,v.jsxs)("div",{className:"rate",children:[(0,v.jsxs)("div",{className:"stars",children:[(0,v.jsx)("i",{className:"fa fa-star"}),(0,v.jsx)("i",{className:"fa fa-star"}),(0,v.jsx)("i",{className:"fa fa-star"}),(0,v.jsx)("i",{className:"fa fa-star"}),(0,v.jsx)("i",{className:"fa fa-star"})]}),(0,v.jsxs)("span",{children:[null===s||void 0===s?void 0:s.avgRating," ratings"]})]}),(0,v.jsxs)("div",{className:"info",children:[(0,v.jsxs)("span",{className:"price",children:["Rp.",null===s||void 0===s?void 0:s.price]}),(0,v.jsxs)("span",{children:["category:",null===s||void 0===s?void 0:s.category]})]}),(0,v.jsx)("p",{children:null===s||void 0===s?void 0:s.shortDesc}),(0,v.jsx)("input",{className:"qty-input",type:"number",placeholder:"Qty",value:l,onChange:function(e){d(e.target.value)}}),(0,v.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(e,s){n((0,x.Xq)({product:e,num:s})),h.Am.success("Product has been added to cart!")}(s,l)},children:"Add To Cart"})]})]})})})},m=function(e){var s=e.selectedProduct,n=(0,t.useState)("desc"),i=(0,c.Z)(n,2),a=i[0],l=i[1];return(0,v.jsx)("section",{className:"product-reviews",children:(0,v.jsxs)(r.Z,{children:[(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{style:{color:"desc"===a?"black":"#9c9b9b"},onClick:function(){return l("desc")},children:"Description"}),(0,v.jsxs)("li",{style:{color:"rev"===a?"black":"#9c9b9b"},onClick:function(){return l("rev")},children:["Reviews (",null===s||void 0===s?void 0:s.reviews.length,")"]})]}),"desc"===a?(0,v.jsx)("p",{children:null===s||void 0===s?void 0:s.description}):(0,v.jsx)("div",{className:"rates",children:null===s||void 0===s?void 0:s.reviews.map((function(e){return(0,v.jsxs)("div",{className:"rate-comment",children:[(0,v.jsx)("span",{children:"Jhon Doe"}),(0,v.jsxs)("span",{children:[e.rating," (rating)"]}),(0,v.jsx)("p",{children:e.text})]},e.rating)}))})]})})},p=n(76),g=function(){var e=(0,d.UO)().id,s=(0,t.useState)(l.RB.filter((function(s){return parseInt(s.id)===parseInt(e)}))[0]),n=(0,c.Z)(s,2),o=n[0],u=n[1],j=(0,t.useState)([]),h=(0,c.Z)(j,2),x=h[0],g=h[1];return(0,t.useEffect)((function(){window.scrollTo(0,0),u(l.RB.filter((function(s){return parseInt(s.id)===parseInt(e)}))[0]),g(l.RB.filter((function(e){return e.category===(null===o||void 0===o?void 0:o.category)&&e.id!==(null===o||void 0===o?void 0:o.id)})))}),[o,e]),(0,p.Z)(),(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)(i.Z,{title:null===o||void 0===o?void 0:o.productName}),(0,v.jsx)(f,{selectedProduct:o}),(0,v.jsx)(m,{selectedProduct:o}),(0,v.jsxs)("section",{className:"related-products",children:[(0,v.jsx)(r.Z,{children:(0,v.jsx)("h3",{children:"You might also like"})}),(0,v.jsx)(a.Z,{productItems:x})]})]})}}}]);
//# sourceMappingURL=505.8d9b7925.chunk.js.map