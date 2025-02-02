// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,e){return r===e||r!=r&&e!=e}var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return e&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var c=t()?function(r){var e,t,a,c,l;if(null==r)return n.call(r);t=r[o],l=o,e=null!=(c=r)&&i.call(c,l);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=t:delete r[o],a}:function(r){return n.call(r)},l="function"==typeof Float64Array;var u="function"==typeof Float64Array?Float64Array:null;var s="function"==typeof Float64Array?Float64Array:void 0;var p=function(){var r,e,t;if("function"!=typeof u)return!1;try{e=new u([1,3.14,-3.14,NaN]),t=e,r=(l&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};function f(r){var e=new p(2);return e[0]=r.re,e[1]=r.im,e}var g="function"==typeof Object.defineProperty?Object.defineProperty:null;var h=Object.defineProperty;function y(r){return"number"==typeof r}function d(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function m(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+d(i):d(i)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=m(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=m(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var E=Math.abs,_=String.prototype.toLowerCase,S=String.prototype.toUpperCase,T=String.prototype.replace,F=/e\+(\d)$/,A=/e-(\d)$/,k=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,V=/\.0*e/,I=/(\..*[^0])0*e/;function N(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":E(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=T.call(t,I,"$1e"),t=T.call(t,V,"e"),t=T.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=T.call(t,F,"e+0$1"),t=T.call(t,A,"e-0$1"),r.alternate&&(t=T.call(t,k,"$1."),t=T.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===S.call(r.specifier)?S.call(t):_.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var P=String.fromCharCode,R=Array.isArray;function C(r){return r!=r}function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,t,n,i,a,o,c,l,u,s,p,f,g;if(!R(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,C(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!C(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(a)?String(n.arg):P(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,p=n.width,f=n.padRight,g=void 0,(g=p-s.length)<0?s:s=f?s+O(g):O(g)+s)),o+=n.arg||"",c+=1}return o}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Z(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function B(r){var e,t;if("string"!=typeof r)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Z(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return L.apply(null,e)}var G=Object.prototype,W=G.toString,J=G.__defineGetter__,U=G.__defineSetter__,X=G.__lookupGetter__,z=G.__lookupSetter__;var q=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?h:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=G,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&J&&J.call(r,e,t.get),o&&U&&U.call(r,e,t.set),r};function D(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return"number"==typeof r}var K=Number,Q=K.prototype.toString;var rr=t();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function tr(r){return H(r)||er(r)}function nr(r,e){if(!(this instanceof nr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!H(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!H(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}D(tr,"isPrimitive",H),D(tr,"isObject",er),D(nr,"BYTES_PER_ELEMENT",8),D(nr.prototype,"BYTES_PER_ELEMENT",8),D(nr.prototype,"byteLength",16),D(nr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(nr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var ir="function"==typeof Math.fround?Math.fround:null,ar="function"==typeof Float32Array;var or=Number.POSITIVE_INFINITY,cr="function"==typeof Float32Array?Float32Array:null;var lr="function"==typeof Float32Array?Float32Array:void 0;var ur=new(function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr([1,3.14,-3.14,5e40]),t=e,r=(ar&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===or}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")})(1);var sr="function"==typeof ir?ir:function(r){return ur[0]=r,ur[0]};function pr(r,e){if(!(this instanceof pr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!H(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!H(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:sr(r)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:sr(e)}),this}function fr(r){return r instanceof nr||r instanceof pr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function gr(e,t){return e===t||e!=e&&t!=t||!(!fr(e)||!fr(t))&&(n=t,i=f(e),a=f(n),r(i[0],a[0])&&r(i[1],a[1]));var n,i,a}D(pr,"BYTES_PER_ELEMENT",4),D(pr.prototype,"BYTES_PER_ELEMENT",4),D(pr.prototype,"byteLength",8),D(pr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(pr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));export{gr as default};
//# sourceMappingURL=mod.js.map
