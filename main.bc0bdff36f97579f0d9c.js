/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			if(mode & 2 && typeof value == 'object' && value) {
/******/ 				for(const key in value) def[key] = () => value[key];
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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

// NAMESPACE OBJECT: ./src/ai/GoalTypes/index.js
var GoalTypes_namespaceObject = {};
__webpack_require__.r(GoalTypes_namespaceObject);
__webpack_require__.d(GoalTypes_namespaceObject, {
  "BoredGoalType": () => BoredGoalType,
  "EatFoodGoalType": () => EatFoodGoalType,
  "MoveGoalType": () => MoveGoalType,
  "SatisfyHungerGoalType": () => SatisfyHungerGoalType
});

// NAMESPACE OBJECT: ./src/ecs/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "Actor": () => Actor,
  "Brain": () => Brain,
  "Eater": () => Eater,
  "Glyph": () => Glyph,
  "Goal": () => Goal,
  "IsPlayer": () => IsPlayer,
  "Legs": () => Legs,
  "Logger": () => Logger,
  "Map": () => Map_Map,
  "MapLayer": () => MapLayer,
  "Moniker": () => Moniker,
  "MoveCommand": () => MoveCommand,
  "Position": () => Position,
  "Wandering": () => Wandering
});

// NAMESPACE OBJECT: ./src/ecs/prefabs/index.js
var prefabs_namespaceObject = {};
__webpack_require__.r(prefabs_namespaceObject);
__webpack_require__.d(prefabs_namespaceObject, {
  "BeingPrefab": () => prefabs_BeingPrefab_namespaceObject,
  "GoalPrefab": () => prefabs_GoalPrefab_namespaceObject,
  "HumanPrefab": () => prefabs_HumanPrefab_namespaceObject,
  "HumanWanderer": () => prefabs_HumanWandererPrefab_namespaceObject,
  "PlayerPrefab": () => prefabs_PlayerPrefab_namespaceObject,
  "WandererPrefab": () => prefabs_WandererPrefab_namespaceObject
});

// CONCATENATED MODULE: ./node_modules/geotic/build/index.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

var preserveCamelCase = function preserveCamelCase(string) {
  var isLastCharLower = false;
  var isLastCharUpper = false;
  var isLastLastCharUpper = false;

  for (var i = 0; i < string.length; i++) {
    var character = string[i];

    if (isLastCharLower && /(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C2\uA7C4-\uA7C7\uA7C9\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21])/.test(character)) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/.test(character)) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLocaleLowerCase() === character && character.toLocaleUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toLocaleUpperCase() === character && character.toLocaleLowerCase() !== character;
    }
  }

  return string;
};

var camelCase = function camelCase(input, options) {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = _objectSpread(_objectSpread({}, {
    pascalCase: false
  }), options);

  var postProcess = function postProcess(x) {
    return options.pascalCase ? x.charAt(0).toLocaleUpperCase() + x.slice(1) : x;
  };

  if (Array.isArray(input)) {
    input = input.map(function (x) {
      return x.trim();
    }).filter(function (x) {
      return x.length;
    }).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return options.pascalCase ? input.toLocaleUpperCase() : input.toLocaleLowerCase();
  }

  var hasUpperCase = input !== input.toLocaleLowerCase();

  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }

  input = input.replace(/^[_.\- ]+/, '').toLocaleLowerCase().replace(/[ \x2D\._]+((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC82-\uDCB8\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])|$)/g, function (_, p1) {
    return p1.toLocaleUpperCase();
  }).replace(/[0-9]+((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC82-\uDCB8\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])|$)/g, function (m) {
    return m.toLocaleUpperCase();
  });
  return postProcess(input);
};

var camelcase = camelCase; // TODO: Remove this for the next major release

var _default = camelCase;
camelcase["default"] = _default;

var Property = /*#__PURE__*/function () {
  function Property(component) {
    _classCallCheck(this, Property);

    _defineProperty(this, "component", void 0);

    this.component = component;
  }

  _createClass(Property, [{
    key: "get",
    value: function get() {
      return undefined;
    }
  }, {
    key: "set",
    value: function set(value) {}
  }, {
    key: "serialize",
    value: function serialize() {
      return undefined;
    }
  }, {
    key: "onDestroyed",
    value: function onDestroyed() {}
  }, {
    key: "cleanupReference",
    value: function cleanupReference(entity) {}
  }, {
    key: "ecs",
    get: function get() {
      return this.component.ecs;
    }
  }, {
    key: "descriptor",
    get: function get() {
      var _this = this;

      return {
        enumerable: true,
        get: function get() {
          return _this.get();
        },
        set: function set(v) {
          return _this.set(v);
        }
      };
    }
  }]);

  return Property;
}();

var SimpleProperty = /*#__PURE__*/function (_Property) {
  _inherits(SimpleProperty, _Property);

  var _super = _createSuper(SimpleProperty);

  function SimpleProperty() {
    var _this2;

    _classCallCheck(this, SimpleProperty);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "value", null);

    return _this2;
  }

  _createClass(SimpleProperty, [{
    key: "set",
    value: function set(value) {
      this.value = value;
    }
  }, {
    key: "get",
    value: function get() {
      return this.value;
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return this.value;
    }
  }]);

  return SimpleProperty;
}(Property);

var EntityProperty = /*#__PURE__*/function (_Property2) {
  _inherits(EntityProperty, _Property2);

  var _super2 = _createSuper(EntityProperty);

  function EntityProperty() {
    var _this3;

    _classCallCheck(this, EntityProperty);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "id", void 0);

    return _this3;
  }

  _createClass(EntityProperty, [{
    key: "set",
    value: function set(value) {
      if (this.id && (!value || value.id !== this.id || value !== this.id)) {
        this.ecs.entities.removeRef(this.id, this);
      }

      if (value && value.id) {
        this.ecs.entities.addRef(value.id, this);
        this.id = value.id;
        return;
      }

      if (typeof value === 'string') {
        this.ecs.entities.addRef(value, this);
        this.id = value;
        return;
      }

      this.id = undefined;
    }
  }, {
    key: "get",
    value: function get() {
      return this.id && this.component.ecs.getEntity(this.id);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return this.id;
    }
  }, {
    key: "onDestroyed",
    value: function onDestroyed() {
      if (this.id) {
        this.ecs.entities.removeRef(this.id, this);
      }
    }
  }, {
    key: "cleanupReference",
    value: function cleanupReference(entity) {
      if (this.id === entity.id) {
        this.id = undefined;
      } else {
        console.warn("Property in unclean state. A reference to an entity \"".concat(entity.id, "\" was never cleaned up."));
      }
    }
  }]);

  return EntityProperty;
}(Property);

var EntityArrayProperty = /*#__PURE__*/function (_Property3) {
  _inherits(EntityArrayProperty, _Property3);

  var _super3 = _createSuper(EntityArrayProperty);

  function EntityArrayProperty(component) {
    var _this4;

    _classCallCheck(this, EntityArrayProperty);

    _this4 = _super3.call(this, component);

    _defineProperty(_assertThisInitialized(_this4), "proxy", []);

    _this4.proxy = new Proxy([], {
      get: function get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
      },
      set: function set(target, prop, value, receiver) {
        if (isNaN(prop)) {
          return Reflect.set(target, prop, value, receiver);
        }

        var old = Reflect.get(target, prop, receiver);

        if (typeof value === 'string') {
          value = _this4.ecs.entities.get(value);
        }

        if (old && old != value) {
          _this4.ecs.entities.removeRef(value, _assertThisInitialized(_this4));
        }

        if (value && value.id) {
          _this4.ecs.entities.addRef(value.id, _assertThisInitialized(_this4));

          return Reflect.set(target, prop, value, receiver);
        }

        return Reflect.set(target, prop, value, receiver);
      },
      deleteProperty: function deleteProperty(target, prop) {
        if (isNaN(prop)) {
          return Reflect.deleteProperty(target, prop);
        }

        var value = Reflect.get(target, prop);

        _this4.ecs.entities.removeRef(value, _assertThisInitialized(_this4));

        return Reflect.deleteProperty(target, prop);
      }
    });
    return _this4;
  }

  _createClass(EntityArrayProperty, [{
    key: "set",
    value: function set() {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var len = Math.max(values.length, this.proxy.length);

      for (var i = 0; i < len; i++) {
        if (i in values) {
          this.proxy[i] = values[i];
        } else {
          delete this.proxy[i];
        }
      }

      this.proxy.length = values.length;
    }
  }, {
    key: "get",
    value: function get() {
      return this.proxy;
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return this.proxy.map(function (ref) {
        return ref.id;
      });
    }
  }, {
    key: "onDestroyed",
    value: function onDestroyed() {
      this.set([]);
    }
  }, {
    key: "cleanupReference",
    value: function cleanupReference(entity) {
      this.set(this.proxy.filter(function (ref) {
        return ref.id !== entity.id;
      }));
    }
  }]);

  return EntityArrayProperty;
}(Property);

var PropertyStrategy = /*#__PURE__*/function () {
  function PropertyStrategy() {
    _classCallCheck(this, PropertyStrategy);
  }

  _createClass(PropertyStrategy, null, [{
    key: "create",
    value: function create(component, value) {
      switch (value) {
        case '<Entity>':
          return new EntityProperty(component);

        case '<EntityArray>':
          return new EntityArrayProperty(component);

        default:
          return new SimpleProperty(component);
      }
    }
  }]);

  return PropertyStrategy;
}();

var Component = /*#__PURE__*/function () {
  _createClass(Component, [{
    key: "entity",
    get: function get() {
      return _classPrivateFieldGet(this, _entity);
    }
  }, {
    key: "ecs",
    get: function get() {
      return _classPrivateFieldGet(this, _ecs);
    }
  }, {
    key: "type",
    get: function get() {
      return this.constructor.name;
    }
  }, {
    key: "isAttached",
    get: function get() {
      return Boolean(this.entity);
    }
  }, {
    key: "isDestroyed",
    get: function get() {
      return _classPrivateFieldGet(this, _isDestroyed);
    }
  }, {
    key: "allowMultiple",
    get: function get() {
      return this.constructor.allowMultiple;
    }
  }, {
    key: "keyProperty",
    get: function get() {
      return this.constructor.keyProperty;
    }
  }, {
    key: "properties",
    get: function get() {
      var ob = {};

      for (var _i = 0, _Object$entries = Object.entries(_classPrivateFieldGet(this, _props)); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        ob[key] = value.get();
      }

      return ob;
    }
  }, {
    key: "key",
    get: function get() {
      return this[this.keyProperty];
    }
  }], [{
    key: "type",
    get: function get() {
      return this.name;
    }
  }]);

  function Component(ecs) {
    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    _entity.set(this, {
      writable: true,
      value: null
    });

    _ecs.set(this, {
      writable: true,
      value: null
    });

    _props.set(this, {
      writable: true,
      value: {}
    });

    _isDestroyed.set(this, {
      writable: true,
      value: false
    });

    _classPrivateFieldSet(this, _ecs, ecs);

    this._defineProxies(properties);
  }

  _createClass(Component, [{
    key: "serialize",
    value: function serialize() {
      return Object.entries(_classPrivateFieldGet(this, _props)).reduce(function (o, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return _objectSpread(_objectSpread({}, o), {}, _defineProperty2({}, key, value.serialize()));
      }, {});
    }
  }, {
    key: "_onAttached",
    value: function _onAttached(entity) {
      _classPrivateFieldSet(this, _entity, entity);

      this.ecs.queries.onComponentAdded(entity, this);
      this.onAttached();
    }
  }, {
    key: "_onDetached",
    value: function _onDetached() {
      if (this.isAttached) {
        this.onDetached();

        var entity = _classPrivateFieldGet(this, _entity);

        _classPrivateFieldSet(this, _entity, null);

        this.ecs.queries.onComponentRemoved(entity, this);
      }
    }
  }, {
    key: "_onDestroyed",
    value: function _onDestroyed() {
      _classPrivateFieldSet(this, _isDestroyed, true);

      this.onDestroyed();

      for (var _i2 = 0, _Object$values = Object.values(_classPrivateFieldGet(this, _props)); _i2 < _Object$values.length; _i2++) {
        var prop = _Object$values[_i2];
        prop.onDestroyed();
      }
    }
  }, {
    key: "onAttached",
    value: function onAttached() {}
  }, {
    key: "onDetached",
    value: function onDetached() {}
  }, {
    key: "onDestroyed",
    value: function onDestroyed() {}
  }, {
    key: "remove",
    value: function remove() {
      var destroy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.isAttached) {
        this.entity.remove(this);
      }

      if (destroy) {
        this._onDestroyed();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.remove(true);
    }
  }, {
    key: "clone",
    value: function clone() {
      return this.ecs.createComponent(this.type, this.serialize());
    }
  }, {
    key: "_onEvent",
    value: function _onEvent(evt) {
      this.onEvent(evt);
      var handlerName = camelcase("on ".concat(evt.name));

      if (typeof this[handlerName] === 'function') {
        this[handlerName](evt);
      }
    }
  }, {
    key: "onEvent",
    value: function onEvent(evt) {}
  }, {
    key: "_defaultPropertyValue",
    value: function _defaultPropertyValue(propertyName) {
      var value = this.constructor.properties[propertyName];

      if (value === '<EntityArray>') {
        return [];
      }

      if (value === '<Entity>') {
        return undefined;
      }

      return value;
    }
  }, {
    key: "_defineProxies",
    value: function _defineProxies(initialProperties) {
      for (var key in this.constructor.properties) {
        var initialValue = initialProperties.hasOwnProperty(key) ? initialProperties[key] : this._defaultPropertyValue(key);
        var property = PropertyStrategy.create(this, this.constructor.properties[key]);
        _classPrivateFieldGet(this, _props)[key] = property;
        Object.defineProperty(this, key, property.descriptor);
        property.set(initialValue);
      }
    }
  }]);

  return Component;
}();

var _entity = new WeakMap();

var _ecs = new WeakMap();

var _props = new WeakMap();

var _isDestroyed = new WeakMap();

_defineProperty(Component, "allowMultiple", false);

_defineProperty(Component, "keyProperty", null);

_defineProperty(Component, "properties", {});

var ComponentRegistry = /*#__PURE__*/function () {
  function ComponentRegistry(ecs) {
    _classCallCheck(this, ComponentRegistry);

    _nameCache.set(this, {
      writable: true,
      value: new Map()
    });

    _definitions.set(this, {
      writable: true,
      value: new Map()
    });

    _ecs$1.set(this, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _ecs$1, ecs);
  }

  _createClass(ComponentRegistry, [{
    key: "register",
    value: function register(component) {
      _classPrivateFieldGet(this, _definitions).set(component.name, component);

      _classPrivateFieldGet(this, _nameCache).set(component.name, camelcase(component.name));
    }
  }, {
    key: "getAccessor",
    value: function getAccessor(type) {
      if (_classPrivateFieldGet(this, _nameCache).has(type)) {
        return _classPrivateFieldGet(this, _nameCache).get(type);
      }

      _classPrivateFieldGet(this, _nameCache).set(type, camelcase(type));
    }
  }, {
    key: "get",
    value: function get(typeOrClassOrComponent) {
      var type = this._getType(typeOrClassOrComponent);

      if (!type) {
        console.warn("Cannot get component definition for type or class ".concat(typeOrClassOrComponent, " since it is neither a Component class or type (string)"));
        return null;
      }

      return _classPrivateFieldGet(this, _definitions).get(type);
    }
  }, {
    key: "create",
    value: function create(typeOrClass) {
      var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var definition = this.get(typeOrClass);

      if (definition) {
        return new definition(_classPrivateFieldGet(this, _ecs$1), properties);
      }

      console.warn("Could not create component definition for ".concat(typeOrClass, " since it is not registered"));
    }
  }, {
    key: "_getType",
    value: function _getType(typeOrClassOrComponent) {
      if (typeof typeOrClassOrComponent === 'string') {
        return typeOrClassOrComponent;
      }

      if (typeOrClassOrComponent instanceof Component) {
        return typeOrClassOrComponent.type;
      }

      if (typeOrClassOrComponent.prototype instanceof Component) {
        return typeOrClassOrComponent.name;
      }

      return null;
    }
  }]);

  return ComponentRegistry;
}();

var _nameCache = new WeakMap();

var _definitions = new WeakMap();

var _ecs$1 = new WeakMap();

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && _typeof(value) === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol["for"];
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol["for"]('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;

var PrefabComponent = /*#__PURE__*/function () {
  _createClass(PrefabComponent, [{
    key: "type",
    get: function get() {
      return this.componentDef.type;
    }
  }]);

  function PrefabComponent(componentDef) {
    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, PrefabComponent);

    this.componentDef = componentDef;
    this.properties = properties;
    this.overwrite = overwrite;
  }

  _createClass(PrefabComponent, [{
    key: "applyToEntity",
    value: function applyToEntity(entity) {
      var initialProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.componentDef.allowMultiple && entity.has(this.componentDef)) {
        if (this.overwrite) {
          entity.remove(this.componentDef);
        } else {
          console.log("Ignoring prefab component \"".concat(this.type, "\" since the entity \"").concat(entity.id, "\" already has one."));
          return;
        }
      }

      var props = cjs(this.properties, initialProps);
      entity.add(this.componentDef, props);
    }
  }]);

  return PrefabComponent;
}();

var Prefab = /*#__PURE__*/function () {
  function Prefab(ecs, name) {
    _classCallCheck(this, Prefab);

    _defineProperty(this, "name", '');

    _defineProperty(this, "inherit", []);

    _defineProperty(this, "components", []);

    this.ecs = ecs;
    this.name = name;
  }

  _createClass(Prefab, [{
    key: "addComponent",
    value: function addComponent(prefabComponent) {
      this.components.push(prefabComponent);
    }
  }, {
    key: "applyToEntity",
    value: function applyToEntity(entity) {
      var _this5 = this;

      var initialProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.inherit.forEach(function (parent) {
        parent.applyToEntity(entity, initialProps);
      });
      var arrComps = {};
      this.components.forEach(function (component, i) {
        var definition = component.componentDef;

        var accessor = _this5.ecs.components.getAccessor(definition.type);

        var initialCompProps = {};

        if (definition.allowMultiple) {
          if (definition.keyProperty) {
            var key = component.properties[definition.keyProperty];

            if (initialProps[accessor] && initialProps[accessor][key]) {
              initialCompProps = initialProps[accessor][key];
            }
          } else {
            if (!arrComps[accessor]) {
              arrComps[accessor] = 0;
            }

            if (initialProps[accessor] && initialProps[accessor][arrComps[accessor]]) {
              initialCompProps = initialProps[accessor][arrComps[accessor]];
            }

            arrComps[accessor]++;
          }
        } else {
          initialCompProps = initialProps[accessor];
        }

        component.applyToEntity(entity, initialCompProps);
      });
      return entity;
    }
  }]);

  return Prefab;
}();

var PrefabRegistry = /*#__PURE__*/function () {
  function PrefabRegistry(ecs) {
    _classCallCheck(this, PrefabRegistry);

    _prefabs.set(this, {
      writable: true,
      value: {}
    });

    _ecs$2.set(this, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _ecs$2, ecs);
  }

  _createClass(PrefabRegistry, [{
    key: "deserialize",
    value: function deserialize(data) {
      var _this6 = this;

      var registered = this.get(data.name);

      if (registered) {
        return registered;
      }

      var prefab = new Prefab(_classPrivateFieldGet(this, _ecs$2), data.name);
      var inherit;

      if (Array.isArray(data.inherit)) {
        inherit = data.inherit;
      } else if (typeof data.inherit === 'string') {
        inherit = [data.inherit];
      } else {
        inherit = [];
      }

      prefab.inherit = inherit.map(function (parent) {
        var ref = _this6.get(parent);

        if (!ref) {
          console.warn("Prefab \"".concat(data.name, "\" cannot inherit from Prefab \"").concat(parent, "\" because is not registered yet! Prefabs must be registered in the right order."));
          return parent;
        }

        return ref;
      });
      var comps = data.components || [];

      var _iterator = _createForOfIteratorHelper(comps),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var componentData = _step.value;

          if (typeof componentData === 'string' || componentData.prototype instanceof Component) {
            var def = _classPrivateFieldGet(this, _ecs$2).components.get(componentData);

            if (def) {
              prefab.addComponent(new PrefabComponent(def));
            }
          } else if (_typeof(componentData) === 'object') {
            var type = componentData.type;

            var _def = _classPrivateFieldGet(this, _ecs$2).components.get(type);

            if (_def) {
              prefab.addComponent(new PrefabComponent(_def, componentData.properties, componentData.overwrite));
            }
          } else {
            console.warn("Unrecognized component reference \"".concat(componentData, "\" in prefab \"").concat(data.name, "\". Ensure the component is registered before the prefab."));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.register(prefab);
      return prefab;
    }
  }, {
    key: "register",
    value: function register(prefab) {
      _classPrivateFieldGet(this, _prefabs)[prefab.name] = prefab;
    }
  }, {
    key: "get",
    value: function get(nameOrClassOrPrefab) {
      var name = PrefabRegistry._getName(nameOrClassOrPrefab);

      return _classPrivateFieldGet(this, _prefabs)[name];
    }
  }, {
    key: "create",
    value: function create(nameOrClass) {
      var initialProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prefab = this.get(nameOrClass);

      if (!prefab) {
        console.warn("Could not instantiate prefab for ".concat(nameOrClass, " since it is not registered"));
        return;
      }

      var entity = _classPrivateFieldGet(this, _ecs$2).createEntity();

      prefab.applyToEntity(entity, initialProps);
      return entity;
    }
  }], [{
    key: "_getName",
    value: function _getName(nameOrClassOrPrefab) {
      if (typeof nameOrClassOrPrefab === 'string') {
        return nameOrClassOrPrefab;
      }

      if (nameOrClassOrPrefab instanceof Prefab) {
        return nameOrClassOrPrefab.name;
      }

      if (nameOrClassOrPrefab.prototype instanceof Prefab) {
        return nameOrClassOrPrefab.name;
      }

      return null;
    }
  }]);

  return PrefabRegistry;
}();

var _prefabs = new WeakMap();

var _ecs$2 = new WeakMap(); // This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.


var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';

var nanoid = function nanoid() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
  var id = ''; // A compact alternative for `for (var i = 0; i < step; i++)`.

  var i = size;

  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

var EntityEvent = /*#__PURE__*/function () {
  _createClass(EntityEvent, [{
    key: "prevented",
    get: function get() {
      return _classPrivateFieldGet(this, _prevented);
    }
  }, {
    key: "handled",
    get: function get() {
      return _classPrivateFieldGet(this, _handled);
    }
  }]);

  function EntityEvent(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, EntityEvent);

    _defineProperty(this, "data", {});

    _prevented.set(this, {
      writable: true,
      value: false
    });

    _handled.set(this, {
      writable: true,
      value: false
    });

    this.name = name;
    this.data = data;
  }

  _createClass(EntityEvent, [{
    key: "is",
    value: function is(name) {
      return this.name === name;
    }
  }, {
    key: "handle",
    value: function handle() {
      _classPrivateFieldSet(this, _handled, true);

      _classPrivateFieldSet(this, _prevented, true);
    }
  }, {
    key: "prevent",
    value: function prevent() {
      _classPrivateFieldSet(this, _prevented, true);
    }
  }]);

  return EntityEvent;
}();

var _prevented = new WeakMap();

var _handled = new WeakMap();

var Entity = /*#__PURE__*/function () {
  _createClass(Entity, [{
    key: "ecs",
    get: function get() {
      return _classPrivateFieldGet(this, _ecs$3);
    }
  }, {
    key: "components",
    get: function get() {
      return _classPrivateFieldGet(this, _components);
    }
  }, {
    key: "isDestroyed",
    get: function get() {
      return _classPrivateFieldGet(this, _isDestroyed$1);
    }
  }]);

  function Entity(ecs) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Entity);

    _id.set(this, {
      writable: true,
      value: null
    });

    _components.set(this, {
      writable: true,
      value: {}
    });

    _ecs$3.set(this, {
      writable: true,
      value: null
    });

    _isDestroyed$1.set(this, {
      writable: true,
      value: false
    });

    _classPrivateFieldSet(this, _ecs$3, ecs);

    _classPrivateFieldSet(this, _id, id || ecs.generateId());

    Object.defineProperty(this, 'id', {
      value: _classPrivateFieldGet(this, _id),
      enumerable: true,
      writable: false
    });
  }

  _createClass(Entity, [{
    key: "has",
    value: function has(typeOrClass) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var type = this.ecs.components._getType(typeOrClass);

      var accessor = this.ecs.components.getAccessor(type);
      var hasType = this.hasOwnProperty(accessor);

      if (hasType && key) {
        return this[accessor].hasOwnProperty(key);
      }

      return hasType;
    }
  }, {
    key: "get",
    value: function get(typeOrClass) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var type = this.ecs.components._getType(typeOrClass);

      var accessor = this.ecs.components.getAccessor(type);
      var components = this[accessor];

      if (components && key) {
        return components[key];
      }

      return components;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _classPrivateFieldSet(this, _isDestroyed$1, true);

      for (var _i3 = 0, _Object$values2 = Object.values(this.components); _i3 < _Object$values2.length; _i3++) {
        var component = _Object$values2[_i3];

        if (component instanceof Component) {
          component.destroy();
        } else {
          for (var _i4 = 0, _Object$values3 = Object.values(component); _i4 < _Object$values3.length; _i4++) {
            var nestedComponent = _Object$values3[_i4];
            nestedComponent.destroy();
          }
        }
      }

      this.ecs.entities.onEntityDestroyed(this);
    }
  }, {
    key: "add",
    value: function add(typeOrClass) {
      var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var component = this.ecs.components.create(typeOrClass, properties);

      if (!component) {
        console.warn("\"".concat(typeOrClass, "\" component cannot be added, since it is not registered."));
        return false;
      }

      return this.attach(component);
    }
  }, {
    key: "attach",
    value: function attach(component) {
      var accessor = this.ecs.components.getAccessor(component.type);

      if (!component.allowMultiple) {
        if (this.has(component.type)) {
          console.warn("\"".concat(component.type, "\" component has allowMultiple set to ").concat(component.allowMultiple, ". Trying to add a \"").concat(component.type, "\" component to an entity which already has one."));
          return false;
        }

        this.components[accessor] = component;
        Object.defineProperty(this, accessor, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return this.components[accessor];
          }
        });

        component._onAttached(this);

        this.ecs.queries.onComponentAdded(this);
        return true;
      }

      if (!component.keyProperty) {
        if (!this.components[accessor]) {
          this.components[accessor] = [];
          Object.defineProperty(this, accessor, {
            configurable: true,
            enumerable: true,
            get: function get() {
              return this.components[accessor];
            }
          });
        }

        this.components[accessor].push(component);

        component._onAttached(this);

        this.ecs.queries.onComponentAdded(this);
        return true;
      }

      if (!component.key) {
        console.warn("\"".concat(component.type, "\" component has a falsy key of \"").concat(component.key, "\". The keyProperty is set to \"").concat(component.keyProperty, "\"."));
        return false;
      }

      if (!this.components[accessor]) {
        this.components[accessor] = {};
        Object.defineProperty(this, accessor, {
          configurable: true,
          enumerable: true,
          get: function get() {
            return this.components[accessor];
          }
        });
      }

      this.components[accessor][component.key] = component;

      component._onAttached(this);

      this.ecs.queries.onComponentAdded(this, component);
      return true;
    }
  }, {
    key: "owns",
    value: function owns(component) {
      return component.entity === this;
    }
  }, {
    key: "remove",
    value: function remove(typeOrClassOrComponent) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var isComponent = typeOrClassOrComponent instanceof Component;
      key = isComponent ? typeOrClassOrComponent.key : key;
      var definition = this.ecs.components.get(typeOrClassOrComponent);
      var accessor = this.ecs.components.getAccessor(definition.type);

      if (definition.allowMultiple) {
        if (!definition.keyProperty) {
          if (isComponent) {
            var _all = this.components[accessor];

            if (!_all) {
              console.warn("Trying to remove a \"".concat(definition.type, "\" component from an entity, but it wasn't found."));
              return;
            }

            var index = _all.indexOf(typeOrClassOrComponent);

            if (index > -1) {
              _all.splice(index, 1);

              typeOrClassOrComponent._onDetached();

              if (_all.length === 0) {
                delete this[accessor];
                delete this.components[accessor];
              }

              this.ecs.queries.onComponentRemoved(this);
              return true;
            }
          } else {
            var _iterator2 = _createForOfIteratorHelper(this.components[accessor]),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var instance = _step2.value;

                instance._onDetached();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            delete this[accessor];
            delete this.components[accessor];
            this.ecs.queries.onComponentRemoved(this);
            return true;
          }
        }

        if (!key) {
          console.warn("Trying to remove a \"".concat(definition.type, "\" component which allows multiple without specifying an key."));
          return;
        }

        var all = this.components[accessor];
        var component = all[key];

        if (component) {
          delete all[key];

          component._onDetached();

          if (Object.keys(all).length <= 0) {
            delete this[accessor];
            delete this.components[accessor];
          }

          this.ecs.queries.onComponentRemoved(this);
          return component;
        } else {
          console.warn("Trying to remove a \"".concat(definition.type, "\" component from an entity at \"").concat(key, "\", but it wasn't found."));
          return;
        }
      }

      if (accessor in this) {
        var _component = this.components[accessor];
        delete this[accessor];
        delete this.components[accessor];

        _component._onDetached();

        this.ecs.queries.onComponentRemoved(this);
        return _component;
      }

      console.warn("Trying to remove a \"".concat(definition.type, "\" component from an entity, but it wasn't found."));
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return Object.entries(this.components).reduce(function (o, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        if (value instanceof Component) {
          return _objectSpread(_objectSpread({}, o), {}, _defineProperty2({}, key, value.serialize()));
        }

        if (Array.isArray(value)) {
          return _objectSpread(_objectSpread({}, o), {}, _defineProperty2({}, key, value.map(function (v) {
            return v.serialize();
          })));
        }

        return _objectSpread(_objectSpread({}, o), {}, _defineProperty2({}, key, Object.entries(value).reduce(function (o2, _ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              k2 = _ref6[0],
              v2 = _ref6[1];

          return _objectSpread(_objectSpread({}, o2), {}, _defineProperty2({}, k2, v2.serialize()));
        }, {})));
      }, {
        id: this.id
      });
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(name, data) {
      var evt = new EntityEvent(name, data);

      for (var _i5 = 0, _Object$values4 = Object.values(this.components); _i5 < _Object$values4.length; _i5++) {
        var component = _Object$values4[_i5];

        if (component instanceof Component) {
          component._onEvent(evt);

          if (evt.prevented) {
            return evt;
          }
        } else {
          for (var _i6 = 0, _Object$values5 = Object.values(component); _i6 < _Object$values5.length; _i6++) {
            var nestedComponent = _Object$values5[_i6];

            nestedComponent._onEvent(evt);

            if (evt.prevented) {
              return evt;
            }
          }
        }
      }

      return evt;
    }
  }]);

  return Entity;
}();

var _id = new WeakMap();

var _components = new WeakMap();

var _ecs$3 = new WeakMap();

var _isDestroyed$1 = new WeakMap();

var EntityRegistry = /*#__PURE__*/function () {
  function EntityRegistry(ecs) {
    _classCallCheck(this, EntityRegistry);

    _entities.set(this, {
      writable: true,
      value: new Map()
    });

    _ecs$4.set(this, {
      writable: true,
      value: null
    });

    _refs.set(this, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldSet(this, _ecs$4, ecs);
  }

  _createClass(EntityRegistry, [{
    key: "register",
    value: function register(entity) {
      _classPrivateFieldGet(this, _entities).set(entity.id, entity);

      return entity;
    }
  }, {
    key: "get",
    value: function get(id) {
      return _classPrivateFieldGet(this, _entities).get(id);
    }
  }, {
    key: "createOrGetById",
    value: function createOrGetById(id) {
      var entity = this.get(id);

      if (entity) {
        return entity;
      }

      return this.create(id);
    }
  }, {
    key: "create",
    value: function create() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var entity = new Entity(_classPrivateFieldGet(this, _ecs$4), id);
      this.register(entity);

      _classPrivateFieldGet(this, _ecs$4).queries.onEntityCreated(entity);

      return entity;
    }
  }, {
    key: "destroy",
    value: function destroy(entity) {
      entity.destroy();
    }
  }, {
    key: "onEntityDestroyed",
    value: function onEntityDestroyed(entity) {
      this.cleanupRefs(entity);

      _classPrivateFieldGet(this, _entities)["delete"](entity.id);

      _classPrivateFieldGet(this, _ecs$4).queries.onEntityDestroyed(entity);
    }
  }, {
    key: "cleanupRefs",
    value: function cleanupRefs(entity) {
      var refs = _classPrivateFieldGet(this, _refs).get(entity.id);

      if (!refs) {
        return;
      }

      var _iterator3 = _createForOfIteratorHelper(refs),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ref = _step3.value;
          ref.cleanupReference(entity);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      delete _classPrivateFieldGet(this, _refs)[entity.id];
    }
  }, {
    key: "addRef",
    value: function addRef(entityId, property) {
      if (!_classPrivateFieldGet(this, _refs).has(entityId)) {
        _classPrivateFieldGet(this, _refs).set(entityId, new Set([property]));

        return;
      }

      _classPrivateFieldGet(this, _refs).get(entityId).add(property);
    }
  }, {
    key: "removeRef",
    value: function removeRef(entityId, property) {
      if (_classPrivateFieldGet(this, _refs).has(entityId)) {
        _classPrivateFieldGet(this, _refs).get(entityId)["delete"](property);
      }
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var json = [];

      _classPrivateFieldGet(this, _entities).forEach(function (entity) {
        json.push(entity.serialize());
      });

      return json;
    }
  }, {
    key: "deserialize",
    value: function deserialize(data) {
      var _iterator4 = _createForOfIteratorHelper(data.entities),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var entityData = _step4.value;
          this.createOrGetById(entityData.id);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(data.entities),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _entityData = _step5.value;
          this.deserializeEntity(_entityData);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "deserializeEntity",
    value: function deserializeEntity(data) {
      var _this7 = this;

      var id = data.id,
          componentData = _objectWithoutProperties(data, ["id"]);

      var entity = this.createOrGetById(id);
      Object.entries(componentData).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            value = _ref8[1];

        var type = camelcase(key, {
          pascalCase: true
        });

        var definition = _classPrivateFieldGet(_this7, _ecs$4).components.get(type);

        if (definition.allowMultiple) {
          Object.values(value).forEach(function (d) {
            entity.add(definition, d);
          });
        } else {
          entity.add(definition, value);
        }
      });
    }
  }, {
    key: "all",
    get: function get() {
      return _classPrivateFieldGet(this, _entities).values();
    }
  }]);

  return EntityRegistry;
}();

var _entities = new WeakMap();

var _ecs$4 = new WeakMap();

var _refs = new WeakMap();

var Query = /*#__PURE__*/function () {
  function Query(ecs) {
    var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Query);

    _ecs$5.set(this, {
      writable: true,
      value: void 0
    });

    _filter.set(this, {
      writable: true,
      value: void 0
    });

    _cache.set(this, {
      writable: true,
      value: new Set()
    });

    _classPrivateFieldSet(this, _ecs$5, ecs);

    _classPrivateFieldSet(this, _filter, cjs({
      any: [],
      all: [],
      none: []
    }, filter));

    this.bustCache();
  }

  _createClass(Query, [{
    key: "isMatch",
    value: function isMatch(entity) {
      var hasAny = _classPrivateFieldGet(this, _filter).any.length ? _classPrivateFieldGet(this, _filter).any.some(function (c) {
        return entity.has(c);
      }) : true;

      var hasAll = _classPrivateFieldGet(this, _filter).all.every(function (c) {
        return entity.has(c);
      });

      var hasNone = !_classPrivateFieldGet(this, _filter).none.some(function (c) {
        return entity.has(c);
      });
      return hasAny && hasAll && hasNone;
    }
  }, {
    key: "candidate",
    value: function candidate(entity) {
      if (this.isMatch(entity)) {
        _classPrivateFieldGet(this, _cache).add(entity);

        return true;
      }

      _classPrivateFieldGet(this, _cache)["delete"](entity);

      return false;
    }
  }, {
    key: "_onEntityCreated",
    value: function _onEntityCreated(entity) {
      this.candidate(entity);
    }
  }, {
    key: "_onComponentAdded",
    value: function _onComponentAdded(entity) {
      this.candidate(entity);
    }
  }, {
    key: "_onComponentRemoved",
    value: function _onComponentRemoved(entity) {
      this.candidate(entity);
    }
  }, {
    key: "_onEntityDestroyed",
    value: function _onEntityDestroyed(entity) {
      _classPrivateFieldGet(this, _cache)["delete"](entity);
    }
  }, {
    key: "bustCache",
    value: function bustCache() {
      _classPrivateFieldGet(this, _cache).clear();

      var _iterator6 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _ecs$5).entities.all),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var entity = _step6.value;
          this.candidate(entity);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return _classPrivateFieldGet(this, _cache);
    }
  }, {
    key: "get",
    value: function get() {
      return _classPrivateFieldGet(this, _cache);
    }
  }]);

  return Query;
}();

var _ecs$5 = new WeakMap();

var _filter = new WeakMap();

var _cache = new WeakMap();

var QueryRegistry = /*#__PURE__*/function () {
  function QueryRegistry(ecs) {
    _classCallCheck(this, QueryRegistry);

    _ecs$6.set(this, {
      writable: true,
      value: void 0
    });

    _queries.set(this, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(this, _ecs$6, ecs);
  }

  _createClass(QueryRegistry, [{
    key: "create",
    value: function create(filters) {
      var query = new Query(_classPrivateFieldGet(this, _ecs$6), filters);

      _classPrivateFieldGet(this, _queries).push(query);

      return query;
    }
  }, {
    key: "onComponentAdded",
    value: function onComponentAdded(entity) {
      _classPrivateFieldGet(this, _queries).forEach(function (query) {
        return query._onComponentAdded(entity);
      });
    }
  }, {
    key: "onComponentRemoved",
    value: function onComponentRemoved(entity) {
      _classPrivateFieldGet(this, _queries).forEach(function (query) {
        return query._onComponentRemoved(entity);
      });
    }
  }, {
    key: "onEntityCreated",
    value: function onEntityCreated(entity) {
      _classPrivateFieldGet(this, _queries).forEach(function (query) {
        return query._onEntityCreated(entity);
      });
    }
  }, {
    key: "onEntityDestroyed",
    value: function onEntityDestroyed(entity) {
      _classPrivateFieldGet(this, _queries).forEach(function (query) {
        return query._onEntityDestroyed(entity);
      });
    }
  }]);

  return QueryRegistry;
}();

var _ecs$6 = new WeakMap();

var _queries = new WeakMap();

var Engine = /*#__PURE__*/function () {
  function Engine() {
    _classCallCheck(this, Engine);

    this.idGenerator = function () {
      return nanoid();
    };

    this.components = new ComponentRegistry(this);
    this.prefabs = new PrefabRegistry(this);
    this.entities = new EntityRegistry(this);
    this.queries = new QueryRegistry(this);
  }

  _createClass(Engine, [{
    key: "generateId",
    value: function generateId() {
      return this.idGenerator();
    }
  }, {
    key: "createEntity",
    value: function createEntity() {
      return this.entities.create();
    }
  }, {
    key: "createPrefab",
    value: function createPrefab(nameOrClass) {
      var initialProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prefabs.create(nameOrClass, initialProps);
    }
  }, {
    key: "destroyEntity",
    value: function destroyEntity(entity) {
      return this.entities.destroy(entity);
    }
  }, {
    key: "registerPrefab",
    value: function registerPrefab(data) {
      this.prefabs.deserialize(data);
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(component) {
      this.components.register(component);
    }
  }, {
    key: "getEntity",
    value: function getEntity(id) {
      return this.entities.get(id);
    }
  }, {
    key: "createComponent",
    value: function createComponent(type, properties) {
      return this.components.create(type, properties);
    }
  }, {
    key: "createQuery",
    value: function createQuery(filters) {
      return this.queries.create(filters);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return {
        entities: this.entities.serialize()
      };
    }
  }, {
    key: "deserialize",
    value: function deserialize(data) {
      if (data.id) {
        return this.entities.deserializeEntity(data);
      }

      return this.entities.deserialize(data);
    }
  }]);

  return Engine;
}();


// CONCATENATED MODULE: ./src/ecs/components/Actor.js
function Actor_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Actor_typeof = function _typeof(obj) { return typeof obj; }; } else { Actor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Actor_typeof(obj); }

function Actor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Actor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Actor_createClass(Constructor, protoProps, staticProps) { if (protoProps) Actor_defineProperties(Constructor.prototype, protoProps); if (staticProps) Actor_defineProperties(Constructor, staticProps); return Constructor; }

function Actor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Actor_setPrototypeOf(subClass, superClass); }

function Actor_setPrototypeOf(o, p) { Actor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Actor_setPrototypeOf(o, p); }

function Actor_createSuper(Derived) { var hasNativeReflectConstruct = Actor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Actor_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Actor_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Actor_possibleConstructorReturn(this, result); }; }

function Actor_possibleConstructorReturn(self, call) { if (call && (Actor_typeof(call) === "object" || typeof call === "function")) { return call; } return Actor_assertThisInitialized(self); }

function Actor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Actor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Actor_getPrototypeOf(o) { Actor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Actor_getPrototypeOf(o); }

function Actor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Actor = /*#__PURE__*/function (_Component) {
  Actor_inherits(Actor, _Component);

  var _super = Actor_createSuper(Actor);

  function Actor() {
    Actor_classCallCheck(this, Actor);

    return _super.apply(this, arguments);
  }

  Actor_createClass(Actor, [{
    key: "onEnergyConsumed",
    value: function onEnergyConsumed(evt) {
      this.reduceEnergy(evt.data);
    }
  }, {
    key: "onTick",
    value: function onTick(evt) {
      this.addEnergy(1);
    }
  }, {
    key: "addEnergy",
    value: function addEnergy(value) {
      this.energy += value;

      if (this.energy >= 0) {
        this.energy = 0;
      }
    }
  }, {
    key: "reduceEnergy",
    value: function reduceEnergy(value) {
      this.addEnergy(value * -1);
    }
  }, {
    key: "hasEnergy",
    get: function get() {
      return this.energy >= 0;
    }
  }]);

  return Actor;
}(Component);

Actor_defineProperty(Actor, "properties", {
  energy: 0
});
// CONCATENATED MODULE: ./src/ai/GoalActionResult.js
var SUCCESS = 'SUCCESS';
var FAILURE = 'FAILURE';
var INVALID = 'INVALID';
// CONCATENATED MODULE: ./src/ecs/components/Brain.js
function Brain_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Brain_typeof = function _typeof(obj) { return typeof obj; }; } else { Brain_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Brain_typeof(obj); }

function Brain_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Brain_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Brain_createClass(Constructor, protoProps, staticProps) { if (protoProps) Brain_defineProperties(Constructor.prototype, protoProps); if (staticProps) Brain_defineProperties(Constructor, staticProps); return Constructor; }

function Brain_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Brain_setPrototypeOf(subClass, superClass); }

function Brain_setPrototypeOf(o, p) { Brain_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Brain_setPrototypeOf(o, p); }

function Brain_createSuper(Derived) { var hasNativeReflectConstruct = Brain_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Brain_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Brain_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Brain_possibleConstructorReturn(this, result); }; }

function Brain_possibleConstructorReturn(self, call) { if (call && (Brain_typeof(call) === "object" || typeof call === "function")) { return call; } return Brain_assertThisInitialized(self); }

function Brain_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Brain_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Brain_getPrototypeOf(o) { Brain_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Brain_getPrototypeOf(o); }

function Brain_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Brain = /*#__PURE__*/function (_Component) {
  Brain_inherits(Brain, _Component);

  var _super = Brain_createSuper(Brain);

  function Brain() {
    Brain_classCallCheck(this, Brain);

    return _super.apply(this, arguments);
  }

  Brain_createClass(Brain, [{
    key: "onTakeAction",
    value: function onTakeAction(evt) {
      while (this.peekGoal() && this.peekGoal().isFinished()) {
        this.popGoal().destroy();
      }

      var currentGoal = this.peekGoal();
      var result = currentGoal.takeAction();

      if (result == FAILURE) {
        this.removeGoal(currentGoal);
      } else if (result == INVALID) {
        this.removeGoal(currentGoal);
        this.entity.fireEvent('take-action');
      }

      evt.handle();
    }
  }, {
    key: "removeGoal",
    value: function removeGoal(goal) {
      this.goals = this.goals.filter(function (g) {
        var isSelf = Boolean(g.id === goal.id);
        var isSiblingGoal = Boolean(g.goal.originalIntent && g.goal.originalIntent.id === goal.originalIntent.id);

        if (isSelf || isSiblingGoal) {
          g.destroy();
          return false;
        }

        return true;
      });
    }
  }, {
    key: "pushGoal",
    value: function pushGoal(goal) {
      goal.goal.parent = this.entity;
      return this.goals.push(goal);
    }
  }, {
    key: "popGoal",
    value: function popGoal() {
      return this.goals.pop().goal;
    }
  }, {
    key: "peekGoal",
    value: function peekGoal() {
      return this.goals[this.goals.length - 1].goal;
    }
  }]);

  return Brain;
}(Component);

Brain_defineProperty(Brain, "properties", {
  goals: '<EntityArray>'
});
// CONCATENATED MODULE: ./src/ai/GoalTypes/GoalType.js
function GoalType_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function GoalType_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GoalType_ownKeys(Object(source), true).forEach(function (key) { GoalType_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GoalType_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function GoalType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoalType_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoalType_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoalType_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoalType_defineProperties(Constructor, staticProps); return Constructor; }

function GoalType_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var GoalType = /*#__PURE__*/function () {
  function GoalType() {
    GoalType_classCallCheck(this, GoalType);
  }

  GoalType_createClass(GoalType, null, [{
    key: "isFinished",
    value: function isFinished(entity, goal) {
      return false;
    }
  }, {
    key: "takeAction",
    value: function takeAction(entity, goal) {
      return FAILURE;
    }
  }, {
    key: "createAsSubGoal",
    value: function createAsSubGoal(originalIntent) {
      var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.create(GoalType_objectSpread(GoalType_objectSpread({}, properties), {}, {
        originalIntent: originalIntent.entity.id
      }));
    }
  }, {
    key: "create",
    value: function create() {
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return src_ecs.createPrefab('Goal', {
        goal: GoalType_objectSpread({
          name: this.name
        }, properties)
      });
    }
  }]);

  return GoalType;
}();

GoalType_defineProperty(GoalType, "name", 'Unknown');
// CONCATENATED MODULE: ./src/ai/GoalTypes/BoredGoalType.js
function BoredGoalType_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BoredGoalType_typeof = function _typeof(obj) { return typeof obj; }; } else { BoredGoalType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BoredGoalType_typeof(obj); }

function BoredGoalType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BoredGoalType_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BoredGoalType_setPrototypeOf(subClass, superClass); }

function BoredGoalType_setPrototypeOf(o, p) { BoredGoalType_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BoredGoalType_setPrototypeOf(o, p); }

function BoredGoalType_createSuper(Derived) { var hasNativeReflectConstruct = BoredGoalType_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = BoredGoalType_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = BoredGoalType_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BoredGoalType_possibleConstructorReturn(this, result); }; }

function BoredGoalType_possibleConstructorReturn(self, call) { if (call && (BoredGoalType_typeof(call) === "object" || typeof call === "function")) { return call; } return BoredGoalType_assertThisInitialized(self); }

function BoredGoalType_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BoredGoalType_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function BoredGoalType_getPrototypeOf(o) { BoredGoalType_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BoredGoalType_getPrototypeOf(o); }

function BoredGoalType_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var BoredGoalType = /*#__PURE__*/function (_GoalType) {
  BoredGoalType_inherits(BoredGoalType, _GoalType);

  var _super = BoredGoalType_createSuper(BoredGoalType);

  function BoredGoalType() {
    BoredGoalType_classCallCheck(this, BoredGoalType);

    return _super.apply(this, arguments);
  }

  return BoredGoalType;
}(GoalType);

BoredGoalType_defineProperty(BoredGoalType, "name", 'Bored');

BoredGoalType_defineProperty(BoredGoalType, "isFinished", function (entity, goal) {
  return false;
});

BoredGoalType_defineProperty(BoredGoalType, "takeAction", function (entity, goal) {
  var evt = entity.fireEvent('boredom');

  if (evt.data.goal) {
    entity.brain.pushGoal(evt.data.goal);
    entity.fireEvent('take-action');
    return SUCCESS;
  }

  entity.fireEvent('consume-energy', 1000);
  return SUCCESS;
});
// CONCATENATED MODULE: ./src/ai/GoalTypes/EatFoodGoalType.js
function EatFoodGoalType_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EatFoodGoalType_typeof = function _typeof(obj) { return typeof obj; }; } else { EatFoodGoalType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EatFoodGoalType_typeof(obj); }

function EatFoodGoalType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EatFoodGoalType_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EatFoodGoalType_setPrototypeOf(subClass, superClass); }

function EatFoodGoalType_setPrototypeOf(o, p) { EatFoodGoalType_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EatFoodGoalType_setPrototypeOf(o, p); }

function EatFoodGoalType_createSuper(Derived) { var hasNativeReflectConstruct = EatFoodGoalType_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EatFoodGoalType_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EatFoodGoalType_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EatFoodGoalType_possibleConstructorReturn(this, result); }; }

function EatFoodGoalType_possibleConstructorReturn(self, call) { if (call && (EatFoodGoalType_typeof(call) === "object" || typeof call === "function")) { return call; } return EatFoodGoalType_assertThisInitialized(self); }

function EatFoodGoalType_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EatFoodGoalType_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EatFoodGoalType_getPrototypeOf(o) { EatFoodGoalType_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EatFoodGoalType_getPrototypeOf(o); }

function EatFoodGoalType_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var EatFoodGoalType = /*#__PURE__*/function (_GoalType) {
  EatFoodGoalType_inherits(EatFoodGoalType, _GoalType);

  var _super = EatFoodGoalType_createSuper(EatFoodGoalType);

  function EatFoodGoalType() {
    EatFoodGoalType_classCallCheck(this, EatFoodGoalType);

    return _super.apply(this, arguments);
  }

  return EatFoodGoalType;
}(GoalType);

EatFoodGoalType_defineProperty(EatFoodGoalType, "name", 'EatFood');

EatFoodGoalType_defineProperty(EatFoodGoalType, "isFinished", function (entity, goal) {
  return goal.complete;
});

EatFoodGoalType_defineProperty(EatFoodGoalType, "takeAction", function (entity, goal) {
  var evt = entity.fireEvent('try-eat-food', {
    food: 10000
  });

  if (evt.handled) {
    goal.complete = true;
    return SUCCESS;
  }

  return FAILURE;
});
// CONCATENATED MODULE: ./src/ai/GoalTypes/SatisfyHungerGoalType.js
function SatisfyHungerGoalType_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SatisfyHungerGoalType_typeof = function _typeof(obj) { return typeof obj; }; } else { SatisfyHungerGoalType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SatisfyHungerGoalType_typeof(obj); }

function SatisfyHungerGoalType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SatisfyHungerGoalType_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SatisfyHungerGoalType_setPrototypeOf(subClass, superClass); }

function SatisfyHungerGoalType_setPrototypeOf(o, p) { SatisfyHungerGoalType_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SatisfyHungerGoalType_setPrototypeOf(o, p); }

function SatisfyHungerGoalType_createSuper(Derived) { var hasNativeReflectConstruct = SatisfyHungerGoalType_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SatisfyHungerGoalType_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SatisfyHungerGoalType_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SatisfyHungerGoalType_possibleConstructorReturn(this, result); }; }

function SatisfyHungerGoalType_possibleConstructorReturn(self, call) { if (call && (SatisfyHungerGoalType_typeof(call) === "object" || typeof call === "function")) { return call; } return SatisfyHungerGoalType_assertThisInitialized(self); }

function SatisfyHungerGoalType_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SatisfyHungerGoalType_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SatisfyHungerGoalType_getPrototypeOf(o) { SatisfyHungerGoalType_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SatisfyHungerGoalType_getPrototypeOf(o); }

function SatisfyHungerGoalType_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SatisfyHungerGoalType = /*#__PURE__*/function (_GoalType) {
  SatisfyHungerGoalType_inherits(SatisfyHungerGoalType, _GoalType);

  var _super = SatisfyHungerGoalType_createSuper(SatisfyHungerGoalType);

  function SatisfyHungerGoalType() {
    SatisfyHungerGoalType_classCallCheck(this, SatisfyHungerGoalType);

    return _super.apply(this, arguments);
  }

  return SatisfyHungerGoalType;
}(GoalType);

SatisfyHungerGoalType_defineProperty(SatisfyHungerGoalType, "name", 'SatisfyHunger');

SatisfyHungerGoalType_defineProperty(SatisfyHungerGoalType, "isFinished", function (entity, goal) {
  return !entity.eater.isHungry;
});

SatisfyHungerGoalType_defineProperty(SatisfyHungerGoalType, "takeAction", function (entity, goal) {
  entity.brain.pushGoal(EatFoodGoalType.createAsSubGoal(goal));
  entity.brain.pushGoal(EatFoodGoalType.createAsSubGoal(goal));
  entity.fireEvent('take-action');
  return SUCCESS;
});
// CONCATENATED MODULE: ./src/ai/GoalTypes/MoveGoalType.js
function MoveGoalType_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MoveGoalType_typeof = function _typeof(obj) { return typeof obj; }; } else { MoveGoalType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MoveGoalType_typeof(obj); }

function MoveGoalType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MoveGoalType_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MoveGoalType_setPrototypeOf(subClass, superClass); }

function MoveGoalType_setPrototypeOf(o, p) { MoveGoalType_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MoveGoalType_setPrototypeOf(o, p); }

function MoveGoalType_createSuper(Derived) { var hasNativeReflectConstruct = MoveGoalType_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MoveGoalType_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MoveGoalType_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MoveGoalType_possibleConstructorReturn(this, result); }; }

function MoveGoalType_possibleConstructorReturn(self, call) { if (call && (MoveGoalType_typeof(call) === "object" || typeof call === "function")) { return call; } return MoveGoalType_assertThisInitialized(self); }

function MoveGoalType_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MoveGoalType_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MoveGoalType_getPrototypeOf(o) { MoveGoalType_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MoveGoalType_getPrototypeOf(o); }

function MoveGoalType_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var MoveGoalType = /*#__PURE__*/function (_GoalType) {
  MoveGoalType_inherits(MoveGoalType, _GoalType);

  var _super = MoveGoalType_createSuper(MoveGoalType);

  function MoveGoalType() {
    MoveGoalType_classCallCheck(this, MoveGoalType);

    return _super.apply(this, arguments);
  }

  return MoveGoalType;
}(GoalType);

MoveGoalType_defineProperty(MoveGoalType, "name", 'Move');

MoveGoalType_defineProperty(MoveGoalType, "isFinished", function (entity, goal) {
  return goal.complete;
});

MoveGoalType_defineProperty(MoveGoalType, "takeAction", function (entity, goal) {
  var evt = entity.fireEvent('try-move', {
    x: goal.data.x,
    y: goal.data.y
  });

  if (evt.handled) {
    goal.complete = true;
    return SUCCESS;
  }

  return FAILURE;
});
// CONCATENATED MODULE: ./src/ai/GoalTypes/index.js




// CONCATENATED MODULE: ./src/ai/GoalEvaluator.js
;
var goalTypeMap = {};
Object.values(GoalTypes_namespaceObject).forEach(function (goalType) {
  goalTypeMap[goalType.name] = goalType;
});

var getGoalType = function getGoalType(name) {
  var type = goalTypeMap[name];

  if (!type) {
    console.warn("GoalType (".concat(name, ") not found!"));
  }

  return type;
};

var GoalEvaluator_isFinished = function isFinished(entity, goal) {
  var type = getGoalType(goal.name);
  return type.isFinished(entity, goal);
};
var GoalEvaluator_takeAction = function takeAction(entity, goal) {
  var type = getGoalType(goal.name);
  return type.takeAction(entity, goal);
};
// CONCATENATED MODULE: ./src/ecs/components/Goal.js
function Goal_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Goal_typeof = function _typeof(obj) { return typeof obj; }; } else { Goal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Goal_typeof(obj); }

function Goal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Goal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Goal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Goal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Goal_defineProperties(Constructor, staticProps); return Constructor; }

function Goal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Goal_setPrototypeOf(subClass, superClass); }

function Goal_setPrototypeOf(o, p) { Goal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Goal_setPrototypeOf(o, p); }

function Goal_createSuper(Derived) { var hasNativeReflectConstruct = Goal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Goal_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Goal_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Goal_possibleConstructorReturn(this, result); }; }

function Goal_possibleConstructorReturn(self, call) { if (call && (Goal_typeof(call) === "object" || typeof call === "function")) { return call; } return Goal_assertThisInitialized(self); }

function Goal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Goal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Goal_getPrototypeOf(o) { Goal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Goal_getPrototypeOf(o); }

function Goal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Goal = /*#__PURE__*/function (_Component) {
  Goal_inherits(Goal, _Component);

  var _super = Goal_createSuper(Goal);

  function Goal() {
    Goal_classCallCheck(this, Goal);

    return _super.apply(this, arguments);
  }

  Goal_createClass(Goal, [{
    key: "isFinished",
    value: function isFinished() {
      return GoalEvaluator_isFinished(this.parent, this);
    }
  }, {
    key: "takeAction",
    value: function takeAction() {
      return GoalEvaluator_takeAction(this.parent, this);
    }
  }]);

  return Goal;
}(Component);

Goal_defineProperty(Goal, "properties", {
  name: 'Bored',
  originalIntent: '<Entity>',
  parent: '<Entity>',
  target: '<Entity>',
  complete: false,
  data: {}
});
// CONCATENATED MODULE: ./src/ecs/components/Eater.js
function Eater_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Eater_typeof = function _typeof(obj) { return typeof obj; }; } else { Eater_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Eater_typeof(obj); }

function Eater_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Eater_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Eater_createClass(Constructor, protoProps, staticProps) { if (protoProps) Eater_defineProperties(Constructor.prototype, protoProps); if (staticProps) Eater_defineProperties(Constructor, staticProps); return Constructor; }

function Eater_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Eater_setPrototypeOf(subClass, superClass); }

function Eater_setPrototypeOf(o, p) { Eater_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Eater_setPrototypeOf(o, p); }

function Eater_createSuper(Derived) { var hasNativeReflectConstruct = Eater_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Eater_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Eater_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Eater_possibleConstructorReturn(this, result); }; }

function Eater_possibleConstructorReturn(self, call) { if (call && (Eater_typeof(call) === "object" || typeof call === "function")) { return call; } return Eater_assertThisInitialized(self); }

function Eater_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Eater_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Eater_getPrototypeOf(o) { Eater_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Eater_getPrototypeOf(o); }

function Eater_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Eater = /*#__PURE__*/function (_Component) {
  Eater_inherits(Eater, _Component);

  var _super = Eater_createSuper(Eater);

  function Eater() {
    Eater_classCallCheck(this, Eater);

    return _super.apply(this, arguments);
  }

  Eater_createClass(Eater, [{
    key: "onBoredom",
    value: function onBoredom(evt) {
      if (this.isHungry) {
        evt.data.goal = SatisfyHungerGoalType.create();
        evt.handle();
      }
    }
  }, {
    key: "onTryEatFood",
    value: function onTryEatFood(evt) {
      if (Math.random() < 0.75) {
        this.entity.fireEvent('log', 'eats some food');
        this.hunger += evt.data.food;
        this.entity.fireEvent('energy-consumed', 150);
        evt.handle();
      } else {
        this.entity.fireEvent('log', 'fails to eat the food');
      }
    }
  }, {
    key: "isHungry",
    get: function get() {
      return this.hunger <= 3000;
    }
  }]);

  return Eater;
}(Component);

Eater_defineProperty(Eater, "properties", {
  hunger: 6000
});
// CONCATENATED MODULE: ./src/ecs/components/Moniker.js
function Moniker_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Moniker_typeof = function _typeof(obj) { return typeof obj; }; } else { Moniker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Moniker_typeof(obj); }

function Moniker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Moniker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Moniker_setPrototypeOf(subClass, superClass); }

function Moniker_setPrototypeOf(o, p) { Moniker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Moniker_setPrototypeOf(o, p); }

function Moniker_createSuper(Derived) { var hasNativeReflectConstruct = Moniker_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Moniker_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Moniker_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Moniker_possibleConstructorReturn(this, result); }; }

function Moniker_possibleConstructorReturn(self, call) { if (call && (Moniker_typeof(call) === "object" || typeof call === "function")) { return call; } return Moniker_assertThisInitialized(self); }

function Moniker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Moniker_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Moniker_getPrototypeOf(o) { Moniker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Moniker_getPrototypeOf(o); }

function Moniker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Moniker = /*#__PURE__*/function (_Component) {
  Moniker_inherits(Moniker, _Component);

  var _super = Moniker_createSuper(Moniker);

  function Moniker() {
    Moniker_classCallCheck(this, Moniker);

    return _super.apply(this, arguments);
  }

  return Moniker;
}(Component);

Moniker_defineProperty(Moniker, "properties", {
  name: 'Unknown'
});
// CONCATENATED MODULE: ./src/ecs/components/Logger.js
function Logger_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Logger_typeof = function _typeof(obj) { return typeof obj; }; } else { Logger_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Logger_typeof(obj); }

function Logger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Logger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Logger_createClass(Constructor, protoProps, staticProps) { if (protoProps) Logger_defineProperties(Constructor.prototype, protoProps); if (staticProps) Logger_defineProperties(Constructor, staticProps); return Constructor; }

function Logger_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Logger_setPrototypeOf(subClass, superClass); }

function Logger_setPrototypeOf(o, p) { Logger_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Logger_setPrototypeOf(o, p); }

function Logger_createSuper(Derived) { var hasNativeReflectConstruct = Logger_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Logger_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Logger_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Logger_possibleConstructorReturn(this, result); }; }

function Logger_possibleConstructorReturn(self, call) { if (call && (Logger_typeof(call) === "object" || typeof call === "function")) { return call; } return Logger_assertThisInitialized(self); }

function Logger_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Logger_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Logger_getPrototypeOf(o) { Logger_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Logger_getPrototypeOf(o); }



var Logger = /*#__PURE__*/function (_Component) {
  Logger_inherits(Logger, _Component);

  var _super = Logger_createSuper(Logger);

  function Logger() {
    Logger_classCallCheck(this, Logger);

    return _super.apply(this, arguments);
  }

  Logger_createClass(Logger, [{
    key: "onLog",
    value: function onLog(evt) {
      console.log("[".concat(this.moniker, "]"), evt.data);
      evt.handle();
    }
  }, {
    key: "moniker",
    get: function get() {
      return this.entity.has(Moniker) ? this.entity.moniker.name : 'Unknown';
    }
  }]);

  return Logger;
}(Component);
// CONCATENATED MODULE: ./src/ecs/components/Position.js
function Position_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Position_typeof = function _typeof(obj) { return typeof obj; }; } else { Position_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Position_typeof(obj); }

function Position_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Position_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Position_setPrototypeOf(subClass, superClass); }

function Position_setPrototypeOf(o, p) { Position_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Position_setPrototypeOf(o, p); }

function Position_createSuper(Derived) { var hasNativeReflectConstruct = Position_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Position_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Position_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Position_possibleConstructorReturn(this, result); }; }

function Position_possibleConstructorReturn(self, call) { if (call && (Position_typeof(call) === "object" || typeof call === "function")) { return call; } return Position_assertThisInitialized(self); }

function Position_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Position_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Position_getPrototypeOf(o) { Position_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Position_getPrototypeOf(o); }

function Position_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Position = /*#__PURE__*/function (_Component) {
  Position_inherits(Position, _Component);

  var _super = Position_createSuper(Position);

  function Position() {
    Position_classCallCheck(this, Position);

    return _super.apply(this, arguments);
  }

  return Position;
}(Component);

Position_defineProperty(Position, "properties", {
  x: 0,
  y: 0
});
// CONCATENATED MODULE: ./src/ecs/components/MapLayer.js
function MapLayer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MapLayer_typeof = function _typeof(obj) { return typeof obj; }; } else { MapLayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MapLayer_typeof(obj); }

function MapLayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MapLayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MapLayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) MapLayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) MapLayer_defineProperties(Constructor, staticProps); return Constructor; }

function MapLayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MapLayer_setPrototypeOf(subClass, superClass); }

function MapLayer_setPrototypeOf(o, p) { MapLayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MapLayer_setPrototypeOf(o, p); }

function MapLayer_createSuper(Derived) { var hasNativeReflectConstruct = MapLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MapLayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MapLayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MapLayer_possibleConstructorReturn(this, result); }; }

function MapLayer_possibleConstructorReturn(self, call) { if (call && (MapLayer_typeof(call) === "object" || typeof call === "function")) { return call; } return MapLayer_assertThisInitialized(self); }

function MapLayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MapLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MapLayer_getPrototypeOf(o) { MapLayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MapLayer_getPrototypeOf(o); }

function MapLayer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var MapLayer = /*#__PURE__*/function (_Component) {
  MapLayer_inherits(MapLayer, _Component);

  var _super = MapLayer_createSuper(MapLayer);

  function MapLayer() {
    MapLayer_classCallCheck(this, MapLayer);

    return _super.apply(this, arguments);
  }

  MapLayer_createClass(MapLayer, [{
    key: "getByIndex",
    value: function getByIndex(idx) {
      return content[idx];
    }
  }, {
    key: "get",
    value: function get(x, y) {}
  }, {
    key: "map",
    get: function get() {
      return this.mapEntity.map;
    }
  }]);

  return MapLayer;
}(Component);

MapLayer_defineProperty(MapLayer, "properties", {
  mapEntity: '<Entity>',
  name: '',
  content: '<EntityArray>'
});
// CONCATENATED MODULE: ./src/ecs/components/Map.js
function Map_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Map_typeof = function _typeof(obj) { return typeof obj; }; } else { Map_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Map_typeof(obj); }

function Map_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Map_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Map_createClass(Constructor, protoProps, staticProps) { if (protoProps) Map_defineProperties(Constructor.prototype, protoProps); if (staticProps) Map_defineProperties(Constructor, staticProps); return Constructor; }

function Map_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Map_setPrototypeOf(subClass, superClass); }

function Map_setPrototypeOf(o, p) { Map_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Map_setPrototypeOf(o, p); }

function Map_createSuper(Derived) { var hasNativeReflectConstruct = Map_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Map_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Map_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Map_possibleConstructorReturn(this, result); }; }

function Map_possibleConstructorReturn(self, call) { if (call && (Map_typeof(call) === "object" || typeof call === "function")) { return call; } return Map_assertThisInitialized(self); }

function Map_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Map_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Map_getPrototypeOf(o) { Map_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Map_getPrototypeOf(o); }

function Map_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Map_Map = /*#__PURE__*/function (_Component) {
  Map_inherits(Map, _Component);

  var _super = Map_createSuper(Map);

  function Map() {
    Map_classCallCheck(this, Map);

    return _super.apply(this, arguments);
  }

  Map_createClass(Map, [{
    key: "idx",
    value: function idx(x, y) {
      return y * this.width + x;
    }
  }, {
    key: "coord",
    value: function coord(idx) {
      return idx % this.width, idx / this.width;
    }
  }, {
    key: "getLayer",
    value: function getLayer(name) {
      return this.entity.get(MapLayer, name);
    }
  }, {
    key: "map",
    get: function get() {
      return this.mapEntity.map;
    }
  }]);

  return Map;
}(Component);

Map_defineProperty(Map_Map, "properties", {
  name: '',
  width: 32,
  height: 32
});
// CONCATENATED MODULE: ./src/ecs/components/Glyph.js
function Glyph_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Glyph_typeof = function _typeof(obj) { return typeof obj; }; } else { Glyph_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Glyph_typeof(obj); }

function Glyph_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Glyph_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Glyph_setPrototypeOf(subClass, superClass); }

function Glyph_setPrototypeOf(o, p) { Glyph_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Glyph_setPrototypeOf(o, p); }

function Glyph_createSuper(Derived) { var hasNativeReflectConstruct = Glyph_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Glyph_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Glyph_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Glyph_possibleConstructorReturn(this, result); }; }

function Glyph_possibleConstructorReturn(self, call) { if (call && (Glyph_typeof(call) === "object" || typeof call === "function")) { return call; } return Glyph_assertThisInitialized(self); }

function Glyph_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Glyph_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Glyph_getPrototypeOf(o) { Glyph_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Glyph_getPrototypeOf(o); }

function Glyph_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Glyph = /*#__PURE__*/function (_Component) {
  Glyph_inherits(Glyph, _Component);

  var _super = Glyph_createSuper(Glyph);

  function Glyph() {
    Glyph_classCallCheck(this, Glyph);

    return _super.apply(this, arguments);
  }

  return Glyph;
}(Component);

Glyph_defineProperty(Glyph, "properties", {
  fg: '#fff',
  bg: '',
  "char": ''
});
// CONCATENATED MODULE: ./src/ecs/components/Legs.js
function Legs_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Legs_typeof = function _typeof(obj) { return typeof obj; }; } else { Legs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Legs_typeof(obj); }

function Legs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Legs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Legs_createClass(Constructor, protoProps, staticProps) { if (protoProps) Legs_defineProperties(Constructor.prototype, protoProps); if (staticProps) Legs_defineProperties(Constructor, staticProps); return Constructor; }

function Legs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Legs_setPrototypeOf(subClass, superClass); }

function Legs_setPrototypeOf(o, p) { Legs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Legs_setPrototypeOf(o, p); }

function Legs_createSuper(Derived) { var hasNativeReflectConstruct = Legs_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Legs_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Legs_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Legs_possibleConstructorReturn(this, result); }; }

function Legs_possibleConstructorReturn(self, call) { if (call && (Legs_typeof(call) === "object" || typeof call === "function")) { return call; } return Legs_assertThisInitialized(self); }

function Legs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Legs_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Legs_getPrototypeOf(o) { Legs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Legs_getPrototypeOf(o); }




var Legs = /*#__PURE__*/function (_Component) {
  Legs_inherits(Legs, _Component);

  var _super = Legs_createSuper(Legs);

  function Legs() {
    Legs_classCallCheck(this, Legs);

    return _super.apply(this, arguments);
  }

  Legs_createClass(Legs, [{
    key: "onTryMove",
    value: function onTryMove(evt) {
      if (!this.entity.has(Position)) {
        return;
      }

      if (this.entity.has(Actor) && !this.entity.actor.hasEnergy) {
        return;
      }

      this.entity.position.x += evt.data.x;
      this.entity.position.y += evt.data.y;
      this.entity.fireEvent('energy-consumed', 750);
      evt.handle();
    }
  }]);

  return Legs;
}(Component);
// CONCATENATED MODULE: ./src/enums/Directions.js
var directions = [{
  key: 0,
  shortName: 'NW',
  fullName: 'Northwest',
  delta: {
    x: -1,
    y: -1
  }
}, {
  key: 1,
  shortName: 'N',
  fullName: 'North',
  delta: {
    x: 0,
    y: -1
  }
}, {
  key: 2,
  shortName: 'NE',
  fullName: 'Northeast',
  delta: {
    x: 1,
    y: -1
  }
}, {
  key: 3,
  shortName: 'W',
  fullName: 'West',
  delta: {
    x: -1,
    y: 0
  }
}, {
  key: 4,
  shortName: 'Z',
  fullName: 'Here',
  delta: {
    x: 0,
    y: 0
  }
}, {
  key: 5,
  shortName: 'E',
  fullName: 'East',
  delta: {
    x: 1,
    y: 0
  }
}, {
  key: 6,
  shortName: 'SW',
  fullName: 'Southwest',
  delta: {
    x: -1,
    y: 1
  }
}, {
  key: 7,
  shortName: 'S',
  fullName: 'South',
  delta: {
    x: 0,
    y: 1
  }
}, {
  key: 8,
  shortName: 'SE',
  fullName: 'Southeast',
  delta: {
    x: 1,
    y: 1
  }
}];
var NW = 0;
var N = 1;
var NE = 2;
var W = 3;
var Z = 4;
var E = 5;
var SW = 6;
var S = 7;
var SE = 8;
var shortName = function shortName(direction) {
  return directions[direction].shortName;
};
var fullName = function fullName(direction) {
  return directions[direction].fullName;
};
var Directions_delta = function delta(direction) {
  return directions[direction].delta;
};
// CONCATENATED MODULE: ./src/ecs/components/MoveCommand.js
function MoveCommand_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MoveCommand_typeof = function _typeof(obj) { return typeof obj; }; } else { MoveCommand_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MoveCommand_typeof(obj); }

function MoveCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MoveCommand_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MoveCommand_setPrototypeOf(subClass, superClass); }

function MoveCommand_setPrototypeOf(o, p) { MoveCommand_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MoveCommand_setPrototypeOf(o, p); }

function MoveCommand_createSuper(Derived) { var hasNativeReflectConstruct = MoveCommand_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MoveCommand_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MoveCommand_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MoveCommand_possibleConstructorReturn(this, result); }; }

function MoveCommand_possibleConstructorReturn(self, call) { if (call && (MoveCommand_typeof(call) === "object" || typeof call === "function")) { return call; } return MoveCommand_assertThisInitialized(self); }

function MoveCommand_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MoveCommand_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MoveCommand_getPrototypeOf(o) { MoveCommand_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MoveCommand_getPrototypeOf(o); }

function MoveCommand_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var MoveCommand = /*#__PURE__*/function (_Component) {
  MoveCommand_inherits(MoveCommand, _Component);

  var _super = MoveCommand_createSuper(MoveCommand);

  function MoveCommand() {
    MoveCommand_classCallCheck(this, MoveCommand);

    return _super.apply(this, arguments);
  }

  return MoveCommand;
}(Component);

MoveCommand_defineProperty(MoveCommand, "properties", {
  direction: Z
});
// CONCATENATED MODULE: ./src/ecs/components/IsPlayer.js
function IsPlayer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { IsPlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { IsPlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return IsPlayer_typeof(obj); }

function IsPlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function IsPlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) IsPlayer_setPrototypeOf(subClass, superClass); }

function IsPlayer_setPrototypeOf(o, p) { IsPlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return IsPlayer_setPrototypeOf(o, p); }

function IsPlayer_createSuper(Derived) { var hasNativeReflectConstruct = IsPlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = IsPlayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = IsPlayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return IsPlayer_possibleConstructorReturn(this, result); }; }

function IsPlayer_possibleConstructorReturn(self, call) { if (call && (IsPlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return IsPlayer_assertThisInitialized(self); }

function IsPlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function IsPlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function IsPlayer_getPrototypeOf(o) { IsPlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return IsPlayer_getPrototypeOf(o); }


var IsPlayer = /*#__PURE__*/function (_Component) {
  IsPlayer_inherits(IsPlayer, _Component);

  var _super = IsPlayer_createSuper(IsPlayer);

  function IsPlayer() {
    IsPlayer_classCallCheck(this, IsPlayer);

    return _super.apply(this, arguments);
  }

  return IsPlayer;
}(Component);
// CONCATENATED MODULE: ./src/ecs/components/Wandering.js
function Wandering_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Wandering_typeof = function _typeof(obj) { return typeof obj; }; } else { Wandering_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Wandering_typeof(obj); }

function Wandering_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Wandering_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Wandering_createClass(Constructor, protoProps, staticProps) { if (protoProps) Wandering_defineProperties(Constructor.prototype, protoProps); if (staticProps) Wandering_defineProperties(Constructor, staticProps); return Constructor; }

function Wandering_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Wandering_setPrototypeOf(subClass, superClass); }

function Wandering_setPrototypeOf(o, p) { Wandering_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Wandering_setPrototypeOf(o, p); }

function Wandering_createSuper(Derived) { var hasNativeReflectConstruct = Wandering_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Wandering_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Wandering_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Wandering_possibleConstructorReturn(this, result); }; }

function Wandering_possibleConstructorReturn(self, call) { if (call && (Wandering_typeof(call) === "object" || typeof call === "function")) { return call; } return Wandering_assertThisInitialized(self); }

function Wandering_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Wandering_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Wandering_getPrototypeOf(o) { Wandering_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Wandering_getPrototypeOf(o); }




var Wandering = /*#__PURE__*/function (_Component) {
  Wandering_inherits(Wandering, _Component);

  var _super = Wandering_createSuper(Wandering);

  function Wandering() {
    Wandering_classCallCheck(this, Wandering);

    return _super.apply(this, arguments);
  }

  Wandering_createClass(Wandering, [{
    key: "onBoredom",
    value: function onBoredom(evt) {
      if (Math.random() < 0.75) {
        var direction = Math.floor(Math.random() * 9);
        var delta = Directions_delta(direction);
        evt.data.goal = MoveGoalType.create({
          data: delta
        });
        evt.handle();
      }
    }
  }]);

  return Wandering;
}(Component);
// CONCATENATED MODULE: ./src/ecs/components/index.js














// CONCATENATED MODULE: ./src/ecs/prefabs/BeingPrefab.json
const BeingPrefab_namespaceObject = JSON.parse("{\"name\":\"Being\",\"components\":[{\"type\":\"Actor\"},{\"type\":\"Position\"},{\"type\":\"Glyph\",\"properties\":{\"char\":\"?\"}}]}");
var prefabs_BeingPrefab_namespaceObject = /*#__PURE__*/__webpack_require__.t(BeingPrefab_namespaceObject, 2);
// CONCATENATED MODULE: ./src/ecs/prefabs/HumanPrefab.json
const HumanPrefab_namespaceObject = JSON.parse("{\"name\":\"Human\",\"inherit\":[\"Being\"],\"components\":[{\"type\":\"Moniker\"},{\"type\":\"Glyph\",\"properties\":{\"char\":\"h\",\"fg\":\"pink\"}},{\"type\":\"Legs\"},{\"type\":\"Eater\"}]}");
var prefabs_HumanPrefab_namespaceObject = /*#__PURE__*/__webpack_require__.t(HumanPrefab_namespaceObject, 2);
// CONCATENATED MODULE: ./src/ecs/prefabs/WandererPrefab.json
const WandererPrefab_namespaceObject = JSON.parse("{\"name\":\"Wanderer\",\"components\":[{\"type\":\"Moniker\",\"properties\":{\"name\":\"Wanderer\"}},{\"type\":\"Wandering\"},{\"type\":\"Brain\"},{\"type\":\"Logger\"}]}");
var prefabs_WandererPrefab_namespaceObject = /*#__PURE__*/__webpack_require__.t(WandererPrefab_namespaceObject, 2);
// CONCATENATED MODULE: ./src/ecs/prefabs/HumanWandererPrefab.json
const HumanWandererPrefab_namespaceObject = JSON.parse("{\"name\":\"HumanWanderer\",\"inherit\":[\"Human\",\"Wanderer\"]}");
var prefabs_HumanWandererPrefab_namespaceObject = /*#__PURE__*/__webpack_require__.t(HumanWandererPrefab_namespaceObject, 2);
// CONCATENATED MODULE: ./src/ecs/prefabs/PlayerPrefab.json
const PlayerPrefab_namespaceObject = JSON.parse("{\"name\":\"Player\",\"inherit\":[\"Human\"],\"components\":[{\"type\":\"Glyph\",\"properties\":{\"char\":\"@\",\"fg\":\"white\"}},{\"type\":\"IsPlayer\"},{\"type\":\"Logger\"}]}");
var prefabs_PlayerPrefab_namespaceObject = /*#__PURE__*/__webpack_require__.t(PlayerPrefab_namespaceObject, 2);
// CONCATENATED MODULE: ./src/ecs/prefabs/GoalPrefab.json
const GoalPrefab_namespaceObject = JSON.parse("{\"name\":\"Goal\",\"components\":[{\"type\":\"Goal\"}]}");
var prefabs_GoalPrefab_namespaceObject = /*#__PURE__*/__webpack_require__.t(GoalPrefab_namespaceObject, 2);
// CONCATENATED MODULE: ./src/ecs/prefabs/index.js
;











// CONCATENATED MODULE: ./src/ecs/index.js
;


var ecs = new Engine();
window.ecs = ecs;
Object.values(components_namespaceObject).forEach(function (component) {
  ecs.registerComponent(component);
});
Object.values(prefabs_namespaceObject).forEach(function (prefab) {
  ecs.registerPrefab(prefab);
});
/* harmony default export */ const src_ecs = (ecs);
// CONCATENATED MODULE: ./src/enums/keycodes.js
/* harmony default export */ const keycodes = (['', // [0]
'', // [1]
'', // [2]
'cancel', // [3]
'', // [4]
'', // [5]
'help', // [6]
'', // [7]
'back_space', // [8]
'tab', // [9]
'', // [10]
'', // [11]
'clear', // [12]
'enter', // [13]
'enter_special', // [14]
'', // [15]
'shift', // [16]
'control', // [17]
'alt', // [18]
'pause', // [19]
'caps_lock', // [20]
'kana', // [21]
'eisu', // [22]
'junja', // [23]
'final', // [24]
'hanja', // [25]
'', // [26]
'escape', // [27]
'convert', // [28]
'nonconvert', // [29]
'accept', // [30]
'modechange', // [31]
'space', // [32]
'page_up', // [33]
'page_down', // [34]
'end', // [35]
'home', // [36]
'left', // [37]
'up', // [38]
'right', // [39]
'down', // [40]
'select', // [41]
'print', // [42]
'execute', // [43]
'printscreen', // [44]
'insert', // [45]
'delete', // [46]
'', // [47]
'0', // [48]
'1', // [49]
'2', // [50]
'3', // [51]
'4', // [52]
'5', // [53]
'6', // [54]
'7', // [55]
'8', // [56]
'9', // [57]
'colon', // [58]
'semicolon', // [59]
'less_than', // [60]
'equals', // [61]
'greater_than', // [62]
'question_mark', // [63]
'at', // [64]
'a', // [65]
'b', // [66]
'c', // [67]
'd', // [68]
'e', // [69]
'f', // [70]
'g', // [71]
'h', // [72]
'i', // [73]
'j', // [74]
'k', // [75]
'l', // [76]
'm', // [77]
'n', // [78]
'o', // [79]
'p', // [80]
'q', // [81]
'r', // [82]
's', // [83]
't', // [84]
'u', // [85]
'v', // [86]
'w', // [87]
'x', // [88]
'y', // [89]
'z', // [90]
'os_key', // [91] windows key (windows) or command key (mac)
'', // [92]
'context_menu', // [93]
'', // [94]
'sleep', // [95]
'numpad0', // [96]
'numpad1', // [97]
'numpad2', // [98]
'numpad3', // [99]
'numpad4', // [100]
'numpad5', // [101]
'numpad6', // [102]
'numpad7', // [103]
'numpad8', // [104]
'numpad9', // [105]
'multiply', // [106]
'add', // [107]
'separator', // [108]
'subtract', // [109]
'decimal', // [110]
'divide', // [111]
'f1', // [112]
'f2', // [113]
'f3', // [114]
'f4', // [115]
'f5', // [116]
'f6', // [117]
'f7', // [118]
'f8', // [119]
'f9', // [120]
'f10', // [121]
'f11', // [122]
'f12', // [123]
'f13', // [124]
'f14', // [125]
'f15', // [126]
'f16', // [127]
'f17', // [128]
'f18', // [129]
'f19', // [130]
'f20', // [131]
'f21', // [132]
'f22', // [133]
'f23', // [134]
'f24', // [135]
'', // [136]
'', // [137]
'', // [138]
'', // [139]
'', // [140]
'', // [141]
'', // [142]
'', // [143]
'num_lock', // [144]
'scroll_lock', // [145]
'win_oem_fj_jisho', // [146]
'win_oem_fj_masshou', // [147]
'win_oem_fj_touroku', // [148]
'win_oem_fj_loya', // [149]
'win_oem_fj_roya', // [150]
'', // [151]
'', // [152]
'', // [153]
'', // [154]
'', // [155]
'', // [156]
'', // [157]
'', // [158]
'', // [159]
'circumflex', // [160]
'exclamation', // [161]
'double_quote', // [162]
'hash', // [163]
'dollar', // [164]
'percent', // [165]
'ampersand', // [166]
'underscore', // [167]
'open_paren', // [168]
'close_paren', // [169]
'asterisk', // [170]
'plus', // [171]
'pipe', // [172]
'hyphen_minus', // [173]
'open_curly_bracket', // [174]
'close_curly_bracket', // [175]
'tilde', // [176]
'', // [177]
'', // [178]
'', // [179]
'', // [180]
'volume_mute', // [181]
'volume_down', // [182]
'volume_up', // [183]
'', // [184]
'', // [185]
'semicolon', // [186]
'equals', // [187]
'comma', // [188]
'minus', // [189]
'period', // [190]
'slash', // [191]
'back_quote', // [192]
'', // [193]
'', // [194]
'', // [195]
'', // [196]
'', // [197]
'', // [198]
'', // [199]
'', // [200]
'', // [201]
'', // [202]
'', // [203]
'', // [204]
'', // [205]
'', // [206]
'', // [207]
'', // [208]
'', // [209]
'', // [210]
'', // [211]
'', // [212]
'', // [213]
'', // [214]
'', // [215]
'', // [216]
'', // [217]
'', // [218]
'open_bracket', // [219]
'back_slash', // [220]
'close_bracket', // [221]
'quote', // [222]
'', // [223]
'meta', // [224]
'altgr', // [225]
'', // [226]
'win_ico_help', // [227]
'win_ico_00', // [228]
'', // [229]
'win_ico_clear', // [230]
'', // [231]
'', // [232]
'win_oem_reset', // [233]
'win_oem_jump', // [234]
'win_oem_pa1', // [235]
'win_oem_pa2', // [236]
'win_oem_pa3', // [237]
'win_oem_wsctrl', // [238]
'win_oem_cusel', // [239]
'win_oem_attn', // [240]
'win_oem_finish', // [241]
'win_oem_copy', // [242]
'win_oem_auto', // [243]
'win_oem_enlw', // [244]
'win_oem_backtab', // [245]
'attn', // [246]
'crsel', // [247]
'exsel', // [248]
'ereof', // [249]
'play', // [250]
'zoom', // [251]
'', // [252]
'pa1', // [253]
'win_oem_clear', // [254]
'' // [255]
]);
// CONCATENATED MODULE: ./node_modules/rot-js/lib/rng.js
function rng_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rng_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rng_createClass(Constructor, protoProps, staticProps) { if (protoProps) rng_defineProperties(Constructor.prototype, protoProps); if (staticProps) rng_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This code is an implementation of Alea algorithm; (C) 2010 Johannes Baagøe.
 * Alea is licensed according to the http://en.wikipedia.org/wiki/MIT_License.
 */
var FRAC = 2.3283064365386963e-10;
/* 2^-32 */

var rng_RNG = /*#__PURE__*/function () {
  function RNG() {
    rng_classCallCheck(this, RNG);

    this._seed = 0;
    this._s0 = 0;
    this._s1 = 0;
    this._s2 = 0;
    this._c = 0;
  }

  rng_createClass(RNG, [{
    key: "getSeed",
    value: function getSeed() {
      return this._seed;
    }
    /**
     * Seed the number generator
     */

  }, {
    key: "setSeed",
    value: function setSeed(seed) {
      seed = seed < 1 ? 1 / seed : seed;
      this._seed = seed;
      this._s0 = (seed >>> 0) * FRAC;
      seed = seed * 69069 + 1 >>> 0;
      this._s1 = seed * FRAC;
      seed = seed * 69069 + 1 >>> 0;
      this._s2 = seed * FRAC;
      this._c = 1;
      return this;
    }
    /**
     * @returns Pseudorandom value [0,1), uniformly distributed
     */

  }, {
    key: "getUniform",
    value: function getUniform() {
      var t = 2091639 * this._s0 + this._c * FRAC;
      this._s0 = this._s1;
      this._s1 = this._s2;
      this._c = t | 0;
      this._s2 = t - this._c;
      return this._s2;
    }
    /**
     * @param lowerBound The lower end of the range to return a value from, inclusive
     * @param upperBound The upper end of the range to return a value from, inclusive
     * @returns Pseudorandom value [lowerBound, upperBound], using ROT.RNG.getUniform() to distribute the value
     */

  }, {
    key: "getUniformInt",
    value: function getUniformInt(lowerBound, upperBound) {
      var max = Math.max(lowerBound, upperBound);
      var min = Math.min(lowerBound, upperBound);
      return Math.floor(this.getUniform() * (max - min + 1)) + min;
    }
    /**
     * @param mean Mean value
     * @param stddev Standard deviation. ~95% of the absolute values will be lower than 2*stddev.
     * @returns A normally distributed pseudorandom value
     */

  }, {
    key: "getNormal",
    value: function getNormal() {
      var mean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var stddev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var u, v, r;

      do {
        u = 2 * this.getUniform() - 1;
        v = 2 * this.getUniform() - 1;
        r = u * u + v * v;
      } while (r > 1 || r == 0);

      var gauss = u * Math.sqrt(-2 * Math.log(r) / r);
      return mean + gauss * stddev;
    }
    /**
     * @returns Pseudorandom value [1,100] inclusive, uniformly distributed
     */

  }, {
    key: "getPercentage",
    value: function getPercentage() {
      return 1 + Math.floor(this.getUniform() * 100);
    }
    /**
     * @returns Randomly picked item, null when length=0
     */

  }, {
    key: "getItem",
    value: function getItem(array) {
      if (!array.length) {
        return null;
      }

      return array[Math.floor(this.getUniform() * array.length)];
    }
    /**
     * @returns New array with randomized items
     */

  }, {
    key: "shuffle",
    value: function shuffle(array) {
      var result = [];
      var clone = array.slice();

      while (clone.length) {
        var index = clone.indexOf(this.getItem(clone));
        result.push(clone.splice(index, 1)[0]);
      }

      return result;
    }
    /**
     * @param data key=whatever, value=weight (relative probability)
     * @returns whatever
     */

  }, {
    key: "getWeightedValue",
    value: function getWeightedValue(data) {
      var total = 0;

      for (var _id in data) {
        total += data[_id];
      }

      var random = this.getUniform() * total;
      var id,
          part = 0;

      for (id in data) {
        part += data[id];

        if (random < part) {
          return id;
        }
      } // If by some floating-point annoyance we have
      // random >= total, just return the last id.


      return id;
    }
    /**
     * Get RNG state. Useful for storing the state and re-setting it via setState.
     * @returns Internal state
     */

  }, {
    key: "getState",
    value: function getState() {
      return [this._s0, this._s1, this._s2, this._c];
    }
    /**
     * Set a previously retrieved state.
     */

  }, {
    key: "setState",
    value: function setState(state) {
      this._s0 = state[0];
      this._s1 = state[1];
      this._s2 = state[2];
      this._c = state[3];
      return this;
    }
    /**
     * Returns a cloned RNG
     */

  }, {
    key: "clone",
    value: function clone() {
      var clone = new RNG();
      return clone.setState(this.getState());
    }
  }]);

  return RNG;
}();

/* harmony default export */ const rng = (new rng_RNG().setSeed(Date.now()));
// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/backend.js
function backend_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function backend_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function backend_createClass(Constructor, protoProps, staticProps) { if (protoProps) backend_defineProperties(Constructor.prototype, protoProps); if (staticProps) backend_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Abstract display backend module
 * @private
 */
var Backend = /*#__PURE__*/function () {
  function Backend() {
    backend_classCallCheck(this, Backend);
  }

  backend_createClass(Backend, [{
    key: "getContainer",
    value: function getContainer() {
      return null;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this._options = options;
    }
  }]);

  return Backend;
}();


// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/canvas.js
function canvas_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { canvas_typeof = function _typeof(obj) { return typeof obj; }; } else { canvas_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return canvas_typeof(obj); }

function canvas_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function canvas_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function canvas_createClass(Constructor, protoProps, staticProps) { if (protoProps) canvas_defineProperties(Constructor.prototype, protoProps); if (staticProps) canvas_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = canvas_getPrototypeOf(object); if (object === null) break; } return object; }

function canvas_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) canvas_setPrototypeOf(subClass, superClass); }

function canvas_setPrototypeOf(o, p) { canvas_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return canvas_setPrototypeOf(o, p); }

function canvas_createSuper(Derived) { var hasNativeReflectConstruct = canvas_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = canvas_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = canvas_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return canvas_possibleConstructorReturn(this, result); }; }

function canvas_possibleConstructorReturn(self, call) { if (call && (canvas_typeof(call) === "object" || typeof call === "function")) { return call; } return canvas_assertThisInitialized(self); }

function canvas_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function canvas_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function canvas_getPrototypeOf(o) { canvas_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return canvas_getPrototypeOf(o); }



var Canvas = /*#__PURE__*/function (_Backend) {
  canvas_inherits(Canvas, _Backend);

  var _super = canvas_createSuper(Canvas);

  function Canvas() {
    var _this;

    canvas_classCallCheck(this, Canvas);

    _this = _super.call(this);
    _this._ctx = document.createElement("canvas").getContext("2d");
    return _this;
  }

  canvas_createClass(Canvas, [{
    key: "schedule",
    value: function schedule(cb) {
      requestAnimationFrame(cb);
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this._ctx.canvas;
    }
  }, {
    key: "setOptions",
    value: function setOptions(opts) {
      _get(canvas_getPrototypeOf(Canvas.prototype), "setOptions", this).call(this, opts);

      var style = opts.fontStyle ? "".concat(opts.fontStyle, " ") : "";
      var font = "".concat(style, " ").concat(opts.fontSize, "px ").concat(opts.fontFamily);
      this._ctx.font = font;

      this._updateSize();

      this._ctx.font = font;
      this._ctx.textAlign = "center";
      this._ctx.textBaseline = "middle";
    }
  }, {
    key: "clear",
    value: function clear() {
      this._ctx.fillStyle = this._options.bg;

      this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }
  }, {
    key: "eventToPosition",
    value: function eventToPosition(x, y) {
      var canvas = this._ctx.canvas;
      var rect = canvas.getBoundingClientRect();
      x -= rect.left;
      y -= rect.top;
      x *= canvas.width / rect.width;
      y *= canvas.height / rect.height;

      if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
        return [-1, -1];
      }

      return this._normalizedEventToPosition(x, y);
    }
  }]);

  return Canvas;
}(Backend);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/util.js
/**
 * Always positive modulus
 * @param x Operand
 * @param n Modulus
 * @returns x modulo n
 */
function mod(x, n) {
  return (x % n + n) % n;
}
function util_clamp(val) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (val < min) return min;
  if (val > max) return max;
  return val;
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}
/**
 * Format a string in a flexible way. Scans for %s strings and replaces them with arguments. List of patterns is modifiable via String.format.map.
 * @param {string} template
 * @param {any} [argv]
 */

function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var map = format.map;

  var replacer = function replacer(match, group1, group2, index) {
    if (template.charAt(index - 1) == "%") {
      return match.substring(1);
    }

    if (!args.length) {
      return match;
    }

    var obj = args[0];
    var group = group1 || group2;
    var parts = group.split(",");
    var name = parts.shift() || "";
    var method = map[name.toLowerCase()];

    if (!method) {
      return match;
    }

    obj = args.shift();
    var replaced = obj[method].apply(obj, parts);
    var first = name.charAt(0);

    if (first != first.toLowerCase()) {
      replaced = capitalize(replaced);
    }

    return replaced;
  };

  return template.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi, replacer);
}
format.map = {
  "s": "toString"
};
// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/hex.js
function hex_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hex_typeof = function _typeof(obj) { return typeof obj; }; } else { hex_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hex_typeof(obj); }

function hex_slicedToArray(arr, i) { return hex_arrayWithHoles(arr) || hex_iterableToArrayLimit(arr, i) || hex_unsupportedIterableToArray(arr, i) || hex_nonIterableRest(); }

function hex_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function hex_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return hex_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hex_arrayLikeToArray(o, minLen); }

function hex_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function hex_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function hex_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function hex_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hex_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hex_createClass(Constructor, protoProps, staticProps) { if (protoProps) hex_defineProperties(Constructor.prototype, protoProps); if (staticProps) hex_defineProperties(Constructor, staticProps); return Constructor; }

function hex_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hex_setPrototypeOf(subClass, superClass); }

function hex_setPrototypeOf(o, p) { hex_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hex_setPrototypeOf(o, p); }

function hex_createSuper(Derived) { var hasNativeReflectConstruct = hex_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = hex_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = hex_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return hex_possibleConstructorReturn(this, result); }; }

function hex_possibleConstructorReturn(self, call) { if (call && (hex_typeof(call) === "object" || typeof call === "function")) { return call; } return hex_assertThisInitialized(self); }

function hex_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hex_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function hex_getPrototypeOf(o) { hex_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hex_getPrototypeOf(o); }



/**
 * @class Hexagonal backend
 * @private
 */

var Hex = /*#__PURE__*/function (_Canvas) {
  hex_inherits(Hex, _Canvas);

  var _super = hex_createSuper(Hex);

  function Hex() {
    var _this;

    hex_classCallCheck(this, Hex);

    _this = _super.call(this);
    _this._spacingX = 0;
    _this._spacingY = 0;
    _this._hexSize = 0;
    return _this;
  }

  hex_createClass(Hex, [{
    key: "draw",
    value: function draw(data, clearBefore) {
      var _data = hex_slicedToArray(data, 5),
          x = _data[0],
          y = _data[1],
          ch = _data[2],
          fg = _data[3],
          bg = _data[4];

      var px = [(x + 1) * this._spacingX, y * this._spacingY + this._hexSize];

      if (this._options.transpose) {
        px.reverse();
      }

      if (clearBefore) {
        this._ctx.fillStyle = bg;

        this._fill(px[0], px[1]);
      }

      if (!ch) {
        return;
      }

      this._ctx.fillStyle = fg;
      var chars = [].concat(ch);

      for (var i = 0; i < chars.length; i++) {
        this._ctx.fillText(chars[i], px[0], Math.ceil(px[1]));
      }
    }
  }, {
    key: "computeSize",
    value: function computeSize(availWidth, availHeight) {
      if (this._options.transpose) {
        availWidth += availHeight;
        availHeight = availWidth - availHeight;
        availWidth -= availHeight;
      }

      var width = Math.floor(availWidth / this._spacingX) - 1;
      var height = Math.floor((availHeight - 2 * this._hexSize) / this._spacingY + 1);
      return [width, height];
    }
  }, {
    key: "computeFontSize",
    value: function computeFontSize(availWidth, availHeight) {
      if (this._options.transpose) {
        availWidth += availHeight;
        availHeight = availWidth - availHeight;
        availWidth -= availHeight;
      }

      var hexSizeWidth = 2 * availWidth / ((this._options.width + 1) * Math.sqrt(3)) - 1;
      var hexSizeHeight = availHeight / (2 + 1.5 * (this._options.height - 1));
      var hexSize = Math.min(hexSizeWidth, hexSizeHeight); // compute char ratio

      var oldFont = this._ctx.font;
      this._ctx.font = "100px " + this._options.fontFamily;
      var width = Math.ceil(this._ctx.measureText("W").width);
      this._ctx.font = oldFont;
      var ratio = width / 100;
      hexSize = Math.floor(hexSize) + 1; // closest larger hexSize
      // FIXME char size computation does not respect transposed hexes

      var fontSize = 2 * hexSize / (this._options.spacing * (1 + ratio / Math.sqrt(3))); // closest smaller fontSize

      return Math.ceil(fontSize) - 1;
    }
  }, {
    key: "_normalizedEventToPosition",
    value: function _normalizedEventToPosition(x, y) {
      var nodeSize;

      if (this._options.transpose) {
        x += y;
        y = x - y;
        x -= y;
        nodeSize = this._ctx.canvas.width;
      } else {
        nodeSize = this._ctx.canvas.height;
      }

      var size = nodeSize / this._options.height;
      y = Math.floor(y / size);

      if (mod(y, 2)) {
        /* odd row */
        x -= this._spacingX;
        x = 1 + 2 * Math.floor(x / (2 * this._spacingX));
      } else {
        x = 2 * Math.floor(x / (2 * this._spacingX));
      }

      return [x, y];
    }
    /**
     * Arguments are pixel values. If "transposed" mode is enabled, then these two are already swapped.
     */

  }, {
    key: "_fill",
    value: function _fill(cx, cy) {
      var a = this._hexSize;
      var b = this._options.border;
      var ctx = this._ctx;
      ctx.beginPath();

      if (this._options.transpose) {
        ctx.moveTo(cx - a + b, cy);
        ctx.lineTo(cx - a / 2 + b, cy + this._spacingX - b);
        ctx.lineTo(cx + a / 2 - b, cy + this._spacingX - b);
        ctx.lineTo(cx + a - b, cy);
        ctx.lineTo(cx + a / 2 - b, cy - this._spacingX + b);
        ctx.lineTo(cx - a / 2 + b, cy - this._spacingX + b);
        ctx.lineTo(cx - a + b, cy);
      } else {
        ctx.moveTo(cx, cy - a + b);
        ctx.lineTo(cx + this._spacingX - b, cy - a / 2 + b);
        ctx.lineTo(cx + this._spacingX - b, cy + a / 2 - b);
        ctx.lineTo(cx, cy + a - b);
        ctx.lineTo(cx - this._spacingX + b, cy + a / 2 - b);
        ctx.lineTo(cx - this._spacingX + b, cy - a / 2 + b);
        ctx.lineTo(cx, cy - a + b);
      }

      ctx.fill();
    }
  }, {
    key: "_updateSize",
    value: function _updateSize() {
      var opts = this._options;
      var charWidth = Math.ceil(this._ctx.measureText("W").width);
      this._hexSize = Math.floor(opts.spacing * (opts.fontSize + charWidth / Math.sqrt(3)) / 2);
      this._spacingX = this._hexSize * Math.sqrt(3) / 2;
      this._spacingY = this._hexSize * 1.5;
      var xprop;
      var yprop;

      if (opts.transpose) {
        xprop = "height";
        yprop = "width";
      } else {
        xprop = "width";
        yprop = "height";
      }

      this._ctx.canvas[xprop] = Math.ceil((opts.width + 1) * this._spacingX);
      this._ctx.canvas[yprop] = Math.ceil((opts.height - 1) * this._spacingY + 2 * this._hexSize);
    }
  }]);

  return Hex;
}(Canvas);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/rect.js
function rect_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { rect_typeof = function _typeof(obj) { return typeof obj; }; } else { rect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return rect_typeof(obj); }

function rect_slicedToArray(arr, i) { return rect_arrayWithHoles(arr) || rect_iterableToArrayLimit(arr, i) || rect_unsupportedIterableToArray(arr, i) || rect_nonIterableRest(); }

function rect_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function rect_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return rect_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rect_arrayLikeToArray(o, minLen); }

function rect_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function rect_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function rect_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function rect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rect_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rect_createClass(Constructor, protoProps, staticProps) { if (protoProps) rect_defineProperties(Constructor.prototype, protoProps); if (staticProps) rect_defineProperties(Constructor, staticProps); return Constructor; }

function rect_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { rect_get = Reflect.get; } else { rect_get = function _get(target, property, receiver) { var base = rect_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return rect_get(target, property, receiver || target); }

function rect_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = rect_getPrototypeOf(object); if (object === null) break; } return object; }

function rect_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) rect_setPrototypeOf(subClass, superClass); }

function rect_setPrototypeOf(o, p) { rect_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return rect_setPrototypeOf(o, p); }

function rect_createSuper(Derived) { var hasNativeReflectConstruct = rect_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = rect_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = rect_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return rect_possibleConstructorReturn(this, result); }; }

function rect_possibleConstructorReturn(self, call) { if (call && (rect_typeof(call) === "object" || typeof call === "function")) { return call; } return rect_assertThisInitialized(self); }

function rect_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function rect_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function rect_getPrototypeOf(o) { rect_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return rect_getPrototypeOf(o); }


/**
 * @class Rectangular backend
 * @private
 */

var Rect =
/** @class */
function () {
  var Rect = /*#__PURE__*/function (_Canvas) {
    rect_inherits(Rect, _Canvas);

    var _super = rect_createSuper(Rect);

    function Rect() {
      var _this;

      rect_classCallCheck(this, Rect);

      _this = _super.call(this);
      _this._spacingX = 0;
      _this._spacingY = 0;
      _this._canvasCache = {};
      return _this;
    }

    rect_createClass(Rect, [{
      key: "setOptions",
      value: function setOptions(options) {
        rect_get(rect_getPrototypeOf(Rect.prototype), "setOptions", this).call(this, options);

        this._canvasCache = {};
      }
    }, {
      key: "draw",
      value: function draw(data, clearBefore) {
        if (Rect.cache) {
          this._drawWithCache(data);
        } else {
          this._drawNoCache(data, clearBefore);
        }
      }
    }, {
      key: "_drawWithCache",
      value: function _drawWithCache(data) {
        var _data = rect_slicedToArray(data, 5),
            x = _data[0],
            y = _data[1],
            ch = _data[2],
            fg = _data[3],
            bg = _data[4];

        var hash = "" + ch + fg + bg;
        var canvas;

        if (hash in this._canvasCache) {
          canvas = this._canvasCache[hash];
        } else {
          var b = this._options.border;
          canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = this._spacingX;
          canvas.height = this._spacingY;
          ctx.fillStyle = bg;
          ctx.fillRect(b, b, canvas.width - b, canvas.height - b);

          if (ch) {
            ctx.fillStyle = fg;
            ctx.font = this._ctx.font;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            var chars = [].concat(ch);

            for (var i = 0; i < chars.length; i++) {
              ctx.fillText(chars[i], this._spacingX / 2, Math.ceil(this._spacingY / 2));
            }
          }

          this._canvasCache[hash] = canvas;
        }

        this._ctx.drawImage(canvas, x * this._spacingX, y * this._spacingY);
      }
    }, {
      key: "_drawNoCache",
      value: function _drawNoCache(data, clearBefore) {
        var _data2 = rect_slicedToArray(data, 5),
            x = _data2[0],
            y = _data2[1],
            ch = _data2[2],
            fg = _data2[3],
            bg = _data2[4];

        if (clearBefore) {
          var b = this._options.border;
          this._ctx.fillStyle = bg;

          this._ctx.fillRect(x * this._spacingX + b, y * this._spacingY + b, this._spacingX - b, this._spacingY - b);
        }

        if (!ch) {
          return;
        }

        this._ctx.fillStyle = fg;
        var chars = [].concat(ch);

        for (var i = 0; i < chars.length; i++) {
          this._ctx.fillText(chars[i], (x + 0.5) * this._spacingX, Math.ceil((y + 0.5) * this._spacingY));
        }
      }
    }, {
      key: "computeSize",
      value: function computeSize(availWidth, availHeight) {
        var width = Math.floor(availWidth / this._spacingX);
        var height = Math.floor(availHeight / this._spacingY);
        return [width, height];
      }
    }, {
      key: "computeFontSize",
      value: function computeFontSize(availWidth, availHeight) {
        var boxWidth = Math.floor(availWidth / this._options.width);
        var boxHeight = Math.floor(availHeight / this._options.height);
        /* compute char ratio */

        var oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        var width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        var ratio = width / 100;
        var widthFraction = ratio * boxHeight / boxWidth;

        if (widthFraction > 1) {
          /* too wide with current aspect ratio */
          boxHeight = Math.floor(boxHeight / widthFraction);
        }

        return Math.floor(boxHeight / this._options.spacing);
      }
    }, {
      key: "_normalizedEventToPosition",
      value: function _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._spacingX), Math.floor(y / this._spacingY)];
      }
    }, {
      key: "_updateSize",
      value: function _updateSize() {
        var opts = this._options;
        var charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._spacingX = Math.ceil(opts.spacing * charWidth);
        this._spacingY = Math.ceil(opts.spacing * opts.fontSize);

        if (opts.forceSquareRatio) {
          this._spacingX = this._spacingY = Math.max(this._spacingX, this._spacingY);
        }

        this._ctx.canvas.width = opts.width * this._spacingX;
        this._ctx.canvas.height = opts.height * this._spacingY;
      }
    }]);

    return Rect;
  }(Canvas);

  Rect.cache = false;
  return Rect;
}();

/* harmony default export */ const rect = (Rect);
// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/tile.js
function tile_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tile_typeof = function _typeof(obj) { return typeof obj; }; } else { tile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tile_typeof(obj); }

function tile_slicedToArray(arr, i) { return tile_arrayWithHoles(arr) || tile_iterableToArrayLimit(arr, i) || tile_unsupportedIterableToArray(arr, i) || tile_nonIterableRest(); }

function tile_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function tile_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tile_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tile_arrayLikeToArray(o, minLen); }

function tile_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function tile_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function tile_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function tile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tile_createClass(Constructor, protoProps, staticProps) { if (protoProps) tile_defineProperties(Constructor.prototype, protoProps); if (staticProps) tile_defineProperties(Constructor, staticProps); return Constructor; }

function tile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tile_setPrototypeOf(subClass, superClass); }

function tile_setPrototypeOf(o, p) { tile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tile_setPrototypeOf(o, p); }

function tile_createSuper(Derived) { var hasNativeReflectConstruct = tile_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tile_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tile_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tile_possibleConstructorReturn(this, result); }; }

function tile_possibleConstructorReturn(self, call) { if (call && (tile_typeof(call) === "object" || typeof call === "function")) { return call; } return tile_assertThisInitialized(self); }

function tile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tile_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tile_getPrototypeOf(o) { tile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tile_getPrototypeOf(o); }


/**
 * @class Tile backend
 * @private
 */

var Tile = /*#__PURE__*/function (_Canvas) {
  tile_inherits(Tile, _Canvas);

  var _super = tile_createSuper(Tile);

  function Tile() {
    var _this;

    tile_classCallCheck(this, Tile);

    _this = _super.call(this);
    _this._colorCanvas = document.createElement("canvas");
    return _this;
  }

  tile_createClass(Tile, [{
    key: "draw",
    value: function draw(data, clearBefore) {
      var _data = tile_slicedToArray(data, 5),
          x = _data[0],
          y = _data[1],
          ch = _data[2],
          fg = _data[3],
          bg = _data[4];

      var tileWidth = this._options.tileWidth;
      var tileHeight = this._options.tileHeight;

      if (clearBefore) {
        if (this._options.tileColorize) {
          this._ctx.clearRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        } else {
          this._ctx.fillStyle = bg;

          this._ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
      }

      if (!ch) {
        return;
      }

      var chars = [].concat(ch);
      var fgs = [].concat(fg);
      var bgs = [].concat(bg);

      for (var i = 0; i < chars.length; i++) {
        var tile = this._options.tileMap[chars[i]];

        if (!tile) {
          throw new Error("Char \"".concat(chars[i], "\" not found in tileMap"));
        }

        if (this._options.tileColorize) {
          // apply colorization
          var canvas = this._colorCanvas;
          var context = canvas.getContext("2d");
          context.globalCompositeOperation = "source-over";
          context.clearRect(0, 0, tileWidth, tileHeight);
          var _fg = fgs[i];
          var _bg = bgs[i];
          context.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);

          if (_fg != "transparent") {
            context.fillStyle = _fg;
            context.globalCompositeOperation = "source-atop";
            context.fillRect(0, 0, tileWidth, tileHeight);
          }

          if (_bg != "transparent") {
            context.fillStyle = _bg;
            context.globalCompositeOperation = "destination-over";
            context.fillRect(0, 0, tileWidth, tileHeight);
          }

          this._ctx.drawImage(canvas, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        } else {
          // no colorizing, easy
          this._ctx.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
      }
    }
  }, {
    key: "computeSize",
    value: function computeSize(availWidth, availHeight) {
      var width = Math.floor(availWidth / this._options.tileWidth);
      var height = Math.floor(availHeight / this._options.tileHeight);
      return [width, height];
    }
  }, {
    key: "computeFontSize",
    value: function computeFontSize() {
      throw new Error("Tile backend does not understand font size");
    }
  }, {
    key: "_normalizedEventToPosition",
    value: function _normalizedEventToPosition(x, y) {
      return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
    }
  }, {
    key: "_updateSize",
    value: function _updateSize() {
      var opts = this._options;
      this._ctx.canvas.width = opts.width * opts.tileWidth;
      this._ctx.canvas.height = opts.height * opts.tileHeight;
      this._colorCanvas.width = opts.tileWidth;
      this._colorCanvas.height = opts.tileHeight;
    }
  }]);

  return Tile;
}(Canvas);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/color.js
;

function fromString(str) {
  var cached, r;

  if (str in CACHE) {
    cached = CACHE[str];
  } else {
    if (str.charAt(0) == "#") {
      // hex rgb
      var matched = str.match(/[0-9a-f]/gi) || [];
      var values = matched.map(function (x) {
        return parseInt(x, 16);
      });

      if (values.length == 3) {
        cached = values.map(function (x) {
          return x * 17;
        });
      } else {
        for (var i = 0; i < 3; i++) {
          values[i + 1] += 16 * values[i];
          values.splice(i, 1);
        }

        cached = values;
      }
    } else if (r = str.match(/rgb\(([0-9, ]+)\)/i)) {
      // decimal rgb
      cached = r[1].split(/\s*,\s*/).map(function (x) {
        return parseInt(x);
      });
    } else {
      // html name
      cached = [0, 0, 0];
    }

    CACHE[str] = cached;
  }

  return cached.slice();
}
/**
 * Add two or more colors
 */

function add(color1) {
  var result = color1.slice();

  for (var _len = arguments.length, colors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    colors[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < colors.length; j++) {
      result[i] += colors[j][i];
    }
  }

  return result;
}
/**
 * Add two or more colors, MODIFIES FIRST ARGUMENT
 */

function add_(color1) {
  for (var _len2 = arguments.length, colors = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    colors[_key2 - 1] = arguments[_key2];
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < colors.length; j++) {
      color1[i] += colors[j][i];
    }
  }

  return color1;
}
/**
 * Multiply (mix) two or more colors
 */

function multiply(color1) {
  var result = color1.slice();

  for (var _len3 = arguments.length, colors = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    colors[_key3 - 1] = arguments[_key3];
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < colors.length; j++) {
      result[i] *= colors[j][i] / 255;
    }

    result[i] = Math.round(result[i]);
  }

  return result;
}
/**
 * Multiply (mix) two or more colors, MODIFIES FIRST ARGUMENT
 */

function multiply_(color1) {
  for (var _len4 = arguments.length, colors = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    colors[_key4 - 1] = arguments[_key4];
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < colors.length; j++) {
      color1[i] *= colors[j][i] / 255;
    }

    color1[i] = Math.round(color1[i]);
  }

  return color1;
}
/**
 * Interpolate (blend) two colors with a given factor
 */

function interpolate(color1, color2) {
  var factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  var result = color1.slice();

  for (var i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }

  return result;
}
var lerp = (/* unused pure expression or super */ null && (interpolate));
/**
 * Interpolate (blend) two colors with a given factor in HSL mode
 */

function interpolateHSL(color1, color2) {
  var factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  var hsl1 = rgb2hsl(color1);
  var hsl2 = rgb2hsl(color2);

  for (var i = 0; i < 3; i++) {
    hsl1[i] += factor * (hsl2[i] - hsl1[i]);
  }

  return hsl2rgb(hsl1);
}
var lerpHSL = (/* unused pure expression or super */ null && (interpolateHSL));
/**
 * Create a new random color based on this one
 * @param color
 * @param diff Set of standard deviations
 */

function randomize(color, diff) {
  if (!(diff instanceof Array)) {
    diff = Math.round(RNG.getNormal(0, diff));
  }

  var result = color.slice();

  for (var i = 0; i < 3; i++) {
    result[i] += diff instanceof Array ? Math.round(RNG.getNormal(0, diff[i])) : diff;
  }

  return result;
}
/**
 * Converts an RGB color value to HSL. Expects 0..255 inputs, produces 0..1 outputs.
 */

function rgb2hsl(color) {
  var r = color[0] / 255;
  var g = color[1] / 255;
  var b = color[2] / 255;
  var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
  var h = 0,
      s,
      l = (max + min) / 2;

  if (max == min) {
    s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
/**
 * Converts an HSL color value to RGB. Expects 0..1 inputs, produces 0..255 outputs.
 */


function hsl2rgb(color) {
  var l = color[2];

  if (color[1] == 0) {
    l = Math.round(l * 255);
    return [l, l, l];
  } else {
    var s = color[1];
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    var r = hue2rgb(p, q, color[0] + 1 / 3);
    var g = hue2rgb(p, q, color[0]);
    var b = hue2rgb(p, q, color[0] - 1 / 3);
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
}
function toRGB(color) {
  var clamped = color.map(function (x) {
    return clamp(x, 0, 255);
  });
  return "rgb(".concat(clamped.join(","), ")");
}
function toHex(color) {
  var clamped = color.map(function (x) {
    return clamp(x, 0, 255).toString(16).padStart(2, "0");
  });
  return "#".concat(clamped.join(""));
}
var CACHE = {
  "black": [0, 0, 0],
  "navy": [0, 0, 128],
  "darkblue": [0, 0, 139],
  "mediumblue": [0, 0, 205],
  "blue": [0, 0, 255],
  "darkgreen": [0, 100, 0],
  "green": [0, 128, 0],
  "teal": [0, 128, 128],
  "darkcyan": [0, 139, 139],
  "deepskyblue": [0, 191, 255],
  "darkturquoise": [0, 206, 209],
  "mediumspringgreen": [0, 250, 154],
  "lime": [0, 255, 0],
  "springgreen": [0, 255, 127],
  "aqua": [0, 255, 255],
  "cyan": [0, 255, 255],
  "midnightblue": [25, 25, 112],
  "dodgerblue": [30, 144, 255],
  "forestgreen": [34, 139, 34],
  "seagreen": [46, 139, 87],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "limegreen": [50, 205, 50],
  "mediumseagreen": [60, 179, 113],
  "turquoise": [64, 224, 208],
  "royalblue": [65, 105, 225],
  "steelblue": [70, 130, 180],
  "darkslateblue": [72, 61, 139],
  "mediumturquoise": [72, 209, 204],
  "indigo": [75, 0, 130],
  "darkolivegreen": [85, 107, 47],
  "cadetblue": [95, 158, 160],
  "cornflowerblue": [100, 149, 237],
  "mediumaquamarine": [102, 205, 170],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "slateblue": [106, 90, 205],
  "olivedrab": [107, 142, 35],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "mediumslateblue": [123, 104, 238],
  "lawngreen": [124, 252, 0],
  "chartreuse": [127, 255, 0],
  "aquamarine": [127, 255, 212],
  "maroon": [128, 0, 0],
  "purple": [128, 0, 128],
  "olive": [128, 128, 0],
  "gray": [128, 128, 128],
  "grey": [128, 128, 128],
  "skyblue": [135, 206, 235],
  "lightskyblue": [135, 206, 250],
  "blueviolet": [138, 43, 226],
  "darkred": [139, 0, 0],
  "darkmagenta": [139, 0, 139],
  "saddlebrown": [139, 69, 19],
  "darkseagreen": [143, 188, 143],
  "lightgreen": [144, 238, 144],
  "mediumpurple": [147, 112, 216],
  "darkviolet": [148, 0, 211],
  "palegreen": [152, 251, 152],
  "darkorchid": [153, 50, 204],
  "yellowgreen": [154, 205, 50],
  "sienna": [160, 82, 45],
  "brown": [165, 42, 42],
  "darkgray": [169, 169, 169],
  "darkgrey": [169, 169, 169],
  "lightblue": [173, 216, 230],
  "greenyellow": [173, 255, 47],
  "paleturquoise": [175, 238, 238],
  "lightsteelblue": [176, 196, 222],
  "powderblue": [176, 224, 230],
  "firebrick": [178, 34, 34],
  "darkgoldenrod": [184, 134, 11],
  "mediumorchid": [186, 85, 211],
  "rosybrown": [188, 143, 143],
  "darkkhaki": [189, 183, 107],
  "silver": [192, 192, 192],
  "mediumvioletred": [199, 21, 133],
  "indianred": [205, 92, 92],
  "peru": [205, 133, 63],
  "chocolate": [210, 105, 30],
  "tan": [210, 180, 140],
  "lightgray": [211, 211, 211],
  "lightgrey": [211, 211, 211],
  "palevioletred": [216, 112, 147],
  "thistle": [216, 191, 216],
  "orchid": [218, 112, 214],
  "goldenrod": [218, 165, 32],
  "crimson": [220, 20, 60],
  "gainsboro": [220, 220, 220],
  "plum": [221, 160, 221],
  "burlywood": [222, 184, 135],
  "lightcyan": [224, 255, 255],
  "lavender": [230, 230, 250],
  "darksalmon": [233, 150, 122],
  "violet": [238, 130, 238],
  "palegoldenrod": [238, 232, 170],
  "lightcoral": [240, 128, 128],
  "khaki": [240, 230, 140],
  "aliceblue": [240, 248, 255],
  "honeydew": [240, 255, 240],
  "azure": [240, 255, 255],
  "sandybrown": [244, 164, 96],
  "wheat": [245, 222, 179],
  "beige": [245, 245, 220],
  "whitesmoke": [245, 245, 245],
  "mintcream": [245, 255, 250],
  "ghostwhite": [248, 248, 255],
  "salmon": [250, 128, 114],
  "antiquewhite": [250, 235, 215],
  "linen": [250, 240, 230],
  "lightgoldenrodyellow": [250, 250, 210],
  "oldlace": [253, 245, 230],
  "red": [255, 0, 0],
  "fuchsia": [255, 0, 255],
  "magenta": [255, 0, 255],
  "deeppink": [255, 20, 147],
  "orangered": [255, 69, 0],
  "tomato": [255, 99, 71],
  "hotpink": [255, 105, 180],
  "coral": [255, 127, 80],
  "darkorange": [255, 140, 0],
  "lightsalmon": [255, 160, 122],
  "orange": [255, 165, 0],
  "lightpink": [255, 182, 193],
  "pink": [255, 192, 203],
  "gold": [255, 215, 0],
  "peachpuff": [255, 218, 185],
  "navajowhite": [255, 222, 173],
  "moccasin": [255, 228, 181],
  "bisque": [255, 228, 196],
  "mistyrose": [255, 228, 225],
  "blanchedalmond": [255, 235, 205],
  "papayawhip": [255, 239, 213],
  "lavenderblush": [255, 240, 245],
  "seashell": [255, 245, 238],
  "cornsilk": [255, 248, 220],
  "lemonchiffon": [255, 250, 205],
  "floralwhite": [255, 250, 240],
  "snow": [255, 250, 250],
  "yellow": [255, 255, 0],
  "lightyellow": [255, 255, 224],
  "ivory": [255, 255, 240],
  "white": [255, 255, 255]
};
// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/tile-gl.js
function tile_gl_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tile_gl_typeof = function _typeof(obj) { return typeof obj; }; } else { tile_gl_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tile_gl_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || tile_gl_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return tile_gl_arrayLikeToArray(arr); }

function tile_gl_slicedToArray(arr, i) { return tile_gl_arrayWithHoles(arr) || tile_gl_iterableToArrayLimit(arr, i) || tile_gl_unsupportedIterableToArray(arr, i) || tile_gl_nonIterableRest(); }

function tile_gl_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function tile_gl_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tile_gl_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tile_gl_arrayLikeToArray(o, minLen); }

function tile_gl_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function tile_gl_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function tile_gl_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function tile_gl_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tile_gl_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tile_gl_createClass(Constructor, protoProps, staticProps) { if (protoProps) tile_gl_defineProperties(Constructor.prototype, protoProps); if (staticProps) tile_gl_defineProperties(Constructor, staticProps); return Constructor; }

function tile_gl_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { tile_gl_get = Reflect.get; } else { tile_gl_get = function _get(target, property, receiver) { var base = tile_gl_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return tile_gl_get(target, property, receiver || target); }

function tile_gl_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = tile_gl_getPrototypeOf(object); if (object === null) break; } return object; }

function tile_gl_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tile_gl_setPrototypeOf(subClass, superClass); }

function tile_gl_setPrototypeOf(o, p) { tile_gl_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tile_gl_setPrototypeOf(o, p); }

function tile_gl_createSuper(Derived) { var hasNativeReflectConstruct = tile_gl_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tile_gl_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tile_gl_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tile_gl_possibleConstructorReturn(this, result); }; }

function tile_gl_possibleConstructorReturn(self, call) { if (call && (tile_gl_typeof(call) === "object" || typeof call === "function")) { return call; } return tile_gl_assertThisInitialized(self); }

function tile_gl_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tile_gl_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tile_gl_getPrototypeOf(o) { tile_gl_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tile_gl_getPrototypeOf(o); }



/**
 * @class Tile backend
 * @private
 */

var TileGL = /*#__PURE__*/function (_Backend) {
  tile_gl_inherits(TileGL, _Backend);

  var _super = tile_gl_createSuper(TileGL);

  function TileGL() {
    var _this;

    tile_gl_classCallCheck(this, TileGL);

    _this = _super.call(this);
    _this._uniforms = {};

    try {
      _this._gl = _this._initWebGL();
    } catch (e) {
      alert(e.message);
    }

    return _this;
  }

  tile_gl_createClass(TileGL, [{
    key: "schedule",
    value: function schedule(cb) {
      requestAnimationFrame(cb);
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this._gl.canvas;
    }
  }, {
    key: "setOptions",
    value: function setOptions(opts) {
      var _this2 = this;

      tile_gl_get(tile_gl_getPrototypeOf(TileGL.prototype), "setOptions", this).call(this, opts);

      this._updateSize();

      var tileSet = this._options.tileSet;

      if (tileSet && "complete" in tileSet && !tileSet.complete) {
        tileSet.addEventListener("load", function () {
          return _this2._updateTexture(tileSet);
        });
      } else {
        this._updateTexture(tileSet);
      }
    }
  }, {
    key: "draw",
    value: function draw(data, clearBefore) {
      var gl = this._gl;
      var opts = this._options;

      var _data = tile_gl_slicedToArray(data, 5),
          x = _data[0],
          y = _data[1],
          ch = _data[2],
          fg = _data[3],
          bg = _data[4];

      var scissorY = gl.canvas.height - (y + 1) * opts.tileHeight;
      gl.scissor(x * opts.tileWidth, scissorY, opts.tileWidth, opts.tileHeight);

      if (clearBefore) {
        if (opts.tileColorize) {
          gl.clearColor(0, 0, 0, 0);
        } else {
          gl.clearColor.apply(gl, _toConsumableArray(parseColor(bg)));
        }

        gl.clear(gl.COLOR_BUFFER_BIT);
      }

      if (!ch) {
        return;
      }

      var chars = [].concat(ch);
      var bgs = [].concat(bg);
      var fgs = [].concat(fg);
      gl.uniform2fv(this._uniforms["targetPosRel"], [x, y]);

      for (var i = 0; i < chars.length; i++) {
        var tile = this._options.tileMap[chars[i]];

        if (!tile) {
          throw new Error("Char \"".concat(chars[i], "\" not found in tileMap"));
        }

        gl.uniform1f(this._uniforms["colorize"], opts.tileColorize ? 1 : 0);
        gl.uniform2fv(this._uniforms["tilesetPosAbs"], tile);

        if (opts.tileColorize) {
          gl.uniform4fv(this._uniforms["tint"], parseColor(fgs[i]));
          gl.uniform4fv(this._uniforms["bg"], parseColor(bgs[i]));
        }

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      /*
      
      
              for (let i=0;i<chars.length;i++) {
      
                  if (this._options.tileColorize) { // apply colorization
                      let canvas = this._colorCanvas;
                      let context = canvas.getContext("2d") as CanvasRenderingContext2D;
                      context.globalCompositeOperation = "source-over";
                      context.clearRect(0, 0, tileWidth, tileHeight);
      
                      let fg = fgs[i];
                      let bg = bgs[i];
      
                      context.drawImage(
                          this._options.tileSet!,
                          tile[0], tile[1], tileWidth, tileHeight,
                          0, 0, tileWidth, tileHeight
                      );
      
                      if (fg != "transparent") {
                          context.fillStyle = fg;
                          context.globalCompositeOperation = "source-atop";
                          context.fillRect(0, 0, tileWidth, tileHeight);
                      }
      
                      if (bg != "transparent") {
                          context.fillStyle = bg;
                          context.globalCompositeOperation = "destination-over";
                          context.fillRect(0, 0, tileWidth, tileHeight);
                      }
      
                      this._ctx.drawImage(canvas, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
                  } else { // no colorizing, easy
                      this._ctx.drawImage(
                          this._options.tileSet!,
                          tile[0], tile[1], tileWidth, tileHeight,
                          x*tileWidth, y*tileHeight, tileWidth, tileHeight
                      );
                  }
              }
      
      */

    }
  }, {
    key: "clear",
    value: function clear() {
      var gl = this._gl;
      gl.clearColor.apply(gl, _toConsumableArray(parseColor(this._options.bg)));
      gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }, {
    key: "computeSize",
    value: function computeSize(availWidth, availHeight) {
      var width = Math.floor(availWidth / this._options.tileWidth);
      var height = Math.floor(availHeight / this._options.tileHeight);
      return [width, height];
    }
  }, {
    key: "computeFontSize",
    value: function computeFontSize() {
      throw new Error("Tile backend does not understand font size");
    }
  }, {
    key: "eventToPosition",
    value: function eventToPosition(x, y) {
      var canvas = this._gl.canvas;
      var rect = canvas.getBoundingClientRect();
      x -= rect.left;
      y -= rect.top;
      x *= canvas.width / rect.width;
      y *= canvas.height / rect.height;

      if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
        return [-1, -1];
      }

      return this._normalizedEventToPosition(x, y);
    }
  }, {
    key: "_initWebGL",
    value: function _initWebGL() {
      var _this3 = this;

      var gl = document.createElement("canvas").getContext("webgl2", {
        preserveDrawingBuffer: true
      });
      window.gl = gl;
      var program = createProgram(gl, VS, FS);
      gl.useProgram(program);
      createQuad(gl);
      UNIFORMS.forEach(function (name) {
        return _this3._uniforms[name] = gl.getUniformLocation(program, name);
      });
      this._program = program;
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.SCISSOR_TEST);
      return gl;
    }
  }, {
    key: "_normalizedEventToPosition",
    value: function _normalizedEventToPosition(x, y) {
      return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
    }
  }, {
    key: "_updateSize",
    value: function _updateSize() {
      var gl = this._gl;
      var opts = this._options;
      var canvasSize = [opts.width * opts.tileWidth, opts.height * opts.tileHeight];
      gl.canvas.width = canvasSize[0];
      gl.canvas.height = canvasSize[1];
      gl.viewport(0, 0, canvasSize[0], canvasSize[1]);
      gl.uniform2fv(this._uniforms["tileSize"], [opts.tileWidth, opts.tileHeight]);
      gl.uniform2fv(this._uniforms["targetSize"], canvasSize);
    }
  }, {
    key: "_updateTexture",
    value: function _updateTexture(tileSet) {
      createTexture(this._gl, tileSet);
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      return !!document.createElement("canvas").getContext("webgl2", {
        preserveDrawingBuffer: true
      });
    }
  }]);

  return TileGL;
}(Backend);


var UNIFORMS = ["targetPosRel", "tilesetPosAbs", "tileSize", "targetSize", "colorize", "bg", "tint"];
var VS = "\n#version 300 es\n\nin vec2 tilePosRel;\nout vec2 tilesetPosPx;\n\nuniform vec2 tilesetPosAbs;\nuniform vec2 tileSize;\nuniform vec2 targetSize;\nuniform vec2 targetPosRel;\n\nvoid main() {\n\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;\n\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;\n\ttargetPosNdc.y *= -1.0;\n\n\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);\n\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;\n}".trim();
var FS = "\n#version 300 es\nprecision highp float;\n\nin vec2 tilesetPosPx;\nout vec4 fragColor;\nuniform sampler2D image;\nuniform bool colorize;\nuniform vec4 bg;\nuniform vec4 tint;\n\nvoid main() {\n\tfragColor = vec4(0, 0, 0, 1);\n\n\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);\n\n\tif (colorize) {\n\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;\n\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;\n\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;\n\t} else {\n\t\tfragColor = texel;\n\t}\n}".trim();

function createProgram(gl, vss, fss) {
  var vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vss);
  gl.compileShader(vs);

  if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(vs) || "");
  }

  var fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fss);
  gl.compileShader(fs);

  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(fs) || "");
  }

  var p = gl.createProgram();
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);

  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(p) || "");
  }

  return p;
}

function createQuad(gl) {
  var pos = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
}

function createTexture(gl, data) {
  var t = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, t);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
  return t;
}

var colorCache = {};

function parseColor(color) {
  if (!(color in colorCache)) {
    var parsed;

    if (color == "transparent") {
      parsed = [0, 0, 0, 0];
    } else if (color.indexOf("rgba") > -1) {
      parsed = (color.match(/[\d.]+/g) || []).map(Number);

      for (var i = 0; i < 3; i++) {
        parsed[i] = parsed[i] / 255;
      }
    } else {
      parsed = fromString(color).map(function ($) {
        return $ / 255;
      });
      parsed.push(1);
    }

    colorCache[color] = parsed;
  }

  return colorCache[color];
}
// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/term.js
function term_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { term_typeof = function _typeof(obj) { return typeof obj; }; } else { term_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return term_typeof(obj); }

function term_slicedToArray(arr, i) { return term_arrayWithHoles(arr) || term_iterableToArrayLimit(arr, i) || term_unsupportedIterableToArray(arr, i) || term_nonIterableRest(); }

function term_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function term_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return term_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return term_arrayLikeToArray(o, minLen); }

function term_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function term_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function term_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function term_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function term_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function term_createClass(Constructor, protoProps, staticProps) { if (protoProps) term_defineProperties(Constructor.prototype, protoProps); if (staticProps) term_defineProperties(Constructor, staticProps); return Constructor; }

function term_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { term_get = Reflect.get; } else { term_get = function _get(target, property, receiver) { var base = term_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return term_get(target, property, receiver || target); }

function term_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = term_getPrototypeOf(object); if (object === null) break; } return object; }

function term_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) term_setPrototypeOf(subClass, superClass); }

function term_setPrototypeOf(o, p) { term_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return term_setPrototypeOf(o, p); }

function term_createSuper(Derived) { var hasNativeReflectConstruct = term_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = term_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = term_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return term_possibleConstructorReturn(this, result); }; }

function term_possibleConstructorReturn(self, call) { if (call && (term_typeof(call) === "object" || typeof call === "function")) { return call; } return term_assertThisInitialized(self); }

function term_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function term_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function term_getPrototypeOf(o) { term_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return term_getPrototypeOf(o); }




function clearToAnsi(bg) {
  return "\x1B[0;48;5;".concat(termcolor(bg), "m\x1B[2J");
}

function colorToAnsi(fg, bg) {
  return "\x1B[0;38;5;".concat(termcolor(fg), ";48;5;").concat(termcolor(bg), "m");
}

function positionToAnsi(x, y) {
  return "\x1B[".concat(y + 1, ";").concat(x + 1, "H");
}

function termcolor(color) {
  var SRC_COLORS = 256.0;
  var DST_COLORS = 6.0;
  var COLOR_RATIO = DST_COLORS / SRC_COLORS;
  var rgb = fromString(color);
  var r = Math.floor(rgb[0] * COLOR_RATIO);
  var g = Math.floor(rgb[1] * COLOR_RATIO);
  var b = Math.floor(rgb[2] * COLOR_RATIO);
  return r * 36 + g * 6 + b * 1 + 16;
}

var Term = /*#__PURE__*/function (_Backend) {
  term_inherits(Term, _Backend);

  var _super = term_createSuper(Term);

  function Term() {
    var _this;

    term_classCallCheck(this, Term);

    _this = _super.call(this);
    _this._offset = [0, 0];
    _this._cursor = [-1, -1];
    _this._lastColor = "";
    return _this;
  }

  term_createClass(Term, [{
    key: "schedule",
    value: function schedule(cb) {
      setTimeout(cb, 1000 / 60);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      term_get(term_getPrototypeOf(Term.prototype), "setOptions", this).call(this, options);

      var size = [options.width, options.height];
      var avail = this.computeSize();
      this._offset = avail.map(function (val, index) {
        return Math.floor((val - size[index]) / 2);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      process.stdout.write(clearToAnsi(this._options.bg));
    }
  }, {
    key: "draw",
    value: function draw(data, clearBefore) {
      // determine where to draw what with what colors
      var _data = term_slicedToArray(data, 5),
          x = _data[0],
          y = _data[1],
          ch = _data[2],
          fg = _data[3],
          bg = _data[4]; // determine if we need to move the terminal cursor


      var dx = this._offset[0] + x;
      var dy = this._offset[1] + y;
      var size = this.computeSize();

      if (dx < 0 || dx >= size[0]) {
        return;
      }

      if (dy < 0 || dy >= size[1]) {
        return;
      }

      if (dx !== this._cursor[0] || dy !== this._cursor[1]) {
        process.stdout.write(positionToAnsi(dx, dy));
        this._cursor[0] = dx;
        this._cursor[1] = dy;
      } // terminals automatically clear, but if we're clearing when we're
      // not otherwise provided with a character, just use a space instead


      if (clearBefore) {
        if (!ch) {
          ch = " ";
        }
      } // if we're not clearing and not provided with a character, do nothing


      if (!ch) {
        return;
      } // determine if we need to change colors


      var newColor = colorToAnsi(fg, bg);

      if (newColor !== this._lastColor) {
        process.stdout.write(newColor);
        this._lastColor = newColor;
      }

      if (ch != '\t') {
        // write the provided symbol to the display
        var chars = [].concat(ch);
        process.stdout.write(chars[0]);
      } // update our position, given that we wrote a character


      this._cursor[0]++;

      if (this._cursor[0] >= size[0]) {
        this._cursor[0] = 0;
        this._cursor[1]++;
      }
    }
  }, {
    key: "computeFontSize",
    value: function computeFontSize() {
      throw new Error("Terminal backend has no notion of font size");
    }
  }, {
    key: "eventToPosition",
    value: function eventToPosition(x, y) {
      return [x, y];
    }
  }, {
    key: "computeSize",
    value: function computeSize() {
      return [process.stdout.columns, process.stdout.rows];
    }
  }]);

  return Term;
}(Backend);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/text.js
/**
 * @namespace
 * Contains text tokenization and breaking routines
 */
var RE_COLORS = /%([bc]){([^}]*)}/g; // token types

var TYPE_TEXT = 0;
var TYPE_NEWLINE = 1;
var TYPE_FG = 2;
var TYPE_BG = 3;
/**
 * Measure size of a resulting text block
 */

function measure(str, maxWidth) {
  var result = {
    width: 0,
    height: 1
  };
  var tokens = tokenize(str, maxWidth);
  var lineWidth = 0;

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    switch (token.type) {
      case TYPE_TEXT:
        lineWidth += token.value.length;
        break;

      case TYPE_NEWLINE:
        result.height++;
        result.width = Math.max(result.width, lineWidth);
        lineWidth = 0;
        break;
    }
  }

  result.width = Math.max(result.width, lineWidth);
  return result;
}
/**
 * Convert string to a series of a formatting commands
 */

function tokenize(str, maxWidth) {
  var result = [];
  /* first tokenization pass - split texts and color formatting commands */

  var offset = 0;
  str.replace(RE_COLORS, function (match, type, name, index) {
    /* string before */
    var part = str.substring(offset, index);

    if (part.length) {
      result.push({
        type: TYPE_TEXT,
        value: part
      });
    }
    /* color command */


    result.push({
      type: type == "c" ? TYPE_FG : TYPE_BG,
      value: name.trim()
    });
    offset = index + match.length;
    return "";
  });
  /* last remaining part */

  var part = str.substring(offset);

  if (part.length) {
    result.push({
      type: TYPE_TEXT,
      value: part
    });
  }

  return breakLines(result, maxWidth);
}
/* insert line breaks into first-pass tokenized data */

function breakLines(tokens, maxWidth) {
  if (!maxWidth) {
    maxWidth = Infinity;
  }

  var i = 0;
  var lineLength = 0;
  var lastTokenWithSpace = -1;

  while (i < tokens.length) {
    /* take all text tokens, remove space, apply linebreaks */
    var token = tokens[i];

    if (token.type == TYPE_NEWLINE) {
      /* reset */
      lineLength = 0;
      lastTokenWithSpace = -1;
    }

    if (token.type != TYPE_TEXT) {
      /* skip non-text tokens */
      i++;
      continue;
    }
    /* remove spaces at the beginning of line */


    while (lineLength == 0 && token.value.charAt(0) == " ") {
      token.value = token.value.substring(1);
    }
    /* forced newline? insert two new tokens after this one */


    var index = token.value.indexOf("\n");

    if (index != -1) {
      token.value = breakInsideToken(tokens, i, index, true);
      /* if there are spaces at the end, we must remove them (we do not want the line too long) */

      var arr = token.value.split("");

      while (arr.length && arr[arr.length - 1] == " ") {
        arr.pop();
      }

      token.value = arr.join("");
    }
    /* token degenerated? */


    if (!token.value.length) {
      tokens.splice(i, 1);
      continue;
    }

    if (lineLength + token.value.length > maxWidth) {
      /* line too long, find a suitable breaking spot */

      /* is it possible to break within this token? */
      var _index = -1;

      while (1) {
        var nextIndex = token.value.indexOf(" ", _index + 1);

        if (nextIndex == -1) {
          break;
        }

        if (lineLength + nextIndex > maxWidth) {
          break;
        }

        _index = nextIndex;
      }

      if (_index != -1) {
        /* break at space within this one */
        token.value = breakInsideToken(tokens, i, _index, true);
      } else if (lastTokenWithSpace != -1) {
        /* is there a previous token where a break can occur? */
        var _token = tokens[lastTokenWithSpace];

        var breakIndex = _token.value.lastIndexOf(" ");

        _token.value = breakInsideToken(tokens, lastTokenWithSpace, breakIndex, true);
        i = lastTokenWithSpace;
      } else {
        /* force break in this token */
        token.value = breakInsideToken(tokens, i, maxWidth - lineLength, false);
      }
    } else {
      /* line not long, continue */
      lineLength += token.value.length;

      if (token.value.indexOf(" ") != -1) {
        lastTokenWithSpace = i;
      }
    }

    i++;
    /* advance to next token */
  }

  tokens.push({
    type: TYPE_NEWLINE
  });
  /* insert fake newline to fix the last text line */

  /* remove trailing space from text tokens before newlines */

  var lastTextToken = null;

  for (var _i = 0; _i < tokens.length; _i++) {
    var _token2 = tokens[_i];

    switch (_token2.type) {
      case TYPE_TEXT:
        lastTextToken = _token2;
        break;

      case TYPE_NEWLINE:
        if (lastTextToken) {
          /* remove trailing space */
          var _arr = lastTextToken.value.split("");

          while (_arr.length && _arr[_arr.length - 1] == " ") {
            _arr.pop();
          }

          lastTextToken.value = _arr.join("");
        }

        lastTextToken = null;
        break;
    }
  }

  tokens.pop();
  /* remove fake token */

  return tokens;
}
/**
 * Create new tokens and insert them into the stream
 * @param {object[]} tokens
 * @param {int} tokenIndex Token being processed
 * @param {int} breakIndex Index within current token's value
 * @param {bool} removeBreakChar Do we want to remove the breaking character?
 * @returns {string} remaining unbroken token value
 */


function breakInsideToken(tokens, tokenIndex, breakIndex, removeBreakChar) {
  var newBreakToken = {
    type: TYPE_NEWLINE
  };
  var newTextToken = {
    type: TYPE_TEXT,
    value: tokens[tokenIndex].value.substring(breakIndex + (removeBreakChar ? 1 : 0))
  };
  tokens.splice(tokenIndex + 1, 0, newBreakToken, newTextToken);
  return tokens[tokenIndex].value.substring(0, breakIndex);
}
// CONCATENATED MODULE: ./node_modules/rot-js/lib/constants.js
/** Default with for display and map generators */
var DEFAULT_WIDTH = 80;
/** Default height for display and map generators */

var DEFAULT_HEIGHT = 25;
var DIRS = {
  4: [[0, -1], [1, 0], [0, 1], [-1, 0]],
  8: [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]],
  6: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1], [-2, 0]]
};
var KEYS = {
  /** Cancel key. */
  VK_CANCEL: 3,

  /** Help key. */
  VK_HELP: 6,

  /** Backspace key. */
  VK_BACK_SPACE: 8,

  /** Tab key. */
  VK_TAB: 9,

  /** 5 key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key. */
  VK_CLEAR: 12,

  /** Return/enter key on the main keyboard. */
  VK_RETURN: 13,

  /** Reserved, but not used. */
  VK_ENTER: 14,

  /** Shift key. */
  VK_SHIFT: 16,

  /** Control key. */
  VK_CONTROL: 17,

  /** Alt (Option on Mac) key. */
  VK_ALT: 18,

  /** Pause key. */
  VK_PAUSE: 19,

  /** Caps lock. */
  VK_CAPS_LOCK: 20,

  /** Escape key. */
  VK_ESCAPE: 27,

  /** Space bar. */
  VK_SPACE: 32,

  /** Page Up key. */
  VK_PAGE_UP: 33,

  /** Page Down key. */
  VK_PAGE_DOWN: 34,

  /** End key. */
  VK_END: 35,

  /** Home key. */
  VK_HOME: 36,

  /** Left arrow. */
  VK_LEFT: 37,

  /** Up arrow. */
  VK_UP: 38,

  /** Right arrow. */
  VK_RIGHT: 39,

  /** Down arrow. */
  VK_DOWN: 40,

  /** Print Screen key. */
  VK_PRINTSCREEN: 44,

  /** Ins(ert) key. */
  VK_INSERT: 45,

  /** Del(ete) key. */
  VK_DELETE: 46,

  /***/
  VK_0: 48,

  /***/
  VK_1: 49,

  /***/
  VK_2: 50,

  /***/
  VK_3: 51,

  /***/
  VK_4: 52,

  /***/
  VK_5: 53,

  /***/
  VK_6: 54,

  /***/
  VK_7: 55,

  /***/
  VK_8: 56,

  /***/
  VK_9: 57,

  /** Colon (:) key. Requires Gecko 15.0 */
  VK_COLON: 58,

  /** Semicolon (;) key. */
  VK_SEMICOLON: 59,

  /** Less-than (<) key. Requires Gecko 15.0 */
  VK_LESS_THAN: 60,

  /** Equals (=) key. */
  VK_EQUALS: 61,

  /** Greater-than (>) key. Requires Gecko 15.0 */
  VK_GREATER_THAN: 62,

  /** Question mark (?) key. Requires Gecko 15.0 */
  VK_QUESTION_MARK: 63,

  /** Atmark (@) key. Requires Gecko 15.0 */
  VK_AT: 64,

  /***/
  VK_A: 65,

  /***/
  VK_B: 66,

  /***/
  VK_C: 67,

  /***/
  VK_D: 68,

  /***/
  VK_E: 69,

  /***/
  VK_F: 70,

  /***/
  VK_G: 71,

  /***/
  VK_H: 72,

  /***/
  VK_I: 73,

  /***/
  VK_J: 74,

  /***/
  VK_K: 75,

  /***/
  VK_L: 76,

  /***/
  VK_M: 77,

  /***/
  VK_N: 78,

  /***/
  VK_O: 79,

  /***/
  VK_P: 80,

  /***/
  VK_Q: 81,

  /***/
  VK_R: 82,

  /***/
  VK_S: 83,

  /***/
  VK_T: 84,

  /***/
  VK_U: 85,

  /***/
  VK_V: 86,

  /***/
  VK_W: 87,

  /***/
  VK_X: 88,

  /***/
  VK_Y: 89,

  /***/
  VK_Z: 90,

  /***/
  VK_CONTEXT_MENU: 93,

  /** 0 on the numeric keypad. */
  VK_NUMPAD0: 96,

  /** 1 on the numeric keypad. */
  VK_NUMPAD1: 97,

  /** 2 on the numeric keypad. */
  VK_NUMPAD2: 98,

  /** 3 on the numeric keypad. */
  VK_NUMPAD3: 99,

  /** 4 on the numeric keypad. */
  VK_NUMPAD4: 100,

  /** 5 on the numeric keypad. */
  VK_NUMPAD5: 101,

  /** 6 on the numeric keypad. */
  VK_NUMPAD6: 102,

  /** 7 on the numeric keypad. */
  VK_NUMPAD7: 103,

  /** 8 on the numeric keypad. */
  VK_NUMPAD8: 104,

  /** 9 on the numeric keypad. */
  VK_NUMPAD9: 105,

  /** * on the numeric keypad. */
  VK_MULTIPLY: 106,

  /** + on the numeric keypad. */
  VK_ADD: 107,

  /***/
  VK_SEPARATOR: 108,

  /** - on the numeric keypad. */
  VK_SUBTRACT: 109,

  /** Decimal point on the numeric keypad. */
  VK_DECIMAL: 110,

  /** / on the numeric keypad. */
  VK_DIVIDE: 111,

  /** F1 key. */
  VK_F1: 112,

  /** F2 key. */
  VK_F2: 113,

  /** F3 key. */
  VK_F3: 114,

  /** F4 key. */
  VK_F4: 115,

  /** F5 key. */
  VK_F5: 116,

  /** F6 key. */
  VK_F6: 117,

  /** F7 key. */
  VK_F7: 118,

  /** F8 key. */
  VK_F8: 119,

  /** F9 key. */
  VK_F9: 120,

  /** F10 key. */
  VK_F10: 121,

  /** F11 key. */
  VK_F11: 122,

  /** F12 key. */
  VK_F12: 123,

  /** F13 key. */
  VK_F13: 124,

  /** F14 key. */
  VK_F14: 125,

  /** F15 key. */
  VK_F15: 126,

  /** F16 key. */
  VK_F16: 127,

  /** F17 key. */
  VK_F17: 128,

  /** F18 key. */
  VK_F18: 129,

  /** F19 key. */
  VK_F19: 130,

  /** F20 key. */
  VK_F20: 131,

  /** F21 key. */
  VK_F21: 132,

  /** F22 key. */
  VK_F22: 133,

  /** F23 key. */
  VK_F23: 134,

  /** F24 key. */
  VK_F24: 135,

  /** Num Lock key. */
  VK_NUM_LOCK: 144,

  /** Scroll Lock key. */
  VK_SCROLL_LOCK: 145,

  /** Circumflex (^) key. Requires Gecko 15.0 */
  VK_CIRCUMFLEX: 160,

  /** Exclamation (!) key. Requires Gecko 15.0 */
  VK_EXCLAMATION: 161,

  /** Double quote () key. Requires Gecko 15.0 */
  VK_DOUBLE_QUOTE: 162,

  /** Hash (#) key. Requires Gecko 15.0 */
  VK_HASH: 163,

  /** Dollar sign ($) key. Requires Gecko 15.0 */
  VK_DOLLAR: 164,

  /** Percent (%) key. Requires Gecko 15.0 */
  VK_PERCENT: 165,

  /** Ampersand (&) key. Requires Gecko 15.0 */
  VK_AMPERSAND: 166,

  /** Underscore (_) key. Requires Gecko 15.0 */
  VK_UNDERSCORE: 167,

  /** Open parenthesis (() key. Requires Gecko 15.0 */
  VK_OPEN_PAREN: 168,

  /** Close parenthesis ()) key. Requires Gecko 15.0 */
  VK_CLOSE_PAREN: 169,

  /* Asterisk (*) key. Requires Gecko 15.0 */
  VK_ASTERISK: 170,

  /** Plus (+) key. Requires Gecko 15.0 */
  VK_PLUS: 171,

  /** Pipe (|) key. Requires Gecko 15.0 */
  VK_PIPE: 172,

  /** Hyphen-US/docs/Minus (-) key. Requires Gecko 15.0 */
  VK_HYPHEN_MINUS: 173,

  /** Open curly bracket ({) key. Requires Gecko 15.0 */
  VK_OPEN_CURLY_BRACKET: 174,

  /** Close curly bracket (}) key. Requires Gecko 15.0 */
  VK_CLOSE_CURLY_BRACKET: 175,

  /** Tilde (~) key. Requires Gecko 15.0 */
  VK_TILDE: 176,

  /** Comma (,) key. */
  VK_COMMA: 188,

  /** Period (.) key. */
  VK_PERIOD: 190,

  /** Slash (/) key. */
  VK_SLASH: 191,

  /** Back tick (`) key. */
  VK_BACK_QUOTE: 192,

  /** Open square bracket ([) key. */
  VK_OPEN_BRACKET: 219,

  /** Back slash (\) key. */
  VK_BACK_SLASH: 220,

  /** Close square bracket (]) key. */
  VK_CLOSE_BRACKET: 221,

  /** Quote (''') key. */
  VK_QUOTE: 222,

  /** Meta key on Linux, Command key on Mac. */
  VK_META: 224,

  /** AltGr key on Linux. Requires Gecko 15.0 */
  VK_ALTGR: 225,

  /** Windows logo key on Windows. Or Super or Hyper key on Linux. Requires Gecko 15.0 */
  VK_WIN: 91,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_KANA: 21,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_HANGUL: 21,

  /** 英数 key on Japanese Mac keyboard. Requires Gecko 15.0 */
  VK_EISU: 22,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_JUNJA: 23,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_FINAL: 24,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_HANJA: 25,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_KANJI: 25,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_CONVERT: 28,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_NONCONVERT: 29,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_ACCEPT: 30,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_MODECHANGE: 31,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_SELECT: 41,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_PRINT: 42,

  /** Linux support for this keycode was added in Gecko 4.0. */
  VK_EXECUTE: 43,

  /** Linux support for this keycode was added in Gecko 4.0.	 */
  VK_SLEEP: 95
};
// CONCATENATED MODULE: ./node_modules/rot-js/lib/display/display.js
function display_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function display_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function display_createClass(Constructor, protoProps, staticProps) { if (protoProps) display_defineProperties(Constructor.prototype, protoProps); if (staticProps) display_defineProperties(Constructor, staticProps); return Constructor; }








var BACKENDS = {
  "hex": Hex,
  "rect": rect,
  "tile": Tile,
  "tile-gl": TileGL,
  "term": Term
};
var DEFAULT_OPTIONS = {
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  transpose: false,
  layout: "rect",
  fontSize: 15,
  spacing: 1,
  border: 0,
  forceSquareRatio: false,
  fontFamily: "monospace",
  fontStyle: "",
  fg: "#ccc",
  bg: "#000",
  tileWidth: 32,
  tileHeight: 32,
  tileMap: {},
  tileSet: null,
  tileColorize: false
};
/**
 * @class Visual map display
 */

var Display =
/** @class */
function () {
  var Display = /*#__PURE__*/function () {
    function Display() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      display_classCallCheck(this, Display);

      this._data = {};
      this._dirty = false; // false = nothing, true = all, object = dirty cells

      this._options = {};
      options = Object.assign({}, DEFAULT_OPTIONS, options);
      this.setOptions(options);
      this.DEBUG = this.DEBUG.bind(this);
      this._tick = this._tick.bind(this);

      this._backend.schedule(this._tick);
    }
    /**
     * Debug helper, ideal as a map generator callback. Always bound to this.
     * @param {int} x
     * @param {int} y
     * @param {int} what
     */


    display_createClass(Display, [{
      key: "DEBUG",
      value: function DEBUG(x, y, what) {
        var colors = [this._options.bg, this._options.fg];
        this.draw(x, y, null, null, colors[what % colors.length]);
      }
      /**
       * Clear the whole display (cover it with background color)
       */

    }, {
      key: "clear",
      value: function clear() {
        this._data = {};
        this._dirty = true;
      }
      /**
       * @see ROT.Display
       */

    }, {
      key: "setOptions",
      value: function setOptions(options) {
        Object.assign(this._options, options);

        if (options.width || options.height || options.fontSize || options.fontFamily || options.spacing || options.layout) {
          if (options.layout) {
            var ctor = BACKENDS[options.layout];
            this._backend = new ctor();
          }

          this._backend.setOptions(this._options);

          this._dirty = true;
        }

        return this;
      }
      /**
       * Returns currently set options
       */

    }, {
      key: "getOptions",
      value: function getOptions() {
        return this._options;
      }
      /**
       * Returns the DOM node of this display
       */

    }, {
      key: "getContainer",
      value: function getContainer() {
        return this._backend.getContainer();
      }
      /**
       * Compute the maximum width/height to fit into a set of given constraints
       * @param {int} availWidth Maximum allowed pixel width
       * @param {int} availHeight Maximum allowed pixel height
       * @returns {int[2]} cellWidth,cellHeight
       */

    }, {
      key: "computeSize",
      value: function computeSize(availWidth, availHeight) {
        return this._backend.computeSize(availWidth, availHeight);
      }
      /**
       * Compute the maximum font size to fit into a set of given constraints
       * @param {int} availWidth Maximum allowed pixel width
       * @param {int} availHeight Maximum allowed pixel height
       * @returns {int} fontSize
       */

    }, {
      key: "computeFontSize",
      value: function computeFontSize(availWidth, availHeight) {
        return this._backend.computeFontSize(availWidth, availHeight);
      }
    }, {
      key: "computeTileSize",
      value: function computeTileSize(availWidth, availHeight) {
        var width = Math.floor(availWidth / this._options.width);
        var height = Math.floor(availHeight / this._options.height);
        return [width, height];
      }
      /**
       * Convert a DOM event (mouse or touch) to map coordinates. Uses first touch for multi-touch.
       * @param {Event} e event
       * @returns {int[2]} -1 for values outside of the canvas
       */

    }, {
      key: "eventToPosition",
      value: function eventToPosition(e) {
        var x, y;

        if ("touches" in e) {
          x = e.touches[0].clientX;
          y = e.touches[0].clientY;
        } else {
          x = e.clientX;
          y = e.clientY;
        }

        return this._backend.eventToPosition(x, y);
      }
      /**
       * @param {int} x
       * @param {int} y
       * @param {string || string[]} ch One or more chars (will be overlapping themselves)
       * @param {string} [fg] foreground color
       * @param {string} [bg] background color
       */

    }, {
      key: "draw",
      value: function draw(x, y, ch, fg, bg) {
        if (!fg) {
          fg = this._options.fg;
        }

        if (!bg) {
          bg = this._options.bg;
        }

        var key = "".concat(x, ",").concat(y);
        this._data[key] = [x, y, ch, fg, bg];

        if (this._dirty === true) {
          return;
        } // will already redraw everything 


        if (!this._dirty) {
          this._dirty = {};
        } // first!


        this._dirty[key] = true;
      }
      /**
       * Draws a text at given position. Optionally wraps at a maximum length. Currently does not work with hex layout.
       * @param {int} x
       * @param {int} y
       * @param {string} text May contain color/background format specifiers, %c{name}/%b{name}, both optional. %c{}/%b{} resets to default.
       * @param {int} [maxWidth] wrap at what width?
       * @returns {int} lines drawn
       */

    }, {
      key: "drawText",
      value: function drawText(x, y, text, maxWidth) {
        var fg = null;
        var bg = null;
        var cx = x;
        var cy = y;
        var lines = 1;

        if (!maxWidth) {
          maxWidth = this._options.width - x;
        }

        var tokens = tokenize(text, maxWidth);

        while (tokens.length) {
          // interpret tokenized opcode stream
          var token = tokens.shift();

          switch (token.type) {
            case TYPE_TEXT:
              var isSpace = false,
                  isPrevSpace = false,
                  isFullWidth = false,
                  isPrevFullWidth = false;

              for (var i = 0; i < token.value.length; i++) {
                var cc = token.value.charCodeAt(i);
                var c = token.value.charAt(i);

                if (this._options.layout === "term") {
                  var cch = cc >> 8;
                  var isCJK = cch === 0x11 || cch >= 0x2e && cch <= 0x9f || cch >= 0xac && cch <= 0xd7 || cc >= 0xA960 && cc <= 0xA97F;

                  if (isCJK) {
                    this.draw(cx + 0, cy, c, fg, bg);
                    this.draw(cx + 1, cy, "\t", fg, bg);
                    cx += 2;
                    continue;
                  }
                } // Assign to `true` when the current char is full-width.


                isFullWidth = cc > 0xff00 && cc < 0xff61 || cc > 0xffdc && cc < 0xffe8 || cc > 0xffee; // Current char is space, whatever full-width or half-width both are OK.

                isSpace = c.charCodeAt(0) == 0x20 || c.charCodeAt(0) == 0x3000; // The previous char is full-width and
                // current char is nether half-width nor a space.

                if (isPrevFullWidth && !isFullWidth && !isSpace) {
                  cx++;
                } // add an extra position
                // The current char is full-width and
                // the previous char is not a space.


                if (isFullWidth && !isPrevSpace) {
                  cx++;
                } // add an extra position


                this.draw(cx++, cy, c, fg, bg);
                isPrevSpace = isSpace;
                isPrevFullWidth = isFullWidth;
              }

              break;

            case TYPE_FG:
              fg = token.value || null;
              break;

            case TYPE_BG:
              bg = token.value || null;
              break;

            case TYPE_NEWLINE:
              cx = x;
              cy++;
              lines++;
              break;
          }
        }

        return lines;
      }
      /**
       * Timer tick: update dirty parts
       */

    }, {
      key: "_tick",
      value: function _tick() {
        this._backend.schedule(this._tick);

        if (!this._dirty) {
          return;
        }

        if (this._dirty === true) {
          // draw all
          this._backend.clear();

          for (var id in this._data) {
            this._draw(id, false);
          } // redraw cached data 

        } else {
          // draw only dirty 
          for (var key in this._dirty) {
            this._draw(key, true);
          }
        }

        this._dirty = false;
      }
      /**
       * @param {string} key What to draw
       * @param {bool} clearBefore Is it necessary to clean before?
       */

    }, {
      key: "_draw",
      value: function _draw(key, clearBefore) {
        var data = this._data[key];

        if (data[4] != this._options.bg) {
          clearBefore = true;
        }

        this._backend.draw(data, clearBefore);
      }
    }]);

    return Display;
  }();

  Display.Rect = rect;
  Display.Hex = Hex;
  Display.Tile = Tile;
  Display.TileGL = TileGL;
  Display.Term = Term;
  return Display;
}();

/* harmony default export */ const display = (Display);
// CONCATENATED MODULE: ./node_modules/rot-js/lib/stringgenerator.js
function stringgenerator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stringgenerator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function stringgenerator_createClass(Constructor, protoProps, staticProps) { if (protoProps) stringgenerator_defineProperties(Constructor.prototype, protoProps); if (staticProps) stringgenerator_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @class (Markov process)-based string generator.
 * Copied from a <a href="http://www.roguebasin.roguelikedevelopment.org/index.php?title=Names_from_a_high_order_Markov_Process_and_a_simplified_Katz_back-off_scheme">RogueBasin article</a>.
 * Offers configurable order and prior.
 */

var StringGenerator = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function StringGenerator(options) {
    stringgenerator_classCallCheck(this, StringGenerator);

    this._options = {
      words: false,
      order: 3,
      prior: 0.001
    };
    Object.assign(this._options, options);
    this._boundary = String.fromCharCode(0);
    this._suffix = this._boundary;
    this._prefix = [];

    for (var i = 0; i < this._options.order; i++) {
      this._prefix.push(this._boundary);
    }

    this._priorValues = {};
    this._priorValues[this._boundary] = this._options.prior;
    this._data = {};
  }
  /**
   * Remove all learning data
   */


  stringgenerator_createClass(StringGenerator, [{
    key: "clear",
    value: function clear() {
      this._data = {};
      this._priorValues = {};
    }
    /**
     * @returns {string} Generated string
     */

  }, {
    key: "generate",
    value: function generate() {
      var result = [this._sample(this._prefix)];

      while (result[result.length - 1] != this._boundary) {
        result.push(this._sample(result));
      }

      return this._join(result.slice(0, -1));
    }
    /**
     * Observe (learn) a string from a training set
     */

  }, {
    key: "observe",
    value: function observe(string) {
      var tokens = this._split(string);

      for (var i = 0; i < tokens.length; i++) {
        this._priorValues[tokens[i]] = this._options.prior;
      }

      tokens = this._prefix.concat(tokens).concat(this._suffix);
      /* add boundary symbols */

      for (var _i = this._options.order; _i < tokens.length; _i++) {
        var context = tokens.slice(_i - this._options.order, _i);
        var event = tokens[_i];

        for (var j = 0; j < context.length; j++) {
          var subcontext = context.slice(j);

          this._observeEvent(subcontext, event);
        }
      }
    }
  }, {
    key: "getStats",
    value: function getStats() {
      var parts = [];
      var priorCount = Object.keys(this._priorValues).length;
      priorCount--; // boundary

      parts.push("distinct samples: " + priorCount);
      var dataCount = Object.keys(this._data).length;
      var eventCount = 0;

      for (var p in this._data) {
        eventCount += Object.keys(this._data[p]).length;
      }

      parts.push("dictionary size (contexts): " + dataCount);
      parts.push("dictionary size (events): " + eventCount);
      return parts.join(", ");
    }
    /**
     * @param {string}
     * @returns {string[]}
     */

  }, {
    key: "_split",
    value: function _split(str) {
      return str.split(this._options.words ? /\s+/ : "");
    }
    /**
     * @param {string[]}
     * @returns {string}
     */

  }, {
    key: "_join",
    value: function _join(arr) {
      return arr.join(this._options.words ? " " : "");
    }
    /**
     * @param {string[]} context
     * @param {string} event
     */

  }, {
    key: "_observeEvent",
    value: function _observeEvent(context, event) {
      var key = this._join(context);

      if (!(key in this._data)) {
        this._data[key] = {};
      }

      var data = this._data[key];

      if (!(event in data)) {
        data[event] = 0;
      }

      data[event]++;
    }
    /**
     * @param {string[]}
     * @returns {string}
     */

  }, {
    key: "_sample",
    value: function _sample(context) {
      context = this._backoff(context);

      var key = this._join(context);

      var data = this._data[key];
      var available = {};

      if (this._options.prior) {
        for (var event in this._priorValues) {
          available[event] = this._priorValues[event];
        }

        for (var _event in data) {
          available[_event] += data[_event];
        }
      } else {
        available = data;
      }

      return RNG.getWeightedValue(available);
    }
    /**
     * @param {string[]}
     * @returns {string[]}
     */

  }, {
    key: "_backoff",
    value: function _backoff(context) {
      if (context.length > this._options.order) {
        context = context.slice(-this._options.order);
      } else if (context.length < this._options.order) {
        context = this._prefix.slice(0, this._options.order - context.length).concat(context);
      }

      while (!(this._join(context) in this._data) && context.length > 0) {
        context = context.slice(1);
      }

      return context;
    }
  }]);

  return StringGenerator;
}()));


// CONCATENATED MODULE: ./node_modules/rot-js/lib/MinHeap.js
function MinHeap_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = MinHeap_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function MinHeap_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MinHeap_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MinHeap_arrayLikeToArray(o, minLen); }

function MinHeap_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MinHeap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MinHeap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MinHeap_createClass(Constructor, protoProps, staticProps) { if (protoProps) MinHeap_defineProperties(Constructor.prototype, protoProps); if (staticProps) MinHeap_defineProperties(Constructor, staticProps); return Constructor; }

var MinHeap = /*#__PURE__*/function () {
  function MinHeap() {
    MinHeap_classCallCheck(this, MinHeap);

    this.heap = [];
    this.timestamp = 0;
  }

  MinHeap_createClass(MinHeap, [{
    key: "lessThan",
    value: function lessThan(a, b) {
      return a.key == b.key ? a.timestamp < b.timestamp : a.key < b.key;
    }
  }, {
    key: "shift",
    value: function shift(v) {
      this.heap = this.heap.map(function (_ref) {
        var key = _ref.key,
            value = _ref.value,
            timestamp = _ref.timestamp;
        return {
          key: key + v,
          value: value,
          timestamp: timestamp
        };
      });
    }
  }, {
    key: "len",
    value: function len() {
      return this.heap.length;
    }
  }, {
    key: "push",
    value: function push(value, key) {
      this.timestamp += 1;
      var loc = this.len();
      this.heap.push({
        value: value,
        timestamp: this.timestamp,
        key: key
      });
      this.updateUp(loc);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.len() == 0) {
        throw new Error("no element to pop");
      }

      var top = this.heap[0];

      if (this.len() > 1) {
        this.heap[0] = this.heap.pop();
        this.updateDown(0);
      } else {
        this.heap.pop();
      }

      return top;
    }
  }, {
    key: "find",
    value: function find(v) {
      for (var i = 0; i < this.len(); i++) {
        if (v == this.heap[i].value) {
          return this.heap[i];
        }
      }

      return null;
    }
  }, {
    key: "remove",
    value: function remove(v) {
      var index = null;

      for (var i = 0; i < this.len(); i++) {
        if (v == this.heap[i].value) {
          index = i;
        }
      }

      if (index === null) {
        return false;
      }

      if (this.len() > 1) {
        var last = this.heap.pop();

        if (last.value != v) {
          // if the last one is being removed, do nothing
          this.heap[index] = last;
          this.updateDown(index);
        }

        return true;
      } else {
        this.heap.pop();
      }

      return true;
    }
  }, {
    key: "parentNode",
    value: function parentNode(x) {
      return Math.floor((x - 1) / 2);
    }
  }, {
    key: "leftChildNode",
    value: function leftChildNode(x) {
      return 2 * x + 1;
    }
  }, {
    key: "rightChildNode",
    value: function rightChildNode(x) {
      return 2 * x + 2;
    }
  }, {
    key: "existNode",
    value: function existNode(x) {
      return x >= 0 && x < this.heap.length;
    }
  }, {
    key: "swap",
    value: function swap(x, y) {
      var t = this.heap[x];
      this.heap[x] = this.heap[y];
      this.heap[y] = t;
    }
  }, {
    key: "minNode",
    value: function minNode(numbers) {
      var validnumbers = numbers.filter(this.existNode.bind(this));
      var minimal = validnumbers[0];

      var _iterator = MinHeap_createForOfIteratorHelper(validnumbers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (this.lessThan(this.heap[i], this.heap[minimal])) {
            minimal = i;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return minimal;
    }
  }, {
    key: "updateUp",
    value: function updateUp(x) {
      if (x == 0) {
        return;
      }

      var parent = this.parentNode(x);

      if (this.existNode(parent) && this.lessThan(this.heap[x], this.heap[parent])) {
        this.swap(x, parent);
        this.updateUp(parent);
      }
    }
  }, {
    key: "updateDown",
    value: function updateDown(x) {
      var leftChild = this.leftChildNode(x);
      var rightChild = this.rightChildNode(x);

      if (!this.existNode(leftChild)) {
        return;
      }

      var m = this.minNode([x, leftChild, rightChild]);

      if (m != x) {
        this.swap(x, m);
        this.updateDown(m);
      }
    }
  }, {
    key: "debugPrint",
    value: function debugPrint() {
      console.log(this.heap);
    }
  }]);

  return MinHeap;
}();
// CONCATENATED MODULE: ./node_modules/rot-js/lib/eventqueue.js
function eventqueue_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function eventqueue_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function eventqueue_createClass(Constructor, protoProps, staticProps) { if (protoProps) eventqueue_defineProperties(Constructor.prototype, protoProps); if (staticProps) eventqueue_defineProperties(Constructor, staticProps); return Constructor; }



var EventQueue = /*#__PURE__*/function () {
  /**
   * @class Generic event queue: stores events and retrieves them based on their time
   */
  function EventQueue() {
    eventqueue_classCallCheck(this, EventQueue);

    this._time = 0;
    this._events = new MinHeap();
  }
  /**
   * @returns {number} Elapsed time
   */


  eventqueue_createClass(EventQueue, [{
    key: "getTime",
    value: function getTime() {
      return this._time;
    }
    /**
     * Clear all scheduled events
     */

  }, {
    key: "clear",
    value: function clear() {
      this._events = new MinHeap();
      return this;
    }
    /**
     * @param {?} event
     * @param {number} time
     */

  }, {
    key: "add",
    value: function add(event, time) {
      this._events.push(event, time);
    }
    /**
     * Locates the nearest event, advances time if necessary. Returns that event and removes it from the queue.
     * @returns {? || null} The event previously added by addEvent, null if no event available
     */

  }, {
    key: "get",
    value: function get() {
      if (!this._events.len()) {
        return null;
      }

      var _this$_events$pop = this._events.pop(),
          time = _this$_events$pop.key,
          event = _this$_events$pop.value;

      if (time > 0) {
        /* advance */
        this._time += time;

        this._events.shift(-time);
      }

      return event;
    }
    /**
     * Get the time associated with the given event
     * @param {?} event
     * @returns {number} time
     */

  }, {
    key: "getEventTime",
    value: function getEventTime(event) {
      var r = this._events.find(event);

      if (r) {
        var key = r.key;
        return key;
      }

      return undefined;
    }
    /**
     * Remove an event from the queue
     * @param {?} event
     * @returns {bool} success?
     */

  }, {
    key: "remove",
    value: function remove(event) {
      return this._events.remove(event);
    }
  }]);

  return EventQueue;
}();


// CONCATENATED MODULE: ./node_modules/rot-js/lib/scheduler/scheduler.js
function scheduler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function scheduler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function scheduler_createClass(Constructor, protoProps, staticProps) { if (protoProps) scheduler_defineProperties(Constructor.prototype, protoProps); if (staticProps) scheduler_defineProperties(Constructor, staticProps); return Constructor; }



var Scheduler = /*#__PURE__*/function () {
  /**
   * @class Abstract scheduler
   */
  function Scheduler() {
    scheduler_classCallCheck(this, Scheduler);

    this._queue = new EventQueue();
    this._repeat = [];
    this._current = null;
  }
  /**
   * @see ROT.EventQueue#getTime
   */


  scheduler_createClass(Scheduler, [{
    key: "getTime",
    value: function getTime() {
      return this._queue.getTime();
    }
    /**
     * @param {?} item
     * @param {bool} repeat
     */

  }, {
    key: "add",
    value: function add(item, repeat) {
      if (repeat) {
        this._repeat.push(item);
      }

      return this;
    }
    /**
     * Get the time the given item is scheduled for
     * @param {?} item
     * @returns {number} time
     */

  }, {
    key: "getTimeOf",
    value: function getTimeOf(item) {
      return this._queue.getEventTime(item);
    }
    /**
     * Clear all items
     */

  }, {
    key: "clear",
    value: function clear() {
      this._queue.clear();

      this._repeat = [];
      this._current = null;
      return this;
    }
    /**
     * Remove a previously added item
     * @param {?} item
     * @returns {bool} successful?
     */

  }, {
    key: "remove",
    value: function remove(item) {
      var result = this._queue.remove(item);

      var index = this._repeat.indexOf(item);

      if (index != -1) {
        this._repeat.splice(index, 1);
      }

      if (this._current == item) {
        this._current = null;
      }

      return result;
    }
    /**
     * Schedule next item
     * @returns {?}
     */

  }, {
    key: "next",
    value: function next() {
      this._current = this._queue.get();
      return this._current;
    }
  }]);

  return Scheduler;
}();


// CONCATENATED MODULE: ./node_modules/rot-js/lib/scheduler/simple.js
function simple_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { simple_typeof = function _typeof(obj) { return typeof obj; }; } else { simple_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return simple_typeof(obj); }

function simple_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function simple_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function simple_createClass(Constructor, protoProps, staticProps) { if (protoProps) simple_defineProperties(Constructor.prototype, protoProps); if (staticProps) simple_defineProperties(Constructor, staticProps); return Constructor; }

function simple_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { simple_get = Reflect.get; } else { simple_get = function _get(target, property, receiver) { var base = simple_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return simple_get(target, property, receiver || target); }

function simple_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = simple_getPrototypeOf(object); if (object === null) break; } return object; }

function simple_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) simple_setPrototypeOf(subClass, superClass); }

function simple_setPrototypeOf(o, p) { simple_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return simple_setPrototypeOf(o, p); }

function simple_createSuper(Derived) { var hasNativeReflectConstruct = simple_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = simple_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = simple_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return simple_possibleConstructorReturn(this, result); }; }

function simple_possibleConstructorReturn(self, call) { if (call && (simple_typeof(call) === "object" || typeof call === "function")) { return call; } return simple_assertThisInitialized(self); }

function simple_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function simple_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function simple_getPrototypeOf(o) { simple_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return simple_getPrototypeOf(o); }


/**
 * @class Simple fair scheduler (round-robin style)
 */

var Simple = /*#__PURE__*/function (_Scheduler) {
  simple_inherits(Simple, _Scheduler);

  var _super = simple_createSuper(Simple);

  function Simple() {
    simple_classCallCheck(this, Simple);

    return _super.apply(this, arguments);
  }

  simple_createClass(Simple, [{
    key: "add",
    value: function add(item, repeat) {
      this._queue.add(item, 0);

      return simple_get(simple_getPrototypeOf(Simple.prototype), "add", this).call(this, item, repeat);
    }
  }, {
    key: "next",
    value: function next() {
      if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
        this._queue.add(this._current, 0);
      }

      return simple_get(simple_getPrototypeOf(Simple.prototype), "next", this).call(this);
    }
  }]);

  return Simple;
}(Scheduler);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/scheduler/speed.js
function speed_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { speed_typeof = function _typeof(obj) { return typeof obj; }; } else { speed_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return speed_typeof(obj); }

function speed_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function speed_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function speed_createClass(Constructor, protoProps, staticProps) { if (protoProps) speed_defineProperties(Constructor.prototype, protoProps); if (staticProps) speed_defineProperties(Constructor, staticProps); return Constructor; }

function speed_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { speed_get = Reflect.get; } else { speed_get = function _get(target, property, receiver) { var base = speed_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return speed_get(target, property, receiver || target); }

function speed_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = speed_getPrototypeOf(object); if (object === null) break; } return object; }

function speed_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) speed_setPrototypeOf(subClass, superClass); }

function speed_setPrototypeOf(o, p) { speed_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return speed_setPrototypeOf(o, p); }

function speed_createSuper(Derived) { var hasNativeReflectConstruct = speed_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = speed_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = speed_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return speed_possibleConstructorReturn(this, result); }; }

function speed_possibleConstructorReturn(self, call) { if (call && (speed_typeof(call) === "object" || typeof call === "function")) { return call; } return speed_assertThisInitialized(self); }

function speed_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function speed_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function speed_getPrototypeOf(o) { speed_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return speed_getPrototypeOf(o); }


/**
 * @class Speed-based scheduler
 */

var Speed = /*#__PURE__*/function (_Scheduler) {
  speed_inherits(Speed, _Scheduler);

  var _super = speed_createSuper(Speed);

  function Speed() {
    speed_classCallCheck(this, Speed);

    return _super.apply(this, arguments);
  }

  speed_createClass(Speed, [{
    key: "add",

    /**
     * @param {object} item anything with "getSpeed" method
     * @param {bool} repeat
     * @param {number} [time=1/item.getSpeed()]
     * @see ROT.Scheduler#add
     */
    value: function add(item, repeat, time) {
      this._queue.add(item, time !== undefined ? time : 1 / item.getSpeed());

      return speed_get(speed_getPrototypeOf(Speed.prototype), "add", this).call(this, item, repeat);
    }
    /**
     * @see ROT.Scheduler#next
     */

  }, {
    key: "next",
    value: function next() {
      if (this._current && this._repeat.indexOf(this._current) != -1) {
        this._queue.add(this._current, 1 / this._current.getSpeed());
      }

      return speed_get(speed_getPrototypeOf(Speed.prototype), "next", this).call(this);
    }
  }]);

  return Speed;
}(Scheduler);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/scheduler/action.js
function action_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { action_typeof = function _typeof(obj) { return typeof obj; }; } else { action_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return action_typeof(obj); }

function action_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function action_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function action_createClass(Constructor, protoProps, staticProps) { if (protoProps) action_defineProperties(Constructor.prototype, protoProps); if (staticProps) action_defineProperties(Constructor, staticProps); return Constructor; }

function action_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { action_get = Reflect.get; } else { action_get = function _get(target, property, receiver) { var base = action_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return action_get(target, property, receiver || target); }

function action_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = action_getPrototypeOf(object); if (object === null) break; } return object; }

function action_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) action_setPrototypeOf(subClass, superClass); }

function action_setPrototypeOf(o, p) { action_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return action_setPrototypeOf(o, p); }

function action_createSuper(Derived) { var hasNativeReflectConstruct = action_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = action_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = action_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return action_possibleConstructorReturn(this, result); }; }

function action_possibleConstructorReturn(self, call) { if (call && (action_typeof(call) === "object" || typeof call === "function")) { return call; } return action_assertThisInitialized(self); }

function action_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function action_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function action_getPrototypeOf(o) { action_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return action_getPrototypeOf(o); }


/**
 * @class Action-based scheduler
 * @augments ROT.Scheduler
 */

var Action = /*#__PURE__*/function (_Scheduler) {
  action_inherits(Action, _Scheduler);

  var _super = action_createSuper(Action);

  function Action() {
    var _this;

    action_classCallCheck(this, Action);

    _this = _super.call(this);
    _this._defaultDuration = 1;
    /* for newly added */

    _this._duration = _this._defaultDuration;
    /* for this._current */

    return _this;
  }
  /**
   * @param {object} item
   * @param {bool} repeat
   * @param {number} [time=1]
   * @see ROT.Scheduler#add
   */


  action_createClass(Action, [{
    key: "add",
    value: function add(item, repeat, time) {
      this._queue.add(item, time || this._defaultDuration);

      return action_get(action_getPrototypeOf(Action.prototype), "add", this).call(this, item, repeat);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._duration = this._defaultDuration;
      return action_get(action_getPrototypeOf(Action.prototype), "clear", this).call(this);
    }
  }, {
    key: "remove",
    value: function remove(item) {
      if (item == this._current) {
        this._duration = this._defaultDuration;
      }

      return action_get(action_getPrototypeOf(Action.prototype), "remove", this).call(this, item);
    }
    /**
     * @see ROT.Scheduler#next
     */

  }, {
    key: "next",
    value: function next() {
      if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
        this._queue.add(this._current, this._duration || this._defaultDuration);

        this._duration = this._defaultDuration;
      }

      return action_get(action_getPrototypeOf(Action.prototype), "next", this).call(this);
    }
    /**
     * Set duration for the active item
     */

  }, {
    key: "setDuration",
    value: function setDuration(time) {
      if (this._current) {
        this._duration = time;
      }

      return this;
    }
  }]);

  return Action;
}(Scheduler);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/scheduler/index.js
;


/* harmony default export */ const scheduler = ({
  Simple: Simple,
  Speed: Speed,
  Action: Action
});
// CONCATENATED MODULE: ./node_modules/rot-js/lib/fov/fov.js
function fov_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fov_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fov_createClass(Constructor, protoProps, staticProps) { if (protoProps) fov_defineProperties(Constructor.prototype, protoProps); if (staticProps) fov_defineProperties(Constructor, staticProps); return Constructor; }


;
;

var FOV = /*#__PURE__*/function () {
  /**
   * @class Abstract FOV algorithm
   * @param {function} lightPassesCallback Does the light pass through x,y?
   * @param {object} [options]
   * @param {int} [options.topology=8] 4/6/8
   */
  function FOV(lightPassesCallback) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    fov_classCallCheck(this, FOV);

    this._lightPasses = lightPassesCallback;
    this._options = Object.assign({
      topology: 8
    }, options);
  }
  /**
   * Return all neighbors in a concentric ring
   * @param {int} cx center-x
   * @param {int} cy center-y
   * @param {int} r range
   */


  fov_createClass(FOV, [{
    key: "_getCircle",
    value: function _getCircle(cx, cy, r) {
      var result = [];
      var dirs, countFactor, startOffset;

      switch (this._options.topology) {
        case 4:
          countFactor = 1;
          startOffset = [0, 1];
          dirs = [DIRS[8][7], DIRS[8][1], DIRS[8][3], DIRS[8][5]];
          break;

        case 6:
          dirs = DIRS[6];
          countFactor = 1;
          startOffset = [-1, 1];
          break;

        case 8:
          dirs = DIRS[4];
          countFactor = 2;
          startOffset = [-1, 1];
          break;

        default:
          throw new Error("Incorrect topology for FOV computation");
          break;
      }
      /* starting neighbor */


      var x = cx + startOffset[0] * r;
      var y = cy + startOffset[1] * r;
      /* circle */

      for (var i = 0; i < dirs.length; i++) {
        for (var j = 0; j < r * countFactor; j++) {
          result.push([x, y]);
          x += dirs[i][0];
          y += dirs[i][1];
        }
      }

      return result;
    }
  }]);

  return FOV;
}();


// CONCATENATED MODULE: ./node_modules/rot-js/lib/fov/discrete-shadowcasting.js
function discrete_shadowcasting_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { discrete_shadowcasting_typeof = function _typeof(obj) { return typeof obj; }; } else { discrete_shadowcasting_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return discrete_shadowcasting_typeof(obj); }

function discrete_shadowcasting_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function discrete_shadowcasting_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function discrete_shadowcasting_createClass(Constructor, protoProps, staticProps) { if (protoProps) discrete_shadowcasting_defineProperties(Constructor.prototype, protoProps); if (staticProps) discrete_shadowcasting_defineProperties(Constructor, staticProps); return Constructor; }

function discrete_shadowcasting_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) discrete_shadowcasting_setPrototypeOf(subClass, superClass); }

function discrete_shadowcasting_setPrototypeOf(o, p) { discrete_shadowcasting_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return discrete_shadowcasting_setPrototypeOf(o, p); }

function discrete_shadowcasting_createSuper(Derived) { var hasNativeReflectConstruct = discrete_shadowcasting_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = discrete_shadowcasting_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = discrete_shadowcasting_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return discrete_shadowcasting_possibleConstructorReturn(this, result); }; }

function discrete_shadowcasting_possibleConstructorReturn(self, call) { if (call && (discrete_shadowcasting_typeof(call) === "object" || typeof call === "function")) { return call; } return discrete_shadowcasting_assertThisInitialized(self); }

function discrete_shadowcasting_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function discrete_shadowcasting_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function discrete_shadowcasting_getPrototypeOf(o) { discrete_shadowcasting_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return discrete_shadowcasting_getPrototypeOf(o); }


/**
 * @class Discrete shadowcasting algorithm. Obsoleted by Precise shadowcasting.
 * @augments ROT.FOV
 */

var DiscreteShadowcasting = /*#__PURE__*/function (_FOV) {
  discrete_shadowcasting_inherits(DiscreteShadowcasting, _FOV);

  var _super = discrete_shadowcasting_createSuper(DiscreteShadowcasting);

  function DiscreteShadowcasting() {
    discrete_shadowcasting_classCallCheck(this, DiscreteShadowcasting);

    return _super.apply(this, arguments);
  }

  discrete_shadowcasting_createClass(DiscreteShadowcasting, [{
    key: "compute",
    value: function compute(x, y, R, callback) {
      /* this place is always visible */
      callback(x, y, 0, 1);
      /* standing in a dark place. FIXME is this a good idea?  */

      if (!this._lightPasses(x, y)) {
        return;
      }
      /* start and end angles */


      var DATA = [];
      var A, B, cx, cy, blocks;
      /* analyze surrounding cells in concentric rings, starting from the center */

      for (var r = 1; r <= R; r++) {
        var neighbors = this._getCircle(x, y, r);

        var angle = 360 / neighbors.length;

        for (var i = 0; i < neighbors.length; i++) {
          cx = neighbors[i][0];
          cy = neighbors[i][1];
          A = angle * (i - 0.5);
          B = A + angle;
          blocks = !this._lightPasses(cx, cy);

          if (this._visibleCoords(Math.floor(A), Math.ceil(B), blocks, DATA)) {
            callback(cx, cy, r, 1);
          }

          if (DATA.length == 2 && DATA[0] == 0 && DATA[1] == 360) {
            return;
          }
          /* cutoff? */

        }
        /* for all cells in this ring */

      }
      /* for all rings */

    }
    /**
     * @param {int} A start angle
     * @param {int} B end angle
     * @param {bool} blocks Does current cell block visibility?
     * @param {int[][]} DATA shadowed angle pairs
     */

  }, {
    key: "_visibleCoords",
    value: function _visibleCoords(A, B, blocks, DATA) {
      if (A < 0) {
        var v1 = this._visibleCoords(0, B, blocks, DATA);

        var v2 = this._visibleCoords(360 + A, 360, blocks, DATA);

        return v1 || v2;
      }

      var index = 0;

      while (index < DATA.length && DATA[index] < A) {
        index++;
      }

      if (index == DATA.length) {
        /* completely new shadow */
        if (blocks) {
          DATA.push(A, B);
        }

        return true;
      }

      var count = 0;

      if (index % 2) {
        /* this shadow starts in an existing shadow, or within its ending boundary */
        while (index < DATA.length && DATA[index] < B) {
          index++;
          count++;
        }

        if (count == 0) {
          return false;
        }

        if (blocks) {
          if (count % 2) {
            DATA.splice(index - count, count, B);
          } else {
            DATA.splice(index - count, count);
          }
        }

        return true;
      } else {
        /* this shadow starts outside an existing shadow, or within a starting boundary */
        while (index < DATA.length && DATA[index] < B) {
          index++;
          count++;
        }
        /* visible when outside an existing shadow, or when overlapping */


        if (A == DATA[index - count] && count == 1) {
          return false;
        }

        if (blocks) {
          if (count % 2) {
            DATA.splice(index - count, count, A);
          } else {
            DATA.splice(index - count, count, A, B);
          }
        }

        return true;
      }
    }
  }]);

  return DiscreteShadowcasting;
}(FOV);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/fov/precise-shadowcasting.js
function precise_shadowcasting_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { precise_shadowcasting_typeof = function _typeof(obj) { return typeof obj; }; } else { precise_shadowcasting_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return precise_shadowcasting_typeof(obj); }

function precise_shadowcasting_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function precise_shadowcasting_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function precise_shadowcasting_createClass(Constructor, protoProps, staticProps) { if (protoProps) precise_shadowcasting_defineProperties(Constructor.prototype, protoProps); if (staticProps) precise_shadowcasting_defineProperties(Constructor, staticProps); return Constructor; }

function precise_shadowcasting_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) precise_shadowcasting_setPrototypeOf(subClass, superClass); }

function precise_shadowcasting_setPrototypeOf(o, p) { precise_shadowcasting_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return precise_shadowcasting_setPrototypeOf(o, p); }

function precise_shadowcasting_createSuper(Derived) { var hasNativeReflectConstruct = precise_shadowcasting_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = precise_shadowcasting_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = precise_shadowcasting_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return precise_shadowcasting_possibleConstructorReturn(this, result); }; }

function precise_shadowcasting_possibleConstructorReturn(self, call) { if (call && (precise_shadowcasting_typeof(call) === "object" || typeof call === "function")) { return call; } return precise_shadowcasting_assertThisInitialized(self); }

function precise_shadowcasting_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function precise_shadowcasting_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function precise_shadowcasting_getPrototypeOf(o) { precise_shadowcasting_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return precise_shadowcasting_getPrototypeOf(o); }


/**
 * @class Precise shadowcasting algorithm
 * @augments ROT.FOV
 */

var PreciseShadowcasting = /*#__PURE__*/function (_FOV) {
  precise_shadowcasting_inherits(PreciseShadowcasting, _FOV);

  var _super = precise_shadowcasting_createSuper(PreciseShadowcasting);

  function PreciseShadowcasting() {
    precise_shadowcasting_classCallCheck(this, PreciseShadowcasting);

    return _super.apply(this, arguments);
  }

  precise_shadowcasting_createClass(PreciseShadowcasting, [{
    key: "compute",
    value: function compute(x, y, R, callback) {
      /* this place is always visible */
      callback(x, y, 0, 1);
      /* standing in a dark place. FIXME is this a good idea?  */

      if (!this._lightPasses(x, y)) {
        return;
      }
      /* list of all shadows */


      var SHADOWS = [];
      var cx, cy, blocks, A1, A2, visibility;
      /* analyze surrounding cells in concentric rings, starting from the center */

      for (var r = 1; r <= R; r++) {
        var neighbors = this._getCircle(x, y, r);

        var neighborCount = neighbors.length;

        for (var i = 0; i < neighborCount; i++) {
          cx = neighbors[i][0];
          cy = neighbors[i][1];
          /* shift half-an-angle backwards to maintain consistency of 0-th cells */

          A1 = [i ? 2 * i - 1 : 2 * neighborCount - 1, 2 * neighborCount];
          A2 = [2 * i + 1, 2 * neighborCount];
          blocks = !this._lightPasses(cx, cy);
          visibility = this._checkVisibility(A1, A2, blocks, SHADOWS);

          if (visibility) {
            callback(cx, cy, r, visibility);
          }

          if (SHADOWS.length == 2 && SHADOWS[0][0] == 0 && SHADOWS[1][0] == SHADOWS[1][1]) {
            return;
          }
          /* cutoff? */

        }
        /* for all cells in this ring */

      }
      /* for all rings */

    }
    /**
     * @param {int[2]} A1 arc start
     * @param {int[2]} A2 arc end
     * @param {bool} blocks Does current arc block visibility?
     * @param {int[][]} SHADOWS list of active shadows
     */

  }, {
    key: "_checkVisibility",
    value: function _checkVisibility(A1, A2, blocks, SHADOWS) {
      if (A1[0] > A2[0]) {
        /* split into two sub-arcs */
        var v1 = this._checkVisibility(A1, [A1[1], A1[1]], blocks, SHADOWS);

        var v2 = this._checkVisibility([0, 1], A2, blocks, SHADOWS);

        return (v1 + v2) / 2;
      }
      /* index1: first shadow >= A1 */


      var index1 = 0,
          edge1 = false;

      while (index1 < SHADOWS.length) {
        var old = SHADOWS[index1];
        var diff = old[0] * A1[1] - A1[0] * old[1];

        if (diff >= 0) {
          /* old >= A1 */
          if (diff == 0 && !(index1 % 2)) {
            edge1 = true;
          }

          break;
        }

        index1++;
      }
      /* index2: last shadow <= A2 */


      var index2 = SHADOWS.length,
          edge2 = false;

      while (index2--) {
        var _old = SHADOWS[index2];

        var _diff = A2[0] * _old[1] - _old[0] * A2[1];

        if (_diff >= 0) {
          /* old <= A2 */
          if (_diff == 0 && index2 % 2) {
            edge2 = true;
          }

          break;
        }
      }

      var visible = true;

      if (index1 == index2 && (edge1 || edge2)) {
        /* subset of existing shadow, one of the edges match */
        visible = false;
      } else if (edge1 && edge2 && index1 + 1 == index2 && index2 % 2) {
        /* completely equivalent with existing shadow */
        visible = false;
      } else if (index1 > index2 && index1 % 2) {
        /* subset of existing shadow, not touching */
        visible = false;
      }

      if (!visible) {
        return 0;
      }
      /* fast case: not visible */


      var visibleLength;
      /* compute the length of visible arc, adjust list of shadows (if blocking) */

      var remove = index2 - index1 + 1;

      if (remove % 2) {
        if (index1 % 2) {
          /* first edge within existing shadow, second outside */
          var P = SHADOWS[index1];
          visibleLength = (A2[0] * P[1] - P[0] * A2[1]) / (P[1] * A2[1]);

          if (blocks) {
            SHADOWS.splice(index1, remove, A2);
          }
        } else {
          /* second edge within existing shadow, first outside */
          var _P = SHADOWS[index2];
          visibleLength = (_P[0] * A1[1] - A1[0] * _P[1]) / (A1[1] * _P[1]);

          if (blocks) {
            SHADOWS.splice(index1, remove, A1);
          }
        }
      } else {
        if (index1 % 2) {
          /* both edges within existing shadows */
          var P1 = SHADOWS[index1];
          var P2 = SHADOWS[index2];
          visibleLength = (P2[0] * P1[1] - P1[0] * P2[1]) / (P1[1] * P2[1]);

          if (blocks) {
            SHADOWS.splice(index1, remove);
          }
        } else {
          /* both edges outside existing shadows */
          if (blocks) {
            SHADOWS.splice(index1, remove, A1, A2);
          }

          return 1;
          /* whole arc visible! */
        }
      }

      var arcLength = (A2[0] * A1[1] - A1[0] * A2[1]) / (A1[1] * A2[1]);
      return visibleLength / arcLength;
    }
  }]);

  return PreciseShadowcasting;
}(FOV);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/fov/recursive-shadowcasting.js
function recursive_shadowcasting_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { recursive_shadowcasting_typeof = function _typeof(obj) { return typeof obj; }; } else { recursive_shadowcasting_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return recursive_shadowcasting_typeof(obj); }

function recursive_shadowcasting_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function recursive_shadowcasting_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function recursive_shadowcasting_createClass(Constructor, protoProps, staticProps) { if (protoProps) recursive_shadowcasting_defineProperties(Constructor.prototype, protoProps); if (staticProps) recursive_shadowcasting_defineProperties(Constructor, staticProps); return Constructor; }

function recursive_shadowcasting_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) recursive_shadowcasting_setPrototypeOf(subClass, superClass); }

function recursive_shadowcasting_setPrototypeOf(o, p) { recursive_shadowcasting_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return recursive_shadowcasting_setPrototypeOf(o, p); }

function recursive_shadowcasting_createSuper(Derived) { var hasNativeReflectConstruct = recursive_shadowcasting_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = recursive_shadowcasting_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = recursive_shadowcasting_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return recursive_shadowcasting_possibleConstructorReturn(this, result); }; }

function recursive_shadowcasting_possibleConstructorReturn(self, call) { if (call && (recursive_shadowcasting_typeof(call) === "object" || typeof call === "function")) { return call; } return recursive_shadowcasting_assertThisInitialized(self); }

function recursive_shadowcasting_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function recursive_shadowcasting_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function recursive_shadowcasting_getPrototypeOf(o) { recursive_shadowcasting_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return recursive_shadowcasting_getPrototypeOf(o); }


/** Octants used for translating recursive shadowcasting offsets */

var OCTANTS = [[-1, 0, 0, 1], [0, -1, 1, 0], [0, -1, -1, 0], [-1, 0, 0, -1], [1, 0, 0, -1], [0, 1, -1, 0], [0, 1, 1, 0], [1, 0, 0, 1]];
/**
 * @class Recursive shadowcasting algorithm
 * Currently only supports 4/8 topologies, not hexagonal.
 * Based on Peter Harkins' implementation of Björn Bergström's algorithm described here: http://www.roguebasin.com/index.php?title=FOV_using_recursive_shadowcasting
 * @augments ROT.FOV
 */

var RecursiveShadowcasting = /*#__PURE__*/function (_FOV) {
  recursive_shadowcasting_inherits(RecursiveShadowcasting, _FOV);

  var _super = recursive_shadowcasting_createSuper(RecursiveShadowcasting);

  function RecursiveShadowcasting() {
    recursive_shadowcasting_classCallCheck(this, RecursiveShadowcasting);

    return _super.apply(this, arguments);
  }

  recursive_shadowcasting_createClass(RecursiveShadowcasting, [{
    key: "compute",

    /**
     * Compute visibility for a 360-degree circle
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {function} callback
     */
    value: function compute(x, y, R, callback) {
      //You can always see your own tile
      callback(x, y, 0, 1);

      for (var i = 0; i < OCTANTS.length; i++) {
        this._renderOctant(x, y, OCTANTS[i], R, callback);
      }
    }
    /**
     * Compute visibility for a 180-degree arc
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {int} dir Direction to look in (expressed in a ROT.DIRS value);
     * @param {function} callback
     */

  }, {
    key: "compute180",
    value: function compute180(x, y, R, dir, callback) {
      //You can always see your own tile
      callback(x, y, 0, 1);
      var previousOctant = (dir - 1 + 8) % 8; //Need to retrieve the previous octant to render a full 180 degrees

      var nextPreviousOctant = (dir - 2 + 8) % 8; //Need to retrieve the previous two octants to render a full 180 degrees

      var nextOctant = (dir + 1 + 8) % 8; //Need to grab to next octant to render a full 180 degrees

      this._renderOctant(x, y, OCTANTS[nextPreviousOctant], R, callback);

      this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);

      this._renderOctant(x, y, OCTANTS[dir], R, callback);

      this._renderOctant(x, y, OCTANTS[nextOctant], R, callback);
    }
  }, {
    key: "compute90",

    /**
     * Compute visibility for a 90-degree arc
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {int} dir Direction to look in (expressed in a ROT.DIRS value);
     * @param {function} callback
     */
    value: function compute90(x, y, R, dir, callback) {
      //You can always see your own tile
      callback(x, y, 0, 1);
      var previousOctant = (dir - 1 + 8) % 8; //Need to retrieve the previous octant to render a full 90 degrees

      this._renderOctant(x, y, OCTANTS[dir], R, callback);

      this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
    }
    /**
     * Render one octant (45-degree arc) of the viewshed
     * @param {int} x
     * @param {int} y
     * @param {int} octant Octant to be rendered
     * @param {int} R Maximum visibility radius
     * @param {function} callback
     */

  }, {
    key: "_renderOctant",
    value: function _renderOctant(x, y, octant, R, callback) {
      //Radius incremented by 1 to provide same coverage area as other shadowcasting radiuses
      this._castVisibility(x, y, 1, 1.0, 0.0, R + 1, octant[0], octant[1], octant[2], octant[3], callback);
    }
    /**
     * Actually calculates the visibility
     * @param {int} startX The starting X coordinate
     * @param {int} startY The starting Y coordinate
     * @param {int} row The row to render
     * @param {float} visSlopeStart The slope to start at
     * @param {float} visSlopeEnd The slope to end at
     * @param {int} radius The radius to reach out to
     * @param {int} xx
     * @param {int} xy
     * @param {int} yx
     * @param {int} yy
     * @param {function} callback The callback to use when we hit a block that is visible
     */

  }, {
    key: "_castVisibility",
    value: function _castVisibility(startX, startY, row, visSlopeStart, visSlopeEnd, radius, xx, xy, yx, yy, callback) {
      if (visSlopeStart < visSlopeEnd) {
        return;
      }

      for (var i = row; i <= radius; i++) {
        var dx = -i - 1;
        var dy = -i;
        var blocked = false;
        var newStart = 0; //'Row' could be column, names here assume octant 0 and would be flipped for half the octants

        while (dx <= 0) {
          dx += 1; //Translate from relative coordinates to map coordinates

          var mapX = startX + dx * xx + dy * xy;
          var mapY = startY + dx * yx + dy * yy; //Range of the row

          var slopeStart = (dx - 0.5) / (dy + 0.5);
          var slopeEnd = (dx + 0.5) / (dy - 0.5); //Ignore if not yet at left edge of Octant

          if (slopeEnd > visSlopeStart) {
            continue;
          } //Done if past right edge


          if (slopeStart < visSlopeEnd) {
            break;
          } //If it's in range, it's visible


          if (dx * dx + dy * dy < radius * radius) {
            callback(mapX, mapY, i, 1);
          }

          if (!blocked) {
            //If tile is a blocking tile, cast around it
            if (!this._lightPasses(mapX, mapY) && i < radius) {
              blocked = true;

              this._castVisibility(startX, startY, i + 1, visSlopeStart, slopeStart, radius, xx, xy, yx, yy, callback);

              newStart = slopeEnd;
            }
          } else {
            //Keep narrowing if scanning across a block
            if (!this._lightPasses(mapX, mapY)) {
              newStart = slopeEnd;
              continue;
            } //Block has ended


            blocked = false;
            visSlopeStart = newStart;
          }
        }

        if (blocked) {
          break;
        }
      }
    }
  }]);

  return RecursiveShadowcasting;
}(FOV);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/fov/index.js
;


/* harmony default export */ const fov = ({
  DiscreteShadowcasting: DiscreteShadowcasting,
  PreciseShadowcasting: PreciseShadowcasting,
  RecursiveShadowcasting: RecursiveShadowcasting
});
// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/map.js
function map_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function map_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function map_createClass(Constructor, protoProps, staticProps) { if (protoProps) map_defineProperties(Constructor.prototype, protoProps); if (staticProps) map_defineProperties(Constructor, staticProps); return Constructor; }


;

var map_Map = /*#__PURE__*/function () {
  /**
   * @class Base map generator
   * @param {int} [width=ROT.DEFAULT_WIDTH]
   * @param {int} [height=ROT.DEFAULT_HEIGHT]
   */
  function Map() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_WIDTH;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_HEIGHT;

    map_classCallCheck(this, Map);

    this._width = width;
    this._height = height;
  }

  map_createClass(Map, [{
    key: "_fillMap",
    value: function _fillMap(value) {
      var map = [];

      for (var i = 0; i < this._width; i++) {
        map.push([]);

        for (var j = 0; j < this._height; j++) {
          map[i].push(value);
        }
      }

      return map;
    }
  }]);

  return Map;
}();


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/arena.js
function arena_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { arena_typeof = function _typeof(obj) { return typeof obj; }; } else { arena_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return arena_typeof(obj); }

function arena_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function arena_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function arena_createClass(Constructor, protoProps, staticProps) { if (protoProps) arena_defineProperties(Constructor.prototype, protoProps); if (staticProps) arena_defineProperties(Constructor, staticProps); return Constructor; }

function arena_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) arena_setPrototypeOf(subClass, superClass); }

function arena_setPrototypeOf(o, p) { arena_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return arena_setPrototypeOf(o, p); }

function arena_createSuper(Derived) { var hasNativeReflectConstruct = arena_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = arena_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = arena_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return arena_possibleConstructorReturn(this, result); }; }

function arena_possibleConstructorReturn(self, call) { if (call && (arena_typeof(call) === "object" || typeof call === "function")) { return call; } return arena_assertThisInitialized(self); }

function arena_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function arena_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function arena_getPrototypeOf(o) { arena_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return arena_getPrototypeOf(o); }


/**
 * @class Simple empty rectangular room
 * @augments ROT.Map
 */

var Arena = /*#__PURE__*/function (_Map) {
  arena_inherits(Arena, _Map);

  var _super = arena_createSuper(Arena);

  function Arena() {
    arena_classCallCheck(this, Arena);

    return _super.apply(this, arguments);
  }

  arena_createClass(Arena, [{
    key: "create",
    value: function create(callback) {
      var w = this._width - 1;
      var h = this._height - 1;

      for (var i = 0; i <= w; i++) {
        for (var j = 0; j <= h; j++) {
          var empty = i && j && i < w && j < h;
          callback(i, j, empty ? 0 : 1);
        }
      }

      return this;
    }
  }]);

  return Arena;
}(map_Map);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/dungeon.js
function dungeon_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dungeon_typeof = function _typeof(obj) { return typeof obj; }; } else { dungeon_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dungeon_typeof(obj); }

function dungeon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dungeon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dungeon_createClass(Constructor, protoProps, staticProps) { if (protoProps) dungeon_defineProperties(Constructor.prototype, protoProps); if (staticProps) dungeon_defineProperties(Constructor, staticProps); return Constructor; }

function dungeon_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dungeon_setPrototypeOf(subClass, superClass); }

function dungeon_setPrototypeOf(o, p) { dungeon_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dungeon_setPrototypeOf(o, p); }

function dungeon_createSuper(Derived) { var hasNativeReflectConstruct = dungeon_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dungeon_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dungeon_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dungeon_possibleConstructorReturn(this, result); }; }

function dungeon_possibleConstructorReturn(self, call) { if (call && (dungeon_typeof(call) === "object" || typeof call === "function")) { return call; } return dungeon_assertThisInitialized(self); }

function dungeon_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dungeon_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function dungeon_getPrototypeOf(o) { dungeon_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dungeon_getPrototypeOf(o); }


/**
 * @class Dungeon map: has rooms and corridors
 * @augments ROT.Map
 */

var Dungeon = /*#__PURE__*/function (_Map) {
  dungeon_inherits(Dungeon, _Map);

  var _super = dungeon_createSuper(Dungeon);

  function Dungeon(width, height) {
    var _this;

    dungeon_classCallCheck(this, Dungeon);

    _this = _super.call(this, width, height);
    _this._rooms = [];
    _this._corridors = [];
    return _this;
  }
  /**
   * Get all generated rooms
   * @returns {ROT.Map.Feature.Room[]}
   */


  dungeon_createClass(Dungeon, [{
    key: "getRooms",
    value: function getRooms() {
      return this._rooms;
    }
    /**
     * Get all generated corridors
     * @returns {ROT.Map.Feature.Corridor[]}
     */

  }, {
    key: "getCorridors",
    value: function getCorridors() {
      return this._corridors;
    }
  }]);

  return Dungeon;
}(map_Map);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/features.js
function features_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { features_typeof = function _typeof(obj) { return typeof obj; }; } else { features_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return features_typeof(obj); }

function features_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function features_createClass(Constructor, protoProps, staticProps) { if (protoProps) features_defineProperties(Constructor.prototype, protoProps); if (staticProps) features_defineProperties(Constructor, staticProps); return Constructor; }

function features_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) features_setPrototypeOf(subClass, superClass); }

function features_setPrototypeOf(o, p) { features_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return features_setPrototypeOf(o, p); }

function features_createSuper(Derived) { var hasNativeReflectConstruct = features_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = features_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = features_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return features_possibleConstructorReturn(this, result); }; }

function features_possibleConstructorReturn(self, call) { if (call && (features_typeof(call) === "object" || typeof call === "function")) { return call; } return features_assertThisInitialized(self); }

function features_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function features_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function features_getPrototypeOf(o) { features_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return features_getPrototypeOf(o); }

function features_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


;
/**
 * @class Dungeon feature; has own .create() method
 */

var Feature = function Feature() {
  features_classCallCheck(this, Feature);
};
/**
 * @class Room
 * @augments ROT.Map.Feature
 * @param {int} x1
 * @param {int} y1
 * @param {int} x2
 * @param {int} y2
 * @param {int} [doorX]
 * @param {int} [doorY]
 */


var Room = /*#__PURE__*/function (_Feature) {
  features_inherits(Room, _Feature);

  var _super = features_createSuper(Room);

  function Room(x1, y1, x2, y2, doorX, doorY) {
    var _this;

    features_classCallCheck(this, Room);

    _this = _super.call(this);
    _this._x1 = x1;
    _this._y1 = y1;
    _this._x2 = x2;
    _this._y2 = y2;
    _this._doors = {};

    if (doorX !== undefined && doorY !== undefined) {
      _this.addDoor(doorX, doorY);
    }

    return _this;
  }

  features_createClass(Room, [{
    key: "addDoor",
    value: function addDoor(x, y) {
      this._doors[x + "," + y] = 1;
      return this;
    }
    /**
     * @param {function}
     */

  }, {
    key: "getDoors",
    value: function getDoors(cb) {
      for (var key in this._doors) {
        var parts = key.split(",");
        cb(parseInt(parts[0]), parseInt(parts[1]));
      }

      return this;
    }
  }, {
    key: "clearDoors",
    value: function clearDoors() {
      this._doors = {};
      return this;
    }
  }, {
    key: "addDoors",
    value: function addDoors(isWallCallback) {
      var left = this._x1 - 1;
      var right = this._x2 + 1;
      var top = this._y1 - 1;
      var bottom = this._y2 + 1;

      for (var x = left; x <= right; x++) {
        for (var y = top; y <= bottom; y++) {
          if (x != left && x != right && y != top && y != bottom) {
            continue;
          }

          if (isWallCallback(x, y)) {
            continue;
          }

          this.addDoor(x, y);
        }
      }

      return this;
    }
  }, {
    key: "debug",
    value: function debug() {
      console.log("room", this._x1, this._y1, this._x2, this._y2);
    }
  }, {
    key: "isValid",
    value: function isValid(isWallCallback, canBeDugCallback) {
      var left = this._x1 - 1;
      var right = this._x2 + 1;
      var top = this._y1 - 1;
      var bottom = this._y2 + 1;

      for (var x = left; x <= right; x++) {
        for (var y = top; y <= bottom; y++) {
          if (x == left || x == right || y == top || y == bottom) {
            if (!isWallCallback(x, y)) {
              return false;
            }
          } else {
            if (!canBeDugCallback(x, y)) {
              return false;
            }
          }
        }
      }

      return true;
    }
    /**
     * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty, 1 = wall, 2 = door. Multiple doors are allowed.
     */

  }, {
    key: "create",
    value: function create(digCallback) {
      var left = this._x1 - 1;
      var right = this._x2 + 1;
      var top = this._y1 - 1;
      var bottom = this._y2 + 1;
      var value = 0;

      for (var x = left; x <= right; x++) {
        for (var y = top; y <= bottom; y++) {
          if (x + "," + y in this._doors) {
            value = 2;
          } else if (x == left || x == right || y == top || y == bottom) {
            value = 1;
          } else {
            value = 0;
          }

          digCallback(x, y, value);
        }
      }
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return [Math.round((this._x1 + this._x2) / 2), Math.round((this._y1 + this._y2) / 2)];
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this._x1;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this._x2;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this._y1;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this._y2;
    }
  }], [{
    key: "createRandomAt",

    /**
     * Room of random size, with a given doors and direction
     */
    value: function createRandomAt(x, y, dx, dy, options) {
      var min = options.roomWidth[0];
      var max = options.roomWidth[1];
      var width = rng.getUniformInt(min, max);
      min = options.roomHeight[0];
      max = options.roomHeight[1];
      var height = rng.getUniformInt(min, max);

      if (dx == 1) {
        /* to the right */
        var y2 = y - Math.floor(rng.getUniform() * height);
        return new this(x + 1, y2, x + width, y2 + height - 1, x, y);
      }

      if (dx == -1) {
        /* to the left */
        var _y = y - Math.floor(rng.getUniform() * height);

        return new this(x - width, _y, x - 1, _y + height - 1, x, y);
      }

      if (dy == 1) {
        /* to the bottom */
        var x2 = x - Math.floor(rng.getUniform() * width);
        return new this(x2, y + 1, x2 + width - 1, y + height, x, y);
      }

      if (dy == -1) {
        /* to the top */
        var _x = x - Math.floor(rng.getUniform() * width);

        return new this(_x, y - height, _x + width - 1, y - 1, x, y);
      }

      throw new Error("dx or dy must be 1 or -1");
    }
    /**
     * Room of random size, positioned around center coords
     */

  }, {
    key: "createRandomCenter",
    value: function createRandomCenter(cx, cy, options) {
      var min = options.roomWidth[0];
      var max = options.roomWidth[1];
      var width = rng.getUniformInt(min, max);
      min = options.roomHeight[0];
      max = options.roomHeight[1];
      var height = rng.getUniformInt(min, max);
      var x1 = cx - Math.floor(rng.getUniform() * width);
      var y1 = cy - Math.floor(rng.getUniform() * height);
      var x2 = x1 + width - 1;
      var y2 = y1 + height - 1;
      return new this(x1, y1, x2, y2);
    }
    /**
     * Room of random size within a given dimensions
     */

  }, {
    key: "createRandom",
    value: function createRandom(availWidth, availHeight, options) {
      var min = options.roomWidth[0];
      var max = options.roomWidth[1];
      var width = rng.getUniformInt(min, max);
      min = options.roomHeight[0];
      max = options.roomHeight[1];
      var height = rng.getUniformInt(min, max);
      var left = availWidth - width - 1;
      var top = availHeight - height - 1;
      var x1 = 1 + Math.floor(rng.getUniform() * left);
      var y1 = 1 + Math.floor(rng.getUniform() * top);
      var x2 = x1 + width - 1;
      var y2 = y1 + height - 1;
      return new this(x1, y1, x2, y2);
    }
  }]);

  return Room;
}(Feature);
/**
 * @class Corridor
 * @augments ROT.Map.Feature
 * @param {int} startX
 * @param {int} startY
 * @param {int} endX
 * @param {int} endY
 */

var Corridor = /*#__PURE__*/function (_Feature2) {
  features_inherits(Corridor, _Feature2);

  var _super2 = features_createSuper(Corridor);

  function Corridor(startX, startY, endX, endY) {
    var _this2;

    features_classCallCheck(this, Corridor);

    _this2 = _super2.call(this);
    _this2._startX = startX;
    _this2._startY = startY;
    _this2._endX = endX;
    _this2._endY = endY;
    _this2._endsWithAWall = true;
    return _this2;
  }

  features_createClass(Corridor, [{
    key: "debug",
    value: function debug() {
      console.log("corridor", this._startX, this._startY, this._endX, this._endY);
    }
  }, {
    key: "isValid",
    value: function isValid(isWallCallback, canBeDugCallback) {
      var sx = this._startX;
      var sy = this._startY;
      var dx = this._endX - sx;
      var dy = this._endY - sy;
      var length = 1 + Math.max(Math.abs(dx), Math.abs(dy));

      if (dx) {
        dx = dx / Math.abs(dx);
      }

      if (dy) {
        dy = dy / Math.abs(dy);
      }

      var nx = dy;
      var ny = -dx;
      var ok = true;

      for (var i = 0; i < length; i++) {
        var x = sx + i * dx;
        var y = sy + i * dy;

        if (!canBeDugCallback(x, y)) {
          ok = false;
        }

        if (!isWallCallback(x + nx, y + ny)) {
          ok = false;
        }

        if (!isWallCallback(x - nx, y - ny)) {
          ok = false;
        }

        if (!ok) {
          length = i;
          this._endX = x - dx;
          this._endY = y - dy;
          break;
        }
      }
      /**
       * If the length degenerated, this corridor might be invalid
       */

      /* not supported */


      if (length == 0) {
        return false;
      }
      /* length 1 allowed only if the next space is empty */


      if (length == 1 && isWallCallback(this._endX + dx, this._endY + dy)) {
        return false;
      }
      /**
       * We do not want the corridor to crash into a corner of a room;
       * if any of the ending corners is empty, the N+1th cell of this corridor must be empty too.
       *
       * Situation:
       * #######1
       * .......?
       * #######2
       *
       * The corridor was dug from left to right.
       * 1, 2 - problematic corners, ? = N+1th cell (not dug)
       */


      var firstCornerBad = !isWallCallback(this._endX + dx + nx, this._endY + dy + ny);
      var secondCornerBad = !isWallCallback(this._endX + dx - nx, this._endY + dy - ny);
      this._endsWithAWall = isWallCallback(this._endX + dx, this._endY + dy);

      if ((firstCornerBad || secondCornerBad) && this._endsWithAWall) {
        return false;
      }

      return true;
    }
    /**
     * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty.
     */

  }, {
    key: "create",
    value: function create(digCallback) {
      var sx = this._startX;
      var sy = this._startY;
      var dx = this._endX - sx;
      var dy = this._endY - sy;
      var length = 1 + Math.max(Math.abs(dx), Math.abs(dy));

      if (dx) {
        dx = dx / Math.abs(dx);
      }

      if (dy) {
        dy = dy / Math.abs(dy);
      }

      for (var i = 0; i < length; i++) {
        var x = sx + i * dx;
        var y = sy + i * dy;
        digCallback(x, y, 0);
      }

      return true;
    }
  }, {
    key: "createPriorityWalls",
    value: function createPriorityWalls(priorityWallCallback) {
      if (!this._endsWithAWall) {
        return;
      }

      var sx = this._startX;
      var sy = this._startY;
      var dx = this._endX - sx;
      var dy = this._endY - sy;

      if (dx) {
        dx = dx / Math.abs(dx);
      }

      if (dy) {
        dy = dy / Math.abs(dy);
      }

      var nx = dy;
      var ny = -dx;
      priorityWallCallback(this._endX + dx, this._endY + dy);
      priorityWallCallback(this._endX + nx, this._endY + ny);
      priorityWallCallback(this._endX - nx, this._endY - ny);
    }
  }], [{
    key: "createRandomAt",
    value: function createRandomAt(x, y, dx, dy, options) {
      var min = options.corridorLength[0];
      var max = options.corridorLength[1];
      var length = rng.getUniformInt(min, max);
      return new this(x, y, x + dx * length, y + dy * length);
    }
  }]);

  return Corridor;
}(Feature);
// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/uniform.js
function uniform_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { uniform_typeof = function _typeof(obj) { return typeof obj; }; } else { uniform_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return uniform_typeof(obj); }

function uniform_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function uniform_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function uniform_createClass(Constructor, protoProps, staticProps) { if (protoProps) uniform_defineProperties(Constructor.prototype, protoProps); if (staticProps) uniform_defineProperties(Constructor, staticProps); return Constructor; }

function uniform_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) uniform_setPrototypeOf(subClass, superClass); }

function uniform_setPrototypeOf(o, p) { uniform_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return uniform_setPrototypeOf(o, p); }

function uniform_createSuper(Derived) { var hasNativeReflectConstruct = uniform_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = uniform_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = uniform_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return uniform_possibleConstructorReturn(this, result); }; }

function uniform_possibleConstructorReturn(self, call) { if (call && (uniform_typeof(call) === "object" || typeof call === "function")) { return call; } return uniform_assertThisInitialized(self); }

function uniform_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function uniform_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function uniform_getPrototypeOf(o) { uniform_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return uniform_getPrototypeOf(o); }




;
/**
 * @class Dungeon generator which tries to fill the space evenly. Generates independent rooms and tries to connect them.
 * @augments ROT.Map.Dungeon
 */

var Uniform = /*#__PURE__*/function (_Dungeon) {
  uniform_inherits(Uniform, _Dungeon);

  var _super = uniform_createSuper(Uniform);

  function Uniform(width, height, options) {
    var _this;

    uniform_classCallCheck(this, Uniform);

    _this = _super.call(this, width, height);
    _this._options = {
      roomWidth: [3, 9],
      roomHeight: [3, 5],
      roomDugPercentage: 0.1,
      timeLimit: 1000
      /* we stop after this much time has passed (msec) */

    };
    Object.assign(_this._options, options);
    _this._map = [];
    _this._dug = 0;
    _this._roomAttempts = 20;
    /* new room is created N-times until is considered as impossible to generate */

    _this._corridorAttempts = 20;
    /* corridors are tried N-times until the level is considered as impossible to connect */

    _this._connected = [];
    /* list of already connected rooms */

    _this._unconnected = [];
    /* list of remaining unconnected rooms */

    _this._digCallback = _this._digCallback.bind(uniform_assertThisInitialized(_this));
    _this._canBeDugCallback = _this._canBeDugCallback.bind(uniform_assertThisInitialized(_this));
    _this._isWallCallback = _this._isWallCallback.bind(uniform_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Create a map. If the time limit has been hit, returns null.
   * @see ROT.Map#create
   */


  uniform_createClass(Uniform, [{
    key: "create",
    value: function create(callback) {
      var t1 = Date.now();

      while (1) {
        var t2 = Date.now();

        if (t2 - t1 > this._options.timeLimit) {
          return null;
        }
        /* time limit! */


        this._map = this._fillMap(1);
        this._dug = 0;
        this._rooms = [];
        this._unconnected = [];

        this._generateRooms();

        if (this._rooms.length < 2) {
          continue;
        }

        if (this._generateCorridors()) {
          break;
        }
      }

      if (callback) {
        for (var i = 0; i < this._width; i++) {
          for (var j = 0; j < this._height; j++) {
            callback(i, j, this._map[i][j]);
          }
        }
      }

      return this;
    }
    /**
     * Generates a suitable amount of rooms
     */

  }, {
    key: "_generateRooms",
    value: function _generateRooms() {
      var w = this._width - 2;
      var h = this._height - 2;
      var room;

      do {
        room = this._generateRoom();

        if (this._dug / (w * h) > this._options.roomDugPercentage) {
          break;
        }
        /* achieved requested amount of free space */

      } while (room);
      /* either enough rooms, or not able to generate more of them :) */

    }
    /**
     * Try to generate one room
     */

  }, {
    key: "_generateRoom",
    value: function _generateRoom() {
      var count = 0;

      while (count < this._roomAttempts) {
        count++;
        var room = Room.createRandom(this._width, this._height, this._options);

        if (!room.isValid(this._isWallCallback, this._canBeDugCallback)) {
          continue;
        }

        room.create(this._digCallback);

        this._rooms.push(room);

        return room;
      }
      /* no room was generated in a given number of attempts */


      return null;
    }
    /**
     * Generates connectors beween rooms
     * @returns {bool} success Was this attempt successfull?
     */

  }, {
    key: "_generateCorridors",
    value: function _generateCorridors() {
      var cnt = 0;

      while (cnt < this._corridorAttempts) {
        cnt++;
        this._corridors = [];
        /* dig rooms into a clear map */

        this._map = this._fillMap(1);

        for (var i = 0; i < this._rooms.length; i++) {
          var room = this._rooms[i];
          room.clearDoors();
          room.create(this._digCallback);
        }

        this._unconnected = rng.shuffle(this._rooms.slice());
        this._connected = [];

        if (this._unconnected.length) {
          this._connected.push(this._unconnected.pop());
        }
        /* first one is always connected */


        while (1) {
          /* 1. pick random connected room */
          var connected = rng.getItem(this._connected);

          if (!connected) {
            break;
          }
          /* 2. find closest unconnected */


          var room1 = this._closestRoom(this._unconnected, connected);

          if (!room1) {
            break;
          }
          /* 3. connect it to closest connected */


          var room2 = this._closestRoom(this._connected, room1);

          if (!room2) {
            break;
          }

          var ok = this._connectRooms(room1, room2);

          if (!ok) {
            break;
          }
          /* stop connecting, re-shuffle */


          if (!this._unconnected.length) {
            return true;
          }
          /* done; no rooms remain */

        }
      }

      return false;
    }
  }, {
    key: "_closestRoom",

    /**
     * For a given room, find the closest one from the list
     */
    value: function _closestRoom(rooms, room) {
      var dist = Infinity;
      var center = room.getCenter();
      var result = null;

      for (var i = 0; i < rooms.length; i++) {
        var r = rooms[i];
        var c = r.getCenter();
        var dx = c[0] - center[0];
        var dy = c[1] - center[1];
        var d = dx * dx + dy * dy;

        if (d < dist) {
          dist = d;
          result = r;
        }
      }

      return result;
    }
  }, {
    key: "_connectRooms",
    value: function _connectRooms(room1, room2) {
      /*
          room1.debug();
          room2.debug();
      */
      var center1 = room1.getCenter();
      var center2 = room2.getCenter();
      var diffX = center2[0] - center1[0];
      var diffY = center2[1] - center1[1];
      var start;
      var end;
      var dirIndex1, dirIndex2, min, max, index;

      if (Math.abs(diffX) < Math.abs(diffY)) {
        /* first try connecting north-south walls */
        dirIndex1 = diffY > 0 ? 2 : 0;
        dirIndex2 = (dirIndex1 + 2) % 4;
        min = room2.getLeft();
        max = room2.getRight();
        index = 0;
      } else {
        /* first try connecting east-west walls */
        dirIndex1 = diffX > 0 ? 1 : 3;
        dirIndex2 = (dirIndex1 + 2) % 4;
        min = room2.getTop();
        max = room2.getBottom();
        index = 1;
      }

      start = this._placeInWall(room1, dirIndex1);
      /* corridor will start here */

      if (!start) {
        return false;
      }

      if (start[index] >= min && start[index] <= max) {
        /* possible to connect with straight line (I-like) */
        end = start.slice();
        var value = 0;

        switch (dirIndex2) {
          case 0:
            value = room2.getTop() - 1;
            break;

          case 1:
            value = room2.getRight() + 1;
            break;

          case 2:
            value = room2.getBottom() + 1;
            break;

          case 3:
            value = room2.getLeft() - 1;
            break;
        }

        end[(index + 1) % 2] = value;

        this._digLine([start, end]);
      } else if (start[index] < min - 1 || start[index] > max + 1) {
        /* need to switch target wall (L-like) */
        var diff = start[index] - center2[index];
        var rotation = 0;

        switch (dirIndex2) {
          case 0:
          case 1:
            rotation = diff < 0 ? 3 : 1;
            break;

          case 2:
          case 3:
            rotation = diff < 0 ? 1 : 3;
            break;
        }

        dirIndex2 = (dirIndex2 + rotation) % 4;
        end = this._placeInWall(room2, dirIndex2);

        if (!end) {
          return false;
        }

        var mid = [0, 0];
        mid[index] = start[index];
        var index2 = (index + 1) % 2;
        mid[index2] = end[index2];

        this._digLine([start, mid, end]);
      } else {
        /* use current wall pair, but adjust the line in the middle (S-like) */
        var _index = (index + 1) % 2;

        end = this._placeInWall(room2, dirIndex2);

        if (!end) {
          return false;
        }

        var _mid = Math.round((end[_index] + start[_index]) / 2);

        var mid1 = [0, 0];
        var mid2 = [0, 0];
        mid1[index] = start[index];
        mid1[_index] = _mid;
        mid2[index] = end[index];
        mid2[_index] = _mid;

        this._digLine([start, mid1, mid2, end]);
      }

      room1.addDoor(start[0], start[1]);
      room2.addDoor(end[0], end[1]);
      index = this._unconnected.indexOf(room1);

      if (index != -1) {
        this._unconnected.splice(index, 1);

        this._connected.push(room1);
      }

      index = this._unconnected.indexOf(room2);

      if (index != -1) {
        this._unconnected.splice(index, 1);

        this._connected.push(room2);
      }

      return true;
    }
  }, {
    key: "_placeInWall",
    value: function _placeInWall(room, dirIndex) {
      var start = [0, 0];
      var dir = [0, 0];
      var length = 0;

      switch (dirIndex) {
        case 0:
          dir = [1, 0];
          start = [room.getLeft(), room.getTop() - 1];
          length = room.getRight() - room.getLeft() + 1;
          break;

        case 1:
          dir = [0, 1];
          start = [room.getRight() + 1, room.getTop()];
          length = room.getBottom() - room.getTop() + 1;
          break;

        case 2:
          dir = [1, 0];
          start = [room.getLeft(), room.getBottom() + 1];
          length = room.getRight() - room.getLeft() + 1;
          break;

        case 3:
          dir = [0, 1];
          start = [room.getLeft() - 1, room.getTop()];
          length = room.getBottom() - room.getTop() + 1;
          break;
      }

      var avail = [];
      var lastBadIndex = -2;

      for (var i = 0; i < length; i++) {
        var x = start[0] + i * dir[0];
        var y = start[1] + i * dir[1];
        avail.push(null);
        var isWall = this._map[x][y] == 1;

        if (isWall) {
          if (lastBadIndex != i - 1) {
            avail[i] = [x, y];
          }
        } else {
          lastBadIndex = i;

          if (i) {
            avail[i - 1] = null;
          }
        }
      }

      for (var _i = avail.length - 1; _i >= 0; _i--) {
        if (!avail[_i]) {
          avail.splice(_i, 1);
        }
      }

      return avail.length ? rng.getItem(avail) : null;
    }
    /**
     * Dig a polyline.
     */

  }, {
    key: "_digLine",
    value: function _digLine(points) {
      for (var i = 1; i < points.length; i++) {
        var start = points[i - 1];
        var end = points[i];
        var corridor = new Corridor(start[0], start[1], end[0], end[1]);
        corridor.create(this._digCallback);

        this._corridors.push(corridor);
      }
    }
  }, {
    key: "_digCallback",
    value: function _digCallback(x, y, value) {
      this._map[x][y] = value;

      if (value == 0) {
        this._dug++;
      }
    }
  }, {
    key: "_isWallCallback",
    value: function _isWallCallback(x, y) {
      if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
        return false;
      }

      return this._map[x][y] == 1;
    }
  }, {
    key: "_canBeDugCallback",
    value: function _canBeDugCallback(x, y) {
      if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
        return false;
      }

      return this._map[x][y] == 1;
    }
  }]);

  return Uniform;
}(Dungeon);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/cellular.js
function cellular_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { cellular_typeof = function _typeof(obj) { return typeof obj; }; } else { cellular_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return cellular_typeof(obj); }

function cellular_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cellular_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cellular_createClass(Constructor, protoProps, staticProps) { if (protoProps) cellular_defineProperties(Constructor.prototype, protoProps); if (staticProps) cellular_defineProperties(Constructor, staticProps); return Constructor; }

function cellular_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) cellular_setPrototypeOf(subClass, superClass); }

function cellular_setPrototypeOf(o, p) { cellular_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return cellular_setPrototypeOf(o, p); }

function cellular_createSuper(Derived) { var hasNativeReflectConstruct = cellular_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = cellular_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = cellular_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return cellular_possibleConstructorReturn(this, result); }; }

function cellular_possibleConstructorReturn(self, call) { if (call && (cellular_typeof(call) === "object" || typeof call === "function")) { return call; } return cellular_assertThisInitialized(self); }

function cellular_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function cellular_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function cellular_getPrototypeOf(o) { cellular_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return cellular_getPrototypeOf(o); }




;
/**
 * @class Cellular automaton map generator
 * @augments ROT.Map
 * @param {int} [width=ROT.DEFAULT_WIDTH]
 * @param {int} [height=ROT.DEFAULT_HEIGHT]
 * @param {object} [options] Options
 * @param {int[]} [options.born] List of neighbor counts for a new cell to be born in empty space
 * @param {int[]} [options.survive] List of neighbor counts for an existing  cell to survive
 * @param {int} [options.topology] Topology 4 or 6 or 8
 */

var Cellular = /*#__PURE__*/function (_Map) {
  cellular_inherits(Cellular, _Map);

  var _super = cellular_createSuper(Cellular);

  function Cellular(width, height) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    cellular_classCallCheck(this, Cellular);

    _this = _super.call(this, width, height);
    _this._options = {
      born: [5, 6, 7, 8],
      survive: [4, 5, 6, 7, 8],
      topology: 8
    };

    _this.setOptions(options);

    _this._dirs = DIRS[_this._options.topology];
    _this._map = _this._fillMap(0);
    return _this;
  }
  /**
   * Fill the map with random values
   * @param {float} probability Probability for a cell to become alive; 0 = all empty, 1 = all full
   */


  cellular_createClass(Cellular, [{
    key: "randomize",
    value: function randomize(probability) {
      for (var i = 0; i < this._width; i++) {
        for (var j = 0; j < this._height; j++) {
          this._map[i][j] = rng.getUniform() < probability ? 1 : 0;
        }
      }

      return this;
    }
    /**
     * Change options.
     * @see ROT.Map.Cellular
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this._options, options);
    }
  }, {
    key: "set",
    value: function set(x, y, value) {
      this._map[x][y] = value;
    }
  }, {
    key: "create",
    value: function create(callback) {
      var newMap = this._fillMap(0);

      var born = this._options.born;
      var survive = this._options.survive;

      for (var j = 0; j < this._height; j++) {
        var widthStep = 1;
        var widthStart = 0;

        if (this._options.topology == 6) {
          widthStep = 2;
          widthStart = j % 2;
        }

        for (var i = widthStart; i < this._width; i += widthStep) {
          var cur = this._map[i][j];

          var ncount = this._getNeighbors(i, j);

          if (cur && survive.indexOf(ncount) != -1) {
            /* survive */
            newMap[i][j] = 1;
          } else if (!cur && born.indexOf(ncount) != -1) {
            /* born */
            newMap[i][j] = 1;
          }
        }
      }

      this._map = newMap;
      callback && this._serviceCallback(callback);
    }
  }, {
    key: "_serviceCallback",
    value: function _serviceCallback(callback) {
      for (var j = 0; j < this._height; j++) {
        var widthStep = 1;
        var widthStart = 0;

        if (this._options.topology == 6) {
          widthStep = 2;
          widthStart = j % 2;
        }

        for (var i = widthStart; i < this._width; i += widthStep) {
          callback(i, j, this._map[i][j]);
        }
      }
    }
    /**
     * Get neighbor count at [i,j] in this._map
     */

  }, {
    key: "_getNeighbors",
    value: function _getNeighbors(cx, cy) {
      var result = 0;

      for (var i = 0; i < this._dirs.length; i++) {
        var dir = this._dirs[i];
        var x = cx + dir[0];
        var y = cy + dir[1];

        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
          continue;
        }

        result += this._map[x][y] == 1 ? 1 : 0;
      }

      return result;
    }
    /**
     * Make sure every non-wall space is accessible.
     * @param {function} callback to call to display map when do
     * @param {int} value to consider empty space - defaults to 0
     * @param {function} callback to call when a new connection is made
     */

  }, {
    key: "connect",
    value: function connect(callback, value, connectionCallback) {
      if (!value) value = 0;
      var allFreeSpace = [];
      var notConnected = {}; // find all free space

      var widthStep = 1;
      var widthStarts = [0, 0];

      if (this._options.topology == 6) {
        widthStep = 2;
        widthStarts = [0, 1];
      }

      for (var y = 0; y < this._height; y++) {
        for (var x = widthStarts[y % 2]; x < this._width; x += widthStep) {
          if (this._freeSpace(x, y, value)) {
            var p = [x, y];
            notConnected[this._pointKey(p)] = p;
            allFreeSpace.push([x, y]);
          }
        }
      }

      var start = allFreeSpace[rng.getUniformInt(0, allFreeSpace.length - 1)];

      var key = this._pointKey(start);

      var connected = {};
      connected[key] = start;
      delete notConnected[key]; // find what's connected to the starting point

      this._findConnected(connected, notConnected, [start], false, value);

      while (Object.keys(notConnected).length > 0) {
        // find two points from notConnected to connected
        var _p = this._getFromTo(connected, notConnected);

        var from = _p[0]; // notConnected

        var to = _p[1]; // connected
        // find everything connected to the starting point

        var local = {};
        local[this._pointKey(from)] = from;

        this._findConnected(local, notConnected, [from], true, value); // connect to a connected cell


        var tunnelFn = this._options.topology == 6 ? this._tunnelToConnected6 : this._tunnelToConnected;
        tunnelFn.call(this, to, from, connected, notConnected, value, connectionCallback); // now all of local is connected

        for (var k in local) {
          var pp = local[k];
          this._map[pp[0]][pp[1]] = value;
          connected[k] = pp;
          delete notConnected[k];
        }
      }

      callback && this._serviceCallback(callback);
    }
    /**
     * Find random points to connect. Search for the closest point in the larger space.
     * This is to minimize the length of the passage while maintaining good performance.
     */

  }, {
    key: "_getFromTo",
    value: function _getFromTo(connected, notConnected) {
      var from = [0, 0],
          to = [0, 0],
          d;
      var connectedKeys = Object.keys(connected);
      var notConnectedKeys = Object.keys(notConnected);

      for (var i = 0; i < 5; i++) {
        if (connectedKeys.length < notConnectedKeys.length) {
          var keys = connectedKeys;
          to = connected[keys[rng.getUniformInt(0, keys.length - 1)]];
          from = this._getClosest(to, notConnected);
        } else {
          var _keys = notConnectedKeys;
          from = notConnected[_keys[rng.getUniformInt(0, _keys.length - 1)]];
          to = this._getClosest(from, connected);
        }

        d = (from[0] - to[0]) * (from[0] - to[0]) + (from[1] - to[1]) * (from[1] - to[1]);

        if (d < 64) {
          break;
        }
      } // console.log(">>> connected=" + to + " notConnected=" + from + " dist=" + d);


      return [from, to];
    }
  }, {
    key: "_getClosest",
    value: function _getClosest(point, space) {
      var minPoint = null;
      var minDist = null;

      for (var k in space) {
        var p = space[k];
        var d = (p[0] - point[0]) * (p[0] - point[0]) + (p[1] - point[1]) * (p[1] - point[1]);

        if (minDist == null || d < minDist) {
          minDist = d;
          minPoint = p;
        }
      }

      return minPoint;
    }
  }, {
    key: "_findConnected",
    value: function _findConnected(connected, notConnected, stack, keepNotConnected, value) {
      while (stack.length > 0) {
        var p = stack.splice(0, 1)[0];
        var tests = void 0;

        if (this._options.topology == 6) {
          tests = [[p[0] + 2, p[1]], [p[0] + 1, p[1] - 1], [p[0] - 1, p[1] - 1], [p[0] - 2, p[1]], [p[0] - 1, p[1] + 1], [p[0] + 1, p[1] + 1]];
        } else {
          tests = [[p[0] + 1, p[1]], [p[0] - 1, p[1]], [p[0], p[1] + 1], [p[0], p[1] - 1]];
        }

        for (var i = 0; i < tests.length; i++) {
          var key = this._pointKey(tests[i]);

          if (connected[key] == null && this._freeSpace(tests[i][0], tests[i][1], value)) {
            connected[key] = tests[i];

            if (!keepNotConnected) {
              delete notConnected[key];
            }

            stack.push(tests[i]);
          }
        }
      }
    }
  }, {
    key: "_tunnelToConnected",
    value: function _tunnelToConnected(to, from, connected, notConnected, value, connectionCallback) {
      var a, b;

      if (from[0] < to[0]) {
        a = from;
        b = to;
      } else {
        a = to;
        b = from;
      }

      for (var xx = a[0]; xx <= b[0]; xx++) {
        this._map[xx][a[1]] = value;
        var p = [xx, a[1]];

        var pkey = this._pointKey(p);

        connected[pkey] = p;
        delete notConnected[pkey];
      }

      if (connectionCallback && a[0] < b[0]) {
        connectionCallback(a, [b[0], a[1]]);
      } // x is now fixed


      var x = b[0];

      if (from[1] < to[1]) {
        a = from;
        b = to;
      } else {
        a = to;
        b = from;
      }

      for (var yy = a[1]; yy < b[1]; yy++) {
        this._map[x][yy] = value;
        var _p2 = [x, yy];

        var _pkey = this._pointKey(_p2);

        connected[_pkey] = _p2;
        delete notConnected[_pkey];
      }

      if (connectionCallback && a[1] < b[1]) {
        connectionCallback([b[0], a[1]], [b[0], b[1]]);
      }
    }
  }, {
    key: "_tunnelToConnected6",
    value: function _tunnelToConnected6(to, from, connected, notConnected, value, connectionCallback) {
      var a, b;

      if (from[0] < to[0]) {
        a = from;
        b = to;
      } else {
        a = to;
        b = from;
      } // tunnel diagonally until horizontally level


      var xx = a[0];
      var yy = a[1];

      while (!(xx == b[0] && yy == b[1])) {
        var stepWidth = 2;

        if (yy < b[1]) {
          yy++;
          stepWidth = 1;
        } else if (yy > b[1]) {
          yy--;
          stepWidth = 1;
        }

        if (xx < b[0]) {
          xx += stepWidth;
        } else if (xx > b[0]) {
          xx -= stepWidth;
        } else if (b[1] % 2) {
          // Won't step outside map if destination on is map's right edge
          xx -= stepWidth;
        } else {
          // ditto for left edge
          xx += stepWidth;
        }

        this._map[xx][yy] = value;
        var p = [xx, yy];

        var pkey = this._pointKey(p);

        connected[pkey] = p;
        delete notConnected[pkey];
      }

      if (connectionCallback) {
        connectionCallback(from, to);
      }
    }
  }, {
    key: "_freeSpace",
    value: function _freeSpace(x, y, value) {
      return x >= 0 && x < this._width && y >= 0 && y < this._height && this._map[x][y] == value;
    }
  }, {
    key: "_pointKey",
    value: function _pointKey(p) {
      return p[0] + "." + p[1];
    }
  }]);

  return Cellular;
}(map_Map);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/digger.js
function digger_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { digger_typeof = function _typeof(obj) { return typeof obj; }; } else { digger_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return digger_typeof(obj); }

function digger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function digger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function digger_createClass(Constructor, protoProps, staticProps) { if (protoProps) digger_defineProperties(Constructor.prototype, protoProps); if (staticProps) digger_defineProperties(Constructor, staticProps); return Constructor; }

function digger_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) digger_setPrototypeOf(subClass, superClass); }

function digger_setPrototypeOf(o, p) { digger_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return digger_setPrototypeOf(o, p); }

function digger_createSuper(Derived) { var hasNativeReflectConstruct = digger_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = digger_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = digger_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return digger_possibleConstructorReturn(this, result); }; }

function digger_possibleConstructorReturn(self, call) { if (call && (digger_typeof(call) === "object" || typeof call === "function")) { return call; } return digger_assertThisInitialized(self); }

function digger_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function digger_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function digger_getPrototypeOf(o) { digger_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return digger_getPrototypeOf(o); }





var FEATURES = {
  "room": Room,
  "corridor": Corridor
};
/**
 * Random dungeon generator using human-like digging patterns.
 * Heavily based on Mike Anderson's ideas from the "Tyrant" algo, mentioned at
 * http://www.roguebasin.roguelikedevelopment.org/index.php?title=Dungeon-Building_Algorithm.
 */

var Digger = /*#__PURE__*/function (_Dungeon) {
  digger_inherits(Digger, _Dungeon);

  var _super = digger_createSuper(Digger);

  function Digger(width, height) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    digger_classCallCheck(this, Digger);

    _this = _super.call(this, width, height);
    _this._options = Object.assign({
      roomWidth: [3, 9],
      roomHeight: [3, 5],
      corridorLength: [3, 10],
      dugPercentage: 0.2,
      timeLimit: 1000
      /* we stop after this much time has passed (msec) */

    }, options);
    _this._features = {
      "room": 4,
      "corridor": 4
    };
    _this._map = [];
    _this._featureAttempts = 20;
    /* how many times do we try to create a feature on a suitable wall */

    _this._walls = {};
    /* these are available for digging */

    _this._dug = 0;
    _this._digCallback = _this._digCallback.bind(digger_assertThisInitialized(_this));
    _this._canBeDugCallback = _this._canBeDugCallback.bind(digger_assertThisInitialized(_this));
    _this._isWallCallback = _this._isWallCallback.bind(digger_assertThisInitialized(_this));
    _this._priorityWallCallback = _this._priorityWallCallback.bind(digger_assertThisInitialized(_this));
    return _this;
  }

  digger_createClass(Digger, [{
    key: "create",
    value: function create(callback) {
      this._rooms = [];
      this._corridors = [];
      this._map = this._fillMap(1);
      this._walls = {};
      this._dug = 0;
      var area = (this._width - 2) * (this._height - 2);

      this._firstRoom();

      var t1 = Date.now();
      var priorityWalls;

      do {
        priorityWalls = 0;
        var t2 = Date.now();

        if (t2 - t1 > this._options.timeLimit) {
          break;
        }
        /* find a good wall */


        var wall = this._findWall();

        if (!wall) {
          break;
        }
        /* no more walls */


        var parts = wall.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);

        var dir = this._getDiggingDirection(x, y);

        if (!dir) {
          continue;
        }
        /* this wall is not suitable */
        //		console.log("wall", x, y);

        /* try adding a feature */


        var featureAttempts = 0;

        do {
          featureAttempts++;

          if (this._tryFeature(x, y, dir[0], dir[1])) {
            /* feature added */
            //if (this._rooms.length + this._corridors.length == 2) { this._rooms[0].addDoor(x, y); } /* first room oficially has doors */
            this._removeSurroundingWalls(x, y);

            this._removeSurroundingWalls(x - dir[0], y - dir[1]);

            break;
          }
        } while (featureAttempts < this._featureAttempts);

        for (var id in this._walls) {
          if (this._walls[id] > 1) {
            priorityWalls++;
          }
        }
      } while (this._dug / area < this._options.dugPercentage || priorityWalls);
      /* fixme number of priority walls */


      this._addDoors();

      if (callback) {
        for (var i = 0; i < this._width; i++) {
          for (var j = 0; j < this._height; j++) {
            callback(i, j, this._map[i][j]);
          }
        }
      }

      this._walls = {};
      this._map = [];
      return this;
    }
  }, {
    key: "_digCallback",
    value: function _digCallback(x, y, value) {
      if (value == 0 || value == 2) {
        /* empty */
        this._map[x][y] = 0;
        this._dug++;
      } else {
        /* wall */
        this._walls[x + "," + y] = 1;
      }
    }
  }, {
    key: "_isWallCallback",
    value: function _isWallCallback(x, y) {
      if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
        return false;
      }

      return this._map[x][y] == 1;
    }
  }, {
    key: "_canBeDugCallback",
    value: function _canBeDugCallback(x, y) {
      if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
        return false;
      }

      return this._map[x][y] == 1;
    }
  }, {
    key: "_priorityWallCallback",
    value: function _priorityWallCallback(x, y) {
      this._walls[x + "," + y] = 2;
    }
  }, {
    key: "_firstRoom",
    value: function _firstRoom() {
      var cx = Math.floor(this._width / 2);
      var cy = Math.floor(this._height / 2);
      var room = Room.createRandomCenter(cx, cy, this._options);

      this._rooms.push(room);

      room.create(this._digCallback);
    }
    /**
     * Get a suitable wall
     */

  }, {
    key: "_findWall",
    value: function _findWall() {
      var prio1 = [];
      var prio2 = [];

      for (var _id in this._walls) {
        var prio = this._walls[_id];

        if (prio == 2) {
          prio2.push(_id);
        } else {
          prio1.push(_id);
        }
      }

      var arr = prio2.length ? prio2 : prio1;

      if (!arr.length) {
        return null;
      }
      /* no walls :/ */


      var id = rng.getItem(arr.sort()); // sort to make the order deterministic

      delete this._walls[id];
      return id;
    }
    /**
     * Tries adding a feature
     * @returns {bool} was this a successful try?
     */

  }, {
    key: "_tryFeature",
    value: function _tryFeature(x, y, dx, dy) {
      var featureName = rng.getWeightedValue(this._features);
      var ctor = FEATURES[featureName];
      var feature = ctor.createRandomAt(x, y, dx, dy, this._options);

      if (!feature.isValid(this._isWallCallback, this._canBeDugCallback)) {
        //		console.log("not valid");
        //		feature.debug();
        return false;
      }

      feature.create(this._digCallback); //	feature.debug();

      if (feature instanceof Room) {
        this._rooms.push(feature);
      }

      if (feature instanceof Corridor) {
        feature.createPriorityWalls(this._priorityWallCallback);

        this._corridors.push(feature);
      }

      return true;
    }
  }, {
    key: "_removeSurroundingWalls",
    value: function _removeSurroundingWalls(cx, cy) {
      var deltas = DIRS[4];

      for (var i = 0; i < deltas.length; i++) {
        var delta = deltas[i];
        var x = cx + delta[0];
        var y = cy + delta[1];
        delete this._walls[x + "," + y];
        x = cx + 2 * delta[0];
        y = cy + 2 * delta[1];
        delete this._walls[x + "," + y];
      }
    }
    /**
     * Returns vector in "digging" direction, or false, if this does not exist (or is not unique)
     */

  }, {
    key: "_getDiggingDirection",
    value: function _getDiggingDirection(cx, cy) {
      if (cx <= 0 || cy <= 0 || cx >= this._width - 1 || cy >= this._height - 1) {
        return null;
      }

      var result = null;
      var deltas = DIRS[4];

      for (var i = 0; i < deltas.length; i++) {
        var delta = deltas[i];
        var x = cx + delta[0];
        var y = cy + delta[1];

        if (!this._map[x][y]) {
          /* there already is another empty neighbor! */
          if (result) {
            return null;
          }

          result = delta;
        }
      }
      /* no empty neighbor */


      if (!result) {
        return null;
      }

      return [-result[0], -result[1]];
    }
    /**
     * Find empty spaces surrounding rooms, and apply doors.
     */

  }, {
    key: "_addDoors",
    value: function _addDoors() {
      var data = this._map;

      function isWallCallback(x, y) {
        return data[x][y] == 1;
      }

      ;

      for (var i = 0; i < this._rooms.length; i++) {
        var room = this._rooms[i];
        room.clearDoors();
        room.addDoors(isWallCallback);
      }
    }
  }]);

  return Digger;
}(Dungeon);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/ellermaze.js
function ellermaze_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ellermaze_typeof = function _typeof(obj) { return typeof obj; }; } else { ellermaze_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ellermaze_typeof(obj); }

function ellermaze_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ellermaze_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ellermaze_createClass(Constructor, protoProps, staticProps) { if (protoProps) ellermaze_defineProperties(Constructor.prototype, protoProps); if (staticProps) ellermaze_defineProperties(Constructor, staticProps); return Constructor; }

function ellermaze_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ellermaze_setPrototypeOf(subClass, superClass); }

function ellermaze_setPrototypeOf(o, p) { ellermaze_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ellermaze_setPrototypeOf(o, p); }

function ellermaze_createSuper(Derived) { var hasNativeReflectConstruct = ellermaze_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ellermaze_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ellermaze_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ellermaze_possibleConstructorReturn(this, result); }; }

function ellermaze_possibleConstructorReturn(self, call) { if (call && (ellermaze_typeof(call) === "object" || typeof call === "function")) { return call; } return ellermaze_assertThisInitialized(self); }

function ellermaze_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ellermaze_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ellermaze_getPrototypeOf(o) { ellermaze_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ellermaze_getPrototypeOf(o); }



/**
 * Join lists with "i" and "i+1"
 */

function addToList(i, L, R) {
  R[L[i + 1]] = R[i];
  L[R[i]] = L[i + 1];
  R[i] = i + 1;
  L[i + 1] = i;
}
/**
 * Remove "i" from its list
 */


function removeFromList(i, L, R) {
  R[L[i]] = R[i];
  L[R[i]] = L[i];
  R[i] = i;
  L[i] = i;
}
/**
 * Maze generator - Eller's algorithm
 * See http://homepages.cwi.nl/~tromp/maze.html for explanation
 */


var EllerMaze = /*#__PURE__*/function (_Map) {
  ellermaze_inherits(EllerMaze, _Map);

  var _super = ellermaze_createSuper(EllerMaze);

  function EllerMaze() {
    ellermaze_classCallCheck(this, EllerMaze);

    return _super.apply(this, arguments);
  }

  ellermaze_createClass(EllerMaze, [{
    key: "create",
    value: function create(callback) {
      var map = this._fillMap(1);

      var w = Math.ceil((this._width - 2) / 2);
      var rand = 9 / 24;
      var L = [];
      var R = [];

      for (var i = 0; i < w; i++) {
        L.push(i);
        R.push(i);
      }

      L.push(w - 1);
      /* fake stop-block at the right side */

      var j;

      for (j = 1; j + 3 < this._height; j += 2) {
        /* one row */
        for (var _i = 0; _i < w; _i++) {
          /* cell coords (will be always empty) */
          var x = 2 * _i + 1;
          var y = j;
          map[x][y] = 0;
          /* right connection */

          if (_i != L[_i + 1] && rng.getUniform() > rand) {
            addToList(_i, L, R);
            map[x + 1][y] = 0;
          }
          /* bottom connection */


          if (_i != L[_i] && rng.getUniform() > rand) {
            /* remove connection */
            removeFromList(_i, L, R);
          } else {
            /* create connection */
            map[x][y + 1] = 0;
          }
        }
      }
      /* last row */


      for (var _i2 = 0; _i2 < w; _i2++) {
        /* cell coords (will be always empty) */
        var _x = 2 * _i2 + 1;

        var _y = j;
        map[_x][_y] = 0;
        /* right connection */

        if (_i2 != L[_i2 + 1] && (_i2 == L[_i2] || rng.getUniform() > rand)) {
          /* dig right also if the cell is separated, so it gets connected to the rest of maze */
          addToList(_i2, L, R);
          map[_x + 1][_y] = 0;
        }

        removeFromList(_i2, L, R);
      }

      for (var _i3 = 0; _i3 < this._width; _i3++) {
        for (var _j = 0; _j < this._height; _j++) {
          callback(_i3, _j, map[_i3][_j]);
        }
      }

      return this;
    }
  }]);

  return EllerMaze;
}(map_Map);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/dividedmaze.js
function dividedmaze_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dividedmaze_typeof = function _typeof(obj) { return typeof obj; }; } else { dividedmaze_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dividedmaze_typeof(obj); }

function dividedmaze_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dividedmaze_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dividedmaze_createClass(Constructor, protoProps, staticProps) { if (protoProps) dividedmaze_defineProperties(Constructor.prototype, protoProps); if (staticProps) dividedmaze_defineProperties(Constructor, staticProps); return Constructor; }

function dividedmaze_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dividedmaze_setPrototypeOf(subClass, superClass); }

function dividedmaze_setPrototypeOf(o, p) { dividedmaze_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dividedmaze_setPrototypeOf(o, p); }

function dividedmaze_createSuper(Derived) { var hasNativeReflectConstruct = dividedmaze_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dividedmaze_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dividedmaze_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dividedmaze_possibleConstructorReturn(this, result); }; }

function dividedmaze_possibleConstructorReturn(self, call) { if (call && (dividedmaze_typeof(call) === "object" || typeof call === "function")) { return call; } return dividedmaze_assertThisInitialized(self); }

function dividedmaze_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dividedmaze_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function dividedmaze_getPrototypeOf(o) { dividedmaze_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dividedmaze_getPrototypeOf(o); }



/**
 * @class Recursively divided maze, http://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method
 * @augments ROT.Map
 */

var DividedMaze = /*#__PURE__*/function (_Map) {
  dividedmaze_inherits(DividedMaze, _Map);

  var _super = dividedmaze_createSuper(DividedMaze);

  function DividedMaze() {
    var _this;

    dividedmaze_classCallCheck(this, DividedMaze);

    _this = _super.apply(this, arguments);
    _this._stack = [];
    _this._map = [];
    return _this;
  }

  dividedmaze_createClass(DividedMaze, [{
    key: "create",
    value: function create(callback) {
      var w = this._width;
      var h = this._height;
      this._map = [];

      for (var i = 0; i < w; i++) {
        this._map.push([]);

        for (var j = 0; j < h; j++) {
          var border = i == 0 || j == 0 || i + 1 == w || j + 1 == h;

          this._map[i].push(border ? 1 : 0);
        }
      }

      this._stack = [[1, 1, w - 2, h - 2]];

      this._process();

      for (var _i = 0; _i < w; _i++) {
        for (var _j = 0; _j < h; _j++) {
          callback(_i, _j, this._map[_i][_j]);
        }
      }

      this._map = [];
      return this;
    }
  }, {
    key: "_process",
    value: function _process() {
      while (this._stack.length) {
        var room = this._stack.shift();
        /* [left, top, right, bottom] */


        this._partitionRoom(room);
      }
    }
  }, {
    key: "_partitionRoom",
    value: function _partitionRoom(room) {
      var availX = [];
      var availY = [];

      for (var i = room[0] + 1; i < room[2]; i++) {
        var top = this._map[i][room[1] - 1];
        var bottom = this._map[i][room[3] + 1];

        if (top && bottom && !(i % 2)) {
          availX.push(i);
        }
      }

      for (var j = room[1] + 1; j < room[3]; j++) {
        var left = this._map[room[0] - 1][j];
        var right = this._map[room[2] + 1][j];

        if (left && right && !(j % 2)) {
          availY.push(j);
        }
      }

      if (!availX.length || !availY.length) {
        return;
      }

      var x = rng.getItem(availX);
      var y = rng.getItem(availY);
      this._map[x][y] = 1;
      var walls = [];
      var w = [];
      walls.push(w);
      /* left part */

      for (var _i2 = room[0]; _i2 < x; _i2++) {
        this._map[_i2][y] = 1;
        if (_i2 % 2) w.push([_i2, y]);
      }

      w = [];
      walls.push(w);
      /* right part */

      for (var _i3 = x + 1; _i3 <= room[2]; _i3++) {
        this._map[_i3][y] = 1;
        if (_i3 % 2) w.push([_i3, y]);
      }

      w = [];
      walls.push(w);
      /* top part */

      for (var _j2 = room[1]; _j2 < y; _j2++) {
        this._map[x][_j2] = 1;
        if (_j2 % 2) w.push([x, _j2]);
      }

      w = [];
      walls.push(w);
      /* bottom part */

      for (var _j3 = y + 1; _j3 <= room[3]; _j3++) {
        this._map[x][_j3] = 1;
        if (_j3 % 2) w.push([x, _j3]);
      }

      var solid = rng.getItem(walls);

      for (var _i4 = 0; _i4 < walls.length; _i4++) {
        var _w = walls[_i4];

        if (_w == solid) {
          continue;
        }

        var hole = rng.getItem(_w);
        this._map[hole[0]][hole[1]] = 0;
      }

      this._stack.push([room[0], room[1], x - 1, y - 1]);
      /* left top */


      this._stack.push([x + 1, room[1], room[2], y - 1]);
      /* right top */


      this._stack.push([room[0], y + 1, x - 1, room[3]]);
      /* left bottom */


      this._stack.push([x + 1, y + 1, room[2], room[3]]);
      /* right bottom */

    }
  }]);

  return DividedMaze;
}(map_Map);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/iceymaze.js
function iceymaze_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { iceymaze_typeof = function _typeof(obj) { return typeof obj; }; } else { iceymaze_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return iceymaze_typeof(obj); }

function iceymaze_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function iceymaze_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function iceymaze_createClass(Constructor, protoProps, staticProps) { if (protoProps) iceymaze_defineProperties(Constructor.prototype, protoProps); if (staticProps) iceymaze_defineProperties(Constructor, staticProps); return Constructor; }

function iceymaze_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) iceymaze_setPrototypeOf(subClass, superClass); }

function iceymaze_setPrototypeOf(o, p) { iceymaze_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return iceymaze_setPrototypeOf(o, p); }

function iceymaze_createSuper(Derived) { var hasNativeReflectConstruct = iceymaze_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = iceymaze_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = iceymaze_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return iceymaze_possibleConstructorReturn(this, result); }; }

function iceymaze_possibleConstructorReturn(self, call) { if (call && (iceymaze_typeof(call) === "object" || typeof call === "function")) { return call; } return iceymaze_assertThisInitialized(self); }

function iceymaze_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function iceymaze_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function iceymaze_getPrototypeOf(o) { iceymaze_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return iceymaze_getPrototypeOf(o); }



/**
 * Icey's Maze generator
 * See http://www.roguebasin.roguelikedevelopment.org/index.php?title=Simple_maze for explanation
 */

var IceyMaze = /*#__PURE__*/function (_Map) {
  iceymaze_inherits(IceyMaze, _Map);

  var _super = iceymaze_createSuper(IceyMaze);

  function IceyMaze(width, height) {
    var _this;

    var regularity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    iceymaze_classCallCheck(this, IceyMaze);

    _this = _super.call(this, width, height);
    _this._regularity = regularity;
    _this._map = [];
    return _this;
  }

  iceymaze_createClass(IceyMaze, [{
    key: "create",
    value: function create(callback) {
      var width = this._width;
      var height = this._height;

      var map = this._fillMap(1);

      width -= width % 2 ? 1 : 2;
      height -= height % 2 ? 1 : 2;
      var cx = 0;
      var cy = 0;
      var nx = 0;
      var ny = 0;
      var done = 0;
      var blocked = false;
      var dirs = [[0, 0], [0, 0], [0, 0], [0, 0]];

      do {
        cx = 1 + 2 * Math.floor(rng.getUniform() * (width - 1) / 2);
        cy = 1 + 2 * Math.floor(rng.getUniform() * (height - 1) / 2);

        if (!done) {
          map[cx][cy] = 0;
        }

        if (!map[cx][cy]) {
          this._randomize(dirs);

          do {
            if (Math.floor(rng.getUniform() * (this._regularity + 1)) == 0) {
              this._randomize(dirs);
            }

            blocked = true;

            for (var i = 0; i < 4; i++) {
              nx = cx + dirs[i][0] * 2;
              ny = cy + dirs[i][1] * 2;

              if (this._isFree(map, nx, ny, width, height)) {
                map[nx][ny] = 0;
                map[cx + dirs[i][0]][cy + dirs[i][1]] = 0;
                cx = nx;
                cy = ny;
                blocked = false;
                done++;
                break;
              }
            }
          } while (!blocked);
        }
      } while (done + 1 < width * height / 4);

      for (var _i = 0; _i < this._width; _i++) {
        for (var j = 0; j < this._height; j++) {
          callback(_i, j, map[_i][j]);
        }
      }

      this._map = [];
      return this;
    }
  }, {
    key: "_randomize",
    value: function _randomize(dirs) {
      for (var i = 0; i < 4; i++) {
        dirs[i][0] = 0;
        dirs[i][1] = 0;
      }

      switch (Math.floor(rng.getUniform() * 4)) {
        case 0:
          dirs[0][0] = -1;
          dirs[1][0] = 1;
          dirs[2][1] = -1;
          dirs[3][1] = 1;
          break;

        case 1:
          dirs[3][0] = -1;
          dirs[2][0] = 1;
          dirs[1][1] = -1;
          dirs[0][1] = 1;
          break;

        case 2:
          dirs[2][0] = -1;
          dirs[3][0] = 1;
          dirs[0][1] = -1;
          dirs[1][1] = 1;
          break;

        case 3:
          dirs[1][0] = -1;
          dirs[0][0] = 1;
          dirs[3][1] = -1;
          dirs[2][1] = 1;
          break;
      }
    }
  }, {
    key: "_isFree",
    value: function _isFree(map, x, y, width, height) {
      if (x < 1 || y < 1 || x >= width || y >= height) {
        return false;
      }

      return map[x][y];
    }
  }]);

  return IceyMaze;
}(map_Map);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/rogue.js
function rogue_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { rogue_typeof = function _typeof(obj) { return typeof obj; }; } else { rogue_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return rogue_typeof(obj); }

function rogue_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rogue_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rogue_createClass(Constructor, protoProps, staticProps) { if (protoProps) rogue_defineProperties(Constructor.prototype, protoProps); if (staticProps) rogue_defineProperties(Constructor, staticProps); return Constructor; }

function rogue_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) rogue_setPrototypeOf(subClass, superClass); }

function rogue_setPrototypeOf(o, p) { rogue_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return rogue_setPrototypeOf(o, p); }

function rogue_createSuper(Derived) { var hasNativeReflectConstruct = rogue_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = rogue_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = rogue_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return rogue_possibleConstructorReturn(this, result); }; }

function rogue_possibleConstructorReturn(self, call) { if (call && (rogue_typeof(call) === "object" || typeof call === "function")) { return call; } return rogue_assertThisInitialized(self); }

function rogue_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function rogue_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function rogue_getPrototypeOf(o) { rogue_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return rogue_getPrototypeOf(o); }




/**
 * Dungeon generator which uses the "orginal" Rogue dungeon generation algorithm. See http://kuoi.com/~kamikaze/GameDesign/art07_rogue_dungeon.php
 * @author hyakugei
 */

var Rogue = /*#__PURE__*/function (_Map) {
  rogue_inherits(Rogue, _Map);

  var _super = rogue_createSuper(Rogue);

  function Rogue(width, height, options) {
    var _this;

    rogue_classCallCheck(this, Rogue);

    _this = _super.call(this, width, height);
    _this.map = [];
    _this.rooms = [];
    _this.connectedCells = [];
    options = Object.assign({
      cellWidth: 3,
      cellHeight: 3 //     ie. as an array with min-max values for each direction....

    }, options);
    /*
    Set the room sizes according to the over-all width of the map,
    and the cell sizes.
    */

    if (!options.hasOwnProperty("roomWidth")) {
      options["roomWidth"] = _this._calculateRoomSize(_this._width, options["cellWidth"]);
    }

    if (!options.hasOwnProperty("roomHeight")) {
      options["roomHeight"] = _this._calculateRoomSize(_this._height, options["cellHeight"]);
    }

    _this._options = options;
    return _this;
  }

  rogue_createClass(Rogue, [{
    key: "create",
    value: function create(callback) {
      this.map = this._fillMap(1);
      this.rooms = [];
      this.connectedCells = [];

      this._initRooms();

      this._connectRooms();

      this._connectUnconnectedRooms();

      this._createRandomRoomConnections();

      this._createRooms();

      this._createCorridors();

      if (callback) {
        for (var i = 0; i < this._width; i++) {
          for (var j = 0; j < this._height; j++) {
            callback(i, j, this.map[i][j]);
          }
        }
      }

      return this;
    }
  }, {
    key: "_calculateRoomSize",
    value: function _calculateRoomSize(size, cell) {
      var max = Math.floor(size / cell * 0.8);
      var min = Math.floor(size / cell * 0.25);

      if (min < 2) {
        min = 2;
      }

      if (max < 2) {
        max = 2;
      }

      return [min, max];
    }
  }, {
    key: "_initRooms",
    value: function _initRooms() {
      // create rooms array. This is the "grid" list from the algo.
      for (var i = 0; i < this._options.cellWidth; i++) {
        this.rooms.push([]);

        for (var j = 0; j < this._options.cellHeight; j++) {
          this.rooms[i].push({
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "connections": [],
            "cellx": i,
            "celly": j
          });
        }
      }
    }
  }, {
    key: "_connectRooms",
    value: function _connectRooms() {
      //pick random starting grid
      var cgx = rng.getUniformInt(0, this._options.cellWidth - 1);
      var cgy = rng.getUniformInt(0, this._options.cellHeight - 1);
      var idx;
      var ncgx;
      var ncgy;
      var found = false;
      var room;
      var otherRoom;
      var dirToCheck; // find  unconnected neighbour cells

      do {
        //dirToCheck = [0, 1, 2, 3, 4, 5, 6, 7];
        dirToCheck = [0, 2, 4, 6];
        dirToCheck = rng.shuffle(dirToCheck);

        do {
          found = false;
          idx = dirToCheck.pop();
          ncgx = cgx + DIRS[8][idx][0];
          ncgy = cgy + DIRS[8][idx][1];

          if (ncgx < 0 || ncgx >= this._options.cellWidth) {
            continue;
          }

          if (ncgy < 0 || ncgy >= this._options.cellHeight) {
            continue;
          }

          room = this.rooms[cgx][cgy];

          if (room["connections"].length > 0) {
            // as long as this room doesn't already coonect to me, we are ok with it.
            if (room["connections"][0][0] == ncgx && room["connections"][0][1] == ncgy) {
              break;
            }
          }

          otherRoom = this.rooms[ncgx][ncgy];

          if (otherRoom["connections"].length == 0) {
            otherRoom["connections"].push([cgx, cgy]);
            this.connectedCells.push([ncgx, ncgy]);
            cgx = ncgx;
            cgy = ncgy;
            found = true;
          }
        } while (dirToCheck.length > 0 && found == false);
      } while (dirToCheck.length > 0);
    }
  }, {
    key: "_connectUnconnectedRooms",
    value: function _connectUnconnectedRooms() {
      //While there are unconnected rooms, try to connect them to a random connected neighbor
      //(if a room has no connected neighbors yet, just keep cycling, you'll fill out to it eventually).
      var cw = this._options.cellWidth;
      var ch = this._options.cellHeight;
      this.connectedCells = rng.shuffle(this.connectedCells);
      var room;
      var otherRoom;
      var validRoom;

      for (var i = 0; i < this._options.cellWidth; i++) {
        for (var j = 0; j < this._options.cellHeight; j++) {
          room = this.rooms[i][j];

          if (room["connections"].length == 0) {
            var directions = [0, 2, 4, 6];
            directions = rng.shuffle(directions);
            validRoom = false;

            do {
              var dirIdx = directions.pop();
              var newI = i + DIRS[8][dirIdx][0];
              var newJ = j + DIRS[8][dirIdx][1];

              if (newI < 0 || newI >= cw || newJ < 0 || newJ >= ch) {
                continue;
              }

              otherRoom = this.rooms[newI][newJ];
              validRoom = true;

              if (otherRoom["connections"].length == 0) {
                break;
              }

              for (var k = 0; k < otherRoom["connections"].length; k++) {
                if (otherRoom["connections"][k][0] == i && otherRoom["connections"][k][1] == j) {
                  validRoom = false;
                  break;
                }
              }

              if (validRoom) {
                break;
              }
            } while (directions.length);

            if (validRoom) {
              room["connections"].push([otherRoom["cellx"], otherRoom["celly"]]);
            } else {
              console.log("-- Unable to connect room.");
            }
          }
        }
      }
    }
  }, {
    key: "_createRandomRoomConnections",
    value: function _createRandomRoomConnections() {// Empty for now.
    }
  }, {
    key: "_createRooms",
    value: function _createRooms() {
      var w = this._width;
      var h = this._height;
      var cw = this._options.cellWidth;
      var ch = this._options.cellHeight;
      var cwp = Math.floor(this._width / cw);
      var chp = Math.floor(this._height / ch);
      var roomw;
      var roomh;
      var roomWidth = this._options["roomWidth"];
      var roomHeight = this._options["roomHeight"];
      var sx;
      var sy;
      var otherRoom;

      for (var i = 0; i < cw; i++) {
        for (var j = 0; j < ch; j++) {
          sx = cwp * i;
          sy = chp * j;

          if (sx == 0) {
            sx = 1;
          }

          if (sy == 0) {
            sy = 1;
          }

          roomw = rng.getUniformInt(roomWidth[0], roomWidth[1]);
          roomh = rng.getUniformInt(roomHeight[0], roomHeight[1]);

          if (j > 0) {
            otherRoom = this.rooms[i][j - 1];

            while (sy - (otherRoom["y"] + otherRoom["height"]) < 3) {
              sy++;
            }
          }

          if (i > 0) {
            otherRoom = this.rooms[i - 1][j];

            while (sx - (otherRoom["x"] + otherRoom["width"]) < 3) {
              sx++;
            }
          }

          var sxOffset = Math.round(rng.getUniformInt(0, cwp - roomw) / 2);
          var syOffset = Math.round(rng.getUniformInt(0, chp - roomh) / 2);

          while (sx + sxOffset + roomw >= w) {
            if (sxOffset) {
              sxOffset--;
            } else {
              roomw--;
            }
          }

          while (sy + syOffset + roomh >= h) {
            if (syOffset) {
              syOffset--;
            } else {
              roomh--;
            }
          }

          sx = sx + sxOffset;
          sy = sy + syOffset;
          this.rooms[i][j]["x"] = sx;
          this.rooms[i][j]["y"] = sy;
          this.rooms[i][j]["width"] = roomw;
          this.rooms[i][j]["height"] = roomh;

          for (var ii = sx; ii < sx + roomw; ii++) {
            for (var jj = sy; jj < sy + roomh; jj++) {
              this.map[ii][jj] = 0;
            }
          }
        }
      }
    }
  }, {
    key: "_getWallPosition",
    value: function _getWallPosition(aRoom, aDirection) {
      var rx;
      var ry;
      var door;

      if (aDirection == 1 || aDirection == 3) {
        rx = rng.getUniformInt(aRoom["x"] + 1, aRoom["x"] + aRoom["width"] - 2);

        if (aDirection == 1) {
          ry = aRoom["y"] - 2;
          door = ry + 1;
        } else {
          ry = aRoom["y"] + aRoom["height"] + 1;
          door = ry - 1;
        }

        this.map[rx][door] = 0; // i'm not setting a specific 'door' tile value right now, just empty space.
      } else {
        ry = rng.getUniformInt(aRoom["y"] + 1, aRoom["y"] + aRoom["height"] - 2);

        if (aDirection == 2) {
          rx = aRoom["x"] + aRoom["width"] + 1;
          door = rx - 1;
        } else {
          rx = aRoom["x"] - 2;
          door = rx + 1;
        }

        this.map[door][ry] = 0; // i'm not setting a specific 'door' tile value right now, just empty space.
      }

      return [rx, ry];
    }
  }, {
    key: "_drawCorridor",
    value: function _drawCorridor(startPosition, endPosition) {
      var xOffset = endPosition[0] - startPosition[0];
      var yOffset = endPosition[1] - startPosition[1];
      var xpos = startPosition[0];
      var ypos = startPosition[1];
      var tempDist;
      var xDir;
      var yDir;
      var move; // 2 element array, element 0 is the direction, element 1 is the total value to move.

      var moves = []; // a list of 2 element arrays

      var xAbs = Math.abs(xOffset);
      var yAbs = Math.abs(yOffset);
      var percent = rng.getUniform(); // used to split the move at different places along the long axis

      var firstHalf = percent;
      var secondHalf = 1 - percent;
      xDir = xOffset > 0 ? 2 : 6;
      yDir = yOffset > 0 ? 4 : 0;

      if (xAbs < yAbs) {
        // move firstHalf of the y offset
        tempDist = Math.ceil(yAbs * firstHalf);
        moves.push([yDir, tempDist]); // move all the x offset

        moves.push([xDir, xAbs]); // move sendHalf of the  y offset

        tempDist = Math.floor(yAbs * secondHalf);
        moves.push([yDir, tempDist]);
      } else {
        //  move firstHalf of the x offset
        tempDist = Math.ceil(xAbs * firstHalf);
        moves.push([xDir, tempDist]); // move all the y offset

        moves.push([yDir, yAbs]); // move secondHalf of the x offset.

        tempDist = Math.floor(xAbs * secondHalf);
        moves.push([xDir, tempDist]);
      }

      this.map[xpos][ypos] = 0;

      while (moves.length > 0) {
        move = moves.pop();

        while (move[1] > 0) {
          xpos += DIRS[8][move[0]][0];
          ypos += DIRS[8][move[0]][1];
          this.map[xpos][ypos] = 0;
          move[1] = move[1] - 1;
        }
      }
    }
  }, {
    key: "_createCorridors",
    value: function _createCorridors() {
      // Draw Corridors between connected rooms
      var cw = this._options.cellWidth;
      var ch = this._options.cellHeight;
      var room;
      var connection;
      var otherRoom;
      var wall;
      var otherWall;

      for (var i = 0; i < cw; i++) {
        for (var j = 0; j < ch; j++) {
          room = this.rooms[i][j];

          for (var k = 0; k < room["connections"].length; k++) {
            connection = room["connections"][k];
            otherRoom = this.rooms[connection[0]][connection[1]]; // figure out what wall our corridor will start one.
            // figure out what wall our corridor will end on.

            if (otherRoom["cellx"] > room["cellx"]) {
              wall = 2;
              otherWall = 4;
            } else if (otherRoom["cellx"] < room["cellx"]) {
              wall = 4;
              otherWall = 2;
            } else if (otherRoom["celly"] > room["celly"]) {
              wall = 3;
              otherWall = 1;
            } else {
              wall = 1;
              otherWall = 3;
            }

            this._drawCorridor(this._getWallPosition(room, wall), this._getWallPosition(otherRoom, otherWall));
          }
        }
      }
    }
  }]);

  return Rogue;
}(map_Map);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/map/index.js
;







/* harmony default export */ const map = ({
  Arena: Arena,
  Uniform: Uniform,
  Cellular: Cellular,
  Digger: Digger,
  EllerMaze: EllerMaze,
  DividedMaze: DividedMaze,
  IceyMaze: IceyMaze,
  Rogue: Rogue
});
// CONCATENATED MODULE: ./node_modules/rot-js/lib/noise/noise.js
function noise_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base noise generator
 */
var Noise = function Noise() {
  noise_classCallCheck(this, Noise);
};


// CONCATENATED MODULE: ./node_modules/rot-js/lib/noise/simplex.js
function simplex_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { simplex_typeof = function _typeof(obj) { return typeof obj; }; } else { simplex_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return simplex_typeof(obj); }

function simplex_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function simplex_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function simplex_createClass(Constructor, protoProps, staticProps) { if (protoProps) simplex_defineProperties(Constructor.prototype, protoProps); if (staticProps) simplex_defineProperties(Constructor, staticProps); return Constructor; }

function simplex_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) simplex_setPrototypeOf(subClass, superClass); }

function simplex_setPrototypeOf(o, p) { simplex_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return simplex_setPrototypeOf(o, p); }

function simplex_createSuper(Derived) { var hasNativeReflectConstruct = simplex_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = simplex_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = simplex_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return simplex_possibleConstructorReturn(this, result); }; }

function simplex_possibleConstructorReturn(self, call) { if (call && (simplex_typeof(call) === "object" || typeof call === "function")) { return call; } return simplex_assertThisInitialized(self); }

function simplex_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function simplex_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function simplex_getPrototypeOf(o) { simplex_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return simplex_getPrototypeOf(o); }




var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
/**
 * A simple 2d implementation of simplex noise by Ondrej Zara
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 */

var Simplex = /*#__PURE__*/function (_Noise) {
  simplex_inherits(Simplex, _Noise);

  var _super = simplex_createSuper(Simplex);

  /**
   * @param gradients Random gradients
   */
  function Simplex() {
    var _this;

    var gradients = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 256;

    simplex_classCallCheck(this, Simplex);

    _this = _super.call(this);
    _this._gradients = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
    var permutations = [];

    for (var i = 0; i < gradients; i++) {
      permutations.push(i);
    }

    permutations = rng.shuffle(permutations);
    _this._perms = [];
    _this._indexes = [];

    for (var _i = 0; _i < 2 * gradients; _i++) {
      _this._perms.push(permutations[_i % gradients]);

      _this._indexes.push(_this._perms[_i] % _this._gradients.length);
    }

    return _this;
  }

  simplex_createClass(Simplex, [{
    key: "get",
    value: function get(xin, yin) {
      var perms = this._perms;
      var indexes = this._indexes;
      var count = perms.length / 2;
      var n0 = 0,
          n1 = 0,
          n2 = 0,
          gi; // Noise contributions from the three corners
      // Skew the input space to determine which simplex cell we're in

      var s = (xin + yin) * F2; // Hairy factor for 2D

      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space

      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin

      var y0 = yin - Y0; // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.

      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords

      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } else {
        // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        i1 = 0;
        j1 = 1;
      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6


      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords

      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords

      var y2 = y0 - 1 + 2 * G2; // Work out the hashed gradient indices of the three simplex corners

      var ii = mod(i, count);
      var jj = mod(j, count); // Calculate the contribution from the three corners

      var t0 = 0.5 - x0 * x0 - y0 * y0;

      if (t0 >= 0) {
        t0 *= t0;
        gi = indexes[ii + perms[jj]];
        var grad = this._gradients[gi];
        n0 = t0 * t0 * (grad[0] * x0 + grad[1] * y0);
      }

      var t1 = 0.5 - x1 * x1 - y1 * y1;

      if (t1 >= 0) {
        t1 *= t1;
        gi = indexes[ii + i1 + perms[jj + j1]];
        var _grad = this._gradients[gi];
        n1 = t1 * t1 * (_grad[0] * x1 + _grad[1] * y1);
      }

      var t2 = 0.5 - x2 * x2 - y2 * y2;

      if (t2 >= 0) {
        t2 *= t2;
        gi = indexes[ii + 1 + perms[jj + 1]];
        var _grad2 = this._gradients[gi];
        n2 = t2 * t2 * (_grad2[0] * x2 + _grad2[1] * y2);
      } // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].


      return 70 * (n0 + n1 + n2);
    }
  }]);

  return Simplex;
}(Noise);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/noise/index.js
;
/* harmony default export */ const noise = ({
  Simplex: Simplex
});
// CONCATENATED MODULE: ./node_modules/rot-js/lib/path/path.js
function path_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function path_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function path_createClass(Constructor, protoProps, staticProps) { if (protoProps) path_defineProperties(Constructor.prototype, protoProps); if (staticProps) path_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @class Abstract pathfinder
 * @param {int} toX Target X coord
 * @param {int} toY Target Y coord
 * @param {function} passableCallback Callback to determine map passability
 * @param {object} [options]
 * @param {int} [options.topology=8]
 */

var Path = /*#__PURE__*/function () {
  function Path(toX, toY, passableCallback) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    path_classCallCheck(this, Path);

    this._toX = toX;
    this._toY = toY;
    this._passableCallback = passableCallback;
    this._options = Object.assign({
      topology: 8
    }, options);
    this._dirs = DIRS[this._options.topology];

    if (this._options.topology == 8) {
      /* reorder dirs for more aesthetic result (vertical/horizontal first) */
      this._dirs = [this._dirs[0], this._dirs[2], this._dirs[4], this._dirs[6], this._dirs[1], this._dirs[3], this._dirs[5], this._dirs[7]];
    }
  }

  path_createClass(Path, [{
    key: "_getNeighbors",
    value: function _getNeighbors(cx, cy) {
      var result = [];

      for (var i = 0; i < this._dirs.length; i++) {
        var dir = this._dirs[i];
        var x = cx + dir[0];
        var y = cy + dir[1];

        if (!this._passableCallback(x, y)) {
          continue;
        }

        result.push([x, y]);
      }

      return result;
    }
  }]);

  return Path;
}();


// CONCATENATED MODULE: ./node_modules/rot-js/lib/path/dijkstra.js
function dijkstra_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dijkstra_typeof = function _typeof(obj) { return typeof obj; }; } else { dijkstra_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dijkstra_typeof(obj); }

function dijkstra_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dijkstra_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dijkstra_createClass(Constructor, protoProps, staticProps) { if (protoProps) dijkstra_defineProperties(Constructor.prototype, protoProps); if (staticProps) dijkstra_defineProperties(Constructor, staticProps); return Constructor; }

function dijkstra_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dijkstra_setPrototypeOf(subClass, superClass); }

function dijkstra_setPrototypeOf(o, p) { dijkstra_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dijkstra_setPrototypeOf(o, p); }

function dijkstra_createSuper(Derived) { var hasNativeReflectConstruct = dijkstra_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dijkstra_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dijkstra_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dijkstra_possibleConstructorReturn(this, result); }; }

function dijkstra_possibleConstructorReturn(self, call) { if (call && (dijkstra_typeof(call) === "object" || typeof call === "function")) { return call; } return dijkstra_assertThisInitialized(self); }

function dijkstra_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dijkstra_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function dijkstra_getPrototypeOf(o) { dijkstra_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dijkstra_getPrototypeOf(o); }


/**
 * @class Simplified Dijkstra's algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */

var Dijkstra = /*#__PURE__*/function (_Path) {
  dijkstra_inherits(Dijkstra, _Path);

  var _super = dijkstra_createSuper(Dijkstra);

  function Dijkstra(toX, toY, passableCallback, options) {
    var _this;

    dijkstra_classCallCheck(this, Dijkstra);

    _this = _super.call(this, toX, toY, passableCallback, options);
    _this._computed = {};
    _this._todo = [];

    _this._add(toX, toY, null);

    return _this;
  }
  /**
   * Compute a path from a given point
   * @see ROT.Path#compute
   */


  dijkstra_createClass(Dijkstra, [{
    key: "compute",
    value: function compute(fromX, fromY, callback) {
      var key = fromX + "," + fromY;

      if (!(key in this._computed)) {
        this._compute(fromX, fromY);
      }

      if (!(key in this._computed)) {
        return;
      }

      var item = this._computed[key];

      while (item) {
        callback(item.x, item.y);
        item = item.prev;
      }
    }
    /**
     * Compute a non-cached value
     */

  }, {
    key: "_compute",
    value: function _compute(fromX, fromY) {
      while (this._todo.length) {
        var item = this._todo.shift();

        if (item.x == fromX && item.y == fromY) {
          return;
        }

        var neighbors = this._getNeighbors(item.x, item.y);

        for (var i = 0; i < neighbors.length; i++) {
          var neighbor = neighbors[i];
          var x = neighbor[0];
          var y = neighbor[1];
          var id = x + "," + y;

          if (id in this._computed) {
            continue;
          }
          /* already done */


          this._add(x, y, item);
        }
      }
    }
  }, {
    key: "_add",
    value: function _add(x, y, prev) {
      var obj = {
        x: x,
        y: y,
        prev: prev
      };
      this._computed[x + "," + y] = obj;

      this._todo.push(obj);
    }
  }]);

  return Dijkstra;
}(Path);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/path/astar.js
function astar_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { astar_typeof = function _typeof(obj) { return typeof obj; }; } else { astar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return astar_typeof(obj); }

function astar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function astar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function astar_createClass(Constructor, protoProps, staticProps) { if (protoProps) astar_defineProperties(Constructor.prototype, protoProps); if (staticProps) astar_defineProperties(Constructor, staticProps); return Constructor; }

function astar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) astar_setPrototypeOf(subClass, superClass); }

function astar_setPrototypeOf(o, p) { astar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return astar_setPrototypeOf(o, p); }

function astar_createSuper(Derived) { var hasNativeReflectConstruct = astar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = astar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = astar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return astar_possibleConstructorReturn(this, result); }; }

function astar_possibleConstructorReturn(self, call) { if (call && (astar_typeof(call) === "object" || typeof call === "function")) { return call; } return astar_assertThisInitialized(self); }

function astar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function astar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function astar_getPrototypeOf(o) { astar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return astar_getPrototypeOf(o); }


/**
 * @class Simplified A* algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */

var AStar = /*#__PURE__*/function (_Path) {
  astar_inherits(AStar, _Path);

  var _super = astar_createSuper(AStar);

  function AStar(toX, toY, passableCallback) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    astar_classCallCheck(this, AStar);

    _this = _super.call(this, toX, toY, passableCallback, options);
    _this._todo = [];
    _this._done = {};
    return _this;
  }
  /**
   * Compute a path from a given point
   * @see ROT.Path#compute
   */


  astar_createClass(AStar, [{
    key: "compute",
    value: function compute(fromX, fromY, callback) {
      this._todo = [];
      this._done = {};
      this._fromX = fromX;
      this._fromY = fromY;

      this._add(this._toX, this._toY, null);

      while (this._todo.length) {
        var _item = this._todo.shift();

        var id = _item.x + "," + _item.y;

        if (id in this._done) {
          continue;
        }

        this._done[id] = _item;

        if (_item.x == fromX && _item.y == fromY) {
          break;
        }

        var neighbors = this._getNeighbors(_item.x, _item.y);

        for (var i = 0; i < neighbors.length; i++) {
          var neighbor = neighbors[i];
          var x = neighbor[0];
          var y = neighbor[1];

          var _id = x + "," + y;

          if (_id in this._done) {
            continue;
          }

          this._add(x, y, _item);
        }
      }

      var item = this._done[fromX + "," + fromY];

      if (!item) {
        return;
      }

      while (item) {
        callback(item.x, item.y);
        item = item.prev;
      }
    }
  }, {
    key: "_add",
    value: function _add(x, y, prev) {
      var h = this._distance(x, y);

      var obj = {
        x: x,
        y: y,
        prev: prev,
        g: prev ? prev.g + 1 : 0,
        h: h
      };
      /* insert into priority queue */

      var f = obj.g + obj.h;

      for (var i = 0; i < this._todo.length; i++) {
        var item = this._todo[i];
        var itemF = item.g + item.h;

        if (f < itemF || f == itemF && h < item.h) {
          this._todo.splice(i, 0, obj);

          return;
        }
      }

      this._todo.push(obj);
    }
  }, {
    key: "_distance",
    value: function _distance(x, y) {
      switch (this._options.topology) {
        case 4:
          return Math.abs(x - this._fromX) + Math.abs(y - this._fromY);
          break;

        case 6:
          var dx = Math.abs(x - this._fromX);
          var dy = Math.abs(y - this._fromY);
          return dy + Math.max(0, (dx - dy) / 2);
          break;

        case 8:
          return Math.max(Math.abs(x - this._fromX), Math.abs(y - this._fromY));
          break;
      }
    }
  }]);

  return AStar;
}(Path);


// CONCATENATED MODULE: ./node_modules/rot-js/lib/path/index.js
;

/* harmony default export */ const path = ({
  Dijkstra: Dijkstra,
  AStar: AStar
});
// CONCATENATED MODULE: ./node_modules/rot-js/lib/lighting.js
function lighting_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lighting_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lighting_createClass(Constructor, protoProps, staticProps) { if (protoProps) lighting_defineProperties(Constructor.prototype, protoProps); if (staticProps) lighting_defineProperties(Constructor, staticProps); return Constructor; }


;
;
;
;
/**
 * Lighting computation, based on a traditional FOV for multiple light sources and multiple passes.
 */

var Lighting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Lighting(reflectivityCallback) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    lighting_classCallCheck(this, Lighting);

    this._reflectivityCallback = reflectivityCallback;
    this._options = {};
    options = Object.assign({
      passes: 1,
      emissionThreshold: 100,
      range: 10
    }, options);
    this._lights = {};
    this._reflectivityCache = {};
    this._fovCache = {};
    this.setOptions(options);
  }
  /**
   * Adjust options at runtime
   */


  lighting_createClass(Lighting, [{
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this._options, options);

      if (options && options.range) {
        this.reset();
      }

      return this;
    }
    /**
     * Set the used Field-Of-View algo
     */

  }, {
    key: "setFOV",
    value: function setFOV(fov) {
      this._fov = fov;
      this._fovCache = {};
      return this;
    }
    /**
     * Set (or remove) a light source
     */

  }, {
    key: "setLight",
    value: function setLight(x, y, color) {
      var key = x + "," + y;

      if (color) {
        this._lights[key] = typeof color == "string" ? Color.fromString(color) : color;
      } else {
        delete this._lights[key];
      }

      return this;
    }
    /**
     * Remove all light sources
     */

  }, {
    key: "clearLights",
    value: function clearLights() {
      this._lights = {};
    }
    /**
     * Reset the pre-computed topology values. Call whenever the underlying map changes its light-passability.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._reflectivityCache = {};
      this._fovCache = {};
      return this;
    }
    /**
     * Compute the lighting
     */

  }, {
    key: "compute",
    value: function compute(lightingCallback) {
      var doneCells = {};
      var emittingCells = {};
      var litCells = {};

      for (var key in this._lights) {
        /* prepare emitters for first pass */
        var light = this._lights[key];
        emittingCells[key] = [0, 0, 0];
        Color.add_(emittingCells[key], light);
      }

      for (var i = 0; i < this._options.passes; i++) {
        /* main loop */
        this._emitLight(emittingCells, litCells, doneCells);

        if (i + 1 == this._options.passes) {
          continue;
        }
        /* not for the last pass */


        emittingCells = this._computeEmitters(litCells, doneCells);
      }

      for (var litKey in litCells) {
        /* let the user know what and how is lit */
        var parts = litKey.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);
        lightingCallback(x, y, litCells[litKey]);
      }

      return this;
    }
    /**
     * Compute one iteration from all emitting cells
     * @param emittingCells These emit light
     * @param litCells Add projected light to these
     * @param doneCells These already emitted, forbid them from further calculations
     */

  }, {
    key: "_emitLight",
    value: function _emitLight(emittingCells, litCells, doneCells) {
      for (var key in emittingCells) {
        var parts = key.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);

        this._emitLightFromCell(x, y, emittingCells[key], litCells);

        doneCells[key] = 1;
      }

      return this;
    }
    /**
     * Prepare a list of emitters for next pass
     */

  }, {
    key: "_computeEmitters",
    value: function _computeEmitters(litCells, doneCells) {
      var result = {};

      for (var key in litCells) {
        if (key in doneCells) {
          continue;
        }
        /* already emitted */


        var color = litCells[key];
        var reflectivity = void 0;

        if (key in this._reflectivityCache) {
          reflectivity = this._reflectivityCache[key];
        } else {
          var parts = key.split(",");
          var x = parseInt(parts[0]);
          var y = parseInt(parts[1]);
          reflectivity = this._reflectivityCallback(x, y);
          this._reflectivityCache[key] = reflectivity;
        }

        if (reflectivity == 0) {
          continue;
        }
        /* will not reflect at all */

        /* compute emission color */


        var emission = [0, 0, 0];
        var intensity = 0;

        for (var i = 0; i < 3; i++) {
          var part = Math.round(color[i] * reflectivity);
          emission[i] = part;
          intensity += part;
        }

        if (intensity > this._options.emissionThreshold) {
          result[key] = emission;
        }
      }

      return result;
    }
    /**
     * Compute one iteration from one cell
     */

  }, {
    key: "_emitLightFromCell",
    value: function _emitLightFromCell(x, y, color, litCells) {
      var key = x + "," + y;
      var fov;

      if (key in this._fovCache) {
        fov = this._fovCache[key];
      } else {
        fov = this._updateFOV(x, y);
      }

      for (var fovKey in fov) {
        var formFactor = fov[fovKey];
        var result = void 0;

        if (fovKey in litCells) {
          /* already lit */
          result = litCells[fovKey];
        } else {
          /* newly lit */
          result = [0, 0, 0];
          litCells[fovKey] = result;
        }

        for (var i = 0; i < 3; i++) {
          result[i] += Math.round(color[i] * formFactor);
        }
        /* add light color */

      }

      return this;
    }
    /**
     * Compute FOV ("form factor") for a potential light source at [x,y]
     */

  }, {
    key: "_updateFOV",
    value: function _updateFOV(x, y) {
      var key1 = x + "," + y;
      var cache = {};
      this._fovCache[key1] = cache;
      var range = this._options.range;

      function cb(x, y, r, vis) {
        var key2 = x + "," + y;
        var formFactor = vis * (1 - r / range);

        if (formFactor == 0) {
          return;
        }

        cache[key2] = formFactor;
      }

      ;

      this._fov.compute(x, y, range, cb.bind(this));

      return cache;
    }
  }]);

  return Lighting;
}()));


// CONCATENATED MODULE: ./node_modules/rot-js/lib/index.js













var Util = (/* unused pure expression or super */ null && (util));

var lib_Color = (/* unused pure expression or super */ null && (color));

var Text = (/* unused pure expression or super */ null && (text));
// CONCATENATED MODULE: ./src/core/rendering/Renderer.js
function Renderer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Renderer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Renderer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Renderer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Renderer_defineProperties(Constructor, staticProps); return Constructor; }

function Renderer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Renderer_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function Renderer_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var _rot = new WeakMap();

var _container = new WeakMap();

var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    Renderer_classCallCheck(this, Renderer);

    _rot.set(this, {
      writable: true,
      value: null
    });

    _container.set(this, {
      writable: true,
      value: null
    });

    Renderer_defineProperty(this, "width", 64);

    Renderer_defineProperty(this, "height", 32);

    display.Rect.cache = true;

    Renderer_classPrivateFieldSet(this, _rot, new display({
      width: this.width,
      height: this.height,
      fontSize: 18,
      forceSquareRatio: false,
      bg: '#1c171f'
    }));

    this.attach();
  }

  Renderer_createClass(Renderer, [{
    key: "attach",
    value: function attach() {
      Renderer_classPrivateFieldSet(this, _container, document.body.appendChild(Renderer_classPrivateFieldGet(this, _rot).getContainer()));
    }
  }, {
    key: "draw",
    value: function draw(x, y, _char, fg, bg) {
      Renderer_classPrivateFieldGet(this, _rot).draw(x, y, _char, fg, bg);
    }
  }, {
    key: "drawText",
    value: function drawText(x, y, string) {
      Renderer_classPrivateFieldGet(this, _rot).drawText(x, y, string);
    }
  }, {
    key: "clear",
    value: function clear() {
      Renderer_classPrivateFieldGet(this, _rot).clear();
    }
  }, {
    key: "getDOMContainer",
    value: function getDOMContainer() {
      return Renderer_classPrivateFieldGet(this, _container);
    }
  }, {
    key: "eventToPosition",
    value: function eventToPosition(e) {
      return Renderer_classPrivateFieldGet(this, _rot).eventToPosition(e);
    }
  }]);

  return Renderer;
}();


// CONCATENATED MODULE: ./src/core/input/events/InputKeyboardEvent.js
function InputKeyboardEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InputKeyboardEvent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputKeyboardEvent = function InputKeyboardEvent(data) {
  InputKeyboardEvent_classCallCheck(this, InputKeyboardEvent);

  InputKeyboardEvent_defineProperty(this, "key", false);

  InputKeyboardEvent_defineProperty(this, "isShift", false);

  InputKeyboardEvent_defineProperty(this, "isAlt", false);

  InputKeyboardEvent_defineProperty(this, "isCtrl", false);

  InputKeyboardEvent_defineProperty(this, "isMeta", false);

  this.key = data.key, this.isShift = data.isShift;
  this.isAlt = data.isAlt;
  this.isCtrl = data.isCtrl;
  this.isMeta = data.isMeta;
};


// CONCATENATED MODULE: ./src/core/input/events/InputMouseEvent.js
function InputMouseEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InputMouseEvent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputMouseEvent = function InputMouseEvent(data) {
  InputMouseEvent_classCallCheck(this, InputMouseEvent);

  InputMouseEvent_defineProperty(this, "button", false);

  InputMouseEvent_defineProperty(this, "x", false);

  InputMouseEvent_defineProperty(this, "y", false);

  InputMouseEvent_defineProperty(this, "isShift", false);

  InputMouseEvent_defineProperty(this, "isAlt", false);

  InputMouseEvent_defineProperty(this, "isCtrl", false);

  InputMouseEvent_defineProperty(this, "isMeta", false);

  InputMouseEvent_defineProperty(this, "tileX", false);

  InputMouseEvent_defineProperty(this, "tileY", false);

  this.button = data.button;
  this.x = data.x;
  this.y = data.y;
  this.isShift = data.isShift;
  this.isAlt = data.isAlt;
  this.isCtrl = data.isCtrl;
  this.isMeta = data.isMeta;
  this.tileX = data.tileX;
  this.tileY = data.tileY;
};


// CONCATENATED MODULE: ./src/core/input/InputController.js
function InputController_slicedToArray(arr, i) { return InputController_arrayWithHoles(arr) || InputController_iterableToArrayLimit(arr, i) || InputController_unsupportedIterableToArray(arr, i) || InputController_nonIterableRest(); }

function InputController_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function InputController_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return InputController_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return InputController_arrayLikeToArray(o, minLen); }

function InputController_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function InputController_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function InputController_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function InputController_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InputController_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function InputController_createClass(Constructor, protoProps, staticProps) { if (protoProps) InputController_defineProperties(Constructor.prototype, protoProps); if (staticProps) InputController_defineProperties(Constructor, staticProps); return Constructor; }

function InputController_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function InputController_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }




var _renderer = new WeakMap();

var InputController = /*#__PURE__*/function () {
  function InputController(renderer) {
    InputController_classCallCheck(this, InputController);

    _renderer.set(this, {
      writable: true,
      value: null
    });

    InputController_classPrivateFieldSet(this, _renderer, renderer);

    document.addEventListener('keydown', this.onKeydown.bind(this));

    var container = InputController_classPrivateFieldGet(this, _renderer).getDOMContainer();

    container.addEventListener('click', this.onMouseClick.bind(this));
    container.addEventListener('mousemove', this.onMouseMove.bind(this));
    container.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    container.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

  InputController_createClass(InputController, [{
    key: "onKeydown",
    value: function onKeydown(e) {
      var evt = new InputKeyboardEvent({
        key: e.keyCode,
        isShift: e.shiftKey,
        isAlt: e.altKey,
        isCtrl: e.ctrlKey,
        isMeta: e.metaKey
      });
      console.log('onKeydown', evt);
    }
  }, {
    key: "onMouseClick",
    value: function onMouseClick(e) {
      var _classPrivateFieldGet2 = InputController_classPrivateFieldGet(this, _renderer).eventToPosition(e),
          _classPrivateFieldGet3 = InputController_slicedToArray(_classPrivateFieldGet2, 2),
          tileX = _classPrivateFieldGet3[0],
          tileY = _classPrivateFieldGet3[1];

      var evt = new InputMouseEvent({
        button: e.button,
        x: e.offsetX,
        y: e.offsetY,
        isShift: e.shiftKey,
        isAlt: e.altKey,
        isCtrl: e.ctrlKey,
        isMeta: e.metaKey,
        tileX: tileX,
        tileY: tileY
      });
      console.log('onMouseClick', e, evt);
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      console.log('onMouseMove');
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(e) {
      console.log('onMouseEnter');
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(e) {
      console.log('onMouseLeave');
    }
  }]);

  return InputController;
}();


// CONCATENATED MODULE: ./src/systems/System.js
function System_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function System_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function System_createClass(Constructor, protoProps, staticProps) { if (protoProps) System_defineProperties(Constructor.prototype, protoProps); if (staticProps) System_defineProperties(Constructor, staticProps); return Constructor; }

function System_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function System_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _game = new WeakMap();

var System = /*#__PURE__*/function () {
  System_createClass(System, [{
    key: "game",
    get: function get() {
      return System_classPrivateFieldGet(this, _game);
    }
  }]);

  function System(game) {
    System_classCallCheck(this, System);

    _game.set(this, {
      writable: true,
      value: null
    });

    System_classPrivateFieldSet(this, _game, game);
  }

  System_createClass(System, [{
    key: "update",
    value: function update(dt) {}
  }]);

  return System;
}();


// CONCATENATED MODULE: ./src/systems/HungerSystem.js
function HungerSystem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HungerSystem_typeof = function _typeof(obj) { return typeof obj; }; } else { HungerSystem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HungerSystem_typeof(obj); }

function HungerSystem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HungerSystem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HungerSystem_createClass(Constructor, protoProps, staticProps) { if (protoProps) HungerSystem_defineProperties(Constructor.prototype, protoProps); if (staticProps) HungerSystem_defineProperties(Constructor, staticProps); return Constructor; }

function HungerSystem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HungerSystem_setPrototypeOf(subClass, superClass); }

function HungerSystem_setPrototypeOf(o, p) { HungerSystem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HungerSystem_setPrototypeOf(o, p); }

function HungerSystem_createSuper(Derived) { var hasNativeReflectConstruct = HungerSystem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = HungerSystem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = HungerSystem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return HungerSystem_possibleConstructorReturn(this, result); }; }

function HungerSystem_possibleConstructorReturn(self, call) { if (call && (HungerSystem_typeof(call) === "object" || typeof call === "function")) { return call; } return HungerSystem_assertThisInitialized(self); }

function HungerSystem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HungerSystem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function HungerSystem_getPrototypeOf(o) { HungerSystem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HungerSystem_getPrototypeOf(o); }

function HungerSystem_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function HungerSystem_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }





var _query = new WeakMap();

var HungerSystem = /*#__PURE__*/function (_System) {
  HungerSystem_inherits(HungerSystem, _System);

  var _super = HungerSystem_createSuper(HungerSystem);

  function HungerSystem(game) {
    var _this;

    HungerSystem_classCallCheck(this, HungerSystem);

    _this = _super.call(this, game);

    _query.set(HungerSystem_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    HungerSystem_classPrivateFieldSet(HungerSystem_assertThisInitialized(_this), _query, src_ecs.createQuery({
      all: [Eater]
    }));

    return _this;
  }

  HungerSystem_createClass(HungerSystem, [{
    key: "update",
    value: function update(dt) {
      var _this2 = this;

      if (this.game.actionSystem.tickDelta > 0) {
        HungerSystem_classPrivateFieldGet(this, _query).get().forEach(function (entity) {
          entity.eater.hunger -= _this2.game.actionSystem.tickDelta;
        });
      }
    }
  }]);

  return HungerSystem;
}(System);


// CONCATENATED MODULE: ./src/systems/ActionSystem.js
function ActionSystem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionSystem_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionSystem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionSystem_typeof(obj); }

function ActionSystem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionSystem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionSystem_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionSystem_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionSystem_defineProperties(Constructor, staticProps); return Constructor; }

function ActionSystem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionSystem_setPrototypeOf(subClass, superClass); }

function ActionSystem_setPrototypeOf(o, p) { ActionSystem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionSystem_setPrototypeOf(o, p); }

function ActionSystem_createSuper(Derived) { var hasNativeReflectConstruct = ActionSystem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ActionSystem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ActionSystem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ActionSystem_possibleConstructorReturn(this, result); }; }

function ActionSystem_possibleConstructorReturn(self, call) { if (call && (ActionSystem_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionSystem_assertThisInitialized(self); }

function ActionSystem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionSystem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ActionSystem_getPrototypeOf(o) { ActionSystem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionSystem_getPrototypeOf(o); }

function ActionSystem_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function ActionSystem_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }





var _tick = new WeakMap();

var _tickDelta = new WeakMap();

var ActionSystem_query = new WeakMap();

var ActionSystem = /*#__PURE__*/function (_System) {
  ActionSystem_inherits(ActionSystem, _System);

  var _super = ActionSystem_createSuper(ActionSystem);

  function ActionSystem(game) {
    var _this;

    ActionSystem_classCallCheck(this, ActionSystem);

    _this = _super.call(this, game);

    _tick.set(ActionSystem_assertThisInitialized(_this), {
      writable: true,
      value: 0
    });

    _tickDelta.set(ActionSystem_assertThisInitialized(_this), {
      writable: true,
      value: 0
    });

    ActionSystem_query.set(ActionSystem_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    ActionSystem_classPrivateFieldSet(ActionSystem_assertThisInitialized(_this), ActionSystem_query, src_ecs.createQuery({
      all: [Actor]
    }));

    return _this;
  }

  ActionSystem_createClass(ActionSystem, [{
    key: "update",
    value: function update(dt) {
      var _this2 = this;

      var entities = ActionSystem_classPrivateFieldGet(this, ActionSystem_query).get();

      var sorted = Array.from(entities);
      sorted.sort(function (a, b) {
        return a.actor.energy < b.actor.energy ? 1 : -1;
      });
      var entity = sorted[0];

      ActionSystem_classPrivateFieldSet(this, _tickDelta, 0);

      if (!entity.actor.hasEnergy) {
        ActionSystem_classPrivateFieldSet(this, _tickDelta, entity.actor.energy * -1);

        ActionSystem_classPrivateFieldSet(this, _tick, ActionSystem_classPrivateFieldGet(this, _tick) - entity.actor.energy);

        entities.forEach(function (entity) {
          entity.actor.addEnergy(ActionSystem_classPrivateFieldGet(_this2, _tickDelta));
        });
      }

      if (entity.actor.hasEnergy && !entity.isPlayer) {
        entity.fireEvent('take-action');
      }
    }
  }, {
    key: "tick",
    get: function get() {
      return ActionSystem_classPrivateFieldGet(this, _tick);
    }
  }, {
    key: "tickDelta",
    get: function get() {
      return ActionSystem_classPrivateFieldGet(this, _tickDelta);
    }
  }, {
    key: "turn",
    get: function get() {
      return Math.floor(ActionSystem_classPrivateFieldGet(this, _tick) / 1000);
    }
  }, {
    key: "subTurn",
    get: function get() {
      return ActionSystem_classPrivateFieldGet(this, _tick) - this.turn * 1000;
    }
  }]);

  return ActionSystem;
}(System);


// CONCATENATED MODULE: ./src/systems/RenderSystem.js
function RenderSystem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RenderSystem_typeof = function _typeof(obj) { return typeof obj; }; } else { RenderSystem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RenderSystem_typeof(obj); }

function RenderSystem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RenderSystem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RenderSystem_createClass(Constructor, protoProps, staticProps) { if (protoProps) RenderSystem_defineProperties(Constructor.prototype, protoProps); if (staticProps) RenderSystem_defineProperties(Constructor, staticProps); return Constructor; }

function RenderSystem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RenderSystem_setPrototypeOf(subClass, superClass); }

function RenderSystem_setPrototypeOf(o, p) { RenderSystem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RenderSystem_setPrototypeOf(o, p); }

function RenderSystem_createSuper(Derived) { var hasNativeReflectConstruct = RenderSystem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = RenderSystem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = RenderSystem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return RenderSystem_possibleConstructorReturn(this, result); }; }

function RenderSystem_possibleConstructorReturn(self, call) { if (call && (RenderSystem_typeof(call) === "object" || typeof call === "function")) { return call; } return RenderSystem_assertThisInitialized(self); }

function RenderSystem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RenderSystem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function RenderSystem_getPrototypeOf(o) { RenderSystem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RenderSystem_getPrototypeOf(o); }

function RenderSystem_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function RenderSystem_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }





var RenderSystem_query = new WeakMap();

var RenderSystem = /*#__PURE__*/function (_System) {
  RenderSystem_inherits(RenderSystem, _System);

  var _super = RenderSystem_createSuper(RenderSystem);

  function RenderSystem(game) {
    var _this;

    RenderSystem_classCallCheck(this, RenderSystem);

    _this = _super.call(this, game);

    RenderSystem_query.set(RenderSystem_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    RenderSystem_classPrivateFieldSet(RenderSystem_assertThisInitialized(_this), RenderSystem_query, src_ecs.createQuery({
      all: [Glyph, Position]
    }));

    return _this;
  }

  RenderSystem_createClass(RenderSystem, [{
    key: "update",
    value: function update(dt) {
      var _this2 = this;

      this.game.renderer.clear();

      RenderSystem_classPrivateFieldGet(this, RenderSystem_query).get().forEach(function (renderable) {
        _this2.game.renderer.draw(renderable.position.x, renderable.position.y, renderable.glyph["char"], renderable.glyph.fg, renderable.glyph.bg);
      });
    }
  }]);

  return RenderSystem;
}(System);


// CONCATENATED MODULE: ./src/systems/MovementSystem.js
function MovementSystem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MovementSystem_typeof = function _typeof(obj) { return typeof obj; }; } else { MovementSystem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MovementSystem_typeof(obj); }

function MovementSystem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MovementSystem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MovementSystem_createClass(Constructor, protoProps, staticProps) { if (protoProps) MovementSystem_defineProperties(Constructor.prototype, protoProps); if (staticProps) MovementSystem_defineProperties(Constructor, staticProps); return Constructor; }

function MovementSystem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MovementSystem_setPrototypeOf(subClass, superClass); }

function MovementSystem_setPrototypeOf(o, p) { MovementSystem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MovementSystem_setPrototypeOf(o, p); }

function MovementSystem_createSuper(Derived) { var hasNativeReflectConstruct = MovementSystem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MovementSystem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MovementSystem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MovementSystem_possibleConstructorReturn(this, result); }; }

function MovementSystem_possibleConstructorReturn(self, call) { if (call && (MovementSystem_typeof(call) === "object" || typeof call === "function")) { return call; } return MovementSystem_assertThisInitialized(self); }

function MovementSystem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MovementSystem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MovementSystem_getPrototypeOf(o) { MovementSystem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MovementSystem_getPrototypeOf(o); }

function MovementSystem_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function MovementSystem_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }






var MovementSystem_query = new WeakMap();

var MovementSystem = /*#__PURE__*/function (_System) {
  MovementSystem_inherits(MovementSystem, _System);

  var _super = MovementSystem_createSuper(MovementSystem);

  function MovementSystem(game) {
    var _this;

    MovementSystem_classCallCheck(this, MovementSystem);

    _this = _super.call(this, game);

    MovementSystem_query.set(MovementSystem_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    MovementSystem_classPrivateFieldSet(MovementSystem_assertThisInitialized(_this), MovementSystem_query, src_ecs.createQuery({
      all: [MoveCommand, Position]
    }));

    return _this;
  }

  MovementSystem_createClass(MovementSystem, [{
    key: "update",
    value: function update(dt) {
      MovementSystem_classPrivateFieldGet(this, MovementSystem_query).get().forEach(function (entity) {
        var delta = Directions_delta(entity.moveCommand.direction);
        entity.fireEvent('TryMove', delta);
        entity.moveCommand.destroy();
      });
    }
  }]);

  return MovementSystem;
}(System);


// CONCATENATED MODULE: ./src/systems/UISystem.js
function UISystem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UISystem_typeof = function _typeof(obj) { return typeof obj; }; } else { UISystem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UISystem_typeof(obj); }

function UISystem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UISystem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UISystem_createClass(Constructor, protoProps, staticProps) { if (protoProps) UISystem_defineProperties(Constructor.prototype, protoProps); if (staticProps) UISystem_defineProperties(Constructor, staticProps); return Constructor; }

function UISystem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UISystem_setPrototypeOf(subClass, superClass); }

function UISystem_setPrototypeOf(o, p) { UISystem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UISystem_setPrototypeOf(o, p); }

function UISystem_createSuper(Derived) { var hasNativeReflectConstruct = UISystem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = UISystem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = UISystem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return UISystem_possibleConstructorReturn(this, result); }; }

function UISystem_possibleConstructorReturn(self, call) { if (call && (UISystem_typeof(call) === "object" || typeof call === "function")) { return call; } return UISystem_assertThisInitialized(self); }

function UISystem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UISystem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function UISystem_getPrototypeOf(o) { UISystem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UISystem_getPrototypeOf(o); }

function UISystem_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function UISystem_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }





var UISystem_query = new WeakMap();

var UISystem = /*#__PURE__*/function (_System) {
  UISystem_inherits(UISystem, _System);

  var _super = UISystem_createSuper(UISystem);

  function UISystem(game) {
    var _this;

    UISystem_classCallCheck(this, UISystem);

    _this = _super.call(this, game);

    UISystem_query.set(UISystem_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    UISystem_classPrivateFieldSet(UISystem_assertThisInitialized(_this), UISystem_query, src_ecs.createQuery({
      all: [Moniker, Actor]
    }));

    return _this;
  }

  UISystem_createClass(UISystem, [{
    key: "update",
    value: function update(dt) {
      var _this2 = this;

      var turn = this.game.actionSystem.turn;
      var subTurn = "".concat(this.game.actionSystem.subTurn).padEnd(3, '0');
      this.game.renderer.drawText(1, 1, "%c{cyan}Knossonia");
      var entities = Array.from(UISystem_classPrivateFieldGet(this, UISystem_query).get());
      entities.forEach(function (entity, i) {
        _this2.game.renderer.drawText(1, _this2.game.renderer.height - (2 + i), "energy (".concat(entity.moniker.name, ") %c{yellow}").concat(entity.actor.energy));
      });
      this.game.renderer.drawText(this.game.renderer.width - 6 - "".concat(turn).length, 1, "%c{cyan}".concat(turn, "%c{white}.%c{yellow}").concat(subTurn));
    }
  }]);

  return UISystem;
}(System);


// CONCATENATED MODULE: ./src/core/Game.js
function Game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Game_createClass(Constructor, protoProps, staticProps) { if (protoProps) Game_defineProperties(Constructor.prototype, protoProps); if (staticProps) Game_defineProperties(Constructor, staticProps); return Constructor; }









var Game = /*#__PURE__*/function () {
  function Game() {
    Game_classCallCheck(this, Game);

    this.renderer = new Renderer();
    this.inputController = new InputController(this.renderer);
    this.hungerSystem = new HungerSystem(this);
    this.actionSystem = new ActionSystem(this);
    this.movementSystem = new MovementSystem(this);
    this.renderSystem = new RenderSystem(this);
    this.UISystem = new UISystem(this);
  }

  Game_createClass(Game, [{
    key: "start",
    value: function start() {
      requestAnimationFrame(this.loop.bind(this));
    }
  }, {
    key: "loop",
    value: function loop(t) {
      var dt = 0;
      this.hungerSystem.update(dt);
      this.actionSystem.update(dt);
      this.movementSystem.update(dt);
      this.renderSystem.update(dt);
      this.UISystem.update(dt);
      requestAnimationFrame(this.loop.bind(this));
    }
  }]);

  return Game;
}();


// CONCATENATED MODULE: ./src/index.js
;





var g = new Game();
var jim = src_ecs.createPrefab('Player', {
  moniker: {
    name: 'Jim'
  },
  position: {
    x: 4,
    y: 10
  }
});
var bob = src_ecs.createPrefab('HumanWanderer', {
  position: {
    x: 23,
    y: 20
  }
});
bob.brain.pushGoal(BoredGoalType.create());

var move = function move(entity, direction) {
  if (entity.has(MoveCommand)) {
    entity.remove(MoveCommand);
  }

  entity.add(MoveCommand, {
    direction: direction
  });
};

document.addEventListener('keydown', function (e) {
  if (keycodes[e.keyCode] === 'space') {
    jim.fireEvent('energy-consumed', 1000);
  }

  if (keycodes[e.keyCode] === 'q') {
    move(jim, NW);
  }

  if (keycodes[e.keyCode] === 'w') {
    move(jim, N);
  }

  if (keycodes[e.keyCode] === 'e') {
    move(jim, NE);
  }

  if (keycodes[e.keyCode] === 'a') {
    move(jim, W);
  }

  if (keycodes[e.keyCode] === 's') {
    move(jim, Z);
  }

  if (keycodes[e.keyCode] === 'd') {
    move(jim, E);
  }

  if (keycodes[e.keyCode] === 'z') {
    move(jim, SW);
  }

  if (keycodes[e.keyCode] === 'x') {
    move(jim, S);
  }

  if (keycodes[e.keyCode] === 'c') {
    move(jim, SE);
  }
});
g.start();
/******/ })()
;
//# sourceMappingURL=main.bc0bdff36f97579f0d9c.js.map