parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D/or":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function c(e){try{a(n.next(e))}catch(t){i(t)}}function s(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(c,s)}a((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};exports.__esModule=!0;var r=function(){function r(e,t){this.characteristics={},console.log(t),this.serviceUuid=e,this.device=t}return r.prototype.connect=function(){return e(this,void 0,Promise,function(){var e,r,n,o,i,c,s;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),[4,this.device.gatt.connect()];case 1:return e=t.sent(),console.log("0"),[4,e.getPrimaryService(this.serviceUuid)];case 2:return r=t.sent(),console.log("1"),[4,r.getCharacteristics("10b20102-5b3b-4571-9508-cf3efcd7bbae")];case 3:for(n=t.sent(),console.log("2"),o=0,i=n;o<i.length;o++)c=i[o],this.characteristics[c.uuid]=c;return console.log("4"),[3,5];case 4:return s=t.sent(),console.log(s),[3,5];case 5:return[2]}})})},r.prototype.read=function(e){return this.characteristics[e].readValue()},r.prototype.write=function(e,t,r){return this.characteristics[e].writeValue(new Uint8Array(t))},r}();exports.default=r;
},{}],"ART2":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{s(r.next(e))}catch(t){u(t)}}function a(e){try{s(r.throw(e))}catch(t){u(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,a)}s((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(a){u=[6,a],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=n(require("./peripheral")),o=function(){function n(){}return n.discover=function(n){return e(this,void 0,Promise,function(){var e,o;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,navigator.bluetooth.requestDevice({filters:[{services:[n]}]})];case 1:return e=t.sent(),[2,new r.default(n,e)];case 2:return o=t.sent(),console.log(o.message),[3,3];case 3:return[2]}})})},n}();exports.default=o;
},{"./peripheral":"D/or"}],"nwyF":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=n(require("./webBluetooth")),o=function(){function n(e){this.peripheral=e}return n.discover=function(){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,r.default.discover("10b20100-5b3b-4571-9508-cf3efcd7bbae")];case 1:return(e=t.sent())?[4,e.connect()]:[2];case 2:return t.sent(),[2,new n(e)]}})})},n.prototype.move=function(e,t){var n=[];n.push(t?2:1);for(var r=0;r<e.length;r++){var o=Math.max(Math.min(e[r],100),-100);n.push(r+1,o>=0?1:2,Math.abs(o))}t&&n.push(100*t),this.peripheral.write("10b20102-5b3b-4571-9508-cf3efcd7bbae",n,!1)},n}();window.Cube=o,exports.default=o;
},{"./webBluetooth":"ART2"}],"7QCb":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,u){function i(t){try{a(r.next(t))}catch(e){u(e)}}function c(t){try{a(r.throw(t))}catch(e){u(e)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,c)}a((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(c){u=[6,c],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this;exports.__esModule=!0;var o=n(require("./cube")),u=document.getElementById("app");u&&(u.innerHTML='\n<div>\n  <button id="button">Discover</button>\n  <button id="forward">Forward</button>\n  <button id="backward">Backward</button>\n</div>\n',document.querySelector("#button").addEventListener("click",function(){return t(r,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return[4,o.default.discover()];case 1:return t=e.sent(),document.querySelector("#forward").addEventListener("click",function(){t.move([70,70],500)}),document.querySelector("#backward").addEventListener("click",function(){t.move([-70,-70],500)}),[2]}})})}));
},{"./cube":"nwyF"}]},{},["7QCb"], null)
//# sourceMappingURL=/index.js.map