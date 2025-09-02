import { aS as $e, aT as Je, aU as Ke, aV as tn, aW as Un, aX as re, aY as En, _ as h, aZ as at, d as _t, s as Ln, g as An, n as In, o as Wn, c as On, b as Hn, t as Nn, m as Vn, l as Qt, j as Zt, k as zn, e as Pn, u as Rn } from "./mermaid.core-B0aNlTYs.js";
import { c as Te, g as be } from "./index-EQgvOkvr.js";
import { b as Bn, t as Ie, c as Zn, a as Xn, l as qn } from "./linear-DZkIgXN9.js";
import { i as Gn } from "./init-DjUOC4st.js";
function jn(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let a of t)
      (a = e(a, ++r, t)) != null && (n < a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function Qn(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let a of t)
      (a = e(a, ++r, t)) != null && (n > a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function $n(t) {
  return t;
}
var qt = 1, ae = 2, me = 3, Xt = 4, We = 1e-6;
function Jn(t) {
  return "translate(" + t + ",0)";
}
function Kn(t) {
  return "translate(0," + t + ")";
}
function tr(t) {
  return (e) => +t(e);
}
function er(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function nr() {
  return !this.__axis;
}
function en(t, e) {
  var n = [], r = null, a = null, i = 6, s = 6, k = 3, M = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, T = t === qt || t === Xt ? -1 : 1, g = t === Xt || t === ae ? "x" : "y", U = t === qt || t === me ? Jn : Kn;
  function D(b) {
    var q = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), O = a ?? (e.tickFormat ? e.tickFormat.apply(e, n) : $n), C = Math.max(i, 0) + k, I = e.range(), V = +I[0] + M, W = +I[I.length - 1] + M, Z = (e.bandwidth ? er : tr)(e.copy(), M), Q = b.selection ? b.selection() : b, w = Q.selectAll(".domain").data([null]), H = Q.selectAll(".tick").data(q, e).order(), x = H.exit(), F = H.enter().append("g").attr("class", "tick"), _ = H.select("line"), S = H.select("text");
    w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), H = H.merge(F), _ = _.merge(F.append("line").attr("stroke", "currentColor").attr(g + "2", T * i)), S = S.merge(F.append("text").attr("fill", "currentColor").attr(g, T * C).attr("dy", t === qt ? "0em" : t === me ? "0.71em" : "0.32em")), b !== Q && (w = w.transition(b), H = H.transition(b), _ = _.transition(b), S = S.transition(b), x = x.transition(b).attr("opacity", We).attr("transform", function(p) {
      return isFinite(p = Z(p)) ? U(p + M) : this.getAttribute("transform");
    }), F.attr("opacity", We).attr("transform", function(p) {
      var Y = this.parentNode.__axis;
      return U((Y && isFinite(Y = Y(p)) ? Y : Z(p)) + M);
    })), x.remove(), w.attr("d", t === Xt || t === ae ? s ? "M" + T * s + "," + V + "H" + M + "V" + W + "H" + T * s : "M" + M + "," + V + "V" + W : s ? "M" + V + "," + T * s + "V" + M + "H" + W + "V" + T * s : "M" + V + "," + M + "H" + W), H.attr("opacity", 1).attr("transform", function(p) {
      return U(Z(p) + M);
    }), _.attr(g + "2", T * i), S.attr(g, T * C).text(O), Q.filter(nr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ae ? "start" : t === Xt ? "end" : "middle"), Q.each(function() {
      this.__axis = Z;
    });
  }
  return D.scale = function(b) {
    return arguments.length ? (e = b, D) : e;
  }, D.ticks = function() {
    return n = Array.from(arguments), D;
  }, D.tickArguments = function(b) {
    return arguments.length ? (n = b == null ? [] : Array.from(b), D) : n.slice();
  }, D.tickValues = function(b) {
    return arguments.length ? (r = b == null ? null : Array.from(b), D) : r && r.slice();
  }, D.tickFormat = function(b) {
    return arguments.length ? (a = b, D) : a;
  }, D.tickSize = function(b) {
    return arguments.length ? (i = s = +b, D) : i;
  }, D.tickSizeInner = function(b) {
    return arguments.length ? (i = +b, D) : i;
  }, D.tickSizeOuter = function(b) {
    return arguments.length ? (s = +b, D) : s;
  }, D.tickPadding = function(b) {
    return arguments.length ? (k = +b, D) : k;
  }, D.offset = function(b) {
    return arguments.length ? (M = +b, D) : M;
  }, D;
}
function rr(t) {
  return en(qt, t);
}
function ar(t) {
  return en(me, t);
}
const ir = Math.PI / 180, sr = 180 / Math.PI, $t = 18, nn = 0.96422, rn = 1, an = 0.82521, sn = 4 / 29, St = 6 / 29, on = 3 * St * St, or = St * St * St;
function cn(t) {
  if (t instanceof ft) return new ft(t.l, t.a, t.b, t.opacity);
  if (t instanceof dt) return ln(t);
  t instanceof Ke || (t = Un(t));
  var e = ce(t.r), n = ce(t.g), r = ce(t.b), a = ie((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / rn), i, s;
  return e === n && n === r ? i = s = a : (i = ie((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / nn), s = ie((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / an)), new ft(116 * a - 16, 500 * (i - a), 200 * (a - s), t.opacity);
}
function cr(t, e, n, r) {
  return arguments.length === 1 ? cn(t) : new ft(t, e, n, r ?? 1);
}
function ft(t, e, n, r) {
  this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
}
$e(ft, cr, Je(tn, {
  brighter(t) {
    return new ft(this.l + $t * (t ?? 1), this.a, this.b, this.opacity);
  },
  darker(t) {
    return new ft(this.l - $t * (t ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200;
    return e = nn * se(e), t = rn * se(t), n = an * se(n), new Ke(
      oe(3.1338561 * e - 1.6168667 * t - 0.4906146 * n),
      oe(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
      oe(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
      this.opacity
    );
  }
}));
function ie(t) {
  return t > or ? Math.pow(t, 1 / 3) : t / on + sn;
}
function se(t) {
  return t > St ? t * t * t : on * (t - sn);
}
function oe(t) {
  return 255 * (t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function ce(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function lr(t) {
  if (t instanceof dt) return new dt(t.h, t.c, t.l, t.opacity);
  if (t instanceof ft || (t = cn(t)), t.a === 0 && t.b === 0) return new dt(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
  var e = Math.atan2(t.b, t.a) * sr;
  return new dt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function ge(t, e, n, r) {
  return arguments.length === 1 ? lr(t) : new dt(t, e, n, r ?? 1);
}
function dt(t, e, n, r) {
  this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
}
function ln(t) {
  if (isNaN(t.h)) return new ft(t.l, 0, 0, t.opacity);
  var e = t.h * ir;
  return new ft(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
$e(dt, ge, Je(tn, {
  brighter(t) {
    return new dt(this.h, this.c, this.l + $t * (t ?? 1), this.opacity);
  },
  darker(t) {
    return new dt(this.h, this.c, this.l - $t * (t ?? 1), this.opacity);
  },
  rgb() {
    return ln(this).rgb();
  }
}));
function ur(t) {
  return function(e, n) {
    var r = t((e = ge(e)).h, (n = ge(n)).h), a = re(e.c, n.c), i = re(e.l, n.l), s = re(e.opacity, n.opacity);
    return function(k) {
      return e.h = r(k), e.c = a(k), e.l = i(k), e.opacity = s(k), e + "";
    };
  };
}
const fr = ur(En);
function hr(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, a = t[n], i = t[r], s;
  return i < a && (s = n, n = r, r = s, s = a, a = i, i = s), t[n] = e.floor(a), t[r] = e.ceil(i), t;
}
const le = /* @__PURE__ */ new Date(), ue = /* @__PURE__ */ new Date();
function et(t, e, n, r) {
  function a(i) {
    return t(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (t(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (t(i = new Date(i - 1)), e(i, 1), t(i), i), a.round = (i) => {
    const s = a(i), k = a.ceil(i);
    return i - s < k - i ? s : k;
  }, a.offset = (i, s) => (e(i = /* @__PURE__ */ new Date(+i), s == null ? 1 : Math.floor(s)), i), a.range = (i, s, k) => {
    const M = [];
    if (i = a.ceil(i), k = k == null ? 1 : Math.floor(k), !(i < s) || !(k > 0)) return M;
    let T;
    do
      M.push(T = /* @__PURE__ */ new Date(+i)), e(i, k), t(i);
    while (T < i && i < s);
    return M;
  }, a.filter = (i) => et((s) => {
    if (s >= s) for (; t(s), !i(s); ) s.setTime(s - 1);
  }, (s, k) => {
    if (s >= s)
      if (k < 0) for (; ++k <= 0; )
        for (; e(s, -1), !i(s); )
          ;
      else for (; --k >= 0; )
        for (; e(s, 1), !i(s); )
          ;
  }), n && (a.count = (i, s) => (le.setTime(+i), ue.setTime(+s), t(le), t(ue), Math.floor(n(le, ue))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(r ? (s) => r(s) % i === 0 : (s) => a.count(0, s) % i === 0) : a)), a;
}
const Yt = et(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
Yt.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? et((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : Yt);
Yt.range;
const mt = 1e3, ct = mt * 60, gt = ct * 60, yt = gt * 24, xe = yt * 7, Oe = yt * 30, fe = yt * 365, vt = et((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * mt);
}, (t, e) => (e - t) / mt, (t) => t.getUTCSeconds());
vt.range;
const Wt = et((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * mt);
}, (t, e) => {
  t.setTime(+t + e * ct);
}, (t, e) => (e - t) / ct, (t) => t.getMinutes());
Wt.range;
const dr = et((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * ct);
}, (t, e) => (e - t) / ct, (t) => t.getUTCMinutes());
dr.range;
const Ot = et((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * mt - t.getMinutes() * ct);
}, (t, e) => {
  t.setTime(+t + e * gt);
}, (t, e) => (e - t) / gt, (t) => t.getHours());
Ot.range;
const mr = et((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * gt);
}, (t, e) => (e - t) / gt, (t) => t.getUTCHours());
mr.range;
const Tt = et(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * ct) / yt,
  (t) => t.getDate() - 1
);
Tt.range;
const we = et((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / yt, (t) => t.getUTCDate() - 1);
we.range;
const gr = et((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / yt, (t) => Math.floor(t / yt));
gr.range;
function wt(t) {
  return et((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * ct) / xe);
}
const Vt = wt(0), Ht = wt(1), un = wt(2), fn = wt(3), bt = wt(4), hn = wt(5), dn = wt(6);
Vt.range;
Ht.range;
un.range;
fn.range;
bt.range;
hn.range;
dn.range;
function Dt(t) {
  return et((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / xe);
}
const mn = Dt(0), Jt = Dt(1), yr = Dt(2), kr = Dt(3), Ut = Dt(4), pr = Dt(5), vr = Dt(6);
mn.range;
Jt.range;
yr.range;
kr.range;
Ut.range;
pr.range;
vr.range;
const Nt = et((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Nt.range;
const Tr = et((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
Tr.range;
const kt = et((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
kt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : et((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
kt.range;
const xt = et((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
xt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : et((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
xt.range;
function br(t, e, n, r, a, i) {
  const s = [
    [vt, 1, mt],
    [vt, 5, 5 * mt],
    [vt, 15, 15 * mt],
    [vt, 30, 30 * mt],
    [i, 1, ct],
    [i, 5, 5 * ct],
    [i, 15, 15 * ct],
    [i, 30, 30 * ct],
    [a, 1, gt],
    [a, 3, 3 * gt],
    [a, 6, 6 * gt],
    [a, 12, 12 * gt],
    [r, 1, yt],
    [r, 2, 2 * yt],
    [n, 1, xe],
    [e, 1, Oe],
    [e, 3, 3 * Oe],
    [t, 1, fe]
  ];
  function k(T, g, U) {
    const D = g < T;
    D && ([T, g] = [g, T]);
    const b = U && typeof U.range == "function" ? U : M(T, g, U), q = b ? b.range(T, +g + 1) : [];
    return D ? q.reverse() : q;
  }
  function M(T, g, U) {
    const D = Math.abs(g - T) / U, b = Bn(([, , C]) => C).right(s, D);
    if (b === s.length) return t.every(Ie(T / fe, g / fe, U));
    if (b === 0) return Yt.every(Math.max(Ie(T, g, U), 1));
    const [q, O] = s[D / s[b - 1][2] < s[b][2] / D ? b - 1 : b];
    return q.every(O);
  }
  return [k, M];
}
const [xr, wr] = br(kt, Nt, Vt, Tt, Ot, Wt);
function he(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function de(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Lt(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Dr(t) {
  var e = t.dateTime, n = t.date, r = t.time, a = t.periods, i = t.days, s = t.shortDays, k = t.months, M = t.shortMonths, T = At(a), g = It(a), U = At(i), D = It(i), b = At(s), q = It(s), O = At(k), C = It(k), I = At(M), V = It(M), W = {
    a: m,
    A: E,
    b: c,
    B: d,
    c: null,
    d: Re,
    e: Re,
    f: qr,
    g: ra,
    G: ia,
    H: Br,
    I: Zr,
    j: Xr,
    L: gn,
    m: Gr,
    M: jr,
    p: o,
    q: P,
    Q: Xe,
    s: qe,
    S: Qr,
    u: $r,
    U: Jr,
    V: Kr,
    w: ta,
    W: ea,
    x: null,
    X: null,
    y: na,
    Y: aa,
    Z: sa,
    "%": Ze
  }, Z = {
    a: z,
    A: R,
    b: K,
    B: G,
    c: null,
    d: Be,
    e: Be,
    f: ua,
    g: Ta,
    G: xa,
    H: oa,
    I: ca,
    j: la,
    L: kn,
    m: fa,
    M: ha,
    p: $,
    q: it,
    Q: Xe,
    s: qe,
    S: da,
    u: ma,
    U: ga,
    V: ya,
    w: ka,
    W: pa,
    x: null,
    X: null,
    y: va,
    Y: ba,
    Z: wa,
    "%": Ze
  }, Q = {
    a: _,
    A: S,
    b: p,
    B: Y,
    c: l,
    d: ze,
    e: ze,
    f: Vr,
    g: Ve,
    G: Ne,
    H: Pe,
    I: Pe,
    j: Wr,
    L: Nr,
    m: Ir,
    M: Or,
    p: F,
    q: Ar,
    Q: Pr,
    s: Rr,
    S: Hr,
    u: Fr,
    U: Yr,
    V: Ur,
    w: Sr,
    W: Er,
    x: f,
    X: y,
    y: Ve,
    Y: Ne,
    Z: Lr,
    "%": zr
  };
  W.x = w(n, W), W.X = w(r, W), W.c = w(e, W), Z.x = w(n, Z), Z.X = w(r, Z), Z.c = w(e, Z);
  function w(v, A) {
    return function(N) {
      var u = [], J = -1, L = 0, j = v.length, X, rt, st;
      for (N instanceof Date || (N = /* @__PURE__ */ new Date(+N)); ++J < j; )
        v.charCodeAt(J) === 37 && (u.push(v.slice(L, J)), (rt = He[X = v.charAt(++J)]) != null ? X = v.charAt(++J) : rt = X === "e" ? " " : "0", (st = A[X]) && (X = st(N, rt)), u.push(X), L = J + 1);
      return u.push(v.slice(L, J)), u.join("");
    };
  }
  function H(v, A) {
    return function(N) {
      var u = Lt(1900, void 0, 1), J = x(u, v, N += "", 0), L, j;
      if (J != N.length) return null;
      if ("Q" in u) return new Date(u.Q);
      if ("s" in u) return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
      if (A && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
        if (u.V < 1 || u.V > 53) return null;
        "w" in u || (u.w = 1), "Z" in u ? (L = de(Lt(u.y, 0, 1)), j = L.getUTCDay(), L = j > 4 || j === 0 ? Jt.ceil(L) : Jt(L), L = we.offset(L, (u.V - 1) * 7), u.y = L.getUTCFullYear(), u.m = L.getUTCMonth(), u.d = L.getUTCDate() + (u.w + 6) % 7) : (L = he(Lt(u.y, 0, 1)), j = L.getDay(), L = j > 4 || j === 0 ? Ht.ceil(L) : Ht(L), L = Tt.offset(L, (u.V - 1) * 7), u.y = L.getFullYear(), u.m = L.getMonth(), u.d = L.getDate() + (u.w + 6) % 7);
      } else ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), j = "Z" in u ? de(Lt(u.y, 0, 1)).getUTCDay() : he(Lt(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (j + 5) % 7 : u.w + u.U * 7 - (j + 6) % 7);
      return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, de(u)) : he(u);
    };
  }
  function x(v, A, N, u) {
    for (var J = 0, L = A.length, j = N.length, X, rt; J < L; ) {
      if (u >= j) return -1;
      if (X = A.charCodeAt(J++), X === 37) {
        if (X = A.charAt(J++), rt = Q[X in He ? A.charAt(J++) : X], !rt || (u = rt(v, N, u)) < 0) return -1;
      } else if (X != N.charCodeAt(u++))
        return -1;
    }
    return u;
  }
  function F(v, A, N) {
    var u = T.exec(A.slice(N));
    return u ? (v.p = g.get(u[0].toLowerCase()), N + u[0].length) : -1;
  }
  function _(v, A, N) {
    var u = b.exec(A.slice(N));
    return u ? (v.w = q.get(u[0].toLowerCase()), N + u[0].length) : -1;
  }
  function S(v, A, N) {
    var u = U.exec(A.slice(N));
    return u ? (v.w = D.get(u[0].toLowerCase()), N + u[0].length) : -1;
  }
  function p(v, A, N) {
    var u = I.exec(A.slice(N));
    return u ? (v.m = V.get(u[0].toLowerCase()), N + u[0].length) : -1;
  }
  function Y(v, A, N) {
    var u = O.exec(A.slice(N));
    return u ? (v.m = C.get(u[0].toLowerCase()), N + u[0].length) : -1;
  }
  function l(v, A, N) {
    return x(v, e, A, N);
  }
  function f(v, A, N) {
    return x(v, n, A, N);
  }
  function y(v, A, N) {
    return x(v, r, A, N);
  }
  function m(v) {
    return s[v.getDay()];
  }
  function E(v) {
    return i[v.getDay()];
  }
  function c(v) {
    return M[v.getMonth()];
  }
  function d(v) {
    return k[v.getMonth()];
  }
  function o(v) {
    return a[+(v.getHours() >= 12)];
  }
  function P(v) {
    return 1 + ~~(v.getMonth() / 3);
  }
  function z(v) {
    return s[v.getUTCDay()];
  }
  function R(v) {
    return i[v.getUTCDay()];
  }
  function K(v) {
    return M[v.getUTCMonth()];
  }
  function G(v) {
    return k[v.getUTCMonth()];
  }
  function $(v) {
    return a[+(v.getUTCHours() >= 12)];
  }
  function it(v) {
    return 1 + ~~(v.getUTCMonth() / 3);
  }
  return {
    format: function(v) {
      var A = w(v += "", W);
      return A.toString = function() {
        return v;
      }, A;
    },
    parse: function(v) {
      var A = H(v += "", !1);
      return A.toString = function() {
        return v;
      }, A;
    },
    utcFormat: function(v) {
      var A = w(v += "", Z);
      return A.toString = function() {
        return v;
      }, A;
    },
    utcParse: function(v) {
      var A = H(v += "", !0);
      return A.toString = function() {
        return v;
      }, A;
    }
  };
}
var He = { "-": "", _: " ", 0: "0" }, nt = /^\s*\d+/, Cr = /^%/, Mr = /[\\^$*+?|[\]().{}]/g;
function B(t, e, n) {
  var r = t < 0 ? "-" : "", a = (r ? -t : t) + "", i = a.length;
  return r + (i < n ? new Array(n - i + 1).join(e) + a : a);
}
function _r(t) {
  return t.replace(Mr, "\\$&");
}
function At(t) {
  return new RegExp("^(?:" + t.map(_r).join("|") + ")", "i");
}
function It(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function Sr(t, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function Fr(t, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Yr(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function Ur(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function Er(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function Ne(t, e, n) {
  var r = nt.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Ve(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Lr(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Ar(t, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ir(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function ze(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Wr(t, e, n) {
  var r = nt.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function Pe(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Or(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Hr(t, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function Nr(t, e, n) {
  var r = nt.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Vr(t, e, n) {
  var r = nt.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function zr(t, e, n) {
  var r = Cr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Pr(t, e, n) {
  var r = nt.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Rr(t, e, n) {
  var r = nt.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function Re(t, e) {
  return B(t.getDate(), e, 2);
}
function Br(t, e) {
  return B(t.getHours(), e, 2);
}
function Zr(t, e) {
  return B(t.getHours() % 12 || 12, e, 2);
}
function Xr(t, e) {
  return B(1 + Tt.count(kt(t), t), e, 3);
}
function gn(t, e) {
  return B(t.getMilliseconds(), e, 3);
}
function qr(t, e) {
  return gn(t, e) + "000";
}
function Gr(t, e) {
  return B(t.getMonth() + 1, e, 2);
}
function jr(t, e) {
  return B(t.getMinutes(), e, 2);
}
function Qr(t, e) {
  return B(t.getSeconds(), e, 2);
}
function $r(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Jr(t, e) {
  return B(Vt.count(kt(t) - 1, t), e, 2);
}
function yn(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? bt(t) : bt.ceil(t);
}
function Kr(t, e) {
  return t = yn(t), B(bt.count(kt(t), t) + (kt(t).getDay() === 4), e, 2);
}
function ta(t) {
  return t.getDay();
}
function ea(t, e) {
  return B(Ht.count(kt(t) - 1, t), e, 2);
}
function na(t, e) {
  return B(t.getFullYear() % 100, e, 2);
}
function ra(t, e) {
  return t = yn(t), B(t.getFullYear() % 100, e, 2);
}
function aa(t, e) {
  return B(t.getFullYear() % 1e4, e, 4);
}
function ia(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? bt(t) : bt.ceil(t), B(t.getFullYear() % 1e4, e, 4);
}
function sa(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + B(e / 60 | 0, "0", 2) + B(e % 60, "0", 2);
}
function Be(t, e) {
  return B(t.getUTCDate(), e, 2);
}
function oa(t, e) {
  return B(t.getUTCHours(), e, 2);
}
function ca(t, e) {
  return B(t.getUTCHours() % 12 || 12, e, 2);
}
function la(t, e) {
  return B(1 + we.count(xt(t), t), e, 3);
}
function kn(t, e) {
  return B(t.getUTCMilliseconds(), e, 3);
}
function ua(t, e) {
  return kn(t, e) + "000";
}
function fa(t, e) {
  return B(t.getUTCMonth() + 1, e, 2);
}
function ha(t, e) {
  return B(t.getUTCMinutes(), e, 2);
}
function da(t, e) {
  return B(t.getUTCSeconds(), e, 2);
}
function ma(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function ga(t, e) {
  return B(mn.count(xt(t) - 1, t), e, 2);
}
function pn(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? Ut(t) : Ut.ceil(t);
}
function ya(t, e) {
  return t = pn(t), B(Ut.count(xt(t), t) + (xt(t).getUTCDay() === 4), e, 2);
}
function ka(t) {
  return t.getUTCDay();
}
function pa(t, e) {
  return B(Jt.count(xt(t) - 1, t), e, 2);
}
function va(t, e) {
  return B(t.getUTCFullYear() % 100, e, 2);
}
function Ta(t, e) {
  return t = pn(t), B(t.getUTCFullYear() % 100, e, 2);
}
function ba(t, e) {
  return B(t.getUTCFullYear() % 1e4, e, 4);
}
function xa(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? Ut(t) : Ut.ceil(t), B(t.getUTCFullYear() % 1e4, e, 4);
}
function wa() {
  return "+0000";
}
function Ze() {
  return "%";
}
function Xe(t) {
  return +t;
}
function qe(t) {
  return Math.floor(+t / 1e3);
}
var Mt, Kt;
Da({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Da(t) {
  return Mt = Dr(t), Kt = Mt.format, Mt.parse, Mt.utcFormat, Mt.utcParse, Mt;
}
function Ca(t) {
  return new Date(t);
}
function Ma(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function vn(t, e, n, r, a, i, s, k, M, T) {
  var g = Zn(), U = g.invert, D = g.domain, b = T(".%L"), q = T(":%S"), O = T("%I:%M"), C = T("%I %p"), I = T("%a %d"), V = T("%b %d"), W = T("%B"), Z = T("%Y");
  function Q(w) {
    return (M(w) < w ? b : k(w) < w ? q : s(w) < w ? O : i(w) < w ? C : r(w) < w ? a(w) < w ? I : V : n(w) < w ? W : Z)(w);
  }
  return g.invert = function(w) {
    return new Date(U(w));
  }, g.domain = function(w) {
    return arguments.length ? D(Array.from(w, Ma)) : D().map(Ca);
  }, g.ticks = function(w) {
    var H = D();
    return t(H[0], H[H.length - 1], w ?? 10);
  }, g.tickFormat = function(w, H) {
    return H == null ? Q : T(H);
  }, g.nice = function(w) {
    var H = D();
    return (!w || typeof w.range != "function") && (w = e(H[0], H[H.length - 1], w ?? 10)), w ? D(hr(H, w)) : g;
  }, g.copy = function() {
    return Xn(g, vn(t, e, n, r, a, i, s, k, M, T));
  }, g;
}
function _a() {
  return Gn.apply(vn(xr, wr, kt, Nt, Vt, Tt, Ot, Wt, vt, Kt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Tn = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Te, function() {
    var n = "day";
    return function(r, a, i) {
      var s = function(T) {
        return T.add(4 - T.isoWeekday(), n);
      }, k = a.prototype;
      k.isoWeekYear = function() {
        return s(this).year();
      }, k.isoWeek = function(T) {
        if (!this.$utils().u(T)) return this.add(7 * (T - this.isoWeek()), n);
        var g, U, D, b, q = s(this), O = (g = this.isoWeekYear(), U = this.$u, D = (U ? i.utc : i)().year(g).startOf("year"), b = 4 - D.isoWeekday(), D.isoWeekday() > 4 && (b += 7), D.add(b, n));
        return q.diff(O, "week") + 1;
      }, k.isoWeekday = function(T) {
        return this.$utils().u(T) ? this.day() || 7 : this.day(this.day() % 7 ? T : T - 7);
      };
      var M = k.startOf;
      k.startOf = function(T, g) {
        var U = this.$utils(), D = !!U.u(g) || g;
        return U.p(T) === "isoweek" ? D ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : M.bind(this)(T, g);
      };
    };
  });
})(Tn);
var Sa = Tn.exports;
const Fa = /* @__PURE__ */ be(Sa);
var bn = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Te, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, i = /\d\d/, s = /\d\d?/, k = /\d*[^-_:/,()\s\d]+/, M = {}, T = function(C) {
      return (C = +C) + (C > 68 ? 1900 : 2e3);
    }, g = function(C) {
      return function(I) {
        this[C] = +I;
      };
    }, U = [/[+-]\d\d:?(\d\d)?|Z/, function(C) {
      (this.zone || (this.zone = {})).offset = function(I) {
        if (!I || I === "Z") return 0;
        var V = I.match(/([+-]|\d\d)/g), W = 60 * V[1] + (+V[2] || 0);
        return W === 0 ? 0 : V[0] === "+" ? -W : W;
      }(C);
    }], D = function(C) {
      var I = M[C];
      return I && (I.indexOf ? I : I.s.concat(I.f));
    }, b = function(C, I) {
      var V, W = M.meridiem;
      if (W) {
        for (var Z = 1; Z <= 24; Z += 1) if (C.indexOf(W(Z, 0, I)) > -1) {
          V = Z > 12;
          break;
        }
      } else V = C === (I ? "pm" : "PM");
      return V;
    }, q = { A: [k, function(C) {
      this.afternoon = b(C, !1);
    }], a: [k, function(C) {
      this.afternoon = b(C, !0);
    }], Q: [a, function(C) {
      this.month = 3 * (C - 1) + 1;
    }], S: [a, function(C) {
      this.milliseconds = 100 * +C;
    }], SS: [i, function(C) {
      this.milliseconds = 10 * +C;
    }], SSS: [/\d{3}/, function(C) {
      this.milliseconds = +C;
    }], s: [s, g("seconds")], ss: [s, g("seconds")], m: [s, g("minutes")], mm: [s, g("minutes")], H: [s, g("hours")], h: [s, g("hours")], HH: [s, g("hours")], hh: [s, g("hours")], D: [s, g("day")], DD: [i, g("day")], Do: [k, function(C) {
      var I = M.ordinal, V = C.match(/\d+/);
      if (this.day = V[0], I) for (var W = 1; W <= 31; W += 1) I(W).replace(/\[|\]/g, "") === C && (this.day = W);
    }], w: [s, g("week")], ww: [i, g("week")], M: [s, g("month")], MM: [i, g("month")], MMM: [k, function(C) {
      var I = D("months"), V = (D("monthsShort") || I.map(function(W) {
        return W.slice(0, 3);
      })).indexOf(C) + 1;
      if (V < 1) throw new Error();
      this.month = V % 12 || V;
    }], MMMM: [k, function(C) {
      var I = D("months").indexOf(C) + 1;
      if (I < 1) throw new Error();
      this.month = I % 12 || I;
    }], Y: [/[+-]?\d+/, g("year")], YY: [i, function(C) {
      this.year = T(C);
    }], YYYY: [/\d{4}/, g("year")], Z: U, ZZ: U };
    function O(C) {
      var I, V;
      I = C, V = M && M.formats;
      for (var W = (C = I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_, S, p) {
        var Y = p && p.toUpperCase();
        return S || V[p] || n[p] || V[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(l, f, y) {
          return f || y.slice(1);
        });
      })).match(r), Z = W.length, Q = 0; Q < Z; Q += 1) {
        var w = W[Q], H = q[w], x = H && H[0], F = H && H[1];
        W[Q] = F ? { regex: x, parser: F } : w.replace(/^\[|\]$/g, "");
      }
      return function(_) {
        for (var S = {}, p = 0, Y = 0; p < Z; p += 1) {
          var l = W[p];
          if (typeof l == "string") Y += l.length;
          else {
            var f = l.regex, y = l.parser, m = _.slice(Y), E = f.exec(m)[0];
            y.call(S, E), _ = _.replace(E, "");
          }
        }
        return function(c) {
          var d = c.afternoon;
          if (d !== void 0) {
            var o = c.hours;
            d ? o < 12 && (c.hours += 12) : o === 12 && (c.hours = 0), delete c.afternoon;
          }
        }(S), S;
      };
    }
    return function(C, I, V) {
      V.p.customParseFormat = !0, C && C.parseTwoDigitYear && (T = C.parseTwoDigitYear);
      var W = I.prototype, Z = W.parse;
      W.parse = function(Q) {
        var w = Q.date, H = Q.utc, x = Q.args;
        this.$u = H;
        var F = x[1];
        if (typeof F == "string") {
          var _ = x[2] === !0, S = x[3] === !0, p = _ || S, Y = x[2];
          S && (Y = x[2]), M = this.$locale(), !_ && Y && (M = V.Ls[Y]), this.$d = function(m, E, c, d) {
            try {
              if (["x", "X"].indexOf(E) > -1) return new Date((E === "X" ? 1e3 : 1) * m);
              var o = O(E)(m), P = o.year, z = o.month, R = o.day, K = o.hours, G = o.minutes, $ = o.seconds, it = o.milliseconds, v = o.zone, A = o.week, N = /* @__PURE__ */ new Date(), u = R || (P || z ? 1 : N.getDate()), J = P || N.getFullYear(), L = 0;
              P && !z || (L = z > 0 ? z - 1 : N.getMonth());
              var j, X = K || 0, rt = G || 0, st = $ || 0, pt = it || 0;
              return v ? new Date(Date.UTC(J, L, u, X, rt, st, pt + 60 * v.offset * 1e3)) : c ? new Date(Date.UTC(J, L, u, X, rt, st, pt)) : (j = new Date(J, L, u, X, rt, st, pt), A && (j = d(j).week(A).toDate()), j);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(w, F, H, V), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), p && w != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), M = {};
        } else if (F instanceof Array) for (var l = F.length, f = 1; f <= l; f += 1) {
          x[1] = F[f - 1];
          var y = V.apply(this, x);
          if (y.isValid()) {
            this.$d = y.$d, this.$L = y.$L, this.init();
            break;
          }
          f === l && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else Z.call(this, Q);
      };
    };
  });
})(bn);
var Ya = bn.exports;
const Ua = /* @__PURE__ */ be(Ya);
var xn = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Te, function() {
    return function(n, r) {
      var a = r.prototype, i = a.format;
      a.format = function(s) {
        var k = this, M = this.$locale();
        if (!this.isValid()) return i.bind(this)(s);
        var T = this.$utils(), g = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(U) {
          switch (U) {
            case "Q":
              return Math.ceil((k.$M + 1) / 3);
            case "Do":
              return M.ordinal(k.$D);
            case "gggg":
              return k.weekYear();
            case "GGGG":
              return k.isoWeekYear();
            case "wo":
              return M.ordinal(k.week(), "W");
            case "w":
            case "ww":
              return T.s(k.week(), U === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return T.s(k.isoWeek(), U === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return T.s(String(k.$H === 0 ? 24 : k.$H), U === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(k.$d.getTime() / 1e3);
            case "x":
              return k.$d.getTime();
            case "z":
              return "[" + k.offsetName() + "]";
            case "zzz":
              return "[" + k.offsetName("long") + "]";
            default:
              return U;
          }
        });
        return i.bind(this)(g);
      };
    };
  });
})(xn);
var Ea = xn.exports;
const La = /* @__PURE__ */ be(Ea);
var ye = function() {
  var t = /* @__PURE__ */ h(function(Y, l, f, y) {
    for (f = f || {}, y = Y.length; y--; f[Y[y]] = l) ;
    return f;
  }, "o"), e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40], n = [1, 26], r = [1, 27], a = [1, 28], i = [1, 29], s = [1, 30], k = [1, 31], M = [1, 32], T = [1, 33], g = [1, 34], U = [1, 9], D = [1, 10], b = [1, 11], q = [1, 12], O = [1, 13], C = [1, 14], I = [1, 15], V = [1, 16], W = [1, 19], Z = [1, 20], Q = [1, 21], w = [1, 22], H = [1, 23], x = [1, 25], F = [1, 35], _ = {
    trace: /* @__PURE__ */ h(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, weekend: 19, weekend_friday: 20, weekend_saturday: 21, dateFormat: 22, inclusiveEndDates: 23, topAxis: 24, axisFormat: 25, tickInterval: 26, excludes: 27, includes: 28, todayMarker: 29, title: 30, acc_title: 31, acc_title_value: 32, acc_descr: 33, acc_descr_value: 34, acc_descr_multiline_value: 35, section: 36, clickStatement: 37, taskTxt: 38, taskData: 39, click: 40, callbackname: 41, callbackargs: 42, href: 43, clickStatementDebug: 44, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 20: "weekend_friday", 21: "weekend_saturday", 22: "dateFormat", 23: "inclusiveEndDates", 24: "topAxis", 25: "axisFormat", 26: "tickInterval", 27: "excludes", 28: "includes", 29: "todayMarker", 30: "title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "section", 38: "taskTxt", 39: "taskData", 40: "click", 41: "callbackname", 42: "callbackargs", 43: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]],
    performAction: /* @__PURE__ */ h(function(l, f, y, m, E, c, d) {
      var o = c.length - 1;
      switch (E) {
        case 1:
          return c[o - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          c[o - 1].push(c[o]), this.$ = c[o - 1];
          break;
        case 4:
        case 5:
          this.$ = c[o];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          m.setWeekday("monday");
          break;
        case 9:
          m.setWeekday("tuesday");
          break;
        case 10:
          m.setWeekday("wednesday");
          break;
        case 11:
          m.setWeekday("thursday");
          break;
        case 12:
          m.setWeekday("friday");
          break;
        case 13:
          m.setWeekday("saturday");
          break;
        case 14:
          m.setWeekday("sunday");
          break;
        case 15:
          m.setWeekend("friday");
          break;
        case 16:
          m.setWeekend("saturday");
          break;
        case 17:
          m.setDateFormat(c[o].substr(11)), this.$ = c[o].substr(11);
          break;
        case 18:
          m.enableInclusiveEndDates(), this.$ = c[o].substr(18);
          break;
        case 19:
          m.TopAxis(), this.$ = c[o].substr(8);
          break;
        case 20:
          m.setAxisFormat(c[o].substr(11)), this.$ = c[o].substr(11);
          break;
        case 21:
          m.setTickInterval(c[o].substr(13)), this.$ = c[o].substr(13);
          break;
        case 22:
          m.setExcludes(c[o].substr(9)), this.$ = c[o].substr(9);
          break;
        case 23:
          m.setIncludes(c[o].substr(9)), this.$ = c[o].substr(9);
          break;
        case 24:
          m.setTodayMarker(c[o].substr(12)), this.$ = c[o].substr(12);
          break;
        case 27:
          m.setDiagramTitle(c[o].substr(6)), this.$ = c[o].substr(6);
          break;
        case 28:
          this.$ = c[o].trim(), m.setAccTitle(this.$);
          break;
        case 29:
        case 30:
          this.$ = c[o].trim(), m.setAccDescription(this.$);
          break;
        case 31:
          m.addSection(c[o].substr(8)), this.$ = c[o].substr(8);
          break;
        case 33:
          m.addTask(c[o - 1], c[o]), this.$ = "task";
          break;
        case 34:
          this.$ = c[o - 1], m.setClickEvent(c[o - 1], c[o], null);
          break;
        case 35:
          this.$ = c[o - 2], m.setClickEvent(c[o - 2], c[o - 1], c[o]);
          break;
        case 36:
          this.$ = c[o - 2], m.setClickEvent(c[o - 2], c[o - 1], null), m.setLink(c[o - 2], c[o]);
          break;
        case 37:
          this.$ = c[o - 3], m.setClickEvent(c[o - 3], c[o - 2], c[o - 1]), m.setLink(c[o - 3], c[o]);
          break;
        case 38:
          this.$ = c[o - 2], m.setClickEvent(c[o - 2], c[o], null), m.setLink(c[o - 2], c[o - 1]);
          break;
        case 39:
          this.$ = c[o - 3], m.setClickEvent(c[o - 3], c[o - 1], c[o]), m.setLink(c[o - 3], c[o - 2]);
          break;
        case 40:
          this.$ = c[o - 1], m.setLink(c[o - 1], c[o]);
          break;
        case 41:
        case 47:
          this.$ = c[o - 1] + " " + c[o];
          break;
        case 42:
        case 43:
        case 45:
          this.$ = c[o - 2] + " " + c[o - 1] + " " + c[o];
          break;
        case 44:
        case 46:
          this.$ = c[o - 3] + " " + c[o - 2] + " " + c[o - 1] + " " + c[o];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: n, 13: r, 14: a, 15: i, 16: s, 17: k, 18: M, 19: 18, 20: T, 21: g, 22: U, 23: D, 24: b, 25: q, 26: O, 27: C, 28: I, 29: V, 30: W, 31: Z, 33: Q, 35: w, 36: H, 37: 24, 38: x, 40: F }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 36, 11: 17, 12: n, 13: r, 14: a, 15: i, 16: s, 17: k, 18: M, 19: 18, 20: T, 21: g, 22: U, 23: D, 24: b, 25: q, 26: O, 27: C, 28: I, 29: V, 30: W, 31: Z, 33: Q, 35: w, 36: H, 37: 24, 38: x, 40: F }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 17]), t(e, [2, 18]), t(e, [2, 19]), t(e, [2, 20]), t(e, [2, 21]), t(e, [2, 22]), t(e, [2, 23]), t(e, [2, 24]), t(e, [2, 25]), t(e, [2, 26]), t(e, [2, 27]), { 32: [1, 37] }, { 34: [1, 38] }, t(e, [2, 30]), t(e, [2, 31]), t(e, [2, 32]), { 39: [1, 39] }, t(e, [2, 8]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 11]), t(e, [2, 12]), t(e, [2, 13]), t(e, [2, 14]), t(e, [2, 15]), t(e, [2, 16]), { 41: [1, 40], 43: [1, 41] }, t(e, [2, 4]), t(e, [2, 28]), t(e, [2, 29]), t(e, [2, 33]), t(e, [2, 34], { 42: [1, 42], 43: [1, 43] }), t(e, [2, 40], { 41: [1, 44] }), t(e, [2, 35], { 43: [1, 45] }), t(e, [2, 36]), t(e, [2, 38], { 42: [1, 46] }), t(e, [2, 37]), t(e, [2, 39])],
    defaultActions: {},
    parseError: /* @__PURE__ */ h(function(l, f) {
      if (f.recoverable)
        this.trace(l);
      else {
        var y = new Error(l);
        throw y.hash = f, y;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ h(function(l) {
      var f = this, y = [0], m = [], E = [null], c = [], d = this.table, o = "", P = 0, z = 0, R = 2, K = 1, G = c.slice.call(arguments, 1), $ = Object.create(this.lexer), it = { yy: {} };
      for (var v in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, v) && (it.yy[v] = this.yy[v]);
      $.setInput(l, it.yy), it.yy.lexer = $, it.yy.parser = this, typeof $.yylloc > "u" && ($.yylloc = {});
      var A = $.yylloc;
      c.push(A);
      var N = $.options && $.options.ranges;
      typeof it.yy.parseError == "function" ? this.parseError = it.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function u(ot) {
        y.length = y.length - 2 * ot, E.length = E.length - ot, c.length = c.length - ot;
      }
      h(u, "popStack");
      function J() {
        var ot;
        return ot = m.pop() || $.lex() || K, typeof ot != "number" && (ot instanceof Array && (m = ot, ot = m.pop()), ot = f.symbols_[ot] || ot), ot;
      }
      h(J, "lex");
      for (var L, j, X, rt, st = {}, pt, lt, Ae, Bt; ; ) {
        if (j = y[y.length - 1], this.defaultActions[j] ? X = this.defaultActions[j] : ((L === null || typeof L > "u") && (L = J()), X = d[j] && d[j][L]), typeof X > "u" || !X.length || !X[0]) {
          var ne = "";
          Bt = [];
          for (pt in d[j])
            this.terminals_[pt] && pt > R && Bt.push("'" + this.terminals_[pt] + "'");
          $.showPosition ? ne = "Parse error on line " + (P + 1) + `:
` + $.showPosition() + `
Expecting ` + Bt.join(", ") + ", got '" + (this.terminals_[L] || L) + "'" : ne = "Parse error on line " + (P + 1) + ": Unexpected " + (L == K ? "end of input" : "'" + (this.terminals_[L] || L) + "'"), this.parseError(ne, {
            text: $.match,
            token: this.terminals_[L] || L,
            line: $.yylineno,
            loc: A,
            expected: Bt
          });
        }
        if (X[0] instanceof Array && X.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + j + ", token: " + L);
        switch (X[0]) {
          case 1:
            y.push(L), E.push($.yytext), c.push($.yylloc), y.push(X[1]), L = null, z = $.yyleng, o = $.yytext, P = $.yylineno, A = $.yylloc;
            break;
          case 2:
            if (lt = this.productions_[X[1]][1], st.$ = E[E.length - lt], st._$ = {
              first_line: c[c.length - (lt || 1)].first_line,
              last_line: c[c.length - 1].last_line,
              first_column: c[c.length - (lt || 1)].first_column,
              last_column: c[c.length - 1].last_column
            }, N && (st._$.range = [
              c[c.length - (lt || 1)].range[0],
              c[c.length - 1].range[1]
            ]), rt = this.performAction.apply(st, [
              o,
              z,
              P,
              it.yy,
              X[1],
              E,
              c
            ].concat(G)), typeof rt < "u")
              return rt;
            lt && (y = y.slice(0, -1 * lt * 2), E = E.slice(0, -1 * lt), c = c.slice(0, -1 * lt)), y.push(this.productions_[X[1]][0]), E.push(st.$), c.push(st._$), Ae = d[y[y.length - 2]][y[y.length - 1]], y.push(Ae);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }, "parse")
  }, S = /* @__PURE__ */ function() {
    var Y = {
      EOF: 1,
      parseError: /* @__PURE__ */ h(function(f, y) {
        if (this.yy.parser)
          this.yy.parser.parseError(f, y);
        else
          throw new Error(f);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ h(function(l, f) {
        return this.yy = f || this.yy || {}, this._input = l, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ h(function() {
        var l = this._input[0];
        this.yytext += l, this.yyleng++, this.offset++, this.match += l, this.matched += l;
        var f = l.match(/(?:\r\n?|\n).*/g);
        return f ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), l;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ h(function(l) {
        var f = l.length, y = l.split(/(?:\r\n?|\n)/g);
        this._input = l + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - f), this.offset -= f;
        var m = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
        var E = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: y ? (y.length === m.length ? this.yylloc.first_column : 0) + m[m.length - y.length].length - y[0].length : this.yylloc.first_column - f
        }, this.options.ranges && (this.yylloc.range = [E[0], E[0] + this.yyleng - f]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */ h(function() {
        return this._more = !0, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */ h(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */ h(function(l) {
        this.unput(this.match.slice(l));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ h(function() {
        var l = this.matched.substr(0, this.matched.length - this.match.length);
        return (l.length > 20 ? "..." : "") + l.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ h(function() {
        var l = this.match;
        return l.length < 20 && (l += this._input.substr(0, 20 - l.length)), (l.substr(0, 20) + (l.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ h(function() {
        var l = this.pastInput(), f = new Array(l.length + 1).join("-");
        return l + this.upcomingInput() + `
` + f + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ h(function(l, f) {
        var y, m, E;
        if (this.options.backtrack_lexer && (E = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (E.yylloc.range = this.yylloc.range.slice(0))), m = l[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + l[0].length
        }, this.yytext += l[0], this.match += l[0], this.matches = l, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(l[0].length), this.matched += l[0], y = this.performAction.call(this, this.yy, this, f, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), y)
          return y;
        if (this._backtrack) {
          for (var c in E)
            this[c] = E[c];
          return !1;
        }
        return !1;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ h(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var l, f, y, m;
        this._more || (this.yytext = "", this.match = "");
        for (var E = this._currentRules(), c = 0; c < E.length; c++)
          if (y = this._input.match(this.rules[E[c]]), y && (!f || y[0].length > f[0].length)) {
            if (f = y, m = c, this.options.backtrack_lexer) {
              if (l = this.test_match(y, E[c]), l !== !1)
                return l;
              if (this._backtrack) {
                f = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return f ? (l = this.test_match(f, E[m]), l !== !1 ? l : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ h(function() {
        var f = this.next();
        return f || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ h(function(f) {
        this.conditionStack.push(f);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ h(function() {
        var f = this.conditionStack.length - 1;
        return f > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ h(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ h(function(f) {
        return f = this.conditionStack.length - 1 - Math.abs(f || 0), f >= 0 ? this.conditionStack[f] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ h(function(f) {
        this.begin(f);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ h(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": !0 },
      performAction: /* @__PURE__ */ h(function(f, y, m, E) {
        switch (m) {
          case 0:
            return this.begin("open_directive"), "open_directive";
          case 1:
            return this.begin("acc_title"), 31;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 33;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            this.begin("href");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return 43;
          case 17:
            this.begin("callbackname");
            break;
          case 18:
            this.popState();
            break;
          case 19:
            this.popState(), this.begin("callbackargs");
            break;
          case 20:
            return 41;
          case 21:
            this.popState();
            break;
          case 22:
            return 42;
          case 23:
            this.begin("click");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return 40;
          case 26:
            return 4;
          case 27:
            return 22;
          case 28:
            return 23;
          case 29:
            return 24;
          case 30:
            return 25;
          case 31:
            return 26;
          case 32:
            return 28;
          case 33:
            return 27;
          case 34:
            return 29;
          case 35:
            return 12;
          case 36:
            return 13;
          case 37:
            return 14;
          case 38:
            return 15;
          case 39:
            return 16;
          case 40:
            return 17;
          case 41:
            return 18;
          case 42:
            return 20;
          case 43:
            return 21;
          case 44:
            return "date";
          case 45:
            return 30;
          case 46:
            return "accDescription";
          case 47:
            return 36;
          case 48:
            return 38;
          case 49:
            return 39;
          case 50:
            return ":";
          case 51:
            return 6;
          case 52:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: !1 }, acc_descr: { rules: [4], inclusive: !1 }, acc_title: { rules: [2], inclusive: !1 }, callbackargs: { rules: [21, 22], inclusive: !1 }, callbackname: { rules: [18, 19, 20], inclusive: !1 }, href: { rules: [15, 16], inclusive: !1 }, click: { rules: [24, 25], inclusive: !1 }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], inclusive: !0 } }
    };
    return Y;
  }();
  _.lexer = S;
  function p() {
    this.yy = {};
  }
  return h(p, "Parser"), p.prototype = _, _.Parser = p, new p();
}();
ye.parser = ye;
var Aa = ye;
at.extend(Fa);
at.extend(Ua);
at.extend(La);
var Ge = { friday: 5, saturday: 6 }, ut = "", De = "", Ce = void 0, Me = "", zt = [], Pt = [], _e = /* @__PURE__ */ new Map(), Se = [], te = [], Et = "", Fe = "", wn = ["active", "done", "crit", "milestone"], Ye = [], Rt = !1, Ue = !1, Ee = "sunday", ee = "saturday", ke = 0, Ia = /* @__PURE__ */ h(function() {
  Se = [], te = [], Et = "", Ye = [], Gt = 0, ve = void 0, jt = void 0, tt = [], ut = "", De = "", Fe = "", Ce = void 0, Me = "", zt = [], Pt = [], Rt = !1, Ue = !1, ke = 0, _e = /* @__PURE__ */ new Map(), Nn(), Ee = "sunday", ee = "saturday";
}, "clear"), Wa = /* @__PURE__ */ h(function(t) {
  De = t;
}, "setAxisFormat"), Oa = /* @__PURE__ */ h(function() {
  return De;
}, "getAxisFormat"), Ha = /* @__PURE__ */ h(function(t) {
  Ce = t;
}, "setTickInterval"), Na = /* @__PURE__ */ h(function() {
  return Ce;
}, "getTickInterval"), Va = /* @__PURE__ */ h(function(t) {
  Me = t;
}, "setTodayMarker"), za = /* @__PURE__ */ h(function() {
  return Me;
}, "getTodayMarker"), Pa = /* @__PURE__ */ h(function(t) {
  ut = t;
}, "setDateFormat"), Ra = /* @__PURE__ */ h(function() {
  Rt = !0;
}, "enableInclusiveEndDates"), Ba = /* @__PURE__ */ h(function() {
  return Rt;
}, "endDatesAreInclusive"), Za = /* @__PURE__ */ h(function() {
  Ue = !0;
}, "enableTopAxis"), Xa = /* @__PURE__ */ h(function() {
  return Ue;
}, "topAxisEnabled"), qa = /* @__PURE__ */ h(function(t) {
  Fe = t;
}, "setDisplayMode"), Ga = /* @__PURE__ */ h(function() {
  return Fe;
}, "getDisplayMode"), ja = /* @__PURE__ */ h(function() {
  return ut;
}, "getDateFormat"), Qa = /* @__PURE__ */ h(function(t) {
  zt = t.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), $a = /* @__PURE__ */ h(function() {
  return zt;
}, "getIncludes"), Ja = /* @__PURE__ */ h(function(t) {
  Pt = t.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), Ka = /* @__PURE__ */ h(function() {
  return Pt;
}, "getExcludes"), ti = /* @__PURE__ */ h(function() {
  return _e;
}, "getLinks"), ei = /* @__PURE__ */ h(function(t) {
  Et = t, Se.push(t);
}, "addSection"), ni = /* @__PURE__ */ h(function() {
  return Se;
}, "getSections"), ri = /* @__PURE__ */ h(function() {
  let t = je();
  const e = 10;
  let n = 0;
  for (; !t && n < e; )
    t = je(), n++;
  return te = tt, te;
}, "getTasks"), Dn = /* @__PURE__ */ h(function(t, e, n, r) {
  return r.includes(t.format(e.trim())) ? !1 : n.includes("weekends") && (t.isoWeekday() === Ge[ee] || t.isoWeekday() === Ge[ee] + 1) || n.includes(t.format("dddd").toLowerCase()) ? !0 : n.includes(t.format(e.trim()));
}, "isInvalidDate"), ai = /* @__PURE__ */ h(function(t) {
  Ee = t;
}, "setWeekday"), ii = /* @__PURE__ */ h(function() {
  return Ee;
}, "getWeekday"), si = /* @__PURE__ */ h(function(t) {
  ee = t;
}, "setWeekend"), Cn = /* @__PURE__ */ h(function(t, e, n, r) {
  if (!n.length || t.manualEndTime)
    return;
  let a;
  t.startTime instanceof Date ? a = at(t.startTime) : a = at(t.startTime, e, !0), a = a.add(1, "d");
  let i;
  t.endTime instanceof Date ? i = at(t.endTime) : i = at(t.endTime, e, !0);
  const [s, k] = oi(
    a,
    i,
    e,
    n,
    r
  );
  t.endTime = s.toDate(), t.renderEndTime = k;
}, "checkTaskDates"), oi = /* @__PURE__ */ h(function(t, e, n, r, a) {
  let i = !1, s = null;
  for (; t <= e; )
    i || (s = e.toDate()), i = Dn(t, n, r, a), i && (e = e.add(1, "d")), t = t.add(1, "d");
  return [e, s];
}, "fixTaskDates"), pe = /* @__PURE__ */ h(function(t, e, n) {
  n = n.trim();
  const a = /^after\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (a !== null) {
    let s = null;
    for (const M of a.groups.ids.split(" ")) {
      let T = Ct(M);
      T !== void 0 && (!s || T.endTime > s.endTime) && (s = T);
    }
    if (s)
      return s.endTime;
    const k = /* @__PURE__ */ new Date();
    return k.setHours(0, 0, 0, 0), k;
  }
  let i = at(n, e.trim(), !0);
  if (i.isValid())
    return i.toDate();
  {
    Qt.debug("Invalid date:" + n), Qt.debug("With date format:" + e.trim());
    const s = new Date(n);
    if (s === void 0 || isNaN(s.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    s.getFullYear() < -1e4 || s.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return s;
  }
}, "getStartDate"), Mn = /* @__PURE__ */ h(function(t) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, "parseDuration"), _n = /* @__PURE__ */ h(function(t, e, n, r = !1) {
  n = n.trim();
  const i = /^until\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (i !== null) {
    let g = null;
    for (const D of i.groups.ids.split(" ")) {
      let b = Ct(D);
      b !== void 0 && (!g || b.startTime < g.startTime) && (g = b);
    }
    if (g)
      return g.startTime;
    const U = /* @__PURE__ */ new Date();
    return U.setHours(0, 0, 0, 0), U;
  }
  let s = at(n, e.trim(), !0);
  if (s.isValid())
    return r && (s = s.add(1, "d")), s.toDate();
  let k = at(t);
  const [M, T] = Mn(n);
  if (!Number.isNaN(M)) {
    const g = k.add(M, T);
    g.isValid() && (k = g);
  }
  return k.toDate();
}, "getEndDate"), Gt = 0, Ft = /* @__PURE__ */ h(function(t) {
  return t === void 0 ? (Gt = Gt + 1, "task" + Gt) : t;
}, "parseId"), ci = /* @__PURE__ */ h(function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), a = {};
  Le(r, a, wn);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
  let i = "";
  switch (r.length) {
    case 1:
      a.id = Ft(), a.startTime = t.endTime, i = r[0];
      break;
    case 2:
      a.id = Ft(), a.startTime = pe(void 0, ut, r[0]), i = r[1];
      break;
    case 3:
      a.id = Ft(r[0]), a.startTime = pe(void 0, ut, r[1]), i = r[2];
      break;
  }
  return i && (a.endTime = _n(a.startTime, ut, i, Rt), a.manualEndTime = at(i, "YYYY-MM-DD", !0).isValid(), Cn(a, ut, Pt, zt)), a;
}, "compileData"), li = /* @__PURE__ */ h(function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), a = {};
  Le(r, a, wn);
  for (let i = 0; i < r.length; i++)
    r[i] = r[i].trim();
  switch (r.length) {
    case 1:
      a.id = Ft(), a.startTime = {
        type: "prevTaskEnd",
        id: t
      }, a.endTime = {
        data: r[0]
      };
      break;
    case 2:
      a.id = Ft(), a.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, a.endTime = {
        data: r[1]
      };
      break;
    case 3:
      a.id = Ft(r[0]), a.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, a.endTime = {
        data: r[2]
      };
      break;
  }
  return a;
}, "parseData"), ve, jt, tt = [], Sn = {}, ui = /* @__PURE__ */ h(function(t, e) {
  const n = {
    section: Et,
    type: Et,
    processed: !1,
    manualEndTime: !1,
    renderEndTime: null,
    raw: { data: e },
    task: t,
    classes: []
  }, r = li(jt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = jt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = ke, ke++;
  const a = tt.push(n);
  jt = n.id, Sn[n.id] = a - 1;
}, "addTask"), Ct = /* @__PURE__ */ h(function(t) {
  const e = Sn[t];
  return tt[e];
}, "findTaskById"), fi = /* @__PURE__ */ h(function(t, e) {
  const n = {
    section: Et,
    type: Et,
    description: t,
    task: t,
    classes: []
  }, r = ci(ve, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, ve = n, te.push(n);
}, "addTaskOrg"), je = /* @__PURE__ */ h(function() {
  const t = /* @__PURE__ */ h(function(n) {
    const r = tt[n];
    let a = "";
    switch (tt[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const i = Ct(r.prevTaskId);
        r.startTime = i.endTime;
        break;
      }
      case "getStartDate":
        a = pe(void 0, ut, tt[n].raw.startTime.startData), a && (tt[n].startTime = a);
        break;
    }
    return tt[n].startTime && (tt[n].endTime = _n(
      tt[n].startTime,
      ut,
      tt[n].raw.endTime.data,
      Rt
    ), tt[n].endTime && (tt[n].processed = !0, tt[n].manualEndTime = at(
      tt[n].raw.endTime.data,
      "YYYY-MM-DD",
      !0
    ).isValid(), Cn(tt[n], ut, Pt, zt))), tt[n].processed;
  }, "compileTask");
  let e = !0;
  for (const [n, r] of tt.entries())
    t(n), e = e && r.processed;
  return e;
}, "compileTasks"), hi = /* @__PURE__ */ h(function(t, e) {
  let n = e;
  _t().securityLevel !== "loose" && (n = Vn(e)), t.split(",").forEach(function(r) {
    Ct(r) !== void 0 && (Yn(r, () => {
      window.open(n, "_self");
    }), _e.set(r, n));
  }), Fn(t, "clickable");
}, "setLink"), Fn = /* @__PURE__ */ h(function(t, e) {
  t.split(",").forEach(function(n) {
    let r = Ct(n);
    r !== void 0 && r.classes.push(e);
  });
}, "setClass"), di = /* @__PURE__ */ h(function(t, e, n) {
  if (_t().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let i = 0; i < r.length; i++) {
      let s = r[i].trim();
      s.startsWith('"') && s.endsWith('"') && (s = s.substr(1, s.length - 2)), r[i] = s;
    }
  }
  r.length === 0 && r.push(t), Ct(t) !== void 0 && Yn(t, () => {
    Rn.runFunc(e, ...r);
  });
}, "setClickFun"), Yn = /* @__PURE__ */ h(function(t, e) {
  Ye.push(
    function() {
      const n = document.querySelector(`[id="${t}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
}, "pushFun"), mi = /* @__PURE__ */ h(function(t, e, n) {
  t.split(",").forEach(function(r) {
    di(r, e, n);
  }), Fn(t, "clickable");
}, "setClickEvent"), gi = /* @__PURE__ */ h(function(t) {
  Ye.forEach(function(e) {
    e(t);
  });
}, "bindFunctions"), yi = {
  getConfig: /* @__PURE__ */ h(() => _t().gantt, "getConfig"),
  clear: Ia,
  setDateFormat: Pa,
  getDateFormat: ja,
  enableInclusiveEndDates: Ra,
  endDatesAreInclusive: Ba,
  enableTopAxis: Za,
  topAxisEnabled: Xa,
  setAxisFormat: Wa,
  getAxisFormat: Oa,
  setTickInterval: Ha,
  getTickInterval: Na,
  setTodayMarker: Va,
  getTodayMarker: za,
  setAccTitle: Ln,
  getAccTitle: An,
  setDiagramTitle: In,
  getDiagramTitle: Wn,
  setDisplayMode: qa,
  getDisplayMode: Ga,
  setAccDescription: On,
  getAccDescription: Hn,
  addSection: ei,
  getSections: ni,
  getTasks: ri,
  addTask: ui,
  findTaskById: Ct,
  addTaskOrg: fi,
  setIncludes: Qa,
  getIncludes: $a,
  setExcludes: Ja,
  getExcludes: Ka,
  setClickEvent: mi,
  setLink: hi,
  getLinks: ti,
  bindFunctions: gi,
  parseDuration: Mn,
  isInvalidDate: Dn,
  setWeekday: ai,
  getWeekday: ii,
  setWeekend: si
};
function Le(t, e, n) {
  let r = !0;
  for (; r; )
    r = !1, n.forEach(function(a) {
      const i = "^\\s*" + a + "\\s*$", s = new RegExp(i);
      t[0].match(s) && (e[a] = !0, t.shift(1), r = !0);
    });
}
h(Le, "getTaskTags");
var ki = /* @__PURE__ */ h(function() {
  Qt.debug("Something is calling, setConf, remove the call");
}, "setConf"), Qe = {
  monday: Ht,
  tuesday: un,
  wednesday: fn,
  thursday: bt,
  friday: hn,
  saturday: dn,
  sunday: Vt
}, pi = /* @__PURE__ */ h((t, e) => {
  let n = [...t].map(() => -1 / 0), r = [...t].sort((i, s) => i.startTime - s.startTime || i.order - s.order), a = 0;
  for (const i of r)
    for (let s = 0; s < n.length; s++)
      if (i.startTime >= n[s]) {
        n[s] = i.endTime, i.order = s + e, s > a && (a = s);
        break;
      }
  return a;
}, "getMaxIntersections"), ht, vi = /* @__PURE__ */ h(function(t, e, n, r) {
  const a = _t().gantt, i = _t().securityLevel;
  let s;
  i === "sandbox" && (s = Zt("#i" + e));
  const k = i === "sandbox" ? Zt(s.nodes()[0].contentDocument.body) : Zt("body"), M = i === "sandbox" ? s.nodes()[0].contentDocument : document, T = M.getElementById(e);
  ht = T.parentElement.offsetWidth, ht === void 0 && (ht = 1200), a.useWidth !== void 0 && (ht = a.useWidth);
  const g = r.db.getTasks();
  let U = [];
  for (const x of g)
    U.push(x.type);
  U = H(U);
  const D = {};
  let b = 2 * a.topPadding;
  if (r.db.getDisplayMode() === "compact" || a.displayMode === "compact") {
    const x = {};
    for (const _ of g)
      x[_.section] === void 0 ? x[_.section] = [_] : x[_.section].push(_);
    let F = 0;
    for (const _ of Object.keys(x)) {
      const S = pi(x[_], F) + 1;
      F += S, b += S * (a.barHeight + a.barGap), D[_] = S;
    }
  } else {
    b += g.length * (a.barHeight + a.barGap);
    for (const x of U)
      D[x] = g.filter((F) => F.type === x).length;
  }
  T.setAttribute("viewBox", "0 0 " + ht + " " + b);
  const q = k.select(`[id="${e}"]`), O = _a().domain([
    Qn(g, function(x) {
      return x.startTime;
    }),
    jn(g, function(x) {
      return x.endTime;
    })
  ]).rangeRound([0, ht - a.leftPadding - a.rightPadding]);
  function C(x, F) {
    const _ = x.startTime, S = F.startTime;
    let p = 0;
    return _ > S ? p = 1 : _ < S && (p = -1), p;
  }
  h(C, "taskCompare"), g.sort(C), I(g, ht, b), zn(q, b, ht, a.useMaxWidth), q.append("text").text(r.db.getDiagramTitle()).attr("x", ht / 2).attr("y", a.titleTopMargin).attr("class", "titleText");
  function I(x, F, _) {
    const S = a.barHeight, p = S + a.barGap, Y = a.topPadding, l = a.leftPadding, f = qn().domain([0, U.length]).range(["#00B9FA", "#F95002"]).interpolate(fr);
    W(
      p,
      Y,
      l,
      F,
      _,
      x,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), Z(l, Y, F, _), V(x, p, Y, l, S, f, F), Q(p, Y), w(l, Y, F, _);
  }
  h(I, "makeGantt");
  function V(x, F, _, S, p, Y, l) {
    const y = [...new Set(x.map((d) => d.order))].map((d) => x.find((o) => o.order === d));
    q.append("g").selectAll("rect").data(y).enter().append("rect").attr("x", 0).attr("y", function(d, o) {
      return o = d.order, o * F + _ - 2;
    }).attr("width", function() {
      return l - a.rightPadding / 2;
    }).attr("height", F).attr("class", function(d) {
      for (const [o, P] of U.entries())
        if (d.type === P)
          return "section section" + o % a.numberSectionStyles;
      return "section section0";
    });
    const m = q.append("g").selectAll("rect").data(x).enter(), E = r.db.getLinks();
    if (m.append("rect").attr("id", function(d) {
      return d.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(d) {
      return d.milestone ? O(d.startTime) + S + 0.5 * (O(d.endTime) - O(d.startTime)) - 0.5 * p : O(d.startTime) + S;
    }).attr("y", function(d, o) {
      return o = d.order, o * F + _;
    }).attr("width", function(d) {
      return d.milestone ? p : O(d.renderEndTime || d.endTime) - O(d.startTime);
    }).attr("height", p).attr("transform-origin", function(d, o) {
      return o = d.order, (O(d.startTime) + S + 0.5 * (O(d.endTime) - O(d.startTime))).toString() + "px " + (o * F + _ + 0.5 * p).toString() + "px";
    }).attr("class", function(d) {
      const o = "task";
      let P = "";
      d.classes.length > 0 && (P = d.classes.join(" "));
      let z = 0;
      for (const [K, G] of U.entries())
        d.type === G && (z = K % a.numberSectionStyles);
      let R = "";
      return d.active ? d.crit ? R += " activeCrit" : R = " active" : d.done ? d.crit ? R = " doneCrit" : R = " done" : d.crit && (R += " crit"), R.length === 0 && (R = " task"), d.milestone && (R = " milestone " + R), R += z, R += " " + P, o + R;
    }), m.append("text").attr("id", function(d) {
      return d.id + "-text";
    }).text(function(d) {
      return d.task;
    }).attr("font-size", a.fontSize).attr("x", function(d) {
      let o = O(d.startTime), P = O(d.renderEndTime || d.endTime);
      d.milestone && (o += 0.5 * (O(d.endTime) - O(d.startTime)) - 0.5 * p), d.milestone && (P = o + p);
      const z = this.getBBox().width;
      return z > P - o ? P + z + 1.5 * a.leftPadding > l ? o + S - 5 : P + S + 5 : (P - o) / 2 + o + S;
    }).attr("y", function(d, o) {
      return o = d.order, o * F + a.barHeight / 2 + (a.fontSize / 2 - 2) + _;
    }).attr("text-height", p).attr("class", function(d) {
      const o = O(d.startTime);
      let P = O(d.endTime);
      d.milestone && (P = o + p);
      const z = this.getBBox().width;
      let R = "";
      d.classes.length > 0 && (R = d.classes.join(" "));
      let K = 0;
      for (const [$, it] of U.entries())
        d.type === it && (K = $ % a.numberSectionStyles);
      let G = "";
      return d.active && (d.crit ? G = "activeCritText" + K : G = "activeText" + K), d.done ? d.crit ? G = G + " doneCritText" + K : G = G + " doneText" + K : d.crit && (G = G + " critText" + K), d.milestone && (G += " milestoneText"), z > P - o ? P + z + 1.5 * a.leftPadding > l ? R + " taskTextOutsideLeft taskTextOutside" + K + " " + G : R + " taskTextOutsideRight taskTextOutside" + K + " " + G + " width-" + z : R + " taskText taskText" + K + " " + G + " width-" + z;
    }), _t().securityLevel === "sandbox") {
      let d;
      d = Zt("#i" + e);
      const o = d.nodes()[0].contentDocument;
      m.filter(function(P) {
        return E.has(P.id);
      }).each(function(P) {
        var z = o.querySelector("#" + P.id), R = o.querySelector("#" + P.id + "-text");
        const K = z.parentNode;
        var G = o.createElement("a");
        G.setAttribute("xlink:href", E.get(P.id)), G.setAttribute("target", "_top"), K.appendChild(G), G.appendChild(z), G.appendChild(R);
      });
    }
  }
  h(V, "drawRects");
  function W(x, F, _, S, p, Y, l, f) {
    if (l.length === 0 && f.length === 0)
      return;
    let y, m;
    for (const { startTime: z, endTime: R } of Y)
      (y === void 0 || z < y) && (y = z), (m === void 0 || R > m) && (m = R);
    if (!y || !m)
      return;
    if (at(m).diff(at(y), "year") > 5) {
      Qt.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const E = r.db.getDateFormat(), c = [];
    let d = null, o = at(y);
    for (; o.valueOf() <= m; )
      r.db.isInvalidDate(o, E, l, f) ? d ? d.end = o : d = {
        start: o,
        end: o
      } : d && (c.push(d), d = null), o = o.add(1, "d");
    q.append("g").selectAll("rect").data(c).enter().append("rect").attr("id", function(z) {
      return "exclude-" + z.start.format("YYYY-MM-DD");
    }).attr("x", function(z) {
      return O(z.start) + _;
    }).attr("y", a.gridLineStartPadding).attr("width", function(z) {
      const R = z.end.add(1, "day");
      return O(R) - O(z.start);
    }).attr("height", p - F - a.gridLineStartPadding).attr("transform-origin", function(z, R) {
      return (O(z.start) + _ + 0.5 * (O(z.end) - O(z.start))).toString() + "px " + (R * x + 0.5 * p).toString() + "px";
    }).attr("class", "exclude-range");
  }
  h(W, "drawExcludeDays");
  function Z(x, F, _, S) {
    let p = ar(O).tickSize(-S + F + a.gridLineStartPadding).tickFormat(Kt(r.db.getAxisFormat() || a.axisFormat || "%Y-%m-%d"));
    const l = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || a.tickInterval
    );
    if (l !== null) {
      const f = l[1], y = l[2], m = r.db.getWeekday() || a.weekday;
      switch (y) {
        case "millisecond":
          p.ticks(Yt.every(f));
          break;
        case "second":
          p.ticks(vt.every(f));
          break;
        case "minute":
          p.ticks(Wt.every(f));
          break;
        case "hour":
          p.ticks(Ot.every(f));
          break;
        case "day":
          p.ticks(Tt.every(f));
          break;
        case "week":
          p.ticks(Qe[m].every(f));
          break;
        case "month":
          p.ticks(Nt.every(f));
          break;
      }
    }
    if (q.append("g").attr("class", "grid").attr("transform", "translate(" + x + ", " + (S - 50) + ")").call(p).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || a.topAxis) {
      let f = rr(O).tickSize(-S + F + a.gridLineStartPadding).tickFormat(Kt(r.db.getAxisFormat() || a.axisFormat || "%Y-%m-%d"));
      if (l !== null) {
        const y = l[1], m = l[2], E = r.db.getWeekday() || a.weekday;
        switch (m) {
          case "millisecond":
            f.ticks(Yt.every(y));
            break;
          case "second":
            f.ticks(vt.every(y));
            break;
          case "minute":
            f.ticks(Wt.every(y));
            break;
          case "hour":
            f.ticks(Ot.every(y));
            break;
          case "day":
            f.ticks(Tt.every(y));
            break;
          case "week":
            f.ticks(Qe[E].every(y));
            break;
          case "month":
            f.ticks(Nt.every(y));
            break;
        }
      }
      q.append("g").attr("class", "grid").attr("transform", "translate(" + x + ", " + F + ")").call(f).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  h(Z, "makeGrid");
  function Q(x, F) {
    let _ = 0;
    const S = Object.keys(D).map((p) => [p, D[p]]);
    q.append("g").selectAll("text").data(S).enter().append(function(p) {
      const Y = p[0].split(Pn.lineBreakRegex), l = -(Y.length - 1) / 2, f = M.createElementNS("http://www.w3.org/2000/svg", "text");
      f.setAttribute("dy", l + "em");
      for (const [y, m] of Y.entries()) {
        const E = M.createElementNS("http://www.w3.org/2000/svg", "tspan");
        E.setAttribute("alignment-baseline", "central"), E.setAttribute("x", "10"), y > 0 && E.setAttribute("dy", "1em"), E.textContent = m, f.appendChild(E);
      }
      return f;
    }).attr("x", 10).attr("y", function(p, Y) {
      if (Y > 0)
        for (let l = 0; l < Y; l++)
          return _ += S[Y - 1][1], p[1] * x / 2 + _ * x + F;
      else
        return p[1] * x / 2 + F;
    }).attr("font-size", a.sectionFontSize).attr("class", function(p) {
      for (const [Y, l] of U.entries())
        if (p[0] === l)
          return "sectionTitle sectionTitle" + Y % a.numberSectionStyles;
      return "sectionTitle";
    });
  }
  h(Q, "vertLabels");
  function w(x, F, _, S) {
    const p = r.db.getTodayMarker();
    if (p === "off")
      return;
    const Y = q.append("g").attr("class", "today"), l = /* @__PURE__ */ new Date(), f = Y.append("line");
    f.attr("x1", O(l) + x).attr("x2", O(l) + x).attr("y1", a.titleTopMargin).attr("y2", S - a.titleTopMargin).attr("class", "today"), p !== "" && f.attr("style", p.replace(/,/g, ";"));
  }
  h(w, "drawToday");
  function H(x) {
    const F = {}, _ = [];
    for (let S = 0, p = x.length; S < p; ++S)
      Object.prototype.hasOwnProperty.call(F, x[S]) || (F[x[S]] = !0, _.push(x[S]));
    return _;
  }
  h(H, "checkUnique");
}, "draw"), Ti = {
  setConf: ki,
  draw: vi
}, bi = /* @__PURE__ */ h((t) => `
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor || t.textColor};
    font-family: ${t.fontFamily};
  }
`, "getStyles"), xi = bi, _i = {
  parser: Aa,
  db: yi,
  renderer: Ti,
  styles: xi
};
export {
  _i as diagram
};
