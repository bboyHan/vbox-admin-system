var window = {
  navigator: {
    appName: 'Netscape',
  },
  crypto: {
    getRandomValues: getRandomValues,
  },
};
var navigator = window['navigator'];

function randoms(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomValues(buf) {
  var min = 0,
    max = 255;
  if (buf.length > 65536) {
    var e = new Error();
    e.code = 22;
    e.message =
      "Failed to execute 'getRandomValues' : The " +
      "ArrayBufferView's byte length (" +
      buf.length +
      ') exceeds the ' +
      'number of bytes of entropy available via this API (65536).';
    e.name = 'QuotaExceededError';
    throw e;
  }
  if (buf instanceof Uint16Array) {
    max = 65535;
  } else if (buf instanceof Uint32Array) {
    max = 4294967295;
  }
  for (var element in buf) {
    buf[element] = randoms(min, max);
  }
  return buf;
}

function get_passtime(track) {
  var passtime = 0;
  for (i = 0; i < track.length; i++) {
    passtime += track[i][2];
  }
  return passtime;
}

function get_userresponse(setLeft, captcha_width) {
  var e = 340;
  var i = (0.8876 * e) / captcha_width;
  return setLeft / i;
}

function get_setLeft(track) {
  var setLeft = 0;
  for (i = 1; i < track.length; i++) {
    setLeft += track[i][0];
  }
  return setLeft;
}

function get_w(passtime, userresponse, lot_number) {
  var d = (function () {
    var u,
      p,
      s,
      g,
      e = {},
      t =
        /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function a(e) {
      return e < 10 ? '0' + e : e;
    }

    function o() {
      return this['valueOf']();
    }

    function l(e) {
      return (
        (t['lastIndex'] = 0),
        t['test'](e)
          ? '"' +
            e['replace'](t, function (e) {
              var t = s[e];
              return 'string' == typeof t
                ? t
                : '\\u' + ('0000' + e['charCodeAt'](0)['toString'](16))['slice'](-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }

    return (
      'function' != typeof Date['prototype']['toJSON'] &&
        ((Date['prototype']['toJSON'] = function () {
          return isFinite(this['valueOf']())
            ? this['getUTCFullYear']() +
                '-' +
                a(this['getUTCMonth']() + 1) +
                '-' +
                a(this['getUTCDate']()) +
                'T' +
                a(this['getUTCHours']()) +
                ':' +
                a(this['getUTCMinutes']()) +
                ':' +
                a(this['getUTCSeconds']()) +
                'Z'
            : null;
        }),
        (Boolean['prototype']['toJSON'] = o),
        (Number['prototype']['toJSON'] = o),
        (String['prototype']['toJSON'] = o)),
      (s = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\',
      }),
      (e['stringify'] = function (e, t, s) {
        var a;
        if (((p = u = ''), 'number' == typeof s)) for (a = 0; a < s; a += 1) p += ' ';
        else 'string' == typeof s && (p = s);
        if (
          (g = t) &&
          'function' != typeof t &&
          ('object' != typeof t || 'number' != typeof t['length'])
        )
          throw new Error('JSON.stringify');
        return (function c(e, t) {
          var s,
            a,
            o,
            n,
            r,
            i = u,
            _ = t[e];

          switch (
            (_ && 'object' == typeof _ && 'function' == typeof _['toJSON'] && (_ = _['toJSON'](e)),
            'function' == typeof g && (_ = g['call'](t, e, _)),
            typeof _)
          ) {
            case 'string':
              return l(_);

            case 'number':
              return isFinite(_) ? String(_) : 'null';

            case 'boolean':
            case 'null':
              return String(_);

            case 'object':
              if (!_) return 'null';

              if (
                ((u += p),
                (r = []),
                '[object Array]' === Object['prototype']['toString']['apply'](_))
              ) {
                for (n = _['length'], s = 0; s < n; s += 1) r[s] = c(s, _) || 'null';

                return (
                  (o =
                    0 === r['length']
                      ? '[]'
                      : u
                      ? '[\n' + u + r['join'](',\n' + u) + '\n' + i + ']'
                      : '[' + r['join'](',') + ']'),
                  (u = i),
                  o
                );
              }

              if (g && 'object' == typeof g)
                for (n = g['length'], s = 0; s < n; s += 1)
                  'string' == typeof g[s] &&
                    (o = c((a = g[s]), _)) &&
                    r['push'](l(a) + (u ? ': ' : ':') + o);
              else
                for (a in _)
                  Object['prototype']['hasOwnProperty']['call'](_, a) &&
                    (o = c(a, _)) &&
                    r['push'](l(a) + (u ? ': ' : ':') + o);
              return (
                (o =
                  0 === r['length']
                    ? '{}'
                    : u
                    ? '{\n' + u + r['join'](',\n' + u) + '\n' + i + '}'
                    : '{' + r['join'](',') + '}'),
                (u = i),
                o
              );
          }
        })('', {
          '': e,
        });
      }),
      e
    );
  })();
  d['default'] = d;
  function get_h(e, t) {
    var _ = (function () {
      function s() {
        (this['i'] = 0), (this['j'] = 0), (this['S'] = []);
      }

      (s['prototype']['init'] = function z(e) {
        var t, s, a;

        for (t = 0; t < 256; ++t) this['S'][t] = t;

        for (t = s = 0; t < 256; ++t)
          (s = (s + this['S'][t] + e[t % e['length']]) & 255),
            (a = this['S'][t]),
            (this['S'][t] = this['S'][s]),
            (this['S'][s] = a);

        (this['i'] = 0), (this['j'] = 0);
      }),
        (s['prototype']['next'] = function T() {
          var e;
          return (
            (this['i'] = (this['i'] + 1) & 255),
            (this['j'] = (this['j'] + this['S'][this['i']]) & 255),
            (e = this['S'][this['i']]),
            (this['S'][this['i']] = this['S'][this['j']]),
            (this['S'][this['j']] = e),
            this['S'][(e + this['S'][this['i']]) & 255]
          );
        });
      var a,
        o,
        n,
        t,
        r = 256;

      if (null == o) {
        var i;

        if (((o = []), (n = 0), window['crypto'] && window['crypto']['getRandomValues'])) {
          var _ = new Uint32Array(256);

          for (window['crypto']['getRandomValues'](_), i = 0; i < _['length']; ++i)
            o[n++] = 255 & _[i];
        }

        var c = 0,
          u = function u(t) {
            if (256 <= (c = c || 0) || r <= n)
              window['removeEventListener']
                ? ((c = 0), window['removeEventListener']('mousemove', u, !1))
                : window['detachEvent'] && ((c = 0), window['detachEvent']('onmousemove', u));
            else
              try {
                var s = t['x'] + t['y'];
                (o[n++] = 255 & s), (c += 1);
              } catch (e) {}
          };

        window['addEventListener']
          ? window['addEventListener']('mousemove', u, !1)
          : window['attachEvent'] && window['attachEvent']('onmousemove', u);
      }

      function p() {
        if (null == a) {
          a = (function t() {
            return new s();
          })();

          while (n < r) {
            var e = Math['floor'](65536 * Math['random']());
            o[n++] = 255 & e;
          }

          for (a['init'](o), n = 0; n < o['length']; ++n) o[n] = 0;

          n = 0;
        }

        return a['next']();
      }

      function g() {}

      g['prototype']['nextBytes'] = function E(e) {
        var t;

        for (t = 0; t < e['length']; ++t) e[t] = p();
      };

      function v(e, t, s) {
        null != e &&
          ('number' == typeof e
            ? this['fromNumber'](e, t, s)
            : null == t && 'string' != typeof e
            ? this['fromString'](e, 256)
            : this['fromString'](e, t));
      }

      function w() {
        return new v(null);
      }

      (t =
        'Microsoft Internet Explorer' == navigator['appName']
          ? ((v['prototype']['am'] = function A(e, t, s, a, o, n) {
              var r = 32767 & t,
                i = t >> 15;

              while (0 <= --n) {
                var _ = 32767 & this[e],
                  c = this[e++] >> 15,
                  u = i * _ + c * r;

                (o =
                  ((_ = r * _ + ((32767 & u) << 15) + s[a] + (1073741823 & o)) >>> 30) +
                  (u >>> 15) +
                  i * c +
                  (o >>> 30)),
                  (s[a++] = 1073741823 & _);
              }

              return o;
            }),
            30)
          : 'Netscape' != navigator['appName']
          ? ((v['prototype']['am'] = function S(e, t, s, a, o, n) {
              while (0 <= --n) {
                var r = t * this[e++] + s[a] + o;
                (o = Math['floor'](r / 67108864)), (s[a++] = 67108863 & r);
              }

              return o;
            }),
            26)
          : ((v['prototype']['am'] = function M(e, t, s, a, o, n) {
              var r = 16383 & t,
                i = t >> 14;

              while (0 <= --n) {
                var _ = 16383 & this[e],
                  c = this[e++] >> 14,
                  u = i * _ + c * r;

                (o = ((_ = r * _ + ((16383 & u) << 14) + s[a] + o) >> 28) + (u >> 14) + i * c),
                  (s[a++] = 268435455 & _);
              }

              return o;
            }),
            28)),
        (v['prototype']['DB'] = t),
        (v['prototype']['DM'] = (1 << t) - 1),
        (v['prototype']['DV'] = 1 << t);
      (v['prototype']['FV'] = Math['pow'](2, 52)),
        (v['prototype']['F1'] = 52 - t),
        (v['prototype']['F2'] = 2 * t - 52);
      var l,
        d,
        h = '0123456789abcdefghijklmnopqrstuvwxyz',
        f = [];

      for (l = '0'['charCodeAt'](0), d = 0; d <= 9; ++d) f[l++] = d;

      for (l = 'a'['charCodeAt'](0), d = 10; d < 36; ++d) f[l++] = d;

      for (l = 'A'['charCodeAt'](0), d = 10; d < 36; ++d) f[l++] = d;

      function m(e) {
        return h['charAt'](e);
      }

      function b(e) {
        var t = w();
        return t['fromInt'](e), t;
      }

      function x(e) {
        var t,
          s = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (s += 16)),
          0 != (t = e >> 8) && ((e = t), (s += 8)),
          0 != (t = e >> 4) && ((e = t), (s += 4)),
          0 != (t = e >> 2) && ((e = t), (s += 2)),
          0 != (t = e >> 1) && ((e = t), (s += 1)),
          s
        );
      }

      function k(e) {
        this['m'] = e;
      }

      function y(e) {
        (this['m'] = e),
          (this['mp'] = e['invDigit']()),
          (this['mpl'] = 32767 & this['mp']),
          (this['mph'] = this['mp'] >> 15),
          (this['um'] = (1 << (e['DB'] - 15)) - 1),
          (this['mt2'] = 2 * e['t']);
      }

      function C() {
        (this['n'] = null),
          (this['e'] = 0),
          (this['d'] = null),
          (this['p'] = null),
          (this['q'] = null),
          (this['dmp1'] = null),
          (this['dmq1'] = null),
          (this['coeff'] = null);
        this['setPublic'](
          '00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81',
          '10001',
        );
      }

      return (
        (k['prototype']['convert'] = function B(e) {
          return e['s'] < 0 || 0 <= e['compareTo'](this['m']) ? e['mod'](this['m']) : e;
        }),
        (k['prototype']['revert'] = function R(e) {
          return e;
        }),
        (k['prototype']['reduce'] = function D(e) {
          e['divRemTo'](this['m'], null, e);
        }),
        (k['prototype']['mulTo'] = function O(e, t, s) {
          e['multiplyTo'](t, s), this['reduce'](s);
        }),
        (k['prototype']['sqrTo'] = function j(e, t) {
          e['squareTo'](t), this['reduce'](t);
        }),
        (y['prototype']['convert'] = function P(e) {
          var t = w();
          return (
            e['abs']()['dlShiftTo'](this['m']['t'], t),
            t['divRemTo'](this['m'], null, t),
            e['s'] < 0 && 0 < t['compareTo'](v['ZERO']) && this['m']['subTo'](t, t),
            t
          );
        }),
        (y['prototype']['revert'] = function I(e) {
          var t = w();
          return e['copyTo'](t), this['reduce'](t), t;
        }),
        (y['prototype']['reduce'] = function N(e) {
          while (e['t'] <= this['mt2']) e[e['t']++] = 0;

          for (var t = 0; t < this['m']['t']; ++t) {
            var s = 32767 & e[t],
              a =
                (s * this['mpl'] +
                  (((s * this['mph'] + (e[t] >> 15) * this['mpl']) & this['um']) << 15)) &
                e['DM'];
            e[(s = t + this['m']['t'])] += this['m']['am'](0, a, e, t, 0, this['m']['t']);

            while (e[s] >= e['DV']) (e[s] -= e['DV']), e[++s]++;
          }

          e['clamp'](),
            e['drShiftTo'](this['m']['t'], e),
            0 <= e['compareTo'](this['m']) && e['subTo'](this['m'], e);
        }),
        (y['prototype']['mulTo'] = function q(e, t, s) {
          e['multiplyTo'](t, s), this['reduce'](s);
        }),
        (y['prototype']['sqrTo'] = function L(e, t) {
          e['squareTo'](t), this['reduce'](t);
        }),
        (v['prototype']['copyTo'] = function H(e) {
          for (var t = this['t'] - 1; 0 <= t; --t) e[t] = this[t];

          (e['t'] = this['t']), (e['s'] = this['s']);
        }),
        (v['prototype']['fromInt'] = function $(e) {
          (this['t'] = 1),
            (this['s'] = e < 0 ? -1 : 0),
            0 < e ? (this[0] = e) : e < -1 ? (this[0] = e + this['DV']) : (this['t'] = 0);
        }),
        (v['prototype']['fromString'] = function F(e, t) {
          var s;
          if (16 == t) s = 4;
          else if (8 == t) s = 3;
          else if (256 == t) s = 8;
          else if (2 == t) s = 1;
          else if (32 == t) s = 5;
          else {
            if (4 != t) return void this['fromRadix'](e, t);
            s = 2;
          }
          (this['t'] = 0), (this['s'] = 0);
          var a,
            o,
            n = e['length'],
            r = !1,
            i = 0;

          while (0 <= --n) {
            var _ = 8 == s ? 255 & e[n] : ((a = n), null == (o = f[e['charCodeAt'](a)]) ? -1 : o);

            _ < 0
              ? '-' == e['charAt'](n) && (r = !0)
              : ((r = !1),
                0 == i
                  ? (this[this['t']++] = _)
                  : i + s > this['DB']
                  ? ((this[this['t'] - 1] |= (_ & ((1 << (this['DB'] - i)) - 1)) << i),
                    (this[this['t']++] = _ >> (this['DB'] - i)))
                  : (this[this['t'] - 1] |= _ << i),
                (i += s) >= this['DB'] && (i -= this['DB']));
          }

          8 == s &&
            0 != (128 & e[0]) &&
            ((this['s'] = -1),
            0 < i && (this[this['t'] - 1] |= ((1 << (this['DB'] - i)) - 1) << i)),
            this['clamp'](),
            r && v['ZERO']['subTo'](this, this);
        }),
        (v['prototype']['clamp'] = function X() {
          var e = this['s'] & this['DM'];

          while (0 < this['t'] && this[this['t'] - 1] == e) --this['t'];
        }),
        (v['prototype']['dlShiftTo'] = function U(e, t) {
          var s;

          for (s = this['t'] - 1; 0 <= s; --s) t[s + e] = this[s];

          for (s = e - 1; 0 <= s; --s) t[s] = 0;

          (t['t'] = this['t'] + e), (t['s'] = this['s']);
        }),
        (v['prototype']['drShiftTo'] = function V(e, t) {
          for (var s = e; s < this['t']; ++s) t[s - e] = this[s];

          (t['t'] = Math['max'](this['t'] - e, 0)), (t['s'] = this['s']);
        }),
        (v['prototype']['lShiftTo'] = function W(e, t) {
          var s,
            a = e % this['DB'],
            o = this['DB'] - a,
            n = (1 << o) - 1,
            r = Math['floor'](e / this['DB']),
            i = (this['s'] << a) & this['DM'];

          for (s = this['t'] - 1; 0 <= s; --s)
            (t[s + r + 1] = (this[s] >> o) | i), (i = (this[s] & n) << a);

          for (s = r - 1; 0 <= s; --s) t[s] = 0;

          (t[r] = i), (t['t'] = this['t'] + r + 1), (t['s'] = this['s']), t['clamp']();
        }),
        (v['prototype']['rShiftTo'] = function G(e, t) {
          t['s'] = this['s'];
          var s = Math['floor'](e / this['DB']);
          if (s >= this['t']) t['t'] = 0;
          else {
            var a = e % this['DB'],
              o = this['DB'] - a,
              n = (1 << a) - 1;
            t[0] = this[s] >> a;

            for (var r = s + 1; r < this['t']; ++r)
              (t[r - s - 1] |= (this[r] & n) << o), (t[r - s] = this[r] >> a);

            0 < a && (t[this['t'] - s - 1] |= (this['s'] & n) << o),
              (t['t'] = this['t'] - s),
              t['clamp']();
          }
        }),
        (v['prototype']['subTo'] = function Y(e, t) {
          var s = 0,
            a = 0,
            o = Math['min'](e['t'], this['t']);

          while (s < o) (a += this[s] - e[s]), (t[s++] = a & this['DM']), (a >>= this['DB']);

          if (e['t'] < this['t']) {
            a -= e['s'];

            while (s < this['t']) (a += this[s]), (t[s++] = a & this['DM']), (a >>= this['DB']);

            a += this['s'];
          } else {
            a += this['s'];

            while (s < e['t']) (a -= e[s]), (t[s++] = a & this['DM']), (a >>= this['DB']);

            a -= e['s'];
          }

          (t['s'] = a < 0 ? -1 : 0),
            a < -1 ? (t[s++] = this['DV'] + a) : 0 < a && (t[s++] = a),
            (t['t'] = s),
            t['clamp']();
        }),
        (v['prototype']['multiplyTo'] = function Z(e, t) {
          var s = this['abs'](),
            a = e['abs'](),
            o = s['t'];
          t['t'] = o + a['t'];

          while (0 <= --o) t[o] = 0;

          for (o = 0; o < a['t']; ++o) t[o + s['t']] = s['am'](0, a[o], t, o, 0, s['t']);

          (t['s'] = 0), t['clamp'](), this['s'] != e['s'] && v['ZERO']['subTo'](t, t);
        }),
        (v['prototype']['squareTo'] = function Q(e) {
          var t = this['abs'](),
            s = (e['t'] = 2 * t['t']);

          while (0 <= --s) e[s] = 0;

          for (s = 0; s < t['t'] - 1; ++s) {
            var a = t['am'](s, t[s], e, 2 * s, 0, 1);
            (e[s + t['t']] += t['am'](s + 1, 2 * t[s], e, 2 * s + 1, a, t['t'] - s - 1)) >=
              t['DV'] && ((e[s + t['t']] -= t['DV']), (e[s + t['t'] + 1] = 1));
          }

          0 < e['t'] && (e[e['t'] - 1] += t['am'](s, t[s], e, 2 * s, 0, 1)),
            (e['s'] = 0),
            e['clamp']();
        }),
        (v['prototype']['divRemTo'] = function J(e, t, s) {
          var a = e['abs']();

          if (!(a['t'] <= 0)) {
            var o = this['abs']();
            if (o['t'] < a['t'])
              return null != t && t['fromInt'](0), void (null != s && this['copyTo'](s));
            null == s && (s = w());

            var n = w(),
              r = this['s'],
              i = e['s'],
              _ = this['DB'] - x(a[a['t'] - 1]);

            0 < _ ? (a['lShiftTo'](_, n), o['lShiftTo'](_, s)) : (a['copyTo'](n), o['copyTo'](s));
            var c = n['t'],
              u = n[c - 1];

            if (0 != u) {
              var p = u * (1 << this['F1']) + (1 < c ? n[c - 2] >> this['F2'] : 0),
                g = this['FV'] / p,
                l = (1 << this['F1']) / p,
                d = 1 << this['F2'],
                h = s['t'],
                f = h - c,
                m = null == t ? w() : t;
              n['dlShiftTo'](f, m),
                0 <= s['compareTo'](m) && ((s[s['t']++] = 1), s['subTo'](m, s)),
                v['ONE']['dlShiftTo'](c, m),
                m['subTo'](n, n);

              while (n['t'] < c) n[n['t']++] = 0;

              while (0 <= --f) {
                var b = s[--h] == u ? this['DM'] : Math['floor'](s[h] * g + (s[h - 1] + d) * l);

                if ((s[h] += n['am'](0, b, s, f, 0, c)) < b) {
                  n['dlShiftTo'](f, m), s['subTo'](m, s);

                  while (s[h] < --b) s['subTo'](m, s);
                }
              }

              null != t && (s['drShiftTo'](c, t), r != i && v['ZERO']['subTo'](t, t)),
                (s['t'] = c),
                s['clamp'](),
                0 < _ && s['rShiftTo'](_, s),
                r < 0 && v['ZERO']['subTo'](s, s);
            }
          }
        }),
        (v['prototype']['invDigit'] = function K() {
          if (this['t'] < 1) return 0;
          var e = this[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return 0 <
            (t =
              ((t =
                ((t = ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) & 255) *
                  (2 - (((65535 & e) * t) & 65535))) &
                65535) *
                (2 - ((e * t) % this['DV']))) %
              this['DV'])
            ? this['DV'] - t
            : -t;
        }),
        (v['prototype']['isEven'] = function ee() {
          return 0 == (0 < this['t'] ? 1 & this[0] : this['s']);
        }),
        (v['prototype']['exp'] = function te(e, t) {
          if (4294967295 < e || e < 1) return v['ONE'];
          var s = w(),
            a = w(),
            o = t['convert'](this),
            n = x(e) - 1;
          o['copyTo'](s);

          while (0 <= --n)
            if ((t['sqrTo'](s, a), 0 < (e & (1 << n)))) t['mulTo'](a, o, s);
            else {
              var r = s;
              (s = a), (a = r);
            }

          return t['revert'](s);
        }),
        (v['prototype']['toString'] = function se(e) {
          if (this['s'] < 0) return '-' + this['negate']()['toString'](e);
          var t;
          if (16 == e) t = 4;
          else if (8 == e) t = 3;
          else if (2 == e) t = 1;
          else if (32 == e) t = 5;
          else {
            if (4 != e) return this['toRadix'](e);
            t = 2;
          }
          var s,
            a = (1 << t) - 1,
            o = !1,
            n = '',
            r = this['t'],
            i = this['DB'] - ((r * this['DB']) % t);

          if (0 < r--) {
            i < this['DB'] && 0 < (s = this[r] >> i) && ((o = !0), (n = m(s)));

            while (0 <= r)
              i < t
                ? ((s = (this[r] & ((1 << i) - 1)) << (t - i)),
                  (s |= this[--r] >> (i += this['DB'] - t)))
                : ((s = (this[r] >> (i -= t)) & a), i <= 0 && ((i += this['DB']), --r)),
                0 < s && (o = !0),
                o && (n += m(s));
          }

          return o ? n : '0';
        }),
        (v['prototype']['negate'] = function ae() {
          var e = w();
          return v['ZERO']['subTo'](this, e), e;
        }),
        (v['prototype']['abs'] = function oe() {
          return this['s'] < 0 ? this['negate']() : this;
        }),
        (v['prototype']['compareTo'] = function ne(e) {
          var t = this['s'] - e['s'];
          if (0 != t) return t;
          var s = this['t'];
          if (0 != (t = s - e['t'])) return this['s'] < 0 ? -t : t;

          while (0 <= --s) if (0 != (t = this[s] - e[s])) return t;

          return 0;
        }),
        (v['prototype']['bitLength'] = function re() {
          return this['t'] <= 0
            ? 0
            : this['DB'] * (this['t'] - 1) + x(this[this['t'] - 1] ^ (this['s'] & this['DM']));
        }),
        (v['prototype']['mod'] = function ie(e) {
          var t = w();
          return (
            this['abs']()['divRemTo'](e, null, t),
            this['s'] < 0 && 0 < t['compareTo'](v['ZERO']) && e['subTo'](t, t),
            t
          );
        }),
        (v['prototype']['modPowInt'] = function $_CEa(e, t) {
          var s;
          return (s = e < 256 || t['isEven']() ? new k(t) : new y(t)), this['exp'](e, s);
        }),
        (v['ZERO'] = b(0)),
        (v['ONE'] = b(1)),
        (C['prototype']['doPublic'] = function ce(e) {
          return e['modPowInt'](this['e'], this['n']);
        }),
        (C['prototype']['setPublic'] = function ue(e, t) {
          null != e && null != t && 0 < e['length'] && 0 < t['length']
            ? ((this['n'] = (function s(e, t) {
                return new v(e, t);
              })(e, 16)),
              (this['e'] = parseInt(t, 16)))
            : console && console['error'] && console['error']('Invalid RSA public key');
        }),
        (C['prototype']['encrypt'] = function pe(e) {
          var t = (function i(e, t) {
            if (t < e['length'] + 11)
              return (
                console && console['error'] && console['error']('Message too long for RSA'), null
              );
            var s = [],
              a = e['length'] - 1;

            while (0 <= a && 0 < t) {
              var o = e['charCodeAt'](a--);
              o < 128
                ? (s[--t] = o)
                : 127 < o && o < 2048
                ? ((s[--t] = (63 & o) | 128), (s[--t] = (o >> 6) | 192))
                : ((s[--t] = (63 & o) | 128),
                  (s[--t] = ((o >> 6) & 63) | 128),
                  (s[--t] = (o >> 12) | 224));
            }

            s[--t] = 0;
            var n = new g(),
              r = [];

            while (2 < t) {
              r[0] = 0;

              while (0 == r[0]) n['nextBytes'](r);

              s[--t] = r[0];
            }

            return (s[--t] = 2), (s[--t] = 0), new v(s);
          })(e, (this['n']['bitLength']() + 7) >> 3);

          if (null == t) return null;
          var s = this['doPublic'](t);
          if (null == s) return null;
          var a = s['toString'](16);
          return 0 == (1 & a['length']) ? a : '0' + a;
        }),
        C
      );
    })();
    _['default'] = _;
    var guid = (function () {
      function e() {
        return ((65536 * (1 + Math['random']())) | 0)['toString'](16)['substring'](1);
      }

      return function () {
        return e() + e() + e() + e();
      };
    })();

    var i = (function () {
      var e,
        s =
          Object['create'] ||
          (function () {
            function s() {}

            return function (e) {
              var t;
              return (s['prototype'] = e), (t = new s()), (s['prototype'] = null), t;
            };
          })(),
        t = {},
        a = (t['lib'] = {}),
        o = (a['Base'] = {
          extend: function (e) {
            var t = s(this);
            return (
              e && t['mixIn'](e),
              (t['hasOwnProperty']('init') && this['init'] !== t['init']) ||
                (t['init'] = function () {
                  t['$super']['init']['apply'](this, arguments);
                }),
              ((t['init']['prototype'] = t)['$super'] = this),
              t
            );
          },
          create: function () {
            var e = this['extend']();
            return e['init']['apply'](e, arguments), e;
          },
          init: function () {},
          mixIn: function (e) {
            for (var t in e) e['hasOwnProperty'](t) && (this[t] = e[t]);

            e['hasOwnProperty']('toString') && (this['toString'] = e['toString']);
          },
        }),
        u = (a['WordArray'] = o['extend']({
          init: function (e, t) {
            (e = this['words'] = e || []),
              t != undefined ? (this['sigBytes'] = t) : (this['sigBytes'] = 4 * e['length']);
          },
          concat: function (e) {
            var t = this['words'],
              s = e['words'],
              a = this['sigBytes'],
              o = e['sigBytes'];
            if ((this['clamp'](), a % 4))
              for (var n = 0; n < o; n++) {
                var r = (s[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                t[(a + n) >>> 2] |= r << (24 - ((a + n) % 4) * 8);
              }
            else for (n = 0; n < o; n += 4) t[(a + n) >>> 2] = s[n >>> 2];
            return (this['sigBytes'] += o), this;
          },
          clamp: function () {
            var e = this['words'],
              t = this['sigBytes'];
            (e[t >>> 2] &= 4294967295 << (32 - (t % 4) * 8)), (e['length'] = Math['ceil'](t / 4));
          },
        })),
        n = (t['enc'] = {}),
        p = (n['Latin1'] = {
          parse: function (e) {
            for (var t = e['length'], s = [], a = 0; a < t; a++)
              s[a >>> 2] |= (255 & e['charCodeAt'](a)) << (24 - (a % 4) * 8);

            return new u['init'](s, t);
          },
        }),
        r = (n['Utf8'] = {
          parse: function (e) {
            return p['parse'](unescape(encodeURIComponent(e)));
          },
        }),
        i = (a['BufferedBlockAlgorithm'] = o['extend']({
          reset: function () {
            (this['$_IJh'] = new u['init']()), (this['$_BCEV'] = 0);
          },
          $_BCFl: function (e) {
            'string' == typeof e && (e = r['parse'](e)),
              this['$_IJh']['concat'](e),
              (this['$_BCEV'] += e['sigBytes']);
          },
          $_BCG_: function (e) {
            var t = this['$_IJh'],
              s = t['words'],
              a = t['sigBytes'],
              o = this['blockSize'],
              n = a / (4 * o),
              r = (n = e ? Math['ceil'](n) : Math['max']((0 | n) - this['$_BCHY'], 0)) * o,
              i = Math['min'](4 * r, a);

            if (r) {
              for (var _ = 0; _ < r; _ += o) this['$_BCIr'](s, _);

              var c = s['splice'](0, r);
              t['sigBytes'] -= i;
            }

            return new u['init'](c, i);
          },
          $_BCHY: 0,
        })),
        _ = (t['algo'] = {}),
        c = (a['Cipher'] = i['extend']({
          cfg: o['extend'](),
          createEncryptor: function (e, t) {
            return this['create'](this['$_BCJq'], e, t);
          },
          init: function (e, t, s) {
            (this['cfg'] = this['cfg']['extend'](s)),
              (this['$_BDAX'] = e),
              (this['$_BDBI'] = t),
              this['reset']();
          },
          reset: function () {
            i['reset']['call'](this), this['$_BDCI']();
          },
          process: function (e) {
            return this['$_BCFl'](e), this['$_BCG_']();
          },
          finalize: function (e) {
            return e && this['$_BCFl'](e), this['$_BDDf']();
          },
          keySize: 4,
          ivSize: 4,
          $_BCJq: 1,
          $_BDEV: 2,
          $_BDFH: function (c) {
            return {
              encrypt: function (e, t, s) {
                (t = p['parse'](t)),
                  (s && s['iv']) || ((s = s || {})['iv'] = p['parse']('0000000000000000'));

                for (
                  var a = b['encrypt'](c, e, t, s),
                    o = a['ciphertext']['words'],
                    n = a['ciphertext']['sigBytes'],
                    r = [],
                    i = 0;
                  i < n;
                  i++
                ) {
                  var _ = (o[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;

                  r['push'](_);
                }

                return r;
              },
            };
          },
        })),
        g = (t['mode'] = {}),
        l = (a['BlockCipherMode'] = o['extend']({
          createEncryptor: function (e, t) {
            return this['Encryptor']['create'](e, t);
          },
          init: function (e, t) {
            (this['$_BDGQ'] = e), (this['$_BDHN'] = t);
          },
        })),
        d = (g['CBC'] =
          (((e = l['extend']())['Encryptor'] = e['extend']({
            processBlock: function (e, t) {
              var s = this['$_BDGQ'],
                a = s['blockSize'];
              (function r(e, t, s) {
                var a = this['$_BDHN'];

                if (a) {
                  var o = a;
                  this['$_BDHN'] = undefined;
                } else var o = this['$_BDIi'];

                for (var n = 0; n < s; n++) e[t + n] ^= o[n];
              }['call'](this, e, t, a),
                s['encryptBlock'](e, t),
                (this['$_BDIi'] = e['slice'](t, t + a)));
            },
          })),
          e)),
        h = ((t['pad'] = {})['Pkcs7'] = {
          pad: function (e, t) {
            for (
              var s = 4 * t,
                a = s - (e['sigBytes'] % s),
                o = (a << 24) | (a << 16) | (a << 8) | a,
                n = [],
                r = 0;
              r < a;
              r += 4
            )
              n['push'](o);

            var i = u['create'](n, a);
            e['concat'](i);
          },
        }),
        f = (a['BlockCipher'] = c['extend']({
          cfg: c['cfg']['extend']({
            mode: d,
            padding: h,
          }),
          reset: function () {
            c['reset']['call'](this);
            var e = this['cfg'],
              t = e['iv'],
              s = e['mode'];
            if (this['$_BDAX'] == this['$_BCJq']) var a = s['createEncryptor'];
            this['$_BDJg'] && this['$_BDJg']['$_BEAq'] == a
              ? this['$_BDJg']['init'](this, t && t['words'])
              : ((this['$_BDJg'] = a['call'](s, this, t && t['words'])),
                (this['$_BDJg']['$_BEAq'] = a));
          },
          $_BCIr: function (e, t) {
            this['$_BDJg']['processBlock'](e, t);
          },
          $_BDDf: function () {
            var e = this['cfg']['padding'];

            if (this['$_BDAX'] == this['$_BCJq']) {
              e['pad'](this['$_IJh'], this['blockSize']);
              var t = this['$_BCG_'](!0);
            }

            return t;
          },
          blockSize: 4,
        })),
        m = (a['CipherParams'] = o['extend']({
          init: function (e) {
            this['mixIn'](e);
          },
        })),
        b = (a['SerializableCipher'] = o['extend']({
          cfg: o['extend'](),
          encrypt: function (e, t, s, a) {
            a = this['cfg']['extend'](a);
            var o = e['createEncryptor'](s, a),
              n = o['finalize'](t),
              r = o['cfg'];
            return m['create']({
              ciphertext: n,
              key: s,
              iv: r['iv'],
              algorithm: e,
              mode: r['mode'],
              padding: r['padding'],
              blockSize: e['blockSize'],
              formatter: a['format'],
            });
          },
        })),
        v = [],
        w = [],
        x = [],
        k = [],
        y = [],
        C = [],
        z = [],
        T = [],
        E = [],
        A = [];

      !(function () {
        for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;

        var s = 0,
          a = 0;

        for (t = 0; t < 256; t++) {
          var o = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4);
          (o = (o >>> 8) ^ (255 & o) ^ 99), (v[s] = o);

          var n = e[(w[o] = s)],
            r = e[n],
            i = e[r],
            _ = (257 * e[o]) ^ (16843008 * o);

          (x[s] = (_ << 24) | (_ >>> 8)),
            (k[s] = (_ << 16) | (_ >>> 16)),
            (y[s] = (_ << 8) | (_ >>> 24)),
            (C[s] = _);
          _ = (16843009 * i) ^ (65537 * r) ^ (257 * n) ^ (16843008 * s);
          (z[o] = (_ << 24) | (_ >>> 8)),
            (T[o] = (_ << 16) | (_ >>> 16)),
            (E[o] = (_ << 8) | (_ >>> 24)),
            (A[o] = _),
            s ? ((s = n ^ e[e[e[i ^ n]]]), (a ^= e[e[a]])) : (s = a = 1);
        }
      })();
      var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        M = (_['AES'] = f['extend']({
          $_BDCI: function () {
            if (!this['$_BEBb'] || this['$_BECN'] !== this['$_BDBI']) {
              for (
                var e = (this['$_BECN'] = this['$_BDBI']),
                  t = e['words'],
                  s = e['sigBytes'] / 4,
                  a = 4 * (1 + (this['$_BEBb'] = 6 + s)),
                  o = (this['$_BEDl'] = []),
                  n = 0;
                n < a;
                n++
              )
                if (n < s) o[n] = t[n];
                else {
                  var r = o[n - 1];
                  n % s
                    ? 6 < s &&
                      n % s == 4 &&
                      (r =
                        (v[r >>> 24] << 24) |
                        (v[(r >>> 16) & 255] << 16) |
                        (v[(r >>> 8) & 255] << 8) |
                        v[255 & r])
                    : ((r =
                        (v[(r = (r << 8) | (r >>> 24)) >>> 24] << 24) |
                        (v[(r >>> 16) & 255] << 16) |
                        (v[(r >>> 8) & 255] << 8) |
                        v[255 & r]),
                      (r ^= S[(n / s) | 0] << 24)),
                    (o[n] = o[n - s] ^ r);
                }

              for (var i = (this['$_BEEk'] = []), _ = 0; _ < a; _++) {
                n = a - _;
                if (_ % 4) r = o[n];
                else r = o[n - 4];
                i[_] =
                  _ < 4 || n <= 4
                    ? r
                    : z[v[r >>> 24]] ^
                      T[v[(r >>> 16) & 255]] ^
                      E[v[(r >>> 8) & 255]] ^
                      A[v[255 & r]];
              }
            }
          },
          encryptBlock: function (e, t) {
            this['$_BEFu'](e, t, this['$_BEDl'], x, k, y, C, v);
          },
          $_BEFu: function (e, t, s, a, o, n, r, i) {
            for (
              var _ = this['$_BEBb'],
                c = e[t] ^ s[0],
                u = e[t + 1] ^ s[1],
                p = e[t + 2] ^ s[2],
                g = e[t + 3] ^ s[3],
                l = 4,
                d = 1;
              d < _;
              d++
            ) {
              var h = a[c >>> 24] ^ o[(u >>> 16) & 255] ^ n[(p >>> 8) & 255] ^ r[255 & g] ^ s[l++],
                f = a[u >>> 24] ^ o[(p >>> 16) & 255] ^ n[(g >>> 8) & 255] ^ r[255 & c] ^ s[l++],
                m = a[p >>> 24] ^ o[(g >>> 16) & 255] ^ n[(c >>> 8) & 255] ^ r[255 & u] ^ s[l++],
                b = a[g >>> 24] ^ o[(c >>> 16) & 255] ^ n[(u >>> 8) & 255] ^ r[255 & p] ^ s[l++];
              (c = h), (u = f), (p = m), (g = b);
            }

            (h =
              ((i[c >>> 24] << 24) |
                (i[(u >>> 16) & 255] << 16) |
                (i[(p >>> 8) & 255] << 8) |
                i[255 & g]) ^
              s[l++]),
              (f =
                ((i[u >>> 24] << 24) |
                  (i[(p >>> 16) & 255] << 16) |
                  (i[(g >>> 8) & 255] << 8) |
                  i[255 & c]) ^
                s[l++]),
              (m =
                ((i[p >>> 24] << 24) |
                  (i[(g >>> 16) & 255] << 16) |
                  (i[(c >>> 8) & 255] << 8) |
                  i[255 & u]) ^
                s[l++]),
              (b =
                ((i[g >>> 24] << 24) |
                  (i[(c >>> 16) & 255] << 16) |
                  (i[(u >>> 8) & 255] << 8) |
                  i[255 & p]) ^
                s[l++]);
            (e[t] = h), (e[t + 1] = f), (e[t + 2] = m), (e[t + 3] = b);
          },
          keySize: 8,
        }));
      return (t['AES'] = f['$_BDFH'](M)), t['AES'];
    })();
    i['default'] = i;

    function arrayToHex(e) {
      for (var t = [], s = 0, a = 0; a < 2 * e['length']; a += 2)
        (t[a >>> 3] |= parseInt(e[s], 10) << (24 - (a % 8) * 4)), s++;

      for (var o = [], n = 0; n < e['length']; n++) {
        var r = (t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        o['push']((r >>> 4)['toString'](16)), o['push']((15 & r)['toString'](16));
      }

      return o['join']('');
    }

    var a = guid(),
      o = new _['default']()['encrypt'](a); //rsa加密
    // console.log(a)
    // console.log(o)
    // console.log(e,"++++")
    var n = i['default']['encrypt'](e, a); //AES加密
    console.log(arrayToHex(n));
    return arrayToHex(n) + o;
  }
  var pow_msg =
      '1|0|md5|2022-07-09T21:54:54.851444+08:00|54088bb07d2df3c46b79f80300b0abbe|50769dab7275450db50550fcf351c95a||f93fd2ec831c936c',
    pow_sign = 'cdf83354eceeb61e7f7262d730487a38';
  var e = {
    passtime: passtime,
    userresponse: userresponse,
    device_id: 'A59C',
    lot_number: lot_number,
    pow_msg: pow_msg,
    pow_sign: pow_sign,
    geetest: 'captcha',
    lang: 'zh',
    ep: '123',
    l4vp: '1409684758',
    em: {
      ph: 0,
      cp: 0,
      ek: '11',
      wd: 1,
      nt: 0,
      si: 0,
      sc: 0,
    },
  };
  return get_h(d['default']['stringify'](e));
}

x = [
  [2933, 6800],
  [1166, 1250],
  [7900, 3400],
];
// console.log("dd \n  cc".trim().replace(/[\r\n]/g,"").replace(/\ +/g,""))
console.log(get_w(1674570977000, x, '6498a8dd1dd9478b805078cb9d57d4dd'));
