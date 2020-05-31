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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
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
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),
/* 4 */
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages.json?{"type":"style"} ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/user/userDetail/userDetail":{},"pages/start/start":{},"pages/login/login":{},"pages/tabbar/index/index":{},"pages/find/moment/moment":{},"pages/friend/applyFriend/applyFriend":{},"pages/compage/visiting/visiting":{"navigationBarBackgroundColor":"#ffffff","titleNView":{"buttons":[{"type":"menu"}]}},"pages/friend/applyList/applyList":{"titleNView":{"buttons":[{"text":"新的朋友","float":"left","fontWeight":"bold","fontSize":"18px","width":"100px"},{"text":"添加朋友","float":"right","fontSize":"18px","width":"100px"}]}},"pages/friend/addFriend/addFriend":{},"pages/tabbar/my/my":{},"pages/tabbar/contacts/contacts":{},"pages/tabbar/find/find":{},"pages/compage/chat/chat":{}},"globalStyle":{}});

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages.json?{"type":"stat"} ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__67AA67B"});

/***/ }),
/* 6 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */
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
/* 15 */
/*!*******************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 16));var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 6));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 11));
var _util = __webpack_require__(/*! ../utils/util.js */ 18);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}



_vue.default.use(_vuex.default);

// import userModule from '@/store/modules/userModule.js';
var state = {
  user: {},
  token: "",
  chat: null };


var mutations = {
  // 存储token
  SET_TOKEN: function SET_TOKEN(state, token) {
    state.token = token || '';
  },
  SET_USER: function SET_USER(state, user) {
    state.user = user || {};
  },
  SET_CHAT: function SET_CHAT(state, chat) {
    state.chat = chat || null;
  } };

var actions = {
  // app init 
  init: function init(_ref,

  data) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var commit, user, token;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:commit = _ref.commit;_context.next = 3;return (
                (0, _util.getStorage)('user'));case 3:user = _context.sent;_context.next = 6;return (
                (0, _util.getStorage)('token'));case 6:token = _context.sent;
              commit('SET_TOKEN', token);
              commit('SET_USER', user);case 9:case "end":return _context.stop();}}}, _callee);}))();
  },


  login: function login(_ref2,

  user) {var commit = _ref2.commit;
    commit('SET_TOKEN', user.token);
    commit('SET_USER', user);

    // 存储到本地
    uni.setStorage({
      key: "user",
      data: user });

    uni.setStorage({
      key: "token",
      data: user.token });


    // 连接socket
    // let chat = new Chat({
    // 	user,
    // 	url: config.wsUrl
    // })
    // commit('SET_CHAT', chat)
  },
  logout: function logout(_ref3)


  {var commit = _ref3.commit,state = _ref3.state;
    __f__("log", "lout", " at store\\index.js:67");
    commit('SET_TOKEN', "");
    commit('SET_USER', "");

    // 清除缓存
    uni.removeStorageSync('token');
    uni.removeStorageSync('user');
    uni.navigateTo({
      url: '/pages/login/login' });

    // 关闭socket连接
    // state.chat.close()
  } };




var store = new _vuex.default.Store({
  strict: true, //开启严格模式后，只能通过mutation来改变状态（不支持异步）否则会报错
  state: state,
  mutations: mutations,
  actions: actions });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),
/* 16 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 17);

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */,
/* 20 */
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 21).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/*!*************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-bar.vue?vue&type=template&id=cabada76&scoped=true& */ 29);
/* harmony import */ var _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-bar.vue?vue&type=script&lang=js& */ 31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./navigation-bar.vue?vue&type=style&index=0&id=cabada76&scoped=true&lang=css& */ 47).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./navigation-bar.vue?vue&type=style&index=0&id=cabada76&scoped=true&lang=css& */ 47).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cabada76",
  "3f758212",
  false,
  _navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/*!********************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue?vue&type=template&id=cabada76&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation-bar.vue?vue&type=template&id=cabada76&scoped=true& */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_cabada76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 30 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue?vue&type=template&id=cabada76&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    {
      staticClass: ["navigation-bar", "", "flex", "sticky"],
      style: { backgroundColor: _vm.bgc }
    },
    [
      _c("view", { style: "height:" + _vm.statusBarHeight + "px" }),
      _c(
        "view",
        {
          staticClass: [
            "w-100",
            "flex",
            "",
            "justify-between",
            "align-center",
            "flex-row"
          ],
          staticStyle: { height: "90rpx" }
        },
        [
          _c("view", { staticClass: ["flex", "flex-row", "ml-3"] }, [
            _vm.title
              ? _c("u-text", { staticClass: ["text-bold", "font-35"] }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm._e(),
            _vm.number
              ? _c("u-text", { staticClass: ["font-35"] }, [
                  _vm._v("(" + _vm._s(_vm.number) + ")")
                ])
              : _vm._e()
          ]),
          _vm.custom
            ? _c("view", {}, [_vm._t("default")], 2)
            : _c(
                "view",
                { staticClass: ["flex-row"] },
                [
                  _c("icon-button", {
                    attrs: { icon: "\\ue630" },
                    on: { clickIcon: _vm.search }
                  }),
                  _c("icon-button", {
                    attrs: { icon: "\\ue629" },
                    on: { clickIcon: _vm.add }
                  })
                ],
                1
              )
        ]
      ),
      _c(
        "cPopup",
        {
          ref: "popup",
          attrs: {
            transformOrigin: "right top",
            width: 270,
            height: _vm.height
          }
        },
        [
          _c(
            "view",
            { staticClass: ["popup-content", "flex-1", "round-md"] },
            _vm._l(_vm.menus, function(item, i) {
              return _c(
                "view",
                {
                  key: i,
                  staticClass: [
                    "popup-list-item",
                    "pl-3",
                    "align-center",
                    "",
                    "flex-1",
                    "flex-row"
                  ],
                  on: {
                    click: function($event) {
                      _vm.clickMenu(item)
                    }
                  }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["text-white", "iconfont", "mr-2", "font-30"]
                    },
                    [_vm._v(_vm._s(item.icon))]
                  ),
                  _c("u-text", { staticClass: ["text-white", "font-30"] }, [
                    _vm._v(_vm._s(item.text))
                  ])
                ]
              )
            }),
            0
          )
        ]
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 31 */
/*!**************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation-bar.vue?vue&type=script&lang=js& */ 32);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































var _iconButton = _interopRequireDefault(__webpack_require__(/*! @/components/ui/icon-button.vue */ 33));
var _cPopup = _interopRequireDefault(__webpack_require__(/*! ./cPopup.vue */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { cPopup: _cPopup.default, iconButton: _iconButton.default }, props: { title: String, number: { type: [String, Number] }, // 导航栏右边自定义
    custom: { type: Boolean, default: false }, bgc: { type: String, default: '#ededed' } }, computed: { height: function height() {return this.menus.length * 100;} }, data: function data() {return { statusBarHeight: 0, menus: [{ text: '发起群聊', icon: "\uE701", event: 'groupChat' },
      {
        text: '添加朋友',
        icon: "\uE701",
        event: 'addFriend',
        path: '/pages/friend/addFriend/addFriend' },

      {
        text: '扫一到',
        icon: "\uE701",
        event: 'qrCode' },

      {
        text: '帮助与反馈',
        icon: "\uE701",
        event: '' }] };



  },
  mounted: function mounted() {

    // 获取状态栏高度
    this.statusBarHeight = plus.navigator.getStatusbarHeight();

  },
  methods: {
    add: function add() {
      var x = uni.upx2px(465);
      var y = uni.upx2px(170);
      this.$refs.popup.open(x, y);
    },

    search: function search() {
      __f__("log", 'search', " at components\\ui\\navigation-bar.vue:106");
    },

    clickMenu: function clickMenu(item) {
      // console.log(item, 123);
      uni.navigateTo({
        url: item.path });

    },
    close: function close() {
      this.$refs.popup.close();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),
/* 33 */
/*!**********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-button.vue?vue&type=template&id=5b5b572b&scoped=true& */ 34);
/* harmony import */ var _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-button.vue?vue&type=script&lang=js& */ 36);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./icon-button.vue?vue&type=style&index=0&id=5b5b572b&scoped=true&lang=css& */ 38).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./icon-button.vue?vue&type=style&index=0&id=5b5b572b&scoped=true&lang=css& */ 38).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b5b572b",
  "7a4e72fe",
  false,
  _icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/*!*****************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue?vue&type=template&id=5b5b572b&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./icon-button.vue?vue&type=template&id=5b5b572b&scoped=true& */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_5b5b572b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue?vue&type=template&id=5b5b572b&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    {
      staticClass: ["flex-center", "icon-box"],
      attrs: { hoverClass: "bg-hover-light" },
      on: {
        click: function($event) {
          _vm.$emit("clickIcon")
        }
      }
    },
    [_c("u-text", { staticClass: ["iconfont"] }, [_vm._v(_vm._s(_vm._icon))])]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!***********************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./icon-button.vue?vue&type=script&lang=js& */ 37);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{
  props: {
    icon: String },

  data: function data() {
    return {};
  },
  computed: {
    _icon: function _icon() {
      var str = this.icon;
      return eval("'" + str + "'");
    } } };exports.default = _default;

/***/ }),
/* 38 */
/*!*******************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue?vue&type=style&index=0&id=5b5b572b&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_style_index_0_id_5b5b572b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./icon-button.vue?vue&type=style&index=0&id=5b5b572b&scoped=true&lang=css& */ 39);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_style_index_0_id_5b5b572b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_style_index_0_id_5b5b572b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_style_index_0_id_5b5b572b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_style_index_0_id_5b5b572b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_style_index_0_id_5b5b572b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/icon-button.vue?vue&type=style&index=0&id=5b5b572b&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "icon-box": {
    "height": "90rpx",
    "width": "110rpx"
  }
}

/***/ }),
/* 40 */
/*!*****************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cPopup.vue?vue&type=template&id=cca04918&scoped=true& */ 41);
/* harmony import */ var _cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cPopup.vue?vue&type=script&lang=js& */ 43);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./cPopup.vue?vue&type=style&index=0&id=cca04918&scoped=true&lang=css& */ 45).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./cPopup.vue?vue&type=style&index=0&id=cca04918&scoped=true&lang=css& */ 45).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cca04918",
  "5b8d307e",
  false,
  _cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 41 */
/*!************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue?vue&type=template&id=cca04918&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cPopup.vue?vue&type=template&id=cca04918&scoped=true& */ 42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_template_id_cca04918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 42 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue?vue&type=template&id=cca04918&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show
    ? _c("view", {}, [
        _vm.mask
          ? _c("view", {
              staticClass: ["mask"],
              style: _vm.getMaskStyle,
              on: { click: _vm.clickMask }
            })
          : _vm._e(),
        _c(
          "view",
          {
            ref: "content",
            staticClass: ["content", "round-md"],
            style: _vm.getBodyStyle
          },
          [_vm._t("default")],
          2
        )
      ])
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 43 */
/*!******************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cPopup.vue?vue&type=script&lang=js& */ 44);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//


var _animation = weex.requireModule('animation');var _default =


{
  props: {
    show: Boolean,
    maskClick: Boolean, // 点击mask是否关闭 默认关闭
    mask: {
      type: Boolean,
      default: true },

    maskColor: {
      type: [String, Number],
      default: 0 },

    height: {
      type: [String, Number],
      default: 300 },

    width: {
      type: [String, Number],
      default: 240 },

    // 动画方向
    transformOrigin: {
      type: String,
      default: 'left top' } },


  data: function data() {
    return {
      x: 0,
      y: 0,
      maxX: 0,
      maxY: 0 };

  },
  computed: {
    getMaskStyle: function getMaskStyle() {
      return "background-color:rgba(0,0,0,0.".concat(this.maskColor, ")");
    },
    getBodyStyle: function getBodyStyle() {
      return "height:".concat(this.height, "rpx;width:").concat(this.width, "rpx;\n\t\t\t\t\tleft:").concat(
      this.x, "px;top:").concat(this.y, "px");
    } },

  mounted: function mounted() {
    // 获取系统设置
    try {
      var res = uni.getSystemInfoSync();
      this.maxX = res.windowWidth - uni.upx2px(this.width + 30);
      this.maxY = res.windowHeight - uni.upx2px(this.height + 30);
    } catch (e) {}
  },

  methods: {
    open: function open(x, y) {var _this = this;
      // 查看是否超出边界
      this.checkIsOut(x, y);
      this.$nextTick(function () {
        _this.animation();
      });
      this.show = true;
    },
    close: function close() {
      // 动画
      this.animation('hide');
      this.show = false;
    },
    clickMask: function clickMask() {
      if (this.maskClick) return;
      this.close();
    },

    //动画
    animation: function animation(type) {var _this2 = this;
      var value;
      type == 'hide' ? value = 0 : value = 1;
      _animation.transition(
      this.$refs.content,
      {
        styles: {
          transform: "scale(".concat(value, ", ").concat(value, ")"),
          transformOrigin: this.transformOrigin,
          opacity: value },

        duration: 100, //ms
        timingFunction: 'ease' },

      function () {
        if (type == 'hide') {
          _this2.show = false;
        }
      });

    },

    checkIsOut: function checkIsOut(x, y) {
      __f__("log", x, this.maxX, " at components\\ui\\cPopup.vue:109");
      x > this.maxX ? this.x = this.maxX : this.x = x;
      y > this.maxY ? this.y = this.maxY : this.y = y;
      this.show = true;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),
/* 45 */
/*!**************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue?vue&type=style&index=0&id=cca04918&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_style_index_0_id_cca04918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cPopup.vue?vue&type=style&index=0&id=cca04918&scoped=true&lang=css& */ 46);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_style_index_0_id_cca04918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_style_index_0_id_cca04918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_style_index_0_id_cca04918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_style_index_0_id_cca04918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cPopup_vue_vue_type_style_index_0_id_cca04918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 46 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/cPopup.vue?vue&type=style&index=0&id=cca04918&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "popup": {
    "position": "fixed"
  },
  "mask": {
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "content": {
    "position": "fixed",
    "transform": "scale(0, 0)",
    "opacity": 0
  }
}

/***/ }),
/* 47 */
/*!**********************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue?vue&type=style&index=0&id=cabada76&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_cabada76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation-bar.vue?vue&type=style&index=0&id=cabada76&scoped=true&lang=css& */ 48);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_cabada76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_cabada76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_cabada76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_cabada76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_cabada76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 48 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/navigation-bar.vue?vue&type=style&index=0&id=cabada76&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "sticky": {
    "position": "sticky"
  },
  "popup-content": {
    "backgroundColor": "#4c4c4c"
  }
}

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/list-item.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item.vue?vue&type=template&id=633b4772&scoped=true& */ 66);
/* harmony import */ var _list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item.vue?vue&type=script&lang=js& */ 68);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
  _list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "633b4772",
  "1d0050da",
  false,
  _list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/components/ui/list-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 66 */
/*!***************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/list-item.vue?vue&type=template&id=633b4772&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./list-item.vue?vue&type=template&id=633b4772&scoped=true& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_template_id_633b4772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 67 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/list-item.vue?vue&type=template&id=633b4772&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    {
      staticClass: ["list-itme", "", "flex-row", "align-center", "bg-white"],
      on: { click: _vm.onClick, longpress: _vm.longpress }
    },
    [
      _c(
        "view",
        {
          staticClass: ["align-center", "justify-center"],
          class: _vm.iconClass
        },
        [
          _vm.data.img
            ? _c("u-image", {
                style: _vm.iconStyle,
                attrs: { src: _vm.data.img, mode: "" }
              })
            : _vm._e(),
          _vm.data.icon
            ? _c(
                "u-text",
                {
                  staticClass: ["iconfont"],
                  staticStyle: { fontSize: "50rpx" }
                },
                [_vm._v(_vm._s(_vm.data.icon))]
              )
            : _vm._e()
        ],
        1
      ),
      _c(
        "view",
        {
          staticClass: [
            "rigth",
            "border-bottom",
            "mr-3",
            "justify-between",
            "align-center",
            "flex-row",
            "py-2",
            "flex-1"
          ]
        },
        [
          _c(
            "view",
            {
              staticClass: ["right-container", "flex-1"],
              class: _vm.chat ? "justify-between" : "justify-center",
              style: _vm.rightStyle
            },
            [
              _c(
                "view",
                {
                  staticClass: ["flex-row", "justify-between", "align-center"]
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: [
                        "title",
                        "text-main-color",
                        "",
                        "text-ellipsis",
                        "font-35"
                      ]
                    },
                    [_vm._v(_vm._s(_vm.data.title))]
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["time", "text-three-color", "", "font-30"]
                    },
                    [_vm._v(_vm._s(_vm.data.time))]
                  )
                ]
              ),
              _vm.chat
                ? _c(
                    "view",
                    {
                      staticClass: [
                        "flex-row",
                        "justify-between",
                        "align-center"
                      ]
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: [
                            "title",
                            "font-25",
                            "text-three-color",
                            "flex-1",
                            "",
                            "text-ellipsis"
                          ]
                        },
                        [_vm._v(_vm._s(_vm.data.info))]
                      ),
                      _vm.data.mute
                        ? _c(
                            "u-text",
                            { staticClass: ["font-20", "text-three-color"] },
                            [_vm._v("静音")]
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e()
            ]
          ),
          _vm.more
            ? _c(
                "u-text",
                { staticClass: ["iconfont", "text-three-color", "font-30"] },
                [_vm._v("")]
              )
            : _vm._e(),
          _c("view", {}, [_vm._t("default")], 2)
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 68 */
/*!*********************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/list-item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./list-item.vue?vue&type=script&lang=js& */ 69);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 69 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/list-item.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    data: Object,
    more: Boolean, //是否有more 图标
    chat: Boolean, //是否聊天列表
    iconSize: {
      type: [String, Number],
      default: '80' },

    iconClass: {
      type: String,
      default: 'mx-3 ' },

    rightHeight: {
      type: [String, Number],
      default: '110' } },


  data: function data() {
    return {
      baseImg: '/static/logo.png' };

  },
  computed: {
    iconStyle: function iconStyle() {
      return "width:".concat(this.iconSize, "rpx;height:").concat(this.iconSize, "rpx");
    },
    rightStyle: function rightStyle() {
      return "height:".concat(this.iconSize, "rpx");
    } },


  methods: {
    onClick: function onClick() {
      this.$emit('onCLick', this.data);
    },
    // 长按
    longpress: function longpress(e) {
      var x = e.touches[0].screenX;
      var y = e.touches[0].screenY;
      this.$emit('longpress', { x: x, y: y });
    } } };exports.default = _default;

/***/ }),
/* 70 */,
/* 71 */
/*!******************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/utils/http.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.Http = void 0;var _config = __webpack_require__(/*! @/config/config */ 72);


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
/* 72 */
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
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/*!**************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/main.js?{"page":"pages%2Ffriend%2FaddFriend%2FaddFriend"} ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 2);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 20);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_friend_addFriend_addFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/friend/addFriend/addFriend.nvue?mpType=page */ 86);

        
        
        
        _pages_friend_addFriend_addFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_friend_addFriend_addFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/friend/addFriend/addFriend'
        _pages_friend_addFriend_addFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_friend_addFriend_addFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 86 */
/*!******************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addFriend.nvue?vue&type=template&id=7b159708&scoped=true&mpType=page */ 87);
/* harmony import */ var _addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addFriend.nvue?vue&type=script&lang=js&mpType=page */ 89);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./addFriend.nvue?vue&type=style&index=0&id=7b159708&scoped=true&lang=css&mpType=page */ 99).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./addFriend.nvue?vue&type=style&index=0&id=7b159708&scoped=true&lang=css&mpType=page */ 99).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b159708",
  "74e56efc",
  false,
  _addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 87 */
/*!************************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue?vue&type=template&id=7b159708&scoped=true&mpType=page ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./addFriend.nvue?vue&type=template&id=7b159708&scoped=true&mpType=page */ 88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_template_id_7b159708_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 88 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue?vue&type=template&id=7b159708&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        !_vm.search
          ? _c(
              "view",
              { staticClass: ["add-friend"] },
              [
                _c("navigator-bar", {
                  attrs: { custom: true, title: "添加朋友" }
                }),
                _c("view", { staticClass: ["top"] }, [
                  _c(
                    "view",
                    {
                      staticClass: [
                        "fake-input",
                        "align-center",
                        "justify-center",
                        "round-md",
                        "mx-3",
                        "bg-white"
                      ],
                      on: {
                        click: function($event) {
                          _vm.search = true
                        }
                      }
                    },
                    [
                      _c(
                        "u-text",
                        { staticClass: ["font-30", "text-three-color"] },
                        [_vm._v("输入昵称")]
                      )
                    ]
                  ),
                  _c(
                    "view",
                    { staticClass: ["mine", "align-center", "mt-3"] },
                    [
                      _c(
                        "u-text",
                        { staticClass: ["text-sec-color", "font-30"] },
                        [_vm._v("我的账号:123123")]
                      )
                    ]
                  )
                ]),
                _vm._l(_vm.lists, function(item, i) {
                  return _c("list-item", {
                    key: i,
                    attrs: { data: item, more: true, chat: true }
                  })
                })
              ],
              2
            )
          : _c(
              "view",
              { staticClass: ["search"] },
              [
                _c("serach", {
                  on: {
                    cancel: function($event) {
                      _vm.search = false
                    }
                  }
                })
              ],
              1
            )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 89 */
/*!******************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./addFriend.nvue?vue&type=script&lang=js&mpType=page */ 90);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 90 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















var _listItem = _interopRequireDefault(__webpack_require__(/*! @/components/ui/list-item.vue */ 65));
var _navigationBar = _interopRequireDefault(__webpack_require__(/*! @/components/ui/navigation-bar.vue */ 28));
var _search = _interopRequireDefault(__webpack_require__(/*! @/components/ui/search.vue */ 91));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { serach: _search.default, listItem: _listItem.default, navigatorBar: _navigationBar.default }, data: function data() {return { hasRight: false, search: false, lists: [{ img: '/static/saoyisao.png', title: '扫一扫', info: '扫描二维码名片' }, {
        img: '/static/saoyisao.png',
        title: '扫一扫',
        info: '扫描二维码名片' },

      {
        img: '/static/saoyisao.png',
        title: '扫一扫',
        info: '扫描二维码名片' }] };



  },
  methods: {} };exports.default = _default;

/***/ }),
/* 91 */
/*!*****************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=b78fd8da&scoped=true& */ 92);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 94);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./search.vue?vue&type=style&index=0&id=b78fd8da&scoped=true&lang=css& */ 97).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./search.vue?vue&type=style&index=0&id=b78fd8da&scoped=true&lang=css& */ 97).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b78fd8da",
  "467cc040",
  false,
  _search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 92 */
/*!************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue?vue&type=template&id=b78fd8da&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=b78fd8da&scoped=true& */ 93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b78fd8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 93 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue?vue&type=template&id=b78fd8da&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: ["search"] }, [
    _c("view", { style: "height:" + _vm.statusBarHeight + "px" }),
    _c("view", { staticClass: ["flex-row", "align-center", "mt-2"] }, [
      _c(
        "view",
        {
          staticClass: [
            "search-input",
            "flex-1",
            "ml-3",
            "align-center",
            "bg-white",
            "",
            "flex-row",
            "round-md"
          ]
        },
        [
          _c("icon", {
            staticClass: ["mx-1"],
            attrs: { type: "search", size: "20" }
          }),
          _c("u-input", {
            staticClass: ["input", "flex-1", "text-main-color", "font-30"],
            attrs: {
              confirmType: "search",
              type: "text",
              value: "",
              focus: "true",
              value: _vm.keyword
            },
            on: {
              confirm: _vm.search,
              input: function($event) {
                _vm.keyword = $event.detail.value
              }
            }
          })
        ],
        1
      ),
      _c(
        "u-text",
        {
          staticClass: ["cancel", "font-35", "pl-3", "pr-3"],
          on: { click: _vm.calcel }
        },
        [_vm._v("取消")]
      )
    ]),
    _vm.keyword
      ? _c(
          "view",
          {
            staticClass: [
              "chunk",
              "flex-row",
              "bg-white",
              "py-2",
              "align-center",
              "mt-3"
            ],
            on: { click: _vm.search }
          },
          [
            _c("u-image", {
              staticClass: ["search-icon", "ml-3", "mr-4"],
              attrs: { src: "/static/logo.png", mode: "" }
            }),
            _c("view", { staticClass: ["flex-row", "align-center"] }, [
              _c("u-text", { staticClass: ["font-30", "text-main-color"] }, [
                _vm._v("搜索:")
              ]),
              _c("u-text", { staticClass: ["font-30", "value"] }, [
                _vm._v(_vm._s(_vm.keyword))
              ])
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 94 */
/*!******************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js& */ 95);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 95 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 16));






















var _Search = __webpack_require__(/*! @/model/Search.js */ 96);
var _util = __webpack_require__(/*! @/utils/util.js */ 18);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  data: function data() {
    return {
      statusBarHeight: 0,
      keyword: '' };

  },
  mounted: function mounted() {

    // 获取状态栏高度
    this.statusBarHeight = plus.navigator.getStatusbarHeight();

  },
  methods: {
    calcel: function calcel() {
      this.$emit('cancel');
      uni.hideKeyboard();
    },

    search: function search() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                _this.keyword.trim()) {_context.next = 2;break;}return _context.abrupt("return");case 2:_context.next = 4;return (

                  _Search.Search.searchUser(_this.keyword));case 4:res = _context.sent;
                uni.hideKeyboard();
                // 如果没有所搜到用户
                if (res.data) {_context.next = 8;break;}return _context.abrupt("return", (0, _util._toast)('您的朋友可能正在火星旅行!!', 'center'));case 8:

                // 搜索到用户 跳转用户详情
                uni.navigateTo({
                  url: "/pages/compage/visiting/visiting?id=".concat(res.data._id) });case 9:case "end":return _context.stop();}}}, _callee);}))();


    } } };exports.default = _default;

/***/ }),
/* 96 */
/*!********************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/model/Search.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Search = void 0;var _http = __webpack_require__(/*! ../utils/http.js */ 71);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var



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
/* 97 */
/*!**************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue?vue&type=style&index=0&id=b78fd8da&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_b78fd8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.vue?vue&type=style&index=0&id=b78fd8da&scoped=true&lang=css& */ 98);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_b78fd8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_b78fd8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_b78fd8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_b78fd8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_b78fd8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 98 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/search.vue?vue&type=style&index=0&id=b78fd8da&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "search-input": {
    "height": "60rpx"
  },
  "cancel": {
    "color": "#FF0000"
  },
  "search-icon": {
    "height": "90rpx",
    "width": "90rpx"
  },
  "value": {
    "color": "#00ad19"
  }
}

/***/ }),
/* 99 */
/*!**************************************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue?vue&type=style&index=0&id=7b159708&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_style_index_0_id_7b159708_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./addFriend.nvue?vue&type=style&index=0&id=7b159708&scoped=true&lang=css&mpType=page */ 100);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_style_index_0_id_7b159708_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_style_index_0_id_7b159708_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_style_index_0_id_7b159708_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_style_index_0_id_7b159708_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addFriend_nvue_vue_type_style_index_0_id_7b159708_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 100 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/friend/addFriend/addFriend.nvue?vue&type=style&index=0&id=7b159708&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "top": {
    "height": "250rpx"
  },
  "fake-input": {
    "height": "70rpx"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy5qc29uPzVhM2UiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMuanNvbj8zYmVlIixudWxsLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVleC9kaXN0L3Z1ZXguZXNtLmpzPzJmNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ1bmktYXBwOi8vL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdnVlL2JhYmVsLXByZXNldC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzPzQ3OTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2dWUvYmFiZWwtcHJlc2V0LWFwcC9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzPzk1YTIiLCJ1bmktYXBwOi8vL3V0aWxzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvbWFpbi5qcz80ZDJkIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL0FwcC52dWU/NTQ2ZSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9BcHAudnVlPzM1MTkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/OGNjZCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL25hdmlnYXRpb24tYmFyLnZ1ZT9lZDU1Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1iYXIudnVlP2RjMmIiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/NzY5OCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWU/ZDBhMCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL2ljb24tYnV0dG9uLnZ1ZT83ZDQ2Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlPzMzNDgiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWU/NzNjMSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWU/ZjZiMCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL2ljb24tYnV0dG9uLnZ1ZT8yNTBjIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT9mZTY3Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT85M2IwIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT9kYjVlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT8yY2YyIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VpL2NQb3B1cC52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9jUG9wdXAudnVlPzM5ZDkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9jUG9wdXAudnVlPzgwNjkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/OWZhNSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL25hdmlnYXRpb24tYmFyLnZ1ZT81ODlkIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnZ1ZT9hNzUwIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnZ1ZT9hOWY0Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnZ1ZT84MzQ2Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnZ1ZT8xNzJmIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VpL2xpc3QtaXRlbS52dWUiLCJ1bmktYXBwOi8vL3V0aWxzL2h0dHAuanMiLCJ1bmktYXBwOi8vL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvbWFpbi5qcz8yYmZhIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kLm52dWU/OGQwNyIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9mcmllbmQvYWRkRnJpZW5kL2FkZEZyaWVuZC5udnVlP2U3MDkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMvZnJpZW5kL2FkZEZyaWVuZC9hZGRGcmllbmQubnZ1ZT8zYjEwIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kLm52dWU/OTAzNiIsInVuaS1hcHA6Ly8vcGFnZXMvZnJpZW5kL2FkZEZyaWVuZC9hZGRGcmllbmQubnZ1ZSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL3NlYXJjaC52dWU/OTUzMiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL3NlYXJjaC52dWU/YTg4NCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL3NlYXJjaC52dWU/YTI4ZCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL3NlYXJjaC52dWU/NDM5ZiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91aS9zZWFyY2gudnVlIiwidW5pLWFwcDovLy9tb2RlbC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9zZWFyY2gudnVlP2E0MjgiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9zZWFyY2gudnVlPzEzNTIiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMvZnJpZW5kL2FkZEZyaWVuZC9hZGRGcmllbmQubnZ1ZT8wYTY0Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kLm52dWU/MjFjNSJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwidHlwb2YiLCJzIiwicHJvdG90eXBlIiwic3Vic3RyaW5nIiwiaXNEZWJ1Z01vZGUiLCJfX2NoYW5uZWxJZF9fIiwibG9nIiwiX2xlbiIsImFyZ3VtZW50cyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiZm9ybWF0TG9nIiwic2hpZnQiLCJwb3AiLCJtc2dzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJ2VHlwZSIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwibXNnIiwibGFzdE1zZyIsImpvaW4iLCJpbmRleE9mIiwiYXBwbHlNaXhpbiIsIlZ1ZSIsIk51bWJlciIsInNwbGl0IiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2dWV4SW5pdCIsIl9pbml0IiwiaW5pdCIsImNvbmNhdCIsInN0b3JlIiwiJHN0b3JlIiwicGFyZW50IiwiZGV2dG9vbEhvb2siLCJ3aW5kb3ciLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiZGV2dG9vbFBsdWdpbiIsIl9kZXZ0b29sSG9vayIsImVtaXQiLCJvbiIsInRhcmdldFN0YXRlIiwicmVwbGFjZVN0YXRlIiwic3Vic2NyaWJlIiwibXV0YXRpb24iLCJzdGF0ZSIsImZvckVhY2hWYWx1ZSIsIm9iaiIsImZuIiwiaXNPYmplY3QiLCJpc1Byb21pc2UiLCJ2YWwiLCJ0aGVuIiwiYXNzZXJ0IiwiY29uZGl0aW9uIiwiRXJyb3IiLCJNb2R1bGUiLCJyYXdNb2R1bGUiLCJfY2hpbGRyZW4iLCJjcmVhdGUiLCJfcmF3TW9kdWxlIiwicmF3U3RhdGUiLCJwcm90b3R5cGVBY2Nlc3NvcnMkMSIsIm5hbWVzcGFjZWQiLCJjb25maWd1cmFibGUiLCJnZXQiLCJhZGRDaGlsZCIsIm1vZHVsZSIsInJlbW92ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJ1cGRhdGUiLCJhY3Rpb25zIiwibXV0YXRpb25zIiwiZ2V0dGVycyIsImZvckVhY2hDaGlsZCIsImZvckVhY2hHZXR0ZXIiLCJmb3JFYWNoQWN0aW9uIiwiZm9yRWFjaE11dGF0aW9uIiwiZGVmaW5lUHJvcGVydGllcyIsIk1vZHVsZUNvbGxlY3Rpb24iLCJyYXdSb290TW9kdWxlIiwicmVnaXN0ZXIiLCJyZWR1Y2UiLCJyb290IiwiZ2V0TmFtZXNwYWNlIiwibmFtZXNwYWNlIiwidXBkYXRlJDEiLCJ0aGlzJDEiLCJhc3NlcnRSYXdNb2R1bGUiLCJuZXdNb2R1bGUiLCJzbGljZSIsIm1vZHVsZXMiLCJyYXdDaGlsZE1vZHVsZSIsInVucmVnaXN0ZXIiLCJ0YXJnZXRNb2R1bGUiLCJ3YXJuIiwiZnVuY3Rpb25Bc3NlcnQiLCJleHBlY3RlZCIsIm9iamVjdEFzc2VydCIsImhhbmRsZXIiLCJhc3NlcnRUeXBlcyIsImFzc2VydE9wdGlvbnMiLCJtYWtlQXNzZXJ0aW9uTWVzc2FnZSIsImJ1ZiIsIlN0b3JlIiwiaW5zdGFsbCIsIlByb21pc2UiLCJwbHVnaW5zIiwic3RyaWN0IiwiX2NvbW1pdHRpbmciLCJfYWN0aW9ucyIsIl9hY3Rpb25TdWJzY3JpYmVycyIsIl9tdXRhdGlvbnMiLCJfd3JhcHBlZEdldHRlcnMiLCJfbW9kdWxlcyIsIl9tb2R1bGVzTmFtZXNwYWNlTWFwIiwiX3N1YnNjcmliZXJzIiwiX3dhdGNoZXJWTSIsInJlZiIsImRpc3BhdGNoIiwiY29tbWl0IiwiYm91bmREaXNwYXRjaCIsInBheWxvYWQiLCJib3VuZENvbW1pdCIsImluc3RhbGxNb2R1bGUiLCJyZXNldFN0b3JlVk0iLCJwbHVnaW4iLCJkZXZ0b29scyIsInByb3RvdHlwZUFjY2Vzc29ycyIsIl92bSIsIl9kYXRhIiwiJCRzdGF0ZSIsInNldCIsIl90eXBlIiwiX3BheWxvYWQiLCJfb3B0aW9ucyIsInVuaWZ5T2JqZWN0U3R5bGUiLCJlbnRyeSIsIl93aXRoQ29tbWl0IiwiY29tbWl0SXRlcmF0b3IiLCJzdWIiLCJzaWxlbnQiLCJhY3Rpb24iLCJhbGwiLCJnZW5lcmljU3Vic2NyaWJlIiwic3Vic2NyaWJlQWN0aW9uIiwid2F0Y2giLCJnZXR0ZXIiLCJjYiIsIiR3YXRjaCIsInJlZ2lzdGVyTW9kdWxlIiwiaXNBcnJheSIsInByZXNlcnZlU3RhdGUiLCJ1bnJlZ2lzdGVyTW9kdWxlIiwicGFyZW50U3RhdGUiLCJnZXROZXN0ZWRTdGF0ZSIsImRlbGV0ZSIsInJlc2V0U3RvcmUiLCJob3RVcGRhdGUiLCJuZXdPcHRpb25zIiwiY29tbWl0dGluZyIsInN1YnMiLCJzcGxpY2UiLCJob3QiLCJvbGRWbSIsIndyYXBwZWRHZXR0ZXJzIiwiY29tcHV0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJlbmFibGVTdHJpY3RNb2RlIiwibmV4dFRpY2siLCIkZGVzdHJveSIsInJvb3RTdGF0ZSIsImlzUm9vdCIsIm1vZHVsZU5hbWUiLCJsb2NhbCIsImNvbnRleHQiLCJtYWtlTG9jYWxDb250ZXh0IiwibmFtZXNwYWNlZFR5cGUiLCJyZWdpc3Rlck11dGF0aW9uIiwicmVnaXN0ZXJBY3Rpb24iLCJyZWdpc3RlckdldHRlciIsImNoaWxkIiwibm9OYW1lc3BhY2UiLCJtYWtlTG9jYWxHZXR0ZXJzIiwiZ2V0dGVyc1Byb3h5Iiwic3BsaXRQb3MiLCJsb2NhbFR5cGUiLCJ3cmFwcGVkTXV0YXRpb25IYW5kbGVyIiwid3JhcHBlZEFjdGlvbkhhbmRsZXIiLCJyZXMiLCJyb290R2V0dGVycyIsInJlc29sdmUiLCJjYXRjaCIsImVyciIsInJhd0dldHRlciIsIndyYXBwZWRHZXR0ZXIiLCJkZWVwIiwic3luYyIsIl9WdWUiLCJtYXBTdGF0ZSIsIm5vcm1hbGl6ZU5hbWVzcGFjZSIsInN0YXRlcyIsIm5vcm1hbGl6ZU1hcCIsIm1hcHBlZFN0YXRlIiwiZ2V0TW9kdWxlQnlOYW1lc3BhY2UiLCJ2dWV4IiwibWFwTXV0YXRpb25zIiwibWFwcGVkTXV0YXRpb24iLCJsZW4iLCJtYXBHZXR0ZXJzIiwibWFwcGVkR2V0dGVyIiwibWFwQWN0aW9ucyIsIm1hcHBlZEFjdGlvbiIsImNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzIiwiYmluZCIsImNoYXJBdCIsImhlbHBlciIsImluZGV4X2VzbSIsInVzZSIsIlZ1ZXgiLCJ1c2VyIiwidG9rZW4iLCJjaGF0IiwiU0VUX1RPS0VOIiwiU0VUX1VTRVIiLCJTRVRfQ0hBVCIsImxvZ2luIiwic2V0U3RvcmFnZSIsImxvZ291dCIsIm5hdmlnYXRlVG8iLCJleHBvcnRzIiwiT3AiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsInJlamVjdCIsInJlY29yZCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJkb25lIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwib2JqZWN0IiwicmV2ZXJzZSIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsInNraXBUZW1wUmVzZXQiLCJwcmV2Iiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiRnVuY3Rpb24iLCJwcm9taXNpYyIsImZ1bmMiLCJwYXJhbXMiLCJhc3NpZ24iLCJfdG9hc3QiLCJwb3NpdGlvbiIsImljb24iLCJzaG93VG9hc3QiLCJnZXRTdG9yYWdlIiwiZXJyb3JzIiwiSHR0cCIsImFwaUJhc2VVcmwiLCJoZWFkZXIiLCJzdGF0dXNDb2RlIiwic3RhcnRzV2l0aCIsInN0YXR1cyIsImVudiIsIndzVXJsIiwiU2VhcmNoIiwia2V5d29yZCIsImlkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVB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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1STtBQUN2STtBQUNrRTtBQUNMO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFPLENBQUMsdUZBQStFO0FBQ25J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Ozs7Ozs7Ozs7QUNkRjtBQUFBO0FBQUE7QUFBQTtBQUE0eEIsQ0FBZ0IsMHlCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FoekI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBMnlCLENBQWdCLHl6QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBL3pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InBhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDg1KTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOntcInBhZ2VzL3VzZXIvdXNlckRldGFpbC91c2VyRGV0YWlsXCI6e30sXCJwYWdlcy9zdGFydC9zdGFydFwiOnt9LFwicGFnZXMvbG9naW4vbG9naW5cIjp7fSxcInBhZ2VzL3RhYmJhci9pbmRleC9pbmRleFwiOnt9LFwicGFnZXMvZmluZC9tb21lbnQvbW9tZW50XCI6e30sXCJwYWdlcy9mcmllbmQvYXBwbHlGcmllbmQvYXBwbHlGcmllbmRcIjp7fSxcInBhZ2VzL2NvbXBhZ2UvdmlzaXRpbmcvdmlzaXRpbmdcIjp7XCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ0aXRsZU5WaWV3XCI6e1wiYnV0dG9uc1wiOlt7XCJ0eXBlXCI6XCJtZW51XCJ9XX19LFwicGFnZXMvZnJpZW5kL2FwcGx5TGlzdC9hcHBseUxpc3RcIjp7XCJ0aXRsZU5WaWV3XCI6e1wiYnV0dG9uc1wiOlt7XCJ0ZXh0XCI6XCLmlrDnmoTmnIvlj4tcIixcImZsb2F0XCI6XCJsZWZ0XCIsXCJmb250V2VpZ2h0XCI6XCJib2xkXCIsXCJmb250U2l6ZVwiOlwiMThweFwiLFwid2lkdGhcIjpcIjEwMHB4XCJ9LHtcInRleHRcIjpcIua3u+WKoOaci+WPi1wiLFwiZmxvYXRcIjpcInJpZ2h0XCIsXCJmb250U2l6ZVwiOlwiMThweFwiLFwid2lkdGhcIjpcIjEwMHB4XCJ9XX19LFwicGFnZXMvZnJpZW5kL2FkZEZyaWVuZC9hZGRGcmllbmRcIjp7fSxcInBhZ2VzL3RhYmJhci9teS9teVwiOnt9LFwicGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzXCI6e30sXCJwYWdlcy90YWJiYXIvZmluZC9maW5kXCI6e30sXCJwYWdlcy9jb21wYWdlL2NoYXQvY2hhdFwiOnt9fSxcImdsb2JhbFN0eWxlXCI6e319IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX182N0FBNjdCXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSBWdWU7IiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcbn1cblxuZnVuY3Rpb24gaXNEZWJ1Z01vZGUgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICByZXR1cm4gdHlwZW9mIF9fY2hhbm5lbElkX18gPT09ICdzdHJpbmcnICYmIF9fY2hhbm5lbElkX19cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyAodHlwZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICB2YXIgdHlwZSA9IGFyZ3Muc2hpZnQoKVxuICBpZiAoaXNEZWJ1Z01vZGUoKSkge1xuICAgIGFyZ3MucHVzaChhcmdzLnBvcCgpLnJlcGxhY2UoJ2F0ICcsICd1bmktYXBwOi8vLycpKVxuICAgIHJldHVybiBjb25zb2xlW3R5cGVdWydhcHBseSddKGNvbnNvbGUsIGFyZ3MpXG4gIH1cblxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IG9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IGFycmF5XScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxuXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSBTdHJpbmcodilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2XG4gIH0pXG4gIHZhciBtc2cgPSAnJ1xuXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcblxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xuICAgICAgbXNnICs9IGxhc3RNc2dcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IG1zZ3NbMF1cbiAgfVxuXG4gIGNvbnNvbGVbdHlwZV0obXNnKVxufVxuIiwiLyoqXG4gKiB2dWV4IHYzLjAuMVxuICogKGMpIDIwMTcgRXZhbiBZb3VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG52YXIgYXBwbHlNaXhpbiA9IGZ1bmN0aW9uIChWdWUpIHtcbiAgdmFyIHZlcnNpb24gPSBOdW1iZXIoVnVlLnZlcnNpb24uc3BsaXQoJy4nKVswXSk7XG5cbiAgaWYgKHZlcnNpb24gPj0gMikge1xuICAgIFZ1ZS5taXhpbih7IGJlZm9yZUNyZWF0ZTogdnVleEluaXQgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3ZlcnJpZGUgaW5pdCBhbmQgaW5qZWN0IHZ1ZXggaW5pdCBwcm9jZWR1cmVcbiAgICAvLyBmb3IgMS54IGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgIHZhciBfaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXQ7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAgICAgb3B0aW9ucy5pbml0ID0gb3B0aW9ucy5pbml0XG4gICAgICAgID8gW3Z1ZXhJbml0XS5jb25jYXQob3B0aW9ucy5pbml0KVxuICAgICAgICA6IHZ1ZXhJbml0O1xuICAgICAgX2luaXQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZ1ZXggaW5pdCBob29rLCBpbmplY3RlZCBpbnRvIGVhY2ggaW5zdGFuY2VzIGluaXQgaG9va3MgbGlzdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdnVleEluaXQgKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcbiAgICAvLyBzdG9yZSBpbmplY3Rpb25cbiAgICBpZiAob3B0aW9ucy5zdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSB0eXBlb2Ygb3B0aW9ucy5zdG9yZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9wdGlvbnMuc3RvcmUoKVxuICAgICAgICA6IG9wdGlvbnMuc3RvcmU7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC4kc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gb3B0aW9ucy5wYXJlbnQuJHN0b3JlO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRldnRvb2xIb29rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbmZ1bmN0aW9uIGRldnRvb2xQbHVnaW4gKHN0b3JlKSB7XG4gIGlmICghZGV2dG9vbEhvb2spIHsgcmV0dXJuIH1cblxuICBzdG9yZS5fZGV2dG9vbEhvb2sgPSBkZXZ0b29sSG9vaztcblxuICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4OmluaXQnLCBzdG9yZSk7XG5cbiAgZGV2dG9vbEhvb2sub24oJ3Z1ZXg6dHJhdmVsLXRvLXN0YXRlJywgZnVuY3Rpb24gKHRhcmdldFN0YXRlKSB7XG4gICAgc3RvcmUucmVwbGFjZVN0YXRlKHRhcmdldFN0YXRlKTtcbiAgfSk7XG5cbiAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uIChtdXRhdGlvbiwgc3RhdGUpIHtcbiAgICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4Om11dGF0aW9uJywgbXV0YXRpb24sIHN0YXRlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBpdGVtIHRoYXQgcGFzcyB0aGUgdGVzdFxuICogYnkgc2Vjb25kIGFyZ3VtZW50IGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybiB7Kn1cbiAqL1xuLyoqXG4gKiBEZWVwIGNvcHkgdGhlIGdpdmVuIG9iamVjdCBjb25zaWRlcmluZyBjaXJjdWxhciBzdHJ1Y3R1cmUuXG4gKiBUaGlzIGZ1bmN0aW9uIGNhY2hlcyBhbGwgbmVzdGVkIG9iamVjdHMgYW5kIGl0cyBjb3BpZXMuXG4gKiBJZiBpdCBkZXRlY3RzIGNpcmN1bGFyIHN0cnVjdHVyZSwgdXNlIGNhY2hlZCBjb3B5IHRvIGF2b2lkIGluZmluaXRlIGxvb3AuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gY2FjaGVcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuXG4vKipcbiAqIGZvckVhY2ggZm9yIG9iamVjdFxuICovXG5mdW5jdGlvbiBmb3JFYWNoVmFsdWUgKG9iaiwgZm4pIHtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKG9ialtrZXldLCBrZXkpOyB9KTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtc2cpIHtcbiAgaWYgKCFjb25kaXRpb24pIHsgdGhyb3cgbmV3IEVycm9yKChcIlt2dWV4XSBcIiArIG1zZykpIH1cbn1cblxudmFyIE1vZHVsZSA9IGZ1bmN0aW9uIE1vZHVsZSAocmF3TW9kdWxlLCBydW50aW1lKSB7XG4gIHRoaXMucnVudGltZSA9IHJ1bnRpbWU7XG4gIHRoaXMuX2NoaWxkcmVuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fcmF3TW9kdWxlID0gcmF3TW9kdWxlO1xuICB2YXIgcmF3U3RhdGUgPSByYXdNb2R1bGUuc3RhdGU7XG4gIHRoaXMuc3RhdGUgPSAodHlwZW9mIHJhd1N0YXRlID09PSAnZnVuY3Rpb24nID8gcmF3U3RhdGUoKSA6IHJhd1N0YXRlKSB8fCB7fTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgbmFtZXNwYWNlZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5uYW1lc3BhY2VkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWRcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiBhZGRDaGlsZCAoa2V5LCBtb2R1bGUpIHtcbiAgdGhpcy5fY2hpbGRyZW5ba2V5XSA9IG1vZHVsZTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiByZW1vdmVDaGlsZCAoa2V5KSB7XG4gIGRlbGV0ZSB0aGlzLl9jaGlsZHJlbltrZXldO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIGdldENoaWxkIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW2tleV1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChyYXdNb2R1bGUpIHtcbiAgdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWQgPSByYXdNb2R1bGUubmFtZXNwYWNlZDtcbiAgaWYgKHJhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMgPSByYXdNb2R1bGUuYWN0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMgPSByYXdNb2R1bGUubXV0YXRpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzID0gcmF3TW9kdWxlLmdldHRlcnM7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gZm9yRWFjaENoaWxkIChmbikge1xuICBmb3JFYWNoVmFsdWUodGhpcy5fY2hpbGRyZW4sIGZuKTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEdldHRlciA9IGZ1bmN0aW9uIGZvckVhY2hHZXR0ZXIgKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hBY3Rpb24gPSBmdW5jdGlvbiBmb3JFYWNoQWN0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoTXV0YXRpb24gPSBmdW5jdGlvbiBmb3JFYWNoTXV0YXRpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE1vZHVsZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyQxICk7XG5cbnZhciBNb2R1bGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gTW9kdWxlQ29sbGVjdGlvbiAocmF3Um9vdE1vZHVsZSkge1xuICAvLyByZWdpc3RlciByb290IG1vZHVsZSAoVnVleC5TdG9yZSBvcHRpb25zKVxuICB0aGlzLnJlZ2lzdGVyKFtdLCByYXdSb290TW9kdWxlLCBmYWxzZSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChtb2R1bGUsIGtleSkge1xuICAgIHJldHVybiBtb2R1bGUuZ2V0Q2hpbGQoa2V5KVxuICB9LCB0aGlzLnJvb3QpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXROYW1lc3BhY2UgPSBmdW5jdGlvbiBnZXROYW1lc3BhY2UgKHBhdGgpIHtcbiAgdmFyIG1vZHVsZSA9IHRoaXMucm9vdDtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGtleSkge1xuICAgIG1vZHVsZSA9IG1vZHVsZS5nZXRDaGlsZChrZXkpO1xuICAgIHJldHVybiBuYW1lc3BhY2UgKyAobW9kdWxlLm5hbWVzcGFjZWQgPyBrZXkgKyAnLycgOiAnJylcbiAgfSwgJycpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUkMSAocmF3Um9vdE1vZHVsZSkge1xuICB1cGRhdGUoW10sIHRoaXMucm9vdCwgcmF3Um9vdE1vZHVsZSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyIChwYXRoLCByYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIHJ1bnRpbWUgPT09IHZvaWQgMCApIHJ1bnRpbWUgPSB0cnVlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0UmF3TW9kdWxlKHBhdGgsIHJhd01vZHVsZSk7XG4gIH1cblxuICB2YXIgbmV3TW9kdWxlID0gbmV3IE1vZHVsZShyYXdNb2R1bGUsIHJ1bnRpbWUpO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnJvb3QgPSBuZXdNb2R1bGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBwYXJlbnQuYWRkQ2hpbGQocGF0aFtwYXRoLmxlbmd0aCAtIDFdLCBuZXdNb2R1bGUpO1xuICB9XG5cbiAgLy8gcmVnaXN0ZXIgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKHJhd01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHJhd01vZHVsZS5tb2R1bGVzLCBmdW5jdGlvbiAocmF3Q2hpbGRNb2R1bGUsIGtleSkge1xuICAgICAgdGhpcyQxLnJlZ2lzdGVyKHBhdGguY29uY2F0KGtleSksIHJhd0NoaWxkTW9kdWxlLCBydW50aW1lKTtcbiAgICB9KTtcbiAgfVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudW5yZWdpc3RlciA9IGZ1bmN0aW9uIHVucmVnaXN0ZXIgKHBhdGgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgaWYgKCFwYXJlbnQuZ2V0Q2hpbGQoa2V5KS5ydW50aW1lKSB7IHJldHVybiB9XG5cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGtleSk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGUgKHBhdGgsIHRhcmdldE1vZHVsZSwgbmV3TW9kdWxlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0UmF3TW9kdWxlKHBhdGgsIG5ld01vZHVsZSk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGFyZ2V0IG1vZHVsZVxuICB0YXJnZXRNb2R1bGUudXBkYXRlKG5ld01vZHVsZSk7XG5cbiAgLy8gdXBkYXRlIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChuZXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvciAodmFyIGtleSBpbiBuZXdNb2R1bGUubW9kdWxlcykge1xuICAgICAgaWYgKCF0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiW3Z1ZXhdIHRyeWluZyB0byBhZGQgYSBuZXcgbW9kdWxlICdcIiArIGtleSArIFwiJyBvbiBob3QgcmVsb2FkaW5nLCBcIiArXG4gICAgICAgICAgICAnbWFudWFsIHJlbG9hZCBpcyBuZWVkZWQnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShcbiAgICAgICAgcGF0aC5jb25jYXQoa2V5KSxcbiAgICAgICAgdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSksXG4gICAgICAgIG5ld01vZHVsZS5tb2R1bGVzW2tleV1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBmdW5jdGlvbkFzc2VydCA9IHtcbiAgYXNzZXJ0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgZXhwZWN0ZWQ6ICdmdW5jdGlvbidcbn07XG5cbnZhciBvYmplY3RBc3NlcnQgPSB7XG4gIGFzc2VydDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyk7IH0sXG4gIGV4cGVjdGVkOiAnZnVuY3Rpb24gb3Igb2JqZWN0IHdpdGggXCJoYW5kbGVyXCIgZnVuY3Rpb24nXG59O1xuXG52YXIgYXNzZXJ0VHlwZXMgPSB7XG4gIGdldHRlcnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBtdXRhdGlvbnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBhY3Rpb25zOiBvYmplY3RBc3NlcnRcbn07XG5cbmZ1bmN0aW9uIGFzc2VydFJhd01vZHVsZSAocGF0aCwgcmF3TW9kdWxlKSB7XG4gIE9iamVjdC5rZXlzKGFzc2VydFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIXJhd01vZHVsZVtrZXldKSB7IHJldHVybiB9XG5cbiAgICB2YXIgYXNzZXJ0T3B0aW9ucyA9IGFzc2VydFR5cGVzW2tleV07XG5cbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlW2tleV0sIGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgICAgYXNzZXJ0KFxuICAgICAgICBhc3NlcnRPcHRpb25zLmFzc2VydCh2YWx1ZSksXG4gICAgICAgIG1ha2VBc3NlcnRpb25NZXNzYWdlKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGFzc2VydE9wdGlvbnMuZXhwZWN0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUFzc2VydGlvbk1lc3NhZ2UgKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGV4cGVjdGVkKSB7XG4gIHZhciBidWYgPSBrZXkgKyBcIiBzaG91bGQgYmUgXCIgKyBleHBlY3RlZCArIFwiIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIi5cIiArIHR5cGUgKyBcIlxcXCJcIjtcbiAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgIGJ1ZiArPSBcIiBpbiBtb2R1bGUgXFxcIlwiICsgKHBhdGguam9pbignLicpKSArIFwiXFxcIlwiO1xuICB9XG4gIGJ1ZiArPSBcIiBpcyBcIiArIChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpICsgXCIuXCI7XG4gIHJldHVybiBidWZcbn1cblxudmFyIFZ1ZTsgLy8gYmluZCBvbiBpbnN0YWxsXG5cbnZhciBTdG9yZSA9IGZ1bmN0aW9uIFN0b3JlIChvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAvLyBBdXRvIGluc3RhbGwgaWYgaXQgaXMgbm90IGRvbmUgeWV0IGFuZCBgd2luZG93YCBoYXMgYFZ1ZWAuXG4gIC8vIFRvIGFsbG93IHVzZXJzIHRvIGF2b2lkIGF1dG8taW5zdGFsbGF0aW9uIGluIHNvbWUgY2FzZXMsXG4gIC8vIHRoaXMgY29kZSBzaG91bGQgYmUgcGxhY2VkIGhlcmUuIFNlZSAjNzMxXG4gIGlmICghVnVlICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICBpbnN0YWxsKHdpbmRvdy5WdWUpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoVnVlLCBcIm11c3QgY2FsbCBWdWUudXNlKFZ1ZXgpIGJlZm9yZSBjcmVhdGluZyBhIHN0b3JlIGluc3RhbmNlLlwiKTtcbiAgICBhc3NlcnQodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnLCBcInZ1ZXggcmVxdWlyZXMgYSBQcm9taXNlIHBvbHlmaWxsIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgYXNzZXJ0KHRoaXMgaW5zdGFuY2VvZiBTdG9yZSwgXCJTdG9yZSBtdXN0IGJlIGNhbGxlZCB3aXRoIHRoZSBuZXcgb3BlcmF0b3IuXCIpO1xuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnM7IGlmICggcGx1Z2lucyA9PT0gdm9pZCAwICkgcGx1Z2lucyA9IFtdO1xuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7IGlmICggc3RyaWN0ID09PSB2b2lkIDAgKSBzdHJpY3QgPSBmYWxzZTtcblxuICB2YXIgc3RhdGUgPSBvcHRpb25zLnN0YXRlOyBpZiAoIHN0YXRlID09PSB2b2lkIDAgKSBzdGF0ZSA9IHt9O1xuICBpZiAodHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSgpIHx8IHt9O1xuICB9XG5cbiAgLy8gc3RvcmUgaW50ZXJuYWwgc3RhdGVcbiAgdGhpcy5fY29tbWl0dGluZyA9IGZhbHNlO1xuICB0aGlzLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnMgPSBbXTtcbiAgdGhpcy5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9tb2R1bGVzID0gbmV3IE1vZHVsZUNvbGxlY3Rpb24ob3B0aW9ucyk7XG4gIHRoaXMuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl93YXRjaGVyVk0gPSBuZXcgVnVlKCk7XG5cbiAgLy8gYmluZCBjb21taXQgYW5kIGRpc3BhdGNoIHRvIHNlbGZcbiAgdmFyIHN0b3JlID0gdGhpcztcbiAgdmFyIHJlZiA9IHRoaXM7XG4gIHZhciBkaXNwYXRjaCA9IHJlZi5kaXNwYXRjaDtcbiAgdmFyIGNvbW1pdCA9IHJlZi5jb21taXQ7XG4gIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbiBib3VuZERpc3BhdGNoICh0eXBlLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoLmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQpXG4gIH07XG4gIHRoaXMuY29tbWl0ID0gZnVuY3Rpb24gYm91bmRDb21taXQgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tbWl0LmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpXG4gIH07XG5cbiAgLy8gc3RyaWN0IG1vZGVcbiAgdGhpcy5zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgLy8gaW5pdCByb290IG1vZHVsZS5cbiAgLy8gdGhpcyBhbHNvIHJlY3Vyc2l2ZWx5IHJlZ2lzdGVycyBhbGwgc3ViLW1vZHVsZXNcbiAgLy8gYW5kIGNvbGxlY3RzIGFsbCBtb2R1bGUgZ2V0dGVycyBpbnNpZGUgdGhpcy5fd3JhcHBlZEdldHRlcnNcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCBzdGF0ZSwgW10sIHRoaXMuX21vZHVsZXMucm9vdCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgdm0sIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgcmVhY3Rpdml0eVxuICAvLyAoYWxzbyByZWdpc3RlcnMgX3dyYXBwZWRHZXR0ZXJzIGFzIGNvbXB1dGVkIHByb3BlcnRpZXMpXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCBzdGF0ZSk7XG5cbiAgLy8gYXBwbHkgcGx1Z2luc1xuICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikgeyByZXR1cm4gcGx1Z2luKHRoaXMkMSk7IH0pO1xuXG4gIGlmIChWdWUuY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbFBsdWdpbih0aGlzKTtcbiAgfVxufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgc3RhdGU6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3ZtLl9kYXRhLiQkc3RhdGVcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5zdGF0ZS5zZXQgPSBmdW5jdGlvbiAodikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChmYWxzZSwgXCJVc2Ugc3RvcmUucmVwbGFjZVN0YXRlKCkgdG8gZXhwbGljaXQgcmVwbGFjZSBzdG9yZSBzdGF0ZS5cIik7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbiBjb21taXQgKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgY29tbWl0XG4gIHZhciByZWYgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcbiAgICB2YXIgb3B0aW9ucyA9IHJlZi5vcHRpb25zO1xuXG4gIHZhciBtdXRhdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9tdXRhdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiBjb21taXRJdGVyYXRvciAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihwYXlsb2FkKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRoaXMuX3N1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViKG11dGF0aW9uLCB0aGlzJDEuc3RhdGUpOyB9KTtcblxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5zaWxlbnRcbiAgKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbdnVleF0gbXV0YXRpb24gdHlwZTogXCIgKyB0eXBlICsgXCIuIFNpbGVudCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gXCIgK1xuICAgICAgJ1VzZSB0aGUgZmlsdGVyIGZ1bmN0aW9uYWxpdHkgaW4gdGhlIHZ1ZS1kZXZ0b29scydcbiAgICApO1xuICB9XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCAoX3R5cGUsIF9wYXlsb2FkKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGRpc3BhdGNoXG4gIHZhciByZWYgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuXG4gIHZhciBhY3Rpb24gPSB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQgfTtcbiAgdmFyIGVudHJ5ID0gdGhpcy5fYWN0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGFjdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1YihhY3Rpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIHJldHVybiBlbnRyeS5sZW5ndGggPiAxXG4gICAgPyBQcm9taXNlLmFsbChlbnRyeS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIocGF5bG9hZCk7IH0pKVxuICAgIDogZW50cnlbMF0ocGF5bG9hZClcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUgKGZuKSB7XG4gIHJldHVybiBnZW5lcmljU3Vic2NyaWJlKGZuLCB0aGlzLl9zdWJzY3JpYmVycylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmVBY3Rpb24gPSBmdW5jdGlvbiBzdWJzY3JpYmVBY3Rpb24gKGZuKSB7XG4gIHJldHVybiBnZW5lcmljU3Vic2NyaWJlKGZuLCB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycylcbn07XG5cblN0b3JlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIHdhdGNoIChnZXR0ZXIsIGNiLCBvcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIGdldHRlciA9PT0gJ2Z1bmN0aW9uJywgXCJzdG9yZS53YXRjaCBvbmx5IGFjY2VwdHMgYSBmdW5jdGlvbi5cIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX3dhdGNoZXJWTS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0dGVyKHRoaXMkMS5zdGF0ZSwgdGhpcyQxLmdldHRlcnMpOyB9LCBjYiwgb3B0aW9ucylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiByZXBsYWNlU3RhdGUgKHN0YXRlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLl92bS5fZGF0YS4kJHN0YXRlID0gc3RhdGU7XG4gIH0pO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGUgKHBhdGgsIHJhd01vZHVsZSwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gICAgYXNzZXJ0KHBhdGgubGVuZ3RoID4gMCwgJ2Nhbm5vdCByZWdpc3RlciB0aGUgcm9vdCBtb2R1bGUgYnkgdXNpbmcgcmVnaXN0ZXJNb2R1bGUuJyk7XG4gIH1cblxuICB0aGlzLl9tb2R1bGVzLnJlZ2lzdGVyKHBhdGgsIHJhd01vZHVsZSk7XG4gIGluc3RhbGxNb2R1bGUodGhpcywgdGhpcy5zdGF0ZSwgcGF0aCwgdGhpcy5fbW9kdWxlcy5nZXQocGF0aCksIG9wdGlvbnMucHJlc2VydmVTdGF0ZSk7XG4gIC8vIHJlc2V0IHN0b3JlIHRvIHVwZGF0ZSBnZXR0ZXJzLi4uXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCB0aGlzLnN0YXRlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS51bnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gdW5yZWdpc3Rlck1vZHVsZSAocGF0aCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gIH1cblxuICB0aGlzLl9tb2R1bGVzLnVucmVnaXN0ZXIocGF0aCk7XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHRoaXMkMS5zdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIFZ1ZS5kZWxldGUocGFyZW50U3RhdGUsIHBhdGhbcGF0aC5sZW5ndGggLSAxXSk7XG4gIH0pO1xuICByZXNldFN0b3JlKHRoaXMpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmhvdFVwZGF0ZSA9IGZ1bmN0aW9uIGhvdFVwZGF0ZSAobmV3T3B0aW9ucykge1xuICB0aGlzLl9tb2R1bGVzLnVwZGF0ZShuZXdPcHRpb25zKTtcbiAgcmVzZXRTdG9yZSh0aGlzLCB0cnVlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5fd2l0aENvbW1pdCA9IGZ1bmN0aW9uIF93aXRoQ29tbWl0IChmbikge1xuICB2YXIgY29tbWl0dGluZyA9IHRoaXMuX2NvbW1pdHRpbmc7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSB0cnVlO1xuICBmbigpO1xuICB0aGlzLl9jb21taXR0aW5nID0gY29tbWl0dGluZztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBTdG9yZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5mdW5jdGlvbiBnZW5lcmljU3Vic2NyaWJlIChmbiwgc3Vicykge1xuICBpZiAoc3Vicy5pbmRleE9mKGZuKSA8IDApIHtcbiAgICBzdWJzLnB1c2goZm4pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSBzdWJzLmluZGV4T2YoZm4pO1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHN1YnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlIChzdG9yZSwgaG90KSB7XG4gIHN0b3JlLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHN0YXRlID0gc3RvcmUuc3RhdGU7XG4gIC8vIGluaXQgYWxsIG1vZHVsZXNcbiAgaW5zdGFsbE1vZHVsZShzdG9yZSwgc3RhdGUsIFtdLCBzdG9yZS5fbW9kdWxlcy5yb290LCB0cnVlKTtcbiAgLy8gcmVzZXQgdm1cbiAgcmVzZXRTdG9yZVZNKHN0b3JlLCBzdGF0ZSwgaG90KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZVZNIChzdG9yZSwgc3RhdGUsIGhvdCkge1xuICB2YXIgb2xkVm0gPSBzdG9yZS5fdm07XG5cbiAgLy8gYmluZCBzdG9yZSBwdWJsaWMgZ2V0dGVyc1xuICBzdG9yZS5nZXR0ZXJzID0ge307XG4gIHZhciB3cmFwcGVkR2V0dGVycyA9IHN0b3JlLl93cmFwcGVkR2V0dGVycztcbiAgdmFyIGNvbXB1dGVkID0ge307XG4gIGZvckVhY2hWYWx1ZSh3cmFwcGVkR2V0dGVycywgZnVuY3Rpb24gKGZuLCBrZXkpIHtcbiAgICAvLyB1c2UgY29tcHV0ZWQgdG8gbGV2ZXJhZ2UgaXRzIGxhenktY2FjaGluZyBtZWNoYW5pc21cbiAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4oc3RvcmUpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdG9yZS5nZXR0ZXJzLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuX3ZtW2tleV07IH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlIC8vIGZvciBsb2NhbCBnZXR0ZXJzXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHVzZSBhIFZ1ZSBpbnN0YW5jZSB0byBzdG9yZSB0aGUgc3RhdGUgdHJlZVxuICAvLyBzdXBwcmVzcyB3YXJuaW5ncyBqdXN0IGluIGNhc2UgdGhlIHVzZXIgaGFzIGFkZGVkXG4gIC8vIHNvbWUgZnVua3kgZ2xvYmFsIG1peGluc1xuICB2YXIgc2lsZW50ID0gVnVlLmNvbmZpZy5zaWxlbnQ7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gdHJ1ZTtcbiAgc3RvcmUuX3ZtID0gbmV3IFZ1ZSh7XG4gICAgZGF0YToge1xuICAgICAgJCRzdGF0ZTogc3RhdGVcbiAgICB9LFxuICAgIGNvbXB1dGVkOiBjb21wdXRlZFxuICB9KTtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSBzaWxlbnQ7XG5cbiAgLy8gZW5hYmxlIHN0cmljdCBtb2RlIGZvciBuZXcgdm1cbiAgaWYgKHN0b3JlLnN0cmljdCkge1xuICAgIGVuYWJsZVN0cmljdE1vZGUoc3RvcmUpO1xuICB9XG5cbiAgaWYgKG9sZFZtKSB7XG4gICAgaWYgKGhvdCkge1xuICAgICAgLy8gZGlzcGF0Y2ggY2hhbmdlcyBpbiBhbGwgc3Vic2NyaWJlZCB3YXRjaGVyc1xuICAgICAgLy8gdG8gZm9yY2UgZ2V0dGVyIHJlLWV2YWx1YXRpb24gZm9yIGhvdCByZWxvYWRpbmcuXG4gICAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9sZFZtLl9kYXRhLiQkc3RhdGUgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJldHVybiBvbGRWbS4kZGVzdHJveSgpOyB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsTW9kdWxlIChzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLCBtb2R1bGUsIGhvdCkge1xuICB2YXIgaXNSb290ID0gIXBhdGgubGVuZ3RoO1xuICB2YXIgbmFtZXNwYWNlID0gc3RvcmUuX21vZHVsZXMuZ2V0TmFtZXNwYWNlKHBhdGgpO1xuXG4gIC8vIHJlZ2lzdGVyIGluIG5hbWVzcGFjZSBtYXBcbiAgaWYgKG1vZHVsZS5uYW1lc3BhY2VkKSB7XG4gICAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXSA9IG1vZHVsZTtcbiAgfVxuXG4gIC8vIHNldCBzdGF0ZVxuICBpZiAoIWlzUm9vdCAmJiAhaG90KSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUocm9vdFN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgdmFyIG1vZHVsZU5hbWUgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgc3RvcmUuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgICAgVnVlLnNldChwYXJlbnRTdGF0ZSwgbW9kdWxlTmFtZSwgbW9kdWxlLnN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBsb2NhbCA9IG1vZHVsZS5jb250ZXh0ID0gbWFrZUxvY2FsQ29udGV4dChzdG9yZSwgbmFtZXNwYWNlLCBwYXRoKTtcblxuICBtb2R1bGUuZm9yRWFjaE11dGF0aW9uKGZ1bmN0aW9uIChtdXRhdGlvbiwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyTXV0YXRpb24oc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBtdXRhdGlvbiwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaEFjdGlvbihmdW5jdGlvbiAoYWN0aW9uLCBrZXkpIHtcbiAgICB2YXIgdHlwZSA9IGFjdGlvbi5yb290ID8ga2V5IDogbmFtZXNwYWNlICsga2V5O1xuICAgIHZhciBoYW5kbGVyID0gYWN0aW9uLmhhbmRsZXIgfHwgYWN0aW9uO1xuICAgIHJlZ2lzdGVyQWN0aW9uKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoR2V0dGVyKGZ1bmN0aW9uIChnZXR0ZXIsIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3RlckdldHRlcihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIGdldHRlciwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjaGlsZCwga2V5KSB7XG4gICAgaW5zdGFsbE1vZHVsZShzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLmNvbmNhdChrZXkpLCBjaGlsZCwgaG90KTtcbiAgfSk7XG59XG5cbi8qKlxuICogbWFrZSBsb2NhbGl6ZWQgZGlzcGF0Y2gsIGNvbW1pdCwgZ2V0dGVycyBhbmQgc3RhdGVcbiAqIGlmIHRoZXJlIGlzIG5vIG5hbWVzcGFjZSwganVzdCB1c2Ugcm9vdCBvbmVzXG4gKi9cbmZ1bmN0aW9uIG1ha2VMb2NhbENvbnRleHQgKHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpIHtcbiAgdmFyIG5vTmFtZXNwYWNlID0gbmFtZXNwYWNlID09PSAnJztcblxuICB2YXIgbG9jYWwgPSB7XG4gICAgZGlzcGF0Y2g6IG5vTmFtZXNwYWNlID8gc3RvcmUuZGlzcGF0Y2ggOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXN0b3JlLl9hY3Rpb25zW3R5cGVdKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBsb2NhbCBhY3Rpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHR5cGUsIHBheWxvYWQpXG4gICAgfSxcblxuICAgIGNvbW1pdDogbm9OYW1lc3BhY2UgPyBzdG9yZS5jb21taXQgOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXN0b3JlLl9tdXRhdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIG11dGF0aW9uIHR5cGU6IFwiICsgKGFyZ3MudHlwZSkgKyBcIiwgZ2xvYmFsIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0b3JlLmNvbW1pdCh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gZ2V0dGVycyBhbmQgc3RhdGUgb2JqZWN0IG11c3QgYmUgZ290dGVuIGxhemlseVxuICAvLyBiZWNhdXNlIHRoZXkgd2lsbCBiZSBjaGFuZ2VkIGJ5IHZtIHVwZGF0ZVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsb2NhbCwge1xuICAgIGdldHRlcnM6IHtcbiAgICAgIGdldDogbm9OYW1lc3BhY2VcbiAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFrZUxvY2FsR2V0dGVycyhzdG9yZSwgbmFtZXNwYWNlKTsgfVxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0TmVzdGVkU3RhdGUoc3RvcmUuc3RhdGUsIHBhdGgpOyB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9jYWxcbn1cblxuZnVuY3Rpb24gbWFrZUxvY2FsR2V0dGVycyAoc3RvcmUsIG5hbWVzcGFjZSkge1xuICB2YXIgZ2V0dGVyc1Byb3h5ID0ge307XG5cbiAgdmFyIHNwbGl0UG9zID0gbmFtZXNwYWNlLmxlbmd0aDtcbiAgT2JqZWN0LmtleXMoc3RvcmUuZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIC8vIHNraXAgaWYgdGhlIHRhcmdldCBnZXR0ZXIgaXMgbm90IG1hdGNoIHRoaXMgbmFtZXNwYWNlXG4gICAgaWYgKHR5cGUuc2xpY2UoMCwgc3BsaXRQb3MpICE9PSBuYW1lc3BhY2UpIHsgcmV0dXJuIH1cblxuICAgIC8vIGV4dHJhY3QgbG9jYWwgZ2V0dGVyIHR5cGVcbiAgICB2YXIgbG9jYWxUeXBlID0gdHlwZS5zbGljZShzcGxpdFBvcyk7XG5cbiAgICAvLyBBZGQgYSBwb3J0IHRvIHRoZSBnZXR0ZXJzIHByb3h5LlxuICAgIC8vIERlZmluZSBhcyBnZXR0ZXIgcHJvcGVydHkgYmVjYXVzZVxuICAgIC8vIHdlIGRvIG5vdCB3YW50IHRvIGV2YWx1YXRlIHRoZSBnZXR0ZXJzIGluIHRoaXMgdGltZS5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2V0dGVyc1Byb3h5LCBsb2NhbFR5cGUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuZ2V0dGVyc1t0eXBlXTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGdldHRlcnNQcm94eVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck11dGF0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX211dGF0aW9uc1t0eXBlXSB8fCAoc3RvcmUuX211dGF0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkTXV0YXRpb25IYW5kbGVyIChwYXlsb2FkKSB7XG4gICAgaGFuZGxlci5jYWxsKHN0b3JlLCBsb2NhbC5zdGF0ZSwgcGF5bG9hZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckFjdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKSB7XG4gIHZhciBlbnRyeSA9IHN0b3JlLl9hY3Rpb25zW3R5cGVdIHx8IChzdG9yZS5fYWN0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkQWN0aW9uSGFuZGxlciAocGF5bG9hZCwgY2IpIHtcbiAgICB2YXIgcmVzID0gaGFuZGxlci5jYWxsKHN0b3JlLCB7XG4gICAgICBkaXNwYXRjaDogbG9jYWwuZGlzcGF0Y2gsXG4gICAgICBjb21taXQ6IGxvY2FsLmNvbW1pdCxcbiAgICAgIGdldHRlcnM6IGxvY2FsLmdldHRlcnMsXG4gICAgICBzdGF0ZTogbG9jYWwuc3RhdGUsXG4gICAgICByb290R2V0dGVyczogc3RvcmUuZ2V0dGVycyxcbiAgICAgIHJvb3RTdGF0ZTogc3RvcmUuc3RhdGVcbiAgICB9LCBwYXlsb2FkLCBjYik7XG4gICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xuICAgICAgcmVzID0gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfVxuICAgIGlmIChzdG9yZS5fZGV2dG9vbEhvb2spIHtcbiAgICAgIHJldHVybiByZXMuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBzdG9yZS5fZGV2dG9vbEhvb2suZW1pdCgndnVleDplcnJvcicsIGVycik7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyR2V0dGVyIChzdG9yZSwgdHlwZSwgcmF3R2V0dGVyLCBsb2NhbCkge1xuICBpZiAoc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIGR1cGxpY2F0ZSBnZXR0ZXIga2V5OiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdID0gZnVuY3Rpb24gd3JhcHBlZEdldHRlciAoc3RvcmUpIHtcbiAgICByZXR1cm4gcmF3R2V0dGVyKFxuICAgICAgbG9jYWwuc3RhdGUsIC8vIGxvY2FsIHN0YXRlXG4gICAgICBsb2NhbC5nZXR0ZXJzLCAvLyBsb2NhbCBnZXR0ZXJzXG4gICAgICBzdG9yZS5zdGF0ZSwgLy8gcm9vdCBzdGF0ZVxuICAgICAgc3RvcmUuZ2V0dGVycyAvLyByb290IGdldHRlcnNcbiAgICApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVN0cmljdE1vZGUgKHN0b3JlKSB7XG4gIHN0b3JlLl92bS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YS4kJHN0YXRlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0KHN0b3JlLl9jb21taXR0aW5nLCBcIkRvIG5vdCBtdXRhdGUgdnVleCBzdG9yZSBzdGF0ZSBvdXRzaWRlIG11dGF0aW9uIGhhbmRsZXJzLlwiKTtcbiAgICB9XG4gIH0sIHsgZGVlcDogdHJ1ZSwgc3luYzogdHJ1ZSB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TmVzdGVkU3RhdGUgKHN0YXRlLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLmxlbmd0aFxuICAgID8gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKHN0YXRlLCBrZXkpIHsgcmV0dXJuIHN0YXRlW2tleV07IH0sIHN0YXRlKVxuICAgIDogc3RhdGVcbn1cblxuZnVuY3Rpb24gdW5pZnlPYmplY3RTdHlsZSAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICBpZiAoaXNPYmplY3QodHlwZSkgJiYgdHlwZS50eXBlKSB7XG4gICAgb3B0aW9ucyA9IHBheWxvYWQ7XG4gICAgcGF5bG9hZCA9IHR5cGU7XG4gICAgdHlwZSA9IHR5cGUudHlwZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJywgKFwiRXhwZWN0cyBzdHJpbmcgYXMgdGhlIHR5cGUsIGJ1dCBmb3VuZCBcIiArICh0eXBlb2YgdHlwZSkgKyBcIi5cIikpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCwgb3B0aW9uczogb3B0aW9ucyB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGwgKF9WdWUpIHtcbiAgaWYgKFZ1ZSAmJiBfVnVlID09PSBWdWUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1t2dWV4XSBhbHJlYWR5IGluc3RhbGxlZC4gVnVlLnVzZShWdWV4KSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBWdWUgPSBfVnVlO1xuICBhcHBseU1peGluKFZ1ZSk7XG59XG5cbnZhciBtYXBTdGF0ZSA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBzdGF0ZXMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkU3RhdGUgKCkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy4kc3RvcmUuc3RhdGU7XG4gICAgICB2YXIgZ2V0dGVycyA9IHRoaXMuJHN0b3JlLmdldHRlcnM7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcFN0YXRlJywgbmFtZXNwYWNlKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzdGF0ZSA9IG1vZHVsZS5jb250ZXh0LnN0YXRlO1xuICAgICAgICBnZXR0ZXJzID0gbW9kdWxlLmNvbnRleHQuZ2V0dGVycztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmNhbGwodGhpcywgc3RhdGUsIGdldHRlcnMpXG4gICAgICAgIDogc3RhdGVbdmFsXVxuICAgIH07XG4gICAgLy8gbWFyayB2dWV4IGdldHRlciBmb3IgZGV2dG9vbHNcbiAgICByZXNba2V5XS52dWV4ID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwTXV0YXRpb25zID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIG11dGF0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChtdXRhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRNdXRhdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgdmFyIGNvbW1pdCA9IHRoaXMuJHN0b3JlLmNvbW1pdDtcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwTXV0YXRpb25zJywgbmFtZXNwYWNlKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb21taXQgPSBtb2R1bGUuY29udGV4dC5jb21taXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbC5hcHBseSh0aGlzLCBbY29tbWl0XS5jb25jYXQoYXJncykpXG4gICAgICAgIDogY29tbWl0LmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwR2V0dGVycyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBnZXR0ZXJzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKGdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgdmFsID0gbmFtZXNwYWNlICsgdmFsO1xuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkR2V0dGVyICgpIHtcbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwR2V0dGVycycsIG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhKHZhbCBpbiB0aGlzLiRzdG9yZS5nZXR0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGdldHRlcjogXCIgKyB2YWwpKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1t2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBBY3Rpb25zID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGFjdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEFjdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgdmFyIGRpc3BhdGNoID0gdGhpcy4kc3RvcmUuZGlzcGF0Y2g7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcEFjdGlvbnMnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoID0gbW9kdWxlLmNvbnRleHQuZGlzcGF0Y2g7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbC5hcHBseSh0aGlzLCBbZGlzcGF0Y2hdLmNvbmNhdChhcmdzKSlcbiAgICAgICAgOiBkaXNwYXRjaC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkgeyByZXR1cm4gKHtcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycy5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcE11dGF0aW9uczogbWFwTXV0YXRpb25zLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucy5iaW5kKG51bGwsIG5hbWVzcGFjZSlcbn0pOyB9O1xuXG5mdW5jdGlvbiBub3JtYWxpemVNYXAgKG1hcCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShtYXApXG4gICAgPyBtYXAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IGtleSB9KTsgfSlcbiAgICA6IE9iamVjdC5rZXlzKG1hcCkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IG1hcFtrZXldIH0pOyB9KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lc3BhY2UgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobmFtZXNwYWNlLCBtYXApIHtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG1hcCA9IG5hbWVzcGFjZTtcbiAgICAgIG5hbWVzcGFjZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlLmNoYXJBdChuYW1lc3BhY2UubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgbmFtZXNwYWNlICs9ICcvJztcbiAgICB9XG4gICAgcmV0dXJuIGZuKG5hbWVzcGFjZSwgbWFwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZUJ5TmFtZXNwYWNlIChzdG9yZSwgaGVscGVyLCBuYW1lc3BhY2UpIHtcbiAgdmFyIG1vZHVsZSA9IHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFtb2R1bGUpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBtb2R1bGUgbmFtZXNwYWNlIG5vdCBmb3VuZCBpbiBcIiArIGhlbHBlciArIFwiKCk6IFwiICsgbmFtZXNwYWNlKSk7XG4gIH1cbiAgcmV0dXJuIG1vZHVsZVxufVxuXG52YXIgaW5kZXhfZXNtID0ge1xuICBTdG9yZTogU3RvcmUsXG4gIGluc3RhbGw6IGluc3RhbGwsXG4gIHZlcnNpb246ICczLjAuMScsXG4gIG1hcFN0YXRlOiBtYXBTdGF0ZSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMsXG4gIG1hcEdldHRlcnM6IG1hcEdldHRlcnMsXG4gIG1hcEFjdGlvbnM6IG1hcEFjdGlvbnMsXG4gIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzOiBjcmVhdGVOYW1lc3BhY2VkSGVscGVyc1xufTtcblxuZXhwb3J0IHsgU3RvcmUsIGluc3RhbGwsIG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMsIG1hcEdldHRlcnMsIG1hcEFjdGlvbnMsIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzIH07XG5leHBvcnQgZGVmYXVsdCBpbmRleF9lc207XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCB7XHJcblx0Z2V0U3RvcmFnZVxyXG59IGZyb20gXCIuLi91dGlscy91dGlsLmpzXCJcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbi8vIGltcG9ydCB1c2VyTW9kdWxlIGZyb20gJ0Avc3RvcmUvbW9kdWxlcy91c2VyTW9kdWxlLmpzJztcclxuY29uc3Qgc3RhdGUgPSB7XHJcblx0dXNlcjoge30sXHJcblx0dG9rZW46IFwiXCIsXHJcblx0Y2hhdDogbnVsbCxcclxufVxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG5cdC8vIOWtmOWCqHRva2VuXHJcblx0U0VUX1RPS0VOOiAoc3RhdGUsIHRva2VuKSA9PiB7XHJcblx0XHRzdGF0ZS50b2tlbiA9IHRva2VuIHx8ICcnXHJcblx0fSxcclxuXHRTRVRfVVNFUjogKHN0YXRlLCB1c2VyKSA9PiB7XHJcblx0XHRzdGF0ZS51c2VyID0gdXNlciB8fCB7fVxyXG5cdH0sXHJcblx0U0VUX0NIQVQ6IChzdGF0ZSwgY2hhdCkgPT4ge1xyXG5cdFx0c3RhdGUuY2hhdCA9IGNoYXQgfHwgbnVsbFxyXG5cdH1cclxufVxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG5cdC8vIGFwcCBpbml0IFxyXG5cdGFzeW5jIGluaXQoe1xyXG5cdFx0Y29tbWl0XHJcblx0fSwgZGF0YSkge1xyXG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFN0b3JhZ2UoJ3VzZXInKVxyXG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCBnZXRTdG9yYWdlKCd0b2tlbicpXHJcblx0XHRjb21taXQoJ1NFVF9UT0tFTicsIHRva2VuKVxyXG5cdFx0Y29tbWl0KCdTRVRfVVNFUicsIHVzZXIpXHJcblx0fSxcclxuXHRcclxuXHRcclxuXHRsb2dpbjogKHtcclxuXHRcdGNvbW1pdFxyXG5cdH0sIHVzZXIpID0+IHtcclxuXHRcdGNvbW1pdCgnU0VUX1RPS0VOJywgdXNlci50b2tlbilcclxuXHRcdGNvbW1pdCgnU0VUX1VTRVInLCB1c2VyKVxyXG5cclxuXHRcdC8vIOWtmOWCqOWIsOacrOWcsFxyXG5cdFx0dW5pLnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6IFwidXNlclwiLFxyXG5cdFx0XHRkYXRhOiB1c2VyXHJcblx0XHR9KVxyXG5cdFx0dW5pLnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6IFwidG9rZW5cIixcclxuXHRcdFx0ZGF0YTogdXNlci50b2tlblxyXG5cdFx0fSlcclxuXHJcblx0XHQvLyDov57mjqVzb2NrZXRcclxuXHRcdC8vIGxldCBjaGF0ID0gbmV3IENoYXQoe1xyXG5cdFx0Ly8gXHR1c2VyLFxyXG5cdFx0Ly8gXHR1cmw6IGNvbmZpZy53c1VybFxyXG5cdFx0Ly8gfSlcclxuXHRcdC8vIGNvbW1pdCgnU0VUX0NIQVQnLCBjaGF0KVxyXG5cdH0sXHJcblx0bG9nb3V0OiAoe1xyXG5cdFx0Y29tbWl0LFxyXG5cdFx0c3RhdGVcclxuXHR9KSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvdXRcIilcclxuXHRcdGNvbW1pdCgnU0VUX1RPS0VOJywgXCJcIilcclxuXHRcdGNvbW1pdCgnU0VUX1VTRVInLCBcIlwiKVxyXG5cclxuXHRcdC8vIOa4hemZpOe8k+WtmFxyXG5cdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcblx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VzZXInKVxyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nXHJcblx0XHR9KVxyXG5cdFx0Ly8g5YWz6Zetc29ja2V06L+e5o6lXHJcblx0XHQvLyBzdGF0ZS5jaGF0LmNsb3NlKClcclxuXHR9LFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG5cdHN0cmljdDogdHJ1ZSwgLy/lvIDlkK/kuKXmoLzmqKHlvI/lkI7vvIzlj6rog73pgJrov4dtdXRhdGlvbuadpeaUueWPmOeKtuaAge+8iOS4jeaUr+aMgeW8guatpe+8ieWQpuWImeS8muaKpemUmVxyXG5cdHN0YXRlLFxyXG5cdG11dGF0aW9ucyxcclxuXHRhY3Rpb25zXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJjb25zdCBwcm9taXNpYyA9IGZ1bmN0aW9uKGZ1bmMpIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IGFyZ3MgPSBPYmplY3QuYXNzaWduKHBhcmFtcywge1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRmdW5jKGFyZ3MpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxufVxyXG5cclxuLy8gc2hvd1RvYXN0XHJcbmNvbnN0IF90b2FzdCA9IGZ1bmN0aW9uKHRpdGxlLCBwb3NpdGlvbiwgaWNvbikge1xyXG5cdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0dGl0bGU6IHRpdGxlLFxyXG5cdFx0aWNvbjogaWNvbiB8fCBcIm5vbmVcIixcclxuXHRcdHBvc2l0aW9uOiBwb3NpdGlvbiB8fCBcInRvcFwiXHJcblx0fSlcclxufVxyXG5cclxuXHJcbmNvbnN0IGdldFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5nZXRTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycm9yKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0X3RvYXN0LFxyXG5cdGdldFN0b3JhZ2VcclxufTtcclxuIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaWNvbmZvbnRcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCJcbiAgfSxcbiAgXCJmbGV4LTFcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiZmxleC1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZsZXgtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImZsZXgtY29sdW1uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImp1c3RpZnktYmV0d2VlblwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWFyb3VuZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiXG4gIH0sXG4gIFwiYWxpZ24tY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZsZXgtd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInctMTAwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sLTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtbC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWwtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1sLTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtbC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXItMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1iLTFcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1iLTJcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1iLTNcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1iLTRcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1iLTVcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm14LTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXgtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm14LTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXktMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm15LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteS0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXktNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm15LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwbC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBsLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGwtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwbC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBsLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHItMVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHItMlwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHItM1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHItNFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHItNVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHktMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHktMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHktM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHktNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHktNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwiZm9udC0yMFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJmb250LTI1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVycHhcIlxuICB9LFxuICBcImZvbnQtMzBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiZm9udC0zNVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM1cnB4XCJcbiAgfSxcbiAgXCJmb250LTQwXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInRleHQtYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwidGV4dC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInRleHQtY2VudGVyXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidGV4dC1sZWZ0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIlxuICB9LFxuICBcInRleHQtcmlnaHRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIlxuICB9LFxuICBcInRleHQtZWxsaXBzaXNcIjoge1xuICAgIFwibGluZXNcIjogMVxuICB9LFxuICBcImJnLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYmctaG92ZXItcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6aG92ZXJcIjogXCIjMDA2MmNjXCJcbiAgfSxcbiAgXCJiZy1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYmctaG92ZXItc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiM1NDViNjJcIlxuICB9LFxuICBcImJnLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYmctaG92ZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMWU3ZTM0XCJcbiAgfSxcbiAgXCJiZy1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImJnLWhvdmVyLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzExN2E4YlwiXG4gIH0sXG4gIFwiYmctd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkMzllMDBcIlxuICB9LFxuICBcImJnLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2JkMjEzMFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctaG92ZXItbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RhZTBlNVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZDIxMjRcIlxuICB9LFxuICBcImJnLXdoaXRlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcImJnLXRyYW5zcGFyZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjEpXCJcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMSlcIlxuICB9LFxuICBcImZvbnQteHNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cnB4XCJcbiAgfSxcbiAgXCJmb250LW1kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTZycHhcIlxuICB9LFxuICBcImZvbnQtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOHJweFwiXG4gIH0sXG4gIFwidGV4dC1tYWluLWNvbG9yXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwxKVwiXG4gIH0sXG4gIFwidGV4dC1zZWMtY29sb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuNilcIlxuICB9LFxuICBcInRleHQtdGhyZWUtY29sb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuNClcIlxuICB9LFxuICBcInRleHQtYmx1ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1MjYwOTFcIlxuICB9LFxuICBcImJnLWRhcmstY29sb3JcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjIpXCJcbiAgfSxcbiAgXCJiZy1jb2xvci0xXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjQ0LDI0NCwyNDQsMSlcIlxuICB9LFxuICBcImJnLWNvbG9yLTJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNDMsMjQ0LDI0NiwxKVwiXG4gIH0sXG4gIFwiYmctbWFpblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWRlZGVkXCJcbiAgfSxcbiAgXCJ5ZWxsb3dcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNTUsMjI4LDQ5LDEpXCJcbiAgfSxcbiAgXCJyZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNTUsOTMsOTEsMSlcIlxuICB9LFxuICBcImJsdWVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg4NywxNTMsMjU1LDEpXCJcbiAgfSxcbiAgXCJyb3VuZC1zbVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJyb3VuZC1tZFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicm91bmQtbGdcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBycHhcIlxuICB9LFxuICBcImNpcmNsZVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTBcbiAgfSxcbiAgXCJib3JkZXItY29sb3JcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMSlcIlxuICB9LFxuICBcInRlbXAtYmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjMpXCJcbiAgfSxcbiAgXCJ0ZW1wLWJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGRjAwMDBcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMlwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYWJhZGE3NiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2FiYWRhNzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNhYmFkYTc2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiY2FiYWRhNzZcIixcbiAgXCIzZjc1ODIxMlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJIOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1iYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNhYmFkYTc2JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcIm5hdmlnYXRpb24tYmFyXCIsIFwiXCIsIFwiZmxleFwiLCBcInN0aWNreVwiXSxcbiAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmJnYyB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdHlsZTogXCJoZWlnaHQ6XCIgKyBfdm0uc3RhdHVzQmFySGVpZ2h0ICsgXCJweFwiIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgIFwidy0xMDBcIixcbiAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwianVzdGlmeS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgXCJmbGV4LXJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiOTBycHhcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImZsZXgtcm93XCIsIFwibWwtM1wiXSB9LCBbXG4gICAgICAgICAgICBfdm0udGl0bGVcbiAgICAgICAgICAgICAgPyBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0ZXh0LWJvbGRcIiwgXCJmb250LTM1XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLm51bWJlclxuICAgICAgICAgICAgICA/IF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtMzVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5udW1iZXIpICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5jdXN0b21cbiAgICAgICAgICAgID8gX2MoXCJ2aWV3XCIsIHt9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG4gICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZsZXgtcm93XCJdIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpY29uLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXFxcXHVlNjMwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2tJY29uOiBfdm0uc2VhcmNoIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpY29uLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXFxcXHVlNjI5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2tJY29uOiBfdm0uYWRkIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImNQb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcInBvcHVwXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJyaWdodCB0b3BcIixcbiAgICAgICAgICAgIHdpZHRoOiAyNzAsXG4gICAgICAgICAgICBoZWlnaHQ6IF92bS5oZWlnaHRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicG9wdXAtY29udGVudFwiLCBcImZsZXgtMVwiLCBcInJvdW5kLW1kXCJdIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLm1lbnVzLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcInBvcHVwLWxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsLTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LXJvd1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jbGlja01lbnUoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGV4dC13aGl0ZVwiLCBcImljb25mb250XCIsIFwibXItMlwiLCBcImZvbnQtMzBcIl1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5pY29uKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGV4dC13aGl0ZVwiLCBcImZvbnQtMzBcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udGV4dCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDwhLS0g5a+86Iiq5qCPIC0tPlxyXG5cdDx2aWV3IGNsYXNzPVwibmF2aWdhdGlvbi1iYXIgIGZsZXggc3RpY2t5XCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGJnYyB9XCI+XHJcblx0XHQ8IS0tIOeKtuaAgeagjyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiXCIgOnN0eWxlPVwiJ2hlaWdodDonICsgc3RhdHVzQmFySGVpZ2h0ICsgJ3B4J1wiPjwvdmlldz5cclxuXHRcdDwhLS0g5a+86IiqIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ3LTEwMCBmbGV4ICBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGZsZXgtcm93XCIgc3R5bGU9XCJoZWlnaHQ6IDkwcnB4O1wiPlxyXG5cdFx0XHQ8IS0tIGxlZnQgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBtbC0zIFwiPlxyXG5cdFx0XHRcdDwhLS0g5qCH6aKYIC0tPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1ib2xkIGZvbnQtMzVcIiB2LWlmPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtMzVcIiB2LWlmPVwibnVtYmVyXCI+KHt7IG51bWJlciB9fSk8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSByaWdodCAtLT5cclxuXHRcdFx0PCEtLSDoh6rlrprkuYkgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgdi1pZj1cImN1c3RvbVwiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XHJcblx0XHRcdDwhLS0g6buY6K6kIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtcm93XCIgdi1lbHNlPlxyXG5cdFx0XHRcdDxpY29uLWJ1dHRvbiBAY2xpY2tJY29uPVwic2VhcmNoXCIgaWNvbj1cIlxcdWU2MzBcIj48L2ljb24tYnV0dG9uPlxyXG5cdFx0XHRcdDxpY29uLWJ1dHRvbiBAY2xpY2tJY29uPVwiYWRkXCIgaWNvbj1cIlxcdWU2MjlcIj48L2ljb24tYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOaJqeWxleiPnOWNlSAtLT5cclxuXHRcdDxjUG9wdXAgcmVmPVwicG9wdXBcIiB0cmFuc2Zvcm1PcmlnaW49XCJyaWdodCB0b3BcIiA6d2lkdGg9XCIyNzBcIiA6aGVpZ2h0PVwiaGVpZ2h0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicG9wdXAtY29udGVudCBmbGV4LTEgcm91bmQtbWRcIj5cclxuXHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJjbGlja01lbnUoaXRlbSlcIiBjbGFzcz1cInBvcHVwLWxpc3QtaXRlbSBwbC0zIGFsaWduLWNlbnRlciAgZmxleC0xIGZsZXgtcm93XCIgdi1mb3I9XCIoaXRlbSwgaSkgaW4gbWVudXNcIiA6a2V5PVwiaVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGljb25mb250IG1yLTIgZm9udC0zMFwiPnt7IGl0ZW0uaWNvbiB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBmb250LTMwXCI+e3sgaXRlbS50ZXh0IH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9jUG9wdXA+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGljb25CdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL3VpL2ljb24tYnV0dG9uLnZ1ZSc7XHJcbmltcG9ydCBjUG9wdXAgZnJvbSAnLi9jUG9wdXAudnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdGNQb3B1cCxcclxuXHRcdGljb25CdXR0b25cclxuXHR9LFxyXG5cdHByb3BzOiB7XHJcblx0XHR0aXRsZTogU3RyaW5nLFxyXG5cdFx0bnVtYmVyOiB7XHJcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl1cclxuXHRcdH0sXHJcblx0XHQvLyDlr7zoiKrmoI/lj7Povrnoh6rlrprkuYlcclxuXHRcdGN1c3RvbToge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdGJnYzoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcjZWRlZGVkJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGhlaWdodCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubWVudXMubGVuZ3RoICogMTAwO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsXHJcblx0XHRcdG1lbnVzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ+WPkei1t+e+pOiBiicsXHJcblx0XHRcdFx0XHRpY29uOiAnXFx1ZTcwMScsXHJcblx0XHRcdFx0XHRldmVudDogJ2dyb3VwQ2hhdCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfmt7vliqDmnIvlj4snLFxyXG5cdFx0XHRcdFx0aWNvbjogJ1xcdWU3MDEnLFxyXG5cdFx0XHRcdFx0ZXZlbnQ6ICdhZGRGcmllbmQnLFxyXG5cdFx0XHRcdFx0cGF0aDogJy9wYWdlcy9mcmllbmQvYWRkRnJpZW5kL2FkZEZyaWVuZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfmiavkuIDliLAnLFxyXG5cdFx0XHRcdFx0aWNvbjogJ1xcdWU3MDEnLFxyXG5cdFx0XHRcdFx0ZXZlbnQ6ICdxckNvZGUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAn5biu5Yqp5LiO5Y+N6aaIJyxcclxuXHRcdFx0XHRcdGljb246ICdcXHVlNzAxJyxcclxuXHRcdFx0XHRcdGV2ZW50OiAnJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0Ly8g6I635Y+W54q25oCB5qCP6auY5bqmXHJcblx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHBsdXMubmF2aWdhdG9yLmdldFN0YXR1c2JhckhlaWdodCgpO1xyXG5cdFx0Ly8gI2VuZGlmXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRhZGQoKSB7XHJcblx0XHRcdGxldCB4ID0gdW5pLnVweDJweCg0NjUpO1xyXG5cdFx0XHRsZXQgeSA9IHVuaS51cHgycHgoMTcwKTtcclxuXHRcdFx0dGhpcy4kcmVmcy5wb3B1cC5vcGVuKHgsIHkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZWFyY2goKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdzZWFyY2gnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xpY2tNZW51KGl0ZW0pIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSwgMTIzKTtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogaXRlbS5wYXRoXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGNsb3NlKCkge1xyXG5cdFx0XHR0aGlzLiRyZWZzLnBvcHVwLmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5zdGlja3kge1xyXG5cdHBvc2l0aW9uOiBzdGlja3k7XHJcbn1cclxuXHJcbi5wb3B1cC1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGM0YzRjO1xyXG59XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YjViNTcyYiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWI1YjU3MmImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2ljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTViNWI1NzJiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWI1YjU3MmJcIixcbiAgXCI3YTRlNzJmZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJIOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViNWI1NzJiJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcImZsZXgtY2VudGVyXCIsIFwiaWNvbi1ib3hcIl0sXG4gICAgICBhdHRyczogeyBob3ZlckNsYXNzOiBcImJnLWhvdmVyLWxpZ2h0XCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja0ljb25cIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW19jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImljb25mb250XCJdIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5faWNvbikpXSldXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZmxleC1jZW50ZXIgaWNvbi1ib3hcIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2tJY29uJylcIiBob3Zlci1jbGFzcz1cImJnLWhvdmVyLWxpZ2h0XCI+XHJcblx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCI+e3sgX2ljb24gfX08L3RleHQ+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHByb3BzOiB7XHJcblx0XHRpY29uOiBTdHJpbmdcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge307XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0X2ljb24oKSB7XHJcblx0XHRcdGxldCBzdHIgPSB0aGlzLmljb247XHJcblx0XHRcdHJldHVybiBldmFsKFwiJ1wiICsgc3RyICsgXCInXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaWNvbi1ib3gge1xyXG5cdGhlaWdodDogOTBycHg7XHJcblx0d2lkdGg6IDExMHJweDtcclxufVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWI1YjU3MmImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTViNWI1NzJiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaWNvbi1ib3hcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTEwcnB4XCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY1BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jY2EwNDkxOCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NQb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NQb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2NhMDQ5MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2NQb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jY2EwNDkxOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImNjYTA0OTE4XCIsXG4gIFwiNWI4ZDMwN2VcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL2NQb3B1cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jUG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNjYTA0OTE4JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnNob3dcbiAgICA/IF9jKFwidmlld1wiLCB7fSwgW1xuICAgICAgICBfdm0ubWFza1xuICAgICAgICAgID8gX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm1hc2tcIl0sXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0TWFza1N0eWxlLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsaWNrTWFzayB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJjb250ZW50XCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY29udGVudFwiLCBcInJvdW5kLW1kXCJdLFxuICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRCb2R5U3R5bGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIlwiIHYtaWY9XCJzaG93XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm1hc2tcIiB2LWlmPVwibWFza1wiIDpzdHlsZT1cImdldE1hc2tTdHlsZVwiIEBjbGljaz1cImNsaWNrTWFza1wiPjwvdmlldz5cclxuXHRcdDwhLS0g5by55Ye65qGG5YaF5a65IC0tPlxyXG5cdFx0PHZpZXcgcmVmPVwiY29udGVudFwiIGNsYXNzPVwiY29udGVudCByb3VuZC1tZFwiIDpzdHlsZT1cImdldEJvZHlTdHlsZVwiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuY29uc3QgYW5pbWF0aW9uID0gd2VleC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKTtcclxuLy8gI2VuZGlmXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdHNob3c6IEJvb2xlYW4sXHJcblx0XHRtYXNrQ2xpY2s6IEJvb2xlYW4sIC8vIOeCueWHu21hc2vmmK/lkKblhbPpl60g6buY6K6k5YWz6ZetXHJcblx0XHRtYXNrOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdH0sXHJcblx0XHRtYXNrQ29sb3I6IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0fSxcclxuXHRcdGhlaWdodDoge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAzMDBcclxuXHRcdH0sXHJcblx0XHR3aWR0aDoge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAyNDBcclxuXHRcdH0sXHJcblx0XHQvLyDliqjnlLvmlrnlkJFcclxuXHRcdHRyYW5zZm9ybU9yaWdpbjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICdsZWZ0IHRvcCdcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiAwLFxyXG5cdFx0XHR5OiAwLFxyXG5cdFx0XHRtYXhYOiAwLFxyXG5cdFx0XHRtYXhZOiAwXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGdldE1hc2tTdHlsZSgpIHtcclxuXHRcdFx0cmV0dXJuIGBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4ke3RoaXMubWFza0NvbG9yfSlgO1xyXG5cdFx0fSxcclxuXHRcdGdldEJvZHlTdHlsZSgpIHtcclxuXHRcdFx0cmV0dXJuIGBoZWlnaHQ6JHt0aGlzLmhlaWdodH1ycHg7d2lkdGg6JHt0aGlzLndpZHRofXJweDtcclxuXHRcdFx0XHRcdGxlZnQ6JHt0aGlzLnh9cHg7dG9wOiR7dGhpcy55fXB4YDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHQvLyDojrflj5bns7vnu5/orr7nva5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHR0aGlzLm1heFggPSByZXMud2luZG93V2lkdGggLSB1bmkudXB4MnB4KHRoaXMud2lkdGggKyAzMCk7XHJcblx0XHRcdHRoaXMubWF4WSA9IHJlcy53aW5kb3dIZWlnaHQgLSB1bmkudXB4MnB4KHRoaXMuaGVpZ2h0ICsgMzApO1xyXG5cdFx0fSBjYXRjaCAoZSkge31cclxuXHR9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblx0XHRvcGVuKHgsIHkpIHtcclxuXHRcdFx0Ly8g5p+l55yL5piv5ZCm6LaF5Ye66L6555WMXHJcblx0XHRcdHRoaXMuY2hlY2tJc091dCh4LCB5KTtcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnNob3cgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdGNsb3NlKCkge1xyXG5cdFx0XHQvLyDliqjnlLtcclxuXHRcdFx0dGhpcy5hbmltYXRpb24oJ2hpZGUnKTtcclxuXHRcdFx0dGhpcy5zaG93ID0gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0Y2xpY2tNYXNrKCkge1xyXG5cdFx0XHRpZiAodGhpcy5tYXNrQ2xpY2spIHJldHVybjtcclxuXHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+WKqOeUu1xyXG5cdFx0YW5pbWF0aW9uKHR5cGUpIHtcclxuXHRcdFx0bGV0IHZhbHVlO1xyXG5cdFx0XHR0eXBlID09ICdoaWRlJyA/ICh2YWx1ZSA9IDApIDogKHZhbHVlID0gMSk7XHJcblx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKFxyXG5cdFx0XHRcdHRoaXMuJHJlZnMuY29udGVudCxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgc2NhbGUoJHt2YWx1ZX0sICR7dmFsdWV9KWAsXHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybU9yaWdpbjogdGhpcy50cmFuc2Zvcm1PcmlnaW4sXHJcblx0XHRcdFx0XHRcdG9wYWNpdHk6IHZhbHVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDEwMCwgLy9tc1xyXG5cdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT0gJ2hpZGUnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvdyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2hlY2tJc091dCh4LCB5KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHgsIHRoaXMubWF4WCk7XHJcblx0XHRcdHggPiB0aGlzLm1heFggPyAodGhpcy54ID0gdGhpcy5tYXhYKSA6ICh0aGlzLnggPSB4KTtcclxuXHRcdFx0eSA+IHRoaXMubWF4WSA/ICh0aGlzLnkgPSB0aGlzLm1heFkpIDogKHRoaXMueSA9IHkpO1xyXG5cdFx0XHR0aGlzLnNob3cgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucG9wdXAge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4ubWFzayB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcblx0Lyog5re75Yqg5Yqo5pWIICovXHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2NhMDQ5MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NQb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jY2EwNDkxOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBvcHVwXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxuICB9LFxuICBcIm1hc2tcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDAsIDApXCIsXG4gICAgXCJvcGFjaXR5XCI6IDBcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNhYmFkYTc2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYWJhZGE3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInN0aWNreVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInN0aWNreVwiXG4gIH0sXG4gIFwicG9wdXAtY29udGVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGM0YzRjXCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzNiNDc3MiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpc3QtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpc3QtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MzNiNDc3MlwiLFxuICBcIjFkMDA1MGRhXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkg6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9saXN0LWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzNiNDc3MiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBbXCJsaXN0LWl0bWVcIiwgXCJcIiwgXCJmbGV4LXJvd1wiLCBcImFsaWduLWNlbnRlclwiLCBcImJnLXdoaXRlXCJdLFxuICAgICAgb246IHsgY2xpY2s6IF92bS5vbkNsaWNrLCBsb25ncHJlc3M6IF92bS5sb25ncHJlc3MgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImFsaWduLWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCJdLFxuICAgICAgICAgIGNsYXNzOiBfdm0uaWNvbkNsYXNzXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uZGF0YS5pbWdcbiAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLmljb25TdHlsZSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5kYXRhLmltZywgbW9kZTogXCJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5kYXRhLmljb25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCI1MHJweFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLmljb24pKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgIFwicmlndGhcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbVwiLFxuICAgICAgICAgICAgXCJtci0zXCIsXG4gICAgICAgICAgICBcImp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgICAgIFwicHktMlwiLFxuICAgICAgICAgICAgXCJmbGV4LTFcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJyaWdodC1jb250YWluZXJcIiwgXCJmbGV4LTFcIl0sXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uY2hhdCA/IFwianVzdGlmeS1iZXR3ZWVuXCIgOiBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0ucmlnaHRTdHlsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZsZXgtcm93XCIsIFwianVzdGlmeS1iZXR3ZWVuXCIsIFwiYWxpZ24tY2VudGVyXCJdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtbWFpbi1jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1lbGxpcHNpc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LTM1XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnRpdGxlKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGltZVwiLCBcInRleHQtdGhyZWUtY29sb3JcIiwgXCJcIiwgXCJmb250LTMwXCJdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnRpbWUpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5jaGF0XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC0yNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC10aHJlZS1jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZWxsaXBzaXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEuaW5mbykpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEubXV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtMjBcIiwgXCJ0ZXh0LXRocmVlLWNvbG9yXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIumdmemfs1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLm1vcmVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJpY29uZm9udFwiLCBcInRleHQtdGhyZWUtY29sb3JcIiwgXCJmb250LTMwXCJdIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIu6kvVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfYyhcInZpZXdcIiwge30sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImxpc3QtaXRtZSAgZmxleC1yb3cgYWxpZ24tY2VudGVyIGJnLXdoaXRlXCIgQGNsaWNrPVwib25DbGlja1wiIEBsb25ncHJlc3M9XCJsb25ncHJlc3NcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgOmNsYXNzPVwiaWNvbkNsYXNzXCI+XHJcblx0XHRcdDxpbWFnZSB2LWlmPVwiZGF0YS5pbWdcIiA6c3R5bGU9XCJpY29uU3R5bGVcIiBjbGFzcz1cIlwiIDpzcmM9XCJkYXRhLmltZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dGV4dCB2LWlmPVwiZGF0YS5pY29uXCIgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOiA1MHJweDtcIj57eyBkYXRhLmljb24gfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInJpZ3RoIGJvcmRlci1ib3R0b20gbXItMyBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGZsZXgtcm93IHB5LTIgZmxleC0xXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtY29udGFpbmVyIGZsZXgtMSBcIiA6Y2xhc3M9XCJjaGF0ID8gJ2p1c3RpZnktYmV0d2VlbicgOiAnanVzdGlmeS1jZW50ZXInXCIgOnN0eWxlPVwicmlnaHRTdHlsZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZSB0ZXh0LW1haW4tY29sb3IgIHRleHQtZWxsaXBzaXMgZm9udC0zNVwiPnt7IGRhdGEudGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUgdGV4dC10aHJlZS1jb2xvciAgZm9udC0zMFwiPnt7IGRhdGEudGltZSB9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyXCIgdi1pZj1cImNoYXRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUgZm9udC0yNSB0ZXh0LXRocmVlLWNvbG9yIGZsZXgtMSAgdGV4dC1lbGxpcHNpc1wiPnt7IGRhdGEuaW5mbyB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC0yMCB0ZXh0LXRocmVlLWNvbG9yXCIgdi1pZj1cImRhdGEubXV0ZVwiPumdmemfszwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cImljb25mb250XCI+XFx1ZTYxMjwvdGV4dD4gLS0+XHJcblx0XHRcdDx0ZXh0IHYtaWY9XCJtb3JlXCIgY2xhc3M9XCJpY29uZm9udCB0ZXh0LXRocmVlLWNvbG9yIGZvbnQtMzAgXCI+JiN4ZTkzZDs8L3RleHQ+XHJcblx0XHRcdDwhLS0gc3RhdHVzIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHByb3BzOiB7XHJcblx0XHRkYXRhOiBPYmplY3QsXHJcblx0XHRtb3JlOiBCb29sZWFuLCAvL+aYr+WQpuaciW1vcmUg5Zu+5qCHXHJcblx0XHRjaGF0OiBCb29sZWFuLCAvL+aYr+WQpuiBiuWkqeWIl+ihqFxyXG5cdFx0aWNvblNpemU6IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0ZGVmYXVsdDogJzgwJ1xyXG5cdFx0fSxcclxuXHRcdGljb25DbGFzczoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICdteC0zICdcclxuXHRcdH0sXHJcblx0XHRyaWdodEhlaWdodDoge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAnMTEwJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhc2VJbWc6ICcvc3RhdGljL2xvZ28ucG5nJ1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRpY29uU3R5bGUoKSB7XHJcblx0XHRcdHJldHVybiBgd2lkdGg6JHt0aGlzLmljb25TaXplfXJweDtoZWlnaHQ6JHt0aGlzLmljb25TaXplfXJweGA7XHJcblx0XHR9LFxyXG5cdFx0cmlnaHRTdHlsZSgpIHtcclxuXHRcdFx0cmV0dXJuIGBoZWlnaHQ6JHt0aGlzLmljb25TaXplfXJweGA7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0bWV0aG9kczoge1xyXG5cdFx0b25DbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnb25DTGljaycsdGhpcy5kYXRhKTtcclxuXHRcdH0sXHJcblx0XHQvLyDplb/mjIlcclxuXHRcdGxvbmdwcmVzcyhlKSB7XHJcblx0XHRcdGNvbnN0IHggPSBlLnRvdWNoZXNbMF0uc2NyZWVuWDtcclxuXHRcdFx0Y29uc3QgeSA9IGUudG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdsb25ncHJlc3MnLCB7IHgsIHkgfSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiIsImltcG9ydCB7XHJcblx0Y29uZmlnXHJcbn0gZnJvbSBcIkAvY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSdcclxuXHJcbmNvbnN0IGVycm9ycyA9IHtcclxuXHRcIjQwMDAwMVwiOiBcIuaVsOaNruS4jeWQiOazlVwiLFxyXG59XHJcblxyXG5jbGFzcyBIdHRwIHtcclxuXHRzdGF0aWMgcmVxdWVzdCh7XHJcblx0XHR1cmwsXHJcblx0XHRkYXRhID0ge30sXHJcblx0XHRtZXRob2QgPSBcIlBPU1RcIixcclxuXHR9KSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHQvLyDov5nph4zku45zdG9yZeS4reaLv+WIsHRva2VuXHJcblx0XHRcdGxldCB0b2tlbiA9IHN0b3JlLnN0YXRlLnRva2VuIHx8ICcnXHJcblx0XHRcdGNvbnNvbGUubG9nKHRva2VuLCBcInRva2VuXCIpXHJcblx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6IGAke2NvbmZpZy5hcGlCYXNlVXJsfSR7dXJsfWAsXHJcblx0XHRcdFx0ZGF0YSxcclxuXHRcdFx0XHRtZXRob2QsXHJcblx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHRcIkF1dGhvcml6YXRpb25cIjogdG9rZW4sXHJcblx0XHRcdFx0XHQvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcywgXCJodHRwXCIpXHJcblx0XHRcdFx0XHRpZiAoc3RhdHVzQ29kZS5zdGFydHNXaXRoKCcyJykpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLnN0YXR1cyA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHQvLyB9KVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIOmUmeivr1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZXJyID0+IHtcclxuXHRcdFx0XHRcdHJlamVjdChlcnIpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIsIFwiZmFpbFwiKVxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eojeWQjuWGjeivlVwiLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRIdHRwXHJcbn07XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuXHRlbnY6IFwiZGV2XCIsXHJcblxyXG5cdGFwaUJhc2VVcmw6ICdodHRwOi8vMTkyLjE2OC4xLjEwMDo0MDAwJyxcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHR3c1VybDogXCJ3czovLzE5Mi4xNjguMS4xMDA6NDAwMC93c1wiLFxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGNvbmZpZ1xyXG59XHJcbiIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2FkZEZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiMTU5NzA4JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hZGRGcmllbmQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9hZGRGcmllbmQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vYWRkRnJpZW5kLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjE1OTcwOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9hZGRGcmllbmQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiMTU5NzA4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YjE1OTcwOFwiLFxuICBcIjc0ZTU2ZWZjXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkg6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMvZnJpZW5kL2FkZEZyaWVuZC9hZGRGcmllbmQubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkRnJpZW5kLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2IxNTk3MDgmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZsZXgtMVwiLCBcImJnLW1haW5cIl0gfSwgW1xuICAgICAgICAhX3ZtLnNlYXJjaFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJhZGQtZnJpZW5kXCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIm5hdmlnYXRvci1iYXJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY3VzdG9tOiB0cnVlLCB0aXRsZTogXCLmt7vliqDmnIvlj4tcIiB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRvcFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWtlLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3VuZC1tZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJteC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZm9udC0zMFwiLCBcInRleHQtdGhyZWUtY29sb3JcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLovpPlhaXmmLXnp7BcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJtaW5lXCIsIFwiYWxpZ24tY2VudGVyXCIsIFwibXQtM1wiXSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGV4dC1zZWMtY29sb3JcIiwgXCJmb250LTMwXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5oiR55qE6LSm5Y+3OjEyMzEyM1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3RzLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaXN0LWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IGl0ZW0sIG1vcmU6IHRydWUsIGNoYXQ6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaFwiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJzZXJhY2hcIiwge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkZEZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZGRGcmllbmQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZmxleC0xIGJnLW1haW5cIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYWRkLWZyaWVuZFwiIHYtaWY9XCIhc2VhcmNoXCI+XHJcblx0XHRcdDxuYXZpZ2F0b3ItYmFyIGN1c3RvbSB0aXRsZT1cIua3u+WKoOaci+WPi1wiPjwvbmF2aWdhdG9yLWJhcj5cclxuXHRcdFx0PCEtLSB0b3AgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0PHZpZXcgQGNsaWNrPVwic2VhcmNoID0gdHJ1ZVwiIGNsYXNzPVwiZmFrZS1pbnB1dCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmQtbWQgbXgtMyBiZy13aGl0ZVwiPjx0ZXh0IGNsYXNzPVwiZm9udC0zMCB0ZXh0LXRocmVlLWNvbG9yXCI+6L6T5YWl5pi156ewPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pbmUgYWxpZ24tY2VudGVyIG10LTNcIj48dGV4dCBjbGFzcz1cInRleHQtc2VjLWNvbG9yIGZvbnQtMzBcIj7miJHnmoTotKblj7c6MTIzMTIzPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSBsaXN0IC0tPlxyXG5cdFx0XHQ8bGlzdC1pdGVtIDpkYXRhPVwiaXRlbVwiIG1vcmUgY2hhdCB2LWZvcj1cIihpdGVtLCBpKSBpbiBsaXN0c1wiIDprZXk9XCJpXCI+PC9saXN0LWl0ZW0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaFwiIHYtZWxzZT48c2VyYWNoIEBjYW5jZWw9XCJzZWFyY2ggPSBmYWxzZVwiPjwvc2VyYWNoPjwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbGlzdEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2xpc3QtaXRlbS52dWUnO1xyXG5pbXBvcnQgbmF2aWdhdG9yQmFyIGZyb20gJ0AvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWUnO1xyXG5pbXBvcnQgc2VyYWNoIGZyb20gJ0AvY29tcG9uZW50cy91aS9zZWFyY2gudnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdHNlcmFjaCxcclxuXHRcdGxpc3RJdGVtLFxyXG5cdFx0bmF2aWdhdG9yQmFyXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aGFzUmlnaHQ6IGZhbHNlLFxyXG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxyXG5cdFx0XHRsaXN0czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZzogJy9zdGF0aWMvc2FveWlzYW8ucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5omr5LiA5omrJyxcclxuXHRcdFx0XHRcdGluZm86ICfmiavmj4/kuoznu7TnoIHlkI3niYcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWc6ICcvc3RhdGljL3Nhb3lpc2FvLnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+aJq+S4gOaJqycsXHJcblx0XHRcdFx0XHRpbmZvOiAn5omr5o+P5LqM57u056CB5ZCN54mHJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nOiAnL3N0YXRpYy9zYW95aXNhby5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfmiavkuIDmiasnLFxyXG5cdFx0XHRcdFx0aW5mbzogJ+aJq+aPj+S6jOe7tOeggeWQjeeJhydcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fSxcclxuXHRtZXRob2RzOiB7fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi50b3Age1xyXG5cdGhlaWdodDogMjUwcnB4O1xyXG59XHJcbi5mYWtlLWlucHV0IHtcclxuXHRoZWlnaHQ6IDcwcnB4O1xyXG59XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjc4ZmQ4ZGEmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI3OGZkOGRhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Yjc4ZmQ4ZGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiNzhmZDhkYVwiLFxuICBcIjQ2N2NjMDQwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkg6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9zZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNzhmZDhkYSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hcIl0gfSwgW1xuICAgIF9jKFwidmlld1wiLCB7IHN0eWxlOiBcImhlaWdodDpcIiArIF92bS5zdGF0dXNCYXJIZWlnaHQgKyBcInB4XCIgfSksXG4gICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZsZXgtcm93XCIsIFwiYWxpZ24tY2VudGVyXCIsIFwibXQtMlwiXSB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgXCJzZWFyY2gtaW5wdXRcIixcbiAgICAgICAgICAgIFwiZmxleC0xXCIsXG4gICAgICAgICAgICBcIm1sLTNcIixcbiAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICBcImJnLXdoaXRlXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICAgICAgXCJyb3VuZC1tZFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpY29uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJteC0xXCJdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzZWFyY2hcIiwgc2l6ZTogXCIyMFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInUtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImlucHV0XCIsIFwiZmxleC0xXCIsIFwidGV4dC1tYWluLWNvbG9yXCIsIFwiZm9udC0zMFwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1UeXBlOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGZvY3VzOiBcInRydWVcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY29uZmlybTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkID0gJGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNhbmNlbFwiLCBcImZvbnQtMzVcIiwgXCJwbC0zXCIsIFwicHItM1wiXSxcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNhbGNlbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLmtleXdvcmRcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgXCJjaHVua1wiLFxuICAgICAgICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgICAgICAgIFwiYmctd2hpdGVcIixcbiAgICAgICAgICAgICAgXCJweS0yXCIsXG4gICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgIFwibXQtM1wiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zZWFyY2ggfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNlYXJjaC1pY29uXCIsIFwibWwtM1wiLCBcIm1yLTRcIl0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2xvZ28ucG5nXCIsIG1vZGU6IFwiXCIgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiZmxleC1yb3dcIiwgXCJhbGlnbi1jZW50ZXJcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LTMwXCIsIFwidGV4dC1tYWluLWNvbG9yXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLmkJzntKI6XCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LTMwXCIsIFwidmFsdWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmtleXdvcmQpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInNlYXJjaFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJcIiA6c3R5bGU9XCInaGVpZ2h0OicgKyBzdGF0dXNCYXJIZWlnaHQgKyAncHgnXCI+PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXIgbXQtMlwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC1pbnB1dCBmbGV4LTEgbWwtMyBhbGlnbi1jZW50ZXIgYmctd2hpdGUgIGZsZXgtcm93IHJvdW5kLW1kXCI+XHJcblx0XHRcdFx0PGljb24gY2xhc3M9XCJteC0xXCIgdHlwZT1cInNlYXJjaFwiIHNpemU9XCIyMFwiIC8+XHJcblx0XHRcdFx0PGlucHV0IGNvbmZpcm0tdHlwZT1cInNlYXJjaFwiIEBjb25maXJtPVwic2VhcmNoXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIHYtbW9kZWw9XCJrZXl3b3JkXCIgZm9jdXM9XCJ0cnVlXCIgY2xhc3M9XCJpbnB1dCBmbGV4LTEgdGV4dC1tYWluLWNvbG9yIGZvbnQtMzBcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiY2FuY2VsIGZvbnQtMzUgcGwtMyBwci0zXCIgQGNsaWNrPVwiY2FsY2VsXCI+5Y+W5raIPC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5re75Yqg5b6u5L+h5aW95Y+LIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjaHVuayBmbGV4LXJvdyBiZy13aGl0ZSBweS0yIGFsaWduLWNlbnRlciBtdC0zXCIgQGNsaWNrPVwic2VhcmNoXCIgdi1pZj1cImtleXdvcmRcIj5cclxuXHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiBjbGFzcz1cInNlYXJjaC1pY29uIG1sLTMgbXItNFwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtcm93IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC0zMCB0ZXh0LW1haW4tY29sb3JcIj7mkJzntKI6PC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC0zMCB2YWx1ZVwiPnt7IGtleXdvcmQgfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAL21vZGVsL1NlYXJjaC5qcyc7XHJcbmltcG9ydCB7IF90b2FzdCB9IGZyb20gJ0AvdXRpbHMvdXRpbC5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLFxyXG5cdFx0XHRrZXl3b3JkOiAnJyxcclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdC8vIOiOt+WPlueKtuaAgeagj+mrmOW6plxyXG5cdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBwbHVzLm5hdmlnYXRvci5nZXRTdGF0dXNiYXJIZWlnaHQoKTtcclxuXHRcdC8vICNlbmRpZlxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Y2FsY2VsKCkge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdjYW5jZWwnKTtcclxuXHRcdFx0dW5pLmhpZGVLZXlib2FyZCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhc3luYyBzZWFyY2goKSB7XHJcblx0XHRcdGlmICghdGhpcy5rZXl3b3JkLnRyaW0oKSkgcmV0dXJuO1xyXG5cdFx0XHQvLyDmkJzntKLnlKjmiLdcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgU2VhcmNoLnNlYXJjaFVzZXIodGhpcy5rZXl3b3JkKTtcclxuXHRcdFx0dW5pLmhpZGVLZXlib2FyZCgpO1xyXG5cdFx0XHQvLyDlpoLmnpzmsqHmnInmiYDmkJzliLDnlKjmiLdcclxuXHRcdFx0aWYgKCFyZXMuZGF0YSkgcmV0dXJuIF90b2FzdCgn5oKo55qE5pyL5Y+L5Y+v6IO95q2j5Zyo54Gr5pif5peF6KGMISEnLCAnY2VudGVyJyk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyDmkJzntKLliLDnlKjmiLcg6Lez6L2s55So5oi36K+m5oOFXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6YC9wYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nP2lkPSR7cmVzLmRhdGEuX2lkfWBcclxuXHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnNlYXJjaC1pbnB1dCB7XHJcblx0aGVpZ2h0OiA2MHJweDtcclxufVxyXG5cclxuLmNhbmNlbCB7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuXHRoZWlnaHQ6IDkwcnB4O1xyXG5cdHdpZHRoOiA5MHJweDtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuXHRjb2xvcjogIzAwYWQxOTtcclxufVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IHtcclxuXHRIdHRwXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2h0dHAuanNcIjtcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcblx0Ly8g5pCc57Si55So5oi3XHJcblx0c3RhdGljIHNlYXJjaFVzZXIoa2V5d29yZCwgaWQgPSBcIlwiKSB7XHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL3NlYXJjaC91c2VyYCxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGtleXdvcmQsXHJcblx0XHRcdFx0aWRcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdFNlYXJjaFxyXG59O1xyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Yjc4ZmQ4ZGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iNzhmZDhkYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInNlYXJjaC1pbnB1dFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiXG4gIH0sXG4gIFwiY2FuY2VsXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGMDAwMFwiXG4gIH0sXG4gIFwic2VhcmNoLWljb25cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiOTBycHhcIlxuICB9LFxuICBcInZhbHVlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwYWQxOVwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZGRGcmllbmQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiMTU5NzA4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkZEZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2IxNTk3MDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInRvcFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyNTBycHhcIlxuICB9LFxuICBcImZha2UtaW5wdXRcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzBycHhcIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==