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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Mvvm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Mvvm */ \"./src/js/Mvvm.js\");\n\nvar mv = new _js_Mvvm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#app',\n  data: {\n    val: '你好',\n    message: {\n      name: 'bob',\n      age: 23\n    }\n  }\n});\n\nwindow.onload = function () {\n  document.getElementById('btn').addEventListener('click', function (e) {\n    mv.$data.message.name = 'mmm';\n  });\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Mvvm.js":
/*!************************!*\
  !*** ./src/js/Mvvm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _complier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complier */ \"./src/js/complier.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \"./src/js/observer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar Mvvm = function Mvvm(ops) {\n  _classCallCheck(this, Mvvm);\n\n  this.$el = ops.el;\n  this.$data = ops.data;\n  new _observer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$data);\n  new _complier__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.$el, this);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mvvm);\n\n//# sourceURL=webpack:///./src/js/Mvvm.js?");

/***/ }),

/***/ "./src/js/complier.js":
/*!****************************!*\
  !*** ./src/js/complier.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ \"./src/js/watcher.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//Dom解析类\n\n\nvar Compiler =\n/*#__PURE__*/\nfunction () {\n  function Compiler(el, vm) {\n    _classCallCheck(this, Compiler);\n\n    this.el = this.isElementNode(el) ? el : document.querySelector(el);\n    this.vm = vm;\n\n    if (this.el) {\n      var fragment = this.node2Fragment(this.el); //将真实Dom移入内存中，即转为fragment\n      //解析模版 ，编译\n\n      this.compile(fragment); //将编译好的fragment  append到this.el\n\n      this.el.appendChild(fragment);\n    }\n  } //判断是否为元素节点\n\n\n  _createClass(Compiler, [{\n    key: \"isElementNode\",\n    value: function isElementNode(node) {\n      return node.nodeType === 1;\n    } //将el的内容全部放到内存中，减少真实Dom访问，优化性能\n\n  }, {\n    key: \"node2Fragment\",\n    value: function node2Fragment(node) {\n      var fragment = document.createDocumentFragment();\n      var firstChild;\n\n      while (firstChild = node.firstChild) {\n        fragment.append(firstChild);\n      }\n\n      return fragment;\n    } //判断attr是否为指令\n\n  }, {\n    key: \"isDirective\",\n    value: function isDirective(attr) {\n      return attr.includes('v-');\n    } //编译模版\n\n  }, {\n    key: \"compile\",\n    value: function compile(fragment) {\n      var _this = this;\n\n      var childNodes = fragment.childNodes;\n      console.log(Array.from(childNodes));\n      Array.from(childNodes).forEach(function (node) {\n        //Array.from方法，根据类数组对象创建新数组\n        if (_this.isElementNode(node)) {\n          //编译节点\n          _this.compileElement(node); //递归调用this.complie,编译子节点\n\n\n          _this.compile(node);\n        } else {\n          //编译文本节点\n          _this.compileText(node);\n        }\n      });\n    } //编译节点元素\n\n  }, {\n    key: \"compileElement\",\n    value: function compileElement(node) {\n      var _this2 = this;\n\n      var attrs = node.attributes;\n      Array.from(attrs).forEach(function (attr) {\n        var attrName = attr.name;\n\n        if (_this2.isDirective(attrName)) {\n          var expr = attr.value; //指令值\n\n          var _attrName$split = attrName.split('-'),\n              _attrName$split2 = _slicedToArray(_attrName$split, 2),\n              type = _attrName$split2[1];\n\n          compileUtil[type](node, _this2.vm, expr);\n        }\n      });\n    } //编译文本节点\n\n  }, {\n    key: \"compileText\",\n    value: function compileText(node) {\n      var expr = node.textContent;\n      var reg = /\\{\\{([^}]+)\\}\\}/g;\n\n      if (reg.test(expr)) {\n        compileUtil['text'](node, this.vm, expr);\n      }\n    }\n  }]);\n\n  return Compiler;\n}();\n\nvar compileUtil = {\n  text: function text(node, vm, expr) {\n    //文本\n    console.log('text', expr);\n    var updater = this.updater['textUpdate'];\n    new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vm, expr.replace(/^\\{\\{|\\}\\}$/g, ''), function (val) {\n      updater && updater(node, val);\n    });\n    updater && updater(node, getTextValue(vm, expr));\n  },\n  model: function model(node, vm, expr) {\n    var _this3 = this;\n\n    //输入框\n    var updater = this.updater['modelUpdate'];\n    new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vm, expr, function (val) {\n      updater && updater(node, val);\n    });\n    node.addEventListener('input', function (e) {\n      var newValue = e.target.value;\n\n      _this3.setVal(vm, expr, newValue);\n    });\n    updater && updater(node, getValue(vm, expr));\n  },\n  updater: {\n    textUpdate: function textUpdate(node, value) {\n      node.textContent = value;\n    },\n    modelUpdate: function modelUpdate(node, value) {\n      node.value = value;\n    }\n  },\n  setVal: function setVal(vm, expr, newValue) {\n    console.log(expr);\n    expr = expr.split('.');\n    expr.reduce(function (prev, next) {\n      if (_typeof(prev[next]) === 'object') {\n        return prev[next];\n      }\n\n      prev[next] = newValue;\n      return prev;\n    }, vm.$data);\n  }\n}; // 绑定key上对应的值，从vm.$data上获取\n\nvar getValue = function getValue(vm, expr) {\n  expr = expr.split('.');\n  return expr.reduce(function (prev, next) {\n    return prev[next];\n  }, vm.$data);\n};\n\nvar getTextValue = function getTextValue(vm, expr) {\n  //replace的第二个参数是函数的情况下，该函数在匹配成功的情况下接收一个数组\n  return expr.replace(/\\{\\{([^}]+)\\}\\}/g, function () {\n    return getValue(vm, arguments.length <= 1 ? undefined : arguments[1]);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Compiler);\n\n//# sourceURL=webpack:///./src/js/complier.js?");

/***/ }),

/***/ "./src/js/dep.js":
/*!***********************!*\
  !*** ./src/js/dep.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * 消息订阅器\n */\nvar Dep =\n/*#__PURE__*/\nfunction () {\n  function Dep() {\n    _classCallCheck(this, Dep);\n\n    this.subs = [];\n  }\n\n  _createClass(Dep, [{\n    key: \"appendSub\",\n    value: function appendSub(watcher) {\n      this.subs.push(watcher);\n    }\n  }, {\n    key: \"notify\",\n    value: function notify(val) {\n      this.subs.forEach(function (watcher) {\n        watcher.update(val);\n      });\n    }\n  }, {\n    key: \"clearSubs\",\n    value: function clearSubs() {\n      this.subs.length = 0;\n    }\n  }]);\n\n  return Dep;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dep);\n\n//# sourceURL=webpack:///./src/js/dep.js?");

/***/ }),

/***/ "./src/js/observer.js":
/*!****************************!*\
  !*** ./src/js/observer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/js/dep.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer(data) {\n    _classCallCheck(this, Observer);\n\n    this.observe(data);\n  }\n  /**\n   * 劫持对象属性\n   */\n\n\n  _createClass(Observer, [{\n    key: \"observe\",\n    value: function observe(data) {\n      var _this2 = this;\n\n      if (!data || _typeof(data) !== 'object') {\n        return;\n      }\n\n      Object.keys(data).forEach(function (key) {\n        _this2.defineReactive(data, key, data[key]); //深度递归劫持\n\n\n        _this2.observe(data[key]);\n      });\n    }\n  }, {\n    key: \"defineReactive\",\n    value: function defineReactive(data, key, value) {\n      var _this = this;\n\n      this.dep = new _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      Object.defineProperty(data, key, {\n        enumerable: true,\n        configurable: true,\n        get: function get() {\n          if (_dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target) {\n            _this.dep.appendSub(_dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target);\n\n            _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target = null;\n          }\n\n          return value;\n        },\n        set: function set(val) {\n          _this.observe(val); //如果新值是对象，继续深度劫持\n\n\n          console.log('value changed', val);\n          value = val;\n\n          _this.dep.notify();\n        }\n      });\n    }\n  }]);\n\n  return Observer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observer);\n\n//# sourceURL=webpack:///./src/js/observer.js?");

/***/ }),

/***/ "./src/js/watcher.js":
/*!***************************!*\
  !*** ./src/js/watcher.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/js/dep.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Watcher =\n/*#__PURE__*/\nfunction () {\n  function Watcher(vm, expr, cb) {\n    _classCallCheck(this, Watcher);\n\n    this.vm = vm;\n    this.expr = expr;\n    this.cb = cb;\n    this.value = this.get(); //先取一下老值，将watcher添加到dep中\n  }\n\n  _createClass(Watcher, [{\n    key: \"getValue\",\n    value: function getValue(vm, expr) {\n      expr = expr.split('.');\n      return expr.reduce(function (prev, next) {\n        return prev[next];\n      }, vm.$data);\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target = this;\n      console.log('ejjj', this.expr.indexOf('{{') > -1);\n      var value = this.getValue(this.vm, this.expr); //重置订阅者\n\n      _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target = null;\n      return value;\n    }\n    /**\n     * 触发绑定的回调\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var newValue = this.getValue(this.vm, this.expr);\n\n      if (newValue !== this.value) {\n        this.cb && this.cb(newValue);\n      }\n    }\n  }]);\n\n  return Watcher;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);\n\n//# sourceURL=webpack:///./src/js/watcher.js?");

/***/ })

/******/ });