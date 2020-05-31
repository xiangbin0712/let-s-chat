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
/******/ 	return __webpack_require__(__webpack_require__.s = 183);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 18:
/*!******************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/utils/util.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getStorage = exports._toast = void 0;var promisic = function promisic(func) {
  return function () {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      var args = Object.assign(params, {
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(error) {
          reject(error);
        } });

      func(args);
    });
  };
};

// showToast
var _toast = function _toast(title, position, icon) {
  uni.showToast({
    title: title,
    icon: icon || "none",
    position: position || "top" });

};exports._toast = _toast;


var getStorage = function getStorage(key) {
  return new Promise(function (resolve, reject) {
    uni.getStorage({
      key: key,
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(error) {
        reject(error);
      } });

  });
};exports.getStorage = getStorage;

/***/ }),

/***/ 183:
/*!*********************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/main.js?{"page":"pages%2Fstart%2Fstart"} ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 2);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 20);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_start_start_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/start/start.nvue?mpType=page */ 184);

        
        
        
        _pages_start_start_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_start_start_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/start/start'
        _pages_start_start_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_start_start_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 184:
/*!***************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/start/start.nvue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.nvue?vue&type=template&id=e587c546&mpType=page */ 185);
/* harmony import */ var _start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.nvue?vue&type=script&lang=js&mpType=page */ 187);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "13aa43a4",
  false,
  _start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/pages/start/start.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/*!*********************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/start/start.nvue?vue&type=template&id=e587c546&mpType=page ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./start.nvue?vue&type=template&id=e587c546&mpType=page */ 186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_template_id_e587c546_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 186:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/start/start.nvue?vue&type=template&id=e587c546&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("view", { staticClass: ["flex-1", "flex-center"] }, [
        _c("u-text", [_vm._v("加载中...")]),
        _c("u-text", [_vm._v("测试:" + _vm._s(_vm.token))])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 187:
/*!***************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/start/start.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./start.nvue?vue&type=script&lang=js&mpType=page */ 188);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/start/start.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









var _vuex = __webpack_require__(/*! vuex */ 11);
var _util = __webpack_require__(/*! ../../utils/util.js */ 18);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  data: function data() {
    return {};
  },

  computed: _objectSpread({},
  (0, _vuex.mapState)({
    token: function token(state) {return state.token;} })),


  mounted: function mounted() {
    this.goto();
  },

  methods: {
    goto: function goto() {var _this = this;
      setTimeout(function () {
        if (_this.token) {
          uni.switchTab({
            url: '/pages/tabbar/index/index' });

          return;
        }
        uni.navigateTo({
          url: '../login/login' });

      }, 700);
    } } };exports.default = _default;

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

/***/ 20:
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 21).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 21:
/*!********************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 22);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 22:
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
  "text-blue": {
    "color": "#526091"
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

/***/ 3:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),

/***/ 4:
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages.json?{"type":"style"} ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/user/userDetail/userDetail":{},"pages/start/start":{},"pages/login/login":{},"pages/tabbar/index/index":{},"pages/find/moment/moment":{},"pages/friend/applyFriend/applyFriend":{},"pages/compage/visiting/visiting":{"navigationBarBackgroundColor":"#ffffff","titleNView":{"buttons":[{"type":"menu"}]}},"pages/friend/applyList/applyList":{"titleNView":{"buttons":[{"text":"新的朋友","float":"left","fontWeight":"bold","fontSize":"18px","width":"100px"},{"text":"添加朋友","float":"right","fontSize":"18px","width":"100px"}]}},"pages/friend/addFriend/addFriend":{},"pages/tabbar/my/my":{},"pages/tabbar/contacts/contacts":{},"pages/tabbar/find/find":{},"pages/compage/chat/chat":{}},"globalStyle":{}});

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVleC9kaXN0L3Z1ZXguZXNtLmpzPzJmNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ1bmktYXBwOi8vL3V0aWxzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvbWFpbi5qcz85YmJkIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL3N0YXJ0L3N0YXJ0Lm52dWU/MTQ2YyIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9zdGFydC9zdGFydC5udnVlPzg5Y2EiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMvc3RhcnQvc3RhcnQubnZ1ZT80YjgyIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL3N0YXJ0L3N0YXJ0Lm52dWU/N2VmOCIsInVuaS1hcHA6Ly8vcGFnZXMvc3RhcnQvc3RhcnQubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9tYWluLmpzPzRkMmQiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvQXBwLnZ1ZT81NDZlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL0FwcC52dWU/MzUxOSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy5qc29uPzVhM2UiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMuanNvbj8zYmVlIl0sIm5hbWVzIjpbImFwcGx5TWl4aW4iLCJWdWUiLCJ2ZXJzaW9uIiwiTnVtYmVyIiwic3BsaXQiLCJtaXhpbiIsImJlZm9yZUNyZWF0ZSIsInZ1ZXhJbml0IiwiX2luaXQiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwiaW5pdCIsImNvbmNhdCIsImNhbGwiLCIkb3B0aW9ucyIsInN0b3JlIiwiJHN0b3JlIiwicGFyZW50IiwiZGV2dG9vbEhvb2siLCJ3aW5kb3ciLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiZGV2dG9vbFBsdWdpbiIsIl9kZXZ0b29sSG9vayIsImVtaXQiLCJvbiIsInRhcmdldFN0YXRlIiwicmVwbGFjZVN0YXRlIiwic3Vic2NyaWJlIiwibXV0YXRpb24iLCJzdGF0ZSIsImZvckVhY2hWYWx1ZSIsIm9iaiIsImZuIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpc09iamVjdCIsImlzUHJvbWlzZSIsInZhbCIsInRoZW4iLCJhc3NlcnQiLCJjb25kaXRpb24iLCJtc2ciLCJFcnJvciIsIk1vZHVsZSIsInJhd01vZHVsZSIsInJ1bnRpbWUiLCJfY2hpbGRyZW4iLCJjcmVhdGUiLCJfcmF3TW9kdWxlIiwicmF3U3RhdGUiLCJwcm90b3R5cGVBY2Nlc3NvcnMkMSIsIm5hbWVzcGFjZWQiLCJjb25maWd1cmFibGUiLCJnZXQiLCJhZGRDaGlsZCIsIm1vZHVsZSIsInJlbW92ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJ1cGRhdGUiLCJhY3Rpb25zIiwibXV0YXRpb25zIiwiZ2V0dGVycyIsImZvckVhY2hDaGlsZCIsImZvckVhY2hHZXR0ZXIiLCJmb3JFYWNoQWN0aW9uIiwiZm9yRWFjaE11dGF0aW9uIiwiZGVmaW5lUHJvcGVydGllcyIsIk1vZHVsZUNvbGxlY3Rpb24iLCJyYXdSb290TW9kdWxlIiwicmVnaXN0ZXIiLCJwYXRoIiwicmVkdWNlIiwicm9vdCIsImdldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSQxIiwidGhpcyQxIiwicHJvY2VzcyIsImFzc2VydFJhd01vZHVsZSIsIm5ld01vZHVsZSIsImxlbmd0aCIsInNsaWNlIiwibW9kdWxlcyIsInJhd0NoaWxkTW9kdWxlIiwidW5yZWdpc3RlciIsInRhcmdldE1vZHVsZSIsImNvbnNvbGUiLCJ3YXJuIiwiZnVuY3Rpb25Bc3NlcnQiLCJ2YWx1ZSIsImV4cGVjdGVkIiwib2JqZWN0QXNzZXJ0IiwiaGFuZGxlciIsImFzc2VydFR5cGVzIiwiYXNzZXJ0T3B0aW9ucyIsInR5cGUiLCJtYWtlQXNzZXJ0aW9uTWVzc2FnZSIsImJ1ZiIsImpvaW4iLCJKU09OIiwic3RyaW5naWZ5IiwiU3RvcmUiLCJpbnN0YWxsIiwiUHJvbWlzZSIsInBsdWdpbnMiLCJzdHJpY3QiLCJfY29tbWl0dGluZyIsIl9hY3Rpb25zIiwiX2FjdGlvblN1YnNjcmliZXJzIiwiX211dGF0aW9ucyIsIl93cmFwcGVkR2V0dGVycyIsIl9tb2R1bGVzIiwiX21vZHVsZXNOYW1lc3BhY2VNYXAiLCJfc3Vic2NyaWJlcnMiLCJfd2F0Y2hlclZNIiwicmVmIiwiZGlzcGF0Y2giLCJjb21taXQiLCJib3VuZERpc3BhdGNoIiwicGF5bG9hZCIsImJvdW5kQ29tbWl0IiwiaW5zdGFsbE1vZHVsZSIsInJlc2V0U3RvcmVWTSIsInBsdWdpbiIsImNvbmZpZyIsImRldnRvb2xzIiwicHJvdG90eXBlQWNjZXNzb3JzIiwiX3ZtIiwiX2RhdGEiLCIkJHN0YXRlIiwic2V0IiwidiIsIl90eXBlIiwiX3BheWxvYWQiLCJfb3B0aW9ucyIsInVuaWZ5T2JqZWN0U3R5bGUiLCJlbnRyeSIsImVycm9yIiwiX3dpdGhDb21taXQiLCJjb21taXRJdGVyYXRvciIsInN1YiIsInNpbGVudCIsImFjdGlvbiIsImFsbCIsIm1hcCIsImdlbmVyaWNTdWJzY3JpYmUiLCJzdWJzY3JpYmVBY3Rpb24iLCJ3YXRjaCIsImdldHRlciIsImNiIiwiJHdhdGNoIiwicmVnaXN0ZXJNb2R1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJwcmVzZXJ2ZVN0YXRlIiwidW5yZWdpc3Rlck1vZHVsZSIsInBhcmVudFN0YXRlIiwiZ2V0TmVzdGVkU3RhdGUiLCJkZWxldGUiLCJyZXNldFN0b3JlIiwiaG90VXBkYXRlIiwibmV3T3B0aW9ucyIsImNvbW1pdHRpbmciLCJzdWJzIiwiaW5kZXhPZiIsInB1c2giLCJpIiwic3BsaWNlIiwiaG90Iiwib2xkVm0iLCJ3cmFwcGVkR2V0dGVycyIsImNvbXB1dGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZGF0YSIsImVuYWJsZVN0cmljdE1vZGUiLCJuZXh0VGljayIsIiRkZXN0cm95Iiwicm9vdFN0YXRlIiwiaXNSb290IiwibW9kdWxlTmFtZSIsImxvY2FsIiwiY29udGV4dCIsIm1ha2VMb2NhbENvbnRleHQiLCJuYW1lc3BhY2VkVHlwZSIsInJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlckFjdGlvbiIsInJlZ2lzdGVyR2V0dGVyIiwiY2hpbGQiLCJub05hbWVzcGFjZSIsImFyZ3MiLCJtYWtlTG9jYWxHZXR0ZXJzIiwiZ2V0dGVyc1Byb3h5Iiwic3BsaXRQb3MiLCJsb2NhbFR5cGUiLCJ3cmFwcGVkTXV0YXRpb25IYW5kbGVyIiwid3JhcHBlZEFjdGlvbkhhbmRsZXIiLCJyZXMiLCJyb290R2V0dGVycyIsInJlc29sdmUiLCJjYXRjaCIsImVyciIsInJhd0dldHRlciIsIndyYXBwZWRHZXR0ZXIiLCJkZWVwIiwic3luYyIsIl9WdWUiLCJtYXBTdGF0ZSIsIm5vcm1hbGl6ZU5hbWVzcGFjZSIsInN0YXRlcyIsIm5vcm1hbGl6ZU1hcCIsIm1hcHBlZFN0YXRlIiwiZ2V0TW9kdWxlQnlOYW1lc3BhY2UiLCJ2dWV4IiwibWFwTXV0YXRpb25zIiwibWFwcGVkTXV0YXRpb24iLCJsZW4iLCJhcmd1bWVudHMiLCJhcHBseSIsIm1hcEdldHRlcnMiLCJtYXBwZWRHZXR0ZXIiLCJtYXBBY3Rpb25zIiwibWFwcGVkQWN0aW9uIiwiY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMiLCJiaW5kIiwiY2hhckF0IiwiaGVscGVyIiwiaW5kZXhfZXNtIiwicHJvbWlzaWMiLCJmdW5jIiwicGFyYW1zIiwicmVqZWN0IiwiYXNzaWduIiwic3VjY2VzcyIsImZhaWwiLCJfdG9hc3QiLCJ0aXRsZSIsInBvc2l0aW9uIiwiaWNvbiIsInVuaSIsInNob3dUb2FzdCIsImdldFN0b3JhZ2UiLCJTVEFUX1ZFUlNJT04iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJnZXREQ2xvdWRJZCIsImUiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJzaWduIiwic3Vic3RyIiwiZ2V0U3BsaWNpbmciLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7d1BDbEZBOzs7OztBQUtBLElBQUlBLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENB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LEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BXQTtBQUFlLGdFQUFDLFNBQVMscUNBQXFDLHVCQUF1Qix1QkFBdUIsOEJBQThCLDhCQUE4QiwwQ0FBMEMsb0NBQW9DLHVEQUF1RCxZQUFZLGNBQWMsR0FBRyxxQ0FBcUMsY0FBYyxZQUFZLG1GQUFtRixFQUFFLGdFQUFnRSxHQUFHLHNDQUFzQyx3QkFBd0Isb0NBQW9DLDRCQUE0Qiw4QkFBOEIsa0I7Ozs7Ozs7Ozs7OztBQ0E3ckI7QUFBZSxnRUFBQyx5QiIsImZpbGUiOiJwYWdlcy9zdGFydC9zdGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxODMpO1xuIiwiLyoqXG4gKiB2dWV4IHYzLjAuMVxuICogKGMpIDIwMTcgRXZhbiBZb3VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG52YXIgYXBwbHlNaXhpbiA9IGZ1bmN0aW9uIChWdWUpIHtcbiAgdmFyIHZlcnNpb24gPSBOdW1iZXIoVnVlLnZlcnNpb24uc3BsaXQoJy4nKVswXSk7XG5cbiAgaWYgKHZlcnNpb24gPj0gMikge1xuICAgIFZ1ZS5taXhpbih7IGJlZm9yZUNyZWF0ZTogdnVleEluaXQgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3ZlcnJpZGUgaW5pdCBhbmQgaW5qZWN0IHZ1ZXggaW5pdCBwcm9jZWR1cmVcbiAgICAvLyBmb3IgMS54IGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgIHZhciBfaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXQ7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAgICAgb3B0aW9ucy5pbml0ID0gb3B0aW9ucy5pbml0XG4gICAgICAgID8gW3Z1ZXhJbml0XS5jb25jYXQob3B0aW9ucy5pbml0KVxuICAgICAgICA6IHZ1ZXhJbml0O1xuICAgICAgX2luaXQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZ1ZXggaW5pdCBob29rLCBpbmplY3RlZCBpbnRvIGVhY2ggaW5zdGFuY2VzIGluaXQgaG9va3MgbGlzdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdnVleEluaXQgKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcbiAgICAvLyBzdG9yZSBpbmplY3Rpb25cbiAgICBpZiAob3B0aW9ucy5zdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSB0eXBlb2Ygb3B0aW9ucy5zdG9yZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9wdGlvbnMuc3RvcmUoKVxuICAgICAgICA6IG9wdGlvbnMuc3RvcmU7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC4kc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gb3B0aW9ucy5wYXJlbnQuJHN0b3JlO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRldnRvb2xIb29rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbmZ1bmN0aW9uIGRldnRvb2xQbHVnaW4gKHN0b3JlKSB7XG4gIGlmICghZGV2dG9vbEhvb2spIHsgcmV0dXJuIH1cblxuICBzdG9yZS5fZGV2dG9vbEhvb2sgPSBkZXZ0b29sSG9vaztcblxuICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4OmluaXQnLCBzdG9yZSk7XG5cbiAgZGV2dG9vbEhvb2sub24oJ3Z1ZXg6dHJhdmVsLXRvLXN0YXRlJywgZnVuY3Rpb24gKHRhcmdldFN0YXRlKSB7XG4gICAgc3RvcmUucmVwbGFjZVN0YXRlKHRhcmdldFN0YXRlKTtcbiAgfSk7XG5cbiAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uIChtdXRhdGlvbiwgc3RhdGUpIHtcbiAgICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4Om11dGF0aW9uJywgbXV0YXRpb24sIHN0YXRlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBpdGVtIHRoYXQgcGFzcyB0aGUgdGVzdFxuICogYnkgc2Vjb25kIGFyZ3VtZW50IGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybiB7Kn1cbiAqL1xuLyoqXG4gKiBEZWVwIGNvcHkgdGhlIGdpdmVuIG9iamVjdCBjb25zaWRlcmluZyBjaXJjdWxhciBzdHJ1Y3R1cmUuXG4gKiBUaGlzIGZ1bmN0aW9uIGNhY2hlcyBhbGwgbmVzdGVkIG9iamVjdHMgYW5kIGl0cyBjb3BpZXMuXG4gKiBJZiBpdCBkZXRlY3RzIGNpcmN1bGFyIHN0cnVjdHVyZSwgdXNlIGNhY2hlZCBjb3B5IHRvIGF2b2lkIGluZmluaXRlIGxvb3AuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gY2FjaGVcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuXG4vKipcbiAqIGZvckVhY2ggZm9yIG9iamVjdFxuICovXG5mdW5jdGlvbiBmb3JFYWNoVmFsdWUgKG9iaiwgZm4pIHtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKG9ialtrZXldLCBrZXkpOyB9KTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtc2cpIHtcbiAgaWYgKCFjb25kaXRpb24pIHsgdGhyb3cgbmV3IEVycm9yKChcIlt2dWV4XSBcIiArIG1zZykpIH1cbn1cblxudmFyIE1vZHVsZSA9IGZ1bmN0aW9uIE1vZHVsZSAocmF3TW9kdWxlLCBydW50aW1lKSB7XG4gIHRoaXMucnVudGltZSA9IHJ1bnRpbWU7XG4gIHRoaXMuX2NoaWxkcmVuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fcmF3TW9kdWxlID0gcmF3TW9kdWxlO1xuICB2YXIgcmF3U3RhdGUgPSByYXdNb2R1bGUuc3RhdGU7XG4gIHRoaXMuc3RhdGUgPSAodHlwZW9mIHJhd1N0YXRlID09PSAnZnVuY3Rpb24nID8gcmF3U3RhdGUoKSA6IHJhd1N0YXRlKSB8fCB7fTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgbmFtZXNwYWNlZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5uYW1lc3BhY2VkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWRcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiBhZGRDaGlsZCAoa2V5LCBtb2R1bGUpIHtcbiAgdGhpcy5fY2hpbGRyZW5ba2V5XSA9IG1vZHVsZTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiByZW1vdmVDaGlsZCAoa2V5KSB7XG4gIGRlbGV0ZSB0aGlzLl9jaGlsZHJlbltrZXldO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIGdldENoaWxkIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW2tleV1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChyYXdNb2R1bGUpIHtcbiAgdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWQgPSByYXdNb2R1bGUubmFtZXNwYWNlZDtcbiAgaWYgKHJhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMgPSByYXdNb2R1bGUuYWN0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMgPSByYXdNb2R1bGUubXV0YXRpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzID0gcmF3TW9kdWxlLmdldHRlcnM7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gZm9yRWFjaENoaWxkIChmbikge1xuICBmb3JFYWNoVmFsdWUodGhpcy5fY2hpbGRyZW4sIGZuKTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEdldHRlciA9IGZ1bmN0aW9uIGZvckVhY2hHZXR0ZXIgKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hBY3Rpb24gPSBmdW5jdGlvbiBmb3JFYWNoQWN0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoTXV0YXRpb24gPSBmdW5jdGlvbiBmb3JFYWNoTXV0YXRpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE1vZHVsZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyQxICk7XG5cbnZhciBNb2R1bGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gTW9kdWxlQ29sbGVjdGlvbiAocmF3Um9vdE1vZHVsZSkge1xuICAvLyByZWdpc3RlciByb290IG1vZHVsZSAoVnVleC5TdG9yZSBvcHRpb25zKVxuICB0aGlzLnJlZ2lzdGVyKFtdLCByYXdSb290TW9kdWxlLCBmYWxzZSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChtb2R1bGUsIGtleSkge1xuICAgIHJldHVybiBtb2R1bGUuZ2V0Q2hpbGQoa2V5KVxuICB9LCB0aGlzLnJvb3QpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXROYW1lc3BhY2UgPSBmdW5jdGlvbiBnZXROYW1lc3BhY2UgKHBhdGgpIHtcbiAgdmFyIG1vZHVsZSA9IHRoaXMucm9vdDtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGtleSkge1xuICAgIG1vZHVsZSA9IG1vZHVsZS5nZXRDaGlsZChrZXkpO1xuICAgIHJldHVybiBuYW1lc3BhY2UgKyAobW9kdWxlLm5hbWVzcGFjZWQgPyBrZXkgKyAnLycgOiAnJylcbiAgfSwgJycpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUkMSAocmF3Um9vdE1vZHVsZSkge1xuICB1cGRhdGUoW10sIHRoaXMucm9vdCwgcmF3Um9vdE1vZHVsZSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyIChwYXRoLCByYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIHJ1bnRpbWUgPT09IHZvaWQgMCApIHJ1bnRpbWUgPSB0cnVlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0UmF3TW9kdWxlKHBhdGgsIHJhd01vZHVsZSk7XG4gIH1cblxuICB2YXIgbmV3TW9kdWxlID0gbmV3IE1vZHVsZShyYXdNb2R1bGUsIHJ1bnRpbWUpO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnJvb3QgPSBuZXdNb2R1bGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBwYXJlbnQuYWRkQ2hpbGQocGF0aFtwYXRoLmxlbmd0aCAtIDFdLCBuZXdNb2R1bGUpO1xuICB9XG5cbiAgLy8gcmVnaXN0ZXIgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKHJhd01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHJhd01vZHVsZS5tb2R1bGVzLCBmdW5jdGlvbiAocmF3Q2hpbGRNb2R1bGUsIGtleSkge1xuICAgICAgdGhpcyQxLnJlZ2lzdGVyKHBhdGguY29uY2F0KGtleSksIHJhd0NoaWxkTW9kdWxlLCBydW50aW1lKTtcbiAgICB9KTtcbiAgfVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudW5yZWdpc3RlciA9IGZ1bmN0aW9uIHVucmVnaXN0ZXIgKHBhdGgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgaWYgKCFwYXJlbnQuZ2V0Q2hpbGQoa2V5KS5ydW50aW1lKSB7IHJldHVybiB9XG5cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGtleSk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGUgKHBhdGgsIHRhcmdldE1vZHVsZSwgbmV3TW9kdWxlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0UmF3TW9kdWxlKHBhdGgsIG5ld01vZHVsZSk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGFyZ2V0IG1vZHVsZVxuICB0YXJnZXRNb2R1bGUudXBkYXRlKG5ld01vZHVsZSk7XG5cbiAgLy8gdXBkYXRlIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChuZXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvciAodmFyIGtleSBpbiBuZXdNb2R1bGUubW9kdWxlcykge1xuICAgICAgaWYgKCF0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiW3Z1ZXhdIHRyeWluZyB0byBhZGQgYSBuZXcgbW9kdWxlICdcIiArIGtleSArIFwiJyBvbiBob3QgcmVsb2FkaW5nLCBcIiArXG4gICAgICAgICAgICAnbWFudWFsIHJlbG9hZCBpcyBuZWVkZWQnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShcbiAgICAgICAgcGF0aC5jb25jYXQoa2V5KSxcbiAgICAgICAgdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSksXG4gICAgICAgIG5ld01vZHVsZS5tb2R1bGVzW2tleV1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBmdW5jdGlvbkFzc2VydCA9IHtcbiAgYXNzZXJ0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgZXhwZWN0ZWQ6ICdmdW5jdGlvbidcbn07XG5cbnZhciBvYmplY3RBc3NlcnQgPSB7XG4gIGFzc2VydDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyk7IH0sXG4gIGV4cGVjdGVkOiAnZnVuY3Rpb24gb3Igb2JqZWN0IHdpdGggXCJoYW5kbGVyXCIgZnVuY3Rpb24nXG59O1xuXG52YXIgYXNzZXJ0VHlwZXMgPSB7XG4gIGdldHRlcnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBtdXRhdGlvbnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBhY3Rpb25zOiBvYmplY3RBc3NlcnRcbn07XG5cbmZ1bmN0aW9uIGFzc2VydFJhd01vZHVsZSAocGF0aCwgcmF3TW9kdWxlKSB7XG4gIE9iamVjdC5rZXlzKGFzc2VydFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIXJhd01vZHVsZVtrZXldKSB7IHJldHVybiB9XG5cbiAgICB2YXIgYXNzZXJ0T3B0aW9ucyA9IGFzc2VydFR5cGVzW2tleV07XG5cbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlW2tleV0sIGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgICAgYXNzZXJ0KFxuICAgICAgICBhc3NlcnRPcHRpb25zLmFzc2VydCh2YWx1ZSksXG4gICAgICAgIG1ha2VBc3NlcnRpb25NZXNzYWdlKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGFzc2VydE9wdGlvbnMuZXhwZWN0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUFzc2VydGlvbk1lc3NhZ2UgKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGV4cGVjdGVkKSB7XG4gIHZhciBidWYgPSBrZXkgKyBcIiBzaG91bGQgYmUgXCIgKyBleHBlY3RlZCArIFwiIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIi5cIiArIHR5cGUgKyBcIlxcXCJcIjtcbiAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgIGJ1ZiArPSBcIiBpbiBtb2R1bGUgXFxcIlwiICsgKHBhdGguam9pbignLicpKSArIFwiXFxcIlwiO1xuICB9XG4gIGJ1ZiArPSBcIiBpcyBcIiArIChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpICsgXCIuXCI7XG4gIHJldHVybiBidWZcbn1cblxudmFyIFZ1ZTsgLy8gYmluZCBvbiBpbnN0YWxsXG5cbnZhciBTdG9yZSA9IGZ1bmN0aW9uIFN0b3JlIChvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAvLyBBdXRvIGluc3RhbGwgaWYgaXQgaXMgbm90IGRvbmUgeWV0IGFuZCBgd2luZG93YCBoYXMgYFZ1ZWAuXG4gIC8vIFRvIGFsbG93IHVzZXJzIHRvIGF2b2lkIGF1dG8taW5zdGFsbGF0aW9uIGluIHNvbWUgY2FzZXMsXG4gIC8vIHRoaXMgY29kZSBzaG91bGQgYmUgcGxhY2VkIGhlcmUuIFNlZSAjNzMxXG4gIGlmICghVnVlICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICBpbnN0YWxsKHdpbmRvdy5WdWUpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoVnVlLCBcIm11c3QgY2FsbCBWdWUudXNlKFZ1ZXgpIGJlZm9yZSBjcmVhdGluZyBhIHN0b3JlIGluc3RhbmNlLlwiKTtcbiAgICBhc3NlcnQodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnLCBcInZ1ZXggcmVxdWlyZXMgYSBQcm9taXNlIHBvbHlmaWxsIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgYXNzZXJ0KHRoaXMgaW5zdGFuY2VvZiBTdG9yZSwgXCJTdG9yZSBtdXN0IGJlIGNhbGxlZCB3aXRoIHRoZSBuZXcgb3BlcmF0b3IuXCIpO1xuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnM7IGlmICggcGx1Z2lucyA9PT0gdm9pZCAwICkgcGx1Z2lucyA9IFtdO1xuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7IGlmICggc3RyaWN0ID09PSB2b2lkIDAgKSBzdHJpY3QgPSBmYWxzZTtcblxuICB2YXIgc3RhdGUgPSBvcHRpb25zLnN0YXRlOyBpZiAoIHN0YXRlID09PSB2b2lkIDAgKSBzdGF0ZSA9IHt9O1xuICBpZiAodHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSgpIHx8IHt9O1xuICB9XG5cbiAgLy8gc3RvcmUgaW50ZXJuYWwgc3RhdGVcbiAgdGhpcy5fY29tbWl0dGluZyA9IGZhbHNlO1xuICB0aGlzLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnMgPSBbXTtcbiAgdGhpcy5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9tb2R1bGVzID0gbmV3IE1vZHVsZUNvbGxlY3Rpb24ob3B0aW9ucyk7XG4gIHRoaXMuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl93YXRjaGVyVk0gPSBuZXcgVnVlKCk7XG5cbiAgLy8gYmluZCBjb21taXQgYW5kIGRpc3BhdGNoIHRvIHNlbGZcbiAgdmFyIHN0b3JlID0gdGhpcztcbiAgdmFyIHJlZiA9IHRoaXM7XG4gIHZhciBkaXNwYXRjaCA9IHJlZi5kaXNwYXRjaDtcbiAgdmFyIGNvbW1pdCA9IHJlZi5jb21taXQ7XG4gIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbiBib3VuZERpc3BhdGNoICh0eXBlLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoLmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQpXG4gIH07XG4gIHRoaXMuY29tbWl0ID0gZnVuY3Rpb24gYm91bmRDb21taXQgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tbWl0LmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpXG4gIH07XG5cbiAgLy8gc3RyaWN0IG1vZGVcbiAgdGhpcy5zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgLy8gaW5pdCByb290IG1vZHVsZS5cbiAgLy8gdGhpcyBhbHNvIHJlY3Vyc2l2ZWx5IHJlZ2lzdGVycyBhbGwgc3ViLW1vZHVsZXNcbiAgLy8gYW5kIGNvbGxlY3RzIGFsbCBtb2R1bGUgZ2V0dGVycyBpbnNpZGUgdGhpcy5fd3JhcHBlZEdldHRlcnNcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCBzdGF0ZSwgW10sIHRoaXMuX21vZHVsZXMucm9vdCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgdm0sIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgcmVhY3Rpdml0eVxuICAvLyAoYWxzbyByZWdpc3RlcnMgX3dyYXBwZWRHZXR0ZXJzIGFzIGNvbXB1dGVkIHByb3BlcnRpZXMpXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCBzdGF0ZSk7XG5cbiAgLy8gYXBwbHkgcGx1Z2luc1xuICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikgeyByZXR1cm4gcGx1Z2luKHRoaXMkMSk7IH0pO1xuXG4gIGlmIChWdWUuY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbFBsdWdpbih0aGlzKTtcbiAgfVxufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgc3RhdGU6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3ZtLl9kYXRhLiQkc3RhdGVcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5zdGF0ZS5zZXQgPSBmdW5jdGlvbiAodikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChmYWxzZSwgXCJVc2Ugc3RvcmUucmVwbGFjZVN0YXRlKCkgdG8gZXhwbGljaXQgcmVwbGFjZSBzdG9yZSBzdGF0ZS5cIik7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbiBjb21taXQgKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgY29tbWl0XG4gIHZhciByZWYgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcbiAgICB2YXIgb3B0aW9ucyA9IHJlZi5vcHRpb25zO1xuXG4gIHZhciBtdXRhdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9tdXRhdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiBjb21taXRJdGVyYXRvciAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihwYXlsb2FkKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRoaXMuX3N1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViKG11dGF0aW9uLCB0aGlzJDEuc3RhdGUpOyB9KTtcblxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5zaWxlbnRcbiAgKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbdnVleF0gbXV0YXRpb24gdHlwZTogXCIgKyB0eXBlICsgXCIuIFNpbGVudCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gXCIgK1xuICAgICAgJ1VzZSB0aGUgZmlsdGVyIGZ1bmN0aW9uYWxpdHkgaW4gdGhlIHZ1ZS1kZXZ0b29scydcbiAgICApO1xuICB9XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCAoX3R5cGUsIF9wYXlsb2FkKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGRpc3BhdGNoXG4gIHZhciByZWYgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuXG4gIHZhciBhY3Rpb24gPSB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQgfTtcbiAgdmFyIGVudHJ5ID0gdGhpcy5fYWN0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGFjdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1YihhY3Rpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIHJldHVybiBlbnRyeS5sZW5ndGggPiAxXG4gICAgPyBQcm9taXNlLmFsbChlbnRyeS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIocGF5bG9hZCk7IH0pKVxuICAgIDogZW50cnlbMF0ocGF5bG9hZClcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUgKGZuKSB7XG4gIHJldHVybiBnZW5lcmljU3Vic2NyaWJlKGZuLCB0aGlzLl9zdWJzY3JpYmVycylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmVBY3Rpb24gPSBmdW5jdGlvbiBzdWJzY3JpYmVBY3Rpb24gKGZuKSB7XG4gIHJldHVybiBnZW5lcmljU3Vic2NyaWJlKGZuLCB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycylcbn07XG5cblN0b3JlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIHdhdGNoIChnZXR0ZXIsIGNiLCBvcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIGdldHRlciA9PT0gJ2Z1bmN0aW9uJywgXCJzdG9yZS53YXRjaCBvbmx5IGFjY2VwdHMgYSBmdW5jdGlvbi5cIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX3dhdGNoZXJWTS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0dGVyKHRoaXMkMS5zdGF0ZSwgdGhpcyQxLmdldHRlcnMpOyB9LCBjYiwgb3B0aW9ucylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiByZXBsYWNlU3RhdGUgKHN0YXRlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLl92bS5fZGF0YS4kJHN0YXRlID0gc3RhdGU7XG4gIH0pO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGUgKHBhdGgsIHJhd01vZHVsZSwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gICAgYXNzZXJ0KHBhdGgubGVuZ3RoID4gMCwgJ2Nhbm5vdCByZWdpc3RlciB0aGUgcm9vdCBtb2R1bGUgYnkgdXNpbmcgcmVnaXN0ZXJNb2R1bGUuJyk7XG4gIH1cblxuICB0aGlzLl9tb2R1bGVzLnJlZ2lzdGVyKHBhdGgsIHJhd01vZHVsZSk7XG4gIGluc3RhbGxNb2R1bGUodGhpcywgdGhpcy5zdGF0ZSwgcGF0aCwgdGhpcy5fbW9kdWxlcy5nZXQocGF0aCksIG9wdGlvbnMucHJlc2VydmVTdGF0ZSk7XG4gIC8vIHJlc2V0IHN0b3JlIHRvIHVwZGF0ZSBnZXR0ZXJzLi4uXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCB0aGlzLnN0YXRlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS51bnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gdW5yZWdpc3Rlck1vZHVsZSAocGF0aCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gIH1cblxuICB0aGlzLl9tb2R1bGVzLnVucmVnaXN0ZXIocGF0aCk7XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHRoaXMkMS5zdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIFZ1ZS5kZWxldGUocGFyZW50U3RhdGUsIHBhdGhbcGF0aC5sZW5ndGggLSAxXSk7XG4gIH0pO1xuICByZXNldFN0b3JlKHRoaXMpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmhvdFVwZGF0ZSA9IGZ1bmN0aW9uIGhvdFVwZGF0ZSAobmV3T3B0aW9ucykge1xuICB0aGlzLl9tb2R1bGVzLnVwZGF0ZShuZXdPcHRpb25zKTtcbiAgcmVzZXRTdG9yZSh0aGlzLCB0cnVlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5fd2l0aENvbW1pdCA9IGZ1bmN0aW9uIF93aXRoQ29tbWl0IChmbikge1xuICB2YXIgY29tbWl0dGluZyA9IHRoaXMuX2NvbW1pdHRpbmc7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSB0cnVlO1xuICBmbigpO1xuICB0aGlzLl9jb21taXR0aW5nID0gY29tbWl0dGluZztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBTdG9yZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5mdW5jdGlvbiBnZW5lcmljU3Vic2NyaWJlIChmbiwgc3Vicykge1xuICBpZiAoc3Vicy5pbmRleE9mKGZuKSA8IDApIHtcbiAgICBzdWJzLnB1c2goZm4pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSBzdWJzLmluZGV4T2YoZm4pO1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHN1YnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlIChzdG9yZSwgaG90KSB7XG4gIHN0b3JlLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHN0YXRlID0gc3RvcmUuc3RhdGU7XG4gIC8vIGluaXQgYWxsIG1vZHVsZXNcbiAgaW5zdGFsbE1vZHVsZShzdG9yZSwgc3RhdGUsIFtdLCBzdG9yZS5fbW9kdWxlcy5yb290LCB0cnVlKTtcbiAgLy8gcmVzZXQgdm1cbiAgcmVzZXRTdG9yZVZNKHN0b3JlLCBzdGF0ZSwgaG90KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZVZNIChzdG9yZSwgc3RhdGUsIGhvdCkge1xuICB2YXIgb2xkVm0gPSBzdG9yZS5fdm07XG5cbiAgLy8gYmluZCBzdG9yZSBwdWJsaWMgZ2V0dGVyc1xuICBzdG9yZS5nZXR0ZXJzID0ge307XG4gIHZhciB3cmFwcGVkR2V0dGVycyA9IHN0b3JlLl93cmFwcGVkR2V0dGVycztcbiAgdmFyIGNvbXB1dGVkID0ge307XG4gIGZvckVhY2hWYWx1ZSh3cmFwcGVkR2V0dGVycywgZnVuY3Rpb24gKGZuLCBrZXkpIHtcbiAgICAvLyB1c2UgY29tcHV0ZWQgdG8gbGV2ZXJhZ2UgaXRzIGxhenktY2FjaGluZyBtZWNoYW5pc21cbiAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4oc3RvcmUpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdG9yZS5nZXR0ZXJzLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuX3ZtW2tleV07IH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlIC8vIGZvciBsb2NhbCBnZXR0ZXJzXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHVzZSBhIFZ1ZSBpbnN0YW5jZSB0byBzdG9yZSB0aGUgc3RhdGUgdHJlZVxuICAvLyBzdXBwcmVzcyB3YXJuaW5ncyBqdXN0IGluIGNhc2UgdGhlIHVzZXIgaGFzIGFkZGVkXG4gIC8vIHNvbWUgZnVua3kgZ2xvYmFsIG1peGluc1xuICB2YXIgc2lsZW50ID0gVnVlLmNvbmZpZy5zaWxlbnQ7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gdHJ1ZTtcbiAgc3RvcmUuX3ZtID0gbmV3IFZ1ZSh7XG4gICAgZGF0YToge1xuICAgICAgJCRzdGF0ZTogc3RhdGVcbiAgICB9LFxuICAgIGNvbXB1dGVkOiBjb21wdXRlZFxuICB9KTtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSBzaWxlbnQ7XG5cbiAgLy8gZW5hYmxlIHN0cmljdCBtb2RlIGZvciBuZXcgdm1cbiAgaWYgKHN0b3JlLnN0cmljdCkge1xuICAgIGVuYWJsZVN0cmljdE1vZGUoc3RvcmUpO1xuICB9XG5cbiAgaWYgKG9sZFZtKSB7XG4gICAgaWYgKGhvdCkge1xuICAgICAgLy8gZGlzcGF0Y2ggY2hhbmdlcyBpbiBhbGwgc3Vic2NyaWJlZCB3YXRjaGVyc1xuICAgICAgLy8gdG8gZm9yY2UgZ2V0dGVyIHJlLWV2YWx1YXRpb24gZm9yIGhvdCByZWxvYWRpbmcuXG4gICAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9sZFZtLl9kYXRhLiQkc3RhdGUgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJldHVybiBvbGRWbS4kZGVzdHJveSgpOyB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsTW9kdWxlIChzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLCBtb2R1bGUsIGhvdCkge1xuICB2YXIgaXNSb290ID0gIXBhdGgubGVuZ3RoO1xuICB2YXIgbmFtZXNwYWNlID0gc3RvcmUuX21vZHVsZXMuZ2V0TmFtZXNwYWNlKHBhdGgpO1xuXG4gIC8vIHJlZ2lzdGVyIGluIG5hbWVzcGFjZSBtYXBcbiAgaWYgKG1vZHVsZS5uYW1lc3BhY2VkKSB7XG4gICAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXSA9IG1vZHVsZTtcbiAgfVxuXG4gIC8vIHNldCBzdGF0ZVxuICBpZiAoIWlzUm9vdCAmJiAhaG90KSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUocm9vdFN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgdmFyIG1vZHVsZU5hbWUgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgc3RvcmUuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgICAgVnVlLnNldChwYXJlbnRTdGF0ZSwgbW9kdWxlTmFtZSwgbW9kdWxlLnN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBsb2NhbCA9IG1vZHVsZS5jb250ZXh0ID0gbWFrZUxvY2FsQ29udGV4dChzdG9yZSwgbmFtZXNwYWNlLCBwYXRoKTtcblxuICBtb2R1bGUuZm9yRWFjaE11dGF0aW9uKGZ1bmN0aW9uIChtdXRhdGlvbiwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyTXV0YXRpb24oc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBtdXRhdGlvbiwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaEFjdGlvbihmdW5jdGlvbiAoYWN0aW9uLCBrZXkpIHtcbiAgICB2YXIgdHlwZSA9IGFjdGlvbi5yb290ID8ga2V5IDogbmFtZXNwYWNlICsga2V5O1xuICAgIHZhciBoYW5kbGVyID0gYWN0aW9uLmhhbmRsZXIgfHwgYWN0aW9uO1xuICAgIHJlZ2lzdGVyQWN0aW9uKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoR2V0dGVyKGZ1bmN0aW9uIChnZXR0ZXIsIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3RlckdldHRlcihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIGdldHRlciwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjaGlsZCwga2V5KSB7XG4gICAgaW5zdGFsbE1vZHVsZShzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLmNvbmNhdChrZXkpLCBjaGlsZCwgaG90KTtcbiAgfSk7XG59XG5cbi8qKlxuICogbWFrZSBsb2NhbGl6ZWQgZGlzcGF0Y2gsIGNvbW1pdCwgZ2V0dGVycyBhbmQgc3RhdGVcbiAqIGlmIHRoZXJlIGlzIG5vIG5hbWVzcGFjZSwganVzdCB1c2Ugcm9vdCBvbmVzXG4gKi9cbmZ1bmN0aW9uIG1ha2VMb2NhbENvbnRleHQgKHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpIHtcbiAgdmFyIG5vTmFtZXNwYWNlID0gbmFtZXNwYWNlID09PSAnJztcblxuICB2YXIgbG9jYWwgPSB7XG4gICAgZGlzcGF0Y2g6IG5vTmFtZXNwYWNlID8gc3RvcmUuZGlzcGF0Y2ggOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXN0b3JlLl9hY3Rpb25zW3R5cGVdKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBsb2NhbCBhY3Rpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHR5cGUsIHBheWxvYWQpXG4gICAgfSxcblxuICAgIGNvbW1pdDogbm9OYW1lc3BhY2UgPyBzdG9yZS5jb21taXQgOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXN0b3JlLl9tdXRhdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIG11dGF0aW9uIHR5cGU6IFwiICsgKGFyZ3MudHlwZSkgKyBcIiwgZ2xvYmFsIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0b3JlLmNvbW1pdCh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gZ2V0dGVycyBhbmQgc3RhdGUgb2JqZWN0IG11c3QgYmUgZ290dGVuIGxhemlseVxuICAvLyBiZWNhdXNlIHRoZXkgd2lsbCBiZSBjaGFuZ2VkIGJ5IHZtIHVwZGF0ZVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsb2NhbCwge1xuICAgIGdldHRlcnM6IHtcbiAgICAgIGdldDogbm9OYW1lc3BhY2VcbiAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFrZUxvY2FsR2V0dGVycyhzdG9yZSwgbmFtZXNwYWNlKTsgfVxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0TmVzdGVkU3RhdGUoc3RvcmUuc3RhdGUsIHBhdGgpOyB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9jYWxcbn1cblxuZnVuY3Rpb24gbWFrZUxvY2FsR2V0dGVycyAoc3RvcmUsIG5hbWVzcGFjZSkge1xuICB2YXIgZ2V0dGVyc1Byb3h5ID0ge307XG5cbiAgdmFyIHNwbGl0UG9zID0gbmFtZXNwYWNlLmxlbmd0aDtcbiAgT2JqZWN0LmtleXMoc3RvcmUuZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIC8vIHNraXAgaWYgdGhlIHRhcmdldCBnZXR0ZXIgaXMgbm90IG1hdGNoIHRoaXMgbmFtZXNwYWNlXG4gICAgaWYgKHR5cGUuc2xpY2UoMCwgc3BsaXRQb3MpICE9PSBuYW1lc3BhY2UpIHsgcmV0dXJuIH1cblxuICAgIC8vIGV4dHJhY3QgbG9jYWwgZ2V0dGVyIHR5cGVcbiAgICB2YXIgbG9jYWxUeXBlID0gdHlwZS5zbGljZShzcGxpdFBvcyk7XG5cbiAgICAvLyBBZGQgYSBwb3J0IHRvIHRoZSBnZXR0ZXJzIHByb3h5LlxuICAgIC8vIERlZmluZSBhcyBnZXR0ZXIgcHJvcGVydHkgYmVjYXVzZVxuICAgIC8vIHdlIGRvIG5vdCB3YW50IHRvIGV2YWx1YXRlIHRoZSBnZXR0ZXJzIGluIHRoaXMgdGltZS5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2V0dGVyc1Byb3h5LCBsb2NhbFR5cGUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuZ2V0dGVyc1t0eXBlXTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGdldHRlcnNQcm94eVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck11dGF0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX211dGF0aW9uc1t0eXBlXSB8fCAoc3RvcmUuX211dGF0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkTXV0YXRpb25IYW5kbGVyIChwYXlsb2FkKSB7XG4gICAgaGFuZGxlci5jYWxsKHN0b3JlLCBsb2NhbC5zdGF0ZSwgcGF5bG9hZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckFjdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKSB7XG4gIHZhciBlbnRyeSA9IHN0b3JlLl9hY3Rpb25zW3R5cGVdIHx8IChzdG9yZS5fYWN0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkQWN0aW9uSGFuZGxlciAocGF5bG9hZCwgY2IpIHtcbiAgICB2YXIgcmVzID0gaGFuZGxlci5jYWxsKHN0b3JlLCB7XG4gICAgICBkaXNwYXRjaDogbG9jYWwuZGlzcGF0Y2gsXG4gICAgICBjb21taXQ6IGxvY2FsLmNvbW1pdCxcbiAgICAgIGdldHRlcnM6IGxvY2FsLmdldHRlcnMsXG4gICAgICBzdGF0ZTogbG9jYWwuc3RhdGUsXG4gICAgICByb290R2V0dGVyczogc3RvcmUuZ2V0dGVycyxcbiAgICAgIHJvb3RTdGF0ZTogc3RvcmUuc3RhdGVcbiAgICB9LCBwYXlsb2FkLCBjYik7XG4gICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xuICAgICAgcmVzID0gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfVxuICAgIGlmIChzdG9yZS5fZGV2dG9vbEhvb2spIHtcbiAgICAgIHJldHVybiByZXMuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBzdG9yZS5fZGV2dG9vbEhvb2suZW1pdCgndnVleDplcnJvcicsIGVycik7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyR2V0dGVyIChzdG9yZSwgdHlwZSwgcmF3R2V0dGVyLCBsb2NhbCkge1xuICBpZiAoc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIGR1cGxpY2F0ZSBnZXR0ZXIga2V5OiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdID0gZnVuY3Rpb24gd3JhcHBlZEdldHRlciAoc3RvcmUpIHtcbiAgICByZXR1cm4gcmF3R2V0dGVyKFxuICAgICAgbG9jYWwuc3RhdGUsIC8vIGxvY2FsIHN0YXRlXG4gICAgICBsb2NhbC5nZXR0ZXJzLCAvLyBsb2NhbCBnZXR0ZXJzXG4gICAgICBzdG9yZS5zdGF0ZSwgLy8gcm9vdCBzdGF0ZVxuICAgICAgc3RvcmUuZ2V0dGVycyAvLyByb290IGdldHRlcnNcbiAgICApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVN0cmljdE1vZGUgKHN0b3JlKSB7XG4gIHN0b3JlLl92bS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YS4kJHN0YXRlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0KHN0b3JlLl9jb21taXR0aW5nLCBcIkRvIG5vdCBtdXRhdGUgdnVleCBzdG9yZSBzdGF0ZSBvdXRzaWRlIG11dGF0aW9uIGhhbmRsZXJzLlwiKTtcbiAgICB9XG4gIH0sIHsgZGVlcDogdHJ1ZSwgc3luYzogdHJ1ZSB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TmVzdGVkU3RhdGUgKHN0YXRlLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLmxlbmd0aFxuICAgID8gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKHN0YXRlLCBrZXkpIHsgcmV0dXJuIHN0YXRlW2tleV07IH0sIHN0YXRlKVxuICAgIDogc3RhdGVcbn1cblxuZnVuY3Rpb24gdW5pZnlPYmplY3RTdHlsZSAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICBpZiAoaXNPYmplY3QodHlwZSkgJiYgdHlwZS50eXBlKSB7XG4gICAgb3B0aW9ucyA9IHBheWxvYWQ7XG4gICAgcGF5bG9hZCA9IHR5cGU7XG4gICAgdHlwZSA9IHR5cGUudHlwZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJywgKFwiRXhwZWN0cyBzdHJpbmcgYXMgdGhlIHR5cGUsIGJ1dCBmb3VuZCBcIiArICh0eXBlb2YgdHlwZSkgKyBcIi5cIikpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCwgb3B0aW9uczogb3B0aW9ucyB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGwgKF9WdWUpIHtcbiAgaWYgKFZ1ZSAmJiBfVnVlID09PSBWdWUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1t2dWV4XSBhbHJlYWR5IGluc3RhbGxlZC4gVnVlLnVzZShWdWV4KSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBWdWUgPSBfVnVlO1xuICBhcHBseU1peGluKFZ1ZSk7XG59XG5cbnZhciBtYXBTdGF0ZSA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBzdGF0ZXMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkU3RhdGUgKCkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy4kc3RvcmUuc3RhdGU7XG4gICAgICB2YXIgZ2V0dGVycyA9IHRoaXMuJHN0b3JlLmdldHRlcnM7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcFN0YXRlJywgbmFtZXNwYWNlKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzdGF0ZSA9IG1vZHVsZS5jb250ZXh0LnN0YXRlO1xuICAgICAgICBnZXR0ZXJzID0gbW9kdWxlLmNvbnRleHQuZ2V0dGVycztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmNhbGwodGhpcywgc3RhdGUsIGdldHRlcnMpXG4gICAgICAgIDogc3RhdGVbdmFsXVxuICAgIH07XG4gICAgLy8gbWFyayB2dWV4IGdldHRlciBmb3IgZGV2dG9vbHNcbiAgICByZXNba2V5XS52dWV4ID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwTXV0YXRpb25zID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIG11dGF0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChtdXRhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRNdXRhdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgdmFyIGNvbW1pdCA9IHRoaXMuJHN0b3JlLmNvbW1pdDtcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwTXV0YXRpb25zJywgbmFtZXNwYWNlKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb21taXQgPSBtb2R1bGUuY29udGV4dC5jb21taXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbC5hcHBseSh0aGlzLCBbY29tbWl0XS5jb25jYXQoYXJncykpXG4gICAgICAgIDogY29tbWl0LmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwR2V0dGVycyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBnZXR0ZXJzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKGdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgdmFsID0gbmFtZXNwYWNlICsgdmFsO1xuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkR2V0dGVyICgpIHtcbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwR2V0dGVycycsIG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhKHZhbCBpbiB0aGlzLiRzdG9yZS5nZXR0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGdldHRlcjogXCIgKyB2YWwpKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1t2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBBY3Rpb25zID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGFjdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEFjdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgdmFyIGRpc3BhdGNoID0gdGhpcy4kc3RvcmUuZGlzcGF0Y2g7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcEFjdGlvbnMnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoID0gbW9kdWxlLmNvbnRleHQuZGlzcGF0Y2g7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbC5hcHBseSh0aGlzLCBbZGlzcGF0Y2hdLmNvbmNhdChhcmdzKSlcbiAgICAgICAgOiBkaXNwYXRjaC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkgeyByZXR1cm4gKHtcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycy5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcE11dGF0aW9uczogbWFwTXV0YXRpb25zLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucy5iaW5kKG51bGwsIG5hbWVzcGFjZSlcbn0pOyB9O1xuXG5mdW5jdGlvbiBub3JtYWxpemVNYXAgKG1hcCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShtYXApXG4gICAgPyBtYXAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IGtleSB9KTsgfSlcbiAgICA6IE9iamVjdC5rZXlzKG1hcCkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IG1hcFtrZXldIH0pOyB9KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lc3BhY2UgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobmFtZXNwYWNlLCBtYXApIHtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG1hcCA9IG5hbWVzcGFjZTtcbiAgICAgIG5hbWVzcGFjZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlLmNoYXJBdChuYW1lc3BhY2UubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgbmFtZXNwYWNlICs9ICcvJztcbiAgICB9XG4gICAgcmV0dXJuIGZuKG5hbWVzcGFjZSwgbWFwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZUJ5TmFtZXNwYWNlIChzdG9yZSwgaGVscGVyLCBuYW1lc3BhY2UpIHtcbiAgdmFyIG1vZHVsZSA9IHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFtb2R1bGUpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBtb2R1bGUgbmFtZXNwYWNlIG5vdCBmb3VuZCBpbiBcIiArIGhlbHBlciArIFwiKCk6IFwiICsgbmFtZXNwYWNlKSk7XG4gIH1cbiAgcmV0dXJuIG1vZHVsZVxufVxuXG52YXIgaW5kZXhfZXNtID0ge1xuICBTdG9yZTogU3RvcmUsXG4gIGluc3RhbGw6IGluc3RhbGwsXG4gIHZlcnNpb246ICczLjAuMScsXG4gIG1hcFN0YXRlOiBtYXBTdGF0ZSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMsXG4gIG1hcEdldHRlcnM6IG1hcEdldHRlcnMsXG4gIG1hcEFjdGlvbnM6IG1hcEFjdGlvbnMsXG4gIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzOiBjcmVhdGVOYW1lc3BhY2VkSGVscGVyc1xufTtcblxuZXhwb3J0IHsgU3RvcmUsIGluc3RhbGwsIG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMsIG1hcEdldHRlcnMsIG1hcEFjdGlvbnMsIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzIH07XG5leHBvcnQgZGVmYXVsdCBpbmRleF9lc207XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiY29uc3QgcHJvbWlzaWMgPSBmdW5jdGlvbihmdW5jKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcmdzID0gT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlcyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZnVuYyhhcmdzKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcbn1cclxuXHJcbi8vIHNob3dUb2FzdFxyXG5jb25zdCBfdG9hc3QgPSBmdW5jdGlvbih0aXRsZSwgcG9zaXRpb24sIGljb24pIHtcclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdGljb246IGljb24gfHwgXCJub25lXCIsXHJcblx0XHRwb3NpdGlvbjogcG9zaXRpb24gfHwgXCJ0b3BcIlxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBnZXRTdG9yYWdlID0gKGtleSkgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkuZ2V0U3RvcmFnZSh7XHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdHJlamVjdChlcnJvcilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdF90b2FzdCxcclxuXHRnZXRTdG9yYWdlXHJcbn07XHJcbiIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3N0YXJ0L3N0YXJ0Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3N0YXJ0L3N0YXJ0J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0YXJ0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTU4N2M1NDYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N0YXJ0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3RhcnQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTNhYTQzYTRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9zdGFydC9zdGFydC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGFydC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1ODdjNTQ2Jm1wVHlwZT1wYWdlXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJmbGV4LTFcIiwgXCJmbGV4LWNlbnRlclwiXSB9LCBbXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIFtfdm0uX3YoXCLliqDovb3kuK0uLi5cIildKSxcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgW192bS5fdihcIua1i+ivlTpcIiArIF92bS5fcyhfdm0udG9rZW4pKV0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGFydC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGFydC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleC1jZW50ZXJcIj5cclxuXHRcdDx0ZXh0PuWKoOi9veS4rS4uLjwvdGV4dD5cclxuXHRcdDx0ZXh0Pua1i+ivlTp7eyB0b2tlbiB9fTwvdGV4dD5cclxuXHRcdDwhLS0gPGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIEBjbGljaz1cInNldFwiPnNldDwvYnV0dG9uPiAtLT5cclxuXHRcdDwhLS0gPGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIEBjbGljaz1cImluaXRcIj5nZXQ8L2J1dHRvbj4gLS0+XHJcblx0XHQ8IS0tIDxidXR0b24gdHlwZT1cImRlZmF1bHRcIiBAY2xpY2s9XCJnZXQxXCI+Z2V0MTwvYnV0dG9uPiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwuanMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7fTtcclxuXHR9LFxyXG5cclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Li4ubWFwU3RhdGUoe1xyXG5cdFx0XHR0b2tlbjogc3RhdGUgPT4gc3RhdGUudG9rZW5cclxuXHRcdH0pXHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5nb3RvKCk7XHJcblx0fSxcclxuXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z290bygpIHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMudG9rZW4pIHtcclxuXHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvdGFiYmFyL2luZGV4L2luZGV4J1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCA3MDApO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+PC9zdHlsZT5cbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpY29uZm9udFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIlxuICB9LFxuICBcImZsZXgtMVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJmbGV4LWNlbnRlclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwianVzdGlmeS1iZXR3ZWVuXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwianVzdGlmeS1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImp1c3RpZnktYXJvdW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC13cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcIm1sLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwXG4gIH0sXG4gIFwibWwtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1sLTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtbC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWwtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1sLTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtci0wXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJtci0xXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1yLTJcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXItM1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtci00XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1yLTVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXQtMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXQtM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXQtNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXQtNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWItMVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWItMlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWItM1wiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWItNFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWItNVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXgtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm14LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXgtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm14LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJteS0xXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXktMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm15LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJteS00XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXktNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBsLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGwtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwbC0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBsLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGwtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwci0xXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwci0yXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwci0zXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwci00XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweS0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweS0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJweS0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJweS00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJweS01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJmb250LTIwXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBycHhcIlxuICB9LFxuICBcImZvbnQtMjVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXJweFwiXG4gIH0sXG4gIFwiZm9udC0zMFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJmb250LTM1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzVycHhcIlxuICB9LFxuICBcImZvbnQtNDBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwidGV4dC1ib2xkXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJ0ZXh0LXdoaXRlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidGV4dC1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0ZXh0LWxlZnRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGV4dC1yaWdodFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidGV4dC1lbGxpcHNpc1wiOiB7XG4gICAgXCJsaW5lc1wiOiAxXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiMwMDYyY2NcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzU0NWI2MlwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZTdlMzRcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctaG92ZXItaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTE3YThiXCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWhvdmVyLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2QzOWUwMFwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYmQyMTMwXCJcbiAgfSxcbiAgXCJiZy1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGFlMGU1XCJcbiAgfSxcbiAgXCJiZy1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFkMjEyNFwiXG4gIH0sXG4gIFwiYmctd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiYmctdHJhbnNwYXJlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMSlcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC4xKVwiXG4gIH0sXG4gIFwiZm9udC14c1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJmb250LXNtXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRycHhcIlxuICB9LFxuICBcImZvbnQtbWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNnJweFwiXG4gIH0sXG4gIFwiZm9udC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LW1haW4tY29sb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDEpXCJcbiAgfSxcbiAgXCJ0ZXh0LXNlYy1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC42KVwiXG4gIH0sXG4gIFwidGV4dC10aHJlZS1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC40KVwiXG4gIH0sXG4gIFwidGV4dC1ibHVlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzUyNjA5MVwiXG4gIH0sXG4gIFwiYmctZGFyay1jb2xvclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMilcIlxuICB9LFxuICBcImJnLWNvbG9yLTFcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNDQsMjQ0LDI0NCwxKVwiXG4gIH0sXG4gIFwiYmctY29sb3ItMlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0MywyNDQsMjQ2LDEpXCJcbiAgfSxcbiAgXCJiZy1tYWluXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZGVkZWRcIlxuICB9LFxuICBcInllbGxvd1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyMjgsNDksMSlcIlxuICB9LFxuICBcInJlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSw5Myw5MSwxKVwiXG4gIH0sXG4gIFwiYmx1ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDg3LDE1MywyNTUsMSlcIlxuICB9LFxuICBcInJvdW5kLXNtXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVycHhcIlxuICB9LFxuICBcInJvdW5kLW1kXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJyb3VuZC1sZ1wiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwiY2lyY2xlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MFxuICB9LFxuICBcImJvcmRlci1jb2xvclwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC4xKVwiXG4gIH0sXG4gIFwidGVtcC1iZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMylcIlxuICB9LFxuICBcInRlbXAtYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIyXCJcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e1wicGFnZXMvdXNlci91c2VyRGV0YWlsL3VzZXJEZXRhaWxcIjp7fSxcInBhZ2VzL3N0YXJ0L3N0YXJ0XCI6e30sXCJwYWdlcy9sb2dpbi9sb2dpblwiOnt9LFwicGFnZXMvdGFiYmFyL2luZGV4L2luZGV4XCI6e30sXCJwYWdlcy9maW5kL21vbWVudC9tb21lbnRcIjp7fSxcInBhZ2VzL2ZyaWVuZC9hcHBseUZyaWVuZC9hcHBseUZyaWVuZFwiOnt9LFwicGFnZXMvY29tcGFnZS92aXNpdGluZy92aXNpdGluZ1wiOntcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmZmZmZmZcIixcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInR5cGVcIjpcIm1lbnVcIn1dfX0sXCJwYWdlcy9mcmllbmQvYXBwbHlMaXN0L2FwcGx5TGlzdFwiOntcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInRleHRcIjpcIuaWsOeahOaci+WPi1wiLFwiZmxvYXRcIjpcImxlZnRcIixcImZvbnRXZWlnaHRcIjpcImJvbGRcIixcImZvbnRTaXplXCI6XCIxOHB4XCIsXCJ3aWR0aFwiOlwiMTAwcHhcIn0se1widGV4dFwiOlwi5re75Yqg5pyL5Y+LXCIsXCJmbG9hdFwiOlwicmlnaHRcIixcImZvbnRTaXplXCI6XCIxOHB4XCIsXCJ3aWR0aFwiOlwiMTAwcHhcIn1dfX0sXCJwYWdlcy9mcmllbmQvYWRkRnJpZW5kL2FkZEZyaWVuZFwiOnt9LFwicGFnZXMvdGFiYmFyL215L215XCI6e30sXCJwYWdlcy90YWJiYXIvY29udGFjdHMvY29udGFjdHNcIjp7fSxcInBhZ2VzL3RhYmJhci9maW5kL2ZpbmRcIjp7fSxcInBhZ2VzL2NvbXBhZ2UvY2hhdC9jaGF0XCI6e319LFwiZ2xvYmFsU3R5bGVcIjp7fX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfXzY3QUE2N0JcIn0iXSwic291cmNlUm9vdCI6IiJ9