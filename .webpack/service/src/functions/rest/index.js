/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/rest/index.js":
/*!*************************************!*\
  !*** ./src/functions/rest/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handle: () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/functions/rest/routes.js\");\n\nconst api = __webpack_require__(/*! lambda-api */ \"lambda-api\")();\napi.use((req, res, next) => {\n  res.cors();\n  next();\n});\napi.get('/esg/whatsapp/webhook', _routes__WEBPACK_IMPORTED_MODULE_0__.serviceVerification);\napi.post('/esg/whatsapp/webhook', _routes__WEBPACK_IMPORTED_MODULE_0__.notificationHandler);\nconst handle = async (event, context) => {\n  api.app({});\n  return api.run(event, context);\n};\n\n//# sourceURL=webpack://m02-whatsapp-esg/./src/functions/rest/index.js?");

/***/ }),

/***/ "./src/functions/rest/routes.js":
/*!**************************************!*\
  !*** ./src/functions/rest/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notificationHandler: () => (/* binding */ notificationHandler),\n/* harmony export */   serviceVerification: () => (/* binding */ serviceVerification)\n/* harmony export */ });\nconst serviceVerification = async (req, res) => {\n  const {\n    'hub.mode': mode,\n    'hub.challenge': challenge,\n    'hub.verify_token': token\n  } = req.query;\n  if (!(mode && challenge && token)) {\n    return res.status(400).send('');\n  }\n  if (!(mode === 'subscribe' && token === process.env.challenge_token)) {\n    return res.status(400).send('');\n  }\n  return res.status(200).send(challenge);\n};\nconst notificationHandler = async (req, res) => {\n  console.log('on notification service');\n  return res.status(200).json({\n    message: \"lemus\"\n  });\n};\n\n//# sourceURL=webpack://m02-whatsapp-esg/./src/functions/rest/routes.js?");

/***/ }),

/***/ "lambda-api":
/*!*****************************!*\
  !*** external "lambda-api" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lambda-api");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("regenerator-runtime/runtime");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("regenerator-runtime/runtime");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/rest/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;