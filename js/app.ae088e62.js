(function(e){function t(t){for(var o,r,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function s(e){return u.p+"js/"+({about:"about",questionnaire:"questionnaire"}[e]||e)+"."+{about:"58fe8655",questionnaire:"7503cf5f"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={questionnaire:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",questionnaire:"questionnaire"}[e]||e)+"."+{about:"31d6cfe0",questionnaire:"92647ec0"}[e]+".css",i=u.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===o||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var o=n("2dad"),r=n.n(o);r.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),s={},u=Object(a["a"])(s,r,i,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container containerLogin shadow p-3 mb-5 bg-white rounded"},[n("h3",[e._v("Bienvenue sur l'app questionnaire")]),n("br"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.prenom,expression:"prenom"}],staticClass:"inputPrenom",attrs:{type:"text",placeholder:"Prénom"},domProps:{value:e.prenom},on:{input:function(t){t.target.composing||(e.prenom=t.target.value)}}})]),n("span",{staticClass:"w-100"}),n("div",{staticClass:"col-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.nom,expression:"nom"}],attrs:{type:"text",placeholder:"Nom"},domProps:{value:e.nom},on:{input:function(t){t.target.composing||(e.nom=t.target.value)}}})]),n("span",{staticClass:"w-100"}),n("div",{staticClass:"col-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.societe,expression:"societe"}],attrs:{type:"text",placeholder:"Société"},domProps:{value:e.societe},on:{input:function(t){t.target.composing||(e.societe=t.target.value)}}})])]),n("router-link",{attrs:{to:"/questionnaire"}},[n("button",{on:{click:function(t){return e.addDB()}}},[e._v("S'enregistrer")])])],1)])},d=[],f=(n("0d03"),n("25f0"),n("16b2")),m=new f["a"]("login"),v="http://localhost:5984/projet_questionnaire",h={data:function(){return{nom:"",prenom:"",societe:""}},name:"home",components:{},methods:{addDB:function(){var e=Date.now().toString(),t={_id:(this.prenom.substring(0,1)+this.nom+e).toLowerCase(),nom:this.nom,prenom:this.prenom,societe:this.societe};m.put(t).then((function(e,t){})),m.get(t._id).then((function(e,t){})).catch((function(e){console.log(e)})),m.replicate.to(v),localStorage.idUser=t._id}}},g=h,b=(n("21bb"),Object(a["a"])(g,p,d,!1,null,null,null)),w=b.exports;o["a"].use(l["a"]);var y=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/questionnaire",name:"questionnaire",component:function(){return n.e("questionnaire").then(n.bind(null,"2ea7"))}}],_=new l["a"]({routes:y}),C=_,j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),new o["a"]({router:C,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ae088e62.js.map