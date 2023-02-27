var window = {
  navigator: {
    appName: 'Netscape',
  },
  document: {
    querySelector: function(val) {
      console.log(val)
    },
  },
  location: {
    href: '',
  },
};
var navigator = window['navigator'];
var _cc;
const document = window.document;
const location = window.location;
(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }

  var n = {};

  (t.m = e),
  (t.c = n),
  (t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
  }),
  (t.n = function (e) {
    var n =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return t.d(n, 'a', n), n;
  }),
  (t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (t.p = ''),
  t((t.s = 0));
  _cc = n;
})([
  function (e, t, n) {
    'use strict';

    function r() {}

    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
        n = document.getElementsByTagName('script')[0],
        o = document.createElement('script');
      (o.src = e), (o.async = !0), n.parentNode.insertBefore(o, n), (o.onload = t);
    }

    function i(e, t) {
      if (null == e) throw new TypeError('Cannot convert undefined or null to object');
      for (var n = Object(e), r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        if (null != o) for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
      }
      return n;
    }

    function a(e) {
      if (ie) location.href = e;
      else {
        var t = document.createElement('iframe');
        (t.style.display = 'none'),
          (t.src = e),
          document.body.appendChild(t),
          setTimeout(function () {
            t && t.parentNode && t.parentNode.removeChild(t);
          }, 2e3);
      }
    }

    function c(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = [];
      for (var r in e) t ? n.push(r + '=' + encodeURIComponent(e[r])) : n.push(r + '=' + e[r]);
      return n.join('&');
    }

    function u(e) {
      var t = document.createElement('a');
      return (t.href = e), t.hostname;
    }

    function s(e) {
      ye
        ? (ye.content = e)
        : document.head.insertAdjacentHTML(
            'beforeend',
            '<meta name="description" content="' + e + '">',
          );
    }

    function f(e) {
      de
        ? (de.href = e)
        : document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="shortcut icon" href="' + e + '">',
          );
    }

    function l(e) {
      document.title = e;
    }

    function p(e) {
      return c({
        share_id: 924053302,
        url: be.encode(e.link),
        title: be.encode(e.title),
        description: be.encode(e.desc),
        previewimageUrl: be.encode(e.icon),
        image_url: be.encode(e.icon),
      });
    }

    function h() {
      a(
        (ie
          ? 'mqqapi://share/to_fri?src_type=web&version=1&file_type=news'
          : 'mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news') +
          '&' +
          p(ge),
      );
    }

    function b() {
      a(
        (ie
          ? 'mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A'
          : 'mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1') +
          '&' +
          p(ge),
      );
    }

    function y() {
      var e = { url: ge.link, title: ge.title, pic: ge.icon, desc: ge.desc };
      location.href = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + c(e, !0);
    }

    function d() {
      var e = { url: ge.link, title: ge.title, pic: ge.icon };
      location.href = 'http://service.weibo.com/share/share.php?' + c(e, !0);
    }

    function g(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function v(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }

    function m(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function w(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function _(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function O(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }

    function j(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function S(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function k(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function P(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }

    function q(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function T(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function C(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function E(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function D(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function x(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function Q(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function M(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function A(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function B(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function N(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function W(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function R(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function U(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function z(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function I(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function L(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function Z(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function F(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function H(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function J(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function X(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function G(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function K(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    function V(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function Y(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }

    function $(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }

    Object.defineProperty(t, '__esModule', { value: !0 });
    var ee,
      te = navigator.userAgent,
      ne = /(iPad).*OS\s([\d_]+)/.test(te),
      re = /(iPod)(.*OS\s([\d_]+))?/.test(te),
      oe = !ne && /(iPhone\sOS)\s([\d_]+)/.test(te),
      ie = ne || re || oe,
      ae = /(Android);?[\s\/]+([\d.]+)?/.test(te),
      ce = /micromessenger/i.test(te),
      ue = /QQ\/([\d\.]+)/.test(te),
      se = /Qzone\//.test(te),
      fe = /MQQBrowser/i.test(te) && !ce && !ue,
      le = /UCBrowser/i.test(te),
      pe = /mobile.*baidubrowser/i.test(te),
      he = /SogouMobileBrowser/i.test(te),
      be =
        (/baiduboxapp/i.test(te),
        {
          _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          encode: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              c,
              u = '',
              s = 0;
            for (e = be._utf8_encode(e); s < e.length; )
              (t = e.charCodeAt(s++)),
                (n = e.charCodeAt(s++)),
                (r = e.charCodeAt(s++)),
                (o = t >> 2),
                (i = ((3 & t) << 4) | (n >> 4)),
                (a = ((15 & n) << 2) | (r >> 6)),
                (c = 63 & r),
                isNaN(n) ? (a = c = 64) : isNaN(r) && (c = 64),
                (u =
                  u +
                  this._keyStr.charAt(o) +
                  this._keyStr.charAt(i) +
                  this._keyStr.charAt(a) +
                  this._keyStr.charAt(c));
            return u;
          },
          _utf8_encode: function (e) {
            e = e.replace(/\r\n/g, '\n');
            for (var t = '', n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n);
              r < 128
                ? (t += String.fromCharCode(r))
                : r > 127 && r < 2048
                ? ((t += String.fromCharCode((r >> 6) | 192)),
                  (t += String.fromCharCode((63 & r) | 128)))
                : ((t += String.fromCharCode((r >> 12) | 224)),
                  (t += String.fromCharCode(((r >> 6) & 63) | 128)),
                  (t += String.fromCharCode((63 & r) | 128)));
            }
            return t;
          },
        }),
      ye = document.querySelector('meta[name=description]'),
      de = document.querySelector('link[rel*=icon]'),
      ge = {
        link: location.href,
        title: (function () {
          return document.title;
        })(),
        desc: (function () {
          return Object(ye).content || '';
        })(),
        icon: (function () {
          return Object(de).href || location.protocol + '//' + location.hostname + '/favicon.ico';
        })(),
        from: '',
        success: r,
        fail: r,
        trigger: r,
      },
      ve = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      me = (function () {
        function e(t) {
          g(this, e),
            (this._shareData = ge),
            (this._config = {
              syncDescToTag: !1,
              syncIconToTag: !1,
              syncTitleToTag: !1,
            }),
            this.setConfig(t);
        }

        return (
          ve(e, [
            {
              key: 'getShareData',
              value: function () {
                return i({}, this._shareData);
              },
            },
            {
              key: 'setShareData',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this._shareData, e),
                  this._config.syncDescToTag && s(this._shareData.desc),
                  this._config.syncIconToTag && f(this._shareData.icon),
                  this._config.syncTitleToTag && l(this._shareData.title);
              },
            },
            {
              key: 'setConfig',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this._config, e);
              },
            },
            {
              key: 'getConfig',
              value: function () {
                return i({}, this._config);
              },
            },
          ]),
          e
        );
      })(),
      we = me,
      _e = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Oe = (function (e) {
        function t(e) {
          m(this, t);
          var n = w(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return o('https://jsapi.qq.com/get?api=app.share'), n;
        }

        return (
          _(t, e),
          _e(t, [
            {
              key: 'call',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default',
                  t = arguments[1];
                this.setShareData(t);
                var n = this.getShareData(),
                  r = this.constructor.commamdMap[String(e).toLowerCase()];
                browser.app.share({
                  title: n.title,
                  description: n.desc,
                  url: n.link,
                  img_url: n.icon,
                  from: n.from,
                  to_app: r,
                });
              },
            },
          ]),
          t
        );
      })(we);
    Oe.commamdMap =
      ((ee = {}),
      v(ee, 'wechattimeline', 8),
      v(ee, 'wechatfriend', 1),
      v(ee, 'qqfriend', 4),
      v(ee, 'qzone', 3),
      v(ee, 'weibo', 11),
      v(ee, 'copyurl', 10),
      v(ee, 'more', 5),
      v(ee, 'generateqrcode', 7),
      v(ee, 'default', void 0),
      ee);
    var je,
      Se = Oe,
      ke = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Pe = (function (e) {
        function t(e) {
          return j(this, t), S(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }

        return (
          k(t, e),
          ke(t, [
            {
              key: 'call',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default',
                  t = arguments[1];
                this.setShareData(t);
                var n = this.getShareData(),
                  r = this.constructor.commamdMap[String(e).toLowerCase()];
                ucbrowser.web_shareEX
                  ? ucbrowser.web_shareEX(
                      JSON.stringify({
                        title: n.title,
                        content: n.desc,
                        sourceUrl: n.link,
                        imageUrl: n.icon,
                        source: n.from,
                        target: r,
                      }),
                    )
                  : ucbrowser.web_share(title, desc, link, r, '', from, '');
              },
            },
          ]),
          t
        );
      })(we);
    Pe.commamdMap =
      ((je = {}),
      O(je, 'wechattimeline', 'kWeixinFriend'),
      O(je, 'wechatfriend', 'kWeixin'),
      O(je, 'qqfriend', 'kQQ'),
      O(je, 'qzone', 'kQZone'),
      O(je, 'weibo', 'kSinaWeibo'),
      O(je, 'default', void 0),
      je);
    var qe,
      Te = Pe,
      Ce = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ee = (function (e) {
        function t(e) {
          return q(this, t), T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }

        return (
          C(t, e),
          Ce(t, [
            {
              key: 'call',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default',
                  t = arguments[1];
                this.setShareData(t);
                var n = this.getShareData(),
                  r = this.constructor.commamdMap[String(e).toLowerCase()];
                ucweb.startRequest('shell.page_share', [
                  n.title,
                  n.desc,
                  n.link,
                  r,
                  '',
                  n.from,
                  n.icon,
                ]);
              },
            },
          ]),
          t
        );
      })(we);
    Ee.commamdMap =
      ((qe = {}),
      P(qe, 'wechattimeline', 'WechatTimeline'),
      P(qe, 'wechatfriend', 'WechatFriends'),
      P(qe, 'qqfriend', 'QQ'),
      P(qe, 'qzone', 'Qzone'),
      P(qe, 'weibo', 'SinaWeibo'),
      P(qe, 'default', ''),
      qe);
    var De = Ee,
      xe = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Qe = (function (e) {
        function t(e) {
          return E(this, t), D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }

        return (
          x(t, e),
          xe(t, [
            {
              key: 'call',
              value: function (e, t) {
                this.setShareData(t);
                var n = this.getShareData();
                _flyflowNative.exec(
                  'bd_utils',
                  'shareWebPage',
                  JSON.stringify({
                    title: n.title,
                    content: n.desc,
                    landurl: n.link,
                    imageurl: n.icon,
                    shareSource: n.from,
                  }),
                  '',
                );
              },
            },
          ]),
          t
        );
      })(we),
      Me = Qe,
      Ae = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Be = (function (e) {
        function t(e) {
          return Q(this, t), M(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }

        return (
          A(t, e),
          Ae(t, [
            {
              key: 'call',
              value: function (e, t) {
                this.setShareData(t);
                var n = this.getShareData();
                location.href =
                  'baidubrowserapp://bd_utils?action=shareWebPage&params=' +
                  encodeURIComponent(
                    JSON.stringify({
                      title: n.title,
                      content: n.desc,
                      imageurl: n.icon,
                      landurl: n.link,
                      mediaType: 0,
                      share_type: 'webpage',
                    }),
                  );
              },
            },
          ]),
          t
        );
      })(we),
      Ne = Be,
      We = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Re = (function (e) {
        function t(e) {
          return B(this, t), N(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }

        return (
          W(t, e),
          We(t, [
            {
              key: 'call',
              value: function (e, t) {
                this.setShareData(t);
                var n = this.getShareData();
                SogouMse.Utility.shareWithInfo({
                  shareTitle: n.title,
                  shareContent: n.desc,
                  shareImageUrl: n.icon,
                  shareUrl: n.link,
                });
              },
            },
          ]),
          t
        );
      })(we),
      Ue = Re,
      ze = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ie = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      Le = (function (e) {
        function t(e) {
          R(this, t);
          var n = U(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.setConfig(e), n;
        }

        return (
          z(t, e),
          ze(t, [
            {
              key: 'call',
              value: function (e, t) {
                this.setShareData(t);
              },
            },
            {
              key: 'setConfig',
              value: function (e) {
                Ie(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  'setConfig',
                  this,
                ).call(this, e),
                  this.init(this.getConfig().wechatConfig);
              },
            },
            {
              key: 'init',
              value: function (e) {
                var t = this;
                e &&
                  o('https://res.wx.qq.com/open/js/jweixin-1.4.0.js', function () {
                    wx.config(
                      i(
                        {
                          debug: !1,
                          jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'onMenuShareQZone',
                            'updateAppMessageShareData',
                            'updateTimelineShareData',
                          ],
                        },
                        e,
                      ),
                    );
                    var n = t._shareData,
                      r = {};
                    Object.defineProperty(r, 'trigger', {
                      get: function () {
                        return function () {
                          i(r, {
                            title: n.title,
                            desc: n.desc,
                            link: n.link,
                            imgUrl: n.icon,
                            success: n.success,
                            fail: n.fail,
                            cancel: n.fail,
                          }),
                            n.trigger.apply(n, arguments);
                        };
                      },
                      set: function (e) {
                        n.trigger = e;
                      },
                      enumerable: !0,
                    }),
                      wx.ready(function () {
                        wx.onMenuShareAppMessage(r),
                          wx.onMenuShareQQ(r),
                          wx.onMenuShareQZone(r),
                          wx.onMenuShareWeibo(r),
                          wx.onMenuShareTimeline(r),
                          wx.updateAppMessageShareData(r),
                          wx.updateTimelineShareData(r);
                      });
                  });
              },
            },
          ]),
          t
        );
      })(we),
      Ze = Le,
      Fe = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      He = (function (e) {
        function t(e) {
          return I(this, t), L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }

        return (
          Z(t, e),
          Fe(t, [
            {
              key: 'call',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default',
                  t = arguments[1];
                if ((this.setShareData(t), !navigator.share)) {
                  if ('weibo' !== (e = String(e).toLowerCase()))
                    throw (
                      ('qqfriend' === e ? h() : 'qzone' === e && b(),
                      new Error('the browser may not support command ' + e + '!'))
                    );
                  return void d();
                }
                var n = this.getShareData(),
                  r = { url: n.link, title: n.title, text: n.desc };
                navigator.share(r).then(n.success).catch(n.fail);
              },
            },
          ]),
          t
        );
      })(we),
      Je = He,
      Xe = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ge = (function (e) {
        function t(e) {
          F(this, t);
          var n = H(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.init(), n;
        }

        return (
          J(t, e),
          Xe(t, [
            {
              key: 'call',
              value: function () {
                var e =
                  (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]);
                this.setShareData(e), mqq.ui.showShareMenu();
              },
            },
            {
              key: 'init',
              value: function () {
                var e = this;
                o('https://open.mobile.qq.com/sdk/qqapi.js', function () {
                  var t = e._shareData;
                  mqq.ui.setOnShareHandler(function (e) {
                    mqq.ui.shareMessage(
                      {
                        back: !0,
                        share_type: e,
                        title: t.title,
                        desc: t.desc,
                        share_url: t.link,
                        image_url: t.icon,
                        sourceName: t.from,
                      },
                      function (e) {
                        0 === e.retCode ? t.success(e) : t.fail(e);
                      },
                    );
                  });
                });
              },
            },
          ]),
          t
        );
      })(we),
      Ke = Ge,
      Ve = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ye = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      $e = (function (e) {
        function t(e) {
          X(this, t);
          var n = G(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.init(), n;
        }

        return (
          K(t, e),
          Ve(t, [
            {
              key: 'setShareData',
              value: function (e) {
                Ye(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  'setShareData',
                  this,
                ).call(this, e);
                var n = this.getShareData();
                u(n.link) !== location.hostname &&
                  ((n.link = location.href),
                  console.warn(
                    '安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url',
                  ));
                try {
                  mqq.data.setShareInfo(
                    {
                      share_url: n.link,
                      title: n.title,
                      desc: n.desc,
                      image_url: n.icon,
                    },
                    function (e) {
                      !0 !== e && console.warn(e);
                    },
                  );
                } catch (e) {}
              },
            },
            {
              key: 'call',
              value: function () {
                var e =
                  (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]);
                this.setShareData(e), mqq.ui.showShareMenu();
              },
            },
            {
              key: 'init',
              value: function () {
                var e = this;
                o('https://open.mobile.qq.com/sdk/qqapi.js', function () {
                  e.setShareData();
                });
              },
            },
          ]),
          t
        );
      })(we),
      et = $e,
      tt = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      nt = (function (e) {
        function t(e) {
          V(this, t);
          var n = Y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.init(), n;
        }

        return (
          $(t, e),
          tt(t, [
            {
              key: 'call',
              value: function () {
                var e = this,
                  t =
                    (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]);
                this.setShareData(t);
                for (var n = this.getShareData(), r = [], o = [], i = [], a = [], c = 0; c < 5; c++)
                  r.push(n.icon), a.push(n.link), o.push(n.title), i.push(n.desc);
                QZAppExternal.setShare(
                  function (t) {
                    0 != t.code && (e.hasSomethingWrong = !0);
                  },
                  { type: 'share', image: r, title: o, summary: i, shareURL: a },
                );
              },
            },
            {
              key: 'setShareData',
              value: function (e) {
                try {
                  this.call('default', e);
                } catch (e) {}
              },
            },
            {
              key: 'init',
              value: function () {
                var e = this;
                o(
                  'https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js',
                  function () {
                    e.call('default');
                  },
                );
              },
            },
          ]),
          t
        );
      })(we),
      rt = nt;
    n.d(t, 'Share', function () {
      return we;
    }),
      n.d(t, 'QQMobileBrowser', function () {
        return Se;
      }),
      n.d(t, 'UCIosBrowser', function () {
        return Te;
      }),
      n.d(t, 'UCAndroidBrowser', function () {
        return De;
      }),
      n.d(t, 'BaiduAndroidBrowser', function () {
        return Me;
      }),
      n.d(t, 'BaiduIosBrowser', function () {
        return Ne;
      }),
      n.d(t, 'SogouIosBrowser', function () {
        return Ue;
      }),
      n.d(t, 'Wechat', function () {
        return Ze;
      }),
      n.d(t, 'Others', function () {
        return Je;
      }),
      n.d(t, 'QQIos', function () {
        return Ke;
      }),
      n.d(t, 'QQAndroid', function () {
        return et;
      }),
      n.d(t, 'QZone', function () {
        return rt;
      }),
      n.d(t, 'shareToQQ', function () {
        return h;
      }),
      n.d(t, 'shareToQZone', function () {
        return b;
      }),
      n.d(t, 'shareToWeibo4Web', function () {
        return d;
      }),
      n.d(t, 'shareToQZone4Web', function () {
        return y;
      });
    var ot = void 0;
    (ot = ce
      ? Ze
      : ue && ie
      ? Ke
      : ue && ae
      ? et
      : se
      ? rt
      : fe
      ? Se
      : le && ie
      ? Te
      : le && ae
      ? De
      : pe && ae
      ? Me
      : pe && ie
      ? Ne
      : he && ie
      ? Ue
      : Je),
      (window.NativeShare = ot);
    t.default = ot;
  },
]);

var shareData = {
  title: '分享标题',
  desc: '描述内容',
  // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
  link: 'www.你的连接地址',
  icon: '图片地址',
  // 不要过于依赖以下两个回调，很多浏览器是不支持的
  success: function() {
    alert('success')
  },
  fail: function() {
    alert('fail')
  }
}

// console.log(new _cc["0"].exports.Share(shareData));
let s = new _cc["0"].exports.default(shareData)
console.log(s.call('wechatfriend'));
// console.log(_cc["0"]);
