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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let db;\n// create a new db request for a \"budget\" database.\nconst request = indexedDB.open(\"budget\", 1);\n\nrequest.onupgradeneeded = function(event) {\n   // create object store called \"pending\" and set autoIncrement to true\n  const db = event.target.result;\n  db.createObjectStore(\"pending\", { autoIncrement: true });\n};\n\nrequest.onsuccess = function(event) {\n  db = event.target.result;\n\n  // check if app is online before reading from db\n  if (navigator.onLine) {\n    checkDatabase();\n  }\n};\n\nrequest.onerror = function(event) {\n  console.log(\"Woops! \" + event.target.errorCode);\n};\n\nfunction saveRecord(record) {\n  // create a transaction on the pending db with readwrite access\n  const transaction = db.transaction([\"pending\"], \"readwrite\");\n\n  // access your pending object store\n  const store = transaction.objectStore(\"pending\");\n\n  // add record to your store with add method.\n  store.add(record);\n}\n\nfunction checkDatabase() {\n  // open a transaction on your pending db\n  const transaction = db.transaction([\"pending\"], \"readwrite\");\n  // access your pending object store\n  const store = transaction.objectStore(\"pending\");\n  // get all records from store and set to a variable\n  const getAll = store.getAll();\n\n  getAll.onsuccess = function() {\n    if (getAll.result.length > 0) {\n      fetch(\"/api/transaction/bulk\", {\n        method: \"POST\",\n        body: JSON.stringify(getAll.result),\n        headers: {\n          Accept: \"application/json, text/plain, */*\",\n          \"Content-Type\": \"application/json\"\n        }\n      })\n      .then(response => response.json())\n      .then(() => {\n        // if successful, open a transaction on your pending db\n        const transaction = db.transaction([\"pending\"], \"readwrite\");\n\n        // access your pending object store\n        const store = transaction.objectStore(\"pending\");\n\n        // clear all items in your store\n        store.clear();\n      });\n    }\n  };\n}\n\n// listen for app coming back online\nwindow.addEventListener(\"online\", checkDatabase);\n\n// export default saveRecord;\n\n//# sourceURL=webpack:///./public/index.js?");

/***/ })

/******/ });