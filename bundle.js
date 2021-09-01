/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-element.js":
/*!*******************************!*\
  !*** ./src/create-element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const createElement = (tagName, attributes = {}, eventListeners = {}) => {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([k, v]) => {
    element.setAttribute(k, v);
  });
  Object.entries(eventListeners).forEach(([key, value]) => {
    if (value.length > 1) {
      value.forEach(val => element.addEventListener(key, val));
    } else {
      element.addEventListener(key, value);
    }
  });
  return element;
};




/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = [
  "first",
  "second",
  "fruits",
  "cars",
  "family",
  "cats",
  "amazing stories",
  "taxes, boo...",
];



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/variables.js");



const app = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1');
app.textContent = "hello!";
document.body.appendChild(app);



const createMenuBar = () => {
  const wrapper = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "menu-wrapper",
    class: "",
  });

  return wrapper;
}; 

const item = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    id: 'menu'
  })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQStDLHFCQUFxQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNkOztBQUVuQyxZQUFZLDhEQUFhO0FBQ3pCO0FBQ0E7Ozs7QUFJQTtBQUNBLGtCQUFrQiw4REFBYTtBQUMvQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLGFBQWEsOERBQWE7QUFDMUI7QUFDQSxHQUFHLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW51LXNocmluay8uL3NyYy9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZW51LXNocmluay8uL3NyYy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vbWVudS1zaHJpbmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVudS1zaHJpbmsvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lbnUtc2hyaW5rL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVudS1zaHJpbmsvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZW51LXNocmluay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZ05hbWUsIGF0dHJpYnV0ZXMgPSB7fSwgZXZlbnRMaXN0ZW5lcnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgdik7XG4gIH0pO1xuICBPYmplY3QuZW50cmllcyhldmVudExpc3RlbmVycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhbHVlLmZvckVhY2godmFsID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfTsiLCJjb25zdCBtZW51ID0gW1xuICBcImZpcnN0XCIsXG4gIFwic2Vjb25kXCIsXG4gIFwiZnJ1aXRzXCIsXG4gIFwiY2Fyc1wiLFxuICBcImZhbWlseVwiLFxuICBcImNhdHNcIixcbiAgXCJhbWF6aW5nIHN0b3JpZXNcIixcbiAgXCJ0YXhlcywgYm9vLi4uXCIsXG5dO1xuXG5leHBvcnQgeyBtZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuXG5jb25zdCBhcHAgPSBjcmVhdGVFbGVtZW50KCdoMScpO1xuYXBwLnRleHRDb250ZW50ID0gXCJoZWxsbyFcIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwKTtcblxuXG5cbmNvbnN0IGNyZWF0ZU1lbnVCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogXCJtZW51LXdyYXBwZXJcIixcbiAgICBjbGFzczogXCJcIixcbiAgfSk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59OyBcblxuY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICBpZDogJ21lbnUnXG4gIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9