!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){"use strict";t.r(n),n.default=class{constructor(){this.viewSrc=t(3)}parseEvent(e){console.log(e)}renderView(){return this.viewSrc}}},function(e,n,t){"use strict";t.r(n),n.default=class{constructor(){this.viewSrc=t(4)}parseEvent(e){console.log(e)}renderView(){return this.viewSrc}}},function(e,n,t){var r={"./page1":0,"./page1.js":0,"./page2":1,"./page2.js":1};function a(e){return i(e).then(t)}function i(e){return Promise.resolve().then(function(){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]})}a.keys=function(){return Object.keys(r)},a.resolve=i,a.id=2,e.exports=a},function(e,n){e.exports='<div>\n  Contenuto della prima pagina  \n</div>\n<div>\n  <button id="Page1_test">Show</button>\n</div>'},function(e,n){e.exports="<div>\n  Contenuto della seconda pagina\n</div>"},function(e,n,t){"use strict";t.r(n);const r=[{id:"Page1",description:"Pagina1 di prova",filename:"page1"},{id:"Page2",description:"Pagina2 di prova",filename:"page2"}];new class{constructor(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)}onDeviceReady(){this.receivedEvent("deviceready")}receivedEvent(e){const n=new class{constructor(){this.viewManager=new class{constructor(){this.currentView=null}async renderView(e){return await this.getView(e),this.currentView.renderView()}async getView(e){const n=r.find(n=>n.id===e).filename,a=await t(2)(`./${n}`);this.currentView=new a.default}handleViewActions(){const e=document.querySelector("#Page1_test");e&&e.addEventListener("click",()=>{this.dispatchEvent("onClick","Page1_test")})}dispatchEvent(e,n,t){try{const e={event:n,id:t};this.currentView.parseEvent(e)}catch(e){console.error(e)}}}}handleMenuActions(){let e=document.querySelectorAll(".nav-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",e=>{e.preventDefault(),this.handleMenuAction(e.target.id)})}handleMenuAction(e){this.viewManager.renderView(e).then(e=>{document.getElementById("view_container").innerHTML=e,this.viewManager.handleViewActions(),$(".navbar-collapse").collapse("hide")})}renderMenu(){let e='\n      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">\n        <a class="navbar-brand" href="#">DEMO</a>\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n        <div class="collapse navbar-collapse" id="navbarsDefault">\n          <ul class="navbar-nav mr-auto">';return r.forEach(n=>{e+=`\n        <li class="nav-item active">\n          <a id=${n.id} class="nav-link" href="#">${n.description}<span class="sr-only">(current)</span></a>\n        </li>`}),e+="\n      </ul>\n          </div>\n        </nav>"}};document.getElementById("menu_container").innerHTML=n.renderMenu(),n.handleMenuActions()}}}]);
//# sourceMappingURL=bundle.js.map