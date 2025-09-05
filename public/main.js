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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\n    const contentFoot = document.createElement('footer');\n    contentFoot.classList.add('footer');\n    const text = document.createElement('p');\n    text.textContent = '@2025';\n    contentFoot.appendChild(text);\n    return contentFoot;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://currency-converter/./src/components/footer.js?\n}");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\r\n    const cabecera = document.createElement('header');\r\n    cabecera.classList.add('header');\r\n\r\n    const menuBtn = document.createElement('button');\r\n    const iconoMenu = document.createElement('span');\r\n    iconoMenu.classList.add('material-symbols-outlined');\r\n    iconoMenu.textContent = 'menu';\r\n    menuBtn.appendChild(iconoMenu);\r\n    menuBtn.addEventListener('click', () => {\r\n        const menuContent = document.getElementById('menuPrincipal');\r\n        menuContent.classList.add('open');\r\n    });\r\n\r\n\r\n    const titulo = document.createElement('h1');\r\n    titulo.textContent = 'Currency Converter';\r\n\r\n    cabecera.appendChild(menuBtn);\r\n    cabecera.appendChild(titulo);\r\n    return cabecera;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://currency-converter/./src/components/header.js?\n}");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemMenu = (text, onItemClick) => {\r\n    const li = document.createElement('li');\r\n    const button = document.createElement('button');\r\n\r\n    const span = document.createElement('span');\r\n    span.classList.add('material-symbols-outlined');\r\n    span.textContent = 'home'\r\n    button.appendChild(span);\r\n\r\n    button.innerHTML += text;\r\n    button.addEventListener('click', () => onItemClick(text));\r\n    //button.innerHTML = button.innerHTML + text;\r\n    li.appendChild(button);\r\n    return li;\r\n};\r\n\r\nconst menu = (navegateTo) => {\r\n    const nav = document.createElement('nav');\r\n    nav.setAttribute('id', 'menuPrincipal');\r\n    nav.classList.add('menu');\r\n\r\n    const closeBtn = document.createElement('button');\r\n    closeBtn.classList.add('close-btn');\r\n\r\n    const iconClose = document.createElement('span');\r\n    iconClose.classList.add('material-symbols-outlined');\r\n    iconClose.textContent = 'close';\r\n    closeBtn.appendChild(iconClose);\r\n    closeBtn.addEventListener('click', () => {\r\n        nav.classList.remove('open');\r\n    });\r\n\r\n    const list = document.createElement('ul');\r\n    const options = [\r\n        'Responsive',\r\n        'Ionic',\r\n        'Reactnative',\r\n        'Android',\r\n        'Consultar logs'\r\n    ];\r\n    for (let item of options) {\r\n        list.appendChild(itemMenu(item, (text) => {\r\n            navegateTo(text);\r\n            nav.classList.remove('open');\r\n        }));\r\n    }\r\n\r\n    const div = document.createElement('div');\r\n    div.appendChild(closeBtn);\r\n    div.appendChild(list);\r\n\r\n    nav.appendChild(div);\r\n    return nav;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://currency-converter/./src/components/menu.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './sass/app.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu.js */ \"./src/components/menu.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer.js */ \"./src/components/footer.js\");\n/* harmony import */ var _pages_inicioPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/inicioPage.js */ \"./src/pages/inicioPage.js\");\n/* harmony import */ var _pages_ionicPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/ionicPage.js */ \"./src/pages/ionicPage.js\");\n/* harmony import */ var _pages_reactnativePage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reactnativePage.js */ \"./src/pages/reactnativePage.js\");\n/* harmony import */ var _pages_androidPage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/androidPage.js */ \"./src/pages/androidPage.js\");\n/* harmony import */ var _pages_logPage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/logPage.js */ \"./src/pages/logPage.js\");\n\r\n\r\n//import button from './components/buttons.js';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst routesPages = (namePage) => {\r\n    const content = document.getElementById('content-page');\r\n    content.innerHTML = '';\r\n    switch (namePage) {\r\n        case 'Ionic':\r\n            content.appendChild((0,_pages_ionicPage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n            break;\r\n        case 'Reactnative':\r\n            content.appendChild((0,_pages_reactnativePage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\r\n            break;\r\n        case 'Android':\r\n            content.appendChild((0,_pages_androidPage_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\r\n            break;\r\n        case 'Consultar logs':\r\n            content.appendChild((0,_pages_logPage_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\r\n            break;\r\n        default: //'Responsive' | 'defaul'\r\n            content.appendChild((0,_pages_inicioPage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n            break;\r\n    }\r\n    // localStorage.setItem('click_menu', namePage);\r\n    // const clickLocal = localStorage.getItem('click_menu');\r\n    // console.log(clickLocal);\r\n    sessionStorage.setItem('click_menu', namePage);\r\n    const clickLocal = sessionStorage.getItem('click_menu');\r\n    console.log(clickLocal);\r\n    console.log(localStorage.length)\r\n    console.log(localStorage.key(0))\r\n    console.log(localStorage.key(1))\r\n    console.log(localStorage.getItem(localStorage.key(1)))\r\n}\r\n\r\nconst page = document.getElementById('page');\r\n//page.classList.add('principal');\r\npage.appendChild((0,_components_header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\npage.appendChild((0,_components_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((namePage) => {\r\n    routesPages(namePage)\r\n}));\r\n\r\nconst contentPage = document.createElement('main');\r\ncontentPage.setAttribute('id', 'content-page');\r\npage.appendChild(contentPage);\r\nroutesPages('default');\r\n\r\npage.appendChild((0,_components_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n\n\n//# sourceURL=webpack://currency-converter/./src/index.js?\n}");

/***/ }),

/***/ "./src/pages/androidPage.js":
/*!**********************************!*\
  !*** ./src/pages/androidPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst androidPage = ()=>{\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Aplicaciones en android';\n\n    contentPage.appendChild(titulo);\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (androidPage);\n\n//# sourceURL=webpack://currency-converter/./src/pages/androidPage.js?\n}");

/***/ }),

/***/ "./src/pages/inicioPage.js":
/*!*********************************!*\
  !*** ./src/pages/inicioPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/endpoints */ \"./src/services/endpoints.js\");\n\r\n\r\nconst inicioPage = () => {\r\n    const contentPage = document.createElement('section');\r\n    const titulo = document.createElement('h2');\r\n    titulo.textContent = 'Aplicaciones web responsive';\r\n\r\n    contentPage.appendChild(titulo);\r\n\r\n    (0,_services_endpoints__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    return contentPage;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inicioPage);\n\n//# sourceURL=webpack://currency-converter/./src/pages/inicioPage.js?\n}");

/***/ }),

/***/ "./src/pages/ionicPage.js":
/*!********************************!*\
  !*** ./src/pages/ionicPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ionicPage = ()=>{\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Aplicaciones en ionic';\n\n    contentPage.appendChild(titulo);\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ionicPage);\n\n//# sourceURL=webpack://currency-converter/./src/pages/ionicPage.js?\n}");

/***/ }),

/***/ "./src/pages/logPage.js":
/*!******************************!*\
  !*** ./src/pages/logPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst logPage = () => {\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Logs';\n\n    contentPage.appendChild(titulo);\n\n    const table = document.createElement('table');\n    const thead = document.createElement('thead');\n    const tr = document.createElement('tr');\n    const th1 = document.createElement('th');\n    th1.textContent = 'Log';\n    const th2 = document.createElement('th');\n    th2.textContent = 'Valor';\n    tr.appendChild(th1);\n    tr.appendChild(th2);\n    thead.appendChild(tr);\n\n    const tbody = document.createElement('tbody');\n\n    for (let index = 0; index < localStorage.length; index++) {\n        const keyLocal = localStorage.key(index);\n        const valueLocal = localStorage.getItem(keyLocal);\n\n        const row = document.createElement('tr');\n        const log = document.createElement('td');\n        const val = document.createElement('td');\n        log.textContent = keyLocal;\n        val.textContent = valueLocal;\n        row.appendChild(log);\n        row.appendChild(val);\n        tbody.appendChild(row);\n    }\n\n    table.appendChild(thead);\n    table.appendChild(tbody);\n    contentPage.appendChild(table);\n\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logPage);\n\n//# sourceURL=webpack://currency-converter/./src/pages/logPage.js?\n}");

/***/ }),

/***/ "./src/pages/reactnativePage.js":
/*!**************************************!*\
  !*** ./src/pages/reactnativePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reactnativePage = ()=>{\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Aplicaciones en reactnative';\n\n    contentPage.appendChild(titulo);\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reactnativePage);\n\n//# sourceURL=webpack://currency-converter/./src/pages/reactnativePage.js?\n}");

/***/ }),

/***/ "./src/services/endpoints.js":
/*!***********************************!*\
  !*** ./src/services/endpoints.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ejemplo = async ()=>{\r\n    const resp = await fetch('https://dog.ceo/api/breeds/image/random');\r\n    const body = await resp.json();    \r\n    console.log(body);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ejemplo);\n\n//# sourceURL=webpack://currency-converter/./src/services/endpoints.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;