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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model */ \"./src/model/model.js\");\n/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/form */ \"./src/form/form.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu */ \"./src/menu/menu.js\");\n\n\n\n\nconst model = new _model_model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]('https://menuapp-82b72.firebaseio.com/menu_data.json')\n\nconst menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"]({\n  parent: document.querySelector('.menu')\n})\n\nmodel.on('update', () => {\n  menu.setData(model.getData())\n  menu.render();\n})\n\nmodel.fetch();\n\nmenu.on('remove', event => {\n  model.save(event.detail);\n})\n\nconst form = new _form_form__WEBPACK_IMPORTED_MODULE_1__[\"Form\"]({\n  parent: document.querySelector('.form')\n})\n\nform.on('add', event => {\n  menu.addItem(event.detail);\n  model.save(menu.getData());\n  form.showHint(event.detail);\n})\n\n\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/form/form.js":
/*!**************************!*\
  !*** ./src/form/form.js ***!
  \**************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony import */ var _form_tmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_tmp */ \"./src/form/form_tmp.js\");\n\n\nconst tmp = _form_tmp__WEBPACK_IMPORTED_MODULE_0__[\"form_tmp\"];\n\n/**\n * @class Form\n */\nclass Form {\n  constructor({\n    parent,\n    onSubmit,\n    data\n  }) {\n    this.parent = parent;\n    this.data = data;\n\n    this.render();\n    this._initEvents();\n  }\n\n  render () {\n    this.parent.innerHTML = tmp()\n  }\n\n  getField(name) {\n    return document.querySelector(`[name=\"${name}\"]`);\n  }\n\n  async showHint(item) {\n    if (item.name.length === 0 || item.link.length === 0) {\n      this.parent.querySelector('.js-form__hint').classList.add('active');\n\n      let promise = new Promise((resolve, reject) => {\n        setTimeout(() => {\n          this.hideHint()\n          resolve()\n        }, 1500)\n      });\n\n      await promise;\n    }\n  }\n\n  hideHint() {\n    this.parent.querySelector('.js-form__hint').classList.remove('active')\n  }\n\n  on(name, cb) {\n    this.parent.addEventListener(name, cb);\n  }\n\n  trigger(name, data) {\n    const widgetEvent = new CustomEvent(name, {\n      bubbles: true,\n      detail: data\n    })\n    this.parent.dispatchEvent(widgetEvent);\n  }\n\n  _onSubmit(event) {\n    event.preventDefault();\n\n    this.trigger('add', {\n      name: this.getField('name').value,\n      link: this.getField('link').value\n    })\n\n    event.target.reset();\n  }\n\n  _initEvents() {\n    this.parent.addEventListener('submit', this._onSubmit.bind(this));\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/form/form.js?");

/***/ }),

/***/ "./src/form/form_tmp.js":
/*!******************************!*\
  !*** ./src/form/form_tmp.js ***!
  \******************************/
/*! exports provided: form_tmp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form_tmp\", function() { return form_tmp; });\n\nconst form_tmp = (data) => {\n  return `<form class='js-form'>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Название\" name=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"url\" class=\"form-control\" placeholder=\"url\" name=\"link\">\n  </div>\n  <button type=\"submit\" class=\"js-form__btn btn btn-default\">Добавить\n    <div class='js-form__hint bg-danger'>Заполните все поля формы</div></button>\n</form>`\n}\n\n\n\n//# sourceURL=webpack:///./src/form/form_tmp.js?");

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony import */ var _menu_tmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_tmp */ \"./src/menu/menu_tmp.js\");\n\n\n  // let pug = require('pug');\n  // let tmp = pug.compileFile('menu_tmp.pug', options);\n  const tmp = _menu_tmp__WEBPACK_IMPORTED_MODULE_0__[\"menu_tmp\"];\n\n  /**\n   * @class Menu\n   */\n  class Menu {\n\n    constructor({\n      parent,\n      data,\n      maxWidth\n    }) {\n      this.parent = parent;\n      this.width = maxWidth\n      if (maxWidth) this._initWidth()\n\n      if (data) this.render();\n\n      this._initEvents()\n    }\n\n    render() {\n      this.parent.classList.add('js-menu__wrapper')\n      this.parent.innerHTML = tmp(this.data);\n      this.parent.style.maxWidth = this.widthString\n    }\n\n    setData(data) {\n      this.data = data;\n    }\n\n    getData() {\n      return this.data\n    }\n\n    removeItem(index) {\n      this.data.items = this.data.items.filter((item, i) => {\n        return index !== i\n      });\n      this.trigger('remove', this.data)\n      this.render();\n    }\n\n    addItem(item) {\n      if (item.name.length > 0 && item.link.length > 0) {\n        this.data.items.push(item);\n        this.render();\n      }\n    }\n\n    on(name, cb) {\n      this.parent.addEventListener(name, cb);\n    }\n\n    trigger(name, data) {\n      const widgetEvent = new CustomEvent(name, {\n        bubbles: true,\n        detail: data\n      })\n      this.parent.dispatchEvent(widgetEvent)\n    }\n\n    _initWidth() {\n      this.widthString = this.width.toString().match(/[a-z]/) ? this.width : this.width + 'px'\n    }\n\n    _initEvents() {\n      this.parent.addEventListener('click', this._onClick.bind(this));\n    }\n\n    _onClick(event) {\n      event.preventDefault();\n\n      const item = event.target;\n\n      if (item.dataset.action) {\n        try {\n          this['_on' + item.dataset.action](item);\n        } catch (e) {\n          throw new Error(`Метод $3{item.dataset.action} не определён`);\n        }\n      }\n\n    }\n\n    _onremove(item) {\n      let index = parseInt(item.parentNode.parentNode.dataset.id, 10);\n\n      this.removeItem(index)\n    }\n\n    _onpick(item) {\n      console.log('pick' + item)\n    }\n\n  }\n\n\n\n\n//# sourceURL=webpack:///./src/menu/menu.js?");

/***/ }),

/***/ "./src/menu/menu_tmp.js":
/*!******************************!*\
  !*** ./src/menu/menu_tmp.js ***!
  \******************************/
/*! exports provided: menu_tmp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu_tmp\", function() { return menu_tmp; });\n\nconst menu_tmp = (data) => {\n  let itemTmp = (item, i) => `<li class='js-menu__item form-control' data-id=${i}>\n      <a class='js-menu__link' href='${item.link}' data-action='pick'>${item.name}</a>\n      <button type='button' class='js-menu__close close' aria-label='Close'><span aria-hidden='true' data-action='remove'>&times;</span></button>\n    </li>`\n\n  return `<ul class='js-menu'>${data.items.map((item, i)=> itemTmp(item, i)).join('')}</ul>`\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu/menu_tmp.js?");

/***/ }),

/***/ "./src/model/model.js":
/*!****************************!*\
  !*** ./src/model/model.js ***!
  \****************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\nclass Model {\n  constructor(resource) {\n    this._resource = resource;\n    this.data = {};\n    this._eventHandlers = {};\n\n  }\n\n  getData() {\n    return this.data;\n  }\n\n  setData(data) {\n    this.data = data;\n    this.trigger('update');\n  }\n\n  trigger(name) {\n    if (this._eventHandlers[name]) {\n      this._eventHandlers[name].forEach(cb => cb())\n    }\n  }\n\n  save (data) {\n    this.setData(data);\n    this._makeRequest('PUT', this._resource, null);\n  }\n\n  on(name, cb) {\n    if (!this._eventHandlers[name]) {\n      this._eventHandlers[name] = [];\n    }\n    this._eventHandlers[name].push(cb);\n  }\n\n  fetch() {\n    this._makeRequest('GET', this._resource, this.setData.bind(this))\n  }\n    \n  _makeRequest(method, resource, cb) {\n    const xhr = new XMLHttpRequest();\n    xhr.open(method, resource, true);\n    xhr.onreadystatechange = () => {\n      if (xhr.readyState !== 4) {\n        return;\n      }\n      if (xhr.status === 200 && cb !== null) {\n        cb(JSON.parse(xhr.responseText));\n      }\n    }\n\n    if (method === 'PUT') {\n      xhr.send(JSON.stringify(this.getData()));\n    } else {\n      xhr.send();\n    }\n\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/model/model.js?");

/***/ })

/******/ });