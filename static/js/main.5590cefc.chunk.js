(this["webpackJsonpspotify-ui-clone"]=this["webpackJsonpspotify-ui-clone"]||[]).push([[0],{21:function(e,a,c){},22:function(e,a,c){},42:function(e,a,c){},43:function(e,a,c){},44:function(e,a,c){},45:function(e,a,c){},46:function(e,a,c){"use strict";c.r(a);var s=c(1),n=c.n(s),t=c(16),i=c.n(t),r=(c(21),c(4)),j=(c(22),c(3)),o=c.n(j),l=c(0);var d=function(e){var a=Object(s.useState)([]),c=Object(r.a)(a,2),n=c[0],t=c[1];return Object(s.useEffect)((function(){o.a.get("http://localhost:1337/api/v1/singers").then((function(e){return t(e.data)}))}),[]),Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"section-heading",children:e.name}),Object(l.jsx)("div",{className:"artist-section-container",children:n.map((function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("div",{className:"card-img",style:{borderRadius:"50%",backgroundImage:'url("'.concat(e.imgURL,'")')}}),Object(l.jsx)("div",{className:"card-name",children:e.name})]})}))})]})};c(42);var b=function(){var e=Object(s.useState)([]),a=Object(r.a)(e,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){o.a.get("http://localhost:1337/api/v1/headerSongs").then((function(e){return n(e.data)}))})),Object(l.jsx)("div",{className:"header",children:c.map((function(e){return Object(l.jsxs)("div",{className:"header-tile",children:[Object(l.jsx)("div",{className:"tile-img",style:{backgroundImage:'url("'.concat(e.imgURL,'")')}}),Object(l.jsx)("div",{className:"tile-content",children:e.name})]})}))})};c(43);var m=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"player-container",children:[Object(l.jsxs)("div",{className:"song-container",children:[Object(l.jsx)("div",{className:"player-img"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"player-heading",children:"Malang"}),Object(l.jsx)("p",{className:"player-sub-heading",children:"Pritam"})]})]}),Object(l.jsxs)("div",{className:"player-icon-container",children:[Object(l.jsx)("i",{class:"fas fa-desktop player-icon"}),Object(l.jsx)("i",{class:"far fa-heart player-icon"}),Object(l.jsx)("i",{class:"fas fa-play player-icon"})]})]}),Object(l.jsxs)("div",{className:"bottom-nav-icon-container",children:[Object(l.jsx)("i",{class:"fas fa-home bottom-nav-icon"}),Object(l.jsx)("i",{class:"fas fa-search bottom-nav-icon"}),Object(l.jsx)("i",{class:"fas fa-book-open bottom-nav-icon"})]})]})};c(44);var h=function(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("div",{className:"nav-gradient",children:Object(l.jsxs)("div",{className:"nav-content",children:[Object(l.jsx)("h1",{className:"nav-heading",children:"Good morning"}),Object(l.jsxs)("div",{className:"icon-container",children:[Object(l.jsx)("i",{className:"fas fa-camera nav-icon"}),Object(l.jsx)("i",{className:"fas fa-cog nav-icon"})]})]})})})};c(45);var u=function(e){var a=Object(s.useState)([]),c=Object(r.a)(a,2),n=c[0],t=c[1];return Object(s.useEffect)((function(){o.a.get(e.api).then((function(e){return t(e.data)}))}),[]),Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"section-heading",children:e.name}),Object(l.jsx)("div",{className:"section-container",children:n.map((function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("div",{className:"card-img",style:{borderRadius:"5px",backgroundImage:'url("'.concat(e.imgURL,'")')}}),Object(l.jsx)("div",{className:"card-name",children:e.name}),Object(l.jsx)("div",{className:"card-sub-heading",children:e.singer})]})}))})]})};var O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(b,{}),Object(l.jsx)(u,{name:"Recently Played",api:"http://localhost:1337/api/v1/madeForYou"}),Object(l.jsx)(u,{name:"Made For You",api:"http://localhost:1337/api/v1/madeForYou"}),Object(l.jsx)(d,{name:"Artist You May Like"}),Object(l.jsx)(m,{})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5590cefc.chunk.js.map