(function(e){function t(t){for(var n,o,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4b8861ce"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"308816aa"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},2395:function(e,t,r){},6360:function(e,t,r){"use strict";var n=r("ba10"),o=r.n(n);o.a},"697a":function(e,t,r){"use strict";var n=r("d91a"),o=r.n(n);o.a},"7c55":function(e,t,r){"use strict";var n=r("2395"),o=r.n(n);o.a},ba10:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("link",{attrs:{rel:"stylesheet",href:"@/assets/projects/projects.css",type:"text/css"}}),r("Header"),r("div",{staticClass:"main"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1),r("Footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/"}},[e._v("About me")]),r("router-link",{attrs:{to:"/other-projects"}},[e._v("Commercial Titles")]),r("router-link",{attrs:{to:"/game-projects"}},[e._v("Game Projects")]),r("router-link",{attrs:{to:"/resume"}},[e._v("My Experience")]),r("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1)])},u=[],c=n["a"].extend({name:"Header"}),s=c,l=(r("6360"),r("2877")),p=Object(l["a"])(s,i,u,!1,null,"0e4e96d2",null),d=p.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[r("div",{staticClass:"left"},[e._v(" Portfolio by Yunxiang Li")]),r("div",{staticClass:"right"},[r("router-link",{attrs:{to:"/contact"}},[e._v("Reach out to me")])],1)])},m=[],h=n["a"].extend({name:"Footer"}),g=h,_=(r("697a"),Object(l["a"])(g,f,m,!1,null,"109a1c6e",null)),v=_.exports,b=function(){function e(){}return e.preloadImages=function(t){t.forEach((function(t){e.preloadImage(t)}))},e.preloadImage=function(e){var t=new Image;t.src=e},e}(),j=b,S=n["a"].extend({name:"App",components:{Header:d,Footer:v}});j.preloadImages(["img/projects/SDL2_Shooter/SDL2_Shooter_GIF.gif","img/projects/SDL2_Shooter/SDL2_Shooter_Thumbnail.jpg","img/projects/SDL2_Shooter/SDL2_Shooter_Screenshot_One.jpg","img/projects/SDL2_Shooter/SDL2_Shooter_Screenshot_Two.jpg","img/projects/SDL2_Shooter/SDL2_Shooter_Screenshot_Three.jpg","img/projects/SFML_CityBuilder/SFML_CityBuilder_thumbnail.jpg","img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_one.jpg","img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_two.jpg","img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_three.jpg","img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_four.jpg","img/projects/ongoing-projects.gif","img/projects/work-in-progress.png","img/projects/NBA2K/NBA2K25.png","img/projects/NBA2K/NBA2K24.png"]);var y=S,C=(r("7c55"),Object(l["a"])(y,o,a,!1,null,null,null)),L=C.exports,w=r("8c4f");n["a"].use(w["a"]);var B=[{path:"/",name:"Root",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/resume",name:"Resume",component:function(){return r.e("about").then(r.bind(null,"1ba2"))}},{path:"/game-projects",name:"Game Projects",component:function(){return r.e("about").then(r.bind(null,"4d97"))}},{path:"/other-projects",name:"Other Projects",component:function(){return r.e("about").then(r.bind(null,"7c58"))}},{path:"/contact",name:"Contact",component:function(){return r.e("about").then(r.bind(null,"b8fa"))}},{path:"/404",name:"NotFound",component:function(){return r.e("about").then(r.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],O=new w["a"]({routes:B}),k=O;n["a"].config.productionTip=!1,new n["a"]({router:k,render:function(e){return e(L)}}).$mount("#app")},d91a:function(e,t,r){}});
//# sourceMappingURL=app.e0b0f897.js.map