var _e;
!(function (t) {
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
  {
    "_func1": function(x) {
      console.log("111" + x);

      var f1 = function ff1(x) {
        return x;
      }
    },
    "_func2": function(x) {
      console.log("222" + x);
    },
  }
);

console.log((_e('_func1')));

