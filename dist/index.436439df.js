// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"drOo7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "6632b38b436439df";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jKMjS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
// This code below is so that the app does not to reload over and over
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        _recipeViewJsDefault.default.renderSpinner();
        // 1) Loading recipe
        await _modelJs.loadRecipe(id);
        // 2) Rendering recipe
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
    } catch (err) {
        _recipeViewJsDefault.default.renderError();
    }
};
const controlSearchResults = async function() {
    try {
        _resultsViewJsDefault.default.renderSpinner();
        // 1) Get search query
        const query = _searchViewJsDefault.default.getQuery();
        if (!query) return;
        // 2) Load search results
        await _modelJs.loadSearchResults(query);
        // resultsView.render(model.state.search.results); // we don't want all the results, just the number we assign -- see below
        // 3) Render results on the view
        _resultsViewJsDefault.default.render(_modelJs.getSearchResultsPage());
        // 4) Render initial pagination button
        _paginationViewJsDefault.default.render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    // 1) Render NEW results
    _resultsViewJsDefault.default.render(_modelJs.getSearchResultsPage(goToPage));
    // 2) Render NEW pagination button
    _paginationViewJsDefault.default.render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // Update recipe servings (in state)
    _modelJs.updateServings(newServings);
    // Update the recipe view
    _recipeViewJsDefault.default.render(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // 1) Add/remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // 2) Update recipe view
    _recipeViewJsDefault.default.render(_modelJs.state.recipe);
    // 3) Render bookmarks
    _bookmarksViewJsDefault.default.render(_modelJs.state.bookmarks);
};
const init = function() {
    _recipeViewJsDefault.default.addHandlerRender(controlRecipe);
    _recipeViewJsDefault.default.addHandlerUpdateServings(controlServings);
    _recipeViewJsDefault.default.addHandlerAddBookmark(controlAddBookmark);
    _searchViewJsDefault.default.addHandlerSearch(controlSearchResults);
    _paginationViewJsDefault.default.addHandlerClick(controlPagination);
};
init(); // When we are listening for multiple events that will call the same function several times, it's better to have an array of those possible events and loop over them.
 // ["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe)); --> moved to VIEW

},{"./model.js":"6Yfb5","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./views/recipeView.js":"9q0mt","./views/searchView.js":"51HTZ","./views/resultsView.js":"a6WEO","./views/paginationView.js":"c2v8w","./views/bookmarksView.js":"cUfi0"}],"6Yfb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults
);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage
);
parcelHelpers.export(exports, "updateServings", ()=>updateServings
);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark
);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark
);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {
    },
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: _configJs.RESULTS_PER_PAGE
    },
    bookmarks: []
};
const loadRecipe = async function(id) {
    try {
        const data = await _helpersJs.getJSON(`${_configJs.API_URL}${id}`);
        const { recipe  } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        if (state.bookmarks.some((bookmark)=>bookmark.id === id
        )) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        console.error(`${err} ❗️💥❗️`);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const { data  } = await _helpersJs.getJSON(`${_configJs.API_URL}?search=${query}`);
        state.search.results = data.recipes.map((recipe)=>{
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url,
                image: recipe.image_url
            };
        });
    } catch (err) {
        console.error(`${err}. Search issues -- ❗️💥❗️`);
        throw err;
    }
};
const getSearchResultsPage = function(page = 1) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // --> 2 * 8 / 4 = 4
    });
    state.recipe.servings = newServings;
};
const addBookmark = function(recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);
    // Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    console.log(state.bookmarks);
};
const deleteBookmark = function(id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.id === id
    );
    state.bookmarks.splice(index, 1);
    // Mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./config.js":"beA2m","./helpers.js":"9l3Yy"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"beA2m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE
);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const TIMEOUT_SEC = 10;
const RESULTS_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9l3Yy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout(_config.TIMEOUT_SEC)
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err; // the Promise rejects and the error can be handled in the model
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./config":"beA2m"}],"9q0mt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// import icons from "../img/icons.svg"; // Parcel 1
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional"); // add fraction view to the quantities
class RecipeView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find your recipe. Please, try another one.';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', (e)=>{
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const { updateTo  } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `\n    <figure class="recipe__fig">\n      <img src="${this._data.image}" crossOrigin="anonymous" alt="${this._data.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n  \n    <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${_iconsSvgDefault.default}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${_iconsSvgDefault.default}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">${this._data.servings === 1 ? 'serving' : 'servings'}</span>\n\n      <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">\n              <svg>\n                <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">\n              <svg>\n                <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n    <div class="recipe__user-generated">\n      \n    </div>\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${_iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n      ${this._data.ingredients.map(this.#generateMarkupIngredient).join('')}\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sourceUrl}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>\n    `;
    }
     #generateMarkupIngredient(ing) {
        return `\n        <li class="recipe__ingredient">\n          <svg class="recipe__icon">\n          <use href="${_iconsSvgDefault.default}#icon-check"></use>\n          </svg>\n          <div class="recipe__quantity">${ing.quantity ? new _fractional.Fraction(ing.quantity).toString() : ''}</div>\n            <div class="recipe__description">\n            <span class="recipe__unit">${ing.unit}</span>\n            ${ing.description}\n          </div>\n        </li>\n        `;
    }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../img/icons.svg":"iwCpK","fractional":"40qvl","./View.js":"8rtS4"}],"iwCpK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "icons.c097e590.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"40qvl":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== 'undefined' && denominator) {
        if (typeof numerator === 'number' && typeof denominator === 'number') {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === 'string' && typeof denominator === 'string') {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === 'undefined') {
        num = numerator; // swap variable names for legibility
        if (typeof num === 'number') {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === 'string') {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(' ');
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match('/')) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === 'string' && a.match('/')) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split('/');
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === 'string' && a.match('\.')) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === 'NaN') return 'NaN';
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + '/' + denominator);
    return result.length > 0 ? result.join(' ') : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === 'number') a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === 'number') a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = (function() {
    var isFloat = function(n) {
        return typeof n === 'number' && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
})();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num)if (num % _factor === 0) {
        factors.push(_factor); // so keep it
        num = num / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num != 1) factors.push(num); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"8rtS4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError(); // if there's no data or if it is an array but it's empty, render error
        this._data = data;
        const markup = this._generateMarkup();
        this.#clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
     #clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const markup = `\n      <div class="spinner">\n        <svg>\n          <use href="${_iconsSvgDefault.default}#icon-loader"></use>\n        </svg>\n      </div>\n    `;
        this.#clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `\n    <div class="error">\n      <div>\n        <svg>\n          <use href="${_iconsSvgDefault.default}#icon-alert-triangle"></use>\n        </svg>\n      </div>\n      <p>${message}</p>\n    </div>\n  `;
        this.#clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `\n    <div class="message">\n      <div>\n        <svg>\n          <use href="${_iconsSvgDefault.default}#icon-smile"></use>\n        </svg>\n      </div>\n      <p>${message}</p>\n    </div>\n  `;
        this.#clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../img/icons.svg":"iwCpK"}],"51HTZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentEl = document.querySelector('.search');
    getQuery() {
        const query = this.#parentEl.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    }
     #clearInput() {
        this.#parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this.#parentEl.addEventListener('submit', (e)=>{
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"a6WEO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'We could not find your recipe. Please, try another one.';
    _message = '';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        return `\n    <li class="preview">\n      <a class="preview__link" href="#${result.id}">\n        <figure class="preview__fig">\n          <img src="${result.image}" alt="${result.title}" crossOrigin="anonymous"/>\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">${result.title}</h4>\n          <p class="preview__publisher">${result.publisher}</p>\n          \n        </div>\n      </a>\n    </li>\n    `;
    }
}
exports.default = new ResultsView();

},{"./View.js":"8rtS4","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../img/icons.svg":"iwCpK"}],"c2v8w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', (e)=>{
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Page 1 and there are other pages
        if (curPage === 1 && numPages > 1) return `\n      <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">\n        <span>${curPage + 1}</span>\n        <svg class="search__icon">\n          <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n        </svg>\n      </button>\n      `;
        // Last page
        if (curPage === numPages && numPages > 1) return `\n        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>\n          </svg>\n          <span>${curPage - 1}</span>\n        </button>\n      `;
        // Other page
        if (curPage < numPages) return `\n      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n          <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>\n        </svg>\n        <span>${curPage - 1}</span>\n      </button>\n      <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">\n        <span>${curPage + 1}</span>\n        <svg class="search__icon">\n          <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n        </svg>\n    </button>\n    `;
        // Page 1 and there are no other pages
        return '';
    }
}
exports.default = new PaginationView();

},{"./View.js":"8rtS4","url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cUfi0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
    _message = '';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        return `\n    <li class="preview">\n      <a class="preview__link" href="#${result.id}">\n        <figure class="preview__fig">\n          <img src="${result.image}" alt="${result.title}" crossOrigin="anonymous"/>\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">${result.title}</h4>\n          <p class="preview__publisher">${result.publisher}</p>\n          \n        </div>\n      </a>\n    </li>\n    `;
    }
}
exports.default = new BookmarksView();

},{"./View.js":"8rtS4","url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["drOo7","jKMjS"], "jKMjS", "parcelRequire7d04")

//# sourceMappingURL=index.436439df.js.map
