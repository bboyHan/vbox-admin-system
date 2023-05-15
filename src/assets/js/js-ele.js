const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCUMENT html><p>Test</p>')
window = dom.window
document = window.document
navigator= window.navigator
history=window.history
addEventListener=window.addEventListener
// document = {};
// document.createElement = function(){};
// var window = {
//   navigator: {
//     appName: 'Netscape',
//   },
//   crypto: {
//     getRandomValues: getRandomValues,
//   },
// };
// var navigator = window['navigator'];
// function randoms(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
//
// function getRandomValues(buf) {
//   var min = 0,
//     max = 255;
//   if (buf.length > 65536) {
//     var e = new Error();
//     e.code = 22;
//     e.message =
//       "Failed to execute 'getRandomValues' : The " +
//       "ArrayBufferView's byte length (" +
//       buf.length +
//       ') exceeds the ' +
//       'number of bytes of entropy available via this API (65536).';
//     e.name = 'QuotaExceededError';
//     throw e;
//   }
//   if (buf instanceof Uint16Array) {
//     max = 65535;
//   } else if (buf instanceof Uint32Array) {
//     max = 4294967295;
//   }
//   for (var element in buf) {
//     buf[element] = randoms(min, max);
//   }
//   return buf;
// }
var _cc;

!function(e) {
  var t = {};
  function r(i) {
    if (t[i])
      return t[i].exports;
    var n = t[i] = {
      i: i,
      l: !1,
      exports: {
        __esModule: undefined
      }
    };
    return e[i].call(n.exports, n, n.exports, r),
      n.l = !0,
      n.exports
  }
  r.m = e,
    r.c = t,
    r.d = function(e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      })
    }
    ,
    r.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    }
    ,
    r.t = function(e, t) {
      if (1 & t && (e = r(e)),
      8 & t)
        return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)
        return e;
      var i = Object.create(null);
      if (r.r(i),
        Object.defineProperty(i, "default", {
          enumerable: !0,
          value: e
        }),
      2 & t && "string" != typeof e)
        for (var n in e)
          r.d(i, n, function(t) {
            return e[t]
          }
            .bind(null, n));
      return i
    }
    ,
    r.n = function(e) {
      var t = e && e.__esModule ? function() {
            return e["default"]
          }
          : function() {
            return e
          }
      ;
      return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 92)
  _cc = r;
}([function(e, t, r) {
  "use strict";
  var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
          i === undefined && (i = r),
            Object.defineProperty(e, i, {
              enumerable: !0,
              get: function() {
                return t[r]
              }
            })
        }
        : function(e, t, r, i) {
          i === undefined && (i = r),
            e[i] = t[r]
        }
    )
    , n = this && this.__exportStar || function(e, t) {
      for (var r in e)
        "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
    }
  ;
  t.__esModule = !0,
    n(r(2), t),
    n(r(6), t),
    n(r(1), t),
    n(r(11), t),
    n(r(12), t),
    n(r(13), t),
    n(r(5), t)
}
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.addUrlParam = t.getQueryParam = t.getQueryMap = t.getQuery = t.cutUrl = t.getEntryUrl = t.getReferrer = t.getHref = void 0;
    t.getHref = function() {
      var e = location.href || document.URL || "";
      return e.length > 256 ? e.substr(0, 255) + "*" : e
    }
    ;
    t.getReferrer = function() {
      var e = document.referrer || "";
      return e.length > 256 ? e.substr(0, 255) + "*" : e
    }
    ;
    t.getEntryUrl = function() {
      var e = t.getHref();
      try {
        if (e.indexOf("xui.ptlogin2.qq.com") > -1) {
          var r = e.match(/s_url=(.*?)&/);
          r && (e = decodeURIComponent(r[1]))
        }
      } catch (i) {}
      return e
    }
    ;
    t.cutUrl = function(e) {
      if (e) {
        var t = e.indexOf("?");
        if (t > 0)
          return e.substring(0, t)
      }
      return e
    }
    ;
    t.getQuery = function(e) {
      var t = e ? 1 : 0;
      try {
        return location.search.substr(t)
      } catch (n) {
        try {
          var r = document.URL
            , i = r.indexOf("?");
          if (i >= 0)
            return r.substr(i + t)
        } catch (n) {}
      }
      return ""
    }
    ;
    t.getQueryMap = function() {
      for (var e = {}, r = t.getQuery(!0).split("&"), i = 0; i < r.length; i++) {
        var n = /(.*?)=(.*)/.exec(r[i]);
        n && (e[n[1]] = n[2])
      }
      return e
    }
    ;
    t.getQueryParam = function(e) {
      return t.getQueryMap()[e]
    }
    ;
    var i = function(e, t, r) {
      if (-1 != e.indexOf("?")) {
        var i = new RegExp("(\\?|&" + t + ")=[^&]*");
        e = i.test(e) ? e.replace(i, "$1=" + r) : e + "&" + t + "=" + r
      } else
        e = e + "?" + t + "=" + r;
      return e
    };
    t.addUrlParam = function(e, t) {
      var r;
      for (r in t)
        "undefined" != typeof t[r] && (e = i(e, encodeURIComponent(r), encodeURIComponent("" + t[r])));
      return e
    }
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.setVoiceOverFocus = t.bodyAriaHidden = t.addAriaModel = t.isTouchEventSupported = t.get$EventPosition = t.test$TouchEvent = t.supportsPassive = t.isWindow = t.getWindow = t.getOffset = t.isDarkMode = t.shakeEl = t.addOnceAnimationClass = t.animationEndName = t.removeClass = t.addClass = t.setCss = t.getCSS = t.supportsCSS = t.createGeneralIframe = void 0;
    var n = r(0)
      , o = i(r(7));
    t.createGeneralIframe = function(e) {
      var t = document.createElement("div");
      (null === e || void 0 === e ? void 0 : e.name) ? t.innerHTML = '<iframe name="' + (null === e || void 0 === e ? void 0 : e.name) + '" />' : t.innerHTML = "<iframe />";
      var r = t.childNodes[0];
      return (null === e || void 0 === e ? void 0 : e.id) && (r.id = e.id),
      (null === e || void 0 === e ? void 0 : e.className) && (r.className = e.className),
        r.setAttribute("frameborder", "0"),
        r.setAttribute("border", "0"),
        r.setAttribute("marginheight", "0"),
        r.setAttribute("marginwidth", "0"),
        r.setAttribute("scrolling", "no"),
        r
    }
    ;
    t.supportsCSS = function(e, t) {
      var r = document.createElement("div");
      return e in r.style && "length" !== e && "parentRule" !== e && (r.style[e] = t,
      r.style[e] === t)
    }
    ;
    t.getCSS = function(e, t) {
      return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle(e, null)[t]
    }
    ;
    t.setCss = function(e, t) {
      if (e && t && n.isObject(t)) {
        for (var r in t)
          try {
            e.style[r] = t[r]
          } catch (i) {}
        return t
      }
    }
    ;
    t.addClass = function(e, t) {
      if (e.classList)
        e.classList.add(t);
      else {
        var r = e.className
          , i = r + ("" !== r ? " " : "") + t;
        e.className = i
      }
    }
    ;
    t.removeClass = function(e, t) {
      if (e.classList)
        return e.classList.remove(t);
      var r = " " + e.className + " "
        , i = (r = r.replace(/(\s+)/gi, " ")).replace(" " + t + " ", " ");
      i = i.replace(/(^\s+)|(\s+$)/g, ""),
        e.className = i
    }
      ,
      t.animationEndName = function() {
        var e, t = document.createElement("fake"), r = {
          animation: "animationend",
          mozAnimation: "mozAnimationEnd",
          webkitAnimation: "webkitAnimationEnd"
        };
        for (e in r)
          if (t.style[e] !== undefined)
            return r[e];
        return !1
      }();
    t.addOnceAnimationClass = function(e) {
      var r = e.el
        , i = e.className
        , a = e.callback
        , s = e.duration;
      s || (s = 400),
      n.isArray(r) || (r = [r]);
      for (var c = 0; c < r.length; c++) {
        var u = r[c];
        t.addClass(u, i)
      }
      var l = function() {
        n.isArray(r) || (r = [r]);
        for (var e = 0; e < r.length; e++) {
          var s = r[e];
          t.removeClass(s, i)
        }
        a(),
        t.animationEndName && o["default"].remove(r[0], t.animationEndName, l)
      };
      t.animationEndName ? o["default"].add(r[0], t.animationEndName, l) : setTimeout(l, s)
    }
    ;
    t.shakeEl = function(e, r) {
      t.addOnceAnimationClass({
        el: e,
        className: "shake",
        callback: r
      })
    }
    ;
    function a(e) {
      return s(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    function s(e) {
      return null != e && e == e.window
    }
    function c(e) {
      return /^touch/.test(e.type)
    }
    t.isDarkMode = function() {
      var e;
      return null === (e = window.matchMedia) || void 0 === e ? void 0 : e.call(window, "(prefers-color-scheme: dark)").matches
    }
      ,
      t.getOffset = function(e) {
        var t, r, i = {
          top: 0,
          left: 0
        }, n = null === e || void 0 === e ? void 0 : e.ownerDocument;
        if (n) {
          t = n.documentElement,
          "undefined" != typeof e.getBoundingClientRect && (i = e.getBoundingClientRect());
          var o = 0
            , s = 0;
          return (r = a(n)) && (o = (r.pageYOffset || t.scrollTop) - (t.clientTop || 0),
            s = (r.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)),
            {
              top: i.top + o,
              left: i.left + s
            }
        }
      }
      ,
      t.getWindow = a,
      t.isWindow = s,
      t.supportsPassive = function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0
            }
          });
          window.addEventListener("testPassive", null, t),
            window.removeEventListener("testPassive", null, t)
        } catch (r) {}
        return e
      }(),
      t.test$TouchEvent = c,
      t.get$EventPosition = function(e) {
        if (c(e)) {
          var t;
          e.originalEvent && (t = e.originalEvent);
          var r = ((null === t || void 0 === t ? void 0 : t.touches) || [])[0];
          return r ? {
            x: r.clientX,
            y: r.clientY
          } : null
        }
        return {
          x: e.pageX,
          y: e.pageY
        }
      }
      ,
      t.isTouchEventSupported = function() {
        return "ontouchstart"in document.createElement("div")
      }
      ,
      t.addAriaModel = function(e) {
        try {
          e.setAttribute("role", "dialog"),
            e.setAttribute("aria-modal", "true"),
            e.setAttribute("aria-label", "\u9a8c\u8bc1\u7801")
        } catch (t) {}
      }
      ,
      t.bodyAriaHidden = {
        hide: function() {
          try {
            document.body.setAttribute("aria-hidden", "true")
          } catch (e) {}
        },
        unhide: function() {
          try {
            document.body.setAttribute("aria-hidden", "false")
          } catch (e) {}
        }
      },
      t.setVoiceOverFocus = function(e) {
        e.setAttribute("tabindex", "0"),
          e.blur();
        var t = 0
          , r = window.setInterval(function() {
          e.focus(),
          (t += 1) >= 10 && window.clearInterval(r)
        }, 10)
      }
  }
  , function(e, t) {
    (function(t) {
        e.exports = t
      }
    ).call(this, {})
  }
  , function(e, t, r) {
    "use strict";
    var i = Object.prototype.hasOwnProperty
      , n = Object.prototype.toString
      , o = Object.defineProperty
      , a = Object.getOwnPropertyDescriptor
      , s = function(e) {
      return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
    }
      , c = function(e) {
      if (!e || "[object Object]" !== n.call(e))
        return !1;
      var t, r = i.call(e, "constructor"), o = e.constructor && e.constructor.prototype && i.call(e.constructor.prototype, "isPrototypeOf");
      if (e.constructor && !r && !o)
        return !1;
      for (t in e)
        ;
      return void 0 === t || i.call(e, t)
    }
      , u = function(e, t) {
      o && "__proto__" === t.name ? o(e, t.name, {
        enumerable: !0,
        configurable: !0,
        value: t.newValue,
        writable: !0
      }) : e[t.name] = t.newValue
    }
      , l = function(e, t) {
      if ("__proto__" === t) {
        if (!i.call(e, t))
          return;
        if (a)
          return a(e, t).value
      }
      return e[t]
    };
    e.exports = function d() {
      var e, t, r, i, n, o, a = arguments[0], p = 1, f = arguments.length, h = !1;
      for ("boolean" == typeof a && (h = a,
        a = arguments[1] || {},
        p = 2),
           (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); p < f; ++p)
        if (null != (e = arguments[p]))
          for (t in e)
            r = l(a, t),
            a !== (i = l(e, t)) && (h && i && (c(i) || (n = s(i))) ? (n ? (n = !1,
              o = r && s(r) ? r : []) : o = r && c(r) ? r : {},
              u(a, {
                name: t,
                newValue: d(h, o, i)
              })) : void 0 !== i && u(a, {
              name: t,
              newValue: i
            }));
      return a
    }
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      , n = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.debounce = t.getPerformance = t.getLogCommonParams = t.getDeviceInfo = t.getTokenID = void 0;
    var o = n(r(14));
    function a() {
      var e = function(e) {
        var t, r = document.cookie, i = encodeURIComponent(e), n = r.indexOf(i), o = null;
        if (n > -1) {
          var a = r.indexOf(";", n);
          -1 === a && (a = r.length),
            o = decodeURIComponent(r.substring(n + i.length + 1, a))
        }
        try {
          window.localStorage && (t = localStorage.getItem(e)),
          window.sessionStorage && (t = t || sessionStorage.getItem(e))
        } catch (s) {}
        return t || o
      }("TDC_itoken");
      return e ? e.split(":")[0] : undefined
    }
    function s() {
      var e = new o["default"](navigator.userAgent);
      return {
        platform: e.getOS().name,
        client: e.getBrowser().name
      }
    }
    t.getTokenID = a,
      t.getDeviceInfo = s,
      t.getLogCommonParams = function() {
        try {
          var e = document.referrer || "unknown"
            , t = location.href || document.URL
            , r = navigator.userAgent;
          e = e.length > 512 ? e.substr(0, 512) : e,
            t = t.length > 1024 ? t.substr(0, 1024) : t;
          var i = s()
            , n = i.client
            , o = i.platform;
          return ["referer=" + encodeURIComponent(e), "href=" + encodeURIComponent(t), "token_id=" + a(), "ua=" + r, "client=" + n, "platform=" + o]
        } catch (c) {
          return t = (t = c.message).length > 1024 ? t.substr(0, 1024) : t,
            ["href=" + encodeURIComponent(t)]
        }
      }
    ;
    t.getPerformance = function(e) {
      var t, r;
      if (window.performance && "function" == typeof window.performance.getEntriesByType) {
        var n = []
          , o = window.performance.getEntriesByType("resource")
          , a = ["xmlhttprequest", "script", "iframe", "img"];
        try {
          for (var s = i(o), c = s.next(); !c.done; c = s.next()) {
            var u = c.value;
            if (-1 !== a.indexOf(u.initiatorType) && !/cap_monitor/.test(u.name) && e.test(u.name)) {
              var l = u.name.split("://")[1].split("?")[0];
              n.push({
                name: l,
                duration: Math.floor(u.duration)
              })
            }
          }
        } catch (d) {
          t = {
            error: d
          }
        } finally {
          try {
            c && !c.done && (r = s["return"]) && r.call(s)
          } finally {
            if (t)
              throw t.error
          }
        }
        return n
      }
      return []
    }
    ;
    t.debounce = function(e, t) {
      var r;
      return function() {
        for (var i = this, n = [], o = 0; o < arguments.length; o++)
          n[o] = arguments[o];
        clearTimeout(r),
          r = setTimeout(function() {
            e.apply(i, n)
          }, t)
      }
    }
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.isArray = t.isObject = void 0;
    var i = function(e) {
      return function(t) {
        return Object.prototype.toString.call(t) === "[object " + e + "]"
      }
    };
    t.isObject = i("Object"),
      t.isArray = i("Array")
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    t["default"] = {
      add: function(e, t, r) {
        e && (e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r)
      },
      remove: function(e, t, r) {
        e && (e.removeEventListener ? e.removeEventListener(t, r, !1) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null)
      }
    }
  }
  , function(e, t, r) {
    "use strict";
    function i(e, r, i) {
      return "terror_" + t.ErrorCode[e] + "_" + r + "_" + Math.floor((new Date).getTime() / 1e3) + (i ? "_" + i : "")
    }
    function n() {
      return "@" + Math.random().toString(36).substr(2)
    }
    t.__esModule = !0,
      t.getRandStr = t.getErrorRes = t.getErrorTicket = t.ErrorCode = void 0,
      t.ErrorCode = {
        ENTRYJS_LOAD_ERROR: 1001,
        CAPTCHA_SHOW_TIMEOUT: 1002,
        FRAMEJS_LOAD_TIMEOUT: 1003,
        FRAMEJS_LOAD_ERROR: 1004,
        FRAMEJS_RUN_ERROR: 1005,
        GET_CAPTCHA_CONFIG_REQUEST_ERROR: 1006,
        PRE_TEMPLATE_LOAD_TIMEOUT: 1007,
        IFRAME_LOAD_TIMEOUT: 1008,
        LIB_JQ_LOAD_ERROR: 1009,
        CAPTCHA_JS_LOAD_ERROR: 1010,
        CAPTCHA_JS_RUN_ERROR: 1011,
        REFRESH_ERROR: 1012,
        VERIFY_ERROR: 1013
      },
      t.getErrorTicket = i,
      t.getErrorRes = function(e, r, o) {
        return {
          ret: 0,
          randstr: n(),
          ticket: i(e, r || "", o),
          errorCode: t.ErrorCode[e],
          errorMessage: e.toLowerCase()
        }
      }
      ,
      t.getRandStr = n
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.all = t.keys = void 0;
    t.keys = ["frame-verification", "frame-back", "frame-simple", "frame-standard", "frame-ok", "aria-verification-simple", "aria-verification-standard", "aria-close", "aria-standard", "aria-simple", "aria-feedback", "aria-refresh", "note-img-load-failed", "note-verify-success", "note-verify-timeout", "note-verify-failed", "note-verify-error", "note-verify-failed-max", "note-verify-default", "note-appid-region-wrong"];
    var i = {
      "zh-cn": ["\u5b89\u5168\u9a8c\u8bc1", "\u8fd4\u56de", "\u6211\u4e0d\u4f1a", "\u5e38\u89c4\u9a8c\u8bc1", "\u786e\u5b9a", "\u65e0\u969c\u788d\u9a8c\u8bc1", "\u5e38\u89c4\u9a8c\u8bc1", "\u5173\u95ed\u9a8c\u8bc1", "\u5207\u6362\u4e3a\u5e38\u89c4\u9a8c\u8bc1\u65b9\u5f0f", "\u6211\u4e0d\u4f1a\uff0c\u6362\u4e00\u79cd\u9a8c\u8bc1\u65b9\u5f0f", "\u95ee\u9898\u53cd\u9988", "\u5237\u65b0\u9a8c\u8bc1", "\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u70b9\u51fb\u5237\u65b0", "\u9a8c\u8bc1\u6210\u529f\uff01", "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5", "\u9a8c\u8bc1\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5", "\u60a8\u7684\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", "\u8fd9\u9898\u6709\u70b9\u96be\u5462\uff0c\u5df2\u4e3a\u60a8\u66f4\u6362\u9898\u76ee", "\u7f51\u7edc\u604d\u60da\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8bd5\u4e00\u6b21\u5427", "appid\u6240\u5c5e\u5730\u57df\u4e0e\u5b9e\u9645\u4f7f\u7528\u5730\u57df\u4e0d\u7b26\uff0c\u8bf7\u8054\u7cfb\u9a8c\u8bc1\u7801\u56e2\u961f\u5904\u7406"],
      "zh-hk": ["\u5b89\u5168\u9a57\u8b49", "\u8fd4\u56de", "\u7121\u969c\u7919\u65b9\u5f0f", "\u5e38\u898f\u9a57\u8b49", "\u78ba\u5b9a", "\u7121\u969c\u7919\u9a57\u8b49", "\u5e38\u898f\u9a57\u8b49", "\u95dc\u9589\u9a57\u8b49", "\u5207\u63db\u70ba\u5e38\u898f\u9a57\u8b49\u65b9\u5f0f", "\u6211\u4e0d\u6703\uff0c\u63db\u4e00\u7a2e\u9a57\u8b49\u65b9\u5f0f", "\u610f\u898b\u53cd\u6620", "\u5237\u65b0\u9a57\u8b49", "\u7121\u6cd5\u52a0\u8f09\u5716\u7247\uff0c\u8acb\u9ede\u64ca\u5237\u65b0", "\u9a57\u8b49\u6210\u529f\uff01", "\u7db2\u7d61\u903e\u6642\uff0c\u8acb\u91cd\u8a66", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66", "\u60a8\u7684\u64cd\u4f5c\u904e\u65bc\u983b\u7e41\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66", "\u9019\u984c\u6709\u9ede\u96e3\uff0c\u5df2\u70ba\u4f60\u66f4\u63db\u984c\u76ee", "\u7db2\u7d61\u505c\u9813\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8a66\u4e00\u6b21\u5427", "appid\u6240\u5c6c\u5730\u57df\u8207\u5be6\u969b\u4f7f\u7528\u5730\u57df\u4e0d\u7b26\uff0c\u8acb\u806f\u7cfb\u9a57\u8b49\u78bc\u5718\u968a\u8655\u7406"],
      "zh-tw": ["\u5b89\u5168\u9a57\u8b49", "\u8fd4\u56de", "\u7121\u969c\u7919\u65b9\u5f0f", "\u5e38\u898f\u9a57\u8b49", "\u78ba\u5b9a", "\u7121\u969c\u7919\u9a57\u8b49", "\u5e38\u898f\u9a57\u8b49", "\u95dc\u9589\u9a57\u8b49", "\u5207\u63db\u70ba\u5e38\u898f\u9a57\u8b49\u65b9\u5f0f", "\u6211\u4e0d\u6703\uff0c\u63db\u4e00\u7a2e\u9a57\u8b49\u65b9\u5f0f", "\u53cd\u6620\u610f\u898b", "\u5237\u65b0\u9a57\u8b49", "\u5716\u7247\u8f09\u5165\u5931\u6557\uff0c\u8acb\u9ede\u64ca\u91cd\u65b0\u6574\u7406", "\u9a57\u8b49\u6210\u529f\uff01", "\u7db2\u7d61\u903e\u6642\uff0c\u8acb\u91cd\u8a66", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66", "\u60a8\u7684\u64cd\u4f5c\u904e\u65bc\u983b\u7e41\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66", "\u9019\u984c\u6709\u9ede\u96e3\uff0c\u5df2\u70ba\u4f60\u66f4\u63db\u984c\u76ee", "\u7db2\u8def\u4e2d\u65b7\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8a66\u4e00\u6b21\u5427", "appid\u6240\u5c6c\u5730\u57df\u8207\u5be6\u969b\u4f7f\u7528\u5730\u57df\u4e0d\u7b26\uff0c\u8acb\u806f\u7cfb\u9a57\u8b49\u78bc\u5718\u968a\u8655\u7406"],
      en: ["Verification", "Back", "Simple mode", "Standard mode", "OK", "Simple mode", "Standard mode", "Quit verification", "Switch to Standard mode", "Too difficult? Switch to Simple mode", "Feedback", "Try a new captcha", "Image loading failed. Click to refresh", "Verification passed", "Network timed out. Please try again.", "Verification failed. Try again.", "Operation too often. Please retry later.", "Too hard? Try a new one", "Network error (+). Please try again.", "The AppID does not match the actual location. Please contact the Captcha team."],
      ja: ["\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a8d\u8a3c", "\u623b\u308b", "\u30b7\u30f3\u30d7\u30eb\u30e2\u30fc\u30c9", "\u4e00\u822c\u30e2\u30fc\u30c9", "OK", "\u30b7\u30f3\u30d7\u30eb\u30e2\u30fc\u30c9", "\u4e00\u822c\u30e2\u30fc\u30c9", "\u9589\u3058\u308b", "\u4e00\u822c\u30e2\u30fc\u30c9\u3078\u5207\u308a\u66ff\u3048\u308b", "\u30b7\u30f3\u30d7\u30eb\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u3048\u307e\u3059", "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af", "\u518d\u8aad\u307f\u8fbc\u307f", "\u753b\u50cf\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u30af\u30ea\u30c3\u30af\u3057\u3066\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u306b\u6210\u529f\u3057\u307e\u3057\u305f", "\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u63a5\u7d9a\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u64cd\u4f5c\u304c\u983b\u5ea6\u306b\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u5f8c\u3067\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u3053\u306e\u30af\u30a4\u30ba\u306f\u96e3\u3057\u3044\u306e\u3067\u3001\u5225\u306e\u30af\u30a4\u30ba\u306b\u30c1\u30e3\u30ec\u30f3\u30b8\u3057\u307e\u3057\u3087\u3046", "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f(+)\u3002\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044", "appid\u306e\u6240\u5c5e\u30ea\u30fc\u30b8\u30e7\u30f3\u306f\u5b9f\u969b\u306e\u5229\u7528\u30ea\u30fc\u30b8\u30e7\u30f3\u3068\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002Captcha\u30c1\u30fc\u30e0\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044"],
      ko: ["\ubcf4\uc548 \uc778\uc99d", "\ub3cc\uc544\uac00\uae30", "\ub108\ubb34 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.", "\uc77c\ubc18 \uc778\uc99d", "\ud655\uc778", "\ub108\ubb34 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.", "\uc77c\ubc18 \uc778\uc99d", "\uc778\uc99d \ub05d\ub0b4\uae30", "\uc77c\ubc18 \uc778\uc99d \ubc29\uc2dd\uc73c\ub85c \uc804\ud658\ud558\uae30", "\uc77c\ubc18 \uc778\uc99d \ubc29\uc2dd\uc73c\ub85c \uc804\ud658\ud558\uae30", "\ud53c\ub4dc\ubc31", "\uc774\ubbf8\uc9c0 \uc0c8\ub85c\uace0\uce68", "\uc774\ubbf8\uc9c0 \ub85c\ub529\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68\ud558\uc138\uc694.", "\uc778\uc99d \uc131\uacf5", "\ub124\ud2b8\uc6cc\ud06c \uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "\uc778\uc99d \uc624\ub958\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "\uc2dc\ub3c4 \ud69f\uc218\uac00 \ub108\ubb34 \ub9ce\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "\uc880 \ub354 \uc26c\uc6b4 \ubb38\uc81c\ub85c \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694.", "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\uc785\ub2c8\ub2e4(+). \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "AppID \ub9ac\uc804\uacfc \uc2e4\uc81c \uc704\uce58\uc640 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Captcha\ud300\uc5d0 \ubb38\uc758\ud558\uc138\uc694."],
      pt: ["Verifica\xe7\xe3o", "Voltar", "Modo simples", "Modo padr\xe3o", "OK", "Modo simples", "Modo padr\xe3o", "Sair da verifica\xe7\xe3o", "Mudar para o modo padr\xe3o", "Muito dif\xedcil? Mude para o modo simples", "Feedback", "Tentar outro captcha", "Falha no carregamento da imagem. Clique para atualizar", "Verifica\xe7\xe3o conclu\xedda", "A rede expirou. Tente novamente.", "Falha na verifica\xe7\xe3o. Tente novamente.", "Opera\xe7\xe3o realizada com muita frequ\xeancia. Tente novamente mais tarde.", "Muito dif\xedcil? Tente outro", "Erro de rede (+). Tente novamente.", "O AppID n\xe3o corresponde ao local real. Entre em contato com a equipe do Captcha."],
      id: ["Verifikasi", "Kembali", "Mode sederhana", "Mode standar", "Oke", "Mode sederhana", "Mode standar", "Keluar verifikasi", "Beralih ke mode Standar", "Terlalu sulit? Beralih ke mode Sederhana", "Masukan", "Coba captcha baru", "Gambar gagal dimuat. Klik untuk merefresh", "Verifikasi berhasil", "Jaringan kehabisan waktu. Coba lagi.", "Verifikasi gagal. Coba lagi.", "Operasi terlalu sering. Coba lagi nanti.", "Terlalu sulit? Coba yang baru", "Kesalahan jaringan (+). Coba lagi.", "AppID tidak cocok dengan lokasi aktual. Harap hubungi tim Captcha."],
      ar: ["\u0627\u0644\u062a\u062d\u0642\u0642", "\u0631\u062c\u0648\u0639", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0628\u0633\u064a\u0637", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u064a\u0627\u0633\u064a", "\u062d\u0633\u0646\u064b\u0627", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0628\u0633\u064a\u0637", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u064a\u0627\u0633\u064a", "\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u062a\u062d\u0642\u0642", "\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u064a\u0627\u0633\u064a", "\u0635\u0639\u0628\u0629 \u0644\u0644\u063a\u0627\u064a\u0629\u061f \u0642\u0645 \u0628\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0628\u0633\u064a\u0637", "\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a", "\u062c\u0631\u0651\u0628 captcha \u062c\u062f\u064a\u062f\u0629", "\u0641\u0634\u0644 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0648\u0631\u0629. \u0627\u0646\u0642\u0631 \u0644\u0644\u062a\u062d\u062f\u064a\u062b", "\u0646\u062c\u062d \u0627\u0644\u062a\u062d\u0642\u0642", "\u0627\u0646\u062a\u0647\u062a \u0645\u0647\u0644\u0629 \u0627\u0644\u0634\u0628\u0643\u0629. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.", "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0642\u0642. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.", "\u0645\u0631\u0627\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0643\u062b\u064a\u0631\u0629 \u062c\u062f\u064b\u0627. \u062d\u0627\u0648\u0644 \u0644\u0627\u062d\u0642\u064b\u0627.", "\u0635\u0639\u0628\u0629 \u0644\u0644\u063a\u0627\u064a\u0629\u061f \u062c\u0631\u0628 \u0648\u0627\u062d\u062f\u0629 \u0623\u062e\u0631\u0649", "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0634\u0628\u0643\u0629 (+). \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.", "\u0644\u0627 \u064a\u062a\u0637\u0627\u0628\u0642 \u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0645\u0639 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0641\u0639\u0644\u064a. \u064a\u064f\u0631\u062c\u0649 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064a\u0642 Captcha."],
      my: ["\u1021\u1010\u100a\u103a\u1015\u103c\u102f\u1001\u103c\u1004\u103a\u1038", "\u1014\u1031\u102c\u1000\u103a\u2026", "\u101b\u102d\u102f\u1038\u101b\u103e\u1004\u103a\u1038\u1019\u102f\u1012\u103a", "\u1015\u102f\u1036\u1019\u103e\u1014\u103a\u1019\u102f\u1012\u103a", "\u1021\u102d\u102f\u1000\u1031", "\u101b\u102d\u102f\u1038\u101b\u103e\u1004\u103a\u1038\u1019\u102f\u1012\u103a", "\u1015\u102f\u1036\u1019\u103e\u1014\u103a\u1019\u102f\u1012\u103a", "\u1021\u1010\u100a\u103a\u1015\u103c\u102f\u1001\u103c\u1004\u103a\u1038\u1019\u103e\u1011\u103d\u1000\u103a\u1015\u102b", "\u1015\u102f\u1036\u1019\u103e\u1014\u103a\u1019\u102f\u1012\u103a\u101e\u102d\u102f\u1037 \u1015\u103c\u1031\u102c\u1004\u103a\u1038\u1015\u102b", "\u1001\u1000\u103a\u1001\u1032\u101c\u103d\u1014\u103a\u1038\u101e\u101c\u102c\u1038\u104b \u101b\u102d\u102f\u1038\u101b\u103e\u1004\u103a\u1038\u1019\u102f\u1012\u103a\u101e\u102d\u102f\u1037 \u1015\u103c\u1031\u102c\u1004\u103a\u1038\u1015\u102b\u104b", "\u1010\u102f\u1036\u1037\u1015\u103c\u1014\u103a\u1019\u103e\u102f", "\u1000\u1000\u103a\u1015\u103a\u1001\u103b\u102c\u1021\u101e\u1005\u103a\u1016\u103c\u1004\u1037\u103a \u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b", "\u1015\u102f\u1036\u1019\u1010\u1004\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u104b \u101b\u102e\u1016\u101b\u1000\u103a\u101b\u103e\u103a\u101c\u102f\u1015\u103a\u101b\u1014\u103a\u1014\u103e\u102d\u1015\u103a", "\u1021\u1010\u100a\u103a\u1015\u103c\u102f\u1001\u103c\u1004\u103a\u1038\u1021\u1031\u102c\u1004\u103a", "\u1000\u103d\u1014\u103a\u101b\u1000\u103a\u1021\u1001\u103b\u102d\u1014\u103a\u101c\u103d\u1014\u103a\u1015\u103c\u102e\u104b \u1011\u1015\u103a\u101c\u102f\u1015\u103a\u1015\u102b\u104b", "\u1021\u1010\u100a\u103a\u1019\u1015\u103c\u102f\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u104b \u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b\u104b", "\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a\u1019\u103b\u102c\u1038\u101c\u103d\u1014\u103a\u1038\u101e\u100a\u103a\u104b \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u101c\u102f\u1015\u103a\u1015\u102b\u104b", "\u1001\u1000\u103a\u1001\u1032\u101c\u103d\u1014\u103a\u1038\u101e\u101c\u102c\u1038\u104b \u1021\u101e\u1005\u103a\u1015\u103c\u1031\u102c\u1004\u103a\u1038\u1015\u102b", "\u1000\u103d\u1014\u103a\u101b\u1000\u103a\u1015\u103c\u103f\u1014\u102c (+)\u104b \u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b\u104b", "AppID \u101e\u100a\u103a \u1021\u1019\u103e\u1014\u103a\u1010\u1000\u101a\u103a\u101b\u103e\u102d\u101e\u1031\u102c\u1014\u1031\u101b\u102c\u1014\u103e\u1004\u1037\u103a \u1019\u1000\u102d\u102f\u1000\u103a\u100a\u102e\u1015\u102b\u104b \u1000\u1000\u103a\u1015\u103a\u1001\u103b\u102c \u1021\u1016\u103d\u1032\u1037\u1000\u102d\u102f \u1006\u1000\u103a\u101e\u103d\u101a\u103a\u1015\u102b\u104b"],
      fr: ["V\xe9rification", "Retour", "Mode simple", "Mode standard", "OK", "Mode simple", "Mode standard", "Arr\xeater la v\xe9rification", "Passez en mode standard", "Trop difficile\xa0? Passez en mode simple", "Commentaires", "Essayez un nouveau captcha", "Image non charg\xe9e. Actualisez", "V\xe9rification faite", "R\xe9seau interrompu. R\xe9essayez.", "V\xe9rification \xe9chou\xe9e. R\xe9essayez", "Op\xe9ration trop fr\xe9quente. R\xe9essayez apr\xe8s.", "Trop dur\xa0? Essayez-en un autre", "Erreur r\xe9seau (+). R\xe9essayez.", "L'AppID ne correspond pas \xe0 l'emplacement r\xe9el. Contactez l'\xe9quipe Captcha."],
      de: ["\xdcberpr\xfcfung", "Zur\xfcck", "Leichtmodus", "Standardmodus", "OK", "Leichtmodus", "Standardmodus", "\xdcberpr\xfcfung beenden", "In Standardmodus wechseln", "Zu schwer? In Leichtmodus wechseln", "R\xfcckmeldung", "Versuchen Sie ein neues Captcha", "Bild n. geladen. F\xfcr Aktual. klicken", "\xdcberpr\xfcfung okay", "Netzw-Timeout. Erneut versuchen.", "\xdcberpr\xfcf. n. OK. Neu versuchen.", "Vorgang zu oft. Sp\xe4ter erneut versuchen.", "Zu schwer? Neuer Versuch", "Netzwerkfehler (+). Neu versuchen.", "AppID passt nicht zum aktuellen Standort. Wenden Sie sich an das Captcha-Team."],
      he: ["\u05d0\u05d9\u05de\u05d5\u05ea", "\u05d7\u05d6\u05e8\u05d4", "\u05de\u05e6\u05d1 \u05e4\u05e9\u05d5\u05d8", "\u05de\u05e6\u05d1 \u05e8\u05d2\u05d9\u05dc", "\u05d0\u05d9\u05e9\u05d5\u05e8", "\u05de\u05e6\u05d1 \u05e4\u05e9\u05d5\u05d8", "\u05de\u05e6\u05d1 \u05e8\u05d2\u05d9\u05dc", "\u05d9\u05e6\u05d9\u05d0\u05d4 \u05de\u05d0\u05d9\u05de\u05d5\u05ea", "\u05de\u05e2\u05d1\u05e8 \u05dc\u05de\u05e6\u05d1 \u05e8\u05d2\u05d9\u05dc", "\u05e7\u05e9\u05d4 \u05de\u05d3\u05d9? \u05e0\u05d9\u05ea\u05df \u05dc\u05e2\u05d1\u05d5\u05e8 \u05dc\u05de\u05e6\u05d1 \u05e4\u05e9\u05d5\u05d8", "\u05de\u05e9\u05d5\u05d1", "\u05d9\u05e9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05d0\u05d9\u05de\u05d5\u05ea \u05d0\u05e0\u05d5\u05e9 \u05d7\u05d3\u05e9", "\u05e0\u05db\u05e9\u05dc\u05d4 \u05d8\u05e2\u05d9\u05e0\u05ea \u05d4\u05ea\u05de\u05d5\u05e0\u05d4. \u05d9\u05e9 \u05dc\u05dc\u05d7\u05d5\u05e5 \u05db\u05d3\u05d9 \u05dc\u05e8\u05e2\u05e0\u05df", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05d4\u05e6\u05dc\u05d9\u05d7", "\u05e4\u05d2 \u05d6\u05de\u05df \u05d4\u05e8\u05e9\u05ea \u05d4\u05e7\u05e6\u05d5\u05d1. \u05e0\u05d0 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1.", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e0\u05db\u05e9\u05dc. \u05d9\u05e9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1.", "\u05d4\u05e4\u05e2\u05dc\u05d4 \u05ea\u05d3\u05d9\u05e8\u05d4 \u05de\u05d3\u05d9. \u05e0\u05d0 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1 \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8.", "\u05e7\u05e9\u05d4 \u05de\u05d3\u05d9? \u05e0\u05d9\u05ea\u05df \u05dc\u05e0\u05e1\u05d5\u05ea \u05d7\u05d3\u05e9", "\u05e9\u05d2\u05d9\u05d0\u05ea \u05e8\u05e9\u05ea (+). \u05e0\u05d0 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1.", "\u05d4\u05de\u05d6\u05d4\u05d4 AppID \u05dc\u05d0 \u05de\u05ea\u05d0\u05d9\u05dd \u05dc\u05de\u05d9\u05e7\u05d5\u05dd \u05d4\u05de\u05de\u05e9\u05d9. \u05e0\u05d0 \u05dc\u05e4\u05e0\u05d5\u05ea \u05dc\u05e6\u05d5\u05d5\u05ea \u05d0\u05d9\u05de\u05d5\u05ea \u05d0\u05e0\u05d5\u05e9."],
      hi: ["\u0938\u0924\u094d\u092f\u093e\u092a\u0928", "\u092a\u0940\u091b\u0947", "\u0906\u0938\u093e\u0928 \u092e\u094b\u0921", "\u092e\u093e\u0928\u0915 \u092e\u094b\u0921", "\u0920\u0940\u0915", "\u0906\u0938\u093e\u0928 \u092e\u094b\u0921", "\u092e\u093e\u0928\u0915 \u092e\u094b\u0921", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u091b\u094b\u0921\u093c \u0926\u0947\u0902", "\u092e\u093e\u0928\u0915 \u092e\u094b\u0921 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0947\u0902", "\u0915\u093e\u092b\u093c\u0940 \u0915\u0920\u093f\u0928? \u0906\u0938\u093e\u0928 \u092e\u094b\u0921 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0947\u0902", "\u092b\u0940\u0921\u092c\u0948\u0915", "\u090f\u0915 \u0928\u092f\u093e \u0915\u0948\u092a\u094d\u091a\u093e \u0906\u091c\u092e\u093e\u090f\u0902", "\u091b\u0935\u093f \u0932\u094b\u0921 \u0928\u0939\u0940\u0902\u0964 \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0915\u0947 \u0930\u093f\u092b\u094d\u0930\u0947\u0936  \u0915\u0930\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u092a\u093e\u0930\u093f\u0924", "\u0928\u0947\u091f\u0935\u0930\u094d\u0915 \u0938\u092e\u092f \u0938\u092e\u093e\u092a\u094d\u0924\u0964 \u092b\u093f\u0930 \u0938\u0947 \u0915\u0930\u0947\u0902\u0964", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0935\u093f\u092b\u0932\u0964 \u092b\u093f\u0930 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", "\u092a\u094d\u0930\u091a\u093e\u0932\u0928 \u0915\u093e \u0905\u0915\u094d\u0938\u0930 \u0939\u094b\u0928\u093e\u0964 \u092c\u093e\u0926 \u092e\u0947\u0902 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", "\u0915\u093e\u092b\u093c\u0940 \u0915\u0920\u094b\u0930? \u090f\u0915 \u0928\u092f\u093e \u0906\u091c\u092e\u093e\u090f\u0902", "\u0928\u0947\u091f\u0935\u0930\u094d\u0915 \u0924\u094d\u0930\u0941\u091f\u093f (+)\u0964 \u092b\u093f\u0930 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", "\u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0938\u094d\u0925\u093e\u0928 \u0915\u0940 \u0910\u092a \u0906\u0908\u0921\u0940 \u0938\u0947 \u092e\u0947\u0932 \u0928\u0939\u0940\u0902 \u0916\u093e\u0924\u0940\u0964 \u0915\u0943\u092a\u092f\u093e \u0915\u0948\u092a\u094d\u091a\u093e \u091f\u0940\u092e \u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0964"],
      it: ["Verifica", "Indietro", "Mod. semplice", "Mod. standard", "OK", "Mod. semplice", "Mod. standard", "Esci dalla verifica", "Passa alla mod. standard", "Troppo diffic.? Passa alla mod. semplice", "Feedback", "Prova un altro captcha", "Imp. caric. imm. Clicc. per aggiorn.", "Verifica superata", "Timeout rete. Riprovare.", "Verif. non riusc. Riprovare.", "Oper. ripet. troppe volte. Riprovare dopo.", "Troppo diffic.? Prova un altro", "Errore rete ({{errore}}). Riprovare.", "L'ID dell'app non corrisp. alla posiz. corr. Contattare il team dei captcha."],
      lo: ["\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a", "\u0e81\u0eb1\u0e9a\u0e84\u0eb7\u0e99", "\u0ec2\u0edd\u0e94\u0e87\u0ec8\u0eb2\u0e8d", "\u0ec2\u0edd\u0e94\u0ea1\u0eb2\u0e94\u0e95\u0eb0\u0e96\u0eb2\u0e99", "\u0e95\u0ebb\u0e81\u0ea5\u0ebb\u0e87", "\u0ec2\u0edd\u0e94\u0e87\u0ec8\u0eb2\u0e8d", "\u0ec2\u0edd\u0e94\u0ea1\u0eb2\u0e94\u0e95\u0eb0\u0e96\u0eb2\u0e99", "\u0ead\u0ead\u0e81\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a", "\u0eaa\u0eb1\u0e9a\u0e9b\u0ec8\u0ebd\u0e99\u0ec0\u0e9b\u0eb1\u0e99\u0ec2\u0edd\u0e94\u0ea1\u0eb2\u0e94\u0e95\u0eb0\u0e96\u0eb2\u0e99", "\u0e8d\u0eb2\u0e81\u0ec0\u0e81\u0eb5\u0e99\u0ec4\u0e9b\u0e9a\u0ecd? \u0eaa\u0eb1\u0e9a\u0e9b\u0ec8\u0ebd\u0e99\u0ec0\u0e9b\u0eb1\u0e99\u0ec2\u0edd\u0e94\u0e87\u0ec8\u0eb2\u0e8d", "\u0e84\u0eb3\u0ec0\u0eab\u0eb1\u0e99\u0e95\u0eb4\u0e8a\u0ebb\u0ea1", "\u0ea5\u0ead\u0e87\u0ec3\u0e8a\u0ec9\u0ec1\u0e84\u0eb1\u0e9a\u0e88\u0eb2\u0ec3\u0edd\u0ec8", "\u0e81\u0eb2\u0e99\u0ec2\u0eab\u0ebc\u0e94\u0eae\u0eb9\u0e9a\u0e9a\u0ecd\u0ec8\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94. \u0e84\u0ea5\u0eb4\u0e81\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0ea3\u0eb5\u0ec0\u0e9f\u0ea3\u0e8a", "\u0e9c\u0ec8\u0eb2\u0e99\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a\u0ec1\u0ea5\u0ec9\u0ea7", "\u0edd\u0ebb\u0e94\u0ec0\u0ea7\u0ea5\u0eb2\u0ec0\u0e84\u0eb7\u0ead\u0e82\u0ec8\u0eb2\u0e8d. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8.", "\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a\u0e9a\u0ecd\u0ec8\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94. \u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81.", "\u0e81\u0eb2\u0e99\u0e94\u0eb3\u0ec0\u0e99\u0eb5\u0e99\u0e81\u0eb2\u0e99\u0ec0\u0ea5\u0eb7\u0ec9\u0ead\u0ec6\u0ec0\u0e81\u0eb5\u0e99\u0ec4\u0e9b. \u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0e9e\u0eb2\u0e8d\u0eab\u0ebc\u0eb1\u0e87.", "\u0e8d\u0eb2\u0e81\u0ec0\u0e81\u0eb5\u0e99\u0ec4\u0e9b\u0e9a\u0ecd? \u0ea5\u0ead\u0e87\u0ead\u0eb1\u0e99\u0ec3\u0edd\u0ec8", "\u0ec0\u0e84\u0eb7\u0ead\u0e82\u0ec8\u0eb2\u0e8d\u0e82\u0eb1\u0e94\u0e82\u0ec9\u0ead\u0e87 (+). \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8.", "AppID \u0e9a\u0ecd\u0ec8\u0e81\u0ebb\u0e87\u0e81\u0eb1\u0e9a\u0e88\u0eb8\u0e94\u0e97\u0eb5\u0ec8\u0e95\u0eb1\u0ec9\u0e87\u0e95\u0ebb\u0ea7\u0e88\u0eb4\u0e87. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0e95\u0eb4\u0e94\u0e95\u0ecd\u0ec8\u0e97\u0eb5\u0ea1\u0ec1\u0e84\u0eb1\u0e9a\u0e88\u0eb2."],
      ms: ["Pengesahan", "Kembali", "Mod mudah", "mod standard", "OK", "Mod mudah", "mod standard", "Hentikan pengesahan", "Tukar ke mod Standard", "Terlalu sukar? Tukar ke mod Mudah", "Maklum balas", "Cuba captcha baharu", "Imej gagal dimuat. Klik utk disegarkan", "Lulus pengesahan", "Rangkaian tamat masa. Cuba lagi.", "Pengesahan gagal. Cuba lagi", "Operasi terlalu kerap. Cuba lagi kemudian.", "Terlalu sukar? Cuba yang baharu", "Ralat rangkaian (+). Sila cuba lagi.", "AppID tidak sepadan dengan lokasi sebenar. Sila hubungi pasukan Captcha."],
      pl: ["Weryfikacja", "Wstecz", "Tryb prosty", "Tryb standar.", "OK", "Tryb prosty", "Tryb standar.", "Zako\u0144cz weryfikacj\u0119", "Prze\u0142\u0105cz do trybu standardowego", "Zbyt trudne? Prze\u0142\u0105cz do trybu prostego.", "Opinie", "Spr\xf3buj nowe captcha", "Nie pobrano obrazu. Od\u015bwie\u017c (kliknij).", "Zweryfikowano", "Limit czasu sieci. Pon\xf3w.", "Nie zweryfikowano. Pon\xf3w.", "Zbyt cz\u0119ste operacje. Spr\xf3buj p\xf3\u017aniej.", "Zbyt trudne? Spr\xf3buj ponownie.", "B\u0142\u0105d sieciowy (+). Spr\xf3buj ponownie.", "AppID nie pasuje do faktycznej lokalizacji. Skontaktuj si\u0119 z zespo\u0142em Captcha."],
      ru: ["\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430", "\u041d\u0430\u0437\u0430\u0434", "\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0436\u0438\u043c", "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442", "OK", "\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0436\u0438\u043c", "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442", "\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438", "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c \u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u043b\u043e\u0436\u043d\u043e? \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0436\u0438\u043c", "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c", "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0430\u043f\u0447\u0443", "\u0421\u0431\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435.", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430", "\u0412\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.", "\u0421\u0431\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435.", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043e\u0432. \u0412\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u043f\u043e\u0437\u0436\u0435.", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u043b\u043e\u0436\u043d\u043e? \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439", "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438 (+). \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.", "AppID \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e. \u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 Captcha."],
      es: ["Verificaci\xf3n", "Atr\xe1s", "Modo sencillo", "Modo normal", "Aceptar", "Modo sencillo", "Modo normal", "Verificaci\xf3n r\xe1pida", "Cambiar a modo normal", "\xbfDemasiado dif\xedcil? Cambiar a modo sencillo", "Comentarios", "Probar nuevo captcha", "Fallo al cargar imagen. Clic para actualizar", "Verificaci\xf3n aprobada", "Red caducada. Pruebe de nuevo.", "Fall\xf3 verificaci\xf3n. Pruebe de nuevo.", "Operaci\xf3n muy repetida. Pruebe m\xe1s tarde.", "\xbfDemasiado dif\xedcil? Pruebe otro", "Erro de la red (+). Pruebe de nuevo.", "El AppID no coincide con la posici\xf3n actual. Contacte con el equipo Captcha."],
      th: ["\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a", "\u0e42\u0e2b\u0e21\u0e14\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e48\u0e32\u0e22", "\u0e42\u0e2b\u0e21\u0e14\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19", "\u0e15\u0e01\u0e25\u0e07", "\u0e42\u0e2b\u0e21\u0e14\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e48\u0e32\u0e22", "\u0e42\u0e2b\u0e21\u0e14\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19", "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e2b\u0e21\u0e14\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19", "\u0e22\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21 \u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e2b\u0e21\u0e14\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e48\u0e32\u0e22", "\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30", "\u0e25\u0e2d\u0e07 Captcha \u0e43\u0e2b\u0e21\u0e48", "\u0e42\u0e2b\u0e25\u0e14\u0e20\u0e32\u0e1e\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a", "\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32 \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e48\u0e2d\u0e22\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07", "\u0e22\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21 \u0e25\u0e2d\u0e07\u0e20\u0e32\u0e1e\u0e43\u0e2b\u0e21\u0e48", "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14 (+) \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "AppID \u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e08\u0e23\u0e34\u0e07 \u0e42\u0e1b\u0e23\u0e14\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e17\u0e35\u0e21 Captcha"],
      tr: ["Do\u011frulama", "Geri", "Basit mod", "Standart mod", "Tamam", "Basit mod", "Standart mod", "Do\u011frulamadan \xe7\u0131k", "Standart moda ge\xe7", "\xc7ok mu zor? Basit moda ge\xe7in", "Geri bildirim", "Yeni bir captcha deneyin", "G\xf6r\xfcnt\xfc y\xfcklenmedi. T\u0131klay\u0131p yenileyin", "Do\u011frulama ba\u015far\u0131l\u0131", "A\u011f zaman a\u015f\u0131m\u0131. Tekrar deneyin.", "Do\u011frulanamad\u0131. Tekrar deneyin.", "\xc7ok s\u0131k i\u015flem yap\u0131ld\u0131. Daha sonra deneyin.", "\xc7ok mu zar? Yeni birini deneyin", "A\u011f hatas\u0131 (+). Tekrar deneyin.", "Uygulama kimli\u011fi ger\xe7ek konumla e\u015fle\u015fmiyor. L\xfctfen Captcha ekibine ula\u015f\u0131n."],
      vi: ["X\xe1c th\u1ef1c", "Quay l\u1ea1i", "Ch\u1ebf \u0111\u1ed9 \u0111\u01a1n gi\u1ea3n", "Ch\u1ebf \u0111\u1ed9 chu\u1ea9n", "OK", "Ch\u1ebf \u0111\u1ed9 \u0111\u01a1n gi\u1ea3n", "Ch\u1ebf \u0111\u1ed9 chu\u1ea9n", "H\u1ee7y x\xe1c th\u1ef1c", "Chuy\u1ec3n sang Ch\u1ebf \u0111\u1ed9 chu\u1ea9n", "G\u1eb7p kh\xf3 \u01b0? H\xe3y chuy\u1ec3n sang Ch\u1ebf \u0111\u1ed9 \u0111\u01a1n gi\u1ea3n xem", "G\xf3p \xfd", "Th\u1eed captcha m\u1edbi", "Kh\xf4ng th\u1ec3 t\u1ea3i \u1ea3nh. Nh\u1ea5n \u0111\u1ec3 l\xe0m m\u1edbi", "X\xe1c th\u1ef1c th\xe0nh c\xf4ng", "H\u1ebft phi\xean k\u1ebft n\u1ed1i. H\xe3y th\u1eed l\u1ea1i.", "Ch\u01b0a th\u1ec3 x\xe1c th\u1ef1c. H\xe3y th\u1eed l\u1ea1i.", "Thao t\xe1c qu\xe1 nhi\u1ec1u l\u1ea7n. Vui l\xf2ng th\u1eed l\u1ea1i.", "G\u1eb7p kh\xf3 \u01b0? H\xe3y th\u1eed c\xe1i m\u1edbi xem", "L\u1ed7i m\u1ea1ng (+). Vui l\xf2ng th\u1eed l\u1ea1i.", "AppID kh\xf4ng tr\xf9ng kh\u1edbp v\u1edbi v\u1ecb tr\xed th\u1ef1c t\u1ebf. Vui l\xf2ng li\xean h\u1ec7 \u0111\u1ed9i ng\u0169 Captcha."],
      fil: ["Pag-verify", "Bumalik", "Simple mode", "Standard mode", "OK", "Simple mode", "Standard mode", "Tapusin ang pagpapatunay", "Lumipat sa Standard mode", "Napakahirap? Lumipat sa Simpleng mode", "Feedback", "Subukan ang bagong captcha", "Hindi nag-load. I-click para i-refresh", "Na-verify", "Huminto ang network. Pakiulit.", "Hindi na-verify. Pakiulit.", "Madalas na operasyon.\nSubukan ulit mamaya.", "Napakahirap? Sumubok ng bago", "Network error (+). Pakiulit.", "Di tugma ang AppID sa tunay na lugar. Pakikontak ang Captcha team."],
      ur: ["\u062a\u0635\u062f\u06cc\u0642", "\u067e\u06cc\u0686\u06be\u06d2", "\u0633\u0627\u062f\u06c1 \u0645\u0648\u0688", "\u0645\u0639\u06cc\u0627\u0631\u06cc \u0645\u0648\u0688", "\u0679\u06be\u064a\u06a9\u06c1\u06d2", "\u0633\u0627\u062f\u06c1 \u0645\u0648\u0688", "\u0645\u0639\u06cc\u0627\u0631\u06cc \u0645\u0648\u0688", "\u062a\u0635\u062f\u06cc\u0642 \u0633\u06d2 \u062a\u0631\u06a9 \u06a9\u0631\u06cc\u06ba", "\u0645\u0639\u06cc\u0627\u0631\u06cc \u0645\u0648\u0688 \u067e\u0631 \u062c\u0627\u0626\u06cc\u06ba", "\u0645\u0634\u06a9\u0644 \u06c1\u06d2\u061f \u0633\u0627\u062f\u06c1 \u0645\u0648\u0688 \u067e\u0631 \u062c\u0627\u0626\u06cc\u06ba", "\u062a\u0627\u062b\u0631\u0627\u062a \u062f\u06cc\u06ba", "\u0646\u06cc\u0627 \u06a9\u06cc\u067e\u0686\u0627 \u062f\u0627\u062e\u0644 \u06a9\u0631\u06cc\u06ba", "\u062a\u0635\u0648\u06cc\u0631\u0644\u0648\u0688\u0646\u06c1\u06cc \u06c1\u0648\u0626\u06cc \u0631\u0641\u0631\u06cc\u0634 \u06a9\u0644\u06a9 \u06a9\u0631\u06cc\u06ba", "\u062a\u0635\u062f\u06cc\u0642 \u06c1\u0648 \u06af\u0626\u06cc", "\u0646\u06cc\u0679 \u0648\u0631\u06a9 \u06a9\u0627 \u0648\u0642\u062a \u062e\u062a\u0645 \u067e\u06be\u0631\u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06d2", "\u062a\u0635\u062f\u06cc\u0642 \u0646\u0627\u06a9\u0627\u0645 \u067e\u06be\u0631\u0633\u06d2 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba", "\u062a\u062c\u0627\u0648\u0632 \u06c1\u0648 \u06af\u06cc\u0627. \u0628\u0639\u062f\u0645\u06cc\u06ba \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba.", "\u0645\u0634\u06a9\u0644 \u06c1\u06d2\u061f\u067e\u06be\u0631 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba", "\u0646\u06cc\u0679 \u0648\u0631\u06a9 \u0641\u06cc\u0644 (+). \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba.", "\u0627\u06cc\u067e \u0622\u0626\u06cc \u0688\u06cc \u0627\u0635\u0644 \u0645\u062d\u0644 \u0648\u0642\u0648\u0639 \u0633\u06d2 \u0645\u06cc\u0644 \u0646\u06c1\u06cc\u06ba \u06a9\u06be\u0627\u062a\u0627.\u0628\u0631\u0627\u06c1 \u06a9\u0631\u0645 \u06a9\u06cc\u067e\u0686\u0627 \u0679\u06cc\u0645 \u0633\u06d2 \u0631\u0627\u0628\u0637\u06c1 \u06a9\u0631\u06cc\u06ba"]
    };
    t.all = i,
      i.iw = i.he,
      i["in"] = i.id,
      i.zh = i["zh-cn"]
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.getScriptUrl = t.getScript = void 0,
      t.getScript = function i(e, t) {
        var r = 3
          , n = e.src
          , o = e.successCheck
          , a = e.success
          , s = e.error
          , c = e.crossOrigin
          , u = Boolean(e.inHead) ? document.getElementsByTagName("head").item(0) : document.getElementsByTagName("body").item(0)
          , l = !1
          , d = document.createElement("script");
        function p(e) {
          if (!l) {
            var t = !1;
            e && "type"in e && (t = "load" === e.type),
            "readyState"in this && /^(loaded|complete)$/.test(this.readyState) && (t = !0),
            t && (!o || o() ? (h(),
              l = !0,
            null === a || void 0 === a || a()) : f())
          }
        }
        function f() {
          l || (h(),
            l = !0,
            (t = t || 1) >= r ? null === s || void 0 === s || s() : i({
              src: n,
              successCheck: o,
              success: a,
              error: s
            }, t + 1))
        }
        function h() {
          try {
            u && d && u.removeChild(d)
          } catch (s) {}
        }
        d.type = "text/javascript",
          d.async = !0,
          d.src = n,
        c && d.setAttribute("crossorigin", c),
          "onload"in d ? d.onload = p : d.onreadystatechange = p,
          d.onerror = f,
        null === u || void 0 === u || u.appendChild(d)
      }
      ,
      t.getScriptUrl = function() {
        try {
          throw new Error("check own domain")
        } catch (r) {
          var e = null === r || void 0 === r ? void 0 : r.stack;
          if (!e)
            return;
          var t = ("" + e).match(/(https?:\/\/.*\.js)/);
          return {
            url: null === t || void 0 === t ? void 0 : t[1],
            stack: e
          }
        }
      }
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.shrinkArraySizeFromRuisun = t.shrinkArraySize = t.extend = void 0;
    var n = i(r(4));
    t.extend = Object.assign || n["default"],
      t.shrinkArraySize = function(e, t, r) {
        var i = e.length;
        if (i <= t)
          return e;
        var n = [];
        (r = r || {}).keepStart && (t -= 1,
          i -= 1,
          n.push(e[0])),
        r.keepLast && (i -= 1,
          t -= 1);
        for (var o = t / i, a = 0, s = 0; s < i; s++)
          (a += o) >= 1 && (n.push(e[s]),
            a -= 1);
        return r.keepLast && n.push(e[e.length - 1]),
          n
      }
      ,
      t.shrinkArraySizeFromRuisun = function(e, t, r) {
        var i = e.length;
        if (i <= t)
          return e;
        (r = r || {}).keepStart && (i -= 1),
        r.keepLast && (i -= 1,
          t -= 1);
        for (var n = Math.floor(i / (t - 1)), o = 0, a = []; a.length < t; )
          a.push(e[o]),
            o += n;
        return r.keepLast && a.push(e[e.length - 1]),
          a
      }
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.isWebWorkerSupport = t.setWebworkerSupportCache = t.getWebworkerSupportCache = void 0;
    var i = "captcha_webworker_supported";
    t.getWebworkerSupportCache = function() {
      try {
        return localStorage.getItem(i)
      } catch (e) {}
      return !1
    }
      ,
      t.setWebworkerSupportCache = function(e) {
        try {
          localStorage.setItem(i, e)
        } catch (t) {}
      }
      ,
      t.isWebWorkerSupport = function() {
        var e = self || window;
        try {
          try {
            var t = void 0;
            try {
              t = new e.Blob([""])
            } catch (o) {
              (t = new (e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder)).append(""),
                t = t.getBlob()
            }
            var r = e.URL || e.webkitURL
              , i = r.createObjectURL(t)
              , n = new e.Worker(i);
            return r.revokeObjectURL(i),
              n
          } catch (o) {
            return new e.Worker("data:application/javascript,".concat(encodeURIComponent("")))
          }
        } catch (o) {
          return null
        }
      }
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.langTransform = t.getWxLang = t.getBrowserLang = void 0;
    var i = r(1)
      , n = r(9);
    function o() {
      var e = i.getQuery()
        , t = /(wehcat_real_lang|wechat_real_lang)=([a-zA-Z_-]+)/.exec(e);
      if (t)
        return t[2];
      for (var r = document.getElementsByTagName("script"), n = 0; n < r.length; n++) {
        var o = r[n].src;
        if (o && /TCapIframeApi/i.test(o)) {
          var a = /lang=([a-zA-Z_-]+)/.exec(o);
          if (a)
            return a[1].toLowerCase()
        }
      }
      return i.getQueryParam("wxLang") || ""
    }
    t.getBrowserLang = function() {
      var e = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage || "";
      if (/MicroMessenger/.test(navigator.userAgent)) {
        var t = o();
        t && (e = t)
      }
      return e
    }
      ,
      t.getWxLang = o,
      t.langTransform = function(e) {
        var t = e.toLowerCase().replace(/_/, "-")
          , r = t;
        return /-/.test(r) && (r = r.split("-")[0]),
          n.all[t] ? t : r
      }
  }
  , function(e, t, r) {
    var i;
    !function(n, o) {
      "use strict";
      var a = "model"
        , s = "name"
        , c = "type"
        , u = "vendor"
        , l = "version"
        , d = "mobile"
        , p = "tablet"
        , f = "smarttv"
        , h = function(e) {
        for (var t = {}, r = 0; r < e.length; r++)
          t[e[r].toUpperCase()] = e[r];
        return t
      }
        , g = function(e, t) {
        return "string" == typeof e && -1 !== m(t).indexOf(m(e))
      }
        , m = function(e) {
        return e.toLowerCase()
      }
        , v = function(e, t) {
        if ("string" == typeof e)
          return e = e.replace(/^\s\s*/, ""),
            void 0 === t ? e : e.substring(0, 350)
      }
        , y = function(e, t) {
        for (var r, i, n, o, a, s, c = 0; c < t.length && !a; ) {
          var u = t[c]
            , l = t[c + 1];
          for (r = i = 0; r < u.length && !a && u[r]; )
            if (a = u[r++].exec(e))
              for (n = 0; n < l.length; n++)
                s = a[++i],
                  "object" == typeof (o = l[n]) && o.length > 0 ? 2 === o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 === o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 === o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
          c += 2
        }
      }
        , w = function(e, t) {
        for (var r in t)
          if ("object" == typeof t[r] && t[r].length > 0) {
            for (var i = 0; i < t[r].length; i++)
              if (g(t[r][i], e))
                return "?" === r ? void 0 : r
          } else if (g(t[r], e))
            return "?" === r ? void 0 : r;
        return e
      }
        , b = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2000: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
      }
        , _ = {
        browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [l, [s, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [l, [s, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [s, l], [/opios[\/ ]+([\w\.]+)/i], [l, [s, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [l, [s, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [s, l], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [l, [s, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [l, [s, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [l, [s, "WeChat"]], [/konqueror\/([\w\.]+)/i], [l, [s, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [l, [s, "IE"]], [/yabrowser\/([\w\.]+)/i], [l, [s, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[s, /(.+)/, "$1 Secure Browser"], l], [/\bfocus\/([\w\.]+)/i], [l, [s, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [l, [s, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [l, [s, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [l, [s, "Dolphin"]], [/coast\/([\w\.]+)/i], [l, [s, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [l, [s, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [l, [s, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[s, "360 Browser"]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[s, /(.+)/, "$1 Browser"], l], [/(comodo_dragon)\/([\w\.]+)/i], [[s, /_/g, " "], l], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [s, l], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [s], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[s, "Facebook"], l], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [s, l], [/\bgsa\/([\w\.]+) .*safari\//i], [l, [s, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [l, [s, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[s, "Chrome WebView"], l], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [l, [s, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [s, l], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [l, [s, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [l, s], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [s, [l, w, {
          "1.0": "/8",
          1.2: "/1",
          1.3: "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        }]], [/(webkit|khtml)\/([\w\.]+)/i], [s, l], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[s, "Netscape"], l], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [l, [s, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [s, l], [/(cobalt)\/([\w\.]+)/i], [s, [l, /master.|lts./, ""]]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", m]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", m]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", m]]],
        device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [a, [u, "Samsung"], [c, p]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [a, [u, "Samsung"], [c, d]], [/\((ip(?:hone|od)[\w ]*);/i], [a, [u, "Apple"], [c, d]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [a, [u, "Apple"], [c, p]], [/(macintosh);/i], [a, [u, "Apple"]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [a, [u, "Sharp"], [c, d]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [a, [u, "Huawei"], [c, p]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [a, [u, "Huawei"], [c, d]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[a, /_/g, " "], [u, "Xiaomi"], [c, d]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[a, /_/g, " "], [u, "Xiaomi"], [c, p]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [a, [u, "OPPO"], [c, d]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [a, [u, "Vivo"], [c, d]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [a, [u, "Realme"], [c, d]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [a, [u, "Motorola"], [c, d]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [a, [u, "Motorola"], [c, p]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [a, [u, "LG"], [c, p]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [a, [u, "LG"], [c, d]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [a, [u, "Lenovo"], [c, p]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[a, /_/g, " "], [u, "Nokia"], [c, d]], [/(pixel c)\b/i], [a, [u, "Google"], [c, p]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [a, [u, "Google"], [c, d]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [u, "Sony"], [c, d]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[a, "Xperia Tablet"], [u, "Sony"], [c, p]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [a, [u, "OnePlus"], [c, d]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [a, [u, "Amazon"], [c, p]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[a, /(.+)/g, "Fire Phone $1"], [u, "Amazon"], [c, d]], [/(playbook);[-\w\),; ]+(rim)/i], [a, u, [c, p]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [a, [u, "BlackBerry"], [c, d]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [a, [u, "ASUS"], [c, p]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [a, [u, "ASUS"], [c, d]], [/(nexus 9)/i], [a, [u, "HTC"], [c, p]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [u, [a, /_/g, " "], [c, d]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [a, [u, "Acer"], [c, p]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [a, [u, "Meizu"], [c, d]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [u, a, [c, d]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [u, a, [c, p]], [/(surface duo)/i], [a, [u, "Microsoft"], [c, p]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [a, [u, "Fairphone"], [c, d]], [/(u304aa)/i], [a, [u, "AT&T"], [c, d]], [/\bsie-(\w*)/i], [a, [u, "Siemens"], [c, d]], [/\b(rct\w+) b/i], [a, [u, "RCA"], [c, p]], [/\b(venue[\d ]{2,7}) b/i], [a, [u, "Dell"], [c, p]], [/\b(q(?:mv|ta)\w+) b/i], [a, [u, "Verizon"], [c, p]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [a, [u, "Barnes & Noble"], [c, p]], [/\b(tm\d{3}\w+) b/i], [a, [u, "NuVision"], [c, p]], [/\b(k88) b/i], [a, [u, "ZTE"], [c, p]], [/\b(nx\d{3}j) b/i], [a, [u, "ZTE"], [c, d]], [/\b(gen\d{3}) b.+49h/i], [a, [u, "Swiss"], [c, d]], [/\b(zur\d{3}) b/i], [a, [u, "Swiss"], [c, p]], [/\b((zeki)?tb.*\b) b/i], [a, [u, "Zeki"], [c, p]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[u, "Dragon Touch"], a, [c, p]], [/\b(ns-?\w{0,9}) b/i], [a, [u, "Insignia"], [c, p]], [/\b((nxa|next)-?\w{0,9}) b/i], [a, [u, "NextBook"], [c, p]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[u, "Voice"], a, [c, d]], [/\b(lvtel\-)?(v1[12]) b/i], [[u, "LvTel"], a, [c, d]], [/\b(ph-1) /i], [a, [u, "Essential"], [c, d]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [a, [u, "Envizen"], [c, p]], [/\b(trio[-\w\. ]+) b/i], [a, [u, "MachSpeed"], [c, p]], [/\btu_(1491) b/i], [a, [u, "Rotor"], [c, p]], [/(shield[\w ]+) b/i], [a, [u, "Nvidia"], [c, p]], [/(sprint) (\w+)/i], [u, a, [c, d]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [u, "Microsoft"], [c, d]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [a, [u, "Zebra"], [c, p]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [a, [u, "Zebra"], [c, d]], [/smart-tv.+(samsung)/i], [u, [c, f]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [u, "Samsung"], [c, f]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[u, "LG"], [c, f]], [/(apple) ?tv/i], [u, [a, "Apple TV"], [c, f]], [/crkey/i], [[a, "Chromecast"], [u, "Google"], [c, f]], [/droid.+aft(\w)( bui|\))/i], [a, [u, "Amazon"], [c, f]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [a, [u, "Sharp"], [c, f]], [/(bravia[\w ]+)( bui|\))/i], [a, [u, "Sony"], [c, f]], [/(mitv-\w{5}) bui/i], [a, [u, "Xiaomi"], [c, f]], [/Hbbtv.*(technisat) (.*);/i], [u, a, [c, f]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[u, v], [a, v], [c, f]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[c, f]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [u, a, [c, "console"]], [/droid.+; (shield) bui/i], [a, [u, "Nvidia"], [c, "console"]], [/(playstation [345portablevi]+)/i], [a, [u, "Sony"], [c, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [a, [u, "Microsoft"], [c, "console"]], [/((pebble))app/i], [u, a, [c, "wearable"]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [a, [u, "Apple"], [c, "wearable"]], [/droid.+; (glass) \d/i], [a, [u, "Google"], [c, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [a, [u, "Zebra"], [c, "wearable"]], [/(quest( 2| pro)?)/i], [a, [u, "Facebook"], [c, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [u, [c, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [a, [c, d]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [a, [c, p]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[c, p]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[c, d]], [/(android[-\w\. ]{0,9});.+buil/i], [a, [u, "Generic"]]],
        engine: [[/windows.+ edge\/([\w\.]+)/i], [l, [s, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [l, [s, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [s, l], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [l, s]],
        os: [[/microsoft (windows) (vista|xp)/i], [s, l], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [s, [l, w, b]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[s, "Windows"], [l, w, b]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[l, /_/g, "."], [s, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[s, "Mac OS"], [l, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [l, s], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [s, l], [/\(bb(10);/i], [l, [s, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [l, [s, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [l, [s, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [l, [s, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [l, [s, "watchOS"]], [/crkey\/([\d\.]+)/i], [l, [s, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[s, "Chromium OS"], l], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [s, l], [/(sunos) ?([\w\.\d]*)/i], [[s, "Solaris"], l], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [s, l]]
      }
        , E = function(e, t) {
        if ("object" == typeof e && (t = e,
          e = void 0),
          !(this instanceof E))
          return new E(e,t).getResult();
        var r = void 0 !== n && n.navigator ? n.navigator : void 0
          , i = e || (r && r.userAgent ? r.userAgent : "")
          , o = r && r.userAgentData ? r.userAgentData : void 0
          , a = t ? function(e, t) {
          var r = {};
          for (var i in e)
            t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
          return r
        }(_, t) : _;
        return this.getBrowser = function() {
          var e, t = {};
          return t.name = void 0,
            t.version = void 0,
            y.call(t, i, a.browser),
            t.major = "string" == typeof (e = t.version) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0,
          r && r.brave && "function" == typeof r.brave.isBrave && (t.name = "Brave"),
            t
        }
          ,
          this.getCPU = function() {
            var e = {
              architecture: void 0
            };
            return y.call(e, i, a.cpu),
              e
          }
          ,
          this.getDevice = function() {
            var e = {
              vendor: void 0,
              model: void 0,
              type: void 0
            };
            return y.call(e, i, a.device),
            !e.type && o && o.mobile && (e.type = d),
            "Macintosh" == e.model && r && "undefined" != typeof r.standalone && r.maxTouchPoints && r.maxTouchPoints > 2 && (e.model = "iPad",
              e.type = p),
              e
          }
          ,
          this.getEngine = function() {
            var e = {
              name: void 0,
              version: void 0
            };
            return y.call(e, i, a.engine),
              e
          }
          ,
          this.getOS = function() {
            var e = {
              name: void 0,
              version: void 0
            };
            return y.call(e, i, a.os),
            !e.name && o && "Unknown" != o.platform && (e.name = o.platform.replace(/chrome os/i, "Chromium OS").replace(/macos/i, "Mac OS")),
              e
          }
          ,
          this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }
          ,
          this.getUA = function() {
            return i
          }
          ,
          this.setUA = function(e) {
            return i = "string" == typeof e && e.length > 350 ? v(e, 350) : e,
              this
          }
          ,
          this.setUA(i),
          this
      };
      E.VERSION = "1.0.34",
        E.BROWSER = h([s, l, "major"]),
        E.CPU = h(["architecture"]),
        E.DEVICE = h([a, u, c, "console", d, f, p, "wearable", "embedded"]),
        E.ENGINE = E.OS = h([s, l]),
        void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = E),
          t.UAParser = E) : r(3) ? void 0 === (i = function() {
          return E
        }
          .call(t, r, t, e)) || (e.exports = i) : void 0 !== n && (n.UAParser = E);
      var S = void 0 !== n && (n.jQuery || n.Zepto);
      if (S && !S.ua) {
        var k = new E;
        S.ua = k.getResult(),
          S.ua.get = function() {
            return k.getUA()
          }
          ,
          S.ua.set = function(e) {
            k.setUA(e);
            var t = k.getResult();
            for (var r in t)
              S.ua[r] = t[r]
          }
      }
    }("object" == typeof window ? window : this)
  }
  , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t["default"] = {
        loadState: {
          ready: 0,
          fail: 1,
          mixing: 2
        },
        messageType: {
          hybridVerify: 8,
          loadReady: 10,
          preloadReady: 30,
          checkPreLoadReady: 31,
          sendPreloadData: 32,
          goAged: 36,
          goNormalVerify: 37,
          windowChanged: 38,
          readyConfirm: 39
        },
        preloadMsgType: {
          capClose: 33,
          verifySuccess: 34,
          sessionTimeout: 35
        },
        templateKeys: ["drag", "dy"],
        retCode: {
          success: 0,
          errorWithTicket: 0,
          close: 2
        },
        defaultColorScheme: "#005ACF"
      }
  }
  , , function(e, t, r) {
    "use strict";
    var i = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      , n = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.includeInPreoloadTemplate = t.injectTemplate = t.removeTemplateWrapper = t.markTypeTemplateUnloaded = t.markTypeTemplateLoaded = t.styledTypeTemplate = t.getHtmlTemplateGroup = t.htmlTemplateGroup = t.getTemplateDomain = void 0;
    var o = r(2)
      , a = n(r(26))
      , s = r(30)
      , c = r(6)
      , u = a["default"].templateKeys
      , l = {
      drag: {
        url: "template/drag_ele.html",
        id: "tcaptcha_iframe_drag",
        wrapId: "tcaptcha_transform_drag"
      },
      dy: {
        url: "template/drag_ele.html",
        id: "tcaptcha_iframe_dy",
        wrapId: "tcaptcha_transform_dy"
      }
    };
    t.getTemplateDomain = function() {
      var e, t, r = s.getIEVersion();
      if (-1 !== r && r <= 9)
        return window.AqSCodeCapDomain;
      if ("https://trpc-test.captcha.qq.com" === window.AqSCodeCapDomain)
        return window.AqSCodeCapDomain;
      if (navigator.userAgent.match(/miniprogram/i) || "miniprogram" === window.__wxjs_environment)
        return window.AqSCodeCapDomain;
      var n = document.querySelectorAll("meta");
      try {
        for (var o = i(n), a = o.next(); !a.done; a = o.next()) {
          var u = a.value;
          if (u.httpEquiv.match(/content-security-policy/i)) {
            var l = u.content.match(/frame-src.*;/i);
            if (c.isArray(l) && (!l[0].match(/captcha.gtimg.com/i) || !l[0].match(/\*.gtimg.com/i)))
              return window.AqSCodeCapDomain
          }
        }
      } catch (g) {
        e = {
          error: g
        }
      } finally {
        try {
          a && !a.done && (t = o["return"]) && t.call(o)
        } finally {
          if (e)
            throw e.error
        }
      }
      var d = window.navigator.userAgent;
      if (d.match(/android/i)) {
        var p = d.match(/QQ\/(\d+\.\d+\.\d+)/);
        if (p && 2 === p.length) {
          var f = p[1]
            , h = function(e, t, r) {
            return e[r] || t[r] ? e[r] === t[r] ? h(e, t, r + 1) : Number(e[r]) - Number(t[r]) : 0
          };
          if (h(f.split("."), "8.9.28".split("."), 0) <= 0)
            return window.AqSCodeCapDomain
        }
      }
      return window.AqSCodeCdnDomain
    }
      ,
      t.htmlTemplateGroup = {};
    t.getHtmlTemplateGroup = function() {
      return t.htmlTemplateGroup
    }
    ;
    t.styledTypeTemplate = function(e, r) {
      var i = null === t.htmlTemplateGroup || void 0 === t.htmlTemplateGroup ? void 0 : t.htmlTemplateGroup[e];
      i && (i.styled = !0,
        i.showType = r || "")
    }
    ;
    t.markTypeTemplateLoaded = function(e) {
      var r = null === t.htmlTemplateGroup || void 0 === t.htmlTemplateGroup ? void 0 : t.htmlTemplateGroup[e];
      r && (r.load = !0)
    }
    ;
    t.markTypeTemplateUnloaded = function(e) {
      var r = null === t.htmlTemplateGroup || void 0 === t.htmlTemplateGroup ? void 0 : t.htmlTemplateGroup[e];
      r && (r.load = !1,
        r.styled = !1,
        r.showType = undefined)
    }
    ;
    t.removeTemplateWrapper = function(e) {
      var t = l[e].wrapId
        , r = document.getElementById(t);
      (null === r || void 0 === r ? void 0 : r.parentNode) && r.parentNode.removeChild(r)
    }
    ;
    t.injectTemplate = function(e, r, i) {
      if (!document.body)
        return t.htmlTemplateGroup;
      var n = function(e, r, i) {
        t.removeTemplateWrapper(e);
        var n = document.createElement("div")
          , a = l[e]
          , s = a.id
          , c = a.wrapId;
        n.id = c;
        var u = o.createGeneralIframe({
          id: s,
          name: window.AqSCodeCapDomain
        });
        return window.TCaptchaGlobal ? u.src = r + "/template/drag_ele_global.html" : u.src = r + "/template/drag_ele.html",
          o.setCss(n, {
            opacity: "0",
            position: "absolute",
            transition: "opacity 0.3s linear 0s",
            top: "-1000000px"
          }),
          n.appendChild(u),
          i ? i.appendChild(n) : document.body.appendChild(n),
          {
            wrapper: n,
            iframe: u
          }
      }(e, r, i)
        , a = n.wrapper
        , s = n.iframe;
      return t.htmlTemplateGroup[e] = {
        ele: i || document.body,
        type: e,
        wrapper: a,
        iframe: s,
        load: !1,
        styled: !1
      },
        t.htmlTemplateGroup
    }
      ,
      t.includeInPreoloadTemplate = function(e) {
        var t, r;
        try {
          for (var n = i(u), o = n.next(); !o.done; o = n.next())
            if (o.value === e)
              return !0
        } catch (a) {
          t = {
            error: a
          }
        } finally {
          try {
            o && !o.done && (r = n["return"]) && r.call(n)
          } finally {
            if (t)
              throw t.error
          }
        }
        return !1
      }
  }
  , , function(e, t, r) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var n in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }
        ).apply(this, arguments)
      }
    ;
    t.__esModule = !0,
      t.isIos = t.getIEVersion = t.isLowIE = t.hexToRgb = t.setImageUrl = t.getSpriteEl = t.setSpriteUrl = t.getSpriteStyleStr = t.getSpriteStyle = void 0;
    var n = r(2);
    function o(e, t) {
      var r = e.size_2d
        , i = e.sprite_pos
        , n = e.init_pos
        , o = e.spriteSize
        , a = 0
        , s = 0;
      return n && (s = n[0] * t,
        a = n[1] * t),
        {
          bgPosLeft: -i[0] * t,
          bgPosTop: -i[1] * t,
          bgWidth: o[0] * t,
          bgHeight: o[1] * t,
          width: r[0] * t,
          height: r[1] * t,
          left: s,
          top: a
        }
    }
    function a(e, t) {
      var r = o(e, t);
      return {
        backgroundPosition: r.bgPosLeft + "px " + r.bgPosTop + "px",
        backgroundSize: r.bgWidth + "px " + r.bgHeight + "px",
        width: r.width + "px",
        height: r.height + "px",
        left: r.left + "px",
        top: r.top + "px"
      }
    }
    function s(e) {
      var t = e.data
        , r = e.rate
        , s = e.spriteUrl
        , c = e.zIndex
        , u = e.isPureGet
        , l = void 0 !== u && u
        , d = e.el || document.createElement("div");
      if ($(d).children().remove(),
      !n.supportsCSS("backgroundSize", "10px 10px") || l) {
        var p = document.createElement("img");
        p.src = "" + window.TCaptchaApiDomain + s;
        var f = o(t, r);
        return $(p).on("dragstart", function() {
          return !1
        }),
          n.setCss(d, {
            overflow: "hidden",
            width: f.width + "px",
            height: f.height + "px"
          }),
        l || (n.setCss(d, {
          position: "absolute",
          top: f.top + "px",
          left: f.left + "px"
        }),
        c !== undefined && n.setCss(d, {
          zIndex: "" + c
        })),
          n.setCss(p, {
            position: "absolute",
            width: f.bgWidth + "px",
            height: f.bgHeight + "px",
            top: f.bgPosTop + "px",
            left: f.bgPosLeft + "px"
          }),
          d.appendChild(p),
          d
      }
      return n.setCss(d, i({
        position: "absolute",
        backgroundImage: "url(" + window.TCaptchaApiDomain + s + ")"
      }, a(t, r))),
      c !== undefined && n.setCss(d, {
        zIndex: "" + c
      }),
        d
    }
    t.getSpriteStyle = o,
      t.getSpriteStyleStr = a,
      t.setSpriteUrl = s,
      t.getSpriteEl = s,
      t.setImageUrl = function(e, t, r, i) {
        if ($(e).children().remove(),
          !n.supportsCSS("backgroundSize", "10px 10px")) {
          var o = document.createElement("img");
          return o.src = "" + window.TCaptchaApiDomain + r,
            $(o).on("dragstart", function() {
              return !1
            }),
            n.setCss(e, {
              position: "absolute",
              zIndex: "1",
              overflow: "hidden",
              width: t[0] * i + "px",
              height: t[1] * i + "px",
              top: "0px",
              left: "0px"
            }),
            n.setCss(o, {
              position: "absolute",
              width: "100%",
              height: "auto",
              top: "0px",
              left: "0px"
            }),
            void e.appendChild(o)
        }
        n.setCss(e, {
          width: t[0] * i + "px",
          height: t[1] * i + "px",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundImage: "url(" + window.TCaptchaApiDomain + r + ")",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          zIndex: "1"
        })
      }
      ,
      t.hexToRgb = function(e) {
        return parseInt("0x" + e.slice(1, 3), 16) + " " + parseInt("0x" + e.slice(3, 5), 16) + " " + parseInt("0x" + e.slice(5, 7), 16)
      }
    ;
    t.isLowIE = function() {
      var e, t, r = navigator.userAgent.toLowerCase();
      if (r.indexOf("msie") > -1) {
        if (e = parseInt(r.match(/msie ([\d.]+)/)[1], 10),
          t = document.documentMode,
        e && e <= 8)
          return !0;
        if (t && t < 9)
          return !0
      }
      return !1
    }
    ;
    t.getIEVersion = function() {
      var e = navigator.userAgent
        , t = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1
        , r = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
      if (t) {
        new RegExp("MSIE (\\d+\\.\\d+);").test(e);
        var i = parseFloat(RegExp.$1);
        return 7 === i ? 7 : 8 === i ? 8 : 9 === i ? 9 : 10 === i ? 10 : 6
      }
      return r ? 11 : -1
    }
    ;
    t.isIos = function() {
      return !!/iphone|ipad|ipod/gi.test(navigator.userAgent)
    }
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var i = "[CODE_VERIFY]"
      , n = "postMessage"in window
      , o = function() {
      function e(e, t, r) {
        var i = "";
        if (arguments.length < 2 ? i = "[Msger] error 1" : "object" != typeof e ? i = "[Msger] error 2" : "string" != typeof t && (i = "[Msger] error 3"),
          i)
          throw new Error(i);
        this.target = e,
          this.name = t,
          this.domain = r || "*"
      }
      return e.prototype.send = function(e) {
        if (n)
          this.target.postMessage(e, this.domain);
        else {
          var t = window.navigator[i + this.name];
          if ("function" != typeof t)
            throw new Error("target callback function is not defined");
          t(e, window)
        }
      }
        ,
        e
    }()
      , a = function() {
      function e(e, t, r) {
        this.targets = {},
          this.name = e,
          this.listenFunc = [],
          this.domain = r || "",
          i = t || i,
          this.listenCb = this.initListen()
      }
      return e.prototype.addTarget = function(e, t, r) {
        var i = new o(e,t,r);
        this.targets[t] = i
      }
        ,
        e.prototype.initListen = function() {
          var e = this
            , t = function(t) {
            if (!e.domain || !t.origin || -1 !== t.origin.indexOf(e.domain) || "https://captcha.gtimg.com" === t.origin || "https://global.captcha.gtimg.com" === t.origin) {
              "object" == typeof t && t.data && (t = t.data);
              for (var r = 0; r < e.listenFunc.length; r++)
                e.listenFunc[r](t)
            }
          };
          return n ? "addEventListener"in document ? window.addEventListener("message", t, !1) : "attachEvent"in document && window.attachEvent("onmessage", t) : window.navigator[i + this.name] = t,
            t
        }
        ,
        e.prototype.unlisten = function() {
          this.listenCb && (n ? "addEventListener"in document ? window.removeEventListener("message", this.listenCb) : "attachEvent"in document && window.detachEvent("onmessage", this.listenCb) : window.navigator[i + this.name] = null)
        }
        ,
        e.prototype.listen = function(e) {
          this.listenFunc.push(e)
        }
        ,
        e.prototype.clear = function() {
          this.listenFunc = []
        }
        ,
        e.prototype.send = function(e) {
          var t, r = this.targets;
          for (t in r)
            r.hasOwnProperty(t) && r[t].send(e)
        }
        ,
        e
    }();
    window.TCapMsg = a,
      t["default"] = a
  }
  , , function(e, t, r) {
    "use strict";
    var i = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
    ;
    t.__esModule = !0,
      t.ErrorHandler = t.ErrorTypes = void 0;
    var n = r(5);
    t.ErrorTypes = {
      FRAME_JS_LOAD_TIMEOUT: 40,
      DY_LOAD_FAIL: 39,
      OTHER_DOMAIN_MONITOR: 38,
      DRAG_JQUERY_FAIL: 37,
      DY_JQUERY_FAIL: 37,
      DRAG_WEBSERVER_JS_LOAD: 36,
      DY_WEBSERVER_JS_LOAD: 36,
      IFRAME_FULL_CREATE_ERROR: 35,
      NOT_NUMBER_TYPE: 34,
      IFRAME_CREATE_TIMEOUT: 33,
      PRELOAD_TEMPLATE_LOAD_ERROR: 32,
      DRAG_REFRESH_ERROR: 31,
      DY_REFRESH_ERROR: 31,
      DRAG_VERIFY_ERROR: 30,
      DY_VERIFY_ERROR: 30,
      DRAG_IMG_ERROR: 29,
      DY_IMG_ERROR: 29,
      DRAG_JS_ERROR: 28,
      DY_JS_ERROR: 28,
      DRAG_JS_DOWNLOAD_ERROR: 27,
      DY_JS_DOWNLOAD_ERROR: 27,
      IFRAME_POPUP_CREATE_ERROR: 26,
      IFRAME_CREATE_ERROR: 25,
      ERROR_TYPE_TDC_RUN_RETRY_SUCCESS: 23,
      ERROR_TYPE_TDC_DOWNLOAD_RETRY_SUCCESS: 22,
      ERROR_TYPE_TDC_RUN_FAIL: 21,
      ERROR_TYPE_TDC_DOWNLOAD_FAIL: 20,
      CALLBACK_NAME: 19,
      ERROR_TYPE_FRAMEJS_CODE_ERROR: 18,
      ERROR_TYPE_JSONP_PREHANDLE: 17,
      ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: 16,
      ERROR_SLIDE_JS_DOWNLOAD_ERROR: 15,
      ERROR_TYPE_TOUCH_CANCEL: 14,
      ERROR_TYPE_TWICE_IMAGE_ONERROR: 13,
      ERROR_TYPE_CGI_IMAGE_ONERROR: 12,
      ERROR_TYPE_IMAGE_ONERROR: 11,
      ERROR_TYPE_AJAX_GETSIG: 9,
      ERROR_TYPE_AJAX_VERIFY: 8,
      ERROR_TYPE_IMAGE_BEYONDSIZE: 7,
      ERROR_TYPE_MB_FP_REGISTER_TIMEOUT: 6,
      ERROR_TYPE_MB_FPJS_DOWNLOAD_FAIL: 5,
      ERROR_TYPE_PC_FP_REGISTER_TIMEOUT: 4,
      ERROR_TYPE_PC_FPJS_DOWNLOAD_FAIL: 3,
      ERROR_TYPE_BADJS_DOWNLOAD_FAIL: 2,
      ERROR_TYPE_BADJS_REPORT: 1
    };
    var o = function() {
      function e() {
        this.sentMsg = {},
          this.sendQueue = [],
          this.initParam = "",
          this.isAllowToReport = !1
      }
      return e.prototype.init = function(e) {
        var t = n.getLogCommonParams()
          , r = ["appid=" + e.appid, "sid=" + (e.sid || ""), "uid=" + (e.uid || ""), "err_type=" + (e.errType || "")];
        this.initParam = t.join("&") + "&" + r.join("&")
      }
        ,
        e.prototype.openReport = function() {
          var e, t;
          if (this.isAllowToReport = !0,
            this.isAllowToReport)
            try {
              for (var r = i(this.sendQueue), n = r.next(); !n.done; n = r.next()) {
                var o = n.value;
                this.send(o)
              }
            } catch (a) {
              e = {
                error: a
              }
            } finally {
              try {
                n && !n.done && (t = r["return"]) && t.call(r)
              } finally {
                if (e)
                  throw e.error
              }
            }
        }
        ,
        e.prototype.sendError = function(e, r) {
          if (this.isAllowToReport) {
            r = r || t.ErrorTypes.ERROR_TYPE_BADJS_REPORT;
            var i = this.getErrorMsg(e);
            this.sentMsg[i] || (this.sentMsg[i] = !0,
              this.send({
                errorType: r,
                reason: i
              }))
          }
        }
        ,
        e.prototype.send = function(e) {
          if (this.isAllowToReport) {
            var r = (e = e || {
              errorType: t.ErrorTypes.NOT_NUMBER_TYPE
            }).reason && e.reason.length > 1024 ? e.reason.substr(0, 1024) : e.reason;
            r = encodeURIComponent(r || ""),
            "number" != typeof e.errorType && (r += "err origin type " + e.errorType,
              e.errorType = t.ErrorTypes.NOT_NUMBER_TYPE);
            var i = (window.AqSCodeCapDomain || window.TCaptchaApiDomain || "") + "/cap_monitor?type=" + e.errorType + "&reason=" + r + "&" + this.initParam;
            (new Image).src = i
          } else
            this.sendQueue.push(e)
        }
        ,
        e.prototype.getErrorMsg = function(e) {
          var t = "";
          (null === e || void 0 === e ? void 0 : e.stack) && (t = e.stack.replace(/\n/gi, "").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi, ""));
          try {
            var r = e.toString();
            t.indexOf(r) < 0 && (t = r + "@" + t)
          } catch (i) {}
          return t
        }
        ,
        e.prototype.initGlobalListener = function(e) {
          var r = this;
          e = e || t.ErrorTypes.ERROR_TYPE_BADJS_REPORT,
            "function" == typeof window.addEventListener ? addEventListener("error", function(t) {
              r.sendError(t.error, e)
            }) : window.onerror = function(t, i, n, o, a) {
              if (null !== a && void 0 !== a && a.stack)
                r.sendError(a, e);
              else if ("string" != typeof t) {
                var s = (t.target || {
                  src: ""
                }).src || "";
                r.send({
                  errorType: e,
                  reason: s
                })
              } else
                r.send({
                  errorType: e,
                  reason: t
                })
            }
        }
        ,
        e
    }();
    t.ErrorHandler = o
  }
  , , , , , , , , , , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.dom = t.get$Dom = void 0;
    t.get$Dom = function() {
      return {
        docBody: $(document.body),
        tcWrap: $("#tcWrap"),
        bodyWrap: $("#bodyWrap"),
        fullScreenHead: $("#tcWrapHeader"),
        operation: $("#tcOperation"),
        tcStatus: $("#tcStatus"),
        slideBgWrap: $("#slideBgWrap"),
        slideBg: $("#slideBg"),
        imgSlide: $("#slideBlock"),
        close: $("#captcha_close"),
        btnBack: $("#btnBack"),
        instructionWrap: $("#instructionWrap"),
        instruction: $("#instruction"),
        instructionText: $("#instructionText"),
        title: $("#pHeaderTitle,#fsHeaderTitle"),
        statusFail: $("#statusFail"),
        txtSuccess: $("#statusSuccess"),
        txtError: $("#statusError"),
        txtErrorNote: $("#tcaptcha_note"),
        txtBack: $("#txtBack"),
        feedback: $(".show-FB"),
        site007: $("#tcaptcha_site_click"),
        btnReload: $(".show-reload"),
        btnSlide: $("#tcaptcha_drag_button"),
        btnThumb: $("#tcaptcha_drag_thumb"),
        btnIconfont: $("#t_iconfont"),
        iconError: $("#errorIcon"),
        iconGoback: $("#iconGoback"),
        embedStatus: $(".tcaptcha-embed"),
        embedLab: $("#e_lab"),
        embedShowFb: $("#e_showFB"),
        embedRefresh: $("#e_reload"),
        coverFail: $("#coverFail"),
        aged: $(".aged-icon"),
        agedText: $("#agedText"),
        normalVerify: $(".normal-verify-icon"),
        normalVerifyText: $("#normalVerifyText"),
        btnVerify: $(".verify-btn"),
        btnVerifyText: $(".verify-btn-text"),
        slider: $(".tc-slide")
      }
    }
      ,
      t.dom = {
        tcStatus: document.getElementById("tcStatus")
      }
  }
  , , , , function(e, t, r) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var n in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }
        ).apply(this, arguments)
      }
      , n = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      , o = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0;
    var a = o(r(48))
      , s = o(r(50))
      , c = r(51)
      , u = function() {
      function e() {
        this.useWebWorker = !1,
          this.workerReady = !1,
          this.taskQueue = [],
          this.taskId = 0,
          this.callbacks = [];
        try {
          this.worker = new a["default"],
            this.useWebWorker = this.worker && !window.setImmediate,
            this.bindListener()
        } catch (e) {}
      }
      return e.prototype.bindListener = function() {
        var e = this;
        this.useWebWorker && (this.worker.onmessage = function(t) {
            var r, i, o, a, c = t.data, u = c.type, l = c.data;
            switch (u) {
              case s["default"].WORKER_READY:
                e.workerReady = !0;
                try {
                  for (var d = n(e.taskQueue), p = d.next(); !p.done; p = d.next()) {
                    var f = p.value;
                    e.run(f.data, f.cb),
                      window.clearTimeout(f.timeout)
                  }
                } catch (v) {
                  r = {
                    error: v
                  }
                } finally {
                  try {
                    p && !p.done && (i = d["return"]) && i.call(d)
                  } finally {
                    if (r)
                      throw r.error
                  }
                }
                e.taskQueue = [];
                break;
              case s["default"].TASK_RESULT:
                try {
                  for (var h = n(e.callbacks), g = h.next(); !g.done; g = h.next()) {
                    var m = g.value;
                    m.taskId === l.taskId && m.cb(l)
                  }
                } catch (y) {
                  o = {
                    error: y
                  }
                } finally {
                  try {
                    g && !g.done && (a = h["return"]) && a.call(h)
                  } finally {
                    if (o)
                      throw o.error
                  }
                }
            }
          }
        )
      }
        ,
        e.prototype.run = function(e, t, r) {
          var n = this;
          if (this.useWebWorker) {
            if (this.taskId += 1,
              !this.workerReady) {
              var o = window.setTimeout(function() {
                for (var e = 0; e < n.taskQueue.length; e++) {
                  var t = n.taskQueue[e];
                  if (o === t.timeout) {
                    n.taskQueue.splice(e, 1),
                      t.cb(c.getWorkloadResult(t.data, r));
                    break
                  }
                }
              }, 500);
              return void this.taskQueue.push({
                data: e,
                cb: t,
                timeout: o
              })
            }
            return this.sendToWorker(s["default"].RUN_TASK, i(i({}, e), {
              taskId: this.taskId
            })),
              void this.callbacks.push({
                taskId: this.taskId,
                cb: t
              })
          }
          window.setTimeout(function() {
            t(c.getWorkloadResult(e, r))
          }, 20)
        }
        ,
        e.prototype.sendToWorker = function(e, t) {
          var r;
          this.useWebWorker && (null === (r = this.worker) || void 0 === r || r.postMessage({
            type: e,
            data: t
          }))
        }
        ,
        e.prototype.terminate = function() {
          var e;
          this.useWebWorker && (null === (e = this.worker) || void 0 === e || e.terminate())
        }
        ,
        e
    }();
    t["default"] = u
  }
  , function(e, t, r) {
    var i = r(49);
    e.exports = function() {
      return i('!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{"default":t}};n.__esModule=!0;var f=e(1),a=u(e(2)),i=self;function c(t,n){i.postMessage({type:t,data:n})}c(a["default"].WORKER_READY),i.onmessage=function(t){var n=t.data;if(n.type===a["default"].RUN_TASK){var e=n.data,u=e.taskId,i=o(e,["taskId"]);c(a["default"].TASK_RESULT,r(r({},f.getWorkloadResult(i)),{taskId:u}))}},n["default"]=function(){}},function(t,n,e){"use strict";function r(t,n){var e=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(e>>16)<<16|65535&e}function o(t,n,e,o,u,f){return r(function(t,n){return t<<n|t>>>32-n}(r(r(n,t),r(o,f)),u),e)}function u(t,n,e,r,u,f,a){return o(n&e|~n&r,t,n,u,f,a)}function f(t,n,e,r,u,f,a){return o(n&r|e&~r,t,n,u,f,a)}function a(t,n,e,r,u,f,a){return o(n^e^r,t,n,u,f,a)}function i(t,n,e,r,u,f,a){return o(e^(n|~r),t,n,u,f,a)}function c(t,n){var e,o,c,l,s;t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;var d=1732584193,p=-271733879,g=-1732584194,_=271733878;for(e=0;e<t.length;e+=16)o=d,c=p,l=g,s=_,p=i(p=i(p=i(p=i(p=a(p=a(p=a(p=a(p=f(p=f(p=f(p=f(p=u(p=u(p=u(p=u(p,g=u(g,_=u(_,d=u(d,p,g,_,t[e],7,-680876936),p,g,t[e+1],12,-389564586),d,p,t[e+2],17,606105819),_,d,t[e+3],22,-1044525330),g=u(g,_=u(_,d=u(d,p,g,_,t[e+4],7,-176418897),p,g,t[e+5],12,1200080426),d,p,t[e+6],17,-1473231341),_,d,t[e+7],22,-45705983),g=u(g,_=u(_,d=u(d,p,g,_,t[e+8],7,1770035416),p,g,t[e+9],12,-1958414417),d,p,t[e+10],17,-42063),_,d,t[e+11],22,-1990404162),g=u(g,_=u(_,d=u(d,p,g,_,t[e+12],7,1804603682),p,g,t[e+13],12,-40341101),d,p,t[e+14],17,-1502002290),_,d,t[e+15],22,1236535329),g=f(g,_=f(_,d=f(d,p,g,_,t[e+1],5,-165796510),p,g,t[e+6],9,-1069501632),d,p,t[e+11],14,643717713),_,d,t[e],20,-373897302),g=f(g,_=f(_,d=f(d,p,g,_,t[e+5],5,-701558691),p,g,t[e+10],9,38016083),d,p,t[e+15],14,-660478335),_,d,t[e+4],20,-405537848),g=f(g,_=f(_,d=f(d,p,g,_,t[e+9],5,568446438),p,g,t[e+14],9,-1019803690),d,p,t[e+3],14,-187363961),_,d,t[e+8],20,1163531501),g=f(g,_=f(_,d=f(d,p,g,_,t[e+13],5,-1444681467),p,g,t[e+2],9,-51403784),d,p,t[e+7],14,1735328473),_,d,t[e+12],20,-1926607734),g=a(g,_=a(_,d=a(d,p,g,_,t[e+5],4,-378558),p,g,t[e+8],11,-2022574463),d,p,t[e+11],16,1839030562),_,d,t[e+14],23,-35309556),g=a(g,_=a(_,d=a(d,p,g,_,t[e+1],4,-1530992060),p,g,t[e+4],11,1272893353),d,p,t[e+7],16,-155497632),_,d,t[e+10],23,-1094730640),g=a(g,_=a(_,d=a(d,p,g,_,t[e+13],4,681279174),p,g,t[e],11,-358537222),d,p,t[e+3],16,-722521979),_,d,t[e+6],23,76029189),g=a(g,_=a(_,d=a(d,p,g,_,t[e+9],4,-640364487),p,g,t[e+12],11,-421815835),d,p,t[e+15],16,530742520),_,d,t[e+2],23,-995338651),g=i(g,_=i(_,d=i(d,p,g,_,t[e],6,-198630844),p,g,t[e+7],10,1126891415),d,p,t[e+14],15,-1416354905),_,d,t[e+5],21,-57434055),g=i(g,_=i(_,d=i(d,p,g,_,t[e+12],6,1700485571),p,g,t[e+3],10,-1894986606),d,p,t[e+10],15,-1051523),_,d,t[e+1],21,-2054922799),g=i(g,_=i(_,d=i(d,p,g,_,t[e+8],6,1873313359),p,g,t[e+15],10,-30611744),d,p,t[e+6],15,-1560198380),_,d,t[e+13],21,1309151649),g=i(g,_=i(_,d=i(d,p,g,_,t[e+4],6,-145523070),p,g,t[e+11],10,-1120210379),d,p,t[e+2],15,718787259),_,d,t[e+9],21,-343485551),d=r(d,o),p=r(p,c),g=r(g,l),_=r(_,s);return[d,p,g,_]}function l(t){var n,e="";for(n=0;n<32*t.length;n+=8)e+=String.fromCharCode(t[n>>5]>>>n%32&255);return e}function s(t){var n,e=[];for(e[(t.length>>2)-1]=void 0,n=0;n<e.length;n+=1)e[n]=0;for(n=0;n<8*t.length;n+=8)e[n>>5]|=(255&t.charCodeAt(n/8))<<n%32;return e}function d(t){var n,e,r="0123456789abcdef",o="";for(e=0;e<t.length;e+=1)n=t.charCodeAt(e),o+=r.charAt(n>>>4&15)+r.charAt(15&n);return o}function p(t){return unescape(encodeURIComponent(t))}function g(t){return function(t){return l(c(s(t),8*t.length))}(p(t))}function _(t,n){return function(t,n){var e,r,o=s(t),u=[],f=[];for(u[15]=f[15]=void 0,o.length>16&&(o=c(o,8*t.length)),e=0;e<16;e+=1)u[e]=909522486^o[e],f[e]=1549556828^o[e];return r=c(u.concat(s(n)),512+8*n.length),l(c(f.concat(r),640))}(p(t),p(n))}function v(t,n,e){return n?e?_(n,t):function(t,n){return d(_(t,n))}(n,t):e?g(t):function(t){return d(g(t))}(t)}n.__esModule=!0,n.getWorkloadResult=n.md5=void 0,n.md5=v,n.getWorkloadResult=function(t,n){for(var e=t.nonce,r=t.target,o=+new Date,u=0,f="number"==typeof n?n:3e4;v(""+e+u)!==r&&(u+=1,!(+new Date-o>f)););return{ans:u,duration:+new Date-o}}},function(t,n,e){"use strict";n.__esModule=!0;n["default"]={WORKER_READY:"WORKER_READY",RUN_TASK:"RUN_TASK",TASK_RESULT:"TASK_RESULT"}}]);', "Worker", undefined, undefined)
    }
  }
  , function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r, i) {
      var n = self || window;
      try {
        try {
          var o;
          try {
            o = new n.Blob([e])
          } catch (u) {
            (o = new (n.BlobBuilder || n.WebKitBlobBuilder || n.MozBlobBuilder || n.MSBlobBuilder)).append(e),
              o = o.getBlob()
          }
          var a = n.URL || n.webkitURL
            , s = a.createObjectURL(o)
            , c = new n[t](s,r);
          return a.revokeObjectURL(s),
            c
        } catch (u) {
          return new n[t]("data:application/javascript,".concat(encodeURIComponent(e)),r)
        }
      } catch (u) {
        if (!i)
          throw Error("Inline worker is not supported");
        return new n[t](i,r)
      }
    }
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    t["default"] = {
      WORKER_READY: "WORKER_READY",
      RUN_TASK: "RUN_TASK",
      TASK_RESULT: "TASK_RESULT"
    }
  }
  , function(e, t, r) {
    "use strict";
    function i(e, t) {
      var r = (65535 & e) + (65535 & t);
      return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
    }
    function n(e, t, r, n, o, a) {
      return i(function(e, t) {
        return e << t | e >>> 32 - t
      }(i(i(t, e), i(n, a)), o), r)
    }
    function o(e, t, r, i, o, a, s) {
      return n(t & r | ~t & i, e, t, o, a, s)
    }
    function a(e, t, r, i, o, a, s) {
      return n(t & i | r & ~i, e, t, o, a, s)
    }
    function s(e, t, r, i, o, a, s) {
      return n(t ^ r ^ i, e, t, o, a, s)
    }
    function c(e, t, r, i, o, a, s) {
      return n(r ^ (t | ~i), e, t, o, a, s)
    }
    function u(e, t) {
      var r, n, u, l, d;
      e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
      var p = 1732584193
        , f = -271733879
        , h = -1732584194
        , g = 271733878;
      for (r = 0; r < e.length; r += 16)
        n = p,
          u = f,
          l = h,
          d = g,
          f = c(f = c(f = c(f = c(f = s(f = s(f = s(f = s(f = a(f = a(f = a(f = a(f = o(f = o(f = o(f = o(f, h = o(h, g = o(g, p = o(p, f, h, g, e[r], 7, -680876936), f, h, e[r + 1], 12, -389564586), p, f, e[r + 2], 17, 606105819), g, p, e[r + 3], 22, -1044525330), h = o(h, g = o(g, p = o(p, f, h, g, e[r + 4], 7, -176418897), f, h, e[r + 5], 12, 1200080426), p, f, e[r + 6], 17, -1473231341), g, p, e[r + 7], 22, -45705983), h = o(h, g = o(g, p = o(p, f, h, g, e[r + 8], 7, 1770035416), f, h, e[r + 9], 12, -1958414417), p, f, e[r + 10], 17, -42063), g, p, e[r + 11], 22, -1990404162), h = o(h, g = o(g, p = o(p, f, h, g, e[r + 12], 7, 1804603682), f, h, e[r + 13], 12, -40341101), p, f, e[r + 14], 17, -1502002290), g, p, e[r + 15], 22, 1236535329), h = a(h, g = a(g, p = a(p, f, h, g, e[r + 1], 5, -165796510), f, h, e[r + 6], 9, -1069501632), p, f, e[r + 11], 14, 643717713), g, p, e[r], 20, -373897302), h = a(h, g = a(g, p = a(p, f, h, g, e[r + 5], 5, -701558691), f, h, e[r + 10], 9, 38016083), p, f, e[r + 15], 14, -660478335), g, p, e[r + 4], 20, -405537848), h = a(h, g = a(g, p = a(p, f, h, g, e[r + 9], 5, 568446438), f, h, e[r + 14], 9, -1019803690), p, f, e[r + 3], 14, -187363961), g, p, e[r + 8], 20, 1163531501), h = a(h, g = a(g, p = a(p, f, h, g, e[r + 13], 5, -1444681467), f, h, e[r + 2], 9, -51403784), p, f, e[r + 7], 14, 1735328473), g, p, e[r + 12], 20, -1926607734), h = s(h, g = s(g, p = s(p, f, h, g, e[r + 5], 4, -378558), f, h, e[r + 8], 11, -2022574463), p, f, e[r + 11], 16, 1839030562), g, p, e[r + 14], 23, -35309556), h = s(h, g = s(g, p = s(p, f, h, g, e[r + 1], 4, -1530992060), f, h, e[r + 4], 11, 1272893353), p, f, e[r + 7], 16, -155497632), g, p, e[r + 10], 23, -1094730640), h = s(h, g = s(g, p = s(p, f, h, g, e[r + 13], 4, 681279174), f, h, e[r], 11, -358537222), p, f, e[r + 3], 16, -722521979), g, p, e[r + 6], 23, 76029189), h = s(h, g = s(g, p = s(p, f, h, g, e[r + 9], 4, -640364487), f, h, e[r + 12], 11, -421815835), p, f, e[r + 15], 16, 530742520), g, p, e[r + 2], 23, -995338651), h = c(h, g = c(g, p = c(p, f, h, g, e[r], 6, -198630844), f, h, e[r + 7], 10, 1126891415), p, f, e[r + 14], 15, -1416354905), g, p, e[r + 5], 21, -57434055), h = c(h, g = c(g, p = c(p, f, h, g, e[r + 12], 6, 1700485571), f, h, e[r + 3], 10, -1894986606), p, f, e[r + 10], 15, -1051523), g, p, e[r + 1], 21, -2054922799), h = c(h, g = c(g, p = c(p, f, h, g, e[r + 8], 6, 1873313359), f, h, e[r + 15], 10, -30611744), p, f, e[r + 6], 15, -1560198380), g, p, e[r + 13], 21, 1309151649), h = c(h, g = c(g, p = c(p, f, h, g, e[r + 4], 6, -145523070), f, h, e[r + 11], 10, -1120210379), p, f, e[r + 2], 15, 718787259), g, p, e[r + 9], 21, -343485551),
          p = i(p, n),
          f = i(f, u),
          h = i(h, l),
          g = i(g, d);
      return [p, f, h, g]
    }
    function l(e) {
      var t, r = "";
      for (t = 0; t < 32 * e.length; t += 8)
        r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
      return r
    }
    function d(e) {
      var t, r = [];
      for (r[(e.length >> 2) - 1] = void 0,
             t = 0; t < r.length; t += 1)
        r[t] = 0;
      for (t = 0; t < 8 * e.length; t += 8)
        r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
      return r
    }
    function p(e) {
      var t, r, i = "0123456789abcdef", n = "";
      for (r = 0; r < e.length; r += 1)
        t = e.charCodeAt(r),
          n += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
      return n
    }
    function f(e) {
      return unescape(encodeURIComponent(e))
    }
    function h(e) {
      return function(e) {
        return l(u(d(e), 8 * e.length))
      }(f(e))
    }
    function g(e, t) {
      return function(e, t) {
        var r, i, n = d(e), o = [], a = [];
        for (o[15] = a[15] = void 0,
             n.length > 16 && (n = u(n, 8 * e.length)),
               r = 0; r < 16; r += 1)
          o[r] = 909522486 ^ n[r],
            a[r] = 1549556828 ^ n[r];
        return i = u(o.concat(d(t)), 512 + 8 * t.length),
          l(u(a.concat(i), 640))
      }(f(e), f(t))
    }
    function m(e, t, r) {
      return t ? r ? g(t, e) : function(e, t) {
        return p(g(e, t))
      }(t, e) : r ? h(e) : function(e) {
        return p(h(e))
      }(e)
    }
    t.__esModule = !0,
      t.getWorkloadResult = t.md5 = void 0,
      t.md5 = m,
      t.getWorkloadResult = function(e, t) {
        for (var r = e.nonce, i = e.target, n = +new Date, o = 0, a = "number" == typeof t ? t : 3e4; m("" + r + o) !== i && (o += 1,
          !(+new Date - n > a)); )
          ;
        return {
          ans: o,
          duration: +new Date - n
        }
      }
  }
  , , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.loadImg = t.getImgNaturalDimension = void 0;
    t.getImgNaturalDimension = function(e, t) {
      if ("undefined" == typeof e.naturalWidth) {
        var r = new Image;
        r.onload = function() {
          t({
            width: r.width,
            height: r.height
          })
        }
          ,
          r.src = e.src
      } else
        t({
          width: e.naturalWidth,
          height: e.naturalHeight
        })
    }
      ,
      t.loadImg = function i(e, r) {
        var n = e.id
          , o = e.src
          , a = e.onSuccess
          , s = e.onError
          , c = e.maxRetryTimes
          , u = void 0 === c ? 3 : c
          , l = "undefined" == typeof e.el ? document.createElement("img") : e.el;
        if (null !== l) {
          var d, p = !1, f = function(e) {
            return function(t) {
              p || (clearTimeout(d),
                e(t))
            }
          }, h = function() {
            "number" != typeof r && (r = 0),
              (r += 1) < u ? i(e, r) : s({
                id: n,
                src: o
              })
          };
          l.onload = f(function() {
            t.getImgNaturalDimension(l, function(e) {
              a(e)
            })
          }),
            l.onerror = f(function() {
              h()
            }),
          e.timeout && (d = window.setTimeout(function() {
            p = !0,
              h()
          }, e.timeout)),
            l.src = "" + window.TCaptchaApiDomain + e.src
        } else
          s(e)
      }
  }
  , , , , , , , function(e, t, r) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.Notify = t.initFrameMessenger = void 0;
    var n, o, a = i(r(31)), s = i(r(26)), c = r(28);
    t.initFrameMessenger = function(e, r) {
      o = e,
        (n = new a["default"]("securityCode")).addTarget(window.parent, "parent"),
        n.listen(function(e) {
          var i;
          try {
            i = JSON.parse(e)
          } catch (o) {}
          if (void 0 !== i && i.message) {
            var n = i.message;
            if (!n || "undefined" != typeof n.type)
              switch (n.type) {
                case s["default"].messageType.checkPreLoadReady:
                  t.Notify.preloadReady();
                  break;
                case s["default"].messageType.sendPreloadData:
                  r(n)
              }
          }
        })
    }
    ;
    var u = function(e, t) {
      try {
        var r = t ? {
          message: e
        } : e;
        n.targets.parent.send(JSON.stringify(r))
      } catch (i) {}
    };
    t.Notify = {
      adjustStyle: function() {
        u({
          type: 7
        }, !0)
      },
      capClose: function() {
        u({
          type: s["default"].preloadMsgType.capClose
        }, !0)
      },
      loadMsg: function(e, t) {
        var r = {
          type: s["default"].messageType.loadReady,
          loadstate: e,
          info: t || ""
        };
        u(r, !0)
      },
      loadReady: function() {
        try {
          t.Notify.loadMsg(s["default"].loadState.ready)
        } catch (e) {}
      },
      preloadReady: function() {
        if (c.includeInPreoloadTemplate(o)) {
          var e = {
            type: s["default"].messageType.preloadReady,
            captype: o
          };
          u(e, !0)
        }
      },
      loadFailure: function(e) {
        t.Notify.loadMsg(s["default"].loadState.fail, e)
      },
      sessionTimeout: function() {
        u({
          type: s["default"].preloadMsgType.sessionTimeout
        }, !0)
      },
      verifySuccess: function(e) {
        var t = e.ticket
          , r = e.randstr
          , i = e.errorCode
          , n = e.errorMessage;
        u({
          type: s["default"].preloadMsgType.verifySuccess,
          ticket: t,
          randstr: r,
          errorCode: i,
          errorMessage: n
        }, !0)
      },
      frequencyLimit: function() {
        u({
          type: 11
        }, !0)
      },
      hybridVerify: function(e) {
        u({
          type: s["default"].messageType.hybridVerify,
          sess: e
        }, !0)
      },
      goBack: function() {
        u({
          type: s["default"].preloadMsgType.capClose
        }, !0)
      },
      goAged: function() {
        u({
          type: s["default"].messageType.goAged
        }, !0)
      },
      goNomralVerify: function() {
        u({
          type: s["default"].messageType.goNormalVerify
        }, !0)
      }
    }
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.getKeyInfo = t.getToken = t.getInfo = t.checkTdcSuccess = t.getTdcData = t.clearTdcData = t.setTdcData = t.loadDyJs = void 0;
    var n = i(r(95))
      , o = r(10);
    function a(e) {
      window.TDC && "function" == typeof window.TDC.setData && window.TDC.setData(e)
    }
    function s() {
      return "undefined" != typeof window.TDC && "function" == typeof window.TDC.getData
    }
    function c() {
      return window.TDC && "function" == typeof window.TDC.getInfo && window.TDC.getInfo() || {}
    }
    t.loadDyJs = function(e) {
      window.TDC = undefined,
        o.getScript({
          src: e,
          successCheck: function() {
            return s()
          }
        })
    }
      ,
      t.setTdcData = a,
      t.clearTdcData = function() {
        window.TDC && "function" == typeof window.TDC.clearTc && window.TDC.clearTc()
      }
      ,
      t.getTdcData = function() {
        return a({
          ft: n["default"]()
        }),
          window.TDC && "function" == typeof window.TDC.getData ? window.TDC.getData(!0) || "---" : "------"
      }
      ,
      t.checkTdcSuccess = s,
      t.getInfo = c,
      t.getToken = function() {
        return (c() || {}).tokenid || ""
      }
      ,
      t.getKeyInfo = function() {
        return (c() || {}).info || ""
      }
  }
  , function(e, t, r) {
    "use strict";
    function i(e) {
      return /^touch/.test(e.type)
    }
    t.__esModule = !0,
      t.getPosition = t.testTouchEvent = void 0,
      t.testTouchEvent = i,
      t.getPosition = function(e) {
        if (i(e)) {
          var t;
          e.originalEvent && (t = e.originalEvent);
          var r = ((null === t || void 0 === t ? void 0 : t.touches) || [])[0];
          return r ? {
            x: r.clientX,
            y: r.clientY
          } : null
        }
        return {
          x: e.pageX,
          y: e.pageY
        }
      }
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var i = r(60)
      , n = r(33)
      , o = r(10)
      , a = r(93);
    !function() {
      if (!window.TCaptchaLoaded) {
        window.TCaptchaLoaded = !0;
        var e = new n.ErrorHandler;
        e.init({
          appid: "unknown"
        }),
          e.initGlobalListener(n.ErrorTypes.DY_JS_ERROR),
          t = {
            errorHandler: e,
            success: function() {
              var t = new a.Captcha(e);
              i.initFrameMessenger("dy", function(e) {
                window.TCaptchaReferrer = e.option.referrer,
                  t.show(e)
              }),
                i.Notify.preloadReady()
            }
          },
          window.$ ? t.success() : (t.errorHandler.send({
            errorType: n.ErrorTypes.DY_JQUERY_FAIL
          }),
            o.getScript({
              success: t.success,
              src: window.TCaptchaApiDomain + "/dy-jy.js",
              successCheck: function() {
                return !!window.$
              }
            }))
      }
      var t
    }()
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      , n = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.Captcha = void 0;
    var o = r(33)
      , a = r(43)
      , s = r(60)
      , c = r(94)
      , u = r(96)
      , l = r(97)
      , d = r(104)
      , p = r(8)
      , f = r(1)
      , h = r(2)
      , g = n(r(105))
      , m = r(106)
      , v = r(30)
      , y = r(6)
      , w = r(5)
      , b = r(107)
      , _ = function() {
      function e() {
        this.actions = [],
          this.stopped = !1
      }
      return e.prototype.action = function(e) {
        var t = this;
        e(function() {
          return t.stopped
        })
      }
        ,
        e.prototype.stop = function() {
          this.stopped = !0
        }
        ,
        e
    }()
      , E = function() {
      function e(e) {
        this.isFirstInit = !0,
          this.onceSwitchA = !0,
          this.onceSwitchB = !0,
          this.onceSwitchC = !0,
          this.$domManager = new l.DomManager(this),
          this.dataManager = new d.DataManager(this),
          this.userEvent = new u.EventDelegator(this,a.get$Dom().operation),
          this.event = new u.EventEmitter,
          this.httpRequest = new c.RequestManager(this),
          this.monitor = new b.Monitor,
          this.multiStep = !1,
          this.sid = "",
          this.appid = "",
          this.uip = "",
          this.curCommonConfig = null,
          this.refreshHttpErrorCounter = 0,
          this.verifyHttpErrorCounter = 0,
          this.autoVerifyTimer = null,
          this.loading = !1,
          this.closed = !0,
          this.enableAged = !1,
          this.aged = !1,
          this.invisible = !1,
          this.isDyJsDone = null,
          this.isPowDone = null,
          this.asyncAction = new _,
          this.errorHandler = e
      }
      return e.prototype.show = function(e) {
        this.closed = !1,
          this.asyncAction = new _;
        var t = e.data
          , r = e.option;
        this.option = r,
          this.errorHandler.init({
            appid: r.aid,
            errType: r.subcapclass,
            sid: r.sid
          }),
          this.errorHandler.openReport();
        var i = v.getIEVersion();
        (-1 === i || i >= 10) && (m.initAegis(this.option),
          this.recordTime(e.speedList)),
          this.sid = r.sid,
          this.appid = r.aid,
          this.uip = r.uip || "",
          this.curCommonConfig = t.comm_captcha_cfg,
        "point" !== r.type && "undefined" != typeof r.type || (r.type = "popup");
        try {
          this.initFirst(r.type),
            this.$domManager.addDocumentClass(r),
            this.initFb(r.fb),
            this.initAged(r),
            this.isDyJsDone = $.Deferred(),
            this.isPowDone = $.Deferred(),
            this.httpRequest.initCommonConfig(t.comm_captcha_cfg, this.isDyJsDone, this.isPowDone),
            h.bodyAriaHidden.unhide(),
            this.initNewCaptcha(r.sess, t.dyn_show_info),
            this.monitor.init({
              appid: this.appid,
              sid: this.sid,
              isPreload: r.isPreload,
              isVisible: !this.invisible
            }, .1)
        } catch (a) {
          var n = a.stack ? a.stack : a.message;
          this.errorHandler.send({
            errorType: o.ErrorTypes.DY_JS_ERROR,
            reason: n
          }),
            this.onClose(),
            s.Notify.verifySuccess(p.getErrorRes("CAPTCHA_JS_RUN_ERROR", this.appid, this.sid))
        }
      }
        ,
        e.prototype.initNewCaptcha = function(e, t) {
          var r;
          this.invisible = !t.instruction,
            this.autoVerify((null === (r = t.verify_trigger_cfg) || void 0 === r ? void 0 : r.auto_verify_timer) || (this.invisible ? 0 : void 0)),
            this.initEls(t),
            this.httpRequest.refreshData(e)
        }
        ,
        e.prototype.initEls = function(e) {
          var t, r = this;
          this.$domManager.refreshDom(e),
            this.multiStep = !!(null === (t = e.verify_trigger_cfg) || void 0 === t ? void 0 : t.verify_icon),
            this.event.remove("setData"),
            this.event.on("setData", function(e) {
              var t = e.data
                , i = e.namespace;
              r.dataManager.setData(i, t),
              r.multiStep || r.verify()
            })
        }
        ,
        e.prototype.initFb = function(e) {
          var t = a.get$Dom();
          e ? (t.tcStatus.removeClass("hide-feedback"),
            t.embedStatus.removeClass("hide-feedback")) : (t.tcStatus.addClass("hide-feedback"),
            t.embedStatus.addClass("hide-feedback"))
        }
        ,
        e.prototype.initAged = function(e) {
          var t = a.get$Dom();
          t.aged.removeClass("show"),
            t.normalVerify.removeClass("show"),
            this.enableAged = e.enableAged,
            this.aged = !!e.aged,
          e.enableAged && (e.aged ? t.normalVerify.addClass("show") : t.aged.addClass("show"))
        }
        ,
        e.prototype.initFirst = function(e) {
          this.isFirstInit && (this.$domManager.initShowType(e),
            this.$domManager.addEmbedTip(),
            $("body")[0].style.zoom = "0",
            $("body")[0].style.zoom = "1",
            this.bindOperationEvent(),
            this.isFirstInit = !1)
        }
        ,
        e.prototype.onClose = function() {
          this.closed = !0,
            this.stopOngoingProcess(),
            this.isPowDone = null,
            this.isDyJsDone = null,
            this.verifyHttpErrorCounter = 0,
            h.bodyAriaHidden.hide()
        }
        ,
        e.prototype.autoVerify = function(e) {
          var t = this;
          "number" == typeof this.autoVerifyTimer && (clearTimeout(this.autoVerifyTimer),
            this.autoVerifyTimer = null),
          "number" == typeof e && this.event.one("initReady", function() {
            t.autoVerifyTimer = window.setTimeout(function() {
              t.autoVerifyTimer = null,
                t.dataManager.setData("autoVerify", [{
                  elem_id: 0,
                  type: "DynAnswerType_TIME",
                  data: ""
                }]),
                t.verify()
            }, 1e3 * e)
          })
        }
        ,
        e.prototype.verify = function() {
          var e = this;
          this.$domManager.changeOperationStatus("loading");
          var t = {
            0: "verifySuccess",
            9: "verifyFailRefresh",
            12: "verifyError",
            20: "verifySessionTimeout",
            50: "verifyFail",
            30: "verifyHybrid",
            51: "verifyHybrid",
            52: "verifyError",
            206: "verifySessionTimeout",
            "default": "verifyError",
            httpError: "verifyHttpError"
          }
            , r = this.dataManager.getData();
          this.asyncAction.action(function(i) {
            $.when(e.isDyJsDone, e.isPowDone).then(function() {
              e.httpRequest.verify(r, function(r) {
                if (!i()) {
                  e.$domManager.changeOperationStatus("");
                  var n, o = r.errorCode, a = t["default"];
                  for (n in "httpError" !== o && (e.verifyHttpErrorCounter = 0),
                    t)
                    if (n === o) {
                      a = t[n];
                      break
                    }
                  e[a](r)
                }
              }),
                e.dataManager.initData()
            }, function(e) {})
          })
        }
        ,
        e.prototype.verifySuccess = function(e) {
          var t = this;
          this.$domManager.verifySuccess();
          var r = this.invisible ? 0 : this.aged ? 1200 : 500;
          setTimeout(function() {
            var r, i, n;
            if (t.onClose(),
              s.Notify.verifySuccess({
                ticket: e.ticket,
                randstr: e.randstr
              }),
            t.onceSwitchB && (t.onceSwitchB = !1,
              t.monitor.send(w.getPerformance(/cap_union_new_verify$/)),
              t.invisible)) {
              var o = null === (r = t.option) || void 0 === r ? void 0 : r.createTime;
              if ("number" == typeof o) {
                var a = {
                  name: (null === (i = window.TCaptchaApiDomain) || void 0 === i ? void 0 : i.split("://")[1]) + "/InvisibleCaptchaDuration",
                  duration: (new Date).getTime() - o
                };
                null === (n = window.aegis) || void 0 === n || n.reportTime(a),
                  t.monitor.send(a)
              }
            }
          }, r)
        }
        ,
        e.prototype.verifyFailRefresh = function() {
          var e = this;
          this.$domManager.verifyFailRefresh(function() {
            e.refresh()
          })
        }
        ,
        e.prototype.verifyError = function(e) {
          var t = this;
          this.$domManager.verifyError(this.sid, e.errorCode, function() {
            t.refresh()
          })
        }
        ,
        e.prototype.verifySessionTimeout = function() {
          this.onClose(),
            s.Notify.sessionTimeout()
        }
        ,
        e.prototype.verifyFail = function() {
          this.$domManager.verifyFail()
        }
        ,
        e.prototype.verifyHybrid = function(e) {
          s.Notify.hybridVerify(e.sess)
        }
        ,
        e.prototype.verifyHttpError = function(e) {
          var t = this;
          this.errorHandler.send({
            errorType: o.ErrorTypes.DY_VERIFY_ERROR,
            reason: "verify http error(" + this.verifyHttpErrorCounter + "),reason:" + e.errorMessage + ";position:captcha/Captcha/verifyHttpError"
          }),
            this.verifyHttpErrorCounter += 1,
            this.verifyHttpErrorCounter < 3 ? this.$domManager.verifyHttpError(function() {
              t.refresh()
            }) : (this.$domManager.verifySuccess(),
              setTimeout(function() {
                t.onClose(),
                  s.Notify.verifySuccess(p.getErrorRes("VERIFY_ERROR", t.appid, t.sid))
              }, 500))
        }
        ,
        e.prototype.stopOngoingProcess = function() {
          this.event.remove("initReady"),
          "number" == typeof this.autoVerifyTimer && (clearTimeout(this.autoVerifyTimer),
            this.autoVerifyTimer = null),
            this.asyncAction.stop()
        }
        ,
        e.prototype.refresh = function() {
          var e = this;
          this.stopOngoingProcess(),
            this.asyncAction = new _,
            this.$domManager.changeOperationStatus("loading");
          var t = {
            0: "refreshSuccess",
            httpError: "refreshHttpError",
            "default": "refreshError"
          };
          this.asyncAction.action(function(r) {
            e.httpRequest.refresh(function(i) {
              if (!r()) {
                var n, o = i.ret, a = t["default"];
                for (n in "httpError" !== o && (e.refreshHttpErrorCounter = 0),
                  t)
                  if (n === o) {
                    a = t[n];
                    break
                  }
                e[a](i)
              }
            })
          })
        }
        ,
        e.prototype.refreshSuccess = function(e) {
          this.onceSwitchC && (this.onceSwitchC = !1,
            this.monitor.send(w.getPerformance(/cap_union_new_getsig/))),
            this.refreshHttpErrorCounter = 0,
            this.initNewCaptcha(e.sess, e.data)
        }
        ,
        e.prototype.refreshHttpError = function(e) {
          var t = this;
          this.errorHandler.send({
            errorType: o.ErrorTypes.DY_REFRESH_ERROR,
            reason: "refresh http error(" + this.refreshHttpErrorCounter + "),reason:" + e.errorMessage + ";position:captcha/Captcha/refresh"
          }),
            this.refreshHttpErrorCounter += 1,
            this.refreshHttpErrorCounter < 3 ? this.$domManager.showError() : (this.$domManager.verifySuccess(),
              setTimeout(function() {
                t.onClose(),
                  s.Notify.verifySuccess(p.getErrorRes("REFRESH_ERROR", t.appid, t.sid))
              }, 500))
        }
        ,
        e.prototype.refreshError = function(e) {
          this.errorHandler.send({
            errorType: o.ErrorTypes.DY_REFRESH_ERROR,
            reason: "refresh error,ret:" + e.ret + ";position:captcha/Captcha/refresh"
          }),
            s.Notify.sessionTimeout()
        }
        ,
        e.prototype.recordTime = function(e) {
          var t = this;
          this.event.one("initReady", function() {
            var r, n, o, a, s, c, u;
            if (t.onceSwitchA) {
              t.onceSwitchA = !1;
              var l = [];
              if (y.isArray(e))
                try {
                  for (var d = i(e), p = d.next(); !p.done; p = d.next()) {
                    var f = p.value;
                    null === (o = window.aegis) || void 0 === o || o.reportTime(f),
                      l.push(f)
                  }
                } catch (S) {
                  r = {
                    error: S
                  }
                } finally {
                  try {
                    p && !p.done && (n = d["return"]) && n.call(d)
                  } finally {
                    if (r)
                      throw r.error
                  }
                }
              if (performance.timing) {
                var h = performance.timing
                  , g = h.responseEnd
                  , m = h.connectStart
                  , v = {
                  name: null === (a = window.location.href) || void 0 === a ? void 0 : a.split("://")[1],
                  duration: g - m
                };
                l.push(v),
                null === (s = window.aegis) || void 0 === s || s.reportTime(v)
              }
              var b = w.getPerformance(/dy-ele\.[a-z0-9]{8}.js$|dy-jy\.js$|aegis\.min\.js|cap_union_new_getcapbysig|tdc\.js/);
              if (l = l.concat(b),
                !t.invisible) {
                var _ = null === (c = t.option) || void 0 === c ? void 0 : c.createTime;
                if ("number" != typeof _)
                  return;
                var E = {
                  name: window.TCaptchaApiDomain.split("://")[1] + "/VisibleCaptchaDuration",
                  duration: (new Date).getTime() - _
                };
                l.push(E),
                null === (u = window.aegis) || void 0 === u || u.reportTime(E)
              }
              t.monitor.send(l)
            }
          })
        }
        ,
        e.prototype.bindOperationEvent = function() {
          var e = this
            , t = a.get$Dom();
          t.close.on("click", function() {
            e.onClose(),
              s.Notify.capClose()
          }),
            t.btnReload.on("click", function() {
              e.refresh()
            }),
            t.coverFail.on("click", function() {
              e.refresh()
            }),
            t.btnBack.on("click", function() {
              e.onClose(),
                s.Notify.capClose()
            }),
            t.aged.on("click", function() {
              e.onClose(),
                s.Notify.goAged()
            }),
            t.normalVerify.on("click", function() {
              e.onClose(),
                s.Notify.goNomralVerify()
            }),
            t.btnVerify.on("click", function() {
              e.verify()
            }),
            t.feedback.on("click", function() {
              var t, r;
              try {
                var i = null === (t = e.curCommonConfig) || void 0 === t ? void 0 : t.feedback_url;
                if (i) {
                  var n = f.addUrlParam(i, g["default"]({
                    sid: e.sid,
                    uip: e.uip,
                    aid: e.appid
                  }))
                    , o = null === (r = e.option) || void 0 === r ? void 0 : r.fbUrl;
                  "string" == typeof o && (n = decodeURIComponent(o)),
                    window.open(n)
                }
              } catch (a) {}
            })
        }
        ,
        e
    }();
    t.Captcha = E
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.RequestManager = void 0;
    var n = r(10)
      , o = r(61)
      , a = i(r(47))
      , s = function() {
      function e(e) {
        this.sess = "",
          this.dyjsSrc = "",
          this.workerLoader = null,
          this.workLoadData = {
            workloadAns: null,
            workloadDuration: null,
            runWorkload: !1
          },
          this.workLoadLog = [],
          this.captcha = e
      }
      return e.prototype.initCommonConfig = function(e, t, r) {
        (null === e || void 0 === e ? void 0 : e.tdc_path) && this.refreshDyJs({
          src: e.tdc_path,
          callback: function() {
            t.resolve()
          }
        }),
        (null === e || void 0 === e ? void 0 : e.pow_cfg) && this.refreshWorkload(e.pow_cfg, function() {
          r.resolve()
        })
      }
        ,
        e.prototype.refreshData = function(e) {
          this.sess = e,
            o.clearTdcData()
        }
        ,
        e.prototype.initVm = function(e) {
          n.getScript({
            src: e
          })
        }
        ,
        e.prototype.refreshDyJs = function(e) {
          var t = void 0 === e ? {
            src: undefined,
            callback: undefined
          } : e
            , r = t.src
            , i = t.callback;
          if (r && (this.dyjsSrc = "" + window.TCaptchaApiDomain + r),
            this.dyjsSrc) {
            window.TDC = undefined;
            var a = undefined;
            if (i) {
              var s = setTimeout(function() {
                i()
              }, 2e4);
              a = function() {
                i(),
                  clearTimeout(s)
              }
            }
            n.getScript({
              src: this.dyjsSrc,
              successCheck: function() {
                return o.checkTdcSuccess()
              },
              success: a,
              error: a
            })
          }
        }
        ,
        e.prototype.refreshWorkload = function(e, t) {
          var r = this;
          this.workLoadData = {
            workloadAns: null,
            workloadDuration: null,
            workloadTarget: null === e || void 0 === e ? void 0 : e.md5,
            workloadNonce: null === e || void 0 === e ? void 0 : e.prefix,
            runWorkload: !!((null === e || void 0 === e ? void 0 : e.md5) && (null === e || void 0 === e ? void 0 : e.prefix))
          },
            this.workLoadLog = [],
            this.workLoadData.runWorkload ? (this.workerLoader && this.workerLoader.terminate(),
              this.workerLoader = new a["default"],
              this.workLoadLog = [],
              this.workLoadLog.push("useWebWorker:" + this.workerLoader.useWebWorker),
              this.workerLoader.run({
                target: this.workLoadData.workloadTarget,
                nonce: this.workLoadData.workloadNonce
              }, function(e) {
                r.workLoadLog.push("web worker run cb: " + JSON.stringify(e)),
                  r.workLoadData.workloadAns = "" + e.ans,
                  r.workLoadData.workloadDuration = e.duration,
                  t()
              })) : setTimeout(function() {
              t()
            })
        }
        ,
        e.prototype.refresh = function(e) {
          var t = this;
          o.checkTdcSuccess() || this.refreshDyJs();
          var r = {
            sess: this.sess
          }
            , i = window.TCaptchaApiDomain + "/cap_union_new_getsig";
          $.ajax({
            type: "POST",
            url: i,
            timeout: 15e3,
            data: r,
            dataType: "json",
            success: function(r) {
              r.sess && (t.sess = r.sess),
                e(r)
            },
            error: function(t, n, o) {
              var a = i + ",";
              a += (null === t || void 0 === t ? void 0 : t.status) ? t.status + "," : "",
                a += n ? n + ":" : "",
                e({
                  ret: "httpError",
                  errorMessage: a += o || "",
                  dragPos: [],
                  dragSrc: "",
                  bgSrc: "",
                  instruction: "",
                  sess: r.sess
                })
            }
          })
        }
        ,
        e.prototype.verify = function(e, t) {
          var r, i, n, a = this, s = decodeURIComponent(o.getTdcData()), c = o.getKeyInfo(), u = {
            collect: s,
            tlg: s.length,
            eks: c,
            sess: this.sess,
            ans: JSON.stringify(e)
          };
          (null === (r = this.captcha.option) || void 0 === r ? void 0 : r.deviceID) && (u.deviceID = null === (i = this.captcha.option) || void 0 === i ? void 0 : i.deviceID);
          var l = this.workLoadData
            , d = l.workloadAns
            , p = l.workloadDuration
            , f = l.workloadNonce;
          l.runWorkload && (u.pow_answer = null !== d && d.length > 0 ? "" + f + d : d,
            u.pow_calc_time = p);
          var h = [];
          for (var g in u)
            Object.prototype.hasOwnProperty.call(u, g) && h.push(g + "=" + u[g]);
          var m = null === (n = window.getVData) || void 0 === n ? void 0 : n.call(window, h.join("&"));
          m && (u.vData = m);
          var v = window.TCaptchaApiDomain + "/cap_union_new_verify"
            , y = $.ajax({
            type: "POST",
            url: v,
            data: u,
            timeout: 15e3,
            dataType: "json",
            success: function(e) {
              e && (e.sess && (a.sess = e.sess),
                t(e))
            },
            error: function(e, r, i) {
              y.abort();
              var n = v + ",";
              n += (null === e || void 0 === e ? void 0 : e.status) ? e.status + "," : "",
                n += r ? r + ":" : "",
                t({
                  errorMessage: n += i || "",
                  errorCode: "httpError",
                  randstr: "",
                  sess: "",
                  ticket: ""
                })
            }
          })
        }
        ,
        e.prototype.preverify = function() {}
        ,
        e.prototype.callVerify = function() {}
        ,
        e
    }();
    t.RequestManager = s
  }
  , function(e, t, r) {
    "use strict";
    function i(e) {
      return document.createElement(e)
    }
    function n() {
      return "history"in window && "pushState"in history
    }
    t.__esModule = !0;
    var o, a, s = (o = [],
      a = [],
      {
        add: function(e) {
          Array.prototype.push.apply(o, e)
        },
        get: function() {
          for (var e = 0; e < o.length; e++)
            a[e] = o[e]();
          return a
        }
      });
    s.add([function() {
      return "matches"in i("div")
    }
      , function() {
        return "msMatchesSelector"in i("div")
      }
      , function() {
        return "webkitMatchesSelector"in i("div")
      }
      , function() {
        return !!(window.matchMedia && window.matchMedia("(min-width: 400px)") && window.matchMedia("(min-width: 400px)").matches)
      }
      , function() {
        return !!(window.CSS && CSS.supports && CSS.supports("display", "block"))
      }
      , function() {
        return !!document.createRange
      }
      , function() {
        return !!window.CustomEvent
      }
      , function() {
        return "scrollIntoView"in i("div")
      }
      , function() {
        return "getUserMedia"in window.navigator
      }
      , function() {
        return !!window.IntersectionObserver
      }
      , function() {
        return "ontouchstart"in i("div")
      }
      , function() {
        return "performance"in window
      }
      , function() {
        return !(!window.performance || !performance.timing)
      }
      , function() {
        return "MediaSource"in window
      }
      , function() {
        return "onpageshow"in window
      }
      , function() {
        return "onhashchange"in window
      }
      , function() {
        return !(!window.requestFileSystem && !window.webkitRequestFileSystem)
      }
      , function() {
        return !!window.screen.orientation
      }
      , function() {
        return "WebSocket"in window
      }
      , function() {
        return !1
      }
      , function() {
        return "FileReader"in window
      }
      , function() {
        return !!window.atob
      }
      , function() {
        return !(!window.JSON || !JSON.parse)
      }
      , function() {
        return "postMessage"in window
      }
      , function() {
        return "EventSource"in window
      }
      , function() {
        return "vibrate"in navigator
      }
      , function() {
        return "Promise"in window
      }
      , function() {
        return "setImmediate"in window
      }
      , function() {
        return "isInfinite"in Number
      }
      , function() {
        return "indexedDB"in window
      }
      , function() {
        return "Proxy"in window
      }
      , function() {
        return "serviceWorker"in navigator
      }
      , function() {
        return "postMessage"in window
      }
      , function() {
        return "Crypto"in window
      }
      , function() {
        return "openDatabase"in window
      }
      , function() {
        return "Notification"in window
      }
      , function() {
        return "currentScript"in document
      }
      , function() {
        var e = !1;
        return "number" == typeof window.screenX && ["webkit", "moz", "ms", "o", ""].forEach(function(t) {
          0 == e && document[t + (t ? "H" : "h") + "idden"] !== undefined && (e = !0)
        }),
          e
      }
      , function() {
        var e = !1;
        try {
          e = "localStorage"in window && "setItem"in localStorage
        } catch (t) {}
        return e
      }
      , function() {
        var e = !1;
        try {
          e = "sessionStorage"in window && "setItem"in sessionStorage
        } catch (t) {}
        return e
      }
      , function() {
        return "console"in window
      }
      , function() {
        return "requestAnimationFrame"in window
      }
      , function() {
        return "geolocation"in window.navigator
      }
      , function() {
        return "webkitSpeechRecognition"in window
      }
      , n, function() {
        return "TextEncoder"in window
      }
      , n, n, function() {
        var e = !1
          , t = "https://sv.aq.qq.com/";
        try {
          new URL("/",t).href == t && (e = !0)
        } catch (r) {}
        return e
      }
      , function() {
        try {
          "a".localeCompare("b", "i")
        } catch (e) {
          return "RangeError" === e.name
        }
        return !1
      }
    ]);
    for (var c, u = (c = [],
      {
        set: function(e) {
          c[e] = !0
        },
        encode: function() {
          for (var e = [], t = [], r = 0; r < c.length; r++)
            c[r] && (e[Math.floor(r / 6)] ^= 1 << r % 6);
          for (r = 0; r < e.length; r++)
            t[r] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[r] || 0);
          return t.join("")
        }
      }), l = s.get(), d = 0; d < l.length; d++)
      l[d] && u.set(d + 1);
    var p = u.encode();
    t["default"] = function() {
      return p
    }
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r)
          return e;
        var i, n, o = r.call(e), a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            a.push(i.value)
        } catch (s) {
          n = {
            error: s
          }
        } finally {
          try {
            i && !i.done && (r = o["return"]) && r.call(o)
          } finally {
            if (n)
              throw n.error
          }
        }
        return a
      }
      , n = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
    ;
    t.__esModule = !0,
      t.EventDelegator = t.EventEmitter = void 0;
    var o = r(62)
      , a = r(2)
      , s = function() {
      function e() {
        var e = this;
        this.emit = function(t, r) {
          if (e) {
            var i, n = e.EventsList[t];
            if (null === n || void 0 === n ? void 0 : n.length) {
              n = n.slice();
              for (var o = 0; o < n.length; o++) {
                i = n[o];
                try {
                  var a = i.callback.apply(e, [r]);
                  if (1 === i.type && e.remove(t, i.callback),
                  !1 === a)
                    break
                } catch (s) {
                  throw s
                }
              }
            }
            return e
          }
        }
          ,
          this.EventsList = {}
      }
      return e.prototype.indexOf = function(e, t) {
        for (var r = 0; r < e.length; r++)
          if (e[r].callback === t)
            return r;
        return -1
      }
        ,
        e.prototype.on = function(e, t, r) {
          if (void 0 === r && (r = 0),
            this) {
            var i = this.EventsList[e];
            if (i || (this.EventsList[e] = [],
              i = this.EventsList[e]),
            -1 === this.indexOf(i, t)) {
              var n = {
                name: e,
                type: r || 0,
                callback: t
              };
              return i.push(n),
                this
            }
            return this
          }
        }
        ,
        e.prototype.one = function(e, t) {
          this.on(e, t, 1)
        }
        ,
        e.prototype.remove = function(e, t) {
          if (this) {
            var r = this.EventsList[e];
            if (!r)
              return null;
            if (!t) {
              try {
                delete this.EventsList[e]
              } catch (n) {}
              return null
            }
            if (r.length) {
              var i = this.indexOf(r, t);
              r.splice(i, 1)
            }
            return this
          }
        }
        ,
        e.prototype.clear = function() {
          this.EventsList = {}
        }
        ,
        e
    }();
    t.EventEmitter = s;
    var c = function() {
      function e(e, t) {
        this.boundEvent = {},
          this.EventsList = {},
          this.captcha = e,
          this.$wrapper = t,
          this.initTouchPrevent()
      }
      return e.prototype.indexOf = function(e, t, r, i) {
        for (var n = 0; n < e.length; n++)
          if (e[n].target === t && e[n].name === r && e[n].callback === i)
            return n;
        return -1
      }
        ,
        e.prototype.initTouchPrevent = function() {
          var e = this.captcha;
          var t = !!a.supportsPassive && {
            passive: !1
          };
          document.addEventListener && document.addEventListener("touchmove", function(t) {
            var r;
            e.enableAged || null === (r = t.preventDefault) || void 0 === r || r.call(t)
          }, t)
        }
        ,
        e.prototype.on = function(e, t, r) {
          if (this) {
            var n, o, a;
            if ("string" == typeof e && "function" == typeof t) {
              n = i(this.$wrapper, 1)[0],
                o = e,
                a = t
            } else {
              if ("object" != typeof e || "string" != typeof t || "function" != typeof r)
                throw new Error("wrong param in bound event");
              n = e,
                o = t,
                a = r
            }
            var s = this.EventsList[o];
            if (s || (this.EventsList[o] = [],
              s = this.EventsList[o]),
            -1 === this.indexOf(s, n, o, a)) {
              var c = {
                target: n,
                name: o,
                type: 0,
                callback: a
              };
              s.push(c)
            }
            this.bindEvent(o)
          }
        }
        ,
        e.prototype.bindEvent = function(e) {
          var t = this;
          this.boundEvent[e] || (this.$wrapper.on(e, function(r) {
            t.emit(e, r)
          }),
            this.boundEvent[e] = !0)
        }
        ,
        e.prototype.emit = function(e, t) {
          var r, i, o = this.EventsList[e];
          if (null === o || void 0 === o ? void 0 : o.length)
            try {
              for (var a = n(o), s = a.next(); !s.done; s = a.next()) {
                var c = s.value
                  , u = c.target
                  , l = c.callback;
                this.checkIfTarget(u, t) && l.apply(u, [t])
              }
            } catch (d) {
              r = {
                error: d
              }
            } finally {
              try {
                s && !s.done && (i = a["return"]) && i.call(a)
              } finally {
                if (r)
                  throw r.error
              }
            }
        }
        ,
        e.prototype.clear = function() {
          this.EventsList = {}
        }
        ,
        e.prototype.off = function(e, t, r) {
          var i = this.EventsList[t];
          if (!i)
            return null;
          if (i.length) {
            var n = this.indexOf(i, e, t, r);
            n > -1 && i.splice(n, 1)
          }
        }
        ,
        e.prototype.checkIfTarget = function(e, t) {
          if (!e || !t || !t.target)
            return !1;
          if (t.target === e)
            return !0;
          if ($(t.target).parents().index(e) > -1)
            return !0;
          var r = o.getPosition(t);
          return !!this.checkIfStartInElOffset(e, null === r || void 0 === r ? void 0 : r.x, null === r || void 0 === r ? void 0 : r.y) || void 0
        }
        ,
        e.prototype.checkIfStartInElOffset = function(e, t, r) {
          try {
            if (!t || !r)
              return !1;
            var i = $(e).offset()
              , n = $(e).height()
              , o = $(e).width();
            if (!i || !n || !o)
              return !1;
            var a = i.top
              , s = i.left;
            return !(t < s || t > s + o) && !(r < a || r > a + n)
          } catch (c) {
            return !1
          }
        }
        ,
        e
    }();
    t.EventDelegator = c
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      , n = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r)
          return e;
        var i, n, o = r.call(e), a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            a.push(i.value)
        } catch (s) {
          n = {
            error: s
          }
        } finally {
          try {
            i && !i.done && (r = o["return"]) && r.call(o)
          } finally {
            if (n)
              throw n.error
          }
        }
        return a
      }
      , o = this && this.__spreadArray || function(e, t) {
        for (var r = 0, i = t.length, n = e.length; r < i; r++,
          n++)
          e[n] = t[r];
        return e
      }
      , a = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.DomManager = void 0;
    var s = r(9)
      , c = a(r(98))
      , u = r(43)
      , l = r(2)
      , d = r(30)
      , p = r(99)
      , f = r(53)
      , h = r(33)
      , g = function() {
      function e(e) {
        this.instruction = "",
          this.errorTimeout = null,
          this.showType = "popup",
          this.spriteSize = [0, 0],
          this.allElTypes = [],
          this.operationDom = document.getElementById("tcOperation"),
          this.insIcons = {},
          this.addDocumentClass = function(e) {
            var t = e.type;
            "popup" !== t && "embed" !== t && (t = "full");
            var r = "type-" + t
              , i = document.getElementsByTagName("html")[0]
              , n = r;
            e.noHeader && (n += n ? " noHeader" : "noHeader"),
            e.inDarkMode && (n += n ? " dark-mode" : "dark-mode"),
              i.className = n
          }
          ,
          this.captcha = e,
          this.languageMgr = new c["default"](s.keys,s.all),
          this.bindResize()
      }
      return e.prototype.getRate = function() {
        return 1
      }
        ,
        e.prototype.initShowType = function(e) {
          this.showType = e
        }
        ,
        e.prototype.refreshDom = function(e) {
          var t, r, a, s, c = this;
          this.destroy(),
            this.changeOperationStatus("loading"),
            this.curShowInfo = e,
            this.instruction = e.instruction || "",
            this.languageMgr.init(e.lang ? e.lang : (null === (a = this.captcha.option) || void 0 === a ? void 0 : a.global) ? "en" : "zh-cn", "embed" === this.showType);
          var l = this.getBgSize(e);
          $.isArray(l) && (this.getRate = function() {
              return ($(c.operationDom).width() || 360) / l[0]
            }
          );
          var d = [];
          this.initVerifyBtn(Boolean(null === (s = e.verify_trigger_cfg) || void 0 === s ? void 0 : s.verify_icon)),
            this.initHeader(),
            this.initInstruction(),
            this.initFooter(),
            u.get$Dom().statusFail.text(this.languageMgr.getWord("note-img-load-failed")),
            this.initAriaAttr(this.showType);
          var f = {
            captcha: this.captcha,
            operationDom: this.operationDom,
            showInfo: e,
            getRate: this.getRate,
            bgSize: l
          }
            , g = function(t) {
            var r = $.Deferred();
            if (!t.dataCheck(e))
              return "continue";
            var i = new t.el;
            i.init(f, function(e) {
              e ? r.reject(e) : r.resolve()
            }),
              d.push(r),
              m.allElTypes.push(i)
          }
            , m = this;
          try {
            for (var v = i(p.CaptchaEls), y = v.next(); !y.done; y = v.next()) {
              g(y.value)
            }
          } catch (w) {
            t = {
              error: w
            }
          } finally {
            try {
              y && !y.done && (r = v["return"]) && r.call(v)
            } finally {
              if (t)
                throw t.error
            }
          }
          $.when.apply($, o([], n(d))).then(function() {
            c.finishDomLoading("")
          }, function(e) {
            var t = "CaptchaEl init error," + e;
            c.captcha.errorHandler.send({
              errorType: h.ErrorTypes.DY_IMG_ERROR,
              reason: t
            }),
              c.finishDomLoading("fail")
          })
        }
        ,
        e.prototype.getBgSize = function(e) {
          var t = e.bg_elem_cfg;
          return null === t || void 0 === t ? void 0 : t.size_2d
        }
        ,
        e.prototype.finishDomLoading = function(e) {
          void 0 === e && (e = ""),
            this.resizeElems(),
            this.changeOperationStatus(e),
          "fail" !== e && $(".tc-fg-item").css("opacity", "1"),
          this.captcha.invisible || l.setVoiceOverFocus($("#pHeaderTitle")[0]),
            this.captcha.event.emit("initReady", "")
        }
        ,
        e.prototype.reInitStatus = function() {
          var e, t;
          try {
            for (var r = i(this.allElTypes), n = r.next(); !n.done; n = r.next()) {
              n.value.reInit()
            }
          } catch (o) {
            e = {
              error: o
            }
          } finally {
            try {
              n && !n.done && (t = r["return"]) && t.call(r)
            } finally {
              if (e)
                throw e.error
            }
          }
        }
        ,
        e.prototype.destroy = function() {
          var e, t;
          try {
            for (var r = i(this.allElTypes), n = r.next(); !n.done; n = r.next()) {
              n.value.destroy()
            }
          } catch (o) {
            e = {
              error: o
            }
          } finally {
            try {
              n && !n.done && (t = r["return"]) && t.call(r)
            } finally {
              if (e)
                throw e.error
            }
          }
          this.allElTypes = [],
            this.captcha.userEvent.clear()
        }
        ,
        e.prototype.initHeader = function() {
          var e = u.get$Dom();
          d.isIos() || e.title.removeAttr("role"),
            e.title.text(this.languageMgr.getWord("frame-verification")),
            e.txtBack.text(this.languageMgr.getWord("frame-back")),
            this.resizeHeader()
        }
        ,
        e.prototype.initInstruction = function() {
          var e = this
            , t = u.get$Dom();
          t.instruction.children(".tc-instruction-icon").remove(),
            t.instruction.removeClass("error right-to-left"),
            t.instructionText.text("" + this.instruction || "\u8bf7\u62d6\u52a8\u7269\u4f53\u5b8c\u6210\u9a8c\u8bc1");
          var r = this.curShowInfo
            , n = r.ins_elem_cfg
            , o = void 0 === n ? [] : n
            , a = r.sprite_url;
          o.length > 0 && a && this.captcha.asyncAction.action(function(t) {
            t() || f.loadImg({
              id: 0,
              src: a,
              el: document.createElement("img"),
              onError: function() {
                t()
              },
              onSuccess: function(r) {
                var n, s;
                if (!t()) {
                  var c = r.width
                    , u = r.height;
                  e.spriteSize = [c, u];
                  var l = function(t) {
                    var r = t.id
                      , i = t.size_2d
                      , n = t.sprite_pos
                      , o = $(document.createElement("div"));
                    o.addClass("tc-instruction-icon"),
                      d.setSpriteUrl({
                        el: o[0],
                        data: {
                          size_2d: i,
                          sprite_pos: n,
                          spriteSize: e.spriteSize
                        },
                        rate: e.getRate(),
                        spriteUrl: a,
                        isPureGet: !0
                      }),
                      $(".tc-title").append(o),
                      e.insIcons[r] = {
                        node: o,
                        config: t
                      },
                      setTimeout(function() {
                        $(o).css("opacity", "1")
                      }, 100)
                  };
                  try {
                    for (var p = i(o), f = p.next(); !f.done; f = p.next()) {
                      l(f.value)
                    }
                  } catch (h) {
                    n = {
                      error: h
                    }
                  } finally {
                    try {
                      f && !f.done && (s = p["return"]) && s.call(p)
                    } finally {
                      if (n)
                        throw n.error
                    }
                  }
                }
              }
            })
          }),
          this.languageMgr.rightToLeft && t.instruction.addClass("right-to-left"),
          "embed" === this.showType && t.embedStatus.removeClass("hide"),
            this.resizeInstruction()
        }
        ,
        e.prototype.initFooter = function() {
          var e = u.get$Dom();
          this.errorTimeout && clearTimeout(this.errorTimeout),
            e.normalVerifyText.text(this.languageMgr.getWord("frame-standard")),
            e.agedText.text(this.languageMgr.getWord("frame-simple")),
            e.btnVerifyText.text(this.languageMgr.getWord("frame-ok")),
          window.open || e.feedback.hide(),
            this.resizeFooter()
        }
        ,
        e.prototype.initVerifyBtn = function(e) {
          var t, r, i = u.get$Dom();
          e ? (i.btnVerify.addClass("show"),
          (null === (t = this.captcha.option) || void 0 === t ? void 0 : t.fb) && "embed" === this.showType && i.embedStatus.addClass("hide-feedback")) : (i.btnVerify.removeClass("show"),
          (null === (r = this.captcha.option) || void 0 === r ? void 0 : r.fb) && "embed" === this.showType && i.embedStatus.removeClass("hide-feedback"))
        }
        ,
        e.prototype.initAriaAttr = function(e) {
          var t = u.get$Dom();
          try {
            "popup" === e && l.addAriaModel(t.tcWrap[0]),
              t.instructionText.attr("aria-label", "" + (this.instruction || "\u62d6\u52a8\u4e0b\u65b9\u6ed1\u5757\u5b8c\u6210\u62fc\u56fe")),
              t.title.attr("aria-label", this.captcha.aged ? this.languageMgr.getWord("aria-verification-simple") : this.languageMgr.getWord("aria-verification-standard")),
              t.coverFail.attr("alt", this.languageMgr.getWord("note-img-load-failed")).attr("aria-label", this.languageMgr.getWord("note-img-load-failed")),
              t.btnBack.children("img").attr("alt", this.languageMgr.getWord("frame-back")).attr("aria-label", this.languageMgr.getWord("frame-back")),
              t.close.children("img").attr("role", "button").attr("alt", this.languageMgr.getWord("aria-close")).attr("aria-label", this.languageMgr.getWord("aria-close")),
              t.btnReload.children("img").attr("role", "button").attr("alt", this.languageMgr.getWord("aria-refresh")).attr("aria-label", this.languageMgr.getWord("aria-refresh")),
              t.feedback.children("img").attr("role", "button").attr("alt", this.languageMgr.getWord("aria-feedback")).attr("aria-label", this.languageMgr.getWord("aria-feedback")),
              t.aged.find("img").attr("role", "button").attr("aria-label", this.languageMgr.getWord("aria-simple")),
              t.normalVerify.find("img").attr("role", "button").attr("aria-label", this.languageMgr.getWord("aria-standard"))
          } catch (r) {}
        }
        ,
        e.prototype.resizeHeader = function() {
          var e = u.get$Dom();
          e.title.removeClass("small-fontsize multi-line"),
          "full" === this.showType && e.title.height() > e.fullScreenHead.height() && (e.title.addClass("small-fontsize"),
          e.title.height() > e.fullScreenHead.height() && e.title.addClass("multi-line"))
        }
        ,
        e.prototype.resizeInstruction = function() {
          var e = u.get$Dom();
          e.instruction.removeClass("middle-fontsize small-fontsize multi-line");
          var t = e.instructionWrap.height() || 0;
          if ("embed" === this.showType) {
            var r = e.instructionWrap.width() - e.embedStatus.width();
            7 === d.getIEVersion() && (r = 164),
              e.instruction.width(r),
            e.instruction.height() > t && e.instruction.addClass("multi-line")
          } else
            e.instruction.height() > t && (e.instruction.addClass("middle-fontsize"),
            e.instruction.height() > t && (e.instruction.removeClass("middle-fontsize"),
              e.instruction.addClass("small-fontsize"),
            e.instruction.height() > t && e.instruction.addClass("multi-line")));
          for (var i in this.insIcons)
            this.resizeInstructionIcon(this.insIcons[i])
        }
        ,
        e.prototype.resizeFooter = function() {
          var e = u.get$Dom();
          if ("popup" === this.showType) {
            var t = ($(window).height() || 0) - ($("#popCtWrapHeader").outerHeight(!0) || 0) - (e.instructionWrap.outerHeight(!0) || 0) - (e.operation.outerHeight(!0) || 0);
            t <= 0 && (t = 36),
              e.tcStatus.height(t)
          }
        }
        ,
        e.prototype.resizeInstructionIcon = function(e) {
          var t = this.getRate()
            , r = e.config
            , i = {
            size_2d: r.size_2d,
            sprite_pos: r.sprite_pos,
            spriteSize: this.spriteSize
          }
            , n = d.getSpriteStyle(i, t);
          e.node.css({
            width: n.width + "px",
            height: n.height + "px"
          }),
            e.node.children("img").css({
              width: n.bgWidth + "px",
              height: n.bgHeight + "px"
            })
        }
        ,
        e.prototype.changeOperationStatus = function(e) {
          var t, r;
          try {
            for (var n = i(["success", "loading", "error", "fail"]), o = n.next(); !o.done; o = n.next()) {
              var a = o.value;
              l.removeClass(this.operationDom, "show-" + a),
              a === e && l.addClass(this.operationDom, "show-" + e)
            }
          } catch (s) {
            t = {
              error: s
            }
          } finally {
            try {
              o && !o.done && (r = n["return"]) && r.call(n)
            } finally {
              if (t)
                throw t.error
            }
          }
        }
        ,
        e.prototype.bindResize = function() {
          var e = this;
          window.onresize = function() {
            e.curShowInfo && (e.resizeElems(),
              e.resizeHeader(),
              e.resizeInstruction(),
              e.resizeFooter())
          }
        }
        ,
        e.prototype.resizeElems = function() {
          var e, t;
          try {
            for (var r = i(this.allElTypes), n = r.next(); !n.done; n = r.next()) {
              n.value.resize()
            }
          } catch (o) {
            e = {
              error: o
            }
          } finally {
            try {
              n && !n.done && (t = r["return"]) && t.call(r)
            } finally {
              if (e)
                throw e.error
            }
          }
        }
        ,
        e.prototype.verifySuccess = function() {
          this.showSuccessNote(),
            this.changeOperationStatus("success")
        }
        ,
        e.prototype.verifyFail = function() {
          var e = this;
          this.showErrorNoteByWording("note-verify-failed"),
            this.shakeEls(function() {
              e.reInitStatus()
            })
        }
        ,
        e.prototype.verifyFailRefresh = function(e) {
          this.showErrorNoteByWording("note-verify-failed-max"),
            this.shakeEls(function() {
              e()
            })
        }
        ,
        e.prototype.verifyError = function(e, t, r) {
          var i = "note-verify-default";
          "12" === t ? i = "note-verify-error" : "52" === t && (i = "note-appid-region-wrong"),
            this.showCoverErrorByWording({
              wording: i,
              errorCode: t,
              sid: e
            }),
            setTimeout(function() {
              r()
            }, 1e3)
        }
        ,
        e.prototype.verifyHttpError = function(e) {
          this.showErrorNoteByWording("note-verify-timeout"),
            this.shakeEls(e)
        }
        ,
        e.prototype.showError = function() {
          this.changeOperationStatus("fail")
        }
        ,
        e.prototype.showSuccessNote = function() {
          u.get$Dom().txtSuccess.text(this.languageMgr.getWord("note-verify-success"))
        }
        ,
        e.prototype.showCoverErrorByWording = function(e) {
          var t = e.wording
            , r = e.errorCode
            , i = e.sid
            , n = u.get$Dom()
            , o = this.languageMgr.getWord(t);
          r && (o = o.replace(/\+/g, r)),
          i && (o += '<div class="tc-token">' + $("<div>").text(i).html() + "</div>"),
            n.txtError.html(o),
            this.changeOperationStatus("error")
        }
        ,
        e.prototype.showErrorNoteByWording = function(e) {
          var t = this.languageMgr.getWord(e);
          this.showErrorNote(t)
        }
        ,
        e.prototype.showErrorNote = function(e) {
          var t = this;
          this.errorTimeout && clearTimeout(this.errorTimeout);
          var r = u.get$Dom();
          r.instructionText.text(e),
            r.instruction.addClass("error"),
          "embed" === this.showType && r.embedStatus.addClass("hide"),
            this.errorTimeout = window.setTimeout(function() {
              r.instructionText.text(t.instruction),
                r.instruction.removeClass("error"),
              "embed" === t.showType && r.embedStatus.removeClass("hide")
            }, 1500)
        }
        ,
        e.prototype.shakeEls = function(e) {
          l.shakeEl(this.operationDom, e)
        }
        ,
        e.prototype.addEmbedTip = function() {
          this.addHoverDom($("#e_showFB"), "aria-feedback"),
            this.addHoverDom($("#e_reload"), "aria-refresh"),
            this.addHoverDom($(".tcaptcha-embed .aged-icon"), "frame-simple"),
            this.addHoverDom($(".tcaptcha-embed .normal-verify-icon"), "frame-standard")
        }
        ,
        e.prototype.addHoverDom = function(e, t) {
          var r = this;
          l.isTouchEventSupported() || e.on("mouseenter", function() {
            e.css("border-color", "#007AFF"),
              e.children(".status-normal").removeClass("show"),
              e.children(".status-hover").addClass("show");
            var i = document.createElement("div");
            $(i).text(r.languageMgr.getWord(t)).addClass("hover-tip").appendTo($("body")),
              e.on("mousemove", function(e) {
                $(i).css({
                  left: e.clientX - 10 + "px",
                  top: e.clientY + 20 + "px"
                })
              }),
              e.on("mouseleave", function() {
                e.css("border-color", "#999"),
                  e.children(".status-hover").removeClass("show"),
                  e.children(".status-normal").addClass("show"),
                  $(i).remove(),
                  $(i).off("mousemove mouseleave")
              })
          })
        }
        ,
        e
    }();
    t.DomManager = g
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var i = r(0)
      , n = function() {
      function e(e, t) {
        this.rightToLeft = !1,
          this.currentLanguage = "en",
          this.keys = e,
          this.content = t,
          this.curLanguagePack = {}
      }
      return e.prototype.init = function(e, t) {
        for (var r = i.langTransform(e), n = this.content[r], o = 0; o < this.keys.length; o++)
          this.curLanguagePack[this.keys[o]] = n[o];
        this.rightToLeft = "ar" === r || "he" === r || "iw" === r,
          this.currentLanguage = r
      }
        ,
        e.prototype.getWord = function(e) {
          var t = this.curLanguagePack[e];
          if (!t)
            for (var r = 0; r < this.keys.length; r++)
              if (this.keys[r] === e) {
                t = this.content.en[r];
                break
              }
          return i.isArray(t) ? t[Math.floor(Math.random() * t.length)] : t
        }
        ,
        e
    }();
    t["default"] = n
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.CaptchaEls = void 0;
    var i = r(100)
      , n = r(102)
      , o = r(103);
    t.CaptchaEls = [{
      dataCheck: function(e) {
        return !!e.bg_elem_cfg
      },
      el: n.BgEl
    }, {
      dataCheck: function(e) {
        return !!e.fg_elem_list
      },
      el: i.DragEl
    }, {
      dataCheck: function(e) {
        var t;
        return !!(null === (t = e.bg_elem_cfg) || void 0 === t ? void 0 : t.click_cfg)
      },
      el: o.ClickEl
    }]
  }
  , function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
          return (i = Object.setPrototypeOf || {
                __proto__: []
              }instanceof Array && function(e, t) {
                e.__proto__ = t
              }
              || function(e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              }
          )(e, t)
        }
          ,
          function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
              this.constructor = e
            }
            i(e, t),
              e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                new r)
          }
      ), o = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r)
          return e;
        var i, n, o = r.call(e), a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            a.push(i.value)
        } catch (s) {
          n = {
            error: s
          }
        } finally {
          try {
            i && !i.done && (r = o["return"]) && r.call(o)
          } finally {
            if (n)
              throw n.error
          }
        }
        return a
      }
      , a = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      , s = this && this.__spreadArray || function(e, t) {
        for (var r = 0, i = t.length, n = e.length; r < i; r++,
          n++)
          e[n] = t[r];
        return e
      }
      , c = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          "default": e
        }
      }
    ;
    t.__esModule = !0,
      t.DragEl = void 0;
    var u = r(2)
      , l = r(62)
      , d = r(101)
      , p = r(33)
      , f = c(r(26))
      , h = function() {
      function e() {
        this.els = {},
          this.getRate = function() {
            return 1
          }
      }
      return e.prototype.init = function(e, t) {
        var r, i, n = e.showInfo, c = e.captcha, u = e.operationDom, l = e.bgSize, d = e.getRate;
        if (this.getRate = d,
          n) {
          var p = n.fg_elem_list
            , h = n.fg_binding_list
            , m = n.instruction
            , v = d()
            , y = [];
          if (p && 0 !== p.length) {
            for (var w = o(l, 2), b = w[0], _ = w[1], E = function(e) {
              var t = $.Deferred()
                , r = new g(c,{
                wrapper: u,
                operationSize: [b, _],
                rate: v,
                fgItemData: p[e],
                spriteUrl: n.sprite_url,
                index: e,
                colorScheme: n.color_scheme ? n.color_scheme : f["default"].defaultColorScheme
              });
              S.els["" + p[e].id] = r,
                r.init(function(i) {
                  if (i)
                    t.reject(i);
                  else {
                    try {
                      var n = p[e].describe_text ? p[e].describe_text : m;
                      $(r.el).attr("aria-label", n).attr("alt", n)
                    } catch (o) {}
                    t.resolve()
                  }
                }),
                y.push(t)
            }, S = this, k = 0; k < p.length; k++)
              E(k);
            if (h && h.length > 0)
              try {
                for (var T = a(h), R = T.next(); !R.done; R = T.next()) {
                  var C = R.value
                    , x = this.els["" + C.master]
                    , D = this.els["" + C.slave];
                  x && D && x.bindSlave(D)
                }
              } catch (A) {
                r = {
                  error: A
                }
              } finally {
                try {
                  R && !R.done && (i = T["return"]) && i.call(T)
                } finally {
                  if (r)
                    throw r.error
                }
              }
            $.when.apply($, s([], o(y))).then(function() {
              t()
            }, function(e) {
              t(e)
            })
          } else
            t()
        }
      }
        ,
        e.prototype.reInit = function() {
          for (var e in this.els) {
            if (Object.prototype.hasOwnProperty.call(this.els, e))
              this.els[e].reInit()
          }
        }
        ,
        e.prototype.resize = function() {
          for (var e in this.els)
            Object.prototype.hasOwnProperty.call(this.els, e) && this.els[e].resize(this.getRate())
        }
        ,
        e.prototype.destroy = function() {
          for (var e in this.els)
            Object.prototype.hasOwnProperty.call(this.els, e) && this.els[e].destroy();
          this.els = {}
        }
        ,
        e
    }();
    t.DragEl = h;
    var g = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.slaves = [],
          t.startPos = null,
          t.acting = !1,
          t.movePoints = [],
          t.boundEventStartFn = null,
          t.boundEventMoveFn = null,
          t.boundEventEndFn = null,
          t
      }
      return n(t, e),
        t.prototype.init = function(t) {
          var r = this;
          e.prototype.init.call(this, function(e) {
            e ? t(e) : (r.option.fgItemData.move_cfg && (r.addDragCss(),
              r.initStatusWithRate(r.option.rate),
              r.bindEvt()),
              t(null))
          })
        }
        ,
        t.prototype.addDragCss = function() {
          u.setCss(this.el, {
            cursor: "pointer"
          })
        }
        ,
        t.prototype.initStatusWithRate = function(e) {
          var t = this.option
            , r = t.fgItemData
            , i = t.operationSize
            , n = r.init_pos[0] * e
            , a = r.init_pos[1] * e;
          this.initCSSPosition = [n, a],
            this.curCSSPositoon = [n, a],
            this.startCSSPosition = [n, a];
          var s = o(r.size_2d, 2)
            , c = s[0]
            , u = s[1]
            , l = [i[0] - c, i[1] - u]
            , d = [l[0] * e, l[1] * e];
          this.boundary = d
        }
        ,
        t.prototype.bindEvt = function() {
          var e = this;
          this.boundEventStartFn = function(t) {
            var r;
            null === (r = t.preventDefault) || void 0 === r || r.call(t),
              e.onEventStart(t)
          }
            ,
            this.boundEventMoveFn = function(t) {
              var r;
              null === (r = t.preventDefault) || void 0 === r || r.call(t),
                e.onEventMove(t)
            }
            ,
            this.boundEventEndFn = function(t) {
              e.onEventEnd(t)
            }
            ,
            this.captcha.userEvent.on(this.el, "mousedown touchstart", this.boundEventStartFn),
            this.captcha.userEvent.on(this.option.wrapper, "mousemove touchmove", this.boundEventMoveFn),
            this.captcha.userEvent.on(this.option.wrapper, "mouseup touchend", this.boundEventEndFn)
        }
        ,
        t.prototype.onEventStart = function(e) {
          var t = l.getPosition(e);
          t && void 0 !== (null === t || void 0 === t ? void 0 : t.x) && void 0 !== (null === t || void 0 === t ? void 0 : t.y) ? this.startPos || this.acting || (this.startPos = [t.x, t.y],
            this.startCSSPosition = this.curCSSPositoon) : this.captcha.errorHandler.send({
            errorType: p.ErrorTypes.DY_JS_ERROR,
            reason: "errorMsg:unable to get touch/drag start pos;errorPos:drag-el/DragItem/onEventStart"
          })
        }
        ,
        t.prototype.onEventMove = function(e) {
          if (this.startPos) {
            var t = l.getPosition(e);
            if (t && void 0 !== (null === t || void 0 === t ? void 0 : t.x) && void 0 !== (null === t || void 0 === t ? void 0 : t.y)) {
              var r = o(this.startPos, 2)
                , i = r[0]
                , n = r[1]
                , a = t.x - i
                , s = t.y - n;
              this.onMove([a, s])
            }
          }
        }
        ,
        t.prototype.onEventEnd = function(e) {
          var t, r;
          if (this.startPos) {
            this.startPos = null,
              this.endAct();
            try {
              for (var i = a(this.slaves), n = i.next(); !n.done; n = i.next()) {
                n.value.endAct()
              }
            } catch (o) {
              t = {
                error: o
              }
            } finally {
              try {
                n && !n.done && (r = i["return"]) && r.call(i)
              } finally {
                if (t)
                  throw t.error
              }
            }
          }
        }
        ,
        t.prototype.reInit = function() {
          if (this.initCSSPosition && this.curCSSPositoon) {
            this.curCSSPositoon = this.initCSSPosition,
              this.startCSSPosition = this.initCSSPosition;
            var e = o(this.curCSSPositoon, 2)
              , t = e[0]
              , r = e[1];
            u.setCss(this.el, {
              left: t + "px",
              top: r + "px"
            })
          }
        }
        ,
        t.prototype.resize = function(t) {
          e.prototype.resize.call(this, t),
            this.initStatusWithRate(t)
        }
        ,
        t.prototype.onMove = function(e) {
          var t, r, i, n, c = this.checkBoundary(s([], o(e)));
          this.act(c);
          try {
            for (var u = a(this.slaves), l = u.next(); !l.done; l = u.next())
              for (var d = l.value.checkBoundary(c), p = 0; p < d.length; p++)
                "undefined" == typeof d[p] && (c[p] = undefined)
          } catch (g) {
            t = {
              error: g
            }
          } finally {
            try {
              l && !l.done && (r = u["return"]) && r.call(u)
            } finally {
              if (t)
                throw t.error
            }
          }
          try {
            for (var f = a(this.slaves), h = f.next(); !h.done; h = f.next()) {
              h.value.act(c)
            }
          } catch (m) {
            i = {
              error: m
            }
          } finally {
            try {
              h && !h.done && (n = f["return"]) && n.call(f)
            } finally {
              if (i)
                throw i.error
            }
          }
        }
        ,
        t.prototype.getTargetPos = function(e) {
          var t, r = o(e, 2), i = r[0], n = r[1], a = o(this.startCSSPosition, 2), s = a[0], c = a[1], u = null === (t = this.option.fgItemData.move_cfg) || void 0 === t ? void 0 : t.move_factor, l = 1, d = 1;
          return u && (l = u[0],
            d = u[1]),
            [void 0 !== i ? s + i * l : this.curCSSPositoon[0], void 0 !== n ? c + n * d : this.curCSSPositoon[1]]
        }
        ,
        t.prototype.act = function(e) {
          this.acting = !0;
          var t = this.getTargetPos(e)
            , r = o(t, 2)
            , i = r[0]
            , n = r[1];
          this.curCSSPositoon = [i, n],
            u.setCss(this.el, {
              top: n + "px",
              left: i + "px"
            })
        }
        ,
        t.prototype.endAct = function() {
          this.acting = !1,
            this.addData(),
            this.startCSSPosition = this.curCSSPositoon
        }
        ,
        t.prototype.addData = function() {
          var e, t, r, i = null === (r = this.option.fgItemData.move_cfg) || void 0 === r ? void 0 : r.data_type;
          if (i)
            try {
              for (var n = a(i), s = n.next(); !s.done; s = n.next()) {
                var c = s.value
                  , u = o(this.curCSSPositoon, 2)
                  , l = u[0]
                  , d = u[1]
                  , p = "";
                if ("DynAnswerType_POS" === c && (p = Math.floor(l / this.rate) + "," + Math.floor(d / this.rate)),
                "DynAnswerType_CENTER_POS" === c) {
                  var f = $(this.el)
                    , h = f.width()
                    , g = f.height();
                  p = Math.floor((l + h / 2) / this.rate) + "," + Math.floor((d + g / 2) / this.rate)
                }
                this.captcha.event.emit("setData", {
                  namespace: "dragEl",
                  data: [{
                    elem_id: this.id,
                    type: c,
                    data: p
                  }]
                })
              }
            } catch (m) {
              e = {
                error: m
              }
            } finally {
              try {
                s && !s.done && (t = n["return"]) && t.call(n)
              } finally {
                if (e)
                  throw e.error
              }
            }
        }
        ,
        t.prototype.bindSlave = function(e) {
          this.slaves.push(e)
        }
        ,
        t.prototype.destroy = function() {
          this.boundEventStartFn && this.captcha.userEvent.off(this.el, "mousedown touchstart", this.boundEventStartFn),
          this.boundEventMoveFn && this.captcha.userEvent.off(this.option.wrapper, "mousemove touchmove", this.boundEventMoveFn),
          this.boundEventEndFn && this.captcha.userEvent.off(this.option.wrapper, "mouseup touchend", this.boundEventEndFn);
          try {
            this.el && this.option.wrapper.removeChild(this.el)
          } catch (e) {}
        }
        ,
        t.prototype.checkBoundary = function(e) {
          var t = o(this.getTargetPos(e), 2)
            , r = t[0]
            , i = t[1]
            , n = o(this.boundary, 2)
            , a = n[0]
            , c = n[1]
            , u = s([], o(e));
          return (r < 0 || r > a) && (u[0] = undefined),
          (i < 0 || i > c) && (u[1] = undefined),
            u
        }
        ,
        t
    }(d.BaseEl)
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var n in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }
        ).apply(this, arguments)
      }
      , n = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r)
          return e;
        var i, n, o = r.call(e), a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            a.push(i.value)
        } catch (s) {
          n = {
            error: s
          }
        } finally {
          try {
            i && !i.done && (r = o["return"]) && r.call(o)
          } finally {
            if (n)
              throw n.error
          }
        }
        return a
      }
    ;
    t.__esModule = !0,
      t.BaseEl = void 0;
    var o = r(53)
      , a = r(2)
      , s = r(30)
      , c = function() {
      function e(e, t) {
        this.el = null,
          this.spriteSize = [0, 0],
          this.imgSize = [0, 0],
          this.rate = 1,
          this.index = 1,
          this.captcha = e,
          this.option = t,
          this.id = t.fgItemData.id,
          this.rate = t.rate,
        t.index && (this.index = t.index)
      }
      return e.prototype.init = function(e) {
        this.createEl(e)
      }
        ,
        e.prototype.createEl = function(e) {
          var t = this
            , r = this.option
            , n = r.wrapper
            , c = r.fgItemData
            , u = r.rate
            , l = r.spriteUrl
            , d = c.type
            , p = c.size_2d
            , f = c.init_pos
            , h = c.sprite_pos
            , g = c.img_url;
          if ("slider" === d)
            this.captcha.asyncAction.action(function(r) {
              if (!r()) {
                var i = t.option.colorScheme
                  , o = document.createElement("div");
                $(o).addClass("tc-fg-item"),
                  a.setCss(o, {
                    left: f[0] * u + "px",
                    top: f[1] * u + "px",
                    zIndex: String(t.index)
                  });
                var c = document.createElement("img");
                if (c.alt = "slider",
                  c.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcAgMAAABuexVFAAAACVBMVEUAAADCwsL9/f1P0DqbAAAAAXRSTlMAQObYZgAAAB1JREFUGNNjCGVgYGANABKhyMwoEHMBkIgaZWIwAdyJJQnaJRg5AAAAAElFTkSuQmCC",
                  s.isLowIE()) {
                  $(o).addClass("tc-slider-ie"),
                    c.className = "tc-slider-bg unselectable";
                  var l = document.createElement("div");
                  l.className = "tc-iconfont-btn",
                    l.innerHTML = "&#xe900;",
                    a.setCss(l, {
                      color: i
                    }),
                    o.appendChild(l)
                } else {
                  $(o).addClass("tc-slider-normal"),
                    a.setCss(o, {
                      width: p[0] * u + "px",
                      height: p[1] * u + "px",
                      lineHeight: p[1] * u + "px",
                      backgroundColor: i,
                      boxShadow: "0 0 " + 10 * u + "px " + u + "px rgb(" + s.hexToRgb(i) + " / 0.5)"
                    }),
                    c.className = "tc-slider-bg unselectable",
                    a.setCss(c, {
                      width: p[0] / 3.5 * u + "px",
                      height: p[0] / 3.5 * u / 10 * 7 + "px"
                    });
                  var d = document.createElement("i");
                  d.className = "tc-blank-text",
                    d.innerText = "&nbsp;",
                    o.appendChild(d)
                }
                o.appendChild(c),
                  n.appendChild(o),
                  t.el = o,
                  e(null)
              }
            });
          else if (l && h)
            this.captcha.asyncAction.action(function(r) {
              o.loadImg({
                id: t.id,
                src: l,
                onError: function() {
                  r() || e("reason:load img " + l + " fail,pos:base-el/BaseEl/createEl/this.captcha.asyncAction.action/loadImg")
                },
                onSuccess: function(o) {
                  if (!r()) {
                    var a = [o.width, o.height];
                    t.spriteSize = a;
                    var d = s.getSpriteEl({
                      data: i(i({
                        spriteSize: a
                      }, c), {
                        sprite_pos: h
                      }),
                      rate: u,
                      spriteUrl: l,
                      zIndex: t.index
                    });
                    $(d).addClass("tc-fg-item"),
                      t.el = d,
                      n.appendChild(d),
                      e(null)
                  }
                }
              })
            });
          else if (g && f) {
            var m = document.createElement("img");
            this.el = m,
              this.captcha.asyncAction.action(function(r) {
                o.loadImg({
                  id: t.id,
                  src: g + "",
                  el: m,
                  onError: function() {
                    r() || e("reason:load img " + g + " fail,pos:base-el/BaseEl/createEl/this.captcha.asyncAction.action/loadImg")
                  },
                  onSuccess: function(i) {
                    if (!r()) {
                      var o = i.width
                        , s = i.height;
                      t.imgSize = [o, s],
                        a.setCss(m, {
                          position: "absolute",
                          width: o * u + "px",
                          height: s * u + "px",
                          left: f[0] * u + "px",
                          top: f[1] * u + "px",
                          zIndex: String(t.index)
                        }),
                        $(m).addClass("tc-fg-item"),
                        n.appendChild(m),
                        e(null)
                    }
                  }
                })
              })
          } else
            e("\u540e\u53f0\u53c2\u6570\u9519\u8bef")
        }
        ,
        e.prototype.resize = function(e) {
          this.rate = e,
            "slider" === this.option.fgItemData.type ? this.setSliderStyle(e) : (this.setElBgStyle(e),
              this.setImgStyle(e))
        }
        ,
        e.prototype.setImgStyle = function(e) {
          var t = this.option.fgItemData
            , r = t.img_url
            , i = t.init_pos;
          if (r && i && this.el) {
            var o = n(this.imgSize, 2)
              , s = o[0]
              , c = o[1];
            a.setCss(this.el, {
              width: s * e + "px",
              height: c * e + "px",
              left: i[0] * e + "px",
              top: i[1] * e + "px"
            })
          }
        }
        ,
        e.prototype.setElBgStyle = function(e) {
          var t = this.option
            , r = t.fgItemData
            , n = t.spriteUrl
            , o = r.sprite_pos;
          n && o && s.setSpriteUrl({
            el: this.el,
            data: i(i({
              spriteSize: this.spriteSize
            }, r), {
              sprite_pos: o
            }),
            rate: e,
            spriteUrl: n
          })
        }
        ,
        e.prototype.setSliderStyle = function(e) {
          var t = this.option.fgItemData
            , r = t.type
            , i = t.size_2d
            , n = t.init_pos;
          if ("slider" === r && this.el && (a.setCss(this.el, {
            left: n[0] * e + "px",
            top: n[1] * e + "px"
          }),
            !s.isLowIE())) {
            var o = this.option.colorScheme;
            a.setCss(this.el, {
              width: i[0] * e + "px",
              height: i[1] * e + "px",
              lineHeight: i[1] * e + "px",
              boxShadow: "0 0 " + 10 * e + "px " + e + "px rgb(" + s.hexToRgb(o) + " / 0.5)"
            }),
              a.setCss($(this.el).children("img")[0], {
                width: i[0] / 3.5 * e + "px",
                height: i[0] / 3.5 * e / 10 * 7 + "px"
              })
          }
        }
        ,
        e
    }();
    t.BaseEl = c
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var n in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }
        ).apply(this, arguments)
      }
    ;
    t.__esModule = !0,
      t.BgEl = void 0;
    var n = r(53)
      , o = r(43)
      , a = r(30)
      , s = r(2)
      , c = function() {
      function e() {
        this.spriteSize = [0, 0],
          this.getRate = function() {
            return 1
          }
      }
      return e.prototype.init = function(e, t) {
        var r = e.showInfo
          , i = e.getRate
          , n = e.captcha;
        this.option = {
          rate: i(),
          bgConfig: r.bg_elem_cfg,
          spriteUrl: r.sprite_url
        },
          this.captcha = n,
          this.getRate = i,
          this.loadBgImg(t)
      }
        ,
        e.prototype.loadBgImg = function(e) {
          var t = this
            , r = this.option
            , s = r.bgConfig
            , c = r.rate
            , u = r.spriteUrl
            , l = s.sprite_pos
            , d = s.img_url
            , p = s.size_2d
            , f = s.describe_text
            , h = o.get$Dom()
            , g = h.slideBg;
          h.operation.removeClass("opera-border"),
            this.captcha.asyncAction.action(function(r) {
              d ? n.loadImg({
                src: d,
                onError: function() {
                  r() || e("reason:load img " + d + " fail;pos:bg-el/BgEl/loadBgImg/this.captcha.asyncAction.action/loadImg")
                },
                onSuccess: function() {
                  r() || (a.setImageUrl(g[0], p, d, c),
                  f && $(g).attr("aria-label", f).attr("alt", f),
                    setTimeout(function() {
                      e(),
                        g.css("opacity", "1")
                    }, 100))
                }
              }) : u && l ? n.loadImg({
                id: 0,
                src: u,
                el: document.createElement("img"),
                onError: function() {
                  r() || e("reason:load img " + u + " fail;pos:bg-el/BgEl/loadBgImg/this.captcha.asyncAction.action/loadImg")
                },
                onSuccess: function(n) {
                  if (!r()) {
                    var o = n.width
                      , d = n.height;
                    t.spriteSize = [o, d],
                      a.setSpriteUrl({
                        el: g[0],
                        data: i(i({}, s), {
                          sprite_pos: l,
                          spriteSize: t.spriteSize
                        }),
                        rate: c,
                        spriteUrl: u
                      }),
                      g.css("opacity", "0"),
                      setTimeout(function() {
                        e(),
                          g.css("opacity", "1")
                      }, 100)
                  }
                }
              }) : (h.operation.addClass("opera-border"),
                e())
            })
        }
        ,
        e.prototype.getBgEl = function() {
          return o.get$Dom().slideBg[0]
        }
        ,
        e.prototype.reInit = function() {}
        ,
        e.prototype.resize = function() {
          var e = this.getRate()
            , t = this.option
            , r = t.bgConfig
            , n = t.spriteUrl
            , o = r.sprite_pos
            , s = r.img_url
            , c = r.size_2d;
          n && o && a.setSpriteUrl({
            el: this.getBgEl(),
            data: i(i({}, r), {
              spriteSize: this.spriteSize,
              sprite_pos: o
            }),
            rate: e,
            spriteUrl: n
          }),
          s && a.setImageUrl(this.getBgEl(), c, s, e)
        }
        ,
        e.prototype.destroy = function() {
          var e = this.getBgEl();
          s.supportsCSS("backgroundSize", "10px 10px") ? (s.setCss(e, {
            backgroundImage: ""
          }),
            $(e).css("opacity", "0")) : $(e).children("img").remove()
        }
        ,
        e
    }();
    t.BgEl = c
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , r = t && e[t]
          , i = 0;
        if (r)
          return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function() {
              return e && i >= e.length && (e = void 0),
                {
                  value: e && e[i++],
                  done: !e
                }
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
    ;
    t.__esModule = !0,
      t.ClickEl = void 0;
    var n = r(2)
      , o = r(43)
      , a = function() {
      function e() {
        this.marks = [],
          this.markClassName = "tc-click-mark",
          this.markSize = 24,
          this.standardWidth = 360,
          this.getRate = function() {
            return 1
          }
      }
      return e.prototype.init = function(e, t) {
        var r = this;
        try {
          this.clickCfg = e.showInfo.bg_elem_cfg.click_cfg,
            this.captcha = e.captcha,
            this.bgSize = e.bgSize,
            this.targetNode = $(e.operationDom),
            this.targetNode.addClass("pointer"),
            this.getRate = function() {
              return Number(r.targetNode.css("width").slice(0, -2)) / r.standardWidth
            }
            ,
            this.captcha.userEvent.on("click", function(e) {
              var t, n, a = e.target, s = r.getMarkIndex(a);
              if (-1 !== s) {
                try {
                  for (var c = i(r.marks.splice(s, r.marks.length - s)), u = c.next(); !u.done; u = c.next()) {
                    var l = u.value;
                    $(l).remove()
                  }
                } catch (p) {
                  t = {
                    error: p
                  }
                } finally {
                  try {
                    u && !u.done && (n = c["return"]) && n.call(c)
                  } finally {
                    if (t)
                      throw t.error
                  }
                }
                r.addData()
              } else if (a === o.get$Dom().slideBg[0] || a.parentNode === o.get$Dom().slideBg[0]) {
                var d = void 0;
                "inc_number" === r.clickCfg.mark_style ? d = String(r.marks.length + 1) : "icon" === r.clickCfg.mark_style || (d = undefined),
                  r.addNewMark(d, e.offsetX, e.offsetY),
                  r.addData()
              }
            }),
            t()
        } catch (n) {
          t("reason:" + n.message + ";pos:click-el/ClickEl/init")
        }
      }
        ,
        e.prototype.getMarkIndex = function(e) {
          for (var t = e; t !== this.targetNode[0]; ) {
            var r = $.inArray(t, this.marks);
            if (-1 !== r)
              return r;
            t = t.parentNode
          }
          return -1
        }
        ,
        e.prototype.addNewMark = function(e, t, r) {
          var i, o, a = $("<div class=" + this.markClassName + "></div>"), s = this.getRate(), c = this.markSize * s;
          if (n.setCss(a[0], {
            width: " " + c + "px",
            height: " " + c + "px",
            border: c / 10 + "px solid #fff",
            top: (r - c / 2) / Number(null === (i = this.targetNode.css("height")) || void 0 === i ? void 0 : i.slice(0, -2)) * 100 + "%",
            left: (t - c / 2) / Number(null === (o = this.targetNode.css("width")) || void 0 === o ? void 0 : o.slice(0, -2)) * 100 + "%"
          }),
          "string" == typeof e) {
            var u = $("<div class='" + this.markClassName + "-number'>" + e + "</div>");
            u.attr("unselectable", "on"),
              n.setCss(u[0], {
                fontSize: c / 1.5 + "px",
                lineHeight: c + "px"
              }),
              a.append(u)
          }
          this.targetNode.append(a),
            this.marks.push(a[0])
        }
        ,
        e.prototype.addData = function() {
          var e, t, r = this.clickCfg.data_type;
          if (r)
            try {
              for (var n = i(r), o = n.next(); !o.done; o = n.next()) {
                if ("DynAnswerType_POS" === o.value) {
                  for (var a = [], s = this.markSize, c = 0; c < this.marks.length; c++) {
                    var u = this.marks[c];
                    a.push({
                      elem_id: c + 1,
                      type: "DynAnswerType_POS",
                      data: (this.bgSize[0] * (Number(u.style.left.slice(0, -1)) / 100) + s / 2).toFixed(0) + "," + (this.bgSize[1] * (Number(u.style.top.slice(0, -1)) / 100) + s / 2).toFixed(0)
                    })
                  }
                  this.captcha.event.emit("setData", {
                    namespace: "clickEl",
                    data: a
                  })
                }
              }
            } catch (l) {
              e = {
                error: l
              }
            } finally {
              try {
                o && !o.done && (t = n["return"]) && t.call(n)
              } finally {
                if (e)
                  throw e.error
              }
            }
        }
        ,
        e.prototype.reInit = function() {
          var e, t;
          try {
            for (var r = i(this.marks), n = r.next(); !n.done; n = r.next()) {
              var o = n.value;
              $(o).remove()
            }
          } catch (a) {
            e = {
              error: a
            }
          } finally {
            try {
              n && !n.done && (t = r["return"]) && t.call(r)
            } finally {
              if (e)
                throw e.error
            }
          }
          this.marks = []
        }
        ,
        e.prototype.resize = function() {
          var e, t, r = this.markSize * (0,
            this.getRate)();
          try {
            for (var o = i(this.marks), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              n.setCss(s, {
                width: " " + r + "px",
                height: " " + r + "px",
                border: r / 10 + "px solid #fff"
              }),
                n.setCss($(s).children("." + this.markClassName + "-number")[0], {
                  fontSize: " " + r / 1.5 + "px",
                  lineHeight: " " + r + "px"
                })
            }
          } catch (c) {
            e = {
              error: c
            }
          } finally {
            try {
              a && !a.done && (t = o["return"]) && t.call(o)
            } finally {
              if (e)
                throw e.error
            }
          }
        }
        ,
        e.prototype.destroy = function() {
          var e, t;
          try {
            for (var r = i(this.marks), n = r.next(); !n.done; n = r.next()) {
              var o = n.value;
              $(o).remove()
            }
          } catch (a) {
            e = {
              error: a
            }
          } finally {
            try {
              n && !n.done && (t = r["return"]) && t.call(r)
            } finally {
              if (e)
                throw e.error
            }
          }
          this.marks = [],
            this.targetNode.removeClass("pointer")
        }
        ,
        e
    }();
    t.ClickEl = a
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.DataManager = void 0;
    var i = function() {
      function e(e) {
        this.userData = {},
          this.captcha = e
      }
      return e.prototype.initData = function() {
        this.userData = {}
      }
        ,
        e.prototype.refreshData = function() {}
        ,
        e.prototype.setData = function(e, t) {
          this.userData[e] = t
        }
        ,
        e.prototype.getData = function() {
          var e = [];
          for (var t in this.userData)
            if (Object.prototype.hasOwnProperty.call(this.userData, t)) {
              var r = this.userData[t];
              e = e.concat(r)
            }
          return e
        }
        ,
        e
    }();
    t.DataManager = i
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var i = r(61)
      , n = window.navigator.userAgent
      , o = function() {
      var e = {
        info: "unknown",
        version: "0"
      };
      try {
        if (/micromessenger/i.test(n))
          e.info = "micromessenger",
          (t = n.match(/micromessenger\/([\d.]+)/i)) && (e.version = t[1]);
        else if (/mqqbrowser/i.test(n)) {
          e.info = "qqbroswer",
          (t = n.match(/mqqbrowser\/([\d.]+)/i)) && (e.version = t[1])
        } else if (/ucbrowser/i.test(n)) {
          e.info = "UCbrowser",
          (t = n.match(/ucbrowser\/([\d.]+)/i)) && (e.version = t[1])
        } else if (/ucweb/i.test(n)) {
          e.info = "UCWeb",
          (t = n.match(/ucweb\/([\d.]+)/i)) && (e.version = t[1])
        } else if (/MiuiBrowser/i.test(n)) {
          e.info = "MiuiBrowser",
          (t = n.match(/miuibrowser\/([\d.]+)/i)) && (e.version = t[1])
        } else if (/hs-t929_td/i.test(n)) {
          e.info = "HS-T929_TD",
          (t = n.match(/hs-t929_td\/([\d.]+)/i)) && (e.version = t[1])
        } else if (/k-touch_tou_ch_2/i.test(n)) {
          e.info = "k-touch_tou_ch_2",
          (t = n.match(/k-touch_tou_ch_2\/([\s]+)/i)) && (e.version = t[1])
        } else if (/chrome/i.test(n)) {
          e.info = "chrome",
          (t = n.match(/chrome\/([\d.]+)/i)) && (e.version = t[1])
        } else if (/safari/i.test(n) && /iphone/i.test(n)) {
          var t;
          e.info = "safari",
          (t = n.match(/safari\/([\d.]+)/i)) && (e.version = t[1])
        } else
          e.info = "unknown",
            e.version = "0"
      } catch (r) {}
      return e
    };
    t["default"] = function(e) {
      return {
        clientInfo: o().info,
        clientVersion: o().version,
        os: function() {
          var e = "";
          try {
            if (/android/i.test(n))
              (t = n.match(/android\s+([^\s]*)/i)) && (e = "Android " + t[1]);
            else if (/iphone/i.test(n)) {
              var t;
              (t = n.match(/iphone\s+os\s+([^\s]*)/i)) && (e = "IOS " + t[1].replace("_", "."))
            }
          } catch (r) {}
          return e
        }(),
        osVersion: function() {
          try {
            if (/android/i.test(n)) {
              if (e = n.match(/([^;]+)\s+Build/i))
                return e[1]
            } else if (/iphone/i.test(n)) {
              var e;
              if (e = n.match(/([^(]*);/))
                return e[1]
            }
          } catch (t) {}
          return ""
        }(),
        netType: e.aid,
        customInfo: "custominfo:clientIP:" + e.uip + ",sid:" + e.sid,
        "d-wx-push": "1",
        imei: i.getToken()
      }
    }
  }
  , function(e, t, r) {
    "use strict";
    t.__esModule = !0,
      t.initAegis = void 0;
    var i = !1;
    t.initAegis = function(e) {
      if (window.Aegis)
        try {
          if (i)
            return;
          i = !0,
            window.aegis = new window.Aegis({
              id: e.global ? "aZ9jDfDQywl8EjvX22" : "qVYG7uLD7PVEk4XYOe",
              hostUrl: e.global ? "https://rumt-sg.com" : "https://aegis.qq.com",
              whiteListUrl: "",
              repeat: 2,
              reportApiSpeed: !0,
              reportAssetSpeed: !0,
              pagePerformance: !1,
              onError: !1,
              webVitals: !1,
              random: "2053860784" === e.aid || "2052210005" === e.aid ? 1 : e.global ? .5 : .01,
              ext1: e.aid,
              ext2: e.sid,
              ext3: e.isPreload ? "with preload" : "without preload"
            })
        } catch (t) {}
    }
  }
  , function(e, t, r) {
    "use strict";
    var i = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r)
          return e;
        var i, n, o = r.call(e), a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            a.push(i.value)
        } catch (s) {
          n = {
            error: s
          }
        } finally {
          try {
            i && !i.done && (r = o["return"]) && r.call(o)
          } finally {
            if (n)
              throw n.error
          }
        }
        return a
      }
      , n = this && this.__spreadArray || function(e, t) {
        for (var r = 0, i = t.length, n = e.length; r < i; r++,
          n++)
          e[n] = t[r];
        return e
      }
    ;
    t.__esModule = !0,
      t.Monitor = void 0;
    var o = r(5)
      , a = r(6)
      , s = function() {
      function e() {
        this.baseURL = window.TCaptchaApiDomain + "/cap_monitor",
          this.debouncedReport = o.debounce(this.report, 1e3),
          this.samplingRate = 1,
          this.data = {
            isPreload: !1,
            isVisible: !1,
            speedList: []
          },
          this.randomNum = Math.random()
      }
      return e.prototype.init = function(e, t) {
        var r = e.appid
          , i = e.sid
          , n = e.isPreload
          , a = e.isVisible;
        this.samplingRate = "2053860784" === r || "2052210005" === r ? 1 : t;
        var s = o.getDeviceInfo()
          , c = s.platform
          , u = s.client;
        this.data.isPreload = n,
          this.data.isVisible = a,
          this.baseURL += "?appid=" + r + "&sid=" + i + "&log_mode=monitor&client=" + u + "&platform=" + c
      }
        ,
        e.prototype.send = function(e) {
          a.isArray(e) ? this.data.speedList = n(n([], i(this.data.speedList)), i(e)) : this.data.speedList.push(e),
            this.debouncedReport()
        }
        ,
        e.prototype.report = function() {
          if (!(this.randomNum >= this.samplingRate)) {
            var e = this.data
              , t = e.isVisible
              , r = e.isPreload
              , i = e.speedList
              , n = {
              is_visible: t ? 1 : 0,
              is_preload: r ? 1 : 0,
              speed_list: i
            };
            (new Image).src = this.baseURL + "&data=" + JSON.stringify(n),
              this.data.speedList = []
          }
        }
        ,
        e
    }();
    t.Monitor = s
  }
]);

var _t = new _cc('94').RequestManager.prototype
// console.log(_cc)
var e = {
  "elem_id": 1,
  "type": "DynAnswerType_POS",
  "data": "434,91"
}
console.log(_t.verify(e))
