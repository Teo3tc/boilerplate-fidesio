/*! For license information please see main.js.LICENSE.txt */
(()=>{var e,t,r,n={"./src/index.js":(e,t,r)=>{"use strict";function n(e,t,r,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var s=e.apply(t,r);function i(e){n(s,o,a,i,c,"next",e)}function c(e){n(s,o,a,i,c,"throw",e)}i(void 0)}))}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),r.d(t,{default:()=>s});var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createContent(),this.createPages(),this.createNavigation(),this.addLinkListeners(),this.addEventListeners()}var t,n,s,i,c;return t=e,n=[{key:"createNavigation",value:(c=o(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e("vendors-node_modules_lodash_each_js"),r.e("src_components_Navigation_js")]).then(r.bind(r,"./src/components/Navigation.js"));case 2:t=e.sent,n=t.default,this.navigation=new n({template:this.template});case 5:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"createContent",value:function(){this.template=this.content.getAttribute("data-template")}},{key:"createPages",value:(i=o(regeneratorRuntime.mark((function e(){var t,n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e("vendors-node_modules_lodash_each_js"),r.e("src_pages_home_index_js")]).then(r.bind(r,"./src/pages/home/index.js"));case 2:return t=e.sent,n=t.default,e.next=6,Promise.all([r.e("vendors-node_modules_lodash_each_js"),r.e("src_pages_about_index_js")]).then(r.bind(r,"./src/pages/about/index.js"));case 6:o=e.sent,a=o.default,this.pages={home:new n,about:new a},this.page=this.pages[this.template],this.page.create();case 11:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}],n&&a(t.prototype,n),s&&a(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}()},"./styles/index.scss":(e,t,r)=>{"use strict";r.r(t)},"./node_modules/webpack/hot sync ^\\.\\/log$":(e,t,r)=>{var n={"./log":"./node_modules/webpack/hot/log.js"};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="./node_modules/webpack/hot sync ^\\.\\/log$"}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,e=[],a.O=(t,r,n,o)=>{if(!r){var s=1/0;for(d=0;d<e.length;d++){for(var[r,n,o]=e[d],i=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".js",a.miniCssF=e=>e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="node-starter:",a.l=(e,n,o,s)=>{if(t[e])t[e].push(n);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+o){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",r+o),i.src=e),t[e]=[n];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(h);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={main:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var s=a.p+a.u(t),i=new Error;a.l(s,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[s,i,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var d=c(a)}for(t&&t(r);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;return a.O(d)},r=self.webpackChunknode_starter=self.webpackChunknode_starter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.O(void 0,["vendors-node_modules_webpack-dev-server_client_index_js_http_localhost_8080-node_modules_webp-ef8580"],(()=>a("./src/index.js"))),a.O(void 0,["vendors-node_modules_webpack-dev-server_client_index_js_http_localhost_8080-node_modules_webp-ef8580"],(()=>a("./styles/index.scss")));var s=a.O(void 0,["vendors-node_modules_webpack-dev-server_client_index_js_http_localhost_8080-node_modules_webp-ef8580"],(()=>a("./node_modules/webpack-dev-server/client/index.js?http://localhost:8080")));s=a.O(s)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNEaUMsRUFBbUJ6RCxLQUFPbUQsRUFBcUIzQixLQUFLLEtBQU1pQyxFQUFtQnpELEtBQUt3QixLQUFLaUMsUUNsRnZGdEgsRUFBb0JrQixPQUFFTCxFQUFXLENBQUMseUdBQXlHLElBQU9iLEVBQW9CLG9CQUN0S0EsRUFBb0JrQixPQUFFTCxFQUFXLENBQUMseUdBQXlHLElBQU9iLEVBQW9CLHlCQUN0SyxJQUFJd0gsRUFBc0J4SCxFQUFvQmtCLE9BQUVMLEVBQVcsQ0FBQyx5R0FBeUcsSUFBT2IsRUFBb0IsNkVBQ2hNd0gsRUFBc0J4SCxFQUFvQmtCLEVBQUVzRyIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL25vZGUtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vbm9kZS1zdGFydGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtc3RhcnRlci8vaG9tZS9wcm9qZWN0cy9ub2RlLXR4NXp2OC9ub2RlX21vZHVsZXMvd2VicGFjay9ob3R8c3luY3xub25yZWN1cnNpdmV8L15cXC5cXC9sb2ckLyIsIndlYnBhY2s6Ly9ub2RlLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm9kZS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vZGUtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm9kZS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbm9kZS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9ub2RlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9ub2RlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ub2RlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub2RlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub2RlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9ub2RlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbm9kZS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL25vZGUtc3RhcnRlci93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwibm9kZS1zdGFydGVyOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpO1xuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuICBhc3luYyBjcmVhdGVOYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogTmF2aWdhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KCcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbicpO1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVBhZ2VzKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogSG9tZSB9ID0gYXdhaXQgaW1wb3J0KCcuL3BhZ2VzL2hvbWUnKTtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IEFib3V0IH0gPSBhd2FpdCBpbXBvcnQoJy4vcGFnZXMvYWJvdXQnKTtcblxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qb25DaGFuZ2UoKSB7XG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuICAgICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpO1xuICAgICAgICAgIH07XG4gICAgICB9KTtcblxuICB9Ki9cbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jc3NcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbm9kZV9zdGFydGVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua25vZGVfc3RhcnRlclwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3dlYnBhY2stZGV2LXNlcnZlcl9jbGllbnRfaW5kZXhfanNfaHR0cF9sb2NhbGhvc3RfODA4MC1ub2RlX21vZHVsZXNfd2VicC1lZjg1ODBcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfd2VicGFjay1kZXYtc2VydmVyX2NsaWVudF9pbmRleF9qc19odHRwX2xvY2FsaG9zdF84MDgwLW5vZGVfbW9kdWxlc193ZWJwLWVmODU4MFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3N0eWxlcy9pbmRleC5zY3NzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfd2VicGFjay1kZXYtc2VydmVyX2NsaWVudF9pbmRleF9qc19odHRwX2xvY2FsaG9zdF84MDgwLW5vZGVfbW9kdWxlc193ZWJwLWVmODU4MFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L2luZGV4LmpzP2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sIm5hbWVzIjpbImRlZmVycmVkIiwiaW5Qcm9ncmVzcyIsImRhdGFXZWJwYWNrUHJlZml4IiwiQXBwIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImNyZWF0ZU5hdmlnYXRpb24iLCJhZGRMaW5rTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJOYXZpZ2F0aW9uIiwibmF2aWdhdGlvbiIsInRlbXBsYXRlIiwiY29udGVudCIsImdldEF0dHJpYnV0ZSIsIkhvbWUiLCJBYm91dCIsInBhZ2VzIiwiaG9tZSIsImFib3V0IiwicGFnZSIsImNyZWF0ZSIsIm1hcCIsIndlYnBhY2tDb250ZXh0IiwicmVxIiwiaWQiLCJ3ZWJwYWNrQ29udGV4dFJlc29sdmUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibyIsImUiLCJFcnJvciIsImNvZGUiLCJrZXlzIiwiT2JqZWN0IiwicmVzb2x2ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImxvYWRlZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIiwibSIsIk8iLCJyZXN1bHQiLCJjaHVua0lkcyIsImZuIiwicHJpb3JpdHkiLCJub3RGdWxmaWxsZWQiLCJJbmZpbml0eSIsImkiLCJsZW5ndGgiLCJmdWxmaWxsZWQiLCJqIiwiZXZlcnkiLCJrZXkiLCJzcGxpY2UiLCJyIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJmIiwiY2h1bmtJZCIsIlByb21pc2UiLCJhbGwiLCJyZWR1Y2UiLCJwcm9taXNlcyIsInUiLCJtaW5pQ3NzRiIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJsIiwidXJsIiwiZG9uZSIsInB1c2giLCJzY3JpcHQiLCJuZWVkQXR0YWNoIiwic2NyaXB0cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzIiwiY3JlYXRlRWxlbWVudCIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJzcmMiLCJvblNjcmlwdENvbXBsZXRlIiwicHJldiIsImV2ZW50Iiwib25lcnJvciIsIm9ubG9hZCIsImNsZWFyVGltZW91dCIsImRvbmVGbnMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJmb3JFYWNoIiwic2V0VGltZW91dCIsImJpbmQiLCJ0eXBlIiwidGFyZ2V0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsIm5tZCIsInBhdGhzIiwiY2hpbGRyZW4iLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0IiwicmVwbGFjZSIsInAiLCJpbnN0YWxsZWRDaHVua3MiLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJlcnJvclR5cGUiLCJyZWFsU3JjIiwibWVzc2FnZSIsIm5hbWUiLCJyZXF1ZXN0Iiwid2VicGFja0pzb25wQ2FsbGJhY2siLCJwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiIsImRhdGEiLCJtb3JlTW9kdWxlcyIsInJ1bnRpbWUiLCJzb21lIiwiY2h1bmtMb2FkaW5nR2xvYmFsIiwic2VsZiIsIl9fd2VicGFja19leHBvcnRzX18iXSwic291cmNlUm9vdCI6IiJ9