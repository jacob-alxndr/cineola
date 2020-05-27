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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _modules_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _modules_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);
// 1.Importing our own JS files





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
// 1. Selectors
 // 2. Actions
// function changeColor(){
//  const root = document.documentElement;
//     const colors = [['27c0ca', 'd19563'], ['1175b7', 'b7a37e'], ['ac72d6', 'ddb54f'], ['e9aee2', 'cfca57'], ['f3604b', '7aab5b']]
//     const randomNumber = Math.floor(Math.random() * colors.length)
//     const [color1, color2] = colors[randomNumber]
//     root.style.setProperty('--color-primary', `#${color1}`)
//     root.style.setProperty('--color-secondary', `#${color2}`)
// }

var color1;
var color2;
setInterval(changeColor(), 3000);

function changeColor() {
  var root = document.documentElement;
  var colors = ['27c0ca', 'd19563', '1175b7', 'b7a37e', 'ac72d6', 'ddb54f', 'e9aee2', 'cfca57', 'f3604b', '7aab5b'];
  randomNumbers();

  function randomNumbers() {
    var randomNumber1 = Math.floor(Math.random() * colors.length);
    var randomNumber2 = Math.floor(Math.random() * colors.length);

    if (randomNumber1 == randomNumber2) {
      randomNumbers();
    } else {
      color1 = colors[randomNumber1];
      color2 = colors[randomNumber2];
    }
  }

  root.style.setProperty('--color-primary', "#".concat(color1));
  root.style.setProperty('--color-secondary', "#".concat(color2));
} // 3. Events


window.setInterval(function () {
  changeColor();
}, 10000);
window.addEventListener('load', changeColor);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
var elements = {
  htmlTag: document.querySelector('html'),
  aboutLink: document.querySelector('.about'),
  aboutText: document.querySelector('.aboutText')
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
// 1. Selectors
 // 2. Actions

function openAbout(e) {
  e.preventDefault();
  e.currentTarget.previousElementSibling.classList.add('open');
} // 3. Events


_DOMelements__WEBPACK_IMPORTED_MODULE_0__["elements"].aboutLink.addEventListener('click', openAbout);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// // // 1. Selectors
// import { elements } from './DOMelements';
//
// // // 2. Actions
// const wait = time => new Promise(resolve => setTimeout(resolve, time));
// function generateNumber(min= 50, max=101, _random = Math.random()){
//     const randomNumber = Math.floor(_random * (max - min) + min)
//     return randomNumber
// }
// async function type(el){
// // const el = document.querySelector('h1')
//
// const word = el.textContent
// el.textContent = ''
// const {min, max} = el.dataset
// let str = ''
//
// for (const letter of word){
//
//     str = str+letter
//     await wait(generateNumber(min, max))
//     el.textContent= str
// }
//
// }
// // 3. Events
// window.addEventListener('load', function(){
//     const h1 = document.querySelector('h1')
//     const h2 = document.querySelector('h3')
//
//     type(h1)
//     type(h2)
// })

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);