/*!
 * Knockout ES5 plugin - https://github.com/SteveSanderson/knockout-es5
 * Copyright (c) Steve Sanderson
 * MIT license
 */
(function(e,t){"use strict";function n(e,n){if(!e||"object"!=typeof e)throw Error("When calling ko.track, you must pass an object as the first parameter.");var o=this,u=r(e,!0);return n=n||Object.getOwnPropertyNames(e),n.forEach(function(n){if(!(n in u)){var r=e[n],i=r instanceof Array,c=o.isObservable(r)?r:i?o.observableArray(r):o.observable(r);Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get:c,set:o.isWriteableObservable(c)?c:t}),u[n]=c,i&&a(o,c)}}),e}function r(e,t){b||(b=h());var n=b.get(e);return!n&&t&&(n={},b.set(e,n)),n}function o(e,t,r){var o=this,a={owner:e,deferEvaluation:!0};if("function"==typeof r)a.read=r;else{if("value"in r)throw Error('For ko.defineProperty, you must not specify a "value" for the property. You must provide a "get" function.');if("function"!=typeof r.get)throw Error('For ko.defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called "get".');a.read=r.get,a.write=r.set}return e[t]=o.computed(a),n.call(o,e,[t]),e}function a(e,t){var n=null;e.computed(function(){n&&(n.dispose(),n=null);var r=t();r instanceof Array&&(n=u(e,t,r))})}function u(e,t,n){var r=i(e,n);return r.subscribe(t)}function i(e,t){y||(y=h());var n=y.get(t);if(!n){n=new e.subscribable,y.set(t,n);var r={};c(t,n,r),f(e,t,n,r)}return n}function c(e,t,n){["pop","push","reverse","shift","sort","splice","unshift"].forEach(function(r){var o=e[r];e[r]=function(){var e=o.apply(this,arguments);return n.pause!==!0&&t.notifySubscribers(this),e}})}function f(e,t,n,r){["remove","removeAll","destroy","destroyAll","replace"].forEach(function(o){Object.defineProperty(t,o,{enumerable:!1,value:function(){var a;r.pause=!0;try{a=e.observableArray.fn[o].apply(e.observableArray(t),arguments)}finally{r.pause=!1}return n.notifySubscribers(t),a}})})}function l(e,t){if(!e||"object"!=typeof e)return null;var n=r(e,!1);return n&&n[t]||null}function s(e,t){var n=l(e,t);n&&n.valueHasMutated()}function p(e){e.track=n,e.getObservable=l,e.valueHasMutated=s,e.defineProperty=o}function v(){if("undefined"!=typeof module){var t=require("knockout"),n=require("weakmap");p(t),h=function(){return new n},module.exports=t}else"ko"in e&&(p(e.ko),h=function(){return new e.WeakMap})}var b,y,h;v()})(this),/*! WeakMap shim
 * (The MIT License)
 *
 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the 'Software'), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included with all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
void function(e,t,n){function r(e,t,n){return"function"==typeof t&&(n=t,t=o(n).replace(/_$/,"")),c(e,t,{configurable:!0,writable:!0,value:n})}function o(e){return"function"!=typeof e?"":"_name"in e?e._name:"name"in e?e.name:f.call(e).match(p)[1]}function a(e,t){return t._name=e,t}function u(e){function t(t,o){return o||2===arguments.length?r.set(t,o):(o=r.get(t),o===n&&(o=e(t),r.set(t,o))),o}var r=new b;return e||(e=y),t}var i=Object.getOwnPropertyNames,c=Object.defineProperty,f=Function.prototype.toString,l=Object.create,s=Object.prototype.hasOwnProperty,p=/^\n?function\s?(\w*)?_?\(/,v=function(){function e(){var e=f(),n={};this.unlock=function(r){var a=v(r);if(s.call(a,e))return a[e](n);var u=l(null,t);return c(a,e,{value:Function("s","l",o)(n,u)}),u}}var t={value:{writable:!0,value:n}},o="return function(k){if(k===s)return l}",u=l(null),f=function(){var e=Math.random().toString(36).slice(2);return e in u?f():u[e]=e},p=f(),v=function(e){if(s.call(e,p))return e[p];if(!Object.isExtensible(e))throw new TypeError("Object must be extensible");var t=l(null);return c(e,p,{value:t}),t};return r(Object,a("getOwnPropertyNames",function(e){var t=i(e);return s.call(e,p)&&t.splice(t.indexOf(p),1),t})),r(e.prototype,a("get",function(e){return this.unlock(e).value})),r(e.prototype,a("set",function(e,t){this.unlock(e).value=t})),e}(),b=function(u){function i(t){return this===e||null==this||this===i.prototype?new i(t):(y(this,new v),d(this,t),n)}function c(e){b(e);var r=h(this).get(e);return r===t?n:r}function f(e,r){b(e),h(this).set(e,r===n?t:r)}function l(e){return b(e),h(this).get(e)!==n}function s(e){b(e);var t=h(this),r=t.get(e)!==n;return t.set(e,n),r}function p(){return h(this),"[object WeakMap]"}var b=function(e){if(null==e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Invalid WeakMap key")},y=function(e,t){var n=u.unlock(e);if(n.value)throw new TypeError("Object is already a WeakMap");n.value=t},h=function(e){var t=u.unlock(e).value;if(!t)throw new TypeError("WeakMap is not generic");return t},d=function(e,t){null!==t&&"object"==typeof t&&"function"==typeof t.forEach&&t.forEach(function(n,r){n instanceof Array&&2===n.length&&f.call(e,t[r][0],t[r][1])})};c._name="get",f._name="set",l._name="has",p._name="toString";try{var m=("return "+s).replace("e_","\\u0065"),g=Function("unwrap","validate",m)(h,b)}catch(w){var g=s}var m=(""+Object).split("Object"),k=a("toString",function p(){return m[0]+o(this)+m[1]});r(k,k);var O={__proto__:[]}instanceof Array?function(e){e.__proto__=k}:function(e){r(e,k)};return O(i),[p,c,f,l,g].forEach(function(e){r(i.prototype,e),O(e)}),i}(new v),y=Object.create?function(){return Object.create(null)}:function(){return{}};"undefined"!=typeof module?module.exports=b:"undefined"!=typeof exports?exports.WeakMap=b:"WeakMap"in e||(e.WeakMap=b),b.createStorage=u,e.WeakMap&&(e.WeakMap.createStorage=u)}((0,eval)("this"));