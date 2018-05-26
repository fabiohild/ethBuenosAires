/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://static.squarespace.com/universal/scripts-compressed/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11404);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11404:
/*!*********************************************************************!*\
  !*** ./src/main/webapp/universal/src/apps/Performance/bootstrap.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rumCollector = __webpack_require__(/*! @sqs/rum-collector */ 11405);

var _rumCollector2 = _interopRequireDefault(_rumCollector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Only collect performance metrics in user sites, not /config
// This script will be included on ALL user sites
if (window.top === window) {
  var context = window.Static && window.Static.SQUARESPACE_CONTEXT;

  if (context) {
    var website = context.website || {};
    var websiteSettings = context.websiteSettings || {};
    var collection = context.collection || {};
    (0, _rumCollector2.default)({
      appName: 'v6-user-sites',
      context: {
        pageType: typeof context.pageType === 'number' ? context.pageType : -1,
        templateId: context.templateId || '',
        impersonatedSession: context.impersonatedSession || false,
        websiteId: website.id || '',
        authenticUrl: website.authenticUrl || '',
        developerMode: website.developerMode || false,
        timeZone: website.timeZone || '',
        language: website.language || '',
        ampEnabled: websiteSettings.ampEnabled || false,
        collectionType: typeof collection.type === 'number' ? collection.type : -1
      }
    });
  }
}

/***/ }),

/***/ 11405:
/*!************************************************************************************************!*\
  !*** ./src/main/webapp/universal/node_modules/@sqs/rum-collector/dist/rum-collector.bundle.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.rumCollector=n():t.rumCollector=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var n={},e=0;e<10;e++)n["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(t){return n[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,n){for(var e,i,c=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var d in e=Object(arguments[u]))o.call(e,d)&&(c[d]=e[d]);if(r){i=r(e);for(var f=0;f<i.length;f++)a.call(e,i[f])&&(c[i[f]]=e[i[f]])}}return c}},function(t,n,e){"use strict";e.r(n);var r={};e.d(r,"navigation",function(){return j});var o=e(0),a=e.n(o),i="/api/1/wp-rum/record",c={navigationStart:"n",unloadEventStart:"u",unloadEventEnd:"ue",redirectStart:"rd",redirectEnd:"rde",fetchStart:"f",domainLookupStart:"dl",domainLookupEnd:"dle",connectStart:"c",connectEnd:"ce",secureConnectionStart:"s",requestStart:"r",responseStart:"rs",responseEnd:"re",domLoading:"d",domInteractive:"di",domContentLoadedEventStart:"ds",domContentLoadedEventEnd:"de",domComplete:"dc",loadEventStart:"l"},u={},d={},f={app:"a",hash:"h",pathname:"p",context:"ctx"},p={ts:"t",event:"e",data:"d"},s={navigation:0,resource:1,paint:2},l=a()({},f,c,u,d),v=Object.keys(a()({},f,c)),m=(Object.keys(a()({},f,u)),Object.keys(a()({},f,d)),Object.keys(p)),b=Object.keys(l);function y(t,n,e){return t.reduce(function(t,r){if(r in e&&r in n){var o=e[r];t[n[r]]="number"==typeof o?o.toString(32):o}return t},{})}function w(t){if("function"==typeof window.dispatchEvent&&"function"==typeof CustomEvent){const n={};n[t.event]=t,window.dispatchEvent(new CustomEvent("onRumCollectorData",{detail:n}))}var n=function(t){var n=y(m,p,t);return n.d=y(b,l,t.data),n.e=s[t.event],JSON.stringify(n)}(t);if("function"==typeof navigator.sendBeacon&&navigator.sendBeacon(i,n))return;var e=new XMLHttpRequest;e.open("POST",i,!0),e.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),e.send(n)}var g=[];function h(){return g}function j(t){if("performance"in window&&"timing"in window.performance){t=t||{};var n,e,r,o=window.performance.timing,i={event:"navigation",data:(n=a()(t,o.toJSON()),e={},v.forEach(function(t){t in performance.timing&&"number"==typeof n[t]&&n[t]>=n.navigationStart?e[t]=n[t]-n.navigationStart:e[t]=n[t]}),e),ts:Date.now()};w(i),r=i,g.push(r)}}function O(t,n){n=n||{};var e=[].concat(t),o=function(t){var n=t.context||{};return"object"!=typeof n&&(n={}),{app:t.appName||"",context:n,hash:window.location.hash||"",pathname:window.location.pathname||""}}(n);return function(){try{e.forEach(function(t){t in r&&r[t](o)})}catch(t){0}}}e.d(n,"getPerformanceData",function(){return h});n.default=function(t){"function"==typeof window.addEventListener&&window.addEventListener("load",O("navigation",t))}}])});

/***/ })

/******/ });