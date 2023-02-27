var window = {
  navigator: {
    appName: 'Netscape',
  },
};
var navigator = window['navigator'];
var _pp;

!function(e) {
  function t(t) {
    for (var a, o, c = t[0], s = t[1], u = t[2], p = 0, h = []; p < c.length; p++)
      o = c[p],
      n[o] && h.push(n[o][0]),
        n[o] = 0;
    for (a in s)
      Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (l && l(t); h.length; )
      h.shift()();
    return i.push.apply(i, u || []),
      r()
  }
  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], a = !0, c = 1; c < r.length; c++) {
        var s = r[c];
        0 !== n[s] && (a = !1)
      }
      a && (i.splice(t--, 1),
        e = o(o.s = r[0]))
    }
    return e
  }
  var a = {}
    , n = {
    78: 0
  }
    , i = [];
  function o(t) {
    if (a[t])
      return a[t].exports;
    var r = a[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, o),
      r.l = !0,
      r.exports
  }
  o.m = e,
    o.c = a,
    o.d = function(e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }
    ,
    o.r = function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }
    ,
    o.n = function(e) {
      var t = e && e.__esModule ? function() {
            return e.default
          }
          : function() {
            return e
          }
      ;
      return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "//www-pc.xoyocdn.com/";
  var c = window.webpackJsonp = window.webpackJsonp || []
    , s = c.push.bind(c);
  c.push = t,
    c = c.slice();
  for (var u = 0; u < c.length; u++)
    t(c[u]);
  var l = s;
  i.push(["DvGJ", 22, 21]),
    r()

  _pp = o
}({
  "+r/k": function(e, t, r) {
    "use strict";
    var a = r("vUrQ")
      , n = r("+QRC")
      , i = r.n(n)
      , o = {
      name: "ReceiveOrder",
      data: function() {
        return {
          modal: !1,
          faqPath: a.a.help.path + "?category=4104",
          orderStatusPath: a.a.orderStatus.path,
          kefuPath: "https://kefurobot.xoyo.com/webchatbot/chat.html?sysNum=1578898069071&sourceId=62211&lang=zh_CN"
        }
      },
      props: ["vouch_code", "resource_url", "handle_method", "channel", "channel_name", "reSelect", "confirm", "timestamp", "visible", "order_id", "game", "isAccessCopy"],
      watch: {
        timestamp: function() {
          this.modal = this.visible
        }
      },
      methods: {
        reSelectHandler: function() {
          this.modal = !1,
          this.reSelect && this.reSelect()
        },
        checkPayHandler: function() {
          this.modal = !1,
          this.confirm && this.confirm()
        },
        copyLink: function() {
          i()("https:" + this.orderStatusPath + "?item=" + this.game + "&way=" + this.channel + "&order_id=" + this.order_id + "&type=share", {
            message: "已经复制！"
          }),
            this.$message.success("已经复制！")
        }
      }
    }
      , c = r("JFUb")
      , s = Object(c.a)(o, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("el-dialog", {
        attrs: {
          visible: e.modal,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          top: "100px",
          center: ""
        },
        on: {
          "update:visible": function(t) {
            e.modal = t
          }
        }
      }, [r("section", {
        staticStyle: {
          "text-align": "left"
        }
      }, [r("p", {
        staticClass: "lh24",
        attrs: {
          align: "center"
        }
      }, [e._v("本订单交易号："), r("span", {
        staticClass: "high-light-color"
      }, [e._v(e._s(e.vouch_code))]), e._v("（温馨提示：若有疑问，可以尝试点击\n      "), r("a", {
        staticClass: "high-light-color",
        attrs: {
          href: e.faqPath,
          target: "_blank"
        }
      }, [e._v("充值FAQ")]), e._v("\n      或"), r("a", {
        staticClass: "high-light-color",
        attrs: {
          href: e.kefuPath,
          target: "_blank"
        }
      }, [e._v("联系客服")]), e._v("）")]), e._v(" "), "qr" === e.handle_method || "iframe" === e.handle_method ? r("p", {
        staticClass: "lh24",
        attrs: {
          align: "center"
        }
      }, [e._v("请扫描下方【" + e._s(e.channel_name) + "】二维码完成付款，完成后点击按钮查看订单是否支付成功。")]) : e._e(), e._v(" "), "qr" === e.handle_method ? r("p", {
        staticClass: "md-v-20",
        attrs: {
          align: "center"
        }
      }, [r("qriously", {
        attrs: {
          value: e.resource_url,
          size: 200
        }
      })], 1) : e._e(), e._v(" "), "iframe" === e.handle_method ? r("p", {
        staticClass: "md-v-20",
        attrs: {
          align: "center"
        }
      }, [r("iframe", {
        attrs: {
          src: e.modal ? e.resource_url : "",
          width: "200",
          height: "200",
          frameborder: "0",
          scrolling: "no"
        }
      })]) : e._e(), e._v(" "), r("p", {
        staticClass: "md-v-20",
        attrs: {
          align: "center"
        }
      }, [r("a", {
        staticClass: "large-red-btn",
        attrs: {
          href: "javascript:;",
          id: "recevie_order_submit"
        },
        on: {
          click: e.checkPayHandler
        }
      }, [e._v("我已支付成功")])]), e._v(" "), r("p", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "bcm" === e.channel,
          expression: "channel === 'bcm'"
        }],
        staticClass: "common-tips-color"
      }, [e._v("\n      提示：如果" + e._s(e.channel_name) + '页面无法弹出，建议使用IE核心浏览器，点击IE菜单"工具"-"Internet选项"-"安全"，将安全中的各项工具设置回复到默认级别。\n    ')]), e._v(" "), r("p", {
        attrs: {
          align: "center"
        }
      }, [r("a", {
        staticClass: "common-tips-color text-underline",
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: e.reSelectHandler
        }
      }, [e._v("选择其它支付方式")]), e._v(" "), e.isAccessCopy ? r("a", {
        staticClass: "common-tips-color ml-10 text-underline",
        attrs: {
          href: "javascript:;",
          target: "_self"
        },
        on: {
          click: e.copyLink
        }
      }, [e._v("复制订单")]) : e._e()])])])
    }, [], !1, null, null, null);
    t.a = s.exports
  },
  "/hsY": function(e, t, r) {
    "use strict";
    var a = {
      name: "ChargeSucess",
      props: ["order", "chargeAgain", "config", "className"],
      methods: {
        clickHandler: function() {
          var e = Object.prototype.toString.call(this.chargeAgain).slice(8, -1);
          "String" === e && this.chargeAgain && (window.location.href = this.chargeAgain),
          "Function" === e && this.chargeAgain()
        }
      }
    }
      , n = [function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("span", {
        staticClass: "tag"
      }, [t("img", {
        attrs: {
          src: r("ZqbV"),
          alt: ""
        }
      })])
    }
    ]
      , i = r("JFUb")
      , o = Object(i.a)(a, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("div", {
        class: "result-box " + e.className,
        staticStyle: {
          width: "100%",
          "margin-top": "40px"
        }
      }, [r("p", {
        staticClass: "fs24 fb result-color"
      }, [e._m(0), e._v("\n    " + e._s(e.config.props.title) + "\n  ")]), e._v(" "), r("div", {
        staticStyle: {
          width: "350px",
          margin: "0 auto"
        }
      }, [r("el-form", {
        attrs: {
          "label-width": "100px"
        }
      }, e._l(e.config.items, function(t, a) {
        return r("el-form-item", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.order[a],
            expression: "order[key]"
          }],
          key: a,
          attrs: {
            label: t + ":",
            id: "charge_success_" + a
          }
        }, [e._v("\n        " + e._s(e.order[a]) + e._s("recharge_cost" === a ? "元" : "") + "\n      ")])
      }))], 1), e._v(" "), e.config.props.btnText ? r("p", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.chargeAgain,
          expression: "chargeAgain"
        }],
        staticClass: "md-v-20",
        attrs: {
          align: "center"
        }
      }, [r("a", {
        staticClass: "large-red-btn",
        attrs: {
          href: "javascript:;",
          id: "charge_success_continue"
        },
        on: {
          click: e.clickHandler
        }
      }, [e._v(e._s(e.config.props.btnText))])]) : e._e()])
    }, n, !1, null, null, null);
    t.a = o.exports
  },
  "1yt7": function(e, t, r) {
    e.exports = r("8wy/")("1yt7")
  },
  "2+xK": function(e, t) {},
  "201c": function(e, t, r) {
    e.exports = r("8wy/")("201c")
  },
  "4RXF": function(e, t, r) {
    "use strict";
    var a = r("4d7F")
      , n = r.n(a)
      , i = r("GQeE")
      , o = r.n(i)
      , c = r("gDS+")
      , s = r.n(c)
      , u = r("i7/w")
      , l = r.n(u)
      , p = r("tJFH")
      , h = new window.JSEncrypt;
    h.setKey(p.a.publicKey);
    var d = h
      , m = {
      handUp: !1
    }
      , f = {
      code: -9999,
      msg: "服务器在开小差，请稍后再试。",
      message: "服务器在开小差，请稍后再试。",
      data: {}
    }
      , g = ["password", "password2", "password_2", "old_password", "kcoin_password", "second_password", "old_second_password", "confirm_password"];
    function v(e) {
      if (e) {
        var t = {};
        return o()(e).forEach(function(r) {
          ~g.indexOf(r) ? (t[r] = d.encrypt(e[r]),
            t.encrypt_method = "rsa") : t[r] = e[r]
        }),
          t
      }
    }
    function _(e) {
      if (!e)
        return e;
      var t = {};
      return o()(e).filter(function(t) {
        var r = Object.prototype.toString.call(e[t]).slice(8, -1);
        return !~["Null", "Undefined"].indexOf(r)
      }).forEach(function(r) {
        t[r] = e[r]
      }),
        t
    }
    function y(e, t) {
      location.href;
      return l.a.prototype.$requestBeforenum++,
        new n.a(function(r) {
            l.a.prototype.$jsonp("" + e, v(_(t))).then(function(e) {
              l.a.prototype.$requestAfternum++,
                l.a.prototype.$pageAjaxCheckDone(),
                r(e)
            }).catch(function(t) {
              l.a.prototype.$requestAfternum++,
                l.a.prototype.$pageAjaxCheckDone(),
              m.handUp || r(f),
                function(e) {
                  throw new Error(s()(e))
                }({
                  url: e,
                  error: t
                })
            })
          }
        )
    }
    window.onbeforeunload = function() {
      m.handUp = !0
    }
      ,
      l.a.prototype.$requestBeforenum = 0,
      l.a.prototype.$requestAfternum = 0,
      l.a.prototype.$requestCbList = [],
      l.a.prototype.$pageAjaxCheckDone = function() {
        this.$requestBeforenum === l.a.prototype.$requestAfternum && this.$requestCbList.forEach(function(e) {
          e()
        })
      }
      ,
      l.a.prototype.$pageAjaxDone = function(e) {
        e && this.$requestCbList.push(e)
      }
      ,
      y.encryptParmas = function(e) {
        return v(_(e))
      }
    ;
    t.a = y
  },
  "4mvJ": function(e, t, r) {
    "use strict";
    r.d(t, "b", function() {
      return o
    }),
      r.d(t, "a", function() {
        return c
      }),
      r.d(t, "c", function() {
        return s
      });
    var a = r("vUrQ")
      , n = r("i7/w")
      , i = r.n(n)
      , o = {
      navMenu: [{
        text: "注册",
        name: "signup",
        path: a.a.signup.path,
        needLogin: !1,
        loginHide: !0,
        isHightlight: !0
      }, {
        text: "登录",
        name: "signin",
        path: a.a.signin.path,
        needLogin: !1,
        loginHide: !0,
        isHightlight: !1
      }, {
        text: "wegame" === i.a.prototype.$xoyo_api_common.getXoyoPf() ? "安全" : "充值/安全",
        name: "serviceList",
        path: "#",
        isHightlight: !1,
        target: "service-list"
      }, {
        text: "游戏列表",
        name: "gameList",
        path: "#",
        isHightlight: !1,
        target: "game-list"
      }, {
        text: "手机版",
        name: "mobileVersion",
        path: "#",
        isHightlight: !1,
        target: "mobile-vCode"
      }, {
        text: "增值服务",
        name: "vas",
        path: "#",
        needLogin: !1,
        isHightlight: !1,
        target: "vas"
      }, {
        text: "APP下载",
        name: "toolList",
        path: a.a.apps.path,
        isNoBg: !0
      }]
    }
      , c = {
      menus: [{
        title: "充值",
        pf: "wegame",
        list: [{
          text: "游戏充值",
          path: a.a.charge.path
        }, {
          text: "充值记录",
          path: a.a.chargeRecord.path
        }, {
          text: "余额查询",
          path: a.a.balanceInquire.path
        }, {
          text: "充值金山币",
          path: a.a.pay.path + "?step=2&item=kcoin"
        }, {
          text: "发票申请",
          needLogin: !0,
          path: a.a.invoice.path
        }]
      }, {
        title: "安全",
        list: [{
          text: "修改密码",
          path: a.a.changePassword.path + "?form=top",
          pf: "wegame"
        }, {
          text: "修改绑定手机",
          path: a.a.phoneSetting.path + "?form=top"
        }, {
          text: "修改绑定邮箱",
          path: a.a.emailSetting.path + "?form=top"
        }, {
          text: "",
          sub: [{
            text: "冻结",
            path: a.a.accountFreeze.path + "?form=top"
          }, {
            text: "解冻",
            path: a.a.accountUnFreeze.path + "?form=top"
          }, {
            text: "踢号",
            path: a.a.kickAccount.path + "?form=top"
          }]
        }]
      }]
    }
      , s = [{
      text: "剑网3",
      link: a.a.jx3Service.path
    }, {
      text: "剑网3缘起",
      link: a.a.jx3yqService.path
    }, {
      text: "反恐行动",
      pf: "wegame",
      link: a.a.csService.path
    }, {
      text: "剑侠世界",
      icon: "",
      tab: "vas-jxsj",
      pf: "wegame",
      link: a.a.jxsj2Service.path
    }, {
      text: "剑网2",
      icon: "",
      tab: "vas-jx2",
      pf: "wegame",
      link: a.a.jx2Service.path
    }]
  },
  "5EH2": function(e, t, r) {
    "use strict";
    var a = r("m1cH")
      , n = r.n(a)
      , i = r("GQeE")
      , o = r.n(i);
    t.a = {
      data: function() {
        return {
          marks: {}
        }
      },
      methods: {
        markStatisticsReport: function(e) {
          for (var t = this, r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
            a[i - 1] = arguments[i];
          var c = this.marks;
          o()(c).forEach(function(r) {
            r === e && ("Function" === Object.prototype.toString.call(c[r]).slice(8, -1) && t.xoyoStatisticsReport.apply(t, n()(c[r].apply(c, n()(a)))),
            "Array" === Object.prototype.toString.call(c[r]).slice(8, -1) && t.xoyoStatisticsReport.apply(t, n()(c[r])))
          })
        }
      },
      created: function() {
        this.$on("markStatisticsReport", this.markStatisticsReport)
      }
    }
  },
  "5Hu4": function(e, t, r) {
    e.exports = r.p + "overall/img/xsj.5f7747bb.png"
  },
  "6a3B": function(e, t) {
    window.PM = window.JSON ? function(e) {
      var t, r, a = "postMessage"in window ? {
        send: function(t, r, a) {
          t.postMessage(e.stringify(r), a)
        },
        bind: function(t) {
          var r = function(r) {
            return t.call(this, e.parse(r.data || ""))
          };
          window.addEventListener ? window.addEventListener("message", r, !1) : window.attachEvent("onmessage", r)
        }
      } : (t = [],
        r = [],
        window.setInterval(function() {
          var r = unescape(window.name || "");
          if (0 === r.indexOf("PM|")) {
            var a;
            window.name = "";
            try {
              a = e.parse(r.slice("PM|".length))
            } catch (e) {
              return
            }
            if (a && a.data && a.origin && ("*" === a.origin || 0 === location.href.toLowerCase().indexOf(a.origin.toLowerCase())))
              for (var n = t.length, i = 0; i < n; i++)
                try {
                  t[i].call(window, a.data)
                } catch (e) {}
          }
        }, 20),
        {
          send: function(t, a, n) {
            r.push({
              win: t,
              msg: encodeURIComponent("PM|" + e.stringify({
                data: a,
                origin: n
              }))
            }),
              function e() {
                if (r.timer && (window.clearTimeout(r.timer),
                  delete r.timer),
                  r.length) {
                  var t = +new Date
                    , a = r.lastCheck || 0;
                  if (t < a + 30)
                    r.timer = window.setTimeout(e, a + 30 - t);
                  else {
                    r.lastCheck = t;
                    var n = r.shift();
                    n.win.name = n.msg,
                      e()
                  }
                }
              }()
          },
          bind: function(e) {
            t.push(e)
          }
        });
      return window.PM = {
        send: function(e, t, r, n) {
          if (e && t && void 0 !== r && ("string" != typeof e || (e = document.getElementById(e)))) {
            try {
              e.self !== e && (e = e.contentWindow)
            } catch (e) {}
            a.send(e, {
              type: t,
              data: r
            }, n || "*")
          }
        },
        bind: function(e, t) {
          e && "[object Function]" === Object.prototype.toString.call(t) && a.bind(function(r) {
            r.type === e && t.call(this, r.data)
          })
        }
      },
        window.PM
    }(JSON) : {
      send: function() {},
      bind: function() {}
    }
  },
  "6mGo": function(e, t, r) {
    e.exports = r.p + "overall/img/icon-big-error.d0ef415f.png"
  },
  "7H7Y": function(e, t, r) {
    e.exports = r("8wy/")("7H7Y")
  },
  "7SIX": function(e, t, r) {
    "use strict";
    t.a = {
      methods: {
        dispatch: function(e, t, r) {
          for (var a = this.$parent || this.$root, n = a.$options.componentName; a && (!n || n !== e); )
            (a = a.$parent) && (n = a.$options.componentName);
          a && a.$emit.apply(a, [t].concat(r))
        },
        broadcast: function(e, t, r) {
          (function e(t, r, a) {
              this.$children.forEach(function(n) {
                n.$options.componentName === t ? n.$emit.apply(n, [r].concat(a)) : e.apply(n, [t, r].concat([a]))
              })
            }
          ).call(this, e, t, r)
        }
      }
    }
  },
  "8VPg": function(e, t, r) {
    e.exports = r.p + "overall/img/xoyo-logo-dev.8ebf0984.png"
  },
  "8wy/": function(e, t) {
    e.exports = vendor
  },
  "9NYM": function(e, t, r) {
    e.exports = r.p + "overall/img/icon-menu-mobile.9668a105.png"
  },
  "9kx2": function(e, t, r) {
    e.exports = r.p + "overall/img/xoyo-logo.06dd7043.png"
  },
  "9zXB": function(e, t, r) {
    "use strict";
    var a = {
      pre: ["-----BEGIN PUBLIC KEY-----\n", "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDAg4u6Dh/fTtworYjZusiJ/FCj\n", "GqHrI1I71ZaC/ERdmbbNNeED3kGiuEDtE72Yz0pMW6jgVsm++FMNbmC1eHs4m4hD\n", "l2x8lAqdFqo7kEsJph88UIV6bn8djtpYrEufJc8rXSsf1KcNKb4cpViJ27CvLGxU\n", "33uo8CMEZ7a5Y94S9QIDAQAB\n", "-----END PUBLIC KEY-----\n"].join(""),
      dev: ["-----BEGIN PUBLIC KEY-----\n", "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDAgrBJCVhucByQRTULEDFgfZzv\n", "bOecFLFsEYg8LhWjbkQO7esgRHNlyR4fEyVTGJWUiRBQEZzB0i7kEr8TrKscJJFU\n", "1mqf4pvnI1sNYqHVbHqI1MBNTVe/fWoidBKevQNukSHCc4bbngmGGcDUvJ5nhwGb\n", "9RA33VZkysGDtHgolwIDAQAB\n", "-----END PUBLIC KEY-----\n"].join(""),
      prod: ["-----BEGIN PUBLIC KEY-----\n", "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDQbEOhlXZCAttTzvZ9104nAXXJ\n", "9wklw2gFOv1y1FkKObXymIEON1SkR1hIV21oaP3xXeAubiDbrFnXli15mevkpsyv\n", "Lp6yiXsy04GbnqVozugbmr6BpIGQa/Fy+t0crT3KV4clQ9pnwQjexcFV3WMiaVEu\n", "VjoJCZI6SaKbAhktywIDAQAB\n", "-----END PUBLIC KEY-----\n"].join("")
    };
    t.a = {
      pf: "pf-api.xoyo.com",
      pay: "pay-pf-api.xoyo.com",
      content: "content.xoyo.com",
      stIdentifier: "xoyo",
      stDebug: !1,
      processDebug: !1,
      queue: "//ws.xoyo.com",
      publicKey: a.prod
    }
  },
  "AFy+": function(e, t) {},
  AbqV: function(e, t, r) {
    e.exports = r.p + "overall/img/cnnic.39f1df19.png"
  },
  AvWT: function(e, t) {},
  C3Ml: function(e, t, r) {
    e.exports = r.p + "overall/img/gangting.7adf6e82.png"
  },
  CbVK: function(e, t) {},
  "D+rn": function(e, t, r) {
    e.exports = r.p + "overall/img/icon-Index-Floating-left-vip.81c64a2e.png"
  },
  DvGJ: function(e, t, r) {
    "use strict";
    r.r(t);
    var a, n = r("QbLZ"), i = r.n(n), o = r("xHOL"), c = r("YEIV"), s = r.n(c), u = r("jo6Y"), l = r.n(u), p = r("L2JU"), h = r("vUrQ"), d = r("JiOg"), m = r("iNKB"), f = r("5EH2"), g = r("rAqn"), v = r("Ly1x"), _ = r("CS0G"), y = r("GDO9"), x = r("I+Mr"), b = r("lBym"), k = r("mySL"), w = r("/hsY"), C = r("Gc1i"), A = r("fDck"), I = r("KR5a"), S = r("EfDb"), O = r("+r/k"), j = r("6mGo"), R = r.n(j), E = (r("wRxG"),
      {
        name: "Pay",
        componentName: "PayPage",
        mixins: [f.a],
        data: function() {
          return {
            formItems: m.a,
            maintenanceIcon: R.a,
            gameName: Object(d.f)("item"),
            formValue: {},
            changFormValueLock: !1,
            isLogin: !1,
            refs: null,
            stepOptions: [{
              key: 1,
              text: "选择游戏",
              url: h.a.charge.path
            }, {
              key: 2,
              text: "填写信息"
            }, {
              key: 3,
              text: "完成充值"
            }]
          }
        },
        watch: {
          payAntiAddiction: function(e) {
            e.link && this.$store.commit("SET_ANTI_ADDICTION_STATE", e)
          },
          formValue: {
            handler: function(e) {
              Object(d.g)(e) || this.getFormValue(e)
            },
            deep: !0
          },
          formConfig: function(e) {
            var t = this;
            this.changFormValueLock = !0,
              this.formValue = e.items.reduce(function(e, t) {
                return t.hasOwnProperty("name") && (e[t.name] = t.value),
                  e
              }, {}),
              setTimeout(function() {
                t.changFormValueLock = !1
              }, 200),
              xoyoConsole.log("表单初始化", this.formValue)
          }
        },
        computed: i()({}, Object(p.c)({
          game: function(e) {
            return e.payStore.game
          },
          step: function(e) {
            return e.payStore.step
          },
          channels: function(e) {
            return e.payStore.channels
          },
          formConfig: function(e) {
            return e.payStore.fromConfig
          },
          submitStatus: function(e) {
            return e.payStore.submitStatus
          },
          confirmOrder: function(e) {
            return e.payStore.confirmOrder
          },
          gameOrderListConfig: function(e) {
            return e.payStore.gameOrderListConfig
          },
          gameOrder: function(e) {
            return e.payStore.gameOrder
          },
          ua: function(e) {
            return e.payStore.ua
          },
          payAntiAddiction: function(e) {
            return e.payStore.antiAddiction
          },
          antiAddiction: function(e) {
            return e.antiAddictionStore
          },
          target: function(e) {
            return e.payStore.target
          },
          no_header: function(e) {
            return e.payStore.no_header
          }
        }), {
          show: function() {
            return this.isLogin ? "show" : "hide"
          },
          antiAddictionModel: function() {
            var e = this;
            return i()({}, this.antiAddiction, {
              reLogin: this.reLogin,
              validate: this.validate,
              checkAntiAddictionStatus: function() {
                e.checkAntiAddictionStatus(),
                  e.quickPayHandler()
              },
              retry: this.retry,
              changeReLogin: this.changeReLogin
            })
          },
          orderConfirmInfo: function() {
            var e = this.gameOrder
              , t = e.vouch_code
              , r = e.recharge_cost
              , a = l()(e, ["vouch_code", "recharge_cost"]);
            return i()({}, a, {
              errorText: this.errorText,
              id: t,
              recharge_cost: r + "元"
            })
          },
          payWayDisabled: function() {
            return !1
          }
        }),
        components: (a = {
          ChargeSuccess: w.a,
          ChargeFailed: C.a,
          FormPay: k.a,
          ChargeTip: A.a,
          StoreTip: I.a,
          ConfirmOrder: S.a,
          ReceiveOrder: O.a,
          AntiAddictionTip: x.a,
          AntiAddictionIframe: b.a
        },
          s()(a, _.a.name, _.a),
          s()(a, y.a.name, y.a),
          s()(a, g.a.name, g.a),
          s()(a, v.a.name, v.a),
          a),
        methods: i()({}, Object(p.b)({
          initPage: "initPage",
          getCurrentChannel: "getCurrentChannel",
          getFormValue: "getFormValue",
          createOrder: "createOrder",
          payOrder: "payOrder",
          checkOrder: "checkOrder",
          rePayOrder: "rePayOrder",
          payOrderReselect: "payOrderReselect",
          checkOrderReselect: "checkOrderReselect",
          quickPayOrder: "quickPayOrder",
          reLogin: "reLogin",
          validate: "validate",
          checkAntiAddictionStatus: "checkAntiAddictionStatus",
          retry: "retry",
          changeReLogin: "changeReLogin"
        }), {
          quickPayHandler: function() {
            this.quickPayOrder(this.formValue)
          },
          changeChannel: function(e) {
            this.$store.commit("UPDATE_STEP", 2),
              this.getCurrentChannel(e)
          },
          submitForm: function(e) {
            e && (xoyoConsole.log("表单值为", this.formValue),
              this.createOrder(this.formValue))
          },
          getRefs: function(e) {
            this.refs = e
          },
          orderReSelect: function() {
            this.$store.commit("UPDATE_STEP", 2)
          },
          confirmReSelect: function() {
            this.payOrderReselect()
          },
          receiveReselect: function() {
            this.$store.commit("UPDATE_STEP", 2),
              this.checkOrderReselect()
          }
        }),
        created: function() {
          this.initPage()
        },
        mounted: function() {
          var e = this;
          d.e.$emit("active-navigator", 4),
            d.e.$emit("bread-crumb", [{
              name: "充值",
              link: h.a.charge.path
            }, {
              name: "支付",
              link: ""
            }]),
            this.dataReport.loadPageIndex(),
          (this.ua || this.target || this.no_header) && (d.e.$emit("hidden-layout"),
            document.querySelector(".main").className = "main ua-main",
            document.body.style.minWidth = "960px"),
            d.e.$on("passport", function(t) {
              if (Object(d.f)("sign") || Object(d.f)("order_id") || Object(d.f)("ua") || Object(d.f)("no_header"))
                return e.isLogin = !0,
                  !1;
              if (t)
                e.isLogin = !0;
              else {
                var r = window.location.href;
                setTimeout(function() {
                  window.location.href = h.a.signin.path + "?redirect=" + encodeURIComponent(r)
                }, 70)
              }
            })
        }
      }), T = r("JFUb");
    var P = function(e) {
      r("p0B7")
    }
      , D = Object(T.a)(E, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("Layout", {
        attrs: {
          show: e.show
        }
      }, [r("div", {
        staticClass: "container"
      }, [r("div", {
        staticClass: "pay"
      }, [r("div", {
        staticClass: "background-bottom-box"
      }), e._v(" "), r("div", {
        staticClass: "pay-left"
      }, [r("game-title", {
        attrs: {
          title: e.game.name,
          logo: e.game.icon
        }
      }), e._v(" "), r("span", {
        staticClass: "pay-left-way-title",
        staticStyle: {
          "border-right": "none"
        }
      }, [e._v("选择支付方式")]), e._v(" "), r("pay-way", {
        attrs: {
          list: e.channels,
          change: e.changeChannel,
          disabled: e.payWayDisabled
        }
      })], 1), e._v(" "), r("div", {
        staticClass: "pay-right",
        style: e.target ? "min-height:700px" : ""
      }, [e.target ? e._e() : r("div", [r("common-breadcrumb", {
        staticClass: "xoyo-pc-RightContent-bread-crumb",
        staticStyle: {
          margin: "25px 54px 20px 54px",
          border: "none"
        }
      }), e._v(" "), r("div", {
        staticStyle: {
          overflow: "hidden",
          height: "30px",
          position: "relative"
        }
      }, [r("div", {
        staticClass: "pay-way-title update-title fs20 fb"
      }, [e._v(e._s(e.formConfig.title))]), e._v(" "), r("div", {
        staticClass: "update-step"
      }, [r("xoyo-stepper", {
        attrs: {
          active: e.step,
          options: e.stepOptions
        }
      })], 1)])], 1), e._v(" "), e.target ? r("div", [r("div", {
        staticClass: "store-title"
      }, [r("span", {
        staticClass: "store-left"
      }), e._v(" "), r("span", {
        staticClass: "store-text"
      }, [e._v(e._s(e.formConfig.pageTitle))]), e._v(" "), r("span", {
        staticClass: "store-right"
      })]), e._v(" "), r("div", {
        staticClass: "pay-way-title fs20 fb"
      }, [e._v(e._s(e.formConfig.title))])]) : e._e(), e._v(" "), r("section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 2 === e.step,
          expression: "step === 2"
        }]
      }, [e.formConfig.items.length || e.formConfig.maintenance ? e._e() : r("div", {
        staticStyle: {
          padding: "30px 60px"
        }
      }, [e._v("正在生成充值信息...")]), e._v(" "), e.formConfig.maintenance ? r("div", {
        staticStyle: {
          padding: "200px 60px 30px",
          "text-align": "center"
        }
      }, [r("p", {
        staticStyle: {
          "margin-bottom": "10px",
          "font-size": "20px"
        }
      }, [r("img", {
        attrs: {
          width: "64",
          src: e.maintenanceIcon
        }
      })]), e._v(" "), r("p", {
        staticStyle: {
          "font-size": "20px",
          "line-height": "32px"
        }
      }, [e._v("系统升级维护中 "), r("br"), e._v("请选择其他支付方式，谢谢！")]), e._v(" "), r("p", {
        staticStyle: {
          "margin-top": "10px",
          "line-height": "22px"
        }
      }, [e._v("\n              如需帮助，请"), r("a", {
        staticStyle: {
          color: "#b62929"
        },
        attrs: {
          href: "//kefu.xoyo.com/",
          target: "_blank"
        }
      }, [e._v("联系客服")]), e._v("。\n            ")])]) : e._e(), e._v(" "), e.formConfig.items.length ? r("form-pay", {
        attrs: {
          form: e.formValue,
          "btn-text": e.formConfig.submitButtonText,
          loadingStatus: e.submitStatus,
          submit: e.submitForm,
          getRefs: e.getRefs
        }
      }, [e._l(e.formConfig.items, function(t, a) {
        return r(e.formItems[t.type], e._b({
          key: t.type + "_" + a,
          tag: "component",
          attrs: {
            id: t.id,
            label: t.label,
            form: e.formValue,
            prop: t.name,
            refs: e.refs,
            clickHandler: t.events && t.events.onClick,
            changeHandler: t.events && t.events.onChange
          }
        }, "component", t.props, !1))
      }), e._v(" "), r("el-form-item", {
        staticStyle: {
          "margin-top": "-22px"
        },
        attrs: {
          slot: "tips"
        },
        slot: "tips"
      }, [r(e.formConfig.tipsName, {
        tag: "component"
      })], 1)], 2) : e._e()], 1), e._v(" "), r("section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 3 === e.step,
          expression: "step === 3"
        }]
      }, [2 === e.gameOrder.order_status ? r("charge-success", {
        attrs: {
          order: e.gameOrder,
          config: e.gameOrderListConfig,
          chargeAgain: e.orderReSelect
        }
      }) : e._e(), e._v(" "), 2 !== e.gameOrder.order_status ? r("charge-failed", {
        attrs: {
          order: e.gameOrder,
          config: e.gameOrderListConfig,
          chargeAgain: e.rePayOrder
        }
      }) : e._e()], 1)])]), e._v(" "), r("confirm-order", e._b({
        attrs: {
          gameName: e.gameName,
          confirm: e.payOrder,
          reSelect: e.confirmReSelect
        }
      }, "confirm-order", e.confirmOrder, !1)), e._v(" "), r("receive-order", e._b({
        attrs: {
          confirm: e.checkOrder,
          reSelect: e.receiveReselect
        }
      }, "receive-order", e.gameOrder, !1)), e._v(" "), r("anti-addiction-tip", e._b({}, "anti-addiction-tip", e.antiAddictionModel, !1)), e._v(" "), r("anti-addiction-iframe", e._b({}, "anti-addiction-iframe", e.antiAddictionModel.iframe, !1))], 1)])
    }, [], !1, P, "data-v-af7fe5cc", null).exports;
    t.default = Object(o.a)(i()({}, D))
  },
  Ec9o: function(e, t, r) {
    e.exports = r.p + "overall/img/xoyo-logo-pre.a001f66e.png"
  },
  EfDb: function(e, t, r) {
    "use strict";
    var a = r("JFUb");
    var n = function(e) {
      r("i2LB")
    }
      , i = Object(a.a)({
      name: "ConfirmOrder",
      props: ["orderInfo", "confirm", "reSelect", "visible", "timestamp", "gameName"],
      data: function() {
        return {
          modal: !1
        }
      },
      computed: {
        showJx3Tip: function() {
          return "jx3" === this.gameName && this.orderInfo && this.orderInfo.find(function(e) {
            return "chargeType" === e.key && "通宝" === e.value
          })
        }
      },
      watch: {
        timestamp: function() {
          this.modal = this.visible
        }
      },
      methods: {
        reSelectHandler: function() {
          this.modal = !1,
          this.reSelect && this.reSelect()
        },
        confirmHandler: function() {
          this.modal = !1,
          this.confirm && this.confirm()
        }
      }
    }, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("el-dialog", {
        attrs: {
          visible: e.modal,
          "close-on-click-modal": !1,
          title: "订单确认",
          top: "100px",
          "close-on-press-escape": !1,
          center: ""
        },
        on: {
          "update:visible": function(t) {
            e.modal = t
          }
        }
      }, [r("section", {
        attrs: {
          tyle: "text-align: left"
        }
      }, [r("p", {
        staticClass: "high-light-color",
        attrs: {
          align: "center"
        }
      }, [e._v("请确认订单信息")]), e._v(" "), r("div", {
        staticClass: "confirm-form"
      }, e._l(e.orderInfo, function(t) {
        return t.value ? r("div", {
          staticClass: "confirm-form-item"
        }, [r("div", {
          staticClass: "confirm-form-item-label"
        }, [e._v(e._s(t.label) + ":")]), e._v(" "), "chargeSum" !== t.key && "gateway" !== t.key ? r("div", {
          staticClass: "confirm-form-item-content"
        }, [e._v(e._s(t.value))]) : e._e(), e._v(" "), "gateway" === t.key ? r("div", {
          staticClass: "confirm-form-item-content"
        }, [r("span", {
          staticStyle: {
            "font-size": "18px",
            "font-weight": "400"
          }
        }, [e._v(e._s(t.value))])]) : e._e(), e._v(" "), "chargeSum" === t.key ? r("div", {
          staticClass: "confirm-form-item-content"
        }, [r("span", {
          staticClass: "high-light-color",
          staticStyle: {
            "font-size": "18px",
            "font-weight": "400"
          }
        }, [e._v(e._s(t.value && t.value.cost))]), e._v(" "), r("span", {
          staticClass: "high-light-color"
        }, [e._v("\n                  (获得" + e._s(t.value && t.value.worth) + ")\n                ")])]) : e._e()]) : e._e()
      })), e._v(" "), e.showJx3Tip ? r("div", {
        staticStyle: {
          "margin-top": "20px",
          "text-align": "center"
        }
      }, [e._v("\n      ( 温馨提示：通宝为游戏虚拟代币，购买游戏时间请选择\n      "), r("span", {
        staticClass: "high-light-color"
      }, [e._v("点卡")]), e._v("\n      或\n      "), r("span", {
        staticClass: "high-light-color"
      }, [e._v("月卡")]), e._v("\n      哟！ )\n    ")]) : e._e(), e._v(" "), r("div", {
        staticClass: "confirm-form"
      }, [r("a", {
        staticClass: "large-red-btn",
        attrs: {
          href: "javascript:;",
          id: "confirm_order_submit"
        },
        on: {
          click: e.confirmHandler
        }
      }, [e._v("确认无误")])]), e._v(" "), r("p", {
        attrs: {
          align: "center"
        }
      }, [r("a", {
        staticClass: "common-tips-color text-underline",
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: e.reSelectHandler
        }
      }, [e._v("重新选择")])])])])
    }, [], !1, n, null, null);
    t.a = i.exports
  },
  Gc1i: function(e, t, r) {
    "use strict";
    var a = [function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("span", {
        staticClass: "tag"
      }, [t("img", {
        attrs: {
          src: r("Np4R"),
          alt: ""
        }
      })])
    }
    ]
      , n = r("JFUb")
      , i = Object(n.a)({
      name: "ChargeFailed",
      props: ["order", "chargeAgain", "config", "className"]
    }, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("div", {
        class: "result-box " + e.className,
        staticStyle: {
          width: "100%",
          "margin-top": "40px"
        }
      }, [r("p", {
        staticClass: "fs24 fb result-color"
      }, [e._m(0), e._v("\n    " + e._s(e.order.order_status_text) + "\n  ")]), e._v(" "), r("div", {
        staticStyle: {
          width: "350px",
          margin: "0 auto"
        }
      }, [r("el-form", {
        attrs: {
          "label-width": "100px"
        }
      }, e._l(e.config.items, function(t, a) {
        return r("el-form-item", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.order[a],
            expression: "order[key]"
          }],
          key: a,
          attrs: {
            label: t + ":",
            id: "charge_failed_" + a
          }
        }, [e._v("\n        " + e._s(e.order[a]) + e._s("recharge_cost" === a ? "元" : "") + "\n      ")])
      }))], 1), e._v(" "), r("p", {
        staticClass: "md-v-20",
        attrs: {
          align: "center"
        }
      }, [e.chargeAgain ? r("a", {
        staticClass: "large-red-btn",
        attrs: {
          href: "javascript:;",
          id: "charge_failed_retry"
        },
        on: {
          click: e.chargeAgain
        }
      }, [e._v("订单重试")]) : e._e()])])
    }, a, !1, null, null, null);
    t.a = i.exports
  },
  IQIE: function(e, t, r) {
    e.exports = r.p + "overall/img/icon-Index-Floating-left-phone.7f87cda9.png"
  },
  IYAZ: function(e, t, r) {
    "use strict";
    var a = {
      name: "ChargeRadioItem",
      componentName: "ChargeRadioItem",
      props: ["value", "option"],
      mixins: [r("7SIX").a],
      inject: ["radio"],
      computed: {
        itemSelected: function() {
          return this.value === this.radio.value
        }
      },
      methods: {
        clickHandle: function(e) {
          this.dispatch("ChargeRadio", "chargeTypeSelect", [this, !0])
        }
      }
    }
      , n = r("JFUb")
      , i = Object(n.a)(a, function() {
      var e = this
        , t = e.$createElement
        , a = e._self._c || t;
      return a("div", {
        staticClass: "xoyo-radio",
        class: {
          active: e.itemSelected
        },
        on: {
          click: function(t) {
            return t.stopPropagation(),
              e.clickHandle(t)
          }
        }
      }, [a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.option.icon,
          expression: "option.icon"
        }],
        staticClass: "badage-gain"
      }, [a("img", {
        attrs: {
          src: r("NB2D"),
          alt: ""
        }
      })]), e._v(" "), a("el-tooltip", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.option.tips,
          expression: "option.tips"
        }],
        attrs: {
          content: e.option.tips,
          placement: "top"
        }
      }, [a("div", {
        staticClass: "xoyo-radio-btn"
      }, [e._v(e._s(e.option.title))])]), e._v(" "), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.option.tips,
          expression: "!option.tips"
        }],
        staticClass: "xoyo-radio-btn"
      }, [e._v(e._s(e.option.title))]), e._v(" "), a("div", {
        staticClass: "xoyo-radio-tips"
      }, [e._v(e._s(e.option.description))])], 1)
    }, [], !1, null, null, null);
    t.a = i.exports
  },
  Irni: function(e, t) {},
  JiOg: function(e, t, r) {
    "use strict";
    var a = {
      empty: "不能为空",
      format: "格式不正确",
      mobile: {
        length: "手机号为11位纯数字"
      },
      name: {
        min: "最小姓名长度为2个汉字",
        max: "最大姓名长度为8个汉字",
        format: "真实姓名必须为汉字"
      },
      number: "必须为数字",
      loginRequired: "登录超时或未登录",
      loginRequiredAndJump: "登录超时或未登录，即将跳转到登录页"
    }
      , n = r("i7/w")
      , i = new (r.n(n).a)
      , o = {
      11: {
        cardType: 30,
        coinPerCard: 3e3
      },
      12: {
        cardType: 15,
        coinPerCard: 1500
      },
      13: {
        cardType: 48,
        coinPerCard: 4800
      },
      14: {
        cardType: 5,
        coinPerCard: 500
      },
      16: {
        cardType: 50,
        coinPerCard: 5e3
      },
      17: {
        cardType: 100,
        coinPerCard: 1e4
      },
      18: {
        cardType: 500,
        coinPerCard: 5e4
      },
      20: {
        cardType: 10,
        coinPerCard: 600
      },
      21: {
        cardType: 15,
        coinPerCard: 900
      },
      22: {
        cardType: 5,
        coinPerCard: 300
      },
      23: {
        cardType: 15,
        coinPerCard: 1250
      },
      24: {
        cardType: 15,
        coinPerCard: 1050
      },
      25: {
        cardType: 30,
        coinPerCard: 2500
      },
      26: {
        cardType: 30,
        coinPerCard: 2100
      },
      27: {
        cardType: 30,
        coinPerCard: 1800
      },
      28: {
        cardType: 15,
        coinPerCard: 1300
      },
      29: {
        cardType: 30,
        coinPerCard: 2600
      },
      "04": {
        cardType: 576,
        coinPerCard: 57600
      }
    }
      , c = {
      GetCardInfo: function(e) {
        var t = "";
        if (e)
          return 13 === e.length && (t = e.substring(0, 2)),
          12 === e.length && (t = e.substring(3, 5),
            t = "00"),
            o[t]
      }
    }
      , s = r("gDS+")
      , u = r.n(s)
      , l = {
      getItem: function(e) {
        return JSON.parse(sessionStorage.getItem(e))
      },
      setItem: function(e, t) {
        sessionStorage.setItem(e, u()(t))
      },
      removeItem: function(e) {
        sessionStorage.removeItem(e)
      },
      clear: function() {
        sessionStorage.clear()
      }
    }
      , p = {
      setItem: function(e, t) {
        var r = (new Date).getTime();
        localStorage.setItem(e, u()({
          data: t,
          time: r
        }))
      },
      getItem: function(e, t) {
        var r = JSON.parse(localStorage.getItem(e));
        return r ? (new Date).getTime() - r.time > (t || 36e5) ? "expired" : r.data : r
      },
      removeItem: function(e) {
        localStorage.removeItem(e)
      }
    }
      , h = {
      account: "4-18位字母、数字、符号(下划线)组成",
      requiredAccount: "手机/邮箱/通行证",
      mobile: "1[3/4/5/6/7/8/9]开头",
      email: "xxx@xxx.xxx",
      realName: "2-16位汉字",
      idNumber: "18位",
      idNumberRear: "身份证号后6位",
      sixValidate: "6位数字",
      password: "8-32位字母/数字/符号至少两种",
      checkPass: "和上面密码一致",
      orders: "最多只能输入50个订单号，一行一个",
      order: "请输入订单号"
    }
      , d = {
      six_validate: "^\\d{6}$",
      mobile: "^(86)?1[3,4,5,6,7,8,9]\\d{9}$",
      email: "^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$",
      common_user_step: ["^[a-zA-Z]", "^[a-zA-Z0-9._]+$"],
      xoyo_password_step: ["^[0-9]+$", "^[a-zA-Z]+$", "^[\\x21-\\x2f\\x3a-\\x3f\\x5b\\x5d-\\x5f\\x60\\x7b\\x7d\\x7e\\x40]+$"],
      space: /\s/,
      duplicate_letter: /^(.)\1+$/,
      gm_filter: /^(gm)/i,
      word_filter: /^(bjsupport|kingsoft|cb|ks|gm|test|fs|jx|db|cq|blog|passport|vip|wps|system|duba|ciba|xoyo|kol|shqz|kw3p_|rbtjx3_|kq3p_|sw3p_|kios3p_|@xoyo.com|@kol.com)/i,
      string_filter: /pengliyuan|xijinping|hujintao|wenjiabao|jiangzemin|zhurongji|qiubojun|leijun|flg|falun|minghui|lihongzhi|tmd|nmd|fuck|sex|xxx|penis|viagra|tits|pussy|shit|damn|bastard|asshole|bitch|vagina|breast|root|admin|gamemaster|xoyo|kol|kingsoft/i,
      bank_card: "^\\d{15,19}$",
      id_card: "^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$",
      id_card_rear_six: "^\\d{5}[0-9Xx]$",
      chinese_spell: "[一-龥]",
      real_name_step: ["^[\\u4E00-\\u9FA5]+$", "^[\\u4E00-\\u9FA5]{2,8}$"],
      name: "[一-龥]{2,8}(?:·[一-龥]{2,8})*",
      xoyoUrl: /^((http:\/\/)|(https:\/\/))\w+.[\w.]*(xoyo.com)\/?\w*/gi
    }
      , m = function(e, t, r) {
      return t.match(d.space) ? r(new Error("不能有空格")) : d.xoyo_password_step.find(function(e) {
        return t.match(e)
      }) ? r(new Error("8-32位字母/数字/符号至少两种")) : t.match(d.chinese_spell) ? r(new Error("不能包含汉字")) : void r()
    }
      , f = function(e, t, r) {
      if (!t.match(d.common_user_step[0]))
        return r(new Error("首位必须是字母"));
      if (!t.match(d.common_user_step[1]))
        return r(new Error("账号格式不正确"));
      if (t.match(/_$/gi))
        return r(new Error("账号格式不正确"));
      if (-1 !== t.indexOf("."))
        return r(new Error("账号格式不正确"));
      var a = JSON.parse(sessionStorage.getItem("overallAccountRules"))
        , n = a.start
        , i = a.contain
        , o = a.end;
      t && (i.forEach(function(e) {
        if (t.toLocaleLowerCase().match(e))
          return r(new Error("账号包含非法字符"))
      }),
        n.forEach(function(e) {
          if (t.toLocaleLowerCase().match(e) && 0 === t.toLocaleLowerCase().indexOf(e))
            return r(new Error("账号包含非法字符"))
        }),
        o.forEach(function(e) {
          if (t.toLocaleLowerCase().match(e + "$"))
            return r(new Error("账号包含非法字符"))
        })),
        r()
    }
      , g = function(e) {
      var t = "";
      switch (e) {
        case "signup":
          t = "您还未成年，请年满18岁再来注册喔！";
          break;
        case "identity":
          t = "该身份证未满18岁不允许绑定"
      }
      return [{
        required: !0,
        message: "身份证号" + a.empty,
        trigger: "blur"
      }, {
        pattern: d.id_card,
        message: "身份证号" + a.format,
        trigger: "blur"
      }, {
        validator: function(e, r, a) {
          !function(e) {
            var t = e.substring(6, 10)
              , r = e.substring(10, 12)
              , a = e.substring(12, 14)
              , n = new Date
              , i = n.getFullYear()
              , o = n.getMonth() + 1
              , c = n.getDate()
              , s = i - t;
            return s > 18 || !(s < 18) && !(r > o) && (r < o || a <= c)
          }(r) ? a(new Error(t)) : a()
        },
        trigger: "blur"
      }]
    }
      , v = {
      account: [{
        required: !0,
        message: "通行证账号" + a.empty,
        trigger: "blur"
      }, {
        min: 4,
        message: "账号最小为4位字符",
        trigger: "blur"
      }, {
        validator: f,
        trigger: "blur"
      }],
      accountOnChange: [{
        required: !0,
        message: "通行证账号" + a.empty,
        trigger: "change"
      }, {
        min: 4,
        message: "账号最小为4位字符",
        trigger: "change"
      }, {
        validator: f,
        trigger: "change"
      }],
      email: [{
        required: !0,
        message: "邮箱" + a.empty,
        trigger: "blur"
      }, {
        pattern: d.email,
        message: "邮箱" + a.format,
        trigger: "blur"
      }],
      emailOnChange: [{
        required: !0,
        message: "邮箱" + a.empty,
        trigger: "change"
      }, {
        pattern: d.email,
        message: "邮箱" + a.format,
        trigger: "change"
      }],
      mobile: [{
        required: !0,
        message: "手机号" + a.empty,
        trigger: "blur"
      }, {
        pattern: d.mobile,
        message: "手机号" + a.format,
        trigger: "blur"
      }],
      mobileOnChange: [{
        required: !0,
        message: "手机号" + a.empty,
        trigger: "change"
      }, {
        pattern: d.mobile,
        message: "手机号" + a.format,
        trigger: "change"
      }],
      code: [{
        required: !0,
        message: "验证码" + a.empty,
        trigger: "blur"
      }, {
        pattern: d.six_validate,
        message: "验证码" + a.format,
        trigger: "blur"
      }],
      password: [{
        required: !0,
        message: "密码" + a.empty,
        trigger: "blur"
      }, {
        min: 8,
        message: "密码最小为8位字符",
        trigger: "blur"
      }, {
        validator: m,
        trigger: "blur"
      }],
      checkPass: [{
        required: !0,
        message: "请输入和上面一致的密码",
        trigger: "blur"
      }],
      name: [{
        required: !0,
        message: "真实姓名" + a.empty,
        trigger: "blur"
      }, {
        min: 2,
        message: "" + a.name.min,
        trigger: "blur"
      }, {
        pattern: d.chinese_spell,
        message: "" + a.name.format,
        trigger: "blur"
      }],
      idNumber: g("signup"),
      idNumberIdentity: g("identity"),
      idNumberRear: [{
        required: !0,
        message: "身份证号" + a.empty,
        trigger: "blur"
      }, {
        pattern: d.id_card_rear_six,
        message: "身份证号" + a.format,
        trigger: "blur"
      }],
      invoiceNumbers: [{
        required: !0,
        message: "订单号" + a.empty,
        trigger: "blur"
      }, {
        validator: function(e, t, r) {
          var a = t.split("\n").map(function(e) {
            return e.replace(/(^\s*)|(\s*$)/g, "")
          }).filter(function(e) {
            return !!e
          });
          a.length > 50 && r(new Error("超过50个订单")),
            a.forEach(function(e) {
              /^[a-zA-Z0-9]+$/.test(e) || r(new Error(e + ",不符合要求"))
            }),
            r()
        },
        trigger: "blur"
      }]
    }
      , _ = r("c6A/")
      , y = {
      pushState: function(e, t, r) {
        window.history.pushState && window.history.pushState(e, t, r)
      },
      replaceState: function(e, t, r) {
        window.history.replaceState && window.history.replaceState(e, t, r)
      }
    }
      , x = r("m1cH")
      , b = r.n(x)
      , k = r("QbLZ")
      , w = r.n(k)
      , C = r("Yz+Y")
      , A = r.n(C)
      , I = r("iCc5")
      , S = r.n(I)
      , O = r("V7oC")
      , j = r.n(O)
      , R = r("FYw3")
      , E = r.n(R)
      , T = r("tfYw")
      , P = r.n(T)
      , D = r("mRg0")
      , N = r.n(D)
      , G = r("gO8W")
      , L = r.n(G)
      , H = r("9zXB")
      , B = {
      disableGetRequireQsFromUrl: !1,
      apiAddress: "//st.xoyo.com/report/web",
      qsWhiteList: ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"],
      projectIdentifier: H.a.stIdentifier,
      debug: H.a.stDebug
    }
      , M = new (function(e) {
      function t() {
        return S()(this, t),
          E()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return N()(t, e),
        j()(t, [{
          key: "report",
          value: function(e) {
            var r = (Date.parse(new Date) - this.pageLoadTime) / 1e3;
            if (e) {
              var a = e.eventName
                , n = e.eventDescription
                , i = e.eventDataValue
                , o = e.eventGroup
                , c = e.eventTags
                , s = void 0 === c ? {} : c
                , u = this.projectIdentifier;
              P()(t.prototype.__proto__ || A()(t.prototype), "report", this).call(this, {
                projectIdentifier: u,
                eventName: a,
                eventGroup: o || "webstat",
                eventDescription: n,
                eventDataValue: w()({
                  td_pl: r
                }, i),
                eventTags: ["web", "webstat"].concat(b()(s))
              })
            } else
              P()(t.prototype.__proto__ || A()(t.prototype), "report", this).call(this)
          }
        }, {
          key: "trackClick",
          value: function(e, r) {
            P()(t.prototype.__proto__ || A()(t.prototype), "trackClick", this).call(this, e, r)
          }
        }, {
          key: "trackPageLoad",
          value: function() {
            this.pageLoadTime = Date.parse(new Date),
              P()(t.prototype.__proto__ || A()(t.prototype), "trackPageLoad", this).call(this)
          }
        }]),
        t
    }(L.a))(B);
    var U = {};
    function q(e) {
      var t = u()(U)
        , r = u()(e);
      return xoyoConsole.log("两者比较", t, r, t === r),
      t === r || (U = JSON.parse(r),
        !1)
    }
    var F = function() {
      function e() {
        S()(this, e),
          this.onSuccessList = [],
          this.data = {
            state: 1,
            data: {
              phrase: 123456
            }
          }
      }
      return j()(e, [{
        key: "reset",
        value: function() {
          xoyoConsole.log("reset!")
        }
      }, {
        key: "verify",
        value: function() {
          return this.onSuccessHandler(),
            this.data
        }
      }, {
        key: "onSuccess",
        value: function(e) {
          e && this.onSuccessList.push(e)
        }
      }, {
        key: "getValidate",
        value: function() {
          return this.data.data
        }
      }, {
        key: "onSuccessHandler",
        value: function() {
          this.onSuccessList.forEach(function(e) {
            e && e()
          })
        }
      }]),
        e
    }()
      , Q = r("14Xm")
      , Z = r.n(Q)
      , Y = r("D3Ub")
      , K = r.n(Y)
      , z = r("4d7F")
      , V = r.n(z)
      , J = r("4RXF")
      , W = r("GQeE")
      , X = r.n(W)
      , $ = r("EJiy")
      , ee = r.n($);
    var te = function() {
      var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
        , r = arguments[1];
      if (!(e = t) || "object" !== (void 0 === e ? "undefined" : ee()(e)) && "function" != typeof e || "function" != typeof e.then)
        throw new Error("请输入一个promise函数");
      return X()(r).length || xoyoConsole.warning("authParams 参数将被忽略"),
        t()
    };
    function re(e, t) {
      return new RegExp(" " + t + " ").test(" " + e.className + " ")
    }
    function ae(e, t) {
      re(e, t) || (e.className += " " + t)
    }
    function ne(e, t) {
      var r = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
      if (re(e, t)) {
        for (; r.indexOf(" " + t + " ") >= 0; )
          r = r.replace(" " + t + " ", " ");
        e.className = r.replace(/^\s+|\s+$/g, "")
      }
    }
    var ie = function e(t, r) {
      document.querySelector,
      document.querySelector && (document.querySelector(".auto-tips").style.display = "block",
        ae(document.querySelector(".auto-tips-content"), "auto-tips-fade-in"),
        ne(document.querySelector(".auto-tips-content"), "auto-tips-fade-out"),
        setTimeout(function() {
          ae(document.querySelector(".auto-tips-content"), "auto-tips-active")
        }, 300));
      var a = setTimeout(function() {
        0 !== t ? e(t - 1, r) : (document.querySelector && (ae(document.querySelector(".auto-tips-content"), "auto-tips-fade-out"),
          ne(document.querySelector(".auto-tips-content"), "auto-tips-fade-in"),
          setTimeout(function() {
            ne(document.querySelector(".auto-tips-content"), "auto-tips-active"),
              document.querySelector(".auto-tips").style.display = "none"
          }, 300)),
          setTimeout(function() {
            r && r()
          }, 400)),
          clearTimeout(a)
      }, 1e3)
    }
      , oe = r("dvty")
      , ce = r.n(oe)
      , se = r("tJFH")
      , ue = function() {
      function e(t, r) {
        var a = r.host
          , n = void 0 === a ? se.a.queueServer : a
          , i = r.needAuth
          , o = void 0 !== i && i
          , c = r.preAuthRequest
          , s = r.getTicketRequest
          , u = r.getResultRequest
          , l = r.authParams
          , p = void 0 === l ? {} : l
          , h = r.ticketParams
          , d = void 0 === h ? {} : h
          , m = r.resultParams
          , f = void 0 === m ? {} : m
          , g = r.scope
          , v = void 0 === g ? "" : g
          , _ = r.parentDom
          , y = void 0 === _ ? function() {
            return document.body
          }
          : _;
        S()(this, e),
          this.path = "/queueproxy",
          this.name = t,
          this.requestTime = 0,
          this.ticket = "",
          this.waiting = 0,
          this.result = {},
          this.host = n,
          this.scope = v,
          this.needAuth = o,
          this.preAuthRequest = c,
          this.getTicketRequest = s,
          this.getResultRequest = u,
          this.authParams = p,
          this.ticketParams = d,
          this.resultParams = f,
          this.parentDom = y
      }
      return j()(e, [{
        key: "wrapperCountDownDisplay",
        value: function(e) {
          return new V.a(function(t) {
              ie(e, t)
            }
          )
        }
      }, {
        key: "renderCountDown",
        value: function() {
          var e = K()(Z.a.mark(function e(t) {
            var r, a;
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r = this.getCostTime(t),
                      (a = document.createElement("div")).id = this.scope + "-tips",
                      a.innerHTML = ce.a,
                      this.parentDom().appendChild(a),
                      e.next = 7,
                      this.wrapperCountDownDisplay(r);
                  case 7:
                    this.removeCountDown();
                  case 8:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "removeCountDown",
        value: function() {
          var e = document.getElementById(this.scope + "-tips");
          e.parentNode.removeChild(e)
        }
      }, {
        key: "getCostTime",
        value: function(e) {
          var t = Math.ceil(.3 * Math.pow(2, this.requestTime));
          return e + (e > 5 || t > 5 ? 5 : t)
        }
      }, {
        key: "delay",
        value: function(e) {
          return new V.a(function(t) {
              setTimeout(function() {
                t()
              }, 1e3 * e)
            }
          )
        }
      }, {
        key: "delayAndDisplay",
        value: function() {
          var e = K()(Z.a.mark(function e(t) {
            var r;
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r = this.getCostTime(t),
                      e.next = 3,
                      this.delay(r);
                  case 3:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "preAuth",
        value: function() {
          var e = "" + this.host + this.path + "/auth";
          return this.needAuth && !this.preAuthRequest ? Object(J.a)(e, w()({}, this.authParams)) : this.preAuthRequest ? te(this.preAuthRequest, this.authParams) : V.a.resolve()
        }
      }, {
        key: "getTicket",
        value: function(e) {
          var t = "" + this.host + this.path + "/ticket";
          return this.requestTime = this.requestTime + 1,
            this.getTicketRequest ? te(this.getTicketRequest.bind(this, this.ticket), this.ticketParams) : Object(J.a)(t, w()({
              scope: this.scope
            }, e))
        }
      }, {
        key: "getResult",
        value: function() {
          var e = "" + this.host + this.path + "/result";
          return this.requestTime = this.requestTime + 1,
            this.getTicketRequest ? te(this.getResultRequest.bind(this, this.ticket), this.resultParams) : Object(J.a)(e, w()({
              scope: this.scope,
              ticket: this.ticket
            }, this.resultParams))
        }
      }, {
        key: "getTicketHandler",
        value: function() {
          var e = K()(Z.a.mark(function e(t) {
            var r, a, n, i, o, c;
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.getTicket(t);
                  case 2:
                    if (r = e.sent,
                      a = r.code,
                      n = r.message,
                      i = r.data,
                    1 * a != -30105 && 1 * a != 1) {
                      e.next = 12;
                      break
                    }
                    o = i.ticket,
                      c = i.waiting_second,
                      this.ticket = o,
                      this.waiting = c,
                      e.next = 13;
                    break;
                  case 12:
                    return e.abrupt("return", {
                      code: a,
                      message: n,
                      data: i
                    });
                  case 13:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "getResultHandler",
        value: function() {
          var e = K()(Z.a.mark(function e() {
            var t, r, a, n, i;
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.getResult();
                  case 2:
                    if (t = e.sent,
                      r = t.code,
                      a = t.data,
                    1 * r != -30105) {
                      e.next = 15;
                      break
                    }
                    return n = a.ticket,
                      i = a.waiting_second,
                      this.ticket = n,
                      e.next = 10,
                      this.renderCountDown(i);
                  case 10:
                    return e.next = 12,
                      this.getResultHandler();
                  case 12:
                    return e.abrupt("return", e.sent);
                  case 15:
                    return e.abrupt("return", {
                      code: r,
                      data: a
                    });
                  case 16:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function() {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "getStatus",
        value: function() {
          var e = K()(Z.a.mark(function e() {
            var t;
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return t = "" + this.host + this.path + "/status",
                      e.abrupt("return", Object(J.a)(t, {
                        scope: this.scope
                      }));
                  case 2:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function() {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "getStatusHandler",
        value: function() {
          var e = K()(Z.a.mark(function e() {
            var t, r, a, n, i, o;
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.getStatus();
                  case 2:
                    if (t = e.sent,
                      r = t.code,
                      a = t.data,
                      n = t.message,
                    1 * r != -30105) {
                      e.next = 16;
                      break
                    }
                    return i = a.ticket,
                      o = a.waiting_second,
                      this.ticket = i,
                      e.next = 11,
                      this.renderCountDown(o);
                  case 11:
                    return e.next = 13,
                      this.getResultHandler();
                  case 13:
                    return e.abrupt("return", e.sent);
                  case 16:
                    if (!(r > 0)) {
                      e.next = 20;
                      break
                    }
                    return e.abrupt("return", {
                      status: "status-success"
                    });
                  case 20:
                    return e.abrupt("return", {
                      status: "status-fail",
                      message: n
                    });
                  case 21:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function() {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "checkStatus",
        value: function() {
          var e = K()(Z.a.mark(function e() {
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.getStatusHandler();
                  case 2:
                    return this.result = e.sent,
                      e.abrupt("return", this.result);
                  case 4:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function() {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "run",
        value: function() {
          var e = K()(Z.a.mark(function e(t) {
            var r;
            return Z.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.preAuth();
                  case 2:
                    return e.next = 4,
                      this.getTicketHandler(t);
                  case 4:
                    if (r = e.sent) {
                      e.next = 14;
                      break
                    }
                    return e.next = 8,
                      this.renderCountDown(this.waiting);
                  case 8:
                    return e.next = 10,
                      this.getResultHandler();
                  case 10:
                    return this.result = e.sent,
                      e.abrupt("return", this.result);
                  case 14:
                    return e.abrupt("return", r);
                  case 15:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }]),
        e
    }()
      , le = r("AyUB")
      , pe = r.n(le);
    function he() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        , t = document.location.toString().split("?")
        , r = pe()(null);
      return t.length > 1 && (t = t[1].split("&")).forEach(function(e) {
        e = e.split("="),
          r[e[0]] = e[1]
      }),
        e ? u()(r) : r
    }
    r.d(t, "c", function() {
      return de
    }),
      r.d(t, "d", function() {
        return a
      }),
      r.d(t, "e", function() {
        return i
      }),
      r.d(t, "h", function() {
        return c
      }),
      r.d(t, !1, function() {
        return l
      }),
      r.d(t, "i", function() {
        return p
      }),
      r.d(t, "j", function() {
        return h
      }),
      r.d(t, "k", function() {
        return d
      }),
      r.d(t, "l", function() {
        return v
      }),
      r.d(t, !1, function() {
        return m
      }),
      r.d(t, !1, function() {
        return f
      }),
      r.d(t, "f", function() {
        return _.a
      }),
      r.d(t, !1, function() {
        return he
      }),
      r.d(t, "b", function() {
        return ue
      }),
      r.d(t, "n", function() {
        return y
      }),
      r.d(t, "m", function() {
        return M
      }),
      r.d(t, "g", function() {
        return q
      }),
      r.d(t, "a", function() {
        return F
      });
    var de = function(e) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          loadPageIndex: function() {
            e({
              eventName: "load_page_index",
              eventDescription: "游戏充值页面加载",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          },
          inputMoneyConfirm: function(t) {
            e({
              eventName: "input_money_confirm",
              eventDescription: "大金额确认输入框",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_val: t
              }
            })
          },
          chSumSelect: function(t) {
            e({
              eventName: "ch_sum_select",
              eventDescription: "选择或填写自定义充值金额",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_val: t
              }
            })
          },
          chOrderRecClick: function() {
            e({
              eventName: "ch_order_rec_click",
              eventDescription: "输入手机/邮箱",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          },
          chPayFinish: function(t, r, a) {
            e({
              eventName: "ch_pay_finish",
              eventDescription: "充值完成",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_order: t,
                status_1_0: r,
                ev_status_reason: a
              }
            })
          },
          payWay: function(t) {
            e({
              eventName: "payWay",
              eventDescription: "充值方式",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_val: t
              }
            })
          },
          chAccInputClick: function(t) {
            e({
              eventName: "ch_acc_input_click",
              eventDescription: "充值账号输入框",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_val: t
              }
            })
          },
          chAccCfInputClick: function(t) {
            e({
              eventName: "ch_acc_cf_input_click",
              eventDescription: "确认账号输入框",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_val: t
              }
            })
          },
          chAreaSelect: function(t) {
            e({
              eventName: "ch_area_select",
              eventDescription: "选择大区选择框",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_val: t
              }
            })
          },
          chTypeSelect: function(t) {
            e({
              eventName: "ch_type_select",
              eventDescription: "充值类型",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDataValue: {
                el_val: t
              }
            })
          },
          chSubFormClick: function() {
            e({
              eventName: "ch_sub_form_click",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDescription: "立即充值"
            })
          },
          chConfirmSubClick: function() {
            e({
              eventName: "ch_confirm_sub_click",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"],
              eventDescription: "确认无误"
            })
          },
          chPayOkClick: function() {
            e({
              eventName: "ch_pay_ok_click",
              eventDescription: "我已支付成功",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          },
          chPayResetClick: function() {
            e({
              eventName: "ch_pay_reset_click",
              eventDescription: "订单重新选择",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          },
          chPayReplyClick: function() {
            e({
              eventName: "ch_pay_reply_click",
              eventDescription: "再次支付",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          },
          chKcardNumClick: function() {
            e({
              eventName: "ch_kcard_num_click",
              eventDescription: "一卡通号码输入框",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          },
          chKcardPassClick: function() {
            e({
              eventName: "ch_kcard_pass_click",
              eventDescription: "一卡通密码输入框",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          },
          chKcoinPassClick: function() {
            e({
              eventName: "ch_kcoin_pass_click",
              eventDescription: "点击金山币支付密码输入框",
              eventGroup: "charge_xoyo_pc_20190704",
              eventTags: ["pc", "charge"]
            })
          }
        }
    }(M.report.bind(M))
  },
  KR5a: function(e, t, r) {
    "use strict";
    var a = r("JFUb")
      , n = Object(a.a)({
      name: "StoreTip"
    }, function() {
      this.$createElement;
      this._self._c;
      return this._m(0)
    }, [function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("p", {
        staticClass: "common-tips-color",
        staticStyle: {
          "line-height": "20px"
        }
      }, [this._v("\n  温馨提示： 若充值遇到问题，请联系客服028-85309911。"), t("br")])
    }
    ], !1, null, null, null);
    t.a = n.exports
  },
  Ly1x: function(e, t, r) {
    "use strict";
    var a = {
      name: "pay-way",
      props: ["list", "change", "disabled"],
      mixins: [r("7SIX").a],
      data: function() {
        return {
          currentId: null
        }
      },
      computed: {
        defaultCurrentChannel: function() {
          var e = this.list.filter(function(e) {
            return e.defaultActive
          })[0];
          return e || {}
        },
        selected: function() {
          return this.currentId ? this.currentId : this.defaultCurrentChannel.id
        }
      },
      watch: {
        defaultCurrentChannel: function(e) {
          e.id && this.clickHandle(e)
        }
      },
      methods: {
        clickHandle: function(e) {
          if (this.disabled)
            return this.$xoyo_api_common.warningDialog("当前状态下，不可更改充值方式！"),
              !1;
          this.change && this.change(e),
          e.url || (this.currentId = e.id)
        }
      }
    }
      , n = r("JFUb");
    var i = function(e) {
      r("h198")
    }
      , o = Object(n.a)(a, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("div", {
        staticClass: "pay-left-way-box"
      }, e._l(e.list, function(t) {
        return r("div", {
          staticClass: "way",
          class: {
            active: e.selected === t.id
          }
        }, [t.qr_url ? r("div", {
          staticClass: "way-qr"
        }, [r("p", [e._v(e._s(t.name))]), e._v(" "), r("div", {
          staticClass: "qr"
        }, [r("qriously", {
          attrs: {
            value: t.qr_url,
            size: 167
          }
        })], 1)]) : r("div", {
          staticClass: "way-wrap",
          attrs: {
            id: "pay_way_" + t.id
          },
          on: {
            click: function(r) {
              e.clickHandle(t)
            }
          }
        }, [r("span", {
          staticClass: "way-active-bar"
        }), e._v(" "), r("span", {
          staticClass: "way-icon"
        }, [r("img", {
          staticClass: "all-center",
          attrs: {
            src: t.icon,
            alt: ""
          }
        })]), e._v(" "), r("span", {
          staticClass: "way-text"
        }, [e._v(e._s(t.name))]), e._v(" "), t.extraIcon ? r("span", {
          staticClass: "way-extra-icon"
        }, [r("img", {
          staticClass: "all-center",
          attrs: {
            src: t.extraIcon,
            alt: ""
          }
        })]) : e._e()])])
      }))
    }, [], !1, i, null, null);
    t.a = o.exports
  },
  NB2D: function(e, t, r) {
    e.exports = r.p + "overall/img/badage-gain.6009dea4.png"
  },
  Np4R: function(e, t, r) {
    e.exports = r.p + "overall/img/icon-warning-normal.6a096d8f.png"
  },
  OqRZ: function(e, t, r) {
    e.exports = r.p + "overall/img/icon-hot.cde4eaca.jpg"
  },
  PAar: function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return g
    });
    var a = r("GQeE")
      , n = r.n(a)
      , i = r("Yz+Y")
      , o = r.n(i)
      , c = r("AyUB")
      , s = r.n(c)
      , u = r("QbLZ")
      , l = r.n(u)
      , p = r("iCc5")
      , h = r.n(p)
      , d = r("V7oC")
      , m = r.n(d)
      , f = r("vUrQ")
      , g = {
      default: "default",
      validate: "validate",
      reLogin: "reLogin"
    }
      , v = function() {
      function e() {
        h()(this, e),
          this.state = {
            visible: !1,
            account: "",
            link: "https://www-dev.xoyo.com",
            status: g.default,
            timestamp: (new Date).getTime(),
            iframe: {
              visible: !1,
              iframeSrc: ""
            }
          },
          this.mutations = {
            SET_ANTI_ADDICTION_STATE: this.setAntiAddictionState.bind(this),
            SET_STATUS: this.setStatus.bind(this),
            OPEN_ANTI_ADDICTION_IFRAME: this.openIframeModal.bind(this),
            CLOSE_ANTI_ADDICTION_IFRAME: this.closeIframeModal.bind(this),
            OPEN_ANTI_ADDICTION_TIPS: this.openTipsModal.bind(this),
            CLOSE_ANTI_ADDICTION_TIPS: this.closeTipsModal.bind(this)
          },
          this.actions = {
            reLogin: this.reLogin.bind(this),
            validate: this.validate.bind(this),
            checkAntiAddictionStatus: this.checkAntiAddictionStatus.bind(this),
            retry: this.retry.bind(this),
            changeReLogin: this.changeReLogin.bind(this)
          }
      }
      return m()(e, null, [{
        key: "clone",
        value: function(e) {
          return l()(s()(o()(e)), e)
        }
      }]),
        m()(e, [{
          key: "updateTimestamp",
          value: function() {
            this.timestamp = (new Date).getTime()
          }
        }, {
          key: "checkAntiAddictionStatus",
          value: function(e) {
            (0,
              e.commit)("CLOSE_ANTI_ADDICTION_TIPS")
          }
        }, {
          key: "changeReLogin",
          value: function(e) {
            (0,
              e.commit)("SET_STATUS", g.reLogin)
          }
        }, {
          key: "retry",
          value: function(e) {
            (0,
              e.commit)("SET_STATUS", g.default)
          }
        }, {
          key: "validate",
          value: function(e) {
            var t = e.commit;
            t("SET_STATUS", g.validate),
              t("OPEN_ANTI_ADDICTION_IFRAME")
          }
        }, {
          key: "reLogin",
          value: function() {
            var e = window.location.href;
            setTimeout(function() {
              window.location.href = f.a.signin.path + "?redirect=" + encodeURIComponent(e)
            }, 70)
          }
        }, {
          key: "openIframeModal",
          value: function(e) {
            e.iframe = {
              visible: !0,
              iframeSrc: e.link
            }
          }
        }, {
          key: "closeIframeModal",
          value: function(e) {
            e.iframe = {
              visible: !1,
              iframeSrc: ""
            }
          }
        }, {
          key: "setStatus",
          value: function(e, t) {
            e.status = t
          }
        }, {
          key: "setAntiAddictionState",
          value: function(e, t) {
            n()(t).forEach(function(r) {
              e[r] = t[r]
            }),
              e.visible = !0
          }
        }, {
          key: "openTipsModal",
          value: function(e) {
            e.visible = !0,
              e.timestamp = (new Date).getTime()
          }
        }, {
          key: "closeTipsModal",
          value: function(e) {
            e.visible = !1,
              e.timestamp = (new Date).getTime()
          }
        }]),
        e
    }();
    t.b = new v
  },
  PGij: function(e, t) {},
  ROst: function(e, t, r) {
    "use strict";
    t.a = {
      mounted: function() {
        var e = {
          charge: "4326d292a9c03c2463de34684ae2ffb5",
          future: "66c70b622ba6dde0ada6fe7d6977e146",
          games: "9084d3a5f890f3c2ffb26a72c7ea2925",
          help: "06890a9ba9866f125aeeacfd19cc27d3",
          i: "571ac9c21b19c71cacca3fd2e3bb49e3",
          kcoin: "62e3e2ebbf35284185419833688beae2",
          passport: "46f80dc3a0cd14ae73d995ead44bfc48",
          security: "e6a74aa376369e932c105f68b24e6232",
          vas: "7068e96910e698d26e2eaa5c965da549"
        }[window.location.hostname.split(".")[0]];
        e && (window._hmt = window._hmt || [],
          function() {
            var t = document.createElement("script");
            t.src = "https://hm.baidu.com/hm.js?" + e;
            var r = document.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(t, r)
          }())
      }
    }
  },
  SHBq: function(e, t, r) {
    e.exports = r.p + "overall/img/xoyo-logo-icharge.7c086490.png"
  },
  XYrE: function(e, t) {},
  ZAoj: function(e, t, r) {
    e.exports = r.p + "overall/img/icon-menu-pc.a7f45352.png"
  },
  ZqbV: function(e, t, r) {
    e.exports = r.p + "overall/img/icon-success-normal.35a0cdc4.png"
  },
  "c6A/": function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function getUrlParams(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        , r = window.location.search.substr(1).match(reg);
      return null !== r ? ~["true", "false"].indexOf(decodeURIComponent(r[2])) ? eval(decodeURIComponent(r[2])) : decodeURIComponent(r[2]) : null
    }
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return getUrlParams
    })
  },
  dKgL: function(e, t, r) {
    "use strict";
    var a = r("7SIX")
      , n = (r("iHPC"),
      {
        name: "ChargeRadioCustomItem",
        componentName: "ChargeRadioItem",
        props: ["value", "option", "error", "customStyle"],
        mixins: [a.a],
        inject: ["radio"],
        computed: {
          itemSelected: function() {
            return this.value === this.radio.value
          }
        },
        methods: {
          clickHandle: function(e) {
            this.dispatch("ChargeRadio", "chargeTypeSelect", [this, !0])
          }
        }
      })
      , i = r("JFUb")
      , o = Object(i.a)(n, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("div", [r("div", {
        staticClass: "xoyo-radio-other",
        class: {
          active: !this.error && e.itemSelected,
          error: this.error
        },
        style: e.customStyle ? e.customStyle : "",
        on: {
          click: function(t) {
            return t.stopPropagation(),
              e.clickHandle(t)
          }
        }
      }, [r("div", {
        staticClass: "xoyo-radio-other-btn"
      }, [e._t("default"), e._v("\n      " + e._s(e.customStyle) + "\n    ")], 2)])])
    }, [], !1, null, null, null);
    t.a = o.exports
  },
  dvty: function(e, t) {
    e.exports = '<div id="auto-tips">\n  <style type="text/css">\n    .auto-tips {\n      position: fixed;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.5);\n      display: none;\n    }\n    .auto-tips-box {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      width: 260px;\n      height: 60px;\n    }\n    .auto-tips-content {\n      position: relative;\n      padding:20px 0 ;\n      background: #fff;\n      border-radius: 5px;\n      -webkit-box-shadow: 1px 1px 2px #ccc;\n      box-shadow: 1px 1px 2px #ccc;\n      text-align: center;\n      font-size: 12px;\n      -webkit-transition: all 0.3s linear;\n      -o-transition: all 0.3s linear;\n      transition: all 0.3s linear;\n      opacity: 0;\n      color: #606266;\n    }\n    .auto-tips-fade-in {\n      -webkit-animation: fade_in .5s linear;\n      animation: fade_in .5s linear;\n    }\n    .auto-tips-fade-out {\n      -webkit-animation: fade_out .5s linear;\n      animation: fade_out .5s linear;\n    }\n    .auto-tips-active {\n      opacity: 1;\n    }\n    @-webkit-keyframes fade_in {\n      0% {\n        top: -5px;\n        opacity: 0;\n      }\n      100% {\n        top: 0;\n        opacity: 1;\n      }\n    }\n    @keyframes fade_in {\n      0% {\n        top: -5px;\n        opacity: 0;\n      }\n      100% {\n        top: 0;\n        opacity: 1;\n      }\n    }\n    @-webkit-keyframes fade_out {\n      0% {\n        top: 0px;\n        opacity: 1;\n      }\n      100% {\n        top: -5px;\n        opacity: 0;\n      }\n    }\n    @keyframes fade_out {\n      0% {\n        top: 0px;\n        opacity: 1;\n      }\n      100% {\n        top: -5px;\n        opacity: 0;\n      }\n    }\n\n  </style>\n  <div class="auto-tips">\n    <div class="auto-tips-box">\n      <div class="auto-tips-content">\n        \x3c!--正在排队，需要等待<span class="auto-tips-time"></span>秒。--\x3e\n        系统正在处理...<br/>\n        请耐心稍后片刻，不要关闭页面。\n        <p style="margin-top: 10px;"><img class="auto-img" src="data:image/gif;base64,R0lGODlhtAAyAPf/AM2LdLnF29vCudqahNbS2svL1ItXUfjcxvPs6sXEzMSak7aYk+W0pXNyjfr29Lm9yh8gOLestOOplOn8/1Volqx0Z/jMttWtonBXbTRIa86UhqxkTdbb5ameo+rj4+bz/aSLiOv1/iUyS7awtv7TufzhzEaI35uFhf39/uzTzPLc1+bu9Xhka7aHefPk4N7j6ePb2vPp5ePRzPTh20E6SP/85oplYunDrMW9xEtJU9SzqbGLh/7HrPz6+cbU6NrOzcmxrNLO0ryTievZ1Pr+/+Xl6Vd6tdzk8evo6VZxoOje3cyjm82po///6oeDlpl5cpdfV1c4OebKxEs3O/Xz88OjnF1cduPNyP/y3FlTauDV0ltMWb2tqpprZt3QzOX4//349UVoqt27seLY1uPs+a2kquW7sO3MxGRhff/34a+dnVVDY6OUmOLFvu7Su3lWWaiCffX//96ike3s78Wpo9O+urqfnk1di+WmjO7CtJtRP9OkhLOipP/q4OzW0GhTXP/r1ZqUnEJabPH///P2/Py3md7t/su8u/Tj1cWuqY52eaqVlcy0sIp6g/W9p8OzsJOMl6SZnt2sn82gllR0qNSik+Pf4di6sv/v2dGlm9nKxayLj+Geg/jx76KQkmxHU0VBU+7g3Pf6/uzEuVpFSdqwo9S3r9W9rtfh8EdQXNeqndSwpayRjOHCteCXf9m+uOnPyEtVd/Tv7v77+z8jK3xJSX2Hom9MSk1upMa7uunJv9KdkjwsOfft6tqyqP/n0FR4rNymmbmkob2pp095vu74/117r1l2p/P4+1t3q+zx+JCIjr14Y+Dh59DU3uHo8M7r//z7++SxmvKrkYRrbaF0buKsn0JObFw/PdeynFtPczxUgHpxdWttfu3Ywntrccipm+PIv+7KsJmCfqOhra6Zl9+4rZ+htMmNgXpfYPHv8UgSDpmrx83BwdbJxc/Jzt3Fv9fl+7CyvcOklbeqqrikqayAbVdTWcWDccG2ud7+/8a4tMm6t04vMP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MWZhNTIzMy01NWFlLTE2NDUtOTAyZC05NDVlODY1ZDUzM2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzJEM0U4Q0Q5MTc1MTFFOThEMDBFNjk2NDA5Q0Q1MkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzJEM0U4Q0M5MTc1MTFFOThEMDBFNjk2NDA5Q0Q1MkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdiMWI4MmM5LThmMWItYzk0MC1hY2ZmLTZjZmRmMDY4MTk0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MWZhNTIzMy01NWFlLTE2NDUtOTAyZC05NDVlODY1ZDUzM2QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOC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"></p>\n      </div>\n    </div>\n  </div>\n</div>\n\n'
  },
  fDck: function(e, t, r) {
    "use strict";
    var a = r("vUrQ")
      , n = r("JiOg")
      , i = {
      name: "ChargeTip",
      data: function() {
        return {
          faqPath: a.a.help.path + "?category=4104",
          kefuPath: "https://kefurobot.xoyo.com/webchatbot/chat.html?sysNum=1578898069071&sourceId=62211&lang=zh_CN",
          chargeOrderInquirePath: a.a.chargeOrderInquire.path
        }
      },
      methods: {
        openModal: function() {
          n.e.$emit("onRobotServiceModal")
        }
      }
    }
      , o = r("JFUb")
      , c = Object(o.a)(i, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("p", {
        staticClass: "common-tips-color",
        staticStyle: {
          "line-height": "20px"
        }
      }, [e._v("\n  温馨提示："), r("br"), e._v("\n  1、 若有疑问，可以尝试点击\n  "), r("a", {
        staticClass: "high-light-color",
        attrs: {
          href: e.faqPath,
          target: "_blank"
        }
      }, [e._v("充值FAQ")]), e._v("\n  或"), r("a", {
        staticClass: "high-light-color",
        staticStyle: {
          cursor: "pointer"
        },
        attrs: {
          target: "_self"
        },
        on: {
          click: e.openModal
        }
      }, [e._v("联系客服")]), e._v("；"), r("br"), e._v("\n  2、 如果您支付失败可通过"), r("a", {
        staticClass: "high-light-color",
        attrs: {
          href: e.chargeOrderInquirePath,
          target: "_blank"
        }
      }, [e._v("订单查询")]), e._v("重新提交您的订单。\n")])
    }, [], !1, null, null, null);
    t.a = c.exports
  },
  h198: function(e, t) {},
  i2LB: function(e, t) {},
  "i7/w": function(e, t) {
    e.exports = Vue
  },
  iHPC: function(e, t) {},
  iNKB: function(e, t, r) {
    "use strict";
    var a = r("JFUb");
    var n = function(e) {
      r("zmkA")
    }
      , i = Object(a.a)({
      name: "ChargeText",
      props: ["label", "text", "tips", "hightLight", "extraText"]
    }, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("div", [e.text ? r("el-form-item", {
        attrs: {
          label: e.label + ":"
        }
      }, [e.hightLight ? e._e() : r("span", [e._v("\n      " + e._s(e.text) + "\n    ")]), e._v(" "), e.hightLight ? r("span", {
        staticClass: "high-light-color fs30"
      }, [e._v("\n      " + e._s(e.text) + "\n    ")]) : e._e(), e._v(" "), e.extraText ? r("br") : e._e(), e._v(" "), e.extraText ? r("span", {
        staticClass: "high-light-color fb fs20"
      }, [e._v(e._s(e.extraText))]) : e._e()]) : e._e(), e._v(" "), e.tips ? r("p", {
        staticClass: "common-tips-color"
      }, [e._v(e._s(e.tips))]) : e._e()], 1)
    }, [], !1, n, "data-v-365ee3a0", null).exports
      , o = r("JiOg")
      , c = {
      name: "AccountInput",
      props: {
        refs: {
          type: Object
        },
        id: {
          type: String
        },
        form: {
          type: Object
        },
        account: {
          type: String,
          default: ""
        },
        prop: {
          type: String,
          default: ""
        },
        changeStatus: {
          type: Function
        },
        clickHandler: {
          type: Function
        },
        changeHandler: {
          type: Function
        }
      },
      data: function() {
        return {
          innerStatus: null
        }
      },
      computed: {
        show: function() {
          return "boolean" == typeof this.innerStatus ? this.innerStatus : !!this.account
        }
      },
      watch: {
        status: function() {
          this.innerStatus = null
        }
      },
      methods: {
        update: function() {
          this.innerStatus = !1,
          this.changeStatus && this.changeStatus()
        },
        accountClickHandler: function() {
          this.clickHandler && this.clickHandler("account")
        },
        repeatAccountClickHandler: function() {
          this.clickHandler && this.clickHandler("repeatAccount")
        },
        getRule: function(e) {
          this.form,
            this.prop;
          var t = {
            passport: [{
              required: !0,
              message: "账号" + o.d.empty,
              trigger: "blur"
            }],
            repeat_passport: [{
              required: !0,
              message: "请填写确认账号",
              trigger: "blur"
            }]
          };
          return this.status,
            t[e]
        },
        repeatAccountChangeHandler: function() {
          this.show || this.refs.validateField(this.prop + "[0]")
        },
        repeatAccountBlurHandler: function() {
          this.changeHandler && this.changeHandler("repeatAccount", this.form[this.prop][1])
        },
        accountChangeHandler: function() {
          this.changeHandler && this.changeHandler("account", this.form[this.prop][0])
        }
      }
    }
      , s = Object(a.a)(c, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("section", [r("el-form-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.show,
          expression: "show"
        }],
        attrs: {
          label: "充值账号:"
        }
      }, [r("el-input", {
        staticClass: "form-item",
        attrs: {
          disabled: "",
          value: e.account
        }
      }), e._v(" "), e._e()], 1), e._v(" "), e.show ? e._e() : r("el-form-item", {
        staticClass: "form-item",
        attrs: {
          label: "充值账号:",
          prop: e.prop + "[0]",
          rules: e.getRule("passport")
        }
      }, [r("el-input", {
        staticClass: "form-item",
        attrs: {
          id: e.id + "_account"
        },
        on: {
          focus: e.accountClickHandler,
          blur: e.accountChangeHandler
        },
        model: {
          value: e.form[e.prop] && e.form[e.prop][0],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 0, t)
          },
          expression: "form[prop] && form[prop][0]"
        }
      }), e._v(" "), r("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !1,
          expression: "false"
        }],
        staticClass: "site-tips common-tips-color"
      }, [e._v("（若留空则给当前登录账号" + e._s(e.account) + "充值）")])], 1), e._v(" "), r("el-form-item", {
        staticClass: "form-item",
        attrs: {
          label: "确认账号:",
          prop: e.prop + "[1]",
          rules: e.getRule("repeat_passport")
        }
      }, [r("el-input", {
        staticClass: "form-item",
        attrs: {
          id: e.id + "_repeat_account",
          onpaste: "return false"
        },
        on: {
          focus: e.repeatAccountClickHandler,
          blur: e.repeatAccountBlurHandler
        },
        nativeOn: {
          input: function(t) {
            return e.repeatAccountChangeHandler(t)
          }
        },
        model: {
          value: e.form[e.prop] && e.form[e.prop][1],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 1, t)
          },
          expression: "form[prop] && form[prop][1]"
        }
      })], 1)], 1)
    }, [], !1, null, null, null).exports
      , u = {
      on: !0,
      off: !1
    }
      , l = {
      name: "ServerSelect",
      props: ["form", "id", "prop", "options", "recentServer", "disabled", "changeHandler", "gameName"],
      computed: {
        selectDisable: function() {
          return u[this.disabled]
        },
        recentServerName: function() {
          return this.recentServer[0] ? this.recentServer[0].name : "无"
        }
      },
      methods: {
        getRule: function(e) {
          return {
            gateway: [{
              required: !0,
              message: "游戏大区" + o.d.empty,
              trigger: "change"
            }]
          }[e]
        },
        selectChangeHandler: function() {
          this.changeHandler && this.changeHandler()
        }
      }
    }
      , p = Object(a.a)(l, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return e.options.length ? r("el-form-item", {
        attrs: {
          label: "选择大区:",
          prop: e.prop,
          rules: e.getRule("gateway")
        }
      }, [r("el-select", {
        staticClass: "form-item",
        attrs: {
          id: e.id,
          disabled: e.selectDisable,
          placeholder: "请选择大区"
        },
        on: {
          change: e.selectChangeHandler
        },
        model: {
          value: e.form[e.prop],
          callback: function(t) {
            e.$set(e.form, e.prop, t)
          },
          expression: "form[prop]"
        }
      }, e._l(e.options, function(t) {
        return r("el-option", {
          key: t.value,
          attrs: {
            value: t.value,
            label: t.name,
            id: e.id + "_" + t.value
          }
        })
      })), e._v(" "), r("span", {
        staticClass: "site-tips common-tips-color"
      }, [e._v("最近选择: " + e._s(e.recentServerName))])], 1) : e._e()
    }, [], !1, null, null, null).exports
      , h = r("14Xm")
      , d = r.n(h)
      , m = r("QbLZ")
      , f = r.n(m)
      , g = r("4d7F")
      , v = r.n(g)
      , _ = r("D3Ub")
      , y = r.n(_)
      , x = {
      name: "KingsoftCard",
      props: ["form", "id", "prop", "refs", "getChargeType", "clickHandler"],
      data: function() {
        return {
          kcardModal: !1,
          kcardForm: {},
          cardInfo: {}
        }
      },
      watch: {
        form: {
          handler: function(e) {
            var t = this.prop
              , r = o.h.GetCardInfo(e[t][0]);
            r && this.getChargeType && r.cardType !== this.cardInfo.cardType && (this.cardInfo = r,
              this.getChargeType(r))
          },
          deep: !0
        }
      },
      methods: {
        getRule: function(e) {
          return {
            kcard_num: [{
              required: !0,
              message: "一卡通卡号不能为空",
              trigger: "blur"
            }, {
              validator: function(e, t, r) {
                if (!o.h.GetCardInfo(t))
                  return r(new Error("金山一卡通格式不正确"));
                r()
              },
              trigger: ["blur", "change"]
            }],
            kcard_password: [{
              required: !0,
              message: "一卡通密码不能为空",
              trigger: "blur"
            }]
          }[e]
        },
        closeKcardModal: function() {
          this.kcardForm = {},
            this.kcardModal = !1
        },
        validateKcard: function() {
          var e = y()(d.a.mark(function e() {
            var t, r, a, n, i, o, c, s, u = this;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return t = this.form,
                      r = this.prop,
                      a = new v.a(function(e) {
                          u.refs.validateField(u.prop + "[0]", function(t) {
                            e(t[0])
                          })
                        }
                      ),
                      e.next = 4,
                      a;
                  case 4:
                    if (e.sent) {
                      e.next = 19;
                      break
                    }
                    return e.next = 8,
                      this.$xoyo_api_common.captchaHandler.verify({
                        version: "v4"
                      });
                  case 8:
                    if (1 === (n = e.sent).state) {
                      e.next = 11;
                      break
                    }
                    return e.abrupt("return", !1);
                  case 11:
                    return e.next = 13,
                      this.$xoyo_api_pay.checkKcard(f()({
                        card_id: t[r][0],
                        geetest_ctype: "web"
                      }, n.data));
                  case 13:
                    i = e.sent,
                      o = i.status,
                      c = i.data,
                      s = i.message,
                      this.$xoyo_api_common.captchaHandler.reset(),
                      o > 0 && 6006 !== o ? (this.kcardForm = c,
                        this.kcardModal = !0,
                        this.xoyoStatisticsReport("ch_kcard_status_click", "点击一卡通有效性查询", {
                          api_sta: c.card_status
                        }, ["xoyo_charge"])) : (this.$xoyo_api_common.errorDialog(s),
                        this.xoyoStatisticsReport("ch_kcard_status_click", "点击一卡通有效性查询", {
                          api_sta: s
                        }, ["xoyo_charge"]));
                  case 19:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function() {
            return e.apply(this, arguments)
          }
        }(),
        kcardNumClickHandler: function() {
          this.clickHandler && this.clickHandler("kcardNum")
        },
        kcardPasswordClickHandler: function() {
          this.clickHandler && this.clickHandler("kcardPassword")
        }
      }
    };
    var b = function(e) {
      r("2+xK")
    }
      , k = Object(a.a)(x, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("section", [r("el-form-item", {
        attrs: {
          label: "一卡通号码:",
          prop: e.prop + "[0]",
          rules: e.getRule("kcard_num")
        }
      }, [r("el-input", {
        staticClass: "form-item",
        attrs: {
          id: e.id + "_num"
        },
        on: {
          focus: e.kcardNumClickHandler
        },
        model: {
          value: e.form[e.prop] && e.form[e.prop][0],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 0, "string" == typeof t ? t.trim() : t)
          },
          expression: "form[prop] && form[prop][0]"
        }
      }), e._v(" "), r("span", {
        staticClass: "site-tips common-tips-color"
      }, [r("a", {
        staticClass: "high-light-color",
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: e.validateKcard
        }
      }, [e._v("一卡通有效性查询")])])], 1), e._v(" "), r("el-form-item", {
        attrs: {
          label: "一卡通密码:",
          prop: e.prop + "[1]",
          rules: e.getRule("kcard_password")
        }
      }, [r("el-input", {
        staticClass: "form-item",
        attrs: {
          type: "password",
          id: e.id + "_pwd"
        },
        on: {
          focus: e.kcardPasswordClickHandler
        },
        model: {
          value: e.form[e.prop] && e.form[e.prop][1],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 1, "string" == typeof t ? t.trim() : t)
          },
          expression: "form[prop] && form[prop][1]"
        }
      })], 1), e._v(" "), r("el-dialog", {
        attrs: {
          visible: e.kcardModal,
          "append-to-body": !0
        },
        on: {
          "update:visible": function(t) {
            e.kcardModal = t
          }
        }
      }, [r("div", {
        staticClass: "title fs18 fb"
      }, [e._v("一卡通有效性查询结果")]), e._v(" "), r("div", {
        staticClass: "confirm-form"
      }, [r("div", {
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("卡号:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.card_id))])]), e._v(" "), r("div", {
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("类型:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.card_type))])]), e._v(" "), r("div", {
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("使用状态:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.card_status))])]), e._v(" "), r("div", {
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("过期时间:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.end_date))])]), e._v(" "), r("section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "已使用" === e.kcardForm.card_status,
          expression: "kcardForm.card_status === '已使用'"
        }]
      }, [r("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.kcardForm.recharge_product,
          expression: "kcardForm.recharge_product"
        }],
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("充值产品:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.recharge_product))])]), e._v(" "), r("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.kcardForm.recharge_passport,
          expression: "kcardForm.recharge_passport"
        }],
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("充值账号:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.recharge_passport))])]), e._v(" "), r("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.kcardForm.recharge_time,
          expression: "kcardForm.recharge_time"
        }],
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("充值时间:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.recharge_time))])]), e._v(" "), r("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.kcardForm.recharge_client_ip,
          expression: "kcardForm.recharge_client_ip"
        }],
        staticClass: "confirm-form-item"
      }, [r("div", {
        staticClass: "confirm-form-item-label"
      }, [e._v("充值IP:")]), e._v(" "), r("div", {
        staticClass: "confirm-form-item-content"
      }, [e._v(e._s(e.kcardForm.recharge_client_ip))])])])]), e._v(" "), r("p", {
        staticClass: "pd-v-20",
        attrs: {
          align: "center"
        }
      }, [r("a", {
        staticClass: "large-red-btn",
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: e.closeKcardModal
        }
      }, [e._v("关 闭")])])])], 1)
    }, [], !1, b, null, null).exports
      , w = r("vUrQ")
      , C = {
      name: "KcoinPwd",
      props: ["form", "id", "prop", "clickHandler"],
      data: function() {
        return {
          kcoinPwdPath: w.a.kcoinPwdSetting.path
        }
      },
      methods: {
        getRule: function(e) {
          return {
            kcoin_password: [{
              required: !0,
              message: "支付密码不能为空",
              trigger: "blur"
            }]
          }[e]
        },
        passwordClick: function() {
          this.clickHandler && this.clickHandler("kcoinPwd")
        },
        forgetClick: function() {
          this.clickHandler && this.clickHandler("forgetKcoinPwd")
        }
      }
    }
      , A = Object(a.a)(C, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("el-form-item", {
        attrs: {
          label: "支付密码:",
          prop: e.prop,
          rules: e.getRule("kcoin_password")
        }
      }, [r("el-input", {
        staticClass: "form-item",
        attrs: {
          type: "password",
          id: e.id,
          placeholder: "金山币支付密码"
        },
        on: {
          focus: e.passwordClick
        },
        model: {
          value: e.form[e.prop],
          callback: function(t) {
            e.$set(e.form, e.prop, t)
          },
          expression: "form[prop]"
        }
      })], 1)
    }, [], !1, null, null, null).exports
      , I = {
      name: "ChargeReceive",
      props: ["form", "prop", "id", "label", "changeHandler", "clickHandler", "refs"],
      data: function() {
        return {
          isOpen: !0
        }
      },
      methods: {
        changeType: function(e) {
          var t = this;
          this.changeHandler && this.changeHandler("receiveSelect", e),
            this.$nextTick(function() {
              t.refs.validateField(t.prop + "[1]")
            })
        },
        recieveClick: function() {
          var e = this.form
            , t = this.prop;
          this.changeHandler && this.clickHandler("receiveInput", e[t][0])
        },
        getRules: function(e) {
          var t = {
            email: o.l.emailOnChange,
            mobile: o.l.mobileOnChange
          };
          return t[e].slice(1, 2)
        }
      }
    };
    var S, O, j, R = function(e) {
      r("Irni")
    }, E = Object(a.a)(I, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("section", [r("el-form-item", {
        attrs: {
          label: e.label + ":",
          prop: e.prop + "[1]",
          rules: e.getRules(e.form[e.prop][0])
        }
      }, [r("el-input", {
        staticClass: "form-item",
        staticStyle: {
          width: "300px"
        },
        attrs: {
          id: e.id + "_input"
        },
        on: {
          focus: e.recieveClick
        },
        model: {
          value: e.form[e.prop][1],
          callback: function(t) {
            e.$set(e.form[e.prop], 1, t)
          },
          expression: "form[prop][1]"
        }
      }, [r("el-select", {
        staticStyle: {
          width: "90px"
        },
        attrs: {
          slot: "prepend",
          id: e.id,
          placeholder: "请选择接收方式"
        },
        on: {
          change: e.changeType
        },
        slot: "prepend",
        model: {
          value: e.form[e.prop][0],
          callback: function(t) {
            e.$set(e.form[e.prop], 0, t)
          },
          expression: "form[prop][0]"
        }
      }, [r("el-option", {
        key: "phone",
        attrs: {
          value: "mobile",
          id: e.id + "_mobile",
          label: "手机"
        }
      }), e._v(" "), r("el-option", {
        key: "email",
        attrs: {
          value: "email",
          id: e.id + "_email",
          label: "邮箱"
        }
      })], 1)], 1), e._v(" "), e.isOpen ? r("p", {
        staticClass: "tips"
      }, [e._v("选填，默认给充值账号的绑定手机发送订单信息，\n      "), r("span", {
        staticClass: "high-light-color"
      }, [e._v("\n        充值订单号是虚假身份证重置、发票开具的重要凭证，请妥善保存！\n    ")])]) : e._e()], 1)], 1)
    }, [], !1, R, null, null).exports, T = r("YEIV"), P = r.n(T), D = r("xVKV"), N = r("IYAZ"), G = {
      name: "ChargeType",
      props: {
        id: {
          type: String
        },
        label: {
          type: String
        },
        form: {
          type: Object
        },
        options: {
          type: Array,
          default: function() {
            return []
          }
        },
        prop: {
          type: String
        },
        clickHandler: {
          type: Function
        }
      },
      components: (S = {},
        P()(S, D.a.name, D.a),
        P()(S, N.a.name, N.a),
        S),
      methods: {
        getRules: function(e) {
          return {
            recharge_type: [{
              type: "number",
              required: !0,
              message: "请选择充值类型",
              trigger: "blur"
            }]
          }[e]
        }
      }
    }, L = Object(a.a)(G, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return e.options.length ? r("el-form-item", {
        attrs: {
          label: e.label + ":",
          prop: e.prop,
          rules: e.getRules("recharge_type")
        }
      }, [r("charge-radio", {
        model: {
          value: e.form[e.prop],
          callback: function(t) {
            e.$set(e.form, e.prop, t)
          },
          expression: "form[prop]"
        }
      }, e._l(e.options, function(t, a) {
        return r("charge-radio-item", {
          key: a,
          attrs: {
            id: e.id + "_" + t.recharge_type,
            value: t.recharge_type,
            option: t
          },
          nativeOn: {
            click: function(t) {
              return e.clickHandler(t)
            }
          }
        })
      }))], 1) : e._e()
    }, [], !1, null, null, null).exports, H = r("dKgL"), B = {
      name: "ChargeMoney",
      props: {
        id: {
          type: String
        },
        label: {
          type: String
        },
        form: {
          type: Object
        },
        options: {
          type: Array,
          default: function() {
            return []
          }
        },
        opposite: {
          type: Boolean,
          default: !1
        },
        extra: {
          type: Object
        },
        prop: {
          type: String
        },
        clickHandler: {
          type: Function
        },
        changeHandler: {
          type: Function
        },
        typeName: {
          type: String
        },
        unitName: {
          type: String
        },
        _customPlaceholder: {
          type: String,
          default: "其他金额"
        },
        tips: {
          type: String
        }
      },
      data: function() {
        return {
          customWarning: !1
        }
      },
      computed: {
        customPlaceholder: function() {
          return "最大" + this.unitType + ": " + this.maxUnit + this.typeName
        },
        customWarningStyle: function() {
          return this.customWarning ? "error" : ""
        },
        unitList: function() {
          var e = this.typeName
            , t = this.unitName
            , r = this.opposite;
          return this.options.map(function(a) {
            return f()({
              title: "" + a.cost + e,
              description: "共" + a.gain + t,
              tips: a.additions ? "含赠送" + a.additions + (r ? e : t) : null,
              icon: a.additions
            }, a)
          })
        },
        unitType: function() {
          return this.opposite ? "数量" : "金额"
        },
        customOption: function() {
          return this.extra ? {
            title: "自定义",
            description: "自定义金额"
          } : {}
        },
        minUnit: function() {
          var e = this.extra
            , t = this.opposite;
          return e ? t ? e.min_num : e.cost * e.min_num : 0
        },
        maxUnit: function() {
          if (this.extra) {
            var e = this.extra;
            return this.opposite ? e.max_num : e.cost * e.max_num
          }
          return 0
        }
      },
      components: (O = {},
        P()(O, D.a.name, D.a),
        P()(O, N.a.name, N.a),
        P()(O, "ChargeRadioCustomItem", H.a),
        O),
      methods: {
        getRules: function(e) {
          var t = this;
          return {
            recharge_unit: [{
              required: !0,
              validator: function(e, r, a) {
                if (!r[0] && "number" != typeof r[0])
                  return a(new Error("充值" + t.unitType + "不能为空"));
                a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                if (-2e3 === r[0] && !r[1])
                  return t.customWarning = !0,
                    a(new Error("充值" + t.unitType + "不能为空"));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                var n = t.maxUnit;
                if (-2e3 === r[0] && r[1] && r[1] > n)
                  return t.customWarning = !0,
                    a(new Error("最大自定义" + t.unitType + "不能超过" + n + t.typeName));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                var n = t.minUnit;
                if (-2e3 === r[0] && r[1] && r[1] < n)
                  return t.customWarning = !0,
                    a(new Error("最小自定义" + t.unitType + "不能少于" + n + t.typeName));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                if (t.opposite) {
                  if (-2e3 === r[0] && r[1] && r[1] % t.extra.gain != 0)
                    return t.customWarning = !0,
                      a(new Error("自定义" + t.unitType + "必须是" + t.extra.gain + "的倍数"))
                } else if (-2e3 === r[0] && r[1] && r[1] % t.extra.cost != 0)
                  return t.customWarning = !0,
                    a(new Error("自定义" + t.unitType + "必须是" + t.extra.cost + "的倍数"));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }]
          }[e]
        },
        customFocusHandler: function() {
          this.form[this.prop][0] = -2e3
        }
      }
    }, M = Object(a.a)(B, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return e.options.length ? r("section", [r("el-form-item", {
        attrs: {
          label: e.label + ":",
          prop: "" + e.prop,
          rules: e.getRules("recharge_unit")
        }
      }, [r("charge-radio", {
        model: {
          value: e.form[e.prop] && e.form[e.prop][0],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 0, t)
          },
          expression: "form[prop] && form[prop][0]"
        }
      }, [e._l(e.unitList, function(t, a) {
        return r("charge-radio-item", {
          key: a,
          attrs: {
            value: t.cost,
            option: t,
            id: e.id + "_" + t.cost
          },
          nativeOn: {
            click: function(t) {
              return e.clickHandler(t)
            }
          }
        })
      }), e._v(" "), e.extra ? r("div", {
        staticStyle: {
          width: "540px",
          height: "40px",
          display: "inline-block"
        }
      }, [r("charge-radio-custom-item", {
        staticStyle: {
          float: "left"
        },
        attrs: {
          error: e.customWarningStyle,
          id: e.id + "_custom",
          value: -2e3,
          option: e.customOption
        },
        nativeOn: {
          click: function(t) {
            return e.clickHandler(t)
          }
        }
      }, [r("el-input", {
        attrs: {
          id: e.id + "_input",
          maxlength: e.maxUnit.toString().length,
          placeholder: e.customPlaceholder
        },
        on: {
          focus: e.customFocusHandler
        },
        nativeOn: {
          change: function(t) {
            return e.changeHandler(t)
          }
        },
        model: {
          value: e.form[e.prop] && e.form[e.prop][1],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 1, t)
          },
          expression: "form[prop] && form[prop][1]"
        }
      }, [r("span", {
        attrs: {
          slot: "append"
        },
        slot: "append"
      }, [e._v(e._s(e.typeName))])])], 1), e._v(" "), r("div", {
        staticStyle: {
          "padding-left": "10px",
          height: "40px",
          "line-height": "40px",
          float: "left",
          color: "#8a8a8a"
        }
      }, [e._v("请输入" + e._s(e.unitType))])], 1) : e._e()], 2)], 1), e._v(" "), e.tips ? r("el-form-item", {
        staticStyle: {
          "margin-bottom": "0px"
        },
        attrs: {
          label: ""
        }
      }, [r("p", {
        staticStyle: {
          "font-size": "12px",
          color: "#8a8a8a"
        }
      }, [e._v(e._s(e.tips))])]) : e._e()], 1) : e._e()
    }, [], !1, null, null, null).exports, U = r("7SIX"), q = {
      name: "ChargeRadioItem",
      componentName: "ChargeRadioItem",
      props: ["value", "option"],
      mixins: [U.a],
      inject: ["radio"],
      computed: {
        itemSelected: function() {
          return this.value === this.radio.value
        }
      },
      methods: {
        clickHandle: function(e) {
          this.dispatch("ChargeRadio", "chargeTypeSelect", [this, !0])
        }
      }
    }, F = Object(a.a)(q, function() {
      var e = this
        , t = e.$createElement
        , a = e._self._c || t;
      return a("div", {
        staticClass: "xoyo-radio",
        class: {
          active: e.itemSelected
        },
        on: {
          click: function(t) {
            return t.stopPropagation(),
              e.clickHandle(t)
          }
        }
      }, [a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.option.icon,
          expression: "option.icon"
        }],
        staticClass: "badage-gain"
      }, [a("img", {
        attrs: {
          src: r("NB2D"),
          alt: ""
        }
      })]), e._v(" "), a("div", {
        staticClass: "xoyo-radio-btn"
      }, [e._v(e._s(e.option.title))]), e._v(" "), a("div", {
        staticClass: "xoyo-radio-tips"
      }, [a("p", [e._v(e._s(e.option.description))]), e._v(" "), a("p", {
        staticStyle: {
          color: "#b62929"
        }
      }, [e._v(e._s(e.option.tips))])])])
    }, [], !1, null, null, null).exports, Q = {
      name: "ChargeMoney",
      props: {
        id: {
          type: String
        },
        label: {
          type: String
        },
        form: {
          type: Object
        },
        options: {
          type: Array,
          default: function() {
            return []
          }
        },
        opposite: {
          type: Boolean,
          default: !1
        },
        extra: {
          type: Object
        },
        prop: {
          type: String
        },
        clickHandler: {
          type: Function
        },
        changeHandler: {
          type: Function
        },
        typeName: {
          type: String
        },
        unitName: {
          type: String
        },
        _customPlaceholder: {
          type: String,
          default: "其他金额"
        },
        tips: {
          type: String
        }
      },
      data: function() {
        var e = this;
        return {
          customMoney: "",
          customWarning: !1,
          confirmVisible: !1,
          confirmText: "",
          confirmForm: {
            confirm: ""
          },
          confirmRule: {
            confirm: {
              required: !0,
              validator: function(t, r, a) {
                var n = "我确认充值" + e.form[e.prop][1] + "元人民币";
                if (r.trim() !== n)
                  return a(new Error("请输入正确的确认文案"));
                a()
              },
              trigger: "change"
            }
          }
        }
      },
      computed: {
        customPlaceholder: function() {
          return "最大" + this.unitType + ": " + this.maxUnit + this.typeName
        },
        customWarningStyle: function() {
          return this.customWarning ? "error" : ""
        },
        unitList: function() {
          var e = this.typeName
            , t = this.unitName
            , r = this.opposite;
          return this.options.map(function(a) {
            return f()({
              title: "" + a.cost + e,
              description: "共" + a.gain + t,
              tips: a.additions ? "含赠" + a.additions + (r ? e : t) : null,
              icon: a.additions
            }, a)
          })
        },
        unitType: function() {
          return this.opposite ? "数量" : "金额"
        },
        customOption: function() {
          return this.extra ? {
            title: "自定义",
            description: "自定义金额"
          } : {}
        },
        minUnit: function() {
          var e = this.extra
            , t = this.opposite;
          return e ? t ? e.min_num : e.cost * e.min_num : 0
        },
        maxUnit: function() {
          if (this.extra) {
            var e = this.extra;
            return this.opposite ? e.max_num : e.cost * e.max_num
          }
          return 0
        }
      },
      components: (j = {},
        P()(j, D.a.name, D.a),
        P()(j, F.name, F),
        P()(j, "ChargeRadioCustomItem", H.a),
        j),
      methods: {
        handleConfirmClose: function() {
          this.confirmVisible = !1,
            this.confirmText = "",
            this.form[this.prop][1] = "",
            this.$forceUpdate(),
            o.e.$emit("hideSum", !0)
        },
        handleConfirm: function() {
          var e = this;
          this.$refs.confirmForm.validate(function(t) {
            t && (e.confirmForm.confirm = "",
              e.confirmVisible = !1)
          });
          var t = this.form[this.prop][1];
          this.dataReport.inputMoneyConfirm(t)
        },
        getRules: function(e) {
          var t = this;
          return {
            recharge_unit: [{
              required: !0,
              validator: function(e, r, a) {
                if (!r[0] && "number" != typeof r[0])
                  return a(new Error("充值" + t.unitType + "不能为空"));
                a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                if (-2e3 === r[0] && !r[1])
                  return t.customWarning = !0,
                    a(new Error("充值" + t.unitType + "不能为空"));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                var n = t.maxUnit;
                if (-2e3 === r[0] && r[1] && r[1] > n)
                  return t.customWarning = !0,
                    a(new Error("最大自定义" + t.unitType + "不能超过" + n + t.typeName));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                var n = t.minUnit;
                if (-2e3 === r[0] && r[1] && r[1] < n)
                  return t.customWarning = !0,
                    a(new Error("最小自定义" + t.unitType + "不能少于" + n + t.typeName));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }, {
              validator: function(e, r, a) {
                if (t.opposite) {
                  if (-2e3 === r[0] && r[1] && r[1] % t.extra.gain != 0)
                    return t.customWarning = !0,
                      a(new Error("自定义" + t.unitType + "必须是" + t.extra.gain + "的倍数"))
                } else if (-2e3 === r[0] && r[1] && r[1] % t.extra.cost != 0)
                  return t.customWarning = !0,
                    a(new Error("自定义" + t.unitType + "必须是" + t.extra.cost + "的倍数"));
                t.customWarning = !1,
                  a()
              },
              trigger: "change"
            }]
          }[e]
        },
        customFocusHandler: function() {
          this.form[this.prop][0] = -2e3
        },
        customBlurHandler: function() {
          if (this.form[this.prop][1] >= 2e3 && !this.customWarning) {
            this.confirmVisible = !0;
            var e = this.form[this.prop][1];
            this.dataReport.inputMoneyConfirm(e)
          }
        }
      }
    };
    var Z = function(e) {
      r("AvWT")
    }
      , Y = Object(a.a)(Q, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return e.options.length ? r("section", [r("el-form-item", {
        attrs: {
          label: e.label + ":",
          prop: "" + e.prop,
          rules: e.getRules("recharge_unit")
        }
      }, [r("charge-radio", {
        model: {
          value: e.form[e.prop] && e.form[e.prop][0],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 0, t)
          },
          expression: "form[prop] && form[prop][0]"
        }
      }, [e._l(e.unitList, function(t, a) {
        return r("charge-radio-item", {
          key: a,
          attrs: {
            value: t.cost,
            option: t,
            id: e.id + "_" + t.cost
          },
          nativeOn: {
            click: function(t) {
              return e.clickHandler(t)
            }
          }
        })
      }), e._v(" "), e.extra ? r("div", {
        staticStyle: {
          width: "540px",
          height: "40px",
          display: "inline-block"
        }
      }, [r("charge-radio-custom-item", {
        staticStyle: {
          float: "left"
        },
        attrs: {
          error: e.customWarningStyle,
          id: e.id + "_custom",
          value: -2e3,
          option: e.customOption
        },
        nativeOn: {
          click: function(t) {
            return e.clickHandler(t)
          }
        }
      }, [r("el-input", {
        attrs: {
          id: e.id + "_input",
          maxlength: e.maxUnit.toString().length,
          placeholder: e.customPlaceholder
        },
        on: {
          focus: e.customFocusHandler,
          blur: e.customBlurHandler
        },
        nativeOn: {
          change: function(t) {
            return e.changeHandler(t)
          }
        },
        model: {
          value: e.form[e.prop] && e.form[e.prop][1],
          callback: function(t) {
            e.$set(e.form[e.prop] && e.form[e.prop], 1, t)
          },
          expression: "form[prop] && form[prop][1]"
        }
      }, [r("span", {
        attrs: {
          slot: "append"
        },
        slot: "append"
      }, [e._v(e._s(e.typeName))])])], 1), e._v(" "), r("div", {
        staticStyle: {
          "padding-left": "10px",
          height: "40px",
          "line-height": "40px",
          float: "left",
          color: "#8a8a8a"
        }
      }, [e._v("请输入" + e._s(e.unitType))])], 1) : e._e()], 2)], 1), e._v(" "), e.tips ? r("el-form-item", {
        staticStyle: {
          "margin-bottom": "0px",
          "margin-top": "-22px"
        },
        attrs: {
          label: ""
        }
      }, [r("div", {
        staticClass: "jx3-tips",
        staticStyle: {
          "font-size": "12px",
          color: "#8a8a8a"
        }
      }, [r("span", [e._v(e._s(e.tips))])])]) : e._e(), e._v(" "), r("el-dialog", {
        attrs: {
          visible: e.confirmVisible,
          title: "温馨提示",
          center: !0,
          width: "30%",
          "modal-append-to-body": !1,
          "close-on-press-escape": !1,
          "close-on-click-modal": !1,
          "before-close": e.handleConfirmClose,
          "append-to-body": !0
        },
        on: {
          "update:visible": function(t) {
            e.confirmVisible = t
          }
        }
      }, [r("p", {
        staticStyle: {
          margin: "10px"
        },
        attrs: {
          align: "center"
        }
      }, [r("span", [e._v("本次充值金额较大，请在输入框输入：")])]), e._v(" "), r("p", {
        staticStyle: {
          color: "#cc3333",
          "font-weight": "bold",
          "text-align": "center",
          "padding-bottom": "10px"
        }
      }, [e._v("我确认充值" + e._s(e.form[e.prop][1]) + "元人民币")]), e._v(" "), r("el-form", {
        ref: "confirmForm",
        staticStyle: {
          padding: "0"
        },
        attrs: {
          inline: !0,
          model: e.confirmForm,
          rules: e.confirmRule,
          "label-position": "top"
        }
      }, [r("el-form-item", {
        staticStyle: {
          "margin-bottom": "0",
          width: "100%"
        },
        attrs: {
          prop: "confirm"
        }
      }, [r("el-input", {
        attrs: {
          onpaste: "return false"
        },
        model: {
          value: e.confirmForm.confirm,
          callback: function(t) {
            e.$set(e.confirmForm, "confirm", t)
          },
          expression: "confirmForm.confirm"
        }
      })], 1)], 1), e._v(" "), r("p", {
        staticStyle: {
          width: "100%",
          "font-size": "12px",
          "padding-top": "25px"
        }
      }, [e._v("\n      充值成功后将无法退款，请您仔细确认充值金额！\n    ")]), e._v(" "), r("span", {
        attrs: {
          slot: "footer"
        },
        slot: "footer"
      }, [r("el-button", {
        on: {
          click: e.handleConfirmClose
        }
      }, [e._v("取 消")]), e._v(" "), r("el-button", {
        attrs: {
          type: "primary"
        },
        on: {
          click: e.handleConfirm
        }
      }, [e._v("确 定")])], 1)], 1)], 1) : e._e()
    }, [], !1, Z, "data-v-7328af56", null).exports
      , K = {
      name: "CostTip",
      props: ["label", "cost", "gain", "type", "unit", "refs"],
      data: function() {
        return {
          show: !0
        }
      },
      updated: function() {
        var e = this;
        this.refs.validateField("recharge_unit", function(t) {
          xoyoConsole.log("检测到更新值", t),
            e.show = !t
        })
      }
    }
      , z = Object(a.a)(K, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("el-form-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.cost && e.show,
          expression: "cost && show"
        }],
        attrs: {
          label: e.label + ":"
        }
      }, [r("span", {
        staticClass: "high-light-color fs30"
      }, [e._v(e._s(e.cost) + e._s(e.type))]), e._v(" "), r("span", {
        staticClass: "tb-tips"
      }, [r("span", {
        attrs: {
          id: "cost_tips_detail"
        }
      }, [e._v("（原价￥" + e._s(e.cost) + e._s(e.type) + "，获得" + e._s(e.gain) + e._s(e.unit) + ")")]), e._v(" "), r("span", {
        staticClass: "high-light-color",
        attrs: {
          id: "cost_tips_sum"
        }
      })])])
    }, [], !1, null, null, null).exports
      , V = r("m1cH")
      , J = r.n(V)
      , W = {
      name: "CardPassword",
      componentName: "CardPassword",
      props: ["value", "length"],
      mixins: [U.a],
      inject: {
        elForm: {
          default: ""
        },
        elFormItem: {
          default: ""
        }
      },
      provide: function() {
        return {
          card: this
        }
      },
      methods: {
        add: function() {
          this.length > this.value.length && (this.xoyoStatisticsReport("order_ks_list_add", "点击增加金山一卡通", {}, ["xoyo_game_order"]),
            this.$emit("input", [].concat(J()(this.value), [[]])),
            this.dispatch("ElFormItem", "el.form.change", [].concat(J()(this.value), [[]])))
        },
        del: function(e) {
          var t = [].concat(J()(this.value));
          t.splice(e, 1),
            this.$emit("input", t),
            this.dispatch("ElFormItem", "el.form.change", t)
        },
        change: function() {
          this.dispatch("ElFormItem", "el.form.change", this.value)
        }
      },
      created: function() {
        this.$on("delOption", this.del),
          this.$on("change", this.change)
      },
      updated: function() {
        this.value.length || this.add()
      },
      mounted: function() {
        this.value.length || this.add()
      }
    };
    var X = function(e) {
      r("AFy+")
    }
      , $ = Object(a.a)(W, function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("div", {
        staticClass: "card"
      }, [t("div", {
        staticClass: "card-items"
      }, [this._t("default")], 2), this._v(" "), t("el-button", {
        staticClass: "btn-item",
        attrs: {
          icon: "el-icon-plus",
          circle: ""
        },
        on: {
          click: this.add
        }
      })], 1)
    }, [], !1, X, "data-v-78a2ba14", null).exports
      , ee = {
      name: "CardPasswordItem",
      componentName: "CardPasswordItem",
      mixins: [U.a],
      props: ["value", "index"],
      inject: ["card"],
      methods: {
        change: function() {
          this.dispatch("CardPassword", "change")
        },
        del: function() {
          this.xoyoStatisticsReport("order_ks_list_del", "点击删除金山一卡通", {}, ["xoyo_game_order"]),
            this.dispatch("CardPassword", "delOption", [this.index])
        }
      }
    };
    var te, re = function(e) {
      r("PGij")
    }, ae = {
      components: {
        CardPasswordItem: Object(a.a)(ee, function() {
          var e = this
            , t = e.$createElement
            , r = e._self._c || t;
          return r("div", {
            staticClass: "item-box"
          }, [r("el-form-item", {
            staticClass: "item",
            attrs: {
              label: "卡号:",
              "label-width": "60px"
            }
          }, [r("el-input", {
            directives: [{
              name: "st-report",
              rawName: "v-st-report",
              value: {
                eventName: "order_ks_serial",
                eventDescription: "点击金山卡号输入框",
                eventTags: ["xoyo_register;pc"],
                listenEvent: "focus",
                queryElement: function() {
                  return this.children[0]
                }
              },
              expression: "{eventName: 'order_ks_serial', eventDescription: '点击金山卡号输入框',  eventTags: ['xoyo_register;pc'],\n                      listenEvent: 'focus',\n                      queryElement: function(){\n                       return this.children[0]\n                      }}"
            }],
            staticStyle: {
              width: "148px"
            },
            on: {
              change: e.change
            },
            model: {
              value: e.value[0],
              callback: function(t) {
                e.$set(e.value, 0, t)
              },
              expression: "value[0]"
            }
          })], 1), e._v(" "), r("el-form-item", {
            staticClass: "item",
            attrs: {
              label: "密码:",
              "label-width": "60px"
            }
          }, [r("el-input", {
            directives: [{
              name: "st-report",
              rawName: "v-st-report",
              value: {
                eventName: "order_ks_password",
                eventDescription: "点击金山卡密输入框",
                eventTags: ["xoyo_register;pc"],
                listenEvent: "focus",
                queryElement: function() {
                  return this.children[0]
                }
              },
              expression: "{eventName: 'order_ks_password', eventDescription: '点击金山卡密输入框',  eventTags: ['xoyo_register;pc'],\n                      listenEvent: 'focus',\n                      queryElement: function(){\n                       return this.children[0]\n                      }}"
            }],
            staticStyle: {
              width: "148px"
            },
            attrs: {
              type: "password"
            },
            on: {
              change: e.change
            },
            model: {
              value: e.value[1],
              callback: function(t) {
                e.$set(e.value, 1, t)
              },
              expression: "value[1]"
            }
          })], 1), e._v(" "), r("el-button", {
            staticClass: "btn-item",
            attrs: {
              icon: "el-icon-minus",
              circle: ""
            },
            on: {
              click: e.del
            }
          })], 1)
        }, [], !1, re, "data-v-7d951014", null).exports,
        CardPassword: $
      },
      name: "KingsoftKcardMultiple",
      props: ["form", "label", "prop", "id", "changeHandler", "clickHandler"],
      methods: {
        getRules: function(e) {
          return {
            kcard_list: [{
              type: "array",
              required: !0,
              validator: function(e, t, r) {
                var a = !1;
                if (t.forEach(function(e) {
                  e.length && e[0] && e[1] && (a = !0)
                }),
                  !a)
                  return r(new Error("至少填写一项完整的金山一卡通信息！"));
                r()
              },
              trigger: "change"
            }]
          }[e]
        }
      }
    }, ne = Object(a.a)(ae, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("el-form-item", {
        attrs: {
          label: e.label + ":",
          prop: e.prop,
          rules: e.getRules("kcard_list")
        }
      }, [r("card-password", {
        attrs: {
          length: 5
        },
        model: {
          value: e.form[e.prop],
          callback: function(t) {
            e.$set(e.form, e.prop, t)
          },
          expression: "form[prop]"
        }
      }, e._l(e.form[e.prop], function(e, t) {
        return r("card-password-item", {
          key: t,
          attrs: {
            value: e,
            index: t
          }
        })
      }))], 1)
    }, [], !1, null, null, null).exports, ie = {
      name: "GameGroup",
      props: {
        id: {
          type: String
        },
        label: {
          type: String
        },
        value: {
          type: String,
          default: function() {
            return ""
          }
        },
        form: {
          type: Object
        },
        options: {
          type: Array,
          default: function() {
            return []
          }
        },
        prop: {
          type: String
        },
        clickHandler: {
          type: Function
        }
      },
      components: (te = {},
        P()(te, D.a.name, D.a),
        P()(te, N.a.name, N.a),
        te),
      methods: {
        getRules: function(e) {
          return null
        }
      }
    }, oe = Object(a.a)(ie, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return e.options.length ? r("el-form-item", {
        attrs: {
          label: e.label + ":",
          prop: e.prop
        }
      }, [r("charge-radio", {
        attrs: {
          value: e.value
        }
      }, e._l(e.options, function(t, a) {
        return r("charge-radio-item", {
          key: a,
          attrs: {
            id: e.id + "_" + t.keyName,
            value: t.keyName,
            option: t
          },
          nativeOn: {
            click: function(r) {
              e.clickHandler(t.keyName, e.prop)
            }
          }
        })
      }))], 1) : e._e()
    }, [], !1, null, null, null).exports;
    t.a = {
      Text: i,
      AccountText: s,
      ServerSelect: p,
      ChargeType: L,
      KingsoftCard: k,
      KcoinPwd: A,
      ChargeReceive: E,
      ChargeMoney: M,
      Jx3ChargeMoney: Y,
      CostTip: z,
      KingSoftKcardMultiple: ne,
      GameGroup: oe
    }
  },
  jCur: function(e, t, r) {
    e.exports = r.p + "overall/img/logo_jw3.ec98090f.png"
  },
  mySL: function(e, t, r) {
    "use strict";
    var a = r("14Xm")
      , n = r.n(a)
      , i = r("D3Ub")
      , o = r.n(i)
      , c = r("4d7F")
      , s = r.n(c)
      , u = r("vUrQ")
      , l = {
      name: "FormPay",
      props: ["form", "loadingStatus", "btnText", "submit", "getRefs"],
      data: function() {
        return {
          goAgreement: u.a.agreement.path + "?name=kingsoft-recharge-service-agreement"
        }
      },
      methods: {
        validateForm: function(e) {
          var t = this;
          return new s.a(function(r) {
              t.$refs[e].validate(function(e) {
                r(e)
              })
            }
          )
        },
        submitForm: function() {
          var e = o()(n.a.mark(function e() {
            var t;
            return n.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    if (document.querySelector(".agree-protocol").checked) {
                      e.next = 4;
                      break
                    }
                    return this.$xoyo_api_common.warningDialog("请仔细阅读并同意金山充值服务条款"),
                      e.abrupt("return", !1);
                  case 4:
                    return e.next = 6,
                      this.validateForm("formPay");
                  case 6:
                    (t = e.sent) && this.submit && this.submit(t);
                  case 8:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function() {
            return e.apply(this, arguments)
          }
        }()
      },
      mounted: function() {
        this.getRefs && this.getRefs(this.$refs.formPay)
      }
    }
      , p = r("JFUb")
      , h = Object(p.a)(l, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("el-form", {
        ref: "formPay",
        staticStyle: {
          padding: "10px 20px"
        },
        attrs: {
          model: e.form,
          "label-width": "120px"
        }
      }, [e._t("default"), e._v(" "), r("el-form-item", [r("el-button", {
        directives: [{
          name: "st-report",
          rawName: "v-st-report",
          value: {
            eventName: "ch_sub_form_click",
            eventDescription: "点击立即充值按钮",
            eventTags: ["xoyo_charge"]
          },
          expression: "{eventName: 'ch_sub_form_click', eventDescription: '点击立即充值按钮', eventTags: ['xoyo_charge']}"
        }, {
          name: "data-report",
          rawName: "v-data-report",
          value: {
            name: "chSubFormClick"
          },
          expression: "{name: 'chSubFormClick'}"
        }],
        staticClass: "large-red-btn",
        attrs: {
          id: "create_order",
          loading: e.loadingStatus
        },
        on: {
          click: e.submitForm
        }
      }, [e._v("\n      " + e._s(e.loadingStatus ? "创建订单中" : e.btnText) + "\n    ")]), e._v(" "), r("input", {
        staticClass: "agree-protocol",
        attrs: {
          type: "checkbox",
          id: "agree_protocol",
          checked: ""
        }
      }), e._v("\n    我同意"), r("a", {
        staticClass: "link-color text-underline",
        attrs: {
          href: e.goAgreement,
          target: "_blank"
        }
      }, [e._v("金山充值服务条款")])], 1), e._v(" "), e._t("tips")], 2)
    }, [], !1, null, null, null);
    t.a = h.exports
  },
  oCUw: function(e, t, r) {
    "use strict";
    var a = r("JiOg")
      , n = {
      on: !0,
      off: !1
    }
      , i = {
      name: "ServerSelect",
      props: ["form", "options", "defaultVal"],
      data: function() {
        return {
          disabled: n[Object(a.f)("lock_server")]
        }
      },
      methods: {
        getRule: function(e) {
          return {
            gateway: [{
              required: !0,
              message: "游戏大区" + a.d.empty,
              trigger: "blur"
            }]
          }[e]
        }
      }
    }
      , o = r("JFUb")
      , c = Object(o.a)(i, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("el-form-item", {
        attrs: {
          label: "选择大区:",
          prop: "gateway",
          rules: e.getRule("gateway")
        }
      }, [r("el-select", {
        attrs: {
          disabled: e.disabled,
          placeholder: "请选择大区"
        },
        model: {
          value: e.form.gateway,
          callback: function(t) {
            e.$set(e.form, "gateway", t)
          },
          expression: "form.gateway"
        }
      }, e._l(e.options, function(e) {
        return r("el-option", {
          key: e.value,
          attrs: {
            value: e.value,
            label: e.name
          }
        })
      })), e._v(" "), r("span", {
        staticClass: "site-tips common-tips-color"
      }, [e._v("最近选择: " + e._s(e.defaultVal))])], 1)
    }, [], !1, null, null, null);
    t.a = c.exports
  },
  p0B7: function(e, t) {},
  rAqn: function(e, t, r) {
    "use strict";
    var a = r("JFUb")
      , n = Object(a.a)({
      name: "game-title",
      props: ["title", "logo"]
    }, function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("el-tooltip", {
        attrs: {
          content: this.title
        }
      }, [t("a", {
        staticClass: "pay-left-logo",
        attrs: {
          href: "javascript:;"
        }
      }, [t("img", {
        staticClass: "all-center",
        attrs: {
          width: "230",
          src: this.logo,
          alt: ""
        }
      })])])
    }, [], !1, null, null, null);
    t.a = n.exports
  },
  tJFH: function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return n
    });
    var a = r("9zXB");
    window.xoyoConsole = {
      log: function() {
        var e;
        a.a.processDebug && console && (e = console).log.apply(e, arguments)
      },
      error: function() {
        var e;
        a.a.processDebug && console && (e = console).error.apply(e, arguments)
      },
      warning: function() {
        var e;
        a.a.processDebug && console && (e = console).warning.apply(e, arguments)
      },
      info: function() {
        var e;
        a.a.processDebug && console && (e = console).info.apply(e, arguments)
      }
    };
    var n = {
      backendServer: "//" + a.a.pf,
      payServer: "//" + a.a.pay,
      queueServer: a.a.queue,
      contentServer: "//" + a.a.content,
      publicKey: a.a.publicKey,
      messageDuration: 3e3,
      seo: {
        siteDescription: "逍遥Xoyo.com是金山游戏官方网站，提供金山公司网游介绍、客户服务、在线充值等内容和服务功能。",
        siteKeywords: "金山西山居,金山公司,逍遥,逍遥网,xoyo,Kingsoft,MMORPG,MMOG,在线游戏,网络游戏,游戏下载,免费游戏,免费网游,角色扮演,休闲游戏,剑网3,剑侠贰外传,剑侠世界,剑侠情缘网络版贰,剑侠情缘网络版,封神榜,春秋Q传,反恐行动,西山居,亚丁工作室,鲸彩工作室,金山客服,金山网游客户服务,金山游戏官网,在线充值"
      },
      sendCodeInterval: 120
    }
  },
  taHZ: function(e, t, r) {
    e.exports = r.p + "overall/img/xoyo-logo-bm.39b97ade.png"
  },
  vSgO: function(e, t) {},
  vUrQ: function(e, t, r) {
    "use strict";
    var a = r("QbLZ")
      , n = r.n(a)
      , i = r("YEIV")
      , o = r.n(i);
    var c = function(e, t) {
      return "//" + e + ".xoyo.com"
    };
    r.d(t, "a", function() {
      return y
    });
    var s = c("www", 1)
      , u = c("passport")
      , l = c("i")
      , p = c("security")
      , h = c("charge")
      , d = c("kcoin")
      , m = c("vas")
      , f = c("games")
      , g = c("help")
      , v = {
      mobilePath: "" + c("m"),
      securityPath: "" + p,
      gamesPath: "" + f,
      appsPath: s + "/apps",
      ucenterPath: "" + l,
      chargePath: "" + h,
      kcoinPath: "" + d,
      helpPath: g + "/help",
      errorPath: "/server-error",
      vasPath: "" + m,
      jx3ServicePath: m + "/jx3",
      jx3yqServicePath: m + "/jx3yq",
      csServicePath: m + "/cs",
      jxsj2ServicePath: m + "/jxsj2",
      jx2ServicePath: m + "/jx2",
      wwwPath: s + "/",
      notFoundPath: s + "/not-found.html",
      sitemapPath: s + "/sitemap",
      profileSettingsPath: l + "/profile-settings",
      identityAuthPath: l + "/identity-auth",
      antiAddictionPath: l + "/anti-addiction",
      forgetPath: p + "/forget-password",
      changePasswordPath: p + "/change-password",
      weakPasswordUpgrade: p + "/weak-password-upgrade",
      phoneSettingPath: p + "/phone-setting",
      emailSettingPath: p + "/email-setting",
      accountFreezePath: p + "/account-freeze",
      accountUnFreezePath: p + "/account-unfreeze",
      kickAccountPath: p + "/kick-account",
      operateHistoryPath: p + "/operate-history",
      safePath: p + "/safety-tools",
      ksPhoneTokenPath: p + "/ks-phone-token",
      ksPhysicalTokenPath: p + "/ks-physical-token",
      gamesProtectionSettingsPath: p + "/games-protection-settings",
      safetyToolsUnbindPath: p + "/safety-tools-unbind",
      safetyToolsPath: p + "/safety-tools",
      chargeItemsPath: h + "/charge-items",
      gameOrderPayPath: h + "/game-exclusive-pay",
      gameClientPayPath: h + "/jx3-qr-code-pay",
      commonGameClientPayPath: h + "/game-qr-code-pay",
      orderStatusPath: h + "/order-status",
      payPath: h + "/pay",
      payAutoLoginPath: h + "/auto-login",
      balanceInquirePath: h + "/balance-inquire",
      chargeRecordPath: h + "/charge-record",
      kCardVerifyPath: h + "/kcard-verify",
      chargeOrderInquirePath: h + "/charge-order-inquiry",
      invoicePath: h + "/invoice",
      invoiceRecordPath: h + "/invoice/record",
      invoiceApplyPath: h + "/invoice/apply",
      kcoinQuotaSettingPath: d + "/kcoin-quota-setting",
      kcoinPwdSettingPath: d + "/kcoin-pwd-setting",
      kcoinConsumeRecordPath: d + "/kcoin-consume-record",
      signinPath: u + "/signin",
      signupPath: u + "/signup",
      agreementPath: g + "/agreement",
      policyPath: g + "/policy",
      newsListPath: s + "/news-list",
      newsPath: s + "/news",
      vasRecordPath: m + "/vas-record",
      jx3yqVasRecordPath: m + "/jx3yq-vas-record",
      mobileGameExclusivePayPath: "//m.xoyo.com/game-exclusive-pay/#/"
    };
    function _(e, t) {
      var r = t ? t + "Path" : e + "Path";
      return o()({}, e, {
        path: v[r]
      })
    }
    var y = n()({}, _("mobile"), _("index", "www"), _("notFound"), _("games"), _("apps"), _("ucenter"), _("security"), _("charge"), _("profileSettings"), _("identityAuth"), _("antiAddiction"), _("signin"), _("signup"), _("forget"), _("changePassword"), _("weakPasswordUpgrade"), _("phoneSetting"), _("emailSetting"), _("accountFreeze"), _("accountUnFreeze"), _("kickAccount"), _("operateHistory"), _("safe"), _("ksPhoneToken"), _("ksPhysicalToken"), _("gamesProtectionSettings"), _("safetyToolsUnbind"), _("safetyTools"), _("help"), _("sitemap"), _("error"), _("kcoin"), _("kcoinQuotaSetting"), _("kcoinPwdSetting"), _("kcoinConsumeRecord"), _("chargeItems"), _("gameOrderPay"), _("gameClientPay"), _("commonGameClientPay"), _("orderStatus"), _("pay"), _("invoice"), _("invoiceRecord"), _("invoiceApply"), _("pay"), _("payAutoLogin"), _("balanceInquire"), _("chargeRecord"), _("kCardVerify"), _("chargeOrderInquire"), _("vas"), _("jx3Service"), _("jx3yqService"), _("jx2Service"), _("csService"), _("jxsj2Service"), _("vasRecord"), _("jx3yqVasRecord"), _("news"), _("newsList"), _("mobileGameExclusivePay"), {
      passwordUpgradeTipPath: {
        js: "https://zhcdn01.xoyo.com/xassets/lib/password-danger-tip/0.0.x/" + (~["production", "prelease"].indexOf("production") ? "master" : "test") + "/password-danger-tip.umd.js",
        css: "https://zhcdn01.xoyo.com/xassets/lib/password-danger-tip/0.0.x/" + (~["production", "prelease"].indexOf("production") ? "master" : "test") + "/style.css"
      },
      menus: [{
        id: 0,
        text: "首页",
        path: v.wwwPath
      }, {
        id: 1,
        text: "游戏中心",
        path: v.gamesPath,
        target: "_blank"
      }, {
        id: 2,
        text: "个人中心",
        path: v.ucenterPath
      }, {
        id: 3,
        text: "安全中心",
        path: v.securityPath
      }, {
        id: 4,
        text: "充值",
        path: v.chargePath,
        pf: "wegame"
      }],
      agreement: {
        path: v.agreementPath,
        policy: {
          privacy: {
            t: "privacy-policy",
            path: v.policyPath + "?t=privacy-policy"
          }
        }
      }
    })
  },
  vsbD: function(e, t, r) {
    e.exports = r.p + "overall/img/icon-newest.6b5d44d6.jpg"
  },
  "vu/4": function(e, t, r) {
    e.exports = r.p + "overall/img/ksglogo.24061fa2.png"
  },
  wRxG: function(e, t) {},
  xHOL: function(e, t, r) {
    "use strict";
    var a = _pp("QbLZ")
      , n = r.n(a)
      , i = r("i7/w")
      , o = r.n(i)
      , c = r("L2JU")
      , s = r("m1cH")
      , u = r.n(s)
      , l = r("gDS+")
      , p = r.n(l)
      , h = r("14Xm")
      , d = r.n(h)
      , m = r("D3Ub")
      , f = r.n(m)
      , g = r("YEIV")
      , v = r.n(g)
      , _ = r("iCc5")
      , y = r.n(_)
      , x = r("V7oC")
      , b = r.n(x)
      , k = r("JiOg")
      , w = r("vUrQ")
      , C = r("Yz+Y")
      , A = r.n(C)
      , I = r("FYw3")
      , S = r.n(I)
      , O = r("mRg0")
      , j = r.n(O)
      , R = r("jo6Y")
      , E = r.n(R)
      , T = r("GQeE")
      , P = r.n(T)
      , D = k.e
      , N = function() {
      function e(t) {
        y()(this, e),
          this.name = t,
          this.source = null,
          this.formConfig = {},
          this.formItemList = [],
          this.formItemFilterList = {}
      }
      return b()(e, [{
        key: "valueHandler",
        value: function() {
          var e = this
            , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            , r = arguments[1]
            , a = P()(r).reduce(function(e, t) {
            return r[t] ? n()({}, e, v()({}, t, r[t])) : n()({}, e)
          }, {})
            , i = P()(t).reduce(function(r, a) {
            var i = e.formItems.filter(function(e) {
              return e.name === a
            })[0].itemName;
            return n()({}, r, e.itemValueHandler[i + "Handler"](t[a], t))
          }, {});
          return n()({}, i, a)
        }
      }, {
        key: "getUnit",
        value: function(e) {
          var t = e.filter(function(e) {
            return "recharge_unit" === e.name
          })[0]
            , r = ""
            , a = "";
          if (t) {
            var n = t.props
              , i = n.typeName
              , o = n.unitName;
            n.opposite ? (r = o,
              a = i) : (r = i,
              a = o)
          }
          return {
            type: r,
            unit: a
          }
        }
      }, {
        key: "setformConfig",
        value: function(e, t, r, a, i) {
          var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
            , c = arguments[6]
            , s = r.name
            , u = r.id
            , l = e.game
            , p = e.channel
            , h = this.submitButtonText
            , d = this.tipsName
            , m = this.pageTitle;
          this.config = e,
            this.extraConfig = t,
            this.channel = r,
            this.game = a,
            this.extraParams = i,
            this.linkage = we.getLinkage({
              gameName: l,
              channelName: p,
              config: e,
              extraConfig: t,
              game: a,
              chargeType: c
            }),
            this.itemValueHandler = new we.getValueHandler({
              gameName: l,
              channelName: p,
              config: e
            }),
            this.formItems = this.mergeFormSetting({
              channel: u,
              game: a.id
            });
          var f = this.settingFormValue(o)
            , g = this.getUnit(f);
          return xoyoConsole.log("配置formConfig", e, t, r, a),
            xoyoConsole.log("formItem配置", f),
            {
              title: s,
              items: f,
              maintenance: !f.length,
              submitButtonText: h,
              pageTitle: m,
              tipsName: d,
              unit: g,
              extraParams: n()({
                game: l,
                channel: p,
                recharge_num: 1
              }, i)
            }
        }
      }, {
        key: "updateFormConfig",
        value: function(e) {
          var t = this.config
            , r = this.extraConfig
            , a = this.channel
            , i = this.game
            , o = this.extraParams
            , c = this.submitButtonText
            , s = this.tipsName
            , u = this.pageTitle
            , l = a.name
            , p = (a.id,
            t.game)
            , h = t.channel
            , d = this.settingFormValue(e)
            , m = this.getUnit(d);
          return xoyoConsole.log("update配置formConfig", t, r, a, i),
            xoyoConsole.log("updateformItem配置", d),
            {
              title: l,
              items: d,
              maintenance: !d.length,
              pageTitle: u,
              submitButtonText: c,
              tipsName: s,
              unit: m,
              extraParams: n()({
                game: p,
                channel: h,
                recharge_num: 1
              }, o)
            }
        }
      }, {
        key: "mergeFormSetting",
        value: function(e) {
          var t = this
            , r = e.channel
            , a = e.game;
          xoyoConsole.log("筛选基本要素", r, a);
          var n = this.formItemFilterList[a] || this.formItemFilterList.default
            , i = P()(n).find(function(e) {
            return new RegExp(e).test(r)
          })
            , o = void 0 !== n[i] ? n[i] : n.default;
          return !1 !== o ? o.map(function(e) {
            return t.formItemList.filter(function(t) {
              return e === t.itemName
            })[0]
          }) : []
        }
      }, {
        key: "settingFormValue",
        value: function() {
          var e = this
            , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.formItems.map(function(r) {
            var a = r.props
              , i = r.value
              , o = r.itemName
              , c = E()(r, ["props", "value", "itemName"])
              , s = e.linkage[o + "Handler"]
              , u = s ? s.call(e.linkage, t) : {}
              , l = u.props
              , p = u.value;
            return n()({}, c, {
              itemName: o,
              value: p && (p.value || "number" == typeof p.value) ? p.value : i,
              props: n()({}, a, l)
            })
          })
        }
      }, {
        key: "createOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t, r) {
            var a, i, o, c;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return xoyoConsole.log("提交表单配置", t, r),
                      a = this.valueHandler(r, t.extraParams),
                      e.prev = 2,
                      e.next = 5,
                      D.$xoyo_api_common.captchaHandler.verify({
                        version: "v4"
                      });
                  case 5:
                    if (i = e.sent,
                      o = i.state,
                      c = i.data,
                    1 !== o) {
                      e.next = 12;
                      break
                    }
                    return D.$xoyo_api_common.captchaHandler.reset(),
                      e.abrupt("return", n()({}, a, c));
                  case 12:
                    return e.abrupt("return", !1);
                  case 13:
                    e.next = 18;
                    break;
                  case 15:
                    return e.prev = 15,
                      e.t0 = e.catch(2),
                      e.abrupt("return", !1);
                  case 18:
                  case "end":
                    return e.stop()
                }
            }, e, this, [[2, 15]])
          }));
          return function(t, r) {
            return e.apply(this, arguments)
          }
        }()
      }]),
        e
    }()
      , G = k.e
      , L = [{
      type: "Text",
      label: "充值产品",
      itemName: "gameName"
    }, {
      type: "GameGroup",
      label: "大区",
      itemName: "gameGroup",
      id: "game_group",
      events: {
        onClick: function(e, t) {
          if (this.$store.state.payStore.ua || this.$store.state.payStore.no_header)
            return this.$message.error("游戏内支付，不能切换游戏");
          location.href = w.a.pay.path + "?item=" + e
        }
      }
    }, {
      type: "Text",
      label: "账号呢称",
      itemName: "accountNickName"
    }, {
      type: "AccountText",
      name: "account",
      itemName: "account",
      id: "pay_account",
      value: [],
      events: {
        onClick: function(e) {
          "account" === e && G.xoyoStatisticsReport("ch_acc_input_click", "点击充值账号输入框", {}, ["xoyo_charge"]),
          "repeatAccount" === e && G.xoyoStatisticsReport("ch_acc_cf_input_click", "点击确认账号输入框", {}, ["xoyo_charge"])
        },
        onChange: function(e, t) {
          "account" === e && G.dataReport.chAccInputClick(t),
          "repeatAccount" === e && G.dataReport.chAccCfInputClick(t)
        }
      }
    }, {
      type: "ServerSelect",
      label: "区服信息",
      name: "gateway",
      itemName: "gateway",
      id: "pay_gateway",
      value: "",
      events: {
        onChange: function() {
          var e = this
            , t = this.options.filter(function(t) {
            return t.value === e.form[e.prop]
          })[0].name;
          G.xoyoStatisticsReport("ch_area_select", "选择游戏大区", {
            el_val: this.gameName + "-" + t
          }, ["xoyo_charge"]),
            G.dataReport.chAreaSelect(this.gameName + "-" + t)
        }
      }
    }, {
      type: "ChargeType",
      label: "充值类型",
      name: "recharge_type",
      itemName: "rechargeType",
      id: "pay_recharge_type",
      value: "",
      events: {
        onClick: function() {
          var e = this
            , t = this.options.filter(function(t) {
            return t.recharge_type === e.form[e.prop]
          })[0].title;
          G.xoyoStatisticsReport("ch_type_select", "选择充值类型", {
            el_val: t
          }, ["xoyo_charge"]),
            G.dataReport.chTypeSelect(t)
        }
      }
    }, {
      type: "Jx3ChargeMoney",
      label: "充值金额",
      name: "recharge_unit",
      itemName: "jx3RechargeUnit",
      id: "pay_recharge_unit",
      value: [],
      events: {
        onChange: function() {
          var e = this.form
            , t = this.prop
            , r = this.typeName
            , a = e[t][1];
          G.xoyoStatisticsReport("ch_sum_select_custom", "选在自定义充值金额", {
            el_val: a + r
          }, ["xoyo_charge"]),
            G.dataReport.chSumSelect(a + r)
        },
        onClick: function() {
          var e = this.form
            , t = this.prop
            , r = this.typeName
            , a = e[t][0];
          -2e3 !== a && (G.xoyoStatisticsReport("ch_sum_select", "选择充值金额", {
            el_val: a + r
          }, ["xoyo_charge"]),
            G.dataReport.chSumSelect(a + r))
        }
      }
    }, {
      type: "ChargeMoney",
      label: "充值金额",
      name: "recharge_unit",
      itemName: "rechargeUnit",
      id: "pay_recharge_unit",
      value: [],
      events: {
        onChange: function() {
          var e = this.form
            , t = this.prop
            , r = this.typeName
            , a = e[t][1];
          G.xoyoStatisticsReport("ch_sum_select_custom", "选在自定义充值金额", {
            el_val: a + r
          }, ["xoyo_charge"]),
            G.dataReport.chSumSelect(a + r)
        },
        onClick: function() {
          var e = this.form
            , t = this.prop
            , r = this.typeName
            , a = e[t][0];
          -2e3 !== a && (G.xoyoStatisticsReport("ch_sum_select", "选择充值金额", {
            el_val: a + r
          }, ["xoyo_charge"]),
            G.dataReport.chSumSelect(a + r))
        }
      }
    }, {
      type: "ChargeReceive",
      label: "订单接收",
      name: "receive",
      itemName: "receive",
      id: "pay_receive",
      value: ["mobile"],
      events: {
        onClick: function(e, t) {
          "receiveInput" === e && (G.xoyoStatisticsReport("ch_kcard_num_click", "点击订单接收输入框", {}, ["xoyo_charge"]),
            G.dataReport.chOrderRecClick())
        },
        onChange: function(e, t) {
          if ("receiveSelect" === e) {
            G.xoyoStatisticsReport("ch_order_query_select", "选择订单接收方式", {
              el_val: {
                phone: "手机接收",
                email: "邮箱接收"
              }[t]
            }, ["xoyo_charge"]),
              G.dataReport.chOrderRecClick()
          }
        }
      }
    }, {
      type: "CostTip",
      label: "充值总额",
      itemName: "costTip",
      id: "pay_cost"
    }, {
      type: "KingsoftCard",
      name: "kcard",
      id: "pay_kcard",
      itemName: "kcard",
      value: [],
      events: {
        onClick: function(e) {
          "kcardNum" === e && (G.xoyoStatisticsReport("ch_kcard_num_click", "点击一卡通号码输入框", {}, ["xoyo_charge"]),
            G.dataReport.chKcardNumClick()),
          "kcardPassword" === e && (G.xoyoStatisticsReport("ch_kcard_pass_click", "点击一卡通密码输入框", {}, ["xoyo_charge"]),
            G.dataReport.chKcardPassClick())
        }
      },
      props: {
        getChargeType: function(e) {
          xoyoConsole.log("一卡通信息", e)
        }
      }
    }, {
      type: "KcoinPwd",
      label: "支付密码",
      name: "kcoin_password",
      itemName: "kcoinPassword",
      id: "pay_kcoin_password",
      value: "",
      events: {
        onClick: function(e) {
          "kcoinPwd" === e && (G.xoyoStatisticsReport("ch_kcoin_pass_click", "点击金山币支付密码输入框", {}, ["xoyo_charge"]),
            G.dataReport.chKcoinPassClick()),
          "forgetKcoinPwd" === e && G.xoyoStatisticsReport("ch_kcoin_forget_click", "点击金山币忘记支付密码", {}, ["xoyo_charge"])
        }
      }
    }]
      , H = k.e
      , B = {
      kcoin: {
        kcard: ["gameName", "accountNickName", "account", "kcard", "rechargeType", "rechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "accountNickName", "account", "rechargeType", "rechargeUnit", "receive", "costTip"]
      },
      jx3: {
        kcoin: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "kcoinPassword", "receive", "costTip"],
        kcard: ["gameName", "accountNickName", "account", "gateway", "kcard", "rechargeType", "jx3RechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "receive", "costTip"]
      },
      jx3yq: {
        kcoin: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "kcoinPassword", "receive", "costTip"],
        kcard: ["gameName", "accountNickName", "account", "gateway", "kcard", "rechargeType", "jx3RechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "receive", "costTip"]
      },
      default: {
        kcoin: ["gameName", "gameGroup", "accountNickName", "account", "gateway", "rechargeType", "rechargeUnit", "kcoinPassword", "receive", "costTip"],
        kcard: ["gameName", "gameGroup", "accountNickName", "account", "gateway", "kcard", "rechargeType", "rechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "gameGroup", "accountNickName", "account", "gateway", "rechargeType", "rechargeUnit", "receive", "costTip"]
      }
    }
      , M = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.pageTitle = "游戏订单支付",
          r.submitButtonText = "立即充值",
          r.tipsName = "chargeTip",
          r.orderItem = {
            vouch_code: "交易单号",
            channel_name: "充值方式",
            game_name: "充值产品",
            passport: "充值账号",
            gateway_name: "充值区服",
            recharge_cost: "充值金额",
            recharge_type_name: "充值类型"
          },
          r.orderSucessConfig = {
            btnText: "继续充值",
            title: "恭喜您，充值成功"
          },
          r.source = t.getSign(e),
          r.formItemFilterList = B,
          r.formItemList = L,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "getBaseInfo",
          value: function() {
            var e = f()(d.a.mark(function e() {
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", H.$xoyo_api_pay.gameChannelInformation({
                        recharge_source: this.source
                      }));
                    case 1:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "getChannelInformation",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i = t.game, o = t.channel, c = t.ua;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (xoyoConsole.log("当前业务类型", this.source || "普通充值"),
                        r = o.id,
                        a = o.url,
                        n = o.name,
                        H.xoyoStatisticsReport("payWay", "选择支付方式", {
                          el_val: n
                        }, ["xoyo_charge"]),
                        H.dataReport.payWay(n),
                        !a) {
                        e.next = 7;
                        break
                      }
                      return "game-webview" === c ? location.href = a : window.open(a),
                        e.abrupt("return", {});
                    case 7:
                      return e.abrupt("return", H.$xoyo_api_pay.rechargeInformation({
                        game: i.id,
                        channel: r,
                        recharge_source: this.source
                      }));
                    case 8:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "confirmOrder",
          value: function(e, t) {
            var r = this.config
              , a = r.game_gateway_list
              , n = r.recharge_type_list
              , i = e.title
              , o = e.unit
              , c = this.game
              , s = t.gateway
              , u = t.repeat_passport
              , l = t.recharge_unit
              , p = t.recharge_type
              , h = a.filter(function(e) {
              return e.value === s
            })[0]
              , d = n.filter(function(e) {
              return e.recharge_type === p
            })[0]
              , m = d.units.filter(function(e) {
              return e.cost === l
            })
              , f = "";
            if (m.length)
              f = m[0].gain;
            else {
              var g = d.custom_unit
                , v = g.cost
                , _ = g.gain;
              f = l / v * _
            }
            return {
              orderInfo: [{
                key: "passprot",
                value: u,
                label: "充值账号"
              }, {
                key: "game",
                value: c.name,
                label: "充值游戏"
              }, {
                key: "gateway",
                value: h && h.name,
                label: "充值区服"
              }, {
                key: "payWay",
                value: i,
                label: "充值渠道"
              }, {
                key: "chargeType",
                value: d.title,
                label: "充值类型"
              }, {
                key: "chargeSum",
                value: {
                  cost: l + o.type,
                  worth: f + o.unit
                },
                label: "充值总额"
              }]
            }
          }
        }, {
          key: "payOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t, r) {
              var a, i, o, c, s, u, l, p, h, m;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return H.xoyoStatisticsReport("ch_confirm_sub_click", "点击订单确认无误按钮", {}, ["xoyo_charge"]),
                        H.dataReport.chConfirmSubClick(),
                        a = this.channel.handle_method,
                        i = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        o = null,
                      "http_redirect" === a && (o = we.openWindow(r)),
                        c = "iframe" === a ? n()({}, t, {
                          qrcode_width: 200
                        }) : t,
                        e.next = 9,
                        H.$xoyo_api_pay.createOrder(n()({}, c, {
                          recharge_source: this.source
                        }));
                    case 9:
                      if (s = e.sent,
                        u = s.status,
                        l = s.message,
                        p = s.data,
                        !(u > 0)) {
                        e.next = 22;
                        break
                      }
                      if (h = p.handle_method,
                        m = p.resource_url,
                        !we[i[h]]) {
                        e.next = 19;
                        break
                      }
                      if (we[i[h]](m, r)) {
                        e.next = 19;
                        break
                      }
                      return e.abrupt("return", !1);
                    case 19:
                      return e.abrupt("return", p);
                    case 22:
                      if (-71536 !== u) {
                        e.next = 24;
                        break
                      }
                      return e.abrupt("return", n()({
                        type: "antiAddiction"
                      }, p));
                    case 24:
                      return -71528 === u || -71529 === u ? H.$xoyo_api_common.warningDialog('对不起，您的账号未通过防沉迷认证，暂不能充值！请点击<a style="color: #f00" href="' + w.a.antiAddiction.path + '">>补填防沉迷<</a>', function() {}, 3e3, !0) : H.$xoyo_api_common.warningDialog(l),
                      o && o.close(),
                        e.abrupt("return", !1);
                    case 27:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "checkOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return H.xoyoStatisticsReport("ch_pay_ok_click", "点击成功支付按钮", {}, ["xoyo_charge"]),
                        H.dataReport.chPayOkClick(),
                        e.next = 4,
                        H.$xoyo_api_pay.getOrderStatus(t);
                    case 4:
                      if (r = e.sent,
                        a = r.status,
                        n = r.message,
                        i = r.data,
                        xoyoConsole.log("检测支付结果", {
                          status: a,
                          message: n,
                          data: i
                        }),
                        !(a > 0)) {
                        e.next = 23;
                        break
                      }
                      e.t0 = i.order_status,
                        e.next = 2 === e.t0 ? 13 : 17;
                      break;
                    case 13:
                      return i.order_status_text = "充值成功！",
                        H.xoyoStatisticsReport("ch_pay_finish", "充值订单状态成功", {
                          el_order: i.vouch_code
                        }, ["xoyo_charge"]),
                        H.dataReport.chPayFinish(i.vouch_code, 1),
                        e.abrupt("break", 20);
                    case 17:
                      i.order_status_text = {
                        0: "您本次订单未完成",
                        1: "您本次订单未完成",
                        3: "问题订单待系统处理"
                      }[i.order_status],
                        H.xoyoStatisticsReport("ch_pay_fail", "充值订单状态失败", {
                          el_msg: i.order_status_text,
                          el_order: i.vouch_code
                        }, ["xoyo_charge"]),
                        H.dataReport.chPayFinish(i.vouch_code, 0, i.order_status_text);
                    case 20:
                      return e.abrupt("return", i);
                    case 23:
                      return H.$xoyo_api_common.errorDialog(n),
                        H.xoyoStatisticsReport("ch_pay_fail", "充值订单状态失败", {
                          el_order: i.vouch_code,
                          el_msg: n
                        }, ["xoyo_charge"]),
                        e.abrupt("return", !1);
                    case 26:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "rePayOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t, r) {
              var a, i, o, c, s, u, l, p, h, m;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return H.dataReport.chPayReplyClick(),
                        a = this.channel.handle_method,
                        i = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        o = null,
                      "http_redirect" === a && (o = we.openWindow(r)),
                        c = "iframe" === a ? n()({}, t, {
                          qrcode_width: 200
                        }) : t,
                        e.next = 8,
                        H.$xoyo_api_pay.retryOrder(c);
                    case 8:
                      if (s = e.sent,
                        u = s.status,
                        l = s.message,
                        p = s.data,
                      -71524 !== u) {
                        e.next = 17;
                        break
                      }
                      return H.$xoyo_api_common.warningDialog(l),
                        H.xoyoStatisticsReport("ch_pay_finish", "充值订单状态成功", {
                          el_order: t.vouch_code
                        }, ["xoyo_charge"]),
                        H.dataReport.chPayFinish(t.vouch_code, 1),
                        e.abrupt("return", !1);
                    case 17:
                      if (!(u > 0)) {
                        e.next = 23;
                        break
                      }
                      return h = p.handle_method,
                        m = p.resource_url,
                      we[i[h]] && we[i[h]](m, r),
                        e.abrupt("return", p);
                    case 23:
                      return H.$xoyo_api_common.warningDialog(l),
                      o && o.close(),
                        e.abrupt("return", !1);
                    case 26:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "payOrderReselect",
          value: function() {
            H.xoyoStatisticsReport("ch_confirm_reset_click", "点击订单重新选择", {}, ["xoyo_charge"]),
              H.dataReport.chPayResetClick()
          }
        }, {
          key: "checkOrderReselect",
          value: function() {
            H.xoyoStatisticsReport("ch_pay_reset_click", "点击订单重新选择", {}, ["xoyo_charge"]),
              H.dataReport.chPayResetClick()
          }
        }, {
          key: "createOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t, r) {
              var a, i, o, c, s, u, l;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return xoyoConsole.log("提交表单配置", t, r),
                        a = this.valueHandler(r, t.extraParams),
                        i = a.passport,
                        o = a.channel,
                        xoyoConsole.log("passport", i),
                        xoyoConsole.log("channel", o),
                        c = {
                          recharge_source: this.source
                        },
                      i && (c.passport = i),
                      o && (c.channel = o),
                        e.prev = 8,
                        e.next = 11,
                        H.$xoyo_api_common.captchaHandler.verify({
                          cache: !1,
                          api: "pay/recharge_api/create_order",
                          data: c
                        });
                    case 11:
                      if (s = e.sent,
                        u = s.state,
                        l = s.data,
                      1 !== u) {
                        e.next = 18;
                        break
                      }
                      return H.$xoyo_api_common.captchaHandler.reset(),
                        e.abrupt("return", n()({}, a, l));
                    case 18:
                      return e.abrupt("return", !1);
                    case 19:
                      e.next = 24;
                      break;
                    case 21:
                      return e.prev = 21,
                        e.t0 = e.catch(8),
                        e.abrupt("return", !1);
                    case 24:
                    case "end":
                      return e.stop()
                  }
              }, e, this, [[8, 21]])
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }], [{
          key: "getSign",
          value: function(e) {
            return t.signConfig[e]
          }
        }]),
        t
    }(N);
    M.signConfig = {
      "common-recharge": 0,
      "in-game": 16,
      "ssg-launch": 17
    };
    var U = M
      , q = k.e
      , F = {
      kcoin: {
        kcard: ["gameName", "accountNickName", "account", "kcard", "rechargeType", "rechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "accountNickName", "account", "rechargeType", "rechargeUnit", "receive", "costTip"]
      },
      jx3: {
        kcoin: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "kcoinPassword", "receive", "costTip"],
        kcard: ["gameName", "accountNickName", "account", "gateway", "kcard", "rechargeType", "jx3RechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "receive", "costTip"]
      },
      jx3yq: {
        kcoin: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "kcoinPassword", "receive", "costTip"],
        kcard: ["gameName", "accountNickName", "account", "gateway", "kcard", "rechargeType", "jx3RechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "accountNickName", "account", "gateway", "rechargeType", "jx3RechargeUnit", "receive", "costTip"]
      },
      default: {
        kcoin: ["gameName", "gameGroup", "accountNickName", "account", "gateway", "rechargeType", "rechargeUnit", "kcoinPassword", "receive", "costTip"],
        kcard: ["gameName", "gameGroup", "accountNickName", "account", "gateway", "kcard", "rechargeType", "rechargeUnit", "receive", "costTip"],
        hfb: !1,
        default: ["gameName", "gameGroup", "accountNickName", "account", "gateway", "rechargeType", "rechargeUnit", "receive", "costTip"]
      }
    }
      , Q = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.isAccessCopy = !1,
          r.pageTitle = "游戏订单支付",
          r.submitButtonText = "立即充值",
          r.tipsName = "chargeTip",
          r.orderItem = {
            vouch_code: "交易单号",
            channel_name: "充值方式",
            game_name: "充值产品",
            passport: "充值账号",
            gateway_name: "充值区服",
            recharge_cost: "充值金额",
            recharge_type_name: "充值类型"
          },
          r.orderSucessConfig = {
            btnText: "继续充值",
            title: "恭喜您，充值成功"
          },
          r.source = t.getSign(e),
          r.formItemFilterList = F,
          r.formItemList = L,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "getBaseInfo",
          value: function() {
            var e = f()(d.a.mark(function e() {
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", q.$xoyo_api_pay.gameChannelInformation({
                        recharge_source: this.source
                      }));
                    case 1:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "getChannelInformation",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i = t.game, o = t.channel, c = t.ua;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (xoyoConsole.log("当前业务类型", this.source || "普通充值"),
                        r = o.id,
                        a = o.url,
                        n = o.name,
                        q.xoyoStatisticsReport("payWay", "选择支付方式", {
                          el_val: n
                        }, ["xoyo_charge"]),
                        q.dataReport.payWay(n),
                        !a) {
                        e.next = 7;
                        break
                      }
                      return "game-webview" === c ? location.href = a : window.open(a),
                        e.abrupt("return", {});
                    case 7:
                      return e.abrupt("return", q.$xoyo_api_pay.rechargeInformation({
                        game: i.id,
                        channel: r,
                        recharge_source: this.source
                      }));
                    case 8:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "confirmOrder",
          value: function(e, t) {
            var r = this.config
              , a = r.game_gateway_list
              , n = r.recharge_type_list
              , i = e.title
              , o = e.unit
              , c = this.game
              , s = t.gateway
              , u = t.repeat_passport
              , l = t.recharge_unit
              , p = t.recharge_type
              , h = a.filter(function(e) {
              return e.value === s
            })[0]
              , d = n.filter(function(e) {
              return e.recharge_type === p
            })[0]
              , m = d.units.filter(function(e) {
              return e.cost === l
            })
              , f = "";
            if (m.length)
              f = m[0].gain;
            else {
              var g = d.custom_unit
                , v = g.cost
                , _ = g.gain;
              f = l / v * _
            }
            return {
              orderInfo: [{
                key: "passprot",
                value: u,
                label: "充值账号"
              }, {
                key: "game",
                value: c.name,
                label: "充值游戏"
              }, {
                key: "gateway",
                value: h && h.name,
                label: "充值区服"
              }, {
                key: "payWay",
                value: i,
                label: "充值渠道"
              }, {
                key: "chargeType",
                value: d.title,
                label: "充值类型"
              }, {
                key: "chargeSum",
                value: {
                  cost: l + o.type,
                  worth: f + o.unit
                },
                label: "充值总额"
              }]
            }
          }
        }, {
          key: "payOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t, r) {
              var a, i, o, c, s, u, l, p, h, m;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return q.xoyoStatisticsReport("ch_confirm_sub_click", "点击订单确认无误按钮", {}, ["xoyo_charge"]),
                        q.dataReport.chConfirmSubClick(),
                        a = this.channel.handle_method,
                        i = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        o = null,
                      "http_redirect" === a && (o = we.openWindow(r)),
                        c = "iframe" === a ? n()({}, t, {
                          qrcode_width: 200
                        }) : t,
                        e.next = 9,
                        q.$xoyo_api_pay.createOrder(n()({}, c, {
                          recharge_source: this.source
                        }));
                    case 9:
                      if (s = e.sent,
                        u = s.status,
                        l = s.message,
                        p = s.data,
                        !(u > 0)) {
                        e.next = 22;
                        break
                      }
                      if (h = p.handle_method,
                        m = p.resource_url,
                        !we[i[h]]) {
                        e.next = 19;
                        break
                      }
                      if (we[i[h]](m, r)) {
                        e.next = 19;
                        break
                      }
                      return e.abrupt("return", !1);
                    case 19:
                      return e.abrupt("return", p);
                    case 22:
                      if (-71536 !== u) {
                        e.next = 24;
                        break
                      }
                      return e.abrupt("return", n()({
                        type: "antiAddiction"
                      }, p));
                    case 24:
                      return -71528 === u || -71529 === u ? q.$xoyo_api_common.warningDialog('对不起，您的账号未通过防沉迷认证，暂不能充值！请点击<a style="color: #f00" href="' + w.a.antiAddiction.path + '">>补填防沉迷<</a>', function() {}, 3e3, !0) : q.$xoyo_api_common.warningDialog(l),
                      o && o.close(),
                        e.abrupt("return", !1);
                    case 27:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "checkOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return q.xoyoStatisticsReport("ch_pay_ok_click", "点击成功支付按钮", {}, ["xoyo_charge"]),
                        q.dataReport.chPayOkClick(),
                        e.next = 4,
                        q.$xoyo_api_pay.getOrderStatus(t);
                    case 4:
                      if (r = e.sent,
                        a = r.status,
                        n = r.message,
                        i = r.data,
                        xoyoConsole.log("检测支付结果", {
                          status: a,
                          message: n,
                          data: i
                        }),
                        !(a > 0)) {
                        e.next = 23;
                        break
                      }
                      e.t0 = i.order_status,
                        e.next = 2 === e.t0 ? 13 : 17;
                      break;
                    case 13:
                      return i.order_status_text = "充值成功！",
                        q.xoyoStatisticsReport("ch_pay_finish", "充值订单状态成功", {
                          el_order: i.vouch_code
                        }, ["xoyo_charge"]),
                        q.dataReport.chPayFinish(i.vouch_code, 1),
                        e.abrupt("break", 20);
                    case 17:
                      i.order_status_text = {
                        0: "您本次订单未完成",
                        1: "您本次订单未完成",
                        3: "问题订单待系统处理"
                      }[i.order_status],
                        q.xoyoStatisticsReport("ch_pay_fail", "充值订单状态失败", {
                          el_msg: i.order_status_text,
                          el_order: i.vouch_code
                        }, ["xoyo_charge"]),
                        q.dataReport.chPayFinish(i.vouch_code, 0, i.order_status_text);
                    case 20:
                      return e.abrupt("return", i);
                    case 23:
                      return q.$xoyo_api_common.errorDialog(n),
                        q.xoyoStatisticsReport("ch_pay_fail", "充值订单状态失败", {
                          el_order: i.vouch_code,
                          el_msg: n
                        }, ["xoyo_charge"]),
                        e.abrupt("return", !1);
                    case 26:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "rePayOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t, r) {
              var a, i, o, c, s, u, l, p, h, m;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return q.dataReport.chPayReplyClick(),
                        a = this.channel.handle_method,
                        i = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        o = null,
                      "http_redirect" === a && (o = we.openWindow(r)),
                        c = "iframe" === a ? n()({}, t, {
                          qrcode_width: 200
                        }) : t,
                        e.next = 8,
                        q.$xoyo_api_pay.retryOrder(c);
                    case 8:
                      if (s = e.sent,
                        u = s.status,
                        l = s.message,
                        p = s.data,
                      -71524 !== u) {
                        e.next = 17;
                        break
                      }
                      return q.$xoyo_api_common.warningDialog(l),
                        q.xoyoStatisticsReport("ch_pay_finish", "充值订单状态成功", {
                          el_order: t.vouch_code
                        }, ["xoyo_charge"]),
                        q.dataReport.chPayFinish(t.vouch_code, 1),
                        e.abrupt("return", !1);
                    case 17:
                      if (!(u > 0)) {
                        e.next = 23;
                        break
                      }
                      return h = p.handle_method,
                        m = p.resource_url,
                      we[i[h]] && we[i[h]](m, r),
                        e.abrupt("return", p);
                    case 23:
                      return q.$xoyo_api_common.warningDialog(l),
                      o && o.close(),
                        e.abrupt("return", !1);
                    case 26:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "payOrderReselect",
          value: function() {
            q.xoyoStatisticsReport("ch_confirm_reset_click", "点击订单重新选择", {}, ["xoyo_charge"]),
              q.dataReport.chPayResetClick()
          }
        }, {
          key: "checkOrderReselect",
          value: function() {
            q.xoyoStatisticsReport("ch_pay_reset_click", "点击订单重新选择", {}, ["xoyo_charge"]),
              q.dataReport.chPayResetClick()
          }
        }, {
          key: "createOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t, r) {
              var a, i, o, c, s, u, l;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return xoyoConsole.log("提交表单配置", t, r),
                        a = this.valueHandler(r, t.extraParams),
                        i = a.passport,
                        o = a.channel,
                        xoyoConsole.log("passport", i),
                        xoyoConsole.log("channel", o),
                        c = {
                          recharge_source: this.source
                        },
                      i && (c.passport = i),
                      o && (c.channel = o),
                        e.prev = 8,
                        e.next = 11,
                        q.$xoyo_api_common.captchaHandler.verify({
                          cache: !1,
                          api: "pay/recharge_api/create_order",
                          data: c
                        });
                    case 11:
                      if (s = e.sent,
                        u = s.state,
                        l = s.data,
                      1 !== u) {
                        e.next = 18;
                        break
                      }
                      return q.$xoyo_api_common.captchaHandler.reset(),
                        e.abrupt("return", n()({}, a, l));
                    case 18:
                      return e.abrupt("return", !1);
                    case 19:
                      e.next = 24;
                      break;
                    case 21:
                      return e.prev = 21,
                        e.t0 = e.catch(8),
                        e.abrupt("return", !1);
                    case 24:
                    case "end":
                      return e.stop()
                  }
              }, e, this, [[8, 21]])
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }], [{
          key: "getSign",
          value: function(e) {
            return t.signConfig[e]
          }
        }]),
        t
    }(N);
    Q.signConfig = {
      "jxsj2-classic-charge": 98
    };
    var Z = Q
      , Y = r("tfYw")
      , K = r.n(Y)
      , z = k.e
      , V = [{
      type: "Text",
      label: "支付账号",
      itemName: "payAccount"
    }, {
      type: "Text",
      label: "区服信息",
      itemName: "gatewayInfo"
    }, {
      type: "Text",
      label: "购买商品",
      itemName: "goodName"
    }, {
      type: "ChargeReceive",
      label: "订单接收",
      name: "receive",
      itemName: "receive",
      id: "order_receive",
      value: ["mobile"],
      events: {
        onClick: function(e, t) {
          "receiveInput" === e && z.xoyoStatisticsReport("order_order_rec_click", "点击订单接收输入框", {}, ["xoyo_game_order"])
        },
        onChange: function(e, t) {
          if ("receiveSelect" === e) {
            z.xoyoStatisticsReport("order_order_query_select", "选择订单接收方式", {
              el_val: {
                phone: "手机接收",
                email: "邮箱接收"
              }[t]
            }, ["xoyo_game_order"])
          }
        }
      }
    }, {
      type: "KingSoftKcardMultiple",
      label: "一卡通卡密",
      name: "kcard_list",
      itemName: "kcardList",
      id: "order_kcard_list",
      value: [[]]
    }, {
      type: "Text",
      label: "付款金额",
      itemName: "storePrice"
    }]
      , J = k.e
      , W = {
      default: {
        kcard: ["payAccount", "gatewayInfo", "goodName", "kcardList", "receive", "storePrice"],
        default: ["payAccount", "gatewayInfo", "goodName", "receive", "storePrice"]
      }
    }
      , X = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.pageTitle = "游戏订单支付",
          r.submitButtonText = "立即支付",
          r.tipsName = "storeTip",
          r.orderSucessConfig = {
            btnText: "",
            title: "恭喜您，支付成功"
          },
          r.orderItem = {
            vouch_code: "交易单号",
            channel_name: "支付方式",
            game_name: "游戏信息",
            passport: "支付账号",
            gateway_name: "区服信息",
            recharge_cost: "支付金额",
            item_name: "物品信息"
          },
          r.source = t.getSign(e),
          r.formItemFilterList = W,
          r.formItemList = V,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "setformConfig",
          value: function(e, r, a, n, i) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
              , c = K()(t.prototype.__proto__ || A()(t.prototype), "setformConfig", this).call(this, e, r, a, n, i, o);
            return J.xoyoStatisticsReport("order_passport", "充值账号记录", {
              el_val: e.passport
            }, ["xoyo_game_order"]),
              J.xoyoStatisticsReport("order_game", "充值游戏记录", {
                el_val: this.game.name
              }, ["xoyo_game_order"]),
              J.xoyoStatisticsReport("order_gateway", "充值服区记录", {
                el_val: e.gateway_name
              }, ["xoyo_game_order"]),
              J.xoyoStatisticsReport("order_pay_item", "购买商品记录", {
                el_val: e.item_name
              }, ["xoyo_game_order"]),
              c
          }
        }, {
          key: "getBaseInfo",
          value: function() {
            var e = f()(d.a.mark(function e() {
              var t;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return t = J.$xoyo_api_pay.gameStoreChannelInforamtion({
                        recharge_source: this.source
                      }),
                        e.abrupt("return", t);
                    case 2:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "getChannelInformation",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i = t.game, o = t.channel, c = (t.ua,
                t.orderId);
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (xoyoConsole.log("当前业务类型", this.source || "普通充值"),
                        r = o.id,
                        a = o.url,
                        n = o.name,
                        J.xoyoStatisticsReport("order_pay_way_select", "选择支付方式", {
                          el_val: n
                        }, ["xoyo_game_order"]),
                        !a) {
                        e.next = 6;
                        break
                      }
                      return location.href = a,
                        e.abrupt("return", {});
                    case 6:
                      return e.abrupt("return", J.$xoyo_api_pay.gameStoreRechargeInformation({
                        game: i.id,
                        channel: r,
                        order_id: c,
                        recharge_source: this.source
                      }));
                    case 7:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "confirmOrder",
          value: function(e, t) {
            var r = e.title
              , a = this.game
              , n = this.config;
            return {
              orderInfo: [{
                key: "passport",
                value: n.passport,
                label: "支付账号"
              }, {
                key: "game",
                value: a.name,
                label: "游戏信息"
              }, {
                key: "gateway",
                value: n.gateway_name,
                label: "区服信息"
              }, {
                key: "itemName",
                value: n.item_name,
                label: "商品信息"
              }, {
                key: "chargeType",
                value: r,
                label: "支付方式"
              }, {
                key: "price",
                value: n.item_price + "元",
                label: "支付金额"
              }]
            }
          }
        }, {
          key: "payOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, i, o, c, s, u, l, p, h, m;
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return J.xoyoStatisticsReport("order_confirm_sub_click", "点击订单确认无误按钮", {}, ["xoyo_game_order"]),
                        r = t.orderId,
                        a = E()(t, ["orderId"]),
                        i = this.channel.handle_method,
                        o = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        c = null,
                      "http_redirect" === i && (c = we.openWindow("game-webview")),
                        e.next = 8,
                        J.$xoyo_api_pay.gameStoreCreateOrder(n()({}, a, {
                          order_id: r,
                          recharge_source: this.source
                        }));
                    case 8:
                      if (s = e.sent,
                        u = s.status,
                        l = s.message,
                        p = s.data,
                        !(u > 0)) {
                        e.next = 19;
                        break
                      }
                      if (h = p.handle_method,
                        m = p.resource_url,
                        !we[o[h]]) {
                        e.next = 18;
                        break
                      }
                      if (we[o[h]](m, "game-webview")) {
                        e.next = 18;
                        break
                      }
                      return e.abrupt("return", !1);
                    case 18:
                      return e.abrupt("return", p);
                    case 19:
                      if (-71536 !== u) {
                        e.next = 21;
                        break
                      }
                      return e.abrupt("return", n()({
                        type: "antiAddiction"
                      }, p));
                    case 21:
                      return J.$xoyo_api_common.warningDialog(l),
                      c && c.close(),
                        e.abrupt("return", !1);
                    case 24:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "checkOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return J.xoyoStatisticsReport("order_pay_ok_click", "点击成功支付按钮", {}, ["xoyo_game_order"]),
                        e.next = 3,
                        J.$xoyo_api_pay.gameStoreGetOrderStatus(t);
                    case 3:
                      if (r = e.sent,
                        a = r.status,
                        n = r.message,
                        i = r.data,
                        xoyoConsole.log("检测支付结果", {
                          status: a,
                          message: n,
                          data: i
                        }),
                        !(a > 0)) {
                        e.next = 20;
                        break
                      }
                      e.t0 = i.order_status,
                        e.next = 2 === e.t0 ? 12 : 15;
                      break;
                    case 12:
                      return i.order_status_text = "充值成功！",
                        J.xoyoStatisticsReport("order_pay_finish", "充值订单状态成功", {
                          el_order: i.vouch_code
                        }, ["xoyo_game_order"]),
                        e.abrupt("break", 17);
                    case 15:
                      i.order_status_text = {
                        0: "您本次订单未完成",
                        1: "您本次订单未完成",
                        3: "问题订单待系统处理"
                      }[i.order_status],
                        J.xoyoStatisticsReport("order_pay_fail", "充值订单状态失败", {
                          el_msg: i.order_status_text,
                          el_order: i.vouch_code
                        }, ["xoyo_game_order"]);
                    case 17:
                      return e.abrupt("return", i);
                    case 20:
                      return J.$xoyo_api_common.errorDialog(n),
                        J.xoyoStatisticsReport("order_pay_fail", "充值订单状态失败", {
                          el_order: i.vouch_code,
                          el_msg: n
                        }, ["xoyo_game_order"]),
                        e.abrupt("return", !1);
                    case 23:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "rePayOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i, o, c, s, u, l;
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return r = this.channel.handle_method,
                        a = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        n = null,
                      "http_redirect" === r && (n = we.openWindow("game-webview")),
                        e.next = 6,
                        J.$xoyo_api_pay.gameStoreRetryOrder(t);
                    case 6:
                      if (i = e.sent,
                        o = i.status,
                        c = i.message,
                        s = i.data,
                      -71524 !== o) {
                        e.next = 13;
                        break
                      }
                      return this.xoyoStatisticsReport("order_pay_ok_click", "充值订单状态成功", {
                        el_order: this.confirmForm.vouch_code
                      }, ["xoyo_game_order"]),
                        e.abrupt("return", !1);
                    case 13:
                      if (!(o > 0)) {
                        e.next = 19;
                        break
                      }
                      return u = s.handle_method,
                        l = s.resource_url,
                      we[a[u]] && we[a[u]](l, "game-webview"),
                        e.abrupt("return", s);
                    case 19:
                      return J.$xoyo_api_common.warningDialog(c),
                      n && n.close(),
                        e.abrupt("return", !1);
                    case 22:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "payOrderReselect",
          value: function() {
            J.xoyoStatisticsReport("order_confirm_reset_click", "点击订单重新选择", {}, ["xoyo_game_order"])
          }
        }, {
          key: "checkOrderReselect",
          value: function() {
            J.xoyoStatisticsReport("order_pay_reset_click", "点击订单重新选择", {}, ["xoyo_game_order"])
          }
        }], [{
          key: "getSign",
          value: function(e) {
            return t.signConfig[e]
          }
        }]),
        t
    }(N);
    X.signConfig = {
      "jx3-physical-mall": 1
    };
    var $ = X
      , ee = (r("6a3B"),
      k.e,
      {
        "jx3-gift-charge": {
          pageTitle: "剑网3礼包充值"
        },
        "jx3-crowdfunding": {
          pageTitle: "剑网3众筹支付"
        },
        "jx2ib-groupbuying": {
          pageTitle: "剑网2新服秒杀"
        },
        "jxsj2-groupbuying": {
          pageTitle: "剑侠世界新服拼团"
        }
      })
      , te = function(e) {
      function t(e, r) {
        y()(this, t);
        var a = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return a.submitButtonText = "立即支付",
          a.tipsName = "storeTip",
          a.source = t.getSign(e),
        P()(ee[e]) && P()(ee[e]).forEach(function(t) {
          a[t] = Object(k.f)("charge_title") ? decodeURIComponent(Object(k.f)("charge_title")) : ee[e][t]
        }),
          a.redirect = r,
          a
      }
      return j()(t, e),
        b()(t, [{
          key: "checkOrder",
          value: function() {
            var e = f()(d.a.mark(function e(r) {
              var a, n = this;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                        K()(t.prototype.__proto__ || A()(t.prototype), "checkOrder", this).call(this, r);
                    case 2:
                      return (a = e.sent) && 2 === a.order_status && setTimeout(function() {
                        window.PM && window.PM.send(window.parent, "fromFrame", {
                          url: n.redirect
                        })
                      }, 1e3),
                        e.abrupt("return", a);
                    case 5:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }], [{
          key: "getSign",
          value: function(e) {
            return t.signConfig[e]
          }
        }]),
        t
    }($);
    te.signConfig = {
      "jx3-crowdfunding": 6,
      "jx3-gift-charge": 12,
      "jx2ib-groupbuying": 10,
      "jxsj2-groupbuying": 10
    };
    var re = te
      , ae = k.e
      , ne = {
      default: {
        default: []
      }
    }
      , ie = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.targetNameTitle = {
          "jx3-qr-code-pay": "剑网3通宝充值",
          "jx3yq-qr-code-pay": "剑网3缘起通宝充值"
        },
          r.submitButtonText = "立即支付",
          r.tipsName = "storeTip",
          r.orderSucessConfig = {
            btnText: "",
            title: "恭喜您，支付成功"
          },
          r.orderItem = {
            vouch_code: "交易单号",
            channel_name: "支付方式",
            game_name: "游戏信息",
            passport: "支付账号",
            gateway_name: "区服信息",
            recharge_cost: "支付金额",
            recharge_type_name: "充值类型"
          },
          r.targetName = e,
          r.source = t.getSign(e),
          r.formItemFilterList = ne,
          r.formItemList = V,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "setformConfig",
          value: function(e, r, a, n, i) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
              , c = K()(t.prototype.__proto__ || A()(t.prototype), "setformConfig", this).call(this, e, r, a, n, i, o);
            return ae.xoyoStatisticsReport("order_passport", "充值账号记录", {
              el_val: e.passport
            }, ["xoyo_game_order"]),
              ae.xoyoStatisticsReport("order_game", "充值游戏记录", {
                el_val: this.game.name
              }, ["xoyo_game_order"]),
              ae.xoyoStatisticsReport("order_gateway", "充值服区记录", {
                el_val: e.gateway_name
              }, ["xoyo_game_order"]),
              ae.xoyoStatisticsReport("order_pay_item", "购买商品记录", {
                el_val: e.item_name
              }, ["xoyo_game_order"]),
              c
          }
        }, {
          key: "getBaseInfo",
          value: function() {
            var e = f()(d.a.mark(function e() {
              var t;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return t = ae.$xoyo_api_pay.gameClientChannelInforamtion({}),
                        e.abrupt("return", t);
                    case 2:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "getChannelInformation",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i = t.game, o = t.channel;
              t.ua,
                t.orderId;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (xoyoConsole.log("当前业务类型", this.source || "普通充值"),
                        r = o.id,
                        a = o.url,
                        n = o.name,
                        ae.xoyoStatisticsReport("order_pay_way_select", "选择支付方式", {
                          el_val: n
                        }, ["xoyo_game_order"]),
                        !a) {
                        e.next = 6;
                        break
                      }
                      return location.href = a,
                        e.abrupt("return", {});
                    case 6:
                      return e.abrupt("return", {
                        data: {
                          game: i.id,
                          channel: r
                        }
                      });
                    case 7:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "confirmOrder",
          value: function(e, t) {
            var r = e.title
              , a = this.game
              , n = this.config;
            return xoyoConsole.log("confirmOrder", n),
              {
                orderInfo: [{
                  key: "passport",
                  value: n.passport,
                  label: "支付账号"
                }, {
                  key: "game",
                  value: a.name,
                  label: "游戏信息"
                }, {
                  key: "gateway",
                  value: n.gateway_name,
                  label: "区服信息"
                }, {
                  key: "itemName",
                  value: n.item_name,
                  label: "商品信息"
                }, {
                  key: "chargeType",
                  value: r,
                  label: "支付方式"
                }, {
                  key: "price",
                  value: n.item_price + "元",
                  label: "支付金额"
                }]
              }
          }
        }, {
          key: "createOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t, r) {
              var a;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return xoyoConsole.log("提交表单配置", t, r),
                        a = this.valueHandler(r, t.extraParams),
                        e.abrupt("return", a);
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "payOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, i, o, c, s, u, l, p, h, m;
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return ae.xoyoStatisticsReport("order_confirm_sub_click", "点击订单确认无误按钮", {}, ["xoyo_game_order"]),
                        r = t.orderId,
                        a = E()(t, ["orderId"]),
                        xoyoConsole.log("prefession payOrder", a),
                        i = this.channel.handle_method,
                        o = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        c = null,
                      "http_redirect" === i && (c = we.openWindow("game-webview")),
                        e.next = 9,
                        ae.$xoyo_api_pay.gameClientCreateOrder(n()({}, a, {
                          order_id: r
                        }));
                    case 9:
                      if (s = e.sent,
                        u = s.status,
                        l = s.message,
                        p = s.data,
                        !(u > 0)) {
                        e.next = 20;
                        break
                      }
                      if (h = p.handle_method,
                        m = p.resource_url,
                        !we[o[h]]) {
                        e.next = 19;
                        break
                      }
                      if (we[o[h]](m, "game-webview")) {
                        e.next = 19;
                        break
                      }
                      return e.abrupt("return", !1);
                    case 19:
                      return e.abrupt("return", p);
                    case 20:
                      if (-71536 !== u) {
                        e.next = 22;
                        break
                      }
                      return e.abrupt("return", n()({
                        type: "antiAddiction"
                      }, p));
                    case 22:
                      return ae.$xoyo_api_common.warningDialog(l),
                      c && c.close(),
                        e.abrupt("return", !1);
                    case 25:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "checkOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return ae.xoyoStatisticsReport("order_pay_ok_click", "点击成功支付按钮", {}, ["xoyo_game_order"]),
                        e.next = 3,
                        ae.$xoyo_api_pay.gameClientGetOrderStatus(t);
                    case 3:
                      if (r = e.sent,
                        a = r.status,
                        n = r.message,
                        i = r.data,
                        xoyoConsole.log("检测支付结果", {
                          status: a,
                          message: n,
                          data: i
                        }),
                        !(a > 0)) {
                        e.next = 20;
                        break
                      }
                      e.t0 = i.order_status,
                        e.next = 2 === e.t0 ? 12 : 15;
                      break;
                    case 12:
                      return i.order_status_text = "充值成功！",
                        ae.xoyoStatisticsReport("order_pay_finish", "充值订单状态成功", {
                          el_order: i.vouch_code
                        }, ["xoyo_game_order"]),
                        e.abrupt("break", 17);
                    case 15:
                      i.order_status_text = {
                        0: "您本次订单未完成",
                        1: "您本次订单未完成",
                        3: "问题订单待系统处理"
                      }[i.order_status],
                        ae.xoyoStatisticsReport("order_pay_fail", "充值订单状态失败", {
                          el_msg: i.order_status_text,
                          el_order: i.vouch_code
                        }, ["xoyo_game_order"]);
                    case 17:
                      return e.abrupt("return", i);
                    case 20:
                      return ae.$xoyo_api_common.errorDialog(n),
                        ae.xoyoStatisticsReport("order_pay_fail", "充值订单状态失败", {
                          el_order: i.vouch_code,
                          el_msg: n
                        }, ["xoyo_game_order"]),
                        e.abrupt("return", !1);
                    case 23:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "rePayOrder",
          value: function() {
            var e = f()(d.a.mark(function e(t) {
              var r, a, n, i, o, c, s, u, l;
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return r = this.channel.handle_method,
                        a = {
                          http_redirect: "httpRedirect",
                          http_post_redirect: "httpPostRedirect",
                          http_post_form_redirect: "httpPostFormRedirect"
                        },
                        n = null,
                      "http_redirect" === r && (n = we.openWindow("game-webview")),
                        e.next = 6,
                        ae.$xoyo_api_pay.gameClientRetryOrder(t);
                    case 6:
                      if (i = e.sent,
                        o = i.status,
                        c = i.message,
                        s = i.data,
                      -71524 !== o) {
                        e.next = 13;
                        break
                      }
                      return this.xoyoStatisticsReport("order_pay_ok_click", "充值订单状态成功", {
                        el_order: this.confirmForm.vouch_code
                      }, ["xoyo_game_order"]),
                        e.abrupt("return", !1);
                    case 13:
                      if (!(o > 0)) {
                        e.next = 19;
                        break
                      }
                      return u = s.handle_method,
                        l = s.resource_url,
                      we[a[u]] && we[a[u]](l, "game-webview"),
                        e.abrupt("return", s);
                    case 19:
                      return ae.$xoyo_api_common.warningDialog(c),
                      n && n.close(),
                        e.abrupt("return", !1);
                    case 22:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "payOrderReselect",
          value: function() {
            ae.xoyoStatisticsReport("order_confirm_reset_click", "点击订单重新选择", {}, ["xoyo_game_order"])
          }
        }, {
          key: "checkOrderReselect",
          value: function() {
            ae.xoyoStatisticsReport("order_pay_reset_click", "点击订单重新选择", {}, ["xoyo_game_order"])
          }
        }, {
          key: "pageTitle",
          get: function() {
            return this.targetNameTitle[this.targetName]
          }
        }], [{
          key: "getSign",
          value: function(e) {
            return t.signConfig[e]
          }
        }]),
        t
    }(N);
    ie.signConfig = {
      "jx3-qr-code-pay": 1,
      "jx3yq-qr-code-pay": 1
    };
    var oe = ie
      , ce = function() {
      function e(t) {
        var r = t.gameName
          , a = t.channelName
          , n = t.game
          , i = t.config
          , o = t.extraConfig
          , c = t.chargeType;
        y()(this, e),
          this.gameName = r,
          this.channelName = a,
          this.game = n,
          this.extraConfig = o,
          this.config = i,
          this.unitType = {},
          this.chargeType = c
      }
      return b()(e, [{
        key: "payAccountHandler",
        value: function() {
          return {
            props: {
              text: this.config.passport
            },
            value: {}
          }
        }
      }, {
        key: "goodNameHandler",
        value: function() {
          return {
            props: {
              text: this.config.item_name
            },
            value: {}
          }
        }
      }, {
        key: "gameGroupHandler",
        value: function(e) {
          var t = this.config
            , r = t.game_group;
          return console.log("gameGroupHandler", t),
            {
              props: {
                options: r.map(function(e) {
                  return {
                    title: e[P()(e)[0]],
                    keyName: P()(e)[0],
                    tips: ""
                  }
                }),
                value: this.game.id
              }
            }
        }
      }, {
        key: "gatewayInfoHandler",
        value: function() {
          return {
            props: {
              text: this.config.gateway_name
            },
            value: {}
          }
        }
      }, {
        key: "storePriceHandler",
        value: function() {
          return {
            props: {
              text: this.config.item_price + "元",
              hightLight: !0
            },
            value: {}
          }
        }
      }, {
        key: "gameNameHandler",
        value: function() {
          var t = this.game.name
            , r = t;
          return e.gameName = t,
            {
              props: {
                text: r
              },
              value: {}
            }
        }
      }, {
        key: "accountNickNameHandler",
        value: function() {
          return {
            props: {
              text: this.extraConfig.nickname
            },
            value: {}
          }
        }
      }, {
        key: "kcardListHandler",
        value: function(e) {
          var t = e.kcard_list
            , r = {};
          return r.value = t,
            {
              props: {},
              value: r
            }
        }
      }, {
        key: "accountHandler",
        value: function(e) {
          var t = this.config
            , r = this.extraConfig.passport
            , a = t.current_passport
            , n = e.account
            , i = {}
            , o = {};
          return (r || a) && (i.account = a),
          r && (o.value = [r]),
          n && (o.value = n),
            {
              props: i,
              value: o
            }
        }
      }, {
        key: "kcoinPasswordHandler",
        value: function(e) {
          var t = e.kcoin_password
            , r = {};
          return t && (r.value = t),
            {
              props: {},
              value: r
            }
        }
      }, {
        key: "gatewayHandler",
        value: function(e) {
          var t = this.config
            , r = this.extraConfig
            , a = this.game
            , n = t.game_group
            , i = r.server
            , o = r.serverDisable
            , c = t.game_gateway_list
            , s = void 0 === c ? [] : c
            , u = t.game_gateway_list_recently
            , l = void 0 === u ? [] : u
            , h = []
            , d = {}
            , m = {};
          h = l.length || i ? s.filter(function(e) {
            return e.value
          }) : s,
            d.options = h,
            d.recentServer = l;
          var f = d.options.filter(function(e) {
            return e.value === i
          })[0];
          if (e.gateway)
            m.value = e.gateway,
              e.gateway = e.gateway;
          else if (i && f)
            m.value = i,
              e.gateway = i;
          else if (d.options.length)
            if (l.length) {
              var g = l[0];
              m.value = g.value,
                e.gateway = g.value
            } else
              m.value = d.options[0].value,
                e.gateway = d.options[0].value;
          return o && (d.disabled = o),
            d.gameName = a.name,
            xoyoConsole.log("gatewayHandler", p()(d), n),
          n.length && (d.options = [],
            xoyoConsole.log("当有game_group时隐藏", d)),
            {
              props: d,
              value: m
            }
        }
      }, {
        key: "rechargeTypeHandler",
        value: function(t) {
          var r = this.config
            , a = t.gateway
            , n = t.recharge_type
            , i = r.game_gateway_list
            , o = r.recharge_type_list
            , c = i.filter(function(e) {
            return e.value === a
          })[0] || {}
            , s = {}
            , u = {};
          return n !== e.lastRechargeType && (e.lastRechargeType = n,
            t.recharge_unit = []),
          c.hasOwnProperty("support_recharge_type") && (s.options = o.filter(function(e) {
            return ~c.support_recharge_type.indexOf(e.recharge_type)
          })),
            s.options.filter(function(e) {
              return e.recharge_type === n
            }).length ? u.value = n : (u.value = s.options[0].recharge_type,
              t.recharge_type = s.options[0].recharge_type,
              e.lastRechargeType = s.options[0].recharge_type),
            {
              props: s,
              value: u
            }
        }
      }, {
        key: "jx3RechargeUnitHandler",
        value: function(e) {
          var t = this.config
            , r = e.recharge_type
            , a = e.recharge_unit
            , n = t.recharge_type_list
            , i = t.channel
            , o = {}
            , c = {};
          if (o.typeName = "元",
            this.unitType.type = "元",
          "number" == typeof r) {
            var s = n.filter(function(e) {
              return e.recharge_type === r
            })[0] || {}
              , u = s.units
              , l = s.custom_unit
              , p = s.unit_name;
            o.extra = l,
              o.options = u,
              o.unitName = p,
              this.unitType.unit = p
          } else
            o.options = [];
          (/hfb/.test(i) && (o.tips = "温馨提示：您点选的“充值金额”必须与您的充值卡面额一致，否则导致充值失败或充值卡内金额丢失的责任，由您自行承担！"),
          a && "number" == typeof a[0]) ? o.options.filter(function(e) {
            return e.cost === a[0]
          }).length ? c.value = a : -2e3 === a[0] && o.extra && (c.value = a) : (e.recharge_unit = [],
            c.value = []);
          return c.value && c.value.length && -2e3 !== c.value[0] && (c.value[1] = ""),
            {
              props: o,
              value: c
            }
        }
      }, {
        key: "rechargeUnitHandler",
        value: function(e) {
          var t = this.config
            , r = e.recharge_type
            , a = e.recharge_unit
            , n = t.recharge_type_list
            , i = t.channel
            , o = {}
            , c = {};
          if (o.typeName = "元",
            this.unitType.type = "元",
          "number" == typeof r) {
            var s = n.filter(function(e) {
              return e.recharge_type === r
            })[0] || {}
              , u = s.units
              , l = s.custom_unit
              , p = s.unit_name;
            o.extra = l,
              o.options = u,
              o.unitName = p,
              this.unitType.unit = p
          } else
            o.options = [];
          (/hfb/.test(i) && (o.tips = "温馨提示：您点选的“充值金额”必须与您的充值卡面额一致，否则导致充值失败或充值卡内金额丢失的责任，由您自行承担！"),
          a && "number" == typeof a[0]) ? o.options.filter(function(e) {
            return e.cost === a[0]
          }).length ? c.value = a : -2e3 === a[0] && o.extra && (c.value = a) : (e.recharge_unit = [],
            c.value = []);
          return c.value && c.value.length && -2e3 !== c.value[0] && (c.value[1] = ""),
            {
              props: o,
              value: c
            }
        }
      }, {
        key: "costTipHandler",
        value: function(e) {
          var t = this.config
            , r = this.unitType
            , a = {}
            , n = t.recharge_type_list
            , i = e.recharge_type
            , o = e.recharge_unit
            , c = n.filter(function(e) {
            return e.recharge_type === i
          })[0];
          if (c && o.length) {
            var s = r.type
              , u = r.unit;
            a.type = s,
              a.unit = u;
            var l = c.custom_unit;
            if (-2e3 !== o[0]) {
              var p = c.units.filter(function(e) {
                return e.cost === o[0]
              })[0];
              p && (a.gain = p.gain,
                a.cost = o[0])
            } else if (l) {
              var h = l.cost
                , d = l.gain;
              a.gain = o[1] / h * d,
                a.cost = a.gain && o[1]
            }
          }
          return {
            props: a,
            value: {}
          }
        }
      }]),
        e
    }();
    ce.lastRechargeType = "",
      ce.gameName = "";
    var se = ce
      , ue = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeUnitHandler",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            return a.typeName = "个",
              this.unitType.type = "个",
              {
                props: a,
                value: n
              }
          }
        }, {
          key: "jx3RechargeUnitHandler",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "jx3RechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            return a.typeName = "个",
              this.unitType.type = "个",
              {
                props: a,
                value: n
              }
          }
        }]),
        t
    }(se)
      , le = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.kcardInfo = null,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeTypeHandler",
          value: function(e) {
            var r = e.kcard
              , a = e.recharge_type
              , n = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeTypeHandler", this).call(this, e)
              , i = n.props
              , o = n.value;
            if (this.kcardInfo = k.h.GetCardInfo(r && r[0]),
              this.kcardInfo) {
              var c = this.kcardInfo.cardType;
              i.options = i.options.filter(function(e) {
                return e.units.filter(function(e) {
                  return e.cost === c
                }).length
              })
            } else
              i.options = [];
            return i.options.length ? i.options.filter(function(e) {
              return e.recharge_type === a
            }).length ? o.value = a : (o.value = i.options[0].recharge_type,
              e.recharge_type = i.options[0].recharge_type,
              se.lastRechargeType = i.options[0].recharge_type) : (o.value = "",
              e.recharge_type = "",
              se.lastRechargeType = ""),
              {
                props: i,
                value: o
              }
          }
        }, {
          key: "rechargeUnitHandler",
          value: function(e) {
            e.recharge_unit;
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            if (this.kcardInfo) {
              var i = this.kcardInfo.cardType;
              a.options = a.options.filter(function(e) {
                return e.cost === i
              }),
                a.extra = null,
                n.value = [a.options[0].cost],
                e.recharge_unit = [a.options[0].cost]
            }
            return {
              props: a,
              value: n
            }
          }
        }, {
          key: "jx3RechargeUnitHandler",
          value: function(e) {
            e.recharge_unit;
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "jx3RechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            if (this.kcardInfo) {
              var i = this.kcardInfo.cardType;
              a.options = a.options.filter(function(e) {
                return e.cost === i
              }),
                a.extra = null,
                n.value = [a.options[0].cost],
                e.recharge_unit = [a.options[0].cost]
            }
            return {
              props: a,
              value: n
            }
          }
        }]),
        t
    }(se)
      , pe = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeUnitHandler",
          value: function(e) {
            var r = e.recharge_unit
              , a = (e.recharge_type,
              this.config.channel,
              K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e))
              , i = a.props
              , o = a.value
              , c = i.typeName
              , s = i.unitName;
            i.extra;
            (i.options && i.options.length && (i.options = i.options.map(function(e) {
              return n()({}, e, {
                cost: 1 * e.gain,
                gain: e.cost
              })
            })),
              i.typeName = s,
              i.unitName = c,
              this.unitType.type = c,
              this.unitType.unit = s,
              i.customPlaceholder = "其他数量",
              i.opposite = !0,
            r && "number" == typeof r[0]) ? i.options.filter(function(e) {
              return e.cost === r[0]
            }).length ? (o.value = r,
              e.recharge_unit = r) : -2e3 === r[0] && i.extra && (o.value = r,
              e.recharge_unit = r) : (e.recharge_unit = [],
              o.value = []);
            return o.value && o.value.length && -2e3 !== o.value[0] && (o.value[1] = ""),
              {
                props: i,
                value: o
              }
          }
        }, {
          key: "costTipHandler",
          value: function(e) {
            var t = this.config
              , r = this.unitType
              , a = {}
              , n = t.recharge_type_list
              , i = e.recharge_type
              , o = e.recharge_unit
              , c = n.filter(function(e) {
              return e.recharge_type === i
            })[0];
            if (c) {
              var s = r.type
                , u = r.unit;
              a.type = s,
                a.unit = u;
              var l = c.custom_unit;
              if (-2e3 !== o[0]) {
                var p = c.units.filter(function(e) {
                  return 1 * e.gain === o[0]
                })[0];
                p && (a.gain = p.gain,
                  a.cost = p.cost)
              } else if (l) {
                var h = l.cost;
                l.gain;
                a.gain = o[1],
                  a.cost = o[1] * h
              }
            }
            return {
              props: a,
              value: {}
            }
          }
        }]),
        t
    }(se)
      , he = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeUnitHandler",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            return a.unitName = "个",
              this.unitType.type = "个",
              {
                props: a,
                value: n
              }
          }
        }]),
        t
    }(pe)
      , de = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.kcardInfo = null,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeTypeHandler",
          value: function(e) {
            var r = e.kcard
              , a = e.recharge_type
              , n = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeTypeHandler", this).call(this, e)
              , i = n.props
              , o = n.value;
            if (this.kcardInfo = k.h.GetCardInfo(r && r[0]),
              this.kcardInfo) {
              var c = this.kcardInfo.cardType;
              i.options = i.options.filter(function(e) {
                return e.units.filter(function(e) {
                  return e.cost === c
                }).length
              })
            } else
              i.options = [];
            return i.options.length ? i.options.filter(function(e) {
              return e.recharge_type === a
            }).length ? o.value = a : (o.value = i.options[0].recharge_type,
              e.recharge_type = i.options[0].recharge_type,
              se.lastRechargeType = i.options[0].recharge_type) : (o.value = "",
              e.recharge_type = "",
              se.lastRechargeType = ""),
              {
                props: i,
                value: o
              }
          }
        }, {
          key: "rechargeUnitHandler",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            if (this.kcardInfo) {
              var i = this.kcardInfo.cardType;
              a.options = a.options.filter(function(e) {
                return 1 * e.gain === i
              }),
                a.extra = null,
                n.value = [a.options[0].cost],
                e.recharge_unit = [a.options[0].cost]
            }
            return {
              props: a,
              value: n
            }
          }
        }]),
        t
    }(pe)
      , me = function(e) {
      function t() {
        var e, r, a, n;
        y()(this, t);
        for (var i = arguments.length, o = Array(i), c = 0; c < i; c++)
          o[c] = arguments[c];
        return r = a = S()(this, (e = t.__proto__ || A()(t)).call.apply(e, [this].concat(o))),
          a.chargeTypeEum = {
            tongbao: 6,
            yueka: 1,
            dianka: 2
          },
          n = r,
          S()(a, n)
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeTypeHandler",
          value: function(e) {
            var t = this.config
              , r = this.chargeType
              , a = this.chargeTypeEum
              , n = e.gateway
              , i = e.recharge_type
              , o = t.game_gateway_list
              , c = t.recharge_type_list
              , s = o.filter(function(e) {
              return e.value === n
            })[0] || {}
              , u = {}
              , l = {}
              , p = a[r];
            if (i !== se.lastRechargeType && (se.lastRechargeType = i,
              e.recharge_unit = []),
            s.hasOwnProperty("support_recharge_type") && (u.options = c.filter(function(e) {
              return ~s.support_recharge_type.indexOf(e.recharge_type)
            })),
              u.options.filter(function(e) {
                return e.recharge_type === i
              }).length)
              l.value = i;
            else {
              var h = u.options.find(function(e) {
                return e.recharge_type === p
              }) || {};
              l.value = h.recharge_type || u.options[0].recharge_type,
                e.recharge_type = h.recharge_type || u.options[0].recharge_type,
                se.lastRechargeType = h.recharge_type || u.options[0].recharge_type
            }
            return {
              props: u,
              value: l
            }
          }
        }]),
        t
    }(se)
      , fe = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeUnitHandler",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            return a.typeName = "个",
              this.unitType.type = "个",
              {
                props: a,
                value: n
              }
          }
        }, {
          key: "jx3RechargeUnitHandler",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "jx3RechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            return a.typeName = "个",
              this.unitType.type = "个",
              {
                props: a,
                value: n
              }
          }
        }]),
        t
    }(me)
      , ge = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.kcardInfo = null,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeTypeHandler",
          value: function(e) {
            var r = e.kcard
              , a = e.recharge_type
              , n = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeTypeHandler", this).call(this, e)
              , i = n.props
              , o = n.value;
            if (this.kcardInfo = k.h.GetCardInfo(r && r[0]),
              this.kcardInfo) {
              var c = this.kcardInfo.cardType;
              i.options = i.options.filter(function(e) {
                return e.units.filter(function(e) {
                  return e.cost === c
                }).length
              })
            } else
              i.options = [];
            return i.options.length ? i.options.filter(function(e) {
              return e.recharge_type === a
            }).length ? o.value = a : (o.value = i.options[0].recharge_type,
              e.recharge_type = i.options[0].recharge_type,
              se.lastRechargeType = i.options[0].recharge_type) : (o.value = "",
              e.recharge_type = "",
              se.lastRechargeType = ""),
              {
                props: i,
                value: o
              }
          }
        }, {
          key: "rechargeUnitHandler",
          value: function(e) {
            e.recharge_unit;
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            if (this.kcardInfo) {
              var i = this.kcardInfo.cardType;
              a.options = a.options.filter(function(e) {
                return e.cost === i
              }),
                a.extra = null,
                n.value = [a.options[0].cost],
                e.recharge_unit = [a.options[0].cost]
            }
            return {
              props: a,
              value: n
            }
          }
        }, {
          key: "jx3RechargeUnitHandler",
          value: function(e) {
            e.recharge_unit;
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "jx3RechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            if (this.kcardInfo) {
              var i = this.kcardInfo.cardType;
              a.options = a.options.filter(function(e) {
                return e.cost === i
              }),
                a.extra = null,
                n.value = [a.options[0].cost],
                e.recharge_unit = [a.options[0].cost]
            }
            return {
              props: a,
              value: n
            }
          }
        }]),
        t
    }(me)
      , ve = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeTypeHandler",
          value: function(e) {
            var t = this.config
              , r = e.recharge_type
              , a = t.recharge_type_list
              , n = {}
              , i = {};
            return r !== se.lastRechargeType && (se.lastRechargeType = r,
              e.recharge_unit = []),
              n.options = a,
              n.options.filter(function(e) {
                return e.recharge_type === r
              }).length ? i.value = r : (i.value = n.options[0].recharge_type,
                e.recharge_type = n.options[0].recharge_type,
                se.lastRechargeType = n.options[0].recharge_type),
              {
                props: n,
                value: i
              }
          }
        }]),
        t
    }(se)
      , _e = function(e) {
      function t(e) {
        y()(this, t);
        var r = S()(this, (t.__proto__ || A()(t)).call(this, e));
        return r.kcardInfo = null,
          r
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeTypeHandler",
          value: function(e) {
            var r = e.recharge_type
              , a = e.kcard
              , n = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeTypeHandler", this).call(this, e)
              , i = n.props
              , o = n.value;
            if (this.kcardInfo = k.h.GetCardInfo(a && a[0]),
              this.kcardInfo) {
              var c = this.kcardInfo.cardType;
              i.options = i.options.filter(function(e) {
                return e.units.filter(function(e) {
                  return e.cost === c
                }).length
              })
            } else
              i.options = [];
            return i.options.length ? i.options.filter(function(e) {
              return e.recharge_type === r
            }).length ? o.value = r : (o.value = i.options[0].recharge_type,
              e.recharge_type = i.options[0].recharge_type,
              se.lastRechargeType = i.options[0].recharge_type) : (o.value = "",
              e.recharge_type = "",
              se.lastRechargeType = ""),
              {
                props: i,
                value: o
              }
          }
        }, {
          key: "rechargeUnitHandler",
          value: function(e) {
            e.recharge_unit;
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "rechargeUnitHandler", this).call(this, e)
              , a = r.props
              , n = r.value;
            if (this.kcardInfo) {
              var i = this.kcardInfo.cardType;
              a.options = a.options.filter(function(e) {
                return e.cost === i
              }),
                a.extra = null,
                n.value = [a.options[0].cost],
                e.recharge_unit = [a.options[0].cost]
            }
            return {
              props: a,
              value: n
            }
          }
        }]),
        t
    }(ve)
      , ye = function() {
      function e(t) {
        var r = t.config;
        y()(this, e),
          this.config = r
      }
      return b()(e, [{
        key: "accountHandler",
        value: function(e) {
          return {
            passport: e[0] && e[0].toLocaleLowerCase(),
            repeat_passport: e[1] && e[1].toLocaleLowerCase()
          }
        }
      }, {
        key: "gatewayHandler",
        value: function(e) {
          return {
            gateway: e
          }
        }
      }, {
        key: "rechargeTypeHandler",
        value: function(e) {
          return {
            recharge_type: e
          }
        }
      }, {
        key: "jx3RechargeUnitHandler",
        value: function(e) {
          return -2e3 === e[0] ? {
            recharge_unit: e[1],
            custom_recharge_unit: 1
          } : {
            recharge_unit: e[0],
            custom_recharge_unit: ""
          }
        }
      }, {
        key: "rechargeUnitHandler",
        value: function(e) {
          return -2e3 === e[0] ? {
            recharge_unit: e[1],
            custom_recharge_unit: 1
          } : {
            recharge_unit: e[0],
            custom_recharge_unit: ""
          }
        }
      }, {
        key: "receiveHandler",
        value: function(e) {
          return v()({}, e[0], e[1])
        }
      }, {
        key: "kcardHandler",
        value: function(e) {
          return {
            kcard_num: e[0],
            kcard_password: e[1]
          }
        }
      }, {
        key: "kcoinPasswordHandler",
        value: function(e) {
          return {
            kcoin_password: e
          }
        }
      }, {
        key: "kcardListHandler",
        value: function(e) {
          return {
            kcard_num_list: e.map(function(e) {
              return e[0]
            }),
            kcard_password_list: e.map(function(e) {
              return e[1]
            })
          }
        }
      }]),
        e
    }()
      , xe = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "rechargeUnitHandler",
          value: function(e, t) {
            var r = this.config.recharge_type_list
              , a = t.recharge_type
              , n = r.filter(function(e) {
              return e.recharge_type === a
            });
            if (n.length) {
              var i = n[0]
                , o = i.units
                , c = i.custom_unit;
              return -2e3 === e[0] ? {
                recharge_unit: e[1] * c.cost,
                custom_recharge_unit: 1
              } : {
                recharge_unit: o.filter(function(t) {
                  return 1 * t.gain === e[0]
                })[0].cost,
                custom_recharge_unit: ""
              }
            }
          }
        }]),
        t
    }(ye)
      , be = k.e
      , ke = function() {
      function e() {
        y()(this, e)
      }
      return b()(e, null, [{
        key: "getPrefession",
        value: function(e, t) {
          return oe.getSign(e) ? new oe(e) : $.getSign(e) ? new $(e) : re.getSign(e) ? new re(e,t) : Z.getSign(e) ? new Z(e) : new U(e)
        }
      }, {
        key: "getLinkage",
        value: function(e) {
          var t = e.channelName;
          switch (e.gameName) {
            case "kcoin":
              return "kcard" === t ? new _e(e) : new ve(e);
            case "jx2":
              return "kcoin" === t ? new he(e) : "kcard" === t ? new de(e) : new pe(e);
            case "jx3":
            case "jx3yq":
              return "kcoin" === t ? new fe(e) : "kcard" === t ? new ge(e) : new me(e);
            default:
              return "kcoin" === t ? new ue(e) : "kcard" === t ? new le(e) : new se(e)
          }
        }
      }, {
        key: "getValueHandler",
        value: function(e) {
          e.channelName;
          switch (e.gameName) {
            case "jx2":
              return new xe(e);
            default:
              return new ye(e)
          }
        }
      }, {
        key: "openWindow",
        value: function(t) {
          return "game-webview" === t ? {
            close: function() {}
          } : (e.win = window.open(),
            e.win)
        }
      }, {
        key: "postFormRedirect",
        value: function(e, t, r) {
          var a = document.createElement("form")
            , n = be.$xoyo_api_common.directUrl(e, "post");
          for (var i in a.action = t ? e.split("?")[0] : e,
            a.method = "post",
            a.target = "_self",
            a.style.display = "none",
            n) {
            var o = document.createElement("input");
            o.type = "hidden",
              o.name = i,
              o.value = n[i],
              a.appendChild(o)
          }
          var c = document.createElement("input");
          c.type = "submit",
            a.appendChild(c),
            document.body.appendChild(a),
            a.submit(),
            setTimeout(function() {
              a.parentNode.removeChild(a)
            }, 200)
        }
      }, {
        key: "httpRedirect",
        value: function(t, r) {
          return "game-webview" === r ? location.href = t : e.win.location = t,
            !0
        }
      }, {
        key: "httpPostRedirect",
        value: function(t, r) {
          e.postFormRedirect(t, !1, r)
        }
      }, {
        key: "httpPostFormRedirect",
        value: function(t, r) {
          e.postFormRedirect(t, !0, r)
        }
      }]),
        e
    }();
    ke.win = null;
    var we = ke
      , Ce = k.e
      , Ae = ["jx", "jxib", "jxcl", "njxib", "jx2", "jx2ib", "jx2xz", "jx2wz", "jxsj2"]
      , Ie = function() {
      function e(t) {
        y()(this, e);
        var r = t.name
          , a = t.type
          , n = t.ua
          , i = t.form
          , o = t.nickname
          , c = t.extraParams
          , s = t.redirect
          , u = t.chargeType;
        this.name = r,
          this.ua = n,
          this.nickname = o,
          this.extraFormConfig = i,
          this.extraParams = c,
          this.prefession = we.getPrefession(a, s),
          this.redirect = s,
          this.currentChannel = null,
          this.channels = null,
          this.gameInfo = null,
          this.chargeType = u
      }
      return b()(e, [{
        key: "getExtraIcons",
        value: function(e, t) {
          return e && e[t] || {}
        }
      }, {
        key: "getGameInfo",
        value: function() {
          var e = f()(d.a.mark(function e() {
            var t, r, a, i, o, c, s, u, l = this;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.gameInfo) {
                      e.next = 2;
                      break
                    }
                    return e.abrupt("return", this.gameInfo);
                  case 2:
                    if (this.name) {
                      e.next = 4;
                      break
                    }
                    return e.abrupt("return", this.noGameTips());
                  case 4:
                    return e.next = 6,
                      this.prefession.getBaseInfo();
                  case 6:
                    if (t = e.sent,
                      r = t.status,
                      a = t.message,
                      i = t.data,
                      o = i.icon_setting,
                      c = i.channel_list,
                      !(r > 0)) {
                      e.next = 20;
                      break
                    }
                    if (s = this.getExtraIcons(o, this.name),
                      u = c.map(function(e) {
                        return n()({}, e, {
                          extraIcon: s[e.id] || !1
                        })
                      }),
                      this.gameInfo = i.game_list.filter(function(e) {
                        return e.id === l.name
                      })[0],
                      this.gameInfo) {
                      e.next = 17;
                      break
                    }
                    return e.abrupt("return", this.noGameTips());
                  case 17:
                    this.channelHandle(u, this.gameInfo.support_channels),
                      e.next = 21;
                    break;
                  case 20:
                    Ce.$xoyo_api_common.errorDialog(a);
                  case 21:
                    return e.abrupt("return", this.gameInfo);
                  case 22:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function() {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "getChannelInformation",
        value: function() {
          var e = f()(d.a.mark(function e(t, r) {
            var a, i, o, c, s;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return t.url || this.replaceState(t),
                      this.setCurrentChannel(t),
                      a = n()({
                        game: this.gameInfo,
                        channel: t,
                        ua: this.ua
                      }, this.extraParams),
                      e.next = 5,
                      this.prefession.getChannelInformation(a);
                  case 5:
                    if (i = e.sent,
                      o = i.code,
                      c = i.message,
                      s = i.data,
                    "number" == typeof o && o < 0 && Ce.$xoyo_api_common.errorDialog(c),
                      !s) {
                      e.next = 14;
                      break
                    }
                    return e.abrupt("return", this.prefession.setformConfig(s, this.extraFormConfig, t, this.gameInfo, this.extraParams, r, this.chargeType));
                  case 14:
                    return e.abrupt("return", null);
                  case 15:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t, r) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "changFormValue",
        value: function(e) {
          return this.prefession.updateFormConfig(e)
        }
      }, {
        key: "setCurrentChannel",
        value: function(e) {
          this.currentChannel = n()({}, e)
        }
      }, {
        key: "getChannels",
        value: function() {
          return this.channels
        }
      }, {
        key: "channelHandle",
        value: function(e, t) {
          this.channels = t.map(function(t) {
            return e.filter(function(e) {
              return e.id === t
            })[0]
          })
        }
      }, {
        key: "replaceState",
        value: function(e) {
          var t = e.id
            , r = window.location.search
            , a = window.location.search.match(/way=[a-z,_,1-9]+/gi)
            , n = "";
          n = a ? r.replace(a, "way=" + t) : r + "&way=" + t,
            Ce.$xoyo_replaceState({}, "", n)
        }
      }, {
        key: "noGameTips",
        value: function(e) {
          e ? Ce.$xoyo_api_common.errorDialog("所在游戏不存在或已下线", function() {}, 0) : Ce.$xoyo_api_common.errorDialog("所在游戏不存在或已下线，即将跳转到充值首页", function() {
            window.location.href = w.a.charge.path
          })
        }
      }, {
        key: "getOrderItem",
        value: function() {
          return this.prefession.orderItem
        }
      }, {
        key: "getOrderSucessConfig",
        value: function() {
          return this.prefession.orderSucessConfig
        }
      }, {
        key: "createOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t, r) {
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.prefession.createOrder(t, r);
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t, r) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "confirmOrder",
        value: function(e, t) {
          return this.prefession.confirmOrder(e, t)
        }
      }, {
        key: "payOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t) {
            var r, a;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r = this.ua,
                      e.next = 3,
                      this.prefession.payOrder(t, r);
                  case 3:
                    if (!(a = e.sent)) {
                      e.next = 10;
                      break
                    }
                    if ("antiAddiction" !== a.type) {
                      e.next = 7;
                      break
                    }
                    return e.abrupt("return", a);
                  case 7:
                    return e.abrupt("return", n()({}, a, {
                      isAccessCopy: "boolean" == typeof this.prefession.isAccessCopy ? this.prefession.isAccessCopy : !!~Ae.indexOf(this.name)
                    }));
                  case 10:
                    return e.abrupt("return", a);
                  case 11:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "checkOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t) {
            var r;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.prefession.checkOrder(t);
                  case 2:
                    return r = e.sent,
                      e.abrupt("return", r);
                  case 4:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "rePayOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t) {
            var r, a;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r = this.ua,
                      e.next = 3,
                      this.prefession.rePayOrder(t, r);
                  case 3:
                    if (!(a = e.sent)) {
                      e.next = 10;
                      break
                    }
                    if ("antiAddiction" !== a.type) {
                      e.next = 7;
                      break
                    }
                    return e.abrupt("return", a);
                  case 7:
                    return e.abrupt("return", n()({}, a, {
                      isAccessCopy: "boolean" == typeof this.prefession.isAccessCopy ? this.prefession.isAccessCopy : !!~Ae.indexOf(this.name)
                    }));
                  case 10:
                    return e.abrupt("return", a);
                  case 11:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }]),
        e
    }()
      , Se = (r("vSgO"),
      function(e) {
        function t() {
          return y()(this, t),
            S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
        }
        return j()(t, e),
          b()(t, [{
            key: "addTips",
            value: function(e) {
              if (e) {
                var t = e.items
                  , r = E()(e, ["items"])
                  , a = t.map(function(e) {
                  if ("recharge_unit" === e.name) {
                    var t = e.props;
                    return "天" === e.props.unitName ? n()({}, e, {
                      props: n()({}, t, {
                        tips: "首次充值游戏时长，可额外赠送3天游戏时长。"
                      })
                    }) : "分钟" === e.props.unitName ? n()({}, e, {
                      props: n()({}, t, {
                        tips: "首次充值游戏时长，可额外赠送2000分钟游戏时长。"
                      })
                    }) : e
                  }
                  return e
                });
                return n()({
                  items: a
                }, r)
              }
              return null
            }
          }, {
            key: "getChannelInformation",
            value: function() {
              var e = f()(d.a.mark(function e(r, a) {
                var n;
                return d.a.wrap(function(e) {
                  for (; ; )
                    switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2,
                          K()(t.prototype.__proto__ || A()(t.prototype), "getChannelInformation", this).call(this, r, a);
                      case 2:
                        return n = e.sent,
                          e.abrupt("return", this.addTips(n));
                      case 4:
                      case "end":
                        return e.stop()
                    }
                }, e, this)
              }));
              return function(t, r) {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "changFormValue",
            value: function(e) {
              var r = K()(t.prototype.__proto__ || A()(t.prototype), "changFormValue", this).call(this, e);
              return this.addTips(r)
            }
          }]),
          t
      }(Ie))
      , Oe = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "getChannelInformation",
          value: function() {
            var e = f()(d.a.mark(function e(r, a) {
              var n;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                        K()(t.prototype.__proto__ || A()(t.prototype), "getChannelInformation", this).call(this, r, a);
                    case 2:
                      return n = e.sent,
                        e.abrupt("return", this.resultHandler(n));
                    case 4:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "resultHandler",
          value: function(e) {
            if (e) {
              var t = e.items
                , r = E()(e, ["items"])
                , a = t.map(function(e) {
                if ("gameName" === e.itemName) {
                  var t = e.props;
                  return n()({}, e, {
                    props: n()({}, t, {
                      tips: "温馨提示：只能充值到金山通行证，联运账号不可在此充值哟！"
                    })
                  })
                }
                return e
              });
              return n()({}, r, {
                items: a
              })
            }
            return e
          }
        }, {
          key: "changFormValue",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "changFormValue", this).call(this, e);
            return this.resultHandler(r)
          }
        }]),
        t
    }(Ie)
      , je = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        t
    }(Oe)
      , Re = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "addTips",
          value: function(e) {
            var t = e.items;
            return e.items = t.reduce(function(e, t) {
              t.itemName,
                t.props;
              return e.push(t),
                [].concat(u()(e))
            }, []),
              e
          }
        }, {
          key: "getChannelInformation",
          value: function() {
            var e = f()(d.a.mark(function e(r, a) {
              var n;
              return d.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                        K()(t.prototype.__proto__ || A()(t.prototype), "getChannelInformation", this).call(this, r, a);
                    case 2:
                      return n = e.sent,
                        e.abrupt("return", this.addTips(n));
                    case 4:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function(t, r) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "changFormValue",
          value: function(e) {
            var r = K()(t.prototype.__proto__ || A()(t.prototype), "changFormValue", this).call(this, e);
            return this.addTips(r)
          }
        }]),
        t
    }(Ie)
      , Ee = r("AyUB")
      , Te = r.n(Ee)
      , Pe = {
      default: "default",
      validate: "validate",
      reLogin: "reLogin"
    }
      , De = (function() {
      function e() {
        y()(this, e),
          this.visible = !0,
          this.timestamp = (new Date).getTime(),
          this.link = "",
          this.status = Pe.default
      }
      b()(e, null, [{
        key: "clone",
        value: function(e) {
          return e.timestamp = (new Date).getTime(),
            n()(Te()(A()(e)), e)
        }
      }])
    }(),
      "SET_GAME")
      , Ne = "SET_CHANNELS"
      , Ge = "UPDATE_CHANNELS"
      , Le = "SET_FORM_CONFIG"
      , He = "UPDATE_MIDDLE_FORM_VALUE"
      , Be = "SET_SUBMIT_STATUS"
      , Me = "SET_CONFIRM_ORDER"
      , Ue = "UPDATE_CONFIRM_ORDER"
      , qe = "SET_GAME_ORDER"
      , Fe = "UPDATE_GAME_ORDER"
      , Qe = "SET_GAME_ORDER_LIST_CONFIG"
      , Ze = "UPDATE_STEP"
      , Ye = "UPDATE_ANTI_ADDICTION"
      , Ke = new (function() {
      function e() {
        var t;
        y()(this, e),
          this.createParamsVariate("ua", "account", "server", "sign", "item", "way", "lock_server"),
          this.createParamsVariate("order_id", "target", "server", "redirect", "type"),
          this.createParamsVariate("trd_nickname", "trd_identifier"),
          this.createParamsVariate("no_header"),
          this.createParamsVariate("charge_title"),
        e.no_header && (e.ua = "game-webview"),
          this.params = "",
          this.state = {
            name: "支付列表",
            ua: e.ua,
            target: e.target,
            no_header: e.no_header,
            channels: [],
            step: 2,
            game: {},
            gameOrder: {},
            gameOrderListConfig: {
              items: {},
              props: {}
            },
            middleFormValue: {},
            submitStatus: !1,
            confirmOrder: {},
            fromConfig: {
              title: "",
              items: [],
              extraParams: {}
            },
            antiAddiction: {
              link: "",
              timestamp: 0
            }
          },
          this.actions = {
            initPage: this.initPage.bind(this),
            getCurrentChannel: this.getCurrentChannel.bind(this),
            getFormValue: this.getFormValue.bind(this),
            createOrder: this.createOrder.bind(this),
            payOrder: this.payOrder.bind(this),
            checkOrder: this.checkOrder.bind(this),
            rePayOrder: this.rePayOrder.bind(this),
            payOrderReselect: this.payOrderReselect.bind(this),
            checkOrderReselect: this.checkOrderReselect.bind(this),
            quickPayOrder: this.quickPayOrder.bind(this)
          },
          this.mutations = (t = {},
            v()(t, De, this.setGame.bind(this)),
            v()(t, Ne, this.setChannels.bind(this)),
            v()(t, Ge, this.updateChannels.bind(this)),
            v()(t, Le, this.setFormConfig.bind(this)),
            v()(t, He, this.updateMiddleFormValue.bind(this)),
            v()(t, Be, this.setSubmitStatus.bind(this)),
            v()(t, Me, this.setConfirmOrder.bind(this)),
            v()(t, Ue, this.updateConfirmOrder.bind(this)),
            v()(t, qe, this.setGameOrder.bind(this)),
            v()(t, Fe, this.updateGameOrder.bind(this)),
            v()(t, Ze, this.updateStep.bind(this)),
            v()(t, Qe, this.gameOrderListConfig.bind(this)),
            v()(t, Ye, this.updateAntiAddiction.bind(this)),
            t),
          this.game = e.getGame({
            name: e.item,
            type: e.target ? e.target : e.account || e.sign ? "in-game" : "common-recharge",
            ua: e.ua,
            redirect: e.redirect,
            chargeType: e.type,
            extraParams: {
              sign: e.sign,
              orderId: e.order_id,
              third_platform: e.trd_identifier
            },
            form: {
              nickname: e.trd_nickname ? decodeURIComponent(e.trd_nickname) : "",
              server: e.server,
              passport: e.account,
              serverDisable: e.lock_server
            }
          })
      }
      return b()(e, [{
        key: "createParamsVariate",
        value: function() {
          for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
            r[a] = arguments[a];
          r.forEach(function(t) {
            e[t] = Object(k.f)(t)
          })
        }
      }, {
        key: "initPage",
        value: function() {
          var t = f()(d.a.mark(function t(r) {
            var a, n, i = r.commit;
            return d.a.wrap(function(t) {
              for (; ; )
                switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2,
                      this.game.getGameInfo();
                  case 2:
                    a = t.sent,
                      n = this.game.getChannels(),
                      i(De, {
                        gameInfo: a
                      }),
                      i(Ne, {
                        channels: n
                      }),
                      i(Ge, e.way),
                      i(Qe, {
                        items: this.game.getOrderItem(),
                        props: this.game.getOrderSucessConfig()
                      }),
                      xoyoConsole.log("游戏信息", a),
                      xoyoConsole.log("充值渠道", n);
                  case 10:
                  case "end":
                    return t.stop()
                }
            }, t, this)
          }));
          return function(e) {
            return t.apply(this, arguments)
          }
        }()
      }, {
        key: "getCurrentChannel",
        value: function() {
          var e = f()(d.a.mark(function e(t, r) {
            var a, n, i, o = t.commit, c = t.state;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r.id,
                      a = r.name,
                      r.url,
                      n = c.middleFormValue,
                      e.next = 4,
                      this.game.getChannelInformation(r, n);
                  case 4:
                    (i = e.sent) && (xoyoConsole.log("表单信息", i),
                      o(Le, i)),
                      xoyoConsole.log("当前选中渠道", a);
                  case 7:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t, r) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "createOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t, r) {
            var a, i, o = t.commit, c = t.state;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return o(Be, {
                      status: !0
                    }),
                      e.next = 3,
                      this.game.createOrder(c.fromConfig, r);
                  case 3:
                    a = e.sent,
                      o(Be, {
                        status: !1
                      }),
                      this.params = a,
                    a && (i = this.game.confirmOrder(c.fromConfig, a),
                      o(Me, n()({}, i, {
                        visible: !0,
                        timestamp: (new Date).getTime()
                      })),
                      xoyoConsole.log("弹窗信息", i)),
                      xoyoConsole.log("提交表单的值", a);
                  case 8:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t, r) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "payOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t) {
            var r, a, i, o = t.commit;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r = this.params,
                      o(Be, {
                        status: !0
                      }),
                      e.next = 4,
                      this.game.payOrder(r);
                  case 4:
                    if (a = e.sent,
                      o(Be, {
                        status: !1
                      }),
                    !a.type || "antiAddiction" !== a.type) {
                      e.next = 9;
                      break
                    }
                    return o(Ye, {
                      link: a.faceid_verify_url,
                      status: a.is_logged_passport ? "default" : "relogin"
                    }),
                      e.abrupt("return");
                  case 9:
                    a && ("nothing" === (i = a.handle_method) ? (o(qe, n()({}, a, {
                      order_status: 2,
                      order_status_text: "充值成功！"
                    })),
                      o(Ze, 3)) : o(qe, "http_post_redirect" === i || "http_post_form_redirect" === i ? n()({}, a) : n()({}, a, {
                      visible: !0,
                      timestamp: (new Date).getTime()
                    }))),
                      xoyoConsole.log("创建后台订单返回结果", n()({}, a, {
                        visible: !0,
                        timestamp: (new Date).getTime()
                      }));
                  case 11:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "quickPayOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t, r) {
            var a, n;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return a = t.state,
                      e.next = 3,
                      this.game.createOrder(a.fromConfig, r);
                  case 3:
                    if (n = e.sent,
                      this.params = n,
                      !n) {
                      e.next = 8;
                      break
                    }
                    return e.next = 8,
                      this.payOrder(t);
                  case 8:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t, r) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "checkOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t) {
            var r, a, n, i, o, c, s = t.commit, u = t.state;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r = u.gameOrder,
                      a = r.game,
                      n = r.channel,
                      i = r.order_id,
                      o = r.vouch_code,
                      e.next = 3,
                      this.game.checkOrder({
                        game: a,
                        channel: n,
                        order_id: i,
                        vouch_code: o
                      });
                  case 3:
                    c = e.sent,
                      s(Fe, c),
                      s(Ze, 3);
                  case 6:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "rePayOrder",
        value: function() {
          var e = f()(d.a.mark(function e(t) {
            var r, a, i, o, c, s, u = t.commit, l = t.state;
            return d.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return r = l.gameOrder,
                      a = r.game,
                      i = r.channel,
                      o = r.order_id,
                      c = r.vouch_code,
                      e.next = 3,
                      this.game.rePayOrder({
                        game: a,
                        channel: i,
                        order_id: o,
                        vouch_code: c
                      });
                  case 3:
                    (s = e.sent) ? "nothing" === s.handle_method ? (u(Fe, n()({}, s, {
                      order_status: 2,
                      order_status_text: "充值成功！"
                    })),
                      u(Ze, 3)) : u(Fe, n()({}, s, {
                      visible: !0,
                      timestamp: (new Date).getTime()
                    })) : u(Ze, 2);
                  case 5:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          }));
          return function(t) {
            return e.apply(this, arguments)
          }
        }()
      }, {
        key: "payOrderReselect",
        value: function() {
          this.game.prefession.payOrderReselect()
        }
      }, {
        key: "checkOrderReselect",
        value: function() {
          this.game.prefession.checkOrderReselect()
        }
      }, {
        key: "getFormValue",
        value: function(e, t) {
          var r = e.commit;
          xoyoConsole.log("表单值为", p()(t)),
            r(He, t);
          var a = this.game.changFormValue(t);
          r(Le, a)
        }
      }, {
        key: "setSubmitStatus",
        value: function(e, t) {
          var r = t.status;
          e.submitStatus = r
        }
      }, {
        key: "setGame",
        value: function(e, t) {
          var r = t.gameInfo;
          e.game = n()({}, r)
        }
      }, {
        key: "setChannels",
        value: function(e, t) {
          var r = t.channels;
          e.channels = [].concat(u()(r))
        }
      }, {
        key: "setFormConfig",
        value: function(e, t) {
          e.fromConfig = n()({}, t)
        }
      }, {
        key: "updateChannels",
        value: function(e, t) {
          if (t) {
            var r = !1;
            e.channels = e.channels.map(function(e) {
              return e.id === t ? (r = !0,
                n()({}, e, {
                  defaultActive: !0
                })) : n()({}, e, {
                defaultActive: !1
              })
            }),
            r || this.updateChannels(e)
          } else {
            var a = !1;
            e.channels = e.channels.map(function(e) {
              return e.url || a ? n()({}, e, {
                defaultActive: !1
              }) : (a = !0,
                n()({}, e, {
                  defaultActive: !0
                }))
            })
          }
        }
      }, {
        key: "updateMiddleFormValue",
        value: function(e, t) {
          var r = e.middleFormValue;
          e.middleFormValue = n()({}, r, t)
        }
      }, {
        key: "setConfirmOrder",
        value: function(e, t) {
          e.confirmOrder = t
        }
      }, {
        key: "updateConfirmOrder",
        value: function(e, t) {
          e.confirmOrder = n()({}, e.confirmOrder, {
            visible: t,
            timestamp: (new Date).getTime()
          })
        }
      }, {
        key: "setGameOrder",
        value: function(e, t) {
          e.gameOrder = t
        }
      }, {
        key: "updateGameOrder",
        value: function(e, t) {
          var r = e.gameOrder;
          e.gameOrder = n()({}, r, t)
        }
      }, {
        key: "updateStep",
        value: function(e, t) {
          e.step = t
        }
      }, {
        key: "gameOrderListConfig",
        value: function(e, t) {
          e.gameOrderListConfig = t
        }
      }, {
        key: "updateAntiAddiction",
        value: function(t, r) {
          var a = r.link
            , n = r.status
            , i = "";
          t.confirmOrder.orderInfo && (i = t.confirmOrder.orderInfo[0] && t.confirmOrder.orderInfo[0].value),
          i || (i = e.account || ""),
            console.log("state.confirmOrder", t.confirmOrder.orderInfo),
            t.antiAddiction = {
              account: i,
              status: n,
              link: a,
              timestamp: (new Date).getTime()
            }
        }
      }], [{
        key: "getGame",
        value: function(e) {
          switch (e.name) {
            case "jx3":
              return new Se(e);
            case "jx3yq":
              return new Re(e);
            case "cs":
              return new je(e);
            case "extopia":
              return new Oe(e);
            default:
              return new Ie(e)
          }
        }
      }]),
        e
    }())
      , ze = r("PAar")
      , Ve = {
      payPage: {
        modules: {
          payStore: Ke,
          antiAddictionStore: ze.b
        }
      },
      gameclientpayPage: {
        modules: {
          payStore: Ke,
          antiAddictionStore: ze.b
        }
      }
    }
      , Je = (r("vToc"),
      r("7H7Y"))
      , We = r.n(Je)
      , Xe = r("1yt7")
      , $e = r.n(Xe)
      , et = r("YRK8")
      , tt = r.n(et)
      , rt = r("FyfS")
      , at = r.n(rt)
      , nt = r("Hp9M")
      , it = r.n(nt)
      , ot = r("tJFH")
      , ct = r("Xi3Z")
      , st = r.n(ct)
      , ut = r("4d7F")
      , lt = r.n(ut)
      , pt = r("jpbM")
      , ht = r.n(pt);
    function dt(e, t, r) {
      e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent("on" + t, r.bind(e))
    }
    var mt;
    mt = [];
    function ft(e, t) {
      if ((t = t || document).getElementsByClassName)
        return t.getElementsByClassName(e);
      for (var r = [], a = t.getElementsByTagName("*"), n = new RegExp("\\b" + e + "\\b"), i = 0; i < a.length; i++)
        n.test(a[i].className) && r.push(a[i]);
      return r
    }
    var gt = 0
      , vt = 1
      , _t = function() {
      function e(t) {
        var r = t.captchaPicUrl
          , a = void 0 === r ? "https://apps-ws.xoyo.com/passport/captcha" : r
          , n = t.elementId
          , i = void 0 === n ? e.getRandomElementId() : n;
        y()(this, e),
          this.captchaPicUrl = a,
          this.elementId = i,
          this.onSuccessList = [],
          this.onPicCaptchaClick = this.onPicCaptchaClick.bind(this)
      }
      return b()(e, [{
        key: "verify",
        value: function() {
          var e = this;
          return new lt.a(function(t) {
              e.resolve = t,
                e.open()
            }
          )
        }
      }, {
        key: "reset",
        value: function() {
          this.$pictureCaptcha && (this.close(),
            this.$pictureCaptcha.parentNode.removeChild(this.$pictureCaptcha),
            this.$pictureCaptcha = null)
        }
      }, {
        key: "onSuccess",
        value: function(e) {
          e && this.onSuccessList.push(e)
        }
      }, {
        key: "onSuccessHandler",
        value: function() {
          this.onSuccessList.forEach(function(e) {
            e()
          })
        }
      }, {
        key: "getValidate",
        value: function() {
          return this.value.data
        }
      }, {
        key: "onSubmitClick",
        value: function() {
          var e = this.$input.value;
          if (e) {
            var t = {
              state: vt,
              data: {
                phrase: e,
                tag: this.elementId
              }
            };
            this.resolve(t),
              this.value = t,
              this.onSuccessHandler(),
              this.close()
          } else
            alert("请填写验证码!")
        }
      }, {
        key: "onPicCaptchaClick",
        value: function(e) {
          e.target.src = this.refreshPicCaptchaSrc()
        }
      }, {
        key: "refreshPicCaptchaSrc",
        value: function() {
          return this.captchaPicUrl + "?tag=" + this.elementId + "&" + +new Date
        }
      }, {
        key: "onCloseButtonClick",
        value: function() {
          this.resolve({
            state: gt,
            data: null
          }),
            this.close()
        }
      }, {
        key: "open",
        value: function() {
          this.$pictureCaptcha || (this.$pictureCaptcha = this.renderPictureCaptcha()),
            this.$pictureCaptcha.style.display = "block",
            document.body.appendChild(this.$pictureCaptcha)
        }
      }, {
        key: "close",
        value: function() {
          var e = this.$pictureCaptcha;
          e && (e.style.display = "none")
        }
      }, {
        key: "renderPictureCaptcha",
        value: function() {
          var e = this
            , t = document.createElement("div");
          t.innerHTML = '<div class="xsj-pic-captcha"><div class="xsj-pic-captcha-sliver" style="background: #808080; background-color: rgba(0, 0, 0, 0.5); bottom: 0; left: 0; position: fixed; right: 0; top: 0; z-index: 9000;"></div><div class="xsj-pic-captcha-box" style="background: #fff; box-sizing: content-box; left: 50%; margin-left: -160px; margin-top: -72px; padding: 20px; position: fixed; top: 50%; width: 300px; z-index: 9999;"><img class="xsj-pic-captcha-close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVQ4T7WT0Q2AMAhE7zZyFEdwNEdwFDfCkFRjEVqaxv60TeABB1BETgAbSb3TR0QWADvL4wCwZiGVj4YcgVhb3jlnIJ7NA+hlEgWoABGkld0HYCGlxFBkF2Ag+g079A/gXfNwCZ5gaRFbht02Tg1Sxjma2Pllml3nC2ohigWIYK4xAAAAAElFTkSuQmCC" style="cursor: pointer; font-size: 12px; position: absolute; right: -20px; top: 0;"><div class="xsj-pic-captcha-wrap" style="overflow: hidden; width: 100%;"><input class="xsj-pic-captcha-input" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x9A8C;&#x8BC1;&#x7801;" style="-moz-border-radius: 4px; -moz-box-sizing: content-box; -ms-border-radius: 4px; -o-border-radius: 4px; -webkit-border-radius: 4px; -webkit-box-sizing: content-box; background-color: #fff; border: 1px solid #e6e6e6; border-radius: 4px; box-sizing: content-box; color: #333; float: left; font-size: 14px; height: 48px; line-height: 48px !important; padding: 0 8px; vertical-align: middle; width: 164px;"> <img class="xsj-pic-captcha-img" style="-moz-box-sizing: content-box; -webkit-box-sizing: content-box; box-sizing: content-box; cursor: pointer; float: right; height: 48px; vertical-align: middle; width: 104px;"></div><button class="xsj-pic-captcha-btn" style="background: #1890ff; border: 1px #1890ff solid; border-radius: 5px; color: #fff; cursor: pointer; display: block; font-size: 16px; height: 44px; margin-top: 10px; width: 100%;">确认</button></div></div>';
          var r = t.firstChild
            , a = ft("xsj-pic-captcha-close", r)[0];
          this.$input = ft("xsj-pic-captcha-input", r)[0];
          var n = ft("xsj-pic-captcha-img", r)[0];
          n.src = this.refreshPicCaptchaSrc(),
            dt(n, "click", this.onPicCaptchaClick);
          var i = ft("xsj-pic-captcha-btn", r)[0];
          return dt(a, "click", function() {
            return e.onCloseButtonClick()
          }),
            dt(n, "click", this.onPicCaptchaClick),
            dt(i, "click", function() {
              return e.onSubmitClick()
            }),
            dt(this.$input, "keydown", function(e) {
              13 === e.keyCode && (e.preventDefault(),
                i.click())
            }),
            r
        }
      }], [{
        key: "getRandomElementId",
        value: function() {
          return String(ht()())
        }
      }]),
        e
    }()
      , yt = r("gPWK")
      , xt = r.n(yt)
      , bt = Object(k.f)("no-captcha")
      , kt = {
      requestImpl: function(e, t) {
        return Pt.preAuth(t)
      }
    }
      , wt = {
      captchaPicUrl: ot.a.backendServer + "/passport/common_api/captcha"
    }
      , Ct = function() {
      function e() {
        y()(this, e)
      }
      return b()(e, null, [{
        key: "infoDialog",
        value: function(e, t, r) {
          o.a.prototype.$message.info({
            message: e,
            duration: "number" == typeof r ? r : ot.a.messageDuration,
            onClose: t
          })
        }
      }, {
        key: "warningDialog",
        value: function(e, t, r, a) {
          o.a.prototype.$message.warning({
            dangerouslyUseHTMLString: a,
            message: e,
            duration: "number" == typeof r ? r : ot.a.messageDuration,
            onClose: t
          })
        }
      }, {
        key: "errorDialog",
        value: function(e, t, r) {
          o.a.prototype.$message.error({
            message: e,
            duration: "number" == typeof r ? r : ot.a.messageDuration,
            onClose: t
          })
        }
      }, {
        key: "successDialog",
        value: function(e, t, r) {
          o.a.prototype.$message.success({
            message: e,
            duration: "number" == typeof r ? r : ot.a.messageDuration,
            onClose: t
          })
        }
      }, {
        key: "initWebGeetTest",
        value: function(e, t) {
          var r = new _t(wt);
          try {
            Pt.preAuth().then(function(a) {
              var i = a.status
                , o = a.data;
              if ("true" === bt)
                return t(new k.a),
                  !1;
              if (i > 0) {
                var c = o.mode
                  , s = o.config;
                switch (c) {
                  case 1:
                    t(r);
                    break;
                  case 2:
                    var u = n()({}, s);
                    "bind" === e && (u.product = e),
                      st.a.init(u).then(function(e) {
                        t(e)
                      });
                    break;
                  default:
                    throw new Error("没有该验证码格式")
                }
              }
            })
          } catch (e) {
            console.error(e)
          }
        }
      }, {
        key: "stampToDate",
        value: function(e) {
          if (e) {
            var t = new Date(1e3 * e);
            return function(e) {
              var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
              };
              for (var r in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
                t)
                new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[r] : ("00" + t[r]).substr(("" + t[r]).length)));
              return e
            }
              .call(t, "yyyy-MM-dd  hh:mm:ss")
          }
        }
      }, {
        key: "stampToDateTime",
        value: function(e) {
          if (e)
            return new Date(1e3 * e).toLocaleString().replace(/\//g, "-")
        }
      }, {
        key: "getUserInfo",
        value: function() {
          var e = this;
          Pt.getInfo().then(function(t) {
            var r = t.status
              , a = t.message
              , n = t.data;
            if (r > 0) {
              var i = n;
              k.e.$emit("userinfo", i)
            } else
              e.errorDialog(a)
          })
        }
      }, {
        key: "getUserInfoNoError",
        value: function() {
          Pt.getInfo().then(function(e) {
            var t = e.status
              , r = e.data;
            if (t > 0) {
              var a = r;
              k.e.$emit("userinfo", a)
            }
          })
        }
      }, {
        key: "getProfile",
        value: function(e) {
          var t = this;
          Pt.getProfile().then(function(r) {
            var a = r.status
              , n = r.message
              , i = r.data;
            if (a > 0) {
              if (!e)
                return i;
              e(i)
            } else {
              if (-20101 === a || -10402 === a)
                return !1;
              t.errorDialog(n)
            }
          })
        }
      }, {
        key: "clearStorage",
        value: function() {
          k.i.removeItem("charge-record-token")
        }
      }, {
        key: "logout",
        value: function(e) {
          var t = this;
          Pt.logout().then(function(r) {
            var a = r.status
              , n = r.message;
            a > 0 ? e ? e() : (t.clearStorage(),
              t.successDialog("已退出登录", function() {
                window.location.reload()
              })) : t.errorDialog(n)
          })
        }
      }, {
        key: "loginTimeout",
        value: function() {
          var e = this
            , t = window.location.href;
          this.warningDialog("登录超时，即将跳转到登录页", function() {
            e.logout(function() {
              k.k.xoyoUrl.test(t) ? window.location.href = w.a.signin.path + "?redirect=" + encodeURIComponent(t) : window.location.href = w.a.signin.path
            })
          })
        }
      }, {
        key: "directUrl",
        value: function(e, t) {
          if (-1 === e.indexOf("http://") && -1 === e.indexOf("https://") && (e = "http://" + e),
          -1 !== e.indexOf("?") && "post" === t) {
            for (var r = {}, a = e.split("?")[1].split("&"), n = 0; n < a.length; n++) {
              var i = a[n]
                , o = i.indexOf("=")
                , c = i.slice(0, o)
                , s = i.slice(o + 1);
              r[c] = s
            }
            return r
          }
          return e
        }
      }, {
        key: "getYearList",
        value: function(e) {
          for (var t = (new Date).getFullYear(), r = t - e, a = [], n = 0; n <= r; n++)
            a.push(t - n);
          return a
        }
      }, {
        key: "getGameCenterContents",
        value: function(e) {
          var t = this
            , r = []
            , a = []
            , n = []
            , i = [];
          Ot.getGameCenterContents().then(function(o) {
            var c = o.status
              , s = o.message
              , u = o.data;
            c > 0 ? (r = u.ad_gameslider_1920x300,
              function(e) {
                var t = {
                  title: "剑侠系列",
                  list: []
                }
                  , r = {
                  title: "其他系列",
                  list: []
                }
                  , o = !0
                  , c = !1
                  , s = void 0;
                try {
                  for (var u, l = at()(e.game_list); !(o = (u = l.next()).done); o = !0) {
                    var p = u.value;
                    "4009" === p.cat_id ? (n.push(p),
                      t.list.push({
                        text: p.title,
                        path: p.website_url,
                        type: p.game_type,
                        recommand: p.recommend_type
                      })) : "4010" === p.cat_id && (i.push(p),
                      r.list.push({
                        text: p.title,
                        path: p.website_url,
                        type: p.game_type,
                        recommand: p.recommend_type
                      }))
                  }
                } catch (e) {
                  c = !0,
                    s = e
                } finally {
                  try {
                    !o && l.return && l.return()
                  } finally {
                    if (c)
                      throw s
                  }
                }
                a.push(t),
                  a.push(r)
              }(u),
              e({
                adSlider: r,
                allGames: a,
                jxGames: n,
                etcGames: i
              })) : t.errorDialog(s)
          })
        }
      }, {
        key: "getAllContents",
        value: function(e) {
          var t = this;
          Ot.getAllContents().then(function(r) {
            var a = r.status
              , n = r.message
              , i = r.data;
            a > 0 ? e(i) : t.errorDialog(n)
          })
        }
      }, {
        key: "getNewsList",
        value: function(e, t) {
          var r = this;
          Ot.getNewsList({
            page: e,
            catid: 4018
          }).then(function(e) {
            var a = e.status
              , n = e.message
              , i = e.data;
            a > 0 ? t(i) : r.errorDialog(n)
          })
        }
      }, {
        key: "getXoyoPf",
        value: function() {
          return it()("xoyoPf") && it()("xoyoPf").slice(32)
        }
      }]),
        e
    }();
    Ct.captchaHandler = "true" === bt ? new k.a : new xt.a({
      geeTestSettings: kt,
      pictureSettings: wt
    });
    var At = r("4RXF")
      , It = ot.a.contentServer
      , St = function() {
      var e = new Date
        , t = e.getFullYear()
        , r = e.getDate()
        , a = e.getMonth()
        , n = e.getHours()
        , i = e.getMinutes();
      return new Date(t,a,r,n,10 * parseInt(i / 10)).getTime()
    }
      , Ot = {
      getAllContents: function() {
        return Object(At.a)(It + "/api/page/index.html", {
          callbackName: "xoyoGetAllContents" + St()
        })
      },
      getGameCenterContents: function() {
        return Object(At.a)(It + "/api/page/game.html", {
          callbackName: "xoyoGetGameCenterContents" + St()
        })
      },
      getHelpCatgories: function() {
        return Object(At.a)(It + "/api/help/list.html?action=category", {
          callbackName: "xoyoGetHelpCatgories" + St()
        })
      },
      getHelpCategoryContent: function(e) {
        return Object(At.a)(It + "/api/help/list.html?action=list&catid=" + e, {
          callbackName: "xoyoGetHelpCategoryContent" + St()
        })
      },
      getAvatarList: function() {
        return Object(At.a)(It + "/api/avatar/list.html", {
          callbackName: "xoyoGetAvatarList" + St()
        })
      },
      getSitemap: function() {
        return Object(At.a)(It + "/api/content/get.html?name=sitemap", {
          callbackName: "xoyoGetSitemap" + St()
        })
      },
      getNewsList: function(e) {
        return Object(At.a)(It + "/api/content/get.html?type=list&catid=" + e.catid + "&page=" + e.page, {
          callbackName: "xoyoGetNewsList" + St()
        })
      },
      getNewsContent: function(e) {
        return Object(At.a)(It + "/api/content/get.html?type=content&catid=" + e.catid + "&id=" + e.id, {
          callbackName: "xoyoGetNewsContent" + St()
        })
      },
      getProtocol: function(e) {
        return Object(At.a)(It + "/api/protocol/info.html", n()({
          callbackName: "xoyoGetProtocol" + St()
        }, e))
      },
      getDownload: function() {
        return Object(At.a)(It + "/api/app/download.html", {
          callbackName: "xoyoGetDownload" + St()
        })
      },
      getRobotList: function() {
        return Object(At.a)(It + "/api.php?op=search_api&action=get_article_list&pageSize=10&orderBy=listorder&sortBy=desc&moreInfo=1&catid=6973", {
          callbackName: "xoyoGetDownload" + St()
        })
      }
    }
      , jt = r("mPzh")
      , Rt = r.n(jt);
    function Et(e) {
      return new Rt.a({
        publicKey: ot.a.publicKey,
        dataHandler: function(e) {
          return {
            encrypt_method: "xoyo_combine",
            encrypt_fields: "payload",
            encrypt_version: "v1",
            payload: e
          }
        }
      }).getText(e)
    }
    var Tt = ot.a.backendServer
      , Pt = {
      getAccount: function() {
        return Object(At.a)(Tt + "/passport/common_api/get_info")
      },
      getAuthUrl: function(e) {
        return Object(At.a)(Tt + "/passport/thirdparty_api/get_authorize_url", n()({}, e))
      },
      getInfo: function(e) {
        return Object(At.a)(Tt + "/passport/user_api/get_info", n()({}, e))
      },
      setProfile: function(e) {
        return Object(At.a)(Tt + "/passport/user_api/set_profile", n()({}, e))
      },
      checkNickName: function(e) {
        return Object(At.a)(Tt + "/passport/user_api/check_nickname", n()({}, e))
      },
      getOperationRecord: function(e) {
        return Object(At.a)(Tt + "/passport/user_api/get_operation_record", n()({}, e))
      },
      getPlayGameList: function() {
        return Object(At.a)(Tt + "/passport/user_api/get_play_game_list")
      },
      setAvatar: function(e) {
        return Object(At.a)(Tt + "/passport/user_api/set_avatar", n()({}, e))
      },
      getProfile: function() {
        return Object(At.a)(Tt + "/passport/user_api/get_profile")
      },
      getProfileConfig: function() {
        return Object(At.a)(Tt + "/passport/user_api/get_profile_config")
      },
      getKcoinInfo: function() {
        return Object(At.a)(Tt + "/passport/kcoin_api/get_info")
      },
      savePayPassword: function(e) {
        return Object(At.a)(Tt + "/passport/kcoin_api/save_pay_password", n()({}, e))
      },
      saveDailyConsumeLimit: function(e) {
        return Object(At.a)(Tt + "/passport/kcoin_api/save_daily_consume_limit", n()({}, e))
      },
      getKcoinRecord: function(e) {
        return Object(At.a)(Tt + "/passport/kcoin_api/get_record", n()({}, e))
      },
      getKcoinRecordToken: function(e) {
        return Object(At.a)(Tt + "/passport/kcoin_api/get_record_token", n()({}, e))
      },
      supportGameList: function() {
        return Object(At.a)(Tt + "/passport/kcoin_api/support_game_list")
      },
      getGameList: function() {
        return Object(At.a)(Tt + "/passport/pay_api/get_game_list")
      },
      loadGatewayInfo: function(e) {
        return Object(At.a)(Tt + "/passport/pay_api/load_gateway_info", n()({}, e))
      },
      queryBalance: function(e) {
        return Object(At.a)(Tt + "/passport/pay_api/query_balance", n()({}, e))
      },
      queryRecord: function(e) {
        return Object(At.a)(Tt + "/passport/pay_api/query_record", n()({}, e))
      },
      preAuth: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/pre_auth", n()({}, e))
      },
      login: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/login", n()({}, e))
      },
      logout: function() {
        return Object(At.a)(Tt + "/passport/common_api/logout")
      },
      registerCommon: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/register", n()({}, Et(e)))
      },
      registerMobile: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/register_mobile", n()({}, Et(e)))
      },
      registerEmail: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/register_email", n()({}, Et(e)))
      },
      userExist: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/exist", n()({}, e))
      },
      commonSendCode: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/send_code", n()({}, e))
      },
      commonCheckCode: function(e) {
        return Object(At.a)(Tt + "/passport/common_api/check_code", n()({}, e))
      },
      getAntiAddictionState: function() {
        return Object(At.a)(Tt + "/passport/user_api/get_anti_addiction_state")
      },
      getClientAntiAddictionState: function(e) {
        return Object(At.a)(Tt + "/passport/user_api/get_anti_addiction_state_by_client", n()({}, e))
      },
      verifyStatus: function() {
        return Object(At.a)(Tt + "/passport/common_api/verify_status")
      },
      reportVisit: function(e) {
        return Object(At.a)(Tt + "/passport/statistics_api/visit", n()({}, e))
      },
      reportClick: function(e) {
        return Object(At.a)(Tt + "/passport/statistics_api/click", n()({}, e))
      },
      getWeakPasswordUpgradeStateByClient: function(e) {
        return Object(At.a)(Tt + "/passport/user_api/get_weak_password_upgrade_state_by_client", n()({}, e))
      },
      getBindThridPartyInfo: function() {
        return Object(At.a)(Tt + "/passport/common_api/get_bind_thirdparty_info")
      },
      getRulesConfig: function() {
        return Object(At.a)(Tt + "/passport/common_api/get_rule_config")
      }
    }
      , Dt = (r("mCGx"),
      ot.a.payServer)
      , Nt = {
      gameClientChannelInforamtion: function(e) {
        return Object(At.a)(Dt + "/pay/client_api/game_channel_information", n()({}, e))
      },
      gameClientRechargeInformation: function(e) {
        return Object(At.a)(Dt + "/pay/client_api/recharge_information", n()({}, e))
      },
      gameClientCreateOrder: function(e) {
        return Object(At.a)(Dt + "/pay/client_api/create_order", n()({}, e))
      },
      gameClientGetOrderStatus: function(e) {
        return Object(At.a)(Dt + "/pay/client_api/get_order_status", n()({}, e))
      },
      gameClientRetryOrder: function(e) {
        return Object(At.a)(Dt + "/pay/client_api/retry_order", n()({}, e))
      },
      getGameClientOrderId: function(e) {
        return Object(At.a)(Dt + "/pay/client_api/get_order_id", n()({}, e))
      },
      gameStoreChannelInforamtion: function(e) {
        return Object(At.a)(Dt + "/pay/store_api/game_channel_information", n()({}, e))
      },
      gameStoreRechargeInformation: function(e) {
        return Object(At.a)(Dt + "/pay/store_api/recharge_information", n()({}, e))
      },
      gameStoreCreateOrder: function(e) {
        return Object(At.a)(Dt + "/pay/store_api/create_order", n()({}, e))
      },
      gameStoreGetOrderStatus: function(e) {
        return Object(At.a)(Dt + "/pay/store_api/get_order_status", n()({}, e))
      },
      gameStoreRetryOrder: function(e) {
        return Object(At.a)(Dt + "/pay/store_api/retry_order", n()({}, e))
      },
      getGameOrderId: function(e) {
        return Object(At.a)(Dt + "/pay/store_api/get_order_id", n()({}, e))
      },
      autoLogin: function(e) {
        return Object(At.a)(Dt + "/pay/recharge_api/auto_login" + window.location.search, n()({}, e))
      },
      gameChannelInformation: function(e) {
        return Object(At.a)(Dt + "/pay/recharge_api/game_channel_information" + window.location.search, n()({}, e))
      },
      rechargeInformation: function(e) {
        return Object(At.a)(Dt + "/pay/recharge_api/recharge_information", n()({}, e))
      },
      createOrder: function(e) {
        return Object(At.a)(Dt + "/pay/recharge_api/create_order", n()({}, Et(e)))
      },
      getOrderStatus: function(e) {
        return Object(At.a)(Dt + "/pay/recharge_api/get_order_status", n()({}, e))
      },
      retryOrder: function(e) {
        return Object(At.a)(Dt + "/pay/recharge_api/retry_order", n()({}, e))
      },
      getWeekRechargeHistory: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/get_week_recharge_history", n()({}, e))
      },
      getTodayRechargeHistory: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/get_today_recharge_history", n()({}, e))
      },
      getAllRechargeHistory: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/get_all_recharge_history", n()({}, e))
      },
      checkKcard: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/check_kcard", n()({}, e))
      },
      queryRechargeOrder: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/query_recharge_order", n()({}, e))
      },
      getGameList: function() {
        return Object(At.a)(Dt + "/pay/query_api/get_game_list")
      },
      loadGatewayInfo: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/get_gateway_list", n()({}, e))
      },
      queryBalance: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/get_balance", n()({}, e))
      },
      getRecordToken: function(e) {
        return Object(At.a)(Dt + "/pay/query_api/get_record_token", n()({}, e))
      },
      queryInvoiceOrderList: function(e) {
        return Object(At.a)(Dt + "/pay/invoice_api/query_invoice_order_list", n()({}, e))
      },
      submitInvoiceApply: function(e) {
        return Object(At.a)(Dt + "/pay/invoice_api/submit_invoice_apply", n()({}, e))
      },
      invoiceApplyRecordList: function(e) {
        return Object(At.a)(Dt + "/pay/invoice_api/invoice_apply_record_list", n()({}, e))
      },
      invoiceApplyRecordDetail: function(e) {
        return Object(At.a)(Dt + "/pay/invoice_api/invoice_apply_record_detail", n()({}, e))
      },
      invoiceApplyRecordOrderList: function(e) {
        return Object(At.a)(Dt + "/pay/invoice_api/invoice_apply_record_order_list", n()({}, e))
      },
      getQueryToken: function(e) {
        return Object(At.a)(Dt + "/pay/invoice_api/get_query_token", n()({}, e))
      }
    }
      , Gt = ot.a.backendServer
      , Lt = {
      freeze: function(e) {
        return Object(At.a)(Gt + "/safe/zizhu_api/freeze", n()({}, e))
      },
      unfreeze: function(e) {
        return Object(At.a)(Gt + "/safe/zizhu_api/unfreeze", n()({}, e))
      },
      kick: function(e) {
        return Object(At.a)(Gt + "/safe/zizhu_api/kick_account", n()({}, e))
      },
      currentTime: function(e) {
        return Object(At.a)(Gt + "/safe/token_api/current_time", n()({}, e))
      },
      getInfo: function(e) {
        return Object(At.a)(Gt + "/safe/token_api/get_info", n()({}, e))
      },
      bind: function(e) {
        return Object(At.a)(Gt + "/safe/token_api/bind", n()({}, e))
      },
      unbind: function(e) {
        return Object(At.a)(Gt + "/safe/token_api/unbind", n()({}, e))
      },
      supportGameList: function(e) {
        return Object(At.a)(Gt + "/safe/token_api/support_game_list", n()({}, e))
      },
      getSupportGame: function(e) {
        return Object(At.a)(Gt + "/safe/zizhu_api/get_support_game", n()({}, e))
      },
      activeGames: function(e) {
        return Object(At.a)(Gt + "/safe/token_api/active_games", n()({}, e))
      },
      inactiveGames: function(e) {
        return Object(At.a)(Gt + "/safe/token_api/inactive_games", n()({}, e))
      },
      asyncGetRoleList: function(e) {
        return Object(At.a)(Gt + "/safe/game_api/async_get_role_list", n()({}, e))
      },
      getRoleListResult: function(e) {
        return Object(At.a)(Gt + "/safe/game_api/get_role_list_result", n()({}, e))
      },
      retrievePwd: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/retrieve_pwd", n()({}, e))
      },
      retrievePassword: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/reset_password", n()({}, e))
      },
      changePwd: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/change_pwd", n()({}, e))
      },
      idNumValidation: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/idnum_validation", n()({}, e))
      },
      bindEmail: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/bind_email", n()({}, e))
      },
      changeBindEmail: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/change_bind_email", n()({}, e))
      },
      bindMobile: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/bind_mobile", n()({}, e))
      },
      sendUpdateBindMobileCode: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/send_modify_mobile_message", n()({}, e))
      },
      modifyMobile: function() {
        return Object(At.a)(Gt + "/safe/safe_api/modify_mobile")
      },
      changeBindMobile: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/change_bind_mobile", n()({}, e))
      },
      bindIdNum: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/bind_id_num", n()({}, e))
      },
      bindAntiAddictionInfo: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/bind_anti_addiction_info", n()({}, e))
      },
      bindAntiAddictionInfoByClient: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/bind_anti_addiction_info_by_client", n()({}, e))
      },
      getAccountState: function(e) {
        return Object(At.a)(Gt + "/safe/game_api/get_account_state", n()({}, e))
      },
      weakPasswordUpgradeByClient: function(e) {
        return Object(At.a)(Gt + "/safe/safe_api/weak_password_upgrade_by_client", n()({}, e))
      },
      apiUseQueueSystemConfig: function() {
        return Object(At.a)(Gt + "/safe/safe_api/api_use_queue_system_config")
      }
    }
      , Ht = ot.a.backendServer
      , Bt = "//ws.xoyo.com/jx2/roletransfer170515"
      , Mt = {
      getUnusualLoginInfo: function() {
        return Object(At.a)(Ht + "/service/csonline_api/get_unusual_login_info")
      },
      getAddressList: function() {
        return Object(At.a)(Ht + "/service/csonline_api/get_address_list")
      },
      getNormalLoginAdress: function() {
        return Object(At.a)(Ht + "/service/csonline_api/get_normal_login_address")
      },
      setNormalLoginAddress: function(e) {
        return Object(At.a)(Ht + "/service/csonline_api/set_normal_login_address", n()({}, e))
      },
      setUnusualLoginSwitch: function(e) {
        return Object(At.a)(Ht + "/service/csonline_api/set_unusual_login_switch", n()({}, e))
      },
      getServerList: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/get_server_list", n()({}, e))
      },
      jx3yqGetServerList: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_server_list", n()({}, e))
      },
      getRoleList: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/get_role_list", n()({}, e))
      },
      jx3yqGetRoleList: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_role_list", n()({}, e))
      },
      checkRoleState: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/check_role_state", n()({}, e))
      },
      jx3yqCheckRoleState: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/check_role_state", n()({}, e))
      },
      paidChangeRoleName: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/paid_change_role_name", n()({}, e))
      },
      jx3yqPaidChangeRoleName: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/paid_change_role_name", n()({}, e))
      },
      paidChangeGangName: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/paid_change_gang_name", n()({}, e))
      },
      jx3yqPaidChangeGangName: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/paid_change_gang_name", n()({}, e))
      },
      paidTransferRoleAccount: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/paid_transfer_role_account", n()({}, e))
      },
      jx3yqPaidTransferRoleAccount: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/paid_transfer_role_account", n()({}, e))
      },
      paidTransferRoleServer: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/paid_transfer_role_server", n()({}, e))
      },
      jx3yqPaidTransferRoleServer: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/paid_transfer_role_server", n()({}, e))
      },
      getTargetServerList: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/get_target_server_list", n()({}, e))
      },
      jx3yqGetTargetServerList: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_target_server_list", n()({}, e))
      },
      checkServerState: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/check_server_state", n()({}, e))
      },
      jx3yqCheckServerState: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/check_server_state", n()({}, e))
      },
      getGanInfo: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/get_gang_info", n()({}, e))
      },
      jx3yqGetGanInfo: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_gang_info", n()({}, e))
      },
      validateBindInfo: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/validate_bind_info", n()({}, e))
      },
      jx3yqValidateBindInfo: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/validate_bind_info", n()({}, e))
      },
      jx2GetConfig: function() {
        return Object(At.a)(Bt + "/get_config")
      },
      jx2GetPhoneCode: function(e) {
        return Object(At.a)(Bt + "/get_phone_code", n()({}, e))
      },
      jx2AddQualification: function(e) {
        return Object(At.a)(Bt + "/add_qualification", n()({}, e))
      },
      jx2AddRoleTransfer: function(e) {
        return Object(At.a)(Bt + "/add_role_transfer", n()({}, e))
      },
      jx2CancelTransfer: function(e) {
        return Object(At.a)(Bt + "/cancle_transfer", n()({}, e))
      },
      getVasRecord: function() {
        return Object(At.a)(Ht + "/service/jx3_api/get_record")
      },
      jx3yqGetVasRecord: function() {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_record")
      },
      getVasRecordInfo: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/record_info", n()({}, e))
      },
      jx3yqGetVasRecordInfo: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/record_info", n()({}, e))
      },
      getServiceList: function() {
        return Object(At.a)(Ht + "/service/jx3_api/get_service_list")
      },
      jx3yqGetServiceList: function() {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_service_list")
      },
      getTomorrowMaintainStatus: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/get_tomorrow_maintain_status", n()({}, e))
      },
      jx3yqGetTomorrowMaintainStatus: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_tomorrow_maintain_status", n()({}, e))
      },
      getZoneBalance: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/get_zone_balance", n()({}, e))
      },
      jx3yqGetZoneBalance: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/get_zone_balance", n()({}, e))
      },
      checkTargetAccountState: function(e) {
        return Object(At.a)(Ht + "/service/jx3_api/check_target_account_state", n()({}, e))
      },
      jx3yqCheckTargetAccountState: function(e) {
        return Object(At.a)(Ht + "/service/jx3yq_api/check_target_account_state", n()({}, e))
      }
    };
    r("201c"),
      o.a.use(tt.a),
      o.a.use(We.a),
      o.a.use($e.a),
      o.a.use(c.a),
      o.a.prototype.$xoyo_api_common = Ct,
      o.a.prototype.$xoyo_api_content = Ot,
      o.a.prototype.$xoyo_api_passport = Pt,
      o.a.prototype.$xoyo_api_pay = Nt,
      o.a.prototype.$xoyo_api_safe = Lt,
      o.a.prototype.$xoyo_api_service = Mt,
      o.a.prototype.$xoyo_pushState = k.n.pushState,
      o.a.prototype.$xoyo_replaceState = k.n.replaceState,
      o.a.filter("removeHtml", function(e) {
        return e && e.replace(/<(?:.|\n)*?>/gm, "").replace(/(&rdquo;)/g, '"').replace(/&ldquo;/g, '"').replace(/&mdash;/g, "-").replace(/&nbsp;/g, "").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/<[\w\s"':=\/]*/, "")
      });
    var Ut = function() {
      function e() {
        y()(this, e),
          this.pf = null,
          this.pf = o.a.prototype.$xoyo_api_common.getXoyoPf()
      }
      return b()(e, [{
        key: "bind",
        value: function() {}
      }, {
        key: "inserted",
        value: function() {}
      }, {
        key: "update",
        value: function() {}
      }, {
        key: "componentUpdated",
        value: function() {}
      }, {
        key: "unbind",
        value: function() {}
      }]),
        e
    }()
      , qt = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "inserted",
          value: function(e) {
            "wegame" === this.pf && e.parentNode.removeChild(e)
          }
        }], [{
          key: "getInstance",
          value: function(e) {
            return t.instance ? t.instance : (t.instance = new t(e),
              t.instance)
          }
        }]),
        t
    }(Ut);
    qt.instance = null;
    var Ft = qt
      , Qt = function(e) {
      function t() {
        return y()(this, t),
          S()(this, (t.__proto__ || A()(t)).apply(this, arguments))
      }
      return j()(t, e),
        b()(t, [{
          key: "inserted",
          value: function(e) {
            "xoyo" === this.pf && e.parentNode.removeChild(e)
          }
        }], [{
          key: "getInstance",
          value: function(e) {
            return t.instance ? t.instance : (t.instance = new t(e),
              t.instance)
          }
        }]),
        t
    }(Ut);
    Qt.instance = null;
    var Zt = {
      wegame: Ft,
      xoyo: Qt,
      getInstance: function(e) {
        if (!e)
          return new Ut;
        try {
          return Zt[e].getInstance()
        } catch (e) {
          throw new Error("没有相关平台定义",e)
        }
      }
    };
    o.a.directive("pf", {
      bind: function(e, t) {
        var r = t.value;
        Zt.getInstance(r).bind(e)
      },
      inserted: function(e, t) {
        var r = t.value;
        Zt.getInstance(r).inserted(e)
      },
      update: function(e, t) {
        var r = t.value;
        Zt.getInstance(r).update(e)
      },
      componentUpdated: function(e, t) {
        var r = t.value;
        Zt.getInstance(r).componentUpdated(e)
      },
      unbind: function(e, t) {
        var r = t.value;
        Zt.getInstance(r).unbind(e)
      }
    }),
      o.a.directive("st-report", {
        inserted: function(e, t) {
          var r = t.value
            , a = r.eventName
            , n = r.eventDescription
            , i = r.eventDataValue
            , o = void 0 === i ? {} : i
            , c = (r.eventGroup,
            r.eventTags)
            , s = void 0 === c ? [] : c
            , u = r.listenEvent
            , l = void 0 === u ? "click" : u
            , p = r.queryElement;
          ((void 0 === p ? function() {}
            : p).call(e) || e).addEventListener(l, function(e) {
            k.m.report({
              eventName: a,
              eventDescription: n,
              eventDataValue: o,
              eventTags: s
            }),
              e.stopPropagation()
          })
        }
      }),
      o.a.directive("data-report", {
        inserted: function(e, t) {
          var r = t.value
            , a = r.name
            , n = r.listenEvent
            , i = void 0 === n ? "click" : n
            , o = r.queryElement;
          ((void 0 === o ? function() {}
            : o).call(e) || e).addEventListener(i, function(e) {
            k.c[a] && k.c[a](),
              e.stopPropagation()
          })
        }
      }),
      o.a.prototype.xoyoStatisticsReport = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        k.m.report({
          eventName: e,
          eventDescription: t,
          eventDataValue: r,
          eventTags: a
        })
      }
      ,
      o.a.prototype.dataReport = k.c,
      o.a.directive("st-rtrack", {
        inserted: function(e, t) {
          var r = t.value
            , a = r.eventName
            , n = r.properties;
          e.addEventListener("click", function() {
            k.m.trackclick(a, n)
          })
        }
      });
    var Yt = r("55UE");
    o.a.component(Yt.a.name, Yt.a);
    t.a = function(e) {
      var t = e.name
        , r = t ? Ve[t.toLowerCase() + "Page"] : null;
      (e.store ? e.store.replaceState(n()({}, window.__INITIAL_STATE__, e.store.state)) : window.__INITIAL_STATE__ && (e.data = n()(window.__INITIAL_STATE__, e.data && e.data())),
      t && r) ? new o.a(n()({
        store: new c.a.Store(r)
      }, e)).$mount("#app") : new o.a(e).$mount("#app")
    }
  },
  xVKV: function(e, t, r) {
    "use strict";
    var a = {
      name: "ChargeRadio",
      componentName: "ChargeRadio",
      mixins: [r("7SIX").a],
      props: ["value"],
      inject: {
        elForm: {
          default: ""
        },
        elFormItem: {
          default: ""
        }
      },
      provide: function() {
        return {
          radio: this
        }
      },
      methods: {
        chargeTypeSelect: function(e) {
          this.$emit("input", e.value),
            this.dispatch("ElFormItem", "el.form.change", e.value)
        }
      },
      created: function() {
        this.$on("chargeTypeSelect", this.chargeTypeSelect)
      }
    }
      , n = r("JFUb")
      , i = Object(n.a)(a, function() {
      var e = this.$createElement;
      return (this._self._c || e)("div", {
        staticClass: "xoyo-radio-group"
      }, [this._t("default")], 2)
    }, [], !1, null, null, null);
    t.a = i.exports
  },
  yLpj: function(e, t, r) {
    e.exports = r("8wy/")("yLpj")
  },
  z4AM: function(e, t, r) {
    "use strict";
    var a = r("14Xm")
      , n = r.n(a)
      , i = r("D3Ub")
      , o = r.n(i)
      , c = r("YEIV")
      , s = r.n(c)
      , u = r("0aAV")
      , l = r("JFUb");
    var p = function(e) {
      r("XYrE")
    }
      , h = Object(l.a)({
      name: "robot-service",
      props: ["link", "icon", "name"]
    }, function() {
      var e = this
        , t = e.$createElement
        , r = e._self._c || t;
      return r("div", {
        staticClass: "root"
      }, [r("a", {
        staticClass: "link",
        attrs: {
          href: e.link,
          target: "_blank"
        }
      }, [r("div", {
        staticClass: "game-icon",
        style: "background-image: url('" + e.icon + "')"
      }, [r("div", {
        staticClass: "lt"
      }), e._v(" "), r("div", {
        staticClass: "lb"
      }), e._v(" "), r("div", {
        staticClass: "rt"
      }), e._v(" "), r("div", {
        staticClass: "rb"
      })]), e._v(" "), r("div", {
        staticClass: "game-name"
      }, [e._v(e._s(e.name))])])])
    }, [], !1, p, "data-v-2fb687a5", null).exports
      , d = r("JiOg")
      , m = r("oCUw")
      , f = r("jCur")
      , g = r.n(f)
      , v = {
      components: {
        RobotService: h,
        ServerSelect: m.a,
        MobileVcode: u.a
      },
      name: "future-floating",
      component: s()({
        MobileEntrance: u.a
      }, h.name, h),
      data: function() {
        return {
          showModal: !1,
          showRobotServiceModal: !1,
          pcRobotList: [],
          mobileRobotList: [],
          isRobotListEmpty: !1,
          getRobotList: function() {},
          phoneList: [{
            name: "剑网3",
            icon: "",
            phone: "028-85309911"
          }, {
            name: "剑侠世界-绿色区",
            icon: "",
            phone: "028-85437733#4#2"
          }, {
            name: "剑侠世界-剑世区",
            icon: "",
            phone: "028-85437733#4#1"
          }, {
            name: "反恐行动",
            icon: "",
            phone: "028-85437733#3"
          }, {
            name: "剑网2新传",
            icon: "",
            phone: "028-85309959"
          }, {
            name: "剑网2免费区",
            icon: "",
            phone: "028-85437733#1#2"
          }, {
            name: "剑网2收费区",
            icon: "",
            phone: "028-85437733#1#2"
          }, {
            name: "剑网2外传",
            icon: "",
            phone: "028-85437733#1#3"
          }, {
            name: "剑网1经典版",
            icon: "",
            phone: "028-85437733#1#1"
          }, {
            name: "剑网1免费区/收费区",
            icon: "",
            phone: "028-85437733#1#1"
          }, {
            name: "封神榜",
            icon: "",
            phone: "028-85437733#2"
          }, {
            name: "春秋Q传",
            icon: "",
            phone: "028-85437733#5"
          }],
          GAME_LOGO: g.a
        }
      },
      methods: {
        callModal: function() {
          this.showModal = !0
        },
        closeModal: function() {
          this.showModal = !1
        },
        showRobotService: function() {
          this.getRobotList(),
            this.showRobotServiceModal = !0
        },
        closeRobotService: function() {
          this.showRobotServiceModal = !1
        },
        getRobotServiceList: function() {
          var e, t = this, r = !1;
          return e = o()(n.a.mark(function e() {
            var a, i;
            return n.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    if (!r) {
                      e.next = 2;
                      break
                    }
                    return e.abrupt("return");
                  case 2:
                    return e.next = 4,
                      t.$xoyo_api_content.getRobotList();
                  case 4:
                    a = e.sent,
                      i = a.data,
                      r = !0,
                      i.list.filter(function(e) {
                        return "show" === e.xoyo_robot_show
                      }).forEach(function(e) {
                        t[{
                          pc: "pcRobotList",
                          mobile: "mobileRobotList"
                        }[e.xoyo_robot_type]].push(e)
                      });
                  case 8:
                  case "end":
                    return e.stop()
                }
            }, e, t)
          })),
            function() {
              return e.apply(this, arguments)
            }
        }
      },
      mounted: function() {
        var e = this;
        this.getRobotList = this.getRobotServiceList(),
          d.e.$on("onGameServiceModal", function() {
            e.showModal = !0
          }),
          d.e.$on("onRobotServiceModal", function() {
            e.showRobotService()
          })
      },
      beforeDestroy: function() {
        this.getRobotList = function() {}
      }
    };
    var _ = function(e) {
      r("CbVK")
    }
      , y = Object(l.a)(v, function() {
      var e = this
        , t = e.$createElement
        , a = e._self._c || t;
      return a("div", {
        staticClass: "floating"
      }, [a("div", {
        staticClass: "icon-box"
      }, [a("div", {
        staticClass: "icon",
        on: {
          click: e.callModal
        }
      }), e._v(" "), a("div", {
        staticClass: "icon mobile-icon",
        on: {
          click: e.showRobotService
        }
      }), e._v(" "), a("div", {
        staticClass: "icon",
        staticStyle: {
          display: "none"
        }
      }, [a("div", {
        staticClass: "icon-content"
      }, [a("div", {
        staticClass: "icon-content-inline"
      }, [a("mobile-vcode", {
        attrs: {
          source: "index_right"
        }
      })], 1)])])]), e._v(" "), a("el-dialog", {
        attrs: {
          title: "客户服务热线",
          visible: e.showModal,
          width: "1160px",
          "show-close": !1
        },
        on: {
          "update:visible": function(t) {
            e.showModal = t
          }
        }
      }, [a("a", {
        staticClass: "close",
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: e.closeModal
        }
      }, [e._v("X")]), e._v(" "), a("div", {
        staticClass: "vip-phones-box clearfix"
      }, [a("div", {
        staticClass: "left-box fl"
      }, [a("div", {
        staticClass: "box-wrap"
      }, [a("div", {
        staticClass: "box"
      }, [a("div", {
        staticClass: "box-icon"
      }, [a("img", {
        attrs: {
          src: r("IQIE"),
          alt: ""
        }
      })]), e._v(" "), a("div", {
        staticClass: "box-title"
      }, [a("p", [e._v("人工客服")]), e._v(" "), a("p", [e._v("(7*24小时)")])]), e._v(" "), a("div", {
        staticClass: "box-phone"
      }, [e._v("\n                028-85437733\n              ")])])]), e._v(" "), a("div", {
        staticClass: "box-wrap"
      }, [a("div", {
        staticClass: "box"
      }, [a("div", {
        staticClass: "box-icon"
      }, [a("img", {
        attrs: {
          src: r("D+rn"),
          alt: ""
        }
      })]), e._v(" "), a("div", {
        staticClass: "box-title"
      }, [e._v("\n                VIP专属热线\n              ")]), e._v(" "), a("div", {
        staticClass: "box-phone"
      }, [e._v("\n                028-85309999\n              ")])])])]), e._v(" "), a("div", {
        staticClass: "right-box clearfix fl"
      }, e._l(e.phoneList, function(t) {
        return a("div", {
          staticClass: "box fl"
        }, [a("div", {
          staticClass: "box-content"
        }, [a("div", {
          staticClass: "box-content-title"
        }, [e._v(e._s(t.name))]), e._v(" "), a("div", {
          staticClass: "box-content-phone"
        }, [e._v(e._s(t.phone))])])])
      }))])]), e._v(" "), a("el-dialog", {
        staticClass: "robot-service-box",
        attrs: {
          title: "",
          visible: e.showRobotServiceModal,
          width: "1160px",
          "show-close": !1
        },
        on: {
          "update:visible": function(t) {
            e.showRobotServiceModal = t
          }
        }
      }, [a("a", {
        staticClass: "close",
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: e.closeRobotService
        }
      }, [e._v("X")]), e._v(" "), a("div", {
        staticClass: "robot-service"
      }, [a("div", {
        staticClass: "title"
      }, [e._v("端游系列")]), e._v(" "), a("div", {
        staticClass: "list"
      }, e._l(e.pcRobotList, function(e) {
        return a("robot-service", {
          key: e.id,
          attrs: {
            link: e.url,
            icon: e.thumb,
            name: e.title
          }
        })
      })), e._v(" "), a("div", {
        staticClass: "title"
      }, [e._v("手游系列")]), e._v(" "), a("div", {
        staticClass: "list"
      }, e._l(e.mobileRobotList, function(e) {
        return a("robot-service", {
          key: e.id,
          attrs: {
            link: e.url,
            icon: e.thumb,
            name: e.title
          }
        })
      }))])])], 1)
    }, [], !1, _, null, null);
    t.a = y.exports
  },
  zmkA: function(e, t) {}
});

// console.log(_pp.m.xHOL);
console.log(_pp.m.xHOL({}));
