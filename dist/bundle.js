!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=9)}([function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(s=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var s;return[e].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+e+"}":e}).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];null!=s[0]&&t[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),r.push(s))}},r}},function(n,r,e){var t,o,i={},s=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),a=function(n){var r={};return function(n,e){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}}(),c=null,u=0,l=[],d=e(4);function p(n,r){for(var e=0;e<n.length;e++){var t=n[e],o=i[t.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](t.parts[s]);for(;s<t.parts.length;s++)o.parts.push(g(t.parts[s],r))}else{var a=[];for(s=0;s<t.parts.length;s++)a.push(g(t.parts[s],r));i[t.id]={id:t.id,refs:1,parts:a}}}}function f(n,r){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};t[s]?t[s].parts.push(a):e.push(t[s]={id:s,parts:[a]})}return e}function v(n,r){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=l[l.length-1];if("top"===n.insertAt)t?t.nextSibling?e.insertBefore(r,t.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),l.push(r);else if("bottom"===n.insertAt)e.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(n.insertAt.before,e);e.insertBefore(r,o)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=l.indexOf(n);r>=0&&l.splice(r,1)}function b(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return e.nc}();t&&(n.attrs.nonce=t)}return m(r,n.attrs),v(n,r),r}function m(n,r){Object.keys(r).forEach(function(e){n.setAttribute(e,r[e])})}function g(n,r){var e,t,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var s=u++;e=c||(c=b(r)),t=w.bind(null,e,s,!1),o=w.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(r,n.attrs),v(n,r),r}(r),t=function(n,r,e){var t=e.css,o=e.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(t=d(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([t],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,r),o=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(r),t=function(n,r){var e=r.css,t=r.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){h(e)});return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=s()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var e=f(n,r);return p(e,r),function(n){for(var t=[],o=0;o<e.length;o++){var s=e[o];(a=i[s.id]).refs--,t.push(a)}n&&p(f(n,r),r);for(o=0;o<t.length;o++){var a;if(0===(a=t[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var y,x=(y=[],function(n,r){return y[n]=r,y.filter(Boolean).join("\n")});function w(n,r,e,t){var o=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=x(r,o);else{var i=document.createTextNode(o),s=n.childNodes;s[r]&&n.removeChild(s[r]),s.length?n.insertBefore(i,s[r]):n.appendChild(i)}}},function(n,r,e){var t=e(3);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,".background {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 1;\r\n}\r\n\r\n.image {\r\n  position: relative;\r\n  object-fit: cover;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  opacity: 0;\r\n  transition: opacity 1s ease;\r\n  z-index: 2;\r\n}\r\n\r\n.image-is-visible {\r\n  opacity: 1;\r\n}\r\n",""])},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=r.protocol+"//"+r.host,t=e+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,r,e){var t=e(6);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: rgba( 0, 0, 0, .9 );\r\n}\r\n\r\n/* box-sizing property is not inherited */\r\n* {\r\n  box-sizing: border-box; \r\n}\r\n\r\n.loader {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgb( 0, 0, 0 );\r\n  z-index: 99;\r\n}\r\n\r\n.loader p {\r\n  font-size: 2em;\r\n  color: gray;\r\n}\r\n\r\n.loader-is-hidden {\r\n  display: none;\r\n}\r\n\r\n.credits {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  color: white;\r\n  background-color: rgba( 0, 0, 0, .4 );\r\n  border-top-right-radius: 6px;\r\n  padding: 6px;\r\n  z-index: 4;\r\n}\r\n.credits p {\r\n  margin: 0;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0;\r\n  font-size: 9px;\r\n}\r\n.credits a {\r\n  color: white;\r\n}\r\n@media only screen and (min-height: 600px) {\r\n  .credits {\r\n    padding: 10px;\r\n  }\r\n  .credits p {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n",""])},function(n,r,e){var t=e(8);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,".proverb-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  z-index: 3;\r\n}\r\n.proverb-container__options {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 90vw;\r\n  max-width: 900px;\r\n  margin: 20px auto;\r\n  position: relative;\r\n  z-index: 4;\r\n}\r\n.options__quotes, .options__proverbs {\r\n  position: relative;\r\n  border: 1px solid gray;\r\n  border-radius: 6px;\r\n  color: white;\r\n  background-color: rgba( 0, 0, 0, .6 );\r\n  padding: 12px;\r\n  cursor: pointer;\r\n  z-index: 4;\r\n}\r\n.options__quotes:hover, .options__proverbs:hover,\r\n.next-proverb:hover, .next-quote:hover {\r\n  color: #cccccc;\r\n  background-color: rgba( 0, 0, 0, .9 );\r\n}\r\n.proverb-container__proverb, .proverb-container__quote {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 4;\r\n}\r\n.proverb-quote-content {\r\n  position: relative;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 1em;\r\n  width: 90vw;\r\n  max-width: 900px;\r\n  max-height: 30vh;\r\n  overflow: auto;\r\n  border: 1px solid gray;\r\n  border-radius: 6px;\r\n  color: white;\r\n  background-color: rgba( 0, 0, 0, .6 );\r\n  z-index: 4;\r\n}\r\n.proverb-quote-content p {\r\n  margin-top: 0;\r\n  margin-bottom: 6px;\r\n  margin-block-start: 0;\r\n  margin-block-end: 6px;\r\n}\r\n.proverb-quote-content.largefont {\r\n  font-size: 1.2em;\r\n}\r\n.author {\r\n  position: relative;\r\n  text-align: right;\r\n  margin-left: auto;\r\n  z-index: 4;\r\n}\r\n.next-proverb, .next-quote {\r\n  position: relative;\r\n  border: 1px solid gray;\r\n  border-radius: 6px;\r\n  color: white;\r\n  background-color: rgba( 0, 0, 0, .6 );\r\n  margin-top: 20px;\r\n  padding: 12px;\r\n  cursor: pointer;\r\n  z-index: 99;\r\n}\r\n.is-not-active {\r\n  display: none;\r\n}\r\ndiv.proverb-container__options div.active {\r\n  color: #cccccc;\r\n  background-color: rgba( 0, 0, 0, .9 );\r\n}\r\n@media only screen and (min-height: 400px) {\r\n  .proverb-container {\r\n    justify-content: center;\r\n  }\r\n  .proverb-container__options {\r\n    margin-top: 0;\r\n  }\r\n}\r\n@media only screen and (min-height: 600px) {\r\n  .proverb-quote-content.largefont {\r\n    font-size: 2em;\r\n  }\r\n}",""])},function(n,r,e){"use strict";e.r(r);e(2);var t=document.querySelector(".js-image"),o=1;function i(){var n="https://source.unsplash.com/1920x1080?nature?sig=".concat(o);t.setAttribute("src",n),o++}function s(){t.classList.remove("image-is-visible"),t.setAttribute("src",""),i()}t.addEventListener("load",function(){t.classList.add("image-is-visible")});var a=document.querySelector(".js-show-quotes"),c=document.querySelector(".js-show-proverbs"),u=document.querySelector(".proverb-container__proverb"),l=document.querySelector(".proverb-container__quote"),d=document.querySelector(".js-proverb-content"),p=document.querySelector(".js-next-proverb"),f=["If you can't beat 'em, join 'em","Don't count your chickens before they hatch","Actions speak louder than words","The leopard does not change his spots","A journey of a thousand miles begins with a single step","Don't bite the hand that feeds you","Don't put off until tomorrow what you can do today","No man is an island","The early bird gets the worm","The enemy of my enemy is my friend","A poor workman always blames his tools","A person is known by the company he keeps","Don't burn your bridges behind you"],v=0,h=f.length-1;function b(){v=v===h?0:v+1,d.textContent=f[v],s()}c.addEventListener("click",function(){u.classList.contains("is-not-active")&&(l.classList.add("is-not-active"),u.classList.remove("is-not-active"),a.classList.remove("active"),c.classList.add("active"),b())}),p.addEventListener("click",b);var m=document.querySelector(".proverb-container__proverb"),g=document.querySelector(".proverb-container__quote"),y=document.querySelector(".js-quote-content"),x=document.querySelector(".js-author"),w=document.querySelector(".js-next-quote"),j=1;function L(){var n;(n=new XMLHttpRequest).open("GET","https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?sig=".concat(j)),n.onload=function(){if(n.status>=200&&n.status<400){var r=JSON.parse(n.responseText);y.innerHTML=r[0].content,x.textContent=r[0].title}else y.textContent="Server returned an error",x.textContent=""},n.onerror=function(){y.textContent="Connection error",x.textContent=""},n.send(),j++,s()}a.addEventListener("click",function(){g.classList.contains("is-not-active")&&(m.classList.add("is-not-active"),g.classList.remove("is-not-active"),c.classList.remove("active"),a.classList.add("active"),L())}),w.addEventListener("click",L);e(5),e(7);window.addEventListener("load",function(){setTimeout(function(){var n=document.querySelector(".js-loader");n.classList.add("loader-is-hidden")},1e3),i(),d.textContent=f[0]})}]);