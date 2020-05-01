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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameDetail\", function() { return gameDetail; });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\nvar gameDetail = function gameDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            background_image = response.background_image,\n            developers = response.developers,\n            tags = response.tags,\n            genres = response.genres,\n            publishers = response.publishers,\n            platforms = response.platforms,\n            released = response.released,\n            description = response.description,\n            website = response.website,\n            clip = response.clip,\n            rating = response.rating,\n            ratings_count = response.ratings_count,\n            stores = response.stores,\n            id = response.id;\n        pageContent.innerHTML = \"\\n          <section class=\\\"page-detail\\\">\\n            <div class=\\\"article\\\">\\n              <div class=\\\"poster\\\">\\n                <div class=\\\"jumbotron\\\" style=\\\"background-image: url(\".concat(background_image, \"); background-size: cover; min-height: 500px;max-height:800px;\\\" >\\n                  <div class=\\\"continer\\\">\\n                    <div class=\\\"d-flex align-items-end flex-column\\\" style=\\\"height: 400px\\\">\\n                      <div class=\\\"mt-auto pr-5 pb-3\\\">\\n                        <a href=\\\"\").concat(website, \"\\\" class=\\\"btn btn-danger\\\" target=\\\"_blank\\\">Watch website</a>\\n                      </div>\\n                    </div>\\n                  </div>\\n                </div> \\n              </div>\\n              <h1 class=\\\"title text-center\\\">\").concat(name, \"</h1>\\n              <div class=\\\"container\\\">\\n              <span class=\\\"rating btn btn-danger\\\">\").concat(rating, \"/5 </span><span class=\\\"sub\\\"> \").concat(ratings_count, \" votes<span></br>\\n              <h2 class=\\\"text-center\\\">Game Info</h2>\\n                <div class=\\\"row\\\">\\n                <div class =\\\"col-md-3\\\">\\n                  <h4 class=\\\"mt-3\\\">Release date :</br></h4>\\n                  <div class=\\\"release-date\\\">\").concat(released, \"</div>\\n                  </div>\\n                  \\n                    <div class =\\\"col-md-3\\\">\\n                      <h4 class=\\\"mt-3\\\">Platforms : </br></h4>\\n                      <div class=\\\"platforms\\\"></br></div></br>\\n                      </div>\\n                      \\n                        <div class =\\\"col-md-3\\\">\\n                        <h4 class=\\\"mt-3\\\">Publishers: </h4>\\n                        <a href=\\\"#gameList/games&ordering=-added&publishers=\").concat(publishers[0].id, \"\\\" class=\\\"publishers\\\">\").concat(publishers[0].name, \"</a>\\n                        </div>\\n                <div class =\\\"col-md-3\\\">\\n                <h4 class=\\\"mt-3\\\">Developers :</br></h4>\\n                  <div class =\\\"developers\\\"></div></br>\\n                  </div>\\n                  <div class =\\\"col-md-3\\\">\\n                  <h4 class=\\\"mt-3\\\">Stores :</br></h4>\\n                  <div class=\\\"stores\\\"></div></br>\\n                  </div>\\n                  <div class =\\\"col-md-3\\\">\\n                    <h4 class=\\\"mt-3\\\">Genres : </br></h4>\\n                    <div class=\\\"genres\\\"></div></br>\\n                    </div>\\n                  <div class =\\\"col-md-6\\\">\\n                        <h4 class=\\\"text-center mt-3\\\">Tags : </h4>\\n                        <div class=\\\"tags\\\"></br></div></br>\\n                        </div>\\n                  <div class=\\\"col-md-10\\\">\\n                <h2 class=\\\"text-center mt-3\\\">Description :</br></h2>\\n                  <div class=\\\"description\\\">\").concat(description, \"</div></br>\\n                  </div>\\n                </div>\\n                <h4 class=\\\"mt-3\\\">Screenshots :</br></h4>\\n                  <div class=\\\"screenshots row text-center text-lg-left\\\"></div></br>\\n                <h4 class=\\\"mt-3\\\">Trailer :</br></h4>\\n                  <div class=\\\"trailer col-md-6\\\"> </div></br>\\n                <h4 class=\\\"mt-3\\\">Youtube :</br></h4>\\n                  <div class=\\\"youtube row text-center text-lg-left\\\"></div></br>\\n                <h4 class=\\\"mt-3\\\">Similar games :</br></h4>\\n                  <div class=\\\"suggested row text-center text-lg-left\\\"></div></br>\\n              </div>\\n            </div>\\n          </section>\\n        \");\n        var articleDOM = document.querySelector(\".page-detail .article\");\n\n        for (var i = 0; i < platforms.length; i++) {\n          articleDOM.querySelector(\"div.platforms\").innerHTML += \"<a href=\\\"#gameList/&dates=2019-09-01,2020-05-01&platforms=\".concat(platforms[i].platform.id, \"\\\" id=\").concat(platforms[i].platform.id, \" class=\\\"int-link mx-2\\\">\").concat(platforms[i].platform.name, \"</a>\");\n        }\n\n        for (var _i = 0; _i < tags.length; _i++) {\n          articleDOM.querySelector(\"div.tags\").innerHTML += \"<a href=\\\"#gameList/games&ordering=-rating&tags=\".concat(tags[_i].id, \"\\\" id=\").concat(tags[_i].id, \" class=\\\"int-link mx-2\\\">\").concat(tags[_i].name, \"</a>\");\n        }\n\n        for (var _i2 = 0; _i2 < genres.length; _i2++) {\n          articleDOM.querySelector(\"div.genres\").innerHTML += \"<a href=\\\"#gameList/games&ordering=-rating&genres=\".concat(genres[_i2].id, \"\\\" id=\").concat(genres[_i2].id, \" class=\\\"int-link mx-2\\\">\").concat(genres[_i2].name, \"</a>\");\n        }\n\n        for (var _i3 = 0; _i3 < developers.length; _i3++) {\n          articleDOM.querySelector(\"div.developers\").innerHTML += \"<a href=\\\"#gameList/games&ordering=-rating&developers=\".concat(developers[_i3].id, \"\\\" id=\").concat(developers[_i3].id, \" class=\\\"int-link\\\">\").concat(developers[_i3].name, \"</a></br>\");\n        }\n\n        for (var _i4 = 0; _i4 < stores.length; _i4++) {\n          articleDOM.querySelector(\"div.stores\").innerHTML += \"<a href=\\\"\".concat(stores[_i4].url, \"\\\" id=\").concat(stores[_i4].id, \">\").concat(stores[_i4].store.name, \"</a></br>\");\n        }\n\n        articleDOM.querySelector(\"div.trailer\").innerHTML += \"\\n                              <video controls>\\n                                <source src=\\\"\".concat(clip.clip, \"\\\" type=\\\"video/mp4\\\">\\n                                  Sorry, your browser doesn't support embedded videos.\\n                              </video>\");\n        fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/youtube\")).then(function (response1) {\n          return response1.json();\n        }).then(function (response1) {\n          for (var _i5 = 0; _i5 < 3; _i5++) {\n            articleDOM.querySelector(\"div.youtube\").innerHTML += \"\\n              \\n                          \\n                              <div class=\\\"col-lg-4 col-md-6 col-sm-10 my-3\\\">\\n                              <iframe id=\\\"ytplayer\\\" type=\\\"text/html\\\" \\n                              src=\\\"http://www.youtube.com/embed/\".concat(response1.results[_i5].external_id, \"?autoplay=0&origin=http://example.com\\\"\\n                              frameborder=\\\"0\\\"/>\\n                              </div>\");\n          }\n        });\n        fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/screenshots\")).then(function (response2) {\n          return response2.json();\n        }).then(function (response2) {\n          for (var _i6 = 0; _i6 < 4; _i6++) {\n            articleDOM.querySelector(\"div.screenshots\").innerHTML += \"\\n                              <div class=\\\"col-lg-6 col-md-6 col-6 mb-4\\\">\\n                                <a href=\\\"\".concat(response2.results[_i6].image, \"\\\">\\n                                      <img class=\\\"img-fluid\\\" src=\\\"\").concat(response2.results[_i6].image, \"\\\" alt=\\\"\\\">\\n                                    </a>\\n                              </div>\");\n          }\n        });\n        fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/suggested\")).then(function (response3) {\n          return response3.json();\n        }).then(function (response3) {\n          var suggestedGames = response3.results;\n\n          for (var _i7 = 0; _i7 < 6; _i7++) {\n            var _platforms = \"\";\n\n            suggestedGames[_i7].platforms.forEach(function (element) {\n              _platforms += \"<a href=\\\"#gameList/&dates=2019-09-01,2020-05-01&platforms=\".concat(element.platform.id, \"\\\" class=col-md-2 pb-2 platform \\\"><img src=\\\"src/img/\").concat(element.platform.id, \".svg\\\"></a>\");\n            });\n\n            articleDOM.querySelector(\"div.suggested\").innerHTML += \"\\n              <div class=\\\"col-md-4 pb-4 cardShowInfo\\\">\\n                <div id=\\\"game\".concat(suggestedGames[_i7].id, \"\\\">\\n                  <div class=\\\"card mx-auto\\\">\\n                    <img src=\\\"\").concat(suggestedGames[_i7].background_image, \"\\\" class=\\\"gameImg show\\\">\\n                    <div class=\\\" my-2 mx-2\\\">\\n                      <a href=\\\"#gameDetail/\").concat(suggestedGames[_i7].id, \"\\\" class=\\\"text-white h3 int-link\\\"> \").concat(suggestedGames[_i7].name, \"</a>\\n                    </div>\\n                    <div class=\\\"row mx-0 \\\">\\n                      \").concat(_platforms, \"\\n                    </div>\\n                  </div>\\n                </div>\\n              </div>\\n            \");\n          }\n        });\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    Object(_navbar__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"])();\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n      <div style=\\\"height: 35vh\\\">\\n      </div>\\n        <div class=\\\"articles d-flex justify-content-center\\\">\\n            <div class=\\\"spinner-border text-white\\\" role=\\\"status\\\">\\n          </div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/gameDetail.js?");

/***/ }),

/***/ "./src/js/gameList.js":
/*!****************************!*\
  !*** ./src/js/gameList.js ***!
  \****************************/
/*! exports provided: gameList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameList\", function() { return gameList; });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ \"./src/js/tools.js\");\nvar gameList = function gameList(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      console.log(url);\n      console.log(argument);\n      var finalURL = url + \"?ordering=-added&dates=2020-05-01,2020-12-31&page_size=27\";\n\n      if (argument !== \"\") {\n        finalURL = url + \"?search=\" + argument + \"&page_size=27\";\n      }\n\n      console.log(finalURL);\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var gameId = -1;\n        var cardStyle = \"\";\n        response.results.forEach(function (article) {\n          gameId++;\n\n          if (gameId <= 8) {\n            cardStyle = \"style='dispay:block';\";\n          } else {\n            cardStyle = \"style='display:none'\";\n          }\n\n          var platforms = \"\";\n\n          for (var i = 0; i < article.platforms.length; i++) {\n            platforms += \"<a href=\\\"#gameList/&dates=2019-09-01,2020-05-01&platforms=\".concat(article.platforms[i].platform.id, \"\\\" class=\\\"platform\").concat(article.platforms[i].platform.id, \" col-md-2 pb-2 platform\\\"><img src=\\\"src/img/\").concat(article.platforms[i].platform.id, \".svg\\\"></a>\");\n          }\n\n          ;\n          var genres = \"\";\n\n          for (var j = 0; j < article.genres.length; j++) {\n            genres += \"<span class=\\\"col-4 text-white invisible\\\">\".concat(article.genres[j].name, \"</span>\");\n          }\n\n          ;\n          articles += \"\\n            <div class=\\\"col-md-4 pb-4 cardShowInfo\\\">\\n              <div id=\\\"\".concat(gameId, \"\\\" class=\\\"cardGame\\\" \").concat(cardStyle, \">\\n                <div class=\\\"card mx-auto\\\">\\n                <img src=\\\"\").concat(article.background_image, \"\\\" class=\\\"gameImg show\\\">\\n                  <div class=\\\"info\\\">\\n                    <p class=\\\"invisible text-center h2 text-danger font-weight-bold pt-2\\\">\").concat(article.rating, \" / 5 - \").concat(article.ratings_count, \" votes</p>\\n                    \").concat(genres, \"\\n                    <p class=\\\"p-2 text-center invisible\\\";\\\">Release : \").concat(article.released, \"</p>\\n                  </div>\\n                  <div class=\\\"m-2\\\">\\n                    <a href=\\\"#gameDetail/\").concat(article.id, \"\\\" class=\\\"text-white h3 int-link\\\"> \").concat(article.name, \"</a>\\n                  </div>\\n                  <div class=\\\"row mx-0\\\">\\n                    \").concat(platforms, \"\\n                  </div>\\n                </div>\\n              </div>\\n            </div>\\n            \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n        document.querySelectorAll(\".cardShowInfo\").forEach(function (card) {\n          card.addEventListener(\"mouseover\", _tools__WEBPACK_IMPORTED_MODULE_1__[\"showInfo\"]);\n          card.addEventListener(\"mouseleave\", _tools__WEBPACK_IMPORTED_MODULE_1__[\"hideInfo\"]);\n        });\n        document.querySelector(\"#showMore\").innerHTML = \"<div id=\\\"showButton\\\" class=\\\"btn btn-danger col-md-2 visible\\\">Show more</div>\";\n        document.querySelector(\"#showMore\").addEventListener(\"click\", _tools__WEBPACK_IMPORTED_MODULE_1__[\"showMore\"]);\n        document.querySelector(\"#welcome\").innerHTML = \"\\n          <div class=\\\"col-md-12\\\">\\n            <h2>Welcome,</h2>\\n            <p>The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame,\\n            the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n            brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\\n            groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\\n            with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>\\n            </div>\\n            <div >\\n            <select id=\\\"selectPlatform\\\" class=\\\"form-control col-3 mt-2\\\">  \\n              <option value=\\\"0\\\">Any</option>\\n              <option value=\\\"platform1\\\">Xbox</option>\\n              <option value=\\\"platform18\\\">Playstation</option>\\n              <option value=\\\"platform7\\\">Switch</option>\\n              <option value=\\\"platform4\\\">PC</option>\\n              <option value=\\\"platform6\\\">Linux</option>\\n              <option value=\\\"platform21\\\">Android</option>\\n              <option value=\\\"platform5\\\">Iphone</option>\\n            </select>\\n          </div>\";\n        document.getElementById(\"selectPlatform\").addEventListener(\"click\", _tools__WEBPACK_IMPORTED_MODULE_1__[\"selectPlatform\"]);\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    Object(_navbar__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"])();\n    ;\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-list\\\">\\n          <div class=\\\"container\\\">\\n          <div class=\\\"articles row pt-5\\\">...loading</div>\\n          <div id=\\\"showMore\\\" class=\\\"d-flex justify-content-center mb-5\\\"></div>\\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/gameList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var header = document.getElementById(\"header\");\n  var pageContent = document.getElementById(\"pageContent\");\n  window.scrollTo(0, 0);\n  _routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"][path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/*! exports provided: navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navbar\", function() { return navbar; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/js/tools.js\");\nvar navbar = function navbar() {\n  header.innerHTML = \"\\n    <header class=\\\"pb-3\\\">\\n      <div class=\\\"container\\\">\\n        <div class=\\\"m-2\\\">\\n          <a href=\\\"\\\" class=\\\"h3 text-white font-weight-bold\\\">The Hyper Progame</a>\\n          <input type=\\\"search\\\" id=\\\"gameSearch\\\" class=\\\"form-control\\\" placeholder=\\\" Search...\\\">\\n        </div>\\n        <div id=\\\"welcome\\\" class=\\\"mt-5\\\"></div>\\n      </div>\\n    </header>\\n    \";\n  document.querySelector(\".form-control\").addEventListener(\"keypress\", function (e) {\n    if (e.code == \"Enter\") {\n      Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"searchGame\"])();\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/navbar.js?");

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

/***/ "./src/js/tools.js":
/*!*************************!*\
  !*** ./src/js/tools.js ***!
  \*************************/
/*! exports provided: selectPlatform, showInfo, hideInfo, searchGame, showMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectPlatform\", function() { return selectPlatform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showInfo\", function() { return showInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideInfo\", function() { return hideInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchGame\", function() { return searchGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMore\", function() { return showMore; });\n/* harmony import */ var _gameList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameList */ \"./src/js/gameList.js\");\nvar showMore = function showMore() {\n  var cardGame = document.getElementsByClassName(\"cardGame\");\n  var i;\n\n  if (cardGame[17].style.display == \"none\") {\n    for (i = 9; i < 18; i++) {\n      cardGame[i].style.display = \"block\";\n    }\n  } else {\n    for (i = 18; i <= 26; i++) {\n      cardGame[i].style.display = \"block\";\n      document.querySelector(\"#showButton\").classList.remove(\"visible\");\n      document.querySelector(\"#showButton\").classList.add(\"invisible\");\n    }\n  }\n};\n\nvar searchGame = function searchGame() {\n  var search = document.getElementById(\"gameSearch\").value;\n  return Object(_gameList__WEBPACK_IMPORTED_MODULE_0__[\"gameList\"])(search);\n};\n\nvar showInfo = function showInfo(e) {\n  var showInfo = e.target.querySelectorAll(\".invisible\");\n  var img = e.target.querySelector(\".gameImg\");\n  img.classList.remove(\"show\");\n  img.classList.add(\"hide\");\n  showInfo.forEach(function (element) {\n    element.classList.remove(\"invisible\");\n    element.classList.add(\"visible\");\n  });\n};\n\nvar hideInfo = function hideInfo(e) {\n  var hideInfo = e.target.querySelectorAll(\".visible\");\n  var img = e.target.querySelector(\".gameImg\");\n  img.classList.remove(\"hide\");\n  img.classList.add(\"show\");\n  hideInfo.forEach(function (element) {\n    element.classList.remove(\"visible\");\n    element.classList.add(\"invisible\");\n  });\n};\n\nvar selectPlatform = function selectPlatform() {\n  document.querySelectorAll(\".hide\").forEach(function (element) {\n    element.classList.remove(\"hide\");\n  });\n  var selectedPlatform = document.querySelector(\"#selectPlatform\").value;\n  var games = document.querySelectorAll(\".cardShowInfo\");\n  games.forEach(function (game) {\n    var result = 0;\n    var gamePlatform = game.querySelectorAll(\".platform\");\n\n    if (selectedPlatform == \"0\") {\n      game.classList.remove(\"hide\");\n    }\n\n    gamePlatform.forEach(function (element) {\n      if (element.classList[0] == selectedPlatform || selectedPlatform == \"0\") {\n        result++;\n      }\n    });\n\n    if (result < 1) {\n      game.classList.add(\"hide\");\n    }\n  });\n};\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/tools.js?");

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