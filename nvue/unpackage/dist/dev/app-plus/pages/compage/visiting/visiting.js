"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type]['apply'](console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),

/***/ 11:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.default = exports.createNamespacedHelpers = exports.mapActions = exports.mapGetters = exports.mapMutations = exports.mapState = exports.Store = void 0; /**
                                                                                                                                                                                                                                                                      * vuex v3.0.1
                                                                                                                                                                                                                                                                      * (c) 2017 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
var applyMixin = function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
typeof window !== 'undefined' &&
window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */
/**
       * Deep copy the given object considering circular structure.
       * This function caches all nested objects and its copies.
       * If it detects circular structure, use cached copy to avoid infinite loop.
       *
       * @param {*} obj
       * @param {Array<Object>} cache
       * @return {*}
       */


/**
           * forEach for object
           */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors$1);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  var state = options.state;if (state === void 0) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  this._actionSubscribers.forEach(function (sub) {return sub(action, this$1.state);});

  return entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);
};

Store.prototype.subscribe = function subscribe(fn) {
  return genericSubscribe(fn, this._subscribers);
};

Store.prototype.subscribeAction = function subscribeAction(fn) {
  return genericSubscribe(fn, this._actionSubscribers);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors);

function genericSubscribe(fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () {return fn(store);};
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) {return;}

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function get() {return store.getters[type];},
      enumerable: true });

  });

  return gettersProxy;
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.length ?
  path.reduce(function (state, key) {return state[key];}, state) :
  state;
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "Expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});exports.mapState = mapState;

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});exports.mapMutations = mapMutations;

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});exports.mapGetters = mapGetters;

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});exports.mapActions = mapActions;

var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};exports.createNamespacedHelpers = createNamespacedHelpers;

function normalizeMap(map) {
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =



index_esm;exports.default = _default;

/***/ }),

/***/ 122:
/*!********************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/model/Search.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Search = void 0;var _http = __webpack_require__(/*! ../utils/http.js */ 18);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var



Search = /*#__PURE__*/function () {function Search() {_classCallCheck(this, Search);}_createClass(Search, null, [{ key: "searchUser",
    // 搜索用户
    value: function searchUser(keyword) {var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return _http.Http.request({
        url: "/search/user",
        data: {
          keyword: keyword,
          id: id } });


    } }]);return Search;}();exports.Search = Search;

/***/ }),

/***/ 135:
/*!*************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/main.js?{"page":"pages%2Fcompage%2Fvisiting%2Fvisiting"} ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 2);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 21);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_compage_visiting_visiting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/compage/visiting/visiting.nvue?mpType=page */ 136);

        
        
        
        _pages_compage_visiting_visiting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_compage_visiting_visiting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/compage/visiting/visiting'
        _pages_compage_visiting_visiting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_compage_visiting_visiting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 136:
/*!*****************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue?mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visiting.nvue?vue&type=template&id=6aadc03c&scoped=true&mpType=page */ 137);
/* harmony import */ var _visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visiting.nvue?vue&type=script&lang=js&mpType=page */ 139);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./visiting.nvue?vue&type=style&index=0&id=6aadc03c&scoped=true&lang=css&mpType=page */ 141).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./visiting.nvue?vue&type=style&index=0&id=6aadc03c&scoped=true&lang=css&mpType=page */ 141).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6aadc03c",
  "2df73cc8",
  false,
  _visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 137:
/*!***********************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue?vue&type=template&id=6aadc03c&scoped=true&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./visiting.nvue?vue&type=template&id=6aadc03c&scoped=true&mpType=page */ 138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_template_id_6aadc03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 138:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue?vue&type=template&id=6aadc03c&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("view", { staticClass: ["flex-1", "bg-main"] }, [
        _c(
          "view",
          {
            staticClass: ["user-info", "bg-white", "border-bottom", "flex-row"]
          },
          [
            _c("u-image", {
              staticClass: ["avatar", "mx-3", "round-md"],
              attrs: { src: "../../../static/images/friend.png", mode: "" }
            }),
            _c("view", { staticClass: ["userinfo-riht"] }, [
              _c("u-text", { staticClass: ["nickname", "text-bold"] }, [
                _vm._v("Mine")
              ]),
              _c(
                "u-text",
                {
                  staticClass: [
                    "username",
                    "font-30",
                    "text-three-color",
                    "mt-1"
                  ]
                },
                [_vm._v("账号:xxxxx")]
              ),
              _c(
                "u-text",
                {
                  staticClass: ["area", "font-30", "text-three-color", "mt-1"]
                },
                [_vm._v("地区:xxx")]
              )
            ])
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: [
              "list",
              "border-bottom",
              "bg-white",
              "align-center",
              "mt-2",
              "flex-row",
              "",
              "justify-between"
            ]
          },
          [
            _c(
              "u-text",
              { staticClass: ["title", "font-35", "text-main-color", "ml-3"] },
              [_vm._v("朋友圈")]
            ),
            _c(
              "u-text",
              {
                staticClass: ["iconfont", "text-three-color", "mr-3", "font-35"]
              },
              [_vm._v("")]
            )
          ]
        ),
        _c(
          "view",
          {
            staticClass: [
              "list",
              "border-bottom",
              "bg-white",
              "align-center",
              "mb-3",
              "flex-row",
              "",
              "justify-between"
            ]
          },
          [
            _c(
              "u-text",
              { staticClass: ["title", "font-35", "text-main-color", "ml-2"] },
              [_vm._v("更多信息")]
            ),
            _c(
              "u-text",
              {
                staticClass: ["iconfont", "text-three-color", "mr-3", "font-35"]
              },
              [_vm._v("")]
            )
          ]
        ),
        !_vm.isFriend
          ? _c(
              "view",
              { staticClass: ["list", "flex-center", "bg-white", "flex-row"] },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "list-text",
                      "font-40",
                      "text-bold",
                      "iconfont",
                      "mr-1"
                    ]
                  },
                  [_vm._v("")]
                ),
                _c(
                  "u-text",
                  { staticClass: ["list-text", "font-40", "text-bold"] },
                  [_vm._v("发消息")]
                )
              ]
            )
          : _c("view", { staticClass: ["list", "bg-white", "flex-center"] }, [
              _c(
                "u-text",
                { staticClass: ["list-text", "text-bold", "font-40"] },
                [_vm._v("添加到通讯录")]
              )
            ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 139:
/*!*****************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./visiting.nvue?vue&type=script&lang=js&mpType=page */ 140);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 140:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 29));































var _Friend = __webpack_require__(/*! @/model/Friend.js */ 83);
var _Search = __webpack_require__(/*! @/model/Search.js */ 122);
var _vuex = __webpack_require__(/*! vuex */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  components: {},
  data: function data() {
    return {
      friendId: '',
      info: null,
      isFriend: 1 // 0好友 1/不是
    };
  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['userInfo']), {
    //  添加通讯录是否显示  不是好友并且不是自己
    addShow: function addShow() {
      var isMe = this.userInfo._id == this.friendId;
      if (this.isFriend && !isMe) return true;
      return false;
    },
    // 发送消息是否显示  是好友 或者是自己
    sendShow: function sendShow() {
      var isMe = this.userInfo._id == this.friendId;
      if (!this.isFriend || isMe) return true;
      return false;
    } }),

  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    if (!e.index) {
    }
  },
  onLoad: function onLoad(options) {
    options.id ? this.friendId = options.id : '';
    // this.getUser(); //获取用户信息
    // this.checkFriend(); //是否好友
  },
  methods: {
    getUser: function getUser() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _Search.Search.searchUser('', _this.friendId));case 2:res = _context.sent;
                _this.info = res.data;case 4:case "end":return _context.stop();}}}, _callee);}))();
    },

    // 是否好友
    checkFriend: function checkFriend() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

                  _Friend.Friend.checkIsFriend(_this2.userInfo._id, _this2.friendId));case 2:res = _context2.sent;
                res.data.msg == 'isFriend' ? _this2.isFriend = 1 : _this2.isFriend = 0;case 4:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    send: function send() {},

    // 好友申请
    applyFriend: function applyFriend() {
      uni.navigateTo({
        url: "../applyFriend/applyFriend?friendId=".concat(this.friendId) });

    } } };exports.default = _default;

/***/ }),

/***/ 141:
/*!*************************************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue?vue&type=style&index=0&id=6aadc03c&scoped=true&lang=css&mpType=page ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_style_index_0_id_6aadc03c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./visiting.nvue?vue&type=style&index=0&id=6aadc03c&scoped=true&lang=css&mpType=page */ 142);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_style_index_0_id_6aadc03c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_style_index_0_id_6aadc03c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_style_index_0_id_6aadc03c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_style_index_0_id_6aadc03c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_visiting_nvue_vue_type_style_index_0_id_6aadc03c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 142:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/compage/visiting/visiting.nvue?vue&type=style&index=0&id=6aadc03c&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "user-info": {
    "paddingBottom": "60rpx"
  },
  "avatar": {
    "height": "130rpx",
    "width": "130rpx"
  },
  "list": {
    "height": "100rpx"
  },
  "list-text": {
    "color": "#505e97"
  }
}

/***/ }),

/***/ 15:
/*!*******************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 6));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 11));



var _user = _interopRequireDefault(__webpack_require__(/*! @/store/modules/user.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// const store = new Vuex.Store({
// 	state: {
// 		token: "",
// 		hasLogin: false,
// 		userInfo: {}
// 	},
// 	mutations: {
// 		INIT(state, provider) {
// 			if (provider) {
// 				state.hasLogin = true
// 				state.token = provider.token || ''
// 				state.userInfo = provider || {}
// 			}
// 		},
// 		LOGIN(state, provider) {
// 			if (provider) {
// 				state.hasLogin = true
// 				state.token = provider.token || ''
// 				state.userInfo = provider || {}
// 				uni.setStorage({
// 					key: "userInfo",
// 					data: provider
// 				})
// 			}
// 		},
// 		LOGOUT(state) {
// 			state.hasLogin = false
// 			state.token = ""
// 			state.userInfo = {}
// 			uni.removeStorage({
// 				key: "userInfo",
// 			})
// 		}
// 	},
// 	actions: {}
// })
// export default store
_vue.default.use(_vuex.default);var _default = new _vuex.default.Store({ modules: { user: _user.default } });exports.default = _default;

/***/ }),

/***/ 16:
/*!**************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/store/modules/user.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Chat = __webpack_require__(/*! @/model/Chat.js */ 17);


var _config = __webpack_require__(/*! @/config/config.js */ 19);var _default =


{
  state: {
    user: null,
    token: "",
    chat: null },

  mutations: {
    // 存储token
    SET_TOKEN: function SET_TOKEN(state, token) {
      state.token = token || '';
    },
    SET_USER: function SET_USER(state, user) {
      state.user = user || null;
    },
    SET_CHAT: function SET_CHAT(state, chat) {
      state.chat = chat || null;
    } },

  actions: {
    INITLOGIN: function INITLOGIN(_ref)

    {var commit = _ref.commit;
      // 初始化登录信息
      var token = uni.getStorageSync("token");
      var user = uni.getStorageSync("user");
      __f__("log", token, user, " at store\\modules\\user.js:32");
      if (token) {
        commit('SET_TOKEN', token);
        commit('SET_USER', user);

        // 连接socket
        var chat = new _Chat.Chat({
          user: user,
          token: token,
          url: _config.config.wsUrl });

        commit('SET_CHAT', chat);
      }
    },
    LOGIN: function LOGIN(_ref2,

    user) {var commit = _ref2.commit;
      commit('SET_TOKEN', user.token);
      commit('SET_USER', user);

      // 存储到本地
      uni.setStorageSync("token", user.token);
      uni.setStorageSync("user", user);

      // 连接socket
      var chat = new _Chat.Chat({
        user: user,
        url: _config.config.wsUrl });

      commit('SET_CHAT', chat);
    },
    LOGOUT: function LOGOUT(_ref3)


    {var commit = _ref3.commit,state = _ref3.state;
      commit('SET_TOKEN', "");
      commit('SET_USER', "");

      // 清除缓存
      uni.removeStorageSync("token");
      uni.removeStorageSync("user");
      // 关闭socket连接
      state.chat.close();
      commit('SET_CHAT', null);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),

/***/ 17:
/*!******************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/model/Chat.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.Chat = void 0;var _http = __webpack_require__(/*! ../utils/http.js */ 18);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


// 聊天类
var Chat = /*#__PURE__*/function () {

  //是否在线
  // 聊天对象
  function Chat(arg) {_classCallCheck(this, Chat);_defineProperty(this, "socket", null);_defineProperty(this, "isOnline", false);_defineProperty(this, "chatObj", null);
    this.url = arg.url; //ws地址
    // this.user = uni.getStorageSync("user") || {}
    // this.token = uni.getStorageSync("token") || ""
    this.user = arg.user;
    this.token = arg.user.token;

    this._init();
  }_createClass(Chat, [{ key: "_init", value: function _init()



    {var _this = this;
      __f__("log", this.user, 111111111111, " at model\\Chat.js:22");
      if (this.token) {
        this.socket = uni.connectSocket({
          // 这里应该传入token 后端进行验证
          url: "".concat(this.url, "?userId=").concat(this.user._id),
          complete: function complete(e) {
            __f__("log", e, "complete", " at model\\Chat.js:28");
          } });


        // 监听连接成功
        this.socket.onOpen(function () {return _this.onOpen();});
        this.socket.send(function () {return _this.onOpen();});
        // 监听接收信息
        this.socket.onMessage(function (res) {return _this.onMessage(res);});
        // 监听断开
        this.socket.onClose(function () {return _this.onClose();});
        // 监听错误
        this.socket.onError(function () {return _this.onError();});
      }
    }

    // 监听打开
  }, { key: "onOpen", value: function onOpen() {
      __f__("log", 'socket连接成功', " at model\\Chat.js:46");
      this.isOnline = true; // 用户上线
    }

    // 监听关闭
  }, { key: "onClose", value: function onClose() {
      __f__("log", 'socket连接关闭', " at model\\Chat.js:52");
      this.isOnline = false; // 用户下线
      this.socket = null;
    }

    // 监听连接错误
  }, { key: "onError", value: function onError() {
      __f__("log", 'socket连接错误', " at model\\Chat.js:59");
      this.isOnline = false; // 用户下线
      this.socket = null;
    }
    // 监听接收消息
  }, { key: "onMessage", value: function onMessage(msg) {
      __f__("log", msg, "msg11111", " at model\\Chat.js:65");
    }

    // 关闭连接
  }, { key: "close", value: function close() {
      this.socket.close();
    }

    // 创建聊天对象
  }, { key: "createChatObj", value: function createChatObj(obj) {
      __f__("log", "createChatObj", " at model\\Chat.js:75");
      this.chatObj = obj;
    }

    // 销毁聊天对象
  }, { key: "destroyObj", value: function destroyObj() {
      __f__("log", "destroyObj", " at model\\Chat.js:81");
      this.chatObj = null;
    }

    // 发送消息
  }, { key: "send", value: function send(user_id,
    to_id,
    chat_type,
    type,
    data) {
      return _http.Http.request({
        url: "/chat/send",
        data: {
          user_id: user_id,
          to_id: to_id,
          chat_type: chat_type,
          type: type,
          data: data } });


    } }]);return Chat;}();exports.Chat = Chat;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),

/***/ 18:
/*!******************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/utils/http.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.Http = void 0;var _config = __webpack_require__(/*! @/config/config */ 19);


var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var errors = {
  "400001": "数据不合法" };var


Http = /*#__PURE__*/function () {function Http() {_classCallCheck(this, Http);}_createClass(Http, null, [{ key: "request", value: function request(_ref)




    {var url = _ref.url,_ref$data = _ref.data,data = _ref$data === void 0 ? {} : _ref$data,_ref$method = _ref.method,method = _ref$method === void 0 ? "POST" : _ref$method;
      return new Promise(function (resolve, reject) {
        // 这里从store中拿到token
        var token = _store.default.state.token || '';
        __f__("log", token, "token", " at utils\\http.js:19");
        uni.request({
          url: "".concat(_config.config.apiBaseUrl).concat(url),
          data: data,
          method: method,
          header: {
            "Authorization": token
            // 'Content-Type': 'application/json;charset=UTF-8',
          },
          success: function success(res) {
            var statusCode = res.statusCode.toString();
            // console.log(res, "http")
            if (statusCode.startsWith('2')) {
              if (res.data.status == 0) {
                return resolve(res.data);
              }
              // uni.showToast({
              // 	title: res.data.msg,
              // 	icon: "none"
              // })

            } else {
              // 错误
              uni.showToast({
                title: res.data.message,
                icon: "none" });

            }
          },
          fail: function fail(err) {
            reject(err);
            __f__("log", err, "fail", " at utils\\http.js:50");
            uni.showToast({
              title: "请稍后再试",
              icon: "none" });

          } });

      });
    } }]);return Http;}();exports.Http = Http;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),

/***/ 19:
/*!*********************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/config/config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.config = void 0;var config = {
  env: "dev",

  apiBaseUrl: 'http://192.168.1.100:4000',






  wsUrl: "ws://192.168.1.100:4000/ws" };exports.config = config;

/***/ }),

/***/ 2:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 3);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),

/***/ 21:
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 22).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 22:
/*!********************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 23);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 23:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "justify-around": {
    "justifyContent": "space-around"
  },
  "align-center": {
    "alignItems": "center"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "w-100": {
    "width": "750rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "font-20": {
    "fontSize": "20rpx"
  },
  "font-25": {
    "fontSize": "25rpx"
  },
  "font-30": {
    "fontSize": "30rpx"
  },
  "font-35": {
    "fontSize": "35rpx"
  },
  "font-40": {
    "fontSize": "40rpx"
  },
  "text-bold": {
    "fontWeight": "bold"
  },
  "text-white": {
    "color": "#FFFFFF"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#FFFFFF"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "rgba(39,40,50,0.1)"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(39,40,50,0.1)"
  },
  "font-xs": {
    "fontSize": "12rpx"
  },
  "font-sm": {
    "fontSize": "14rpx"
  },
  "font-md": {
    "fontSize": "16rpx"
  },
  "font-lg": {
    "fontSize": "18rpx"
  },
  "text-main-color": {
    "color": "rgba(39,40,50,1)"
  },
  "text-sec-color": {
    "color": "rgba(39,40,50,0.6)"
  },
  "text-three-color": {
    "color": "rgba(39,40,50,0.4)"
  },
  "bg-dark-color": {
    "backgroundColor": "rgba(39,40,50,0.2)"
  },
  "bg-color-1": {
    "backgroundColor": "rgba(244,244,244,1)"
  },
  "bg-color-2": {
    "backgroundColor": "rgba(243,244,246,1)"
  },
  "bg-main": {
    "backgroundColor": "#ededed"
  },
  "yellow": {
    "backgroundColor": "rgba(255,228,49,1)"
  },
  "red": {
    "backgroundColor": "rgba(255,93,91,1)"
  },
  "blue": {
    "backgroundColor": "rgba(87,153,255,1)"
  },
  "round-sm": {
    "borderRadius": "5rpx"
  },
  "round-md": {
    "borderRadius": "10rpx"
  },
  "round-lg": {
    "borderRadius": "20rpx"
  },
  "circle": {
    "borderRadius": 50
  },
  "border-color": {
    "borderColor": "rgba(39,40,50,0.1)"
  },
  "temp-bg": {
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "temp-border": {
    "borderStyle": "solid",
    "borderColor": "#FF0000",
    "borderWidth": "2"
  }
}

/***/ }),

/***/ 29:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 30);

/***/ }),

/***/ 3:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),

/***/ 30:
/*!****************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ 4:
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages.json?{"type":"style"} ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/find/moment/moment":{},"pages/friend/applyFriend/applyFriend":{},"pages/compage/visiting/visiting":{"navigationBarBackgroundColor":"#ffffff","titleNView":{"buttons":[{"type":"menu"}]}},"pages/friend/applyList/applyList":{"titleNView":{"buttons":[{"text":"新的朋友","float":"left","fontWeight":"bold","fontSize":"18px","width":"100px"},{"text":"添加朋友","float":"right","fontSize":"18px","width":"100px"}]}},"pages/friend/addFriend/addFriend":{},"pages/tabbar/index/index":{},"pages/tabbar/my/my":{},"pages/tabbar/contacts/contacts":{},"pages/tabbar/find/find":{},"pages/login/login":{},"pages/compage/chat/chat":{}},"globalStyle":{}});

/***/ }),

/***/ 5:
/*!*******************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages.json?{"type":"stat"} ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__67AA67B"});

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 83:
/*!********************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/model/Friend.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.Friend = void 0;var _http = __webpack_require__(/*! ../utils/http.js */ 18);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var



Friend = /*#__PURE__*/function () {function Friend() {_classCallCheck(this, Friend);}_createClass(Friend, null, [{ key: "applyFriend",
    // 申请添加好友
    value: function applyFriend(params) {
      __f__("log", params, " at model\\Friend.js:8");
      return _http.Http.request({
        url: "/friend/apply",
        data: {
          apply_value: params.applyValue,
          nickname: params.nickname,
          user_id: params.userId,
          friend_id: params.friendId } });


    }

    // 检测是否好友
  }, { key: "checkIsFriend", value: function checkIsFriend(userId, friendId) {
      return _http.Http.request({
        url: "/friend/check?userId=".concat(userId, "&friendId=").concat(friendId),
        method: "GET" });

    }

    // 获取申请列表
  }, { key: "getApplyList", value: function getApplyList(userId) {
      return _http.Http.request({
        url: "/apply/list?friend_id=".concat(userId),
        method: "GET" });

    }

    // 同意好友申请
  }, { key: "applyAgree", value: function applyAgree(id) {
      return _http.Http.request({
        url: "/apply/agree",
        data: {
          _id: id } });


    }

    // 获取好友列表
  }, { key: "getFriendList", value: function getFriendList(_id) {
      return _http.Http.request({
        url: "/friend/list?user_id=".concat(_id),
        method: "GET" });

    } }]);return Friend;}();exports.Friend = Friend;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV4L2Rpc3QvdnVleC5lc20uanM/MmY2MiIsInVuaS1hcHA6Ly8vbW9kZWwvU2VhcmNoLmpzIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL21haW4uanM/NzEyMyIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nLm52dWU/YWRiYSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nLm52dWU/M2NjYiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nLm52dWU/N2FlNSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nLm52dWU/MTI5ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsInVuaS1hcHA6Ly8vcGFnZXMvY29tcGFnZS92aXNpdGluZy92aXNpdGluZy5udnVlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2NvbXBhZ2UvdmlzaXRpbmcvdmlzaXRpbmcubnZ1ZT9mY2I5Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2NvbXBhZ2UvdmlzaXRpbmcvdmlzaXRpbmcubnZ1ZT80ODYxIiwidW5pLWFwcDovLy9zdG9yZS9pbmRleC5qcyIsInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy91c2VyLmpzIiwidW5pLWFwcDovLy9tb2RlbC9DaGF0LmpzIiwidW5pLWFwcDovLy91dGlscy9odHRwLmpzIiwidW5pLWFwcDovLy9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL21haW4uanM/NGQyZCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9BcHAudnVlPzU0NmUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvQXBwLnZ1ZT8zNTE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdnVlL2JhYmVsLXByZXNldC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzPzQ3OTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2dWUvYmFiZWwtcHJlc2V0LWFwcC9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzPzk1YTIiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMuanNvbj81YTNlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzLmpzb24/M2JlZSIsbnVsbCwidW5pLWFwcDovLy9tb2RlbC9GcmllbmQuanMiXSwibmFtZXMiOlsidHlwb2YiLCJ2IiwicyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImlzRGVidWdNb2RlIiwiX19jaGFubmVsSWRfXyIsImxvZyIsInR5cGUiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJhcHBseSIsImZvcm1hdExvZyIsInNoaWZ0IiwicHVzaCIsInBvcCIsInJlcGxhY2UiLCJtc2dzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJhcHBseU1peGluIiwiVnVlIiwidmVyc2lvbiIsIk51bWJlciIsInNwbGl0IiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2dWV4SW5pdCIsIl9pbml0Iiwib3B0aW9ucyIsImluaXQiLCJjb25jYXQiLCIkb3B0aW9ucyIsInN0b3JlIiwiJHN0b3JlIiwicGFyZW50IiwiZGV2dG9vbEhvb2siLCJ3aW5kb3ciLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiZGV2dG9vbFBsdWdpbiIsIl9kZXZ0b29sSG9vayIsImVtaXQiLCJvbiIsInRhcmdldFN0YXRlIiwicmVwbGFjZVN0YXRlIiwic3Vic2NyaWJlIiwibXV0YXRpb24iLCJzdGF0ZSIsImZvckVhY2hWYWx1ZSIsIm9iaiIsImZuIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpc09iamVjdCIsImlzUHJvbWlzZSIsInZhbCIsInRoZW4iLCJhc3NlcnQiLCJjb25kaXRpb24iLCJFcnJvciIsIk1vZHVsZSIsInJhd01vZHVsZSIsInJ1bnRpbWUiLCJfY2hpbGRyZW4iLCJjcmVhdGUiLCJfcmF3TW9kdWxlIiwicmF3U3RhdGUiLCJwcm90b3R5cGVBY2Nlc3NvcnMkMSIsIm5hbWVzcGFjZWQiLCJjb25maWd1cmFibGUiLCJnZXQiLCJhZGRDaGlsZCIsIm1vZHVsZSIsInJlbW92ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJ1cGRhdGUiLCJhY3Rpb25zIiwibXV0YXRpb25zIiwiZ2V0dGVycyIsImZvckVhY2hDaGlsZCIsImZvckVhY2hHZXR0ZXIiLCJmb3JFYWNoQWN0aW9uIiwiZm9yRWFjaE11dGF0aW9uIiwiZGVmaW5lUHJvcGVydGllcyIsIk1vZHVsZUNvbGxlY3Rpb24iLCJyYXdSb290TW9kdWxlIiwicmVnaXN0ZXIiLCJwYXRoIiwicmVkdWNlIiwicm9vdCIsImdldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSQxIiwidGhpcyQxIiwicHJvY2VzcyIsImFzc2VydFJhd01vZHVsZSIsIm5ld01vZHVsZSIsInNsaWNlIiwibW9kdWxlcyIsInJhd0NoaWxkTW9kdWxlIiwidW5yZWdpc3RlciIsInRhcmdldE1vZHVsZSIsIndhcm4iLCJmdW5jdGlvbkFzc2VydCIsInZhbHVlIiwiZXhwZWN0ZWQiLCJvYmplY3RBc3NlcnQiLCJoYW5kbGVyIiwiYXNzZXJ0VHlwZXMiLCJhc3NlcnRPcHRpb25zIiwibWFrZUFzc2VydGlvbk1lc3NhZ2UiLCJidWYiLCJTdG9yZSIsImluc3RhbGwiLCJQcm9taXNlIiwicGx1Z2lucyIsInN0cmljdCIsIl9jb21taXR0aW5nIiwiX2FjdGlvbnMiLCJfYWN0aW9uU3Vic2NyaWJlcnMiLCJfbXV0YXRpb25zIiwiX3dyYXBwZWRHZXR0ZXJzIiwiX21vZHVsZXMiLCJfbW9kdWxlc05hbWVzcGFjZU1hcCIsIl9zdWJzY3JpYmVycyIsIl93YXRjaGVyVk0iLCJyZWYiLCJkaXNwYXRjaCIsImNvbW1pdCIsImJvdW5kRGlzcGF0Y2giLCJwYXlsb2FkIiwiYm91bmRDb21taXQiLCJpbnN0YWxsTW9kdWxlIiwicmVzZXRTdG9yZVZNIiwicGx1Z2luIiwiY29uZmlnIiwiZGV2dG9vbHMiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJfdm0iLCJfZGF0YSIsIiQkc3RhdGUiLCJzZXQiLCJfdHlwZSIsIl9wYXlsb2FkIiwiX29wdGlvbnMiLCJ1bmlmeU9iamVjdFN0eWxlIiwiZW50cnkiLCJlcnJvciIsIl93aXRoQ29tbWl0IiwiY29tbWl0SXRlcmF0b3IiLCJzdWIiLCJzaWxlbnQiLCJhY3Rpb24iLCJhbGwiLCJnZW5lcmljU3Vic2NyaWJlIiwic3Vic2NyaWJlQWN0aW9uIiwid2F0Y2giLCJnZXR0ZXIiLCJjYiIsIiR3YXRjaCIsInJlZ2lzdGVyTW9kdWxlIiwiaXNBcnJheSIsInByZXNlcnZlU3RhdGUiLCJ1bnJlZ2lzdGVyTW9kdWxlIiwicGFyZW50U3RhdGUiLCJnZXROZXN0ZWRTdGF0ZSIsImRlbGV0ZSIsInJlc2V0U3RvcmUiLCJob3RVcGRhdGUiLCJuZXdPcHRpb25zIiwiY29tbWl0dGluZyIsInN1YnMiLCJpIiwic3BsaWNlIiwiaG90Iiwib2xkVm0iLCJ3cmFwcGVkR2V0dGVycyIsImNvbXB1dGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZGF0YSIsImVuYWJsZVN0cmljdE1vZGUiLCJuZXh0VGljayIsIiRkZXN0cm95Iiwicm9vdFN0YXRlIiwiaXNSb290IiwibW9kdWxlTmFtZSIsImxvY2FsIiwiY29udGV4dCIsIm1ha2VMb2NhbENvbnRleHQiLCJuYW1lc3BhY2VkVHlwZSIsInJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlckFjdGlvbiIsInJlZ2lzdGVyR2V0dGVyIiwiY2hpbGQiLCJub05hbWVzcGFjZSIsIm1ha2VMb2NhbEdldHRlcnMiLCJnZXR0ZXJzUHJveHkiLCJzcGxpdFBvcyIsImxvY2FsVHlwZSIsIndyYXBwZWRNdXRhdGlvbkhhbmRsZXIiLCJ3cmFwcGVkQWN0aW9uSGFuZGxlciIsInJlcyIsInJvb3RHZXR0ZXJzIiwicmVzb2x2ZSIsImNhdGNoIiwiZXJyIiwicmF3R2V0dGVyIiwid3JhcHBlZEdldHRlciIsImRlZXAiLCJzeW5jIiwiX1Z1ZSIsIm1hcFN0YXRlIiwibm9ybWFsaXplTmFtZXNwYWNlIiwic3RhdGVzIiwibm9ybWFsaXplTWFwIiwibWFwcGVkU3RhdGUiLCJnZXRNb2R1bGVCeU5hbWVzcGFjZSIsInZ1ZXgiLCJtYXBNdXRhdGlvbnMiLCJtYXBwZWRNdXRhdGlvbiIsImxlbiIsIm1hcEdldHRlcnMiLCJtYXBwZWRHZXR0ZXIiLCJtYXBBY3Rpb25zIiwibWFwcGVkQWN0aW9uIiwiY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMiLCJiaW5kIiwiY2hhckF0IiwiaGVscGVyIiwiaW5kZXhfZXNtIiwiU2VhcmNoIiwia2V5d29yZCIsImlkIiwiSHR0cCIsInJlcXVlc3QiLCJ1cmwiLCJ1c2UiLCJWdWV4IiwidXNlciIsInRva2VuIiwiY2hhdCIsIlNFVF9UT0tFTiIsIlNFVF9VU0VSIiwiU0VUX0NIQVQiLCJJTklUTE9HSU4iLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkNoYXQiLCJ3c1VybCIsIkxPR0lOIiwic2V0U3RvcmFnZVN5bmMiLCJMT0dPVVQiLCJyZW1vdmVTdG9yYWdlU3luYyIsImNsb3NlIiwiYXJnIiwic29ja2V0IiwiY29ubmVjdFNvY2tldCIsIl9pZCIsImNvbXBsZXRlIiwib25PcGVuIiwic2VuZCIsIm9uTWVzc2FnZSIsIm9uQ2xvc2UiLCJvbkVycm9yIiwiaXNPbmxpbmUiLCJjaGF0T2JqIiwidXNlcl9pZCIsInRvX2lkIiwiY2hhdF90eXBlIiwiZXJyb3JzIiwibWV0aG9kIiwicmVqZWN0IiwiYXBpQmFzZVVybCIsImhlYWRlciIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwic3RhcnRzV2l0aCIsInN0YXR1cyIsInNob3dUb2FzdCIsInRpdGxlIiwibWVzc2FnZSIsImljb24iLCJmYWlsIiwiZW52IiwiU1RBVF9WRVJTSU9OIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwiZ2V0RENsb3VkSWQiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsInNpZ24iLCJzdWJzdHIiLCJnZXRTcGxpY2luZyIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsIl9zZW5kRXZlbnRSZXF1ZXN0IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwiZV9uIiwiZV92IiwiZ2V0TmV0d29ya1R5cGUiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm1haW4iLCJleHBvcnRzIiwiT3AiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsInJlY29yZCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJkb25lIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwib2JqZWN0IiwicmV2ZXJzZSIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsInNraXBUZW1wUmVzZXQiLCJwcmV2Iiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiRnVuY3Rpb24iLCJGcmllbmQiLCJwYXJhbXMiLCJhcHBseV92YWx1ZSIsImFwcGx5VmFsdWUiLCJuaWNrbmFtZSIsInVzZXJJZCIsImZyaWVuZF9pZCIsImZyaWVuZElkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs0R0NsRkEsU0FBU0EsS0FBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDakIsTUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkwsQ0FBL0IsQ0FBUjtB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RztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFD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RGY7QUFFTEMsa0JBQVEsRUFBRUgsTUFBTSxDQUFDRyxRQUZaO0FBR0xqVyxpQkFBTyxFQUFFOFYsTUFBTSxDQUFDSSxNQUhYO0FBSUxDLG1CQUFTLEVBQUVMLE1BQU0sQ0FBQ00sUUFKYixFQUZhLEVBQWIsQ0FBUDs7O0FBU0E7O0FBRUQ7MkRBQ3FCRixNLEVBQVFFLFEsRUFBVTtBQUN0QyxhQUFPclksV0FBS0MsT0FBTCxDQUFhO0FBQ25CQyxXQUFHLGlDQUEwQmlZLE1BQTFCLHVCQUE2Q0UsUUFBN0MsQ0FEZ0I7QUFFbkJoVyxjQUFNLEVBQUUsS0FGVyxFQUFiLENBQVA7O0FBSUE7O0FBRUQ7eURBQ29COFYsTSxFQUFRO0FBQzNCLGFBQU9uWSxXQUFLQyxPQUFMLENBQWE7QUFDbkJDLFdBQUcsa0NBQTJCaVksTUFBM0IsQ0FEZ0I7QUFFbkI5VixjQUFNLEVBQUUsS0FGVyxFQUFiLENBQVA7O0FBSUE7O0FBRUQ7cURBQ2tCdEMsRSxFQUFJO0FBQ3JCLGFBQU9DLFdBQUtDLE9BQUwsQ0FBYTtBQUNuQkMsV0FBRyxnQkFEZ0I7QUFFbkJ4RCxZQUFJLEVBQUU7QUFDTDhFLGFBQUcsRUFBRXpCLEVBREEsRUFGYSxFQUFiLENBQVA7OztBQU1BOztBQUVEOzJEQUNxQnlCLEcsRUFBSztBQUN6QixhQUFPeEIsV0FBS0MsT0FBTCxDQUFhO0FBQ25CQyxXQUFHLGlDQUEwQnNCLEdBQTFCLENBRGdCO0FBRW5CYSxjQUFNLEVBQUUsS0FGVyxFQUFiLENBQVA7O0FBSUEsSyIsImZpbGUiOiJwYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzNSk7XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxufVxuXG5mdW5jdGlvbiBpc0RlYnVnTW9kZSAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIHZhciB0eXBlID0gYXJncy5zaGlmdCgpXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgYXJncy5wdXNoKGFyZ3MucG9wKCkucmVwbGFjZSgnYXQgJywgJ3VuaS1hcHA6Ly8vJykpXG4gICAgcmV0dXJuIGNvbnNvbGVbdHlwZV1bJ2FwcGx5J10oY29uc29sZSwgYXJncylcbiAgfVxuXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgYXJyYXldJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZcbiAgfSlcbiAgdmFyIG1zZyA9ICcnXG5cbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxuXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XG4gICAgICBtc2cgKz0gbGFzdE1zZ1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gbXNnc1swXVxuICB9XG5cbiAgY29uc29sZVt0eXBlXShtc2cpXG59XG4iLCIvKipcbiAqIHZ1ZXggdjMuMC4xXG4gKiAoYykgMjAxNyBFdmFuIFlvdVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbnZhciBhcHBseU1peGluID0gZnVuY3Rpb24gKFZ1ZSkge1xuICB2YXIgdmVyc2lvbiA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKTtcblxuICBpZiAodmVyc2lvbiA+PSAyKSB7XG4gICAgVnVlLm1peGluKHsgYmVmb3JlQ3JlYXRlOiB2dWV4SW5pdCB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdmVycmlkZSBpbml0IGFuZCBpbmplY3QgdnVleCBpbml0IHByb2NlZHVyZVxuICAgIC8vIGZvciAxLnggYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIF9pbml0ID0gVnVlLnByb3RvdHlwZS5faW5pdDtcbiAgICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBvcHRpb25zLmluaXQgPSBvcHRpb25zLmluaXRcbiAgICAgICAgPyBbdnVleEluaXRdLmNvbmNhdChvcHRpb25zLmluaXQpXG4gICAgICAgIDogdnVleEluaXQ7XG4gICAgICBfaW5pdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVnVleCBpbml0IGhvb2ssIGluamVjdGVkIGludG8gZWFjaCBpbnN0YW5jZXMgaW5pdCBob29rcyBsaXN0LlxuICAgKi9cblxuICBmdW5jdGlvbiB2dWV4SW5pdCAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIC8vIHN0b3JlIGluamVjdGlvblxuICAgIGlmIChvcHRpb25zLnN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IHR5cGVvZiBvcHRpb25zLnN0b3JlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5zdG9yZSgpXG4gICAgICAgIDogb3B0aW9ucy5zdG9yZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LiRzdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSBvcHRpb25zLnBhcmVudC4kc3RvcmU7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGV2dG9vbEhvb2sgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuZnVuY3Rpb24gZGV2dG9vbFBsdWdpbiAoc3RvcmUpIHtcbiAgaWYgKCFkZXZ0b29sSG9vaykgeyByZXR1cm4gfVxuXG4gIHN0b3JlLl9kZXZ0b29sSG9vayA9IGRldnRvb2xIb29rO1xuXG4gIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6aW5pdCcsIHN0b3JlKTtcblxuICBkZXZ0b29sSG9vay5vbigndnVleDp0cmF2ZWwtdG8tc3RhdGUnLCBmdW5jdGlvbiAodGFyZ2V0U3RhdGUpIHtcbiAgICBzdG9yZS5yZXBsYWNlU3RhdGUodGFyZ2V0U3RhdGUpO1xuICB9KTtcblxuICBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG11dGF0aW9uLCBzdGF0ZSkge1xuICAgIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6bXV0YXRpb24nLCBtdXRhdGlvbiwgc3RhdGUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBwYXNzIHRoZSB0ZXN0XG4gKiBieSBzZWNvbmQgYXJndW1lbnQgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJuIHsqfVxuICovXG4vKipcbiAqIERlZXAgY29weSB0aGUgZ2l2ZW4gb2JqZWN0IGNvbnNpZGVyaW5nIGNpcmN1bGFyIHN0cnVjdHVyZS5cbiAqIFRoaXMgZnVuY3Rpb24gY2FjaGVzIGFsbCBuZXN0ZWQgb2JqZWN0cyBhbmQgaXRzIGNvcGllcy5cbiAqIElmIGl0IGRldGVjdHMgY2lyY3VsYXIgc3RydWN0dXJlLCB1c2UgY2FjaGVkIGNvcHkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBjYWNoZVxuICogQHJldHVybiB7Kn1cbiAqL1xuXG5cbi8qKlxuICogZm9yRWFjaCBmb3Igb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hWYWx1ZSAob2JqLCBmbikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4ob2JqW2tleV0sIGtleSk7IH0pO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1zZykge1xuICBpZiAoIWNvbmRpdGlvbikgeyB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZXhdIFwiICsgbXNnKSkgfVxufVxuXG52YXIgTW9kdWxlID0gZnVuY3Rpb24gTW9kdWxlIChyYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgdGhpcy5ydW50aW1lID0gcnVudGltZTtcbiAgdGhpcy5fY2hpbGRyZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9yYXdNb2R1bGUgPSByYXdNb2R1bGU7XG4gIHZhciByYXdTdGF0ZSA9IHJhd01vZHVsZS5zdGF0ZTtcbiAgdGhpcy5zdGF0ZSA9ICh0eXBlb2YgcmF3U3RhdGUgPT09ICdmdW5jdGlvbicgPyByYXdTdGF0ZSgpIDogcmF3U3RhdGUpIHx8IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQxID0geyBuYW1lc3BhY2VkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLm5hbWVzcGFjZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZFxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIGFkZENoaWxkIChrZXksIG1vZHVsZSkge1xuICB0aGlzLl9jaGlsZHJlbltrZXldID0gbW9kdWxlO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkIChrZXkpIHtcbiAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2tleV07XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQgKGtleSkge1xuICByZXR1cm4gdGhpcy5fY2hpbGRyZW5ba2V5XVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKHJhd01vZHVsZSkge1xuICB0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZCA9IHJhd01vZHVsZS5uYW1lc3BhY2VkO1xuICBpZiAocmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucyA9IHJhd01vZHVsZS5hY3Rpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucyA9IHJhd01vZHVsZS5tdXRhdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmdldHRlcnMgPSByYXdNb2R1bGUuZ2V0dGVycztcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiBmb3JFYWNoQ2hpbGQgKGZuKSB7XG4gIGZvckVhY2hWYWx1ZSh0aGlzLl9jaGlsZHJlbiwgZm4pO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoR2V0dGVyID0gZnVuY3Rpb24gZm9yRWFjaEdldHRlciAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEFjdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hBY3Rpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hNdXRhdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hNdXRhdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucywgZm4pO1xuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggTW9kdWxlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxudmFyIE1vZHVsZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBNb2R1bGVDb2xsZWN0aW9uIChyYXdSb290TW9kdWxlKSB7XG4gIC8vIHJlZ2lzdGVyIHJvb3QgbW9kdWxlIChWdWV4LlN0b3JlIG9wdGlvbnMpXG4gIHRoaXMucmVnaXN0ZXIoW10sIHJhd1Jvb3RNb2R1bGUsIGZhbHNlKTtcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG1vZHVsZSwga2V5KSB7XG4gICAgcmV0dXJuIG1vZHVsZS5nZXRDaGlsZChrZXkpXG4gIH0sIHRoaXMucm9vdClcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE5hbWVzcGFjZSA9IGZ1bmN0aW9uIGdldE5hbWVzcGFjZSAocGF0aCkge1xuICB2YXIgbW9kdWxlID0gdGhpcy5yb290O1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwga2V5KSB7XG4gICAgbW9kdWxlID0gbW9kdWxlLmdldENoaWxkKGtleSk7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSArIChtb2R1bGUubmFtZXNwYWNlZCA/IGtleSArICcvJyA6ICcnKVxuICB9LCAnJylcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSQxIChyYXdSb290TW9kdWxlKSB7XG4gIHVwZGF0ZShbXSwgdGhpcy5yb290LCByYXdSb290TW9kdWxlKTtcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIgKHBhdGgsIHJhd01vZHVsZSwgcnVudGltZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggcnVudGltZSA9PT0gdm9pZCAwICkgcnVudGltZSA9IHRydWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRSYXdNb2R1bGUocGF0aCwgcmF3TW9kdWxlKTtcbiAgfVxuXG4gIHZhciBuZXdNb2R1bGUgPSBuZXcgTW9kdWxlKHJhd01vZHVsZSwgcnVudGltZSk7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMucm9vdCA9IG5ld01vZHVsZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHBhcmVudC5hZGRDaGlsZChwYXRoW3BhdGgubGVuZ3RoIC0gMV0sIG5ld01vZHVsZSk7XG4gIH1cblxuICAvLyByZWdpc3RlciBuZXN0ZWQgbW9kdWxlc1xuICBpZiAocmF3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlLm1vZHVsZXMsIGZ1bmN0aW9uIChyYXdDaGlsZE1vZHVsZSwga2V5KSB7XG4gICAgICB0aGlzJDEucmVnaXN0ZXIocGF0aC5jb25jYXQoa2V5KSwgcmF3Q2hpbGRNb2R1bGUsIHJ1bnRpbWUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlciAocGF0aCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICB2YXIga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICBpZiAoIXBhcmVudC5nZXRDaGlsZChrZXkpLnJ1bnRpbWUpIHsgcmV0dXJuIH1cblxuICBwYXJlbnQucmVtb3ZlQ2hpbGQoa2V5KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZSAocGF0aCwgdGFyZ2V0TW9kdWxlLCBuZXdNb2R1bGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRSYXdNb2R1bGUocGF0aCwgbmV3TW9kdWxlKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0YXJnZXQgbW9kdWxlXG4gIHRhcmdldE1vZHVsZS51cGRhdGUobmV3TW9kdWxlKTtcblxuICAvLyB1cGRhdGUgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgICBpZiAoIXRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJbdnVleF0gdHJ5aW5nIHRvIGFkZCBhIG5ldyBtb2R1bGUgJ1wiICsga2V5ICsgXCInIG9uIGhvdCByZWxvYWRpbmcsIFwiICtcbiAgICAgICAgICAgICdtYW51YWwgcmVsb2FkIGlzIG5lZWRlZCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKFxuICAgICAgICBwYXRoLmNvbmNhdChrZXkpLFxuICAgICAgICB0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSxcbiAgICAgICAgbmV3TW9kdWxlLm1vZHVsZXNba2V5XVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGZ1bmN0aW9uQXNzZXJ0ID0ge1xuICBhc3NlcnQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nOyB9LFxuICBleHBlY3RlZDogJ2Z1bmN0aW9uJ1xufTtcblxudmFyIG9iamVjdEFzc2VydCA9IHtcbiAgYXNzZXJ0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5oYW5kbGVyID09PSAnZnVuY3Rpb24nKTsgfSxcbiAgZXhwZWN0ZWQ6ICdmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBcImhhbmRsZXJcIiBmdW5jdGlvbidcbn07XG5cbnZhciBhc3NlcnRUeXBlcyA9IHtcbiAgZ2V0dGVyczogZnVuY3Rpb25Bc3NlcnQsXG4gIG11dGF0aW9uczogZnVuY3Rpb25Bc3NlcnQsXG4gIGFjdGlvbnM6IG9iamVjdEFzc2VydFxufTtcblxuZnVuY3Rpb24gYXNzZXJ0UmF3TW9kdWxlIChwYXRoLCByYXdNb2R1bGUpIHtcbiAgT2JqZWN0LmtleXMoYXNzZXJ0VHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghcmF3TW9kdWxlW2tleV0pIHsgcmV0dXJuIH1cblxuICAgIHZhciBhc3NlcnRPcHRpb25zID0gYXNzZXJ0VHlwZXNba2V5XTtcblxuICAgIGZvckVhY2hWYWx1ZShyYXdNb2R1bGVba2V5XSwgZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgICBhc3NlcnQoXG4gICAgICAgIGFzc2VydE9wdGlvbnMuYXNzZXJ0KHZhbHVlKSxcbiAgICAgICAgbWFrZUFzc2VydGlvbk1lc3NhZ2UocGF0aCwga2V5LCB0eXBlLCB2YWx1ZSwgYXNzZXJ0T3B0aW9ucy5leHBlY3RlZClcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlQXNzZXJ0aW9uTWVzc2FnZSAocGF0aCwga2V5LCB0eXBlLCB2YWx1ZSwgZXhwZWN0ZWQpIHtcbiAgdmFyIGJ1ZiA9IGtleSArIFwiIHNob3VsZCBiZSBcIiArIGV4cGVjdGVkICsgXCIgYnV0IFxcXCJcIiArIGtleSArIFwiLlwiICsgdHlwZSArIFwiXFxcIlwiO1xuICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XG4gICAgYnVmICs9IFwiIGluIG1vZHVsZSBcXFwiXCIgKyAocGF0aC5qb2luKCcuJykpICsgXCJcXFwiXCI7XG4gIH1cbiAgYnVmICs9IFwiIGlzIFwiICsgKEpTT04uc3RyaW5naWZ5KHZhbHVlKSkgKyBcIi5cIjtcbiAgcmV0dXJuIGJ1ZlxufVxuXG52YXIgVnVlOyAvLyBiaW5kIG9uIGluc3RhbGxcblxudmFyIFN0b3JlID0gZnVuY3Rpb24gU3RvcmUgKG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIC8vIEF1dG8gaW5zdGFsbCBpZiBpdCBpcyBub3QgZG9uZSB5ZXQgYW5kIGB3aW5kb3dgIGhhcyBgVnVlYC5cbiAgLy8gVG8gYWxsb3cgdXNlcnMgdG8gYXZvaWQgYXV0by1pbnN0YWxsYXRpb24gaW4gc29tZSBjYXNlcyxcbiAgLy8gdGhpcyBjb2RlIHNob3VsZCBiZSBwbGFjZWQgaGVyZS4gU2VlICM3MzFcbiAgaWYgKCFWdWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICAgIGluc3RhbGwod2luZG93LlZ1ZSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChWdWUsIFwibXVzdCBjYWxsIFZ1ZS51c2UoVnVleCkgYmVmb3JlIGNyZWF0aW5nIGEgc3RvcmUgaW5zdGFuY2UuXCIpO1xuICAgIGFzc2VydCh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcsIFwidnVleCByZXF1aXJlcyBhIFByb21pc2UgcG9seWZpbGwgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIFN0b3JlLCBcIlN0b3JlIG11c3QgYmUgY2FsbGVkIHdpdGggdGhlIG5ldyBvcGVyYXRvci5cIik7XG4gIH1cblxuICB2YXIgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2luczsgaWYgKCBwbHVnaW5zID09PSB2b2lkIDAgKSBwbHVnaW5zID0gW107XG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDsgaWYgKCBzdHJpY3QgPT09IHZvaWQgMCApIHN0cmljdCA9IGZhbHNlO1xuXG4gIHZhciBzdGF0ZSA9IG9wdGlvbnMuc3RhdGU7IGlmICggc3RhdGUgPT09IHZvaWQgMCApIHN0YXRlID0ge307XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKCkgfHwge307XG4gIH1cblxuICAvLyBzdG9yZSBpbnRlcm5hbCBzdGF0ZVxuICB0aGlzLl9jb21taXR0aW5nID0gZmFsc2U7XG4gIHRoaXMuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX21vZHVsZXMgPSBuZXcgTW9kdWxlQ29sbGVjdGlvbihvcHRpb25zKTtcbiAgdGhpcy5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX3dhdGNoZXJWTSA9IG5ldyBWdWUoKTtcblxuICAvLyBiaW5kIGNvbW1pdCBhbmQgZGlzcGF0Y2ggdG8gc2VsZlxuICB2YXIgc3RvcmUgPSB0aGlzO1xuICB2YXIgcmVmID0gdGhpcztcbiAgdmFyIGRpc3BhdGNoID0gcmVmLmRpc3BhdGNoO1xuICB2YXIgY29tbWl0ID0gcmVmLmNvbW1pdDtcbiAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIGJvdW5kRGlzcGF0Y2ggKHR5cGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2guY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZClcbiAgfTtcbiAgdGhpcy5jb21taXQgPSBmdW5jdGlvbiBib3VuZENvbW1pdCAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21taXQuY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZCwgb3B0aW9ucylcbiAgfTtcblxuICAvLyBzdHJpY3QgbW9kZVxuICB0aGlzLnN0cmljdCA9IHN0cmljdDtcblxuICAvLyBpbml0IHJvb3QgbW9kdWxlLlxuICAvLyB0aGlzIGFsc28gcmVjdXJzaXZlbHkgcmVnaXN0ZXJzIGFsbCBzdWItbW9kdWxlc1xuICAvLyBhbmQgY29sbGVjdHMgYWxsIG1vZHVsZSBnZXR0ZXJzIGluc2lkZSB0aGlzLl93cmFwcGVkR2V0dGVyc1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHN0YXRlLCBbXSwgdGhpcy5fbW9kdWxlcy5yb290KTtcblxuICAvLyBpbml0aWFsaXplIHRoZSBzdG9yZSB2bSwgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSByZWFjdGl2aXR5XG4gIC8vIChhbHNvIHJlZ2lzdGVycyBfd3JhcHBlZEdldHRlcnMgYXMgY29tcHV0ZWQgcHJvcGVydGllcylcbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHN0YXRlKTtcblxuICAvLyBhcHBseSBwbHVnaW5zXG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7IHJldHVybiBwbHVnaW4odGhpcyQxKTsgfSk7XG5cbiAgaWYgKFZ1ZS5jb25maWcuZGV2dG9vbHMpIHtcbiAgICBkZXZ0b29sUGx1Z2luKHRoaXMpO1xuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBzdGF0ZTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fdm0uX2RhdGEuJCRzdGF0ZVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLnNldCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KGZhbHNlLCBcIlVzZSBzdG9yZS5yZXBsYWNlU3RhdGUoKSB0byBleHBsaWNpdCByZXBsYWNlIHN0b3JlIHN0YXRlLlwiKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIGNvbW1pdCAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBjb21taXRcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuICAgIHZhciBvcHRpb25zID0gcmVmLm9wdGlvbnM7XG5cbiAgdmFyIG11dGF0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX211dGF0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIGNvbW1pdEl0ZXJhdG9yIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIobXV0YXRpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgb3B0aW9ucyAmJiBvcHRpb25zLnNpbGVudFxuICApIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIlt2dWV4XSBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUgKyBcIi4gU2lsZW50IG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBcIiArXG4gICAgICAnVXNlIHRoZSBmaWx0ZXIgZnVuY3Rpb25hbGl0eSBpbiB0aGUgdnVlLWRldnRvb2xzJ1xuICAgICk7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoIChfdHlwZSwgX3BheWxvYWQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgZGlzcGF0Y2hcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG5cbiAgdmFyIGFjdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9hY3Rpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gYWN0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViKGFjdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSk7XG5cbiAgcmV0dXJuIGVudHJ5Lmxlbmd0aCA+IDFcbiAgICA/IFByb21pc2UuYWxsKGVudHJ5Lm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcihwYXlsb2FkKTsgfSkpXG4gICAgOiBlbnRyeVswXShwYXlsb2FkKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSAoZm4pIHtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoZm4sIHRoaXMuX3N1YnNjcmliZXJzKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZUFjdGlvbiA9IGZ1bmN0aW9uIHN1YnNjcmliZUFjdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoZm4sIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzKVxufTtcblxuU3RvcmUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gd2F0Y2ggKGdldHRlciwgY2IsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCh0eXBlb2YgZ2V0dGVyID09PSAnZnVuY3Rpb24nLCBcInN0b3JlLndhdGNoIG9ubHkgYWNjZXB0cyBhIGZ1bmN0aW9uLlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fd2F0Y2hlclZNLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiBnZXR0ZXIodGhpcyQxLnN0YXRlLCB0aGlzJDEuZ2V0dGVycyk7IH0sIGNiLCBvcHRpb25zKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnJlcGxhY2VTdGF0ZSA9IGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAoc3RhdGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuX3ZtLl9kYXRhLiQkc3RhdGUgPSBzdGF0ZTtcbiAgfSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZSAocGF0aCwgcmF3TW9kdWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgICBhc3NlcnQocGF0aC5sZW5ndGggPiAwLCAnY2Fubm90IHJlZ2lzdGVyIHRoZSByb290IG1vZHVsZSBieSB1c2luZyByZWdpc3Rlck1vZHVsZS4nKTtcbiAgfVxuXG4gIHRoaXMuX21vZHVsZXMucmVnaXN0ZXIocGF0aCwgcmF3TW9kdWxlKTtcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCB0aGlzLnN0YXRlLCBwYXRoLCB0aGlzLl9tb2R1bGVzLmdldChwYXRoKSwgb3B0aW9ucy5wcmVzZXJ2ZVN0YXRlKTtcbiAgLy8gcmVzZXQgc3RvcmUgdG8gdXBkYXRlIGdldHRlcnMuLi5cbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHRoaXMuc3RhdGUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnVucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyTW9kdWxlIChwYXRoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgfVxuXG4gIHRoaXMuX21vZHVsZXMudW5yZWdpc3RlcihwYXRoKTtcbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUodGhpcyQxLnN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgVnVlLmRlbGV0ZShwYXJlbnRTdGF0ZSwgcGF0aFtwYXRoLmxlbmd0aCAtIDFdKTtcbiAgfSk7XG4gIHJlc2V0U3RvcmUodGhpcyk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuaG90VXBkYXRlID0gZnVuY3Rpb24gaG90VXBkYXRlIChuZXdPcHRpb25zKSB7XG4gIHRoaXMuX21vZHVsZXMudXBkYXRlKG5ld09wdGlvbnMpO1xuICByZXNldFN0b3JlKHRoaXMsIHRydWUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLl93aXRoQ29tbWl0ID0gZnVuY3Rpb24gX3dpdGhDb21taXQgKGZuKSB7XG4gIHZhciBjb21taXR0aW5nID0gdGhpcy5fY29tbWl0dGluZztcbiAgdGhpcy5fY29tbWl0dGluZyA9IHRydWU7XG4gIGZuKCk7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBjb21taXR0aW5nO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN0b3JlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIGdlbmVyaWNTdWJzY3JpYmUgKGZuLCBzdWJzKSB7XG4gIGlmIChzdWJzLmluZGV4T2YoZm4pIDwgMCkge1xuICAgIHN1YnMucHVzaChmbik7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IHN1YnMuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgc3Vicy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmUgKHN0b3JlLCBob3QpIHtcbiAgc3RvcmUuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc3RhdGUgPSBzdG9yZS5zdGF0ZTtcbiAgLy8gaW5pdCBhbGwgbW9kdWxlc1xuICBpbnN0YWxsTW9kdWxlKHN0b3JlLCBzdGF0ZSwgW10sIHN0b3JlLl9tb2R1bGVzLnJvb3QsIHRydWUpO1xuICAvLyByZXNldCB2bVxuICByZXNldFN0b3JlVk0oc3RvcmUsIHN0YXRlLCBob3QpO1xufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlVk0gKHN0b3JlLCBzdGF0ZSwgaG90KSB7XG4gIHZhciBvbGRWbSA9IHN0b3JlLl92bTtcblxuICAvLyBiaW5kIHN0b3JlIHB1YmxpYyBnZXR0ZXJzXG4gIHN0b3JlLmdldHRlcnMgPSB7fTtcbiAgdmFyIHdyYXBwZWRHZXR0ZXJzID0gc3RvcmUuX3dyYXBwZWRHZXR0ZXJzO1xuICB2YXIgY29tcHV0ZWQgPSB7fTtcbiAgZm9yRWFjaFZhbHVlKHdyYXBwZWRHZXR0ZXJzLCBmdW5jdGlvbiAoZm4sIGtleSkge1xuICAgIC8vIHVzZSBjb21wdXRlZCB0byBsZXZlcmFnZSBpdHMgbGF6eS1jYWNoaW5nIG1lY2hhbmlzbVxuICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmbihzdG9yZSk7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0b3JlLmdldHRlcnMsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5fdm1ba2V5XTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUgLy8gZm9yIGxvY2FsIGdldHRlcnNcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdXNlIGEgVnVlIGluc3RhbmNlIHRvIHN0b3JlIHRoZSBzdGF0ZSB0cmVlXG4gIC8vIHN1cHByZXNzIHdhcm5pbmdzIGp1c3QgaW4gY2FzZSB0aGUgdXNlciBoYXMgYWRkZWRcbiAgLy8gc29tZSBmdW5reSBnbG9iYWwgbWl4aW5zXG4gIHZhciBzaWxlbnQgPSBWdWUuY29uZmlnLnNpbGVudDtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSB0cnVlO1xuICBzdG9yZS5fdm0gPSBuZXcgVnVlKHtcbiAgICBkYXRhOiB7XG4gICAgICAkJHN0YXRlOiBzdGF0ZVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IGNvbXB1dGVkXG4gIH0pO1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHNpbGVudDtcblxuICAvLyBlbmFibGUgc3RyaWN0IG1vZGUgZm9yIG5ldyB2bVxuICBpZiAoc3RvcmUuc3RyaWN0KSB7XG4gICAgZW5hYmxlU3RyaWN0TW9kZShzdG9yZSk7XG4gIH1cblxuICBpZiAob2xkVm0pIHtcbiAgICBpZiAoaG90KSB7XG4gICAgICAvLyBkaXNwYXRjaCBjaGFuZ2VzIGluIGFsbCBzdWJzY3JpYmVkIHdhdGNoZXJzXG4gICAgICAvLyB0byBmb3JjZSBnZXR0ZXIgcmUtZXZhbHVhdGlvbiBmb3IgaG90IHJlbG9hZGluZy5cbiAgICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2xkVm0uX2RhdGEuJCRzdGF0ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9sZFZtLiRkZXN0cm95KCk7IH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGxNb2R1bGUgKHN0b3JlLCByb290U3RhdGUsIHBhdGgsIG1vZHVsZSwgaG90KSB7XG4gIHZhciBpc1Jvb3QgPSAhcGF0aC5sZW5ndGg7XG4gIHZhciBuYW1lc3BhY2UgPSBzdG9yZS5fbW9kdWxlcy5nZXROYW1lc3BhY2UocGF0aCk7XG5cbiAgLy8gcmVnaXN0ZXIgaW4gbmFtZXNwYWNlIG1hcFxuICBpZiAobW9kdWxlLm5hbWVzcGFjZWQpIHtcbiAgICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdID0gbW9kdWxlO1xuICB9XG5cbiAgLy8gc2V0IHN0YXRlXG4gIGlmICghaXNSb290ICYmICFob3QpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZShyb290U3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICB2YXIgbW9kdWxlTmFtZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICBWdWUuc2V0KHBhcmVudFN0YXRlLCBtb2R1bGVOYW1lLCBtb2R1bGUuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGxvY2FsID0gbW9kdWxlLmNvbnRleHQgPSBtYWtlTG9jYWxDb250ZXh0KHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpO1xuXG4gIG1vZHVsZS5mb3JFYWNoTXV0YXRpb24oZnVuY3Rpb24gKG11dGF0aW9uLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJNdXRhdGlvbihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIG11dGF0aW9uLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQWN0aW9uKGZ1bmN0aW9uIChhY3Rpb24sIGtleSkge1xuICAgIHZhciB0eXBlID0gYWN0aW9uLnJvb3QgPyBrZXkgOiBuYW1lc3BhY2UgKyBrZXk7XG4gICAgdmFyIGhhbmRsZXIgPSBhY3Rpb24uaGFuZGxlciB8fCBhY3Rpb247XG4gICAgcmVnaXN0ZXJBY3Rpb24oc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hHZXR0ZXIoZnVuY3Rpb24gKGdldHRlciwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyR2V0dGVyKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgZ2V0dGVyLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNoaWxkLCBrZXkpIHtcbiAgICBpbnN0YWxsTW9kdWxlKHN0b3JlLCByb290U3RhdGUsIHBhdGguY29uY2F0KGtleSksIGNoaWxkLCBob3QpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBtYWtlIGxvY2FsaXplZCBkaXNwYXRjaCwgY29tbWl0LCBnZXR0ZXJzIGFuZCBzdGF0ZVxuICogaWYgdGhlcmUgaXMgbm8gbmFtZXNwYWNlLCBqdXN0IHVzZSByb290IG9uZXNcbiAqL1xuZnVuY3Rpb24gbWFrZUxvY2FsQ29udGV4dCAoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCkge1xuICB2YXIgbm9OYW1lc3BhY2UgPSBuYW1lc3BhY2UgPT09ICcnO1xuXG4gIHZhciBsb2NhbCA9IHtcbiAgICBkaXNwYXRjaDogbm9OYW1lc3BhY2UgPyBzdG9yZS5kaXNwYXRjaCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX2FjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIGFjdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2godHlwZSwgcGF5bG9hZClcbiAgICB9LFxuXG4gICAgY29tbWl0OiBub05hbWVzcGFjZSA/IHN0b3JlLmNvbW1pdCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX211dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgbXV0YXRpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RvcmUuY29tbWl0KHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXR0ZXJzIGFuZCBzdGF0ZSBvYmplY3QgbXVzdCBiZSBnb3R0ZW4gbGF6aWx5XG4gIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIGNoYW5nZWQgYnkgdm0gdXBkYXRlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxvY2FsLCB7XG4gICAgZ2V0dGVyczoge1xuICAgICAgZ2V0OiBub05hbWVzcGFjZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlTG9jYWxHZXR0ZXJzKHN0b3JlLCBuYW1lc3BhY2UpOyB9XG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2NhbFxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYWxHZXR0ZXJzIChzdG9yZSwgbmFtZXNwYWNlKSB7XG4gIHZhciBnZXR0ZXJzUHJveHkgPSB7fTtcblxuICB2YXIgc3BsaXRQb3MgPSBuYW1lc3BhY2UubGVuZ3RoO1xuICBPYmplY3Qua2V5cyhzdG9yZS5nZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgLy8gc2tpcCBpZiB0aGUgdGFyZ2V0IGdldHRlciBpcyBub3QgbWF0Y2ggdGhpcyBuYW1lc3BhY2VcbiAgICBpZiAodHlwZS5zbGljZSgwLCBzcGxpdFBvcykgIT09IG5hbWVzcGFjZSkgeyByZXR1cm4gfVxuXG4gICAgLy8gZXh0cmFjdCBsb2NhbCBnZXR0ZXIgdHlwZVxuICAgIHZhciBsb2NhbFR5cGUgPSB0eXBlLnNsaWNlKHNwbGl0UG9zKTtcblxuICAgIC8vIEFkZCBhIHBvcnQgdG8gdGhlIGdldHRlcnMgcHJveHkuXG4gICAgLy8gRGVmaW5lIGFzIGdldHRlciBwcm9wZXJ0eSBiZWNhdXNlXG4gICAgLy8gd2UgZG8gbm90IHdhbnQgdG8gZXZhbHVhdGUgdGhlIGdldHRlcnMgaW4gdGhpcyB0aW1lLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnZXR0ZXJzUHJveHksIGxvY2FsVHlwZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzW3R5cGVdOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZ2V0dGVyc1Byb3h5XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTXV0YXRpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fbXV0YXRpb25zW3R5cGVdIHx8IChzdG9yZS5fbXV0YXRpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRNdXRhdGlvbkhhbmRsZXIgKHBheWxvYWQpIHtcbiAgICBoYW5kbGVyLmNhbGwoc3RvcmUsIGxvY2FsLnN0YXRlLCBwYXlsb2FkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX2FjdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9hY3Rpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRBY3Rpb25IYW5kbGVyIChwYXlsb2FkLCBjYikge1xuICAgIHZhciByZXMgPSBoYW5kbGVyLmNhbGwoc3RvcmUsIHtcbiAgICAgIGRpc3BhdGNoOiBsb2NhbC5kaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogbG9jYWwuY29tbWl0LFxuICAgICAgZ2V0dGVyczogbG9jYWwuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBsb2NhbC5zdGF0ZSxcbiAgICAgIHJvb3RHZXR0ZXJzOiBzdG9yZS5nZXR0ZXJzLFxuICAgICAgcm9vdFN0YXRlOiBzdG9yZS5zdGF0ZVxuICAgIH0sIHBheWxvYWQsIGNiKTtcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9XG4gICAgaWYgKHN0b3JlLl9kZXZ0b29sSG9vaykge1xuICAgICAgcmV0dXJuIHJlcy5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0b3JlLl9kZXZ0b29sSG9vay5lbWl0KCd2dWV4OmVycm9yJywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHZXR0ZXIgKHN0b3JlLCB0eXBlLCByYXdHZXR0ZXIsIGxvY2FsKSB7XG4gIGlmIChzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gZHVwbGljYXRlIGdldHRlciBrZXk6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0gPSBmdW5jdGlvbiB3cmFwcGVkR2V0dGVyIChzdG9yZSkge1xuICAgIHJldHVybiByYXdHZXR0ZXIoXG4gICAgICBsb2NhbC5zdGF0ZSwgLy8gbG9jYWwgc3RhdGVcbiAgICAgIGxvY2FsLmdldHRlcnMsIC8vIGxvY2FsIGdldHRlcnNcbiAgICAgIHN0b3JlLnN0YXRlLCAvLyByb290IHN0YXRlXG4gICAgICBzdG9yZS5nZXR0ZXJzIC8vIHJvb3QgZ2V0dGVyc1xuICAgIClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlU3RyaWN0TW9kZSAoc3RvcmUpIHtcbiAgc3RvcmUuX3ZtLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhLiQkc3RhdGUgfSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiRG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpO1xuICAgIH1cbiAgfSwgeyBkZWVwOiB0cnVlLCBzeW5jOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRTdGF0ZSAoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgPyBwYXRoLnJlZHVjZShmdW5jdGlvbiAoc3RhdGUsIGtleSkgeyByZXR1cm4gc3RhdGVba2V5XTsgfSwgc3RhdGUpXG4gICAgOiBzdGF0ZVxufVxuXG5mdW5jdGlvbiB1bmlmeU9iamVjdFN0eWxlICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gIGlmIChpc09iamVjdCh0eXBlKSAmJiB0eXBlLnR5cGUpIHtcbiAgICBvcHRpb25zID0gcGF5bG9hZDtcbiAgICBwYXlsb2FkID0gdHlwZTtcbiAgICB0eXBlID0gdHlwZS50eXBlO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnLCAoXCJFeHBlY3RzIHN0cmluZyBhcyB0aGUgdHlwZSwgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiB0eXBlKSArIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkLCBvcHRpb25zOiBvcHRpb25zIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoX1Z1ZSkge1xuICBpZiAoVnVlICYmIF9WdWUgPT09IFZ1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnW3Z1ZXhdIGFscmVhZHkgaW5zdGFsbGVkLiBWdWUudXNlKFZ1ZXgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIFZ1ZSA9IF9WdWU7XG4gIGFwcGx5TWl4aW4oVnVlKTtcbn1cblxudmFyIG1hcFN0YXRlID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIHN0YXRlcykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChzdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRTdGF0ZSAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLiRzdG9yZS5zdGF0ZTtcbiAgICAgIHZhciBnZXR0ZXJzID0gdGhpcy4kc3RvcmUuZ2V0dGVycztcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwU3RhdGUnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbW9kdWxlLmNvbnRleHQuc3RhdGU7XG4gICAgICAgIGdldHRlcnMgPSBtb2R1bGUuY29udGV4dC5nZXR0ZXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCBzdGF0ZSwgZ2V0dGVycylcbiAgICAgICAgOiBzdGF0ZVt2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBNdXRhdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgbXV0YXRpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKG11dGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZE11dGF0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICB2YXIgY29tbWl0ID0gdGhpcy4kc3RvcmUuY29tbWl0O1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBNdXRhdGlvbnMnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbW1pdCA9IG1vZHVsZS5jb250ZXh0LmNvbW1pdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtjb21taXRdLmNvbmNhdChhcmdzKSlcbiAgICAgICAgOiBjb21taXQuYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBHZXR0ZXJzID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGdldHRlcnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICB2YWwgPSBuYW1lc3BhY2UgKyB2YWw7XG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRHZXR0ZXIgKCkge1xuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBHZXR0ZXJzJywgbmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEodmFsIGluIHRoaXMuJHN0b3JlLmdldHRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gZ2V0dGVyOiBcIiArIHZhbCkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEFjdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgYWN0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkQWN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLiRzdG9yZS5kaXNwYXRjaDtcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwQWN0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2ggPSBtb2R1bGUuY29udGV4dC5kaXNwYXRjaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtkaXNwYXRjaF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGRpc3BhdGNoLmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7IHJldHVybiAoe1xuICBtYXBTdGF0ZTogbWFwU3RhdGUuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBHZXR0ZXJzOiBtYXBHZXR0ZXJzLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBBY3Rpb25zOiBtYXBBY3Rpb25zLmJpbmQobnVsbCwgbmFtZXNwYWNlKVxufSk7IH07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1hcCAobWFwKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG1hcClcbiAgICA/IG1hcC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDoga2V5IH0pOyB9KVxuICAgIDogT2JqZWN0LmtleXMobWFwKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDogbWFwW2tleV0gfSk7IH0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWVzcGFjZSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1hcCkge1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xuICAgICAgbWFwID0gbmFtZXNwYWNlO1xuICAgICAgbmFtZXNwYWNlID0gJyc7XG4gICAgfSBlbHNlIGlmIChuYW1lc3BhY2UuY2hhckF0KG5hbWVzcGFjZS5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICBuYW1lc3BhY2UgKz0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gZm4obmFtZXNwYWNlLCBtYXApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TW9kdWxlQnlOYW1lc3BhY2UgKHN0b3JlLCBoZWxwZXIsIG5hbWVzcGFjZSkge1xuICB2YXIgbW9kdWxlID0gc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIW1vZHVsZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIG1vZHVsZSBuYW1lc3BhY2Ugbm90IGZvdW5kIGluIFwiICsgaGVscGVyICsgXCIoKTogXCIgKyBuYW1lc3BhY2UpKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlXG59XG5cbnZhciBpbmRleF9lc20gPSB7XG4gIFN0b3JlOiBTdG9yZSxcbiAgaW5zdGFsbDogaW5zdGFsbCxcbiAgdmVyc2lvbjogJzMuMC4xJyxcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucyxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycyxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucyxcbiAgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnM6IGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzXG59O1xuXG5leHBvcnQgeyBTdG9yZSwgaW5zdGFsbCwgbWFwU3RhdGUsIG1hcE11dGF0aW9ucywgbWFwR2V0dGVycywgbWFwQWN0aW9ucywgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGluZGV4X2VzbTtcbiIsImltcG9ydCB7XHJcblx0SHR0cFxyXG59IGZyb20gXCIuLi91dGlscy9odHRwLmpzXCI7XHJcblxyXG5jbGFzcyBTZWFyY2gge1xyXG5cdC8vIOaQnOe0oueUqOaIt1xyXG5cdHN0YXRpYyBzZWFyY2hVc2VyKGtleXdvcmQsIGlkID0gXCJcIikge1xyXG5cdFx0cmV0dXJuIEh0dHAucmVxdWVzdCh7XHJcblx0XHRcdHVybDogYC9zZWFyY2gvdXNlcmAsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRrZXl3b3JkLFxyXG5cdFx0XHRcdGlkXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRTZWFyY2hcclxufTtcclxuIiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvY29tcGFnZS92aXNpdGluZy92aXNpdGluZy5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Zpc2l0aW5nLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFhZGMwM2Mmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Zpc2l0aW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmlzaXRpbmcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlzaXRpbmcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhYWRjMDNjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3Zpc2l0aW5nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWFkYzAzYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmFhZGMwM2NcIixcbiAgXCIyZGY3M2NjOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJIOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2NvbXBhZ2UvdmlzaXRpbmcvdmlzaXRpbmcubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlzaXRpbmcubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWFkYzAzYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiZmxleC0xXCIsIFwiYmctbWFpblwiXSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1c2VyLWluZm9cIiwgXCJiZy13aGl0ZVwiLCBcImJvcmRlci1ib3R0b21cIiwgXCJmbGV4LXJvd1wiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImF2YXRhclwiLCBcIm14LTNcIiwgXCJyb3VuZC1tZFwiXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi4uLy4uLy4uL3N0YXRpYy9pbWFnZXMvZnJpZW5kLnBuZ1wiLCBtb2RlOiBcIlwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVzZXJpbmZvLXJpaHRcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJuaWNrbmFtZVwiLCBcInRleHQtYm9sZFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTWluZVwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC0zMFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtdGhyZWUtY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtdC0xXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLotKblj7c6eHh4eHhcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImFyZWFcIiwgXCJmb250LTMwXCIsIFwidGV4dC10aHJlZS1jb2xvclwiLCBcIm10LTFcIl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlnLDljLo6eHh4XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICBcImxpc3RcIixcbiAgICAgICAgICAgICAgXCJib3JkZXItYm90dG9tXCIsXG4gICAgICAgICAgICAgIFwiYmctd2hpdGVcIixcbiAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgXCJtdC0yXCIsXG4gICAgICAgICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgXCJqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRpdGxlXCIsIFwiZm9udC0zNVwiLCBcInRleHQtbWFpbi1jb2xvclwiLCBcIm1sLTNcIl0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuaci+WPi+WciFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uZm9udFwiLCBcInRleHQtdGhyZWUtY29sb3JcIiwgXCJtci0zXCIsIFwiZm9udC0zNVwiXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi7qS9XCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgXCJsaXN0XCIsXG4gICAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbVwiLFxuICAgICAgICAgICAgICBcImJnLXdoaXRlXCIsXG4gICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgIFwibWItM1wiLFxuICAgICAgICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgIFwianVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZVwiLCBcImZvbnQtMzVcIiwgXCJ0ZXh0LW1haW4tY29sb3JcIiwgXCJtbC0yXCJdIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLmm7TlpJrkv6Hmga9cIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIiwgXCJ0ZXh0LXRocmVlLWNvbG9yXCIsIFwibXItM1wiLCBcImZvbnQtMzVcIl1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIu6kvVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgICFfdm0uaXNGcmllbmRcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wibGlzdFwiLCBcImZsZXgtY2VudGVyXCIsIFwiYmctd2hpdGVcIiwgXCJmbGV4LXJvd1wiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgIFwibGlzdC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LTQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImljb25mb250XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtci0xXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLumJxcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LXRleHRcIiwgXCJmb250LTQwXCIsIFwidGV4dC1ib2xkXCJdIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+R5raI5oGvXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxpc3RcIiwgXCJiZy13aGl0ZVwiLCBcImZsZXgtY2VudGVyXCJdIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LXRleHRcIiwgXCJ0ZXh0LWJvbGRcIiwgXCJmb250LTQwXCJdIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIua3u+WKoOWIsOmAmuiur+W9lVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Zpc2l0aW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Zpc2l0aW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCI8IS0tIOeUqOaIt+ivpuaDhSDlkI3niYfpobUgLS0+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImZsZXgtMSBiZy1tYWluXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVzZXItaW5mbyBiZy13aGl0ZSBib3JkZXItYm90dG9tIGZsZXgtcm93XCI+XHJcblx0XHRcdDxpbWFnZSBjbGFzcz1cImF2YXRhciBteC0zIHJvdW5kLW1kXCIgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ltYWdlcy9mcmllbmQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcmluZm8tcmlodFwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmlja25hbWUgdGV4dC1ib2xkXCI+TWluZTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXJuYW1lIGZvbnQtMzAgdGV4dC10aHJlZS1jb2xvciBtdC0xXCI+6LSm5Y+3Onh4eHh4PC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXJlYSBmb250LTMwIHRleHQtdGhyZWUtY29sb3IgbXQtMVwiPuWcsOWMujp4eHg8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cImxpc3QgYm9yZGVyLWJvdHRvbSBiZy13aGl0ZSBhbGlnbi1jZW50ZXIgbXQtMiBmbGV4LXJvdyAganVzdGlmeS1iZXR3ZWVuXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUgZm9udC0zNSB0ZXh0LW1haW4tY29sb3IgbWwtM1wiPuaci+WPi+WciDwvdGV4dD5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCB0ZXh0LXRocmVlLWNvbG9yIG1yLTMgZm9udC0zNSBcIj4mI3hlOTNkOzwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwibGlzdCBib3JkZXItYm90dG9tIGJnLXdoaXRlIGFsaWduLWNlbnRlciBtYi0zIGZsZXgtcm93ICBqdXN0aWZ5LWJldHdlZW5cIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZSBmb250LTM1IHRleHQtbWFpbi1jb2xvciBtbC0yXCI+5pu05aSa5L+h5oGvPC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHRleHQtdGhyZWUtY29sb3IgbXItMyBmb250LTM1IFwiPiYjeGU5M2Q7PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5Y+R5raI5oGvICAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibGlzdCBmbGV4LWNlbnRlciBiZy13aGl0ZSBmbGV4LXJvd1wiIHYtaWY9XCIhaXNGcmllbmRcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LXRleHQgZm9udC00MCB0ZXh0LWJvbGQgaWNvbmZvbnQgbXItMVwiPiYjeGU2MWM7PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtdGV4dCBmb250LTQwIHRleHQtYm9sZFwiPuWPkea2iOaBrzwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5re75Yqg5aW95Y+LIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsaXN0IGJnLXdoaXRlIGZsZXgtY2VudGVyXCIgdi1lbHNlPjx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0IHRleHQtYm9sZCBmb250LTQwXCI+5re75Yqg5Yiw6YCa6K6v5b2VPC90ZXh0Pjwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tICdAL21vZGVsL0ZyaWVuZC5qcyc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJ0AvbW9kZWwvU2VhcmNoLmpzJztcclxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge30sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGZyaWVuZElkOiAnJyxcclxuXHRcdFx0aW5mbzogbnVsbCxcclxuXHRcdFx0aXNGcmllbmQ6IDEgLy8gMOWlveWPiyAxL+S4jeaYr1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHQuLi5tYXBTdGF0ZShbJ3VzZXJJbmZvJ10pLFxyXG5cdFx0Ly8gIOa3u+WKoOmAmuiur+W9leaYr+WQpuaYvuekuiAg5LiN5piv5aW95Y+L5bm25LiU5LiN5piv6Ieq5bexXHJcblx0XHRhZGRTaG93KCkge1xyXG5cdFx0XHRjb25zdCBpc01lID0gdGhpcy51c2VySW5mby5faWQgPT0gdGhpcy5mcmllbmRJZDtcclxuXHRcdFx0aWYgKHRoaXMuaXNGcmllbmQgJiYgIWlzTWUpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5Y+R6YCB5raI5oGv5piv5ZCm5pi+56S6ICDmmK/lpb3lj4sg5oiW6ICF5piv6Ieq5bexXHJcblx0XHRzZW5kU2hvdygpIHtcclxuXHRcdFx0Y29uc3QgaXNNZSA9IHRoaXMudXNlckluZm8uX2lkID09IHRoaXMuZnJpZW5kSWQ7XHJcblx0XHRcdGlmICghdGhpcy5pc0ZyaWVuZCB8fCBpc01lKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGUpIHtcclxuXHRcdGlmICghZS5pbmRleCkge1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25Mb2FkKG9wdGlvbnMpIHtcclxuXHRcdG9wdGlvbnMuaWQgPyAodGhpcy5mcmllbmRJZCA9IG9wdGlvbnMuaWQpIDogJyc7XHJcblx0XHQvLyB0aGlzLmdldFVzZXIoKTsgLy/ojrflj5bnlKjmiLfkv6Hmga9cclxuXHRcdC8vIHRoaXMuY2hlY2tGcmllbmQoKTsgLy/mmK/lkKblpb3lj4tcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGFzeW5jIGdldFVzZXIoKSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IFNlYXJjaC5zZWFyY2hVc2VyKCcnLCB0aGlzLmZyaWVuZElkKTtcclxuXHRcdFx0dGhpcy5pbmZvID0gcmVzLmRhdGE7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIOaYr+WQpuWlveWPi1xyXG5cdFx0YXN5bmMgY2hlY2tGcmllbmQoKSB7XHJcblx0XHRcdC8vIDAg5piv5aW95Y+LICAxIOS4jeaYr1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBGcmllbmQuY2hlY2tJc0ZyaWVuZCh0aGlzLnVzZXJJbmZvLl9pZCwgdGhpcy5mcmllbmRJZCk7XHJcblx0XHRcdHJlcy5kYXRhLm1zZyA9PSAnaXNGcmllbmQnID8gKHRoaXMuaXNGcmllbmQgPSAxKSA6ICh0aGlzLmlzRnJpZW5kID0gMCk7XHJcblx0XHR9LFxyXG5cdFx0c2VuZCgpIHt9LFxyXG5cclxuXHRcdC8vIOWlveWPi+eUs+ivt1xyXG5cdFx0YXBwbHlGcmllbmQoKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IGAuLi9hcHBseUZyaWVuZC9hcHBseUZyaWVuZD9mcmllbmRJZD0ke3RoaXMuZnJpZW5kSWR9YFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnVzZXItaW5mbyB7XHJcblx0cGFkZGluZy1ib3R0b206IDYwcnB4O1xyXG59XHJcbi5hdmF0YXIge1xyXG5cdGhlaWdodDogMTMwcnB4O1xyXG5cdHdpZHRoOiAxMzBycHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuXHRoZWlnaHQ6IDEwMHJweDtcclxufVxyXG5cclxuLmxpc3QtdGV4dCB7XHJcblx0Y29sb3I6ICM1MDVlOTc7XHJcbn1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Zpc2l0aW5nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWFkYzAzYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aXNpdGluZy5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFhZGMwM2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVzZXItaW5mb1wiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNjBycHhcIlxuICB9LFxuICBcImF2YXRhclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMzBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTMwcnB4XCJcbiAgfSxcbiAgXCJsaXN0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwibGlzdC10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzUwNWU5N1wiXG4gIH1cbn0iLCIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuLy8gaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuLy8gVnVlLnVzZShWdWV4KVxyXG4vLyBjb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuLy8gXHRzdGF0ZToge1xyXG4vLyBcdFx0dG9rZW46IFwiXCIsXHJcbi8vIFx0XHRoYXNMb2dpbjogZmFsc2UsXHJcbi8vIFx0XHR1c2VySW5mbzoge31cclxuLy8gXHR9LFxyXG4vLyBcdG11dGF0aW9uczoge1xyXG4vLyBcdFx0SU5JVChzdGF0ZSwgcHJvdmlkZXIpIHtcclxuLy8gXHRcdFx0aWYgKHByb3ZpZGVyKSB7XHJcbi8vIFx0XHRcdFx0c3RhdGUuaGFzTG9naW4gPSB0cnVlXHJcbi8vIFx0XHRcdFx0c3RhdGUudG9rZW4gPSBwcm92aWRlci50b2tlbiB8fCAnJ1xyXG4vLyBcdFx0XHRcdHN0YXRlLnVzZXJJbmZvID0gcHJvdmlkZXIgfHwge31cclxuLy8gXHRcdFx0fVxyXG4vLyBcdFx0fSxcclxuLy8gXHRcdExPR0lOKHN0YXRlLCBwcm92aWRlcikge1xyXG4vLyBcdFx0XHRpZiAocHJvdmlkZXIpIHtcclxuLy8gXHRcdFx0XHRzdGF0ZS5oYXNMb2dpbiA9IHRydWVcclxuLy8gXHRcdFx0XHRzdGF0ZS50b2tlbiA9IHByb3ZpZGVyLnRva2VuIHx8ICcnXHJcbi8vIFx0XHRcdFx0c3RhdGUudXNlckluZm8gPSBwcm92aWRlciB8fCB7fVxyXG4vLyBcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuLy8gXHRcdFx0XHRcdGtleTogXCJ1c2VySW5mb1wiLFxyXG4vLyBcdFx0XHRcdFx0ZGF0YTogcHJvdmlkZXJcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHR9XHJcbi8vIFx0XHR9LFxyXG4vLyBcdFx0TE9HT1VUKHN0YXRlKSB7XHJcbi8vIFx0XHRcdHN0YXRlLmhhc0xvZ2luID0gZmFsc2VcclxuLy8gXHRcdFx0c3RhdGUudG9rZW4gPSBcIlwiXHJcbi8vIFx0XHRcdHN0YXRlLnVzZXJJbmZvID0ge31cclxuLy8gXHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2Uoe1xyXG4vLyBcdFx0XHRcdGtleTogXCJ1c2VySW5mb1wiLFxyXG4vLyBcdFx0XHR9KVxyXG4vLyBcdFx0fVxyXG4vLyBcdH0sXHJcbi8vIFx0YWN0aW9uczoge31cclxuLy8gfSlcclxuLy8gZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICdAL3N0b3JlL21vZHVsZXMvdXNlci5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRtb2R1bGVzOiB7XHJcblx0XHR1c2VyLFxyXG5cdH1cclxufSlcclxuIiwiaW1wb3J0IHtcclxuXHRDaGF0XHJcbn0gZnJvbSBcIkAvbW9kZWwvQ2hhdC5qc1wiXHJcbmltcG9ydCB7XHJcblx0Y29uZmlnXHJcbn0gZnJvbSBcIkAvY29uZmlnL2NvbmZpZy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdGF0ZToge1xyXG5cdFx0dXNlcjogbnVsbCxcclxuXHRcdHRva2VuOiBcIlwiLFxyXG5cdFx0Y2hhdDogbnVsbFxyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHQvLyDlrZjlgqh0b2tlblxyXG5cdFx0U0VUX1RPS0VOOiAoc3RhdGUsIHRva2VuKSA9PiB7XHJcblx0XHRcdHN0YXRlLnRva2VuID0gdG9rZW4gfHwgJydcclxuXHRcdH0sXHJcblx0XHRTRVRfVVNFUjogKHN0YXRlLCB1c2VyKSA9PiB7XHJcblx0XHRcdHN0YXRlLnVzZXIgPSB1c2VyIHx8IG51bGxcclxuXHRcdH0sXHJcblx0XHRTRVRfQ0hBVDogKHN0YXRlLCBjaGF0KSA9PiB7XHJcblx0XHRcdHN0YXRlLmNoYXQgPSBjaGF0IHx8IG51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGFjdGlvbnM6IHtcclxuXHRcdElOSVRMT0dJTjogKHtcclxuXHRcdFx0Y29tbWl0XHJcblx0XHR9KSA9PiB7XHJcblx0XHRcdC8vIOWIneWni+WMlueZu+W9leS/oeaBr1xyXG5cdFx0XHRjb25zdCB0b2tlbiA9IHVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpXHJcblx0XHRcdGNvbnN0IHVzZXIgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyXCIpXHJcblx0XHRcdGNvbnNvbGUubG9nKHRva2VuLHVzZXIpXHJcblx0XHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHRcdGNvbW1pdCgnU0VUX1RPS0VOJywgdG9rZW4pXHJcblx0XHRcdFx0Y29tbWl0KCdTRVRfVVNFUicsIHVzZXIpXHJcblxyXG5cdFx0XHRcdC8vIOi/nuaOpXNvY2tldFxyXG5cdFx0XHRcdGxldCBjaGF0ID0gbmV3IENoYXQoe1xyXG5cdFx0XHRcdFx0dXNlcixcclxuXHRcdFx0XHRcdHRva2VuLFxyXG5cdFx0XHRcdFx0dXJsOiBjb25maWcud3NVcmxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbW1pdCgnU0VUX0NIQVQnLCBjaGF0KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0TE9HSU46ICh7XHJcblx0XHRcdGNvbW1pdFxyXG5cdFx0fSwgdXNlcikgPT4ge1xyXG5cdFx0XHRjb21taXQoJ1NFVF9UT0tFTicsIHVzZXIudG9rZW4pXHJcblx0XHRcdGNvbW1pdCgnU0VUX1VTRVInLCB1c2VyKVxyXG5cclxuXHRcdFx0Ly8g5a2Y5YKo5Yiw5pys5ZywXHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIHVzZXIudG9rZW4pXHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJcIiwgdXNlcilcclxuXHJcblx0XHRcdC8vIOi/nuaOpXNvY2tldFxyXG5cdFx0XHRsZXQgY2hhdCA9IG5ldyBDaGF0KHtcclxuXHRcdFx0XHR1c2VyLFxyXG5cdFx0XHRcdHVybDogY29uZmlnLndzVXJsXHJcblx0XHRcdH0pXHJcblx0XHRcdGNvbW1pdCgnU0VUX0NIQVQnLCBjaGF0KVxyXG5cdFx0fSxcclxuXHRcdExPR09VVDogKHtcclxuXHRcdFx0Y29tbWl0LFxyXG5cdFx0XHRzdGF0ZVxyXG5cdFx0fSkgPT4ge1xyXG5cdFx0XHRjb21taXQoJ1NFVF9UT0tFTicsIFwiXCIpXHJcblx0XHRcdGNvbW1pdCgnU0VUX1VTRVInLCBcIlwiKVxyXG5cclxuXHRcdFx0Ly8g5riF6Zmk57yT5a2YXHJcblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYyhcInRva2VuXCIpXHJcblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYyhcInVzZXJcIilcclxuXHRcdFx0Ly8g5YWz6Zetc29ja2V06L+e5o6lXHJcblx0XHRcdHN0YXRlLmNoYXQuY2xvc2UoKVxyXG5cdFx0XHRjb21taXQoJ1NFVF9DSEFUJywgbnVsbClcclxuXHRcdH0sXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0SHR0cFxyXG59IGZyb20gXCIuLi91dGlscy9odHRwLmpzXCI7XHJcbi8vIOiBiuWkqeexu1xyXG5jbGFzcyBDaGF0IHtcclxuXHRzb2NrZXQgPSBudWxsXHJcblx0aXNPbmxpbmUgPSBmYWxzZSAvL+aYr+WQpuWcqOe6v1xyXG5cdGNoYXRPYmogPSBudWxsIC8vIOiBiuWkqeWvueixoVxyXG5cdGNvbnN0cnVjdG9yKGFyZykge1xyXG5cdFx0dGhpcy51cmwgPSBhcmcudXJsIC8vd3PlnLDlnYBcclxuXHRcdC8vIHRoaXMudXNlciA9IHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJcIikgfHwge31cclxuXHRcdC8vIHRoaXMudG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKSB8fCBcIlwiXHJcblx0XHR0aGlzLnVzZXIgPSBhcmcudXNlclxyXG5cdFx0dGhpcy50b2tlbiA9IGFyZy51c2VyLnRva2VuXHJcblxyXG5cdFx0dGhpcy5faW5pdCgpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdF9pbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy51c2VyLCAxMTExMTExMTExMTEpXHJcblx0XHRpZiAodGhpcy50b2tlbikge1xyXG5cdFx0XHR0aGlzLnNvY2tldCA9IHVuaS5jb25uZWN0U29ja2V0KHtcclxuXHRcdFx0XHQvLyDov5nph4zlupTor6XkvKDlhaV0b2tlbiDlkI7nq6/ov5vooYzpqozor4FcclxuXHRcdFx0XHR1cmw6IGAke3RoaXMudXJsfT91c2VySWQ9JHt0aGlzLnVzZXIuX2lkfWAsXHJcblx0XHRcdFx0Y29tcGxldGU6IGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSwgXCJjb21wbGV0ZVwiKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdC8vIOebkeWQrOi/nuaOpeaIkOWKn1xyXG5cdFx0XHR0aGlzLnNvY2tldC5vbk9wZW4oKCkgPT4gdGhpcy5vbk9wZW4oKSlcclxuXHRcdFx0dGhpcy5zb2NrZXQuc2VuZCgoKSA9PiB0aGlzLm9uT3BlbigpKVxyXG5cdFx0XHQvLyDnm5HlkKzmjqXmlLbkv6Hmga9cclxuXHRcdFx0dGhpcy5zb2NrZXQub25NZXNzYWdlKChyZXMpID0+IHRoaXMub25NZXNzYWdlKHJlcykpXHJcblx0XHRcdC8vIOebkeWQrOaWreW8gFxyXG5cdFx0XHR0aGlzLnNvY2tldC5vbkNsb3NlKCgpID0+IHRoaXMub25DbG9zZSgpKVxyXG5cdFx0XHQvLyDnm5HlkKzplJnor69cclxuXHRcdFx0dGhpcy5zb2NrZXQub25FcnJvcigoKSA9PiB0aGlzLm9uRXJyb3IoKSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIOebkeWQrOaJk+W8gFxyXG5cdG9uT3BlbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdzb2NrZXTov57mjqXmiJDlip8nKVxyXG5cdFx0dGhpcy5pc09ubGluZSA9IHRydWUgLy8g55So5oi35LiK57q/XHJcblx0fVxyXG5cclxuXHQvLyDnm5HlkKzlhbPpl61cclxuXHRvbkNsb3NlKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ3NvY2tldOi/nuaOpeWFs+mXrScpXHJcblx0XHR0aGlzLmlzT25saW5lID0gZmFsc2UgLy8g55So5oi35LiL57q/XHJcblx0XHR0aGlzLnNvY2tldCA9IG51bGxcclxuXHR9XHJcblxyXG5cdC8vIOebkeWQrOi/nuaOpemUmeivr1xyXG5cdG9uRXJyb3IoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnc29ja2V06L+e5o6l6ZSZ6K+vJylcclxuXHRcdHRoaXMuaXNPbmxpbmUgPSBmYWxzZSAvLyDnlKjmiLfkuIvnur9cclxuXHRcdHRoaXMuc29ja2V0ID0gbnVsbFxyXG5cdH1cclxuXHQvLyDnm5HlkKzmjqXmlLbmtojmga9cclxuXHRvbk1lc3NhZ2UobXNnKSB7XHJcblx0XHRjb25zb2xlLmxvZyhtc2csIFwibXNnMTExMTFcIilcclxuXHR9XHJcblxyXG5cdC8vIOWFs+mXrei/nuaOpVxyXG5cdGNsb3NlKCkge1xyXG5cdFx0dGhpcy5zb2NrZXQuY2xvc2UoKVxyXG5cdH1cclxuXHJcblx0Ly8g5Yib5bu66IGK5aSp5a+56LGhXHJcblx0Y3JlYXRlQ2hhdE9iaihvYmopIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiY3JlYXRlQ2hhdE9ialwiKVxyXG5cdFx0dGhpcy5jaGF0T2JqID0gb2JqXHJcblx0fVxyXG5cclxuXHQvLyDplIDmr4HogYrlpKnlr7nosaFcclxuXHRkZXN0cm95T2JqKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJkZXN0cm95T2JqXCIpXHJcblx0XHR0aGlzLmNoYXRPYmogPSBudWxsXHJcblx0fVxyXG5cclxuXHQvLyDlj5HpgIHmtojmga9cclxuXHRzZW5kKHVzZXJfaWQsXHJcblx0XHR0b19pZCxcclxuXHRcdGNoYXRfdHlwZSxcclxuXHRcdHR5cGUsXHJcblx0XHRkYXRhKSB7XHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL2NoYXQvc2VuZGAsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR1c2VyX2lkLFxyXG5cdFx0XHRcdHRvX2lkLFxyXG5cdFx0XHRcdGNoYXRfdHlwZSxcclxuXHRcdFx0XHR0eXBlLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuXHRDaGF0XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRjb25maWdcclxufSBmcm9tIFwiQC9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJ1xyXG5cclxuY29uc3QgZXJyb3JzID0ge1xyXG5cdFwiNDAwMDAxXCI6IFwi5pWw5o2u5LiN5ZCI5rOVXCIsXHJcbn1cclxuXHJcbmNsYXNzIEh0dHAge1xyXG5cdHN0YXRpYyByZXF1ZXN0KHtcclxuXHRcdHVybCxcclxuXHRcdGRhdGEgPSB7fSxcclxuXHRcdG1ldGhvZCA9IFwiUE9TVFwiLFxyXG5cdH0pIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdC8vIOi/memHjOS7jnN0b3Jl5Lit5ou/5YiwdG9rZW5cclxuXHRcdFx0bGV0IHRva2VuID0gc3RvcmUuc3RhdGUudG9rZW4gfHwgJydcclxuXHRcdFx0Y29uc29sZS5sb2codG9rZW4sIFwidG9rZW5cIilcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogYCR7Y29uZmlnLmFwaUJhc2VVcmx9JHt1cmx9YCxcclxuXHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdG1ldGhvZCxcclxuXHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiB0b2tlbixcclxuXHRcdFx0XHRcdC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzLCBcImh0dHBcIilcclxuXHRcdFx0XHRcdGlmIChzdGF0dXNDb2RlLnN0YXJ0c1dpdGgoJzInKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuc3RhdHVzID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShyZXMuZGF0YSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0Ly8gXHR0aXRsZTogcmVzLmRhdGEubXNnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g6ZSZ6K+vXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBlcnIgPT4ge1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVyciwgXCJmYWlsXCIpXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+356iN5ZCO5YaN6K+VXCIsXHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdEh0dHBcclxufTtcclxuIiwiY29uc3QgY29uZmlnID0ge1xyXG5cdGVudjogXCJkZXZcIixcclxuXHJcblx0YXBpQmFzZVVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuMTAwOjQwMDAnLFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdHdzVXJsOiBcIndzOi8vMTkyLjE2OC4xLjEwMDo0MDAwL3dzXCIsXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0Y29uZmlnXHJcbn1cclxuIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImljb25mb250XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJmbGV4LXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJmbGV4LWNvbHVtblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWJldHdlZW5cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWNlbnRlclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwianVzdGlmeS1hcm91bmRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIlxuICB9LFxuICBcImFsaWduLWNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJ3LTEwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwibWwtMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJtbC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWwtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1sLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtbC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWwtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1yLTBcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMFxuICB9LFxuICBcIm1yLTFcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXItMlwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtci0zXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1yLTRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXItNVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtdC0xXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtdC0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtdC0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtdC00XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtdC01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJteC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXgtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm14LTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJteC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXgtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGwtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwbC0yXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBsLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGwtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwbC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInByLTFcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInByLTJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInByLTNcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInByLTRcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInByLTVcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInB5LTFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInB5LTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInB5LTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInB5LTRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInB5LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcImZvbnQtMjBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwiZm9udC0yNVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cnB4XCJcbiAgfSxcbiAgXCJmb250LTMwXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIlxuICB9LFxuICBcImZvbnQtMzVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNXJweFwiXG4gIH0sXG4gIFwiZm9udC00MFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LWJvbGRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJ0ZXh0LWNlbnRlclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRleHQtbGVmdFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0ZXh0LXJpZ2h0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJ0ZXh0LWVsbGlwc2lzXCI6IHtcbiAgICBcImxpbmVzXCI6IDFcbiAgfSxcbiAgXCJiZy1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJnLWhvdmVyLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzAwNjJjY1wiXG4gIH0sXG4gIFwiYmctc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLWhvdmVyLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6aG92ZXJcIjogXCIjNTQ1YjYyXCJcbiAgfSxcbiAgXCJiZy1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFlN2UzNFwiXG4gIH0sXG4gIFwiYmctaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxMTdhOGJcIlxuICB9LFxuICBcImJnLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYmctaG92ZXItd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZDM5ZTAwXCJcbiAgfSxcbiAgXCJiZy1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYmctaG92ZXItZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNiZDIxMzBcIlxuICB9LFxuICBcImJnLWxpZ2h0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImJnLWhvdmVyLWxpZ2h0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYWUwZTVcIlxuICB9LFxuICBcImJnLWRhcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiYmctaG92ZXItZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMWQyMTI0XCJcbiAgfSxcbiAgXCJiZy13aGl0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJiZy10cmFuc3BhcmVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCJib3JkZXJcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC4xKVwiXG4gIH0sXG4gIFwiYm9yZGVyLWJvdHRvbVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjEpXCJcbiAgfSxcbiAgXCJmb250LXhzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImZvbnQtc21cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNHJweFwiXG4gIH0sXG4gIFwiZm9udC1tZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE2cnB4XCJcbiAgfSxcbiAgXCJmb250LWxnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThycHhcIlxuICB9LFxuICBcInRleHQtbWFpbi1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMSlcIlxuICB9LFxuICBcInRleHQtc2VjLWNvbG9yXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjYpXCJcbiAgfSxcbiAgXCJ0ZXh0LXRocmVlLWNvbG9yXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjQpXCJcbiAgfSxcbiAgXCJiZy1kYXJrLWNvbG9yXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC4yKVwiXG4gIH0sXG4gIFwiYmctY29sb3ItMVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0NCwyNDQsMjQ0LDEpXCJcbiAgfSxcbiAgXCJiZy1jb2xvci0yXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjQzLDI0NCwyNDYsMSlcIlxuICB9LFxuICBcImJnLW1haW5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VkZWRlZFwiXG4gIH0sXG4gIFwieWVsbG93XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDIyOCw0OSwxKVwiXG4gIH0sXG4gIFwicmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDkzLDkxLDEpXCJcbiAgfSxcbiAgXCJibHVlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoODcsMTUzLDI1NSwxKVwiXG4gIH0sXG4gIFwicm91bmQtc21cIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicm91bmQtbWRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInJvdW5kLWxnXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJjaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwXG4gIH0sXG4gIFwiYm9yZGVyLWNvbG9yXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjEpXCJcbiAgfSxcbiAgXCJ0ZW1wLWJnXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiXG4gIH0sXG4gIFwidGVtcC1ib3JkZXJcIjoge1xuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjRkYwMDAwXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjJcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOntcInBhZ2VzL2ZpbmQvbW9tZW50L21vbWVudFwiOnt9LFwicGFnZXMvZnJpZW5kL2FwcGx5RnJpZW5kL2FwcGx5RnJpZW5kXCI6e30sXCJwYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nXCI6e1wibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2ZmZmZmZlwiLFwidGl0bGVOVmlld1wiOntcImJ1dHRvbnNcIjpbe1widHlwZVwiOlwibWVudVwifV19fSxcInBhZ2VzL2ZyaWVuZC9hcHBseUxpc3QvYXBwbHlMaXN0XCI6e1widGl0bGVOVmlld1wiOntcImJ1dHRvbnNcIjpbe1widGV4dFwiOlwi5paw55qE5pyL5Y+LXCIsXCJmbG9hdFwiOlwibGVmdFwiLFwiZm9udFdlaWdodFwiOlwiYm9sZFwiLFwiZm9udFNpemVcIjpcIjE4cHhcIixcIndpZHRoXCI6XCIxMDBweFwifSx7XCJ0ZXh0XCI6XCLmt7vliqDmnIvlj4tcIixcImZsb2F0XCI6XCJyaWdodFwiLFwiZm9udFNpemVcIjpcIjE4cHhcIixcIndpZHRoXCI6XCIxMDBweFwifV19fSxcInBhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kXCI6e30sXCJwYWdlcy90YWJiYXIvaW5kZXgvaW5kZXhcIjp7fSxcInBhZ2VzL3RhYmJhci9teS9teVwiOnt9LFwicGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzXCI6e30sXCJwYWdlcy90YWJiYXIvZmluZC9maW5kXCI6e30sXCJwYWdlcy9sb2dpbi9sb2dpblwiOnt9LFwicGFnZXMvY29tcGFnZS9jaGF0L2NoYXRcIjp7fX0sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fNjdBQTY3QlwifSIsIm1vZHVsZS5leHBvcnRzID0gVnVlOyIsImltcG9ydCB7XHJcblx0SHR0cFxyXG59IGZyb20gXCIuLi91dGlscy9odHRwLmpzXCI7XHJcblxyXG5jbGFzcyBGcmllbmQge1xyXG5cdC8vIOeUs+ivt+a3u+WKoOWlveWPi1xyXG5cdHN0YXRpYyBhcHBseUZyaWVuZChwYXJhbXMpIHtcclxuXHRcdGNvbnNvbGUubG9nKHBhcmFtcylcclxuXHRcdHJldHVybiBIdHRwLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmw6IGAvZnJpZW5kL2FwcGx5YCxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGFwcGx5X3ZhbHVlOiBwYXJhbXMuYXBwbHlWYWx1ZSxcclxuXHRcdFx0XHRuaWNrbmFtZTogcGFyYW1zLm5pY2tuYW1lLFxyXG5cdFx0XHRcdHVzZXJfaWQ6IHBhcmFtcy51c2VySWQsXHJcblx0XHRcdFx0ZnJpZW5kX2lkOiBwYXJhbXMuZnJpZW5kSWRcclxuXHRcdFx0fSxcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyDmo4DmtYvmmK/lkKblpb3lj4tcclxuXHRzdGF0aWMgY2hlY2tJc0ZyaWVuZCh1c2VySWQsIGZyaWVuZElkKSB7XHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL2ZyaWVuZC9jaGVjaz91c2VySWQ9JHt1c2VySWR9JmZyaWVuZElkPSR7ZnJpZW5kSWR9YCxcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8vIOiOt+WPlueUs+ivt+WIl+ihqFxyXG5cdHN0YXRpYyBnZXRBcHBseUxpc3QodXNlcklkKSB7XHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL2FwcGx5L2xpc3Q/ZnJpZW5kX2lkPSR7dXNlcklkfWAsXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyDlkIzmhI/lpb3lj4vnlLPor7dcclxuXHRzdGF0aWMgYXBwbHlBZ3JlZShpZCkge1xyXG5cdFx0cmV0dXJuIEh0dHAucmVxdWVzdCh7XHJcblx0XHRcdHVybDogYC9hcHBseS9hZ3JlZWAsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRfaWQ6IGlkXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyDojrflj5blpb3lj4vliJfooahcclxuXHRzdGF0aWMgZ2V0RnJpZW5kTGlzdChfaWQpIHtcclxuXHRcdHJldHVybiBIdHRwLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmw6IGAvZnJpZW5kL2xpc3Q/dXNlcl9pZD0ke19pZH1gLFxyXG5cdFx0XHRtZXRob2Q6IFwiR0VUXCJcclxuXHRcdH0pXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRGcmllbmRcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==