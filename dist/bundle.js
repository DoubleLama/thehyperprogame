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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/gameDetail.js":
/*!******************************!*\
  !*** ./src/js/gameDetail.js ***!
  \******************************/
/*! exports provided: gameDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameDetail\", function() { return gameDetail; });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\nvar gameDetail = function gameDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            background_image = response.background_image,\n            developers = response.developers,\n            tags = response.tags,\n            genres = response.genres,\n            publishers = response.publishers,\n            platforms = response.platforms,\n            released = response.released,\n            description = response.description,\n            website = response.website;\n        pageContent.innerHTML = \"\\n          <section class=\\\"page-detail\\\">\\n            <div class=\\\"article\\\">\\n              <div class=\\\"poster\\\">\\n                <div class=\\\"jumbotron\\\" style=\\\"background-image: url(\".concat(background_image, \"); background-size: cover; min-height: 500px;max-height:800px;\\\" >\\n                  <div class=\\\"continer\\\">\\n                    <div class=\\\"d-flex align-items-end flex-column\\\" style=\\\"height: 400px\\\">\\n                      <div class=\\\"mt-auto pr-5 pb-3\\\">\\n                        <a href=\\\"\").concat(website, \"\\\" class=\\\"btn btn-danger\\\" target=\\\"_blank\\\">Watch website</a>\\n                      </div>\\n                    </div>\\n                  </div>\\n                </div> \\n              </div>\\n              <div class=\\\"container\\\">\\n                <h1 class=\\\"title\\\">\").concat(name, \"</h1>\\n                <p>Developers :</p>\\n                <div class =\\\"developers\\\"></div></br>\\n                  <p>Tags : </br></p>\\n                <div class=\\\"tags\\\"></div>\\n                  <p>Genres : </br></p>\\n                <div class=\\\"genres\\\"></div>\\n                  <p>Platforms : </br></p>\\n                <div class=\\\"platforms\\\"></div>\\n                  <p class=\\\"release-date\\\">Release date : <span>\").concat(released, \"</span></p>\\n                  <p class=\\\"description\\\">\").concat(description, \"</p>\\n                  <p class=\\\"publishers\\\">\").concat(publishers[0].name, \"</p>\\n              </div>\\n          </div>\\n          </section>\\n        \");\n        var articleDOM = document.querySelector(\".page-detail .article\");\n\n        for (var i = 0; i < platforms.length; i++) {\n          articleDOM.querySelector(\"div.platforms\").innerHTML += \"<a href=\\\"\\\" id=\".concat(platforms[i].platform.id, \" class=\\\"int-link mx-2\\\">\").concat(platforms[i].platform.name, \"</a>\");\n        }\n\n        for (var _i = 0; _i < tags.length; _i++) {\n          articleDOM.querySelector(\"div.tags\").innerHTML += \"<a href=\\\"\\\" id=\".concat(tags[_i].id, \" class=\\\"int-link mx-2\\\">\").concat(tags[_i].name, \"</a>\");\n        }\n\n        for (var _i2 = 0; _i2 < genres.length; _i2++) {\n          articleDOM.querySelector(\"div.genres\").innerHTML += \"<a href=\\\"\\\" id=\".concat(genres[_i2].id, \" class=\\\"int-link mx-2\\\">\").concat(genres[_i2].name, \"</a>\");\n        }\n\n        for (var _i3 = 0; _i3 < developers.length; _i3++) {\n          articleDOM.querySelector(\"div.developers\").innerHTML += \"<a href=\\\"\\\" id=\".concat(developers[_i3].id, \" class=\\\"int-link\\\">\").concat(developers[_i3].name, \"</a></br>\");\n        }\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    Object(_navbar__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"])();\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/gameDetail.js?");

/***/ }),

/***/ "./src/js/gameList.js":
/*!****************************!*\
  !*** ./src/js/gameList.js ***!
  \****************************/
/*! exports provided: gameList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameList\", function() { return gameList; });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _showMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showMore */ \"./src/js/showMore.js\");\nvar gameList = function gameList(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url + \"?dates=2020-07-01,2020-12-31&ordering=-added&page_size=27\";\n\n      if (argument !== \"\") {\n        finalURL = url + \"?search=\" + argument + \"&page_size=27\";\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var gameId = 0;\n        var cardStyle = \"\";\n        response.results.forEach(function (article) {\n          if (gameId <= 8) {\n            cardStyle = \"style='dispay:block';\";\n          } else {\n            cardStyle = \"style='display:none'\";\n          }\n\n          var platforms = \"\";\n\n          for (var j = 0; j < article.platforms.length; j++) {\n            platforms += \"\\n                  <a href=\\\"\\\" class=\\\"col-md-2 ml-3\\\"><img src=\\\"src/img/\".concat(article.platforms[j].platform.id, \".svg\\\"></a>\\n                  \");\n          }\n\n          ;\n          articles += \"\\n            <div class=\\\"col-md-4 pb-4\\\">\\n              <div id=\\\"\".concat(gameId, \"\\\" class=\\\"cardGame\\\" \").concat(cardStyle, \">\\n                <div class=\\\"card mx-auto\\\">\\n                <a href=\\\"#gameDetail/\").concat(article.id, \"\\\"> \\n                  <img src=\\\"\").concat(article.background_image, \"\\\" style=\\\"max-height:250px; max-width: 100%; border-radius: 12px 12px 0 0;\\\">\\n                </a>\\n                  <div class=\\\"row\\\">\\n                  \").concat(platforms, \"\\n                  </div>\\n                  <div class=\\\"m-3\\\">\\n                    <a href=\\\"#gameDetail/\").concat(article.id, \"\\\" class=\\\"text-white h3 int-link\\\"> \").concat(article.name, \"</a>\\n                  </div>\\n                    <p class= p-2 text-center\\\">Release date : \").concat(article.released, \"</p>\\n                </div>\\n              </div>\\n            </div>\\n            \");\n          gameId++;\n        });\n        document.querySelector(\"#showMore\").innerHTML = \"<div class=\\\"btn btn-danger col-md-2 \\\">Show more</div>\";\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n        document.querySelector(\"#showMore\").addEventListener(\"click\", _showMore__WEBPACK_IMPORTED_MODULE_1__[\"showMore\"]);\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    Object(_navbar__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"])();\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-list\\\">\\n          <div class=\\\"container\\\">\\n          <div class=\\\"articles row pt-5\\\">...loading</div>\\n          <div id=\\\"showMore\\\" class=\\\"d-flex justify-content-center mb-5\\\"></div>\\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/gameList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var header = document.getElementById(\"header\");\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"][path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/*! exports provided: navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navbar\", function() { return navbar; });\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/js/search.js\");\nvar navbar = function navbar() {\n  header.innerHTML = \"\\n    <header class=\\\"pb-3\\\">\\n        <div class=\\\"container\\\">\\n          <div class=\\\"m-2 \\\">\\n            <a href=\\\"\\\" class=\\\"h3 text-white font-weight-bold\\\">The Hyper Progame</a>\\n          </div>\\n          <div>\\n            <input type=\\\"search\\\" id=\\\"gameSearch\\\" class=\\\"form-control\\\">\\n          </div>\\n        </div>\\n    </header>\\n    \";\n  document.querySelector(\".form-control\").addEventListener(\"keypress\", function (e) {\n    if (e.code == \"Enter\") {\n      Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"searchGame\"])();\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _gameList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameList */ \"./src/js/gameList.js\");\n/* harmony import */ var _gameDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameDetail */ \"./src/js/gameDetail.js\");\n\n\nvar routes = {\n  \"\": _gameList__WEBPACK_IMPORTED_MODULE_0__[\"gameList\"],\n  \"gameList\": _gameList__WEBPACK_IMPORTED_MODULE_0__[\"gameList\"],\n  \"gameDetail\": _gameDetail__WEBPACK_IMPORTED_MODULE_1__[\"gameDetail\"]\n};\n\n\n//# sourceURL=webpack:///./src/js/routes.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! exports provided: searchGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchGame\", function() { return searchGame; });\n/* harmony import */ var _gameList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameList */ \"./src/js/gameList.js\");\nvar searchGame = function searchGame() {\n  var search = document.getElementById(\"gameSearch\").value;\n  return Object(_gameList__WEBPACK_IMPORTED_MODULE_0__[\"gameList\"])(search);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/search.js?");

/***/ }),

/***/ "./src/js/showMore.js":
/*!****************************!*\
  !*** ./src/js/showMore.js ***!
  \****************************/
/*! exports provided: showMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMore\", function() { return showMore; });\nvar showMore = function showMore() {\n  var cardGame = document.getElementsByClassName(\"cardGame\");\n  var i;\n\n  if (cardGame[17].style.display == \"none\") {\n    for (i = 9; i < 18; i++) {\n      cardGame[i].style.display = \"block\";\n    }\n  } else {\n    for (i = 18; i < 27; i++) {\n      cardGame[i].style.display = \"block\";\n      document.querySelector(\"#showMore\").style.display = \"none\";\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/js/showMore.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });