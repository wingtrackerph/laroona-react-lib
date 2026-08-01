import * as y from "react";
import Ee, { useState as vi, createContext as Di, useMemo as xi, useContext as Ti } from "react";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ys;
function w() {
  return Ys.apply(null, arguments);
}
function ki(e) {
  Ys = e;
}
function Oe(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function rt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function B(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function hn(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (B(e, t))
      return !1;
  return !0;
}
function ue(e) {
  return e === void 0;
}
function $e(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function It(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Fs(e, t) {
  var r = [], n, s = e.length;
  for (n = 0; n < s; ++n)
    r.push(t(e[n], n));
  return r;
}
function ze(e, t) {
  for (var r in t)
    B(t, r) && (e[r] = t[r]);
  return B(t, "toString") && (e.toString = t.toString), B(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Pe(e, t, r, n) {
  return ia(e, t, r, n, !0).utc();
}
function Pi() {
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
function F(e) {
  return e._pf == null && (e._pf = Pi()), e._pf;
}
var en;
Array.prototype.some ? en = Array.prototype.some : en = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function mn(e) {
  var t = null, r = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = F(e), r = en.call(t.parsedDateParts, function(s) {
    return s != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function Sr(e) {
  var t = Pe(NaN);
  return e != null ? ze(F(t), e) : F(t).userInvalidated = !0, t;
}
var ss = w.momentProperties = [], Wr = !1;
function pn(e, t) {
  var r, n, s, a = ss.length;
  if (ue(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ue(t._i) || (e._i = t._i), ue(t._f) || (e._f = t._f), ue(t._l) || (e._l = t._l), ue(t._strict) || (e._strict = t._strict), ue(t._tzm) || (e._tzm = t._tzm), ue(t._isUTC) || (e._isUTC = t._isUTC), ue(t._offset) || (e._offset = t._offset), ue(t._pf) || (e._pf = F(t)), ue(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      n = ss[r], s = t[n], ue(s) || (e[n] = s);
  return e;
}
function Wt(e) {
  pn(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Wr === !1 && (Wr = !0, w.updateOffset(this), Wr = !1);
}
function ve(e) {
  return e instanceof Wt || e != null && e._isAMomentObject != null;
}
function Us(e) {
  w.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function me(e, t) {
  var r = !0;
  return ze(function() {
    if (w.deprecationHandler != null && w.deprecationHandler(null, e), r) {
      var n = [], s, a, i, o = arguments.length;
      for (a = 0; a < o; a++) {
        if (s = "", typeof arguments[a] == "object") {
          s += `
[` + a + "] ";
          for (i in arguments[0])
            B(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[a];
        n.push(s);
      }
      Us(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var as = {};
function Is(e, t) {
  w.deprecationHandler != null && w.deprecationHandler(e, t), as[e] || (Us(t), as[e] = !0);
}
w.suppressDeprecationWarnings = !1;
w.deprecationHandler = null;
function Me(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Mi(e) {
  var t, r;
  for (r in e)
    B(e, r) && (t = e[r], Me(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function tn(e, t) {
  var r = ze({}, e), n;
  for (n in t)
    B(t, n) && (rt(e[n]) && rt(t[n]) ? (r[n] = {}, ze(r[n], e[n]), ze(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    B(e, n) && !B(t, n) && rt(e[n]) && (r[n] = ze({}, r[n]));
  return r;
}
function yn(e) {
  e != null && this.set(e);
}
var rn;
Object.keys ? rn = Object.keys : rn = function(e) {
  var t, r = [];
  for (t in e)
    B(e, t) && r.push(t);
  return r;
};
var Ci = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Ni(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Me(n) ? n.call(t, r) : n;
}
function Te(e, t, r) {
  var n = "" + Math.abs(e), s = t - n.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
}
var _n = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Zt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, jr = {}, pt = {};
function M(e, t, r, n) {
  var s = n;
  typeof n == "string" && (s = function() {
    return this[n]();
  }), e && (pt[e] = s), t && (pt[t[0]] = function() {
    return Te(s.apply(this, arguments), t[1], t[2]);
  }), r && (pt[r] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Ai(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Li(e) {
  var t = e.match(_n), r, n;
  for (r = 0, n = t.length; r < n; r++)
    pt[t[r]] ? t[r] = pt[t[r]] : t[r] = Ai(t[r]);
  return function(s) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += Me(t[i]) ? t[i].call(s, e) : t[i];
    return a;
  };
}
function tr(e, t) {
  return e.isValid() ? (t = Ws(t, e.localeData()), jr[t] = jr[t] || Li(t), jr[t](e)) : e.localeData().invalidDate();
}
function Ws(e, t) {
  var r = 5;
  function n(s) {
    return t.longDateFormat(s) || s;
  }
  for (Zt.lastIndex = 0; r >= 0 && Zt.test(e); )
    e = e.replace(
      Zt,
      n
    ), Zt.lastIndex = 0, r -= 1;
  return e;
}
var Yi = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Fi(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(_n).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var Ui = "Invalid date";
function Ii() {
  return this._invalidDate;
}
var Wi = "%d", ji = /\d{1,2}/;
function Hi(e) {
  return this._ordinal.replace("%d", e);
}
var $i = {
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
function Bi(e, t, r, n) {
  var s = this._relativeTime[r];
  return Me(s) ? s(e, t, r, n) : s.replace(/%d/i, e);
}
function qi(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Me(r) ? r(t) : r.replace(/%s/i, t);
}
var is = {
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
function pe(e) {
  return typeof e == "string" ? is[e] || is[e.toLowerCase()] : void 0;
}
function gn(e) {
  var t = {}, r, n;
  for (n in e)
    B(e, n) && (r = pe(n), r && (t[r] = e[n]));
  return t;
}
var Vi = {
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
function zi(e) {
  var t = [], r;
  for (r in e)
    B(e, r) && t.push({ unit: r, priority: Vi[r] });
  return t.sort(function(n, s) {
    return n.priority - s.priority;
  }), t;
}
var js = /\d/, de = /\d\d/, Hs = /\d{3}/, wn = /\d{4}/, Rr = /[+-]?\d{6}/, K = /\d\d?/, $s = /\d\d\d\d?/, Bs = /\d\d\d\d\d\d?/, br = /\d{1,3}/, Sn = /\d{1,4}/, Er = /[+-]?\d{1,6}/, wt = /\d+/, Or = /[+-]?\d+/, Gi = /Z|[+-]\d\d:?\d\d/gi, vr = /Z|[+-]\d\d(?::?\d\d)?/gi, Ji = /[+-]?\d+(\.\d{1,3})?/, jt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, St = /^[1-9]\d?/, Rn = /^([1-9]\d|\d)/, cr;
cr = {};
function k(e, t, r) {
  cr[e] = Me(t) ? t : function(n, s) {
    return n && r ? r : t;
  };
}
function Zi(e, t) {
  return B(cr, e) ? cr[e](t._strict, t._locale) : new RegExp(Ki(e));
}
function Ki(e) {
  return je(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, s, a) {
        return r || n || s || a;
      }
    )
  );
}
function je(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function he(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function I(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = he(t)), r;
}
var nn = {};
function G(e, t) {
  var r, n = t, s;
  for (typeof e == "string" && (e = [e]), $e(t) && (n = function(a, i) {
    i[t] = I(a);
  }), s = e.length, r = 0; r < s; r++)
    nn[e[r]] = n;
}
function Ht(e, t) {
  G(e, function(r, n, s, a) {
    s._w = s._w || {}, t(r, s._w, s, a);
  });
}
function Xi(e, t, r) {
  t != null && B(nn, e) && nn[e](t, r._a, r, e);
}
function Dr(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var oe = 0, Ie = 1, xe = 2, ne = 3, Re = 4, We = 5, et = 6, Qi = 7, eo = 8;
M("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Te(e, 4) : "+" + e;
});
M(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
M(0, ["YYYY", 4], 0, "year");
M(0, ["YYYYY", 5], 0, "year");
M(0, ["YYYYYY", 6, !0], 0, "year");
k("Y", Or);
k("YY", K, de);
k("YYYY", Sn, wn);
k("YYYYY", Er, Rr);
k("YYYYYY", Er, Rr);
G(["YYYYY", "YYYYYY"], oe);
G("YYYY", function(e, t) {
  t[oe] = e.length === 2 ? w.parseTwoDigitYear(e) : I(e);
});
G("YY", function(e, t) {
  t[oe] = w.parseTwoDigitYear(e);
});
G("Y", function(e, t) {
  t[oe] = parseInt(e, 10);
});
function Nt(e) {
  return Dr(e) ? 366 : 365;
}
w.parseTwoDigitYear = function(e) {
  return I(e) + (I(e) > 68 ? 1900 : 2e3);
};
var qs = Rt("FullYear", !0);
function to() {
  return Dr(this.year());
}
function Rt(e, t) {
  return function(r) {
    return r != null ? (Vs(this, e, r), w.updateOffset(this, t), this) : At(this, e);
  };
}
function At(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return n ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return n ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return n ? r.getUTCHours() : r.getHours();
    case "Date":
      return n ? r.getUTCDate() : r.getDate();
    case "Day":
      return n ? r.getUTCDay() : r.getDay();
    case "Month":
      return n ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return n ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function Vs(e, t, r) {
  var n, s, a, i, o;
  if (!(!e.isValid() || isNaN(r))) {
    switch (n = e._d, s = e._isUTC, t) {
      case "Milliseconds":
        return void (s ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
      case "Seconds":
        return void (s ? n.setUTCSeconds(r) : n.setSeconds(r));
      case "Minutes":
        return void (s ? n.setUTCMinutes(r) : n.setMinutes(r));
      case "Hours":
        return void (s ? n.setUTCHours(r) : n.setHours(r));
      case "Date":
        return void (s ? n.setUTCDate(r) : n.setDate(r));
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
    a = r, i = e.month(), o = e.date(), o = o === 29 && i === 1 && !Dr(a) ? 28 : o, s ? n.setUTCFullYear(a, i, o) : n.setFullYear(a, i, o);
  }
}
function ro(e) {
  return e = pe(e), Me(this[e]) ? this[e]() : this;
}
function no(e, t) {
  if (typeof e == "object") {
    e = gn(e);
    var r = zi(e), n, s = r.length;
    for (n = 0; n < s; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = pe(e), Me(this[e]))
    return this[e](t);
  return this;
}
function so(e, t) {
  return (e % t + t) % t;
}
var te;
Array.prototype.indexOf ? te = Array.prototype.indexOf : te = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function bn(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = so(t, 12);
  return e += (t - r) / 12, r === 1 ? Dr(e) ? 29 : 28 : 31 - r % 7 % 2;
}
M("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
M("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
M("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
k("M", K, St);
k("MM", K, de);
k("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
k("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
G(["M", "MM"], function(e, t) {
  t[Ie] = I(e) - 1;
});
G(["MMM", "MMMM"], function(e, t, r, n) {
  var s = r._locale.monthsParse(e, n, r._strict);
  s != null ? t[Ie] = s : F(r).invalidMonth = e;
});
var ao = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), zs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Gs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, io = jt, oo = jt;
function lo(e, t) {
  return e ? Oe(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Gs).test(t) ? "format" : "standalone"][e.month()] : Oe(this._months) ? this._months : this._months.standalone;
}
function uo(e, t) {
  return e ? Oe(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Gs.test(t) ? "format" : "standalone"][e.month()] : Oe(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function co(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = Pe([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (s = te.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = te.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = te.call(this._shortMonthsParse, i), s !== -1 ? s : (s = te.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = te.call(this._longMonthsParse, i), s !== -1 ? s : (s = te.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function fo(e, t, r) {
  var n, s, a;
  if (this._monthsParseExact)
    return co.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (s = Pe([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (a = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function Js(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = I(t);
    else if (t = e.localeData().monthsParse(t), !$e(t))
      return e;
  }
  var r = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, bn(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e;
}
function Zs(e) {
  return e != null ? (Js(this, e), w.updateOffset(this, !0), this) : At(this, "Month");
}
function ho() {
  return bn(this.year(), this.month());
}
function mo(e) {
  return this._monthsParseExact ? (B(this, "_monthsRegex") || Ks.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (B(this, "_monthsShortRegex") || (this._monthsShortRegex = io), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function po(e) {
  return this._monthsParseExact ? (B(this, "_monthsRegex") || Ks.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (B(this, "_monthsRegex") || (this._monthsRegex = oo), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ks() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [], r = [], n = [], s, a, i, o;
  for (s = 0; s < 12; s++)
    a = Pe([2e3, s]), i = je(this.monthsShort(a, "")), o = je(this.months(a, "")), t.push(i), r.push(o), n.push(o), n.push(i);
  t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function yo(e, t, r, n, s, a, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, n, s, a, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, n, s, a, i), o;
}
function Lt(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function fr(e, t, r) {
  var n = 7 + t - r, s = (7 + Lt(e, 0, n).getUTCDay() - t) % 7;
  return -s + n - 1;
}
function Xs(e, t, r, n, s) {
  var a = (7 + r - n) % 7, i = fr(e, n, s), o = 1 + 7 * (t - 1) + a + i, l, u;
  return o <= 0 ? (l = e - 1, u = Nt(l) + o) : o > Nt(e) ? (l = e + 1, u = o - Nt(e)) : (l = e, u = o), {
    year: l,
    dayOfYear: u
  };
}
function Yt(e, t, r) {
  var n = fr(e.year(), t, r), s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return s < 1 ? (i = e.year() - 1, a = s + He(i, t, r)) : s > He(e.year(), t, r) ? (a = s - He(e.year(), t, r), i = e.year() + 1) : (i = e.year(), a = s), {
    week: a,
    year: i
  };
}
function He(e, t, r) {
  var n = fr(e, t, r), s = fr(e + 1, t, r);
  return (Nt(e) - n + s) / 7;
}
M("w", ["ww", 2], "wo", "week");
M("W", ["WW", 2], "Wo", "isoWeek");
k("w", K, St);
k("ww", K, de);
k("W", K, St);
k("WW", K, de);
Ht(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = I(e);
  }
);
function _o(e) {
  return Yt(e, this._week.dow, this._week.doy).week;
}
var go = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function wo() {
  return this._week.dow;
}
function So() {
  return this._week.doy;
}
function Ro(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function bo(e) {
  var t = Yt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
M("d", 0, "do", "day");
M("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
M("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
M("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
M("e", 0, 0, "weekday");
M("E", 0, 0, "isoWeekday");
k("d", K);
k("e", K);
k("E", K);
k("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
k("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
k("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ht(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var s = r._locale.weekdaysParse(e, n, r._strict);
  s != null ? t.d = s : F(r).invalidWeekday = e;
});
Ht(["d", "e", "E"], function(e, t, r, n) {
  t[n] = I(e);
});
function Eo(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Oo(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function En(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var vo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Qs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Do = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), xo = jt, To = jt, ko = jt;
function Po(e, t) {
  var r = Oe(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? En(r, this._week.dow) : e ? r[e.day()] : r;
}
function Mo(e) {
  return e === !0 ? En(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Co(e) {
  return e === !0 ? En(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function No(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = Pe([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (s = te.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = te.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = te.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = te.call(this._weekdaysParse, i), s !== -1 || (s = te.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = te.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = te.call(this._shortWeekdaysParse, i), s !== -1 || (s = te.call(this._weekdaysParse, i), s !== -1) ? s : (s = te.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = te.call(this._minWeekdaysParse, i), s !== -1 || (s = te.call(this._weekdaysParse, i), s !== -1) ? s : (s = te.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function Ao(e, t, r) {
  var n, s, a;
  if (this._weekdaysParseExact)
    return No.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (s = Pe([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (a = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Lo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = At(this, "Day");
  return e != null ? (e = Eo(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Yo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Fo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Oo(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Uo(e) {
  return this._weekdaysParseExact ? (B(this, "_weekdaysRegex") || On.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (B(this, "_weekdaysRegex") || (this._weekdaysRegex = xo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Io(e) {
  return this._weekdaysParseExact ? (B(this, "_weekdaysRegex") || On.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (B(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = To), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Wo(e) {
  return this._weekdaysParseExact ? (B(this, "_weekdaysRegex") || On.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (B(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ko), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function On() {
  function e(c, d) {
    return d.length - c.length;
  }
  var t = [], r = [], n = [], s = [], a, i, o, l, u;
  for (a = 0; a < 7; a++)
    i = Pe([2e3, 1]).day(a), o = je(this.weekdaysMin(i, "")), l = je(this.weekdaysShort(i, "")), u = je(this.weekdays(i, "")), t.push(o), r.push(l), n.push(u), s.push(o), s.push(l), s.push(u);
  t.sort(e), r.sort(e), n.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function vn() {
  return this.hours() % 12 || 12;
}
function jo() {
  return this.hours() || 24;
}
M("H", ["HH", 2], 0, "hour");
M("h", ["hh", 2], 0, vn);
M("k", ["kk", 2], 0, jo);
M("hmm", 0, 0, function() {
  return "" + vn.apply(this) + Te(this.minutes(), 2);
});
M("hmmss", 0, 0, function() {
  return "" + vn.apply(this) + Te(this.minutes(), 2) + Te(this.seconds(), 2);
});
M("Hmm", 0, 0, function() {
  return "" + this.hours() + Te(this.minutes(), 2);
});
M("Hmmss", 0, 0, function() {
  return "" + this.hours() + Te(this.minutes(), 2) + Te(this.seconds(), 2);
});
function ea(e, t) {
  M(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ea("a", !0);
ea("A", !1);
function ta(e, t) {
  return t._meridiemParse;
}
k("a", ta);
k("A", ta);
k("H", K, Rn);
k("h", K, St);
k("k", K, St);
k("HH", K, de);
k("hh", K, de);
k("kk", K, de);
k("hmm", $s);
k("hmmss", Bs);
k("Hmm", $s);
k("Hmmss", Bs);
G(["H", "HH"], ne);
G(["k", "kk"], function(e, t, r) {
  var n = I(e);
  t[ne] = n === 24 ? 0 : n;
});
G(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
G(["h", "hh"], function(e, t, r) {
  t[ne] = I(e), F(r).bigHour = !0;
});
G("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[ne] = I(e.substr(0, n)), t[Re] = I(e.substr(n)), F(r).bigHour = !0;
});
G("hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[ne] = I(e.substr(0, n)), t[Re] = I(e.substr(n, 2)), t[We] = I(e.substr(s)), F(r).bigHour = !0;
});
G("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[ne] = I(e.substr(0, n)), t[Re] = I(e.substr(n));
});
G("Hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[ne] = I(e.substr(0, n)), t[Re] = I(e.substr(n, 2)), t[We] = I(e.substr(s));
});
function Ho(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var $o = /[ap]\.?m?\.?/i, Bo = Rt("Hours", !0);
function qo(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var ra = {
  calendar: Ci,
  longDateFormat: Yi,
  invalidDate: Ui,
  ordinal: Wi,
  dayOfMonthOrdinalParse: ji,
  relativeTime: $i,
  months: ao,
  monthsShort: zs,
  week: go,
  weekdays: vo,
  weekdaysMin: Do,
  weekdaysShort: Qs,
  meridiemParse: $o
}, X = {}, xt = {}, Ft;
function Vo(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function os(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function zo(e) {
  for (var t = 0, r, n, s, a; t < e.length; ) {
    for (a = os(e[t]).split("-"), r = a.length, n = os(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (s = xr(a.slice(0, r).join("-")), s)
        return s;
      if (n && n.length >= r && Vo(a, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Ft;
}
function Go(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function xr(e) {
  var t = null, r;
  if (X[e] === void 0 && typeof module < "u" && module && module.exports && Go(e))
    try {
      t = Ft._abbr, r = require, r("./locale/" + e), Je(t);
    } catch {
      X[e] = null;
    }
  return X[e];
}
function Je(e, t) {
  var r;
  return e && (ue(t) ? r = Be(e) : r = Dn(e, t), r ? Ft = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Ft._abbr;
}
function Dn(e, t) {
  if (t !== null) {
    var r, n = ra;
    if (t.abbr = e, X[e] != null)
      Is(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = X[e]._config;
    else if (t.parentLocale != null)
      if (X[t.parentLocale] != null)
        n = X[t.parentLocale]._config;
      else if (r = xr(t.parentLocale), r != null)
        n = r._config;
      else
        return xt[t.parentLocale] || (xt[t.parentLocale] = []), xt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return X[e] = new yn(tn(n, t)), xt[e] && xt[e].forEach(function(s) {
      Dn(s.name, s.config);
    }), Je(e), X[e];
  } else
    return delete X[e], null;
}
function Jo(e, t) {
  if (t != null) {
    var r, n, s = ra;
    X[e] != null && X[e].parentLocale != null ? X[e].set(tn(X[e]._config, t)) : (n = xr(e), n != null && (s = n._config), t = tn(s, t), n == null && (t.abbr = e), r = new yn(t), r.parentLocale = X[e], X[e] = r), Je(e);
  } else
    X[e] != null && (X[e].parentLocale != null ? (X[e] = X[e].parentLocale, e === Je() && Je(e)) : X[e] != null && delete X[e]);
  return X[e];
}
function Be(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Ft;
  if (!Oe(e)) {
    if (t = xr(e), t)
      return t;
    e = [e];
  }
  return zo(e);
}
function Zo() {
  return rn(X);
}
function xn(e) {
  var t, r = e._a;
  return r && F(e).overflow === -2 && (t = r[Ie] < 0 || r[Ie] > 11 ? Ie : r[xe] < 1 || r[xe] > bn(r[oe], r[Ie]) ? xe : r[ne] < 0 || r[ne] > 24 || r[ne] === 24 && (r[Re] !== 0 || r[We] !== 0 || r[et] !== 0) ? ne : r[Re] < 0 || r[Re] > 59 ? Re : r[We] < 0 || r[We] > 59 ? We : r[et] < 0 || r[et] > 999 ? et : -1, F(e)._overflowDayOfYear && (t < oe || t > xe) && (t = xe), F(e)._overflowWeeks && t === -1 && (t = Qi), F(e)._overflowWeekday && t === -1 && (t = eo), F(e).overflow = t), e;
}
var Ko = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Xo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Qo = /Z|[+-]\d\d(?::?\d\d)?/, Kt = [
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
], Hr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], el = /^\/?Date\((-?\d+)/i, tl = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, rl = {
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
function na(e) {
  var t, r, n = e._i, s = Ko.exec(n) || Xo.exec(n), a, i, o, l, u = Kt.length, c = Hr.length;
  if (s) {
    for (F(e).iso = !0, t = 0, r = u; t < r; t++)
      if (Kt[t][1].exec(s[1])) {
        i = Kt[t][0], a = Kt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, r = c; t < r; t++)
        if (Hr[t][1].exec(s[3])) {
          o = (s[2] || " ") + Hr[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && o != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (Qo.exec(s[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (l || ""), kn(e);
  } else
    e._isValid = !1;
}
function nl(e, t, r, n, s, a) {
  var i = [
    sl(e),
    zs.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(s, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function sl(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function al(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function il(e, t, r) {
  if (e) {
    var n = Qs.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== s)
      return F(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function ol(e, t, r) {
  if (e)
    return rl[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), s = n % 100, a = (n - s) / 100;
  return a * 60 + s;
}
function sa(e) {
  var t = tl.exec(al(e._i)), r;
  if (t) {
    if (r = nl(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !il(t[1], r, e))
      return;
    e._a = r, e._tzm = ol(t[8], t[9], t[10]), e._d = Lt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), F(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ll(e) {
  var t = el.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (na(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (sa(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : w.createFromInputFallback(e);
}
w.createFromInputFallback = me(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ht(e, t, r) {
  return e ?? t ?? r;
}
function ul(e) {
  var t = new Date(w.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Tn(e) {
  var t, r, n = [], s, a, i;
  if (!e._d) {
    for (s = ul(e), e._w && e._a[xe] == null && e._a[Ie] == null && cl(e), e._dayOfYear != null && (i = ht(e._a[oe], s[oe]), (e._dayOfYear > Nt(i) || e._dayOfYear === 0) && (F(e)._overflowDayOfYear = !0), r = Lt(i, 0, e._dayOfYear), e._a[Ie] = r.getUTCMonth(), e._a[xe] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[ne] === 24 && e._a[Re] === 0 && e._a[We] === 0 && e._a[et] === 0 && (e._nextDay = !0, e._a[ne] = 0), e._d = (e._useUTC ? Lt : yo).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ne] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (F(e).weekdayMismatch = !0);
  }
}
function cl(e) {
  var t, r, n, s, a, i, o, l, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, r = ht(
    t.GG,
    e._a[oe],
    Yt(Z(), 1, 4).year
  ), n = ht(t.W, 1), s = ht(t.E, 1), (s < 1 || s > 7) && (l = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, u = Yt(Z(), a, i), r = ht(t.gg, e._a[oe], u.year), n = ht(t.w, u.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (l = !0)) : t.e != null ? (s = t.e + a, (t.e < 0 || t.e > 6) && (l = !0)) : s = a), n < 1 || n > He(r, a, i) ? F(e)._overflowWeeks = !0 : l != null ? F(e)._overflowWeekday = !0 : (o = Xs(r, n, s, a, i), e._a[oe] = o.year, e._dayOfYear = o.dayOfYear);
}
w.ISO_8601 = function() {
};
w.RFC_2822 = function() {
};
function kn(e) {
  if (e._f === w.ISO_8601) {
    na(e);
    return;
  }
  if (e._f === w.RFC_2822) {
    sa(e);
    return;
  }
  e._a = [], F(e).empty = !0;
  var t = "" + e._i, r, n, s, a, i, o = t.length, l = 0, u, c;
  for (s = Ws(e._f, e._locale).match(_n) || [], c = s.length, r = 0; r < c; r++)
    a = s[r], n = (t.match(Zi(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && F(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), l += n.length), pt[a] ? (n ? F(e).empty = !1 : F(e).unusedTokens.push(a), Xi(a, n, e)) : e._strict && !n && F(e).unusedTokens.push(a);
  F(e).charsLeftOver = o - l, t.length > 0 && F(e).unusedInput.push(t), e._a[ne] <= 12 && F(e).bigHour === !0 && e._a[ne] > 0 && (F(e).bigHour = void 0), F(e).parsedDateParts = e._a.slice(0), F(e).meridiem = e._meridiem, e._a[ne] = fl(
    e._locale,
    e._a[ne],
    e._meridiem
  ), u = F(e).era, u !== null && (e._a[oe] = e._locale.erasConvertYear(u, e._a[oe])), Tn(e), xn(e);
}
function fl(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function dl(e) {
  var t, r, n, s, a, i, o = !1, l = e._f.length;
  if (l === 0) {
    F(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < l; s++)
    a = 0, i = !1, t = pn({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], kn(t), mn(t) && (i = !0), a += F(t).charsLeftOver, a += F(t).unusedTokens.length * 10, F(t).score = a, o ? a < n && (n = a, r = t) : (n == null || a < n || i) && (n = a, r = t, i && (o = !0));
  ze(e, r || t);
}
function hl(e) {
  if (!e._d) {
    var t = gn(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Fs(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Tn(e);
  }
}
function ml(e) {
  var t = new Wt(xn(aa(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function aa(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Be(e._l), t === null || r === void 0 && t === "" ? Sr({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ve(t) ? new Wt(xn(t)) : (It(t) ? e._d = t : Oe(r) ? dl(e) : r ? kn(e) : pl(e), mn(e) || (e._d = null), e));
}
function pl(e) {
  var t = e._i;
  ue(t) ? e._d = new Date(w.now()) : It(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ll(e) : Oe(t) ? (e._a = Fs(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Tn(e)) : rt(t) ? hl(e) : $e(t) ? e._d = new Date(t) : w.createFromInputFallback(e);
}
function ia(e, t, r, n, s) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (rt(e) && hn(e) || Oe(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = r, a._i = e, a._f = t, a._strict = n, ml(a);
}
function Z(e, t, r, n) {
  return ia(e, t, r, n, !1);
}
var yl = me(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Z.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Sr();
  }
), _l = me(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Z.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Sr();
  }
);
function oa(e, t) {
  var r, n;
  if (t.length === 1 && Oe(t[0]) && (t = t[0]), !t.length)
    return Z();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function gl() {
  var e = [].slice.call(arguments, 0);
  return oa("isBefore", e);
}
function wl() {
  var e = [].slice.call(arguments, 0);
  return oa("isAfter", e);
}
var Sl = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Tt = [
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
function Rl(e) {
  var t, r = !1, n, s = Tt.length;
  for (t in e)
    if (B(e, t) && !(te.call(Tt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < s; ++n)
    if (e[Tt[n]]) {
      if (r)
        return !1;
      parseFloat(e[Tt[n]]) !== I(e[Tt[n]]) && (r = !0);
    }
  return !0;
}
function bl() {
  return this._isValid;
}
function El() {
  return De(NaN);
}
function Tr(e) {
  var t = gn(e), r = t.year || 0, n = t.quarter || 0, s = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, l = t.minute || 0, u = t.second || 0, c = t.millisecond || 0;
  this._isValid = Rl(t), this._milliseconds = +c + u * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +s + n * 3 + r * 12, this._data = {}, this._locale = Be(), this._bubble();
}
function rr(e) {
  return e instanceof Tr;
}
function sn(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Ol(e, t, r) {
  var n = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    I(e[i]) !== I(t[i]) && a++;
  return a + s;
}
function la(e, t) {
  M(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + Te(~~(r / 60), 2) + t + Te(~~r % 60, 2);
  });
}
la("Z", ":");
la("ZZ", "");
k("Z", vr);
k("ZZ", vr);
G(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Pn(vr, e);
});
var vl = /([\+\-]|\d\d)/gi;
function Pn(e, t) {
  var r = (t || "").match(e), n, s, a;
  return r === null ? null : (n = r[r.length - 1] || [], s = (n + "").match(vl) || ["-", 0, 0], a = +(s[1] * 60) + I(s[2]), a === 0 ? 0 : s[0] === "+" ? a : -a);
}
function Mn(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (ve(e) || It(e) ? e.valueOf() : Z(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), w.updateOffset(r, !1), r) : Z(e).local();
}
function an(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
w.updateOffset = function() {
};
function Dl(e, t, r) {
  var n = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Pn(vr, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (s = an(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? fa(
      this,
      De(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, w.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : an(this);
}
function xl(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Tl(e) {
  return this.utcOffset(0, e);
}
function kl(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(an(this), "m")), this;
}
function Pl() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Pn(Gi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ml(e) {
  return this.isValid() ? (e = e ? Z(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Cl() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Nl() {
  if (!ue(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return pn(e, this), e = aa(e), e._a ? (t = e._isUTC ? Pe(e._a) : Z(e._a), this._isDSTShifted = this.isValid() && Ol(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Al() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ll() {
  return this.isValid() ? this._isUTC : !1;
}
function ua() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Yl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Fl = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function De(e, t) {
  var r = e, n = null, s, a, i;
  return rr(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : $e(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = Yl.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: I(n[xe]) * s,
    h: I(n[ne]) * s,
    m: I(n[Re]) * s,
    s: I(n[We]) * s,
    ms: I(sn(n[et] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (n = Fl.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: Qe(n[2], s),
    M: Qe(n[3], s),
    w: Qe(n[4], s),
    d: Qe(n[5], s),
    h: Qe(n[6], s),
    m: Qe(n[7], s),
    s: Qe(n[8], s)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = Ul(
    Z(r.from),
    Z(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), a = new Tr(r), rr(e) && B(e, "_locale") && (a._locale = e._locale), rr(e) && B(e, "_isValid") && (a._isValid = e._isValid), a;
}
De.fn = Tr.prototype;
De.invalid = El;
function Qe(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function ls(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Ul(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Mn(t, e), e.isBefore(t) ? r = ls(e, t) : (r = ls(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function ca(e, t) {
  return function(r, n) {
    var s, a;
    return n !== null && !isNaN(+n) && (Is(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = n, n = a), s = De(r, n), fa(this, s, e), this;
  };
}
function fa(e, t, r, n) {
  var s = t._milliseconds, a = sn(t._days), i = sn(t._months);
  e.isValid() && (n = n ?? !0, i && Js(e, At(e, "Month") + i * r), a && Vs(e, "Date", At(e, "Date") + a * r), s && e._d.setTime(e._d.valueOf() + s * r), n && w.updateOffset(e, a || i));
}
var Il = ca(1, "add"), Wl = ca(-1, "subtract");
function da(e) {
  return typeof e == "string" || e instanceof String;
}
function jl(e) {
  return ve(e) || It(e) || da(e) || $e(e) || $l(e) || Hl(e) || e === null || e === void 0;
}
function Hl(e) {
  var t = rt(e) && !hn(e), r = !1, n = [
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
  ], s, a, i = n.length;
  for (s = 0; s < i; s += 1)
    a = n[s], r = r || B(e, a);
  return t && r;
}
function $l(e) {
  var t = Oe(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !$e(n) && da(e);
  }).length === 0), t && r;
}
function Bl(e) {
  var t = rt(e) && !hn(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, a;
  for (s = 0; s < n.length; s += 1)
    a = n[s], r = r || B(e, a);
  return t && r;
}
function ql(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Vl(e, t) {
  arguments.length === 1 && (arguments[0] ? jl(arguments[0]) ? (e = arguments[0], t = void 0) : Bl(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || Z(), n = Mn(r, this).startOf("day"), s = w.calendarFormat(this, n) || "sameElse", a = t && (Me(t[s]) ? t[s].call(this, r) : t[s]);
  return this.format(
    a || this.localeData().calendar(s, this, Z(r))
  );
}
function zl() {
  return new Wt(this);
}
function Gl(e, t) {
  var r = ve(e) ? e : Z(e);
  return this.isValid() && r.isValid() ? (t = pe(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Jl(e, t) {
  var r = ve(e) ? e : Z(e);
  return this.isValid() && r.isValid() ? (t = pe(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Zl(e, t, r, n) {
  var s = ve(e) ? e : Z(e), a = ve(t) ? t : Z(t);
  return this.isValid() && s.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (n[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function Kl(e, t) {
  var r = ve(e) ? e : Z(e), n;
  return this.isValid() && r.isValid() ? (t = pe(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Xl(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Ql(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function eu(e, t, r) {
  var n, s, a;
  if (!this.isValid())
    return NaN;
  if (n = Mn(e, this), !n.isValid())
    return NaN;
  switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = pe(t), t) {
    case "year":
      a = nr(this, n) / 12;
      break;
    case "month":
      a = nr(this, n);
      break;
    case "quarter":
      a = nr(this, n) / 3;
      break;
    case "second":
      a = (this - n) / 1e3;
      break;
    // 1000
    case "minute":
      a = (this - n) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      a = (this - n) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      a = (this - n - s) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      a = (this - n - s) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      a = this - n;
  }
  return r ? a : he(a);
}
function nr(e, t) {
  if (e.date() < t.date())
    return -nr(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), s, a;
  return t - n < 0 ? (s = e.clone().add(r - 1, "months"), a = (t - n) / (n - s)) : (s = e.clone().add(r + 1, "months"), a = (t - n) / (s - n)), -(r + a) || 0;
}
w.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
w.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function tu() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function ru(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? tr(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Me(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", tr(r, "Z")) : tr(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function nu() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, s, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + n + s + a);
}
function su(e) {
  e || (e = this.isUtc() ? w.defaultFormatUtc : w.defaultFormat);
  var t = tr(this, e);
  return this.localeData().postformat(t);
}
function au(e, t) {
  return this.isValid() && (ve(e) && e.isValid() || Z(e).isValid()) ? De({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function iu(e) {
  return this.from(Z(), e);
}
function ou(e, t) {
  return this.isValid() && (ve(e) && e.isValid() || Z(e).isValid()) ? De({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function lu(e) {
  return this.to(Z(), e);
}
function ha(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Be(e), t != null && (this._locale = t), this);
}
var ma = me(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function pa() {
  return this._locale;
}
var dr = 1e3, yt = 60 * dr, hr = 60 * yt, ya = (365 * 400 + 97) * 24 * hr;
function _t(e, t) {
  return (e % t + t) % t;
}
function _a(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - ya : new Date(e, t, r).valueOf();
}
function ga(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - ya : Date.UTC(e, t, r);
}
function uu(e) {
  var t, r;
  if (e = pe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ga : _a, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= _t(
        t + (this._isUTC ? 0 : this.utcOffset() * yt),
        hr
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= _t(t, yt);
      break;
    case "second":
      t = this._d.valueOf(), t -= _t(t, dr);
      break;
  }
  return this._d.setTime(t), w.updateOffset(this, !0), this;
}
function cu(e) {
  var t, r;
  if (e = pe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ga : _a, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += hr - _t(
        t + (this._isUTC ? 0 : this.utcOffset() * yt),
        hr
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += yt - _t(t, yt) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += dr - _t(t, dr) - 1;
      break;
  }
  return this._d.setTime(t), w.updateOffset(this, !0), this;
}
function fu() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function du() {
  return Math.floor(this.valueOf() / 1e3);
}
function hu() {
  return new Date(this.valueOf());
}
function mu() {
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
function pu() {
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
function yu() {
  return this.isValid() ? this.toISOString() : null;
}
function _u() {
  return mn(this);
}
function gu() {
  return ze({}, F(this));
}
function wu() {
  return F(this).overflow;
}
function Su() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
M("N", 0, 0, "eraAbbr");
M("NN", 0, 0, "eraAbbr");
M("NNN", 0, 0, "eraAbbr");
M("NNNN", 0, 0, "eraName");
M("NNNNN", 0, 0, "eraNarrow");
M("y", ["y", 1], "yo", "eraYear");
M("y", ["yy", 2], 0, "eraYear");
M("y", ["yyy", 3], 0, "eraYear");
M("y", ["yyyy", 4], 0, "eraYear");
k("N", Cn);
k("NN", Cn);
k("NNN", Cn);
k("NNNN", Mu);
k("NNNNN", Cu);
G(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var s = r._locale.erasParse(e, n, r._strict);
    s ? F(r).era = s : F(r).invalidEra = e;
  }
);
k("y", wt);
k("yy", wt);
k("yyy", wt);
k("yyyy", wt);
k("yo", Nu);
G(["y", "yy", "yyy", "yyyy"], oe);
G(["yo"], function(e, t, r, n) {
  var s;
  r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[oe] = r._locale.eraYearOrdinalParse(e, s) : t[oe] = parseInt(e, 10);
});
function Ru(e, t) {
  var r, n, s, a = this._eras || Be("en")._eras;
  for (r = 0, n = a.length; r < n; ++r) {
    switch (typeof a[r].since) {
      case "string":
        s = w(a[r].since).startOf("day"), a[r].since = s.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        s = w(a[r].until).startOf("day").valueOf(), a[r].until = s.valueOf();
        break;
    }
  }
  return a;
}
function bu(e, t, r) {
  var n, s, a = this.eras(), i, o, l;
  for (e = e.toUpperCase(), n = 0, s = a.length; n < s; ++n)
    if (i = a[n].name.toUpperCase(), o = a[n].abbr.toUpperCase(), l = a[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return a[n];
          break;
        case "NNNN":
          if (i === e)
            return a[n];
          break;
        case "NNNNN":
          if (l === e)
            return a[n];
          break;
      }
    else if ([i, o, l].indexOf(e) >= 0)
      return a[n];
}
function Eu(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? w(e.since).year() : w(e.since).year() + (t - e.offset) * r;
}
function Ou() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function vu() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function Du() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function xu() {
  var e, t, r, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return (this.year() - w(s[e].since).year()) * r + s[e].offset;
  return this.year();
}
function Tu(e) {
  return B(this, "_erasNameRegex") || Nn.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function ku(e) {
  return B(this, "_erasAbbrRegex") || Nn.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Pu(e) {
  return B(this, "_erasNarrowRegex") || Nn.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Cn(e, t) {
  return t.erasAbbrRegex(e);
}
function Mu(e, t) {
  return t.erasNameRegex(e);
}
function Cu(e, t) {
  return t.erasNarrowRegex(e);
}
function Nu(e, t) {
  return t._eraYearOrdinalRegex || wt;
}
function Nn() {
  var e = [], t = [], r = [], n = [], s, a, i, o, l, u = this.eras();
  for (s = 0, a = u.length; s < a; ++s)
    i = je(u[s].name), o = je(u[s].abbr), l = je(u[s].narrow), t.push(i), e.push(o), r.push(l), n.push(i), n.push(o), n.push(l);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
M(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
M(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function kr(e, t) {
  M(0, [e, e.length], 0, t);
}
kr("gggg", "weekYear");
kr("ggggg", "weekYear");
kr("GGGG", "isoWeekYear");
kr("GGGGG", "isoWeekYear");
k("G", Or);
k("g", Or);
k("GG", K, de);
k("gg", K, de);
k("GGGG", Sn, wn);
k("gggg", Sn, wn);
k("GGGGG", Er, Rr);
k("ggggg", Er, Rr);
Ht(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = I(e);
  }
);
Ht(["gg", "GG"], function(e, t, r, n) {
  t[n] = w.parseTwoDigitYear(e);
});
function Au(e) {
  return wa.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Lu(e) {
  return wa.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Yu() {
  return He(this.year(), 1, 4);
}
function Fu() {
  return He(this.isoWeekYear(), 1, 4);
}
function Uu() {
  var e = this.localeData()._week;
  return He(this.year(), e.dow, e.doy);
}
function Iu() {
  var e = this.localeData()._week;
  return He(this.weekYear(), e.dow, e.doy);
}
function wa(e, t, r, n, s) {
  var a;
  return e == null ? Yt(this, n, s).year : (a = He(e, n, s), t > a && (t = a), Wu.call(this, e, t, r, n, s));
}
function Wu(e, t, r, n, s) {
  var a = Xs(e, t, r, n, s), i = Lt(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
M("Q", 0, "Qo", "quarter");
k("Q", js);
G("Q", function(e, t) {
  t[Ie] = (I(e) - 1) * 3;
});
function ju(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
M("D", ["DD", 2], "Do", "date");
k("D", K, St);
k("DD", K, de);
k("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
G(["D", "DD"], xe);
G("Do", function(e, t) {
  t[xe] = I(e.match(K)[0]);
});
var Sa = Rt("Date", !0);
M("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
k("DDD", br);
k("DDDD", Hs);
G(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = I(e);
});
function Hu(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
M("m", ["mm", 2], 0, "minute");
k("m", K, Rn);
k("mm", K, de);
G(["m", "mm"], Re);
var $u = Rt("Minutes", !1);
M("s", ["ss", 2], 0, "second");
k("s", K, Rn);
k("ss", K, de);
G(["s", "ss"], We);
var Bu = Rt("Seconds", !1);
M("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
M(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
M(0, ["SSS", 3], 0, "millisecond");
M(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
M(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
M(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
M(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
M(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
M(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
k("S", br, js);
k("SS", br, de);
k("SSS", br, Hs);
var Ge, Ra;
for (Ge = "SSSS"; Ge.length <= 9; Ge += "S")
  k(Ge, wt);
function qu(e, t) {
  t[et] = I(("0." + e) * 1e3);
}
for (Ge = "S"; Ge.length <= 9; Ge += "S")
  G(Ge, qu);
Ra = Rt("Milliseconds", !1);
M("z", 0, 0, "zoneAbbr");
M("zz", 0, 0, "zoneName");
function Vu() {
  return this._isUTC ? "UTC" : "";
}
function zu() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var g = Wt.prototype;
g.add = Il;
g.calendar = Vl;
g.clone = zl;
g.diff = eu;
g.endOf = cu;
g.format = su;
g.from = au;
g.fromNow = iu;
g.to = ou;
g.toNow = lu;
g.get = ro;
g.invalidAt = wu;
g.isAfter = Gl;
g.isBefore = Jl;
g.isBetween = Zl;
g.isSame = Kl;
g.isSameOrAfter = Xl;
g.isSameOrBefore = Ql;
g.isValid = _u;
g.lang = ma;
g.locale = ha;
g.localeData = pa;
g.max = _l;
g.min = yl;
g.parsingFlags = gu;
g.set = no;
g.startOf = uu;
g.subtract = Wl;
g.toArray = mu;
g.toObject = pu;
g.toDate = hu;
g.toISOString = ru;
g.inspect = nu;
typeof Symbol < "u" && Symbol.for != null && (g[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
g.toJSON = yu;
g.toString = tu;
g.unix = du;
g.valueOf = fu;
g.creationData = Su;
g.eraName = Ou;
g.eraNarrow = vu;
g.eraAbbr = Du;
g.eraYear = xu;
g.year = qs;
g.isLeapYear = to;
g.weekYear = Au;
g.isoWeekYear = Lu;
g.quarter = g.quarters = ju;
g.month = Zs;
g.daysInMonth = ho;
g.week = g.weeks = Ro;
g.isoWeek = g.isoWeeks = bo;
g.weeksInYear = Uu;
g.weeksInWeekYear = Iu;
g.isoWeeksInYear = Yu;
g.isoWeeksInISOWeekYear = Fu;
g.date = Sa;
g.day = g.days = Lo;
g.weekday = Yo;
g.isoWeekday = Fo;
g.dayOfYear = Hu;
g.hour = g.hours = Bo;
g.minute = g.minutes = $u;
g.second = g.seconds = Bu;
g.millisecond = g.milliseconds = Ra;
g.utcOffset = Dl;
g.utc = Tl;
g.local = kl;
g.parseZone = Pl;
g.hasAlignedHourOffset = Ml;
g.isDST = Cl;
g.isLocal = Al;
g.isUtcOffset = Ll;
g.isUtc = ua;
g.isUTC = ua;
g.zoneAbbr = Vu;
g.zoneName = zu;
g.dates = me(
  "dates accessor is deprecated. Use date instead.",
  Sa
);
g.months = me(
  "months accessor is deprecated. Use month instead",
  Zs
);
g.years = me(
  "years accessor is deprecated. Use year instead",
  qs
);
g.zone = me(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  xl
);
g.isDSTShifted = me(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Nl
);
function Gu(e) {
  return Z(e * 1e3);
}
function Ju() {
  return Z.apply(null, arguments).parseZone();
}
function ba(e) {
  return e;
}
var q = yn.prototype;
q.calendar = Ni;
q.longDateFormat = Fi;
q.invalidDate = Ii;
q.ordinal = Hi;
q.preparse = ba;
q.postformat = ba;
q.relativeTime = Bi;
q.pastFuture = qi;
q.set = Mi;
q.eras = Ru;
q.erasParse = bu;
q.erasConvertYear = Eu;
q.erasAbbrRegex = ku;
q.erasNameRegex = Tu;
q.erasNarrowRegex = Pu;
q.months = lo;
q.monthsShort = uo;
q.monthsParse = fo;
q.monthsRegex = po;
q.monthsShortRegex = mo;
q.week = _o;
q.firstDayOfYear = So;
q.firstDayOfWeek = wo;
q.weekdays = Po;
q.weekdaysMin = Co;
q.weekdaysShort = Mo;
q.weekdaysParse = Ao;
q.weekdaysRegex = Uo;
q.weekdaysShortRegex = Io;
q.weekdaysMinRegex = Wo;
q.isPM = Ho;
q.meridiem = qo;
function mr(e, t, r, n) {
  var s = Be(), a = Pe().set(n, t);
  return s[r](a, e);
}
function Ea(e, t, r) {
  if ($e(e) && (t = e, e = void 0), e = e || "", t != null)
    return mr(e, t, r, "month");
  var n, s = [];
  for (n = 0; n < 12; n++)
    s[n] = mr(e, n, r, "month");
  return s;
}
function An(e, t, r, n) {
  typeof e == "boolean" ? ($e(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, $e(t) && (r = t, t = void 0), t = t || "");
  var s = Be(), a = e ? s._week.dow : 0, i, o = [];
  if (r != null)
    return mr(t, (r + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = mr(t, (i + a) % 7, n, "day");
  return o;
}
function Zu(e, t) {
  return Ea(e, t, "months");
}
function Ku(e, t) {
  return Ea(e, t, "monthsShort");
}
function Xu(e, t, r) {
  return An(e, t, r, "weekdays");
}
function Qu(e, t, r) {
  return An(e, t, r, "weekdaysShort");
}
function ec(e, t, r) {
  return An(e, t, r, "weekdaysMin");
}
Je("en", {
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
    var t = e % 10, r = I(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
w.lang = me(
  "moment.lang is deprecated. Use moment.locale instead.",
  Je
);
w.langData = me(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Be
);
var Fe = Math.abs;
function tc() {
  var e = this._data;
  return this._milliseconds = Fe(this._milliseconds), this._days = Fe(this._days), this._months = Fe(this._months), e.milliseconds = Fe(e.milliseconds), e.seconds = Fe(e.seconds), e.minutes = Fe(e.minutes), e.hours = Fe(e.hours), e.months = Fe(e.months), e.years = Fe(e.years), this;
}
function Oa(e, t, r, n) {
  var s = De(t, r);
  return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
}
function rc(e, t) {
  return Oa(this, e, t, 1);
}
function nc(e, t) {
  return Oa(this, e, t, -1);
}
function us(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function sc() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, s, a, i, o, l;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += us(on(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, s = he(e / 1e3), n.seconds = s % 60, a = he(s / 60), n.minutes = a % 60, i = he(a / 60), n.hours = i % 24, t += he(i / 24), l = he(va(t)), r += l, t -= us(on(l)), o = he(r / 12), r %= 12, n.days = t, n.months = r, n.years = o, this;
}
function va(e) {
  return e * 4800 / 146097;
}
function on(e) {
  return e * 146097 / 4800;
}
function ac(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = pe(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + va(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(on(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      // Math.floor prevents floating point math errors here
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function qe(e) {
  return function() {
    return this.as(e);
  };
}
var Da = qe("ms"), ic = qe("s"), oc = qe("m"), lc = qe("h"), uc = qe("d"), cc = qe("w"), fc = qe("M"), dc = qe("Q"), hc = qe("y"), mc = Da;
function pc() {
  return De(this);
}
function yc(e) {
  return e = pe(e), this.isValid() ? this[e + "s"]() : NaN;
}
function lt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var _c = lt("milliseconds"), gc = lt("seconds"), wc = lt("minutes"), Sc = lt("hours"), Rc = lt("days"), bc = lt("months"), Ec = lt("years");
function Oc() {
  return he(this.days() / 7);
}
var Ue = Math.round, mt = {
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
function vc(e, t, r, n, s) {
  return s.relativeTime(t || 1, !!r, e, n);
}
function Dc(e, t, r, n) {
  var s = De(e).abs(), a = Ue(s.as("s")), i = Ue(s.as("m")), o = Ue(s.as("h")), l = Ue(s.as("d")), u = Ue(s.as("M")), c = Ue(s.as("w")), d = Ue(s.as("y")), p = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || l <= 1 && ["d"] || l < r.d && ["dd", l];
  return r.w != null && (p = p || c <= 1 && ["w"] || c < r.w && ["ww", c]), p = p || u <= 1 && ["M"] || u < r.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d], p[2] = t, p[3] = +e > 0, p[4] = n, vc.apply(null, p);
}
function xc(e) {
  return e === void 0 ? Ue : typeof e == "function" ? (Ue = e, !0) : !1;
}
function Tc(e, t) {
  return mt[e] === void 0 ? !1 : t === void 0 ? mt[e] : (mt[e] = t, e === "s" && (mt.ss = t - 1), !0);
}
function kc(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = mt, s, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, mt, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), a = Dc(this, !r, n, s), r && (a = s.pastFuture(+this, a)), s.postformat(a);
}
var $r = Math.abs;
function ct(e) {
  return (e > 0) - (e < 0) || +e;
}
function Pr() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = $r(this._milliseconds) / 1e3, t = $r(this._days), r = $r(this._months), n, s, a, i, o = this.asSeconds(), l, u, c, d;
  return o ? (n = he(e / 60), s = he(n / 60), e %= 60, n %= 60, a = he(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = o < 0 ? "-" : "", u = ct(this._months) !== ct(o) ? "-" : "", c = ct(this._days) !== ct(o) ? "-" : "", d = ct(this._milliseconds) !== ct(o) ? "-" : "", l + "P" + (a ? u + a + "Y" : "") + (r ? u + r + "M" : "") + (t ? c + t + "D" : "") + (s || n || e ? "T" : "") + (s ? d + s + "H" : "") + (n ? d + n + "M" : "") + (e ? d + i + "S" : "")) : "P0D";
}
var j = Tr.prototype;
j.isValid = bl;
j.abs = tc;
j.add = rc;
j.subtract = nc;
j.as = ac;
j.asMilliseconds = Da;
j.asSeconds = ic;
j.asMinutes = oc;
j.asHours = lc;
j.asDays = uc;
j.asWeeks = cc;
j.asMonths = fc;
j.asQuarters = dc;
j.asYears = hc;
j.valueOf = mc;
j._bubble = sc;
j.clone = pc;
j.get = yc;
j.milliseconds = _c;
j.seconds = gc;
j.minutes = wc;
j.hours = Sc;
j.days = Rc;
j.weeks = Oc;
j.months = bc;
j.years = Ec;
j.humanize = kc;
j.toISOString = Pr;
j.toString = Pr;
j.toJSON = Pr;
j.locale = ha;
j.localeData = pa;
j.toIsoString = me(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Pr
);
j.lang = ma;
M("X", 0, 0, "unix");
M("x", 0, 0, "valueOf");
k("x", Or);
k("X", Ji);
G("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
G("x", function(e, t, r) {
  r._d = new Date(I(e));
});
//! moment.js
w.version = "2.30.1";
ki(Z);
w.fn = g;
w.min = gl;
w.max = wl;
w.now = Sl;
w.utc = Pe;
w.unix = Gu;
w.months = Zu;
w.isDate = It;
w.locale = Je;
w.invalid = Sr;
w.duration = De;
w.isMoment = ve;
w.weekdays = Xu;
w.parseZone = Ju;
w.localeData = Be;
w.isDuration = rr;
w.monthsShort = Ku;
w.weekdaysMin = ec;
w.defineLocale = Dn;
w.updateLocale = Jo;
w.locales = Zo;
w.weekdaysShort = Qu;
w.normalizeUnits = pe;
w.relativeTimeRounding = xc;
w.relativeTimeThreshold = Tc;
w.calendarFormat = ql;
w.prototype = g;
w.HTML5_FMT = {
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
const Pc = "ddd, MMM Do YYYY, h:mm:ss a", Mc = "ddd, MMM Do YYYY", Cc = "h:mm:ss a", Ln = "YYYY-MM-DD HH:mm:ss", Yn = "YYYY-MM-DD", Nc = "HH:mm:ss", xa = "YYYY-MM-DD HH:mm:ss.SSS", Tm = (e) => {
  if (!e)
    return "";
  const t = w.utc(e).toDate();
  return w(t).local().format(Pc);
}, km = (e) => {
  if (!e)
    return "";
  const t = w.utc(e).toDate();
  return w(t).local().format(Mc);
}, Pm = (e) => {
  if (!e)
    return "";
  const t = w.utc(e).toDate();
  return w(t).local().format(Ln);
}, Mm = (e) => {
  if (!e)
    return "";
  const t = w.utc(e).toDate();
  return w(t).local().format(Yn);
}, Cm = (e) => {
  if (!e)
    return "";
  const t = w.utc(e).toDate();
  return w(t).local().format(xa);
}, Nm = (e) => {
  if (!e)
    return "";
  const t = w.utc(e).toDate();
  return w(t).local().format(Nc);
}, Am = (e) => {
  if (!e)
    return "";
  const t = w.utc(e).toDate();
  return w(t).local().format(Cc);
}, Lm = (e) => e ? w(e).utc().format(Ln) : "", Ac = (e) => e ? w(e).utc().format(xa) : "", Lc = (e) => e ? w(e).utc().format(Yn) : "", Ym = (e) => e ? w(e).local().format(Ln) : "", Fm = (e) => e ? w(e).local().format(Yn) : "", Yc = (e) => e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-", Um = (e, t = 6) => {
  if (!e)
    return "-";
  const r = Number(e).toFixed(t).toString().split("."), n = Yc(Number(r[0])), s = r.length == 2 ? r[1] : 0;
  return n + "." + s;
}, Im = (e, t) => {
  if (t[e + "_degrees"] === "" || t[e + "_minutes"] === "" || t[e + "_seconds"] === "") {
    t[e] = "";
    return;
  }
  const r = t[e + "_degrees"], n = t[e + "_minutes"], s = t[e + "_seconds"];
  t[e] = parseFloat(
    (parseInt(r) + parseInt(n) / 60 + parseFloat(s) / 3600).toFixed(8)
  );
}, Wm = (e, t) => {
  if (!t[e])
    return;
  const r = t[e], n = Math.floor(r), s = Math.floor((r - n) * 60), a = ((r - n - s / 60) * 3600).toFixed(5);
  t[e + "_degrees"] = n, t[e + "_minutes"] = s, t[e + "_seconds"] = a;
};
var Xt = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function Fc() {
  if (cs) return kt;
  cs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var o in s)
        o !== "key" && (a[o] = s[o]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return kt.Fragment = t, kt.jsx = r, kt.jsxs = r, kt;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function Uc() {
  return fs || (fs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === x ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case _:
          return "Fragment";
        case R:
          return "Profiler";
        case h:
          return "StrictMode";
        case U:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case T:
            return "Portal";
          case N:
            return m.displayName || "Context";
          case b:
            return (m._context.displayName || "Context") + ".Consumer";
          case W:
            var A = m.render;
            return m = m.displayName, m || (m = A.displayName || A.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case v:
            return A = m.displayName || null, A !== null ? A : e(m.type) || "Memo";
          case D:
            A = m._payload, m = m._init;
            try {
              return e(m(A));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function r(m) {
      try {
        t(m);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var z = A.error, J = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return z.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          J
        ), t(m);
      }
    }
    function n(m) {
      if (m === _) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === D)
        return "<...>";
      try {
        var A = e(m);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var m = C.A;
      return m === null ? null : m.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(m) {
      if (ee.call(m, "key")) {
        var A = Object.getOwnPropertyDescriptor(m, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function o(m, A) {
      function z() {
        ge || (ge = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: z,
        configurable: !0
      });
    }
    function l() {
      var m = e(this.type);
      return Ae[m] || (Ae[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function u(m, A, z, J, Ke, H) {
      var $ = z.ref;
      return m = {
        $$typeof: O,
        type: m,
        key: A,
        props: z,
        _owner: J
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ke
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function c(m, A, z, J, Ke, H) {
      var $ = A.children;
      if ($ !== void 0)
        if (J)
          if (V($)) {
            for (J = 0; J < $.length; J++)
              d($[J]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d($);
      if (ee.call(A, "key")) {
        $ = e(m);
        var Se = Object.keys(A).filter(function(Ur) {
          return Ur !== "key";
        });
        J = 0 < Se.length ? "{key: someKey, " + Se.join(": ..., ") + ": ...}" : "{key: someKey}", we[$ + J] || (Se = 0 < Se.length ? "{" + Se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          J,
          $,
          Se,
          $
        ), we[$ + J] = !0);
      }
      if ($ = null, z !== void 0 && (r(z), $ = "" + z), i(A) && (r(A.key), $ = "" + A.key), "key" in A) {
        z = {};
        for (var ut in A)
          ut !== "key" && (z[ut] = A[ut]);
      } else z = A;
      return $ && o(
        z,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), u(
        m,
        $,
        z,
        s(),
        Ke,
        H
      );
    }
    function d(m) {
      p(m) ? m._store && (m._store.validated = 1) : typeof m == "object" && m !== null && m.$$typeof === D && (m._payload.status === "fulfilled" ? p(m._payload.value) && m._payload.value._store && (m._payload.value._store.validated = 1) : m._store && (m._store.validated = 1));
    }
    function p(m) {
      return typeof m == "object" && m !== null && m.$$typeof === O;
    }
    var S = Ee, O = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), N = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), x = Symbol.for("react.client.reference"), C = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, V = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var ge, Ae = {}, Jt = S.react_stack_bottom_frame.bind(
      S,
      a
    )(), vt = L(n(a)), we = {};
    Pt.Fragment = _, Pt.jsx = function(m, A, z) {
      var J = 1e4 > C.recentlyCreatedOwnerStacks++;
      return c(
        m,
        A,
        z,
        !1,
        J ? Error("react-stack-top-frame") : Jt,
        J ? L(n(m)) : vt
      );
    }, Pt.jsxs = function(m, A, z) {
      var J = 1e4 > C.recentlyCreatedOwnerStacks++;
      return c(
        m,
        A,
        z,
        !0,
        J ? Error("react-stack-top-frame") : Jt,
        J ? L(n(m)) : vt
      );
    };
  })()), Pt;
}
var ds;
function Ic() {
  return ds || (ds = 1, process.env.NODE_ENV === "production" ? Xt.exports = Fc() : Xt.exports = Uc()), Xt.exports;
}
var nt = Ic();
/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Fn = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Wc = /^[\\/]{2}/;
function jc(e, t) {
  return t + e.replace(/\\/g, "/");
}
function se(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function ke(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ln({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function Un(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function Ta(e, t, r = "/") {
  return Hc(e, t, r, !1);
}
function Hc(e, t, r, n, s) {
  let a = typeof t == "string" ? Un(t) : t, i = Ze(a.pathname || "/", r);
  if (i == null)
    return null;
  let o = $c(e), l = null, u = ef(i);
  for (let c = 0; l == null && c < o.length; ++c)
    l = Qc(
      o[c],
      u,
      n
    );
  return l;
}
function $c(e) {
  let t = ka(e);
  return Bc(t), t;
}
function ka(e, t = [], r = [], n = "", s = !1) {
  let a = (i, o, l = s, u) => {
    let c = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i
    };
    if (c.relativePath.startsWith("/")) {
      if (!c.relativePath.startsWith(n) && l)
        return;
      se(
        c.relativePath.startsWith(n),
        `Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), c.relativePath = c.relativePath.slice(n.length);
    }
    let d = be([n, c.relativePath]), p = r.concat(c);
    i.children && i.children.length > 0 && (se(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${d}".`
    ), ka(
      i.children,
      t,
      p,
      d,
      l
    )), !(i.path == null && !i.index) && t.push({
      path: d,
      score: Kc(d, i.index),
      routesMeta: p.map((S, O) => {
        let [T, _] = Ca(
          S.relativePath,
          S.caseSensitive,
          O === p.length - 1
        );
        return {
          ...S,
          matcher: T,
          compiledParams: _
        };
      })
    });
  };
  return e.forEach((i, o) => {
    var l;
    if (i.path === "" || !((l = i.path) != null && l.includes("?")))
      a(i, o);
    else
      for (let u of Pa(i.path))
        a(i, o, !0, u);
  }), t;
}
function Pa(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, s = r.endsWith("?"), a = r.replace(/\?$/, "");
  if (n.length === 0)
    return s ? [a, ""] : [a];
  let i = Pa(n.join("/")), o = [];
  return o.push(
    ...i.map(
      (l) => l === "" ? a : [a, l].join("/")
    )
  ), s && o.push(...i), o.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function Bc(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : Xc(
      t.routesMeta.map((n) => n.childrenIndex),
      r.routesMeta.map((n) => n.childrenIndex)
    )
  );
}
var qc = /^:[\w-]+$/, Vc = 3, zc = 2, Gc = 1, Jc = 10, Zc = -2, hs = (e) => e === "*";
function Kc(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(hs) && (n += Zc), t && (n += zc), r.filter((s) => !hs(s)).reduce(
    (s, a) => s + (qc.test(a) ? Vc : a === "" ? Gc : Jc),
    n
  );
}
function Xc(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, s) => n === t[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Qc(e, t, r = !1) {
  let { routesMeta: n } = e, s = {}, a = "/", i = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o], u = o === n.length - 1, c = a === "/" ? t : t.slice(a.length) || "/", d = {
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, p = (
      // Use precomputed matcher if it exists
      l.matcher && l.compiledParams ? Ma(
        d,
        c,
        l.matcher,
        l.compiledParams
      ) : pr(d, c)
    ), S = l.route;
    if (!p && u && r && !n[n.length - 1].route.index && (p = pr(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      c
    )), !p)
      return null;
    Object.assign(s, p.params), i.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: be([a, p.pathname]),
      pathnameBase: nf(
        be([a, p.pathnameBase])
      ),
      route: S
    }), p.pathnameBase !== "/" && (a = be([a, p.pathnameBase]));
  }
  return i;
}
function pr(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Ca(
    e.path,
    e.caseSensitive,
    e.end
  );
  return Ma(e, t, r, n);
}
function Ma(e, t, r, n) {
  let s = t.match(r);
  if (!s) return null;
  let a = s[0], i = a.replace(/(.)\/+$/, "$1"), o = s.slice(1);
  return {
    params: n.reduce(
      (u, { paramName: c, isOptional: d }, p) => {
        if (c === "*") {
          let O = o[p] || "";
          i = a.slice(0, a.length - O.length).replace(/(.)\/+$/, "$1");
        }
        const S = o[p];
        return d && !S ? u[c] = void 0 : u[c] = (S || "").replace(/%2F/g, "/"), u;
      },
      {}
    ),
    pathname: a,
    pathnameBase: i,
    pattern: e
  };
}
function Ca(e, t = !1, r = !0) {
  ke(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [], s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (i, o, l, u, c) => {
      if (n.push({ paramName: o, isOptional: l != null }), l) {
        let d = c.charAt(u + i.length);
        return d && d !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (n.push({ paramName: "*" }), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, t ? void 0 : "i"), n];
}
function ef(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return ke(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function Ze(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function tf(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: s = ""
  } = typeof e == "string" ? Un(e) : e, a;
  return r ? (r = Na(r), r.startsWith("/") ? a = ms(r.substring(1), "/") : a = ms(r, t)) : a = t, {
    pathname: a,
    search: sf(n),
    hash: af(s)
  };
}
function ms(e, t) {
  let r = yr(t).split("/");
  return e.split("/").forEach((s) => {
    s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
  }), r.length > 1 ? r.join("/") : "/";
}
function Br(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rf(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function In(e) {
  let t = rf(e);
  return t.map(
    (r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function Mr(e, t, r, n = !1) {
  let s;
  typeof e == "string" ? s = Un(e) : (s = { ...e }, se(
    !s.pathname || !s.pathname.includes("?"),
    Br("?", "pathname", "search", s)
  ), se(
    !s.pathname || !s.pathname.includes("#"),
    Br("#", "pathname", "hash", s)
  ), se(
    !s.search || !s.search.includes("#"),
    Br("#", "search", "hash", s)
  ));
  let a = e === "" || s.pathname === "", i = a ? "/" : s.pathname, o;
  if (i == null)
    o = r;
  else {
    let d = t.length - 1;
    if (!n && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; )
        p.shift(), d -= 1;
      s.pathname = p.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let l = tf(s, o), u = i && i !== "/" && i.endsWith("/"), c = (a || i === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
var Na = (e) => e.replace(/[\\/]{2,}/g, "/"), be = (e) => Na(e.join("/")), yr = (e) => e.replace(/\/+$/, ""), nf = (e) => yr(e).replace(/^\/*/, "/"), sf = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, af = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, of = class {
  constructor(e, t, r, n = !1) {
    this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function lf(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function uf(e) {
  let t = e.map((r) => r.route.path).filter(Boolean);
  return be(t) || "/";
}
var Aa = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function La(e, t) {
  let r = e;
  if (typeof r != "string" || !Fn.test(r))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: r
    };
  let n = r, s = !1;
  if (Aa)
    try {
      let a = new URL(window.location.href), i = Wc.test(r) ? new URL(jc(r, a.protocol)) : new URL(r), o = Ze(i.pathname, t);
      i.origin === a.origin && o != null ? r = o + i.search + i.hash : s = !0;
    } catch {
      ke(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: n,
    isExternal: s,
    to: r
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Ya = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Ya
);
var cf = [
  "GET",
  ...Ya
];
new Set(cf);
var ff = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  // eslint-disable-next-line no-script-url
  "javascript:"
];
function df(e) {
  try {
    return ff.includes(new URL(e).protocol);
  } catch {
    return !1;
  }
}
var bt = y.createContext(null);
bt.displayName = "DataRouter";
var Cr = y.createContext(null);
Cr.displayName = "DataRouterState";
var Fa = y.createContext(!1);
function hf() {
  return y.useContext(Fa);
}
var Ua = y.createContext({
  isTransitioning: !1
});
Ua.displayName = "ViewTransition";
var mf = y.createContext(
  /* @__PURE__ */ new Map()
);
mf.displayName = "Fetchers";
var pf = y.createContext(null);
pf.displayName = "Await";
var ye = y.createContext(
  null
);
ye.displayName = "Navigation";
var Wn = y.createContext(
  null
);
Wn.displayName = "Location";
var Ce = y.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ce.displayName = "Route";
var jn = y.createContext(null);
jn.displayName = "RouteError";
var Ia = "REACT_ROUTER_ERROR", yf = "REDIRECT", _f = "ROUTE_ERROR_RESPONSE";
function gf(e) {
  if (e.startsWith(`${Ia}:${yf}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function wf(e) {
  if (e.startsWith(
    `${Ia}:${_f}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new of(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function Sf(e, { relative: t } = {}) {
  se(
    $t(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: n } = y.useContext(ye), { hash: s, pathname: a, search: i } = Bt(e, { relative: t }), o = a;
  return r !== "/" && (o = a === "/" ? r : be([r, a])), n.createHref({ pathname: o, search: i, hash: s });
}
function $t() {
  return y.useContext(Wn) != null;
}
function Ne() {
  return se(
    $t(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), y.useContext(Wn).location;
}
var Wa = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ja(e) {
  y.useContext(ye).static || y.useLayoutEffect(e);
}
function Hn() {
  let { isDataRoute: e } = y.useContext(Ce);
  return e ? Nf() : Rf();
}
function Rf() {
  se(
    $t(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = y.useContext(bt), { basename: t, navigator: r } = y.useContext(ye), { matches: n } = y.useContext(Ce), { pathname: s } = Ne(), a = JSON.stringify(In(n)), i = y.useRef(!1);
  return ja(() => {
    i.current = !0;
  }), y.useCallback(
    (l, u = {}) => {
      if (ke(i.current, Wa), !i.current) return;
      if (typeof l == "number") {
        r.go(l);
        return;
      }
      let c = Mr(
        l,
        JSON.parse(a),
        s,
        u.relative === "path"
      );
      e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : be([t, c.pathname])), (u.replace ? r.replace : r.push)(
        c,
        u.state,
        u
      );
    },
    [
      t,
      r,
      a,
      s,
      e
    ]
  );
}
y.createContext(null);
function Bt(e, { relative: t } = {}) {
  let { matches: r } = y.useContext(Ce), { pathname: n } = Ne(), s = JSON.stringify(In(r));
  return y.useMemo(
    () => Mr(
      e,
      JSON.parse(s),
      n,
      t === "path"
    ),
    [e, s, n, t]
  );
}
function bf(e, t, r) {
  se(
    $t(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: n } = y.useContext(ye), { matches: s } = y.useContext(Ce), a = s[s.length - 1], i = a ? a.params : {}, o = a ? a.pathname : "/", l = a ? a.pathnameBase : "/", u = a && a.route;
  {
    let _ = u && u.path || "";
    $a(
      o,
      !u || _.endsWith("*") || _.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_ === "/" ? "*" : `${_}/*`}">.`
    );
  }
  let c = Ne(), d;
  d = c;
  let p = d.pathname || "/", S = p;
  if (l !== "/") {
    let _ = l.replace(/^\//, "").split("/");
    S = "/" + p.replace(/^\//, "").split("/").slice(_.length).join("/");
  }
  let O = r && r.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    r.state.matches.map(
      (_) => Object.assign(_, {
        route: r.manifest[_.route.id] || _.route
      })
    )
  ) : Ta(e, { pathname: S });
  return ke(
    u || O != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `
  ), ke(
    O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), xf(
    O && O.map(
      (_) => Object.assign({}, _, {
        params: Object.assign({}, i, _.params),
        pathname: be([
          l,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          n.encodeLocation ? n.encodeLocation(
            _.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : _.pathname
        ]),
        pathnameBase: _.pathnameBase === "/" ? l : be([
          l,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          n.encodeLocation ? n.encodeLocation(
            _.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : _.pathnameBase
        ])
      })
    ),
    s,
    r
  );
}
function Ef() {
  let e = Cf(), t = lf(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: n }, a = { padding: "2px 4px", backgroundColor: n }, i = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), i = /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ y.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ y.createElement("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ y.createElement("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ y.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ y.createElement("pre", { style: s }, r) : null, i);
}
var Of = /* @__PURE__ */ y.createElement(Ef, null), Ha = class extends y.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const r = wf(e.digest);
      r && (e = r);
    }
    let t = e !== void 0 ? /* @__PURE__ */ y.createElement(Ce.Provider, { value: this.props.routeContext }, /* @__PURE__ */ y.createElement(
      jn.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ y.createElement(vf, { error: e }, t) : t;
  }
};
Ha.contextType = Fa;
var qr = /* @__PURE__ */ new WeakMap();
function vf({
  children: e,
  error: t
}) {
  let { basename: r } = y.useContext(ye);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let n = gf(t.digest);
    if (n) {
      let s = qr.get(t);
      if (s) throw s;
      let a = La(n.location, r), i = a.absoluteURL || a.to;
      if (df(i))
        throw new Error("Invalid redirect location");
      if (Aa && !qr.get(t))
        if (a.isExternal || n.reloadDocument)
          window.location.href = i;
        else {
          const o = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(a.to, {
              replace: n.replace
            })
          );
          throw qr.set(t, o), o;
        }
      return /* @__PURE__ */ y.createElement("meta", { httpEquiv: "refresh", content: `0;url=${i}` });
    }
  }
  return e;
}
function Df({ routeContext: e, match: t, children: r }) {
  let n = y.useContext(bt);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ y.createElement(Ce.Provider, { value: e }, r);
}
function xf(e, t = [], r) {
  let n = r == null ? void 0 : r.state;
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let s = e, a = n == null ? void 0 : n.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    se(
      c >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, c + 1)
    );
  }
  let i = !1, o = -1;
  if (r && n) {
    i = n.renderFallback;
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (o = c), d.route.id) {
        let { loaderData: p, errors: S } = n, O = d.route.loader && !p.hasOwnProperty(d.route.id) && (!S || S[d.route.id] === void 0);
        if (d.route.lazy || O) {
          r.isStatic && (i = !0), o >= 0 ? s = s.slice(0, o + 1) : s = [s[0]];
          break;
        }
      }
    }
  }
  let l = r == null ? void 0 : r.onError, u = n && l ? (c, d) => {
    var p, S;
    l(c, {
      location: n.location,
      params: ((S = (p = n.matches) == null ? void 0 : p[0]) == null ? void 0 : S.params) ?? {},
      pattern: uf(n.matches),
      errorInfo: d
    });
  } : void 0;
  return s.reduceRight(
    (c, d, p) => {
      let S, O = !1, T = null, _ = null;
      n && (S = a && d.route.id ? a[d.route.id] : void 0, T = d.route.errorElement || Of, i && (o < 0 && p === 0 ? ($a(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), O = !0, _ = null) : o === p && (O = !0, _ = d.route.hydrateFallbackElement || null)));
      let h = t.concat(s.slice(0, p + 1)), R = () => {
        let b;
        return S ? b = T : O ? b = _ : d.route.Component ? b = /* @__PURE__ */ y.createElement(d.route.Component, null) : d.route.element ? b = d.route.element : b = c, /* @__PURE__ */ y.createElement(
          Df,
          {
            match: d,
            routeContext: {
              outlet: c,
              matches: h,
              isDataRoute: n != null
            },
            children: b
          }
        );
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? /* @__PURE__ */ y.createElement(
        Ha,
        {
          location: n.location,
          revalidation: n.revalidation,
          component: T,
          error: S,
          children: R(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          onError: u
        }
      ) : R();
    },
    null
  );
}
function $n(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tf(e) {
  let t = y.useContext(bt);
  return se(t, $n(e)), t;
}
function kf(e) {
  let t = y.useContext(Cr);
  return se(t, $n(e)), t;
}
function Pf(e) {
  let t = y.useContext(Ce);
  return se(t, $n(e)), t;
}
function Bn(e) {
  let t = Pf(e), r = t.matches[t.matches.length - 1];
  return se(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Mf() {
  return Bn(
    "useRouteId"
    /* UseRouteId */
  );
}
function Cf() {
  var n;
  let e = y.useContext(jn), t = kf(
    "useRouteError"
    /* UseRouteError */
  ), r = Bn(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function Nf() {
  let { router: e } = Tf(
    "useNavigate"
    /* UseNavigateStable */
  ), t = Bn(
    "useNavigate"
    /* UseNavigateStable */
  ), r = y.useRef(!1);
  return ja(() => {
    r.current = !0;
  }), y.useCallback(
    async (s, a = {}) => {
      ke(r.current, Wa), r.current && (typeof s == "number" ? await e.navigate(s) : await e.navigate(s, { fromRouteId: t, ...a }));
    },
    [e, t]
  );
}
var ps = {};
function $a(e, t, r) {
  !t && !ps[e] && (ps[e] = !0, ke(!1, r));
}
y.memo(Af);
function Af({
  routes: e,
  manifest: t,
  future: r,
  state: n,
  isStatic: s,
  onError: a
}) {
  return bf(e, void 0, {
    manifest: t,
    state: n,
    isStatic: s,
    onError: a
  });
}
function Vr({
  to: e,
  replace: t,
  state: r,
  relative: n
}) {
  se(
    $t(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: s } = y.useContext(ye);
  ke(
    !s,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: a } = y.useContext(Ce), { pathname: i } = Ne(), o = Hn(), l = Mr(
    e,
    In(a),
    i,
    n === "path"
  ), u = JSON.stringify(l);
  return y.useEffect(() => {
    o(JSON.parse(u), { replace: t, state: r, relative: n });
  }, [o, u, n, t, r]), null;
}
var sr = "get", ar = "application/x-www-form-urlencoded";
function Nr(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Lf(e) {
  return Nr(e) && e.tagName.toLowerCase() === "button";
}
function Yf(e) {
  return Nr(e) && e.tagName.toLowerCase() === "form";
}
function Ff(e) {
  return Nr(e) && e.tagName.toLowerCase() === "input";
}
function Uf(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function If(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Uf(e);
}
var Qt = null;
function Wf() {
  if (Qt === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Qt = !1;
    } catch {
      Qt = !0;
    }
  return Qt;
}
var jf = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function zr(e) {
  return e != null && !jf.has(e) ? (ke(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ar}"`
  ), null) : e;
}
function Hf(e, t) {
  let r, n, s, a, i;
  if (Yf(e)) {
    let o = e.getAttribute("action");
    n = o ? Ze(o, t) : null, r = e.getAttribute("method") || sr, s = zr(e.getAttribute("enctype")) || ar, a = new FormData(e);
  } else if (Lf(e) || Ff(e) && (e.type === "submit" || e.type === "image")) {
    let o = e.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || o.getAttribute("action");
    if (n = l ? Ze(l, t) : null, r = e.getAttribute("formmethod") || o.getAttribute("method") || sr, s = zr(e.getAttribute("formenctype")) || zr(o.getAttribute("enctype")) || ar, a = new FormData(o, e), !Wf()) {
      let { name: u, type: c, value: d } = e;
      if (c === "image") {
        let p = u ? `${u}.` : "";
        a.append(`${p}x`, "0"), a.append(`${p}y`, "0");
      } else u && a.append(u, d);
    }
  } else {
    if (Nr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = sr, n = null, s = ar, i = e;
  }
  return a && s === "text/plain" && (i = a, a = void 0), { action: n, method: r.toLowerCase(), encType: s, formData: a, body: i };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function qn(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ba(e, t, r, n) {
  let s = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r ? s.pathname.endsWith("/") ? s.pathname = `${s.pathname}_.${n}` : s.pathname = `${s.pathname}.${n}` : s.pathname === "/" ? s.pathname = `_root.${n}` : t && Ze(s.pathname, t) === "/" ? s.pathname = `${yr(t)}/_root.${n}` : s.pathname = `${yr(s.pathname)}.${n}`, s;
}
async function $f(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Bf(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function qf(e, t, r) {
  let n = await Promise.all(
    e.map(async (s) => {
      let a = t.routes[s.route.id];
      if (a) {
        let i = await $f(a, r);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return Jf(
    n.flat(1).filter(Bf).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function ys(e, t, r, n, s, a) {
  let i = (l, u) => r[u] ? l.route.id !== r[u].route.id : !0, o = (l, u) => {
    var c;
    return (
      // param change, /users/123 -> /users/456
      r[u].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((c = r[u].route.path) == null ? void 0 : c.endsWith("*")) && r[u].params["*"] !== l.params["*"]
    );
  };
  return a === "assets" ? t.filter(
    (l, u) => i(l, u) || o(l, u)
  ) : a === "data" ? t.filter((l, u) => {
    var d;
    let c = n.routes[l.route.id];
    if (!c || !c.hasLoader)
      return !1;
    if (i(l, u) || o(l, u))
      return !0;
    if (l.route.shouldRevalidate) {
      let p = l.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: ((d = r[0]) == null ? void 0 : d.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof p == "boolean")
        return p;
    }
    return !0;
  }) : [];
}
function Vf(e, t, { includeHydrateFallback: r } = {}) {
  return zf(
    e.map((n) => {
      let s = t.routes[n.route.id];
      if (!s) return [];
      let a = [s.module];
      return s.clientActionModule && (a = a.concat(s.clientActionModule)), s.clientLoaderModule && (a = a.concat(s.clientLoaderModule)), r && s.hydrateFallbackModule && (a = a.concat(s.hydrateFallbackModule)), s.imports && (a = a.concat(s.imports)), a;
    }).flat(1)
  );
}
function zf(e) {
  return [...new Set(e)];
}
function Gf(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let n of r)
    t[n] = e[n];
  return t;
}
function Jf(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((n, s) => {
    let a = JSON.stringify(Gf(s));
    return r.has(a) || (r.add(a), n.push({ key: a, link: s })), n;
  }, []);
}
function Vn() {
  let e = y.useContext(bt);
  return qn(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function Zf() {
  let e = y.useContext(Cr);
  return qn(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var zn = y.createContext(void 0);
zn.displayName = "FrameworkContext";
function Ar() {
  let e = y.useContext(zn);
  return qn(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Kf(e, t) {
  let r = y.useContext(zn), [n, s] = y.useState(!1), [a, i] = y.useState(!1), { onFocus: o, onBlur: l, onMouseEnter: u, onMouseLeave: c, onTouchStart: d } = t, p = y.useRef(null);
  y.useEffect(() => {
    if (e === "render" && i(!0), e === "viewport") {
      let T = (h) => {
        h.forEach((R) => {
          i(R.isIntersecting);
        });
      }, _ = new IntersectionObserver(T, { threshold: 0.5 });
      return p.current && _.observe(p.current), () => {
        _.disconnect();
      };
    }
  }, [e]), y.useEffect(() => {
    if (n) {
      let T = setTimeout(() => {
        i(!0);
      }, 100);
      return () => {
        clearTimeout(T);
      };
    }
  }, [n]);
  let S = () => {
    s(!0);
  }, O = () => {
    s(!1), i(!1);
  };
  return r ? e !== "intent" ? [a, p, {}] : [
    a,
    p,
    {
      onFocus: Mt(o, S),
      onBlur: Mt(l, O),
      onMouseEnter: Mt(u, S),
      onMouseLeave: Mt(c, O),
      onTouchStart: Mt(d, S)
    }
  ] : [!1, p, {}];
}
function Mt(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function Xf({ page: e, ...t }) {
  let r = hf(), { nonce: n } = Ar(), { router: s } = Vn(), a = y.useMemo(
    () => Ta(s.routes, e, s.basename),
    [s.routes, e, s.basename]
  );
  return a ? (t.nonce == null && n && (t = { ...t, nonce: n }), r ? /* @__PURE__ */ y.createElement(ed, { page: e, matches: a, ...t }) : /* @__PURE__ */ y.createElement(td, { page: e, matches: a, ...t })) : null;
}
function Qf(e) {
  let { manifest: t, routeModules: r } = Ar(), [n, s] = y.useState([]);
  return y.useEffect(() => {
    let a = !1;
    return qf(e, t, r).then(
      (i) => {
        a || s(i);
      }
    ), () => {
      a = !0;
    };
  }, [e, t, r]), n;
}
function ed({
  page: e,
  matches: t,
  ...r
}) {
  let n = Ne(), { future: s } = Ar(), { basename: a } = Vn(), i = y.useMemo(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let o = Ba(
      e,
      a,
      s.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), l = !1, u = [];
    for (let c of t)
      typeof c.route.shouldRevalidate == "function" ? l = !0 : u.push(c.route.id);
    return l && u.length > 0 && o.searchParams.set("_routes", u.join(",")), [o.pathname + o.search];
  }, [
    a,
    s.v8_trailingSlashAwareDataRequests,
    e,
    n,
    t
  ]);
  return /* @__PURE__ */ y.createElement(y.Fragment, null, i.map((o) => /* @__PURE__ */ y.createElement("link", { key: o, rel: "prefetch", as: "fetch", href: o, ...r })));
}
function td({
  page: e,
  matches: t,
  ...r
}) {
  let n = Ne(), { future: s, manifest: a, routeModules: i } = Ar(), { basename: o } = Vn(), { loaderData: l, matches: u } = Zf(), c = y.useMemo(
    () => ys(
      e,
      t,
      u,
      a,
      n,
      "data"
    ),
    [e, t, u, a, n]
  ), d = y.useMemo(
    () => ys(
      e,
      t,
      u,
      a,
      n,
      "assets"
    ),
    [e, t, u, a, n]
  ), p = y.useMemo(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let T = /* @__PURE__ */ new Set(), _ = !1;
    if (t.forEach((R) => {
      var N;
      let b = a.routes[R.route.id];
      !b || !b.hasLoader || (!c.some((W) => W.route.id === R.route.id) && R.route.id in l && ((N = i[R.route.id]) != null && N.shouldRevalidate) || b.hasClientLoader ? _ = !0 : T.add(R.route.id));
    }), T.size === 0)
      return [];
    let h = Ba(
      e,
      o,
      s.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return _ && T.size > 0 && h.searchParams.set(
      "_routes",
      t.filter((R) => T.has(R.route.id)).map((R) => R.route.id).join(",")
    ), [h.pathname + h.search];
  }, [
    o,
    s.v8_trailingSlashAwareDataRequests,
    l,
    n,
    a,
    c,
    t,
    e,
    i
  ]), S = y.useMemo(
    () => Vf(d, a),
    [d, a]
  ), O = Qf(d);
  return /* @__PURE__ */ y.createElement(y.Fragment, null, p.map((T) => /* @__PURE__ */ y.createElement("link", { key: T, rel: "prefetch", as: "fetch", href: T, ...r })), S.map((T) => /* @__PURE__ */ y.createElement("link", { key: T, rel: "modulepreload", href: T, ...r })), O.map(({ key: T, link: _ }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ y.createElement(
      "link",
      {
        key: T,
        nonce: r.nonce,
        ..._,
        crossOrigin: _.crossOrigin ?? r.crossOrigin
      }
    )
  )));
}
function rd(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var nd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  nd && (window.__reactRouterVersion = // @ts-expect-error
  "7.18.2");
} catch {
}
var qa = y.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: n = "none",
    relative: s,
    reloadDocument: a,
    replace: i,
    mask: o,
    state: l,
    target: u,
    to: c,
    preventScrollReset: d,
    viewTransition: p,
    defaultShouldRevalidate: S,
    ...O
  }, T) {
    let { basename: _, navigator: h, useTransitions: R } = y.useContext(ye), b = typeof c == "string" && Fn.test(c), N = La(c, _);
    c = N.to;
    let W = Sf(c, { relative: s }), U = Ne(), Q = null;
    if (o) {
      let L = Mr(
        o,
        [],
        U.mask ? U.mask.pathname : "/",
        !0
      );
      _ !== "/" && (L.pathname = L.pathname === "/" ? _ : be([_, L.pathname])), Q = h.createHref(L);
    }
    let [v, D, P] = Kf(
      n,
      O
    ), x = od(c, {
      replace: i,
      mask: o,
      state: l,
      target: u,
      preventScrollReset: d,
      relative: s,
      viewTransition: p,
      defaultShouldRevalidate: S,
      useTransitions: R
    });
    function C(L) {
      t && t(L), L.defaultPrevented || x(L);
    }
    let ee = !(N.isExternal || a), V = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ y.createElement(
        "a",
        {
          ...O,
          ...P,
          href: (ee ? Q : void 0) || N.absoluteURL || W,
          onClick: ee ? C : t,
          ref: rd(T, D),
          target: u,
          "data-discover": !b && r === "render" ? "true" : void 0
        }
      )
    );
    return v && !b ? /* @__PURE__ */ y.createElement(y.Fragment, null, V, /* @__PURE__ */ y.createElement(Xf, { page: W })) : V;
  }
);
qa.displayName = "Link";
var sd = y.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: s = !1,
    style: a,
    to: i,
    viewTransition: o,
    children: l,
    ...u
  }, c) {
    let d = Bt(i, { relative: u.relative }), p = Ne(), S = y.useContext(Cr), { navigator: O, basename: T } = y.useContext(ye), _ = S != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dd(d) && o === !0, h = O.encodeLocation ? O.encodeLocation(d).pathname : d.pathname, R = p.pathname, b = S && S.navigation && S.navigation.location ? S.navigation.location.pathname : null;
    r || (R = R.toLowerCase(), b = b ? b.toLowerCase() : null, h = h.toLowerCase()), b && T && (b = Ze(b, T) || b);
    const N = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let W = R === h || !s && R.startsWith(h) && R.charAt(N) === "/", U = b != null && (b === h || !s && b.startsWith(h) && b.charAt(h.length) === "/"), Q = {
      isActive: W,
      isPending: U,
      isTransitioning: _
    }, v = W ? t : void 0, D;
    typeof n == "function" ? D = n(Q) : D = [
      n,
      W ? "active" : null,
      U ? "pending" : null,
      _ ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let P = typeof a == "function" ? a(Q) : a;
    return /* @__PURE__ */ y.createElement(
      qa,
      {
        ...u,
        "aria-current": v,
        className: D,
        ref: c,
        style: P,
        to: i,
        viewTransition: o
      },
      typeof l == "function" ? l(Q) : l
    );
  }
);
sd.displayName = "NavLink";
var ad = y.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: n,
    replace: s,
    state: a,
    method: i = sr,
    action: o,
    onSubmit: l,
    relative: u,
    preventScrollReset: c,
    viewTransition: d,
    defaultShouldRevalidate: p,
    ...S
  }, O) => {
    let { useTransitions: T } = y.useContext(ye), _ = cd(), h = fd(o, { relative: u }), R = i.toLowerCase() === "get" ? "get" : "post", b = typeof o == "string" && Fn.test(o), N = (W) => {
      if (l && l(W), W.defaultPrevented) return;
      W.preventDefault();
      let U = W.nativeEvent.submitter, Q = (U == null ? void 0 : U.getAttribute("formmethod")) || i, v = () => _(U || W.currentTarget, {
        fetcherKey: t,
        method: Q,
        navigate: r,
        replace: s,
        state: a,
        relative: u,
        preventScrollReset: c,
        viewTransition: d,
        defaultShouldRevalidate: p
      });
      T && r !== !1 ? y.startTransition(() => v()) : v();
    };
    return /* @__PURE__ */ y.createElement(
      "form",
      {
        ref: O,
        method: R,
        action: h,
        onSubmit: n ? l : N,
        ...S,
        "data-discover": !b && e === "render" ? "true" : void 0
      }
    );
  }
);
ad.displayName = "Form";
function id(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Va(e) {
  let t = y.useContext(bt);
  return se(t, id(e)), t;
}
function od(e, {
  target: t,
  replace: r,
  mask: n,
  state: s,
  preventScrollReset: a,
  relative: i,
  viewTransition: o,
  defaultShouldRevalidate: l,
  useTransitions: u
} = {}) {
  let c = Hn(), d = Ne(), p = Bt(e, { relative: i });
  return y.useCallback(
    (S) => {
      if (If(S, t)) {
        S.preventDefault();
        let O = r !== void 0 ? r : ln(d) === ln(p), T = () => c(e, {
          replace: O,
          mask: n,
          state: s,
          preventScrollReset: a,
          relative: i,
          viewTransition: o,
          defaultShouldRevalidate: l
        });
        u ? y.startTransition(() => T()) : T();
      }
    },
    [
      d,
      c,
      p,
      r,
      n,
      s,
      t,
      e,
      a,
      i,
      o,
      l,
      u
    ]
  );
}
var ld = 0, ud = () => `__${String(++ld)}__`;
function cd() {
  let { router: e } = Va(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = y.useContext(ye), r = Mf(), n = e.fetch, s = e.navigate;
  return y.useCallback(
    async (a, i = {}) => {
      let { action: o, method: l, encType: u, formData: c, body: d } = Hf(
        a,
        t
      );
      if (i.navigate === !1) {
        let p = i.fetcherKey || ud();
        await n(p, r, i.action || o, {
          defaultShouldRevalidate: i.defaultShouldRevalidate,
          preventScrollReset: i.preventScrollReset,
          formData: c,
          body: d,
          formMethod: i.method || l,
          formEncType: i.encType || u,
          flushSync: i.flushSync
        });
      } else
        await s(i.action || o, {
          defaultShouldRevalidate: i.defaultShouldRevalidate,
          preventScrollReset: i.preventScrollReset,
          formData: c,
          body: d,
          formMethod: i.method || l,
          formEncType: i.encType || u,
          replace: i.replace,
          state: i.state,
          fromRouteId: r,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition
        });
    },
    [n, s, t, r]
  );
}
function fd(e, { relative: t } = {}) {
  let { basename: r } = y.useContext(ye), n = y.useContext(Ce);
  se(n, "useFormAction must be used inside a RouteContext");
  let [s] = n.matches.slice(-1), a = { ...Bt(e || ".", { relative: t }) }, i = Ne();
  if (e == null) {
    a.search = i.search;
    let o = new URLSearchParams(a.search), l = o.getAll("index");
    if (l.some((c) => c === "")) {
      o.delete("index"), l.filter((d) => d).forEach((d) => o.append("index", d));
      let c = o.toString();
      a.search = c ? `?${c}` : "";
    }
  }
  return (!e || e === ".") && s.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (a.pathname = a.pathname === "/" ? r : be([r, a.pathname])), ln(a);
}
function dd(e, { relative: t } = {}) {
  let r = y.useContext(Ua);
  se(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Va(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = Bt(e, { relative: t });
  if (!r.isTransitioning)
    return !1;
  let a = Ze(r.currentLocation.pathname, n) || r.currentLocation.pathname, i = Ze(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return pr(s.pathname, i) != null || pr(s.pathname, a) != null;
}
const hd = (e, t) => {
  const [r, n] = vi(() => {
    try {
      const a = window.localStorage.getItem(e);
      return a ? JSON.parse(a) : (window.localStorage.setItem(
        e,
        JSON.stringify(t)
      ), t);
    } catch (a) {
      return console.log(a), t;
    }
  });
  return [r, (a) => {
    try {
      window.localStorage.setItem(e, JSON.stringify(a));
    } catch (i) {
      console.log(i);
    }
    n(a);
  }];
}, za = Di({}), jm = ({ children: e }) => {
  const [t, r] = hd("user", null), n = Hn(), s = async (l) => {
    r(l);
  }, a = () => {
    r(null), n("/login");
  }, i = (l) => {
    r(l);
  }, o = xi(
    () => ({
      authUser: t,
      login: s,
      logout: a,
      updateAuthUser: i
    }),
    [t]
  );
  return /* @__PURE__ */ nt.jsx(za.Provider, { value: o, children: e });
}, Ga = () => Ti(za);
function Ja(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: md } = Object.prototype, { getPrototypeOf: gt } = Object, { iterator: qt, toStringTag: Za } = Symbol, _r = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Ut = (e, t) => {
  let r = e;
  const n = [];
  for (; r != null && r !== Object.prototype; ) {
    if (n.indexOf(r) !== -1)
      return !1;
    if (n.push(r), _r(r, t))
      return !0;
    r = gt(r);
  }
  return !1;
}, pd = (e, t) => e != null && Ut(e, t) ? e[t] : void 0, Gn = /* @__PURE__ */ ((e) => (t) => {
  const r = md.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), _e = (e) => (e = e.toLowerCase(), (t) => Gn(t) === e), Lr = (e) => (t) => typeof t === e, { isArray: at } = Array, it = Lr("undefined");
function Et(e) {
  return e !== null && !it(e) && e.constructor !== null && !it(e.constructor) && ce(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ka = _e("ArrayBuffer");
function yd(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ka(e.buffer), t;
}
const _d = Lr("string"), ce = Lr("function"), Xa = Lr("number"), Ot = (e) => e !== null && typeof e == "object", gd = (e) => e === !0 || e === !1, ir = (e) => {
  if (!Ot(e))
    return !1;
  const t = gt(e);
  return (t === null || t === Object.prototype || gt(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Ut(e, Za) && !Ut(e, qt);
}, wd = (e) => {
  if (!Ot(e) || Et(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Sd = _e("Date"), Rd = _e("File"), bd = (e) => !!(e && typeof e.uri < "u"), Ed = (e) => e && typeof e.getParts < "u", Od = _e("Blob"), vd = _e("FileList"), Dd = _e("Set"), xd = (e) => Ot(e) && ce(e.pipe);
function Td() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const _s = Td(), gs = typeof _s.FormData < "u" ? _s.FormData : void 0, kd = (e) => {
  if (!e) return !1;
  if (gs && e instanceof gs) return !0;
  const t = gt(e);
  if (!t || t === Object.prototype || !ce(e.append)) return !1;
  const r = Gn(e);
  return r === "formdata" || // detect form-data instance
  r === "object" && ce(e.toString) && e.toString() === "[object FormData]";
}, Pd = _e("URLSearchParams"), [Md, Cd, Nd, Ad] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(_e), Ld = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), at(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    if (Et(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let o;
    for (n = 0; n < i; n++)
      o = a[n], t.call(null, e[o], o, e);
  }
}
function Qa(e, t) {
  if (Et(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const tt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ei = (e) => !it(e) && e !== tt;
function un(...e) {
  const { caseless: t, skipUndefined: r } = ei(this) && this || {}, n = {}, s = (a, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const o = t && typeof i == "string" && Qa(n, i) || i, l = _r(n, o) ? n[o] : void 0;
    ir(l) && ir(a) ? n[o] = un(l, a) : ir(a) ? n[o] = un({}, a) : at(a) ? n[o] = a.slice() : (!r || !it(a)) && (n[o] = a);
  };
  for (let a = 0, i = e.length; a < i; a++) {
    const o = e[a];
    if (!o || Et(o) || (Vt(o, s), typeof o != "object" || at(o)))
      continue;
    const l = Object.getOwnPropertySymbols(o);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      zd.call(o, c) && s(o[c], c);
    }
  }
  return n;
}
const Yd = (e, t, r, { allOwnKeys: n } = {}) => (Vt(
  t,
  (s, a) => {
    r && ce(s) ? Object.defineProperty(e, a, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Ja(s, r),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), e), Fd = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ud = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Id = (e, t, r, n) => {
  let s, a, i;
  const o = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], (!n || n(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = r !== !1 && gt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Wd = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, jd = (e) => {
  if (!e) return null;
  if (at(e)) return e;
  let t = e.length;
  if (!Xa(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Hd = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && gt(Uint8Array)), $d = (e, t) => {
  const n = (e && e[qt]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, Bd = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, qd = _e("HTMLFormElement"), Vd = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
  return n.toUpperCase() + s;
}), { propertyIsEnumerable: zd } = Object.prototype, Gd = _e("RegExp"), ti = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Vt(r, (s, a) => {
    let i;
    (i = t(s, a, e)) !== !1 && (n[a] = i || s);
  }), Object.defineProperties(e, n);
}, Jd = (e) => {
  ti(e, (t, r) => {
    if (ce(e) && ["arguments", "caller", "callee"].includes(r))
      return !1;
    const n = e[r];
    if (ce(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Zd = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return at(e) ? n(e) : n(String(e).split(t)), r;
}, Kd = () => {
}, Xd = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Qd(e) {
  return !!(e && ce(e.append) && e[Za] === "FormData" && e[qt]);
}
const eh = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), r = (n) => {
    if (Ot(n)) {
      if (t.has(n))
        return;
      if (Et(n))
        return n;
      if (!("toJSON" in n)) {
        t.add(n);
        let s;
        if (Dd(n)) {
          s = [];
          for (const a of n) {
            const i = r(a);
            !it(i) && s.push(i);
          }
        } else
          s = at(n) ? [] : {}, Vt(n, (a, i) => {
            const o = r(a);
            !it(o) && (s[i] = o);
          });
        return t.delete(n), s;
      }
    }
    return n;
  };
  return r(e);
}, th = _e("AsyncFunction"), rh = (e) => e && (Ot(e) || ce(e)) && ce(e.then) && ce(e.catch), ri = ((e, t) => e ? setImmediate : t ? ((r, n) => (tt.addEventListener(
  "message",
  ({ source: s, data: a }) => {
    s === tt && a === r && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), tt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", ce(tt.postMessage)), nh = typeof queueMicrotask < "u" ? queueMicrotask.bind(tt) : typeof process < "u" && process.nextTick || ri, ni = (e) => e != null && ce(e[qt]), sh = (e) => e != null && Ut(e, qt) && ni(e), f = {
  isArray: at,
  isArrayBuffer: Ka,
  isBuffer: Et,
  isFormData: kd,
  isArrayBufferView: yd,
  isString: _d,
  isNumber: Xa,
  isBoolean: gd,
  isObject: Ot,
  isPlainObject: ir,
  isEmptyObject: wd,
  isReadableStream: Md,
  isRequest: Cd,
  isResponse: Nd,
  isHeaders: Ad,
  isUndefined: it,
  isDate: Sd,
  isFile: Rd,
  isReactNativeBlob: bd,
  isReactNative: Ed,
  isBlob: Od,
  isRegExp: Gd,
  isFunction: ce,
  isStream: xd,
  isURLSearchParams: Pd,
  isTypedArray: Hd,
  isFileList: vd,
  forEach: Vt,
  merge: un,
  extend: Yd,
  trim: Ld,
  stripBOM: Fd,
  inherits: Ud,
  toFlatObject: Id,
  kindOf: Gn,
  kindOfTest: _e,
  endsWith: Wd,
  toArray: jd,
  forEachEntry: $d,
  matchAll: Bd,
  isHTMLForm: qd,
  hasOwnProperty: _r,
  hasOwnProp: _r,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Ut,
  getSafeProp: pd,
  reduceDescriptors: ti,
  freezeMethods: Jd,
  toObjectSet: Zd,
  toCamelCase: Vd,
  noop: Kd,
  toFiniteNumber: Xd,
  findKey: Qa,
  global: tt,
  isContextDefined: ei,
  isSpecCompliantForm: Qd,
  toJSONObject: eh,
  isAsyncFn: th,
  isThenable: rh,
  setImmediate: ri,
  asap: nh,
  isIterable: ni,
  isSafeIterable: sh
}, ah = f.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ih = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim();
    const o = f.hasOwnProp(t, r);
    !r || o && f.hasOwnProp(ah, r) || (r === "set-cookie" ? o ? t[r].push(n) : t[r] = [n] : t[r] = o ? t[r] + ", " + n : n);
  }), t;
};
function oh(e) {
  let t = 0, r = e.length;
  for (; t < r; ) {
    const n = e.charCodeAt(t);
    if (n !== 9 && n !== 32)
      break;
    t += 1;
  }
  for (; r > t; ) {
    const n = e.charCodeAt(r - 1);
    if (n !== 9 && n !== 32)
      break;
    r -= 1;
  }
  return t === 0 && r === e.length ? e : e.slice(t, r);
}
const lh = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), uh = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Jn(e, t) {
  return f.isArray(e) ? e.map((r) => Jn(r, t)) : oh(String(e).replace(t, ""));
}
const ch = (e) => Jn(e, lh), fh = (e) => Jn(e, uh);
function si(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return f.forEach(e.toJSON(), (r, n) => {
    t[n] = fh(r);
  }), t;
}
const ws = Symbol("internals");
function Ct(e) {
  return e && String(e).trim().toLowerCase();
}
function or(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(or) : ch(String(e));
}
function dh(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const hh = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Gr(e) {
  let t = 0, r = e.length;
  for (; t < r; ) {
    const n = e.charCodeAt(t);
    if (n !== 9 && n !== 32)
      break;
    t += 1;
  }
  for (; r > t; ) {
    const n = e.charCodeAt(r - 1);
    if (n !== 9 && n !== 32)
      break;
    r -= 1;
  }
  return t === 0 && r === e.length ? e : e.slice(t, r);
}
function mh(e) {
  const t = e.length - 1;
  if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34)
    return e;
  let r = "";
  for (let n = 1; n < t; n++) {
    const s = e.charCodeAt(n);
    if (s === 34 || s === 92 && (n += 1, n >= t))
      return e;
    r += e[n];
  }
  return r;
}
function ph(e) {
  const t = /* @__PURE__ */ Object.create(null), r = String(e);
  let n = 0, s = !1, a = !1;
  function i(o) {
    const l = Gr(r.slice(n, o)), u = l.indexOf("=");
    if (u < 1)
      return;
    const c = Gr(l.slice(0, u));
    if (!hh.test(c))
      return;
    const d = c.toLowerCase();
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const p = Gr(l.slice(u + 1));
    t[d] = mh(p);
  }
  for (let o = 0; o < r.length; o++) {
    const l = r.charCodeAt(o);
    s ? a ? a = !1 : l === 92 ? a = !0 : l === 34 && (s = !1) : l === 34 ? s = !0 : (l === 44 || l === 59) && (i(o), n = o + 1);
  }
  return i(r.length), t;
}
const yh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jr(e, t, r, n, s) {
  if (f.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!f.isString(t)) {
    if (f.isString(n))
      return t.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(t);
  }
}
function _h(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function gh(e, t) {
  const r = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, a, i) {
        return this[n].call(this, t, s, a, i);
      },
      configurable: !0
    });
  });
}
let le = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function a(o, l, u) {
      const c = Ct(l);
      if (!c)
        return;
      const d = f.findKey(s, c);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || l] = or(o));
    }
    const i = (o, l) => f.forEach(o, (u, c) => a(u, c, l));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (f.isString(t) && (t = t.trim()) && !yh(t))
      i(ih(t), r);
    else if (f.isObject(t) && f.isSafeIterable(t)) {
      let o = /* @__PURE__ */ Object.create(null), l, u;
      for (const c of t) {
        if (!f.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        u = c[0], f.hasOwnProp(o, u) ? (l = o[u], o[u] = f.isArray(l) ? [...l, c[1]] : [l, c[1]]) : o[u] = c[1];
      }
      i(o, r);
    } else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ct(t), t) {
      const n = f.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return dh(s);
        if (f.isFunction(r))
          return r.call(this, s, n);
        if (f.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ct(t), t) {
      const n = f.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Jr(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(i) {
      if (i = Ct(i), i) {
        const o = f.findKey(n, i);
        o && (!r || Jr(n, n[o], o, r)) && (delete n[o], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Jr(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return f.forEach(this, (s, a) => {
      const i = f.findKey(n, a);
      if (i) {
        r[i] = or(s), delete r[a];
        return;
      }
      const o = t ? _h(a) : String(a).trim();
      o !== a && delete r[a], r[o] = or(s), n[o] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && f.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    const t = this.get("set-cookie");
    return f.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return ph(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[ws] = this[ws] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const o = Ct(i);
      n[o] || (gh(s, i), n[o] = !0);
    }
    return f.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
le.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(le.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
f.freezeMethods(le);
const gr = "[REDACTED ****]";
function wh(e) {
  if (f.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (f.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Sh(e, t) {
  const r = new Set(t.map((a) => String(a).toLowerCase())), n = [], s = (a) => {
    if (a === null || typeof a != "object" || f.isBuffer(a)) return a;
    if (n.indexOf(a) !== -1) return;
    a instanceof le && (a = a.toJSON()), n.push(a);
    let i;
    if (f.isArray(a))
      i = [], a.forEach((o, l) => {
        const u = s(o);
        f.isUndefined(u) || (i[l] = u);
      });
    else {
      if (!f.isPlainObject(a) && wh(a))
        return n.pop(), a;
      i = /* @__PURE__ */ Object.create(null);
      for (const [o, l] of Object.entries(a)) {
        const u = r.has(o.toLowerCase()) ? gr : s(l);
        f.isUndefined(u) || (i[o] = u);
      }
    }
    return n.pop(), i;
  };
  return s(e);
}
function Ss(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function Rh(e) {
  return e.errors.map((r) => {
    try {
      return r && r.message ? Ss(r.message) : Ss(r);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
let E = class ai extends Error {
  static from(t, r, n, s, a, i) {
    let o = t.message;
    !o && f.isArray(t.errors) && t.errors.length && (o = Rh(t));
    const l = new ai(o, r || t.code, n, s, a);
    return Object.defineProperty(l, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), l.name = t.name, t.status != null && l.status == null && (l.status = t.status), i && Object.assign(l, i), l;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, r, n, s, a) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), n && (this.config = n), s && (this.request = s), a && (this.response = a, this.status = a.status);
  }
  toJSON() {
    const t = this.config, r = t && f.hasOwnProp(t, "redact") ? t.redact : void 0, n = f.isArray(r) && r.length > 0 ? Sh(t, r) : f.toJSONObject(t);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: n,
      code: this.code,
      status: this.status
    };
  }
};
E.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
E.ERR_BAD_OPTION = "ERR_BAD_OPTION";
E.ECONNABORTED = "ECONNABORTED";
E.ETIMEDOUT = "ETIMEDOUT";
E.ECONNREFUSED = "ECONNREFUSED";
E.ERR_NETWORK = "ERR_NETWORK";
E.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
E.ERR_DEPRECATED = "ERR_DEPRECATED";
E.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
E.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
E.ERR_CANCELED = "ERR_CANCELED";
E.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
E.ERR_INVALID_URL = "ERR_INVALID_URL";
E.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const bh = null, ii = 100;
function cn(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function oi(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zr(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = oi(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Eh(e) {
  return f.isArray(e) && !e.some(cn);
}
const Oh = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Yr(e, t, r) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = f.toFlatObject(
    r,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(R, b) {
      return !f.isUndefined(b[R]);
    }
  );
  const n = r.metaTokens, s = r.visitor || O, a = r.dots, i = r.indexes, o = r.Blob || typeof Blob < "u" && Blob, l = r.maxDepth === void 0 ? ii : r.maxDepth, u = o && f.isSpecCompliantForm(t), c = [];
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(h) {
    if (h === null) return "";
    if (f.isDate(h))
      return h.toISOString();
    if (f.isBoolean(h))
      return h.toString();
    if (!u && f.isBlob(h))
      throw new E("Blob is not supported. Use a Buffer instead.");
    if (f.isArrayBuffer(h) || f.isTypedArray(h)) {
      if (u && typeof o == "function")
        return new o([h]);
      throw new E("Blob is not supported. Use a Buffer instead.", E.ERR_NOT_SUPPORT);
    }
    return h;
  }
  function p(h) {
    if (h > l)
      throw new E(
        "Object is too deeply nested (" + h + " levels). Max depth: " + l,
        E.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function S(h, R) {
    if (l === 1 / 0)
      return JSON.stringify(h);
    const b = [];
    return JSON.stringify(h, function(W, U) {
      if (!f.isObject(U))
        return U;
      for (; b.length && b[b.length - 1] !== this; )
        b.pop();
      return b.push(U), p(R + b.length - 1), U;
    });
  }
  function O(h, R, b) {
    let N = h;
    if (f.isReactNative(t) && f.isReactNativeBlob(h))
      return t.append(Zr(b, R, a), d(h)), !1;
    if (h && !b && typeof h == "object") {
      if (f.endsWith(R, "{}"))
        R = n ? R : R.slice(0, -2), h = S(h, 1);
      else if (f.isArray(h) && Eh(h) || (f.isFileList(h) || f.endsWith(R, "[]")) && (N = f.toArray(h)))
        return R = oi(R), N.forEach(function(U, Q) {
          !(f.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Zr([R], Q, a) : i === null ? R : R + "[]",
            d(U)
          );
        }), !1;
    }
    return cn(h) ? !0 : (t.append(Zr(b, R, a), d(h)), !1);
  }
  const T = Object.assign(Oh, {
    defaultVisitor: O,
    convertValue: d,
    isVisitable: cn
  });
  function _(h, R, b = 0) {
    if (!f.isUndefined(h)) {
      if (p(b), c.indexOf(h) !== -1)
        throw new Error("Circular reference detected in " + R.join("."));
      c.push(h), f.forEach(h, function(W, U) {
        (!(f.isUndefined(W) || W === null) && s.call(t, W, f.isString(U) ? U.trim() : U, R, T)) === !0 && _(W, R ? R.concat(U) : [U], b + 1);
      }), c.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Rs(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(n) {
    return t[n];
  });
}
function Zn(e, t) {
  this._pairs = [], e && Yr(e, this, t);
}
const li = Zn.prototype;
li.append = function(t, r) {
  this._pairs.push([t, r]);
};
li.toString = function(t) {
  const r = t ? (n) => t.call(this, n, Rs) : Rs;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function vh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ui(e, t, r) {
  if (!t)
    return e;
  e = e || "";
  const n = f.isFunction(r) ? {
    serialize: r
  } : r, s = f.getSafeProp(n, "encode") || vh, a = f.getSafeProp(n, "serialize");
  let i;
  if (a ? i = a(t, n) : i = f.isURLSearchParams(t) ? t.toString() : new Zn(t, n).toString(s), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class bs {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    f.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Kn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Dh = typeof URLSearchParams < "u" ? URLSearchParams : Zn, xh = typeof FormData < "u" ? FormData : null, Th = typeof Blob < "u" ? Blob : null, kh = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dh,
    FormData: xh,
    Blob: Th
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xn = typeof window < "u" && typeof document < "u", fn = typeof navigator == "object" && navigator || void 0, Ph = Xn && (!fn || ["ReactNative", "NativeScript", "NS"].indexOf(fn.product) < 0), Mh = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ch = Xn && window.location.href || "http://localhost", Nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xn,
  hasStandardBrowserEnv: Ph,
  hasStandardBrowserWebWorkerEnv: Mh,
  navigator: fn,
  origin: Ch
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...Nh,
  ...kh
};
function Ah(e, t) {
  return Yr(e, new ae.classes.URLSearchParams(), {
    visitor: function(r, n, s, a) {
      return ae.isNode && f.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Es = ii;
function ci(e) {
  if (e > Es)
    throw new E(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Es,
      E.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function Lh(e) {
  const t = [], r = /[^.[\]]+|\[([^.[\]]*)]/g;
  let n;
  for (; (n = r.exec(e)) !== null; )
    ci(t.length), t.push(n[0] === "[]" ? "" : n[1] || n[0]);
  return t;
}
function Yh(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function fi(e) {
  function t(r, n, s, a) {
    ci(a);
    let i = r[a++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), l = a >= r.length;
    return i = !i && f.isArray(s) ? s.length : i, l ? (f.hasOwnProp(s, i) ? s[i] = f.isArray(s[i]) ? s[i].concat(n) : [s[i], n] : s[i] = n, !o) : ((!f.hasOwnProp(s, i) || !f.isObject(s[i])) && (s[i] = []), t(r, n, s[i], a) && f.isArray(s[i]) && (s[i] = Yh(s[i])), !o);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const r = {};
    return f.forEachEntry(e, (n, s) => {
      t(Lh(n), s, r, 0);
    }), r;
  }
  return null;
}
const ft = (e, t) => e != null && f.hasOwnProp(e, t) ? e[t] : void 0;
function Fh(e, t, r) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const zt = {
  transitional: Kn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, r) {
      const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = f.isObject(t);
      if (a && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
        return s ? JSON.stringify(fi(t)) : t;
      if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
        return t;
      if (f.isArrayBufferView(t))
        return t.buffer;
      if (f.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let o;
      if (a) {
        const l = ft(this, "formSerializer");
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return Ah(t, l).toString();
        if ((o = f.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const u = ft(this, "env"), c = u && u.FormData;
          return Yr(
            o ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return a || s ? (r.setContentType("application/json", !1), Fh(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const r = ft(this, "transitional") || zt.transitional, n = r && r.forcedJSONParsing, s = ft(this, "responseType"), a = s === "json";
      if (f.isResponse(t) || f.isReadableStream(t))
        return t;
      if (t && f.isString(t) && (n && !s || a)) {
        const o = !(r && r.silentJSONParsing) && a;
        try {
          return JSON.parse(t, ft(this, "parseReviver"));
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError" ? E.from(l, E.ERR_BAD_RESPONSE, this, null, ft(this, "response")) : l;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
f.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  zt.headers[e] = {};
});
function Kr(e, t) {
  const r = this || zt, n = t || r, s = le.from(n.headers);
  let a = n.data;
  return f.forEach(e, function(o) {
    a = o.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function di(e) {
  return !!(e && e.__CANCEL__);
}
let Gt = class extends E {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, r, n) {
    super(t ?? "canceled", E.ERR_CANCELED, r, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function hi(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new E(
    "Request failed with status code " + r.status,
    r.status >= 400 && r.status < 500 ? E.ERR_BAD_REQUEST : E.ERR_BAD_RESPONSE,
    r.config,
    r.request,
    r
  ));
}
function Uh(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Ih(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = n[a];
    i || (i = u), r[s] = l, n[s] = u;
    let d = a, p = 0;
    for (; d !== s; )
      p += r[d++], d = d % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), u - i < t)
      return;
    const S = c && u - c;
    return S ? Math.round(p * 1e3 / S) : void 0;
  };
}
function Wh(e, t) {
  let r = 0, n = 1e3 / t, s, a;
  const i = (u, c = Date.now()) => {
    r = c, s = null, a && (clearTimeout(a), a = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - r;
    d >= n ? i(u, c) : (s = u, a || (a = setTimeout(() => {
      a = null, i(s);
    }, n - d)));
  }, () => s && i(s)];
}
const wr = (e, t, r = 3) => {
  let n = 0;
  const s = Ih(50, 250);
  return Wh((a) => {
    if (!a || typeof a.loaded != "number")
      return;
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, l = Math.max(0, o != null ? Math.min(i, o) : i), u = Math.max(0, l - n), c = s(u);
    n = Math.max(n, l);
    const d = {
      loaded: l,
      total: o,
      progress: o ? l / o : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && o ? (o - l) / c : void 0,
      event: a,
      lengthComputable: o != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, Os = (e, t) => {
  const r = e != null;
  return [
    (n) => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, vs = (e, t = f.asap) => (...r) => t(() => e(...r)), jh = ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, ae.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(ae.origin),
  ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent)
) : () => !0, Hh = ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, a, i) {
      if (typeof document > "u") return;
      const o = [`${e}=${encodeURIComponent(t)}`];
      f.isNumber(r) && o.push(`expires=${new Date(r).toUTCString()}`), f.isString(n) && o.push(`path=${n}`), f.isString(s) && o.push(`domain=${s}`), a === !0 && o.push("secure"), f.isString(i) && o.push(`SameSite=${i}`), document.cookie = o.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let r = 0; r < t.length; r++) {
        const n = t[r].replace(/^\s+/, ""), s = n.indexOf("=");
        if (s !== -1 && n.slice(0, s) === e)
          try {
            return decodeURIComponent(n.slice(s + 1));
          } catch {
            return n.slice(s + 1);
          }
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function $h(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Bh(e, t) {
  if (!t)
    return e;
  let r = e.length;
  for (; r > 0 && e.charCodeAt(r - 1) === 47; )
    r--;
  return e.slice(0, r) + "/" + t.replace(/^\/+/, "");
}
const qh = /^https?:(?!\/\/)/i, Vh = /[\t\n\r]/g;
function zh(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function Gh(e) {
  return zh(e).replace(Vh, "");
}
function Jh(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, r, n = "") => `${r}${n}${gr}`);
}
function Zh(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${gr}@`), r = t.indexOf("#"), s = (r === -1 ? t : t.slice(0, r)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${gr}`
  );
  return r === -1 ? s : `${s}#${Jh(t.slice(r + 1))}`;
}
function Ds(e, t) {
  if (typeof e == "string") {
    const r = Gh(e);
    if (qh.test(r))
      throw new E(
        `Invalid URL ${JSON.stringify(Zh(r))}: missing "//" after protocol`,
        E.ERR_INVALID_URL,
        t
      );
  }
}
function mi(e, t, r, n) {
  Ds(t, n);
  let s = !$h(t);
  return e && (s || r === !1) ? (Ds(e, n), Bh(e, t)) : t;
}
const xs = (e) => e instanceof le ? { ...e } : e, Kh = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
  Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  )
) : Object.keys(e);
function ot(e, t) {
  e = e || {}, t = t || {};
  const r = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(r, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function n(c, d, p, S) {
    return f.isPlainObject(c) && f.isPlainObject(d) ? f.merge.call({ caseless: S }, c, d) : f.isPlainObject(d) ? f.merge({}, d) : f.isArray(d) ? d.slice() : d;
  }
  function s(c, d, p, S) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(c))
        return n(void 0, c, p, S);
    } else return n(c, d, p, S);
  }
  function a(c, d) {
    if (!f.isUndefined(d))
      return n(void 0, d);
  }
  function i(c, d) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, d);
  }
  function o(c) {
    const d = f.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!f.isUndefined(d))
      if (f.isPlainObject(d)) {
        if (f.hasOwnProp(d, c))
          return d[c];
      } else
        return;
    const p = f.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (f.isPlainObject(p) && f.hasOwnProp(p, c))
      return p[c];
  }
  function l(c, d, p) {
    if (f.hasOwnProp(t, p))
      return n(c, d);
    if (f.hasOwnProp(e, p))
      return n(void 0, c);
  }
  const u = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, d, p) => s(xs(c), xs(d), p, !0)
  };
  return f.forEach(Kh({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const p = f.hasOwnProp(u, d) ? u[d] : s, S = f.hasOwnProp(e, d) ? e[d] : void 0, O = f.hasOwnProp(t, d) ? t[d] : void 0, T = p(S, O, d);
    f.isUndefined(T) && p !== l || (r[d] = T);
  }), f.hasOwnProp(t, "validateStatus") && f.isUndefined(t.validateStatus) && o("validateStatusUndefinedResolves") === !1 && (f.hasOwnProp(e, "validateStatus") ? r.validateStatus = n(void 0, e.validateStatus) : delete r.validateStatus), r;
}
const Xh = ["content-type", "content-length"];
function Qh(e, t, r) {
  if (r !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([n, s]) => {
    Xh.includes(n.toLowerCase()) && e.set(n, s);
  });
}
const em = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, r) => String.fromCharCode(parseInt(r, 16))
);
function pi(e) {
  const t = ot({}, e), r = (p) => f.hasOwnProp(t, p) ? t[p] : void 0, n = r("data");
  let s = r("withXSRFToken");
  const a = r("xsrfHeaderName"), i = r("xsrfCookieName");
  let o = r("headers");
  const l = r("auth"), u = r("baseURL"), c = r("allowAbsoluteUrls"), d = r("url");
  if (t.headers = o = le.from(o), t.url = ui(
    mi(u, d, c, t),
    r("params"),
    r("paramsSerializer")
  ), l) {
    const p = f.getSafeProp(l, "username") || "", S = f.getSafeProp(l, "password") || "";
    try {
      o.set(
        "Authorization",
        "Basic " + btoa(p + ":" + (S ? em(S) : ""))
      );
    } catch (O) {
      throw E.from(O, E.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (f.isFormData(n) && (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv || f.isReactNative(n) ? o.setContentType(void 0) : f.isFunction(n.getHeaders) && Qh(o, n.getHeaders(), r("formDataHeaderPolicy"))), ae.hasStandardBrowserEnv && (f.isFunction(s) && (s = s(t)), s === !0 || s == null && jh(t.url))) {
    const S = a && i && Hh.read(i);
    S && o.set(a, S);
  }
  return t;
}
const tm = typeof XMLHttpRequest < "u", rm = tm && function(e) {
  return new Promise(function(r, n) {
    const s = pi(e);
    let a = s.data;
    const i = le.from(s.headers).normalize();
    let { responseType: o, onUploadProgress: l, onDownloadProgress: u } = s, c, d, p, S, O;
    function T() {
      S && S(), O && O(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let _ = new XMLHttpRequest();
    _.open(s.method.toUpperCase(), s.url, !0), _.timeout = s.timeout;
    function h() {
      if (!_)
        return;
      const b = le.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), W = {
        data: !o || o === "text" || o === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: b,
        config: e,
        request: _
      };
      hi(
        function(Q) {
          r(Q), T();
        },
        function(Q) {
          n(Q), T();
        },
        W
      ), _ = null;
    }
    "onloadend" in _ ? _.onloadend = h : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.startsWith("file:")) || setTimeout(h);
    }, _.onabort = function() {
      _ && (n(new E("Request aborted", E.ECONNABORTED, e, _)), T(), _ = null);
    }, _.onerror = function(N) {
      const W = N && N.message ? N.message : "Network Error", U = new E(W, E.ERR_NETWORK, e, _);
      U.event = N || null, n(U), T(), _ = null;
    }, _.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const W = s.transitional || Kn;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), n(
        new E(
          N,
          W.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
          e,
          _
        )
      ), T(), _ = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in _ && f.forEach(si(i), function(N, W) {
      _.setRequestHeader(W, N);
    }), f.isUndefined(s.withCredentials) || (_.withCredentials = !!s.withCredentials), o && o !== "json" && (_.responseType = s.responseType), u && ([p, O] = wr(u, !0), _.addEventListener("progress", p)), l && _.upload && ([d, S] = wr(l), _.upload.addEventListener("progress", d), _.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (c = (b) => {
      _ && (n(!b || b.type ? new Gt(null, e, _) : b), _.abort(), T(), _ = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const R = Uh(s.url);
    if (R && !ae.protocols.includes(R)) {
      n(
        new E(
          "Unsupported protocol " + R + ":",
          E.ERR_BAD_REQUEST,
          e
        )
      ), T();
      return;
    }
    _.send(a || null);
  });
}, nm = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const r = new AbortController();
  let n = !1;
  const s = function(l) {
    if (!n) {
      n = !0, i();
      const u = l instanceof Error ? l : this.reason;
      r.abort(
        u instanceof E ? u : new Gt(u instanceof Error ? u.message : u)
      );
    }
  };
  let a = t && setTimeout(() => {
    a = null, s(new E(`timeout of ${t}ms exceeded`, E.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(s) : l.removeEventListener("abort", s);
    }), e = null);
  };
  e.forEach((l) => {
    if (!n) {
      if (l.aborted) {
        s.call(l);
        return;
      }
      l.addEventListener("abort", s, { once: !0 });
    }
  });
  const { signal: o } = r;
  return o.unsubscribe = () => f.asap(i), o;
}, sm = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, am = async function* (e, t) {
  for await (const r of im(e))
    yield* sm(r, t);
}, im = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ts = (e, t, r, n) => {
  const s = am(e, t);
  let a = 0, i, o = (l) => {
    i || (i = !0, n && n(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: u, value: c } = await s.next();
          if (u) {
            o(), l.close();
            return;
          }
          let d = c.byteLength;
          if (r) {
            let p = a += d;
            r(p);
          }
          l.enqueue(new Uint8Array(c));
        } catch (u) {
          throw o(u), u;
        }
      },
      cancel(l) {
        return o(l), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, ks = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, yi = (e, t, r) => t + 2 < r && ks(e.charCodeAt(t + 1)) && ks(e.charCodeAt(t + 2)), Ps = (e) => e <= 57 ? e - 48 : (e & 223) - 55, om = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, lm = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, um = (e) => {
  const t = Math.floor(e / 4), r = e % 4;
  return t * 3 + (r === 2 ? 1 : r === 3 ? 2 : 0);
}, cm = (e) => {
  const t = e.length;
  let r = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (r++, t > 1 && e.charCodeAt(t - 2) === 61 && r++), Math.floor((t - r) * 3 / 4);
}, fm = (e) => {
  const t = e.length;
  let r = 0, n = 0, s = !1;
  for (let a = 0; a < t; a++) {
    let i = e.charCodeAt(a);
    if (i === 37 && yi(e, a, t) && (i = Ps(e.charCodeAt(a + 1)) * 16 + Ps(e.charCodeAt(a + 2)), a += 2), !lm(i)) {
      if (i === 61) {
        n++;
        continue;
      }
      if (!om(i) || n > 0) {
        s = !0;
        continue;
      }
      r++;
    }
  }
  return s || n > 2 || n > 0 && (r + n) % 4 !== 0 || r % 4 === 1 ? cm(e) : um(r);
}, dm = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const r = e.indexOf(",");
  if (r < 0) return 0;
  const n = e.slice(5, r), s = e.slice(r + 1);
  if (/;base64/i.test(n))
    return t(s);
  let i = 0;
  for (let o = 0, l = s.length; o < l; o++) {
    const u = s.charCodeAt(o);
    if (u === 37 && yi(s, o, l))
      i += 1, o += 2;
    else if (u < 128)
      i += 1;
    else if (u < 2048)
      i += 2;
    else if (u >= 55296 && u <= 56319 && o + 1 < l) {
      const c = s.charCodeAt(o + 1);
      c >= 56320 && c <= 57343 ? (i += 4, o++) : i += 3;
    } else
      i += 3;
  }
  return i;
};
function hm(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return dm(
    t === -1 ? e : e.slice(0, t),
    fm
  );
}
const Qn = "1.19.0", Ms = 64 * 1024, { isFunction: er } = f, mm = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, r) => String.fromCharCode(parseInt(r, 16))
), Cs = (e) => {
  if (!f.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Ns = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, pm = (e) => {
  const t = e.indexOf("://");
  let r = e;
  return t !== -1 && (r = r.slice(t + 3)), r.includes("@") || r.includes(":");
}, ym = (e) => {
  const t = f.global !== void 0 && f.global !== null ? f.global : globalThis, { ReadableStream: r, TextEncoder: n } = t;
  e = f.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: s, Request: a, Response: i } = e, o = s ? er(s) : typeof fetch == "function", l = er(a), u = er(i);
  if (!o)
    return !1;
  const c = o && er(r), d = o && (typeof n == "function" ? /* @__PURE__ */ ((h) => (R) => h.encode(R))(new n()) : async (h) => new Uint8Array(await new a(h).arrayBuffer())), p = l && c && Ns(() => {
    let h = !1;
    const R = new a(ae.origin, {
      body: new r(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }), b = R.headers.has("Content-Type");
    return R.body != null && R.body.cancel(), h && !b;
  }), S = u && c && Ns(() => f.isReadableStream(new i("").body)), O = {
    stream: S && ((h) => h.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !O[h] && (O[h] = (R, b) => {
      let N = R && R[h];
      if (N)
        return N.call(R);
      throw new E(
        `Response type '${h}' is not supported`,
        E.ERR_NOT_SUPPORT,
        b
      );
    });
  });
  const T = async (h) => {
    if (h == null)
      return 0;
    if (f.isBlob(h))
      return h.size;
    if (f.isSpecCompliantForm(h))
      return (await new a(ae.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(h) || f.isArrayBuffer(h))
      return h.byteLength;
    if (f.isURLSearchParams(h) && (h = h + ""), f.isString(h))
      return (await d(h)).byteLength;
  }, _ = async (h, R) => {
    const b = f.toFiniteNumber(h.getContentLength());
    return b ?? T(R);
  };
  return async (h) => {
    let {
      url: R,
      method: b,
      data: N,
      signal: W,
      cancelToken: U,
      timeout: Q,
      onDownloadProgress: v,
      onUploadProgress: D,
      responseType: P,
      headers: x,
      withCredentials: C = "same-origin",
      fetchOptions: ee,
      maxContentLength: V,
      maxBodyLength: L
    } = pi(h);
    const ge = f.isNumber(V) && V > -1, Ae = f.isNumber(L) && L > -1, Jt = (H) => f.hasOwnProp(h, H) ? h[H] : void 0;
    let vt = s || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let we = nm(
      [W, U && U.toAbortSignal()],
      Q
    ), m = null;
    const A = we && we.unsubscribe && (() => {
      we.unsubscribe();
    });
    let z, J = null;
    const Ke = () => new E(
      "Request body larger than maxBodyLength limit",
      E.ERR_BAD_REQUEST,
      h,
      m
    );
    try {
      let H;
      const $ = Jt("auth");
      if ($) {
        const Y = f.getSafeProp($, "username") || "", fe = f.getSafeProp($, "password") || "";
        H = {
          username: Y,
          password: fe
        };
      }
      if (pm(R)) {
        const Y = new URL(R, ae.origin);
        if (!H && (Y.username || Y.password)) {
          const fe = Cs(Y.username), Ve = Cs(Y.password);
          H = {
            username: fe,
            password: Ve
          };
        }
        (Y.username || Y.password) && (Y.username = "", Y.password = "", R = Y.href);
      }
      if (H && (x.delete("authorization"), x.set(
        "Authorization",
        "Basic " + btoa(mm((H.username || "") + ":" + (H.password || "")))
      )), ge && typeof R == "string" && R.startsWith("data:") && hm(R) > V)
        throw new E(
          "maxContentLength size of " + V + " exceeded",
          E.ERR_BAD_RESPONSE,
          h,
          m
        );
      if (Ae && b !== "get" && b !== "head") {
        const Y = await T(N);
        if (typeof Y == "number" && isFinite(Y) && (z = Y, Y > L))
          throw Ke();
      }
      const Se = Ae && (f.isReadableStream(N) || f.isStream(N)), ut = (Y, fe, Ve) => Ts(
        Y,
        Ms,
        (Xe) => {
          if (Ae && Xe > L)
            throw J = Ke();
          fe && fe(Xe);
        },
        Ve
      );
      if (p && b !== "get" && b !== "head" && (D || Se)) {
        if (z = z ?? await _(x, N), z !== 0 || Se) {
          let Y = new a(R, {
            method: "POST",
            body: N,
            duplex: "half"
          }), fe;
          if (f.isFormData(N) && (fe = Y.headers.get("content-type")) && x.setContentType(fe), Y.body) {
            const [Ve, Xe] = D && Os(
              z,
              wr(vs(D))
            ) || [];
            N = ut(Y.body, Ve, Xe);
          }
        }
      } else if (Se && !l && c && b !== "get" && b !== "head")
        N = ut(N);
      else if (Se && l && !p && b !== "get" && b !== "head")
        throw new E(
          "Stream request bodies are not supported by the current fetch implementation",
          E.ERR_NOT_SUPPORT,
          h,
          m
        );
      f.isString(C) || (C = C ? "include" : "omit");
      const Ur = l && "credentials" in a.prototype;
      if (f.isFormData(N)) {
        const Y = x.getContentType();
        Y && /^multipart\/form-data/i.test(Y) && !/boundary=/i.test(Y) && x.delete("content-type");
      }
      x.set("User-Agent", "axios/" + Qn, !1);
      const ts = {
        ...ee,
        signal: we,
        method: b.toUpperCase(),
        headers: si(x.normalize()),
        body: N,
        duplex: "half",
        credentials: Ur ? C : void 0
      };
      m = l && new a(R, ts);
      let Le = await (l ? vt(m, ee) : vt(R, ts));
      const rs = le.from(Le.headers);
      if (ge) {
        const Y = f.toFiniteNumber(rs.getContentLength());
        if (Y != null && Y > V)
          throw new E(
            "maxContentLength size of " + V + " exceeded",
            E.ERR_BAD_RESPONSE,
            h,
            m
          );
      }
      const Ir = S && (P === "stream" || P === "response");
      if (S && Le.body && (v || ge || Ir && A)) {
        const Y = {};
        ["status", "statusText", "headers"].forEach((Dt) => {
          Y[Dt] = Le[Dt];
        });
        const fe = f.toFiniteNumber(rs.getContentLength()), [Ve, Xe] = v && Os(
          fe,
          wr(vs(v), !0)
        ) || [];
        let ns = 0;
        const Oi = (Dt) => {
          if (ge && (ns = Dt, ns > V))
            throw new E(
              "maxContentLength size of " + V + " exceeded",
              E.ERR_BAD_RESPONSE,
              h,
              m
            );
          Ve && Ve(Dt);
        };
        Le = new i(
          Ts(Le.body, Ms, Oi, () => {
            Xe && Xe(), A && A();
          }),
          Y
        );
      }
      P = P || "text";
      let Ye = await O[f.findKey(O, P) || "text"](
        Le,
        h
      );
      if (ge && !S && !Ir) {
        let Y;
        if (Ye != null && (typeof Ye.byteLength == "number" ? Y = Ye.byteLength : typeof Ye.size == "number" ? Y = Ye.size : typeof Ye == "string" && (Y = typeof n == "function" ? new n().encode(Ye).byteLength : Ye.length)), typeof Y == "number" && Y > V)
          throw new E(
            "maxContentLength size of " + V + " exceeded",
            E.ERR_BAD_RESPONSE,
            h,
            m
          );
      }
      return !Ir && A && A(), await new Promise((Y, fe) => {
        hi(Y, fe, {
          data: Ye,
          headers: le.from(Le.headers),
          status: Le.status,
          statusText: Le.statusText,
          config: h,
          request: m
        });
      });
    } catch (H) {
      if (A && A(), we && we.aborted && we.reason instanceof E) {
        const $ = we.reason;
        throw $.config = h, m && ($.request = m), H !== $ && Object.defineProperty($, "cause", {
          __proto__: null,
          value: H,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), $;
      }
      if (J)
        throw m && !J.request && (J.request = m), J;
      if (H instanceof E)
        throw m && !H.request && (H.request = m), H;
      if (H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message)) {
        const $ = new E(
          "Network Error",
          E.ERR_NETWORK,
          h,
          m,
          H && H.response
        );
        throw Object.defineProperty($, "cause", {
          __proto__: null,
          value: H.cause || H,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), $;
      }
      throw E.from(H, H && H.code, h, m, H && H.response);
    }
  };
}, _m = /* @__PURE__ */ new Map(), _i = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: s } = t, a = [n, s, r];
  let i = a.length, o = i, l, u, c = _m;
  for (; o--; )
    l = a[o], u = c.get(l), u === void 0 && c.set(l, u = o ? /* @__PURE__ */ new Map() : ym(t)), c = u;
  return u;
};
_i();
const es = {
  http: bh,
  xhr: rm,
  fetch: {
    get: _i
  }
};
f.forEach(es, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const As = (e) => `- ${e}`, gm = (e) => f.isFunction(e) || e === null || e === !1;
function wm(e, t) {
  e = f.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, s;
  const a = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let o;
    if (s = n, !gm(n) && (s = es[(o = String(n)).toLowerCase()], s === void 0))
      throw new E(`Unknown adapter '${o}'`);
    if (s && (f.isFunction(s) || (s = s.get(t))))
      break;
    a[o || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(a).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let o = r ? i.length > 1 ? `since :
` + i.map(As).join(`
`) : " " + As(i[0]) : "as no adapter specified";
    throw new E(
      "There is no suitable adapter to dispatch the request " + o,
      E.ERR_NOT_SUPPORT
    );
  }
  return s;
}
const gi = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: wm,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: es
};
function Xr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Gt(null, e);
}
function Qr(e) {
  return Xr(e), e.headers = le.from(e.headers), e.data = Kr.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gi.getAdapter(e.adapter || zt.adapter, e)(e).then(
    function(n) {
      Xr(e), e.response = n;
      try {
        n.data = Kr.call(e, e.transformResponse, n);
      } finally {
        delete e.response;
      }
      return n.headers = le.from(n.headers), n;
    },
    function(n) {
      if (!di(n) && (Xr(e), n && n.response)) {
        e.response = n.response;
        try {
          n.response.data = Kr.call(
            e,
            e.transformResponse,
            n.response
          );
        } finally {
          delete e.response;
        }
        n.response.headers = le.from(n.response.headers);
      }
      return Promise.reject(n);
    }
  );
}
const Fr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Fr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ls = {};
Fr.transitional = function(t, r, n) {
  function s(a, i) {
    return "[Axios v" + Qn + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, o) => {
    if (t === !1)
      throw new E(
        s(i, " has been removed" + (r ? " in " + r : "")),
        E.ERR_DEPRECATED
      );
    return r && !Ls[i] && (Ls[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, o) : !0;
  };
};
Fr.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Sm(e, t, r) {
  if (typeof e != "object" || e === null)
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], i = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (i) {
      const o = e[a], l = o === void 0 || i(o, a, e);
      if (l !== !0)
        throw new E(
          "option " + a + " must be " + l,
          E.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (r !== !0)
      throw new E("Unknown option " + a, E.ERR_BAD_OPTION);
  }
}
const lr = {
  assertOptions: Sm,
  validators: Fr
}, ie = lr.validators;
let st = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new bs(),
      response: new bs()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = (() => {
          if (!s.stack)
            return "";
          const i = s.stack.indexOf(`
`);
          return i === -1 ? "" : s.stack.slice(i + 1);
        })();
        try {
          if (!n.stack)
            n.stack = a;
          else if (a) {
            const i = a.indexOf(`
`), o = i === -1 ? -1 : a.indexOf(`
`, i + 1), l = o === -1 ? "" : a.slice(o + 1);
            String(n.stack).endsWith(l) || (n.stack += `
` + a);
          }
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ot(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && lr.assertOptions(
      n,
      {
        silentJSONParsing: ie.transitional(ie.boolean),
        forcedJSONParsing: ie.transitional(ie.boolean),
        clarifyTimeoutError: ie.transitional(ie.boolean),
        legacyInterceptorReqResOrdering: ie.transitional(ie.boolean),
        advertiseZstdAcceptEncoding: ie.transitional(ie.boolean),
        validateStatusUndefinedResolves: ie.transitional(ie.boolean)
      },
      !1
    ), s != null && (f.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : lr.assertOptions(
      s,
      {
        encode: ie.function,
        serialize: ie.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), lr.assertOptions(
      r,
      {
        baseUrl: ie.spelling("baseURL"),
        withXsrfToken: ie.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && f.merge(a.common, a[r.method]);
    a && f.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (O) => {
      delete a[O];
    }), r.headers = le.concat(i, a);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(T) {
      if (typeof T.runWhen == "function" && T.runWhen(r) === !1)
        return;
      l = l && T.synchronous;
      const _ = r.transitional || Kn;
      _ && _.legacyInterceptorReqResOrdering ? o.unshift(T.fulfilled, T.rejected) : o.push(T.fulfilled, T.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(T) {
      u.push(T.fulfilled, T.rejected);
    });
    let c, d = 0, p;
    if (!l) {
      const O = [Qr.bind(this), void 0];
      for (O.unshift(...o), O.push(...u), p = O.length, c = Promise.resolve(r); d < p; )
        c = c.then(O[d++], O[d++]);
      return c;
    }
    p = o.length;
    let S = r;
    for (; d < p; ) {
      const O = o[d++], T = o[d++];
      try {
        S = O ? O(S) : S;
      } catch (_) {
        if (!T) {
          c = Promise.reject(_);
          break;
        }
        try {
          const h = T.call(this, _);
          f.isThenable(h) && (c = Promise.resolve(h).then(
            () => Qr.call(this, S)
          ));
        } catch (h) {
          c = Promise.reject(h);
        }
        break;
      }
    }
    if (!c)
      try {
        c = Qr.call(this, S);
      } catch (O) {
        c = Promise.reject(O);
      }
    for (d = 0, p = u.length; d < p; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = ot(this.defaults, t);
    const r = mi(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return ui(r, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  st.prototype[t] = function(r, n) {
    return this.request(
      ot(n || {}, {
        method: t,
        url: r,
        data: n && f.hasOwnProp(n, "data") ? n.data : void 0
      })
    );
  };
});
f.forEach(["post", "put", "patch", "query"], function(t) {
  function r(n) {
    return function(a, i, o) {
      return this.request(
        ot(o || {}, {
          method: t,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: i
        })
      );
    };
  }
  st.prototype[t] = r(), t !== "query" && (st.prototype[t + "Form"] = r(!0));
});
let Rm = class wi {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((o) => {
        n.subscribe(o), a = o;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, t(function(a, i, o) {
      n.reason || (n.reason = new Gt(a, i, o), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new wi(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function bm(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Em(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const dn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(dn).forEach(([e, t]) => {
  dn[t] = e;
});
function Si(e) {
  const t = new st(e), r = Ja(st.prototype.request, t);
  return f.extend(r, st.prototype, t, { allOwnKeys: !0 }), f.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Si(ot(e, s));
  }, r;
}
const re = Si(zt);
re.Axios = st;
re.CanceledError = Gt;
re.CancelToken = Rm;
re.isCancel = di;
re.VERSION = Qn;
re.toFormData = Yr;
re.AxiosError = E;
re.Cancel = re.CanceledError;
re.all = function(t) {
  return Promise.all(t);
};
re.spread = bm;
re.isAxiosError = Em;
re.mergeConfig = ot;
re.AxiosHeaders = le;
re.formToJSON = (e) => fi(f.isHTMLForm(e) ? new FormData(e) : e);
re.getAdapter = gi.getAdapter;
re.HttpStatusCode = dn;
re.default = re;
const {
  Axios: qm,
  AxiosError: Vm,
  CanceledError: zm,
  isCancel: Gm,
  CancelToken: Jm,
  VERSION: Zm,
  all: Km,
  Cancel: Xm,
  isAxiosError: Qm,
  spread: ep,
  toFormData: tp,
  AxiosHeaders: rp,
  HttpStatusCode: np,
  formToJSON: sp,
  getAdapter: ap,
  mergeConfig: ip,
  create: op
} = re, Om = window.env.API_BASE_URL;
let dt;
const ur = re.create({
  baseURL: Om,
  headers: {
    "Content-Type": "application/json"
  }
});
ur.interceptors.request.use((e) => {
  try {
    if (!dt) {
      const r = window.localStorage.getItem("user");
      r && (dt = JSON.parse(r));
    }
    if (e.url == "login" && (dt = null), dt) {
      const r = dt.token;
      r && (e.headers.Authorization = "Bearer " + r, e.url == "logout" && (dt = null));
    }
  } catch (r) {
    console.log(r);
  }
  const t = document.querySelector('meta[name="csrf-token"]');
  if (t) {
    const r = t.getAttribute("content");
    r && (e.headers["X-CSRF-TOKEN"] = r);
  }
  return e;
});
const Ri = Ee.createContext({}), vm = () => Ee.useContext(Ri), lp = ({ children: e }) => {
  const [t, r] = Ee.useState({});
  return /* @__PURE__ */ nt.jsx(
    Ri.Provider,
    {
      value: {
        notificationData: t,
        setNotificationData: r
      },
      children: e
    }
  );
}, bi = Ee.createContext(
  {}
), Dm = () => Ee.useContext(bi), up = ({
  children: e
}) => {
  const { logout: t } = Ga(), { setNotificationData: r } = vm(), [n, s] = Ee.useState([]), [a, i] = Ee.useState([]), o = (v) => {
    const D = O(v.key);
    return D.path = v.path, D.pageSize = v.pageSize ?? 0, D.queryText = v.queryText ?? "", D.onSuccess = v.onSuccess, D;
  }, l = () => {
    i(Object.assign([], a));
  }, u = () => {
    s(Object.assign([], n));
  }, c = (v, D, P = !0, x = !0) => {
    let C = "";
    D = D.response, !D || !D.data || D.data instanceof String ? C = "Unhandled server exception." : D.data.message ? D.data.message.includes("Unauthenticated") ? (C = "Session has expired. Please login again.", N(), t()) : C = "Unhandled server exception." : C = D.data.error || "Unhandled server exception.", v.isLoading = !1, v.isDone = !0, C instanceof Object ? v.errors = C : (v.errorMessage = C, D && x && r({
      show_notification: !0,
      error_title: D.data.error_title,
      error_message: C
    })), P ? (v.data = [], u()) : l();
  }, d = (v) => {
    v.isDone = !1, p([v]);
  }, p = (v, D = !0) => {
    for (const P of v) {
      const x = O(P.key);
      if (x.path = P.path, x.onSuccess = P.onSuccess, !D && (x.isLoading || x.isDone))
        continue;
      if (!x.path) {
        setTimeout(() => {
          x.data = [], u();
        }, 500);
        continue;
      }
      const ee = x.path.includes("?") ? "&" : "?";
      x.queryText.length >= 2 ? x.pathWithParams = `${x.path}${ee}query_text=${x.queryText}` : x.pageSize ? x.pathWithParams = `${x.path}${ee}page_size=${x.pageSize}&page=${x.currentPage}` : x.pathWithParams = x.path, x.isLoading = !0, u(), ur.get(x.pathWithParams).then((V) => {
        if (!V.data) {
          c(x, V);
          return;
        }
        let L = V.data.data;
        L instanceof Object && L.current_page ? (x.isPaginated = !0, x.currentPage = L.current_page, x.lastPage = L.last_page, x.total = L.total, x.from = L.from, L = L.data) : L instanceof Object && L.data ? (x.isPaginated = !1, x.total = L.total, L = L.data, x.currentPage = 0, x.lastPage = 1) : (x.isPaginated = !1, x.currentPage = 0, x.lastPage = 1), L instanceof Array ? (x.rawData = L, x.data = x.rawData) : x.singleData = L, x.isLoading = !1, x.isDone = !0, x.onSuccess && x.onSuccess(L), u();
      }).catch((V) => {
        c(x, V);
      });
    }
  }, S = (v, D) => {
    let P = v.find((x) => x.key == D);
    return P || (P = {
      key: D,
      path: "",
      pathWithParams: "",
      isLoading: !1,
      isDone: !1,
      queryText: "",
      rawData: [],
      data: [],
      singleData: null,
      postData: { id: 0 },
      inputRefs: {},
      errors: null,
      errorMessage: "",
      onSuccess: null,
      isPaginated: !1,
      currentPage: 0,
      lastPage: 1,
      pageSize: 0,
      total: 0,
      from: 0
    }, v.push(P)), P;
  }, O = (v) => S(n, v), T = (v, D, P) => {
    const x = O(v), C = x.rawData, ee = C.links ? C.data : C;
    D = D.toLowerCase();
    let V = ee.filter((L) => {
      let ge = !1;
      return P.forEach((Ae) => {
        if (L[Ae] && L[Ae].toLowerCase().includes(D))
          return ge = !0, !0;
      }), ge;
    });
    if (Object.prototype.hasOwnProperty.call(C, "links")) {
      const L = JSON.parse(JSON.stringify(C));
      L.data = V, V = L;
    }
    x.data = V, u();
  }, _ = (v) => S(a, v), h = (v) => {
    const D = _(v.key);
    if (D.isLoading) {
      console.warn(
        `Request ${v.key} is already in progress, ignoring duplicate submission`
      );
      return;
    }
    D.path = v.path, D.isLoading = !0, D.errorMessage = null, D.errors = null, l();
    const P = D.postData;
    v.extraParameters && Object.keys(v.extraParameters).forEach((C) => {
      P[C] = v.extraParameters[C];
    });
    const x = [];
    Object.keys(P).forEach((C) => {
      if (C.endsWith("_data-date")) {
        const ee = C.replace("_data-date", ""), V = C, L = ee + "_data-time";
        P[V] && (P[L] ? (P[ee] = P[V] + " " + P[L], P[ee] = Ac(
          P[ee]
        )) : P[ee] = Lc(P[V])), x.push(V), x.push(L);
      }
    }), x.forEach(function(C) {
      delete P[C];
    }), ur.post(v.path, P).then((C) => {
      D.data = [], D.isLoading = !1, D.isDone = !0, l(), D.onSuccess && D.onSuccess(C.data.data), v.onSuccess && v.onSuccess(C.data.data, P), v.showToast !== !1 && r({
        show_notification: !0,
        success_title: C.data.success_title,
        success_message: C.data.success_message ? C.data.success_message : "Successfully saved."
      });
    }).catch((C) => {
      if (c(
        D,
        C,
        !1,
        v.showErrorToast ?? !0
      ), v.onError) {
        const ee = C && C.response && C.response.data && C.response.data.error;
        v.onError(ee);
      }
    });
  }, R = (v) => {
    const D = {
      key: v.key,
      path: v.path,
      pathWithParams: v.path,
      isLoading: !0,
      isDone: !1,
      data: [],
      errors: null,
      errorMessage: null
    };
    ur.delete(v.path, { data: v.data }).then((P) => {
      D.isLoading = !1, D.isDone = !0, v.onSuccess && v.onSuccess(P.data.data), v.showToast !== !1 && r({
        show_notification: !0,
        success_title: P.data.success_title,
        success_message: P.data.success_message ? P.data.success_message : "Successfully deleted."
      });
    }).catch((P) => {
      if (c(
        D,
        P,
        !1,
        v.showErrorToast ?? !0
      ), v.onError) {
        const x = P && P.response && P.response.data && P.response.data.error;
        v.onError(x);
      }
    });
  }, b = (v, D) => {
    const P = _(v).errors;
    return P ? (D.endsWith("_data-date") ? D = v.replace("_data-date", "") : D.endsWith("_data-time") && (D = v.replace("_data-time", "")), P[D]) : !1;
  }, N = () => {
    s([]), i([]);
  }, W = (v) => {
    const D = n.findIndex((P) => P.key === v);
    D > -1 && n.splice(D, 1);
  }, U = (v) => {
    const D = a.findIndex((P) => P.key === v);
    D > -1 && (a.splice(D, 1), l());
  }, Q = (v) => _(v).postData.id == 0;
  return /* @__PURE__ */ nt.jsx(
    bi.Provider,
    {
      value: {
        fetchRequest: d,
        fetchRequests: p,
        submitPostRequest: h,
        submitDeleteRequest: R,
        createRequest: o,
        getRequest: O,
        getPostRequest: _,
        getPostRequestErrorProperty: b,
        notifyRequests: u,
        notifyPostRequests: l,
        isForCreation: Q,
        filterRequestData: T,
        clearRequest: W,
        clearPostRequest: U,
        clearRequests: N
      },
      children: e
    }
  );
}, Ei = Ee.createContext({}), cp = () => Ee.useContext(Ei), fp = ({ children: e }) => {
  const { clearPostRequest: t } = Dm(), [r, n] = Ee.useState([]), s = (o) => r.indexOf(o) > -1, a = (o) => {
    s(o) || (r.push(o), n(Object.assign([], r)));
  }, i = (o) => {
    s(o) && (t(o), r.splice(r.indexOf(o), 1), n(Object.assign([], r)));
  };
  return /* @__PURE__ */ nt.jsx(
    Ei.Provider,
    {
      value: {
        isModalOpen: s,
        openModal: a,
        closeModal: i
      },
      children: e
    }
  );
}, dp = (e) => {
  const { authUser: t } = Ga();
  if (!t)
    return /* @__PURE__ */ nt.jsx(Vr, { to: "/" });
  if (e.authorizedRole != null && e.authorizedRole != t.role_id)
    return /* @__PURE__ */ nt.jsx(Vr, { to: "/not-authorized" });
  if (e.authorizedRoles != null) {
    let r = !1;
    if (e.authorizedRoles.forEach((n) => {
      if (n == t.role_id)
        return r = !0, !0;
    }), !r)
      return /* @__PURE__ */ nt.jsx(Vr, { to: "/not-authorized" });
  }
  return e.children;
};
export {
  jm as AuthProvider,
  fp as ModalProvider,
  lp as NotificationProvider,
  dp as ProtectedRoute,
  up as RequestProvider,
  Im as convertDMStoDecimal,
  Wm as convertDecimaltoDMS,
  Mc as defaultDateFormat,
  Pc as defaultDateTimeFormat,
  Cc as defaultTimeFormat,
  km as formatDate,
  Tm as formatDateTime,
  Um as formatDecimal,
  Mm as formatIsoDate,
  Pm as formatIsoDateTime,
  Cm as formatIsoDateTimeMilli,
  Nm as formatIsoTime,
  Fm as formatLocalIsoDate,
  Ym as formatLocalIsoDateTime,
  Yc as formatNumber,
  Am as formatTime,
  Lc as formatUtcIsoDate,
  Lm as formatUtcIsoDateTime,
  Ac as formatUtcIsoDateTimeMilli,
  Yn as isoDateFormat,
  Ln as isoDateTimeFormat,
  xa as isoDateTimeMilliFormat,
  Nc as isoTimeFormat,
  Ga as useAuthContext,
  cp as useModalContext,
  vm as useNotificationContext,
  Dm as useRequestContext
};
