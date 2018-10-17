/*!
 *  xyy-sdk v1.0.5
 *  By https://github.com/dwqdaiwenqi 
 *  Github: https://github.com/dwqdaiwenqi/xyy-sdk
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xyy"] = factory();
	else
		root["xyy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.2.5.7@core-js/library/fn/object/assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/fn/object/assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/.2.5.7@core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/fn/object/create.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/fn/object/create.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/.2.5.7@core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/fn/object/keys.js":
/*!***************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/fn/object/keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/.2.5.7@core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/fn/symbol/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/fn/symbol/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/.2.5.7@core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/.2.5.7@core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/.2.5.7@core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/.2.5.7@core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/fn/symbol/iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/fn/symbol/iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/.2.5.7@core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/.2.5.7@core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/.2.5.7@core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_a-function.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_a-function.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_add-to-unscopables.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_add-to-unscopables.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_an-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_an-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.7@core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_array-includes.js":
/*!************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_array-includes.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/.2.5.7@core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/.2.5.7@core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_cof.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_cof.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_core.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_core.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_ctx.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_ctx.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/.2.5.7@core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_defined.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_defined.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_descriptors.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_descriptors.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/.2.5.7@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_dom-create.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_dom-create.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.7@core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_enum-bug-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_enum-bug-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_enum-keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_enum-keys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.7@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/.2.5.7@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.7@core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_export.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_export.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.2.5.7@core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.7@core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.7@core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_fails.js":
/*!***************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_fails.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_global.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_global.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_has.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_has.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_hide.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_hide.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.7@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.7@core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.7@core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_html.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_html.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_ie8-dom-define.js":
/*!************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_ie8-dom-define.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.7@core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/.2.5.7@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/.2.5.7@core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_iobject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_iobject.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.2.5.7@core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_is-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_is-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.2.5.7@core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_is-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_is-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_iter-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_iter-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/.2.5.7@core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.7@core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.2.5.7@core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/.2.5.7@core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.7@core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_iter-define.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_iter-define.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.2.5.7@core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.7@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.2.5.7@core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.7@core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.7@core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/.2.5.7@core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.2.5.7@core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/.2.5.7@core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.7@core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_iter-step.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_iter-step.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_iterators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_iterators.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_library.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_library.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_meta.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_meta.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.7@core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.7@core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.7@core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.7@core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/.2.5.7@core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-assign.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.7@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/.2.5.7@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.7@core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.7@core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/.2.5.7@core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/.2.5.7@core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.7@core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/.2.5.7@core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.2.5.7@core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.2.5.7@core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/.2.5.7@core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/.2.5.7@core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-dp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-dp.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.7@core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.2.5.7@core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.2.5.7@core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.7@core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-dps.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-dps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.7@core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.7@core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.7@core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.7@core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-gopd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-gopd.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.7@core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.7@core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.2.5.7@core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.7@core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.2.5.7@core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.7@core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-gopn-ext.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-gopn-ext.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/.2.5.7@core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-gopn.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-gopn.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.2.5.7@core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.2.5.7@core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-gops.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-gops.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-gpo.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-gpo.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.7@core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.7@core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.2.5.7@core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-keys-internal.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-keys-internal.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.7@core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/.2.5.7@core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.2.5.7@core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-keys.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.2.5.7@core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.2.5.7@core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-pie.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-pie.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_object-sap.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_object-sap.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.7@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/.2.5.7@core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_property-desc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_property-desc.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_redefine.js":
/*!******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_redefine.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.7@core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_set-to-string-tag.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_set-to-string-tag.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.7@core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.7@core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.7@core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_shared-key.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_shared-key.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.2.5.7@core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.7@core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_shared.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_shared.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/.2.5.7@core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_string-at.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_string-at.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.2.5.7@core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.2.5.7@core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_to-absolute-index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_to-absolute-index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.2.5.7@core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_to-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_to-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/.2.5.7@core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.2.5.7@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_to-length.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_to-length.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.2.5.7@core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_to-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_to-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.2.5.7@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_to-primitive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.7@core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_wks-define.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_wks-define.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.7@core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.2.5.7@core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.2.5.7@core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.7@core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_wks-ext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_wks-ext.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.7@core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/_wks.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/_wks.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/.2.5.7@core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.7@core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es6.array.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es6.array.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/.2.5.7@core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/.2.5.7@core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.7@core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/.2.5.7@core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es6.object.assign.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es6.object.assign.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.7@core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/.2.5.7@core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es6.object.create.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es6.object.create.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.7@core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/.2.5.7@core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es6.object.keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es6.object.keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.7@core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.7@core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/.2.5.7@core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es6.object.to-string.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es6.object.to-string.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es6.string.iterator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es6.string.iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/.2.5.7@core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/.2.5.7@core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es6.symbol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es6.symbol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.7@core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.7@core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.7@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.2.5.7@core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/.2.5.7@core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/.2.5.7@core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.2.5.7@core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.2.5.7@core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.7@core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.7@core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.2.5.7@core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/.2.5.7@core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/.2.5.7@core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/.2.5.7@core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.7@core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.7@core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.7@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.2.5.7@core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.7@core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/.2.5.7@core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/.2.5.7@core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/.2.5.7@core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.7@core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.7@core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/.2.5.7@core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.7@core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/.2.5.7@core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/.2.5.7@core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.7@core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es7.symbol.async-iterator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es7.symbol.async-iterator.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.2.5.7@core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/es7.symbol.observable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/es7.symbol.observable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.2.5.7@core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/.2.5.7@core-js/library/modules/web.dom.iterable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.2.5.7@core-js/library/modules/web.dom.iterable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/.2.5.7@core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.7@core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.7@core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.7@core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.7@core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/.2.5.7@core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/.2.5.7@core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/keys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/.2.5.7@core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/.2.5.7@core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/symbol/iterator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/symbol/iterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/.2.5.7@core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/typeof.js":
/*!**************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/typeof.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/.6.26.0@babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/.6.26.0@babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/.6.26.0@babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sdk = {};

sdk.gameId = 0;
sdk.token = null;
sdk.gameInfo = null;
sdk.uid = null;
sdk.time = null;
sdk.username = null;
sdk.isFocus = false;
sdk.uswx = false;
sdk.wxappId = '';

sdk.isWeixin = function () {
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
};
sdk.getURLQuery = function (url) {
    var query = {};
    if (url) {
        var search = url.split("?")[1];
        if (search) {
            var pairs = search.split("&");
            for (var i = 0; i < pairs.length; i++) {
                query[pairs[i].split("=")[0]] = unescape(pairs[i].split("=")[1]);
            }
        }
    }
    return query;
};
sdk.getURLVar = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    return r != null ? unescape(r[2]) : null;
};
sdk.setURLVar = function (url, key, value) {
    if (url) {
        var urlList = url.split("#");
        var params = {};
        var query = urlList[0].split("?")[1];
        var result = urlList[0].split("?")[0] + "?";
        if (query) {
            query = query.split("&");
            for (var i in query) {
                var vars = query[i].split("=");
                params[vars[0]] = vars[1];
            }
        }
        if (value) {
            params[key] = value;
        } else {
            params[key] = null;
            delete params[key];
        }
        var first = true;
        for (var i in params) {
            result += (first ? "" : "&") + i + "=" + (params[i] ? params[i] : "");
            first = false;
        }
        return result + (urlList[1] ? "#" + urlList[1] : "");
    }
    return "";
};
sdk.cleanURLVar = function (url) {
    if (url) {
        return url.split("?")[0];
    }
    return "";
};

sdk.buildURL = function (url, args) {
    if (url) {
        var urlList = url.split("#");
        var params = {};
        var query = urlList[0].split("?")[1];
        var result = urlList[0].split("?")[0] + "?";
        if (query) {
            query = query.split("&");
            for (var i in query) {
                var vars = query[i].split("=");
                params[vars[0]] = vars[1];
            }
        }
        for (var i in args) {
            if (args[i]) {
                params[i] = args[i];
            }
        }
        var first = true;
        for (var i in params) {
            result += (first ? "" : "&") + i + "=" + (params[i] ? params[i] : "");
            first = false;
        }
        return result + (urlList[1] ? "#" + urlList[1] : "");
    }
    return "";
};

sdk.dialog = function (txt, callback) {
    //错误提示
    var html = '<div id="dialogBox" class="dialog-box max_260">';
    html += '<div class="dialog">';
    html += '<div class="dialog_hd">提示信息</div>';
    html += '<div class="dialog_bd">' + txt + "</div>";
    html += '<div class="dialog_ft">';
    html += '<a href="javascript:;">确定</a>';
    html += "</div></div></div>";
    $("body").append(html);
    $(".dialog_ft a").click(function () {
        $("#dialogBox").remove();
        if (callback) {
            callback();
        }
    });
};

sdk.closePayBox = function () {
    $("#payBox").hide();
};

sdk.loadPayBox = function (gid, uid, appusername, sid, openuid, porductid, money, resource, app_order_id, server_name, product_name, product_desc) {

    var msg = {};
    window.parent.postMessage({
        cmd: "pay",
        gid: gid,
        uid: uid,
        appusername: appusername,
        sid: sid,
        openuid: openuid,
        porductid: porductid,
        resource: resource,
        money: money,
        app_order_id: app_order_id || 1,
        server_name: server_name || '',
        product_name: product_name || '',
        product_desc: product_desc || ''
    }, "*");
};

sdk.userbehavior = function (dataType, serverID, serverName, userId, roleID, roleName, roleLevel, moneyNum) {
    var msg = {};
    window.parent.postMessage({
        cmd: "userbehavior",
        dataType: dataType, // 上报类型,1(选择服务器)，2(创建角色)，3(进入游戏)、4(等级提升)、5(退出游戏)
        serverID: serverID, // 区服ID
        serverName: serverName, // 区服名,
        userId: userId, // 贪玩平台用户ID
        roleID: roleID, // 角色ID,
        roleName: roleName, // 角色名,
        roleLevel: roleLevel, // 角色等级,
        moneyNum: moneyNum //用户元宝数
    }, "*");
};

sdk.createRole = function (uid, sid, role, roleId) {
    var msg = {};

    window.parent.postMessage({
        cmd: 'createRole',
        uid: uid,
        server: sid,
        role: role,
        roleId: roleId
    }, "*");
};

sdk.gamelogin = function (uid, gid, sid, roleid, rolename) {
    var msg = {};
    window.parent.postMessage({
        cmd: 'loginGameData',
        uid: uid,
        gid: gid,
        sid: sid,
        roleid: roleid || '',
        rolename: rolename || ''
    }, "*");
};

sdk.sendchatlog = function (serverid, rolename, servername, channel, channelname, ouid, content, chattype, typename, platid, gameid, touserid, payamount) {
    var msg = {};
    window.parent.postMessage({
        cmd: 'sendchatlog',
        serverid: serverid,
        rolename: rolename,
        servername: servername,
        channel: channel,
        channelname: channelname,
        ouid: ouid,
        content: content,
        chattype: chattype,
        typename: typename,
        platid: platid,
        gameid: gameid,
        touserid: touserid,
        payamount: payamount
    }, "*");
};
sdk.sendchats = function (serverid, rolename, servername, channel, channelname, ouid, content, chattype, typename, platid, gameid, touserid, payamount) {
    $.getJSON('http://www.xy.com/h5/chatmonitor/sendchats?callback=?', { serverid: serverid, rolename: rolename, servername: servername, channel: channel, channelname: channelname, ouid: ouid, content: content, chattype: chattype, typename: typename, platid: platid, gameid: gameid, touserid: touserid, payamount: payamount }, function (res) {});
};

sdk.sendrole = function (uid, gid, sid, roleid) {
    var msg = {};
    window.parent.postMessage({
        cmd: 'sendrole',
        uid: uid,
        gid: gid,
        sid: sid,
        roleid: roleid
    }, "*");
};

//创角统计
sdk.createPlayer = function (uid, server, role, roleId) {
    if (!uid || !server || !role) {
        return false;
    }
    $.ajax({
        'url': "/h5/game/createRole",
        'type': 'POST',
        'data': { uid: uid, server: server, role: role, gameid: sdk.gameId, roleId: roleId },
        'success': function success(data) {},
        'error': function error(data) {}
    });
};

//登录游戏统计
sdk.loginGameData = function (uid, gid, sid, roleid, rolename) {
    if (!uid || !gid || !sid) {
        return false;
    }
    $.ajax({
        'url': "/h5/game/logingame",
        'type': 'GET',
        'data': { uid: uid, sid: sid, gid: sdk.gameId, roleid: roleid, rolename: rolename },
        'success': function success(data) {},
        'error': function error(data) {}
    });
};

sdk.upgrade = function (uid, sid, role, roleId, sname, level) {
    var msg = {};
    window.parent.postMessage({
        cmd: 'upgrade',
        uid: uid,
        server: sid,
        role: role,
        roleId: roleId,
        sname: sname || '',
        level: level || ''
    }, "*");
};

//离开游戏弹框
sdk.leaveGame = function () {
    var ap = 1;
    function lgame() {
        if (ap) {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                $("body").append('<div class="close"><div class="dialog">' + '<a href="http://www.xy.com/h5platform/index.html" class="index" style="margin-left: 35%">进入首页</a>' + '</div></div>');
            } else if (!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/)) {
                $("body").append('<div class="close"><div class="dialog">' + '<a href="javascript:;" class="leave">毅然退出</a><a href="http://www.xy.com/h5platform/index.html" class="index">进入首页</a>' + '</div></div>');
            }
            if (sdk.gameInfo && sdk.gameInfo.allowuser_show == "1") {
                $('.close .dialog .index').attr('href', 'http://www.xy.com/miniapps/index.html?gameid=' + sdk.gameId).html('切换账号');
            }
            ap = 0;
        } else {
            $('.close').fadeIn();
        }
    }
    //设置cookie
    function setCookie(name, value) {
        var Days = 10;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    //读取cookie
    function getCookie(name) {
        var arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }

    window.history.pushState({}, null, '#forward');
    if (window.history && window.history.pushState) {
        setTimeout(function () {
            $(window).on('popstate', function () {
                window.history.pushState({}, null, '#forward');

                //判断是否PC
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    lgame();
                    $('.close').on('click', function (e) {
                        e.stopPropagation();
                        $(this).fadeOut();
                    });
                    $('.leave').on('click', function (e) {
                        e.stopPropagation();
                        try {
                            JS.close();
                        } catch (e) {}
                    });
                    $('.dialog').on('click', function (e) {
                        e.stopPropagation();
                    });
                    $(document).on('touchstart', function (e) {
                        if (e.target.className === 'dialog' || e.target.className === 'leave' || e.target.className === 'index') return;
                        $('.close').hide();
                    });
                }
            });
        }, 500);
    }
};

sdk.loadPay = function (gid, uid, appusername, sid, openuid, porductid, resource, money, isWx, timestamp, Str, signature, wei, app_order_id) {
    try {
        var pay_version = JS.getData('version');
    } catch (e) {
        var pay_version = 0;
    }

    var payurl = "/h5/pay/?money=" + money + "&uid=" + uid + "&app_user_name=" + encodeURIComponent(appusername) + "&resource_id=" + resource + "&product_id=" + porductid + "&openuid=" + openuid + "&app_id=" + sdk.gameId + "&sid=" + sid + '&app_order_id=' + app_order_id + '&version=' + pay_version;
    if (isWx) {
        var src = '/h5/pay/?from=weixin&money=' + money + '&uid=' + uid + '&app_user_name=' + encodeURIComponent(appusername) + '&resource_id=' + resource + '&product_id=' + porductid + '&openuid=' + openuid + '&app_id=' + sdk.gameId + '&sid=' + sid + '&app_order_id=' + app_order_id + '&version=' + pay_version;
        $.ajax({
            url: src,
            success: function success(urls) {
                var urlarr = eval('(' + urls + ')');
                $.ajax({
                    url: urlarr['url'],
                    success: function success(result) {
                        var jsons = eval('(' + result + ')');
                        var appId = jsons['extra_data']['appId'];
                        var timeStamp = jsons['extra_data']['timeStamp'];
                        var nonceStr = jsons['extra_data']['nonceStr'];
                        var pk = jsons['extra_data']['package'];
                        var signType = jsons['extra_data']['signType'];
                        var paySign = jsons['extra_data']['paySign'];
                        //
                        wx.config({
                            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: sdk.wxappId, // 必填，公众号的唯一标识
                            timestamp: timestamp, // 必填，生成签名的时间戳
                            nonceStr: Str, // 必填，生成签名的随机串
                            signature: signature, // 必填，签名，见附录1
                            jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                        wx.ready(function () {
                            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                            wx.chooseWXPay({
                                "timestamp": timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                                "nonceStr": nonceStr, // 支付签名随机串，不长于 32 位
                                "package": pk, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                                "signType": signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                                "paySign": paySign, // 支付签名
                                complete: function complete(res) {
                                    // 支付成功后的回调函数
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                        var url = '/h5/pay/paystatus?status=success&order_id=' + urlarr['order_id'] + '&wp_pid=' + urlarr['order_id'];
                                        $.getJSON(url, function (data) {});
                                    } else {
                                        var url = '/h5/pay/paystatus?status=fail&order_id=' + urlarr['order_id'] + '&wp_pid=' + urlarr['order_id'];
                                        $.getJSON(url, function (data) {});
                                    }
                                    closepay();
                                }
                            });
                        });
                    },
                    error: function error(req, status, err) {}
                });
            },
            error: function error(req, status, err) {}
        });
    } else {
        window.frame_id = 'pay';
        $(".iframe_box").remove();
        $(".ios_pay").remove();
        if (!$(".iframe_box").length) {
            var html = '';
            html += '<div class="iframe_box" id="_iframe_box" style="position:relative;width:80%;height:6rem; margin:100px auto 0;background:#fff;border-radius: 20px;overflow: hidden;">';
            html += '<p class="pay_num" style="height: 1.5rem;line-height: 1.5rem;text-align: center;font-size: 0.4rem;color: #666;overflow: hidden;">请选择支付方式</p>';
            html += '<p class="pay_num" style="height: 1.5rem;line-height: 1.5rem;text-align: center;font-size: 0.468rem;color: #333;overflow: hidden;"><span style="font-size: 0.8rem;">￥' + money + '</span></p>';
            html += '<iframe class="iframe_box_iframe" style="width: 100%;height:56%; border:0;" src="/h5/pay/payshow?app_order_id=' + app_order_id + '&gameid=' + sdk.gameId + '&uid=' + uid + '&app_user_name=' + encodeURIComponent(appusername) + '&sid=' + sid + '&openuid=' + openuid + '&product_id=' + porductid + '&resource_id=' + resource + '&money=' + money + '" id=' + frame_id + '>';
            html += '</iframe>';
            html += '<img src="https://static.xyimg.net/cn/static/h5/img/close2.png?154" class="cli_none" style="position:absolute;cursor:pointer; top:-8px;right:0px;">';
            html += '</div>';
            html += '<a class="ios_pay"  href="https://www.xy.com/h5/account/zhishow?app_order_id=' + app_order_id + '&gameid=' + sdk.gameId + '&uid=' + uid + '&app_user_name=' + encodeURIComponent(appusername) + '&sid=' + sid + '&openuid=' + openuid + '&product_id=' + porductid + '&resource_id=' + resource + '&money=' + money + '&version=5' + ' "></a>';
            $('body').append(html);
        }
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            $('.iframe_box,.ly_alert_box').remove();
            var Href = $('.ios_pay').attr('href');
            location.href = Href;
            // $('.ios_pay').trigger("click").css('display','block');
        } else if (/(Android)/i.test(navigator.userAgent)) {
            $('.ios_pay').remove();
            $('.iframe_box').show();
        }

        if (!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i)) {
            $('.iframe_box').css({ 'width': '370px', 'height': '370px' });
        }
    }
    function closepay() {
        $('.iframe_box').remove();
    }
    $(document).on('click', '.iframe_box .cli_none', function () {
        $(this).parent().remove();
        $('.iframe_box').hide();
        //$('iframe_box').remove();
    });
};

sdk.login = function (type, sid, uid, roleId) {
    var msg = {};
    window.parent.postMessage({
        cmd: 'login',
        type: type,
        uid: uid,
        server: sid,
        roleId: roleId
    }, "*");
};

sdk.loginGame = function (type, server, uid, roleId) {
    if (!uid || !server || !type) {
        return false;
    }
    $.ajax({
        'url': "/game/gameReg",
        'type': 'POST',
        'data': { uid: uid, server: server, type: type, gameid: sdk.gameId, roleId: roleId },
        'success': function success(data) {},
        'error': function error(data) {}
    });
};

/**
 *对父页面跳转
*
* @param {object} o
*/

sdk.reloadParent = function (o) {
    if ((typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o)) != 'object') return alert('为一个obj..');
    window.parent.postMessage({ chooseServerUrl: o.chooseServerUrl, fn_name: 'reloadParent' }, '*');
};

exports.default = sdk;

/***/ }),

/***/ "./src/brower.js":
/*!***********************!*\
  !*** ./src/brower.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var u = navigator.userAgent;

exports.default = {
  version: {
    mobile: /AppleWebKit.*Mobile.*/i.test(u),
    //是否为移动终端
    ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(u),
    //ios终端
    android: /Android/i.test(u) || /Linux/i.test(u),
    //android终端或者uc浏览器
    windowsphone: /Windows Phone/i.test(u),
    //Windows Phone
    iPhone: /iPhone/i.test(u),
    //是否为iPhone或者QQHD浏览器
    iPad: /iPad/i.test(u),
    //是否iPad
    webApp: !/Safari/i.test(u),
    //是否web应该程序，没有头部与底部
    MicroMessenger: /MicroMessenger/i.test(u),
    //是否为微信
    weibo: /Weibo/i.test(u),
    //是否为微博
    uc: /ucweb|UCBrowser/i.test(u),
    //是否为UC
    qq: /MQQBrowser/i.test(u),
    //是否为QQ浏览器
    baidu: /Baidu/i.test(u), //是否为百度浏览器

    weixin: /MicroMessenger/i.test(u)
  },
  language: (navigator.browserLanguage || navigator.language).toLowerCase()

};

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ "./node_modules/.6.26.0@babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/.6.26.0@babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

{
  var Class = {};

  Class.create = function (prop, st_prop) {

    var F = function F() {
      if (typeof this.init === 'function' && this.init) {
        this.init.apply(this, arguments);
      }
    };

    prop = prop || {};

    st_prop && (0, _keys2.default)(st_prop).forEach(function (s) {
      F[s] = st_prop[s];
    });

    F.extend = Class.create;

    //不是Class extend 要从上个F继承了
    if (this != Class) {
      F.prototype = (0, _create2.default)(this.prototype);
      F.prototype.__super__ = this.prototype;
      F.prototype.constructor = F;

      var parent_prop = this.prototype;
      (0, _keys2.default)(prop).forEach(function (s) {
        //需要扩展的和继承过后的存在重复！
        if (parent_prop[s] && typeof parent_prop[s] == 'function') {

          F.prototype[s] = function () {
            this._super = parent_prop[s];
            return prop[s].apply(this, arguments);
          };
        } else {
          F.prototype[s] = prop[s];
        };
      });

      (0, _keys2.default)(this).filter(function (s) {
        return !/extend|create/.test(s);
      }).forEach(function (s) {
        F[s] = this.__super__.constructor[s];
      }, F.prototype);

      st_prop && (0, _keys2.default)(st_prop).forEach(function (s) {
        F[s] = st_prop[s];
      });

      return F;
    };

    (0, _keys2.default)(prop).forEach(function (s) {
      F.prototype[s] = prop[s];
    });
    F.prototype.constructor = F;

    return F;
  };
}

exports.default = Class.create({
  init: function init() {
    this.evs = {};
  },
  on: function on(s, fn, once) {
    s = s.trim();
    if (once && once.trim() == 'once') {
      this.evs[s] = [fn];

      return this;
    };

    if (!this.evs[s]) {
      this.evs[s] = [fn];
      return this;
    };
    this.evs[s].push(fn);
    return this;
  },
  trigger: function trigger(s) {
    var that = this,
        args = arguments,
        ar = this.evs[s = s.trim()];

    //tirgger('aaa' , a,b,c)
    ar && ar.forEach(function (fn) {
      fn.apply(that, [].slice.call(args, 1));
    });

    return this;
  },
  off: function off(s) {
    delete this.evs[s.trim()];
    return this;
  }

});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ "./node_modules/.6.26.0@babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _base = __webpack_require__(/*! ./base */ "./src/base.js");

var _base2 = _interopRequireDefault(_base);

var _event = __webpack_require__(/*! ./event */ "./src/event.js");

var _event2 = _interopRequireDefault(_event);

var _brower = __webpack_require__(/*! ./brower */ "./src/brower.js");

var _brower2 = _interopRequireDefault(_brower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _assign2.default)(_base2.default, {
  userbehavior: function userbehavior() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        data_type = _ref.data_type,
        server_id = _ref.server_id,
        server_name = _ref.server_name,
        game_id = _ref.game_id,
        user_id = _ref.user_id,
        role_id = _ref.role_id,
        role_name = _ref.role_name,
        role_level = _ref.role_level,
        money = _ref.money,
        job = _ref.job;

    window.parent.postMessage({
      cmd: 'userbehavior',
      data_type: data_type, server_id: server_id, server_name: server_name, game_id: game_id, user_id: user_id, role_id: role_id, role_name: role_name, role_level: role_level, money: money, job: job
    }, '*');
  },
  listenEventOn: function listenEventOn(s, fn) {

    this.ev.on(s, function (data) {
      fn(data);
    });
  },
  registerEvent: function registerEvent() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


    var Ex = (0, _create2.default)({
      'userbehavior': function userbehavior(data, ev) {
        ev.trigger('userbehavior', data);
      },
      'createRole': function createRole(data, ev) {
        ev.trigger('createRole', data);
      },
      'sendrole': function sendrole(data, ev) {
        ev.trigger('sendrole', data);
      },
      'pay': function pay(data, ev) {
        ev.trigger('pay', data);
      },
      'sendchatlog': function sendchatlog(data, ev) {
        ev.trigger('sendchatlog', data);
      },
      'loginGameData': function loginGameData(data, ev) {
        ev.trigger('loginGameData', data);
      },
      'upgrade': function upgrade(data, ev) {
        ev.trigger('upgrade', data);
      }
    });

    var ev = this.ev;

    var proxyEx = function proxyEx(target, event, param) {
      var cmd = event.data.cmd;

      if (!cmd) return;
      if (!target[cmd]) return console.warn('\u7F3A\u5C11\u88AB\u6CE8\u518C\u5BF9\u8C61:' + cmd);
      param.canRun(target, cmd);
    };

    addEventListener('message', function (event) {
      proxyEx(Ex, event, {
        canRun: function canRun() {
          Ex[event.data.cmd](event.data, ev);
        }
      });
    });
  },
  version: "1.0.5",
  ev: new _event2.default(),
  Brower: _brower2.default

});

/***/ })

/******/ });
});
//# sourceMappingURL=xyy-sdk.js.map