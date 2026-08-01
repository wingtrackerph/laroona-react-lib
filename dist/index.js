//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Pt;
function l() {
  return Pt.apply(null, arguments);
}
function vs(e) {
  Pt = e;
}
function F(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function se(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function w(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function st(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (w(e, t))
      return !1;
  return !0;
}
function T(e) {
  return e === void 0;
}
function $(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ge(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ft(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function Q(e, t) {
  for (var s in t)
    w(t, s) && (e[s] = t[s]);
  return w(t, "toString") && (e.toString = t.toString), w(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function U(e, t, s, r) {
  return ss(e, t, s, r, !0).utc();
}
function ps() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function c(e) {
  return e._pf == null && (e._pf = ps()), e._pf;
}
var Be;
Array.prototype.some ? Be = Array.prototype.some : Be = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function rt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = c(e), s = Be.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Re(e) {
  var t = U(NaN);
  return e != null ? Q(c(t), e) : c(t).userInvalidated = !0, t;
}
var Ot = l.momentProperties = [], ze = !1;
function at(e, t) {
  var s, r, a, n = Ot.length;
  if (T(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), T(t._i) || (e._i = t._i), T(t._f) || (e._f = t._f), T(t._l) || (e._l = t._l), T(t._strict) || (e._strict = t._strict), T(t._tzm) || (e._tzm = t._tzm), T(t._isUTC) || (e._isUTC = t._isUTC), T(t._offset) || (e._offset = t._offset), T(t._pf) || (e._pf = c(t)), T(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = Ot[s], a = t[r], T(a) || (e[r] = a);
  return e;
}
function ke(e) {
  at(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), ze === !1 && (ze = !0, l.updateOffset(this), ze = !1);
}
function R(e) {
  return e instanceof ke || e != null && e._isAMomentObject != null;
}
function Rt(e) {
  l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function N(e, t) {
  var s = !0;
  return Q(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var r = [], a, n, i, u = arguments.length;
      for (n = 0; n < u; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            w(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      Rt(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Tt = {};
function It(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), Tt[e] || (Rt(t), Tt[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function H(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Os(e) {
  var t, s;
  for (s in e)
    w(e, s) && (t = e[s], H(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Je(e, t) {
  var s = Q({}, e), r;
  for (r in t)
    w(t, r) && (se(e[r]) && se(t[r]) ? (s[r] = {}, Q(s[r], e[r]), Q(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    w(e, r) && !w(t, r) && se(e[r]) && (s[r] = Q({}, s[r]));
  return s;
}
function nt(e) {
  e != null && this.set(e);
}
var Qe;
Object.keys ? Qe = Object.keys : Qe = function(e) {
  var t, s = [];
  for (t in e)
    w(e, t) && s.push(t);
  return s;
};
var Ts = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function bs(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return H(r) ? r.call(t, s) : r;
}
function L(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var it = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ve = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ze = {}, oe = {};
function f(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (oe[e] = a), t && (oe[t[0]] = function() {
    return L(a.apply(this, arguments), t[1], t[2]);
  }), s && (oe[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function xs(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ns(e) {
  var t = e.match(it), s, r;
  for (s = 0, r = t.length; s < r; s++)
    oe[t[s]] ? t[s] = oe[t[s]] : t[s] = xs(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += H(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Oe(e, t) {
  return e.isValid() ? (t = Ct(t, e.localeData()), Ze[t] = Ze[t] || Ns(t), Ze[t](e)) : e.localeData().invalidDate();
}
function Ct(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (ve.lastIndex = 0; s >= 0 && ve.test(e); )
    e = e.replace(
      ve,
      r
    ), ve.lastIndex = 0, s -= 1;
  return e;
}
var Ws = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ps(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(it).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Fs = "Invalid date";
function Rs() {
  return this._invalidDate;
}
var Is = "%d", Cs = /\d{1,2}/;
function Ls(e) {
  return this._ordinal.replace("%d", e);
}
var Us = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Hs(e, t, s, r) {
  var a = this._relativeTime[s];
  return H(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function Es(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return H(s) ? s(t) : s.replace(/%s/i, t);
}
var bt = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function W(e) {
  return typeof e == "string" ? bt[e] || bt[e.toLowerCase()] : void 0;
}
function ot(e) {
  var t = {}, s, r;
  for (r in e)
    w(e, r) && (s = W(r), s && (t[s] = e[r]));
  return t;
}
var As = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Vs(e) {
  var t = [], s;
  for (s in e)
    w(e, s) && t.push({ unit: s, priority: As[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var Lt = /\d/, b = /\d\d/, Ut = /\d{3}/, lt = /\d{4}/, Ie = /[+-]?\d{6}/, k = /\d\d?/, Ht = /\d\d\d\d?/, Et = /\d\d\d\d\d\d?/, Ce = /\d{1,3}/, ut = /\d{1,4}/, Le = /[+-]?\d{1,6}/, de = /\d+/, Ue = /[+-]?\d+/, Gs = /Z|[+-]\d\d:?\d\d/gi, He = /Z|[+-]\d\d(?::?\d\d)?/gi, js = /[+-]?\d+(\.\d{1,3})?/, Se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, fe = /^[1-9]\d?/, dt = /^([1-9]\d|\d)/, xe;
xe = {};
function d(e, t, s) {
  xe[e] = H(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function zs(e, t) {
  return w(xe, e) ? xe[e](t._strict, t._locale) : new RegExp(Zs(e));
}
function Zs(e) {
  return z(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function z(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function x(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function m(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = x(t)), s;
}
var Xe = {};
function M(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), $(t) && (r = function(n, i) {
    i[t] = m(n);
  }), a = e.length, s = 0; s < a; s++)
    Xe[e[s]] = r;
}
function Ye(e, t) {
  M(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function $s(e, t, s) {
  t != null && w(Xe, e) && Xe[e](t, s._a, s, e);
}
function Ee(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var p = 0, G = 1, C = 2, v = 3, P = 4, j = 5, te = 6, qs = 7, Bs = 8;
f("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? L(e, 4) : "+" + e;
});
f(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
f(0, ["YYYY", 4], 0, "year");
f(0, ["YYYYY", 5], 0, "year");
f(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", Ue);
d("YY", k, b);
d("YYYY", ut, lt);
d("YYYYY", Le, Ie);
d("YYYYYY", Le, Ie);
M(["YYYYY", "YYYYYY"], p);
M("YYYY", function(e, t) {
  t[p] = e.length === 2 ? l.parseTwoDigitYear(e) : m(e);
});
M("YY", function(e, t) {
  t[p] = l.parseTwoDigitYear(e);
});
M("Y", function(e, t) {
  t[p] = parseInt(e, 10);
});
function _e(e) {
  return Ee(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return m(e) + (m(e) > 68 ? 1900 : 2e3);
};
var At = he("FullYear", !0);
function Js() {
  return Ee(this.year());
}
function he(e, t) {
  return function(s) {
    return s != null ? (Vt(this, e, s), l.updateOffset(this, t), this) : ye(this, e);
  };
}
function ye(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function Vt(e, t, s) {
  var r, a, n, i, u;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      // case 'Day': // Not real
      //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
      // case 'Month': // Not used because we need to pass two variables
      //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
      case "FullYear":
        break;
      // See below ...
      default:
        return;
    }
    n = s, i = e.month(), u = e.date(), u = u === 29 && i === 1 && !Ee(n) ? 28 : u, a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u);
  }
}
function Qs(e) {
  return e = W(e), H(this[e]) ? this[e]() : this;
}
function Xs(e, t) {
  if (typeof e == "object") {
    e = ot(e);
    var s = Vs(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = W(e), H(this[e]))
    return this[e](t);
  return this;
}
function Ks(e, t) {
  return (e % t + t) % t;
}
var Y;
Array.prototype.indexOf ? Y = Array.prototype.indexOf : Y = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ft(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Ks(t, 12);
  return e += (t - s) / 12, s === 1 ? Ee(e) ? 29 : 28 : 31 - s % 7 % 2;
}
f("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
f("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
f("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
d("M", k, fe);
d("MM", k, b);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
M(["M", "MM"], function(e, t) {
  t[G] = m(e) - 1;
});
M(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[G] = a : c(s).invalidMonth = e;
});
var er = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Gt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, tr = Se, sr = Se;
function rr(e, t) {
  return e ? F(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || jt).test(t) ? "format" : "standalone"][e.month()] : F(this._months) ? this._months : this._months.standalone;
}
function ar(e, t) {
  return e ? F(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[jt.test(t) ? "format" : "standalone"][e.month()] : F(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function nr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = U([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function ir(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return nr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = U([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function zt(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = m(t);
    else if (t = e.localeData().monthsParse(t), !$(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, ft(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function Zt(e) {
  return e != null ? (zt(this, e), l.updateOffset(this, !0), this) : ye(this, "Month");
}
function or() {
  return ft(this.year(), this.month());
}
function lr(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || $t.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = tr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ur(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || $t.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = sr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function $t() {
  function e(h, _) {
    return _.length - h.length;
  }
  var t = [], s = [], r = [], a, n, i, u;
  for (a = 0; a < 12; a++)
    n = U([2e3, a]), i = z(this.monthsShort(n, "")), u = z(this.months(n, "")), t.push(i), s.push(u), r.push(u), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function dr(e, t, s, r, a, n, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, n, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, n, i), u;
}
function we(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ne(e, t, s) {
  var r = 7 + t - s, a = (7 + we(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function qt(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = Ne(e, r, a), u = 1 + 7 * (t - 1) + n + i, h, _;
  return u <= 0 ? (h = e - 1, _ = _e(h) + u) : u > _e(e) ? (h = e + 1, _ = u - _e(e)) : (h = e, _ = u), {
    year: h,
    dayOfYear: _
  };
}
function De(e, t, s) {
  var r = Ne(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + Z(i, t, s)) : a > Z(e.year(), t, s) ? (n = a - Z(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function Z(e, t, s) {
  var r = Ne(e, t, s), a = Ne(e + 1, t, s);
  return (_e(e) - r + a) / 7;
}
f("w", ["ww", 2], "wo", "week");
f("W", ["WW", 2], "Wo", "isoWeek");
d("w", k, fe);
d("ww", k, b);
d("W", k, fe);
d("WW", k, b);
Ye(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = m(e);
  }
);
function fr(e) {
  return De(e, this._week.dow, this._week.doy).week;
}
var hr = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function cr() {
  return this._week.dow;
}
function mr() {
  return this._week.doy;
}
function _r(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function yr(e) {
  var t = De(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
f("d", 0, "do", "day");
f("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
f("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
f("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
f("e", 0, 0, "weekday");
f("E", 0, 0, "isoWeekday");
d("d", k);
d("e", k);
d("E", k);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ye(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : c(s).invalidWeekday = e;
});
Ye(["d", "e", "E"], function(e, t, s, r) {
  t[r] = m(e);
});
function wr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Dr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ht(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Mr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), gr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), kr = Se, Sr = Se, Yr = Se;
function vr(e, t) {
  var s = F(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ht(s, this._week.dow) : e ? s[e.day()] : s;
}
function pr(e) {
  return e === !0 ? ht(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Or(e) {
  return e === !0 ? ht(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Tr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = U([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 || (a = Y.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function br(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return Tr.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = U([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function xr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ye(this, "Day");
  return e != null ? (e = wr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Nr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Wr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Dr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Pr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || ct.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = kr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Fr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || ct.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Sr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Rr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || ct.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Yr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function ct() {
  function e(O, E) {
    return E.length - O.length;
  }
  var t = [], s = [], r = [], a = [], n, i, u, h, _;
  for (n = 0; n < 7; n++)
    i = U([2e3, 1]).day(n), u = z(this.weekdaysMin(i, "")), h = z(this.weekdaysShort(i, "")), _ = z(this.weekdays(i, "")), t.push(u), s.push(h), r.push(_), a.push(u), a.push(h), a.push(_);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function mt() {
  return this.hours() % 12 || 12;
}
function Ir() {
  return this.hours() || 24;
}
f("H", ["HH", 2], 0, "hour");
f("h", ["hh", 2], 0, mt);
f("k", ["kk", 2], 0, Ir);
f("hmm", 0, 0, function() {
  return "" + mt.apply(this) + L(this.minutes(), 2);
});
f("hmmss", 0, 0, function() {
  return "" + mt.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2);
});
f("Hmm", 0, 0, function() {
  return "" + this.hours() + L(this.minutes(), 2);
});
f("Hmmss", 0, 0, function() {
  return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2);
});
function Jt(e, t) {
  f(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Jt("a", !0);
Jt("A", !1);
function Qt(e, t) {
  return t._meridiemParse;
}
d("a", Qt);
d("A", Qt);
d("H", k, dt);
d("h", k, fe);
d("k", k, fe);
d("HH", k, b);
d("hh", k, b);
d("kk", k, b);
d("hmm", Ht);
d("hmmss", Et);
d("Hmm", Ht);
d("Hmmss", Et);
M(["H", "HH"], v);
M(["k", "kk"], function(e, t, s) {
  var r = m(e);
  t[v] = r === 24 ? 0 : r;
});
M(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
M(["h", "hh"], function(e, t, s) {
  t[v] = m(e), c(s).bigHour = !0;
});
M("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[v] = m(e.substr(0, r)), t[P] = m(e.substr(r)), c(s).bigHour = !0;
});
M("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[v] = m(e.substr(0, r)), t[P] = m(e.substr(r, 2)), t[j] = m(e.substr(a)), c(s).bigHour = !0;
});
M("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[v] = m(e.substr(0, r)), t[P] = m(e.substr(r));
});
M("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[v] = m(e.substr(0, r)), t[P] = m(e.substr(r, 2)), t[j] = m(e.substr(a));
});
function Cr(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Lr = /[ap]\.?m?\.?/i, Ur = he("Hours", !0);
function Hr(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Xt = {
  calendar: Ts,
  longDateFormat: Ws,
  invalidDate: Fs,
  ordinal: Is,
  dayOfMonthOrdinalParse: Cs,
  relativeTime: Us,
  months: er,
  monthsShort: Gt,
  week: hr,
  weekdays: Mr,
  weekdaysMin: gr,
  weekdaysShort: Bt,
  meridiemParse: Lr
}, S = {}, ce = {}, Me;
function Er(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function xt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Ar(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = xt(e[t]).split("-"), s = n.length, r = xt(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Ae(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && Er(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Me;
}
function Vr(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ae(e) {
  var t = null, s;
  if (S[e] === void 0 && typeof module < "u" && module && module.exports && Vr(e))
    try {
      t = Me._abbr, s = require, s("./locale/" + e), K(t);
    } catch {
      S[e] = null;
    }
  return S[e];
}
function K(e, t) {
  var s;
  return e && (T(t) ? s = q(e) : s = _t(e, t), s ? Me = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Me._abbr;
}
function _t(e, t) {
  if (t !== null) {
    var s, r = Xt;
    if (t.abbr = e, S[e] != null)
      It(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = S[e]._config;
    else if (t.parentLocale != null)
      if (S[t.parentLocale] != null)
        r = S[t.parentLocale]._config;
      else if (s = Ae(t.parentLocale), s != null)
        r = s._config;
      else
        return ce[t.parentLocale] || (ce[t.parentLocale] = []), ce[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return S[e] = new nt(Je(r, t)), ce[e] && ce[e].forEach(function(a) {
      _t(a.name, a.config);
    }), K(e), S[e];
  } else
    return delete S[e], null;
}
function Gr(e, t) {
  if (t != null) {
    var s, r, a = Xt;
    S[e] != null && S[e].parentLocale != null ? S[e].set(Je(S[e]._config, t)) : (r = Ae(e), r != null && (a = r._config), t = Je(a, t), r == null && (t.abbr = e), s = new nt(t), s.parentLocale = S[e], S[e] = s), K(e);
  } else
    S[e] != null && (S[e].parentLocale != null ? (S[e] = S[e].parentLocale, e === K() && K(e)) : S[e] != null && delete S[e]);
  return S[e];
}
function q(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Me;
  if (!F(e)) {
    if (t = Ae(e), t)
      return t;
    e = [e];
  }
  return Ar(e);
}
function jr() {
  return Qe(S);
}
function yt(e) {
  var t, s = e._a;
  return s && c(e).overflow === -2 && (t = s[G] < 0 || s[G] > 11 ? G : s[C] < 1 || s[C] > ft(s[p], s[G]) ? C : s[v] < 0 || s[v] > 24 || s[v] === 24 && (s[P] !== 0 || s[j] !== 0 || s[te] !== 0) ? v : s[P] < 0 || s[P] > 59 ? P : s[j] < 0 || s[j] > 59 ? j : s[te] < 0 || s[te] > 999 ? te : -1, c(e)._overflowDayOfYear && (t < p || t > C) && (t = C), c(e)._overflowWeeks && t === -1 && (t = qs), c(e)._overflowWeekday && t === -1 && (t = Bs), c(e).overflow = t), e;
}
var zr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Zr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, $r = /Z|[+-]\d\d(?::?\d\d)?/, pe = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], $e = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], qr = /^\/?Date\((-?\d+)/i, Br = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Jr = {
  UT: 0,
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function Kt(e) {
  var t, s, r = e._i, a = zr.exec(r) || Zr.exec(r), n, i, u, h, _ = pe.length, O = $e.length;
  if (a) {
    for (c(e).iso = !0, t = 0, s = _; t < s; t++)
      if (pe[t][1].exec(a[1])) {
        i = pe[t][0], n = pe[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = O; t < s; t++)
        if ($e[t][1].exec(a[3])) {
          u = (a[2] || " ") + $e[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if ($r.exec(a[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (h || ""), Dt(e);
  } else
    e._isValid = !1;
}
function Qr(e, t, s, r, a, n) {
  var i = [
    Xr(e),
    Gt.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Xr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Kr(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ea(e, t, s) {
  if (e) {
    var r = Bt.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return c(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function ta(e, t, s) {
  if (e)
    return Jr[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function es(e) {
  var t = Br.exec(Kr(e._i)), s;
  if (t) {
    if (s = Qr(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ea(t[1], s, e))
      return;
    e._a = s, e._tzm = ta(t[8], t[9], t[10]), e._d = we.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function sa(e) {
  var t = qr.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Kt(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (es(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = N(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ne(e, t, s) {
  return e ?? t ?? s;
}
function ra(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function wt(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = ra(e), e._w && e._a[C] == null && e._a[G] == null && aa(e), e._dayOfYear != null && (i = ne(e._a[p], a[p]), (e._dayOfYear > _e(i) || e._dayOfYear === 0) && (c(e)._overflowDayOfYear = !0), s = we(i, 0, e._dayOfYear), e._a[G] = s.getUTCMonth(), e._a[C] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[v] === 24 && e._a[P] === 0 && e._a[j] === 0 && e._a[te] === 0 && (e._nextDay = !0, e._a[v] = 0), e._d = (e._useUTC ? we : dr).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[v] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (c(e).weekdayMismatch = !0);
  }
}
function aa(e) {
  var t, s, r, a, n, i, u, h, _;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = ne(
    t.GG,
    e._a[p],
    De(g(), 1, 4).year
  ), r = ne(t.W, 1), a = ne(t.E, 1), (a < 1 || a > 7) && (h = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, _ = De(g(), n, i), s = ne(t.gg, e._a[p], _.year), r = ne(t.w, _.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (h = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (h = !0)) : a = n), r < 1 || r > Z(s, n, i) ? c(e)._overflowWeeks = !0 : h != null ? c(e)._overflowWeekday = !0 : (u = qt(s, r, a, n, i), e._a[p] = u.year, e._dayOfYear = u.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function Dt(e) {
  if (e._f === l.ISO_8601) {
    Kt(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    es(e);
    return;
  }
  e._a = [], c(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, u = t.length, h = 0, _, O;
  for (a = Ct(e._f, e._locale).match(it) || [], O = a.length, s = 0; s < O; s++)
    n = a[s], r = (t.match(zs(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && c(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), h += r.length), oe[n] ? (r ? c(e).empty = !1 : c(e).unusedTokens.push(n), $s(n, r, e)) : e._strict && !r && c(e).unusedTokens.push(n);
  c(e).charsLeftOver = u - h, t.length > 0 && c(e).unusedInput.push(t), e._a[v] <= 12 && c(e).bigHour === !0 && e._a[v] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[v] = na(
    e._locale,
    e._a[v],
    e._meridiem
  ), _ = c(e).era, _ !== null && (e._a[p] = e._locale.erasConvertYear(_, e._a[p])), wt(e), yt(e);
}
function na(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function ia(e) {
  var t, s, r, a, n, i, u = !1, h = e._f.length;
  if (h === 0) {
    c(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < h; a++)
    n = 0, i = !1, t = at({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Dt(t), rt(t) && (i = !0), n += c(t).charsLeftOver, n += c(t).unusedTokens.length * 10, c(t).score = n, u ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (u = !0));
  Q(e, s || t);
}
function oa(e) {
  if (!e._d) {
    var t = ot(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Ft(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), wt(e);
  }
}
function la(e) {
  var t = new ke(yt(ts(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ts(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || q(e._l), t === null || s === void 0 && t === "" ? Re({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), R(t) ? new ke(yt(t)) : (ge(t) ? e._d = t : F(s) ? ia(e) : s ? Dt(e) : ua(e), rt(e) || (e._d = null), e));
}
function ua(e) {
  var t = e._i;
  T(t) ? e._d = new Date(l.now()) : ge(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? sa(e) : F(t) ? (e._a = Ft(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), wt(e)) : se(t) ? oa(e) : $(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function ss(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (se(e) && st(e) || F(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, la(n);
}
function g(e, t, s, r) {
  return ss(e, t, s, r, !1);
}
var da = N(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = g.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Re();
  }
), fa = N(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = g.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Re();
  }
);
function rs(e, t) {
  var s, r;
  if (t.length === 1 && F(t[0]) && (t = t[0]), !t.length)
    return g();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function ha() {
  var e = [].slice.call(arguments, 0);
  return rs("isBefore", e);
}
function ca() {
  var e = [].slice.call(arguments, 0);
  return rs("isAfter", e);
}
var ma = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, me = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function _a(e) {
  var t, s = !1, r, a = me.length;
  for (t in e)
    if (w(e, t) && !(Y.call(me, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[me[r]]) {
      if (s)
        return !1;
      parseFloat(e[me[r]]) !== m(e[me[r]]) && (s = !0);
    }
  return !0;
}
function ya() {
  return this._isValid;
}
function wa() {
  return I(NaN);
}
function Ve(e) {
  var t = ot(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, h = t.minute || 0, _ = t.second || 0, O = t.millisecond || 0;
  this._isValid = _a(t), this._milliseconds = +O + _ * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = q(), this._bubble();
}
function Te(e) {
  return e instanceof Ve;
}
function Ke(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Da(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    m(e[i]) !== m(t[i]) && n++;
  return n + a;
}
function as(e, t) {
  f(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + L(~~(s / 60), 2) + t + L(~~s % 60, 2);
  });
}
as("Z", ":");
as("ZZ", "");
d("Z", He);
d("ZZ", He);
M(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Mt(He, e);
});
var Ma = /([\+\-]|\d\d)/gi;
function Mt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(Ma) || ["-", 0, 0], n = +(a[1] * 60) + m(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function gt(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (R(e) || ge(e) ? e.valueOf() : g(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : g(e).local();
}
function et(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function ga(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Mt(He, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = et(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? os(
      this,
      I(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : et(this);
}
function ka(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Sa(e) {
  return this.utcOffset(0, e);
}
function Ya(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(et(this), "m")), this;
}
function va() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Mt(Gs, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function pa(e) {
  return this.isValid() ? (e = e ? g(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Oa() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Ta() {
  if (!T(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return at(e, this), e = ts(e), e._a ? (t = e._isUTC ? U(e._a) : g(e._a), this._isDSTShifted = this.isValid() && Da(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ba() {
  return this.isValid() ? !this._isUTC : !1;
}
function xa() {
  return this.isValid() ? this._isUTC : !1;
}
function ns() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Na = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Wa = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function I(e, t) {
  var s = e, r = null, a, n, i;
  return Te(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : $(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Na.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: m(r[C]) * a,
    h: m(r[v]) * a,
    m: m(r[P]) * a,
    s: m(r[j]) * a,
    ms: m(Ke(r[te] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = Wa.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ee(r[2], a),
    M: ee(r[3], a),
    w: ee(r[4], a),
    d: ee(r[5], a),
    h: ee(r[6], a),
    m: ee(r[7], a),
    s: ee(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = Pa(
    g(s.from),
    g(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new Ve(s), Te(e) && w(e, "_locale") && (n._locale = e._locale), Te(e) && w(e, "_isValid") && (n._isValid = e._isValid), n;
}
I.fn = Ve.prototype;
I.invalid = wa;
function ee(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Nt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Pa(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = gt(t, e), e.isBefore(t) ? s = Nt(e, t) : (s = Nt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function is(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (It(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = I(s, r), os(this, a, e), this;
  };
}
function os(e, t, s, r) {
  var a = t._milliseconds, n = Ke(t._days), i = Ke(t._months);
  e.isValid() && (r = r ?? !0, i && zt(e, ye(e, "Month") + i * s), n && Vt(e, "Date", ye(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && l.updateOffset(e, n || i));
}
var Fa = is(1, "add"), Ra = is(-1, "subtract");
function ls(e) {
  return typeof e == "string" || e instanceof String;
}
function Ia(e) {
  return R(e) || ge(e) || ls(e) || $(e) || La(e) || Ca(e) || e === null || e === void 0;
}
function Ca(e) {
  var t = se(e) && !st(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, n, i = r.length;
  for (a = 0; a < i; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function La(e) {
  var t = F(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !$(r) && ls(e);
  }).length === 0), t && s;
}
function Ua(e) {
  var t = se(e) && !st(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function Ha(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Ea(e, t) {
  arguments.length === 1 && (arguments[0] ? Ia(arguments[0]) ? (e = arguments[0], t = void 0) : Ua(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || g(), r = gt(s, this).startOf("day"), a = l.calendarFormat(this, r) || "sameElse", n = t && (H(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, g(s))
  );
}
function Aa() {
  return new ke(this);
}
function Va(e, t) {
  var s = R(e) ? e : g(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Ga(e, t) {
  var s = R(e) ? e : g(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function ja(e, t, s, r) {
  var a = R(e) ? e : g(e), n = R(t) ? t : g(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function za(e, t) {
  var s = R(e) ? e : g(e), r;
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Za(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function $a(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function qa(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = gt(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = W(t), t) {
    case "year":
      n = be(this, r) / 12;
      break;
    case "month":
      n = be(this, r);
      break;
    case "quarter":
      n = be(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    // 1000
    case "minute":
      n = (this - r) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      n = (this - r) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      n = (this - r - a) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      n = this - r;
  }
  return s ? n : x(n);
}
function be(e, t) {
  if (e.date() < t.date())
    return -be(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Ba() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Ja(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Oe(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Oe(s, "Z")) : Oe(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Qa() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function Xa(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Oe(this, e);
  return this.localeData().postformat(t);
}
function Ka(e, t) {
  return this.isValid() && (R(e) && e.isValid() || g(e).isValid()) ? I({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function en(e) {
  return this.from(g(), e);
}
function tn(e, t) {
  return this.isValid() && (R(e) && e.isValid() || g(e).isValid()) ? I({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function sn(e) {
  return this.to(g(), e);
}
function us(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = q(e), t != null && (this._locale = t), this);
}
var ds = N(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function fs() {
  return this._locale;
}
var We = 1e3, le = 60 * We, Pe = 60 * le, hs = (365 * 400 + 97) * 24 * Pe;
function ue(e, t) {
  return (e % t + t) % t;
}
function cs(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - hs : new Date(e, t, s).valueOf();
}
function ms(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - hs : Date.UTC(e, t, s);
}
function rn(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ms : cs, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ue(
        t + (this._isUTC ? 0 : this.utcOffset() * le),
        Pe
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ue(t, le);
      break;
    case "second":
      t = this._d.valueOf(), t -= ue(t, We);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function an(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ms : cs, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Pe - ue(
        t + (this._isUTC ? 0 : this.utcOffset() * le),
        Pe
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += le - ue(t, le) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += We - ue(t, We) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function nn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function on() {
  return Math.floor(this.valueOf() / 1e3);
}
function ln() {
  return new Date(this.valueOf());
}
function un() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function dn() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function fn() {
  return this.isValid() ? this.toISOString() : null;
}
function hn() {
  return rt(this);
}
function cn() {
  return Q({}, c(this));
}
function mn() {
  return c(this).overflow;
}
function _n() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
f("N", 0, 0, "eraAbbr");
f("NN", 0, 0, "eraAbbr");
f("NNN", 0, 0, "eraAbbr");
f("NNNN", 0, 0, "eraName");
f("NNNNN", 0, 0, "eraNarrow");
f("y", ["y", 1], "yo", "eraYear");
f("y", ["yy", 2], 0, "eraYear");
f("y", ["yyy", 3], 0, "eraYear");
f("y", ["yyyy", 4], 0, "eraYear");
d("N", kt);
d("NN", kt);
d("NNN", kt);
d("NNNN", On);
d("NNNNN", Tn);
M(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? c(s).era = a : c(s).invalidEra = e;
  }
);
d("y", de);
d("yy", de);
d("yyy", de);
d("yyyy", de);
d("yo", bn);
M(["y", "yy", "yyy", "yyyy"], p);
M(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[p] = s._locale.eraYearOrdinalParse(e, a) : t[p] = parseInt(e, 10);
});
function yn(e, t) {
  var s, r, a, n = this._eras || q("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = l(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = l(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function wn(e, t, s) {
  var r, a, n = this.eras(), i, u, h;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), u = n[r].abbr.toUpperCase(), h = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return n[r];
          break;
        case "NNNN":
          if (i === e)
            return n[r];
          break;
        case "NNNNN":
          if (h === e)
            return n[r];
          break;
      }
    else if ([i, u, h].indexOf(e) >= 0)
      return n[r];
}
function Dn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function Mn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function gn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function kn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function Sn() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Yn(e) {
  return w(this, "_erasNameRegex") || St.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function vn(e) {
  return w(this, "_erasAbbrRegex") || St.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function pn(e) {
  return w(this, "_erasNarrowRegex") || St.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function kt(e, t) {
  return t.erasAbbrRegex(e);
}
function On(e, t) {
  return t.erasNameRegex(e);
}
function Tn(e, t) {
  return t.erasNarrowRegex(e);
}
function bn(e, t) {
  return t._eraYearOrdinalRegex || de;
}
function St() {
  var e = [], t = [], s = [], r = [], a, n, i, u, h, _ = this.eras();
  for (a = 0, n = _.length; a < n; ++a)
    i = z(_[a].name), u = z(_[a].abbr), h = z(_[a].narrow), t.push(i), e.push(u), s.push(h), r.push(i), r.push(u), r.push(h);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
f(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
f(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ge(e, t) {
  f(0, [e, e.length], 0, t);
}
Ge("gggg", "weekYear");
Ge("ggggg", "weekYear");
Ge("GGGG", "isoWeekYear");
Ge("GGGGG", "isoWeekYear");
d("G", Ue);
d("g", Ue);
d("GG", k, b);
d("gg", k, b);
d("GGGG", ut, lt);
d("gggg", ut, lt);
d("GGGGG", Le, Ie);
d("ggggg", Le, Ie);
Ye(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = m(e);
  }
);
Ye(["gg", "GG"], function(e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function xn(e) {
  return _s.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Nn(e) {
  return _s.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Wn() {
  return Z(this.year(), 1, 4);
}
function Pn() {
  return Z(this.isoWeekYear(), 1, 4);
}
function Fn() {
  var e = this.localeData()._week;
  return Z(this.year(), e.dow, e.doy);
}
function Rn() {
  var e = this.localeData()._week;
  return Z(this.weekYear(), e.dow, e.doy);
}
function _s(e, t, s, r, a) {
  var n;
  return e == null ? De(this, r, a).year : (n = Z(e, r, a), t > n && (t = n), In.call(this, e, t, s, r, a));
}
function In(e, t, s, r, a) {
  var n = qt(e, t, s, r, a), i = we(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
f("Q", 0, "Qo", "quarter");
d("Q", Lt);
M("Q", function(e, t) {
  t[G] = (m(e) - 1) * 3;
});
function Cn(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
f("D", ["DD", 2], "Do", "date");
d("D", k, fe);
d("DD", k, b);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
M(["D", "DD"], C);
M("Do", function(e, t) {
  t[C] = m(e.match(k)[0]);
});
var ys = he("Date", !0);
f("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", Ce);
d("DDDD", Ut);
M(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = m(e);
});
function Ln(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
f("m", ["mm", 2], 0, "minute");
d("m", k, dt);
d("mm", k, b);
M(["m", "mm"], P);
var Un = he("Minutes", !1);
f("s", ["ss", 2], 0, "second");
d("s", k, dt);
d("ss", k, b);
M(["s", "ss"], j);
var Hn = he("Seconds", !1);
f("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
f(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
f(0, ["SSS", 3], 0, "millisecond");
f(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
f(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
f(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
f(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
f(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
f(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
d("S", Ce, Lt);
d("SS", Ce, b);
d("SSS", Ce, Ut);
var X, ws;
for (X = "SSSS"; X.length <= 9; X += "S")
  d(X, de);
function En(e, t) {
  t[te] = m(("0." + e) * 1e3);
}
for (X = "S"; X.length <= 9; X += "S")
  M(X, En);
ws = he("Milliseconds", !1);
f("z", 0, 0, "zoneAbbr");
f("zz", 0, 0, "zoneName");
function An() {
  return this._isUTC ? "UTC" : "";
}
function Vn() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = ke.prototype;
o.add = Fa;
o.calendar = Ea;
o.clone = Aa;
o.diff = qa;
o.endOf = an;
o.format = Xa;
o.from = Ka;
o.fromNow = en;
o.to = tn;
o.toNow = sn;
o.get = Qs;
o.invalidAt = mn;
o.isAfter = Va;
o.isBefore = Ga;
o.isBetween = ja;
o.isSame = za;
o.isSameOrAfter = Za;
o.isSameOrBefore = $a;
o.isValid = hn;
o.lang = ds;
o.locale = us;
o.localeData = fs;
o.max = fa;
o.min = da;
o.parsingFlags = cn;
o.set = Xs;
o.startOf = rn;
o.subtract = Ra;
o.toArray = un;
o.toObject = dn;
o.toDate = ln;
o.toISOString = Ja;
o.inspect = Qa;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
o.toJSON = fn;
o.toString = Ba;
o.unix = on;
o.valueOf = nn;
o.creationData = _n;
o.eraName = Mn;
o.eraNarrow = gn;
o.eraAbbr = kn;
o.eraYear = Sn;
o.year = At;
o.isLeapYear = Js;
o.weekYear = xn;
o.isoWeekYear = Nn;
o.quarter = o.quarters = Cn;
o.month = Zt;
o.daysInMonth = or;
o.week = o.weeks = _r;
o.isoWeek = o.isoWeeks = yr;
o.weeksInYear = Fn;
o.weeksInWeekYear = Rn;
o.isoWeeksInYear = Wn;
o.isoWeeksInISOWeekYear = Pn;
o.date = ys;
o.day = o.days = xr;
o.weekday = Nr;
o.isoWeekday = Wr;
o.dayOfYear = Ln;
o.hour = o.hours = Ur;
o.minute = o.minutes = Un;
o.second = o.seconds = Hn;
o.millisecond = o.milliseconds = ws;
o.utcOffset = ga;
o.utc = Sa;
o.local = Ya;
o.parseZone = va;
o.hasAlignedHourOffset = pa;
o.isDST = Oa;
o.isLocal = ba;
o.isUtcOffset = xa;
o.isUtc = ns;
o.isUTC = ns;
o.zoneAbbr = An;
o.zoneName = Vn;
o.dates = N(
  "dates accessor is deprecated. Use date instead.",
  ys
);
o.months = N(
  "months accessor is deprecated. Use month instead",
  Zt
);
o.years = N(
  "years accessor is deprecated. Use year instead",
  At
);
o.zone = N(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  ka
);
o.isDSTShifted = N(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Ta
);
function Gn(e) {
  return g(e * 1e3);
}
function jn() {
  return g.apply(null, arguments).parseZone();
}
function Ds(e) {
  return e;
}
var D = nt.prototype;
D.calendar = bs;
D.longDateFormat = Ps;
D.invalidDate = Rs;
D.ordinal = Ls;
D.preparse = Ds;
D.postformat = Ds;
D.relativeTime = Hs;
D.pastFuture = Es;
D.set = Os;
D.eras = yn;
D.erasParse = wn;
D.erasConvertYear = Dn;
D.erasAbbrRegex = vn;
D.erasNameRegex = Yn;
D.erasNarrowRegex = pn;
D.months = rr;
D.monthsShort = ar;
D.monthsParse = ir;
D.monthsRegex = ur;
D.monthsShortRegex = lr;
D.week = fr;
D.firstDayOfYear = mr;
D.firstDayOfWeek = cr;
D.weekdays = vr;
D.weekdaysMin = Or;
D.weekdaysShort = pr;
D.weekdaysParse = br;
D.weekdaysRegex = Pr;
D.weekdaysShortRegex = Fr;
D.weekdaysMinRegex = Rr;
D.isPM = Cr;
D.meridiem = Hr;
function Fe(e, t, s, r) {
  var a = q(), n = U().set(r, t);
  return a[s](n, e);
}
function Ms(e, t, s) {
  if ($(e) && (t = e, e = void 0), e = e || "", t != null)
    return Fe(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Fe(e, r, s, "month");
  return a;
}
function Yt(e, t, s, r) {
  typeof e == "boolean" ? ($(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, $(t) && (s = t, t = void 0), t = t || "");
  var a = q(), n = e ? a._week.dow : 0, i, u = [];
  if (s != null)
    return Fe(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    u[i] = Fe(t, (i + n) % 7, r, "day");
  return u;
}
function zn(e, t) {
  return Ms(e, t, "months");
}
function Zn(e, t) {
  return Ms(e, t, "monthsShort");
}
function $n(e, t, s) {
  return Yt(e, t, s, "weekdays");
}
function qn(e, t, s) {
  return Yt(e, t, s, "weekdaysShort");
}
function Bn(e, t, s) {
  return Yt(e, t, s, "weekdaysMin");
}
K("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = m(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = N(
  "moment.lang is deprecated. Use moment.locale instead.",
  K
);
l.langData = N(
  "moment.langData is deprecated. Use moment.localeData instead.",
  q
);
var A = Math.abs;
function Jn() {
  var e = this._data;
  return this._milliseconds = A(this._milliseconds), this._days = A(this._days), this._months = A(this._months), e.milliseconds = A(e.milliseconds), e.seconds = A(e.seconds), e.minutes = A(e.minutes), e.hours = A(e.hours), e.months = A(e.months), e.years = A(e.years), this;
}
function gs(e, t, s, r) {
  var a = I(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function Qn(e, t) {
  return gs(this, e, t, 1);
}
function Xn(e, t) {
  return gs(this, e, t, -1);
}
function Wt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Kn() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, h;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Wt(tt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = x(e / 1e3), r.seconds = a % 60, n = x(a / 60), r.minutes = n % 60, i = x(n / 60), r.hours = i % 24, t += x(i / 24), h = x(ks(t)), s += h, t -= Wt(tt(h)), u = x(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function ks(e) {
  return e * 4800 / 146097;
}
function tt(e) {
  return e * 146097 / 4800;
}
function ei(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = W(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + ks(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(tt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      // Math.floor prevents floating point math errors here
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function B(e) {
  return function() {
    return this.as(e);
  };
}
var Ss = B("ms"), ti = B("s"), si = B("m"), ri = B("h"), ai = B("d"), ni = B("w"), ii = B("M"), oi = B("Q"), li = B("y"), ui = Ss;
function di() {
  return I(this);
}
function fi(e) {
  return e = W(e), this.isValid() ? this[e + "s"]() : NaN;
}
function re(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var hi = re("milliseconds"), ci = re("seconds"), mi = re("minutes"), _i = re("hours"), yi = re("days"), wi = re("months"), Di = re("years");
function Mi() {
  return x(this.days() / 7);
}
var V = Math.round, ie = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function gi(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function ki(e, t, s, r) {
  var a = I(e).abs(), n = V(a.as("s")), i = V(a.as("m")), u = V(a.as("h")), h = V(a.as("d")), _ = V(a.as("M")), O = V(a.as("w")), E = V(a.as("y")), J = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || h <= 1 && ["d"] || h < s.d && ["dd", h];
  return s.w != null && (J = J || O <= 1 && ["w"] || O < s.w && ["ww", O]), J = J || _ <= 1 && ["M"] || _ < s.M && ["MM", _] || E <= 1 && ["y"] || ["yy", E], J[2] = t, J[3] = +e > 0, J[4] = r, gi.apply(null, J);
}
function Si(e) {
  return e === void 0 ? V : typeof e == "function" ? (V = e, !0) : !1;
}
function Yi(e, t) {
  return ie[e] === void 0 ? !1 : t === void 0 ? ie[e] : (ie[e] = t, e === "s" && (ie.ss = t - 1), !0);
}
function vi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = ie, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, ie, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = ki(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var qe = Math.abs;
function ae(e) {
  return (e > 0) - (e < 0) || +e;
}
function je() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = qe(this._milliseconds) / 1e3, t = qe(this._days), s = qe(this._months), r, a, n, i, u = this.asSeconds(), h, _, O, E;
  return u ? (r = x(e / 60), a = x(r / 60), e %= 60, r %= 60, n = x(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = u < 0 ? "-" : "", _ = ae(this._months) !== ae(u) ? "-" : "", O = ae(this._days) !== ae(u) ? "-" : "", E = ae(this._milliseconds) !== ae(u) ? "-" : "", h + "P" + (n ? _ + n + "Y" : "") + (s ? _ + s + "M" : "") + (t ? O + t + "D" : "") + (a || r || e ? "T" : "") + (a ? E + a + "H" : "") + (r ? E + r + "M" : "") + (e ? E + i + "S" : "")) : "P0D";
}
var y = Ve.prototype;
y.isValid = ya;
y.abs = Jn;
y.add = Qn;
y.subtract = Xn;
y.as = ei;
y.asMilliseconds = Ss;
y.asSeconds = ti;
y.asMinutes = si;
y.asHours = ri;
y.asDays = ai;
y.asWeeks = ni;
y.asMonths = ii;
y.asQuarters = oi;
y.asYears = li;
y.valueOf = ui;
y._bubble = Kn;
y.clone = di;
y.get = fi;
y.milliseconds = hi;
y.seconds = ci;
y.minutes = mi;
y.hours = _i;
y.days = yi;
y.weeks = Mi;
y.months = wi;
y.years = Di;
y.humanize = vi;
y.toISOString = je;
y.toString = je;
y.toJSON = je;
y.locale = us;
y.localeData = fs;
y.toIsoString = N(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  je
);
y.lang = ds;
f("X", 0, 0, "unix");
f("x", 0, 0, "valueOf");
d("x", Ue);
d("X", js);
M("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
M("x", function(e, t, s) {
  s._d = new Date(m(e));
});
//! moment.js
l.version = "2.30.1";
vs(g);
l.fn = o;
l.min = ha;
l.max = ca;
l.now = ma;
l.utc = U;
l.unix = Gn;
l.months = zn;
l.isDate = ge;
l.locale = K;
l.invalid = Re;
l.duration = I;
l.isMoment = R;
l.weekdays = $n;
l.parseZone = jn;
l.localeData = q;
l.isDuration = Te;
l.monthsShort = Zn;
l.weekdaysMin = Bn;
l.defineLocale = _t;
l.updateLocale = Gr;
l.locales = jr;
l.weekdaysShort = qn;
l.normalizeUnits = W;
l.relativeTimeRounding = Si;
l.relativeTimeThreshold = Yi;
l.calendarFormat = Ha;
l.prototype = o;
l.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const pi = "ddd, MMM Do YYYY, h:mm:ss a", Oi = "ddd, MMM Do YYYY", Ti = "h:mm:ss a", vt = "YYYY-MM-DD HH:mm:ss", pt = "YYYY-MM-DD", bi = "HH:mm:ss", Ys = "YYYY-MM-DD HH:mm:ss.SSS", Ni = (e) => {
  if (!e)
    return "";
  const t = l.utc(e).toDate();
  return l(t).local().format(pi);
}, Wi = (e) => {
  if (!e)
    return "";
  const t = l.utc(e).toDate();
  return l(t).local().format(Oi);
}, Pi = (e) => {
  if (!e)
    return "";
  const t = l.utc(e).toDate();
  return l(t).local().format(vt);
}, Fi = (e) => {
  if (!e)
    return "";
  const t = l.utc(e).toDate();
  return l(t).local().format(pt);
}, Ri = (e) => {
  if (!e)
    return "";
  const t = l.utc(e).toDate();
  return l(t).local().format(Ys);
}, Ii = (e) => {
  if (!e)
    return "";
  const t = l.utc(e).toDate();
  return l(t).local().format(bi);
}, Ci = (e) => {
  if (!e)
    return "";
  const t = l.utc(e).toDate();
  return l(t).local().format(Ti);
}, Li = (e) => e ? l(e).utc().format(vt) : "", Ui = (e) => e ? l(e).utc().format(Ys) : "", Hi = (e) => e ? l(e).utc().format(pt) : "", Ei = (e) => e ? l(e).local().format(vt) : "", Ai = (e) => e ? l(e).local().format(pt) : "", xi = (e) => e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-", Vi = (e, t = 6) => {
  if (!e)
    return "-";
  const s = Number(e).toFixed(t).toString().split("."), r = xi(Number(s[0])), a = s.length == 2 ? s[1] : 0;
  return r + "." + a;
}, Gi = (e, t) => {
  if (t[e + "_degrees"] === "" || t[e + "_minutes"] === "" || t[e + "_seconds"] === "") {
    t[e] = "";
    return;
  }
  const s = t[e + "_degrees"], r = t[e + "_minutes"], a = t[e + "_seconds"];
  t[e] = parseFloat(
    (parseInt(s) + parseInt(r) / 60 + parseFloat(a) / 3600).toFixed(8)
  );
}, ji = (e, t) => {
  if (!t[e])
    return;
  const s = t[e], r = Math.floor(s), a = Math.floor((s - r) * 60), n = ((s - r - a / 60) * 3600).toFixed(5);
  t[e + "_degrees"] = r, t[e + "_minutes"] = a, t[e + "_seconds"] = n;
};
export {
  Gi as convertDMStoDecimal,
  ji as convertDecimaltoDMS,
  Oi as defaultDateFormat,
  pi as defaultDateTimeFormat,
  Ti as defaultTimeFormat,
  Wi as formatDate,
  Ni as formatDateTime,
  Vi as formatDecimal,
  Fi as formatIsoDate,
  Pi as formatIsoDateTime,
  Ri as formatIsoDateTimeMilli,
  Ii as formatIsoTime,
  Ai as formatLocalIsoDate,
  Ei as formatLocalIsoDateTime,
  xi as formatNumber,
  Ci as formatTime,
  Hi as formatUtcIsoDate,
  Li as formatUtcIsoDateTime,
  Ui as formatUtcIsoDateTimeMilli,
  pt as isoDateFormat,
  vt as isoDateTimeFormat,
  Ys as isoDateTimeMilliFormat,
  bi as isoTimeFormat
};
