import * as m from "react";
import W, { useState as Yn, createContext as qi, useMemo as ba, useContext as Qt, useEffect as bt, isValidElement as Uf, version as qv, useRef as Ae, useLayoutEffect as Gv, forwardRef as wa, useImperativeHandle as Oc, cloneElement as Kv } from "react";
import { Navigate as Ns, useNavigate as Yf, useLocation as Xv } from "react-router-dom";
import { Input as di, DatePicker as Zv, TimePicker as Nu, Select as Jv, InputNumber as Qv, Checkbox as ep, Switch as tp, Form as qf, Modal as np, Button as lt, Typography as ta, theme as Gf, Spin as rp, Pagination as ap, Table as Kf, Card as Rc, Row as _i, Col as na, Space as Ja, Tooltip as Rn, notification as op, Layout as ku, Menu as ip, Flex as yl, Radio as sp } from "antd";
import Vr from "dayjs";
import { DeleteOutlined as Oi, RightOutlined as Ri, EditOutlined as Ti, MenuUnfoldOutlined as lp, MenuFoldOutlined as cp, LogoutOutlined as up, UserOutlined as dp, ArrowLeftOutlined as fp, PlusOutlined as hp, DownloadOutlined as Au } from "@ant-design/icons";
import Fu, { createPortal as mp } from "react-dom";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Xf;
function G() {
  return Xf.apply(null, arguments);
}
function gp(e) {
  Xf = e;
}
function pn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Cr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Fe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Tc(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Fe(e, t))
      return !1;
  return !0;
}
function Lt(e) {
  return e === void 0;
}
function qn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function po(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Zf(e, t) {
  var n = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    n.push(t(e[r], r));
  return n;
}
function ar(e, t) {
  for (var n in t)
    Fe(t, n) && (e[n] = t[n]);
  return Fe(t, "toString") && (e.toString = t.toString), Fe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Mn(e, t, n, r) {
  return wh(e, t, n, r, !0).utc();
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
var bl;
Array.prototype.some ? bl = Array.prototype.some : bl = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Pc(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = Oe(e), n = bl.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Gi(e) {
  var t = Mn(NaN);
  return e != null ? ar(Oe(t), e) : Oe(t).userInvalidated = !0, t;
}
var ju = G.momentProperties = [], ks = !1;
function Mc(e, t) {
  var n, r, a, o = ju.length;
  if (Lt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Lt(t._i) || (e._i = t._i), Lt(t._f) || (e._f = t._f), Lt(t._l) || (e._l = t._l), Lt(t._strict) || (e._strict = t._strict), Lt(t._tzm) || (e._tzm = t._tzm), Lt(t._isUTC) || (e._isUTC = t._isUTC), Lt(t._offset) || (e._offset = t._offset), Lt(t._pf) || (e._pf = Oe(t)), Lt(t._locale) || (e._locale = t._locale), o > 0)
    for (n = 0; n < o; n++)
      r = ju[n], a = t[r], Lt(a) || (e[r] = a);
  return e;
}
function yo(e) {
  Mc(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), ks === !1 && (ks = !0, G.updateOffset(this), ks = !1);
}
function yn(e) {
  return e instanceof yo || e != null && e._isAMomentObject != null;
}
function Jf(e) {
  G.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function nn(e, t) {
  var n = !0;
  return ar(function() {
    if (G.deprecationHandler != null && G.deprecationHandler(null, e), n) {
      var r = [], a, o, i, s = arguments.length;
      for (o = 0; o < s; o++) {
        if (a = "", typeof arguments[o] == "object") {
          a += `
[` + o + "] ";
          for (i in arguments[0])
            Fe(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[o];
        r.push(a);
      }
      Jf(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Iu = {};
function Qf(e, t) {
  G.deprecationHandler != null && G.deprecationHandler(e, t), Iu[e] || (Jf(t), Iu[e] = !0);
}
G.suppressDeprecationWarnings = !1;
G.deprecationHandler = null;
function Dn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function pp(e) {
  var t, n;
  for (n in e)
    Fe(e, n) && (t = e[n], Dn(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function wl(e, t) {
  var n = ar({}, e), r;
  for (r in t)
    Fe(t, r) && (Cr(e[r]) && Cr(t[r]) ? (n[r] = {}, ar(n[r], e[r]), ar(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Fe(e, r) && !Fe(t, r) && Cr(e[r]) && (n[r] = ar({}, n[r]));
  return n;
}
function Dc(e) {
  e != null && this.set(e);
}
var Sl;
Object.keys ? Sl = Object.keys : Sl = function(e) {
  var t, n = [];
  for (t in e)
    Fe(e, t) && n.push(t);
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
  return Dn(r) ? r.call(t, n) : r;
}
function Pn(e, t, n) {
  var r = "" + Math.abs(e), a = t - r.length, o = e >= 0;
  return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var $c = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Yo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, As = {}, ra = {};
function he(e, t, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (ra[e] = a), t && (ra[t[0]] = function() {
    return Pn(a.apply(this, arguments), t[1], t[2]);
  }), n && (ra[n] = function() {
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
  var t = e.match($c), n, r;
  for (n = 0, r = t.length; n < r; n++)
    ra[t[n]] ? t[n] = ra[t[n]] : t[n] = wp(t[n]);
  return function(a) {
    var o = "", i;
    for (i = 0; i < r; i++)
      o += Dn(t[i]) ? t[i].call(a, e) : t[i];
    return o;
  };
}
function fi(e, t) {
  return e.isValid() ? (t = eh(t, e.localeData()), As[t] = As[t] || Sp(t), As[t](e)) : e.localeData().invalidDate();
}
function eh(e, t) {
  var n = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Yo.lastIndex = 0; n >= 0 && Yo.test(e); )
    e = e.replace(
      Yo,
      r
    ), Yo.lastIndex = 0, n -= 1;
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
  return t || !n ? t : (this._longDateFormat[e] = n.match($c).map(function(r) {
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
  return Dn(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
}
function Dp(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Dn(n) ? n(t) : n.replace(/%s/i, t);
}
var Lu = {
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
function rn(e) {
  return typeof e == "string" ? Lu[e] || Lu[e.toLowerCase()] : void 0;
}
function Nc(e) {
  var t = {}, n, r;
  for (r in e)
    Fe(e, r) && (n = rn(r), n && (t[n] = e[r]));
  return t;
}
var $p = {
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
    Fe(e, n) && t.push({ unit: n, priority: $p[n] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var th = /\d/, Yt = /\d\d/, nh = /\d{3}/, kc = /\d{4}/, Ki = /[+-]?\d{6}/, Ze = /\d\d?/, rh = /\d\d\d\d?/, ah = /\d\d\d\d\d\d?/, Xi = /\d{1,3}/, Ac = /\d{1,4}/, Zi = /[+-]?\d{1,6}/, Sa = /\d+/, Ji = /[+-]?\d+/, kp = /Z|[+-]\d\d:?\d\d/gi, Qi = /Z|[+-]\d\d(?::?\d\d)?/gi, Ap = /[+-]?\d+(\.\d{1,3})?/, bo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, xa = /^[1-9]\d?/, Fc = /^([1-9]\d|\d)/, Pi;
Pi = {};
function re(e, t, n) {
  Pi[e] = Dn(t) ? t : function(r, a) {
    return r && n ? n : t;
  };
}
function Fp(e, t) {
  return Fe(Pi, e) ? Pi[e](t._strict, t._locale) : new RegExp(jp(e));
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
function Jt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Me(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Jt(t)), n;
}
var xl = {};
function Ge(e, t) {
  var n, r = t, a;
  for (typeof e == "string" && (e = [e]), qn(t) && (r = function(o, i) {
    i[t] = Me(o);
  }), a = e.length, n = 0; n < a; n++)
    xl[e[n]] = r;
}
function wo(e, t) {
  Ge(e, function(n, r, a, o) {
    a._w = a._w || {}, t(n, a._w, a, o);
  });
}
function Ip(e, t, n) {
  t != null && Fe(xl, e) && xl[e](t, n._a, n, e);
}
function es(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var $t = 0, Vn = 1, On = 2, yt = 3, mn = 4, zn = 5, wr = 6, Lp = 7, Vp = 8;
he("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Pn(e, 4) : "+" + e;
});
he(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
he(0, ["YYYY", 4], 0, "year");
he(0, ["YYYYY", 5], 0, "year");
he(0, ["YYYYYY", 6, !0], 0, "year");
re("Y", Ji);
re("YY", Ze, Yt);
re("YYYY", Ac, kc);
re("YYYYY", Zi, Ki);
re("YYYYYY", Zi, Ki);
Ge(["YYYYY", "YYYYYY"], $t);
Ge("YYYY", function(e, t) {
  t[$t] = e.length === 2 ? G.parseTwoDigitYear(e) : Me(e);
});
Ge("YY", function(e, t) {
  t[$t] = G.parseTwoDigitYear(e);
});
Ge("Y", function(e, t) {
  t[$t] = parseInt(e, 10);
});
function qa(e) {
  return es(e) ? 366 : 365;
}
G.parseTwoDigitYear = function(e) {
  return Me(e) + (Me(e) > 68 ? 1900 : 2e3);
};
var oh = Ca("FullYear", !0);
function zp() {
  return es(this.year());
}
function Ca(e, t) {
  return function(n) {
    return n != null ? (ih(this, e, n), G.updateOffset(this, t), this) : Qa(this, e);
  };
}
function Qa(e, t) {
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
function ih(e, t, n) {
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
    o = n, i = e.month(), s = e.date(), s = s === 29 && i === 1 && !es(o) ? 28 : s, a ? r.setUTCFullYear(o, i, s) : r.setFullYear(o, i, s);
  }
}
function Hp(e) {
  return e = rn(e), Dn(this[e]) ? this[e]() : this;
}
function Bp(e, t) {
  if (typeof e == "object") {
    e = Nc(e);
    var n = Np(e), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = rn(e), Dn(this[e]))
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
function jc(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = Wp(t, 12);
  return e += (t - n) / 12, n === 1 ? es(e) ? 29 : 28 : 31 - n % 7 % 2;
}
he("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
he("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
he("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
re("M", Ze, xa);
re("MM", Ze, Yt);
re("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
re("MMMM", function(e, t) {
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
), sh = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), lh = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Yp = bo, qp = bo;
function Gp(e, t) {
  return e ? pn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || lh).test(t) ? "format" : "standalone"][e.month()] : pn(this._months) ? this._months : this._months.standalone;
}
function Kp(e, t) {
  return e ? pn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[lh.test(t) ? "format" : "standalone"][e.month()] : pn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
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
function ch(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Me(t);
    else if (t = e.localeData().monthsParse(t), !qn(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, jc(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function uh(e) {
  return e != null ? (ch(this, e), G.updateOffset(this, !0), this) : Qa(this, "Month");
}
function Jp() {
  return jc(this.year(), this.month());
}
function Qp(e) {
  return this._monthsParseExact ? (Fe(this, "_monthsRegex") || dh.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Fe(this, "_monthsShortRegex") || (this._monthsShortRegex = Yp), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function e0(e) {
  return this._monthsParseExact ? (Fe(this, "_monthsRegex") || dh.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Fe(this, "_monthsRegex") || (this._monthsRegex = qp), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function dh() {
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
function eo(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Mi(e, t, n) {
  var r = 7 + t - n, a = (7 + eo(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function fh(e, t, n, r, a) {
  var o = (7 + n - r) % 7, i = Mi(e, r, a), s = 1 + 7 * (t - 1) + o + i, l, c;
  return s <= 0 ? (l = e - 1, c = qa(l) + s) : s > qa(e) ? (l = e + 1, c = s - qa(e)) : (l = e, c = s), {
    year: l,
    dayOfYear: c
  };
}
function to(e, t, n) {
  var r = Mi(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, o, i;
  return a < 1 ? (i = e.year() - 1, o = a + Wn(i, t, n)) : a > Wn(e.year(), t, n) ? (o = a - Wn(e.year(), t, n), i = e.year() + 1) : (i = e.year(), o = a), {
    week: o,
    year: i
  };
}
function Wn(e, t, n) {
  var r = Mi(e, t, n), a = Mi(e + 1, t, n);
  return (qa(e) - r + a) / 7;
}
he("w", ["ww", 2], "wo", "week");
he("W", ["WW", 2], "Wo", "isoWeek");
re("w", Ze, xa);
re("ww", Ze, Yt);
re("W", Ze, xa);
re("WW", Ze, Yt);
wo(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Me(e);
  }
);
function n0(e) {
  return to(e, this._week.dow, this._week.doy).week;
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
  var t = to(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
he("d", 0, "do", "day");
he("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
he("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
he("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
he("e", 0, 0, "weekday");
he("E", 0, 0, "isoWeekday");
re("d", Ze);
re("e", Ze);
re("E", Ze);
re("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
re("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
re("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
wo(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var a = n._locale.weekdaysParse(e, r, n._strict);
  a != null ? t.d = a : Oe(n).invalidWeekday = e;
});
wo(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Me(e);
});
function l0(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function c0(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Ic(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var u0 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), hh = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), d0 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), f0 = bo, h0 = bo, m0 = bo;
function g0(e, t) {
  var n = pn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Ic(n, this._week.dow) : e ? n[e.day()] : n;
}
function v0(e) {
  return e === !0 ? Ic(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function p0(e) {
  return e === !0 ? Ic(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
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
  var t = Qa(this, "Day");
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
  return this._weekdaysParseExact ? (Fe(this, "_weekdaysRegex") || Lc.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Fe(this, "_weekdaysRegex") || (this._weekdaysRegex = f0), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function E0(e) {
  return this._weekdaysParseExact ? (Fe(this, "_weekdaysRegex") || Lc.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Fe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = h0), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function _0(e) {
  return this._weekdaysParseExact ? (Fe(this, "_weekdaysRegex") || Lc.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Fe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = m0), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Lc() {
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
function Vc() {
  return this.hours() % 12 || 12;
}
function O0() {
  return this.hours() || 24;
}
he("H", ["HH", 2], 0, "hour");
he("h", ["hh", 2], 0, Vc);
he("k", ["kk", 2], 0, O0);
he("hmm", 0, 0, function() {
  return "" + Vc.apply(this) + Pn(this.minutes(), 2);
});
he("hmmss", 0, 0, function() {
  return "" + Vc.apply(this) + Pn(this.minutes(), 2) + Pn(this.seconds(), 2);
});
he("Hmm", 0, 0, function() {
  return "" + this.hours() + Pn(this.minutes(), 2);
});
he("Hmmss", 0, 0, function() {
  return "" + this.hours() + Pn(this.minutes(), 2) + Pn(this.seconds(), 2);
});
function mh(e, t) {
  he(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
mh("a", !0);
mh("A", !1);
function gh(e, t) {
  return t._meridiemParse;
}
re("a", gh);
re("A", gh);
re("H", Ze, Fc);
re("h", Ze, xa);
re("k", Ze, xa);
re("HH", Ze, Yt);
re("hh", Ze, Yt);
re("kk", Ze, Yt);
re("hmm", rh);
re("hmmss", ah);
re("Hmm", rh);
re("Hmmss", ah);
Ge(["H", "HH"], yt);
Ge(["k", "kk"], function(e, t, n) {
  var r = Me(e);
  t[yt] = r === 24 ? 0 : r;
});
Ge(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Ge(["h", "hh"], function(e, t, n) {
  t[yt] = Me(e), Oe(n).bigHour = !0;
});
Ge("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[yt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r)), Oe(n).bigHour = !0;
});
Ge("hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[yt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r, 2)), t[zn] = Me(e.substr(a)), Oe(n).bigHour = !0;
});
Ge("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[yt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r));
});
Ge("Hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[yt] = Me(e.substr(0, r)), t[mn] = Me(e.substr(r, 2)), t[zn] = Me(e.substr(a));
});
function R0(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var T0 = /[ap]\.?m?\.?/i, P0 = Ca("Hours", !0);
function M0(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var vh = {
  calendar: yp,
  longDateFormat: xp,
  invalidDate: Ep,
  ordinal: Op,
  dayOfMonthOrdinalParse: Rp,
  relativeTime: Pp,
  months: Up,
  monthsShort: sh,
  week: r0,
  weekdays: u0,
  weekdaysMin: d0,
  weekdaysShort: hh,
  meridiemParse: T0
}, nt = {}, Ia = {}, no;
function D0(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function Vu(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function $0(e) {
  for (var t = 0, n, r, a, o; t < e.length; ) {
    for (o = Vu(e[t]).split("-"), n = o.length, r = Vu(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = ts(o.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && D0(o, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return no;
}
function N0(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ts(e) {
  var t = null, n;
  if (nt[e] === void 0 && typeof module < "u" && module && module.exports && N0(e))
    try {
      t = no._abbr, n = require, n("./locale/" + e), lr(t);
    } catch {
      nt[e] = null;
    }
  return nt[e];
}
function lr(e, t) {
  var n;
  return e && (Lt(t) ? n = Gn(e) : n = zc(e, t), n ? no = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), no._abbr;
}
function zc(e, t) {
  if (t !== null) {
    var n, r = vh;
    if (t.abbr = e, nt[e] != null)
      Qf(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = nt[e]._config;
    else if (t.parentLocale != null)
      if (nt[t.parentLocale] != null)
        r = nt[t.parentLocale]._config;
      else if (n = ts(t.parentLocale), n != null)
        r = n._config;
      else
        return Ia[t.parentLocale] || (Ia[t.parentLocale] = []), Ia[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return nt[e] = new Dc(wl(r, t)), Ia[e] && Ia[e].forEach(function(a) {
      zc(a.name, a.config);
    }), lr(e), nt[e];
  } else
    return delete nt[e], null;
}
function k0(e, t) {
  if (t != null) {
    var n, r, a = vh;
    nt[e] != null && nt[e].parentLocale != null ? nt[e].set(wl(nt[e]._config, t)) : (r = ts(e), r != null && (a = r._config), t = wl(a, t), r == null && (t.abbr = e), n = new Dc(t), n.parentLocale = nt[e], nt[e] = n), lr(e);
  } else
    nt[e] != null && (nt[e].parentLocale != null ? (nt[e] = nt[e].parentLocale, e === lr() && lr(e)) : nt[e] != null && delete nt[e]);
  return nt[e];
}
function Gn(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return no;
  if (!pn(e)) {
    if (t = ts(e), t)
      return t;
    e = [e];
  }
  return $0(e);
}
function A0() {
  return Sl(nt);
}
function Hc(e) {
  var t, n = e._a;
  return n && Oe(e).overflow === -2 && (t = n[Vn] < 0 || n[Vn] > 11 ? Vn : n[On] < 1 || n[On] > jc(n[$t], n[Vn]) ? On : n[yt] < 0 || n[yt] > 24 || n[yt] === 24 && (n[mn] !== 0 || n[zn] !== 0 || n[wr] !== 0) ? yt : n[mn] < 0 || n[mn] > 59 ? mn : n[zn] < 0 || n[zn] > 59 ? zn : n[wr] < 0 || n[wr] > 999 ? wr : -1, Oe(e)._overflowDayOfYear && (t < $t || t > On) && (t = On), Oe(e)._overflowWeeks && t === -1 && (t = Lp), Oe(e)._overflowWeekday && t === -1 && (t = Vp), Oe(e).overflow = t), e;
}
var F0 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, j0 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, I0 = /Z|[+-]\d\d(?::?\d\d)?/, qo = [
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
], Fs = [
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
function ph(e) {
  var t, n, r = e._i, a = F0.exec(r) || j0.exec(r), o, i, s, l, c = qo.length, u = Fs.length;
  if (a) {
    for (Oe(e).iso = !0, t = 0, n = c; t < n; t++)
      if (qo[t][1].exec(a[1])) {
        i = qo[t][0], o = qo[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, n = u; t < n; t++)
        if (Fs[t][1].exec(a[3])) {
          s = (a[2] || " ") + Fs[t][0];
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
    e._f = i + (s || "") + (l || ""), Wc(e);
  } else
    e._isValid = !1;
}
function H0(e, t, n, r, a, o) {
  var i = [
    B0(e),
    sh.indexOf(t),
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
    var r = hh.indexOf(e), a = new Date(
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
function yh(e) {
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
    e._a = n, e._tzm = Y0(t[8], t[9], t[10]), e._d = eo.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Oe(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function q0(e) {
  var t = L0.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (ph(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (yh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : G.createFromInputFallback(e);
}
G.createFromInputFallback = nn(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Xr(e, t, n) {
  return e ?? t ?? n;
}
function G0(e) {
  var t = new Date(G.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Bc(e) {
  var t, n, r = [], a, o, i;
  if (!e._d) {
    for (a = G0(e), e._w && e._a[On] == null && e._a[Vn] == null && K0(e), e._dayOfYear != null && (i = Xr(e._a[$t], a[$t]), (e._dayOfYear > qa(i) || e._dayOfYear === 0) && (Oe(e)._overflowDayOfYear = !0), n = eo(i, 0, e._dayOfYear), e._a[Vn] = n.getUTCMonth(), e._a[On] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[yt] === 24 && e._a[mn] === 0 && e._a[zn] === 0 && e._a[wr] === 0 && (e._nextDay = !0, e._a[yt] = 0), e._d = (e._useUTC ? eo : t0).apply(
      null,
      r
    ), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[yt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (Oe(e).weekdayMismatch = !0);
  }
}
function K0(e) {
  var t, n, r, a, o, i, s, l, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, i = 4, n = Xr(
    t.GG,
    e._a[$t],
    to(Xe(), 1, 4).year
  ), r = Xr(t.W, 1), a = Xr(t.E, 1), (a < 1 || a > 7) && (l = !0)) : (o = e._locale._week.dow, i = e._locale._week.doy, c = to(Xe(), o, i), n = Xr(t.gg, e._a[$t], c.year), r = Xr(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (l = !0)) : t.e != null ? (a = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : a = o), r < 1 || r > Wn(n, o, i) ? Oe(e)._overflowWeeks = !0 : l != null ? Oe(e)._overflowWeekday = !0 : (s = fh(n, r, a, o, i), e._a[$t] = s.year, e._dayOfYear = s.dayOfYear);
}
G.ISO_8601 = function() {
};
G.RFC_2822 = function() {
};
function Wc(e) {
  if (e._f === G.ISO_8601) {
    ph(e);
    return;
  }
  if (e._f === G.RFC_2822) {
    yh(e);
    return;
  }
  e._a = [], Oe(e).empty = !0;
  var t = "" + e._i, n, r, a, o, i, s = t.length, l = 0, c, u;
  for (a = eh(e._f, e._locale).match($c) || [], u = a.length, n = 0; n < u; n++)
    o = a[n], r = (t.match(Fp(o, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && Oe(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), l += r.length), ra[o] ? (r ? Oe(e).empty = !1 : Oe(e).unusedTokens.push(o), Ip(o, r, e)) : e._strict && !r && Oe(e).unusedTokens.push(o);
  Oe(e).charsLeftOver = s - l, t.length > 0 && Oe(e).unusedInput.push(t), e._a[yt] <= 12 && Oe(e).bigHour === !0 && e._a[yt] > 0 && (Oe(e).bigHour = void 0), Oe(e).parsedDateParts = e._a.slice(0), Oe(e).meridiem = e._meridiem, e._a[yt] = X0(
    e._locale,
    e._a[yt],
    e._meridiem
  ), c = Oe(e).era, c !== null && (e._a[$t] = e._locale.erasConvertYear(c, e._a[$t])), Bc(e), Hc(e);
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
    o = 0, i = !1, t = Mc({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Wc(t), Pc(t) && (i = !0), o += Oe(t).charsLeftOver, o += Oe(t).unusedTokens.length * 10, Oe(t).score = o, s ? o < r && (r = o, n = t) : (r == null || o < r || i) && (r = o, n = t, i && (s = !0));
  ar(e, n || t);
}
function J0(e) {
  if (!e._d) {
    var t = Nc(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Zf(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Bc(e);
  }
}
function Q0(e) {
  var t = new yo(Hc(bh(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function bh(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Gn(e._l), t === null || n === void 0 && t === "" ? Gi({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), yn(t) ? new yo(Hc(t)) : (po(t) ? e._d = t : pn(n) ? Z0(e) : n ? Wc(e) : ey(e), Pc(e) || (e._d = null), e));
}
function ey(e) {
  var t = e._i;
  Lt(t) ? e._d = new Date(G.now()) : po(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? q0(e) : pn(t) ? (e._a = Zf(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Bc(e)) : Cr(t) ? J0(e) : qn(t) ? e._d = new Date(t) : G.createFromInputFallback(e);
}
function wh(e, t, n, r, a) {
  var o = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Cr(e) && Tc(e) || pn(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = e, o._f = t, o._strict = r, Q0(o);
}
function Xe(e, t, n, r) {
  return wh(e, t, n, r, !1);
}
var ty = nn(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Xe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Gi();
  }
), ny = nn(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Xe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Gi();
  }
);
function Sh(e, t) {
  var n, r;
  if (t.length === 1 && pn(t[0]) && (t = t[0]), !t.length)
    return Xe();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function ry() {
  var e = [].slice.call(arguments, 0);
  return Sh("isBefore", e);
}
function ay() {
  var e = [].slice.call(arguments, 0);
  return Sh("isAfter", e);
}
var oy = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, La = [
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
  var t, n = !1, r, a = La.length;
  for (t in e)
    if (Fe(e, t) && !(ht.call(La, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[La[r]]) {
      if (n)
        return !1;
      parseFloat(e[La[r]]) !== Me(e[La[r]]) && (n = !0);
    }
  return !0;
}
function sy() {
  return this._isValid;
}
function ly() {
  return wn(NaN);
}
function ns(e) {
  var t = Nc(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, o = t.week || t.isoWeek || 0, i = t.day || 0, s = t.hour || 0, l = t.minute || 0, c = t.second || 0, u = t.millisecond || 0;
  this._isValid = iy(t), this._milliseconds = +u + c * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +i + o * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = Gn(), this._bubble();
}
function hi(e) {
  return e instanceof ns;
}
function Cl(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function cy(e, t, n) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), o = 0, i;
  for (i = 0; i < r; i++)
    Me(e[i]) !== Me(t[i]) && o++;
  return o + a;
}
function xh(e, t) {
  he(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Pn(~~(n / 60), 2) + t + Pn(~~n % 60, 2);
  });
}
xh("Z", ":");
xh("ZZ", "");
re("Z", Qi);
re("ZZ", Qi);
Ge(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Uc(Qi, e);
});
var uy = /([\+\-]|\d\d)/gi;
function Uc(e, t) {
  var n = (t || "").match(e), r, a, o;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(uy) || ["-", 0, 0], o = +(a[1] * 60) + Me(a[2]), o === 0 ? 0 : a[0] === "+" ? o : -o);
}
function Yc(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (yn(e) || po(e) ? e.valueOf() : Xe(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), G.updateOffset(n, !1), n) : Xe(e).local();
}
function El(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
G.updateOffset = function() {
};
function dy(e, t, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Uc(Qi, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = El(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? _h(
      this,
      wn(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, G.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : El(this);
}
function fy(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function hy(e) {
  return this.utcOffset(0, e);
}
function my(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(El(this), "m")), this;
}
function gy() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Uc(kp, this._i);
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
  if (!Lt(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Mc(e, this), e = bh(e), e._a ? (t = e._isUTC ? Mn(e._a) : Xe(e._a), this._isDSTShifted = this.isValid() && cy(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function by() {
  return this.isValid() ? !this._isUTC : !1;
}
function wy() {
  return this.isValid() ? this._isUTC : !1;
}
function Ch() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Sy = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, xy = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function wn(e, t) {
  var n = e, r = null, a, o, i;
  return hi(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : qn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Sy.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Me(r[On]) * a,
    h: Me(r[yt]) * a,
    m: Me(r[mn]) * a,
    s: Me(r[zn]) * a,
    ms: Me(Cl(r[wr] * 1e3)) * a
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
  ), n = {}, n.ms = i.milliseconds, n.M = i.months), o = new ns(n), hi(e) && Fe(e, "_locale") && (o._locale = e._locale), hi(e) && Fe(e, "_isValid") && (o._isValid = e._isValid), o;
}
wn.fn = ns.prototype;
wn.invalid = ly;
function yr(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function zu(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Cy(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Yc(t, e), e.isBefore(t) ? n = zu(e, t) : (n = zu(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Eh(e, t) {
  return function(n, r) {
    var a, o;
    return r !== null && !isNaN(+r) && (Qf(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = n, n = r, r = o), a = wn(n, r), _h(this, a, e), this;
  };
}
function _h(e, t, n, r) {
  var a = t._milliseconds, o = Cl(t._days), i = Cl(t._months);
  e.isValid() && (r = r ?? !0, i && ch(e, Qa(e, "Month") + i * n), o && ih(e, "Date", Qa(e, "Date") + o * n), a && e._d.setTime(e._d.valueOf() + a * n), r && G.updateOffset(e, o || i));
}
var Ey = Eh(1, "add"), _y = Eh(-1, "subtract");
function Oh(e) {
  return typeof e == "string" || e instanceof String;
}
function Oy(e) {
  return yn(e) || po(e) || Oh(e) || qn(e) || Ty(e) || Ry(e) || e === null || e === void 0;
}
function Ry(e) {
  var t = Cr(e) && !Tc(e), n = !1, r = [
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
    o = r[a], n = n || Fe(e, o);
  return t && n;
}
function Ty(e) {
  var t = pn(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !qn(r) && Oh(e);
  }).length === 0), t && n;
}
function Py(e) {
  var t = Cr(e) && !Tc(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, o;
  for (a = 0; a < r.length; a += 1)
    o = r[a], n = n || Fe(e, o);
  return t && n;
}
function My(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Dy(e, t) {
  arguments.length === 1 && (arguments[0] ? Oy(arguments[0]) ? (e = arguments[0], t = void 0) : Py(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Xe(), r = Yc(n, this).startOf("day"), a = G.calendarFormat(this, r) || "sameElse", o = t && (Dn(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    o || this.localeData().calendar(a, this, Xe(n))
  );
}
function $y() {
  return new yo(this);
}
function Ny(e, t) {
  var n = yn(e) ? e : Xe(e);
  return this.isValid() && n.isValid() ? (t = rn(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ky(e, t) {
  var n = yn(e) ? e : Xe(e);
  return this.isValid() && n.isValid() ? (t = rn(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Ay(e, t, n, r) {
  var a = yn(e) ? e : Xe(e), o = yn(t) ? t : Xe(t);
  return this.isValid() && a.isValid() && o.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(o, n) : !this.isAfter(o, n))) : !1;
}
function Fy(e, t) {
  var n = yn(e) ? e : Xe(e), r;
  return this.isValid() && n.isValid() ? (t = rn(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
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
  if (r = Yc(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = rn(t), t) {
    case "year":
      o = mi(this, r) / 12;
      break;
    case "month":
      o = mi(this, r);
      break;
    case "quarter":
      o = mi(this, r) / 3;
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
  return n ? o : Jt(o);
}
function mi(e, t) {
  if (e.date() < t.date())
    return -mi(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), a, o;
  return t - r < 0 ? (a = e.clone().add(n - 1, "months"), o = (t - r) / (r - a)) : (a = e.clone().add(n + 1, "months"), o = (t - r) / (a - r)), -(n + o) || 0;
}
G.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
G.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Vy() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function zy(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? fi(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Dn(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", fi(n, "Z")) : fi(
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
  e || (e = this.isUtc() ? G.defaultFormatUtc : G.defaultFormat);
  var t = fi(this, e);
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
function Rh(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Gn(e), t != null && (this._locale = t), this);
}
var Th = nn(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ph() {
  return this._locale;
}
var Di = 1e3, aa = 60 * Di, $i = 60 * aa, Mh = (365 * 400 + 97) * 24 * $i;
function oa(e, t) {
  return (e % t + t) % t;
}
function Dh(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Mh : new Date(e, t, n).valueOf();
}
function $h(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Mh : Date.UTC(e, t, n);
}
function Gy(e) {
  var t, n;
  if (e = rn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? $h : Dh, e) {
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
      t = this._d.valueOf(), t -= oa(
        t + (this._isUTC ? 0 : this.utcOffset() * aa),
        $i
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= oa(t, aa);
      break;
    case "second":
      t = this._d.valueOf(), t -= oa(t, Di);
      break;
  }
  return this._d.setTime(t), G.updateOffset(this, !0), this;
}
function Ky(e) {
  var t, n;
  if (e = rn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? $h : Dh, e) {
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
      t = this._d.valueOf(), t += $i - oa(
        t + (this._isUTC ? 0 : this.utcOffset() * aa),
        $i
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += aa - oa(t, aa) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Di - oa(t, Di) - 1;
      break;
  }
  return this._d.setTime(t), G.updateOffset(this, !0), this;
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
  return Pc(this);
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
he("N", 0, 0, "eraAbbr");
he("NN", 0, 0, "eraAbbr");
he("NNN", 0, 0, "eraAbbr");
he("NNNN", 0, 0, "eraName");
he("NNNNN", 0, 0, "eraNarrow");
he("y", ["y", 1], "yo", "eraYear");
he("y", ["yy", 2], 0, "eraYear");
he("y", ["yyy", 3], 0, "eraYear");
he("y", ["yyyy", 4], 0, "eraYear");
re("N", qc);
re("NN", qc);
re("NNN", qc);
re("NNNN", vb);
re("NNNNN", pb);
Ge(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var a = n._locale.erasParse(e, r, n._strict);
    a ? Oe(n).era = a : Oe(n).invalidEra = e;
  }
);
re("y", Sa);
re("yy", Sa);
re("yyy", Sa);
re("yyyy", Sa);
re("yo", yb);
Ge(["y", "yy", "yyy", "yyyy"], $t);
Ge(["yo"], function(e, t, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[$t] = n._locale.eraYearOrdinalParse(e, a) : t[$t] = parseInt(e, 10);
});
function ib(e, t) {
  var n, r, a, o = this._eras || Gn("en")._eras;
  for (n = 0, r = o.length; n < r; ++n) {
    switch (typeof o[n].since) {
      case "string":
        a = G(o[n].since).startOf("day"), o[n].since = a.valueOf();
        break;
    }
    switch (typeof o[n].until) {
      case "undefined":
        o[n].until = 1 / 0;
        break;
      case "string":
        a = G(o[n].until).startOf("day").valueOf(), o[n].until = a.valueOf();
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
  return t === void 0 ? G(e.since).year() : G(e.since).year() + (t - e.offset) * n;
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
      return (this.year() - G(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function hb(e) {
  return Fe(this, "_erasNameRegex") || Gc.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function mb(e) {
  return Fe(this, "_erasAbbrRegex") || Gc.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function gb(e) {
  return Fe(this, "_erasNarrowRegex") || Gc.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function qc(e, t) {
  return t.erasAbbrRegex(e);
}
function vb(e, t) {
  return t.erasNameRegex(e);
}
function pb(e, t) {
  return t.erasNarrowRegex(e);
}
function yb(e, t) {
  return t._eraYearOrdinalRegex || Sa;
}
function Gc() {
  var e = [], t = [], n = [], r = [], a, o, i, s, l, c = this.eras();
  for (a = 0, o = c.length; a < o; ++a)
    i = Bn(c[a].name), s = Bn(c[a].abbr), l = Bn(c[a].narrow), t.push(i), e.push(s), n.push(l), r.push(i), r.push(s), r.push(l);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
he(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
he(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function rs(e, t) {
  he(0, [e, e.length], 0, t);
}
rs("gggg", "weekYear");
rs("ggggg", "weekYear");
rs("GGGG", "isoWeekYear");
rs("GGGGG", "isoWeekYear");
re("G", Ji);
re("g", Ji);
re("GG", Ze, Yt);
re("gg", Ze, Yt);
re("GGGG", Ac, kc);
re("gggg", Ac, kc);
re("GGGGG", Zi, Ki);
re("ggggg", Zi, Ki);
wo(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Me(e);
  }
);
wo(["gg", "GG"], function(e, t, n, r) {
  t[r] = G.parseTwoDigitYear(e);
});
function bb(e) {
  return Nh.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function wb(e) {
  return Nh.call(
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
function Nh(e, t, n, r, a) {
  var o;
  return e == null ? to(this, r, a).year : (o = Wn(e, r, a), t > o && (t = o), _b.call(this, e, t, n, r, a));
}
function _b(e, t, n, r, a) {
  var o = fh(e, t, n, r, a), i = eo(o.year, 0, o.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
he("Q", 0, "Qo", "quarter");
re("Q", th);
Ge("Q", function(e, t) {
  t[Vn] = (Me(e) - 1) * 3;
});
function Ob(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
he("D", ["DD", 2], "Do", "date");
re("D", Ze, xa);
re("DD", Ze, Yt);
re("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ge(["D", "DD"], On);
Ge("Do", function(e, t) {
  t[On] = Me(e.match(Ze)[0]);
});
var kh = Ca("Date", !0);
he("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
re("DDD", Xi);
re("DDDD", nh);
Ge(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Me(e);
});
function Rb(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
he("m", ["mm", 2], 0, "minute");
re("m", Ze, Fc);
re("mm", Ze, Yt);
Ge(["m", "mm"], mn);
var Tb = Ca("Minutes", !1);
he("s", ["ss", 2], 0, "second");
re("s", Ze, Fc);
re("ss", Ze, Yt);
Ge(["s", "ss"], zn);
var Pb = Ca("Seconds", !1);
he("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
he(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
he(0, ["SSS", 3], 0, "millisecond");
he(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
he(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
he(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
he(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
he(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
he(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
re("S", Xi, th);
re("SS", Xi, Yt);
re("SSS", Xi, nh);
var or, Ah;
for (or = "SSSS"; or.length <= 9; or += "S")
  re(or, Sa);
function Mb(e, t) {
  t[wr] = Me(("0." + e) * 1e3);
}
for (or = "S"; or.length <= 9; or += "S")
  Ge(or, Mb);
Ah = Ca("Milliseconds", !1);
he("z", 0, 0, "zoneAbbr");
he("zz", 0, 0, "zoneName");
function Db() {
  return this._isUTC ? "UTC" : "";
}
function $b() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var K = yo.prototype;
K.add = Ey;
K.calendar = Dy;
K.clone = $y;
K.diff = Ly;
K.endOf = Ky;
K.format = By;
K.from = Wy;
K.fromNow = Uy;
K.to = Yy;
K.toNow = qy;
K.get = Hp;
K.invalidAt = ab;
K.isAfter = Ny;
K.isBefore = ky;
K.isBetween = Ay;
K.isSame = Fy;
K.isSameOrAfter = jy;
K.isSameOrBefore = Iy;
K.isValid = nb;
K.lang = Th;
K.locale = Rh;
K.localeData = Ph;
K.max = ny;
K.min = ty;
K.parsingFlags = rb;
K.set = Bp;
K.startOf = Gy;
K.subtract = _y;
K.toArray = Qy;
K.toObject = eb;
K.toDate = Jy;
K.toISOString = zy;
K.inspect = Hy;
typeof Symbol < "u" && Symbol.for != null && (K[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
K.toJSON = tb;
K.toString = Vy;
K.unix = Zy;
K.valueOf = Xy;
K.creationData = ob;
K.eraName = cb;
K.eraNarrow = ub;
K.eraAbbr = db;
K.eraYear = fb;
K.year = oh;
K.isLeapYear = zp;
K.weekYear = bb;
K.isoWeekYear = wb;
K.quarter = K.quarters = Ob;
K.month = uh;
K.daysInMonth = Jp;
K.week = K.weeks = i0;
K.isoWeek = K.isoWeeks = s0;
K.weeksInYear = Cb;
K.weeksInWeekYear = Eb;
K.isoWeeksInYear = Sb;
K.isoWeeksInISOWeekYear = xb;
K.date = kh;
K.day = K.days = w0;
K.weekday = S0;
K.isoWeekday = x0;
K.dayOfYear = Rb;
K.hour = K.hours = P0;
K.minute = K.minutes = Tb;
K.second = K.seconds = Pb;
K.millisecond = K.milliseconds = Ah;
K.utcOffset = dy;
K.utc = hy;
K.local = my;
K.parseZone = gy;
K.hasAlignedHourOffset = vy;
K.isDST = py;
K.isLocal = by;
K.isUtcOffset = wy;
K.isUtc = Ch;
K.isUTC = Ch;
K.zoneAbbr = Db;
K.zoneName = $b;
K.dates = nn(
  "dates accessor is deprecated. Use date instead.",
  kh
);
K.months = nn(
  "months accessor is deprecated. Use month instead",
  uh
);
K.years = nn(
  "years accessor is deprecated. Use year instead",
  oh
);
K.zone = nn(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  fy
);
K.isDSTShifted = nn(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  yy
);
function Nb(e) {
  return Xe(e * 1e3);
}
function kb() {
  return Xe.apply(null, arguments).parseZone();
}
function Fh(e) {
  return e;
}
var je = Dc.prototype;
je.calendar = bp;
je.longDateFormat = Cp;
je.invalidDate = _p;
je.ordinal = Tp;
je.preparse = Fh;
je.postformat = Fh;
je.relativeTime = Mp;
je.pastFuture = Dp;
je.set = pp;
je.eras = ib;
je.erasParse = sb;
je.erasConvertYear = lb;
je.erasAbbrRegex = mb;
je.erasNameRegex = hb;
je.erasNarrowRegex = gb;
je.months = Gp;
je.monthsShort = Kp;
je.monthsParse = Zp;
je.monthsRegex = e0;
je.monthsShortRegex = Qp;
je.week = n0;
je.firstDayOfYear = o0;
je.firstDayOfWeek = a0;
je.weekdays = g0;
je.weekdaysMin = p0;
je.weekdaysShort = v0;
je.weekdaysParse = b0;
je.weekdaysRegex = C0;
je.weekdaysShortRegex = E0;
je.weekdaysMinRegex = _0;
je.isPM = R0;
je.meridiem = M0;
function Ni(e, t, n, r) {
  var a = Gn(), o = Mn().set(r, t);
  return a[n](o, e);
}
function jh(e, t, n) {
  if (qn(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ni(e, t, n, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Ni(e, r, n, "month");
  return a;
}
function Kc(e, t, n, r) {
  typeof e == "boolean" ? (qn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, qn(t) && (n = t, t = void 0), t = t || "");
  var a = Gn(), o = e ? a._week.dow : 0, i, s = [];
  if (n != null)
    return Ni(t, (n + o) % 7, r, "day");
  for (i = 0; i < 7; i++)
    s[i] = Ni(t, (i + o) % 7, r, "day");
  return s;
}
function Ab(e, t) {
  return jh(e, t, "months");
}
function Fb(e, t) {
  return jh(e, t, "monthsShort");
}
function jb(e, t, n) {
  return Kc(e, t, n, "weekdays");
}
function Ib(e, t, n) {
  return Kc(e, t, n, "weekdaysShort");
}
function Lb(e, t, n) {
  return Kc(e, t, n, "weekdaysMin");
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
G.lang = nn(
  "moment.lang is deprecated. Use moment.locale instead.",
  lr
);
G.langData = nn(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Gn
);
var Fn = Math.abs;
function Vb() {
  var e = this._data;
  return this._milliseconds = Fn(this._milliseconds), this._days = Fn(this._days), this._months = Fn(this._months), e.milliseconds = Fn(e.milliseconds), e.seconds = Fn(e.seconds), e.minutes = Fn(e.minutes), e.hours = Fn(e.hours), e.months = Fn(e.months), e.years = Fn(e.years), this;
}
function Ih(e, t, n, r) {
  var a = wn(t, n);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function zb(e, t) {
  return Ih(this, e, t, 1);
}
function Hb(e, t) {
  return Ih(this, e, t, -1);
}
function Hu(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Bb() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, a, o, i, s, l;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Hu(_l(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, a = Jt(e / 1e3), r.seconds = a % 60, o = Jt(a / 60), r.minutes = o % 60, i = Jt(o / 60), r.hours = i % 24, t += Jt(i / 24), l = Jt(Lh(t)), n += l, t -= Hu(_l(l)), s = Jt(n / 12), n %= 12, r.days = t, r.months = n, r.years = s, this;
}
function Lh(e) {
  return e * 4800 / 146097;
}
function _l(e) {
  return e * 146097 / 4800;
}
function Wb(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = rn(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + Lh(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(_l(this._months)), e) {
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
var Vh = Kn("ms"), Ub = Kn("s"), Yb = Kn("m"), qb = Kn("h"), Gb = Kn("d"), Kb = Kn("w"), Xb = Kn("M"), Zb = Kn("Q"), Jb = Kn("y"), Qb = Vh;
function ew() {
  return wn(this);
}
function tw(e) {
  return e = rn(e), this.isValid() ? this[e + "s"]() : NaN;
}
function $r(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var nw = $r("milliseconds"), rw = $r("seconds"), aw = $r("minutes"), ow = $r("hours"), iw = $r("days"), sw = $r("months"), lw = $r("years");
function cw() {
  return Jt(this.days() / 7);
}
var In = Math.round, Zr = {
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
  return Zr[e] === void 0 ? !1 : t === void 0 ? Zr[e] : (Zr[e] = t, e === "s" && (Zr.ss = t - 1), !0);
}
function mw(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Zr, a, o;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Zr, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), o = dw(this, !n, r, a), n && (o = a.pastFuture(+this, o)), a.postformat(o);
}
var js = Math.abs;
function zr(e) {
  return (e > 0) - (e < 0) || +e;
}
function as() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = js(this._milliseconds) / 1e3, t = js(this._days), n = js(this._months), r, a, o, i, s = this.asSeconds(), l, c, u, d;
  return s ? (r = Jt(e / 60), a = Jt(r / 60), e %= 60, r %= 60, o = Jt(n / 12), n %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = s < 0 ? "-" : "", c = zr(this._months) !== zr(s) ? "-" : "", u = zr(this._days) !== zr(s) ? "-" : "", d = zr(this._milliseconds) !== zr(s) ? "-" : "", l + "P" + (o ? c + o + "Y" : "") + (n ? c + n + "M" : "") + (t ? u + t + "D" : "") + (a || r || e ? "T" : "") + (a ? d + a + "H" : "") + (r ? d + r + "M" : "") + (e ? d + i + "S" : "")) : "P0D";
}
var ke = ns.prototype;
ke.isValid = sy;
ke.abs = Vb;
ke.add = zb;
ke.subtract = Hb;
ke.as = Wb;
ke.asMilliseconds = Vh;
ke.asSeconds = Ub;
ke.asMinutes = Yb;
ke.asHours = qb;
ke.asDays = Gb;
ke.asWeeks = Kb;
ke.asMonths = Xb;
ke.asQuarters = Zb;
ke.asYears = Jb;
ke.valueOf = Qb;
ke._bubble = Bb;
ke.clone = ew;
ke.get = tw;
ke.milliseconds = nw;
ke.seconds = rw;
ke.minutes = aw;
ke.hours = ow;
ke.days = iw;
ke.weeks = cw;
ke.months = sw;
ke.years = lw;
ke.humanize = mw;
ke.toISOString = as;
ke.toString = as;
ke.toJSON = as;
ke.locale = Rh;
ke.localeData = Ph;
ke.toIsoString = nn(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  as
);
ke.lang = Th;
he("X", 0, 0, "unix");
he("x", 0, 0, "valueOf");
re("x", Ji);
re("X", Ap);
Ge("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Ge("x", function(e, t, n) {
  n._d = new Date(Me(e));
});
//! moment.js
G.version = "2.30.1";
gp(Xe);
G.fn = K;
G.min = ry;
G.max = ay;
G.now = oy;
G.utc = Mn;
G.unix = Nb;
G.months = Ab;
G.isDate = po;
G.locale = lr;
G.invalid = Gi;
G.duration = wn;
G.isMoment = yn;
G.weekdays = jb;
G.parseZone = kb;
G.localeData = Gn;
G.isDuration = hi;
G.monthsShort = Fb;
G.weekdaysMin = Lb;
G.defineLocale = zc;
G.updateLocale = k0;
G.locales = A0;
G.weekdaysShort = Ib;
G.normalizeUnits = rn;
G.relativeTimeRounding = fw;
G.relativeTimeThreshold = hw;
G.calendarFormat = My;
G.prototype = K;
G.HTML5_FMT = {
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
const gw = "ddd, MMM Do YYYY, h:mm:ss a", vw = "ddd, MMM Do YYYY", pw = "h:mm:ss a", Xc = "YYYY-MM-DD HH:mm:ss", Zc = "YYYY-MM-DD", yw = "HH:mm:ss", zh = "YYYY-MM-DD HH:mm:ss.SSS", bw = (e) => {
  if (!e)
    return "";
  const t = G.utc(e).toDate();
  return G(t).local().format(gw);
}, ww = (e) => {
  if (!e)
    return "";
  const t = G.utc(e).toDate();
  return G(t).local().format(vw);
}, Sw = (e) => {
  if (!e)
    return "";
  const t = G.utc(e).toDate();
  return G(t).local().format(Xc);
}, xw = (e) => {
  if (!e)
    return "";
  const t = G.utc(e).toDate();
  return G(t).local().format(Zc);
}, Cw = (e) => {
  if (!e)
    return "";
  const t = G.utc(e).toDate();
  return G(t).local().format(zh);
}, sM = (e) => {
  if (!e)
    return "";
  const t = G.utc(e).toDate();
  return G(t).local().format(yw);
}, lM = (e) => {
  if (!e)
    return "";
  const t = G.utc(e).toDate();
  return G(t).local().format(pw);
}, cM = (e) => e ? G(e).utc().format(Xc) : "", Ew = (e) => e ? G(e).utc().format(zh) : "", _w = (e) => e ? G(e).utc().format(Zc) : "", uM = (e) => e ? G(e).local().format(Xc) : "", dM = (e) => e ? G(e).local().format(Zc) : "", Hh = (e) => e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-", Ow = (e, t = 6) => {
  if (!e)
    return "-";
  const n = Number(e).toFixed(t).toString().split("."), r = Hh(Number(n[0])), a = n.length == 2 ? n[1] : 0;
  return r + "." + a;
}, fM = (e, t) => {
  if (t[e + "_degrees"] === "" || t[e + "_minutes"] === "" || t[e + "_seconds"] === "") {
    t[e] = "";
    return;
  }
  const n = t[e + "_degrees"], r = t[e + "_minutes"], a = t[e + "_seconds"];
  t[e] = parseFloat(
    (parseInt(n) + parseInt(r) / 60 + parseFloat(a) / 3600).toFixed(8)
  );
}, hM = (e, t) => {
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
function Bh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Go = { exports: {} }, Va = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bu;
function Tw() {
  if (Bu) return Va;
  Bu = 1;
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
  return Va.Fragment = t, Va.jsx = n, Va.jsxs = n, Va;
}
var za = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wu;
function Pw() {
  return Wu || (Wu = 1, process.env.NODE_ENV !== "production" && (function() {
    function e($) {
      if ($ == null) return null;
      if (typeof $ == "function")
        return $.$$typeof === T ? null : $.displayName || $.name || null;
      if (typeof $ == "string") return $;
      switch ($) {
        case h:
          return "Fragment";
        case v:
          return "Profiler";
        case g:
          return "StrictMode";
        case x:
          return "Suspense";
        case E:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof $ == "object")
        switch (typeof $.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), $.$$typeof) {
          case p:
            return "Portal";
          case S:
            return $.displayName || "Context";
          case w:
            return ($._context.displayName || "Context") + ".Consumer";
          case C:
            var V = $.render;
            return $ = $.displayName, $ || ($ = V.displayName || V.name || "", $ = $ !== "" ? "ForwardRef(" + $ + ")" : "ForwardRef"), $;
          case O:
            return V = $.displayName || null, V !== null ? V : e($.type) || "Memo";
          case _:
            V = $._payload, $ = $._init;
            try {
              return e($(V));
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
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var B = V.error, Y = typeof Symbol == "function" && Symbol.toStringTag && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return B.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), t($);
      }
    }
    function r($) {
      if ($ === h) return "<>";
      if (typeof $ == "object" && $ !== null && $.$$typeof === _)
        return "<...>";
      try {
        var V = e($);
        return V ? "<" + V + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var $ = D.A;
      return $ === null ? null : $.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i($) {
      if (A.call($, "key")) {
        var V = Object.getOwnPropertyDescriptor($, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return $.key !== void 0;
    }
    function s($, V) {
      function B() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      B.isReactWarning = !0, Object.defineProperty($, "key", {
        get: B,
        configurable: !0
      });
    }
    function l() {
      var $ = e(this.type);
      return z[$] || (z[$] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), $ = this.props.ref, $ !== void 0 ? $ : null;
    }
    function c($, V, B, Y, se, J) {
      var Q = B.ref;
      return $ = {
        $$typeof: y,
        type: $,
        key: V,
        props: B,
        _owner: Y
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty($, "ref", {
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
        value: se
      }), Object.defineProperty($, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    }
    function u($, V, B, Y, se, J) {
      var Q = V.children;
      if (Q !== void 0)
        if (Y)
          if (P(Q)) {
            for (Y = 0; Y < Q.length; Y++)
              d(Q[Y]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(Q);
      if (A.call(V, "key")) {
        Q = e($);
        var te = Object.keys(V).filter(function(ve) {
          return ve !== "key";
        });
        Y = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", X[Q + Y] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          Q,
          te,
          Q
        ), X[Q + Y] = !0);
      }
      if (Q = null, B !== void 0 && (n(B), Q = "" + B), i(V) && (n(V.key), Q = "" + V.key), "key" in V) {
        B = {};
        for (var ce in V)
          ce !== "key" && (B[ce] = V[ce]);
      } else B = V;
      return Q && s(
        B,
        typeof $ == "function" ? $.displayName || $.name || "Unknown" : $
      ), c(
        $,
        Q,
        B,
        a(),
        se,
        J
      );
    }
    function d($) {
      f($) ? $._store && ($._store.validated = 1) : typeof $ == "object" && $ !== null && $.$$typeof === _ && ($._payload.status === "fulfilled" ? f($._payload.value) && $._payload.value._store && ($._payload.value._store.validated = 1) : $._store && ($._store.validated = 1));
    }
    function f($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === y;
    }
    var b = W, y = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), D = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, P = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function($) {
        return $();
      }
    };
    var N, z = {}, L = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), U = I(r(o)), X = {};
    za.Fragment = h, za.jsx = function($, V, B) {
      var Y = 1e4 > D.recentlyCreatedOwnerStacks++;
      return u(
        $,
        V,
        B,
        !1,
        Y ? Error("react-stack-top-frame") : L,
        Y ? I(r($)) : U
      );
    }, za.jsxs = function($, V, B) {
      var Y = 1e4 > D.recentlyCreatedOwnerStacks++;
      return u(
        $,
        V,
        B,
        !0,
        Y ? Error("react-stack-top-frame") : L,
        Y ? I(r($)) : U
      );
    };
  })()), za;
}
var Uu;
function Mw() {
  return Uu || (Uu = 1, process.env.NODE_ENV === "production" ? Go.exports = Tw() : Go.exports = Pw()), Go.exports;
}
var j = Mw();
const Wh = qi({}), mM = ({ children: e }) => {
  const [t, n] = Rw("user", null), r = async (s) => {
    n(s);
  }, a = () => {
    n(null), typeof window < "u" && window.location.assign("/login");
  }, o = (s) => {
    n(s);
  }, i = ba(
    () => ({
      authUser: t,
      login: r,
      logout: a,
      updateAuthUser: o
    }),
    [t]
  );
  return /* @__PURE__ */ j.jsx(Wh.Provider, { value: i, children: e });
}, os = () => Qt(Wh);
function Uh(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Dw } = Object.prototype, { getPrototypeOf: ca } = Object, { iterator: So, toStringTag: Yh } = Symbol, ki = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ro = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), ki(n, t))
      return !0;
    n = ca(n);
  }
  return !1;
}, $w = (e, t) => e != null && ro(e, t) ? e[t] : void 0, Jc = /* @__PURE__ */ ((e) => (t) => {
  const n = Dw.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), an = (e) => (e = e.toLowerCase(), (t) => Jc(t) === e), is = (e) => (t) => typeof t === e, { isArray: Or } = Array, Rr = is("undefined");
function Ea(e) {
  return e !== null && !Rr(e) && e.constructor !== null && !Rr(e.constructor) && Vt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qh = an("ArrayBuffer");
function Nw(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qh(e.buffer), t;
}
const kw = is("string"), Vt = is("function"), Gh = is("number"), _a = (e) => e !== null && typeof e == "object", Aw = (e) => e === !0 || e === !1, gi = (e) => {
  if (!_a(e))
    return !1;
  const t = ca(e);
  return (t === null || t === Object.prototype || ca(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !ro(e, Yh) && !ro(e, So);
}, Fw = (e) => {
  if (!_a(e) || Ea(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, jw = an("Date"), Iw = an("File"), Lw = (e) => !!(e && typeof e.uri < "u"), Vw = (e) => e && typeof e.getParts < "u", zw = an("Blob"), Hw = an("FileList"), Bw = an("Set"), Ww = (e) => _a(e) && Vt(e.pipe);
function Uw() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Yu = Uw(), qu = typeof Yu.FormData < "u" ? Yu.FormData : void 0, Yw = (e) => {
  if (!e) return !1;
  if (qu && e instanceof qu) return !0;
  const t = ca(e);
  if (!t || t === Object.prototype || !Vt(e.append)) return !1;
  const n = Jc(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && Vt(e.toString) && e.toString() === "[object FormData]";
}, qw = an("URLSearchParams"), [Gw, Kw, Xw, Zw] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(an), Jw = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Or(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (Ea(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let s;
    for (r = 0; r < i; r++)
      s = o[r], t.call(null, e[s], s, e);
  }
}
function Kh(e, t) {
  if (Ea(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xh = (e) => !Rr(e) && e !== Sr;
function Ol(...e) {
  const { caseless: t, skipUndefined: n } = Xh(this) && this || {}, r = {}, a = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const s = t && typeof i == "string" && Kh(r, i) || i, l = ki(r, s) ? r[s] : void 0;
    gi(l) && gi(o) ? r[s] = Ol(l, o) : gi(o) ? r[s] = Ol({}, o) : Or(o) ? r[s] = o.slice() : (!n || !Rr(o)) && (r[s] = o);
  };
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o];
    if (!s || Ea(s) || (xo(s, a), typeof s != "object" || Or(s)))
      continue;
    const l = Object.getOwnPropertySymbols(s);
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      uS.call(s, u) && a(s[u], u);
    }
  }
  return r;
}
const Qw = (e, t, n, { allOwnKeys: r } = {}) => (xo(
  t,
  (a, o) => {
    n && Vt(a) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Uh(a, n),
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
    e = n !== !1 && ca(e);
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
  if (!Gh(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, oS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ca(Uint8Array)), iS = (e, t) => {
  const r = (e && e[So]).call(e);
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
}, lS = an("HTMLFormElement"), cS = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
  return r.toUpperCase() + a;
}), { propertyIsEnumerable: uS } = Object.prototype, dS = an("RegExp"), Zh = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  xo(n, (a, o) => {
    let i;
    (i = t(a, o, e)) !== !1 && (r[o] = i || a);
  }), Object.defineProperties(e, r);
}, fS = (e) => {
  Zh(e, (t, n) => {
    if (Vt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (Vt(r)) {
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
  return !!(e && Vt(e.append) && e[Yh] === "FormData" && e[So]);
}
const pS = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (_a(r)) {
      if (t.has(r))
        return;
      if (Ea(r))
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
          a = Or(r) ? [] : {}, xo(r, (o, i) => {
            const s = n(o);
            !Rr(s) && (a[i] = s);
          });
        return t.delete(r), a;
      }
    }
    return r;
  };
  return n(e);
}, yS = an("AsyncFunction"), bS = (e) => e && (_a(e) || Vt(e)) && Vt(e.then) && Vt(e.catch), Jh = ((e, t) => e ? setImmediate : t ? ((n, r) => (Sr.addEventListener(
  "message",
  ({ source: a, data: o }) => {
    a === Sr && o === n && r.length && r.shift()();
  },
  !1
), (a) => {
  r.push(a), Sr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Vt(Sr.postMessage)), wS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sr) : typeof process < "u" && process.nextTick || Jh, Qh = (e) => e != null && Vt(e[So]), SS = (e) => e != null && ro(e, So) && Qh(e), M = {
  isArray: Or,
  isArrayBuffer: qh,
  isBuffer: Ea,
  isFormData: Yw,
  isArrayBufferView: Nw,
  isString: kw,
  isNumber: Gh,
  isBoolean: Aw,
  isObject: _a,
  isPlainObject: gi,
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
  isFunction: Vt,
  isStream: Ww,
  isURLSearchParams: qw,
  isTypedArray: oS,
  isFileList: Hw,
  forEach: xo,
  merge: Ol,
  extend: Qw,
  trim: Jw,
  stripBOM: eS,
  inherits: tS,
  toFlatObject: nS,
  kindOf: Jc,
  kindOfTest: an,
  endsWith: rS,
  toArray: aS,
  forEachEntry: iS,
  matchAll: sS,
  isHTMLForm: lS,
  hasOwnProperty: ki,
  hasOwnProp: ki,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: ro,
  getSafeProp: $w,
  reduceDescriptors: Zh,
  freezeMethods: fS,
  toObjectSet: hS,
  toCamelCase: cS,
  noop: mS,
  toFiniteNumber: gS,
  findKey: Kh,
  global: Sr,
  isContextDefined: Xh,
  isSpecCompliantForm: vS,
  toJSONObject: pS,
  isAsyncFn: yS,
  isThenable: bS,
  setImmediate: Jh,
  asap: wS,
  isIterable: Qh,
  isSafeIterable: SS
}, xS = M.toObjectSet([
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
    const s = M.hasOwnProp(t, n);
    !n || s && M.hasOwnProp(xS, n) || (n === "set-cookie" ? s ? t[n].push(r) : t[n] = [r] : t[n] = s ? t[n] + ", " + r : r);
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
function Qc(e, t) {
  return M.isArray(e) ? e.map((n) => Qc(n, t)) : ES(String(e).replace(t, ""));
}
const RS = (e) => Qc(e, _S), TS = (e) => Qc(e, OS);
function em(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return M.forEach(e.toJSON(), (n, r) => {
    t[r] = TS(n);
  }), t;
}
const Gu = Symbol("internals");
function Ha(e) {
  return e && String(e).trim().toLowerCase();
}
function vi(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(vi) : RS(String(e));
}
function PS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const MS = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Is(e) {
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
function DS(e) {
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
function $S(e) {
  const t = /* @__PURE__ */ Object.create(null), n = String(e);
  let r = 0, a = !1, o = !1;
  function i(s) {
    const l = Is(n.slice(r, s)), c = l.indexOf("=");
    if (c < 1)
      return;
    const u = Is(l.slice(0, c));
    if (!MS.test(u))
      return;
    const d = u.toLowerCase();
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const f = Is(l.slice(c + 1));
    t[d] = DS(f);
  }
  for (let s = 0; s < n.length; s++) {
    const l = n.charCodeAt(s);
    a ? o ? o = !1 : l === 92 ? o = !0 : l === 34 && (a = !1) : l === 34 ? a = !0 : (l === 44 || l === 59) && (i(s), r = s + 1);
  }
  return i(n.length), t;
}
const NS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ls(e, t, n, r, a) {
  if (M.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!M.isString(t)) {
    if (M.isString(r))
      return t.indexOf(r) !== -1;
    if (M.isRegExp(r))
      return r.test(t);
  }
}
function kS(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function AS(e, t) {
  const n = M.toCamelCase(" " + t);
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
let Nt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(s, l, c) {
      const u = Ha(l);
      if (!u)
        return;
      const d = M.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = vi(s));
    }
    const i = (s, l) => M.forEach(s, (c, u) => o(c, u, l));
    if (M.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (M.isString(t) && (t = t.trim()) && !NS(t))
      i(CS(t), n);
    else if (M.isObject(t) && M.isSafeIterable(t)) {
      let s = /* @__PURE__ */ Object.create(null), l, c;
      for (const u of t) {
        if (!M.isArray(u))
          throw new TypeError("Object iterator must return a key-value pair");
        c = u[0], M.hasOwnProp(s, c) ? (l = s[c], s[c] = M.isArray(l) ? [...l, u[1]] : [l, u[1]]) : s[c] = u[1];
      }
      i(s, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ha(t), t) {
      const r = M.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return PS(a);
        if (M.isFunction(n))
          return n.call(this, a, r);
        if (M.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ha(t), t) {
      const r = M.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ls(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(i) {
      if (i = Ha(i), i) {
        const s = M.findKey(r, i);
        s && (!n || Ls(r, r[s], s, n)) && (delete r[s], a = !0);
      }
    }
    return M.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ls(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return M.forEach(this, (a, o) => {
      const i = M.findKey(r, o);
      if (i) {
        n[i] = vi(a), delete n[o];
        return;
      }
      const s = t ? kS(o) : String(o).trim();
      s !== o && delete n[o], n[s] = vi(a), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && M.isArray(r) ? r.join(", ") : r);
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
    return M.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return $S(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[Gu] = this[Gu] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(i) {
      const s = Ha(i);
      r[s] || (AS(a, i), r[s] = !0);
    }
    return M.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Nt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
M.reduceDescriptors(Nt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
M.freezeMethods(Nt);
const Ai = "[REDACTED ****]";
function FS(e) {
  if (M.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (M.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function jS(e, t) {
  const n = new Set(t.map((o) => String(o).toLowerCase())), r = [], a = (o) => {
    if (o === null || typeof o != "object" || M.isBuffer(o)) return o;
    if (r.indexOf(o) !== -1) return;
    o instanceof Nt && (o = o.toJSON()), r.push(o);
    let i;
    if (M.isArray(o))
      i = [], o.forEach((s, l) => {
        const c = a(s);
        M.isUndefined(c) || (i[l] = c);
      });
    else {
      if (!M.isPlainObject(o) && FS(o))
        return r.pop(), o;
      i = /* @__PURE__ */ Object.create(null);
      for (const [s, l] of Object.entries(o)) {
        const c = n.has(s.toLowerCase()) ? Ai : a(l);
        M.isUndefined(c) || (i[s] = c);
      }
    }
    return r.pop(), i;
  };
  return a(e);
}
function Ku(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function IS(e) {
  return e.errors.map((n) => {
    try {
      return n && n.message ? Ku(n.message) : Ku(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
let ee = class tm extends Error {
  static from(t, n, r, a, o, i) {
    let s = t.message;
    !s && M.isArray(t.errors) && t.errors.length && (s = IS(t));
    const l = new tm(s, n || t.code, r, a, o);
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
    const t = this.config, n = t && M.hasOwnProp(t, "redact") ? t.redact : void 0, r = M.isArray(n) && n.length > 0 ? jS(t, n) : M.toJSONObject(t);
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
ee.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ee.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ee.ECONNABORTED = "ECONNABORTED";
ee.ETIMEDOUT = "ETIMEDOUT";
ee.ECONNREFUSED = "ECONNREFUSED";
ee.ERR_NETWORK = "ERR_NETWORK";
ee.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ee.ERR_DEPRECATED = "ERR_DEPRECATED";
ee.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ee.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ee.ERR_CANCELED = "ERR_CANCELED";
ee.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ee.ERR_INVALID_URL = "ERR_INVALID_URL";
ee.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const LS = null, nm = 100;
function Rl(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function rm(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vs(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = rm(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function VS(e) {
  return M.isArray(e) && !e.some(Rl);
}
const zS = M.toFlatObject(M, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ss(e, t, n) {
  if (!M.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = M.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(v, w) {
      return !M.isUndefined(w[v]);
    }
  );
  const r = n.metaTokens, a = n.visitor || y, o = n.dots, i = n.indexes, s = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? nm : n.maxDepth, c = s && M.isSpecCompliantForm(t), u = [];
  if (!M.isFunction(a))
    throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null) return "";
    if (M.isDate(g))
      return g.toISOString();
    if (M.isBoolean(g))
      return g.toString();
    if (!c && M.isBlob(g))
      throw new ee("Blob is not supported. Use a Buffer instead.");
    if (M.isArrayBuffer(g) || M.isTypedArray(g)) {
      if (c && typeof s == "function")
        return new s([g]);
      throw new ee("Blob is not supported. Use a Buffer instead.", ee.ERR_NOT_SUPPORT);
    }
    return g;
  }
  function f(g) {
    if (g > l)
      throw new ee(
        "Object is too deeply nested (" + g + " levels). Max depth: " + l,
        ee.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function b(g, v) {
    if (l === 1 / 0)
      return JSON.stringify(g);
    const w = [];
    return JSON.stringify(g, function(C, x) {
      if (!M.isObject(x))
        return x;
      for (; w.length && w[w.length - 1] !== this; )
        w.pop();
      return w.push(x), f(v + w.length - 1), x;
    });
  }
  function y(g, v, w) {
    let S = g;
    if (M.isReactNative(t) && M.isReactNativeBlob(g))
      return t.append(Vs(w, v, o), d(g)), !1;
    if (g && !w && typeof g == "object") {
      if (M.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), g = b(g, 1);
      else if (M.isArray(g) && VS(g) || (M.isFileList(g) || M.endsWith(v, "[]")) && (S = M.toArray(g)))
        return v = rm(v), S.forEach(function(x, E) {
          !(M.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vs([v], E, o) : i === null ? v : v + "[]",
            d(x)
          );
        }), !1;
    }
    return Rl(g) ? !0 : (t.append(Vs(w, v, o), d(g)), !1);
  }
  const p = Object.assign(zS, {
    defaultVisitor: y,
    convertValue: d,
    isVisitable: Rl
  });
  function h(g, v, w = 0) {
    if (!M.isUndefined(g)) {
      if (f(w), u.indexOf(g) !== -1)
        throw new Error("Circular reference detected in " + v.join("."));
      u.push(g), M.forEach(g, function(C, x) {
        (!(M.isUndefined(C) || C === null) && a.call(t, C, M.isString(x) ? x.trim() : x, v, p)) === !0 && h(C, v ? v.concat(x) : [x], w + 1);
      }), u.pop();
    }
  }
  if (!M.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Xu(e) {
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
function eu(e, t) {
  this._pairs = [], e && ss(e, this, t);
}
const am = eu.prototype;
am.append = function(t, n) {
  this._pairs.push([t, n]);
};
am.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Xu) : Xu;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function HS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function om(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = M.isFunction(n) ? {
    serialize: n
  } : n, a = M.getSafeProp(r, "encode") || HS, o = M.getSafeProp(r, "serialize");
  let i;
  if (o ? i = o(t, r) : i = M.isURLSearchParams(t) ? t.toString() : new eu(t, r).toString(a), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Zu {
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
    M.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const tu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, BS = typeof URLSearchParams < "u" ? URLSearchParams : eu, WS = typeof FormData < "u" ? FormData : null, US = typeof Blob < "u" ? Blob : null, YS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: BS,
    FormData: WS,
    Blob: US
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nu = typeof window < "u" && typeof document < "u", Tl = typeof navigator == "object" && navigator || void 0, qS = nu && (!Tl || ["ReactNative", "NativeScript", "NS"].indexOf(Tl.product) < 0), GS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", KS = nu && window.location.href || "http://localhost", XS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nu,
  hasStandardBrowserEnv: qS,
  hasStandardBrowserWebWorkerEnv: GS,
  navigator: Tl,
  origin: KS
}, Symbol.toStringTag, { value: "Module" })), Pt = {
  ...XS,
  ...YS
};
function ZS(e, t) {
  return ss(e, new Pt.classes.URLSearchParams(), {
    visitor: function(n, r, a, o) {
      return Pt.isNode && M.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Ju = nm;
function im(e) {
  if (e > Ju)
    throw new ee(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Ju,
      ee.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function JS(e) {
  const t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    im(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
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
function sm(e) {
  function t(n, r, a, o) {
    im(o);
    let i = n[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), l = o >= n.length;
    return i = !i && M.isArray(a) ? a.length : i, l ? (M.hasOwnProp(a, i) ? a[i] = M.isArray(a[i]) ? a[i].concat(r) : [a[i], r] : a[i] = r, !s) : ((!M.hasOwnProp(a, i) || !M.isObject(a[i])) && (a[i] = []), t(n, r, a[i], o) && M.isArray(a[i]) && (a[i] = QS(a[i])), !s);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const n = {};
    return M.forEachEntry(e, (r, a) => {
      t(JS(r), a, n, 0);
    }), n;
  }
  return null;
}
const Hr = (e, t) => e != null && M.hasOwnProp(e, t) ? e[t] : void 0;
function ex(e, t, n) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Co = {
  transitional: tu,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = M.isObject(t);
      if (o && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t))
        return a ? JSON.stringify(sm(t)) : t;
      if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t) || M.isReadableStream(t))
        return t;
      if (M.isArrayBufferView(t))
        return t.buffer;
      if (M.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let s;
      if (o) {
        const l = Hr(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ZS(t, l).toString();
        if ((s = M.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = Hr(this, "env"), u = c && c.FormData;
          return ss(
            s ? { "files[]": t } : t,
            u && new u(),
            l
          );
        }
      }
      return o || a ? (n.setContentType("application/json", !1), ex(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Hr(this, "transitional") || Co.transitional, r = n && n.forcedJSONParsing, a = Hr(this, "responseType"), o = a === "json";
      if (M.isResponse(t) || M.isReadableStream(t))
        return t;
      if (t && M.isString(t) && (r && !a || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Hr(this, "parseReviver"));
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError" ? ee.from(l, ee.ERR_BAD_RESPONSE, this, null, Hr(this, "response")) : l;
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
    FormData: Pt.classes.FormData,
    Blob: Pt.classes.Blob
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
M.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Co.headers[e] = {};
});
function zs(e, t) {
  const n = this || Co, r = t || n, a = Nt.from(r.headers);
  let o = r.data;
  return M.forEach(e, function(s) {
    o = s.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function lm(e) {
  return !!(e && e.__CANCEL__);
}
let Eo = class extends ee {
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
    super(t ?? "canceled", ee.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function cm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ee(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? ee.ERR_BAD_REQUEST : ee.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function tx(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function nx(e, t) {
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
    const b = u && c - u;
    return b ? Math.round(f * 1e3 / b) : void 0;
  };
}
function rx(e, t) {
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
const Fi = (e, t, n = 3) => {
  let r = 0;
  const a = nx(50, 250);
  return rx((o) => {
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
}, Qu = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, ed = (e, t = M.asap) => (...n) => t(() => e(...n)), ax = Pt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Pt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Pt.origin),
  Pt.navigator && /(msie|trident)/i.test(Pt.navigator.userAgent)
) : () => !0, ox = Pt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, o, i) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      M.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), M.isString(r) && s.push(`path=${r}`), M.isString(a) && s.push(`domain=${a}`), o === !0 && s.push("secure"), M.isString(i) && s.push(`SameSite=${i}`), document.cookie = s.join("; ");
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
function ix(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sx(e, t) {
  if (!t)
    return e;
  let n = e.length;
  for (; n > 0 && e.charCodeAt(n - 1) === 47; )
    n--;
  return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
const lx = /^https?:(?!\/\/)/i, cx = /[\t\n\r]/g;
function ux(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function dx(e) {
  return ux(e).replace(cx, "");
}
function fx(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, n, r = "") => `${n}${r}${Ai}`);
}
function hx(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Ai}@`), n = t.indexOf("#"), a = (n === -1 ? t : t.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${Ai}`
  );
  return n === -1 ? a : `${a}#${fx(t.slice(n + 1))}`;
}
function td(e, t) {
  if (typeof e == "string") {
    const n = dx(e);
    if (lx.test(n))
      throw new ee(
        `Invalid URL ${JSON.stringify(hx(n))}: missing "//" after protocol`,
        ee.ERR_INVALID_URL,
        t
      );
  }
}
function um(e, t, n, r) {
  td(t, r);
  let a = !ix(t);
  return e && (a || n === !1) ? (td(e, r), sx(e, t)) : t;
}
const nd = (e) => e instanceof Nt ? { ...e } : e, mx = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
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
  function r(u, d, f, b) {
    return M.isPlainObject(u) && M.isPlainObject(d) ? M.merge.call({ caseless: b }, u, d) : M.isPlainObject(d) ? M.merge({}, d) : M.isArray(d) ? d.slice() : d;
  }
  function a(u, d, f, b) {
    if (M.isUndefined(d)) {
      if (!M.isUndefined(u))
        return r(void 0, u, f, b);
    } else return r(u, d, f, b);
  }
  function o(u, d) {
    if (!M.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
    if (M.isUndefined(d)) {
      if (!M.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function s(u) {
    const d = M.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!M.isUndefined(d))
      if (M.isPlainObject(d)) {
        if (M.hasOwnProp(d, u))
          return d[u];
      } else
        return;
    const f = M.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (M.isPlainObject(f) && M.hasOwnProp(f, u))
      return f[u];
  }
  function l(u, d, f) {
    if (M.hasOwnProp(t, f))
      return r(u, d);
    if (M.hasOwnProp(e, f))
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
    headers: (u, d, f) => a(nd(u), nd(d), f, !0)
  };
  return M.forEach(mx({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const f = M.hasOwnProp(c, d) ? c[d] : a, b = M.hasOwnProp(e, d) ? e[d] : void 0, y = M.hasOwnProp(t, d) ? t[d] : void 0, p = f(b, y, d);
    M.isUndefined(p) && f !== l || (n[d] = p);
  }), M.hasOwnProp(t, "validateStatus") && M.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (M.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const gx = ["content-type", "content-length"];
function vx(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, a]) => {
    gx.includes(r.toLowerCase()) && e.set(r, a);
  });
}
const px = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function dm(e) {
  const t = Tr({}, e), n = (f) => M.hasOwnProp(t, f) ? t[f] : void 0, r = n("data");
  let a = n("withXSRFToken");
  const o = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let s = n("headers");
  const l = n("auth"), c = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
  if (t.headers = s = Nt.from(s), t.url = om(
    um(c, d, u, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const f = M.getSafeProp(l, "username") || "", b = M.getSafeProp(l, "password") || "";
    try {
      s.set(
        "Authorization",
        "Basic " + btoa(f + ":" + (b ? px(b) : ""))
      );
    } catch (y) {
      throw ee.from(y, ee.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (M.isFormData(r) && (Pt.hasStandardBrowserEnv || Pt.hasStandardBrowserWebWorkerEnv || M.isReactNative(r) ? s.setContentType(void 0) : M.isFunction(r.getHeaders) && vx(s, r.getHeaders(), n("formDataHeaderPolicy"))), Pt.hasStandardBrowserEnv && (M.isFunction(a) && (a = a(t)), a === !0 || a == null && ax(t.url))) {
    const b = o && i && ox.read(i);
    b && s.set(o, b);
  }
  return t;
}
const yx = typeof XMLHttpRequest < "u", bx = yx && function(e) {
  return new Promise(function(n, r) {
    const a = dm(e);
    let o = a.data;
    const i = Nt.from(a.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: c } = a, u, d, f, b, y;
    function p() {
      b && b(), y && y(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(a.method.toUpperCase(), a.url, !0), h.timeout = a.timeout;
    function g() {
      if (!h)
        return;
      const w = Nt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), C = {
        data: !s || s === "text" || s === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: w,
        config: e,
        request: h
      };
      cm(
        function(E) {
          n(E), p();
        },
        function(E) {
          r(E), p();
        },
        C
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith("file:")) || setTimeout(g);
    }, h.onabort = function() {
      h && (r(new ee("Request aborted", ee.ECONNABORTED, e, h)), p(), h = null);
    }, h.onerror = function(S) {
      const C = S && S.message ? S.message : "Network Error", x = new ee(C, ee.ERR_NETWORK, e, h);
      x.event = S || null, r(x), p(), h = null;
    }, h.ontimeout = function() {
      let S = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const C = a.transitional || tu;
      a.timeoutErrorMessage && (S = a.timeoutErrorMessage), r(
        new ee(
          S,
          C.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
          e,
          h
        )
      ), p(), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && M.forEach(em(i), function(S, C) {
      h.setRequestHeader(C, S);
    }), M.isUndefined(a.withCredentials) || (h.withCredentials = !!a.withCredentials), s && s !== "json" && (h.responseType = a.responseType), c && ([f, y] = Fi(c, !0), h.addEventListener("progress", f)), l && h.upload && ([d, b] = Fi(l), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", b)), (a.cancelToken || a.signal) && (u = (w) => {
      h && (r(!w || w.type ? new Eo(null, e, h) : w), h.abort(), p(), h = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const v = tx(a.url);
    if (v && !Pt.protocols.includes(v)) {
      r(
        new ee(
          "Unsupported protocol " + v + ":",
          ee.ERR_BAD_REQUEST,
          e
        )
      ), p();
      return;
    }
    h.send(o || null);
  });
}, wx = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const a = function(l) {
    if (!r) {
      r = !0, i();
      const c = l instanceof Error ? l : this.reason;
      n.abort(
        c instanceof ee ? c : new Eo(c instanceof Error ? c.message : c)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, a(new ee(`timeout of ${t}ms exceeded`, ee.ETIMEDOUT));
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
  return s.unsubscribe = () => M.asap(i), s;
}, Sx = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, xx = async function* (e, t) {
  for await (const n of Cx(e))
    yield* Sx(n, t);
}, Cx = async function* (e) {
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
}, rd = (e, t, n, r) => {
  const a = xx(e, t);
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
}, ad = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, fm = (e, t, n) => t + 2 < n && ad(e.charCodeAt(t + 1)) && ad(e.charCodeAt(t + 2)), od = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Ex = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, _x = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Ox = (e) => {
  const t = Math.floor(e / 4), n = e % 4;
  return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Rx = (e) => {
  const t = e.length;
  let n = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Tx = (e) => {
  const t = e.length;
  let n = 0, r = 0, a = !1;
  for (let o = 0; o < t; o++) {
    let i = e.charCodeAt(o);
    if (i === 37 && fm(e, o, t) && (i = od(e.charCodeAt(o + 1)) * 16 + od(e.charCodeAt(o + 2)), o += 2), !_x(i)) {
      if (i === 61) {
        r++;
        continue;
      }
      if (!Ex(i) || r > 0) {
        a = !0;
        continue;
      }
      n++;
    }
  }
  return a || r > 2 || r > 0 && (n + r) % 4 !== 0 || n % 4 === 1 ? Rx(e) : Ox(n);
}, Px = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const n = e.indexOf(",");
  if (n < 0) return 0;
  const r = e.slice(5, n), a = e.slice(n + 1);
  if (/;base64/i.test(r))
    return t(a);
  let i = 0;
  for (let s = 0, l = a.length; s < l; s++) {
    const c = a.charCodeAt(s);
    if (c === 37 && fm(a, s, l))
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
function Mx(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return Px(
    t === -1 ? e : e.slice(0, t),
    Tx
  );
}
const ru = "1.19.0", id = 64 * 1024, { isFunction: Ko } = M, Dx = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), sd = (e) => {
  if (!M.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, ld = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, $x = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Nx = (e) => {
  const t = M.global !== void 0 && M.global !== null ? M.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = M.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: a, Request: o, Response: i } = e, s = a ? Ko(a) : typeof fetch == "function", l = Ko(o), c = Ko(i);
  if (!s)
    return !1;
  const u = s && Ko(n), d = s && (typeof r == "function" ? /* @__PURE__ */ ((g) => (v) => g.encode(v))(new r()) : async (g) => new Uint8Array(await new o(g).arrayBuffer())), f = l && u && ld(() => {
    let g = !1;
    const v = new o(Pt.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }), w = v.headers.has("Content-Type");
    return v.body != null && v.body.cancel(), g && !w;
  }), b = c && u && ld(() => M.isReadableStream(new i("").body)), y = {
    stream: b && ((g) => g.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !y[g] && (y[g] = (v, w) => {
      let S = v && v[g];
      if (S)
        return S.call(v);
      throw new ee(
        `Response type '${g}' is not supported`,
        ee.ERR_NOT_SUPPORT,
        w
      );
    });
  });
  const p = async (g) => {
    if (g == null)
      return 0;
    if (M.isBlob(g))
      return g.size;
    if (M.isSpecCompliantForm(g))
      return (await new o(Pt.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (M.isArrayBufferView(g) || M.isArrayBuffer(g))
      return g.byteLength;
    if (M.isURLSearchParams(g) && (g = g + ""), M.isString(g))
      return (await d(g)).byteLength;
  }, h = async (g, v) => {
    const w = M.toFiniteNumber(g.getContentLength());
    return w ?? p(v);
  };
  return async (g) => {
    let {
      url: v,
      method: w,
      data: S,
      signal: C,
      cancelToken: x,
      timeout: E,
      onDownloadProgress: O,
      onUploadProgress: _,
      responseType: R,
      headers: T,
      withCredentials: D = "same-origin",
      fetchOptions: A,
      maxContentLength: P,
      maxBodyLength: I
    } = dm(g);
    const N = M.isNumber(P) && P > -1, z = M.isNumber(I) && I > -1, L = (J) => M.hasOwnProp(g, J) ? g[J] : void 0;
    let U = a || fetch;
    R = R ? (R + "").toLowerCase() : "text";
    let X = wx(
      [C, x && x.toAbortSignal()],
      E
    ), $ = null;
    const V = X && X.unsubscribe && (() => {
      X.unsubscribe();
    });
    let B, Y = null;
    const se = () => new ee(
      "Request body larger than maxBodyLength limit",
      ee.ERR_BAD_REQUEST,
      g,
      $
    );
    try {
      let J;
      const Q = L("auth");
      if (Q) {
        const H = M.getSafeProp(Q, "username") || "", ae = M.getSafeProp(Q, "password") || "";
        J = {
          username: H,
          password: ae
        };
      }
      if ($x(v)) {
        const H = new URL(v, Pt.origin);
        if (!J && (H.username || H.password)) {
          const ae = sd(H.username), me = sd(H.password);
          J = {
            username: ae,
            password: me
          };
        }
        (H.username || H.password) && (H.username = "", H.password = "", v = H.href);
      }
      if (J && (T.delete("authorization"), T.set(
        "Authorization",
        "Basic " + btoa(Dx((J.username || "") + ":" + (J.password || "")))
      )), N && typeof v == "string" && v.startsWith("data:") && Mx(v) > P)
        throw new ee(
          "maxContentLength size of " + P + " exceeded",
          ee.ERR_BAD_RESPONSE,
          g,
          $
        );
      if (z && w !== "get" && w !== "head") {
        const H = await p(S);
        if (typeof H == "number" && isFinite(H) && (B = H, H > I))
          throw se();
      }
      const te = z && (M.isReadableStream(S) || M.isStream(S)), ce = (H, ae, me) => rd(
        H,
        id,
        (pe) => {
          if (z && pe > I)
            throw Y = se();
          ae && ae(pe);
        },
        me
      );
      if (f && w !== "get" && w !== "head" && (_ || te)) {
        if (B = B ?? await h(T, S), B !== 0 || te) {
          let H = new o(v, {
            method: "POST",
            body: S,
            duplex: "half"
          }), ae;
          if (M.isFormData(S) && (ae = H.headers.get("content-type")) && T.setContentType(ae), H.body) {
            const [me, pe] = _ && Qu(
              B,
              Fi(ed(_))
            ) || [];
            S = ce(H.body, me, pe);
          }
        }
      } else if (te && !l && u && w !== "get" && w !== "head")
        S = ce(S);
      else if (te && l && !f && w !== "get" && w !== "head")
        throw new ee(
          "Stream request bodies are not supported by the current fetch implementation",
          ee.ERR_NOT_SUPPORT,
          g,
          $
        );
      M.isString(D) || (D = D ? "include" : "omit");
      const ve = l && "credentials" in o.prototype;
      if (M.isFormData(S)) {
        const H = T.getContentType();
        H && /^multipart\/form-data/i.test(H) && !/boundary=/i.test(H) && T.delete("content-type");
      }
      T.set("User-Agent", "axios/" + ru, !1);
      const be = {
        ...A,
        signal: X,
        method: w.toUpperCase(),
        headers: em(T.normalize()),
        body: S,
        duplex: "half",
        credentials: ve ? D : void 0
      };
      $ = l && new o(v, be);
      let ie = await (l ? U($, A) : U(v, be));
      const Ce = Nt.from(ie.headers);
      if (N) {
        const H = M.toFiniteNumber(Ce.getContentLength());
        if (H != null && H > P)
          throw new ee(
            "maxContentLength size of " + P + " exceeded",
            ee.ERR_BAD_RESPONSE,
            g,
            $
          );
      }
      const q = b && (R === "stream" || R === "response");
      if (b && ie.body && (O || N || q && V)) {
        const H = {};
        ["status", "statusText", "headers"].forEach((_e) => {
          H[_e] = ie[_e];
        });
        const ae = M.toFiniteNumber(Ce.getContentLength()), [me, pe] = O && Qu(
          ae,
          Fi(ed(O), !0)
        ) || [];
        let Te = 0;
        const ge = (_e) => {
          if (N && (Te = _e, Te > P))
            throw new ee(
              "maxContentLength size of " + P + " exceeded",
              ee.ERR_BAD_RESPONSE,
              g,
              $
            );
          me && me(_e);
        };
        ie = new i(
          rd(ie.body, id, ge, () => {
            pe && pe(), V && V();
          }),
          H
        );
      }
      R = R || "text";
      let le = await y[M.findKey(y, R) || "text"](
        ie,
        g
      );
      if (N && !b && !q) {
        let H;
        if (le != null && (typeof le.byteLength == "number" ? H = le.byteLength : typeof le.size == "number" ? H = le.size : typeof le == "string" && (H = typeof r == "function" ? new r().encode(le).byteLength : le.length)), typeof H == "number" && H > P)
          throw new ee(
            "maxContentLength size of " + P + " exceeded",
            ee.ERR_BAD_RESPONSE,
            g,
            $
          );
      }
      return !q && V && V(), await new Promise((H, ae) => {
        cm(H, ae, {
          data: le,
          headers: Nt.from(ie.headers),
          status: ie.status,
          statusText: ie.statusText,
          config: g,
          request: $
        });
      });
    } catch (J) {
      if (V && V(), X && X.aborted && X.reason instanceof ee) {
        const Q = X.reason;
        throw Q.config = g, $ && (Q.request = $), J !== Q && Object.defineProperty(Q, "cause", {
          __proto__: null,
          value: J,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Q;
      }
      if (Y)
        throw $ && !Y.request && (Y.request = $), Y;
      if (J instanceof ee)
        throw $ && !J.request && (J.request = $), J;
      if (J && J.name === "TypeError" && /Load failed|fetch/i.test(J.message)) {
        const Q = new ee(
          "Network Error",
          ee.ERR_NETWORK,
          g,
          $,
          J && J.response
        );
        throw Object.defineProperty(Q, "cause", {
          __proto__: null,
          value: J.cause || J,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Q;
      }
      throw ee.from(J, J && J.code, g, $, J && J.response);
    }
  };
}, kx = /* @__PURE__ */ new Map(), hm = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: a } = t, o = [r, a, n];
  let i = o.length, s = i, l, c, u = kx;
  for (; s--; )
    l = o[s], c = u.get(l), c === void 0 && u.set(l, c = s ? /* @__PURE__ */ new Map() : Nx(t)), u = c;
  return c;
};
hm();
const au = {
  http: LS,
  xhr: bx,
  fetch: {
    get: hm
  }
};
M.forEach(au, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const cd = (e) => `- ${e}`, Ax = (e) => M.isFunction(e) || e === null || e === !1;
function Fx(e, t) {
  e = M.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, a;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let s;
    if (a = r, !Ax(r) && (a = au[(s = String(r)).toLowerCase()], a === void 0))
      throw new ee(`Unknown adapter '${s}'`);
    if (a && (M.isFunction(a) || (a = a.get(t))))
      break;
    o[s || "#" + i] = a;
  }
  if (!a) {
    const i = Object.entries(o).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = n ? i.length > 1 ? `since :
` + i.map(cd).join(`
`) : " " + cd(i[0]) : "as no adapter specified";
    throw new ee(
      "There is no suitable adapter to dispatch the request " + s,
      ee.ERR_NOT_SUPPORT
    );
  }
  return a;
}
const mm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Fx,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: au
};
function Hs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Eo(null, e);
}
function Bs(e) {
  return Hs(e), e.headers = Nt.from(e.headers), e.data = zs.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), mm.getAdapter(e.adapter || Co.adapter, e)(e).then(
    function(r) {
      Hs(e), e.response = r;
      try {
        r.data = zs.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = Nt.from(r.headers), r;
    },
    function(r) {
      if (!lm(r) && (Hs(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = zs.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = Nt.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const ls = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ls[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ud = {};
ls.transitional = function(t, n, r) {
  function a(o, i) {
    return "[Axios v" + ru + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, s) => {
    if (t === !1)
      throw new ee(
        a(i, " has been removed" + (n ? " in " + n : "")),
        ee.ERR_DEPRECATED
      );
    return n && !ud[i] && (ud[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, s) : !0;
  };
};
ls.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function jx(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], i = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (i) {
      const s = e[o], l = s === void 0 || i(s, o, e);
      if (l !== !0)
        throw new ee(
          "option " + o + " must be " + l,
          ee.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new ee("Unknown option " + o, ee.ERR_BAD_OPTION);
  }
}
const pi = {
  assertOptions: jx,
  validators: ls
}, Mt = pi.validators;
let Er = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Zu(),
      response: new Zu()
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
    r !== void 0 && pi.assertOptions(
      r,
      {
        silentJSONParsing: Mt.transitional(Mt.boolean),
        forcedJSONParsing: Mt.transitional(Mt.boolean),
        clarifyTimeoutError: Mt.transitional(Mt.boolean),
        legacyInterceptorReqResOrdering: Mt.transitional(Mt.boolean),
        advertiseZstdAcceptEncoding: Mt.transitional(Mt.boolean),
        validateStatusUndefinedResolves: Mt.transitional(Mt.boolean)
      },
      !1
    ), a != null && (M.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : pi.assertOptions(
      a,
      {
        encode: Mt.function,
        serialize: Mt.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), pi.assertOptions(
      n,
      {
        baseUrl: Mt.spelling("baseURL"),
        withXsrfToken: Mt.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && M.merge(o.common, o[n.method]);
    o && M.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (y) => {
      delete o[y];
    }), n.headers = Nt.concat(i, o);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(p) {
      if (typeof p.runWhen == "function" && p.runWhen(n) === !1)
        return;
      l = l && p.synchronous;
      const h = n.transitional || tu;
      h && h.legacyInterceptorReqResOrdering ? s.unshift(p.fulfilled, p.rejected) : s.push(p.fulfilled, p.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const y = [Bs.bind(this), void 0];
      for (y.unshift(...s), y.push(...c), f = y.length, u = Promise.resolve(n); d < f; )
        u = u.then(y[d++], y[d++]);
      return u;
    }
    f = s.length;
    let b = n;
    for (; d < f; ) {
      const y = s[d++], p = s[d++];
      try {
        b = y ? y(b) : b;
      } catch (h) {
        if (!p) {
          u = Promise.reject(h);
          break;
        }
        try {
          const g = p.call(this, h);
          M.isThenable(g) && (u = Promise.resolve(g).then(
            () => Bs.call(this, b)
          ));
        } catch (g) {
          u = Promise.reject(g);
        }
        break;
      }
    }
    if (!u)
      try {
        u = Bs.call(this, b);
      } catch (y) {
        u = Promise.reject(y);
      }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Tr(this.defaults, t);
    const n = um(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return om(n, t.params, t.paramsSerializer);
  }
};
M.forEach(["delete", "get", "head", "options"], function(t) {
  Er.prototype[t] = function(n, r) {
    return this.request(
      Tr(r || {}, {
        method: t,
        url: n,
        data: r && M.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
M.forEach(["post", "put", "patch", "query"], function(t) {
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
let Ix = class gm {
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
      r.reason || (r.reason = new Eo(o, i, s), n(r.reason));
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
      token: new gm(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function Lx(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Vx(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const Pl = {
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
Object.entries(Pl).forEach(([e, t]) => {
  Pl[t] = e;
});
function vm(e) {
  const t = new Er(e), n = Uh(Er.prototype.request, t);
  return M.extend(n, Er.prototype, t, { allOwnKeys: !0 }), M.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return vm(Tr(e, a));
  }, n;
}
const mt = vm(Co);
mt.Axios = Er;
mt.CanceledError = Eo;
mt.CancelToken = Ix;
mt.isCancel = lm;
mt.VERSION = ru;
mt.toFormData = ss;
mt.AxiosError = ee;
mt.Cancel = mt.CanceledError;
mt.all = function(t) {
  return Promise.all(t);
};
mt.spread = Lx;
mt.isAxiosError = Vx;
mt.mergeConfig = Tr;
mt.AxiosHeaders = Nt;
mt.formToJSON = (e) => sm(M.isHTMLForm(e) ? new FormData(e) : e);
mt.getAdapter = mm.getAdapter;
mt.HttpStatusCode = Pl;
mt.default = mt;
const {
  Axios: yM,
  AxiosError: bM,
  CanceledError: wM,
  isCancel: SM,
  CancelToken: xM,
  VERSION: CM,
  all: EM,
  Cancel: _M,
  isAxiosError: OM,
  spread: RM,
  toFormData: TM,
  AxiosHeaders: PM,
  HttpStatusCode: MM,
  formToJSON: DM,
  getAdapter: $M,
  mergeConfig: NM,
  create: kM
} = mt, zx = window.env.API_BASE_URL;
let Br;
const yi = mt.create({
  baseURL: zx,
  headers: {
    "Content-Type": "application/json"
  }
});
yi.interceptors.request.use((e) => {
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
const pm = W.createContext({}), ym = () => W.useContext(pm), AM = ({ children: e }) => {
  const [t, n] = W.useState({});
  return /* @__PURE__ */ j.jsx(
    pm.Provider,
    {
      value: {
        notificationData: t,
        setNotificationData: n
      },
      children: e
    }
  );
}, bm = W.createContext(
  {}
), Pr = () => W.useContext(bm), FM = ({
  children: e
}) => {
  const { logout: t } = os(), { setNotificationData: n } = ym(), [r, a] = W.useState([]), [o, i] = W.useState([]), s = (_) => {
    const R = y(_.key);
    return R.path = _.path, R.pageSize = _.pageSize ?? 0, R.queryText = _.queryText ?? "", R.onSuccess = _.onSuccess, R;
  }, l = () => {
    i(Object.assign([], o));
  }, c = () => {
    a(Object.assign([], r));
  }, u = (_, R, T = !0, D = !0) => {
    let A = "";
    R = R.response, !R || !R.data || R.data instanceof String ? A = "Unhandled server exception." : R.data.message ? R.data.message.includes("Unauthenticated") ? (A = "Session has expired. Please login again.", S(), t()) : A = "Unhandled server exception." : A = R.data.error || "Unhandled server exception.", _.isLoading = !1, _.isDone = !0, A instanceof Object ? _.errors = A : (_.errorMessage = A, R && D && n({
      show_notification: !0,
      error_title: R.data.error_title,
      error_message: A
    })), T ? (_.data = [], c()) : l();
  }, d = (_) => {
    _.isDone = !1, f([_]);
  }, f = (_, R = !0) => {
    for (const T of _) {
      const D = y(T.key);
      if (D.path = T.path, D.onSuccess = T.onSuccess, !R && (D.isLoading || D.isDone))
        continue;
      if (!D.path) {
        setTimeout(() => {
          D.data = [], c();
        }, 500);
        continue;
      }
      const P = D.path.includes("?") ? "&" : "?";
      D.queryText.length >= 2 ? D.pathWithParams = `${D.path}${P}query_text=${D.queryText}` : D.pageSize ? D.pathWithParams = `${D.path}${P}page_size=${D.pageSize}&page=${D.currentPage}` : D.pathWithParams = D.path, D.isLoading = !0, c(), yi.get(D.pathWithParams).then((I) => {
        if (!I.data) {
          u(D, I);
          return;
        }
        let N = I.data.data;
        N instanceof Object && N.current_page ? (D.isPaginated = !0, D.currentPage = N.current_page, D.lastPage = N.last_page, D.total = N.total, D.from = N.from, N = N.data) : N instanceof Object && N.data ? (D.isPaginated = !1, D.total = N.total, N = N.data, D.currentPage = 0, D.lastPage = 1) : (D.isPaginated = !1, D.currentPage = 0, D.lastPage = 1), N instanceof Array ? (D.rawData = N, D.data = D.rawData) : D.singleData = N, D.isLoading = !1, D.isDone = !0, D.onSuccess && D.onSuccess(N), c();
      }).catch((I) => {
        u(D, I);
      });
    }
  }, b = (_, R) => {
    let T = _.find((D) => D.key == R);
    return T || (T = {
      key: R,
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
    }, _.push(T)), T;
  }, y = (_) => b(r, _), p = (_, R, T) => {
    const D = y(_), A = D.rawData, P = A.links ? A.data : A;
    R = R.toLowerCase();
    let I = P.filter((N) => {
      let z = !1;
      return T.forEach((L) => {
        if (N[L] && N[L].toLowerCase().includes(R))
          return z = !0, !0;
      }), z;
    });
    if (Object.prototype.hasOwnProperty.call(A, "links")) {
      const N = JSON.parse(JSON.stringify(A));
      N.data = I, I = N;
    }
    D.data = I, c();
  }, h = (_) => b(o, _), g = (_) => {
    const R = h(_.key);
    if (R.isLoading) {
      console.warn(
        `Request ${_.key} is already in progress, ignoring duplicate submission`
      );
      return;
    }
    R.path = _.path, R.isLoading = !0, R.errorMessage = null, R.errors = null, l();
    const T = R.postData;
    _.extraParameters && Object.keys(_.extraParameters).forEach((A) => {
      T[A] = _.extraParameters[A];
    });
    const D = [];
    Object.keys(T).forEach((A) => {
      if (A.endsWith("_data-date")) {
        const P = A.replace("_data-date", ""), I = A, N = P + "_data-time";
        T[I] && (T[N] ? (T[P] = T[I] + " " + T[N], T[P] = Ew(
          T[P]
        )) : T[P] = _w(T[I])), D.push(I), D.push(N);
      }
    }), D.forEach(function(A) {
      delete T[A];
    }), yi.post(_.path, T).then((A) => {
      R.data = [], R.isLoading = !1, R.isDone = !0, l(), R.onSuccess && R.onSuccess(A.data.data), _.onSuccess && _.onSuccess(A.data.data, T), _.showToast !== !1 && n({
        show_notification: !0,
        success_title: A.data.success_title,
        success_message: A.data.success_message ? A.data.success_message : "Successfully saved."
      });
    }).catch((A) => {
      if (u(
        R,
        A,
        !1,
        _.showErrorToast ?? !0
      ), _.onError) {
        const P = A && A.response && A.response.data && A.response.data.error;
        _.onError(P);
      }
    });
  }, v = (_) => {
    const R = {
      key: _.key,
      path: _.path,
      pathWithParams: _.path,
      isLoading: !0,
      isDone: !1,
      data: [],
      errors: null,
      errorMessage: null
    };
    yi.delete(_.path, { data: _.data }).then((T) => {
      R.isLoading = !1, R.isDone = !0, _.onSuccess && _.onSuccess(T.data.data), _.showToast !== !1 && n({
        show_notification: !0,
        success_title: T.data.success_title,
        success_message: T.data.success_message ? T.data.success_message : "Successfully deleted."
      });
    }).catch((T) => {
      if (u(
        R,
        T,
        !1,
        _.showErrorToast ?? !0
      ), _.onError) {
        const D = T && T.response && T.response.data && T.response.data.error;
        _.onError(D);
      }
    });
  }, w = (_, R) => {
    const T = h(_).errors;
    return T ? (R.endsWith("_data-date") ? R = _.replace("_data-date", "") : R.endsWith("_data-time") && (R = _.replace("_data-time", "")), T[R]) : !1;
  }, S = () => {
    a([]), i([]);
  }, C = (_) => {
    const R = r.findIndex((T) => T.key === _);
    R > -1 && r.splice(R, 1);
  }, x = (_) => {
    const R = o.findIndex((T) => T.key === _);
    R > -1 && (o.splice(R, 1), l());
  }, E = (_) => h(_).postData.id == 0, O = () => r.map((_) => _.key);
  return /* @__PURE__ */ j.jsx(
    bm.Provider,
    {
      value: {
        fetchRequest: d,
        fetchRequests: f,
        submitPostRequest: g,
        submitDeleteRequest: v,
        createRequest: s,
        getRequest: y,
        getPostRequest: h,
        getPostRequestErrorProperty: w,
        notifyRequests: c,
        notifyPostRequests: l,
        isForCreation: E,
        filterRequestData: p,
        clearRequest: C,
        clearPostRequest: x,
        clearRequests: S,
        getRequestKeys: O
      },
      children: e
    }
  );
}, wm = W.createContext({}), Sm = () => W.useContext(wm), jM = ({ children: e }) => {
  const { clearPostRequest: t } = Pr(), [n, r] = W.useState([]), a = (s) => n.indexOf(s) > -1, o = (s) => {
    a(s) || (n.push(s), r(Object.assign([], n)));
  }, i = (s) => {
    a(s) && (t(s), n.splice(n.indexOf(s), 1), r(Object.assign([], n)));
  };
  return /* @__PURE__ */ j.jsx(
    wm.Provider,
    {
      value: {
        isModalOpen: a,
        openModal: o,
        closeModal: i
      },
      children: e
    }
  );
}, IM = (e) => {
  const { authUser: t } = os();
  if (!t)
    return /* @__PURE__ */ j.jsx(Ns, { to: "/" });
  if (e.authorizedRole != null && e.authorizedRole != t.role_id)
    return /* @__PURE__ */ j.jsx(Ns, { to: "/not-authorized" });
  if (e.authorizedRoles != null) {
    let n = !1;
    if (e.authorizedRoles.forEach((r) => {
      if (r == t.role_id)
        return n = !0, !0;
    }), !n)
      return /* @__PURE__ */ j.jsx(Ns, { to: "/not-authorized" });
  }
  return e.children;
}, cs = () => {
  const [e, t] = W.useState(window.innerWidth < 768);
  return W.useEffect(() => {
    const n = () => {
      t(window.innerWidth < 768);
    };
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e;
}, Hx = W.forwardRef((e, t) => {
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
      o = /* @__PURE__ */ j.jsx(
        di.Password,
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
      o = /* @__PURE__ */ j.jsx(
        di.TextArea,
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
      o = /* @__PURE__ */ j.jsx(
        Zv,
        {
          ref: t,
          name: e.name,
          value: e.value ? Vr(e.value) : null,
          disabled: e.disabled,
          onKeyDown: n,
          minDate: e.disablePastDates ? Vr() : void 0,
          onChange: (i, s) => {
            let l = typeof s == "string" ? s : Array.isArray(s) ? s[0] : "";
            e.onChange(l || "");
          }
        }
      );
    else if (e.type == "time")
      o = /* @__PURE__ */ j.jsx(
        Nu,
        {
          ref: t,
          name: e.name,
          format: e.use12Hours ? "h:mm A" : "HH:mm:ss",
          use12Hours: e.use12Hours,
          value: e.value ? typeof e.value == "string" && e.value.length <= 8 ? Vr(`1970-01-01 ${e.value}`) : Vr(e.value) : null,
          disabled: e.disabled,
          onKeyDown: n,
          onChange: (i) => {
            e.onChange(i ? i.format("HH:mm:ss") : "");
          }
        }
      );
    else if (e.type == "timemilli")
      o = /* @__PURE__ */ j.jsx(
        Nu,
        {
          ref: t,
          name: e.name,
          format: "HH:mm:ss.SSS",
          value: e.value ? typeof e.value == "string" && e.value.length <= 12 ? Vr(`1970-01-01 ${e.value}`) : Vr(e.value) : null,
          disabled: e.disabled,
          onKeyDown: n,
          onChange: (i, s) => {
            let l = typeof s == "string" ? s : Array.isArray(s) ? s[0] : "";
            e.onChange(l || "");
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
      })), o = /* @__PURE__ */ j.jsx(
        Jv,
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
    } else e.type == "number" ? o = /* @__PURE__ */ j.jsx(
      Qv,
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
    ) : e.type == "checkbox" ? o = /* @__PURE__ */ j.jsx(
      ep,
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
    ) : e.type == "switch" ? o = /* @__PURE__ */ j.jsx(j.Fragment, { children: /* @__PURE__ */ j.jsx(
      tp,
      {
        ref: t,
        checked: e.value == "1" || e.value == 1 || e.value == !0,
        disabled: e.disabled,
        onChange: (i) => {
          e.onChange(i);
        }
      }
    ) }) : o = /* @__PURE__ */ j.jsx(
      di,
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
    return /* @__PURE__ */ j.jsx(
      qf.Item,
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
}), Bx = (e) => /* @__PURE__ */ j.jsx(
  np,
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
    footer: e.isSaveButtonHidden ? /* @__PURE__ */ j.jsx(
      lt,
      {
        type: "primary",
        onClick: () => {
          e.onCancelClick && e.onCancelClick();
        },
        children: e.cancelText ? e.cancelText : "Cancel"
      }
    ) : void 0,
    children: /* @__PURE__ */ j.jsx(qf, { layout: "vertical", autoComplete: "off", children: e.body })
  }
), Wx = (e) => {
  const [t, n] = W.useState({
    pageSize: e.pageSize || 10,
    current: 1,
    total: 0
  }), { Text: r } = ta, a = cs(), {
    token: { colorPrimary: o }
  } = Gf.useToken(), { getRequest: i, fetchRequest: s } = Pr(), l = i(e.requestKey), c = l.isPaginated, u = e.data, d = l.from - 1;
  if (t.total = l.total, t.current = l.currentPage, t.pageSize = l.pageSize, l.isLoading)
    return /* @__PURE__ */ j.jsx(rp, { tip: "Loading", size: "large", children: /* @__PURE__ */ j.jsx(
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
  const f = (g, v) => /* @__PURE__ */ j.jsxs(Ja, { children: [
    v.includes("column-action-edit") && /* @__PURE__ */ j.jsx(Rn, { placement: "top", title: "Edit", children: /* @__PURE__ */ j.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        icon: /* @__PURE__ */ j.jsx(Ti, {}),
        onClick: () => {
          e.onRowEditClick && e.onRowEditClick(g);
        }
      }
    ) }),
    v.includes("column-action-custom") && /* @__PURE__ */ j.jsx(
      Rn,
      {
        placement: "top",
        title: e.customActionTooltip,
        children: /* @__PURE__ */ j.jsx(
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
    v.includes("column-action-delete") && /* @__PURE__ */ j.jsx(Rn, { placement: "top", title: "Delete", children: /* @__PURE__ */ j.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        icon: /* @__PURE__ */ j.jsx(Oi, {}),
        danger: !0,
        onClick: () => {
          e.onRowDeleteClick && e.onRowDeleteClick(g);
        }
      }
    ) }),
    v.includes("column-action-click") && /* @__PURE__ */ j.jsx(Rn, { placement: "top", title: "View", children: /* @__PURE__ */ j.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        icon: /* @__PURE__ */ j.jsx(Ri, {}),
        style: { color: "#000" },
        onClick: () => {
          e.onRowClick && e.onRowClick(g);
        }
      }
    ) })
  ] }), b = (g, v, w) => {
    let S = "", C = !1;
    if (typeof v != "string") {
      if (S = v(g), typeof S == "string" && S.startsWith("column-action-"))
        return f(g, S);
    } else {
      if (v.endsWith("-center") && (v = v.replace("-center", ""), C = !0), v.startsWith("column-action-"))
        return f(g, v);
      if (v.includes(".") && v.includes("list-first")) {
        const x = v.split(".");
        if (x.length == 3) {
          const E = g[x[0]];
          E && E.length != 0 && (S = E[0][x[2]]);
        }
      } else if (v.includes(".") && v.includes("join")) {
        const x = v.split(".");
        if (x.length == 3) {
          const E = g[x[0]];
          if (E && E.length != 0) {
            const O = x[2], _ = Array();
            E.map((R) => {
              _.push(R[O]);
            }), S = _.join(", ");
          }
        }
      } else if (v.includes(".") && v.includes("datetime")) {
        const x = v.split(".");
        if (x.length == 2) {
          const E = g[x[0]];
          E && E.length != 0 && (S = v.endsWith("iso") ? Sw(E) : v.endsWith("isomilli") ? Cw(E) : bw(E));
        }
      } else if (v.includes(".") && v.includes("date")) {
        const x = v.split(".");
        if (x.length == 2) {
          const E = g[x[0]];
          E && E.length != 0 && (S = v.endsWith("iso") ? xw(E) : ww(E));
        }
      } else if (v.includes(".") && v.includes("decimal")) {
        const x = v.split(".");
        if (x.length == 2) {
          const E = g[x[0]], O = x[1].replace("decimal", "");
          S = Ow(
            E,
            O || 6
          );
        }
      } else if (v.includes(".") && v.includes("number")) {
        const x = v.split(".");
        if (x.length == 2) {
          const E = g[x[0]];
          S = Hh(E);
        }
      } else if (v.includes(".")) {
        const x = v.split(".");
        x.length == 2 && (S = g[x[0]][x[1]]);
      } else v === "i" ? "index" in g ? S = g.index + 1 : S = (w + 1 + d).toString() : S = g[v];
      (S === null || S === "" || S === void 0) && (S = "-");
    }
    return /* @__PURE__ */ j.jsx(
      r,
      {
        style: {
          display: "block",
          textAlign: a ? "right" : C ? "center" : "left"
        },
        children: S
      }
    );
  }, y = (g) => {
    const v = i(e.requestKey);
    v.pageSize = g.pageSize, v.currentPage = g.current, s(v);
  }, p = (g, v) => {
    const w = [], S = [];
    return e.columns.forEach((C, x) => {
      const E = e.headers[x];
      let O = C;
      if (typeof O == "string" && O.includes("column-action-"))
        O.includes("column-action-edit") && e.onRowEditClick && S.push(
          /* @__PURE__ */ j.jsx(
            lt,
            {
              type: "primary",
              icon: /* @__PURE__ */ j.jsx(Ti, {}),
              onClick: () => e.onRowEditClick(g),
              children: "Edit"
            },
            "edit"
          )
        ), O.includes("column-action-custom") && e.onRowCustomClick && S.push(
          /* @__PURE__ */ j.jsx(
            lt,
            {
              icon: e.customActionIcon,
              onClick: () => e.onRowCustomClick(g),
              children: e.customActionTooltip
            },
            "custom"
          )
        ), O.includes("column-action-delete") && e.onRowDeleteClick && S.push(
          /* @__PURE__ */ j.jsx(
            lt,
            {
              danger: !0,
              icon: /* @__PURE__ */ j.jsx(Oi, {}),
              onClick: () => e.onRowDeleteClick(g),
              children: "Delete"
            },
            "delete"
          )
        ), O.includes("column-action-click") && e.onRowClick && S.push(
          /* @__PURE__ */ j.jsx(
            lt,
            {
              icon: /* @__PURE__ */ j.jsx(Ri, {}),
              onClick: () => e.onRowClick(g),
              children: "View"
            },
            "view"
          )
        );
      else {
        const _ = b(g, C, v);
        w.push({ label: E, value: _ });
      }
    }), /* @__PURE__ */ j.jsxs(
      Rc,
      {
        style: {
          marginBottom: 12,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        },
        children: [
          w.map((C, x) => /* @__PURE__ */ j.jsxs(_i, { style: { marginBottom: 8 }, children: [
            /* @__PURE__ */ j.jsx(na, { span: 10, children: /* @__PURE__ */ j.jsxs(r, { strong: !0, style: { color: o }, children: [
              C.label,
              ":"
            ] }) }),
            /* @__PURE__ */ j.jsx(na, { span: 14, children: C.value })
          ] }, x)),
          S.length > 0 && /* @__PURE__ */ j.jsx(
            _i,
            {
              style: {
                marginTop: 12,
                paddingTop: 12,
                borderTop: "1px solid #f0f0f0"
              },
              children: /* @__PURE__ */ j.jsx(na, { span: 24, children: /* @__PURE__ */ j.jsx(Ja, { wrap: !0, children: S }) })
            }
          )
        ]
      },
      g.id || v
    );
  }, h = [];
  return e.headers && e.headers.forEach((g, v) => {
    const w = e.columns[v];
    let S = w;
    typeof S != "string" && (S = g), h.push({
      title: /* @__PURE__ */ j.jsx(
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
      dataIndex: S,
      key: S,
      align: "center",
      render: (C, x, E) => /* @__PURE__ */ j.jsx(j.Fragment, { children: b(x, w, E) })
    });
  }), a ? /* @__PURE__ */ j.jsxs("div", { style: { marginTop: e.marginTop || 10 }, children: [
    u && u.map((g, v) => p(g, v)),
    c && /* @__PURE__ */ j.jsx("div", { style: { textAlign: "center", marginTop: 16 }, children: /* @__PURE__ */ j.jsx(
      ap,
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
          n(w), y(w);
        },
        showSizeChanger: !1,
        showTotal: (g, v) => `${v[0]}-${v[1]} of ${g} items`
      }
    ) })
  ] }) : /* @__PURE__ */ j.jsx(
    Kf,
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
        boxShadow: `0 4px 12px ${o}14`,
        border: `1px solid ${o}0F`,
        marginTop: e.marginTop || 10
      },
      className: "custom-table-header",
      rowClassName: (g, v) => v % 2 === 0 ? "table-row-light" : "table-row-dark",
      components: {
        header: {
          row: (g) => /* @__PURE__ */ j.jsx(
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
          cell: (g) => /* @__PURE__ */ j.jsx(
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
        n(g), y(g);
      }
    }
  );
};
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qe.apply(null, arguments);
}
var Ux = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
function xm(e) {
  if (Array.isArray(e)) return e;
}
function Yx(e, t) {
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
function Ml(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ou(e, t) {
  if (e) {
    if (typeof e == "string") return Ml(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ml(e, t) : void 0;
  }
}
function Cm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z(e, t) {
  return xm(e) || Yx(e, t) || ou(e, t) || Cm();
}
function Se(e) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Se(e);
}
function qx(e, t) {
  if (Se(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Se(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Em(e) {
  var t = qx(e, "string");
  return Se(t) == "symbol" ? t : t + "";
}
function k(e, t, n) {
  return (t = Em(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Gx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function kt(e, t) {
  if (e == null) return {};
  var n, r, a = Gx(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
var Ws = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var dd;
function Kx() {
  return dd || (dd = 1, (function(e) {
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
  })(Ws)), Ws.exports;
}
var Xx = Kx();
const de = /* @__PURE__ */ Bh(Xx), Ct = Math.round;
function Us(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    r[a] = t(r[a] || 0, n[a] || "", a);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const fd = (e, t, n) => n === 0 ? e : e / 100;
function Ba(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class ot {
  constructor(t) {
    k(this, "isValid", !0), k(this, "r", 0), k(this, "g", 0), k(this, "b", 0), k(this, "a", 1), k(this, "_h", void 0), k(this, "_s", void 0), k(this, "_l", void 0), k(this, "_v", void 0), k(this, "_max", void 0), k(this, "_min", void 0), k(this, "_brightness", void 0);
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
      this.r = Ba(t.r), this.g = Ba(t.g), this.b = Ba(t.b), this.a = typeof t.a == "number" ? Ba(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = Ct(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: Ct(o("r")),
      g: Ct(o("g")),
      b: Ct(o("b")),
      a: Ct(o("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), a = (o) => Ct((this[o] * this.a + n[o] * n.a * (1 - this.a)) / r);
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
      const o = Ct(this.a * 255).toString(16);
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
    const t = this.getHue(), n = Ct(this.getSaturation() * 100), r = Ct(this.getLightness() * 100);
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
    return a[t] = Ba(n, r), a;
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
      const f = Ct(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let o = 0, i = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (o = c, i = u) : l >= 1 && l < 2 ? (o = u, i = c) : l >= 2 && l < 3 ? (i = c, s = u) : l >= 3 && l < 4 ? (i = u, s = c) : l >= 4 && l < 5 ? (o = u, s = c) : l >= 5 && l < 6 && (o = c, s = u);
    const d = r - c / 2;
    this.r = Ct((o + d) * 255), this.g = Ct((i + d) * 255), this.b = Ct((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof a == "number" ? a : 1;
    const o = Ct(r * 255);
    if (this.r = o, this.g = o, this.b = o, n <= 0)
      return;
    const i = t / 60, s = Math.floor(i), l = i - s, c = Ct(r * (1 - n) * 255), u = Ct(r * (1 - n * l) * 255), d = Ct(r * (1 - n * (1 - l)) * 255);
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
    const n = Us(t, fd);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Us(t, fd);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Us(t, (r, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? Ct(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var Xo = 2, hd = 0.16, Zx = 0.05, Jx = 0.05, Qx = 0.15, _m = 5, Om = 4, eC = [{
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
function md(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Xo * t : Math.round(e.h) + Xo * t : r = n ? Math.round(e.h) + Xo * t : Math.round(e.h) - Xo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function gd(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - hd * t : t === Om ? r = e.s + hd : r = e.s + Zx * t, r > 1 && (r = 1), n && t === _m && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function vd(e, t, n) {
  var r;
  return n ? r = e.v + Jx * t : r = e.v - Qx * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function ao(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new ot(e), a = r.toHsv(), o = _m; o > 0; o -= 1) {
    var i = new ot({
      h: md(a, o, !0),
      s: gd(a, o, !0),
      v: vd(a, o, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var s = 1; s <= Om; s += 1) {
    var l = new ot({
      h: md(a, s),
      s: gd(a, s),
      v: vd(a, s)
    });
    n.push(l);
  }
  return t.theme === "dark" ? eC.map(function(c) {
    var u = c.index, d = c.amount;
    return new ot(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
  }) : n.map(function(c) {
    return c.toHexString();
  });
}
var Ys = {
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
var $l = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
$l.primary = $l[5];
var Nl = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Nl.primary = Nl[5];
var ji = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ji.primary = ji[5];
var kl = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
kl.primary = kl[5];
var Al = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Al.primary = Al[5];
var Fl = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Fl.primary = Fl[5];
var jl = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
jl.primary = jl[5];
var Ii = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Ii.primary = Ii[5];
var Il = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Il.primary = Il[5];
var Ll = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Ll.primary = Ll[5];
var Vl = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Vl.primary = Vl[5];
var zl = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
zl.primary = zl[5];
var qs = {
  red: Dl,
  volcano: $l,
  orange: Nl,
  gold: ji,
  yellow: kl,
  lime: Al,
  green: Fl,
  cyan: jl,
  blue: Ii,
  geekblue: Il,
  purple: Ll,
  magenta: Vl,
  grey: zl
}, iu = /* @__PURE__ */ qi({});
function pd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pd(Object(n), !0).forEach(function(r) {
      k(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function tC(e, t) {
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
var yd = "data-rc-order", bd = "data-rc-priority", nC = "rc-util-key", Hl = /* @__PURE__ */ new Map();
function Rm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : nC;
}
function us(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function rC(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function su(e) {
  return Array.from((Hl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Tm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!jt())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = rC(r), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(yd, i), s && o && l.setAttribute(bd, "".concat(o)), n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce), l.innerHTML = e;
  var c = us(t), u = c.firstChild;
  if (r) {
    if (s) {
      var d = (t.styles || su(c)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(yd)))
          return !1;
        var b = Number(f.getAttribute(bd) || 0);
        return o >= b;
      });
      if (d.length)
        return c.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function Pm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = us(t);
  return (t.styles || su(n)).find(function(r) {
    return r.getAttribute(Rm(t)) === e;
  });
}
function oo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Pm(e, t);
  if (n) {
    var r = us(t);
    r.removeChild(n);
  }
}
function aC(e, t) {
  var n = Hl.get(e);
  if (!n || !tC(document, n)) {
    var r = Tm("", t), a = r.parentNode;
    Hl.set(e, a), e.removeChild(r);
  }
}
function Un(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = us(n), a = su(r), o = F(F({}, n), {}, {
    styles: a
  });
  aC(r, o);
  var i = Pm(t, o);
  if (i) {
    var s, l;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Tm(e, o);
  return u.setAttribute(Rm(o), t), u;
}
function Mm(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function oC(e) {
  return Mm(e) instanceof ShadowRoot;
}
function Li(e) {
  return oC(e) ? Mm(e) : null;
}
var Bl = {}, lu = [], iC = function(t) {
  lu.push(t);
};
function ua(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = lu.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function sC(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = lu.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Dm() {
  Bl = {};
}
function $m(e, t, n) {
  !t && !Bl[n] && (e(!1, n), Bl[n] = !0);
}
function rt(e, t) {
  $m(ua, e, t);
}
function lC(e, t) {
  $m(sC, e, t);
}
rt.preMessage = iC;
rt.resetWarned = Dm;
rt.noteOnce = lC;
function cC(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function uC(e, t) {
  rt(e, "[@ant-design/icons] ".concat(t));
}
function wd(e) {
  return Se(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Se(e.icon) === "object" || typeof e.icon == "function");
}
function Sd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[cC(n)] = r;
    }
    return t;
  }, {});
}
function Wl(e, t, n) {
  return n ? /* @__PURE__ */ W.createElement(e.tag, F(F({
    key: t
  }, Sd(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Wl(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ W.createElement(e.tag, F({
    key: t
  }, Sd(e.attrs)), (e.children || []).map(function(r, a) {
    return Wl(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Nm(e) {
  return ao(e)[0];
}
function km(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var dC = `
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
`, fC = function(t) {
  var n = Qt(iu), r = n.csp, a = n.prefixCls, o = n.layer, i = dC;
  a && (i = i.replace(/anticon/g, a)), o && (i = "@layer ".concat(o, ` {
`).concat(i, `
}`)), bt(function() {
    var s = t.current, l = Li(s);
    Un(i, "@ant-design-icons", {
      prepend: !o,
      csp: r,
      attachTo: l
    });
  }, []);
}, hC = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ga = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function mC(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Ga.primaryColor = t, Ga.secondaryColor = n || Nm(t), Ga.calculated = !!n;
}
function gC() {
  return F({}, Ga);
}
var Oa = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, l = kt(t, hC), c = m.useRef(), u = Ga;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || Nm(i)
  }), fC(c), uC(wd(n), "icon should be icon definiton, but got ".concat(n)), !wd(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = F(F({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Wl(d.icon, "svg-".concat(d.name), F(F({
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
Oa.displayName = "IconReact";
Oa.getTwoToneColors = gC;
Oa.setTwoToneColors = mC;
function Am(e) {
  var t = km(e), n = Z(t, 2), r = n[0], a = n[1];
  return Oa.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function vC() {
  var e = Oa.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var pC = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Am(Ii.primary);
var on = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = kt(e, pC), u = m.useContext(iu), d = u.prefixCls, f = d === void 0 ? "anticon" : d, b = u.rootClassName, y = de(b, f, k(k({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!a || r.name === "loading"), n), p = i;
  p === void 0 && s && (p = -1);
  var h = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, g = km(l), v = Z(g, 2), w = v[0], S = v[1];
  return /* @__PURE__ */ m.createElement("span", qe({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: p,
    onClick: s,
    className: y
  }), /* @__PURE__ */ m.createElement(Oa, {
    icon: r,
    primaryColor: w,
    secondaryColor: S,
    style: h
  }));
});
on.displayName = "AntdIcon";
on.getTwoToneColor = vC;
on.setTwoToneColor = Am;
var yC = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: Ux
  }));
}, Fm = /* @__PURE__ */ m.forwardRef(yC);
process.env.NODE_ENV !== "production" && (Fm.displayName = "BarsOutlined");
var bC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" }, wC = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: bC
  }));
}, Ul = /* @__PURE__ */ m.forwardRef(wC);
process.env.NODE_ENV !== "production" && (Ul.displayName = "LeftOutlined");
var SC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, xC = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: SC
  }));
}, Yl = /* @__PURE__ */ m.forwardRef(xC);
process.env.NODE_ENV !== "production" && (Yl.displayName = "RightOutlined");
function ds(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const CC = (e, t) => {
  typeof (e == null ? void 0 : e.addEventListener) < "u" ? e.addEventListener("change", t) : typeof (e == null ? void 0 : e.addListener) < "u" && e.addListener(t);
}, EC = (e, t) => {
  typeof (e == null ? void 0 : e.removeEventListener) < "u" ? e.removeEventListener("change", t) : typeof (e == null ? void 0 : e.removeListener) < "u" && e.removeListener(t);
};
function _C(e) {
  if (Array.isArray(e)) return Ml(e);
}
function jm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function OC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fe(e) {
  return _C(e) || jm(e) || ou(e) || OC();
}
function io(e) {
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
function cu(e, t, n) {
  var r = m.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
function ql(e, t) {
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
    if (o && i && Se(o) === "object" && Se(i) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(f) {
        return a(o[f], i[f], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
function Et(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function xd(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Em(r.key), r);
  }
}
function _t(e, t, n) {
  return t && xd(e.prototype, t), n && xd(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var RC = "%";
function Gl(e) {
  return e.join(RC);
}
var TC = /* @__PURE__ */ (function() {
  function e(t) {
    Et(this, e), k(this, "instanceId", void 0), k(this, "cache", /* @__PURE__ */ new Map()), k(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return _t(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Gl(n));
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
      return this.opUpdate(Gl(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
})(), da = "data-token-hash", gn = "data-css-hash", PC = "data-cache-path", ir = "__cssinjs_instance__";
function MC() {
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
  return new TC(e);
}
var _o = /* @__PURE__ */ m.createContext({
  hashPriority: "low",
  cache: MC(),
  defaultCache: !0
});
function Re(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function so(e, t) {
  return so = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, so(e, t);
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
  }), t && so(e, t);
}
function lo(e) {
  return lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, lo(e);
}
function uu() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uu = function() {
    return !!e;
  })();
}
function DC(e, t) {
  if (t && (Se(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Re(e);
}
function dr(e) {
  var t = uu();
  return function() {
    var n, r = lo(e);
    if (t) {
      var a = lo(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return DC(this, n);
  };
}
function $C(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var du = /* @__PURE__ */ (function() {
  function e() {
    Et(this, e), k(this, "cache", void 0), k(this, "keys", void 0), k(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return _t(e, [{
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
            var d = Z(c, 2), f = d[1];
            return a.internalGet(u)[1] < f ? [u, a.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = Z(o, 1), s = i[0];
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
          return !$C(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
k(du, "MAX_CACHE_SIZE", 20);
k(du, "MAX_CACHE_OFFSET", 5);
var Cd = 0, Im = /* @__PURE__ */ (function() {
  function e(t) {
    Et(this, e), k(this, "derivatives", void 0), k(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Cd, t.length === 0 && ua(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Cd += 1;
  }
  return _t(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
})(), Gs = new du();
function Kl(e) {
  var t = Array.isArray(e) ? e : [e];
  return Gs.has(t) || Gs.set(t, new Im(t)), Gs.get(t);
}
var NC = /* @__PURE__ */ new WeakMap(), Ks = {};
function kC(e, t) {
  for (var n = NC, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(Ks) || n.set(Ks, e()), n.get(Ks);
}
var Ed = /* @__PURE__ */ new WeakMap();
function Ka(e) {
  var t = Ed.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Im ? t += r.id : r && Se(r) === "object" ? t += Ka(r) : t += r;
  }), t = io(t), Ed.set(e, t)), t;
}
function _d(e, t) {
  return io("".concat(t, "_").concat(Ka(e)));
}
var Xl = jt();
function Ne(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Vi(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = F(F({}, r), {}, k(k({}, da, t), gn, n)), i = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var bi = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, AC = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = Z(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Lm = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, c = Z(i, 2), u = c[0], d = c[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      o[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (l = r.ignore) !== null && l !== void 0 && l[u])) {
      var f, b = bi(u, r == null ? void 0 : r.prefix);
      a[b] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), o[u] = "var(".concat(b, ")");
    }
  }), [o, AC(a, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, Od = process.env.NODE_ENV !== "test" && jt() ? m.useLayoutEffect : m.useEffect, at = function(t, n) {
  var r = m.useRef(!0);
  Od(function() {
    return t(r.current);
  }, n), Od(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Rd = function(t, n) {
  at(function(r) {
    if (!r)
      return t();
  }, n);
}, FC = F({}, m), Td = FC.useInsertionEffect, jC = function(t, n, r) {
  m.useMemo(t, r), at(function() {
    return n(!0);
  }, r);
}, IC = Td ? function(e, t, n) {
  return Td(function() {
    return e(), t();
  }, n);
} : jC, LC = F({}, m), VC = LC.useInsertionEffect, zC = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      process.env.NODE_ENV !== "production" && ua(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, HC = function() {
  return function(t) {
    t();
  };
}, BC = typeof VC < "u" ? zC : HC;
function WC() {
  return !1;
}
var Zl = !1;
function UC() {
  return Zl;
}
const YC = process.env.NODE_ENV === "production" ? WC : UC;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Zo && typeof Zo.webpackHotUpdate == "function") {
    var qC = Zo.webpackHotUpdate;
    Zo.webpackHotUpdate = function() {
      return Zl = !0, setTimeout(function() {
        Zl = !1;
      }, 0), qC.apply(void 0, arguments);
    };
  }
}
function fu(e, t, n, r, a) {
  var o = m.useContext(_o), i = o.cache, s = [e].concat(fe(t)), l = Gl(s), c = BC([l]), u = YC(), d = function(p) {
    i.opUpdate(l, function(h) {
      var g = h || [void 0, void 0], v = Z(g, 2), w = v[0], S = w === void 0 ? 0 : w, C = v[1], x = C;
      process.env.NODE_ENV !== "production" && C && u && (r == null || r(x, u), x = null);
      var E = x || n(), O = [S, E];
      return p ? p(O) : O;
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
  var b = f[1];
  return IC(function() {
    a == null || a(b);
  }, function(y) {
    return d(function(p) {
      var h = Z(p, 2), g = h[0], v = h[1];
      return y && g === 0 && (a == null || a(b)), [g + 1, v];
    }), function() {
      i.opUpdate(l, function(p) {
        var h = p || [], g = Z(h, 2), v = g[0], w = v === void 0 ? 0 : v, S = g[1], C = w - 1;
        return C === 0 ? (c(function() {
          (y || !i.opGet(l)) && (r == null || r(S, !1));
        }), null) : [w - 1, S];
      });
    };
  }, [l]), b;
}
var GC = {}, KC = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", br = /* @__PURE__ */ new Map();
function XC(e) {
  br.set(e, (br.get(e) || 0) + 1);
}
function ZC(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(da, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[ir] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var JC = 0;
function QC(e, t) {
  br.set(e, (br.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  br.forEach(function(r, a) {
    r <= 0 && n.add(a);
  }), br.size - n.size > JC && n.forEach(function(r) {
    ZC(r, t), br.delete(r);
  });
}
var e1 = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = F(F({}, o), n);
  return a && (i = a(i)), i;
}, Vm = "token";
function t1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qt(_o), a = r.cache.instanceId, o = r.container, i = n.salt, s = i === void 0 ? "" : i, l = n.override, c = l === void 0 ? GC : l, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, b = kC(function() {
    return Object.assign.apply(Object, [{}].concat(fe(t)));
  }, t), y = Ka(b), p = Ka(c), h = f ? Ka(f) : "", g = fu(Vm, [s, e.id, y, p, h], function() {
    var v, w = d ? d(b, c, e) : e1(b, c, e, u), S = F({}, w), C = "";
    if (f) {
      var x = Lm(w, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = Z(x, 2);
      w = E[0], C = E[1];
    }
    var O = _d(w, s);
    w._tokenKey = O, S._tokenKey = _d(S, s);
    var _ = (v = f == null ? void 0 : f.key) !== null && v !== void 0 ? v : O;
    w._themeKey = _, XC(_);
    var R = "".concat(KC, "-").concat(io(O));
    return w._hashId = R, [w, R, S, C, (f == null ? void 0 : f.key) || ""];
  }, function(v) {
    QC(v[0]._themeKey, a);
  }, function(v) {
    var w = Z(v, 4), S = w[0], C = w[3];
    if (f && C) {
      var x = Un(C, io("css-variables-".concat(S._themeKey)), {
        mark: gn,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      x[ir] = a, x.setAttribute(da, S._themeKey);
    }
  });
  return g;
}
var n1 = function(t, n, r) {
  var a = Z(t, 5), o = a[2], i = a[3], s = a[4], l = r || {}, c = l.plain;
  if (!i)
    return null;
  var u = o._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, b = Vi(i, s, u, f, c);
  return [d, u, b];
}, r1 = {
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
}, zm = "comm", Hm = "rule", Bm = "decl", a1 = "@import", o1 = "@namespace", i1 = "@keyframes", s1 = "@layer", l1 = Math.abs, Xa = String.fromCharCode;
function Wm(e) {
  return e.trim();
}
function Jl(e, t, n) {
  return e.replace(t, n);
}
function ia(e, t) {
  return e.charCodeAt(t) | 0;
}
function fa(e, t, n) {
  return e.slice(t, n);
}
function _n(e) {
  return e.length;
}
function c1(e) {
  return e.length;
}
function Jo(e, t) {
  return t.push(e), e;
}
var fs = 1, ha = 1, Um = 0, en = 0, gt = 0, Ra = "";
function hu(e, t, n, r, a, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: fs, column: ha, length: i, return: "", siblings: s };
}
function u1() {
  return gt;
}
function d1() {
  return gt = en > 0 ? ia(Ra, --en) : 0, ha--, gt === 10 && (ha = 1, fs--), gt;
}
function vn() {
  return gt = en < Um ? ia(Ra, en++) : 0, ha++, gt === 10 && (ha = 1, fs++), gt;
}
function sr() {
  return ia(Ra, en);
}
function wi() {
  return en;
}
function hs(e, t) {
  return fa(Ra, e, t);
}
function co(e) {
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
function f1(e) {
  return fs = ha = 1, Um = _n(Ra = e), en = 0, [];
}
function h1(e) {
  return Ra = "", e;
}
function Xs(e) {
  return Wm(hs(en - 1, Ql(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function m1(e) {
  for (; (gt = sr()) && gt < 33; )
    vn();
  return co(e) > 2 || co(gt) > 3 ? "" : " ";
}
function g1(e, t) {
  for (; --t && vn() && !(gt < 48 || gt > 102 || gt > 57 && gt < 65 || gt > 70 && gt < 97); )
    ;
  return hs(e, wi() + (t < 6 && sr() == 32 && vn() == 32));
}
function Ql(e) {
  for (; vn(); )
    switch (gt) {
      // ] ) " '
      case e:
        return en;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ql(gt);
        break;
      // (
      case 40:
        e === 41 && Ql(e);
        break;
      // \
      case 92:
        vn();
        break;
    }
  return en;
}
function v1(e, t) {
  for (; vn() && e + gt !== 57; )
    if (e + gt === 84 && sr() === 47)
      break;
  return "/*" + hs(t, en - 1) + "*" + Xa(e === 47 ? e : vn());
}
function p1(e) {
  for (; !co(sr()); )
    vn();
  return hs(e, en);
}
function y1(e) {
  return h1(Si("", null, null, null, [""], e = f1(e), 0, [0], e));
}
function Si(e, t, n, r, a, o, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, b = 0, y = 0, p = 1, h = 1, g = 1, v = 0, w = 0, S = "", C = a, x = o, E = r, O = S; h; )
    switch (y = w, w = vn()) {
      // (
      case 40:
        y != 108 && ia(O, d - 1) == 58 ? (v++, O += "(") : O += Xs(w);
        break;
      // )
      case 41:
        v--, O += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        O += Xs(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (v > 0) {
          O += Xa(w);
          break;
        }
        O += m1(y);
        break;
      // \
      case 92:
        O += g1(wi() - 1, 7);
        continue;
      // /
      case 47:
        switch (sr()) {
          case 42:
          case 47:
            Jo(b1(v1(vn(), wi()), t, n, l), l), (co(y || 1) == 5 || co(sr() || 1) == 5) && _n(O) && fa(O, -1, void 0) !== " " && (O += " ");
            break;
          default:
            O += "/";
        }
        break;
      // {
      case 123 * p:
        s[c++] = _n(O) * g;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        if (v > 0 && w) {
          O += Xa(w);
          break;
        }
        switch (w) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            g == -1 && (O = Jl(O, /\f/g, "")), b > 0 && (_n(O) - d || p === 0) && Jo(b > 32 ? Md(O + ";", r, n, d - 1, l) : Md(Jl(O, " ", "") + ";", r, n, d - 2, l), l);
            break;
          // @ ;
          case 59:
            O += ";";
          // { rule/at-rule
          default:
            if (Jo(E = Pd(O, t, n, c, u, a, s, S, C = [], x = [], d, o), o), w === 123)
              if (u === 0)
                Si(O, t, E, E, C, o, d, s, x);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (ia(O, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (ia(O, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Si(e, E, E, r && Jo(Pd(e, E, E, 0, 0, a, s, S, a, C = [], d, x), x), a, x, d, s, r ? C : x) : Si(O, E, E, E, [""], x, 0, s, x);
              }
        }
        c = u = b = 0, p = g = 1, S = O = "", d = i;
        break;
      // :
      case 58:
        d = 1 + _n(O), b = y;
      default:
        if (p < 1) {
          if (w == 123)
            --p;
          else if (w == 125 && p++ == 0 && d1() == 125)
            continue;
        }
        switch (O += Xa(w), w * p) {
          // &
          case 38:
            g = u > 0 ? 1 : (O += "\f", -1);
            break;
          // ,
          case 44:
            if (v > 0) break;
            s[c++] = (_n(O) - 1) * g, g = 1;
            break;
          // @
          case 64:
            sr() === 45 && (O += Xs(vn())), f = sr(), u = d = _n(S = O += p1(wi())), w++;
            break;
          // -
          case 45:
            y === 45 && _n(O) == 2 && (p = 0);
        }
    }
  return o;
}
function Pd(e, t, n, r, a, o, i, s, l, c, u, d) {
  for (var f = a - 1, b = a === 0 ? o : [""], y = c1(b), p = 0, h = 0, g = 0; p < r; ++p)
    for (var v = 0, w = fa(e, f + 1, f = l1(h = i[p])), S = e; v < y; ++v)
      (S = Wm(h > 0 ? b[v] + " " + w : Jl(w, /&\f/g, b[v]))) && (l[g++] = S);
  return hu(e, t, n, a === 0 ? Hm : s, l, c, u, d);
}
function b1(e, t, n, r) {
  return hu(e, t, n, zm, Xa(u1()), fa(e, 2, -2), 0, r);
}
function Md(e, t, n, r, a) {
  return hu(e, t, n, Bm, fa(e, 0, r), fa(e, r + 1, -1), r, a);
}
function ec(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function w1(e, t, n, r) {
  switch (e.type) {
    case s1:
      if (e.children.length) break;
    case a1:
    case o1:
    case Bm:
      return e.return = e.return || e.value;
    case zm:
      return "";
    case i1:
      return e.return = e.value + "{" + ec(e.children, r) + "}";
    case Hm:
      if (!_n(e.value = e.props.join(","))) return "";
  }
  return _n(n = ec(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ym(e, t) {
  var n = t.path, r = t.parentSelectors;
  rt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var S1 = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Ym("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, x1 = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Ym("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Dd = "data-ant-cssinjs-cache-path", qm = "_FILE_STYLE__", _r, Gm = !0;
function C1() {
  if (!_r && (_r = {}, jt())) {
    var e = document.createElement("div");
    e.className = Dd, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = Z(o, 2), s = i[0], l = i[1];
      _r[s] = l;
    });
    var n = document.querySelector("style[".concat(Dd, "]"));
    if (n) {
      var r;
      Gm = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function E1(e) {
  return C1(), !!_r[e];
}
function _1(e) {
  var t = _r[e], n = null;
  if (t && jt())
    if (Gm)
      n = qm;
    else {
      var r = document.querySelector("style[".concat(gn, '="').concat(_r[e], '"]'));
      r ? n = r.innerHTML : delete _r[e];
    }
  return [n, t];
}
var Km = "_skip_check_", Xm = "_multi_value_";
function xi(e) {
  var t = ec(y1(e), w1);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function O1(e) {
  return Se(e) === "object" && e && (Km in e || Xm in e);
}
function $d(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(fe(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var R1 = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, s = n.hashId, l = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, b = n.linters, y = b === void 0 ? [] : b, p = "", h = {};
  function g(S) {
    var C = S.getName(s);
    if (!h[C]) {
      var x = e(S.style, n, {
        root: !1,
        parentSelectors: i
      }), E = Z(x, 1), O = E[0];
      h[C] = "@keyframes ".concat(S.getName(s)).concat(O);
    }
  }
  function v(S) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach(function(x) {
      Array.isArray(x) ? v(x, C) : x && C.push(x);
    }), C;
  }
  var w = v(Array.isArray(t) ? t : [t]);
  return w.forEach(function(S) {
    var C = typeof S == "string" && !a ? {} : S;
    if (typeof C == "string")
      p += "".concat(C, `
`);
    else if (C._keyframe)
      g(C);
    else {
      var x = f.reduce(function(E, O) {
        var _;
        return (O == null || (_ = O.visit) === null || _ === void 0 ? void 0 : _.call(O, E)) || E;
      }, C);
      Object.keys(x).forEach(function(E) {
        var O = x[E];
        if (Se(O) === "object" && O && (E !== "animationName" || !O._keyframe) && !O1(O)) {
          var _ = !1, R = E.trim(), T = !1;
          (a || o) && s ? R.startsWith("@") ? _ = !0 : R === "&" ? R = $d("", s, u) : R = $d(E, s, u) : a && !s && (R === "&" || R === "") && (R = "", T = !0);
          var D = e(O, n, {
            root: T,
            injectHash: _,
            parentSelectors: [].concat(fe(i), [R])
          }), A = Z(D, 2), P = A[0], I = A[1];
          h = F(F({}, h), I), p += "".concat(R).concat(P);
        } else {
          let L = function(U, X) {
            process.env.NODE_ENV !== "production" && (Se(O) !== "object" || !(O != null && O[Km])) && [S1, x1].concat(fe(y)).forEach(function(B) {
              return B(U, X, {
                path: c,
                hashId: s,
                parentSelectors: i
              });
            });
            var $ = U.replace(/[A-Z]/g, function(B) {
              return "-".concat(B.toLowerCase());
            }), V = X;
            !r1[U] && typeof V == "number" && V !== 0 && (V = "".concat(V, "px")), U === "animationName" && X !== null && X !== void 0 && X._keyframe && (g(X), V = X.getName(s)), p += "".concat($, ":").concat(V, ";");
          };
          var N, z = (N = O == null ? void 0 : O.value) !== null && N !== void 0 ? N : O;
          Se(O) === "object" && O !== null && O !== void 0 && O[Xm] && Array.isArray(z) ? z.forEach(function(U) {
            L(E, U);
          }) : L(E, z);
        }
      });
    }
  }), a ? l && (p && (p = "@layer ".concat(l.name, " {").concat(p, "}")), l.dependencies && (h["@layer ".concat(l.name)] = l.dependencies.map(function(S) {
    return "@layer ".concat(S, ", ").concat(l.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, h];
};
function Zm(e, t) {
  return io("".concat(e.join("%")).concat(t));
}
function T1() {
  return null;
}
var Jm = "style";
function tc(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = m.useContext(_o), d = u.autoClear, f = u.mock, b = u.defaultCache, y = u.hashPriority, p = u.container, h = u.ssrInline, g = u.transformers, v = u.linters, w = u.cache, S = u.layer, C = n._tokenKey, x = [C];
  S && x.push("layer"), x.push.apply(x, fe(r));
  var E = Xl;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var O = fu(
    Jm,
    x,
    // Create cache if needed
    function() {
      var A = x.join("|");
      if (E1(A)) {
        var P = _1(A), I = Z(P, 2), N = I[0], z = I[1];
        if (N)
          return [N, C, z, {}, s, c];
      }
      var L = t(), U = R1(L, {
        hashId: a,
        hashPriority: y,
        layer: S ? o : void 0,
        path: r.join("-"),
        transformers: g,
        linters: v
      }), X = Z(U, 2), $ = X[0], V = X[1], B = xi($), Y = Zm(x, B);
      return [B, C, Y, V, s, c];
    },
    // Remove cache if no need
    function(A, P) {
      var I = Z(A, 3), N = I[2];
      (P || d) && Xl && oo(N, {
        mark: gn,
        attachTo: p
      });
    },
    // Effect: Inject style here
    function(A) {
      var P = Z(A, 4), I = P[0];
      P[1];
      var N = P[2], z = P[3];
      if (E && I !== qm) {
        var L = {
          mark: gn,
          prepend: S ? !1 : "queue",
          attachTo: p,
          priority: c
        }, U = typeof i == "function" ? i() : i;
        U && (L.csp = {
          nonce: U
        });
        var X = [], $ = [];
        Object.keys(z).forEach(function(B) {
          B.startsWith("@layer") ? X.push(B) : $.push(B);
        }), X.forEach(function(B) {
          Un(xi(z[B]), "_layer-".concat(B), F(F({}, L), {}, {
            prepend: !0
          }));
        });
        var V = Un(I, N, L);
        V[ir] = w.instanceId, V.setAttribute(da, C), process.env.NODE_ENV !== "production" && V.setAttribute(PC, x.join("|")), $.forEach(function(B) {
          Un(xi(z[B]), "_effect-".concat(B), L);
        });
      }
    }
  ), _ = Z(O, 3), R = _[0], T = _[1], D = _[2];
  return function(A) {
    var P;
    return !h || E || !b ? P = /* @__PURE__ */ m.createElement(T1, null) : P = /* @__PURE__ */ m.createElement("style", qe({}, k(k({}, da, T), gn, D), {
      dangerouslySetInnerHTML: {
        __html: R
      }
    })), /* @__PURE__ */ m.createElement(m.Fragment, null, P, A);
  };
}
var P1 = function(t, n, r) {
  var a = Z(t, 6), o = a[0], i = a[1], s = a[2], l = a[3], c = a[4], u = a[5], d = r || {}, f = d.plain;
  if (c)
    return null;
  var b = o, y = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return b = Vi(o, i, s, y, f), l && Object.keys(l).forEach(function(p) {
    if (!n[p]) {
      n[p] = !0;
      var h = xi(l[p]), g = Vi(h, i, "_effect-".concat(p), y, f);
      p.startsWith("@layer") ? b = g + b : b += g;
    }
  }), [u, s, b];
}, Qm = "cssVar", M1 = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, u = Qt(_o), d = u.cache.instanceId, f = u.container, b = s._tokenKey, y = [].concat(fe(t.path), [r, c, b]), p = fu(Qm, y, function() {
    var h = n(), g = Lm(h, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), v = Z(g, 2), w = v[0], S = v[1], C = Zm(y, S);
    return [w, S, C, r];
  }, function(h) {
    var g = Z(h, 3), v = g[2];
    Xl && oo(v, {
      mark: gn,
      attachTo: f
    });
  }, function(h) {
    var g = Z(h, 3), v = g[1], w = g[2];
    if (v) {
      var S = Un(v, w, {
        mark: gn,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      S[ir] = d, S.setAttribute(da, r);
    }
  });
  return p;
}, D1 = function(t, n, r) {
  var a = Z(t, 4), o = a[1], i = a[2], s = a[3], l = r || {}, c = l.plain;
  if (!o)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = Vi(o, s, i, d, c);
  return [u, i, f];
};
k(k(k({}, Jm, P1), Vm, n1), Qm, D1);
var sn = /* @__PURE__ */ (function() {
  function e(t, n) {
    Et(this, e), k(this, "name", void 0), k(this, "style", void 0), k(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return _t(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function Wr(e) {
  return e.notSplit = !0, e;
}
Wr(["borderTop", "borderBottom"]), Wr(["borderTop"]), Wr(["borderBottom"]), Wr(["borderLeft", "borderRight"]), Wr(["borderLeft"]), Wr(["borderRight"]);
function $1(e) {
  return xm(e) || jm(e) || ou(e) || Cm();
}
function Tn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function eg(e, t, n, r) {
  if (!t.length)
    return n;
  var a = $1(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = fe(e) : s = F({}, e), r && n === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = eg(s[o], i, n, r), s;
}
function fn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Tn(e, t.slice(0, -1)) ? e : eg(e, t, n, r);
}
function N1(e) {
  return Se(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Nd(e) {
  return Array.isArray(e) ? [] : {};
}
var k1 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Jr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Nd(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var l = new Set(s), c = Tn(a, i), u = Array.isArray(c);
      if (u || N1(c)) {
        if (!l.has(c)) {
          l.add(c);
          var d = Tn(r, i);
          u ? r = fn(r, i, []) : (!d || Se(d) !== "object") && (r = fn(r, i, Nd(c))), k1(c).forEach(function(f) {
            o([].concat(fe(i), [f]), l);
          });
        }
      } else
        r = fn(r, i, c);
    }
    o([]);
  }), r;
}
function tg() {
}
let jn = null;
function A1() {
  jn = null, Dm();
}
let ng = tg;
process.env.NODE_ENV !== "production" && (ng = (e, t, n) => {
  rt(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && A1();
});
const Oo = ng, rg = /* @__PURE__ */ m.createContext({}), bn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = m.useContext(rg), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = jn;
        jn || (jn = {}), jn[e] = jn[e] || [], jn[e].includes(o || "") || jn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", jn);
      } else
        process.env.NODE_ENV !== "production" && Oo(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = tg, e;
}, F1 = /* @__PURE__ */ qi(void 0);
var j1 = {
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
}, I1 = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, L1 = F(F({}, I1), {}, {
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
const ag = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, kd = {
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
  }, L1),
  timePickerLocale: Object.assign({}, ag)
}, zt = "${label} is not a valid ${type}", ma = {
  locale: "en",
  Pagination: j1,
  DatePicker: kd,
  TimePicker: ag,
  Calendar: kd,
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
        string: zt,
        method: zt,
        array: zt,
        object: zt,
        number: zt,
        date: zt,
        boolean: zt,
        integer: zt,
        float: zt,
        regexp: zt,
        email: zt,
        url: zt,
        hex: zt
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
Object.assign({}, ma.Modal);
let Ci = [];
const Ad = () => Ci.reduce((e, t) => Object.assign(Object.assign({}, e), t), ma.Modal);
function V1(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ci.push(t), Ad(), () => {
      Ci = Ci.filter((n) => n !== t), Ad();
    };
  }
  Object.assign({}, ma.Modal);
}
const mu = /* @__PURE__ */ qi(void 0), z1 = (e, t) => {
  const n = m.useContext(mu), r = m.useMemo(() => {
    var o;
    const i = ma[e], s = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), a = m.useMemo(() => {
    const o = n == null ? void 0 : n.locale;
    return n != null && n.exist && !o ? ma.locale : o;
  }, [n]);
  return [r, a];
}, og = "internalMark", ig = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = bn("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(r === og, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  m.useEffect(() => V1(t == null ? void 0 : t.Modal), [t]);
  const a = m.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ m.createElement(mu.Provider, {
    value: a
  }, n);
};
process.env.NODE_ENV !== "production" && (ig.displayName = "LocaleProvider");
const sg = {
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
}, uo = Object.assign(Object.assign({}, sg), {
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
function H1(e, {
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
  } = e, u = t(s), d = t(r), f = t(a), b = t(o), y = t(i), p = n(l, c), h = e.colorLink || e.colorInfo, g = t(h), v = new ot(b[1]).mix(new ot(b[3]), 50).toHexString();
  return Object.assign(Object.assign({}, p), {
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
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBgFilledHover: v,
    colorErrorBgActive: b[3],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
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
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorLinkHover: g[4],
    colorLink: g[6],
    colorLinkActive: g[7],
    colorBgMask: new ot("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const B1 = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function W1(e) {
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
  }, B1(r));
}
const U1 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Y1(e) {
  return (e + 8) / e;
}
function q1(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Y1(n)
  }));
}
const G1 = (e) => {
  const t = q1(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), a = n[1], o = n[0], i = n[2], s = r[1], l = r[0], c = r[2];
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
function K1(e) {
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
const Kt = (e, t) => new ot(e).setA(t).toRgbString(), Wa = (e, t) => new ot(e).darken(t).toHexString(), X1 = (e) => {
  const t = ao(e);
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
}, Z1 = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Kt(r, 0.88),
    colorTextSecondary: Kt(r, 0.65),
    colorTextTertiary: Kt(r, 0.45),
    colorTextQuaternary: Kt(r, 0.25),
    colorFill: Kt(r, 0.15),
    colorFillSecondary: Kt(r, 0.06),
    colorFillTertiary: Kt(r, 0.04),
    colorFillQuaternary: Kt(r, 0.02),
    colorBgSolid: Kt(r, 1),
    colorBgSolidHover: Kt(r, 0.75),
    colorBgSolidActive: Kt(r, 0.95),
    colorBgLayout: Wa(n, 4),
    colorBgContainer: Wa(n, 0),
    colorBgElevated: Wa(n, 0),
    colorBgSpotlight: Kt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Wa(n, 15),
    colorBorderSecondary: Wa(n, 6)
  };
};
function J1(e) {
  Ys.pink = Ys.magenta, qs.pink = qs.magenta;
  const t = Object.keys(sg).map((n) => {
    const r = e[n] === Ys[n] ? qs[n] : ao(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), H1(e, {
    generateColorPalettes: X1,
    generateNeutralColorPalettes: Z1
  })), G1(e.fontSize)), K1(e)), U1(e)), W1(e));
}
const lg = Kl(J1), nc = {
  token: uo,
  override: {
    override: uo
  },
  hashed: !0
}, cg = /* @__PURE__ */ W.createContext(nc), rc = "ant", gu = "anticon", Q1 = ["outlined", "borderless", "filled", "underlined"], eE = (e, t) => t || (e ? `${rc}-${e}` : rc), Ut = /* @__PURE__ */ m.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: eE,
  iconPrefixCls: gu
}), {
  Consumer: LM
} = Ut, Fd = {};
function Ro(e) {
  const t = m.useContext(Ut), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  } = t, o = t[e];
  return Object.assign(Object.assign({
    classNames: Fd,
    styles: Fd
  }, o), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  });
}
const tE = `-ant-${Date.now()}-${Math.random()}`;
function nE(e, t) {
  const n = {}, r = (i, s) => {
    let l = i.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, a = (i, s) => {
    const l = new ot(i), c = ao(l.toRgbString());
    n[`${s}-color`] = r(l), n[`${s}-color-disabled`] = c[1], n[`${s}-color-hover`] = c[4], n[`${s}-color-active`] = c[6], n[`${s}-color-outline`] = l.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = c[0], n[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new ot(t.primaryColor), s = ao(i.toRgbString());
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
function rE(e, t) {
  const n = nE(e, t);
  jt() ? Un(n, `${tE}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Oo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const fo = /* @__PURE__ */ m.createContext(!1), aE = ({
  children: e,
  disabled: t
}) => {
  const n = m.useContext(fo);
  return /* @__PURE__ */ m.createElement(fo.Provider, {
    value: t ?? n
  }, e);
}, ga = /* @__PURE__ */ m.createContext(void 0), oE = ({
  children: e,
  size: t
}) => {
  const n = m.useContext(ga);
  return /* @__PURE__ */ m.createElement(ga.Provider, {
    value: t || n
  }, e);
};
function iE() {
  const e = Qt(fo), t = Qt(ga);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var ug = /* @__PURE__ */ _t(function e() {
  Et(this, e);
}), dg = "CALC_UNIT", sE = new RegExp(dg, "g");
function Zs(e) {
  return typeof e == "number" ? "".concat(e).concat(dg) : e;
}
var lE = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r, a) {
    var o;
    Et(this, n), o = t.call(this), k(Re(o), "result", ""), k(Re(o), "unitlessCssVar", void 0), k(Re(o), "lowPriority", void 0);
    var i = Se(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = Zs(r) : i === "string" && (o.result = r), o;
  }
  return _t(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Zs(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Zs(a))), this.lowPriority = !0, this;
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
      }) && (l = !1), this.result = this.result.replace(sE, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})(ug), cE = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r) {
    var a;
    return Et(this, n), a = t.call(this), k(Re(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return _t(n, [{
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
})(ug), uE = function(t, n) {
  var r = t === "css" ? lE : cE;
  return function(a) {
    return new r(a, n);
  };
}, jd = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ft(e) {
  var t = m.useRef();
  t.current = e;
  var n = m.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function ho(e) {
  var t = m.useRef(!1), n = m.useState(e), r = Z(n, 2), a = r[0], o = r[1];
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
function Js(e) {
  return e !== void 0;
}
function Mr(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, s = ho(function() {
    return Js(a) ? a : Js(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), l = Z(s, 2), c = l[0], u = l[1], d = a !== void 0 ? a : c, f = i ? i(d) : d, b = Ft(o), y = ho([d]), p = Z(y, 2), h = p[0], g = p[1];
  Rd(function() {
    var w = h[0];
    c !== w && b(c, w);
  }, [h]), Rd(function() {
    Js(a) || u(a);
  }, [a]);
  var v = Ft(function(w, S) {
    u(w, S), g([d], S);
  });
  return [f, v];
}
var Qo = { exports: {} }, ze = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id;
function dE() {
  if (Id) return ze;
  Id = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function p(h) {
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
  return ze.ContextConsumer = i, ze.ContextProvider = o, ze.Element = e, ze.ForwardRef = l, ze.Fragment = n, ze.Lazy = f, ze.Memo = d, ze.Portal = t, ze.Profiler = a, ze.StrictMode = r, ze.Suspense = c, ze.SuspenseList = u, ze.isAsyncMode = function() {
    return !1;
  }, ze.isConcurrentMode = function() {
    return !1;
  }, ze.isContextConsumer = function(h) {
    return p(h) === i;
  }, ze.isContextProvider = function(h) {
    return p(h) === o;
  }, ze.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ze.isForwardRef = function(h) {
    return p(h) === l;
  }, ze.isFragment = function(h) {
    return p(h) === n;
  }, ze.isLazy = function(h) {
    return p(h) === f;
  }, ze.isMemo = function(h) {
    return p(h) === d;
  }, ze.isPortal = function(h) {
    return p(h) === t;
  }, ze.isProfiler = function(h) {
    return p(h) === a;
  }, ze.isStrictMode = function(h) {
    return p(h) === r;
  }, ze.isSuspense = function(h) {
    return p(h) === c;
  }, ze.isSuspenseList = function(h) {
    return p(h) === u;
  }, ze.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === a || h === r || h === c || h === u || h === b || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === o || h.$$typeof === i || h.$$typeof === l || h.$$typeof === y || h.getModuleId !== void 0);
  }, ze.typeOf = p, ze;
}
var He = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function fE() {
  return Ld || (Ld = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = !1, p = !1, h = !1, g = !1, v = !1, w;
    w = Symbol.for("react.module.reference");
    function S(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === n || q === a || v || q === r || q === c || q === u || g || q === b || y || p || h || typeof q == "object" && q !== null && (q.$$typeof === f || q.$$typeof === d || q.$$typeof === o || q.$$typeof === i || q.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === w || q.getModuleId !== void 0));
    }
    function C(q) {
      if (typeof q == "object" && q !== null) {
        var le = q.$$typeof;
        switch (le) {
          case e:
            var H = q.type;
            switch (H) {
              case n:
              case a:
              case r:
              case c:
              case u:
                return H;
              default:
                var ae = H && H.$$typeof;
                switch (ae) {
                  case s:
                  case i:
                  case l:
                  case f:
                  case d:
                  case o:
                    return ae;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var x = i, E = o, O = e, _ = l, R = n, T = f, D = d, A = t, P = a, I = r, N = c, z = u, L = !1, U = !1;
    function X(q) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(q) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(q) {
      return C(q) === i;
    }
    function B(q) {
      return C(q) === o;
    }
    function Y(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function se(q) {
      return C(q) === l;
    }
    function J(q) {
      return C(q) === n;
    }
    function Q(q) {
      return C(q) === f;
    }
    function te(q) {
      return C(q) === d;
    }
    function ce(q) {
      return C(q) === t;
    }
    function ve(q) {
      return C(q) === a;
    }
    function be(q) {
      return C(q) === r;
    }
    function ie(q) {
      return C(q) === c;
    }
    function Ce(q) {
      return C(q) === u;
    }
    He.ContextConsumer = x, He.ContextProvider = E, He.Element = O, He.ForwardRef = _, He.Fragment = R, He.Lazy = T, He.Memo = D, He.Portal = A, He.Profiler = P, He.StrictMode = I, He.Suspense = N, He.SuspenseList = z, He.isAsyncMode = X, He.isConcurrentMode = $, He.isContextConsumer = V, He.isContextProvider = B, He.isElement = Y, He.isForwardRef = se, He.isFragment = J, He.isLazy = Q, He.isMemo = te, He.isPortal = ce, He.isProfiler = ve, He.isStrictMode = be, He.isSuspense = ie, He.isSuspenseList = Ce, He.isValidElementType = S, He.typeOf = C;
  })()), He;
}
var Vd;
function hE() {
  return Vd || (Vd = 1, process.env.NODE_ENV === "production" ? Qo.exports = dE() : Qo.exports = fE()), Qo.exports;
}
var Qs = hE(), mE = Symbol.for("react.element"), gE = Symbol.for("react.transitional.element"), vE = Symbol.for("react.fragment");
function fg(e) {
  return (
    // Base object type
    e && Se(e) === "object" && // React Element type
    (e.$$typeof === mE || e.$$typeof === gE) && // React Fragment type
    e.type === vE
  );
}
var pE = Number(qv.split(".")[0]), vu = function(t, n) {
  typeof t == "function" ? t(n) : Se(t) === "object" && t && "current" in t && (t.current = n);
}, To = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      vu(i, o);
    });
  };
}, pu = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return cu(function() {
    return To.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, s) {
      return i !== o[s];
    });
  });
}, ms = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (hg(t) && pE >= 19)
    return !0;
  var a = Qs.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== Qs.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Qs.ForwardRef);
};
function hg(e) {
  return /* @__PURE__ */ Uf(e) && !fg(e);
}
var yu = function(t) {
  if (t && hg(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function zd(e, t, n, r) {
  var a = F({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(s) {
      var l = Z(s, 2), c = l[0], u = l[1];
      if (process.env.NODE_ENV !== "production" && rt(!(a != null && a[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), a != null && a[c] || a != null && a[u]) {
        var d;
        (d = a[u]) !== null && d !== void 0 || (a[u] = a == null ? void 0 : a[c]);
      }
    });
  }
  var i = F(F({}, n), a);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var mg = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ac = !0;
function Xn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!mg)
    return Object.assign.apply(Object, [{}].concat(t));
  ac = !1;
  var r = {};
  return t.forEach(function(a) {
    if (Se(a) === "object") {
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
  }), ac = !0, r;
}
var Hd = {};
function yE() {
}
var bE = function(t) {
  var n, r = t, a = yE;
  return mg && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, s) {
      if (ac) {
        var l;
        (l = n) === null || l === void 0 || l.add(s);
      }
      return i[s];
    }
  }), a = function(i, s) {
    var l;
    Hd[i] = {
      global: Array.from(n),
      component: F(F({}, (l = Hd[i]) === null || l === void 0 ? void 0 : l.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function Bd(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Xn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function wE(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "max(".concat(r.map(function(o) {
        return Ne(o);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "min(".concat(r.map(function(o) {
        return Ne(o);
      }).join(","), ")");
    }
  };
}
var SE = 1e3 * 60 * 10, xE = /* @__PURE__ */ (function() {
  function e() {
    Et(this, e), k(this, "map", /* @__PURE__ */ new Map()), k(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), k(this, "nextID", 0), k(this, "lastAccessBeat", /* @__PURE__ */ new Map()), k(this, "accessBeat", 0);
  }
  return _t(e, [{
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
        return o && Se(o) === "object" ? "obj_".concat(r.getObjectID(o)) : "".concat(Se(o), "_").concat(o);
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
          r - a > SE && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), Wd = new xE();
function CE(e, t) {
  return W.useMemo(function() {
    var n = Wd.get(t);
    if (n)
      return n;
    var r = e();
    return Wd.set(t, r), r;
  }, t);
}
var EE = function() {
  return {};
};
function _E(e) {
  var t = e.useCSP, n = t === void 0 ? EE : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function l(f, b, y, p) {
    var h = Array.isArray(f) ? f[0] : f;
    function g(O) {
      return "".concat(String(h)).concat(O.slice(0, 1).toUpperCase()).concat(O.slice(1));
    }
    var v = (p == null ? void 0 : p.unitless) || {}, w = typeof s == "function" ? s(f) : {}, S = F(F({}, w), {}, k({}, g("zIndexPopup"), !0));
    Object.keys(v).forEach(function(O) {
      S[g(O)] = v[O];
    });
    var C = F(F({}, p), {}, {
      unitless: S,
      prefixToken: g
    }), x = u(f, b, y, C), E = c(h, y, C);
    return function(O) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O, R = x(O, _), T = Z(R, 2), D = T[1], A = E(_), P = Z(A, 2), I = P[0], N = P[1];
      return [I, D, N];
    };
  }
  function c(f, b, y) {
    var p = y.unitless, h = y.injectStyle, g = h === void 0 ? !0 : h, v = y.prefixToken, w = y.ignore, S = function(E) {
      var O = E.rootCls, _ = E.cssVar, R = _ === void 0 ? {} : _, T = r(), D = T.realToken;
      return M1({
        path: [f],
        prefix: R.prefix,
        key: R.key,
        unitless: p,
        ignore: w,
        token: D,
        scope: O
      }, function() {
        var A = Bd(f, D, b), P = zd(f, D, A, {
          deprecatedTokens: y == null ? void 0 : y.deprecatedTokens
        });
        return Object.keys(A).forEach(function(I) {
          P[v(I)] = P[I], delete P[I];
        }), P;
      }), null;
    }, C = function(E) {
      var O = r(), _ = O.cssVar;
      return [function(R) {
        return g && _ ? /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(S, {
          rootCls: E,
          cssVar: _,
          component: f
        }), R) : R;
      }, _ == null ? void 0 : _.key];
    };
    return C;
  }
  function u(f, b, y) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], g = Z(h, 1), v = g[0], w = h.join("-"), S = e.layer || {
      name: "antd"
    };
    return function(C) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, E = r(), O = E.theme, _ = E.realToken, R = E.hashId, T = E.token, D = E.cssVar, A = a(), P = A.rootPrefixCls, I = A.iconPrefixCls, N = n(), z = D ? "css" : "js", L = CE(function() {
        var Y = /* @__PURE__ */ new Set();
        return D && Object.keys(p.unitless || {}).forEach(function(se) {
          Y.add(bi(se, D.prefix)), Y.add(bi(se, jd(v, D.prefix)));
        }), uE(z, Y);
      }, [z, v, D == null ? void 0 : D.prefix]), U = wE(z), X = U.max, $ = U.min, V = {
        theme: O,
        token: T,
        hashId: R,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: p.clientOnly,
        layer: S,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof o == "function" && tc(F(F({}, V), {}, {
        clientOnly: !1,
        path: ["Shared", P]
      }), function() {
        return o(T, {
          prefix: {
            rootPrefixCls: P,
            iconPrefixCls: I
          },
          csp: N
        });
      });
      var B = tc(F(F({}, V), {}, {
        path: [w, C, I]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var Y = bE(T), se = Y.token, J = Y.flush, Q = Bd(v, _, y), te = ".".concat(C), ce = zd(v, _, Q, {
          deprecatedTokens: p.deprecatedTokens
        });
        D && Q && Se(Q) === "object" && Object.keys(Q).forEach(function(Ce) {
          Q[Ce] = "var(".concat(bi(Ce, jd(v, D.prefix)), ")");
        });
        var ve = Xn(se, {
          componentCls: te,
          prefixCls: C,
          iconCls: ".".concat(I),
          antCls: ".".concat(P),
          calc: L,
          // @ts-ignore
          max: X,
          // @ts-ignore
          min: $
        }, D ? Q : ce), be = b(ve, {
          hashId: R,
          prefixCls: C,
          rootPrefixCls: P,
          iconPrefixCls: I
        });
        J(v, ce);
        var ie = typeof i == "function" ? i(ve, C, x, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : ie, be];
      });
      return [B, R];
    };
  }
  function d(f, b, y) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(f, b, y, F({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), g = function(w) {
      var S = w.prefixCls, C = w.rootCls, x = C === void 0 ? S : C;
      return h(S, x), null;
    };
    return process.env.NODE_ENV !== "production" && (g.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), g;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const zi = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], OE = "5.29.3";
function el(e) {
  return e >= 0 && e <= 255;
}
function ei(e, t) {
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
    if (el(u) && el(d) && el(f))
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
var RE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function gg(e) {
  const {
    override: t
  } = e, n = RE(e, ["override"]), r = Object.assign({}, t);
  Object.keys(uo).forEach((f) => {
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
    colorSplit: ei(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: ei(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: ei(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: ei(a.colorPrimaryBg, a.colorBgContainer),
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
var Ud = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const vg = {
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
}, TE = {
  motionBase: !0,
  motionUnit: !0
}, PE = {
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
}, pg = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = Ud(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = gg(i), o && Object.entries(o).forEach(([s, l]) => {
    const {
      theme: c
    } = l, u = Ud(l, ["theme"]);
    let d = u;
    c && (d = pg(Object.assign(Object.assign({}, i), u), {
      override: u
    }, c)), i[s] = d;
  }), i;
};
function Ta() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = W.useContext(cg), o = `${OE}-${t || ""}`, i = n || lg, [s, l, c] = t1(i, [uo, e], {
    salt: o,
    override: r,
    getComputedToken: pg,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: gg,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: vg,
      ignore: TE,
      preserve: PE
    }
  });
  return [i, c, t ? l : "", s, a];
}
const bu = (e, t = !1) => ({
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
}), ME = () => ({
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
}), DE = () => ({
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
}), $E = (e) => ({
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
}), NE = (e, t, n, r) => {
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
}, kE = (e, t) => ({
  outline: `${Ne(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), AE = (e, t) => ({
  "&:focus-visible": kE(e, t)
}), yg = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, ME()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), bg = (e) => Object.assign(Object.assign({
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
}, AE(e)), {
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
  genStyleHooks: Nr
} = _E({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Qt(Ut);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, a] = Ta();
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
    } = Qt(Ut);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = $E(e);
    return [r, {
      "&": r
    }, yg((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : gu)];
  },
  getCommonStyle: NE,
  getCompUnitless: () => vg
});
function FE(e, t) {
  return zi.reduce((n, r) => {
    const a = e[`${r}1`], o = e[`${r}3`], i = e[`${r}6`], s = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const jE = (e, t) => {
  const [n, r] = Ta();
  return tc({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => yg(e));
}, IE = Object.assign({}, m), {
  useId: Yd
} = IE, LE = () => "", VE = typeof Yd > "u" ? LE : Yd;
function zE(e, t, n) {
  var r, a;
  const o = bn("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, nc), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : nc.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = VE();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || l);
    process.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return cu(() => {
    var c, u;
    if (!e)
      return t;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((y) => {
      d[y] = Object.assign(Object.assign({}, d[y]), e.components[y]);
    });
    const f = `css-var-${l.replace(/:/g, "")}`, b = ((c = i.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: d,
      cssVar: b
    });
  }, [i, s], (c, u) => c.some((d, f) => {
    const b = u[f];
    return !ql(d, b, !0);
  }));
}
function mo(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function HE(e) {
  return e && Se(e) === "object" && mo(e.nativeElement) ? e.nativeElement : mo(e) ? e : null;
}
function Ei(e) {
  var t = HE(e);
  if (t)
    return t;
  if (e instanceof W.Component) {
    var n;
    return (n = Fu.findDOMNode) === null || n === void 0 ? void 0 : n.call(Fu, e);
  }
  return null;
}
var BE = ["children"], wg = /* @__PURE__ */ m.createContext({});
function WE(e) {
  var t = e.children, n = kt(e, BE);
  return /* @__PURE__ */ m.createElement(wg.Provider, {
    value: n
  }, t);
}
var UE = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n() {
    return Et(this, n), t.apply(this, arguments);
  }
  return _t(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(m.Component);
function YE(e) {
  var t = m.useReducer(function(s) {
    return s + 1;
  }, 0), n = Z(t, 2), r = n[1], a = m.useRef(e), o = Ft(function() {
    return a.current;
  }), i = Ft(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, r();
  });
  return [o, i];
}
var rr = "none", ti = "appear", ni = "enter", ri = "leave", qd = "none", hn = "prepare", Qr = "start", ea = "active", wu = "end", Sg = "prepared";
function Gd(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function qE(e, t) {
  var n = {
    animationend: Gd("Animation", "AnimationEnd"),
    transitionend: Gd("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var GE = qE(jt(), typeof window < "u" ? window : {}), xg = {};
if (jt()) {
  var KE = document.createElement("div");
  xg = KE.style;
}
var ai = {};
function Cg(e) {
  if (ai[e])
    return ai[e];
  var t = GE[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in xg)
        return ai[e] = t[o], ai[e];
    }
  return "";
}
var Eg = Cg("animationend"), _g = Cg("transitionend"), Og = !!(Eg && _g), Kd = Eg || "animationend", Xd = _g || "transitionend";
function Zd(e, t) {
  if (!e) return null;
  if (Se(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const XE = (function(e) {
  var t = Ae();
  function n(a) {
    a && (a.removeEventListener(Xd, e), a.removeEventListener(Kd, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(Xd, e), a.addEventListener(Kd, e), t.current = a);
  }
  return m.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var Rg = jt() ? Gv : bt, Tg = function(t) {
  return +setTimeout(t, 16);
}, Pg = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Tg = function(t) {
  return window.requestAnimationFrame(t);
}, Pg = function(t) {
  return window.cancelAnimationFrame(t);
});
var Jd = 0, gs = /* @__PURE__ */ new Map();
function Mg(e) {
  gs.delete(e);
}
var va = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Jd += 1;
  var r = Jd;
  function a(o) {
    if (o === 0)
      Mg(r), t();
    else {
      var i = Tg(function() {
        a(o - 1);
      });
      gs.set(r, i);
    }
  }
  return a(n), r;
};
va.cancel = function(e) {
  var t = gs.get(e);
  return Mg(e), Pg(t);
};
process.env.NODE_ENV !== "production" && (va.ids = function() {
  return gs;
});
const ZE = (function() {
  var e = m.useRef(null);
  function t() {
    va.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = va(function() {
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
var JE = [hn, Qr, ea, wu], QE = [hn, Sg], Dg = !1, e_ = !0;
function $g(e) {
  return e === ea || e === wu;
}
const t_ = (function(e, t, n) {
  var r = ho(qd), a = Z(r, 2), o = a[0], i = a[1], s = ZE(), l = Z(s, 2), c = l[0], u = l[1];
  function d() {
    i(hn, !0);
  }
  var f = t ? QE : JE;
  return Rg(function() {
    if (o !== qd && o !== wu) {
      var b = f.indexOf(o), y = f[b + 1], p = n(o);
      p === Dg ? i(y, !0) : y && c(function(h) {
        function g() {
          h.isCanceled() || i(y, !0);
        }
        p === !0 ? g() : Promise.resolve(p).then(g);
      });
    }
  }, [e, o]), m.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, o];
});
function n_(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, s = i === void 0 ? !0 : i, l = r.motionLeave, c = l === void 0 ? !0 : l, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, b = r.onEnterPrepare, y = r.onLeavePrepare, p = r.onAppearStart, h = r.onEnterStart, g = r.onLeaveStart, v = r.onAppearActive, w = r.onEnterActive, S = r.onLeaveActive, C = r.onAppearEnd, x = r.onEnterEnd, E = r.onLeaveEnd, O = r.onVisibleChanged, _ = ho(), R = Z(_, 2), T = R[0], D = R[1], A = YE(rr), P = Z(A, 2), I = P[0], N = P[1], z = ho(null), L = Z(z, 2), U = L[0], X = L[1], $ = I(), V = Ae(!1), B = Ae(null);
  function Y() {
    return n();
  }
  var se = Ae(!1);
  function J() {
    N(rr), X(null, !0);
  }
  var Q = Ft(function(ge) {
    var _e = I();
    if (_e !== rr) {
      var xe = Y();
      if (!(ge && !ge.deadline && ge.target !== xe)) {
        var ne = se.current, Pe;
        _e === ti && ne ? Pe = C == null ? void 0 : C(xe, ge) : _e === ni && ne ? Pe = x == null ? void 0 : x(xe, ge) : _e === ri && ne && (Pe = E == null ? void 0 : E(xe, ge)), ne && Pe !== !1 && J();
      }
    }
  }), te = XE(Q), ce = Z(te, 1), ve = ce[0], be = function(_e) {
    switch (_e) {
      case ti:
        return k(k(k({}, hn, f), Qr, p), ea, v);
      case ni:
        return k(k(k({}, hn, b), Qr, h), ea, w);
      case ri:
        return k(k(k({}, hn, y), Qr, g), ea, S);
      default:
        return {};
    }
  }, ie = m.useMemo(function() {
    return be($);
  }, [$]), Ce = t_($, !e, function(ge) {
    if (ge === hn) {
      var _e = ie[hn];
      return _e ? _e(Y()) : Dg;
    }
    if (H in ie) {
      var xe;
      X(((xe = ie[H]) === null || xe === void 0 ? void 0 : xe.call(ie, Y(), null)) || null);
    }
    return H === ea && $ !== rr && (ve(Y()), u > 0 && (clearTimeout(B.current), B.current = setTimeout(function() {
      Q({
        deadline: !0
      });
    }, u))), H === Sg && J(), e_;
  }), q = Z(Ce, 2), le = q[0], H = q[1], ae = $g(H);
  se.current = ae;
  var me = Ae(null);
  Rg(function() {
    if (!(V.current && me.current === t)) {
      D(t);
      var ge = V.current;
      V.current = !0;
      var _e;
      !ge && t && s && (_e = ti), ge && t && o && (_e = ni), (ge && !t && c || !ge && d && !t && c) && (_e = ri);
      var xe = be(_e);
      _e && (e || xe[hn]) ? (N(_e), le()) : N(rr), me.current = t;
    }
  }, [t]), bt(function() {
    // Cancel appear
    ($ === ti && !s || // Cancel enter
    $ === ni && !o || // Cancel leave
    $ === ri && !c) && N(rr);
  }, [s, o, c]), bt(function() {
    return function() {
      V.current = !1, clearTimeout(B.current);
    };
  }, []);
  var pe = m.useRef(!1);
  bt(function() {
    T && (pe.current = !0), T !== void 0 && $ === rr && ((pe.current || T) && (O == null || O(T)), pe.current = !0);
  }, [T, $]);
  var Te = U;
  return ie[hn] && H === Qr && (Te = F({
    transition: "none"
  }, Te)), [$, H, Te, T ?? t];
}
function r_(e) {
  var t = e;
  Se(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ m.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, l = a.removeOnLeave, c = l === void 0 ? !0 : l, u = a.forceRender, d = a.children, f = a.motionName, b = a.leavedClassName, y = a.eventProps, p = m.useContext(wg), h = p.motion, g = n(a, h), v = Ae(), w = Ae();
    function S() {
      try {
        return v.current instanceof HTMLElement ? v.current : Ei(w.current);
      } catch {
        return null;
      }
    }
    var C = n_(g, s, S, a), x = Z(C, 4), E = x[0], O = x[1], _ = x[2], R = x[3], T = m.useRef(R);
    R && (T.current = !0);
    var D = m.useCallback(function(L) {
      v.current = L, vu(o, L);
    }, [o]), A, P = F(F({}, y), {}, {
      visible: s
    });
    if (!d)
      A = null;
    else if (E === rr)
      R ? A = d(F({}, P), D) : !c && T.current && b ? A = d(F(F({}, P), {}, {
        className: b
      }), D) : u || !c && !b ? A = d(F(F({}, P), {}, {
        style: {
          display: "none"
        }
      }), D) : A = null;
    else {
      var I;
      O === hn ? I = "prepare" : $g(O) ? I = "active" : O === Qr && (I = "start");
      var N = Zd(f, "".concat(E, "-").concat(I));
      A = d(F(F({}, P), {}, {
        className: de(Zd(f, E), k(k({}, N, N && I), f, typeof f == "string")),
        style: _
      }), D);
    }
    if (/* @__PURE__ */ m.isValidElement(A) && ms(A)) {
      var z = yu(A);
      z || (A = /* @__PURE__ */ m.cloneElement(A, {
        ref: D
      }));
    }
    return /* @__PURE__ */ m.createElement(UE, {
      ref: w
    }, A);
  });
  return r.displayName = "CSSMotion", r;
}
const Su = r_(Og);
var oc = "add", ic = "keep", sc = "remove", tl = "removed";
function a_(e) {
  var t;
  return e && Se(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, F(F({}, t), {}, {
    key: String(t.key)
  });
}
function lc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(a_);
}
function o_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = lc(e), i = lc(t);
  o.forEach(function(c) {
    for (var u = !1, d = r; d < a; d += 1) {
      var f = i[d];
      if (f.key === c.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(b) {
          return F(F({}, b), {}, {
            status: oc
          });
        })), r = d), n.push(F(F({}, f), {}, {
          status: ic
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(F(F({}, c), {}, {
      status: sc
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(c) {
    return F(F({}, c), {}, {
      status: oc
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
      return d !== c || f !== sc;
    }), n.forEach(function(u) {
      u.key === c && (u.status = ic);
    });
  }), n;
}
var i_ = ["component", "children", "onVisibleChanged", "onAllRemoved"], s_ = ["status"], l_ = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function c_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Su, n = /* @__PURE__ */ (function(r) {
    ur(o, r);
    var a = dr(o);
    function o() {
      var i;
      Et(this, o);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(l)), k(Re(i), "state", {
        keyEntities: []
      }), k(Re(i), "removeKey", function(u) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(b) {
            return b.key !== u ? b : F(F({}, b), {}, {
              status: tl
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(b) {
            var y = b.status;
            return y !== tl;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return _t(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, d = c.children, f = c.onVisibleChanged;
        c.onAllRemoved;
        var b = kt(c, i_), y = u || m.Fragment, p = {};
        return l_.forEach(function(h) {
          p[h] = b[h], delete b[h];
        }), delete b.keys, /* @__PURE__ */ m.createElement(y, b, l.map(function(h, g) {
          var v = h.status, w = kt(h, s_), S = v === oc || v === ic;
          return /* @__PURE__ */ m.createElement(t, qe({}, p, {
            key: w.key,
            visible: S,
            eventProps: w,
            onVisibleChanged: function(x) {
              f == null || f(x, {
                key: w.key
              }), x || s.removeKey(w.key);
            }
          }), function(C, x) {
            return d(F(F({}, C), {}, {
              index: g
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, d = lc(c), f = o_(u, d);
        return {
          keyEntities: f.filter(function(b) {
            var y = u.find(function(p) {
              var h = p.key;
              return b.key === h;
            });
            return !(y && y.status === tl && b.status === sc);
          })
        };
      }
    }]), o;
  })(m.Component);
  return k(n, "defaultProps", {
    component: "div"
  }), n;
}
c_(Og);
const cc = /* @__PURE__ */ m.createContext(!0);
process.env.NODE_ENV !== "production" && (cc.displayName = "MotionCacheContext");
function u_(e) {
  const t = m.useContext(cc), {
    children: n
  } = e, [, r] = Ta(), {
    motion: a
  } = r, o = m.useRef(!1);
  return o.current || (o.current = t !== a), o.current ? /* @__PURE__ */ m.createElement(cc.Provider, {
    value: a
  }, /* @__PURE__ */ m.createElement(WE, {
    motion: a
  }, n)) : n;
}
const Ng = /* @__PURE__ */ m.memo(({
  dropdownMatchSelectWidth: e
}) => (bn("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (Ng.displayName = "PropWarning");
const d_ = process.env.NODE_ENV !== "production" ? Ng : () => null;
var f_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let uc = !1;
process.env.NODE_ENV;
const h_ = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let kg;
function m_() {
  return kg || rc;
}
function g_(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const v_ = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (kg = t), r && g_(r) && (process.env.NODE_ENV !== "production" && Oo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), rE(m_(), r));
}, p_ = (e) => {
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
    dropdownMatchSelectWidth: b,
    popupMatchSelectWidth: y,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: g,
    iconPrefixCls: v,
    theme: w,
    componentDisabled: S,
    segmented: C,
    statistic: x,
    spin: E,
    calendar: O,
    carousel: _,
    cascader: R,
    collapse: T,
    typography: D,
    checkbox: A,
    descriptions: P,
    divider: I,
    drawer: N,
    skeleton: z,
    steps: L,
    image: U,
    layout: X,
    list: $,
    mentions: V,
    modal: B,
    progress: Y,
    result: se,
    slider: J,
    breadcrumb: Q,
    menu: te,
    pagination: ce,
    input: ve,
    textArea: be,
    empty: ie,
    badge: Ce,
    radio: q,
    rate: le,
    switch: H,
    transfer: ae,
    avatar: me,
    message: pe,
    tag: Te,
    table: ge,
    card: _e,
    tabs: xe,
    timeline: ne,
    timePicker: Pe,
    upload: Ie,
    notification: vt,
    tree: Ke,
    colorPicker: Je,
    datePicker: St,
    rangePicker: Be,
    flex: Le,
    wave: $e,
    dropdown: Ee,
    warning: Qe,
    tour: ue,
    tooltip: ye,
    popover: ct,
    popconfirm: $n,
    floatButton: fr,
    floatButtonGroup: kr,
    variant: Da,
    inputNumber: Ar,
    treeSelect: ln
  } = e, Ot = m.useCallback((Ue, dt) => {
    const {
      prefixCls: At
    } = e;
    if (dt)
      return dt;
    const Tt = At || g.getPrefixCls("");
    return Ue ? `${Tt}-${Ue}` : Tt;
  }, [g.getPrefixCls, e.prefixCls]), ut = v || g.iconPrefixCls || gu, Nn = n || g.csp;
  jE(ut, Nn);
  const Rt = zE(w, g.theme, {
    prefixCls: Ot("")
  });
  process.env.NODE_ENV !== "production" && (uc = uc || !!Rt);
  const We = {
    csp: Nn,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: s || h,
    direction: c,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: y ?? b,
    popupOverflow: p,
    getPrefixCls: Ot,
    iconPrefixCls: ut,
    theme: Rt,
    segmented: C,
    statistic: x,
    spin: E,
    calendar: O,
    carousel: _,
    cascader: R,
    collapse: T,
    typography: D,
    checkbox: A,
    descriptions: P,
    divider: I,
    drawer: N,
    skeleton: z,
    steps: L,
    image: U,
    input: ve,
    textArea: be,
    layout: X,
    list: $,
    mentions: V,
    modal: B,
    progress: Y,
    result: se,
    slider: J,
    breadcrumb: Q,
    menu: te,
    pagination: ce,
    empty: ie,
    badge: Ce,
    radio: q,
    rate: le,
    switch: H,
    transfer: ae,
    avatar: me,
    message: pe,
    tag: Te,
    table: ge,
    card: _e,
    tabs: xe,
    timeline: ne,
    timePicker: Pe,
    upload: Ie,
    notification: vt,
    tree: Ke,
    colorPicker: Je,
    datePicker: St,
    rangePicker: Be,
    flex: Le,
    wave: $e,
    dropdown: Ee,
    warning: Qe,
    tour: ue,
    tooltip: ye,
    popover: ct,
    popconfirm: $n,
    floatButton: fr,
    floatButtonGroup: kr,
    variant: Da,
    inputNumber: Ar,
    treeSelect: ln
  };
  process.env.NODE_ENV !== "production" && bn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ve = Object.assign({}, g);
  Object.keys(We).forEach((Ue) => {
    We[Ue] !== void 0 && (Ve[Ue] = We[Ue]);
  }), h_.forEach((Ue) => {
    const dt = e[Ue];
    dt && (Ve[Ue] = dt);
  }), typeof r < "u" && (Ve.button = Object.assign({
    autoInsertSpace: r
  }, Ve.button));
  const xt = cu(() => Ve, Ve, (Ue, dt) => {
    const At = Object.keys(Ue), Tt = Object.keys(dt);
    return At.length !== Tt.length || At.some((xn) => Ue[xn] !== dt[xn]);
  }), {
    layer: Sn
  } = m.useContext(_o), It = m.useMemo(() => ({
    prefixCls: ut,
    csp: Nn,
    layer: Sn ? "antd" : void 0
  }), [ut, Nn, Sn]);
  let it = /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(d_, {
    dropdownMatchSelectWidth: b
  }), t);
  const Zn = m.useMemo(() => {
    var Ue, dt, At, Tt;
    return Jr(((Ue = ma.Form) === null || Ue === void 0 ? void 0 : Ue.defaultValidateMessages) || {}, ((At = (dt = xt.locale) === null || dt === void 0 ? void 0 : dt.Form) === null || At === void 0 ? void 0 : At.defaultValidateMessages) || {}, ((Tt = xt.form) === null || Tt === void 0 ? void 0 : Tt.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [xt, i == null ? void 0 : i.validateMessages]);
  Object.keys(Zn).length > 0 && (it = /* @__PURE__ */ m.createElement(F1.Provider, {
    value: Zn
  }, it)), s && (it = /* @__PURE__ */ m.createElement(ig, {
    locale: s,
    _ANT_MARK__: og
  }, it)), it = /* @__PURE__ */ m.createElement(iu.Provider, {
    value: It
  }, it), l && (it = /* @__PURE__ */ m.createElement(oE, {
    size: l
  }, it)), it = /* @__PURE__ */ m.createElement(u_, null, it);
  const kn = m.useMemo(() => {
    const Ue = Rt || {}, {
      algorithm: dt,
      token: At,
      components: Tt,
      cssVar: xn
    } = Ue, Fr = f_(Ue, ["algorithm", "token", "components", "cssVar"]), cn = dt && (!Array.isArray(dt) || dt.length > 0) ? Kl(dt) : lg, qt = {};
    Object.entries(Tt || {}).forEach(([un, jr]) => {
      const et = Object.assign({}, jr);
      "algorithm" in et && (et.algorithm === !0 ? et.theme = cn : (Array.isArray(et.algorithm) || typeof et.algorithm == "function") && (et.theme = Kl(et.algorithm)), delete et.algorithm), qt[un] = et;
    });
    const Cn = Object.assign(Object.assign({}, uo), At);
    return Object.assign(Object.assign({}, Fr), {
      theme: cn,
      token: Cn,
      components: qt,
      override: Object.assign({
        override: Cn
      }, qt),
      cssVar: xn
    });
  }, [Rt]);
  return w && (it = /* @__PURE__ */ m.createElement(cg.Provider, {
    value: kn
  }, it)), xt.warning && (it = /* @__PURE__ */ m.createElement(rg.Provider, {
    value: xt.warning
  }, it)), S !== void 0 && (it = /* @__PURE__ */ m.createElement(aE, {
    disabled: S
  }, it)), /* @__PURE__ */ m.createElement(Ut.Provider, {
    value: xt
  }, it);
}, Pa = (e) => {
  const t = m.useContext(Ut), n = m.useContext(mu);
  return /* @__PURE__ */ m.createElement(p_, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
Pa.ConfigContext = Ut;
Pa.SizeContext = ga;
Pa.config = v_;
Pa.useConfig = iE;
Object.defineProperty(Pa, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Oo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ga)
});
process.env.NODE_ENV !== "production" && (Pa.displayName = "ConfigProvider");
const Ag = /* @__PURE__ */ m.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
}), y_ = (e) => {
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
      lineHeight: Ne(o),
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
}, Fg = (e) => {
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
}, jg = [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]], Ig = Nr("Layout", y_, Fg, {
  deprecatedTokens: jg
}), b_ = (e) => {
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
    lightSiderBg: b,
    lightTriggerColor: y,
    lightTriggerBg: p,
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
        lineHeight: Ne(i),
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
        borderRadius: `0 ${Ne(f)} ${Ne(f)} 0`,
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
          borderRadius: `${Ne(f)} 0 0 ${Ne(f)}`
        }
      },
      // Light
      "&-light": {
        background: b,
        [`${t}-trigger`]: {
          color: y,
          background: p
        },
        [`${t}-zero-width-trigger`]: {
          color: y,
          background: p,
          border: `1px solid ${h}`,
          // Safe to modify to any other color
          borderInlineStart: 0
        }
      }
    }
  };
}, w_ = Nr(["Layout", "Sider"], b_, Fg, {
  deprecatedTokens: jg
});
var S_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Qd = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, x_ = (e) => !Number.isNaN(Number.parseFloat(e)) && Number.isFinite(Number(e)), C_ = /* @__PURE__ */ m.createContext({}), E_ = /* @__PURE__ */ (() => {
  let e = 0;
  return (t = "") => (e += 1, `${t}${e}`);
})(), xu = /* @__PURE__ */ m.forwardRef((e, t) => {
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
    zeroWidthTriggerStyle: b,
    breakpoint: y,
    onCollapse: p,
    onBreakpoint: h
  } = e, g = S_(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: v
  } = Qt(Ag), [w, S] = Yn("collapsed" in e ? e.collapsed : i), [C, x] = Yn(!1);
  bt(() => {
    "collapsed" in e && S(e.collapsed);
  }, [e.collapsed]);
  const E = (te, ce) => {
    "collapsed" in e || S(te), p == null || p(te, ce);
  }, {
    getPrefixCls: O,
    direction: _
  } = Qt(Ut), R = O("layout-sider", n), [T, D, A] = w_(R), P = Ae(null);
  P.current = (te) => {
    x(te.matches), h == null || h(te.matches), w !== te.matches && E(te.matches, "responsive");
  }, bt(() => {
    function te(ve) {
      var be;
      return (be = P.current) === null || be === void 0 ? void 0 : be.call(P, ve);
    }
    let ce;
    return typeof (window == null ? void 0 : window.matchMedia) < "u" && y && y in Qd && (ce = window.matchMedia(`screen and (max-width: ${Qd[y]})`), CC(ce, te), te(ce)), () => {
      EC(ce, te);
    };
  }, [y]), bt(() => {
    const te = E_("ant-sider-");
    return v.addSider(te), () => v.removeSider(te);
  }, []);
  const I = () => {
    E(!w, "clickTrigger");
  }, N = ds(g, ["collapsed"]), z = w ? f : d, L = x_(z) ? `${z}px` : String(z), U = Number.parseFloat(String(f || 0)) === 0 ? /* @__PURE__ */ m.createElement("span", {
    onClick: I,
    className: de(`${R}-zero-width-trigger`, `${R}-zero-width-trigger-${u ? "right" : "left"}`),
    style: b
  }, a || /* @__PURE__ */ m.createElement(Fm, null)) : null, X = _ === "rtl" == !u, B = {
    expanded: X ? /* @__PURE__ */ m.createElement(Yl, null) : /* @__PURE__ */ m.createElement(Ul, null),
    collapsed: X ? /* @__PURE__ */ m.createElement(Ul, null) : /* @__PURE__ */ m.createElement(Yl, null)
  }[w ? "collapsed" : "expanded"], Y = a !== null ? U || /* @__PURE__ */ m.createElement("div", {
    className: `${R}-trigger`,
    onClick: I,
    style: {
      width: L
    }
  }, a || B) : null, se = Object.assign(Object.assign({}, l), {
    flex: `0 0 ${L}`,
    maxWidth: L,
    minWidth: L,
    width: L
  }), J = de(R, `${R}-${s}`, {
    [`${R}-collapsed`]: !!w,
    [`${R}-has-trigger`]: c && a !== null && !U,
    [`${R}-below`]: !!C,
    [`${R}-zero-width`]: Number.parseFloat(L) === 0
  }, r, D, A), Q = m.useMemo(() => ({
    siderCollapsed: w
  }), [w]);
  return T(/* @__PURE__ */ m.createElement(C_.Provider, {
    value: Q
  }, /* @__PURE__ */ m.createElement("aside", Object.assign({
    className: J
  }, N, {
    style: se,
    ref: t
  }), /* @__PURE__ */ m.createElement("div", {
    className: `${R}-children`
  }, o), c || C && U ? Y : null)));
});
process.env.NODE_ENV !== "production" && (xu.displayName = "Sider");
function Dr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return W.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Dr(r)) : fg(r) && r.props ? n = n.concat(Dr(r.props.children, t)) : n.push(r));
  }), n;
}
function __(e, t, n) {
  return typeof n == "boolean" ? n : e.length ? !0 : Dr(t).some((a) => a.type === xu);
}
var Lg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function vs({
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
const Cu = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    prefixCls: n,
    suffixCls: r,
    className: a,
    tagName: o
  } = e, i = Lg(e, ["prefixCls", "suffixCls", "className", "tagName"]), {
    getPrefixCls: s
  } = m.useContext(Ut), l = s("layout", n), [c, u, d] = Ig(l), f = r ? `${l}-${r}` : l;
  return c(/* @__PURE__ */ m.createElement(o, Object.assign({
    className: de(n || f, a, u, d),
    ref: t
  }, i)));
}), O_ = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    direction: n
  } = m.useContext(Ut), [r, a] = m.useState([]), {
    prefixCls: o,
    className: i,
    rootClassName: s,
    children: l,
    hasSider: c,
    tagName: u,
    style: d
  } = e, f = Lg(e, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]), b = ds(f, ["suffixCls"]), {
    getPrefixCls: y,
    className: p,
    style: h
  } = Ro("layout"), g = y("layout", o), v = __(r, l, c), [w, S, C] = Ig(g), x = de(g, {
    [`${g}-has-sider`]: v,
    [`${g}-rtl`]: n === "rtl"
  }, p, i, s, S, C), E = m.useMemo(() => ({
    siderHook: {
      addSider: (O) => {
        a((_) => [].concat(fe(_), [O]));
      },
      removeSider: (O) => {
        a((_) => _.filter((R) => R !== O));
      }
    }
  }), []);
  return w(/* @__PURE__ */ m.createElement(Ag.Provider, {
    value: E
  }, /* @__PURE__ */ m.createElement(u, Object.assign({
    ref: t,
    className: x,
    style: Object.assign(Object.assign({}, h), d)
  }, b), l)));
});
vs({
  tagName: "div",
  displayName: "Layout"
})(O_);
vs({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(Cu);
vs({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(Cu);
const R_ = vs({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(Cu), VM = (e) => {
  const t = cs(), [n, r] = op.useNotification(), [a, o] = Yn(() => typeof window > "u" ? !1 : window.innerWidth < 992), [i, s] = Yn([]), {
    token: { colorBgContainer: l, borderRadiusLG: c }
  } = Gf.useToken(), u = Yf(), { authUser: d, logout: f } = os(), { submitPostRequest: b, clearRequests: y } = Pr(), { notificationData: p } = ym(), h = Xv();
  function g(_, R, T, D, A) {
    return {
      key: _,
      icon: T,
      children: D,
      label: R,
      onClick: A
    };
  }
  const v = () => {
    if (e.onLogout) {
      e.onLogout();
      return;
    }
    b({
      key: "logout",
      path: "logout",
      showToast: !1,
      onSuccess: () => {
        y(), f();
      }
    });
  }, w = W.useMemo(() => Object.assign([], e.menuItems ?? []), [e.menuItems]), S = W.useMemo(() => {
    const _ = Object.assign([], w);
    return e.disableDefaultAccountMenu || (_.push({
      type: "divider",
      style: { margin: 20, backgroundColor: "#3a3b3c" }
    }), _.push(
      g(
        "account-group",
        e.accountLabel ?? (d == null ? void 0 : d.full_name) ?? "Account",
        /* @__PURE__ */ j.jsx(dp, {}),
        [
          g(
            "logout",
            "Logout",
            /* @__PURE__ */ j.jsx(up, {}),
            void 0,
            () => v()
          )
        ]
      )
    )), _;
  }, [
    w,
    e.disableDefaultAccountMenu,
    e.accountLabel,
    d
  ]), C = e.content ?? e.children, x = (_) => {
    const R = _.key;
    R !== "logout" && (u(R), h.pathname !== R && y());
  }, E = (_, R) => {
    for (const T of _) {
      if (!T || !("children" in T) || !T.children)
        continue;
      if (T.children.some((A) => A && A.key === R)) return String(T.key);
    }
    return null;
  };
  bt(() => {
    if (typeof window < "u" && window.innerWidth >= 992) {
      const _ = E(S, h.pathname);
      _ && s([_]);
    }
  }, [h.pathname, S]);
  const O = (_) => {
    s(_);
  };
  return W.useEffect(() => {
    p && p.show_notification && (p.success_title || p.success_message ? n.success({
      message: p.success_title,
      description: p.success_message,
      showProgress: !0,
      pauseOnHover: !0,
      placement: "bottomRight"
    }) : p.error_message && n.error({
      message: p.error_title ?? "Error!",
      description: p.error_message,
      showProgress: !0,
      pauseOnHover: !0,
      placement: "bottomRight"
    }), p.show_notification = !1);
  }, [p]), /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    r,
    /* @__PURE__ */ j.jsxs(ku, { style: { display: "flex", flexDirection: "row" }, children: [
      /* @__PURE__ */ j.jsxs(
        xu,
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
            /* @__PURE__ */ j.jsxs(
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
                  !a && /* @__PURE__ */ j.jsx(
                    ta.Text,
                    {
                      style: {
                        color: e.isSiderLight ? "#000" : "#fff",
                        fontWeight: 800,
                        fontSize: 18,
                        letterSpacing: 1
                      },
                      children: e.appTitle ?? "App"
                    }
                  ),
                  /* @__PURE__ */ j.jsx(
                    lt,
                    {
                      type: "text",
                      icon: a ? /* @__PURE__ */ j.jsx(lp, {}) : /* @__PURE__ */ j.jsx(cp, {}),
                      onClick: () => o(!a),
                      style: {
                        fontSize: "16px",
                        width: t ? 30 : 40,
                        height: t ? 30 : 40,
                        marginLeft: "auto",
                        color: e.isSiderLight ? "#000" : "#fff",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.2)"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ j.jsx(
              "div",
              {
                style: {
                  padding: "16px 0",
                  flex: 1
                },
                children: /* @__PURE__ */ j.jsx(
                  ip,
                  {
                    style: {
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "15px",
                      padding: 0,
                      margin: 0
                    },
                    theme: e.isSiderLight ? "light" : "dark",
                    mode: "inline",
                    selectedKeys: [h.pathname],
                    openKeys: i,
                    onOpenChange: O,
                    items: S,
                    onClick: x,
                    className: "custom-dark-menu"
                  }
                )
              }
            ),
            /* @__PURE__ */ j.jsx(
              "div",
              {
                style: {
                  padding: t ? "12px 4px" : "16px 8px",
                  textAlign: "center",
                  borderTop: "1px solid rgba(255,255,255,0.15)"
                },
                children: /* @__PURE__ */ j.jsxs(
                  "div",
                  {
                    style: {
                      padding: a ? "10px 6px" : "10px 14px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)"
                    },
                    children: [
                      /* @__PURE__ */ j.jsx(
                        ta.Text,
                        {
                          style: {
                            color: e.isSiderLight ? "#000" : "#fff",
                            fontSize: "13px",
                            fontWeight: 700,
                            display: "block"
                          },
                          children: e.appTitle ?? "App"
                        }
                      ),
                      !a && /* @__PURE__ */ j.jsx(
                        ta.Text,
                        {
                          style: {
                            color: e.isSiderLight ? "#000" : "#e0e7ff",
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
      /* @__PURE__ */ j.jsx(ku, { style: { height: "100vh" }, children: /* @__PURE__ */ j.jsx(
        R_,
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
}, zM = (e) => {
  const { notifyPostRequests: t, getPostRequest: n, getPostRequestErrorProperty: r } = Pr();
  let a = e.type;
  const o = n(e.requestKey).postData, i = n(e.requestKey).errors;
  let s = e.dataKey, l = o[e.dataKey];
  const c = n(e.requestKey).inputRefs;
  if (c[e.dataKey] || (c[e.dataKey] = Ae(null)), a == "date-datetime" || a == "time-datetime" || a == "timemilli-datetime") {
    const f = e.dataKey + "_data-date", b = e.dataKey + "_data-time";
    if (a = a == "date-datetime" ? "date" : a == "time-datetime" ? "time" : "timemilli", s = a == "date" ? f : b, l) {
      const y = G.utc(l).toDate(), p = G(y).local().format("YYYY-MM-DD HH:mm:ss.SSS"), h = p.substring(0, 10), g = a == "time" ? p.substring(11, 19) : p.substring(11, 23);
      o[f] = h, o[b] = g;
    } else
      o[f] = null, o[b] = null;
    o[e.dataKey] && (o[f] && a == "date" ? l = o[f] : o[b] && (a == "time" || a == "timemilli") && (l = o[b]));
  }
  let u;
  const d = e.options;
  return e.isInitialValueDisabled && (l ? (u = o[s + "-disabled"], u || (u = o[s], o[s + "-disabled"] = u)) : o[s + "-disabled"] = []), /* @__PURE__ */ j.jsx(
    Hx,
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
      use12Hours: e.use12Hours,
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
          const b = e.dataKey + "_data-date", y = e.dataKey + "_data-time";
          if (f) {
            let p = e.type == "date-datetime" ? f : null;
            p || (p = o[b] ? o[b] : G().format("YYYY-MM-DD"));
            let h = e.type == "time-datetime" || e.type == "timemilli-datetime" ? f : null;
            h || (h = o[y] ? o[y] : "00:00:00.000"), f = G(p + " " + h).utc().format("YYYY-MM-DD HH:mm:ss.SSS");
          }
        }
        o[e.dataKey] = f, f && i && i[e.dataKey] && delete i[e.dataKey], t();
      }
    }
  );
}, HM = (e) => {
  const t = e.size ? e.size : 24, n = e.color ? e.color : "#ffffff", r = "0 0 24 24", a = e.isSemiTransparent ? "opacity-70" : "";
  return /* @__PURE__ */ j.jsx(
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
}, BM = (e) => {
  const {
    fetchRequest: t,
    getRequest: n,
    getPostRequest: r,
    submitPostRequest: a,
    isForCreation: o
  } = Pr(), { closeModal: i, isModalOpen: s } = Sm(), l = () => {
    if (e.onSaveClick) {
      e.onSaveClick();
      return;
    }
    e.onPreSaveClick && e.onPreSaveClick(), c();
  }, c = () => {
    const u = (d, f) => {
      let b = e.tableRequestKey;
      b || (b = e.savePath.split("?")[0]), t(n(b)), e.dontCloseAfterSave || i(e.id), e.onDataSaved && e.onDataSaved(d, f);
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
          for (let b = 0; b < f.length; b++) {
            const y = f[b], p = r(e.id).inputRefs[y];
            if (p && p.current) {
              let h = p.current;
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
  return /* @__PURE__ */ j.jsx(
    Bx,
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
var T_ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, P_ = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: T_
  }));
}, Vg = /* @__PURE__ */ m.forwardRef(P_);
process.env.NODE_ENV !== "production" && (Vg.displayName = "EditOutlined");
var dc = /* @__PURE__ */ m.createContext(null);
function M_(e) {
  var t = e.children, n = e.onBatchResize, r = m.useRef(0), a = m.useRef([]), o = m.useContext(dc), i = m.useCallback(function(s, l, c) {
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
  return /* @__PURE__ */ m.createElement(dc.Provider, {
    value: i
  }, t);
}
var zg = (function() {
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
})(), fc = typeof window < "u" && typeof document < "u" && window.document === document, Hi = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), D_ = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Hi) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), $_ = 2;
function N_(e, t) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, e()), r && s();
  }
  function i() {
    D_(o);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - a < $_)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    a = l;
  }
  return s;
}
var k_ = 20, A_ = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], F_ = typeof MutationObserver < "u", j_ = (
  /** @class */
  (function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = N_(this.refresh.bind(this), k_);
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
      !fc || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), F_ ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !fc || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = A_.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  })()
), Hg = (function(e, t) {
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
}), pa = (function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Hi;
}), Bg = ps(0, 0, 0, 0);
function Bi(e) {
  return parseFloat(e) || 0;
}
function ef(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e["border-" + a + "-width"];
    return r + Bi(o);
  }, 0);
}
function I_(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e["padding-" + o];
    n[o] = Bi(i);
  }
  return n;
}
function L_(e) {
  var t = e.getBBox();
  return ps(0, 0, t.width, t.height);
}
function V_(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Bg;
  var r = pa(e).getComputedStyle(e), a = I_(r), o = a.left + a.right, i = a.top + a.bottom, s = Bi(r.width), l = Bi(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= ef(r, "left", "right") + o), Math.round(l + i) !== n && (l -= ef(r, "top", "bottom") + i)), !H_(e)) {
    var c = Math.round(s + o) - t, u = Math.round(l + i) - n;
    Math.abs(c) !== 1 && (s -= c), Math.abs(u) !== 1 && (l -= u);
  }
  return ps(a.left, a.top, s, l);
}
var z_ = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof pa(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof pa(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function H_(e) {
  return e === pa(e).document.documentElement;
}
function B_(e) {
  return fc ? z_(e) ? L_(e) : V_(e) : Bg;
}
function W_(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return Hg(i, {
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
function ps(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var U_ = (
  /** @class */
  (function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ps(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = B_(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  })()
), Y_ = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t, n) {
      var r = W_(n);
      Hg(this, { target: t, contentRect: r });
    }
    return e;
  })()
), q_ = (
  /** @class */
  (function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new zg(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof pa(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new U_(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof pa(t).Element))
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
          return new Y_(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  })()
), Wg = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new zg(), Ug = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = j_.getInstance(), r = new q_(t, n, this);
      Wg.set(this, r);
    }
    return e;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Ug.prototype[e] = function() {
    var t;
    return (t = Wg.get(this))[e].apply(t, arguments);
  };
});
var G_ = (function() {
  return typeof Hi.ResizeObserver < "u" ? Hi.ResizeObserver : Ug;
})(), Hn = /* @__PURE__ */ new Map();
function Yg(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Hn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var qg = new G_(Yg);
process.env.NODE_ENV;
process.env.NODE_ENV;
function K_(e, t) {
  Hn.has(e) || (Hn.set(e, /* @__PURE__ */ new Set()), qg.observe(e)), Hn.get(e).add(t);
}
function X_(e, t) {
  Hn.has(e) && (Hn.get(e).delete(t), Hn.get(e).size || (qg.unobserve(e), Hn.delete(e)));
}
var Z_ = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n() {
    return Et(this, n), t.apply(this, arguments);
  }
  return _t(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(m.Component);
function J_(e, t) {
  var n = e.children, r = e.disabled, a = m.useRef(null), o = m.useRef(null), i = m.useContext(dc), s = typeof n == "function", l = s ? n(a) : n, c = m.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ m.isValidElement(l) && ms(l), d = u ? yu(l) : null, f = pu(d, a), b = function() {
    var g;
    return Ei(a.current) || // Support `nativeElement` format
    (a.current && Se(a.current) === "object" ? Ei((g = a.current) === null || g === void 0 ? void 0 : g.nativeElement) : null) || Ei(o.current);
  };
  m.useImperativeHandle(t, function() {
    return b();
  });
  var y = m.useRef(e);
  y.current = e;
  var p = m.useCallback(function(h) {
    var g = y.current, v = g.onResize, w = g.data, S = h.getBoundingClientRect(), C = S.width, x = S.height, E = h.offsetWidth, O = h.offsetHeight, _ = Math.floor(C), R = Math.floor(x);
    if (c.current.width !== _ || c.current.height !== R || c.current.offsetWidth !== E || c.current.offsetHeight !== O) {
      var T = {
        width: _,
        height: R,
        offsetWidth: E,
        offsetHeight: O
      };
      c.current = T;
      var D = E === Math.round(C) ? C : E, A = O === Math.round(x) ? x : O, P = F(F({}, T), {}, {
        offsetWidth: D,
        offsetHeight: A
      });
      i == null || i(P, h, w), v && Promise.resolve().then(function() {
        v(P, h);
      });
    }
  }, []);
  return m.useEffect(function() {
    var h = b();
    return h && !r && K_(h, p), function() {
      return X_(h, p);
    };
  }, [a.current, r]), /* @__PURE__ */ m.createElement(Z_, {
    ref: o
  }, u ? /* @__PURE__ */ m.cloneElement(l, {
    ref: f
  }) : l);
}
var Gg = /* @__PURE__ */ m.forwardRef(J_);
process.env.NODE_ENV !== "production" && (Gg.displayName = "SingleObserver");
var Q_ = "rc-observer-key";
function eO(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Dr(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? ua(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && ua(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(Q_, "-").concat(o);
    return /* @__PURE__ */ m.createElement(Gg, qe({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var Ma = /* @__PURE__ */ m.forwardRef(eO);
process.env.NODE_ENV !== "production" && (Ma.displayName = "ResizeObserver");
Ma.Collection = M_;
var tO = function(t) {
  if (jt() && window.document.documentElement) {
    var n = Array.isArray(t) ? t : [t], r = window.document.documentElement;
    return n.some(function(a) {
      return a in r.style;
    });
  }
  return !1;
};
function tf(e, t) {
  return tO(e);
}
function Kg(e) {
  var t = e.children, n = e.prefixCls, r = e.id, a = e.overlayInnerStyle, o = e.bodyClassName, i = e.className, s = e.style;
  return /* @__PURE__ */ m.createElement("div", {
    className: de("".concat(n, "-content"), i),
    style: s
  }, /* @__PURE__ */ m.createElement("div", {
    className: de("".concat(n, "-inner"), o),
    id: r,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Xg = /* @__PURE__ */ m.createContext(null), nf = [];
function nO(e, t) {
  var n = m.useState(function() {
    if (!jt())
      return null;
    var y = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && y.setAttribute("data-debug", t), y;
  }), r = Z(n, 1), a = r[0], o = m.useRef(!1), i = m.useContext(Xg), s = m.useState(nf), l = Z(s, 2), c = l[0], u = l[1], d = i || (o.current ? void 0 : function(y) {
    u(function(p) {
      var h = [y].concat(fe(p));
      return h;
    });
  });
  function f() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function b() {
    var y;
    (y = a.parentElement) === null || y === void 0 || y.removeChild(a), o.current = !1;
  }
  return at(function() {
    return e ? i ? i(f) : f() : b(), b;
  }, [e]), at(function() {
    c.length && (c.forEach(function(y) {
      return y();
    }), u(nf));
  }, [c]), [a, d];
}
function rO(e) {
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
    } catch (y) {
      console.error(y), a = l, o = c;
    }
  }
  document.body.appendChild(n);
  var f = e && a && !isNaN(a) ? a : n.offsetWidth - n.clientWidth, b = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), oo(t), {
    width: f,
    height: b
  };
}
function aO(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : rO(e);
}
function oO() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var iO = "rc-util-locker-".concat(Date.now()), rf = 0;
function sO(e) {
  var t = !!e, n = m.useState(function() {
    return rf += 1, "".concat(iO, "_").concat(rf);
  }), r = Z(n, 1), a = r[0];
  at(function() {
    if (t) {
      var o = aO(document.body).width, i = oO();
      Un(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      oo(a);
    return function() {
      oo(a);
    };
  }, [t, a]);
}
var lO = !1;
function cO(e) {
  return lO;
}
var af = function(t) {
  return t === !1 ? !1 : !jt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Eu = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, c = m.useState(n), u = Z(c, 2), d = u[0], f = u[1], b = d || n;
  process.env.NODE_ENV !== "production" && rt(jt() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), m.useEffect(function() {
    (s || n) && f(n);
  }, [n, s]);
  var y = m.useState(function() {
    return af(a);
  }), p = Z(y, 2), h = p[0], g = p[1];
  m.useEffect(function() {
    var D = af(a);
    g(D ?? null);
  });
  var v = nO(b && !h, o), w = Z(v, 2), S = w[0], C = w[1], x = h ?? S;
  sO(r && n && jt() && (x === S || x === document.body));
  var E = null;
  if (l && ms(l) && t) {
    var O = l;
    E = O.ref;
  }
  var _ = pu(E, t);
  if (!b || !jt() || h === void 0)
    return null;
  var R = x === !1 || cO(), T = l;
  return t && (T = /* @__PURE__ */ m.cloneElement(l, {
    ref: _
  })), /* @__PURE__ */ m.createElement(Xg.Provider, {
    value: C
  }, R ? T : /* @__PURE__ */ mp(T, x));
});
process.env.NODE_ENV !== "production" && (Eu.displayName = "Portal");
function uO() {
  var e = F({}, m);
  return e.useId;
}
var of = 0, sf = uO();
const Zg = sf ? (
  // Use React `useId`
  function(t) {
    var n = sf();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = m.useState("ssr-id"), r = Z(n, 2), a = r[0], o = r[1];
    return m.useEffect(function() {
      var i = of;
      of += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
), dO = (function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
});
function fO(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, a = e.arrowPos, o = r || {}, i = o.className, s = o.content, l = a.x, c = l === void 0 ? 0 : l, u = a.y, d = u === void 0 ? 0 : u, f = m.useRef();
  if (!n || !n.points)
    return null;
  var b = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var y = n.points[0], p = n.points[1], h = y[0], g = y[1], v = p[0], w = p[1];
    h === v || !["t", "b"].includes(h) ? b.top = d : h === "t" ? b.top = 0 : b.bottom = 0, g === w || !["l", "r"].includes(g) ? b.left = c : g === "l" ? b.left = 0 : b.right = 0;
  }
  return /* @__PURE__ */ m.createElement("div", {
    ref: f,
    className: de("".concat(t, "-arrow"), i),
    style: b
  }, s);
}
function hO(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ m.createElement(Su, qe({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ m.createElement("div", {
      style: {
        zIndex: r
      },
      className: de("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Jg = /* @__PURE__ */ m.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Jg.displayName = "PopupContent");
var Qg = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, u = e.fresh, d = e.onClick, f = e.mask, b = e.arrow, y = e.arrowPos, p = e.align, h = e.motion, g = e.maskMotion, v = e.forceRender, w = e.getPopupContainer, S = e.autoDestroy, C = e.portal, x = e.zIndex, E = e.onMouseEnter, O = e.onMouseLeave, _ = e.onPointerEnter, R = e.onPointerDownCapture, T = e.ready, D = e.offsetX, A = e.offsetY, P = e.offsetR, I = e.offsetB, N = e.onAlign, z = e.onPrepare, L = e.stretch, U = e.targetWidth, X = e.targetHeight, $ = typeof n == "function" ? n() : n, V = l || c, B = (w == null ? void 0 : w.length) > 0, Y = m.useState(!w || !B), se = Z(Y, 2), J = se[0], Q = se[1];
  if (at(function() {
    !J && B && i && Q(!0);
  }, [J, B, i]), !J)
    return null;
  var te = "auto", ce = {
    left: "-1000vw",
    top: "-1000vh",
    right: te,
    bottom: te
  };
  if (T || !l) {
    var ve, be = p.points, ie = p.dynamicInset || ((ve = p._experimental) === null || ve === void 0 ? void 0 : ve.dynamicInset), Ce = ie && be[0][1] === "r", q = ie && be[0][0] === "b";
    Ce ? (ce.right = P, ce.left = te) : (ce.left = D, ce.right = te), q ? (ce.bottom = I, ce.top = te) : (ce.top = A, ce.bottom = te);
  }
  var le = {};
  return L && (L.includes("height") && X ? le.height = X : L.includes("minHeight") && X && (le.minHeight = X), L.includes("width") && U ? le.width = U : L.includes("minWidth") && U && (le.minWidth = U)), l || (le.pointerEvents = "none"), /* @__PURE__ */ m.createElement(C, {
    open: v || V,
    getContainer: w && function() {
      return w(i);
    },
    autoDestroy: S
  }, /* @__PURE__ */ m.createElement(hO, {
    prefixCls: a,
    open: l,
    zIndex: x,
    mask: f,
    motion: g
  }), /* @__PURE__ */ m.createElement(Ma, {
    onResize: N,
    disabled: !l
  }, function(H) {
    return /* @__PURE__ */ m.createElement(Su, qe({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: v,
      leavedClassName: "".concat(a, "-hidden")
    }, h, {
      onAppearPrepare: z,
      onEnterPrepare: z,
      visible: l,
      onVisibleChanged: function(me) {
        var pe;
        h == null || (pe = h.onVisibleChanged) === null || pe === void 0 || pe.call(h, me), s(me);
      }
    }), function(ae, me) {
      var pe = ae.className, Te = ae.style, ge = de(a, pe, r);
      return /* @__PURE__ */ m.createElement("div", {
        ref: To(H, t, me),
        className: ge,
        style: F(F(F(F({
          "--arrow-x": "".concat(y.x || 0, "px"),
          "--arrow-y": "".concat(y.y || 0, "px")
        }, ce), le), Te), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, o),
        onMouseEnter: E,
        onMouseLeave: O,
        onPointerEnter: _,
        onClick: d,
        onPointerDownCapture: R
      }, b && /* @__PURE__ */ m.createElement(fO, {
        prefixCls: a,
        arrow: b,
        arrowPos: y,
        align: p
      }), /* @__PURE__ */ m.createElement(Jg, {
        cache: !l && !u
      }, $));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Qg.displayName = "Popup");
var ev = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, a = ms(n), o = m.useCallback(function(s) {
    vu(t, r ? r(s) : s);
  }, [r]), i = pu(o, yu(n));
  return a ? /* @__PURE__ */ m.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (ev.displayName = "TriggerWrapper");
var lf = /* @__PURE__ */ m.createContext(null);
function cf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function mO(e, t, n, r) {
  return m.useMemo(function() {
    var a = cf(n ?? t), o = cf(r ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, n, r]);
}
const gO = (function(e) {
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
function vO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function pO(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, l = o[i];
    if (vO((s = e[l]) === null || s === void 0 ? void 0 : s.points, a, r))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function uf(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function Po(e) {
  return e.ownerDocument.defaultView;
}
function hc(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = Po(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(l) {
      return r.includes(l);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Ua(e) {
  return go(parseFloat(e), 0);
}
function df(e, t) {
  var n = F({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = Po(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, l = a.borderBottomWidth, c = a.borderLeftWidth, u = a.borderRightWidth, d = r.getBoundingClientRect(), f = r.offsetHeight, b = r.clientHeight, y = r.offsetWidth, p = r.clientWidth, h = Ua(s), g = Ua(l), v = Ua(c), w = Ua(u), S = go(Math.round(d.width / y * 1e3) / 1e3), C = go(Math.round(d.height / f * 1e3) / 1e3), x = (y - p - v - w) * S, E = (f - b - h - g) * C, O = h * C, _ = g * C, R = v * S, T = w * S, D = 0, A = 0;
      if (o === "clip") {
        var P = Ua(i);
        D = P * S, A = P * C;
      }
      var I = d.x + R - D, N = d.y + O - A, z = I + d.width + 2 * D - R - T - x, L = N + d.height + 2 * A - O - _ - E;
      n.left = Math.max(n.left, I), n.top = Math.max(n.top, N), n.right = Math.min(n.right, z), n.bottom = Math.min(n.bottom, L);
    }
  }), n;
}
function ff(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function hf(e, t) {
  var n = t || [], r = Z(n, 2), a = r[0], o = r[1];
  return [ff(e.width, a), ff(e.height, o)];
}
function mf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Ur(e, t) {
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
function yO(e, t, n, r, a, o, i) {
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
  }), l = Z(s, 2), c = l[0], u = l[1], d = m.useRef(0), f = m.useMemo(function() {
    return t ? hc(t) : [];
  }, [t]), b = m.useRef({}), y = function() {
    b.current = {};
  };
  e || y();
  var p = Ft(function() {
    if (t && n && e) {
      let Gt = function(Fa, An) {
        var tr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pe, ja = V.x + Fa, Bo = V.y + An, Ps = ja + q, Ms = Bo + Ce, Ds = Math.max(ja, tr.left), oe = Math.max(Bo, tr.top), we = Math.min(Ps, tr.right), tt = Math.min(Ms, tr.bottom);
        return Math.max(0, (we - Ds) * (tt - oe));
      }, Lr = function() {
        cn = V.y + Ve, qt = cn + Ce, Cn = V.x + We, un = Cn + q;
      };
      var v, w, S, C, x = t, E = x.ownerDocument, O = Po(x), _ = O.getComputedStyle(x), R = _.position, T = x.style.left, D = x.style.top, A = x.style.right, P = x.style.bottom, I = x.style.overflow, N = F(F({}, a[r]), o), z = E.createElement("div");
      (v = x.parentElement) === null || v === void 0 || v.appendChild(z), z.style.left = "".concat(x.offsetLeft, "px"), z.style.top = "".concat(x.offsetTop, "px"), z.style.position = R, z.style.height = "".concat(x.offsetHeight, "px"), z.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto", x.style.overflow = "hidden";
      var L;
      if (Array.isArray(n))
        L = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var U, X, $ = n.getBoundingClientRect();
        $.x = (U = $.x) !== null && U !== void 0 ? U : $.left, $.y = (X = $.y) !== null && X !== void 0 ? X : $.top, L = {
          x: $.x,
          y: $.y,
          width: $.width,
          height: $.height
        };
      }
      var V = x.getBoundingClientRect(), B = O.getComputedStyle(x), Y = B.height, se = B.width;
      V.x = (w = V.x) !== null && w !== void 0 ? w : V.left, V.y = (S = V.y) !== null && S !== void 0 ? S : V.top;
      var J = E.documentElement, Q = J.clientWidth, te = J.clientHeight, ce = J.scrollWidth, ve = J.scrollHeight, be = J.scrollTop, ie = J.scrollLeft, Ce = V.height, q = V.width, le = L.height, H = L.width, ae = {
        left: 0,
        top: 0,
        right: Q,
        bottom: te
      }, me = {
        left: -ie,
        top: -be,
        right: ce - ie,
        bottom: ve - be
      }, pe = N.htmlRegion, Te = "visible", ge = "visibleFirst";
      pe !== "scroll" && pe !== ge && (pe = Te);
      var _e = pe === ge, xe = df(me, f), ne = df(ae, f), Pe = pe === Te ? ne : xe, Ie = _e ? ne : Pe;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var vt = x.getBoundingClientRect();
      x.style.left = T, x.style.top = D, x.style.right = A, x.style.bottom = P, x.style.overflow = I, (C = x.parentElement) === null || C === void 0 || C.removeChild(z);
      var Ke = go(Math.round(q / parseFloat(se) * 1e3) / 1e3), Je = go(Math.round(Ce / parseFloat(Y) * 1e3) / 1e3);
      if (Ke === 0 || Je === 0 || mo(n) && !gO(n))
        return;
      var St = N.offset, Be = N.targetOffset, Le = hf(V, St), $e = Z(Le, 2), Ee = $e[0], Qe = $e[1], ue = hf(L, Be), ye = Z(ue, 2), ct = ye[0], $n = ye[1];
      L.x -= ct, L.y -= $n;
      var fr = N.points || [], kr = Z(fr, 2), Da = kr[0], Ar = kr[1], ln = mf(Ar), Ot = mf(Da), ut = Ur(L, ln), Nn = Ur(V, Ot), Rt = F({}, N), We = ut.x - Nn.x + Ee, Ve = ut.y - Nn.y + Qe, xt = Gt(We, Ve), Sn = Gt(We, Ve, ne), It = Ur(L, ["t", "l"]), it = Ur(V, ["t", "l"]), Zn = Ur(L, ["b", "r"]), kn = Ur(V, ["b", "r"]), Ue = N.overflow || {}, dt = Ue.adjustX, At = Ue.adjustY, Tt = Ue.shiftX, xn = Ue.shiftY, Fr = function(An) {
        return typeof An == "boolean" ? An : An >= 0;
      }, cn, qt, Cn, un;
      Lr();
      var jr = Fr(At), et = Ot[0] === ln[0];
      if (jr && Ot[0] === "t" && (qt > Ie.bottom || b.current.bt)) {
        var hr = Ve;
        et ? hr -= Ce - le : hr = It.y - kn.y - Qe;
        var ko = Gt(We, hr), ys = Gt(We, hr, ne);
        // Of course use larger one
        ko > xt || ko === xt && (!_e || // Choose recommend one
        ys >= Sn) ? (b.current.bt = !0, Ve = hr, Qe = -Qe, Rt.points = [nr(Ot, 0), nr(ln, 0)]) : b.current.bt = !1;
      }
      if (jr && Ot[0] === "b" && (cn < Ie.top || b.current.tb)) {
        var mr = Ve;
        et ? mr += Ce - le : mr = Zn.y - it.y - Qe;
        var Ao = Gt(We, mr), bs = Gt(We, mr, ne);
        // Of course use larger one
        Ao > xt || Ao === xt && (!_e || // Choose recommend one
        bs >= Sn) ? (b.current.tb = !0, Ve = mr, Qe = -Qe, Rt.points = [nr(Ot, 0), nr(ln, 0)]) : b.current.tb = !1;
      }
      var Fo = Fr(dt), jo = Ot[1] === ln[1];
      if (Fo && Ot[1] === "l" && (un > Ie.right || b.current.rl)) {
        var gr = We;
        jo ? gr -= q - H : gr = It.x - kn.x - Ee;
        var vr = Gt(gr, Ve), $a = Gt(gr, Ve, ne);
        // Of course use larger one
        vr > xt || vr === xt && (!_e || // Choose recommend one
        $a >= Sn) ? (b.current.rl = !0, We = gr, Ee = -Ee, Rt.points = [nr(Ot, 1), nr(ln, 1)]) : b.current.rl = !1;
      }
      if (Fo && Ot[1] === "r" && (Cn < Ie.left || b.current.lr)) {
        var pr = We;
        jo ? pr += q - H : pr = Zn.x - it.x - Ee;
        var Na = Gt(pr, Ve), Ir = Gt(pr, Ve, ne);
        // Of course use larger one
        Na > xt || Na === xt && (!_e || // Choose recommend one
        Ir >= Sn) ? (b.current.lr = !0, We = pr, Ee = -Ee, Rt.points = [nr(Ot, 1), nr(ln, 1)]) : b.current.lr = !1;
      }
      Lr();
      var dn = Tt === !0 ? 0 : Tt;
      typeof dn == "number" && (Cn < ne.left && (We -= Cn - ne.left - Ee, L.x + H < ne.left + dn && (We += L.x - ne.left + H - dn)), un > ne.right && (We -= un - ne.right - Ee, L.x > ne.right - dn && (We += L.x - ne.right + dn)));
      var Jn = xn === !0 ? 0 : xn;
      typeof Jn == "number" && (cn < ne.top && (Ve -= cn - ne.top - Qe, L.y + le < ne.top + Jn && (Ve += L.y - ne.top + le - Jn)), qt > ne.bottom && (Ve -= qt - ne.bottom - Qe, L.y > ne.bottom - Jn && (Ve += L.y - ne.bottom + Jn)));
      var Qn = V.x + We, er = Qn + q, ka = V.y + Ve, ws = ka + Ce, Io = L.x, Lo = Io + H, Vo = L.y, Ss = Vo + le, xs = Math.max(Qn, Io), zo = Math.min(er, Lo), Cs = (xs + zo) / 2, Es = Cs - Qn, Ho = Math.max(ka, Vo), _s = Math.min(ws, Ss), Os = (Ho + _s) / 2, Rs = Os - ka;
      i == null || i(t, Rt);
      var En = vt.right - V.x - (We + V.width), Aa = vt.bottom - V.y - (Ve + V.height);
      Ke === 1 && (We = Math.floor(We), En = Math.floor(En)), Je === 1 && (Ve = Math.floor(Ve), Aa = Math.floor(Aa));
      var Ts = {
        ready: !0,
        offsetX: We / Ke,
        offsetY: Ve / Je,
        offsetR: En / Ke,
        offsetB: Aa / Je,
        arrowX: Es / Ke,
        arrowY: Rs / Je,
        scaleX: Ke,
        scaleY: Je,
        align: Rt
      };
      u(Ts);
    }
  }), h = function() {
    d.current += 1;
    var w = d.current;
    Promise.resolve().then(function() {
      d.current === w && p();
    });
  }, g = function() {
    u(function(w) {
      return F(F({}, w), {}, {
        ready: !1
      });
    });
  };
  return at(g, [r]), at(function() {
    e || g();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, h];
}
function bO(e, t, n, r, a) {
  at(function() {
    if (e && t && n) {
      let d = function() {
        r(), a();
      };
      var o = t, i = n, s = hc(o), l = hc(i), c = Po(i), u = new Set([c].concat(fe(s), fe(l)));
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
function wO(e, t, n, r, a, o, i, s) {
  var l = m.useRef(e);
  l.current = e;
  var c = m.useRef(!1);
  m.useEffect(function() {
    if (t && r && (!a || o)) {
      var d = function() {
        c.current = !1;
      }, f = function(S) {
        var C;
        l.current && !i(((C = S.composedPath) === null || C === void 0 || (C = C.call(S)) === null || C === void 0 ? void 0 : C[0]) || S.target) && !c.current && s(!1);
      }, b = Po(r);
      b.addEventListener("pointerdown", d, !0), b.addEventListener("mousedown", f, !0), b.addEventListener("contextmenu", f, !0);
      var y = Li(n);
      if (y && (y.addEventListener("mousedown", f, !0), y.addEventListener("contextmenu", f, !0)), process.env.NODE_ENV !== "production") {
        var p, h, g = n == null || (p = n.getRootNode) === null || p === void 0 ? void 0 : p.call(n), v = (h = r.getRootNode) === null || h === void 0 ? void 0 : h.call(r);
        ua(g === v, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        b.removeEventListener("pointerdown", d, !0), b.removeEventListener("mousedown", f, !0), b.removeEventListener("contextmenu", f, !0), y && (y.removeEventListener("mousedown", f, !0), y.removeEventListener("contextmenu", f, !0));
      };
    }
  }, [t, n, r, a, o]);
  function u() {
    c.current = !0;
  }
  return u;
}
var SO = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function xO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Eu, t = /* @__PURE__ */ m.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, s = n.action, l = s === void 0 ? "hover" : s, c = n.showAction, u = n.hideAction, d = n.popupVisible, f = n.defaultPopupVisible, b = n.onPopupVisibleChange, y = n.afterPopupVisibleChange, p = n.mouseEnterDelay, h = n.mouseLeaveDelay, g = h === void 0 ? 0.1 : h, v = n.focusDelay, w = n.blurDelay, S = n.mask, C = n.maskClosable, x = C === void 0 ? !0 : C, E = n.getPopupContainer, O = n.forceRender, _ = n.autoDestroy, R = n.destroyPopupOnHide, T = n.popup, D = n.popupClassName, A = n.popupStyle, P = n.popupPlacement, I = n.builtinPlacements, N = I === void 0 ? {} : I, z = n.popupAlign, L = n.zIndex, U = n.stretch, X = n.getPopupClassNameFromAlign, $ = n.fresh, V = n.alignPoint, B = n.onPopupClick, Y = n.onPopupAlign, se = n.arrow, J = n.popupMotion, Q = n.maskMotion, te = n.popupTransitionName, ce = n.popupAnimation, ve = n.maskTransitionName, be = n.maskAnimation, ie = n.className, Ce = n.getTriggerDOMNode, q = kt(n, SO), le = _ || R || !1, H = m.useState(!1), ae = Z(H, 2), me = ae[0], pe = ae[1];
    at(function() {
      pe(dO());
    }, []);
    var Te = m.useRef({}), ge = m.useContext(lf), _e = m.useMemo(function() {
      return {
        registerSubPopup: function(we, tt) {
          Te.current[we] = tt, ge == null || ge.registerSubPopup(we, tt);
        }
      };
    }, [ge]), xe = Zg(), ne = m.useState(null), Pe = Z(ne, 2), Ie = Pe[0], vt = Pe[1], Ke = m.useRef(null), Je = Ft(function(oe) {
      Ke.current = oe, mo(oe) && Ie !== oe && vt(oe), ge == null || ge.registerSubPopup(xe, oe);
    }), St = m.useState(null), Be = Z(St, 2), Le = Be[0], $e = Be[1], Ee = m.useRef(null), Qe = Ft(function(oe) {
      mo(oe) && Le !== oe && ($e(oe), Ee.current = oe);
    }), ue = m.Children.only(i), ye = (ue == null ? void 0 : ue.props) || {}, ct = {}, $n = Ft(function(oe) {
      var we, tt, pt = Le;
      return (pt == null ? void 0 : pt.contains(oe)) || ((we = Li(pt)) === null || we === void 0 ? void 0 : we.host) === oe || oe === pt || (Ie == null ? void 0 : Ie.contains(oe)) || ((tt = Li(Ie)) === null || tt === void 0 ? void 0 : tt.host) === oe || oe === Ie || Object.values(Te.current).some(function(st) {
        return (st == null ? void 0 : st.contains(oe)) || oe === st;
      });
    }), fr = uf(o, J, ce, te), kr = uf(o, Q, be, ve), Da = m.useState(f || !1), Ar = Z(Da, 2), ln = Ar[0], Ot = Ar[1], ut = d ?? ln, Nn = Ft(function(oe) {
      d === void 0 && Ot(oe);
    });
    at(function() {
      Ot(d || !1);
    }, [d]);
    var Rt = m.useRef(ut);
    Rt.current = ut;
    var We = m.useRef([]);
    We.current = [];
    var Ve = Ft(function(oe) {
      var we;
      Nn(oe), ((we = We.current[We.current.length - 1]) !== null && we !== void 0 ? we : ut) !== oe && (We.current.push(oe), b == null || b(oe));
    }), xt = m.useRef(), Sn = function() {
      clearTimeout(xt.current);
    }, It = function(we) {
      var tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Sn(), tt === 0 ? Ve(we) : xt.current = setTimeout(function() {
        Ve(we);
      }, tt * 1e3);
    };
    m.useEffect(function() {
      return Sn;
    }, []);
    var it = m.useState(!1), Zn = Z(it, 2), kn = Zn[0], Ue = Zn[1];
    at(function(oe) {
      (!oe || ut) && Ue(!0);
    }, [ut]);
    var dt = m.useState(null), At = Z(dt, 2), Tt = At[0], xn = At[1], Fr = m.useState(null), cn = Z(Fr, 2), qt = cn[0], Cn = cn[1], un = function(we) {
      Cn([we.clientX, we.clientY]);
    }, jr = yO(ut, Ie, V && qt !== null ? qt : Le, P, N, z, Y), et = Z(jr, 11), hr = et[0], ko = et[1], ys = et[2], mr = et[3], Ao = et[4], bs = et[5], Fo = et[6], jo = et[7], gr = et[8], vr = et[9], $a = et[10], pr = mO(me, l, c, u), Na = Z(pr, 2), Ir = Na[0], dn = Na[1], Jn = Ir.has("click"), Qn = dn.has("click") || dn.has("contextMenu"), er = Ft(function() {
      kn || $a();
    }), ka = function() {
      Rt.current && V && Qn && It(!1);
    };
    bO(ut, Le, Ie, er, ka), at(function() {
      er();
    }, [qt, P]), at(function() {
      ut && !(N != null && N[P]) && er();
    }, [JSON.stringify(z)]);
    var ws = m.useMemo(function() {
      var oe = pO(N, o, vr, V);
      return de(oe, X == null ? void 0 : X(vr));
    }, [vr, X, N, o, V]);
    m.useImperativeHandle(r, function() {
      return {
        nativeElement: Ee.current,
        popupElement: Ke.current,
        forceAlign: er
      };
    });
    var Io = m.useState(0), Lo = Z(Io, 2), Vo = Lo[0], Ss = Lo[1], xs = m.useState(0), zo = Z(xs, 2), Cs = zo[0], Es = zo[1], Ho = function() {
      if (U && Le) {
        var we = Le.getBoundingClientRect();
        Ss(we.width), Es(we.height);
      }
    }, _s = function() {
      Ho(), er();
    }, Os = function(we) {
      Ue(!1), $a(), y == null || y(we);
    }, Rs = function() {
      return new Promise(function(we) {
        Ho(), xn(function() {
          return we;
        });
      });
    };
    at(function() {
      Tt && ($a(), Tt(), xn(null));
    }, [Tt]);
    function En(oe, we, tt, pt) {
      ct[oe] = function(st) {
        var Wo;
        pt == null || pt(st), It(we, tt);
        for (var $s = arguments.length, $u = new Array($s > 1 ? $s - 1 : 0), Uo = 1; Uo < $s; Uo++)
          $u[Uo - 1] = arguments[Uo];
        (Wo = ye[oe]) === null || Wo === void 0 || Wo.call.apply(Wo, [ye, st].concat($u));
      };
    }
    (Jn || Qn) && (ct.onClick = function(oe) {
      var we;
      Rt.current && Qn ? It(!1) : !Rt.current && Jn && (un(oe), It(!0));
      for (var tt = arguments.length, pt = new Array(tt > 1 ? tt - 1 : 0), st = 1; st < tt; st++)
        pt[st - 1] = arguments[st];
      (we = ye.onClick) === null || we === void 0 || we.call.apply(we, [ye, oe].concat(pt));
    });
    var Aa = wO(ut, Qn, Le, Ie, S, x, $n, It), Ts = Ir.has("hover"), Gt = dn.has("hover"), Lr, Fa;
    Ts && (En("onMouseEnter", !0, p, function(oe) {
      un(oe);
    }), En("onPointerEnter", !0, p, function(oe) {
      un(oe);
    }), Lr = function(we) {
      (ut || kn) && Ie !== null && Ie !== void 0 && Ie.contains(we.target) && It(!0, p);
    }, V && (ct.onMouseMove = function(oe) {
      var we;
      (we = ye.onMouseMove) === null || we === void 0 || we.call(ye, oe);
    })), Gt && (En("onMouseLeave", !1, g), En("onPointerLeave", !1, g), Fa = function() {
      It(!1, g);
    }), Ir.has("focus") && En("onFocus", !0, v), dn.has("focus") && En("onBlur", !1, w), Ir.has("contextMenu") && (ct.onContextMenu = function(oe) {
      var we;
      Rt.current && dn.has("contextMenu") ? It(!1) : (un(oe), It(!0)), oe.preventDefault();
      for (var tt = arguments.length, pt = new Array(tt > 1 ? tt - 1 : 0), st = 1; st < tt; st++)
        pt[st - 1] = arguments[st];
      (we = ye.onContextMenu) === null || we === void 0 || we.call.apply(we, [ye, oe].concat(pt));
    }), ie && (ct.className = de(ye.className, ie));
    var An = m.useRef(!1);
    An.current || (An.current = O || ut || kn);
    var tr = F(F({}, ye), ct), ja = {}, Bo = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Bo.forEach(function(oe) {
      q[oe] && (ja[oe] = function() {
        for (var we, tt = arguments.length, pt = new Array(tt), st = 0; st < tt; st++)
          pt[st] = arguments[st];
        (we = tr[oe]) === null || we === void 0 || we.call.apply(we, [tr].concat(pt)), q[oe].apply(q, pt);
      });
    });
    var Ps = /* @__PURE__ */ m.cloneElement(ue, F(F({}, tr), ja)), Ms = {
      x: bs,
      y: Fo
    }, Ds = se ? F({}, se !== !0 ? se : {}) : null;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ma, {
      disabled: !ut,
      ref: Qe,
      onResize: _s
    }, /* @__PURE__ */ m.createElement(ev, {
      getTriggerDOMNode: Ce
    }, Ps)), An.current && /* @__PURE__ */ m.createElement(lf.Provider, {
      value: _e
    }, /* @__PURE__ */ m.createElement(Qg, {
      portal: e,
      ref: Je,
      prefixCls: o,
      popup: T,
      className: de(D, ws),
      style: A,
      target: Le,
      onMouseEnter: Lr,
      onMouseLeave: Fa,
      onPointerEnter: Lr,
      zIndex: L,
      open: ut,
      keepDom: kn,
      fresh: $,
      onClick: B,
      onPointerDownCapture: Aa,
      mask: S,
      motion: fr,
      maskMotion: kr,
      onVisibleChanged: Os,
      onPrepare: Rs,
      forceRender: O,
      autoDestroy: le,
      getPopupContainer: E,
      align: vr,
      arrow: Ds,
      arrowPos: Ms,
      ready: hr,
      offsetX: ko,
      offsetY: ys,
      offsetR: mr,
      offsetB: Ao,
      onAlign: er,
      stretch: U,
      targetWidth: Vo / jo,
      targetHeight: Cs / gr
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const CO = xO(Eu);
var Yr = {
  shiftX: 64,
  adjustY: 1
}, qr = {
  adjustX: 1,
  shiftY: !0
}, Xt = [0, 0], EO = {
  left: {
    points: ["cr", "cl"],
    overflow: qr,
    offset: [-4, 0],
    targetOffset: Xt
  },
  right: {
    points: ["cl", "cr"],
    overflow: qr,
    offset: [4, 0],
    targetOffset: Xt
  },
  top: {
    points: ["bc", "tc"],
    overflow: Yr,
    offset: [0, -4],
    targetOffset: Xt
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Yr,
    offset: [0, 4],
    targetOffset: Xt
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Yr,
    offset: [0, -4],
    targetOffset: Xt
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: qr,
    offset: [-4, 0],
    targetOffset: Xt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Yr,
    offset: [0, -4],
    targetOffset: Xt
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: qr,
    offset: [4, 0],
    targetOffset: Xt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Yr,
    offset: [0, 4],
    targetOffset: Xt
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: qr,
    offset: [4, 0],
    targetOffset: Xt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Yr,
    offset: [0, 4],
    targetOffset: Xt
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: qr,
    offset: [-4, 0],
    targetOffset: Xt
  }
}, _O = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], OO = function(t, n) {
  var r = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, l = t.mouseLeaveDelay, c = l === void 0 ? 0.1 : l, u = t.overlayStyle, d = t.prefixCls, f = d === void 0 ? "rc-tooltip" : d, b = t.children, y = t.onVisibleChange, p = t.afterVisibleChange, h = t.transitionName, g = t.animation, v = t.motion, w = t.placement, S = w === void 0 ? "right" : w, C = t.align, x = C === void 0 ? {} : C, E = t.destroyTooltipOnHide, O = E === void 0 ? !1 : E, _ = t.defaultVisible, R = t.getTooltipContainer, T = t.overlayInnerStyle;
  t.arrowContent;
  var D = t.overlay, A = t.id, P = t.showArrow, I = P === void 0 ? !0 : P, N = t.classNames, z = t.styles, L = kt(t, _O), U = Zg(A), X = Ae(null);
  Oc(n, function() {
    return X.current;
  });
  var $ = F({}, L);
  "visible" in t && ($.popupVisible = t.visible);
  var V = function() {
    return /* @__PURE__ */ m.createElement(Kg, {
      key: "content",
      prefixCls: f,
      id: U,
      bodyClassName: N == null ? void 0 : N.body,
      overlayInnerStyle: F(F({}, T), z == null ? void 0 : z.body)
    }, D);
  }, B = function() {
    var se = m.Children.only(b), J = (se == null ? void 0 : se.props) || {}, Q = F(F({}, J), {}, {
      "aria-describedby": D ? U : null
    });
    return /* @__PURE__ */ m.cloneElement(b, Q);
  };
  return /* @__PURE__ */ m.createElement(CO, qe({
    popupClassName: de(r, N == null ? void 0 : N.root),
    prefixCls: f,
    popup: V,
    action: o,
    builtinPlacements: EO,
    popupPlacement: S,
    ref: X,
    popupAlign: x,
    getPopupContainer: R,
    onPopupVisibleChange: y,
    afterPopupVisibleChange: p,
    popupTransitionName: h,
    popupAnimation: g,
    popupMotion: v,
    defaultPopupVisible: _,
    autoDestroy: O,
    mouseLeaveDelay: c,
    popupStyle: F(F({}, u), z == null ? void 0 : z.root),
    mouseEnterDelay: s,
    arrow: I
  }, $), B());
};
const RO = /* @__PURE__ */ wa(OO);
function tv(e, t) {
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
      Dt(i, d, function(b) {
        return this._invoke(d, f, b);
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
function _u() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", a = n.toStringTag || "@@toStringTag";
  function o(b, y, p, h) {
    var g = y && y.prototype instanceof s ? y : s, v = Object.create(g.prototype);
    return Dt(v, "_invoke", (function(w, S, C) {
      var x, E, O, _ = 0, R = C || [], T = !1, D = {
        p: 0,
        n: 0,
        v: e,
        a: A,
        f: A.bind(e, 4),
        d: function(I, N) {
          return x = I, E = 0, O = e, D.n = N, i;
        }
      };
      function A(P, I) {
        for (E = P, O = I, t = 0; !T && _ && !N && t < R.length; t++) {
          var N, z = R[t], L = D.p, U = z[2];
          P > 3 ? (N = U === I) && (O = z[(E = z[4]) ? 5 : (E = 3, 3)], z[4] = z[5] = e) : z[0] <= L && ((N = P < 2 && L < z[1]) ? (E = 0, D.v = I, D.n = z[1]) : L < U && (N = P < 3 || z[0] > I || I > U) && (z[4] = P, z[5] = I, D.n = U, E = 0));
        }
        if (N || P > 1) return i;
        throw T = !0, I;
      }
      return function(P, I, N) {
        if (_ > 1) throw TypeError("Generator is already running");
        for (T && I === 1 && A(I, N), E = I, O = N; (t = E < 2 ? e : O) || !T; ) {
          x || (E ? E < 3 ? (E > 1 && (D.n = -1), A(E, O)) : D.n = O : D.v = O);
          try {
            if (_ = 2, x) {
              if (E || (P = "next"), t = x[P]) {
                if (!(t = t.call(x, O))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                O = t.value, E < 2 && (E = 0);
              } else E === 1 && (t = x.return) && t.call(x), E < 2 && (O = TypeError("The iterator does not provide a '" + P + "' method"), E = 1);
              x = e;
            } else if ((t = (T = D.n < 0) ? O : w.call(S, D)) !== i) break;
          } catch (z) {
            x = e, E = 1, O = z;
          } finally {
            _ = 1;
          }
        }
        return {
          value: t,
          done: T
        };
      };
    })(b, p, h), !0), v;
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
  function f(b) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(b, c) : (b.__proto__ = c, Dt(b, a, "GeneratorFunction")), b.prototype = Object.create(d), b;
  }
  return l.prototype = c, Dt(d, "constructor", c), Dt(c, "constructor", l), l.displayName = "GeneratorFunction", Dt(c, a, "GeneratorFunction"), Dt(d), Dt(d, a, "Generator"), Dt(d, r, function() {
    return this;
  }), Dt(d, "toString", function() {
    return "[object Generator]";
  }), (_u = function() {
    return {
      w: o,
      m: f
    };
  })();
}
function Wi(e, t) {
  function n(a, o, i, s) {
    try {
      var l = e[a](o), c = l.value;
      return c instanceof tv ? t.resolve(c.v).then(function(u) {
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
  this.next || (Dt(Wi.prototype), Dt(Wi.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
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
function nv(e, t, n, r, a) {
  return new Wi(_u().w(e, t, n, r), a || Promise);
}
function TO(e, t, n, r, a) {
  var o = nv(e, t, n, r, a);
  return o.next().then(function(i) {
    return i.done ? i.value : o.next();
  });
}
function PO(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function a() {
    for (; n.length; ) if ((r = n.pop()) in t) return a.value = r, a.done = !1, a;
    return a.done = !0, a;
  };
}
function gf(e) {
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
  throw new TypeError(Se(e) + " is not iterable");
}
function tn() {
  var e = _u(), t = e.m(tn), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
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
        delegateYield: function(d, f, b) {
          return s.resultName = f, l(c.d, gf(d), b);
        },
        finish: function(d) {
          return l(c.f, d);
        }
      }, l = function(d, f, b) {
        c.p = s.prev, c.n = s.next;
        try {
          return d(f, b);
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
  return (tn = function() {
    return {
      wrap: function(l, c, u, d) {
        return e.w(o(l), c, u, d && d.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(l, c) {
        return new tv(l, c);
      },
      AsyncIterator: Wi,
      async: function(l, c, u, d, f) {
        return (r(c) ? nv : TO)(o(l), c, u, d, f);
      },
      keys: PO,
      values: gf
    };
  })();
}
function vf(e, t, n, r, a, o, i) {
  try {
    var s = e[o](i), l = s.value;
  } catch (c) {
    return void n(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(r, a);
}
function Mo(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(l) {
        vf(o, r, a, i, s, "next", l);
      }
      function s(l) {
        vf(o, r, a, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var xr = "RC_FORM_INTERNAL_HOOKS", Ye = function() {
  rt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, ya = /* @__PURE__ */ m.createContext({
  getFieldValue: Ye,
  getFieldsValue: Ye,
  getFieldError: Ye,
  getFieldWarning: Ye,
  getFieldsError: Ye,
  isFieldsTouched: Ye,
  isFieldTouched: Ye,
  isFieldValidating: Ye,
  isFieldsValidating: Ye,
  resetFields: Ye,
  setFields: Ye,
  setFieldValue: Ye,
  setFieldsValue: Ye,
  validateFields: Ye,
  submit: Ye,
  getInternalHooks: function() {
    return Ye(), {
      dispatch: Ye,
      initEntityValue: Ye,
      registerField: Ye,
      useSubscribe: Ye,
      setInitialValues: Ye,
      destroyForm: Ye,
      setCallbacks: Ye,
      registerWatch: Ye,
      getFields: Ye,
      setValidateMessages: Ye,
      setPreserve: Ye,
      getInitialValue: Ye
    };
  }
}), Ui = /* @__PURE__ */ m.createContext(null);
function mc(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function MO(e) {
  return e && !!e._init;
}
function gc() {
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
var vc = gc();
function DO(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function $O(e, t, n) {
  if (uu()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var a = new (e.bind.apply(e, r))();
  return n && so(a, n.prototype), a;
}
function pc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pc = function(r) {
    if (r === null || !DO(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, a);
    }
    function a() {
      return $O(r, arguments, lo(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), so(a, r);
  }, pc(e);
}
var NO = /%[sdj%]/g, rv = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (rv = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function yc(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Wt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(NO, function(s) {
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
function kO(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern" || e === "tel";
}
function wt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || kO(t) && typeof e == "string" && !e);
}
function AO(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(s) {
    r.push.apply(r, fe(s || [])), a++, a === o && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function pf(e, t, n) {
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
function FO(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, fe(e[n] || []));
  }), t;
}
var yf = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r, a) {
    var o;
    return Et(this, n), o = t.call(this, "Async Validation Error"), k(Re(o), "errors", void 0), k(Re(o), "fields", void 0), o.errors = r, o.fields = a, o;
  }
  return _t(n);
})(/* @__PURE__ */ pc(Error));
function jO(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(f, b) {
      var y = function(g) {
        return r(g), g.length ? b(new yf(g, yc(g))) : f(a);
      }, p = FO(e);
      pf(p, n, y);
    });
    return o.catch(function(f) {
      return f;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, u = [], d = new Promise(function(f, b) {
    var y = function(h) {
      if (u.push.apply(u, h), c++, c === l)
        return r(u), u.length ? b(new yf(u, yc(u))) : f(a);
    };
    s.length || (r(u), f(a)), s.forEach(function(p) {
      var h = e[p];
      i.indexOf(p) !== -1 ? pf(h, n, y) : AO(h, n, y);
    });
  });
  return d.catch(function(f) {
    return f;
  }), d;
}
function IO(e) {
  return !!(e && e.message !== void 0);
}
function LO(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function bf(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = LO(t, e.fullFields) : r = t[n.field || e.fullField], IO(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function wf(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        Se(r) === "object" && Se(e[n]) === "object" ? e[n] = F(F({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var Gr = "enum", VO = function(t, n, r, a, o) {
  t[Gr] = Array.isArray(t[Gr]) ? t[Gr] : [], t[Gr].indexOf(n) === -1 && a.push(Wt(o.messages[Gr], t.fullField, t[Gr].join(", ")));
}, zO = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(Wt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(Wt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, HO = function(t, n, r, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, d = null, f = typeof n == "number", b = typeof n == "string", y = Array.isArray(n);
  if (f ? d = "number" : b ? d = "string" : y && (d = "array"), !d)
    return !1;
  y && (u = n.length), b && (u = n.replace(c, "_").length), i ? u !== t.len && a.push(Wt(o.messages[d].len, t.fullField, t.len)) : s && !l && u < t.min ? a.push(Wt(o.messages[d].min, t.fullField, t.min)) : l && !s && u > t.max ? a.push(Wt(o.messages[d].max, t.fullField, t.max)) : s && l && (u < t.min || u > t.max) && a.push(Wt(o.messages[d].range, t.fullField, t.min, t.max));
}, av = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || wt(n, i || t.type)) && a.push(Wt(o.messages.required, t.fullField));
}, oi;
const BO = (function() {
  if (oi)
    return oi;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
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
  ], o = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(a.join("|"), ")").concat(o), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), l = new RegExp("^".concat(n, "$")), c = new RegExp("^".concat(i, "$")), u = function(x) {
    return x && x.exact ? s : new RegExp("(?:".concat(t(x)).concat(n).concat(t(x), ")|(?:").concat(t(x)).concat(i).concat(t(x), ")"), "g");
  };
  u.v4 = function(C) {
    return C && C.exact ? l : new RegExp("".concat(t(C)).concat(n).concat(t(C)), "g");
  }, u.v6 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(t(C)).concat(i).concat(t(C)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", b = u.v4().source, y = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", w = '(?:[/?#][^\\s"]*)?', S = "(?:".concat(d, "|www\\.)").concat(f, "(?:localhost|").concat(b, "|").concat(y, "|").concat(p).concat(h).concat(g, ")").concat(v).concat(w);
  return oi = new RegExp("(?:^".concat(S, "$)"), "i"), oi;
});
var nl = {
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
}, Ya = {
  integer: function(t) {
    return Ya.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ya.number(t) && !Ya.integer(t);
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
    return Se(t) === "object" && !Ya.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(nl.email);
  },
  tel: function(t) {
    return typeof t == "string" && t.length <= 32 && !!t.match(nl.tel);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(BO());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(nl.hex);
  }
}, WO = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    av(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Ya[s](n) || a.push(Wt(o.messages.types[s], t.fullField, t.type)) : s && Se(n) !== t.type && a.push(Wt(o.messages.types[s], t.fullField, t.type));
}, UO = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(Wt(o.messages.whitespace, t.fullField));
};
const De = {
  required: av,
  whitespace: UO,
  type: WO,
  range: HO,
  enum: VO,
  pattern: zO
};
var YO = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o);
  }
  r(i);
}, qO = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    De.required(t, n, a, i, o, "array"), n != null && (De.type(t, n, a, i, o), De.range(t, n, a, i, o));
  }
  r(i);
}, GO = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), n !== void 0 && De.type(t, n, a, i, o);
  }
  r(i);
}, KO = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n, "date") && !t.required)
      return r();
    if (De.required(t, n, a, i, o), !wt(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), De.type(t, l, a, i, o), l && De.range(t, l.getTime(), a, i, o);
    }
  }
  r(i);
}, XO = "enum", ZO = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), n !== void 0 && De[XO](t, n, a, i, o);
  }
  r(i);
}, JO = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), n !== void 0 && (De.type(t, n, a, i, o), De.range(t, n, a, i, o));
  }
  r(i);
}, QO = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), n !== void 0 && (De.type(t, n, a, i, o), De.range(t, n, a, i, o));
  }
  r(i);
}, eR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), n !== void 0 && De.type(t, n, a, i, o);
  }
  r(i);
}, tR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), n !== void 0 && (De.type(t, n, a, i, o), De.range(t, n, a, i, o));
  }
  r(i);
}, nR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), n !== void 0 && De.type(t, n, a, i, o);
  }
  r(i);
}, rR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n, "string") && !t.required)
      return r();
    De.required(t, n, a, i, o), wt(n, "string") || De.pattern(t, n, a, i, o);
  }
  r(i);
}, aR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, a, i, o), wt(n) || De.type(t, n, a, i, o);
  }
  r(i);
}, oR = function(t, n, r, a, o) {
  var i = [], s = Array.isArray(n) ? "array" : Se(n);
  De.required(t, n, a, i, o, s), r(i);
}, iR = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (wt(n, "string") && !t.required)
      return r();
    De.required(t, n, a, i, o, "string"), wt(n, "string") || (De.type(t, n, a, i, o), De.range(t, n, a, i, o), De.pattern(t, n, a, i, o), t.whitespace === !0 && De.whitespace(t, n, a, i, o));
  }
  r(i);
}, ii = function(t, n, r, a, o) {
  var i = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (wt(n, i) && !t.required)
      return r();
    De.required(t, n, a, s, o, i), wt(n, i) || De.type(t, n, a, s, o);
  }
  r(s);
};
const Za = {
  string: iR,
  method: eR,
  number: tR,
  boolean: GO,
  regexp: aR,
  integer: QO,
  float: JO,
  array: qO,
  object: nR,
  enum: ZO,
  pattern: rR,
  date: KO,
  url: ii,
  hex: ii,
  email: ii,
  tel: ii,
  required: oR,
  any: YO
};
var Do = /* @__PURE__ */ (function() {
  function e(t) {
    Et(this, e), k(this, "rules", null), k(this, "_messages", vc), this.define(t);
  }
  return _t(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (Se(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(a) {
        var o = n[a];
        r.rules[a] = Array.isArray(o) ? o : [o];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = wf(gc(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, s = a, l = o;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, i), Promise.resolve(i);
      function c(y) {
        var p = [], h = {};
        function g(w) {
          if (Array.isArray(w)) {
            var S;
            p = (S = p).concat.apply(S, fe(w));
          } else
            p.push(w);
        }
        for (var v = 0; v < y.length; v++)
          g(y[v]);
        p.length ? (h = yc(p), l(p, h)) : l(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === vc && (u = gc()), wf(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, f = s.keys || Object.keys(this.rules);
      f.forEach(function(y) {
        var p = r.rules[y], h = i[y];
        p.forEach(function(g) {
          var v = g;
          typeof v.transform == "function" && (i === n && (i = F({}, i)), h = i[y] = v.transform(h), h != null && (v.type = v.type || (Array.isArray(h) ? "array" : Se(h)))), typeof v == "function" ? v = {
            validator: v
          } : v = F({}, v), v.validator = r.getValidationMethod(v), v.validator && (v.field = y, v.fullField = v.fullField || y, v.type = r.getType(v), d[y] = d[y] || [], d[y].push({
            rule: v,
            value: h,
            source: i,
            field: y
          }));
        });
      });
      var b = {};
      return jO(d, s, function(y, p) {
        var h = y.rule, g = (h.type === "object" || h.type === "array") && (Se(h.fields) === "object" || Se(h.defaultField) === "object");
        g = g && (h.required || !h.required && y.value), h.field = y.field;
        function v(E, O) {
          return F(F({}, O), {}, {
            fullField: "".concat(h.fullField, ".").concat(E),
            fullFields: h.fullFields ? [].concat(fe(h.fullFields), [E]) : [E]
          });
        }
        function w() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], O = Array.isArray(E) ? E : [E];
          !s.suppressWarning && O.length && e.warning("async-validator:", O), O.length && h.message !== void 0 && h.message !== null && (O = [].concat(h.message));
          var _ = O.map(bf(h, i));
          if (s.first && _.length)
            return b[h.field] = 1, p(_);
          if (!g)
            p(_);
          else {
            if (h.required && !y.value)
              return h.message !== void 0 ? _ = [].concat(h.message).map(bf(h, i)) : s.error && (_ = [s.error(h, Wt(s.messages.required, h.field))]), p(_);
            var R = {};
            h.defaultField && Object.keys(y.value).map(function(A) {
              R[A] = h.defaultField;
            }), R = F(F({}, R), y.rule.fields);
            var T = {};
            Object.keys(R).forEach(function(A) {
              var P = R[A], I = Array.isArray(P) ? P : [P];
              T[A] = I.map(v.bind(null, A));
            });
            var D = new e(T);
            D.messages(s.messages), y.rule.options && (y.rule.options.messages = s.messages, y.rule.options.error = s.error), D.validate(y.value, y.rule.options || s, function(A) {
              var P = [];
              _ && _.length && P.push.apply(P, fe(_)), A && A.length && P.push.apply(P, fe(A)), p(P.length ? P : null);
            });
          }
        }
        var S;
        if (h.asyncValidator)
          S = h.asyncValidator(h, y.value, w, y.source, s);
        else if (h.validator) {
          try {
            S = h.validator(h, y.value, w, y.source, s);
          } catch (E) {
            var C, x;
            (C = (x = console).error) === null || C === void 0 || C.call(x, E), s.suppressValidatorError || setTimeout(function() {
              throw E;
            }, 0), w(E.message);
          }
          S === !0 ? w() : S === !1 ? w(typeof h.message == "function" ? h.message(h.fullField || h.field) : h.message || "".concat(h.fullField || h.field, " fails")) : S instanceof Array ? w(S) : S instanceof Error && w(S.message);
        }
        S && S.then && S.then(function() {
          return w();
        }, function(E) {
          return w(E);
        });
      }, function(y) {
        c(y);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Za.hasOwnProperty(n.type))
        throw new Error(Wt("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), a = r.indexOf("message");
      return a !== -1 && r.splice(a, 1), r.length === 1 && r[0] === "required" ? Za.required : Za[this.getType(n)] || void 0;
    }
  }]), e;
})();
k(Do, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Za[t] = n;
});
k(Do, "warning", rv);
k(Do, "messages", vc);
k(Do, "validators", Za);
var Ht = "'${name}' is not a valid ${type}", ov = {
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
}, Sf = Do;
function sR(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var xf = "CODE_LOGIC_ERROR";
function bc(e, t, n, r, a) {
  return wc.apply(this, arguments);
}
function wc() {
  return wc = Mo(/* @__PURE__ */ tn().mark(function e(t, n, r, a, o) {
    var i, s, l, c, u, d, f, b, y;
    return tn().wrap(function(h) {
      for (; ; ) switch (h.prev = h.next) {
        case 0:
          return i = F({}, r), delete i.ruleIndex, Sf.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (g) {
              return console.error(g), Promise.reject(xf);
            }
          }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), c = new Sf(k({}, t, [i])), u = Jr(ov, a.validateMessages), c.messages(u), d = [], h.prev = 10, h.next = 13, Promise.resolve(c.validate(k({}, t, n), F({}, a)));
        case 13:
          h.next = 18;
          break;
        case 15:
          h.prev = 15, h.t0 = h.catch(10), h.t0.errors && (d = h.t0.errors.map(function(g, v) {
            var w = g.message, S = w === xf ? u.default : w;
            return /* @__PURE__ */ m.isValidElement(S) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ m.cloneElement(S, {
                key: "error_".concat(v)
              })
            ) : S;
          }));
        case 18:
          if (!(!d.length && l && Array.isArray(n) && n.length > 0)) {
            h.next = 23;
            break;
          }
          return h.next = 21, Promise.all(n.map(function(g, v) {
            return bc("".concat(t, ".").concat(v), g, l, a, o);
          }));
        case 21:
          return f = h.sent, h.abrupt("return", f.reduce(function(g, v) {
            return [].concat(fe(g), fe(v));
          }, []));
        case 23:
          return b = F(F({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, o), y = d.map(function(g) {
            return typeof g == "string" ? sR(g, b) : g;
          }), h.abrupt("return", y);
        case 26:
        case "end":
          return h.stop();
      }
    }, e, null, [[10, 15]]);
  })), wc.apply(this, arguments);
}
function lR(e, t, n, r, a, o) {
  var i = e.join("."), s = n.map(function(u, d) {
    var f = u.validator, b = F(F({}, u), {}, {
      ruleIndex: d
    });
    return f && (b.validator = function(y, p, h) {
      var g = !1, v = function() {
        for (var C = arguments.length, x = new Array(C), E = 0; E < C; E++)
          x[E] = arguments[E];
        Promise.resolve().then(function() {
          rt(!g, "Your validator function has already return a promise. `callback` will be ignored."), g || h.apply(void 0, x);
        });
      }, w = f(y, p, v);
      g = w && typeof w.then == "function" && typeof w.catch == "function", rt(g, "`callback` is deprecated. Please return a promise instead."), g && w.then(function() {
        h();
      }).catch(function(S) {
        h(S || " ");
      });
    }), b;
  }).sort(function(u, d) {
    var f = u.warningOnly, b = u.ruleIndex, y = d.warningOnly, p = d.ruleIndex;
    return !!f == !!y ? b - p : f ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ (function() {
      var u = Mo(/* @__PURE__ */ tn().mark(function d(f, b) {
        var y, p, h;
        return tn().wrap(function(v) {
          for (; ; ) switch (v.prev = v.next) {
            case 0:
              y = 0;
            case 1:
              if (!(y < s.length)) {
                v.next = 12;
                break;
              }
              return p = s[y], v.next = 5, bc(i, t, p, r, o);
            case 5:
              if (h = v.sent, !h.length) {
                v.next = 9;
                break;
              }
              return b([{
                errors: h,
                rule: p
              }]), v.abrupt("return");
            case 9:
              y += 1, v.next = 1;
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
      return bc(i, t, u, r, o).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    l = (a ? uR(c) : cR(c)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return l.catch(function(u) {
    return u;
  }), l;
}
function cR(e) {
  return Sc.apply(this, arguments);
}
function Sc() {
  return Sc = Mo(/* @__PURE__ */ tn().mark(function e(t) {
    return tn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, fe(a));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Sc.apply(this, arguments);
}
function uR(e) {
  return xc.apply(this, arguments);
}
function xc() {
  return xc = Mo(/* @__PURE__ */ tn().mark(function e(t) {
    var n;
    return tn().wrap(function(a) {
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
  })), xc.apply(this, arguments);
}
function ft(e) {
  return mc(e);
}
function Cf(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = Tn(e, r);
    n = fn(n, r, a);
  }), n;
}
function sa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return iv(t, r, n);
  });
}
function iv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, a) {
    return e[a] === r;
  });
}
function dR(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Se(e) !== "object" || Se(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return fe(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function fR(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Se(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Ef(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], o = t - n;
  return o > 0 ? [].concat(fe(e.slice(0, n)), [a], fe(e.slice(n, t)), fe(e.slice(t + 1, r))) : o < 0 ? [].concat(fe(e.slice(0, t)), fe(e.slice(t + 1, n + 1)), [a], fe(e.slice(n + 1, r))) : e;
}
var hR = ["name"], Zt = [];
function rl(e, t, n, r, a, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== a;
}
var Ou = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r) {
    var a;
    if (Et(this, n), a = t.call(this, r), k(Re(a), "state", {
      resetCount: 0
    }), k(Re(a), "cancelRegisterFunc", null), k(Re(a), "mounted", !1), k(Re(a), "touched", !1), k(Re(a), "dirty", !1), k(Re(a), "validatePromise", void 0), k(Re(a), "prevValidating", void 0), k(Re(a), "errors", Zt), k(Re(a), "warnings", Zt), k(Re(a), "cancelRegister", function() {
      var l = a.props, c = l.preserve, u = l.isListField, d = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(u, c, ft(d)), a.cancelRegisterFunc = null;
    }), k(Re(a), "getNamePath", function() {
      var l = a.props, c = l.name, u = l.fieldContext, d = u.prefixName, f = d === void 0 ? [] : d;
      return c !== void 0 ? [].concat(fe(f), fe(c)) : [];
    }), k(Re(a), "getRules", function() {
      var l = a.props, c = l.rules, u = c === void 0 ? [] : c, d = l.fieldContext;
      return u.map(function(f) {
        return typeof f == "function" ? f(d) : f;
      });
    }), k(Re(a), "refresh", function() {
      a.mounted && a.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), k(Re(a), "metaCache", null), k(Re(a), "triggerMetaEvent", function(l) {
      var c = a.props.onMetaChange;
      if (c) {
        var u = F(F({}, a.getMeta()), {}, {
          destroy: l
        });
        ql(a.metaCache, u) || c(u), a.metaCache = u;
      } else
        a.metaCache = null;
    }), k(Re(a), "onStoreChange", function(l, c, u) {
      var d = a.props, f = d.shouldUpdate, b = d.dependencies, y = b === void 0 ? [] : b, p = d.onReset, h = u.store, g = a.getNamePath(), v = a.getValue(l), w = a.getValue(h), S = c && sa(c, g);
      switch (u.type === "valueUpdate" && u.source === "external" && !ql(v, w) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Zt, a.warnings = Zt, a.triggerMetaEvent()), u.type) {
        case "reset":
          if (!c || S) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Zt, a.warnings = Zt, a.triggerMetaEvent(), p == null || p(), a.refresh();
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
          if (f && rl(f, l, h, v, w, u)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = u.data;
          if (S) {
            "touched" in C && (a.touched = C.touched), "validating" in C && !("originRCField" in C) && (a.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (a.errors = C.errors || Zt), "warnings" in C && (a.warnings = C.warnings || Zt), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in C && sa(c, g, !0)) {
            a.reRender();
            return;
          }
          if (f && !g.length && rl(f, l, h, v, w, u)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var x = y.map(ft);
          if (x.some(function(E) {
            return sa(u.relatedFields, E);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (S || (!y.length || g.length || f) && rl(f, l, h, v, w, u)) {
            a.reRender();
            return;
          }
          break;
      }
      f === !0 && a.reRender();
    }), k(Re(a), "validateRules", function(l) {
      var c = a.getNamePath(), u = a.getValue(), d = l || {}, f = d.triggerName, b = d.validateOnly, y = b === void 0 ? !1 : b, p = Promise.resolve().then(/* @__PURE__ */ Mo(/* @__PURE__ */ tn().mark(function h() {
        var g, v, w, S, C, x, E;
        return tn().wrap(function(_) {
          for (; ; ) switch (_.prev = _.next) {
            case 0:
              if (a.mounted) {
                _.next = 2;
                break;
              }
              return _.abrupt("return", []);
            case 2:
              if (g = a.props, v = g.validateFirst, w = v === void 0 ? !1 : v, S = g.messageVariables, C = g.validateDebounce, x = a.getRules(), f && (x = x.filter(function(R) {
                return R;
              }).filter(function(R) {
                var T = R.validateTrigger;
                if (!T)
                  return !0;
                var D = mc(T);
                return D.includes(f);
              })), !(C && f)) {
                _.next = 10;
                break;
              }
              return _.next = 8, new Promise(function(R) {
                setTimeout(R, C);
              });
            case 8:
              if (a.validatePromise === p) {
                _.next = 10;
                break;
              }
              return _.abrupt("return", []);
            case 10:
              return E = lR(c, u, x, l, w, S), E.catch(function(R) {
                return R;
              }).then(function() {
                var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zt;
                if (a.validatePromise === p) {
                  var T;
                  a.validatePromise = null;
                  var D = [], A = [];
                  (T = R.forEach) === null || T === void 0 || T.call(R, function(P) {
                    var I = P.rule.warningOnly, N = P.errors, z = N === void 0 ? Zt : N;
                    I ? A.push.apply(A, fe(z)) : D.push.apply(D, fe(z));
                  }), a.errors = D, a.warnings = A, a.triggerMetaEvent(), a.reRender();
                }
              }), _.abrupt("return", E);
            case 13:
            case "end":
              return _.stop();
          }
        }, h);
      })));
      return y || (a.validatePromise = p, a.dirty = !0, a.errors = Zt, a.warnings = Zt, a.triggerMetaEvent(), a.reRender()), p;
    }), k(Re(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), k(Re(a), "isFieldTouched", function() {
      return a.touched;
    }), k(Re(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, c = l.getInternalHooks(xr), u = c.getInitialValue;
      return u(a.getNamePath()) !== void 0;
    }), k(Re(a), "getErrors", function() {
      return a.errors;
    }), k(Re(a), "getWarnings", function() {
      return a.warnings;
    }), k(Re(a), "isListField", function() {
      return a.props.isListField;
    }), k(Re(a), "isList", function() {
      return a.props.isList;
    }), k(Re(a), "isPreserve", function() {
      return a.props.preserve;
    }), k(Re(a), "getMeta", function() {
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
    }), k(Re(a), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = a.getMeta();
        return F(F({}, a.getOnlyChild(l(a.getControlled(), c, a.props.fieldContext))), {}, {
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
    }), k(Re(a), "getValue", function(l) {
      var c = a.props.fieldContext.getFieldsValue, u = a.getNamePath();
      return Tn(l || c(!0), u);
    }), k(Re(a), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = a.props, u = c.name, d = c.trigger, f = c.validateTrigger, b = c.getValueFromEvent, y = c.normalize, p = c.valuePropName, h = c.getValueProps, g = c.fieldContext, v = f !== void 0 ? f : g.validateTrigger, w = a.getNamePath(), S = g.getInternalHooks, C = g.getFieldsValue, x = S(xr), E = x.dispatch, O = a.getValue(), _ = h || function(P) {
        return k({}, p, P);
      }, R = l[d], T = u !== void 0 ? _(O) : {};
      process.env.NODE_ENV !== "production" && T && Object.keys(T).forEach(function(P) {
        rt(typeof T[P] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(P, ")"));
      });
      var D = F(F({}, l), T);
      D[d] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var P, I = arguments.length, N = new Array(I), z = 0; z < I; z++)
          N[z] = arguments[z];
        b ? P = b.apply(void 0, N) : P = fR.apply(void 0, [p].concat(N)), y && (P = y(P, O, C(!0))), P !== O && E({
          type: "updateValue",
          namePath: w,
          value: P
        }), R && R.apply(void 0, N);
      };
      var A = mc(v || []);
      return A.forEach(function(P) {
        var I = D[P];
        D[P] = function() {
          I && I.apply(void 0, arguments);
          var N = a.props.rules;
          N && N.length && E({
            type: "validateField",
            namePath: w,
            triggerName: P
          });
        };
      }), D;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(xr), s = i.initEntityValue;
      s(Re(a));
    }
    return a;
  }
  return _t(n, [{
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
k(Ou, "contextType", ya);
k(Ou, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function sv(e) {
  var t, n = e.name, r = kt(e, hR), a = m.useContext(ya), o = m.useContext(Ui), i = n !== void 0 ? ft(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!o, l = "keep";
  return s || (l = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && i.length <= 1 && rt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ m.createElement(Ou, qe({
    key: l,
    name: i,
    isListField: s
  }, r, {
    fieldContext: a
  }));
}
function mR(e) {
  var t = e.name, n = e.initialValue, r = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = m.useContext(ya), l = m.useContext(Ui), c = m.useRef({
    keys: [],
    id: 0
  }), u = c.current, d = m.useMemo(function() {
    var p = ft(s.prefixName) || [];
    return [].concat(fe(p), fe(ft(t)));
  }, [s.prefixName, t]), f = m.useMemo(function() {
    return F(F({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), b = m.useMemo(function() {
    return {
      getKey: function(h) {
        var g = d.length, v = h[g];
        return [u.keys[v], h.slice(g + 1)];
      }
    };
  }, [d]);
  if (typeof r != "function")
    return rt(!1, "Form.List only accepts function as children."), null;
  var y = function(h, g, v) {
    var w = v.source;
    return w === "internal" ? !1 : h !== g;
  };
  return /* @__PURE__ */ m.createElement(Ui.Provider, {
    value: b
  }, /* @__PURE__ */ m.createElement(ya.Provider, {
    value: f
  }, /* @__PURE__ */ m.createElement(sv, {
    name: [],
    shouldUpdate: y,
    rules: a,
    validateTrigger: o,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!l
  }, function(p, h) {
    var g = p.value, v = g === void 0 ? [] : g, w = p.onChange, S = s.getFieldValue, C = function() {
      var _ = S(d || []);
      return _ || [];
    }, x = {
      add: function(_, R) {
        var T = C();
        R >= 0 && R <= T.length ? (u.keys = [].concat(fe(u.keys.slice(0, R)), [u.id], fe(u.keys.slice(R))), w([].concat(fe(T.slice(0, R)), [_], fe(T.slice(R))))) : (process.env.NODE_ENV !== "production" && (R < 0 || R > T.length) && rt(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(fe(u.keys), [u.id]), w([].concat(fe(T), [_]))), u.id += 1;
      },
      remove: function(_) {
        var R = C(), T = new Set(Array.isArray(_) ? _ : [_]);
        T.size <= 0 || (u.keys = u.keys.filter(function(D, A) {
          return !T.has(A);
        }), w(R.filter(function(D, A) {
          return !T.has(A);
        })));
      },
      move: function(_, R) {
        if (_ !== R) {
          var T = C();
          _ < 0 || _ >= T.length || R < 0 || R >= T.length || (u.keys = Ef(u.keys, _, R), w(Ef(T, _, R)));
        }
      }
    }, E = v || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && rt(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), r(E.map(function(O, _) {
      var R = u.keys[_];
      return R === void 0 && (u.keys[_] = u.id, R = u.keys[_], u.id += 1), {
        name: _,
        key: R,
        isListField: !0
      };
    }), x, h);
  })));
}
function gR(e) {
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
var lv = "__@field_split__";
function al(e) {
  return e.map(function(t) {
    return "".concat(Se(t), ":").concat(t);
  }).join(lv);
}
var Kr = /* @__PURE__ */ (function() {
  function e() {
    Et(this, e), k(this, "kvs", /* @__PURE__ */ new Map());
  }
  return _t(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(al(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(al(n));
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
      this.kvs.delete(al(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return fe(this.kvs.entries()).map(function(r) {
        var a = Z(r, 2), o = a[0], i = a[1], s = o.split(lv);
        return n({
          key: s.map(function(l) {
            var c = l.match(/^([^:]*):(.*)$/), u = Z(c, 3), d = u[1], f = u[2];
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
})(), vR = ["name"], pR = /* @__PURE__ */ _t(function e(t) {
  var n = this;
  Et(this, e), k(this, "formHooked", !1), k(this, "forceRootUpdate", void 0), k(this, "subscribable", !0), k(this, "store", {}), k(this, "fieldEntities", []), k(this, "initialValues", {}), k(this, "callbacks", {}), k(this, "validateMessages", null), k(this, "preserve", null), k(this, "lastValidatePromise", null), k(this, "getForm", function() {
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
  }), k(this, "getInternalHooks", function(r) {
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
  }), k(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), k(this, "prevWithoutPreserves", null), k(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = Jr(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var l = s.key;
        i = fn(i, l, Tn(r, l));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), k(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var a = new Kr();
      n.getFieldEntities(!0).forEach(function(o) {
        n.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0);
      }), n.prevWithoutPreserves = a;
    }
  }), k(this, "getInitialValue", function(r) {
    var a = Tn(n.initialValues, r);
    return r.length ? Jr(a) : a;
  }), k(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), k(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), k(this, "setPreserve", function(r) {
    n.preserve = r;
  }), k(this, "watchList", []), k(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), k(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), k(this, "timeoutId", null), k(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || rt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), k(this, "updateStore", function(r) {
    n.store = r;
  }), k(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), k(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Kr();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), k(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(o) {
      var i = ft(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: ft(o)
      };
    });
  }), k(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, s;
    if (r === !0 || Array.isArray(r) ? (o = r, i = a) : r && Se(r) === "object" && (s = r.strict, i = r.filter), o === !0 && !i)
      return n.store;
    var l = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), c = [];
    return l.forEach(function(u) {
      var d, f, b = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var y, p;
        if ((y = (p = u).isList) !== null && y !== void 0 && y.call(p))
          return;
      } else if (!o && (d = (f = u).isListField) !== null && d !== void 0 && d.call(f))
        return;
      if (!i)
        c.push(b);
      else {
        var h = "getMeta" in u ? u.getMeta() : null;
        i(h) && c.push(b);
      }
    }), Cf(n.store, c.map(ft));
  }), k(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = ft(r);
    return Tn(n.store, a);
  }), k(this, "getFieldsError", function(r) {
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
  }), k(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = ft(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), k(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = ft(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), k(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], l, c = !1;
    a.length === 0 ? l = null : a.length === 1 ? Array.isArray(i) ? (l = i.map(ft), c = !1) : (l = null, c = i) : (l = i.map(ft), c = s);
    var u = n.getFieldEntities(!0), d = function(h) {
      return h.isFieldTouched();
    };
    if (!l)
      return c ? u.every(function(p) {
        return d(p) || p.isList();
      }) : u.some(d);
    var f = new Kr();
    l.forEach(function(p) {
      f.set(p, []);
    }), u.forEach(function(p) {
      var h = p.getNamePath();
      l.forEach(function(g) {
        g.every(function(v, w) {
          return h[w] === v;
        }) && f.update(g, function(v) {
          return [].concat(fe(v), [p]);
        });
      });
    });
    var b = function(h) {
      return h.some(d);
    }, y = f.map(function(p) {
      var h = p.value;
      return h;
    });
    return c ? y.every(b) : y.some(b);
  }), k(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), k(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = r.map(ft);
    return a.some(function(i) {
      var s = i.getNamePath();
      return sa(o, s) && i.isFieldValidating();
    });
  }), k(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), k(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Kr(), o = n.getFieldEntities(!0);
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
          var f = u.getNamePath(), b = n.getInitialValue(f);
          if (b !== void 0)
            rt(!1, "Form already set 'initialValues' with path '".concat(f.join("."), "'. Field can not overwrite it."));
          else {
            var y = a.get(f);
            if (y && y.size > 1)
              rt(!1, "Multiple Field with path '".concat(f.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (y) {
              var p = n.getFieldValue(f), h = u.isListField();
              !h && (!r.skipExist || p === void 0) && n.updateStore(fn(n.store, f, fe(y)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(l) {
      var c = a.get(l);
      if (c) {
        var u;
        (u = s).push.apply(u, fe(fe(c).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = o, i(s);
  }), k(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(Jr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
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
  }), k(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var s = i.name, l = kt(i, vR), c = ft(s);
      o.push(c), "value" in l && n.updateStore(fn(n.store, c, l.value)), n.notifyObservers(a, [c], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(o);
  }), k(this, "getFields", function() {
    var r = n.getFieldEntities(!0), a = r.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), l = F(F({}, s), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }), k(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = Tn(n.store, o);
      i === void 0 && n.updateStore(fn(n.store, o, a));
    }
  }), k(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }), k(this, "registerField", function(r) {
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
            !iv(d.getNamePath(), a)
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
  }), k(this, "dispatch", function(r) {
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
  }), k(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = F(F({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(r, a, i);
      });
    } else
      n.forceRootUpdate();
  }), k(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(fe(o))
    }), o;
  }), k(this, "updateValue", function(r, a) {
    var o = ft(r), i = n.store;
    n.updateStore(fn(n.store, o, a)), n.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var s = n.triggerDependenciesUpdate(i, o), l = n.callbacks.onValuesChange;
    if (l) {
      var c = Cf(n.store, [o]);
      l(c, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(fe(s)));
  }), k(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = Jr(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), k(this, "setFieldValue", function(r, a) {
    n.setFields([{
      name: r,
      value: a,
      errors: [],
      warnings: []
    }]);
  }), k(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Kr();
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
  }), k(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var s = new Kr();
        a.forEach(function(c) {
          var u = c.name, d = c.errors;
          s.set(u, d);
        }), i.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = i.filter(function(c) {
        var u = c.name;
        return sa(r, u);
      });
      l.length && o(l, i);
    }
  }), k(this, "validateFields", function(r, a) {
    n.warningUnhooked();
    var o, i;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (o = r, i = a) : i = r;
    var s = !!o, l = s ? o.map(ft) : [], c = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), f = i || {}, b = f.recursive, y = f.dirty;
    n.getFieldEntities(!0).forEach(function(v) {
      if (s || l.push(v.getNamePath()), !(!v.props.rules || !v.props.rules.length) && !(y && !v.isFieldDirty())) {
        var w = v.getNamePath();
        if (d.add(w.join(u)), !s || sa(l, w, b)) {
          var S = v.validateRules(F({
            validateMessages: F(F({}, ov), n.validateMessages)
          }, i));
          c.push(S.then(function() {
            return {
              name: w,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var x, E = [], O = [];
            return (x = C.forEach) === null || x === void 0 || x.call(C, function(_) {
              var R = _.rule.warningOnly, T = _.errors;
              R ? O.push.apply(O, fe(T)) : E.push.apply(E, fe(T));
            }), E.length ? Promise.reject({
              name: w,
              errors: E,
              warnings: O
            }) : {
              name: w,
              errors: E,
              warnings: O
            };
          }));
        }
      }
    });
    var p = gR(c);
    n.lastValidatePromise = p, p.catch(function(v) {
      return v;
    }).then(function(v) {
      var w = v.map(function(S) {
        var C = S.name;
        return C;
      });
      n.notifyObservers(n.store, w, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(w, v);
    });
    var h = p.then(function() {
      return n.lastValidatePromise === p ? Promise.resolve(n.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(v) {
      var w = v.filter(function(S) {
        return S && S.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(l),
        errorFields: w,
        outOfDate: n.lastValidatePromise !== p
      });
    });
    h.catch(function(v) {
      return v;
    });
    var g = l.filter(function(v) {
      return d.has(v.join(u));
    });
    return n.triggerOnFieldsChange(g), h;
  }), k(this, "submit", function() {
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
function cv(e) {
  var t = m.useRef(), n = m.useState({}), r = Z(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new pR(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var Cc = /* @__PURE__ */ m.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), yR = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = m.useContext(Cc), s = m.useRef({});
  return /* @__PURE__ */ m.createElement(Cc.Provider, {
    value: F(F({}, i), {}, {
      validateMessages: F(F({}, i.validateMessages), n),
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
        c && (s.current = F(F({}, s.current), {}, k({}, c, u))), i.registerForm(c, u);
      },
      unregisterForm: function(c) {
        var u = F({}, s.current);
        delete u[c], s.current = u, i.unregisterForm(c);
      }
    })
  }, o);
}, bR = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], wR = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, l = t.children, c = t.component, u = c === void 0 ? "form" : c, d = t.validateMessages, f = t.validateTrigger, b = f === void 0 ? "onChange" : f, y = t.onValuesChange, p = t.onFieldsChange, h = t.onFinish, g = t.onFinishFailed, v = t.clearOnDestroy, w = kt(t, bR), S = m.useRef(null), C = m.useContext(Cc), x = cv(i), E = Z(x, 1), O = E[0], _ = O.getInternalHooks(xr), R = _.useSubscribe, T = _.setInitialValues, D = _.setCallbacks, A = _.setValidateMessages, P = _.setPreserve, I = _.destroyForm;
  m.useImperativeHandle(n, function() {
    return F(F({}, O), {}, {
      nativeElement: S.current
    });
  }), m.useEffect(function() {
    return C.registerForm(r, O), function() {
      C.unregisterForm(r);
    };
  }, [C, O, r]), A(F(F({}, C.validateMessages), d)), D({
    onValuesChange: y,
    onFieldsChange: function(Y) {
      if (C.triggerFormChange(r, Y), p) {
        for (var se = arguments.length, J = new Array(se > 1 ? se - 1 : 0), Q = 1; Q < se; Q++)
          J[Q - 1] = arguments[Q];
        p.apply(void 0, [Y].concat(J));
      }
    },
    onFinish: function(Y) {
      C.triggerFormFinish(r, Y), h && h(Y);
    },
    onFinishFailed: g
  }), P(s);
  var N = m.useRef(null);
  T(a, !N.current), N.current || (N.current = !0), m.useEffect(
    function() {
      return function() {
        return I(v);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var z, L = typeof l == "function";
  if (L) {
    var U = O.getFieldsValue(!0);
    z = l(U, O);
  } else
    z = l;
  R(!L);
  var X = m.useRef();
  m.useEffect(function() {
    dR(X.current || [], o || []) || O.setFields(o || []), X.current = o;
  }, [o, O]);
  var $ = m.useMemo(function() {
    return F(F({}, O), {}, {
      validateTrigger: b
    });
  }, [O, b]), V = /* @__PURE__ */ m.createElement(Ui.Provider, {
    value: null
  }, /* @__PURE__ */ m.createElement(ya.Provider, {
    value: $
  }, z));
  return u === !1 ? V : /* @__PURE__ */ m.createElement(u, qe({}, w, {
    ref: S,
    onSubmit: function(Y) {
      Y.preventDefault(), Y.stopPropagation(), O.submit();
    },
    onReset: function(Y) {
      var se;
      Y.preventDefault(), O.resetFields(), (se = w.onReset) === null || se === void 0 || se.call(w, Y);
    }
  }), V);
};
function _f(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var SR = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = Ae(t);
  rt(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function xR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = t[1], o = a === void 0 ? {} : a, i = MO(o) ? {
    form: o
  } : o, s = i.form, l = Yn(), c = Z(l, 2), u = c[0], d = c[1], f = ba(function() {
    return _f(u);
  }, [u]), b = Ae(f);
  b.current = f;
  var y = Qt(ya), p = s || y, h = p && p._init;
  process.env.NODE_ENV !== "production" && rt(t.length === 2 ? s ? h : !0 : h, "useWatch requires a form instance since it can not auto detect from context.");
  var g = ft(r), v = Ae(g);
  return v.current = g, SR(g), bt(
    function() {
      if (h) {
        var w = p.getFieldsValue, S = p.getInternalHooks, C = S(xr), x = C.registerWatch, E = function(T, D) {
          var A = i.preserve ? D : T;
          return typeof r == "function" ? r(A) : Tn(A, v.current);
        }, O = x(function(R, T) {
          var D = E(R, T), A = _f(D);
          b.current !== A && (b.current = A, d(D));
        }), _ = E(w(), w(!0));
        return u !== _ && d(_), O;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h]
  ), u;
}
var CR = /* @__PURE__ */ m.forwardRef(wR), $o = CR;
$o.FormProvider = yR;
$o.Field = sv;
$o.List = mR;
$o.useForm = cv;
$o.useWatch = xR;
const vo = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (vo.displayName = "FormItemInputContext");
const ER = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = m.useContext(vo), a = m.useMemo(() => {
    const o = Object.assign({}, r);
    return n && delete o.isFormItemInput, t && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [t, n, r]);
  return /* @__PURE__ */ m.createElement(vo.Provider, {
    value: a
  }, e);
}, _R = /* @__PURE__ */ m.createContext(void 0), uv = (e) => {
  const t = W.useContext(ga);
  return W.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, dv = /* @__PURE__ */ m.createContext(null), fv = (e, t) => {
  const n = m.useContext(dv), r = m.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = n, s = a === "vertical" ? "-vertical-" : "-";
    return de(`${e}-compact${s}item`, {
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
}, OR = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ m.createElement(dv.Provider, {
    value: null
  }, t);
}, Ec = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let a = r;
  return n && (a = /* @__PURE__ */ W.createElement(ER, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ W.createElement(OR, null, a)), a;
}, Ru = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ru.displayName = "zIndexContext");
const Ln = 100, RR = 10, TR = Ln * RR, PR = TR + Ln, hv = {
  Modal: Ln,
  Drawer: Ln,
  Popover: Ln,
  Popconfirm: Ln,
  Tooltip: Ln,
  Tour: Ln,
  FloatButton: Ln
}, MR = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function DR(e) {
  return e in hv;
}
const $R = (e, t) => {
  const [, n] = Ta(), r = W.useContext(Ru), a = DR(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    hv[e] : i += MR[e], o = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = bn(e), s = n.zIndexPopupBase + PR, l = o[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || l <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
}, NR = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function kR(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, a = t / 2, o = 0, i = a, s = r * 1 / Math.sqrt(2), l = a - r * (1 - 1 / Math.sqrt(2)), c = a - n * (1 / Math.sqrt(2)), u = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), d = 2 * a - c, f = u, b = 2 * a - s, y = l, p = 2 * a - o, h = i, g = a * Math.sqrt(2) + r * (Math.sqrt(2) - 2), v = r * (Math.sqrt(2) - 1), w = `polygon(${v}px 100%, 50% ${v}px, ${2 * a - v}px 100%, ${v}px 100%)`, S = `path('M ${o} ${i} A ${r} ${r} 0 0 0 ${s} ${l} L ${c} ${u} A ${n} ${n} 0 0 1 ${d} ${f} L ${b} ${y} A ${r} ${r} 0 0 0 ${p} ${h} Z')`;
  return {
    arrowShadowWidth: g,
    arrowPath: S,
    arrowPolygon: w
  };
}
const AR = (e, t, n) => {
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
        value: `0 0 ${Ne(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, mv = 8;
function gv(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? mv : r
  };
}
function si(e, t) {
  return e ? t : {};
}
function FR(e, t, n) {
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
      }, AR(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, si(!!l.top, {
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
        "--arrow-offset-horizontal": `calc(100% - ${Ne(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), si(!!l.bottom, {
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
        "--arrow-offset-horizontal": `calc(100% - ${Ne(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), si(!!l.left, {
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
    })), si(!!l.right, {
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
function jR(e, t, n, r) {
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
const Of = {
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
}, IR = {
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
}, LR = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function VR(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: a,
    borderRadius: o
  } = e, i = t / 2, s = {}, l = gv({
    contentRadius: o,
    limitVerticalRadius: !0
  });
  return Object.keys(Of).forEach((c) => {
    const u = r && IR[c] || Of[c], d = Object.assign(Object.assign({}, u), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[c] = d, LR.has(c) && (d.autoArrow = !1), c) {
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
    d.overflow = jR(c, l, t, n), d.htmlRegion = "visibleFirst";
  }), s;
}
function zR(e) {
  return e && /* @__PURE__ */ W.isValidElement(e) && e.type === W.Fragment;
}
const HR = (e, t, n) => /* @__PURE__ */ W.isValidElement(e) ? /* @__PURE__ */ W.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function vv(e, t) {
  return HR(e, e, t);
}
const BR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), WR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), UR = (e, t, n, r, a = !1) => {
  const o = a ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, BR(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, WR(r)), {
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
}, YR = new sn("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), qR = new sn("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Rf = new sn("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Tf = new sn("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), GR = new sn("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), KR = new sn("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), XR = new sn("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), ZR = new sn("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), JR = new sn("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), QR = new sn("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), eT = new sn("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), tT = new sn("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), nT = {
  zoom: {
    inKeyframes: YR,
    outKeyframes: qR
  },
  "zoom-big": {
    inKeyframes: Rf,
    outKeyframes: Tf
  },
  "zoom-big-fast": {
    inKeyframes: Rf,
    outKeyframes: Tf
  },
  "zoom-left": {
    inKeyframes: XR,
    outKeyframes: ZR
  },
  "zoom-right": {
    inKeyframes: JR,
    outKeyframes: QR
  },
  "zoom-up": {
    inKeyframes: GR,
    outKeyframes: KR
  },
  "zoom-down": {
    inKeyframes: eT,
    outKeyframes: tT
  }
}, rT = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = nT[t];
  return [UR(r, a, o, e.motionDurationFast), {
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
}, aT = (e) => {
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
    sizePopupArrow: b
  } = e, y = t(i).add(b).add(f).equal(), p = t(i).mul(2).add(b).equal();
  return [
    {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, bu(e)), {
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
          minWidth: p,
          minHeight: l,
          padding: `${Ne(e.calc(u).div(2).equal())} ${Ne(d)}`,
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
          minWidth: y
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${n}-inner`]: {
            borderRadius: e.min(i, mv)
          }
        },
        [`${n}-content`]: {
          position: "relative"
        }
      }), FE(e, (h, {
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
    FR(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${n}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, oT = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, gv({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), kR(Xn(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), pv = (e, t = !0) => Nr("Tooltip", (r) => {
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
  return [aT(s), rT(r, "zoom-big-fast")];
}, oT, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(e), iT = zi.map((e) => `${e}-inverse`);
function sT(e, t = !0) {
  return t ? [].concat(fe(iT), fe(zi)).includes(e) : zi.includes(e);
}
var lT = ["b"], cT = ["v"], ol = function(t) {
  return Math.round(Number(t || 0));
}, uT = function(t) {
  if (t instanceof ot)
    return t;
  if (t && Se(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, a = kt(n, lT);
    return F(F({}, a), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, cr = /* @__PURE__ */ (function(e) {
  ur(n, e);
  var t = dr(n);
  function n(r) {
    return Et(this, n), t.call(this, uT(r));
  }
  return _t(n, [{
    key: "toHsbString",
    value: function() {
      var a = this.toHsb(), o = ol(a.s * 100), i = ol(a.b * 100), s = ol(a.h), l = a.a, c = "hsb(".concat(s, ", ").concat(o, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(o, "%, ").concat(i, "%, ").concat(l.toFixed(l === 0 ? 0 : 2), ")");
      return l === 1 ? c : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var a = this.toHsv(), o = a.v, i = kt(a, cT);
      return F(F({}, i), {}, {
        b: o,
        a: this.a
      });
    }
  }]), n;
})(ot), dT = "rc-color-picker", la = function(t) {
  return t instanceof cr ? t : new cr(t);
}, fT = la("#1677ff"), yv = function(t) {
  var n = t.offset, r = t.targetRef, a = t.containerRef, o = t.color, i = t.type, s = a.current.getBoundingClientRect(), l = s.width, c = s.height, u = r.current.getBoundingClientRect(), d = u.width, f = u.height, b = d / 2, y = f / 2, p = (n.x + b) / l, h = 1 - (n.y + y) / c, g = o.toHsb(), v = p, w = (n.x + b) / l * 360;
  if (i)
    switch (i) {
      case "hue":
        return la(F(F({}, g), {}, {
          h: w <= 0 ? 0 : w
        }));
      case "alpha":
        return la(F(F({}, g), {}, {
          a: v <= 0 ? 0 : v
        }));
    }
  return la({
    h: g.h,
    s: p <= 0 ? 0 : p,
    b: h >= 1 ? 1 : h,
    a: g.a
  });
}, bv = function(t, n) {
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
}, hT = function(t) {
  var n = t.color, r = t.prefixCls, a = t.className, o = t.style, i = t.onClick, s = "".concat(r, "-color-block");
  return /* @__PURE__ */ W.createElement("div", {
    className: de(s, a),
    style: o,
    onClick: i
  }, /* @__PURE__ */ W.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: n
    }
  }));
};
function mT(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function wv(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, a = e.onDragChange, o = e.onDragChangeComplete, i = e.calculate, s = e.color, l = e.disabledDrag, c = Yn({
    x: 0,
    y: 0
  }), u = Z(c, 2), d = u[0], f = u[1], b = Ae(null), y = Ae(null);
  bt(function() {
    f(i());
  }, [s]), bt(function() {
    return function() {
      document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", y.current), document.removeEventListener("touchmove", b.current), document.removeEventListener("touchend", y.current), b.current = null, y.current = null;
    };
  }, []);
  var p = function(S) {
    var C = mT(S), x = C.pageX, E = C.pageY, O = n.current.getBoundingClientRect(), _ = O.x, R = O.y, T = O.width, D = O.height, A = t.current.getBoundingClientRect(), P = A.width, I = A.height, N = P / 2, z = I / 2, L = Math.max(0, Math.min(x - _, T)) - N, U = Math.max(0, Math.min(E - R, D)) - z, X = {
      x: L,
      y: r === "x" ? d.y : U
    };
    if (P === 0 && I === 0 || P !== I)
      return !1;
    a == null || a(X);
  }, h = function(S) {
    S.preventDefault(), p(S);
  }, g = function(S) {
    S.preventDefault(), document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", y.current), document.removeEventListener("touchmove", b.current), document.removeEventListener("touchend", y.current), b.current = null, y.current = null, o == null || o();
  }, v = function(S) {
    document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", y.current), !l && (p(S), document.addEventListener("mousemove", h), document.addEventListener("mouseup", g), document.addEventListener("touchmove", h), document.addEventListener("touchend", g), b.current = h, y.current = g);
  };
  return [d, v];
}
var Sv = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, a = t.color, o = t.prefixCls;
  return /* @__PURE__ */ W.createElement("div", {
    className: de("".concat(o, "-handler"), k({}, "".concat(o, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: a
    }
  });
}, xv = function(t) {
  var n = t.children, r = t.style, a = t.prefixCls;
  return /* @__PURE__ */ W.createElement("div", {
    className: "".concat(a, "-palette"),
    style: F({
      position: "relative"
    }, r)
  }, n);
}, Cv = /* @__PURE__ */ wa(function(e, t) {
  var n = e.children, r = e.x, a = e.y;
  return /* @__PURE__ */ W.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(a, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), gT = function(t) {
  var n = t.color, r = t.onChange, a = t.prefixCls, o = t.onChangeComplete, i = t.disabled, s = Ae(), l = Ae(), c = Ae(n), u = Ft(function(p) {
    var h = yv({
      offset: p,
      targetRef: l,
      containerRef: s,
      color: n
    });
    c.current = h, r(h);
  }), d = wv({
    color: n,
    containerRef: s,
    targetRef: l,
    calculate: function() {
      return bv(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return o == null ? void 0 : o(c.current);
    },
    disabledDrag: i
  }), f = Z(d, 2), b = f[0], y = f[1];
  return /* @__PURE__ */ W.createElement("div", {
    ref: s,
    className: "".concat(a, "-select"),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ W.createElement(xv, {
    prefixCls: a
  }, /* @__PURE__ */ W.createElement(Cv, {
    x: b.x,
    y: b.y,
    ref: l
  }, /* @__PURE__ */ W.createElement(Sv, {
    color: n.toRgbString(),
    prefixCls: a
  })), /* @__PURE__ */ W.createElement("div", {
    className: "".concat(a, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, vT = function(t, n) {
  var r = Mr(t, {
    value: n
  }), a = Z(r, 2), o = a[0], i = a[1], s = ba(function() {
    return la(o);
  }, [o]);
  return [s, i];
}, pT = function(t) {
  var n = t.colors, r = t.children, a = t.direction, o = a === void 0 ? "to right" : a, i = t.type, s = t.prefixCls, l = ba(function() {
    return n.map(function(c, u) {
      var d = la(c);
      return i === "alpha" && u === n.length - 1 && (d = new cr(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ W.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(o, ", ").concat(l, ")")
    }
  }, r);
}, yT = function(t) {
  var n = t.prefixCls, r = t.colors, a = t.disabled, o = t.onChange, i = t.onChangeComplete, s = t.color, l = t.type, c = Ae(), u = Ae(), d = Ae(s), f = function(C) {
    return l === "hue" ? C.getHue() : C.a * 100;
  }, b = Ft(function(S) {
    var C = yv({
      offset: S,
      targetRef: u,
      containerRef: c,
      color: s,
      type: l
    });
    d.current = C, o(f(C));
  }), y = wv({
    color: s,
    targetRef: u,
    containerRef: c,
    calculate: function() {
      return bv(s, l);
    },
    onDragChange: b,
    onDragChangeComplete: function() {
      i(f(d.current));
    },
    direction: "x",
    disabledDrag: a
  }), p = Z(y, 2), h = p[0], g = p[1], v = W.useMemo(function() {
    if (l === "hue") {
      var S = s.toHsb();
      S.s = 1, S.b = 1, S.a = 1;
      var C = new cr(S);
      return C;
    }
    return s;
  }, [s, l]), w = W.useMemo(function() {
    return r.map(function(S) {
      return "".concat(S.color, " ").concat(S.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ W.createElement("div", {
    ref: c,
    className: de("".concat(n, "-slider"), "".concat(n, "-slider-").concat(l)),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ W.createElement(xv, {
    prefixCls: n
  }, /* @__PURE__ */ W.createElement(Cv, {
    x: h.x,
    y: h.y,
    ref: u
  }, /* @__PURE__ */ W.createElement(Sv, {
    size: "small",
    color: v.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ W.createElement(pT, {
    colors: w,
    type: l,
    prefixCls: n
  })));
};
function bT(e) {
  return m.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || yT];
  }, [e]);
}
var wT = [{
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
}], ST = /* @__PURE__ */ wa(function(e, t) {
  var n = e.value, r = e.defaultValue, a = e.prefixCls, o = a === void 0 ? dT : a, i = e.onChange, s = e.onChangeComplete, l = e.className, c = e.style, u = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, b = e.disabled, y = b === void 0 ? !1 : b, p = e.components, h = bT(p), g = Z(h, 1), v = g[0], w = vT(r || fT, n), S = Z(w, 2), C = S[0], x = S[1], E = ba(function() {
    return C.setA(1).toRgbString();
  }, [C]), O = function(U, X) {
    n || x(U), i == null || i(U, X);
  }, _ = function(U) {
    return new cr(C.setHue(U));
  }, R = function(U) {
    return new cr(C.setA(U / 100));
  }, T = function(U) {
    O(_(U), {
      type: "hue",
      value: U
    });
  }, D = function(U) {
    O(R(U), {
      type: "alpha",
      value: U
    });
  }, A = function(U) {
    s && s(_(U));
  }, P = function(U) {
    s && s(R(U));
  }, I = de("".concat(o, "-panel"), l, k({}, "".concat(o, "-panel-disabled"), y)), N = {
    prefixCls: o,
    disabled: y,
    color: C
  }, z = /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(gT, qe({
    onChange: O
  }, N, {
    onChangeComplete: s
  })), /* @__PURE__ */ W.createElement("div", {
    className: "".concat(o, "-slider-container")
  }, /* @__PURE__ */ W.createElement("div", {
    className: de("".concat(o, "-slider-group"), k({}, "".concat(o, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ W.createElement(v, qe({}, N, {
    type: "hue",
    colors: wT,
    min: 0,
    max: 359,
    value: C.getHue(),
    onChange: T,
    onChangeComplete: A
  })), !f && /* @__PURE__ */ W.createElement(v, qe({}, N, {
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
    onChange: D,
    onChangeComplete: P
  }))), /* @__PURE__ */ W.createElement(hT, {
    color: C.toRgbString(),
    prefixCls: o
  })));
  return /* @__PURE__ */ W.createElement("div", {
    className: I,
    style: c,
    ref: t
  }, typeof u == "function" ? u(z) : z);
});
process.env.NODE_ENV !== "production" && (ST.displayName = "ColorPicker");
const xT = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", CT = (e, t) => e ? xT(e, t) : "";
let Pf = /* @__PURE__ */ (function() {
  function e(t) {
    Et(this, e);
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
  return _t(e, [{
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
      return CT(this.toHexString(), this.metaColor.a < 1);
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
const ET = (e) => e instanceof Pf ? e : new Pf(e);
function Ev(e, t) {
  const n = sT(t), r = de({
    [`${e}-${t}`]: t && n
  }), a = {}, o = {}, i = ET(t).toRgb(), l = (0.299 * i.r + 0.587 * i.g + 0.114 * i.b) / 255 < 0.5 ? "#FFF" : "#000";
  return t && !n && (a.background = t, a["--ant-tooltip-color"] = l, o["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: a,
    arrowStyle: o
  };
}
const _T = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = m.useContext(Ut), l = s("tooltip", t), [c, u, d] = pv(l), f = Ev(l, o), b = f.arrowStyle, y = Object.assign(Object.assign({}, i), f.overlayStyle), p = de(u, d, l, `${l}-pure`, `${l}-placement-${r}`, n, f.className);
  return c(/* @__PURE__ */ m.createElement("div", {
    className: p,
    style: b
  }, /* @__PURE__ */ m.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ m.createElement(Kg, Object.assign({}, e, {
    className: u,
    prefixCls: l,
    overlayInnerStyle: y
  }), a)));
};
var OT = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const RT = /* @__PURE__ */ m.forwardRef((e, t) => {
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
    destroyOnHidden: b,
    arrow: y = !0,
    title: p,
    overlay: h,
    builtinPlacements: g,
    arrowPointAtCenter: v = !1,
    autoAdjustOverflow: w = !0,
    motion: S,
    getPopupContainer: C,
    placement: x = "top",
    mouseEnterDelay: E = 0.1,
    mouseLeaveDelay: O = 0.1,
    overlayStyle: _,
    rootClassName: R,
    overlayClassName: T,
    styles: D,
    classNames: A
  } = e, P = OT(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), I = !!y, [, N] = Ta(), {
    getPopupContainer: z,
    getPrefixCls: L,
    direction: U,
    className: X,
    style: $,
    classNames: V,
    styles: B
  } = Ro("tooltip"), Y = bn("Tooltip"), se = m.useRef(null), J = () => {
    var Be;
    (Be = se.current) === null || Be === void 0 || Be.forceAlign();
  };
  m.useImperativeHandle(t, () => {
    var Be, Le;
    return {
      forceAlign: J,
      forcePopupAlign: () => {
        Y.deprecated(!1, "forcePopupAlign", "forceAlign"), J();
      },
      nativeElement: (Be = se.current) === null || Be === void 0 ? void 0 : Be.nativeElement,
      popupElement: (Le = se.current) === null || Le === void 0 ? void 0 : Le.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([Be, Le]) => {
    Y.deprecated(!(Be in e), Be, Le);
  }), process.env.NODE_ENV !== "production" && Y(!f || typeof f == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && Y(!y || typeof y == "boolean" || !("arrowPointAtCenter" in y), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [Q, te] = Mr(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), ce = !p && !h && p !== 0, ve = (Be) => {
    var Le, $e;
    te(ce ? !1 : Be), ce || ((Le = e.onOpenChange) === null || Le === void 0 || Le.call(e, Be), ($e = e.onVisibleChange) === null || $e === void 0 || $e.call(e, Be));
  }, be = m.useMemo(() => {
    var Be, Le;
    let $e = v;
    return typeof y == "object" && ($e = (Le = (Be = y.pointAtCenter) !== null && Be !== void 0 ? Be : y.arrowPointAtCenter) !== null && Le !== void 0 ? Le : v), g || VR({
      arrowPointAtCenter: $e,
      autoAdjustOverflow: w,
      arrowWidth: I ? N.sizePopupArrow : 0,
      borderRadius: N.borderRadius,
      offset: N.marginXXS
    });
  }, [v, y, g, N]), ie = m.useMemo(() => p === 0 ? p : h || p || "", [h, p]), Ce = /* @__PURE__ */ m.createElement(Ec, {
    space: !0
  }, typeof ie == "function" ? ie() : ie), q = L("tooltip", a), le = L(), H = e["data-popover-inject"];
  let ae = Q;
  !("open" in e) && !("visible" in e) && ce && (ae = !1);
  const me = /* @__PURE__ */ m.isValidElement(c) && !zR(c) ? c : /* @__PURE__ */ m.createElement("span", null, c), pe = me.props, Te = !pe.className || typeof pe.className == "string" ? de(pe.className, o || `${q}-open`) : pe.className, [ge, _e, xe] = pv(q, !H), ne = Ev(q, s), Pe = ne.arrowStyle, Ie = de(T, {
    [`${q}-rtl`]: U === "rtl"
  }, ne.className, R, _e, xe, X, V.root, A == null ? void 0 : A.root), vt = de(V.body, A == null ? void 0 : A.body), [Ke, Je] = $R("Tooltip", P.zIndex), St = /* @__PURE__ */ m.createElement(RO, Object.assign({}, P, {
    zIndex: Ke,
    showArrow: I,
    placement: x,
    mouseEnterDelay: E,
    mouseLeaveDelay: O,
    prefixCls: q,
    classNames: {
      root: Ie,
      body: vt
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Pe), B.root), $), _), D == null ? void 0 : D.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, B.body), l), D == null ? void 0 : D.body), ne.overlayStyle)
    },
    getTooltipContainer: C || i || z,
    ref: se,
    builtinPlacements: be,
    overlay: Ce,
    visible: ae,
    onVisibleChange: ve,
    afterVisibleChange: u ?? d,
    arrowContent: /* @__PURE__ */ m.createElement("span", {
      className: `${q}-arrow-content`
    }),
    motion: {
      motionName: NR(le, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: b ?? !!f
  }), ae ? vv(me, {
    className: Te
  }) : me);
  return ge(/* @__PURE__ */ m.createElement(Ru.Provider, {
    value: Je
  }, St));
}), No = RT;
process.env.NODE_ENV !== "production" && (No.displayName = "Tooltip");
No._InternalPanelDoNotUseOrYouWillBeFired = _T;
var TT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, PT = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: TT
  }));
}, _v = /* @__PURE__ */ m.forwardRef(PT);
process.env.NODE_ENV !== "production" && (_v.displayName = "EnterOutlined");
var Mf = {
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
function MT(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function DT(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Df(e, t, n) {
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
function Yi(e, t, n, r) {
  if (n) {
    var a = t;
    if (t.type === "click") {
      a = Df(t, e, ""), n(a);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      a = Df(t, e, r), n(a);
      return;
    }
    n(a);
  }
}
function Ov(e, t) {
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
var Rv = /* @__PURE__ */ W.forwardRef(function(e, t) {
  var n, r, a, o = e.inputElement, i = e.children, s = e.prefixCls, l = e.prefix, c = e.suffix, u = e.addonBefore, d = e.addonAfter, f = e.className, b = e.style, y = e.disabled, p = e.readOnly, h = e.focused, g = e.triggerFocus, v = e.allowClear, w = e.value, S = e.handleReset, C = e.hidden, x = e.classes, E = e.classNames, O = e.dataAttrs, _ = e.styles, R = e.components, T = e.onClear, D = i ?? o, A = (R == null ? void 0 : R.affixWrapper) || "span", P = (R == null ? void 0 : R.groupWrapper) || "span", I = (R == null ? void 0 : R.wrapper) || "span", N = (R == null ? void 0 : R.groupAddon) || "span", z = Ae(null), L = function(le) {
    var H;
    (H = z.current) !== null && H !== void 0 && H.contains(le.target) && (g == null || g());
  }, U = DT(e), X = /* @__PURE__ */ Kv(D, {
    value: w,
    className: de((n = D.props) === null || n === void 0 ? void 0 : n.className, !U && (E == null ? void 0 : E.variant)) || null
  }), $ = Ae(null);
  if (W.useImperativeHandle(t, function() {
    return {
      nativeElement: $.current || z.current
    };
  }), U) {
    var V = null;
    if (v) {
      var B = !y && !p && w, Y = "".concat(s, "-clear-icon"), se = Se(v) === "object" && v !== null && v !== void 0 && v.clearIcon ? v.clearIcon : "✖";
      V = /* @__PURE__ */ W.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(le) {
          S == null || S(le), T == null || T();
        },
        onMouseDown: function(le) {
          return le.preventDefault();
        },
        className: de(Y, k(k({}, "".concat(Y, "-hidden"), !B), "".concat(Y, "-has-suffix"), !!c))
      }, se);
    }
    var J = "".concat(s, "-affix-wrapper"), Q = de(J, k(k(k(k(k({}, "".concat(s, "-disabled"), y), "".concat(J, "-disabled"), y), "".concat(J, "-focused"), h), "".concat(J, "-readonly"), p), "".concat(J, "-input-with-clear-btn"), c && v && w), x == null ? void 0 : x.affixWrapper, E == null ? void 0 : E.affixWrapper, E == null ? void 0 : E.variant), te = (c || v) && /* @__PURE__ */ W.createElement("span", {
      className: de("".concat(s, "-suffix"), E == null ? void 0 : E.suffix),
      style: _ == null ? void 0 : _.suffix
    }, V, c);
    X = /* @__PURE__ */ W.createElement(A, qe({
      className: Q,
      style: _ == null ? void 0 : _.affixWrapper,
      onClick: L
    }, O == null ? void 0 : O.affixWrapper, {
      ref: z
    }), l && /* @__PURE__ */ W.createElement("span", {
      className: de("".concat(s, "-prefix"), E == null ? void 0 : E.prefix),
      style: _ == null ? void 0 : _.prefix
    }, l), X, te);
  }
  if (MT(e)) {
    var ce = "".concat(s, "-group"), ve = "".concat(ce, "-addon"), be = "".concat(ce, "-wrapper"), ie = de("".concat(s, "-wrapper"), ce, x == null ? void 0 : x.wrapper, E == null ? void 0 : E.wrapper), Ce = de(be, k({}, "".concat(be, "-disabled"), y), x == null ? void 0 : x.group, E == null ? void 0 : E.groupWrapper);
    X = /* @__PURE__ */ W.createElement(P, {
      className: Ce,
      ref: $
    }, /* @__PURE__ */ W.createElement(I, {
      className: ie
    }, u && /* @__PURE__ */ W.createElement(N, {
      className: ve
    }, u), X, d && /* @__PURE__ */ W.createElement(N, {
      className: ve
    }, d)));
  }
  return /* @__PURE__ */ W.cloneElement(X, {
    className: de((r = X.props) === null || r === void 0 ? void 0 : r.className, f) || null,
    style: F(F({}, (a = X.props) === null || a === void 0 ? void 0 : a.style), b),
    hidden: C
  });
}), $T = ["show"];
function Tv(e, t) {
  return m.useMemo(function() {
    var n = {};
    t && (n.show = Se(t) === "object" && t.formatter ? t.formatter : !!t), n = F(F({}, n), e);
    var r = n, a = r.show, o = kt(r, $T);
    return F(F({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var NT = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], kT = /* @__PURE__ */ wa(function(e, t) {
  var n = e.autoComplete, r = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, l = e.onKeyUp, c = e.prefixCls, u = c === void 0 ? "rc-input" : c, d = e.disabled, f = e.htmlSize, b = e.className, y = e.maxLength, p = e.suffix, h = e.showCount, g = e.count, v = e.type, w = v === void 0 ? "text" : v, S = e.classes, C = e.classNames, x = e.styles, E = e.onCompositionStart, O = e.onCompositionEnd, _ = kt(e, NT), R = Yn(!1), T = Z(R, 2), D = T[0], A = T[1], P = Ae(!1), I = Ae(!1), N = Ae(null), z = Ae(null), L = function(ne) {
    N.current && Ov(N.current, ne);
  }, U = Mr(e.defaultValue, {
    value: e.value
  }), X = Z(U, 2), $ = X[0], V = X[1], B = $ == null ? "" : String($), Y = Yn(null), se = Z(Y, 2), J = se[0], Q = se[1], te = Tv(g, h), ce = te.max || y, ve = te.strategy(B), be = !!ce && ve > ce;
  Oc(t, function() {
    var xe;
    return {
      focus: L,
      blur: function() {
        var Pe;
        (Pe = N.current) === null || Pe === void 0 || Pe.blur();
      },
      setSelectionRange: function(Pe, Ie, vt) {
        var Ke;
        (Ke = N.current) === null || Ke === void 0 || Ke.setSelectionRange(Pe, Ie, vt);
      },
      select: function() {
        var Pe;
        (Pe = N.current) === null || Pe === void 0 || Pe.select();
      },
      input: N.current,
      nativeElement: ((xe = z.current) === null || xe === void 0 ? void 0 : xe.nativeElement) || N.current
    };
  }), bt(function() {
    I.current && (I.current = !1), A(function(xe) {
      return xe && d ? !1 : xe;
    });
  }, [d]);
  var ie = function(ne, Pe, Ie) {
    var vt = Pe;
    if (!P.current && te.exceedFormatter && te.max && te.strategy(Pe) > te.max) {
      if (vt = te.exceedFormatter(Pe, {
        max: te.max
      }), Pe !== vt) {
        var Ke, Je;
        Q([((Ke = N.current) === null || Ke === void 0 ? void 0 : Ke.selectionStart) || 0, ((Je = N.current) === null || Je === void 0 ? void 0 : Je.selectionEnd) || 0]);
      }
    } else if (Ie.source === "compositionEnd")
      return;
    V(vt), N.current && Yi(N.current, ne, r, vt);
  };
  bt(function() {
    if (J) {
      var xe;
      (xe = N.current) === null || xe === void 0 || xe.setSelectionRange.apply(xe, fe(J));
    }
  }, [J]);
  var Ce = function(ne) {
    ie(ne, ne.target.value, {
      source: "change"
    });
  }, q = function(ne) {
    P.current = !1, ie(ne, ne.currentTarget.value, {
      source: "compositionEnd"
    }), O == null || O(ne);
  }, le = function(ne) {
    i && ne.key === "Enter" && !I.current && (I.current = !0, i(ne)), s == null || s(ne);
  }, H = function(ne) {
    ne.key === "Enter" && (I.current = !1), l == null || l(ne);
  }, ae = function(ne) {
    A(!0), a == null || a(ne);
  }, me = function(ne) {
    I.current && (I.current = !1), A(!1), o == null || o(ne);
  }, pe = function(ne) {
    V(""), L(), N.current && Yi(N.current, ne, r);
  }, Te = be && "".concat(u, "-out-of-range"), ge = function() {
    var ne = ds(e, [
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
    return /* @__PURE__ */ W.createElement("input", qe({
      autoComplete: n
    }, ne, {
      onChange: Ce,
      onFocus: ae,
      onBlur: me,
      onKeyDown: le,
      onKeyUp: H,
      className: de(u, k({}, "".concat(u, "-disabled"), d), C == null ? void 0 : C.input),
      style: x == null ? void 0 : x.input,
      ref: N,
      size: f,
      type: w,
      onCompositionStart: function(Ie) {
        P.current = !0, E == null || E(Ie);
      },
      onCompositionEnd: q
    }));
  }, _e = function() {
    var ne = Number(ce) > 0;
    if (p || te.show) {
      var Pe = te.showFormatter ? te.showFormatter({
        value: B,
        count: ve,
        maxLength: ce
      }) : "".concat(ve).concat(ne ? " / ".concat(ce) : "");
      return /* @__PURE__ */ W.createElement(W.Fragment, null, te.show && /* @__PURE__ */ W.createElement("span", {
        className: de("".concat(u, "-show-count-suffix"), k({}, "".concat(u, "-show-count-has-suffix"), !!p), C == null ? void 0 : C.count),
        style: F({}, x == null ? void 0 : x.count)
      }, Pe), p);
    }
    return null;
  };
  return /* @__PURE__ */ W.createElement(Rv, qe({}, _, {
    prefixCls: u,
    className: de(b, Te),
    handleReset: pe,
    value: B,
    focused: D,
    triggerFocus: L,
    suffix: _e(),
    disabled: d,
    classes: S,
    classNames: C,
    styles: x,
    ref: z
  }), ge());
}), AT = `
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
`, FT = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], il = {}, Bt;
function jT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && il[n])
    return il[n];
  var r = window.getComputedStyle(e), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = FT.map(function(c) {
    return "".concat(c, ":").concat(r.getPropertyValue(c));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && n && (il[n] = l), l;
}
function IT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Bt || (Bt = document.createElement("textarea"), Bt.setAttribute("tab-index", "-1"), Bt.setAttribute("aria-hidden", "true"), Bt.setAttribute("name", "hiddenTextarea"), document.body.appendChild(Bt)), e.getAttribute("wrap") ? Bt.setAttribute("wrap", e.getAttribute("wrap")) : Bt.removeAttribute("wrap");
  var a = jT(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, l = a.sizingStyle;
  Bt.setAttribute("style", "".concat(l, ";").concat(AT)), Bt.value = e.value || e.placeholder || "";
  var c = void 0, u = void 0, d, f = Bt.scrollHeight;
  if (s === "border-box" ? f += i : s === "content-box" && (f -= o), n !== null || r !== null) {
    Bt.value = " ";
    var b = Bt.scrollHeight - o;
    n !== null && (c = b * n, s === "border-box" && (c = c + o + i), f = Math.max(c, f)), r !== null && (u = b * r, s === "border-box" && (u = u + o + i), d = f > u ? "" : "hidden", f = Math.min(u, f));
  }
  var y = {
    height: f,
    overflowY: d,
    resize: "none"
  };
  return c && (y.minHeight = c), u && (y.maxHeight = u), y;
}
var LT = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], sl = 0, ll = 1, cl = 2, VT = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls, a = n.defaultValue, o = n.value, i = n.autoSize, s = n.onResize, l = n.className, c = n.style, u = n.disabled, d = n.onChange, f = n.onInternalAutoSize, b = kt(n, LT), y = Mr(a, {
    value: o,
    postState: function(Y) {
      return Y ?? "";
    }
  }), p = Z(y, 2), h = p[0], g = p[1], v = function(Y) {
    g(Y.target.value), d == null || d(Y);
  }, w = m.useRef();
  m.useImperativeHandle(t, function() {
    return {
      textArea: w.current
    };
  });
  var S = m.useMemo(function() {
    return i && Se(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = Z(S, 2), x = C[0], E = C[1], O = !!i, _ = m.useState(cl), R = Z(_, 2), T = R[0], D = R[1], A = m.useState(), P = Z(A, 2), I = P[0], N = P[1], z = function() {
    D(sl), process.env.NODE_ENV === "test" && (f == null || f());
  };
  at(function() {
    O && z();
  }, [o, x, E, O]), at(function() {
    if (T === sl)
      D(ll);
    else if (T === ll) {
      var B = IT(w.current, !1, x, E);
      D(cl), N(B);
    }
  }, [T]);
  var L = m.useRef(), U = function() {
    va.cancel(L.current);
  }, X = function(Y) {
    T === cl && (s == null || s(Y), i && (U(), L.current = va(function() {
      z();
    })));
  };
  m.useEffect(function() {
    return U;
  }, []);
  var $ = O ? I : null, V = F(F({}, c), $);
  return (T === sl || T === ll) && (V.overflowY = "hidden", V.overflowX = "hidden"), /* @__PURE__ */ m.createElement(Ma, {
    onResize: X,
    disabled: !(i || s)
  }, /* @__PURE__ */ m.createElement("textarea", qe({}, b, {
    ref: w,
    style: V,
    className: de(r, l, k({}, "".concat(r, "-disabled"), u)),
    disabled: u,
    value: h,
    onChange: v
  })));
}), zT = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], HT = /* @__PURE__ */ W.forwardRef(function(e, t) {
  var n, r = e.defaultValue, a = e.value, o = e.onFocus, i = e.onBlur, s = e.onChange, l = e.allowClear, c = e.maxLength, u = e.onCompositionStart, d = e.onCompositionEnd, f = e.suffix, b = e.prefixCls, y = b === void 0 ? "rc-textarea" : b, p = e.showCount, h = e.count, g = e.className, v = e.style, w = e.disabled, S = e.hidden, C = e.classNames, x = e.styles, E = e.onResize, O = e.onClear, _ = e.onPressEnter, R = e.readOnly, T = e.autoSize, D = e.onKeyDown, A = kt(e, zT), P = Mr(r, {
    value: a,
    defaultValue: r
  }), I = Z(P, 2), N = I[0], z = I[1], L = N == null ? "" : String(N), U = W.useState(!1), X = Z(U, 2), $ = X[0], V = X[1], B = W.useRef(!1), Y = W.useState(null), se = Z(Y, 2), J = se[0], Q = se[1], te = Ae(null), ce = Ae(null), ve = function() {
    var Ee;
    return (Ee = ce.current) === null || Ee === void 0 ? void 0 : Ee.textArea;
  }, be = function() {
    ve().focus();
  };
  Oc(t, function() {
    var $e;
    return {
      resizableTextArea: ce.current,
      focus: be,
      blur: function() {
        ve().blur();
      },
      nativeElement: (($e = te.current) === null || $e === void 0 ? void 0 : $e.nativeElement) || ve()
    };
  }), bt(function() {
    V(function($e) {
      return !w && $e;
    });
  }, [w]);
  var ie = W.useState(null), Ce = Z(ie, 2), q = Ce[0], le = Ce[1];
  W.useEffect(function() {
    if (q) {
      var $e;
      ($e = ve()).setSelectionRange.apply($e, fe(q));
    }
  }, [q]);
  var H = Tv(h, p), ae = (n = H.max) !== null && n !== void 0 ? n : c, me = Number(ae) > 0, pe = H.strategy(L), Te = !!ae && pe > ae, ge = function(Ee, Qe) {
    var ue = Qe;
    !B.current && H.exceedFormatter && H.max && H.strategy(Qe) > H.max && (ue = H.exceedFormatter(Qe, {
      max: H.max
    }), Qe !== ue && le([ve().selectionStart || 0, ve().selectionEnd || 0])), z(ue), Yi(Ee.currentTarget, Ee, s, ue);
  }, _e = function(Ee) {
    B.current = !0, u == null || u(Ee);
  }, xe = function(Ee) {
    B.current = !1, ge(Ee, Ee.currentTarget.value), d == null || d(Ee);
  }, ne = function(Ee) {
    ge(Ee, Ee.target.value);
  }, Pe = function(Ee) {
    Ee.key === "Enter" && _ && _(Ee), D == null || D(Ee);
  }, Ie = function(Ee) {
    V(!0), o == null || o(Ee);
  }, vt = function(Ee) {
    V(!1), i == null || i(Ee);
  }, Ke = function(Ee) {
    z(""), be(), Yi(ve(), Ee, s);
  }, Je = f, St;
  H.show && (H.showFormatter ? St = H.showFormatter({
    value: L,
    count: pe,
    maxLength: ae
  }) : St = "".concat(pe).concat(me ? " / ".concat(ae) : ""), Je = /* @__PURE__ */ W.createElement(W.Fragment, null, Je, /* @__PURE__ */ W.createElement("span", {
    className: de("".concat(y, "-data-count"), C == null ? void 0 : C.count),
    style: x == null ? void 0 : x.count
  }, St)));
  var Be = function(Ee) {
    var Qe;
    E == null || E(Ee), (Qe = ve()) !== null && Qe !== void 0 && Qe.style.height && Q(!0);
  }, Le = !T && !p && !l;
  return /* @__PURE__ */ W.createElement(Rv, {
    ref: te,
    value: L,
    allowClear: l,
    handleReset: Ke,
    suffix: Je,
    prefixCls: y,
    classNames: F(F({}, C), {}, {
      affixWrapper: de(C == null ? void 0 : C.affixWrapper, k(k({}, "".concat(y, "-show-count"), p), "".concat(y, "-textarea-allow-clear"), l))
    }),
    disabled: w,
    focused: $,
    className: de(g, Te && "".concat(y, "-out-of-range")),
    style: F(F({}, v), J && !Le ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof St == "string" ? St : void 0
      }
    },
    hidden: S,
    readOnly: R,
    onClear: O
  }, /* @__PURE__ */ W.createElement(VT, qe({}, A, {
    autoSize: T,
    maxLength: c,
    onKeyDown: Pe,
    onChange: ne,
    onFocus: Ie,
    onBlur: vt,
    onCompositionStart: _e,
    onCompositionEnd: xe,
    className: de(C == null ? void 0 : C.textarea),
    style: F(F({}, x == null ? void 0 : x.textarea), {}, {
      resize: v == null ? void 0 : v.resize
    }),
    disabled: w,
    prefixCls: y,
    onResize: Be,
    ref: ce,
    readOnly: R
  })));
}), BT = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, WT = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: BT
  }));
}, Pv = /* @__PURE__ */ m.forwardRef(WT);
process.env.NODE_ENV !== "production" && (Pv.displayName = "CloseCircleFilled");
const Mv = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ W.createElement(Pv, null)
  }), t;
};
function _c(e, t, n) {
  return de({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Dv = (e, t) => t || e, $v = (e) => {
  const [, , , , t] = Ta();
  return t ? `${e}-css-var` : "";
}, Nv = (e, t, n) => {
  var r, a;
  const {
    variant: o,
    [e]: i
  } = m.useContext(Ut), s = m.useContext(_R), l = i == null ? void 0 : i.variant;
  let c;
  typeof t < "u" ? c = t : n === !1 ? c = "borderless" : c = (a = (r = s ?? l) !== null && r !== void 0 ? r : o) !== null && a !== void 0 ? a : "outlined";
  const u = Q1.includes(c);
  return [c, u];
};
function UT(e, t) {
  const n = Ae([]), r = () => {
    n.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return bt(() => (r(), () => n.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), r;
}
function YT(e, t, n, r) {
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
function qT(e, t, n) {
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
function GT(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, {
    componentCls: r
  } = t, a = r || n, o = `${a}-compact`;
  return {
    [o]: Object.assign(Object.assign({}, YT(e, o, t, a)), qT(a, o, t))
  };
}
function Tu(e) {
  return Xn(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const Pu = (e) => {
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
    colorPrimaryHover: b,
    colorPrimary: y,
    controlOutlineWidth: p,
    controlOutline: h,
    colorErrorOutline: g,
    colorWarningOutline: v,
    colorBgContainer: w,
    inputFontSize: S,
    inputFontSizeLG: C,
    inputFontSizeSM: x
  } = e, E = S || n, O = x || E, _ = C || s, R = Math.round((t - E * r) / 2 * 10) / 10 - a, T = Math.round((o - O * r) / 2 * 10) / 10 - a, D = Math.ceil((i - _ * l) / 2 * 10) / 10 - a;
  return {
    paddingBlock: Math.max(R, 0),
    paddingBlockSM: Math.max(T, 0),
    paddingBlockLG: Math.max(D, 0),
    paddingInline: c - a,
    paddingInlineSM: u - a,
    paddingInlineLG: d - a,
    addonBg: f,
    activeBorderColor: y,
    hoverBorderColor: b,
    activeShadow: `0 0 0 ${p}px ${h}`,
    errorActiveShadow: `0 0 0 ${p}px ${g}`,
    warningActiveShadow: `0 0 0 ${p}px ${v}`,
    hoverBg: w,
    activeBg: w,
    inputFontSize: E,
    inputFontSizeLG: _,
    inputFontSizeSM: O
  };
}, KT = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Mu = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, KT(Xn(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), kv = (e, t) => ({
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
}), $f = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, kv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), XT = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, kv(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Mu(e))
  }), $f(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), $f(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Nf = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), ZT = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Nf(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Nf(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Mu(e))
    }
  })
}), JT = (e, t) => {
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
}, Av = (e, t) => {
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
}, kf = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Av(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), QT = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Av(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Mu(e))
  }), kf(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), kf(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Af = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), eP = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group-addon`]: {
      background: e.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    }
  }, Af(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Af(e, {
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
          borderInlineStart: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Fv = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: `${Ne(e.lineWidth)} 0`,
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
}), Ff = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Fv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${t.borderColor} transparent`
  }
}), tP = (e, t) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Fv(e, {
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
  }), Ff(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Ff(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), nP = (e) => ({
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
}), jv = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${Ne(t)} ${Ne(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, Iv = (e) => ({
  padding: `${Ne(e.paddingBlockSM)} ${Ne(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Lv = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${Ne(e.paddingBlock)} ${Ne(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, nP(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, jv(e)),
  "&-sm": Object.assign({}, Iv(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), rP = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, jv(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Iv(e)),
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
        padding: `0 ${Ne(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${Ne(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${Ne(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${Ne(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${Ne(e.calc(e.paddingInline).mul(-1).equal())}`,
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
    }, DE()), {
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
}, aP = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: a
  } = e, i = a(n).sub(a(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bu(e)), Lv(e)), XT(e)), QT(e)), JT(e)), tP(e)), {
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
}, oP = (e) => {
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
        margin: `0 ${Ne(e.inputAffixPadding)}`
      }
    }
  };
}, iP = (e) => {
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
    [l]: Object.assign(Object.assign(Object.assign(Object.assign({}, Lv(e)), {
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
    }), oP(e)), {
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
}, sP = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, bu(e)), rP(e)), {
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
      }, ZT(e)), eP(e)), {
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
}, lP = (e) => {
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
}, cP = (e) => {
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
}, Vv = Nr(["Input", "Shared"], (e) => {
  const t = Xn(e, Tu(e));
  return [aP(t), iP(t)];
}, Pu, {
  resetFont: !1
}), uP = Nr(["Input", "Component"], (e) => {
  const t = Xn(e, Tu(e));
  return [
    sP(t),
    lP(t),
    cP(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    GT(t)
  ];
}, Pu, {
  resetFont: !1
});
function dP(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var fP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const hP = /* @__PURE__ */ wa((e, t) => {
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
    className: b,
    style: y,
    styles: p,
    rootClassName: h,
    onChange: g,
    classNames: v,
    variant: w,
    _skipAddonWarning: S
  } = e, C = fP(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant", "_skipAddonWarning"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: Te
    } = bn("Input");
    Te(!("bordered" in e), "bordered", "variant"), S || [["addonAfter", "Space.Compact"], ["addonBefore", "Space.Compact"]].forEach(([ge, _e]) => {
      Te(!(ge in e), ge, _e);
    });
  }
  const {
    getPrefixCls: x,
    direction: E,
    allowClear: O,
    autoComplete: _,
    className: R,
    style: T,
    classNames: D,
    styles: A
  } = Ro("input"), P = x("input", n), I = Ae(null), N = $v(P), [z, L, U] = Vv(P, h), [X] = uP(P, N), {
    compactSize: $,
    compactItemClassnames: V
  } = fv(P, E), B = uv((Te) => {
    var ge;
    return (ge = o ?? $) !== null && ge !== void 0 ? ge : Te;
  }), Y = W.useContext(fo), se = i ?? Y, {
    status: J,
    hasFeedback: Q,
    feedbackIcon: te
  } = Qt(vo), ce = Dv(J, a), ve = dP(e) || !!Q, be = Ae(ve);
  if (process.env.NODE_ENV !== "production") {
    const Te = bn("Input");
    bt(() => {
      var ge;
      ve && !be.current && process.env.NODE_ENV !== "production" && Te(document.activeElement === ((ge = I.current) === null || ge === void 0 ? void 0 : ge.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), be.current = ve;
    }, [ve]);
  }
  const ie = UT(I), Ce = (Te) => {
    ie(), s == null || s(Te);
  }, q = (Te) => {
    ie(), l == null || l(Te);
  }, le = (Te) => {
    ie(), g == null || g(Te);
  }, H = (Q || c) && /* @__PURE__ */ W.createElement(W.Fragment, null, c, Q && te), ae = Mv(u ?? O), [me, pe] = Nv("input", w, r);
  return z(X(/* @__PURE__ */ W.createElement(kT, Object.assign({
    ref: To(t, I),
    prefixCls: P,
    autoComplete: _
  }, C, {
    disabled: se,
    onBlur: Ce,
    onFocus: q,
    style: Object.assign(Object.assign({}, T), y),
    styles: Object.assign(Object.assign({}, A), p),
    suffix: H,
    allowClear: ae,
    className: de(b, h, U, N, V, R),
    onChange: le,
    addonBefore: f && /* @__PURE__ */ W.createElement(Ec, {
      form: !0,
      space: !0
    }, f),
    addonAfter: d && /* @__PURE__ */ W.createElement(Ec, {
      form: !0,
      space: !0
    }, d),
    classNames: Object.assign(Object.assign(Object.assign({}, v), D), {
      input: de({
        [`${P}-sm`]: B === "small",
        [`${P}-lg`]: B === "large",
        [`${P}-rtl`]: E === "rtl"
      }, v == null ? void 0 : v.input, D.input, L),
      variant: de({
        [`${P}-${me}`]: pe
      }, _c(P, ce)),
      affixWrapper: de({
        [`${P}-affix-wrapper-sm`]: B === "small",
        [`${P}-affix-wrapper-lg`]: B === "large",
        [`${P}-affix-wrapper-rtl`]: E === "rtl"
      }, L),
      wrapper: de({
        [`${P}-group-rtl`]: E === "rtl"
      }, L),
      groupWrapper: de({
        [`${P}-group-wrapper-sm`]: B === "small",
        [`${P}-group-wrapper-lg`]: B === "large",
        [`${P}-group-wrapper-rtl`]: E === "rtl",
        [`${P}-group-wrapper-${me}`]: pe
      }, _c(`${P}-group-wrapper`, ce, Q), L)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (hP.displayName = "Input");
const mP = (e) => {
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
}, gP = Nr(["Input", "TextArea"], (e) => {
  const t = Xn(e, Tu(e));
  return mP(t);
}, Pu, {
  resetFont: !1
});
var vP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const pP = /* @__PURE__ */ wa((e, t) => {
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
    styles: b,
    variant: y,
    showCount: p,
    onMouseDown: h,
    onResize: g
  } = e, v = vP(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: H
    } = bn("TextArea");
    H(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: w,
    direction: S,
    allowClear: C,
    autoComplete: x,
    className: E,
    style: O,
    classNames: _,
    styles: R
  } = Ro("textArea"), T = m.useContext(fo), D = i ?? T, {
    status: A,
    hasFeedback: P,
    feedbackIcon: I
  } = m.useContext(vo), N = Dv(A, s), z = m.useRef(null);
  m.useImperativeHandle(t, () => {
    var H;
    return {
      resizableTextArea: (H = z.current) === null || H === void 0 ? void 0 : H.resizableTextArea,
      focus: (ae) => {
        var me, pe;
        Ov((pe = (me = z.current) === null || me === void 0 ? void 0 : me.resizableTextArea) === null || pe === void 0 ? void 0 : pe.textArea, ae);
      },
      blur: () => {
        var ae;
        return (ae = z.current) === null || ae === void 0 ? void 0 : ae.blur();
      }
    };
  });
  const L = w("input", r), U = $v(L), [X, $, V] = Vv(L, u), [B] = gP(L, U), {
    compactSize: Y,
    compactItemClassnames: se
  } = fv(L, S), J = uv((H) => {
    var ae;
    return (ae = o ?? Y) !== null && ae !== void 0 ? ae : H;
  }), [Q, te] = Nv("textArea", y, a), ce = Mv(l ?? C), [ve, be] = m.useState(!1), [ie, Ce] = m.useState(!1), q = (H) => {
    be(!0), h == null || h(H);
    const ae = () => {
      be(!1), document.removeEventListener("mouseup", ae);
    };
    document.addEventListener("mouseup", ae);
  }, le = (H) => {
    var ae, me;
    if (g == null || g(H), ve && typeof getComputedStyle == "function") {
      const pe = (me = (ae = z.current) === null || ae === void 0 ? void 0 : ae.nativeElement) === null || me === void 0 ? void 0 : me.querySelector("textarea");
      pe && getComputedStyle(pe).resize === "both" && Ce(!0);
    }
  };
  return X(B(/* @__PURE__ */ m.createElement(HT, Object.assign({
    autoComplete: x
  }, v, {
    style: Object.assign(Object.assign({}, O), f),
    styles: Object.assign(Object.assign({}, R), b),
    disabled: D,
    allowClear: ce,
    className: de(
      V,
      U,
      d,
      u,
      se,
      E,
      // Only for wrapper
      ie && `${L}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, c), _), {
      textarea: de({
        [`${L}-sm`]: J === "small",
        [`${L}-lg`]: J === "large"
      }, $, c == null ? void 0 : c.textarea, _.textarea, ve && `${L}-mouse-active`),
      variant: de({
        [`${L}-${Q}`]: te
      }, _c(L, N)),
      affixWrapper: de(`${L}-textarea-affix-wrapper`, {
        [`${L}-affix-wrapper-rtl`]: S === "rtl",
        [`${L}-affix-wrapper-sm`]: J === "small",
        [`${L}-affix-wrapper-lg`]: J === "large",
        [`${L}-textarea-show-count`]: p || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
      }, $)
    }),
    prefixCls: L,
    suffix: P && /* @__PURE__ */ m.createElement("span", {
      className: `${L}-textarea-suffix`
    }, I),
    showCount: p,
    ref: z,
    onResize: le,
    onMouseDown: q
  }))));
}), yP = (e, t, n, r) => {
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
}, bP = (e) => {
  const t = [1, 2, 3, 4, 5], n = {};
  return t.forEach((r) => {
    n[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `] = yP(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e);
  }), n;
}, wP = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, bg(e)), {
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
}, SP = (e) => ({
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
    backgroundColor: ji[2]
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
}), xP = (e) => {
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
}, CP = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), EP = () => ({
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
}), _P = (e) => {
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
    }, bP(e)), {
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
    }), SP(e)), wP(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, bg(e)), {
        marginInlineStart: e.marginXXS
      })
    }), xP(e)), CP(e)), EP()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, OP = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), zv = Nr("Typography", _P, OP), RP = (e) => {
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
    enterIcon: b = /* @__PURE__ */ m.createElement(_v, null)
  } = e, y = m.useRef(null), p = m.useRef(!1), h = m.useRef(null), [g, v] = m.useState(l);
  m.useEffect(() => {
    v(l);
  }, [l]), m.useEffect(() => {
    var P;
    if (!((P = y.current) === null || P === void 0) && P.resizableTextArea) {
      const {
        textArea: I
      } = y.current.resizableTextArea;
      I.focus();
      const {
        length: N
      } = I.value;
      I.setSelectionRange(N, N);
    }
  }, []);
  const w = ({
    target: P
  }) => {
    v(P.value.replace(/[\n\r]/g, ""));
  }, S = () => {
    p.current = !0;
  }, C = () => {
    p.current = !1;
  }, x = ({
    keyCode: P
  }) => {
    p.current || (h.current = P);
  }, E = () => {
    c(g.trim());
  }, O = ({
    keyCode: P,
    ctrlKey: I,
    altKey: N,
    metaKey: z,
    shiftKey: L
  }) => {
    h.current !== P || p.current || I || N || z || L || (P === Mf.ENTER ? (E(), d == null || d()) : P === Mf.ESC && u());
  }, _ = () => {
    E();
  }, [R, T, D] = zv(t), A = de(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl",
    [`${t}-${f}`]: !!f
  }, r, T, D);
  return R(/* @__PURE__ */ m.createElement("div", {
    className: A,
    style: a
  }, /* @__PURE__ */ m.createElement(pP, {
    ref: y,
    maxLength: i,
    value: g,
    onChange: w,
    onKeyDown: x,
    onKeyUp: O,
    onCompositionStart: S,
    onCompositionEnd: C,
    onBlur: _,
    "aria-label": n,
    rows: 1,
    autoSize: s
  }), b !== null ? vv(b, {
    className: `${t}-edit-content-confirm`
  }) : null));
};
var ul, jf;
function TP() {
  return jf || (jf = 1, ul = function() {
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
  }), ul;
}
var dl, If;
function PP() {
  if (If) return dl;
  If = 1;
  var e = TP(), t = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, n = "Copy to clipboard: #{key}, Enter";
  function r(o) {
    var i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return o.replace(/#{\s*key\s*}/g, i);
  }
  function a(o, i) {
    var s, l, c, u, d, f, b = !1;
    i || (i = {}), s = i.debug || !1;
    try {
      c = e(), u = document.createRange(), d = document.getSelection(), f = document.createElement("span"), f.textContent = o, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(p) {
        if (p.stopPropagation(), i.format)
          if (p.preventDefault(), typeof p.clipboardData > "u") {
            s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var h = t[i.format] || t.default;
            window.clipboardData.setData(h, o);
          } else
            p.clipboardData.clearData(), p.clipboardData.setData(i.format, o);
        i.onCopy && (p.preventDefault(), i.onCopy(p.clipboardData));
      }), document.body.appendChild(f), u.selectNodeContents(f), d.addRange(u);
      var y = document.execCommand("copy");
      if (!y)
        throw new Error("copy command was unsuccessful");
      b = !0;
    } catch (p) {
      s && console.error("unable to copy using execCommand: ", p), s && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(i.format || "text", o), i.onCopy && i.onCopy(window.clipboardData), b = !0;
      } catch (h) {
        s && console.error("unable to copy using clipboardData: ", h), s && console.error("falling back to prompt"), l = r("message" in i ? i.message : n), window.prompt(l, o);
      }
    } finally {
      d && (typeof d.removeRange == "function" ? d.removeRange(u) : d.removeAllRanges()), f && document.body.removeChild(f), c();
    }
    return b;
  }
  return dl = a, dl;
}
var MP = PP();
const DP = /* @__PURE__ */ Bh(MP), $P = (e, t = !1) => t && e == null ? [] : Array.isArray(e) ? e : [e];
var NP = function(e, t, n, r) {
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
const kP = ({
  copyConfig: e,
  children: t
}) => {
  const [n, r] = m.useState(!1), [a, o] = m.useState(!1), i = m.useRef(null), s = () => {
    i.current && clearTimeout(i.current);
  }, l = {};
  e.format && (l.format = e.format), m.useEffect(() => s, []);
  const c = Ft((u) => NP(void 0, void 0, void 0, function* () {
    var d;
    u == null || u.preventDefault(), u == null || u.stopPropagation(), o(!0);
    try {
      const f = typeof e.text == "function" ? yield e.text() : e.text;
      DP(f || $P(t, !0).join("") || "", l), o(!1), r(!0), s(), i.current = setTimeout(() => {
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
function fl(e, t) {
  return m.useMemo(() => {
    const n = !!e;
    return [n, Object.assign(Object.assign({}, t), n && typeof e == "object" ? e : null)];
  }, [e]);
}
const AP = (e) => {
  const t = Ae(void 0);
  return bt(() => {
    t.current = e;
  }), t.current;
}, FP = (e, t, n) => ba(() => e === !0 ? {
  title: t ?? n
} : /* @__PURE__ */ Uf(e) ? {
  title: e
} : typeof e == "object" ? Object.assign({
  title: t ?? n
}, e) : {
  title: e
}, [e, t, n]);
var jP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Hv = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    prefixCls: n,
    component: r = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: l,
    style: c
  } = e, u = jP(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: d,
    direction: f,
    className: b,
    style: y
  } = Ro("typography"), p = l ?? f, h = i ? To(t, i) : t, g = d("typography", n);
  process.env.NODE_ENV !== "production" && bn("Typography").deprecated(!i, "setContentRef", "ref");
  const [v, w, S] = zv(g), C = de(g, b, {
    [`${g}-rtl`]: p === "rtl"
  }, a, o, w, S), x = Object.assign(Object.assign({}, y), c);
  return v(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ m.createElement(r, Object.assign({
      className: C,
      style: x,
      ref: h
    }, u), s)
  );
});
process.env.NODE_ENV !== "production" && (Hv.displayName = "Typography");
var IP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, LP = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: IP
  }));
}, Bv = /* @__PURE__ */ m.forwardRef(LP);
process.env.NODE_ENV !== "production" && (Bv.displayName = "CheckOutlined");
var VP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, zP = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: VP
  }));
}, Wv = /* @__PURE__ */ m.forwardRef(zP);
process.env.NODE_ENV !== "production" && (Wv.displayName = "CopyOutlined");
var HP = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, BP = function(t, n) {
  return /* @__PURE__ */ m.createElement(on, qe({}, t, {
    ref: n,
    icon: HP
  }));
}, Uv = /* @__PURE__ */ m.forwardRef(BP);
process.env.NODE_ENV !== "production" && (Uv.displayName = "LoadingOutlined");
function Lf(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function hl(e, t, n) {
  return e === !0 || e === void 0 ? t : e || n && t;
}
function WP(e) {
  const t = document.createElement("em");
  e.appendChild(t), process.env.NODE_ENV !== "production" && (t.className = "ant-typography-css-ellipsis-content-measure");
  const n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
  return e.removeChild(t), // Horizontal out of range
  n.left > r.left || r.right > n.right || // Vertical out of range
  n.top > r.top || r.bottom > n.bottom;
}
const Du = (e) => ["string", "number"].includes(typeof e), UP = ({
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
  const c = Lf(a), u = Lf(o), {
    copied: d,
    copy: f
  } = n ?? {}, b = t ? d : f, y = hl(c[t ? 1 : 0], b), p = typeof y == "string" ? y : b;
  return /* @__PURE__ */ m.createElement(No, {
    title: y
  }, /* @__PURE__ */ m.createElement("button", {
    type: "button",
    className: de(`${e}-copy`, {
      [`${e}-copy-success`]: t,
      [`${e}-copy-icon-only`]: r
    }),
    onClick: s,
    "aria-label": p,
    tabIndex: i
  }, t ? hl(u[1], /* @__PURE__ */ m.createElement(Bv, null), !0) : hl(u[0], l ? /* @__PURE__ */ m.createElement(Uv, null) : /* @__PURE__ */ m.createElement(Wv, null), !0)));
}, li = /* @__PURE__ */ m.forwardRef(({
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
}), YP = (e) => e.reduce((t, n) => t + (Du(n) ? String(n).length : 1), 0);
function Vf(e, t) {
  let n = 0;
  const r = [];
  for (let a = 0; a < e.length; a += 1) {
    if (n === t)
      return r;
    const o = e[a], s = Du(o) ? String(o).length : 1, l = n + s;
    if (l > t) {
      const c = t - n;
      return r.push(String(o).slice(0, c)), r;
    }
    r.push(o), n = l;
  }
  return e;
}
const ml = 0, gl = 1, vl = 2, pl = 3, zf = 4, ci = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function qP(e) {
  const {
    enableMeasure: t,
    width: n,
    text: r,
    children: a,
    rows: o,
    expanded: i,
    miscDeps: s,
    onEllipsis: l
  } = e, c = m.useMemo(() => Dr(r), [r]), u = m.useMemo(() => YP(c), [r]), d = m.useMemo(() => a(c, !1), [r]), [f, b] = m.useState(null), y = m.useRef(null), p = m.useRef(null), h = m.useRef(null), g = m.useRef(null), v = m.useRef(null), [w, S] = m.useState(!1), [C, x] = m.useState(ml), [E, O] = m.useState(0), [_, R] = m.useState(null);
  at(() => {
    x(t && n && u ? gl : ml);
  }, [n, r, o, t, c]), at(() => {
    var P, I, N, z;
    if (C === gl) {
      x(vl);
      const L = p.current && getComputedStyle(p.current).whiteSpace;
      R(L);
    } else if (C === vl) {
      const L = !!(!((P = h.current) === null || P === void 0) && P.isExceed());
      x(L ? pl : zf), b(L ? [0, u] : null), S(L);
      const U = ((I = h.current) === null || I === void 0 ? void 0 : I.getHeight()) || 0, X = o === 1 ? 0 : ((N = g.current) === null || N === void 0 ? void 0 : N.getHeight()) || 0, $ = ((z = v.current) === null || z === void 0 ? void 0 : z.getHeight()) || 0, V = Math.max(
        U,
        // height of rows with ellipsis
        X + $
      );
      O(V + 1), l(L);
    }
  }, [C]);
  const T = f ? Math.ceil((f[0] + f[1]) / 2) : 0;
  at(() => {
    var P;
    const [I, N] = f || [0, 0];
    if (I !== N) {
      const L = (((P = y.current) === null || P === void 0 ? void 0 : P.getHeight()) || 0) > E;
      let U = T;
      N - I === 1 && (U = L ? I : N), b(L ? [I, U] : [U, N]);
    }
  }, [f, T]);
  const D = m.useMemo(() => {
    if (!t)
      return a(c, !1);
    if (C !== pl || !f || f[0] !== f[1]) {
      const P = a(c, !1);
      return [zf, ml].includes(C) ? P : /* @__PURE__ */ m.createElement("span", {
        style: Object.assign(Object.assign({}, ci), {
          WebkitLineClamp: o
        })
      }, P);
    }
    return a(i ? c : Vf(c, f[0]), w);
  }, [i, C, f, c].concat(fe(s))), A = {
    width: n,
    margin: 0,
    padding: 0,
    whiteSpace: _ === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ m.createElement(m.Fragment, null, D, C === vl && /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(li, {
    style: Object.assign(Object.assign(Object.assign({}, A), ci), {
      WebkitLineClamp: o
    }),
    ref: h
  }, d), /* @__PURE__ */ m.createElement(li, {
    style: Object.assign(Object.assign(Object.assign({}, A), ci), {
      WebkitLineClamp: o - 1
    }),
    ref: g
  }, d), /* @__PURE__ */ m.createElement(li, {
    style: Object.assign(Object.assign(Object.assign({}, A), ci), {
      WebkitLineClamp: 1
    }),
    ref: v
  }, a([], !0))), C === pl && f && f[0] !== f[1] && /* @__PURE__ */ m.createElement(li, {
    style: Object.assign(Object.assign({}, A), {
      top: 400
    }),
    ref: y
  }, a(Vf(c, T), !0)), C === gl && /* @__PURE__ */ m.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: p
  }));
}
const Yv = ({
  enableEllipsis: e,
  isEllipsis: t,
  children: n,
  tooltipProps: r
}) => !(r != null && r.title) || !e ? n : /* @__PURE__ */ m.createElement(No, Object.assign({
  open: t ? void 0 : !1
}, r), n);
process.env.NODE_ENV !== "production" && (Yv.displayName = "EllipsisTooltip");
var GP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function KP({
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
const XP = "...", Hf = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"], ZP = /* @__PURE__ */ m.forwardRef((e, t) => {
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
    title: b
  } = e, y = GP(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: p,
    direction: h
  } = m.useContext(Ut), [g] = z1("Text"), v = m.useRef(null), w = m.useRef(null), S = p("typography", r), C = ds(y, Hf), [x, E] = fl(u), [O, _] = Mr(!1, {
    value: E.editing
  }), {
    triggerType: R = ["icon"]
  } = E, T = (ue) => {
    var ye;
    ue && ((ye = E.onStart) === null || ye === void 0 || ye.call(E)), _(ue);
  }, D = AP(O);
  at(() => {
    var ue;
    !O && D && ((ue = w.current) === null || ue === void 0 || ue.focus());
  }, [O]);
  const A = (ue) => {
    ue == null || ue.preventDefault(), T(!0);
  }, P = (ue) => {
    var ye;
    (ye = E.onChange) === null || ye === void 0 || ye.call(E, ue), T(!1);
  }, I = () => {
    var ue;
    (ue = E.onCancel) === null || ue === void 0 || ue.call(E), T(!1);
  }, [N, z] = fl(d), {
    copied: L,
    copyLoading: U,
    onClick: X
  } = kP({
    copyConfig: z,
    children: l
  }), [$, V] = m.useState(!1), [B, Y] = m.useState(!1), [se, J] = m.useState(!1), [Q, te] = m.useState(!1), [ce, ve] = m.useState(!0), [be, ie] = fl(c, {
    expandable: !1,
    symbol: (ue) => ue ? g == null ? void 0 : g.collapse : g == null ? void 0 : g.expand
  }), [Ce, q] = Mr(ie.defaultExpanded || !1, {
    value: ie.expanded
  }), le = be && (!Ce || ie.expandable === "collapsible"), {
    rows: H = 1
  } = ie, ae = m.useMemo(() => (
    // Disable ellipsis
    le && // Provide suffix
    (ie.suffix !== void 0 || ie.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    ie.expandable || x || N)
  ), [le, ie, x, N]);
  at(() => {
    be && !ae && (V(tf("webkitLineClamp")), Y(tf("textOverflow")));
  }, [ae, be]);
  const [me, pe] = m.useState(le), Te = m.useMemo(() => ae ? !1 : H === 1 ? B : $, [ae, B, $]);
  at(() => {
    pe(Te && le);
  }, [Te, le]);
  const ge = le && (me ? Q : se), _e = le && H === 1 && me, xe = le && H > 1 && me, ne = (ue, ye) => {
    var ct;
    q(ye.expanded), (ct = ie.onExpand) === null || ct === void 0 || ct.call(ie, ue, ye);
  }, [Pe, Ie] = m.useState(0), vt = ({
    offsetWidth: ue
  }) => {
    Ie(ue);
  }, Ke = (ue) => {
    var ye;
    J(ue), se !== ue && ((ye = ie.onEllipsis) === null || ye === void 0 || ye.call(ie, ue));
  };
  m.useEffect(() => {
    const ue = v.current;
    if (be && me && ue) {
      const ye = WP(ue);
      Q !== ye && te(ye);
    }
  }, [be, me, l, xe, ce, Pe]), m.useEffect(() => {
    const ue = v.current;
    if (typeof IntersectionObserver > "u" || !ue || !me || !le)
      return;
    const ye = new IntersectionObserver(() => {
      ve(!!ue.offsetParent);
    });
    return ye.observe(ue), () => {
      ye.disconnect();
    };
  }, [me, le]);
  const Je = FP(ie.tooltip, E.text, l), St = m.useMemo(() => {
    if (!(!be || me))
      return [E.text, l, b, Je.title].find(Du);
  }, [be, me, b, Je.title, ge]);
  if (O)
    return /* @__PURE__ */ m.createElement(RP, {
      value: (n = E.text) !== null && n !== void 0 ? n : typeof l == "string" ? l : "",
      onSave: P,
      onCancel: I,
      onEnd: E.onEnd,
      prefixCls: S,
      className: a,
      style: o,
      direction: h,
      component: f,
      maxLength: E.maxLength,
      autoSize: E.autoSize,
      enterIcon: E.enterIcon
    });
  const Be = () => {
    const {
      expandable: ue,
      symbol: ye
    } = ie;
    return ue ? /* @__PURE__ */ m.createElement("button", {
      type: "button",
      key: "expand",
      className: `${S}-${Ce ? "collapse" : "expand"}`,
      onClick: (ct) => ne(ct, {
        expanded: !Ce
      }),
      "aria-label": Ce ? g.collapse : g == null ? void 0 : g.expand
    }, typeof ye == "function" ? ye(Ce) : ye) : null;
  }, Le = () => {
    if (!x)
      return;
    const {
      icon: ue,
      tooltip: ye,
      tabIndex: ct
    } = E, $n = Dr(ye)[0] || (g == null ? void 0 : g.edit), fr = typeof $n == "string" ? $n : "";
    return R.includes("icon") ? /* @__PURE__ */ m.createElement(No, {
      key: "edit",
      title: ye === !1 ? "" : $n
    }, /* @__PURE__ */ m.createElement("button", {
      type: "button",
      ref: w,
      className: `${S}-edit`,
      onClick: A,
      "aria-label": fr,
      tabIndex: ct
    }, ue || /* @__PURE__ */ m.createElement(Vg, {
      role: "button"
    }))) : null;
  }, $e = () => N ? /* @__PURE__ */ m.createElement(UP, Object.assign({
    key: "copy"
  }, z, {
    prefixCls: S,
    copied: L,
    locale: g,
    onCopy: X,
    loading: U,
    iconOnly: l == null
  })) : null, Ee = (ue) => [ue && Be(), Le(), $e()], Qe = (ue) => [ue && !Ce && /* @__PURE__ */ m.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, XP), ie.suffix, Ee(ue)];
  return /* @__PURE__ */ m.createElement(Ma, {
    onResize: vt,
    disabled: !le
  }, (ue) => /* @__PURE__ */ m.createElement(Yv, {
    tooltipProps: Je,
    enableEllipsis: le,
    isEllipsis: ge
  }, /* @__PURE__ */ m.createElement(Hv, Object.assign({
    className: de({
      [`${S}-${i}`]: i,
      [`${S}-disabled`]: s,
      [`${S}-ellipsis`]: be,
      [`${S}-ellipsis-single-line`]: _e,
      [`${S}-ellipsis-multiple-line`]: xe
    }, a),
    prefixCls: r,
    style: Object.assign(Object.assign({}, o), {
      WebkitLineClamp: xe ? H : void 0
    }),
    component: f,
    ref: To(ue, v, t),
    direction: h,
    onClick: R.includes("text") ? A : void 0,
    "aria-label": St == null ? void 0 : St.toString(),
    title: b
  }, C), /* @__PURE__ */ m.createElement(qP, {
    enableMeasure: le && !me,
    text: l,
    rows: H,
    width: Pe,
    onEllipsis: Ke,
    expanded: Ce,
    miscDeps: [L, Ce, U, x, N, g].concat(fe(Hf.map((ye) => e[ye])))
  }, (ye, ct) => KP(e, /* @__PURE__ */ m.createElement(m.Fragment, null, ye.length > 0 && ct && !Ce && St ? /* @__PURE__ */ m.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, ye) : ye, Qe(ct)))))));
});
var JP = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Bf = [1, 2, 3, 4, 5], QP = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    level: n = 1,
    children: r
  } = e, a = JP(e, ["level", "children"]);
  if (process.env.NODE_ENV !== "production") {
    const i = bn("Typography.Title");
    process.env.NODE_ENV !== "production" && i(Bf.includes(n), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  const o = Bf.includes(n) ? `h${n}` : "h1";
  return /* @__PURE__ */ m.createElement(ZP, Object.assign({
    ref: t
  }, a, {
    component: o
  }), r);
}), eM = (e) => {
  const { Search: t } = di;
  return /* @__PURE__ */ j.jsxs(yl, { align: "center", wrap: "wrap", gap: 12, children: [
    e.hasActionBack && /* @__PURE__ */ j.jsx(Rn, { title: "Back", children: /* @__PURE__ */ j.jsx(
      lt,
      {
        type: "link",
        shape: "circle",
        ghost: !0,
        size: "large",
        icon: /* @__PURE__ */ j.jsx(fp, {}),
        onClick: e.onBackClick,
        style: { color: "#000" }
      }
    ) }),
    /* @__PURE__ */ j.jsx(
      QP,
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
    e.hasActionAdd && /* @__PURE__ */ j.jsx(Rn, { title: "Add", children: /* @__PURE__ */ j.jsx(
      lt,
      {
        type: "primary",
        shape: "circle",
        icon: /* @__PURE__ */ j.jsx(hp, {}),
        onClick: e.onAddClick
      }
    ) }),
    e.hasSearchBar && /* @__PURE__ */ j.jsxs(
      yl,
      {
        justify: "flex-end",
        align: "center",
        gap: 12,
        wrap: "wrap",
        style: { flexGrow: 1, minWidth: "min-content" },
        children: [
          e.hasDownloadButton && /* @__PURE__ */ j.jsx(
            lt,
            {
              type: "primary",
              size: "large",
              style: { minWidth: 140, maxWidth: 200 },
              onClick: e.onDownloadClick,
              loading: e.isDownloading,
              icon: /* @__PURE__ */ j.jsx(Au, {}),
              children: e.isDownloading ? "Downloading..." : e.downloadText || "Download"
            }
          ),
          e.hasSecondaryDownloadButton && /* @__PURE__ */ j.jsx(
            lt,
            {
              type: "primary",
              size: "large",
              style: { minWidth: 140, maxWidth: 200 },
              onClick: e.onSecondaryDownloadClick,
              loading: e.isSecondaryDownloading,
              icon: /* @__PURE__ */ j.jsx(Au, {}),
              children: e.isSecondaryDownloading ? "Downloading..." : e.secondaryDownloadText || "Download"
            }
          ),
          /* @__PURE__ */ j.jsx(
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
}, WM = (e) => {
  const { getRequest: t, getPostRequest: n, fetchRequest: r, notifyPostRequests: a } = Pr(), { openModal: o, closeModal: i } = Sm(), { authUser: s } = os(), l = Yf(), [c, u] = W.useState(null), { fetchRequests: d, filterRequestData: f } = Pr();
  s && e.requests && bt(() => {
    d(e.requests, !1);
  }, []);
  const b = t(e.tableRequestKey), y = b.isPaginated;
  y && !c && u(y);
  const p = (w = null) => {
    w || (w = {
      id: 0
    }), e.addModalId && e.addModalId !== e.detailsModalId && i(e.addModalId), e.onShowDetailsModal && e.onShowDetailsModal(w);
    const S = n(e.detailsModalId);
    S.errors = null, S.errorMessage = null, S.postData = structuredClone(w), a(), o(e.detailsModalId);
  }, h = () => {
    const w = e.addModalId || e.detailsModalId, S = {
      id: 0
    };
    e.addModalId && e.addModalId !== e.detailsModalId && i(e.detailsModalId), e.onShowDetailsModal && e.onShowDetailsModal(S);
    const C = n(w);
    C.errors = null, C.errorMessage = null, C.postData = structuredClone(S), a(), o(w);
  }, g = (w) => {
    if (w.length >= 2 || w.length == 0) {
      const S = t(e.tableRequestKey);
      S.queryText = w, r(S);
    }
    e.onSearch && e.onSearch(w);
  }, v = /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx(
      eM,
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
    /* @__PURE__ */ j.jsx(
      Wx,
      {
        headers: e.tableHeaders,
        columns: e.tableColumns,
        data: b.data,
        requestKey: e.tableRequestKey,
        pageSize: e.tablePageSize,
        customActionIcon: e.customActionIcon,
        customActionTooltip: e.customActionTooltip,
        marginTop: e.tableMarginTop,
        headerHeight: e.headerHeight,
        onRowEditClick: (w) => {
          p(w);
        },
        onRenderRowColor: e.onRenderRowColor,
        onRowClick: e.onRowClick,
        onRowCustomClick: e.onRowCustomClick,
        onRowDeleteClick: e.onRowDeleteClick
      }
    )
  ] });
  return /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    e.renderLayout ? e.renderLayout(v) : v,
    e.detailsModal && e.detailsModal,
    e.addModal && e.addModal
  ] });
}, { Text: Wf } = ta, UM = ({
  icon: e,
  title: t,
  description: n,
  onClick: r,
  color: a,
  gradientFrom: o,
  gradientTo: i,
  descriptionColor: s = "#8c8c8c"
}) => /* @__PURE__ */ j.jsx(
  Rc,
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
    children: /* @__PURE__ */ j.jsxs(
      Ja,
      {
        direction: "vertical",
        align: "center",
        style: { width: "100%" },
        children: [
          /* @__PURE__ */ j.jsx(
            "div",
            {
              style: {
                fontSize: "32px",
                color: a
              },
              children: e
            }
          ),
          /* @__PURE__ */ j.jsx(
            Wf,
            {
              style: {
                fontSize: "16px",
                fontWeight: 600,
                color: a
              },
              children: t
            }
          ),
          /* @__PURE__ */ j.jsx(
            Wf,
            {
              style: {
                fontSize: "12px",
                color: s
              },
              children: n
            }
          )
        ]
      }
    )
  }
), { Text: ui } = ta, YM = ({
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
  customActionTooltip: b,
  onRowCustomClick: y,
  mobileCardStyle: p
}) => {
  const h = cs(), g = (C) => {
    const x = [];
    return c && x.push(
      /* @__PURE__ */ j.jsx(
        lt,
        {
          type: h ? "primary" : "link",
          icon: /* @__PURE__ */ j.jsx(Ti, {}),
          onClick: () => c(C),
          ...h ? {} : { shape: "circle" },
          children: h ? "Edit" : ""
        },
        "edit"
      )
    ), y && x.push(
      /* @__PURE__ */ j.jsx(
        lt,
        {
          type: h ? "default" : "link",
          icon: f,
          onClick: () => y(C),
          ...h ? {} : { shape: "circle" },
          children: h ? b : ""
        },
        "custom"
      )
    ), u && x.push(
      /* @__PURE__ */ j.jsx(
        lt,
        {
          danger: !0,
          type: h ? "default" : "link",
          icon: /* @__PURE__ */ j.jsx(Oi, {}),
          onClick: () => u(C),
          ...h ? {} : { shape: "circle" },
          children: h ? "Delete" : ""
        },
        "delete"
      )
    ), d && x.push(
      /* @__PURE__ */ j.jsx(
        lt,
        {
          type: h ? "default" : "link",
          icon: /* @__PURE__ */ j.jsx(Ri, {}),
          onClick: () => d(C),
          ...h ? {} : { shape: "circle", style: { color: "#000" } },
          children: h ? "View" : ""
        },
        "view"
      )
    ), x;
  }, v = [...e];
  (c || u || d || y) && !h && v.push({
    title: "Actions",
    key: "actions",
    align: "center",
    render: (C, x) => /* @__PURE__ */ j.jsxs(Ja, { children: [
      c && /* @__PURE__ */ j.jsx(Rn, { title: "Edit", children: /* @__PURE__ */ j.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: /* @__PURE__ */ j.jsx(Ti, {}),
          onClick: () => c(x)
        }
      ) }),
      y && /* @__PURE__ */ j.jsx(Rn, { title: b, children: /* @__PURE__ */ j.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: f,
          onClick: () => y(x)
        }
      ) }),
      u && /* @__PURE__ */ j.jsx(Rn, { title: "Delete", children: /* @__PURE__ */ j.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: /* @__PURE__ */ j.jsx(Oi, {}),
          danger: !0,
          onClick: () => u(x)
        }
      ) }),
      d && /* @__PURE__ */ j.jsx(Rn, { title: "View", children: /* @__PURE__ */ j.jsx(
        lt,
        {
          type: "link",
          shape: "circle",
          icon: /* @__PURE__ */ j.jsx(Ri, {}),
          style: { color: "#000" },
          onClick: () => d(x)
        }
      ) })
    ] })
  });
  const S = (C, x) => {
    const E = g(C);
    return /* @__PURE__ */ j.jsxs(
      Rc,
      {
        style: {
          marginBottom: 12,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          ...p
        },
        children: [
          e.filter((O) => !O.hideOnMobile && O.dataIndex).map((O, _) => {
            const R = C[O.dataIndex], T = O.render ? O.render(R, C, x) : R ?? "-";
            return /* @__PURE__ */ j.jsxs(_i, { style: { marginBottom: 8 }, children: [
              /* @__PURE__ */ j.jsx(na, { span: 10, children: /* @__PURE__ */ j.jsxs(ui, { strong: !0, style: { color: "#1885FE" }, children: [
                O.title,
                ":"
              ] }) }),
              /* @__PURE__ */ j.jsx(na, { span: 14, children: typeof T == "string" || typeof T == "number" ? /* @__PURE__ */ j.jsx(ui, { children: T }) : T })
            ] }, _);
          }),
          E.length > 0 && /* @__PURE__ */ j.jsx(
            _i,
            {
              style: {
                marginTop: 12,
                paddingTop: 12,
                borderTop: "1px solid #f0f0f0"
              },
              children: /* @__PURE__ */ j.jsx(na, { span: 24, children: /* @__PURE__ */ j.jsx(Ja, { wrap: !0, children: E }) })
            }
          )
        ]
      },
      typeof n == "function" ? n(C) : C[n]
    );
  };
  return h ? /* @__PURE__ */ j.jsx(
    "div",
    {
      style: {
        maxHeight: (o == null ? void 0 : o.y) || "400px",
        overflowY: "auto"
      },
      children: a ? /* @__PURE__ */ j.jsx("div", { style: { textAlign: "center", padding: 20 }, children: /* @__PURE__ */ j.jsx(ui, { children: "Loading..." }) }) : t.length === 0 ? /* @__PURE__ */ j.jsx("div", { style: { textAlign: "center", padding: 20 }, children: /* @__PURE__ */ j.jsx(ui, { type: "secondary", children: "No data available" }) }) : t.map(
        (C, x) => S(C, x)
      )
    }
  ) : /* @__PURE__ */ j.jsx(
    Kf,
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
}, qM = (e) => {
  const t = cs(), n = e.options && e.options.map((r, a) => ({
    value: a,
    label: r.name
  }));
  return /* @__PURE__ */ j.jsxs(
    yl,
    {
      justify: "center",
      style: { width: "100%", padding: t ? "0 12px" : "0" },
      children: [
        /* @__PURE__ */ j.jsx(
          sp.Group,
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
        /* @__PURE__ */ j.jsx("style", { children: `
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
  Hx as AppInput,
  Bx as AppModal,
  Wx as AppTable,
  mM as AuthProvider,
  VM as BasePage,
  zM as DataInput,
  HM as Icon,
  BM as ModalData,
  jM as ModalProvider,
  AM as NotificationProvider,
  WM as Overview,
  eM as PageHeader,
  IM as ProtectedRoute,
  UM as QuickActionCard,
  FM as RequestProvider,
  YM as ResponsiveTable,
  qM as TabBar,
  fM as convertDMStoDecimal,
  hM as convertDecimaltoDMS,
  vw as defaultDateFormat,
  gw as defaultDateTimeFormat,
  pw as defaultTimeFormat,
  ww as formatDate,
  bw as formatDateTime,
  Ow as formatDecimal,
  xw as formatIsoDate,
  Sw as formatIsoDateTime,
  Cw as formatIsoDateTimeMilli,
  sM as formatIsoTime,
  dM as formatLocalIsoDate,
  uM as formatLocalIsoDateTime,
  Hh as formatNumber,
  lM as formatTime,
  _w as formatUtcIsoDate,
  cM as formatUtcIsoDateTime,
  Ew as formatUtcIsoDateTimeMilli,
  Zc as isoDateFormat,
  Xc as isoDateTimeFormat,
  zh as isoDateTimeMilliFormat,
  yw as isoTimeFormat,
  os as useAuthContext,
  cs as useIsMobile,
  Rw as useLocalStorage,
  Sm as useModalContext,
  ym as useNotificationContext,
  Pr as useRequestContext
};
