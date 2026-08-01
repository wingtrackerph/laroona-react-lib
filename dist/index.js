import ge, { useState as Sa, createContext as ba, useMemo as Oa, useContext as Ra } from "react";
import { Navigate as gr } from "react-router-dom";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Zn;
function y() {
  return Zn.apply(null, arguments);
}
function Da(e) {
  Zn = e;
}
function Se(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ge(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function j(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function jr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (j(e, t))
      return !1;
  return !0;
}
function ie(e) {
  return e === void 0;
}
function Fe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Mt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Xn(e, t) {
  var r = [], n, s = e.length;
  for (n = 0; n < s; ++n)
    r.push(t(e[n], n));
  return r;
}
function We(e, t) {
  for (var r in t)
    j(t, r) && (e[r] = t[r]);
  return j(t, "toString") && (e.toString = t.toString), j(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Ee(e, t, r, n) {
  return Ss(e, t, r, n, !0).utc();
}
function Ea() {
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
function A(e) {
  return e._pf == null && (e._pf = Ea()), e._pf;
}
var Pr;
Array.prototype.some ? Pr = Array.prototype.some : Pr = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function Hr(e) {
  var t = null, r = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = A(e), r = Pr.call(t.parsedDateParts, function(s) {
    return s != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function nr(e) {
  var t = Ee(NaN);
  return e != null ? We(A(t), e) : A(t).userInvalidated = !0, t;
}
var On = y.momentProperties = [], Sr = !1;
function qr(e, t) {
  var r, n, s, a = On.length;
  if (ie(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ie(t._i) || (e._i = t._i), ie(t._f) || (e._f = t._f), ie(t._l) || (e._l = t._l), ie(t._strict) || (e._strict = t._strict), ie(t._tzm) || (e._tzm = t._tzm), ie(t._isUTC) || (e._isUTC = t._isUTC), ie(t._offset) || (e._offset = t._offset), ie(t._pf) || (e._pf = A(t)), ie(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      n = On[r], s = t[n], ie(s) || (e[n] = s);
  return e;
}
function Pt(e) {
  qr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Sr === !1 && (Sr = !0, y.updateOffset(this), Sr = !1);
}
function be(e) {
  return e instanceof Pt || e != null && e._isAMomentObject != null;
}
function Kn(e) {
  y.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function de(e, t) {
  var r = !0;
  return We(function() {
    if (y.deprecationHandler != null && y.deprecationHandler(null, e), r) {
      var n = [], s, a, i, o = arguments.length;
      for (a = 0; a < o; a++) {
        if (s = "", typeof arguments[a] == "object") {
          s += `
[` + a + "] ";
          for (i in arguments[0])
            j(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[a];
        n.push(s);
      }
      Kn(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Rn = {};
function Qn(e, t) {
  y.deprecationHandler != null && y.deprecationHandler(e, t), Rn[e] || (Kn(t), Rn[e] = !0);
}
y.suppressDeprecationWarnings = !1;
y.deprecationHandler = null;
function Te(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ta(e) {
  var t, r;
  for (r in e)
    j(e, r) && (t = e[r], Te(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function vr(e, t) {
  var r = We({}, e), n;
  for (n in t)
    j(t, n) && (Ge(e[n]) && Ge(t[n]) ? (r[n] = {}, We(r[n], e[n]), We(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    j(e, n) && !j(t, n) && Ge(e[n]) && (r[n] = We({}, r[n]));
  return r;
}
function Br(e) {
  e != null && this.set(e);
}
var Ar;
Object.keys ? Ar = Object.keys : Ar = function(e) {
  var t, r = [];
  for (t in e)
    j(e, t) && r.push(t);
  return r;
};
var ka = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function xa(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Te(n) ? n.call(t, r) : n;
}
function De(e, t, r) {
  var n = "" + Math.abs(e), s = t - n.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
}
var Vr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ut = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, br = {}, ot = {};
function E(e, t, r, n) {
  var s = n;
  typeof n == "string" && (s = function() {
    return this[n]();
  }), e && (ot[e] = s), t && (ot[t[0]] = function() {
    return De(s.apply(this, arguments), t[1], t[2]);
  }), r && (ot[r] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Ma(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Pa(e) {
  var t = e.match(Vr), r, n;
  for (r = 0, n = t.length; r < n; r++)
    ot[t[r]] ? t[r] = ot[t[r]] : t[r] = Ma(t[r]);
  return function(s) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += Te(t[i]) ? t[i].call(s, e) : t[i];
    return a;
  };
}
function Ht(e, t) {
  return e.isValid() ? (t = es(t, e.localeData()), br[t] = br[t] || Pa(t), br[t](e)) : e.localeData().invalidDate();
}
function es(e, t) {
  var r = 5;
  function n(s) {
    return t.longDateFormat(s) || s;
  }
  for (Ut.lastIndex = 0; r >= 0 && Ut.test(e); )
    e = e.replace(
      Ut,
      n
    ), Ut.lastIndex = 0, r -= 1;
  return e;
}
var va = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Aa(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Vr).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var Na = "Invalid date";
function Ya() {
  return this._invalidDate;
}
var Ca = "%d", Fa = /\d{1,2}/;
function La(e) {
  return this._ordinal.replace("%d", e);
}
var Ua = {
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
function Ia(e, t, r, n) {
  var s = this._relativeTime[r];
  return Te(s) ? s(e, t, r, n) : s.replace(/%d/i, e);
}
function Wa(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Te(r) ? r(t) : r.replace(/%s/i, t);
}
var Dn = {
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
function he(e) {
  return typeof e == "string" ? Dn[e] || Dn[e.toLowerCase()] : void 0;
}
function $r(e) {
  var t = {}, r, n;
  for (n in e)
    j(e, n) && (r = he(n), r && (t[r] = e[n]));
  return t;
}
var ja = {
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
function Ha(e) {
  var t = [], r;
  for (r in e)
    j(e, r) && t.push({ unit: r, priority: ja[r] });
  return t.sort(function(n, s) {
    return n.priority - s.priority;
  }), t;
}
var ts = /\d/, ue = /\d\d/, rs = /\d{3}/, zr = /\d{4}/, sr = /[+-]?\d{6}/, J = /\d\d?/, ns = /\d\d\d\d?/, ss = /\d\d\d\d\d\d?/, ar = /\d{1,3}/, Gr = /\d{1,4}/, ir = /[+-]?\d{1,6}/, ft = /\d+/, or = /[+-]?\d+/, qa = /Z|[+-]\d\d:?\d\d/gi, lr = /Z|[+-]\d\d(?::?\d\d)?/gi, Ba = /[+-]?\d+(\.\d{1,3})?/, vt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, dt = /^[1-9]\d?/, Jr = /^([1-9]\d|\d)/, Jt;
Jt = {};
function g(e, t, r) {
  Jt[e] = Te(t) ? t : function(n, s) {
    return n && r ? r : t;
  };
}
function Va(e, t) {
  return j(Jt, e) ? Jt[e](t._strict, t._locale) : new RegExp($a(e));
}
function $a(e) {
  return Ye(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, s, a) {
        return r || n || s || a;
      }
    )
  );
}
function Ye(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function fe(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function C(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = fe(t)), r;
}
var Nr = {};
function B(e, t) {
  var r, n = t, s;
  for (typeof e == "string" && (e = [e]), Fe(t) && (n = function(a, i) {
    i[t] = C(a);
  }), s = e.length, r = 0; r < s; r++)
    Nr[e[r]] = n;
}
function At(e, t) {
  B(e, function(r, n, s, a) {
    s._w = s._w || {}, t(r, s._w, s, a);
  });
}
function za(e, t, r) {
  t != null && j(Nr, e) && Nr[e](t, r._a, r, e);
}
function ur(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var se = 0, Ae = 1, Re = 2, ee = 3, we = 4, Ne = 5, $e = 6, Ga = 7, Ja = 8;
E("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? De(e, 4) : "+" + e;
});
E(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
E(0, ["YYYY", 4], 0, "year");
E(0, ["YYYYY", 5], 0, "year");
E(0, ["YYYYYY", 6, !0], 0, "year");
g("Y", or);
g("YY", J, ue);
g("YYYY", Gr, zr);
g("YYYYY", ir, sr);
g("YYYYYY", ir, sr);
B(["YYYYY", "YYYYYY"], se);
B("YYYY", function(e, t) {
  t[se] = e.length === 2 ? y.parseTwoDigitYear(e) : C(e);
});
B("YY", function(e, t) {
  t[se] = y.parseTwoDigitYear(e);
});
B("Y", function(e, t) {
  t[se] = parseInt(e, 10);
});
function Rt(e) {
  return ur(e) ? 366 : 365;
}
y.parseTwoDigitYear = function(e) {
  return C(e) + (C(e) > 68 ? 1900 : 2e3);
};
var as = ht("FullYear", !0);
function Za() {
  return ur(this.year());
}
function ht(e, t) {
  return function(r) {
    return r != null ? (is(this, e, r), y.updateOffset(this, t), this) : Dt(this, e);
  };
}
function Dt(e, t) {
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
function is(e, t, r) {
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
    a = r, i = e.month(), o = e.date(), o = o === 29 && i === 1 && !ur(a) ? 28 : o, s ? n.setUTCFullYear(a, i, o) : n.setFullYear(a, i, o);
  }
}
function Xa(e) {
  return e = he(e), Te(this[e]) ? this[e]() : this;
}
function Ka(e, t) {
  if (typeof e == "object") {
    e = $r(e);
    var r = Ha(e), n, s = r.length;
    for (n = 0; n < s; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = he(e), Te(this[e]))
    return this[e](t);
  return this;
}
function Qa(e, t) {
  return (e % t + t) % t;
}
var X;
Array.prototype.indexOf ? X = Array.prototype.indexOf : X = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Zr(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Qa(t, 12);
  return e += (t - r) / 12, r === 1 ? ur(e) ? 29 : 28 : 31 - r % 7 % 2;
}
E("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
E("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
E("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
g("M", J, dt);
g("MM", J, ue);
g("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
g("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
B(["M", "MM"], function(e, t) {
  t[Ae] = C(e) - 1;
});
B(["MMM", "MMMM"], function(e, t, r, n) {
  var s = r._locale.monthsParse(e, n, r._strict);
  s != null ? t[Ae] = s : A(r).invalidMonth = e;
});
var ei = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), os = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ls = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ti = vt, ri = vt;
function ni(e, t) {
  return e ? Se(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ls).test(t) ? "format" : "standalone"][e.month()] : Se(this._months) ? this._months : this._months.standalone;
}
function si(e, t) {
  return e ? Se(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ls.test(t) ? "format" : "standalone"][e.month()] : Se(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ai(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = Ee([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (s = X.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = X.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = X.call(this._shortMonthsParse, i), s !== -1 ? s : (s = X.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = X.call(this._longMonthsParse, i), s !== -1 ? s : (s = X.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function ii(e, t, r) {
  var n, s, a;
  if (this._monthsParseExact)
    return ai.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (s = Ee([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
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
function us(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = C(t);
    else if (t = e.localeData().monthsParse(t), !Fe(t))
      return e;
  }
  var r = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, Zr(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e;
}
function cs(e) {
  return e != null ? (us(this, e), y.updateOffset(this, !0), this) : Dt(this, "Month");
}
function oi() {
  return Zr(this.year(), this.month());
}
function li(e) {
  return this._monthsParseExact ? (j(this, "_monthsRegex") || fs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = ti), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ui(e) {
  return this._monthsParseExact ? (j(this, "_monthsRegex") || fs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = ri), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function fs() {
  function e(u, c) {
    return c.length - u.length;
  }
  var t = [], r = [], n = [], s, a, i, o;
  for (s = 0; s < 12; s++)
    a = Ee([2e3, s]), i = Ye(this.monthsShort(a, "")), o = Ye(this.months(a, "")), t.push(i), r.push(o), n.push(o), n.push(i);
  t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ci(e, t, r, n, s, a, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, n, s, a, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, n, s, a, i), o;
}
function Et(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Zt(e, t, r) {
  var n = 7 + t - r, s = (7 + Et(e, 0, n).getUTCDay() - t) % 7;
  return -s + n - 1;
}
function ds(e, t, r, n, s) {
  var a = (7 + r - n) % 7, i = Zt(e, n, s), o = 1 + 7 * (t - 1) + a + i, u, c;
  return o <= 0 ? (u = e - 1, c = Rt(u) + o) : o > Rt(e) ? (u = e + 1, c = o - Rt(e)) : (u = e, c = o), {
    year: u,
    dayOfYear: c
  };
}
function Tt(e, t, r) {
  var n = Zt(e.year(), t, r), s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return s < 1 ? (i = e.year() - 1, a = s + Ce(i, t, r)) : s > Ce(e.year(), t, r) ? (a = s - Ce(e.year(), t, r), i = e.year() + 1) : (i = e.year(), a = s), {
    week: a,
    year: i
  };
}
function Ce(e, t, r) {
  var n = Zt(e, t, r), s = Zt(e + 1, t, r);
  return (Rt(e) - n + s) / 7;
}
E("w", ["ww", 2], "wo", "week");
E("W", ["WW", 2], "Wo", "isoWeek");
g("w", J, dt);
g("ww", J, ue);
g("W", J, dt);
g("WW", J, ue);
At(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = C(e);
  }
);
function fi(e) {
  return Tt(e, this._week.dow, this._week.doy).week;
}
var di = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function hi() {
  return this._week.dow;
}
function mi() {
  return this._week.doy;
}
function pi(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function yi(e) {
  var t = Tt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
E("d", 0, "do", "day");
E("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
E("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
E("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
E("e", 0, 0, "weekday");
E("E", 0, 0, "isoWeekday");
g("d", J);
g("e", J);
g("E", J);
g("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
g("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
g("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
At(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var s = r._locale.weekdaysParse(e, n, r._strict);
  s != null ? t.d = s : A(r).invalidWeekday = e;
});
At(["d", "e", "E"], function(e, t, r, n) {
  t[n] = C(e);
});
function _i(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function wi(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Xr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var gi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), hs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Si = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), bi = vt, Oi = vt, Ri = vt;
function Di(e, t) {
  var r = Se(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Xr(r, this._week.dow) : e ? r[e.day()] : r;
}
function Ei(e) {
  return e === !0 ? Xr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Ti(e) {
  return e === !0 ? Xr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ki(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = Ee([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (s = X.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = X.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = X.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = X.call(this._weekdaysParse, i), s !== -1 || (s = X.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = X.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = X.call(this._shortWeekdaysParse, i), s !== -1 || (s = X.call(this._weekdaysParse, i), s !== -1) ? s : (s = X.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = X.call(this._minWeekdaysParse, i), s !== -1 || (s = X.call(this._weekdaysParse, i), s !== -1) ? s : (s = X.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function xi(e, t, r) {
  var n, s, a;
  if (this._weekdaysParseExact)
    return ki.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (s = Ee([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
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
function Mi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Dt(this, "Day");
  return e != null ? (e = _i(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Pi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function vi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = wi(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Ai(e) {
  return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Kr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = bi), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ni(e) {
  return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Kr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Oi), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Yi(e) {
  return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Kr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ri), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Kr() {
  function e(f, h) {
    return h.length - f.length;
  }
  var t = [], r = [], n = [], s = [], a, i, o, u, c;
  for (a = 0; a < 7; a++)
    i = Ee([2e3, 1]).day(a), o = Ye(this.weekdaysMin(i, "")), u = Ye(this.weekdaysShort(i, "")), c = Ye(this.weekdays(i, "")), t.push(o), r.push(u), n.push(c), s.push(o), s.push(u), s.push(c);
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
function Qr() {
  return this.hours() % 12 || 12;
}
function Ci() {
  return this.hours() || 24;
}
E("H", ["HH", 2], 0, "hour");
E("h", ["hh", 2], 0, Qr);
E("k", ["kk", 2], 0, Ci);
E("hmm", 0, 0, function() {
  return "" + Qr.apply(this) + De(this.minutes(), 2);
});
E("hmmss", 0, 0, function() {
  return "" + Qr.apply(this) + De(this.minutes(), 2) + De(this.seconds(), 2);
});
E("Hmm", 0, 0, function() {
  return "" + this.hours() + De(this.minutes(), 2);
});
E("Hmmss", 0, 0, function() {
  return "" + this.hours() + De(this.minutes(), 2) + De(this.seconds(), 2);
});
function ms(e, t) {
  E(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ms("a", !0);
ms("A", !1);
function ps(e, t) {
  return t._meridiemParse;
}
g("a", ps);
g("A", ps);
g("H", J, Jr);
g("h", J, dt);
g("k", J, dt);
g("HH", J, ue);
g("hh", J, ue);
g("kk", J, ue);
g("hmm", ns);
g("hmmss", ss);
g("Hmm", ns);
g("Hmmss", ss);
B(["H", "HH"], ee);
B(["k", "kk"], function(e, t, r) {
  var n = C(e);
  t[ee] = n === 24 ? 0 : n;
});
B(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
B(["h", "hh"], function(e, t, r) {
  t[ee] = C(e), A(r).bigHour = !0;
});
B("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[ee] = C(e.substr(0, n)), t[we] = C(e.substr(n)), A(r).bigHour = !0;
});
B("hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[ee] = C(e.substr(0, n)), t[we] = C(e.substr(n, 2)), t[Ne] = C(e.substr(s)), A(r).bigHour = !0;
});
B("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[ee] = C(e.substr(0, n)), t[we] = C(e.substr(n));
});
B("Hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[ee] = C(e.substr(0, n)), t[we] = C(e.substr(n, 2)), t[Ne] = C(e.substr(s));
});
function Fi(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Li = /[ap]\.?m?\.?/i, Ui = ht("Hours", !0);
function Ii(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var ys = {
  calendar: ka,
  longDateFormat: va,
  invalidDate: Na,
  ordinal: Ca,
  dayOfMonthOrdinalParse: Fa,
  relativeTime: Ua,
  months: ei,
  monthsShort: os,
  week: di,
  weekdays: gi,
  weekdaysMin: Si,
  weekdaysShort: hs,
  meridiemParse: Li
}, Z = {}, wt = {}, kt;
function Wi(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function En(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ji(e) {
  for (var t = 0, r, n, s, a; t < e.length; ) {
    for (a = En(e[t]).split("-"), r = a.length, n = En(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (s = cr(a.slice(0, r).join("-")), s)
        return s;
      if (n && n.length >= r && Wi(a, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return kt;
}
function Hi(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function cr(e) {
  var t = null, r;
  if (Z[e] === void 0 && typeof module < "u" && module && module.exports && Hi(e))
    try {
      t = kt._abbr, r = require, r("./locale/" + e), He(t);
    } catch {
      Z[e] = null;
    }
  return Z[e];
}
function He(e, t) {
  var r;
  return e && (ie(t) ? r = Le(e) : r = en(e, t), r ? kt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), kt._abbr;
}
function en(e, t) {
  if (t !== null) {
    var r, n = ys;
    if (t.abbr = e, Z[e] != null)
      Qn(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = Z[e]._config;
    else if (t.parentLocale != null)
      if (Z[t.parentLocale] != null)
        n = Z[t.parentLocale]._config;
      else if (r = cr(t.parentLocale), r != null)
        n = r._config;
      else
        return wt[t.parentLocale] || (wt[t.parentLocale] = []), wt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Z[e] = new Br(vr(n, t)), wt[e] && wt[e].forEach(function(s) {
      en(s.name, s.config);
    }), He(e), Z[e];
  } else
    return delete Z[e], null;
}
function qi(e, t) {
  if (t != null) {
    var r, n, s = ys;
    Z[e] != null && Z[e].parentLocale != null ? Z[e].set(vr(Z[e]._config, t)) : (n = cr(e), n != null && (s = n._config), t = vr(s, t), n == null && (t.abbr = e), r = new Br(t), r.parentLocale = Z[e], Z[e] = r), He(e);
  } else
    Z[e] != null && (Z[e].parentLocale != null ? (Z[e] = Z[e].parentLocale, e === He() && He(e)) : Z[e] != null && delete Z[e]);
  return Z[e];
}
function Le(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return kt;
  if (!Se(e)) {
    if (t = cr(e), t)
      return t;
    e = [e];
  }
  return ji(e);
}
function Bi() {
  return Ar(Z);
}
function tn(e) {
  var t, r = e._a;
  return r && A(e).overflow === -2 && (t = r[Ae] < 0 || r[Ae] > 11 ? Ae : r[Re] < 1 || r[Re] > Zr(r[se], r[Ae]) ? Re : r[ee] < 0 || r[ee] > 24 || r[ee] === 24 && (r[we] !== 0 || r[Ne] !== 0 || r[$e] !== 0) ? ee : r[we] < 0 || r[we] > 59 ? we : r[Ne] < 0 || r[Ne] > 59 ? Ne : r[$e] < 0 || r[$e] > 999 ? $e : -1, A(e)._overflowDayOfYear && (t < se || t > Re) && (t = Re), A(e)._overflowWeeks && t === -1 && (t = Ga), A(e)._overflowWeekday && t === -1 && (t = Ja), A(e).overflow = t), e;
}
var Vi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, $i = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, zi = /Z|[+-]\d\d(?::?\d\d)?/, It = [
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
], Or = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Gi = /^\/?Date\((-?\d+)/i, Ji = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Zi = {
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
function _s(e) {
  var t, r, n = e._i, s = Vi.exec(n) || $i.exec(n), a, i, o, u, c = It.length, f = Or.length;
  if (s) {
    for (A(e).iso = !0, t = 0, r = c; t < r; t++)
      if (It[t][1].exec(s[1])) {
        i = It[t][0], a = It[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, r = f; t < r; t++)
        if (Or[t][1].exec(s[3])) {
          o = (s[2] || " ") + Or[t][0];
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
      if (zi.exec(s[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), nn(e);
  } else
    e._isValid = !1;
}
function Xi(e, t, r, n, s, a) {
  var i = [
    Ki(e),
    os.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(s, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function Ki(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Qi(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function eo(e, t, r) {
  if (e) {
    var n = hs.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== s)
      return A(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function to(e, t, r) {
  if (e)
    return Zi[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), s = n % 100, a = (n - s) / 100;
  return a * 60 + s;
}
function ws(e) {
  var t = Ji.exec(Qi(e._i)), r;
  if (t) {
    if (r = Xi(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !eo(t[1], r, e))
      return;
    e._a = r, e._tzm = to(t[8], t[9], t[10]), e._d = Et.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), A(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ro(e) {
  var t = Gi.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (_s(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (ws(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : y.createFromInputFallback(e);
}
y.createFromInputFallback = de(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function at(e, t, r) {
  return e ?? t ?? r;
}
function no(e) {
  var t = new Date(y.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function rn(e) {
  var t, r, n = [], s, a, i;
  if (!e._d) {
    for (s = no(e), e._w && e._a[Re] == null && e._a[Ae] == null && so(e), e._dayOfYear != null && (i = at(e._a[se], s[se]), (e._dayOfYear > Rt(i) || e._dayOfYear === 0) && (A(e)._overflowDayOfYear = !0), r = Et(i, 0, e._dayOfYear), e._a[Ae] = r.getUTCMonth(), e._a[Re] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[ee] === 24 && e._a[we] === 0 && e._a[Ne] === 0 && e._a[$e] === 0 && (e._nextDay = !0, e._a[ee] = 0), e._d = (e._useUTC ? Et : ci).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ee] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (A(e).weekdayMismatch = !0);
  }
}
function so(e) {
  var t, r, n, s, a, i, o, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, r = at(
    t.GG,
    e._a[se],
    Tt(G(), 1, 4).year
  ), n = at(t.W, 1), s = at(t.E, 1), (s < 1 || s > 7) && (u = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, c = Tt(G(), a, i), r = at(t.gg, e._a[se], c.year), n = at(t.w, c.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (u = !0)) : t.e != null ? (s = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : s = a), n < 1 || n > Ce(r, a, i) ? A(e)._overflowWeeks = !0 : u != null ? A(e)._overflowWeekday = !0 : (o = ds(r, n, s, a, i), e._a[se] = o.year, e._dayOfYear = o.dayOfYear);
}
y.ISO_8601 = function() {
};
y.RFC_2822 = function() {
};
function nn(e) {
  if (e._f === y.ISO_8601) {
    _s(e);
    return;
  }
  if (e._f === y.RFC_2822) {
    ws(e);
    return;
  }
  e._a = [], A(e).empty = !0;
  var t = "" + e._i, r, n, s, a, i, o = t.length, u = 0, c, f;
  for (s = es(e._f, e._locale).match(Vr) || [], f = s.length, r = 0; r < f; r++)
    a = s[r], n = (t.match(Va(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && A(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), ot[a] ? (n ? A(e).empty = !1 : A(e).unusedTokens.push(a), za(a, n, e)) : e._strict && !n && A(e).unusedTokens.push(a);
  A(e).charsLeftOver = o - u, t.length > 0 && A(e).unusedInput.push(t), e._a[ee] <= 12 && A(e).bigHour === !0 && e._a[ee] > 0 && (A(e).bigHour = void 0), A(e).parsedDateParts = e._a.slice(0), A(e).meridiem = e._meridiem, e._a[ee] = ao(
    e._locale,
    e._a[ee],
    e._meridiem
  ), c = A(e).era, c !== null && (e._a[se] = e._locale.erasConvertYear(c, e._a[se])), rn(e), tn(e);
}
function ao(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function io(e) {
  var t, r, n, s, a, i, o = !1, u = e._f.length;
  if (u === 0) {
    A(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < u; s++)
    a = 0, i = !1, t = qr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], nn(t), Hr(t) && (i = !0), a += A(t).charsLeftOver, a += A(t).unusedTokens.length * 10, A(t).score = a, o ? a < n && (n = a, r = t) : (n == null || a < n || i) && (n = a, r = t, i && (o = !0));
  We(e, r || t);
}
function oo(e) {
  if (!e._d) {
    var t = $r(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Xn(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), rn(e);
  }
}
function lo(e) {
  var t = new Pt(tn(gs(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function gs(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Le(e._l), t === null || r === void 0 && t === "" ? nr({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), be(t) ? new Pt(tn(t)) : (Mt(t) ? e._d = t : Se(r) ? io(e) : r ? nn(e) : uo(e), Hr(e) || (e._d = null), e));
}
function uo(e) {
  var t = e._i;
  ie(t) ? e._d = new Date(y.now()) : Mt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ro(e) : Se(t) ? (e._a = Xn(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), rn(e)) : Ge(t) ? oo(e) : Fe(t) ? e._d = new Date(t) : y.createFromInputFallback(e);
}
function Ss(e, t, r, n, s) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Ge(e) && jr(e) || Se(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = r, a._i = e, a._f = t, a._strict = n, lo(a);
}
function G(e, t, r, n) {
  return Ss(e, t, r, n, !1);
}
var co = de(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = G.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : nr();
  }
), fo = de(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = G.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : nr();
  }
);
function bs(e, t) {
  var r, n;
  if (t.length === 1 && Se(t[0]) && (t = t[0]), !t.length)
    return G();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function ho() {
  var e = [].slice.call(arguments, 0);
  return bs("isBefore", e);
}
function mo() {
  var e = [].slice.call(arguments, 0);
  return bs("isAfter", e);
}
var po = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, gt = [
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
function yo(e) {
  var t, r = !1, n, s = gt.length;
  for (t in e)
    if (j(e, t) && !(X.call(gt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < s; ++n)
    if (e[gt[n]]) {
      if (r)
        return !1;
      parseFloat(e[gt[n]]) !== C(e[gt[n]]) && (r = !0);
    }
  return !0;
}
function _o() {
  return this._isValid;
}
function wo() {
  return Oe(NaN);
}
function fr(e) {
  var t = $r(e), r = t.year || 0, n = t.quarter || 0, s = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, c = t.second || 0, f = t.millisecond || 0;
  this._isValid = yo(t), this._milliseconds = +f + c * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +s + n * 3 + r * 12, this._data = {}, this._locale = Le(), this._bubble();
}
function qt(e) {
  return e instanceof fr;
}
function Yr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function go(e, t, r) {
  var n = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    C(e[i]) !== C(t[i]) && a++;
  return a + s;
}
function Os(e, t) {
  E(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + De(~~(r / 60), 2) + t + De(~~r % 60, 2);
  });
}
Os("Z", ":");
Os("ZZ", "");
g("Z", lr);
g("ZZ", lr);
B(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = sn(lr, e);
});
var So = /([\+\-]|\d\d)/gi;
function sn(e, t) {
  var r = (t || "").match(e), n, s, a;
  return r === null ? null : (n = r[r.length - 1] || [], s = (n + "").match(So) || ["-", 0, 0], a = +(s[1] * 60) + C(s[2]), a === 0 ? 0 : s[0] === "+" ? a : -a);
}
function an(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (be(e) || Mt(e) ? e.valueOf() : G(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), y.updateOffset(r, !1), r) : G(e).local();
}
function Cr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
y.updateOffset = function() {
};
function bo(e, t, r) {
  var n = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = sn(lr, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (s = Cr(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? Es(
      this,
      Oe(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Cr(this);
}
function Oo(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ro(e) {
  return this.utcOffset(0, e);
}
function Do(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Cr(this), "m")), this;
}
function Eo() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = sn(qa, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function To(e) {
  return this.isValid() ? (e = e ? G(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function ko() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function xo() {
  if (!ie(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return qr(e, this), e = gs(e), e._a ? (t = e._isUTC ? Ee(e._a) : G(e._a), this._isDSTShifted = this.isValid() && go(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Mo() {
  return this.isValid() ? !this._isUTC : !1;
}
function Po() {
  return this.isValid() ? this._isUTC : !1;
}
function Rs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var vo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ao = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Oe(e, t) {
  var r = e, n = null, s, a, i;
  return qt(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Fe(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = vo.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: C(n[Re]) * s,
    h: C(n[ee]) * s,
    m: C(n[we]) * s,
    s: C(n[Ne]) * s,
    ms: C(Yr(n[$e] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (n = Ao.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: Ve(n[2], s),
    M: Ve(n[3], s),
    w: Ve(n[4], s),
    d: Ve(n[5], s),
    h: Ve(n[6], s),
    m: Ve(n[7], s),
    s: Ve(n[8], s)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = No(
    G(r.from),
    G(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), a = new fr(r), qt(e) && j(e, "_locale") && (a._locale = e._locale), qt(e) && j(e, "_isValid") && (a._isValid = e._isValid), a;
}
Oe.fn = fr.prototype;
Oe.invalid = wo;
function Ve(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Tn(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function No(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = an(t, e), e.isBefore(t) ? r = Tn(e, t) : (r = Tn(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Ds(e, t) {
  return function(r, n) {
    var s, a;
    return n !== null && !isNaN(+n) && (Qn(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = n, n = a), s = Oe(r, n), Es(this, s, e), this;
  };
}
function Es(e, t, r, n) {
  var s = t._milliseconds, a = Yr(t._days), i = Yr(t._months);
  e.isValid() && (n = n ?? !0, i && us(e, Dt(e, "Month") + i * r), a && is(e, "Date", Dt(e, "Date") + a * r), s && e._d.setTime(e._d.valueOf() + s * r), n && y.updateOffset(e, a || i));
}
var Yo = Ds(1, "add"), Co = Ds(-1, "subtract");
function Ts(e) {
  return typeof e == "string" || e instanceof String;
}
function Fo(e) {
  return be(e) || Mt(e) || Ts(e) || Fe(e) || Uo(e) || Lo(e) || e === null || e === void 0;
}
function Lo(e) {
  var t = Ge(e) && !jr(e), r = !1, n = [
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
    a = n[s], r = r || j(e, a);
  return t && r;
}
function Uo(e) {
  var t = Se(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !Fe(n) && Ts(e);
  }).length === 0), t && r;
}
function Io(e) {
  var t = Ge(e) && !jr(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, a;
  for (s = 0; s < n.length; s += 1)
    a = n[s], r = r || j(e, a);
  return t && r;
}
function Wo(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function jo(e, t) {
  arguments.length === 1 && (arguments[0] ? Fo(arguments[0]) ? (e = arguments[0], t = void 0) : Io(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || G(), n = an(r, this).startOf("day"), s = y.calendarFormat(this, n) || "sameElse", a = t && (Te(t[s]) ? t[s].call(this, r) : t[s]);
  return this.format(
    a || this.localeData().calendar(s, this, G(r))
  );
}
function Ho() {
  return new Pt(this);
}
function qo(e, t) {
  var r = be(e) ? e : G(e);
  return this.isValid() && r.isValid() ? (t = he(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Bo(e, t) {
  var r = be(e) ? e : G(e);
  return this.isValid() && r.isValid() ? (t = he(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Vo(e, t, r, n) {
  var s = be(e) ? e : G(e), a = be(t) ? t : G(t);
  return this.isValid() && s.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (n[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function $o(e, t) {
  var r = be(e) ? e : G(e), n;
  return this.isValid() && r.isValid() ? (t = he(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function zo(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Go(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Jo(e, t, r) {
  var n, s, a;
  if (!this.isValid())
    return NaN;
  if (n = an(e, this), !n.isValid())
    return NaN;
  switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = he(t), t) {
    case "year":
      a = Bt(this, n) / 12;
      break;
    case "month":
      a = Bt(this, n);
      break;
    case "quarter":
      a = Bt(this, n) / 3;
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
  return r ? a : fe(a);
}
function Bt(e, t) {
  if (e.date() < t.date())
    return -Bt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), s, a;
  return t - n < 0 ? (s = e.clone().add(r - 1, "months"), a = (t - n) / (n - s)) : (s = e.clone().add(r + 1, "months"), a = (t - n) / (s - n)), -(r + a) || 0;
}
y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Zo() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Xo(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Ht(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Te(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ht(r, "Z")) : Ht(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Ko() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, s, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + n + s + a);
}
function Qo(e) {
  e || (e = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
  var t = Ht(this, e);
  return this.localeData().postformat(t);
}
function el(e, t) {
  return this.isValid() && (be(e) && e.isValid() || G(e).isValid()) ? Oe({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function tl(e) {
  return this.from(G(), e);
}
function rl(e, t) {
  return this.isValid() && (be(e) && e.isValid() || G(e).isValid()) ? Oe({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function nl(e) {
  return this.to(G(), e);
}
function ks(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Le(e), t != null && (this._locale = t), this);
}
var xs = de(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ms() {
  return this._locale;
}
var Xt = 1e3, lt = 60 * Xt, Kt = 60 * lt, Ps = (365 * 400 + 97) * 24 * Kt;
function ut(e, t) {
  return (e % t + t) % t;
}
function vs(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Ps : new Date(e, t, r).valueOf();
}
function As(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Ps : Date.UTC(e, t, r);
}
function sl(e) {
  var t, r;
  if (e = he(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? As : vs, e) {
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
      t = this._d.valueOf(), t -= ut(
        t + (this._isUTC ? 0 : this.utcOffset() * lt),
        Kt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ut(t, lt);
      break;
    case "second":
      t = this._d.valueOf(), t -= ut(t, Xt);
      break;
  }
  return this._d.setTime(t), y.updateOffset(this, !0), this;
}
function al(e) {
  var t, r;
  if (e = he(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? As : vs, e) {
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
      t = this._d.valueOf(), t += Kt - ut(
        t + (this._isUTC ? 0 : this.utcOffset() * lt),
        Kt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += lt - ut(t, lt) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Xt - ut(t, Xt) - 1;
      break;
  }
  return this._d.setTime(t), y.updateOffset(this, !0), this;
}
function il() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function ol() {
  return Math.floor(this.valueOf() / 1e3);
}
function ll() {
  return new Date(this.valueOf());
}
function ul() {
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
function cl() {
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
function fl() {
  return this.isValid() ? this.toISOString() : null;
}
function dl() {
  return Hr(this);
}
function hl() {
  return We({}, A(this));
}
function ml() {
  return A(this).overflow;
}
function pl() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
E("N", 0, 0, "eraAbbr");
E("NN", 0, 0, "eraAbbr");
E("NNN", 0, 0, "eraAbbr");
E("NNNN", 0, 0, "eraName");
E("NNNNN", 0, 0, "eraNarrow");
E("y", ["y", 1], "yo", "eraYear");
E("y", ["yy", 2], 0, "eraYear");
E("y", ["yyy", 3], 0, "eraYear");
E("y", ["yyyy", 4], 0, "eraYear");
g("N", on);
g("NN", on);
g("NNN", on);
g("NNNN", Tl);
g("NNNNN", kl);
B(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var s = r._locale.erasParse(e, n, r._strict);
    s ? A(r).era = s : A(r).invalidEra = e;
  }
);
g("y", ft);
g("yy", ft);
g("yyy", ft);
g("yyyy", ft);
g("yo", xl);
B(["y", "yy", "yyy", "yyyy"], se);
B(["yo"], function(e, t, r, n) {
  var s;
  r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[se] = r._locale.eraYearOrdinalParse(e, s) : t[se] = parseInt(e, 10);
});
function yl(e, t) {
  var r, n, s, a = this._eras || Le("en")._eras;
  for (r = 0, n = a.length; r < n; ++r) {
    switch (typeof a[r].since) {
      case "string":
        s = y(a[r].since).startOf("day"), a[r].since = s.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        s = y(a[r].until).startOf("day").valueOf(), a[r].until = s.valueOf();
        break;
    }
  }
  return a;
}
function _l(e, t, r) {
  var n, s, a = this.eras(), i, o, u;
  for (e = e.toUpperCase(), n = 0, s = a.length; n < s; ++n)
    if (i = a[n].name.toUpperCase(), o = a[n].abbr.toUpperCase(), u = a[n].narrow.toUpperCase(), r)
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
          if (u === e)
            return a[n];
          break;
      }
    else if ([i, o, u].indexOf(e) >= 0)
      return a[n];
}
function wl(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? y(e.since).year() : y(e.since).year() + (t - e.offset) * r;
}
function gl() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function Sl() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function bl() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function Ol() {
  var e, t, r, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return (this.year() - y(s[e].since).year()) * r + s[e].offset;
  return this.year();
}
function Rl(e) {
  return j(this, "_erasNameRegex") || ln.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Dl(e) {
  return j(this, "_erasAbbrRegex") || ln.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function El(e) {
  return j(this, "_erasNarrowRegex") || ln.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function on(e, t) {
  return t.erasAbbrRegex(e);
}
function Tl(e, t) {
  return t.erasNameRegex(e);
}
function kl(e, t) {
  return t.erasNarrowRegex(e);
}
function xl(e, t) {
  return t._eraYearOrdinalRegex || ft;
}
function ln() {
  var e = [], t = [], r = [], n = [], s, a, i, o, u, c = this.eras();
  for (s = 0, a = c.length; s < a; ++s)
    i = Ye(c[s].name), o = Ye(c[s].abbr), u = Ye(c[s].narrow), t.push(i), e.push(o), r.push(u), n.push(i), n.push(o), n.push(u);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
E(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
E(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function dr(e, t) {
  E(0, [e, e.length], 0, t);
}
dr("gggg", "weekYear");
dr("ggggg", "weekYear");
dr("GGGG", "isoWeekYear");
dr("GGGGG", "isoWeekYear");
g("G", or);
g("g", or);
g("GG", J, ue);
g("gg", J, ue);
g("GGGG", Gr, zr);
g("gggg", Gr, zr);
g("GGGGG", ir, sr);
g("ggggg", ir, sr);
At(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = C(e);
  }
);
At(["gg", "GG"], function(e, t, r, n) {
  t[n] = y.parseTwoDigitYear(e);
});
function Ml(e) {
  return Ns.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Pl(e) {
  return Ns.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function vl() {
  return Ce(this.year(), 1, 4);
}
function Al() {
  return Ce(this.isoWeekYear(), 1, 4);
}
function Nl() {
  var e = this.localeData()._week;
  return Ce(this.year(), e.dow, e.doy);
}
function Yl() {
  var e = this.localeData()._week;
  return Ce(this.weekYear(), e.dow, e.doy);
}
function Ns(e, t, r, n, s) {
  var a;
  return e == null ? Tt(this, n, s).year : (a = Ce(e, n, s), t > a && (t = a), Cl.call(this, e, t, r, n, s));
}
function Cl(e, t, r, n, s) {
  var a = ds(e, t, r, n, s), i = Et(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
E("Q", 0, "Qo", "quarter");
g("Q", ts);
B("Q", function(e, t) {
  t[Ae] = (C(e) - 1) * 3;
});
function Fl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
E("D", ["DD", 2], "Do", "date");
g("D", J, dt);
g("DD", J, ue);
g("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
B(["D", "DD"], Re);
B("Do", function(e, t) {
  t[Re] = C(e.match(J)[0]);
});
var Ys = ht("Date", !0);
E("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
g("DDD", ar);
g("DDDD", rs);
B(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = C(e);
});
function Ll(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
E("m", ["mm", 2], 0, "minute");
g("m", J, Jr);
g("mm", J, ue);
B(["m", "mm"], we);
var Ul = ht("Minutes", !1);
E("s", ["ss", 2], 0, "second");
g("s", J, Jr);
g("ss", J, ue);
B(["s", "ss"], Ne);
var Il = ht("Seconds", !1);
E("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
E(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
E(0, ["SSS", 3], 0, "millisecond");
E(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
E(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
E(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
E(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
E(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
E(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
g("S", ar, ts);
g("SS", ar, ue);
g("SSS", ar, rs);
var je, Cs;
for (je = "SSSS"; je.length <= 9; je += "S")
  g(je, ft);
function Wl(e, t) {
  t[$e] = C(("0." + e) * 1e3);
}
for (je = "S"; je.length <= 9; je += "S")
  B(je, Wl);
Cs = ht("Milliseconds", !1);
E("z", 0, 0, "zoneAbbr");
E("zz", 0, 0, "zoneName");
function jl() {
  return this._isUTC ? "UTC" : "";
}
function Hl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var p = Pt.prototype;
p.add = Yo;
p.calendar = jo;
p.clone = Ho;
p.diff = Jo;
p.endOf = al;
p.format = Qo;
p.from = el;
p.fromNow = tl;
p.to = rl;
p.toNow = nl;
p.get = Xa;
p.invalidAt = ml;
p.isAfter = qo;
p.isBefore = Bo;
p.isBetween = Vo;
p.isSame = $o;
p.isSameOrAfter = zo;
p.isSameOrBefore = Go;
p.isValid = dl;
p.lang = xs;
p.locale = ks;
p.localeData = Ms;
p.max = fo;
p.min = co;
p.parsingFlags = hl;
p.set = Ka;
p.startOf = sl;
p.subtract = Co;
p.toArray = ul;
p.toObject = cl;
p.toDate = ll;
p.toISOString = Xo;
p.inspect = Ko;
typeof Symbol < "u" && Symbol.for != null && (p[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
p.toJSON = fl;
p.toString = Zo;
p.unix = ol;
p.valueOf = il;
p.creationData = pl;
p.eraName = gl;
p.eraNarrow = Sl;
p.eraAbbr = bl;
p.eraYear = Ol;
p.year = as;
p.isLeapYear = Za;
p.weekYear = Ml;
p.isoWeekYear = Pl;
p.quarter = p.quarters = Fl;
p.month = cs;
p.daysInMonth = oi;
p.week = p.weeks = pi;
p.isoWeek = p.isoWeeks = yi;
p.weeksInYear = Nl;
p.weeksInWeekYear = Yl;
p.isoWeeksInYear = vl;
p.isoWeeksInISOWeekYear = Al;
p.date = Ys;
p.day = p.days = Mi;
p.weekday = Pi;
p.isoWeekday = vi;
p.dayOfYear = Ll;
p.hour = p.hours = Ui;
p.minute = p.minutes = Ul;
p.second = p.seconds = Il;
p.millisecond = p.milliseconds = Cs;
p.utcOffset = bo;
p.utc = Ro;
p.local = Do;
p.parseZone = Eo;
p.hasAlignedHourOffset = To;
p.isDST = ko;
p.isLocal = Mo;
p.isUtcOffset = Po;
p.isUtc = Rs;
p.isUTC = Rs;
p.zoneAbbr = jl;
p.zoneName = Hl;
p.dates = de(
  "dates accessor is deprecated. Use date instead.",
  Ys
);
p.months = de(
  "months accessor is deprecated. Use month instead",
  cs
);
p.years = de(
  "years accessor is deprecated. Use year instead",
  as
);
p.zone = de(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Oo
);
p.isDSTShifted = de(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  xo
);
function ql(e) {
  return G(e * 1e3);
}
function Bl() {
  return G.apply(null, arguments).parseZone();
}
function Fs(e) {
  return e;
}
var H = Br.prototype;
H.calendar = xa;
H.longDateFormat = Aa;
H.invalidDate = Ya;
H.ordinal = La;
H.preparse = Fs;
H.postformat = Fs;
H.relativeTime = Ia;
H.pastFuture = Wa;
H.set = Ta;
H.eras = yl;
H.erasParse = _l;
H.erasConvertYear = wl;
H.erasAbbrRegex = Dl;
H.erasNameRegex = Rl;
H.erasNarrowRegex = El;
H.months = ni;
H.monthsShort = si;
H.monthsParse = ii;
H.monthsRegex = ui;
H.monthsShortRegex = li;
H.week = fi;
H.firstDayOfYear = mi;
H.firstDayOfWeek = hi;
H.weekdays = Di;
H.weekdaysMin = Ti;
H.weekdaysShort = Ei;
H.weekdaysParse = xi;
H.weekdaysRegex = Ai;
H.weekdaysShortRegex = Ni;
H.weekdaysMinRegex = Yi;
H.isPM = Fi;
H.meridiem = Ii;
function Qt(e, t, r, n) {
  var s = Le(), a = Ee().set(n, t);
  return s[r](a, e);
}
function Ls(e, t, r) {
  if (Fe(e) && (t = e, e = void 0), e = e || "", t != null)
    return Qt(e, t, r, "month");
  var n, s = [];
  for (n = 0; n < 12; n++)
    s[n] = Qt(e, n, r, "month");
  return s;
}
function un(e, t, r, n) {
  typeof e == "boolean" ? (Fe(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Fe(t) && (r = t, t = void 0), t = t || "");
  var s = Le(), a = e ? s._week.dow : 0, i, o = [];
  if (r != null)
    return Qt(t, (r + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = Qt(t, (i + a) % 7, n, "day");
  return o;
}
function Vl(e, t) {
  return Ls(e, t, "months");
}
function $l(e, t) {
  return Ls(e, t, "monthsShort");
}
function zl(e, t, r) {
  return un(e, t, r, "weekdays");
}
function Gl(e, t, r) {
  return un(e, t, r, "weekdaysShort");
}
function Jl(e, t, r) {
  return un(e, t, r, "weekdaysMin");
}
He("en", {
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
    var t = e % 10, r = C(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
y.lang = de(
  "moment.lang is deprecated. Use moment.locale instead.",
  He
);
y.langData = de(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Le
);
var Pe = Math.abs;
function Zl() {
  var e = this._data;
  return this._milliseconds = Pe(this._milliseconds), this._days = Pe(this._days), this._months = Pe(this._months), e.milliseconds = Pe(e.milliseconds), e.seconds = Pe(e.seconds), e.minutes = Pe(e.minutes), e.hours = Pe(e.hours), e.months = Pe(e.months), e.years = Pe(e.years), this;
}
function Us(e, t, r, n) {
  var s = Oe(t, r);
  return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
}
function Xl(e, t) {
  return Us(this, e, t, 1);
}
function Kl(e, t) {
  return Us(this, e, t, -1);
}
function kn(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Ql() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, s, a, i, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += kn(Fr(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, s = fe(e / 1e3), n.seconds = s % 60, a = fe(s / 60), n.minutes = a % 60, i = fe(a / 60), n.hours = i % 24, t += fe(i / 24), u = fe(Is(t)), r += u, t -= kn(Fr(u)), o = fe(r / 12), r %= 12, n.days = t, n.months = r, n.years = o, this;
}
function Is(e) {
  return e * 4800 / 146097;
}
function Fr(e) {
  return e * 146097 / 4800;
}
function eu(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = he(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + Is(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Fr(this._months)), e) {
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
function Ue(e) {
  return function() {
    return this.as(e);
  };
}
var Ws = Ue("ms"), tu = Ue("s"), ru = Ue("m"), nu = Ue("h"), su = Ue("d"), au = Ue("w"), iu = Ue("M"), ou = Ue("Q"), lu = Ue("y"), uu = Ws;
function cu() {
  return Oe(this);
}
function fu(e) {
  return e = he(e), this.isValid() ? this[e + "s"]() : NaN;
}
function et(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var du = et("milliseconds"), hu = et("seconds"), mu = et("minutes"), pu = et("hours"), yu = et("days"), _u = et("months"), wu = et("years");
function gu() {
  return fe(this.days() / 7);
}
var ve = Math.round, it = {
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
function Su(e, t, r, n, s) {
  return s.relativeTime(t || 1, !!r, e, n);
}
function bu(e, t, r, n) {
  var s = Oe(e).abs(), a = ve(s.as("s")), i = ve(s.as("m")), o = ve(s.as("h")), u = ve(s.as("d")), c = ve(s.as("M")), f = ve(s.as("w")), h = ve(s.as("y")), R = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (R = R || f <= 1 && ["w"] || f < r.w && ["ww", f]), R = R || c <= 1 && ["M"] || c < r.M && ["MM", c] || h <= 1 && ["y"] || ["yy", h], R[2] = t, R[3] = +e > 0, R[4] = n, Su.apply(null, R);
}
function Ou(e) {
  return e === void 0 ? ve : typeof e == "function" ? (ve = e, !0) : !1;
}
function Ru(e, t) {
  return it[e] === void 0 ? !1 : t === void 0 ? it[e] : (it[e] = t, e === "s" && (it.ss = t - 1), !0);
}
function Du(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = it, s, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, it, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), a = bu(this, !r, n, s), r && (a = s.pastFuture(+this, a)), s.postformat(a);
}
var Rr = Math.abs;
function rt(e) {
  return (e > 0) - (e < 0) || +e;
}
function hr() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Rr(this._milliseconds) / 1e3, t = Rr(this._days), r = Rr(this._months), n, s, a, i, o = this.asSeconds(), u, c, f, h;
  return o ? (n = fe(e / 60), s = fe(n / 60), e %= 60, n %= 60, a = fe(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", c = rt(this._months) !== rt(o) ? "-" : "", f = rt(this._days) !== rt(o) ? "-" : "", h = rt(this._milliseconds) !== rt(o) ? "-" : "", u + "P" + (a ? c + a + "Y" : "") + (r ? c + r + "M" : "") + (t ? f + t + "D" : "") + (s || n || e ? "T" : "") + (s ? h + s + "H" : "") + (n ? h + n + "M" : "") + (e ? h + i + "S" : "")) : "P0D";
}
var L = fr.prototype;
L.isValid = _o;
L.abs = Zl;
L.add = Xl;
L.subtract = Kl;
L.as = eu;
L.asMilliseconds = Ws;
L.asSeconds = tu;
L.asMinutes = ru;
L.asHours = nu;
L.asDays = su;
L.asWeeks = au;
L.asMonths = iu;
L.asQuarters = ou;
L.asYears = lu;
L.valueOf = uu;
L._bubble = Ql;
L.clone = cu;
L.get = fu;
L.milliseconds = du;
L.seconds = hu;
L.minutes = mu;
L.hours = pu;
L.days = yu;
L.weeks = gu;
L.months = _u;
L.years = wu;
L.humanize = Du;
L.toISOString = hr;
L.toString = hr;
L.toJSON = hr;
L.locale = ks;
L.localeData = Ms;
L.toIsoString = de(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  hr
);
L.lang = xs;
E("X", 0, 0, "unix");
E("x", 0, 0, "valueOf");
g("x", or);
g("X", Ba);
B("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
B("x", function(e, t, r) {
  r._d = new Date(C(e));
});
//! moment.js
y.version = "2.30.1";
Da(G);
y.fn = p;
y.min = ho;
y.max = mo;
y.now = po;
y.utc = Ee;
y.unix = ql;
y.months = Vl;
y.isDate = Mt;
y.locale = He;
y.invalid = nr;
y.duration = Oe;
y.isMoment = be;
y.weekdays = zl;
y.parseZone = Bl;
y.localeData = Le;
y.isDuration = qt;
y.monthsShort = $l;
y.weekdaysMin = Jl;
y.defineLocale = en;
y.updateLocale = qi;
y.locales = Bi;
y.weekdaysShort = Gl;
y.normalizeUnits = he;
y.relativeTimeRounding = Ou;
y.relativeTimeThreshold = Ru;
y.calendarFormat = Wo;
y.prototype = p;
y.HTML5_FMT = {
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
const Eu = "ddd, MMM Do YYYY, h:mm:ss a", Tu = "ddd, MMM Do YYYY", ku = "h:mm:ss a", cn = "YYYY-MM-DD HH:mm:ss", fn = "YYYY-MM-DD", xu = "HH:mm:ss", js = "YYYY-MM-DD HH:mm:ss.SSS", Kf = (e) => {
  if (!e)
    return "";
  const t = y.utc(e).toDate();
  return y(t).local().format(Eu);
}, Qf = (e) => {
  if (!e)
    return "";
  const t = y.utc(e).toDate();
  return y(t).local().format(Tu);
}, ed = (e) => {
  if (!e)
    return "";
  const t = y.utc(e).toDate();
  return y(t).local().format(cn);
}, td = (e) => {
  if (!e)
    return "";
  const t = y.utc(e).toDate();
  return y(t).local().format(fn);
}, rd = (e) => {
  if (!e)
    return "";
  const t = y.utc(e).toDate();
  return y(t).local().format(js);
}, nd = (e) => {
  if (!e)
    return "";
  const t = y.utc(e).toDate();
  return y(t).local().format(xu);
}, sd = (e) => {
  if (!e)
    return "";
  const t = y.utc(e).toDate();
  return y(t).local().format(ku);
}, ad = (e) => e ? y(e).utc().format(cn) : "", Mu = (e) => e ? y(e).utc().format(js) : "", Pu = (e) => e ? y(e).utc().format(fn) : "", id = (e) => e ? y(e).local().format(cn) : "", od = (e) => e ? y(e).local().format(fn) : "", vu = (e) => e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-", ld = (e, t = 6) => {
  if (!e)
    return "-";
  const r = Number(e).toFixed(t).toString().split("."), n = vu(Number(r[0])), s = r.length == 2 ? r[1] : 0;
  return n + "." + s;
}, ud = (e, t) => {
  if (t[e + "_degrees"] === "" || t[e + "_minutes"] === "" || t[e + "_seconds"] === "") {
    t[e] = "";
    return;
  }
  const r = t[e + "_degrees"], n = t[e + "_minutes"], s = t[e + "_seconds"];
  t[e] = parseFloat(
    (parseInt(r) + parseInt(n) / 60 + parseFloat(s) / 3600).toFixed(8)
  );
}, cd = (e, t) => {
  if (!t[e])
    return;
  const r = t[e], n = Math.floor(r), s = Math.floor((r - n) * 60), a = ((r - n - s / 60) * 3600).toFixed(5);
  t[e + "_degrees"] = n, t[e + "_minutes"] = s, t[e + "_seconds"] = a;
};
var Wt = { exports: {} }, St = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function Au() {
  if (xn) return St;
  xn = 1;
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
  return St.Fragment = t, St.jsx = r, St.jsxs = r, St;
}
var bt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Nu() {
  return Mn || (Mn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === S ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case O:
          return "Fragment";
        case T:
          return "Profiler";
        case m:
          return "StrictMode";
        case $:
          return "Suspense";
        case ce:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case U:
            return "Portal";
          case F:
            return d.displayName || "Context";
          case k:
            return (d._context.displayName || "Context") + ".Consumer";
          case Q:
            var x = d.render;
            return d = d.displayName, d || (d = x.displayName || x.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case w:
            return x = d.displayName || null, x !== null ? x : e(d.type) || "Memo";
          case b:
            x = d._payload, d = d._init;
            try {
              return e(d(x));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var q = x.error, z = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return q.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(d);
      }
    }
    function n(d) {
      if (d === O) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === b)
        return "<...>";
      try {
        var x = e(d);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var d = M.A;
      return d === null ? null : d.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (te.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function o(d, x) {
      function q() {
        pe || (pe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      q.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: q,
        configurable: !0
      });
    }
    function u() {
      var d = e(this.type);
      return ke[d] || (ke[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function c(d, x, q, z, qe, I) {
      var W = q.ref;
      return d = {
        $$typeof: N,
        type: d,
        key: x,
        props: q,
        _owner: z
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: qe
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function f(d, x, q, z, qe, I) {
      var W = x.children;
      if (W !== void 0)
        if (z)
          if (V(W)) {
            for (z = 0; z < W.length; z++)
              h(W[z]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(W);
      if (te.call(x, "key")) {
        W = e(d);
        var _e = Object.keys(x).filter(function(_r) {
          return _r !== "key";
        });
        z = 0 < _e.length ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}", ye[W + z] || (_e = 0 < _e.length ? "{" + _e.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          W,
          _e,
          W
        ), ye[W + z] = !0);
      }
      if (W = null, q !== void 0 && (r(q), W = "" + q), i(x) && (r(x.key), W = "" + x.key), "key" in x) {
        q = {};
        for (var tt in x)
          tt !== "key" && (q[tt] = x[tt]);
      } else q = x;
      return W && o(
        q,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), c(
        d,
        W,
        q,
        s(),
        qe,
        I
      );
    }
    function h(d) {
      R(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === b && (d._payload.status === "fulfilled" ? R(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function R(d) {
      return typeof d == "object" && d !== null && d.$$typeof === N;
    }
    var P = ge, N = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), F = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), M = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = Object.prototype.hasOwnProperty, V = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var pe, ke = {}, Lt = P.react_stack_bottom_frame.bind(
      P,
      a
    )(), yt = Y(n(a)), ye = {};
    bt.Fragment = O, bt.jsx = function(d, x, q) {
      var z = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        d,
        x,
        q,
        !1,
        z ? Error("react-stack-top-frame") : Lt,
        z ? Y(n(d)) : yt
      );
    }, bt.jsxs = function(d, x, q) {
      var z = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        d,
        x,
        q,
        !0,
        z ? Error("react-stack-top-frame") : Lt,
        z ? Y(n(d)) : yt
      );
    };
  })()), bt;
}
var Pn;
function Yu() {
  return Pn || (Pn = 1, process.env.NODE_ENV === "production" ? Wt.exports = Au() : Wt.exports = Nu()), Wt.exports;
}
var Je = Yu();
const Cu = (e, t) => {
  const [r, n] = Sa(() => {
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
}, Hs = ba({}), fd = ({ children: e }) => {
  const [t, r] = Cu("user", null), n = async (o) => {
    r(o);
  }, s = () => {
    r(null), typeof window < "u" && window.location.assign("/login");
  }, a = (o) => {
    r(o);
  }, i = Oa(
    () => ({
      authUser: t,
      login: n,
      logout: s,
      updateAuthUser: a
    }),
    [t]
  );
  return /* @__PURE__ */ Je.jsx(Hs.Provider, { value: i, children: e });
}, qs = () => Ra(Hs);
function Bs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Fu } = Object.prototype, { getPrototypeOf: ct } = Object, { iterator: Nt, toStringTag: Vs } = Symbol, er = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), xt = (e, t) => {
  let r = e;
  const n = [];
  for (; r != null && r !== Object.prototype; ) {
    if (n.indexOf(r) !== -1)
      return !1;
    if (n.push(r), er(r, t))
      return !0;
    r = ct(r);
  }
  return !1;
}, Lu = (e, t) => e != null && xt(e, t) ? e[t] : void 0, dn = /* @__PURE__ */ ((e) => (t) => {
  const r = Fu.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), me = (e) => (e = e.toLowerCase(), (t) => dn(t) === e), mr = (e) => (t) => typeof t === e, { isArray: Xe } = Array, Ke = mr("undefined");
function mt(e) {
  return e !== null && !Ke(e) && e.constructor !== null && !Ke(e.constructor) && oe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const $s = me("ArrayBuffer");
function Uu(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && $s(e.buffer), t;
}
const Iu = mr("string"), oe = mr("function"), zs = mr("number"), pt = (e) => e !== null && typeof e == "object", Wu = (e) => e === !0 || e === !1, Vt = (e) => {
  if (!pt(e))
    return !1;
  const t = ct(e);
  return (t === null || t === Object.prototype || ct(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !xt(e, Vs) && !xt(e, Nt);
}, ju = (e) => {
  if (!pt(e) || mt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Hu = me("Date"), qu = me("File"), Bu = (e) => !!(e && typeof e.uri < "u"), Vu = (e) => e && typeof e.getParts < "u", $u = me("Blob"), zu = me("FileList"), Gu = me("Set"), Ju = (e) => pt(e) && oe(e.pipe);
function Zu() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const vn = Zu(), An = typeof vn.FormData < "u" ? vn.FormData : void 0, Xu = (e) => {
  if (!e) return !1;
  if (An && e instanceof An) return !0;
  const t = ct(e);
  if (!t || t === Object.prototype || !oe(e.append)) return !1;
  const r = dn(e);
  return r === "formdata" || // detect form-data instance
  r === "object" && oe(e.toString) && e.toString() === "[object FormData]";
}, Ku = me("URLSearchParams"), [Qu, ec, tc, rc] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(me), nc = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Xe(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    if (mt(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let o;
    for (n = 0; n < i; n++)
      o = a[n], t.call(null, e[o], o, e);
  }
}
function Gs(e, t) {
  if (mt(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const ze = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Js = (e) => !Ke(e) && e !== ze;
function Lr(...e) {
  const { caseless: t, skipUndefined: r } = Js(this) && this || {}, n = {}, s = (a, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const o = t && typeof i == "string" && Gs(n, i) || i, u = er(n, o) ? n[o] : void 0;
    Vt(u) && Vt(a) ? n[o] = Lr(u, a) : Vt(a) ? n[o] = Lr({}, a) : Xe(a) ? n[o] = a.slice() : (!r || !Ke(a)) && (n[o] = a);
  };
  for (let a = 0, i = e.length; a < i; a++) {
    const o = e[a];
    if (!o || mt(o) || (Yt(o, s), typeof o != "object" || Xe(o)))
      continue;
    const u = Object.getOwnPropertySymbols(o);
    for (let c = 0; c < u.length; c++) {
      const f = u[c];
      pc.call(o, f) && s(o[f], f);
    }
  }
  return n;
}
const sc = (e, t, r, { allOwnKeys: n } = {}) => (Yt(
  t,
  (s, a) => {
    r && oe(s) ? Object.defineProperty(e, a, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Bs(s, r),
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
), e), ac = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ic = (e, t, r, n) => {
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
}, oc = (e, t, r, n) => {
  let s, a, i;
  const o = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], (!n || n(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = r !== !1 && ct(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, lc = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, uc = (e) => {
  if (!e) return null;
  if (Xe(e)) return e;
  let t = e.length;
  if (!zs(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, cc = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ct(Uint8Array)), fc = (e, t) => {
  const n = (e && e[Nt]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, dc = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, hc = me("HTMLFormElement"), mc = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
  return n.toUpperCase() + s;
}), { propertyIsEnumerable: pc } = Object.prototype, yc = me("RegExp"), Zs = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Yt(r, (s, a) => {
    let i;
    (i = t(s, a, e)) !== !1 && (n[a] = i || s);
  }), Object.defineProperties(e, n);
}, _c = (e) => {
  Zs(e, (t, r) => {
    if (oe(e) && ["arguments", "caller", "callee"].includes(r))
      return !1;
    const n = e[r];
    if (oe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, wc = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return Xe(e) ? n(e) : n(String(e).split(t)), r;
}, gc = () => {
}, Sc = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function bc(e) {
  return !!(e && oe(e.append) && e[Vs] === "FormData" && e[Nt]);
}
const Oc = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), r = (n) => {
    if (pt(n)) {
      if (t.has(n))
        return;
      if (mt(n))
        return n;
      if (!("toJSON" in n)) {
        t.add(n);
        let s;
        if (Gu(n)) {
          s = [];
          for (const a of n) {
            const i = r(a);
            !Ke(i) && s.push(i);
          }
        } else
          s = Xe(n) ? [] : {}, Yt(n, (a, i) => {
            const o = r(a);
            !Ke(o) && (s[i] = o);
          });
        return t.delete(n), s;
      }
    }
    return n;
  };
  return r(e);
}, Rc = me("AsyncFunction"), Dc = (e) => e && (pt(e) || oe(e)) && oe(e.then) && oe(e.catch), Xs = ((e, t) => e ? setImmediate : t ? ((r, n) => (ze.addEventListener(
  "message",
  ({ source: s, data: a }) => {
    s === ze && a === r && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), ze.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", oe(ze.postMessage)), Ec = typeof queueMicrotask < "u" ? queueMicrotask.bind(ze) : typeof process < "u" && process.nextTick || Xs, Ks = (e) => e != null && oe(e[Nt]), Tc = (e) => e != null && xt(e, Nt) && Ks(e), l = {
  isArray: Xe,
  isArrayBuffer: $s,
  isBuffer: mt,
  isFormData: Xu,
  isArrayBufferView: Uu,
  isString: Iu,
  isNumber: zs,
  isBoolean: Wu,
  isObject: pt,
  isPlainObject: Vt,
  isEmptyObject: ju,
  isReadableStream: Qu,
  isRequest: ec,
  isResponse: tc,
  isHeaders: rc,
  isUndefined: Ke,
  isDate: Hu,
  isFile: qu,
  isReactNativeBlob: Bu,
  isReactNative: Vu,
  isBlob: $u,
  isRegExp: yc,
  isFunction: oe,
  isStream: Ju,
  isURLSearchParams: Ku,
  isTypedArray: cc,
  isFileList: zu,
  forEach: Yt,
  merge: Lr,
  extend: sc,
  trim: nc,
  stripBOM: ac,
  inherits: ic,
  toFlatObject: oc,
  kindOf: dn,
  kindOfTest: me,
  endsWith: lc,
  toArray: uc,
  forEachEntry: fc,
  matchAll: dc,
  isHTMLForm: hc,
  hasOwnProperty: er,
  hasOwnProp: er,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: xt,
  getSafeProp: Lu,
  reduceDescriptors: Zs,
  freezeMethods: _c,
  toObjectSet: wc,
  toCamelCase: mc,
  noop: gc,
  toFiniteNumber: Sc,
  findKey: Gs,
  global: ze,
  isContextDefined: Js,
  isSpecCompliantForm: bc,
  toJSONObject: Oc,
  isAsyncFn: Rc,
  isThenable: Dc,
  setImmediate: Xs,
  asap: Ec,
  isIterable: Ks,
  isSafeIterable: Tc
}, kc = l.toObjectSet([
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
]), xc = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim();
    const o = l.hasOwnProp(t, r);
    !r || o && l.hasOwnProp(kc, r) || (r === "set-cookie" ? o ? t[r].push(n) : t[r] = [n] : t[r] = o ? t[r] + ", " + n : n);
  }), t;
};
function Mc(e) {
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
const Pc = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), vc = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function hn(e, t) {
  return l.isArray(e) ? e.map((r) => hn(r, t)) : Mc(String(e).replace(t, ""));
}
const Ac = (e) => hn(e, Pc), Nc = (e) => hn(e, vc);
function Qs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return l.forEach(e.toJSON(), (r, n) => {
    t[n] = Nc(r);
  }), t;
}
const Nn = Symbol("internals");
function Ot(e) {
  return e && String(e).trim().toLowerCase();
}
function $t(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map($t) : Ac(String(e));
}
function Yc(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Cc = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Dr(e) {
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
function Fc(e) {
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
function Lc(e) {
  const t = /* @__PURE__ */ Object.create(null), r = String(e);
  let n = 0, s = !1, a = !1;
  function i(o) {
    const u = Dr(r.slice(n, o)), c = u.indexOf("=");
    if (c < 1)
      return;
    const f = Dr(u.slice(0, c));
    if (!Cc.test(f))
      return;
    const h = f.toLowerCase();
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return;
    const R = Dr(u.slice(c + 1));
    t[h] = Fc(R);
  }
  for (let o = 0; o < r.length; o++) {
    const u = r.charCodeAt(o);
    s ? a ? a = !1 : u === 92 ? a = !0 : u === 34 && (s = !1) : u === 34 ? s = !0 : (u === 44 || u === 59) && (i(o), n = o + 1);
  }
  return i(r.length), t;
}
const Uc = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Er(e, t, r, n, s) {
  if (l.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!l.isString(t)) {
    if (l.isString(n))
      return t.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(t);
  }
}
function Ic(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Wc(e, t) {
  const r = l.toCamelCase(" " + t);
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
let ae = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function a(o, u, c) {
      const f = Ot(u);
      if (!f)
        return;
      const h = l.findKey(s, f);
      (!h || s[h] === void 0 || c === !0 || c === void 0 && s[h] !== !1) && (s[h || u] = $t(o));
    }
    const i = (o, u) => l.forEach(o, (c, f) => a(c, f, u));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (l.isString(t) && (t = t.trim()) && !Uc(t))
      i(xc(t), r);
    else if (l.isObject(t) && l.isSafeIterable(t)) {
      let o = /* @__PURE__ */ Object.create(null), u, c;
      for (const f of t) {
        if (!l.isArray(f))
          throw new TypeError("Object iterator must return a key-value pair");
        c = f[0], l.hasOwnProp(o, c) ? (u = o[c], o[c] = l.isArray(u) ? [...u, f[1]] : [u, f[1]]) : o[c] = f[1];
      }
      i(o, r);
    } else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ot(t), t) {
      const n = l.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Yc(s);
        if (l.isFunction(r))
          return r.call(this, s, n);
        if (l.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ot(t), t) {
      const n = l.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Er(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(i) {
      if (i = Ot(i), i) {
        const o = l.findKey(n, i);
        o && (!r || Er(n, n[o], o, r)) && (delete n[o], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Er(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return l.forEach(this, (s, a) => {
      const i = l.findKey(n, a);
      if (i) {
        r[i] = $t(s), delete r[a];
        return;
      }
      const o = t ? Ic(a) : String(a).trim();
      o !== a && delete r[a], r[o] = $t(s), n[o] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && l.isArray(n) ? n.join(", ") : n);
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
    return l.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return Lc(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Nn] = this[Nn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const o = Ot(i);
      n[o] || (Wc(s, i), n[o] = !0);
    }
    return l.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
ae.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
l.reduceDescriptors(ae.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
l.freezeMethods(ae);
const tr = "[REDACTED ****]";
function jc(e) {
  if (l.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (l.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Hc(e, t) {
  const r = new Set(t.map((a) => String(a).toLowerCase())), n = [], s = (a) => {
    if (a === null || typeof a != "object" || l.isBuffer(a)) return a;
    if (n.indexOf(a) !== -1) return;
    a instanceof ae && (a = a.toJSON()), n.push(a);
    let i;
    if (l.isArray(a))
      i = [], a.forEach((o, u) => {
        const c = s(o);
        l.isUndefined(c) || (i[u] = c);
      });
    else {
      if (!l.isPlainObject(a) && jc(a))
        return n.pop(), a;
      i = /* @__PURE__ */ Object.create(null);
      for (const [o, u] of Object.entries(a)) {
        const c = r.has(o.toLowerCase()) ? tr : s(u);
        l.isUndefined(c) || (i[o] = c);
      }
    }
    return n.pop(), i;
  };
  return s(e);
}
function Yn(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function qc(e) {
  return e.errors.map((r) => {
    try {
      return r && r.message ? Yn(r.message) : Yn(r);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
let _ = class ea extends Error {
  static from(t, r, n, s, a, i) {
    let o = t.message;
    !o && l.isArray(t.errors) && t.errors.length && (o = qc(t));
    const u = new ea(o, r || t.code, n, s, a);
    return Object.defineProperty(u, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), u.name = t.name, t.status != null && u.status == null && (u.status = t.status), i && Object.assign(u, i), u;
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
    const t = this.config, r = t && l.hasOwnProp(t, "redact") ? t.redact : void 0, n = l.isArray(r) && r.length > 0 ? Hc(t, r) : l.toJSONObject(t);
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
_.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
_.ERR_BAD_OPTION = "ERR_BAD_OPTION";
_.ECONNABORTED = "ECONNABORTED";
_.ETIMEDOUT = "ETIMEDOUT";
_.ECONNREFUSED = "ECONNREFUSED";
_.ERR_NETWORK = "ERR_NETWORK";
_.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
_.ERR_DEPRECATED = "ERR_DEPRECATED";
_.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
_.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
_.ERR_CANCELED = "ERR_CANCELED";
_.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
_.ERR_INVALID_URL = "ERR_INVALID_URL";
_.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Bc = null, ta = 100;
function Ur(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function ra(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tr(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = ra(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Vc(e) {
  return l.isArray(e) && !e.some(Ur);
}
const $c = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pr(e, t, r) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = l.toFlatObject(
    r,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(T, k) {
      return !l.isUndefined(k[T]);
    }
  );
  const n = r.metaTokens, s = r.visitor || N, a = r.dots, i = r.indexes, o = r.Blob || typeof Blob < "u" && Blob, u = r.maxDepth === void 0 ? ta : r.maxDepth, c = o && l.isSpecCompliantForm(t), f = [];
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(m) {
    if (m === null) return "";
    if (l.isDate(m))
      return m.toISOString();
    if (l.isBoolean(m))
      return m.toString();
    if (!c && l.isBlob(m))
      throw new _("Blob is not supported. Use a Buffer instead.");
    if (l.isArrayBuffer(m) || l.isTypedArray(m)) {
      if (c && typeof o == "function")
        return new o([m]);
      throw new _("Blob is not supported. Use a Buffer instead.", _.ERR_NOT_SUPPORT);
    }
    return m;
  }
  function R(m) {
    if (m > u)
      throw new _(
        "Object is too deeply nested (" + m + " levels). Max depth: " + u,
        _.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function P(m, T) {
    if (u === 1 / 0)
      return JSON.stringify(m);
    const k = [];
    return JSON.stringify(m, function(Q, $) {
      if (!l.isObject($))
        return $;
      for (; k.length && k[k.length - 1] !== this; )
        k.pop();
      return k.push($), R(T + k.length - 1), $;
    });
  }
  function N(m, T, k) {
    let F = m;
    if (l.isReactNative(t) && l.isReactNativeBlob(m))
      return t.append(Tr(k, T, a), h(m)), !1;
    if (m && !k && typeof m == "object") {
      if (l.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), m = P(m, 1);
      else if (l.isArray(m) && Vc(m) || (l.isFileList(m) || l.endsWith(T, "[]")) && (F = l.toArray(m)))
        return T = ra(T), F.forEach(function($, ce) {
          !(l.isUndefined($) || $ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Tr([T], ce, a) : i === null ? T : T + "[]",
            h($)
          );
        }), !1;
    }
    return Ur(m) ? !0 : (t.append(Tr(k, T, a), h(m)), !1);
  }
  const U = Object.assign($c, {
    defaultVisitor: N,
    convertValue: h,
    isVisitable: Ur
  });
  function O(m, T, k = 0) {
    if (!l.isUndefined(m)) {
      if (R(k), f.indexOf(m) !== -1)
        throw new Error("Circular reference detected in " + T.join("."));
      f.push(m), l.forEach(m, function(Q, $) {
        (!(l.isUndefined(Q) || Q === null) && s.call(t, Q, l.isString($) ? $.trim() : $, T, U)) === !0 && O(Q, T ? T.concat($) : [$], k + 1);
      }), f.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
}
function Cn(e) {
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
function mn(e, t) {
  this._pairs = [], e && pr(e, this, t);
}
const na = mn.prototype;
na.append = function(t, r) {
  this._pairs.push([t, r]);
};
na.toString = function(t) {
  const r = t ? (n) => t.call(this, n, Cn) : Cn;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function zc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function sa(e, t, r) {
  if (!t)
    return e;
  e = e || "";
  const n = l.isFunction(r) ? {
    serialize: r
  } : r, s = l.getSafeProp(n, "encode") || zc, a = l.getSafeProp(n, "serialize");
  let i;
  if (a ? i = a(t, n) : i = l.isURLSearchParams(t) ? t.toString() : new mn(t, n).toString(s), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Fn {
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
    l.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const pn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Gc = typeof URLSearchParams < "u" ? URLSearchParams : mn, Jc = typeof FormData < "u" ? FormData : null, Zc = typeof Blob < "u" ? Blob : null, Xc = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Gc,
    FormData: Jc,
    Blob: Zc
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, yn = typeof window < "u" && typeof document < "u", Ir = typeof navigator == "object" && navigator || void 0, Kc = yn && (!Ir || ["ReactNative", "NativeScript", "NS"].indexOf(Ir.product) < 0), Qc = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ef = yn && window.location.href || "http://localhost", tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: yn,
  hasStandardBrowserEnv: Kc,
  hasStandardBrowserWebWorkerEnv: Qc,
  navigator: Ir,
  origin: ef
}, Symbol.toStringTag, { value: "Module" })), re = {
  ...tf,
  ...Xc
};
function rf(e, t) {
  return pr(e, new re.classes.URLSearchParams(), {
    visitor: function(r, n, s, a) {
      return re.isNode && l.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Ln = ta;
function aa(e) {
  if (e > Ln)
    throw new _(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Ln,
      _.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function nf(e) {
  const t = [], r = /[^.[\]]+|\[([^.[\]]*)]/g;
  let n;
  for (; (n = r.exec(e)) !== null; )
    aa(t.length), t.push(n[0] === "[]" ? "" : n[1] || n[0]);
  return t;
}
function sf(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function ia(e) {
  function t(r, n, s, a) {
    aa(a);
    let i = r[a++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), u = a >= r.length;
    return i = !i && l.isArray(s) ? s.length : i, u ? (l.hasOwnProp(s, i) ? s[i] = l.isArray(s[i]) ? s[i].concat(n) : [s[i], n] : s[i] = n, !o) : ((!l.hasOwnProp(s, i) || !l.isObject(s[i])) && (s[i] = []), t(r, n, s[i], a) && l.isArray(s[i]) && (s[i] = sf(s[i])), !o);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const r = {};
    return l.forEachEntry(e, (n, s) => {
      t(nf(n), s, r, 0);
    }), r;
  }
  return null;
}
const nt = (e, t) => e != null && l.hasOwnProp(e, t) ? e[t] : void 0;
function af(e, t, r) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Ct = {
  transitional: pn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, r) {
      const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = l.isObject(t);
      if (a && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
        return s ? JSON.stringify(ia(t)) : t;
      if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
        return t;
      if (l.isArrayBufferView(t))
        return t.buffer;
      if (l.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let o;
      if (a) {
        const u = nt(this, "formSerializer");
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return rf(t, u).toString();
        if ((o = l.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const c = nt(this, "env"), f = c && c.FormData;
          return pr(
            o ? { "files[]": t } : t,
            f && new f(),
            u
          );
        }
      }
      return a || s ? (r.setContentType("application/json", !1), af(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const r = nt(this, "transitional") || Ct.transitional, n = r && r.forcedJSONParsing, s = nt(this, "responseType"), a = s === "json";
      if (l.isResponse(t) || l.isReadableStream(t))
        return t;
      if (t && l.isString(t) && (n && !s || a)) {
        const o = !(r && r.silentJSONParsing) && a;
        try {
          return JSON.parse(t, nt(this, "parseReviver"));
        } catch (u) {
          if (o)
            throw u.name === "SyntaxError" ? _.from(u, _.ERR_BAD_RESPONSE, this, null, nt(this, "response")) : u;
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
    FormData: re.classes.FormData,
    Blob: re.classes.Blob
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
l.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Ct.headers[e] = {};
});
function kr(e, t) {
  const r = this || Ct, n = t || r, s = ae.from(n.headers);
  let a = n.data;
  return l.forEach(e, function(o) {
    a = o.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function oa(e) {
  return !!(e && e.__CANCEL__);
}
let Ft = class extends _ {
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
    super(t ?? "canceled", _.ERR_CANCELED, r, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function la(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new _(
    "Request failed with status code " + r.status,
    r.status >= 400 && r.status < 500 ? _.ERR_BAD_REQUEST : _.ERR_BAD_RESPONSE,
    r.config,
    r.request,
    r
  ));
}
function of(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function lf(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), f = n[a];
    i || (i = c), r[s] = u, n[s] = c;
    let h = a, R = 0;
    for (; h !== s; )
      R += r[h++], h = h % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), c - i < t)
      return;
    const P = f && c - f;
    return P ? Math.round(R * 1e3 / P) : void 0;
  };
}
function uf(e, t) {
  let r = 0, n = 1e3 / t, s, a;
  const i = (c, f = Date.now()) => {
    r = f, s = null, a && (clearTimeout(a), a = null), e(...c);
  };
  return [(...c) => {
    const f = Date.now(), h = f - r;
    h >= n ? i(c, f) : (s = c, a || (a = setTimeout(() => {
      a = null, i(s);
    }, n - h)));
  }, () => s && i(s)];
}
const rr = (e, t, r = 3) => {
  let n = 0;
  const s = lf(50, 250);
  return uf((a) => {
    if (!a || typeof a.loaded != "number")
      return;
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, u = Math.max(0, o != null ? Math.min(i, o) : i), c = Math.max(0, u - n), f = s(c);
    n = Math.max(n, u);
    const h = {
      loaded: u,
      total: o,
      progress: o ? u / o : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && o ? (o - u) / f : void 0,
      event: a,
      lengthComputable: o != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, r);
}, Un = (e, t) => {
  const r = e != null;
  return [
    (n) => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, In = (e, t = l.asap) => (...r) => t(() => e(...r)), cf = re.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, re.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(re.origin),
  re.navigator && /(msie|trident)/i.test(re.navigator.userAgent)
) : () => !0, ff = re.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, a, i) {
      if (typeof document > "u") return;
      const o = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(r) && o.push(`expires=${new Date(r).toUTCString()}`), l.isString(n) && o.push(`path=${n}`), l.isString(s) && o.push(`domain=${s}`), a === !0 && o.push("secure"), l.isString(i) && o.push(`SameSite=${i}`), document.cookie = o.join("; ");
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
function df(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hf(e, t) {
  if (!t)
    return e;
  let r = e.length;
  for (; r > 0 && e.charCodeAt(r - 1) === 47; )
    r--;
  return e.slice(0, r) + "/" + t.replace(/^\/+/, "");
}
const mf = /^https?:(?!\/\/)/i, pf = /[\t\n\r]/g;
function yf(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function _f(e) {
  return yf(e).replace(pf, "");
}
function wf(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, r, n = "") => `${r}${n}${tr}`);
}
function gf(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${tr}@`), r = t.indexOf("#"), s = (r === -1 ? t : t.slice(0, r)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${tr}`
  );
  return r === -1 ? s : `${s}#${wf(t.slice(r + 1))}`;
}
function Wn(e, t) {
  if (typeof e == "string") {
    const r = _f(e);
    if (mf.test(r))
      throw new _(
        `Invalid URL ${JSON.stringify(gf(r))}: missing "//" after protocol`,
        _.ERR_INVALID_URL,
        t
      );
  }
}
function ua(e, t, r, n) {
  Wn(t, n);
  let s = !df(t);
  return e && (s || r === !1) ? (Wn(e, n), hf(e, t)) : t;
}
const jn = (e) => e instanceof ae ? { ...e } : e, Sf = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
  Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  )
) : Object.keys(e);
function Qe(e, t) {
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
  function n(f, h, R, P) {
    return l.isPlainObject(f) && l.isPlainObject(h) ? l.merge.call({ caseless: P }, f, h) : l.isPlainObject(h) ? l.merge({}, h) : l.isArray(h) ? h.slice() : h;
  }
  function s(f, h, R, P) {
    if (l.isUndefined(h)) {
      if (!l.isUndefined(f))
        return n(void 0, f, R, P);
    } else return n(f, h, R, P);
  }
  function a(f, h) {
    if (!l.isUndefined(h))
      return n(void 0, h);
  }
  function i(f, h) {
    if (l.isUndefined(h)) {
      if (!l.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, h);
  }
  function o(f) {
    const h = l.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!l.isUndefined(h))
      if (l.isPlainObject(h)) {
        if (l.hasOwnProp(h, f))
          return h[f];
      } else
        return;
    const R = l.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (l.isPlainObject(R) && l.hasOwnProp(R, f))
      return R[f];
  }
  function u(f, h, R) {
    if (l.hasOwnProp(t, R))
      return n(f, h);
    if (l.hasOwnProp(e, R))
      return n(void 0, f);
  }
  const c = {
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
    validateStatus: u,
    headers: (f, h, R) => s(jn(f), jn(h), R, !0)
  };
  return l.forEach(Sf({ ...e, ...t }), function(h) {
    if (h === "__proto__" || h === "constructor" || h === "prototype") return;
    const R = l.hasOwnProp(c, h) ? c[h] : s, P = l.hasOwnProp(e, h) ? e[h] : void 0, N = l.hasOwnProp(t, h) ? t[h] : void 0, U = R(P, N, h);
    l.isUndefined(U) && R !== u || (r[h] = U);
  }), l.hasOwnProp(t, "validateStatus") && l.isUndefined(t.validateStatus) && o("validateStatusUndefinedResolves") === !1 && (l.hasOwnProp(e, "validateStatus") ? r.validateStatus = n(void 0, e.validateStatus) : delete r.validateStatus), r;
}
const bf = ["content-type", "content-length"];
function Of(e, t, r) {
  if (r !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([n, s]) => {
    bf.includes(n.toLowerCase()) && e.set(n, s);
  });
}
const Rf = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, r) => String.fromCharCode(parseInt(r, 16))
);
function ca(e) {
  const t = Qe({}, e), r = (R) => l.hasOwnProp(t, R) ? t[R] : void 0, n = r("data");
  let s = r("withXSRFToken");
  const a = r("xsrfHeaderName"), i = r("xsrfCookieName");
  let o = r("headers");
  const u = r("auth"), c = r("baseURL"), f = r("allowAbsoluteUrls"), h = r("url");
  if (t.headers = o = ae.from(o), t.url = sa(
    ua(c, h, f, t),
    r("params"),
    r("paramsSerializer")
  ), u) {
    const R = l.getSafeProp(u, "username") || "", P = l.getSafeProp(u, "password") || "";
    try {
      o.set(
        "Authorization",
        "Basic " + btoa(R + ":" + (P ? Rf(P) : ""))
      );
    } catch (N) {
      throw _.from(N, _.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (l.isFormData(n) && (re.hasStandardBrowserEnv || re.hasStandardBrowserWebWorkerEnv || l.isReactNative(n) ? o.setContentType(void 0) : l.isFunction(n.getHeaders) && Of(o, n.getHeaders(), r("formDataHeaderPolicy"))), re.hasStandardBrowserEnv && (l.isFunction(s) && (s = s(t)), s === !0 || s == null && cf(t.url))) {
    const P = a && i && ff.read(i);
    P && o.set(a, P);
  }
  return t;
}
const Df = typeof XMLHttpRequest < "u", Ef = Df && function(e) {
  return new Promise(function(r, n) {
    const s = ca(e);
    let a = s.data;
    const i = ae.from(s.headers).normalize();
    let { responseType: o, onUploadProgress: u, onDownloadProgress: c } = s, f, h, R, P, N;
    function U() {
      P && P(), N && N(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let O = new XMLHttpRequest();
    O.open(s.method.toUpperCase(), s.url, !0), O.timeout = s.timeout;
    function m() {
      if (!O)
        return;
      const k = ae.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), Q = {
        data: !o || o === "text" || o === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: k,
        config: e,
        request: O
      };
      la(
        function(ce) {
          r(ce), U();
        },
        function(ce) {
          n(ce), U();
        },
        Q
      ), O = null;
    }
    "onloadend" in O ? O.onloadend = m : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.startsWith("file:")) || setTimeout(m);
    }, O.onabort = function() {
      O && (n(new _("Request aborted", _.ECONNABORTED, e, O)), U(), O = null);
    }, O.onerror = function(F) {
      const Q = F && F.message ? F.message : "Network Error", $ = new _(Q, _.ERR_NETWORK, e, O);
      $.event = F || null, n($), U(), O = null;
    }, O.ontimeout = function() {
      let F = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const Q = s.transitional || pn;
      s.timeoutErrorMessage && (F = s.timeoutErrorMessage), n(
        new _(
          F,
          Q.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
          e,
          O
        )
      ), U(), O = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in O && l.forEach(Qs(i), function(F, Q) {
      O.setRequestHeader(Q, F);
    }), l.isUndefined(s.withCredentials) || (O.withCredentials = !!s.withCredentials), o && o !== "json" && (O.responseType = s.responseType), c && ([R, N] = rr(c, !0), O.addEventListener("progress", R)), u && O.upload && ([h, P] = rr(u), O.upload.addEventListener("progress", h), O.upload.addEventListener("loadend", P)), (s.cancelToken || s.signal) && (f = (k) => {
      O && (n(!k || k.type ? new Ft(null, e, O) : k), O.abort(), U(), O = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const T = of(s.url);
    if (T && !re.protocols.includes(T)) {
      n(
        new _(
          "Unsupported protocol " + T + ":",
          _.ERR_BAD_REQUEST,
          e
        )
      ), U();
      return;
    }
    O.send(a || null);
  });
}, Tf = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const r = new AbortController();
  let n = !1;
  const s = function(u) {
    if (!n) {
      n = !0, i();
      const c = u instanceof Error ? u : this.reason;
      r.abort(
        c instanceof _ ? c : new Ft(c instanceof Error ? c.message : c)
      );
    }
  };
  let a = t && setTimeout(() => {
    a = null, s(new _(`timeout of ${t}ms exceeded`, _.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((u) => {
      u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
    }), e = null);
  };
  e.forEach((u) => {
    if (!n) {
      if (u.aborted) {
        s.call(u);
        return;
      }
      u.addEventListener("abort", s, { once: !0 });
    }
  });
  const { signal: o } = r;
  return o.unsubscribe = () => l.asap(i), o;
}, kf = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, xf = async function* (e, t) {
  for await (const r of Mf(e))
    yield* kf(r, t);
}, Mf = async function* (e) {
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
}, Hn = (e, t, r, n) => {
  const s = xf(e, t);
  let a = 0, i, o = (u) => {
    i || (i = !0, n && n(u));
  };
  return new ReadableStream(
    {
      async pull(u) {
        try {
          const { done: c, value: f } = await s.next();
          if (c) {
            o(), u.close();
            return;
          }
          let h = f.byteLength;
          if (r) {
            let R = a += h;
            r(R);
          }
          u.enqueue(new Uint8Array(f));
        } catch (c) {
          throw o(c), c;
        }
      },
      cancel(u) {
        return o(u), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, qn = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, fa = (e, t, r) => t + 2 < r && qn(e.charCodeAt(t + 1)) && qn(e.charCodeAt(t + 2)), Bn = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Pf = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, vf = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Af = (e) => {
  const t = Math.floor(e / 4), r = e % 4;
  return t * 3 + (r === 2 ? 1 : r === 3 ? 2 : 0);
}, Nf = (e) => {
  const t = e.length;
  let r = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (r++, t > 1 && e.charCodeAt(t - 2) === 61 && r++), Math.floor((t - r) * 3 / 4);
}, Yf = (e) => {
  const t = e.length;
  let r = 0, n = 0, s = !1;
  for (let a = 0; a < t; a++) {
    let i = e.charCodeAt(a);
    if (i === 37 && fa(e, a, t) && (i = Bn(e.charCodeAt(a + 1)) * 16 + Bn(e.charCodeAt(a + 2)), a += 2), !vf(i)) {
      if (i === 61) {
        n++;
        continue;
      }
      if (!Pf(i) || n > 0) {
        s = !0;
        continue;
      }
      r++;
    }
  }
  return s || n > 2 || n > 0 && (r + n) % 4 !== 0 || r % 4 === 1 ? Nf(e) : Af(r);
}, Cf = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const r = e.indexOf(",");
  if (r < 0) return 0;
  const n = e.slice(5, r), s = e.slice(r + 1);
  if (/;base64/i.test(n))
    return t(s);
  let i = 0;
  for (let o = 0, u = s.length; o < u; o++) {
    const c = s.charCodeAt(o);
    if (c === 37 && fa(s, o, u))
      i += 1, o += 2;
    else if (c < 128)
      i += 1;
    else if (c < 2048)
      i += 2;
    else if (c >= 55296 && c <= 56319 && o + 1 < u) {
      const f = s.charCodeAt(o + 1);
      f >= 56320 && f <= 57343 ? (i += 4, o++) : i += 3;
    } else
      i += 3;
  }
  return i;
};
function Ff(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return Cf(
    t === -1 ? e : e.slice(0, t),
    Yf
  );
}
const _n = "1.19.0", Vn = 64 * 1024, { isFunction: jt } = l, Lf = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, r) => String.fromCharCode(parseInt(r, 16))
), $n = (e) => {
  if (!l.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, zn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Uf = (e) => {
  const t = e.indexOf("://");
  let r = e;
  return t !== -1 && (r = r.slice(t + 3)), r.includes("@") || r.includes(":");
}, If = (e) => {
  const t = l.global !== void 0 && l.global !== null ? l.global : globalThis, { ReadableStream: r, TextEncoder: n } = t;
  e = l.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: s, Request: a, Response: i } = e, o = s ? jt(s) : typeof fetch == "function", u = jt(a), c = jt(i);
  if (!o)
    return !1;
  const f = o && jt(r), h = o && (typeof n == "function" ? /* @__PURE__ */ ((m) => (T) => m.encode(T))(new n()) : async (m) => new Uint8Array(await new a(m).arrayBuffer())), R = u && f && zn(() => {
    let m = !1;
    const T = new a(re.origin, {
      body: new r(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }), k = T.headers.has("Content-Type");
    return T.body != null && T.body.cancel(), m && !k;
  }), P = c && f && zn(() => l.isReadableStream(new i("").body)), N = {
    stream: P && ((m) => m.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !N[m] && (N[m] = (T, k) => {
      let F = T && T[m];
      if (F)
        return F.call(T);
      throw new _(
        `Response type '${m}' is not supported`,
        _.ERR_NOT_SUPPORT,
        k
      );
    });
  });
  const U = async (m) => {
    if (m == null)
      return 0;
    if (l.isBlob(m))
      return m.size;
    if (l.isSpecCompliantForm(m))
      return (await new a(re.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(m) || l.isArrayBuffer(m))
      return m.byteLength;
    if (l.isURLSearchParams(m) && (m = m + ""), l.isString(m))
      return (await h(m)).byteLength;
  }, O = async (m, T) => {
    const k = l.toFiniteNumber(m.getContentLength());
    return k ?? U(T);
  };
  return async (m) => {
    let {
      url: T,
      method: k,
      data: F,
      signal: Q,
      cancelToken: $,
      timeout: ce,
      onDownloadProgress: w,
      onUploadProgress: b,
      responseType: D,
      headers: S,
      withCredentials: M = "same-origin",
      fetchOptions: te,
      maxContentLength: V,
      maxBodyLength: Y
    } = ca(m);
    const pe = l.isNumber(V) && V > -1, ke = l.isNumber(Y) && Y > -1, Lt = (I) => l.hasOwnProp(m, I) ? m[I] : void 0;
    let yt = s || fetch;
    D = D ? (D + "").toLowerCase() : "text";
    let ye = Tf(
      [Q, $ && $.toAbortSignal()],
      ce
    ), d = null;
    const x = ye && ye.unsubscribe && (() => {
      ye.unsubscribe();
    });
    let q, z = null;
    const qe = () => new _(
      "Request body larger than maxBodyLength limit",
      _.ERR_BAD_REQUEST,
      m,
      d
    );
    try {
      let I;
      const W = Lt("auth");
      if (W) {
        const v = l.getSafeProp(W, "username") || "", le = l.getSafeProp(W, "password") || "";
        I = {
          username: v,
          password: le
        };
      }
      if (Uf(T)) {
        const v = new URL(T, re.origin);
        if (!I && (v.username || v.password)) {
          const le = $n(v.username), Ie = $n(v.password);
          I = {
            username: le,
            password: Ie
          };
        }
        (v.username || v.password) && (v.username = "", v.password = "", T = v.href);
      }
      if (I && (S.delete("authorization"), S.set(
        "Authorization",
        "Basic " + btoa(Lf((I.username || "") + ":" + (I.password || "")))
      )), pe && typeof T == "string" && T.startsWith("data:") && Ff(T) > V)
        throw new _(
          "maxContentLength size of " + V + " exceeded",
          _.ERR_BAD_RESPONSE,
          m,
          d
        );
      if (ke && k !== "get" && k !== "head") {
        const v = await U(F);
        if (typeof v == "number" && isFinite(v) && (q = v, v > Y))
          throw qe();
      }
      const _e = ke && (l.isReadableStream(F) || l.isStream(F)), tt = (v, le, Ie) => Hn(
        v,
        Vn,
        (Be) => {
          if (ke && Be > Y)
            throw z = qe();
          le && le(Be);
        },
        Ie
      );
      if (R && k !== "get" && k !== "head" && (b || _e)) {
        if (q = q ?? await O(S, F), q !== 0 || _e) {
          let v = new a(T, {
            method: "POST",
            body: F,
            duplex: "half"
          }), le;
          if (l.isFormData(F) && (le = v.headers.get("content-type")) && S.setContentType(le), v.body) {
            const [Ie, Be] = b && Un(
              q,
              rr(In(b))
            ) || [];
            F = tt(v.body, Ie, Be);
          }
        }
      } else if (_e && !u && f && k !== "get" && k !== "head")
        F = tt(F);
      else if (_e && u && !R && k !== "get" && k !== "head")
        throw new _(
          "Stream request bodies are not supported by the current fetch implementation",
          _.ERR_NOT_SUPPORT,
          m,
          d
        );
      l.isString(M) || (M = M ? "include" : "omit");
      const _r = u && "credentials" in a.prototype;
      if (l.isFormData(F)) {
        const v = S.getContentType();
        v && /^multipart\/form-data/i.test(v) && !/boundary=/i.test(v) && S.delete("content-type");
      }
      S.set("User-Agent", "axios/" + _n, !1);
      const gn = {
        ...te,
        signal: ye,
        method: k.toUpperCase(),
        headers: Qs(S.normalize()),
        body: F,
        duplex: "half",
        credentials: _r ? M : void 0
      };
      d = u && new a(T, gn);
      let xe = await (u ? yt(d, te) : yt(T, gn));
      const Sn = ae.from(xe.headers);
      if (pe) {
        const v = l.toFiniteNumber(Sn.getContentLength());
        if (v != null && v > V)
          throw new _(
            "maxContentLength size of " + V + " exceeded",
            _.ERR_BAD_RESPONSE,
            m,
            d
          );
      }
      const wr = P && (D === "stream" || D === "response");
      if (P && xe.body && (w || pe || wr && x)) {
        const v = {};
        ["status", "statusText", "headers"].forEach((_t) => {
          v[_t] = xe[_t];
        });
        const le = l.toFiniteNumber(Sn.getContentLength()), [Ie, Be] = w && Un(
          le,
          rr(In(w), !0)
        ) || [];
        let bn = 0;
        const ga = (_t) => {
          if (pe && (bn = _t, bn > V))
            throw new _(
              "maxContentLength size of " + V + " exceeded",
              _.ERR_BAD_RESPONSE,
              m,
              d
            );
          Ie && Ie(_t);
        };
        xe = new i(
          Hn(xe.body, Vn, ga, () => {
            Be && Be(), x && x();
          }),
          v
        );
      }
      D = D || "text";
      let Me = await N[l.findKey(N, D) || "text"](
        xe,
        m
      );
      if (pe && !P && !wr) {
        let v;
        if (Me != null && (typeof Me.byteLength == "number" ? v = Me.byteLength : typeof Me.size == "number" ? v = Me.size : typeof Me == "string" && (v = typeof n == "function" ? new n().encode(Me).byteLength : Me.length)), typeof v == "number" && v > V)
          throw new _(
            "maxContentLength size of " + V + " exceeded",
            _.ERR_BAD_RESPONSE,
            m,
            d
          );
      }
      return !wr && x && x(), await new Promise((v, le) => {
        la(v, le, {
          data: Me,
          headers: ae.from(xe.headers),
          status: xe.status,
          statusText: xe.statusText,
          config: m,
          request: d
        });
      });
    } catch (I) {
      if (x && x(), ye && ye.aborted && ye.reason instanceof _) {
        const W = ye.reason;
        throw W.config = m, d && (W.request = d), I !== W && Object.defineProperty(W, "cause", {
          __proto__: null,
          value: I,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), W;
      }
      if (z)
        throw d && !z.request && (z.request = d), z;
      if (I instanceof _)
        throw d && !I.request && (I.request = d), I;
      if (I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message)) {
        const W = new _(
          "Network Error",
          _.ERR_NETWORK,
          m,
          d,
          I && I.response
        );
        throw Object.defineProperty(W, "cause", {
          __proto__: null,
          value: I.cause || I,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), W;
      }
      throw _.from(I, I && I.code, m, d, I && I.response);
    }
  };
}, Wf = /* @__PURE__ */ new Map(), da = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: s } = t, a = [n, s, r];
  let i = a.length, o = i, u, c, f = Wf;
  for (; o--; )
    u = a[o], c = f.get(u), c === void 0 && f.set(u, c = o ? /* @__PURE__ */ new Map() : If(t)), f = c;
  return c;
};
da();
const wn = {
  http: Bc,
  xhr: Ef,
  fetch: {
    get: da
  }
};
l.forEach(wn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Gn = (e) => `- ${e}`, jf = (e) => l.isFunction(e) || e === null || e === !1;
function Hf(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, s;
  const a = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let o;
    if (s = n, !jf(n) && (s = wn[(o = String(n)).toLowerCase()], s === void 0))
      throw new _(`Unknown adapter '${o}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    a[o || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(a).map(
      ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let o = r ? i.length > 1 ? `since :
` + i.map(Gn).join(`
`) : " " + Gn(i[0]) : "as no adapter specified";
    throw new _(
      "There is no suitable adapter to dispatch the request " + o,
      _.ERR_NOT_SUPPORT
    );
  }
  return s;
}
const ha = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Hf,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: wn
};
function xr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ft(null, e);
}
function Mr(e) {
  return xr(e), e.headers = ae.from(e.headers), e.data = kr.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ha.getAdapter(e.adapter || Ct.adapter, e)(e).then(
    function(n) {
      xr(e), e.response = n;
      try {
        n.data = kr.call(e, e.transformResponse, n);
      } finally {
        delete e.response;
      }
      return n.headers = ae.from(n.headers), n;
    },
    function(n) {
      if (!oa(n) && (xr(e), n && n.response)) {
        e.response = n.response;
        try {
          n.response.data = kr.call(
            e,
            e.transformResponse,
            n.response
          );
        } finally {
          delete e.response;
        }
        n.response.headers = ae.from(n.response.headers);
      }
      return Promise.reject(n);
    }
  );
}
const yr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jn = {};
yr.transitional = function(t, r, n) {
  function s(a, i) {
    return "[Axios v" + _n + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, o) => {
    if (t === !1)
      throw new _(
        s(i, " has been removed" + (r ? " in " + r : "")),
        _.ERR_DEPRECATED
      );
    return r && !Jn[i] && (Jn[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, o) : !0;
  };
};
yr.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function qf(e, t, r) {
  if (typeof e != "object" || e === null)
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], i = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (i) {
      const o = e[a], u = o === void 0 || i(o, a, e);
      if (u !== !0)
        throw new _(
          "option " + a + " must be " + u,
          _.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (r !== !0)
      throw new _("Unknown option " + a, _.ERR_BAD_OPTION);
  }
}
const zt = {
  assertOptions: qf,
  validators: yr
}, ne = zt.validators;
let Ze = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Fn(),
      response: new Fn()
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
`, i + 1), u = o === -1 ? "" : a.slice(o + 1);
            String(n.stack).endsWith(u) || (n.stack += `
` + a);
          }
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Qe(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && zt.assertOptions(
      n,
      {
        silentJSONParsing: ne.transitional(ne.boolean),
        forcedJSONParsing: ne.transitional(ne.boolean),
        clarifyTimeoutError: ne.transitional(ne.boolean),
        legacyInterceptorReqResOrdering: ne.transitional(ne.boolean),
        advertiseZstdAcceptEncoding: ne.transitional(ne.boolean),
        validateStatusUndefinedResolves: ne.transitional(ne.boolean)
      },
      !1
    ), s != null && (l.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : zt.assertOptions(
      s,
      {
        encode: ne.function,
        serialize: ne.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), zt.assertOptions(
      r,
      {
        baseUrl: ne.spelling("baseURL"),
        withXsrfToken: ne.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && l.merge(a.common, a[r.method]);
    a && l.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (N) => {
      delete a[N];
    }), r.headers = ae.concat(i, a);
    const o = [];
    let u = !0;
    this.interceptors.request.forEach(function(U) {
      if (typeof U.runWhen == "function" && U.runWhen(r) === !1)
        return;
      u = u && U.synchronous;
      const O = r.transitional || pn;
      O && O.legacyInterceptorReqResOrdering ? o.unshift(U.fulfilled, U.rejected) : o.push(U.fulfilled, U.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(U) {
      c.push(U.fulfilled, U.rejected);
    });
    let f, h = 0, R;
    if (!u) {
      const N = [Mr.bind(this), void 0];
      for (N.unshift(...o), N.push(...c), R = N.length, f = Promise.resolve(r); h < R; )
        f = f.then(N[h++], N[h++]);
      return f;
    }
    R = o.length;
    let P = r;
    for (; h < R; ) {
      const N = o[h++], U = o[h++];
      try {
        P = N ? N(P) : P;
      } catch (O) {
        if (!U) {
          f = Promise.reject(O);
          break;
        }
        try {
          const m = U.call(this, O);
          l.isThenable(m) && (f = Promise.resolve(m).then(
            () => Mr.call(this, P)
          ));
        } catch (m) {
          f = Promise.reject(m);
        }
        break;
      }
    }
    if (!f)
      try {
        f = Mr.call(this, P);
      } catch (N) {
        f = Promise.reject(N);
      }
    for (h = 0, R = c.length; h < R; )
      f = f.then(c[h++], c[h++]);
    return f;
  }
  getUri(t) {
    t = Qe(this.defaults, t);
    const r = ua(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return sa(r, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  Ze.prototype[t] = function(r, n) {
    return this.request(
      Qe(n || {}, {
        method: t,
        url: r,
        data: n && l.hasOwnProp(n, "data") ? n.data : void 0
      })
    );
  };
});
l.forEach(["post", "put", "patch", "query"], function(t) {
  function r(n) {
    return function(a, i, o) {
      return this.request(
        Qe(o || {}, {
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
  Ze.prototype[t] = r(), t !== "query" && (Ze.prototype[t + "Form"] = r(!0));
});
let Bf = class ma {
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
      n.reason || (n.reason = new Ft(a, i, o), r(n.reason));
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
      token: new ma(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Vf(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function $f(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Wr = {
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
Object.entries(Wr).forEach(([e, t]) => {
  Wr[t] = e;
});
function pa(e) {
  const t = new Ze(e), r = Bs(Ze.prototype.request, t);
  return l.extend(r, Ze.prototype, t, { allOwnKeys: !0 }), l.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return pa(Qe(e, s));
  }, r;
}
const K = pa(Ct);
K.Axios = Ze;
K.CanceledError = Ft;
K.CancelToken = Bf;
K.isCancel = oa;
K.VERSION = _n;
K.toFormData = pr;
K.AxiosError = _;
K.Cancel = K.CanceledError;
K.all = function(t) {
  return Promise.all(t);
};
K.spread = Vf;
K.isAxiosError = $f;
K.mergeConfig = Qe;
K.AxiosHeaders = ae;
K.formToJSON = (e) => ia(l.isHTMLForm(e) ? new FormData(e) : e);
K.getAdapter = ha.getAdapter;
K.HttpStatusCode = Wr;
K.default = K;
const {
  Axios: pd,
  AxiosError: yd,
  CanceledError: _d,
  isCancel: wd,
  CancelToken: gd,
  VERSION: Sd,
  all: bd,
  Cancel: Od,
  isAxiosError: Rd,
  spread: Dd,
  toFormData: Ed,
  AxiosHeaders: Td,
  HttpStatusCode: kd,
  formToJSON: xd,
  getAdapter: Md,
  mergeConfig: Pd,
  create: vd
} = K, zf = window.env.API_BASE_URL;
let st;
const Gt = K.create({
  baseURL: zf,
  headers: {
    "Content-Type": "application/json"
  }
});
Gt.interceptors.request.use((e) => {
  try {
    if (!st) {
      const r = window.localStorage.getItem("user");
      r && (st = JSON.parse(r));
    }
    if (e.url == "login" && (st = null), st) {
      const r = st.token;
      r && (e.headers.Authorization = "Bearer " + r, e.url == "logout" && (st = null));
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
const ya = ge.createContext({}), Gf = () => ge.useContext(ya), Ad = ({ children: e }) => {
  const [t, r] = ge.useState({});
  return /* @__PURE__ */ Je.jsx(
    ya.Provider,
    {
      value: {
        notificationData: t,
        setNotificationData: r
      },
      children: e
    }
  );
}, _a = ge.createContext(
  {}
), Jf = () => ge.useContext(_a), Nd = ({
  children: e
}) => {
  const { logout: t } = qs(), { setNotificationData: r } = Gf(), [n, s] = ge.useState([]), [a, i] = ge.useState([]), o = (w) => {
    const b = N(w.key);
    return b.path = w.path, b.pageSize = w.pageSize ?? 0, b.queryText = w.queryText ?? "", b.onSuccess = w.onSuccess, b;
  }, u = () => {
    i(Object.assign([], a));
  }, c = () => {
    s(Object.assign([], n));
  }, f = (w, b, D = !0, S = !0) => {
    let M = "";
    b = b.response, !b || !b.data || b.data instanceof String ? M = "Unhandled server exception." : b.data.message ? b.data.message.includes("Unauthenticated") ? (M = "Session has expired. Please login again.", F(), t()) : M = "Unhandled server exception." : M = b.data.error || "Unhandled server exception.", w.isLoading = !1, w.isDone = !0, M instanceof Object ? w.errors = M : (w.errorMessage = M, b && S && r({
      show_notification: !0,
      error_title: b.data.error_title,
      error_message: M
    })), D ? (w.data = [], c()) : u();
  }, h = (w) => {
    w.isDone = !1, R([w]);
  }, R = (w, b = !0) => {
    for (const D of w) {
      const S = N(D.key);
      if (S.path = D.path, S.onSuccess = D.onSuccess, !b && (S.isLoading || S.isDone))
        continue;
      if (!S.path) {
        setTimeout(() => {
          S.data = [], c();
        }, 500);
        continue;
      }
      const te = S.path.includes("?") ? "&" : "?";
      S.queryText.length >= 2 ? S.pathWithParams = `${S.path}${te}query_text=${S.queryText}` : S.pageSize ? S.pathWithParams = `${S.path}${te}page_size=${S.pageSize}&page=${S.currentPage}` : S.pathWithParams = S.path, S.isLoading = !0, c(), Gt.get(S.pathWithParams).then((V) => {
        if (!V.data) {
          f(S, V);
          return;
        }
        let Y = V.data.data;
        Y instanceof Object && Y.current_page ? (S.isPaginated = !0, S.currentPage = Y.current_page, S.lastPage = Y.last_page, S.total = Y.total, S.from = Y.from, Y = Y.data) : Y instanceof Object && Y.data ? (S.isPaginated = !1, S.total = Y.total, Y = Y.data, S.currentPage = 0, S.lastPage = 1) : (S.isPaginated = !1, S.currentPage = 0, S.lastPage = 1), Y instanceof Array ? (S.rawData = Y, S.data = S.rawData) : S.singleData = Y, S.isLoading = !1, S.isDone = !0, S.onSuccess && S.onSuccess(Y), c();
      }).catch((V) => {
        f(S, V);
      });
    }
  }, P = (w, b) => {
    let D = w.find((S) => S.key == b);
    return D || (D = {
      key: b,
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
    }, w.push(D)), D;
  }, N = (w) => P(n, w), U = (w, b, D) => {
    const S = N(w), M = S.rawData, te = M.links ? M.data : M;
    b = b.toLowerCase();
    let V = te.filter((Y) => {
      let pe = !1;
      return D.forEach((ke) => {
        if (Y[ke] && Y[ke].toLowerCase().includes(b))
          return pe = !0, !0;
      }), pe;
    });
    if (Object.prototype.hasOwnProperty.call(M, "links")) {
      const Y = JSON.parse(JSON.stringify(M));
      Y.data = V, V = Y;
    }
    S.data = V, c();
  }, O = (w) => P(a, w), m = (w) => {
    const b = O(w.key);
    if (b.isLoading) {
      console.warn(
        `Request ${w.key} is already in progress, ignoring duplicate submission`
      );
      return;
    }
    b.path = w.path, b.isLoading = !0, b.errorMessage = null, b.errors = null, u();
    const D = b.postData;
    w.extraParameters && Object.keys(w.extraParameters).forEach((M) => {
      D[M] = w.extraParameters[M];
    });
    const S = [];
    Object.keys(D).forEach((M) => {
      if (M.endsWith("_data-date")) {
        const te = M.replace("_data-date", ""), V = M, Y = te + "_data-time";
        D[V] && (D[Y] ? (D[te] = D[V] + " " + D[Y], D[te] = Mu(
          D[te]
        )) : D[te] = Pu(D[V])), S.push(V), S.push(Y);
      }
    }), S.forEach(function(M) {
      delete D[M];
    }), Gt.post(w.path, D).then((M) => {
      b.data = [], b.isLoading = !1, b.isDone = !0, u(), b.onSuccess && b.onSuccess(M.data.data), w.onSuccess && w.onSuccess(M.data.data, D), w.showToast !== !1 && r({
        show_notification: !0,
        success_title: M.data.success_title,
        success_message: M.data.success_message ? M.data.success_message : "Successfully saved."
      });
    }).catch((M) => {
      if (f(
        b,
        M,
        !1,
        w.showErrorToast ?? !0
      ), w.onError) {
        const te = M && M.response && M.response.data && M.response.data.error;
        w.onError(te);
      }
    });
  }, T = (w) => {
    const b = {
      key: w.key,
      path: w.path,
      pathWithParams: w.path,
      isLoading: !0,
      isDone: !1,
      data: [],
      errors: null,
      errorMessage: null
    };
    Gt.delete(w.path, { data: w.data }).then((D) => {
      b.isLoading = !1, b.isDone = !0, w.onSuccess && w.onSuccess(D.data.data), w.showToast !== !1 && r({
        show_notification: !0,
        success_title: D.data.success_title,
        success_message: D.data.success_message ? D.data.success_message : "Successfully deleted."
      });
    }).catch((D) => {
      if (f(
        b,
        D,
        !1,
        w.showErrorToast ?? !0
      ), w.onError) {
        const S = D && D.response && D.response.data && D.response.data.error;
        w.onError(S);
      }
    });
  }, k = (w, b) => {
    const D = O(w).errors;
    return D ? (b.endsWith("_data-date") ? b = w.replace("_data-date", "") : b.endsWith("_data-time") && (b = w.replace("_data-time", "")), D[b]) : !1;
  }, F = () => {
    s([]), i([]);
  }, Q = (w) => {
    const b = n.findIndex((D) => D.key === w);
    b > -1 && n.splice(b, 1);
  }, $ = (w) => {
    const b = a.findIndex((D) => D.key === w);
    b > -1 && (a.splice(b, 1), u());
  }, ce = (w) => O(w).postData.id == 0;
  return /* @__PURE__ */ Je.jsx(
    _a.Provider,
    {
      value: {
        fetchRequest: h,
        fetchRequests: R,
        submitPostRequest: m,
        submitDeleteRequest: T,
        createRequest: o,
        getRequest: N,
        getPostRequest: O,
        getPostRequestErrorProperty: k,
        notifyRequests: c,
        notifyPostRequests: u,
        isForCreation: ce,
        filterRequestData: U,
        clearRequest: Q,
        clearPostRequest: $,
        clearRequests: F
      },
      children: e
    }
  );
}, wa = ge.createContext({}), Yd = () => ge.useContext(wa), Cd = ({ children: e }) => {
  const { clearPostRequest: t } = Jf(), [r, n] = ge.useState([]), s = (o) => r.indexOf(o) > -1, a = (o) => {
    s(o) || (r.push(o), n(Object.assign([], r)));
  }, i = (o) => {
    s(o) && (t(o), r.splice(r.indexOf(o), 1), n(Object.assign([], r)));
  };
  return /* @__PURE__ */ Je.jsx(
    wa.Provider,
    {
      value: {
        isModalOpen: s,
        openModal: a,
        closeModal: i
      },
      children: e
    }
  );
}, Fd = (e) => {
  const { authUser: t } = qs();
  if (!t)
    return /* @__PURE__ */ Je.jsx(gr, { to: "/" });
  if (e.authorizedRole != null && e.authorizedRole != t.role_id)
    return /* @__PURE__ */ Je.jsx(gr, { to: "/not-authorized" });
  if (e.authorizedRoles != null) {
    let r = !1;
    if (e.authorizedRoles.forEach((n) => {
      if (n == t.role_id)
        return r = !0, !0;
    }), !r)
      return /* @__PURE__ */ Je.jsx(gr, { to: "/not-authorized" });
  }
  return e.children;
};
export {
  fd as AuthProvider,
  Cd as ModalProvider,
  Ad as NotificationProvider,
  Fd as ProtectedRoute,
  Nd as RequestProvider,
  ud as convertDMStoDecimal,
  cd as convertDecimaltoDMS,
  Tu as defaultDateFormat,
  Eu as defaultDateTimeFormat,
  ku as defaultTimeFormat,
  Qf as formatDate,
  Kf as formatDateTime,
  ld as formatDecimal,
  td as formatIsoDate,
  ed as formatIsoDateTime,
  rd as formatIsoDateTimeMilli,
  nd as formatIsoTime,
  od as formatLocalIsoDate,
  id as formatLocalIsoDateTime,
  vu as formatNumber,
  sd as formatTime,
  Pu as formatUtcIsoDate,
  ad as formatUtcIsoDateTime,
  Mu as formatUtcIsoDateTimeMilli,
  fn as isoDateFormat,
  cn as isoDateTimeFormat,
  js as isoDateTimeMilliFormat,
  xu as isoTimeFormat,
  qs as useAuthContext,
  Yd as useModalContext,
  Gf as useNotificationContext,
  Jf as useRequestContext
};
