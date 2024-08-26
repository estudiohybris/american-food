/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
// Importa los estilos


// Importa las librerías necesarias


// Opcional: Puedes agregar más código o inicialización aquí si es necesario
console.log('App initialized');
// Espera a que el documento esté completamente cargado
$(document).ready(function () {
  // Usa el evento de scroll para aplicar o eliminar la clase shadow
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    $(".navbar.navbar-expand-lg.sticky-top.bg-white").toggleClass("shadow", scroll > 0);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n@media screen (max-widht: 1024px) {\r\n             ^\r\n      Expected \"{\".\n    ╷\n352 │ @media screen (max-widht: 1024px) {\r\n    │               ^\n    ╵\n  stdin 352:15  root stylesheet\r\n      in D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\src\\scss\\main.scss (line 352, column 15)\n    at D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass-loader\\dist\\index.js:89:7\n    at Function.call$2 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:118540:16)\n    at render_closure1.call$2 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:101842:12)\n    at _RootZone.runBinary$3$3 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:37294:18)\n    at _FutureListener.handleError$1 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35809:21)\n    at _Future__propagateToListeners_handleError.call$0 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:36124:49)\n    at Object._Future__propagateToListeners (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:5089:77)\n    at _Future._completeError$2 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35975:9)\n    at _AsyncAwaitCompleter.completeError$2 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35573:12)\n    at Object._asyncRethrow (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:4875:17)\n    at D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:26739:20\n    at _wrapJsFunctionForAsync_closure.$protected (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:4900:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35592:12)\n    at _awaitOnObject_closure0.call$2 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35586:25)\n    at _RootZone.runBinary$3$3 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:37294:18)\n    at _FutureListener.handleError$1 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35809:21)\n    at _Future__propagateToListeners_handleError.call$0 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:36124:49)\n    at Object._Future__propagateToListeners (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:5089:77)\n    at _Future._completeError$2 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35975:9)\n    at _Future__asyncCompleteError_closure.call$0 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:36054:18)\n    at Object._microtaskLoop (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:5145:24)\n    at StaticClosure._startMicrotaskLoop (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:5151:11)\n    at _AsyncRun__scheduleImmediateJsOverride_internalCallback.call$0 (D:\\ESTUDIO HYBRIS\\WEB - Asesor de inversiones - FrontOffice\\node_modules\\sass\\sass.dart.js:35493:21)\n    at process.processImmediate (node:internal/timers:483:21)");

/***/ })

/******/ });
//# sourceMappingURL=main.cfb8f71e4dd26642b446.bundle.js.map