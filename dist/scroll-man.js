!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ScrollMan=n():e.ScrollMan=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";e.exports=t(1).default},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(2),i=r(a),l=t(3),f=r(l),c=function(){function e(){o(this,e)}return u(e,null,[{key:"keep",value:function(e){var n=this;this.restore(e),e.addEventListener("scroll",function(t){n.save(e)})}},{key:"save",value:function(e){var n=f.default.xpath(e),t=e.scrollTop;this._setStorage(n,t)}},{key:"restore",value:function(e){var n=f.default.xpath(e),t=this._getStorage(n);t&&(e.scrollTop=t)}},{key:"_setStorage",value:function(e,n){var t=i.default.get("scrollTop")||{};t[e]=n,i.default.set("scrollTop",t)}},{key:"_getStorage",value:function(e){return(i.default.get("scrollTop")||{})[e]}}]),e}();n.default=c},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=function(){function e(){r(this,e)}return o(e,null,[{key:"get",value:function(e){return JSON.parse(sessionStorage.getItem(e))}},{key:"set",value:function(e,n){sessionStorage.setItem(e,JSON.stringify(n))}}]),e}();n.default=u},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=function(){function e(){r(this,e)}return o(e,null,[{key:"xpath",value:function(e){if(e instanceof Array&&(e=e[0]),1!=e.nodeType)throw new ErrorException("nodes other than the element node was passed. node_type:"+e.nodeType+" node_name:"+e.nodeName);var n=[],t="",r=0,o=null;do{if(t=e.nodeName.toLowerCase(),e.parentNode.children.length>1){r=0,o=null;var u=void 0;for(u=0;u<e.parentNode.children.length;u++)if(e.nodeName==e.parentNode.children[u].nodeName&&(r++,e==e.parentNode.children[u]&&(o=r),null!=o&&r>1)){t+="["+o+"]";break}}n.unshift(t)}while(null!=(e=e.parentNode)&&"#document"!=e.nodeName);return"/"+n.join("/").toLowerCase()}}]),e}();n.default=u}])});