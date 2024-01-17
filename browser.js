// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e,r){return e===r||e!=e&&r!=r}var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",c=t()?function(e){var r,t,o,c,l;if(null==e)return n.call(e);t=e[a],l=a,r=null!=(c=e)&&i.call(c,l);try{e[a]=void 0}catch(r){return n.call(e)}return o=n.call(e),r?e[a]=t:delete e[a],o}:function(e){return n.call(e)},l="function"==typeof Float64Array,u="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0,p=function(){var e,r,t;if("function"!=typeof u)return!1;try{r=new u([1,3.14,-3.14,NaN]),t=r,e=(l&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?s:function(){throw new Error("not implemented")};function f(e){var r=new p(2);return r[0]=e.re,r[1]=e.im,r}var h="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty;function g(e){return"number"==typeof e}function d(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function m(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+d(i):d(i)+e,n&&(e="-"+e)),e}var b=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function v(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!g(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=m(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=m(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function E(e){return"string"==typeof e}var _=Math.abs,S=String.prototype.toLowerCase,T=String.prototype.toUpperCase,F=String.prototype.replace,A=/e\+(\d)$/,x=/e-(\d)$/,k=/^(\d+)$/,j=/^(\d+)e/,V=/\.0$/,I=/\.0*e/,N=/(\..*[^0])0*e/;function O(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!g(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":_(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=F.call(t,N,"$1e"),t=F.call(t,I,"e"),t=F.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=F.call(t,A,"e+0$1"),t=F.call(t,x,"e-0$1"),e.alternate&&(t=F.call(t,k,"$1."),t=F.call(t,j,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===T.call(e.specifier)?T.call(t):S.call(t)}function P(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function R(e,r,t){var n=r-e.length;return n<0?e:e=t?e+P(n):P(n)+e}var C=String.fromCharCode,$=isNaN,L=Array.isArray;function M(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Z(e){var r,t,n,i,o,a,c,l,u;if(!L(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if(E(n=e[l]))a+=n;else{if(r=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=v(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function G(e){var r,t,n,i;for(t=[],i=0,n=Y.exec(e);n;)(r=e.slice(i,Y.lastIndex-n[0].length)).length&&t.push(r),t.push(B(n)),i=Y.lastIndex,n=Y.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function W(e){return"string"==typeof e}function J(e){var r,t,n;if(!W(e))throw new TypeError(J("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=G(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Z.apply(null,t)}var U=Object.prototype,X=U.toString,z=U.__defineGetter__,q=U.__defineSetter__,D=U.__lookupGetter__,H=U.__lookupSetter__,K=function(){try{return h({},"x",{}),!0}catch(e){return!1}}()?y:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===X.call(e))throw new TypeError(J("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError(J("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(D.call(e,r)||H.call(e,r)?(n=e.__proto__,e.__proto__=U,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(e,r,t.get),a&&q&&q.call(e,r,t.set),e};function Q(e,r,t){K(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ee(e){return"number"==typeof e}var re=Number,te=re.prototype.toString,ne=t();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Number]"===c(e)))}function oe(e){return ee(e)||ie(e)}function ae(e,r){if(!(this instanceof ae))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ee(e))throw new TypeError(J("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ee(r))throw new TypeError(J("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return K(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),K(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Q(oe,"isPrimitive",ee),Q(oe,"isObject",ie),Q(ae,"BYTES_PER_ELEMENT",8),Q(ae.prototype,"BYTES_PER_ELEMENT",8),Q(ae.prototype,"byteLength",16),Q(ae.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Q(ae.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ce="function"==typeof Math.fround?Math.fround:null,le="function"==typeof Float32Array,ue=Number.POSITIVE_INFINITY,se="function"==typeof Float32Array?Float32Array:null,pe="function"==typeof Float32Array?Float32Array:void 0,fe=new(function(){var e,r,t;if("function"!=typeof se)return!1;try{r=new se([1,3.14,-3.14,5e40]),t=r,e=(le&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ue}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")})(1),he="function"==typeof ce?ce:function(e){return fe[0]=e,fe[0]};function ye(e,r){if(!(this instanceof ye))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ee(e))throw new TypeError(J("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ee(r))throw new TypeError(J("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return K(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:he(e)}),K(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:he(r)}),this}function ge(e){return e instanceof ae||e instanceof ye||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}return Q(ye,"BYTES_PER_ELEMENT",4),Q(ye.prototype,"BYTES_PER_ELEMENT",4),Q(ye.prototype,"byteLength",8),Q(ye.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Q(ye.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),function(r,t){return r===t||r!=r&&t!=t||!(!ge(r)||!ge(t))&&(n=t,i=f(r),o=f(n),e(i[0],o[0])&&e(i[1],o[1]));var n,i,o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isSameValueZero=r();
//# sourceMappingURL=browser.js.map
