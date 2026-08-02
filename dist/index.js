import * as m from "react";
import q, { useState as Yn, createContext as Gi, useMemo as Sa, useContext as en, useEffect as wt, isValidElement as qf, version as Qv, useRef as Fe, useLayoutEffect as ep, forwardRef as xa, useImperativeHandle as Rc, cloneElement as tp } from "react";
import { Navigate as ks, useNavigate as Gf, useLocation as np } from "react-router-dom";
import { Input as mi, DatePicker as rp, TimePicker as Au, Select as ap, InputNumber as op, Checkbox as ip, Switch as sp, Form as Kf, Modal as lp, Button as lt, Typography as na, theme as Xf, Spin as cp, Pagination as up, Table as Zf, Card as Tc, Row as Pi, Col as ra, Space as eo, Tooltip as Rn, notification as dp, Layout as Fu, Menu as fp, Flex as bl, Radio as hp } from "antd";
import ju, { createPortal as mp } from "react-dom";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Jf;
function K() {
  return Jf.apply(null, arguments);
}
function gp(e) {
  Jf = e;
}
function pn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Cr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function je(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Pc(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (je(e, t))
      return !1;
  return !0;
}
function Vt(e) {
  return e === void 0;
}
function qn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function wo(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Qf(e, t) {
  var n = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    n.push(t(e[r], r));
  return n;
}
function ar(e, t) {
  for (var n in t)
    je(t, n) && (e[n] = t[n]);
  return je(t, "toString") && (e.toString = t.toString), je(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Mn(e, t, n, r) {
  return xh(e, t, n, r, !0).utc();
}
function vp() {
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
function Oe(e) {
  return e._pf == null && (e._pf = vp()), e._pf;
}
var wl;
Array.prototype.some ? wl = Array.prototype.some : wl = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Mc(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = Oe(e), n = wl.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Ki(e) {
  var t = Mn(NaN);
  return e != null ? ar(Oe(t), e) : Oe(t).userInvalidated = !0, t;
}
var Iu = K.momentProperties = [], As = !1;
function $c(e, t) {
  var n, r, a, o = Iu.length;
  if (Vt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Vt(t._i) || (e._i = t._i), Vt(t._f) || (e._f = t._f), Vt(t._l) || (e._l = t._l), Vt(t._strict) || (e._strict = t._strict), Vt(t._tzm) || (e._tzm = t._tzm), Vt(t._isUTC) || (e._isUTC = t._isUTC), Vt(t._offset) || (e._offset = t._offset), Vt(t._pf) || (e._pf = Oe(t)), Vt(t._locale) || (e._locale = t._locale), o > 0)
    for (n = 0; n < o; n++)
      r = Iu[n], a = t[r], Vt(a) || (e[r] = a);
  return e;
}
function So(e) {
  $c(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), As === !1 && (As = !0, K.updateOffset(this), As = !1);
}
function yn(e) {
  return e instanceof So || e != null && e._isAMomentObject != null;
}
function eh(e) {
  K.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function rn(e, t) {
  var n = !0;
  return ar(function() {
    if (K.deprecationHandler != null && K.deprecationHandler(null, e), n) {
      var r = [], a, o, i, s = arguments.length;
      for (o = 0; o < s; o++) {
        if (a = "", typeof arguments[o] == "object") {
          a += `
[` + o + "] ";
          for (i in arguments[0])
            je(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[o];
        r.push(a);
      }
      eh(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Lu = {};
function th(e, t) {
  K.deprecationHandler != null && K.deprecationHandler(e, t), Lu[e] || (eh(t), Lu[e] = !0);
}
K.suppressDeprecationWarnings = !1;
K.deprecationHandler = null;
function $n(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function pp(e) {
  var t, n;
  for (n in e)
    je(e, n) && (t = e[n], $n(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Sl(e, t) {
  var n = ar({}, e), r;
  for (r in t)
    je(t, r) && (Cr(e[r]) && Cr(t[r]) ? (n[r] = {}, ar(n[r], e[r]), ar(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    je(e, r) && !je(t, r) && Cr(e[r]) && (n[r] = ar({}, n[r]));
  return n;
}
function Dc(e) {
  e != null && this.set(e);
}
var xl;
Object.keys ? xl = Object.keys : xl = function(e) {
  var t, n = [];
  for (t in e)
    je(e, t) && n.push(t);
  return n;
};
var yp = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function bp(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return $n(r) ? r.call(t, n) : r;
}
function Pn(e, t, n) {
  var r = "" + Math.abs(e), a = t - r.length, o = e >= 0;
  return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Nc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ko = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Fs = {}, aa = {};
function ge(e, t, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (aa[e] = a), t && (aa[t[0]] = function() {
    return Pn(a.apply(this, arguments), t[1], t[2]);
  }), n && (aa[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function wp(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Sp(e) {
  var t = e.match(Nc), n, r;
  for (n = 0, r = t.length; n < r; n++)
    aa[t[n]] ? t[n] = aa[t[n]] : t[n] = wp(t[n]);
  return function(a) {
    var o = "", i;
    for (i = 0; i < r; i++)
      o += $n(t[i]) ? t[i].call(a, e) : t[i];
    return o;
  };
}
function gi(e, t) {
  return e.isValid() ? (t = nh(t, e.localeData()), Fs[t] = Fs[t] || Sp(t), Fs[t](e)) : e.localeData().invalidDate();
}
function nh(e, t) {
  var n = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Ko.lastIndex = 0; n >= 0 && Ko.test(e); )
    e = e.replace(
      Ko,
      r
    ), Ko.lastIndex = 0, n -= 1;
  return e;
}
var xp = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Cp(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Nc).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Ep = "Invalid date";
function _p() {
  return this._invalidDate;
}
var Op = "%d", Rp = /\d{1,2}/;
function Tp(e) {
  return this._ordinal.replace("%d", e);
}
var Pp = {
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
function Mp(e, t, n, r) {
  var a = this._relativeTime[n];
  return $n(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
}
function $p(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return $n(n) ? n(t) : n.replace(/%s/i, t);
}
var Vu = {
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
function an(e) {
  return typeof e == "string" ? Vu[e] || Vu[e.toLowerCase()] : void 0;
}
function kc(e) {
  var t = {}, n, r;
  for (r in e)
    je(e, r) && (n = an(r), n && (t[n] = e[r]));
  return t;
}
var Dp = {
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
function Np(e) {
  var t = [], n;
  for (n in e)
    je(e, n) && t.push({ unit: n, priority: Dp[n] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var rh = /\d/, qt = /\d\d/, ah = /\d{3}/, Ac = /\d{4}/, Xi = /[+-]?\d{6}/, Ze = /\d\d?/, oh = /\d\d\d\d?/, ih = /\d\d\d\d\d\d?/, Zi = /\d{1,3}/, Fc = /\d{1,4}/, Ji = /[+-]?\d{1,6}/, Ca = /\d+/, Qi = /[+-]?\d+/, kp = /Z|[+-]\d\d:?\d\d/gi, es = /Z|[+-]\d\d(?::?\d\d)?/gi, Ap = /[+-]?\d+(\.\d{1,3})?/, xo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ea = /^[1-9]\d?/, jc = /^([1-9]\d|\d)/, Mi;
Mi = {};
function ie(e, t, n) {
  Mi[e] = $n(t) ? t : function(r, a) {
    return r && n ? n : t;
  };
}
function Fp(e, t) {
  return je(Mi, e) ? Mi[e](t._strict, t._locale) : new RegExp(jp(e));
}
function jp(e) {
  return Bn(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, a, o) {
        return n || r || a || o;
      }
    )
  );
}
function Bn(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Qt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Me(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Qt(t)), n;
}
var Cl = {};
function Ge(e, t) {
  var n, r = t, a;
  for (typeof e == "string" && (e = [e]), qn(t) && (r = function(o, i) {
    i[t] = Me(o);
  }), a = e.length, n = 0; n < a; n++)
    Cl[e[n]] = r;
}
function Co(e, t) {
  Ge(e, function(n, r, a, o) {
    a._w = a._w || {}, t(n, a._w, a, o);
  });
}
function Ip(e, t, n) {
  t != null && je(Cl, e) && Cl[e](t, n._a, n, e);
}
function ts(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Nt = 0, Vn = 1, On = 2, bt = 3, mn = 4, zn = 5, wr = 6, Lp = 7, Vp = 8;
ge("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Pn(e, 4) : "+" + e;
});
ge(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
ge(0, ["YYYY", 4], 0, "year");
ge(0, ["YYYYY", 5], 0, "year");
ge(0, ["YYYYYY", 6, !0], 0, "year");
ie("Y", Qi);
ie("YY", Ze, qt);
ie("YYYY", Fc, Ac);
ie("YYYYY", Ji, Xi);
ie("YYYYYY", Ji, Xi);
Ge(["YYYYY", "YYYYYY"], Nt);
Ge("YYYY", function(e, t) {
  t[Nt] = e.length === 2 ? K.parseTwoDigitYear(e) : Me(e);
});
Ge("YY", function(e, t) {
  t[Nt] = K.parseTwoDigitYear(e);
});
Ge("Y", function(e, t) {
  t[Nt] = parseInt(e, 10);
});
function Ka(e) {
  return ts(e) ? 366 : 365;
}
K.parseTwoDigitYear = function(e) {
  return Me(e) + (Me(e) > 68 ? 1900 : 2e3);
};
var sh = _a("FullYear", !0);
function zp() {
  return ts(this.year());
}
function _a(e, t) {
  return function(n) {
    return n != null ? (lh(this, e, n), K.updateOffset(this, t), this) : to(this, e);
  };
}
function to(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return r ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return r ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return r ? n.getUTCHours() : n.getHours();
    case "Date":
      return r ? n.getUTCDate() : n.getDate();
    case "Day":
      return r ? n.getUTCDay() : n.getDay();
    case "Month":
      return r ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return r ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function lh(e, t, n) {
  var r, a, o, i, s;
  if (!(!e.isValid() || isNaN(n))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
      case "Seconds":
        return void (a ? r.setUTCSeconds(n) : r.setSeconds(n));
      case "Minutes":
        return void (a ? r.setUTCMinutes(n) : r.setMinutes(n));
      case "Hours":
        return void (a ? r.setUTCHours(n) : r.setHours(n));
      case "Date":
        return void (a ? r.setUTCDate(n) : r.setDate(n));
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
    o = n, i = e.month(), s = e.date(), s = s === 29 && i === 1 && !ts(o) ? 28 : s, a ? r.setUTCFullYear(o, i, s) : r.setFullYear(o, i, s);
  }
}
function Hp(e) {
  return e = an(e), $n(this[e]) ? this[e]() : this;
}
function Bp(e, t) {
  if (typeof e == "object") {
    e = kc(e);
    var n = Np(e), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = an(e), $n(this[e]))
    return this[e](t);
  return this;
}
function Wp(e, t) {
  return (e % t + t) % t;
}
var ht;
Array.prototype.indexOf ? ht = Array.prototype.indexOf : ht = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ic(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = Wp(t, 12);
  return e += (t - n) / 12, n === 1 ? ts(e) ? 29 : 28 : 31 - n % 7 % 2;
}
ge("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
ge("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
ge("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
ie("M", Ze, Ea);
ie("MM", Ze, qt);
ie("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
ie("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Ge(["M", "MM"], function(e, t) {
  t[Vn] = Me(e) - 1;
});
Ge(["MMM", "MMMM"], function(e, t, n, r) {
  var a = n._locale.monthsParse(e, r, n._strict);
  a != null ? t[Vn] = a : Oe(n).invalidMonth = e;
});
var Up = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ch = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), uh = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Yp = xo, qp = xo;
function Gp(e, t) {
  return e ? pn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || uh).test(t) ? "format" : "standalone"][e.month()] : pn(this._months) ? this._months : this._months.standalone;
}
function Kp(e, t) {
  return e ? pn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[uh.test(t) ? "format" : "standalone"][e.month()] : pn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Xp(e, t, n) {
  var r, a, o, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      o = Mn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        o,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (a = ht.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = ht.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = ht.call(this._shortMonthsParse, i), a !== -1 ? a : (a = ht.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = ht.call(this._longMonthsParse, i), a !== -1 ? a : (a = ht.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Zp(e, t, n) {
  var r, a, o;
  if (this._monthsParseExact)
    return Xp.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = Mn([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function dh(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Me(t);
    else if (t = e.localeData().monthsParse(t), !qn(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Ic(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function fh(e) {
  return e != null ? (dh(this, e), K.updateOffset(this, !0), this) : to(this, "Month");
}
function Jp() {
  return Ic(this.year(), this.month());
}
function Qp(e) {
  return this._monthsParseExact ? (je(this, "_monthsRegex") || hh.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (je(this, "_monthsShortRegex") || (this._monthsShortRegex = Yp), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function e0(e) {
  return this._monthsParseExact ? (je(this, "_monthsRegex") || hh.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (je(this, "_monthsRegex") || (this._monthsRegex = qp), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function hh() {
  function e(l, c) {
    return c.length - l.length;
  }
  var t = [], n = [], r = [], a, o, i, s;
  for (a = 0; a < 12; a++)
    o = Mn([2e3, a]), i = Bn(this.monthsShort(o, "")), s = Bn(this.months(o, "")), t.push(i), n.push(s), r.push(s), r.push(i);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function t0(e, t, n, r, a, o, i) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, n, r, a, o, i), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, r, a, o, i), s;
}
function no(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function $i(e, t, n) {
  var r = 7 + t - n, a = (7 + no(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function mh(e, t, n, r, a) {
  var o = (7 + n - r) % 7, i = $i(e, r, a), s = 1 + 7 * (t - 1) + o + i, l, c;
  return s <= 0 ? (l = e - 1, c = Ka(l) + s) : s > Ka(e) ? (l = e + 1, c = s - Ka(e)) : (l = e, c = s), {
    year: l,
    dayOfYear: c
  };
}
function ro(e, t, n) {
  var r = $i(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, o, i;
  return a < 1 ? (i = e.year() - 1, o = a + Wn(i, t, n)) : a > Wn(e.year(), t, n) ? (o = a - Wn(e.year(), t, n), i = e.year() + 1) : (i = e.year(), o = a), {
    week: o,
    year: i
  };
}
function Wn(e, t, n) {
  var r = $i(e, t, n), a = $i(e + 1, t, n);
  return (Ka(e) - r + a) / 7;
}
ge("w", ["ww", 2], "wo", "week");
ge("W", ["WW", 2], "Wo", "isoWeek");
ie("w", Ze, Ea);
ie("ww", Ze, qt);
ie("W", Ze, Ea);
ie("WW", Ze, qt);
Co(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Me(e);
  }
);
function n0(e) {
  return ro(e, this._week.dow, this._week.doy).week;
}
var r0 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function a0() {
  return this._week.dow;
}
function o0() {
  return this._week.doy;
}
function i0(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function s0(e) {
  var t = ro(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
ge("d", 0, "do", "day");
ge("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
ge("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
ge("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
ge("e", 0, 0, "weekday");
ge("E", 0, 0, "isoWeekday");
ie("d", Ze);
ie("e", Ze);
ie("E", Ze);
ie("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
ie("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
ie("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Co(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var a = n._locale.weekdaysParse(e, r, n._strict);
  a != null ? t.d = a : Oe(n).invalidWeekday = e;
});
Co(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Me(e);
});
function l0(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function c0(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Lc(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var u0 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), gh = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), d0 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), f0 = xo, h0 = xo, m0 = xo;
function g0(e, t) {
  var n = pn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Lc(n, this._week.dow) : e ? n[e.day()] : n;
}
function v0(e) {
  return e === !0 ? Lc(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function p0(e) {
  return e === !0 ? Lc(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function y0(e, t, n) {
  var r, a, o, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      o = Mn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        o,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        o,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (a = ht.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = ht.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = ht.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = ht.call(this._weekdaysParse, i), a !== -1 || (a = ht.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = ht.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = ht.call(this._shortWeekdaysParse, i), a !== -1 || (a = ht.call(this._weekdaysParse, i), a !== -1) ? a : (a = ht.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = ht.call(this._minWeekdaysParse, i), a !== -1 || (a = ht.call(this._weekdaysParse, i), a !== -1) ? a : (a = ht.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function b0(e, t, n) {
  var r, a, o;
  if (this._weekdaysParseExact)
    return y0.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = Mn([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (o = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function w0(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = to(this, "Day");
  return e != null ? (e = l0(e, this.localeData()), this.add(e - t, "d")) : t;
}
function S0(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function x0(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = c0(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function C0(e) {
  return this._weekdaysParseExact ? (je(this, "_weekdaysRegex") || Vc.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (je(this, "_weekdaysRegex") || (this._weekdaysRegex = f0), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function E0(e) {
  return this._weekdaysParseExact ? (je(this, "_weekdaysRegex") || Vc.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (je(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = h0), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function _0(e) {
  return this._weekdaysParseExact ? (je(this, "_weekdaysRegex") || Vc.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (je(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = m0), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Vc() {
  function e(u, d) {
    return d.length - u.length;
  }
  var t = [], n = [], r = [], a = [], o, i, s, l, c;
  for (o = 0; o < 7; o++)
    i = Mn([2e3, 1]).day(o), s = Bn(this.weekdaysMin(i, "")), l = Bn(this.weekdaysShort(i, "")), c = Bn(this.weekdays(i, "")), t.push(s), n.push(l), r.push(c), a.push(s), a.push(l), a.push(c);
  t.sort(e), n.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function zc() {
  return this.hours() % 12 || 12;
}
function O0() {
  return this.hours() || 24;
}
ge("H", ["HH", 2], 0, "hour");
ge("h", ["hh", 2], 0, zc);
ge("k", ["kk", 2], 0, O0);
ge("hmm", 0, 0, function() {
  return "" + zc.apply(this) + Pn(this.minutes(), 2);
});
ge("hmmss", 0, 0, function() {
  return "" + zc.apply(this) + Pn(this.minutes(), 2) + Pn(this.seconds(), 2);
});
ge("Hmm", 0, 0, function() {
  return "" + this.hours() + Pn(this.minutes(), 2);
});
ge("Hmmss", 0, 0, function() {
  return "" + this.hours() + Pn(this.minutes(), 2) + Pn(this.seconds(), 2);
});
function vh(e, t) {
  ge(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
vh("a", !0);
vh("A", !1);
function ph(e, t) {
  return t._meridiemParse;
}
ie("a", ph);
ie("A", ph);
ie("H", Ze, jc);
ie("h", Ze, Ea);
ie("k", Ze, Ea);
ie("HH", Ze, qt);
ie("hh", Ze, qt);
ie("kk", Ze, qt);
ie("hmm", oh);
ie("hmmss", ih);
ie("Hmm", oh);
ie("Hmmss", ih);
Ge(["H", "HH"], bt);
Ge(["k", "kk"], function(e, t, n) {
  var r = Me(e);
  t[bt] = r === 24 ? 0 : r;
});
Ge(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Ge(["h", "hh"], function(e, t, n) {
  t[bt] = Me(e), Oe(n).bigHour = !0;
});
Ge("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[bt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r)), Oe(n).bigHour = !0;
});
Ge("hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[bt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r, 2)), t[zn] = Me(e.substr(a)), Oe(n).bigHour = !0;
});
Ge("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[bt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r));
});
Ge("Hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[bt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r, 2)), t[zn] = Me(e.substr(a));
});
function R0(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var T0 = /[ap]\.?m?\.?/i, P0 = _a("Hours", !0);
function M0(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var yh = {
  calendar: yp,
  longDateFormat: xp,
  invalidDate: Ep,
  ordinal: Op,
  dayOfMonthOrdinalParse: Rp,
  relativeTime: Pp,
  months: Up,
  monthsShort: ch,
  week: r0,
  weekdays: u0,
  weekdaysMin: d0,
  weekdaysShort: gh,
  meridiemParse: T0
}, nt = {}, Va = {}, ao;
function $0(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function zu(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function D0(e) {
  for (var t = 0, n, r, a, o; t < e.length; ) {
    for (o = zu(e[t]).split("-"), n = o.length, r = zu(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = ns(o.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && $0(o, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return ao;
}
function N0(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ns(e) {
  var t = null, n;
  if (nt[e] === void 0 && typeof module < "u" && module && module.exports && N0(e))
    try {
      t = ao._abbr, n = require, n("./locale/" + e), lr(t);
    } catch {
      nt[e] = null;
    }
  return nt[e];
}
function lr(e, t) {
  var n;
  return e && (Vt(t) ? n = Gn(e) : n = Hc(e, t), n ? ao = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ao._abbr;
}
function Hc(e, t) {
  if (t !== null) {
    var n, r = yh;
    if (t.abbr = e, nt[e] != null)
      th(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = nt[e]._config;
    else if (t.parentLocale != null)
      if (nt[t.parentLocale] != null)
        r = nt[t.parentLocale]._config;
      else if (n = ns(t.parentLocale), n != null)
        r = n._config;
      else
        return Va[t.parentLocale] || (Va[t.parentLocale] = []), Va[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return nt[e] = new Dc(Sl(r, t)), Va[e] && Va[e].forEach(function(a) {
      Hc(a.name, a.config);
    }), lr(e), nt[e];
  } else
    return delete nt[e], null;
}
function k0(e, t) {
  if (t != null) {
    var n, r, a = yh;
    nt[e] != null && nt[e].parentLocale != null ? nt[e].set(Sl(nt[e]._config, t)) : (r = ns(e), r != null && (a = r._config), t = Sl(a, t), r == null && (t.abbr = e), n = new Dc(t), n.parentLocale = nt[e], nt[e] = n), lr(e);
  } else
    nt[e] != null && (nt[e].parentLocale != null ? (nt[e] = nt[e].parentLocale, e === lr() && lr(e)) : nt[e] != null && delete nt[e]);
  return nt[e];
}
function Gn(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ao;
  if (!pn(e)) {
    if (t = ns(e), t)
      return t;
    e = [e];
  }
  return D0(e);
}
function A0() {
  return xl(nt);
}
function Bc(e) {
  var t, n = e._a;
  return n && Oe(e).overflow === -2 && (t = n[Vn] < 0 || n[Vn] > 11 ? Vn : n[On] < 1 || n[On] > Ic(n[Nt], n[Vn]) ? On : n[bt] < 0 || n[bt] > 24 || n[bt] === 24 && (n[mn] !== 0 || n[zn] !== 0 || n[wr] !== 0) ? bt : n[mn] < 0 || n[mn] > 59 ? mn : n[zn] < 0 || n[zn] > 59 ? zn : n[wr] < 0 || n[wr] > 999 ? wr : -1, Oe(e)._overflowDayOfYear && (t < Nt || t > On) && (t = On), Oe(e)._overflowWeeks && t === -1 && (t = Lp), Oe(e)._overflowWeekday && t === -1 && (t = Vp), Oe(e).overflow = t), e;
}
var F0 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, j0 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, I0 = /Z|[+-]\d\d(?::?\d\d)?/, Xo = [
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
], js = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], L0 = /^\/?Date\((-?\d+)/i, V0 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, z0 = {
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
function bh(e) {
  var t, n, r = e._i, a = F0.exec(r) || j0.exec(r), o, i, s, l, c = Xo.length, u = js.length;
  if (a) {
    for (Oe(e).iso = !0, t = 0, n = c; t < n; t++)
      if (Xo[t][1].exec(a[1])) {
        i = Xo[t][0], o = Xo[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, n = u; t < n; t++)
        if (js[t][1].exec(a[3])) {
          s = (a[2] || " ") + js[t][0];
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!o && s != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (I0.exec(a[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (s || "") + (l || ""), Uc(e);
  } else
    e._isValid = !1;
}
function H0(e, t, n, r, a, o) {
  var i = [
    B0(e),
    ch.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return o && i.push(parseInt(o, 10)), i;
}
function B0(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function W0(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function U0(e, t, n) {
  if (e) {
    var r = gh.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return Oe(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function Y0(e, t, n) {
  if (e)
    return z0[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), a = r % 100, o = (r - a) / 100;
  return o * 60 + a;
}
function wh(e) {
  var t = V0.exec(W0(e._i)), n;
  if (t) {
    if (n = H0(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !U0(t[1], n, e))
      return;
    e._a = n, e._tzm = Y0(t[8], t[9], t[10]), e._d = no.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Oe(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function q0(e) {
  var t = L0.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (bh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (wh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : K.createFromInputFallback(e);
}
K.createFromInputFallback = rn(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Zr(e, t, n) {
  return e ?? t ?? n;
}
function G0(e) {
  var t = new Date(K.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Wc(e) {
  var t, n, r = [], a, o, i;
  if (!e._d) {
    for (a = G0(e), e._w && e._a[On] == null && e._a[Vn] == null && K0(e), e._dayOfYear != null && (i = Zr(e._a[Nt], a[Nt]), (e._dayOfYear > Ka(i) || e._dayOfYear === 0) && (Oe(e)._overflowDayOfYear = !0), n = no(i, 0, e._dayOfYear), e._a[Vn] = n.getUTCMonth(), e._a[On] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[bt] === 24 && e._a[mn] === 0 && e._a[zn] === 0 && e._a[wr] === 0 && (e._nextDay = !0, e._a[bt] = 0), e._d = (e._useUTC ? no : t0).apply(
      null,
      r
    ), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[bt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (Oe(e).weekdayMismatch = !0);
  }
}
function K0(e) {
  var t, n, r, a, o, i, s, l, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, i = 4, n = Zr(
    t.GG,
    e._a[Nt],
    ro(Xe(), 1, 4).year
  ), r = Zr(t.W, 1), a = Zr(t.E, 1), (a < 1 || a > 7) && (l = !0)) : (o = e._locale._week.dow, i = e._locale._week.doy, c = ro(Xe(), o, i), n = Zr(t.gg, e._a[Nt], c.year), r = Zr(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (l = !0)) : t.e != null ? (a = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : a = o), r < 1 || r > Wn(n, o, i) ? Oe(e)._overflowWeeks = !0 : l != null ? Oe(e)._overflowWeekday = !0 : (s = mh(n, r, a, o, i), e._a[Nt] = s.year, e._dayOfYear = s.dayOfYear);
}
K.ISO_8601 = function() {
};
K.RFC_2822 = function() {
};
function Uc(e) {
  if (e._f === K.ISO_8601) {
    bh(e);
    return;
  }
  if (e._f === K.RFC_2822) {
    wh(e);
    return;
  }
  e._a = [], Oe(e).empty = !0;
  var t = "" + e._i, n, r, a, o, i, s = t.length, l = 0, c, u;
  for (a = nh(e._f, e._locale).match(Nc) || [], u = a.length, n = 0; n < u; n++)
    o = a[n], r = (t.match(Fp(o, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && Oe(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), l += r.length), aa[o] ? (r ? Oe(e).empty = !1 : Oe(e).unusedTokens.push(o), Ip(o, r, e)) : e._strict && !r && Oe(e).unusedTokens.push(o);
  Oe(e).charsLeftOver = s - l, t.length > 0 && Oe(e).unusedInput.push(t), e._a[bt] <= 12 && Oe(e).bigHour === !0 && e._a[bt] > 0 && (Oe(e).bigHour = void 0), Oe(e).parsedDateParts = e._a.slice(0), Oe(e).meridiem = e._meridiem, e._a[bt] = X0(
    e._locale,
    e._a[bt],
    e._meridiem
  ), c = Oe(e).era, c !== null && (e._a[Nt] = e._locale.erasConvertYear(c, e._a[Nt])), Wc(e), Bc(e);
}
function X0(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Z0(e) {
  var t, n, r, a, o, i, s = !1, l = e._f.length;
  if (l === 0) {
    Oe(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < l; a++)
    o = 0, i = !1, t = $c({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Uc(t), Mc(t) && (i = !0), o += Oe(t).charsLeftOver, o += Oe(t).unusedTokens.length * 10, Oe(t).score = o, s ? o < r && (r = o, n = t) : (r == null || o < r || i) && (r = o, n = t, i && (s = !0));
  ar(e, n || t);
}
function J0(e) {
  if (!e._d) {
    var t = kc(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Qf(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Wc(e);
  }
}
function Q0(e) {
  var t = new So(Bc(Sh(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Sh(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Gn(e._l), t === null || n === void 0 && t === "" ? Ki({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), yn(t) ? new So(Bc(t)) : (wo(t) ? e._d = t : pn(n) ? Z0(e) : n ? Uc(e) : ey(e), Mc(e) || (e._d = null), e));
}
function ey(e) {
  var t = e._i;
  Vt(t) ? e._d = new Date(K.now()) : wo(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? q0(e) : pn(t) ? (e._a = Qf(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Wc(e)) : Cr(t) ? J0(e) : qn(t) ? e._d = new Date(t) : K.createFromInputFallback(e);
}
function xh(e, t, n, r, a) {
  var o = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Cr(e) && Pc(e) || pn(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = e, o._f = t, o._strict = r, Q0(o);
}
function Xe(e, t, n, r) {
  return xh(e, t, n, r, !1);
}
var ty = rn(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Xe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ki();
  }
), ny = rn(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Xe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ki();
  }
);
function Ch(e, t) {
  var n, r;
  if (t.length === 1 && pn(t[0]) && (t = t[0]), !t.length)
    return Xe();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function ry() {
  var e = [].slice.call(arguments, 0);
  return Ch("isBefore", e);
}
function ay() {
  var e = [].slice.call(arguments, 0);
  return Ch("isAfter", e);
}
var oy = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, za = [
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
function iy(e) {
  var t, n = !1, r, a = za.length;
  for (t in e)
    if (je(e, t) && !(ht.call(za, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[za[r]]) {
      if (n)
        return !1;
      parseFloat(e[za[r]]) !== Me(e[za[r]]) && (n = !0);
    }
  return !0;
}
function sy() {
  return this._isValid;
}
function ly() {
  return wn(NaN);
}
function rs(e) {
  var t = kc(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, o = t.week || t.isoWeek || 0, i = t.day || 0, s = t.hour || 0, l = t.minute || 0, c = t.second || 0, u = t.millisecond || 0;
  this._isValid = iy(t), this._milliseconds = +u + c * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +i + o * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = Gn(), this._bubble();
}
function vi(e) {
  return e instanceof rs;
}
function El(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function cy(e, t, n) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), o = 0, i;
  for (i = 0; i < r; i++)
    Me(e[i]) !== Me(t[i]) && o++;
  return o + a;
}
function Eh(e, t) {
  ge(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Pn(~~(n / 60), 2) + t + Pn(~~n % 60, 2);
  });
}
Eh("Z", ":");
Eh("ZZ", "");
ie("Z", es);
ie("ZZ", es);
Ge(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Yc(es, e);
});
var uy = /([\+\-]|\d\d)/gi;
function Yc(e, t) {
  var n = (t || "").match(e), r, a, o;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(uy) || ["-", 0, 0], o = +(a[1] * 60) + Me(a[2]), o === 0 ? 0 : a[0] === "+" ? o : -o);
}
function qc(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (yn(e) || wo(e) ? e.valueOf() : Xe(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), K.updateOffset(n, !1), n) : Xe(e).local();
}
function _l(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
K.updateOffset = function() {
};
function dy(e, t, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Yc(es, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = _l(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Rh(
      this,
      wn(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, K.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : _l(this);
}
function fy(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function hy(e) {
  return this.utcOffset(0, e);
}
function my(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(_l(this), "m")), this;
}
function gy() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Yc(kp, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function vy(e) {
  return this.isValid() ? (e = e ? Xe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function py() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function yy() {
  if (!Vt(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return $c(e, this), e = Sh(e), e._a ? (t = e._isUTC ? Mn(e._a) : Xe(e._a), this._isDSTShifted = this.isValid() && cy(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function by() {
  return this.isValid() ? !this._isUTC : !1;
}
function wy() {
  return this.isValid() ? this._isUTC : !1;
}
function _h() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Sy = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, xy = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function wn(e, t) {
  var n = e, r = null, a, o, i;
  return vi(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : qn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Sy.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Me(r[On]) * a,
    h: Me(r[bt]) * a,
    m: Me(r[mn]) * a,
    s: Me(r[zn]) * a,
    ms: Me(El(r[wr] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = xy.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: yr(r[2], a),
    M: yr(r[3], a),
    w: yr(r[4], a),
    d: yr(r[5], a),
    h: yr(r[6], a),
    m: yr(r[7], a),
    s: yr(r[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (i = Cy(
    Xe(n.from),
    Xe(n.to)
  ), n = {}, n.ms = i.milliseconds, n.M = i.months), o = new rs(n), vi(e) && je(e, "_locale") && (o._locale = e._locale), vi(e) && je(e, "_isValid") && (o._isValid = e._isValid), o;
}
wn.fn = rs.prototype;
wn.invalid = ly;
function yr(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Hu(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Cy(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = qc(t, e), e.isBefore(t) ? n = Hu(e, t) : (n = Hu(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Oh(e, t) {
  return function(n, r) {
    var a, o;
    return r !== null && !isNaN(+r) && (th(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = n, n = r, r = o), a = wn(n, r), Rh(this, a, e), this;
  };
}
function Rh(e, t, n, r) {
  var a = t._milliseconds, o = El(t._days), i = El(t._months);
  e.isValid() && (r = r ?? !0, i && dh(e, to(e, "Month") + i * n), o && lh(e, "Date", to(e, "Date") + o * n), a && e._d.setTime(e._d.valueOf() + a * n), r && K.updateOffset(e, o || i));
}
var Ey = Oh(1, "add"), _y = Oh(-1, "subtract");
function Th(e) {
  return typeof e == "string" || e instanceof String;
}
function Oy(e) {
  return yn(e) || wo(e) || Th(e) || qn(e) || Ty(e) || Ry(e) || e === null || e === void 0;
}
function Ry(e) {
  var t = Cr(e) && !Pc(e), n = !1, r = [
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
  ], a, o, i = r.length;
  for (a = 0; a < i; a += 1)
    o = r[a], n = n || je(e, o);
  return t && n;
}
function Ty(e) {
  var t = pn(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !qn(r) && Th(e);
  }).length === 0), t && n;
}
function Py(e) {
  var t = Cr(e) && !Pc(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, o;
  for (a = 0; a < r.length; a += 1)
    o = r[a], n = n || je(e, o);
  return t && n;
}
function My(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function $y(e, t) {
  arguments.length === 1 && (arguments[0] ? Oy(arguments[0]) ? (e = arguments[0], t = void 0) : Py(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Xe(), r = qc(n, this).startOf("day"), a = K.calendarFormat(this, r) || "sameElse", o = t && ($n(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    o || this.localeData().calendar(a, this, Xe(n))
  );
}
function Dy() {
  return new So(this);
}
function Ny(e, t) {
  var n = yn(e) ? e : Xe(e);
  return this.isValid() && n.isValid() ? (t = an(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ky(e, t) {
  var n = yn(e) ? e : Xe(e);
  return this.isValid() && n.isValid() ? (t = an(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Ay(e, t, n, r) {
  var a = yn(e) ? e : Xe(e), o = yn(t) ? t : Xe(t);
  return this.isValid() && a.isValid() && o.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(o, n) : !this.isAfter(o, n))) : !1;
}
function Fy(e, t) {
  var n = yn(e) ? e : Xe(e), r;
  return this.isValid() && n.isValid() ? (t = an(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function jy(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Iy(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ly(e, t, n) {
  var r, a, o;
  if (!this.isValid())
    return NaN;
  if (r = qc(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = an(t), t) {
    case "year":
      o = pi(this, r) / 12;
      break;
    case "month":
      o = pi(this, r);
      break;
    case "quarter":
      o = pi(this, r) / 3;
      break;
    case "second":
      o = (this - r) / 1e3;
      break;
    // 1000
    case "minute":
      o = (this - r) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      o = (this - r) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      o = (this - r - a) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      o = (this - r - a) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      o = this - r;
  }
  return n ? o : Qt(o);
}
function pi(e, t) {
  if (e.date() < t.date())
    return -pi(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), a, o;
  return t - r < 0 ? (a = e.clone().add(n - 1, "months"), o = (t - r) / (r - a)) : (a = e.clone().add(n + 1, "months"), o = (t - r) / (a - r)), -(n + o) || 0;
}
K.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
K.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Vy() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function zy(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? gi(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : $n(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", gi(n, "Z")) : gi(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Hy() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, a, o;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", o = t + '[")]', this.format(n + r + a + o);
}
function By(e) {
  e || (e = this.isUtc() ? K.defaultFormatUtc : K.defaultFormat);
  var t = gi(this, e);
  return this.localeData().postformat(t);
}
function Wy(e, t) {
  return this.isValid() && (yn(e) && e.isValid() || Xe(e).isValid()) ? wn({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Uy(e) {
  return this.from(Xe(), e);
}
function Yy(e, t) {
  return this.isValid() && (yn(e) && e.isValid() || Xe(e).isValid()) ? wn({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function qy(e) {
  return this.to(Xe(), e);
}
function Ph(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Gn(e), t != null && (this._locale = t), this);
}
var Mh = rn(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function $h() {
  return this._locale;
}
var Di = 1e3, oa = 60 * Di, Ni = 60 * oa, Dh = (365 * 400 + 97) * 24 * Ni;
function ia(e, t) {
  return (e % t + t) % t;
}
function Nh(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Dh : new Date(e, t, n).valueOf();
}
function kh(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Dh : Date.UTC(e, t, n);
}
function Gy(e) {
  var t, n;
  if (e = an(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? kh : Nh, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ia(
        t + (this._isUTC ? 0 : this.utcOffset() * oa),
        Ni
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ia(t, oa);
      break;
    case "second":
      t = this._d.valueOf(), t -= ia(t, Di);
      break;
  }
  return this._d.setTime(t), K.updateOffset(this, !0), this;
}
function Ky(e) {
  var t, n;
  if (e = an(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? kh : Nh, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ni - ia(
        t + (this._isUTC ? 0 : this.utcOffset() * oa),
        Ni
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += oa - ia(t, oa) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Di - ia(t, Di) - 1;
      break;
  }
  return this._d.setTime(t), K.updateOffset(this, !0), this;
}
function Xy() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Zy() {
  return Math.floor(this.valueOf() / 1e3);
}
function Jy() {
  return new Date(this.valueOf());
}
function Qy() {
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
function eb() {
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
function tb() {
  return this.isValid() ? this.toISOString() : null;
}
function nb() {
  return Mc(this);
}
function rb() {
  return ar({}, Oe(this));
}
function ab() {
  return Oe(this).overflow;
}
function ob() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
ge("N", 0, 0, "eraAbbr");
ge("NN", 0, 0, "eraAbbr");
ge("NNN", 0, 0, "eraAbbr");
ge("NNNN", 0, 0, "eraName");
ge("NNNNN", 0, 0, "eraNarrow");
ge("y", ["y", 1], "yo", "eraYear");
ge("y", ["yy", 2], 0, "eraYear");
ge("y", ["yyy", 3], 0, "eraYear");
ge("y", ["yyyy", 4], 0, "eraYear");
ie("N", Gc);
ie("NN", Gc);
ie("NNN", Gc);
ie("NNNN", vb);
ie("NNNNN", pb);
Ge(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var a = n._locale.erasParse(e, r, n._strict);
    a ? Oe(n).era = a : Oe(n).invalidEra = e;
  }
);
ie("y", Ca);
ie("yy", Ca);
ie("yyy", Ca);
ie("yyyy", Ca);
ie("yo", yb);
Ge(["y", "yy", "yyy", "yyyy"], Nt);
Ge(["yo"], function(e, t, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Nt] = n._locale.eraYearOrdinalParse(e, a) : t[Nt] = parseInt(e, 10);
});
function ib(e, t) {
  var n, r, a, o = this._eras || Gn("en")._eras;
  for (n = 0, r = o.length; n < r; ++n) {
    switch (typeof o[n].since) {
      case "string":
        a = K(o[n].since).startOf("day"), o[n].since = a.valueOf();
        break;
    }
    switch (typeof o[n].until) {
      case "undefined":
        o[n].until = 1 / 0;
        break;
      case "string":
        a = K(o[n].until).startOf("day").valueOf(), o[n].until = a.valueOf();
        break;
    }
  }
  return o;
}
function sb(e, t, n) {
  var r, a, o = this.eras(), i, s, l;
  for (e = e.toUpperCase(), r = 0, a = o.length; r < a; ++r)
    if (i = o[r].name.toUpperCase(), s = o[r].abbr.toUpperCase(), l = o[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return o[r];
          break;
        case "NNNN":
          if (i === e)
            return o[r];
          break;
        case "NNNNN":
          if (l === e)
            return o[r];
          break;
      }
    else if ([i, s, l].indexOf(e) >= 0)
      return o[r];
}
function lb(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? K(e.since).year() : K(e.since).year() + (t - e.offset) * n;
}
function cb() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function ub() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function db() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function fb() {
  var e, t, n, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - K(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function hb(e) {
  return je(this, "_erasNameRegex") || Kc.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function mb(e) {
  return je(this, "_erasAbbrRegex") || Kc.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function gb(e) {
  return je(this, "_erasNarrowRegex") || Kc.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Gc(e, t) {
  return t.erasAbbrRegex(e);
}
function vb(e, t) {
  return t.erasNameRegex(e);
}
function pb(e, t) {
  return t.erasNarrowRegex(e);
}
function yb(e, t) {
  return t._eraYearOrdinalRegex || Ca;
}
function Kc() {
  var e = [], t = [], n = [], r = [], a, o, i, s, l, c = this.eras();
  for (a = 0, o = c.length; a < o; ++a)
    i = Bn(c[a].name), s = Bn(c[a].abbr), l = Bn(c[a].narrow), t.push(i), e.push(s), n.push(l), r.push(i), r.push(s), r.push(l);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
ge(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
ge(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function as(e, t) {
  ge(0, [e, e.length], 0, t);
}
as("gggg", "weekYear");
as("ggggg", "weekYear");
as("GGGG", "isoWeekYear");
as("GGGGG", "isoWeekYear");
ie("G", Qi);
ie("g", Qi);
ie("GG", Ze, qt);
ie("gg", Ze, qt);
ie("GGGG", Fc, Ac);
ie("gggg", Fc, Ac);
ie("GGGGG", Ji, Xi);
ie("ggggg", Ji, Xi);
Co(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Me(e);
  }
);
Co(["gg", "GG"], function(e, t, n, r) {
  t[r] = K.parseTwoDigitYear(e);
});
function bb(e) {
  return Ah.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function wb(e) {
  return Ah.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Sb() {
  return Wn(this.year(), 1, 4);
}
function xb() {
  return Wn(this.isoWeekYear(), 1, 4);
}
function Cb() {
  var e = this.localeData()._week;
  return Wn(this.year(), e.dow, e.doy);
}
function Eb() {
  var e = this.localeData()._week;
  return Wn(this.weekYear(), e.dow, e.doy);
}
function Ah(e, t, n, r, a) {
  var o;
  return e == null ? ro(this, r, a).year : (o = Wn(e, r, a), t > o && (t = o), _b.call(this, e, t, n, r, a));
}
function _b(e, t, n, r, a) {
  var o = mh(e, t, n, r, a), i = no(o.year, 0, o.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
ge("Q", 0, "Qo", "quarter");
ie("Q", rh);
Ge("Q", function(e, t) {
  t[Vn] = (Me(e) - 1) * 3;
});
function Ob(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
ge("D", ["DD", 2], "Do", "date");
ie("D", Ze, Ea);
ie("DD", Ze, qt);
ie("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ge(["D", "DD"], On);
Ge("Do", function(e, t) {
  t[On] = Me(e.match(Ze)[0]);
});
var Fh = _a("Date", !0);
ge("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
ie("DDD", Zi);
ie("DDDD", ah);
Ge(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Me(e);
});
function Rb(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
ge("m", ["mm", 2], 0, "minute");
ie("m", Ze, jc);
ie("mm", Ze, qt);
Ge(["m", "mm"], mn);
var Tb = _a("Minutes", !1);
ge("s", ["ss", 2], 0, "second");
ie("s", Ze, jc);
ie("ss", Ze, qt);
Ge(["s", "ss"], zn);
var Pb = _a("Seconds", !1);
ge("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
ge(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
ge(0, ["SSS", 3], 0, "millisecond");
ge(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
ge(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
ge(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
ge(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
ge(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
ge(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
ie("S", Zi, rh);
ie("SS", Zi, qt);
ie("SSS", Zi, ah);
var or, jh;
for (or = "SSSS"; or.length <= 9; or += "S")
  ie(or, Ca);
function Mb(e, t) {
  t[wr] = Me(("0." + e) * 1e3);
}
for (or = "S"; or.length <= 9; or += "S")
  Ge(or, Mb);
jh = _a("Milliseconds", !1);
ge("z", 0, 0, "zoneAbbr");
ge("zz", 0, 0, "zoneName");
function $b() {
  return this._isUTC ? "UTC" : "";
}
function Db() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var Z = So.prototype;
Z.add = Ey;
Z.calendar = $y;
Z.clone = Dy;
Z.diff = Ly;
Z.endOf = Ky;
Z.format = By;
Z.from = Wy;
Z.fromNow = Uy;
Z.to = Yy;
Z.toNow = qy;
Z.get = Hp;
Z.invalidAt = ab;
Z.isAfter = Ny;
Z.isBefore = ky;
Z.isBetween = Ay;
Z.isSame = Fy;
Z.isSameOrAfter = jy;
Z.isSameOrBefore = Iy;
Z.isValid = nb;
Z.lang = Mh;
Z.locale = Ph;
Z.localeData = $h;
Z.max = ny;
Z.min = ty;
Z.parsingFlags = rb;
Z.set = Bp;
Z.startOf = Gy;
Z.subtract = _y;
Z.toArray = Qy;
Z.toObject = eb;
Z.toDate = Jy;
Z.toISOString = zy;
Z.inspect = Hy;
typeof Symbol < "u" && Symbol.for != null && (Z[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
Z.toJSON = tb;
Z.toString = Vy;
Z.unix = Zy;
Z.valueOf = Xy;
Z.creationData = ob;
Z.eraName = cb;
Z.eraNarrow = ub;
Z.eraAbbr = db;
Z.eraYear = fb;
Z.year = sh;
Z.isLeapYear = zp;
Z.weekYear = bb;
Z.isoWeekYear = wb;
Z.quarter = Z.quarters = Ob;
Z.month = fh;
Z.daysInMonth = Jp;
Z.week = Z.weeks = i0;
Z.isoWeek = Z.isoWeeks = s0;
Z.weeksInYear = Cb;
Z.weeksInWeekYear = Eb;
Z.isoWeeksInYear = Sb;
Z.isoWeeksInISOWeekYear = xb;
Z.date = Fh;
Z.day = Z.days = w0;
Z.weekday = S0;
Z.isoWeekday = x0;
Z.dayOfYear = Rb;
Z.hour = Z.hours = P0;
Z.minute = Z.minutes = Tb;
Z.second = Z.seconds = Pb;
Z.millisecond = Z.milliseconds = jh;
Z.utcOffset = dy;
Z.utc = hy;
Z.local = my;
Z.parseZone = gy;
Z.hasAlignedHourOffset = vy;
Z.isDST = py;
Z.isLocal = by;
Z.isUtcOffset = wy;
Z.isUtc = _h;
Z.isUTC = _h;
Z.zoneAbbr = $b;
Z.zoneName = Db;
Z.dates = rn(
  "dates accessor is deprecated. Use date instead.",
  Fh
);
Z.months = rn(
  "months accessor is deprecated. Use month instead",
  fh
);
Z.years = rn(
  "years accessor is deprecated. Use year instead",
  sh
);
Z.zone = rn(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  fy
);
Z.isDSTShifted = rn(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  yy
);
function Nb(e) {
  return Xe(e * 1e3);
}
function kb() {
  return Xe.apply(null, arguments).parseZone();
}
function Ih(e) {
  return e;
}
var Ie = Dc.prototype;
Ie.calendar = bp;
Ie.longDateFormat = Cp;
Ie.invalidDate = _p;
Ie.ordinal = Tp;
Ie.preparse = Ih;
Ie.postformat = Ih;
Ie.relativeTime = Mp;
Ie.pastFuture = $p;
Ie.set = pp;
Ie.eras = ib;
Ie.erasParse = sb;
Ie.erasConvertYear = lb;
Ie.erasAbbrRegex = mb;
Ie.erasNameRegex = hb;
Ie.erasNarrowRegex = gb;
Ie.months = Gp;
Ie.monthsShort = Kp;
Ie.monthsParse = Zp;
Ie.monthsRegex = e0;
Ie.monthsShortRegex = Qp;
Ie.week = n0;
Ie.firstDayOfYear = o0;
Ie.firstDayOfWeek = a0;
Ie.weekdays = g0;
Ie.weekdaysMin = p0;
Ie.weekdaysShort = v0;
Ie.weekdaysParse = b0;
Ie.weekdaysRegex = C0;
Ie.weekdaysShortRegex = E0;
Ie.weekdaysMinRegex = _0;
Ie.isPM = R0;
Ie.meridiem = M0;
function ki(e, t, n, r) {
  var a = Gn(), o = Mn().set(r, t);
  return a[n](o, e);
}
function Lh(e, t, n) {
  if (qn(e) && (t = e, e = void 0), e = e || "", t != null)
    return ki(e, t, n, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = ki(e, r, n, "month");
  return a;
}
function Xc(e, t, n, r) {
  typeof e == "boolean" ? (qn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, qn(t) && (n = t, t = void 0), t = t || "");
  var a = Gn(), o = e ? a._week.dow : 0, i, s = [];
  if (n != null)
    return ki(t, (n + o) % 7, r, "day");
  for (i = 0; i < 7; i++)
    s[i] = ki(t, (i + o) % 7, r, "day");
  return s;
}
function Ab(e, t) {
  return Lh(e, t, "months");
}
function Fb(e, t) {
  return Lh(e, t, "monthsShort");
}
function jb(e, t, n) {
  return Xc(e, t, n, "weekdays");
}
function Ib(e, t, n) {
  return Xc(e, t, n, "weekdaysShort");
}
function Lb(e, t, n) {
  return Xc(e, t, n, "weekdaysMin");
}
lr("en", {
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
    var t = e % 10, n = Me(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
K.lang = rn(
  "moment.lang is deprecated. Use moment.locale instead.",
  lr
);
K.langData = rn(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Gn
);
var Fn = Math.abs;
function Vb() {
  var e = this._data;
  return this._milliseconds = Fn(this._milliseconds), this._days = Fn(this._days), this._months = Fn(this._months), e.milliseconds = Fn(e.milliseconds), e.seconds = Fn(e.seconds), e.minutes = Fn(e.minutes), e.hours = Fn(e.hours), e.months = Fn(e.months), e.years = Fn(e.years), this;
}
function Vh(e, t, n, r) {
  var a = wn(t, n);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function zb(e, t) {
  return Vh(this, e, t, 1);
}
function Hb(e, t) {
  return Vh(this, e, t, -1);
}
function Bu(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Bb() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, a, o, i, s, l;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Bu(Ol(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, a = Qt(e / 1e3), r.seconds = a % 60, o = Qt(a / 60), r.minutes = o % 60, i = Qt(o / 60), r.hours = i % 24, t += Qt(i / 24), l = Qt(zh(t)), n += l, t -= Bu(Ol(l)), s = Qt(n / 12), n %= 12, r.days = t, r.months = n, r.years = s, this;
}
function zh(e) {
  return e * 4800 / 146097;
}
function Ol(e) {
  return e * 146097 / 4800;
}
function Wb(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = an(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + zh(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Ol(this._months)), e) {
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
function Kn(e) {
  return function() {
    return this.as(e);
  };
}
var Hh = Kn("ms"), Ub = Kn("s"), Yb = Kn("m"), qb = Kn("h"), Gb = Kn("d"), Kb = Kn("w"), Xb = Kn("M"), Zb = Kn("Q"), Jb = Kn("y"), Qb = Hh;
function ew() {
  return wn(this);
}
function tw(e) {
  return e = an(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Nr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var nw = Nr("milliseconds"), rw = Nr("seconds"), aw = Nr("minutes"), ow = Nr("hours"), iw = Nr("days"), sw = Nr("months"), lw = Nr("years");
function cw() {
  return Qt(this.days() / 7);
}
var In = Math.round, Jr = {
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
function uw(e, t, n, r, a) {
  return a.relativeTime(t || 1, !!n, e, r);
}
function dw(e, t, n, r) {
  var a = wn(e).abs(), o = In(a.as("s")), i = In(a.as("m")), s = In(a.as("h")), l = In(a.as("d")), c = In(a.as("M")), u = In(a.as("w")), d = In(a.as("y")), f = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || i <= 1 && ["m"] || i < n.m && ["mm", i] || s <= 1 && ["h"] || s < n.h && ["hh", s] || l <= 1 && ["d"] || l < n.d && ["dd", l];
  return n.w != null && (f = f || u <= 1 && ["w"] || u < n.w && ["ww", u]), f = f || c <= 1 && ["M"] || c < n.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d], f[2] = t, f[3] = +e > 0, f[4] = r, uw.apply(null, f);
}
function fw(e) {
  return e === void 0 ? In : typeof e == "function" ? (In = e, !0) : !1;
}
function hw(e, t) {
  return Jr[e] === void 0 ? !1 : t === void 0 ? Jr[e] : (Jr[e] = t, e === "s" && (Jr.ss = t - 1), !0);
}
function mw(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Jr, a, o;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Jr, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), o = dw(this, !n, r, a), n && (o = a.pastFuture(+this, o)), a.postformat(o);
}
var Is = Math.abs;
function zr(e) {
  return (e > 0) - (e < 0) || +e;
}
function os() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Is(this._milliseconds) / 1e3, t = Is(this._days), n = Is(this._months), r, a, o, i, s = this.asSeconds(), l, c, u, d;
  return s ? (r = Qt(e / 60), a = Qt(r / 60), e %= 60, r %= 60, o = Qt(n / 12), n %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = s < 0 ? "-" : "", c = zr(this._months) !== zr(s) ? "-" : "", u = zr(this._days) !== zr(s) ? "-" : "", d = zr(this._milliseconds) !== zr(s) ? "-" : "", l + "P" + (o ? c + o + "Y" : "") + (n ? c + n + "M" : "") + (t ? u + t + "D" : "") + (a || r || e ? "T" : "") + (a ? d + a + "H" : "") + (r ? d + r + "M" : "") + (e ? d + i + "S" : "")) : "P0D";
}
var Ae = rs.prototype;
Ae.isValid = sy;
Ae.abs = Vb;
Ae.add = zb;
Ae.subtract = Hb;
Ae.as = Wb;
Ae.asMilliseconds = Hh;
Ae.asSeconds = Ub;
Ae.asMinutes = Yb;
Ae.asHours = qb;
Ae.asDays = Gb;
Ae.asWeeks = Kb;
Ae.asMonths = Xb;
Ae.asQuarters = Zb;
Ae.asYears = Jb;
Ae.valueOf = Qb;
Ae._bubble = Bb;
Ae.clone = ew;
Ae.get = tw;
Ae.milliseconds = nw;
Ae.seconds = rw;
Ae.minutes = aw;
Ae.hours = ow;
Ae.days = iw;
Ae.weeks = cw;
Ae.months = sw;
Ae.years = lw;
Ae.humanize = mw;
Ae.toISOString = os;
Ae.toString = os;
Ae.toJSON = os;
Ae.locale = Ph;
Ae.localeData = $h;
Ae.toIsoString = rn(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  os
);
Ae.lang = Mh;
ge("X", 0, 0, "unix");
ge("x", 0, 0, "valueOf");
ie("x", Qi);
ie("X", Ap);
Ge("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Ge("x", function(e, t, n) {
  n._d = new Date(Me(e));
});
//! moment.js
K.version = "2.30.1";
gp(Xe);
K.fn = Z;
K.min = ry;
K.max = ay;
K.now = oy;
K.utc = Mn;
K.unix = Nb;
K.months = Ab;
K.isDate = wo;
K.locale = lr;
K.invalid = Ki;
K.duration = wn;
K.isMoment = yn;
K.weekdays = jb;
K.parseZone = kb;
K.localeData = Gn;
K.isDuration = vi;
K.monthsShort = Fb;
K.weekdaysMin = Lb;
K.defineLocale = Hc;
K.updateLocale = k0;
K.locales = A0;
K.weekdaysShort = Ib;
K.normalizeUnits = an;
K.relativeTimeRounding = fw;
K.relativeTimeThreshold = hw;
K.calendarFormat = My;
K.prototype = Z;
K.HTML5_FMT = {
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
const gw = "ddd, MMM Do YYYY, h:mm:ss a", vw = "ddd, MMM Do YYYY", pw = "h:mm:ss a", Zc = "YYYY-MM-DD HH:mm:ss", Jc = "YYYY-MM-DD", yw = "HH:mm:ss", Bh = "YYYY-MM-DD HH:mm:ss.SSS", bw = (e) => {
  if (!e)
    return "";
  const t = K.utc(e).toDate();
  return K(t).local().format(gw);
}, ww = (e) => {
  if (!e)
    return "";
  const t = K.utc(e).toDate();
  return K(t).local().format(vw);
}, Sw = (e) => {
  if (!e)
    return "";
  const t = K.utc(e).toDate();
  return K(t).local().format(Zc);
}, xw = (e) => {
  if (!e)
    return "";
  const t = K.utc(e).toDate();
  return K(t).local().format(Jc);
}, Cw = (e) => {
  if (!e)
    return "";
  const t = K.utc(e).toDate();
  return K(t).local().format(Bh);
}, EP = (e) => {
  if (!e)
    return "";
  const t = K.utc(e).toDate();
  return K(t).local().format(yw);
}, _P = (e) => {
  if (!e)
    return "";
  const t = K.utc(e).toDate();
  return K(t).local().format(pw);
}, OP = (e) => e ? K(e).utc().format(Zc) : "", Ew = (e) => e ? K(e).utc().format(Bh) : "", _w = (e) => e ? K(e).utc().format(Jc) : "", RP = (e) => e ? K(e).local().format(Zc) : "", TP = (e) => e ? K(e).local().format(Jc) : "", Wh = (e) => e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-", Ow = (e, t = 6) => {
  if (!e)
    return "-";
  const n = Number(e).toFixed(t).toString().split("."), r = Wh(Number(n[0])), a = n.length == 2 ? n[1] : 0;
  return r + "." + a;
}, PP = (e, t) => {
  if (t[e + "_degrees"] === "" || t[e + "_minutes"] === "" || t[e + "_seconds"] === "") {
    t[e] = "";
    return;
  }
  const n = t[e + "_degrees"], r = t[e + "_minutes"], a = t[e + "_seconds"];
  t[e] = parseFloat(
    (parseInt(n) + parseInt(r) / 60 + parseFloat(a) / 3600).toFixed(8)
  );
}, MP = (e, t) => {
  if (!t[e])
    return;
  const n = t[e], r = Math.floor(n), a = Math.floor((n - r) * 60), o = ((n - r - a / 60) * 3600).toFixed(5);
  t[e + "_degrees"] = r, t[e + "_minutes"] = a, t[e + "_seconds"] = o;
}, Rw = (e, t) => {
  const [n, r] = Yn(() => {
    try {
      const o = window.localStorage.getItem(e);
      return o ? JSON.parse(o) : (window.localStorage.setItem(
        e,
        JSON.stringify(t)
      ), t);
    } catch (o) {
      return console.log(o), t;
    }
  });
  return [n, (o) => {
    try {
      window.localStorage.setItem(e, JSON.stringify(o));
    } catch (i) {
      console.log(i);
    }
    r(o);
  }];
};
function Qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zo = { exports: {} }, Ha = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wu;
function Tw() {
  if (Wu) return Ha;
  Wu = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      o = {};
      for (var s in a)
        s !== "key" && (o[s] = a[s]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Ha.Fragment = t, Ha.jsx = n, Ha.jsxs = n, Ha;
}
var Ba = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uu;
function Pw() {
  return Uu || (Uu = 1, process.env.NODE_ENV !== "production" && (function() {
    function e($) {
      if ($ == null) return null;
      if (typeof $ == "function")
        return $.$$typeof === M ? null : $.displayName || $.name || null;
      if (typeof $ == "string") return $;
      switch ($) {
        case h:
          return "Fragment";
        case v:
          return "Profiler";
        case g:
          return "StrictMode";
        case S:
          return "Suspense";
        case E:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof $ == "object")
        switch (typeof $.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), $.$$typeof) {
          case y:
            return "Portal";
          case x:
            return $.displayName || "Context";
          case w:
            return ($._context.displayName || "Context") + ".Consumer";
          case C:
            var L = $.render;
            return $ = $.displayName, $ || ($ = L.displayName || L.name || "", $ = $ !== "" ? "ForwardRef(" + $ + ")" : "ForwardRef"), $;
          case T:
            return L = $.displayName || null, L !== null ? L : e($.type) || "Memo";
          case O:
            L = $._payload, $ = $._init;
            try {
              return e($(L));
            } catch {
            }
        }
      return null;
    }
    function t($) {
      return "" + $;
    }
    function n($) {
      try {
        t($);
        var L = !1;
      } catch {
        L = !0;
      }
      if (L) {
        L = console;
        var W = L.error, U = typeof Symbol == "function" && Symbol.toStringTag && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return W.call(
          L,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), t($);
      }
    }
    function r($) {
      if ($ === h) return "<>";
      if (typeof $ == "object" && $ !== null && $.$$typeof === O)
        return "<...>";
      try {
        var L = e($);
        return L ? "<" + L + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var $ = k.A;
      return $ === null ? null : $.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i($) {
      if (j.call($, "key")) {
        var L = Object.getOwnPropertyDescriptor($, "key").get;
        if (L && L.isReactWarning) return !1;
      }
      return $.key !== void 0;
    }
    function s($, L) {
      function W() {
        R || (R = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          L
        ));
      }
      W.isReactWarning = !0, Object.defineProperty($, "key", {
        get: W,
        configurable: !0
      });
    }
    function l() {
      var $ = e(this.type);
      return F[$] || (F[$] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), $ = this.props.ref, $ !== void 0 ? $ : null;
    }
    function c($, L, W, U, te, X) {
      var J = W.ref;
      return $ = {
        $$typeof: b,
        type: $,
        key: L,
        props: W,
        _owner: U
      }, (J !== void 0 ? J : null) !== null ? Object.defineProperty($, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty($, "ref", { enumerable: !1, value: null }), $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty($, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty($, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.defineProperty($, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    }
    function u($, L, W, U, te, X) {
      var J = L.children;
      if (J !== void 0)
        if (U)
          if (P(J)) {
            for (U = 0; U < J.length; U++)
              d(J[U]);
            Object.freeze && Object.freeze(J);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(J);
      if (j.call(L, "key")) {
        J = e($);
        var ee = Object.keys(L).filter(function(se) {
          return se !== "key";
        });
        U = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", B[J + U] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          J,
          ee,
          J
        ), B[J + U] = !0);
      }
      if (J = null, W !== void 0 && (n(W), J = "" + W), i(L) && (n(L.key), J = "" + L.key), "key" in L) {
        W = {};
        for (var ae in L)
          ae !== "key" && (W[ae] = L[ae]);
      } else W = L;
      return J && s(
        W,
        typeof $ == "function" ? $.displayName || $.name || "Unknown" : $
      ), c(
        $,
        J,
        W,
        a(),
        te,
        X
      );
    }
    function d($) {
      f($) ? $._store && ($._store.validated = 1) : typeof $ == "object" && $ !== null && $.$$typeof === O && ($._payload.status === "fulfilled" ? f($._payload.value) && $._payload.value._store && ($._payload.value._store.validated = 1) : $._store && ($._store.validated = 1));
    }
    function f($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === b;
    }
    var p = q, b = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), x = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), k = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, P = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function($) {
        return $();
      }
    };
    var R, F = {}, N = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), H = D(r(o)), B = {};
    Ba.Fragment = h, Ba.jsx = function($, L, W) {
      var U = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        $,
        L,
        W,
        !1,
        U ? Error("react-stack-top-frame") : N,
        U ? D(r($)) : H
      );
    }, Ba.jsxs = function($, L, W) {
      var U = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        $,
        L,
        W,
        !0,
        U ? Error("react-stack-top-frame") : N,
        U ? D(r($)) : H
      );
    };
  })()), Ba;
}
var Yu;
function Mw() {
  return Yu || (Yu = 1, process.env.NODE_ENV === "production" ? Zo.exports = Tw() : Zo.exports = Pw()), Zo.exports;
}
var z = Mw();
const Uh = Gi({}), $P = ({ children: e }) => {
  const [t, n] = Rw("user", null), r = async (s) => {
    n(s);
  }, a = () => {
    n(null), typeof window < "u" && window.location.assign("/login");
  }, o = (s) => {
    n(s);
  }, i = Sa(
    () => ({
      authUser: t,
      login: r,
      logout: a,
      updateAuthUser: o
    }),
    [t]
  );
  return /* @__PURE__ */ z.jsx(Uh.Provider, { value: i, children: e });
}, is = () => en(Uh);
function Yh(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: $w } = Object.prototype, { getPrototypeOf: ua } = Object, { iterator: Eo, toStringTag: qh } = Symbol, Ai = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), oo = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), Ai(n, t))
      return !0;
    n = ua(n);
  }
  return !1;
}, Dw = (e, t) => e != null && oo(e, t) ? e[t] : void 0, eu = /* @__PURE__ */ ((e) => (t) => {
  const n = $w.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), on = (e) => (e = e.toLowerCase(), (t) => eu(t) === e), ss = (e) => (t) => typeof t === e, { isArray: Or } = Array, Rr = ss("undefined");
function Oa(e) {
  return e !== null && !Rr(e) && e.constructor !== null && !Rr(e.constructor) && zt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Gh = on("ArrayBuffer");
function Nw(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Gh(e.buffer), t;
}
const kw = ss("string"), zt = ss("function"), Kh = ss("number"), Ra = (e) => e !== null && typeof e == "object", Aw = (e) => e === !0 || e === !1, yi = (e) => {
  if (!Ra(e))
    return !1;
  const t = ua(e);
  return (t === null || t === Object.prototype || ua(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !oo(e, qh) && !oo(e, Eo);
}, Fw = (e) => {
  if (!Ra(e) || Oa(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, jw = on("Date"), Iw = on("File"), Lw = (e) => !!(e && typeof e.uri < "u"), Vw = (e) => e && typeof e.getParts < "u", zw = on("Blob"), Hw = on("FileList"), Bw = on("Set"), Ww = (e) => Ra(e) && zt(e.pipe);
function Uw() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const qu = Uw(), Gu = typeof qu.FormData < "u" ? qu.FormData : void 0, Yw = (e) => {
  if (!e) return !1;
  if (Gu && e instanceof Gu) return !0;
  const t = ua(e);
  if (!t || t === Object.prototype || !zt(e.append)) return !1;
  const n = eu(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && zt(e.toString) && e.toString() === "[object FormData]";
}, qw = on("URLSearchParams"), [Gw, Kw, Xw, Zw] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(on), Jw = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _o(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Or(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (Oa(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let s;
    for (r = 0; r < i; r++)
      s = o[r], t.call(null, e[s], s, e);
  }
}
function Xh(e, t) {
  if (Oa(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zh = (e) => !Rr(e) && e !== Sr;
function Rl(...e) {
  const { caseless: t, skipUndefined: n } = Zh(this) && this || {}, r = {}, a = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const s = t && typeof i == "string" && Xh(r, i) || i, l = Ai(r, s) ? r[s] : void 0;
    yi(l) && yi(o) ? r[s] = Rl(l, o) : yi(o) ? r[s] = Rl({}, o) : Or(o) ? r[s] = o.slice() : (!n || !Rr(o)) && (r[s] = o);
  };
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o];
    if (!s || Oa(s) || (_o(s, a), typeof s != "object" || Or(s)))
      continue;
    const l = Object.getOwnPropertySymbols(s);
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      uS.call(s, u) && a(s[u], u);
    }
  }
  return r;
}
const Qw = (e, t, n, { allOwnKeys: r } = {}) => (_o(
  t,
  (a, o) => {
    n && zt(a) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Yh(a, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      __proto__: null,
      value: a,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), eS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), tS = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, nS = (e, t, n, r) => {
  let a, o, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      i = a[o], (!r || r(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = n !== !1 && ua(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, rS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, aS = (e) => {
  if (!e) return null;
  if (Or(e)) return e;
  let t = e.length;
  if (!Kh(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, oS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ua(Uint8Array)), iS = (e, t) => {
  const r = (e && e[Eo]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, sS = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, lS = on("HTMLFormElement"), cS = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
  return r.toUpperCase() + a;
}), { propertyIsEnumerable: uS } = Object.prototype, dS = on("RegExp"), Jh = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  _o(n, (a, o) => {
    let i;
    (i = t(a, o, e)) !== !1 && (r[o] = i || a);
  }), Object.defineProperties(e, r);
}, fS = (e) => {
  Jh(e, (t, n) => {
    if (zt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (zt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hS = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return Or(e) ? r(e) : r(String(e).split(t)), n;
}, mS = () => {
}, gS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function vS(e) {
  return !!(e && zt(e.append) && e[qh] === "FormData" && e[Eo]);
}
const pS = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Ra(r)) {
      if (t.has(r))
        return;
      if (Oa(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        let a;
        if (Bw(r)) {
          a = [];
          for (const o of r) {
            const i = n(o);
            !Rr(i) && a.push(i);
          }
        } else
          a = Or(r) ? [] : {}, _o(r, (o, i) => {
            const s = n(o);
            !Rr(s) && (a[i] = s);
          });
        return t.delete(r), a;
      }
    }
    return r;
  };
  return n(e);
}, yS = on("AsyncFunction"), bS = (e) => e && (Ra(e) || zt(e)) && zt(e.then) && zt(e.catch), Qh = ((e, t) => e ? setImmediate : t ? ((n, r) => (Sr.addEventListener(
  "message",
  ({ source: a, data: o }) => {
    a === Sr && o === n && r.length && r.shift()();
  },
  !1
), (a) => {
  r.push(a), Sr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", zt(Sr.postMessage)), wS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sr) : typeof process < "u" && process.nextTick || Qh, em = (e) => e != null && zt(e[Eo]), SS = (e) => e != null && oo(e, Eo) && em(e), A = {
  isArray: Or,
  isArrayBuffer: Gh,
  isBuffer: Oa,
  isFormData: Yw,
  isArrayBufferView: Nw,
  isString: kw,
  isNumber: Kh,
  isBoolean: Aw,
  isObject: Ra,
  isPlainObject: yi,
  isEmptyObject: Fw,
  isReadableStream: Gw,
  isRequest: Kw,
  isResponse: Xw,
  isHeaders: Zw,
  isUndefined: Rr,
  isDate: jw,
  isFile: Iw,
  isReactNativeBlob: Lw,
  isReactNative: Vw,
  isBlob: zw,
  isRegExp: dS,
  isFunction: zt,
  isStream: Ww,
  isURLSearchParams: qw,
  isTypedArray: oS,
  isFileList: Hw,
  forEach: _o,
  merge: Rl,
  extend: Qw,
  trim: Jw,
  stripBOM: eS,
  inherits: tS,
  toFlatObject: nS,
  kindOf: eu,
  kindOfTest: on,
  endsWith: rS,
  toArray: aS,
  forEachEntry: iS,
  matchAll: sS,
  isHTMLForm: lS,
  hasOwnProperty: Ai,
  hasOwnProp: Ai,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: oo,
  getSafeProp: Dw,
  reduceDescriptors: Jh,
  freezeMethods: fS,
  toObjectSet: hS,
  toCamelCase: cS,
  noop: mS,
  toFiniteNumber: gS,
  findKey: Xh,
  global: Sr,
  isContextDefined: Zh,
  isSpecCompliantForm: vS,
  toJSONObject: pS,
  isAsyncFn: yS,
  isThenable: bS,
  setImmediate: Qh,
  asap: wS,
  isIterable: em,
  isSafeIterable: SS
}, xS = A.toObjectSet([
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
]), CS = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim();
    const s = A.hasOwnProp(t, n);
    !n || s && A.hasOwnProp(xS, n) || (n === "set-cookie" ? s ? t[n].push(r) : t[n] = [r] : t[n] = s ? t[n] + ", " + r : r);
  }), t;
};
function ES(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const _S = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), OS = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function tu(e, t) {
  return A.isArray(e) ? e.map((n) => tu(n, t)) : ES(String(e).replace(t, ""));
}
const RS = (e) => tu(e, _S), TS = (e) => tu(e, OS);
function tm(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return A.forEach(e.toJSON(), (n, r) => {
    t[r] = TS(n);
  }), t;
}
const Ku = Symbol("internals");
function Wa(e) {
  return e && String(e).trim().toLowerCase();
}
function bi(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(bi) : RS(String(e));
}
function PS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const MS = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Ls(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
function $S(e) {
  const t = e.length - 1;
  if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34)
    return e;
  let n = "";
  for (let r = 1; r < t; r++) {
    const a = e.charCodeAt(r);
    if (a === 34 || a === 92 && (r += 1, r >= t))
      return e;
    n += e[r];
  }
  return n;
}
function DS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = String(e);
  let r = 0, a = !1, o = !1;
  function i(s) {
    const l = Ls(n.slice(r, s)), c = l.indexOf("=");
    if (c < 1)
      return;
    const u = Ls(l.slice(0, c));
    if (!MS.test(u))
      return;
    const d = u.toLowerCase();
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const f = Ls(l.slice(c + 1));
    t[d] = $S(f);
  }
  for (let s = 0; s < n.length; s++) {
    const l = n.charCodeAt(s);
    a ? o ? o = !1 : l === 92 ? o = !0 : l === 34 && (a = !1) : l === 34 ? a = !0 : (l === 44 || l === 59) && (i(s), r = s + 1);
  }
  return i(n.length), t;
}
const NS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Vs(e, t, n, r, a) {
  if (A.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function kS(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function AS(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(a, o, i) {
        return this[r].call(this, t, a, o, i);
      },
      configurable: !0
    });
  });
}
let kt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(s, l, c) {
      const u = Wa(l);
      if (!u)
        return;
      const d = A.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = bi(s));
    }
    const i = (s, l) => A.forEach(s, (c, u) => o(c, u, l));
    if (A.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (A.isString(t) && (t = t.trim()) && !NS(t))
      i(CS(t), n);
    else if (A.isObject(t) && A.isSafeIterable(t)) {
      let s = /* @__PURE__ */ Object.create(null), l, c;
      for (const u of t) {
        if (!A.isArray(u))
          throw new TypeError("Object iterator must return a key-value pair");
        c = u[0], A.hasOwnProp(s, c) ? (l = s[c], s[c] = A.isArray(l) ? [...l, u[1]] : [l, u[1]]) : s[c] = u[1];
      }
      i(s, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Wa(t), t) {
      const r = A.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return PS(a);
        if (A.isFunction(n))
          return n.call(this, a, r);
        if (A.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Wa(t), t) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Vs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(i) {
      if (i = Wa(i), i) {
        const s = A.findKey(r, i);
        s && (!n || Vs(r, r[s], s, n)) && (delete r[s], a = !0);
      }
    }
    return A.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Vs(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return A.forEach(this, (a, o) => {
      const i = A.findKey(r, o);
      if (i) {
        n[i] = bi(a), delete n[o];
        return;
      }
      const s = t ? kS(o) : String(o).trim();
      s !== o && delete n[o], n[s] = bi(a), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && A.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    const t = this.get("set-cookie");
    return A.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return DS(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[Ku] = this[Ku] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(i) {
      const s = Wa(i);
      r[s] || (AS(a, i), r[s] = !0);
    }
    return A.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
kt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
A.reduceDescriptors(kt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
A.freezeMethods(kt);
const Fi = "[REDACTED ****]";
function FS(e) {
  if (A.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (A.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function jS(e, t) {
  const n = new Set(t.map((o) => String(o).toLowerCase())), r = [], a = (o) => {
    if (o === null || typeof o != "object" || A.isBuffer(o)) return o;
    if (r.indexOf(o) !== -1) return;
    o instanceof kt && (o = o.toJSON()), r.push(o);
    let i;
    if (A.isArray(o))
      i = [], o.forEach((s, l) => {
        const c = a(s);
        A.isUndefined(c) || (i[l] = c);
      });
    else {
      if (!A.isPlainObject(o) && FS(o))
        return r.pop(), o;
      i = /* @__PURE__ */ Object.create(null);
      for (const [s, l] of Object.entries(o)) {
        const c = n.has(s.toLowerCase()) ? Fi : a(l);
        A.isUndefined(c) || (i[s] = c);
      }
    }
    return r.pop(), i;
  };
  return a(e);
}
function Xu(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function IS(e) {
  return e.errors.map((n) => {
    try {
      return n && n.message ? Xu(n.message) : Xu(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
let ne = class nm extends Error {
  static from(t, n, r, a, o, i) {
    let s = t.message;
    !s && A.isArray(t.errors) && t.errors.length && (s = IS(t));
    const l = new nm(s, n || t.code, r, a, o);
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
  constructor(t, n, r, a, o) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), a && (this.request = a), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    const t = this.config, n = t && A.hasOwnProp(t, "redact") ? t.redact : void 0, r = A.isArray(n) && n.length > 0 ? jS(t, n) : A.toJSONObject(t);
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
      config: r,
      code: this.code,
      status: this.status
    };
  }
};
ne.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ne.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ne.ECONNABORTED = "ECONNABORTED";
ne.ETIMEDOUT = "ETIMEDOUT";
ne.ECONNREFUSED = "ECONNREFUSED";
ne.ERR_NETWORK = "ERR_NETWORK";
ne.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ne.ERR_DEPRECATED = "ERR_DEPRECATED";
ne.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ne.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ne.ERR_CANCELED = "ERR_CANCELED";
ne.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ne.ERR_INVALID_URL = "ERR_INVALID_URL";
ne.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const LS = null, rm = 100;
function Tl(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function am(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zs(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = am(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function VS(e) {
  return A.isArray(e) && !e.some(Tl);
}
const zS = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ls(e, t, n) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = A.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(v, w) {
      return !A.isUndefined(w[v]);
    }
  );
  const r = n.metaTokens, a = n.visitor || b, o = n.dots, i = n.indexes, s = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? rm : n.maxDepth, c = s && A.isSpecCompliantForm(t), u = [];
  if (!A.isFunction(a))
    throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null) return "";
    if (A.isDate(g))
      return g.toISOString();
    if (A.isBoolean(g))
      return g.toString();
    if (!c && A.isBlob(g))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    if (A.isArrayBuffer(g) || A.isTypedArray(g)) {
      if (c && typeof s == "function")
        return new s([g]);
      throw new ne("Blob is not supported. Use a Buffer instead.", ne.ERR_NOT_SUPPORT);
    }
    return g;
  }
  function f(g) {
    if (g > l)
      throw new ne(
        "Object is too deeply nested (" + g + " levels). Max depth: " + l,
        ne.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function p(g, v) {
    if (l === 1 / 0)
      return JSON.stringify(g);
    const w = [];
    return JSON.stringify(g, function(C, S) {
      if (!A.isObject(S))
        return S;
      for (; w.length && w[w.length - 1] !== this; )
        w.pop();
      return w.push(S), f(v + w.length - 1), S;
    });
  }
  function b(g, v, w) {
    let x = g;
    if (A.isReactNative(t) && A.isReactNativeBlob(g))
      return t.append(zs(w, v, o), d(g)), !1;
    if (g && !w && typeof g == "object") {
      if (A.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), g = p(g, 1);
      else if (A.isArray(g) && VS(g) || (A.isFileList(g) || A.endsWith(v, "[]")) && (x = A.toArray(g)))
        return v = am(v), x.forEach(function(S, E) {
          !(A.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? zs([v], E, o) : i === null ? v : v + "[]",
            d(S)
          );
        }), !1;
    }
    return Tl(g) ? !0 : (t.append(zs(w, v, o), d(g)), !1);
  }
  const y = Object.assign(zS, {
    defaultVisitor: b,
    convertValue: d,
    isVisitable: Tl
  });
  function h(g, v, w = 0) {
    if (!A.isUndefined(g)) {
      if (f(w), u.indexOf(g) !== -1)
        throw new Error("Circular reference detected in " + v.join("."));
      u.push(g), A.forEach(g, function(C, S) {
        (!(A.isUndefined(C) || C === null) && a.call(t, C, A.isString(S) ? S.trim() : S, v, y)) === !0 && h(C, v ? v.concat(S) : [S], w + 1);
      }), u.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Zu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function nu(e, t) {
  this._pairs = [], e && ls(e, this, t);
}
const om = nu.prototype;
om.append = function(t, n) {
  this._pairs.push([t, n]);
};
om.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Zu) : Zu;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function HS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function im(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = A.isFunction(n) ? {
    serialize: n
  } : n, a = A.getSafeProp(r, "encode") || HS, o = A.getSafeProp(r, "serialize");
  let i;
  if (o ? i = o(t, r) : i = A.isURLSearchParams(t) ? t.toString() : new nu(t, r).toString(a), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Ju {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    A.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ru = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, BS = typeof URLSearchParams < "u" ? URLSearchParams : nu, WS = typeof FormData < "u" ? FormData : null, US = typeof Blob < "u" ? Blob : null, YS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: BS,
    FormData: WS,
    Blob: US
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, au = typeof window < "u" && typeof document < "u", Pl = typeof navigator == "object" && navigator || void 0, qS = au && (!Pl || ["ReactNative", "NativeScript", "NS"].indexOf(Pl.product) < 0), GS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", KS = au && window.location.href || "http://localhost", XS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: au,
  hasStandardBrowserEnv: qS,
  hasStandardBrowserWebWorkerEnv: GS,
  navigator: Pl,
  origin: KS
}, Symbol.toStringTag, { value: "Module" })), Mt = {
  ...XS,
  ...YS
};
function ZS(e, t) {
  return ls(e, new Mt.classes.URLSearchParams(), {
    visitor: function(n, r, a, o) {
      return Mt.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Qu = rm;
function sm(e) {
  if (e > Qu)
    throw new ne(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Qu,
      ne.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function JS(e) {
  const t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    sm(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function QS(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function lm(e) {
  function t(n, r, a, o) {
    sm(o);
    let i = n[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), l = o >= n.length;
    return i = !i && A.isArray(a) ? a.length : i, l ? (A.hasOwnProp(a, i) ? a[i] = A.isArray(a[i]) ? a[i].concat(r) : [a[i], r] : a[i] = r, !s) : ((!A.hasOwnProp(a, i) || !A.isObject(a[i])) && (a[i] = []), t(n, r, a[i], o) && A.isArray(a[i]) && (a[i] = QS(a[i])), !s);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (r, a) => {
      t(JS(r), a, n, 0);
    }), n;
  }
  return null;
}
const Hr = (e, t) => e != null && A.hasOwnProp(e, t) ? e[t] : void 0;
function e1(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Oo = {
  transitional: ru,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = A.isObject(t);
      if (o && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
        return a ? JSON.stringify(lm(t)) : t;
      if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t))
        return t;
      if (A.isArrayBufferView(t))
        return t.buffer;
      if (A.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let s;
      if (o) {
        const l = Hr(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ZS(t, l).toString();
        if ((s = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = Hr(this, "env"), u = c && c.FormData;
          return ls(
            s ? { "files[]": t } : t,
            u && new u(),
            l
          );
        }
      }
      return o || a ? (n.setContentType("application/json", !1), e1(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Hr(this, "transitional") || Oo.transitional, r = n && n.forcedJSONParsing, a = Hr(this, "responseType"), o = a === "json";
      if (A.isResponse(t) || A.isReadableStream(t))
        return t;
      if (t && A.isString(t) && (r && !a || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Hr(this, "parseReviver"));
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError" ? ne.from(l, ne.ERR_BAD_RESPONSE, this, null, Hr(this, "response")) : l;
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
    FormData: Mt.classes.FormData,
    Blob: Mt.classes.Blob
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
A.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Oo.headers[e] = {};
});
function Hs(e, t) {
  const n = this || Oo, r = t || n, a = kt.from(r.headers);
  let o = r.data;
  return A.forEach(e, function(s) {
    o = s.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function cm(e) {
  return !!(e && e.__CANCEL__);
}
let Ro = class extends ne {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", ne.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function um(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ne(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? ne.ERR_BAD_REQUEST : ne.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function t1(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function n1(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[a] = l, r[a] = c;
    let d = o, f = 0;
    for (; d !== a; )
      f += n[d++], d = d % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - i < t)
      return;
    const p = u && c - u;
    return p ? Math.round(f * 1e3 / p) : void 0;
  };
}
function r1(e, t) {
  let n = 0, r = 1e3 / t, a, o;
  const i = (c, u = Date.now()) => {
    n = u, a = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? i(c, u) : (a = c, o || (o = setTimeout(() => {
      o = null, i(a);
    }, r - d)));
  }, () => a && i(a)];
}
const ji = (e, t, n = 3) => {
  let r = 0;
  const a = n1(50, 250);
  return r1((o) => {
    if (!o || typeof o.loaded != "number")
      return;
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, l = Math.max(0, s != null ? Math.min(i, s) : i), c = Math.max(0, l - r), u = a(c);
    r = Math.max(r, l);
    const d = {
      loaded: l,
      total: s,
      progress: s ? l / s : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && s ? (s - l) / u : void 0,
      event: o,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, ed = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, td = (e, t = A.asap) => (...n) => t(() => e(...n)), a1 = Mt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Mt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Mt.origin),
  Mt.navigator && /(msie|trident)/i.test(Mt.navigator.userAgent)
) : () => !0, o1 = Mt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, o, i) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      A.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), A.isString(r) && s.push(`path=${r}`), A.isString(a) && s.push(`domain=${a}`), o === !0 && s.push("secure"), A.isString(i) && s.push(`SameSite=${i}`), document.cookie = s.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), a = r.indexOf("=");
        if (a !== -1 && r.slice(0, a) === e)
          try {
            return decodeURIComponent(r.slice(a + 1));
          } catch {
            return r.slice(a + 1);
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
function i1(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function s1(e, t) {
  if (!t)
    return e;
  let n = e.length;
  for (; n > 0 && e.charCodeAt(n - 1) === 47; )
    n--;
  return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
const l1 = /^https?:(?!\/\/)/i, c1 = /[\t\n\r]/g;
function u1(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function d1(e) {
  return u1(e).replace(c1, "");
}
function f1(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, n, r = "") => `${n}${r}${Fi}`);
}
function h1(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Fi}@`), n = t.indexOf("#"), a = (n === -1 ? t : t.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${Fi}`
  );
  return n === -1 ? a : `${a}#${f1(t.slice(n + 1))}`;
}
function nd(e, t) {
  if (typeof e == "string") {
    const n = d1(e);
    if (l1.test(n))
      throw new ne(
        `Invalid URL ${JSON.stringify(h1(n))}: missing "//" after protocol`,
        ne.ERR_INVALID_URL,
        t
      );
  }
}
function dm(e, t, n, r) {
  nd(t, r);
  let a = !i1(t);
  return e && (a || n === !1) ? (nd(e, r), s1(e, t)) : t;
}
const rd = (e) => e instanceof kt ? { ...e } : e, m1 = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
  Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  )
) : Object.keys(e);
function Tr(e, t) {
  e = e || {}, t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(u, d, f, p) {
    return A.isPlainObject(u) && A.isPlainObject(d) ? A.merge.call({ caseless: p }, u, d) : A.isPlainObject(d) ? A.merge({}, d) : A.isArray(d) ? d.slice() : d;
  }
  function a(u, d, f, p) {
    if (A.isUndefined(d)) {
      if (!A.isUndefined(u))
        return r(void 0, u, f, p);
    } else return r(u, d, f, p);
  }
  function o(u, d) {
    if (!A.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
    if (A.isUndefined(d)) {
      if (!A.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function s(u) {
    const d = A.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!A.isUndefined(d))
      if (A.isPlainObject(d)) {
        if (A.hasOwnProp(d, u))
          return d[u];
      } else
        return;
    const f = A.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (A.isPlainObject(f) && A.hasOwnProp(f, u))
      return f[u];
  }
  function l(u, d, f) {
    if (A.hasOwnProp(t, f))
      return r(u, d);
    if (A.hasOwnProp(e, f))
      return r(void 0, u);
  }
  const c = {
    url: o,
    method: o,
    data: o,
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
    headers: (u, d, f) => a(rd(u), rd(d), f, !0)
  };
  return A.forEach(m1({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const f = A.hasOwnProp(c, d) ? c[d] : a, p = A.hasOwnProp(e, d) ? e[d] : void 0, b = A.hasOwnProp(t, d) ? t[d] : void 0, y = f(p, b, d);
    A.isUndefined(y) && f !== l || (n[d] = y);
  }), A.hasOwnProp(t, "validateStatus") && A.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (A.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const g1 = ["content-type", "content-length"];
function v1(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, a]) => {
    g1.includes(r.toLowerCase()) && e.set(r, a);
  });
}
const p1 = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function fm(e) {
  const t = Tr({}, e), n = (f) => A.hasOwnProp(t, f) ? t[f] : void 0, r = n("data");
  let a = n("withXSRFToken");
  const o = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let s = n("headers");
  const l = n("auth"), c = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
  if (t.headers = s = kt.from(s), t.url = im(
    dm(c, d, u, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const f = A.getSafeProp(l, "username") || "", p = A.getSafeProp(l, "password") || "";
    try {
      s.set(
        "Authorization",
        "Basic " + btoa(f + ":" + (p ? p1(p) : ""))
      );
    } catch (b) {
      throw ne.from(b, ne.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (A.isFormData(r) && (Mt.hasStandardBrowserEnv || Mt.hasStandardBrowserWebWorkerEnv || A.isReactNative(r) ? s.setContentType(void 0) : A.isFunction(r.getHeaders) && v1(s, r.getHeaders(), n("formDataHeaderPolicy"))), Mt.hasStandardBrowserEnv && (A.isFunction(a) && (a = a(t)), a === !0 || a == null && a1(t.url))) {
    const p = o && i && o1.read(i);
    p && s.set(o, p);
  }
  return t;
}
const y1 = typeof XMLHttpRequest < "u", b1 = y1 && function(e) {
  return new Promise(function(n, r) {
    const a = fm(e);
    let o = a.data;
    const i = kt.from(a.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: c } = a, u, d, f, p, b;
    function y() {
      p && p(), b && b(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(a.method.toUpperCase(), a.url, !0), h.timeout = a.timeout;
    function g() {
      if (!h)
        return;
      const w = kt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), C = {
        data: !s || s === "text" || s === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: w,
        config: e,
        request: h
      };
      um(
        function(E) {
          n(E), y();
        },
        function(E) {
          r(E), y();
        },
        C
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith("file:")) || setTimeout(g);
    }, h.onabort = function() {
      h && (r(new ne("Request aborted", ne.ECONNABORTED, e, h)), y(), h = null);
    }, h.onerror = function(x) {
      const C = x && x.message ? x.message : "Network Error", S = new ne(C, ne.ERR_NETWORK, e, h);
      S.event = x || null, r(S), y(), h = null;
    }, h.ontimeout = function() {
      let x = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const C = a.transitional || ru;
      a.timeoutErrorMessage && (x = a.timeoutErrorMessage), r(
        new ne(
          x,
          C.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
          e,
          h
        )
      ), y(), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && A.forEach(tm(i), function(x, C) {
      h.setRequestHeader(C, x);
    }), A.isUndefined(a.withCredentials) || (h.withCredentials = !!a.withCredentials), s && s !== "json" && (h.responseType = a.responseType), c && ([f, b] = ji(c, !0), h.addEventListener("progress", f)), l && h.upload && ([d, p] = ji(l), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", p)), (a.cancelToken || a.signal) && (u = (w) => {
      h && (r(!w || w.type ? new Ro(null, e, h) : w), h.abort(), y(), h = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const v = t1(a.url);
    if (v && !Mt.protocols.includes(v)) {
      r(
        new ne(
          "Unsupported protocol " + v + ":",
          ne.ERR_BAD_REQUEST,
          e
        )
      ), y();
      return;
    }
    h.send(o || null);
  });
}, w1 = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const a = function(l) {
    if (!r) {
      r = !0, i();
      const c = l instanceof Error ? l : this.reason;
      n.abort(
        c instanceof ne ? c : new Ro(c instanceof Error ? c.message : c)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, a(new ne(`timeout of ${t}ms exceeded`, ne.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(a) : l.removeEventListener("abort", a);
    }), e = null);
  };
  e.forEach((l) => {
    if (!r) {
      if (l.aborted) {
        a.call(l);
        return;
      }
      l.addEventListener("abort", a, { once: !0 });
    }
  });
  const { signal: s } = n;
  return s.unsubscribe = () => A.asap(i), s;
}, S1 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, x1 = async function* (e, t) {
  for await (const n of C1(e))
    yield* S1(n, t);
}, C1 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, ad = (e, t, n, r) => {
  const a = x1(e, t);
  let o = 0, i, s = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: c, value: u } = await a.next();
          if (c) {
            s(), l.close();
            return;
          }
          let d = u.byteLength;
          if (n) {
            let f = o += d;
            n(f);
          }
          l.enqueue(new Uint8Array(u));
        } catch (c) {
          throw s(c), c;
        }
      },
      cancel(l) {
        return s(l), a.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, od = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, hm = (e, t, n) => t + 2 < n && od(e.charCodeAt(t + 1)) && od(e.charCodeAt(t + 2)), id = (e) => e <= 57 ? e - 48 : (e & 223) - 55, E1 = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, _1 = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, O1 = (e) => {
  const t = Math.floor(e / 4), n = e % 4;
  return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, R1 = (e) => {
  const t = e.length;
  let n = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, T1 = (e) => {
  const t = e.length;
  let n = 0, r = 0, a = !1;
  for (let o = 0; o < t; o++) {
    let i = e.charCodeAt(o);
    if (i === 37 && hm(e, o, t) && (i = id(e.charCodeAt(o + 1)) * 16 + id(e.charCodeAt(o + 2)), o += 2), !_1(i)) {
      if (i === 61) {
        r++;
        continue;
      }
      if (!E1(i) || r > 0) {
        a = !0;
        continue;
      }
      n++;
    }
  }
  return a || r > 2 || r > 0 && (n + r) % 4 !== 0 || n % 4 === 1 ? R1(e) : O1(n);
}, P1 = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const n = e.indexOf(",");
  if (n < 0) return 0;
  const r = e.slice(5, n), a = e.slice(n + 1);
  if (/;base64/i.test(r))
    return t(a);
  let i = 0;
  for (let s = 0, l = a.length; s < l; s++) {
    const c = a.charCodeAt(s);
    if (c === 37 && hm(a, s, l))
      i += 1, s += 2;
    else if (c < 128)
      i += 1;
    else if (c < 2048)
      i += 2;
    else if (c >= 55296 && c <= 56319 && s + 1 < l) {
      const u = a.charCodeAt(s + 1);
      u >= 56320 && u <= 57343 ? (i += 4, s++) : i += 3;
    } else
      i += 3;
  }
  return i;
};
function M1(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return P1(
    t === -1 ? e : e.slice(0, t),
    T1
  );
}
const ou = "1.19.0", sd = 64 * 1024, { isFunction: Jo } = A, $1 = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), ld = (e) => {
  if (!A.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, cd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, D1 = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, N1 = (e) => {
  const t = A.global !== void 0 && A.global !== null ? A.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = A.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: a, Request: o, Response: i } = e, s = a ? Jo(a) : typeof fetch == "function", l = Jo(o), c = Jo(i);
  if (!s)
    return !1;
  const u = s && Jo(n), d = s && (typeof r == "function" ? /* @__PURE__ */ ((g) => (v) => g.encode(v))(new r()) : async (g) => new Uint8Array(await new o(g).arrayBuffer())), f = l && u && cd(() => {
    let g = !1;
    const v = new o(Mt.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }), w = v.headers.has("Content-Type");
    return v.body != null && v.body.cancel(), g && !w;
  }), p = c && u && cd(() => A.isReadableStream(new i("").body)), b = {
    stream: p && ((g) => g.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !b[g] && (b[g] = (v, w) => {
      let x = v && v[g];
      if (x)
        return x.call(v);
      throw new ne(
        `Response type '${g}' is not supported`,
        ne.ERR_NOT_SUPPORT,
        w
      );
    });
  });
  const y = async (g) => {
    if (g == null)
      return 0;
    if (A.isBlob(g))
      return g.size;
    if (A.isSpecCompliantForm(g))
      return (await new o(Mt.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (A.isArrayBufferView(g) || A.isArrayBuffer(g))
      return g.byteLength;
    if (A.isURLSearchParams(g) && (g = g + ""), A.isString(g))
      return (await d(g)).byteLength;
  }, h = async (g, v) => {
    const w = A.toFiniteNumber(g.getContentLength());
    return w ?? y(v);
  };
  return async (g) => {
    let {
      url: v,
      method: w,
      data: x,
      signal: C,
      cancelToken: S,
      timeout: E,
      onDownloadProgress: T,
      onUploadProgress: O,
      responseType: _,
      headers: M,
      withCredentials: k = "same-origin",
      fetchOptions: j,
      maxContentLength: P,
      maxBodyLength: D
    } = fm(g);
    const R = A.isNumber(P) && P > -1, F = A.isNumber(D) && D > -1, N = (X) => A.hasOwnProp(g, X) ? g[X] : void 0;
    let H = a || fetch;
    _ = _ ? (_ + "").toLowerCase() : "text";
    let B = w1(
      [C, S && S.toAbortSignal()],
      E
    ), $ = null;
    const L = B && B.unsubscribe && (() => {
      B.unsubscribe();
    });
    let W, U = null;
    const te = () => new ne(
      "Request body larger than maxBodyLength limit",
      ne.ERR_BAD_REQUEST,
      g,
      $
    );
    try {
      let X;
      const J = N("auth");
      if (J) {
        const Y = A.getSafeProp(J, "username") || "", le = A.getSafeProp(J, "password") || "";
        X = {
          username: Y,
          password: le
        };
      }
      if (D1(v)) {
        const Y = new URL(v, Mt.origin);
        if (!X && (Y.username || Y.password)) {
          const le = ld(Y.username), ve = ld(Y.password);
          X = {
            username: le,
            password: ve
          };
        }
        (Y.username || Y.password) && (Y.username = "", Y.password = "", v = Y.href);
      }
      if (X && (M.delete("authorization"), M.set(
        "Authorization",
        "Basic " + btoa($1((X.username || "") + ":" + (X.password || "")))
      )), R && typeof v == "string" && v.startsWith("data:") && M1(v) > P)
        throw new ne(
          "maxContentLength size of " + P + " exceeded",
          ne.ERR_BAD_RESPONSE,
          g,
          $
        );
      if (F && w !== "get" && w !== "head") {
        const Y = await y(x);
        if (typeof Y == "number" && isFinite(Y) && (W = Y, Y > D))
          throw te();
      }
      const ee = F && (A.isReadableStream(x) || A.isStream(x)), ae = (Y, le, ve) => ad(
        Y,
        sd,
        (be) => {
          if (F && be > D)
            throw U = te();
          le && le(be);
        },
        ve
      );
      if (f && w !== "get" && w !== "head" && (O || ee)) {
        if (W = W ?? await h(M, x), W !== 0 || ee) {
          let Y = new o(v, {
            method: "POST",
            body: x,
            duplex: "half"
          }), le;
          if (A.isFormData(x) && (le = Y.headers.get("content-type")) && M.setContentType(le), Y.body) {
            const [ve, be] = O && ed(
              W,
              ji(td(O))
            ) || [];
            x = ae(Y.body, ve, be);
          }
        }
      } else if (ee && !l && u && w !== "get" && w !== "head")
        x = ae(x);
      else if (ee && l && !f && w !== "get" && w !== "head")
        throw new ne(
          "Stream request bodies are not supported by the current fetch implementation",
          ne.ERR_NOT_SUPPORT,
          g,
          $
        );
      A.isString(k) || (k = k ? "include" : "omit");
      const se = l && "credentials" in o.prototype;
      if (A.isFormData(x)) {
        const Y = M.getContentType();
        Y && /^multipart\/form-data/i.test(Y) && !/boundary=/i.test(Y) && M.delete("content-type");
      }
      M.set("User-Agent", "axios/" + ou, !1);
      const fe = {
        ...j,
        signal: B,
        method: w.toUpperCase(),
        headers: tm(M.normalize()),
        body: x,
        duplex: "half",
        credentials: se ? k : void 0
      };
      $ = l && new o(v, fe);
      let oe = await (l ? H($, j) : H(v, fe));
      const ye = kt.from(oe.headers);
      if (R) {
        const Y = A.toFiniteNumber(ye.getContentLength());
        if (Y != null && Y > P)
          throw new ne(
            "maxContentLength size of " + P + " exceeded",
            ne.ERR_BAD_RESPONSE,
            g,
            $
          );
      }
      const G = p && (_ === "stream" || _ === "response");
      if (p && oe.body && (T || R || G && L)) {
        const Y = {};
        ["status", "statusText", "headers"].forEach((_e) => {
          Y[_e] = oe[_e];
        });
        const le = A.toFiniteNumber(ye.getContentLength()), [ve, be] = T && ed(
          le,
          ji(td(T), !0)
        ) || [];
        let Te = 0;
        const pe = (_e) => {
          if (R && (Te = _e, Te > P))
            throw new ne(
              "maxContentLength size of " + P + " exceeded",
              ne.ERR_BAD_RESPONSE,
              g,
              $
            );
          ve && ve(_e);
        };
        oe = new i(
          ad(oe.body, sd, pe, () => {
            be && be(), L && L();
          }),
          Y
        );
      }
      _ = _ || "text";
      let ue = await b[A.findKey(b, _) || "text"](
        oe,
        g
      );
      if (R && !p && !G) {
        let Y;
        if (ue != null && (typeof ue.byteLength == "number" ? Y = ue.byteLength : typeof ue.size == "number" ? Y = ue.size : typeof ue == "string" && (Y = typeof r == "function" ? new r().encode(ue).byteLength : ue.length)), typeof Y == "number" && Y > P)
          throw new ne(
            "maxContentLength size of " + P + " exceeded",
            ne.ERR_BAD_RESPONSE,
            g,
            $
          );
      }
      return !G && L && L(), await new Promise((Y, le) => {
        um(Y, le, {
          data: ue,
          headers: kt.from(oe.headers),
          status: oe.status,
          statusText: oe.statusText,
          config: g,
          request: $
        });
      });
    } catch (X) {
      if (L && L(), B && B.aborted && B.reason instanceof ne) {
        const J = B.reason;
        throw J.config = g, $ && (J.request = $), X !== J && Object.defineProperty(J, "cause", {
          __proto__: null,
          value: X,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), J;
      }
      if (U)
        throw $ && !U.request && (U.request = $), U;
      if (X instanceof ne)
        throw $ && !X.request && (X.request = $), X;
      if (X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message)) {
        const J = new ne(
          "Network Error",
          ne.ERR_NETWORK,
          g,
          $,
          X && X.response
        );
        throw Object.defineProperty(J, "cause", {
          __proto__: null,
          value: X.cause || X,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), J;
      }
      throw ne.from(X, X && X.code, g, $, X && X.response);
    }
  };
}, k1 = /* @__PURE__ */ new Map(), mm = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: a } = t, o = [r, a, n];
  let i = o.length, s = i, l, c, u = k1;
  for (; s--; )
    l = o[s], c = u.get(l), c === void 0 && u.set(l, c = s ? /* @__PURE__ */ new Map() : N1(t)), u = c;
  return c;
};
mm();
const iu = {
  http: LS,
  xhr: b1,
  fetch: {
    get: mm
  }
};
A.forEach(iu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const ud = (e) => `- ${e}`, A1 = (e) => A.isFunction(e) || e === null || e === !1;
function F1(e, t) {
  e = A.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, a;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let s;
    if (a = r, !A1(r) && (a = iu[(s = String(r)).toLowerCase()], a === void 0))
      throw new ne(`Unknown adapter '${s}'`);
    if (a && (A.isFunction(a) || (a = a.get(t))))
      break;
    o[s || "#" + i] = a;
  }
  if (!a) {
    const i = Object.entries(o).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = n ? i.length > 1 ? `since :
` + i.map(ud).join(`
`) : " " + ud(i[0]) : "as no adapter specified";
    throw new ne(
      "There is no suitable adapter to dispatch the request " + s,
      ne.ERR_NOT_SUPPORT
    );
  }
  return a;
}
const gm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: F1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: iu
};
function Bs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ro(null, e);
}
function Ws(e) {
  return Bs(e), e.headers = kt.from(e.headers), e.data = Hs.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gm.getAdapter(e.adapter || Oo.adapter, e)(e).then(
    function(r) {
      Bs(e), e.response = r;
      try {
        r.data = Hs.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = kt.from(r.headers), r;
    },
    function(r) {
      if (!cm(r) && (Bs(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Hs.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = kt.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const cs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  cs[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const dd = {};
cs.transitional = function(t, n, r) {
  function a(o, i) {
    return "[Axios v" + ou + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, s) => {
    if (t === !1)
      throw new ne(
        a(i, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return n && !dd[i] && (dd[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, s) : !0;
  };
};
cs.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function j1(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], i = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (i) {
      const s = e[o], l = s === void 0 || i(s, o, e);
      if (l !== !0)
        throw new ne(
          "option " + o + " must be " + l,
          ne.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new ne("Unknown option " + o, ne.ERR_BAD_OPTION);
  }
}
const wi = {
  assertOptions: j1,
  validators: cs
}, $t = wi.validators;
let Er = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ju(),
      response: new Ju()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const o = (() => {
          if (!a.stack)
            return "";
          const i = a.stack.indexOf(`
`);
          return i === -1 ? "" : a.stack.slice(i + 1);
        })();
        try {
          if (!r.stack)
            r.stack = o;
          else if (o) {
            const i = o.indexOf(`
`), s = i === -1 ? -1 : o.indexOf(`
`, i + 1), l = s === -1 ? "" : o.slice(s + 1);
            String(r.stack).endsWith(l) || (r.stack += `
` + o);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Tr(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && wi.assertOptions(
      r,
      {
        silentJSONParsing: $t.transitional($t.boolean),
        forcedJSONParsing: $t.transitional($t.boolean),
        clarifyTimeoutError: $t.transitional($t.boolean),
        legacyInterceptorReqResOrdering: $t.transitional($t.boolean),
        advertiseZstdAcceptEncoding: $t.transitional($t.boolean),
        validateStatusUndefinedResolves: $t.transitional($t.boolean)
      },
      !1
    ), a != null && (A.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : wi.assertOptions(
      a,
      {
        encode: $t.function,
        serialize: $t.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), wi.assertOptions(
      n,
      {
        baseUrl: $t.spelling("baseURL"),
        withXsrfToken: $t.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && A.merge(o.common, o[n.method]);
    o && A.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (b) => {
      delete o[b];
    }), n.headers = kt.concat(i, o);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(y) {
      if (typeof y.runWhen == "function" && y.runWhen(n) === !1)
        return;
      l = l && y.synchronous;
      const h = n.transitional || ru;
      h && h.legacyInterceptorReqResOrdering ? s.unshift(y.fulfilled, y.rejected) : s.push(y.fulfilled, y.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const b = [Ws.bind(this), void 0];
      for (b.unshift(...s), b.push(...c), f = b.length, u = Promise.resolve(n); d < f; )
        u = u.then(b[d++], b[d++]);
      return u;
    }
    f = s.length;
    let p = n;
    for (; d < f; ) {
      const b = s[d++], y = s[d++];
      try {
        p = b ? b(p) : p;
      } catch (h) {
        if (!y) {
          u = Promise.reject(h);
          break;
        }
        try {
          const g = y.call(this, h);
          A.isThenable(g) && (u = Promise.resolve(g).then(
            () => Ws.call(this, p)
          ));
        } catch (g) {
          u = Promise.reject(g);
        }
        break;
      }
    }
    if (!u)
      try {
        u = Ws.call(this, p);
      } catch (b) {
        u = Promise.reject(b);
      }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Tr(this.defaults, t);
    const n = dm(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return im(n, t.params, t.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(t) {
  Er.prototype[t] = function(n, r) {
    return this.request(
      Tr(r || {}, {
        method: t,
        url: n,
        data: r && A.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
A.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(o, i, s) {
      return this.request(
        Tr(s || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: i
        })
      );
    };
  }
  Er.prototype[t] = n(), t !== "query" && (Er.prototype[t + "Form"] = n(!0));
});
let I1 = class vm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const i = new Promise((s) => {
        r.subscribe(s), o = s;
      }).then(a);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, s) {
      r.reason || (r.reason = new Ro(o, i, s), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new vm(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function L1(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function V1(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Ml = {
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
Object.entries(Ml).forEach(([e, t]) => {
  Ml[t] = e;
});
function pm(e) {
  const t = new Er(e), n = Yh(Er.prototype.request, t);
  return A.extend(n, Er.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return pm(Tr(e, a));
  }, n;
}
const mt = pm(Oo);
mt.Axios = Er;
mt.CanceledError = Ro;
mt.CancelToken = I1;
mt.isCancel = cm;
mt.VERSION = ou;
mt.toFormData = ls;
mt.AxiosError = ne;
mt.Cancel = mt.CanceledError;
mt.all = function(t) {
  return Promise.all(t);
};
mt.spread = L1;
mt.isAxiosError = V1;
mt.mergeConfig = Tr;
mt.AxiosHeaders = kt;
mt.formToJSON = (e) => lm(A.isHTMLForm(e) ? new FormData(e) : e);
mt.getAdapter = gm.getAdapter;
mt.HttpStatusCode = Ml;
mt.default = mt;
const {
  Axios: AP,
  AxiosError: FP,
  CanceledError: jP,
  isCancel: IP,
  CancelToken: LP,
  VERSION: VP,
  all: zP,
  Cancel: HP,
  isAxiosError: BP,
  spread: WP,
  toFormData: UP,
  AxiosHeaders: YP,
  HttpStatusCode: qP,
  formToJSON: GP,
  getAdapter: KP,
  mergeConfig: XP,
  create: ZP
} = mt, z1 = window.env.API_BASE_URL;
let Br;
const Si = mt.create({
  baseURL: z1,
  headers: {
    "Content-Type": "application/json"
  }
});
Si.interceptors.request.use((e) => {
  try {
    if (!Br) {
      const n = window.localStorage.getItem("user");
      n && (Br = JSON.parse(n));
    }
    if (e.url == "login" && (Br = null), Br) {
      const n = Br.token;
      n && (e.headers.Authorization = "Bearer " + n, e.url == "logout" && (Br = null));
    }
  } catch (n) {
    console.log(n);
  }
  const t = document.querySelector('meta[name="csrf-token"]');
  if (t) {
    const n = t.getAttribute("content");
    n && (e.headers["X-CSRF-TOKEN"] = n);
  }
  return e;
});
const ym = q.createContext({}), bm = () => q.useContext(ym), JP = ({ children: e }) => {
  const [t, n] = q.useState({});
  return /* @__PURE__ */ z.jsx(
    ym.Provider,
    {
      value: {
        notificationData: t,
        setNotificationData: n
      },
      children: e
    }
  );
}, wm = q.createContext(
  {}
), Pr = () => q.useContext(wm), QP = ({
  children: e
}) => {
  const { logout: t } = is(), { setNotificationData: n } = bm(), [r, a] = q.useState([]), [o, i] = q.useState([]), s = (O) => {
    const _ = b(O.key);
    return _.path = O.path, _.pageSize = O.pageSize ?? 0, _.queryText = O.queryText ?? "", _.onSuccess = O.onSuccess, _;
  }, l = () => {
    i(Object.assign([], o));
  }, c = () => {
    a(Object.assign([], r));
  }, u = (O, _, M = !0, k = !0) => {
    let j = "";
    _ = _.response, !_ || !_.data || _.data instanceof String ? j = "Unhandled server exception." : _.data.message ? _.data.message.includes("Unauthenticated") ? (j = "Session has expired. Please login again.", x(), t()) : j = "Unhandled server exception." : j = _.data.error || "Unhandled server exception.", O.isLoading = !1, O.isDone = !0, j instanceof Object ? O.errors = j : (O.errorMessage = j, _ && k && n({
      show_notification: !0,
      error_title: _.data.error_title,
      error_message: j
    })), M ? (O.data = [], c()) : l();
  }, d = (O) => {
    O.isDone = !1, f([O]);
  }, f = (O, _ = !0) => {
    for (const M of O) {
      const k = b(M.key);
      if (k.path = M.path, k.onSuccess = M.onSuccess, !_ && (k.isLoading || k.isDone))
        continue;
      if (!k.path) {
        setTimeout(() => {
          k.data = [], c();
        }, 500);
        continue;
      }
      const P = k.path.includes("?") ? "&" : "?";
      k.queryText.length >= 2 ? k.pathWithParams = `${k.path}${P}query_text=${k.queryText}` : k.pageSize ? k.pathWithParams = `${k.path}${P}page_size=${k.pageSize}&page=${k.currentPage}` : k.pathWithParams = k.path, k.isLoading = !0, c(), Si.get(k.pathWithParams).then((D) => {
        if (!D.data) {
          u(k, D);
          return;
        }
        let R = D.data.data;
        R instanceof Object && R.current_page ? (k.isPaginated = !0, k.currentPage = R.current_page, k.lastPage = R.last_page, k.total = R.total, k.from = R.from, R = R.data) : R instanceof Object && R.data ? (k.isPaginated = !1, k.total = R.total, R = R.data, k.currentPage = 0, k.lastPage = 1) : (k.isPaginated = !1, k.currentPage = 0, k.lastPage = 1), R instanceof Array ? (k.rawData = R, k.data = k.rawData) : k.singleData = R, k.isLoading = !1, k.isDone = !0, k.onSuccess && k.onSuccess(R), c();
      }).catch((D) => {
        u(k, D);
      });
    }
  }, p = (O, _) => {
    let M = O.find((k) => k.key == _);
    return M || (M = {
      key: _,
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
    }, O.push(M)), M;
  }, b = (O) => p(r, O), y = (O, _, M) => {
    const k = b(O), j = k.rawData, P = j.links ? j.data : j;
    _ = _.toLowerCase();
    let D = P.filter((R) => {
      let F = !1;
      return M.forEach((N) => {
        if (R[N] && R[N].toLowerCase().includes(_))
          return F = !0, !0;
      }), F;
    });
    if (Object.prototype.hasOwnProperty.call(j, "links")) {
      const R = JSON.parse(JSON.stringify(j));
      R.data = D, D = R;
    }
    k.data = D, c();
  }, h = (O) => p(o, O), g = (O) => {
    const _ = h(O.key);
    if (_.isLoading) {
      console.warn(
        `Request ${O.key} is already in progress, ignoring duplicate submission`
      );
      return;
    }
    _.path = O.path, _.isLoading = !0, _.errorMessage = null, _.errors = null, l();
    const M = _.postData;
    O.extraParameters && Object.keys(O.extraParameters).forEach((j) => {
      M[j] = O.extraParameters[j];
    });
    const k = [];
    Object.keys(M).forEach((j) => {
      if (j.endsWith("_data-date")) {
        const P = j.replace("_data-date", ""), D = j, R = P + "_data-time";
        M[D] && (M[R] ? (M[P] = M[D] + " " + M[R], M[P] = Ew(
          M[P]
        )) : M[P] = _w(M[D])), k.push(D), k.push(R);
      }
    }), k.forEach(function(j) {
      delete M[j];
    }), Si.post(O.path, M).then((j) => {
      _.data = [], _.isLoading = !1, _.isDone = !0, l(), _.onSuccess && _.onSuccess(j.data.data), O.onSuccess && O.onSuccess(j.data.data, M), O.showToast !== !1 && n({
        show_notification: !0,
        success_title: j.data.success_title,
        success_message: j.data.success_message ? j.data.success_message : "Successfully saved."
      });
    }).catch((j) => {
      if (u(
        _,
        j,
        !1,
        O.showErrorToast ?? !0
      ), O.onError) {
        const P = j && j.response && j.response.data && j.response.data.error;
        O.onError(P);
      }
    });
  }, v = (O) => {
    const _ = {
      key: O.key,
      path: O.path,
      pathWithParams: O.path,
      isLoading: !0,
      isDone: !1,
      data: [],
      errors: null,
      errorMessage: null
    };
    Si.delete(O.path, { data: O.data }).then((M) => {
      _.isLoading = !1, _.isDone = !0, O.onSuccess && O.onSuccess(M.data.data), O.showToast !== !1 && n({
        show_notification: !0,
        success_title: M.data.success_title,
        success_message: M.data.success_message ? M.data.success_message : "Successfully deleted."
      });
    }).catch((M) => {
      if (u(
        _,
        M,
        !1,
        O.showErrorToast ?? !0
      ), O.onError) {
        const k = M && M.response && M.response.data && M.response.data.error;
        O.onError(k);
      }
    });
  }, w = (O, _) => {
    const M = h(O).errors;
    return M ? (_.endsWith("_data-date") ? _ = O.replace("_data-date", "") : _.endsWith("_data-time") && (_ = O.replace("_data-time", "")), M[_]) : !1;
  }, x = () => {
    a([]), i([]);
  }, C = (O) => {
    const _ = r.findIndex((M) => M.key === O);
    _ > -1 && r.splice(_, 1);
  }, S = (O) => {
    const _ = o.findIndex((M) => M.key === O);
    _ > -1 && (o.splice(_, 1), l());
  }, E = (O) => h(O).postData.id == 0, T = () => r.map((O) => O.key);
  return /* @__PURE__ */ z.jsx(
    wm.Provider,
    {
      value: {
        fetchRequest: d,
        fetchRequests: f,
        submitPostRequest: g,
        submitDeleteRequest: v,
        createRequest: s,
        getRequest: b,
        getPostRequest: h,
        getPostRequestErrorProperty: w,
        notifyRequests: c,
        notifyPostRequests: l,
        isForCreation: E,
        filterRequestData: y,
        clearRequest: C,
        clearPostRequest: S,
        clearRequests: x,
        getRequestKeys: T
      },
      children: e
    }
  );
}, Sm = q.createContext({}), xm = () => q.useContext(Sm), eM = ({ children: e }) => {
  const { clearPostRequest: t } = Pr(), [n, r] = q.useState([]), a = (s) => n.indexOf(s) > -1, o = (s) => {
    a(s) || (n.push(s), r(Object.assign([], n)));
  }, i = (s) => {
    a(s) && (t(s), n.splice(n.indexOf(s), 1), r(Object.assign([], n)));
  };
  return /* @__PURE__ */ z.jsx(
    Sm.Provider,
    {
      value: {
        isModalOpen: a,
        openModal: o,
        closeModal: i
      },
      children: e
    }
  );
}, tM = (e) => {
  const { authUser: t } = is();
  if (!t)
    return /* @__PURE__ */ z.jsx(ks, { to: "/" });
  if (e.authorizedRole != null && e.authorizedRole != t.role_id)
    return /* @__PURE__ */ z.jsx(ks, { to: "/not-authorized" });
  if (e.authorizedRoles != null) {
    let n = !1;
    if (e.authorizedRoles.forEach((r) => {
      if (r == t.role_id)
        return n = !0, !0;
    }), !n)
      return /* @__PURE__ */ z.jsx(ks, { to: "/not-authorized" });
  }
  return e.children;
}, us = () => {
  const [e, t] = q.useState(window.innerWidth < 768);
  return q.useEffect(() => {
    const n = () => {
      t(window.innerWidth < 768);
    };
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e;
};
var xi = { exports: {} }, H1 = xi.exports, fd;
function B1() {
  return fd || (fd = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(H1, (function() {
      var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", l = "hour", c = "day", u = "week", d = "month", f = "quarter", p = "year", b = "date", y = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
        var D = ["th", "st", "nd", "rd"], R = P % 100;
        return "[" + P + (D[(R - 20) % 10] || D[R] || D[0]) + "]";
      } }, w = function(P, D, R) {
        var F = String(P);
        return !F || F.length >= D ? P : "" + Array(D + 1 - F.length).join(R) + P;
      }, x = { s: w, z: function(P) {
        var D = -P.utcOffset(), R = Math.abs(D), F = Math.floor(R / 60), N = R % 60;
        return (D <= 0 ? "+" : "-") + w(F, 2, "0") + ":" + w(N, 2, "0");
      }, m: function P(D, R) {
        if (D.date() < R.date()) return -P(R, D);
        var F = 12 * (R.year() - D.year()) + (R.month() - D.month()), N = D.clone().add(F, d), H = R - N < 0, B = D.clone().add(F + (H ? -1 : 1), d);
        return +(-(F + (R - N) / (H ? N - B : B - N)) || 0);
      }, a: function(P) {
        return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
      }, p: function(P) {
        return { M: d, y: p, w: u, d: c, D: b, h: l, m: s, s: i, ms: o, Q: f }[P] || String(P || "").toLowerCase().replace(/s$/, "");
      }, u: function(P) {
        return P === void 0;
      } }, C = "en", S = {};
      S[C] = v;
      var E = "$isDayjsObject", T = function(P) {
        return P instanceof k || !(!P || !P[E]);
      }, O = function P(D, R, F) {
        var N;
        if (!D) return C;
        if (typeof D == "string") {
          var H = D.toLowerCase();
          S[H] && (N = H), R && (S[H] = R, N = H);
          var B = D.split("-");
          if (!N && B.length > 1) return P(B[0]);
        } else {
          var $ = D.name;
          S[$] = D, N = $;
        }
        return !F && N && (C = N), N || !F && C;
      }, _ = function(P, D) {
        if (T(P)) return P.clone();
        var R = typeof D == "object" ? D : {};
        return R.date = P, R.args = arguments, new k(R);
      }, M = x;
      M.l = O, M.i = T, M.w = function(P, D) {
        return _(P, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
      };
      var k = (function() {
        function P(R) {
          this.$L = O(R.locale, null, !0), this.parse(R), this.$x = this.$x || R.x || {}, this[E] = !0;
        }
        var D = P.prototype;
        return D.parse = function(R) {
          this.$d = (function(F) {
            var N = F.date, H = F.utc;
            if (N === null) return /* @__PURE__ */ new Date(NaN);
            if (M.u(N)) return /* @__PURE__ */ new Date();
            if (N instanceof Date) return new Date(N);
            if (typeof N == "string" && !/Z$/i.test(N)) {
              var B = N.match(h);
              if (B) {
                var $ = B[2] - 1 || 0, L = (B[7] || "0").substring(0, 3);
                return H ? new Date(Date.UTC(B[1], $, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, L)) : new Date(B[1], $, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, L);
              }
            }
            return new Date(N);
          })(R), this.init();
        }, D.init = function() {
          var R = this.$d;
          this.$y = R.getFullYear(), this.$M = R.getMonth(), this.$D = R.getDate(), this.$W = R.getDay(), this.$H = R.getHours(), this.$m = R.getMinutes(), this.$s = R.getSeconds(), this.$ms = R.getMilliseconds();
        }, D.$utils = function() {
          return M;
        }, D.isValid = function() {
          return this.$d.toString() !== y;
        }, D.isSame = function(R, F) {
          var N = _(R);
          return this.startOf(F) <= N && N <= this.endOf(F);
        }, D.isAfter = function(R, F) {
          return _(R) < this.startOf(F);
        }, D.isBefore = function(R, F) {
          return this.endOf(F) < _(R);
        }, D.$g = function(R, F, N) {
          return M.u(R) ? this[F] : this.set(N, R);
        }, D.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, D.valueOf = function() {
          return this.$d.getTime();
        }, D.startOf = function(R, F) {
          var N = this, H = !!M.u(F) || F, B = M.p(R), $ = function(ae, se) {
            var fe = M.w(N.$u ? Date.UTC(N.$y, se, ae) : new Date(N.$y, se, ae), N);
            return H ? fe : fe.endOf(c);
          }, L = function(ae, se) {
            return M.w(N.toDate()[ae].apply(N.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(se)), N);
          }, W = this.$W, U = this.$M, te = this.$D, X = "set" + (this.$u ? "UTC" : "");
          switch (B) {
            case p:
              return H ? $(1, 0) : $(31, 11);
            case d:
              return H ? $(1, U) : $(0, U + 1);
            case u:
              var J = this.$locale().weekStart || 0, ee = (W < J ? W + 7 : W) - J;
              return $(H ? te - ee : te + (6 - ee), U);
            case c:
            case b:
              return L(X + "Hours", 0);
            case l:
              return L(X + "Minutes", 1);
            case s:
              return L(X + "Seconds", 2);
            case i:
              return L(X + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, D.endOf = function(R) {
          return this.startOf(R, !1);
        }, D.$set = function(R, F) {
          var N, H = M.p(R), B = "set" + (this.$u ? "UTC" : ""), $ = (N = {}, N[c] = B + "Date", N[b] = B + "Date", N[d] = B + "Month", N[p] = B + "FullYear", N[l] = B + "Hours", N[s] = B + "Minutes", N[i] = B + "Seconds", N[o] = B + "Milliseconds", N)[H], L = H === c ? this.$D + (F - this.$W) : F;
          if (H === d || H === p) {
            var W = this.clone().set(b, 1);
            W.$d[$](L), W.init(), this.$d = W.set(b, Math.min(this.$D, W.daysInMonth())).$d;
          } else $ && this.$d[$](L);
          return this.init(), this;
        }, D.set = function(R, F) {
          return this.clone().$set(R, F);
        }, D.get = function(R) {
          return this[M.p(R)]();
        }, D.add = function(R, F) {
          var N, H = this;
          R = Number(R);
          var B = M.p(F), $ = function(U) {
            var te = _(H);
            return M.w(te.date(te.date() + Math.round(U * R)), H);
          };
          if (B === d) return this.set(d, this.$M + R);
          if (B === p) return this.set(p, this.$y + R);
          if (B === c) return $(1);
          if (B === u) return $(7);
          var L = (N = {}, N[s] = r, N[l] = a, N[i] = n, N)[B] || 1, W = this.$d.getTime() + R * L;
          return M.w(W, this);
        }, D.subtract = function(R, F) {
          return this.add(-1 * R, F);
        }, D.format = function(R) {
          var F = this, N = this.$locale();
          if (!this.isValid()) return N.invalidDate || y;
          var H = R || "YYYY-MM-DDTHH:mm:ssZ", B = M.z(this), $ = this.$H, L = this.$m, W = this.$M, U = N.weekdays, te = N.months, X = N.meridiem, J = function(se, fe, oe, ye) {
            return se && (se[fe] || se(F, H)) || oe[fe].slice(0, ye);
          }, ee = function(se) {
            return M.s($ % 12 || 12, se, "0");
          }, ae = X || function(se, fe, oe) {
            var ye = se < 12 ? "AM" : "PM";
            return oe ? ye.toLowerCase() : ye;
          };
          return H.replace(g, (function(se, fe) {
            return fe || (function(oe) {
              switch (oe) {
                case "YY":
                  return String(F.$y).slice(-2);
                case "YYYY":
                  return M.s(F.$y, 4, "0");
                case "M":
                  return W + 1;
                case "MM":
                  return M.s(W + 1, 2, "0");
                case "MMM":
                  return J(N.monthsShort, W, te, 3);
                case "MMMM":
                  return J(te, W);
                case "D":
                  return F.$D;
                case "DD":
                  return M.s(F.$D, 2, "0");
                case "d":
                  return String(F.$W);
                case "dd":
                  return J(N.weekdaysMin, F.$W, U, 2);
                case "ddd":
                  return J(N.weekdaysShort, F.$W, U, 3);
                case "dddd":
                  return U[F.$W];
                case "H":
                  return String($);
                case "HH":
                  return M.s($, 2, "0");
                case "h":
                  return ee(1);
                case "hh":
                  return ee(2);
                case "a":
                  return ae($, L, !0);
                case "A":
                  return ae($, L, !1);
                case "m":
                  return String(L);
                case "mm":
                  return M.s(L, 2, "0");
                case "s":
                  return String(F.$s);
                case "ss":
                  return M.s(F.$s, 2, "0");
                case "SSS":
                  return M.s(F.$ms, 3, "0");
                case "Z":
                  return B;
              }
              return null;
            })(se) || B.replace(":", "");
          }));
        }, D.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, D.diff = function(R, F, N) {
          var H, B = this, $ = M.p(F), L = _(R), W = (L.utcOffset() - this.utcOffset()) * r, U = this - L, te = function() {
            return M.m(B, L);
          };
          switch ($) {
            case p:
              H = te() / 12;
              break;
            case d:
              H = te();
              break;
            case f:
              H = te() / 3;
              break;
            case u:
              H = (U - W) / 6048e5;
              break;
            case c:
              H = (U - W) / 864e5;
              break;
            case l:
              H = U / a;
              break;
            case s:
              H = U / r;
              break;
            case i:
              H = U / n;
              break;
            default:
              H = U;
          }
          return N ? H : M.a(H);
        }, D.daysInMonth = function() {
          return this.endOf(d).$D;
        }, D.$locale = function() {
          return S[this.$L];
        }, D.locale = function(R, F) {
          if (!R) return this.$L;
          var N = this.clone(), H = O(R, F, !0);
          return H && (N.$L = H), N;
        }, D.clone = function() {
          return M.w(this.$d, this);
        }, D.toDate = function() {
          return new Date(this.valueOf());
        }, D.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, D.toISOString = function() {
          return this.$d.toISOString();
        }, D.toString = function() {
          return this.$d.toUTCString();
        }, P;
      })(), j = k.prototype;
      return _.prototype = j, [["$ms", o], ["$s", i], ["$m", s], ["$H", l], ["$W", c], ["$M", d], ["$y", p], ["$D", b]].forEach((function(P) {
        j[P[1]] = function(D) {
          return this.$g(D, P[0], P[1]);
        };
      })), _.extend = function(P, D) {
        return P.$i || (P(D, k, _), P.$i = !0), _;
      }, _.locale = O, _.isDayjs = T, _.unix = function(P) {
        return _(1e3 * P);
      }, _.en = S[C], _.Ls = S, _.p = {}, _;
    }));
  })(xi)), xi.exports;
}
var W1 = B1();
const Wr = /* @__PURE__ */ Qc(W1), U1 = q.forwardRef((e, t) => {
  if (e.hidden)
    return null;
  const n = (a) => {
    a.key === "Enter" && e.onEnterKeyPress && e.onEnterKeyPress();
  };
  return (() => {
    const a = e.options && e.options.map((i) => {
      let s = !1;
      const l = i.id;
      return e.disabledValues && e.disabledValues.length != 0 && (s = e.disabledValues.find(
        (u) => u == l
      ) != null), {
        value: l,
        label: i[e.optionsKey || "name"],
        disabled: s
      };
    });
    let o;
    if (e.type == "password")
      o = /* @__PURE__ */ z.jsx(
        mi.Password,
        {
          ref: t,
          name: e.name,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          maxLength: e.maxLength,
          onKeyDown: n,
          onChange: (i) => {
            e.onChange(i.target.value);
          },
          visibilityToggle: e.showPasswordToggle
        }
      );
    else if (e.type == "text-area")
      o = /* @__PURE__ */ z.jsx(
        mi.TextArea,
        {
          ref: t,
          name: e.name,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          maxLength: e.maxLength,
          onKeyDown: n,
          onChange: (i) => {
            let s = i.target.value;
            e.capitalize ? s = s.replace(
              /\b\w/g,
              (l) => l.toUpperCase()
            ) : e.capitalizeFirst && (s = s.charAt(0).toUpperCase() + s.slice(1)), e.onChange(s);
          },
          className: e.allCaps ? "uppercase-input" : e.capitalize ? "capitalize-input" : ""
        }
      );
    else if (e.type == "date")
      o = /* @__PURE__ */ z.jsx(
        rp,
        {
          ref: t,
          name: e.name,
          value: e.value && Wr(e.value),
          disabled: e.disabled,
          onKeyDown: n,
          minDate: e.disablePastDates ? Wr() : void 0,
          onChange: (i, s) => {
            let l = s;
            l = l && typeof s == "string" ? s : s[0], e.onChange(l);
          }
        }
      );
    else if (e.type == "time")
      o = /* @__PURE__ */ z.jsx(
        Au,
        {
          ref: t,
          name: e.name,
          defaultOpenValue: Wr("00:00:00", "HH:mm:ss"),
          value: e.value && Wr(e.value, "HH:mm:ss"),
          disabled: e.disabled,
          onKeyDown: n,
          onChange: (i, s) => {
            let l = s;
            l = l && typeof s == "string" ? s : s[0], e.onChange(l);
          }
        }
      );
    else if (e.type == "timemilli")
      o = /* @__PURE__ */ z.jsx(
        Au,
        {
          ref: t,
          name: e.name,
          format: "HH:mm:ss.SSS",
          defaultOpenValue: Wr("00:00:00.000", "HH:mm:ss.SSS"),
          value: e.value && Wr(e.value, "HH:mm:ss.SSS"),
          disabled: e.disabled,
          onKeyDown: n,
          onChange: (i, s) => {
            let l = s;
            l = l && typeof s == "string" ? s : s[0], e.onChange(l);
          }
        }
      );
    else if (e.type == "select" || e.type == "multiselect") {
      let i = e.value;
      a && e.value && e.type == "multiselect" && (i = [], e.value.forEach((s) => {
        for (const l of a)
          if (l.value == s) {
            i.push(s);
            break;
          }
      })), o = /* @__PURE__ */ z.jsx(
        ap,
        {
          ref: t,
          showSearch: !0,
          filterOption: (s, l) => ((l == null ? void 0 : l.label.toLowerCase()) ?? "").includes(
            s.toLowerCase()
          ),
          mode: e.type == "multiselect" ? "multiple" : void 0,
          value: i,
          options: a,
          disabled: e.disabled,
          onKeyDown: n,
          onChange: (s) => {
            e.onChange(s);
          }
        }
      );
    } else e.type == "number" ? o = /* @__PURE__ */ z.jsx(
      op,
      {
        ref: t,
        name: e.name,
        style: e.inputWidth ? { width: e.inputWidth } : { width: 200 },
        min: e.minValue,
        max: e.maxValue,
        value: e.value,
        step: e.step,
        disabled: e.disabled,
        onKeyDown: n,
        onChange: (i) => {
          e.onChange(i);
        },
        stringMode: !0
      }
    ) : e.type == "checkbox" ? o = /* @__PURE__ */ z.jsx(
      ip,
      {
        ref: t,
        name: e.name,
        checked: e.value,
        disabled: e.disabled,
        onKeyDown: n,
        onChange: (i) => {
          e.onChange(i.target.checked);
        }
      }
    ) : e.type == "switch" ? o = /* @__PURE__ */ z.jsx(z.Fragment, { children: /* @__PURE__ */ z.jsx(
      sp,
      {
        ref: t,
        checked: e.value == "1" || e.value == 1 || e.value == !0,
        disabled: e.disabled,
        onChange: (i) => {
          e.onChange(i);
        }
      }
    ) }) : o = /* @__PURE__ */ z.jsx(
      mi,
      {
        ref: t,
        name: e.name,
        value: e.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxLength: e.maxLength,
        onKeyDown: n,
        onChange: (i) => {
          let s = i.target.value;
          e.capitalize ? s = s.replace(
            /\b\w/g,
            (l) => l.toUpperCase()
          ) : e.capitalizeFirst && (s = s.charAt(0).toUpperCase() + s.slice(1)), e.onChange(s);
        },
        className: e.allCaps ? "uppercase-input" : e.capitalize ? "capitalize-input" : ""
      }
    );
    return /* @__PURE__ */ z.jsx(
      Kf.Item,
      {
        style: e.style,
        label: e.title,
        validateStatus: e.errorMessage ? "error" : "",
        hasFeedback: !0,
        help: e.errorMessage && e.errorMessage.toString().replace(" id ", " "),
        layout: e.horizontalStyle ? "horizontal" : "vertical",
        extra: e.description,
        children: o
      }
    );
  })();
}), Y1 = (e) => /* @__PURE__ */ z.jsx(
  lp,
  {
    title: e.title ? e.title : "",
    width: e.width,
    open: e.isOpen,
    maskClosable: !1,
    zIndex: e.isSubModal ? 1010 : 1e3,
    okText: e.saveText ? e.saveText : "Save",
    cancelText: e.cancelText ? e.cancelText : "Cancel",
    onOk: () => {
      e.onSaveClick && e.onSaveClick();
    },
    confirmLoading: e.isSaving,
    okButtonProps: { disabled: e.isSaveButtonDisabled },
    onCancel: () => {
      e.onCancelClick && e.onCancelClick();
    },
    footer: e.isSaveButtonHidden ? /* @__PURE__ */ z.jsx(
      lt,
      {
        type: "primary",
        onClick: () => {
          e.onCancelClick && e.onCancelClick();
        },
        children: e.cancelText ? e.cancelText : "Cancel"
      }
    ) : void 0,
    children: /* @__PURE__ */ z.jsx(Kf, { layout: "vertical", autoComplete: "off", children: e.body })
  }
);
var su = /* @__PURE__ */ Gi({});
function De() {
  return De = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, De.apply(null, arguments);
}
function Cm(e) {
  if (Array.isArray(e)) return e;
}
function q1(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function $l(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function lu(e, t) {
  if (e) {
    if (typeof e == "string") return $l(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $l(e, t) : void 0;
  }
}
function Em() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q(e, t) {
  return Cm(e) || q1(e, t) || lu(e, t) || Em();
}
function xe(e) {
  "@babel/helpers - typeof";
  return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xe(e);
}
function G1(e, t) {
  if (xe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xe(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _m(e) {
  var t = G1(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function I(e, t, n) {
  return (t = _m(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function K1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function At(e, t) {
  if (e == null) return {};
  var n, r, a = K1(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
var Us = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var hd;
function X1() {
  return hd || (hd = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var s = arguments[i];
          s && (o = a(o, r(s)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var i = "";
        for (var s in o)
          t.call(o, s) && o[s] && (i = a(i, s));
        return i;
      }
      function a(o, i) {
        return i ? o ? o + " " + i : o + i : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(Us)), Us.exports;
}
var Z1 = X1();
const he = /* @__PURE__ */ Qc(Z1), Et = Math.round;
function Ys(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    r[a] = t(r[a] || 0, n[a] || "", a);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const md = (e, t, n) => n === 0 ? e : e / 100;
function Ua(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class ot {
  constructor(t) {
    I(this, "isValid", !0), I(this, "r", 0), I(this, "g", 0), I(this, "b", 0), I(this, "a", 1), I(this, "_h", void 0), I(this, "_s", void 0), I(this, "_l", void 0), I(this, "_v", void 0), I(this, "_max", void 0), I(this, "_min", void 0), I(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let a = function(o) {
        return r.startsWith(o);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : a("rgb") ? this.fromRgbString(r) : a("hsl") ? this.fromHslString(r) : (a("hsv") || a("hsb")) && this.fromHsvString(r);
    } else if (t instanceof ot)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Ua(t.r), this.g = Ua(t.g), this.b = Ua(t.b), this.a = typeof t.a == "number" ? Ua(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(o) {
      const i = o / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), a = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * a;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Et(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let a = this.getLightness() - t / 100;
    return a < 0 && (a = 0), this._c({
      h: n,
      s: r,
      l: a,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let a = this.getLightness() + t / 100;
    return a > 1 && (a = 1), this._c({
      h: n,
      s: r,
      l: a,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), a = n / 100, o = (s) => (r[s] - this[s]) * a + this[s], i = {
      r: Et(o("r")),
      g: Et(o("g")),
      b: Et(o("b")),
      a: Et(o("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), a = (o) => Et((this[o] * this.a + n[o] * n.a * (1 - this.a)) / r);
    return this._c({
      r: a("r"),
      g: a("g"),
      b: a("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const a = (this.b || 0).toString(16);
    if (t += a.length === 2 ? a : "0" + a, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const o = Et(this.a * 255).toString(16);
      t += o.length === 2 ? o : "0" + o;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = Et(this.getSaturation() * 100), r = Et(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const a = this.clone();
    return a[t] = Ua(n, r), a;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(a, o) {
      return parseInt(n[a] + n[o || a], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof a == "number" ? a : 1, n <= 0) {
      const f = Et(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let o = 0, i = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (o = c, i = u) : l >= 1 && l < 2 ? (o = u, i = c) : l >= 2 && l < 3 ? (i = c, s = u) : l >= 3 && l < 4 ? (i = u, s = c) : l >= 4 && l < 5 ? (o = u, s = c) : l >= 5 && l < 6 && (o = c, s = u);
    const d = r - c / 2;
    this.r = Et((o + d) * 255), this.g = Et((i + d) * 255), this.b = Et((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof a == "number" ? a : 1;
    const o = Et(r * 255);
    if (this.r = o, this.g = o, this.b = o, n <= 0)
      return;
    const i = t / 60, s = Math.floor(i), l = i - s, c = Et(r * (1 - n) * 255), u = Et(r * (1 - n * l) * 255), d = Et(r * (1 - n * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = d;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = d, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = Ys(t, md);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Ys(t, md);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Ys(t, (r, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? Et(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var Qo = 2, gd = 0.16, J1 = 0.05, Q1 = 0.05, ex = 0.15, Om = 5, Rm = 4, tx = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function vd(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Qo * t : Math.round(e.h) + Qo * t : r = n ? Math.round(e.h) + Qo * t : Math.round(e.h) - Qo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function pd(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - gd * t : t === Rm ? r = e.s + gd : r = e.s + J1 * t, r > 1 && (r = 1), n && t === Om && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function yd(e, t, n) {
  var r;
  return n ? r = e.v + Q1 * t : r = e.v - ex * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function io(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new ot(e), a = r.toHsv(), o = Om; o > 0; o -= 1) {
    var i = new ot({
      h: vd(a, o, !0),
      s: pd(a, o, !0),
      v: yd(a, o, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var s = 1; s <= Rm; s += 1) {
    var l = new ot({
      h: vd(a, s),
      s: pd(a, s),
      v: yd(a, s)
    });
    n.push(l);
  }
  return t.theme === "dark" ? tx.map(function(c) {
    var u = c.index, d = c.amount;
    return new ot(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
  }) : n.map(function(c) {
    return c.toHexString();
  });
}
var qs = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Dl = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Dl.primary = Dl[5];
var Nl = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Nl.primary = Nl[5];
var kl = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
kl.primary = kl[5];
var Ii = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ii.primary = Ii[5];
var Al = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Al.primary = Al[5];
var Fl = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Fl.primary = Fl[5];
var jl = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
jl.primary = jl[5];
var Il = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Il.primary = Il[5];
var Li = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Li.primary = Li[5];
var Ll = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Ll.primary = Ll[5];
var Vl = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Vl.primary = Vl[5];
var zl = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
zl.primary = zl[5];
var Hl = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Hl.primary = Hl[5];
var Gs = {
  red: Dl,
  volcano: Nl,
  orange: kl,
  gold: Ii,
  yellow: Al,
  lime: Fl,
  green: jl,
  cyan: Il,
  blue: Li,
  geekblue: Ll,
  purple: Vl,
  magenta: zl,
  grey: Hl
};
function bd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bd(Object(n), !0).forEach(function(r) {
      I(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function It() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function nx(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var wd = "data-rc-order", Sd = "data-rc-priority", rx = "rc-util-key", Bl = /* @__PURE__ */ new Map();
function Tm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : rx;
}
function ds(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function ax(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function cu(e) {
  return Array.from((Bl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Pm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!It())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = ax(r), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(wd, i), s && o && l.setAttribute(Sd, "".concat(o)), n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce), l.innerHTML = e;
  var c = ds(t), u = c.firstChild;
  if (r) {
    if (s) {
      var d = (t.styles || cu(c)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(wd)))
          return !1;
        var p = Number(f.getAttribute(Sd) || 0);
        return o >= p;
      });
      if (d.length)
        return c.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function Mm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ds(t);
  return (t.styles || cu(n)).find(function(r) {
    return r.getAttribute(Tm(t)) === e;
  });
}
function so(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Mm(e, t);
  if (n) {
    var r = ds(t);
    r.removeChild(n);
  }
}
function ox(e, t) {
  var n = Bl.get(e);
  if (!n || !nx(document, n)) {
    var r = Pm("", t), a = r.parentNode;
    Bl.set(e, a), e.removeChild(r);
  }
}
function Un(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ds(n), a = cu(r), o = V(V({}, n), {}, {
    styles: a
  });
  ox(r, o);
  var i = Mm(t, o);
  if (i) {
    var s, l;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Pm(e, o);
  return u.setAttribute(Tm(o), t), u;
}
function $m(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function ix(e) {
  return $m(e) instanceof ShadowRoot;
}
function Vi(e) {
  return ix(e) ? $m(e) : null;
}
var Wl = {}, uu = [], sx = function(t) {
  uu.push(t);
};
function da(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = uu.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function lx(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = uu.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Dm() {
  Wl = {};
}
function Nm(e, t, n) {
  !t && !Wl[n] && (e(!1, n), Wl[n] = !0);
}
function rt(e, t) {
  Nm(da, e, t);
}
function cx(e, t) {
  Nm(lx, e, t);
}
rt.preMessage = sx;
rt.resetWarned = Dm;
rt.noteOnce = cx;
function ux(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function dx(e, t) {
  rt(e, "[@ant-design/icons] ".concat(t));
}
function xd(e) {
  return xe(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (xe(e.icon) === "object" || typeof e.icon == "function");
}
function Cd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[ux(n)] = r;
    }
    return t;
  }, {});
}
function Ul(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, V(V({
    key: t
  }, Cd(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Ul(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ q.createElement(e.tag, V({
    key: t
  }, Cd(e.attrs)), (e.children || []).map(function(r, a) {
    return Ul(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function km(e) {
  return io(e)[0];
}
function Am(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var fx = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, hx = function(t) {
  var n = en(su), r = n.csp, a = n.prefixCls, o = n.layer, i = fx;
  a && (i = i.replace(/anticon/g, a)), o && (i = "@layer ".concat(o, ` {
`).concat(i, `
}`)), wt(function() {
    var s = t.current, l = Vi(s);
    Un(i, "@ant-design-icons", {
      prepend: !o,
      csp: r,
      attachTo: l
    });
  }, []);
}, mx = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Xa = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function gx(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Xa.primaryColor = t, Xa.secondaryColor = n || km(t), Xa.calculated = !!n;
}
function vx() {
  return V({}, Xa);
}
var Ta = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, l = At(t, mx), c = m.useRef(), u = Xa;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || km(i)
  }), hx(c), dx(xd(n), "icon should be icon definiton, but got ".concat(n)), !xd(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = V(V({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Ul(d.icon, "svg-".concat(d.name), V(V({
    className: r,
    onClick: a,
    style: o,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
Ta.displayName = "IconReact";
Ta.getTwoToneColors = vx;
Ta.setTwoToneColors = gx;
function Fm(e) {
  var t = Am(e), n = Q(t, 2), r = n[0], a = n[1];
  return Ta.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function px() {
  var e = Ta.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var yx = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Fm(Li.primary);
var vt = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = At(e, yx), u = m.useContext(su), d = u.prefixCls, f = d === void 0 ? "anticon" : d, p = u.rootClassName, b = he(p, f, I(I({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!a || r.name === "loading"), n), y = i;
  y === void 0 && s && (y = -1);
  var h = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, g = Am(l), v = Q(g, 2), w = v[0], x = v[1];
  return /* @__PURE__ */ m.createElement("span", De({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: y,
    onClick: s,
    className: b
  }), /* @__PURE__ */ m.createElement(Ta, {
    icon: r,
    primaryColor: w,
    secondaryColor: x,
    style: h
  }));
});
vt.displayName = "AntdIcon";
vt.getTwoToneColor = px;
vt.setTwoToneColor = Fm;
var bx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "arrow-left", theme: "outlined" }, wx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: bx
  }));
}, jm = /* @__PURE__ */ m.forwardRef(wx);
process.env.NODE_ENV !== "production" && (jm.displayName = "ArrowLeftOutlined");
var Sx = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" }, xx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Sx
  }));
}, Im = /* @__PURE__ */ m.forwardRef(xx);
process.env.NODE_ENV !== "production" && (Im.displayName = "BarsOutlined");
var Cx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, Ex = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Cx
  }));
}, Lm = /* @__PURE__ */ m.forwardRef(Ex);
process.env.NODE_ENV !== "production" && (Lm.displayName = "CheckOutlined");
var _x = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Ox = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: _x
  }));
}, Vm = /* @__PURE__ */ m.forwardRef(Ox);
process.env.NODE_ENV !== "production" && (Vm.displayName = "CloseCircleFilled");
var Rx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, Tx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Rx
  }));
}, zm = /* @__PURE__ */ m.forwardRef(Tx);
process.env.NODE_ENV !== "production" && (zm.displayName = "CopyOutlined");
var Px = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, Mx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Px
  }));
}, lo = /* @__PURE__ */ m.forwardRef(Mx);
process.env.NODE_ENV !== "production" && (lo.displayName = "DeleteOutlined");
var $x = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" }, Dx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: $x
  }));
}, Yl = /* @__PURE__ */ m.forwardRef(Dx);
process.env.NODE_ENV !== "production" && (Yl.displayName = "DownloadOutlined");
var Nx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, kx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Nx
  }));
}, fa = /* @__PURE__ */ m.forwardRef(kx);
process.env.NODE_ENV !== "production" && (fa.displayName = "EditOutlined");
var Ax = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, Fx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Ax
  }));
}, Hm = /* @__PURE__ */ m.forwardRef(Fx);
process.env.NODE_ENV !== "production" && (Hm.displayName = "EnterOutlined");
var jx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" }, Ix = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: jx
  }));
}, ql = /* @__PURE__ */ m.forwardRef(Ix);
process.env.NODE_ENV !== "production" && (ql.displayName = "LeftOutlined");
var Lx = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Vx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Lx
  }));
}, Bm = /* @__PURE__ */ m.forwardRef(Vx);
process.env.NODE_ENV !== "production" && (Bm.displayName = "LoadingOutlined");
var zx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, name: "logout", theme: "outlined" }, Hx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: zx
  }));
}, Wm = /* @__PURE__ */ m.forwardRef(Hx);
process.env.NODE_ENV !== "production" && (Wm.displayName = "LogoutOutlined");
var Bx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, name: "menu-fold", theme: "outlined" }, Wx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Bx
  }));
}, Um = /* @__PURE__ */ m.forwardRef(Wx);
process.env.NODE_ENV !== "production" && (Um.displayName = "MenuFoldOutlined");
var Ux = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, name: "menu-unfold", theme: "outlined" }, Yx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Ux
  }));
}, Ym = /* @__PURE__ */ m.forwardRef(Yx);
process.env.NODE_ENV !== "production" && (Ym.displayName = "MenuUnfoldOutlined");
var qx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, Gx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: qx
  }));
}, qm = /* @__PURE__ */ m.forwardRef(Gx);
process.env.NODE_ENV !== "production" && (qm.displayName = "PlusOutlined");
var Kx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, Xx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Kx
  }));
}, Mr = /* @__PURE__ */ m.forwardRef(Xx);
process.env.NODE_ENV !== "production" && (Mr.displayName = "RightOutlined");
var Zx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, name: "user", theme: "outlined" }, Jx = function(t, n) {
  return /* @__PURE__ */ m.createElement(vt, De({}, t, {
    ref: n,
    icon: Zx
  }));
}, Gm = /* @__PURE__ */ m.forwardRef(Jx);
process.env.NODE_ENV !== "production" && (Gm.displayName = "UserOutlined");
var ei = { exports: {} }, He = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ed;
function Qx() {
  if (Ed) return He;
  Ed = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var g = h.$$typeof;
      switch (g) {
        case e:
          switch (h = h.type, h) {
            case n:
            case a:
            case r:
            case c:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case i:
                case l:
                case f:
                case d:
                case o:
                  return h;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return He.ContextConsumer = i, He.ContextProvider = o, He.Element = e, He.ForwardRef = l, He.Fragment = n, He.Lazy = f, He.Memo = d, He.Portal = t, He.Profiler = a, He.StrictMode = r, He.Suspense = c, He.SuspenseList = u, He.isAsyncMode = function() {
    return !1;
  }, He.isConcurrentMode = function() {
    return !1;
  }, He.isContextConsumer = function(h) {
    return y(h) === i;
  }, He.isContextProvider = function(h) {
    return y(h) === o;
  }, He.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, He.isForwardRef = function(h) {
    return y(h) === l;
  }, He.isFragment = function(h) {
    return y(h) === n;
  }, He.isLazy = function(h) {
    return y(h) === f;
  }, He.isMemo = function(h) {
    return y(h) === d;
  }, He.isPortal = function(h) {
    return y(h) === t;
  }, He.isProfiler = function(h) {
    return y(h) === a;
  }, He.isStrictMode = function(h) {
    return y(h) === r;
  }, He.isSuspense = function(h) {
    return y(h) === c;
  }, He.isSuspenseList = function(h) {
    return y(h) === u;
  }, He.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === a || h === r || h === c || h === u || h === p || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === o || h.$$typeof === i || h.$$typeof === l || h.$$typeof === b || h.getModuleId !== void 0);
  }, He.typeOf = y, He;
}
var Be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function eC() {
  return _d || (_d = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), b = !1, y = !1, h = !1, g = !1, v = !1, w;
    w = Symbol.for("react.module.reference");
    function x(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === n || G === a || v || G === r || G === c || G === u || g || G === p || b || y || h || typeof G == "object" && G !== null && (G.$$typeof === f || G.$$typeof === d || G.$$typeof === o || G.$$typeof === i || G.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      G.$$typeof === w || G.getModuleId !== void 0));
    }
    function C(G) {
      if (typeof G == "object" && G !== null) {
        var ue = G.$$typeof;
        switch (ue) {
          case e:
            var Y = G.type;
            switch (Y) {
              case n:
              case a:
              case r:
              case c:
              case u:
                return Y;
              default:
                var le = Y && Y.$$typeof;
                switch (le) {
                  case s:
                  case i:
                  case l:
                  case f:
                  case d:
                  case o:
                    return le;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var S = i, E = o, T = e, O = l, _ = n, M = f, k = d, j = t, P = a, D = r, R = c, F = u, N = !1, H = !1;
    function B(G) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(G) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(G) {
      return C(G) === i;
    }
    function W(G) {
      return C(G) === o;
    }
    function U(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function te(G) {
      return C(G) === l;
    }
    function X(G) {
      return C(G) === n;
    }
    function J(G) {
      return C(G) === f;
    }
    function ee(G) {
      return C(G) === d;
    }
    function ae(G) {
      return C(G) === t;
    }
    function se(G) {
      return C(G) === a;
    }
    function fe(G) {
      return C(G) === r;
    }
    function oe(G) {
      return C(G) === c;
    }
    function ye(G) {
      return C(G) === u;
    }
    Be.ContextConsumer = S, Be.ContextProvider = E, Be.Element = T, Be.ForwardRef = O, Be.Fragment = _, Be.Lazy = M, Be.Memo = k, Be.Portal = j, Be.Profiler = P, Be.StrictMode = D, Be.Suspense = R, Be.SuspenseList = F, Be.isAsyncMode = B, Be.isConcurrentMode = $, Be.isContextConsumer = L, Be.isContextProvider = W, Be.isElement = U, Be.isForwardRef = te, Be.isFragment = X, Be.isLazy = J, Be.isMemo = ee, Be.isPortal = ae, Be.isProfiler = se, Be.isStrictMode = fe, Be.isSuspense = oe, Be.isSuspenseList = ye, Be.isValidElementType = x, Be.typeOf = C;
  })()), Be;
}
var Od;
function tC() {
  return Od || (Od = 1, process.env.NODE_ENV === "production" ? ei.exports = Qx() : ei.exports = eC()), ei.exports;
}
var Ks = tC();
function du(e, t, n) {
  var r = m.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var nC = Symbol.for("react.element"), rC = Symbol.for("react.transitional.element"), aC = Symbol.for("react.fragment");
function Km(e) {
  return (
    // Base object type
    e && xe(e) === "object" && // React Element type
    (e.$$typeof === nC || e.$$typeof === rC) && // React Fragment type
    e.type === aC
  );
}
var oC = Number(Qv.split(".")[0]), fu = function(t, n) {
  typeof t == "function" ? t(n) : xe(t) === "object" && t && "current" in t && (t.current = n);
}, To = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      fu(i, o);
    });
  };
}, hu = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return du(function() {
    return To.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, s) {
      return i !== o[s];
    });
  });
}, fs = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Xm(t) && oC >= 19)
    return !0;
  var a = Ks.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== Ks.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Ks.ForwardRef);
};
function Xm(e) {
  return /* @__PURE__ */ qf(e) && !Km(e);
}
var mu = function(t) {
  if (t && Xm(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
const iC = (e) => {
  const [t, n] = q.useState({
    pageSize: e.pageSize || 10,
    current: 1,
    total: 0
  }), { Text: r } = na, a = us(), {
    token: { colorPrimary: o }
  } = Xf.useToken(), { getRequest: i, fetchRequest: s } = Pr(), l = i(e.requestKey), c = l.isPaginated, u = e.data, d = l.from - 1;
  if (t.total = l.total, t.current = l.currentPage, t.pageSize = l.pageSize, l.isLoading)
    return /* @__PURE__ */ z.jsx(cp, { tip: "Loading", size: "large", children: /* @__PURE__ */ z.jsx(
      "div",
      {
        style: {
          padding: 50,
          background: "rgba(0, 0, 0, 0.05)",
          borderRadius: 4,
          marginTop: 100
        }
      }
    ) });
  const f = (g, v) => /* @__PURE__ */ z.jsxs(eo, { children: [
    v.includes("column-action-edit") && /* @__PURE__ */ z.jsx(Rn, { placement: "top", title: "Edit", children: /* @__PURE__ */ z.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        icon: /* @__PURE__ */ z.jsx(fa, {}),
        onClick: () => {
          e.onRowEditClick && e.onRowEditClick(g);
        }
      }
    ) }),
    v.includes("column-action-custom") && /* @__PURE__ */ z.jsx(
      Rn,
      {
        placement: "top",
        title: e.customActionTooltip,
        children: /* @__PURE__ */ z.jsx(
          lt,
          {
            type: "link",
            shape: "circle",
            icon: e.customActionIcon,
            onClick: () => {
              e.onRowCustomClick && e.onRowCustomClick(g);
            }
          }
        )
      }
    ),
    v.includes("column-action-delete") && /* @__PURE__ */ z.jsx(Rn, { placement: "top", title: "Delete", children: /* @__PURE__ */ z.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        icon: /* @__PURE__ */ z.jsx(lo, {}),
        danger: !0,
        onClick: () => {
          e.onRowDeleteClick && e.onRowDeleteClick(g);
        }
      }
    ) }),
    v.includes("column-action-click") && /* @__PURE__ */ z.jsx(Rn, { placement: "top", title: "View", children: /* @__PURE__ */ z.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        icon: /* @__PURE__ */ z.jsx(Mr, {}),
        style: { color: "#000" },
        onClick: () => {
          e.onRowClick && e.onRowClick(g);
        }
      }
    ) })
  ] }), p = (g, v, w) => {
    let x = "", C = !1;
    if (typeof v != "string") {
      if (x = v(g), typeof x == "string" && x.startsWith("column-action-"))
        return f(g, x);
    } else {
      if (v.endsWith("-center") && (v = v.replace("-center", ""), C = !0), v.startsWith("column-action-"))
        return f(g, v);
      if (v.includes(".") && v.includes("list-first")) {
        const S = v.split(".");
        if (S.length == 3) {
          const E = g[S[0]];
          E && E.length != 0 && (x = E[0][S[2]]);
        }
      } else if (v.includes(".") && v.includes("join")) {
        const S = v.split(".");
        if (S.length == 3) {
          const E = g[S[0]];
          if (E && E.length != 0) {
            const T = S[2], O = Array();
            E.map((_) => {
              O.push(_[T]);
            }), x = O.join(", ");
          }
        }
      } else if (v.includes(".") && v.includes("datetime")) {
        const S = v.split(".");
        if (S.length == 2) {
          const E = g[S[0]];
          E && E.length != 0 && (x = v.endsWith("iso") ? Sw(E) : v.endsWith("isomilli") ? Cw(E) : bw(E));
        }
      } else if (v.includes(".") && v.includes("date")) {
        const S = v.split(".");
        if (S.length == 2) {
          const E = g[S[0]];
          E && E.length != 0 && (x = v.endsWith("iso") ? xw(E) : ww(E));
        }
      } else if (v.includes(".") && v.includes("decimal")) {
        const S = v.split(".");
        if (S.length == 2) {
          const E = g[S[0]], T = S[1].replace("decimal", "");
          x = Ow(
            E,
            T || 6
          );
        }
      } else if (v.includes(".") && v.includes("number")) {
        const S = v.split(".");
        if (S.length == 2) {
          const E = g[S[0]];
          x = Wh(E);
        }
      } else if (v.includes(".")) {
        const S = v.split(".");
        S.length == 2 && (x = g[S[0]][S[1]]);
      } else v === "i" ? "index" in g ? x = g.index + 1 : x = (w + 1 + d).toString() : x = g[v];
      (x === null || x === "" || x === void 0) && (x = "-");
    }
    return /* @__PURE__ */ z.jsx(
      r,
      {
        style: {
          display: "block",
          textAlign: a ? "right" : C ? "center" : "left"
        },
        children: x
      }
    );
  }, b = (g) => {
    const v = i(e.requestKey);
    v.pageSize = g.pageSize, v.currentPage = g.current, s(v);
  }, y = (g, v) => {
    const w = [], x = [];
    return e.columns.forEach((C, S) => {
      const E = e.headers[S];
      let T = C;
      if (typeof T == "string" && T.includes("column-action-"))
        T.includes("column-action-edit") && e.onRowEditClick && x.push(
          /* @__PURE__ */ z.jsx(
            lt,
            {
              type: "primary",
              icon: /* @__PURE__ */ z.jsx(fa, {}),
              onClick: () => e.onRowEditClick(g),
              children: "Edit"
            },
            "edit"
          )
        ), T.includes("column-action-custom") && e.onRowCustomClick && x.push(
          /* @__PURE__ */ z.jsx(
            lt,
            {
              icon: e.customActionIcon,
              onClick: () => e.onRowCustomClick(g),
              children: e.customActionTooltip
            },
            "custom"
          )
        ), T.includes("column-action-delete") && e.onRowDeleteClick && x.push(
          /* @__PURE__ */ z.jsx(
            lt,
            {
              danger: !0,
              icon: /* @__PURE__ */ z.jsx(lo, {}),
              onClick: () => e.onRowDeleteClick(g),
              children: "Delete"
            },
            "delete"
          )
        ), T.includes("column-action-click") && e.onRowClick && x.push(
          /* @__PURE__ */ z.jsx(
            lt,
            {
              icon: /* @__PURE__ */ z.jsx(Mr, {}),
              onClick: () => e.onRowClick(g),
              children: "View"
            },
            "view"
          )
        );
      else {
        const O = p(g, C, v);
        w.push({ label: E, value: O });
      }
    }), /* @__PURE__ */ z.jsxs(
      Tc,
      {
        style: {
          marginBottom: 12,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        },
        children: [
          w.map((C, S) => /* @__PURE__ */ z.jsxs(Pi, { style: { marginBottom: 8 }, children: [
            /* @__PURE__ */ z.jsx(ra, { span: 10, children: /* @__PURE__ */ z.jsxs(r, { strong: !0, style: { color: o }, children: [
              C.label,
              ":"
            ] }) }),
            /* @__PURE__ */ z.jsx(ra, { span: 14, children: C.value })
          ] }, S)),
          x.length > 0 && /* @__PURE__ */ z.jsx(
            Pi,
            {
              style: {
                marginTop: 12,
                paddingTop: 12,
                borderTop: "1px solid #f0f0f0"
              },
              children: /* @__PURE__ */ z.jsx(ra, { span: 24, children: /* @__PURE__ */ z.jsx(eo, { wrap: !0, children: x }) })
            }
          )
        ]
      },
      g.id || v
    );
  }, h = [];
  return e.headers && e.headers.forEach((g, v) => {
    const w = e.columns[v];
    let x = w;
    typeof x != "string" && (x = g), h.push({
      title: /* @__PURE__ */ z.jsx(
        r,
        {
          style: {
            display: "block",
            textAlign: "center",
            color: "#fff",
            fontWeight: 600
          },
          children: g
        }
      ),
      dataIndex: x,
      key: x,
      align: "center",
      render: (C, S, E) => /* @__PURE__ */ z.jsx(z.Fragment, { children: p(S, w, E) })
    });
  }), a ? /* @__PURE__ */ z.jsxs("div", { style: { marginTop: e.marginTop || 10 }, children: [
    u && u.map((g, v) => y(g, v)),
    c && /* @__PURE__ */ z.jsx("div", { style: { textAlign: "center", marginTop: 16 }, children: /* @__PURE__ */ z.jsx(
      up,
      {
        current: t.current,
        pageSize: t.pageSize,
        total: t.total,
        onChange: (g, v) => {
          const w = {
            ...t,
            current: g,
            pageSize: v
          };
          n(w), b(w);
        },
        showSizeChanger: !1,
        showTotal: (g, v) => `${v[0]}-${v[1]} of ${g} items`
      }
    ) })
  ] }) : /* @__PURE__ */ z.jsx(
    Zf,
    {
      columns: h,
      rowKey: (g) => g.id,
      dataSource: u,
      pagination: c ? {
        ...t,
        showTotal: (g, v) => `${v[0]}-${v[1]} of ${g} items`
      } : !1,
      scroll: { y: `calc(100vh - ${e.headerHeight || 340}px)` },
      style: {
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(82, 196, 26, 0.08)",
        border: "1px solid rgba(82, 196, 26, 0.06)",
        marginTop: e.marginTop || 10
      },
      className: "custom-table-header",
      rowClassName: (g, v) => v % 2 === 0 ? "table-row-light" : "table-row-dark",
      components: {
        header: {
          row: (g) => /* @__PURE__ */ z.jsx(
            "tr",
            {
              ...g,
              style: {
                background: o,
                borderRadius: "8px 8px 0 0",
                padding: "12px 16px"
              }
            }
          ),
          cell: (g) => /* @__PURE__ */ z.jsx(
            "th",
            {
              ...g,
              style: {
                background: o,
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "12px 16px",
                color: "#fff",
                fontWeight: 600
              }
            }
          )
        }
      },
      onChange: (g) => {
        n(g), b(g);
      }
    }
  );
};
function hs(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const sC = (e, t) => {
  typeof (e == null ? void 0 : e.addEventListener) < "u" ? e.addEventListener("change", t) : typeof (e == null ? void 0 : e.addListener) < "u" && e.addListener(t);
}, lC = (e, t) => {
  typeof (e == null ? void 0 : e.removeEventListener) < "u" ? e.removeEventListener("change", t) : typeof (e == null ? void 0 : e.removeListener) < "u" && e.removeListener(t);
};
function cC(e) {
  if (Array.isArray(e)) return $l(e);
}
function Zm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function uC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function me(e) {
  return cC(e) || Zm(e) || lu(e) || uC();
}
function co(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Gl(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = r.has(o);
    if (rt(!l, "Warning: There may be circular references"), l)
      return !1;
    if (o === i)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(o);
    var c = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var u = 0; u < o.length; u++)
        if (!a(o[u], i[u], c))
          return !1;
      return !0;
    }
    if (o && i && xe(o) === "object" && xe(i) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(f) {
        return a(o[f], i[f], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
function _t(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Rd(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _m(r.key), r);
  }
}
function Ot(e, t, n) {
  return t && Rd(e.prototype, t), n && Rd(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var dC = "%";
function Kl(e) {
  return e.join(dC);
}
var fC = /* @__PURE__ */ (function() {
  function e(t) {
    _t(this, e), I(this, "instanceId", void 0), I(this, "cache", /* @__PURE__ */ new Map()), I(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Ot(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Kl(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Kl(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
})(), ha = "data-token-hash", gn = "data-css-hash", hC = "data-cache-path", ir = "__cssinjs_instance__";
function mC() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(gn, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[ir] = a[ir] || e, a[ir] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(gn, "]"))).forEach(function(a) {
      var o = a.getAttribute(gn);
      if (r[o]) {
        if (a[ir] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new fC(e);
}
var Po = /* @__PURE__ */ m.createContext({
  hashPriority: "low",
  cache: mC(),
  defaultCache: !0
});
function Re(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uo(e, t) {
  return uo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, uo(e, t);
}
function ur(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && uo(e, t);
}
function fo(e) {
  return fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, fo(e);
}
function gu() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gu = function() {
    return !!e;
  })();
}
function gC(e, t) {
  if (t && (xe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Re(e);
}
function dr(e) {
  var t = gu();
  return function() {
    var n, r = fo(e);
    if (t) {
      var a = fo(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return gC(this, n);
  };
}
function vC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var vu = /* @__PURE__ */ (function() {
  function e() {
    _t(this, e), I(this, "cache", void 0), I(this, "keys", void 0), I(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ot(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var l;
          i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (r = i) !== null && r !== void 0 && r.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var a = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(c, u) {
            var d = Q(c, 2), f = d[1];
            return a.internalGet(u)[1] < f ? [u, a.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = Q(o, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var l = this.cache;
      n.forEach(function(c, u) {
        if (u === n.length - 1)
          l.set(c, {
            value: [r, a.cacheCallTimes++]
          });
        else {
          var d = l.get(c);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var a = n.get(r[0]);
      if (r.length === 1) {
        var o;
        return a.map ? n.set(r[0], {
          map: a.map
        }) : n.delete(r[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !vC(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
I(vu, "MAX_CACHE_SIZE", 20);
I(vu, "MAX_CACHE_OFFSET", 5);
var Td = 0, Jm = /* @__PURE__ */ (function() {
  function e(t) {
    _t(this, e), I(this, "derivatives", void 0), I(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Td, t.length === 0 && da(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Td += 1;
  }
  return Ot(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
})(), Xs = new vu();
function Xl(e) {
  var t = Array.isArray(e) ? e : [e];
  return Xs.has(t) || Xs.set(t, new Jm(t)), Xs.get(t);
}
var pC = /* @__PURE__ */ new WeakMap(), Zs = {};
function yC(e, t) {
  for (var n = pC, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(Zs) || n.set(Zs, e()), n.get(Zs);
}
var Pd = /* @__PURE__ */ new WeakMap();
function Za(e) {
  var t = Pd.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Jm ? t += r.id : r && xe(r) === "object" ? t += Za(r) : t += r;
  }), t = co(t), Pd.set(e, t)), t;
}
function Md(e, t) {
  return co("".concat(t, "_").concat(Za(e)));
}
var Zl = It();
function ke(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function zi(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = V(V({}, r), {}, I(I({}, ha, t), gn, n)), i = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Ci = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, bC = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = Q(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Qm = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, c = Q(i, 2), u = c[0], d = c[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      o[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (l = r.ignore) !== null && l !== void 0 && l[u])) {
      var f, p = Ci(u, r == null ? void 0 : r.prefix);
      a[p] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), o[u] = "var(".concat(p, ")");
    }
  }), [o, bC(a, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, $d = process.env.NODE_ENV !== "test" && It() ? m.useLayoutEffect : m.useEffect, at = function(t, n) {
  var r = m.useRef(!0);
  $d(function() {
    return t(r.current);
  }, n), $d(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Dd = function(t, n) {
  at(function(r) {
    if (!r)
      return t();
  }, n);
}, wC = V({}, m), Nd = wC.useInsertionEffect, SC = function(t, n, r) {
  m.useMemo(t, r), at(function() {
    return n(!0);
  }, r);
}, xC = Nd ? function(e, t, n) {
  return Nd(function() {
    return e(), t();
  }, n);
} : SC, CC = V({}, m), EC = CC.useInsertionEffect, _C = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      process.env.NODE_ENV !== "production" && da(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(o);
  }
  return m.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, OC = function() {
  return function(t) {
    t();
  };
}, RC = typeof EC < "u" ? _C : OC;
function TC() {
  return !1;
}
var Jl = !1;
function PC() {
  return Jl;
}
const MC = process.env.NODE_ENV === "production" ? TC : PC;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (ti && typeof ti.webpackHotUpdate == "function") {
    var $C = ti.webpackHotUpdate;
    ti.webpackHotUpdate = function() {
      return Jl = !0, setTimeout(function() {
        Jl = !1;
      }, 0), $C.apply(void 0, arguments);
    };
  }
}
function pu(e, t, n, r, a) {
  var o = m.useContext(Po), i = o.cache, s = [e].concat(me(t)), l = Kl(s), c = RC([l]), u = MC(), d = function(y) {
    i.opUpdate(l, function(h) {
      var g = h || [void 0, void 0], v = Q(g, 2), w = v[0], x = w === void 0 ? 0 : w, C = v[1], S = C;
      process.env.NODE_ENV !== "production" && C && u && (r == null || r(S, u), S = null);
      var E = S || n(), T = [x, E];
      return y ? y(T) : T;
    });
  };
  m.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var f = i.opGet(l);
  process.env.NODE_ENV !== "production" && !f && (d(), f = i.opGet(l));
  var p = f[1];
  return xC(function() {
    a == null || a(p);
  }, function(b) {
    return d(function(y) {
      var h = Q(y, 2), g = h[0], v = h[1];
      return b && g === 0 && (a == null || a(p)), [g + 1, v];
    }), function() {
      i.opUpdate(l, function(y) {
        var h = y || [], g = Q(h, 2), v = g[0], w = v === void 0 ? 0 : v, x = g[1], C = w - 1;
        return C === 0 ? (c(function() {
          (b || !i.opGet(l)) && (r == null || r(x, !1));
        }), null) : [w - 1, x];
      });
    };
  }, [l]), p;
}
var DC = {}, NC = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", br = /* @__PURE__ */ new Map();
function kC(e) {
  br.set(e, (br.get(e) || 0) + 1);
}
function AC(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(ha, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[ir] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var FC = 0;
function jC(e, t) {
  br.set(e, (br.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  br.forEach(function(r, a) {
    r <= 0 && n.add(a);
  }), br.size - n.size > FC && n.forEach(function(r) {
    AC(r, t), br.delete(r);
  });
}
var IC = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = V(V({}, o), n);
  return a && (i = a(i)), i;
}, eg = "token";
function LC(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = en(Po), a = r.cache.instanceId, o = r.container, i = n.salt, s = i === void 0 ? "" : i, l = n.override, c = l === void 0 ? DC : l, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, p = yC(function() {
    return Object.assign.apply(Object, [{}].concat(me(t)));
  }, t), b = Za(p), y = Za(c), h = f ? Za(f) : "", g = pu(eg, [s, e.id, b, y, h], function() {
    var v, w = d ? d(p, c, e) : IC(p, c, e, u), x = V({}, w), C = "";
    if (f) {
      var S = Qm(w, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = Q(S, 2);
      w = E[0], C = E[1];
    }
    var T = Md(w, s);
    w._tokenKey = T, x._tokenKey = Md(x, s);
    var O = (v = f == null ? void 0 : f.key) !== null && v !== void 0 ? v : T;
    w._themeKey = O, kC(O);
    var _ = "".concat(NC, "-").concat(co(T));
    return w._hashId = _, [w, _, x, C, (f == null ? void 0 : f.key) || ""];
  }, function(v) {
    jC(v[0]._themeKey, a);
  }, function(v) {
    var w = Q(v, 4), x = w[0], C = w[3];
    if (f && C) {
      var S = Un(C, co("css-variables-".concat(x._themeKey)), {
        mark: gn,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      S[ir] = a, S.setAttribute(ha, x._themeKey);
    }
  });
  return g;
}
var VC = function(t, n, r) {
  var a = Q(t, 5), o = a[2], i = a[3], s = a[4], l = r || {}, c = l.plain;
  if (!i)
    return null;
  var u = o._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, p = zi(i, s, u, f, c);
  return [d, u, p];
}, zC = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, tg = "comm", ng = "rule", rg = "decl", HC = "@import", BC = "@namespace", WC = "@keyframes", UC = "@layer", YC = Math.abs, Ja = String.fromCharCode;
function ag(e) {
  return e.trim();
}
function Ql(e, t, n) {
  return e.replace(t, n);
}
function sa(e, t) {
  return e.charCodeAt(t) | 0;
}
function ma(e, t, n) {
  return e.slice(t, n);
}
function _n(e) {
  return e.length;
}
function qC(e) {
  return e.length;
}
function ni(e, t) {
  return t.push(e), e;
}
var ms = 1, ga = 1, og = 0, tn = 0, gt = 0, Pa = "";
function yu(e, t, n, r, a, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: ms, column: ga, length: i, return: "", siblings: s };
}
function GC() {
  return gt;
}
function KC() {
  return gt = tn > 0 ? sa(Pa, --tn) : 0, ga--, gt === 10 && (ga = 1, ms--), gt;
}
function vn() {
  return gt = tn < og ? sa(Pa, tn++) : 0, ga++, gt === 10 && (ga = 1, ms++), gt;
}
function sr() {
  return sa(Pa, tn);
}
function Ei() {
  return tn;
}
function gs(e, t) {
  return ma(Pa, e, t);
}
function ho(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function XC(e) {
  return ms = ga = 1, og = _n(Pa = e), tn = 0, [];
}
function ZC(e) {
  return Pa = "", e;
}
function Js(e) {
  return ag(gs(tn - 1, ec(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function JC(e) {
  for (; (gt = sr()) && gt < 33; )
    vn();
  return ho(e) > 2 || ho(gt) > 3 ? "" : " ";
}
function QC(e, t) {
  for (; --t && vn() && !(gt < 48 || gt > 102 || gt > 57 && gt < 65 || gt > 70 && gt < 97); )
    ;
  return gs(e, Ei() + (t < 6 && sr() == 32 && vn() == 32));
}
function ec(e) {
  for (; vn(); )
    switch (gt) {
      // ] ) " '
      case e:
        return tn;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ec(gt);
        break;
      // (
      case 40:
        e === 41 && ec(e);
        break;
      // \
      case 92:
        vn();
        break;
    }
  return tn;
}
function eE(e, t) {
  for (; vn() && e + gt !== 57; )
    if (e + gt === 84 && sr() === 47)
      break;
  return "/*" + gs(t, tn - 1) + "*" + Ja(e === 47 ? e : vn());
}
function tE(e) {
  for (; !ho(sr()); )
    vn();
  return gs(e, tn);
}
function nE(e) {
  return ZC(_i("", null, null, null, [""], e = XC(e), 0, [0], e));
}
function _i(e, t, n, r, a, o, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, b = 0, y = 1, h = 1, g = 1, v = 0, w = 0, x = "", C = a, S = o, E = r, T = x; h; )
    switch (b = w, w = vn()) {
      // (
      case 40:
        b != 108 && sa(T, d - 1) == 58 ? (v++, T += "(") : T += Js(w);
        break;
      // )
      case 41:
        v--, T += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        T += Js(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (v > 0) {
          T += Ja(w);
          break;
        }
        T += JC(b);
        break;
      // \
      case 92:
        T += QC(Ei() - 1, 7);
        continue;
      // /
      case 47:
        switch (sr()) {
          case 42:
          case 47:
            ni(rE(eE(vn(), Ei()), t, n, l), l), (ho(b || 1) == 5 || ho(sr() || 1) == 5) && _n(T) && ma(T, -1, void 0) !== " " && (T += " ");
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * y:
        s[c++] = _n(T) * g;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        if (v > 0 && w) {
          T += Ja(w);
          break;
        }
        switch (w) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            g == -1 && (T = Ql(T, /\f/g, "")), p > 0 && (_n(T) - d || y === 0) && ni(p > 32 ? Ad(T + ";", r, n, d - 1, l) : Ad(Ql(T, " ", "") + ";", r, n, d - 2, l), l);
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (ni(E = kd(T, t, n, c, u, a, s, x, C = [], S = [], d, o), o), w === 123)
              if (u === 0)
                _i(T, t, E, E, C, o, d, s, S);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (sa(T, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (sa(T, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? _i(e, E, E, r && ni(kd(e, E, E, 0, 0, a, s, x, a, C = [], d, S), S), a, S, d, s, r ? C : S) : _i(T, E, E, E, [""], S, 0, s, S);
              }
        }
        c = u = p = 0, y = g = 1, x = T = "", d = i;
        break;
      // :
      case 58:
        d = 1 + _n(T), p = b;
      default:
        if (y < 1) {
          if (w == 123)
            --y;
          else if (w == 125 && y++ == 0 && KC() == 125)
            continue;
        }
        switch (T += Ja(w), w * y) {
          // &
          case 38:
            g = u > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            if (v > 0) break;
            s[c++] = (_n(T) - 1) * g, g = 1;
            break;
          // @
          case 64:
            sr() === 45 && (T += Js(vn())), f = sr(), u = d = _n(x = T += tE(Ei())), w++;
            break;
          // -
          case 45:
            b === 45 && _n(T) == 2 && (y = 0);
        }
    }
  return o;
}
function kd(e, t, n, r, a, o, i, s, l, c, u, d) {
  for (var f = a - 1, p = a === 0 ? o : [""], b = qC(p), y = 0, h = 0, g = 0; y < r; ++y)
    for (var v = 0, w = ma(e, f + 1, f = YC(h = i[y])), x = e; v < b; ++v)
      (x = ag(h > 0 ? p[v] + " " + w : Ql(w, /&\f/g, p[v]))) && (l[g++] = x);
  return yu(e, t, n, a === 0 ? ng : s, l, c, u, d);
}
function rE(e, t, n, r) {
  return yu(e, t, n, tg, Ja(GC()), ma(e, 2, -2), 0, r);
}
function Ad(e, t, n, r, a) {
  return yu(e, t, n, rg, ma(e, 0, r), ma(e, r + 1, -1), r, a);
}
function tc(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function aE(e, t, n, r) {
  switch (e.type) {
    case UC:
      if (e.children.length) break;
    case HC:
    case BC:
    case rg:
      return e.return = e.return || e.value;
    case tg:
      return "";
    case WC:
      return e.return = e.value + "{" + tc(e.children, r) + "}";
    case ng:
      if (!_n(e.value = e.props.join(","))) return "";
  }
  return _n(n = tc(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ig(e, t) {
  var n = t.path, r = t.parentSelectors;
  rt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var oE = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && ig("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, iE = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && ig("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Fd = "data-ant-cssinjs-cache-path", sg = "_FILE_STYLE__", _r, lg = !0;
function sE() {
  if (!_r && (_r = {}, It())) {
    var e = document.createElement("div");
    e.className = Fd, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = Q(o, 2), s = i[0], l = i[1];
      _r[s] = l;
    });
    var n = document.querySelector("style[".concat(Fd, "]"));
    if (n) {
      var r;
      lg = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function lE(e) {
  return sE(), !!_r[e];
}
function cE(e) {
  var t = _r[e], n = null;
  if (t && It())
    if (lg)
      n = sg;
    else {
      var r = document.querySelector("style[".concat(gn, '="').concat(_r[e], '"]'));
      r ? n = r.innerHTML : delete _r[e];
    }
  return [n, t];
}
var cg = "_skip_check_", ug = "_multi_value_";
function Oi(e) {
  var t = tc(nE(e), aE);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function uE(e) {
  return xe(e) === "object" && e && (cg in e || ug in e);
}
function jd(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(me(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var dE = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, s = n.hashId, l = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, p = n.linters, b = p === void 0 ? [] : p, y = "", h = {};
  function g(x) {
    var C = x.getName(s);
    if (!h[C]) {
      var S = e(x.style, n, {
        root: !1,
        parentSelectors: i
      }), E = Q(S, 1), T = E[0];
      h[C] = "@keyframes ".concat(x.getName(s)).concat(T);
    }
  }
  function v(x) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return x.forEach(function(S) {
      Array.isArray(S) ? v(S, C) : S && C.push(S);
    }), C;
  }
  var w = v(Array.isArray(t) ? t : [t]);
  return w.forEach(function(x) {
    var C = typeof x == "string" && !a ? {} : x;
    if (typeof C == "string")
      y += "".concat(C, `
`);
    else if (C._keyframe)
      g(C);
    else {
      var S = f.reduce(function(E, T) {
        var O;
        return (T == null || (O = T.visit) === null || O === void 0 ? void 0 : O.call(T, E)) || E;
      }, C);
      Object.keys(S).forEach(function(E) {
        var T = S[E];
        if (xe(T) === "object" && T && (E !== "animationName" || !T._keyframe) && !uE(T)) {
          var O = !1, _ = E.trim(), M = !1;
          (a || o) && s ? _.startsWith("@") ? O = !0 : _ === "&" ? _ = jd("", s, u) : _ = jd(E, s, u) : a && !s && (_ === "&" || _ === "") && (_ = "", M = !0);
          var k = e(T, n, {
            root: M,
            injectHash: O,
            parentSelectors: [].concat(me(i), [_])
          }), j = Q(k, 2), P = j[0], D = j[1];
          h = V(V({}, h), D), y += "".concat(_).concat(P);
        } else {
          let N = function(H, B) {
            process.env.NODE_ENV !== "production" && (xe(T) !== "object" || !(T != null && T[cg])) && [oE, iE].concat(me(b)).forEach(function(W) {
              return W(H, B, {
                path: c,
                hashId: s,
                parentSelectors: i
              });
            });
            var $ = H.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), L = B;
            !zC[H] && typeof L == "number" && L !== 0 && (L = "".concat(L, "px")), H === "animationName" && B !== null && B !== void 0 && B._keyframe && (g(B), L = B.getName(s)), y += "".concat($, ":").concat(L, ";");
          };
          var R, F = (R = T == null ? void 0 : T.value) !== null && R !== void 0 ? R : T;
          xe(T) === "object" && T !== null && T !== void 0 && T[ug] && Array.isArray(F) ? F.forEach(function(H) {
            N(E, H);
          }) : N(E, F);
        }
      });
    }
  }), a ? l && (y && (y = "@layer ".concat(l.name, " {").concat(y, "}")), l.dependencies && (h["@layer ".concat(l.name)] = l.dependencies.map(function(x) {
    return "@layer ".concat(x, ", ").concat(l.name, ";");
  }).join(`
`))) : y = "{".concat(y, "}"), [y, h];
};
function dg(e, t) {
  return co("".concat(e.join("%")).concat(t));
}
function fE() {
  return null;
}
var fg = "style";
function nc(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = m.useContext(Po), d = u.autoClear, f = u.mock, p = u.defaultCache, b = u.hashPriority, y = u.container, h = u.ssrInline, g = u.transformers, v = u.linters, w = u.cache, x = u.layer, C = n._tokenKey, S = [C];
  x && S.push("layer"), S.push.apply(S, me(r));
  var E = Zl;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var T = pu(
    fg,
    S,
    // Create cache if needed
    function() {
      var j = S.join("|");
      if (lE(j)) {
        var P = cE(j), D = Q(P, 2), R = D[0], F = D[1];
        if (R)
          return [R, C, F, {}, s, c];
      }
      var N = t(), H = dE(N, {
        hashId: a,
        hashPriority: b,
        layer: x ? o : void 0,
        path: r.join("-"),
        transformers: g,
        linters: v
      }), B = Q(H, 2), $ = B[0], L = B[1], W = Oi($), U = dg(S, W);
      return [W, C, U, L, s, c];
    },
    // Remove cache if no need
    function(j, P) {
      var D = Q(j, 3), R = D[2];
      (P || d) && Zl && so(R, {
        mark: gn,
        attachTo: y
      });
    },
    // Effect: Inject style here
    function(j) {
      var P = Q(j, 4), D = P[0];
      P[1];
      var R = P[2], F = P[3];
      if (E && D !== sg) {
        var N = {
          mark: gn,
          prepend: x ? !1 : "queue",
          attachTo: y,
          priority: c
        }, H = typeof i == "function" ? i() : i;
        H && (N.csp = {
          nonce: H
        });
        var B = [], $ = [];
        Object.keys(F).forEach(function(W) {
          W.startsWith("@layer") ? B.push(W) : $.push(W);
        }), B.forEach(function(W) {
          Un(Oi(F[W]), "_layer-".concat(W), V(V({}, N), {}, {
            prepend: !0
          }));
        });
        var L = Un(D, R, N);
        L[ir] = w.instanceId, L.setAttribute(ha, C), process.env.NODE_ENV !== "production" && L.setAttribute(hC, S.join("|")), $.forEach(function(W) {
          Un(Oi(F[W]), "_effect-".concat(W), N);
        });
      }
    }
  ), O = Q(T, 3), _ = O[0], M = O[1], k = O[2];
  return function(j) {
    var P;
    return !h || E || !p ? P = /* @__PURE__ */ m.createElement(fE, null) : P = /* @__PURE__ */ m.createElement("style", De({}, I(I({}, ha, M), gn, k), {
      dangerouslySetInnerHTML: {
        __html: _
      }
    })), /* @__PURE__ */ m.createElement(m.Fragment, null, P, j);
  };
}
var hE = function(t, n, r) {
  var a = Q(t, 6), o = a[0], i = a[1], s = a[2], l = a[3], c = a[4], u = a[5], d = r || {}, f = d.plain;
  if (c)
    return null;
  var p = o, b = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return p = zi(o, i, s, b, f), l && Object.keys(l).forEach(function(y) {
    if (!n[y]) {
      n[y] = !0;
      var h = Oi(l[y]), g = zi(h, i, "_effect-".concat(y), b, f);
      y.startsWith("@layer") ? p = g + p : p += g;
    }
  }), [u, s, p];
}, hg = "cssVar", mE = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, u = en(Po), d = u.cache.instanceId, f = u.container, p = s._tokenKey, b = [].concat(me(t.path), [r, c, p]), y = pu(hg, b, function() {
    var h = n(), g = Qm(h, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), v = Q(g, 2), w = v[0], x = v[1], C = dg(b, x);
    return [w, x, C, r];
  }, function(h) {
    var g = Q(h, 3), v = g[2];
    Zl && so(v, {
      mark: gn,
      attachTo: f
    });
  }, function(h) {
    var g = Q(h, 3), v = g[1], w = g[2];
    if (v) {
      var x = Un(v, w, {
        mark: gn,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      x[ir] = d, x.setAttribute(ha, r);
    }
  });
  return y;
}, gE = function(t, n, r) {
  var a = Q(t, 4), o = a[1], i = a[2], s = a[3], l = r || {}, c = l.plain;
  if (!o)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = zi(o, s, i, d, c);
  return [u, i, f];
};
I(I(I({}, fg, hE), eg, VC), hg, gE);
var sn = /* @__PURE__ */ (function() {
  function e(t, n) {
    _t(this, e), I(this, "name", void 0), I(this, "style", void 0), I(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Ot(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function Ur(e) {
  return e.notSplit = !0, e;
}
Ur(["borderTop", "borderBottom"]), Ur(["borderTop"]), Ur(["borderBottom"]), Ur(["borderLeft", "borderRight"]), Ur(["borderLeft"]), Ur(["borderRight"]);
function vE(e) {
  return Cm(e) || Zm(e) || lu(e) || Em();
}
function Tn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function mg(e, t, n, r) {
  if (!t.length)
    return n;
  var a = vE(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = me(e) : s = V({}, e), r && n === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = mg(s[o], i, n, r), s;
}
function fn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Tn(e, t.slice(0, -1)) ? e : mg(e, t, n, r);
}
function pE(e) {
  return xe(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Id(e) {
  return Array.isArray(e) ? [] : {};
}
var yE = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Qr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Id(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var l = new Set(s), c = Tn(a, i), u = Array.isArray(c);
      if (u || pE(c)) {
        if (!l.has(c)) {
          l.add(c);
          var d = Tn(r, i);
          u ? r = fn(r, i, []) : (!d || xe(d) !== "object") && (r = fn(r, i, Id(c))), yE(c).forEach(function(f) {
            o([].concat(me(i), [f]), l);
          });
        }
      } else
        r = fn(r, i, c);
    }
    o([]);
  }), r;
}
function gg() {
}
let jn = null;
function bE() {
  jn = null, Dm();
}
let vg = gg;
process.env.NODE_ENV !== "production" && (vg = (e, t, n) => {
  rt(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && bE();
});
const Mo = vg, pg = /* @__PURE__ */ m.createContext({}), bn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = m.useContext(pg), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = jn;
        jn || (jn = {}), jn[e] = jn[e] || [], jn[e].includes(o || "") || jn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", jn);
      } else
        process.env.NODE_ENV !== "production" && Mo(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = gg, e;
}, wE = /* @__PURE__ */ Gi(void 0);
var SE = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, xE = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, CE = V(V({}, xE), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const yg = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ld = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, CE),
  timePickerLocale: Object.assign({}, yg)
}, Ht = "${label} is not a valid ${type}", va = {
  locale: "en",
  Pagination: SE,
  DatePicker: Ld,
  TimePicker: yg,
  Calendar: Ld,
  global: {
    placeholder: "Please select",
    close: "Close"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Ht,
        method: Ht,
        array: Ht,
        object: Ht,
        number: Ht,
        date: Ht,
        boolean: Ht,
        integer: Ht,
        float: Ht,
        regexp: Ht,
        email: Ht,
        url: Ht,
        hex: Ht
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, va.Modal);
let Ri = [];
const Vd = () => Ri.reduce((e, t) => Object.assign(Object.assign({}, e), t), va.Modal);
function EE(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ri.push(t), Vd(), () => {
      Ri = Ri.filter((n) => n !== t), Vd();
    };
  }
  Object.assign({}, va.Modal);
}
const bu = /* @__PURE__ */ Gi(void 0), _E = (e, t) => {
  const n = m.useContext(bu), r = m.useMemo(() => {
    var o;
    const i = va[e], s = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), a = m.useMemo(() => {
    const o = n == null ? void 0 : n.locale;
    return n != null && n.exist && !o ? va.locale : o;
  }, [n]);
  return [r, a];
}, bg = "internalMark", wg = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = bn("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(r === bg, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  m.useEffect(() => EE(t == null ? void 0 : t.Modal), [t]);
  const a = m.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ m.createElement(bu.Provider, {
    value: a
  }, n);
};
process.env.NODE_ENV !== "production" && (wg.displayName = "LocaleProvider");
const Sg = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, mo = Object.assign(Object.assign({}, Sg), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function OE(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: n
}) {
  const {
    colorSuccess: r,
    colorWarning: a,
    colorError: o,
    colorInfo: i,
    colorPrimary: s,
    colorBgBase: l,
    colorTextBase: c
  } = e, u = t(s), d = t(r), f = t(a), p = t(o), b = t(i), y = n(l, c), h = e.colorLink || e.colorInfo, g = t(h), v = new ot(p[1]).mix(new ot(p[3]), 50).toHexString();
  return Object.assign(Object.assign({}, y), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBgFilledHover: v,
    colorErrorBgActive: p[3],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
    colorWarningBg: f[1],
    colorWarningBgHover: f[2],
    colorWarningBorder: f[3],
    colorWarningBorderHover: f[4],
    colorWarningHover: f[4],
    colorWarning: f[6],
    colorWarningActive: f[7],
    colorWarningTextHover: f[8],
    colorWarningText: f[9],
    colorWarningTextActive: f[10],
    colorInfoBg: b[1],
    colorInfoBgHover: b[2],
    colorInfoBorder: b[3],
    colorInfoBorderHover: b[4],
    colorInfoHover: b[4],
    colorInfo: b[6],
    colorInfoActive: b[7],
    colorInfoTextHover: b[8],
    colorInfoText: b[9],
    colorInfoTextActive: b[10],
    colorLinkHover: g[4],
    colorLink: g[6],
    colorLinkActive: g[7],
    colorBgMask: new ot("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const RE = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function TE(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, RE(r));
}
const PE = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function ME(e) {
  return (e + 8) / e;
}
function $E(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: ME(n)
  }));
}
const DE = (e) => {
  const t = $E(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), a = n[1], o = n[0], i = n[2], s = r[1], l = r[0], c = r[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: c,
    lineHeightSM: l,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(l * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function NE(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Xt = (e, t) => new ot(e).setA(t).toRgbString(), Ya = (e, t) => new ot(e).darken(t).toHexString(), kE = (e) => {
  const t = io(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, AE = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Xt(r, 0.88),
    colorTextSecondary: Xt(r, 0.65),
    colorTextTertiary: Xt(r, 0.45),
    colorTextQuaternary: Xt(r, 0.25),
    colorFill: Xt(r, 0.15),
    colorFillSecondary: Xt(r, 0.06),
    colorFillTertiary: Xt(r, 0.04),
    colorFillQuaternary: Xt(r, 0.02),
    colorBgSolid: Xt(r, 1),
    colorBgSolidHover: Xt(r, 0.75),
    colorBgSolidActive: Xt(r, 0.95),
    colorBgLayout: Ya(n, 4),
    colorBgContainer: Ya(n, 0),
    colorBgElevated: Ya(n, 0),
    colorBgSpotlight: Xt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Ya(n, 15),
    colorBorderSecondary: Ya(n, 6)
  };
};
function FE(e) {
  qs.pink = qs.magenta, Gs.pink = Gs.magenta;
  const t = Object.keys(Sg).map((n) => {
    const r = e[n] === qs[n] ? Gs[n] : io(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), OE(e, {
    generateColorPalettes: kE,
    generateNeutralColorPalettes: AE
  })), DE(e.fontSize)), NE(e)), PE(e)), TE(e));
}
const xg = Xl(FE), rc = {
  token: mo,
  override: {
    override: mo
  },
  hashed: !0
}, Cg = /* @__PURE__ */ q.createContext(rc), ac = "ant", wu = "anticon", jE = ["outlined", "borderless", "filled", "underlined"], IE = (e, t) => t || (e ? `${ac}-${e}` : ac), Yt = /* @__PURE__ */ m.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: IE,
  iconPrefixCls: wu
}), {
  Consumer: nM
} = Yt, zd = {};
function $o(e) {
  const t = m.useContext(Yt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  } = t, o = t[e];
  return Object.assign(Object.assign({
    classNames: zd,
    styles: zd
  }, o), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  });
}
const LE = `-ant-${Date.now()}-${Math.random()}`;
function VE(e, t) {
  const n = {}, r = (i, s) => {
    let l = i.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, a = (i, s) => {
    const l = new ot(i), c = io(l.toRgbString());
    n[`${s}-color`] = r(l), n[`${s}-color-disabled`] = c[1], n[`${s}-color-hover`] = c[4], n[`${s}-color-active`] = c[6], n[`${s}-color-outline`] = l.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = c[0], n[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new ot(t.primaryColor), s = io(i.toRgbString());
    s.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (c) => c.setA(c.a * 0.12));
    const l = new ot(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, (c) => c.setA(c.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(l, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function zE(e, t) {
  const n = VE(e, t);
  It() ? Un(n, `${LE}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Mo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const go = /* @__PURE__ */ m.createContext(!1), HE = ({
  children: e,
  disabled: t
}) => {
  const n = m.useContext(go);
  return /* @__PURE__ */ m.createElement(go.Provider, {
    value: t ?? n
  }, e);
}, pa = /* @__PURE__ */ m.createContext(void 0), BE = ({
  children: e,
  size: t
}) => {
  const n = m.useContext(pa);
  return /* @__PURE__ */ m.createElement(pa.Provider, {
    value: t || n
  }, e);
};
function WE() {
  const e = en(go), t = en(pa);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Eg = /* @__PURE__ */ Ot(function e() {
  _t(this, e);
}), _g = "CALC_UNIT", UE = new RegExp(_g, "g");
function Qs(e) {
  return typeof e == "number" ? "".concat(e).concat(_g) : e;
}
var YE = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r, a) {
    var o;
    _t(this, n), o = t.call(this), I(Re(o), "result", ""), I(Re(o), "unitlessCssVar", void 0), I(Re(o), "lowPriority", void 0);
    var i = xe(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = Qs(r) : i === "string" && (o.result = r), o;
  }
  return Ot(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Qs(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Qs(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(a) {
      return this.lowPriority || a ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(a) {
      var o = this, i = a || {}, s = i.unit, l = !0;
      return typeof s == "boolean" ? l = s : Array.from(this.unitlessCssVar).some(function(c) {
        return o.result.includes(c);
      }) && (l = !1), this.result = this.result.replace(UE, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})(Eg), qE = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r) {
    var a;
    return _t(this, n), a = t.call(this), I(Re(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return Ot(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof n ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof n ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
})(Eg), GE = function(t, n) {
  var r = t === "css" ? YE : qE;
  return function(a) {
    return new r(a, n);
  };
}, Hd = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function jt(e) {
  var t = m.useRef();
  t.current = e;
  var n = m.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function vo(e) {
  var t = m.useRef(!1), n = m.useState(e), r = Q(n, 2), a = r[0], o = r[1];
  m.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, l) {
    l && t.current || o(s);
  }
  return [a, i];
}
function el(e) {
  return e !== void 0;
}
function $r(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, s = vo(function() {
    return el(a) ? a : el(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), l = Q(s, 2), c = l[0], u = l[1], d = a !== void 0 ? a : c, f = i ? i(d) : d, p = jt(o), b = vo([d]), y = Q(b, 2), h = y[0], g = y[1];
  Dd(function() {
    var w = h[0];
    c !== w && p(c, w);
  }, [h]), Dd(function() {
    el(a) || u(a);
  }, [a]);
  var v = jt(function(w, x) {
    u(w, x), g([d], x);
  });
  return [f, v];
}
function Bd(e, t, n, r) {
  var a = V({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(s) {
      var l = Q(s, 2), c = l[0], u = l[1];
      if (process.env.NODE_ENV !== "production" && rt(!(a != null && a[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), a != null && a[c] || a != null && a[u]) {
        var d;
        (d = a[u]) !== null && d !== void 0 || (a[u] = a == null ? void 0 : a[c]);
      }
    });
  }
  var i = V(V({}, n), a);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var Og = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", oc = !0;
function Xn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Og)
    return Object.assign.apply(Object, [{}].concat(t));
  oc = !1;
  var r = {};
  return t.forEach(function(a) {
    if (xe(a) === "object") {
      var o = Object.keys(a);
      o.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return a[i];
          }
        });
      });
    }
  }), oc = !0, r;
}
var Wd = {};
function KE() {
}
var XE = function(t) {
  var n, r = t, a = KE;
  return Og && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, s) {
      if (oc) {
        var l;
        (l = n) === null || l === void 0 || l.add(s);
      }
      return i[s];
    }
  }), a = function(i, s) {
    var l;
    Wd[i] = {
      global: Array.from(n),
      component: V(V({}, (l = Wd[i]) === null || l === void 0 ? void 0 : l.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function Ud(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Xn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function ZE(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "max(".concat(r.map(function(o) {
        return ke(o);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "min(".concat(r.map(function(o) {
        return ke(o);
      }).join(","), ")");
    }
  };
}
var JE = 1e3 * 60 * 10, QE = /* @__PURE__ */ (function() {
  function e() {
    _t(this, e), I(this, "map", /* @__PURE__ */ new Map()), I(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), I(this, "nextID", 0), I(this, "lastAccessBeat", /* @__PURE__ */ new Map()), I(this, "accessBeat", 0);
  }
  return Ot(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var a = this.getCompositeKey(n);
      this.map.set(a, r), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), a = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, a = n.map(function(o) {
        return o && xe(o) === "object" ? "obj_".concat(r.getObjectID(o)) : "".concat(xe(o), "_").concat(o);
      });
      return a.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(a, o) {
          r - a > JE && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), Yd = new QE();
function e_(e, t) {
  return q.useMemo(function() {
    var n = Yd.get(t);
    if (n)
      return n;
    var r = e();
    return Yd.set(t, r), r;
  }, t);
}
var t_ = function() {
  return {};
};
function n_(e) {
  var t = e.useCSP, n = t === void 0 ? t_ : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function l(f, p, b, y) {
    var h = Array.isArray(f) ? f[0] : f;
    function g(T) {
      return "".concat(String(h)).concat(T.slice(0, 1).toUpperCase()).concat(T.slice(1));
    }
    var v = (y == null ? void 0 : y.unitless) || {}, w = typeof s == "function" ? s(f) : {}, x = V(V({}, w), {}, I({}, g("zIndexPopup"), !0));
    Object.keys(v).forEach(function(T) {
      x[g(T)] = v[T];
    });
    var C = V(V({}, y), {}, {
      unitless: x,
      prefixToken: g
    }), S = u(f, p, b, C), E = c(h, b, C);
    return function(T) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T, _ = S(T, O), M = Q(_, 2), k = M[1], j = E(O), P = Q(j, 2), D = P[0], R = P[1];
      return [D, k, R];
    };
  }
  function c(f, p, b) {
    var y = b.unitless, h = b.injectStyle, g = h === void 0 ? !0 : h, v = b.prefixToken, w = b.ignore, x = function(E) {
      var T = E.rootCls, O = E.cssVar, _ = O === void 0 ? {} : O, M = r(), k = M.realToken;
      return mE({
        path: [f],
        prefix: _.prefix,
        key: _.key,
        unitless: y,
        ignore: w,
        token: k,
        scope: T
      }, function() {
        var j = Ud(f, k, p), P = Bd(f, k, j, {
          deprecatedTokens: b == null ? void 0 : b.deprecatedTokens
        });
        return Object.keys(j).forEach(function(D) {
          P[v(D)] = P[D], delete P[D];
        }), P;
      }), null;
    }, C = function(E) {
      var T = r(), O = T.cssVar;
      return [function(_) {
        return g && O ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(x, {
          rootCls: E,
          cssVar: O,
          component: f
        }), _) : _;
      }, O == null ? void 0 : O.key];
    };
    return C;
  }
  function u(f, p, b) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], g = Q(h, 1), v = g[0], w = h.join("-"), x = e.layer || {
      name: "antd"
    };
    return function(C) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, E = r(), T = E.theme, O = E.realToken, _ = E.hashId, M = E.token, k = E.cssVar, j = a(), P = j.rootPrefixCls, D = j.iconPrefixCls, R = n(), F = k ? "css" : "js", N = e_(function() {
        var U = /* @__PURE__ */ new Set();
        return k && Object.keys(y.unitless || {}).forEach(function(te) {
          U.add(Ci(te, k.prefix)), U.add(Ci(te, Hd(v, k.prefix)));
        }), GE(F, U);
      }, [F, v, k == null ? void 0 : k.prefix]), H = ZE(F), B = H.max, $ = H.min, L = {
        theme: T,
        token: M,
        hashId: _,
        nonce: function() {
          return R.nonce;
        },
        clientOnly: y.clientOnly,
        layer: x,
        // antd is always at top of styles
        order: y.order || -999
      };
      typeof o == "function" && nc(V(V({}, L), {}, {
        clientOnly: !1,
        path: ["Shared", P]
      }), function() {
        return o(M, {
          prefix: {
            rootPrefixCls: P,
            iconPrefixCls: D
          },
          csp: R
        });
      });
      var W = nc(V(V({}, L), {}, {
        path: [w, C, D]
      }), function() {
        if (y.injectStyle === !1)
          return [];
        var U = XE(M), te = U.token, X = U.flush, J = Ud(v, O, b), ee = ".".concat(C), ae = Bd(v, O, J, {
          deprecatedTokens: y.deprecatedTokens
        });
        k && J && xe(J) === "object" && Object.keys(J).forEach(function(ye) {
          J[ye] = "var(".concat(Ci(ye, Hd(v, k.prefix)), ")");
        });
        var se = Xn(te, {
          componentCls: ee,
          prefixCls: C,
          iconCls: ".".concat(D),
          antCls: ".".concat(P),
          calc: N,
          // @ts-ignore
          max: B,
          // @ts-ignore
          min: $
        }, k ? J : ae), fe = p(se, {
          hashId: _,
          prefixCls: C,
          rootPrefixCls: P,
          iconPrefixCls: D
        });
        X(v, ae);
        var oe = typeof i == "function" ? i(se, C, S, y.resetFont) : null;
        return [y.resetStyle === !1 ? null : oe, fe];
      });
      return [W, _];
    };
  }
  function d(f, p, b) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(f, p, b, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, y)), g = function(w) {
      var x = w.prefixCls, C = w.rootCls, S = C === void 0 ? x : C;
      return h(x, S), null;
    };
    return process.env.NODE_ENV !== "production" && (g.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), g;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Hi = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], r_ = "5.29.3";
function tl(e) {
  return e >= 0 && e <= 255;
}
function ri(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new ot(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new ot(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - i * (1 - c)) / c), d = Math.round((r - s * (1 - c)) / c), f = Math.round((a - l * (1 - c)) / c);
    if (tl(u) && tl(d) && tl(f))
      return new ot({
        r: u,
        g: d,
        b: f,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new ot({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var a_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Rg(e) {
  const {
    override: t
  } = e, n = a_(e, ["override"]), r = Object.assign({}, t);
  Object.keys(mo).forEach((f) => {
    delete r[f];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, i = 576, s = 768, l = 992, c = 1200, u = 1600;
  return a.motion === !1 && (a.motionDurationFast = "0s", a.motionDurationMid = "0s", a.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: ri(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: ri(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: ri(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 3,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: ri(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ot("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ot("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ot("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var qd = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Tg = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, o_ = {
  motionBase: !0,
  motionUnit: !0
}, i_ = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Pg = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = qd(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = Rg(i), o && Object.entries(o).forEach(([s, l]) => {
    const {
      theme: c
    } = l, u = qd(l, ["theme"]);
    let d = u;
    c && (d = Pg(Object.assign(Object.assign({}, i), u), {
      override: u
    }, c)), i[s] = d;
  }), i;
};
function Ma() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = q.useContext(Cg), o = `${r_}-${t || ""}`, i = n || xg, [s, l, c] = LC(i, [mo, e], {
    salt: o,
    override: r,
    getComputedToken: Pg,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Rg,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: Tg,
      ignore: o_,
      preserve: i_
    }
  });
  return [i, c, t ? l : "", s, a];
}
const Su = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), s_ = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), l_ = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), c_ = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), u_ = (e, t, n, r) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = n ? `.${n}` : a, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return r !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [o]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [a]: i
    })
  };
}, d_ = (e, t) => ({
  outline: `${ke(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), f_ = (e, t) => ({
  "&:focus-visible": d_(e, t)
}), Mg = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, s_()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), $g = (e) => Object.assign(Object.assign({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: e.colorLink,
  textDecoration: e.linkDecoration,
  outline: "none",
  cursor: "pointer",
  transition: `all ${e.motionDurationSlow}`,
  border: 0,
  padding: 0,
  background: "none",
  userSelect: "none"
}, f_(e)), {
  "&:hover": {
    color: e.colorLinkHover,
    textDecoration: e.linkHoverDecoration
  },
  "&:focus": {
    color: e.colorLinkHover,
    textDecoration: e.linkFocusDecoration
  },
  "&:active": {
    color: e.colorLinkActive,
    textDecoration: e.linkHoverDecoration
  }
}), {
  genStyleHooks: kr
} = n_({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = en(Yt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, a] = Ma();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: a
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = en(Yt);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = c_(e);
    return [r, {
      "&": r
    }, Mg((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : wu)];
  },
  getCommonStyle: u_,
  getCompUnitless: () => Tg
});
function h_(e, t) {
  return Hi.reduce((n, r) => {
    const a = e[`${r}1`], o = e[`${r}3`], i = e[`${r}6`], s = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const m_ = (e, t) => {
  const [n, r] = Ma();
  return nc({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => Mg(e));
}, g_ = Object.assign({}, m), {
  useId: Gd
} = g_, v_ = () => "", p_ = typeof Gd > "u" ? v_ : Gd;
function y_(e, t, n) {
  var r, a;
  const o = bn("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, rc), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : rc.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = p_();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || l);
    process.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return du(() => {
    var c, u;
    if (!e)
      return t;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((b) => {
      d[b] = Object.assign(Object.assign({}, d[b]), e.components[b]);
    });
    const f = `css-var-${l.replace(/:/g, "")}`, p = ((c = i.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: d,
      cssVar: p
    });
  }, [i, s], (c, u) => c.some((d, f) => {
    const p = u[f];
    return !Gl(d, p, !0);
  }));
}
function po(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function b_(e) {
  return e && xe(e) === "object" && po(e.nativeElement) ? e.nativeElement : po(e) ? e : null;
}
function Ti(e) {
  var t = b_(e);
  if (t)
    return t;
  if (e instanceof q.Component) {
    var n;
    return (n = ju.findDOMNode) === null || n === void 0 ? void 0 : n.call(ju, e);
  }
  return null;
}
var w_ = ["children"], Dg = /* @__PURE__ */ m.createContext({});
function S_(e) {
  var t = e.children, n = At(e, w_);
  return /* @__PURE__ */ m.createElement(Dg.Provider, {
    value: n
  }, t);
}
var x_ = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n() {
    return _t(this, n), t.apply(this, arguments);
  }
  return Ot(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(m.Component);
function C_(e) {
  var t = m.useReducer(function(s) {
    return s + 1;
  }, 0), n = Q(t, 2), r = n[1], a = m.useRef(e), o = jt(function() {
    return a.current;
  }), i = jt(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, r();
  });
  return [o, i];
}
var rr = "none", ai = "appear", oi = "enter", ii = "leave", Kd = "none", hn = "prepare", ea = "start", ta = "active", xu = "end", Ng = "prepared";
function Xd(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function E_(e, t) {
  var n = {
    animationend: Xd("Animation", "AnimationEnd"),
    transitionend: Xd("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var __ = E_(It(), typeof window < "u" ? window : {}), kg = {};
if (It()) {
  var O_ = document.createElement("div");
  kg = O_.style;
}
var si = {};
function Ag(e) {
  if (si[e])
    return si[e];
  var t = __[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in kg)
        return si[e] = t[o], si[e];
    }
  return "";
}
var Fg = Ag("animationend"), jg = Ag("transitionend"), Ig = !!(Fg && jg), Zd = Fg || "animationend", Jd = jg || "transitionend";
function Qd(e, t) {
  if (!e) return null;
  if (xe(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const R_ = (function(e) {
  var t = Fe();
  function n(a) {
    a && (a.removeEventListener(Jd, e), a.removeEventListener(Zd, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(Jd, e), a.addEventListener(Zd, e), t.current = a);
  }
  return m.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var Lg = It() ? ep : wt, Vg = function(t) {
  return +setTimeout(t, 16);
}, zg = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Vg = function(t) {
  return window.requestAnimationFrame(t);
}, zg = function(t) {
  return window.cancelAnimationFrame(t);
});
var ef = 0, vs = /* @__PURE__ */ new Map();
function Hg(e) {
  vs.delete(e);
}
var ya = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ef += 1;
  var r = ef;
  function a(o) {
    if (o === 0)
      Hg(r), t();
    else {
      var i = Vg(function() {
        a(o - 1);
      });
      vs.set(r, i);
    }
  }
  return a(n), r;
};
ya.cancel = function(e) {
  var t = vs.get(e);
  return Hg(e), zg(t);
};
process.env.NODE_ENV !== "production" && (ya.ids = function() {
  return vs;
});
const T_ = (function() {
  var e = m.useRef(null);
  function t() {
    ya.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = ya(function() {
      a <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, a - 1);
    });
    e.current = o;
  }
  return m.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
});
var P_ = [hn, ea, ta, xu], M_ = [hn, Ng], Bg = !1, $_ = !0;
function Wg(e) {
  return e === ta || e === xu;
}
const D_ = (function(e, t, n) {
  var r = vo(Kd), a = Q(r, 2), o = a[0], i = a[1], s = T_(), l = Q(s, 2), c = l[0], u = l[1];
  function d() {
    i(hn, !0);
  }
  var f = t ? M_ : P_;
  return Lg(function() {
    if (o !== Kd && o !== xu) {
      var p = f.indexOf(o), b = f[p + 1], y = n(o);
      y === Bg ? i(b, !0) : b && c(function(h) {
        function g() {
          h.isCanceled() || i(b, !0);
        }
        y === !0 ? g() : Promise.resolve(y).then(g);
      });
    }
  }, [e, o]), m.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, o];
});
function N_(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, s = i === void 0 ? !0 : i, l = r.motionLeave, c = l === void 0 ? !0 : l, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, p = r.onEnterPrepare, b = r.onLeavePrepare, y = r.onAppearStart, h = r.onEnterStart, g = r.onLeaveStart, v = r.onAppearActive, w = r.onEnterActive, x = r.onLeaveActive, C = r.onAppearEnd, S = r.onEnterEnd, E = r.onLeaveEnd, T = r.onVisibleChanged, O = vo(), _ = Q(O, 2), M = _[0], k = _[1], j = C_(rr), P = Q(j, 2), D = P[0], R = P[1], F = vo(null), N = Q(F, 2), H = N[0], B = N[1], $ = D(), L = Fe(!1), W = Fe(null);
  function U() {
    return n();
  }
  var te = Fe(!1);
  function X() {
    R(rr), B(null, !0);
  }
  var J = jt(function(pe) {
    var _e = D();
    if (_e !== rr) {
      var Ce = U();
      if (!(pe && !pe.deadline && pe.target !== Ce)) {
        var re = te.current, Pe;
        _e === ai && re ? Pe = C == null ? void 0 : C(Ce, pe) : _e === oi && re ? Pe = S == null ? void 0 : S(Ce, pe) : _e === ii && re && (Pe = E == null ? void 0 : E(Ce, pe)), re && Pe !== !1 && X();
      }
    }
  }), ee = R_(J), ae = Q(ee, 1), se = ae[0], fe = function(_e) {
    switch (_e) {
      case ai:
        return I(I(I({}, hn, f), ea, y), ta, v);
      case oi:
        return I(I(I({}, hn, p), ea, h), ta, w);
      case ii:
        return I(I(I({}, hn, b), ea, g), ta, x);
      default:
        return {};
    }
  }, oe = m.useMemo(function() {
    return fe($);
  }, [$]), ye = D_($, !e, function(pe) {
    if (pe === hn) {
      var _e = oe[hn];
      return _e ? _e(U()) : Bg;
    }
    if (Y in oe) {
      var Ce;
      B(((Ce = oe[Y]) === null || Ce === void 0 ? void 0 : Ce.call(oe, U(), null)) || null);
    }
    return Y === ta && $ !== rr && (se(U()), u > 0 && (clearTimeout(W.current), W.current = setTimeout(function() {
      J({
        deadline: !0
      });
    }, u))), Y === Ng && X(), $_;
  }), G = Q(ye, 2), ue = G[0], Y = G[1], le = Wg(Y);
  te.current = le;
  var ve = Fe(null);
  Lg(function() {
    if (!(L.current && ve.current === t)) {
      k(t);
      var pe = L.current;
      L.current = !0;
      var _e;
      !pe && t && s && (_e = ai), pe && t && o && (_e = oi), (pe && !t && c || !pe && d && !t && c) && (_e = ii);
      var Ce = fe(_e);
      _e && (e || Ce[hn]) ? (R(_e), ue()) : R(rr), ve.current = t;
    }
  }, [t]), wt(function() {
    // Cancel appear
    ($ === ai && !s || // Cancel enter
    $ === oi && !o || // Cancel leave
    $ === ii && !c) && R(rr);
  }, [s, o, c]), wt(function() {
    return function() {
      L.current = !1, clearTimeout(W.current);
    };
  }, []);
  var be = m.useRef(!1);
  wt(function() {
    M && (be.current = !0), M !== void 0 && $ === rr && ((be.current || M) && (T == null || T(M)), be.current = !0);
  }, [M, $]);
  var Te = H;
  return oe[hn] && Y === ea && (Te = V({
    transition: "none"
  }, Te)), [$, Y, Te, M ?? t];
}
function k_(e) {
  var t = e;
  xe(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ m.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, l = a.removeOnLeave, c = l === void 0 ? !0 : l, u = a.forceRender, d = a.children, f = a.motionName, p = a.leavedClassName, b = a.eventProps, y = m.useContext(Dg), h = y.motion, g = n(a, h), v = Fe(), w = Fe();
    function x() {
      try {
        return v.current instanceof HTMLElement ? v.current : Ti(w.current);
      } catch {
        return null;
      }
    }
    var C = N_(g, s, x, a), S = Q(C, 4), E = S[0], T = S[1], O = S[2], _ = S[3], M = m.useRef(_);
    _ && (M.current = !0);
    var k = m.useCallback(function(N) {
      v.current = N, fu(o, N);
    }, [o]), j, P = V(V({}, b), {}, {
      visible: s
    });
    if (!d)
      j = null;
    else if (E === rr)
      _ ? j = d(V({}, P), k) : !c && M.current && p ? j = d(V(V({}, P), {}, {
        className: p
      }), k) : u || !c && !p ? j = d(V(V({}, P), {}, {
        style: {
          display: "none"
        }
      }), k) : j = null;
    else {
      var D;
      T === hn ? D = "prepare" : Wg(T) ? D = "active" : T === ea && (D = "start");
      var R = Qd(f, "".concat(E, "-").concat(D));
      j = d(V(V({}, P), {}, {
        className: he(Qd(f, E), I(I({}, R, R && D), f, typeof f == "string")),
        style: O
      }), k);
    }
    if (/* @__PURE__ */ m.isValidElement(j) && fs(j)) {
      var F = mu(j);
      F || (j = /* @__PURE__ */ m.cloneElement(j, {
        ref: k
      }));
    }
    return /* @__PURE__ */ m.createElement(x_, {
      ref: w
    }, j);
  });
  return r.displayName = "CSSMotion", r;
}
const Cu = k_(Ig);
var ic = "add", sc = "keep", lc = "remove", nl = "removed";
function A_(e) {
  var t;
  return e && xe(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, V(V({}, t), {}, {
    key: String(t.key)
  });
}
function cc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(A_);
}
function F_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = cc(e), i = cc(t);
  o.forEach(function(c) {
    for (var u = !1, d = r; d < a; d += 1) {
      var f = i[d];
      if (f.key === c.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(p) {
          return V(V({}, p), {}, {
            status: ic
          });
        })), r = d), n.push(V(V({}, f), {}, {
          status: sc
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(V(V({}, c), {}, {
      status: lc
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(c) {
    return V(V({}, c), {}, {
      status: ic
    });
  })));
  var s = {};
  n.forEach(function(c) {
    var u = c.key;
    s[u] = (s[u] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    n = n.filter(function(u) {
      var d = u.key, f = u.status;
      return d !== c || f !== lc;
    }), n.forEach(function(u) {
      u.key === c && (u.status = sc);
    });
  }), n;
}
var j_ = ["component", "children", "onVisibleChanged", "onAllRemoved"], I_ = ["status"], L_ = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function V_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cu, n = /* @__PURE__ */ (function(r) {
    ur(o, r);
    var a = dr(o);
    function o() {
      var i;
      _t(this, o);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(l)), I(Re(i), "state", {
        keyEntities: []
      }), I(Re(i), "removeKey", function(u) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(p) {
            return p.key !== u ? p : V(V({}, p), {}, {
              status: nl
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(p) {
            var b = p.status;
            return b !== nl;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Ot(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, d = c.children, f = c.onVisibleChanged;
        c.onAllRemoved;
        var p = At(c, j_), b = u || m.Fragment, y = {};
        return L_.forEach(function(h) {
          y[h] = p[h], delete p[h];
        }), delete p.keys, /* @__PURE__ */ m.createElement(b, p, l.map(function(h, g) {
          var v = h.status, w = At(h, I_), x = v === ic || v === sc;
          return /* @__PURE__ */ m.createElement(t, De({}, y, {
            key: w.key,
            visible: x,
            eventProps: w,
            onVisibleChanged: function(S) {
              f == null || f(S, {
                key: w.key
              }), S || s.removeKey(w.key);
            }
          }), function(C, S) {
            return d(V(V({}, C), {}, {
              index: g
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, d = cc(c), f = F_(u, d);
        return {
          keyEntities: f.filter(function(p) {
            var b = u.find(function(y) {
              var h = y.key;
              return p.key === h;
            });
            return !(b && b.status === nl && p.status === lc);
          })
        };
      }
    }]), o;
  })(m.Component);
  return I(n, "defaultProps", {
    component: "div"
  }), n;
}
V_(Ig);
const uc = /* @__PURE__ */ m.createContext(!0);
process.env.NODE_ENV !== "production" && (uc.displayName = "MotionCacheContext");
function z_(e) {
  const t = m.useContext(uc), {
    children: n
  } = e, [, r] = Ma(), {
    motion: a
  } = r, o = m.useRef(!1);
  return o.current || (o.current = t !== a), o.current ? /* @__PURE__ */ m.createElement(uc.Provider, {
    value: a
  }, /* @__PURE__ */ m.createElement(S_, {
    motion: a
  }, n)) : n;
}
const Ug = /* @__PURE__ */ m.memo(({
  dropdownMatchSelectWidth: e
}) => (bn("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (Ug.displayName = "PropWarning");
const H_ = process.env.NODE_ENV !== "production" ? Ug : () => null;
var B_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let dc = !1;
process.env.NODE_ENV;
const W_ = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Yg;
function U_() {
  return Yg || ac;
}
function Y_(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const q_ = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (Yg = t), r && Y_(r) && (process.env.NODE_ENV !== "production" && Mo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), zE(U_(), r));
}, G_ = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    form: i,
    locale: s,
    componentSize: l,
    direction: c,
    space: u,
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: p,
    popupMatchSelectWidth: b,
    popupOverflow: y,
    legacyLocale: h,
    parentContext: g,
    iconPrefixCls: v,
    theme: w,
    componentDisabled: x,
    segmented: C,
    statistic: S,
    spin: E,
    calendar: T,
    carousel: O,
    cascader: _,
    collapse: M,
    typography: k,
    checkbox: j,
    descriptions: P,
    divider: D,
    drawer: R,
    skeleton: F,
    steps: N,
    image: H,
    layout: B,
    list: $,
    mentions: L,
    modal: W,
    progress: U,
    result: te,
    slider: X,
    breadcrumb: J,
    menu: ee,
    pagination: ae,
    input: se,
    textArea: fe,
    empty: oe,
    badge: ye,
    radio: G,
    rate: ue,
    switch: Y,
    transfer: le,
    avatar: ve,
    message: be,
    tag: Te,
    table: pe,
    card: _e,
    tabs: Ce,
    timeline: re,
    timePicker: Pe,
    upload: Le,
    notification: pt,
    tree: Ke,
    colorPicker: Je,
    datePicker: xt,
    rangePicker: We,
    flex: Ve,
    wave: Ne,
    dropdown: Ee,
    warning: Qe,
    tour: de,
    tooltip: we,
    popover: ct,
    popconfirm: Dn,
    floatButton: fr,
    floatButtonGroup: Ar,
    variant: Na,
    inputNumber: Fr,
    treeSelect: ln
  } = e, Rt = m.useCallback((Ye, dt) => {
    const {
      prefixCls: Ft
    } = e;
    if (dt)
      return dt;
    const Pt = Ft || g.getPrefixCls("");
    return Ye ? `${Pt}-${Ye}` : Pt;
  }, [g.getPrefixCls, e.prefixCls]), ut = v || g.iconPrefixCls || wu, Nn = n || g.csp;
  m_(ut, Nn);
  const Tt = y_(w, g.theme, {
    prefixCls: Rt("")
  });
  process.env.NODE_ENV !== "production" && (dc = dc || !!Tt);
  const Ue = {
    csp: Nn,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: s || h,
    direction: c,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: b ?? p,
    popupOverflow: y,
    getPrefixCls: Rt,
    iconPrefixCls: ut,
    theme: Tt,
    segmented: C,
    statistic: S,
    spin: E,
    calendar: T,
    carousel: O,
    cascader: _,
    collapse: M,
    typography: k,
    checkbox: j,
    descriptions: P,
    divider: D,
    drawer: R,
    skeleton: F,
    steps: N,
    image: H,
    input: se,
    textArea: fe,
    layout: B,
    list: $,
    mentions: L,
    modal: W,
    progress: U,
    result: te,
    slider: X,
    breadcrumb: J,
    menu: ee,
    pagination: ae,
    empty: oe,
    badge: ye,
    radio: G,
    rate: ue,
    switch: Y,
    transfer: le,
    avatar: ve,
    message: be,
    tag: Te,
    table: pe,
    card: _e,
    tabs: Ce,
    timeline: re,
    timePicker: Pe,
    upload: Le,
    notification: pt,
    tree: Ke,
    colorPicker: Je,
    datePicker: xt,
    rangePicker: We,
    flex: Ve,
    wave: Ne,
    dropdown: Ee,
    warning: Qe,
    tour: de,
    tooltip: we,
    popover: ct,
    popconfirm: Dn,
    floatButton: fr,
    floatButtonGroup: Ar,
    variant: Na,
    inputNumber: Fr,
    treeSelect: ln
  };
  process.env.NODE_ENV !== "production" && bn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ze = Object.assign({}, g);
  Object.keys(Ue).forEach((Ye) => {
    Ue[Ye] !== void 0 && (ze[Ye] = Ue[Ye]);
  }), W_.forEach((Ye) => {
    const dt = e[Ye];
    dt && (ze[Ye] = dt);
  }), typeof r < "u" && (ze.button = Object.assign({
    autoInsertSpace: r
  }, ze.button));
  const Ct = du(() => ze, ze, (Ye, dt) => {
    const Ft = Object.keys(Ye), Pt = Object.keys(dt);
    return Ft.length !== Pt.length || Ft.some((xn) => Ye[xn] !== dt[xn]);
  }), {
    layer: Sn
  } = m.useContext(Po), Lt = m.useMemo(() => ({
    prefixCls: ut,
    csp: Nn,
    layer: Sn ? "antd" : void 0
  }), [ut, Nn, Sn]);
  let it = /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(H_, {
    dropdownMatchSelectWidth: p
  }), t);
  const Zn = m.useMemo(() => {
    var Ye, dt, Ft, Pt;
    return Qr(((Ye = va.Form) === null || Ye === void 0 ? void 0 : Ye.defaultValidateMessages) || {}, ((Ft = (dt = Ct.locale) === null || dt === void 0 ? void 0 : dt.Form) === null || Ft === void 0 ? void 0 : Ft.defaultValidateMessages) || {}, ((Pt = Ct.form) === null || Pt === void 0 ? void 0 : Pt.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [Ct, i == null ? void 0 : i.validateMessages]);
  Object.keys(Zn).length > 0 && (it = /* @__PURE__ */ m.createElement(wE.Provider, {
    value: Zn
  }, it)), s && (it = /* @__PURE__ */ m.createElement(wg, {
    locale: s,
    _ANT_MARK__: bg
  }, it)), it = /* @__PURE__ */ m.createElement(su.Provider, {
    value: Lt
  }, it), l && (it = /* @__PURE__ */ m.createElement(BE, {
    size: l
  }, it)), it = /* @__PURE__ */ m.createElement(z_, null, it);
  const kn = m.useMemo(() => {
    const Ye = Tt || {}, {
      algorithm: dt,
      token: Ft,
      components: Pt,
      cssVar: xn
    } = Ye, jr = B_(Ye, ["algorithm", "token", "components", "cssVar"]), cn = dt && (!Array.isArray(dt) || dt.length > 0) ? Xl(dt) : xg, Gt = {};
    Object.entries(Pt || {}).forEach(([un, Ir]) => {
      const et = Object.assign({}, Ir);
      "algorithm" in et && (et.algorithm === !0 ? et.theme = cn : (Array.isArray(et.algorithm) || typeof et.algorithm == "function") && (et.theme = Xl(et.algorithm)), delete et.algorithm), Gt[un] = et;
    });
    const Cn = Object.assign(Object.assign({}, mo), Ft);
    return Object.assign(Object.assign({}, jr), {
      theme: cn,
      token: Cn,
      components: Gt,
      override: Object.assign({
        override: Cn
      }, Gt),
      cssVar: xn
    });
  }, [Tt]);
  return w && (it = /* @__PURE__ */ m.createElement(Cg.Provider, {
    value: kn
  }, it)), Ct.warning && (it = /* @__PURE__ */ m.createElement(pg.Provider, {
    value: Ct.warning
  }, it)), x !== void 0 && (it = /* @__PURE__ */ m.createElement(HE, {
    disabled: x
  }, it)), /* @__PURE__ */ m.createElement(Yt.Provider, {
    value: Ct
  }, it);
}, $a = (e) => {
  const t = m.useContext(Yt), n = m.useContext(bu);
  return /* @__PURE__ */ m.createElement(G_, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
$a.ConfigContext = Yt;
$a.SizeContext = pa;
$a.config = q_;
$a.useConfig = WE;
Object.defineProperty($a, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Mo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), pa)
});
process.env.NODE_ENV !== "production" && ($a.displayName = "ConfigProvider");
const qg = /* @__PURE__ */ m.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
}), K_ = (e) => {
  const {
    antCls: t,
    // .ant
    componentCls: n,
    // .ant-layout
    colorText: r,
    footerBg: a,
    headerHeight: o,
    headerPadding: i,
    headerColor: s,
    footerPadding: l,
    fontSize: c,
    bodyBg: u,
    headerBg: d
  } = e;
  return {
    [n]: {
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: u,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${n}-has-sider`]: {
        flexDirection: "row",
        [`> ${n}, > ${n}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${n}-header, &${n}-footer`]: {
        flex: "0 0 auto"
      },
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    },
    // ==================== Header ====================
    [`${n}-header`]: {
      height: o,
      padding: i,
      color: s,
      lineHeight: ke(o),
      background: d,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${t}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${n}-footer`]: {
      padding: l,
      color: r,
      fontSize: c,
      background: a
    },
    // =================== Content ====================
    [`${n}-content`]: {
      flex: "auto",
      color: r,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
}, Gg = (e) => {
  const {
    colorBgLayout: t,
    controlHeight: n,
    controlHeightLG: r,
    colorText: a,
    controlHeightSM: o,
    marginXXS: i,
    colorTextLightSolid: s,
    colorBgContainer: l
  } = e, c = r * 1.25;
  return {
    // Deprecated
    colorBgHeader: "#001529",
    colorBgBody: t,
    colorBgTrigger: "#002140",
    bodyBg: t,
    headerBg: "#001529",
    headerHeight: n * 2,
    headerPadding: `0 ${c}px`,
    headerColor: a,
    footerPadding: `${o}px ${c}px`,
    footerBg: t,
    siderBg: "#001529",
    triggerHeight: r + i * 2,
    triggerBg: "#002140",
    triggerColor: s,
    zeroTriggerWidth: r,
    zeroTriggerHeight: r,
    lightSiderBg: l,
    lightTriggerBg: l,
    lightTriggerColor: a
  };
}, Kg = [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]], Xg = kr("Layout", K_, Gg, {
  deprecatedTokens: Kg
}), X_ = (e) => {
  const {
    componentCls: t,
    siderBg: n,
    motionDurationMid: r,
    motionDurationSlow: a,
    antCls: o,
    triggerHeight: i,
    triggerColor: s,
    triggerBg: l,
    headerHeight: c,
    zeroTriggerWidth: u,
    zeroTriggerHeight: d,
    borderRadiusLG: f,
    lightSiderBg: p,
    lightTriggerColor: b,
    lightTriggerBg: y,
    bodyBg: h
  } = e;
  return {
    [t]: {
      position: "relative",
      // fix firefox can't set width smaller than content on flex item
      minWidth: 0,
      background: n,
      transition: `all ${r}, background 0s`,
      "&-has-trigger": {
        paddingBottom: i
      },
      "&-right": {
        order: 1
      },
      [`${t}-children`]: {
        height: "100%",
        // Hack for fixing margin collapse bug
        // https://github.com/ant-design/ant-design/issues/7967
        // solution from https://stackoverflow.com/a/33132624/3040605
        marginTop: -0.1,
        paddingTop: 0.1,
        [`${o}-menu${o}-menu-inline-collapsed`]: {
          width: "auto"
        }
      },
      [`&-zero-width ${t}-children`]: {
        overflow: "hidden"
      },
      [`${t}-trigger`]: {
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        height: i,
        color: s,
        lineHeight: ke(i),
        textAlign: "center",
        background: l,
        cursor: "pointer",
        transition: `all ${r}`
      },
      [`${t}-zero-width-trigger`]: {
        position: "absolute",
        top: c,
        insetInlineEnd: e.calc(u).mul(-1).equal(),
        zIndex: 1,
        width: u,
        height: d,
        color: s,
        fontSize: e.fontSizeXL,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: n,
        borderRadius: `0 ${ke(f)} ${ke(f)} 0`,
        cursor: "pointer",
        transition: `background ${a} ease`,
        "&::after": {
          position: "absolute",
          inset: 0,
          background: "transparent",
          transition: `all ${a}`,
          content: '""'
        },
        "&:hover::after": {
          background: "rgba(255, 255, 255, 0.2)"
        },
        "&-right": {
          insetInlineStart: e.calc(u).mul(-1).equal(),
          borderRadius: `${ke(f)} 0 0 ${ke(f)}`
        }
      },
      // Light
      "&-light": {
        background: p,
        [`${t}-trigger`]: {
          color: b,
          background: y
        },
        [`${t}-zero-width-trigger`]: {
          color: b,
          background: y,
          border: `1px solid ${h}`,
          // Safe to modify to any other color
          borderInlineStart: 0
        }
      }
    }
  };
}, Z_ = kr(["Layout", "Sider"], X_, Gg, {
  deprecatedTokens: Kg
});
var J_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const tf = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, Q_ = (e) => !Number.isNaN(Number.parseFloat(e)) && Number.isFinite(Number(e)), eO = /* @__PURE__ */ m.createContext({}), tO = /* @__PURE__ */ (() => {
  let e = 0;
  return (t = "") => (e += 1, `${t}${e}`);
})(), Eu = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    trigger: a,
    children: o,
    defaultCollapsed: i = !1,
    theme: s = "dark",
    style: l = {},
    collapsible: c = !1,
    reverseArrow: u = !1,
    width: d = 200,
    collapsedWidth: f = 80,
    zeroWidthTriggerStyle: p,
    breakpoint: b,
    onCollapse: y,
    onBreakpoint: h
  } = e, g = J_(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: v
  } = en(qg), [w, x] = Yn("collapsed" in e ? e.collapsed : i), [C, S] = Yn(!1);
  wt(() => {
    "collapsed" in e && x(e.collapsed);
  }, [e.collapsed]);
  const E = (ee, ae) => {
    "collapsed" in e || x(ee), y == null || y(ee, ae);
  }, {
    getPrefixCls: T,
    direction: O
  } = en(Yt), _ = T("layout-sider", n), [M, k, j] = Z_(_), P = Fe(null);
  P.current = (ee) => {
    S(ee.matches), h == null || h(ee.matches), w !== ee.matches && E(ee.matches, "responsive");
  }, wt(() => {
    function ee(se) {
      var fe;
      return (fe = P.current) === null || fe === void 0 ? void 0 : fe.call(P, se);
    }
    let ae;
    return typeof (window == null ? void 0 : window.matchMedia) < "u" && b && b in tf && (ae = window.matchMedia(`screen and (max-width: ${tf[b]})`), sC(ae, ee), ee(ae)), () => {
      lC(ae, ee);
    };
  }, [b]), wt(() => {
    const ee = tO("ant-sider-");
    return v.addSider(ee), () => v.removeSider(ee);
  }, []);
  const D = () => {
    E(!w, "clickTrigger");
  }, R = hs(g, ["collapsed"]), F = w ? f : d, N = Q_(F) ? `${F}px` : String(F), H = Number.parseFloat(String(f || 0)) === 0 ? /* @__PURE__ */ m.createElement("span", {
    onClick: D,
    className: he(`${_}-zero-width-trigger`, `${_}-zero-width-trigger-${u ? "right" : "left"}`),
    style: p
  }, a || /* @__PURE__ */ m.createElement(Im, null)) : null, B = O === "rtl" == !u, W = {
    expanded: B ? /* @__PURE__ */ m.createElement(Mr, null) : /* @__PURE__ */ m.createElement(ql, null),
    collapsed: B ? /* @__PURE__ */ m.createElement(ql, null) : /* @__PURE__ */ m.createElement(Mr, null)
  }[w ? "collapsed" : "expanded"], U = a !== null ? H || /* @__PURE__ */ m.createElement("div", {
    className: `${_}-trigger`,
    onClick: D,
    style: {
      width: N
    }
  }, a || W) : null, te = Object.assign(Object.assign({}, l), {
    flex: `0 0 ${N}`,
    maxWidth: N,
    minWidth: N,
    width: N
  }), X = he(_, `${_}-${s}`, {
    [`${_}-collapsed`]: !!w,
    [`${_}-has-trigger`]: c && a !== null && !H,
    [`${_}-below`]: !!C,
    [`${_}-zero-width`]: Number.parseFloat(N) === 0
  }, r, k, j), J = m.useMemo(() => ({
    siderCollapsed: w
  }), [w]);
  return M(/* @__PURE__ */ m.createElement(eO.Provider, {
    value: J
  }, /* @__PURE__ */ m.createElement("aside", Object.assign({
    className: X
  }, R, {
    style: te,
    ref: t
  }), /* @__PURE__ */ m.createElement("div", {
    className: `${_}-children`
  }, o), c || C && H ? U : null)));
});
process.env.NODE_ENV !== "production" && (Eu.displayName = "Sider");
function Dr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return q.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Dr(r)) : Km(r) && r.props ? n = n.concat(Dr(r.props.children, t)) : n.push(r));
  }), n;
}
function nO(e, t, n) {
  return typeof n == "boolean" ? n : e.length ? !0 : Dr(t).some((a) => a.type === Eu);
}
var Zg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function ps({
  suffixCls: e,
  tagName: t,
  displayName: n
}) {
  return (r) => {
    const a = /* @__PURE__ */ m.forwardRef((o, i) => /* @__PURE__ */ m.createElement(r, Object.assign({
      ref: i,
      suffixCls: e,
      tagName: t
    }, o)));
    return process.env.NODE_ENV !== "production" && (a.displayName = n), a;
  };
}
const _u = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    prefixCls: n,
    suffixCls: r,
    className: a,
    tagName: o
  } = e, i = Zg(e, ["prefixCls", "suffixCls", "className", "tagName"]), {
    getPrefixCls: s
  } = m.useContext(Yt), l = s("layout", n), [c, u, d] = Xg(l), f = r ? `${l}-${r}` : l;
  return c(/* @__PURE__ */ m.createElement(o, Object.assign({
    className: he(n || f, a, u, d),
    ref: t
  }, i)));
}), rO = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    direction: n
  } = m.useContext(Yt), [r, a] = m.useState([]), {
    prefixCls: o,
    className: i,
    rootClassName: s,
    children: l,
    hasSider: c,
    tagName: u,
    style: d
  } = e, f = Zg(e, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]), p = hs(f, ["suffixCls"]), {
    getPrefixCls: b,
    className: y,
    style: h
  } = $o("layout"), g = b("layout", o), v = nO(r, l, c), [w, x, C] = Xg(g), S = he(g, {
    [`${g}-has-sider`]: v,
    [`${g}-rtl`]: n === "rtl"
  }, y, i, s, x, C), E = m.useMemo(() => ({
    siderHook: {
      addSider: (T) => {
        a((O) => [].concat(me(O), [T]));
      },
      removeSider: (T) => {
        a((O) => O.filter((_) => _ !== T));
      }
    }
  }), []);
  return w(/* @__PURE__ */ m.createElement(qg.Provider, {
    value: E
  }, /* @__PURE__ */ m.createElement(u, Object.assign({
    ref: t,
    className: S,
    style: Object.assign(Object.assign({}, h), d)
  }, p), l)));
});
ps({
  tagName: "div",
  displayName: "Layout"
})(rO);
ps({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(_u);
ps({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(_u);
const aO = ps({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(_u), rM = (e) => {
  const t = us(), [n, r] = dp.useNotification(), [a, o] = Yn(() => typeof window > "u" ? !1 : window.innerWidth < 992), [i, s] = Yn([]), {
    token: { colorBgContainer: l, borderRadiusLG: c }
  } = Xf.useToken(), u = Gf(), { authUser: d, logout: f } = is(), { submitPostRequest: p, clearRequests: b } = Pr(), { notificationData: y } = bm(), h = np();
  function g(O, _, M, k, j, P) {
    return {
      key: O,
      icon: M,
      children: k,
      label: _,
      style: j,
      onClick: P
    };
  }
  const v = () => {
    if (e.onLogout) {
      e.onLogout();
      return;
    }
    p({
      key: "logout",
      path: "logout",
      showToast: !1,
      onSuccess: () => {
        b(), f();
      }
    });
  }, w = q.useMemo(() => Object.assign([], e.menuItems ?? []), [e.menuItems]), x = q.useMemo(() => {
    const O = Object.assign([], w);
    return e.disableDefaultAccountMenu || (O.push({
      type: "divider",
      style: { margin: 20, backgroundColor: "#3a3b3c" }
    }), O.push(
      g(
        "account-group",
        e.accountLabel ?? (d == null ? void 0 : d.full_name) ?? "Account",
        /* @__PURE__ */ z.jsx(Gm, {}),
        [
          g(
            "logout",
            "Logout",
            /* @__PURE__ */ z.jsx(Wm, {}),
            void 0,
            void 0,
            () => v()
          )
        ]
      )
    )), O;
  }, [
    w,
    e.disableDefaultAccountMenu,
    e.accountLabel,
    d
  ]), C = e.content ?? e.children, S = (O) => {
    const _ = O.key;
    _ !== "logout" && (u(_), h.pathname !== _ && b());
  }, E = (O, _) => {
    for (const M of O) {
      if (!M || !("children" in M) || !M.children)
        continue;
      if (M.children.some((j) => j && j.key === _)) return String(M.key);
    }
    return null;
  };
  wt(() => {
    if (typeof window < "u" && window.innerWidth >= 992) {
      const O = E(x, h.pathname);
      O && s([O]);
    }
  }, [h.pathname, x]);
  const T = (O) => {
    s(O);
  };
  return q.useEffect(() => {
    y && y.show_notification && (y.success_title || y.success_message ? n.success({
      message: y.success_title,
      description: y.success_message,
      showProgress: !0,
      pauseOnHover: !0,
      placement: "bottomRight"
    }) : y.error_message && n.error({
      message: y.error_title ?? "Error!",
      description: y.error_message,
      showProgress: !0,
      pauseOnHover: !0,
      placement: "bottomRight"
    }), y.show_notification = !1);
  }, [y]), /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    r,
    /* @__PURE__ */ z.jsxs(Fu, { children: [
      /* @__PURE__ */ z.jsxs(
        Eu,
        {
          width: t ? "180px" : "280px",
          collapsedWidth: t ? 40 : 50,
          trigger: null,
          collapsible: !0,
          collapsed: a,
          breakpoint: "lg",
          style: {
            background: e.siderBackground,
            height: "100vh",
            zIndex: 2,
            overflow: "auto",
            left: 0,
            boxShadow: "4px 0 20px rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(255,255,255,0.2)"
          },
          children: [
            /* @__PURE__ */ z.jsxs(
              "div",
              {
                style: {
                  padding: t ? "12px 8px" : "20px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  background: e.siderHeaderBackground,
                  display: "flex",
                  alignItems: "center",
                  gap: 10
                },
                children: [
                  e.appTitleLogo ?? e.appTitleLogo,
                  !a && /* @__PURE__ */ z.jsx(
                    na.Text,
                    {
                      style: {
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: 18,
                        letterSpacing: 1
                      },
                      children: e.appTitle ?? "App"
                    }
                  ),
                  /* @__PURE__ */ z.jsx(
                    lt,
                    {
                      type: "text",
                      icon: a ? /* @__PURE__ */ z.jsx(Ym, {}) : /* @__PURE__ */ z.jsx(Um, {}),
                      onClick: () => o(!a),
                      style: {
                        fontSize: "16px",
                        width: t ? 30 : 40,
                        height: t ? 30 : 40,
                        marginLeft: "auto",
                        color: "#fff",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.2)"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ z.jsx(
              "div",
              {
                style: {
                  padding: "16px 0",
                  flex: 1
                },
                children: /* @__PURE__ */ z.jsx(
                  fp,
                  {
                    style: {
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "15px",
                      color: "#fff",
                      padding: 0,
                      margin: 0
                    },
                    theme: "dark",
                    mode: "inline",
                    selectedKeys: [h.pathname],
                    openKeys: i,
                    onOpenChange: T,
                    items: x,
                    onClick: S,
                    className: "custom-dark-menu"
                  }
                )
              }
            ),
            /* @__PURE__ */ z.jsx(
              "div",
              {
                style: {
                  padding: t ? "12px 4px" : "16px 8px",
                  textAlign: "center",
                  borderTop: "1px solid rgba(255,255,255,0.15)"
                },
                children: /* @__PURE__ */ z.jsxs(
                  "div",
                  {
                    style: {
                      padding: a ? "10px 6px" : "10px 14px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)"
                    },
                    children: [
                      /* @__PURE__ */ z.jsx(
                        na.Text,
                        {
                          style: {
                            color: "#fff",
                            fontSize: "13px",
                            fontWeight: 700,
                            display: "block"
                          },
                          children: e.appTitle ?? "App"
                        }
                      ),
                      !a && /* @__PURE__ */ z.jsx(
                        na.Text,
                        {
                          style: {
                            color: "#e0e7ff",
                            fontSize: "11px",
                            display: "block"
                          },
                          children: e.appSubtitle ?? "Workspace"
                        }
                      )
                    ]
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ z.jsx(Fu, { style: { height: "100vh" }, children: /* @__PURE__ */ z.jsx(
        aO,
        {
          style: {
            margin: t ? "8px" : "16px",
            padding: t ? "8px" : "16px",
            background: l,
            borderRadius: c,
            overflow: "auto"
          },
          children: C
        }
      ) })
    ] })
  ] });
}, aM = (e) => {
  const { notifyPostRequests: t, getPostRequest: n, getPostRequestErrorProperty: r } = Pr();
  let a = e.type;
  const o = n(e.requestKey).postData, i = n(e.requestKey).errors;
  let s = e.dataKey, l = o[e.dataKey];
  const c = n(e.requestKey).inputRefs;
  if (c[e.dataKey] || (c[e.dataKey] = Fe(null)), a == "date-datetime" || a == "time-datetime" || a == "timemilli-datetime") {
    const f = e.dataKey + "_data-date", p = e.dataKey + "_data-time";
    if (a = a == "date-datetime" ? "date" : a == "time-datetime" ? "time" : "timemilli", s = a == "date" ? f : p, l) {
      const b = K.utc(l).toDate(), y = K(b).local().format("YYYY-MM-DD HH:mm:ss.SSS"), h = y.substring(0, 10), g = a == "time" ? y.substring(11, 19) : y.substring(11, 23);
      o[f] = h, o[p] = g;
    } else
      o[f] = null, o[p] = null;
    o[e.dataKey] && (o[f] && a == "date" ? l = o[f] : o[p] && (a == "time" || a == "timemilli") && (l = o[p]));
  }
  let u;
  const d = e.options;
  return e.isInitialValueDisabled && (l ? (u = o[s + "-disabled"], u || (u = o[s], o[s + "-disabled"] = u)) : o[s + "-disabled"] = []), /* @__PURE__ */ z.jsx(
    U1,
    {
      ref: c[e.dataKey],
      name: s,
      type: a,
      title: e.title,
      value: l,
      placeholder: e.placeholder,
      options: d,
      optionsKey: e.optionsKey,
      disabled: e.disabled,
      maxLength: e.maxLength,
      horizontalStyle: e.horizontalStyle,
      wrapContent: e.wrapContent,
      disabledValues: u,
      disablePastDates: e.disablePastDates,
      hidden: e.hidden,
      minValue: e.minValue,
      maxValue: e.maxValue,
      step: e.step,
      style: e.style,
      inputWidth: e.inputWidth,
      description: e.description,
      errorMessage: r(
        e.requestKey,
        e.errorKey || e.dataKey
      ),
      allCaps: e.allCaps,
      capitalize: e.capitalize,
      capitalizeFirst: e.capitalizeFirst,
      showPasswordToggle: e.showPasswordToggle,
      onEnterKeyPress: e.onEnterKeyPress,
      onChange: (f) => {
        if (e.onSetValue && e.onSetValue(f), e.type == "date-datetime" || e.type == "time-datetime" || e.type == "timemilli-datetime") {
          const p = e.dataKey + "_data-date", b = e.dataKey + "_data-time";
          if (f) {
            let y = e.type == "date-datetime" ? f : null;
            y || (y = o[p] ? o[p] : K().format("YYYY-MM-DD"));
            let h = e.type == "time-datetime" || e.type == "timemilli-datetime" ? f : null;
            h || (h = o[b] ? o[b] : "00:00:00.000"), f = K(y + " " + h).utc().format("YYYY-MM-DD HH:mm:ss.SSS");
          }
        }
        o[e.dataKey] = f, f && i && i[e.dataKey] && delete i[e.dataKey], t();
      }
    }
  );
}, oM = (e) => {
  const t = e.size ? e.size : 24, n = e.color ? e.color : "#ffffff", r = "0 0 24 24", a = e.isSemiTransparent ? "opacity-70" : "";
  return /* @__PURE__ */ z.jsx(
    "svg",
    {
      className: a,
      width: t,
      height: t,
      fill: "none",
      stroke: n,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      viewBox: r,
      xmlns: "http://www.w3.org/2000/svg",
      children: e.path
    }
  );
}, iM = (e) => {
  const {
    fetchRequest: t,
    getRequest: n,
    getPostRequest: r,
    submitPostRequest: a,
    isForCreation: o
  } = Pr(), { closeModal: i, isModalOpen: s } = xm(), l = () => {
    if (e.onSaveClick) {
      e.onSaveClick();
      return;
    }
    e.onPreSaveClick && e.onPreSaveClick(), c();
  }, c = () => {
    const u = (d, f) => {
      let p = e.tableRequestKey;
      p || (p = e.savePath.split("?")[0]), t(n(p)), e.dontCloseAfterSave || i(e.id), e.onDataSaved && e.onDataSaved(d, f);
    };
    a({
      key: e.id,
      path: e.savePath,
      showToast: e.showToastAfterSave,
      onSuccess: (d, f) => {
        u && u(d, f);
      },
      onError: (d) => {
        if (d && d instanceof Object) {
          const f = Object.keys(d);
          for (let p = 0; p < f.length; p++) {
            const b = f[p], y = r(e.id).inputRefs[b];
            if (y && y.current) {
              let h = y.current;
              h && h.input && (h = h.input), h && h.scrollIntoView ? h.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }) : h && h.focus && h.focus();
              break;
            }
          }
        }
      }
    });
  };
  return /* @__PURE__ */ z.jsx(
    Y1,
    {
      id: e.id,
      title: e.title ? e.title : e.titleLabel && (o(e.id) ? "Add " + e.titleLabel : "Edit " + e.titleLabel),
      isOpen: s(e.id),
      isSaving: r(e.id).isLoading,
      isSubModal: e.isSubModal,
      onCancelClick: () => {
        e.onCancelClick && e.onCancelClick(), i(e.id);
      },
      saveText: e.saveText,
      cancelText: e.cancelText,
      isSaveButtonHidden: e.isSaveButtonHidden,
      isSaveButtonDisabled: e.isSaveButtonDisabled,
      onSaveClick: l,
      body: e.body,
      width: e.width
    }
  );
};
var fc = /* @__PURE__ */ m.createContext(null);
function oO(e) {
  var t = e.children, n = e.onBatchResize, r = m.useRef(0), a = m.useRef([]), o = m.useContext(fc), i = m.useCallback(function(s, l, c) {
    r.current += 1;
    var u = r.current;
    a.current.push({
      size: s,
      element: l,
      data: c
    }), Promise.resolve().then(function() {
      u === r.current && (n == null || n(a.current), a.current = []);
    }), o == null || o(s, l, c);
  }, [n, o]);
  return /* @__PURE__ */ m.createElement(fc.Provider, {
    value: i
  }, t);
}
var Jg = (function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(a, o) {
      return a[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    (function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), a = this.__entries__[r];
        return a && a[1];
      }, t.prototype.set = function(n, r) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, a = e(r, n);
        ~a && r.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          n.call(r, i[1], i[0]);
        }
      }, t;
    })()
  );
})(), hc = typeof window < "u" && typeof document < "u" && window.document === document, Bi = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), iO = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Bi) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), sO = 2;
function lO(e, t) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, e()), r && s();
  }
  function i() {
    iO(o);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - a < sO)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    a = l;
  }
  return s;
}
var cO = 20, uO = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], dO = typeof MutationObserver < "u", fO = (
  /** @class */
  (function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = lO(this.refresh.bind(this), cO);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !hc || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), dO ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !hc || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = uO.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  })()
), Qg = (function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}), ba = (function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Bi;
}), ev = ys(0, 0, 0, 0);
function Wi(e) {
  return parseFloat(e) || 0;
}
function nf(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e["border-" + a + "-width"];
    return r + Wi(o);
  }, 0);
}
function hO(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e["padding-" + o];
    n[o] = Wi(i);
  }
  return n;
}
function mO(e) {
  var t = e.getBBox();
  return ys(0, 0, t.width, t.height);
}
function gO(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return ev;
  var r = ba(e).getComputedStyle(e), a = hO(r), o = a.left + a.right, i = a.top + a.bottom, s = Wi(r.width), l = Wi(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= nf(r, "left", "right") + o), Math.round(l + i) !== n && (l -= nf(r, "top", "bottom") + i)), !pO(e)) {
    var c = Math.round(s + o) - t, u = Math.round(l + i) - n;
    Math.abs(c) !== 1 && (s -= c), Math.abs(u) !== 1 && (l -= u);
  }
  return ys(a.left, a.top, s, l);
}
var vO = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof ba(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof ba(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function pO(e) {
  return e === ba(e).document.documentElement;
}
function yO(e) {
  return hc ? vO(e) ? mO(e) : gO(e) : ev;
}
function bO(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return Qg(i, {
    x: t,
    y: n,
    width: r,
    height: a,
    top: n,
    right: t + r,
    bottom: a + n,
    left: t
  }), i;
}
function ys(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var wO = (
  /** @class */
  (function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ys(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = yO(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  })()
), SO = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t, n) {
      var r = bO(n);
      Qg(this, { target: t, contentRect: r });
    }
    return e;
  })()
), xO = (
  /** @class */
  (function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Jg(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ba(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new wO(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ba(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new SO(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  })()
), tv = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Jg(), nv = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = fO.getInstance(), r = new xO(t, n, this);
      tv.set(this, r);
    }
    return e;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  nv.prototype[e] = function() {
    var t;
    return (t = tv.get(this))[e].apply(t, arguments);
  };
});
var CO = (function() {
  return typeof Bi.ResizeObserver < "u" ? Bi.ResizeObserver : nv;
})(), Hn = /* @__PURE__ */ new Map();
function rv(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Hn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var av = new CO(rv);
process.env.NODE_ENV;
process.env.NODE_ENV;
function EO(e, t) {
  Hn.has(e) || (Hn.set(e, /* @__PURE__ */ new Set()), av.observe(e)), Hn.get(e).add(t);
}
function _O(e, t) {
  Hn.has(e) && (Hn.get(e).delete(t), Hn.get(e).size || (av.unobserve(e), Hn.delete(e)));
}
var OO = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n() {
    return _t(this, n), t.apply(this, arguments);
  }
  return Ot(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(m.Component);
function RO(e, t) {
  var n = e.children, r = e.disabled, a = m.useRef(null), o = m.useRef(null), i = m.useContext(fc), s = typeof n == "function", l = s ? n(a) : n, c = m.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ m.isValidElement(l) && fs(l), d = u ? mu(l) : null, f = hu(d, a), p = function() {
    var g;
    return Ti(a.current) || // Support `nativeElement` format
    (a.current && xe(a.current) === "object" ? Ti((g = a.current) === null || g === void 0 ? void 0 : g.nativeElement) : null) || Ti(o.current);
  };
  m.useImperativeHandle(t, function() {
    return p();
  });
  var b = m.useRef(e);
  b.current = e;
  var y = m.useCallback(function(h) {
    var g = b.current, v = g.onResize, w = g.data, x = h.getBoundingClientRect(), C = x.width, S = x.height, E = h.offsetWidth, T = h.offsetHeight, O = Math.floor(C), _ = Math.floor(S);
    if (c.current.width !== O || c.current.height !== _ || c.current.offsetWidth !== E || c.current.offsetHeight !== T) {
      var M = {
        width: O,
        height: _,
        offsetWidth: E,
        offsetHeight: T
      };
      c.current = M;
      var k = E === Math.round(C) ? C : E, j = T === Math.round(S) ? S : T, P = V(V({}, M), {}, {
        offsetWidth: k,
        offsetHeight: j
      });
      i == null || i(P, h, w), v && Promise.resolve().then(function() {
        v(P, h);
      });
    }
  }, []);
  return m.useEffect(function() {
    var h = p();
    return h && !r && EO(h, y), function() {
      return _O(h, y);
    };
  }, [a.current, r]), /* @__PURE__ */ m.createElement(OO, {
    ref: o
  }, u ? /* @__PURE__ */ m.cloneElement(l, {
    ref: f
  }) : l);
}
var ov = /* @__PURE__ */ m.forwardRef(RO);
process.env.NODE_ENV !== "production" && (ov.displayName = "SingleObserver");
var TO = "rc-observer-key";
function PO(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Dr(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? da(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && da(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(TO, "-").concat(o);
    return /* @__PURE__ */ m.createElement(ov, De({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var Da = /* @__PURE__ */ m.forwardRef(PO);
process.env.NODE_ENV !== "production" && (Da.displayName = "ResizeObserver");
Da.Collection = oO;
var MO = function(t) {
  if (It() && window.document.documentElement) {
    var n = Array.isArray(t) ? t : [t], r = window.document.documentElement;
    return n.some(function(a) {
      return a in r.style;
    });
  }
  return !1;
};
function rf(e, t) {
  return MO(e);
}
function iv(e) {
  var t = e.children, n = e.prefixCls, r = e.id, a = e.overlayInnerStyle, o = e.bodyClassName, i = e.className, s = e.style;
  return /* @__PURE__ */ m.createElement("div", {
    className: he("".concat(n, "-content"), i),
    style: s
  }, /* @__PURE__ */ m.createElement("div", {
    className: he("".concat(n, "-inner"), o),
    id: r,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var sv = /* @__PURE__ */ m.createContext(null), af = [];
function $O(e, t) {
  var n = m.useState(function() {
    if (!It())
      return null;
    var b = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && b.setAttribute("data-debug", t), b;
  }), r = Q(n, 1), a = r[0], o = m.useRef(!1), i = m.useContext(sv), s = m.useState(af), l = Q(s, 2), c = l[0], u = l[1], d = i || (o.current ? void 0 : function(b) {
    u(function(y) {
      var h = [b].concat(me(y));
      return h;
    });
  });
  function f() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function p() {
    var b;
    (b = a.parentElement) === null || b === void 0 || b.removeChild(a), o.current = !1;
  }
  return at(function() {
    return e ? i ? i(f) : f() : p(), p;
  }, [e]), at(function() {
    c.length && (c.forEach(function(b) {
      return b();
    }), u(af));
  }, [c]), [a, d];
}
function DO(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var a, o;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var u = l ? "width: ".concat(s.width, ";") : "", d = c ? "height: ".concat(s.height, ";") : "";
      Un(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(d, `
}`), t);
    } catch (b) {
      console.error(b), a = l, o = c;
    }
  }
  document.body.appendChild(n);
  var f = e && a && !isNaN(a) ? a : n.offsetWidth - n.clientWidth, p = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), so(t), {
    width: f,
    height: p
  };
}
function NO(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : DO(e);
}
function kO() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var AO = "rc-util-locker-".concat(Date.now()), of = 0;
function FO(e) {
  var t = !!e, n = m.useState(function() {
    return of += 1, "".concat(AO, "_").concat(of);
  }), r = Q(n, 1), a = r[0];
  at(function() {
    if (t) {
      var o = NO(document.body).width, i = kO();
      Un(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      so(a);
    return function() {
      so(a);
    };
  }, [t, a]);
}
var jO = !1;
function IO(e) {
  return jO;
}
var sf = function(t) {
  return t === !1 ? !1 : !It() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Ou = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, c = m.useState(n), u = Q(c, 2), d = u[0], f = u[1], p = d || n;
  process.env.NODE_ENV !== "production" && rt(It() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), m.useEffect(function() {
    (s || n) && f(n);
  }, [n, s]);
  var b = m.useState(function() {
    return sf(a);
  }), y = Q(b, 2), h = y[0], g = y[1];
  m.useEffect(function() {
    var k = sf(a);
    g(k ?? null);
  });
  var v = $O(p && !h, o), w = Q(v, 2), x = w[0], C = w[1], S = h ?? x;
  FO(r && n && It() && (S === x || S === document.body));
  var E = null;
  if (l && fs(l) && t) {
    var T = l;
    E = T.ref;
  }
  var O = hu(E, t);
  if (!p || !It() || h === void 0)
    return null;
  var _ = S === !1 || IO(), M = l;
  return t && (M = /* @__PURE__ */ m.cloneElement(l, {
    ref: O
  })), /* @__PURE__ */ m.createElement(sv.Provider, {
    value: C
  }, _ ? M : /* @__PURE__ */ mp(M, S));
});
process.env.NODE_ENV !== "production" && (Ou.displayName = "Portal");
function LO() {
  var e = V({}, m);
  return e.useId;
}
var lf = 0, cf = LO();
const lv = cf ? (
  // Use React `useId`
  function(t) {
    var n = cf();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = m.useState("ssr-id"), r = Q(n, 2), a = r[0], o = r[1];
    return m.useEffect(function() {
      var i = lf;
      lf += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
), VO = (function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
});
function zO(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, a = e.arrowPos, o = r || {}, i = o.className, s = o.content, l = a.x, c = l === void 0 ? 0 : l, u = a.y, d = u === void 0 ? 0 : u, f = m.useRef();
  if (!n || !n.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var b = n.points[0], y = n.points[1], h = b[0], g = b[1], v = y[0], w = y[1];
    h === v || !["t", "b"].includes(h) ? p.top = d : h === "t" ? p.top = 0 : p.bottom = 0, g === w || !["l", "r"].includes(g) ? p.left = c : g === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ m.createElement("div", {
    ref: f,
    className: he("".concat(t, "-arrow"), i),
    style: p
  }, s);
}
function HO(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ m.createElement(Cu, De({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ m.createElement("div", {
      style: {
        zIndex: r
      },
      className: he("".concat(t, "-mask"), s)
    });
  }) : null;
}
var cv = /* @__PURE__ */ m.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (cv.displayName = "PopupContent");
var uv = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, u = e.fresh, d = e.onClick, f = e.mask, p = e.arrow, b = e.arrowPos, y = e.align, h = e.motion, g = e.maskMotion, v = e.forceRender, w = e.getPopupContainer, x = e.autoDestroy, C = e.portal, S = e.zIndex, E = e.onMouseEnter, T = e.onMouseLeave, O = e.onPointerEnter, _ = e.onPointerDownCapture, M = e.ready, k = e.offsetX, j = e.offsetY, P = e.offsetR, D = e.offsetB, R = e.onAlign, F = e.onPrepare, N = e.stretch, H = e.targetWidth, B = e.targetHeight, $ = typeof n == "function" ? n() : n, L = l || c, W = (w == null ? void 0 : w.length) > 0, U = m.useState(!w || !W), te = Q(U, 2), X = te[0], J = te[1];
  if (at(function() {
    !X && W && i && J(!0);
  }, [X, W, i]), !X)
    return null;
  var ee = "auto", ae = {
    left: "-1000vw",
    top: "-1000vh",
    right: ee,
    bottom: ee
  };
  if (M || !l) {
    var se, fe = y.points, oe = y.dynamicInset || ((se = y._experimental) === null || se === void 0 ? void 0 : se.dynamicInset), ye = oe && fe[0][1] === "r", G = oe && fe[0][0] === "b";
    ye ? (ae.right = P, ae.left = ee) : (ae.left = k, ae.right = ee), G ? (ae.bottom = D, ae.top = ee) : (ae.top = j, ae.bottom = ee);
  }
  var ue = {};
  return N && (N.includes("height") && B ? ue.height = B : N.includes("minHeight") && B && (ue.minHeight = B), N.includes("width") && H ? ue.width = H : N.includes("minWidth") && H && (ue.minWidth = H)), l || (ue.pointerEvents = "none"), /* @__PURE__ */ m.createElement(C, {
    open: v || L,
    getContainer: w && function() {
      return w(i);
    },
    autoDestroy: x
  }, /* @__PURE__ */ m.createElement(HO, {
    prefixCls: a,
    open: l,
    zIndex: S,
    mask: f,
    motion: g
  }), /* @__PURE__ */ m.createElement(Da, {
    onResize: R,
    disabled: !l
  }, function(Y) {
    return /* @__PURE__ */ m.createElement(Cu, De({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: v,
      leavedClassName: "".concat(a, "-hidden")
    }, h, {
      onAppearPrepare: F,
      onEnterPrepare: F,
      visible: l,
      onVisibleChanged: function(ve) {
        var be;
        h == null || (be = h.onVisibleChanged) === null || be === void 0 || be.call(h, ve), s(ve);
      }
    }), function(le, ve) {
      var be = le.className, Te = le.style, pe = he(a, be, r);
      return /* @__PURE__ */ m.createElement("div", {
        ref: To(Y, t, ve),
        className: pe,
        style: V(V(V(V({
          "--arrow-x": "".concat(b.x || 0, "px"),
          "--arrow-y": "".concat(b.y || 0, "px")
        }, ae), ue), Te), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, o),
        onMouseEnter: E,
        onMouseLeave: T,
        onPointerEnter: O,
        onClick: d,
        onPointerDownCapture: _
      }, p && /* @__PURE__ */ m.createElement(zO, {
        prefixCls: a,
        arrow: p,
        arrowPos: b,
        align: y
      }), /* @__PURE__ */ m.createElement(cv, {
        cache: !l && !u
      }, $));
    });
  }));
});
process.env.NODE_ENV !== "production" && (uv.displayName = "Popup");
var dv = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, a = fs(n), o = m.useCallback(function(s) {
    fu(t, r ? r(s) : s);
  }, [r]), i = hu(o, mu(n));
  return a ? /* @__PURE__ */ m.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (dv.displayName = "TriggerWrapper");
var uf = /* @__PURE__ */ m.createContext(null);
function df(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function BO(e, t, n, r) {
  return m.useMemo(function() {
    var a = df(n ?? t), o = df(r ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, n, r]);
}
const WO = (function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i)
        return !0;
    }
  }
  return !1;
});
function UO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function YO(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, l = o[i];
    if (UO((s = e[l]) === null || s === void 0 ? void 0 : s.points, a, r))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function ff(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function Do(e) {
  return e.ownerDocument.defaultView;
}
function mc(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = Do(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(l) {
      return r.includes(l);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function yo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function qa(e) {
  return yo(parseFloat(e), 0);
}
function hf(e, t) {
  var n = V({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = Do(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, l = a.borderBottomWidth, c = a.borderLeftWidth, u = a.borderRightWidth, d = r.getBoundingClientRect(), f = r.offsetHeight, p = r.clientHeight, b = r.offsetWidth, y = r.clientWidth, h = qa(s), g = qa(l), v = qa(c), w = qa(u), x = yo(Math.round(d.width / b * 1e3) / 1e3), C = yo(Math.round(d.height / f * 1e3) / 1e3), S = (b - y - v - w) * x, E = (f - p - h - g) * C, T = h * C, O = g * C, _ = v * x, M = w * x, k = 0, j = 0;
      if (o === "clip") {
        var P = qa(i);
        k = P * x, j = P * C;
      }
      var D = d.x + _ - k, R = d.y + T - j, F = D + d.width + 2 * k - _ - M - S, N = R + d.height + 2 * j - T - O - E;
      n.left = Math.max(n.left, D), n.top = Math.max(n.top, R), n.right = Math.min(n.right, F), n.bottom = Math.min(n.bottom, N);
    }
  }), n;
}
function mf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function gf(e, t) {
  var n = t || [], r = Q(n, 2), a = r[0], o = r[1];
  return [mf(e.width, a), mf(e.height, o)];
}
function vf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Yr(e, t) {
  var n = t[0], r = t[1], a, o;
  return n === "t" ? o = e.y : n === "b" ? o = e.y + e.height : o = e.y + e.height / 2, r === "l" ? a = e.x : r === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function nr(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, a) {
    return a === t ? n[r] || "c" : r;
  }).join("");
}
function qO(e, t, n, r, a, o, i) {
  var s = m.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[r] || {}
  }), l = Q(s, 2), c = l[0], u = l[1], d = m.useRef(0), f = m.useMemo(function() {
    return t ? mc(t) : [];
  }, [t]), p = m.useRef({}), b = function() {
    p.current = {};
  };
  e || b();
  var y = jt(function() {
    if (t && n && e) {
      let Kt = function(Ia, An) {
        var tr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pe, La = L.x + Ia, Yo = L.y + An, Ms = La + G, $s = Yo + ye, Ds = Math.max(La, tr.left), ce = Math.max(Yo, tr.top), Se = Math.min(Ms, tr.right), tt = Math.min($s, tr.bottom);
        return Math.max(0, (Se - Ds) * (tt - ce));
      }, Vr = function() {
        cn = L.y + ze, Gt = cn + ye, Cn = L.x + Ue, un = Cn + G;
      };
      var v, w, x, C, S = t, E = S.ownerDocument, T = Do(S), O = T.getComputedStyle(S), _ = O.position, M = S.style.left, k = S.style.top, j = S.style.right, P = S.style.bottom, D = S.style.overflow, R = V(V({}, a[r]), o), F = E.createElement("div");
      (v = S.parentElement) === null || v === void 0 || v.appendChild(F), F.style.left = "".concat(S.offsetLeft, "px"), F.style.top = "".concat(S.offsetTop, "px"), F.style.position = _, F.style.height = "".concat(S.offsetHeight, "px"), F.style.width = "".concat(S.offsetWidth, "px"), S.style.left = "0", S.style.top = "0", S.style.right = "auto", S.style.bottom = "auto", S.style.overflow = "hidden";
      var N;
      if (Array.isArray(n))
        N = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var H, B, $ = n.getBoundingClientRect();
        $.x = (H = $.x) !== null && H !== void 0 ? H : $.left, $.y = (B = $.y) !== null && B !== void 0 ? B : $.top, N = {
          x: $.x,
          y: $.y,
          width: $.width,
          height: $.height
        };
      }
      var L = S.getBoundingClientRect(), W = T.getComputedStyle(S), U = W.height, te = W.width;
      L.x = (w = L.x) !== null && w !== void 0 ? w : L.left, L.y = (x = L.y) !== null && x !== void 0 ? x : L.top;
      var X = E.documentElement, J = X.clientWidth, ee = X.clientHeight, ae = X.scrollWidth, se = X.scrollHeight, fe = X.scrollTop, oe = X.scrollLeft, ye = L.height, G = L.width, ue = N.height, Y = N.width, le = {
        left: 0,
        top: 0,
        right: J,
        bottom: ee
      }, ve = {
        left: -oe,
        top: -fe,
        right: ae - oe,
        bottom: se - fe
      }, be = R.htmlRegion, Te = "visible", pe = "visibleFirst";
      be !== "scroll" && be !== pe && (be = Te);
      var _e = be === pe, Ce = hf(ve, f), re = hf(le, f), Pe = be === Te ? re : Ce, Le = _e ? re : Pe;
      S.style.left = "auto", S.style.top = "auto", S.style.right = "0", S.style.bottom = "0";
      var pt = S.getBoundingClientRect();
      S.style.left = M, S.style.top = k, S.style.right = j, S.style.bottom = P, S.style.overflow = D, (C = S.parentElement) === null || C === void 0 || C.removeChild(F);
      var Ke = yo(Math.round(G / parseFloat(te) * 1e3) / 1e3), Je = yo(Math.round(ye / parseFloat(U) * 1e3) / 1e3);
      if (Ke === 0 || Je === 0 || po(n) && !WO(n))
        return;
      var xt = R.offset, We = R.targetOffset, Ve = gf(L, xt), Ne = Q(Ve, 2), Ee = Ne[0], Qe = Ne[1], de = gf(N, We), we = Q(de, 2), ct = we[0], Dn = we[1];
      N.x -= ct, N.y -= Dn;
      var fr = R.points || [], Ar = Q(fr, 2), Na = Ar[0], Fr = Ar[1], ln = vf(Fr), Rt = vf(Na), ut = Yr(N, ln), Nn = Yr(L, Rt), Tt = V({}, R), Ue = ut.x - Nn.x + Ee, ze = ut.y - Nn.y + Qe, Ct = Kt(Ue, ze), Sn = Kt(Ue, ze, re), Lt = Yr(N, ["t", "l"]), it = Yr(L, ["t", "l"]), Zn = Yr(N, ["b", "r"]), kn = Yr(L, ["b", "r"]), Ye = R.overflow || {}, dt = Ye.adjustX, Ft = Ye.adjustY, Pt = Ye.shiftX, xn = Ye.shiftY, jr = function(An) {
        return typeof An == "boolean" ? An : An >= 0;
      }, cn, Gt, Cn, un;
      Vr();
      var Ir = jr(Ft), et = Rt[0] === ln[0];
      if (Ir && Rt[0] === "t" && (Gt > Le.bottom || p.current.bt)) {
        var hr = ze;
        et ? hr -= ye - ue : hr = Lt.y - kn.y - Qe;
        var jo = Kt(Ue, hr), bs = Kt(Ue, hr, re);
        // Of course use larger one
        jo > Ct || jo === Ct && (!_e || // Choose recommend one
        bs >= Sn) ? (p.current.bt = !0, ze = hr, Qe = -Qe, Tt.points = [nr(Rt, 0), nr(ln, 0)]) : p.current.bt = !1;
      }
      if (Ir && Rt[0] === "b" && (cn < Le.top || p.current.tb)) {
        var mr = ze;
        et ? mr += ye - ue : mr = Zn.y - it.y - Qe;
        var Io = Kt(Ue, mr), ws = Kt(Ue, mr, re);
        // Of course use larger one
        Io > Ct || Io === Ct && (!_e || // Choose recommend one
        ws >= Sn) ? (p.current.tb = !0, ze = mr, Qe = -Qe, Tt.points = [nr(Rt, 0), nr(ln, 0)]) : p.current.tb = !1;
      }
      var Lo = jr(dt), Vo = Rt[1] === ln[1];
      if (Lo && Rt[1] === "l" && (un > Le.right || p.current.rl)) {
        var gr = Ue;
        Vo ? gr -= G - Y : gr = Lt.x - kn.x - Ee;
        var vr = Kt(gr, ze), ka = Kt(gr, ze, re);
        // Of course use larger one
        vr > Ct || vr === Ct && (!_e || // Choose recommend one
        ka >= Sn) ? (p.current.rl = !0, Ue = gr, Ee = -Ee, Tt.points = [nr(Rt, 1), nr(ln, 1)]) : p.current.rl = !1;
      }
      if (Lo && Rt[1] === "r" && (Cn < Le.left || p.current.lr)) {
        var pr = Ue;
        Vo ? pr += G - Y : pr = Zn.x - it.x - Ee;
        var Aa = Kt(pr, ze), Lr = Kt(pr, ze, re);
        // Of course use larger one
        Aa > Ct || Aa === Ct && (!_e || // Choose recommend one
        Lr >= Sn) ? (p.current.lr = !0, Ue = pr, Ee = -Ee, Tt.points = [nr(Rt, 1), nr(ln, 1)]) : p.current.lr = !1;
      }
      Vr();
      var dn = Pt === !0 ? 0 : Pt;
      typeof dn == "number" && (Cn < re.left && (Ue -= Cn - re.left - Ee, N.x + Y < re.left + dn && (Ue += N.x - re.left + Y - dn)), un > re.right && (Ue -= un - re.right - Ee, N.x > re.right - dn && (Ue += N.x - re.right + dn)));
      var Jn = xn === !0 ? 0 : xn;
      typeof Jn == "number" && (cn < re.top && (ze -= cn - re.top - Qe, N.y + ue < re.top + Jn && (ze += N.y - re.top + ue - Jn)), Gt > re.bottom && (ze -= Gt - re.bottom - Qe, N.y > re.bottom - Jn && (ze += N.y - re.bottom + Jn)));
      var Qn = L.x + Ue, er = Qn + G, Fa = L.y + ze, Ss = Fa + ye, zo = N.x, Ho = zo + Y, Bo = N.y, xs = Bo + ue, Cs = Math.max(Qn, zo), Wo = Math.min(er, Ho), Es = (Cs + Wo) / 2, _s = Es - Qn, Uo = Math.max(Fa, Bo), Os = Math.min(Ss, xs), Rs = (Uo + Os) / 2, Ts = Rs - Fa;
      i == null || i(t, Tt);
      var En = pt.right - L.x - (Ue + L.width), ja = pt.bottom - L.y - (ze + L.height);
      Ke === 1 && (Ue = Math.floor(Ue), En = Math.floor(En)), Je === 1 && (ze = Math.floor(ze), ja = Math.floor(ja));
      var Ps = {
        ready: !0,
        offsetX: Ue / Ke,
        offsetY: ze / Je,
        offsetR: En / Ke,
        offsetB: ja / Je,
        arrowX: _s / Ke,
        arrowY: Ts / Je,
        scaleX: Ke,
        scaleY: Je,
        align: Tt
      };
      u(Ps);
    }
  }), h = function() {
    d.current += 1;
    var w = d.current;
    Promise.resolve().then(function() {
      d.current === w && y();
    });
  }, g = function() {
    u(function(w) {
      return V(V({}, w), {}, {
        ready: !1
      });
    });
  };
  return at(g, [r]), at(function() {
    e || g();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, h];
}
function GO(e, t, n, r, a) {
  at(function() {
    if (e && t && n) {
      let d = function() {
        r(), a();
      };
      var o = t, i = n, s = mc(o), l = mc(i), c = Do(i), u = new Set([c].concat(me(s), me(l)));
      return u.forEach(function(f) {
        f.addEventListener("scroll", d, {
          passive: !0
        });
      }), c.addEventListener("resize", d, {
        passive: !0
      }), r(), function() {
        u.forEach(function(f) {
          f.removeEventListener("scroll", d), c.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, n]);
}
function KO(e, t, n, r, a, o, i, s) {
  var l = m.useRef(e);
  l.current = e;
  var c = m.useRef(!1);
  m.useEffect(function() {
    if (t && r && (!a || o)) {
      var d = function() {
        c.current = !1;
      }, f = function(x) {
        var C;
        l.current && !i(((C = x.composedPath) === null || C === void 0 || (C = C.call(x)) === null || C === void 0 ? void 0 : C[0]) || x.target) && !c.current && s(!1);
      }, p = Do(r);
      p.addEventListener("pointerdown", d, !0), p.addEventListener("mousedown", f, !0), p.addEventListener("contextmenu", f, !0);
      var b = Vi(n);
      if (b && (b.addEventListener("mousedown", f, !0), b.addEventListener("contextmenu", f, !0)), process.env.NODE_ENV !== "production") {
        var y, h, g = n == null || (y = n.getRootNode) === null || y === void 0 ? void 0 : y.call(n), v = (h = r.getRootNode) === null || h === void 0 ? void 0 : h.call(r);
        da(g === v, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        p.removeEventListener("pointerdown", d, !0), p.removeEventListener("mousedown", f, !0), p.removeEventListener("contextmenu", f, !0), b && (b.removeEventListener("mousedown", f, !0), b.removeEventListener("contextmenu", f, !0));
      };
    }
  }, [t, n, r, a, o]);
  function u() {
    c.current = !0;
  }
  return u;
}
var XO = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function ZO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ou, t = /* @__PURE__ */ m.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, s = n.action, l = s === void 0 ? "hover" : s, c = n.showAction, u = n.hideAction, d = n.popupVisible, f = n.defaultPopupVisible, p = n.onPopupVisibleChange, b = n.afterPopupVisibleChange, y = n.mouseEnterDelay, h = n.mouseLeaveDelay, g = h === void 0 ? 0.1 : h, v = n.focusDelay, w = n.blurDelay, x = n.mask, C = n.maskClosable, S = C === void 0 ? !0 : C, E = n.getPopupContainer, T = n.forceRender, O = n.autoDestroy, _ = n.destroyPopupOnHide, M = n.popup, k = n.popupClassName, j = n.popupStyle, P = n.popupPlacement, D = n.builtinPlacements, R = D === void 0 ? {} : D, F = n.popupAlign, N = n.zIndex, H = n.stretch, B = n.getPopupClassNameFromAlign, $ = n.fresh, L = n.alignPoint, W = n.onPopupClick, U = n.onPopupAlign, te = n.arrow, X = n.popupMotion, J = n.maskMotion, ee = n.popupTransitionName, ae = n.popupAnimation, se = n.maskTransitionName, fe = n.maskAnimation, oe = n.className, ye = n.getTriggerDOMNode, G = At(n, XO), ue = O || _ || !1, Y = m.useState(!1), le = Q(Y, 2), ve = le[0], be = le[1];
    at(function() {
      be(VO());
    }, []);
    var Te = m.useRef({}), pe = m.useContext(uf), _e = m.useMemo(function() {
      return {
        registerSubPopup: function(Se, tt) {
          Te.current[Se] = tt, pe == null || pe.registerSubPopup(Se, tt);
        }
      };
    }, [pe]), Ce = lv(), re = m.useState(null), Pe = Q(re, 2), Le = Pe[0], pt = Pe[1], Ke = m.useRef(null), Je = jt(function(ce) {
      Ke.current = ce, po(ce) && Le !== ce && pt(ce), pe == null || pe.registerSubPopup(Ce, ce);
    }), xt = m.useState(null), We = Q(xt, 2), Ve = We[0], Ne = We[1], Ee = m.useRef(null), Qe = jt(function(ce) {
      po(ce) && Ve !== ce && (Ne(ce), Ee.current = ce);
    }), de = m.Children.only(i), we = (de == null ? void 0 : de.props) || {}, ct = {}, Dn = jt(function(ce) {
      var Se, tt, yt = Ve;
      return (yt == null ? void 0 : yt.contains(ce)) || ((Se = Vi(yt)) === null || Se === void 0 ? void 0 : Se.host) === ce || ce === yt || (Le == null ? void 0 : Le.contains(ce)) || ((tt = Vi(Le)) === null || tt === void 0 ? void 0 : tt.host) === ce || ce === Le || Object.values(Te.current).some(function(st) {
        return (st == null ? void 0 : st.contains(ce)) || ce === st;
      });
    }), fr = ff(o, X, ae, ee), Ar = ff(o, J, fe, se), Na = m.useState(f || !1), Fr = Q(Na, 2), ln = Fr[0], Rt = Fr[1], ut = d ?? ln, Nn = jt(function(ce) {
      d === void 0 && Rt(ce);
    });
    at(function() {
      Rt(d || !1);
    }, [d]);
    var Tt = m.useRef(ut);
    Tt.current = ut;
    var Ue = m.useRef([]);
    Ue.current = [];
    var ze = jt(function(ce) {
      var Se;
      Nn(ce), ((Se = Ue.current[Ue.current.length - 1]) !== null && Se !== void 0 ? Se : ut) !== ce && (Ue.current.push(ce), p == null || p(ce));
    }), Ct = m.useRef(), Sn = function() {
      clearTimeout(Ct.current);
    }, Lt = function(Se) {
      var tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Sn(), tt === 0 ? ze(Se) : Ct.current = setTimeout(function() {
        ze(Se);
      }, tt * 1e3);
    };
    m.useEffect(function() {
      return Sn;
    }, []);
    var it = m.useState(!1), Zn = Q(it, 2), kn = Zn[0], Ye = Zn[1];
    at(function(ce) {
      (!ce || ut) && Ye(!0);
    }, [ut]);
    var dt = m.useState(null), Ft = Q(dt, 2), Pt = Ft[0], xn = Ft[1], jr = m.useState(null), cn = Q(jr, 2), Gt = cn[0], Cn = cn[1], un = function(Se) {
      Cn([Se.clientX, Se.clientY]);
    }, Ir = qO(ut, Le, L && Gt !== null ? Gt : Ve, P, R, F, U), et = Q(Ir, 11), hr = et[0], jo = et[1], bs = et[2], mr = et[3], Io = et[4], ws = et[5], Lo = et[6], Vo = et[7], gr = et[8], vr = et[9], ka = et[10], pr = BO(ve, l, c, u), Aa = Q(pr, 2), Lr = Aa[0], dn = Aa[1], Jn = Lr.has("click"), Qn = dn.has("click") || dn.has("contextMenu"), er = jt(function() {
      kn || ka();
    }), Fa = function() {
      Tt.current && L && Qn && Lt(!1);
    };
    GO(ut, Ve, Le, er, Fa), at(function() {
      er();
    }, [Gt, P]), at(function() {
      ut && !(R != null && R[P]) && er();
    }, [JSON.stringify(F)]);
    var Ss = m.useMemo(function() {
      var ce = YO(R, o, vr, L);
      return he(ce, B == null ? void 0 : B(vr));
    }, [vr, B, R, o, L]);
    m.useImperativeHandle(r, function() {
      return {
        nativeElement: Ee.current,
        popupElement: Ke.current,
        forceAlign: er
      };
    });
    var zo = m.useState(0), Ho = Q(zo, 2), Bo = Ho[0], xs = Ho[1], Cs = m.useState(0), Wo = Q(Cs, 2), Es = Wo[0], _s = Wo[1], Uo = function() {
      if (H && Ve) {
        var Se = Ve.getBoundingClientRect();
        xs(Se.width), _s(Se.height);
      }
    }, Os = function() {
      Uo(), er();
    }, Rs = function(Se) {
      Ye(!1), ka(), b == null || b(Se);
    }, Ts = function() {
      return new Promise(function(Se) {
        Uo(), xn(function() {
          return Se;
        });
      });
    };
    at(function() {
      Pt && (ka(), Pt(), xn(null));
    }, [Pt]);
    function En(ce, Se, tt, yt) {
      ct[ce] = function(st) {
        var qo;
        yt == null || yt(st), Lt(Se, tt);
        for (var Ns = arguments.length, ku = new Array(Ns > 1 ? Ns - 1 : 0), Go = 1; Go < Ns; Go++)
          ku[Go - 1] = arguments[Go];
        (qo = we[ce]) === null || qo === void 0 || qo.call.apply(qo, [we, st].concat(ku));
      };
    }
    (Jn || Qn) && (ct.onClick = function(ce) {
      var Se;
      Tt.current && Qn ? Lt(!1) : !Tt.current && Jn && (un(ce), Lt(!0));
      for (var tt = arguments.length, yt = new Array(tt > 1 ? tt - 1 : 0), st = 1; st < tt; st++)
        yt[st - 1] = arguments[st];
      (Se = we.onClick) === null || Se === void 0 || Se.call.apply(Se, [we, ce].concat(yt));
    });
    var ja = KO(ut, Qn, Ve, Le, x, S, Dn, Lt), Ps = Lr.has("hover"), Kt = dn.has("hover"), Vr, Ia;
    Ps && (En("onMouseEnter", !0, y, function(ce) {
      un(ce);
    }), En("onPointerEnter", !0, y, function(ce) {
      un(ce);
    }), Vr = function(Se) {
      (ut || kn) && Le !== null && Le !== void 0 && Le.contains(Se.target) && Lt(!0, y);
    }, L && (ct.onMouseMove = function(ce) {
      var Se;
      (Se = we.onMouseMove) === null || Se === void 0 || Se.call(we, ce);
    })), Kt && (En("onMouseLeave", !1, g), En("onPointerLeave", !1, g), Ia = function() {
      Lt(!1, g);
    }), Lr.has("focus") && En("onFocus", !0, v), dn.has("focus") && En("onBlur", !1, w), Lr.has("contextMenu") && (ct.onContextMenu = function(ce) {
      var Se;
      Tt.current && dn.has("contextMenu") ? Lt(!1) : (un(ce), Lt(!0)), ce.preventDefault();
      for (var tt = arguments.length, yt = new Array(tt > 1 ? tt - 1 : 0), st = 1; st < tt; st++)
        yt[st - 1] = arguments[st];
      (Se = we.onContextMenu) === null || Se === void 0 || Se.call.apply(Se, [we, ce].concat(yt));
    }), oe && (ct.className = he(we.className, oe));
    var An = m.useRef(!1);
    An.current || (An.current = T || ut || kn);
    var tr = V(V({}, we), ct), La = {}, Yo = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Yo.forEach(function(ce) {
      G[ce] && (La[ce] = function() {
        for (var Se, tt = arguments.length, yt = new Array(tt), st = 0; st < tt; st++)
          yt[st] = arguments[st];
        (Se = tr[ce]) === null || Se === void 0 || Se.call.apply(Se, [tr].concat(yt)), G[ce].apply(G, yt);
      });
    });
    var Ms = /* @__PURE__ */ m.cloneElement(de, V(V({}, tr), La)), $s = {
      x: ws,
      y: Lo
    }, Ds = te ? V({}, te !== !0 ? te : {}) : null;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Da, {
      disabled: !ut,
      ref: Qe,
      onResize: Os
    }, /* @__PURE__ */ m.createElement(dv, {
      getTriggerDOMNode: ye
    }, Ms)), An.current && /* @__PURE__ */ m.createElement(uf.Provider, {
      value: _e
    }, /* @__PURE__ */ m.createElement(uv, {
      portal: e,
      ref: Je,
      prefixCls: o,
      popup: M,
      className: he(k, Ss),
      style: j,
      target: Ve,
      onMouseEnter: Vr,
      onMouseLeave: Ia,
      onPointerEnter: Vr,
      zIndex: N,
      open: ut,
      keepDom: kn,
      fresh: $,
      onClick: W,
      onPointerDownCapture: ja,
      mask: x,
      motion: fr,
      maskMotion: Ar,
      onVisibleChanged: Rs,
      onPrepare: Ts,
      forceRender: T,
      autoDestroy: ue,
      getPopupContainer: E,
      align: vr,
      arrow: Ds,
      arrowPos: $s,
      ready: hr,
      offsetX: jo,
      offsetY: bs,
      offsetR: mr,
      offsetB: Io,
      onAlign: er,
      stretch: H,
      targetWidth: Bo / Vo,
      targetHeight: Es / gr
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const JO = ZO(Ou);
var qr = {
  shiftX: 64,
  adjustY: 1
}, Gr = {
  adjustX: 1,
  shiftY: !0
}, Zt = [0, 0], QO = {
  left: {
    points: ["cr", "cl"],
    overflow: Gr,
    offset: [-4, 0],
    targetOffset: Zt
  },
  right: {
    points: ["cl", "cr"],
    overflow: Gr,
    offset: [4, 0],
    targetOffset: Zt
  },
  top: {
    points: ["bc", "tc"],
    overflow: qr,
    offset: [0, -4],
    targetOffset: Zt
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: qr,
    offset: [0, 4],
    targetOffset: Zt
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: qr,
    offset: [0, -4],
    targetOffset: Zt
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Gr,
    offset: [-4, 0],
    targetOffset: Zt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: qr,
    offset: [0, -4],
    targetOffset: Zt
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Gr,
    offset: [4, 0],
    targetOffset: Zt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: qr,
    offset: [0, 4],
    targetOffset: Zt
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Gr,
    offset: [4, 0],
    targetOffset: Zt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: qr,
    offset: [0, 4],
    targetOffset: Zt
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Gr,
    offset: [-4, 0],
    targetOffset: Zt
  }
}, eR = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], tR = function(t, n) {
  var r = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, l = t.mouseLeaveDelay, c = l === void 0 ? 0.1 : l, u = t.overlayStyle, d = t.prefixCls, f = d === void 0 ? "rc-tooltip" : d, p = t.children, b = t.onVisibleChange, y = t.afterVisibleChange, h = t.transitionName, g = t.animation, v = t.motion, w = t.placement, x = w === void 0 ? "right" : w, C = t.align, S = C === void 0 ? {} : C, E = t.destroyTooltipOnHide, T = E === void 0 ? !1 : E, O = t.defaultVisible, _ = t.getTooltipContainer, M = t.overlayInnerStyle;
  t.arrowContent;
  var k = t.overlay, j = t.id, P = t.showArrow, D = P === void 0 ? !0 : P, R = t.classNames, F = t.styles, N = At(t, eR), H = lv(j), B = Fe(null);
  Rc(n, function() {
    return B.current;
  });
  var $ = V({}, N);
  "visible" in t && ($.popupVisible = t.visible);
  var L = function() {
    return /* @__PURE__ */ m.createElement(iv, {
      key: "content",
      prefixCls: f,
      id: H,
      bodyClassName: R == null ? void 0 : R.body,
      overlayInnerStyle: V(V({}, M), F == null ? void 0 : F.body)
    }, k);
  }, W = function() {
    var te = m.Children.only(p), X = (te == null ? void 0 : te.props) || {}, J = V(V({}, X), {}, {
      "aria-describedby": k ? H : null
    });
    return /* @__PURE__ */ m.cloneElement(p, J);
  };
  return /* @__PURE__ */ m.createElement(JO, De({
    popupClassName: he(r, R == null ? void 0 : R.root),
    prefixCls: f,
    popup: L,
    action: o,
    builtinPlacements: QO,
    popupPlacement: x,
    ref: B,
    popupAlign: S,
    getPopupContainer: _,
    onPopupVisibleChange: b,
    afterPopupVisibleChange: y,
    popupTransitionName: h,
    popupAnimation: g,
    popupMotion: v,
    defaultPopupVisible: O,
    autoDestroy: T,
    mouseLeaveDelay: c,
    popupStyle: V(V({}, u), F == null ? void 0 : F.root),
    mouseEnterDelay: s,
    arrow: D
  }, $), W());
};
const nR = /* @__PURE__ */ xa(tR);
function fv(e, t) {
  this.v = e, this.k = t;
}
function Dt(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch {
    a = 0;
  }
  Dt = function(i, s, l, c) {
    function u(d, f) {
      Dt(i, d, function(p) {
        return this._invoke(d, f, p);
      });
    }
    s ? a ? a(i, s, {
      value: l,
      enumerable: !c,
      configurable: !c,
      writable: !c
    }) : i[s] = l : (u("next", 0), u("throw", 1), u("return", 2));
  }, Dt(e, t, n, r);
}
function Ru() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", a = n.toStringTag || "@@toStringTag";
  function o(p, b, y, h) {
    var g = b && b.prototype instanceof s ? b : s, v = Object.create(g.prototype);
    return Dt(v, "_invoke", (function(w, x, C) {
      var S, E, T, O = 0, _ = C || [], M = !1, k = {
        p: 0,
        n: 0,
        v: e,
        a: j,
        f: j.bind(e, 4),
        d: function(D, R) {
          return S = D, E = 0, T = e, k.n = R, i;
        }
      };
      function j(P, D) {
        for (E = P, T = D, t = 0; !M && O && !R && t < _.length; t++) {
          var R, F = _[t], N = k.p, H = F[2];
          P > 3 ? (R = H === D) && (T = F[(E = F[4]) ? 5 : (E = 3, 3)], F[4] = F[5] = e) : F[0] <= N && ((R = P < 2 && N < F[1]) ? (E = 0, k.v = D, k.n = F[1]) : N < H && (R = P < 3 || F[0] > D || D > H) && (F[4] = P, F[5] = D, k.n = H, E = 0));
        }
        if (R || P > 1) return i;
        throw M = !0, D;
      }
      return function(P, D, R) {
        if (O > 1) throw TypeError("Generator is already running");
        for (M && D === 1 && j(D, R), E = D, T = R; (t = E < 2 ? e : T) || !M; ) {
          S || (E ? E < 3 ? (E > 1 && (k.n = -1), j(E, T)) : k.n = T : k.v = T);
          try {
            if (O = 2, S) {
              if (E || (P = "next"), t = S[P]) {
                if (!(t = t.call(S, T))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                T = t.value, E < 2 && (E = 0);
              } else E === 1 && (t = S.return) && t.call(S), E < 2 && (T = TypeError("The iterator does not provide a '" + P + "' method"), E = 1);
              S = e;
            } else if ((t = (M = k.n < 0) ? T : w.call(x, k)) !== i) break;
          } catch (F) {
            S = e, E = 1, T = F;
          } finally {
            O = 1;
          }
        }
        return {
          value: t,
          done: M
        };
      };
    })(p, y, h), !0), v;
  }
  var i = {};
  function s() {
  }
  function l() {
  }
  function c() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (Dt(t = {}, r, function() {
    return this;
  }), t), d = c.prototype = s.prototype = Object.create(u);
  function f(p) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(p, c) : (p.__proto__ = c, Dt(p, a, "GeneratorFunction")), p.prototype = Object.create(d), p;
  }
  return l.prototype = c, Dt(d, "constructor", c), Dt(c, "constructor", l), l.displayName = "GeneratorFunction", Dt(c, a, "GeneratorFunction"), Dt(d), Dt(d, a, "Generator"), Dt(d, r, function() {
    return this;
  }), Dt(d, "toString", function() {
    return "[object Generator]";
  }), (Ru = function() {
    return {
      w: o,
      m: f
    };
  })();
}
function Ui(e, t) {
  function n(a, o, i, s) {
    try {
      var l = e[a](o), c = l.value;
      return c instanceof fv ? t.resolve(c.v).then(function(u) {
        n("next", u, i, s);
      }, function(u) {
        n("throw", u, i, s);
      }) : t.resolve(c).then(function(u) {
        l.value = u, i(l);
      }, function(u) {
        return n("throw", u, i, s);
      });
    } catch (u) {
      s(u);
    }
  }
  var r;
  this.next || (Dt(Ui.prototype), Dt(Ui.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Dt(this, "_invoke", function(a, o, i) {
    function s() {
      return new t(function(l, c) {
        n(a, i, l, c);
      });
    }
    return r = r ? r.then(s, s) : s();
  }, !0);
}
function hv(e, t, n, r, a) {
  return new Ui(Ru().w(e, t, n, r), a || Promise);
}
function rR(e, t, n, r, a) {
  var o = hv(e, t, n, r, a);
  return o.next().then(function(i) {
    return i.done ? i.value : o.next();
  });
}
function aR(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function a() {
    for (; n.length; ) if ((r = n.pop()) in t) return a.value = r, a.done = !1, a;
    return a.done = !0, a;
  };
}
function pf(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(xe(e) + " is not iterable");
}
function nn() {
  var e = Ru(), t = e.m(nn), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function r(i) {
    var s = typeof i == "function" && i.constructor;
    return !!s && (s === n || (s.displayName || s.name) === "GeneratorFunction");
  }
  var a = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function o(i) {
    var s, l;
    return function(c) {
      s || (s = {
        stop: function() {
          return l(c.a, 2);
        },
        catch: function() {
          return c.v;
        },
        abrupt: function(d, f) {
          return l(c.a, a[d], f);
        },
        delegateYield: function(d, f, p) {
          return s.resultName = f, l(c.d, pf(d), p);
        },
        finish: function(d) {
          return l(c.f, d);
        }
      }, l = function(d, f, p) {
        c.p = s.prev, c.n = s.next;
        try {
          return d(f, p);
        } finally {
          s.next = c.n;
        }
      }), s.resultName && (s[s.resultName] = c.v, s.resultName = void 0), s.sent = c.v, s.next = c.n;
      try {
        return i.call(this, s);
      } finally {
        c.p = s.prev, c.n = s.next;
      }
    };
  }
  return (nn = function() {
    return {
      wrap: function(l, c, u, d) {
        return e.w(o(l), c, u, d && d.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(l, c) {
        return new fv(l, c);
      },
      AsyncIterator: Ui,
      async: function(l, c, u, d, f) {
        return (r(c) ? hv : rR)(o(l), c, u, d, f);
      },
      keys: aR,
      values: pf
    };
  })();
}
function yf(e, t, n, r, a, o, i) {
  try {
    var s = e[o](i), l = s.value;
  } catch (c) {
    return void n(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(r, a);
}
function No(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(l) {
        yf(o, r, a, i, s, "next", l);
      }
      function s(l) {
        yf(o, r, a, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var xr = "RC_FORM_INTERNAL_HOOKS", qe = function() {
  rt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, wa = /* @__PURE__ */ m.createContext({
  getFieldValue: qe,
  getFieldsValue: qe,
  getFieldError: qe,
  getFieldWarning: qe,
  getFieldsError: qe,
  isFieldsTouched: qe,
  isFieldTouched: qe,
  isFieldValidating: qe,
  isFieldsValidating: qe,
  resetFields: qe,
  setFields: qe,
  setFieldValue: qe,
  setFieldsValue: qe,
  validateFields: qe,
  submit: qe,
  getInternalHooks: function() {
    return qe(), {
      dispatch: qe,
      initEntityValue: qe,
      registerField: qe,
      useSubscribe: qe,
      setInitialValues: qe,
      destroyForm: qe,
      setCallbacks: qe,
      registerWatch: qe,
      getFields: qe,
      setValidateMessages: qe,
      setPreserve: qe,
      getInitialValue: qe
    };
  }
}), Yi = /* @__PURE__ */ m.createContext(null);
function gc(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function oR(e) {
  return e && !!e._init;
}
function vc() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      tel: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var pc = vc();
function iR(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function sR(e, t, n) {
  if (gu()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var a = new (e.bind.apply(e, r))();
  return n && uo(a, n.prototype), a;
}
function yc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return yc = function(r) {
    if (r === null || !iR(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, a);
    }
    function a() {
      return sR(r, arguments, fo(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), uo(a, r);
  }, yc(e);
}
var lR = /%[sdj%]/g, mv = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (mv = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function bc(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Ut(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(lR, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function cR(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern" || e === "tel";
}
function St(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || cR(t) && typeof e == "string" && !e);
}
function uR(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(s) {
    r.push.apply(r, me(s || [])), a++, a === o && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function bf(e, t, n) {
  var r = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < a ? t(e[s], o) : n([]);
  }
  o([]);
}
function dR(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, me(e[n] || []));
  }), t;
}
var wf = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r, a) {
    var o;
    return _t(this, n), o = t.call(this, "Async Validation Error"), I(Re(o), "errors", void 0), I(Re(o), "fields", void 0), o.errors = r, o.fields = a, o;
  }
  return Ot(n);
})(/* @__PURE__ */ yc(Error));
function fR(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(f, p) {
      var b = function(g) {
        return r(g), g.length ? p(new wf(g, bc(g))) : f(a);
      }, y = dR(e);
      bf(y, n, b);
    });
    return o.catch(function(f) {
      return f;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, u = [], d = new Promise(function(f, p) {
    var b = function(h) {
      if (u.push.apply(u, h), c++, c === l)
        return r(u), u.length ? p(new wf(u, bc(u))) : f(a);
    };
    s.length || (r(u), f(a)), s.forEach(function(y) {
      var h = e[y];
      i.indexOf(y) !== -1 ? bf(h, n, b) : uR(h, n, b);
    });
  });
  return d.catch(function(f) {
    return f;
  }), d;
}
function hR(e) {
  return !!(e && e.message !== void 0);
}
function mR(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Sf(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = mR(t, e.fullFields) : r = t[n.field || e.fullField], hR(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function xf(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        xe(r) === "object" && xe(e[n]) === "object" ? e[n] = V(V({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var Kr = "enum", gR = function(t, n, r, a, o) {
  t[Kr] = Array.isArray(t[Kr]) ? t[Kr] : [], t[Kr].indexOf(n) === -1 && a.push(Ut(o.messages[Kr], t.fullField, t[Kr].join(", ")));
}, vR = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(Ut(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(Ut(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, pR = function(t, n, r, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, d = null, f = typeof n == "number", p = typeof n == "string", b = Array.isArray(n);
  if (f ? d = "number" : p ? d = "string" : b && (d = "array"), !d)
    return !1;
  b && (u = n.length), p && (u = n.replace(c, "_").length), i ? u !== t.len && a.push(Ut(o.messages[d].len, t.fullField, t.len)) : s && !l && u < t.min ? a.push(Ut(o.messages[d].min, t.fullField, t.min)) : l && !s && u > t.max ? a.push(Ut(o.messages[d].max, t.fullField, t.max)) : s && l && (u < t.min || u > t.max) && a.push(Ut(o.messages[d].range, t.fullField, t.min, t.max));
}, gv = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || St(n, i || t.type)) && a.push(Ut(o.messages.required, t.fullField));
}, li;
const yR = (function() {
  if (li)
    return li;
  var e = "[a-fA-F\\d:]", t = function(S) {
    return S && S.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], o = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(a.join("|"), ")").concat(o), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), l = new RegExp("^".concat(n, "$")), c = new RegExp("^".concat(i, "$")), u = function(S) {
    return S && S.exact ? s : new RegExp("(?:".concat(t(S)).concat(n).concat(t(S), ")|(?:").concat(t(S)).concat(i).concat(t(S), ")"), "g");
  };
  u.v4 = function(C) {
    return C && C.exact ? l : new RegExp("".concat(t(C)).concat(n).concat(t(C)), "g");
  }, u.v6 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(t(C)).concat(i).concat(t(C)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", p = u.v4().source, b = u.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", w = '(?:[/?#][^\\s"]*)?', x = "(?:".concat(d, "|www\\.)").concat(f, "(?:localhost|").concat(p, "|").concat(b, "|").concat(y).concat(h).concat(g, ")").concat(v).concat(w);
  return li = new RegExp("(?:^".concat(x, "$)"), "i"), li;
});
var rl = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Ga = {
  integer: function(t) {
    return Ga.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ga.number(t) && !Ga.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return xe(t) === "object" && !Ga.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(rl.email);
  },
  tel: function(t) {
    return typeof t == "string" && t.length <= 32 && !!t.match(rl.tel);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(yR());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(rl.hex);
  }
}, bR = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    gv(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Ga[s](n) || a.push(Ut(o.messages.types[s], t.fullField, t.type)) : s && xe(n) !== t.type && a.push(Ut(o.messages.types[s], t.fullField, t.type));
}, wR = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(Ut(o.messages.whitespace, t.fullField));
};
const $e = {
  required: gv,
  whitespace: wR,
  type: bR,
  range: pR,
  enum: gR,
  pattern: vR
};
var SR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o);
  }
  r(i);
}, xR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    $e.required(t, n, a, i, o, "array"), n != null && ($e.type(t, n, a, i, o), $e.range(t, n, a, i, o));
  }
  r(i);
}, CR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), n !== void 0 && $e.type(t, n, a, i, o);
  }
  r(i);
}, ER = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n, "date") && !t.required)
      return r();
    if ($e.required(t, n, a, i, o), !St(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), $e.type(t, l, a, i, o), l && $e.range(t, l.getTime(), a, i, o);
    }
  }
  r(i);
}, _R = "enum", OR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), n !== void 0 && $e[_R](t, n, a, i, o);
  }
  r(i);
}, RR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), n !== void 0 && ($e.type(t, n, a, i, o), $e.range(t, n, a, i, o));
  }
  r(i);
}, TR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), n !== void 0 && ($e.type(t, n, a, i, o), $e.range(t, n, a, i, o));
  }
  r(i);
}, PR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), n !== void 0 && $e.type(t, n, a, i, o);
  }
  r(i);
}, MR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), n !== void 0 && ($e.type(t, n, a, i, o), $e.range(t, n, a, i, o));
  }
  r(i);
}, $R = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), n !== void 0 && $e.type(t, n, a, i, o);
  }
  r(i);
}, DR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n, "string") && !t.required)
      return r();
    $e.required(t, n, a, i, o), St(n, "string") || $e.pattern(t, n, a, i, o);
  }
  r(i);
}, NR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n) && !t.required)
      return r();
    $e.required(t, n, a, i, o), St(n) || $e.type(t, n, a, i, o);
  }
  r(i);
}, kR = function(t, n, r, a, o) {
  var i = [], s = Array.isArray(n) ? "array" : xe(n);
  $e.required(t, n, a, i, o, s), r(i);
}, AR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (St(n, "string") && !t.required)
      return r();
    $e.required(t, n, a, i, o, "string"), St(n, "string") || ($e.type(t, n, a, i, o), $e.range(t, n, a, i, o), $e.pattern(t, n, a, i, o), t.whitespace === !0 && $e.whitespace(t, n, a, i, o));
  }
  r(i);
}, ci = function(t, n, r, a, o) {
  var i = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (St(n, i) && !t.required)
      return r();
    $e.required(t, n, a, s, o, i), St(n, i) || $e.type(t, n, a, s, o);
  }
  r(s);
};
const Qa = {
  string: AR,
  method: PR,
  number: MR,
  boolean: CR,
  regexp: NR,
  integer: TR,
  float: RR,
  array: xR,
  object: $R,
  enum: OR,
  pattern: DR,
  date: ER,
  url: ci,
  hex: ci,
  email: ci,
  tel: ci,
  required: kR,
  any: SR
};
var ko = /* @__PURE__ */ (function() {
  function e(t) {
    _t(this, e), I(this, "rules", null), I(this, "_messages", pc), this.define(t);
  }
  return Ot(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (xe(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(a) {
        var o = n[a];
        r.rules[a] = Array.isArray(o) ? o : [o];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = xf(vc(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, s = a, l = o;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, i), Promise.resolve(i);
      function c(b) {
        var y = [], h = {};
        function g(w) {
          if (Array.isArray(w)) {
            var x;
            y = (x = y).concat.apply(x, me(w));
          } else
            y.push(w);
        }
        for (var v = 0; v < b.length; v++)
          g(b[v]);
        y.length ? (h = bc(y), l(y, h)) : l(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === pc && (u = vc()), xf(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, f = s.keys || Object.keys(this.rules);
      f.forEach(function(b) {
        var y = r.rules[b], h = i[b];
        y.forEach(function(g) {
          var v = g;
          typeof v.transform == "function" && (i === n && (i = V({}, i)), h = i[b] = v.transform(h), h != null && (v.type = v.type || (Array.isArray(h) ? "array" : xe(h)))), typeof v == "function" ? v = {
            validator: v
          } : v = V({}, v), v.validator = r.getValidationMethod(v), v.validator && (v.field = b, v.fullField = v.fullField || b, v.type = r.getType(v), d[b] = d[b] || [], d[b].push({
            rule: v,
            value: h,
            source: i,
            field: b
          }));
        });
      });
      var p = {};
      return fR(d, s, function(b, y) {
        var h = b.rule, g = (h.type === "object" || h.type === "array") && (xe(h.fields) === "object" || xe(h.defaultField) === "object");
        g = g && (h.required || !h.required && b.value), h.field = b.field;
        function v(E, T) {
          return V(V({}, T), {}, {
            fullField: "".concat(h.fullField, ".").concat(E),
            fullFields: h.fullFields ? [].concat(me(h.fullFields), [E]) : [E]
          });
        }
        function w() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], T = Array.isArray(E) ? E : [E];
          !s.suppressWarning && T.length && e.warning("async-validator:", T), T.length && h.message !== void 0 && h.message !== null && (T = [].concat(h.message));
          var O = T.map(Sf(h, i));
          if (s.first && O.length)
            return p[h.field] = 1, y(O);
          if (!g)
            y(O);
          else {
            if (h.required && !b.value)
              return h.message !== void 0 ? O = [].concat(h.message).map(Sf(h, i)) : s.error && (O = [s.error(h, Ut(s.messages.required, h.field))]), y(O);
            var _ = {};
            h.defaultField && Object.keys(b.value).map(function(j) {
              _[j] = h.defaultField;
            }), _ = V(V({}, _), b.rule.fields);
            var M = {};
            Object.keys(_).forEach(function(j) {
              var P = _[j], D = Array.isArray(P) ? P : [P];
              M[j] = D.map(v.bind(null, j));
            });
            var k = new e(M);
            k.messages(s.messages), b.rule.options && (b.rule.options.messages = s.messages, b.rule.options.error = s.error), k.validate(b.value, b.rule.options || s, function(j) {
              var P = [];
              O && O.length && P.push.apply(P, me(O)), j && j.length && P.push.apply(P, me(j)), y(P.length ? P : null);
            });
          }
        }
        var x;
        if (h.asyncValidator)
          x = h.asyncValidator(h, b.value, w, b.source, s);
        else if (h.validator) {
          try {
            x = h.validator(h, b.value, w, b.source, s);
          } catch (E) {
            var C, S;
            (C = (S = console).error) === null || C === void 0 || C.call(S, E), s.suppressValidatorError || setTimeout(function() {
              throw E;
            }, 0), w(E.message);
          }
          x === !0 ? w() : x === !1 ? w(typeof h.message == "function" ? h.message(h.fullField || h.field) : h.message || "".concat(h.fullField || h.field, " fails")) : x instanceof Array ? w(x) : x instanceof Error && w(x.message);
        }
        x && x.then && x.then(function() {
          return w();
        }, function(E) {
          return w(E);
        });
      }, function(b) {
        c(b);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Qa.hasOwnProperty(n.type))
        throw new Error(Ut("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), a = r.indexOf("message");
      return a !== -1 && r.splice(a, 1), r.length === 1 && r[0] === "required" ? Qa.required : Qa[this.getType(n)] || void 0;
    }
  }]), e;
})();
I(ko, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Qa[t] = n;
});
I(ko, "warning", mv);
I(ko, "messages", pc);
I(ko, "validators", Qa);
var Bt = "'${name}' is not a valid ${type}", vv = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: Bt,
    method: Bt,
    array: Bt,
    object: Bt,
    number: Bt,
    date: Bt,
    boolean: Bt,
    integer: Bt,
    float: Bt,
    regexp: Bt,
    email: Bt,
    url: Bt,
    hex: Bt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Cf = ko;
function FR(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Ef = "CODE_LOGIC_ERROR";
function wc(e, t, n, r, a) {
  return Sc.apply(this, arguments);
}
function Sc() {
  return Sc = No(/* @__PURE__ */ nn().mark(function e(t, n, r, a, o) {
    var i, s, l, c, u, d, f, p, b;
    return nn().wrap(function(h) {
      for (; ; ) switch (h.prev = h.next) {
        case 0:
          return i = V({}, r), delete i.ruleIndex, Cf.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (g) {
              return console.error(g), Promise.reject(Ef);
            }
          }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), c = new Cf(I({}, t, [i])), u = Qr(vv, a.validateMessages), c.messages(u), d = [], h.prev = 10, h.next = 13, Promise.resolve(c.validate(I({}, t, n), V({}, a)));
        case 13:
          h.next = 18;
          break;
        case 15:
          h.prev = 15, h.t0 = h.catch(10), h.t0.errors && (d = h.t0.errors.map(function(g, v) {
            var w = g.message, x = w === Ef ? u.default : w;
            return /* @__PURE__ */ m.isValidElement(x) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ m.cloneElement(x, {
                key: "error_".concat(v)
              })
            ) : x;
          }));
        case 18:
          if (!(!d.length && l && Array.isArray(n) && n.length > 0)) {
            h.next = 23;
            break;
          }
          return h.next = 21, Promise.all(n.map(function(g, v) {
            return wc("".concat(t, ".").concat(v), g, l, a, o);
          }));
        case 21:
          return f = h.sent, h.abrupt("return", f.reduce(function(g, v) {
            return [].concat(me(g), me(v));
          }, []));
        case 23:
          return p = V(V({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, o), b = d.map(function(g) {
            return typeof g == "string" ? FR(g, p) : g;
          }), h.abrupt("return", b);
        case 26:
        case "end":
          return h.stop();
      }
    }, e, null, [[10, 15]]);
  })), Sc.apply(this, arguments);
}
function jR(e, t, n, r, a, o) {
  var i = e.join("."), s = n.map(function(u, d) {
    var f = u.validator, p = V(V({}, u), {}, {
      ruleIndex: d
    });
    return f && (p.validator = function(b, y, h) {
      var g = !1, v = function() {
        for (var C = arguments.length, S = new Array(C), E = 0; E < C; E++)
          S[E] = arguments[E];
        Promise.resolve().then(function() {
          rt(!g, "Your validator function has already return a promise. `callback` will be ignored."), g || h.apply(void 0, S);
        });
      }, w = f(b, y, v);
      g = w && typeof w.then == "function" && typeof w.catch == "function", rt(g, "`callback` is deprecated. Please return a promise instead."), g && w.then(function() {
        h();
      }).catch(function(x) {
        h(x || " ");
      });
    }), p;
  }).sort(function(u, d) {
    var f = u.warningOnly, p = u.ruleIndex, b = d.warningOnly, y = d.ruleIndex;
    return !!f == !!b ? p - y : f ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ (function() {
      var u = No(/* @__PURE__ */ nn().mark(function d(f, p) {
        var b, y, h;
        return nn().wrap(function(v) {
          for (; ; ) switch (v.prev = v.next) {
            case 0:
              b = 0;
            case 1:
              if (!(b < s.length)) {
                v.next = 12;
                break;
              }
              return y = s[b], v.next = 5, wc(i, t, y, r, o);
            case 5:
              if (h = v.sent, !h.length) {
                v.next = 9;
                break;
              }
              return p([{
                errors: h,
                rule: y
              }]), v.abrupt("return");
            case 9:
              b += 1, v.next = 1;
              break;
            case 12:
              f([]);
            case 13:
            case "end":
              return v.stop();
          }
        }, d);
      }));
      return function(d, f) {
        return u.apply(this, arguments);
      };
    })());
  else {
    var c = s.map(function(u) {
      return wc(i, t, u, r, o).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    l = (a ? LR(c) : IR(c)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return l.catch(function(u) {
    return u;
  }), l;
}
function IR(e) {
  return xc.apply(this, arguments);
}
function xc() {
  return xc = No(/* @__PURE__ */ nn().mark(function e(t) {
    return nn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, me(a));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), xc.apply(this, arguments);
}
function LR(e) {
  return Cc.apply(this, arguments);
}
function Cc() {
  return Cc = No(/* @__PURE__ */ nn().mark(function e(t) {
    var n;
    return nn().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return n = 0, a.abrupt("return", new Promise(function(o) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && o([s]), n += 1, n === t.length && o([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, e);
  })), Cc.apply(this, arguments);
}
function ft(e) {
  return gc(e);
}
function _f(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = Tn(e, r);
    n = fn(n, r, a);
  }), n;
}
function la(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return pv(t, r, n);
  });
}
function pv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, a) {
    return e[a] === r;
  });
}
function VR(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || xe(e) !== "object" || xe(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return me(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function zR(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && xe(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Of(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], o = t - n;
  return o > 0 ? [].concat(me(e.slice(0, n)), [a], me(e.slice(n, t)), me(e.slice(t + 1, r))) : o < 0 ? [].concat(me(e.slice(0, t)), me(e.slice(t + 1, n + 1)), [a], me(e.slice(n + 1, r))) : e;
}
var HR = ["name"], Jt = [];
function al(e, t, n, r, a, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== a;
}
var Tu = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r) {
    var a;
    if (_t(this, n), a = t.call(this, r), I(Re(a), "state", {
      resetCount: 0
    }), I(Re(a), "cancelRegisterFunc", null), I(Re(a), "mounted", !1), I(Re(a), "touched", !1), I(Re(a), "dirty", !1), I(Re(a), "validatePromise", void 0), I(Re(a), "prevValidating", void 0), I(Re(a), "errors", Jt), I(Re(a), "warnings", Jt), I(Re(a), "cancelRegister", function() {
      var l = a.props, c = l.preserve, u = l.isListField, d = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(u, c, ft(d)), a.cancelRegisterFunc = null;
    }), I(Re(a), "getNamePath", function() {
      var l = a.props, c = l.name, u = l.fieldContext, d = u.prefixName, f = d === void 0 ? [] : d;
      return c !== void 0 ? [].concat(me(f), me(c)) : [];
    }), I(Re(a), "getRules", function() {
      var l = a.props, c = l.rules, u = c === void 0 ? [] : c, d = l.fieldContext;
      return u.map(function(f) {
        return typeof f == "function" ? f(d) : f;
      });
    }), I(Re(a), "refresh", function() {
      a.mounted && a.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), I(Re(a), "metaCache", null), I(Re(a), "triggerMetaEvent", function(l) {
      var c = a.props.onMetaChange;
      if (c) {
        var u = V(V({}, a.getMeta()), {}, {
          destroy: l
        });
        Gl(a.metaCache, u) || c(u), a.metaCache = u;
      } else
        a.metaCache = null;
    }), I(Re(a), "onStoreChange", function(l, c, u) {
      var d = a.props, f = d.shouldUpdate, p = d.dependencies, b = p === void 0 ? [] : p, y = d.onReset, h = u.store, g = a.getNamePath(), v = a.getValue(l), w = a.getValue(h), x = c && la(c, g);
      switch (u.type === "valueUpdate" && u.source === "external" && !Gl(v, w) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Jt, a.warnings = Jt, a.triggerMetaEvent()), u.type) {
        case "reset":
          if (!c || x) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Jt, a.warnings = Jt, a.triggerMetaEvent(), y == null || y(), a.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (f && al(f, l, h, v, w, u)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = u.data;
          if (x) {
            "touched" in C && (a.touched = C.touched), "validating" in C && !("originRCField" in C) && (a.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (a.errors = C.errors || Jt), "warnings" in C && (a.warnings = C.warnings || Jt), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in C && la(c, g, !0)) {
            a.reRender();
            return;
          }
          if (f && !g.length && al(f, l, h, v, w, u)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var S = b.map(ft);
          if (S.some(function(E) {
            return la(u.relatedFields, E);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (x || (!b.length || g.length || f) && al(f, l, h, v, w, u)) {
            a.reRender();
            return;
          }
          break;
      }
      f === !0 && a.reRender();
    }), I(Re(a), "validateRules", function(l) {
      var c = a.getNamePath(), u = a.getValue(), d = l || {}, f = d.triggerName, p = d.validateOnly, b = p === void 0 ? !1 : p, y = Promise.resolve().then(/* @__PURE__ */ No(/* @__PURE__ */ nn().mark(function h() {
        var g, v, w, x, C, S, E;
        return nn().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              if (a.mounted) {
                O.next = 2;
                break;
              }
              return O.abrupt("return", []);
            case 2:
              if (g = a.props, v = g.validateFirst, w = v === void 0 ? !1 : v, x = g.messageVariables, C = g.validateDebounce, S = a.getRules(), f && (S = S.filter(function(_) {
                return _;
              }).filter(function(_) {
                var M = _.validateTrigger;
                if (!M)
                  return !0;
                var k = gc(M);
                return k.includes(f);
              })), !(C && f)) {
                O.next = 10;
                break;
              }
              return O.next = 8, new Promise(function(_) {
                setTimeout(_, C);
              });
            case 8:
              if (a.validatePromise === y) {
                O.next = 10;
                break;
              }
              return O.abrupt("return", []);
            case 10:
              return E = jR(c, u, S, l, w, x), E.catch(function(_) {
                return _;
              }).then(function() {
                var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jt;
                if (a.validatePromise === y) {
                  var M;
                  a.validatePromise = null;
                  var k = [], j = [];
                  (M = _.forEach) === null || M === void 0 || M.call(_, function(P) {
                    var D = P.rule.warningOnly, R = P.errors, F = R === void 0 ? Jt : R;
                    D ? j.push.apply(j, me(F)) : k.push.apply(k, me(F));
                  }), a.errors = k, a.warnings = j, a.triggerMetaEvent(), a.reRender();
                }
              }), O.abrupt("return", E);
            case 13:
            case "end":
              return O.stop();
          }
        }, h);
      })));
      return b || (a.validatePromise = y, a.dirty = !0, a.errors = Jt, a.warnings = Jt, a.triggerMetaEvent(), a.reRender()), y;
    }), I(Re(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), I(Re(a), "isFieldTouched", function() {
      return a.touched;
    }), I(Re(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, c = l.getInternalHooks(xr), u = c.getInitialValue;
      return u(a.getNamePath()) !== void 0;
    }), I(Re(a), "getErrors", function() {
      return a.errors;
    }), I(Re(a), "getWarnings", function() {
      return a.warnings;
    }), I(Re(a), "isListField", function() {
      return a.props.isListField;
    }), I(Re(a), "isList", function() {
      return a.props.isList;
    }), I(Re(a), "isPreserve", function() {
      return a.props.preserve;
    }), I(Re(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var l = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return l;
    }), I(Re(a), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = a.getMeta();
        return V(V({}, a.getOnlyChild(l(a.getControlled(), c, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Dr(l);
      return u.length !== 1 || !/* @__PURE__ */ m.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), I(Re(a), "getValue", function(l) {
      var c = a.props.fieldContext.getFieldsValue, u = a.getNamePath();
      return Tn(l || c(!0), u);
    }), I(Re(a), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = a.props, u = c.name, d = c.trigger, f = c.validateTrigger, p = c.getValueFromEvent, b = c.normalize, y = c.valuePropName, h = c.getValueProps, g = c.fieldContext, v = f !== void 0 ? f : g.validateTrigger, w = a.getNamePath(), x = g.getInternalHooks, C = g.getFieldsValue, S = x(xr), E = S.dispatch, T = a.getValue(), O = h || function(P) {
        return I({}, y, P);
      }, _ = l[d], M = u !== void 0 ? O(T) : {};
      process.env.NODE_ENV !== "production" && M && Object.keys(M).forEach(function(P) {
        rt(typeof M[P] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(P, ")"));
      });
      var k = V(V({}, l), M);
      k[d] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var P, D = arguments.length, R = new Array(D), F = 0; F < D; F++)
          R[F] = arguments[F];
        p ? P = p.apply(void 0, R) : P = zR.apply(void 0, [y].concat(R)), b && (P = b(P, T, C(!0))), P !== T && E({
          type: "updateValue",
          namePath: w,
          value: P
        }), _ && _.apply(void 0, R);
      };
      var j = gc(v || []);
      return j.forEach(function(P) {
        var D = k[P];
        k[P] = function() {
          D && D.apply(void 0, arguments);
          var R = a.props.rules;
          R && R.length && E({
            type: "validateField",
            namePath: w,
            triggerName: P
          });
        };
      }), k;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(xr), s = i.initEntityValue;
      s(Re(a));
    }
    return a;
  }
  return Ot(n, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, l = s(xr), c = l.registerField;
        this.cancelRegisterFunc = c(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), s = i.child, l = i.isFunction, c;
      return l ? c = s : /* @__PURE__ */ m.isValidElement(s) ? c = /* @__PURE__ */ m.cloneElement(s, this.getControlled(s.props)) : (rt(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ m.createElement(m.Fragment, {
        key: a
      }, c);
    }
  }]), n;
})(m.Component);
I(Tu, "contextType", wa);
I(Tu, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function yv(e) {
  var t, n = e.name, r = At(e, HR), a = m.useContext(wa), o = m.useContext(Yi), i = n !== void 0 ? ft(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!o, l = "keep";
  return s || (l = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && i.length <= 1 && rt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ m.createElement(Tu, De({
    key: l,
    name: i,
    isListField: s
  }, r, {
    fieldContext: a
  }));
}
function BR(e) {
  var t = e.name, n = e.initialValue, r = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = m.useContext(wa), l = m.useContext(Yi), c = m.useRef({
    keys: [],
    id: 0
  }), u = c.current, d = m.useMemo(function() {
    var y = ft(s.prefixName) || [];
    return [].concat(me(y), me(ft(t)));
  }, [s.prefixName, t]), f = m.useMemo(function() {
    return V(V({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), p = m.useMemo(function() {
    return {
      getKey: function(h) {
        var g = d.length, v = h[g];
        return [u.keys[v], h.slice(g + 1)];
      }
    };
  }, [d]);
  if (typeof r != "function")
    return rt(!1, "Form.List only accepts function as children."), null;
  var b = function(h, g, v) {
    var w = v.source;
    return w === "internal" ? !1 : h !== g;
  };
  return /* @__PURE__ */ m.createElement(Yi.Provider, {
    value: p
  }, /* @__PURE__ */ m.createElement(wa.Provider, {
    value: f
  }, /* @__PURE__ */ m.createElement(yv, {
    name: [],
    shouldUpdate: b,
    rules: a,
    validateTrigger: o,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!l
  }, function(y, h) {
    var g = y.value, v = g === void 0 ? [] : g, w = y.onChange, x = s.getFieldValue, C = function() {
      var O = x(d || []);
      return O || [];
    }, S = {
      add: function(O, _) {
        var M = C();
        _ >= 0 && _ <= M.length ? (u.keys = [].concat(me(u.keys.slice(0, _)), [u.id], me(u.keys.slice(_))), w([].concat(me(M.slice(0, _)), [O], me(M.slice(_))))) : (process.env.NODE_ENV !== "production" && (_ < 0 || _ > M.length) && rt(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(me(u.keys), [u.id]), w([].concat(me(M), [O]))), u.id += 1;
      },
      remove: function(O) {
        var _ = C(), M = new Set(Array.isArray(O) ? O : [O]);
        M.size <= 0 || (u.keys = u.keys.filter(function(k, j) {
          return !M.has(j);
        }), w(_.filter(function(k, j) {
          return !M.has(j);
        })));
      },
      move: function(O, _) {
        if (O !== _) {
          var M = C();
          O < 0 || O >= M.length || _ < 0 || _ >= M.length || (u.keys = Of(u.keys, O, _), w(Of(M, O, _)));
        }
      }
    }, E = v || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && rt(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), r(E.map(function(T, O) {
      var _ = u.keys[O];
      return _ === void 0 && (u.keys[O] = u.id, _ = u.keys[O], u.id += 1), {
        name: O,
        key: _,
        isListField: !0
      };
    }), S, h);
  })));
}
function WR(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, s) {
      i.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        n -= 1, r[s] = l, !(n > 0) && (t && o(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var bv = "__@field_split__";
function ol(e) {
  return e.map(function(t) {
    return "".concat(xe(t), ":").concat(t);
  }).join(bv);
}
var Xr = /* @__PURE__ */ (function() {
  function e() {
    _t(this, e), I(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Ot(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(ol(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(ol(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = this.get(n), o = r(a);
      o ? this.set(n, o) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(ol(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return me(this.kvs.entries()).map(function(r) {
        var a = Q(r, 2), o = a[0], i = a[1], s = o.split(bv);
        return n({
          key: s.map(function(l) {
            var c = l.match(/^([^:]*):(.*)$/), u = Q(c, 3), d = u[1], f = u[2];
            return d === "number" ? Number(f) : f;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var a = r.key, o = r.value;
        return n[a.join(".")] = o, null;
      }), n;
    }
  }]), e;
})(), UR = ["name"], YR = /* @__PURE__ */ Ot(function e(t) {
  var n = this;
  _t(this, e), I(this, "formHooked", !1), I(this, "forceRootUpdate", void 0), I(this, "subscribable", !0), I(this, "store", {}), I(this, "fieldEntities", []), I(this, "initialValues", {}), I(this, "callbacks", {}), I(this, "validateMessages", null), I(this, "preserve", null), I(this, "lastValidatePromise", null), I(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), I(this, "getInternalHooks", function(r) {
    return r === xr ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (rt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), I(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), I(this, "prevWithoutPreserves", null), I(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = Qr(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var l = s.key;
        i = fn(i, l, Tn(r, l));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), I(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var a = new Xr();
      n.getFieldEntities(!0).forEach(function(o) {
        n.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0);
      }), n.prevWithoutPreserves = a;
    }
  }), I(this, "getInitialValue", function(r) {
    var a = Tn(n.initialValues, r);
    return r.length ? Qr(a) : a;
  }), I(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), I(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), I(this, "setPreserve", function(r) {
    n.preserve = r;
  }), I(this, "watchList", []), I(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), I(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), I(this, "timeoutId", null), I(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || rt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), I(this, "updateStore", function(r) {
    n.store = r;
  }), I(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), I(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Xr();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), I(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(o) {
      var i = ft(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: ft(o)
      };
    });
  }), I(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, s;
    if (r === !0 || Array.isArray(r) ? (o = r, i = a) : r && xe(r) === "object" && (s = r.strict, i = r.filter), o === !0 && !i)
      return n.store;
    var l = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), c = [];
    return l.forEach(function(u) {
      var d, f, p = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var b, y;
        if ((b = (y = u).isList) !== null && b !== void 0 && b.call(y))
          return;
      } else if (!o && (d = (f = u).isListField) !== null && d !== void 0 && d.call(f))
        return;
      if (!i)
        c.push(p);
      else {
        var h = "getMeta" in u ? u.getMeta() : null;
        i(h) && c.push(p);
      }
    }), _f(n.store, c.map(ft));
  }), I(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = ft(r);
    return Tn(n.store, a);
  }), I(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: ft(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), I(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = ft(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), I(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = ft(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), I(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], l, c = !1;
    a.length === 0 ? l = null : a.length === 1 ? Array.isArray(i) ? (l = i.map(ft), c = !1) : (l = null, c = i) : (l = i.map(ft), c = s);
    var u = n.getFieldEntities(!0), d = function(h) {
      return h.isFieldTouched();
    };
    if (!l)
      return c ? u.every(function(y) {
        return d(y) || y.isList();
      }) : u.some(d);
    var f = new Xr();
    l.forEach(function(y) {
      f.set(y, []);
    }), u.forEach(function(y) {
      var h = y.getNamePath();
      l.forEach(function(g) {
        g.every(function(v, w) {
          return h[w] === v;
        }) && f.update(g, function(v) {
          return [].concat(me(v), [y]);
        });
      });
    });
    var p = function(h) {
      return h.some(d);
    }, b = f.map(function(y) {
      var h = y.value;
      return h;
    });
    return c ? b.every(p) : b.some(p);
  }), I(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), I(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = r.map(ft);
    return a.some(function(i) {
      var s = i.getNamePath();
      return la(o, s) && i.isFieldValidating();
    });
  }), I(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), I(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Xr(), o = n.getFieldEntities(!0);
    o.forEach(function(l) {
      var c = l.props.initialValue, u = l.getNamePath();
      if (c !== void 0) {
        var d = a.get(u) || /* @__PURE__ */ new Set();
        d.add({
          entity: l,
          value: c
        }), a.set(u, d);
      }
    });
    var i = function(c) {
      c.forEach(function(u) {
        var d = u.props.initialValue;
        if (d !== void 0) {
          var f = u.getNamePath(), p = n.getInitialValue(f);
          if (p !== void 0)
            rt(!1, "Form already set 'initialValues' with path '".concat(f.join("."), "'. Field can not overwrite it."));
          else {
            var b = a.get(f);
            if (b && b.size > 1)
              rt(!1, "Multiple Field with path '".concat(f.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (b) {
              var y = n.getFieldValue(f), h = u.isListField();
              !h && (!r.skipExist || y === void 0) && n.updateStore(fn(n.store, f, me(b)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(l) {
      var c = a.get(l);
      if (c) {
        var u;
        (u = s).push.apply(u, me(me(c).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = o, i(s);
  }), I(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(Qr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var o = r.map(ft);
    o.forEach(function(i) {
      var s = n.getInitialValue(i);
      n.updateStore(fn(n.store, i, s));
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(a, o, {
      type: "reset"
    }), n.notifyWatch(o);
  }), I(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var s = i.name, l = At(i, UR), c = ft(s);
      o.push(c), "value" in l && n.updateStore(fn(n.store, c, l.value)), n.notifyObservers(a, [c], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(o);
  }), I(this, "getFields", function() {
    var r = n.getFieldEntities(!0), a = r.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), l = V(V({}, s), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }), I(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = Tn(n.store, o);
      i === void 0 && n.updateStore(fn(n.store, o, a));
    }
  }), I(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }), I(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var a = r.getNamePath();
    if (n.notifyWatch([a]), r.props.initialValue !== void 0) {
      var o = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(o, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(d) {
        return d !== r;
      }), !n.isMergedPreserve(s) && (!i || l.length > 1)) {
        var c = i ? void 0 : n.getInitialValue(a);
        if (a.length && n.getFieldValue(a) !== c && n.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !pv(d.getNamePath(), a)
          );
        })) {
          var u = n.store;
          n.updateStore(fn(u, a, c, !0)), n.notifyObservers(u, [a], {
            type: "remove"
          }), n.triggerDependenciesUpdate(u, a);
        }
      }
      n.notifyWatch([a]);
    };
  }), I(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var a = r.namePath, o = r.value;
        n.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = r.namePath, s = r.triggerName;
        n.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), I(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = V(V({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(r, a, i);
      });
    } else
      n.forceRootUpdate();
  }), I(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(me(o))
    }), o;
  }), I(this, "updateValue", function(r, a) {
    var o = ft(r), i = n.store;
    n.updateStore(fn(n.store, o, a)), n.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var s = n.triggerDependenciesUpdate(i, o), l = n.callbacks.onValuesChange;
    if (l) {
      var c = _f(n.store, [o]);
      l(c, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(me(s)));
  }), I(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = Qr(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), I(this, "setFieldValue", function(r, a) {
    n.setFields([{
      name: r,
      value: a,
      errors: [],
      warnings: []
    }]);
  }), I(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Xr();
    n.getFieldEntities().forEach(function(l) {
      var c = l.props.dependencies;
      (c || []).forEach(function(u) {
        var d = ft(u);
        i.update(d, function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return f.add(l), f;
        });
      });
    });
    var s = function l(c) {
      var u = i.get(c) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var f = d.getNamePath();
          d.isFieldDirty() && f.length && (o.push(f), l(f));
        }
      });
    };
    return s(r), o;
  }), I(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var s = new Xr();
        a.forEach(function(c) {
          var u = c.name, d = c.errors;
          s.set(u, d);
        }), i.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = i.filter(function(c) {
        var u = c.name;
        return la(r, u);
      });
      l.length && o(l, i);
    }
  }), I(this, "validateFields", function(r, a) {
    n.warningUnhooked();
    var o, i;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (o = r, i = a) : i = r;
    var s = !!o, l = s ? o.map(ft) : [], c = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), f = i || {}, p = f.recursive, b = f.dirty;
    n.getFieldEntities(!0).forEach(function(v) {
      if (s || l.push(v.getNamePath()), !(!v.props.rules || !v.props.rules.length) && !(b && !v.isFieldDirty())) {
        var w = v.getNamePath();
        if (d.add(w.join(u)), !s || la(l, w, p)) {
          var x = v.validateRules(V({
            validateMessages: V(V({}, vv), n.validateMessages)
          }, i));
          c.push(x.then(function() {
            return {
              name: w,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var S, E = [], T = [];
            return (S = C.forEach) === null || S === void 0 || S.call(C, function(O) {
              var _ = O.rule.warningOnly, M = O.errors;
              _ ? T.push.apply(T, me(M)) : E.push.apply(E, me(M));
            }), E.length ? Promise.reject({
              name: w,
              errors: E,
              warnings: T
            }) : {
              name: w,
              errors: E,
              warnings: T
            };
          }));
        }
      }
    });
    var y = WR(c);
    n.lastValidatePromise = y, y.catch(function(v) {
      return v;
    }).then(function(v) {
      var w = v.map(function(x) {
        var C = x.name;
        return C;
      });
      n.notifyObservers(n.store, w, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(w, v);
    });
    var h = y.then(function() {
      return n.lastValidatePromise === y ? Promise.resolve(n.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(v) {
      var w = v.filter(function(x) {
        return x && x.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(l),
        errorFields: w,
        outOfDate: n.lastValidatePromise !== y
      });
    });
    h.catch(function(v) {
      return v;
    });
    var g = l.filter(function(v) {
      return d.has(v.join(u));
    });
    return n.triggerOnFieldsChange(g), h;
  }), I(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var a = n.callbacks.onFinish;
      if (a)
        try {
          a(r);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(r) {
      var a = n.callbacks.onFinishFailed;
      a && a(r);
    });
  }), this.forceRootUpdate = t;
});
function wv(e) {
  var t = m.useRef(), n = m.useState({}), r = Q(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new YR(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var Ec = /* @__PURE__ */ m.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), qR = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = m.useContext(Ec), s = m.useRef({});
  return /* @__PURE__ */ m.createElement(Ec.Provider, {
    value: V(V({}, i), {}, {
      validateMessages: V(V({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, u) {
        r && r(c, {
          changedFields: u,
          forms: s.current
        }), i.triggerFormChange(c, u);
      },
      triggerFormFinish: function(c, u) {
        a && a(c, {
          values: u,
          forms: s.current
        }), i.triggerFormFinish(c, u);
      },
      registerForm: function(c, u) {
        c && (s.current = V(V({}, s.current), {}, I({}, c, u))), i.registerForm(c, u);
      },
      unregisterForm: function(c) {
        var u = V({}, s.current);
        delete u[c], s.current = u, i.unregisterForm(c);
      }
    })
  }, o);
}, GR = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], KR = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, l = t.children, c = t.component, u = c === void 0 ? "form" : c, d = t.validateMessages, f = t.validateTrigger, p = f === void 0 ? "onChange" : f, b = t.onValuesChange, y = t.onFieldsChange, h = t.onFinish, g = t.onFinishFailed, v = t.clearOnDestroy, w = At(t, GR), x = m.useRef(null), C = m.useContext(Ec), S = wv(i), E = Q(S, 1), T = E[0], O = T.getInternalHooks(xr), _ = O.useSubscribe, M = O.setInitialValues, k = O.setCallbacks, j = O.setValidateMessages, P = O.setPreserve, D = O.destroyForm;
  m.useImperativeHandle(n, function() {
    return V(V({}, T), {}, {
      nativeElement: x.current
    });
  }), m.useEffect(function() {
    return C.registerForm(r, T), function() {
      C.unregisterForm(r);
    };
  }, [C, T, r]), j(V(V({}, C.validateMessages), d)), k({
    onValuesChange: b,
    onFieldsChange: function(U) {
      if (C.triggerFormChange(r, U), y) {
        for (var te = arguments.length, X = new Array(te > 1 ? te - 1 : 0), J = 1; J < te; J++)
          X[J - 1] = arguments[J];
        y.apply(void 0, [U].concat(X));
      }
    },
    onFinish: function(U) {
      C.triggerFormFinish(r, U), h && h(U);
    },
    onFinishFailed: g
  }), P(s);
  var R = m.useRef(null);
  M(a, !R.current), R.current || (R.current = !0), m.useEffect(
    function() {
      return function() {
        return D(v);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var F, N = typeof l == "function";
  if (N) {
    var H = T.getFieldsValue(!0);
    F = l(H, T);
  } else
    F = l;
  _(!N);
  var B = m.useRef();
  m.useEffect(function() {
    VR(B.current || [], o || []) || T.setFields(o || []), B.current = o;
  }, [o, T]);
  var $ = m.useMemo(function() {
    return V(V({}, T), {}, {
      validateTrigger: p
    });
  }, [T, p]), L = /* @__PURE__ */ m.createElement(Yi.Provider, {
    value: null
  }, /* @__PURE__ */ m.createElement(wa.Provider, {
    value: $
  }, F));
  return u === !1 ? L : /* @__PURE__ */ m.createElement(u, De({}, w, {
    ref: x,
    onSubmit: function(U) {
      U.preventDefault(), U.stopPropagation(), T.submit();
    },
    onReset: function(U) {
      var te;
      U.preventDefault(), T.resetFields(), (te = w.onReset) === null || te === void 0 || te.call(w, U);
    }
  }), L);
};
function Rf(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var XR = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = Fe(t);
  rt(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function ZR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = t[1], o = a === void 0 ? {} : a, i = oR(o) ? {
    form: o
  } : o, s = i.form, l = Yn(), c = Q(l, 2), u = c[0], d = c[1], f = Sa(function() {
    return Rf(u);
  }, [u]), p = Fe(f);
  p.current = f;
  var b = en(wa), y = s || b, h = y && y._init;
  process.env.NODE_ENV !== "production" && rt(t.length === 2 ? s ? h : !0 : h, "useWatch requires a form instance since it can not auto detect from context.");
  var g = ft(r), v = Fe(g);
  return v.current = g, XR(g), wt(
    function() {
      if (h) {
        var w = y.getFieldsValue, x = y.getInternalHooks, C = x(xr), S = C.registerWatch, E = function(M, k) {
          var j = i.preserve ? k : M;
          return typeof r == "function" ? r(j) : Tn(j, v.current);
        }, T = S(function(_, M) {
          var k = E(_, M), j = Rf(k);
          p.current !== j && (p.current = j, d(k));
        }), O = E(w(), w(!0));
        return u !== O && d(O), T;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h]
  ), u;
}
var JR = /* @__PURE__ */ m.forwardRef(KR), Ao = JR;
Ao.FormProvider = qR;
Ao.Field = yv;
Ao.List = BR;
Ao.useForm = wv;
Ao.useWatch = ZR;
const bo = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (bo.displayName = "FormItemInputContext");
const QR = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = m.useContext(bo), a = m.useMemo(() => {
    const o = Object.assign({}, r);
    return n && delete o.isFormItemInput, t && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [t, n, r]);
  return /* @__PURE__ */ m.createElement(bo.Provider, {
    value: a
  }, e);
}, eT = /* @__PURE__ */ m.createContext(void 0), Sv = (e) => {
  const t = q.useContext(pa);
  return q.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, xv = /* @__PURE__ */ m.createContext(null), Cv = (e, t) => {
  const n = m.useContext(xv), r = m.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = n, s = a === "vertical" ? "-vertical-" : "-";
    return he(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: o,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
}, tT = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ m.createElement(xv.Provider, {
    value: null
  }, t);
}, _c = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let a = r;
  return n && (a = /* @__PURE__ */ q.createElement(QR, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ q.createElement(tT, null, a)), a;
}, Pu = /* @__PURE__ */ q.createContext(void 0);
process.env.NODE_ENV !== "production" && (Pu.displayName = "zIndexContext");
const Ln = 100, nT = 10, rT = Ln * nT, aT = rT + Ln, Ev = {
  Modal: Ln,
  Drawer: Ln,
  Popover: Ln,
  Popconfirm: Ln,
  Tooltip: Ln,
  Tour: Ln,
  FloatButton: Ln
}, oT = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function iT(e) {
  return e in Ev;
}
const sT = (e, t) => {
  const [, n] = Ma(), r = q.useContext(Pu), a = iT(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    Ev[e] : i += oT[e], o = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = bn(e), s = n.zIndexPopupBase + aT, l = o[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || l <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
}, lT = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function cT(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, a = t / 2, o = 0, i = a, s = r * 1 / Math.sqrt(2), l = a - r * (1 - 1 / Math.sqrt(2)), c = a - n * (1 / Math.sqrt(2)), u = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), d = 2 * a - c, f = u, p = 2 * a - s, b = l, y = 2 * a - o, h = i, g = a * Math.sqrt(2) + r * (Math.sqrt(2) - 2), v = r * (Math.sqrt(2) - 1), w = `polygon(${v}px 100%, 50% ${v}px, ${2 * a - v}px 100%, ${v}px 100%)`, x = `path('M ${o} ${i} A ${r} ${r} 0 0 0 ${s} ${l} L ${c} ${u} A ${n} ${n} 0 0 1 ${d} ${f} L ${p} ${b} A ${r} ${r} 0 0 0 ${y} ${h} Z')`;
  return {
    arrowShadowWidth: g,
    arrowPath: x,
    arrowPolygon: w
  };
}
const uT = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: a,
    arrowPath: o,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: l
  } = e;
  return {
    pointerEvents: "none",
    width: r,
    height: r,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: l(r).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [a, o]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${ke(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, _v = 8;
function Ov(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? _v : r
  };
}
function ui(e, t) {
  return e ? t : {};
}
function dT(e, t, n) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: o,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: l = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, uT(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, ui(!!l.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ke(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), ui(!!l.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ke(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), ui(!!l.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: o
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: o
      }
    })), ui(!!l.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: o
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: o
      }
    }))
  };
}
function fT(e, t, n, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = r && typeof r == "object" ? r : {}, o = {};
  switch (e) {
    case "top":
    case "bottom":
      o.shiftX = t.arrowOffsetHorizontal * 2 + n, o.shiftY = !0, o.adjustY = !0;
      break;
    case "left":
    case "right":
      o.shiftY = t.arrowOffsetVertical * 2 + n, o.shiftX = !0, o.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, o), a);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const Tf = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, hT = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, mT = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function gT(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: a,
    borderRadius: o
  } = e, i = t / 2, s = {}, l = Ov({
    contentRadius: o,
    limitVerticalRadius: !0
  });
  return Object.keys(Tf).forEach((c) => {
    const u = r && hT[c] || Tf[c], d = Object.assign(Object.assign({}, u), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[c] = d, mT.has(c) && (d.autoArrow = !1), c) {
      case "top":
      case "topLeft":
      case "topRight":
        d.offset[1] = -i - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        d.offset[1] = i + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        d.offset[0] = -i - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        d.offset[0] = i + a;
        break;
    }
    if (r)
      switch (c) {
        case "topLeft":
        case "bottomLeft":
          d.offset[0] = -l.arrowOffsetHorizontal - i;
          break;
        case "topRight":
        case "bottomRight":
          d.offset[0] = l.arrowOffsetHorizontal + i;
          break;
        case "leftTop":
        case "rightTop":
          d.offset[1] = -l.arrowOffsetHorizontal * 2 + i;
          break;
        case "leftBottom":
        case "rightBottom":
          d.offset[1] = l.arrowOffsetHorizontal * 2 - i;
          break;
      }
    d.overflow = fT(c, l, t, n), d.htmlRegion = "visibleFirst";
  }), s;
}
function vT(e) {
  return e && /* @__PURE__ */ q.isValidElement(e) && e.type === q.Fragment;
}
const pT = (e, t, n) => /* @__PURE__ */ q.isValidElement(e) ? /* @__PURE__ */ q.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Rv(e, t) {
  return pT(e, e, t);
}
const yT = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), bT = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), wT = (e, t, n, r, a = !1) => {
  const o = a ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, yT(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, bT(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, ST = new sn("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), xT = new sn("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Pf = new sn("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Mf = new sn("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), CT = new sn("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), ET = new sn("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), _T = new sn("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), OT = new sn("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), RT = new sn("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), TT = new sn("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), PT = new sn("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), MT = new sn("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), $T = {
  zoom: {
    inKeyframes: ST,
    outKeyframes: xT
  },
  "zoom-big": {
    inKeyframes: Pf,
    outKeyframes: Mf
  },
  "zoom-big-fast": {
    inKeyframes: Pf,
    outKeyframes: Mf
  },
  "zoom-left": {
    inKeyframes: _T,
    outKeyframes: OT
  },
  "zoom-right": {
    inKeyframes: RT,
    outKeyframes: TT
  },
  "zoom-up": {
    inKeyframes: CT,
    outKeyframes: ET
  },
  "zoom-down": {
    inKeyframes: PT,
    outKeyframes: MT
  }
}, DT = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = $T[t];
  return [wT(r, a, o, e.motionDurationFast), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, NT = (e) => {
  const {
    calc: t,
    componentCls: n,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: a,
    tooltipBg: o,
    tooltipBorderRadius: i,
    zIndexPopup: s,
    controlHeight: l,
    boxShadowSecondary: c,
    paddingSM: u,
    paddingXS: d,
    arrowOffsetHorizontal: f,
    sizePopupArrow: p
  } = e, b = t(i).add(p).add(f).equal(), y = t(i).mul(2).add(p).equal();
  return [
    {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, Su(e)), {
        position: "absolute",
        zIndex: s,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${n}-inner`]: {
          minWidth: y,
          minHeight: l,
          padding: `${ke(e.calc(u).div(2).equal())} ${ke(d)}`,
          color: `var(--ant-tooltip-color, ${a})`,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: b
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${n}-inner`]: {
            borderRadius: e.min(i, _v)
          }
        },
        [`${n}-content`]: {
          position: "relative"
        }
      }), h_(e, (h, {
        darkColor: g
      }) => ({
        [`&${n}-${h}`]: {
          [`${n}-inner`]: {
            backgroundColor: g
          },
          [`${n}-arrow`]: {
            "--antd-arrow-background-color": g
          }
        }
      }))), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    dT(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${n}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, kT = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Ov({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), cT(Xn(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Tv = (e, t = !0) => kr("Tooltip", (r) => {
  const {
    borderRadius: a,
    colorTextLightSolid: o,
    colorBgSpotlight: i
  } = r, s = Xn(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: o,
    tooltipBorderRadius: a,
    tooltipBg: i
  });
  return [NT(s), DT(r, "zoom-big-fast")];
}, kT, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(e), AT = Hi.map((e) => `${e}-inverse`);
function FT(e, t = !0) {
  return t ? [].concat(me(AT), me(Hi)).includes(e) : Hi.includes(e);
}
var jT = ["b"], IT = ["v"], il = function(t) {
  return Math.round(Number(t || 0));
}, LT = function(t) {
  if (t instanceof ot)
    return t;
  if (t && xe(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, a = At(n, jT);
    return V(V({}, a), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, cr = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r) {
    return _t(this, n), t.call(this, LT(r));
  }
  return Ot(n, [{
    key: "toHsbString",
    value: function() {
      var a = this.toHsb(), o = il(a.s * 100), i = il(a.b * 100), s = il(a.h), l = a.a, c = "hsb(".concat(s, ", ").concat(o, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(o, "%, ").concat(i, "%, ").concat(l.toFixed(l === 0 ? 0 : 2), ")");
      return l === 1 ? c : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var a = this.toHsv(), o = a.v, i = At(a, IT);
      return V(V({}, i), {}, {
        b: o,
        a: this.a
      });
    }
  }]), n;
})(ot), VT = "rc-color-picker", ca = function(t) {
  return t instanceof cr ? t : new cr(t);
}, zT = ca("#1677ff"), Pv = function(t) {
  var n = t.offset, r = t.targetRef, a = t.containerRef, o = t.color, i = t.type, s = a.current.getBoundingClientRect(), l = s.width, c = s.height, u = r.current.getBoundingClientRect(), d = u.width, f = u.height, p = d / 2, b = f / 2, y = (n.x + p) / l, h = 1 - (n.y + b) / c, g = o.toHsb(), v = y, w = (n.x + p) / l * 360;
  if (i)
    switch (i) {
      case "hue":
        return ca(V(V({}, g), {}, {
          h: w <= 0 ? 0 : w
        }));
      case "alpha":
        return ca(V(V({}, g), {}, {
          a: v <= 0 ? 0 : v
        }));
    }
  return ca({
    h: g.h,
    s: y <= 0 ? 0 : y,
    b: h >= 1 ? 1 : h,
    a: g.a
  });
}, Mv = function(t, n) {
  var r = t.toHsb();
  switch (n) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, HT = function(t) {
  var n = t.color, r = t.prefixCls, a = t.className, o = t.style, i = t.onClick, s = "".concat(r, "-color-block");
  return /* @__PURE__ */ q.createElement("div", {
    className: he(s, a),
    style: o,
    onClick: i
  }, /* @__PURE__ */ q.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: n
    }
  }));
};
function BT(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function $v(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, a = e.onDragChange, o = e.onDragChangeComplete, i = e.calculate, s = e.color, l = e.disabledDrag, c = Yn({
    x: 0,
    y: 0
  }), u = Q(c, 2), d = u[0], f = u[1], p = Fe(null), b = Fe(null);
  wt(function() {
    f(i());
  }, [s]), wt(function() {
    return function() {
      document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", b.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", b.current), p.current = null, b.current = null;
    };
  }, []);
  var y = function(x) {
    var C = BT(x), S = C.pageX, E = C.pageY, T = n.current.getBoundingClientRect(), O = T.x, _ = T.y, M = T.width, k = T.height, j = t.current.getBoundingClientRect(), P = j.width, D = j.height, R = P / 2, F = D / 2, N = Math.max(0, Math.min(S - O, M)) - R, H = Math.max(0, Math.min(E - _, k)) - F, B = {
      x: N,
      y: r === "x" ? d.y : H
    };
    if (P === 0 && D === 0 || P !== D)
      return !1;
    a == null || a(B);
  }, h = function(x) {
    x.preventDefault(), y(x);
  }, g = function(x) {
    x.preventDefault(), document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", b.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", b.current), p.current = null, b.current = null, o == null || o();
  }, v = function(x) {
    document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", b.current), !l && (y(x), document.addEventListener("mousemove", h), document.addEventListener("mouseup", g), document.addEventListener("touchmove", h), document.addEventListener("touchend", g), p.current = h, b.current = g);
  };
  return [d, v];
}
var Dv = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, a = t.color, o = t.prefixCls;
  return /* @__PURE__ */ q.createElement("div", {
    className: he("".concat(o, "-handler"), I({}, "".concat(o, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: a
    }
  });
}, Nv = function(t) {
  var n = t.children, r = t.style, a = t.prefixCls;
  return /* @__PURE__ */ q.createElement("div", {
    className: "".concat(a, "-palette"),
    style: V({
      position: "relative"
    }, r)
  }, n);
}, kv = /* @__PURE__ */ xa(function(e, t) {
  var n = e.children, r = e.x, a = e.y;
  return /* @__PURE__ */ q.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(a, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), WT = function(t) {
  var n = t.color, r = t.onChange, a = t.prefixCls, o = t.onChangeComplete, i = t.disabled, s = Fe(), l = Fe(), c = Fe(n), u = jt(function(y) {
    var h = Pv({
      offset: y,
      targetRef: l,
      containerRef: s,
      color: n
    });
    c.current = h, r(h);
  }), d = $v({
    color: n,
    containerRef: s,
    targetRef: l,
    calculate: function() {
      return Mv(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return o == null ? void 0 : o(c.current);
    },
    disabledDrag: i
  }), f = Q(d, 2), p = f[0], b = f[1];
  return /* @__PURE__ */ q.createElement("div", {
    ref: s,
    className: "".concat(a, "-select"),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ q.createElement(Nv, {
    prefixCls: a
  }, /* @__PURE__ */ q.createElement(kv, {
    x: p.x,
    y: p.y,
    ref: l
  }, /* @__PURE__ */ q.createElement(Dv, {
    color: n.toRgbString(),
    prefixCls: a
  })), /* @__PURE__ */ q.createElement("div", {
    className: "".concat(a, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, UT = function(t, n) {
  var r = $r(t, {
    value: n
  }), a = Q(r, 2), o = a[0], i = a[1], s = Sa(function() {
    return ca(o);
  }, [o]);
  return [s, i];
}, YT = function(t) {
  var n = t.colors, r = t.children, a = t.direction, o = a === void 0 ? "to right" : a, i = t.type, s = t.prefixCls, l = Sa(function() {
    return n.map(function(c, u) {
      var d = ca(c);
      return i === "alpha" && u === n.length - 1 && (d = new cr(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ q.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(o, ", ").concat(l, ")")
    }
  }, r);
}, qT = function(t) {
  var n = t.prefixCls, r = t.colors, a = t.disabled, o = t.onChange, i = t.onChangeComplete, s = t.color, l = t.type, c = Fe(), u = Fe(), d = Fe(s), f = function(C) {
    return l === "hue" ? C.getHue() : C.a * 100;
  }, p = jt(function(x) {
    var C = Pv({
      offset: x,
      targetRef: u,
      containerRef: c,
      color: s,
      type: l
    });
    d.current = C, o(f(C));
  }), b = $v({
    color: s,
    targetRef: u,
    containerRef: c,
    calculate: function() {
      return Mv(s, l);
    },
    onDragChange: p,
    onDragChangeComplete: function() {
      i(f(d.current));
    },
    direction: "x",
    disabledDrag: a
  }), y = Q(b, 2), h = y[0], g = y[1], v = q.useMemo(function() {
    if (l === "hue") {
      var x = s.toHsb();
      x.s = 1, x.b = 1, x.a = 1;
      var C = new cr(x);
      return C;
    }
    return s;
  }, [s, l]), w = q.useMemo(function() {
    return r.map(function(x) {
      return "".concat(x.color, " ").concat(x.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ q.createElement("div", {
    ref: c,
    className: he("".concat(n, "-slider"), "".concat(n, "-slider-").concat(l)),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ q.createElement(Nv, {
    prefixCls: n
  }, /* @__PURE__ */ q.createElement(kv, {
    x: h.x,
    y: h.y,
    ref: u
  }, /* @__PURE__ */ q.createElement(Dv, {
    size: "small",
    color: v.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ q.createElement(YT, {
    colors: w,
    type: l,
    prefixCls: n
  })));
};
function GT(e) {
  return m.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || qT];
  }, [e]);
}
var KT = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], XT = /* @__PURE__ */ xa(function(e, t) {
  var n = e.value, r = e.defaultValue, a = e.prefixCls, o = a === void 0 ? VT : a, i = e.onChange, s = e.onChangeComplete, l = e.className, c = e.style, u = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, p = e.disabled, b = p === void 0 ? !1 : p, y = e.components, h = GT(y), g = Q(h, 1), v = g[0], w = UT(r || zT, n), x = Q(w, 2), C = x[0], S = x[1], E = Sa(function() {
    return C.setA(1).toRgbString();
  }, [C]), T = function(H, B) {
    n || S(H), i == null || i(H, B);
  }, O = function(H) {
    return new cr(C.setHue(H));
  }, _ = function(H) {
    return new cr(C.setA(H / 100));
  }, M = function(H) {
    T(O(H), {
      type: "hue",
      value: H
    });
  }, k = function(H) {
    T(_(H), {
      type: "alpha",
      value: H
    });
  }, j = function(H) {
    s && s(O(H));
  }, P = function(H) {
    s && s(_(H));
  }, D = he("".concat(o, "-panel"), l, I({}, "".concat(o, "-panel-disabled"), b)), R = {
    prefixCls: o,
    disabled: b,
    color: C
  }, F = /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(WT, De({
    onChange: T
  }, R, {
    onChangeComplete: s
  })), /* @__PURE__ */ q.createElement("div", {
    className: "".concat(o, "-slider-container")
  }, /* @__PURE__ */ q.createElement("div", {
    className: he("".concat(o, "-slider-group"), I({}, "".concat(o, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ q.createElement(v, De({}, R, {
    type: "hue",
    colors: KT,
    min: 0,
    max: 359,
    value: C.getHue(),
    onChange: M,
    onChangeComplete: j
  })), !f && /* @__PURE__ */ q.createElement(v, De({}, R, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: E
    }],
    min: 0,
    max: 100,
    value: C.a * 100,
    onChange: k,
    onChangeComplete: P
  }))), /* @__PURE__ */ q.createElement(HT, {
    color: C.toRgbString(),
    prefixCls: o
  })));
  return /* @__PURE__ */ q.createElement("div", {
    className: D,
    style: c,
    ref: t
  }, typeof u == "function" ? u(F) : F);
});
process.env.NODE_ENV !== "production" && (XT.displayName = "ColorPicker");
const ZT = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", JT = (e, t) => e ? ZT(e, t) : "";
let $f = /* @__PURE__ */ (function() {
  function e(t) {
    _t(this, e);
    var n;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((a) => ({
        color: new e(a.color),
        percent: a.percent
      })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map(({
      color: a,
      percent: o
    }) => ({
      color: new e(a),
      percent: o
    })), this.metaColor = new cr(this.colors[0].color.metaColor)) : this.metaColor = new cr(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Ot(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return JT(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: n
      } = this;
      return n ? `linear-gradient(90deg, ${n.map((a) => `${a.color.toRgbString()} ${a.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(n) {
      return !n || this.isGradient() !== n.isGradient() ? !1 : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, a) => {
        const o = n.colors[a];
        return r.percent === o.percent && r.color.equals(o.color);
      }) : this.toHexString() === n.toHexString();
    }
  }]);
})();
const QT = (e) => e instanceof $f ? e : new $f(e);
function Av(e, t) {
  const n = FT(t), r = he({
    [`${e}-${t}`]: t && n
  }), a = {}, o = {}, i = QT(t).toRgb(), l = (0.299 * i.r + 0.587 * i.g + 0.114 * i.b) / 255 < 0.5 ? "#FFF" : "#000";
  return t && !n && (a.background = t, a["--ant-tooltip-color"] = l, o["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: a,
    arrowStyle: o
  };
}
const e2 = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = m.useContext(Yt), l = s("tooltip", t), [c, u, d] = Tv(l), f = Av(l, o), p = f.arrowStyle, b = Object.assign(Object.assign({}, i), f.overlayStyle), y = he(u, d, l, `${l}-pure`, `${l}-placement-${r}`, n, f.className);
  return c(/* @__PURE__ */ m.createElement("div", {
    className: y,
    style: p
  }, /* @__PURE__ */ m.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ m.createElement(iv, Object.assign({}, e, {
    className: u,
    prefixCls: l,
    overlayInnerStyle: b
  }), a)));
};
var t2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const n2 = /* @__PURE__ */ m.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: a,
    openClassName: o,
    getTooltipContainer: i,
    color: s,
    overlayInnerStyle: l,
    children: c,
    afterOpenChange: u,
    afterVisibleChange: d,
    destroyTooltipOnHide: f,
    destroyOnHidden: p,
    arrow: b = !0,
    title: y,
    overlay: h,
    builtinPlacements: g,
    arrowPointAtCenter: v = !1,
    autoAdjustOverflow: w = !0,
    motion: x,
    getPopupContainer: C,
    placement: S = "top",
    mouseEnterDelay: E = 0.1,
    mouseLeaveDelay: T = 0.1,
    overlayStyle: O,
    rootClassName: _,
    overlayClassName: M,
    styles: k,
    classNames: j
  } = e, P = t2(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), D = !!b, [, R] = Ma(), {
    getPopupContainer: F,
    getPrefixCls: N,
    direction: H,
    className: B,
    style: $,
    classNames: L,
    styles: W
  } = $o("tooltip"), U = bn("Tooltip"), te = m.useRef(null), X = () => {
    var We;
    (We = te.current) === null || We === void 0 || We.forceAlign();
  };
  m.useImperativeHandle(t, () => {
    var We, Ve;
    return {
      forceAlign: X,
      forcePopupAlign: () => {
        U.deprecated(!1, "forcePopupAlign", "forceAlign"), X();
      },
      nativeElement: (We = te.current) === null || We === void 0 ? void 0 : We.nativeElement,
      popupElement: (Ve = te.current) === null || Ve === void 0 ? void 0 : Ve.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([We, Ve]) => {
    U.deprecated(!(We in e), We, Ve);
  }), process.env.NODE_ENV !== "production" && U(!f || typeof f == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && U(!b || typeof b == "boolean" || !("arrowPointAtCenter" in b), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [J, ee] = $r(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), ae = !y && !h && y !== 0, se = (We) => {
    var Ve, Ne;
    ee(ae ? !1 : We), ae || ((Ve = e.onOpenChange) === null || Ve === void 0 || Ve.call(e, We), (Ne = e.onVisibleChange) === null || Ne === void 0 || Ne.call(e, We));
  }, fe = m.useMemo(() => {
    var We, Ve;
    let Ne = v;
    return typeof b == "object" && (Ne = (Ve = (We = b.pointAtCenter) !== null && We !== void 0 ? We : b.arrowPointAtCenter) !== null && Ve !== void 0 ? Ve : v), g || gT({
      arrowPointAtCenter: Ne,
      autoAdjustOverflow: w,
      arrowWidth: D ? R.sizePopupArrow : 0,
      borderRadius: R.borderRadius,
      offset: R.marginXXS
    });
  }, [v, b, g, R]), oe = m.useMemo(() => y === 0 ? y : h || y || "", [h, y]), ye = /* @__PURE__ */ m.createElement(_c, {
    space: !0
  }, typeof oe == "function" ? oe() : oe), G = N("tooltip", a), ue = N(), Y = e["data-popover-inject"];
  let le = J;
  !("open" in e) && !("visible" in e) && ae && (le = !1);
  const ve = /* @__PURE__ */ m.isValidElement(c) && !vT(c) ? c : /* @__PURE__ */ m.createElement("span", null, c), be = ve.props, Te = !be.className || typeof be.className == "string" ? he(be.className, o || `${G}-open`) : be.className, [pe, _e, Ce] = Tv(G, !Y), re = Av(G, s), Pe = re.arrowStyle, Le = he(M, {
    [`${G}-rtl`]: H === "rtl"
  }, re.className, _, _e, Ce, B, L.root, j == null ? void 0 : j.root), pt = he(L.body, j == null ? void 0 : j.body), [Ke, Je] = sT("Tooltip", P.zIndex), xt = /* @__PURE__ */ m.createElement(nR, Object.assign({}, P, {
    zIndex: Ke,
    showArrow: D,
    placement: S,
    mouseEnterDelay: E,
    mouseLeaveDelay: T,
    prefixCls: G,
    classNames: {
      root: Le,
      body: pt
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Pe), W.root), $), O), k == null ? void 0 : k.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, W.body), l), k == null ? void 0 : k.body), re.overlayStyle)
    },
    getTooltipContainer: C || i || F,
    ref: te,
    builtinPlacements: fe,
    overlay: ye,
    visible: le,
    onVisibleChange: se,
    afterVisibleChange: u ?? d,
    arrowContent: /* @__PURE__ */ m.createElement("span", {
      className: `${G}-arrow-content`
    }),
    motion: {
      motionName: lT(ue, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: p ?? !!f
  }), le ? Rv(ve, {
    className: Te
  }) : ve);
  return pe(/* @__PURE__ */ m.createElement(Pu.Provider, {
    value: Je
  }, xt));
}), Fo = n2;
process.env.NODE_ENV !== "production" && (Fo.displayName = "Tooltip");
Fo._InternalPanelDoNotUseOrYouWillBeFired = e2;
var Df = {
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * ESC
   */
  ESC: 27
};
function r2(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function a2(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Nf(e, t, n) {
  var r = t.cloneNode(!0), a = Object.create(e, {
    target: {
      value: r
    },
    currentTarget: {
      value: r
    }
  });
  return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), r.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, a;
}
function qi(e, t, n, r) {
  if (n) {
    var a = t;
    if (t.type === "click") {
      a = Nf(t, e, ""), n(a);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      a = Nf(t, e, r), n(a);
      return;
    }
    n(a);
  }
}
function Fv(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var a = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
      }
    }
  }
}
var jv = /* @__PURE__ */ q.forwardRef(function(e, t) {
  var n, r, a, o = e.inputElement, i = e.children, s = e.prefixCls, l = e.prefix, c = e.suffix, u = e.addonBefore, d = e.addonAfter, f = e.className, p = e.style, b = e.disabled, y = e.readOnly, h = e.focused, g = e.triggerFocus, v = e.allowClear, w = e.value, x = e.handleReset, C = e.hidden, S = e.classes, E = e.classNames, T = e.dataAttrs, O = e.styles, _ = e.components, M = e.onClear, k = i ?? o, j = (_ == null ? void 0 : _.affixWrapper) || "span", P = (_ == null ? void 0 : _.groupWrapper) || "span", D = (_ == null ? void 0 : _.wrapper) || "span", R = (_ == null ? void 0 : _.groupAddon) || "span", F = Fe(null), N = function(ue) {
    var Y;
    (Y = F.current) !== null && Y !== void 0 && Y.contains(ue.target) && (g == null || g());
  }, H = a2(e), B = /* @__PURE__ */ tp(k, {
    value: w,
    className: he((n = k.props) === null || n === void 0 ? void 0 : n.className, !H && (E == null ? void 0 : E.variant)) || null
  }), $ = Fe(null);
  if (q.useImperativeHandle(t, function() {
    return {
      nativeElement: $.current || F.current
    };
  }), H) {
    var L = null;
    if (v) {
      var W = !b && !y && w, U = "".concat(s, "-clear-icon"), te = xe(v) === "object" && v !== null && v !== void 0 && v.clearIcon ? v.clearIcon : "✖";
      L = /* @__PURE__ */ q.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(ue) {
          x == null || x(ue), M == null || M();
        },
        onMouseDown: function(ue) {
          return ue.preventDefault();
        },
        className: he(U, I(I({}, "".concat(U, "-hidden"), !W), "".concat(U, "-has-suffix"), !!c))
      }, te);
    }
    var X = "".concat(s, "-affix-wrapper"), J = he(X, I(I(I(I(I({}, "".concat(s, "-disabled"), b), "".concat(X, "-disabled"), b), "".concat(X, "-focused"), h), "".concat(X, "-readonly"), y), "".concat(X, "-input-with-clear-btn"), c && v && w), S == null ? void 0 : S.affixWrapper, E == null ? void 0 : E.affixWrapper, E == null ? void 0 : E.variant), ee = (c || v) && /* @__PURE__ */ q.createElement("span", {
      className: he("".concat(s, "-suffix"), E == null ? void 0 : E.suffix),
      style: O == null ? void 0 : O.suffix
    }, L, c);
    B = /* @__PURE__ */ q.createElement(j, De({
      className: J,
      style: O == null ? void 0 : O.affixWrapper,
      onClick: N
    }, T == null ? void 0 : T.affixWrapper, {
      ref: F
    }), l && /* @__PURE__ */ q.createElement("span", {
      className: he("".concat(s, "-prefix"), E == null ? void 0 : E.prefix),
      style: O == null ? void 0 : O.prefix
    }, l), B, ee);
  }
  if (r2(e)) {
    var ae = "".concat(s, "-group"), se = "".concat(ae, "-addon"), fe = "".concat(ae, "-wrapper"), oe = he("".concat(s, "-wrapper"), ae, S == null ? void 0 : S.wrapper, E == null ? void 0 : E.wrapper), ye = he(fe, I({}, "".concat(fe, "-disabled"), b), S == null ? void 0 : S.group, E == null ? void 0 : E.groupWrapper);
    B = /* @__PURE__ */ q.createElement(P, {
      className: ye,
      ref: $
    }, /* @__PURE__ */ q.createElement(D, {
      className: oe
    }, u && /* @__PURE__ */ q.createElement(R, {
      className: se
    }, u), B, d && /* @__PURE__ */ q.createElement(R, {
      className: se
    }, d)));
  }
  return /* @__PURE__ */ q.cloneElement(B, {
    className: he((r = B.props) === null || r === void 0 ? void 0 : r.className, f) || null,
    style: V(V({}, (a = B.props) === null || a === void 0 ? void 0 : a.style), p),
    hidden: C
  });
}), o2 = ["show"];
function Iv(e, t) {
  return m.useMemo(function() {
    var n = {};
    t && (n.show = xe(t) === "object" && t.formatter ? t.formatter : !!t), n = V(V({}, n), e);
    var r = n, a = r.show, o = At(r, o2);
    return V(V({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var i2 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], s2 = /* @__PURE__ */ xa(function(e, t) {
  var n = e.autoComplete, r = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, l = e.onKeyUp, c = e.prefixCls, u = c === void 0 ? "rc-input" : c, d = e.disabled, f = e.htmlSize, p = e.className, b = e.maxLength, y = e.suffix, h = e.showCount, g = e.count, v = e.type, w = v === void 0 ? "text" : v, x = e.classes, C = e.classNames, S = e.styles, E = e.onCompositionStart, T = e.onCompositionEnd, O = At(e, i2), _ = Yn(!1), M = Q(_, 2), k = M[0], j = M[1], P = Fe(!1), D = Fe(!1), R = Fe(null), F = Fe(null), N = function(re) {
    R.current && Fv(R.current, re);
  }, H = $r(e.defaultValue, {
    value: e.value
  }), B = Q(H, 2), $ = B[0], L = B[1], W = $ == null ? "" : String($), U = Yn(null), te = Q(U, 2), X = te[0], J = te[1], ee = Iv(g, h), ae = ee.max || b, se = ee.strategy(W), fe = !!ae && se > ae;
  Rc(t, function() {
    var Ce;
    return {
      focus: N,
      blur: function() {
        var Pe;
        (Pe = R.current) === null || Pe === void 0 || Pe.blur();
      },
      setSelectionRange: function(Pe, Le, pt) {
        var Ke;
        (Ke = R.current) === null || Ke === void 0 || Ke.setSelectionRange(Pe, Le, pt);
      },
      select: function() {
        var Pe;
        (Pe = R.current) === null || Pe === void 0 || Pe.select();
      },
      input: R.current,
      nativeElement: ((Ce = F.current) === null || Ce === void 0 ? void 0 : Ce.nativeElement) || R.current
    };
  }), wt(function() {
    D.current && (D.current = !1), j(function(Ce) {
      return Ce && d ? !1 : Ce;
    });
  }, [d]);
  var oe = function(re, Pe, Le) {
    var pt = Pe;
    if (!P.current && ee.exceedFormatter && ee.max && ee.strategy(Pe) > ee.max) {
      if (pt = ee.exceedFormatter(Pe, {
        max: ee.max
      }), Pe !== pt) {
        var Ke, Je;
        J([((Ke = R.current) === null || Ke === void 0 ? void 0 : Ke.selectionStart) || 0, ((Je = R.current) === null || Je === void 0 ? void 0 : Je.selectionEnd) || 0]);
      }
    } else if (Le.source === "compositionEnd")
      return;
    L(pt), R.current && qi(R.current, re, r, pt);
  };
  wt(function() {
    if (X) {
      var Ce;
      (Ce = R.current) === null || Ce === void 0 || Ce.setSelectionRange.apply(Ce, me(X));
    }
  }, [X]);
  var ye = function(re) {
    oe(re, re.target.value, {
      source: "change"
    });
  }, G = function(re) {
    P.current = !1, oe(re, re.currentTarget.value, {
      source: "compositionEnd"
    }), T == null || T(re);
  }, ue = function(re) {
    i && re.key === "Enter" && !D.current && (D.current = !0, i(re)), s == null || s(re);
  }, Y = function(re) {
    re.key === "Enter" && (D.current = !1), l == null || l(re);
  }, le = function(re) {
    j(!0), a == null || a(re);
  }, ve = function(re) {
    D.current && (D.current = !1), j(!1), o == null || o(re);
  }, be = function(re) {
    L(""), N(), R.current && qi(R.current, re, r);
  }, Te = fe && "".concat(u, "-out-of-range"), pe = function() {
    var re = hs(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return /* @__PURE__ */ q.createElement("input", De({
      autoComplete: n
    }, re, {
      onChange: ye,
      onFocus: le,
      onBlur: ve,
      onKeyDown: ue,
      onKeyUp: Y,
      className: he(u, I({}, "".concat(u, "-disabled"), d), C == null ? void 0 : C.input),
      style: S == null ? void 0 : S.input,
      ref: R,
      size: f,
      type: w,
      onCompositionStart: function(Le) {
        P.current = !0, E == null || E(Le);
      },
      onCompositionEnd: G
    }));
  }, _e = function() {
    var re = Number(ae) > 0;
    if (y || ee.show) {
      var Pe = ee.showFormatter ? ee.showFormatter({
        value: W,
        count: se,
        maxLength: ae
      }) : "".concat(se).concat(re ? " / ".concat(ae) : "");
      return /* @__PURE__ */ q.createElement(q.Fragment, null, ee.show && /* @__PURE__ */ q.createElement("span", {
        className: he("".concat(u, "-show-count-suffix"), I({}, "".concat(u, "-show-count-has-suffix"), !!y), C == null ? void 0 : C.count),
        style: V({}, S == null ? void 0 : S.count)
      }, Pe), y);
    }
    return null;
  };
  return /* @__PURE__ */ q.createElement(jv, De({}, O, {
    prefixCls: u,
    className: he(p, Te),
    handleReset: be,
    value: W,
    focused: k,
    triggerFocus: N,
    suffix: _e(),
    disabled: d,
    classes: x,
    classNames: C,
    styles: S,
    ref: F
  }), pe());
}), l2 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, c2 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], sl = {}, Wt;
function u2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && sl[n])
    return sl[n];
  var r = window.getComputedStyle(e), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = c2.map(function(c) {
    return "".concat(c, ":").concat(r.getPropertyValue(c));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && n && (sl[n] = l), l;
}
function d2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Wt || (Wt = document.createElement("textarea"), Wt.setAttribute("tab-index", "-1"), Wt.setAttribute("aria-hidden", "true"), Wt.setAttribute("name", "hiddenTextarea"), document.body.appendChild(Wt)), e.getAttribute("wrap") ? Wt.setAttribute("wrap", e.getAttribute("wrap")) : Wt.removeAttribute("wrap");
  var a = u2(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, l = a.sizingStyle;
  Wt.setAttribute("style", "".concat(l, ";").concat(l2)), Wt.value = e.value || e.placeholder || "";
  var c = void 0, u = void 0, d, f = Wt.scrollHeight;
  if (s === "border-box" ? f += i : s === "content-box" && (f -= o), n !== null || r !== null) {
    Wt.value = " ";
    var p = Wt.scrollHeight - o;
    n !== null && (c = p * n, s === "border-box" && (c = c + o + i), f = Math.max(c, f)), r !== null && (u = p * r, s === "border-box" && (u = u + o + i), d = f > u ? "" : "hidden", f = Math.min(u, f));
  }
  var b = {
    height: f,
    overflowY: d,
    resize: "none"
  };
  return c && (b.minHeight = c), u && (b.maxHeight = u), b;
}
var f2 = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], ll = 0, cl = 1, ul = 2, h2 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls, a = n.defaultValue, o = n.value, i = n.autoSize, s = n.onResize, l = n.className, c = n.style, u = n.disabled, d = n.onChange, f = n.onInternalAutoSize, p = At(n, f2), b = $r(a, {
    value: o,
    postState: function(U) {
      return U ?? "";
    }
  }), y = Q(b, 2), h = y[0], g = y[1], v = function(U) {
    g(U.target.value), d == null || d(U);
  }, w = m.useRef();
  m.useImperativeHandle(t, function() {
    return {
      textArea: w.current
    };
  });
  var x = m.useMemo(function() {
    return i && xe(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = Q(x, 2), S = C[0], E = C[1], T = !!i, O = m.useState(ul), _ = Q(O, 2), M = _[0], k = _[1], j = m.useState(), P = Q(j, 2), D = P[0], R = P[1], F = function() {
    k(ll), process.env.NODE_ENV === "test" && (f == null || f());
  };
  at(function() {
    T && F();
  }, [o, S, E, T]), at(function() {
    if (M === ll)
      k(cl);
    else if (M === cl) {
      var W = d2(w.current, !1, S, E);
      k(ul), R(W);
    }
  }, [M]);
  var N = m.useRef(), H = function() {
    ya.cancel(N.current);
  }, B = function(U) {
    M === ul && (s == null || s(U), i && (H(), N.current = ya(function() {
      F();
    })));
  };
  m.useEffect(function() {
    return H;
  }, []);
  var $ = T ? D : null, L = V(V({}, c), $);
  return (M === ll || M === cl) && (L.overflowY = "hidden", L.overflowX = "hidden"), /* @__PURE__ */ m.createElement(Da, {
    onResize: B,
    disabled: !(i || s)
  }, /* @__PURE__ */ m.createElement("textarea", De({}, p, {
    ref: w,
    style: L,
    className: he(r, l, I({}, "".concat(r, "-disabled"), u)),
    disabled: u,
    value: h,
    onChange: v
  })));
}), m2 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], g2 = /* @__PURE__ */ q.forwardRef(function(e, t) {
  var n, r = e.defaultValue, a = e.value, o = e.onFocus, i = e.onBlur, s = e.onChange, l = e.allowClear, c = e.maxLength, u = e.onCompositionStart, d = e.onCompositionEnd, f = e.suffix, p = e.prefixCls, b = p === void 0 ? "rc-textarea" : p, y = e.showCount, h = e.count, g = e.className, v = e.style, w = e.disabled, x = e.hidden, C = e.classNames, S = e.styles, E = e.onResize, T = e.onClear, O = e.onPressEnter, _ = e.readOnly, M = e.autoSize, k = e.onKeyDown, j = At(e, m2), P = $r(r, {
    value: a,
    defaultValue: r
  }), D = Q(P, 2), R = D[0], F = D[1], N = R == null ? "" : String(R), H = q.useState(!1), B = Q(H, 2), $ = B[0], L = B[1], W = q.useRef(!1), U = q.useState(null), te = Q(U, 2), X = te[0], J = te[1], ee = Fe(null), ae = Fe(null), se = function() {
    var Ee;
    return (Ee = ae.current) === null || Ee === void 0 ? void 0 : Ee.textArea;
  }, fe = function() {
    se().focus();
  };
  Rc(t, function() {
    var Ne;
    return {
      resizableTextArea: ae.current,
      focus: fe,
      blur: function() {
        se().blur();
      },
      nativeElement: ((Ne = ee.current) === null || Ne === void 0 ? void 0 : Ne.nativeElement) || se()
    };
  }), wt(function() {
    L(function(Ne) {
      return !w && Ne;
    });
  }, [w]);
  var oe = q.useState(null), ye = Q(oe, 2), G = ye[0], ue = ye[1];
  q.useEffect(function() {
    if (G) {
      var Ne;
      (Ne = se()).setSelectionRange.apply(Ne, me(G));
    }
  }, [G]);
  var Y = Iv(h, y), le = (n = Y.max) !== null && n !== void 0 ? n : c, ve = Number(le) > 0, be = Y.strategy(N), Te = !!le && be > le, pe = function(Ee, Qe) {
    var de = Qe;
    !W.current && Y.exceedFormatter && Y.max && Y.strategy(Qe) > Y.max && (de = Y.exceedFormatter(Qe, {
      max: Y.max
    }), Qe !== de && ue([se().selectionStart || 0, se().selectionEnd || 0])), F(de), qi(Ee.currentTarget, Ee, s, de);
  }, _e = function(Ee) {
    W.current = !0, u == null || u(Ee);
  }, Ce = function(Ee) {
    W.current = !1, pe(Ee, Ee.currentTarget.value), d == null || d(Ee);
  }, re = function(Ee) {
    pe(Ee, Ee.target.value);
  }, Pe = function(Ee) {
    Ee.key === "Enter" && O && O(Ee), k == null || k(Ee);
  }, Le = function(Ee) {
    L(!0), o == null || o(Ee);
  }, pt = function(Ee) {
    L(!1), i == null || i(Ee);
  }, Ke = function(Ee) {
    F(""), fe(), qi(se(), Ee, s);
  }, Je = f, xt;
  Y.show && (Y.showFormatter ? xt = Y.showFormatter({
    value: N,
    count: be,
    maxLength: le
  }) : xt = "".concat(be).concat(ve ? " / ".concat(le) : ""), Je = /* @__PURE__ */ q.createElement(q.Fragment, null, Je, /* @__PURE__ */ q.createElement("span", {
    className: he("".concat(b, "-data-count"), C == null ? void 0 : C.count),
    style: S == null ? void 0 : S.count
  }, xt)));
  var We = function(Ee) {
    var Qe;
    E == null || E(Ee), (Qe = se()) !== null && Qe !== void 0 && Qe.style.height && J(!0);
  }, Ve = !M && !y && !l;
  return /* @__PURE__ */ q.createElement(jv, {
    ref: ee,
    value: N,
    allowClear: l,
    handleReset: Ke,
    suffix: Je,
    prefixCls: b,
    classNames: V(V({}, C), {}, {
      affixWrapper: he(C == null ? void 0 : C.affixWrapper, I(I({}, "".concat(b, "-show-count"), y), "".concat(b, "-textarea-allow-clear"), l))
    }),
    disabled: w,
    focused: $,
    className: he(g, Te && "".concat(b, "-out-of-range")),
    style: V(V({}, v), X && !Ve ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof xt == "string" ? xt : void 0
      }
    },
    hidden: x,
    readOnly: _,
    onClear: T
  }, /* @__PURE__ */ q.createElement(h2, De({}, j, {
    autoSize: M,
    maxLength: c,
    onKeyDown: Pe,
    onChange: re,
    onFocus: Le,
    onBlur: pt,
    onCompositionStart: _e,
    onCompositionEnd: Ce,
    className: he(C == null ? void 0 : C.textarea),
    style: V(V({}, S == null ? void 0 : S.textarea), {}, {
      resize: v == null ? void 0 : v.resize
    }),
    disabled: w,
    prefixCls: b,
    onResize: We,
    ref: ae,
    readOnly: _
  })));
});
const Lv = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ q.createElement(Vm, null)
  }), t;
};
function Oc(e, t, n) {
  return he({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Vv = (e, t) => t || e, zv = (e) => {
  const [, , , , t] = Ma();
  return t ? `${e}-css-var` : "";
}, Hv = (e, t, n) => {
  var r, a;
  const {
    variant: o,
    [e]: i
  } = m.useContext(Yt), s = m.useContext(eT), l = i == null ? void 0 : i.variant;
  let c;
  typeof t < "u" ? c = t : n === !1 ? c = "borderless" : c = (a = (r = s ?? l) !== null && r !== void 0 ? r : o) !== null && a !== void 0 ? a : "outlined";
  const u = jE.includes(c);
  return [c, u];
};
function v2(e, t) {
  const n = Fe([]), r = () => {
    n.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return wt(() => (r(), () => n.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), r;
}
function p2(e, t, n, r) {
  const {
    focusElCls: a,
    focus: o,
    borderElCls: i
  } = n, s = i ? "> *" : "", l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [l]: {
        zIndex: 3
      }
    }, a ? {
      [`&${a}`]: {
        zIndex: 3
      }
    } : {}), {
      [`&[disabled] ${s}`]: {
        zIndex: 0
      }
    })
  };
}
function y2(e, t, n) {
  const {
    borderElCls: r
  } = n, a = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function b2(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, {
    componentCls: r
  } = t, a = r || n, o = `${a}-compact`;
  return {
    [o]: Object.assign(Object.assign({}, p2(e, o, t, a)), y2(a, o, t))
  };
}
function Mu(e) {
  return Xn(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const $u = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: a,
    controlHeightSM: o,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: l,
    paddingSM: c,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: d,
    colorFillAlter: f,
    colorPrimaryHover: p,
    colorPrimary: b,
    controlOutlineWidth: y,
    controlOutline: h,
    colorErrorOutline: g,
    colorWarningOutline: v,
    colorBgContainer: w,
    inputFontSize: x,
    inputFontSizeLG: C,
    inputFontSizeSM: S
  } = e, E = x || n, T = S || E, O = C || s, _ = Math.round((t - E * r) / 2 * 10) / 10 - a, M = Math.round((o - T * r) / 2 * 10) / 10 - a, k = Math.ceil((i - O * l) / 2 * 10) / 10 - a;
  return {
    paddingBlock: Math.max(_, 0),
    paddingBlockSM: Math.max(M, 0),
    paddingBlockLG: Math.max(k, 0),
    paddingInline: c - a,
    paddingInlineSM: u - a,
    paddingInlineLG: d - a,
    addonBg: f,
    activeBorderColor: b,
    hoverBorderColor: p,
    activeShadow: `0 0 0 ${y}px ${h}`,
    errorActiveShadow: `0 0 0 ${y}px ${g}`,
    warningActiveShadow: `0 0 0 ${y}px ${v}`,
    hoverBg: w,
    activeBg: w,
    inputFontSize: E,
    inputFontSizeLG: O,
    inputFontSizeSM: T
  };
}, w2 = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Du = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, w2(Xn(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Bv = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), kf = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Bv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), S2 = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Bv(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Du(e))
  }), kf(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), kf(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Af = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), x2 = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${ke(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Af(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Af(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Du(e))
    }
  })
}), C2 = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${n}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${n}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${n}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Wv = (e, t) => {
  var n;
  return {
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: (n = t == null ? void 0 : t.inputColor) !== null && n !== void 0 ? n : "unset"
    },
    "&:hover": {
      background: t.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg
    }
  };
}, Ff = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Wv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), E2 = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Wv(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Du(e))
  }), Ff(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Ff(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), jf = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), _2 = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group-addon`]: {
      background: e.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    }
  }, jf(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), jf(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${ke(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ke(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ke(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${ke(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ke(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ke(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Uv = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: `${ke(e.lineWidth)} 0`,
  borderStyle: `${e.lineType} none`,
  borderColor: `transparent transparent ${t.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${t.hoverBorderColor} transparent`,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), If = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Uv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${t.borderColor} transparent`
  }
}), O2 = (e, t) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Uv(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    // >>>>> Disabled
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${e.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    }
  }), If(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), If(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), R2 = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Yv = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${ke(t)} ${ke(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, qv = (e) => ({
  padding: `${ke(e.paddingBlockSM)} ${ke(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Gv = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${ke(e.paddingBlock)} ${ke(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, R2(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, Yv(e)),
  "&-sm": Object.assign({}, qv(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), T2 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Yv(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, qv(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${ke(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${ke(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ke(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${ke(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${ke(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, l_()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, P2 = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: a
  } = e, i = a(n).sub(a(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Su(e)), Gv(e)), S2(e)), E2(e)), C2(e)), O2(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    })
  };
}, M2 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: e.colorIcon
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${ke(e.inputAffixPadding)}`
      }
    }
  };
}, $2 = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: a,
    colorIcon: o,
    colorIconHover: i,
    iconCls: s
  } = e, l = `${t}-affix-wrapper`, c = `${t}-affix-wrapper-disabled`;
  return {
    [l]: Object.assign(Object.assign(Object.assign(Object.assign({}, Gv(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), M2(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: o,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: i
        }
      }
    }),
    // 覆盖 affix-wrapper borderRadius！
    [`${t}-underlined`]: {
      borderRadius: 0
    },
    [c]: {
      // password disabled
      [`${s}${t}-password-icon`]: {
        color: o,
        cursor: "not-allowed",
        "&:hover": {
          color: o
        }
      }
    }
  };
}, D2 = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Su(e)), T2(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, x2(e)), _2(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      })
    })
  };
}, N2 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [t]: {
        "&:not([disabled]):hover, &:not([disabled]):focus": {
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-color-primary):not(${n}-btn-variant-text)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-color-primary)`]: {
            color: e.colorTextDescription,
            "&:not([disabled]):hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              inset: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, k2 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, Kv = kr(["Input", "Shared"], (e) => {
  const t = Xn(e, Mu(e));
  return [P2(t), $2(t)];
}, $u, {
  resetFont: !1
}), A2 = kr(["Input", "Component"], (e) => {
  const t = Xn(e, Mu(e));
  return [
    D2(t),
    N2(t),
    k2(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    b2(t)
  ];
}, $u, {
  resetFont: !1
});
function F2(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var j2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const I2 = /* @__PURE__ */ xa((e, t) => {
  const {
    prefixCls: n,
    bordered: r = !0,
    status: a,
    size: o,
    disabled: i,
    onBlur: s,
    onFocus: l,
    suffix: c,
    allowClear: u,
    addonAfter: d,
    addonBefore: f,
    className: p,
    style: b,
    styles: y,
    rootClassName: h,
    onChange: g,
    classNames: v,
    variant: w,
    _skipAddonWarning: x
  } = e, C = j2(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant", "_skipAddonWarning"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: Te
    } = bn("Input");
    Te(!("bordered" in e), "bordered", "variant"), x || [["addonAfter", "Space.Compact"], ["addonBefore", "Space.Compact"]].forEach(([pe, _e]) => {
      Te(!(pe in e), pe, _e);
    });
  }
  const {
    getPrefixCls: S,
    direction: E,
    allowClear: T,
    autoComplete: O,
    className: _,
    style: M,
    classNames: k,
    styles: j
  } = $o("input"), P = S("input", n), D = Fe(null), R = zv(P), [F, N, H] = Kv(P, h), [B] = A2(P, R), {
    compactSize: $,
    compactItemClassnames: L
  } = Cv(P, E), W = Sv((Te) => {
    var pe;
    return (pe = o ?? $) !== null && pe !== void 0 ? pe : Te;
  }), U = q.useContext(go), te = i ?? U, {
    status: X,
    hasFeedback: J,
    feedbackIcon: ee
  } = en(bo), ae = Vv(X, a), se = F2(e) || !!J, fe = Fe(se);
  if (process.env.NODE_ENV !== "production") {
    const Te = bn("Input");
    wt(() => {
      var pe;
      se && !fe.current && process.env.NODE_ENV !== "production" && Te(document.activeElement === ((pe = D.current) === null || pe === void 0 ? void 0 : pe.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), fe.current = se;
    }, [se]);
  }
  const oe = v2(D), ye = (Te) => {
    oe(), s == null || s(Te);
  }, G = (Te) => {
    oe(), l == null || l(Te);
  }, ue = (Te) => {
    oe(), g == null || g(Te);
  }, Y = (J || c) && /* @__PURE__ */ q.createElement(q.Fragment, null, c, J && ee), le = Lv(u ?? T), [ve, be] = Hv("input", w, r);
  return F(B(/* @__PURE__ */ q.createElement(s2, Object.assign({
    ref: To(t, D),
    prefixCls: P,
    autoComplete: O
  }, C, {
    disabled: te,
    onBlur: ye,
    onFocus: G,
    style: Object.assign(Object.assign({}, M), b),
    styles: Object.assign(Object.assign({}, j), y),
    suffix: Y,
    allowClear: le,
    className: he(p, h, H, R, L, _),
    onChange: ue,
    addonBefore: f && /* @__PURE__ */ q.createElement(_c, {
      form: !0,
      space: !0
    }, f),
    addonAfter: d && /* @__PURE__ */ q.createElement(_c, {
      form: !0,
      space: !0
    }, d),
    classNames: Object.assign(Object.assign(Object.assign({}, v), k), {
      input: he({
        [`${P}-sm`]: W === "small",
        [`${P}-lg`]: W === "large",
        [`${P}-rtl`]: E === "rtl"
      }, v == null ? void 0 : v.input, k.input, N),
      variant: he({
        [`${P}-${ve}`]: be
      }, Oc(P, ae)),
      affixWrapper: he({
        [`${P}-affix-wrapper-sm`]: W === "small",
        [`${P}-affix-wrapper-lg`]: W === "large",
        [`${P}-affix-wrapper-rtl`]: E === "rtl"
      }, N),
      wrapper: he({
        [`${P}-group-rtl`]: E === "rtl"
      }, N),
      groupWrapper: he({
        [`${P}-group-wrapper-sm`]: W === "small",
        [`${P}-group-wrapper-lg`]: W === "large",
        [`${P}-group-wrapper-rtl`]: E === "rtl",
        [`${P}-group-wrapper-${ve}`]: be
      }, Oc(`${P}-group-wrapper`, ae, J), N)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (I2.displayName = "Input");
const L2 = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    // Raw Textarea
    [`textarea${t}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: e.controlHeight,
      lineHeight: e.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${e.motionDurationSlow}`,
      resize: "vertical",
      [`&${t}-mouse-active`]: {
        transition: `all ${e.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${t}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [r]: {
      position: "relative",
      "&-show-count": {
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: {
        paddingInlineEnd: n
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${r}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
        [`${t}-suffix`]: {
          [`${t}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, V2 = kr(["Input", "TextArea"], (e) => {
  const t = Xn(e, Mu(e));
  return L2(t);
}, $u, {
  resetFont: !1
});
var z2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const H2 = /* @__PURE__ */ xa((e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: a = !0,
    size: o,
    disabled: i,
    status: s,
    allowClear: l,
    classNames: c,
    rootClassName: u,
    className: d,
    style: f,
    styles: p,
    variant: b,
    showCount: y,
    onMouseDown: h,
    onResize: g
  } = e, v = z2(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: Y
    } = bn("TextArea");
    Y(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: w,
    direction: x,
    allowClear: C,
    autoComplete: S,
    className: E,
    style: T,
    classNames: O,
    styles: _
  } = $o("textArea"), M = m.useContext(go), k = i ?? M, {
    status: j,
    hasFeedback: P,
    feedbackIcon: D
  } = m.useContext(bo), R = Vv(j, s), F = m.useRef(null);
  m.useImperativeHandle(t, () => {
    var Y;
    return {
      resizableTextArea: (Y = F.current) === null || Y === void 0 ? void 0 : Y.resizableTextArea,
      focus: (le) => {
        var ve, be;
        Fv((be = (ve = F.current) === null || ve === void 0 ? void 0 : ve.resizableTextArea) === null || be === void 0 ? void 0 : be.textArea, le);
      },
      blur: () => {
        var le;
        return (le = F.current) === null || le === void 0 ? void 0 : le.blur();
      }
    };
  });
  const N = w("input", r), H = zv(N), [B, $, L] = Kv(N, u), [W] = V2(N, H), {
    compactSize: U,
    compactItemClassnames: te
  } = Cv(N, x), X = Sv((Y) => {
    var le;
    return (le = o ?? U) !== null && le !== void 0 ? le : Y;
  }), [J, ee] = Hv("textArea", b, a), ae = Lv(l ?? C), [se, fe] = m.useState(!1), [oe, ye] = m.useState(!1), G = (Y) => {
    fe(!0), h == null || h(Y);
    const le = () => {
      fe(!1), document.removeEventListener("mouseup", le);
    };
    document.addEventListener("mouseup", le);
  }, ue = (Y) => {
    var le, ve;
    if (g == null || g(Y), se && typeof getComputedStyle == "function") {
      const be = (ve = (le = F.current) === null || le === void 0 ? void 0 : le.nativeElement) === null || ve === void 0 ? void 0 : ve.querySelector("textarea");
      be && getComputedStyle(be).resize === "both" && ye(!0);
    }
  };
  return B(W(/* @__PURE__ */ m.createElement(g2, Object.assign({
    autoComplete: S
  }, v, {
    style: Object.assign(Object.assign({}, T), f),
    styles: Object.assign(Object.assign({}, _), p),
    disabled: k,
    allowClear: ae,
    className: he(
      L,
      H,
      d,
      u,
      te,
      E,
      // Only for wrapper
      oe && `${N}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, c), O), {
      textarea: he({
        [`${N}-sm`]: X === "small",
        [`${N}-lg`]: X === "large"
      }, $, c == null ? void 0 : c.textarea, O.textarea, se && `${N}-mouse-active`),
      variant: he({
        [`${N}-${J}`]: ee
      }, Oc(N, R)),
      affixWrapper: he(`${N}-textarea-affix-wrapper`, {
        [`${N}-affix-wrapper-rtl`]: x === "rtl",
        [`${N}-affix-wrapper-sm`]: X === "small",
        [`${N}-affix-wrapper-lg`]: X === "large",
        [`${N}-textarea-show-count`]: y || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
      }, $)
    }),
    prefixCls: N,
    suffix: P && /* @__PURE__ */ m.createElement("span", {
      className: `${N}-textarea-suffix`
    }, D),
    showCount: y,
    ref: F,
    onResize: ue,
    onMouseDown: G
  }))));
}), B2 = (e, t, n, r) => {
  const {
    titleMarginBottom: a,
    fontWeightStrong: o
  } = r;
  return {
    marginBottom: a,
    color: n,
    fontWeight: o,
    fontSize: e,
    lineHeight: t
  };
}, W2 = (e) => {
  const t = [1, 2, 3, 4, 5], n = {};
  return t.forEach((r) => {
    n[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `] = B2(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e);
  }), n;
}, U2 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, $g(e)), {
      userSelect: "text",
      [`&[disabled], &${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: e.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
}, Y2 = (e) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: Ii[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: e.fontWeightStrong
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: e.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
}), q2 = (e) => {
  const {
    componentCls: t,
    paddingSM: n
  } = e, r = n;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
        insetBlockStart: e.calc(r).div(-2).add(1).equal(),
        marginBottom: e.calc(r).div(2).sub(2).equal()
      },
      [`${t}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
        insetBlockEnd: e.marginXS,
        color: e.colorIcon,
        // default style
        fontWeight: "normal",
        fontSize: e.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
}, G2 = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), K2 = () => ({
  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-ellipsis-single-line": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
}), X2 = (e) => {
  const {
    componentCls: t,
    titleMarginTop: n
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: e.colorText,
      wordBreak: "break-word",
      lineHeight: e.lineHeight,
      [`&${t}-secondary`]: {
        color: e.colorTextDescription
      },
      [`&${t}-success`]: {
        color: e.colorSuccessText
      },
      [`&${t}-warning`]: {
        color: e.colorWarningText
      },
      [`&${t}-danger`]: {
        color: e.colorErrorText,
        "a&:active, a&:focus": {
          color: e.colorErrorTextActive
        },
        "a&:hover": {
          color: e.colorErrorTextHover
        }
      },
      [`&${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      "\n        div&,\n        p\n      ": {
        marginBottom: "1em"
      }
    }, W2(e)), {
      [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
        marginTop: n
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: n
        }
      }
    }), Y2(e)), U2(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, $g(e)), {
        marginInlineStart: e.marginXXS
      })
    }), q2(e)), G2(e)), K2()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, Z2 = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), Xv = kr("Typography", X2, Z2), J2 = (e) => {
  const {
    prefixCls: t,
    "aria-label": n,
    className: r,
    style: a,
    direction: o,
    maxLength: i,
    autoSize: s = !0,
    value: l,
    onSave: c,
    onCancel: u,
    onEnd: d,
    component: f,
    enterIcon: p = /* @__PURE__ */ m.createElement(Hm, null)
  } = e, b = m.useRef(null), y = m.useRef(!1), h = m.useRef(null), [g, v] = m.useState(l);
  m.useEffect(() => {
    v(l);
  }, [l]), m.useEffect(() => {
    var P;
    if (!((P = b.current) === null || P === void 0) && P.resizableTextArea) {
      const {
        textArea: D
      } = b.current.resizableTextArea;
      D.focus();
      const {
        length: R
      } = D.value;
      D.setSelectionRange(R, R);
    }
  }, []);
  const w = ({
    target: P
  }) => {
    v(P.value.replace(/[\n\r]/g, ""));
  }, x = () => {
    y.current = !0;
  }, C = () => {
    y.current = !1;
  }, S = ({
    keyCode: P
  }) => {
    y.current || (h.current = P);
  }, E = () => {
    c(g.trim());
  }, T = ({
    keyCode: P,
    ctrlKey: D,
    altKey: R,
    metaKey: F,
    shiftKey: N
  }) => {
    h.current !== P || y.current || D || R || F || N || (P === Df.ENTER ? (E(), d == null || d()) : P === Df.ESC && u());
  }, O = () => {
    E();
  }, [_, M, k] = Xv(t), j = he(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl",
    [`${t}-${f}`]: !!f
  }, r, M, k);
  return _(/* @__PURE__ */ m.createElement("div", {
    className: j,
    style: a
  }, /* @__PURE__ */ m.createElement(H2, {
    ref: b,
    maxLength: i,
    value: g,
    onChange: w,
    onKeyDown: S,
    onKeyUp: T,
    onCompositionStart: x,
    onCompositionEnd: C,
    onBlur: O,
    "aria-label": n,
    rows: 1,
    autoSize: s
  }), p !== null ? Rv(p, {
    className: `${t}-edit-content-confirm`
  }) : null));
};
var dl, Lf;
function Q2() {
  return Lf || (Lf = 1, dl = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach(function(a) {
        e.addRange(a);
      }), t && t.focus();
    };
  }), dl;
}
var fl, Vf;
function eP() {
  if (Vf) return fl;
  Vf = 1;
  var e = Q2(), t = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, n = "Copy to clipboard: #{key}, Enter";
  function r(o) {
    var i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return o.replace(/#{\s*key\s*}/g, i);
  }
  function a(o, i) {
    var s, l, c, u, d, f, p = !1;
    i || (i = {}), s = i.debug || !1;
    try {
      c = e(), u = document.createRange(), d = document.getSelection(), f = document.createElement("span"), f.textContent = o, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(y) {
        if (y.stopPropagation(), i.format)
          if (y.preventDefault(), typeof y.clipboardData > "u") {
            s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var h = t[i.format] || t.default;
            window.clipboardData.setData(h, o);
          } else
            y.clipboardData.clearData(), y.clipboardData.setData(i.format, o);
        i.onCopy && (y.preventDefault(), i.onCopy(y.clipboardData));
      }), document.body.appendChild(f), u.selectNodeContents(f), d.addRange(u);
      var b = document.execCommand("copy");
      if (!b)
        throw new Error("copy command was unsuccessful");
      p = !0;
    } catch (y) {
      s && console.error("unable to copy using execCommand: ", y), s && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(i.format || "text", o), i.onCopy && i.onCopy(window.clipboardData), p = !0;
      } catch (h) {
        s && console.error("unable to copy using clipboardData: ", h), s && console.error("falling back to prompt"), l = r("message" in i ? i.message : n), window.prompt(l, o);
      }
    } finally {
      d && (typeof d.removeRange == "function" ? d.removeRange(u) : d.removeAllRanges()), f && document.body.removeChild(f), c();
    }
    return p;
  }
  return fl = a, fl;
}
var tP = eP();
const nP = /* @__PURE__ */ Qc(tP), rP = (e, t = !1) => t && e == null ? [] : Array.isArray(e) ? e : [e];
var aP = function(e, t, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function s(u) {
      try {
        c(r.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : a(u.value).then(s, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const oP = ({
  copyConfig: e,
  children: t
}) => {
  const [n, r] = m.useState(!1), [a, o] = m.useState(!1), i = m.useRef(null), s = () => {
    i.current && clearTimeout(i.current);
  }, l = {};
  e.format && (l.format = e.format), m.useEffect(() => s, []);
  const c = jt((u) => aP(void 0, void 0, void 0, function* () {
    var d;
    u == null || u.preventDefault(), u == null || u.stopPropagation(), o(!0);
    try {
      const f = typeof e.text == "function" ? yield e.text() : e.text;
      nP(f || rP(t, !0).join("") || "", l), o(!1), r(!0), s(), i.current = setTimeout(() => {
        r(!1);
      }, 3e3), (d = e.onCopy) === null || d === void 0 || d.call(e, u);
    } catch (f) {
      throw o(!1), f;
    }
  }));
  return {
    copied: n,
    copyLoading: a,
    onClick: c
  };
};
function hl(e, t) {
  return m.useMemo(() => {
    const n = !!e;
    return [n, Object.assign(Object.assign({}, t), n && typeof e == "object" ? e : null)];
  }, [e]);
}
const iP = (e) => {
  const t = Fe(void 0);
  return wt(() => {
    t.current = e;
  }), t.current;
}, sP = (e, t, n) => Sa(() => e === !0 ? {
  title: t ?? n
} : /* @__PURE__ */ qf(e) ? {
  title: e
} : typeof e == "object" ? Object.assign({
  title: t ?? n
}, e) : {
  title: e
}, [e, t, n]);
var lP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Zv = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    prefixCls: n,
    component: r = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: l,
    style: c
  } = e, u = lP(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: d,
    direction: f,
    className: p,
    style: b
  } = $o("typography"), y = l ?? f, h = i ? To(t, i) : t, g = d("typography", n);
  process.env.NODE_ENV !== "production" && bn("Typography").deprecated(!i, "setContentRef", "ref");
  const [v, w, x] = Xv(g), C = he(g, p, {
    [`${g}-rtl`]: y === "rtl"
  }, a, o, w, x), S = Object.assign(Object.assign({}, b), c);
  return v(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ m.createElement(r, Object.assign({
      className: C,
      style: S,
      ref: h
    }, u), s)
  );
});
process.env.NODE_ENV !== "production" && (Zv.displayName = "Typography");
function zf(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function ml(e, t, n) {
  return e === !0 || e === void 0 ? t : e || n && t;
}
function cP(e) {
  const t = document.createElement("em");
  e.appendChild(t), process.env.NODE_ENV !== "production" && (t.className = "ant-typography-css-ellipsis-content-measure");
  const n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
  return e.removeChild(t), // Horizontal out of range
  n.left > r.left || r.right > n.right || // Vertical out of range
  n.top > r.top || r.bottom > n.bottom;
}
const Nu = (e) => ["string", "number"].includes(typeof e), uP = ({
  prefixCls: e,
  copied: t,
  locale: n,
  iconOnly: r,
  tooltips: a,
  icon: o,
  tabIndex: i,
  onCopy: s,
  loading: l
}) => {
  const c = zf(a), u = zf(o), {
    copied: d,
    copy: f
  } = n ?? {}, p = t ? d : f, b = ml(c[t ? 1 : 0], p), y = typeof b == "string" ? b : p;
  return /* @__PURE__ */ m.createElement(Fo, {
    title: b
  }, /* @__PURE__ */ m.createElement("button", {
    type: "button",
    className: he(`${e}-copy`, {
      [`${e}-copy-success`]: t,
      [`${e}-copy-icon-only`]: r
    }),
    onClick: s,
    "aria-label": y,
    tabIndex: i
  }, t ? ml(u[1], /* @__PURE__ */ m.createElement(Lm, null), !0) : ml(u[0], l ? /* @__PURE__ */ m.createElement(Bm, null) : /* @__PURE__ */ m.createElement(zm, null), !0)));
}, di = /* @__PURE__ */ m.forwardRef(({
  style: e,
  children: t
}, n) => {
  const r = m.useRef(null);
  return m.useImperativeHandle(n, () => ({
    isExceed: () => {
      const a = r.current;
      return a.scrollHeight > a.clientHeight;
    },
    getHeight: () => r.current.clientHeight
  })), /* @__PURE__ */ m.createElement("span", {
    "aria-hidden": !0,
    ref: r,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)"
    }, e)
  }, t);
}), dP = (e) => e.reduce((t, n) => t + (Nu(n) ? String(n).length : 1), 0);
function Hf(e, t) {
  let n = 0;
  const r = [];
  for (let a = 0; a < e.length; a += 1) {
    if (n === t)
      return r;
    const o = e[a], s = Nu(o) ? String(o).length : 1, l = n + s;
    if (l > t) {
      const c = t - n;
      return r.push(String(o).slice(0, c)), r;
    }
    r.push(o), n = l;
  }
  return e;
}
const gl = 0, vl = 1, pl = 2, yl = 3, Bf = 4, fi = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function fP(e) {
  const {
    enableMeasure: t,
    width: n,
    text: r,
    children: a,
    rows: o,
    expanded: i,
    miscDeps: s,
    onEllipsis: l
  } = e, c = m.useMemo(() => Dr(r), [r]), u = m.useMemo(() => dP(c), [r]), d = m.useMemo(() => a(c, !1), [r]), [f, p] = m.useState(null), b = m.useRef(null), y = m.useRef(null), h = m.useRef(null), g = m.useRef(null), v = m.useRef(null), [w, x] = m.useState(!1), [C, S] = m.useState(gl), [E, T] = m.useState(0), [O, _] = m.useState(null);
  at(() => {
    S(t && n && u ? vl : gl);
  }, [n, r, o, t, c]), at(() => {
    var P, D, R, F;
    if (C === vl) {
      S(pl);
      const N = y.current && getComputedStyle(y.current).whiteSpace;
      _(N);
    } else if (C === pl) {
      const N = !!(!((P = h.current) === null || P === void 0) && P.isExceed());
      S(N ? yl : Bf), p(N ? [0, u] : null), x(N);
      const H = ((D = h.current) === null || D === void 0 ? void 0 : D.getHeight()) || 0, B = o === 1 ? 0 : ((R = g.current) === null || R === void 0 ? void 0 : R.getHeight()) || 0, $ = ((F = v.current) === null || F === void 0 ? void 0 : F.getHeight()) || 0, L = Math.max(
        H,
        // height of rows with ellipsis
        B + $
      );
      T(L + 1), l(N);
    }
  }, [C]);
  const M = f ? Math.ceil((f[0] + f[1]) / 2) : 0;
  at(() => {
    var P;
    const [D, R] = f || [0, 0];
    if (D !== R) {
      const N = (((P = b.current) === null || P === void 0 ? void 0 : P.getHeight()) || 0) > E;
      let H = M;
      R - D === 1 && (H = N ? D : R), p(N ? [D, H] : [H, R]);
    }
  }, [f, M]);
  const k = m.useMemo(() => {
    if (!t)
      return a(c, !1);
    if (C !== yl || !f || f[0] !== f[1]) {
      const P = a(c, !1);
      return [Bf, gl].includes(C) ? P : /* @__PURE__ */ m.createElement("span", {
        style: Object.assign(Object.assign({}, fi), {
          WebkitLineClamp: o
        })
      }, P);
    }
    return a(i ? c : Hf(c, f[0]), w);
  }, [i, C, f, c].concat(me(s))), j = {
    width: n,
    margin: 0,
    padding: 0,
    whiteSpace: O === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ m.createElement(m.Fragment, null, k, C === pl && /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(di, {
    style: Object.assign(Object.assign(Object.assign({}, j), fi), {
      WebkitLineClamp: o
    }),
    ref: h
  }, d), /* @__PURE__ */ m.createElement(di, {
    style: Object.assign(Object.assign(Object.assign({}, j), fi), {
      WebkitLineClamp: o - 1
    }),
    ref: g
  }, d), /* @__PURE__ */ m.createElement(di, {
    style: Object.assign(Object.assign(Object.assign({}, j), fi), {
      WebkitLineClamp: 1
    }),
    ref: v
  }, a([], !0))), C === yl && f && f[0] !== f[1] && /* @__PURE__ */ m.createElement(di, {
    style: Object.assign(Object.assign({}, j), {
      top: 400
    }),
    ref: b
  }, a(Hf(c, M), !0)), C === vl && /* @__PURE__ */ m.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: y
  }));
}
const Jv = ({
  enableEllipsis: e,
  isEllipsis: t,
  children: n,
  tooltipProps: r
}) => !(r != null && r.title) || !e ? n : /* @__PURE__ */ m.createElement(Fo, Object.assign({
  open: t ? void 0 : !1
}, r), n);
process.env.NODE_ENV !== "production" && (Jv.displayName = "EllipsisTooltip");
var hP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function mP({
  mark: e,
  code: t,
  underline: n,
  delete: r,
  strong: a,
  keyboard: o,
  italic: i
}, s) {
  let l = s;
  function c(u, d) {
    d && (l = /* @__PURE__ */ m.createElement(u, {}, l));
  }
  return c("strong", a), c("u", n), c("del", r), c("code", t), c("mark", e), c("kbd", o), c("i", i), l;
}
const gP = "...", Wf = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"], vP = /* @__PURE__ */ m.forwardRef((e, t) => {
  var n;
  const {
    prefixCls: r,
    className: a,
    style: o,
    type: i,
    disabled: s,
    children: l,
    ellipsis: c,
    editable: u,
    copyable: d,
    component: f,
    title: p
  } = e, b = hP(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: y,
    direction: h
  } = m.useContext(Yt), [g] = _E("Text"), v = m.useRef(null), w = m.useRef(null), x = y("typography", r), C = hs(b, Wf), [S, E] = hl(u), [T, O] = $r(!1, {
    value: E.editing
  }), {
    triggerType: _ = ["icon"]
  } = E, M = (de) => {
    var we;
    de && ((we = E.onStart) === null || we === void 0 || we.call(E)), O(de);
  }, k = iP(T);
  at(() => {
    var de;
    !T && k && ((de = w.current) === null || de === void 0 || de.focus());
  }, [T]);
  const j = (de) => {
    de == null || de.preventDefault(), M(!0);
  }, P = (de) => {
    var we;
    (we = E.onChange) === null || we === void 0 || we.call(E, de), M(!1);
  }, D = () => {
    var de;
    (de = E.onCancel) === null || de === void 0 || de.call(E), M(!1);
  }, [R, F] = hl(d), {
    copied: N,
    copyLoading: H,
    onClick: B
  } = oP({
    copyConfig: F,
    children: l
  }), [$, L] = m.useState(!1), [W, U] = m.useState(!1), [te, X] = m.useState(!1), [J, ee] = m.useState(!1), [ae, se] = m.useState(!0), [fe, oe] = hl(c, {
    expandable: !1,
    symbol: (de) => de ? g == null ? void 0 : g.collapse : g == null ? void 0 : g.expand
  }), [ye, G] = $r(oe.defaultExpanded || !1, {
    value: oe.expanded
  }), ue = fe && (!ye || oe.expandable === "collapsible"), {
    rows: Y = 1
  } = oe, le = m.useMemo(() => (
    // Disable ellipsis
    ue && // Provide suffix
    (oe.suffix !== void 0 || oe.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    oe.expandable || S || R)
  ), [ue, oe, S, R]);
  at(() => {
    fe && !le && (L(rf("webkitLineClamp")), U(rf("textOverflow")));
  }, [le, fe]);
  const [ve, be] = m.useState(ue), Te = m.useMemo(() => le ? !1 : Y === 1 ? W : $, [le, W, $]);
  at(() => {
    be(Te && ue);
  }, [Te, ue]);
  const pe = ue && (ve ? J : te), _e = ue && Y === 1 && ve, Ce = ue && Y > 1 && ve, re = (de, we) => {
    var ct;
    G(we.expanded), (ct = oe.onExpand) === null || ct === void 0 || ct.call(oe, de, we);
  }, [Pe, Le] = m.useState(0), pt = ({
    offsetWidth: de
  }) => {
    Le(de);
  }, Ke = (de) => {
    var we;
    X(de), te !== de && ((we = oe.onEllipsis) === null || we === void 0 || we.call(oe, de));
  };
  m.useEffect(() => {
    const de = v.current;
    if (fe && ve && de) {
      const we = cP(de);
      J !== we && ee(we);
    }
  }, [fe, ve, l, Ce, ae, Pe]), m.useEffect(() => {
    const de = v.current;
    if (typeof IntersectionObserver > "u" || !de || !ve || !ue)
      return;
    const we = new IntersectionObserver(() => {
      se(!!de.offsetParent);
    });
    return we.observe(de), () => {
      we.disconnect();
    };
  }, [ve, ue]);
  const Je = sP(oe.tooltip, E.text, l), xt = m.useMemo(() => {
    if (!(!fe || ve))
      return [E.text, l, p, Je.title].find(Nu);
  }, [fe, ve, p, Je.title, pe]);
  if (T)
    return /* @__PURE__ */ m.createElement(J2, {
      value: (n = E.text) !== null && n !== void 0 ? n : typeof l == "string" ? l : "",
      onSave: P,
      onCancel: D,
      onEnd: E.onEnd,
      prefixCls: x,
      className: a,
      style: o,
      direction: h,
      component: f,
      maxLength: E.maxLength,
      autoSize: E.autoSize,
      enterIcon: E.enterIcon
    });
  const We = () => {
    const {
      expandable: de,
      symbol: we
    } = oe;
    return de ? /* @__PURE__ */ m.createElement("button", {
      type: "button",
      key: "expand",
      className: `${x}-${ye ? "collapse" : "expand"}`,
      onClick: (ct) => re(ct, {
        expanded: !ye
      }),
      "aria-label": ye ? g.collapse : g == null ? void 0 : g.expand
    }, typeof we == "function" ? we(ye) : we) : null;
  }, Ve = () => {
    if (!S)
      return;
    const {
      icon: de,
      tooltip: we,
      tabIndex: ct
    } = E, Dn = Dr(we)[0] || (g == null ? void 0 : g.edit), fr = typeof Dn == "string" ? Dn : "";
    return _.includes("icon") ? /* @__PURE__ */ m.createElement(Fo, {
      key: "edit",
      title: we === !1 ? "" : Dn
    }, /* @__PURE__ */ m.createElement("button", {
      type: "button",
      ref: w,
      className: `${x}-edit`,
      onClick: j,
      "aria-label": fr,
      tabIndex: ct
    }, de || /* @__PURE__ */ m.createElement(fa, {
      role: "button"
    }))) : null;
  }, Ne = () => R ? /* @__PURE__ */ m.createElement(uP, Object.assign({
    key: "copy"
  }, F, {
    prefixCls: x,
    copied: N,
    locale: g,
    onCopy: B,
    loading: H,
    iconOnly: l == null
  })) : null, Ee = (de) => [de && We(), Ve(), Ne()], Qe = (de) => [de && !ye && /* @__PURE__ */ m.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, gP), oe.suffix, Ee(de)];
  return /* @__PURE__ */ m.createElement(Da, {
    onResize: pt,
    disabled: !ue
  }, (de) => /* @__PURE__ */ m.createElement(Jv, {
    tooltipProps: Je,
    enableEllipsis: ue,
    isEllipsis: pe
  }, /* @__PURE__ */ m.createElement(Zv, Object.assign({
    className: he({
      [`${x}-${i}`]: i,
      [`${x}-disabled`]: s,
      [`${x}-ellipsis`]: fe,
      [`${x}-ellipsis-single-line`]: _e,
      [`${x}-ellipsis-multiple-line`]: Ce
    }, a),
    prefixCls: r,
    style: Object.assign(Object.assign({}, o), {
      WebkitLineClamp: Ce ? Y : void 0
    }),
    component: f,
    ref: To(de, v, t),
    direction: h,
    onClick: _.includes("text") ? j : void 0,
    "aria-label": xt == null ? void 0 : xt.toString(),
    title: p
  }, C), /* @__PURE__ */ m.createElement(fP, {
    enableMeasure: ue && !ve,
    text: l,
    rows: Y,
    width: Pe,
    onEllipsis: Ke,
    expanded: ye,
    miscDeps: [N, ye, H, S, R, g].concat(me(Wf.map((we) => e[we])))
  }, (we, ct) => mP(e, /* @__PURE__ */ m.createElement(m.Fragment, null, we.length > 0 && ct && !ye && xt ? /* @__PURE__ */ m.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, we) : we, Qe(ct)))))));
});
var pP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Uf = [1, 2, 3, 4, 5], yP = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    level: n = 1,
    children: r
  } = e, a = pP(e, ["level", "children"]);
  if (process.env.NODE_ENV !== "production") {
    const i = bn("Typography.Title");
    process.env.NODE_ENV !== "production" && i(Uf.includes(n), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  const o = Uf.includes(n) ? `h${n}` : "h1";
  return /* @__PURE__ */ m.createElement(vP, Object.assign({
    ref: t
  }, a, {
    component: o
  }), r);
}), bP = (e) => {
  const { Search: t } = mi;
  return /* @__PURE__ */ z.jsxs(bl, { align: "center", wrap: "wrap", gap: 12, children: [
    e.hasActionBack && /* @__PURE__ */ z.jsx(Rn, { title: "Back", children: /* @__PURE__ */ z.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        ghost: !0,
        size: "large",
        icon: /* @__PURE__ */ z.jsx(jm, {}),
        onClick: e.onBackClick,
        style: { color: "#000" }
      }
    ) }),
    /* @__PURE__ */ z.jsx(
      yP,
      {
        level: 3,
        style: {
          marginRight: 10,
          marginBottom: 0,
          fontSize: "clamp(18px, 4vw, 24px)"
        },
        children: e.title
      }
    ),
    e.hasActionAdd && /* @__PURE__ */ z.jsx(Rn, { title: "Add", children: /* @__PURE__ */ z.jsx(
      lt,
      {
        type: "primary",
        shape: "circle",
        icon: /* @__PURE__ */ z.jsx(qm, {}),
        onClick: e.onAddClick
      }
    ) }),
    e.hasSearchBar && /* @__PURE__ */ z.jsxs(
      bl,
      {
        justify: "flex-end",
        align: "center",
        gap: 12,
        wrap: "wrap",
        style: { flexGrow: 1, minWidth: "min-content" },
        children: [
          e.hasDownloadButton && /* @__PURE__ */ z.jsx(
            lt,
            {
              type: "primary",
              size: "large",
              style: { minWidth: 140, maxWidth: 200 },
              onClick: e.onDownloadClick,
              loading: e.isDownloading,
              icon: /* @__PURE__ */ z.jsx(Yl, {}),
              children: e.isDownloading ? "Downloading..." : e.downloadText || "Download"
            }
          ),
          e.hasSecondaryDownloadButton && /* @__PURE__ */ z.jsx(
            lt,
            {
              type: "primary",
              size: "large",
              style: { minWidth: 140, maxWidth: 200 },
              onClick: e.onSecondaryDownloadClick,
              loading: e.isSecondaryDownloading,
              icon: /* @__PURE__ */ z.jsx(Yl, {}),
              children: e.isSecondaryDownloading ? "Downloading..." : e.secondaryDownloadText || "Download"
            }
          ),
          /* @__PURE__ */ z.jsx(
            t,
            {
              placeholder: "Search",
              onSearch: (n) => {
                e.onSearch && e.onSearch(n);
              },
              style: {
                width: 200,
                marginLeft: 48
              }
            }
          )
        ]
      }
    )
  ] });
}, sM = (e) => {
  const { getRequest: t, getPostRequest: n, fetchRequest: r, notifyPostRequests: a } = Pr(), { openModal: o, closeModal: i } = xm(), { authUser: s } = is(), l = Gf(), [c, u] = q.useState(null), { fetchRequests: d, filterRequestData: f } = Pr();
  s && e.requests && wt(() => {
    d(e.requests, !1);
  }, []);
  const p = t(e.tableRequestKey), b = p.isPaginated;
  b && !c && u(b);
  const y = (w = null) => {
    w || (w = {
      id: 0
    }), e.addModalId && e.addModalId !== e.detailsModalId && i(e.addModalId), e.onShowDetailsModal && e.onShowDetailsModal(w);
    const x = n(e.detailsModalId);
    x.errors = null, x.errorMessage = null, x.postData = structuredClone(w), a(), o(e.detailsModalId);
  }, h = () => {
    const w = e.addModalId || e.detailsModalId, x = {
      id: 0
    };
    e.addModalId && e.addModalId !== e.detailsModalId && i(e.detailsModalId), e.onShowDetailsModal && e.onShowDetailsModal(x);
    const C = n(w);
    C.errors = null, C.errorMessage = null, C.postData = structuredClone(x), a(), o(w);
  }, g = (w) => {
    if (w.length >= 2 || w.length == 0) {
      const x = t(e.tableRequestKey);
      x.queryText = w, r(x);
    }
    e.onSearch && e.onSearch(w);
  }, v = /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    /* @__PURE__ */ z.jsx(
      bP,
      {
        title: e.title,
        hasActionAdd: e.hasActionAdd != null ? e.hasActionAdd : !0,
        hasActionBack: e.hasActionBack != null ? e.hasActionBack : !1,
        hasSearchBar: e.hasSearchBar != null ? e.hasSearchBar : !0,
        hasDownloadButton: e.hasDownloadButton,
        hasSecondaryDownloadButton: e.hasSecondaryDownloadButton,
        downloadText: e.downloadText,
        secondaryDownloadText: e.secondaryDownloadText,
        isDownloading: e.isDownloading,
        isSecondaryDownloading: e.isSecondaryDownloading,
        onAddClick: () => h(),
        onBackClick: () => l(-1),
        onDownloadClick: e.onDownloadClick,
        onSecondaryDownloadClick: e.onSecondaryDownloadClick,
        onSearch: (w) => {
          if (c && !e.searchTableOnly) {
            g(w);
            return;
          }
          f(
            e.tableRequestKey,
            w,
            e.keysToSearch
          );
        }
      }
    ),
    e.filterBar && e.filterBar,
    /* @__PURE__ */ z.jsx(
      iC,
      {
        headers: e.tableHeaders,
        columns: e.tableColumns,
        data: p.data,
        requestKey: e.tableRequestKey,
        pageSize: e.tablePageSize,
        customActionIcon: e.customActionIcon,
        customActionTooltip: e.customActionTooltip,
        marginTop: e.tableMarginTop,
        headerHeight: e.headerHeight,
        onRowEditClick: (w) => {
          y(w);
        },
        onRenderRowColor: e.onRenderRowColor,
        onRowClick: e.onRowClick,
        onRowCustomClick: e.onRowCustomClick,
        onRowDeleteClick: e.onRowDeleteClick
      }
    )
  ] });
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    e.renderLayout ? e.renderLayout(v) : v,
    e.detailsModal && e.detailsModal,
    e.addModal && e.addModal
  ] });
}, { Text: Yf } = na, lM = ({
  icon: e,
  title: t,
  description: n,
  onClick: r,
  color: a,
  gradientFrom: o,
  gradientTo: i
}) => /* @__PURE__ */ z.jsx(
  Tc,
  {
    style: {
      borderRadius: "12px",
      boxShadow: `0 4px 12px ${a}15`,
      border: `1px solid ${a}1a`,
      background: `linear-gradient(135deg, ${o} 0%, ${i} 100%)`,
      cursor: "pointer",
      transition: "all 0.3s ease"
    },
    hoverable: !0,
    onClick: r,
    styles: { body: { padding: "24px", textAlign: "center" } },
    children: /* @__PURE__ */ z.jsxs(
      eo,
      {
        direction: "vertical",
        align: "center",
        style: { width: "100%" },
        children: [
          /* @__PURE__ */ z.jsx(
            "div",
            {
              style: {
                fontSize: "32px",
                color: a
              },
              children: e
            }
          ),
          /* @__PURE__ */ z.jsx(
            Yf,
            {
              style: {
                fontSize: "16px",
                fontWeight: 600,
                color: a
              },
              children: t
            }
          ),
          /* @__PURE__ */ z.jsx(
            Yf,
            {
              style: {
                fontSize: "12px",
                color: "#8c8c8c"
              },
              children: n
            }
          )
        ]
      }
    )
  }
), { Text: hi } = na, cM = ({
  columns: e,
  dataSource: t,
  rowKey: n = "id",
  pagination: r = !1,
  loading: a = !1,
  scroll: o,
  size: i = "small",
  bordered: s = !1,
  onChange: l,
  onRowEdit: c,
  onRowDelete: u,
  onRowClick: d,
  customActionIcon: f,
  customActionTooltip: p,
  onRowCustomClick: b,
  mobileCardStyle: y
}) => {
  const h = us(), g = (C) => {
    const S = [];
    return c && S.push(
      /* @__PURE__ */ z.jsx(
        lt,
        {
          type: h ? "primary" : "link",
          icon: /* @__PURE__ */ z.jsx(fa, {}),
          onClick: () => c(C),
          ...h ? {} : { shape: "circle" },
          children: h ? "Edit" : ""
        },
        "edit"
      )
    ), b && S.push(
      /* @__PURE__ */ z.jsx(
        lt,
        {
          type: h ? "default" : "link",
          icon: f,
          onClick: () => b(C),
          ...h ? {} : { shape: "circle" },
          children: h ? p : ""
        },
        "custom"
      )
    ), u && S.push(
      /* @__PURE__ */ z.jsx(
        lt,
        {
          danger: !0,
          type: h ? "default" : "link",
          icon: /* @__PURE__ */ z.jsx(lo, {}),
          onClick: () => u(C),
          ...h ? {} : { shape: "circle" },
          children: h ? "Delete" : ""
        },
        "delete"
      )
    ), d && S.push(
      /* @__PURE__ */ z.jsx(
        lt,
        {
          type: h ? "default" : "link",
          icon: /* @__PURE__ */ z.jsx(Mr, {}),
          onClick: () => d(C),
          ...h ? {} : { shape: "circle", style: { color: "#000" } },
          children: h ? "View" : ""
        },
        "view"
      )
    ), S;
  }, v = [...e];
  (c || u || d || b) && !h && v.push({
    title: "Actions",
    key: "actions",
    align: "center",
    render: (C, S) => /* @__PURE__ */ z.jsxs(eo, { children: [
      c && /* @__PURE__ */ z.jsx(Rn, { title: "Edit", children: /* @__PURE__ */ z.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: /* @__PURE__ */ z.jsx(fa, {}),
          onClick: () => c(S)
        }
      ) }),
      b && /* @__PURE__ */ z.jsx(Rn, { title: p, children: /* @__PURE__ */ z.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: f,
          onClick: () => b(S)
        }
      ) }),
      u && /* @__PURE__ */ z.jsx(Rn, { title: "Delete", children: /* @__PURE__ */ z.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: /* @__PURE__ */ z.jsx(lo, {}),
          danger: !0,
          onClick: () => u(S)
        }
      ) }),
      d && /* @__PURE__ */ z.jsx(Rn, { title: "View", children: /* @__PURE__ */ z.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: /* @__PURE__ */ z.jsx(Mr, {}),
          style: { color: "#000" },
          onClick: () => d(S)
        }
      ) })
    ] })
  });
  const x = (C, S) => {
    const E = g(C);
    return /* @__PURE__ */ z.jsxs(
      Tc,
      {
        style: {
          marginBottom: 12,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          ...y
        },
        children: [
          e.filter((T) => !T.hideOnMobile && T.dataIndex).map((T, O) => {
            const _ = C[T.dataIndex], M = T.render ? T.render(_, C, S) : _ ?? "-";
            return /* @__PURE__ */ z.jsxs(Pi, { style: { marginBottom: 8 }, children: [
              /* @__PURE__ */ z.jsx(ra, { span: 10, children: /* @__PURE__ */ z.jsxs(hi, { strong: !0, style: { color: "#1885FE" }, children: [
                T.title,
                ":"
              ] }) }),
              /* @__PURE__ */ z.jsx(ra, { span: 14, children: typeof M == "string" || typeof M == "number" ? /* @__PURE__ */ z.jsx(hi, { children: M }) : M })
            ] }, O);
          }),
          E.length > 0 && /* @__PURE__ */ z.jsx(
            Pi,
            {
              style: {
                marginTop: 12,
                paddingTop: 12,
                borderTop: "1px solid #f0f0f0"
              },
              children: /* @__PURE__ */ z.jsx(ra, { span: 24, children: /* @__PURE__ */ z.jsx(eo, { wrap: !0, children: E }) })
            }
          )
        ]
      },
      typeof n == "function" ? n(C) : C[n]
    );
  };
  return h ? /* @__PURE__ */ z.jsx(
    "div",
    {
      style: {
        maxHeight: (o == null ? void 0 : o.y) || "400px",
        overflowY: "auto"
      },
      children: a ? /* @__PURE__ */ z.jsx("div", { style: { textAlign: "center", padding: 20 }, children: /* @__PURE__ */ z.jsx(hi, { children: "Loading..." }) }) : t.length === 0 ? /* @__PURE__ */ z.jsx("div", { style: { textAlign: "center", padding: 20 }, children: /* @__PURE__ */ z.jsx(hi, { type: "secondary", children: "No data available" }) }) : t.map(
        (C, S) => x(C, S)
      )
    }
  ) : /* @__PURE__ */ z.jsx(
    Zf,
    {
      columns: v,
      dataSource: t,
      rowKey: n,
      pagination: r,
      loading: a,
      scroll: o,
      size: i,
      bordered: s,
      onChange: l
    }
  );
}, uM = (e) => {
  const t = us(), n = e.options && e.options.map((r, a) => ({
    value: a,
    label: r.name
  }));
  return /* @__PURE__ */ z.jsxs(
    bl,
    {
      justify: "center",
      style: { width: "100%", padding: t ? "0 12px" : "0" },
      children: [
        /* @__PURE__ */ z.jsx(
          hp.Group,
          {
            block: !0,
            defaultValue: 0,
            options: n,
            optionType: "button",
            buttonStyle: "solid",
            className: t ? "mobile-tab-bar" : "",
            style: {
              width: t ? "100%" : e.options ? Math.min(e.options.length * 160, 800) : "auto",
              display: "flex",
              flexWrap: t ? "wrap" : "nowrap"
            },
            onChange: (r) => {
              e.onChange && e.onChange(r.target.value);
            }
          }
        ),
        /* @__PURE__ */ z.jsx("style", { children: `
                .mobile-tab-bar .ant-radio-button-wrapper {
                    height: auto !important;
                    min-height: 32px !important;
                    line-height: 1.4 !important;
                    padding: 6px 12px !important;
                    white-space: normal !important;
                    text-align: center !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                .mobile-tab-bar .ant-radio-button-wrapper span {
                    display: inline-block !important;
                }
            ` })
      ]
    }
  );
};
export {
  U1 as AppInput,
  Y1 as AppModal,
  iC as AppTable,
  $P as AuthProvider,
  rM as BasePage,
  aM as DataInput,
  oM as Icon,
  iM as ModalData,
  eM as ModalProvider,
  JP as NotificationProvider,
  sM as Overview,
  bP as PageHeader,
  tM as ProtectedRoute,
  lM as QuickActionCard,
  QP as RequestProvider,
  cM as ResponsiveTable,
  uM as TabBar,
  PP as convertDMStoDecimal,
  MP as convertDecimaltoDMS,
  vw as defaultDateFormat,
  gw as defaultDateTimeFormat,
  pw as defaultTimeFormat,
  ww as formatDate,
  bw as formatDateTime,
  Ow as formatDecimal,
  xw as formatIsoDate,
  Sw as formatIsoDateTime,
  Cw as formatIsoDateTimeMilli,
  EP as formatIsoTime,
  TP as formatLocalIsoDate,
  RP as formatLocalIsoDateTime,
  Wh as formatNumber,
  _P as formatTime,
  _w as formatUtcIsoDate,
  OP as formatUtcIsoDateTime,
  Ew as formatUtcIsoDateTimeMilli,
  Jc as isoDateFormat,
  Zc as isoDateTimeFormat,
  Bh as isoDateTimeMilliFormat,
  yw as isoTimeFormat,
  is as useAuthContext,
  us as useIsMobile,
  Rw as useLocalStorage,
  xm as useModalContext,
  bm as useNotificationContext,
  Pr as useRequestContext
};
