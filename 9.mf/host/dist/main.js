(() => {
	var modules = {
		"webpack/container/reference/remote": (module, __unused_webpack_exports, require) => {
			"use strict";
			var __webpack_error__ = new Error();
			module.exports = new Promise((resolve, reject) => {
				if (typeof remote !== "undefined") return resolve();
				require.l("http://localhost:3000/remoteEntry.js", event => {
					if (typeof remote !== "undefined") return resolve();
					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
					var realSrc = event && event.target && event.target.src;
					__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
					__webpack_error__.name = 'ScriptExternalLoadError';
					__webpack_error__.type = errorType;
					__webpack_error__.request = realSrc;
					reject(__webpack_error__);
				}, "remote");
			}).then(() => remote);
		}
	};
	var cache = {};
	function require(moduleId) {
		var cachedModule = cache[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		var module = cache[moduleId] = {
			id: moduleId,
			loaded: false,
			exports: {}
		};
		modules[moduleId](module, module.exports, require);
		module.loaded = true;
		return module.exports;
	}
	require.m = modules;
	(() => {
		require.n = module => {
			var getter = module && module.__esModule ? () => module['default'] : () => module;
			require.d(getter, {
				a: getter
			});
			return getter;
		};
	})();
	(() => {
		var getProto = Object.getPrototypeOf ? obj => Object.getPrototypeOf(obj) : obj => obj.__proto__;
		var leafPrototypes;
		require.t = function (value, mode) {
			if (mode & 1) value = this(value);
			if (mode & 8) return value;
			if (typeof value === 'object' && value) {
				if (mode & 4 && value.__esModule) return value;
				if (mode & 16 && typeof value.then === 'function') return value;
			}
			var ns = Object.create(null);
			require.r(ns);
			var def = {};
			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
			for (var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
				Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
			}
			def['default'] = () => value;
			require.d(ns, def);
			return ns;
		};
	})();
	(() => {
		require.d = (exports, definition) => {
			for (var key in definition) {
				if (require.o(definition, key) && !require.o(exports, key)) {
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key]
					});
				}
			}
		};
	})();
	(() => {
		require.f = {};
		require.e = chunkId => {
			return Promise.all(Object.keys(require.f).reduce((promises, key) => {
				require.f[key](chunkId, promises);
				return promises;
			}, []));
		};
	})();
	(() => {
		require.u = chunkId => {
			return "" + chunkId + ".js";
		};
	})();
	(() => {
		require.g = function () {
			if (typeof globalThis === 'object') return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if (typeof window === 'object') return window;
			}
		}();
	})();
	(() => {
		require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
	})();
	(() => {
		var inProgress = {};
		var dataWebpackPrefix = "host:";
		require.l = (url, done, key, chunkId) => {
			if (inProgress[url]) {
				inProgress[url].push(done);
				return;
			}
			var script, needAttach;
			if (key !== undefined) {
				var scripts = document.getElementsByTagName("script");
				for (var i = 0; i < scripts.length; i++) {
					var s = scripts[i];
					if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
						script = s;
						break;
					}
				}
			}
			if (!script) {
				needAttach = true;
				script = document.createElement('script');
				script.charset = 'utf-8';
				script.timeout = 120;
				if (require.nc) {
					script.setAttribute("nonce", require.nc);
				}
				script.setAttribute("data-webpack", dataWebpackPrefix + key);
				script.src = url;
			}
			inProgress[url] = [done];
			var onScriptComplete = (prev, event) => {
				script.onerror = script.onload = null;
				clearTimeout(timeout);
				var doneFns = inProgress[url];
				delete inProgress[url];
				script.parentNode && script.parentNode.removeChild(script);
				doneFns && doneFns.forEach(fn => fn(event));
				if (prev) return prev(event);
			};
			var timeout = setTimeout(onScriptComplete.bind(null, undefined, {
				type: 'timeout',
				target: script
			}), 120000);
			script.onerror = onScriptComplete.bind(null, script.onerror);
			script.onload = onScriptComplete.bind(null, script.onload);
			needAttach && document.head.appendChild(script);
		};
	})();
	(() => {
		require.r = exports => {
			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, {
					value: 'Module'
				});
			}
			Object.defineProperty(exports, '__esModule', {
				value: true
			});
		};
	})();
	(() => {
		require.nmd = module => {
			module.paths = [];
			if (!module.children) module.children = [];
			return module;
		};
	})();
	(() => {
		var chunkMapping = {
			"webpack_container_remote_remote_NewsList": ["webpack/container/remote/remote/NewsList"]
		};
		var idToExternalAndNameMapping = {
			"webpack/container/remote/remote/NewsList": ["default", "./NewsList", "webpack/container/reference/remote"]
		};
		require.f.remotes = (chunkId, promises) => {
			if (require.o(chunkMapping, chunkId)) {
				chunkMapping[chunkId].forEach(id => {
					var getScope = require.R;
					if (!getScope) getScope = [];
					var data = idToExternalAndNameMapping[id];
					if (getScope.indexOf(data) >= 0) return;
					getScope.push(data);
					if (data.p) return promises.push(data.p);
					var onError = error => {
						if (!error) error = new Error("Container missing");
						if (typeof error.message === "string") error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
						require.m[id] = () => {
							throw error;
						};
						data.p = 0;
					};
					var handleFunction = (fn, arg1, arg2, d, next, first) => {
						try {
							var promise = fn(arg1, arg2);
							if (promise && promise.then) {
								var p = promise.then(result => next(result, d), onError);
								if (first) promises.push(data.p = p); else return p;
							} else {
								return next(promise, d, first);
							}
						} catch (error) {
							onError(error);
						}
					};
					var onExternal = (external, _, first) => external ? handleFunction(require.I, data[0], 0, external, onInitialized, first) : onError();
					var onInitialized = (_, external, first) => handleFunction(external.get, data[1], getScope, 0, onFactory, first);
					var onFactory = factory => {
						data.p = 1;
						require.m[id] = module => {
							module.exports = factory();
						};
					};
					handleFunction(require, data[2], 0, 0, onExternal, 1);
				});
			}
		};
	})();
	(() => {
		require.S = {};
		var initPromises = {};
		var initTokens = {};
		require.I = (name, initScope) => {
			if (!initScope) initScope = [];
			var initToken = initTokens[name];
			if (!initToken) initToken = initTokens[name] = {};
			if (initScope.indexOf(initToken) >= 0) return;
			initScope.push(initToken);
			if (initPromises[name]) return initPromises[name];
			if (!require.o(require.S, name)) require.S[name] = {};
			var scope = require.S[name];
			var warn = msg => typeof console !== "undefined" && console.warn && console.warn(msg);
			var uniqueName = "host";
			var register = (name, version, factory, eager) => {
				var versions = scope[name] = scope[name] || {};
				var activeVersion = versions[version];
				if (!activeVersion || !activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from)) versions[version] = {
					get: factory,
					from: uniqueName,
					eager: !!eager
				};
			};
			var initExternal = id => {
				var handleError = err => warn("Initialization of sharing external failed: " + err);
				try {
					var module = require(id);
					if (!module) return;
					var initFn = module => module && module.init && module.init(require.S[name], initScope);
					if (module.then) return promises.push(module.then(initFn, handleError));
					var initResult = initFn(module);
					if (initResult && initResult.then) return promises.push(initResult['catch'](handleError));
				} catch (err) {
					handleError(err);
				}
			};
			var promises = [];
			switch (name) {
				case "default":
					{
						initExternal("webpack/container/reference/remote");
					}
					break;
			}
			if (!promises.length) return initPromises[name] = 1;
			return initPromises[name] = Promise.all(promises).then(() => initPromises[name] = 1);
		};
	})();
	(() => {
		var scriptUrl;
		if (require.g.importScripts) scriptUrl = require.g.location + "";
		var document = require.g.document;
		if (!scriptUrl && document) {
			if (document.currentScript) scriptUrl = document.currentScript.src;
			if (!scriptUrl) {
				var scripts = document.getElementsByTagName("script");
				if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
			}
		}
		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
		require.p = scriptUrl;
	})();
	(() => {
		var installedChunks = {
			"main": 0
		};
		require.f.j = (chunkId, promises) => {
			var installedChunkData = require.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
			if (installedChunkData !== 0) {
				if (installedChunkData) {
					promises.push(installedChunkData[2]);
				} else {
					if ("webpack_container_remote_remote_NewsList" != chunkId) {
						var promise = new Promise((resolve, reject) => installedChunkData = installedChunks[chunkId] = [resolve, reject]);
						promises.push(installedChunkData[2] = promise);
						var url = require.p + require.u(chunkId);
						var error = new Error();
						var loadingEnded = event => {
							if (require.o(installedChunks, chunkId)) {
								installedChunkData = installedChunks[chunkId];
								if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
								if (installedChunkData) {
									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
									var realSrc = event && event.target && event.target.src;
									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
									error.name = 'ChunkLoadError';
									error.type = errorType;
									error.request = realSrc;
									installedChunkData[1](error);
								}
							}
						};
						require.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
					} else installedChunks[chunkId] = 0;
				}
			}
		};
		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
			var [chunkIds, moreModules, runtime] = data;
			var moduleId,
				chunkId,
				i = 0;
			if (chunkIds.some(id => installedChunks[id] !== 0)) {
				for (moduleId in moreModules) {
					if (require.o(moreModules, moduleId)) {
						require.m[moduleId] = moreModules[moduleId];
					}
				}
				if (runtime) var result = runtime(require);
			}
			if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
			for (; i < chunkIds.length; i++) {
				chunkId = chunkIds[i];
				if (require.o(installedChunks, chunkId) && installedChunks[chunkId]) {
					installedChunks[chunkId][0]();
				}
				installedChunks[chunkId] = 0;
			}
		};
		var chunkLoadingGlobal = self["webpackChunkhost"] = self["webpackChunkhost"] || [];
		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
	})();
	var exports = {};
	(() => {
		Promise.all([require.e("vendors-node_modules_react-dom_client_js"), require.e("src_bootstrap_js")]).then(require.bind(require, "./src/bootstrap.js"));
	})();
})();