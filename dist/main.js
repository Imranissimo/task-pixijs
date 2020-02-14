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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\nvar canvas = document.getElementById('mycanvas');\nvar app = new PIXI.Application({\n  view: canvas,\n  width: window.innerWidth / 2,\n  height: window.innerHeight / 1.7\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/colors.js":
/*!**********************************!*\
  !*** ./src/components/colors.js ***!
  \**********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\nvar colors = [0xFF0000, 0xFFFFFF, 0xEDA00F, 0xFFF000, 0xAAFF00, 0x00FFB6, 0x00ECFF, 0x0087FF, 0x3E00FF, 0xBD00FF, 0xFF00D4];\n\n//# sourceURL=webpack:///./src/components/colors.js?");

/***/ }),

/***/ "./src/components/drawCircle.js":
/*!**************************************!*\
  !*** ./src/components/drawCircle.js ***!
  \**************************************/
/*! exports provided: genCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genCircle\", function() { return genCircle; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/components/colors.js\");\n\nvar genCircle = function genCircle() {\n  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var circle = new PIXI.Graphics();\n  circle.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n  x ? x : x = Math.floor(Math.random() * (window.innerWidth / 2 - 100 - 100) + 100);\n  y ? y : y = -50;\n  circle.drawCircle(x, y, 40);\n  circle.endFill();\n  circle.interactive = true;\n  circle.buttonMode = true;\n\n  circle.changeColor = function () {\n    circle.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n    circle.drawCircle(x, y, 40);\n    circle.endFill();\n  };\n\n  circle.type = 'circle';\n  return circle;\n};\n\n//# sourceURL=webpack:///./src/components/drawCircle.js?");

/***/ }),

/***/ "./src/components/drawEllipse.js":
/*!***************************************!*\
  !*** ./src/components/drawEllipse.js ***!
  \***************************************/
/*! exports provided: genEllipse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genEllipse\", function() { return genEllipse; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/components/colors.js\");\n\nvar genEllipse = function genEllipse() {\n  var ellipse = new PIXI.Graphics();\n  ellipse.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n  var x = Math.floor(Math.random() * (window.innerWidth / 2 - 100 - 100) + 100);\n  var y = -50;\n  ellipse.drawEllipse(x, y, 60, 40);\n  ellipse.endFill();\n  ellipse.interactive = true;\n  ellipse.buttonMode = true;\n\n  ellipse.changeColor = function () {\n    ellipse.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n    ellipse.drawEllipse(x, y, 60, 40);\n    ellipse.endFill();\n  };\n\n  ellipse.type = 'ellipse';\n  return ellipse;\n};\n\n//# sourceURL=webpack:///./src/components/drawEllipse.js?");

/***/ }),

/***/ "./src/components/drawHexagon.js":
/*!***************************************!*\
  !*** ./src/components/drawHexagon.js ***!
  \***************************************/
/*! exports provided: genHexagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genHexagon\", function() { return genHexagon; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/components/colors.js\");\n\nvar genHexagon = function genHexagon() {\n  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var hexagon = new PIXI.Graphics();\n  hexagon.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n  x ? x : x = Math.floor(Math.random() * (window.innerWidth / 2 - 100 - 100) + 100);\n  y ? y : y = -130;\n  var xArr = [25, 0, 20, 80, 100, 75];\n  var yArr = [50, 90, 130, 130, 90, 50];\n\n  var drawHexagon = function drawHexagon() {\n    hexagon.moveTo(xArr[0], yArr[0]);\n\n    for (var i = 1; i < xArr.length; i++) {\n      hexagon.lineTo(xArr[i], yArr[i]);\n    }\n  };\n\n  drawHexagon();\n\n  var area = function area() {\n    var sum = 0;\n    var arrsLen = xArr.length;\n\n    for (var i = 0; i < arrsLen - 1; i++) {\n      sum += xArr[i] * yArr[i + 1] - yArr[i] * xArr[i + 1];\n    }\n\n    sum += xArr[arrsLen - 1] * yArr[0] - yArr[arrsLen - 1] * xArr[0];\n    return Math.abs(sum / 2);\n  };\n\n  hexagon.area = area();\n  hexagon.position.x = x;\n  hexagon.position.y = y;\n  hexagon.interactive = true;\n  hexagon.buttonMode = true;\n\n  hexagon.changeColor = function () {\n    hexagon.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n    drawHexagon();\n    hexagon.endFill();\n  };\n\n  hexagon.type = 'hexagon';\n  return hexagon;\n};\n\n//# sourceURL=webpack:///./src/components/drawHexagon.js?");

/***/ }),

/***/ "./src/components/drawPentagon.js":
/*!****************************************!*\
  !*** ./src/components/drawPentagon.js ***!
  \****************************************/
/*! exports provided: genPentagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genPentagon\", function() { return genPentagon; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/components/colors.js\");\n\nvar genPentagon = function genPentagon() {\n  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var pentagon = new PIXI.Graphics();\n  pentagon.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n  x ? x : x = Math.floor(Math.random() * (window.innerWidth / 2 - 100 - 100) + 100);\n  y ? y : y = -150;\n  var xArr = [50, 0, 20, 80, 100];\n  var yArr = [50, 90, 150, 150, 90];\n\n  var drawPentagon = function drawPentagon() {\n    pentagon.moveTo(xArr[0], yArr[0]);\n\n    for (var i = 1; i < xArr.length; i++) {\n      pentagon.lineTo(xArr[i], yArr[i]);\n    }\n  };\n\n  drawPentagon();\n\n  var area = function area() {\n    var sum = 0;\n    var arrsLen = xArr.length;\n\n    for (var i = 0; i < arrsLen - 1; i++) {\n      sum += xArr[i] * yArr[i + 1] - yArr[i] * xArr[i + 1];\n    }\n\n    sum += xArr[arrsLen - 1] * yArr[0] - yArr[arrsLen - 1] * xArr[0];\n    return Math.abs(sum / 2);\n  };\n\n  pentagon.area = area();\n  pentagon.position.x = x;\n  pentagon.position.y = y;\n  pentagon.interactive = true;\n  pentagon.buttonMode = true;\n\n  pentagon.changeColor = function () {\n    pentagon.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n    drawPentagon();\n    pentagon.endFill();\n  };\n\n  pentagon.type = 'pentagon';\n  return pentagon;\n};\n\n//# sourceURL=webpack:///./src/components/drawPentagon.js?");

/***/ }),

/***/ "./src/components/drawRectangle.js":
/*!*****************************************!*\
  !*** ./src/components/drawRectangle.js ***!
  \*****************************************/
/*! exports provided: genRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genRectangle\", function() { return genRectangle; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/components/colors.js\");\n\nvar genRectangle = function genRectangle() {\n  var rectangle = new PIXI.Graphics();\n  rectangle.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n  var x = Math.floor(Math.random() * (window.innerWidth / 2 - 100 - 100) + 100);\n  var y = -80;\n  rectangle.drawRect(x, y, 80, 80);\n  rectangle.endFill();\n  rectangle.interactive = true;\n  rectangle.buttonMode = true;\n\n  rectangle.changeColor = function () {\n    rectangle.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n    rectangle.drawRect(x, y, 80, 80);\n    rectangle.endFill();\n  };\n\n  rectangle.type = 'rectangle';\n  return rectangle;\n};\n\n//# sourceURL=webpack:///./src/components/drawRectangle.js?");

/***/ }),

/***/ "./src/components/drawTriangle.js":
/*!****************************************!*\
  !*** ./src/components/drawTriangle.js ***!
  \****************************************/
/*! exports provided: genTriangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genTriangle\", function() { return genTriangle; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/components/colors.js\");\n\nvar genTriangle = function genTriangle() {\n  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var triangle = new PIXI.Graphics();\n  triangle.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n  x ? x : x = Math.floor(Math.random() * (window.innerWidth / 2 - 100 - 100) + 100);\n  y ? y : y = -250;\n  var xArr = [50, 120, 20];\n  var yArr = [150, 250, 220];\n\n  var drawTriangle = function drawTriangle() {\n    triangle.moveTo(xArr[0], yArr[0]);\n\n    for (var i = 1; i < xArr.length; i++) {\n      triangle.lineTo(xArr[i], yArr[i]);\n    }\n  };\n\n  drawTriangle();\n\n  var area = function area() {\n    var sum = 0;\n    var arrsLen = xArr.length;\n\n    for (var i = 0; i < arrsLen - 1; i++) {\n      sum += xArr[i] * yArr[i + 1] - yArr[i] * xArr[i + 1];\n    }\n\n    sum += xArr[arrsLen - 1] * yArr[0] - yArr[arrsLen - 1] * xArr[0];\n    return Math.abs(sum / 2);\n  };\n\n  triangle.area = area();\n  triangle.position.x = x;\n  triangle.position.y = y;\n  triangle.interactive = true;\n  triangle.buttonMode = true;\n\n  triangle.changeColor = function () {\n    triangle.beginFill(_colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].length)]);\n    drawTriangle();\n    triangle.endFill();\n  };\n\n  triangle.type = 'triangle';\n  return triangle;\n};\n\n//# sourceURL=webpack:///./src/components/drawTriangle.js?");

/***/ }),

/***/ "./src/components/shapes.js":
/*!**********************************!*\
  !*** ./src/components/shapes.js ***!
  \**********************************/
/*! exports provided: shapes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shapes\", function() { return shapes; });\n/* harmony import */ var _drawRectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawRectangle */ \"./src/components/drawRectangle.js\");\n/* harmony import */ var _drawCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawCircle */ \"./src/components/drawCircle.js\");\n/* harmony import */ var _drawEllipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawEllipse */ \"./src/components/drawEllipse.js\");\n/* harmony import */ var _drawTriangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawTriangle */ \"./src/components/drawTriangle.js\");\n/* harmony import */ var _drawPentagon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawPentagon */ \"./src/components/drawPentagon.js\");\n/* harmony import */ var _drawHexagon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawHexagon */ \"./src/components/drawHexagon.js\");\n\n\n\n\n\n //import { genRandomShape } from './drawRandomShape';\n\nvar shapes = [_drawTriangle__WEBPACK_IMPORTED_MODULE_3__[\"genTriangle\"], _drawRectangle__WEBPACK_IMPORTED_MODULE_0__[\"genRectangle\"], _drawCircle__WEBPACK_IMPORTED_MODULE_1__[\"genCircle\"], _drawEllipse__WEBPACK_IMPORTED_MODULE_2__[\"genEllipse\"], _drawPentagon__WEBPACK_IMPORTED_MODULE_4__[\"genPentagon\"], _drawHexagon__WEBPACK_IMPORTED_MODULE_5__[\"genHexagon\"]];\n\n//# sourceURL=webpack:///./src/components/shapes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: view */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony import */ var _components_shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shapes */ \"./src/components/shapes.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nvar gravityAmountView = document.getElementById('grav');\nvar figuresAmountView = document.getElementById('figures');\nvar gravityIncreaseButton = document.getElementById('plus-grav');\nvar gravityDecreaseButton = document.getElementById('minus-grav');\nvar increaseAmoutOfFiguresButton = document.getElementById('plus-figure');\nvar decreaseAmoutOfFiguresButton = document.getElementById('minus-figure');\nvar figuresAmount = 2;\nvar gravityAmount = 1;\ngravityAmountView.innerHTML = gravityAmount;\nfiguresAmountView.innerHTML = figuresAmount;\n\ndecreaseAmoutOfFiguresButton.onclick = function () {\n  if (figuresAmount > 1) {\n    figuresAmountView.innerHTML = --figuresAmount;\n  }\n};\n\nincreaseAmoutOfFiguresButton.onclick = function () {\n  figuresAmountView.innerHTML = ++figuresAmount;\n};\n\ngravityDecreaseButton.onclick = function () {\n  if (gravityAmount > 1) {\n    gravityAmountView.innerHTML = --gravityAmount;\n  }\n};\n\ngravityIncreaseButton.onclick = function () {\n  gravityAmountView.innerHTML = ++gravityAmount;\n};\n\nvar view = {\n  loadGame: function loadGame() {\n    _app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].ticker.add(function () {\n      var shape = _components_shapes__WEBPACK_IMPORTED_MODULE_0__[\"shapes\"][Math.floor(Math.random() * _components_shapes__WEBPACK_IMPORTED_MODULE_0__[\"shapes\"].length)]();\n      shape.on('pointerdown', function () {\n        shape.clear();\n        _app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].stage.children.forEach(function (child) {\n          if (child.type === shape.type) {\n            child.changeColor();\n          }\n        });\n        shape.destroy();\n      });\n      if (_app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].stage.children.length < figuresAmount) _app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].stage.addChild(shape);\n    });\n    _app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].ticker.add(function () {\n      document.getElementById('numSh').innerHTML = _app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].stage.children.length;\n      _app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].stage.children.forEach(function (shape) {\n        // console.log(shape.type)\n        shape.y += gravityAmount;\n\n        if (shape.position.y >= _app__WEBPACK_IMPORTED_MODULE_1__[\"app\"].renderer.height) {\n          shape.destroy();\n        }\n      });\n    });\n  }\n};\nview.loadGame();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });