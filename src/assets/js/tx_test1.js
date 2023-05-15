!function () {
  function getParams() {
    for (var e = "&", t = "=", r = location.href.replace(/.+?\?/, "").replace(/#.*/, ""), n = r.split(e), a = {}, o = 0; o < n.length; o++) {
      var s = n[o], i = s.indexOf(t);
      if (i > -1) {
        var c = s.substr(0, i);
        if (c) {
          var u = s.substr(i + 1);
          try {
            a[c] = decodeURIComponent(u)
          } catch (l) {
            a[c] = u
          }
        }
      }
    }
    return a
  }

  function retriedReport(e, t, r) {
    var n = retry(3, reportToLogData);
    n(e, t, r || function () {
    })
  }

  var getCookie = function (e) {
      var t = document.cookie.match(new RegExp("(?:^|;\\s)" + e + "=(.*?)(?:;\\s|$)"));
      return t ? t[1] : ""
    }, params = getParams(), retry = function (e, t) {
      var r = 0;
      return function () {
        function n(e) {
          e.apply(null, a)
        }

        var a = arguments, o = a[String(a.length - 1)];
        if ("function" != typeof o) throw new Error("Last argument expected to be a callback");
        a[String(a.length - 1)] = function () {
          var a = arguments[0];
          if (a) {
            if (r++, !(r >= e)) return void n(t);
            o.apply(null, arguments)
          } else o.apply(null, arguments)
        }, t.apply(null, a)
      }
    }, reportToLogData = function (iformat, resultinfo, callback) {
      callback = callback || function () {
      };
      var openid = _SERVER_DATA.session && _SERVER_DATA.session.openid || params.openid || parseInt(getCookie("uin").replace(/^o/, ""), 10),
        param = {
          3: openid,
          6: +new Date,
          7: 0,
          8: resultinfo ? encodeURIComponent(JSON.stringify(resultinfo)) : "",
          13: 0,
          21: iformat,
          24: _SERVER_DATA.appid,
          29: window._sessionToken,
          31: "stdV" + params.version + "." + params.dialog ? "1" : "0",
          36: "",
          38: (new Date).getTime(),
          50: navigator.userAgent
        }, pu = [];
      for (var k in param) pu.push(k + "=" + encodeURIComponent(param[k]));
      var domainPrefix = "sandbox" === params.env ? "sandbox." : "";
      setTimeout(function () {
        var url = location.protocol + "//" + domainPrefix + "api.unipay.qq.com/v1/900/15499/log_data?num=1&record0=" + encodeURIComponent(pu.join("|")) + "&rr=" + Math.random(),
          req;
        try {
          req = new XMLHttpRequest
        } catch (_) {
          return (new Image).src = url, callback(null)
        }
        req.timeout = 1e4, req.onerror = function () {
        }, req.open("GET", url, !0);
        var onreadystatechange = function () {
          if (req && 4 == req.readyState) {
            var status = req.status;
            if (status >= 200 && status < 300) {
              var result;
              try {
                result = eval("(" + req.responseText + ")")
              } catch (e) {
              }
              return callback(null, result)
            }
            return callback(1)
          }
        };
        try {
          req.onreadystatechange = onreadystatechange, req.onload = onreadystatechange, req.ontimeout = onreadystatechange, req.onabort = onreadystatechange, req.onerror = onreadystatechange, req.onprogress = function () {
          }
        } catch (_) {
        }
        setTimeout(function () {
          req.send()
        }, 0)
      }, 0)
    }, once = function (e) {
      var t, r = 2;
      return function () {
        return --r > 0 && (t = e.apply(this, arguments)), r <= 1 && (e = null), t
      }
    }, cdnReport = {
      reportCrashPv: once(function () {
        retriedReport("midas_h5.cdncrash.pv", Object.keys(window.assetsRetryStatistics))
      }), reportCrashFailover: once(function () {
        retriedReport("midas_h5.cdncrash.failover", window.assetsRetryStatistics)
      }), retriedReport: retriedReport
    }, collector = window.assetsRetryStatistics,
    statsList = Object.keys(window.assetsRetryStatistics || {}),
    hasFailedAssets = statsList.some(function (e) {
      return collector[e].failed.length > 0
    }), hasSucceededAssets = statsList.some(function (e) {
      return collector[e].succeeded.length > 0
    });
  hasFailedAssets && cdnReport.reportCrashPv(), hasSucceededAssets && cdnReport.reportCrashFailover()
}()
