webpackJsonp([0x86908f3c4c60],{78:function(t,e,r){!function(e,r){t.exports=r()}(this,function(){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,n=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,a=Object.getPrototypeOf,i=a&&a(Object);return function s(u,f,p){if("string"!=typeof f){if(i){var l=a(f);l&&l!==i&&s(u,l,p)}var b=n(f);o&&(b=b.concat(o(f)));for(var y=0;y<b.length;++y){var O=b[y];if(!(t[O]||e[O]||p&&p[O])){var g=c(f,O);try{r(u,O,g)}catch(t){}}}return u}return u}})},32:function(t,e){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=n()?Object.assign:function(t,e){for(var n,i,s=r(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var f in n)c.call(n,f)&&(s[f]=n[f]);if(o){i=o(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(s[i[p]]=n[i[p]])}}return s}},131:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(110),c=n(o),a=r(1);e.default=function(){return(0,a.createElement)("div",{},(0,a.createElement)(c.default,{to:"/b/"},"To B"))},t.exports=e.default}});