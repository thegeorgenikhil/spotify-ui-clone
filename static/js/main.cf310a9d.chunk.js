(this["webpackJsonpspotify-ui-clone"]=this["webpackJsonpspotify-ui-clone"]||[]).push([[0],{21:function(e,a,c){},22:function(e,a,c){},42:function(e,a,c){},43:function(e,a,c){},44:function(e,a,c){},45:function(e,a,c){},46:function(e,a,c){"use strict";c.r(a);var s=c(1),t=c.n(s),n=c(16),i=c.n(n),r=c(3),o=(c(21),c(22),c(4)),d=c.n(o),j=c(0);var l=function(e){var a=Object(s.useState)([]),c=Object(r.a)(a,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){d.a.get("https://spotify-ui-clone-backend.herokuapp.com/api/v1/singers").then((function(e){return n(e.data)}))}),[]),Object(j.jsxs)("div",{className:"section",children:[Object(j.jsx)("h1",{className:"section-heading",children:e.name}),Object(j.jsx)("div",{className:"artist-section-container",children:t.map((function(e){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("div",{className:"card-img",style:{borderRadius:"50%",backgroundImage:'url("'.concat(e.imgURL,'")')}}),Object(j.jsx)("div",{className:"card-name",children:e.name})]},e.id)}))})]})};c(42);var b=function(e){var a=Object(s.useState)([]),c=Object(r.a)(a,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){d.a.get("https://spotify-ui-clone-backend.herokuapp.com/api/v1/headerSongs").then((function(e){return n(e.data)}))}),[]),Object(j.jsx)("div",{className:"header",children:t.map((function(a){return Object(j.jsxs)("div",{onClick:e.stateUpdate,id:JSON.stringify(a),className:"header-tile",children:[Object(j.jsx)("div",{className:"tile-img",id:JSON.stringify(a),style:{backgroundImage:'url("'.concat(a.imgURL,'")')}}),Object(j.jsx)("div",{className:"tile-content",id:JSON.stringify(a),children:a.name})]},a.id)}))})};c(43);var m=function(e){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("div",{className:"line"}),Object(j.jsxs)("div",{className:"player-container",children:[Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("div",{className:"player-img",style:{backgroundImage:'url("'.concat(e.currSong.imgURL,'")')}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"player-heading",children:e.currSong.name}),Object(j.jsx)("p",{className:"player-sub-heading",children:e.currSong.singer})]})]}),Object(j.jsxs)("div",{className:"player-icon-container",children:[Object(j.jsx)("i",{className:"fas fa-desktop player-icon"}),Object(j.jsx)("i",{className:"far fa-heart player-icon"}),Object(j.jsx)("i",{className:"fas fa-play player-icon"})]})]}),Object(j.jsxs)("div",{className:"bottom-nav-icon-container",children:[Object(j.jsx)("i",{className:"fas fa-home bottom-nav-icon"}),Object(j.jsx)("i",{className:"fas fa-search bottom-nav-icon"}),Object(j.jsx)("i",{className:"fas fa-book-open bottom-nav-icon"})]})]})};c(44);var u=function(){return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("div",{className:"nav-gradient",children:Object(j.jsxs)("div",{className:"nav-content",children:[Object(j.jsx)("h1",{className:"nav-heading",children:"Good morning"}),Object(j.jsxs)("div",{className:"icon-container",children:[Object(j.jsx)("i",{className:"fas fa-camera nav-icon"}),Object(j.jsx)("i",{className:"fas fa-cog nav-icon"})]})]})})})};c(45);var O=function(e){var a=Object(s.useState)([]),c=Object(r.a)(a,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){d.a.get(e.api).then((function(e){return n(e.data)}))}),[]),Object(j.jsxs)("div",{className:"section",children:[Object(j.jsx)("h1",{className:"section-heading",children:e.name}),Object(j.jsx)("div",{className:"section-container",children:t.map((function(a){return Object(j.jsxs)("div",{className:"card-container",onClick:e.stateUpdate,id:JSON.stringify(a),children:[Object(j.jsx)("div",{className:"card-img",id:JSON.stringify(a),style:{borderRadius:"5px",backgroundImage:'url("'.concat(a.imgURL,'")')}}),Object(j.jsx)("div",{className:"card-name",id:JSON.stringify(a),children:a.name}),Object(j.jsx)("div",{className:"card-sub-heading",children:a.singer})]},a.id)}))})]})};var h=function(){var e=Object(s.useState)({id:2,name:"telepatia",imgURL:"https://i.scdn.co/image/ab67616d0000b273044a5466dac00f7b3c570b99",singer:"Kali Uchis"}),a=Object(r.a)(e,2),c=a[0],t=a[1];function n(e){var a=e.target.id;t(JSON.parse(a))}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsx)(b,{stateUpdate:n}),Object(j.jsx)(O,{stateUpdate:n,name:"Recently Played",api:"https://spotify-ui-clone-backend.herokuapp.com/api/v1/recentlyPlayed"}),Object(j.jsx)(O,{stateUpdate:n,name:"Made For You",api:"https://spotify-ui-clone-backend.herokuapp.com/api/v1/madeForYou"}),Object(j.jsx)(l,{name:"Artist You May Like"}),Object(j.jsx)(m,{currSong:c})]})};i.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cf310a9d.chunk.js.map