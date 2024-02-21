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

/***/ "./client.ts":
/*!*******************!*\
  !*** ./client.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst memberService_1 = __webpack_require__(/*! ./memberService */ \"./memberService.ts\");\nfunction displayUsersAsHtml() {\n    return __awaiter(this, void 0, void 0, function* () {\n        // Get the user list div from the DOM\n        const userListDiv = document.getElementById('userList');\n        if (userListDiv) {\n            // Fetch users from the server\n            const users = yield (0, memberService_1.getUsersFromJsonFile)();\n            // Create a new unordered list element\n            const userList = document.createElement('ul');\n            // Iterate over the users and create list items for each\n            users.forEach(user => {\n                const listItem = document.createElement('li');\n                listItem.textContent = user.name;\n                userList.appendChild(listItem);\n            });\n            // Append the list to the user list div\n            userListDiv.appendChild(userList);\n        }\n        else {\n            console.error('Element with ID \"userList\" not found.');\n        }\n    });\n}\n// Call the function to display users when the DOM content is loaded\n//document.addEventListener('DOMContentLoaded', displayUsersAsHtml);\nif (typeof window !== 'undefined') {\n    // Code that depends on the DOM\n    document.addEventListener('DOMContentLoaded', displayUsersAsHtml);\n}\n\n\n//# sourceURL=webpack:///./client.ts?");

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.jsonFileUrl = void 0;\nexports.jsonFileUrl = \"http://localhost:3000/\";\n\n\n//# sourceURL=webpack:///./config.ts?");

/***/ }),

/***/ "./memberService.ts":
/*!**************************!*\
  !*** ./memberService.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getUsersFromJsonFile = void 0;\nconst config_1 = __webpack_require__(/*! ./config */ \"./config.ts\");\nfunction getUsersFromJsonFile() {\n    return __awaiter(this, void 0, void 0, function* () {\n        let data;\n        try {\n            const response = yield fetch(config_1.jsonFileUrl);\n            data = yield response.json();\n            return data;\n        }\n        catch (err) {\n            console.error('Error reading file:', err);\n            return data;\n        }\n    });\n}\nexports.getUsersFromJsonFile = getUsersFromJsonFile;\nconst report = getUsersFromJsonFile();\nconsole.log(report);\n/*\nimport * as fs from 'fs/promises';\n\nasync function readFile() {\n    try {\n        const data = await fs.readFile('member.json', 'utf-8');\n        console.log(data);\n    } catch (err) {\n        console.error('Error reading file:', err);\n    }\n}\n\nreadFile();\n*/ \n\n\n//# sourceURL=webpack:///./memberService.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./client.ts");
/******/ 	
/******/ })()
;