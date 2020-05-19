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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
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
/*!***************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages.json?{"type":"style"} ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/login/login":{},"pages/tabbar/contacts/contacts":{},"pages/tabbar/index/index":{},"pages/tabbar/my/my":{},"pages/tabbar/find/find":{}},"globalStyle":{}});

/***/ }),
/* 5 */
/*!**************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages.json?{"type":"stat"} ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__67AA67B"});

/***/ }),
/* 6 */,
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
/* 11 */,
/* 12 */,
/* 13 */
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
/* 14 */,
/* 15 */
/*!***************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/main.js?{"type":"appStyle"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 16).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 17);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "flex": {
    "display": "flex"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-center": {
    "display": "flex",
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
    "marginTop": "10rpx"
  },
  "mb-2": {
    "marginTop": "20rpx"
  },
  "mb-3": {
    "marginTop": "30rpx"
  },
  "mb-4": {
    "marginTop": "40rpx"
  },
  "mb-5": {
    "marginTop": "50rpx"
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/*!********************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-bar.vue?vue&type=template&id=52b2d8fa&scoped=true& */ 36);
/* harmony import */ var _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-bar.vue?vue&type=script&lang=js& */ 38);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./navigation-bar.vue?vue&type=style&index=0&id=52b2d8fa&scoped=true&lang=css& */ 52).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./navigation-bar.vue?vue&type=style&index=0&id=52b2d8fa&scoped=true&lang=css& */ 52).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52b2d8fa",
  "372f079a",
  false,
  _navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 36 */
/*!***************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue?vue&type=template&id=52b2d8fa&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation-bar.vue?vue&type=template&id=52b2d8fa&scoped=true& */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_template_id_52b2d8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 37 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue?vue&type=template&id=52b2d8fa&scoped=true& ***!
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
      staticClass: ["navigation-bar", "flex", "sticky"],
      staticStyle: { backgroundColor: "#F5F5F5" }
    },
    [
      _c("view", { style: "height:" + _vm.statusBarHeight + "px" }),
      _c(
        "view",
        {
          staticClass: [
            "w-100",
            "flex",
            "justify-between",
            "align-center",
            "",
            "flex-row"
          ],
          staticStyle: { height: "90rpx" }
        },
        [
          _c("view", { staticClass: ["font-md", "flex", "flex-row", "ml-3"] }, [
            _vm.title ? _c("u-text", [_vm._v(_vm._s(_vm.title))]) : _vm._e(),
            _vm.number
              ? _c("u-text", [_vm._v("(" + _vm._s(_vm.number) + ")")])
              : _vm._e()
          ]),
          _c(
            "view",
            { staticClass: ["flex", "flex-row"] },
            [
              _c("icon-button", { attrs: { icon: "\\ue6e3" } }),
              _c("icon-button", {
                attrs: { icon: "\\ue682" },
                on: { click: _vm.add }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "popup",
        {
          ref: "popup",
          attrs: {
            mask: true,
            width: "320",
            height: "400",
            maskValue: "1",
            bg: "#4C4C4C"
          }
        },
        [
          _c(
            "view",
            {
              staticClass: ["flex"],
              staticStyle: { width: "320rpx", height: "400rpx" }
            },
            _vm._l(_vm.menus, function(item) {
              return _c(
                "view",
                { key: item.text, staticClass: ["flex-1", "flex-center"] },
                [
                  _c("u-text", { staticClass: ["font-md", "text-white"] }, [
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
/* 38 */
/*!*********************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation-bar.vue?vue&type=script&lang=js& */ 39);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




























var _iconButton = _interopRequireDefault(__webpack_require__(/*! ./icon-button.vue */ 40));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./popup.vue */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { popup: _popup.default, iconButton: _iconButton.default }, props: { title: String, number: Number }, data: function data() {return { statusBarHeight: 0, menus: [{ text: '发起群聊', event: 'groupChat' }, { text: '添加朋友', event: 'addFriend' }, { text: '扫一到', event: 'qrCode' }, { text: '帮助与反馈', event: '' }] };



  },
  mounted: function mounted() {

    // 获取状态栏高度
    this.statusBarHeight = plus.navigator.getStatusbarHeight();

  },
  onLoad: function onLoad() {},

  methods: {
    add: function add() {
      var x = uni.upx2px(415);
      var y = uni.upx2px(150);
      this.$refs.popup.open(x, y);
    } } };exports.default = _default;

/***/ }),
/* 40 */
/*!*****************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/icon-button.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-button.vue?vue&type=template&id=33e2c516& */ 41);
/* harmony import */ var _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-button.vue?vue&type=script&lang=js& */ 43);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

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
  _icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__["render"],
  _icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "1d561a76",
  false,
  _icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/components/ui/icon-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 41 */
/*!************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/icon-button.vue?vue&type=template&id=33e2c516& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./icon-button.vue?vue&type=template&id=33e2c516& */ 42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_template_id_33e2c516___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 42 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/icon-button.vue?vue&type=template&id=33e2c516& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: ["flex-center", "iconfont"],
      staticStyle: { height: "90rpx", width: "90rpx" },
      attrs: { hoverClass: "bg-hover-light" },
      on: {
        click: function($event) {
          _vm.$emit("click")
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
/* 43 */
/*!******************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/icon-button.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./icon-button.vue?vue&type=script&lang=js& */ 44);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/icon-button.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 45 */
/*!***********************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/popup.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.vue?vue&type=template&id=788dbc88&scoped=true& */ 46);
/* harmony import */ var _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.vue?vue&type=script&lang=js& */ 48);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./popup.vue?vue&type=style&index=0&id=788dbc88&scoped=true&lang=css& */ 50).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./popup.vue?vue&type=style&index=0&id=788dbc88&scoped=true&lang=css& */ 50).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "788dbc88",
  "462fff1c",
  false,
  _popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/components/ui/popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 46 */
/*!******************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/popup.vue?vue&type=template&id=788dbc88&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./popup.vue?vue&type=template&id=788dbc88&scoped=true& */ 47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_788dbc88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 47 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/popup.vue?vue&type=template&id=788dbc88&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    ? _c("view", { staticClass: ["popup"], attrs: { re: true } }, [
        _vm.mask
          ? _c("view", {
              staticClass: ["mask"],
              style: _vm.maskStyle,
              on: { click: _vm.hide }
            })
          : _vm._e(),
        _vm.type == "free"
          ? _c(
              "view",
              {
                ref: "popup",
                staticClass: ["content", "animated"],
                style: _vm.freeStyle
              },
              [_vm._t("default")],
              2
            )
          : _vm._e()
      ])
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/*!************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/popup.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./popup.vue?vue&type=script&lang=js& */ 49);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/popup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//

var animation = weex.requireModule('animation');var _default =
{
  props: {
    // 是否显示
    mask: {
      type: Boolean,
      default: true },

    // 点击mask是否关闭
    maskClick: {
      type: Boolean,
      default: true },

    // mask颜色
    maskValue: {
      type: [String, Number],
      default: 1 },

    //位置  bototom / free
    type: {
      type: String,
      default: 'free' },

    // 主体内容背景
    bg: {
      type: String,
      default: '#ffffff' },

    width: {
      type: [String, Number],
      default: 0 },

    height: {
      type: [String, Number],
      default: 0 } },



  data: function data() {
    return {
      show: false,
      style: '',
      // x,y 为显示内容弹窗的坐标 为了不超过屏幕 设定maxX和maxY
      x: 0,
      y: 0,
      maxX: 0,
      maxY: 0 };

  },
  mounted: function mounted() {
    // 获取系统设置
    try {
      var res = uni.getSystemInfoSync();
      this.maxX = res.windowWidth - uni.upx2px(this.width);
      this.maxY = res.windowHeight - uni.upx2px(this.height);
    } catch (e) {}
  },
  computed: {
    // mask 样式
    maskStyle: function maskStyle() {
      if (this.maskValue) return "background-color:rgba(0,0,0,0.".concat(this.maskValue, ")");
      return "";
    },

    bottomStyle: function bottomStyle() {
      return "bottom:0;left:0;right:0;\n\t\t\t\t\tbackground-color:".concat(
      this.bg, ";");
    },
    freeStyle: function freeStyle() {
      return "background-color:".concat(this.bg, ";\n\t\t\t\t\tleft:").concat(
      this.x, "px;top:").concat(this.y, "px;");
    } },

  methods: {
    open: function open(x, y) {var _this = this;
      this.x = x;
      this.y = y;
      this.isOut(x, y);
      this.show = true;

      // 添加动画

      this.$nextTick(function () {
        animation.transition(
        _this.$refs.popup,
        {
          styles: {
            transform: 'scale(1,1)',
            transformOrigin: 'right,top',
            opacity: 1 },

          duration: 200, //ms
          timingFunction: 'ease' },

        function () {
          __f__("log", '动画执行结束', " at components\\ui\\popup.vue:109");
        });

      });

    },
    close: function close() {
      this.show = false;
    },
    // 是否关闭mask
    hide: function hide() {
      if (!this.maskClick) return;
      this.close();
    },

    // 判断是否超出边界
    // @ 后续修改
    isOut: function isOut(x, y) {
      this.x = x > this.maxX ? this.maxX - 20 : x;
      this.y = y > this.maxY ? this.maxY : y;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),
/* 50 */
/*!********************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/popup.vue?vue&type=style&index=0&id=788dbc88&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_788dbc88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./popup.vue?vue&type=style&index=0&id=788dbc88&scoped=true&lang=css& */ 51);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_788dbc88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_788dbc88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_788dbc88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_788dbc88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_788dbc88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/popup.vue?vue&type=style&index=0&id=788dbc88&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "popup": {
    "zIndex": 999,
    "overflow": "hidden"
  },
  "mask": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "content": {
    "position": "fixed"
  },
  "animated": {
    "transform": "scale(0, 0)",
    "opacity": 0
  }
}

/***/ }),
/* 52 */
/*!*****************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue?vue&type=style&index=0&id=52b2d8fa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_52b2d8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation-bar.vue?vue&type=style&index=0&id=52b2d8fa&scoped=true&lang=css& */ 53);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_52b2d8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_52b2d8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_52b2d8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_52b2d8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_bar_vue_vue_type_style_index_0_id_52b2d8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/components/ui/navigation-bar.vue?vue&type=style&index=0&id=52b2d8fa&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "sticky": {
    "position": "sticky"
  }
}

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!*******************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/main.js?{"page":"pages%2Ftabbar%2Fcontacts%2Fcontacts"} ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 2);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 15);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_tabbar_contacts_contacts_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabbar/contacts/contacts.nvue?mpType=page */ 64);

        
        
        
        _pages_tabbar_contacts_contacts_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_tabbar_contacts_contacts_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/tabbar/contacts/contacts'
        _pages_tabbar_contacts_contacts_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_tabbar_contacts_contacts_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 64 */
/*!***********************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.nvue?vue&type=template&id=7bba0472&scoped=true&mpType=page */ 65);
/* harmony import */ var _contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.nvue?vue&type=script&lang=js&mpType=page */ 67);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./contacts.nvue?vue&type=style&index=0&id=7bba0472&scoped=true&lang=css&mpType=page */ 69).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./contacts.nvue?vue&type=style&index=0&id=7bba0472&scoped=true&lang=css&mpType=page */ 69).default)
            }

}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7bba0472",
  "ef9c884c",
  false,
  _contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 65 */
/*!*****************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue?vue&type=template&id=7bba0472&scoped=true&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./contacts.nvue?vue&type=template&id=7bba0472&scoped=true&mpType=page */ 66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_template_id_7bba0472_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 66 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue?vue&type=template&id=7bba0472&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        [
          _c("navigator-bar", { attrs: { title: "通讯录" } }),
          _c(
            "view",
            { staticClass: ["lists"] },
            [
              _vm._l(_vm.topMenu, function(item, i) {
                return _c(
                  "view",
                  {
                    key: i,
                    staticClass: [
                      "list",
                      "",
                      "align-center",
                      "",
                      "flex",
                      "flex-row"
                    ]
                  },
                  [
                    _c("u-image", {
                      staticClass: ["avatar", "ml-3", "mr-2"],
                      attrs: { src: "../../../static/logo.png", mode: "" }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: ["right", "border-bottom", "text-ellipsis"]
                      },
                      [_c("u-text", [_vm._v(_vm._s(item.name))])]
                    )
                  ],
                  1
                )
              }),
              _vm._l(_vm.contacts, function(item, i) {
                return _c(
                  "view",
                  {
                    key: i,
                    staticClass: [
                      "list",
                      "",
                      "align-center",
                      "",
                      "flex",
                      "flex-row"
                    ]
                  },
                  [
                    _c("u-image", {
                      staticClass: ["avatar", "ml-3", "mr-2"],
                      attrs: { src: "../../../static/logo.png", mode: "" }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: ["right", "border-bottom", "text-ellipsis"]
                      },
                      [_c("u-text", [_vm._v(_vm._s(item.name))])]
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
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
/* 67 */
/*!***********************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./contacts.nvue?vue&type=script&lang=js&mpType=page */ 68);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 68 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















var _navigationBar = _interopRequireDefault(__webpack_require__(/*! @/components/ui/navigation-bar.vue */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { navigatorBar: _navigationBar.default }, data: function data() {return { topMenu: [{ name: '新的朋友' }, { name: '群聊' }, { name: '标签' }], contacts: [] };}, methods: {} };exports.default = _default;

/***/ }),
/* 69 */
/*!*******************************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue?vue&type=style&index=0&id=7bba0472&scoped=true&lang=css&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_style_index_0_id_7bba0472_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./contacts.nvue?vue&type=style&index=0&id=7bba0472&scoped=true&lang=css&mpType=page */ 70);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_style_index_0_id_7bba0472_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_style_index_0_id_7bba0472_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_style_index_0_id_7bba0472_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_style_index_0_id_7bba0472_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_contacts_nvue_vue_type_style_index_0_id_7bba0472_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 70 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/pages/tabbar/contacts/contacts.nvue?vue&type=style&index=0&id=7bba0472&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "avatar": {
    "height": "80rpx",
    "width": "80rpx"
  },
  "right": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx",
    "flex": 1
  },
  "right-container": {
    "height": "80rpx",
    "width": "80rpx"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvcGFnZXMuanNvbj84NTZlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy5qc29uPzUzMTIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbWFpbi5qcz9iMzc1Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9BcHAudnVlPzY4ODMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL0FwcC52dWU/YTA1YiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/ZjlkNCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/ZjhjNSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/ZjRiOCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/ZDdkYSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlP2M5MzIiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlP2IzYmMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlP2NmNDEiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlPzMwZmIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdWkvaWNvbi1idXR0b24udnVlIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9jb21wb25lbnRzL3VpL3BvcHVwLnZ1ZT9mODA2Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9jb21wb25lbnRzL3VpL3BvcHVwLnZ1ZT9kMjgzIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9jb21wb25lbnRzL3VpL3BvcHVwLnZ1ZT9jMjM1Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9jb21wb25lbnRzL3VpL3BvcHVwLnZ1ZT82NGM2IiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VpL3BvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9wb3B1cC52dWU/NmJlOSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9wb3B1cC52dWU/ZWI5MCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/ZjEzMiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWU/ZDI0NCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbWFpbi5qcz85MjUwIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy90YWJiYXIvY29udGFjdHMvY29udGFjdHMubnZ1ZT84OWE1Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy90YWJiYXIvY29udGFjdHMvY29udGFjdHMubnZ1ZT9jYzg0Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy90YWJiYXIvY29udGFjdHMvY29udGFjdHMubnZ1ZT9jNmFmIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy90YWJiYXIvY29udGFjdHMvY29udGFjdHMubnZ1ZT8zZGI5IiwidW5pLWFwcDovLy9wYWdlcy90YWJiYXIvY29udGFjdHMvY29udGFjdHMubnZ1ZSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvcGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzLm52dWU/MjZiMiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvcGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzLm52dWU/NjFkMCJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwidHlwb2YiLCJzIiwicHJvdG90eXBlIiwic3Vic3RyaW5nIiwiaXNEZWJ1Z01vZGUiLCJfX2NoYW5uZWxJZF9fIiwibG9nIiwiX2xlbiIsImFyZ3VtZW50cyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiZm9ybWF0TG9nIiwic2hpZnQiLCJwb3AiLCJtc2dzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJ2VHlwZSIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwibXNnIiwibGFzdE1zZyIsImpvaW4iLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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QTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFD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OEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFBQTtBQUFBO0FBQUE7QUFBNmMsQ0FBZ0Isc2ZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCamUsK0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxjQUNBLG9DQURBLEVBREEsRUFJQSxJQUpBLGtCQUlBLENBQ0EsU0FDQSwyREFEQSxFQUVBLFlBRkEsR0FJQSxDQVRBLEVBVUEsV0FWQSxFOzs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUEweUIsQ0FBZ0Isd3pCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E5ekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InBhZ2VzL3RhYmJhci9jb250YWN0cy9jb250YWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Myk7XG4iLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7XCJwYWdlcy9sb2dpbi9sb2dpblwiOnt9LFwicGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzXCI6e30sXCJwYWdlcy90YWJiYXIvaW5kZXgvaW5kZXhcIjp7fSxcInBhZ2VzL3RhYmJhci9teS9teVwiOnt9LFwicGFnZXMvdGFiYmFyL2ZpbmQvZmluZFwiOnt9fSxcImdsb2JhbFN0eWxlXCI6e319IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX182N0FBNjdCXCJ9IiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcbn1cblxuZnVuY3Rpb24gaXNEZWJ1Z01vZGUgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICByZXR1cm4gdHlwZW9mIF9fY2hhbm5lbElkX18gPT09ICdzdHJpbmcnICYmIF9fY2hhbm5lbElkX19cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyAodHlwZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICB2YXIgdHlwZSA9IGFyZ3Muc2hpZnQoKVxuICBpZiAoaXNEZWJ1Z01vZGUoKSkge1xuICAgIGFyZ3MucHVzaChhcmdzLnBvcCgpLnJlcGxhY2UoJ2F0ICcsICd1bmktYXBwOi8vLycpKVxuICAgIHJldHVybiBjb25zb2xlW3R5cGVdWydhcHBseSddKGNvbnNvbGUsIGFyZ3MpXG4gIH1cblxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IG9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IGFycmF5XScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxuXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSBTdHJpbmcodilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2XG4gIH0pXG4gIHZhciBtc2cgPSAnJ1xuXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcblxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xuICAgICAgbXNnICs9IGxhc3RNc2dcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IG1zZ3NbMF1cbiAgfVxuXG4gIGNvbnNvbGVbdHlwZV0obXNnKVxufVxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImljb25mb250XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiXG4gIH0sXG4gIFwiZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtY2VudGVyXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwianVzdGlmeS1iZXR3ZWVuXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwianVzdGlmeS1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImp1c3RpZnktYXJvdW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC13cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcIm1sLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwXG4gIH0sXG4gIFwibWwtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1sLTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtbC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWwtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1sLTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtci0wXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJtci0xXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1yLTJcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXItM1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtci00XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1yLTVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXQtMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXQtM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXQtNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXQtNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWItMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWItMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWItM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWItNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWItNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXgtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm14LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXgtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm14LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJteS0xXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXktMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm15LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJteS00XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXktNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBsLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGwtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwbC0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBsLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGwtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwci0xXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwci0yXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwci0zXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwci00XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJmb250LTIwXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBycHhcIlxuICB9LFxuICBcImZvbnQtMjVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXJweFwiXG4gIH0sXG4gIFwiZm9udC0zMFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJmb250LTM1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzVycHhcIlxuICB9LFxuICBcImZvbnQtNDBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwidGV4dC1ib2xkXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJ0ZXh0LXdoaXRlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidGV4dC1lbGxpcHNpc1wiOiB7XG4gICAgXCJsaW5lc1wiOiAxXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiMwMDYyY2NcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzU0NWI2MlwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZTdlMzRcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctaG92ZXItaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTE3YThiXCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWhvdmVyLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2QzOWUwMFwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYmQyMTMwXCJcbiAgfSxcbiAgXCJiZy1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGFlMGU1XCJcbiAgfSxcbiAgXCJiZy1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFkMjEyNFwiXG4gIH0sXG4gIFwiYmctd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiYmctdHJhbnNwYXJlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMSlcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC4xKVwiXG4gIH0sXG4gIFwiZm9udC14c1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJmb250LXNtXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRycHhcIlxuICB9LFxuICBcImZvbnQtbWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNnJweFwiXG4gIH0sXG4gIFwiZm9udC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LW1haW4tY29sb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDEpXCJcbiAgfSxcbiAgXCJ0ZXh0LXNlYy1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC42KVwiXG4gIH0sXG4gIFwidGV4dC10aHJlZS1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMzksNDAsNTAsMC40KVwiXG4gIH0sXG4gIFwiYmctZGFyay1jb2xvclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMilcIlxuICB9LFxuICBcImJnLWNvbG9yLTFcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNDQsMjQ0LDI0NCwxKVwiXG4gIH0sXG4gIFwiYmctY29sb3ItMlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0MywyNDQsMjQ2LDEpXCJcbiAgfSxcbiAgXCJ5ZWxsb3dcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNTUsMjI4LDQ5LDEpXCJcbiAgfSxcbiAgXCJyZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNTUsOTMsOTEsMSlcIlxuICB9LFxuICBcImJsdWVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg4NywxNTMsMjU1LDEpXCJcbiAgfSxcbiAgXCJyb3VuZC1zbVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJyb3VuZC1tZFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicm91bmQtbGdcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBycHhcIlxuICB9LFxuICBcImNpcmNsZVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTBcbiAgfSxcbiAgXCJib3JkZXItY29sb3JcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMSlcIlxuICB9LFxuICBcInRlbXAtYmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjMpXCJcbiAgfSxcbiAgXCJ0ZW1wLWJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGRjAwMDBcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMlwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MmIyZDhmYSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTJiMmQ4ZmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUyYjJkOGZhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTJiMmQ4ZmFcIixcbiAgXCIzNzJmMDc5YVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJIOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9jb21wb25lbnRzL3VpL25hdmlnYXRpb24tYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdmlnYXRpb24tYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MmIyZDhmYSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBbXCJuYXZpZ2F0aW9uLWJhclwiLCBcImZsZXhcIiwgXCJzdGlja3lcIl0sXG4gICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y1RjVGNVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0eWxlOiBcImhlaWdodDpcIiArIF92bS5zdGF0dXNCYXJIZWlnaHQgKyBcInB4XCIgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgXCJ3LTEwMFwiLFxuICAgICAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgICAgICBcImp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcImZsZXgtcm93XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LW1kXCIsIFwiZmxleFwiLCBcImZsZXgtcm93XCIsIFwibWwtM1wiXSB9LCBbXG4gICAgICAgICAgICBfdm0udGl0bGUgPyBfYyhcInUtdGV4dFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0ubnVtYmVyXG4gICAgICAgICAgICAgID8gX2MoXCJ1LXRleHRcIiwgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0ubnVtYmVyKSArIFwiKVwiKV0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImZsZXgtcm93XCJdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaWNvbi1idXR0b25cIiwgeyBhdHRyczogeyBpY29uOiBcIlxcXFx1ZTZlM1wiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiaWNvbi1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXFxcXHVlNjgyXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwicG9wdXBcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgIHdpZHRoOiBcIjMyMFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgbWFza1ZhbHVlOiBcIjFcIixcbiAgICAgICAgICAgIGJnOiBcIiM0QzRDNENcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJmbGV4XCJdLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIzMjBycHhcIiwgaGVpZ2h0OiBcIjQwMHJweFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLm1lbnVzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7IGtleTogaXRlbS50ZXh0LCBzdGF0aWNDbGFzczogW1wiZmxleC0xXCIsIFwiZmxleC1jZW50ZXJcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LW1kXCIsIFwidGV4dC13aGl0ZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50ZXh0KSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PCEtLSDlr7zoiKrmoI8gLS0+XHJcblx0PHZpZXcgY2xhc3M9XCJuYXZpZ2F0aW9uLWJhciBmbGV4IHN0aWNreVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcIj5cclxuXHRcdDwhLS0g54q25oCB5qCPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJcIiA6c3R5bGU9XCInaGVpZ2h0OicgKyBzdGF0dXNCYXJIZWlnaHQgKyAncHgnXCI+PC92aWV3PlxyXG5cdFx0PCEtLSDlr7zoiKogLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInctMTAwIGZsZXgganVzdGlmeS1iZXR3ZWVuIGFsaWduLWNlbnRlciAgZmxleC1yb3dcIiBzdHlsZT1cImhlaWdodDogOTBycHg7XCI+XHJcblx0XHRcdDwhLS0gbGVmdCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmb250LW1kIGZsZXggZmxleC1yb3cgbWwtMyBcIj5cclxuXHRcdFx0XHQ8IS0tIOagh+mimCAtLT5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwibnVtYmVyXCI+KHt7IG51bWJlciB9fSk8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSByaWdodCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGZsZXgtcm93XCI+XHJcblx0XHRcdFx0PGljb24tYnV0dG9uIGljb249XCJcXHVlNmUzXCI+PC9pY29uLWJ1dHRvbj5cclxuXHRcdFx0XHQ8aWNvbi1idXR0b24gQGNsaWNrPVwiYWRkXCIgaWNvbj1cIlxcdWU2ODJcIj48L2ljb24tYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOaJqeWxleiPnOWNlSAtLT5cclxuXHRcdDxwb3B1cCBtYXNrIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiNDAwXCIgbWFza1ZhbHVlPVwiMVwiIGJnPVwiIzRDNEM0Q1wiIHJlZj1cInBvcHVwXCI+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDMyMHJweDtoZWlnaHQ6IDQwMHJweDtcIiBjbGFzcz1cImZsZXggXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCIgZmxleC0xIGZsZXgtY2VudGVyXCIgdi1mb3I9XCJpdGVtIGluIG1lbnVzXCIgOmtleT1cIml0ZW0udGV4dFwiPjx0ZXh0IGNsYXNzPVwiZm9udC1tZCB0ZXh0LXdoaXRlXCI+e3tpdGVtLnRleHR9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvcG9wdXA+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGljb25CdXR0b24gZnJvbSAnLi9pY29uLWJ1dHRvbi52dWUnO1xyXG5pbXBvcnQgcG9wdXAgZnJvbSAnLi9wb3B1cC52dWUnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0cG9wdXAsXHJcblx0XHRpY29uQnV0dG9uXHJcblx0fSxcclxuXHRwcm9wczoge1xyXG5cdFx0dGl0bGU6IFN0cmluZyxcclxuXHRcdG51bWJlcjogTnVtYmVyXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLFxyXG5cdFx0XHRtZW51czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICflj5HotbfnvqTogYonLFxyXG5cdFx0XHRcdFx0ZXZlbnQ6ICdncm91cENoYXQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAn5re75Yqg5pyL5Y+LJyxcclxuXHRcdFx0XHRcdGV2ZW50OiAnYWRkRnJpZW5kJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ+aJq+S4gOWIsCcsXHJcblx0XHRcdFx0XHRldmVudDogJ3FyQ29kZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfluK7liqnkuI7lj43ppognLFxyXG5cdFx0XHRcdFx0ZXZlbnQ6ICcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHQvLyDojrflj5bnirbmgIHmoI/pq5jluqZcclxuXHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcGx1cy5uYXZpZ2F0b3IuZ2V0U3RhdHVzYmFySGVpZ2h0KCk7XHJcblx0XHQvLyAjZW5kaWZcclxuXHR9LFxyXG5cdG9uTG9hZCgpIHt9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblx0XHRhZGQoKSB7XHJcblx0XHRcdGxldCB4ID0gdW5pLnVweDJweCg0MTUpO1xyXG5cdFx0XHRsZXQgeSA9IHVuaS51cHgycHgoMTUwKTtcclxuXHRcdFx0dGhpcy4kcmVmcy5wb3B1cC5vcGVuKHgsIHkpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uc3RpY2t5IHtcclxuXHRwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zM2UyYzUxNiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMWQ1NjFhNzZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9pY29uLWJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNlMmM1MTYmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogW1wiZmxleC1jZW50ZXJcIiwgXCJpY29uZm9udFwiXSxcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiLCB3aWR0aDogXCI5MHJweFwiIH0sXG4gICAgICBhdHRyczogeyBob3ZlckNsYXNzOiBcImJnLWhvdmVyLWxpZ2h0XCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIl0gfSwgW192bS5fdihfdm0uX3MoX3ZtLl9pY29uKSldKV1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJylcIiBjbGFzcz1cImZsZXgtY2VudGVyIGljb25mb250XCIgaG92ZXItY2xhc3M9XCJiZy1ob3Zlci1saWdodFwiIHN0eWxlPVwiaGVpZ2h0OiA5MHJweDsgd2lkdGg6IDkwcnB4O1wiPlxyXG5cdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiPnt7X2ljb259fTwvdGV4dD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGljb246IFN0cmluZyxcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRfaWNvbigpIHtcclxuXHRcdFx0XHRsZXQgc3RyID0gdGhpcy5pY29uXHJcblx0XHRcdFx0cmV0dXJuIGV2YWwoXCInXCIgKyBzdHIgKyBcIidcIikgXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzg4ZGJjODgmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc4OGRiYzg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODhkYmM4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc4OGRiYzg4XCIsXG4gIFwiNDYyZmZmMWNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvY29tcG9uZW50cy91aS9wb3B1cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzg4ZGJjODgmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uc2hvd1xuICAgID8gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBvcHVwXCJdLCBhdHRyczogeyByZTogdHJ1ZSB9IH0sIFtcbiAgICAgICAgX3ZtLm1hc2tcbiAgICAgICAgICA/IF9jKFwidmlld1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtYXNrXCJdLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLm1hc2tTdHlsZSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oaWRlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLnR5cGUgPT0gXCJmcmVlXCJcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZjogXCJwb3B1cFwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJjb250ZW50XCIsIFwiYW5pbWF0ZWRcIl0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IF92bS5mcmVlU3R5bGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInBvcHVwXCIgcmUgdi1pZj1cInNob3dcIj5cclxuXHRcdDwhLS0gbWFzayAtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJtYXNrXCIgY2xhc3M9XCJtYXNrXCIgOnN0eWxlPVwibWFza1N0eWxlXCIgQGNsaWNrPVwiaGlkZVwiPjwvdmlldz5cclxuXHRcdDwhLS0g5by55Ye65qGG5YaF5a65IC0tPlxyXG5cdFx0PCEtLSBib3R0b20gLS0+XHJcblx0XHQ8IS0tIDx2aWV3IHYtaWY9XCJ0eXBlID09ICdib3R0b20nXCIgY2xhc3M9XCJjb250ZW50XCIgOnN0eWxlPVwiYm90dG9tU3R5bGVcIj48c2xvdD48L3Nsb3Q+PC92aWV3PiAtLT5cclxuXHRcdDwhLS0gZnJlZSAtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJ0eXBlID09ICdmcmVlJ1wiIGNsYXNzPVwiY29udGVudCBhbmltYXRlZFwiIHJlZj1cInBvcHVwXCIgOnN0eWxlPVwiZnJlZVN0eWxlXCI+PHNsb3Q+PC9zbG90Pjwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5jb25zdCBhbmltYXRpb24gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdC8vIOaYr+WQpuaYvuekulxyXG5cdFx0bWFzazoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0Ly8g54K55Ye7bWFza+aYr+WQpuWFs+mXrVxyXG5cdFx0bWFza0NsaWNrOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdH0sXHJcblx0XHQvLyBtYXNr6aKc6ImyXHJcblx0XHRtYXNrVmFsdWU6IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0ZGVmYXVsdDogMVxyXG5cdFx0fSxcclxuXHRcdC8v5L2N572uICBib3RvdG9tIC8gZnJlZVxyXG5cdFx0dHlwZToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICdmcmVlJ1xyXG5cdFx0fSxcclxuXHRcdC8vIOS4u+S9k+WGheWuueiDjOaZr1xyXG5cdFx0Ymc6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnI2ZmZmZmZidcclxuXHRcdH0sXHJcblx0XHR3aWR0aDoge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAwXHJcblx0XHR9LFxyXG5cdFx0aGVpZ2h0OiB7XHJcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdHN0eWxlOiAnJyxcclxuXHRcdFx0Ly8geCx5IOS4uuaYvuekuuWGheWuueW8ueeql+eahOWdkOaghyDkuLrkuobkuI3otoXov4flsY/luZUg6K6+5a6abWF4WOWSjG1heFlcclxuXHRcdFx0eDogMCxcclxuXHRcdFx0eTogMCxcclxuXHRcdFx0bWF4WDogMCxcclxuXHRcdFx0bWF4WTogMFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHQvLyDojrflj5bns7vnu5/orr7nva5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHR0aGlzLm1heFggPSByZXMud2luZG93V2lkdGggLSB1bmkudXB4MnB4KHRoaXMud2lkdGgpO1xyXG5cdFx0XHR0aGlzLm1heFkgPSByZXMud2luZG93SGVpZ2h0IC0gdW5pLnVweDJweCh0aGlzLmhlaWdodCk7XHJcblx0XHR9IGNhdGNoIChlKSB7fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIG1hc2sg5qC35byPXHJcblx0XHRtYXNrU3R5bGUoKSB7XHJcblx0XHRcdGlmICh0aGlzLm1hc2tWYWx1ZSkgcmV0dXJuIGBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4ke3RoaXMubWFza1ZhbHVlfSlgO1xyXG5cdFx0XHRyZXR1cm4gYGA7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJvdHRvbVN0eWxlKCkge1xyXG5cdFx0XHRyZXR1cm4gYGJvdHRvbTowO2xlZnQ6MDtyaWdodDowO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYmd9O2A7XHJcblx0XHR9LFxyXG5cdFx0ZnJlZVN0eWxlKCkge1xyXG5cdFx0XHRyZXR1cm4gYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmJnfTtcclxuXHRcdFx0XHRcdGxlZnQ6JHt0aGlzLnh9cHg7dG9wOiR7dGhpcy55fXB4O2A7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRvcGVuKHgsIHkpIHtcclxuXHRcdFx0dGhpcy54ID0geDtcclxuXHRcdFx0dGhpcy55ID0geTtcclxuXHRcdFx0dGhpcy5pc091dCh4LCB5KTtcclxuXHRcdFx0dGhpcy5zaG93ID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIOa3u+WKoOWKqOeUu1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oXHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLnBvcHVwLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICdzY2FsZSgxLDEpJyxcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICdyaWdodCx0b3AnLFxyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDFcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMCwgLy9tc1xyXG5cdFx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Yqo55S75omn6KGM57uT5p2fJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdGNsb3NlKCkge1xyXG5cdFx0XHR0aGlzLnNob3cgPSBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHQvLyDmmK/lkKblhbPpl61tYXNrXHJcblx0XHRoaWRlKCkge1xyXG5cdFx0XHRpZiAoIXRoaXMubWFza0NsaWNrKSByZXR1cm47XHJcblx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm6LaF5Ye66L6555WMXHJcblx0XHQvLyBAIOWQjue7reS/ruaUuVxyXG5cdFx0aXNPdXQoeCwgeSkge1xyXG5cdFx0XHR0aGlzLnggPSB4ID4gdGhpcy5tYXhYID8gdGhpcy5tYXhYIC0gMjAgOiB4O1xyXG5cdFx0XHR0aGlzLnkgPSB5ID4gdGhpcy5tYXhZID8gdGhpcy5tYXhZIDogeTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBvcHVwIHtcclxuXHR6LWluZGV4OiA5OTk7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1hc2sge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcbn1cclxuLmNvbnRlbnQge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmFuaW1hdGVkIHtcclxuXHQvKiAjaWZkZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcblx0b3BhY2l0eTogMDtcclxuXHQvKiAjZW5kaWYgKi9cclxufVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzg4ZGJjODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc4OGRiYzg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicG9wdXBcIjoge1xuICAgIFwiekluZGV4XCI6IDk5OSxcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJtYXNrXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCJcbiAgfSxcbiAgXCJhbmltYXRlZFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgwLCAwKVwiLFxuICAgIFwib3BhY2l0eVwiOiAwXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MmIyZDhmYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2aWdhdGlvbi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTJiMmQ4ZmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzdGlja3lcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJzdGlja3lcIlxuICB9XG59IiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3RhYmJhci9jb250YWN0cy9jb250YWN0cydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jb250YWN0cy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYmEwNDcyJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb250YWN0cy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbnRhY3RzLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2NvbnRhY3RzLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YmJhMDQ3MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jb250YWN0cy5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2JiYTA0NzImc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdiYmEwNDcyXCIsXG4gIFwiZWY5Yzg4NGNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvcGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRhY3RzLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JiYTA0NzImc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJuYXZpZ2F0b3ItYmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi6YCa6K6v5b2VXCIgfSB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wibGlzdHNcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50b3BNZW51LCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZsZXgtcm93XCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYXZhdGFyXCIsIFwibWwtM1wiLCBcIm1yLTJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi4uLy4uLy4uL3N0YXRpYy9sb2dvLnBuZ1wiLCBtb2RlOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJyaWdodFwiLCBcImJvcmRlci1ib3R0b21cIiwgXCJ0ZXh0LWVsbGlwc2lzXCJdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ1LXRleHRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbnRhY3RzLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZsZXgtcm93XCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYXZhdGFyXCIsIFwibWwtM1wiLCBcIm1yLTJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi4uLy4uLy4uL3N0YXRpYy9sb2dvLnBuZ1wiLCBtb2RlOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJyaWdodFwiLCBcImJvcmRlci1ib3R0b21cIiwgXCJ0ZXh0LWVsbGlwc2lzXCJdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ1LXRleHRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250YWN0cy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250YWN0cy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8IS0t5a+86Iiq5qCPIC0tPlxyXG5cdFx0PG5hdmlnYXRvci1iYXIgdGl0bGU9XCLpgJrorq/lvZVcIj48L25hdmlnYXRvci1iYXI+XHJcblx0XHQ8IS0tIOiBlOezu+S6uuWIl+ihqCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibGlzdHNcIj5cclxuXHRcdFx0PCEtLSDlm7rlrprnmoTliJfooaggLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdCAgYWxpZ24tY2VudGVyICBmbGV4IGZsZXgtcm93XCIgdi1mb3I9XCIoaXRlbSwgaSkgaW4gdG9wTWVudVwiIDprZXk9XCJpXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYXZhdGFyIG1sLTMgbXItMlwiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9sb2dvLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQgYm9yZGVyLWJvdHRvbSB0ZXh0LWVsbGlwc2lzXCI+e3sgaXRlbS5uYW1lIH19PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6IGU57O75Lq6IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxpc3QgIGFsaWduLWNlbnRlciAgZmxleCBmbGV4LXJvd1wiIHYtZm9yPVwiKGl0ZW0sIGkpIGluIGNvbnRhY3RzXCIgOmtleT1cImlcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJhdmF0YXIgbWwtMyBtci0yXCIgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2xvZ28ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodCBib3JkZXItYm90dG9tIHRleHQtZWxsaXBzaXNcIj57eyBpdGVtLm5hbWUgfX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbmF2aWdhdG9yQmFyIGZyb20gJ0AvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLWJhci52dWUnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0bmF2aWdhdG9yQmFyXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dG9wTWVudTogW3sgbmFtZTogJ+aWsOeahOaci+WPiycgfSwgeyBuYW1lOiAn576k6IGKJyB9LCB7IG5hbWU6ICfmoIfnrb4nIH1dLFxyXG5cdFx0XHRjb250YWN0czogW11cclxuXHRcdH07XHJcblx0fSxcclxuXHRtZXRob2RzOiB7fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5hdmF0YXIge1xyXG5cdGhlaWdodDogODBycHg7XHJcblx0d2lkdGg6IDgwcnB4O1xyXG59XHJcbi5yaWdodCB7XHJcblx0LyogbWFyZ2luLXRvcDogMzBycHg7ICovXHJcblx0LyogbWFyZ2luLWJvdHRvbTogMzBycHg7ICovXHJcblx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4ucmlnaHQtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDgwcnB4O1xyXG5cdHdpZHRoOiA4MHJweDtcclxufVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGFjdHMubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYmEwNDcyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRhY3RzLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YmJhMDQ3MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYXZhdGFyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjgwcnB4XCJcbiAgfSxcbiAgXCJyaWdodFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwicmlnaHQtY29udGFpbmVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjgwcnB4XCJcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=