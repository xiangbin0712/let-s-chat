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
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
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
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/*!********************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/model/Friend.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.Friend = void 0;var _http = __webpack_require__(/*! ../utils/http.js */ 71);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var



Friend = /*#__PURE__*/function () {function Friend() {_classCallCheck(this, Friend);}_createClass(Friend, null, [{ key: "applyFriend",
    // 申请添加好友
    value: function applyFriend(params) {
      __f__("log", params.lookme, params.lookhim, "params", " at model\\Friend.js:8");
      return _http.Http.request({
        url: "/friend/apply",
        data: {
          apply_value: params.apply_value,
          nickname: params.nickname,
          user_id: params.user_id,
          friend_id: params.friend_id,
          lookme: params.lookme,
          lookhim: params.lookhim } });


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

/***/ }),
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
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/*!******************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/main.js?{"page":"pages%2Ffriend%2FapplyFriend%2FapplyFriend"} ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 2);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 20);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_friend_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/friend/applyFriend/applyFriend.nvue?mpType=page */ 118);

        
        
        
        _pages_friend_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_friend_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/friend/applyFriend/applyFriend'
        _pages_friend_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_friend_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 118 */
/*!**********************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyFriend.nvue?vue&type=template&id=d39ae2bc&scoped=true&mpType=page */ 119);
/* harmony import */ var _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyFriend.nvue?vue&type=script&lang=js&mpType=page */ 121);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./applyFriend.nvue?vue&type=style&index=0&id=d39ae2bc&scoped=true&lang=css&mpType=page */ 130).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./applyFriend.nvue?vue&type=style&index=0&id=d39ae2bc&scoped=true&lang=css&mpType=page */ 130).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d39ae2bc",
  "5f218062",
  false,
  _applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 119 */
/*!****************************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue?vue&type=template&id=d39ae2bc&scoped=true&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./applyFriend.nvue?vue&type=template&id=d39ae2bc&scoped=true&mpType=page */ 120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_d39ae2bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 120 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue?vue&type=template&id=d39ae2bc&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "view",
        { staticClass: ["flex-1", "bg-white"] },
        [
          _c("navigator-bar", { attrs: { custom: true, bgc: "#ffffff" } }, [
            _c(
              "view",
              {
                staticClass: [
                  "send-btn",
                  "flex-center",
                  "mr-3",
                  "flex-1",
                  "round-md"
                ],
                on: { click: _vm.send }
              },
              [
                _c("u-text", { staticClass: ["text-white", "font-30"] }, [
                  _vm._v("发送")
                ])
              ]
            )
          ]),
          _c(
            "view",
            {
              staticClass: ["align-center"],
              staticStyle: { marginTop: "100rpx" }
            },
            [
              _c("u-text", { staticClass: ["text-bold"] }, [
                _vm._v("申请添加好友")
              ])
            ]
          ),
          _c("view", { staticClass: ["chunk", "mx-5", "", "mb-3", "my-5"] }, [
            _c(
              "u-text",
              { staticClass: ["title", "font-30", "text-sec-color"] },
              [_vm._v("发送添加朋友申请")]
            ),
            _c(
              "view",
              {
                staticClass: [
                  "box",
                  "round-md",
                  "",
                  "mt-1",
                  "bg-color-1",
                  "pl-2",
                  "py-2",
                  "pr-2"
                ]
              },
              [
                _c("u-textarea", {
                  staticClass: ["font-30"],
                  staticStyle: { height: "120rpx" },
                  attrs: { placeholder: "请输入问候语", value: _vm.hello },
                  on: {
                    input: function($event) {
                      _vm.hello = $event.detail.value
                    }
                  }
                })
              ],
              1
            )
          ]),
          _c("view", { staticClass: ["chunk", "mt-4", "mx-5"] }, [
            _c(
              "u-text",
              { staticClass: ["title", "font-30", "text-sec-color"] },
              [_vm._v("设备备注")]
            ),
            _c(
              "view",
              {
                staticClass: [
                  "box",
                  "round-md",
                  "mt-1",
                  "bg-color-1",
                  "pl-2",
                  "py-2",
                  "pr-2"
                ]
              },
              [
                _c("u-input", {
                  staticClass: ["font-30"],
                  attrs: { type: "text", value: _vm.nickname },
                  on: {
                    input: function($event) {
                      _vm.nickname = $event.detail.value
                    }
                  }
                })
              ],
              1
            )
          ]),
          _c("permission-setting", { on: { permission: _vm.permission } })
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 121 */
/*!**********************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./applyFriend.nvue?vue&type=script&lang=js&mpType=page */ 122);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 122 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 16));






















var _navigationBar = _interopRequireDefault(__webpack_require__(/*! @/components/ui/navigation-bar.vue */ 28));
var _permissionSetting = _interopRequireDefault(__webpack_require__(/*! @/components/ui/permission-setting.vue */ 123));
var _Friend = __webpack_require__(/*! @/model/Friend.js */ 70);
var _vuex = __webpack_require__(/*! vuex */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  components: {
    navigatorBar: _navigationBar.default,
    permissionSetting: _permissionSetting.default },

  data: function data() {
    return {
      hello: '请求添加你为好有',
      nickname: '',
      friendId: '',
      lookhim: 1,
      lookme: 1 };

  },
  onLoad: function onLoad(options) {
    if (options.friendId) {
      this.friendId = options.friendId;
      this.nickname = options.nickname;
    }
  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['user'])),

  mounted: function mounted() {},
  methods: {
    // 从组件传递的权限数据
    permission: function permission(e) {
      this.lookhim = e.lookhim;
      this.lookme = e.lookme;
    },
    // 发送好友请求
    send: function send() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var params, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                params = {
                  apply_value: _this.hello,
                  nickname: _this.nickname,
                  user_id: _this.user._id,
                  friend_id: _this.friendId,
                  lookme: _this.lookme,
                  lookhim: _this.lookhim };


                // 申请好友api
                _context.next = 3;return _Friend.Friend.applyFriend(params);case 3:res = _context.sent;
                uni.showToast({
                  title: '发送成功' });

                setTimeout(function () {
                  uni.navigateBack({
                    delta: 1 });

                }, 300);case 6:case "end":return _context.stop();}}}, _callee);}))();
    } } };exports.default = _default;

/***/ }),
/* 123 */
/*!*****************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission-setting.vue?vue&type=template&id=41f75cbd&scoped=true& */ 124);
/* harmony import */ var _permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-setting.vue?vue&type=script&lang=js& */ 126);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./permission-setting.vue?vue&type=style&index=0&id=41f75cbd&scoped=true&lang=css& */ 128).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./permission-setting.vue?vue&type=style&index=0&id=41f75cbd&scoped=true&lang=css& */ 128).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41f75cbd",
  "59f7dd8a",
  false,
  _permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 124 */
/*!************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue?vue&type=template&id=41f75cbd&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./permission-setting.vue?vue&type=template&id=41f75cbd&scoped=true& */ 125);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_template_id_41f75cbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 125 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue?vue&type=template&id=41f75cbd&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", {}, [
    _c("view", { staticClass: ["chunk", "mt-4", "mx-5"] }, [
      _c("u-text", { staticClass: ["title", "font-30", "text-sec-color"] }, [
        _vm._v("设置朋友圈权限")
      ]),
      _c(
        "view",
        {
          staticClass: [
            "box",
            "round-md",
            "mt-1",
            "bg-color-1",
            "pl-2",
            "",
            "pr-2"
          ]
        },
        [
          _c(
            "radio-group",
            { on: { change: _vm.radioChange } },
            _vm._l(_vm.items, function(item, index) {
              return _c(
                "label",
                {
                  key: item.value,
                  staticClass: [
                    "flex-row",
                    "",
                    "align-center",
                    "justify-between",
                    "item"
                  ]
                },
                [
                  _c("u-text", { staticClass: ["font-30"] }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _c(
                    "view",
                    [
                      _c("radio", {
                        attrs: {
                          value: item.value,
                          color: "#00AD19",
                          checked: index === _vm.current
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    !_vm.current
      ? _c("view", { staticClass: ["chunk", "mt-4", "mx-5"] }, [
          _c(
            "u-text",
            { staticClass: ["title", "font-30", "text-sec-color"] },
            [_vm._v("朋友圈和视频动态")]
          ),
          _c(
            "view",
            {
              staticClass: [
                "box",
                "round-md",
                "mt-1",
                "bg-color-1",
                "pl-2",
                "",
                "pr-2"
              ]
            },
            _vm._l(_vm.switchs, function(item, i) {
              return _c(
                "view",
                {
                  key: i,
                  staticClass: [
                    "item",
                    "flex-row",
                    "align-center",
                    "justify-between",
                    "border-bottom"
                  ]
                },
                [
                  _c("u-text", { staticClass: ["font-30"] }, [
                    _vm._v(_vm._s(item.text))
                  ]),
                  _c("switch", {
                    attrs: { checked: item.checked },
                    on: {
                      change: function($event) {
                        _vm.switchChange(i)
                      }
                    }
                  })
                ],
                1
              )
            }),
            0
          )
        ])
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 126 */
/*!******************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./permission-setting.vue?vue&type=script&lang=js& */ 127);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 127 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
var _default =
{
  data: function data() {
    return {
      show: true,
      items: [
      {
        value: '0',
        name: '聊天,朋友圈,微信运动等' },

      {
        value: '1',
        name: '仅聊天' }],


      current: 0,
      switchs: [{ text: '不让他看我', checked: false }, { text: '不看他', checked: false }] };

  },

  computed: {},

  methods: {
    switchChange: function switchChange(e) {
      this.switchs[e].checked = !this.switchs[e].checked;
      this.emit();
    },

    radioChange: function radioChange(e) {
      this.current = e.detail.value / 1;
      this.emit();
    },

    /**
        * 默认为我看他(1),他看我(1)
        * 如果仅是聊天 0 0
        * 将现有的值取反
        */
    emit: function emit() {
      var lookhim = 1;
      var lookme = 1;
      // 仅聊天
      if (this.current) {
        lookhim = 0;
        lookme = 0;
      } else {
        // 默认为 1,1将现在的值取反
        lookme = Number(!this.switchs[0].checked);
        lookhim = Number(!this.switchs[1].checked);
      }

      this.$emit('permission', {
        lookme: lookme,
        lookhim: lookhim });

    } } };exports.default = _default;

/***/ }),
/* 128 */
/*!**************************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue?vue&type=style&index=0&id=41f75cbd&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_style_index_0_id_41f75cbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./permission-setting.vue?vue&type=style&index=0&id=41f75cbd&scoped=true&lang=css& */ 129);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_style_index_0_id_41f75cbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_style_index_0_id_41f75cbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_style_index_0_id_41f75cbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_style_index_0_id_41f75cbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_permission_setting_vue_vue_type_style_index_0_id_41f75cbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 129 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/components/ui/permission-setting.vue?vue&type=style&index=0&id=41f75cbd&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "item": {
    "height": "90rpx"
  }
}

/***/ }),
/* 130 */
/*!******************************************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue?vue&type=style&index=0&id=d39ae2bc&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_style_index_0_id_d39ae2bc_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./applyFriend.nvue?vue&type=style&index=0&id=d39ae2bc&scoped=true&lang=css&mpType=page */ 131);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_style_index_0_id_d39ae2bc_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_style_index_0_id_d39ae2bc_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_style_index_0_id_d39ae2bc_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_style_index_0_id_d39ae2bc_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_style_index_0_id_d39ae2bc_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 131 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/nvue/pages/friend/applyFriend/applyFriend.nvue?vue&type=style&index=0&id=d39ae2bc&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "send-btn": {
    "backgroundColor": "#08c060",
    "height": "60rpx",
    "width": "100rpx"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy5qc29uPzVhM2UiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMuanNvbj8zYmVlIixudWxsLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVleC9kaXN0L3Z1ZXguZXNtLmpzPzJmNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ1bmktYXBwOi8vL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdnVlL2JhYmVsLXByZXNldC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzPzQ3OTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2dWUvYmFiZWwtcHJlc2V0LWFwcC9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzPzk1YTIiLCJ1bmktYXBwOi8vL3V0aWxzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvbWFpbi5qcz80ZDJkIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL0FwcC52dWU/NTQ2ZSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9BcHAudnVlPzM1MTkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/OGNjZCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL25hdmlnYXRpb24tYmFyLnZ1ZT9lZDU1Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1iYXIudnVlP2RjMmIiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/NzY5OCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWU/ZDBhMCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL2ljb24tYnV0dG9uLnZ1ZT83ZDQ2Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlPzMzNDgiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWU/NzNjMSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWU/ZjZiMCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL2ljb24tYnV0dG9uLnZ1ZT8yNTBjIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT9mZTY3Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT85M2IwIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT9kYjVlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZT8yY2YyIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VpL2NQb3B1cC52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9jUG9wdXAudnVlPzM5ZDkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9jUG9wdXAudnVlPzgwNjkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/OWZhNSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL25hdmlnYXRpb24tYmFyLnZ1ZT81ODlkIiwidW5pLWFwcDovLy9tb2RlbC9GcmllbmQuanMiLCJ1bmktYXBwOi8vL3V0aWxzL2h0dHAuanMiLCJ1bmktYXBwOi8vL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvbWFpbi5qcz9hNmFmIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2ZyaWVuZC9hcHBseUZyaWVuZC9hcHBseUZyaWVuZC5udnVlP2NiNWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMvZnJpZW5kL2FwcGx5RnJpZW5kL2FwcGx5RnJpZW5kLm52dWU/ZmU1NyIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9mcmllbmQvYXBwbHlGcmllbmQvYXBwbHlGcmllbmQubnZ1ZT9jMjUzIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL3BhZ2VzL2ZyaWVuZC9hcHBseUZyaWVuZC9hcHBseUZyaWVuZC5udnVlP2ZkODkiLCJ1bmktYXBwOi8vL3BhZ2VzL2ZyaWVuZC9hcHBseUZyaWVuZC9hcHBseUZyaWVuZC5udnVlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvcGVybWlzc2lvbi1zZXR0aW5nLnZ1ZT9mOTI1Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvcGVybWlzc2lvbi1zZXR0aW5nLnZ1ZT85YjZhIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvcGVybWlzc2lvbi1zZXR0aW5nLnZ1ZT8wNjllIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvcGVybWlzc2lvbi1zZXR0aW5nLnZ1ZT82ZGZmIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VpL3Blcm1pc3Npb24tc2V0dGluZy52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9wZXJtaXNzaW9uLXNldHRpbmcudnVlP2M5NzkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9wZXJtaXNzaW9uLXNldHRpbmcudnVlPzRiZDMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvcGFnZXMvZnJpZW5kL2FwcGx5RnJpZW5kL2FwcGx5RnJpZW5kLm52dWU/MTQ1MiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9mcmllbmQvYXBwbHlGcmllbmQvYXBwbHlGcmllbmQubnZ1ZT84MmMxIl0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJ0eXBvZiIsInMiLCJwcm90b3R5cGUiLCJzdWJzdHJpbmciLCJpc0RlYnVnTW9kZSIsIl9fY2hhbm5lbElkX18iLCJsb2ciLCJfbGVuIiwiYXJndW1lbnRzIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJmb3JtYXRMb2ciLCJzaGlmdCIsInBvcCIsIm1zZ3MiLCJtYXAiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJhcHBseU1peGluIiwiVnVlIiwiTnVtYmVyIiwic3BsaXQiLCJtaXhpbiIsImJlZm9yZUNyZWF0ZSIsInZ1ZXhJbml0IiwiX2luaXQiLCJpbml0IiwiY29uY2F0Iiwic3RvcmUiLCIkc3RvcmUiLCJwYXJlbnQiLCJkZXZ0b29sSG9vayIsIndpbmRvdyIsIl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJkZXZ0b29sUGx1Z2luIiwiX2RldnRvb2xIb29rIiwiZW1pdCIsIm9uIiwidGFyZ2V0U3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJzdWJzY3JpYmUiLCJtdXRhdGlvbiIsInN0YXRlIiwiZm9yRWFjaFZhbHVlIiwib2JqIiwiZm4iLCJpc09iamVjdCIsImlzUHJvbWlzZSIsInZhbCIsInRoZW4iLCJhc3NlcnQiLCJjb25kaXRpb24iLCJFcnJvciIsIk1vZHVsZSIsInJhd01vZHVsZSIsIl9jaGlsZHJlbiIsImNyZWF0ZSIsIl9yYXdNb2R1bGUiLCJyYXdTdGF0ZSIsInByb3RvdHlwZUFjY2Vzc29ycyQxIiwibmFtZXNwYWNlZCIsImNvbmZpZ3VyYWJsZSIsImdldCIsImFkZENoaWxkIiwibW9kdWxlIiwicmVtb3ZlQ2hpbGQiLCJnZXRDaGlsZCIsInVwZGF0ZSIsImFjdGlvbnMiLCJtdXRhdGlvbnMiLCJnZXR0ZXJzIiwiZm9yRWFjaENoaWxkIiwiZm9yRWFjaEdldHRlciIsImZvckVhY2hBY3Rpb24iLCJmb3JFYWNoTXV0YXRpb24iLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTW9kdWxlQ29sbGVjdGlvbiIsInJhd1Jvb3RNb2R1bGUiLCJyZWdpc3RlciIsInJlZHVjZSIsInJvb3QiLCJnZXROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJ1cGRhdGUkMSIsInRoaXMkMSIsImFzc2VydFJhd01vZHVsZSIsIm5ld01vZHVsZSIsInNsaWNlIiwibW9kdWxlcyIsInJhd0NoaWxkTW9kdWxlIiwidW5yZWdpc3RlciIsInRhcmdldE1vZHVsZSIsIndhcm4iLCJmdW5jdGlvbkFzc2VydCIsImV4cGVjdGVkIiwib2JqZWN0QXNzZXJ0IiwiaGFuZGxlciIsImFzc2VydFR5cGVzIiwiYXNzZXJ0T3B0aW9ucyIsIm1ha2VBc3NlcnRpb25NZXNzYWdlIiwiYnVmIiwiU3RvcmUiLCJpbnN0YWxsIiwiUHJvbWlzZSIsInBsdWdpbnMiLCJzdHJpY3QiLCJfY29tbWl0dGluZyIsIl9hY3Rpb25zIiwiX2FjdGlvblN1YnNjcmliZXJzIiwiX211dGF0aW9ucyIsIl93cmFwcGVkR2V0dGVycyIsIl9tb2R1bGVzIiwiX21vZHVsZXNOYW1lc3BhY2VNYXAiLCJfc3Vic2NyaWJlcnMiLCJfd2F0Y2hlclZNIiwicmVmIiwiZGlzcGF0Y2giLCJjb21taXQiLCJib3VuZERpc3BhdGNoIiwicGF5bG9hZCIsImJvdW5kQ29tbWl0IiwiaW5zdGFsbE1vZHVsZSIsInJlc2V0U3RvcmVWTSIsInBsdWdpbiIsImRldnRvb2xzIiwicHJvdG90eXBlQWNjZXNzb3JzIiwiX3ZtIiwiX2RhdGEiLCIkJHN0YXRlIiwic2V0IiwiX3R5cGUiLCJfcGF5bG9hZCIsIl9vcHRpb25zIiwidW5pZnlPYmplY3RTdHlsZSIsImVudHJ5IiwiX3dpdGhDb21taXQiLCJjb21taXRJdGVyYXRvciIsInN1YiIsInNpbGVudCIsImFjdGlvbiIsImFsbCIsImdlbmVyaWNTdWJzY3JpYmUiLCJzdWJzY3JpYmVBY3Rpb24iLCJ3YXRjaCIsImdldHRlciIsImNiIiwiJHdhdGNoIiwicmVnaXN0ZXJNb2R1bGUiLCJpc0FycmF5IiwicHJlc2VydmVTdGF0ZSIsInVucmVnaXN0ZXJNb2R1bGUiLCJwYXJlbnRTdGF0ZSIsImdldE5lc3RlZFN0YXRlIiwiZGVsZXRlIiwicmVzZXRTdG9yZSIsImhvdFVwZGF0ZSIsIm5ld09wdGlvbnMiLCJjb21taXR0aW5nIiwic3VicyIsInNwbGljZSIsImhvdCIsIm9sZFZtIiwid3JhcHBlZEdldHRlcnMiLCJjb21wdXRlZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImVuYWJsZVN0cmljdE1vZGUiLCJuZXh0VGljayIsIiRkZXN0cm95Iiwicm9vdFN0YXRlIiwiaXNSb290IiwibW9kdWxlTmFtZSIsImxvY2FsIiwiY29udGV4dCIsIm1ha2VMb2NhbENvbnRleHQiLCJuYW1lc3BhY2VkVHlwZSIsInJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlckFjdGlvbiIsInJlZ2lzdGVyR2V0dGVyIiwiY2hpbGQiLCJub05hbWVzcGFjZSIsIm1ha2VMb2NhbEdldHRlcnMiLCJnZXR0ZXJzUHJveHkiLCJzcGxpdFBvcyIsImxvY2FsVHlwZSIsIndyYXBwZWRNdXRhdGlvbkhhbmRsZXIiLCJ3cmFwcGVkQWN0aW9uSGFuZGxlciIsInJlcyIsInJvb3RHZXR0ZXJzIiwicmVzb2x2ZSIsImNhdGNoIiwiZXJyIiwicmF3R2V0dGVyIiwid3JhcHBlZEdldHRlciIsImRlZXAiLCJzeW5jIiwiX1Z1ZSIsIm1hcFN0YXRlIiwibm9ybWFsaXplTmFtZXNwYWNlIiwic3RhdGVzIiwibm9ybWFsaXplTWFwIiwibWFwcGVkU3RhdGUiLCJnZXRNb2R1bGVCeU5hbWVzcGFjZSIsInZ1ZXgiLCJtYXBNdXRhdGlvbnMiLCJtYXBwZWRNdXRhdGlvbiIsImxlbiIsIm1hcEdldHRlcnMiLCJtYXBwZWRHZXR0ZXIiLCJtYXBBY3Rpb25zIiwibWFwcGVkQWN0aW9uIiwiY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMiLCJiaW5kIiwiY2hhckF0IiwiaGVscGVyIiwiaW5kZXhfZXNtIiwidXNlIiwiVnVleCIsInVzZXIiLCJ0b2tlbiIsImNoYXQiLCJTRVRfVE9LRU4iLCJTRVRfVVNFUiIsIlNFVF9DSEFUIiwibG9naW4iLCJzZXRTdG9yYWdlIiwibG9nb3V0IiwibmF2aWdhdGVUbyIsImV4cG9ydHMiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJjb25zdHJ1Y3RvciIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwicmVqZWN0IiwicmVjb3JkIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJvYmplY3QiLCJyZXZlcnNlIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiIsInByb21pc2ljIiwiZnVuYyIsInBhcmFtcyIsImFzc2lnbiIsIl90b2FzdCIsInBvc2l0aW9uIiwiaWNvbiIsInNob3dUb2FzdCIsImdldFN0b3JhZ2UiLCJGcmllbmQiLCJsb29rbWUiLCJsb29raGltIiwiSHR0cCIsImFwcGx5X3ZhbHVlIiwibmlja25hbWUiLCJ1c2VyX2lkIiwiZnJpZW5kX2lkIiwidXNlcklkIiwiZnJpZW5kSWQiLCJpZCIsIl9pZCIsImVycm9ycyIsImFwaUJhc2VVcmwiLCJoZWFkZXIiLCJzdGF0dXNDb2RlIiwic3RhcnRzV2l0aCIsInN0YXR1cyIsImVudiIsIndzVXJsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUE7QUFBQTtBQUFBO0FBQWd3QixDQUFnQiw4d0JBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXB4QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNI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ZC9hcHBseUZyaWVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMTcpO1xuIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e1wicGFnZXMvdXNlci91c2VyRGV0YWlsL3VzZXJEZXRhaWxcIjp7fSxcInBhZ2VzL3N0YXJ0L3N0YXJ0XCI6e30sXCJwYWdlcy9sb2dpbi9sb2dpblwiOnt9LFwicGFnZXMvdGFiYmFyL2luZGV4L2luZGV4XCI6e30sXCJwYWdlcy9maW5kL21vbWVudC9tb21lbnRcIjp7fSxcInBhZ2VzL2ZyaWVuZC9hcHBseUZyaWVuZC9hcHBseUZyaWVuZFwiOnt9LFwicGFnZXMvY29tcGFnZS92aXNpdGluZy92aXNpdGluZ1wiOntcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmZmZmZmZcIixcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInR5cGVcIjpcIm1lbnVcIn1dfX0sXCJwYWdlcy9mcmllbmQvYXBwbHlMaXN0L2FwcGx5TGlzdFwiOntcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInRleHRcIjpcIuaWsOeahOaci+WPi1wiLFwiZmxvYXRcIjpcImxlZnRcIixcImZvbnRXZWlnaHRcIjpcImJvbGRcIixcImZvbnRTaXplXCI6XCIxOHB4XCIsXCJ3aWR0aFwiOlwiMTAwcHhcIn0se1widGV4dFwiOlwi5re75Yqg5pyL5Y+LXCIsXCJmbG9hdFwiOlwicmlnaHRcIixcImZvbnRTaXplXCI6XCIxOHB4XCIsXCJ3aWR0aFwiOlwiMTAwcHhcIn1dfX0sXCJwYWdlcy9mcmllbmQvYWRkRnJpZW5kL2FkZEZyaWVuZFwiOnt9LFwicGFnZXMvdGFiYmFyL215L215XCI6e30sXCJwYWdlcy90YWJiYXIvY29udGFjdHMvY29udGFjdHNcIjp7fSxcInBhZ2VzL3RhYmJhci9maW5kL2ZpbmRcIjp7fSxcInBhZ2VzL2NvbXBhZ2UvY2hhdC9jaGF0XCI6e319LFwiZ2xvYmFsU3R5bGVcIjp7fX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfXzY3QUE2N0JcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiLCJmdW5jdGlvbiB0eXBvZiAodikge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxufVxuXG5mdW5jdGlvbiBpc0RlYnVnTW9kZSAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIHZhciB0eXBlID0gYXJncy5zaGlmdCgpXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgYXJncy5wdXNoKGFyZ3MucG9wKCkucmVwbGFjZSgnYXQgJywgJ3VuaS1hcHA6Ly8vJykpXG4gICAgcmV0dXJuIGNvbnNvbGVbdHlwZV1bJ2FwcGx5J10oY29uc29sZSwgYXJncylcbiAgfVxuXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgYXJyYXldJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZcbiAgfSlcbiAgdmFyIG1zZyA9ICcnXG5cbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxuXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XG4gICAgICBtc2cgKz0gbGFzdE1zZ1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gbXNnc1swXVxuICB9XG5cbiAgY29uc29sZVt0eXBlXShtc2cpXG59XG4iLCIvKipcbiAqIHZ1ZXggdjMuMC4xXG4gKiAoYykgMjAxNyBFdmFuIFlvdVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbnZhciBhcHBseU1peGluID0gZnVuY3Rpb24gKFZ1ZSkge1xuICB2YXIgdmVyc2lvbiA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKTtcblxuICBpZiAodmVyc2lvbiA+PSAyKSB7XG4gICAgVnVlLm1peGluKHsgYmVmb3JlQ3JlYXRlOiB2dWV4SW5pdCB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdmVycmlkZSBpbml0IGFuZCBpbmplY3QgdnVleCBpbml0IHByb2NlZHVyZVxuICAgIC8vIGZvciAxLnggYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIF9pbml0ID0gVnVlLnByb3RvdHlwZS5faW5pdDtcbiAgICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBvcHRpb25zLmluaXQgPSBvcHRpb25zLmluaXRcbiAgICAgICAgPyBbdnVleEluaXRdLmNvbmNhdChvcHRpb25zLmluaXQpXG4gICAgICAgIDogdnVleEluaXQ7XG4gICAgICBfaW5pdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVnVleCBpbml0IGhvb2ssIGluamVjdGVkIGludG8gZWFjaCBpbnN0YW5jZXMgaW5pdCBob29rcyBsaXN0LlxuICAgKi9cblxuICBmdW5jdGlvbiB2dWV4SW5pdCAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIC8vIHN0b3JlIGluamVjdGlvblxuICAgIGlmIChvcHRpb25zLnN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IHR5cGVvZiBvcHRpb25zLnN0b3JlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5zdG9yZSgpXG4gICAgICAgIDogb3B0aW9ucy5zdG9yZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LiRzdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSBvcHRpb25zLnBhcmVudC4kc3RvcmU7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGV2dG9vbEhvb2sgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuZnVuY3Rpb24gZGV2dG9vbFBsdWdpbiAoc3RvcmUpIHtcbiAgaWYgKCFkZXZ0b29sSG9vaykgeyByZXR1cm4gfVxuXG4gIHN0b3JlLl9kZXZ0b29sSG9vayA9IGRldnRvb2xIb29rO1xuXG4gIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6aW5pdCcsIHN0b3JlKTtcblxuICBkZXZ0b29sSG9vay5vbigndnVleDp0cmF2ZWwtdG8tc3RhdGUnLCBmdW5jdGlvbiAodGFyZ2V0U3RhdGUpIHtcbiAgICBzdG9yZS5yZXBsYWNlU3RhdGUodGFyZ2V0U3RhdGUpO1xuICB9KTtcblxuICBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG11dGF0aW9uLCBzdGF0ZSkge1xuICAgIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6bXV0YXRpb24nLCBtdXRhdGlvbiwgc3RhdGUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBwYXNzIHRoZSB0ZXN0XG4gKiBieSBzZWNvbmQgYXJndW1lbnQgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJuIHsqfVxuICovXG4vKipcbiAqIERlZXAgY29weSB0aGUgZ2l2ZW4gb2JqZWN0IGNvbnNpZGVyaW5nIGNpcmN1bGFyIHN0cnVjdHVyZS5cbiAqIFRoaXMgZnVuY3Rpb24gY2FjaGVzIGFsbCBuZXN0ZWQgb2JqZWN0cyBhbmQgaXRzIGNvcGllcy5cbiAqIElmIGl0IGRldGVjdHMgY2lyY3VsYXIgc3RydWN0dXJlLCB1c2UgY2FjaGVkIGNvcHkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBjYWNoZVxuICogQHJldHVybiB7Kn1cbiAqL1xuXG5cbi8qKlxuICogZm9yRWFjaCBmb3Igb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hWYWx1ZSAob2JqLCBmbikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4ob2JqW2tleV0sIGtleSk7IH0pO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1zZykge1xuICBpZiAoIWNvbmRpdGlvbikgeyB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZXhdIFwiICsgbXNnKSkgfVxufVxuXG52YXIgTW9kdWxlID0gZnVuY3Rpb24gTW9kdWxlIChyYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgdGhpcy5ydW50aW1lID0gcnVudGltZTtcbiAgdGhpcy5fY2hpbGRyZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9yYXdNb2R1bGUgPSByYXdNb2R1bGU7XG4gIHZhciByYXdTdGF0ZSA9IHJhd01vZHVsZS5zdGF0ZTtcbiAgdGhpcy5zdGF0ZSA9ICh0eXBlb2YgcmF3U3RhdGUgPT09ICdmdW5jdGlvbicgPyByYXdTdGF0ZSgpIDogcmF3U3RhdGUpIHx8IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQxID0geyBuYW1lc3BhY2VkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLm5hbWVzcGFjZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZFxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIGFkZENoaWxkIChrZXksIG1vZHVsZSkge1xuICB0aGlzLl9jaGlsZHJlbltrZXldID0gbW9kdWxlO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkIChrZXkpIHtcbiAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2tleV07XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQgKGtleSkge1xuICByZXR1cm4gdGhpcy5fY2hpbGRyZW5ba2V5XVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKHJhd01vZHVsZSkge1xuICB0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZCA9IHJhd01vZHVsZS5uYW1lc3BhY2VkO1xuICBpZiAocmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucyA9IHJhd01vZHVsZS5hY3Rpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucyA9IHJhd01vZHVsZS5tdXRhdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmdldHRlcnMgPSByYXdNb2R1bGUuZ2V0dGVycztcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiBmb3JFYWNoQ2hpbGQgKGZuKSB7XG4gIGZvckVhY2hWYWx1ZSh0aGlzLl9jaGlsZHJlbiwgZm4pO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoR2V0dGVyID0gZnVuY3Rpb24gZm9yRWFjaEdldHRlciAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEFjdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hBY3Rpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hNdXRhdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hNdXRhdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucywgZm4pO1xuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggTW9kdWxlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxudmFyIE1vZHVsZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBNb2R1bGVDb2xsZWN0aW9uIChyYXdSb290TW9kdWxlKSB7XG4gIC8vIHJlZ2lzdGVyIHJvb3QgbW9kdWxlIChWdWV4LlN0b3JlIG9wdGlvbnMpXG4gIHRoaXMucmVnaXN0ZXIoW10sIHJhd1Jvb3RNb2R1bGUsIGZhbHNlKTtcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG1vZHVsZSwga2V5KSB7XG4gICAgcmV0dXJuIG1vZHVsZS5nZXRDaGlsZChrZXkpXG4gIH0sIHRoaXMucm9vdClcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE5hbWVzcGFjZSA9IGZ1bmN0aW9uIGdldE5hbWVzcGFjZSAocGF0aCkge1xuICB2YXIgbW9kdWxlID0gdGhpcy5yb290O1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwga2V5KSB7XG4gICAgbW9kdWxlID0gbW9kdWxlLmdldENoaWxkKGtleSk7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSArIChtb2R1bGUubmFtZXNwYWNlZCA/IGtleSArICcvJyA6ICcnKVxuICB9LCAnJylcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSQxIChyYXdSb290TW9kdWxlKSB7XG4gIHVwZGF0ZShbXSwgdGhpcy5yb290LCByYXdSb290TW9kdWxlKTtcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIgKHBhdGgsIHJhd01vZHVsZSwgcnVudGltZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggcnVudGltZSA9PT0gdm9pZCAwICkgcnVudGltZSA9IHRydWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRSYXdNb2R1bGUocGF0aCwgcmF3TW9kdWxlKTtcbiAgfVxuXG4gIHZhciBuZXdNb2R1bGUgPSBuZXcgTW9kdWxlKHJhd01vZHVsZSwgcnVudGltZSk7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMucm9vdCA9IG5ld01vZHVsZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHBhcmVudC5hZGRDaGlsZChwYXRoW3BhdGgubGVuZ3RoIC0gMV0sIG5ld01vZHVsZSk7XG4gIH1cblxuICAvLyByZWdpc3RlciBuZXN0ZWQgbW9kdWxlc1xuICBpZiAocmF3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlLm1vZHVsZXMsIGZ1bmN0aW9uIChyYXdDaGlsZE1vZHVsZSwga2V5KSB7XG4gICAgICB0aGlzJDEucmVnaXN0ZXIocGF0aC5jb25jYXQoa2V5KSwgcmF3Q2hpbGRNb2R1bGUsIHJ1bnRpbWUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlciAocGF0aCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICB2YXIga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICBpZiAoIXBhcmVudC5nZXRDaGlsZChrZXkpLnJ1bnRpbWUpIHsgcmV0dXJuIH1cblxuICBwYXJlbnQucmVtb3ZlQ2hpbGQoa2V5KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZSAocGF0aCwgdGFyZ2V0TW9kdWxlLCBuZXdNb2R1bGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRSYXdNb2R1bGUocGF0aCwgbmV3TW9kdWxlKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0YXJnZXQgbW9kdWxlXG4gIHRhcmdldE1vZHVsZS51cGRhdGUobmV3TW9kdWxlKTtcblxuICAvLyB1cGRhdGUgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgICBpZiAoIXRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJbdnVleF0gdHJ5aW5nIHRvIGFkZCBhIG5ldyBtb2R1bGUgJ1wiICsga2V5ICsgXCInIG9uIGhvdCByZWxvYWRpbmcsIFwiICtcbiAgICAgICAgICAgICdtYW51YWwgcmVsb2FkIGlzIG5lZWRlZCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKFxuICAgICAgICBwYXRoLmNvbmNhdChrZXkpLFxuICAgICAgICB0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSxcbiAgICAgICAgbmV3TW9kdWxlLm1vZHVsZXNba2V5XVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGZ1bmN0aW9uQXNzZXJ0ID0ge1xuICBhc3NlcnQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nOyB9LFxuICBleHBlY3RlZDogJ2Z1bmN0aW9uJ1xufTtcblxudmFyIG9iamVjdEFzc2VydCA9IHtcbiAgYXNzZXJ0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5oYW5kbGVyID09PSAnZnVuY3Rpb24nKTsgfSxcbiAgZXhwZWN0ZWQ6ICdmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBcImhhbmRsZXJcIiBmdW5jdGlvbidcbn07XG5cbnZhciBhc3NlcnRUeXBlcyA9IHtcbiAgZ2V0dGVyczogZnVuY3Rpb25Bc3NlcnQsXG4gIG11dGF0aW9uczogZnVuY3Rpb25Bc3NlcnQsXG4gIGFjdGlvbnM6IG9iamVjdEFzc2VydFxufTtcblxuZnVuY3Rpb24gYXNzZXJ0UmF3TW9kdWxlIChwYXRoLCByYXdNb2R1bGUpIHtcbiAgT2JqZWN0LmtleXMoYXNzZXJ0VHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghcmF3TW9kdWxlW2tleV0pIHsgcmV0dXJuIH1cblxuICAgIHZhciBhc3NlcnRPcHRpb25zID0gYXNzZXJ0VHlwZXNba2V5XTtcblxuICAgIGZvckVhY2hWYWx1ZShyYXdNb2R1bGVba2V5XSwgZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgICBhc3NlcnQoXG4gICAgICAgIGFzc2VydE9wdGlvbnMuYXNzZXJ0KHZhbHVlKSxcbiAgICAgICAgbWFrZUFzc2VydGlvbk1lc3NhZ2UocGF0aCwga2V5LCB0eXBlLCB2YWx1ZSwgYXNzZXJ0T3B0aW9ucy5leHBlY3RlZClcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlQXNzZXJ0aW9uTWVzc2FnZSAocGF0aCwga2V5LCB0eXBlLCB2YWx1ZSwgZXhwZWN0ZWQpIHtcbiAgdmFyIGJ1ZiA9IGtleSArIFwiIHNob3VsZCBiZSBcIiArIGV4cGVjdGVkICsgXCIgYnV0IFxcXCJcIiArIGtleSArIFwiLlwiICsgdHlwZSArIFwiXFxcIlwiO1xuICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XG4gICAgYnVmICs9IFwiIGluIG1vZHVsZSBcXFwiXCIgKyAocGF0aC5qb2luKCcuJykpICsgXCJcXFwiXCI7XG4gIH1cbiAgYnVmICs9IFwiIGlzIFwiICsgKEpTT04uc3RyaW5naWZ5KHZhbHVlKSkgKyBcIi5cIjtcbiAgcmV0dXJuIGJ1ZlxufVxuXG52YXIgVnVlOyAvLyBiaW5kIG9uIGluc3RhbGxcblxudmFyIFN0b3JlID0gZnVuY3Rpb24gU3RvcmUgKG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIC8vIEF1dG8gaW5zdGFsbCBpZiBpdCBpcyBub3QgZG9uZSB5ZXQgYW5kIGB3aW5kb3dgIGhhcyBgVnVlYC5cbiAgLy8gVG8gYWxsb3cgdXNlcnMgdG8gYXZvaWQgYXV0by1pbnN0YWxsYXRpb24gaW4gc29tZSBjYXNlcyxcbiAgLy8gdGhpcyBjb2RlIHNob3VsZCBiZSBwbGFjZWQgaGVyZS4gU2VlICM3MzFcbiAgaWYgKCFWdWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICAgIGluc3RhbGwod2luZG93LlZ1ZSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChWdWUsIFwibXVzdCBjYWxsIFZ1ZS51c2UoVnVleCkgYmVmb3JlIGNyZWF0aW5nIGEgc3RvcmUgaW5zdGFuY2UuXCIpO1xuICAgIGFzc2VydCh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcsIFwidnVleCByZXF1aXJlcyBhIFByb21pc2UgcG9seWZpbGwgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIFN0b3JlLCBcIlN0b3JlIG11c3QgYmUgY2FsbGVkIHdpdGggdGhlIG5ldyBvcGVyYXRvci5cIik7XG4gIH1cblxuICB2YXIgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2luczsgaWYgKCBwbHVnaW5zID09PSB2b2lkIDAgKSBwbHVnaW5zID0gW107XG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDsgaWYgKCBzdHJpY3QgPT09IHZvaWQgMCApIHN0cmljdCA9IGZhbHNlO1xuXG4gIHZhciBzdGF0ZSA9IG9wdGlvbnMuc3RhdGU7IGlmICggc3RhdGUgPT09IHZvaWQgMCApIHN0YXRlID0ge307XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKCkgfHwge307XG4gIH1cblxuICAvLyBzdG9yZSBpbnRlcm5hbCBzdGF0ZVxuICB0aGlzLl9jb21taXR0aW5nID0gZmFsc2U7XG4gIHRoaXMuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX21vZHVsZXMgPSBuZXcgTW9kdWxlQ29sbGVjdGlvbihvcHRpb25zKTtcbiAgdGhpcy5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX3dhdGNoZXJWTSA9IG5ldyBWdWUoKTtcblxuICAvLyBiaW5kIGNvbW1pdCBhbmQgZGlzcGF0Y2ggdG8gc2VsZlxuICB2YXIgc3RvcmUgPSB0aGlzO1xuICB2YXIgcmVmID0gdGhpcztcbiAgdmFyIGRpc3BhdGNoID0gcmVmLmRpc3BhdGNoO1xuICB2YXIgY29tbWl0ID0gcmVmLmNvbW1pdDtcbiAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIGJvdW5kRGlzcGF0Y2ggKHR5cGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2guY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZClcbiAgfTtcbiAgdGhpcy5jb21taXQgPSBmdW5jdGlvbiBib3VuZENvbW1pdCAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21taXQuY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZCwgb3B0aW9ucylcbiAgfTtcblxuICAvLyBzdHJpY3QgbW9kZVxuICB0aGlzLnN0cmljdCA9IHN0cmljdDtcblxuICAvLyBpbml0IHJvb3QgbW9kdWxlLlxuICAvLyB0aGlzIGFsc28gcmVjdXJzaXZlbHkgcmVnaXN0ZXJzIGFsbCBzdWItbW9kdWxlc1xuICAvLyBhbmQgY29sbGVjdHMgYWxsIG1vZHVsZSBnZXR0ZXJzIGluc2lkZSB0aGlzLl93cmFwcGVkR2V0dGVyc1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHN0YXRlLCBbXSwgdGhpcy5fbW9kdWxlcy5yb290KTtcblxuICAvLyBpbml0aWFsaXplIHRoZSBzdG9yZSB2bSwgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSByZWFjdGl2aXR5XG4gIC8vIChhbHNvIHJlZ2lzdGVycyBfd3JhcHBlZEdldHRlcnMgYXMgY29tcHV0ZWQgcHJvcGVydGllcylcbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHN0YXRlKTtcblxuICAvLyBhcHBseSBwbHVnaW5zXG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7IHJldHVybiBwbHVnaW4odGhpcyQxKTsgfSk7XG5cbiAgaWYgKFZ1ZS5jb25maWcuZGV2dG9vbHMpIHtcbiAgICBkZXZ0b29sUGx1Z2luKHRoaXMpO1xuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBzdGF0ZTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fdm0uX2RhdGEuJCRzdGF0ZVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLnNldCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KGZhbHNlLCBcIlVzZSBzdG9yZS5yZXBsYWNlU3RhdGUoKSB0byBleHBsaWNpdCByZXBsYWNlIHN0b3JlIHN0YXRlLlwiKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIGNvbW1pdCAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBjb21taXRcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuICAgIHZhciBvcHRpb25zID0gcmVmLm9wdGlvbnM7XG5cbiAgdmFyIG11dGF0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX211dGF0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIGNvbW1pdEl0ZXJhdG9yIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIobXV0YXRpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgb3B0aW9ucyAmJiBvcHRpb25zLnNpbGVudFxuICApIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIlt2dWV4XSBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUgKyBcIi4gU2lsZW50IG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBcIiArXG4gICAgICAnVXNlIHRoZSBmaWx0ZXIgZnVuY3Rpb25hbGl0eSBpbiB0aGUgdnVlLWRldnRvb2xzJ1xuICAgICk7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoIChfdHlwZSwgX3BheWxvYWQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgZGlzcGF0Y2hcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG5cbiAgdmFyIGFjdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9hY3Rpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gYWN0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViKGFjdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSk7XG5cbiAgcmV0dXJuIGVudHJ5Lmxlbmd0aCA+IDFcbiAgICA/IFByb21pc2UuYWxsKGVudHJ5Lm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcihwYXlsb2FkKTsgfSkpXG4gICAgOiBlbnRyeVswXShwYXlsb2FkKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSAoZm4pIHtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoZm4sIHRoaXMuX3N1YnNjcmliZXJzKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZUFjdGlvbiA9IGZ1bmN0aW9uIHN1YnNjcmliZUFjdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoZm4sIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzKVxufTtcblxuU3RvcmUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gd2F0Y2ggKGdldHRlciwgY2IsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCh0eXBlb2YgZ2V0dGVyID09PSAnZnVuY3Rpb24nLCBcInN0b3JlLndhdGNoIG9ubHkgYWNjZXB0cyBhIGZ1bmN0aW9uLlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fd2F0Y2hlclZNLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiBnZXR0ZXIodGhpcyQxLnN0YXRlLCB0aGlzJDEuZ2V0dGVycyk7IH0sIGNiLCBvcHRpb25zKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnJlcGxhY2VTdGF0ZSA9IGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAoc3RhdGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuX3ZtLl9kYXRhLiQkc3RhdGUgPSBzdGF0ZTtcbiAgfSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZSAocGF0aCwgcmF3TW9kdWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgICBhc3NlcnQocGF0aC5sZW5ndGggPiAwLCAnY2Fubm90IHJlZ2lzdGVyIHRoZSByb290IG1vZHVsZSBieSB1c2luZyByZWdpc3Rlck1vZHVsZS4nKTtcbiAgfVxuXG4gIHRoaXMuX21vZHVsZXMucmVnaXN0ZXIocGF0aCwgcmF3TW9kdWxlKTtcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCB0aGlzLnN0YXRlLCBwYXRoLCB0aGlzLl9tb2R1bGVzLmdldChwYXRoKSwgb3B0aW9ucy5wcmVzZXJ2ZVN0YXRlKTtcbiAgLy8gcmVzZXQgc3RvcmUgdG8gdXBkYXRlIGdldHRlcnMuLi5cbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHRoaXMuc3RhdGUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnVucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyTW9kdWxlIChwYXRoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgfVxuXG4gIHRoaXMuX21vZHVsZXMudW5yZWdpc3RlcihwYXRoKTtcbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUodGhpcyQxLnN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgVnVlLmRlbGV0ZShwYXJlbnRTdGF0ZSwgcGF0aFtwYXRoLmxlbmd0aCAtIDFdKTtcbiAgfSk7XG4gIHJlc2V0U3RvcmUodGhpcyk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuaG90VXBkYXRlID0gZnVuY3Rpb24gaG90VXBkYXRlIChuZXdPcHRpb25zKSB7XG4gIHRoaXMuX21vZHVsZXMudXBkYXRlKG5ld09wdGlvbnMpO1xuICByZXNldFN0b3JlKHRoaXMsIHRydWUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLl93aXRoQ29tbWl0ID0gZnVuY3Rpb24gX3dpdGhDb21taXQgKGZuKSB7XG4gIHZhciBjb21taXR0aW5nID0gdGhpcy5fY29tbWl0dGluZztcbiAgdGhpcy5fY29tbWl0dGluZyA9IHRydWU7XG4gIGZuKCk7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBjb21taXR0aW5nO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN0b3JlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIGdlbmVyaWNTdWJzY3JpYmUgKGZuLCBzdWJzKSB7XG4gIGlmIChzdWJzLmluZGV4T2YoZm4pIDwgMCkge1xuICAgIHN1YnMucHVzaChmbik7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IHN1YnMuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgc3Vicy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmUgKHN0b3JlLCBob3QpIHtcbiAgc3RvcmUuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc3RhdGUgPSBzdG9yZS5zdGF0ZTtcbiAgLy8gaW5pdCBhbGwgbW9kdWxlc1xuICBpbnN0YWxsTW9kdWxlKHN0b3JlLCBzdGF0ZSwgW10sIHN0b3JlLl9tb2R1bGVzLnJvb3QsIHRydWUpO1xuICAvLyByZXNldCB2bVxuICByZXNldFN0b3JlVk0oc3RvcmUsIHN0YXRlLCBob3QpO1xufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlVk0gKHN0b3JlLCBzdGF0ZSwgaG90KSB7XG4gIHZhciBvbGRWbSA9IHN0b3JlLl92bTtcblxuICAvLyBiaW5kIHN0b3JlIHB1YmxpYyBnZXR0ZXJzXG4gIHN0b3JlLmdldHRlcnMgPSB7fTtcbiAgdmFyIHdyYXBwZWRHZXR0ZXJzID0gc3RvcmUuX3dyYXBwZWRHZXR0ZXJzO1xuICB2YXIgY29tcHV0ZWQgPSB7fTtcbiAgZm9yRWFjaFZhbHVlKHdyYXBwZWRHZXR0ZXJzLCBmdW5jdGlvbiAoZm4sIGtleSkge1xuICAgIC8vIHVzZSBjb21wdXRlZCB0byBsZXZlcmFnZSBpdHMgbGF6eS1jYWNoaW5nIG1lY2hhbmlzbVxuICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmbihzdG9yZSk7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0b3JlLmdldHRlcnMsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5fdm1ba2V5XTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUgLy8gZm9yIGxvY2FsIGdldHRlcnNcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdXNlIGEgVnVlIGluc3RhbmNlIHRvIHN0b3JlIHRoZSBzdGF0ZSB0cmVlXG4gIC8vIHN1cHByZXNzIHdhcm5pbmdzIGp1c3QgaW4gY2FzZSB0aGUgdXNlciBoYXMgYWRkZWRcbiAgLy8gc29tZSBmdW5reSBnbG9iYWwgbWl4aW5zXG4gIHZhciBzaWxlbnQgPSBWdWUuY29uZmlnLnNpbGVudDtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSB0cnVlO1xuICBzdG9yZS5fdm0gPSBuZXcgVnVlKHtcbiAgICBkYXRhOiB7XG4gICAgICAkJHN0YXRlOiBzdGF0ZVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IGNvbXB1dGVkXG4gIH0pO1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHNpbGVudDtcblxuICAvLyBlbmFibGUgc3RyaWN0IG1vZGUgZm9yIG5ldyB2bVxuICBpZiAoc3RvcmUuc3RyaWN0KSB7XG4gICAgZW5hYmxlU3RyaWN0TW9kZShzdG9yZSk7XG4gIH1cblxuICBpZiAob2xkVm0pIHtcbiAgICBpZiAoaG90KSB7XG4gICAgICAvLyBkaXNwYXRjaCBjaGFuZ2VzIGluIGFsbCBzdWJzY3JpYmVkIHdhdGNoZXJzXG4gICAgICAvLyB0byBmb3JjZSBnZXR0ZXIgcmUtZXZhbHVhdGlvbiBmb3IgaG90IHJlbG9hZGluZy5cbiAgICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2xkVm0uX2RhdGEuJCRzdGF0ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9sZFZtLiRkZXN0cm95KCk7IH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGxNb2R1bGUgKHN0b3JlLCByb290U3RhdGUsIHBhdGgsIG1vZHVsZSwgaG90KSB7XG4gIHZhciBpc1Jvb3QgPSAhcGF0aC5sZW5ndGg7XG4gIHZhciBuYW1lc3BhY2UgPSBzdG9yZS5fbW9kdWxlcy5nZXROYW1lc3BhY2UocGF0aCk7XG5cbiAgLy8gcmVnaXN0ZXIgaW4gbmFtZXNwYWNlIG1hcFxuICBpZiAobW9kdWxlLm5hbWVzcGFjZWQpIHtcbiAgICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdID0gbW9kdWxlO1xuICB9XG5cbiAgLy8gc2V0IHN0YXRlXG4gIGlmICghaXNSb290ICYmICFob3QpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZShyb290U3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICB2YXIgbW9kdWxlTmFtZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICBWdWUuc2V0KHBhcmVudFN0YXRlLCBtb2R1bGVOYW1lLCBtb2R1bGUuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGxvY2FsID0gbW9kdWxlLmNvbnRleHQgPSBtYWtlTG9jYWxDb250ZXh0KHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpO1xuXG4gIG1vZHVsZS5mb3JFYWNoTXV0YXRpb24oZnVuY3Rpb24gKG11dGF0aW9uLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJNdXRhdGlvbihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIG11dGF0aW9uLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQWN0aW9uKGZ1bmN0aW9uIChhY3Rpb24sIGtleSkge1xuICAgIHZhciB0eXBlID0gYWN0aW9uLnJvb3QgPyBrZXkgOiBuYW1lc3BhY2UgKyBrZXk7XG4gICAgdmFyIGhhbmRsZXIgPSBhY3Rpb24uaGFuZGxlciB8fCBhY3Rpb247XG4gICAgcmVnaXN0ZXJBY3Rpb24oc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hHZXR0ZXIoZnVuY3Rpb24gKGdldHRlciwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyR2V0dGVyKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgZ2V0dGVyLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNoaWxkLCBrZXkpIHtcbiAgICBpbnN0YWxsTW9kdWxlKHN0b3JlLCByb290U3RhdGUsIHBhdGguY29uY2F0KGtleSksIGNoaWxkLCBob3QpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBtYWtlIGxvY2FsaXplZCBkaXNwYXRjaCwgY29tbWl0LCBnZXR0ZXJzIGFuZCBzdGF0ZVxuICogaWYgdGhlcmUgaXMgbm8gbmFtZXNwYWNlLCBqdXN0IHVzZSByb290IG9uZXNcbiAqL1xuZnVuY3Rpb24gbWFrZUxvY2FsQ29udGV4dCAoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCkge1xuICB2YXIgbm9OYW1lc3BhY2UgPSBuYW1lc3BhY2UgPT09ICcnO1xuXG4gIHZhciBsb2NhbCA9IHtcbiAgICBkaXNwYXRjaDogbm9OYW1lc3BhY2UgPyBzdG9yZS5kaXNwYXRjaCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX2FjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIGFjdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2godHlwZSwgcGF5bG9hZClcbiAgICB9LFxuXG4gICAgY29tbWl0OiBub05hbWVzcGFjZSA/IHN0b3JlLmNvbW1pdCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX211dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgbXV0YXRpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RvcmUuY29tbWl0KHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXR0ZXJzIGFuZCBzdGF0ZSBvYmplY3QgbXVzdCBiZSBnb3R0ZW4gbGF6aWx5XG4gIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIGNoYW5nZWQgYnkgdm0gdXBkYXRlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxvY2FsLCB7XG4gICAgZ2V0dGVyczoge1xuICAgICAgZ2V0OiBub05hbWVzcGFjZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlTG9jYWxHZXR0ZXJzKHN0b3JlLCBuYW1lc3BhY2UpOyB9XG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2NhbFxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYWxHZXR0ZXJzIChzdG9yZSwgbmFtZXNwYWNlKSB7XG4gIHZhciBnZXR0ZXJzUHJveHkgPSB7fTtcblxuICB2YXIgc3BsaXRQb3MgPSBuYW1lc3BhY2UubGVuZ3RoO1xuICBPYmplY3Qua2V5cyhzdG9yZS5nZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgLy8gc2tpcCBpZiB0aGUgdGFyZ2V0IGdldHRlciBpcyBub3QgbWF0Y2ggdGhpcyBuYW1lc3BhY2VcbiAgICBpZiAodHlwZS5zbGljZSgwLCBzcGxpdFBvcykgIT09IG5hbWVzcGFjZSkgeyByZXR1cm4gfVxuXG4gICAgLy8gZXh0cmFjdCBsb2NhbCBnZXR0ZXIgdHlwZVxuICAgIHZhciBsb2NhbFR5cGUgPSB0eXBlLnNsaWNlKHNwbGl0UG9zKTtcblxuICAgIC8vIEFkZCBhIHBvcnQgdG8gdGhlIGdldHRlcnMgcHJveHkuXG4gICAgLy8gRGVmaW5lIGFzIGdldHRlciBwcm9wZXJ0eSBiZWNhdXNlXG4gICAgLy8gd2UgZG8gbm90IHdhbnQgdG8gZXZhbHVhdGUgdGhlIGdldHRlcnMgaW4gdGhpcyB0aW1lLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnZXR0ZXJzUHJveHksIGxvY2FsVHlwZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzW3R5cGVdOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZ2V0dGVyc1Byb3h5XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTXV0YXRpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fbXV0YXRpb25zW3R5cGVdIHx8IChzdG9yZS5fbXV0YXRpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRNdXRhdGlvbkhhbmRsZXIgKHBheWxvYWQpIHtcbiAgICBoYW5kbGVyLmNhbGwoc3RvcmUsIGxvY2FsLnN0YXRlLCBwYXlsb2FkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX2FjdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9hY3Rpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRBY3Rpb25IYW5kbGVyIChwYXlsb2FkLCBjYikge1xuICAgIHZhciByZXMgPSBoYW5kbGVyLmNhbGwoc3RvcmUsIHtcbiAgICAgIGRpc3BhdGNoOiBsb2NhbC5kaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogbG9jYWwuY29tbWl0LFxuICAgICAgZ2V0dGVyczogbG9jYWwuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBsb2NhbC5zdGF0ZSxcbiAgICAgIHJvb3RHZXR0ZXJzOiBzdG9yZS5nZXR0ZXJzLFxuICAgICAgcm9vdFN0YXRlOiBzdG9yZS5zdGF0ZVxuICAgIH0sIHBheWxvYWQsIGNiKTtcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9XG4gICAgaWYgKHN0b3JlLl9kZXZ0b29sSG9vaykge1xuICAgICAgcmV0dXJuIHJlcy5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0b3JlLl9kZXZ0b29sSG9vay5lbWl0KCd2dWV4OmVycm9yJywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHZXR0ZXIgKHN0b3JlLCB0eXBlLCByYXdHZXR0ZXIsIGxvY2FsKSB7XG4gIGlmIChzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gZHVwbGljYXRlIGdldHRlciBrZXk6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0gPSBmdW5jdGlvbiB3cmFwcGVkR2V0dGVyIChzdG9yZSkge1xuICAgIHJldHVybiByYXdHZXR0ZXIoXG4gICAgICBsb2NhbC5zdGF0ZSwgLy8gbG9jYWwgc3RhdGVcbiAgICAgIGxvY2FsLmdldHRlcnMsIC8vIGxvY2FsIGdldHRlcnNcbiAgICAgIHN0b3JlLnN0YXRlLCAvLyByb290IHN0YXRlXG4gICAgICBzdG9yZS5nZXR0ZXJzIC8vIHJvb3QgZ2V0dGVyc1xuICAgIClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlU3RyaWN0TW9kZSAoc3RvcmUpIHtcbiAgc3RvcmUuX3ZtLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhLiQkc3RhdGUgfSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiRG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpO1xuICAgIH1cbiAgfSwgeyBkZWVwOiB0cnVlLCBzeW5jOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRTdGF0ZSAoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgPyBwYXRoLnJlZHVjZShmdW5jdGlvbiAoc3RhdGUsIGtleSkgeyByZXR1cm4gc3RhdGVba2V5XTsgfSwgc3RhdGUpXG4gICAgOiBzdGF0ZVxufVxuXG5mdW5jdGlvbiB1bmlmeU9iamVjdFN0eWxlICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gIGlmIChpc09iamVjdCh0eXBlKSAmJiB0eXBlLnR5cGUpIHtcbiAgICBvcHRpb25zID0gcGF5bG9hZDtcbiAgICBwYXlsb2FkID0gdHlwZTtcbiAgICB0eXBlID0gdHlwZS50eXBlO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnLCAoXCJFeHBlY3RzIHN0cmluZyBhcyB0aGUgdHlwZSwgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiB0eXBlKSArIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkLCBvcHRpb25zOiBvcHRpb25zIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoX1Z1ZSkge1xuICBpZiAoVnVlICYmIF9WdWUgPT09IFZ1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnW3Z1ZXhdIGFscmVhZHkgaW5zdGFsbGVkLiBWdWUudXNlKFZ1ZXgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIFZ1ZSA9IF9WdWU7XG4gIGFwcGx5TWl4aW4oVnVlKTtcbn1cblxudmFyIG1hcFN0YXRlID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIHN0YXRlcykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChzdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRTdGF0ZSAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLiRzdG9yZS5zdGF0ZTtcbiAgICAgIHZhciBnZXR0ZXJzID0gdGhpcy4kc3RvcmUuZ2V0dGVycztcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwU3RhdGUnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbW9kdWxlLmNvbnRleHQuc3RhdGU7XG4gICAgICAgIGdldHRlcnMgPSBtb2R1bGUuY29udGV4dC5nZXR0ZXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCBzdGF0ZSwgZ2V0dGVycylcbiAgICAgICAgOiBzdGF0ZVt2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBNdXRhdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgbXV0YXRpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKG11dGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZE11dGF0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICB2YXIgY29tbWl0ID0gdGhpcy4kc3RvcmUuY29tbWl0O1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBNdXRhdGlvbnMnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbW1pdCA9IG1vZHVsZS5jb250ZXh0LmNvbW1pdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtjb21taXRdLmNvbmNhdChhcmdzKSlcbiAgICAgICAgOiBjb21taXQuYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBHZXR0ZXJzID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGdldHRlcnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICB2YWwgPSBuYW1lc3BhY2UgKyB2YWw7XG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRHZXR0ZXIgKCkge1xuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBHZXR0ZXJzJywgbmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEodmFsIGluIHRoaXMuJHN0b3JlLmdldHRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gZ2V0dGVyOiBcIiArIHZhbCkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEFjdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgYWN0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkQWN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLiRzdG9yZS5kaXNwYXRjaDtcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwQWN0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2ggPSBtb2R1bGUuY29udGV4dC5kaXNwYXRjaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtkaXNwYXRjaF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGRpc3BhdGNoLmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7IHJldHVybiAoe1xuICBtYXBTdGF0ZTogbWFwU3RhdGUuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBHZXR0ZXJzOiBtYXBHZXR0ZXJzLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBBY3Rpb25zOiBtYXBBY3Rpb25zLmJpbmQobnVsbCwgbmFtZXNwYWNlKVxufSk7IH07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1hcCAobWFwKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG1hcClcbiAgICA/IG1hcC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDoga2V5IH0pOyB9KVxuICAgIDogT2JqZWN0LmtleXMobWFwKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDogbWFwW2tleV0gfSk7IH0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWVzcGFjZSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1hcCkge1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xuICAgICAgbWFwID0gbmFtZXNwYWNlO1xuICAgICAgbmFtZXNwYWNlID0gJyc7XG4gICAgfSBlbHNlIGlmIChuYW1lc3BhY2UuY2hhckF0KG5hbWVzcGFjZS5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICBuYW1lc3BhY2UgKz0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gZm4obmFtZXNwYWNlLCBtYXApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TW9kdWxlQnlOYW1lc3BhY2UgKHN0b3JlLCBoZWxwZXIsIG5hbWVzcGFjZSkge1xuICB2YXIgbW9kdWxlID0gc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIW1vZHVsZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIG1vZHVsZSBuYW1lc3BhY2Ugbm90IGZvdW5kIGluIFwiICsgaGVscGVyICsgXCIoKTogXCIgKyBuYW1lc3BhY2UpKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlXG59XG5cbnZhciBpbmRleF9lc20gPSB7XG4gIFN0b3JlOiBTdG9yZSxcbiAgaW5zdGFsbDogaW5zdGFsbCxcbiAgdmVyc2lvbjogJzMuMC4xJyxcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucyxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycyxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucyxcbiAgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnM6IGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzXG59O1xuXG5leHBvcnQgeyBTdG9yZSwgaW5zdGFsbCwgbWFwU3RhdGUsIG1hcE11dGF0aW9ucywgbWFwR2V0dGVycywgbWFwQWN0aW9ucywgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGluZGV4X2VzbTtcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuaW1wb3J0IHtcclxuXHRnZXRTdG9yYWdlXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3V0aWwuanNcIlxyXG5cclxuVnVlLnVzZShWdWV4KVxyXG5cclxuLy8gaW1wb3J0IHVzZXJNb2R1bGUgZnJvbSAnQC9zdG9yZS9tb2R1bGVzL3VzZXJNb2R1bGUuanMnO1xyXG5jb25zdCBzdGF0ZSA9IHtcclxuXHR1c2VyOiB7fSxcclxuXHR0b2tlbjogXCJcIixcclxuXHRjaGF0OiBudWxsLFxyXG59XHJcblxyXG5jb25zdCBtdXRhdGlvbnMgPSB7XHJcblx0Ly8g5a2Y5YKodG9rZW5cclxuXHRTRVRfVE9LRU46IChzdGF0ZSwgdG9rZW4pID0+IHtcclxuXHRcdHN0YXRlLnRva2VuID0gdG9rZW4gfHwgJydcclxuXHR9LFxyXG5cdFNFVF9VU0VSOiAoc3RhdGUsIHVzZXIpID0+IHtcclxuXHRcdHN0YXRlLnVzZXIgPSB1c2VyIHx8IHt9XHJcblx0fSxcclxuXHRTRVRfQ0hBVDogKHN0YXRlLCBjaGF0KSA9PiB7XHJcblx0XHRzdGF0ZS5jaGF0ID0gY2hhdCB8fCBudWxsXHJcblx0fVxyXG59XHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcblx0Ly8gYXBwIGluaXQgXHJcblx0YXN5bmMgaW5pdCh7XHJcblx0XHRjb21taXRcclxuXHR9LCBkYXRhKSB7XHJcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U3RvcmFnZSgndXNlcicpXHJcblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IGdldFN0b3JhZ2UoJ3Rva2VuJylcclxuXHRcdGNvbW1pdCgnU0VUX1RPS0VOJywgdG9rZW4pXHJcblx0XHRjb21taXQoJ1NFVF9VU0VSJywgdXNlcilcclxuXHR9LFxyXG5cdFxyXG5cdFxyXG5cdGxvZ2luOiAoe1xyXG5cdFx0Y29tbWl0XHJcblx0fSwgdXNlcikgPT4ge1xyXG5cdFx0Y29tbWl0KCdTRVRfVE9LRU4nLCB1c2VyLnRva2VuKVxyXG5cdFx0Y29tbWl0KCdTRVRfVVNFUicsIHVzZXIpXHJcblxyXG5cdFx0Ly8g5a2Y5YKo5Yiw5pys5ZywXHJcblx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdGtleTogXCJ1c2VyXCIsXHJcblx0XHRcdGRhdGE6IHVzZXJcclxuXHRcdH0pXHJcblx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdGtleTogXCJ0b2tlblwiLFxyXG5cdFx0XHRkYXRhOiB1c2VyLnRva2VuXHJcblx0XHR9KVxyXG5cclxuXHRcdC8vIOi/nuaOpXNvY2tldFxyXG5cdFx0Ly8gbGV0IGNoYXQgPSBuZXcgQ2hhdCh7XHJcblx0XHQvLyBcdHVzZXIsXHJcblx0XHQvLyBcdHVybDogY29uZmlnLndzVXJsXHJcblx0XHQvLyB9KVxyXG5cdFx0Ly8gY29tbWl0KCdTRVRfQ0hBVCcsIGNoYXQpXHJcblx0fSxcclxuXHRsb2dvdXQ6ICh7XHJcblx0XHRjb21taXQsXHJcblx0XHRzdGF0ZVxyXG5cdH0pID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwibG91dFwiKVxyXG5cdFx0Y29tbWl0KCdTRVRfVE9LRU4nLCBcIlwiKVxyXG5cdFx0Y29tbWl0KCdTRVRfVVNFUicsIFwiXCIpXHJcblxyXG5cdFx0Ly8g5riF6Zmk57yT5a2YXHJcblx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuXHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygndXNlcicpXHJcblx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbidcclxuXHRcdH0pXHJcblx0XHQvLyDlhbPpl61zb2NrZXTov57mjqVcclxuXHRcdC8vIHN0YXRlLmNoYXQuY2xvc2UoKVxyXG5cdH0sXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcblx0c3RyaWN0OiB0cnVlLCAvL+W8gOWQr+S4peagvOaooeW8j+WQju+8jOWPquiDvemAmui/h211dGF0aW9u5p2l5pS55Y+Y54q25oCB77yI5LiN5pSv5oyB5byC5q2l77yJ5ZCm5YiZ5Lya5oql6ZSZXHJcblx0c3RhdGUsXHJcblx0bXV0YXRpb25zLFxyXG5cdGFjdGlvbnNcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImNvbnN0IHByb21pc2ljID0gZnVuY3Rpb24oZnVuYykge1xyXG5cdHJldHVybiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgYXJncyA9IE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGZ1bmMoYXJncyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG4vLyBzaG93VG9hc3RcclxuY29uc3QgX3RvYXN0ID0gZnVuY3Rpb24odGl0bGUsIHBvc2l0aW9uLCBpY29uKSB7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHR0aXRsZTogdGl0bGUsXHJcblx0XHRpY29uOiBpY29uIHx8IFwibm9uZVwiLFxyXG5cdFx0cG9zaXRpb246IHBvc2l0aW9uIHx8IFwidG9wXCJcclxuXHR9KVxyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0U3RvcmFnZSA9IChrZXkpID0+IHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0dW5pLmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRyZWplY3QoZXJyb3IpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRfdG9hc3QsXHJcblx0Z2V0U3RvcmFnZVxyXG59O1xyXG4iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpY29uZm9udFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIlxuICB9LFxuICBcImZsZXgtMVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJmbGV4LWNlbnRlclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwianVzdGlmeS1iZXR3ZWVuXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwianVzdGlmeS1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImp1c3RpZnktYXJvdW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC13cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcIm1sLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwXG4gIH0sXG4gIFwibWwtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1sLTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtbC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWwtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1sLTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtci0wXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJtci0xXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1yLTJcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXItM1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtci00XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1yLTVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXQtMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXQtM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXQtNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXQtNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWItMVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWItMlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWItM1wiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWItNFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWItNVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXgtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm14LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXgtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm14LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJteS0xXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXktMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm15LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJteS00XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXktNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBsLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGwtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwbC0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBsLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGwtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwci0xXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwci0yXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwci0zXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwci00XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweS0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweS0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJweS0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJweS00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJweS01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJmb250LTIwXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBycHhcIlxuICB9LFxuICBcImZvbnQtMjVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXJweFwiXG4gIH0sXG4gIFwiZm9udC0zMFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJmb250LTM1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzVycHhcIlxuICB9LFxuICBcImZvbnQtNDBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwidGV4dC1ib2xkXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJ0ZXh0LXdoaXRlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidGV4dC1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0ZXh0LWxlZnRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGV4dC1yaWdodFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidGV4dC1lbGxpcHNpc1wiOiB7XG4gICAgXCJsaW5lc1wiOiAxXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiMwMDYyY2NcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzU0NWI2MlwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZTdlMzRcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctaG92ZXItaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTE3YThiXCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWhvdmVyLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2QzOWUwMFwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYmQyMTMwXCJcbiAgfSxcbiAgXCJiZy1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGFlMGU1XCJcbiAgfSxcbiAgXCJiZy1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFkMjEyNFwiXG4gIH0sXG4gIFwiYmctd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiYmctdHJhbnNwYXJlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMSlcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC4xKVwiXG4gIH0sXG4gIFwiZm9udC14c1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJmb250LXNtXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRycHhcIlxuICB9LFxuICBcImZvbnQtbWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNnJweFwiXG4gIH0sXG4gIFwiZm9udC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LW1haW4tY29sb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDEpXCJcbiAgfSxcbiAgXCJ0ZXh0LXNlYy1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC42KVwiXG4gIH0sXG4gIFwidGV4dC10aHJlZS1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC40KVwiXG4gIH0sXG4gIFwidGV4dC1ibHVlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzUyNjA5MVwiXG4gIH0sXG4gIFwiYmctZGFyay1jb2xvclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMilcIlxuICB9LFxuICBcImJnLWNvbG9yLTFcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNDQsMjQ0LDI0NCwxKVwiXG4gIH0sXG4gIFwiYmctY29sb3ItMlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0MywyNDQsMjQ2LDEpXCJcbiAgfSxcbiAgXCJiZy1tYWluXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZGVkZWRcIlxuICB9LFxuICBcInllbGxvd1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyMjgsNDksMSlcIlxuICB9LFxuICBcInJlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSw5Myw5MSwxKVwiXG4gIH0sXG4gIFwiYmx1ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDg3LDE1MywyNTUsMSlcIlxuICB9LFxuICBcInJvdW5kLXNtXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVycHhcIlxuICB9LFxuICBcInJvdW5kLW1kXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJyb3VuZC1sZ1wiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwiY2lyY2xlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MFxuICB9LFxuICBcImJvcmRlci1jb2xvclwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC4xKVwiXG4gIH0sXG4gIFwidGVtcC1iZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMylcIlxuICB9LFxuICBcInRlbXAtYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIyXCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNhYmFkYTc2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYWJhZGE3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2FiYWRhNzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjYWJhZGE3NlwiLFxuICBcIjNmNzU4MjEyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkg6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2FiYWRhNzYmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogW1wibmF2aWdhdGlvbi1iYXJcIiwgXCJcIiwgXCJmbGV4XCIsIFwic3RpY2t5XCJdLFxuICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBfdm0uYmdjIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0eWxlOiBcImhlaWdodDpcIiArIF92bS5zdGF0dXNCYXJIZWlnaHQgKyBcInB4XCIgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgXCJ3LTEwMFwiLFxuICAgICAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJqdXN0aWZ5LWJldHdlZW5cIixcbiAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICBcImZsZXgtcm93XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJmbGV4XCIsIFwiZmxleC1yb3dcIiwgXCJtbC0zXCJdIH0sIFtcbiAgICAgICAgICAgIF92bS50aXRsZVxuICAgICAgICAgICAgICA/IF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRleHQtYm9sZFwiLCBcImZvbnQtMzVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0ubnVtYmVyXG4gICAgICAgICAgICAgID8gX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9udC0zNVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLm51bWJlcikgKyBcIilcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLmN1c3RvbVxuICAgICAgICAgICAgPyBfYyhcInZpZXdcIiwge30sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbiAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleC1yb3dcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcXFxcdWU2MzBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGlja0ljb246IF92bS5zZWFyY2ggfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcXFxcdWU2MjlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGlja0ljb246IF92bS5hZGQgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiY1BvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwicG9wdXBcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcInJpZ2h0IHRvcFwiLFxuICAgICAgICAgICAgd2lkdGg6IDI3MCxcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLmhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwb3B1cC1jb250ZW50XCIsIFwiZmxleC0xXCIsIFwicm91bmQtbWRcIl0gfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ubWVudXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicG9wdXAtbGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGwtM1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImZsZXgtMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZsZXgtcm93XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsaWNrTWVudShpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0ZXh0LXdoaXRlXCIsIFwiaWNvbmZvbnRcIiwgXCJtci0yXCIsIFwiZm9udC0zMFwiXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmljb24pKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0ZXh0LXdoaXRlXCIsIFwiZm9udC0zMFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50ZXh0KSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PCEtLSDlr7zoiKrmoI8gLS0+XHJcblx0PHZpZXcgY2xhc3M9XCJuYXZpZ2F0aW9uLWJhciAgZmxleCBzdGlja3lcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmdjIH1cIj5cclxuXHRcdDwhLS0g54q25oCB5qCPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJcIiA6c3R5bGU9XCInaGVpZ2h0OicgKyBzdGF0dXNCYXJIZWlnaHQgKyAncHgnXCI+PC92aWV3PlxyXG5cdFx0PCEtLSDlr7zoiKogLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInctMTAwIGZsZXggIGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgZmxleC1yb3dcIiBzdHlsZT1cImhlaWdodDogOTBycHg7XCI+XHJcblx0XHRcdDwhLS0gbGVmdCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGZsZXgtcm93IG1sLTMgXCI+XHJcblx0XHRcdFx0PCEtLSDmoIfpopggLS0+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWJvbGQgZm9udC0zNVwiIHYtaWY9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC0zNVwiIHYtaWY9XCJudW1iZXJcIj4oe3sgbnVtYmVyIH19KTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIHJpZ2h0IC0tPlxyXG5cdFx0XHQ8IS0tIOiHquWumuS5iSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiB2LWlmPVwiY3VzdG9tXCI+PHNsb3Q+PC9zbG90Pjwvdmlldz5cclxuXHRcdFx0PCEtLSDpu5jorqQgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC1yb3dcIiB2LWVsc2U+XHJcblx0XHRcdFx0PGljb24tYnV0dG9uIEBjbGlja0ljb249XCJzZWFyY2hcIiBpY29uPVwiXFx1ZTYzMFwiPjwvaWNvbi1idXR0b24+XHJcblx0XHRcdFx0PGljb24tYnV0dG9uIEBjbGlja0ljb249XCJhZGRcIiBpY29uPVwiXFx1ZTYyOVwiPjwvaWNvbi1idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5omp5bGV6I+c5Y2VIC0tPlxyXG5cdFx0PGNQb3B1cCByZWY9XCJwb3B1cFwiIHRyYW5zZm9ybU9yaWdpbj1cInJpZ2h0IHRvcFwiIDp3aWR0aD1cIjI3MFwiIDpoZWlnaHQ9XCJoZWlnaHRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwb3B1cC1jb250ZW50IGZsZXgtMSByb3VuZC1tZFwiPlxyXG5cdFx0XHRcdDx2aWV3IEBjbGljaz1cImNsaWNrTWVudShpdGVtKVwiIGNsYXNzPVwicG9wdXAtbGlzdC1pdGVtIHBsLTMgYWxpZ24tY2VudGVyICBmbGV4LTEgZmxleC1yb3dcIiB2LWZvcj1cIihpdGVtLCBpKSBpbiBtZW51c1wiIDprZXk9XCJpXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGUgaWNvbmZvbnQgbXItMiBmb250LTMwXCI+e3sgaXRlbS5pY29uIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvbnQtMzBcIj57eyBpdGVtLnRleHQgfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L2NQb3B1cD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgaWNvbkJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlJztcclxuaW1wb3J0IGNQb3B1cCBmcm9tICcuL2NQb3B1cC52dWUnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0Y1BvcHVwLFxyXG5cdFx0aWNvbkJ1dHRvblxyXG5cdH0sXHJcblx0cHJvcHM6IHtcclxuXHRcdHRpdGxlOiBTdHJpbmcsXHJcblx0XHRudW1iZXI6IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXVxyXG5cdFx0fSxcclxuXHRcdC8vIOWvvOiIquagj+WPs+i+ueiHquWumuS5iVxyXG5cdFx0Y3VzdG9tOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0YmdjOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJyNlZGVkZWQnXHJcblx0XHR9XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0aGVpZ2h0KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tZW51cy5sZW5ndGggKiAxMDA7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHN0YXR1c0JhckhlaWdodDogMCxcclxuXHRcdFx0bWVudXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAn5Y+R6LW3576k6IGKJyxcclxuXHRcdFx0XHRcdGljb246ICdcXHVlNzAxJyxcclxuXHRcdFx0XHRcdGV2ZW50OiAnZ3JvdXBDaGF0J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ+a3u+WKoOaci+WPiycsXHJcblx0XHRcdFx0XHRpY29uOiAnXFx1ZTcwMScsXHJcblx0XHRcdFx0XHRldmVudDogJ2FkZEZyaWVuZCcsXHJcblx0XHRcdFx0XHRwYXRoOiAnL3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ+aJq+S4gOWIsCcsXHJcblx0XHRcdFx0XHRpY29uOiAnXFx1ZTcwMScsXHJcblx0XHRcdFx0XHRldmVudDogJ3FyQ29kZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfluK7liqnkuI7lj43ppognLFxyXG5cdFx0XHRcdFx0aWNvbjogJ1xcdWU3MDEnLFxyXG5cdFx0XHRcdFx0ZXZlbnQ6ICcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHQvLyDojrflj5bnirbmgIHmoI/pq5jluqZcclxuXHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcGx1cy5uYXZpZ2F0b3IuZ2V0U3RhdHVzYmFySGVpZ2h0KCk7XHJcblx0XHQvLyAjZW5kaWZcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGFkZCgpIHtcclxuXHRcdFx0bGV0IHggPSB1bmkudXB4MnB4KDQ2NSk7XHJcblx0XHRcdGxldCB5ID0gdW5pLnVweDJweCgxNzApO1xyXG5cdFx0XHR0aGlzLiRyZWZzLnBvcHVwLm9wZW4oeCwgeSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNlYXJjaCgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3NlYXJjaCcpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjbGlja01lbnUoaXRlbSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtLCAxMjMpO1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiBpdGVtLnBhdGhcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Y2xvc2UoKSB7XHJcblx0XHRcdHRoaXMuJHJlZnMucG9wdXAuY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnN0aWNreSB7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuLnBvcHVwLWNvbnRlbnQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0YzRjNGM7XHJcbn1cclxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViNWI1NzJiJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YjViNTcyYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWI1YjU3MmImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1YjViNTcyYlwiLFxuICBcIjdhNGU3MmZlXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkg6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWI1YjU3MmImc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogW1wiZmxleC1jZW50ZXJcIiwgXCJpY29uLWJveFwiXSxcbiAgICAgIGF0dHJzOiB7IGhvdmVyQ2xhc3M6IFwiYmctaG92ZXItbGlnaHRcIiB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZW1pdChcImNsaWNrSWNvblwiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIl0gfSwgW192bS5fdihfdm0uX3MoX3ZtLl9pY29uKSldKV1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJmbGV4LWNlbnRlciBpY29uLWJveFwiIEBjbGljaz1cIiRlbWl0KCdjbGlja0ljb24nKVwiIGhvdmVyLWNsYXNzPVwiYmctaG92ZXItbGlnaHRcIj5cclxuXHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIj57eyBfaWNvbiB9fTwvdGV4dD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdGljb246IFN0cmluZ1xyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7fTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRfaWNvbigpIHtcclxuXHRcdFx0bGV0IHN0ciA9IHRoaXMuaWNvbjtcclxuXHRcdFx0cmV0dXJuIGV2YWwoXCInXCIgKyBzdHIgKyBcIidcIik7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5pY29uLWJveCB7XHJcblx0aGVpZ2h0OiA5MHJweDtcclxuXHR3aWR0aDogMTEwcnB4O1xyXG59XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YjViNTcyYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWI1YjU3MmImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpY29uLWJveFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI5MHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMTBycHhcIlxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jUG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNjYTA0OTE4JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2NQb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jY2EwNDkxOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNjYTA0OTE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiY2NhMDQ5MThcIixcbiAgXCI1YjhkMzA3ZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJIOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9udnVlL2NvbXBvbmVudHMvdWkvY1BvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NQb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2NhMDQ5MTgmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uc2hvd1xuICAgID8gX2MoXCJ2aWV3XCIsIHt9LCBbXG4gICAgICAgIF92bS5tYXNrXG4gICAgICAgICAgPyBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibWFza1wiXSxcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRNYXNrU3R5bGUsXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xpY2tNYXNrIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJjb250ZW50XCIsIFwicm91bmQtbWRcIl0sXG4gICAgICAgICAgICBzdHlsZTogX3ZtLmdldEJvZHlTdHlsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NQb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiXCIgdi1pZj1cInNob3dcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWFza1wiIHYtaWY9XCJtYXNrXCIgOnN0eWxlPVwiZ2V0TWFza1N0eWxlXCIgQGNsaWNrPVwiY2xpY2tNYXNrXCI+PC92aWV3PlxyXG5cdFx0PCEtLSDlvLnlh7rmoYblhoXlrrkgLS0+XHJcblx0XHQ8dmlldyByZWY9XCJjb250ZW50XCIgY2xhc3M9XCJjb250ZW50IHJvdW5kLW1kXCIgOnN0eWxlPVwiZ2V0Qm9keVN0eWxlXCI+PHNsb3Q+PC9zbG90Pjwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5jb25zdCBhbmltYXRpb24gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpO1xyXG4vLyAjZW5kaWZcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczoge1xyXG5cdFx0c2hvdzogQm9vbGVhbixcclxuXHRcdG1hc2tDbGljazogQm9vbGVhbiwgLy8g54K55Ye7bWFza+aYr+WQpuWFs+mXrSDpu5jorqTlhbPpl61cclxuXHRcdG1hc2s6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdG1hc2tDb2xvcjoge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAwXHJcblx0XHR9LFxyXG5cdFx0aGVpZ2h0OiB7XHJcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0fSxcclxuXHRcdHdpZHRoOiB7XHJcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdGRlZmF1bHQ6IDI0MFxyXG5cdFx0fSxcclxuXHRcdC8vIOWKqOeUu+aWueWQkVxyXG5cdFx0dHJhbnNmb3JtT3JpZ2luOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ2xlZnQgdG9wJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHg6IDAsXHJcblx0XHRcdHk6IDAsXHJcblx0XHRcdG1heFg6IDAsXHJcblx0XHRcdG1heFk6IDBcclxuXHRcdH07XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Z2V0TWFza1N0eWxlKCkge1xyXG5cdFx0XHRyZXR1cm4gYGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLiR7dGhpcy5tYXNrQ29sb3J9KWA7XHJcblx0XHR9LFxyXG5cdFx0Z2V0Qm9keVN0eWxlKCkge1xyXG5cdFx0XHRyZXR1cm4gYGhlaWdodDoke3RoaXMuaGVpZ2h0fXJweDt3aWR0aDoke3RoaXMud2lkdGh9cnB4O1xyXG5cdFx0XHRcdFx0bGVmdDoke3RoaXMueH1weDt0b3A6JHt0aGlzLnl9cHhgO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdC8vIOiOt+WPluezu+e7n+iuvue9rlxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdHRoaXMubWF4WCA9IHJlcy53aW5kb3dXaWR0aCAtIHVuaS51cHgycHgodGhpcy53aWR0aCArIDMwKTtcclxuXHRcdFx0dGhpcy5tYXhZID0gcmVzLndpbmRvd0hlaWdodCAtIHVuaS51cHgycHgodGhpcy5oZWlnaHQgKyAzMCk7XHJcblx0XHR9IGNhdGNoIChlKSB7fVxyXG5cdH0sXHJcblxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdG9wZW4oeCwgeSkge1xyXG5cdFx0XHQvLyDmn6XnnIvmmK/lkKbotoXlh7rovrnnlYxcclxuXHRcdFx0dGhpcy5jaGVja0lzT3V0KHgsIHkpO1xyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hbmltYXRpb24oKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuc2hvdyA9IHRydWU7XHJcblx0XHR9LFxyXG5cdFx0Y2xvc2UoKSB7XHJcblx0XHRcdC8vIOWKqOeUu1xyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbignaGlkZScpO1xyXG5cdFx0XHR0aGlzLnNob3cgPSBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRjbGlja01hc2soKSB7XHJcblx0XHRcdGlmICh0aGlzLm1hc2tDbGljaykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v5Yqo55S7XHJcblx0XHRhbmltYXRpb24odHlwZSkge1xyXG5cdFx0XHRsZXQgdmFsdWU7XHJcblx0XHRcdHR5cGUgPT0gJ2hpZGUnID8gKHZhbHVlID0gMCkgOiAodmFsdWUgPSAxKTtcclxuXHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oXHJcblx0XHRcdFx0dGhpcy4kcmVmcy5jb250ZW50LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGBzY2FsZSgke3ZhbHVlfSwgJHt2YWx1ZX0pYCxcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtT3JpZ2luOiB0aGlzLnRyYW5zZm9ybU9yaWdpbixcclxuXHRcdFx0XHRcdFx0b3BhY2l0eTogdmFsdWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMTAwLCAvL21zXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PSAnaGlkZScpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjaGVja0lzT3V0KHgsIHkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coeCwgdGhpcy5tYXhYKTtcclxuXHRcdFx0eCA+IHRoaXMubWF4WCA/ICh0aGlzLnggPSB0aGlzLm1heFgpIDogKHRoaXMueCA9IHgpO1xyXG5cdFx0XHR5ID4gdGhpcy5tYXhZID8gKHRoaXMueSA9IHRoaXMubWF4WSkgOiAodGhpcy55ID0geSk7XHJcblx0XHRcdHRoaXMuc2hvdyA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wb3B1cCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5tYXNrIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cclxuXHQvKiDmt7vliqDliqjmlYggKi9cclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NQb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jY2EwNDkxOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNjYTA0OTE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicG9wdXBcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwibWFza1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMFxuICB9LFxuICBcImNvbnRlbnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMCwgMClcIixcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2FiYWRhNzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNhYmFkYTc2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwic3RpY2t5XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwic3RpY2t5XCJcbiAgfSxcbiAgXCJwb3B1cC1jb250ZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0YzRjNGNcIlxuICB9XG59IiwiaW1wb3J0IHtcclxuXHRIdHRwXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2h0dHAuanNcIjtcclxuXHJcbmNsYXNzIEZyaWVuZCB7XHJcblx0Ly8g55Sz6K+35re75Yqg5aW95Y+LXHJcblx0c3RhdGljIGFwcGx5RnJpZW5kKHBhcmFtcykge1xyXG5cdFx0Y29uc29sZS5sb2cocGFyYW1zLmxvb2ttZSwgcGFyYW1zLmxvb2toaW0sIFwicGFyYW1zXCIpXHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL2ZyaWVuZC9hcHBseWAsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRhcHBseV92YWx1ZTogcGFyYW1zLmFwcGx5X3ZhbHVlLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiBwYXJhbXMubmlja25hbWUsXHJcblx0XHRcdFx0dXNlcl9pZDogcGFyYW1zLnVzZXJfaWQsXHJcblx0XHRcdFx0ZnJpZW5kX2lkOiBwYXJhbXMuZnJpZW5kX2lkLFxyXG5cdFx0XHRcdGxvb2ttZTogcGFyYW1zLmxvb2ttZSxcclxuXHRcdFx0XHRsb29raGltOiBwYXJhbXMubG9va2hpbSxcclxuXHRcdFx0fSxcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyDmo4DmtYvmmK/lkKblpb3lj4tcclxuXHRzdGF0aWMgY2hlY2tJc0ZyaWVuZCh1c2VySWQsIGZyaWVuZElkKSB7XHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL2ZyaWVuZC9jaGVjaz91c2VySWQ9JHt1c2VySWR9JmZyaWVuZElkPSR7ZnJpZW5kSWR9YCxcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8vIOiOt+WPlueUs+ivt+WIl+ihqFxyXG5cdHN0YXRpYyBnZXRBcHBseUxpc3QodXNlcklkKSB7XHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL2FwcGx5L2xpc3Q/ZnJpZW5kX2lkPSR7dXNlcklkfWAsXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyDlkIzmhI/lpb3lj4vnlLPor7dcclxuXHRzdGF0aWMgYXBwbHlBZ3JlZShpZCkge1xyXG5cdFx0cmV0dXJuIEh0dHAucmVxdWVzdCh7XHJcblx0XHRcdHVybDogYC9hcHBseS9hZ3JlZWAsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRfaWQ6IGlkXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyDojrflj5blpb3lj4vliJfooahcclxuXHRzdGF0aWMgZ2V0RnJpZW5kTGlzdChfaWQpIHtcclxuXHRcdHJldHVybiBIdHRwLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmw6IGAvZnJpZW5kL2xpc3Q/dXNlcl9pZD0ke19pZH1gLFxyXG5cdFx0XHRtZXRob2Q6IFwiR0VUXCJcclxuXHRcdH0pXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRGcmllbmRcclxufTtcclxuIiwiaW1wb3J0IHtcclxuXHRjb25maWdcclxufSBmcm9tIFwiQC9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJ1xyXG5cclxuY29uc3QgZXJyb3JzID0ge1xyXG5cdFwiNDAwMDAxXCI6IFwi5pWw5o2u5LiN5ZCI5rOVXCIsXHJcbn1cclxuXHJcbmNsYXNzIEh0dHAge1xyXG5cdHN0YXRpYyByZXF1ZXN0KHtcclxuXHRcdHVybCxcclxuXHRcdGRhdGEgPSB7fSxcclxuXHRcdG1ldGhvZCA9IFwiUE9TVFwiLFxyXG5cdH0pIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdC8vIOi/memHjOS7jnN0b3Jl5Lit5ou/5YiwdG9rZW5cclxuXHRcdFx0bGV0IHRva2VuID0gc3RvcmUuc3RhdGUudG9rZW4gfHwgJydcclxuXHRcdFx0Y29uc29sZS5sb2codG9rZW4sIFwidG9rZW5cIilcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogYCR7Y29uZmlnLmFwaUJhc2VVcmx9JHt1cmx9YCxcclxuXHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdG1ldGhvZCxcclxuXHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiB0b2tlbixcclxuXHRcdFx0XHRcdC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzLCBcImh0dHBcIilcclxuXHRcdFx0XHRcdGlmIChzdGF0dXNDb2RlLnN0YXJ0c1dpdGgoJzInKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuc3RhdHVzID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShyZXMuZGF0YSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0Ly8gXHR0aXRsZTogcmVzLmRhdGEubXNnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g6ZSZ6K+vXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBlcnIgPT4ge1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVyciwgXCJmYWlsXCIpXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+356iN5ZCO5YaN6K+VXCIsXHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdEh0dHBcclxufTtcclxuIiwiY29uc3QgY29uZmlnID0ge1xyXG5cdGVudjogXCJkZXZcIixcclxuXHJcblx0YXBpQmFzZVVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuMTAwOjQwMDAnLFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdHdzVXJsOiBcIndzOi8vMTkyLjE2OC4xLjEwMDo0MDAwL3dzXCIsXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0Y29uZmlnXHJcbn1cclxuIiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvZnJpZW5kL2FwcGx5RnJpZW5kL2FwcGx5RnJpZW5kLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2ZyaWVuZC9hcHBseUZyaWVuZC9hcHBseUZyaWVuZCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHBseUZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQzOWFlMmJjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hcHBseUZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMzlhZTJiYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9hcHBseUZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDM5YWUyYmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQzOWFlMmJjXCIsXG4gIFwiNWYyMTgwNjJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9wYWdlcy9mcmllbmQvYXBwbHlGcmllbmQvYXBwbHlGcmllbmQubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwbHlGcmllbmQubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMzlhZTJiYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZsZXgtMVwiLCBcImJnLXdoaXRlXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm5hdmlnYXRvci1iYXJcIiwgeyBhdHRyczogeyBjdXN0b206IHRydWUsIGJnYzogXCIjZmZmZmZmXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgXCJzZW5kLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgXCJmbGV4LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICBcImZsZXgtMVwiLFxuICAgICAgICAgICAgICAgICAgXCJyb3VuZC1tZFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNlbmQgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGV4dC13aGl0ZVwiLCBcImZvbnQtMzBcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Y+R6YCBXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJhbGlnbi1jZW50ZXJcIl0sXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpblRvcDogXCIxMDBycHhcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0ZXh0LWJvbGRcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIueUs+ivt+a3u+WKoOWlveWPi1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImNodW5rXCIsIFwibXgtNVwiLCBcIlwiLCBcIm1iLTNcIiwgXCJteS01XCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZVwiLCBcImZvbnQtMzBcIiwgXCJ0ZXh0LXNlYy1jb2xvclwiXSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+R6YCB5re75Yqg5pyL5Y+L55Sz6K+3XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICBcImJveFwiLFxuICAgICAgICAgICAgICAgICAgXCJyb3VuZC1tZFwiLFxuICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgIFwibXQtMVwiLFxuICAgICAgICAgICAgICAgICAgXCJiZy1jb2xvci0xXCIsXG4gICAgICAgICAgICAgICAgICBcInBsLTJcIixcbiAgICAgICAgICAgICAgICAgIFwicHktMlwiLFxuICAgICAgICAgICAgICAgICAgXCJwci0yXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZvbnQtMzBcIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTIwcnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpemXruWAmeivrVwiLCB2YWx1ZTogX3ZtLmhlbGxvIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmhlbGxvID0gJGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJjaHVua1wiLCBcIm10LTRcIiwgXCJteC01XCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZVwiLCBcImZvbnQtMzBcIiwgXCJ0ZXh0LXNlYy1jb2xvclwiXSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi6K6+5aSH5aSH5rOoXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICBcImJveFwiLFxuICAgICAgICAgICAgICAgICAgXCJyb3VuZC1tZFwiLFxuICAgICAgICAgICAgICAgICAgXCJtdC0xXCIsXG4gICAgICAgICAgICAgICAgICBcImJnLWNvbG9yLTFcIixcbiAgICAgICAgICAgICAgICAgIFwicGwtMlwiLFxuICAgICAgICAgICAgICAgICAgXCJweS0yXCIsXG4gICAgICAgICAgICAgICAgICBcInByLTJcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZm9udC0zMFwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogX3ZtLm5pY2tuYW1lIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm5pY2tuYW1lID0gJGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwicGVybWlzc2lvbi1zZXR0aW5nXCIsIHsgb246IHsgcGVybWlzc2lvbjogX3ZtLnBlcm1pc3Npb24gfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImZsZXgtMSBiZy13aGl0ZVwiPlxyXG5cdFx0PCEtLeWvvOiIquagjyAtLT5cclxuXHRcdDxuYXZpZ2F0b3ItYmFyIGN1c3RvbSBiZ2M9XCIjZmZmZmZmXCI+XHJcblx0XHRcdDx2aWV3IEBjbGljaz1cInNlbmRcIiBjbGFzcz1cInNlbmQtYnRuIGZsZXgtY2VudGVyIG1yLTMgZmxleC0xIHJvdW5kLW1kXCI+PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvbnQtMzBcIj7lj5HpgIE8L3RleHQ+PC92aWV3PlxyXG5cdFx0PC9uYXZpZ2F0b3ItYmFyPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJhbGlnbi1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwMHJweDtcIj48dGV4dCBjbGFzcz1cInRleHQtYm9sZFwiPueUs+ivt+a3u+WKoOWlveWPizwvdGV4dD48L3ZpZXc+XHJcblx0XHQ8IS0tIOWPkemAgeeUs+ivt+mXruWAmeivrSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2h1bmsgbXgtNSAgbWItMyBteS01XCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUgZm9udC0zMCB0ZXh0LXNlYy1jb2xvclwiPuWPkemAgea3u+WKoOaci+WPi+eUs+ivtzwvdGV4dD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3ggcm91bmQtbWQgIG10LTEgYmctY29sb3ItMSBwbC0yIHB5LTIgcHItMlwiPjx0ZXh0YXJlYSBzdHlsZT1cImhlaWdodDogMTIwcnB4O1wiIGNsYXNzPVwiZm9udC0zMFwiIHYtbW9kZWw9XCJoZWxsb1wiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6Zeu5YCZ6K+tXCIgLz48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOiuvuWkh+Wkh+azqCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2h1bmsgbXQtNCBteC01XCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUgZm9udC0zMCB0ZXh0LXNlYy1jb2xvclwiPuiuvuWkh+Wkh+azqDwvdGV4dD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3ggcm91bmQtbWQgbXQtMSBiZy1jb2xvci0xIHBsLTIgcHktMiBwci0yXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb250LTMwXCIgdi1tb2RlbD1cIm5pY2tuYW1lXCIgLz48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOadg+mZkCAtLT5cclxuXHRcdDxwZXJtaXNzaW9uLXNldHRpbmcgQHBlcm1pc3Npb249XCJwZXJtaXNzaW9uXCI+PC9wZXJtaXNzaW9uLXNldHRpbmc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IG5hdmlnYXRvckJhciBmcm9tICdAL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1iYXIudnVlJztcclxuaW1wb3J0IHBlcm1pc3Npb25TZXR0aW5nIGZyb20gJ0AvY29tcG9uZW50cy91aS9wZXJtaXNzaW9uLXNldHRpbmcudnVlJztcclxuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSAnQC9tb2RlbC9GcmllbmQuanMnO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0bmF2aWdhdG9yQmFyLFxyXG5cdFx0cGVybWlzc2lvblNldHRpbmdcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRoZWxsbzogJ+ivt+axgua3u+WKoOS9oOS4uuWlveaciScsXHJcblx0XHRcdG5pY2tuYW1lOiAnJyxcclxuXHRcdFx0ZnJpZW5kSWQ6ICcnLFxyXG5cdFx0XHRsb29raGltOiAxLFxyXG5cdFx0XHRsb29rbWU6IDFcclxuXHRcdH07XHJcblx0fSxcclxuXHRvbkxvYWQob3B0aW9ucykge1xyXG5cdFx0aWYgKG9wdGlvbnMuZnJpZW5kSWQpIHtcclxuXHRcdFx0dGhpcy5mcmllbmRJZCA9IG9wdGlvbnMuZnJpZW5kSWQ7XHJcblx0XHRcdHRoaXMubmlja25hbWUgPSBvcHRpb25zLm5pY2tuYW1lO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC4uLm1hcFN0YXRlKFsndXNlciddKVxyXG5cdH0sXHJcblx0bW91bnRlZCgpIHt9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIOS7jue7hOS7tuS8oOmAkueahOadg+mZkOaVsOaNrlxyXG5cdFx0cGVybWlzc2lvbihlKSB7XHJcblx0XHRcdHRoaXMubG9va2hpbSA9IGUubG9va2hpbTtcclxuXHRcdFx0dGhpcy5sb29rbWUgPSBlLmxvb2ttZTtcclxuXHRcdH0sXHJcblx0XHQvLyDlj5HpgIHlpb3lj4vor7fmsYJcclxuXHRcdGFzeW5jIHNlbmQoKSB7XHJcblx0XHRcdGxldCBwYXJhbXMgPSB7XHJcblx0XHRcdFx0YXBwbHlfdmFsdWU6IHRoaXMuaGVsbG8sXHJcblx0XHRcdFx0bmlja25hbWU6IHRoaXMubmlja25hbWUsXHJcblx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VyLl9pZCxcclxuXHRcdFx0XHRmcmllbmRfaWQ6IHRoaXMuZnJpZW5kSWQsXHJcblx0XHRcdFx0bG9va21lOiB0aGlzLmxvb2ttZSxcclxuXHRcdFx0XHRsb29raGltOiB0aGlzLmxvb2toaW1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8vIOeUs+ivt+WlveWPi2FwaVxyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBGcmllbmQuYXBwbHlGcmllbmQocGFyYW1zKTtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6ICflj5HpgIHmiJDlip8nXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDMwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5zZW5kLWJ0biB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzA4YzA2MDtcclxuXHRoZWlnaHQ6IDYwcnB4O1xyXG5cdHdpZHRoOiAxMDBycHg7XHJcbn1cclxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcGVybWlzc2lvbi1zZXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MWY3NWNiZCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Blcm1pc3Npb24tc2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Blcm1pc3Npb24tc2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9wZXJtaXNzaW9uLXNldHRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDFmNzVjYmQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3Blcm1pc3Npb24tc2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MWY3NWNiZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQxZjc1Y2JkXCIsXG4gIFwiNTlmN2RkOGFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbnZ1ZS9jb21wb25lbnRzL3VpL3Blcm1pc3Npb24tc2V0dGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZXJtaXNzaW9uLXNldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQxZjc1Y2JkJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2aWV3XCIsIHt9LCBbXG4gICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImNodW5rXCIsIFwibXQtNFwiLCBcIm14LTVcIl0gfSwgW1xuICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGl0bGVcIiwgXCJmb250LTMwXCIsIFwidGV4dC1zZWMtY29sb3JcIl0gfSwgW1xuICAgICAgICBfdm0uX3YoXCLorr7nva7mnIvlj4vlnIjmnYPpmZBcIilcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgIFwiYm94XCIsXG4gICAgICAgICAgICBcInJvdW5kLW1kXCIsXG4gICAgICAgICAgICBcIm10LTFcIixcbiAgICAgICAgICAgIFwiYmctY29sb3ItMVwiLFxuICAgICAgICAgICAgXCJwbC0yXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJwci0yXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgIHsgb246IHsgY2hhbmdlOiBfdm0ucmFkaW9DaGFuZ2UgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LTMwXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDBBRDE5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGluZGV4ID09PSBfdm0uY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pLFxuICAgICFfdm0uY3VycmVudFxuICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY2h1bmtcIiwgXCJtdC00XCIsIFwibXgtNVwiXSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGl0bGVcIiwgXCJmb250LTMwXCIsIFwidGV4dC1zZWMtY29sb3JcIl0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLmnIvlj4vlnIjlkozop4bpopHliqjmgIFcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgIFwiYm94XCIsXG4gICAgICAgICAgICAgICAgXCJyb3VuZC1tZFwiLFxuICAgICAgICAgICAgICAgIFwibXQtMVwiLFxuICAgICAgICAgICAgICAgIFwiYmctY29sb3ItMVwiLFxuICAgICAgICAgICAgICAgIFwicGwtMlwiLFxuICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwci0yXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uc3dpdGNocywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtMzBcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udGV4dCkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2hlY2tlZDogaXRlbS5jaGVja2VkIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zd2l0Y2hDaGFuZ2UoaSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVybWlzc2lvbi1zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Blcm1pc3Npb24tc2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdDwhLS0g5p2D6ZmQIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjaHVuayBtdC00IG14LTVcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZSBmb250LTMwIHRleHQtc2VjLWNvbG9yXCI+6K6+572u5pyL5Y+L5ZyI5p2D6ZmQPC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJveCByb3VuZC1tZCBtdC0xIGJnLWNvbG9yLTEgcGwtMiAgcHItMlwiPlxyXG5cdFx0XHRcdDxyYWRpby1ncm91cCBAY2hhbmdlPVwicmFkaW9DaGFuZ2VcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImZsZXgtcm93ICBhbGlnbi1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGl0ZW1cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS52YWx1ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtMzBcIj57eyBpdGVtLm5hbWUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3PjxyYWRpbyA6dmFsdWU9XCJpdGVtLnZhbHVlXCIgY29sb3I9XCIjMDBBRDE5XCIgOmNoZWNrZWQ9XCJpbmRleCA9PT0gY3VycmVudFwiIC8+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3JhZGlvLWdyb3VwPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjaHVuayBtdC00IG14LTVcIiB2LWlmPVwiIWN1cnJlbnRcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZSBmb250LTMwIHRleHQtc2VjLWNvbG9yXCI+5pyL5Y+L5ZyI5ZKM6KeG6aKR5Yqo5oCBPC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJveCByb3VuZC1tZCBtdC0xIGJnLWNvbG9yLTEgcGwtMiAgcHItMlwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbSBmbGV4LXJvdyBhbGlnbi1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1ib3R0b21cIiB2LWZvcj1cIihpdGVtLCBpKSBpbiBzd2l0Y2hzXCIgOmtleT1cImlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC0zMFwiPnt7IGl0ZW0udGV4dCB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDxzd2l0Y2ggOmNoZWNrZWQ9XCJpdGVtLmNoZWNrZWRcIiBAY2hhbmdlPVwic3dpdGNoQ2hhbmdlKGkpXCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFsdWU6ICcwJyxcclxuXHRcdFx0XHRcdG5hbWU6ICfogYrlpKks5pyL5Y+L5ZyILOW+ruS/oei/kOWKqOetiSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhbHVlOiAnMScsXHJcblx0XHRcdFx0XHRuYW1lOiAn5LuF6IGK5aSpJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0c3dpdGNoczogW3sgdGV4dDogJ+S4jeiuqeS7lueci+aIkScsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdGV4dDogJ+S4jeeci+S7licsIGNoZWNrZWQ6IGZhbHNlIH1dXHJcblx0XHR9O1xyXG5cdH0sXHJcblxyXG5cdGNvbXB1dGVkOiB7fSxcclxuXHJcblx0bWV0aG9kczoge1xyXG5cdFx0c3dpdGNoQ2hhbmdlKGUpIHtcclxuXHRcdFx0dGhpcy5zd2l0Y2hzW2VdLmNoZWNrZWQgPSAhdGhpcy5zd2l0Y2hzW2VdLmNoZWNrZWQ7XHJcblx0XHRcdHRoaXMuZW1pdCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyYWRpb0NoYW5nZShlKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudCA9IGUuZGV0YWlsLnZhbHVlIC8gMTtcclxuXHRcdFx0dGhpcy5lbWl0KCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog6buY6K6k5Li65oiR55yL5LuWKDEpLOS7lueci+aIkSgxKVxyXG5cdFx0ICog5aaC5p6c5LuF5piv6IGK5aSpIDAgMFxyXG5cdFx0ICog5bCG546w5pyJ55qE5YC85Y+W5Y+NXHJcblx0XHQgKi9cclxuXHRcdGVtaXQoKSB7XHJcblx0XHRcdGxldCBsb29raGltID0gMTtcclxuXHRcdFx0bGV0IGxvb2ttZSA9IDE7XHJcblx0XHRcdC8vIOS7heiBiuWkqVxyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50KSB7XHJcblx0XHRcdFx0bG9va2hpbSA9IDA7XHJcblx0XHRcdFx0bG9va21lID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyDpu5jorqTkuLogMSwx5bCG546w5Zyo55qE5YC85Y+W5Y+NXHJcblx0XHRcdFx0bG9va21lID0gTnVtYmVyKCF0aGlzLnN3aXRjaHNbMF0uY2hlY2tlZCk7XHJcblx0XHRcdFx0bG9va2hpbSA9IE51bWJlcighdGhpcy5zd2l0Y2hzWzFdLmNoZWNrZWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbWl0KCdwZXJtaXNzaW9uJywge1xyXG5cdFx0XHRcdGxvb2ttZSxcclxuXHRcdFx0XHRsb29raGltXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaXRlbSB7XHJcblx0aGVpZ2h0OiA5MHJweDtcclxufVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVybWlzc2lvbi1zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQxZjc1Y2JkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZXJtaXNzaW9uLXNldHRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDFmNzVjYmQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpdGVtXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwcnB4XCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMzlhZTJiYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHBseUZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDM5YWUyYmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInNlbmQtYnRuXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwOGMwNjBcIixcbiAgICBcImhlaWdodFwiOiBcIjYwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMHJweFwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9