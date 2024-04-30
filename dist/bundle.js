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

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Home', argument);\n  var showMoreButton = document.getElementById('showMore');\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var LoadingContent = document.getElementById(\"loading\");\n    LoadingContent.style.display = \"none\";\n    var displayResults = function displayResults(articles, nextPageURL) {\n      // console.log(nextPageURL);\n      var resultsContent = articles.map(function (article) {\n        var platformSlugs = article.parent_platforms.map(function (platform) {\n          return \"<div class=\\\"platform\".concat(platform.platform.slug, \"\\\"></div>\");\n        }).join(' ');\n        var genres = article.genres.map(function (genre) {\n          return genre.slug;\n        }).join(\", \");\n        return \"\\n          <article class=\\\"cardGame\\\">\\n            <div class=\\\"poster\\\">\\n              <img src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"poster\\\" />\\n            </div>\\n            <div class=\\\"cardBody\\\">\\n              <h2>\").concat(article.name, \"</h2>\\n              <div class=\\\"platform\\\">\\n                \").concat(platformSlugs, \"\\n              </div>\\n              <ul class=\\\"moreInfo\\\">\\n                <li>\\n                  <p>\").concat(article.rating, \" / 5</p>\\n                  <p>Nombre de vote : \").concat(article.ratings_count, \"</p>\\n                </li>\\n                <li>\\n                  <h3>\").concat(article.released, \"</h3>\\n                </li>\\n                <li>\\n                </li>\\n                  <p>\").concat(genres, \"</p>\\n              </ul>     \\n              \\n              <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n            </div>\\n          </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML += resultsContent.join(\"\\n\"); // with += we Append new results to existing results\n\n      //vérifier si le nombre de card affiché est inférieur à 27\n      if (nextPageURL && currentPage < 3) {\n        // If there is a next page and the current page is less than 3, display the \"Show more\" button\n\n        showMoreButton.style.display = \"block\";\n        showMoreButton.addEventListener('click', function () {\n          currentPage++;\n          fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"b2f4449d19b043cbbb8d82caf5e51273\"), cleanedArgument, currentPage);\n        });\n      }\n    };\n    var storedData = null; // This variable will store the fetched data\n    var currentPage = 1; // Keep track of the current page\n    var fetchList = function fetchList(url, argument, page) {\n      var date = new Date();\n      var currentYear = date.getFullYear();\n      var month = (date.getMonth() + 1).toString().padStart(2, '0');\n      var day = date.getDate().toString().padStart(2, '0');\n      var today = \"\".concat(currentYear, \"-\").concat(month, \"-\").concat(day);\n      var limitYear = currentYear + 1;\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : \"\".concat(url, \"&dates=\").concat(today, \",\").concat(limitYear, \"-12-31&page=\").concat(page, \"&page_size=9\");\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        storedData = responseData; // Store the fetched data\n        displayResults(storedData.results, storedData.next);\n\n        // Check to hide the \"Show more\" button after new results have been fetched\n        if (!responseData.next || currentPage >= 3) {\n          if (showMoreButton) {\n            showMoreButton.style.display = \"none\";\n          }\n        }\n      })[\"catch\"](function (error) {\n        console.error('Error:', error);\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"b2f4449d19b043cbbb8d82caf5e51273\"), cleanedArgument, currentPage);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <p id=\\\"loading\\\">Loading...</p>\\n        <div class=\\\"articles\\\"></div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://progame/./src/Home.js?");

/***/ }),

/***/ "./src/PageDetail.js":
/*!***************************!*\
  !*** ./src/PageDetail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageDetail: () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  console.log('Page Detail', argument);\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description,\n        background_image = gameData.background_image,\n        website = gameData.website,\n        rating = gameData.rating,\n        parent_platforms = gameData.parent_platforms,\n        stores = gameData.stores,\n        developers = gameData.developers,\n        genres = gameData.genres,\n        tags = gameData.tags,\n        publishers = gameData.publishers;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"p.averageNote\").innerHTML = rating;\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"div.principalImage img\").setAttribute('src', background_image);\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.webSite span\").innerHTML = website;\n      var platformNames = parent_platforms.map(function (platform) {\n        return platform.platform.name;\n      });\n      articleDOM.querySelector(\"p.platforms span\").innerHTML = platformNames.join(\", \");\n      var developersNames = developers.map(function (developer) {\n        return developer.name;\n      });\n      articleDOM.querySelector(\"p.developer span\").innerHTML = developersNames.join(\", \");\n      var genreNames = genres.map(function (genre) {\n        return genre.name;\n      });\n      articleDOM.querySelector(\"p.genre span\").innerHTML = genreNames.join(\", \");\n      var tagNames = tags.map(function (tag) {\n        return tag.name;\n      });\n      articleDOM.querySelector(\"p.tags span\").innerHTML = tagNames.join(\", \");\n      var publisherNames = publishers.map(function (publisher) {\n        return publisher.name;\n      });\n      articleDOM.querySelector(\"p.publisher span\").innerHTML = publisherNames.join(\", \");\n      var storesParagraph = articleDOM.querySelector(\"div.storeBody\");\n      storesParagraph.innerHTML = ''; // Clear the paragraph\n      stores.forEach(function (store) {\n        var a = document.createElement('a');\n        var url = \"https://\".concat(store.store.domain);\n        a.setAttribute('href', url);\n        a.textContent = store.store.name;\n        storesParagraph.appendChild(a);\n        var br = document.createElement('br');\n        storesParagraph.appendChild(br);\n      });\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"b2f4449d19b043cbbb8d82caf5e51273\"))\n      // fetch(`detail.json`)\n      .then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <p class=\\\"averageNote\\\"></p>\\n          <p class=\\\"numberOfNote\\\"></p>\\n\\n          <h1 class=\\\"title\\\"></h1>\\n          <div class=\\\"principalImage\\\">\\n            <img src=\\\"\\\" alt=\\\"poster\\\" />\\n          </div>\\n          <p class=\\\"description\\\"></p>\\n          <p class=\\\"release-date\\\">Release date : <span></span></p>\\n          <p class=\\\"developer\\\">Developer : <span></span></p>\\n          <p class=\\\"tags\\\">Tags : <span></span></p>\\n          <p class=\\\"genre\\\">Genre : <span></span></p>\\n          <p class=\\\"publisher\\\">Publisher : <span></span></p>\\n          <p class=\\\"platforms\\\">Platforms : <span></span></p>\\n          <p class=\\\"webSite\\\">Website : <span></span></p>\\n          <div class=\\\"stores\\\">\\n            <h3>BUY</h3>\\n            <div class=\\\"storeBody\\\"></div>\\n          </div>\\n          <div class=\\\"video\\\">\\n            <h3>TRAILER</h3>\\n            <video src=\\\"\\\"></video>\\n          </div>\\n          <div class=\\\"screenShots\\\">\\n            <h3>SCREENSHOTS</h3>\\n          </div>\\n\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://progame/./src/PageDetail.js?");

/***/ }),

/***/ "./src/PageList.js":
/*!*************************!*\
  !*** ./src/PageList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Page List', argument);\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var displayResults = function displayResults(articles) {\n      var resultsContent = articles.map(function (article) {\n        var platformSlugs = article.platforms.map(function (platform) {\n          return \"<p>\".concat(platform.platform.slug, \"</p>\");\n        }).join(\"\\n\");\n        var genres = article.genres.map(function (genre) {\n          return genre.slug;\n        }).join(\", \");\n        return \"\\n          <article class=\\\"cardGame\\\">\\n            <div class=\\\"poster\\\">\\n              <img src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"poster\\\" />\\n            </div>\\n            <h2>\").concat(article.name, \"</h2>\\n            <h3>\").concat(article.released, \"</h3>\\n            <p>Platforms</p>\\n            \").concat(platformSlugs, \"\\n            <p>\").concat(article.rating, \" / 5</p>\\n            <p>Nombre de vote : \").concat(article.ratings_count, \"</p>\\n            <p>\").concat(genres, \"</p>\\n            <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n          </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument, \"&page_size=9&ordering=-released\") : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"b2f4449d19b043cbbb8d82caf5e51273\"), cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">Loading...</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://progame/./src/PageList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\n\n\n//mettre ce code qui nous servira de router \nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\n\n//Contenu\nconsole.log(\"HEllo\");\nwindow.onload = function () {\n  //Searching from Home page\n  var form = document.querySelector(\"form\");\n  var keyWords = document.getElementById(\"search\");\n  if (form && keyWords) {\n    keyWords.addEventListener('input', function () {\n      console.log(keyWords.value);\n    });\n    form.addEventListener('submit', function (event) {\n      // Prevent the form from submitting normally\n      console.log(\"Je suis dans listener de form\");\n      event.preventDefault();\n      var keyWordsValue = keyWords.value;\n      if (keyWordsValue) {\n        console.log(keyWordsValue);\n        // Change the URL to call routes.js and then show search results\n        console.log(\"#pagelist/\".concat(keyWordsValue));\n        window.location.hash = \"#pagelist/\".concat(keyWordsValue);\n      }\n      ;\n    });\n  } else {\n    console.error('Form or keywords field not found');\n  }\n};\n\n//# sourceURL=webpack://progame/./src/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList */ \"./src/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/PageDetail.js\");\n\n\n\nvar routes = {\n  '': _Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://progame/./src/routes.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://progame/./src/style/index.scss?");

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://progame/./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://progame/./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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