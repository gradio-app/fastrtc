var Hd = Object.defineProperty;
var jd = (e, t, r) => t in e ? Hd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var lt = (e, t, r) => jd(e, typeof t != "symbol" ? t + "" : t, r);
import { c as Yd, g as Gd, p as fr } from "./index-DeMSGuTm.js";
var $l = { exports: {} };
(function(e, t) {
  (function(r, i) {
    e.exports = i();
  })(Yd, function() {
    var r = 1e3, i = 6e4, n = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", h = "week", u = "month", f = "quarter", p = "year", g = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var L = ["th", "st", "nd", "rd"], T = A % 100;
      return "[" + A + (L[(T - 20) % 10] || L[T] || L[0]) + "]";
    } }, w = function(A, L, T) {
      var $ = String(A);
      return !$ || $.length >= L ? A : "" + Array(L + 1 - $.length).join(T) + A;
    }, S = { s: w, z: function(A) {
      var L = -A.utcOffset(), T = Math.abs(L), $ = Math.floor(T / 60), B = T % 60;
      return (L <= 0 ? "+" : "-") + w($, 2, "0") + ":" + w(B, 2, "0");
    }, m: function A(L, T) {
      if (L.date() < T.date()) return -A(T, L);
      var $ = 12 * (T.year() - L.year()) + (T.month() - L.month()), B = L.clone().add($, u), N = T - B < 0, G = L.clone().add($ + (N ? -1 : 1), u);
      return +(-($ + (T - B) / (N ? B - G : G - B)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: u, y: p, w: h, d: c, D: g, h: l, m: s, s: o, ms: a, Q: f }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, k = "en", C = {};
    C[k] = b;
    var _ = "$isDayjsObject", O = function(A) {
      return A instanceof P || !(!A || !A[_]);
    }, I = function A(L, T, $) {
      var B;
      if (!L) return k;
      if (typeof L == "string") {
        var N = L.toLowerCase();
        C[N] && (B = N), T && (C[N] = T, B = N);
        var G = L.split("-");
        if (!B && G.length > 1) return A(G[0]);
      } else {
        var tt = L.name;
        C[tt] = L, B = tt;
      }
      return !$ && B && (k = B), B || !$ && k;
    }, F = function(A, L) {
      if (O(A)) return A.clone();
      var T = typeof L == "object" ? L : {};
      return T.date = A, T.args = arguments, new P(T);
    }, M = S;
    M.l = I, M.i = O, M.w = function(A, L) {
      return F(A, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
    };
    var P = function() {
      function A(T) {
        this.$L = I(T.locale, null, !0), this.parse(T), this.$x = this.$x || T.x || {}, this[_] = !0;
      }
      var L = A.prototype;
      return L.parse = function(T) {
        this.$d = function($) {
          var B = $.date, N = $.utc;
          if (B === null) return /* @__PURE__ */ new Date(NaN);
          if (M.u(B)) return /* @__PURE__ */ new Date();
          if (B instanceof Date) return new Date(B);
          if (typeof B == "string" && !/Z$/i.test(B)) {
            var G = B.match(y);
            if (G) {
              var tt = G[2] - 1 || 0, K = (G[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(G[1], tt, G[3] || 1, G[4] || 0, G[5] || 0, G[6] || 0, K)) : new Date(G[1], tt, G[3] || 1, G[4] || 0, G[5] || 0, G[6] || 0, K);
            }
          }
          return new Date(B);
        }(T), this.init();
      }, L.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, L.$utils = function() {
        return M;
      }, L.isValid = function() {
        return this.$d.toString() !== m;
      }, L.isSame = function(T, $) {
        var B = F(T);
        return this.startOf($) <= B && B <= this.endOf($);
      }, L.isAfter = function(T, $) {
        return F(T) < this.startOf($);
      }, L.isBefore = function(T, $) {
        return this.endOf($) < F(T);
      }, L.$g = function(T, $, B) {
        return M.u(T) ? this[$] : this.set(B, T);
      }, L.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, L.valueOf = function() {
        return this.$d.getTime();
      }, L.startOf = function(T, $) {
        var B = this, N = !!M.u($) || $, G = M.p(T), tt = function(me, mt) {
          var ye = M.w(B.$u ? Date.UTC(B.$y, mt, me) : new Date(B.$y, mt, me), B);
          return N ? ye : ye.endOf(c);
        }, K = function(me, mt) {
          return M.w(B.toDate()[me].apply(B.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(mt)), B);
        }, it = this.$W, ot = this.$M, ct = this.$D, Pt = "set" + (this.$u ? "UTC" : "");
        switch (G) {
          case p:
            return N ? tt(1, 0) : tt(31, 11);
          case u:
            return N ? tt(1, ot) : tt(0, ot + 1);
          case h:
            var Ot = this.$locale().weekStart || 0, ge = (it < Ot ? it + 7 : it) - Ot;
            return tt(N ? ct - ge : ct + (6 - ge), ot);
          case c:
          case g:
            return K(Pt + "Hours", 0);
          case l:
            return K(Pt + "Minutes", 1);
          case s:
            return K(Pt + "Seconds", 2);
          case o:
            return K(Pt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, L.endOf = function(T) {
        return this.startOf(T, !1);
      }, L.$set = function(T, $) {
        var B, N = M.p(T), G = "set" + (this.$u ? "UTC" : ""), tt = (B = {}, B[c] = G + "Date", B[g] = G + "Date", B[u] = G + "Month", B[p] = G + "FullYear", B[l] = G + "Hours", B[s] = G + "Minutes", B[o] = G + "Seconds", B[a] = G + "Milliseconds", B)[N], K = N === c ? this.$D + ($ - this.$W) : $;
        if (N === u || N === p) {
          var it = this.clone().set(g, 1);
          it.$d[tt](K), it.init(), this.$d = it.set(g, Math.min(this.$D, it.daysInMonth())).$d;
        } else tt && this.$d[tt](K);
        return this.init(), this;
      }, L.set = function(T, $) {
        return this.clone().$set(T, $);
      }, L.get = function(T) {
        return this[M.p(T)]();
      }, L.add = function(T, $) {
        var B, N = this;
        T = Number(T);
        var G = M.p($), tt = function(ot) {
          var ct = F(N);
          return M.w(ct.date(ct.date() + Math.round(ot * T)), N);
        };
        if (G === u) return this.set(u, this.$M + T);
        if (G === p) return this.set(p, this.$y + T);
        if (G === c) return tt(1);
        if (G === h) return tt(7);
        var K = (B = {}, B[s] = i, B[l] = n, B[o] = r, B)[G] || 1, it = this.$d.getTime() + T * K;
        return M.w(it, this);
      }, L.subtract = function(T, $) {
        return this.add(-1 * T, $);
      }, L.format = function(T) {
        var $ = this, B = this.$locale();
        if (!this.isValid()) return B.invalidDate || m;
        var N = T || "YYYY-MM-DDTHH:mm:ssZ", G = M.z(this), tt = this.$H, K = this.$m, it = this.$M, ot = B.weekdays, ct = B.months, Pt = B.meridiem, Ot = function(mt, ye, Mr, bi) {
          return mt && (mt[ye] || mt($, N)) || Mr[ye].slice(0, bi);
        }, ge = function(mt) {
          return M.s(tt % 12 || 12, mt, "0");
        }, me = Pt || function(mt, ye, Mr) {
          var bi = mt < 12 ? "AM" : "PM";
          return Mr ? bi.toLowerCase() : bi;
        };
        return N.replace(x, function(mt, ye) {
          return ye || function(Mr) {
            switch (Mr) {
              case "YY":
                return String($.$y).slice(-2);
              case "YYYY":
                return M.s($.$y, 4, "0");
              case "M":
                return it + 1;
              case "MM":
                return M.s(it + 1, 2, "0");
              case "MMM":
                return Ot(B.monthsShort, it, ct, 3);
              case "MMMM":
                return Ot(ct, it);
              case "D":
                return $.$D;
              case "DD":
                return M.s($.$D, 2, "0");
              case "d":
                return String($.$W);
              case "dd":
                return Ot(B.weekdaysMin, $.$W, ot, 2);
              case "ddd":
                return Ot(B.weekdaysShort, $.$W, ot, 3);
              case "dddd":
                return ot[$.$W];
              case "H":
                return String(tt);
              case "HH":
                return M.s(tt, 2, "0");
              case "h":
                return ge(1);
              case "hh":
                return ge(2);
              case "a":
                return me(tt, K, !0);
              case "A":
                return me(tt, K, !1);
              case "m":
                return String(K);
              case "mm":
                return M.s(K, 2, "0");
              case "s":
                return String($.$s);
              case "ss":
                return M.s($.$s, 2, "0");
              case "SSS":
                return M.s($.$ms, 3, "0");
              case "Z":
                return G;
            }
            return null;
          }(mt) || G.replace(":", "");
        });
      }, L.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, L.diff = function(T, $, B) {
        var N, G = this, tt = M.p($), K = F(T), it = (K.utcOffset() - this.utcOffset()) * i, ot = this - K, ct = function() {
          return M.m(G, K);
        };
        switch (tt) {
          case p:
            N = ct() / 12;
            break;
          case u:
            N = ct();
            break;
          case f:
            N = ct() / 3;
            break;
          case h:
            N = (ot - it) / 6048e5;
            break;
          case c:
            N = (ot - it) / 864e5;
            break;
          case l:
            N = ot / n;
            break;
          case s:
            N = ot / i;
            break;
          case o:
            N = ot / r;
            break;
          default:
            N = ot;
        }
        return B ? N : M.a(N);
      }, L.daysInMonth = function() {
        return this.endOf(u).$D;
      }, L.$locale = function() {
        return C[this.$L];
      }, L.locale = function(T, $) {
        if (!T) return this.$L;
        var B = this.clone(), N = I(T, $, !0);
        return N && (B.$L = N), B;
      }, L.clone = function() {
        return M.w(this.$d, this);
      }, L.toDate = function() {
        return new Date(this.valueOf());
      }, L.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, L.toISOString = function() {
        return this.$d.toISOString();
      }, L.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), D = P.prototype;
    return F.prototype = D, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", u], ["$y", p], ["$D", g]].forEach(function(A) {
      D[A[1]] = function(L) {
        return this.$g(L, A[0], A[1]);
      };
    }), F.extend = function(A, L) {
      return A.$i || (A(L, P, F), A.$i = !0), F;
    }, F.locale = I, F.isDayjs = O, F.unix = function(A) {
      return F(1e3 * A);
    }, F.en = C[k], F.Ls = C, F.p = {}, F;
  });
})($l);
var Ud = $l.exports;
const Xd = /* @__PURE__ */ Gd(Ud), Mi = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n;
    switch (i) {
      case "r":
        return Mi.hue2rgb(a, n, e + 1 / 3) * 255;
      case "g":
        return Mi.hue2rgb(a, n, e) * 255;
      case "b":
        return Mi.hue2rgb(a, n, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const n = Math.max(e, t, r), a = Math.min(e, t, r), o = (n + a) / 2;
    if (i === "l")
      return o * 100;
    if (n === a)
      return 0;
    const s = n - a, l = o > 0.5 ? s / (2 - n - a) : s / (n + a);
    if (i === "s")
      return l * 100;
    switch (n) {
      case e:
        return ((t - r) / s + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / s + 2) * 60;
      case r:
        return ((e - t) / s + 4) * 60;
      default:
        return -1;
    }
  }
}, Vd = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, Zd = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, Q = {
  channel: Mi,
  lang: Vd,
  unit: Zd
}, xe = {};
for (let e = 0; e <= 255; e++)
  xe[e] = Q.unit.dec2hex(e);
const wt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class Kd {
  constructor() {
    this.type = wt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = wt.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class Qd {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new Kd();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = wt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: n } = t;
    r === void 0 && (t.h = Q.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = Q.channel.rgb2hsl(t, "s")), n === void 0 && (t.l = Q.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: n } = t;
    r === void 0 && (t.r = Q.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = Q.channel.hsl2rgb(t, "g")), n === void 0 && (t.b = Q.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is(wt.HSL) && r !== void 0 ? r : (this._ensureHSL(), Q.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is(wt.HSL) && r !== void 0 ? r : (this._ensureHSL(), Q.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is(wt.HSL) && r !== void 0 ? r : (this._ensureHSL(), Q.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is(wt.RGB) && r !== void 0 ? r : (this._ensureRGB(), Q.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is(wt.RGB) && r !== void 0 ? r : (this._ensureRGB(), Q.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is(wt.RGB) && r !== void 0 ? r : (this._ensureRGB(), Q.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set(wt.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set(wt.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set(wt.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set(wt.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set(wt.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set(wt.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const vn = new Qd({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), er = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(er.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), n = r.length, a = n % 4 === 0, o = n > 4, s = o ? 1 : 17, l = o ? 8 : 4, c = a ? 0 : -1, h = o ? 255 : 15;
    return vn.set({
      r: (i >> l * (c + 3) & h) * s,
      g: (i >> l * (c + 2) & h) * s,
      b: (i >> l * (c + 1) & h) * s,
      a: a ? (i & h) * s / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: n } = e;
    return n < 1 ? `#${xe[Math.round(t)]}${xe[Math.round(r)]}${xe[Math.round(i)]}${xe[Math.round(n * 255)]}` : `#${xe[Math.round(t)]}${xe[Math.round(r)]}${xe[Math.round(i)]}`;
  }
}, Fe = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(Fe.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return Q.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return Q.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return Q.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return Q.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(Fe.re);
    if (!r)
      return;
    const [, i, n, a, o, s] = r;
    return vn.set({
      h: Fe._hue2deg(i),
      s: Q.channel.clamp.s(parseFloat(n)),
      l: Q.channel.clamp.l(parseFloat(a)),
      a: o ? Q.channel.clamp.a(s ? parseFloat(o) / 100 : parseFloat(o)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: n } = e;
    return n < 1 ? `hsla(${Q.lang.round(t)}, ${Q.lang.round(r)}%, ${Q.lang.round(i)}%, ${n})` : `hsl(${Q.lang.round(t)}, ${Q.lang.round(r)}%, ${Q.lang.round(i)}%)`;
  }
}, jr = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = jr.colors[e];
    if (t)
      return er.parse(t);
  },
  stringify: (e) => {
    const t = er.stringify(e);
    for (const r in jr.colors)
      if (jr.colors[r] === t)
        return r;
  }
}, Ir = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(Ir.re);
    if (!r)
      return;
    const [, i, n, a, o, s, l, c, h] = r;
    return vn.set({
      r: Q.channel.clamp.r(n ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: Q.channel.clamp.g(o ? parseFloat(a) * 2.55 : parseFloat(a)),
      b: Q.channel.clamp.b(l ? parseFloat(s) * 2.55 : parseFloat(s)),
      a: c ? Q.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: n } = e;
    return n < 1 ? `rgba(${Q.lang.round(t)}, ${Q.lang.round(r)}, ${Q.lang.round(i)}, ${Q.lang.round(n)})` : `rgb(${Q.lang.round(t)}, ${Q.lang.round(r)}, ${Q.lang.round(i)})`;
  }
}, Jt = {
  /* VARIABLES */
  format: {
    keyword: jr,
    hex: er,
    rgb: Ir,
    rgba: Ir,
    hsl: Fe,
    hsla: Fe
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = er.parse(e) || Ir.parse(e) || Fe.parse(e) || jr.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is(wt.HSL) || e.data.r === void 0 ? Fe.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? Ir.stringify(e) : er.stringify(e)
}, Fl = (e, t) => {
  const r = Jt.parse(e);
  for (const i in t)
    r[i] = Q.channel.clamp[i](t[i]);
  return Jt.stringify(r);
}, Yr = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return Fl(e, { a: t });
  const n = vn.set({
    r: Q.channel.clamp.r(e),
    g: Q.channel.clamp.g(t),
    b: Q.channel.clamp.b(r),
    a: Q.channel.clamp.a(i)
  });
  return Jt.stringify(n);
}, Jd = (e) => {
  const { r: t, g: r, b: i } = Jt.parse(e), n = 0.2126 * Q.channel.toLinear(t) + 0.7152 * Q.channel.toLinear(r) + 0.0722 * Q.channel.toLinear(i);
  return Q.lang.round(n);
}, tg = (e) => Jd(e) >= 0.5, ci = (e) => !tg(e), El = (e, t, r) => {
  const i = Jt.parse(e), n = i[t], a = Q.channel.clamp[t](n + r);
  return n !== a && (i[t] = a), Jt.stringify(i);
}, z = (e, t) => El(e, "l", t), X = (e, t) => El(e, "l", -t), v = (e, t) => {
  const r = Jt.parse(e), i = {};
  for (const n in t)
    t[n] && (i[n] = r[n] + t[n]);
  return Fl(e, i);
}, eg = (e, t, r = 50) => {
  const { r: i, g: n, b: a, a: o } = Jt.parse(e), { r: s, g: l, b: c, a: h } = Jt.parse(t), u = r / 100, f = u * 2 - 1, p = o - h, m = ((f * p === -1 ? f : (f + p) / (1 + f * p)) + 1) / 2, y = 1 - m, x = i * m + s * y, b = n * m + l * y, w = a * m + c * y, S = o * u + h * (1 - u);
  return Yr(x, b, w, S);
}, R = (e, t = 100) => {
  const r = Jt.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, eg(r, e, t);
};
var Ol = Object.defineProperty, d = (e, t) => Ol(e, "name", { value: t, configurable: !0 }), rg = (e, t) => {
  for (var r in t)
    Ol(e, r, { get: t[r], enumerable: !0 });
}, ie = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, E = {
  trace: /* @__PURE__ */ d((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ d((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ d((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ d((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ d((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ d((...e) => {
  }, "fatal")
}, ns = /* @__PURE__ */ d(function(e = "fatal") {
  let t = ie.fatal;
  typeof e == "string" ? e.toLowerCase() in ie && (t = ie[e]) : typeof e == "number" && (t = e), E.trace = () => {
  }, E.debug = () => {
  }, E.info = () => {
  }, E.warn = () => {
  }, E.error = () => {
  }, E.fatal = () => {
  }, t <= ie.fatal && (E.fatal = console.error ? console.error.bind(console, Nt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", Nt("FATAL"))), t <= ie.error && (E.error = console.error ? console.error.bind(console, Nt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", Nt("ERROR"))), t <= ie.warn && (E.warn = console.warn ? console.warn.bind(console, Nt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", Nt("WARN"))), t <= ie.info && (E.info = console.info ? console.info.bind(console, Nt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", Nt("INFO"))), t <= ie.debug && (E.debug = console.debug ? console.debug.bind(console, Nt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Nt("DEBUG"))), t <= ie.trace && (E.trace = console.debug ? console.debug.bind(console, Nt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Nt("TRACE")));
}, "setLogLevel"), Nt = /* @__PURE__ */ d((e) => `%c${Xd().format("ss.SSS")} : ${e} : `, "format"), Dl = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, Gr = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, ig = /\s*%%.*\n/gm, nr, Rl = (nr = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, d(nr, "UnknownDiagramError"), nr), pr = {}, as = /* @__PURE__ */ d(function(e, t) {
  e = e.replace(Dl, "").replace(Gr, "").replace(ig, `
`);
  for (const [r, { detector: i }] of Object.entries(pr))
    if (i(e, t))
      return r;
  throw new Rl(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), Il = /* @__PURE__ */ d((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    Pl(t, r, i);
}, "registerLazyLoadedDiagrams"), Pl = /* @__PURE__ */ d((e, t, r) => {
  pr[e] && E.warn(`Detector with key ${e} already exists. Overwriting.`), pr[e] = { detector: t, loader: r }, E.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), ng = /* @__PURE__ */ d((e) => pr[e].loader, "getDiagramLoader"), fa = /* @__PURE__ */ d((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const n = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((a) => fa(e, a, n)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((a) => {
    e.includes(a) || e.push(a);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((a) => {
    typeof t[a] == "object" && (e[a] === void 0 || typeof e[a] == "object") ? (e[a] === void 0 && (e[a] = Array.isArray(t[a]) ? [] : {}), e[a] = fa(e[a], t[a], { depth: r - 1, clobber: i })) : (i || typeof e[a] != "object" && typeof t[a] != "object") && (e[a] = t[a]);
  }), e);
}, "assignWithDepth"), Ct = fa, Sn = "#ffffff", Tn = "#f2f2f2", St = /* @__PURE__ */ d((e, t) => t ? v(e, { s: -40, l: 10 }) : v(e, { s: -40, l: -10 }), "mkBorder"), ar, ag = (ar = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, w, S, k, C;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || v(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || v(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || St(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || St(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || St(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || St(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || R(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || R(this.tertiaryColor), this.lineColor = this.lineColor || R(this.background), this.arrowheadColor = this.arrowheadColor || R(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? X(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || X(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || R(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || z(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || X(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || X(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || z(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || z(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || v(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || v(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || v(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || v(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || v(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || v(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || v(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || v(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || v(this.primaryColor, { h: 330 }), this.darkMode)
      for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
        this["cScale" + _] = X(this["cScale" + _], 75);
    else
      for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
        this["cScale" + _] = X(this["cScale" + _], 25);
    for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
      this["cScaleInv" + _] = this["cScaleInv" + _] || R(this["cScale" + _]);
    for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
      this.darkMode ? this["cScalePeer" + _] = this["cScalePeer" + _] || z(this["cScale" + _], 10) : this["cScalePeer" + _] = this["cScalePeer" + _] || X(this["cScale" + _], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
      this["cScaleLabel" + _] = this["cScaleLabel" + _] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let _ = 0; _ < 5; _++)
      this["surface" + _] = this["surface" + _] || v(this.mainBkg, { h: 180, s: -15, l: t * (5 + _ * 3) }), this["surfacePeer" + _] = this["surfacePeer" + _] || v(this.mainBkg, { h: 180, s: -15, l: t * (8 + _ * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || v(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || v(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || v(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || v(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || v(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || v(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || v(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || v(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || v(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || v(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || v(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || v(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || v(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || v(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || v(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
      axisColor: ((r = this.radar) == null ? void 0 : r.axisColor) || this.lineColor,
      axisStrokeWidth: ((i = this.radar) == null ? void 0 : i.axisStrokeWidth) || 2,
      axisLabelFontSize: ((n = this.radar) == null ? void 0 : n.axisLabelFontSize) || 12,
      curveOpacity: ((a = this.radar) == null ? void 0 : a.curveOpacity) || 0.5,
      curveStrokeWidth: ((o = this.radar) == null ? void 0 : o.curveStrokeWidth) || 2,
      graticuleColor: ((s = this.radar) == null ? void 0 : s.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((l = this.radar) == null ? void 0 : l.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((c = this.radar) == null ? void 0 : c.graticuleOpacity) || 0.3,
      legendBoxSize: ((h = this.radar) == null ? void 0 : h.legendBoxSize) || 12,
      legendFontSize: ((u = this.radar) == null ? void 0 : u.legendFontSize) || 12
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || v(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || v(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || v(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || v(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || v(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || v(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? z(this.quadrant1Fill) : X(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((f = this.xyChart) == null ? void 0 : f.backgroundColor) || this.background,
      titleColor: ((p = this.xyChart) == null ? void 0 : p.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((g = this.xyChart) == null ? void 0 : g.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((y = this.xyChart) == null ? void 0 : y.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((x = this.xyChart) == null ? void 0 : x.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((w = this.xyChart) == null ? void 0 : w.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((S = this.xyChart) == null ? void 0 : S.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((k = this.xyChart) == null ? void 0 : k.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((C = this.xyChart) == null ? void 0 : C.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? X(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || v(this.primaryColor, { h: -30 }), this.git4 = this.git4 || v(this.primaryColor, { h: -60 }), this.git5 = this.git5 || v(this.primaryColor, { h: -90 }), this.git6 = this.git6 || v(this.primaryColor, { h: 60 }), this.git7 = this.git7 || v(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = z(this.git0, 25), this.git1 = z(this.git1, 25), this.git2 = z(this.git2, 25), this.git3 = z(this.git3, 25), this.git4 = z(this.git4, 25), this.git5 = z(this.git5, 25), this.git6 = z(this.git6, 25), this.git7 = z(this.git7, 25)) : (this.git0 = X(this.git0, 25), this.git1 = X(this.git1, 25), this.git2 = X(this.git2, 25), this.git3 = X(this.git3, 25), this.git4 = X(this.git4, 25), this.git5 = X(this.git5, 25), this.git6 = X(this.git6, 25), this.git7 = X(this.git7, 25)), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(ar, "Theme"), ar), sg = /* @__PURE__ */ d((e) => {
  const t = new ag();
  return t.calculate(e), t;
}, "getThemeVariables"), sr, og = (sr = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = z(this.primaryColor, 16), this.tertiaryColor = v(this.primaryColor, { h: -160 }), this.primaryBorderColor = R(this.background), this.secondaryBorderColor = St(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = St(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.tertiaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = z(R("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = Yr(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = X("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = X(this.sectionBkgColor, 10), this.taskBorderColor = Yr(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Yr(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || z(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || X(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, w, S, k;
    this.secondBkg = z(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = z(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = z(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = v(this.primaryColor, { h: 64 }), this.fillType3 = v(this.secondaryColor, { h: 64 }), this.fillType4 = v(this.primaryColor, { h: -64 }), this.fillType5 = v(this.secondaryColor, { h: -64 }), this.fillType6 = v(this.primaryColor, { h: 128 }), this.fillType7 = v(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || v(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || v(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || v(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || v(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || v(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || v(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || v(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || v(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || v(this.primaryColor, { h: 330 });
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || R(this["cScale" + C]);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScalePeer" + C] = this["cScalePeer" + C] || z(this["cScale" + C], 10);
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || v(this.mainBkg, { h: 30, s: -30, l: -(-10 + C * 4) }), this["surfacePeer" + C] = this["surfacePeer" + C] || v(this.mainBkg, { h: 30, s: -30, l: -(-7 + C * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["pie" + C] = this["cScale" + C];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || v(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || v(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || v(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || v(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || v(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || v(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? z(this.quadrant1Fill) : X(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((a = this.xyChart) == null ? void 0 : a.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((u = this.xyChart) == null ? void 0 : u.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: ((f = this.radar) == null ? void 0 : f.axisColor) || this.lineColor,
      axisStrokeWidth: ((p = this.radar) == null ? void 0 : p.axisStrokeWidth) || 2,
      axisLabelFontSize: ((g = this.radar) == null ? void 0 : g.axisLabelFontSize) || 12,
      curveOpacity: ((m = this.radar) == null ? void 0 : m.curveOpacity) || 0.5,
      curveStrokeWidth: ((y = this.radar) == null ? void 0 : y.curveStrokeWidth) || 2,
      graticuleColor: ((x = this.radar) == null ? void 0 : x.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((b = this.radar) == null ? void 0 : b.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((w = this.radar) == null ? void 0 : w.graticuleOpacity) || 0.3,
      legendBoxSize: ((S = this.radar) == null ? void 0 : S.legendBoxSize) || 12,
      legendFontSize: ((k = this.radar) == null ? void 0 : k.legendFontSize) || 12
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? X(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = z(this.secondaryColor, 20), this.git1 = z(this.pie2 || this.secondaryColor, 20), this.git2 = z(this.pie3 || this.tertiaryColor, 20), this.git3 = z(this.pie4 || v(this.primaryColor, { h: -30 }), 20), this.git4 = z(this.pie5 || v(this.primaryColor, { h: -60 }), 20), this.git5 = z(this.pie6 || v(this.primaryColor, { h: -90 }), 10), this.git6 = z(this.pie7 || v(this.primaryColor, { h: 60 }), 10), this.git7 = z(this.pie8 || v(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || R(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || R(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || z(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || z(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(sr, "Theme"), sr), lg = /* @__PURE__ */ d((e) => {
  const t = new og();
  return t.calculate(e), t;
}, "getThemeVariables"), or, cg = (or = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = v(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = v(this.primaryColor, { h: -160 }), this.primaryBorderColor = St(this.primaryColor, this.darkMode), this.secondaryBorderColor = St(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = St(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.tertiaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = Yr(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, w, S, k;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || v(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || v(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || v(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || v(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || v(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || v(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || v(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || v(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || v(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || X(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || X(this.tertiaryColor, 40);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScale" + C] = X(this["cScale" + C], 10), this["cScalePeer" + C] = this["cScalePeer" + C] || X(this["cScale" + C], 25);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || v(this["cScale" + C], { h: 180 });
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || v(this.mainBkg, { h: 30, l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || v(this.mainBkg, { h: 30, l: -(7 + C * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || R(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || R(this.labelTextColor);
      for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
        this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = z(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || z(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || z(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = v(this.primaryColor, { h: 64 }), this.fillType3 = v(this.secondaryColor, { h: 64 }), this.fillType4 = v(this.primaryColor, { h: -64 }), this.fillType5 = v(this.secondaryColor, { h: -64 }), this.fillType6 = v(this.primaryColor, { h: 128 }), this.fillType7 = v(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || v(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || v(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || v(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || v(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || v(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || v(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || v(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || v(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || v(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || v(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || v(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || v(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || v(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || v(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || v(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || v(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? z(this.quadrant1Fill) : X(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: ((t = this.radar) == null ? void 0 : t.axisColor) || this.lineColor,
      axisStrokeWidth: ((r = this.radar) == null ? void 0 : r.axisStrokeWidth) || 2,
      axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
      curveOpacity: ((n = this.radar) == null ? void 0 : n.curveOpacity) || 0.5,
      curveStrokeWidth: ((a = this.radar) == null ? void 0 : a.curveStrokeWidth) || 2,
      graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((l = this.radar) == null ? void 0 : l.graticuleOpacity) || 0.3,
      legendBoxSize: ((c = this.radar) == null ? void 0 : c.legendBoxSize) || 12,
      legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((u = this.xyChart) == null ? void 0 : u.backgroundColor) || this.background,
      titleColor: ((f = this.xyChart) == null ? void 0 : f.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((p = this.xyChart) == null ? void 0 : p.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((g = this.xyChart) == null ? void 0 : g.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((m = this.xyChart) == null ? void 0 : m.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((y = this.xyChart) == null ? void 0 : y.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((x = this.xyChart) == null ? void 0 : x.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((b = this.xyChart) == null ? void 0 : b.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((w = this.xyChart) == null ? void 0 : w.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((S = this.xyChart) == null ? void 0 : S.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((k = this.xyChart) == null ? void 0 : k.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || v(this.primaryColor, { h: -30 }), this.git4 = this.git4 || v(this.primaryColor, { h: -60 }), this.git5 = this.git5 || v(this.primaryColor, { h: -90 }), this.git6 = this.git6 || v(this.primaryColor, { h: 60 }), this.git7 = this.git7 || v(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = z(this.git0, 25), this.git1 = z(this.git1, 25), this.git2 = z(this.git2, 25), this.git3 = z(this.git3, 25), this.git4 = z(this.git4, 25), this.git5 = z(this.git5, 25), this.git6 = z(this.git6, 25), this.git7 = z(this.git7, 25)) : (this.git0 = X(this.git0, 25), this.git1 = X(this.git1, 25), this.git2 = X(this.git2, 25), this.git3 = X(this.git3, 25), this.git4 = X(this.git4, 25), this.git5 = X(this.git5, 25), this.git6 = X(this.git6, 25), this.git7 = X(this.git7, 25)), this.gitInv0 = this.gitInv0 || X(R(this.git0), 25), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || R(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || R(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(or, "Theme"), or), hg = /* @__PURE__ */ d((e) => {
  const t = new cg();
  return t.calculate(e), t;
}, "getThemeVariables"), lr, ug = (lr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = z("#cde498", 10), this.primaryBorderColor = St(this.primaryColor, this.darkMode), this.secondaryBorderColor = St(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = St(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.primaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, w, S, k;
    this.actorBorder = X(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || v(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || v(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || v(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || v(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || v(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || v(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || v(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || v(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || v(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || X(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || X(this.tertiaryColor, 40);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScale" + C] = X(this["cScale" + C], 10), this["cScalePeer" + C] = this["cScalePeer" + C] || X(this["cScale" + C], 25);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || v(this["cScale" + C], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || v(this.mainBkg, { h: 30, s: -30, l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || v(this.mainBkg, { h: 30, s: -30, l: -(8 + C * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || z(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || z(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = v(this.primaryColor, { h: 64 }), this.fillType3 = v(this.secondaryColor, { h: 64 }), this.fillType4 = v(this.primaryColor, { h: -64 }), this.fillType5 = v(this.secondaryColor, { h: -64 }), this.fillType6 = v(this.primaryColor, { h: 128 }), this.fillType7 = v(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || v(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || v(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || v(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || v(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || v(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || v(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || v(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || v(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || v(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || v(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || v(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || v(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || v(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || v(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || v(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? z(this.quadrant1Fill) : X(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: ((t = this.radar) == null ? void 0 : t.axisColor) || this.lineColor,
      axisStrokeWidth: ((r = this.radar) == null ? void 0 : r.axisStrokeWidth) || 2,
      axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
      curveOpacity: ((n = this.radar) == null ? void 0 : n.curveOpacity) || 0.5,
      curveStrokeWidth: ((a = this.radar) == null ? void 0 : a.curveStrokeWidth) || 2,
      graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((l = this.radar) == null ? void 0 : l.graticuleOpacity) || 0.3,
      legendBoxSize: ((c = this.radar) == null ? void 0 : c.legendBoxSize) || 12,
      legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((u = this.xyChart) == null ? void 0 : u.backgroundColor) || this.background,
      titleColor: ((f = this.xyChart) == null ? void 0 : f.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((p = this.xyChart) == null ? void 0 : p.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((g = this.xyChart) == null ? void 0 : g.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((m = this.xyChart) == null ? void 0 : m.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((y = this.xyChart) == null ? void 0 : y.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((x = this.xyChart) == null ? void 0 : x.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((b = this.xyChart) == null ? void 0 : b.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((w = this.xyChart) == null ? void 0 : w.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((S = this.xyChart) == null ? void 0 : S.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((k = this.xyChart) == null ? void 0 : k.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || v(this.primaryColor, { h: -30 }), this.git4 = this.git4 || v(this.primaryColor, { h: -60 }), this.git5 = this.git5 || v(this.primaryColor, { h: -90 }), this.git6 = this.git6 || v(this.primaryColor, { h: 60 }), this.git7 = this.git7 || v(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = z(this.git0, 25), this.git1 = z(this.git1, 25), this.git2 = z(this.git2, 25), this.git3 = z(this.git3, 25), this.git4 = z(this.git4, 25), this.git5 = z(this.git5, 25), this.git6 = z(this.git6, 25), this.git7 = z(this.git7, 25)) : (this.git0 = X(this.git0, 25), this.git1 = X(this.git1, 25), this.git2 = X(this.git2, 25), this.git3 = X(this.git3, 25), this.git4 = X(this.git4, 25), this.git5 = X(this.git5, 25), this.git6 = X(this.git6, 25), this.git7 = X(this.git7, 25)), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || R(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || R(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(lr, "Theme"), lr), fg = /* @__PURE__ */ d((e) => {
  const t = new ug();
  return t.calculate(e), t;
}, "getThemeVariables"), cr, pg = (cr = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = z(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = v(this.primaryColor, { h: -160 }), this.primaryBorderColor = St(this.primaryColor, this.darkMode), this.secondaryBorderColor = St(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = St(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.tertiaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || z(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, w, S, k;
    this.secondBkg = z(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = z(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || R(this["cScale" + C]);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this.darkMode ? this["cScalePeer" + C] = this["cScalePeer" + C] || z(this["cScale" + C], 10) : this["cScalePeer" + C] = this["cScalePeer" + C] || X(this["cScale" + C], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || v(this.mainBkg, { l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || v(this.mainBkg, { l: -(8 + C * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = z(this.contrast, 30), this.sectionBkgColor2 = z(this.contrast, 30), this.taskBorderColor = X(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = z(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = X(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = v(this.primaryColor, { h: 64 }), this.fillType3 = v(this.secondaryColor, { h: 64 }), this.fillType4 = v(this.primaryColor, { h: -64 }), this.fillType5 = v(this.secondaryColor, { h: -64 }), this.fillType6 = v(this.primaryColor, { h: 128 }), this.fillType7 = v(this.secondaryColor, { h: 128 });
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["pie" + C] = this["cScale" + C];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || v(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || v(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || v(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || v(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || v(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || v(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? z(this.quadrant1Fill) : X(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((a = this.xyChart) == null ? void 0 : a.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((u = this.xyChart) == null ? void 0 : u.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: ((f = this.radar) == null ? void 0 : f.axisColor) || this.lineColor,
      axisStrokeWidth: ((p = this.radar) == null ? void 0 : p.axisStrokeWidth) || 2,
      axisLabelFontSize: ((g = this.radar) == null ? void 0 : g.axisLabelFontSize) || 12,
      curveOpacity: ((m = this.radar) == null ? void 0 : m.curveOpacity) || 0.5,
      curveStrokeWidth: ((y = this.radar) == null ? void 0 : y.curveStrokeWidth) || 2,
      graticuleColor: ((x = this.radar) == null ? void 0 : x.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((b = this.radar) == null ? void 0 : b.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((w = this.radar) == null ? void 0 : w.graticuleOpacity) || 0.3,
      legendBoxSize: ((S = this.radar) == null ? void 0 : S.legendBoxSize) || 12,
      legendFontSize: ((k = this.radar) == null ? void 0 : k.legendFontSize) || 12
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = X(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || v(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || v(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || v(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || v(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || v(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(cr, "Theme"), cr), dg = /* @__PURE__ */ d((e) => {
  const t = new pg();
  return t.calculate(e), t;
}, "getThemeVariables"), le = {
  base: {
    getThemeVariables: sg
  },
  dark: {
    getThemeVariables: lg
  },
  default: {
    getThemeVariables: hg
  },
  forest: {
    getThemeVariables: fg
  },
  neutral: {
    getThemeVariables: dg
  }
}, ne = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, Nl = {
  ...ne,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: le.default.getThemeVariables(),
  sequence: {
    ...ne.sequence,
    messageFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: !1
  },
  gantt: {
    ...ne.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...ne.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    external_personFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...ne.pie,
    useWidth: 984
  },
  xyChart: {
    ...ne.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...ne.requirement,
    useWidth: void 0
  },
  packet: {
    ...ne.packet
  },
  radar: {
    ...ne.radar
  }
}, zl = /* @__PURE__ */ d((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...zl(e[i], "")] : [...r, t + i], []), "keyify"), gg = new Set(zl(Nl, "")), ql = Nl, Wi = /* @__PURE__ */ d((e) => {
  if (E.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => Wi(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (E.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !gg.has(t) || e[t] == null) {
        E.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        E.debug("sanitizing object", t), Wi(e[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (E.debug("sanitizing css option", t), e[t] = mg(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r != null && r.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    E.debug("After sanitization", e);
  }
}, "sanitizeDirective"), mg = /* @__PURE__ */ d((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), dr = Object.freeze(ql), At = Ct({}, dr), Wl, gr = [], Ur = Ct({}, dr), Bn = /* @__PURE__ */ d((e, t) => {
  let r = Ct({}, e), i = {};
  for (const n of t)
    Yl(n), i = Ct(i, n);
  if (r = Ct(r, i), i.theme && i.theme in le) {
    const n = Ct({}, Wl), a = Ct(
      n.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in le && (r.themeVariables = le[r.theme].getThemeVariables(a));
  }
  return Ur = r, Gl(Ur), Ur;
}, "updateCurrentConfig"), yg = /* @__PURE__ */ d((e) => (At = Ct({}, dr), At = Ct(At, e), e.theme && le[e.theme] && (At.themeVariables = le[e.theme].getThemeVariables(e.themeVariables)), Bn(At, gr), At), "setSiteConfig"), xg = /* @__PURE__ */ d((e) => {
  Wl = Ct({}, e);
}, "saveConfigFromInitialize"), bg = /* @__PURE__ */ d((e) => (At = Ct(At, e), Bn(At, gr), At), "updateSiteConfig"), Hl = /* @__PURE__ */ d(() => Ct({}, At), "getSiteConfig"), jl = /* @__PURE__ */ d((e) => (Gl(e), Ct(Ur, e), Et()), "setConfig"), Et = /* @__PURE__ */ d(() => Ct({}, Ur), "getConfig"), Yl = /* @__PURE__ */ d((e) => {
  e && (["secure", ...At.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (E.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Yl(e[t]);
  }));
}, "sanitize"), Cg = /* @__PURE__ */ d((e) => {
  var t;
  Wi(e), e.fontFamily && !((t = e.themeVariables) != null && t.fontFamily) && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), gr.push(e), Bn(At, gr);
}, "addDirective"), Hi = /* @__PURE__ */ d((e = At) => {
  gr = [], Bn(e, gr);
}, "reset"), wg = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, oo = {}, _g = /* @__PURE__ */ d((e) => {
  oo[e] || (E.warn(wg[e]), oo[e] = !0);
}, "issueWarning"), Gl = /* @__PURE__ */ d((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && _g("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), hi = /<br\s*\/?>/gi, kg = /* @__PURE__ */ d((e) => e ? Vl(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), vg = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (Ul(), e = !0);
  };
})();
function Ul() {
  const e = "data-temp-href-target";
  fr.addHook("beforeSanitizeAttributes", (t) => {
    t instanceof Element && t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), fr.addHook("afterSanitizeAttributes", (t) => {
    t instanceof Element && t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
d(Ul, "setupDompurifyHooks");
var Xl = /* @__PURE__ */ d((e) => (vg(), fr.sanitize(e)), "removeScript"), lo = /* @__PURE__ */ d((e, t) => {
  var r;
  if (((r = t.flowchart) == null ? void 0 : r.htmlLabels) !== !1) {
    const i = t.securityLevel;
    i === "antiscript" || i === "strict" ? e = Xl(e) : i !== "loose" && (e = Vl(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = Lg(e));
  }
  return e;
}, "sanitizeMore"), Ne = /* @__PURE__ */ d((e, t) => e && (t.dompurifyConfig ? e = fr.sanitize(lo(e, t), t.dompurifyConfig).toString() : e = fr.sanitize(lo(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), Sg = /* @__PURE__ */ d((e, t) => typeof e == "string" ? Ne(e, t) : e.flat().map((r) => Ne(r, t)), "sanitizeTextOrArray"), Tg = /* @__PURE__ */ d((e) => hi.test(e), "hasBreaks"), Bg = /* @__PURE__ */ d((e) => e.split(hi), "splitBreaks"), Lg = /* @__PURE__ */ d((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), Vl = /* @__PURE__ */ d((e) => e.replace(hi, "#br#"), "breakToPlaceholder"), Mg = /* @__PURE__ */ d((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = t.replaceAll(/\(/g, "\\("), t = t.replaceAll(/\)/g, "\\)")), t;
}, "getUrl"), gt = /* @__PURE__ */ d((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), Ag = /* @__PURE__ */ d(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), $g = /* @__PURE__ */ d(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), co = /* @__PURE__ */ d(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let n = t[i];
    if (n === "," && i > 0 && i + 1 < t.length) {
      const a = t[i - 1], o = t[i + 1];
      Fg(a, o) && (n = a + "," + o, i++, r.pop());
    }
    r.push(Eg(n));
  }
  return r.join("");
}, "parseGenericTypes"), pa = /* @__PURE__ */ d((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), Fg = /* @__PURE__ */ d((e, t) => {
  const r = pa(e, "~"), i = pa(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), Eg = /* @__PURE__ */ d((e) => {
  const t = pa(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let n = i.indexOf("~"), a = i.lastIndexOf("~");
  for (; n !== -1 && a !== -1 && n !== a; )
    i[n] = "<", i[a] = ">", n = i.indexOf("~"), a = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), ho = /* @__PURE__ */ d(() => window.MathMLElement !== void 0, "isMathMLSupported"), da = /\$\$(.*)\$\$/g, mr = /* @__PURE__ */ d((e) => {
  var t;
  return (((t = e.match(da)) == null ? void 0 : t.length) ?? 0) > 0;
}, "hasKatex"), dT = /* @__PURE__ */ d(async (e, t) => {
  e = await ss(e, t);
  const r = document.createElement("div");
  r.innerHTML = e, r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0";
  const i = document.querySelector("body");
  i == null || i.insertAdjacentElement("beforeend", r);
  const n = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), n;
}, "calculateMathMLDimensions"), ss = /* @__PURE__ */ d(async (e, t) => {
  if (!mr(e))
    return e;
  if (!(ho() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(da, "MathML is unsupported in this environment.");
  const { default: r } = await import("./index-DeMSGuTm.js").then((n) => n.k), i = t.forceLegacyMathML || !ho() && t.legacyMathML ? "htmlAndMathml" : "mathml";
  return e.split(hi).map(
    (n) => mr(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`
  ).join("").replace(
    da,
    (n, a) => r.renderToString(a, {
      throwOnError: !0,
      displayMode: !0,
      output: i
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
  );
}, "renderKatex"), kr = {
  getRows: kg,
  sanitizeText: Ne,
  sanitizeTextOrArray: Sg,
  hasBreaks: Tg,
  splitBreaks: Bg,
  lineBreakRegex: hi,
  removeScript: Xl,
  getUrl: Mg,
  evaluate: gt,
  getMax: Ag,
  getMin: $g
}, Og = /* @__PURE__ */ d(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), Dg = /* @__PURE__ */ d(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), Zl = /* @__PURE__ */ d(function(e, t, r, i) {
  const n = Dg(t, r, i);
  Og(e, n);
}, "configureSvgSize"), Rg = /* @__PURE__ */ d(function(e, t, r, i) {
  const n = t.node().getBBox(), a = n.width, o = n.height;
  E.info(`SVG bounds: ${a}x${o}`, n);
  let s = 0, l = 0;
  E.info(`Graph bounds: ${s}x${l}`, e), s = a + r * 2, l = o + r * 2, E.info(`Calculated bounds: ${s}x${l}`), Zl(t, l, s, i);
  const c = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), Ai = {}, Ig = /* @__PURE__ */ d((e, t, r) => {
  let i = "";
  return e in Ai && Ai[e] ? i = Ai[e](r) : E.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${t}
`;
}, "getStyles"), Pg = /* @__PURE__ */ d((e, t) => {
  t !== void 0 && (Ai[e] = t);
}, "addStylesForDiagram"), Ng = Ig, Kl = {};
rg(Kl, {
  clear: () => zg,
  getAccDescription: () => jg,
  getAccTitle: () => Wg,
  getDiagramTitle: () => Gg,
  setAccDescription: () => Hg,
  setAccTitle: () => qg,
  setDiagramTitle: () => Yg
});
var os = "", ls = "", cs = "", hs = /* @__PURE__ */ d((e) => Ne(e, Et()), "sanitizeText"), zg = /* @__PURE__ */ d(() => {
  os = "", cs = "", ls = "";
}, "clear"), qg = /* @__PURE__ */ d((e) => {
  os = hs(e).replace(/^\s+/g, "");
}, "setAccTitle"), Wg = /* @__PURE__ */ d(() => os, "getAccTitle"), Hg = /* @__PURE__ */ d((e) => {
  cs = hs(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), jg = /* @__PURE__ */ d(() => cs, "getAccDescription"), Yg = /* @__PURE__ */ d((e) => {
  ls = hs(e);
}, "setDiagramTitle"), Gg = /* @__PURE__ */ d(() => ls, "getDiagramTitle"), uo = E, Ug = ns, nt = Et, gT = jl, mT = dr, us = /* @__PURE__ */ d((e) => Ne(e, nt()), "sanitizeText"), Xg = Rg, Vg = /* @__PURE__ */ d(() => Kl, "getCommonDb"), ji = {}, Yi = /* @__PURE__ */ d((e, t, r) => {
  var i;
  ji[e] && uo.warn(`Diagram with id ${e} already registered. Overwriting.`), ji[e] = t, r && Pl(e, r), Pg(e, t.styles), (i = t.injectUtils) == null || i.call(
    t,
    uo,
    Ug,
    nt,
    us,
    Xg,
    Vg(),
    () => {
    }
  );
}, "registerDiagram"), ga = /* @__PURE__ */ d((e) => {
  if (e in ji)
    return ji[e];
  throw new Zg(e);
}, "getDiagram"), hr, Zg = (hr = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, d(hr, "DiagramNotFoundError"), hr);
function fs(e) {
  return typeof e > "u" || e === null;
}
d(fs, "isNothing");
function Ql(e) {
  return typeof e == "object" && e !== null;
}
d(Ql, "isObject");
function Jl(e) {
  return Array.isArray(e) ? e : fs(e) ? [] : [e];
}
d(Jl, "toArray");
function tc(e, t) {
  var r, i, n, a;
  if (t)
    for (a = Object.keys(t), r = 0, i = a.length; r < i; r += 1)
      n = a[r], e[n] = t[n];
  return e;
}
d(tc, "extend");
function ec(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
d(ec, "repeat");
function rc(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
d(rc, "isNegativeZero");
var Kg = fs, Qg = Ql, Jg = Jl, t0 = ec, e0 = rc, r0 = tc, dt = {
  isNothing: Kg,
  isObject: Qg,
  toArray: Jg,
  repeat: t0,
  isNegativeZero: e0,
  extend: r0
};
function ps(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
d(ps, "formatError");
function yr(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = ps(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
d(yr, "YAMLException$1");
yr.prototype = Object.create(Error.prototype);
yr.prototype.constructor = yr;
yr.prototype.toString = /* @__PURE__ */ d(function(t) {
  return this.name + ": " + ps(this, t);
}, "toString");
var $t = yr;
function $i(e, t, r, i, n) {
  var a = "", o = "", s = Math.floor(n / 2) - 1;
  return i - t > s && (a = " ... ", t = i - s + a.length), r - i > s && (o = " ...", r = i + s - o.length), {
    str: a + e.slice(t, r).replace(/\t/g, "→") + o,
    pos: i - t + a.length
    // relative position
  };
}
d($i, "getLine");
function Fi(e, t) {
  return dt.repeat(" ", t - e.length) + e;
}
d(Fi, "padStart");
function ic(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], n = [], a, o = -1; a = r.exec(e.buffer); )
    n.push(a.index), i.push(a.index + a[0].length), e.position <= a.index && o < 0 && (o = i.length - 2);
  o < 0 && (o = i.length - 1);
  var s = "", l, c, h = Math.min(e.line + t.linesAfter, n.length).toString().length, u = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(o - l < 0); l++)
    c = $i(
      e.buffer,
      i[o - l],
      n[o - l],
      e.position - (i[o] - i[o - l]),
      u
    ), s = dt.repeat(" ", t.indent) + Fi((e.line - l + 1).toString(), h) + " | " + c.str + `
` + s;
  for (c = $i(e.buffer, i[o], n[o], e.position, u), s += dt.repeat(" ", t.indent) + Fi((e.line + 1).toString(), h) + " | " + c.str + `
`, s += dt.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(o + l >= n.length); l++)
    c = $i(
      e.buffer,
      i[o + l],
      n[o + l],
      e.position - (i[o] - i[o + l]),
      u
    ), s += dt.repeat(" ", t.indent) + Fi((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return s.replace(/\n$/, "");
}
d(ic, "makeSnippet");
var i0 = ic, n0 = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], a0 = [
  "scalar",
  "sequence",
  "mapping"
];
function nc(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
d(nc, "compileStyleAliases");
function ac(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (n0.indexOf(r) === -1)
      throw new $t('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = nc(t.styleAliases || null), a0.indexOf(this.kind) === -1)
    throw new $t('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
d(ac, "Type$1");
var kt = ac;
function ma(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var n = r.length;
    r.forEach(function(a, o) {
      a.tag === i.tag && a.kind === i.kind && a.multi === i.multi && (n = o);
    }), r[n] = i;
  }), r;
}
d(ma, "compileList");
function sc() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(n) {
    n.multi ? (e.multi[n.kind].push(n), e.multi.fallback.push(n)) : e[n.kind][n.tag] = e.fallback[n.tag] = n;
  }
  for (d(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
d(sc, "compileMap");
function Gi(e) {
  return this.extend(e);
}
d(Gi, "Schema$1");
Gi.prototype.extend = /* @__PURE__ */ d(function(t) {
  var r = [], i = [];
  if (t instanceof kt)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new $t("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(a) {
    if (!(a instanceof kt))
      throw new $t("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (a.loadKind && a.loadKind !== "scalar")
      throw new $t("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (a.multi)
      throw new $t("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(a) {
    if (!(a instanceof kt))
      throw new $t("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Gi.prototype);
  return n.implicit = (this.implicit || []).concat(r), n.explicit = (this.explicit || []).concat(i), n.compiledImplicit = ma(n, "implicit"), n.compiledExplicit = ma(n, "explicit"), n.compiledTypeMap = sc(n.compiledImplicit, n.compiledExplicit), n;
}, "extend");
var s0 = Gi, o0 = new kt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ d(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), l0 = new kt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ d(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), c0 = new kt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ d(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), h0 = new s0({
  explicit: [
    o0,
    l0,
    c0
  ]
});
function oc(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
d(oc, "resolveYamlNull");
function lc() {
  return null;
}
d(lc, "constructYamlNull");
function cc(e) {
  return e === null;
}
d(cc, "isNull");
var u0 = new kt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: oc,
  construct: lc,
  predicate: cc,
  represent: {
    canonical: /* @__PURE__ */ d(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ d(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ d(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ d(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ d(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function hc(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
d(hc, "resolveYamlBoolean");
function uc(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
d(uc, "constructYamlBoolean");
function fc(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
d(fc, "isBoolean");
var f0 = new kt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: hc,
  construct: uc,
  predicate: fc,
  represent: {
    lowercase: /* @__PURE__ */ d(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ d(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ d(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function pc(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
d(pc, "isHexCode");
function dc(e) {
  return 48 <= e && e <= 55;
}
d(dc, "isOctCode");
function gc(e) {
  return 48 <= e && e <= 57;
}
d(gc, "isDecCode");
function mc(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, n;
  if (!t) return !1;
  if (n = e[r], (n === "-" || n === "+") && (n = e[++r]), n === "0") {
    if (r + 1 === t) return !0;
    if (n = e[++r], n === "b") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (n !== "0" && n !== "1") return !1;
          i = !0;
        }
      return i && n !== "_";
    }
    if (n === "x") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (!pc(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && n !== "_";
    }
    if (n === "o") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (!dc(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && n !== "_";
    }
  }
  if (n === "_") return !1;
  for (; r < t; r++)
    if (n = e[r], n !== "_") {
      if (!gc(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || n === "_");
}
d(mc, "resolveYamlInteger");
function yc(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
d(yc, "constructYamlInteger");
function xc(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !dt.isNegativeZero(e);
}
d(xc, "isInteger");
var p0 = new kt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: mc,
  construct: yc,
  predicate: xc,
  represent: {
    binary: /* @__PURE__ */ d(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ d(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ d(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ d(function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), d0 = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function bc(e) {
  return !(e === null || !d0.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
d(bc, "resolveYamlFloat");
function Cc(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
d(Cc, "constructYamlFloat");
var g0 = /^[-+]?[0-9]+e/;
function wc(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (dt.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), g0.test(r) ? r.replace("e", ".e") : r;
}
d(wc, "representYamlFloat");
function _c(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || dt.isNegativeZero(e));
}
d(_c, "isFloat");
var m0 = new kt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: bc,
  construct: Cc,
  predicate: _c,
  represent: wc,
  defaultStyle: "lowercase"
}), kc = h0.extend({
  implicit: [
    u0,
    f0,
    p0,
    m0
  ]
}), y0 = kc, vc = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Sc = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Tc(e) {
  return e === null ? !1 : vc.exec(e) !== null || Sc.exec(e) !== null;
}
d(Tc, "resolveYamlTimestamp");
function Bc(e) {
  var t, r, i, n, a, o, s, l = 0, c = null, h, u, f;
  if (t = vc.exec(e), t === null && (t = Sc.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, n = +t[3], !t[4])
    return new Date(Date.UTC(r, i, n));
  if (a = +t[4], o = +t[5], s = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], u = +(t[11] || 0), c = (h * 60 + u) * 6e4, t[9] === "-" && (c = -c)), f = new Date(Date.UTC(r, i, n, a, o, s, l)), c && f.setTime(f.getTime() - c), f;
}
d(Bc, "constructYamlTimestamp");
function Lc(e) {
  return e.toISOString();
}
d(Lc, "representYamlTimestamp");
var x0 = new kt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Tc,
  construct: Bc,
  instanceOf: Date,
  represent: Lc
});
function Mc(e) {
  return e === "<<" || e === null;
}
d(Mc, "resolveYamlMerge");
var b0 = new kt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Mc
}), ds = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Ac(e) {
  if (e === null) return !1;
  var t, r, i = 0, n = e.length, a = ds;
  for (r = 0; r < n; r++)
    if (t = a.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
d(Ac, "resolveYamlBinary");
function $c(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), n = i.length, a = ds, o = 0, s = [];
  for (t = 0; t < n; t++)
    t % 4 === 0 && t && (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)), o = o << 6 | a.indexOf(i.charAt(t));
  return r = n % 4 * 6, r === 0 ? (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)) : r === 18 ? (s.push(o >> 10 & 255), s.push(o >> 2 & 255)) : r === 12 && s.push(o >> 4 & 255), new Uint8Array(s);
}
d($c, "constructYamlBinary");
function Fc(e) {
  var t = "", r = 0, i, n, a = e.length, o = ds;
  for (i = 0; i < a; i++)
    i % 3 === 0 && i && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[i];
  return n = a % 3, n === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : n === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : n === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
d(Fc, "representYamlBinary");
function Ec(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
d(Ec, "isBinary");
var C0 = new kt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Ac,
  construct: $c,
  predicate: Ec,
  represent: Fc
}), w0 = Object.prototype.hasOwnProperty, _0 = Object.prototype.toString;
function Oc(e) {
  if (e === null) return !0;
  var t = [], r, i, n, a, o, s = e;
  for (r = 0, i = s.length; r < i; r += 1) {
    if (n = s[r], o = !1, _0.call(n) !== "[object Object]") return !1;
    for (a in n)
      if (w0.call(n, a))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (t.indexOf(a) === -1) t.push(a);
    else return !1;
  }
  return !0;
}
d(Oc, "resolveYamlOmap");
function Dc(e) {
  return e !== null ? e : [];
}
d(Dc, "constructYamlOmap");
var k0 = new kt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Oc,
  construct: Dc
}), v0 = Object.prototype.toString;
function Rc(e) {
  if (e === null) return !0;
  var t, r, i, n, a, o = e;
  for (a = new Array(o.length), t = 0, r = o.length; t < r; t += 1) {
    if (i = o[t], v0.call(i) !== "[object Object]" || (n = Object.keys(i), n.length !== 1)) return !1;
    a[t] = [n[0], i[n[0]]];
  }
  return !0;
}
d(Rc, "resolveYamlPairs");
function Ic(e) {
  if (e === null) return [];
  var t, r, i, n, a, o = e;
  for (a = new Array(o.length), t = 0, r = o.length; t < r; t += 1)
    i = o[t], n = Object.keys(i), a[t] = [n[0], i[n[0]]];
  return a;
}
d(Ic, "constructYamlPairs");
var S0 = new kt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Rc,
  construct: Ic
}), T0 = Object.prototype.hasOwnProperty;
function Pc(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (T0.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
d(Pc, "resolveYamlSet");
function Nc(e) {
  return e !== null ? e : {};
}
d(Nc, "constructYamlSet");
var B0 = new kt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Pc,
  construct: Nc
}), zc = y0.extend({
  implicit: [
    x0,
    b0
  ],
  explicit: [
    C0,
    k0,
    S0,
    B0
  ]
}), _e = Object.prototype.hasOwnProperty, Ui = 1, qc = 2, Wc = 3, Xi = 4, Kn = 1, L0 = 2, fo = 3, M0 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, A0 = /[\x85\u2028\u2029]/, $0 = /[,\[\]\{\}]/, Hc = /^(?:!|!!|![a-z\-]+!)$/i, jc = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ya(e) {
  return Object.prototype.toString.call(e);
}
d(ya, "_class");
function Yt(e) {
  return e === 10 || e === 13;
}
d(Yt, "is_EOL");
function we(e) {
  return e === 9 || e === 32;
}
d(we, "is_WHITE_SPACE");
function Tt(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
d(Tt, "is_WS_OR_EOL");
function Ee(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
d(Ee, "is_FLOW_INDICATOR");
function Yc(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
d(Yc, "fromHexCode");
function Gc(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
d(Gc, "escapedHexLen");
function Uc(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
d(Uc, "fromDecimalCode");
function xa(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
d(xa, "simpleEscapeSequence");
function Xc(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
d(Xc, "charFromCodepoint");
var Vc = new Array(256), Zc = new Array(256);
for (Le = 0; Le < 256; Le++)
  Vc[Le] = xa(Le) ? 1 : 0, Zc[Le] = xa(Le);
var Le;
function Kc(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || zc, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
d(Kc, "State$1");
function gs(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = i0(r), new $t(t, r);
}
d(gs, "generateError");
function U(e, t) {
  throw gs(e, t);
}
d(U, "throwError");
function Kr(e, t) {
  e.onWarning && e.onWarning.call(null, gs(e, t));
}
d(Kr, "throwWarning");
var po = {
  YAML: /* @__PURE__ */ d(function(t, r, i) {
    var n, a, o;
    t.version !== null && U(t, "duplication of %YAML directive"), i.length !== 1 && U(t, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), n === null && U(t, "ill-formed argument of the YAML directive"), a = parseInt(n[1], 10), o = parseInt(n[2], 10), a !== 1 && U(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Kr(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ d(function(t, r, i) {
    var n, a;
    i.length !== 2 && U(t, "TAG directive accepts exactly two arguments"), n = i[0], a = i[1], Hc.test(n) || U(t, "ill-formed tag handle (first argument) of the TAG directive"), _e.call(t.tagMap, n) && U(t, 'there is a previously declared suffix for "' + n + '" tag handle'), jc.test(a) || U(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      a = decodeURIComponent(a);
    } catch {
      U(t, "tag prefix is malformed: " + a);
    }
    t.tagMap[n] = a;
  }, "handleTagDirective")
};
function ce(e, t, r, i) {
  var n, a, o, s;
  if (t < r) {
    if (s = e.input.slice(t, r), i)
      for (n = 0, a = s.length; n < a; n += 1)
        o = s.charCodeAt(n), o === 9 || 32 <= o && o <= 1114111 || U(e, "expected valid JSON character");
    else M0.test(s) && U(e, "the stream contains non-printable characters");
    e.result += s;
  }
}
d(ce, "captureSegment");
function ba(e, t, r, i) {
  var n, a, o, s;
  for (dt.isObject(r) || U(e, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(r), o = 0, s = n.length; o < s; o += 1)
    a = n[o], _e.call(t, a) || (t[a] = r[a], i[a] = !0);
}
d(ba, "mergeMappings");
function Oe(e, t, r, i, n, a, o, s, l) {
  var c, h;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), c = 0, h = n.length; c < h; c += 1)
      Array.isArray(n[c]) && U(e, "nested arrays are not supported inside keys"), typeof n == "object" && ya(n[c]) === "[object Object]" && (n[c] = "[object Object]");
  if (typeof n == "object" && ya(n) === "[object Object]" && (n = "[object Object]"), n = String(n), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(a))
      for (c = 0, h = a.length; c < h; c += 1)
        ba(e, t, a[c], r);
    else
      ba(e, t, a, r);
  else
    !e.json && !_e.call(r, n) && _e.call(t, n) && (e.line = o || e.line, e.lineStart = s || e.lineStart, e.position = l || e.position, U(e, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: a
    }) : t[n] = a, delete r[n];
  return t;
}
d(Oe, "storeMappingPair");
function Ln(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : U(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
d(Ln, "readLineBreak");
function ft(e, t, r) {
  for (var i = 0, n = e.input.charCodeAt(e.position); n !== 0; ) {
    for (; we(n); )
      n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), n = e.input.charCodeAt(++e.position);
    if (t && n === 35)
      do
        n = e.input.charCodeAt(++e.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Yt(n))
      for (Ln(e), n = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; n === 32; )
        e.lineIndent++, n = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && Kr(e, "deficient indentation"), i;
}
d(ft, "skipSeparationSpace");
function ui(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Tt(r)));
}
d(ui, "testDocumentSeparator");
function Mn(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += dt.repeat(`
`, t - 1));
}
d(Mn, "writeFoldedLines");
function Qc(e, t, r) {
  var i, n, a, o, s, l, c, h, u = e.kind, f = e.result, p;
  if (p = e.input.charCodeAt(e.position), Tt(p) || Ee(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = e.input.charCodeAt(e.position + 1), Tt(n) || r && Ee(n)))
    return !1;
  for (e.kind = "scalar", e.result = "", a = o = e.position, s = !1; p !== 0; ) {
    if (p === 58) {
      if (n = e.input.charCodeAt(e.position + 1), Tt(n) || r && Ee(n))
        break;
    } else if (p === 35) {
      if (i = e.input.charCodeAt(e.position - 1), Tt(i))
        break;
    } else {
      if (e.position === e.lineStart && ui(e) || r && Ee(p))
        break;
      if (Yt(p))
        if (l = e.line, c = e.lineStart, h = e.lineIndent, ft(e, !1, -1), e.lineIndent >= t) {
          s = !0, p = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = l, e.lineStart = c, e.lineIndent = h;
          break;
        }
    }
    s && (ce(e, a, o, !1), Mn(e, e.line - l), a = o = e.position, s = !1), we(p) || (o = e.position + 1), p = e.input.charCodeAt(++e.position);
  }
  return ce(e, a, o, !1), e.result ? !0 : (e.kind = u, e.result = f, !1);
}
d(Qc, "readPlainScalar");
function Jc(e, t) {
  var r, i, n;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = n = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (ce(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, n = e.position;
      else
        return !0;
    else Yt(r) ? (ce(e, i, n, !0), Mn(e, ft(e, !1, t)), i = n = e.position) : e.position === e.lineStart && ui(e) ? U(e, "unexpected end of the document within a single quoted scalar") : (e.position++, n = e.position);
  U(e, "unexpected end of the stream within a single quoted scalar");
}
d(Jc, "readSingleQuotedScalar");
function th(e, t) {
  var r, i, n, a, o, s;
  if (s = e.input.charCodeAt(e.position), s !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (s = e.input.charCodeAt(e.position)) !== 0; ) {
    if (s === 34)
      return ce(e, r, e.position, !0), e.position++, !0;
    if (s === 92) {
      if (ce(e, r, e.position, !0), s = e.input.charCodeAt(++e.position), Yt(s))
        ft(e, !1, t);
      else if (s < 256 && Vc[s])
        e.result += Zc[s], e.position++;
      else if ((o = Gc(s)) > 0) {
        for (n = o, a = 0; n > 0; n--)
          s = e.input.charCodeAt(++e.position), (o = Yc(s)) >= 0 ? a = (a << 4) + o : U(e, "expected hexadecimal character");
        e.result += Xc(a), e.position++;
      } else
        U(e, "unknown escape sequence");
      r = i = e.position;
    } else Yt(s) ? (ce(e, r, i, !0), Mn(e, ft(e, !1, t)), r = i = e.position) : e.position === e.lineStart && ui(e) ? U(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  U(e, "unexpected end of the stream within a double quoted scalar");
}
d(th, "readDoubleQuotedScalar");
function eh(e, t) {
  var r = !0, i, n, a, o = e.tag, s, l = e.anchor, c, h, u, f, p, g = /* @__PURE__ */ Object.create(null), m, y, x, b;
  if (b = e.input.charCodeAt(e.position), b === 91)
    h = 93, p = !1, s = [];
  else if (b === 123)
    h = 125, p = !0, s = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), b = e.input.charCodeAt(++e.position); b !== 0; ) {
    if (ft(e, !0, t), b = e.input.charCodeAt(e.position), b === h)
      return e.position++, e.tag = o, e.anchor = l, e.kind = p ? "mapping" : "sequence", e.result = s, !0;
    r ? b === 44 && U(e, "expected the node content, but found ','") : U(e, "missed comma between flow collection entries"), y = m = x = null, u = f = !1, b === 63 && (c = e.input.charCodeAt(e.position + 1), Tt(c) && (u = f = !0, e.position++, ft(e, !0, t))), i = e.line, n = e.lineStart, a = e.position, ze(e, t, Ui, !1, !0), y = e.tag, m = e.result, ft(e, !0, t), b = e.input.charCodeAt(e.position), (f || e.line === i) && b === 58 && (u = !0, b = e.input.charCodeAt(++e.position), ft(e, !0, t), ze(e, t, Ui, !1, !0), x = e.result), p ? Oe(e, s, g, y, m, x, i, n, a) : u ? s.push(Oe(e, null, g, y, m, x, i, n, a)) : s.push(m), ft(e, !0, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = !0, b = e.input.charCodeAt(++e.position)) : r = !1;
  }
  U(e, "unexpected end of the stream within a flow collection");
}
d(eh, "readFlowCollection");
function rh(e, t) {
  var r, i, n = Kn, a = !1, o = !1, s = t, l = 0, c = !1, h, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    i = !1;
  else if (u === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      Kn === n ? n = u === 43 ? fo : L0 : U(e, "repeat of a chomping mode identifier");
    else if ((h = Uc(u)) >= 0)
      h === 0 ? U(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? U(e, "repeat of an indentation width identifier") : (s = t + h - 1, o = !0);
    else
      break;
  if (we(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (we(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!Yt(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Ln(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!o || e.lineIndent < s) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > s && (s = e.lineIndent), Yt(u)) {
      l++;
      continue;
    }
    if (e.lineIndent < s) {
      n === fo ? e.result += dt.repeat(`
`, a ? 1 + l : l) : n === Kn && a && (e.result += `
`);
      break;
    }
    for (i ? we(u) ? (c = !0, e.result += dt.repeat(`
`, a ? 1 + l : l)) : c ? (c = !1, e.result += dt.repeat(`
`, l + 1)) : l === 0 ? a && (e.result += " ") : e.result += dt.repeat(`
`, l) : e.result += dt.repeat(`
`, a ? 1 + l : l), a = !0, o = !0, l = 0, r = e.position; !Yt(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    ce(e, r, e.position, !1);
  }
  return !0;
}
d(rh, "readBlockScalar");
function Ca(e, t) {
  var r, i = e.tag, n = e.anchor, a = [], o, s = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, U(e, "tab characters must not be used in indentation")), !(l !== 45 || (o = e.input.charCodeAt(e.position + 1), !Tt(o)))); ) {
    if (s = !0, e.position++, ft(e, !0, -1) && e.lineIndent <= t) {
      a.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, ze(e, t, Wc, !1, !0), a.push(e.result), ft(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      U(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return s ? (e.tag = i, e.anchor = n, e.kind = "sequence", e.result = a, !0) : !1;
}
d(Ca, "readBlockSequence");
function ih(e, t, r) {
  var i, n, a, o, s, l, c = e.tag, h = e.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), p = null, g = null, m = null, y = !1, x = !1, b;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = u), b = e.input.charCodeAt(e.position); b !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, U(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), a = e.line, (b === 63 || b === 58) && Tt(i))
      b === 63 ? (y && (Oe(e, u, f, p, g, null, o, s, l), p = g = m = null), x = !0, y = !0, n = !0) : y ? (y = !1, n = !0) : U(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
    else {
      if (o = e.line, s = e.lineStart, l = e.position, !ze(e, r, qc, !1, !0))
        break;
      if (e.line === a) {
        for (b = e.input.charCodeAt(e.position); we(b); )
          b = e.input.charCodeAt(++e.position);
        if (b === 58)
          b = e.input.charCodeAt(++e.position), Tt(b) || U(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Oe(e, u, f, p, g, null, o, s, l), p = g = m = null), x = !0, y = !1, n = !1, p = e.tag, g = e.result;
        else if (x)
          U(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = c, e.anchor = h, !0;
      } else if (x)
        U(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = c, e.anchor = h, !0;
    }
    if ((e.line === a || e.lineIndent > t) && (y && (o = e.line, s = e.lineStart, l = e.position), ze(e, t, Xi, !0, n) && (y ? g = e.result : m = e.result), y || (Oe(e, u, f, p, g, m, o, s, l), p = g = m = null), ft(e, !0, -1), b = e.input.charCodeAt(e.position)), (e.line === a || e.lineIndent > t) && b !== 0)
      U(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && Oe(e, u, f, p, g, null, o, s, l), x && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = u), x;
}
d(ih, "readBlockMapping");
function nh(e) {
  var t, r = !1, i = !1, n, a, o;
  if (o = e.input.charCodeAt(e.position), o !== 33) return !1;
  if (e.tag !== null && U(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (r = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (i = !0, n = "!!", o = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, r) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (a = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : U(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Tt(o); )
      o === 33 && (i ? U(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), Hc.test(n) || U(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    a = e.input.slice(t, e.position), $0.test(a) && U(e, "tag suffix cannot contain flow indicator characters");
  }
  a && !jc.test(a) && U(e, "tag name cannot contain such characters: " + a);
  try {
    a = decodeURIComponent(a);
  } catch {
    U(e, "tag name is malformed: " + a);
  }
  return r ? e.tag = a : _e.call(e.tagMap, n) ? e.tag = e.tagMap[n] + a : n === "!" ? e.tag = "!" + a : n === "!!" ? e.tag = "tag:yaml.org,2002:" + a : U(e, 'undeclared tag handle "' + n + '"'), !0;
}
d(nh, "readTagProperty");
function ah(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && U(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Tt(r) && !Ee(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && U(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
d(ah, "readAnchorProperty");
function sh(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Tt(i) && !Ee(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && U(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), _e.call(e.anchorMap, r) || U(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], ft(e, !0, -1), !0;
}
d(sh, "readAlias");
function ze(e, t, r, i, n) {
  var a, o, s, l = 1, c = !1, h = !1, u, f, p, g, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, a = o = s = Xi === r || Wc === r, i && ft(e, !0, -1) && (c = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; nh(e) || ah(e); )
      ft(e, !0, -1) ? (c = !0, s = a, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : s = !1;
  if (s && (s = c || n), (l === 1 || Xi === r) && (Ui === r || qc === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? s && (Ca(e, y) || ih(e, y, m)) || eh(e, m) ? h = !0 : (o && rh(e, m) || Jc(e, m) || th(e, m) ? h = !0 : sh(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && U(e, "alias node should not have any properties")) : Qc(e, m, Ui === r) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = s && Ca(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && U(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, f = e.implicitTypes.length; u < f; u += 1)
      if (g = e.implicitTypes[u], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (_e.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, p = e.typeMap.multi[e.kind || "fallback"], u = 0, f = p.length; u < f; u += 1)
        if (e.tag.slice(0, p[u].tag.length) === p[u].tag) {
          g = p[u];
          break;
        }
    g || U(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && U(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : U(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
d(ze, "composeNode");
function oh(e) {
  var t = e.position, r, i, n, a = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (ft(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (a = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !Tt(o); )
      o = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), n = [], i.length < 1 && U(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; we(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !Yt(o));
        break;
      }
      if (Yt(o)) break;
      for (r = e.position; o !== 0 && !Tt(o); )
        o = e.input.charCodeAt(++e.position);
      n.push(e.input.slice(r, e.position));
    }
    o !== 0 && Ln(e), _e.call(po, i) ? po[i](e, i, n) : Kr(e, 'unknown document directive "' + i + '"');
  }
  if (ft(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, ft(e, !0, -1)) : a && U(e, "directives end mark is expected"), ze(e, e.lineIndent - 1, Xi, !1, !0), ft(e, !0, -1), e.checkLineBreaks && A0.test(e.input.slice(t, e.position)) && Kr(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && ui(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, ft(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    U(e, "end of the stream or a document separator is expected");
  else
    return;
}
d(oh, "readDocument");
function ms(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new Kc(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, U(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    oh(r);
  return r.documents;
}
d(ms, "loadDocuments");
function lh(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = ms(e, r);
  if (typeof t != "function")
    return i;
  for (var n = 0, a = i.length; n < a; n += 1)
    t(i[n]);
}
d(lh, "loadAll$1");
function ch(e, t) {
  var r = ms(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new $t("expected a single document in the stream, but found more");
  }
}
d(ch, "load$1");
var F0 = lh, E0 = ch, O0 = {
  loadAll: F0,
  load: E0
}, hh = Object.prototype.toString, uh = Object.prototype.hasOwnProperty, ys = 65279, D0 = 9, Qr = 10, R0 = 13, I0 = 32, P0 = 33, N0 = 34, wa = 35, z0 = 37, q0 = 38, W0 = 39, H0 = 42, fh = 44, j0 = 45, Vi = 58, Y0 = 61, G0 = 62, U0 = 63, X0 = 64, ph = 91, dh = 93, V0 = 96, gh = 123, Z0 = 124, mh = 125, vt = {};
vt[0] = "\\0";
vt[7] = "\\a";
vt[8] = "\\b";
vt[9] = "\\t";
vt[10] = "\\n";
vt[11] = "\\v";
vt[12] = "\\f";
vt[13] = "\\r";
vt[27] = "\\e";
vt[34] = '\\"';
vt[92] = "\\\\";
vt[133] = "\\N";
vt[160] = "\\_";
vt[8232] = "\\L";
vt[8233] = "\\P";
var K0 = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], Q0 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function yh(e, t) {
  var r, i, n, a, o, s, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), n = 0, a = i.length; n < a; n += 1)
    o = i[n], s = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), l = e.compiledTypeMap.fallback[o], l && uh.call(l.styleAliases, s) && (s = l.styleAliases[s]), r[o] = s;
  return r;
}
d(yh, "compileStyleMap");
function xh(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new $t("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + dt.repeat("0", i - t.length) + t;
}
d(xh, "encodeHex");
var J0 = 1, Jr = 2;
function bh(e) {
  this.schema = e.schema || zc, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = dt.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = yh(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Jr : J0, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
d(bh, "State");
function _a(e, t) {
  for (var r = dt.repeat(" ", t), i = 0, n = -1, a = "", o, s = e.length; i < s; )
    n = e.indexOf(`
`, i), n === -1 ? (o = e.slice(i), i = s) : (o = e.slice(i, n + 1), i = n + 1), o.length && o !== `
` && (a += r), a += o;
  return a;
}
d(_a, "indentString");
function Zi(e, t) {
  return `
` + dt.repeat(" ", e.indent * t);
}
d(Zi, "generateNextLine");
function Ch(e, t) {
  var r, i, n;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (n = e.implicitTypes[r], n.resolve(t))
      return !0;
  return !1;
}
d(Ch, "testImplicitResolving");
function ti(e) {
  return e === I0 || e === D0;
}
d(ti, "isWhitespace");
function xr(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== ys || 65536 <= e && e <= 1114111;
}
d(xr, "isPrintable");
function ka(e) {
  return xr(e) && e !== ys && e !== R0 && e !== Qr;
}
d(ka, "isNsCharOrWhitespace");
function va(e, t, r) {
  var i = ka(e), n = i && !ti(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== fh && e !== ph && e !== dh && e !== gh && e !== mh) && e !== wa && !(t === Vi && !n) || ka(t) && !ti(t) && e === wa || t === Vi && n
  );
}
d(va, "isPlainSafe");
function wh(e) {
  return xr(e) && e !== ys && !ti(e) && e !== j0 && e !== U0 && e !== Vi && e !== fh && e !== ph && e !== dh && e !== gh && e !== mh && e !== wa && e !== q0 && e !== H0 && e !== P0 && e !== Z0 && e !== Y0 && e !== G0 && e !== W0 && e !== N0 && e !== z0 && e !== X0 && e !== V0;
}
d(wh, "isPlainSafeFirst");
function _h(e) {
  return !ti(e) && e !== Vi;
}
d(_h, "isPlainSafeLast");
function tr(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
d(tr, "codePointAt");
function xs(e) {
  var t = /^\n* /;
  return t.test(e);
}
d(xs, "needIndentIndicator");
var kh = 1, Sa = 2, vh = 3, Sh = 4, Qe = 5;
function Th(e, t, r, i, n, a, o, s) {
  var l, c = 0, h = null, u = !1, f = !1, p = i !== -1, g = -1, m = wh(tr(e, 0)) && _h(tr(e, e.length - 1));
  if (t || o)
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = tr(e, l), !xr(c))
        return Qe;
      m = m && va(c, h, s), h = c;
    }
  else {
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = tr(e, l), c === Qr)
        u = !0, p && (f = f || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e[g + 1] !== " ", g = l);
      else if (!xr(c))
        return Qe;
      m = m && va(c, h, s), h = c;
    }
    f = f || p && l - g - 1 > i && e[g + 1] !== " ";
  }
  return !u && !f ? m && !o && !n(e) ? kh : a === Jr ? Qe : Sa : r > 9 && xs(e) ? Qe : o ? a === Jr ? Qe : Sa : f ? Sh : vh;
}
d(Th, "chooseScalarStyle");
function Bh(e, t, r, i, n) {
  e.dump = function() {
    if (t.length === 0)
      return e.quotingType === Jr ? '""' : "''";
    if (!e.noCompatMode && (K0.indexOf(t) !== -1 || Q0.test(t)))
      return e.quotingType === Jr ? '"' + t + '"' : "'" + t + "'";
    var a = e.indent * Math.max(1, r), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - a), s = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(c) {
      return Ch(e, c);
    }
    switch (d(l, "testAmbiguity"), Th(
      t,
      s,
      e.indent,
      o,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      n
    )) {
      case kh:
        return t;
      case Sa:
        return "'" + t.replace(/'/g, "''") + "'";
      case vh:
        return "|" + Ta(t, e.indent) + Ba(_a(t, a));
      case Sh:
        return ">" + Ta(t, e.indent) + Ba(_a(Lh(t, o), a));
      case Qe:
        return '"' + Mh(t) + '"';
      default:
        throw new $t("impossible error: invalid scalar style");
    }
  }();
}
d(Bh, "writeScalar");
function Ta(e, t) {
  var r = xs(e) ? String(t) : "", i = e[e.length - 1] === `
`, n = i && (e[e.length - 2] === `
` || e === `
`), a = n ? "+" : i ? "" : "-";
  return r + a + `
`;
}
d(Ta, "blockHeader");
function Ba(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
d(Ba, "dropEndingNewline");
function Lh(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = function() {
    var c = e.indexOf(`
`);
    return c = c !== -1 ? c : e.length, r.lastIndex = c, La(e.slice(0, c), t);
  }(), n = e[0] === `
` || e[0] === " ", a, o; o = r.exec(e); ) {
    var s = o[1], l = o[2];
    a = l[0] === " ", i += s + (!n && !a && l !== "" ? `
` : "") + La(l, t), n = a;
  }
  return i;
}
d(Lh, "foldString");
function La(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, n = 0, a, o = 0, s = 0, l = ""; i = r.exec(e); )
    s = i.index, s - n > t && (a = o > n ? o : s, l += `
` + e.slice(n, a), n = a + 1), o = s;
  return l += `
`, e.length - n > t && o > n ? l += e.slice(n, o) + `
` + e.slice(o + 1) : l += e.slice(n), l.slice(1);
}
d(La, "foldLine");
function Mh(e) {
  for (var t = "", r = 0, i, n = 0; n < e.length; r >= 65536 ? n += 2 : n++)
    r = tr(e, n), i = vt[r], !i && xr(r) ? (t += e[n], r >= 65536 && (t += e[n + 1])) : t += i || xh(r);
  return t;
}
d(Mh, "escapeString");
function Ah(e, t, r) {
  var i = "", n = e.tag, a, o, s;
  for (a = 0, o = r.length; a < o; a += 1)
    s = r[a], e.replacer && (s = e.replacer.call(r, String(a), s)), (te(e, t, s, !1, !1) || typeof s > "u" && te(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = n, e.dump = "[" + i + "]";
}
d(Ah, "writeFlowSequence");
function Ma(e, t, r, i) {
  var n = "", a = e.tag, o, s, l;
  for (o = 0, s = r.length; o < s; o += 1)
    l = r[o], e.replacer && (l = e.replacer.call(r, String(o), l)), (te(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && te(e, t + 1, null, !0, !0, !1, !0)) && ((!i || n !== "") && (n += Zi(e, t)), e.dump && Qr === e.dump.charCodeAt(0) ? n += "-" : n += "- ", n += e.dump);
  e.tag = a, e.dump = n || "[]";
}
d(Ma, "writeBlockSequence");
function $h(e, t, r) {
  var i = "", n = e.tag, a = Object.keys(r), o, s, l, c, h;
  for (o = 0, s = a.length; o < s; o += 1)
    h = "", i !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = a[o], c = r[l], e.replacer && (c = e.replacer.call(r, l, c)), te(e, t, l, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), te(e, t, c, !1, !1) && (h += e.dump, i += h));
  e.tag = n, e.dump = "{" + i + "}";
}
d($h, "writeFlowMapping");
function Fh(e, t, r, i) {
  var n = "", a = e.tag, o = Object.keys(r), s, l, c, h, u, f;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new $t("sortKeys must be a boolean or a function");
  for (s = 0, l = o.length; s < l; s += 1)
    f = "", (!i || n !== "") && (f += Zi(e, t)), c = o[s], h = r[c], e.replacer && (h = e.replacer.call(r, c, h)), te(e, t + 1, c, !0, !0, !0) && (u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, u && (e.dump && Qr === e.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e.dump, u && (f += Zi(e, t)), te(e, t + 1, h, !0, u) && (e.dump && Qr === e.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e.dump, n += f));
  e.tag = a, e.dump = n || "{}";
}
d(Fh, "writeBlockMapping");
function Aa(e, t, r) {
  var i, n, a, o, s, l;
  for (n = r ? e.explicitTypes : e.implicitTypes, a = 0, o = n.length; a < o; a += 1)
    if (s = n[a], (s.instanceOf || s.predicate) && (!s.instanceOf || typeof t == "object" && t instanceof s.instanceOf) && (!s.predicate || s.predicate(t))) {
      if (r ? s.multi && s.representName ? e.tag = s.representName(t) : e.tag = s.tag : e.tag = "?", s.represent) {
        if (l = e.styleMap[s.tag] || s.defaultStyle, hh.call(s.represent) === "[object Function]")
          i = s.represent(t, l);
        else if (uh.call(s.represent, l))
          i = s.represent[l](t, l);
        else
          throw new $t("!<" + s.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
d(Aa, "detectType");
function te(e, t, r, i, n, a, o) {
  e.tag = null, e.dump = r, Aa(e, r, !1) || Aa(e, r, !0);
  var s = hh.call(e.dump), l = i, c;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var h = s === "[object Object]" || s === "[object Array]", u, f;
  if (h && (u = e.duplicates.indexOf(r), f = u !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) && (n = !1), f && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (h && f && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), s === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (Fh(e, t, e.dump, n), f && (e.dump = "&ref_" + u + e.dump)) : ($h(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (s === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !o && t > 0 ? Ma(e, t - 1, e.dump, n) : Ma(e, t, e.dump, n), f && (e.dump = "&ref_" + u + e.dump)) : (Ah(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (s === "[object String]")
      e.tag !== "?" && Bh(e, e.dump, t, a, l);
    else {
      if (s === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new $t("unacceptable kind of an object to dump " + s);
    }
    e.tag !== null && e.tag !== "?" && (c = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
  }
  return !0;
}
d(te, "writeNode");
function Eh(e, t) {
  var r = [], i = [], n, a;
  for (Ki(e, r, i), n = 0, a = i.length; n < a; n += 1)
    t.duplicates.push(r[i[n]]);
  t.usedDuplicates = new Array(a);
}
d(Eh, "getDuplicateReferences");
function Ki(e, t, r) {
  var i, n, a;
  if (e !== null && typeof e == "object")
    if (n = t.indexOf(e), n !== -1)
      r.indexOf(n) === -1 && r.push(n);
    else if (t.push(e), Array.isArray(e))
      for (n = 0, a = e.length; n < a; n += 1)
        Ki(e[n], t, r);
    else
      for (i = Object.keys(e), n = 0, a = i.length; n < a; n += 1)
        Ki(e[i[n]], t, r);
}
d(Ki, "inspectNode");
function tm(e, t) {
  t = t || {};
  var r = new bh(t);
  r.noRefs || Eh(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), te(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
d(tm, "dump$1");
function em(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
d(em, "renamed");
var rm = kc, im = O0.load;
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
var zt = {
  aggregation: 18,
  extension: 18,
  composition: 18,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4
};
function Pr(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = ut(e), t = ut(t);
  const [r, i] = [e.x, e.y], [n, a] = [t.x, t.y], o = n - r, s = a - i;
  return { angle: Math.atan(s / o), deltaX: o, deltaY: s };
}
d(Pr, "calculateDeltaAndAngle");
var ut = /* @__PURE__ */ d((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), nm = /* @__PURE__ */ d((e) => ({
  x: /* @__PURE__ */ d(function(t, r, i) {
    let n = 0;
    const a = ut(i[0]).x < ut(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(zt, e.arrowTypeStart)) {
      const { angle: p, deltaX: g } = Pr(i[0], i[1]);
      n = zt[e.arrowTypeStart] * Math.cos(p) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(zt, e.arrowTypeEnd)) {
      const { angle: p, deltaX: g } = Pr(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = zt[e.arrowTypeEnd] * Math.cos(p) * (g >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      ut(t).x - ut(i[i.length - 1]).x
    ), s = Math.abs(
      ut(t).y - ut(i[i.length - 1]).y
    ), l = Math.abs(ut(t).x - ut(i[0]).x), c = Math.abs(ut(t).y - ut(i[0]).y), h = zt[e.arrowTypeStart], u = zt[e.arrowTypeEnd], f = 1;
    if (o < u && o > 0 && s < u) {
      let p = u + f - o;
      p *= a === "right" ? -1 : 1, n -= p;
    }
    if (l < h && l > 0 && c < h) {
      let p = h + f - l;
      p *= a === "right" ? -1 : 1, n += p;
    }
    return ut(t).x + n;
  }, "x"),
  y: /* @__PURE__ */ d(function(t, r, i) {
    let n = 0;
    const a = ut(i[0]).y < ut(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(zt, e.arrowTypeStart)) {
      const { angle: p, deltaY: g } = Pr(i[0], i[1]);
      n = zt[e.arrowTypeStart] * Math.abs(Math.sin(p)) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(zt, e.arrowTypeEnd)) {
      const { angle: p, deltaY: g } = Pr(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = zt[e.arrowTypeEnd] * Math.abs(Math.sin(p)) * (g >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      ut(t).y - ut(i[i.length - 1]).y
    ), s = Math.abs(
      ut(t).x - ut(i[i.length - 1]).x
    ), l = Math.abs(ut(t).y - ut(i[0]).y), c = Math.abs(ut(t).x - ut(i[0]).x), h = zt[e.arrowTypeStart], u = zt[e.arrowTypeEnd], f = 1;
    if (o < u && o > 0 && s < u) {
      let p = u + f - o;
      p *= a === "up" ? -1 : 1, n -= p;
    }
    if (l < h && l > 0 && c < h) {
      let p = h + f - l;
      p *= a === "up" ? -1 : 1, n += p;
    }
    return ut(t).y + n;
  }, "y")
}), "getLineFunctionsWithOffset"), bs = /* @__PURE__ */ d(({
  flowchart: e
}) => {
  var n, a;
  const t = ((n = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : n.top) ?? 0, r = ((a = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : a.bottom) ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins");
const am = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Qi = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Oh = Object.freeze({
  ...am,
  ...Qi
}), sm = Object.freeze({
  ...Oh,
  body: "",
  hidden: !1
}), om = Object.freeze({
  width: null,
  height: null
}), lm = Object.freeze({
  // Dimensions
  ...om,
  // Transformations
  ...Qi
}), cm = (e, t, r, i = "") => {
  const n = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3)
      return null;
    i = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length)
    return null;
  if (n.length > 1) {
    const s = n.pop(), l = n.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: n.length > 0 ? n[0] : i,
      prefix: l,
      name: s
    };
    return Qn(c) ? c : null;
  }
  const a = n[0], o = a.split("-");
  if (o.length > 1) {
    const s = {
      provider: i,
      prefix: o.shift(),
      name: o.join("-")
    };
    return Qn(s) ? s : null;
  }
  if (r && i === "") {
    const s = {
      provider: i,
      prefix: "",
      name: a
    };
    return Qn(s, r) ? s : null;
  }
  return null;
}, Qn = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1;
function hm(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function go(e, t) {
  const r = hm(e, t);
  for (const i in sm)
    i in Qi ? i in e && !(i in r) && (r[i] = Qi[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function um(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function a(o) {
    if (r[o])
      return n[o] = [];
    if (!(o in n)) {
      n[o] = null;
      const s = i[o] && i[o].parent, l = s && a(s);
      l && (n[o] = [s].concat(l));
    }
    return n[o];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(a), n;
}
function mo(e, t, r) {
  const i = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null);
  let a = {};
  function o(s) {
    a = go(
      i[s] || n[s],
      a
    );
  }
  return o(t), r.forEach(o), go(e, a);
}
function fm(e, t) {
  if (e.icons[t])
    return mo(e, t, []);
  const r = um(e, [t])[t];
  return r ? mo(e, t, r) : null;
}
const pm = /(-?[0-9.]*[0-9]+[0-9.]*)/g, dm = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function yo(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const i = e.split(pm);
  if (i === null || !i.length)
    return e;
  const n = [];
  let a = i.shift(), o = dm.test(a);
  for (; ; ) {
    if (o) {
      const s = parseFloat(a);
      isNaN(s) ? n.push(a) : n.push(Math.ceil(s * t * r) / r);
    } else
      n.push(a);
    if (a = i.shift(), a === void 0)
      return n.join("");
    o = !o;
  }
}
function gm(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const n = e.indexOf(">", i), a = e.indexOf("</" + t);
    if (n === -1 || a === -1)
      break;
    const o = e.indexOf(">", a);
    if (o === -1)
      break;
    r += e.slice(n + 1, a).trim(), e = e.slice(0, i).trim() + e.slice(o + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function mm(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function ym(e, t, r) {
  const i = gm(e);
  return mm(i.defs, t + i.content + r);
}
const xm = (e) => e === "unset" || e === "undefined" || e === "none";
function bm(e, t) {
  const r = {
    ...Oh,
    ...e
  }, i = {
    ...lm,
    ...t
  }, n = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let a = r.body;
  [r, i].forEach((m) => {
    const y = [], x = m.hFlip, b = m.vFlip;
    let w = m.rotate;
    x ? b ? w += 2 : (y.push(
      "translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"
    ), y.push("scale(-1 1)"), n.top = n.left = 0) : b && (y.push(
      "translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"
    ), y.push("scale(1 -1)"), n.top = n.left = 0);
    let S;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        S = n.height / 2 + n.top, y.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")"
        );
        break;
      case 3:
        S = n.width / 2 + n.left, y.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (n.left !== n.top && (S = n.left, n.left = n.top, n.top = S), n.width !== n.height && (S = n.width, n.width = n.height, n.height = S)), y.length && (a = ym(
      a,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const o = i.width, s = i.height, l = n.width, c = n.height;
  let h, u;
  o === null ? (u = s === null ? "1em" : s === "auto" ? c : s, h = yo(u, l / c)) : (h = o === "auto" ? l : o, u = s === null ? yo(h, c / l) : s === "auto" ? c : s);
  const f = {}, p = (m, y) => {
    xm(y) || (f[m] = y.toString());
  };
  p("width", h), p("height", u);
  const g = [n.left, n.top, l, c];
  return f.viewBox = g.join(" "), {
    attributes: f,
    viewBox: g,
    body: a
  };
}
const Cm = /\sid="(\S+)"/g, wm = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let _m = 0;
function km(e, t = wm) {
  const r = [];
  let i;
  for (; i = Cm.exec(e); )
    r.push(i[1]);
  if (!r.length)
    return e;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((a) => {
    const o = typeof t == "function" ? t(a) : t + (_m++).toString(), s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + o + n + "$3"
    );
  }), e = e.replace(new RegExp(n, "g"), ""), e;
}
function vm(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
var Sm = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, $a = /* @__PURE__ */ new Map(), Dh = /* @__PURE__ */ new Map(), Tm = /* @__PURE__ */ d((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (E.debug("Registering icon pack:", t.name), "loader" in t)
      Dh.set(t.name, t.loader);
    else if ("icons" in t)
      $a.set(t.name, t.icons);
    else
      throw E.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), Bm = /* @__PURE__ */ d(async (e, t) => {
  const r = cm(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let n = $a.get(i);
  if (!n) {
    const o = Dh.get(i);
    if (!o)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      n = { ...await o(), prefix: i }, $a.set(i, n);
    } catch (s) {
      throw E.error(s), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const a = fm(n, r.name);
  if (!a)
    throw new Error(`Icon not found: ${e}`);
  return a;
}, "getRegisteredIconData"), An = /* @__PURE__ */ d(async (e, t) => {
  let r;
  try {
    r = await Bm(e, t == null ? void 0 : t.fallbackPrefix);
  } catch (a) {
    E.error(a), r = Sm;
  }
  const i = bm(r, t);
  return vm(km(i.body), i.attributes);
}, "getIconSVG"), Cs = {}, yt = {};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.BLANK_URL = yt.relativeFirstCharacters = yt.whitespaceEscapeCharsRegex = yt.urlSchemeRegex = yt.ctrlCharactersRegex = yt.htmlCtrlEntityRegex = yt.htmlEntitiesRegex = yt.invalidProtocolRegex = void 0;
yt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
yt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
yt.htmlCtrlEntityRegex = /&(newline|tab);/gi;
yt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
yt.urlSchemeRegex = /^.+(:|&colon;)/gim;
yt.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
yt.relativeFirstCharacters = [".", "/"];
yt.BLANK_URL = "about:blank";
Object.defineProperty(Cs, "__esModule", { value: !0 });
var Rh = Cs.sanitizeUrl = void 0, _t = yt;
function Lm(e) {
  return _t.relativeFirstCharacters.indexOf(e[0]) > -1;
}
function Mm(e) {
  var t = e.replace(_t.ctrlCharactersRegex, "");
  return t.replace(_t.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function Am(e) {
  return URL.canParse(e);
}
function xo(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function $m(e) {
  if (!e)
    return _t.BLANK_URL;
  var t, r = xo(e.trim());
  do
    r = Mm(r).replace(_t.htmlCtrlEntityRegex, "").replace(_t.ctrlCharactersRegex, "").replace(_t.whitespaceEscapeCharsRegex, "").trim(), r = xo(r), t = r.match(_t.ctrlCharactersRegex) || r.match(_t.htmlEntitiesRegex) || r.match(_t.htmlCtrlEntityRegex) || r.match(_t.whitespaceEscapeCharsRegex);
  while (t && t.length > 0);
  var i = r;
  if (!i)
    return _t.BLANK_URL;
  if (Lm(i))
    return i;
  var n = i.trimStart(), a = n.match(_t.urlSchemeRegex);
  if (!a)
    return i;
  var o = a[0].toLowerCase().trim();
  if (_t.invalidProtocolRegex.test(o))
    return _t.BLANK_URL;
  var s = n.replace(/\\/g, "/");
  if (o === "mailto:" || o.includes("://"))
    return s;
  if (o === "http:" || o === "https:") {
    if (!Am(s))
      return _t.BLANK_URL;
    var l = new URL(s);
    return l.protocol = l.protocol.toLowerCase(), l.hostname = l.hostname.toLowerCase(), l.toString();
  }
  return s;
}
Rh = Cs.sanitizeUrl = $m;
var Fm = { value: () => {
} };
function Ih() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new Ei(r);
}
function Ei(e) {
  this._ = e;
}
function Em(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", n = r.indexOf(".");
    if (n >= 0 && (i = r.slice(n + 1), r = r.slice(0, n)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
Ei.prototype = Ih.prototype = {
  constructor: Ei,
  on: function(e, t) {
    var r = this._, i = Em(e + "", r), n, a = -1, o = i.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((n = (e = i[a]).type) && (n = Om(r[n], e.name))) return n;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < o; )
      if (n = (e = i[a]).type) r[n] = bo(r[n], e.name, t);
      else if (t == null) for (n in r) r[n] = bo(r[n], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new Ei(e);
  },
  call: function(e, t) {
    if ((n = arguments.length - 2) > 0) for (var r = new Array(n), i = 0, n, a; i < n; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], i = 0, n = a.length; i < n; ++i) a[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], n = 0, a = i.length; n < a; ++n) i[n].value.apply(t, r);
  }
};
function Om(e, t) {
  for (var r = 0, i = e.length, n; r < i; ++r)
    if ((n = e[r]).name === t)
      return n.value;
}
function bo(e, t, r) {
  for (var i = 0, n = e.length; i < n; ++i)
    if (e[i].name === t) {
      e[i] = Fm, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var Fa = "http://www.w3.org/1999/xhtml";
const Co = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Fa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function $n(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Co.hasOwnProperty(t) ? { space: Co[t], local: e } : e;
}
function Dm(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Fa && t.documentElement.namespaceURI === Fa ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function Rm(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ph(e) {
  var t = $n(e);
  return (t.local ? Rm : Dm)(t);
}
function Im() {
}
function ws(e) {
  return e == null ? Im : function() {
    return this.querySelector(e);
  };
}
function Pm(e) {
  typeof e != "function" && (e = ws(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], o = a.length, s = i[n] = new Array(o), l, c, h = 0; h < o; ++h)
      (l = a[h]) && (c = e.call(l, l.__data__, h, a)) && ("__data__" in l && (c.__data__ = l.__data__), s[h] = c);
  return new It(i, this._parents);
}
function Nm(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function zm() {
  return [];
}
function Nh(e) {
  return e == null ? zm : function() {
    return this.querySelectorAll(e);
  };
}
function qm(e) {
  return function() {
    return Nm(e.apply(this, arguments));
  };
}
function Wm(e) {
  typeof e == "function" ? e = qm(e) : e = Nh(e);
  for (var t = this._groups, r = t.length, i = [], n = [], a = 0; a < r; ++a)
    for (var o = t[a], s = o.length, l, c = 0; c < s; ++c)
      (l = o[c]) && (i.push(e.call(l, l.__data__, c, o)), n.push(l));
  return new It(i, n);
}
function zh(e) {
  return function() {
    return this.matches(e);
  };
}
function qh(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Hm = Array.prototype.find;
function jm(e) {
  return function() {
    return Hm.call(this.children, e);
  };
}
function Ym() {
  return this.firstElementChild;
}
function Gm(e) {
  return this.select(e == null ? Ym : jm(typeof e == "function" ? e : qh(e)));
}
var Um = Array.prototype.filter;
function Xm() {
  return Array.from(this.children);
}
function Vm(e) {
  return function() {
    return Um.call(this.children, e);
  };
}
function Zm(e) {
  return this.selectAll(e == null ? Xm : Vm(typeof e == "function" ? e : qh(e)));
}
function Km(e) {
  typeof e != "function" && (e = zh(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], o = a.length, s = i[n] = [], l, c = 0; c < o; ++c)
      (l = a[c]) && e.call(l, l.__data__, c, a) && s.push(l);
  return new It(i, this._parents);
}
function Wh(e) {
  return new Array(e.length);
}
function Qm() {
  return new It(this._enter || this._groups.map(Wh), this._parents);
}
function Ji(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ji.prototype = {
  constructor: Ji,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Jm(e) {
  return function() {
    return e;
  };
}
function ty(e, t, r, i, n, a) {
  for (var o = 0, s, l = t.length, c = a.length; o < c; ++o)
    (s = t[o]) ? (s.__data__ = a[o], i[o] = s) : r[o] = new Ji(e, a[o]);
  for (; o < l; ++o)
    (s = t[o]) && (n[o] = s);
}
function ey(e, t, r, i, n, a, o) {
  var s, l, c = /* @__PURE__ */ new Map(), h = t.length, u = a.length, f = new Array(h), p;
  for (s = 0; s < h; ++s)
    (l = t[s]) && (f[s] = p = o.call(l, l.__data__, s, t) + "", c.has(p) ? n[s] = l : c.set(p, l));
  for (s = 0; s < u; ++s)
    p = o.call(e, a[s], s, a) + "", (l = c.get(p)) ? (i[s] = l, l.__data__ = a[s], c.delete(p)) : r[s] = new Ji(e, a[s]);
  for (s = 0; s < h; ++s)
    (l = t[s]) && c.get(f[s]) === l && (n[s] = l);
}
function ry(e) {
  return e.__data__;
}
function iy(e, t) {
  if (!arguments.length) return Array.from(this, ry);
  var r = t ? ey : ty, i = this._parents, n = this._groups;
  typeof e != "function" && (e = Jm(e));
  for (var a = n.length, o = new Array(a), s = new Array(a), l = new Array(a), c = 0; c < a; ++c) {
    var h = i[c], u = n[c], f = u.length, p = ny(e.call(h, h && h.__data__, c, i)), g = p.length, m = s[c] = new Array(g), y = o[c] = new Array(g), x = l[c] = new Array(f);
    r(h, u, m, y, x, p, t);
    for (var b = 0, w = 0, S, k; b < g; ++b)
      if (S = m[b]) {
        for (b >= w && (w = b + 1); !(k = y[w]) && ++w < g; ) ;
        S._next = k || null;
      }
  }
  return o = new It(o, i), o._enter = s, o._exit = l, o;
}
function ny(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ay() {
  return new It(this._exit || this._groups.map(Wh), this._parents);
}
function sy(e, t, r) {
  var i = this.enter(), n = this, a = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (n = t(n), n && (n = n.selection())), r == null ? a.remove() : r(a), i && n ? i.merge(n).order() : n;
}
function oy(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, n = r.length, a = i.length, o = Math.min(n, a), s = new Array(n), l = 0; l < o; ++l)
    for (var c = r[l], h = i[l], u = c.length, f = s[l] = new Array(u), p, g = 0; g < u; ++g)
      (p = c[g] || h[g]) && (f[g] = p);
  for (; l < n; ++l)
    s[l] = r[l];
  return new It(s, this._parents);
}
function ly() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], n = i.length - 1, a = i[n], o; --n >= 0; )
      (o = i[n]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function cy(e) {
  e || (e = hy);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var r = this._groups, i = r.length, n = new Array(i), a = 0; a < i; ++a) {
    for (var o = r[a], s = o.length, l = n[a] = new Array(s), c, h = 0; h < s; ++h)
      (c = o[h]) && (l[h] = c);
    l.sort(t);
  }
  return new It(n, this._parents).order();
}
function hy(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function uy() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function fy() {
  return Array.from(this);
}
function py() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], n = 0, a = i.length; n < a; ++n) {
      var o = i[n];
      if (o) return o;
    }
  return null;
}
function dy() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function gy() {
  return !this.node();
}
function my(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var n = t[r], a = 0, o = n.length, s; a < o; ++a)
      (s = n[a]) && e.call(s, s.__data__, a, n);
  return this;
}
function yy(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function xy(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function by(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Cy(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function wy(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function _y(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function ky(e, t) {
  var r = $n(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? xy : yy : typeof t == "function" ? r.local ? _y : wy : r.local ? Cy : by)(r, t));
}
function Hh(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function vy(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Sy(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function Ty(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function By(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? vy : typeof t == "function" ? Ty : Sy)(e, t, r ?? "")) : br(this.node(), e);
}
function br(e, t) {
  return e.style.getPropertyValue(t) || Hh(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Ly(e) {
  return function() {
    delete this[e];
  };
}
function My(e, t) {
  return function() {
    this[e] = t;
  };
}
function Ay(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function $y(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Ly : typeof t == "function" ? Ay : My)(e, t)) : this.node()[e];
}
function jh(e) {
  return e.trim().split(/^|\s+/);
}
function _s(e) {
  return e.classList || new Yh(e);
}
function Yh(e) {
  this._node = e, this._names = jh(e.getAttribute("class") || "");
}
Yh.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Gh(e, t) {
  for (var r = _s(e), i = -1, n = t.length; ++i < n; ) r.add(t[i]);
}
function Uh(e, t) {
  for (var r = _s(e), i = -1, n = t.length; ++i < n; ) r.remove(t[i]);
}
function Fy(e) {
  return function() {
    Gh(this, e);
  };
}
function Ey(e) {
  return function() {
    Uh(this, e);
  };
}
function Oy(e, t) {
  return function() {
    (t.apply(this, arguments) ? Gh : Uh)(this, e);
  };
}
function Dy(e, t) {
  var r = jh(e + "");
  if (arguments.length < 2) {
    for (var i = _s(this.node()), n = -1, a = r.length; ++n < a; ) if (!i.contains(r[n])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Oy : t ? Fy : Ey)(r, t));
}
function Ry() {
  this.textContent = "";
}
function Iy(e) {
  return function() {
    this.textContent = e;
  };
}
function Py(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ny(e) {
  return arguments.length ? this.each(e == null ? Ry : (typeof e == "function" ? Py : Iy)(e)) : this.node().textContent;
}
function zy() {
  this.innerHTML = "";
}
function qy(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Wy(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Hy(e) {
  return arguments.length ? this.each(e == null ? zy : (typeof e == "function" ? Wy : qy)(e)) : this.node().innerHTML;
}
function jy() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Yy() {
  return this.each(jy);
}
function Gy() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Uy() {
  return this.each(Gy);
}
function Xy(e) {
  var t = typeof e == "function" ? e : Ph(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Vy() {
  return null;
}
function Zy(e, t) {
  var r = typeof e == "function" ? e : Ph(e), i = t == null ? Vy : typeof t == "function" ? t : ws(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Ky() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Qy() {
  return this.each(Ky);
}
function Jy() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function tx() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ex(e) {
  return this.select(e ? tx : Jy);
}
function rx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ix(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function nx(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function ax(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, n = t.length, a; r < n; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++i] = a;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function sx(e, t, r) {
  return function() {
    var i = this.__on, n, a = ix(t);
    if (i) {
      for (var o = 0, s = i.length; o < s; ++o)
        if ((n = i[o]).type === e.type && n.name === e.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = a, n.options = r), n.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, r), n = { type: e.type, name: e.name, value: t, listener: a, options: r }, i ? i.push(n) : this.__on = [n];
  };
}
function ox(e, t, r) {
  var i = nx(e + ""), n, a = i.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, c = s.length, h; l < c; ++l)
        for (n = 0, h = s[l]; n < a; ++n)
          if ((o = i[n]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = t ? sx : ax, n = 0; n < a; ++n) this.each(s(i[n], t, r));
  return this;
}
function Xh(e, t, r) {
  var i = Hh(e), n = i.CustomEvent;
  typeof n == "function" ? n = new n(t, r) : (n = i.document.createEvent("Event"), r ? (n.initEvent(t, r.bubbles, r.cancelable), n.detail = r.detail) : n.initEvent(t, !1, !1)), e.dispatchEvent(n);
}
function lx(e, t) {
  return function() {
    return Xh(this, e, t);
  };
}
function cx(e, t) {
  return function() {
    return Xh(this, e, t.apply(this, arguments));
  };
}
function hx(e, t) {
  return this.each((typeof t == "function" ? cx : lx)(e, t));
}
function* ux() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], n = 0, a = i.length, o; n < a; ++n)
      (o = i[n]) && (yield o);
}
var Vh = [null];
function It(e, t) {
  this._groups = e, this._parents = t;
}
function fi() {
  return new It([[document.documentElement]], Vh);
}
function fx() {
  return this;
}
It.prototype = fi.prototype = {
  constructor: It,
  select: Pm,
  selectAll: Wm,
  selectChild: Gm,
  selectChildren: Zm,
  filter: Km,
  data: iy,
  enter: Qm,
  exit: ay,
  join: sy,
  merge: oy,
  selection: fx,
  order: ly,
  sort: cy,
  call: uy,
  nodes: fy,
  node: py,
  size: dy,
  empty: gy,
  each: my,
  attr: ky,
  style: By,
  property: $y,
  classed: Dy,
  text: Ny,
  html: Hy,
  raise: Yy,
  lower: Uy,
  append: Xy,
  insert: Zy,
  remove: Qy,
  clone: ex,
  datum: rx,
  on: ox,
  dispatch: hx,
  [Symbol.iterator]: ux
};
function et(e) {
  return typeof e == "string" ? new It([[document.querySelector(e)]], [document.documentElement]) : new It([[e]], Vh);
}
function ks(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Zh(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function pi() {
}
var ei = 0.7, tn = 1 / ei, rr = "\\s*([+-]?\\d+)\\s*", ri = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", px = /^#([0-9a-f]{3,8})$/, dx = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), gx = new RegExp(`^rgb\\(${Qt},${Qt},${Qt}\\)$`), mx = new RegExp(`^rgba\\(${rr},${rr},${rr},${ri}\\)$`), yx = new RegExp(`^rgba\\(${Qt},${Qt},${Qt},${ri}\\)$`), xx = new RegExp(`^hsl\\(${ri},${Qt},${Qt}\\)$`), bx = new RegExp(`^hsla\\(${ri},${Qt},${Qt},${ri}\\)$`), wo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ks(pi, ii, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _o,
  // Deprecated! Use color.formatHex.
  formatHex: _o,
  formatHex8: Cx,
  formatHsl: wx,
  formatRgb: ko,
  toString: ko
});
function _o() {
  return this.rgb().formatHex();
}
function Cx() {
  return this.rgb().formatHex8();
}
function wx() {
  return Kh(this).formatHsl();
}
function ko() {
  return this.rgb().formatRgb();
}
function ii(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = px.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? vo(t) : r === 3 ? new Ft(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ci(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ci(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = dx.exec(e)) ? new Ft(t[1], t[2], t[3], 1) : (t = gx.exec(e)) ? new Ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = mx.exec(e)) ? Ci(t[1], t[2], t[3], t[4]) : (t = yx.exec(e)) ? Ci(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = xx.exec(e)) ? Bo(t[1], t[2] / 100, t[3] / 100, 1) : (t = bx.exec(e)) ? Bo(t[1], t[2] / 100, t[3] / 100, t[4]) : wo.hasOwnProperty(e) ? vo(wo[e]) : e === "transparent" ? new Ft(NaN, NaN, NaN, 0) : null;
}
function vo(e) {
  return new Ft(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ci(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new Ft(e, t, r, i);
}
function _x(e) {
  return e instanceof pi || (e = ii(e)), e ? (e = e.rgb(), new Ft(e.r, e.g, e.b, e.opacity)) : new Ft();
}
function Ea(e, t, r, i) {
  return arguments.length === 1 ? _x(e) : new Ft(e, t, r, i ?? 1);
}
function Ft(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
ks(Ft, Ea, Zh(pi, {
  brighter(e) {
    return e = e == null ? tn : Math.pow(tn, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ei : Math.pow(ei, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ft(Ie(this.r), Ie(this.g), Ie(this.b), en(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: So,
  // Deprecated! Use color.formatHex.
  formatHex: So,
  formatHex8: kx,
  formatRgb: To,
  toString: To
}));
function So() {
  return `#${De(this.r)}${De(this.g)}${De(this.b)}`;
}
function kx() {
  return `#${De(this.r)}${De(this.g)}${De(this.b)}${De((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function To() {
  const e = en(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ie(this.r)}, ${Ie(this.g)}, ${Ie(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function en(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ie(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function De(e) {
  return e = Ie(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Bo(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new jt(e, t, r, i);
}
function Kh(e) {
  if (e instanceof jt) return new jt(e.h, e.s, e.l, e.opacity);
  if (e instanceof pi || (e = ii(e)), !e) return new jt();
  if (e instanceof jt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, n = Math.min(t, r, i), a = Math.max(t, r, i), o = NaN, s = a - n, l = (a + n) / 2;
  return s ? (t === a ? o = (r - i) / s + (r < i) * 6 : r === a ? o = (i - t) / s + 2 : o = (t - r) / s + 4, s /= l < 0.5 ? a + n : 2 - a - n, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new jt(o, s, l, e.opacity);
}
function vx(e, t, r, i) {
  return arguments.length === 1 ? Kh(e) : new jt(e, t, r, i ?? 1);
}
function jt(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
ks(jt, vx, Zh(pi, {
  brighter(e) {
    return e = e == null ? tn : Math.pow(tn, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ei : Math.pow(ei, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, n = 2 * r - i;
    return new Ft(
      Jn(e >= 240 ? e - 240 : e + 120, n, i),
      Jn(e, n, i),
      Jn(e < 120 ? e + 240 : e - 120, n, i),
      this.opacity
    );
  },
  clamp() {
    return new jt(Lo(this.h), wi(this.s), wi(this.l), en(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = en(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Lo(this.h)}, ${wi(this.s) * 100}%, ${wi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Lo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Jn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const vs = (e) => () => e;
function Qh(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Sx(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function yT(e, t) {
  var r = t - e;
  return r ? Qh(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : vs(isNaN(e) ? t : e);
}
function Tx(e) {
  return (e = +e) == 1 ? Jh : function(t, r) {
    return r - t ? Sx(t, r, e) : vs(isNaN(t) ? r : t);
  };
}
function Jh(e, t) {
  var r = t - e;
  return r ? Qh(e, r) : vs(isNaN(e) ? t : e);
}
const Mo = function e(t) {
  var r = Tx(t);
  function i(n, a) {
    var o = r((n = Ea(n)).r, (a = Ea(a)).r), s = r(n.g, a.g), l = r(n.b, a.b), c = Jh(n.opacity, a.opacity);
    return function(h) {
      return n.r = o(h), n.g = s(h), n.b = l(h), n.opacity = c(h), n + "";
    };
  }
  return i.gamma = e, i;
}(1);
function be(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var Oa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ta = new RegExp(Oa.source, "g");
function Bx(e) {
  return function() {
    return e;
  };
}
function Lx(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Mx(e, t) {
  var r = Oa.lastIndex = ta.lastIndex = 0, i, n, a, o = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (i = Oa.exec(e)) && (n = ta.exec(t)); )
    (a = n.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (i = i[0]) === (n = n[0]) ? s[o] ? s[o] += n : s[++o] = n : (s[++o] = null, l.push({ i: o, x: be(i, n) })), r = ta.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? Lx(l[0].x) : Bx(t) : (t = l.length, function(c) {
    for (var h = 0, u; h < t; ++h) s[(u = l[h]).i] = u.x(c);
    return s.join("");
  });
}
var Ao = 180 / Math.PI, Da = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function tu(e, t, r, i, n, a) {
  var o, s, l;
  return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (l = e * r + t * i) && (r -= e * l, i -= t * l), (s = Math.sqrt(r * r + i * i)) && (r /= s, i /= s, l /= s), e * i < t * r && (e = -e, t = -t, l = -l, o = -o), {
    translateX: n,
    translateY: a,
    rotate: Math.atan2(t, e) * Ao,
    skewX: Math.atan(l) * Ao,
    scaleX: o,
    scaleY: s
  };
}
var _i;
function Ax(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Da : tu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function $x(e) {
  return e == null || (_i || (_i = document.createElementNS("http://www.w3.org/2000/svg", "g")), _i.setAttribute("transform", e), !(e = _i.transform.baseVal.consolidate())) ? Da : (e = e.matrix, tu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function eu(e, t, r, i) {
  function n(c) {
    return c.length ? c.pop() + " " : "";
  }
  function a(c, h, u, f, p, g) {
    if (c !== u || h !== f) {
      var m = p.push("translate(", null, t, null, r);
      g.push({ i: m - 4, x: be(c, u) }, { i: m - 2, x: be(h, f) });
    } else (u || f) && p.push("translate(" + u + t + f + r);
  }
  function o(c, h, u, f) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), f.push({ i: u.push(n(u) + "rotate(", null, i) - 2, x: be(c, h) })) : h && u.push(n(u) + "rotate(" + h + i);
  }
  function s(c, h, u, f) {
    c !== h ? f.push({ i: u.push(n(u) + "skewX(", null, i) - 2, x: be(c, h) }) : h && u.push(n(u) + "skewX(" + h + i);
  }
  function l(c, h, u, f, p, g) {
    if (c !== u || h !== f) {
      var m = p.push(n(p) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: be(c, u) }, { i: m - 2, x: be(h, f) });
    } else (u !== 1 || f !== 1) && p.push(n(p) + "scale(" + u + "," + f + ")");
  }
  return function(c, h) {
    var u = [], f = [];
    return c = e(c), h = e(h), a(c.translateX, c.translateY, h.translateX, h.translateY, u, f), o(c.rotate, h.rotate, u, f), s(c.skewX, h.skewX, u, f), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, u, f), c = h = null, function(p) {
      for (var g = -1, m = f.length, y; ++g < m; ) u[(y = f[g]).i] = y.x(p);
      return u.join("");
    };
  };
}
var Fx = eu(Ax, "px, ", "px)", "deg)"), Ex = eu($x, ", ", ")", ")"), Cr = 0, Nr = 0, Ar = 0, ru = 1e3, rn, zr, nn = 0, qe = 0, Fn = 0, ni = typeof performance == "object" && performance.now ? performance : Date, iu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ss() {
  return qe || (iu(Ox), qe = ni.now() + Fn);
}
function Ox() {
  qe = 0;
}
function an() {
  this._call = this._time = this._next = null;
}
an.prototype = nu.prototype = {
  constructor: an,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? Ss() : +r) + (t == null ? 0 : +t), !this._next && zr !== this && (zr ? zr._next = this : rn = this, zr = this), this._call = e, this._time = r, Ra();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ra());
  }
};
function nu(e, t, r) {
  var i = new an();
  return i.restart(e, t, r), i;
}
function Dx() {
  Ss(), ++Cr;
  for (var e = rn, t; e; )
    (t = qe - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Cr;
}
function $o() {
  qe = (nn = ni.now()) + Fn, Cr = Nr = 0;
  try {
    Dx();
  } finally {
    Cr = 0, Ix(), qe = 0;
  }
}
function Rx() {
  var e = ni.now(), t = e - nn;
  t > ru && (Fn -= t, nn = e);
}
function Ix() {
  for (var e, t = rn, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : rn = r);
  zr = e, Ra(i);
}
function Ra(e) {
  if (!Cr) {
    Nr && (Nr = clearTimeout(Nr));
    var t = e - qe;
    t > 24 ? (e < 1 / 0 && (Nr = setTimeout($o, e - ni.now() - Fn)), Ar && (Ar = clearInterval(Ar))) : (Ar || (nn = ni.now(), Ar = setInterval(Rx, ru)), Cr = 1, iu($o));
  }
}
function Fo(e, t, r) {
  var i = new an();
  return t = t == null ? 0 : +t, i.restart((n) => {
    i.stop(), e(n + t);
  }, t, r), i;
}
var Px = Ih("start", "end", "cancel", "interrupt"), Nx = [], au = 0, Eo = 1, Ia = 2, Oi = 3, Oo = 4, Pa = 5, Di = 6;
function En(e, t, r, i, n, a) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (r in o) return;
  zx(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: n,
    // For context during callback.
    on: Px,
    tween: Nx,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: au
  });
}
function Ts(e, t) {
  var r = Ut(e, t);
  if (r.state > au) throw new Error("too late; already scheduled");
  return r;
}
function ee(e, t) {
  var r = Ut(e, t);
  if (r.state > Oi) throw new Error("too late; already running");
  return r;
}
function Ut(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function zx(e, t, r) {
  var i = e.__transition, n;
  i[t] = r, r.timer = nu(a, 0, r.time);
  function a(c) {
    r.state = Eo, r.timer.restart(o, r.delay, r.time), r.delay <= c && o(c - r.delay);
  }
  function o(c) {
    var h, u, f, p;
    if (r.state !== Eo) return l();
    for (h in i)
      if (p = i[h], p.name === r.name) {
        if (p.state === Oi) return Fo(o);
        p.state === Oo ? (p.state = Di, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete i[h]) : +h < t && (p.state = Di, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete i[h]);
      }
    if (Fo(function() {
      r.state === Oi && (r.state = Oo, r.timer.restart(s, r.delay, r.time), s(c));
    }), r.state = Ia, r.on.call("start", e, e.__data__, r.index, r.group), r.state === Ia) {
      for (r.state = Oi, n = new Array(f = r.tween.length), h = 0, u = -1; h < f; ++h)
        (p = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (n[++u] = p);
      n.length = u + 1;
    }
  }
  function s(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = Pa, 1), u = -1, f = n.length; ++u < f; )
      n[u].call(e, h);
    r.state === Pa && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = Di, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function qx(e, t) {
  var r = e.__transition, i, n, a = !0, o;
  if (r) {
    t = t == null ? null : t + "";
    for (o in r) {
      if ((i = r[o]).name !== t) {
        a = !1;
        continue;
      }
      n = i.state > Ia && i.state < Pa, i.state = Di, i.timer.stop(), i.on.call(n ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[o];
    }
    a && delete e.__transition;
  }
}
function Wx(e) {
  return this.each(function() {
    qx(this, e);
  });
}
function Hx(e, t) {
  var r, i;
  return function() {
    var n = ee(this, e), a = n.tween;
    if (a !== r) {
      i = r = a;
      for (var o = 0, s = i.length; o < s; ++o)
        if (i[o].name === t) {
          i = i.slice(), i.splice(o, 1);
          break;
        }
    }
    n.tween = i;
  };
}
function jx(e, t, r) {
  var i, n;
  if (typeof r != "function") throw new Error();
  return function() {
    var a = ee(this, e), o = a.tween;
    if (o !== i) {
      n = (i = o).slice();
      for (var s = { name: t, value: r }, l = 0, c = n.length; l < c; ++l)
        if (n[l].name === t) {
          n[l] = s;
          break;
        }
      l === c && n.push(s);
    }
    a.tween = n;
  };
}
function Yx(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Ut(this.node(), r).tween, n = 0, a = i.length, o; n < a; ++n)
      if ((o = i[n]).name === e)
        return o.value;
    return null;
  }
  return this.each((t == null ? Hx : jx)(r, e, t));
}
function Bs(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var n = ee(this, i);
    (n.value || (n.value = {}))[t] = r.apply(this, arguments);
  }), function(n) {
    return Ut(n, i).value[t];
  };
}
function su(e, t) {
  var r;
  return (typeof t == "number" ? be : t instanceof ii ? Mo : (r = ii(t)) ? (t = r, Mo) : Mx)(e, t);
}
function Gx(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ux(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Xx(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var o = this.getAttribute(e);
    return o === n ? null : o === i ? a : a = t(i = o, r);
  };
}
function Vx(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var o = this.getAttributeNS(e.space, e.local);
    return o === n ? null : o === i ? a : a = t(i = o, r);
  };
}
function Zx(e, t, r) {
  var i, n, a;
  return function() {
    var o, s = r(this), l;
    return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), l = s + "", o === l ? null : o === i && l === n ? a : (n = l, a = t(i = o, s)));
  };
}
function Kx(e, t, r) {
  var i, n, a;
  return function() {
    var o, s = r(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), l = s + "", o === l ? null : o === i && l === n ? a : (n = l, a = t(i = o, s)));
  };
}
function Qx(e, t) {
  var r = $n(e), i = r === "transform" ? Ex : su;
  return this.attrTween(e, typeof t == "function" ? (r.local ? Kx : Zx)(r, i, Bs(this, "attr." + e, t)) : t == null ? (r.local ? Ux : Gx)(r) : (r.local ? Vx : Xx)(r, i, t));
}
function Jx(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function tb(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function eb(e, t) {
  var r, i;
  function n() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && tb(e, a)), r;
  }
  return n._value = t, n;
}
function rb(e, t) {
  var r, i;
  function n() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && Jx(e, a)), r;
  }
  return n._value = t, n;
}
function ib(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = $n(e);
  return this.tween(r, (i.local ? eb : rb)(i, t));
}
function nb(e, t) {
  return function() {
    Ts(this, e).delay = +t.apply(this, arguments);
  };
}
function ab(e, t) {
  return t = +t, function() {
    Ts(this, e).delay = t;
  };
}
function sb(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? nb : ab)(t, e)) : Ut(this.node(), t).delay;
}
function ob(e, t) {
  return function() {
    ee(this, e).duration = +t.apply(this, arguments);
  };
}
function lb(e, t) {
  return t = +t, function() {
    ee(this, e).duration = t;
  };
}
function cb(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ob : lb)(t, e)) : Ut(this.node(), t).duration;
}
function hb(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ee(this, e).ease = t;
  };
}
function ub(e) {
  var t = this._id;
  return arguments.length ? this.each(hb(t, e)) : Ut(this.node(), t).ease;
}
function fb(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    ee(this, e).ease = r;
  };
}
function pb(e) {
  if (typeof e != "function") throw new Error();
  return this.each(fb(this._id, e));
}
function db(e) {
  typeof e != "function" && (e = zh(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], o = a.length, s = i[n] = [], l, c = 0; c < o; ++c)
      (l = a[c]) && e.call(l, l.__data__, c, a) && s.push(l);
  return new he(i, this._parents, this._name, this._id);
}
function gb(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, n = r.length, a = Math.min(i, n), o = new Array(i), s = 0; s < a; ++s)
    for (var l = t[s], c = r[s], h = l.length, u = o[s] = new Array(h), f, p = 0; p < h; ++p)
      (f = l[p] || c[p]) && (u[p] = f);
  for (; s < i; ++s)
    o[s] = t[s];
  return new he(o, this._parents, this._name, this._id);
}
function mb(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function yb(e, t, r) {
  var i, n, a = mb(t) ? Ts : ee;
  return function() {
    var o = a(this, e), s = o.on;
    s !== i && (n = (i = s).copy()).on(t, r), o.on = n;
  };
}
function xb(e, t) {
  var r = this._id;
  return arguments.length < 2 ? Ut(this.node(), r).on.on(e) : this.each(yb(r, e, t));
}
function bb(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function Cb() {
  return this.on("end.remove", bb(this._id));
}
function wb(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = ws(e));
  for (var i = this._groups, n = i.length, a = new Array(n), o = 0; o < n; ++o)
    for (var s = i[o], l = s.length, c = a[o] = new Array(l), h, u, f = 0; f < l; ++f)
      (h = s[f]) && (u = e.call(h, h.__data__, f, s)) && ("__data__" in h && (u.__data__ = h.__data__), c[f] = u, En(c[f], t, r, f, c, Ut(h, r)));
  return new he(a, this._parents, t, r);
}
function _b(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Nh(e));
  for (var i = this._groups, n = i.length, a = [], o = [], s = 0; s < n; ++s)
    for (var l = i[s], c = l.length, h, u = 0; u < c; ++u)
      if (h = l[u]) {
        for (var f = e.call(h, h.__data__, u, l), p, g = Ut(h, r), m = 0, y = f.length; m < y; ++m)
          (p = f[m]) && En(p, t, r, m, f, g);
        a.push(f), o.push(h);
      }
  return new he(a, o, t, r);
}
var kb = fi.prototype.constructor;
function vb() {
  return new kb(this._groups, this._parents);
}
function Sb(e, t) {
  var r, i, n;
  return function() {
    var a = br(this, e), o = (this.style.removeProperty(e), br(this, e));
    return a === o ? null : a === r && o === i ? n : n = t(r = a, i = o);
  };
}
function ou(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Tb(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var o = br(this, e);
    return o === n ? null : o === i ? a : a = t(i = o, r);
  };
}
function Bb(e, t, r) {
  var i, n, a;
  return function() {
    var o = br(this, e), s = r(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), br(this, e))), o === l ? null : o === i && l === n ? a : (n = l, a = t(i = o, s));
  };
}
function Lb(e, t) {
  var r, i, n, a = "style." + t, o = "end." + a, s;
  return function() {
    var l = ee(this, e), c = l.on, h = l.value[a] == null ? s || (s = ou(t)) : void 0;
    (c !== r || n !== h) && (i = (r = c).copy()).on(o, n = h), l.on = i;
  };
}
function Mb(e, t, r) {
  var i = (e += "") == "transform" ? Fx : su;
  return t == null ? this.styleTween(e, Sb(e, i)).on("end.style." + e, ou(e)) : typeof t == "function" ? this.styleTween(e, Bb(e, i, Bs(this, "style." + e, t))).each(Lb(this._id, e)) : this.styleTween(e, Tb(e, i, t), r).on("end.style." + e, null);
}
function Ab(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function $b(e, t, r) {
  var i, n;
  function a() {
    var o = t.apply(this, arguments);
    return o !== n && (i = (n = o) && Ab(e, o, r)), i;
  }
  return a._value = t, a;
}
function Fb(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, $b(e, t, r ?? ""));
}
function Eb(e) {
  return function() {
    this.textContent = e;
  };
}
function Ob(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Db(e) {
  return this.tween("text", typeof e == "function" ? Ob(Bs(this, "text", e)) : Eb(e == null ? "" : e + ""));
}
function Rb(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ib(e) {
  var t, r;
  function i() {
    var n = e.apply(this, arguments);
    return n !== r && (t = (r = n) && Rb(n)), t;
  }
  return i._value = e, i;
}
function Pb(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Ib(e));
}
function Nb() {
  for (var e = this._name, t = this._id, r = lu(), i = this._groups, n = i.length, a = 0; a < n; ++a)
    for (var o = i[a], s = o.length, l, c = 0; c < s; ++c)
      if (l = o[c]) {
        var h = Ut(l, t);
        En(l, e, r, c, o, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new he(i, this._parents, e, r);
}
function zb() {
  var e, t, r = this, i = r._id, n = r.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --n === 0 && a();
    } };
    r.each(function() {
      var c = ee(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), c.on = t;
    }), n === 0 && a();
  });
}
var qb = 0;
function he(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function lu() {
  return ++qb;
}
var ae = fi.prototype;
he.prototype = {
  constructor: he,
  select: wb,
  selectAll: _b,
  selectChild: ae.selectChild,
  selectChildren: ae.selectChildren,
  filter: db,
  merge: gb,
  selection: vb,
  transition: Nb,
  call: ae.call,
  nodes: ae.nodes,
  node: ae.node,
  size: ae.size,
  empty: ae.empty,
  each: ae.each,
  on: xb,
  attr: Qx,
  attrTween: ib,
  style: Mb,
  styleTween: Fb,
  text: Db,
  textTween: Pb,
  remove: Cb,
  tween: Yx,
  delay: sb,
  duration: cb,
  ease: ub,
  easeVarying: pb,
  end: zb,
  [Symbol.iterator]: ae[Symbol.iterator]
};
function Wb(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Hb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Wb
};
function jb(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function Yb(e) {
  var t, r;
  e instanceof he ? (t = e._id, e = e._name) : (t = lu(), (r = Hb).time = Ss(), e = e == null ? null : e + "");
  for (var i = this._groups, n = i.length, a = 0; a < n; ++a)
    for (var o = i[a], s = o.length, l, c = 0; c < s; ++c)
      (l = o[c]) && En(l, e, t, c, o, r || jb(l, t));
  return new he(i, this._parents, e, t);
}
fi.prototype.interrupt = Wx;
fi.prototype.transition = Yb;
const Na = Math.PI, za = 2 * Na, Me = 1e-6, Gb = za - Me;
function cu(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Ub(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return cu;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let n = 1, a = i.length; n < a; ++n)
      this._ += Math.round(arguments[n] * r) / r + i[n];
  };
}
class Xb {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? cu : Ub(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, n) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +n}`;
  }
  bezierCurveTo(t, r, i, n, a, o) {
    this._append`C${+t},${+r},${+i},${+n},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, i, n, a) {
    if (t = +t, r = +r, i = +i, n = +n, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = i - t, c = n - r, h = o - t, u = s - r, f = h * h + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (f > Me) if (!(Math.abs(u * l - c * h) > Me) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = i - o, g = n - s, m = l * l + c * c, y = p * p + g * g, x = Math.sqrt(m), b = Math.sqrt(f), w = a * Math.tan((Na - Math.acos((m + f - y) / (2 * x * b))) / 2), S = w / b, k = w / x;
      Math.abs(S - 1) > Me && this._append`L${t + S * h},${r + S * u}`, this._append`A${a},${a},0,0,${+(u * p > h * g)},${this._x1 = t + k * l},${this._y1 = r + k * c}`;
    }
  }
  arc(t, r, i, n, a, o) {
    if (t = +t, r = +r, i = +i, o = !!o, i < 0) throw new Error(`negative radius: ${i}`);
    let s = i * Math.cos(n), l = i * Math.sin(n), c = t + s, h = r + l, u = 1 ^ o, f = o ? n - a : a - n;
    this._x1 === null ? this._append`M${c},${h}` : (Math.abs(this._x1 - c) > Me || Math.abs(this._y1 - h) > Me) && this._append`L${c},${h}`, i && (f < 0 && (f = f % za + za), f > Gb ? this._append`A${i},${i},0,1,${u},${t - s},${r - l}A${i},${i},0,1,${u},${this._x1 = c},${this._y1 = h}` : f > Me && this._append`A${i},${i},0,${+(f >= Na)},${u},${this._x1 = t + i * Math.cos(a)},${this._y1 = r + i * Math.sin(a)}`);
  }
  rect(t, r, i, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+n}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Ze(e) {
  return function() {
    return e;
  };
}
const xT = Math.abs, bT = Math.atan2, CT = Math.cos, wT = Math.max, _T = Math.min, kT = Math.sin, vT = Math.sqrt, Do = 1e-12, Ls = Math.PI, Ro = Ls / 2, ST = 2 * Ls;
function TT(e) {
  return e > 1 ? 0 : e < -1 ? Ls : Math.acos(e);
}
function BT(e) {
  return e >= 1 ? Ro : e <= -1 ? -Ro : Math.asin(e);
}
function Vb(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e;
  }, () => new Xb(t);
}
function Zb(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function hu(e) {
  this._context = e;
}
hu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function sn(e) {
  return new hu(e);
}
function Kb(e) {
  return e[0];
}
function Qb(e) {
  return e[1];
}
function Jb(e, t) {
  var r = Ze(!0), i = null, n = sn, a = null, o = Vb(s);
  e = typeof e == "function" ? e : e === void 0 ? Kb : Ze(e), t = typeof t == "function" ? t : t === void 0 ? Qb : Ze(t);
  function s(l) {
    var c, h = (l = Zb(l)).length, u, f = !1, p;
    for (i == null && (a = n(p = o())), c = 0; c <= h; ++c)
      !(c < h && r(u = l[c], c, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+e(u, c, l), +t(u, c, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Ze(+l), s) : e;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Ze(+l), s) : t;
  }, s.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Ze(!!l), s) : r;
  }, s.curve = function(l) {
    return arguments.length ? (n = l, i != null && (a = n(i)), s) : n;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? i = a = null : a = n(i = l), s) : i;
  }, s;
}
class uu {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function fu(e) {
  return new uu(e, !0);
}
function pu(e) {
  return new uu(e, !1);
}
function ke() {
}
function on(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function On(e) {
  this._context = e;
}
On.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        on(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        on(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Ri(e) {
  return new On(e);
}
function du(e) {
  this._context = e;
}
du.prototype = {
  areaStart: ke,
  areaEnd: ke,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        on(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function t1(e) {
  return new du(e);
}
function gu(e) {
  this._context = e;
}
gu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      default:
        on(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function e1(e) {
  return new gu(e);
}
function mu(e, t) {
  this._basis = new On(e), this._beta = t;
}
mu.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], n = t[0], a = e[r] - i, o = t[r] - n, s = -1, l; ++s <= r; )
        l = s / r, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (i + l * a),
          this._beta * t[s] + (1 - this._beta) * (n + l * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const r1 = function e(t) {
  function r(i) {
    return t === 1 ? new On(i) : new mu(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
}(0.85);
function ln(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Ms(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ms.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        ln(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        ln(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const yu = function e(t) {
  function r(i) {
    return new Ms(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
}(0);
function As(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
As.prototype = {
  areaStart: ke,
  areaEnd: ke,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        ln(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const i1 = function e(t) {
  function r(i) {
    return new As(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
}(0);
function $s(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
$s.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        ln(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const n1 = function e(t) {
  function r(i) {
    return new $s(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
}(0);
function Fs(e, t, r) {
  var i = e._x1, n = e._y1, a = e._x2, o = e._y2;
  if (e._l01_a > Do) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, n = (n * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > Do) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    a = (a * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, o = (o * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, n, a, o, e._x2, e._y2);
}
function xu(e, t) {
  this._context = e, this._alpha = t;
}
xu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        Fs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const bu = function e(t) {
  function r(i) {
    return t ? new xu(i, t) : new Ms(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
}(0.5);
function Cu(e, t) {
  this._context = e, this._alpha = t;
}
Cu.prototype = {
  areaStart: ke,
  areaEnd: ke,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Fs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const a1 = function e(t) {
  function r(i) {
    return t ? new Cu(i, t) : new As(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
}(0.5);
function wu(e, t) {
  this._context = e, this._alpha = t;
}
wu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Fs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const s1 = function e(t) {
  function r(i) {
    return t ? new wu(i, t) : new $s(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
}(0.5);
function _u(e) {
  this._context = e;
}
_u.prototype = {
  areaStart: ke,
  areaEnd: ke,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function o1(e) {
  return new _u(e);
}
function Io(e) {
  return e < 0 ? -1 : 1;
}
function Po(e, t, r) {
  var i = e._x1 - e._x0, n = t - e._x1, a = (e._y1 - e._y0) / (i || n < 0 && -0), o = (r - e._y1) / (n || i < 0 && -0), s = (a * n + o * i) / (i + n);
  return (Io(a) + Io(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function No(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ea(e, t, r) {
  var i = e._x0, n = e._y0, a = e._x1, o = e._y1, s = (a - i) / 3;
  e._context.bezierCurveTo(i + s, n + s * t, a - s, o - s * r, a, o);
}
function cn(e) {
  this._context = e;
}
cn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ea(this, this._t0, No(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ea(this, No(this, r = Po(this, e, t)), r);
          break;
        default:
          ea(this, this._t0, r = Po(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function ku(e) {
  this._context = new vu(e);
}
(ku.prototype = Object.create(cn.prototype)).point = function(e, t) {
  cn.prototype.point.call(this, t, e);
};
function vu(e) {
  this._context = e;
}
vu.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, n, a) {
    this._context.bezierCurveTo(t, e, i, r, a, n);
  }
};
function Su(e) {
  return new cn(e);
}
function Tu(e) {
  return new ku(e);
}
function Bu(e) {
  this._context = e;
}
Bu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = zo(e), n = zo(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(i[0][a], n[0][a], i[1][a], n[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function zo(e) {
  var t, r = e.length - 1, i, n = new Array(r), a = new Array(r), o = new Array(r);
  for (n[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) n[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (n[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = n[t] / a[t - 1], a[t] -= i, o[t] -= i * o[t - 1];
  for (n[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) n[t] = (o[t] - n[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + n[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - n[t + 1];
  return [n, a];
}
function Lu(e) {
  return new Bu(e);
}
function Dn(e, t) {
  this._context = e, this._t = t;
}
Dn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Mu(e) {
  return new Dn(e, 0.5);
}
function Au(e) {
  return new Dn(e, 0);
}
function $u(e) {
  return new Dn(e, 1);
}
function qr(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
qr.prototype = {
  constructor: qr,
  scale: function(e) {
    return e === 1 ? this : new qr(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new qr(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
qr.prototype;
var Fu = typeof global == "object" && global && global.Object === Object && global, l1 = typeof self == "object" && self && self.Object === Object && self, re = Fu || l1 || Function("return this")(), hn = re.Symbol, Eu = Object.prototype, c1 = Eu.hasOwnProperty, h1 = Eu.toString, $r = hn ? hn.toStringTag : void 0;
function u1(e) {
  var t = c1.call(e, $r), r = e[$r];
  try {
    e[$r] = void 0;
    var i = !0;
  } catch {
  }
  var n = h1.call(e);
  return i && (t ? e[$r] = r : delete e[$r]), n;
}
var f1 = Object.prototype, p1 = f1.toString;
function d1(e) {
  return p1.call(e);
}
var g1 = "[object Null]", m1 = "[object Undefined]", qo = hn ? hn.toStringTag : void 0;
function vr(e) {
  return e == null ? e === void 0 ? m1 : g1 : qo && qo in Object(e) ? u1(e) : d1(e);
}
function Ye(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var y1 = "[object AsyncFunction]", x1 = "[object Function]", b1 = "[object GeneratorFunction]", C1 = "[object Proxy]";
function Es(e) {
  if (!Ye(e))
    return !1;
  var t = vr(e);
  return t == x1 || t == b1 || t == y1 || t == C1;
}
var ra = re["__core-js_shared__"], Wo = function() {
  var e = /[^.]+$/.exec(ra && ra.keys && ra.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function w1(e) {
  return !!Wo && Wo in e;
}
var _1 = Function.prototype, k1 = _1.toString;
function Ge(e) {
  if (e != null) {
    try {
      return k1.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var v1 = /[\\^$.*+?()[\]{}|]/g, S1 = /^\[object .+?Constructor\]$/, T1 = Function.prototype, B1 = Object.prototype, L1 = T1.toString, M1 = B1.hasOwnProperty, A1 = RegExp(
  "^" + L1.call(M1).replace(v1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $1(e) {
  if (!Ye(e) || w1(e))
    return !1;
  var t = Es(e) ? A1 : S1;
  return t.test(Ge(e));
}
function F1(e, t) {
  return e == null ? void 0 : e[t];
}
function Ue(e, t) {
  var r = F1(e, t);
  return $1(r) ? r : void 0;
}
var ai = Ue(Object, "create");
function E1() {
  this.__data__ = ai ? ai(null) : {}, this.size = 0;
}
function O1(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var D1 = "__lodash_hash_undefined__", R1 = Object.prototype, I1 = R1.hasOwnProperty;
function P1(e) {
  var t = this.__data__;
  if (ai) {
    var r = t[e];
    return r === D1 ? void 0 : r;
  }
  return I1.call(t, e) ? t[e] : void 0;
}
var N1 = Object.prototype, z1 = N1.hasOwnProperty;
function q1(e) {
  var t = this.__data__;
  return ai ? t[e] !== void 0 : z1.call(t, e);
}
var W1 = "__lodash_hash_undefined__";
function H1(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ai && t === void 0 ? W1 : t, this;
}
function We(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
We.prototype.clear = E1;
We.prototype.delete = O1;
We.prototype.get = P1;
We.prototype.has = q1;
We.prototype.set = H1;
function j1() {
  this.__data__ = [], this.size = 0;
}
function Rn(e, t) {
  return e === t || e !== e && t !== t;
}
function In(e, t) {
  for (var r = e.length; r--; )
    if (Rn(e[r][0], t))
      return r;
  return -1;
}
var Y1 = Array.prototype, G1 = Y1.splice;
function U1(e) {
  var t = this.__data__, r = In(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : G1.call(t, r, 1), --this.size, !0;
}
function X1(e) {
  var t = this.__data__, r = In(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function V1(e) {
  return In(this.__data__, e) > -1;
}
function Z1(e, t) {
  var r = this.__data__, i = In(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
fe.prototype.clear = j1;
fe.prototype.delete = U1;
fe.prototype.get = X1;
fe.prototype.has = V1;
fe.prototype.set = Z1;
var si = Ue(re, "Map");
function K1() {
  this.size = 0, this.__data__ = {
    hash: new We(),
    map: new (si || fe)(),
    string: new We()
  };
}
function Q1(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Pn(e, t) {
  var r = e.__data__;
  return Q1(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function J1(e) {
  var t = Pn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function t2(e) {
  return Pn(this, e).get(e);
}
function e2(e) {
  return Pn(this, e).has(e);
}
function r2(e, t) {
  var r = Pn(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Te.prototype.clear = K1;
Te.prototype.delete = J1;
Te.prototype.get = t2;
Te.prototype.has = e2;
Te.prototype.set = r2;
var i2 = "Expected a function";
function di(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(i2);
  var r = function() {
    var i = arguments, n = t ? t.apply(this, i) : i[0], a = r.cache;
    if (a.has(n))
      return a.get(n);
    var o = e.apply(this, i);
    return r.cache = a.set(n, o) || a, o;
  };
  return r.cache = new (di.Cache || Te)(), r;
}
di.Cache = Te;
function n2() {
  this.__data__ = new fe(), this.size = 0;
}
function a2(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function s2(e) {
  return this.__data__.get(e);
}
function o2(e) {
  return this.__data__.has(e);
}
var l2 = 200;
function c2(e, t) {
  var r = this.__data__;
  if (r instanceof fe) {
    var i = r.__data__;
    if (!si || i.length < l2 - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Te(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Sr(e) {
  var t = this.__data__ = new fe(e);
  this.size = t.size;
}
Sr.prototype.clear = n2;
Sr.prototype.delete = a2;
Sr.prototype.get = s2;
Sr.prototype.has = o2;
Sr.prototype.set = c2;
var un = function() {
  try {
    var e = Ue(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Os(e, t, r) {
  t == "__proto__" && un ? un(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function qa(e, t, r) {
  (r !== void 0 && !Rn(e[t], r) || r === void 0 && !(t in e)) && Os(e, t, r);
}
function h2(e) {
  return function(t, r, i) {
    for (var n = -1, a = Object(t), o = i(t), s = o.length; s--; ) {
      var l = o[++n];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var u2 = h2(), Ou = typeof exports == "object" && exports && !exports.nodeType && exports, Ho = Ou && typeof module == "object" && module && !module.nodeType && module, f2 = Ho && Ho.exports === Ou, jo = f2 ? re.Buffer : void 0, Yo = jo ? jo.allocUnsafe : void 0;
function p2(e, t) {
  if (t)
    return e.slice();
  var r = e.length, i = Yo ? Yo(r) : new e.constructor(r);
  return e.copy(i), i;
}
var Go = re.Uint8Array;
function d2(e) {
  var t = new e.constructor(e.byteLength);
  return new Go(t).set(new Go(e)), t;
}
function g2(e, t) {
  var r = t ? d2(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function m2(e, t) {
  var r = -1, i = e.length;
  for (t || (t = Array(i)); ++r < i; )
    t[r] = e[r];
  return t;
}
var Uo = Object.create, y2 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Ye(t))
      return {};
    if (Uo)
      return Uo(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Du(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ru = Du(Object.getPrototypeOf, Object), x2 = Object.prototype;
function Nn(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || x2;
  return e === r;
}
function b2(e) {
  return typeof e.constructor == "function" && !Nn(e) ? y2(Ru(e)) : {};
}
function gi(e) {
  return e != null && typeof e == "object";
}
var C2 = "[object Arguments]";
function Xo(e) {
  return gi(e) && vr(e) == C2;
}
var Iu = Object.prototype, w2 = Iu.hasOwnProperty, _2 = Iu.propertyIsEnumerable, fn = Xo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xo : function(e) {
  return gi(e) && w2.call(e, "callee") && !_2.call(e, "callee");
}, pn = Array.isArray, k2 = 9007199254740991;
function Pu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= k2;
}
function zn(e) {
  return e != null && Pu(e.length) && !Es(e);
}
function v2(e) {
  return gi(e) && zn(e);
}
function S2() {
  return !1;
}
var Nu = typeof exports == "object" && exports && !exports.nodeType && exports, Vo = Nu && typeof module == "object" && module && !module.nodeType && module, T2 = Vo && Vo.exports === Nu, Zo = T2 ? re.Buffer : void 0, B2 = Zo ? Zo.isBuffer : void 0, Ds = B2 || S2, L2 = "[object Object]", M2 = Function.prototype, A2 = Object.prototype, zu = M2.toString, $2 = A2.hasOwnProperty, F2 = zu.call(Object);
function E2(e) {
  if (!gi(e) || vr(e) != L2)
    return !1;
  var t = Ru(e);
  if (t === null)
    return !0;
  var r = $2.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && zu.call(r) == F2;
}
var O2 = "[object Arguments]", D2 = "[object Array]", R2 = "[object Boolean]", I2 = "[object Date]", P2 = "[object Error]", N2 = "[object Function]", z2 = "[object Map]", q2 = "[object Number]", W2 = "[object Object]", H2 = "[object RegExp]", j2 = "[object Set]", Y2 = "[object String]", G2 = "[object WeakMap]", U2 = "[object ArrayBuffer]", X2 = "[object DataView]", V2 = "[object Float32Array]", Z2 = "[object Float64Array]", K2 = "[object Int8Array]", Q2 = "[object Int16Array]", J2 = "[object Int32Array]", tC = "[object Uint8Array]", eC = "[object Uint8ClampedArray]", rC = "[object Uint16Array]", iC = "[object Uint32Array]", ht = {};
ht[V2] = ht[Z2] = ht[K2] = ht[Q2] = ht[J2] = ht[tC] = ht[eC] = ht[rC] = ht[iC] = !0;
ht[O2] = ht[D2] = ht[U2] = ht[R2] = ht[X2] = ht[I2] = ht[P2] = ht[N2] = ht[z2] = ht[q2] = ht[W2] = ht[H2] = ht[j2] = ht[Y2] = ht[G2] = !1;
function nC(e) {
  return gi(e) && Pu(e.length) && !!ht[vr(e)];
}
function aC(e) {
  return function(t) {
    return e(t);
  };
}
var qu = typeof exports == "object" && exports && !exports.nodeType && exports, Xr = qu && typeof module == "object" && module && !module.nodeType && module, sC = Xr && Xr.exports === qu, ia = sC && Fu.process, Ko = function() {
  try {
    var e = Xr && Xr.require && Xr.require("util").types;
    return e || ia && ia.binding && ia.binding("util");
  } catch {
  }
}(), Qo = Ko && Ko.isTypedArray, Rs = Qo ? aC(Qo) : nC;
function Wa(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var oC = Object.prototype, lC = oC.hasOwnProperty;
function cC(e, t, r) {
  var i = e[t];
  (!(lC.call(e, t) && Rn(i, r)) || r === void 0 && !(t in e)) && Os(e, t, r);
}
function hC(e, t, r, i) {
  var n = !r;
  r || (r = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var s = t[a], l = void 0;
    l === void 0 && (l = e[s]), n ? Os(r, s, l) : cC(r, s, l);
  }
  return r;
}
function uC(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var fC = 9007199254740991, pC = /^(?:0|[1-9]\d*)$/;
function Wu(e, t) {
  var r = typeof e;
  return t = t ?? fC, !!t && (r == "number" || r != "symbol" && pC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var dC = Object.prototype, gC = dC.hasOwnProperty;
function mC(e, t) {
  var r = pn(e), i = !r && fn(e), n = !r && !i && Ds(e), a = !r && !i && !n && Rs(e), o = r || i || n || a, s = o ? uC(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || gC.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Wu(c, l))) && s.push(c);
  return s;
}
function yC(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var xC = Object.prototype, bC = xC.hasOwnProperty;
function CC(e) {
  if (!Ye(e))
    return yC(e);
  var t = Nn(e), r = [];
  for (var i in e)
    i == "constructor" && (t || !bC.call(e, i)) || r.push(i);
  return r;
}
function Hu(e) {
  return zn(e) ? mC(e, !0) : CC(e);
}
function wC(e) {
  return hC(e, Hu(e));
}
function _C(e, t, r, i, n, a, o) {
  var s = Wa(e, r), l = Wa(t, r), c = o.get(l);
  if (c) {
    qa(e, r, c);
    return;
  }
  var h = a ? a(s, l, r + "", e, t, o) : void 0, u = h === void 0;
  if (u) {
    var f = pn(l), p = !f && Ds(l), g = !f && !p && Rs(l);
    h = l, f || p || g ? pn(s) ? h = s : v2(s) ? h = m2(s) : p ? (u = !1, h = p2(l, !0)) : g ? (u = !1, h = g2(l, !0)) : h = [] : E2(l) || fn(l) ? (h = s, fn(s) ? h = wC(s) : (!Ye(s) || Es(s)) && (h = b2(l))) : u = !1;
  }
  u && (o.set(l, h), n(h, l, i, a, o), o.delete(l)), qa(e, r, h);
}
function ju(e, t, r, i, n) {
  e !== t && u2(t, function(a, o) {
    if (n || (n = new Sr()), Ye(a))
      _C(e, t, o, r, ju, i, n);
    else {
      var s = i ? i(Wa(e, o), a, o + "", e, t, n) : void 0;
      s === void 0 && (s = a), qa(e, o, s);
    }
  }, Hu);
}
function Yu(e) {
  return e;
}
function kC(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Jo = Math.max;
function vC(e, t, r) {
  return t = Jo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, n = -1, a = Jo(i.length - t, 0), o = Array(a); ++n < a; )
      o[n] = i[t + n];
    n = -1;
    for (var s = Array(t + 1); ++n < t; )
      s[n] = i[n];
    return s[t] = r(o), kC(e, this, s);
  };
}
function SC(e) {
  return function() {
    return e;
  };
}
var TC = un ? function(e, t) {
  return un(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: SC(t),
    writable: !0
  });
} : Yu, BC = 800, LC = 16, MC = Date.now;
function AC(e) {
  var t = 0, r = 0;
  return function() {
    var i = MC(), n = LC - (i - r);
    if (r = i, n > 0) {
      if (++t >= BC)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var $C = AC(TC);
function FC(e, t) {
  return $C(vC(e, t, Yu), e + "");
}
function EC(e, t, r) {
  if (!Ye(r))
    return !1;
  var i = typeof t;
  return (i == "number" ? zn(r) && Wu(t, r.length) : i == "string" && t in r) ? Rn(r[t], e) : !1;
}
function OC(e) {
  return FC(function(t, r) {
    var i = -1, n = r.length, a = n > 1 ? r[n - 1] : void 0, o = n > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (n--, a) : void 0, o && EC(r[0], r[1], o) && (a = n < 3 ? void 0 : a, n = 1), t = Object(t); ++i < n; ) {
      var s = r[i];
      s && e(t, s, i, a);
    }
    return t;
  });
}
var DC = OC(function(e, t, r) {
  ju(e, t, r);
}), RC = "​", IC = {
  curveBasis: Ri,
  curveBasisClosed: t1,
  curveBasisOpen: e1,
  curveBumpX: fu,
  curveBumpY: pu,
  curveBundle: r1,
  curveCardinalClosed: i1,
  curveCardinalOpen: n1,
  curveCardinal: yu,
  curveCatmullRomClosed: a1,
  curveCatmullRomOpen: s1,
  curveCatmullRom: bu,
  curveLinear: sn,
  curveLinearClosed: o1,
  curveMonotoneX: Su,
  curveMonotoneY: Tu,
  curveNatural: Lu,
  curveStep: Mu,
  curveStepAfter: $u,
  curveStepBefore: Au
}, PC = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, NC = /* @__PURE__ */ d(function(e, t) {
  const r = Gu(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const o = r.map((s) => s.args);
    Wi(o), i = Ct(i, [...o]);
  } else
    i = r.args;
  if (!i)
    return;
  let n = as(e, t);
  const a = "config";
  return i[a] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), i[n] = i[a], delete i[a]), i;
}, "detectInit"), Gu = /* @__PURE__ */ d(function(e, t = null) {
  var r, i;
  try {
    const n = new RegExp(
      `[%]{2}(?![{]${PC.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(n, "").replace(/'/gm, '"'), E.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let a;
    const o = [];
    for (; (a = Gr.exec(e)) !== null; )
      if (a.index === Gr.lastIndex && Gr.lastIndex++, a && !t || t && ((r = a[1]) != null && r.match(t)) || t && ((i = a[2]) != null && i.match(t))) {
        const s = a[1] ? a[1] : a[2], l = a[3] ? a[3].trim() : a[4] ? JSON.parse(a[4].trim()) : null;
        o.push({ type: s, args: l });
      }
    return o.length === 0 ? { type: e, args: null } : o.length === 1 ? o[0] : o;
  } catch (n) {
    return E.error(
      `ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), zC = /* @__PURE__ */ d(function(e) {
  return e.replace(Gr, "");
}, "removeDirectives"), qC = /* @__PURE__ */ d(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function Is(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return IC[r] ?? t;
}
d(Is, "interpolateToCurve");
function Uu(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? Rh(r) : r;
}
d(Uu, "formatUrl");
var WC = /* @__PURE__ */ d((e, ...t) => {
  const r = e.split("."), i = r.length - 1, n = r[i];
  let a = window;
  for (let o = 0; o < i; o++)
    if (a = a[r[o]], !a) {
      E.error(`Function name: ${e} not found in window`);
      return;
    }
  a[n](...t);
}, "runFunc");
function Ps(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
d(Ps, "distance");
function Xu(e) {
  let t, r = 0;
  e.forEach((n) => {
    r += Ps(n, t), t = n;
  });
  const i = r / 2;
  return Ns(e, i);
}
d(Xu, "traverseEdge");
function Vu(e) {
  return e.length === 1 ? e[0] : Xu(e);
}
d(Vu, "calcLabelPosition");
var tl = /* @__PURE__ */ d((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), Ns = /* @__PURE__ */ d((e, t) => {
  let r, i = t;
  for (const n of e) {
    if (r) {
      const a = Ps(n, r);
      if (a === 0)
        return r;
      if (a < i)
        i -= a;
      else {
        const o = i / a;
        if (o <= 0)
          return r;
        if (o >= 1)
          return { x: n.x, y: n.y };
        if (o > 0 && o < 1)
          return {
            x: tl((1 - o) * r.x + o * n.x, 5),
            y: tl((1 - o) * r.y + o * n.y, 5)
          };
      }
    }
    r = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), HC = /* @__PURE__ */ d((e, t, r) => {
  E.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const n = Ns(t, 25), a = e ? 10 : 5, o = Math.atan2(t[0].y - n.y, t[0].x - n.x), s = { x: 0, y: 0 };
  return s.x = Math.sin(o) * a + (t[0].x + n.x) / 2, s.y = -Math.cos(o) * a + (t[0].y + n.y) / 2, s;
}, "calcCardinalityPosition");
function Zu(e, t, r) {
  const i = structuredClone(r);
  E.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const n = 25 + e, a = Ns(i, n), o = 10 + e * 0.5, s = Math.atan2(i[0].y - a.y, i[0].x - a.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(s + Math.PI) * o + (i[0].x + a.x) / 2, l.y = -Math.cos(s + Math.PI) * o + (i[0].y + a.y) / 2) : t === "end_right" ? (l.x = Math.sin(s - Math.PI) * o + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(s - Math.PI) * o + (i[0].y + a.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(s) * o + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(s) * o + (i[0].y + a.y) / 2 - 5) : (l.x = Math.sin(s) * o + (i[0].x + a.x) / 2, l.y = -Math.cos(s) * o + (i[0].y + a.y) / 2), l;
}
d(Zu, "calcTerminalLabelPosition");
function Ku(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
d(Ku, "getStylesFromArray");
var el = 0, jC = /* @__PURE__ */ d(() => (el++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + el), "generateId");
function Qu(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let n = 0; n < e; n++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
d(Qu, "makeRandomHex");
var YC = /* @__PURE__ */ d((e) => Qu(e.length), "random"), GC = /* @__PURE__ */ d(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), UC = /* @__PURE__ */ d(function(e, t) {
  const r = t.text.replace(kr.lineBreakRegex, " "), [, i] = qn(t.fontSize), n = e.append("text");
  n.attr("x", t.x), n.attr("y", t.y), n.style("text-anchor", t.anchor), n.style("font-family", t.fontFamily), n.style("font-size", i), n.style("font-weight", t.fontWeight), n.attr("fill", t.fill), t.class !== void 0 && n.attr("class", t.class);
  const a = n.append("tspan");
  return a.attr("x", t.x + t.textMargin * 2), a.attr("fill", t.fill), a.text(r), n;
}, "drawSimpleText"), XC = di(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), kr.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), n = [];
    let a = "";
    return i.forEach((o, s) => {
      const l = ue(`${o} `, r), c = ue(a, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: p } = VC(o, t, "-", r);
        n.push(a, ...f), a = p;
      } else c + l >= t ? (n.push(a), a = o) : a = [a, o].filter(Boolean).join(" ");
      s + 1 === i.length && n.push(a);
    }), n.filter((o) => o !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), VC = di(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const n = [...e], a = [];
    let o = "";
    return n.forEach((s, l) => {
      const c = `${o}${s}`;
      if (ue(c, i) >= t) {
        const u = l + 1, f = n.length === u, p = `${c}${r}`;
        a.push(f ? c : p), o = "";
      } else
        o = c;
    }), { hyphenatedStrings: a, remainingWord: o };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function Ju(e, t) {
  return zs(e, t).height;
}
d(Ju, "calculateTextHeight");
function ue(e, t) {
  return zs(e, t).width;
}
d(ue, "calculateTextWidth");
var zs = di(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: n = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, a] = qn(r), o = ["sans-serif", i], s = e.split(kr.lineBreakRegex), l = [], c = et("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const f of o) {
      let p = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of s) {
        const y = GC();
        y.text = m || RC;
        const x = UC(h, y).style("font-size", a).style("font-weight", n).style("font-family", f), b = (x._groups || x)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), p = Math.round(b.height), g.height += p, g.lineHeight = Math.round(Math.max(g.lineHeight, p));
      }
      l.push(g);
    }
    h.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), ur, ZC = (ur = class {
  constructor(t = !1, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, d(ur, "InitIDGenerator"), ur), ki, KC = /* @__PURE__ */ d(function(e) {
  return ki = ki || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), ki.innerHTML = e, unescape(ki.textContent);
}, "entityDecode");
function qs(e) {
  return "str" in e;
}
d(qs, "isDetailedError");
var QC = /* @__PURE__ */ d((e, t, r, i) => {
  var a;
  if (!i)
    return;
  const n = (a = e.node()) == null ? void 0 : a.getBBox();
  n && e.append("text").text(i).attr("text-anchor", "middle").attr("x", n.x + n.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), qn = /* @__PURE__ */ d((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Ws(e, t) {
  return DC({}, e, t);
}
d(Ws, "cleanAndMerge");
var Kt = {
  assignWithDepth: Ct,
  wrapLabel: XC,
  calculateTextHeight: Ju,
  calculateTextWidth: ue,
  calculateTextDimensions: zs,
  cleanAndMerge: Ws,
  detectInit: NC,
  detectDirective: Gu,
  isSubstringInArray: qC,
  interpolateToCurve: Is,
  calcLabelPosition: Vu,
  calcCardinalityPosition: HC,
  calcTerminalLabelPosition: Zu,
  formatUrl: Uu,
  getStylesFromArray: Ku,
  generateId: jC,
  random: YC,
  runFunc: WC,
  entityDecode: KC,
  insertTitle: QC,
  parseFontSize: qn,
  InitIDGenerator: ZC
}, JC = /* @__PURE__ */ d(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), Xe = /* @__PURE__ */ d(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), LT = /* @__PURE__ */ d((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: n
}, a) => a || `${i ? `${i}_` : ""}${e}_${t}_${r}${n ? `_${n}` : ""}`, "getEdgeId");
function Lt(e) {
  return e ?? null;
}
d(Lt, "handleUndefinedAttr");
function Hs() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Ve = Hs();
function tf(e) {
  Ve = e;
}
const Vr = { exec: () => null };
function st(e, t = "") {
  let r = typeof e == "string" ? e : e.source;
  const i = {
    replace: (n, a) => {
      let o = typeof a == "string" ? a : a.source;
      return o = o.replace(Bt.caret, "$1"), r = r.replace(n, o), i;
    },
    getRegex: () => new RegExp(r, t)
  };
  return i;
}
const Bt = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, tw = /^(?:[ \t]*(?:\n|$))+/, ew = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, rw = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, mi = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, iw = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, js = /(?:[*+-]|\d{1,9}[.)])/, ef = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, rf = st(ef).replace(/bull/g, js).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), nw = st(ef).replace(/bull/g, js).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ys = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, aw = /^[^\n]+/, Gs = /(?!\s*\])(?:\\.|[^\[\]\\])+/, sw = st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Gs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ow = st(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, js).getRegex(), Wn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Us = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, lw = st("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Us).replace("tag", Wn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), nf = st(Ys).replace("hr", mi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Wn).getRegex(), cw = st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", nf).getRegex(), Xs = {
  blockquote: cw,
  code: ew,
  def: sw,
  fences: rw,
  heading: iw,
  hr: mi,
  html: lw,
  lheading: rf,
  list: ow,
  newline: tw,
  paragraph: nf,
  table: Vr,
  text: aw
}, rl = st("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", mi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Wn).getRegex(), hw = {
  ...Xs,
  lheading: nw,
  table: rl,
  paragraph: st(Ys).replace("hr", mi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", rl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Wn).getRegex()
}, uw = {
  ...Xs,
  html: st(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Us).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Vr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: st(Ys).replace("hr", mi).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", rf).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, fw = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, pw = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, af = /^( {2,}|\\)\n(?!\s*$)/, dw = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Hn = /[\p{P}\p{S}]/u, Vs = /[\s\p{P}\p{S}]/u, sf = /[^\s\p{P}\p{S}]/u, gw = st(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Vs).getRegex(), of = /(?!~)[\p{P}\p{S}]/u, mw = /(?!~)[\s\p{P}\p{S}]/u, yw = /(?:[^\s\p{P}\p{S}]|~)/u, xw = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, lf = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, bw = st(lf, "u").replace(/punct/g, Hn).getRegex(), Cw = st(lf, "u").replace(/punct/g, of).getRegex(), cf = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", ww = st(cf, "gu").replace(/notPunctSpace/g, sf).replace(/punctSpace/g, Vs).replace(/punct/g, Hn).getRegex(), _w = st(cf, "gu").replace(/notPunctSpace/g, yw).replace(/punctSpace/g, mw).replace(/punct/g, of).getRegex(), kw = st("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, sf).replace(/punctSpace/g, Vs).replace(/punct/g, Hn).getRegex(), vw = st(/\\(punct)/, "gu").replace(/punct/g, Hn).getRegex(), Sw = st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Tw = st(Us).replace("(?:-->|$)", "-->").getRegex(), Bw = st("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Tw).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), dn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Lw = st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", dn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), hf = st(/^!?\[(label)\]\[(ref)\]/).replace("label", dn).replace("ref", Gs).getRegex(), uf = st(/^!?\[(ref)\](?:\[\])?/).replace("ref", Gs).getRegex(), Mw = st("reflink|nolink(?!\\()", "g").replace("reflink", hf).replace("nolink", uf).getRegex(), Zs = {
  _backpedal: Vr,
  // only used for GFM url
  anyPunctuation: vw,
  autolink: Sw,
  blockSkip: xw,
  br: af,
  code: pw,
  del: Vr,
  emStrongLDelim: bw,
  emStrongRDelimAst: ww,
  emStrongRDelimUnd: kw,
  escape: fw,
  link: Lw,
  nolink: uf,
  punctuation: gw,
  reflink: hf,
  reflinkSearch: Mw,
  tag: Bw,
  text: dw,
  url: Vr
}, Aw = {
  ...Zs,
  link: st(/^!?\[(label)\]\((.*?)\)/).replace("label", dn).getRegex(),
  reflink: st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", dn).getRegex()
}, Ha = {
  ...Zs,
  emStrongRDelimAst: _w,
  emStrongLDelim: Cw,
  url: st(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, $w = {
  ...Ha,
  br: st(af).replace("{2,}", "*").getRegex(),
  text: st(Ha.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, vi = {
  normal: Xs,
  gfm: hw,
  pedantic: uw
}, Fr = {
  normal: Zs,
  gfm: Ha,
  breaks: $w,
  pedantic: Aw
}, Fw = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, il = (e) => Fw[e];
function Xt(e, t) {
  if (t) {
    if (Bt.escapeTest.test(e))
      return e.replace(Bt.escapeReplace, il);
  } else if (Bt.escapeTestNoEncode.test(e))
    return e.replace(Bt.escapeReplaceNoEncode, il);
  return e;
}
function nl(e) {
  try {
    e = encodeURI(e).replace(Bt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function al(e, t) {
  var a;
  const r = e.replace(Bt.findPipe, (o, s, l) => {
    let c = !1, h = s;
    for (; --h >= 0 && l[h] === "\\"; )
      c = !c;
    return c ? "|" : " |";
  }), i = r.split(Bt.splitPipe);
  let n = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !((a = i.at(-1)) != null && a.trim()) && i.pop(), t)
    if (i.length > t)
      i.splice(t);
    else
      for (; i.length < t; )
        i.push("");
  for (; n < i.length; n++)
    i[n] = i[n].trim().replace(Bt.slashPipe, "|");
  return i;
}
function Er(e, t, r) {
  const i = e.length;
  if (i === 0)
    return "";
  let n = 0;
  for (; n < i && e.charAt(i - n - 1) === t; )
    n++;
  return e.slice(0, i - n);
}
function Ew(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++)
    if (e[i] === "\\")
      i++;
    else if (e[i] === t[0])
      r++;
    else if (e[i] === t[1] && (r--, r < 0))
      return i;
  return r > 0 ? -2 : -1;
}
function sl(e, t, r, i, n) {
  const a = t.href, o = t.title || null, s = e[1].replace(n.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  const l = {
    type: e[0].charAt(0) === "!" ? "image" : "link",
    raw: r,
    href: a,
    title: o,
    text: s,
    tokens: i.inlineTokens(s)
  };
  return i.state.inLink = !1, l;
}
function Ow(e, t, r) {
  const i = e.match(r.other.indentCodeCompensation);
  if (i === null)
    return t;
  const n = i[1];
  return t.split(`
`).map((a) => {
    const o = a.match(r.other.beginningSpace);
    if (o === null)
      return a;
    const [s] = o;
    return s.length >= n.length ? a.slice(n.length) : a;
  }).join(`
`);
}
class gn {
  // set by the lexer
  constructor(t) {
    lt(this, "options");
    lt(this, "rules");
    // set by the lexer
    lt(this, "lexer");
    this.options = t || Ve;
  }
  space(t) {
    const r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0)
      return {
        type: "space",
        raw: r[0]
      };
  }
  code(t) {
    const r = this.rules.block.code.exec(t);
    if (r) {
      const i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: r[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : Er(i, `
`)
      };
    }
  }
  fences(t) {
    const r = this.rules.block.fences.exec(t);
    if (r) {
      const i = r[0], n = Ow(i, r[3] || "", this.rules);
      return {
        type: "code",
        raw: i,
        lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2],
        text: n
      };
    }
  }
  heading(t) {
    const r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        const n = Er(i, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (i = n.trim());
      }
      return {
        type: "heading",
        raw: r[0],
        depth: r[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(t) {
    const r = this.rules.block.hr.exec(t);
    if (r)
      return {
        type: "hr",
        raw: Er(r[0], `
`)
      };
  }
  blockquote(t) {
    const r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = Er(r[0], `
`).split(`
`), n = "", a = "";
      const o = [];
      for (; i.length > 0; ) {
        let s = !1;
        const l = [];
        let c;
        for (c = 0; c < i.length; c++)
          if (this.rules.other.blockquoteStart.test(i[c]))
            l.push(i[c]), s = !0;
          else if (!s)
            l.push(i[c]);
          else
            break;
        i = i.slice(c);
        const h = l.join(`
`), u = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${h}` : h, a = a ? `${a}
${u}` : u;
        const f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, o, !0), this.lexer.state.top = f, i.length === 0)
          break;
        const p = o.at(-1);
        if ((p == null ? void 0 : p.type) === "code")
          break;
        if ((p == null ? void 0 : p.type) === "blockquote") {
          const g = p, m = g.raw + `
` + i.join(`
`), y = this.blockquote(m);
          o[o.length - 1] = y, n = n.substring(0, n.length - g.raw.length) + y.raw, a = a.substring(0, a.length - g.text.length) + y.text;
          break;
        } else if ((p == null ? void 0 : p.type) === "list") {
          const g = p, m = g.raw + `
` + i.join(`
`), y = this.list(m);
          o[o.length - 1] = y, n = n.substring(0, n.length - p.raw.length) + y.raw, a = a.substring(0, a.length - g.raw.length) + y.raw, i = m.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: n,
        tokens: o,
        text: a
      };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim();
      const n = i.length > 1, a = {
        type: "list",
        raw: "",
        ordered: n,
        start: n ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = n ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = n ? i : "[*+-]");
      const o = this.rules.other.listItemRegex(i);
      let s = !1;
      for (; t; ) {
        let c = !1, h = "", u = "";
        if (!(r = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        h = r[0], t = t.substring(h.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), p = t.split(`
`, 1)[0], g = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = f.trimStart()) : g ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = f.slice(m), m += r[1].length), g && this.rules.other.blankLine.test(p) && (h += p + `
`, t = t.substring(p.length + 1), c = !0), !c) {
          const b = this.rules.other.nextBulletRegex(m), w = this.rules.other.hrRegex(m), S = this.rules.other.fencesBeginRegex(m), k = this.rules.other.headingBeginRegex(m), C = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            const _ = t.split(`
`, 1)[0];
            let O;
            if (p = _, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), O = p) : O = p.replace(this.rules.other.tabCharGlobal, "    "), S.test(p) || k.test(p) || C.test(p) || b.test(p) || w.test(p))
              break;
            if (O.search(this.rules.other.nonSpaceChar) >= m || !p.trim())
              u += `
` + O.slice(m);
            else {
              if (g || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(f) || k.test(f) || w.test(f))
                break;
              u += `
` + p;
            }
            !g && !p.trim() && (g = !0), h += _ + `
`, t = t.substring(_.length + 1), f = O.slice(m);
          }
        }
        a.loose || (s ? a.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (s = !0));
        let y = null, x;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(u), y && (x = y[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), a.items.push({
          type: "list_item",
          raw: h,
          task: !!y,
          checked: x,
          loose: !1,
          text: u,
          tokens: []
        }), a.raw += h;
      }
      const l = a.items.at(-1);
      if (l)
        l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else
        return;
      a.raw = a.raw.trimEnd();
      for (let c = 0; c < a.items.length; c++)
        if (this.lexer.state.top = !1, a.items[c].tokens = this.lexer.blockTokens(a.items[c].text, []), !a.loose) {
          const h = a.items[c].tokens.filter((f) => f.type === "space"), u = h.length > 0 && h.some((f) => this.rules.other.anyLine.test(f.raw));
          a.loose = u;
        }
      if (a.loose)
        for (let c = 0; c < a.items.length; c++)
          a.items[c].loose = !0;
      return a;
    }
  }
  html(t) {
    const r = this.rules.block.html.exec(t);
    if (r)
      return {
        type: "html",
        block: !0,
        raw: r[0],
        pre: r[1] === "pre" || r[1] === "script" || r[1] === "style",
        text: r[0]
      };
  }
  def(t) {
    const r = this.rules.block.def.exec(t);
    if (r) {
      const i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return {
        type: "def",
        tag: i,
        raw: r[0],
        href: n,
        title: a
      };
    }
  }
  table(t) {
    var s;
    const r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2]))
      return;
    const i = al(r[1]), n = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (s = r[3]) != null && s.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: r[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === n.length) {
      for (const l of n)
        this.rules.other.tableAlignRight.test(l) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? o.align.push("left") : o.align.push(null);
      for (let l = 0; l < i.length; l++)
        o.header.push({
          text: i[l],
          tokens: this.lexer.inline(i[l]),
          header: !0,
          align: o.align[l]
        });
      for (const l of a)
        o.rows.push(al(l, o.header.length).map((c, h) => ({
          text: c,
          tokens: this.lexer.inline(c),
          header: !1,
          align: o.align[h]
        })));
      return o;
    }
  }
  lheading(t) {
    const r = this.rules.block.lheading.exec(t);
    if (r)
      return {
        type: "heading",
        raw: r[0],
        depth: r[2].charAt(0) === "=" ? 1 : 2,
        text: r[1],
        tokens: this.lexer.inline(r[1])
      };
  }
  paragraph(t) {
    const r = this.rules.block.paragraph.exec(t);
    if (r) {
      const i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return {
        type: "paragraph",
        raw: r[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(t) {
    const r = this.rules.block.text.exec(t);
    if (r)
      return {
        type: "text",
        raw: r[0],
        text: r[0],
        tokens: this.lexer.inline(r[0])
      };
  }
  escape(t) {
    const r = this.rules.inline.escape.exec(t);
    if (r)
      return {
        type: "escape",
        raw: r[0],
        text: r[1]
      };
  }
  tag(t) {
    const r = this.rules.inline.tag.exec(t);
    if (r)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: r[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: r[0]
      };
  }
  link(t) {
    const r = this.rules.inline.link.exec(t);
    if (r) {
      const i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i))
          return;
        const o = Er(i.slice(0, -1), "\\");
        if ((i.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Ew(r[2], "()");
        if (o === -2)
          return;
        if (o > -1) {
          const l = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + o;
          r[2] = r[2].substring(0, o), r[0] = r[0].substring(0, l).trim(), r[3] = "";
        }
      }
      let n = r[2], a = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(n);
        o && (n = o[1], a = o[3]);
      } else
        a = r[3] ? r[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? n = n.slice(1) : n = n.slice(1, -1)), sl(r, {
        href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
        title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
      }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      const n = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = r[n.toLowerCase()];
      if (!a) {
        const o = i[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return sl(i, a, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let n = this.rules.inline.emStrongLDelim.exec(t);
    if (!n || n[3] && i.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(n[1] || n[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const o = [...n[0]].length - 1;
      let s, l, c = o, h = 0;
      const u = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, r = r.slice(-1 * t.length + o); (n = u.exec(r)) != null; ) {
        if (s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !s)
          continue;
        if (l = [...s].length, n[3] || n[4]) {
          c += l;
          continue;
        } else if ((n[5] || n[6]) && o % 3 && !((o + l) % 3)) {
          h += l;
          continue;
        }
        if (c -= l, c > 0)
          continue;
        l = Math.min(l, l + c + h);
        const f = [...n[0]][0].length, p = t.slice(0, o + n.index + f + l);
        if (Math.min(o, l) % 2) {
          const m = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: m,
            tokens: this.lexer.inlineTokens(m)
          };
        }
        const g = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: g,
          tokens: this.lexer.inlineTokens(g)
        };
      }
    }
  }
  codespan(t) {
    const r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " ");
      const n = this.rules.other.nonSpaceChar.test(i), a = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return n && a && (i = i.substring(1, i.length - 1)), {
        type: "codespan",
        raw: r[0],
        text: i
      };
    }
  }
  br(t) {
    const r = this.rules.inline.br.exec(t);
    if (r)
      return {
        type: "br",
        raw: r[0]
      };
  }
  del(t) {
    const r = this.rules.inline.del.exec(t);
    if (r)
      return {
        type: "del",
        raw: r[0],
        text: r[2],
        tokens: this.lexer.inlineTokens(r[2])
      };
  }
  autolink(t) {
    const r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, n;
      return r[2] === "@" ? (i = r[1], n = "mailto:" + i) : (i = r[1], n = i), {
        type: "link",
        raw: r[0],
        text: i,
        href: n,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  url(t) {
    var i;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let n, a;
      if (r[2] === "@")
        n = r[0], a = "mailto:" + n;
      else {
        let o;
        do
          o = r[0], r[0] = ((i = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : i[0]) ?? "";
        while (o !== r[0]);
        n = r[0], r[1] === "www." ? a = "http://" + r[0] : a = r[0];
      }
      return {
        type: "link",
        raw: r[0],
        text: n,
        href: a,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  inlineText(t) {
    const r = this.rules.inline.text.exec(t);
    if (r) {
      const i = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: r[0],
        text: r[0],
        escaped: i
      };
    }
  }
}
class qt {
  constructor(t) {
    lt(this, "tokens");
    lt(this, "options");
    lt(this, "state");
    lt(this, "tokenizer");
    lt(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ve, this.options.tokenizer = this.options.tokenizer || new gn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const r = {
      other: Bt,
      block: vi.normal,
      inline: Fr.normal
    };
    this.options.pedantic ? (r.block = vi.pedantic, r.inline = Fr.pedantic) : this.options.gfm && (r.block = vi.gfm, this.options.breaks ? r.inline = Fr.breaks : r.inline = Fr.gfm), this.tokenizer.rules = r;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: vi,
      inline: Fr
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, r) {
    return new qt(r).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, r) {
    return new qt(r).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(Bt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      const i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    var n, a, o;
    for (this.options.pedantic && (t = t.replace(Bt.tabCharGlobal, "    ").replace(Bt.spaceLine, "")); t; ) {
      let s;
      if ((a = (n = this.options.extensions) == null ? void 0 : n.block) != null && a.some((c) => (s = c.call({ lexer: this }, t, r)) ? (t = t.substring(s.raw.length), r.push(s), !0) : !1))
        continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        const c = r.at(-1);
        s.raw.length === 1 && c !== void 0 ? c.raw += `
` : r.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        const c = r.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + s.raw, c.text += `
` + s.text, this.inlineQueue.at(-1).src = c.text) : r.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.list(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.html(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.def(t)) {
        t = t.substring(s.raw.length);
        const c = r.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + s.raw, c.text += `
` + s.raw, this.inlineQueue.at(-1).src = c.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
          href: s.href,
          title: s.title
        });
        continue;
      }
      if (s = this.tokenizer.table(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      let l = t;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let c = 1 / 0;
        const h = t.slice(1);
        let u;
        this.options.extensions.startBlock.forEach((f) => {
          u = f.call({ lexer: this }, h), typeof u == "number" && u >= 0 && (c = Math.min(c, u));
        }), c < 1 / 0 && c >= 0 && (l = t.substring(0, c + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(l))) {
        const c = r.at(-1);
        i && (c == null ? void 0 : c.type) === "paragraph" ? (c.raw += `
` + s.raw, c.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : r.push(s), i = l.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        const c = r.at(-1);
        (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + s.raw, c.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : r.push(s);
        continue;
      }
      if (t) {
        const c = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else
          throw new Error(c);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, r = []) {
    var s, l, c;
    let i = t, n = null;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; )
          h.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; )
      i = i.slice(0, n.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; )
      i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let a = !1, o = "";
    for (; t; ) {
      a || (o = ""), a = !1;
      let h;
      if ((l = (s = this.options.extensions) == null ? void 0 : s.inline) != null && l.some((f) => (h = f.call({ lexer: this }, t, r)) ? (t = t.substring(h.raw.length), r.push(h), !0) : !1))
        continue;
      if (h = this.tokenizer.escape(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.tag(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.link(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(h.raw.length);
        const f = r.at(-1);
        h.type === "text" && (f == null ? void 0 : f.type) === "text" ? (f.raw += h.raw, f.text += h.text) : r.push(h);
        continue;
      }
      if (h = this.tokenizer.emStrong(t, i, o)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.codespan(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.br(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.del(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.autolink(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (!this.state.inLink && (h = this.tokenizer.url(t))) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      let u = t;
      if ((c = this.options.extensions) != null && c.startInline) {
        let f = 1 / 0;
        const p = t.slice(1);
        let g;
        this.options.extensions.startInline.forEach((m) => {
          g = m.call({ lexer: this }, p), typeof g == "number" && g >= 0 && (f = Math.min(f, g));
        }), f < 1 / 0 && f >= 0 && (u = t.substring(0, f + 1));
      }
      if (h = this.tokenizer.inlineText(u)) {
        t = t.substring(h.raw.length), h.raw.slice(-1) !== "_" && (o = h.raw.slice(-1)), a = !0;
        const f = r.at(-1);
        (f == null ? void 0 : f.type) === "text" ? (f.raw += h.raw, f.text += h.text) : r.push(h);
        continue;
      }
      if (t) {
        const f = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(f);
          break;
        } else
          throw new Error(f);
      }
    }
    return r;
  }
}
class mn {
  // set by the parser
  constructor(t) {
    lt(this, "options");
    lt(this, "parser");
    this.options = t || Ve;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    var o;
    const n = (o = (r || "").match(Bt.notSpaceStart)) == null ? void 0 : o[0], a = t.replace(Bt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Xt(n) + '">' + (i ? a : Xt(a, !0)) + `</code></pre>
` : "<pre><code>" + (i ? a : Xt(a, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const r = t.ordered, i = t.start;
    let n = "";
    for (let s = 0; s < t.items.length; s++) {
      const l = t.items[s];
      n += this.listitem(l);
    }
    const a = r ? "ol" : "ul", o = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + a + o + `>
` + n + "</" + a + `>
`;
  }
  listitem(t) {
    var i;
    let r = "";
    if (t.task) {
      const n = this.checkbox({ checked: !!t.checked });
      t.loose ? ((i = t.tokens[0]) == null ? void 0 : i.type) === "paragraph" ? (t.tokens[0].text = n + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = n + " " + Xt(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: n + " ",
        text: n + " ",
        escaped: !0
      }) : r += n + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let a = 0; a < t.header.length; a++)
      i += this.tablecell(t.header[a]);
    r += this.tablerow({ text: i });
    let n = "";
    for (let a = 0; a < t.rows.length; a++) {
      const o = t.rows[a];
      i = "";
      for (let s = 0; s < o.length; s++)
        i += this.tablecell(o[s]);
      n += this.tablerow({ text: i });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${Xt(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    const n = this.parser.parseInline(i), a = nl(t);
    if (a === null)
      return n;
    t = a;
    let o = '<a href="' + t + '"';
    return r && (o += ' title="' + Xt(r) + '"'), o += ">" + n + "</a>", o;
  }
  image({ href: t, title: r, text: i, tokens: n }) {
    n && (i = this.parser.parseInline(n, this.parser.textRenderer));
    const a = nl(t);
    if (a === null)
      return Xt(i);
    t = a;
    let o = `<img src="${t}" alt="${i}"`;
    return r && (o += ` title="${Xt(r)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Xt(t.text);
  }
}
class Ks {
  // no need for block level renderers
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}
class Wt {
  constructor(t) {
    lt(this, "options");
    lt(this, "renderer");
    lt(this, "textRenderer");
    this.options = t || Ve, this.options.renderer = this.options.renderer || new mn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ks();
  }
  /**
   * Static Parse Method
   */
  static parse(t, r) {
    return new Wt(r).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, r) {
    return new Wt(r).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, r = !0) {
    var n, a;
    let i = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if ((a = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && a[s.type]) {
        const c = s, h = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (h !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type)) {
          i += h || "";
          continue;
        }
      }
      const l = s;
      switch (l.type) {
        case "space": {
          i += this.renderer.space(l);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(l);
          continue;
        }
        case "code": {
          i += this.renderer.code(l);
          continue;
        }
        case "table": {
          i += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          i += this.renderer.list(l);
          continue;
        }
        case "html": {
          i += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let c = l, h = this.renderer.text(c);
          for (; o + 1 < t.length && t[o + 1].type === "text"; )
            c = t[++o], h += `
` + this.renderer.text(c);
          r ? i += this.renderer.paragraph({
            type: "paragraph",
            raw: h,
            text: h,
            tokens: [{ type: "text", raw: h, text: h, escaped: !0 }]
          }) : i += h;
          continue;
        }
        default: {
          const c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, r = this.renderer) {
    var n, a;
    let i = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if ((a = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && a[s.type]) {
        const c = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (c !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += c || "";
          continue;
        }
      }
      const l = s;
      switch (l.type) {
        case "escape": {
          i += r.text(l);
          break;
        }
        case "html": {
          i += r.html(l);
          break;
        }
        case "link": {
          i += r.link(l);
          break;
        }
        case "image": {
          i += r.image(l);
          break;
        }
        case "strong": {
          i += r.strong(l);
          break;
        }
        case "em": {
          i += r.em(l);
          break;
        }
        case "codespan": {
          i += r.codespan(l);
          break;
        }
        case "br": {
          i += r.br(l);
          break;
        }
        case "del": {
          i += r.del(l);
          break;
        }
        case "text": {
          i += r.text(l);
          break;
        }
        default: {
          const c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return i;
  }
}
class Zr {
  constructor(t) {
    lt(this, "options");
    lt(this, "block");
    this.options = t || Ve;
  }
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? qt.lex : qt.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? Wt.parse : Wt.parseInline;
  }
}
lt(Zr, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Dw {
  constructor(...t) {
    lt(this, "defaults", Hs());
    lt(this, "options", this.setOptions);
    lt(this, "parse", this.parseMarkdown(!0));
    lt(this, "parseInline", this.parseMarkdown(!1));
    lt(this, "Parser", Wt);
    lt(this, "Renderer", mn);
    lt(this, "TextRenderer", Ks);
    lt(this, "Lexer", qt);
    lt(this, "Tokenizer", gn);
    lt(this, "Hooks", Zr);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, r) {
    var n, a;
    let i = [];
    for (const o of t)
      switch (i = i.concat(r.call(this, o)), o.type) {
        case "table": {
          const s = o;
          for (const l of s.header)
            i = i.concat(this.walkTokens(l.tokens, r));
          for (const l of s.rows)
            for (const c of l)
              i = i.concat(this.walkTokens(c.tokens, r));
          break;
        }
        case "list": {
          const s = o;
          i = i.concat(this.walkTokens(s.items, r));
          break;
        }
        default: {
          const s = o;
          (a = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && a[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((l) => {
            const c = s[l].flat(1 / 0);
            i = i.concat(this.walkTokens(c, r));
          }) : s.tokens && (i = i.concat(this.walkTokens(s.tokens, r)));
        }
      }
    return i;
  }
  use(...t) {
    const r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      const n = { ...i };
      if (n.async = this.defaults.async || n.async || !1, i.extensions && (i.extensions.forEach((a) => {
        if (!a.name)
          throw new Error("extension name required");
        if ("renderer" in a) {
          const o = r.renderers[a.name];
          o ? r.renderers[a.name] = function(...s) {
            let l = a.renderer.apply(this, s);
            return l === !1 && (l = o.apply(this, s)), l;
          } : r.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = r[a.level];
          o ? o.unshift(a.tokenizer) : r[a.level] = [a.tokenizer], a.start && (a.level === "block" ? r.startBlock ? r.startBlock.push(a.start) : r.startBlock = [a.start] : a.level === "inline" && (r.startInline ? r.startInline.push(a.start) : r.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (r.childTokens[a.name] = a.childTokens);
      }), n.extensions = r), i.renderer) {
        const a = this.defaults.renderer || new mn(this.defaults);
        for (const o in i.renderer) {
          if (!(o in a))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const s = o, l = i.renderer[s], c = a[s];
          a[s] = (...h) => {
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u || "";
          };
        }
        n.renderer = a;
      }
      if (i.tokenizer) {
        const a = this.defaults.tokenizer || new gn(this.defaults);
        for (const o in i.tokenizer) {
          if (!(o in a))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const s = o, l = i.tokenizer[s], c = a[s];
          a[s] = (...h) => {
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u;
          };
        }
        n.tokenizer = a;
      }
      if (i.hooks) {
        const a = this.defaults.hooks || new Zr();
        for (const o in i.hooks) {
          if (!(o in a))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const s = o, l = i.hooks[s], c = a[s];
          Zr.passThroughHooks.has(o) ? a[s] = (h) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(a, h)).then((f) => c.call(a, f));
            const u = l.call(a, h);
            return c.call(a, u);
          } : a[s] = (...h) => {
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u;
          };
        }
        n.hooks = a;
      }
      if (i.walkTokens) {
        const a = this.defaults.walkTokens, o = i.walkTokens;
        n.walkTokens = function(s) {
          let l = [];
          return l.push(o.call(this, s)), a && (l = l.concat(a.call(this, s))), l;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return qt.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return Wt.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (i, n) => {
      const a = { ...n }, o = { ...this.defaults, ...a }, s = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && a.async === !1)
        return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof i > "u" || i === null)
        return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof i != "string")
        return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const l = o.hooks ? o.hooks.provideLexer() : t ? qt.lex : qt.lexInline, c = o.hooks ? o.hooks.provideParser() : t ? Wt.parse : Wt.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(i) : i).then((h) => l(h, o)).then((h) => o.hooks ? o.hooks.processAllTokens(h) : h).then((h) => o.walkTokens ? Promise.all(this.walkTokens(h, o.walkTokens)).then(() => h) : h).then((h) => c(h, o)).then((h) => o.hooks ? o.hooks.postprocess(h) : h).catch(s);
      try {
        o.hooks && (i = o.hooks.preprocess(i));
        let h = l(i, o);
        o.hooks && (h = o.hooks.processAllTokens(h)), o.walkTokens && this.walkTokens(h, o.walkTokens);
        let u = c(h, o);
        return o.hooks && (u = o.hooks.postprocess(u)), u;
      } catch (h) {
        return s(h);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const n = "<p>An error occurred:</p><pre>" + Xt(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(n) : n;
      }
      if (r)
        return Promise.reject(i);
      throw i;
    };
  }
}
const He = new Dw();
function at(e, t) {
  return He.parse(e, t);
}
at.options = at.setOptions = function(e) {
  return He.setOptions(e), at.defaults = He.defaults, tf(at.defaults), at;
};
at.getDefaults = Hs;
at.defaults = Ve;
at.use = function(...e) {
  return He.use(...e), at.defaults = He.defaults, tf(at.defaults), at;
};
at.walkTokens = function(e, t) {
  return He.walkTokens(e, t);
};
at.parseInline = He.parseInline;
at.Parser = Wt;
at.parser = Wt.parse;
at.Renderer = mn;
at.TextRenderer = Ks;
at.Lexer = qt;
at.lexer = qt.lex;
at.Tokenizer = gn;
at.Hooks = Zr;
at.parse = at;
at.options;
at.setOptions;
at.use;
at.walkTokens;
at.parseInline;
Wt.parse;
qt.lex;
function ff(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = i.reduce(function(s, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? s.concat(c.map(function(h) {
      var u, f;
      return (f = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && f !== void 0 ? f : 0;
    })) : s;
  }, []);
  if (n.length) {
    var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    i = i.map(function(s) {
      return s.replace(a, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var o = i[0];
  return t.forEach(function(s, l) {
    var c = o.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", u = s;
    typeof s == "string" && s.includes(`
`) && (u = String(s).split(`
`).map(function(f, p) {
      return p === 0 ? f : "" + h + f;
    }).join(`
`)), o += u + i[l + 1];
  }), o;
}
function pf(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), n = ff(i);
  return t === !1 ? n.replace(/ /g, "&nbsp;") : n;
}
d(pf, "preprocessMarkdown");
function df(e, t = {}) {
  const r = pf(e, t), i = at.lexer(r), n = [[]];
  let a = 0;
  function o(s, l = "normal") {
    s.type === "text" ? s.text.split(`
`).forEach((h, u) => {
      u !== 0 && (a++, n.push([])), h.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && n[a].push({ content: f, type: l });
      });
    }) : s.type === "strong" || s.type === "em" ? s.tokens.forEach((c) => {
      o(c, s.type);
    }) : s.type === "html" && n[a].push({ content: s.text, type: "normal" });
  }
  return d(o, "processNode"), i.forEach((s) => {
    var l;
    s.type === "paragraph" ? (l = s.tokens) == null || l.forEach((c) => {
      o(c);
    }) : s.type === "html" && n[a].push({ content: s.text, type: "normal" });
  }), n;
}
d(df, "markdownToLines");
function gf(e, { markdownAutoWrap: t } = {}) {
  const r = at.lexer(e);
  function i(n) {
    var a, o, s;
    return n.type === "text" ? t === !1 ? n.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : n.text.replace(/\n */g, "<br/>") : n.type === "strong" ? `<strong>${(a = n.tokens) == null ? void 0 : a.map(i).join("")}</strong>` : n.type === "em" ? `<em>${(o = n.tokens) == null ? void 0 : o.map(i).join("")}</em>` : n.type === "paragraph" ? `<p>${(s = n.tokens) == null ? void 0 : s.map(i).join("")}</p>` : n.type === "space" ? "" : n.type === "html" ? `${n.text}` : n.type === "escape" ? n.text : `Unsupported markdown: ${n.type}`;
  }
  return d(i, "output"), r.map(i).join("");
}
d(gf, "markdownToHTML");
function mf(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
d(mf, "splitTextToChars");
function yf(e, t) {
  const r = mf(t.content);
  return Qs(e, [], r, t.type);
}
d(yf, "splitWordToFitWidth");
function Qs(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [n, ...a] = r, o = [...t, n];
  return e([{ content: o.join(""), type: i }]) ? Qs(e, o, a, i) : (t.length === 0 && n && (t.push(n), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
d(Qs, "splitWordToFitWidthRecursion");
function xf(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return yn(e, t);
}
d(xf, "splitLineToFitWidth");
function yn(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let n = "";
  e[0].content === " " && (n = " ", e.shift());
  const a = e.shift() ?? { content: " ", type: "normal" }, o = [...i];
  if (n !== "" && o.push({ content: n, type: "normal" }), o.push(a), t(o))
    return yn(e, t, r, o);
  if (i.length > 0)
    r.push(i), e.unshift(a);
  else if (a.content) {
    const [s, l] = yf(t, a);
    r.push([s]), l.content && e.unshift(l);
  }
  return yn(e, t, r);
}
d(yn, "splitLineToFitWidthRecursion");
function ja(e, t) {
  t && e.attr("style", t);
}
d(ja, "applyStyle");
async function bf(e, t, r, i, n = !1) {
  const a = e.append("foreignObject");
  a.attr("width", `${10 * r}px`), a.attr("height", `${10 * r}px`);
  const o = a.append("xhtml:div");
  let s = t.label;
  t.label && mr(t.label) && (s = await ss(t.label.replace(kr.lineBreakRegex, `
`), nt()));
  const l = t.isNode ? "nodeLabel" : "edgeLabel", c = o.append("span");
  c.html(s), ja(c, t.labelStyle), c.attr("class", `${l} ${i}`), ja(o, t.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", r + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), n && o.attr("class", "labelBkg");
  let h = o.node().getBoundingClientRect();
  return h.width === r && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", r + "px"), h = o.node().getBoundingClientRect()), a.node();
}
d(bf, "addHtmlSpan");
function jn(e, t, r) {
  return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
}
d(jn, "createTspan");
function Cf(e, t, r) {
  const i = e.append("text"), n = jn(i, 1, t);
  Yn(n, r);
  const a = n.node().getComputedTextLength();
  return i.remove(), a;
}
d(Cf, "computeWidthOfText");
function Rw(e, t, r) {
  var o;
  const i = e.append("text"), n = jn(i, 1, t);
  Yn(n, [{ content: r, type: "normal" }]);
  const a = (o = n.node()) == null ? void 0 : o.getBoundingClientRect();
  return a && i.remove(), a;
}
d(Rw, "computeDimensionOfText");
function wf(e, t, r, i = !1) {
  const a = t.append("g"), o = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), s = a.append("text").attr("y", "-10.1");
  let l = 0;
  for (const c of r) {
    const h = /* @__PURE__ */ d((f) => Cf(a, 1.1, f) <= e, "checkWidth"), u = h(c) ? [c] : xf(c, h);
    for (const f of u) {
      const p = jn(s, l, 1.1);
      Yn(p, f), l++;
    }
  }
  if (i) {
    const c = s.node().getBBox(), h = 2;
    return o.attr("x", c.x - h).attr("y", c.y - h).attr("width", c.width + 2 * h).attr("height", c.height + 2 * h), a.node();
  } else
    return s.node();
}
d(wf, "createFormattedText");
function Yn(e, t) {
  e.text(""), t.forEach((r, i) => {
    const n = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? n.text(r.content) : n.text(" " + r.content);
  });
}
d(Yn, "updateTextContentAndStyles");
function _f(e) {
  return e.replace(
    /fa[bklrs]?:fa-[\w-]+/g,
    // cspell: disable-line
    (t) => `<i class='${t.replace(":", " ")}'></i>`
  );
}
d(_f, "replaceIconSubstring");
var Be = /* @__PURE__ */ d(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: n = "",
  useHtmlLabels: a = !0,
  isNode: o = !0,
  width: s = 200,
  addSvgBackground: l = !1
} = {}, c) => {
  if (E.debug(
    "XYZ createText",
    t,
    r,
    i,
    n,
    a,
    o,
    "addSvgBackground: ",
    l
  ), a) {
    const h = gf(t, c), u = _f(Xe(h)), f = t.replace(/\\\\/g, "\\"), p = {
      isNode: o,
      label: mr(t) ? f : u,
      labelStyle: r.replace("fill:", "color:")
    };
    return await bf(e, p, s, n, l);
  } else {
    const h = t.replace(/<br\s*\/?>/g, "<br/>"), u = df(h.replace("<br>", "<br/>"), c), f = wf(
      s,
      e,
      u,
      t ? l : !1
    );
    if (o) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      et(f).attr("style", p);
    } else {
      const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      et(f).select("rect").attr("style", p.replace(/background:/g, "fill:"));
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      et(f).select("text").attr("style", g);
    }
    return f;
  }
}, "createText");
function na(e, t, r) {
  if (e && e.length) {
    const [i, n] = t, a = Math.PI / 180 * r, o = Math.cos(a), s = Math.sin(a);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * o - (h - n) * s + i, l[1] = (c - i) * s + (h - n) * o + n;
    }
  }
}
function Iw(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function Pw(e, t, r, i = 1) {
  const n = r, a = Math.max(t, 0.1), o = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, s = [0, 0];
  if (n) for (const c of o) na(c, s, n);
  const l = function(c, h, u) {
    const f = [];
    for (const b of c) {
      const w = [...b];
      Iw(w[0], w[w.length - 1]) || w.push([w[0][0], w[0][1]]), w.length > 2 && f.push(w);
    }
    const p = [];
    h = Math.max(h, 0.1);
    const g = [];
    for (const b of f) for (let w = 0; w < b.length - 1; w++) {
      const S = b[w], k = b[w + 1];
      if (S[1] !== k[1]) {
        const C = Math.min(S[1], k[1]);
        g.push({ ymin: C, ymax: Math.max(S[1], k[1]), x: C === S[1] ? S[0] : k[0], islope: (k[0] - S[0]) / (k[1] - S[1]) });
      }
    }
    if (g.sort((b, w) => b.ymin < w.ymin ? -1 : b.ymin > w.ymin ? 1 : b.x < w.x ? -1 : b.x > w.x ? 1 : b.ymax === w.ymax ? 0 : (b.ymax - w.ymax) / Math.abs(b.ymax - w.ymax)), !g.length) return p;
    let m = [], y = g[0].ymin, x = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let w = 0; w < g.length && !(g[w].ymin > y); w++) b = w;
        g.splice(0, b + 1).forEach((w) => {
          m.push({ s: y, edge: w });
        });
      }
      if (m = m.filter((b) => !(b.edge.ymax <= y)), m.sort((b, w) => b.edge.x === w.edge.x ? 0 : (b.edge.x - w.edge.x) / Math.abs(b.edge.x - w.edge.x)), (u !== 1 || x % h == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const w = b + 1;
        if (w >= m.length) break;
        const S = m[b].edge, k = m[w].edge;
        p.push([[Math.round(S.x), y], [Math.round(k.x), y]]);
      }
      y += u, m.forEach((b) => {
        b.edge.x = b.edge.x + u * b.edge.islope;
      }), x++;
    }
    return p;
  }(o, a, i);
  if (n) {
    for (const c of o) na(c, s, -n);
    (function(c, h, u) {
      const f = [];
      c.forEach((p) => f.push(...p)), na(f, h, u);
    })(l, s, -n);
  }
  return l;
}
function yi(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let n = t.hachureGap;
  n < 0 && (n = 4 * t.strokeWidth), n = Math.round(Math.max(n, 0.1));
  let a = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (a = n), Pw(e, n, i, a || 1);
}
class Js {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = yi(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const n of t) i.push(...this.helper.doubleLineOps(n[0][0], n[0][1], n[1][0], n[1][1], r));
    return i;
  }
}
function Gn(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class Nw extends Js {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const n = yi(t, Object.assign({}, r, { hachureGap: i })), a = Math.PI / 180 * r.hachureAngle, o = [], s = 0.5 * i * Math.cos(a), l = 0.5 * i * Math.sin(a);
    for (const [c, h] of n) Gn([c, h]) && o.push([[c[0] - s, c[1] + l], [...h]], [[c[0] + s, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(o, r) };
  }
}
class zw extends Js {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), n = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), a = this._fillPolygons(t, n);
    return i.ops = i.ops.concat(a.ops), i;
  }
}
class qw {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = yi(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let n = r.hachureGap;
    n < 0 && (n = 4 * r.strokeWidth), n = Math.max(n, 0.1);
    let a = r.fillWeight;
    a < 0 && (a = r.strokeWidth / 2);
    const o = n / 4;
    for (const s of t) {
      const l = Gn(s), c = l / n, h = Math.ceil(c) - 1, u = l - h * n, f = (s[0][0] + s[1][0]) / 2 - n / 4, p = Math.min(s[0][1], s[1][1]);
      for (let g = 0; g < h; g++) {
        const m = p + u + g * n, y = f - o + 2 * Math.random() * o, x = m - o + 2 * Math.random() * o, b = this.helper.ellipse(y, x, a, a, r);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class Ww {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = yi(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, n = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, a = [];
    return t.forEach((o) => {
      const s = Gn(o), l = Math.floor(s / (i + n)), c = (s + n - l * (i + n)) / 2;
      let h = o[0], u = o[1];
      h[0] > u[0] && (h = o[1], u = o[0]);
      const f = Math.atan((u[1] - h[1]) / (u[0] - h[0]));
      for (let p = 0; p < l; p++) {
        const g = p * (i + n), m = g + i, y = [h[0] + g * Math.cos(f) + c * Math.cos(f), h[1] + g * Math.sin(f) + c * Math.sin(f)], x = [h[0] + m * Math.cos(f) + c * Math.cos(f), h[1] + m * Math.sin(f) + c * Math.sin(f)];
        a.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r));
      }
    }), a;
  }
}
class Hw {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, n = r.zigzagOffset < 0 ? i : r.zigzagOffset, a = yi(t, r = Object.assign({}, r, { hachureGap: i + n }));
    return { type: "fillSketch", ops: this.zigzagLines(a, n, r) };
  }
  zigzagLines(t, r, i) {
    const n = [];
    return t.forEach((a) => {
      const o = Gn(a), s = Math.round(o / (2 * r));
      let l = a[0], c = a[1];
      l[0] > c[0] && (l = a[1], c = a[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < s; u++) {
        const f = 2 * u * r, p = 2 * (u + 1) * r, g = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], y = [l[0] + p * Math.cos(h), l[1] + p * Math.sin(h)], x = [m[0] + g * Math.cos(h + Math.PI / 4), m[1] + g * Math.sin(h + Math.PI / 4)];
        n.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], i), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], i));
      }
    }), n;
  }
}
const Mt = {};
class jw {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const Yw = 0, aa = 1, ol = 2, Si = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function sa(e, t) {
  return e.type === t;
}
function to(e) {
  const t = [], r = function(o) {
    const s = new Array();
    for (; o !== ""; ) if (o.match(/^([ \t\r\n,]+)/)) o = o.substr(RegExp.$1.length);
    else if (o.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s[s.length] = { type: Yw, text: RegExp.$1 }, o = o.substr(RegExp.$1.length);
    else {
      if (!o.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      s[s.length] = { type: aa, text: `${parseFloat(RegExp.$1)}` }, o = o.substr(RegExp.$1.length);
    }
    return s[s.length] = { type: ol, text: "" }, s;
  }(e);
  let i = "BOD", n = 0, a = r[n];
  for (; !sa(a, ol); ) {
    let o = 0;
    const s = [];
    if (i === "BOD") {
      if (a.text !== "M" && a.text !== "m") return to("M0,0" + e);
      n++, o = Si[a.text], i = a.text;
    } else sa(a, aa) ? o = Si[i] : (n++, o = Si[a.text], i = a.text);
    if (!(n + o < r.length)) throw new Error("Path data ended short");
    for (let l = n; l < n + o; l++) {
      const c = r[l];
      if (!sa(c, aa)) throw new Error("Param not a number: " + i + "," + c.text);
      s[s.length] = +c.text;
    }
    if (typeof Si[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: s };
      t.push(l), n += o, a = r[n], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function kf(e) {
  let t = 0, r = 0, i = 0, n = 0;
  const a = [];
  for (const { key: o, data: s } of e) switch (o) {
    case "M":
      a.push({ key: "M", data: [...s] }), [t, r] = s, [i, n] = s;
      break;
    case "m":
      t += s[0], r += s[1], a.push({ key: "M", data: [t, r] }), i = t, n = r;
      break;
    case "L":
      a.push({ key: "L", data: [...s] }), [t, r] = s;
      break;
    case "l":
      t += s[0], r += s[1], a.push({ key: "L", data: [t, r] });
      break;
    case "C":
      a.push({ key: "C", data: [...s] }), t = s[4], r = s[5];
      break;
    case "c": {
      const l = s.map((c, h) => h % 2 ? c + r : c + t);
      a.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      a.push({ key: "Q", data: [...s] }), t = s[2], r = s[3];
      break;
    case "q": {
      const l = s.map((c, h) => h % 2 ? c + r : c + t);
      a.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      a.push({ key: "A", data: [...s] }), t = s[5], r = s[6];
      break;
    case "a":
      t += s[5], r += s[6], a.push({ key: "A", data: [s[0], s[1], s[2], s[3], s[4], t, r] });
      break;
    case "H":
      a.push({ key: "H", data: [...s] }), t = s[0];
      break;
    case "h":
      t += s[0], a.push({ key: "H", data: [t] });
      break;
    case "V":
      a.push({ key: "V", data: [...s] }), r = s[0];
      break;
    case "v":
      r += s[0], a.push({ key: "V", data: [r] });
      break;
    case "S":
      a.push({ key: "S", data: [...s] }), t = s[2], r = s[3];
      break;
    case "s": {
      const l = s.map((c, h) => h % 2 ? c + r : c + t);
      a.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      a.push({ key: "T", data: [...s] }), t = s[0], r = s[1];
      break;
    case "t":
      t += s[0], r += s[1], a.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      a.push({ key: "Z", data: [] }), t = i, r = n;
  }
  return a;
}
function vf(e) {
  const t = [];
  let r = "", i = 0, n = 0, a = 0, o = 0, s = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, n] = h, [a, o] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], n = h[5], s = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, n] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, n] });
        break;
      case "V":
        n = h[0], t.push({ key: "L", data: [i, n] });
        break;
      case "S": {
        let u = 0, f = 0;
        r === "C" || r === "S" ? (u = i + (i - s), f = n + (n - l)) : (u = i, f = n), t.push({ key: "C", data: [u, f, ...h] }), s = h[0], l = h[1], i = h[2], n = h[3];
        break;
      }
      case "T": {
        const [u, f] = h;
        let p = 0, g = 0;
        r === "Q" || r === "T" ? (p = i + (i - s), g = n + (n - l)) : (p = i, g = n);
        const m = i + 2 * (p - i) / 3, y = n + 2 * (g - n) / 3, x = u + 2 * (p - u) / 3, b = f + 2 * (g - f) / 3;
        t.push({ key: "C", data: [m, y, x, b, u, f] }), s = p, l = g, i = u, n = f;
        break;
      }
      case "Q": {
        const [u, f, p, g] = h, m = i + 2 * (u - i) / 3, y = n + 2 * (f - n) / 3, x = p + 2 * (u - p) / 3, b = g + 2 * (f - g) / 3;
        t.push({ key: "C", data: [m, y, x, b, p, g] }), s = u, l = f, i = p, n = g;
        break;
      }
      case "A": {
        const u = Math.abs(h[0]), f = Math.abs(h[1]), p = h[2], g = h[3], m = h[4], y = h[5], x = h[6];
        u === 0 || f === 0 ? (t.push({ key: "C", data: [i, n, y, x, y, x] }), i = y, n = x) : (i !== y || n !== x) && (Sf(i, n, y, x, u, f, p, g, m).forEach(function(b) {
          t.push({ key: "C", data: b });
        }), i = y, n = x);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = a, n = o;
    }
    r = c;
  }
  return t;
}
function Or(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function Sf(e, t, r, i, n, a, o, s, l, c) {
  const h = (u = o, Math.PI * u / 180);
  var u;
  let f = [], p = 0, g = 0, m = 0, y = 0;
  if (c) [p, g, m, y] = c;
  else {
    [e, t] = Or(e, t, -h), [r, i] = Or(r, i, -h);
    const D = (e - r) / 2, A = (t - i) / 2;
    let L = D * D / (n * n) + A * A / (a * a);
    L > 1 && (L = Math.sqrt(L), n *= L, a *= L);
    const T = n * n, $ = a * a, B = T * $ - T * A * A - $ * D * D, N = T * A * A + $ * D * D, G = (s === l ? -1 : 1) * Math.sqrt(Math.abs(B / N));
    m = G * n * A / a + (e + r) / 2, y = G * -a * D / n + (t + i) / 2, p = Math.asin(parseFloat(((t - y) / a).toFixed(9))), g = Math.asin(parseFloat(((i - y) / a).toFixed(9))), e < m && (p = Math.PI - p), r < m && (g = Math.PI - g), p < 0 && (p = 2 * Math.PI + p), g < 0 && (g = 2 * Math.PI + g), l && p > g && (p -= 2 * Math.PI), !l && g > p && (g -= 2 * Math.PI);
  }
  let x = g - p;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    const D = g, A = r, L = i;
    g = l && g > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, f = Sf(r = m + n * Math.cos(g), i = y + a * Math.sin(g), A, L, n, a, o, 0, l, [g, D, m, y]);
  }
  x = g - p;
  const b = Math.cos(p), w = Math.sin(p), S = Math.cos(g), k = Math.sin(g), C = Math.tan(x / 4), _ = 4 / 3 * n * C, O = 4 / 3 * a * C, I = [e, t], F = [e + _ * w, t - O * b], M = [r + _ * k, i - O * S], P = [r, i];
  if (F[0] = 2 * I[0] - F[0], F[1] = 2 * I[1] - F[1], c) return [F, M, P].concat(f);
  {
    f = [F, M, P].concat(f);
    const D = [];
    for (let A = 0; A < f.length; A += 3) {
      const L = Or(f[A][0], f[A][1], h), T = Or(f[A + 1][0], f[A + 1][1], h), $ = Or(f[A + 2][0], f[A + 2][1], h);
      D.push([L[0], L[1], T[0], T[1], $[0], $[1]]);
    }
    return D;
  }
}
const Gw = { randOffset: function(e, t) {
  return V(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return xn(e, t, r);
}, ellipse: function(e, t, r, i, n) {
  const a = Bf(r, i, n);
  return Ya(e, t, n, a).opset;
}, doubleLineOps: function(e, t, r, i, n) {
  return ve(e, t, r, i, n, !0);
} };
function Tf(e, t, r, i, n) {
  return { type: "path", ops: ve(e, t, r, i, n) };
}
function Ii(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const n = [];
    for (let a = 0; a < i - 1; a++) n.push(...ve(e[a][0], e[a][1], e[a + 1][0], e[a + 1][1], r));
    return t && n.push(...ve(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: n };
  }
  return i === 2 ? Tf(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function Uw(e, t, r, i, n) {
  return function(a, o) {
    return Ii(a, !0, o);
  }([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], n);
}
function ll(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = Ti(r[0], 1 * (1 + 0.2 * t.roughness), t), n = t.disableMultiStroke ? [] : Ti(r[0], 1.5 * (1 + 0.22 * t.roughness), ul(t));
    for (let a = 1; a < r.length; a++) {
      const o = r[a];
      if (o.length) {
        const s = Ti(o, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : Ti(o, 1.5 * (1 + 0.22 * t.roughness), ul(t));
        for (const c of s) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && n.push(c);
      }
    }
    return { type: "path", ops: i.concat(n) };
  }
  return { type: "path", ops: [] };
}
function Bf(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), n = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), a = 2 * Math.PI / n;
  let o = Math.abs(e / 2), s = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return o += V(o * l, r), s += V(s * l, r), { increment: a, rx: o, ry: s };
}
function Ya(e, t, r, i) {
  const [n, a] = fl(i.increment, e, t, i.rx, i.ry, 1, i.increment * xn(0.1, xn(0.4, 1, r), r), r);
  let o = bn(n, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [s] = fl(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = bn(s, null, r);
    o = o.concat(l);
  }
  return { estimatedPoints: a, opset: { type: "path", ops: o } };
}
function cl(e, t, r, i, n, a, o, s, l) {
  const c = e, h = t;
  let u = Math.abs(r / 2), f = Math.abs(i / 2);
  u += V(0.01 * u, l), f += V(0.01 * f, l);
  let p = n, g = a;
  for (; p < 0; ) p += 2 * Math.PI, g += 2 * Math.PI;
  g - p > 2 * Math.PI && (p = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - p) / 2), x = pl(y, c, h, u, f, p, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = pl(y, c, h, u, f, p, g, 1.5, l);
    x.push(...b);
  }
  return o && (s ? x.push(...ve(c, h, c + u * Math.cos(p), h + f * Math.sin(p), l), ...ve(c, h, c + u * Math.cos(g), h + f * Math.sin(g), l)) : x.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + u * Math.cos(p), h + f * Math.sin(p)] })), { type: "path", ops: x };
}
function hl(e, t) {
  const r = vf(kf(to(e))), i = [];
  let n = [0, 0], a = [0, 0];
  for (const { key: o, data: s } of r) switch (o) {
    case "M":
      a = [s[0], s[1]], n = [s[0], s[1]];
      break;
    case "L":
      i.push(...ve(a[0], a[1], s[0], s[1], t)), a = [s[0], s[1]];
      break;
    case "C": {
      const [l, c, h, u, f, p] = s;
      i.push(...Xw(l, c, h, u, f, p, a, t)), a = [f, p];
      break;
    }
    case "Z":
      i.push(...ve(a[0], a[1], n[0], n[1], t)), a = [n[0], n[1]];
  }
  return { type: "path", ops: i };
}
function oa(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const n = t.maxRandomnessOffset || 0, a = i.length;
    if (a > 2) {
      r.push({ op: "move", data: [i[0][0] + V(n, t), i[0][1] + V(n, t)] });
      for (let o = 1; o < a; o++) r.push({ op: "lineTo", data: [i[o][0] + V(n, t), i[o][1] + V(n, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Ke(e, t) {
  return function(r, i) {
    let n = r.fillStyle || "hachure";
    if (!Mt[n]) switch (n) {
      case "zigzag":
        Mt[n] || (Mt[n] = new Nw(i));
        break;
      case "cross-hatch":
        Mt[n] || (Mt[n] = new zw(i));
        break;
      case "dots":
        Mt[n] || (Mt[n] = new qw(i));
        break;
      case "dashed":
        Mt[n] || (Mt[n] = new Ww(i));
        break;
      case "zigzag-line":
        Mt[n] || (Mt[n] = new Hw(i));
        break;
      default:
        n = "hachure", Mt[n] || (Mt[n] = new Js(i));
    }
    return Mt[n];
  }(t, Gw).fillPolygons(e, t);
}
function ul(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function Lf(e) {
  return e.randomizer || (e.randomizer = new jw(e.seed || 0)), e.randomizer.next();
}
function xn(e, t, r, i = 1) {
  return r.roughness * i * (Lf(r) * (t - e) + e);
}
function V(e, t, r = 1) {
  return xn(-e, e, t, r);
}
function ve(e, t, r, i, n, a = !1) {
  const o = a ? n.disableMultiStrokeFill : n.disableMultiStroke, s = Ga(e, t, r, i, n, !0, !1);
  if (o) return s;
  const l = Ga(e, t, r, i, n, !0, !0);
  return s.concat(l);
}
function Ga(e, t, r, i, n, a, o) {
  const s = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(s);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = n.maxRandomnessOffset || 0;
  h * h * 100 > s && (h = l / 10);
  const u = h / 2, f = 0.2 + 0.2 * Lf(n);
  let p = n.bowing * n.maxRandomnessOffset * (i - t) / 200, g = n.bowing * n.maxRandomnessOffset * (e - r) / 200;
  p = V(p, n, c), g = V(g, n, c);
  const m = [], y = () => V(u, n, c), x = () => V(h, n, c), b = n.preserveVertices;
  return o ? m.push({ op: "move", data: [e + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e + (b ? 0 : V(h, n, c)), t + (b ? 0 : V(h, n, c))] }), o ? m.push({ op: "bcurveTo", data: [p + e + (r - e) * f + y(), g + t + (i - t) * f + y(), p + e + 2 * (r - e) * f + y(), g + t + 2 * (i - t) * f + y(), r + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [p + e + (r - e) * f + x(), g + t + (i - t) * f + x(), p + e + 2 * (r - e) * f + x(), g + t + 2 * (i - t) * f + x(), r + (b ? 0 : x()), i + (b ? 0 : x())] }), m;
}
function Ti(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + V(t, r), e[0][1] + V(t, r)]), i.push([e[0][0] + V(t, r), e[0][1] + V(t, r)]);
  for (let n = 1; n < e.length; n++) i.push([e[n][0] + V(t, r), e[n][1] + V(t, r)]), n === e.length - 1 && i.push([e[n][0] + V(t, r), e[n][1] + V(t, r)]);
  return bn(i, null, r);
}
function bn(e, t, r) {
  const i = e.length, n = [];
  if (i > 3) {
    const a = [], o = 1 - r.curveTightness;
    n.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let s = 1; s + 2 < i; s++) {
      const l = e[s];
      a[0] = [l[0], l[1]], a[1] = [l[0] + (o * e[s + 1][0] - o * e[s - 1][0]) / 6, l[1] + (o * e[s + 1][1] - o * e[s - 1][1]) / 6], a[2] = [e[s + 1][0] + (o * e[s][0] - o * e[s + 2][0]) / 6, e[s + 1][1] + (o * e[s][1] - o * e[s + 2][1]) / 6], a[3] = [e[s + 1][0], e[s + 1][1]], n.push({ op: "bcurveTo", data: [a[1][0], a[1][1], a[2][0], a[2][1], a[3][0], a[3][1]] });
    }
  } else i === 3 ? (n.push({ op: "move", data: [e[1][0], e[1][1]] }), n.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && n.push(...Ga(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return n;
}
function fl(e, t, r, i, n, a, o, s) {
  const l = [], c = [];
  if (s.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + n * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const u = [t + i * Math.cos(h), r + n * Math.sin(h)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r + n * Math.sin(0)]), c.push([t + i * Math.cos(e), r + n * Math.sin(e)]);
  } else {
    const h = V(0.5, s) - Math.PI / 2;
    c.push([V(a, s) + t + 0.9 * i * Math.cos(h - e), V(a, s) + r + 0.9 * n * Math.sin(h - e)]);
    const u = 2 * Math.PI + h - 0.01;
    for (let f = h; f < u; f += e) {
      const p = [V(a, s) + t + i * Math.cos(f), V(a, s) + r + n * Math.sin(f)];
      l.push(p), c.push(p);
    }
    c.push([V(a, s) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * o), V(a, s) + r + n * Math.sin(h + 2 * Math.PI + 0.5 * o)]), c.push([V(a, s) + t + 0.98 * i * Math.cos(h + o), V(a, s) + r + 0.98 * n * Math.sin(h + o)]), c.push([V(a, s) + t + 0.9 * i * Math.cos(h + 0.5 * o), V(a, s) + r + 0.9 * n * Math.sin(h + 0.5 * o)]);
  }
  return [c, l];
}
function pl(e, t, r, i, n, a, o, s, l) {
  const c = a + V(0.1, l), h = [];
  h.push([V(s, l) + t + 0.9 * i * Math.cos(c - e), V(s, l) + r + 0.9 * n * Math.sin(c - e)]);
  for (let u = c; u <= o; u += e) h.push([V(s, l) + t + i * Math.cos(u), V(s, l) + r + n * Math.sin(u)]);
  return h.push([t + i * Math.cos(o), r + n * Math.sin(o)]), h.push([t + i * Math.cos(o), r + n * Math.sin(o)]), bn(h, null, l);
}
function Xw(e, t, r, i, n, a, o, s) {
  const l = [], c = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const u = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
  for (let p = 0; p < u; p++) p === 0 ? l.push({ op: "move", data: [o[0], o[1]] }) : l.push({ op: "move", data: [o[0] + (f ? 0 : V(c[0], s)), o[1] + (f ? 0 : V(c[0], s))] }), h = f ? [n, a] : [n + V(c[p], s), a + V(c[p], s)], l.push({ op: "bcurveTo", data: [e + V(c[p], s), t + V(c[p], s), r + V(c[p], s), i + V(c[p], s), h[0], h[1]] });
  return l;
}
function Dr(e) {
  return [...e];
}
function dl(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(Dr(e[0]), Dr(e[1]), Dr(e[2]), Dr(e[2]));
  else {
    const n = [];
    n.push(e[0], e[0]);
    for (let s = 1; s < e.length; s++) n.push(e[s]), s === e.length - 1 && n.push(e[s]);
    const a = [], o = 1 - t;
    i.push(Dr(n[0]));
    for (let s = 1; s + 2 < n.length; s++) {
      const l = n[s];
      a[0] = [l[0], l[1]], a[1] = [l[0] + (o * n[s + 1][0] - o * n[s - 1][0]) / 6, l[1] + (o * n[s + 1][1] - o * n[s - 1][1]) / 6], a[2] = [n[s + 1][0] + (o * n[s][0] - o * n[s + 2][0]) / 6, n[s + 1][1] + (o * n[s][1] - o * n[s + 2][1]) / 6], a[3] = [n[s + 1][0], n[s + 1][1]], i.push(a[1], a[2], a[3]);
    }
  }
  return i;
}
function Pi(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function Vw(e, t, r) {
  const i = Pi(t, r);
  if (i === 0) return Pi(e, t);
  let n = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return n = Math.max(0, Math.min(1, n)), Pi(e, Ae(t, r, n));
}
function Ae(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function Ua(e, t, r, i) {
  const n = i || [];
  if (function(s, l) {
    const c = s[l + 0], h = s[l + 1], u = s[l + 2], f = s[l + 3];
    let p = 3 * h[0] - 2 * c[0] - f[0];
    p *= p;
    let g = 3 * h[1] - 2 * c[1] - f[1];
    g *= g;
    let m = 3 * u[0] - 2 * f[0] - c[0];
    m *= m;
    let y = 3 * u[1] - 2 * f[1] - c[1];
    return y *= y, p < m && (p = m), g < y && (g = y), p + g;
  }(e, t) < r) {
    const s = e[t + 0];
    n.length ? (a = n[n.length - 1], o = s, Math.sqrt(Pi(a, o)) > 1 && n.push(s)) : n.push(s), n.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], u = e[t + 3], f = Ae(l, c, 0.5), p = Ae(c, h, 0.5), g = Ae(h, u, 0.5), m = Ae(f, p, 0.5), y = Ae(p, g, 0.5), x = Ae(m, y, 0.5);
    Ua([l, f, m, x], 0, r, n), Ua([x, y, g, u], 0, r, n);
  }
  var a, o;
  return n;
}
function Zw(e, t) {
  return Cn(e, 0, e.length, t);
}
function Cn(e, t, r, i, n) {
  const a = n || [], o = e[t], s = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const u = Vw(e[h], o, s);
    u > l && (l = u, c = h);
  }
  return Math.sqrt(l) > i ? (Cn(e, t, c + 1, i, a), Cn(e, c, r, i, a)) : (a.length || a.push(o), a.push(s)), a;
}
function la(e, t = 0.15, r) {
  const i = [], n = (e.length - 1) / 3;
  for (let a = 0; a < n; a++)
    Ua(e, 3 * a, t, i);
  return r && r > 0 ? Cn(i, 0, i.length, r) : i;
}
const Dt = "none";
class wn {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, n, a) {
    const o = this._o(a);
    return this._d("line", [Tf(t, r, i, n, o)], o);
  }
  rectangle(t, r, i, n, a) {
    const o = this._o(a), s = [], l = Uw(t, r, i, n, o);
    if (o.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + n], [t, r + n]];
      o.fillStyle === "solid" ? s.push(oa([c], o)) : s.push(Ke([c], o));
    }
    return o.stroke !== Dt && s.push(l), this._d("rectangle", s, o);
  }
  ellipse(t, r, i, n, a) {
    const o = this._o(a), s = [], l = Bf(i, n, o), c = Ya(t, r, o, l);
    if (o.fill) if (o.fillStyle === "solid") {
      const h = Ya(t, r, o, l).opset;
      h.type = "fillPath", s.push(h);
    } else s.push(Ke([c.estimatedPoints], o));
    return o.stroke !== Dt && s.push(c.opset), this._d("ellipse", s, o);
  }
  circle(t, r, i, n) {
    const a = this.ellipse(t, r, i, i, n);
    return a.shape = "circle", a;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [Ii(t, !1, i)], i);
  }
  arc(t, r, i, n, a, o, s = !1, l) {
    const c = this._o(l), h = [], u = cl(t, r, i, n, a, o, s, !0, c);
    if (s && c.fill) if (c.fillStyle === "solid") {
      const f = Object.assign({}, c);
      f.disableMultiStroke = !0;
      const p = cl(t, r, i, n, a, o, !0, !1, f);
      p.type = "fillPath", h.push(p);
    } else h.push(function(f, p, g, m, y, x, b) {
      const w = f, S = p;
      let k = Math.abs(g / 2), C = Math.abs(m / 2);
      k += V(0.01 * k, b), C += V(0.01 * C, b);
      let _ = y, O = x;
      for (; _ < 0; ) _ += 2 * Math.PI, O += 2 * Math.PI;
      O - _ > 2 * Math.PI && (_ = 0, O = 2 * Math.PI);
      const I = (O - _) / b.curveStepCount, F = [];
      for (let M = _; M <= O; M += I) F.push([w + k * Math.cos(M), S + C * Math.sin(M)]);
      return F.push([w + k * Math.cos(O), S + C * Math.sin(O)]), F.push([w, S]), Ke([F], b);
    }(t, r, i, n, a, o, c));
    return c.stroke !== Dt && h.push(u), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), n = [], a = ll(t, i);
    if (i.fill && i.fill !== Dt) if (i.fillStyle === "solid") {
      const o = ll(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(o.ops) });
    } else {
      const o = [], s = t;
      if (s.length) {
        const l = typeof s[0][0] == "number" ? [s] : s;
        for (const c of l) c.length < 3 ? o.push(...c) : c.length === 3 ? o.push(...la(dl([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : o.push(...la(dl(c), 10, (1 + i.roughness) / 2));
      }
      o.length && n.push(Ke([o], i));
    }
    return i.stroke !== Dt && n.push(a), this._d("curve", n, i);
  }
  polygon(t, r) {
    const i = this._o(r), n = [], a = Ii(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? n.push(oa([t], i)) : n.push(Ke([t], i))), i.stroke !== Dt && n.push(a), this._d("polygon", n, i);
  }
  path(t, r) {
    const i = this._o(r), n = [];
    if (!t) return this._d("path", n, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const a = i.fill && i.fill !== "transparent" && i.fill !== Dt, o = i.stroke !== Dt, s = !!(i.simplification && i.simplification < 1), l = function(h, u, f) {
      const p = vf(kf(to(h))), g = [];
      let m = [], y = [0, 0], x = [];
      const b = () => {
        x.length >= 4 && m.push(...la(x, u)), x = [];
      }, w = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: k, data: C } of p) switch (k) {
        case "M":
          w(), y = [C[0], C[1]], m.push(y);
          break;
        case "L":
          b(), m.push([C[0], C[1]]);
          break;
        case "C":
          if (!x.length) {
            const _ = m.length ? m[m.length - 1] : y;
            x.push([_[0], _[1]]);
          }
          x.push([C[0], C[1]]), x.push([C[2], C[3]]), x.push([C[4], C[5]]);
          break;
        case "Z":
          b(), m.push([y[0], y[1]]);
      }
      if (w(), !f) return g;
      const S = [];
      for (const k of g) {
        const C = Zw(k, f);
        C.length && S.push(C);
      }
      return S;
    }(t, 1, s ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = hl(t, i);
    if (a) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = hl(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else n.push(oa(l, i));
    else n.push(Ke(l, i));
    return o && (s ? l.forEach((h) => {
      n.push(Ii(h, !1, i));
    }) : n.push(c)), this._d("path", n, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const n of t.ops) {
      const a = typeof r == "number" && r >= 0 ? n.data.map((o) => +o.toFixed(r)) : n.data;
      switch (n.op) {
        case "move":
          i += `M${a[0]} ${a[1]} `;
          break;
        case "bcurveTo":
          i += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
          break;
        case "lineTo":
          i += `L${a[0]} ${a[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, n = [];
    for (const a of r) {
      let o = null;
      switch (a.type) {
        case "path":
          o = { d: this.opsToPath(a), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: Dt };
          break;
        case "fillPath":
          o = { d: this.opsToPath(a), stroke: Dt, strokeWidth: 0, fill: i.fill || Dt };
          break;
        case "fillSketch":
          o = this.fillSketch(a, i);
      }
      o && n.push(o);
    }
    return n;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || Dt, strokeWidth: i, fill: Dt };
  }
  _mergedShape(t) {
    return t.filter((r, i) => i === 0 || r.op !== "move");
  }
}
class Kw {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new wn(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.ctx, a = t.options.fixedDecimalPlaceDigits;
    for (const o of r) switch (o.type) {
      case "path":
        n.save(), n.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, n.lineWidth = i.strokeWidth, i.strokeLineDash && n.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (n.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(n, o, a), n.restore();
        break;
      case "fillPath": {
        n.save(), n.fillStyle = i.fill || "";
        const s = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(n, o, a, s), n.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(n, o, i);
    }
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = n, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, n = "nonzero") {
    t.beginPath();
    for (const a of r.ops) {
      const o = typeof i == "number" && i >= 0 ? a.data.map((s) => +s.toFixed(i)) : a.data;
      switch (a.op) {
        case "move":
          t.moveTo(o[0], o[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
          break;
        case "lineTo":
          t.lineTo(o[0], o[1]);
      }
    }
    r.type === "fillPath" ? t.fill(n) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, n, a) {
    const o = this.gen.line(t, r, i, n, a);
    return this.draw(o), o;
  }
  rectangle(t, r, i, n, a) {
    const o = this.gen.rectangle(t, r, i, n, a);
    return this.draw(o), o;
  }
  ellipse(t, r, i, n, a) {
    const o = this.gen.ellipse(t, r, i, n, a);
    return this.draw(o), o;
  }
  circle(t, r, i, n) {
    const a = this.gen.circle(t, r, i, n);
    return this.draw(a), a;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, n, a, o, s = !1, l) {
    const c = this.gen.arc(t, r, i, n, a, o, s, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const Bi = "http://www.w3.org/2000/svg";
class Qw {
  constructor(t, r) {
    this.svg = t, this.gen = new wn(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.svg.ownerDocument || window.document, a = n.createElementNS(Bi, "g"), o = t.options.fixedDecimalPlaceDigits;
    for (const s of r) {
      let l = null;
      switch (s.type) {
        case "path":
          l = n.createElementNS(Bi, "path"), l.setAttribute("d", this.opsToPath(s, o)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = n.createElementNS(Bi, "path"), l.setAttribute("d", this.opsToPath(s, o)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(n, s, i);
      }
      l && a.appendChild(l);
    }
    return a;
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2);
    const a = t.createElementNS(Bi, "path");
    return a.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), a.setAttribute("stroke", i.fill || ""), a.setAttribute("stroke-width", n + ""), a.setAttribute("fill", "none"), i.fillLineDash && a.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), a;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, n, a) {
    const o = this.gen.line(t, r, i, n, a);
    return this.draw(o);
  }
  rectangle(t, r, i, n, a) {
    const o = this.gen.rectangle(t, r, i, n, a);
    return this.draw(o);
  }
  ellipse(t, r, i, n, a) {
    const o = this.gen.ellipse(t, r, i, n, a);
    return this.draw(o);
  }
  circle(t, r, i, n) {
    const a = this.gen.circle(t, r, i, n);
    return this.draw(a);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, n, a, o, s = !1, l) {
    const c = this.gen.arc(t, r, i, n, a, o, s, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var W = { canvas: (e, t) => new Kw(e, t), svg: (e, t) => new Qw(e, t), generator: (e) => new wn(e), newSeed: () => wn.newSeed() }, J = /* @__PURE__ */ d(async (e, t, r) => {
  var u, f;
  let i;
  const n = t.useHtmlLabels || gt((u = nt()) == null ? void 0 : u.htmlLabels);
  r ? i = r : i = "node default";
  const a = e.insert("g").attr("class", i).attr("id", t.domId || t.id), o = a.insert("g").attr("class", "label").attr("style", Lt(t.labelStyle));
  let s;
  t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
  const l = await Be(o, Ne(Xe(s), nt()), {
    useHtmlLabels: n,
    width: t.width || ((f = nt().flowchart) == null ? void 0 : f.wrappingWidth),
    // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  });
  let c = l.getBBox();
  const h = ((t == null ? void 0 : t.padding) ?? 0) / 2;
  if (n) {
    const p = l.children[0], g = et(l), m = p.getElementsByTagName("img");
    if (m) {
      const y = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...m].map(
          (x) => new Promise((b) => {
            function w() {
              if (x.style.display = "flex", x.style.flexDirection = "column", y) {
                const S = nt().fontSize ? nt().fontSize : window.getComputedStyle(document.body).fontSize, k = 5, [C = ql.fontSize] = qn(S), _ = C * k + "px";
                x.style.minWidth = _, x.style.maxWidth = _;
              } else
                x.style.width = "100%";
              b(x);
            }
            d(w, "setupImage"), setTimeout(() => {
              x.complete && w();
            }), x.addEventListener("error", w), x.addEventListener("load", w);
          })
        )
      );
    }
    c = p.getBoundingClientRect(), g.attr("width", c.width), g.attr("height", c.height);
  }
  return n ? o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : o.attr("transform", "translate(0, " + -c.height / 2 + ")"), t.centerLabel && o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), o.insert("rect", ":first-child"), { shapeSvg: a, bbox: c, halfPadding: h, label: o };
}, "labelHelper"), ca = /* @__PURE__ */ d(async (e, t, r) => {
  var l, c, h, u, f, p;
  const i = r.useHtmlLabels || gt((c = (l = nt()) == null ? void 0 : l.flowchart) == null ? void 0 : c.htmlLabels), n = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), a = await Be(n, Ne(Xe(t), nt()), {
    useHtmlLabels: i,
    width: r.width || ((u = (h = nt()) == null ? void 0 : h.flowchart) == null ? void 0 : u.wrappingWidth),
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let o = a.getBBox();
  const s = r.padding / 2;
  if (gt((p = (f = nt()) == null ? void 0 : f.flowchart) == null ? void 0 : p.htmlLabels)) {
    const g = a.children[0], m = et(a);
    o = g.getBoundingClientRect(), m.attr("width", o.width), m.attr("height", o.height);
  }
  return i ? n.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : n.attr("transform", "translate(0, " + -o.height / 2 + ")"), r.centerLabel && n.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), n.insert("rect", ":first-child"), { shapeSvg: e, bbox: o, halfPadding: s, label: n };
}, "insertLabel"), j = /* @__PURE__ */ d((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), Z = /* @__PURE__ */ d((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function rt(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
d(rt, "createPathFromPoints");
function Se(e, t, r, i, n, a) {
  const o = [], l = r - e, c = i - t, h = l / a, u = 2 * Math.PI / h, f = t + c / 2;
  for (let p = 0; p <= 50; p++) {
    const g = p / 50, m = e + g * l, y = f + n * Math.sin(u * (m - e));
    o.push({ x: m, y });
  }
  return o;
}
d(Se, "generateFullSineWavePoints");
function eo(e, t, r, i, n, a) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: -p, y: -g });
  }
  return o;
}
d(eo, "generateCirclePoints");
var Jw = /* @__PURE__ */ d((e, t) => {
  var r = e.x, i = e.y, n = t.x - r, a = t.y - i, o = e.width / 2, s = e.height / 2, l, c;
  return Math.abs(a) * o > Math.abs(n) * s ? (a < 0 && (s = -s), l = a === 0 ? 0 : s * n / a, c = s) : (n < 0 && (o = -o), l = o, c = n === 0 ? 0 : o * a / n), { x: r + l, y: i + c };
}, "intersectRect"), Tr = Jw;
function Mf(e, t) {
  t && e.attr("style", t);
}
d(Mf, "applyStyle");
async function Af(e) {
  const t = et(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div");
  let i = e.label;
  e.label && mr(e.label) && (i = await ss(e.label.replace(kr.lineBreakRegex, `
`), nt()));
  const n = e.isNode ? "nodeLabel" : "edgeLabel";
  return r.html(
    '<span class="' + n + '" ' + (e.labelStyle ? 'style="' + e.labelStyle + '"' : "") + // codeql [js/html-constructed-from-input] : false positive
    ">" + i + "</span>"
  ), Mf(r, e.labelStyle), r.style("display", "inline-block"), r.style("padding-right", "1px"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
d(Af, "addHtmlLabel");
var t_ = /* @__PURE__ */ d(async (e, t, r, i) => {
  let n = e || "";
  if (typeof n == "object" && (n = n[0]), gt(nt().flowchart.htmlLabels)) {
    n = n.replace(/\\n|\n/g, "<br />"), E.info("vertexText" + n);
    const a = {
      isNode: i,
      label: Xe(n).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (s) => `<i class='${s.replace(":", " ")}'></i>`
      ),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await Af(a);
  } else {
    const a = document.createElementNS("http://www.w3.org/2000/svg", "text");
    a.setAttribute("style", t.replace("color:", "fill:"));
    let o = [];
    typeof n == "string" ? o = n.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(n) ? o = n : o = [];
    for (const s of o) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), r ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = s.trim(), a.appendChild(l);
    }
    return a;
  }
}, "createLabel"), Re = t_, pe = /* @__PURE__ */ d((e, t, r, i, n) => [
  "M",
  e + n,
  t,
  // Move to the first point
  "H",
  e + r - n,
  // Draw horizontal line to the beginning of the right corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + r,
  t + n,
  // Draw arc to the right top corner
  "V",
  t + i - n,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + r - n,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + n,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e,
  t + i - n,
  // Draw arc to the left bottom corner
  "V",
  t + n,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + n,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), e_ = /* @__PURE__ */ d((e) => {
  const { handDrawnSeed: t } = nt();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), Br = /* @__PURE__ */ d((e) => {
  const t = r_([...e.cssCompiledStyles || [], ...e.cssStyles || []]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), r_ = /* @__PURE__ */ d((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.set(i.trim(), n == null ? void 0 : n.trim());
  }), t;
}, "styles2Map"), $f = /* @__PURE__ */ d((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), Y = /* @__PURE__ */ d((e) => {
  const { stylesArray: t } = Br(e), r = [], i = [], n = [], a = [];
  return t.forEach((o) => {
    const s = o[0];
    $f(s) ? r.push(o.join(":") + " !important") : (i.push(o.join(":") + " !important"), s.includes("stroke") && n.push(o.join(":") + " !important"), s === "fill" && a.push(o.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: n,
    backgroundStyles: a
  };
}, "styles2String"), H = /* @__PURE__ */ d((e, t) => {
  var l;
  const { themeVariables: r, handDrawnSeed: i } = nt(), { nodeBorder: n, mainBkg: a } = r, { stylesMap: o } = Br(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: o.get("fill") || a,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: o.get("stroke") || n,
      seed: i,
      strokeWidth: ((l = o.get("stroke-width")) == null ? void 0 : l.replace("px", "")) || 1.3,
      fillLineDash: [0, 0]
    },
    t
  );
}, "userNodeOverrides"), Ff = /* @__PURE__ */ d(async (e, t) => {
  E.info("Creating subgraph rect for ", t.id, t);
  const r = nt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: o } = i, { labelStyles: s, nodeStyles: l, borderStyles: c, backgroundStyles: h } = Y(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = gt(r.flowchart.htmlLabels), p = u.insert("g").attr("class", "cluster-label "), g = await Be(p, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0
  });
  let m = g.getBBox();
  if (gt(r.flowchart.htmlLabels)) {
    const _ = g.children[0], O = et(g);
    m = _.getBoundingClientRect(), O.attr("width", m.width), O.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, w = t.y - x / 2;
  E.trace("Data ", t, JSON.stringify(t));
  let S;
  if (t.look === "handDrawn") {
    const _ = W.svg(u), O = H(t, {
      roughness: 0.7,
      fill: a,
      // fill: 'red',
      stroke: o,
      fillWeight: 3,
      seed: n
    }), I = _.path(pe(b, w, y, x, 0), O);
    S = u.insert(() => (E.debug("Rough node insert CXC", I), I), ":first-child"), S.select("path:nth-child(2)").attr("style", c.join(";")), S.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    S = u.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", w).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: k } = bs(r);
  if (p.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`
  ), s) {
    const _ = p.select("span");
    _ && _.attr("style", s);
  }
  const C = S.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(_) {
    return Tr(t, _);
  }, { cluster: u, labelBBox: m };
}, "rect"), i_ = /* @__PURE__ */ d((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.id), i = r.insert("rect", ":first-child"), n = 0 * t.padding, a = n / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + n).attr("height", t.height + n).attr("fill", "none");
  const o = i.node().getBBox();
  return t.width = o.width, t.height = o.height, t.intersect = function(s) {
    return Tr(t, s);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), n_ = /* @__PURE__ */ d(async (e, t) => {
  const r = nt(), { themeVariables: i, handDrawnSeed: n } = r, { altBackground: a, compositeBackground: o, compositeTitleBackground: s, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let f = c.append("rect");
  const p = u.node().appendChild(await Re(t.label, t.labelStyle, void 0, !0));
  let g = p.getBBox();
  if (gt(r.flowchart.htmlLabels)) {
    const I = p.children[0], F = et(p);
    g = I.getBoundingClientRect(), F.attr("width", g.width), F.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, x = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, w = t.height + m - g.height - 6, S = t.x - x / 2, k = t.y - b / 2;
  t.width = x;
  const C = t.y - t.height / 2 - y + g.height + 2;
  let _;
  if (t.look === "handDrawn") {
    const I = t.cssClasses.includes("statediagram-cluster-alt"), F = W.svg(c), M = t.rx || t.ry ? F.path(pe(S, k, x, b, 10), {
      roughness: 0.7,
      fill: s,
      fillStyle: "solid",
      stroke: l,
      seed: n
    }) : F.rectangle(S, k, x, b, { seed: n });
    _ = c.insert(() => M, ":first-child");
    const P = F.rectangle(S, C, x, w, {
      fill: I ? a : o,
      fillStyle: I ? "hachure" : "solid",
      stroke: l,
      seed: n
    });
    _ = c.insert(() => M, ":first-child"), f = c.insert(() => P);
  } else
    _ = h.insert("rect", ":first-child"), _.attr("class", "outer").attr("x", S).attr("y", k).attr("width", x).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", S).attr("y", C).attr("width", x).attr("height", w);
  u.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${k + 1 - (gt(r.flowchart.htmlLabels) ? 0 : 3)})`
  );
  const O = _.node().getBBox();
  return t.height = O.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(I) {
    return Tr(t, I);
  }, { cluster: c, labelBBox: g };
}, "roundedWithTitle"), a_ = /* @__PURE__ */ d(async (e, t) => {
  E.info("Creating subgraph rect for ", t.id, t);
  const r = nt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: o } = i, { labelStyles: s, nodeStyles: l, borderStyles: c, backgroundStyles: h } = Y(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = gt(r.flowchart.htmlLabels), p = u.insert("g").attr("class", "cluster-label "), g = await Be(p, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let m = g.getBBox();
  if (gt(r.flowchart.htmlLabels)) {
    const _ = g.children[0], O = et(g);
    m = _.getBoundingClientRect(), O.attr("width", m.width), O.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, w = t.y - x / 2;
  E.trace("Data ", t, JSON.stringify(t));
  let S;
  if (t.look === "handDrawn") {
    const _ = W.svg(u), O = H(t, {
      roughness: 0.7,
      fill: a,
      // fill: 'red',
      stroke: o,
      fillWeight: 4,
      seed: n
    }), I = _.path(pe(b, w, y, x, t.rx), O);
    S = u.insert(() => (E.debug("Rough node insert CXC", I), I), ":first-child"), S.select("path:nth-child(2)").attr("style", c.join(";")), S.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    S = u.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", w).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: k } = bs(r);
  if (p.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`
  ), s) {
    const _ = p.select("span");
    _ && _.attr("style", s);
  }
  const C = S.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(_) {
    return Tr(t, _);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), s_ = /* @__PURE__ */ d((e, t) => {
  const r = nt(), { themeVariables: i, handDrawnSeed: n } = r, { nodeBorder: a } = i, o = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = o.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, u = t.x - c / 2, f = t.y - h / 2;
  t.width = c;
  let p;
  if (t.look === "handDrawn") {
    const y = W.svg(o).rectangle(u, f, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: a,
      seed: n
    });
    p = o.insert(() => y, ":first-child");
  } else
    p = s.insert("rect", ":first-child"), p.attr("class", "divider").attr("x", u).attr("y", f).attr("width", c).attr("height", h).attr("data-look", t.look);
  const g = p.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Tr(t, m);
  }, { cluster: o, labelBBox: {} };
}, "divider"), o_ = Ff, l_ = {
  rect: Ff,
  squareRect: o_,
  roundedWithTitle: n_,
  noteGroup: i_,
  divider: s_,
  kanbanSection: a_
}, Ef = /* @__PURE__ */ new Map(), c_ = /* @__PURE__ */ d(async (e, t) => {
  const r = t.shape || "rect", i = await l_[r](e, t);
  return Ef.set(t.id, i), i;
}, "insertCluster"), MT = /* @__PURE__ */ d(() => {
  Ef = /* @__PURE__ */ new Map();
}, "clear");
function Of(e, t) {
  return e.intersect(t);
}
d(Of, "intersectNode");
var h_ = Of;
function Df(e, t, r, i) {
  var n = e.x, a = e.y, o = n - i.x, s = a - i.y, l = Math.sqrt(t * t * s * s + r * r * o * o), c = Math.abs(t * r * o / l);
  i.x < n && (c = -c);
  var h = Math.abs(t * r * s / l);
  return i.y < a && (h = -h), { x: n + c, y: a + h };
}
d(Df, "intersectEllipse");
var Rf = Df;
function If(e, t, r) {
  return Rf(e, t, t, r);
}
d(If, "intersectCircle");
var u_ = If;
function Pf(e, t, r, i) {
  var n, a, o, s, l, c, h, u, f, p, g, m, y, x, b;
  if (n = t.y - e.y, o = e.x - t.x, l = t.x * e.y - e.x * t.y, f = n * r.x + o * r.y + l, p = n * i.x + o * i.y + l, !(f !== 0 && p !== 0 && Xa(f, p)) && (a = i.y - r.y, s = r.x - i.x, c = i.x * r.y - r.x * i.y, h = a * e.x + s * e.y + c, u = a * t.x + s * t.y + c, !(h !== 0 && u !== 0 && Xa(h, u)) && (g = n * s - a * o, g !== 0)))
    return m = Math.abs(g / 2), y = o * c - s * l, x = y < 0 ? (y - m) / g : (y + m) / g, y = a * l - n * c, b = y < 0 ? (y - m) / g : (y + m) / g, { x, y: b };
}
d(Pf, "intersectLine");
function Xa(e, t) {
  return e * t > 0;
}
d(Xa, "sameSign");
var f_ = Pf;
function Nf(e, t, r) {
  let i = e.x, n = e.y, a = [], o = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    o = Math.min(o, h.x), s = Math.min(s, h.y);
  }) : (o = Math.min(o, t.x), s = Math.min(s, t.y));
  let l = i - e.width / 2 - o, c = n - e.height / 2 - s;
  for (let h = 0; h < t.length; h++) {
    let u = t[h], f = t[h < t.length - 1 ? h + 1 : 0], p = f_(
      e,
      r,
      { x: l + u.x, y: c + u.y },
      { x: l + f.x, y: c + f.y }
    );
    p && a.push(p);
  }
  return a.length ? (a.length > 1 && a.sort(function(h, u) {
    let f = h.x - r.x, p = h.y - r.y, g = Math.sqrt(f * f + p * p), m = u.x - r.x, y = u.y - r.y, x = Math.sqrt(m * m + y * y);
    return g < x ? -1 : g === x ? 0 : 1;
  }), a[0]) : e;
}
d(Nf, "intersectPolygon");
var p_ = Nf, q = {
  node: h_,
  circle: u_,
  ellipse: Rf,
  polygon: p_,
  rect: Tr
};
function zf(e, t) {
  const { labelStyles: r } = Y(t);
  t.labelStyle = r;
  const i = Z(t);
  let n = i;
  i || (n = "anchor");
  const a = e.insert("g").attr("class", n).attr("id", t.domId || t.id), o = 1, { cssStyles: s } = t, l = W.svg(a), c = H(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, o * 2, c), u = a.insert(() => h, ":first-child");
  return u.attr("class", "anchor").attr("style", Lt(s)), j(t, u), t.intersect = function(f) {
    return E.info("Circle intersect", t, o, f), q.circle(t, o, f);
  }, a;
}
d(zf, "anchor");
function Va(e, t, r, i, n, a, o) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, p = u / n, g = f / a, m = Math.sqrt(p ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * a * Math.sin(h) * (o ? -1 : 1), b = c - y * n * Math.cos(h) * (o ? -1 : 1), w = Math.atan2((t - b) / a, (e - x) / n);
  let k = Math.atan2((i - b) / a, (r - x) / n) - w;
  o && k < 0 && (k += 2 * Math.PI), !o && k > 0 && (k -= 2 * Math.PI);
  const C = [];
  for (let _ = 0; _ < 20; _++) {
    const O = _ / 19, I = w + O * k, F = x + n * Math.cos(I), M = b + a * Math.sin(I);
    C.push({ x: F, y: M });
  }
  return C;
}
d(Va, "generateArcPoints");
async function qf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = a.width + t.padding + 20, s = a.height + t.padding, l = s / 2, c = l / (2.5 + s / 50), { cssStyles: h } = t, u = [
    { x: o / 2, y: -s / 2 },
    { x: -o / 2, y: -s / 2 },
    ...Va(-o / 2, -s / 2, -o / 2, s / 2, c, l, !1),
    { x: o / 2, y: s / 2 },
    ...Va(o / 2, s / 2, o / 2, -s / 2, c, l, !0)
  ], f = W.svg(n), p = H(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = rt(u), m = f.path(g, p), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(${c / 2}, 0)`), j(t, y), t.intersect = function(x) {
    return q.polygon(t, u, x);
  }, n;
}
d(qf, "bowTieRect");
function de(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(n) {
      return n.x + "," + n.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
d(de, "insertPolygonShape");
async function Wf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = a.height + t.padding, s = 12, l = a.width + t.padding + s, c = 0, h = l, u = -o, f = 0, p = [
    { x: c + s, y: u },
    { x: h, y: u },
    { x: h, y: f },
    { x: c, y: f },
    { x: c, y: u + s },
    { x: c + s, y: u }
  ];
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = W.svg(n), x = H(t, {}), b = rt(p), w = y.path(b, x);
    g = n.insert(() => w, ":first-child").attr("transform", `translate(${-l / 2}, ${o / 2})`), m && g.attr("style", m);
  } else
    g = de(n, l, o, p);
  return i && g.attr("style", i), j(t, g), t.intersect = function(y) {
    return q.polygon(t, p, y);
  }, n;
}
d(Wf, "card");
function Hf(e, t) {
  const { nodeStyles: r } = Y(t);
  t.label = "";
  const i = e.insert("g").attr("class", Z(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, a = Math.max(28, t.width ?? 0), o = [
    { x: 0, y: a / 2 },
    { x: a / 2, y: 0 },
    { x: 0, y: -a / 2 },
    { x: -a / 2, y: 0 }
  ], s = W.svg(i), l = H(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = rt(o), h = s.path(c, l), u = i.insert(() => h, ":first-child");
  return n && t.look !== "handDrawn" && u.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return q.polygon(t, o, f);
  }, i;
}
d(Hf, "choice");
async function jf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: o } = await J(e, t, Z(t)), s = a.width / 2 + o;
  let l;
  const { cssStyles: c } = t;
  if (t.look === "handDrawn") {
    const h = W.svg(n), u = H(t, {}), f = h.circle(0, 0, s * 2, u);
    l = n.insert(() => f, ":first-child"), l.attr("class", "basic label-container").attr("style", Lt(c));
  } else
    l = n.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", i).attr("r", s).attr("cx", 0).attr("cy", 0);
  return j(t, l), t.intersect = function(h) {
    return E.info("Circle intersect", t, s, h), q.circle(t, s, h);
  }, n;
}
d(jf, "circle");
function Yf(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, n = { x: i / 2 * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: i / 2 * r }, o = { x: -(i / 2) * t, y: -(i / 2) * r }, s = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${n.x},${n.y} L ${o.x},${o.y}`;
}
d(Yf, "createLine");
function Gf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r, t.label = "";
  const n = e.insert("g").attr("class", Z(t)).attr("id", t.domId ?? t.id), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: o } = t, s = W.svg(n), l = H(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = s.circle(0, 0, a * 2, l), h = Yf(a), u = s.path(h, l), f = n.insert(() => c, ":first-child");
  return f.insert(() => u), o && t.look !== "handDrawn" && f.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), j(t, f), t.intersect = function(p) {
    return E.info("crossedCircle intersect", t, { radius: a, point: p }), q.circle(t, a, p);
  }, n;
}
d(Gf, "crossedCircle");
function se(e, t, r, i = 100, n = 0, a = 180) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: -p, y: -g });
  }
  return o;
}
d(se, "generateCirclePoints");
async function Uf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...se(s / 2, -l / 2, c, 30, -90, 0),
    { x: -s / 2 - c, y: c },
    ...se(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...se(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: -l / 2 },
    ...se(s / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: s / 2, y: -l / 2 - c },
    { x: -s / 2, y: -l / 2 - c },
    ...se(s / 2, -l / 2, c, 20, -90, 0),
    { x: -s / 2 - c, y: -c },
    ...se(s / 2 + s * 0.1, -c, c, 20, -180, -270),
    ...se(s / 2 + s * 0.1, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: l / 2 },
    ...se(s / 2, l / 2, c, 20, 0, 90),
    { x: -s / 2, y: l / 2 + c },
    { x: s / 2, y: l / 2 + c }
  ], p = W.svg(n), g = H(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = rt(u).replace("Z", ""), x = p.path(y, g), b = rt(f), w = p.path(b, { ...g }), S = n.insert("g", ":first-child");
  return S.insert(() => w, ":first-child").attr("stroke-opacity", 0), S.insert(() => x, ":first-child"), S.attr("class", "text"), h && t.look !== "handDrawn" && S.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(${c}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + c - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, S), t.intersect = function(k) {
    return q.polygon(t, f, k);
  }, n;
}
d(Uf, "curlyBraceLeft");
function oe(e, t, r, i = 100, n = 0, a = 180) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: p, y: g });
  }
  return o;
}
d(oe, "generateCirclePoints");
async function Xf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...oe(s / 2, -l / 2, c, 20, -90, 0),
    { x: s / 2 + c, y: -c },
    ...oe(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...oe(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: s / 2 + c, y: l / 2 },
    ...oe(s / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: -s / 2, y: -l / 2 - c },
    { x: s / 2, y: -l / 2 - c },
    ...oe(s / 2, -l / 2, c, 20, -90, 0),
    { x: s / 2 + c, y: -c },
    ...oe(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...oe(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: s / 2 + c, y: l / 2 },
    ...oe(s / 2, l / 2, c, 20, 0, 90),
    { x: s / 2, y: l / 2 + c },
    { x: -s / 2, y: l / 2 + c }
  ], p = W.svg(n), g = H(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = rt(u).replace("Z", ""), x = p.path(y, g), b = rt(f), w = p.path(b, { ...g }), S = n.insert("g", ":first-child");
  return S.insert(() => w, ":first-child").attr("stroke-opacity", 0), S.insert(() => x, ":first-child"), S.attr("class", "text"), h && t.look !== "handDrawn" && S.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(${-c}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, S), t.intersect = function(k) {
    return q.polygon(t, f, k);
  }, n;
}
d(Xf, "curlyBraceRight");
function xt(e, t, r, i = 100, n = 0, a = 180) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: -p, y: -g });
  }
  return o;
}
d(xt, "generateCirclePoints");
async function Vf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...xt(s / 2, -l / 2, c, 30, -90, 0),
    { x: -s / 2 - c, y: c },
    ...xt(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...xt(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: -l / 2 },
    ...xt(s / 2, l / 2, c, 20, 0, 90)
  ], f = [
    ...xt(-s / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: s / 2 - c / 2, y: c },
    ...xt(-s / 2 - c / 2, -c, c, 20, 0, 90),
    ...xt(-s / 2 - c / 2, c, c, 20, -90, 0),
    { x: s / 2 - c / 2, y: -c },
    ...xt(-s / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], p = [
    { x: s / 2, y: -l / 2 - c },
    { x: -s / 2, y: -l / 2 - c },
    ...xt(s / 2, -l / 2, c, 20, -90, 0),
    { x: -s / 2 - c, y: -c },
    ...xt(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...xt(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: l / 2 },
    ...xt(s / 2, l / 2, c, 20, 0, 90),
    { x: -s / 2, y: l / 2 + c },
    { x: s / 2 - c - c / 2, y: l / 2 + c },
    ...xt(-s / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: s / 2 - c / 2, y: c },
    ...xt(-s / 2 - c / 2, -c, c, 20, 0, 90),
    ...xt(-s / 2 - c / 2, c, c, 20, -90, 0),
    { x: s / 2 - c / 2, y: -c },
    ...xt(-s / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], g = W.svg(n), m = H(t, { fill: "none" });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = rt(u).replace("Z", ""), b = g.path(x, m), S = rt(f).replace("Z", ""), k = g.path(S, m), C = rt(p), _ = g.path(C, { ...m }), O = n.insert("g", ":first-child");
  return O.insert(() => _, ":first-child").attr("stroke-opacity", 0), O.insert(() => b, ":first-child"), O.insert(() => k, ":first-child"), O.attr("class", "text"), h && t.look !== "handDrawn" && O.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(${c - c / 4}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, O), t.intersect = function(I) {
    return q.polygon(t, p, I);
  }, n;
}
d(Vf, "curlyBraces");
async function Zf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = 80, s = 20, l = Math.max(o, (a.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: u } = t, f = W.svg(n), p = H(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = l, m = c, y = g - h, x = m / 4, b = [
    { x: y, y: 0 },
    { x, y: 0 },
    { x: 0, y: m / 2 },
    { x, y: m },
    { x: y, y: m },
    ...eo(-y, -m / 2, h, 50, 270, 90)
  ], w = rt(b), S = f.path(w, p), k = n.insert(() => S, ":first-child");
  return k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), k.attr("transform", `translate(${-l / 2}, ${-c / 2})`), j(t, k), t.intersect = function(C) {
    return q.polygon(t, b, C);
  }, n;
}
d(Zf, "curvedTrapezoid");
var d_ = /* @__PURE__ */ d((e, t, r, i, n, a) => [
  `M${e},${t + a}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), g_ = /* @__PURE__ */ d((e, t, r, i, n, a) => [
  `M${e},${t + a}`,
  `M${e + r},${t + a}`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), m_ = /* @__PURE__ */ d((e, t, r, i, n, a) => [`M${e - r / 2},${-i / 2}`, `a${n},${a} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function Kf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + t.padding, t.width ?? 0), l = s / 2, c = l / (2.5 + s / 50), h = Math.max(a.height + c + t.padding, t.height ?? 0);
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const p = W.svg(n), g = g_(0, 0, s, h, l, c), m = m_(0, c, s, h, l, c), y = p.path(g, H(t, {})), x = p.path(m, H(t, { fill: "none" }));
    u = n.insert(() => x, ":first-child"), u = n.insert(() => y, ":first-child"), u.attr("class", "basic label-container"), f && u.attr("style", f);
  } else {
    const p = d_(0, 0, s, h, l, c);
    u = n.insert("path", ":first-child").attr("d", p).attr("class", "basic label-container").attr("style", Lt(f)).attr("style", i);
  }
  return u.attr("label-offset-y", c), u.attr("transform", `translate(${-s / 2}, ${-(h / 2 + c)})`), j(t, u), o.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(p) {
    const g = q.rect(t, p), m = g.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let y = c * c * (1 - m * m / (l * l));
      y > 0 && (y = Math.sqrt(y)), y = c - y, p.y - (t.y ?? 0) > 0 && (y = -y), g.y += y;
    }
    return g;
  }, n;
}
d(Kf, "cylinder");
async function Qf(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = a.width + t.padding, l = a.height + t.padding, c = l * 0.2, h = -s / 2, u = -l / 2 - c / 2, { cssStyles: f } = t, p = W.svg(n), g = H(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u + c },
    { x: -h, y: u + c },
    { x: -h, y: -u },
    { x: h, y: -u },
    { x: h, y: u },
    { x: -h, y: u },
    { x: -h, y: u + c }
  ], y = p.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${h + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${u + c + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, x), t.intersect = function(b) {
    return q.rect(t, b);
  }, n;
}
d(Qf, "dividedRectangle");
async function Jf(e, t) {
  var f, p;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: o } = await J(e, t, Z(t)), l = a.width / 2 + o + 5, c = a.width / 2 + o;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const g = W.svg(n), m = H(t, { roughness: 0.2, strokeWidth: 2.5 }), y = H(t, { roughness: 0.2, strokeWidth: 1.5 }), x = g.circle(0, 0, l * 2, m), b = g.circle(0, 0, c * 2, y);
    h = n.insert("g", ":first-child"), h.attr("class", Lt(t.cssClasses)).attr("style", Lt(u)), (f = h.node()) == null || f.appendChild(x), (p = h.node()) == null || p.appendChild(b);
  } else {
    h = n.insert("g", ":first-child");
    const g = h.insert("circle", ":first-child"), m = h.insert("circle");
    h.attr("class", "basic label-container").attr("style", i), g.attr("class", "outer-circle").attr("style", i).attr("r", l).attr("cx", 0).attr("cy", 0), m.attr("class", "inner-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0);
  }
  return j(t, h), t.intersect = function(g) {
    return E.info("DoubleCircle intersect", t, l, g), q.circle(t, l, g);
  }, n;
}
d(Jf, "doublecircle");
function tp(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.label = "", t.labelStyle = i;
  const a = e.insert("g").attr("class", Z(t)).attr("id", t.domId ?? t.id), o = 7, { cssStyles: s } = t, l = W.svg(a), { nodeBorder: c } = r, h = H(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const u = l.circle(0, 0, o * 2, h), f = a.insert(() => u, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${c} !important;`), s && s.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), n && t.look !== "handDrawn" && f.selectAll("path").attr("style", n), j(t, f), t.intersect = function(p) {
    return E.info("filledCircle intersect", t, { radius: o, point: p }), q.circle(t, o, p);
  }, a;
}
d(tp, "filledCircle");
async function ep(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = a.width + (t.padding ?? 0), l = s + a.height, c = s + a.height, h = [
    { x: 0, y: -l },
    { x: c, y: -l },
    { x: c / 2, y: 0 }
  ], { cssStyles: u } = t, f = W.svg(n), p = H(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = rt(h), m = f.path(g, p), y = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
  return u && t.look !== "handDrawn" && y.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), t.width = s, t.height = l, j(t, y), o.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`
  ), t.intersect = function(x) {
    return E.info("Triangle intersect", t, h, x), q.polygon(t, h, x);
  }, n;
}
d(ep, "flippedTriangle");
function rp(e, t, { dir: r, config: { state: i, themeVariables: n } }) {
  const { nodeStyles: a } = Y(t);
  t.label = "";
  const o = e.insert("g").attr("class", Z(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t;
  let l = Math.max(70, (t == null ? void 0 : t.width) ?? 0), c = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
  r === "LR" && (l = Math.max(10, (t == null ? void 0 : t.width) ?? 0), c = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
  const h = -1 * l / 2, u = -1 * c / 2, f = W.svg(o), p = H(t, {
    stroke: n.lineColor,
    fill: n.lineColor
  });
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = f.rectangle(h, u, l, c, p), m = o.insert(() => g, ":first-child");
  s && t.look !== "handDrawn" && m.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && m.selectAll("path").attr("style", a), j(t, m);
  const y = (i == null ? void 0 : i.padding) ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
    return q.rect(t, x);
  }, o;
}
d(rp, "forkJoin");
async function ip(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const n = 80, a = 50, { shapeSvg: o, bbox: s } = await J(e, t, Z(t)), l = Math.max(n, s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a, s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: u } = t, f = W.svg(o), p = H(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = [
    { x: -l / 2, y: -c / 2 },
    { x: l / 2 - h, y: -c / 2 },
    ...eo(-l / 2 + h, 0, h, 50, 90, 270),
    { x: l / 2 - h, y: c / 2 },
    { x: -l / 2, y: c / 2 }
  ], m = rt(g), y = f.path(m, p), x = o.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), j(t, x), t.intersect = function(b) {
    return E.info("Pill intersect", t, { radius: h, point: b }), q.polygon(t, g, b);
  }, o;
}
d(ip, "halfRoundedRectangle");
var y_ = /* @__PURE__ */ d((e, t, r, i, n) => [
  `M${e + n},${t}`,
  `L${e + r - n},${t}`,
  `L${e + r},${t - i / 2}`,
  `L${e + r - n},${t - i}`,
  `L${e + n},${t - i}`,
  `L${e},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function np(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = 4, s = a.height + t.padding, l = s / o, c = a.width + 2 * l + t.padding, h = [
    { x: l, y: 0 },
    { x: c - l, y: 0 },
    { x: c, y: -s / 2 },
    { x: c - l, y: -s },
    { x: l, y: -s },
    { x: 0, y: -s / 2 }
  ];
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const p = W.svg(n), g = H(t, {}), m = y_(0, 0, c, s, l), y = p.path(m, g);
    u = n.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${s / 2})`), f && u.attr("style", f);
  } else
    u = de(n, c, s, h);
  return i && u.attr("style", i), t.width = c, t.height = s, j(t, u), t.intersect = function(p) {
    return q.polygon(t, h, p);
  }, n;
}
d(np, "hexagon");
async function ap(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: n } = await J(e, t, Z(t)), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), o = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: s } = t, l = W.svg(n), c = H(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: a, y: 0 },
    { x: 0, y: o },
    { x: a, y: o }
  ], u = rt(h), f = l.path(u, c), p = n.insert(() => f, ":first-child");
  return p.attr("class", "basic label-container"), s && t.look !== "handDrawn" && p.selectChildren("path").attr("style", s), i && t.look !== "handDrawn" && p.selectChildren("path").attr("style", i), p.attr("transform", `translate(${-a / 2}, ${-o / 2})`), j(t, p), t.intersect = function(g) {
    return E.info("Pill intersect", t, { points: h }), q.polygon(t, h, g);
  }, n;
}
d(ap, "hourglass");
async function sp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await J(e, t, "icon-shape default"), f = t.pos === "t", p = s, g = s, { nodeBorder: m } = r, { stylesMap: y } = Br(t), x = -g / 2, b = -p / 2, w = t.label ? 8 : 0, S = W.svg(c), k = H(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const C = S.rectangle(x, b, g, p, k), _ = Math.max(g, h.width), O = p + h.height + w, I = S.rectangle(-_ / 2, -O / 2, _, O, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), F = c.insert(() => C, ":first-child"), M = c.insert(() => I);
  if (t.icon) {
    const P = c.append("g");
    P.html(
      `<g>${await An(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const D = P.node().getBBox(), A = D.width, L = D.height, T = D.x, $ = D.y;
    P.attr(
      "transform",
      `translate(${-A / 2 - T},${f ? h.height / 2 + w / 2 - L / 2 - $ : -h.height / 2 - w / 2 - L / 2 - $})`
    ), P.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -O / 2 : O / 2 - h.height})`
  ), F.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + w / 2 : -h.height / 2 - w / 2})`
  ), j(t, M), t.intersect = function(P) {
    if (E.info("iconSquare intersect", t, P), !t.label)
      return q.rect(t, P);
    const D = t.x ?? 0, A = t.y ?? 0, L = t.height ?? 0;
    let T = [];
    return f ? T = [
      { x: D - h.width / 2, y: A - L / 2 },
      { x: D + h.width / 2, y: A - L / 2 },
      { x: D + h.width / 2, y: A - L / 2 + h.height + w },
      { x: D + g / 2, y: A - L / 2 + h.height + w },
      { x: D + g / 2, y: A + L / 2 },
      { x: D - g / 2, y: A + L / 2 },
      { x: D - g / 2, y: A - L / 2 + h.height + w },
      { x: D - h.width / 2, y: A - L / 2 + h.height + w }
    ] : T = [
      { x: D - g / 2, y: A - L / 2 },
      { x: D + g / 2, y: A - L / 2 },
      { x: D + g / 2, y: A - L / 2 + p },
      { x: D + h.width / 2, y: A - L / 2 + p },
      { x: D + h.width / 2 / 2, y: A + L / 2 },
      { x: D - h.width / 2, y: A + L / 2 },
      { x: D - h.width / 2, y: A - L / 2 + p },
      { x: D - g / 2, y: A - L / 2 + p }
    ], q.polygon(t, T, P);
  }, c;
}
d(sp, "icon");
async function op(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await J(e, t, "icon-shape default"), f = 20, p = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: x } = Br(t), b = W.svg(c), w = H(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const S = x.get("fill");
  w.stroke = S ?? y;
  const k = c.append("g");
  t.icon && k.html(
    `<g>${await An(t.icon, {
      height: s,
      width: s,
      fallbackPrefix: ""
    })}</g>`
  );
  const C = k.node().getBBox(), _ = C.width, O = C.height, I = C.x, F = C.y, M = Math.max(_, O) * Math.SQRT2 + f * 2, P = b.circle(0, 0, M, w), D = Math.max(M, h.width), A = M + h.height + p, L = b.rectangle(-D / 2, -A / 2, D, A, {
    ...w,
    fill: "transparent",
    stroke: "none"
  }), T = c.insert(() => P, ":first-child"), $ = c.insert(() => L);
  return k.attr(
    "transform",
    `translate(${-_ / 2 - I},${g ? h.height / 2 + p / 2 - O / 2 - F : -h.height / 2 - p / 2 - O / 2 - F})`
  ), k.attr("style", `color: ${x.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${g ? -A / 2 : A / 2 - h.height})`
  ), T.attr(
    "transform",
    `translate(0,${g ? h.height / 2 + p / 2 : -h.height / 2 - p / 2})`
  ), j(t, $), t.intersect = function(B) {
    return E.info("iconSquare intersect", t, B), q.rect(t, B);
  }, c;
}
d(op, "iconCircle");
async function lp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await J(
    e,
    t,
    "icon-shape default"
  ), p = t.pos === "t", g = s + u * 2, m = s + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = Br(t), w = -m / 2, S = -g / 2, k = t.label ? 8 : 0, C = W.svg(c), _ = H(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const O = b.get("fill");
  _.stroke = O ?? x;
  const I = C.path(pe(w, S, m, g, 5), _), F = Math.max(m, h.width), M = g + h.height + k, P = C.rectangle(-F / 2, -M / 2, F, M, {
    ..._,
    fill: "transparent",
    stroke: "none"
  }), D = c.insert(() => I, ":first-child").attr("class", "icon-shape2"), A = c.insert(() => P);
  if (t.icon) {
    const L = c.append("g");
    L.html(
      `<g>${await An(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const T = L.node().getBBox(), $ = T.width, B = T.height, N = T.x, G = T.y;
    L.attr(
      "transform",
      `translate(${-$ / 2 - N},${p ? h.height / 2 + k / 2 - B / 2 - G : -h.height / 2 - k / 2 - B / 2 - G})`
    ), L.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -M / 2 : M / 2 - h.height})`
  ), D.attr(
    "transform",
    `translate(0,${p ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), j(t, A), t.intersect = function(L) {
    if (E.info("iconSquare intersect", t, L), !t.label)
      return q.rect(t, L);
    const T = t.x ?? 0, $ = t.y ?? 0, B = t.height ?? 0;
    let N = [];
    return p ? N = [
      { x: T - h.width / 2, y: $ - B / 2 },
      { x: T + h.width / 2, y: $ - B / 2 },
      { x: T + h.width / 2, y: $ - B / 2 + h.height + k },
      { x: T + m / 2, y: $ - B / 2 + h.height + k },
      { x: T + m / 2, y: $ + B / 2 },
      { x: T - m / 2, y: $ + B / 2 },
      { x: T - m / 2, y: $ - B / 2 + h.height + k },
      { x: T - h.width / 2, y: $ - B / 2 + h.height + k }
    ] : N = [
      { x: T - m / 2, y: $ - B / 2 },
      { x: T + m / 2, y: $ - B / 2 },
      { x: T + m / 2, y: $ - B / 2 + g },
      { x: T + h.width / 2, y: $ - B / 2 + g },
      { x: T + h.width / 2 / 2, y: $ + B / 2 },
      { x: T - h.width / 2, y: $ + B / 2 },
      { x: T - h.width / 2, y: $ - B / 2 + g },
      { x: T - m / 2, y: $ - B / 2 + g }
    ], q.polygon(t, N, L);
  }, c;
}
d(lp, "iconRounded");
async function cp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await J(
    e,
    t,
    "icon-shape default"
  ), p = t.pos === "t", g = s + u * 2, m = s + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = Br(t), w = -m / 2, S = -g / 2, k = t.label ? 8 : 0, C = W.svg(c), _ = H(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const O = b.get("fill");
  _.stroke = O ?? x;
  const I = C.path(pe(w, S, m, g, 0.1), _), F = Math.max(m, h.width), M = g + h.height + k, P = C.rectangle(-F / 2, -M / 2, F, M, {
    ..._,
    fill: "transparent",
    stroke: "none"
  }), D = c.insert(() => I, ":first-child"), A = c.insert(() => P);
  if (t.icon) {
    const L = c.append("g");
    L.html(
      `<g>${await An(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const T = L.node().getBBox(), $ = T.width, B = T.height, N = T.x, G = T.y;
    L.attr(
      "transform",
      `translate(${-$ / 2 - N},${p ? h.height / 2 + k / 2 - B / 2 - G : -h.height / 2 - k / 2 - B / 2 - G})`
    ), L.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -M / 2 : M / 2 - h.height})`
  ), D.attr(
    "transform",
    `translate(0,${p ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), j(t, A), t.intersect = function(L) {
    if (E.info("iconSquare intersect", t, L), !t.label)
      return q.rect(t, L);
    const T = t.x ?? 0, $ = t.y ?? 0, B = t.height ?? 0;
    let N = [];
    return p ? N = [
      { x: T - h.width / 2, y: $ - B / 2 },
      { x: T + h.width / 2, y: $ - B / 2 },
      { x: T + h.width / 2, y: $ - B / 2 + h.height + k },
      { x: T + m / 2, y: $ - B / 2 + h.height + k },
      { x: T + m / 2, y: $ + B / 2 },
      { x: T - m / 2, y: $ + B / 2 },
      { x: T - m / 2, y: $ - B / 2 + h.height + k },
      { x: T - h.width / 2, y: $ - B / 2 + h.height + k }
    ] : N = [
      { x: T - m / 2, y: $ - B / 2 },
      { x: T + m / 2, y: $ - B / 2 },
      { x: T + m / 2, y: $ - B / 2 + g },
      { x: T + h.width / 2, y: $ - B / 2 + g },
      { x: T + h.width / 2 / 2, y: $ + B / 2 },
      { x: T - h.width / 2, y: $ + B / 2 },
      { x: T - h.width / 2, y: $ - B / 2 + g },
      { x: T - m / 2, y: $ - B / 2 + g }
    ], q.polygon(t, N, L);
  }, c;
}
d(cp, "iconSquare");
async function hp(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = (t == null ? void 0 : t.img) ?? "", await i.decode();
  const n = Number(i.naturalWidth.toString().replace("px", "")), a = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = n / a;
  const { labelStyles: o } = Y(t);
  t.labelStyle = o;
  const s = r == null ? void 0 : r.wrappingWidth;
  t.defaultWidth = r == null ? void 0 : r.wrappingWidth;
  const l = Math.max(
    t.label ? s ?? 0 : 0,
    (t == null ? void 0 : t.assetWidth) ?? n
  ), c = t.constraint === "on" && t != null && t.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? a;
  t.width = Math.max(c, s ?? 0);
  const { shapeSvg: u, bbox: f, label: p } = await J(e, t, "image-shape default"), g = t.pos === "t", m = -c / 2, y = -h / 2, x = t.label ? 8 : 0, b = W.svg(u), w = H(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const S = b.rectangle(m, y, c, h, w), k = Math.max(c, f.width), C = h + f.height + x, _ = b.rectangle(-k / 2, -C / 2, k, C, {
    ...w,
    fill: "none",
    stroke: "none"
  }), O = u.insert(() => S, ":first-child"), I = u.insert(() => _);
  if (t.img) {
    const F = u.append("image");
    F.attr("href", t.img), F.attr("width", c), F.attr("height", h), F.attr("preserveAspectRatio", "none"), F.attr(
      "transform",
      `translate(${-c / 2},${g ? C / 2 - h : -C / 2})`
    );
  }
  return p.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -h / 2 - f.height / 2 - x / 2 : h / 2 - f.height / 2 + x / 2})`
  ), O.attr(
    "transform",
    `translate(0,${g ? f.height / 2 + x / 2 : -f.height / 2 - x / 2})`
  ), j(t, I), t.intersect = function(F) {
    if (E.info("iconSquare intersect", t, F), !t.label)
      return q.rect(t, F);
    const M = t.x ?? 0, P = t.y ?? 0, D = t.height ?? 0;
    let A = [];
    return g ? A = [
      { x: M - f.width / 2, y: P - D / 2 },
      { x: M + f.width / 2, y: P - D / 2 },
      { x: M + f.width / 2, y: P - D / 2 + f.height + x },
      { x: M + c / 2, y: P - D / 2 + f.height + x },
      { x: M + c / 2, y: P + D / 2 },
      { x: M - c / 2, y: P + D / 2 },
      { x: M - c / 2, y: P - D / 2 + f.height + x },
      { x: M - f.width / 2, y: P - D / 2 + f.height + x }
    ] : A = [
      { x: M - c / 2, y: P - D / 2 },
      { x: M + c / 2, y: P - D / 2 },
      { x: M + c / 2, y: P - D / 2 + h },
      { x: M + f.width / 2, y: P - D / 2 + h },
      { x: M + f.width / 2 / 2, y: P + D / 2 },
      { x: M - f.width / 2, y: P + D / 2 },
      { x: M - f.width / 2, y: P - D / 2 + h },
      { x: M - c / 2, y: P - D / 2 + h }
    ], q.polygon(t, A, F);
  }, u;
}
d(hp, "imageSquare");
async function up(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * s / 6, y: -s },
    { x: -3 * s / 6, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = W.svg(n), f = H(t, {}), p = rt(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = de(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, j(t, c), t.intersect = function(u) {
    return q.polygon(t, l, u);
  }, n;
}
d(up, "inv_trapezoid");
async function xi(e, t, r) {
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i;
  const { shapeSvg: a, bbox: o } = await J(e, t, Z(t)), s = Math.max(o.width + r.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), l = Math.max(o.height + r.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), c = -s / 2, h = -l / 2;
  let u, { rx: f, ry: p } = t;
  const { cssStyles: g } = t;
  if (r != null && r.rx && r.ry && (f = r.rx, p = r.ry), t.look === "handDrawn") {
    const m = W.svg(a), y = H(t, {}), x = f || p ? m.path(pe(c, h, s, l, f || 0), y) : m.rectangle(c, h, s, l, y);
    u = a.insert(() => x, ":first-child"), u.attr("class", "basic label-container").attr("style", Lt(g));
  } else
    u = a.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", n).attr("rx", Lt(f)).attr("ry", Lt(p)).attr("x", c).attr("y", h).attr("width", s).attr("height", l);
  return j(t, u), t.intersect = function(m) {
    return q.rect(t, m);
  }, a;
}
d(xi, "drawRect");
async function fp(e, t) {
  const { shapeSvg: r, bbox: i, label: n } = await J(e, t, "label"), a = r.insert("rect", ":first-child");
  return a.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), n.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), j(t, a), t.intersect = function(l) {
    return q.rect(t, l);
  }, r;
}
d(fp, "labelRect");
async function pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o + 3 * s / 6, y: 0 },
    { x: o, y: -s },
    { x: -(3 * s) / 6, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = W.svg(n), f = H(t, {}), p = rt(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = de(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, j(t, c), t.intersect = function(u) {
    return q.polygon(t, l, u);
  }, n;
}
d(pp, "lean_left");
async function dp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: -3 * s / 6, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * s / 6, y: -s },
    { x: 0, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = W.svg(n), f = H(t, {}), p = rt(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = de(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, j(t, c), t.intersect = function(u) {
    return q.polygon(t, l, u);
  }, n;
}
d(dp, "lean_right");
function gp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.label = "", t.labelStyle = r;
  const n = e.insert("g").attr("class", Z(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, o = Math.max(35, (t == null ? void 0 : t.width) ?? 0), s = Math.max(35, (t == null ? void 0 : t.height) ?? 0), l = 7, c = [
    { x: o, y: 0 },
    { x: 0, y: s + l / 2 },
    { x: o - 2 * l, y: s + l / 2 },
    { x: 0, y: 2 * s },
    { x: o, y: s - l / 2 },
    { x: 2 * l, y: s - l / 2 }
  ], h = W.svg(n), u = H(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = rt(c), p = h.path(f, u), g = n.insert(() => p, ":first-child");
  return a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${o / 2},${-s})`), j(t, g), t.intersect = function(m) {
    return E.info("lightningBolt intersect", t, m), q.polygon(t, c, m);
  }, n;
}
d(gp, "lightningBolt");
var x_ = /* @__PURE__ */ d((e, t, r, i, n, a, o) => [
  `M${e},${t + a}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + a + o}`,
  `a${n},${a} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), b_ = /* @__PURE__ */ d((e, t, r, i, n, a, o) => [
  `M${e},${t + a}`,
  `M${e + r},${t + a}`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + a + o}`,
  `a${n},${a} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), C_ = /* @__PURE__ */ d((e, t, r, i, n, a) => [`M${e - r / 2},${-i / 2}`, `a${n},${a} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0), t.width ?? 0), l = s / 2, c = l / (2.5 + s / 50), h = Math.max(a.height + c + (t.padding ?? 0), t.height ?? 0), u = h * 0.1;
  let f;
  const { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    const g = W.svg(n), m = b_(0, 0, s, h, l, c, u), y = C_(0, c, s, h, l, c), x = H(t, {}), b = g.path(m, x), w = g.path(y, x);
    n.insert(() => w, ":first-child").attr("class", "line"), f = n.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), p && f.attr("style", p);
  } else {
    const g = x_(0, 0, s, h, l, c, u);
    f = n.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", Lt(p)).attr("style", i);
  }
  return f.attr("label-offset-y", c), f.attr("transform", `translate(${-s / 2}, ${-(h / 2 + c)})`), j(t, f), o.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(g) {
    const m = q.rect(t, g), y = m.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let x = c * c * (1 - y * y / (l * l));
      x > 0 && (x = Math.sqrt(x)), x = c - x, g.y - (t.y ?? 0) > 0 && (x = -x), m.y += x;
    }
    return m;
  }, n;
}
d(mp, "linedCylinder");
async function yp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, { cssStyles: u } = t, f = W.svg(n), p = H(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = [
    { x: -s / 2 - s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: h / 2 },
    ...Se(
      -s / 2 - s / 2 * 0.1,
      h / 2,
      s / 2 + s / 2 * 0.1,
      h / 2,
      c,
      0.8
    ),
    { x: s / 2 + s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2, y: -h / 2 },
    { x: -s / 2, y: h / 2 * 1.1 },
    { x: -s / 2, y: -h / 2 }
  ], m = f.polygon(
    g.map((x) => [x.x, x.y]),
    p
  ), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * 0.1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, y), t.intersect = function(x) {
    return q.polygon(t, g, x);
  }, n;
}
d(yp, "linedWaveEdgedRect");
async function xp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -s / 2, u = -l / 2, { cssStyles: f } = t, p = W.svg(n), g = H(t, {}), m = [
    { x: h - c, y: u + c },
    { x: h - c, y: u + l + c },
    { x: h + s - c, y: u + l + c },
    { x: h + s - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u + l - c },
    { x: h + s + c, y: u + l - c },
    { x: h + s + c, y: u - c },
    { x: h + c, y: u - c },
    { x: h + c, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = [
    { x: h, y: u + c },
    { x: h + s - c, y: u + c },
    { x: h + s - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u },
    { x: h, y: u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = rt(m), b = p.path(x, g), w = rt(y), S = p.path(w, { ...g, fill: "none" }), k = n.insert(() => S, ":first-child");
  return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), f && t.look !== "handDrawn" && k.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(a.width / 2) - c - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c - (a.y - (a.top ?? 0))})`
  ), j(t, k), t.intersect = function(C) {
    return q.polygon(t, m, C);
  }, n;
}
d(xp, "multiRect");
async function bp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, u = -s / 2, f = -h / 2, p = 5, { cssStyles: g } = t, m = Se(
    u - p,
    f + h + p,
    u + s - p,
    f + h + p,
    c,
    0.8
  ), y = m == null ? void 0 : m[m.length - 1], x = [
    { x: u - p, y: f + p },
    { x: u - p, y: f + h + p },
    ...m,
    { x: u + s - p, y: y.y - p },
    { x: u + s, y: y.y - p },
    { x: u + s, y: y.y - 2 * p },
    { x: u + s + p, y: y.y - 2 * p },
    { x: u + s + p, y: f - p },
    { x: u + p, y: f - p },
    { x: u + p, y: f },
    { x: u, y: f },
    { x: u, y: f + p }
  ], b = [
    { x: u, y: f + p },
    { x: u + s - p, y: f + p },
    { x: u + s - p, y: y.y - p },
    { x: u + s, y: y.y - p },
    { x: u + s, y: f },
    { x: u, y: f }
  ], w = W.svg(n), S = H(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const k = rt(x), C = w.path(k, S), _ = rt(b), O = w.path(_, S), I = n.insert(() => C, ":first-child");
  return I.insert(() => O), I.attr("class", "basic label-container"), g && t.look !== "handDrawn" && I.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && I.selectAll("path").attr("style", i), I.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-(a.width / 2) - p - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + p - c / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, I), t.intersect = function(F) {
    return q.polygon(t, x, F);
  }, n;
}
d(bp, "multiWaveEdgedRectangle");
async function Cp(e, t, { config: { themeVariables: r } }) {
  var x;
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i, t.useHtmlLabels || ((x = Et().flowchart) == null ? void 0 : x.htmlLabels) !== !1 || (t.centerLabel = !0);
  const { shapeSvg: o, bbox: s } = await J(e, t, Z(t)), l = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -l / 2, u = -c / 2, { cssStyles: f } = t, p = W.svg(o), g = H(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = p.rectangle(h, u, l, c, g), y = o.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), f && t.look !== "handDrawn" && y.selectAll("path").attr("style", f), n && t.look !== "handDrawn" && y.selectAll("path").attr("style", n), j(t, y), t.intersect = function(b) {
    return q.rect(t, b);
  }, o;
}
d(Cp, "note");
var w_ = /* @__PURE__ */ d((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function wp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = a.width + t.padding, s = a.height + t.padding, l = o + s, c = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = W.svg(n), p = H(t, {}), g = w_(0, 0, l), m = f.path(g, p);
    h = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`), u && h.attr("style", u);
  } else
    h = de(n, l, l, c);
  return i && h.attr("style", i), j(t, h), t.intersect = function(f) {
    return E.debug(
      `APA12 Intersect called SPLIT
point:`,
      f,
      `
node:
`,
      t,
      `
res:`,
      q.polygon(t, c, f)
    ), q.polygon(t, c, f);
  }, n;
}
d(wp, "question");
async function _p(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), c = -s / 2, h = -l / 2, u = h / 2, f = [
    { x: c + u, y: h },
    { x: c, y: 0 },
    { x: c + u, y: -h },
    { x: -c, y: -h },
    { x: -c, y: h }
  ], { cssStyles: p } = t, g = W.svg(n), m = H(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = rt(f), x = g.path(y, m), b = n.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container"), p && t.look !== "handDrawn" && b.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), b.attr("transform", `translate(${-u / 2},0)`), o.attr(
    "transform",
    `translate(${-u / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`
  ), j(t, b), t.intersect = function(w) {
    return q.polygon(t, f, w);
  }, n;
}
d(_p, "rect_left_inv_arrow");
async function kp(e, t) {
  var O, I;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  let n;
  t.cssClasses ? n = "node " + t.cssClasses : n = "node default";
  const a = e.insert("g").attr("class", n).attr("id", t.domId || t.id), o = a.insert("g"), s = a.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = s.node().appendChild(await Re(c, t.labelStyle, !0, !0));
  let u = { width: 0, height: 0 };
  if (gt((I = (O = nt()) == null ? void 0 : O.flowchart) == null ? void 0 : I.htmlLabels)) {
    const F = h.children[0], M = et(h);
    u = F.getBoundingClientRect(), M.attr("width", u.width), M.attr("height", u.height);
  }
  E.info("Text 2", l);
  const f = l || [], p = h.getBBox(), g = s.node().appendChild(
    await Re(
      f.join ? f.join("<br/>") : f,
      t.labelStyle,
      !0,
      !0
    )
  ), m = g.children[0], y = et(g);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const x = (t.padding || 0) / 2;
  et(g).attr(
    "transform",
    "translate( " + (u.width > p.width ? 0 : (p.width - u.width) / 2) + ", " + (p.height + x + 5) + ")"
  ), et(h).attr(
    "transform",
    "translate( " + (u.width < p.width ? 0 : -(p.width - u.width) / 2) + ", 0)"
  ), u = s.node().getBBox(), s.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - x + 3) + ")"
  );
  const b = u.width + (t.padding || 0), w = u.height + (t.padding || 0), S = -u.width / 2 - x, k = -u.height / 2 - x;
  let C, _;
  if (t.look === "handDrawn") {
    const F = W.svg(a), M = H(t, {}), P = F.path(
      pe(S, k, b, w, t.rx || 0),
      M
    ), D = F.line(
      -u.width / 2 - x,
      -u.height / 2 - x + p.height + x,
      u.width / 2 + x,
      -u.height / 2 - x + p.height + x,
      M
    );
    _ = a.insert(() => (E.debug("Rough node insert CXC", P), D), ":first-child"), C = a.insert(() => (E.debug("Rough node insert CXC", P), P), ":first-child");
  } else
    C = o.insert("rect", ":first-child"), _ = o.insert("line"), C.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - x).attr("y", -u.height / 2 - x).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), _.attr("class", "divider").attr("x1", -u.width / 2 - x).attr("x2", u.width / 2 + x).attr("y1", -u.height / 2 - x + p.height + x).attr("y2", -u.height / 2 - x + p.height + x);
  return j(t, C), t.intersect = function(F) {
    return q.rect(t, F);
  }, a;
}
d(kp, "rectWithTitle");
async function vp(e, t) {
  const r = {
    rx: 5,
    ry: 5,
    classes: "",
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 1,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return xi(e, t, r);
}
d(vp, "roundedRect");
async function Sp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = (t == null ? void 0 : t.padding) ?? 0, l = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -a.width / 2 - s, u = -a.height / 2 - s, { cssStyles: f } = t, p = W.svg(n), g = H(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u },
    { x: h + l + 8, y: u },
    { x: h + l + 8, y: u + c },
    { x: h - 8, y: u + c },
    { x: h - 8, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = p.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container").attr("style", Lt(f)), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-l / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`
  ), j(t, x), t.intersect = function(b) {
    return q.rect(t, b);
  }, n;
}
d(Sp, "shadedProcess");
async function Tp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -s / 2, h = -l / 2, { cssStyles: u } = t, f = W.svg(n), p = H(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = [
    { x: c, y: h },
    { x: c, y: h + l },
    { x: c + s, y: h + l },
    { x: c + s, y: h - l / 2 }
  ], m = rt(g), y = f.path(m, p), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), x.attr("transform", `translate(0, ${l / 4})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`
  ), j(t, x), t.intersect = function(b) {
    return q.polygon(t, g, b);
  }, n;
}
d(Tp, "slopedRect");
async function Bp(e, t) {
  const r = {
    rx: 0,
    ry: 0,
    classes: "",
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 2,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return xi(e, t, r);
}
d(Bp, "squareRect");
async function Lp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = a.height + t.padding, s = a.width + o / 4 + t.padding;
  let l;
  const { cssStyles: c } = t;
  if (t.look === "handDrawn") {
    const h = W.svg(n), u = H(t, {}), f = pe(-s / 2, -o / 2, s, o, o / 2), p = h.path(f, u);
    l = n.insert(() => p, ":first-child"), l.attr("class", "basic label-container").attr("style", Lt(c));
  } else
    l = n.insert("rect", ":first-child"), l.attr("class", "basic label-container").attr("style", i).attr("rx", o / 2).attr("ry", o / 2).attr("x", -s / 2).attr("y", -o / 2).attr("width", s).attr("height", o);
  return j(t, l), t.intersect = function(h) {
    return q.rect(t, h);
  }, n;
}
d(Lp, "stadium");
async function Mp(e, t) {
  return xi(e, t, {
    rx: 5,
    ry: 5,
    classes: "flowchart-node"
  });
}
d(Mp, "state");
function Ap(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i;
  const { cssStyles: a } = t, { lineColor: o, stateBorder: s, nodeBorder: l } = r, c = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), h = W.svg(c), u = H(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = h.circle(0, 0, 14, {
    ...u,
    stroke: o,
    strokeWidth: 2
  }), p = s ?? l, g = h.circle(0, 0, 5, {
    ...u,
    fill: p,
    stroke: p,
    strokeWidth: 2,
    fillStyle: "solid"
  }), m = c.insert(() => f, ":first-child");
  return m.insert(() => g), a && m.selectAll("path").attr("style", a), n && m.selectAll("path").attr("style", n), j(t, m), t.intersect = function(y) {
    return q.circle(t, 7, y);
  }, c;
}
d(Ap, "stateEnd");
function $p(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i } = r, n = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const s = W.svg(n).circle(0, 0, 14, e_(i));
    a = n.insert(() => s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else
    a = n.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return j(t, a), t.intersect = function(o) {
    return q.circle(t, 7, o);
  }, n;
}
d($p, "stateStart");
async function Fp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = ((t == null ? void 0 : t.padding) || 0) / 2, s = a.width + t.padding, l = a.height + t.padding, c = -a.width / 2 - o, h = -a.height / 2 - o, u = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: s, y: -l },
    { x: 0, y: -l },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: s + 8, y: 0 },
    { x: s + 8, y: -l },
    { x: -8, y: -l },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const f = W.svg(n), p = H(t, {}), g = f.rectangle(c - 8, h, s + 16, l, p), m = f.line(c, h, c, h + l, p), y = f.line(c + s, h, c + s, h + l, p);
    n.insert(() => m, ":first-child"), n.insert(() => y, ":first-child");
    const x = n.insert(() => g, ":first-child"), { cssStyles: b } = t;
    x.attr("class", "basic label-container").attr("style", Lt(b)), j(t, x);
  } else {
    const f = de(n, s, l, u);
    i && f.attr("style", i), j(t, f);
  }
  return t.intersect = function(f) {
    return q.polygon(t, u, f);
  }, n;
}
d(Fp, "subroutine");
async function Ep(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -o / 2, c = -s / 2, h = 0.2 * s, u = 0.2 * s, { cssStyles: f } = t, p = W.svg(n), g = H(t, {}), m = [
    { x: l - h / 2, y: c },
    { x: l + o + h / 2, y: c },
    { x: l + o + h / 2, y: c + s },
    { x: l - h / 2, y: c + s }
  ], y = [
    { x: l + o - h / 2, y: c + s },
    { x: l + o + h / 2, y: c + s },
    { x: l + o + h / 2, y: c + s - u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = rt(m), b = p.path(x, g), w = rt(y), S = p.path(w, { ...g, fillStyle: "solid" }), k = n.insert(() => S, ":first-child");
  return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), f && t.look !== "handDrawn" && k.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), j(t, k), t.intersect = function(C) {
    return q.polygon(t, m, C);
  }, n;
}
d(Ep, "taggedRect");
async function Op(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = 0.2 * s, u = 0.2 * l, f = l + c, { cssStyles: p } = t, g = W.svg(n), m = H(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -s / 2 - s / 2 * 0.1, y: f / 2 },
    ...Se(
      -s / 2 - s / 2 * 0.1,
      f / 2,
      s / 2 + s / 2 * 0.1,
      f / 2,
      c,
      0.8
    ),
    { x: s / 2 + s / 2 * 0.1, y: -f / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: -f / 2 }
  ], x = -s / 2 + s / 2 * 0.1, b = -f / 2 - u * 0.4, w = [
    { x: x + s - h, y: (b + l) * 1.4 },
    { x: x + s, y: b + l - u },
    { x: x + s, y: (b + l) * 0.9 },
    ...Se(
      x + s,
      (b + l) * 1.3,
      x + s - h,
      (b + l) * 1.5,
      -l * 0.03,
      0.5
    )
  ], S = rt(y), k = g.path(S, m), C = rt(w), _ = g.path(C, {
    ...m,
    fillStyle: "solid"
  }), O = n.insert(() => _, ":first-child");
  return O.insert(() => k, ":first-child"), O.attr("class", "basic label-container"), p && t.look !== "handDrawn" && O.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, O), t.intersect = function(I) {
    return q.polygon(t, y, I);
  }, n;
}
d(Op, "taggedWaveEdgedRectangle");
async function Dp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = Math.max(a.width + t.padding, (t == null ? void 0 : t.width) || 0), s = Math.max(a.height + t.padding, (t == null ? void 0 : t.height) || 0), l = -o / 2, c = -s / 2, h = n.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", o).attr("height", s), j(t, h), t.intersect = function(u) {
    return q.rect(t, u);
  }, n;
}
d(Dp, "text");
var __ = /* @__PURE__ */ d((e, t, r, i, n, a) => `M${e},${t}
    a${n},${a} 0,0,1 0,${-i}
    l${r},0
    a${n},${a} 0,0,1 0,${i}
    M${r},${-i}
    a${n},${a} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), k_ = /* @__PURE__ */ d((e, t, r, i, n, a) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${n},${a} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${n},${a} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), v_ = /* @__PURE__ */ d((e, t, r, i, n, a) => [`M${e + r / 2},${-i / 2}`, `a${n},${a} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD");
async function Rp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o, halfPadding: s } = await J(
    e,
    t,
    Z(t)
  ), l = t.look === "neo" ? s * 2 : s, c = a.height + l, h = c / 2, u = h / (2.5 + c / 50), f = a.width + u + l, { cssStyles: p } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = W.svg(n), y = k_(0, 0, f, c, u, h), x = v_(0, 0, f, c, u, h), b = m.path(y, H(t, {})), w = m.path(x, H(t, { fill: "none" }));
    g = n.insert(() => w, ":first-child"), g = n.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), p && g.attr("style", p);
  } else {
    const m = __(0, 0, f, c, u, h);
    g = n.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Lt(p)).attr("style", i), g.attr("class", "basic label-container"), p && g.selectAll("path").attr("style", p), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", u), g.attr("transform", `translate(${-f / 2}, ${c / 2} )`), o.attr(
    "transform",
    `translate(${-(a.width / 2) - u - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`
  ), j(t, g), t.intersect = function(m) {
    const y = q.rect(t, m), x = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let b = u * u * (1 - x * x / (h * h));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = u - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, n;
}
d(Rp, "tiltedCylinder");
async function Ip(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = a.width + t.padding, s = a.height + t.padding, l = [
    { x: -3 * s / 6, y: 0 },
    { x: o + 3 * s / 6, y: 0 },
    { x: o, y: -s },
    { x: 0, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = W.svg(n), f = H(t, {}), p = rt(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = de(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, j(t, c), t.intersect = function(u) {
    return q.polygon(t, l, u);
  }, n;
}
d(Ip, "trapezoid");
async function Pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = 60, s = 20, l = Math.max(o, a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: h } = t, u = W.svg(n), f = H(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const p = [
    { x: -l / 2 * 0.8, y: -c / 2 },
    { x: l / 2 * 0.8, y: -c / 2 },
    { x: l / 2, y: -c / 2 * 0.6 },
    { x: l / 2, y: c / 2 },
    { x: -l / 2, y: c / 2 },
    { x: -l / 2, y: -c / 2 * 0.6 }
  ], g = rt(p), m = u.path(g, f), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectChildren("path").attr("style", h), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), j(t, y), t.intersect = function(x) {
    return q.polygon(t, p, x);
  }, n;
}
d(Pp, "trapezoidalPentagon");
async function Np(e, t) {
  var b;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = gt((b = nt().flowchart) == null ? void 0 : b.htmlLabels), l = a.width + (t.padding ?? 0), c = l + a.height, h = l + a.height, u = [
    { x: 0, y: 0 },
    { x: h, y: 0 },
    { x: h / 2, y: -c }
  ], { cssStyles: f } = t, p = W.svg(n), g = H(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = rt(u), y = p.path(m, g), x = n.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
  return f && t.look !== "handDrawn" && x.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), t.width = l, t.height = c, j(t, x), o.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${c / 2 - (a.height + (t.padding ?? 0) / (s ? 2 : 1) - (a.y - (a.top ?? 0)))})`
  ), t.intersect = function(w) {
    return E.info("Triangle intersect", t, u, w), q.polygon(t, u, w);
  }, n;
}
d(Np, "triangle");
async function zp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 8, h = l + c, { cssStyles: u } = t, p = 70 - s, g = p > 0 ? p / 2 : 0, m = W.svg(n), y = H(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = [
    { x: -s / 2 - g, y: h / 2 },
    ...Se(
      -s / 2 - g,
      h / 2,
      s / 2 + g,
      h / 2,
      c,
      0.8
    ),
    { x: s / 2 + g, y: -h / 2 },
    { x: -s / 2 - g, y: -h / 2 }
  ], b = rt(x), w = m.path(b, y), S = n.insert(() => w, ":first-child");
  return S.attr("class", "basic label-container"), u && t.look !== "handDrawn" && S.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c - (a.y - (a.top ?? 0))})`
  ), j(t, S), t.intersect = function(k) {
    return q.polygon(t, x, k);
  }, n;
}
d(zp, "waveEdgedRectangle");
async function qp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await J(e, t, Z(t)), o = 100, s = 50, l = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / c;
  let u = l, f = c;
  u > f * h ? f = u / h : u = f * h, u = Math.max(u, o), f = Math.max(f, s);
  const p = Math.min(f * 0.2, f / 4), g = f + p * 2, { cssStyles: m } = t, y = W.svg(n), x = H(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const b = [
    { x: -u / 2, y: g / 2 },
    ...Se(-u / 2, g / 2, u / 2, g / 2, p, 1),
    { x: u / 2, y: -g / 2 },
    ...Se(u / 2, -g / 2, -u / 2, -g / 2, p, -1)
  ], w = rt(b), S = y.path(w, x), k = n.insert(() => S, ":first-child");
  return k.attr("class", "basic label-container"), m && t.look !== "handDrawn" && k.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), j(t, k), t.intersect = function(C) {
    return q.polygon(t, b, C);
  }, n;
}
d(qp, "waveRectangle");
async function Wp(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await J(e, t, Z(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -s / 2, u = -l / 2, { cssStyles: f } = t, p = W.svg(n), g = H(t, {}), m = [
    { x: h - c, y: u - c },
    { x: h - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u - c }
  ], y = `M${h - c},${u - c} L${h + s},${u - c} L${h + s},${u + l} L${h - c},${u + l} L${h - c},${u - c}
                M${h - c},${u} L${h + s},${u}
                M${h},${u - c} L${h},${u + l}`;
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = p.path(y, g), b = n.insert(() => x, ":first-child");
  return b.attr("transform", `translate(${c / 2}, ${c / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(a.width / 2) + c / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c / 2 - (a.y - (a.top ?? 0))})`
  ), j(t, b), t.intersect = function(w) {
    return q.polygon(t, m, w);
  }, n;
}
d(Wp, "windowPane");
async function ro(e, t) {
  var N, G, tt;
  const r = t;
  if (r.alias && (t.label = r.alias), t.look === "handDrawn") {
    const { themeVariables: K } = Et(), { background: it } = K, ot = {
      ...t,
      id: t.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${it}`]
    };
    await ro(e, ot);
  }
  const i = Et();
  t.useHtmlLabels = i.htmlLabels;
  let n = ((N = i.er) == null ? void 0 : N.diagramPadding) ?? 10, a = ((G = i.er) == null ? void 0 : G.entityPadding) ?? 6;
  const { cssStyles: o } = t, { labelStyles: s } = Y(t);
  if (r.attributes.length === 0 && t.label) {
    const K = {
      rx: 0,
      ry: 0,
      labelPaddingX: n,
      labelPaddingY: n * 1.5,
      classes: ""
    };
    ue(t.label, i) + K.labelPaddingX * 2 < i.er.minEntityWidth && (t.width = i.er.minEntityWidth);
    const it = await xi(e, t, K);
    if (!gt(i.htmlLabels)) {
      const ot = it.select("text"), ct = (tt = ot.node()) == null ? void 0 : tt.getBBox();
      ot.attr("transform", `translate(${-ct.width / 2}, 0)`);
    }
    return it;
  }
  i.htmlLabels || (n *= 1.25, a *= 1.25);
  let l = Z(t);
  l || (l = "node default");
  const c = e.insert("g").attr("class", l).attr("id", t.domId || t.id), h = await Je(c, t.label ?? "", i, 0, 0, ["name"], s);
  h.height += a;
  let u = 0;
  const f = [];
  let p = 0, g = 0, m = 0, y = 0, x = !0, b = !0;
  for (const K of r.attributes) {
    const it = await Je(
      c,
      K.type,
      i,
      0,
      u,
      ["attribute-type"],
      s
    );
    p = Math.max(p, it.width + n);
    const ot = await Je(
      c,
      K.name,
      i,
      0,
      u,
      ["attribute-name"],
      s
    );
    g = Math.max(g, ot.width + n);
    const ct = await Je(
      c,
      K.keys.join(),
      i,
      0,
      u,
      ["attribute-keys"],
      s
    );
    m = Math.max(m, ct.width + n);
    const Pt = await Je(
      c,
      K.comment,
      i,
      0,
      u,
      ["attribute-comment"],
      s
    );
    y = Math.max(y, Pt.width + n), u += Math.max(it.height, ot.height, ct.height, Pt.height) + a, f.push(u);
  }
  f.pop();
  let w = 4;
  m <= n && (x = !1, m = 0, w--), y <= n && (b = !1, y = 0, w--);
  const S = c.node().getBBox();
  if (h.width + n * 2 - (p + g + m + y) > 0) {
    const K = h.width + n * 2 - (p + g + m + y);
    p += K / w, g += K / w, m > 0 && (m += K / w), y > 0 && (y += K / w);
  }
  const k = p + g + m + y, C = W.svg(c), _ = H(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const O = Math.max(S.width + n * 2, (t == null ? void 0 : t.width) || 0, k), I = Math.max(S.height + (f[0] || u) + a, (t == null ? void 0 : t.height) || 0), F = -O / 2, M = -I / 2;
  c.selectAll("g:not(:first-child)").each((K, it, ot) => {
    const ct = et(ot[it]), Pt = ct.attr("transform");
    let Ot = 0, ge = 0;
    if (Pt) {
      const mt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(Pt);
      mt && (Ot = parseFloat(mt[1]), ge = parseFloat(mt[2]), ct.attr("class").includes("attribute-name") ? Ot += p : ct.attr("class").includes("attribute-keys") ? Ot += p + g : ct.attr("class").includes("attribute-comment") && (Ot += p + g + m));
    }
    ct.attr(
      "transform",
      `translate(${F + n / 2 + Ot}, ${ge + M + h.height + a / 2})`
    );
  }), c.select(".name").attr("transform", "translate(" + -h.width / 2 + ", " + (M + a / 2) + ")");
  const P = C.rectangle(F, M, O, I, _), D = c.insert(() => P, ":first-child").attr("style", o.join("")), { themeVariables: A } = Et(), { rowEven: L, rowOdd: T, nodeBorder: $ } = A;
  f.push(0);
  for (const [K, it] of f.entries()) {
    if (K === 0 && f.length > 1)
      continue;
    const ot = K % 2 === 0 && it !== 0, ct = C.rectangle(F, h.height + M + it, O, h.height, {
      ..._,
      fill: ot ? L : T,
      stroke: $
    });
    c.insert(() => ct, "g.label").attr("style", o.join("")).attr("class", `row-rect-${K % 2 === 0 ? "even" : "odd"}`);
  }
  let B = C.line(F, h.height + M, O + F, h.height + M, _);
  c.insert(() => B).attr("class", "divider"), B = C.line(p + F, h.height + M, p + F, I + M, _), c.insert(() => B).attr("class", "divider"), x && (B = C.line(
    p + g + F,
    h.height + M,
    p + g + F,
    I + M,
    _
  ), c.insert(() => B).attr("class", "divider")), b && (B = C.line(
    p + g + m + F,
    h.height + M,
    p + g + m + F,
    I + M,
    _
  ), c.insert(() => B).attr("class", "divider"));
  for (const K of f)
    B = C.line(
      F,
      h.height + M + K,
      O + F,
      h.height + M + K,
      _
    ), c.insert(() => B).attr("class", "divider");
  return j(t, D), t.intersect = function(K) {
    return q.rect(t, K);
  }, c;
}
d(ro, "erBox");
async function Je(e, t, r, i = 0, n = 0, a = [], o = "") {
  const s = e.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${i}, ${n})`).attr("style", o);
  t !== co(t) && (t = co(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = s.node().appendChild(
    await Be(
      s,
      t,
      {
        width: ue(t, r) + 100,
        style: o,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (gt(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const u = et(l);
    c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
d(Je, "addText");
async function Hp(e, t, r, i, n = r.class.padding ?? 12) {
  const a = i ? 0 : 3, o = e.insert("g").attr("class", Z(t)).attr("id", t.domId || t.id);
  let s = null, l = null, c = null, h = null, u = 0, f = 0, p = 0;
  if (s = o.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await Wr(s, { text: `«${b}»` }, 0), u = s.node().getBBox().height;
  }
  l = o.insert("g").attr("class", "label-group text"), await Wr(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  f = g.height, c = o.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const w = await Wr(c, b, m, [b.parseClassifier()]);
    m += w + a;
  }
  p = c.node().getBBox().height, p <= 0 && (p = n / 2), h = o.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const w = await Wr(h, b, y, [b.parseClassifier()]);
    y += w + a;
  }
  let x = o.node().getBBox();
  if (s !== null) {
    const b = s.node().getBBox();
    s.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${u})`), x = o.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + f + n * 2})`
  ), x = o.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + f + (p ? p + n * 4 : n * 2)})`
  ), x = o.node().getBBox(), { shapeSvg: o, bbox: x };
}
d(Hp, "textHelper");
async function Wr(e, t, r, i = []) {
  const n = e.insert("g").attr("class", "label").attr("style", i.join("; ")), a = Et();
  let o = "useHtmlLabels" in t ? t.useHtmlLabels : gt(a.htmlLabels) ?? !0, s = "";
  "text" in t ? s = t.text : s = t.label, !o && s.startsWith("\\") && (s = s.substring(1)), mr(s) && (o = !0);
  const l = await Be(
    n,
    us(Xe(s)),
    {
      width: ue(s, a) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o
    },
    a
  );
  let c, h = 1;
  if (o) {
    const u = l.children[0], f = et(l);
    h = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h += u.innerHTML.split("<mrow>").length - 1);
    const p = u.getElementsByTagName("img");
    if (p) {
      const g = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...p].map(
          (m) => new Promise((y) => {
            function x() {
              var b;
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const w = ((b = a.fontSize) == null ? void 0 : b.toString()) ?? window.getComputedStyle(document.body).fontSize, k = parseInt(w, 10) * 5 + "px";
                m.style.minWidth = k, m.style.maxWidth = k;
              } else
                m.style.width = "100%";
              y(m);
            }
            d(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && et(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return n.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
d(Wr, "addText");
async function jp(e, t) {
  var I, F;
  const r = nt(), i = r.class.padding ?? 12, n = i, a = t.useHtmlLabels ?? gt(r.htmlLabels) ?? !0, o = t;
  o.annotations = o.annotations ?? [], o.members = o.members ?? [], o.methods = o.methods ?? [];
  const { shapeSvg: s, bbox: l } = await Hp(e, t, r, a, n), { labelStyles: c, nodeStyles: h } = Y(t);
  t.labelStyle = c, t.cssStyles = o.styles || "";
  const u = ((I = o.styles) == null ? void 0 : I.join(";")) || h || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const f = o.members.length === 0 && o.methods.length === 0 && !((F = r.class) != null && F.hideEmptyMembersBox), p = W.svg(s), g = H(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = l.width;
  let y = l.height;
  o.members.length === 0 && o.methods.length === 0 ? y += n : o.members.length > 0 && o.methods.length === 0 && (y += n * 2);
  const x = -m / 2, b = -y / 2, w = p.rectangle(
    x - i,
    b - i - (f ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0),
    m + 2 * i,
    y + 2 * i + (f ? i * 2 : o.members.length === 0 && o.methods.length === 0 ? -i : 0),
    g
  ), S = s.insert(() => w, ":first-child");
  S.attr("class", "basic label-container");
  const k = S.node().getBBox();
  s.selectAll(".text").each((M, P, D) => {
    var N;
    const A = et(D[P]), L = A.attr("transform");
    let T = 0;
    if (L) {
      const tt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(L);
      tt && (T = parseFloat(tt[2]));
    }
    let $ = T + b + i - (f ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0);
    a || ($ -= 4);
    let B = x;
    (A.attr("class").includes("label-group") || A.attr("class").includes("annotation-group")) && (B = -((N = A.node()) == null ? void 0 : N.getBBox().width) / 2 || 0, s.selectAll("text").each(function(G, tt, K) {
      window.getComputedStyle(K[tt]).textAnchor === "middle" && (B = 0);
    })), A.attr("transform", `translate(${B}, ${$})`);
  });
  const C = s.select(".annotation-group").node().getBBox().height - (f ? i / 2 : 0) || 0, _ = s.select(".label-group").node().getBBox().height - (f ? i / 2 : 0) || 0, O = s.select(".members-group").node().getBBox().height - (f ? i / 2 : 0) || 0;
  if (o.members.length > 0 || o.methods.length > 0 || f) {
    const M = p.line(
      k.x,
      C + _ + b + i,
      k.x + k.width,
      C + _ + b + i,
      g
    );
    s.insert(() => M).attr("class", "divider").attr("style", u);
  }
  if (f || o.members.length > 0 || o.methods.length > 0) {
    const M = p.line(
      k.x,
      C + _ + O + b + n * 2 + i,
      k.x + k.width,
      C + _ + O + b + i + n * 2,
      g
    );
    s.insert(() => M).attr("class", "divider").attr("style", u);
  }
  if (o.look !== "handDrawn" && s.selectAll("path").attr("style", u), S.select(":nth-child(2)").attr("style", u), s.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", u), !a) {
    const M = RegExp(/color\s*:\s*([^;]*)/), P = M.exec(u);
    if (P) {
      const D = P[0].replace("color", "fill");
      s.selectAll("tspan").attr("style", D);
    } else if (c) {
      const D = M.exec(c);
      if (D) {
        const A = D[0].replace("color", "fill");
        s.selectAll("tspan").attr("style", A);
      }
    }
  }
  return j(t, S), t.intersect = function(M) {
    return q.rect(t, M);
  }, s;
}
d(jp, "classBox");
async function Yp(e, t) {
  var C, _;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const n = t, a = t, o = 20, s = 20, l = "verifyMethod" in t, c = Z(t), h = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let u;
  l ? u = await Vt(
    h,
    `&lt;&lt;${n.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : u = await Vt(h, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let f = u;
  const p = await Vt(
    h,
    n.name,
    f,
    t.labelStyle + "; font-weight: bold;"
  );
  if (f += p + s, l) {
    const O = await Vt(
      h,
      `${n.requirementId ? `Id: ${n.requirementId}` : ""}`,
      f,
      t.labelStyle
    );
    f += O;
    const I = await Vt(
      h,
      `${n.text ? `Text: ${n.text}` : ""}`,
      f,
      t.labelStyle
    );
    f += I;
    const F = await Vt(
      h,
      `${n.risk ? `Risk: ${n.risk}` : ""}`,
      f,
      t.labelStyle
    );
    f += F, await Vt(
      h,
      `${n.verifyMethod ? `Verification: ${n.verifyMethod}` : ""}`,
      f,
      t.labelStyle
    );
  } else {
    const O = await Vt(
      h,
      `${a.type ? `Type: ${a.type}` : ""}`,
      f,
      t.labelStyle
    );
    f += O, await Vt(
      h,
      `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`,
      f,
      t.labelStyle
    );
  }
  const g = (((C = h.node()) == null ? void 0 : C.getBBox().width) ?? 200) + o, m = (((_ = h.node()) == null ? void 0 : _.getBBox().height) ?? 200) + o, y = -g / 2, x = -m / 2, b = W.svg(h), w = H(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const S = b.rectangle(y, x, g, m, w), k = h.insert(() => S, ":first-child");
  if (k.attr("class", "basic label-container").attr("style", i), h.selectAll(".label").each((O, I, F) => {
    const M = et(F[I]), P = M.attr("transform");
    let D = 0, A = 0;
    if (P) {
      const B = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(P);
      B && (D = parseFloat(B[1]), A = parseFloat(B[2]));
    }
    const L = A - m / 2;
    let T = y + o / 2;
    (I === 0 || I === 1) && (T = D), M.attr("transform", `translate(${T}, ${L + o})`);
  }), f > u + p + s) {
    const O = b.line(
      y,
      x + u + p + s,
      y + g,
      x + u + p + s,
      w
    );
    h.insert(() => O).attr("style", i);
  }
  return j(t, k), t.intersect = function(O) {
    return q.rect(t, O);
  }, h;
}
d(Yp, "requirementBox");
async function Vt(e, t, r, i = "") {
  if (t === "")
    return 0;
  const n = e.insert("g").attr("class", "label").attr("style", i), a = nt(), o = a.htmlLabels ?? !0, s = await Be(
    n,
    us(Xe(t)),
    {
      width: ue(t, a) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o,
      style: i
    },
    a
  );
  let l;
  if (o) {
    const c = s.children[0], h = et(s);
    l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  } else {
    const c = s.children[0];
    for (const h of c.children)
      h.textContent = h.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), i && h.setAttribute("style", i);
    l = s.getBBox(), l.height += 6;
  }
  return n.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
d(Vt, "addText");
var S_ = /* @__PURE__ */ d((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Gp(e, t, { config: r }) {
  var P, D;
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i || "";
  const a = 10, o = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: s,
    bbox: l,
    label: c
  } = await J(e, t, Z(t)), h = t.padding || 10;
  let u = "", f;
  "ticket" in t && t.ticket && ((P = r == null ? void 0 : r.kanban) != null && P.ticketBaseUrl) && (u = (D = r == null ? void 0 : r.kanban) == null ? void 0 : D.ticketBaseUrl.replace("#TICKET#", t.ticket), f = s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const p = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let g, m;
  f ? { label: g, bbox: m } = await ca(
    f,
    "ticket" in t && t.ticket || "",
    p
  ) : { label: g, bbox: m } = await ca(
    s,
    "ticket" in t && t.ticket || "",
    p
  );
  const { label: y, bbox: x } = await ca(
    s,
    "assigned" in t && t.assigned || "",
    p
  );
  t.width = o;
  const b = 10, w = (t == null ? void 0 : t.width) || 0, S = Math.max(m.height, x.height) / 2, k = Math.max(l.height + b * 2, (t == null ? void 0 : t.height) || 0) + S, C = -w / 2, _ = -k / 2;
  c.attr(
    "transform",
    "translate(" + (h - w / 2) + ", " + (-S - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (h - w / 2) + ", " + (-S + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + w / 2 - x.width - 2 * a) + ", " + (-S + l.height / 2) + ")"
  );
  let O;
  const { rx: I, ry: F } = t, { cssStyles: M } = t;
  if (t.look === "handDrawn") {
    const A = W.svg(s), L = H(t, {}), T = I || F ? A.path(pe(C, _, w, k, I || 0), L) : A.rectangle(C, _, w, k, L);
    O = s.insert(() => T, ":first-child"), O.attr("class", "basic label-container").attr("style", M || null);
  } else {
    O = s.insert("rect", ":first-child"), O.attr("class", "basic label-container __APA__").attr("style", n).attr("rx", I ?? 5).attr("ry", F ?? 5).attr("x", C).attr("y", _).attr("width", w).attr("height", k);
    const A = "priority" in t && t.priority;
    if (A) {
      const L = s.append("line"), T = C + 2, $ = _ + Math.floor((I ?? 0) / 2), B = _ + k - Math.floor((I ?? 0) / 2);
      L.attr("x1", T).attr("y1", $).attr("x2", T).attr("y2", B).attr("stroke-width", "4").attr("stroke", S_(A));
    }
  }
  return j(t, O), t.height = k, t.intersect = function(A) {
    return q.rect(t, A);
  }, s;
}
d(Gp, "kanbanItem");
var T_ = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: Bp
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: vp
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: Lp
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: Fp
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Kf
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: jf
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: wp
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: np
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: dp
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: pp
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: Ip
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: up
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Jf
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: Dp
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: Wf
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: Sp
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: $p
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: Ap
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: rp
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: ap
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: Uf
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Xf
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Vf
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: gp
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: zp
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: ip
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: Rp
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: mp
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Zf
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: Qf
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: Np
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Wp
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: tp
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: Pp
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: ep
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: Tp
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: bp
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: xp
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: qf
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Gf
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: Op
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: Ep
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: qp
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: _p
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: yp
  }
], B_ = /* @__PURE__ */ d(() => {
  const t = [
    ...Object.entries({
      // States
      state: Mp,
      choice: Hf,
      note: Cp,
      // Rectangles
      rectWithTitle: kp,
      labelRect: fp,
      // Icons
      iconSquare: cp,
      iconCircle: op,
      icon: sp,
      iconRounded: lp,
      imageSquare: hp,
      anchor: zf,
      // Kanban diagram
      kanbanItem: Gp,
      // class diagram
      classBox: jp,
      // er diagram
      erBox: ro,
      // Requirement diagram
      requirementBox: Yp
    }),
    ...T_.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((n) => [n, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), Up = B_();
function L_(e) {
  return e in Up;
}
d(L_, "isValidShape");
var Un = /* @__PURE__ */ new Map();
async function Xp(e, t, r) {
  let i, n;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const a = t.shape ? Up[t.shape] : void 0;
  if (!a)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let o;
    r.config.securityLevel === "sandbox" ? o = "_top" : t.linkTarget && (o = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", o ?? null), n = await a(i, t, r);
  } else
    n = await a(e, t, r), i = n;
  return t.tooltip && n.attr("title", t.tooltip), Un.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
d(Xp, "insertNode");
var AT = /* @__PURE__ */ d((e, t) => {
  Un.set(t.id, e);
}, "setNodeElem"), $T = /* @__PURE__ */ d(() => {
  Un.clear();
}, "clear"), FT = /* @__PURE__ */ d((e) => {
  const t = Un.get(e.id);
  E.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), M_ = /* @__PURE__ */ d((e, t, r, i, n, a) => {
  t.arrowTypeStart && gl(e, "start", t.arrowTypeStart, r, i, n, a), t.arrowTypeEnd && gl(e, "end", t.arrowTypeEnd, r, i, n, a);
}, "addEdgeMarkers"), A_ = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, gl = /* @__PURE__ */ d((e, t, r, i, n, a, o) => {
  var u;
  const s = A_[r];
  if (!s) {
    E.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const l = s.type, h = `${n}_${a}-${l}${t === "start" ? "Start" : "End"}`;
  if (o && o.trim() !== "") {
    const f = o.replace(/[^\dA-Za-z]/g, "_"), p = `${h}_${f}`;
    if (!document.getElementById(p)) {
      const g = document.getElementById(h);
      if (g) {
        const m = g.cloneNode(!0);
        m.id = p, m.querySelectorAll("path, circle, line").forEach((x) => {
          x.setAttribute("stroke", o), s.fill && x.setAttribute("fill", o);
        }), (u = g.parentNode) == null || u.appendChild(m);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${p})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${h})`);
}, "addEdgeMarker"), _n = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), ET = /* @__PURE__ */ d(() => {
  _n.clear(), bt.clear();
}, "clear"), Rr = /* @__PURE__ */ d((e) => e ? e.reduce((r, i) => r + ";" + i, "") : "", "getLabelStyles"), $_ = /* @__PURE__ */ d(async (e, t) => {
  let r = gt(nt().flowchart.htmlLabels);
  const i = await Be(e, t.label, {
    style: Rr(t.labelStyle),
    useHtmlLabels: r,
    addSvgBackground: !0,
    isNode: !1
  });
  E.info("abc82", t, t.labelType);
  const n = e.insert("g").attr("class", "edgeLabel"), a = n.insert("g").attr("class", "label");
  a.node().appendChild(i);
  let o = i.getBBox();
  if (r) {
    const l = i.children[0], c = et(i);
    o = l.getBoundingClientRect(), c.attr("width", o.width), c.attr("height", o.height);
  }
  a.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), _n.set(t.id, n), t.width = o.width, t.height = o.height;
  let s;
  if (t.startLabelLeft) {
    const l = await Re(
      t.startLabelLeft,
      Rr(t.labelStyle)
    ), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), bt.get(t.id) || bt.set(t.id, {}), bt.get(t.id).startLeft = c, Hr(s, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const l = await Re(
      t.startLabelRight,
      Rr(t.labelStyle)
    ), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = c.node().appendChild(l), h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), bt.get(t.id) || bt.set(t.id, {}), bt.get(t.id).startRight = c, Hr(s, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const l = await Re(t.endLabelLeft, Rr(t.labelStyle)), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(l), bt.get(t.id) || bt.set(t.id, {}), bt.get(t.id).endLeft = c, Hr(s, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const l = await Re(t.endLabelRight, Rr(t.labelStyle)), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(l), bt.get(t.id) || bt.set(t.id, {}), bt.get(t.id).endRight = c, Hr(s, t.endLabelRight);
  }
  return i;
}, "insertEdgeLabel");
function Hr(e, t) {
  nt().flowchart.htmlLabels && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
d(Hr, "setTerminalWidth");
var F_ = /* @__PURE__ */ d((e, t) => {
  E.debug("Moving label abc88 ", e.id, e.label, _n.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = nt(), { subGraphTitleTotalMargin: n } = bs(i);
  if (e.label) {
    const a = _n.get(e.id);
    let o = e.x, s = e.y;
    if (r) {
      const l = Kt.calcLabelPosition(r);
      E.debug(
        "Moving label " + e.label + " from (",
        o,
        ",",
        s,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (o = l.x, s = l.y);
    }
    a.attr("transform", `translate(${o}, ${s + n / 2})`);
  }
  if (e.startLabelLeft) {
    const a = bt.get(e.id).startLeft;
    let o = e.x, s = e.y;
    if (r) {
      const l = Kt.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
  if (e.startLabelRight) {
    const a = bt.get(e.id).startRight;
    let o = e.x, s = e.y;
    if (r) {
      const l = Kt.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
  if (e.endLabelLeft) {
    const a = bt.get(e.id).endLeft;
    let o = e.x, s = e.y;
    if (r) {
      const l = Kt.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
  if (e.endLabelRight) {
    const a = bt.get(e.id).endRight;
    let o = e.x, s = e.y;
    if (r) {
      const l = Kt.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
}, "positionEdgeLabel"), E_ = /* @__PURE__ */ d((e, t) => {
  const r = e.x, i = e.y, n = Math.abs(t.x - r), a = Math.abs(t.y - i), o = e.width / 2, s = e.height / 2;
  return n >= o || a >= s;
}, "outsideNode"), O_ = /* @__PURE__ */ d((e, t, r) => {
  E.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, n = e.y, a = Math.abs(i - r.x), o = e.width / 2;
  let s = r.x < t.x ? o - a : o + a;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(n - t.y) * o > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - n : n - l - t.y;
    s = h * u / c;
    const f = {
      x: r.x < t.x ? r.x + s : r.x - h + s,
      y: r.y < t.y ? r.y + c - u : r.y - c + u
    };
    return s === 0 && (f.x = t.x, f.y = t.y), h === 0 && (f.x = t.x), c === 0 && (f.y = t.y), E.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h}, r ${s}`, f), f;
  } else {
    r.x < t.x ? s = t.x - o - i : s = i - o - t.x;
    let u = c * s / h, f = r.x < t.x ? r.x + h - s : r.x - h + s, p = r.y < t.y ? r.y + u : r.y - u;
    return E.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h}, r ${s}`, { _x: f, _y: p }), s === 0 && (f = t.x, p = t.y), h === 0 && (f = t.x), c === 0 && (p = t.y), { x: f, y: p };
  }
}, "intersection"), ml = /* @__PURE__ */ d((e, t) => {
  E.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], n = !1;
  return e.forEach((a) => {
    if (E.info("abc88 checking point", a, t), !E_(t, a) && !n) {
      const o = O_(t, i, a);
      E.debug("abc88 inside", a, i, o), E.debug("abc88 intersection", o, t);
      let s = !1;
      r.forEach((l) => {
        s = s || l.x === o.x && l.y === o.y;
      }), r.some((l) => l.x === o.x && l.y === o.y) ? E.warn("abc88 no intersect", o, r) : r.push(o), n = !0;
    } else
      E.warn("abc88 outside", a, i), i = a, n || r.push(a);
  }), E.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Vp(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const n = e[i - 1], a = e[i], o = e[i + 1];
    (n.x === a.x && a.y === o.y && Math.abs(a.x - o.x) > 5 && Math.abs(a.y - n.y) > 5 || n.y === a.y && a.x === o.x && Math.abs(a.x - n.x) > 5 && Math.abs(a.y - o.y) > 5) && (t.push(a), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
d(Vp, "extractCornerPoints");
var yl = /* @__PURE__ */ d(function(e, t, r) {
  const i = t.x - e.x, n = t.y - e.y, a = Math.sqrt(i * i + n * n), o = r / a;
  return { x: t.x - o * i, y: t.y - o * n };
}, "findAdjacentPoint"), D_ = /* @__PURE__ */ d(function(e) {
  const { cornerPointPositions: t } = Vp(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const n = e[i - 1], a = e[i + 1], o = e[i], s = yl(n, o, 5), l = yl(a, o, 5), c = l.x - s.x, h = l.y - s.y;
      r.push(s);
      const u = Math.sqrt(2) * 2;
      let f = { x: o.x, y: o.y };
      if (Math.abs(a.x - n.x) > 10 && Math.abs(a.y - n.y) >= 10) {
        E.debug(
          "Corner point fixing",
          Math.abs(a.x - n.x),
          Math.abs(a.y - n.y)
        );
        const p = 5;
        o.x === s.x ? f = {
          x: c < 0 ? s.x - p + u : s.x + p - u,
          y: h < 0 ? s.y - u : s.y + u
        } : f = {
          x: c < 0 ? s.x - u : s.x + u,
          y: h < 0 ? s.y - p + u : s.y + p - u
        };
      } else
        E.debug(
          "Corner point skipping fixing",
          Math.abs(a.x - n.x),
          Math.abs(a.y - n.y)
        );
      r.push(f, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), R_ = /* @__PURE__ */ d(function(e, t, r, i, n, a, o) {
  var I;
  const { handDrawnSeed: s } = nt();
  let l = t.points, c = !1;
  const h = n;
  var u = a;
  const f = [];
  for (const F in t.cssCompiledStyles)
    $f(F) || f.push(t.cssCompiledStyles[F]);
  u.intersect && h.intersect && (l = l.slice(1, t.points.length - 1), l.unshift(h.intersect(l[0])), E.debug(
    "Last point APA12",
    t.start,
    "-->",
    t.end,
    l[l.length - 1],
    u,
    u.intersect(l[l.length - 1])
  ), l.push(u.intersect(l[l.length - 1]))), t.toCluster && (E.info("to cluster abc88", r.get(t.toCluster)), l = ml(t.points, r.get(t.toCluster).node), c = !0), t.fromCluster && (E.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(l, null, 2)
  ), l = ml(l.reverse(), r.get(t.fromCluster).node).reverse(), c = !0);
  let p = l.filter((F) => !Number.isNaN(F.y));
  p = D_(p);
  let g = Ri;
  switch (g = sn, t.curve) {
    case "linear":
      g = sn;
      break;
    case "basis":
      g = Ri;
      break;
    case "cardinal":
      g = yu;
      break;
    case "bumpX":
      g = fu;
      break;
    case "bumpY":
      g = pu;
      break;
    case "catmullRom":
      g = bu;
      break;
    case "monotoneX":
      g = Su;
      break;
    case "monotoneY":
      g = Tu;
      break;
    case "natural":
      g = Lu;
      break;
    case "step":
      g = Mu;
      break;
    case "stepAfter":
      g = $u;
      break;
    case "stepBefore":
      g = Au;
      break;
    default:
      g = Ri;
  }
  const { x: m, y } = nm(t), x = Jb().x(m).y(y).curve(g);
  let b;
  switch (t.thickness) {
    case "normal":
      b = "edge-thickness-normal";
      break;
    case "thick":
      b = "edge-thickness-thick";
      break;
    case "invisible":
      b = "edge-thickness-invisible";
      break;
    default:
      b = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      b += " edge-pattern-solid";
      break;
    case "dotted":
      b += " edge-pattern-dotted";
      break;
    case "dashed":
      b += " edge-pattern-dashed";
      break;
    default:
      b += " edge-pattern-solid";
  }
  let w, S = x(p);
  const k = Array.isArray(t.style) ? t.style : [t.style];
  let C = k.find((F) => F == null ? void 0 : F.startsWith("stroke:"));
  if (t.look === "handDrawn") {
    const F = W.svg(e);
    Object.assign([], p);
    const M = F.path(S, {
      roughness: 0.3,
      seed: s
    });
    b += " transition", w = et(M).select("path").attr("id", t.id).attr("class", " " + b + (t.classes ? " " + t.classes : "")).attr("style", k ? k.reduce((D, A) => D + ";" + A, "") : "");
    let P = w.attr("d");
    w.attr("d", P), e.node().appendChild(w.node());
  } else {
    const F = f.join(";"), M = k ? k.reduce((A, L) => A + L + ";", "") : "";
    let P = "";
    t.animate && (P = " edge-animation-fast"), t.animation && (P = " edge-animation-" + t.animation);
    const D = F ? F + ";" + M + ";" : M;
    w = e.append("path").attr("d", S).attr("id", t.id).attr(
      "class",
      " " + b + (t.classes ? " " + t.classes : "") + (P ?? "")
    ).attr("style", D), C = (I = D.match(/stroke:([^;]+)/)) == null ? void 0 : I[1];
  }
  let _ = "";
  (nt().flowchart.arrowMarkerAbsolute || nt().state.arrowMarkerAbsolute) && (_ = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, _ = _.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), E.info("arrowTypeStart", t.arrowTypeStart), E.info("arrowTypeEnd", t.arrowTypeEnd), M_(w, t, _, o, i, C);
  let O = {};
  return c && (O.updatedPath = l), O.originalPath = t.points, O;
}, "insertEdge"), I_ = /* @__PURE__ */ d((e, t, r, i) => {
  t.forEach((n) => {
    J_[n](e, r, i);
  });
}, "insertMarkers"), P_ = /* @__PURE__ */ d((e, t, r) => {
  E.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), N_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), z_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), q_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), W_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), H_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), j_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), Y_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), G_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), U_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), X_ = /* @__PURE__ */ d((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), n.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), V_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), Z_ = /* @__PURE__ */ d((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), n.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), K_ = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), Q_ = /* @__PURE__ */ d((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), J_ = {
  extension: P_,
  composition: N_,
  aggregation: z_,
  dependency: q_,
  lollipop: W_,
  point: H_,
  circle: j_,
  cross: Y_,
  barb: G_,
  only_one: U_,
  zero_or_one: X_,
  one_or_more: V_,
  zero_or_more: Z_,
  requirement_arrow: K_,
  requirement_contains: Q_
}, tk = I_, ek = {
  common: kr,
  getConfig: Et,
  insertCluster: c_,
  insertEdge: R_,
  insertEdgeLabel: $_,
  insertMarkers: tk,
  insertNode: Xp,
  interpolateToCurve: Is,
  labelHelper: J,
  log: E,
  positionEdgeLabel: F_
}, oi = {}, Zp = /* @__PURE__ */ d((e) => {
  for (const t of e)
    oi[t.name] = t;
}, "registerLayoutLoaders"), rk = /* @__PURE__ */ d(() => {
  Zp([
    {
      name: "dagre",
      loader: /* @__PURE__ */ d(async () => await import("./dagre-OKDRZEBW-7tjnWrwm.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
rk();
var OT = /* @__PURE__ */ d(async (e, t) => {
  if (!(e.layoutAlgorithm in oi))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  const r = oi[e.layoutAlgorithm];
  return (await r.loader()).render(e, t, ek, {
    algorithm: r.algorithm
  });
}, "render"), DT = /* @__PURE__ */ d((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in oi)
    return e;
  if (t in oi)
    return E.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), xl = {
  name: "mermaid",
  version: "11.6.0",
  description: "Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",
  type: "module",
  module: "./dist/mermaid.core.mjs",
  types: "./dist/mermaid.d.ts",
  exports: {
    ".": {
      types: "./dist/mermaid.d.ts",
      import: "./dist/mermaid.core.mjs",
      default: "./dist/mermaid.core.mjs"
    },
    "./*": "./*"
  },
  keywords: [
    "diagram",
    "markdown",
    "flowchart",
    "sequence diagram",
    "gantt",
    "class diagram",
    "git graph",
    "mindmap",
    "packet diagram",
    "c4 diagram",
    "er diagram",
    "pie chart",
    "pie diagram",
    "quadrant chart",
    "requirement diagram",
    "graph"
  ],
  scripts: {
    clean: "rimraf dist",
    dev: "pnpm -w dev",
    "docs:code": "typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup",
    "docs:build": "rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts",
    "docs:verify": "pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify",
    "docs:pre:vitepress": "pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts",
    "docs:build:vitepress": "pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing",
    "docs:dev": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:dev:docker": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:serve": "pnpm docs:build:vitepress && vitepress serve src/vitepress",
    "docs:spellcheck": 'cspell "src/docs/**/*.md"',
    "docs:release-version": "tsx scripts/update-release-version.mts",
    "docs:verify-version": "tsx scripts/update-release-version.mts --verify",
    "types:build-config": "tsx scripts/create-types-from-json-schema.mts",
    "types:verify-config": "tsx scripts/create-types-from-json-schema.mts --verify",
    checkCircle: "npx madge --circular ./src",
    prepublishOnly: "pnpm docs:verify-version"
  },
  repository: {
    type: "git",
    url: "https://github.com/mermaid-js/mermaid"
  },
  author: "Knut Sveidqvist",
  license: "MIT",
  standard: {
    ignore: [
      "**/parser/*.js",
      "dist/**/*.js",
      "cypress/**/*.js"
    ],
    globals: [
      "page"
    ]
  },
  dependencies: {
    "@braintree/sanitize-url": "^7.0.4",
    "@iconify/utils": "^2.1.33",
    "@mermaid-js/parser": "workspace:^",
    "@types/d3": "^7.4.3",
    cytoscape: "^3.29.3",
    "cytoscape-cose-bilkent": "^4.1.0",
    "cytoscape-fcose": "^2.2.0",
    d3: "^7.9.0",
    "d3-sankey": "^0.12.3",
    "dagre-d3-es": "7.0.11",
    dayjs: "^1.11.13",
    dompurify: "^3.2.4",
    katex: "^0.16.9",
    khroma: "^2.1.0",
    "lodash-es": "^4.17.21",
    marked: "^15.0.7",
    roughjs: "^4.6.6",
    stylis: "^4.3.6",
    "ts-dedent": "^2.2.0",
    uuid: "^11.1.0"
  },
  devDependencies: {
    "@adobe/jsonschema2md": "^8.0.2",
    "@iconify/types": "^2.0.0",
    "@types/cytoscape": "^3.21.9",
    "@types/cytoscape-fcose": "^2.2.4",
    "@types/d3-sankey": "^0.12.4",
    "@types/d3-scale": "^4.0.9",
    "@types/d3-scale-chromatic": "^3.1.0",
    "@types/d3-selection": "^3.0.11",
    "@types/d3-shape": "^3.1.7",
    "@types/jsdom": "^21.1.7",
    "@types/katex": "^0.16.7",
    "@types/lodash-es": "^4.17.12",
    "@types/micromatch": "^4.0.9",
    "@types/stylis": "^4.2.7",
    "@types/uuid": "^10.0.0",
    ajv: "^8.17.1",
    chokidar: "^4.0.3",
    concurrently: "^9.1.2",
    "csstree-validator": "^4.0.1",
    globby: "^14.0.2",
    jison: "^0.4.18",
    "js-base64": "^3.7.7",
    jsdom: "^26.0.0",
    "json-schema-to-typescript": "^15.0.4",
    micromatch: "^4.0.8",
    "path-browserify": "^1.0.1",
    prettier: "^3.5.2",
    remark: "^15.0.1",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    rimraf: "^6.0.1",
    "start-server-and-test": "^2.0.10",
    "type-fest": "^4.35.0",
    typedoc: "^0.27.8",
    "typedoc-plugin-markdown": "^4.4.2",
    typescript: "~5.7.3",
    "unist-util-flatmap": "^1.0.0",
    "unist-util-visit": "^5.0.0",
    vitepress: "^1.0.2",
    "vitepress-plugin-search": "1.0.4-alpha.22"
  },
  files: [
    "dist/",
    "README.md"
  ],
  publishConfig: {
    access: "public"
  }
}, ik = /* @__PURE__ */ d((e) => {
  var n;
  const { securityLevel: t } = nt();
  let r = et("body");
  if (t === "sandbox") {
    const o = ((n = et(`#i${e}`).node()) == null ? void 0 : n.contentDocument) ?? document;
    r = et(o.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement"), Kp = "comm", Qp = "rule", Jp = "decl", nk = "@import", ak = "@namespace", sk = "@keyframes", ok = "@layer", td = Math.abs, io = String.fromCharCode;
function ed(e) {
  return e.trim();
}
function Ni(e, t, r) {
  return e.replace(t, r);
}
function lk(e, t, r) {
  return e.indexOf(t, r);
}
function ir(e, t) {
  return e.charCodeAt(t) | 0;
}
function wr(e, t, r) {
  return e.slice(t, r);
}
function Zt(e) {
  return e.length;
}
function ck(e) {
  return e.length;
}
function Li(e, t) {
  return t.push(e), e;
}
var Xn = 1, _r = 1, rd = 0, Ht = 0, pt = 0, Lr = "";
function no(e, t, r, i, n, a, o, s) {
  return { value: e, root: t, parent: r, type: i, props: n, children: a, line: Xn, column: _r, length: o, return: "", siblings: s };
}
function hk() {
  return pt;
}
function uk() {
  return pt = Ht > 0 ? ir(Lr, --Ht) : 0, _r--, pt === 10 && (_r = 1, Xn--), pt;
}
function Gt() {
  return pt = Ht < rd ? ir(Lr, Ht++) : 0, _r++, pt === 10 && (_r = 1, Xn++), pt;
}
function Ce() {
  return ir(Lr, Ht);
}
function zi() {
  return Ht;
}
function Vn(e, t) {
  return wr(Lr, e, t);
}
function li(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fk(e) {
  return Xn = _r = 1, rd = Zt(Lr = e), Ht = 0, [];
}
function pk(e) {
  return Lr = "", e;
}
function ha(e) {
  return ed(Vn(Ht - 1, Za(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dk(e) {
  for (; (pt = Ce()) && pt < 33; )
    Gt();
  return li(e) > 2 || li(pt) > 3 ? "" : " ";
}
function gk(e, t) {
  for (; --t && Gt() && !(pt < 48 || pt > 102 || pt > 57 && pt < 65 || pt > 70 && pt < 97); )
    ;
  return Vn(e, zi() + (t < 6 && Ce() == 32 && Gt() == 32));
}
function Za(e) {
  for (; Gt(); )
    switch (pt) {
      case e:
        return Ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Za(pt);
        break;
      case 40:
        e === 41 && Za(e);
        break;
      case 92:
        Gt();
        break;
    }
  return Ht;
}
function mk(e, t) {
  for (; Gt() && e + pt !== 57; )
    if (e + pt === 84 && Ce() === 47)
      break;
  return "/*" + Vn(t, Ht - 1) + "*" + io(e === 47 ? e : Gt());
}
function yk(e) {
  for (; !li(Ce()); )
    Gt();
  return Vn(e, Ht);
}
function xk(e) {
  return pk(qi("", null, null, null, [""], e = fk(e), 0, [0], e));
}
function qi(e, t, r, i, n, a, o, s, l) {
  for (var c = 0, h = 0, u = o, f = 0, p = 0, g = 0, m = 1, y = 1, x = 1, b = 0, w = "", S = n, k = a, C = i, _ = w; y; )
    switch (g = b, b = Gt()) {
      case 40:
        if (g != 108 && ir(_, u - 1) == 58) {
          lk(_ += Ni(ha(b), "&", "&\f"), "&\f", td(c ? s[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += ha(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += dk(g);
        break;
      case 92:
        _ += gk(zi() - 1, 7);
        continue;
      case 47:
        switch (Ce()) {
          case 42:
          case 47:
            Li(bk(mk(Gt(), zi()), t, r, l), l), (li(g || 1) == 5 || li(Ce() || 1) == 5) && Zt(_) && wr(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * m:
        s[c++] = Zt(_) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            y = 0;
          case 59 + h:
            x == -1 && (_ = Ni(_, /\f/g, "")), p > 0 && (Zt(_) - u || m === 0 && g === 47) && Li(p > 32 ? Cl(_ + ";", i, r, u - 1, l) : Cl(Ni(_, " ", "") + ";", i, r, u - 2, l), l);
            break;
          case 59:
            _ += ";";
          default:
            if (Li(C = bl(_, t, r, c, h, n, s, w, S = [], k = [], u, a), a), b === 123)
              if (h === 0)
                qi(_, t, C, C, S, a, u, s, k);
              else {
                switch (f) {
                  case 99:
                    if (ir(_, 3) === 110) break;
                  case 108:
                    if (ir(_, 2) === 97) break;
                  default:
                    h = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                h ? qi(e, C, C, i && Li(bl(e, C, C, 0, 0, n, s, w, n, S = [], u, k), k), n, k, u, s, i ? S : k) : qi(_, C, C, C, [""], k, 0, s, k);
              }
        }
        c = h = p = 0, m = x = 1, w = _ = "", u = o;
        break;
      case 58:
        u = 1 + Zt(_), p = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && uk() == 125)
            continue;
        }
        switch (_ += io(b), b * m) {
          case 38:
            x = h > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[c++] = (Zt(_) - 1) * x, x = 1;
            break;
          case 64:
            Ce() === 45 && (_ += ha(Gt())), f = Ce(), h = u = Zt(w = _ += yk(zi())), b++;
            break;
          case 45:
            g === 45 && Zt(_) == 2 && (m = 0);
        }
    }
  return a;
}
function bl(e, t, r, i, n, a, o, s, l, c, h, u) {
  for (var f = n - 1, p = n === 0 ? a : [""], g = ck(p), m = 0, y = 0, x = 0; m < i; ++m)
    for (var b = 0, w = wr(e, f + 1, f = td(y = o[m])), S = e; b < g; ++b)
      (S = ed(y > 0 ? p[b] + " " + w : Ni(w, /&\f/g, p[b]))) && (l[x++] = S);
  return no(e, t, r, n === 0 ? Qp : s, l, c, h, u);
}
function bk(e, t, r, i) {
  return no(e, t, r, Kp, io(hk()), wr(e, 2, -2), 0, i);
}
function Cl(e, t, r, i, n) {
  return no(e, t, r, Jp, wr(e, 0, i), wr(e, i + 1, -1), i, n);
}
function Ka(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Ck(e, t, r, i) {
  switch (e.type) {
    case ok:
      if (e.children.length) break;
    case nk:
    case ak:
    case Jp:
      return e.return = e.return || e.value;
    case Kp:
      return "";
    case sk:
      return e.return = e.value + "{" + Ka(e.children, i) + "}";
    case Qp:
      if (!Zt(e.value = e.props.join(","))) return "";
  }
  return Zt(r = Ka(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
var wk = Du(Object.keys, Object), _k = Object.prototype, kk = _k.hasOwnProperty;
function vk(e) {
  if (!Nn(e))
    return wk(e);
  var t = [];
  for (var r in Object(e))
    kk.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Qa = Ue(re, "DataView"), Ja = Ue(re, "Promise"), ts = Ue(re, "Set"), es = Ue(re, "WeakMap"), wl = "[object Map]", Sk = "[object Object]", _l = "[object Promise]", kl = "[object Set]", vl = "[object WeakMap]", Sl = "[object DataView]", Tk = Ge(Qa), Bk = Ge(si), Lk = Ge(Ja), Mk = Ge(ts), Ak = Ge(es), $e = vr;
(Qa && $e(new Qa(new ArrayBuffer(1))) != Sl || si && $e(new si()) != wl || Ja && $e(Ja.resolve()) != _l || ts && $e(new ts()) != kl || es && $e(new es()) != vl) && ($e = function(e) {
  var t = vr(e), r = t == Sk ? e.constructor : void 0, i = r ? Ge(r) : "";
  if (i)
    switch (i) {
      case Tk:
        return Sl;
      case Bk:
        return wl;
      case Lk:
        return _l;
      case Mk:
        return kl;
      case Ak:
        return vl;
    }
  return t;
});
var $k = "[object Map]", Fk = "[object Set]", Ek = Object.prototype, Ok = Ek.hasOwnProperty;
function Tl(e) {
  if (e == null)
    return !0;
  if (zn(e) && (pn(e) || typeof e == "string" || typeof e.splice == "function" || Ds(e) || Rs(e) || fn(e)))
    return !e.length;
  var t = $e(e);
  if (t == $k || t == Fk)
    return !e.size;
  if (Nn(e))
    return !vk(e).length;
  for (var r in e)
    if (Ok.call(e, r))
      return !1;
  return !0;
}
var id = "c4", Dk = /* @__PURE__ */ d((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), Rk = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./c4Diagram-VJAJSXHY-nowPICdC.js");
  return { id, diagram: e };
}, "loader"), Ik = {
  id,
  detector: Dk,
  loader: Rk
}, Pk = Ik, nd = "flowchart", Nk = /* @__PURE__ */ d((e, t) => {
  var r, i;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(e);
}, "detector"), zk = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./flowDiagram-4HSFHLVR-BEKKIWnV.js");
  return { id: nd, diagram: e };
}, "loader"), qk = {
  id: nd,
  detector: Nk,
  loader: zk
}, Wk = qk, ad = "flowchart-v2", Hk = /* @__PURE__ */ d((e, t) => {
  var r, i, n;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" ? !1 : (((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && ((n = t == null ? void 0 : t.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e));
}, "detector"), jk = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./flowDiagram-4HSFHLVR-BEKKIWnV.js");
  return { id: ad, diagram: e };
}, "loader"), Yk = {
  id: ad,
  detector: Hk,
  loader: jk
}, Gk = Yk, sd = "er", Uk = /* @__PURE__ */ d((e) => /^\s*erDiagram/.test(e), "detector"), Xk = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./erDiagram-Q7BY3M3F-B_BAUKms.js");
  return { id: sd, diagram: e };
}, "loader"), Vk = {
  id: sd,
  detector: Uk,
  loader: Xk
}, Zk = Vk, od = "gitGraph", Kk = /* @__PURE__ */ d((e) => /^\s*gitGraph/.test(e), "detector"), Qk = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-7IBYFJ6S-BXKIFSAy.js");
  return { id: od, diagram: e };
}, "loader"), Jk = {
  id: od,
  detector: Kk,
  loader: Qk
}, tv = Jk, ld = "gantt", ev = /* @__PURE__ */ d((e) => /^\s*gantt/.test(e), "detector"), rv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./ganttDiagram-APWFNJXF-DujTUm7n.js");
  return { id: ld, diagram: e };
}, "loader"), iv = {
  id: ld,
  detector: ev,
  loader: rv
}, nv = iv, cd = "info", av = /* @__PURE__ */ d((e) => /^\s*info/.test(e), "detector"), sv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./infoDiagram-PH2N3AL5-CR5Da0AD.js");
  return { id: cd, diagram: e };
}, "loader"), ov = {
  id: cd,
  detector: av,
  loader: sv
}, hd = "pie", lv = /* @__PURE__ */ d((e) => /^\s*pie/.test(e), "detector"), cv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./pieDiagram-IB7DONF6-CPKKNIJA.js");
  return { id: hd, diagram: e };
}, "loader"), hv = {
  id: hd,
  detector: lv,
  loader: cv
}, ud = "quadrantChart", uv = /* @__PURE__ */ d((e) => /^\s*quadrantChart/.test(e), "detector"), fv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./quadrantDiagram-7GDLP6J5-CoYJaz14.js");
  return { id: ud, diagram: e };
}, "loader"), pv = {
  id: ud,
  detector: uv,
  loader: fv
}, dv = pv, fd = "xychart", gv = /* @__PURE__ */ d((e) => /^\s*xychart-beta/.test(e), "detector"), mv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./xychartDiagram-VJFVF3MP-CDS8V_Oo.js");
  return { id: fd, diagram: e };
}, "loader"), yv = {
  id: fd,
  detector: gv,
  loader: mv
}, xv = yv, pd = "requirement", bv = /* @__PURE__ */ d((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), Cv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./requirementDiagram-KVF5MWMF-BPlrnpfF.js");
  return { id: pd, diagram: e };
}, "loader"), wv = {
  id: pd,
  detector: bv,
  loader: Cv
}, _v = wv, dd = "sequence", kv = /* @__PURE__ */ d((e) => /^\s*sequenceDiagram/.test(e), "detector"), vv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./sequenceDiagram-X6HHIX6F-9fny8oT9.js");
  return { id: dd, diagram: e };
}, "loader"), Sv = {
  id: dd,
  detector: kv,
  loader: vv
}, Tv = Sv, gd = "class", Bv = /* @__PURE__ */ d((e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e);
}, "detector"), Lv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./classDiagram-GIVACNV2-DDZHRR0W.js");
  return { id: gd, diagram: e };
}, "loader"), Mv = {
  id: gd,
  detector: Bv,
  loader: Lv
}, Av = Mv, md = "classDiagram", $v = /* @__PURE__ */ d((e, t) => {
  var r;
  return /^\s*classDiagram/.test(e) && ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e);
}, "detector"), Fv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./classDiagram-v2-COTLJTTW-DDZHRR0W.js");
  return { id: md, diagram: e };
}, "loader"), Ev = {
  id: md,
  detector: $v,
  loader: Fv
}, Ov = Ev, yd = "state", Dv = /* @__PURE__ */ d((e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e);
}, "detector"), Rv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./stateDiagram-DGXRK772-05WQMe4G.js");
  return { id: yd, diagram: e };
}, "loader"), Iv = {
  id: yd,
  detector: Dv,
  loader: Rv
}, Pv = Iv, xd = "stateDiagram", Nv = /* @__PURE__ */ d((e, t) => {
  var r;
  return !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper");
}, "detector"), zv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-YXO3MK2T-Vpes2Qgn.js");
  return { id: xd, diagram: e };
}, "loader"), qv = {
  id: xd,
  detector: Nv,
  loader: zv
}, Wv = qv, bd = "journey", Hv = /* @__PURE__ */ d((e) => /^\s*journey/.test(e), "detector"), jv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./journeyDiagram-U35MCT3I-CrknTRGa.js");
  return { id: bd, diagram: e };
}, "loader"), Yv = {
  id: bd,
  detector: Hv,
  loader: jv
}, Gv = Yv, Uv = /* @__PURE__ */ d((e, t, r) => {
  E.debug(`rendering svg for syntax error
`);
  const i = ik(t), n = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Zl(i, 100, 512, !0), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), Cd = { draw: Uv }, Xv = Cd, Vv = {
  db: {},
  renderer: Cd,
  parser: {
    parse: /* @__PURE__ */ d(() => {
    }, "parse")
  }
}, Zv = Vv, wd = "flowchart-elk", Kv = /* @__PURE__ */ d((e, t = {}) => {
  var r;
  return (
    // If diagram explicitly states flowchart-elk
    /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(e) && ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? (t.layout = "elk", !0) : !1
  );
}, "detector"), Qv = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./flowDiagram-4HSFHLVR-BEKKIWnV.js");
  return { id: wd, diagram: e };
}, "loader"), Jv = {
  id: wd,
  detector: Kv,
  loader: Qv
}, tS = Jv, _d = "timeline", eS = /* @__PURE__ */ d((e) => /^\s*timeline/.test(e), "detector"), rS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./timeline-definition-BDJGKUSR-DEUF8bfN.js");
  return { id: _d, diagram: e };
}, "loader"), iS = {
  id: _d,
  detector: eS,
  loader: rS
}, nS = iS, kd = "mindmap", aS = /* @__PURE__ */ d((e) => /^\s*mindmap/.test(e), "detector"), sS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./mindmap-definition-ALO5MXBD-BBC42sMH.js");
  return { id: kd, diagram: e };
}, "loader"), oS = {
  id: kd,
  detector: aS,
  loader: sS
}, lS = oS, vd = "kanban", cS = /* @__PURE__ */ d((e) => /^\s*kanban/.test(e), "detector"), hS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./kanban-definition-NDS4AKOZ-LMIj9hLY.js");
  return { id: vd, diagram: e };
}, "loader"), uS = {
  id: vd,
  detector: cS,
  loader: hS
}, fS = uS, Sd = "sankey", pS = /* @__PURE__ */ d((e) => /^\s*sankey-beta/.test(e), "detector"), dS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./sankeyDiagram-QLVOVGJD-DIxmBNYR.js");
  return { id: Sd, diagram: e };
}, "loader"), gS = {
  id: Sd,
  detector: pS,
  loader: dS
}, mS = gS, Td = "packet", yS = /* @__PURE__ */ d((e) => /^\s*packet-beta/.test(e), "detector"), xS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./diagram-VNBRO52H-B6l1DKJW.js");
  return { id: Td, diagram: e };
}, "loader"), bS = {
  id: Td,
  detector: yS,
  loader: xS
}, Bd = "radar", CS = /* @__PURE__ */ d((e) => /^\s*radar-beta/.test(e), "detector"), wS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./diagram-SSKATNLV-BR7Vb9FL.js");
  return { id: Bd, diagram: e };
}, "loader"), _S = {
  id: Bd,
  detector: CS,
  loader: wS
}, Ld = "block", kS = /* @__PURE__ */ d((e) => /^\s*block-beta/.test(e), "detector"), vS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./blockDiagram-JOT3LUYC-DC6f4uVN.js");
  return { id: Ld, diagram: e };
}, "loader"), SS = {
  id: Ld,
  detector: kS,
  loader: vS
}, TS = SS, Md = "architecture", BS = /* @__PURE__ */ d((e) => /^\s*architecture/.test(e), "detector"), LS = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./architectureDiagram-IEHRJDOE-Dkm_-XtH.js");
  return { id: Md, diagram: e };
}, "loader"), MS = {
  id: Md,
  detector: BS,
  loader: LS
}, AS = MS, Bl = !1, Zn = /* @__PURE__ */ d(() => {
  Bl || (Bl = !0, Yi("error", Zv, (e) => e.toLowerCase().trim() === "error"), Yi(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ d(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ d(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ d(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ d(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), Il(
    Pk,
    fS,
    Ov,
    Av,
    Zk,
    nv,
    ov,
    hv,
    _v,
    Tv,
    tS,
    Gk,
    Wk,
    lS,
    nS,
    tv,
    Wv,
    Pv,
    Gv,
    dv,
    mS,
    bS,
    xv,
    TS,
    AS,
    _S
  ));
}, "addDiagrams"), $S = /* @__PURE__ */ d(async () => {
  E.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(pr).map(async ([r, { detector: i, loader: n }]) => {
      if (n)
        try {
          ga(r);
        } catch {
          try {
            const { diagram: a, id: o } = await n();
            Yi(o, a, i);
          } catch (a) {
            throw E.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete pr[r], a;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    E.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      E.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), FS = "graphics-document document";
function Ad(e, t) {
  e.attr("role", FS), t !== "" && e.attr("aria-roledescription", t);
}
d(Ad, "setA11yDiagramInfo");
function $d(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const n = `chart-desc-${i}`;
      e.attr("aria-describedby", n), e.insert("desc", ":first-child").attr("id", n).text(r);
    }
    if (t) {
      const n = `chart-title-${i}`;
      e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
    }
  }
}
d($d, "addSVGa11yTitleDescription");
var Pe, rs = (Pe = class {
  constructor(t, r, i, n, a) {
    this.type = t, this.text = r, this.db = i, this.parser = n, this.renderer = a;
  }
  static async fromText(t, r = {}) {
    var c, h;
    const i = Et(), n = as(t, i);
    t = JC(t) + `
`;
    try {
      ga(n);
    } catch {
      const u = ng(n);
      if (!u)
        throw new Rl(`Diagram ${n} not found.`);
      const { id: f, diagram: p } = await u();
      Yi(f, p);
    }
    const { db: a, parser: o, renderer: s, init: l } = ga(n);
    return o.parser && (o.parser.yy = a), (c = a.clear) == null || c.call(a), l == null || l(i), r.title && ((h = a.setDiagramTitle) == null || h.call(a, r.title)), await o.parse(t), new Pe(n, t, a, o, s);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, d(Pe, "Diagram"), Pe), Ll = [], ES = /* @__PURE__ */ d(() => {
  Ll.forEach((e) => {
    e();
  }), Ll = [];
}, "attachFunctions"), OS = /* @__PURE__ */ d((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Fd(e) {
  const t = e.match(Dl);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  let r = im(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: rm
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e.slice(t[0].length),
    metadata: i
  };
}
d(Fd, "extractFrontMatter");
var DS = /* @__PURE__ */ d((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), RS = /* @__PURE__ */ d((e) => {
  const { text: t, metadata: r } = Fd(e), { displayMode: i, title: n, config: a = {} } = r;
  return i && (a.gantt || (a.gantt = {}), a.gantt.displayMode = i), { title: n, config: a, text: t };
}, "processFrontmatter"), IS = /* @__PURE__ */ d((e) => {
  const t = Kt.detectInit(e) ?? {}, r = Kt.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : (r == null ? void 0 : r.type) === "wrap" && (t.wrap = !0), {
    text: zC(e),
    directive: t
  };
}, "processDirectives");
function ao(e) {
  const t = DS(e), r = RS(t), i = IS(r.text), n = Ws(r.config, i.directive);
  return e = OS(i.text), {
    code: e,
    title: r.title,
    config: n
  };
}
d(ao, "preprocessDiagram");
function Ed(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
d(Ed, "toBase64");
var PS = 5e4, NS = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", zS = "sandbox", qS = "loose", WS = "http://www.w3.org/2000/svg", HS = "http://www.w3.org/1999/xlink", jS = "http://www.w3.org/1999/xhtml", YS = "100%", GS = "100%", US = "border:0;margin:0;", XS = "margin:0", VS = "allow-top-navigation-by-user-activation allow-popups", ZS = 'The "iframe" tag is not supported by your browser.', KS = ["foreignobject"], QS = ["dominant-baseline"];
function so(e) {
  const t = ao(e);
  return Hi(), Cg(t.config ?? {}), t;
}
d(so, "processAndSetConfigs");
async function Od(e, t) {
  Zn();
  try {
    const { code: r, config: i } = so(e);
    return { diagramType: (await Rd(r)).type, config: i };
  } catch (r) {
    if (t != null && t.suppressErrors)
      return !1;
    throw r;
  }
}
d(Od, "parse");
var Ml = /* @__PURE__ */ d((e, t, r = []) => `
.${e} ${t} { ${r.join(" !important; ")} !important; }`, "cssImportantStyles"), JS = /* @__PURE__ */ d((e, t = /* @__PURE__ */ new Map()) => {
  var i;
  let r = "";
  if (e.themeCSS !== void 0 && (r += `
${e.themeCSS}`), e.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${e.fontFamily}}`), e.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), t instanceof Map) {
    const s = e.htmlLabels ?? ((i = e.flowchart) == null ? void 0 : i.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      Tl(l.styles) || s.forEach((c) => {
        r += Ml(l.id, c, l.styles);
      }), Tl(l.textStyles) || (r += Ml(
        l.id,
        "tspan",
        ((l == null ? void 0 : l.textStyles) || []).map((c) => c.replace("color", "fill"))
      ));
    });
  }
  return r;
}, "createCssStyles"), tT = /* @__PURE__ */ d((e, t, r, i) => {
  const n = JS(e, r), a = Ng(t, n, e.themeVariables);
  return Ka(xk(`${i}{${a}}`), Ck);
}, "createUserStyles"), eT = /* @__PURE__ */ d((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = Xe(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), rT = /* @__PURE__ */ d((e = "", t) => {
  var n, a;
  const r = (a = (n = t == null ? void 0 : t.viewBox) == null ? void 0 : n.baseVal) != null && a.height ? t.viewBox.baseVal.height + "px" : GS, i = Ed(`<body style="${XS}">${e}</body>`);
  return `<iframe style="width:${YS};height:${r};${US}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${VS}">
  ${ZS}
</iframe>`;
}, "putIntoIFrame"), Al = /* @__PURE__ */ d((e, t, r, i, n) => {
  const a = e.append("div");
  a.attr("id", r), i && a.attr("style", i);
  const o = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", WS);
  return n && o.attr("xmlns:xlink", n), o.append("g"), e;
}, "appendDivSvgG");
function is(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
d(is, "sandboxedIframe");
var iT = /* @__PURE__ */ d((e, t, r, i) => {
  var n, a, o;
  (n = e.getElementById(t)) == null || n.remove(), (a = e.getElementById(r)) == null || a.remove(), (o = e.getElementById(i)) == null || o.remove();
}, "removeExistingElements"), nT = /* @__PURE__ */ d(async function(e, t, r) {
  var P, D, A, L, T, $;
  Zn();
  const i = so(t);
  t = i.code;
  const n = Et();
  E.debug(n), t.length > ((n == null ? void 0 : n.maxTextSize) ?? PS) && (t = NS);
  const a = "#" + e, o = "i" + e, s = "#" + o, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ d(() => {
    const N = et(f ? s : c).node();
    N && "remove" in N && N.remove();
  }, "removeTempElements");
  let u = et("body");
  const f = n.securityLevel === zS, p = n.securityLevel === qS, g = n.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const B = is(et(r), o);
      u = et(B.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = et(r);
    Al(u, e, l, `font-family: ${g}`, HS);
  } else {
    if (iT(document, e, l, o), f) {
      const B = is(et("body"), o);
      u = et(B.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = et("body");
    Al(u, e, l);
  }
  let m, y;
  try {
    m = await rs.fromText(t, { title: i.title });
  } catch (B) {
    if (n.suppressErrorRendering)
      throw h(), B;
    m = await rs.fromText("error"), y = B;
  }
  const x = u.select(c).node(), b = m.type, w = x.firstChild, S = w.firstChild, k = (D = (P = m.renderer).getClasses) == null ? void 0 : D.call(P, t, m), C = tT(n, b, k, a), _ = document.createElement("style");
  _.innerHTML = C, w.insertBefore(_, S);
  try {
    await m.renderer.draw(t, e, xl.version, m);
  } catch (B) {
    throw n.suppressErrorRendering ? h() : Xv.draw(t, e, xl.version), B;
  }
  const O = u.select(`${c} svg`), I = (L = (A = m.db).getAccTitle) == null ? void 0 : L.call(A), F = ($ = (T = m.db).getAccDescription) == null ? void 0 : $.call(T);
  Id(b, O, I, F), u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", jS);
  let M = u.select(c).node().innerHTML;
  if (E.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), M = eT(M, f, gt(n.arrowMarkerAbsolute)), f) {
    const B = u.select(c + " svg").node();
    M = rT(M, B);
  } else p || (M = fr.sanitize(M, {
    ADD_TAGS: KS,
    ADD_ATTR: QS,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (ES(), y)
    throw y;
  return h(), {
    diagramType: b,
    svg: M,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function Dd(e = {}) {
  var i;
  const t = Ct({}, e);
  t != null && t.fontFamily && !((i = t.themeVariables) != null && i.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), xg(t), t != null && t.theme && t.theme in le ? t.themeVariables = le[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = le.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? yg(t) : Hl();
  ns(r.logLevel), Zn();
}
d(Dd, "initialize");
var Rd = /* @__PURE__ */ d((e, t = {}) => {
  const { code: r } = ao(e);
  return rs.fromText(r, t);
}, "getDiagramFromText");
function Id(e, t, r, i) {
  Ad(t, e), $d(t, r, i, t.attr("id"));
}
d(Id, "addA11yInfo");
var je = Object.freeze({
  render: nT,
  parse: Od,
  getDiagramFromText: Rd,
  initialize: Dd,
  getConfig: Et,
  setConfig: jl,
  getSiteConfig: Hl,
  updateSiteConfig: bg,
  reset: /* @__PURE__ */ d(() => {
    Hi();
  }, "reset"),
  globalReset: /* @__PURE__ */ d(() => {
    Hi(dr);
  }, "globalReset"),
  defaultConfig: dr
});
ns(Et().logLevel);
Hi(Et());
var aT = /* @__PURE__ */ d((e, t, r) => {
  E.warn(e), qs(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Pd = /* @__PURE__ */ d(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await sT(e);
  } catch (t) {
    if (qs(t) && E.error(t.str), Rt.parseError && Rt.parseError(t), !e.suppressErrors)
      throw E.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), sT = /* @__PURE__ */ d(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = je.getConfig();
  E.debug(`${e ? "" : "No "}Callback function found`);
  let n;
  if (r)
    n = r;
  else if (t)
    n = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  E.debug(`Found ${n.length} diagrams`), (i == null ? void 0 : i.startOnLoad) !== void 0 && (E.debug("Start On Load: " + (i == null ? void 0 : i.startOnLoad)), je.updateSiteConfig({ startOnLoad: i == null ? void 0 : i.startOnLoad }));
  const a = new Kt.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let o;
  const s = [];
  for (const l of Array.from(n)) {
    if (E.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${a.next()}`;
    o = l.innerHTML, o = ff(Kt.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = Kt.detectInit(o);
    h && E.debug("Detected early reinit: ", h);
    try {
      const { svg: u, bindFunctions: f } = await Wd(c, o, l);
      l.innerHTML = u, e && await e(c), f && f(l);
    } catch (u) {
      aT(u, s, Rt.parseError);
    }
  }
  if (s.length > 0)
    throw s[0];
}, "runThrowsErrors"), Nd = /* @__PURE__ */ d(function(e) {
  je.initialize(e);
}, "initialize"), oT = /* @__PURE__ */ d(async function(e, t, r) {
  E.warn("mermaid.init is deprecated. Please use run instead."), e && Nd(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Pd(i);
}, "init"), lT = /* @__PURE__ */ d(async (e, {
  lazyLoad: t = !0
} = {}) => {
  Zn(), Il(...e), t === !1 && await $S();
}, "registerExternalDiagrams"), zd = /* @__PURE__ */ d(function() {
  if (Rt.startOnLoad) {
    const { startOnLoad: e } = je.getConfig();
    e && Rt.run().catch((t) => E.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", zd, !1);
var cT = /* @__PURE__ */ d(function(e) {
  Rt.parseError = e;
}, "setParseErrorHandler"), kn = [], ua = !1, qd = /* @__PURE__ */ d(async () => {
  if (!ua) {
    for (ua = !0; kn.length > 0; ) {
      const e = kn.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          E.error("Error executing queue", t);
        }
    }
    ua = !1;
  }
}, "executeQueue"), hT = /* @__PURE__ */ d(async (e, t) => new Promise((r, i) => {
  const n = /* @__PURE__ */ d(() => new Promise((a, o) => {
    je.parse(e, t).then(
      (s) => {
        a(s), r(s);
      },
      (s) => {
        var l;
        E.error("Error parsing", s), (l = Rt.parseError) == null || l.call(Rt, s), o(s), i(s);
      }
    );
  }), "performCall");
  kn.push(n), qd().catch(i);
}), "parse"), Wd = /* @__PURE__ */ d((e, t, r) => new Promise((i, n) => {
  const a = /* @__PURE__ */ d(() => new Promise((o, s) => {
    je.render(e, t, r).then(
      (l) => {
        o(l), i(l);
      },
      (l) => {
        var c;
        E.error("Error parsing", l), (c = Rt.parseError) == null || c.call(Rt, l), s(l), n(l);
      }
    );
  }), "performCall");
  kn.push(a), qd().catch(n);
}), "render"), Rt = {
  startOnLoad: !0,
  mermaidAPI: je,
  parse: hT,
  render: Wd,
  init: oT,
  run: Pd,
  registerExternalDiagrams: lT,
  registerLayoutLoaders: Zp,
  initialize: Nd,
  parseError: void 0,
  contentLoaded: zd,
  setParseErrorHandler: cT,
  detectType: as,
  registerIconPacks: Tm
}, uT = Rt;
/*! Check if previously processed */
/*!
 * Wait for document loaded before starting the execution
 */
const RT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uT
}, Symbol.toStringTag, { value: "Module" }));
export {
  Vb as $,
  Yr as A,
  rg as B,
  ql as C,
  Ws as D,
  Et as E,
  YC as F,
  Xg as G,
  ik as H,
  xl as I,
  rm as J,
  hg as K,
  mr as L,
  dT as M,
  ss as N,
  qn as O,
  co as P,
  Jb as Q,
  Ri as R,
  jC as S,
  hi as T,
  Kl as U,
  Rg as V,
  ci as W,
  z as X,
  X as Y,
  RC as Z,
  d as _,
  Ct as a,
  be as a$,
  Ro as a0,
  Do as a1,
  ST as a2,
  CT as a3,
  kT as a4,
  _T as a5,
  xT as a6,
  Ls as a7,
  vT as a8,
  bT as a9,
  v2 as aA,
  SC as aB,
  Es as aC,
  Tl as aD,
  Rw as aE,
  Zb as aF,
  Sm as aG,
  Tm as aH,
  An as aI,
  Ye as aJ,
  EC as aK,
  Hu as aL,
  Rn as aM,
  zn as aN,
  pn as aO,
  Yu as aP,
  Wu as aQ,
  cC as aR,
  ks as aS,
  Zh as aT,
  Ft as aU,
  pi as aV,
  _x as aW,
  Jh as aX,
  yT as aY,
  Xd as aZ,
  vs as a_,
  Ze as aa,
  BT as ab,
  TT as ac,
  wT as ad,
  c_ as ae,
  Xp as af,
  FT as ag,
  Ku as ah,
  gt as ai,
  Be as aj,
  bs as ak,
  nm as al,
  _f as am,
  Xe as an,
  Q as ao,
  Jt as ap,
  tk as aq,
  $T as ar,
  ET as as,
  MT as at,
  j as au,
  AT as av,
  R_ as aw,
  F_ as ax,
  $_ as ay,
  FC as az,
  jg as b,
  ii as b0,
  Mo as b1,
  Mx as b2,
  $C as b3,
  vC as b4,
  u2 as b5,
  Os as b6,
  aC as b7,
  DC as b8,
  gi as b9,
  vr as ba,
  hn as bb,
  mC as bc,
  vk as bd,
  di as be,
  fn as bf,
  hC as bg,
  Ru as bh,
  d2 as bi,
  g2 as bj,
  $e as bk,
  Ko as bl,
  m2 as bm,
  Ds as bn,
  p2 as bo,
  b2 as bp,
  Sr as bq,
  Te as br,
  Go as bs,
  Rs as bt,
  Pu as bu,
  ts as bv,
  OC as bw,
  Nn as bx,
  RT as by,
  Hg as c,
  nt as d,
  kr as e,
  Ju as f,
  Wg as g,
  ue as h,
  Ne as i,
  et as j,
  Zl as k,
  E as l,
  Rh as m,
  Yg as n,
  Gg as o,
  im as p,
  L_ as q,
  LT as r,
  qg as s,
  zg as t,
  Kt as u,
  mT as v,
  XC as w,
  gT as x,
  DT as y,
  OT as z
};
