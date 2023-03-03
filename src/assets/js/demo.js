var _e;
!(function (
  t = {
    f1: _func1,
    f2: _func2,
  },
) {
  var i = {};
  function e(s) {
    if (i[s]) return i[s].exports;
    var n = (i[s] = {
      exports: {},
      id: s,
      loaded: !1,
    });
    return t[s].call(n.exports, n, n.exports, e), (n.loaded = !0), n.exports;
  }
  _e = e;
})(
  (t = {
    _func1: function () {
      console.log('111');
    },
    _func2: function () {
      console.log('222');
    },
  }),
);

console.log(_e('_func1'));
