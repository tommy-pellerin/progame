/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./src/Home.js": (
    /*!*********************!*\
      !*** ./src/Home.js ***!
      \*********************/
    /***/
    function srcHomeJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Home', argument);\n  var showMoreButton = document.getElementById('showMore');\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var LoadingContent = document.getElementById(\"loading\");\n    LoadingContent.style.display = \"none\";\n\n    // Function to fetch more results\n    function fetchMoreResults() {\n      console.log(\"click\");\n      fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"b2f4449d19b043cbbb8d82caf5e51273\"), cleanedArgument, currentPage);\n    }\n    var displayResults = function displayResults(articles, nextPageURL) {\n      console.log(articles);\n      var resultsContent = articles.map(function (article) {\n        var platformSlugs = article.parent_platforms.map(function (platform) {\n          return \"<div class=\\\"platform\".concat(platform.platform.slug, \"\\\"></div>\");\n        }).join(' ');\n        var genres = article.genres.map(function (genre) {\n          return genre.slug;\n        }).join(\", \");\n        var image = article.background_image ? \"<img src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"poster\\\" />\") : \"<div class=\\\"no_image\\\" alt=\\\"poster\\\" /></div>\";\n        return \"\\n          <article class=\\\"cardGame\\\">\\n          <div class=\\\"poster\\\">\\n            \".concat(image, \"\\n          </div>\\n            <div class=\\\"cardBody\\\">\\n              <a class=\\\"smallTitle\\\" href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.name, \"</a>\\n              \\n              <div class=\\\"platform\\\">\\n                \").concat(platformSlugs, \"\\n              </div>\\n              <ul class=\\\"moreInfo\\\">\\n                <li>\\n                  <p>\").concat(article.rating, \" / 5</p>\\n                  <p>Nombre de vote : \").concat(article.ratings_count, \"</p>\\n                </li>\\n                <li>\\n                  <h3>\").concat(article.released, \"</h3>\\n                </li>\\n                <li>\\n                </li>\\n                  <p>\").concat(genres, \"</p>\\n              </ul>     \\n              \\n              \\n            </div>\\n          </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML += resultsContent.join(\"\\n\"); // with += we Append new results to existing results\n\n      //vérifier si le nombre de card affiché est inférieur à 27\n      if (nextPageURL && currentPage < 3) {\n        // If there is a next page and the current page is less than 3, display the \"Show more\" button\n\n        showMoreButton.style.display = \"block\";\n\n        // Remove any existing event listeners\n        showMoreButton.removeEventListener('click', fetchMoreResults);\n\n        // Add event listener\n        showMoreButton.addEventListener('click', fetchMoreResults);\n      }\n    };\n    var storedData = null; // This variable will store the fetched data\n    var currentPage = 1; // Keep track of the current page\n    var fetchList = function fetchList(url, argument, page) {\n      console.log(\"la page actuelle: \".concat(page));\n      var date = new Date();\n      var currentYear = date.getFullYear();\n      var month = (date.getMonth() + 1).toString().padStart(2, '0');\n      var day = date.getDate().toString().padStart(2, '0');\n      var today = \"\".concat(currentYear, \"-\").concat(month, \"-\").concat(day);\n      var limitYear = currentYear + 1;\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument, \"&page=\").concat(page, \"&page_size=9&ordering=-released\") : \"\".concat(url, \"&dates=\").concat(today, \",\").concat(limitYear, \"-12-31&page=\").concat(page, \"&page_size=9\");\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        storedData = responseData; // Store the fetched data\n        displayResults(storedData.results, storedData.next);\n        // Increment currentPage after results have been displayed\n        currentPage++;\n\n        // Check to hide the \"Show more\" button after new results have been fetched\n        if (!responseData.next || currentPage > 3) {\n          if (showMoreButton) {\n            console.log(\"3 page affiché\");\n            showMoreButton.style.display = \"none\";\n            currentPage = 1;\n          }\n        }\n      })[\"catch\"](function (error) {\n        console.error('Error:', error);\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"b2f4449d19b043cbbb8d82caf5e51273\"), cleanedArgument, currentPage);\n  };\n  var render = function render() {\n    welcome.innerHTML = \"\\n    <h2>Welcome,</h2>\\n    <p>I'm learning to code an Single Web Page using javascript, API, SASS and webpack</p>\\n    \";\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <p id=\\\"loading\\\">Loading...</p>\\n        <div class=\\\"articles\\\"></div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://progame/./src/Home.js?");

      /***/
    }),
    /***/"./src/PageDetail.js": (
    /*!***************************!*\
      !*** ./src/PageDetail.js ***!
      \***************************/
    /***/
    function srcPageDetailJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageDetail: () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  console.log('Page Detail', argument);\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    document.getElementById('showMore').style.display = \"none\";\n    var displayGame = function displayGame(gameData) {\n      welcome.innerHTML = ''; //delete welcom content\n\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description,\n        background_image = gameData.background_image,\n        website = gameData.website,\n        rating = gameData.rating,\n        platforms = gameData.platforms,\n        stores = gameData.stores,\n        developers = gameData.developers,\n        genres = gameData.genres,\n        tags = gameData.tags,\n        publishers = gameData.publishers,\n        ratings_count = gameData.ratings_count;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      if (background_image) {\n        // Create a new img element\n        var img = document.createElement('img');\n        img.src = background_image;\n\n        // Append the img element to the div\n        var div = document.querySelector('div.principalImage');\n        div.appendChild(img);\n      } else {\n        // Create a new div element\n        var divElement = document.createElement('div');\n        // Add a class to the div to match the css class\n        divElement.classList.add('no_image');\n\n        // Append the div element to the div\n        var _div = document.querySelector('div.principalImage');\n        _div.appendChild(divElement);\n      }\n      ;\n      articleDOM.querySelector(\"a.webSite\").setAttribute('href', website);\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.averageNote span\").innerHTML = rating;\n      articleDOM.querySelector(\"p.numberOfNote span\").innerHTML = ratings_count;\n      articleDOM.querySelector(\"p.description\").innerHTML += description;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      var platformLinks = platforms.map(function (platform) {\n        return \"<a href=\\\"#pagelist/platforms=\".concat(platform.platform.id, \"\\\">\").concat(platform.platform.name, \"</a>\");\n      });\n      articleDOM.querySelector(\"div.platforms\").innerHTML += platformLinks.join(\", \");\n      var developersLinks = developers.map(function (developer) {\n        return \"<a href=\\\"#pagelist/developers=\".concat(developer.slug, \"\\\">\").concat(developer.name, \"</a>\");\n      });\n      articleDOM.querySelector(\"div.developer\").innerHTML += developersLinks.join(\", \");\n      var genreLinks = genres.map(function (genre) {\n        return \"<a href=\\\"#pagelist/genres=\".concat(genre.slug, \"\\\">\").concat(genre.name, \"</a>\");\n      });\n      articleDOM.querySelector(\"div.genre\").innerHTML += genreLinks.join(\", \");\n      var tagLinks = tags.map(function (tag) {\n        return \"<a href=\\\"#pagelist/tags=\".concat(tag.slug, \"\\\">\").concat(tag.name, \"</a>\");\n      });\n      articleDOM.querySelector(\"div.tags\").innerHTML += tagLinks.join(\", \");\n      var publisherLinks = publishers.map(function (publisher) {\n        return \"<a href=\\\"#pagelist/publisher=\".concat(publisher.slug, \"\\\">\").concat(publisher.name, \"</a>\");\n      });\n      articleDOM.querySelector(\"div.publisher span\").innerHTML += publisherLinks.join(\", \");\n      var storesParagraph = articleDOM.querySelector(\"div.storeBody\");\n      storesParagraph.innerHTML = ''; // Clear the paragraph\n      stores.forEach(function (store) {\n        var a = document.createElement('a');\n        var url = \"https://\".concat(store.store.domain);\n        a.setAttribute('href', url);\n        a.textContent = store.store.name;\n        storesParagraph.appendChild(a);\n        var br = document.createElement('br');\n        storesParagraph.appendChild(br);\n      });\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"b2f4449d19b043cbbb8d82caf5e51273\"))\n      // fetch(`detail.json`)\n      .then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <div class=\\\"principalImage\\\"></div>\\n          <a class=\\\"webSite\\\" href=\\\"\\\">Check Website</a>\\n\\n          <div class=\\\"titleAndNote\\\">\\n            <h1 class=\\\"title\\\"></h1>\\n            <div class=\\\"notes\\\">\\n              <p class=\\\"averageNote\\\"><span></span>/5&nbsp;</p>\\n              <p class=\\\"numberOfNote\\\">-&nbsp;<span></span>&nbsp;votes</p>\\n            </div>\\n          </div>\\n          \\n          <p class=\\\"description\\\"><strong>Plot</strong> </br></p>\\n          <div class=\\\"dateDevPlatformPublisher\\\">\\n            <p class=\\\"release-date\\\"><strong>Release date</strong> </br><span></span></p>\\n            <div class=\\\"developer\\\">\\n              <p>Developer</p>\\n            </div>\\n            <div class=\\\"platforms\\\">\\n            <p>Platforms</p>\\n            </div>\\n            <div class=\\\"publisher\\\">\\n            <p>Publisher</p>\\n            </div>\\n          </div>\\n          <div class=\\\"genreTags\\\">\\n            <div class=\\\"genre\\\">\\n            <p>Genre</p>\\n            </div>\\n            <div class=\\\"tags\\\">\\n            <p>Tags</p>\\n            </div>\\n          </div>\\n          \\n\\n          <div class=\\\"stores\\\">\\n            <p class=\\\"redTitle\\\">BUY</p>\\n            <div class=\\\"storeBody\\\"></div>\\n          </div>\\n          <div class=\\\"video\\\">\\n            <p class=\\\"redTitle\\\">TRAILER</p>\\n            <video src=\\\"\\\"></video>\\n          </div>\\n          <div class=\\\"screenShots\\\">\\n            <p class=\\\"redTitle\\\">SCREENSHOTS</p>\\n          </div>\\n\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://progame/./src/PageDetail.js?");

      /***/
    }),
    /***/"./src/PageList.js": (
    /*!*************************!*\
      !*** ./src/PageList.js ***!
      \*************************/
    /***/
    function srcPageListJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('PageList', argument);\n  var showMoreButton = document.getElementById('showMore');\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var LoadingContent = document.getElementById(\"loading\");\n    LoadingContent.style.display = \"none\";\n\n    // Function to fetch more results\n    function fetchMoreResults() {\n      console.log(\"click\");\n      fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"b2f4449d19b043cbbb8d82caf5e51273\"), cleanedArgument, currentPage);\n    }\n    ;\n    var displayResults = function displayResults(articles, nextPageURL) {\n      welcome.innerHTML = ''; //delete welcom content\n      console.log(articles);\n      var resultsContent = articles.map(function (article) {\n        var platformSlugs = article.parent_platforms.map(function (platform) {\n          return \"<div class=\\\"platform\".concat(platform.platform.slug, \"\\\"></div>\");\n        }).join(' ');\n        var genres = article.genres.map(function (genre) {\n          return genre.slug;\n        }).join(\", \");\n        var image = article.background_image ? \"<img src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"poster\\\" />\") : \"<div class=\\\"no_image\\\" alt=\\\"poster\\\" /></div>\";\n        return \"\\n          <article class=\\\"cardGame\\\">\\n            <div class=\\\"poster\\\">\\n              \".concat(image, \"\\n            </div>\\n            <div class=\\\"cardBody\\\">\\n              <a class=\\\"smallTitle\\\" href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.name, \"</a>\\n              \\n              <div class=\\\"platform\\\">\\n                \").concat(platformSlugs, \"\\n              </div>\\n              <ul class=\\\"moreInfo\\\">\\n                <li>\\n                  <p>\").concat(article.rating, \" / 5</p>\\n                  <p>Nombre de vote : \").concat(article.ratings_count, \"</p>\\n                </li>\\n                <li>\\n                  <h3>\").concat(article.released, \"</h3>\\n                </li>\\n                <li>\\n                </li>\\n                  <p>\").concat(genres, \"</p>\\n              </ul>     \\n              \\n              \\n            </div>\\n          </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML += resultsContent.join(\"\\n\"); // with += we Append new results to existing results\n\n      //vérifier si le nombre de card affiché est inférieur à 27\n      if (nextPageURL && currentPage < 3) {\n        // If there is a next page and the current page is less than 3, display the \"Show more\" button\n\n        showMoreButton.style.display = \"block\";\n\n        // Remove any existing event listeners\n        showMoreButton.removeEventListener('click', fetchMoreResults);\n\n        // Add event listener\n        showMoreButton.addEventListener('click', fetchMoreResults);\n      }\n    };\n    var storedData = null; // This variable will store the fetched data\n    var currentPage = 1;\n    var fetchList = function fetchList(url, argument, page) {\n      console.log(\"la page actuelle: \".concat(page));\n      var date = new Date();\n      var currentYear = date.getFullYear();\n      var month = (date.getMonth() + 1).toString().padStart(2, '0');\n      var day = date.getDate().toString().padStart(2, '0');\n      var today = \"\".concat(currentYear, \"-\").concat(month, \"-\").concat(day);\n      var limitYear = currentYear + 1;\n      var finalURL = argument ? \"\".concat(url, \"&\").concat(argument, \"&page=\").concat(page, \"&page_size=9&ordering=-released\") : \"\".concat(url, \"&dates=\").concat(today, \",\").concat(limitYear, \"-12-31&page=\").concat(page, \"&page_size=9\");\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        storedData = responseData; // Store the fetched data\n        displayResults(storedData.results, storedData.next);\n        // Increment currentPage after results have been displayed\n        currentPage++;\n\n        // Check to hide the \"Show more\" button after new results have been fetched\n        if (!responseData.next || currentPage > 3) {\n          if (showMoreButton) {\n            console.log(\"3 page affiché\");\n            showMoreButton.style.display = \"none\";\n            currentPage = 1;\n          }\n        }\n      })[\"catch\"](function (error) {\n        console.error('Error:', error);\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"b2f4449d19b043cbbb8d82caf5e51273\"), cleanedArgument, currentPage);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <p id=\\\"loading\\\">Loading...</p>\\n        <div class=\\\"articles\\\"></div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://progame/./src/PageList.js?");

      /***/
    }),
    /***/"./src/index.js": (
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/
    function srcIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\n\n\n\n//mettre ce code qui nous servira de router \nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"][pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\n\n//Contenu\nconsole.log(\"HEllo\");\nwindow.onload = function () {\n  //Searching from Home page\n  var form = document.querySelector(\"form\");\n  var keyWords = document.getElementById(\"search\");\n  if (form && keyWords) {\n    keyWords.addEventListener('input', function () {\n      console.log(keyWords.value);\n    });\n    form.addEventListener('submit', function (event) {\n      // Prevent the form from submitting normally\n      console.log(\"Je suis dans listener de form\");\n      event.preventDefault();\n      var keyWordsValue = keyWords.value;\n      if (keyWordsValue) {\n        console.log(keyWordsValue);\n        // Change the URL to call routes.js and then show search results\n        console.log(\"#pagelist/search=\".concat(keyWordsValue));\n        window.location.hash = \"#pagelist/search=\".concat(keyWordsValue);\n      }\n      ;\n    });\n  } else {\n    console.error('Form or keywords field not found');\n  }\n};\n\n//# sourceURL=webpack://progame/./src/index.js?");

      /***/
    }),
    /***/"./src/routes.js": (
    /*!***********************!*\
      !*** ./src/routes.js ***!
      \***********************/
    /***/
    function srcRoutesJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList */ \"./src/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/PageDetail.js\");\n\n\n\nvar routes = {\n  '': _Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://progame/./src/routes.js?");

      /***/
    }),
    /***/"./src/style/index.scss": (
    /*!******************************!*\
      !*** ./src/style/index.scss ***!
      \******************************/
    /***/
    function srcStyleIndexScss(module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_1_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://progame/./src/style/index.scss?");

      /***/
    }),
    /***/"./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js": (
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js ***!
      \***************************************************************************************************************************/
    /***/
    function node_modulesPnpmCssLoader711_webpack5910_webpackCli514_Node_modulesCssLoaderDistRuntimeApiJs(module) {
      eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://progame/./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js?");

      /***/
    }),
    /***/"./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js": (
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
      \************************************************************************************************************************************/
    /***/
    function node_modulesPnpmCssLoader711_webpack5910_webpackCli514_Node_modulesCssLoaderDistRuntimeNoSourceMapsJs(module) {
      eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://progame/./node_modules/.pnpm/css-loader@7.1.1_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js?");

      /***/
    }),
    /***/"./index.html": (
    /*!********************!*\
      !*** ./index.html ***!
      \********************/
    /***/
    function indexHtml(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_html_loader_5_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/html-loader@5.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/.pnpm/html-loader@5.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_pnpm_html_loader_5_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_html_loader_5_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/images/favicon1.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./dist/bundle.css */ \"./dist/bundle.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './favicon1.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./dist/bundle.js */ \"./dist/bundle.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_pnpm_html_loader_5_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_pnpm_html_loader_5_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_pnpm_html_loader_5_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_pnpm_html_loader_5_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <link rel=\\\"icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n    <title>ProGame</title>\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" />\\n  </head>\\n  <body>\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"img\\\">\\n    <div class=\\\"container\\\">\\n      <header>\\n        <a class=\\\"redTitle\\\" href=\\\"\\\">The Hyper ProGame</a>\\n        \\n        <form>\\n          <div class=\\\"searchBox\\\">\\n            <div class=\\\"searchIcon\\\"></div>\\n            <label for=\\\"search\\\"></label>\\n            <input type=\\\"text\\\" name=\\\"search\\\" id=\\\"search\\\" placeholder=\\\"Find a game...\\\">\\n          </div>\\n          <div class=\\\"submitBox\\\">\\n            <label for=\\\"\\\"></label>\\n            <button type=\\\"submit\\\" id=\\\"submit\\\">Submit</button>\\n          </div>\\n        </form>\\n      </header>\\n      <section id=\\\"welcome\\\"></section>\\n      <section id=\\\"pageContent\\\">Choisissez un lien</section>\\n      <div class=\\\"showmoreBox\\\">\\n        <button id=\\\"showMore\\\" >Show more</button>\\n      </div>\\n\\n      <footer>\\n        <p>Tommy Pellerin @2024 - Fictionnal website for exercice</p>\\n      </footer>\\n\\n     </div><!--end of container -->\\n    \\n    <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"><\" + \"/script>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://progame/./index.html?");

      /***/
    }),
    /***/"./node_modules/.pnpm/html-loader@5.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js": (
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/.pnpm/html-loader@5.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js ***!
      \********************************************************************************************************************************/
    /***/
    function node_modulesPnpmHtmlLoader500_webpack5910_webpackCli514_Node_modulesHtmlLoaderDistRuntimeGetUrlJs(module) {
      eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://progame/./node_modules/.pnpm/html-loader@5.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js?");

      /***/
    }),
    /***/"./dist/bundle.js": (
    /*!************************!*\
      !*** ./dist/bundle.js ***!
      \************************/
    /***/
    function distBundleJs(module, __unused_webpack_exports, __webpack_require__) {
      eval("module.exports = __webpack_require__.p + \"381cddfb73b3b14fef28.js\";\n\n//# sourceURL=webpack://progame/./dist/bundle.js?");

      /***/
    }),
    /***/"./dist/bundle.css": (
    /*!*************************!*\
      !*** ./dist/bundle.css ***!
      \*************************/
    /***/
    function distBundleCss(module, __unused_webpack_exports, __webpack_require__) {
      eval("module.exports = __webpack_require__.p + \"822e9a9c19705ee0b00f.css\";\n\n//# sourceURL=webpack://progame/./dist/bundle.css?");

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/id: moduleId,
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  (function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
      /******/var getter = module && module.__esModule ? /******/function () {
        return module['default'];
      } : /******/function () {
        return module;
      };
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (function () {
    /******/ // define getter functions for harmony exports
    /******/__webpack_require__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (function () {
    /******/__webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (function () {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/
  (function () {
    /******/__webpack_require__.p = "";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/
  (function () {
    /******/__webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/
    var installedChunks = {
      /******/"main": 0
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/
  var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();