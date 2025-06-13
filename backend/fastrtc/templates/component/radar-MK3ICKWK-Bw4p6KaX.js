var ku = Object.defineProperty;
var Su = (n, e, t) => e in n ? ku(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Qe = (n, e, t) => Su(n, typeof e != "symbol" ? e + "" : e, t);
import { bw as xu, bx as Iu, aN as vl, bg as $u, aR as Cu, aO as ee, az as Nu, aA as pa, b6 as wu, b9 as Al, ba as El, bl as ma, b7 as _u, aC as gt, aD as D, aP as ga, aJ as Lu } from "./mermaid.core-Cmyps_S7.js";
import { k as Wt, j as Ms, g as Jt, S as Ou, w as bu, x as Pu, c as kl, v as z, y as Sl, l as Mu, z as Du, A as Fu, B as Gu, C as Uu, a as xl, d as C, i as qe, r as oe, f as Se, D as Y } from "./_baseUniq-BN26mYqf.js";
import { j as Ds, m as x, d as Bu, f as Ne, g as jt, i as Fs, h as N, l as Kt, e as Vu } from "./_basePickBy-Bz_aTL3_.js";
import { c as ne } from "./clone-Bt-5RraT.js";
var Wu = Object.prototype, ju = Wu.hasOwnProperty, ke = xu(function(n, e) {
  if (Iu(e) || vl(e)) {
    $u(e, Wt(e), n);
    return;
  }
  for (var t in e)
    ju.call(e, t) && Cu(n, t, e[t]);
});
function Il(n, e, t) {
  var r = -1, i = n.length;
  e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = n[r + e];
  return s;
}
function Xn(n) {
  for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
    var s = n[e];
    s && (i[r++] = s);
  }
  return i;
}
function Ku(n, e, t, r) {
  for (var i = -1, s = n == null ? 0 : n.length; ++i < s; ) {
    var a = n[i];
    e(r, a, t(a), n);
  }
  return r;
}
function Hu(n, e, t, r) {
  return Ms(n, function(i, s, a) {
    e(r, i, t(i), a);
  }), r;
}
function zu(n, e) {
  return function(t, r) {
    var i = ee(t) ? Ku : Hu, s = e ? e() : {};
    return i(t, n, Jt(r), s);
  };
}
var qu = 200;
function Yu(n, e, t, r) {
  var i = -1, s = bu, a = !0, o = n.length, l = [], c = e.length;
  if (!o)
    return l;
  e.length >= qu && (s = Pu, a = !1, e = new Ou(e));
  e:
    for (; ++i < o; ) {
      var u = n[i], d = u;
      if (u = u !== 0 ? u : 0, a && d === d) {
        for (var h = c; h--; )
          if (e[h] === d)
            continue e;
        l.push(u);
      } else s(e, d, r) || l.push(u);
    }
  return l;
}
var oi = Nu(function(n, e) {
  return pa(n) ? Yu(n, kl(e, 1, pa, !0)) : [];
});
function J(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : Ds(e), Il(n, e < 0 ? 0 : e, r)) : [];
}
function Kn(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : Ds(e), e = r - e, Il(n, 0, e < 0 ? 0 : e)) : [];
}
function Xu(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r; )
    if (!e(n[t], t, n))
      return !1;
  return !0;
}
function Ju(n, e) {
  var t = !0;
  return Ms(n, function(r, i, s) {
    return t = !!e(r, i, s), t;
  }), t;
}
function be(n, e, t) {
  var r = ee(n) ? Xu : Ju;
  return r(n, Jt(e));
}
function Pe(n) {
  return n && n.length ? n[0] : void 0;
}
function Ee(n, e) {
  return kl(x(n, e));
}
var Qu = Object.prototype, Zu = Qu.hasOwnProperty, ed = zu(function(n, e, t) {
  Zu.call(n, t) ? n[t].push(e) : wu(n, t, [e]);
}), td = "[object String]";
function fe(n) {
  return typeof n == "string" || !ee(n) && Al(n) && El(n) == td;
}
var nd = Math.max;
function ue(n, e, t, r) {
  n = vl(n) ? n : z(n), t = t && !r ? Ds(t) : 0;
  var i = n.length;
  return t < 0 && (t = nd(i + t, 0)), fe(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && Sl(n, e, t) > -1;
}
function ya(n, e, t) {
  var r = n == null ? 0 : n.length;
  if (!r)
    return -1;
  var i = 0;
  return Sl(n, e, i);
}
var rd = "[object RegExp]";
function id(n) {
  return Al(n) && El(n) == rd;
}
var Ta = ma && ma.isRegExp, Ye = Ta ? _u(Ta) : id, sd = "Expected a function";
function ad(n) {
  if (typeof n != "function")
    throw new TypeError(sd);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !n.call(this);
      case 1:
        return !n.call(this, e[0]);
      case 2:
        return !n.call(this, e[0], e[1]);
      case 3:
        return !n.call(this, e[0], e[1], e[2]);
    }
    return !n.apply(this, e);
  };
}
function Me(n, e) {
  if (n == null)
    return {};
  var t = Mu(Du(n), function(r) {
    return [r];
  });
  return e = Jt(e), Bu(n, t, function(r, i) {
    return e(r, i[0]);
  });
}
function li(n, e) {
  var t = ee(n) ? Fu : Gu;
  return t(n, ad(Jt(e)));
}
function od(n, e) {
  var t;
  return Ms(n, function(r, i, s) {
    return t = e(r, i, s), !t;
  }), !!t;
}
function $l(n, e, t) {
  var r = ee(n) ? Uu : od;
  return r(n, Jt(e));
}
function Gs(n) {
  return n && n.length ? xl(n) : [];
}
function ld(n, e) {
  return n && n.length ? xl(n, Jt(e)) : [];
}
function ae(n) {
  return typeof n == "object" && n !== null && typeof n.$type == "string";
}
function Ue(n) {
  return typeof n == "object" && n !== null && typeof n.$refText == "string";
}
function cd(n) {
  return typeof n == "object" && n !== null && typeof n.name == "string" && typeof n.type == "string" && typeof n.path == "string";
}
function Er(n) {
  return typeof n == "object" && n !== null && ae(n.container) && Ue(n.reference) && typeof n.message == "string";
}
class Cl {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, t) {
    return ae(e) && this.isSubtype(e.$type, t);
  }
  isSubtype(e, t) {
    if (e === t)
      return !0;
    let r = this.subtypes[e];
    r || (r = this.subtypes[e] = {});
    const i = r[t];
    if (i !== void 0)
      return i;
    {
      const s = this.computeIsSubtype(e, t);
      return r[t] = s, s;
    }
  }
  getAllSubTypes(e) {
    const t = this.allSubtypes[e];
    if (t)
      return t;
    {
      const r = this.getAllTypes(), i = [];
      for (const s of r)
        this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
}
function Hn(n) {
  return typeof n == "object" && n !== null && Array.isArray(n.content);
}
function Nl(n) {
  return typeof n == "object" && n !== null && typeof n.tokenType == "object";
}
function wl(n) {
  return Hn(n) && typeof n.fullText == "string";
}
class Q {
  constructor(e, t) {
    this.startFn = e, this.nextFn = t;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let t = 0, r = e.next();
    for (; !r.done; )
      t++, r = e.next();
    return t;
  }
  toArray() {
    const e = [], t = this.iterator();
    let r;
    do
      r = t.next(), r.value !== void 0 && e.push(r.value);
    while (!r.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, t) {
    const r = this.map((i) => [
      e ? e(i) : i,
      t ? t(i) : i
    ]);
    return new Map(r);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new Q(() => ({ first: this.startFn(), firstDone: !1, iterator: e[Symbol.iterator]() }), (t) => {
      let r;
      if (!t.firstDone) {
        do
          if (r = this.nextFn(t.first), !r.done)
            return r;
        while (!r.done);
        t.firstDone = !0;
      }
      do
        if (r = t.iterator.next(), !r.done)
          return r;
      while (!r.done);
      return ve;
    });
  }
  join(e = ",") {
    const t = this.iterator();
    let r = "", i, s = !1;
    do
      i = t.next(), i.done || (s && (r += e), r += ud(i.value)), s = !0;
    while (!i.done);
    return r;
  }
  indexOf(e, t = 0) {
    const r = this.iterator();
    let i = 0, s = r.next();
    for (; !s.done; ) {
      if (i >= t && s.value === e)
        return i;
      s = r.next(), i++;
    }
    return -1;
  }
  every(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (!e(r.value))
        return !1;
      r = t.next();
    }
    return !0;
  }
  some(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return !0;
      r = t.next();
    }
    return !1;
  }
  forEach(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; )
      e(i.value, r), i = t.next(), r++;
  }
  map(e) {
    return new Q(this.startFn, (t) => {
      const { done: r, value: i } = this.nextFn(t);
      return r ? ve : { done: !1, value: e(i) };
    });
  }
  filter(e) {
    return new Q(this.startFn, (t) => {
      let r;
      do
        if (r = this.nextFn(t), !r.done && e(r.value))
          return r;
      while (!r.done);
      return ve;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, t) {
    const r = this.iterator();
    let i = t, s = r.next();
    for (; !s.done; )
      i === void 0 ? i = s.value : i = e(i, s.value), s = r.next();
    return i;
  }
  reduceRight(e, t) {
    return this.recursiveReduce(this.iterator(), e, t);
  }
  recursiveReduce(e, t, r) {
    const i = e.next();
    if (i.done)
      return r;
    const s = this.recursiveReduce(e, t, r);
    return s === void 0 ? i.value : t(s, i.value);
  }
  find(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return r.value;
      r = t.next();
    }
  }
  findIndex(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; ) {
      if (e(i.value))
        return r;
      i = t.next(), r++;
    }
    return -1;
  }
  includes(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (r.value === e)
        return !0;
      r = t.next();
    }
    return !1;
  }
  flatMap(e) {
    return new Q(() => ({ this: this.startFn() }), (t) => {
      do {
        if (t.iterator) {
          const s = t.iterator.next();
          if (s.done)
            t.iterator = void 0;
          else
            return s;
        }
        const { done: r, value: i } = this.nextFn(t.this);
        if (!r) {
          const s = e(i);
          if (Dr(s))
            t.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
        }
      } while (t.iterator);
      return ve;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const t = e > 1 ? this.flat(e - 1) : this;
    return new Q(() => ({ this: t.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const a = r.iterator.next();
          if (a.done)
            r.iterator = void 0;
          else
            return a;
        }
        const { done: i, value: s } = t.nextFn(r.this);
        if (!i)
          if (Dr(s))
            r.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
      } while (r.iterator);
      return ve;
    });
  }
  head() {
    const t = this.iterator().next();
    if (!t.done)
      return t.value;
  }
  tail(e = 1) {
    return new Q(() => {
      const t = this.startFn();
      for (let r = 0; r < e; r++)
        if (this.nextFn(t).done)
          return t;
      return t;
    }, this.nextFn);
  }
  limit(e) {
    return new Q(() => ({ size: 0, state: this.startFn() }), (t) => (t.size++, t.size > e ? ve : this.nextFn(t.state)));
  }
  distinct(e) {
    return new Q(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (t) => {
      let r;
      do
        if (r = this.nextFn(t.internalState), !r.done) {
          const i = e ? e(r.value) : r.value;
          if (!t.set.has(i))
            return t.set.add(i), r;
        }
      while (!r.done);
      return ve;
    });
  }
  exclude(e, t) {
    const r = /* @__PURE__ */ new Set();
    for (const i of e) {
      const s = t ? t(i) : i;
      r.add(s);
    }
    return this.filter((i) => {
      const s = t ? t(i) : i;
      return !r.has(s);
    });
  }
}
function ud(n) {
  return typeof n == "string" ? n : typeof n > "u" ? "undefined" : typeof n.toString == "function" ? n.toString() : Object.prototype.toString.call(n);
}
function Dr(n) {
  return !!n && typeof n[Symbol.iterator] == "function";
}
const dd = new Q(() => {
}, () => ve), ve = Object.freeze({ done: !0, value: void 0 });
function Z(...n) {
  if (n.length === 1) {
    const e = n[0];
    if (e instanceof Q)
      return e;
    if (Dr(e))
      return new Q(() => e[Symbol.iterator](), (t) => t.next());
    if (typeof e.length == "number")
      return new Q(() => ({ index: 0 }), (t) => t.index < e.length ? { done: !1, value: e[t.index++] } : ve);
  }
  return n.length > 1 ? new Q(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const t = e.iterator.next();
        if (!t.done)
          return t;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: !1, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < n.length) {
        const t = n[e.collIndex++];
        Dr(t) ? e.iterator = t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
      }
    } while (e.iterator || e.array || e.collIndex < n.length);
    return ve;
  }) : dd;
}
class Us extends Q {
  constructor(e, t, r) {
    super(() => ({
      iterators: r != null && r.includeRoot ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
      pruned: !1
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = !1); i.iterators.length > 0; ) {
        const a = i.iterators[i.iterators.length - 1].next();
        if (a.done)
          i.iterators.pop();
        else
          return i.iterators.push(t(a.value)[Symbol.iterator]()), a;
      }
      return ve;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = !0;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
}
var Ji;
(function(n) {
  function e(s) {
    return s.reduce((a, o) => a + o, 0);
  }
  n.sum = e;
  function t(s) {
    return s.reduce((a, o) => a * o, 0);
  }
  n.product = t;
  function r(s) {
    return s.reduce((a, o) => Math.min(a, o));
  }
  n.min = r;
  function i(s) {
    return s.reduce((a, o) => Math.max(a, o));
  }
  n.max = i;
})(Ji || (Ji = {}));
function Qi(n) {
  return new Us(n, (e) => Hn(e) ? e.content : [], { includeRoot: !0 });
}
function fd(n, e) {
  for (; n.container; )
    if (n = n.container, n === e)
      return !0;
  return !1;
}
function Zi(n) {
  return {
    start: {
      character: n.startColumn - 1,
      line: n.startLine - 1
    },
    end: {
      character: n.endColumn,
      // endColumn uses the correct index
      line: n.endLine - 1
    }
  };
}
function Fr(n) {
  if (!n)
    return;
  const { offset: e, end: t, range: r } = n;
  return {
    range: r,
    offset: e,
    end: t,
    length: t - e
  };
}
var Ke;
(function(n) {
  n[n.Before = 0] = "Before", n[n.After = 1] = "After", n[n.OverlapFront = 2] = "OverlapFront", n[n.OverlapBack = 3] = "OverlapBack", n[n.Inside = 4] = "Inside", n[n.Outside = 5] = "Outside";
})(Ke || (Ke = {}));
function hd(n, e) {
  if (n.end.line < e.start.line || n.end.line === e.start.line && n.end.character <= e.start.character)
    return Ke.Before;
  if (n.start.line > e.end.line || n.start.line === e.end.line && n.start.character >= e.end.character)
    return Ke.After;
  const t = n.start.line > e.start.line || n.start.line === e.start.line && n.start.character >= e.start.character, r = n.end.line < e.end.line || n.end.line === e.end.line && n.end.character <= e.end.character;
  return t && r ? Ke.Inside : t ? Ke.OverlapBack : r ? Ke.OverlapFront : Ke.Outside;
}
function pd(n, e) {
  return hd(n, e) > Ke.After;
}
const md = /^[\w\p{L}]$/u;
function gd(n, e) {
  if (n) {
    const t = yd(n, !0);
    if (t && Ra(t, e))
      return t;
    if (wl(n)) {
      const r = n.content.findIndex((i) => !i.hidden);
      for (let i = r - 1; i >= 0; i--) {
        const s = n.content[i];
        if (Ra(s, e))
          return s;
      }
    }
  }
}
function Ra(n, e) {
  return Nl(n) && e.includes(n.tokenType.name);
}
function yd(n, e = !0) {
  for (; n.container; ) {
    const t = n.container;
    let r = t.content.indexOf(n);
    for (; r > 0; ) {
      r--;
      const i = t.content[r];
      if (e || !i.hidden)
        return i;
    }
    n = t;
  }
}
class _l extends Error {
  constructor(e, t) {
    super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
  }
}
function Jn(n) {
  throw new Error("Error! The input value was not handled.");
}
const ir = "AbstractRule", sr = "AbstractType", xi = "Condition", va = "TypeDefinition", Ii = "ValueLiteral", ln = "AbstractElement";
function Td(n) {
  return M.isInstance(n, ln);
}
const ar = "ArrayLiteral", or = "ArrayType", cn = "BooleanLiteral";
function Rd(n) {
  return M.isInstance(n, cn);
}
const un = "Conjunction";
function vd(n) {
  return M.isInstance(n, un);
}
const dn = "Disjunction";
function Ad(n) {
  return M.isInstance(n, dn);
}
const lr = "Grammar", $i = "GrammarImport", fn = "InferredType";
function Ll(n) {
  return M.isInstance(n, fn);
}
const hn = "Interface";
function Ol(n) {
  return M.isInstance(n, hn);
}
const Ci = "NamedArgument", pn = "Negation";
function Ed(n) {
  return M.isInstance(n, pn);
}
const cr = "NumberLiteral", ur = "Parameter", mn = "ParameterReference";
function kd(n) {
  return M.isInstance(n, mn);
}
const gn = "ParserRule";
function we(n) {
  return M.isInstance(n, gn);
}
const dr = "ReferenceType", kr = "ReturnType";
function Sd(n) {
  return M.isInstance(n, kr);
}
const yn = "SimpleType";
function xd(n) {
  return M.isInstance(n, yn);
}
const fr = "StringLiteral", xt = "TerminalRule";
function yt(n) {
  return M.isInstance(n, xt);
}
const Tn = "Type";
function bl(n) {
  return M.isInstance(n, Tn);
}
const Ni = "TypeAttribute", hr = "UnionType", Rn = "Action";
function ci(n) {
  return M.isInstance(n, Rn);
}
const vn = "Alternatives";
function Pl(n) {
  return M.isInstance(n, vn);
}
const An = "Assignment";
function ut(n) {
  return M.isInstance(n, An);
}
const En = "CharacterRange";
function Id(n) {
  return M.isInstance(n, En);
}
const kn = "CrossReference";
function Bs(n) {
  return M.isInstance(n, kn);
}
const Sn = "EndOfFile";
function $d(n) {
  return M.isInstance(n, Sn);
}
const xn = "Group";
function Vs(n) {
  return M.isInstance(n, xn);
}
const In = "Keyword";
function dt(n) {
  return M.isInstance(n, In);
}
const $n = "NegatedToken";
function Cd(n) {
  return M.isInstance(n, $n);
}
const Cn = "RegexToken";
function Nd(n) {
  return M.isInstance(n, Cn);
}
const Nn = "RuleCall";
function ft(n) {
  return M.isInstance(n, Nn);
}
const wn = "TerminalAlternatives";
function wd(n) {
  return M.isInstance(n, wn);
}
const _n = "TerminalGroup";
function _d(n) {
  return M.isInstance(n, _n);
}
const Ln = "TerminalRuleCall";
function Ld(n) {
  return M.isInstance(n, Ln);
}
const On = "UnorderedGroup";
function Ml(n) {
  return M.isInstance(n, On);
}
const bn = "UntilToken";
function Od(n) {
  return M.isInstance(n, bn);
}
const Pn = "Wildcard";
function bd(n) {
  return M.isInstance(n, Pn);
}
class Dl extends Cl {
  getAllTypes() {
    return [ln, ir, sr, Rn, vn, ar, or, An, cn, En, xi, un, kn, dn, Sn, lr, $i, xn, fn, hn, In, Ci, $n, pn, cr, ur, mn, gn, dr, Cn, kr, Nn, yn, fr, wn, _n, xt, Ln, Tn, Ni, va, hr, On, bn, Ii, Pn];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case Rn:
      case vn:
      case An:
      case En:
      case kn:
      case Sn:
      case xn:
      case In:
      case $n:
      case Cn:
      case Nn:
      case wn:
      case _n:
      case Ln:
      case On:
      case bn:
      case Pn:
        return this.isSubtype(ln, t);
      case ar:
      case cr:
      case fr:
        return this.isSubtype(Ii, t);
      case or:
      case dr:
      case yn:
      case hr:
        return this.isSubtype(va, t);
      case cn:
        return this.isSubtype(xi, t) || this.isSubtype(Ii, t);
      case un:
      case dn:
      case pn:
      case mn:
        return this.isSubtype(xi, t);
      case fn:
      case hn:
      case Tn:
        return this.isSubtype(sr, t);
      case gn:
        return this.isSubtype(ir, t) || this.isSubtype(sr, t);
      case xt:
        return this.isSubtype(ir, t);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return sr;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return ir;
      case "Grammar:usedGrammars":
        return lr;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return ur;
      case "TerminalRuleCall:rule":
        return xt;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case ln:
        return {
          name: ln,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case ar:
        return {
          name: ar,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case or:
        return {
          name: or,
          properties: [
            { name: "elementType" }
          ]
        };
      case cn:
        return {
          name: cn,
          properties: [
            { name: "true", defaultValue: !1 }
          ]
        };
      case un:
        return {
          name: un,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case dn:
        return {
          name: dn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case lr:
        return {
          name: lr,
          properties: [
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: !1 },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      case $i:
        return {
          name: $i,
          properties: [
            { name: "path" }
          ]
        };
      case fn:
        return {
          name: fn,
          properties: [
            { name: "name" }
          ]
        };
      case hn:
        return {
          name: hn,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case Ci:
        return {
          name: Ci,
          properties: [
            { name: "calledByName", defaultValue: !1 },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case pn:
        return {
          name: pn,
          properties: [
            { name: "value" }
          ]
        };
      case cr:
        return {
          name: cr,
          properties: [
            { name: "value" }
          ]
        };
      case ur:
        return {
          name: ur,
          properties: [
            { name: "name" }
          ]
        };
      case mn:
        return {
          name: mn,
          properties: [
            { name: "parameter" }
          ]
        };
      case gn:
        return {
          name: gn,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "definition" },
            { name: "entry", defaultValue: !1 },
            { name: "fragment", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: !1 }
          ]
        };
      case dr:
        return {
          name: dr,
          properties: [
            { name: "referenceType" }
          ]
        };
      case kr:
        return {
          name: kr,
          properties: [
            { name: "name" }
          ]
        };
      case yn:
        return {
          name: yn,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case fr:
        return {
          name: fr,
          properties: [
            { name: "value" }
          ]
        };
      case xt:
        return {
          name: xt,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: !1 },
            { name: "hidden", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case Tn:
        return {
          name: Tn,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case Ni:
        return {
          name: Ni,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case hr:
        return {
          name: hr,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case Rn:
        return {
          name: Rn,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case vn:
        return {
          name: vn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case An:
        return {
          name: An,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case En:
        return {
          name: En,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case kn:
        return {
          name: kn,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: !1 },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case Sn:
        return {
          name: Sn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case xn:
        return {
          name: xn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case In:
        return {
          name: In,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case $n:
        return {
          name: $n,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Cn:
        return {
          name: Cn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case Nn:
        return {
          name: Nn,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case wn:
        return {
          name: wn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case _n:
        return {
          name: _n,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Ln:
        return {
          name: Ln,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case On:
        return {
          name: On,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case bn:
        return {
          name: bn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Pn:
        return {
          name: Pn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}
const M = new Dl();
function Pd(n) {
  for (const [e, t] of Object.entries(n))
    e.startsWith("$") || (Array.isArray(t) ? t.forEach((r, i) => {
      ae(r) && (r.$container = n, r.$containerProperty = e, r.$containerIndex = i);
    }) : ae(t) && (t.$container = n, t.$containerProperty = e));
}
function ui(n, e) {
  let t = n;
  for (; t; ) {
    if (e(t))
      return t;
    t = t.$container;
  }
}
function et(n) {
  const t = es(n).$document;
  if (!t)
    throw new Error("AST node has no document.");
  return t;
}
function es(n) {
  for (; n.$container; )
    n = n.$container;
  return n;
}
function Ws(n, e) {
  if (!n)
    throw new Error("Node must be an AstNode.");
  const t = e == null ? void 0 : e.range;
  return new Q(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (r) => {
    for (; r.keyIndex < r.keys.length; ) {
      const i = r.keys[r.keyIndex];
      if (!i.startsWith("$")) {
        const s = n[i];
        if (ae(s)) {
          if (r.keyIndex++, Aa(s, t))
            return { done: !1, value: s };
        } else if (Array.isArray(s)) {
          for (; r.arrayIndex < s.length; ) {
            const a = r.arrayIndex++, o = s[a];
            if (ae(o) && Aa(o, t))
              return { done: !1, value: o };
          }
          r.arrayIndex = 0;
        }
      }
      r.keyIndex++;
    }
    return ve;
  });
}
function Qn(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new Us(n, (t) => Ws(t, e));
}
function $t(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new Us(n, (t) => Ws(t, e), { includeRoot: !0 });
}
function Aa(n, e) {
  var t;
  if (!e)
    return !0;
  const r = (t = n.$cstNode) === null || t === void 0 ? void 0 : t.range;
  return r ? pd(r, e) : !1;
}
function Fl(n) {
  return new Q(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const t = e.keys[e.keyIndex];
      if (!t.startsWith("$")) {
        const r = n[t];
        if (Ue(r))
          return e.keyIndex++, { done: !1, value: { reference: r, container: n, property: t } };
        if (Array.isArray(r)) {
          for (; e.arrayIndex < r.length; ) {
            const i = e.arrayIndex++, s = r[i];
            if (Ue(s))
              return { done: !1, value: { reference: s, container: n, property: t, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return ve;
  });
}
function Md(n, e) {
  const t = n.getTypeMetaData(e.$type), r = e;
  for (const i of t.properties)
    i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = Gl(i.defaultValue));
}
function Gl(n) {
  return Array.isArray(n) ? [...n.map(Gl)] : n;
}
function w(n) {
  return n.charCodeAt(0);
}
function wi(n, e) {
  Array.isArray(n) ? n.forEach(function(t) {
    e.push(t);
  }) : e.push(n);
}
function sn(n, e) {
  if (n[e] === !0)
    throw "duplicate flag " + e;
  n[e], n[e] = !0;
}
function St(n) {
  if (n === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function Dd() {
  throw Error("Internal Error - Should never get here!");
}
function Ea(n) {
  return n.type === "Character";
}
const Gr = [];
for (let n = w("0"); n <= w("9"); n++)
  Gr.push(n);
const Ur = [w("_")].concat(Gr);
for (let n = w("a"); n <= w("z"); n++)
  Ur.push(n);
for (let n = w("A"); n <= w("Z"); n++)
  Ur.push(n);
const ka = [
  w(" "),
  w("\f"),
  w(`
`),
  w("\r"),
  w("	"),
  w("\v"),
  w("	"),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w("\u2028"),
  w("\u2029"),
  w(" "),
  w(" "),
  w("　"),
  w("\uFEFF")
], Fd = /[0-9a-fA-F]/, pr = /[0-9]/, Gd = /[1-9]/;
class Ul {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const t = this.disjunction();
    this.consumeChar("/");
    const r = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: !1,
      ignoreCase: !1,
      multiLine: !1,
      unicode: !1,
      sticky: !1
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          sn(r, "global");
          break;
        case "i":
          sn(r, "ignoreCase");
          break;
        case "m":
          sn(r, "multiLine");
          break;
        case "u":
          sn(r, "unicode");
          break;
        case "y":
          sn(r, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: r,
      value: t,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], t = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(t) };
  }
  alternative() {
    const e = [], t = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(t) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      case "(":
        this.consumeChar("?");
        let t;
        switch (this.popChar()) {
          case "=":
            t = "Lookahead";
            break;
          case "!":
            t = "NegativeLookahead";
            break;
        }
        St(t);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: t,
          value: r,
          loc: this.loc(e)
        };
    }
    return Dd();
  }
  quantifier(e = !1) {
    let t;
    const r = this.idx;
    switch (this.popChar()) {
      case "*":
        t = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        t = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        t = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            t = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), t = {
              atLeast: i,
              atMost: s
            }) : t = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && t === void 0)
          return;
        St(t);
        break;
    }
    if (!(e === !0 && t === void 0) && St(t))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = !1) : t.greedy = !0, t.type = "Quantifier", t.loc = this.loc(r), t;
  }
  atom() {
    let e;
    const t = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), St(e))
      return e.loc = this.loc(t), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [w(`
`), w("\r"), w("\u2028"), w("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, t = !1;
    switch (this.popChar()) {
      case "d":
        e = Gr;
        break;
      case "D":
        e = Gr, t = !0;
        break;
      case "s":
        e = ka;
        break;
      case "S":
        e = ka, t = !0;
        break;
      case "w":
        e = Ur;
        break;
      case "W":
        e = Ur, t = !0;
        break;
    }
    if (St(e))
      return { type: "Set", value: e, complement: t };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = w("\f");
        break;
      case "n":
        e = w(`
`);
        break;
      case "r":
        e = w("\r");
        break;
      case "t":
        e = w("	");
        break;
      case "v":
        e = w("\v");
        break;
    }
    if (St(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === !1)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: w("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: w(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "\\":
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: w(e) };
    }
  }
  characterClass() {
    const e = [];
    let t = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = !0); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, Ea(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, Ea(i)) {
          if (i.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: i.value });
        } else
          wi(r.value, e), e.push(w("-")), wi(i.value, e);
      } else
        wi(r.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: t, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "b":
        return this.consumeChar("b"), { type: "Character", value: w("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = !0;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = !1;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const t = this.disjunction();
    this.consumeChar(")");
    const r = {
      type: "Group",
      capturing: e,
      value: t
    };
    return e && (r.idx = this.groupIdx), r;
  }
  positiveInteger() {
    let e = this.popChar();
    if (Gd.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; pr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (pr.test(e) === !1)
      throw Error("Expecting an integer");
    for (; pr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: w(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return !0;
      default:
        return !1;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return pr.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return !0;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      case "[":
      case "(":
        return !0;
      default:
        return !1;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return !0;
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return !0;
          default:
            return !1;
        }
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return !1;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(!0) !== void 0;
    } catch {
      return !1;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  parseHexDigits(e) {
    let t = "";
    for (let i = 0; i < e; i++) {
      const s = this.popChar();
      if (Fd.test(s) === !1)
        throw Error("Expecting a HexDecimal digits");
      t += s;
    }
    return { type: "Character", value: parseInt(t, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}
class di {
  visitChildren(e) {
    for (const t in e) {
      const r = e[t];
      e.hasOwnProperty(t) && (r.type !== void 0 ? this.visit(r) : Array.isArray(r) && r.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}
const Ud = /\r?\n/gm, Bd = new Ul();
class Vd extends di {
  constructor() {
    super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const t = String.fromCharCode(e.value);
    if (!this.multiline && t === `
` && (this.multiline = !0), e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const r = fi(t);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const t = this.regex.substring(e.loc.begin, e.loc.end), r = new RegExp(t);
      this.multiline = !!`
`.match(r);
    }
    if (e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const t = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}
const _i = new Vd();
function Wd(n) {
  try {
    return typeof n == "string" && (n = new RegExp(n)), n = n.toString(), _i.reset(n), _i.visit(Bd.pattern(n)), _i.multiline;
  } catch {
    return !1;
  }
}
const jd = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function ts(n) {
  const e = typeof n == "string" ? new RegExp(n) : n;
  return jd.some((t) => e.test(t));
}
function fi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Kd(n) {
  return Array.prototype.map.call(n, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : fi(e)).join("");
}
function Hd(n, e) {
  const t = zd(n), r = e.match(t);
  return !!r && r[0].length > 0;
}
function zd(n) {
  typeof n == "string" && (n = new RegExp(n));
  const e = n, t = n.source;
  let r = 0;
  function i() {
    let s = "", a;
    function o(c) {
      s += t.substr(r, c), r += c;
    }
    function l(c) {
      s += "(?:" + t.substr(r, c) + "|$)", r += c;
    }
    for (; r < t.length; )
      switch (t[r]) {
        case "\\":
          switch (t[r + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? t[r + 2] === "{" ? l(t.indexOf("}", r) - r + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(t.indexOf("}", r) - r + 1) : l(2);
              break;
            case "k":
              l(t.indexOf(">", r) - r + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          a = /\[(?:\\.|.)*?\]/g, a.lastIndex = r, a = a.exec(t) || [], l(a[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          a = /\{\d+,?\d*\}/g, a.lastIndex = r, a = a.exec(t), a ? o(a[0].length) : l(1);
          break;
        case "(":
          if (t[r + 1] === "?")
            switch (t[r + 2]) {
              case ":":
                s += "(?:", r += 3, s += i() + "|$)";
                break;
              case "=":
                s += "(?=", r += 3, s += i() + ")";
                break;
              case "!":
                a = r, r += 3, i(), s += t.substr(a, r - a);
                break;
              case "<":
                switch (t[r + 3]) {
                  case "=":
                  case "!":
                    a = r, r += 4, i(), s += t.substr(a, r - a);
                    break;
                  default:
                    o(t.indexOf(">", r) - r + 1), s += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), s += i() + "|$)";
          break;
        case ")":
          return ++r, s;
        default:
          l(1);
          break;
      }
    return s;
  }
  return new RegExp(i(), n.flags);
}
function qd(n) {
  return n.rules.find((e) => we(e) && e.entry);
}
function Yd(n) {
  return n.rules.filter((e) => yt(e) && e.hidden);
}
function Bl(n, e) {
  const t = /* @__PURE__ */ new Set(), r = qd(n);
  if (!r)
    return new Set(n.rules);
  const i = [r].concat(Yd(n));
  for (const a of i)
    Vl(a, t, e);
  const s = /* @__PURE__ */ new Set();
  for (const a of n.rules)
    (t.has(a.name) || yt(a) && a.hidden) && s.add(a);
  return s;
}
function Vl(n, e, t) {
  e.add(n.name), Qn(n).forEach((r) => {
    if (ft(r) || t) {
      const i = r.rule.ref;
      i && !e.has(i.name) && Vl(i, e, t);
    }
  });
}
function Xd(n) {
  if (n.terminal)
    return n.terminal;
  if (n.type.ref) {
    const e = jl(n.type.ref);
    return e == null ? void 0 : e.terminal;
  }
}
function Jd(n) {
  return n.hidden && !ts(zs(n));
}
function Qd(n, e) {
  return !n || !e ? [] : js(n, e, n.astNode, !0);
}
function Wl(n, e, t) {
  if (!n || !e)
    return;
  const r = js(n, e, n.astNode, !0);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function js(n, e, t, r) {
  if (!r) {
    const i = ui(n.grammarSource, ut);
    if (i && i.feature === e)
      return [n];
  }
  return Hn(n) && n.astNode === t ? n.content.flatMap((i) => js(i, e, t, !1)) : [];
}
function Zd(n, e, t) {
  if (!n)
    return;
  const r = ef(n, e, n == null ? void 0 : n.astNode);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function ef(n, e, t) {
  if (n.astNode !== t)
    return [];
  if (dt(n.grammarSource) && n.grammarSource.value === e)
    return [n];
  const r = Qi(n).iterator();
  let i;
  const s = [];
  do
    if (i = r.next(), !i.done) {
      const a = i.value;
      a.astNode === t ? dt(a.grammarSource) && a.grammarSource.value === e && s.push(a) : r.prune();
    }
  while (!i.done);
  return s;
}
function tf(n) {
  var e;
  const t = n.astNode;
  for (; t === ((e = n.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const r = ui(n.grammarSource, ut);
    if (r)
      return r;
    n = n.container;
  }
}
function jl(n) {
  let e = n;
  return Ll(e) && (ci(e.$container) ? e = e.$container.$container : we(e.$container) ? e = e.$container : Jn(e.$container)), Kl(n, e, /* @__PURE__ */ new Map());
}
function Kl(n, e, t) {
  var r;
  function i(s, a) {
    let o;
    return ui(s, ut) || (o = Kl(a, a, t)), t.set(n, o), o;
  }
  if (t.has(n))
    return t.get(n);
  t.set(n, void 0);
  for (const s of Qn(e)) {
    if (ut(s) && s.feature.toLowerCase() === "name")
      return t.set(n, s), s;
    if (ft(s) && we(s.rule.ref))
      return i(s, s.rule.ref);
    if (xd(s) && (!((r = s.typeRef) === null || r === void 0) && r.ref))
      return i(s, s.typeRef.ref);
  }
}
function Hl(n) {
  return zl(n, /* @__PURE__ */ new Set());
}
function zl(n, e) {
  if (e.has(n))
    return !0;
  e.add(n);
  for (const t of Qn(n))
    if (ft(t)) {
      if (!t.rule.ref || we(t.rule.ref) && !zl(t.rule.ref, e))
        return !1;
    } else {
      if (ut(t))
        return !1;
      if (ci(t))
        return !1;
    }
  return !!n.definition;
}
function Ks(n) {
  if (n.inferredType)
    return n.inferredType.name;
  if (n.dataType)
    return n.dataType;
  if (n.returnType) {
    const e = n.returnType.ref;
    if (e) {
      if (we(e))
        return e.name;
      if (Ol(e) || bl(e))
        return e.name;
    }
  }
}
function Hs(n) {
  var e;
  if (we(n))
    return Hl(n) ? n.name : (e = Ks(n)) !== null && e !== void 0 ? e : n.name;
  if (Ol(n) || bl(n) || Sd(n))
    return n.name;
  if (ci(n)) {
    const t = nf(n);
    if (t)
      return t;
  } else if (Ll(n))
    return n.name;
  throw new Error("Cannot get name of Unknown Type");
}
function nf(n) {
  var e;
  if (n.inferredType)
    return n.inferredType.name;
  if (!((e = n.type) === null || e === void 0) && e.ref)
    return Hs(n.type.ref);
}
function rf(n) {
  var e, t, r;
  return yt(n) ? (t = (e = n.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : (r = Ks(n)) !== null && r !== void 0 ? r : n.name;
}
function zs(n) {
  const e = {
    s: !1,
    i: !1,
    u: !1
  }, t = Qt(n.definition, e), r = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(t, r);
}
const qs = /[\s\S]/.source;
function Qt(n, e) {
  if (wd(n))
    return sf(n);
  if (_d(n))
    return af(n);
  if (Id(n))
    return cf(n);
  if (Ld(n)) {
    const t = n.rule.ref;
    if (!t)
      throw new Error("Missing rule reference.");
    return ze(Qt(t.definition), {
      cardinality: n.cardinality,
      lookahead: n.lookahead
    });
  } else {
    if (Cd(n))
      return lf(n);
    if (Od(n))
      return of(n);
    if (Nd(n)) {
      const t = n.regex.lastIndexOf("/"), r = n.regex.substring(1, t), i = n.regex.substring(t + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), ze(r, {
        cardinality: n.cardinality,
        lookahead: n.lookahead,
        wrap: !1
      });
    } else {
      if (bd(n))
        return ze(qs, {
          cardinality: n.cardinality,
          lookahead: n.lookahead
        });
      throw new Error(`Invalid terminal element: ${n == null ? void 0 : n.$type}`);
    }
  }
}
function sf(n) {
  return ze(n.elements.map((e) => Qt(e)).join("|"), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function af(n) {
  return ze(n.elements.map((e) => Qt(e)).join(""), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function of(n) {
  return ze(`${qs}*?${Qt(n.terminal)}`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function lf(n) {
  return ze(`(?!${Qt(n.terminal)})${qs}*?`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function cf(n) {
  return n.right ? ze(`[${Li(n.left)}-${Li(n.right)}]`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: !1
  }) : ze(Li(n.left), {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: !1
  });
}
function Li(n) {
  return fi(n.value);
}
function ze(n, e) {
  var t;
  return (e.wrap !== !1 || e.lookahead) && (n = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${n})`), e.cardinality ? `${n}${e.cardinality}` : n;
}
function uf(n) {
  const e = [], t = n.Grammar;
  for (const r of t.rules)
    yt(r) && Jd(r) && Wd(zs(r)) && e.push(r.name);
  return {
    multilineCommentRules: e,
    nameRegexp: md
  };
}
function ns(n) {
  console && console.error && console.error(`Error: ${n}`);
}
function ql(n) {
  console && console.warn && console.warn(`Warning: ${n}`);
}
function Yl(n) {
  const e = (/* @__PURE__ */ new Date()).getTime(), t = n();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: t };
}
function Xl(n) {
  function e() {
  }
  e.prototype = n;
  const t = new e();
  function r() {
    return typeof t.bar;
  }
  return r(), r(), n;
}
function df(n) {
  return ff(n) ? n.LABEL : n.name;
}
function ff(n) {
  return fe(n.LABEL) && n.LABEL !== "";
}
class Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), C(this.definition, (t) => {
      t.accept(e);
    });
  }
}
class le extends Be {
  constructor(e) {
    super([]), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}
class Zt extends Be {
  constructor(e) {
    super(e.definition), this.orgText = "", ke(this, Me(e, (t) => t !== void 0));
  }
}
class he extends Be {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, ke(this, Me(e, (t) => t !== void 0));
  }
}
let te = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
class xe extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class Ie extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class j extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class me extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class ge extends Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class G {
  constructor(e) {
    this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function hf(n) {
  return x(n, Sr);
}
function Sr(n) {
  function e(t) {
    return x(t, Sr);
  }
  if (n instanceof le) {
    const t = {
      type: "NonTerminal",
      name: n.nonTerminalName,
      idx: n.idx
    };
    return fe(n.label) && (t.label = n.label), t;
  } else {
    if (n instanceof he)
      return {
        type: "Alternative",
        definition: e(n.definition)
      };
    if (n instanceof te)
      return {
        type: "Option",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof xe)
      return {
        type: "RepetitionMandatory",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof Ie)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: n.idx,
        separator: Sr(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof me)
      return {
        type: "RepetitionWithSeparator",
        idx: n.idx,
        separator: Sr(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof j)
      return {
        type: "Repetition",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof ge)
      return {
        type: "Alternation",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof G) {
      const t = {
        type: "Terminal",
        name: n.terminalType.name,
        label: df(n.terminalType),
        idx: n.idx
      };
      fe(n.label) && (t.terminalLabel = n.label);
      const r = n.terminalType.PATTERN;
      return n.terminalType.PATTERN && (t.pattern = Ye(r) ? r.source : r), t;
    } else {
      if (n instanceof Zt)
        return {
          type: "Rule",
          name: n.name,
          orgText: n.orgText,
          definition: e(n.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
class en {
  visit(e) {
    const t = e;
    switch (t.constructor) {
      case le:
        return this.visitNonTerminal(t);
      case he:
        return this.visitAlternative(t);
      case te:
        return this.visitOption(t);
      case xe:
        return this.visitRepetitionMandatory(t);
      case Ie:
        return this.visitRepetitionMandatoryWithSeparator(t);
      case me:
        return this.visitRepetitionWithSeparator(t);
      case j:
        return this.visitRepetition(t);
      case ge:
        return this.visitAlternation(t);
      case G:
        return this.visitTerminal(t);
      case Zt:
        return this.visitRule(t);
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}
function pf(n) {
  return n instanceof he || n instanceof te || n instanceof j || n instanceof xe || n instanceof Ie || n instanceof me || n instanceof G || n instanceof Zt;
}
function Br(n, e = []) {
  return n instanceof te || n instanceof j || n instanceof me ? !0 : n instanceof ge ? $l(n.definition, (r) => Br(r, e)) : n instanceof le && ue(e, n) ? !1 : n instanceof Be ? (n instanceof le && e.push(n), be(n.definition, (r) => Br(r, e))) : !1;
}
function mf(n) {
  return n instanceof ge;
}
function Ge(n) {
  if (n instanceof le)
    return "SUBRULE";
  if (n instanceof te)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof xe)
    return "AT_LEAST_ONE";
  if (n instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof j)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class hi {
  walk(e, t = []) {
    C(e.definition, (r, i) => {
      const s = J(e.definition, i + 1);
      if (r instanceof le)
        this.walkProdRef(r, s, t);
      else if (r instanceof G)
        this.walkTerminal(r, s, t);
      else if (r instanceof he)
        this.walkFlat(r, s, t);
      else if (r instanceof te)
        this.walkOption(r, s, t);
      else if (r instanceof xe)
        this.walkAtLeastOne(r, s, t);
      else if (r instanceof Ie)
        this.walkAtLeastOneSep(r, s, t);
      else if (r instanceof me)
        this.walkManySep(r, s, t);
      else if (r instanceof j)
        this.walkMany(r, s, t);
      else if (r instanceof ge)
        this.walkOr(r, s, t);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
  }
  walkFlat(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkOption(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkAtLeastOne(e, t, r) {
    const i = [
      new te({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, t, r) {
    const i = Sa(e, t, r);
    this.walk(e, i);
  }
  walkMany(e, t, r) {
    const i = [
      new te({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkManySep(e, t, r) {
    const i = Sa(e, t, r);
    this.walk(e, i);
  }
  walkOr(e, t, r) {
    const i = t.concat(r);
    C(e.definition, (s) => {
      const a = new he({ definition: [s] });
      this.walk(a, i);
    });
  }
}
function Sa(n, e, t) {
  return [
    new te({
      definition: [
        new G({ terminalType: n.separator })
      ].concat(n.definition)
    })
  ].concat(e, t);
}
function Zn(n) {
  if (n instanceof le)
    return Zn(n.referencedRule);
  if (n instanceof G)
    return Tf(n);
  if (pf(n))
    return gf(n);
  if (mf(n))
    return yf(n);
  throw Error("non exhaustive match");
}
function gf(n) {
  let e = [];
  const t = n.definition;
  let r = 0, i = t.length > r, s, a = !0;
  for (; i && a; )
    s = t[r], a = Br(s), e = e.concat(Zn(s)), r = r + 1, i = t.length > r;
  return Gs(e);
}
function yf(n) {
  const e = x(n.definition, (t) => Zn(t));
  return Gs(Ne(e));
}
function Tf(n) {
  return [n.terminalType];
}
const Jl = "_~IN~_";
class Rf extends hi {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
    const i = Af(e.referencedRule, e.idx) + this.topProd.name, s = t.concat(r), a = new he({ definition: s }), o = Zn(a);
    this.follows[i] = o;
  }
}
function vf(n) {
  const e = {};
  return C(n, (t) => {
    const r = new Rf(t).startWalking();
    ke(e, r);
  }), e;
}
function Af(n, e) {
  return n.name + e + Jl;
}
let xr = {};
const Ef = new Ul();
function pi(n) {
  const e = n.toString();
  if (xr.hasOwnProperty(e))
    return xr[e];
  {
    const t = Ef.pattern(e);
    return xr[e] = t, t;
  }
}
function kf() {
  xr = {};
}
const Ql = "Complement Sets are not supported for first char optimization", Vr = `Unable to use "first char" lexer optimizations:
`;
function Sf(n, e = !1) {
  try {
    const t = pi(n);
    return rs(t.value, {}, t.flags.ignoreCase);
  } catch (t) {
    if (t.message === Ql)
      e && ql(`${Vr}	Unable to optimize: < ${n.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), ns(`${Vr}
	Failed parsing: < ${n.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function rs(n, e, t) {
  switch (n.type) {
    case "Disjunction":
      for (let i = 0; i < n.value.length; i++)
        rs(n.value[i], e, t);
      break;
    case "Alternative":
      const r = n.value;
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        switch (s.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const a = s;
        switch (a.type) {
          case "Character":
            mr(a.value, e, t);
            break;
          case "Set":
            if (a.complement === !0)
              throw Error(Ql);
            C(a.value, (l) => {
              if (typeof l == "number")
                mr(l, e, t);
              else {
                const c = l;
                if (t === !0)
                  for (let u = c.from; u <= c.to; u++)
                    mr(u, e, t);
                else {
                  for (let u = c.from; u <= c.to && u < Dn; u++)
                    mr(u, e, t);
                  if (c.to >= Dn) {
                    const u = c.from >= Dn ? c.from : Dn, d = c.to, h = tt(u), f = tt(d);
                    for (let m = h; m <= f; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            rs(a.value, e, t);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a.type === "Group" && is(a) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          a.type !== "Group" && o === !1
        )
          break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return z(e);
}
function mr(n, e, t) {
  const r = tt(n);
  e[r] = r, t === !0 && xf(n, e);
}
function xf(n, e) {
  const t = String.fromCharCode(n), r = t.toUpperCase();
  if (r !== t) {
    const i = tt(r.charCodeAt(0));
    e[i] = i;
  } else {
    const i = t.toLowerCase();
    if (i !== t) {
      const s = tt(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function xa(n, e) {
  return jt(n.value, (t) => {
    if (typeof t == "number")
      return ue(e, t);
    {
      const r = t;
      return jt(e, (i) => r.from <= i && i <= r.to) !== void 0;
    }
  });
}
function is(n) {
  const e = n.quantifier;
  return e && e.atLeast === 0 ? !0 : n.value ? ee(n.value) ? be(n.value, is) : is(n.value) : !1;
}
class If extends di {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = !1;
  }
  visitChildren(e) {
    if (this.found !== !0) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    ue(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? xa(e, this.targetCharCodes) === void 0 && (this.found = !0) : xa(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function Ys(n, e) {
  if (e instanceof RegExp) {
    const t = pi(e), r = new If(n);
    return r.visit(t), r.found;
  } else
    return jt(e, (t) => ue(n, t.charCodeAt(0))) !== void 0;
}
const ht = "PATTERN", Mn = "defaultMode", gr = "modes";
let Zl = typeof new RegExp("(?:)").sticky == "boolean";
function $f(n, e) {
  e = Fs(e, {
    useSticky: Zl,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (A, R) => R()
  });
  const t = e.tracer;
  t("initCharCodeToOptimizedIndexMap", () => {
    Xf();
  });
  let r;
  t("Reject Lexer.NA", () => {
    r = li(n, (A) => A[ht] === de.NA);
  });
  let i = !1, s;
  t("Transform Patterns", () => {
    i = !1, s = x(r, (A) => {
      const R = A[ht];
      if (Ye(R)) {
        const $ = R.source;
        return $.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        $ !== "^" && $ !== "$" && $ !== "." && !R.ignoreCase ? $ : $.length === 2 && $[0] === "\\" && // not a meta character
        !ue([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], $[1]) ? $[1] : e.useSticky ? $a(R) : Ia(R);
      } else {
        if (gt(R))
          return i = !0, { exec: R };
        if (typeof R == "object")
          return i = !0, R;
        if (typeof R == "string") {
          if (R.length === 1)
            return R;
          {
            const $ = R.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), F = new RegExp($);
            return e.useSticky ? $a(F) : Ia(F);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a, o, l, c, u;
  t("misc mapping", () => {
    a = x(r, (A) => A.tokenTypeIdx), o = x(r, (A) => {
      const R = A.GROUP;
      if (R !== de.SKIPPED) {
        if (fe(R))
          return R;
        if (qe(R))
          return !1;
        throw Error("non exhaustive match");
      }
    }), l = x(r, (A) => {
      const R = A.LONGER_ALT;
      if (R)
        return ee(R) ? x(R, (F) => ya(r, F)) : [ya(r, R)];
    }), c = x(r, (A) => A.PUSH_MODE), u = x(r, (A) => N(A, "POP_MODE"));
  });
  let d;
  t("Line Terminator Handling", () => {
    const A = nc(e.lineTerminatorCharacters);
    d = x(r, (R) => !1), e.positionTracking !== "onlyOffset" && (d = x(r, (R) => N(R, "LINE_BREAKS") ? !!R.LINE_BREAKS : tc(R, A) === !1 && Ys(A, R.PATTERN)));
  });
  let h, f, m, g;
  t("Misc Mapping #2", () => {
    h = x(r, ec), f = x(s, zf), m = oe(r, (A, R) => {
      const $ = R.GROUP;
      return fe($) && $ !== de.SKIPPED && (A[$] = []), A;
    }, {}), g = x(s, (A, R) => ({
      pattern: s[R],
      longerAlt: l[R],
      canLineTerminator: d[R],
      isCustom: h[R],
      short: f[R],
      group: o[R],
      push: c[R],
      pop: u[R],
      tokenTypeIdx: a[R],
      tokenType: r[R]
    }));
  });
  let v = !0, y = [];
  return e.safeMode || t("First Char Optimization", () => {
    y = oe(r, (A, R, $) => {
      if (typeof R.PATTERN == "string") {
        const F = R.PATTERN.charCodeAt(0), re = tt(F);
        Oi(A, re, g[$]);
      } else if (ee(R.START_CHARS_HINT)) {
        let F;
        C(R.START_CHARS_HINT, (re) => {
          const _e = typeof re == "string" ? re.charCodeAt(0) : re, ye = tt(_e);
          F !== ye && (F = ye, Oi(A, ye, g[$]));
        });
      } else if (Ye(R.PATTERN))
        if (R.PATTERN.unicode)
          v = !1, e.ensureOptimizations && ns(`${Vr}	Unable to analyze < ${R.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const F = Sf(R.PATTERN, e.ensureOptimizations);
          D(F) && (v = !1), C(F, (re) => {
            Oi(A, re, g[$]);
          });
        }
      else
        e.ensureOptimizations && ns(`${Vr}	TokenType: <${R.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), v = !1;
      return A;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: y,
    hasCustom: i,
    canBeOptimized: v
  };
}
function Cf(n, e) {
  let t = [];
  const r = wf(n);
  t = t.concat(r.errors);
  const i = _f(r.valid), s = i.valid;
  return t = t.concat(i.errors), t = t.concat(Nf(s)), t = t.concat(Gf(s)), t = t.concat(Uf(s, e)), t = t.concat(Bf(s)), t;
}
function Nf(n) {
  let e = [];
  const t = Se(n, (r) => Ye(r[ht]));
  return e = e.concat(Of(t)), e = e.concat(Mf(t)), e = e.concat(Df(t)), e = e.concat(Ff(t)), e = e.concat(bf(t)), e;
}
function wf(n) {
  const e = Se(n, (i) => !N(i, ht)), t = x(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: K.MISSING_PATTERN,
    tokenTypes: [i]
  })), r = oi(n, e);
  return { errors: t, valid: r };
}
function _f(n) {
  const e = Se(n, (i) => {
    const s = i[ht];
    return !Ye(s) && !gt(s) && !N(s, "exec") && !fe(s);
  }), t = x(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: K.INVALID_PATTERN,
    tokenTypes: [i]
  })), r = oi(n, e);
  return { errors: t, valid: r };
}
const Lf = /[^\\][$]/;
function Of(n) {
  class e extends di {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(s) {
      this.found = !0;
    }
  }
  const t = Se(n, (i) => {
    const s = i.PATTERN;
    try {
      const a = pi(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return Lf.test(s.source);
    }
  });
  return x(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: K.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function bf(n) {
  const e = Se(n, (r) => r.PATTERN.test(""));
  return x(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: K.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const Pf = /[^\\[][\^]|^\^/;
function Mf(n) {
  class e extends di {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(s) {
      this.found = !0;
    }
  }
  const t = Se(n, (i) => {
    const s = i.PATTERN;
    try {
      const a = pi(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return Pf.test(s.source);
    }
  });
  return x(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: K.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function Df(n) {
  const e = Se(n, (r) => {
    const i = r[ht];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return x(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: K.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function Ff(n) {
  const e = [];
  let t = x(n, (s) => oe(n, (a, o) => (s.PATTERN.source === o.PATTERN.source && !ue(e, o) && o.PATTERN !== de.NA && (e.push(o), a.push(o)), a), []));
  t = Xn(t);
  const r = Se(t, (s) => s.length > 1);
  return x(r, (s) => {
    const a = x(s, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${Pe(s).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,
      type: K.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
function Gf(n) {
  const e = Se(n, (r) => {
    if (!N(r, "GROUP"))
      return !1;
    const i = r.GROUP;
    return i !== de.SKIPPED && i !== de.NA && !fe(i);
  });
  return x(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: K.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function Uf(n, e) {
  const t = Se(n, (i) => i.PUSH_MODE !== void 0 && !ue(e, i.PUSH_MODE));
  return x(t, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: K.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function Bf(n) {
  const e = [], t = oe(n, (r, i, s) => {
    const a = i.PATTERN;
    return a === de.NA || (fe(a) ? r.push({ str: a, idx: s, tokenType: i }) : Ye(a) && Wf(a) && r.push({ str: a.source, idx: s, tokenType: i })), r;
  }, []);
  return C(n, (r, i) => {
    C(t, ({ str: s, idx: a, tokenType: o }) => {
      if (i < a && Vf(s, r.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: K.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function Vf(n, e) {
  if (Ye(e)) {
    const t = e.exec(n);
    return t !== null && t.index === 0;
  } else {
    if (gt(e))
      return e(n, 0, [], {});
    if (N(e, "exec"))
      return e.exec(n, 0, [], {});
    if (typeof e == "string")
      return e === n;
    throw Error("non exhaustive match");
  }
}
function Wf(n) {
  return jt([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (t) => n.source.indexOf(t) !== -1) === void 0;
}
function Ia(n) {
  const e = n.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${n.source})`, e);
}
function $a(n) {
  const e = n.ignoreCase ? "iy" : "y";
  return new RegExp(`${n.source}`, e);
}
function jf(n, e, t) {
  const r = [];
  return N(n, Mn) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Mn + `> property in its definition
`,
    type: K.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), N(n, gr) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + gr + `> property in its definition
`,
    type: K.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), N(n, gr) && N(n, Mn) && !N(n.modes, n.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${Mn}: <${n.defaultMode}>which does not exist
`,
    type: K.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), N(n, gr) && C(n.modes, (i, s) => {
    C(i, (a, o) => {
      if (qe(a))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: K.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (N(a, "LONGER_ALT")) {
        const l = ee(a.LONGER_ALT) ? a.LONGER_ALT : [a.LONGER_ALT];
        C(l, (c) => {
          !qe(c) && !ue(i, c) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${a.name}> outside of mode <${s}>
`,
            type: K.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function Kf(n, e, t) {
  const r = [];
  let i = !1;
  const s = Xn(Ne(z(n.modes))), a = li(s, (l) => l[ht] === de.NA), o = nc(t);
  return e && C(a, (l) => {
    const c = tc(l, o);
    if (c !== !1) {
      const d = {
        message: Yf(l, c),
        type: c.issue,
        tokenType: l
      };
      r.push(d);
    } else
      N(l, "LINE_BREAKS") ? l.LINE_BREAKS === !0 && (i = !0) : Ys(o, l.PATTERN) && (i = !0);
  }), e && !i && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: K.NO_LINE_BREAKS_FLAGS
  }), r;
}
function Hf(n) {
  const e = {}, t = Wt(n);
  return C(t, (r) => {
    const i = n[r];
    if (ee(i))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function ec(n) {
  const e = n.PATTERN;
  if (Ye(e))
    return !1;
  if (gt(e))
    return !0;
  if (N(e, "exec"))
    return !0;
  if (fe(e))
    return !1;
  throw Error("non exhaustive match");
}
function zf(n) {
  return fe(n) && n.length === 1 ? n.charCodeAt(0) : !1;
}
const qf = {
  // implements /\n|\r\n?/g.test
  test: function(n) {
    const e = n.length;
    for (let t = this.lastIndex; t < e; t++) {
      const r = n.charCodeAt(t);
      if (r === 10)
        return this.lastIndex = t + 1, !0;
      if (r === 13)
        return n.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, !0;
    }
    return !1;
  },
  lastIndex: 0
};
function tc(n, e) {
  if (N(n, "LINE_BREAKS"))
    return !1;
  if (Ye(n.PATTERN)) {
    try {
      Ys(e, n.PATTERN);
    } catch (t) {
      return {
        issue: K.IDENTIFY_TERMINATOR,
        errMsg: t.message
      };
    }
    return !1;
  } else {
    if (fe(n.PATTERN))
      return !1;
    if (ec(n))
      return { issue: K.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function Yf(n, e) {
  if (e.issue === K.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${n.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === K.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${n.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function nc(n) {
  return x(n, (t) => fe(t) ? t.charCodeAt(0) : t);
}
function Oi(n, e, t) {
  n[e] === void 0 ? n[e] = [t] : n[e].push(t);
}
const Dn = 256;
let Ir = [];
function tt(n) {
  return n < Dn ? n : Ir[n];
}
function Xf() {
  if (D(Ir)) {
    Ir = new Array(65536);
    for (let n = 0; n < 65536; n++)
      Ir[n] = n > 255 ? 255 + ~~(n / 255) : n;
  }
}
function er(n, e) {
  const t = n.tokenTypeIdx;
  return t === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[t] === !0;
}
function Wr(n, e) {
  return n.tokenTypeIdx === e.tokenTypeIdx;
}
let Ca = 1;
const rc = {};
function tr(n) {
  const e = Jf(n);
  Qf(e), eh(e), Zf(e), C(e, (t) => {
    t.isParent = t.categoryMatches.length > 0;
  });
}
function Jf(n) {
  let e = ne(n), t = n, r = !0;
  for (; r; ) {
    t = Xn(Ne(x(t, (s) => s.CATEGORIES)));
    const i = oi(t, e);
    e = e.concat(i), D(i) ? r = !1 : t = i;
  }
  return e;
}
function Qf(n) {
  C(n, (e) => {
    sc(e) || (rc[Ca] = e, e.tokenTypeIdx = Ca++), Na(e) && !ee(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), Na(e) || (e.CATEGORIES = []), th(e) || (e.categoryMatches = []), nh(e) || (e.categoryMatchesMap = {});
  });
}
function Zf(n) {
  C(n, (e) => {
    e.categoryMatches = [], C(e.categoryMatchesMap, (t, r) => {
      e.categoryMatches.push(rc[r].tokenTypeIdx);
    });
  });
}
function eh(n) {
  C(n, (e) => {
    ic([], e);
  });
}
function ic(n, e) {
  C(n, (t) => {
    e.categoryMatchesMap[t.tokenTypeIdx] = !0;
  }), C(e.CATEGORIES, (t) => {
    const r = n.concat(e);
    ue(r, t) || ic(r, t);
  });
}
function sc(n) {
  return N(n, "tokenTypeIdx");
}
function Na(n) {
  return N(n, "CATEGORIES");
}
function th(n) {
  return N(n, "categoryMatches");
}
function nh(n) {
  return N(n, "categoryMatchesMap");
}
function rh(n) {
  return N(n, "tokenTypeIdx");
}
const ss = {
  buildUnableToPopLexerModeMessage(n) {
    return `Unable to pop Lexer Mode after encountering Token ->${n.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(n, e, t, r, i) {
    return `unexpected character: ->${n.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
  }
};
var K;
(function(n) {
  n[n.MISSING_PATTERN = 0] = "MISSING_PATTERN", n[n.INVALID_PATTERN = 1] = "INVALID_PATTERN", n[n.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", n[n.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", n[n.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", n[n.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", n[n.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", n[n.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", n[n.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", n[n.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", n[n.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", n[n.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", n[n.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", n[n.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", n[n.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", n[n.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", n[n.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", n[n.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(K || (K = {}));
const Fn = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: ss,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(Fn);
class de {
  constructor(e, t = Fn) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const a = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a}--> <${i}>`);
        const { time: o, value: l } = Yl(s), c = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && c(`${a}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof t == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = ke({}, Fn, t);
    const r = this.config.traceInitPerf;
    r === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Fn.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = qf;
        else if (this.config.lineTerminatorCharacters === Fn.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t.safeMode && t.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), ee(e) ? i = {
          modes: { defaultMode: ne(e) },
          defaultMode: Mn
        } : (s = !1, i = ne(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(jf(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(Kf(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, C(i.modes, (o, l) => {
        i.modes[l] = li(o, (c) => qe(c));
      });
      const a = Wt(i.modes);
      if (C(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Cf(o, a));
          }), D(this.lexerDefinitionErrors)) {
            tr(o);
            let c;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              c = $f(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: t.positionTracking,
                ensureOptimizations: t.ensureOptimizations,
                safeMode: t.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = c.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = c.charCodeToPatternIdxToConfig, this.emptyGroups = ke({}, this.emptyGroups, c.emptyGroups), this.hasCustom = c.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = c.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !D(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = x(this.lexerDefinitionErrors, (c) => c.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      C(this.lexerDefinitionWarning, (o) => {
        ql(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (Zl ? (this.chopInput = ga, this.match = this.matchWithTest) : (this.updateLastIndex = Y, this.match = this.matchWithExec), s && (this.handleModes = Y), this.trackStartLines === !1 && (this.computeNewColumn = ga), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = Y), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = oe(this.canModeBeOptimized, (l, c, u) => (c === !1 && l.push(u), l), []);
        if (t.ensureOptimizations && !D(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        kf();
      }), this.TRACE_INIT("toFastProperties", () => {
        Xl(this);
      });
    });
  }
  tokenize(e, t = this.defaultMode) {
    if (!D(this.lexerDefinitionErrors)) {
      const i = x(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, t);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, t) {
    let r, i, s, a, o, l, c, u, d, h, f, m, g, v, y;
    const A = e, R = A.length;
    let $ = 0, F = 0;
    const re = this.hasCustom ? 0 : Math.floor(e.length / 10), _e = new Array(re), ye = [];
    let Fe = this.trackStartLines ? 1 : void 0, $e = this.trackStartLines ? 1 : void 0;
    const S = Hf(this.emptyGroups), T = this.trackStartLines, E = this.config.lineTerminatorsPattern;
    let I = 0, O = [], L = [];
    const _ = [], Te = [];
    Object.freeze(Te);
    let q;
    function W() {
      return O;
    }
    function ot(ie) {
      const Ce = tt(ie), kt = L[Ce];
      return kt === void 0 ? Te : kt;
    }
    const Eu = (ie) => {
      if (_.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      ie.tokenType.PUSH_MODE === void 0) {
        const Ce = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ie);
        ye.push({
          offset: ie.startOffset,
          line: ie.startLine,
          column: ie.startColumn,
          length: ie.image.length,
          message: Ce
        });
      } else {
        _.pop();
        const Ce = Kt(_);
        O = this.patternIdxToConfig[Ce], L = this.charCodeToPatternIdxToConfig[Ce], I = O.length;
        const kt = this.canModeBeOptimized[Ce] && this.config.safeMode === !1;
        L && kt ? q = ot : q = W;
      }
    };
    function da(ie) {
      _.push(ie), L = this.charCodeToPatternIdxToConfig[ie], O = this.patternIdxToConfig[ie], I = O.length, I = O.length;
      const Ce = this.canModeBeOptimized[ie] && this.config.safeMode === !1;
      L && Ce ? q = ot : q = W;
    }
    da.call(this, t);
    let Le;
    const fa = this.config.recoveryEnabled;
    for (; $ < R; ) {
      l = null;
      const ie = A.charCodeAt($), Ce = q(ie), kt = Ce.length;
      for (r = 0; r < kt; r++) {
        Le = Ce[r];
        const Re = Le.pattern;
        c = null;
        const Ve = Le.short;
        if (Ve !== !1 ? ie === Ve && (l = Re) : Le.isCustom === !0 ? (y = Re.exec(A, $, _e, S), y !== null ? (l = y[0], y.payload !== void 0 && (c = y.payload)) : l = null) : (this.updateLastIndex(Re, $), l = this.match(Re, e, $)), l !== null) {
          if (o = Le.longerAlt, o !== void 0) {
            const Je = o.length;
            for (s = 0; s < Je; s++) {
              const We = O[o[s]], lt = We.pattern;
              if (u = null, We.isCustom === !0 ? (y = lt.exec(A, $, _e, S), y !== null ? (a = y[0], y.payload !== void 0 && (u = y.payload)) : a = null) : (this.updateLastIndex(lt, $), a = this.match(lt, e, $)), a && a.length > l.length) {
                l = a, c = u, Le = We;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (d = l.length, h = Le.group, h !== void 0 && (f = Le.tokenTypeIdx, m = this.createTokenInstance(l, $, f, Le.tokenType, Fe, $e, d), this.handlePayload(m, c), h === !1 ? F = this.addToken(_e, F, m) : S[h].push(m)), e = this.chopInput(e, d), $ = $ + d, $e = this.computeNewColumn($e, d), T === !0 && Le.canLineTerminator === !0) {
          let Re = 0, Ve, Je;
          E.lastIndex = 0;
          do
            Ve = E.test(l), Ve === !0 && (Je = E.lastIndex - 1, Re++);
          while (Ve === !0);
          Re !== 0 && (Fe = Fe + Re, $e = d - Je, this.updateTokenEndLineColumnLocation(m, h, Je, Re, Fe, $e, d));
        }
        this.handleModes(Le, Eu, da, m);
      } else {
        const Re = $, Ve = Fe, Je = $e;
        let We = fa === !1;
        for (; We === !1 && $ < R; )
          for (e = this.chopInput(e, 1), $++, i = 0; i < I; i++) {
            const lt = O[i], Si = lt.pattern, ha = lt.short;
            if (ha !== !1 ? A.charCodeAt($) === ha && (We = !0) : lt.isCustom === !0 ? We = Si.exec(A, $, _e, S) !== null : (this.updateLastIndex(Si, $), We = Si.exec(e) !== null), We === !0)
              break;
          }
        if (g = $ - Re, $e = this.computeNewColumn($e, g), v = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(A, Re, g, Ve, Je), ye.push({
          offset: Re,
          line: Ve,
          column: Je,
          length: g,
          message: v
        }), fa === !1)
          break;
      }
    }
    return this.hasCustom || (_e.length = F), {
      tokens: _e,
      groups: S,
      errors: ye
    };
  }
  handleModes(e, t, r, i) {
    if (e.pop === !0) {
      const s = e.push;
      t(i), s !== void 0 && r.call(this, s);
    } else e.push !== void 0 && r.call(this, e.push);
  }
  chopInput(e, t) {
    return e.substring(t);
  }
  updateLastIndex(e, t) {
    e.lastIndex = t;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, t, r, i, s, a, o) {
    let l, c;
    t !== void 0 && (l = r === o - 1, c = l ? -1 : 0, i === 1 && l === !0 || (e.endLine = s + c, e.endColumn = a - 1 + -c));
  }
  computeNewColumn(e, t) {
    return e + t;
  }
  createOffsetOnlyToken(e, t, r, i) {
    return {
      image: e,
      startOffset: t,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createStartOnlyToken(e, t, r, i, s, a) {
    return {
      image: e,
      startOffset: t,
      startLine: s,
      startColumn: a,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createFullToken(e, t, r, i, s, a, o) {
    return {
      image: e,
      startOffset: t,
      endOffset: t + o - 1,
      startLine: s,
      endLine: s,
      startColumn: a,
      endColumn: a + o - 1,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  addTokenUsingPush(e, t, r) {
    return e.push(r), t;
  }
  addTokenUsingMemberAccess(e, t, r) {
    return e[t] = r, t++, t;
  }
  handlePayloadNoCustom(e, t) {
  }
  handlePayloadWithCustom(e, t) {
    t !== null && (e.payload = t);
  }
  matchWithTest(e, t, r) {
    return e.test(t) === !0 ? t.substring(r, e.lastIndex) : null;
  }
  matchWithExec(e, t) {
    const r = e.exec(t);
    return r !== null ? r[0] : null;
  }
}
de.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
de.NA = /NOT_APPLICABLE/;
function Ct(n) {
  return ac(n) ? n.LABEL : n.name;
}
function ac(n) {
  return fe(n.LABEL) && n.LABEL !== "";
}
const ih = "parent", wa = "categories", _a = "label", La = "group", Oa = "push_mode", ba = "pop_mode", Pa = "longer_alt", Ma = "line_breaks", Da = "start_chars_hint";
function oc(n) {
  return sh(n);
}
function sh(n) {
  const e = n.pattern, t = {};
  if (t.name = n.name, qe(e) || (t.PATTERN = e), N(n, ih))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return N(n, wa) && (t.CATEGORIES = n[wa]), tr([t]), N(n, _a) && (t.LABEL = n[_a]), N(n, La) && (t.GROUP = n[La]), N(n, ba) && (t.POP_MODE = n[ba]), N(n, Oa) && (t.PUSH_MODE = n[Oa]), N(n, Pa) && (t.LONGER_ALT = n[Pa]), N(n, Ma) && (t.LINE_BREAKS = n[Ma]), N(n, Da) && (t.START_CHARS_HINT = n[Da]), t;
}
const nt = oc({ name: "EOF", pattern: de.NA });
tr([nt]);
function Xs(n, e, t, r, i, s, a, o) {
  return {
    image: e,
    startOffset: t,
    endOffset: r,
    startLine: i,
    endLine: s,
    startColumn: a,
    endColumn: o,
    tokenTypeIdx: n.tokenTypeIdx,
    tokenType: n
  };
}
function lc(n, e) {
  return er(n, e);
}
const It = {
  buildMismatchTokenMessage({ expected: n, actual: e, previous: t, ruleName: r }) {
    return `Expecting ${ac(n) ? `--> ${Ct(n)} <--` : `token of type --> ${n.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: n, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + n.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: n, actual: e, previous: t, customUserDescription: r, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + Pe(e).image + "'";
    if (r)
      return s + r + o;
    {
      const l = oe(n, (h, f) => h.concat(f), []), c = x(l, (h) => `[${x(h, (f) => Ct(f)).join(", ")}]`), d = `one of these possible Token sequences:
${x(c, (h, f) => `  ${f + 1}. ${h}`).join(`
`)}`;
      return s + d + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: n, actual: e, customUserDescription: t, ruleName: r }) {
    const i = "Expecting: ", a = `
but found: '` + Pe(e).image + "'";
    if (t)
      return i + t + a;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${x(n, (c) => `[${x(c, (u) => Ct(u)).join(",")}]`).join(" ,")}>`;
      return i + l + a;
    }
  }
};
Object.freeze(It);
const ah = {
  buildRuleNotFoundError(n, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + n.name + "<-";
  }
}, ct = {
  buildDuplicateFoundError(n, e) {
    function t(u) {
      return u instanceof G ? u.terminalType.name : u instanceof le ? u.nonTerminalName : "";
    }
    const r = n.name, i = Pe(e), s = i.idx, a = Ge(i), o = t(i), l = s > 0;
    let c = `->${a}${l ? s : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return c = c.replace(/[ \t]+/g, " "), c = c.replace(/\s\s+/g, `
`), c;
  },
  buildNamespaceConflictError(n) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${n.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(n) {
    const e = x(n.prefixPath, (i) => Ct(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    return `Ambiguous alternatives: <${n.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(n) {
    const e = x(n.prefixPath, (i) => Ct(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
  },
  buildEmptyRepetitionError(n) {
    let e = Ge(n.repetition);
    return n.repetition.idx !== 0 && (e += n.repetition.idx), `The repetition <${e}> within Rule <${n.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(n) {
    return "deprecated";
  },
  buildEmptyAlternationError(n) {
    return `Ambiguous empty alternative: <${n.emptyChoiceIdx + 1}> in <OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(n) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
 has ${n.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(n) {
    const e = n.topLevelRule.name, t = x(n.leftRecursionPath, (s) => s.name), r = `${e} --> ${t.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(n) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(n) {
    let e;
    return n.topLevelRule instanceof Zt ? e = n.topLevelRule.name : e = n.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${n.grammarName}<-`;
  }
};
function oh(n, e) {
  const t = new lh(n, e);
  return t.resolveRefs(), t.errors;
}
class lh extends en {
  constructor(e, t) {
    super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
  }
  resolveRefs() {
    C(z(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const t = this.nameToTopRule[e.nonTerminalName];
    if (t)
      e.referencedRule = t;
    else {
      const r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: r,
        type: ce.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class ch extends hi {
  constructor(e, t) {
    super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = ne(this.path.ruleStack).reverse(), this.occurrenceStack = ne(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, t = []) {
    this.found || super.walk(e, t);
  }
  walkProdRef(e, t, r) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = t.concat(r);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    D(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class uh extends ch {
  constructor(e, t) {
    super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, t, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = t.concat(r), s = new he({ definition: i });
      this.possibleTokTypes = Zn(s), this.found = !0;
    }
  }
}
class mi extends hi {
  constructor(e, t) {
    super(), this.topRule = e, this.occurrence = t, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class dh extends mi {
  walkMany(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, t, r);
  }
}
class Fa extends mi {
  walkManySep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, t, r);
  }
}
class fh extends mi {
  walkAtLeastOne(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, t, r);
  }
}
class Ga extends mi {
  walkAtLeastOneSep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, t, r);
  }
}
function as(n, e, t = []) {
  t = ne(t);
  let r = [], i = 0;
  function s(o) {
    return o.concat(J(n, i + 1));
  }
  function a(o) {
    const l = as(s(o), e, t);
    return r.concat(l);
  }
  for (; t.length < e && i < n.length; ) {
    const o = n[i];
    if (o instanceof he)
      return a(o.definition);
    if (o instanceof le)
      return a(o.definition);
    if (o instanceof te)
      r = a(o.definition);
    else if (o instanceof xe) {
      const l = o.definition.concat([
        new j({
          definition: o.definition
        })
      ]);
      return a(l);
    } else if (o instanceof Ie) {
      const l = [
        new he({ definition: o.definition }),
        new j({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a(l);
    } else if (o instanceof me) {
      const l = o.definition.concat([
        new j({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a(l);
    } else if (o instanceof j) {
      const l = o.definition.concat([
        new j({
          definition: o.definition
        })
      ]);
      r = a(l);
    } else {
      if (o instanceof ge)
        return C(o.definition, (l) => {
          D(l.definition) === !1 && (r = a(l.definition));
        }), r;
      if (o instanceof G)
        t.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return r.push({
    partialPath: t,
    suffixDef: J(n, i)
  }), r;
}
function cc(n, e, t, r) {
  const i = "EXIT_NONE_TERMINAL", s = [i], a = "EXIT_ALTERNATIVE";
  let o = !1;
  const l = e.length, c = l - r - 1, u = [], d = [];
  for (d.push({
    idx: -1,
    def: n,
    ruleStack: [],
    occurrenceStack: []
  }); !D(d); ) {
    const h = d.pop();
    if (h === a) {
      o && Kt(d).idx <= c && d.pop();
      continue;
    }
    const f = h.def, m = h.idx, g = h.ruleStack, v = h.occurrenceStack;
    if (D(f))
      continue;
    const y = f[0];
    if (y === i) {
      const A = {
        idx: m,
        def: J(f),
        ruleStack: Kn(g),
        occurrenceStack: Kn(v)
      };
      d.push(A);
    } else if (y instanceof G)
      if (m < l - 1) {
        const A = m + 1, R = e[A];
        if (t(R, y.terminalType)) {
          const $ = {
            idx: A,
            def: J(f),
            ruleStack: g,
            occurrenceStack: v
          };
          d.push($);
        }
      } else if (m === l - 1)
        u.push({
          nextTokenType: y.terminalType,
          nextTokenOccurrence: y.idx,
          ruleStack: g,
          occurrenceStack: v
        }), o = !0;
      else
        throw Error("non exhaustive match");
    else if (y instanceof le) {
      const A = ne(g);
      A.push(y.nonTerminalName);
      const R = ne(v);
      R.push(y.idx);
      const $ = {
        idx: m,
        def: y.definition.concat(s, J(f)),
        ruleStack: A,
        occurrenceStack: R
      };
      d.push($);
    } else if (y instanceof te) {
      const A = {
        idx: m,
        def: J(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a);
      const R = {
        idx: m,
        def: y.definition.concat(J(f)),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(R);
    } else if (y instanceof xe) {
      const A = new j({
        definition: y.definition,
        idx: y.idx
      }), R = y.definition.concat([A], J(f)), $ = {
        idx: m,
        def: R,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push($);
    } else if (y instanceof Ie) {
      const A = new G({
        terminalType: y.separator
      }), R = new j({
        definition: [A].concat(y.definition),
        idx: y.idx
      }), $ = y.definition.concat([R], J(f)), F = {
        idx: m,
        def: $,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(F);
    } else if (y instanceof me) {
      const A = {
        idx: m,
        def: J(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a);
      const R = new G({
        terminalType: y.separator
      }), $ = new j({
        definition: [R].concat(y.definition),
        idx: y.idx
      }), F = y.definition.concat([$], J(f)), re = {
        idx: m,
        def: F,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(re);
    } else if (y instanceof j) {
      const A = {
        idx: m,
        def: J(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a);
      const R = new j({
        definition: y.definition,
        idx: y.idx
      }), $ = y.definition.concat([R], J(f)), F = {
        idx: m,
        def: $,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(F);
    } else if (y instanceof ge)
      for (let A = y.definition.length - 1; A >= 0; A--) {
        const R = y.definition[A], $ = {
          idx: m,
          def: R.definition.concat(J(f)),
          ruleStack: g,
          occurrenceStack: v
        };
        d.push($), d.push(a);
      }
    else if (y instanceof he)
      d.push({
        idx: m,
        def: y.definition.concat(J(f)),
        ruleStack: g,
        occurrenceStack: v
      });
    else if (y instanceof Zt)
      d.push(hh(y, m, g, v));
    else
      throw Error("non exhaustive match");
  }
  return u;
}
function hh(n, e, t, r) {
  const i = ne(t);
  i.push(n.name);
  const s = ne(r);
  return s.push(1), {
    idx: e,
    def: n.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var B;
(function(n) {
  n[n.OPTION = 0] = "OPTION", n[n.REPETITION = 1] = "REPETITION", n[n.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", n[n.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", n[n.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", n[n.ALTERNATION = 5] = "ALTERNATION";
})(B || (B = {}));
function Js(n) {
  if (n instanceof te || n === "Option")
    return B.OPTION;
  if (n instanceof j || n === "Repetition")
    return B.REPETITION;
  if (n instanceof xe || n === "RepetitionMandatory")
    return B.REPETITION_MANDATORY;
  if (n instanceof Ie || n === "RepetitionMandatoryWithSeparator")
    return B.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (n instanceof me || n === "RepetitionWithSeparator")
    return B.REPETITION_WITH_SEPARATOR;
  if (n instanceof ge || n === "Alternation")
    return B.ALTERNATION;
  throw Error("non exhaustive match");
}
function Ua(n) {
  const { occurrence: e, rule: t, prodType: r, maxLookahead: i } = n, s = Js(r);
  return s === B.ALTERNATION ? gi(e, t, i) : yi(e, t, s, i);
}
function ph(n, e, t, r, i, s) {
  const a = gi(n, e, t), o = fc(a) ? Wr : er;
  return s(a, r, o, i);
}
function mh(n, e, t, r, i, s) {
  const a = yi(n, e, i, t), o = fc(a) ? Wr : er;
  return s(a[0], o, r);
}
function gh(n, e, t, r) {
  const i = n.length, s = be(n, (a) => be(a, (o) => o.length === 1));
  if (e)
    return function(a) {
      const o = x(a, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const c = n[l], u = c.length, d = o[l];
        if (!(d !== void 0 && d.call(this) === !1))
          e: for (let h = 0; h < u; h++) {
            const f = c[h], m = f.length;
            for (let g = 0; g < m; g++) {
              const v = this.LA(g + 1);
              if (t(v, f[g]) === !1)
                continue e;
            }
            return l;
          }
      }
    };
  if (s && !r) {
    const a = x(n, (l) => Ne(l)), o = oe(a, (l, c, u) => (C(c, (d) => {
      N(l, d.tokenTypeIdx) || (l[d.tokenTypeIdx] = u), C(d.categoryMatches, (h) => {
        N(l, h) || (l[h] = u);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a = 0; a < i; a++) {
        const o = n[a], l = o.length;
        e: for (let c = 0; c < l; c++) {
          const u = o[c], d = u.length;
          for (let h = 0; h < d; h++) {
            const f = this.LA(h + 1);
            if (t(f, u[h]) === !1)
              continue e;
          }
          return a;
        }
      }
    };
}
function yh(n, e, t) {
  const r = be(n, (s) => s.length === 1), i = n.length;
  if (r && !t) {
    const s = Ne(n);
    if (s.length === 1 && D(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a = oe(s, (o, l, c) => (o[l.tokenTypeIdx] = !0, C(l.categoryMatches, (u) => {
        o[u] = !0;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a[o.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let s = 0; s < i; s++) {
        const a = n[s], o = a.length;
        for (let l = 0; l < o; l++) {
          const c = this.LA(l + 1);
          if (e(c, a[l]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
class Th extends hi {
  constructor(e, t, r) {
    super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = r;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, t, r, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = r.concat(i), !0) : !1;
  }
  walkOption(e, t, r) {
    this.checkIsTarget(e, B.OPTION, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOne(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOneSep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
  walkMany(e, t, r) {
    this.checkIsTarget(e, B.REPETITION, t, r) || super.walkOption(e, t, r);
  }
  walkManySep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
}
class uc extends en {
  constructor(e, t, r) {
    super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, t) {
    e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, B.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, B.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, B.ALTERNATION);
  }
}
function Ba(n) {
  const e = new Array(n);
  for (let t = 0; t < n; t++)
    e[t] = [];
  return e;
}
function bi(n) {
  let e = [""];
  for (let t = 0; t < n.length; t++) {
    const r = n[t], i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      i.push(a + "_" + r.tokenTypeIdx);
      for (let o = 0; o < r.categoryMatches.length; o++) {
        const l = "_" + r.categoryMatches[o];
        i.push(a + l);
      }
    }
    e = i;
  }
  return e;
}
function Rh(n, e, t) {
  for (let r = 0; r < n.length; r++) {
    if (r === t)
      continue;
    const i = n[r];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (i[a] === !0)
        return !1;
    }
  }
  return !0;
}
function dc(n, e) {
  const t = x(n, (a) => as([a], 1)), r = Ba(t.length), i = x(t, (a) => {
    const o = {};
    return C(a, (l) => {
      const c = bi(l.partialPath);
      C(c, (u) => {
        o[u] = !0;
      });
    }), o;
  });
  let s = t;
  for (let a = 1; a <= e; a++) {
    const o = s;
    s = Ba(o.length);
    for (let l = 0; l < o.length; l++) {
      const c = o[l];
      for (let u = 0; u < c.length; u++) {
        const d = c[u].partialPath, h = c[u].suffixDef, f = bi(d);
        if (Rh(i, f, l) || D(h) || d.length === e) {
          const g = r[l];
          if (os(g, d) === !1) {
            g.push(d);
            for (let v = 0; v < f.length; v++) {
              const y = f[v];
              i[l][y] = !0;
            }
          }
        } else {
          const g = as(h, a + 1, d);
          s[l] = s[l].concat(g), C(g, (v) => {
            const y = bi(v.partialPath);
            C(y, (A) => {
              i[l][A] = !0;
            });
          });
        }
      }
    }
  }
  return r;
}
function gi(n, e, t, r) {
  const i = new uc(n, B.ALTERNATION, r);
  return e.accept(i), dc(i.result, t);
}
function yi(n, e, t, r) {
  const i = new uc(n, t);
  e.accept(i);
  const s = i.result, o = new Th(e, n, t).startWalking(), l = new he({ definition: s }), c = new he({ definition: o });
  return dc([l, c], r);
}
function os(n, e) {
  e: for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (r.length === e.length) {
      for (let i = 0; i < r.length; i++) {
        const s = e[i], a = r[i];
        if ((s === a || a.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === !1)
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
function vh(n, e) {
  return n.length < e.length && be(n, (t, r) => {
    const i = e[r];
    return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
  });
}
function fc(n) {
  return be(n, (e) => be(e, (t) => be(t, (r) => D(r.categoryMatches))));
}
function Ah(n) {
  const e = n.lookaheadStrategy.validate({
    rules: n.rules,
    tokenTypes: n.tokenTypes,
    grammarName: n.grammarName
  });
  return x(e, (t) => Object.assign({ type: ce.CUSTOM_LOOKAHEAD_VALIDATION }, t));
}
function Eh(n, e, t, r) {
  const i = Ee(n, (l) => kh(l, t)), s = Ph(n, e, t), a = Ee(n, (l) => _h(l, t)), o = Ee(n, (l) => Ih(l, n, r, t));
  return i.concat(s, a, o);
}
function kh(n, e) {
  const t = new xh();
  n.accept(t);
  const r = t.allProductions, i = ed(r, Sh), s = Me(i, (o) => o.length > 1);
  return x(z(s), (o) => {
    const l = Pe(o), c = e.buildDuplicateFoundError(n, o), u = Ge(l), d = {
      message: c,
      type: ce.DUPLICATE_PRODUCTIONS,
      ruleName: n.name,
      dslName: u,
      occurrence: l.idx
    }, h = hc(l);
    return h && (d.parameter = h), d;
  });
}
function Sh(n) {
  return `${Ge(n)}_#_${n.idx}_#_${hc(n)}`;
}
function hc(n) {
  return n instanceof G ? n.terminalType.name : n instanceof le ? n.nonTerminalName : "";
}
class xh extends en {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}
function Ih(n, e, t, r) {
  const i = [];
  if (oe(e, (a, o) => o.name === n.name ? a + 1 : a, 0) > 1) {
    const a = r.buildDuplicateRuleNameError({
      topLevelRule: n,
      grammarName: t
    });
    i.push({
      message: a,
      type: ce.DUPLICATE_RULE_NAME,
      ruleName: n.name
    });
  }
  return i;
}
function $h(n, e, t) {
  const r = [];
  let i;
  return ue(e, n) || (i = `Invalid rule override, rule: ->${n}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, r.push({
    message: i,
    type: ce.INVALID_RULE_OVERRIDE,
    ruleName: n
  })), r;
}
function pc(n, e, t, r = []) {
  const i = [], s = $r(e.definition);
  if (D(s))
    return [];
  {
    const a = n.name;
    ue(s, n) && i.push({
      message: t.buildLeftRecursionError({
        topLevelRule: n,
        leftRecursionPath: r
      }),
      type: ce.LEFT_RECURSION,
      ruleName: a
    });
    const l = oi(s, r.concat([n])), c = Ee(l, (u) => {
      const d = ne(r);
      return d.push(u), pc(n, u, t, d);
    });
    return i.concat(c);
  }
}
function $r(n) {
  let e = [];
  if (D(n))
    return e;
  const t = Pe(n);
  if (t instanceof le)
    e.push(t.referencedRule);
  else if (t instanceof he || t instanceof te || t instanceof xe || t instanceof Ie || t instanceof me || t instanceof j)
    e = e.concat($r(t.definition));
  else if (t instanceof ge)
    e = Ne(x(t.definition, (s) => $r(s.definition)));
  else if (!(t instanceof G)) throw Error("non exhaustive match");
  const r = Br(t), i = n.length > 1;
  if (r && i) {
    const s = J(n);
    return e.concat($r(s));
  } else
    return e;
}
class Qs extends en {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function Ch(n, e) {
  const t = new Qs();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => {
    const a = Kn(s.definition);
    return Ee(a, (o, l) => {
      const c = cc([o], [], er, 1);
      return D(c) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: n,
            alternation: s,
            emptyChoiceIdx: l
          }),
          type: ce.NONE_LAST_EMPTY_ALT,
          ruleName: n.name,
          occurrence: s.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
function Nh(n, e, t) {
  const r = new Qs();
  n.accept(r);
  let i = r.alternations;
  return i = li(i, (a) => a.ignoreAmbiguities === !0), Ee(i, (a) => {
    const o = a.idx, l = a.maxLookahead || e, c = gi(o, n, l, a), u = Oh(c, a, n, t), d = bh(c, a, n, t);
    return u.concat(d);
  });
}
class wh extends en {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}
function _h(n, e) {
  const t = new Qs();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => s.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: n,
        alternation: s
      }),
      type: ce.TOO_MANY_ALTS,
      ruleName: n.name,
      occurrence: s.idx
    }
  ] : []);
}
function Lh(n, e, t) {
  const r = [];
  return C(n, (i) => {
    const s = new wh();
    i.accept(s);
    const a = s.allProductions;
    C(a, (o) => {
      const l = Js(o), c = o.maxLookahead || e, u = o.idx, h = yi(u, i, l, c)[0];
      if (D(Ne(h))) {
        const f = t.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        r.push({
          message: f,
          type: ce.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), r;
}
function Oh(n, e, t, r) {
  const i = [], s = oe(n, (o, l, c) => (e.definition[c].ignoreAmbiguities === !0 || C(l, (u) => {
    const d = [c];
    C(n, (h, f) => {
      c !== f && os(h, u) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[f].ignoreAmbiguities !== !0 && d.push(f);
    }), d.length > 1 && !os(i, u) && (i.push(u), o.push({
      alts: d,
      path: u
    }));
  }), o), []);
  return x(s, (o) => {
    const l = x(o.alts, (u) => u + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: t,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: ce.AMBIGUOUS_ALTS,
      ruleName: t.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function bh(n, e, t, r) {
  const i = oe(n, (a, o, l) => {
    const c = x(o, (u) => ({ idx: l, path: u }));
    return a.concat(c);
  }, []);
  return Xn(Ee(i, (a) => {
    if (e.definition[a.idx].ignoreAmbiguities === !0)
      return [];
    const l = a.idx, c = a.path, u = Se(i, (h) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[h.idx].ignoreAmbiguities !== !0 && h.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      vh(h.path, c)
    ));
    return x(u, (h) => {
      const f = [h.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: t,
          alternation: e,
          ambiguityIndices: f,
          prefixPath: h.path
        }),
        type: ce.AMBIGUOUS_PREFIX_ALTS,
        ruleName: t.name,
        occurrence: m,
        alternatives: f
      };
    });
  }));
}
function Ph(n, e, t) {
  const r = [], i = x(e, (s) => s.name);
  return C(n, (s) => {
    const a = s.name;
    if (ue(i, a)) {
      const o = t.buildNamespaceConflictError(s);
      r.push({
        message: o,
        type: ce.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a
      });
    }
  }), r;
}
function Mh(n) {
  const e = Fs(n, {
    errMsgProvider: ah
  }), t = {};
  return C(n.rules, (r) => {
    t[r.name] = r;
  }), oh(t, e.errMsgProvider);
}
function Dh(n) {
  return n = Fs(n, {
    errMsgProvider: ct
  }), Eh(n.rules, n.tokenTypes, n.errMsgProvider, n.grammarName);
}
const mc = "MismatchedTokenException", gc = "NoViableAltException", yc = "EarlyExitException", Tc = "NotAllInputParsedException", Rc = [
  mc,
  gc,
  yc,
  Tc
];
Object.freeze(Rc);
function jr(n) {
  return ue(Rc, n.name);
}
class Ti extends Error {
  constructor(e, t) {
    super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class vc extends Ti {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = mc;
  }
}
class Fh extends Ti {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = gc;
  }
}
class Gh extends Ti {
  constructor(e, t) {
    super(e, t), this.name = Tc;
  }
}
class Uh extends Ti {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = yc;
  }
}
const Pi = {}, Ac = "InRuleRecoveryException";
class Bh extends Error {
  constructor(e) {
    super(e), this.name = Ac;
  }
}
class Vh {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = N(e, "recoveryEnabled") ? e.recoveryEnabled : Xe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Wh);
  }
  getTokenToInsert(e) {
    const t = Xs(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return t.isInsertedInRecovery = !0, t;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, t, r, i) {
    const s = this.findReSyncTokenType(), a = this.exportLexerState(), o = [];
    let l = !1;
    const c = this.LA(1);
    let u = this.LA(1);
    const d = () => {
      const h = this.LA(0), f = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: c,
        previous: h,
        ruleName: this.getCurrRuleFullName()
      }), m = new vc(f, c, this.LA(0));
      m.resyncedTokens = Kn(o), this.SAVE_ERROR(m);
    };
    for (; !l; )
      if (this.tokenMatcher(u, i)) {
        d();
        return;
      } else if (r.call(this)) {
        d(), e.apply(this, t);
        return;
      } else this.tokenMatcher(u, s) ? l = !0 : (u = this.SKIP_TOKEN(), this.addToResyncTokens(u, o));
    this.importLexerState(a);
  }
  shouldInRepetitionRecoveryBeTried(e, t, r) {
    return !(r === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, t) {
    const r = this.getCurrentGrammarPath(e, t);
    return this.getNextPossibleTokenTypes(r);
  }
  tryInRuleRecovery(e, t) {
    if (this.canRecoverWithSingleTokenInsertion(e, t))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const r = this.SKIP_TOKEN();
      return this.consumeToken(), r;
    }
    throw new Bh("sad sad panda");
  }
  canPerformInRuleRecovery(e, t) {
    return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, t) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || D(t))
      return !1;
    const r = this.LA(1);
    return jt(t, (s) => this.tokenMatcher(r, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const t = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(t);
    return ue(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let t = this.LA(1), r = 2;
    for (; ; ) {
      const i = jt(e, (s) => lc(t, s));
      if (i !== void 0)
        return i;
      t = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Pi;
    const e = this.getLastExplicitRuleShortName(), t = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: t,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
    return x(e, (r, i) => i === 0 ? Pi : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: t[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = x(this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t));
    return Ne(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Pi)
      return [nt];
    const t = e.ruleName + e.idxInCallingRule + Jl + e.inRule;
    return this.resyncFollows[t];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, t) {
    return this.tokenMatcher(e, nt) || t.push(e), t;
  }
  reSyncTo(e) {
    const t = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === !1; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, t);
    return Kn(t);
  }
  attemptInRepetitionRecovery(e, t, r, i, s, a, o) {
  }
  getCurrentGrammarPath(e, t) {
    const r = this.getHumanReadableRuleStack(), i = ne(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: t
    };
  }
  getHumanReadableRuleStack() {
    return x(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function Wh(n, e, t, r, i, s, a) {
  const o = this.getKeyForAutomaticLookahead(r, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const h = this.getCurrRuleFullName(), f = this.getGAstProductions()[h];
    l = new s(f, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let c = l.token, u = l.occurrence;
  const d = l.isEndOfRule;
  this.RULE_STACK.length === 1 && d && c === void 0 && (c = nt, u = 1), !(c === void 0 || u === void 0) && this.shouldInRepetitionRecoveryBeTried(c, u, a) && this.tryInRepetitionRecovery(n, e, t, c);
}
const jh = 4, st = 8, Ec = 1 << st, kc = 2 << st, ls = 3 << st, cs = 4 << st, us = 5 << st, Cr = 6 << st;
function Mi(n, e, t) {
  return t | e | n;
}
class Zs {
  constructor(e) {
    var t;
    this.maxLookahead = (t = e == null ? void 0 : e.maxLookahead) !== null && t !== void 0 ? t : Xe.maxLookahead;
  }
  validate(e) {
    const t = this.validateNoLeftRecursion(e.rules);
    if (D(t)) {
      const r = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...t,
        ...r,
        ...i,
        ...s
      ];
    }
    return t;
  }
  validateNoLeftRecursion(e) {
    return Ee(e, (t) => pc(t, t, ct));
  }
  validateEmptyOrAlternatives(e) {
    return Ee(e, (t) => Ch(t, ct));
  }
  validateAmbiguousAlternationAlternatives(e, t) {
    return Ee(e, (r) => Nh(r, t, ct));
  }
  validateSomeNonEmptyLookaheadPath(e, t) {
    return Lh(e, t, ct);
  }
  buildLookaheadForAlternation(e) {
    return ph(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, gh);
  }
  buildLookaheadForOptional(e) {
    return mh(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, Js(e.prodType), yh);
  }
}
class Kh {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = N(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Xe.dynamicTokensEnabled, this.maxLookahead = N(e, "maxLookahead") ? e.maxLookahead : Xe.maxLookahead, this.lookaheadStrategy = N(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Zs({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    C(e, (t) => {
      this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: i, option: s, repetitionMandatory: a, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = zh(t);
        C(r, (c) => {
          const u = c.idx === 0 ? "" : c.idx;
          this.TRACE_INIT(`${Ge(c)}${u}`, () => {
            const d = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: c.idx,
              rule: t,
              maxLookahead: c.maxLookahead || this.maxLookahead,
              hasPredicates: c.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), h = Mi(this.fullRuleNameToShort[t.name], Ec, c.idx);
            this.setLaFuncCache(h, d);
          });
        }), C(i, (c) => {
          this.computeLookaheadFunc(t, c.idx, ls, "Repetition", c.maxLookahead, Ge(c));
        }), C(s, (c) => {
          this.computeLookaheadFunc(t, c.idx, kc, "Option", c.maxLookahead, Ge(c));
        }), C(a, (c) => {
          this.computeLookaheadFunc(t, c.idx, cs, "RepetitionMandatory", c.maxLookahead, Ge(c));
        }), C(o, (c) => {
          this.computeLookaheadFunc(t, c.idx, Cr, "RepetitionMandatoryWithSeparator", c.maxLookahead, Ge(c));
        }), C(l, (c) => {
          this.computeLookaheadFunc(t, c.idx, us, "RepetitionWithSeparator", c.maxLookahead, Ge(c));
        });
      });
    });
  }
  computeLookaheadFunc(e, t, r, i, s, a) {
    this.TRACE_INIT(`${a}${t === 0 ? "" : t}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: t,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = Mi(this.fullRuleNameToShort[e.name], r, t);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, t) {
    const r = this.getLastExplicitRuleShortName();
    return Mi(r, e, t);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, t) {
    this.lookAheadFuncsCache.set(e, t);
  }
}
class Hh extends en {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}
const yr = new Hh();
function zh(n) {
  yr.reset(), n.accept(yr);
  const e = yr.dslMethods;
  return yr.reset(), e;
}
function Va(n, e) {
  isNaN(n.startOffset) === !0 ? (n.startOffset = e.startOffset, n.endOffset = e.endOffset) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset);
}
function Wa(n, e) {
  isNaN(n.startOffset) === !0 ? (n.startOffset = e.startOffset, n.startColumn = e.startColumn, n.startLine = e.startLine, n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine);
}
function qh(n, e, t) {
  n.children[t] === void 0 ? n.children[t] = [e] : n.children[t].push(e);
}
function Yh(n, e, t) {
  n.children[e] === void 0 ? n.children[e] = [t] : n.children[e].push(t);
}
const Xh = "name";
function Sc(n, e) {
  Object.defineProperty(n, Xh, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function Jh(n, e) {
  const t = Wt(n), r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i], a = n[s], o = a.length;
    for (let l = 0; l < o; l++) {
      const c = a[l];
      c.tokenTypeIdx === void 0 && this[c.name](c.children, e);
    }
  }
}
function Qh(n, e) {
  const t = function() {
  };
  Sc(t, n + "BaseSemantics");
  const r = {
    visit: function(i, s) {
      if (ee(i) && (i = i[0]), !qe(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = ep(this, e);
      if (!D(i)) {
        const s = x(i, (a) => a.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return t.prototype = r, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
function Zh(n, e, t) {
  const r = function() {
  };
  Sc(r, n + "BaseSemanticsWithDefaults");
  const i = Object.create(t.prototype);
  return C(e, (s) => {
    i[s] = Jh;
  }), r.prototype = i, r.prototype.constructor = r, r;
}
var ds;
(function(n) {
  n[n.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", n[n.MISSING_METHOD = 1] = "MISSING_METHOD";
})(ds || (ds = {}));
function ep(n, e) {
  return tp(n, e);
}
function tp(n, e) {
  const t = Se(e, (i) => gt(n[i]) === !1), r = x(t, (i) => ({
    msg: `Missing visitor method: <${i}> on ${n.constructor.name} CST Visitor.`,
    type: ds.MISSING_METHOD,
    methodName: i
  }));
  return Xn(r);
}
class np {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = N(e, "nodeLocationTracking") ? e.nodeLocationTracking : Xe.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = Y, this.cstFinallyStateUpdate = Y, this.cstPostTerminal = Y, this.cstPostNonTerminal = Y, this.cstPostRule = Y;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Wa, this.setNodeLocationFromNode = Wa, this.cstPostRule = Y, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = Y, this.setNodeLocationFromNode = Y, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Va, this.setNodeLocationFromNode = Va, this.cstPostRule = Y, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = Y, this.setNodeLocationFromNode = Y, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = Y, this.setNodeLocationFromNode = Y, this.cstPostRule = Y, this.setInitialNodeLocation = Y;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const t = this.LA(1);
    e.location = {
      startOffset: t.startOffset,
      startLine: t.startLine,
      startColumn: t.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const t = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(t), this.CST_STACK.push(t);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? (r.endOffset = t.endOffset, r.endLine = t.endLine, r.endColumn = t.endColumn) : (r.startOffset = NaN, r.startLine = NaN, r.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? r.endOffset = t.endOffset : r.startOffset = NaN;
  }
  cstPostTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    qh(r, t, e), this.setNodeLocationFromToken(r.location, t);
  }
  cstPostNonTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    Yh(r, t, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (qe(this.baseCstVisitorConstructor)) {
      const e = Qh(this.className, Wt(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (qe(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = Zh(this.className, Wt(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}
class rp {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== !0)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Hr;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const t = this.currIdx + e;
    return t < 0 || this.tokVectorLength <= t ? Hr : this.tokVector[t];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}
class ip {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, t, r) {
    return this.consumeInternal(t, e, r);
  }
  subrule(e, t, r) {
    return this.subruleInternal(t, e, r);
  }
  option(e, t) {
    return this.optionInternal(t, e);
  }
  or(e, t) {
    return this.orInternal(t, e);
  }
  many(e, t) {
    return this.manyInternal(e, t);
  }
  atLeastOne(e, t) {
    return this.atLeastOneInternal(e, t);
  }
  CONSUME(e, t) {
    return this.consumeInternal(e, 0, t);
  }
  CONSUME1(e, t) {
    return this.consumeInternal(e, 1, t);
  }
  CONSUME2(e, t) {
    return this.consumeInternal(e, 2, t);
  }
  CONSUME3(e, t) {
    return this.consumeInternal(e, 3, t);
  }
  CONSUME4(e, t) {
    return this.consumeInternal(e, 4, t);
  }
  CONSUME5(e, t) {
    return this.consumeInternal(e, 5, t);
  }
  CONSUME6(e, t) {
    return this.consumeInternal(e, 6, t);
  }
  CONSUME7(e, t) {
    return this.consumeInternal(e, 7, t);
  }
  CONSUME8(e, t) {
    return this.consumeInternal(e, 8, t);
  }
  CONSUME9(e, t) {
    return this.consumeInternal(e, 9, t);
  }
  SUBRULE(e, t) {
    return this.subruleInternal(e, 0, t);
  }
  SUBRULE1(e, t) {
    return this.subruleInternal(e, 1, t);
  }
  SUBRULE2(e, t) {
    return this.subruleInternal(e, 2, t);
  }
  SUBRULE3(e, t) {
    return this.subruleInternal(e, 3, t);
  }
  SUBRULE4(e, t) {
    return this.subruleInternal(e, 4, t);
  }
  SUBRULE5(e, t) {
    return this.subruleInternal(e, 5, t);
  }
  SUBRULE6(e, t) {
    return this.subruleInternal(e, 6, t);
  }
  SUBRULE7(e, t) {
    return this.subruleInternal(e, 7, t);
  }
  SUBRULE8(e, t) {
    return this.subruleInternal(e, 8, t);
  }
  SUBRULE9(e, t) {
    return this.subruleInternal(e, 9, t);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, t, r = zr) {
    if (ue(this.definedRulesNames, e)) {
      const a = {
        message: ct.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ce.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, t, r);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, t, r = zr) {
    const i = $h(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, t, r);
    return this[e] = s, s;
  }
  BACKTRACK(e, t) {
    return function() {
      this.isBackTrackingStack.push(1);
      const r = this.saveRecogState();
      try {
        return e.apply(this, t), !0;
      } catch (i) {
        if (jr(i))
          return !1;
        throw i;
      } finally {
        this.reloadRecogState(r), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return hf(z(this.gastProductionsCache));
  }
}
class sp {
  initRecognizerEngine(e, t) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = Wr, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, N(t, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (ee(e)) {
      if (D(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (ee(e))
      this.tokensMap = oe(e, (s, a) => (s[a.name] = a, s), {});
    else if (N(e, "modes") && be(Ne(z(e.modes)), rh)) {
      const s = Ne(z(e.modes)), a = Gs(s);
      this.tokensMap = oe(a, (o, l) => (o[l.name] = l, o), {});
    } else if (Lu(e))
      this.tokensMap = ne(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = nt;
    const r = N(e, "modes") ? Ne(z(e.modes)) : z(e), i = be(r, (s) => D(s.categoryMatches));
    this.tokenMatcher = i ? Wr : er, tr(z(this.tokensMap));
  }
  defineRule(e, t, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = N(r, "resyncEnabled") ? r.resyncEnabled : zr.resyncEnabled, s = N(r, "recoveryValueFunc") ? r.recoveryValueFunc : zr.recoveryValueFunc, a = this.ruleShortNameIdx << jh + st;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
    let o;
    return this.outputCst === !0 ? o = function(...u) {
      try {
        this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, u);
        const d = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(d), d;
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...u) {
      try {
        return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, u);
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: t });
  }
  invokeRuleCatch(e, t, r) {
    const i = this.RULE_STACK.length === 1, s = t && !this.isBackTracking() && this.recoveryEnabled;
    if (jr(e)) {
      const a = e;
      if (s) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = !0, l;
          } else
            return r(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = !0, a.partialCstResult = l;
          }
          throw a;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), r(e);
        throw a;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(kc, t);
    return this.optionInternalLogic(e, t, r);
  }
  optionInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof e != "function") {
      s = e.DEF;
      const a = e.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = e;
    if (i.call(this) === !0)
      return s.call(this);
  }
  atLeastOneInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(cs, e);
    return this.atLeastOneInternalLogic(e, t, r);
  }
  atLeastOneInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const a = t.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = t;
    if (i.call(this) === !0) {
      let a = this.doSingleRepetition(s);
      for (; i.call(this) === !0 && a === !0; )
        a = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY, t.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], i, cs, e, fh);
  }
  atLeastOneSepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Cr, e);
    this.atLeastOneSepFirstInternalLogic(e, t, r);
  }
  atLeastOneSepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Ga
      ], o, Cr, e, Ga);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
  }
  manyInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(ls, e);
    return this.manyInternalLogic(e, t, r);
  }
  manyInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const o = t.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      s = t;
    let a = !0;
    for (; i.call(this) === !0 && a === !0; )
      a = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, t],
      i,
      ls,
      e,
      dh,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a
    );
  }
  manySepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(us, e);
    this.manySepFirstInternalLogic(e, t, r);
  }
  manySepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Fa
      ], o, us, e, Fa);
    }
  }
  repetitionSepSecondInternal(e, t, r, i, s) {
    for (; r(); )
      this.CONSUME(t), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      t,
      r,
      i,
      s
    ], r, Cr, e, s);
  }
  doSingleRepetition(e) {
    const t = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > t;
  }
  orInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Ec, t), i = ee(e) ? e : e.DEF, a = this.getLaFuncFromCache(r).call(this, i);
    if (a !== void 0)
      return i[a].ALT.call(this);
    this.raiseNoAltException(t, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
      const e = this.LA(1), t = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new Gh(t, e));
    }
  }
  subruleInternal(e, t, r) {
    let i;
    try {
      const s = r !== void 0 ? r.ARGS : void 0;
      return this.subruleIdx = t, i = e.apply(this, s), this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, r, e.ruleName);
    }
  }
  subruleInternalError(e, t, r) {
    throw jr(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : r), delete e.partialCstResult), e;
  }
  consumeInternal(e, t, r) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === !0 ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, r);
    } catch (s) {
      i = this.consumeInternalRecovery(e, t, s);
    }
    return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, i), i;
  }
  consumeInternalError(e, t, r) {
    let i;
    const s = this.LA(0);
    throw r !== void 0 && r.ERR_MSG ? i = r.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: t,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new vc(i, t, s));
  }
  consumeInternalRecovery(e, t, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, t);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === Ac ? r : s;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, t = ne(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: t,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, t, r) {
    this.RULE_OCCURRENCE_STACK.push(r), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), nt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class ap {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = N(e, "errorMessageProvider") ? e.errorMessageProvider : Xe.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (jr(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: ne(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return ne(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, t, r) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = yi(e, s, t, this.maxLookahead)[0], l = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      l.push(this.LA(u));
    const c = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: i
    });
    throw this.SAVE_ERROR(new Uh(c, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, t) {
    const r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], s = gi(e, i, this.maxLookahead), a = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      a.push(this.LA(c));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a,
      previous: o,
      customUserDescription: t,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new Fh(l, this.LA(1), o));
  }
}
class op {
  initContentAssist() {
  }
  computeContentAssist(e, t) {
    const r = this.gastProductionsCache[e];
    if (qe(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return cc([r], t, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const t = Pe(e.ruleStack), i = this.getGAstProductions()[t];
    return new uh(i, e).startWalking();
  }
}
const Ri = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(Ri);
const ja = !0, Ka = Math.pow(2, st) - 1, xc = oc({ name: "RECORDING_PHASE_TOKEN", pattern: de.NA });
tr([xc]);
const Ic = Xs(
  xc,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(Ic);
const lp = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class cp {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const t = e > 0 ? e : "";
        this[`CONSUME${t}`] = function(r, i) {
          return this.consumeInternalRecord(r, e, i);
        }, this[`SUBRULE${t}`] = function(r, i) {
          return this.subruleInternalRecord(r, e, i);
        }, this[`OPTION${t}`] = function(r) {
          return this.optionInternalRecord(r, e);
        }, this[`OR${t}`] = function(r) {
          return this.orInternalRecord(r, e);
        }, this[`MANY${t}`] = function(r) {
          this.manyInternalRecord(e, r);
        }, this[`MANY_SEP${t}`] = function(r) {
          this.manySepFirstInternalRecord(e, r);
        }, this[`AT_LEAST_ONE${t}`] = function(r) {
          this.atLeastOneInternalRecord(e, r);
        }, this[`AT_LEAST_ONE_SEP${t}`] = function(r) {
          this.atLeastOneSepFirstInternalRecord(e, r);
        };
      }
      this.consume = function(e, t, r) {
        return this.consumeInternalRecord(t, e, r);
      }, this.subrule = function(e, t, r) {
        return this.subruleInternalRecord(t, e, r);
      }, this.option = function(e, t) {
        return this.optionInternalRecord(t, e);
      }, this.or = function(e, t) {
        return this.orInternalRecord(t, e);
      }, this.many = function(e, t) {
        this.manyInternalRecord(e, t);
      }, this.atLeastOne = function(e, t) {
        this.atLeastOneInternalRecord(e, t);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let t = 0; t < 10; t++) {
        const r = t > 0 ? t : "";
        delete e[`CONSUME${r}`], delete e[`SUBRULE${r}`], delete e[`OPTION${r}`], delete e[`OR${r}`], delete e[`MANY${r}`], delete e[`MANY_SEP${r}`], delete e[`AT_LEAST_ONE${r}`], delete e[`AT_LEAST_ONE_SEP${r}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, t) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return Hr;
  }
  topLevelRuleRecord(e, t) {
    try {
      const r = new Zt({ definition: [], name: e });
      return r.name = e, this.recordingProdStack.push(r), t.call(this), this.recordingProdStack.pop(), r;
    } catch (r) {
      if (r.KNOWN_RECORDER_ERROR !== !0)
        try {
          r.message = r.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw r;
        }
      throw r;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, t) {
    return an.call(this, te, e, t);
  }
  atLeastOneInternalRecord(e, t) {
    an.call(this, xe, t, e);
  }
  atLeastOneSepFirstInternalRecord(e, t) {
    an.call(this, Ie, t, e, ja);
  }
  manyInternalRecord(e, t) {
    an.call(this, j, t, e);
  }
  manySepFirstInternalRecord(e, t) {
    an.call(this, me, t, e, ja);
  }
  orInternalRecord(e, t) {
    return up.call(this, e, t);
  }
  subruleInternalRecord(e, t, r) {
    if (Kr(t), !e || N(e, "ruleName") === !1) {
      const o = new Error(`<SUBRULE${Ha(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const i = Kt(this.recordingProdStack), s = e.ruleName, a = new le({
      idx: t,
      nonTerminalName: s,
      label: r == null ? void 0 : r.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a), this.outputCst ? lp : Ri;
  }
  consumeInternalRecord(e, t, r) {
    if (Kr(t), !sc(e)) {
      const a = new Error(`<CONSUME${Ha(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a.KNOWN_RECORDER_ERROR = !0, a;
    }
    const i = Kt(this.recordingProdStack), s = new G({
      idx: t,
      terminalType: e,
      label: r == null ? void 0 : r.LABEL
    });
    return i.definition.push(s), Ic;
  }
}
function an(n, e, t, r = !1) {
  Kr(t);
  const i = Kt(this.recordingProdStack), s = gt(e) ? e : e.DEF, a = new n({ definition: [], idx: t });
  return r && (a.separator = e.SEP), N(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a), s.call(this), i.definition.push(a), this.recordingProdStack.pop(), Ri;
}
function up(n, e) {
  Kr(e);
  const t = Kt(this.recordingProdStack), r = ee(n) === !1, i = r === !1 ? n : n.DEF, s = new ge({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && n.IGNORE_AMBIGUITIES === !0
  });
  N(n, "MAX_LOOKAHEAD") && (s.maxLookahead = n.MAX_LOOKAHEAD);
  const a = $l(i, (o) => gt(o.GATE));
  return s.hasPredicates = a, t.definition.push(s), C(i, (o) => {
    const l = new he({ definition: [] });
    s.definition.push(l), N(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : N(o, "GATE") && (l.ignoreAmbiguities = !0), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), Ri;
}
function Ha(n) {
  return n === 0 ? "" : `${n}`;
}
function Kr(n) {
  if (n < 0 || n > Ka) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${n}>
	Idx value must be a none negative value smaller than ${Ka + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class dp {
  initPerformanceTracer(e) {
    if (N(e, "traceInitPerf")) {
      const t = e.traceInitPerf, r = typeof t == "number";
      this.traceInitMaxIdent = r ? t : 1 / 0, this.traceInitPerf = r ? t > 0 : t;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Xe.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, t) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: i, value: s } = Yl(t), a = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a(`${r}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return t();
  }
}
function fp(n, e) {
  e.forEach((t) => {
    const r = t.prototype;
    Object.getOwnPropertyNames(r).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(r, i);
      s && (s.get || s.set) ? Object.defineProperty(n.prototype, i, s) : n.prototype[i] = t.prototype[i];
    });
  });
}
const Hr = Xs(nt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Hr);
const Xe = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: It,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), zr = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var ce;
(function(n) {
  n[n.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", n[n.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", n[n.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", n[n.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", n[n.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", n[n.LEFT_RECURSION = 5] = "LEFT_RECURSION", n[n.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", n[n.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", n[n.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", n[n.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", n[n.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", n[n.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", n[n.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", n[n.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ce || (ce = {}));
function za(n = void 0) {
  return function() {
    return n;
  };
}
class nr {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = !0;
      const t = this.className;
      this.TRACE_INIT("toFastProps", () => {
        Xl(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), C(this.definedRulesNames, (i) => {
            const a = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, a);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        r = Mh({
          rules: z(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (D(r) && this.skipValidations === !1) {
          const i = Dh({
            rules: z(this.gastProductionsCache),
            tokenTypes: z(this.tokensMap),
            errMsgProvider: ct,
            grammarName: t
          }), s = Ah({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: z(this.gastProductionsCache),
            tokenTypes: z(this.tokensMap),
            grammarName: t
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), D(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = vf(z(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: z(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(z(this.gastProductionsCache));
      })), !nr.DEFER_DEFINITION_ERRORS_HANDLING && !D(this.definitionErrors))
        throw e = x(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, t) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const r = this;
    if (r.initErrorHandler(t), r.initLexerAdapter(), r.initLooksAhead(t), r.initRecognizerEngine(e, t), r.initRecoverable(t), r.initTreeBuilder(t), r.initContentAssist(), r.initGastRecorder(t), r.initPerformanceTracer(t), N(t, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = N(t, "skipValidations") ? t.skipValidations : Xe.skipValidations;
  }
}
nr.DEFER_DEFINITION_ERRORS_HANDLING = !1;
fp(nr, [
  Vh,
  Kh,
  np,
  rp,
  sp,
  ip,
  ap,
  op,
  cp,
  dp
]);
class hp extends nr {
  constructor(e, t = Xe) {
    const r = ne(t);
    r.outputCst = !1, super(e, r);
  }
}
function Ht(n, e, t) {
  return `${n.name}_${e}_${t}`;
}
const rt = 1, pp = 2, $c = 4, Cc = 5, rr = 7, mp = 8, gp = 9, yp = 10, Tp = 11, Nc = 12;
class ea {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return !1;
  }
}
class ta extends ea {
  constructor(e, t) {
    super(e), this.tokenType = t;
  }
}
class wc extends ea {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return !0;
  }
}
class na extends ea {
  constructor(e, t, r) {
    super(e), this.rule = t, this.followState = r;
  }
  isEpsilon() {
    return !0;
  }
}
function Rp(n) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  vp(e, n);
  const t = n.length;
  for (let r = 0; r < t; r++) {
    const i = n[r], s = Tt(e, i, i);
    s !== void 0 && _p(e, i, s);
  }
  return e;
}
function vp(n, e) {
  const t = e.length;
  for (let r = 0; r < t; r++) {
    const i = e[r], s = X(n, i, void 0, {
      type: pp
    }), a = X(n, i, void 0, {
      type: rr
    });
    s.stop = a, n.ruleToStartState.set(i, s), n.ruleToStopState.set(i, a);
  }
}
function _c(n, e, t) {
  return t instanceof G ? ra(n, e, t.terminalType, t) : t instanceof le ? wp(n, e, t) : t instanceof ge ? xp(n, e, t) : t instanceof te ? Ip(n, e, t) : t instanceof j ? Ap(n, e, t) : t instanceof me ? Ep(n, e, t) : t instanceof xe ? kp(n, e, t) : t instanceof Ie ? Sp(n, e, t) : Tt(n, e, t);
}
function Ap(n, e, t) {
  const r = X(n, e, t, {
    type: Cc
  });
  at(n, r);
  const i = tn(n, e, r, t, Tt(n, e, t));
  return Oc(n, e, t, i);
}
function Ep(n, e, t) {
  const r = X(n, e, t, {
    type: Cc
  });
  at(n, r);
  const i = tn(n, e, r, t, Tt(n, e, t)), s = ra(n, e, t.separator, t);
  return Oc(n, e, t, i, s);
}
function kp(n, e, t) {
  const r = X(n, e, t, {
    type: $c
  });
  at(n, r);
  const i = tn(n, e, r, t, Tt(n, e, t));
  return Lc(n, e, t, i);
}
function Sp(n, e, t) {
  const r = X(n, e, t, {
    type: $c
  });
  at(n, r);
  const i = tn(n, e, r, t, Tt(n, e, t)), s = ra(n, e, t.separator, t);
  return Lc(n, e, t, i, s);
}
function xp(n, e, t) {
  const r = X(n, e, t, {
    type: rt
  });
  at(n, r);
  const i = x(t.definition, (a) => _c(n, e, a));
  return tn(n, e, r, t, ...i);
}
function Ip(n, e, t) {
  const r = X(n, e, t, {
    type: rt
  });
  at(n, r);
  const i = tn(n, e, r, t, Tt(n, e, t));
  return $p(n, e, t, i);
}
function Tt(n, e, t) {
  const r = Se(x(t.definition, (i) => _c(n, e, i)), (i) => i !== void 0);
  return r.length === 1 ? r[0] : r.length === 0 ? void 0 : Np(n, r);
}
function Lc(n, e, t, r, i) {
  const s = r.left, a = r.right, o = X(n, e, t, {
    type: Tp
  });
  at(n, o);
  const l = X(n, e, t, {
    type: Nc
  });
  return s.loopback = o, l.loopback = o, n.decisionMap[Ht(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = o, H(a, o), i === void 0 ? (H(o, s), H(o, l)) : (H(o, l), H(o, i.left), H(i.right, s)), {
    left: s,
    right: l
  };
}
function Oc(n, e, t, r, i) {
  const s = r.left, a = r.right, o = X(n, e, t, {
    type: yp
  });
  at(n, o);
  const l = X(n, e, t, {
    type: Nc
  }), c = X(n, e, t, {
    type: gp
  });
  return o.loopback = c, l.loopback = c, H(o, s), H(o, l), H(a, c), i !== void 0 ? (H(c, l), H(c, i.left), H(i.right, s)) : H(c, o), n.decisionMap[Ht(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = o, {
    left: o,
    right: l
  };
}
function $p(n, e, t, r) {
  const i = r.left, s = r.right;
  return H(i, s), n.decisionMap[Ht(e, "Option", t.idx)] = i, r;
}
function at(n, e) {
  return n.decisionStates.push(e), e.decision = n.decisionStates.length - 1, e.decision;
}
function tn(n, e, t, r, ...i) {
  const s = X(n, e, r, {
    type: mp,
    start: t
  });
  t.end = s;
  for (const o of i)
    o !== void 0 ? (H(t, o.left), H(o.right, s)) : H(t, s);
  const a = {
    left: t,
    right: s
  };
  return n.decisionMap[Ht(e, Cp(r), r.idx)] = t, a;
}
function Cp(n) {
  if (n instanceof ge)
    return "Alternation";
  if (n instanceof te)
    return "Option";
  if (n instanceof j)
    return "Repetition";
  if (n instanceof me)
    return "RepetitionWithSeparator";
  if (n instanceof xe)
    return "RepetitionMandatory";
  if (n instanceof Ie)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function Np(n, e) {
  const t = e.length;
  for (let s = 0; s < t - 1; s++) {
    const a = e[s];
    let o;
    a.left.transitions.length === 1 && (o = a.left.transitions[0]);
    const l = o instanceof na, c = o, u = e[s + 1].left;
    a.left.type === rt && a.right.type === rt && o !== void 0 && (l && c.followState === a.right || o.target === a.right) ? (l ? c.followState = u : o.target = u, Lp(n, a.right)) : H(a.right, u);
  }
  const r = e[0], i = e[t - 1];
  return {
    left: r.left,
    right: i.right
  };
}
function ra(n, e, t, r) {
  const i = X(n, e, r, {
    type: rt
  }), s = X(n, e, r, {
    type: rt
  });
  return ia(i, new ta(s, t)), {
    left: i,
    right: s
  };
}
function wp(n, e, t) {
  const r = t.referencedRule, i = n.ruleToStartState.get(r), s = X(n, e, t, {
    type: rt
  }), a = X(n, e, t, {
    type: rt
  }), o = new na(i, r, a);
  return ia(s, o), {
    left: s,
    right: a
  };
}
function _p(n, e, t) {
  const r = n.ruleToStartState.get(e);
  H(r, t.left);
  const i = n.ruleToStopState.get(e);
  return H(t.right, i), {
    left: r,
    right: i
  };
}
function H(n, e) {
  const t = new wc(e);
  ia(n, t);
}
function X(n, e, t, r) {
  const i = Object.assign({
    atn: n,
    production: t,
    epsilonOnlyTransitions: !1,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: n.states.length
  }, r);
  return n.states.push(i), i;
}
function ia(n, e) {
  n.transitions.length === 0 && (n.epsilonOnlyTransitions = e.isEpsilon()), n.transitions.push(e);
}
function Lp(n, e) {
  n.states.splice(n.states.indexOf(e), 1);
}
const qr = {};
class fs {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const t = bc(e);
    t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return x(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const t in this.map)
      e += t + ":";
    return e;
  }
}
function bc(n, e = !0) {
  return `${e ? `a${n.alt}` : ""}s${n.state.stateNumber}:${n.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
function Op(n, e) {
  const t = {};
  return (r) => {
    const i = r.toString();
    let s = t[i];
    return s !== void 0 || (s = {
      atnStartState: n,
      decision: e,
      states: {}
    }, t[i] = s), s;
  };
}
class Pc {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, t) {
    this.predicates[e] = t;
  }
  toString() {
    let e = "";
    const t = this.predicates.length;
    for (let r = 0; r < t; r++)
      e += this.predicates[r] === !0 ? "1" : "0";
    return e;
  }
}
const qa = new Pc();
class bp extends Zs {
  constructor(e) {
    var t;
    super(), this.logging = (t = e == null ? void 0 : e.logging) !== null && t !== void 0 ? t : (r) => console.log(r);
  }
  initialize(e) {
    this.atn = Rp(e.rules), this.dfas = Pp(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: t, rule: r, hasPredicates: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Ht(r, "Alternation", t), u = this.atn.decisionMap[l].decision, d = x(Ua({
      maxLookahead: 1,
      occurrence: t,
      prodType: "Alternation",
      rule: r
    }), (h) => x(h, (f) => f[0]));
    if (Ya(d, !1) && !s) {
      const h = oe(d, (f, m, g) => (C(m, (v) => {
        v && (f[v.tokenTypeIdx] = g, C(v.categoryMatches, (y) => {
          f[y] = g;
        }));
      }), f), {});
      return i ? function(f) {
        var m;
        const g = this.LA(1), v = h[g.tokenTypeIdx];
        if (f !== void 0 && v !== void 0) {
          const y = (m = f[v]) === null || m === void 0 ? void 0 : m.GATE;
          if (y !== void 0 && y.call(this) === !1)
            return;
        }
        return v;
      } : function() {
        const f = this.LA(1);
        return h[f.tokenTypeIdx];
      };
    } else return i ? function(h) {
      const f = new Pc(), m = h === void 0 ? 0 : h.length;
      for (let v = 0; v < m; v++) {
        const y = h == null ? void 0 : h[v].GATE;
        f.set(v, y === void 0 || y.call(this));
      }
      const g = Di.call(this, a, u, f, o);
      return typeof g == "number" ? g : void 0;
    } : function() {
      const h = Di.call(this, a, u, qa, o);
      return typeof h == "number" ? h : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: t, rule: r, prodType: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Ht(r, i, t), u = this.atn.decisionMap[l].decision, d = x(Ua({
      maxLookahead: 1,
      occurrence: t,
      prodType: i,
      rule: r
    }), (h) => x(h, (f) => f[0]));
    if (Ya(d) && d[0][0] && !s) {
      const h = d[0], f = Ne(h);
      if (f.length === 1 && D(f[0].categoryMatches)) {
        const g = f[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === g;
        };
      } else {
        const m = oe(f, (g, v) => (v !== void 0 && (g[v.tokenTypeIdx] = !0, C(v.categoryMatches, (y) => {
          g[y] = !0;
        })), g), {});
        return function() {
          const g = this.LA(1);
          return m[g.tokenTypeIdx] === !0;
        };
      }
    }
    return function() {
      const h = Di.call(this, a, u, qa, o);
      return typeof h == "object" ? !1 : h === 0;
    };
  }
}
function Ya(n, e = !0) {
  const t = /* @__PURE__ */ new Set();
  for (const r of n) {
    const i = /* @__PURE__ */ new Set();
    for (const s of r) {
      if (s === void 0) {
        if (e)
          break;
        return !1;
      }
      const a = [s.tokenTypeIdx].concat(s.categoryMatches);
      for (const o of a)
        if (t.has(o)) {
          if (!i.has(o))
            return !1;
        } else
          t.add(o), i.add(o);
    }
  }
  return !0;
}
function Pp(n) {
  const e = n.decisionStates.length, t = Array(e);
  for (let r = 0; r < e; r++)
    t[r] = Op(n.decisionStates[r], r);
  return t;
}
function Di(n, e, t, r) {
  const i = n[e](t);
  let s = i.start;
  if (s === void 0) {
    const o = Hp(i.atnStartState);
    s = Dc(i, Mc(o)), i.start = s;
  }
  return Mp.apply(this, [i, s, t, r]);
}
function Mp(n, e, t, r) {
  let i = e, s = 1;
  const a = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = Vp(i, o);
    if (l === void 0 && (l = Dp.apply(this, [n, i, o, s, t, r])), l === qr)
      return Bp(a, i, o);
    if (l.isAcceptState === !0)
      return l.prediction;
    i = l, a.push(o), o = this.LA(s++);
  }
}
function Dp(n, e, t, r, i, s) {
  const a = Wp(e.configs, t, i);
  if (a.size === 0)
    return Xa(n, e, t, qr), qr;
  let o = Mc(a);
  const l = Kp(a, i);
  if (l !== void 0)
    o.isAcceptState = !0, o.prediction = l, o.configs.uniqueAlt = l;
  else if (Xp(a)) {
    const c = Vu(a.alts);
    o.isAcceptState = !0, o.prediction = c, o.configs.uniqueAlt = c, Fp.apply(this, [n, r, a.alts, s]);
  }
  return o = Xa(n, e, t, o), o;
}
function Fp(n, e, t, r) {
  const i = [];
  for (let c = 1; c <= e; c++)
    i.push(this.LA(c).tokenType);
  const s = n.atnStartState, a = s.rule, o = s.production, l = Gp({
    topLevelRule: a,
    ambiguityIndices: t,
    production: o,
    prefixPath: i
  });
  r(l);
}
function Gp(n) {
  const e = x(n.prefixPath, (i) => Ct(i)).join(", "), t = n.production.idx === 0 ? "" : n.production.idx;
  let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(", ")}> in <${Up(n.production)}${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
}
function Up(n) {
  if (n instanceof le)
    return "SUBRULE";
  if (n instanceof te)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof xe)
    return "AT_LEAST_ONE";
  if (n instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof j)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function Bp(n, e, t) {
  const r = Ee(e.configs.elements, (s) => s.state.transitions), i = ld(r.filter((s) => s instanceof ta).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: t,
    possibleTokenTypes: i,
    tokenPath: n
  };
}
function Vp(n, e) {
  return n.edges[e.tokenTypeIdx];
}
function Wp(n, e, t) {
  const r = new fs(), i = [];
  for (const a of n.elements) {
    if (t.is(a.alt) === !1)
      continue;
    if (a.state.type === rr) {
      i.push(a);
      continue;
    }
    const o = a.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const c = a.state.transitions[l], u = jp(c, e);
      u !== void 0 && r.add({
        state: u,
        alt: a.alt,
        stack: a.stack
      });
    }
  }
  let s;
  if (i.length === 0 && r.size === 1 && (s = r), s === void 0) {
    s = new fs();
    for (const a of r.elements)
      Yr(a, s);
  }
  if (i.length > 0 && !qp(s))
    for (const a of i)
      s.add(a);
  return s;
}
function jp(n, e) {
  if (n instanceof ta && lc(e, n.tokenType))
    return n.target;
}
function Kp(n, e) {
  let t;
  for (const r of n.elements)
    if (e.is(r.alt) === !0) {
      if (t === void 0)
        t = r.alt;
      else if (t !== r.alt)
        return;
    }
  return t;
}
function Mc(n) {
  return {
    configs: n,
    edges: {},
    isAcceptState: !1,
    prediction: -1
  };
}
function Xa(n, e, t, r) {
  return r = Dc(n, r), e.edges[t.tokenTypeIdx] = r, r;
}
function Dc(n, e) {
  if (e === qr)
    return e;
  const t = e.configs.key, r = n.states[t];
  return r !== void 0 ? r : (e.configs.finalize(), n.states[t] = e, e);
}
function Hp(n) {
  const e = new fs(), t = n.transitions.length;
  for (let r = 0; r < t; r++) {
    const s = {
      state: n.transitions[r].target,
      alt: r,
      stack: []
    };
    Yr(s, e);
  }
  return e;
}
function Yr(n, e) {
  const t = n.state;
  if (t.type === rr) {
    if (n.stack.length > 0) {
      const i = [...n.stack], a = {
        state: i.pop(),
        alt: n.alt,
        stack: i
      };
      Yr(a, e);
    } else
      e.add(n);
    return;
  }
  t.epsilonOnlyTransitions || e.add(n);
  const r = t.transitions.length;
  for (let i = 0; i < r; i++) {
    const s = t.transitions[i], a = zp(n, s);
    a !== void 0 && Yr(a, e);
  }
}
function zp(n, e) {
  if (e instanceof wc)
    return {
      state: e.target,
      alt: n.alt,
      stack: n.stack
    };
  if (e instanceof na) {
    const t = [...n.stack, e.followState];
    return {
      state: e.target,
      alt: n.alt,
      stack: t
    };
  }
}
function qp(n) {
  for (const e of n.elements)
    if (e.state.type === rr)
      return !0;
  return !1;
}
function Yp(n) {
  for (const e of n.elements)
    if (e.state.type !== rr)
      return !1;
  return !0;
}
function Xp(n) {
  if (Yp(n))
    return !0;
  const e = Jp(n.elements);
  return Qp(e) && !Zp(e);
}
function Jp(n) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    const r = bc(t, !1);
    let i = e.get(r);
    i === void 0 && (i = {}, e.set(r, i)), i[t.alt] = !0;
  }
  return e;
}
function Qp(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length > 1)
      return !0;
  return !1;
}
function Zp(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length === 1)
      return !0;
  return !1;
}
var Ja;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(Ja || (Ja = {}));
var hs;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(hs || (hs = {}));
var Qa;
(function(n) {
  n.MIN_VALUE = -2147483648, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(Qa || (Qa = {}));
var Xr;
(function(n) {
  n.MIN_VALUE = 0, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(Xr || (Xr = {}));
var P;
(function(n) {
  function e(r, i) {
    return r === Number.MAX_VALUE && (r = Xr.MAX_VALUE), i === Number.MAX_VALUE && (i = Xr.MAX_VALUE), { line: r, character: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && p.uinteger(i.line) && p.uinteger(i.character);
  }
  n.is = t;
})(P || (P = {}));
var b;
(function(n) {
  function e(r, i, s, a) {
    if (p.uinteger(r) && p.uinteger(i) && p.uinteger(s) && p.uinteger(a))
      return { start: P.create(r, i), end: P.create(s, a) };
    if (P.is(r) && P.is(i))
      return { start: r, end: i };
    throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a}]`);
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && P.is(i.start) && P.is(i.end);
  }
  n.is = t;
})(b || (b = {}));
var Jr;
(function(n) {
  function e(r, i) {
    return { uri: r, range: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.range) && (p.string(i.uri) || p.undefined(i.uri));
  }
  n.is = t;
})(Jr || (Jr = {}));
var Za;
(function(n) {
  function e(r, i, s, a) {
    return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.targetRange) && p.string(i.targetUri) && b.is(i.targetSelectionRange) && (b.is(i.originSelectionRange) || p.undefined(i.originSelectionRange));
  }
  n.is = t;
})(Za || (Za = {}));
var ps;
(function(n) {
  function e(r, i, s, a) {
    return {
      red: r,
      green: i,
      blue: s,
      alpha: a
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.numberRange(i.red, 0, 1) && p.numberRange(i.green, 0, 1) && p.numberRange(i.blue, 0, 1) && p.numberRange(i.alpha, 0, 1);
  }
  n.is = t;
})(ps || (ps = {}));
var eo;
(function(n) {
  function e(r, i) {
    return {
      range: r,
      color: i
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && b.is(i.range) && ps.is(i.color);
  }
  n.is = t;
})(eo || (eo = {}));
var to;
(function(n) {
  function e(r, i, s) {
    return {
      label: r,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || qt.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, qt.is));
  }
  n.is = t;
})(to || (to = {}));
var no;
(function(n) {
  n.Comment = "comment", n.Imports = "imports", n.Region = "region";
})(no || (no = {}));
var ro;
(function(n) {
  function e(r, i, s, a, o, l) {
    const c = {
      startLine: r,
      endLine: i
    };
    return p.defined(s) && (c.startCharacter = s), p.defined(a) && (c.endCharacter = a), p.defined(o) && (c.kind = o), p.defined(l) && (c.collapsedText = l), c;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.uinteger(i.startLine) && p.uinteger(i.startLine) && (p.undefined(i.startCharacter) || p.uinteger(i.startCharacter)) && (p.undefined(i.endCharacter) || p.uinteger(i.endCharacter)) && (p.undefined(i.kind) || p.string(i.kind));
  }
  n.is = t;
})(ro || (ro = {}));
var ms;
(function(n) {
  function e(r, i) {
    return {
      location: r,
      message: i
    };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && Jr.is(i.location) && p.string(i.message);
  }
  n.is = t;
})(ms || (ms = {}));
var io;
(function(n) {
  n.Error = 1, n.Warning = 2, n.Information = 3, n.Hint = 4;
})(io || (io = {}));
var so;
(function(n) {
  n.Unnecessary = 1, n.Deprecated = 2;
})(so || (so = {}));
var ao;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && p.string(r.href);
  }
  n.is = e;
})(ao || (ao = {}));
var Qr;
(function(n) {
  function e(r, i, s, a, o, l) {
    let c = { range: r, message: i };
    return p.defined(s) && (c.severity = s), p.defined(a) && (c.code = a), p.defined(o) && (c.source = o), p.defined(l) && (c.relatedInformation = l), c;
  }
  n.create = e;
  function t(r) {
    var i;
    let s = r;
    return p.defined(s) && b.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, ms.is));
  }
  n.is = t;
})(Qr || (Qr = {}));
var zt;
(function(n) {
  function e(r, i, ...s) {
    let a = { title: r, command: i };
    return p.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.title) && p.string(i.command);
  }
  n.is = t;
})(zt || (zt = {}));
var qt;
(function(n) {
  function e(s, a) {
    return { range: s, newText: a };
  }
  n.replace = e;
  function t(s, a) {
    return { range: { start: s, end: s }, newText: a };
  }
  n.insert = t;
  function r(s) {
    return { range: s, newText: "" };
  }
  n.del = r;
  function i(s) {
    const a = s;
    return p.objectLiteral(a) && p.string(a.newText) && b.is(a.range);
  }
  n.is = i;
})(qt || (qt = {}));
var gs;
(function(n) {
  function e(r, i, s) {
    const a = { label: r };
    return i !== void 0 && (a.needsConfirmation = i), s !== void 0 && (a.description = s), a;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (p.string(i.description) || i.description === void 0);
  }
  n.is = t;
})(gs || (gs = {}));
var Yt;
(function(n) {
  function e(t) {
    const r = t;
    return p.string(r);
  }
  n.is = e;
})(Yt || (Yt = {}));
var oo;
(function(n) {
  function e(s, a, o) {
    return { range: s, newText: a, annotationId: o };
  }
  n.replace = e;
  function t(s, a, o) {
    return { range: { start: s, end: s }, newText: a, annotationId: o };
  }
  n.insert = t;
  function r(s, a) {
    return { range: s, newText: "", annotationId: a };
  }
  n.del = r;
  function i(s) {
    const a = s;
    return qt.is(a) && (gs.is(a.annotationId) || Yt.is(a.annotationId));
  }
  n.is = i;
})(oo || (oo = {}));
var ys;
(function(n) {
  function e(r, i) {
    return { textDocument: r, edits: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && Es.is(i.textDocument) && Array.isArray(i.edits);
  }
  n.is = t;
})(ys || (ys = {}));
var Ts;
(function(n) {
  function e(r, i, s) {
    let a = {
      kind: "create",
      uri: r
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Yt.is(i.annotationId));
  }
  n.is = t;
})(Ts || (Ts = {}));
var Rs;
(function(n) {
  function e(r, i, s, a) {
    let o = {
      kind: "rename",
      oldUri: r,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a !== void 0 && (o.annotationId = a), o;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Yt.is(i.annotationId));
  }
  n.is = t;
})(Rs || (Rs = {}));
var vs;
(function(n) {
  function e(r, i, s) {
    let a = {
      kind: "delete",
      uri: r
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Yt.is(i.annotationId));
  }
  n.is = t;
})(vs || (vs = {}));
var As;
(function(n) {
  function e(t) {
    let r = t;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => p.string(i.kind) ? Ts.is(i) || Rs.is(i) || vs.is(i) : ys.is(i)));
  }
  n.is = e;
})(As || (As = {}));
var lo;
(function(n) {
  function e(r) {
    return { uri: r };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri);
  }
  n.is = t;
})(lo || (lo = {}));
var co;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.integer(i.version);
  }
  n.is = t;
})(co || (co = {}));
var Es;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && (i.version === null || p.integer(i.version));
  }
  n.is = t;
})(Es || (Es = {}));
var uo;
(function(n) {
  function e(r, i, s, a) {
    return { uri: r, languageId: i, version: s, text: a };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.string(i.languageId) && p.integer(i.version) && p.string(i.text);
  }
  n.is = t;
})(uo || (uo = {}));
var ks;
(function(n) {
  n.PlainText = "plaintext", n.Markdown = "markdown";
  function e(t) {
    const r = t;
    return r === n.PlainText || r === n.Markdown;
  }
  n.is = e;
})(ks || (ks = {}));
var zn;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(t) && ks.is(r.kind) && p.string(r.value);
  }
  n.is = e;
})(zn || (zn = {}));
var fo;
(function(n) {
  n.Text = 1, n.Method = 2, n.Function = 3, n.Constructor = 4, n.Field = 5, n.Variable = 6, n.Class = 7, n.Interface = 8, n.Module = 9, n.Property = 10, n.Unit = 11, n.Value = 12, n.Enum = 13, n.Keyword = 14, n.Snippet = 15, n.Color = 16, n.File = 17, n.Reference = 18, n.Folder = 19, n.EnumMember = 20, n.Constant = 21, n.Struct = 22, n.Event = 23, n.Operator = 24, n.TypeParameter = 25;
})(fo || (fo = {}));
var ho;
(function(n) {
  n.PlainText = 1, n.Snippet = 2;
})(ho || (ho = {}));
var po;
(function(n) {
  n.Deprecated = 1;
})(po || (po = {}));
var mo;
(function(n) {
  function e(r, i, s) {
    return { newText: r, insert: i, replace: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i && p.string(i.newText) && b.is(i.insert) && b.is(i.replace);
  }
  n.is = t;
})(mo || (mo = {}));
var go;
(function(n) {
  n.asIs = 1, n.adjustIndentation = 2;
})(go || (go = {}));
var yo;
(function(n) {
  function e(t) {
    const r = t;
    return r && (p.string(r.detail) || r.detail === void 0) && (p.string(r.description) || r.description === void 0);
  }
  n.is = e;
})(yo || (yo = {}));
var To;
(function(n) {
  function e(t) {
    return { label: t };
  }
  n.create = e;
})(To || (To = {}));
var Ro;
(function(n) {
  function e(t, r) {
    return { items: t || [], isIncomplete: !!r };
  }
  n.create = e;
})(Ro || (Ro = {}));
var Zr;
(function(n) {
  function e(r) {
    return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  n.fromPlainText = e;
  function t(r) {
    const i = r;
    return p.string(i) || p.objectLiteral(i) && p.string(i.language) && p.string(i.value);
  }
  n.is = t;
})(Zr || (Zr = {}));
var vo;
(function(n) {
  function e(t) {
    let r = t;
    return !!r && p.objectLiteral(r) && (zn.is(r.contents) || Zr.is(r.contents) || p.typedArray(r.contents, Zr.is)) && (t.range === void 0 || b.is(t.range));
  }
  n.is = e;
})(vo || (vo = {}));
var Ao;
(function(n) {
  function e(t, r) {
    return r ? { label: t, documentation: r } : { label: t };
  }
  n.create = e;
})(Ao || (Ao = {}));
var Eo;
(function(n) {
  function e(t, r, ...i) {
    let s = { label: t };
    return p.defined(r) && (s.documentation = r), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  n.create = e;
})(Eo || (Eo = {}));
var ko;
(function(n) {
  n.Text = 1, n.Read = 2, n.Write = 3;
})(ko || (ko = {}));
var So;
(function(n) {
  function e(t, r) {
    let i = { range: t };
    return p.number(r) && (i.kind = r), i;
  }
  n.create = e;
})(So || (So = {}));
var xo;
(function(n) {
  n.File = 1, n.Module = 2, n.Namespace = 3, n.Package = 4, n.Class = 5, n.Method = 6, n.Property = 7, n.Field = 8, n.Constructor = 9, n.Enum = 10, n.Interface = 11, n.Function = 12, n.Variable = 13, n.Constant = 14, n.String = 15, n.Number = 16, n.Boolean = 17, n.Array = 18, n.Object = 19, n.Key = 20, n.Null = 21, n.EnumMember = 22, n.Struct = 23, n.Event = 24, n.Operator = 25, n.TypeParameter = 26;
})(xo || (xo = {}));
var Io;
(function(n) {
  n.Deprecated = 1;
})(Io || (Io = {}));
var $o;
(function(n) {
  function e(t, r, i, s, a) {
    let o = {
      name: t,
      kind: r,
      location: { uri: s, range: i }
    };
    return a && (o.containerName = a), o;
  }
  n.create = e;
})($o || ($o = {}));
var Co;
(function(n) {
  function e(t, r, i, s) {
    return s !== void 0 ? { name: t, kind: r, location: { uri: i, range: s } } : { name: t, kind: r, location: { uri: i } };
  }
  n.create = e;
})(Co || (Co = {}));
var No;
(function(n) {
  function e(r, i, s, a, o, l) {
    let c = {
      name: r,
      detail: i,
      kind: s,
      range: a,
      selectionRange: o
    };
    return l !== void 0 && (c.children = l), c;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.name) && p.number(i.kind) && b.is(i.range) && b.is(i.selectionRange) && (i.detail === void 0 || p.string(i.detail)) && (i.deprecated === void 0 || p.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  n.is = t;
})(No || (No = {}));
var wo;
(function(n) {
  n.Empty = "", n.QuickFix = "quickfix", n.Refactor = "refactor", n.RefactorExtract = "refactor.extract", n.RefactorInline = "refactor.inline", n.RefactorRewrite = "refactor.rewrite", n.Source = "source", n.SourceOrganizeImports = "source.organizeImports", n.SourceFixAll = "source.fixAll";
})(wo || (wo = {}));
var ei;
(function(n) {
  n.Invoked = 1, n.Automatic = 2;
})(ei || (ei = {}));
var _o;
(function(n) {
  function e(r, i, s) {
    let a = { diagnostics: r };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.typedArray(i.diagnostics, Qr.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === ei.Invoked || i.triggerKind === ei.Automatic);
  }
  n.is = t;
})(_o || (_o = {}));
var Lo;
(function(n) {
  function e(r, i, s) {
    let a = { title: r }, o = !0;
    return typeof i == "string" ? (o = !1, a.kind = i) : zt.is(i) ? a.command = i : a.edit = i, o && s !== void 0 && (a.kind = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, Qr.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || zt.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || As.is(i.edit));
  }
  n.is = t;
})(Lo || (Lo = {}));
var Oo;
(function(n) {
  function e(r, i) {
    let s = { range: r };
    return p.defined(i) && (s.data = i), s;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && b.is(i.range) && (p.undefined(i.command) || zt.is(i.command));
  }
  n.is = t;
})(Oo || (Oo = {}));
var bo;
(function(n) {
  function e(r, i) {
    return { tabSize: r, insertSpaces: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.uinteger(i.tabSize) && p.boolean(i.insertSpaces);
  }
  n.is = t;
})(bo || (bo = {}));
var Po;
(function(n) {
  function e(r, i, s) {
    return { range: r, target: i, data: s };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && b.is(i.range) && (p.undefined(i.target) || p.string(i.target));
  }
  n.is = t;
})(Po || (Po = {}));
var Mo;
(function(n) {
  function e(r, i) {
    return { range: r, parent: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.range) && (i.parent === void 0 || n.is(i.parent));
  }
  n.is = t;
})(Mo || (Mo = {}));
var Do;
(function(n) {
  n.namespace = "namespace", n.type = "type", n.class = "class", n.enum = "enum", n.interface = "interface", n.struct = "struct", n.typeParameter = "typeParameter", n.parameter = "parameter", n.variable = "variable", n.property = "property", n.enumMember = "enumMember", n.event = "event", n.function = "function", n.method = "method", n.macro = "macro", n.keyword = "keyword", n.modifier = "modifier", n.comment = "comment", n.string = "string", n.number = "number", n.regexp = "regexp", n.operator = "operator", n.decorator = "decorator";
})(Do || (Do = {}));
var Fo;
(function(n) {
  n.declaration = "declaration", n.definition = "definition", n.readonly = "readonly", n.static = "static", n.deprecated = "deprecated", n.abstract = "abstract", n.async = "async", n.modification = "modification", n.documentation = "documentation", n.defaultLibrary = "defaultLibrary";
})(Fo || (Fo = {}));
var Go;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  n.is = e;
})(Go || (Go = {}));
var Uo;
(function(n) {
  function e(r, i) {
    return { range: r, text: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && p.string(i.text);
  }
  n.is = t;
})(Uo || (Uo = {}));
var Bo;
(function(n) {
  function e(r, i, s) {
    return { range: r, variableName: i, caseSensitiveLookup: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && p.boolean(i.caseSensitiveLookup) && (p.string(i.variableName) || i.variableName === void 0);
  }
  n.is = t;
})(Bo || (Bo = {}));
var Vo;
(function(n) {
  function e(r, i) {
    return { range: r, expression: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && (p.string(i.expression) || i.expression === void 0);
  }
  n.is = t;
})(Vo || (Vo = {}));
var Wo;
(function(n) {
  function e(r, i) {
    return { frameId: r, stoppedLocation: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.defined(i) && b.is(r.stoppedLocation);
  }
  n.is = t;
})(Wo || (Wo = {}));
var Ss;
(function(n) {
  n.Type = 1, n.Parameter = 2;
  function e(t) {
    return t === 1 || t === 2;
  }
  n.is = e;
})(Ss || (Ss = {}));
var xs;
(function(n) {
  function e(r) {
    return { value: r };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || zn.is(i.tooltip)) && (i.location === void 0 || Jr.is(i.location)) && (i.command === void 0 || zt.is(i.command));
  }
  n.is = t;
})(xs || (xs = {}));
var jo;
(function(n) {
  function e(r, i, s) {
    const a = { position: r, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && P.is(i.position) && (p.string(i.label) || p.typedArray(i.label, xs.is)) && (i.kind === void 0 || Ss.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, qt.is) && (i.tooltip === void 0 || p.string(i.tooltip) || zn.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  n.is = t;
})(jo || (jo = {}));
var Ko;
(function(n) {
  function e(t) {
    return { kind: "snippet", value: t };
  }
  n.createSnippet = e;
})(Ko || (Ko = {}));
var Ho;
(function(n) {
  function e(t, r, i, s) {
    return { insertText: t, filterText: r, range: i, command: s };
  }
  n.create = e;
})(Ho || (Ho = {}));
var zo;
(function(n) {
  function e(t) {
    return { items: t };
  }
  n.create = e;
})(zo || (zo = {}));
var qo;
(function(n) {
  n.Invoked = 0, n.Automatic = 1;
})(qo || (qo = {}));
var Yo;
(function(n) {
  function e(t, r) {
    return { range: t, text: r };
  }
  n.create = e;
})(Yo || (Yo = {}));
var Xo;
(function(n) {
  function e(t, r) {
    return { triggerKind: t, selectedCompletionInfo: r };
  }
  n.create = e;
})(Xo || (Xo = {}));
var Jo;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && hs.is(r.uri) && p.string(r.name);
  }
  n.is = e;
})(Jo || (Jo = {}));
var Qo;
(function(n) {
  function e(s, a, o, l) {
    return new em(s, a, o, l);
  }
  n.create = e;
  function t(s) {
    let a = s;
    return !!(p.defined(a) && p.string(a.uri) && (p.undefined(a.languageId) || p.string(a.languageId)) && p.uinteger(a.lineCount) && p.func(a.getText) && p.func(a.positionAt) && p.func(a.offsetAt));
  }
  n.is = t;
  function r(s, a) {
    let o = s.getText(), l = i(a, (u, d) => {
      let h = u.range.start.line - d.range.start.line;
      return h === 0 ? u.range.start.character - d.range.start.character : h;
    }), c = o.length;
    for (let u = l.length - 1; u >= 0; u--) {
      let d = l[u], h = s.offsetAt(d.range.start), f = s.offsetAt(d.range.end);
      if (f <= c)
        o = o.substring(0, h) + d.newText + o.substring(f, o.length);
      else
        throw new Error("Overlapping edit");
      c = h;
    }
    return o;
  }
  n.applyEdits = r;
  function i(s, a) {
    if (s.length <= 1)
      return s;
    const o = s.length / 2 | 0, l = s.slice(0, o), c = s.slice(o);
    i(l, a), i(c, a);
    let u = 0, d = 0, h = 0;
    for (; u < l.length && d < c.length; )
      a(l[u], c[d]) <= 0 ? s[h++] = l[u++] : s[h++] = c[d++];
    for (; u < l.length; )
      s[h++] = l[u++];
    for (; d < c.length; )
      s[h++] = c[d++];
    return s;
  }
})(Qo || (Qo = {}));
let em = class {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    this._content = e.text, this._version = t, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], t = this._content, r = !0;
      for (let i = 0; i < t.length; i++) {
        r && (e.push(i), r = !1);
        let s = t.charAt(i);
        r = s === "\r" || s === `
`, s === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
      }
      r && t.length > 0 && e.push(t.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let t = this.getLineOffsets(), r = 0, i = t.length;
    if (i === 0)
      return P.create(0, e);
    for (; r < i; ) {
      let a = Math.floor((r + i) / 2);
      t[a] > e ? i = a : r = a + 1;
    }
    let s = r - 1;
    return P.create(s, e - t[s]);
  }
  offsetAt(e) {
    let t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let r = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(r + e.character, i), r);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var p;
(function(n) {
  const e = Object.prototype.toString;
  function t(f) {
    return typeof f < "u";
  }
  n.defined = t;
  function r(f) {
    return typeof f > "u";
  }
  n.undefined = r;
  function i(f) {
    return f === !0 || f === !1;
  }
  n.boolean = i;
  function s(f) {
    return e.call(f) === "[object String]";
  }
  n.string = s;
  function a(f) {
    return e.call(f) === "[object Number]";
  }
  n.number = a;
  function o(f, m, g) {
    return e.call(f) === "[object Number]" && m <= f && f <= g;
  }
  n.numberRange = o;
  function l(f) {
    return e.call(f) === "[object Number]" && -2147483648 <= f && f <= 2147483647;
  }
  n.integer = l;
  function c(f) {
    return e.call(f) === "[object Number]" && 0 <= f && f <= 2147483647;
  }
  n.uinteger = c;
  function u(f) {
    return e.call(f) === "[object Function]";
  }
  n.func = u;
  function d(f) {
    return f !== null && typeof f == "object";
  }
  n.objectLiteral = d;
  function h(f, m) {
    return Array.isArray(f) && f.every(m);
  }
  n.typedArray = h;
})(p || (p = {}));
class tm {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Gc(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const t = new sa();
    return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
  }
  buildLeafNode(e, t) {
    const r = new Is(e.startOffset, e.image.length, Zi(e), e.tokenType, !t);
    return r.grammarSource = t, r.root = this.rootNode, this.current.content.push(r), r;
  }
  removeNode(e) {
    const t = e.container;
    if (t) {
      const r = t.content.indexOf(e);
      r >= 0 && t.content.splice(r, 1);
    }
  }
  addHiddenNodes(e) {
    const t = [];
    for (const s of e) {
      const a = new Is(s.startOffset, s.image.length, Zi(s), s.tokenType, !0);
      a.root = this.rootNode, t.push(a);
    }
    let r = this.current, i = !1;
    if (r.content.length > 0) {
      r.content.push(...t);
      return;
    }
    for (; r.container; ) {
      const s = r.container.content.indexOf(r);
      if (s > 0) {
        r.container.content.splice(s, 0, ...t), i = !0;
        break;
      }
      r = r.container;
    }
    i || this.rootNode.content.unshift(...t);
  }
  construct(e) {
    const t = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
    const r = this.nodeStack.pop();
    (r == null ? void 0 : r.content.length) === 0 && this.removeNode(r);
  }
}
class Fc {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return !1;
  }
  get astNode() {
    var e, t;
    const r = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
    if (!r)
      throw new Error("This node has no associated AST element");
    return r;
  }
  set astNode(e) {
    this._astNode = e;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}
class Is extends Fc {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, t, r, i, s = !1) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = t, this._range = r;
  }
}
class sa extends Fc {
  constructor() {
    super(...arguments), this.content = new aa(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var e, t;
    return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, t;
    return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && t !== void 0 ? t : 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
    if (e && t) {
      if (this._rangeCache === void 0) {
        const { range: r } = e, { range: i } = t;
        this._rangeCache = { start: r.start, end: i.end.line < r.start.line ? r.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: P.create(0, 0), end: P.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const t = this.content[e];
      if (!t.hidden)
        return t;
    }
    return this.content[this.content.length - 1];
  }
}
class aa extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, aa.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, t, ...r) {
    return this.addParents(r), super.splice(e, t, ...r);
  }
  addParents(e) {
    for (const t of e)
      t.container = this.parent;
  }
}
class Gc extends sa {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}
const $s = Symbol("Datatype");
function Fi(n) {
  return n.$type === $s;
}
const Zo = "​", Uc = (n) => n.endsWith(Zo) ? n : n + Zo;
class Bc {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const t = this.lexer.definition, r = e.LanguageMetaData.mode === "production";
    this.wrapper = new am(t, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: r, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
  }
  alternatives(e, t) {
    this.wrapper.wrapOr(e, t);
  }
  optional(e, t) {
    this.wrapper.wrapOption(e, t);
  }
  many(e, t) {
    this.wrapper.wrapMany(e, t);
  }
  atLeastOne(e, t) {
    this.wrapper.wrapAtLeastOne(e, t);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}
class nm extends Bc {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new tm(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, t) {
    const r = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(Uc(e.name), this.startImplementation(r, t).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (Hl(e))
        return $s;
      {
        const t = Ks(e);
        return t ?? e.name;
      }
    }
  }
  parse(e, t = {}) {
    this.nodeBuilder.buildRootNode(e);
    const r = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = r.tokens;
    const i = t.rule ? this.allRules.get(t.rule) : this.mainRule;
    if (!i)
      throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
    const s = i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(r.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: r.errors,
      lexerReport: r.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, t) {
    return (r) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const a = { $type: e };
        this.stack.push(a), e === $s && (a.value = "");
      }
      let s;
      try {
        s = t(r);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    const t = this.lexerResult.hidden;
    if (!t.length)
      return [];
    const r = e.startOffset;
    for (let i = 0; i < t.length; i++)
      if (t[i].startOffset > r)
        return t.splice(0, i);
    return t.splice(0, t.length);
  }
  consume(e, t, r) {
    const i = this.wrapper.wrapConsume(e, t);
    if (!this.isRecording() && this.isValidToken(i)) {
      const s = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      const a = this.nodeBuilder.buildLeafNode(i, r), { assignment: o, isCrossRef: l } = this.getAssignment(r), c = this.current;
      if (o) {
        const u = dt(r) ? i.image : this.converter.convert(i.image, a);
        this.assign(o.operator, o.feature, u, a, l);
      } else if (Fi(c)) {
        let u = i.image;
        dt(r) || (u = this.converter.convert(u, a).toString()), c.value += u;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, t, r, i, s) {
    let a;
    !this.isRecording() && !r && (a = this.nodeBuilder.buildCompositeNode(i));
    const o = this.wrapper.wrapSubrule(e, t, s);
    !this.isRecording() && a && a.length > 0 && this.performSubruleAssignment(o, i, a);
  }
  performSubruleAssignment(e, t, r) {
    const { assignment: i, isCrossRef: s } = this.getAssignment(t);
    if (i)
      this.assign(i.operator, i.feature, e, r, s);
    else if (!i) {
      const a = this.current;
      if (Fi(a))
        a.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, a);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, t) {
    if (!this.isRecording()) {
      let r = this.current;
      if (t.feature && t.operator) {
        r = this.construct(), this.nodeBuilder.removeNode(r.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(r.$cstNode);
        const s = { $type: e };
        this.stack.push(s), this.assign(t.operator, t.feature, r, r.$cstNode, !1);
      } else
        r.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.current;
    return Pd(e), this.nodeBuilder.construct(e), this.stack.pop(), Fi(e) ? this.converter.convert(e.value, e.$cstNode) : (Md(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const t = ui(e, ut);
      this.assignmentMap.set(e, {
        assignment: t,
        isCrossRef: t ? Bs(t.terminal) : !1
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, t, r, i, s) {
    const a = this.current;
    let o;
    switch (s && typeof r == "string" ? o = this.linker.buildReference(a, t, i, r) : o = r, e) {
      case "=": {
        a[t] = o;
        break;
      }
      case "?=": {
        a[t] = !0;
        break;
      }
      case "+=":
        Array.isArray(a[t]) || (a[t] = []), a[t].push(o);
    }
  }
  assignWithoutOverride(e, t) {
    for (const [i, s] of Object.entries(t)) {
      const a = e[i];
      a === void 0 ? e[i] = s : Array.isArray(a) && Array.isArray(s) && (s.push(...a), e[i] = s);
    }
    const r = e.$cstNode;
    return r && (r.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}
class rm {
  buildMismatchTokenMessage(e) {
    return It.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return It.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return It.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return It.buildEarlyExitMessage(e);
  }
}
class Vc extends rm {
  buildMismatchTokenMessage({ expected: e, actual: t }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}
class im extends Bc {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const t = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = t.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, t) {
    const r = this.wrapper.DEFINE_RULE(Uc(e.name), this.startImplementation(t).bind(this));
    return this.allRules.set(e.name, r), e.entry && (this.mainRule = r), r;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (t) => {
      const r = this.keepStackSize();
      try {
        e(t);
      } finally {
        this.resetStackSize(r);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, t, r) {
    this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, r], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, t, r, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, t, s), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const t = this.elementStack.lastIndexOf(e);
      t >= 0 && this.elementStack.splice(t);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}
const sm = {
  recoveryEnabled: !0,
  nodeLocationTracking: "full",
  skipValidations: !0,
  errorMessageProvider: new Vc()
};
class am extends hp {
  constructor(e, t) {
    const r = t && "maxLookahead" in t;
    super(e, Object.assign(Object.assign(Object.assign({}, sm), { lookaheadStrategy: r ? new Zs({ maxLookahead: t.maxLookahead }) : new bp({
      // If validations are skipped, don't log the lookahead warnings
      logging: t.skipValidations ? () => {
      } : void 0
    }) }), t));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, t) {
    return this.RULE(e, t);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, t) {
    return this.consume(e, t);
  }
  wrapSubrule(e, t, r) {
    return this.subrule(e, t, {
      ARGS: [r]
    });
  }
  wrapOr(e, t) {
    this.or(e, t);
  }
  wrapOption(e, t) {
    this.option(e, t);
  }
  wrapMany(e, t) {
    this.many(e, t);
  }
  wrapAtLeastOne(e, t) {
    this.atLeastOne(e, t);
  }
}
function Wc(n, e, t) {
  return om({
    parser: e,
    tokens: t,
    ruleNames: /* @__PURE__ */ new Map()
  }, n), e;
}
function om(n, e) {
  const t = Bl(e, !1), r = Z(e.rules).filter(we).filter((i) => t.has(i));
  for (const i of r) {
    const s = Object.assign(Object.assign({}, n), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    n.parser.rule(i, pt(s, i.definition));
  }
}
function pt(n, e, t = !1) {
  let r;
  if (dt(e))
    r = pm(n, e);
  else if (ci(e))
    r = lm(n, e);
  else if (ut(e))
    r = pt(n, e.terminal);
  else if (Bs(e))
    r = jc(n, e);
  else if (ft(e))
    r = cm(n, e);
  else if (Pl(e))
    r = dm(n, e);
  else if (Ml(e))
    r = fm(n, e);
  else if (Vs(e))
    r = hm(n, e);
  else if ($d(e)) {
    const i = n.consume++;
    r = () => n.parser.consume(i, nt, e);
  } else
    throw new _l(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return Kc(n, t ? void 0 : ti(e), r, e.cardinality);
}
function lm(n, e) {
  const t = Hs(e);
  return () => n.parser.action(t, e);
}
function cm(n, e) {
  const t = e.rule.ref;
  if (we(t)) {
    const r = n.subrule++, i = t.fragment, s = e.arguments.length > 0 ? um(t, e.arguments) : () => ({});
    return (a) => n.parser.subrule(r, Hc(n, t), i, e, s(a));
  } else if (yt(t)) {
    const r = n.consume++, i = Cs(n, t.name);
    return () => n.parser.consume(r, i, e);
  } else if (t)
    Jn();
  else
    throw new _l(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function um(n, e) {
  const t = e.map((r) => He(r.value));
  return (r) => {
    const i = {};
    for (let s = 0; s < t.length; s++) {
      const a = n.parameters[s], o = t[s];
      i[a.name] = o(r);
    }
    return i;
  };
}
function He(n) {
  if (Ad(n)) {
    const e = He(n.left), t = He(n.right);
    return (r) => e(r) || t(r);
  } else if (vd(n)) {
    const e = He(n.left), t = He(n.right);
    return (r) => e(r) && t(r);
  } else if (Ed(n)) {
    const e = He(n.value);
    return (t) => !e(t);
  } else if (kd(n)) {
    const e = n.parameter.ref.name;
    return (t) => t !== void 0 && t[e] === !0;
  } else if (Rd(n)) {
    const e = !!n.true;
    return () => e;
  }
  Jn();
}
function dm(n, e) {
  if (e.elements.length === 1)
    return pt(n, e.elements[0]);
  {
    const t = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: pt(n, i, !0)
      }, a = ti(i);
      a && (s.GATE = He(a)), t.push(s);
    }
    const r = n.or++;
    return (i) => n.parser.alternatives(r, t.map((s) => {
      const a = {
        ALT: () => s.ALT(i)
      }, o = s.GATE;
      return o && (a.GATE = () => o(i)), a;
    }));
  }
}
function fm(n, e) {
  if (e.elements.length === 1)
    return pt(n, e.elements[0]);
  const t = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: pt(n, o, !0)
    }, c = ti(o);
    c && (l.GATE = He(c)), t.push(l);
  }
  const r = n.or++, i = (o, l) => {
    const c = l.getRuleStack().join("-");
    return `uGroup_${o}_${c}`;
  }, s = (o) => n.parser.alternatives(r, t.map((l, c) => {
    const u = { ALT: () => !0 }, d = n.parser;
    u.ALT = () => {
      if (l.ALT(o), !d.isRecording()) {
        const f = i(r, d);
        d.unorderedGroups.get(f) || d.unorderedGroups.set(f, []);
        const m = d.unorderedGroups.get(f);
        typeof (m == null ? void 0 : m[c]) > "u" && (m[c] = !0);
      }
    };
    const h = l.GATE;
    return h ? u.GATE = () => h(o) : u.GATE = () => {
      const f = d.unorderedGroups.get(i(r, d));
      return !(f != null && f[c]);
    }, u;
  })), a = Kc(n, ti(e), s, "*");
  return (o) => {
    a(o), n.parser.isRecording() || n.parser.unorderedGroups.delete(i(r, n.parser));
  };
}
function hm(n, e) {
  const t = e.elements.map((r) => pt(n, r));
  return (r) => t.forEach((i) => i(r));
}
function ti(n) {
  if (Vs(n))
    return n.guardCondition;
}
function jc(n, e, t = e.terminal) {
  if (t)
    if (ft(t) && we(t.rule.ref)) {
      const r = t.rule.ref, i = n.subrule++;
      return (s) => n.parser.subrule(i, Hc(n, r), !1, e, s);
    } else if (ft(t) && yt(t.rule.ref)) {
      const r = n.consume++, i = Cs(n, t.rule.ref.name);
      return () => n.parser.consume(r, i, e);
    } else if (dt(t)) {
      const r = n.consume++, i = Cs(n, t.value);
      return () => n.parser.consume(r, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const r = jl(e.type.ref), i = r == null ? void 0 : r.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Hs(e.type.ref));
    return jc(n, e, i);
  }
}
function pm(n, e) {
  const t = n.consume++, r = n.tokens[e.value];
  if (!r)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => n.parser.consume(t, r, e);
}
function Kc(n, e, t, r) {
  const i = e && He(e);
  if (!r)
    if (i) {
      const s = n.or++;
      return (a) => n.parser.alternatives(s, [
        {
          ALT: () => t(a),
          GATE: () => i(a)
        },
        {
          ALT: za(),
          GATE: () => !i(a)
        }
      ]);
    } else
      return t;
  if (r === "*") {
    const s = n.many++;
    return (a) => n.parser.many(s, {
      DEF: () => t(a),
      GATE: i ? () => i(a) : void 0
    });
  } else if (r === "+") {
    const s = n.many++;
    if (i) {
      const a = n.or++;
      return (o) => n.parser.alternatives(a, [
        {
          ALT: () => n.parser.atLeastOne(s, {
            DEF: () => t(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: za(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (a) => n.parser.atLeastOne(s, {
        DEF: () => t(a)
      });
  } else if (r === "?") {
    const s = n.optional++;
    return (a) => n.parser.optional(s, {
      DEF: () => t(a),
      GATE: i ? () => i(a) : void 0
    });
  } else
    Jn();
}
function Hc(n, e) {
  const t = mm(n, e), r = n.parser.getRule(t);
  if (!r)
    throw new Error(`Rule "${t}" not found."`);
  return r;
}
function mm(n, e) {
  if (we(e))
    return e.name;
  if (n.ruleNames.has(e))
    return n.ruleNames.get(e);
  {
    let t = e, r = t.$container, i = e.$type;
    for (; !we(r); )
      (Vs(r) || Pl(r) || Ml(r)) && (i = r.elements.indexOf(t).toString() + ":" + i), t = r, r = r.$container;
    return i = r.name + ":" + i, n.ruleNames.set(e, i), i;
  }
}
function Cs(n, e) {
  const t = n.tokens[e];
  if (!t)
    throw new Error(`Token "${e}" not found."`);
  return t;
}
function gm(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new im(n);
  return Wc(e, r, t.definition), r.finalize(), r;
}
function ym(n) {
  const e = Tm(n);
  return e.finalize(), e;
}
function Tm(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new nm(n);
  return Wc(e, r, t.definition);
}
class zc {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, t) {
    const r = Z(Bl(e, !1)), i = this.buildTerminalTokens(r), s = this.buildKeywordTokens(r, i, t);
    return i.forEach((a) => {
      const o = a.PATTERN;
      typeof o == "object" && o && "test" in o && ts(o) ? s.unshift(a) : s.push(a);
    }), s;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(yt).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
  }
  buildTerminalToken(e) {
    const t = zs(e), r = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
      name: e.name,
      PATTERN: r
    };
    return typeof r == "function" && (i.LINE_BREAKS = !0), e.hidden && (i.GROUP = ts(t) ? de.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? !0 : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const t = new RegExp(e, e.flags + "y");
    return (r, i) => (t.lastIndex = i, t.exec(r));
  }
  buildKeywordTokens(e, t, r) {
    return e.filter(we).flatMap((i) => Qn(i).filter(dt)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, t, !!(r != null && r.caseInsensitive)));
  }
  buildKeywordToken(e, t, r) {
    const i = this.buildKeywordPattern(e, r), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, t)
    };
    return typeof i == "function" && (s.LINE_BREAKS = !0), s;
  }
  buildKeywordPattern(e, t) {
    return t ? new RegExp(Kd(e.value)) : e.value;
  }
  findLongerAlt(e, t) {
    return t.reduce((r, i) => {
      const s = i == null ? void 0 : i.PATTERN;
      return s != null && s.source && Hd("^" + s.source + "$", e.value) && r.push(i), r;
    }, []);
  }
}
class qc {
  convert(e, t) {
    let r = t.grammarSource;
    if (Bs(r) && (r = Xd(r)), ft(r)) {
      const i = r.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, t);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, t, r) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return je.convertInt(t);
      case "STRING":
        return je.convertString(t);
      case "ID":
        return je.convertID(t);
    }
    switch ((i = rf(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return je.convertNumber(t);
      case "boolean":
        return je.convertBoolean(t);
      case "bigint":
        return je.convertBigint(t);
      case "date":
        return je.convertDate(t);
      default:
        return t;
    }
  }
}
var je;
(function(n) {
  function e(c) {
    let u = "";
    for (let d = 1; d < c.length - 1; d++) {
      const h = c.charAt(d);
      if (h === "\\") {
        const f = c.charAt(++d);
        u += t(f);
      } else
        u += h;
    }
    return u;
  }
  n.convertString = e;
  function t(c) {
    switch (c) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return c;
    }
  }
  function r(c) {
    return c.charAt(0) === "^" ? c.substring(1) : c;
  }
  n.convertID = r;
  function i(c) {
    return parseInt(c);
  }
  n.convertInt = i;
  function s(c) {
    return BigInt(c);
  }
  n.convertBigint = s;
  function a(c) {
    return new Date(c);
  }
  n.convertDate = a;
  function o(c) {
    return Number(c);
  }
  n.convertNumber = o;
  function l(c) {
    return c.toLowerCase() === "true";
  }
  n.convertBoolean = l;
})(je || (je = {}));
var qn = {}, vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
let Ns;
function ws() {
  if (Ns === void 0)
    throw new Error("No runtime abstraction layer installed");
  return Ns;
}
(function(n) {
  function e(t) {
    if (t === void 0)
      throw new Error("No runtime abstraction layer provided");
    Ns = t;
  }
  n.install = e;
})(ws || (ws = {}));
vi.default = ws;
var se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.stringArray = se.array = se.func = se.error = se.number = se.string = se.boolean = void 0;
function Rm(n) {
  return n === !0 || n === !1;
}
se.boolean = Rm;
function Yc(n) {
  return typeof n == "string" || n instanceof String;
}
se.string = Yc;
function vm(n) {
  return typeof n == "number" || n instanceof Number;
}
se.number = vm;
function Am(n) {
  return n instanceof Error;
}
se.error = Am;
function Em(n) {
  return typeof n == "function";
}
se.func = Em;
function Xc(n) {
  return Array.isArray(n);
}
se.array = Xc;
function km(n) {
  return Xc(n) && n.every((e) => Yc(e));
}
se.stringArray = km;
var Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
var Jc = Xt.Emitter = Xt.Event = void 0;
const Sm = vi;
var el;
(function(n) {
  const e = { dispose() {
  } };
  n.None = function() {
    return e;
  };
})(el || (Xt.Event = el = {}));
class xm {
  add(e, t = null, r) {
    this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(r) && r.push({ dispose: () => this.remove(e, t) });
  }
  remove(e, t = null) {
    if (!this._callbacks)
      return;
    let r = !1;
    for (let i = 0, s = this._callbacks.length; i < s; i++)
      if (this._callbacks[i] === e)
        if (this._contexts[i] === t) {
          this._callbacks.splice(i, 1), this._contexts.splice(i, 1);
          return;
        } else
          r = !0;
    if (r)
      throw new Error("When adding a listener with a context, you should remove it with the same context");
  }
  invoke(...e) {
    if (!this._callbacks)
      return [];
    const t = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
    for (let s = 0, a = r.length; s < a; s++)
      try {
        t.push(r[s].apply(i[s], e));
      } catch (o) {
        (0, Sm.default)().console.error(o);
      }
    return t;
  }
  isEmpty() {
    return !this._callbacks || this._callbacks.length === 0;
  }
  dispose() {
    this._callbacks = void 0, this._contexts = void 0;
  }
}
class Ai {
  constructor(e) {
    this._options = e;
  }
  /**
   * For the public to allow to subscribe
   * to events from this Emitter
   */
  get event() {
    return this._event || (this._event = (e, t, r) => {
      this._callbacks || (this._callbacks = new xm()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
      const i = {
        dispose: () => {
          this._callbacks && (this._callbacks.remove(e, t), i.dispose = Ai._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
        }
      };
      return Array.isArray(r) && r.push(i), i;
    }), this._event;
  }
  /**
   * To be kept private to fire an event to
   * subscribers
   */
  fire(e) {
    this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
  }
  dispose() {
    this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
  }
}
Jc = Xt.Emitter = Ai;
Ai._noop = function() {
};
var V;
Object.defineProperty(qn, "__esModule", { value: !0 });
var oa = qn.CancellationTokenSource = V = qn.CancellationToken = void 0;
const Im = vi, $m = se, _s = Xt;
var ni;
(function(n) {
  n.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: _s.Event.None
  }), n.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: _s.Event.None
  });
  function e(t) {
    const r = t;
    return r && (r === n.None || r === n.Cancelled || $m.boolean(r.isCancellationRequested) && !!r.onCancellationRequested);
  }
  n.is = e;
})(ni || (V = qn.CancellationToken = ni = {}));
const Cm = Object.freeze(function(n, e) {
  const t = (0, Im.default)().timer.setTimeout(n.bind(e), 0);
  return { dispose() {
    t.dispose();
  } };
});
class tl {
  constructor() {
    this._isCancelled = !1;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? Cm : (this._emitter || (this._emitter = new _s.Emitter()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = void 0);
  }
}
class Nm {
  get token() {
    return this._token || (this._token = new tl()), this._token;
  }
  cancel() {
    this._token ? this._token.cancel() : this._token = ni.Cancelled;
  }
  dispose() {
    this._token ? this._token instanceof tl && this._token.dispose() : this._token = ni.None;
  }
}
oa = qn.CancellationTokenSource = Nm;
function wm() {
  return new Promise((n) => {
    typeof setImmediate > "u" ? setTimeout(n, 0) : setImmediate(n);
  });
}
let Nr = 0, _m = 10;
function Lm() {
  return Nr = performance.now(), new oa();
}
const ri = Symbol("OperationCancelled");
function Ei(n) {
  return n === ri;
}
async function Ae(n) {
  if (n === V.None)
    return;
  const e = performance.now();
  if (e - Nr >= _m && (Nr = e, await wm(), Nr = performance.now()), n.isCancellationRequested)
    throw ri;
}
class la {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = (r) => (e(r), this), this.reject = (r) => (t(r), this);
    });
  }
}
class Yn {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    for (const r of e)
      if (Yn.isIncremental(r)) {
        const i = Zc(r.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let c = this._lineOffsets;
        const u = nl(r.text, !1, s);
        if (l - o === u.length)
          for (let h = 0, f = u.length; h < f; h++)
            c[h + o + 1] = u[h];
        else
          u.length < 1e4 ? c.splice(o + 1, l - o, ...u) : this._lineOffsets = c = c.slice(0, o + 1).concat(u, c.slice(l + 1));
        const d = r.text.length - (a - s);
        if (d !== 0)
          for (let h = o + 1 + u.length, f = c.length; h < f; h++)
            c[h] = c[h] + d;
      } else if (Yn.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = t;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = nl(this._content, !0)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const t = this.getLineOffsets();
    let r = 0, i = t.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; r < i; ) {
      const a = Math.floor((r + i) / 2);
      t[a] > e ? i = a : r = a + 1;
    }
    const s = r - 1;
    return e = this.ensureBeforeEOL(e, t[s]), { line: s, character: e - t[s] };
  }
  offsetAt(e) {
    const t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const r = t[e.line];
    if (e.character <= 0)
      return r;
    const i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = Math.min(r + e.character, i);
    return this.ensureBeforeEOL(s, r);
  }
  ensureBeforeEOL(e, t) {
    for (; e > t && Qc(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
  }
  static isFull(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
  }
}
var Ls;
(function(n) {
  function e(i, s, a, o) {
    return new Yn(i, s, a, o);
  }
  n.create = e;
  function t(i, s, a) {
    if (i instanceof Yn)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  n.update = t;
  function r(i, s) {
    const a = i.getText(), o = Os(s.map(Om), (u, d) => {
      const h = u.range.start.line - d.range.start.line;
      return h === 0 ? u.range.start.character - d.range.start.character : h;
    });
    let l = 0;
    const c = [];
    for (const u of o) {
      const d = i.offsetAt(u.range.start);
      if (d < l)
        throw new Error("Overlapping edit");
      d > l && c.push(a.substring(l, d)), u.newText.length && c.push(u.newText), l = i.offsetAt(u.range.end);
    }
    return c.push(a.substr(l)), c.join("");
  }
  n.applyEdits = r;
})(Ls || (Ls = {}));
function Os(n, e) {
  if (n.length <= 1)
    return n;
  const t = n.length / 2 | 0, r = n.slice(0, t), i = n.slice(t);
  Os(r, e), Os(i, e);
  let s = 0, a = 0, o = 0;
  for (; s < r.length && a < i.length; )
    e(r[s], i[a]) <= 0 ? n[o++] = r[s++] : n[o++] = i[a++];
  for (; s < r.length; )
    n[o++] = r[s++];
  for (; a < i.length; )
    n[o++] = i[a++];
  return n;
}
function nl(n, e, t = 0) {
  const r = e ? [t] : [];
  for (let i = 0; i < n.length; i++) {
    const s = n.charCodeAt(i);
    Qc(s) && (s === 13 && i + 1 < n.length && n.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1));
  }
  return r;
}
function Qc(n) {
  return n === 13 || n === 10;
}
function Zc(n) {
  const e = n.start, t = n.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : n;
}
function Om(n) {
  const e = Zc(n.range);
  return e !== n.range ? { newText: n.newText, range: e } : n;
}
var eu;
(() => {
  var n = { 470: (i) => {
    function s(l) {
      if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
    }
    function a(l, c) {
      for (var u, d = "", h = 0, f = -1, m = 0, g = 0; g <= l.length; ++g) {
        if (g < l.length) u = l.charCodeAt(g);
        else {
          if (u === 47) break;
          u = 47;
        }
        if (u === 47) {
          if (!(f === g - 1 || m === 1)) if (f !== g - 1 && m === 2) {
            if (d.length < 2 || h !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
              if (d.length > 2) {
                var v = d.lastIndexOf("/");
                if (v !== d.length - 1) {
                  v === -1 ? (d = "", h = 0) : h = (d = d.slice(0, v)).length - 1 - d.lastIndexOf("/"), f = g, m = 0;
                  continue;
                }
              } else if (d.length === 2 || d.length === 1) {
                d = "", h = 0, f = g, m = 0;
                continue;
              }
            }
            c && (d.length > 0 ? d += "/.." : d = "..", h = 2);
          } else d.length > 0 ? d += "/" + l.slice(f + 1, g) : d = l.slice(f + 1, g), h = g - f - 1;
          f = g, m = 0;
        } else u === 46 && m !== -1 ? ++m : m = -1;
      }
      return d;
    }
    var o = { resolve: function() {
      for (var l, c = "", u = !1, d = arguments.length - 1; d >= -1 && !u; d--) {
        var h;
        d >= 0 ? h = arguments[d] : (l === void 0 && (l = process.cwd()), h = l), s(h), h.length !== 0 && (c = h + "/" + c, u = h.charCodeAt(0) === 47);
      }
      return c = a(c, !u), u ? c.length > 0 ? "/" + c : "/" : c.length > 0 ? c : ".";
    }, normalize: function(l) {
      if (s(l), l.length === 0) return ".";
      var c = l.charCodeAt(0) === 47, u = l.charCodeAt(l.length - 1) === 47;
      return (l = a(l, !c)).length !== 0 || c || (l = "."), l.length > 0 && u && (l += "/"), c ? "/" + l : l;
    }, isAbsolute: function(l) {
      return s(l), l.length > 0 && l.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var l, c = 0; c < arguments.length; ++c) {
        var u = arguments[c];
        s(u), u.length > 0 && (l === void 0 ? l = u : l += "/" + u);
      }
      return l === void 0 ? "." : o.normalize(l);
    }, relative: function(l, c) {
      if (s(l), s(c), l === c || (l = o.resolve(l)) === (c = o.resolve(c))) return "";
      for (var u = 1; u < l.length && l.charCodeAt(u) === 47; ++u) ;
      for (var d = l.length, h = d - u, f = 1; f < c.length && c.charCodeAt(f) === 47; ++f) ;
      for (var m = c.length - f, g = h < m ? h : m, v = -1, y = 0; y <= g; ++y) {
        if (y === g) {
          if (m > g) {
            if (c.charCodeAt(f + y) === 47) return c.slice(f + y + 1);
            if (y === 0) return c.slice(f + y);
          } else h > g && (l.charCodeAt(u + y) === 47 ? v = y : y === 0 && (v = 0));
          break;
        }
        var A = l.charCodeAt(u + y);
        if (A !== c.charCodeAt(f + y)) break;
        A === 47 && (v = y);
      }
      var R = "";
      for (y = u + v + 1; y <= d; ++y) y !== d && l.charCodeAt(y) !== 47 || (R.length === 0 ? R += ".." : R += "/..");
      return R.length > 0 ? R + c.slice(f + v) : (f += v, c.charCodeAt(f) === 47 && ++f, c.slice(f));
    }, _makeLong: function(l) {
      return l;
    }, dirname: function(l) {
      if (s(l), l.length === 0) return ".";
      for (var c = l.charCodeAt(0), u = c === 47, d = -1, h = !0, f = l.length - 1; f >= 1; --f) if ((c = l.charCodeAt(f)) === 47) {
        if (!h) {
          d = f;
          break;
        }
      } else h = !1;
      return d === -1 ? u ? "/" : "." : u && d === 1 ? "//" : l.slice(0, d);
    }, basename: function(l, c) {
      if (c !== void 0 && typeof c != "string") throw new TypeError('"ext" argument must be a string');
      s(l);
      var u, d = 0, h = -1, f = !0;
      if (c !== void 0 && c.length > 0 && c.length <= l.length) {
        if (c.length === l.length && c === l) return "";
        var m = c.length - 1, g = -1;
        for (u = l.length - 1; u >= 0; --u) {
          var v = l.charCodeAt(u);
          if (v === 47) {
            if (!f) {
              d = u + 1;
              break;
            }
          } else g === -1 && (f = !1, g = u + 1), m >= 0 && (v === c.charCodeAt(m) ? --m == -1 && (h = u) : (m = -1, h = g));
        }
        return d === h ? h = g : h === -1 && (h = l.length), l.slice(d, h);
      }
      for (u = l.length - 1; u >= 0; --u) if (l.charCodeAt(u) === 47) {
        if (!f) {
          d = u + 1;
          break;
        }
      } else h === -1 && (f = !1, h = u + 1);
      return h === -1 ? "" : l.slice(d, h);
    }, extname: function(l) {
      s(l);
      for (var c = -1, u = 0, d = -1, h = !0, f = 0, m = l.length - 1; m >= 0; --m) {
        var g = l.charCodeAt(m);
        if (g !== 47) d === -1 && (h = !1, d = m + 1), g === 46 ? c === -1 ? c = m : f !== 1 && (f = 1) : c !== -1 && (f = -1);
        else if (!h) {
          u = m + 1;
          break;
        }
      }
      return c === -1 || d === -1 || f === 0 || f === 1 && c === d - 1 && c === u + 1 ? "" : l.slice(c, d);
    }, format: function(l) {
      if (l === null || typeof l != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof l);
      return function(c, u) {
        var d = u.dir || u.root, h = u.base || (u.name || "") + (u.ext || "");
        return d ? d === u.root ? d + h : d + "/" + h : h;
      }(0, l);
    }, parse: function(l) {
      s(l);
      var c = { root: "", dir: "", base: "", ext: "", name: "" };
      if (l.length === 0) return c;
      var u, d = l.charCodeAt(0), h = d === 47;
      h ? (c.root = "/", u = 1) : u = 0;
      for (var f = -1, m = 0, g = -1, v = !0, y = l.length - 1, A = 0; y >= u; --y) if ((d = l.charCodeAt(y)) !== 47) g === -1 && (v = !1, g = y + 1), d === 46 ? f === -1 ? f = y : A !== 1 && (A = 1) : f !== -1 && (A = -1);
      else if (!v) {
        m = y + 1;
        break;
      }
      return f === -1 || g === -1 || A === 0 || A === 1 && f === g - 1 && f === m + 1 ? g !== -1 && (c.base = c.name = m === 0 && h ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && h ? (c.name = l.slice(1, f), c.base = l.slice(1, g)) : (c.name = l.slice(m, f), c.base = l.slice(m, g)), c.ext = l.slice(f, g)), m > 0 ? c.dir = l.slice(0, m - 1) : h && (c.dir = "/"), c;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    o.posix = o, i.exports = o;
  } }, e = {};
  function t(i) {
    var s = e[i];
    if (s !== void 0) return s.exports;
    var a = e[i] = { exports: {} };
    return n[i](a, a.exports, t), a.exports;
  }
  t.d = (i, s) => {
    for (var a in s) t.o(s, a) && !t.o(i, a) && Object.defineProperty(i, a, { enumerable: !0, get: s[a] });
  }, t.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), t.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
  };
  var r = {};
  (() => {
    let i;
    t.r(r), t.d(r, { URI: () => h, Utils: () => $e }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, o = /^\/\//;
    function l(S, T) {
      if (!S.scheme && T) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${S.authority}", path: "${S.path}", query: "${S.query}", fragment: "${S.fragment}"}`);
      if (S.scheme && !s.test(S.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (S.path) {
        if (S.authority) {
          if (!a.test(S.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(S.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const c = "", u = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class h {
      constructor(T, E, I, O, L, _ = !1) {
        Qe(this, "scheme");
        Qe(this, "authority");
        Qe(this, "path");
        Qe(this, "query");
        Qe(this, "fragment");
        typeof T == "object" ? (this.scheme = T.scheme || c, this.authority = T.authority || c, this.path = T.path || c, this.query = T.query || c, this.fragment = T.fragment || c) : (this.scheme = /* @__PURE__ */ function(Te, q) {
          return Te || q ? Te : "file";
        }(T, _), this.authority = E || c, this.path = function(Te, q) {
          switch (Te) {
            case "https":
            case "http":
            case "file":
              q ? q[0] !== u && (q = u + q) : q = u;
          }
          return q;
        }(this.scheme, I || c), this.query = O || c, this.fragment = L || c, l(this, _));
      }
      static isUri(T) {
        return T instanceof h || !!T && typeof T.authority == "string" && typeof T.fragment == "string" && typeof T.path == "string" && typeof T.query == "string" && typeof T.scheme == "string" && typeof T.fsPath == "string" && typeof T.with == "function" && typeof T.toString == "function";
      }
      get fsPath() {
        return A(this);
      }
      with(T) {
        if (!T) return this;
        let { scheme: E, authority: I, path: O, query: L, fragment: _ } = T;
        return E === void 0 ? E = this.scheme : E === null && (E = c), I === void 0 ? I = this.authority : I === null && (I = c), O === void 0 ? O = this.path : O === null && (O = c), L === void 0 ? L = this.query : L === null && (L = c), _ === void 0 ? _ = this.fragment : _ === null && (_ = c), E === this.scheme && I === this.authority && O === this.path && L === this.query && _ === this.fragment ? this : new m(E, I, O, L, _);
      }
      static parse(T, E = !1) {
        const I = d.exec(T);
        return I ? new m(I[2] || c, re(I[4] || c), re(I[5] || c), re(I[7] || c), re(I[9] || c), E) : new m(c, c, c, c, c);
      }
      static file(T) {
        let E = c;
        if (i && (T = T.replace(/\\/g, u)), T[0] === u && T[1] === u) {
          const I = T.indexOf(u, 2);
          I === -1 ? (E = T.substring(2), T = u) : (E = T.substring(2, I), T = T.substring(I) || u);
        }
        return new m("file", E, T, c, c);
      }
      static from(T) {
        const E = new m(T.scheme, T.authority, T.path, T.query, T.fragment);
        return l(E, !0), E;
      }
      toString(T = !1) {
        return R(this, T);
      }
      toJSON() {
        return this;
      }
      static revive(T) {
        if (T) {
          if (T instanceof h) return T;
          {
            const E = new m(T);
            return E._formatted = T.external, E._fsPath = T._sep === f ? T.fsPath : null, E;
          }
        }
        return T;
      }
    }
    const f = i ? 1 : void 0;
    class m extends h {
      constructor() {
        super(...arguments);
        Qe(this, "_formatted", null);
        Qe(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = A(this)), this._fsPath;
      }
      toString(E = !1) {
        return E ? R(this, !0) : (this._formatted || (this._formatted = R(this, !1)), this._formatted);
      }
      toJSON() {
        const E = { $mid: 1 };
        return this._fsPath && (E.fsPath = this._fsPath, E._sep = f), this._formatted && (E.external = this._formatted), this.path && (E.path = this.path), this.scheme && (E.scheme = this.scheme), this.authority && (E.authority = this.authority), this.query && (E.query = this.query), this.fragment && (E.fragment = this.fragment), E;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function v(S, T, E) {
      let I, O = -1;
      for (let L = 0; L < S.length; L++) {
        const _ = S.charCodeAt(L);
        if (_ >= 97 && _ <= 122 || _ >= 65 && _ <= 90 || _ >= 48 && _ <= 57 || _ === 45 || _ === 46 || _ === 95 || _ === 126 || T && _ === 47 || E && _ === 91 || E && _ === 93 || E && _ === 58) O !== -1 && (I += encodeURIComponent(S.substring(O, L)), O = -1), I !== void 0 && (I += S.charAt(L));
        else {
          I === void 0 && (I = S.substr(0, L));
          const Te = g[_];
          Te !== void 0 ? (O !== -1 && (I += encodeURIComponent(S.substring(O, L)), O = -1), I += Te) : O === -1 && (O = L);
        }
      }
      return O !== -1 && (I += encodeURIComponent(S.substring(O))), I !== void 0 ? I : S;
    }
    function y(S) {
      let T;
      for (let E = 0; E < S.length; E++) {
        const I = S.charCodeAt(E);
        I === 35 || I === 63 ? (T === void 0 && (T = S.substr(0, E)), T += g[I]) : T !== void 0 && (T += S[E]);
      }
      return T !== void 0 ? T : S;
    }
    function A(S, T) {
      let E;
      return E = S.authority && S.path.length > 1 && S.scheme === "file" ? `//${S.authority}${S.path}` : S.path.charCodeAt(0) === 47 && (S.path.charCodeAt(1) >= 65 && S.path.charCodeAt(1) <= 90 || S.path.charCodeAt(1) >= 97 && S.path.charCodeAt(1) <= 122) && S.path.charCodeAt(2) === 58 ? S.path[1].toLowerCase() + S.path.substr(2) : S.path, i && (E = E.replace(/\//g, "\\")), E;
    }
    function R(S, T) {
      const E = T ? y : v;
      let I = "", { scheme: O, authority: L, path: _, query: Te, fragment: q } = S;
      if (O && (I += O, I += ":"), (L || O === "file") && (I += u, I += u), L) {
        let W = L.indexOf("@");
        if (W !== -1) {
          const ot = L.substr(0, W);
          L = L.substr(W + 1), W = ot.lastIndexOf(":"), W === -1 ? I += E(ot, !1, !1) : (I += E(ot.substr(0, W), !1, !1), I += ":", I += E(ot.substr(W + 1), !1, !0)), I += "@";
        }
        L = L.toLowerCase(), W = L.lastIndexOf(":"), W === -1 ? I += E(L, !1, !0) : (I += E(L.substr(0, W), !1, !0), I += L.substr(W));
      }
      if (_) {
        if (_.length >= 3 && _.charCodeAt(0) === 47 && _.charCodeAt(2) === 58) {
          const W = _.charCodeAt(1);
          W >= 65 && W <= 90 && (_ = `/${String.fromCharCode(W + 32)}:${_.substr(3)}`);
        } else if (_.length >= 2 && _.charCodeAt(1) === 58) {
          const W = _.charCodeAt(0);
          W >= 65 && W <= 90 && (_ = `${String.fromCharCode(W + 32)}:${_.substr(2)}`);
        }
        I += E(_, !0, !1);
      }
      return Te && (I += "?", I += E(Te, !1, !1)), q && (I += "#", I += T ? q : v(q, !1, !1)), I;
    }
    function $(S) {
      try {
        return decodeURIComponent(S);
      } catch {
        return S.length > 3 ? S.substr(0, 3) + $(S.substr(3)) : S;
      }
    }
    const F = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function re(S) {
      return S.match(F) ? S.replace(F, (T) => $(T)) : S;
    }
    var _e = t(470);
    const ye = _e.posix || _e, Fe = "/";
    var $e;
    (function(S) {
      S.joinPath = function(T, ...E) {
        return T.with({ path: ye.join(T.path, ...E) });
      }, S.resolvePath = function(T, ...E) {
        let I = T.path, O = !1;
        I[0] !== Fe && (I = Fe + I, O = !0);
        let L = ye.resolve(I, ...E);
        return O && L[0] === Fe && !T.authority && (L = L.substring(1)), T.with({ path: L });
      }, S.dirname = function(T) {
        if (T.path.length === 0 || T.path === Fe) return T;
        let E = ye.dirname(T.path);
        return E.length === 1 && E.charCodeAt(0) === 46 && (E = ""), T.with({ path: E });
      }, S.basename = function(T) {
        return ye.basename(T.path);
      }, S.extname = function(T) {
        return ye.extname(T.path);
      };
    })($e || ($e = {}));
  })(), eu = r;
})();
const { URI: mt, Utils: on } = eu;
var it;
(function(n) {
  n.basename = on.basename, n.dirname = on.dirname, n.extname = on.extname, n.joinPath = on.joinPath, n.resolvePath = on.resolvePath;
  function e(i, s) {
    return (i == null ? void 0 : i.toString()) === (s == null ? void 0 : s.toString());
  }
  n.equals = e;
  function t(i, s) {
    const a = typeof i == "string" ? i : i.path, o = typeof s == "string" ? s : s.path, l = a.split("/").filter((f) => f.length > 0), c = o.split("/").filter((f) => f.length > 0);
    let u = 0;
    for (; u < l.length && l[u] === c[u]; u++)
      ;
    const d = "../".repeat(l.length - u), h = c.slice(u).join("/");
    return d + h;
  }
  n.relative = t;
  function r(i) {
    return mt.parse(i.toString()).toString();
  }
  n.normalize = r;
})(it || (it = {}));
var U;
(function(n) {
  n[n.Changed = 0] = "Changed", n[n.Parsed = 1] = "Parsed", n[n.IndexedContent = 2] = "IndexedContent", n[n.ComputedScopes = 3] = "ComputedScopes", n[n.Linked = 4] = "Linked", n[n.IndexedReferences = 5] = "IndexedReferences", n[n.Validated = 6] = "Validated";
})(U || (U = {}));
class bm {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, t = V.None) {
    const r = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, r, t);
  }
  fromTextDocument(e, t, r) {
    return t = t ?? mt.parse(e.uri), V.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromString(e, t, r) {
    return V.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromModel(e, t) {
    return this.create(t, { $model: e });
  }
  create(e, t, r) {
    if (typeof t == "string") {
      const i = this.parse(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else if ("$model" in t) {
      const i = { value: t.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  async createAsync(e, t, r) {
    if (typeof t == "string") {
      const i = await this.parseAsync(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else {
      const i = await this.parseAsync(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, t, r, i) {
    let s;
    if (r)
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        textDocument: r
      };
    else {
      const a = this.createTextDocumentGetter(t, i);
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        get textDocument() {
          return a();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, t) {
    var r, i;
    const s = (r = e.parseResult.value.$cstNode) === null || r === void 0 ? void 0 : r.root.fullText, a = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()), o = a ? a.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a)
      Object.defineProperty(e, "textDocument", {
        value: a
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, o);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, t), e.parseResult.value.$document = e), e.state = U.Parsed, e;
  }
  parse(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, r);
  }
  parseAsync(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, r);
  }
  createTextDocumentGetter(e, t) {
    const r = this.serviceRegistry;
    let i;
    return () => i ?? (i = Ls.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
  }
}
class Pm {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return Z(this.documentMap.values());
  }
  addDocument(e) {
    const t = e.uri.toString();
    if (this.documentMap.has(t))
      throw new Error(`A document with the URI '${t}' is already present.`);
    this.documentMap.set(t, e);
  }
  getDocument(e) {
    const t = e.toString();
    return this.documentMap.get(t);
  }
  async getOrCreateDocument(e, t) {
    let r = this.getDocument(e);
    return r || (r = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(r), r);
  }
  createDocument(e, t, r) {
    if (r)
      return this.langiumDocumentFactory.fromString(t, e, r).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(t, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(e.toString());
  }
  invalidateDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (this.serviceRegistry.getServices(e).references.Linker.unlink(r), r.state = U.Changed, r.precomputedScopes = void 0, r.diagnostics = void 0), r;
  }
  deleteDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (r.state = U.Changed, this.documentMap.delete(t)), r;
  }
}
const Gi = Symbol("ref_resolving");
class Mm {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, t = V.None) {
    for (const r of $t(e.parseResult.value))
      await Ae(t), Fl(r).forEach((i) => this.doLink(i, e));
  }
  doLink(e, t) {
    var r;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Gi;
      try {
        const s = this.getCandidate(e);
        if (Er(s))
          i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          const a = this.loadAstNode(s);
          i._ref = a ?? this.createLinkingError(e, s);
        } else
          i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        const a = (r = s.message) !== null && r !== void 0 ? r : String(s);
        i._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${i.$refText}': ${a}` });
      }
      t.references.push(i);
    }
  }
  unlink(e) {
    for (const t of e.references)
      delete t._ref, delete t._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    const r = this.scopeProvider.getScope(e).getElement(e.reference.$refText);
    return r ?? this.createLinkingError(e);
  }
  buildReference(e, t, r, i) {
    const s = this, a = {
      $refNode: r,
      $refText: i,
      get ref() {
        var o;
        if (ae(this._ref))
          return this._ref;
        if (cd(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a, container: e, property: t }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Gi;
          const l = es(e).$document, c = s.getLinkedNode({ reference: a, container: e, property: t });
          if (c.error && l && l.state < U.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = c.node) !== null && o !== void 0 ? o : c.error, this._nodeDescription = c.descr, l == null || l.references.push(this);
        } else if (this._ref === Gi)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
        return ae(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return Er(this._ref) ? this._ref : void 0;
      }
    };
    return a;
  }
  getLinkedNode(e) {
    var t;
    try {
      const r = this.getCandidate(e);
      if (Er(r))
        return { error: r };
      const i = this.loadAstNode(r);
      return i ? { node: i, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const i = (t = r.message) !== null && t !== void 0 ? t : String(r);
      return {
        error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}` })
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const t = this.langiumDocuments().getDocument(e.documentUri);
    if (t)
      return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
  }
  createLinkingError(e, t) {
    const r = es(e.container).$document;
    r && r.state < U.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: t });
  }
}
function Dm(n) {
  return typeof n.name == "string";
}
class Fm {
  getName(e) {
    if (Dm(e))
      return e.name;
  }
  getNameNode(e) {
    return Wl(e.$cstNode, "name");
  }
}
class Gm {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const t = tf(e), r = e.astNode;
      if (t && r) {
        const i = r[t.feature];
        if (Ue(i))
          return i.ref;
        if (Array.isArray(i)) {
          for (const s of i)
            if (Ue(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end)
              return s.ref;
        }
      }
      if (r) {
        const i = this.nameProvider.getNameNode(r);
        if (i && (i === e || fd(e, i)))
          return r;
      }
    }
  }
  findDeclarationNode(e) {
    const t = this.findDeclaration(e);
    if (t != null && t.$cstNode) {
      const r = this.nameProvider.getNameNode(t);
      return r ?? t.$cstNode;
    }
  }
  findReferences(e, t) {
    const r = [];
    if (t.includeDeclaration) {
      const s = this.getReferenceToSelf(e);
      s && r.push(s);
    }
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return t.documentUri && (i = i.filter((s) => it.equals(s.sourceUri, t.documentUri))), r.push(...i), Z(r);
  }
  getReferenceToSelf(e) {
    const t = this.nameProvider.getNameNode(e);
    if (t) {
      const r = et(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: r.uri,
        sourcePath: i,
        targetUri: r.uri,
        targetPath: i,
        segment: Fr(t),
        local: !0
      };
    }
  }
}
class ii {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.add(t, r);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return Ji.sum(Z(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, t) {
    if (t === void 0)
      return this.map.delete(e);
    {
      const r = this.map.get(e);
      if (r) {
        const i = r.indexOf(t);
        if (i >= 0)
          return r.length === 1 ? this.map.delete(e) : r.splice(i, 1), !0;
      }
      return !1;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    var t;
    return (t = this.map.get(e)) !== null && t !== void 0 ? t : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, t) {
    if (t === void 0)
      return this.map.has(e);
    {
      const r = this.map.get(e);
      return r ? r.indexOf(t) >= 0 : !1;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, t) {
    return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, t) {
    return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((t, r) => t.forEach((i) => e(i, r, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return Z(this.map.entries()).flatMap(([e, t]) => t.map((r) => [e, r]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return Z(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return Z(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return Z(this.map.entries());
  }
}
class rl {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.set(t, r);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, t) {
    return this.map.set(e, t), this.inverse.set(t, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const t = this.map.get(e);
    return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), !0) : !1;
  }
}
class Um {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, t = V.None) {
    return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(e, t, r = Ws, i = V.None) {
    const s = [];
    this.exportNode(e, s, t);
    for (const a of r(e))
      await Ae(i), this.exportNode(a, s, t);
    return s;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(e, t, r) {
    const i = this.nameProvider.getName(e);
    i && t.push(this.descriptions.createDescription(e, i, r));
  }
  async computeLocalScopes(e, t = V.None) {
    const r = e.parseResult.value, i = new ii();
    for (const s of Qn(r))
      await Ae(t), this.processNode(s, e, i);
    return i;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(e, t, r) {
    const i = e.$container;
    if (i) {
      const s = this.nameProvider.getName(e);
      s && r.add(i, this.descriptions.createDescription(e, s, t));
    }
  }
}
class il {
  constructor(e, t, r) {
    var i;
    this.elements = e, this.outerScope = t, this.caseInsensitive = (i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : !1;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const t = this.caseInsensitive ? this.elements.find((r) => r.name.toLowerCase() === e.toLowerCase()) : this.elements.find((r) => r.name === e);
    if (t)
      return t;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
}
class Bm {
  constructor(e, t, r) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : !1;
    for (const s of e) {
      const a = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(a, s);
    }
    this.outerScope = t;
  }
  getElement(e) {
    const t = this.caseInsensitive ? e.toLowerCase() : e, r = this.elements.get(t);
    if (r)
      return r;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = Z(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}
class tu {
  constructor() {
    this.toDispose = [], this.isDisposed = !1;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
}
class Vm extends tu {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, t) {
    this.throwIfDisposed(), this.cache.set(e, t);
  }
  get(e, t) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (t) {
      const r = t();
      return this.cache.set(e, r), r;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}
class Wm extends tu {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((t) => t);
  }
  has(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(t);
  }
  set(e, t, r) {
    this.throwIfDisposed(), this.cacheForContext(e).set(t, r);
  }
  get(e, t, r) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(t))
      return i.get(t);
    if (r) {
      const s = r();
      return i.set(t, s), s;
    } else
      return;
  }
  delete(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const t = this.converter(e);
      this.cache.delete(t);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const t = this.converter(e);
    let r = this.cache.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this.cache.set(t, r)), r;
  }
}
class jm extends Vm {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, t) {
    super(), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}
class Km {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new jm(e.shared);
  }
  getScope(e) {
    const t = [], r = this.reflection.getReferenceType(e), i = et(e.container).precomputedScopes;
    if (i) {
      let a = e.container;
      do {
        const o = i.get(a);
        o.length > 0 && t.push(Z(o).filter((l) => this.reflection.isSubtype(l.type, r))), a = a.$container;
      } while (a);
    }
    let s = this.getGlobalScope(r, e);
    for (let a = t.length - 1; a >= 0; a--)
      s = this.createScope(t[a], s);
    return s;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, t, r) {
    return new il(Z(e), t, r);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, t, r) {
    const i = Z(e).map((s) => {
      const a = this.nameProvider.getName(s);
      if (a)
        return this.descriptions.createDescription(s, a);
    }).nonNullable();
    return new il(i, t, r);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, t) {
    return this.globalScopeCache.get(e, () => new Bm(this.indexManager.allElements(e)));
  }
}
function Hm(n) {
  return typeof n.$comment == "string";
}
function sl(n) {
  return typeof n == "object" && !!n && ("$ref" in n || "$error" in n);
}
class zm {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, t) {
    const r = t ?? {}, i = t == null ? void 0 : t.replacer, s = (o, l) => this.replacer(o, l, r), a = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = et(e), JSON.stringify(e, a, t == null ? void 0 : t.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, t) {
    const r = t ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, r), i;
  }
  replacer(e, t, { refText: r, sourceText: i, textRegions: s, comments: a, uriConverter: o }) {
    var l, c, u, d;
    if (!this.ignoreProperties.has(e))
      if (Ue(t)) {
        const h = t.ref, f = r ? t.$refText : void 0;
        if (h) {
          const m = et(h);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, t) : g = m.uri.toString());
          const v = this.astNodeLocator.getAstNodePath(h);
          return {
            $ref: `${g}#${v}`,
            $refText: f
          };
        } else
          return {
            $error: (c = (l = t.error) === null || l === void 0 ? void 0 : l.message) !== null && c !== void 0 ? c : "Could not resolve reference",
            $refText: f
          };
      } else if (ae(t)) {
        let h;
        if (s && (h = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t)), (!e || t.$document) && (h != null && h.$textRegion) && (h.$textRegion.documentURI = (u = this.currentDocument) === null || u === void 0 ? void 0 : u.uri.toString())), i && !e && (h ?? (h = Object.assign({}, t)), h.$sourceText = (d = t.$cstNode) === null || d === void 0 ? void 0 : d.text), a) {
          h ?? (h = Object.assign({}, t));
          const f = this.commentProvider.getComment(t);
          f && (h.$comment = f.replace(/\r/g, ""));
        }
        return h ?? t;
      } else
        return t;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const t = (r) => ({
      offset: r.offset,
      end: r.end,
      length: r.length,
      range: r.range
    });
    if (e.$cstNode) {
      const r = e.$textRegion = t(e.$cstNode), i = r.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        const a = Qd(e.$cstNode, s).map(t);
        a.length !== 0 && (i[s] = a);
      }), e;
    }
  }
  linkNode(e, t, r, i, s, a) {
    for (const [l, c] of Object.entries(e))
      if (Array.isArray(c))
        for (let u = 0; u < c.length; u++) {
          const d = c[u];
          sl(d) ? c[u] = this.reviveReference(e, l, t, d, r) : ae(d) && this.linkNode(d, t, r, e, l, u);
        }
      else sl(c) ? e[l] = this.reviveReference(e, l, t, c, r) : ae(c) && this.linkNode(c, t, r, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a;
  }
  reviveReference(e, t, r, i, s) {
    let a = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(r, i.$ref, s.uriConverter);
      if (ae(l))
        return a || (a = this.nameProvider.getName(l)), {
          $refText: a ?? "",
          ref: l
        };
      o = l;
    }
    if (o) {
      const l = {
        $refText: a ?? ""
      };
      return l.error = {
        container: e,
        property: t,
        message: o,
        reference: l
      }, l;
    } else
      return;
  }
  getRefNode(e, t, r) {
    try {
      const i = t.indexOf("#");
      if (i === 0) {
        const l = this.astNodeLocator.getAstNode(e, t.substring(1));
        return l || "Could not resolve path: " + t;
      }
      if (i < 0) {
        const l = r ? r(t) : mt.parse(t), c = this.langiumDocuments.getDocument(l);
        return c ? c.parseResult.value : "Could not find document for URI: " + t;
      }
      const s = r ? r(t.substring(0, i)) : mt.parse(t.substring(0, i)), a = this.langiumDocuments.getDocument(s);
      if (!a)
        return "Could not find document for URI: " + t;
      if (i === t.length - 1)
        return a.parseResult.value;
      const o = this.astNodeLocator.getAstNode(a.parseResult.value, t.substring(i + 1));
      return o || "Could not resolve URI: " + t;
    } catch (i) {
      return String(i);
    }
  }
}
class qm {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e == null ? void 0 : e.workspace.TextDocuments;
  }
  register(e) {
    const t = e.LanguageMetaData;
    for (const r of t.fileExtensions)
      this.fileExtensionMap.has(r) && console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(r, e);
    this.languageIdMap.set(t.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var t, r;
    if (this.singleton !== void 0)
      return this.singleton;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const i = (r = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e)) === null || r === void 0 ? void 0 : r.languageId;
    if (i !== void 0) {
      const o = this.languageIdMap.get(i);
      if (o)
        return o;
    }
    const s = it.extname(e), a = this.fileExtensionMap.get(s);
    if (!a)
      throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return a;
  }
  hasServices(e) {
    try {
      return this.getServices(e), !0;
    } catch {
      return !1;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
}
function Gn(n) {
  return { code: n };
}
var si;
(function(n) {
  n.all = ["fast", "slow", "built-in"];
})(si || (si = {}));
class Ym {
  constructor(e) {
    this.entries = new ii(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(e, t = this, r = "fast") {
    if (r === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (const [i, s] of Object.entries(e)) {
      const a = s;
      if (Array.isArray(a))
        for (const o of a) {
          const l = {
            check: this.wrapValidationException(o, t),
            category: r
          };
          this.addEntry(i, l);
        }
      else if (typeof a == "function") {
        const o = {
          check: this.wrapValidationException(a, t),
          category: r
        };
        this.addEntry(i, o);
      } else
        Jn();
    }
  }
  wrapValidationException(e, t) {
    return async (r, i, s) => {
      await this.handleException(() => e.call(t, r, i, s), "An error occurred during validation", i, r);
    };
  }
  async handleException(e, t, r, i) {
    try {
      await e();
    } catch (s) {
      if (Ei(s))
        throw s;
      console.error(`${t}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      const a = s instanceof Error ? s.message : String(s);
      r("error", `${t}: ${a}`, { node: i });
    }
  }
  addEntry(e, t) {
    if (e === "AstNode") {
      this.entries.add("AstNode", t);
      return;
    }
    for (const r of this.reflection.getAllSubTypes(e))
      this.entries.add(r, t);
  }
  getChecks(e, t) {
    let r = Z(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return t && (r = r.filter((i) => t.includes(i.category))), r.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, t = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, t = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
  }
  wrapPreparationException(e, t, r) {
    return async (i, s, a, o) => {
      await this.handleException(() => e.call(r, i, s, a, o), t, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
}
class Xm {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, t = {}, r = V.None) {
    const i = e.parseResult, s = [];
    if (await Ae(r), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.LexingError;
    }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.ParsingError;
    })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.LinkingError;
    }))))
      return s;
    try {
      s.push(...await this.validateAst(i.value, t, r));
    } catch (a) {
      if (Ei(a))
        throw a;
      console.error("An error occurred during validation:", a);
    }
    return await Ae(r), s;
  }
  processLexingErrors(e, t, r) {
    var i, s, a;
    const o = [...e.lexerErrors, ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []];
    for (const l of o) {
      const c = (a = l.severity) !== null && a !== void 0 ? a : "error", u = {
        severity: Ui(c),
        range: {
          start: {
            line: l.line - 1,
            character: l.column - 1
          },
          end: {
            line: l.line - 1,
            character: l.column + l.length - 1
          }
        },
        message: l.message,
        data: Qm(c),
        source: this.getSource()
      };
      t.push(u);
    }
  }
  processParsingErrors(e, t, r) {
    for (const i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const a = i.previousToken;
          if (isNaN(a.startOffset)) {
            const o = { line: 0, character: 0 };
            s = { start: o, end: o };
          } else {
            const o = { line: a.endLine - 1, character: a.endColumn };
            s = { start: o, end: o };
          }
        }
      } else
        s = Zi(i.token);
      if (s) {
        const a = {
          severity: Ui("error"),
          range: s,
          message: i.message,
          data: Gn(Oe.ParsingError),
          source: this.getSource()
        };
        t.push(a);
      }
    }
  }
  processLinkingErrors(e, t, r) {
    for (const i of e.references) {
      const s = i.error;
      if (s) {
        const a = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: Oe.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        t.push(this.toDiagnostic("error", s.message, a));
      }
    }
  }
  async validateAst(e, t, r = V.None) {
    const i = [], s = (a, o, l) => {
      i.push(this.toDiagnostic(a, o, l));
    };
    return await this.validateAstBefore(e, t, s, r), await this.validateAstNodes(e, t, s, r), await this.validateAstAfter(e, t, s, r), i;
  }
  async validateAstBefore(e, t, r, i = V.None) {
    var s;
    const a = this.validationRegistry.checksBefore;
    for (const o of a)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, t, r, i = V.None) {
    await Promise.all($t(e).map(async (s) => {
      await Ae(i);
      const a = this.validationRegistry.getChecks(s.$type, t.categories);
      for (const o of a)
        await o(s, r, i);
    }));
  }
  async validateAstAfter(e, t, r, i = V.None) {
    var s;
    const a = this.validationRegistry.checksAfter;
    for (const o of a)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, t, r) {
    return {
      message: t,
      range: Jm(r),
      severity: Ui(e),
      code: r.code,
      codeDescription: r.codeDescription,
      tags: r.tags,
      relatedInformation: r.relatedInformation,
      data: r.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}
function Jm(n) {
  if (n.range)
    return n.range;
  let e;
  return typeof n.property == "string" ? e = Wl(n.node.$cstNode, n.property, n.index) : typeof n.keyword == "string" && (e = Zd(n.node.$cstNode, n.keyword, n.index)), e ?? (e = n.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function Ui(n) {
  switch (n) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
function Qm(n) {
  switch (n) {
    case "error":
      return Gn(Oe.LexingError);
    case "warning":
      return Gn(Oe.LexingWarning);
    case "info":
      return Gn(Oe.LexingInfo);
    case "hint":
      return Gn(Oe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
var Oe;
(function(n) {
  n.LexingError = "lexing-error", n.LexingWarning = "lexing-warning", n.LexingInfo = "lexing-info", n.LexingHint = "lexing-hint", n.ParsingError = "parsing-error", n.LinkingError = "linking-error";
})(Oe || (Oe = {}));
class Zm {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, t, r) {
    const i = r ?? et(e);
    t ?? (t = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!t)
      throw new Error(`Node at path ${s} has no name.`);
    let a;
    const o = () => {
      var l;
      return a ?? (a = Fr((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: t,
      get nameSegment() {
        return o();
      },
      selectionSegment: Fr(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
}
class eg {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, t = V.None) {
    const r = [], i = e.parseResult.value;
    for (const s of $t(i))
      await Ae(t), Fl(s).filter((a) => !Er(a)).forEach((a) => {
        const o = this.createDescription(a);
        o && r.push(o);
      });
    return r;
  }
  createDescription(e) {
    const t = e.reference.$nodeDescription, r = e.reference.$refNode;
    if (!t || !r)
      return;
    const i = et(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: t.documentUri,
      targetPath: t.path,
      segment: Fr(r),
      local: it.equals(t.documentUri, i)
    };
  }
}
class tg {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const t = this.getAstNodePath(e.$container), r = this.getPathSegment(e);
      return t + this.segmentSeparator + r;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: t }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return t !== void 0 ? e + this.indexSeparator + t : e;
  }
  getAstNode(e, t) {
    return t.split(this.segmentSeparator).reduce((i, s) => {
      if (!i || s.length === 0)
        return i;
      const a = s.indexOf(this.indexSeparator);
      if (a > 0) {
        const o = s.substring(0, a), l = parseInt(s.substring(a + 1)), c = i[o];
        return c == null ? void 0 : c[l];
      }
      return i[s];
    }, e);
  }
}
class ng {
  constructor(e) {
    this._ready = new la(), this.settings = {}, this.workspaceConfig = !1, this.onConfigurationSectionUpdateEmitter = new Jc(), this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var t, r;
    this.workspaceConfig = (r = (t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && r !== void 0 ? r : !1;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const t = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: t.map((r) => this.toSectionName(r.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const t = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), r = await e.fetchConfiguration(t);
        t.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, r[s]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((t) => {
      const r = e.settings[t];
      this.updateSectionConfiguration(t, r), this.onConfigurationSectionUpdateEmitter.fire({ section: t, configuration: r });
    });
  }
  updateSectionConfiguration(e, t) {
    this.settings[e] = t;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, t) {
    await this.ready;
    const r = this.toSectionName(e);
    if (this.settings[r])
      return this.settings[r][t];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}
var jn;
(function(n) {
  function e(t) {
    return {
      dispose: async () => await t()
    };
  }
  n.create = e;
})(jn || (jn = {}));
class rg {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new ii(), this.documentPhaseListeners = new ii(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = U.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, t = {}, r = V.None) {
    var i, s;
    for (const a of e) {
      const o = a.uri.toString();
      if (a.state === U.Validated) {
        if (typeof t.validation == "boolean" && t.validation)
          a.state = U.IndexedReferences, a.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof t.validation == "object") {
          const l = this.buildState.get(o), c = (i = l == null ? void 0 : l.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (c) {
            const d = ((s = t.validation.categories) !== null && s !== void 0 ? s : si.all).filter((h) => !c.includes(h));
            d.length > 0 && (this.buildState.set(o, {
              completed: !1,
              options: {
                validation: Object.assign(Object.assign({}, t.validation), { categories: d })
              },
              result: l.result
            }), a.state = U.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = U.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, t, r);
  }
  async update(e, t, r = V.None) {
    this.currentState = U.Changed;
    for (const a of t)
      this.langiumDocuments.deleteDocument(a), this.buildState.delete(a.toString()), this.indexManager.remove(a);
    for (const a of e) {
      if (!this.langiumDocuments.invalidateDocument(a)) {
        const l = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a);
        l.state = U.Changed, this.langiumDocuments.addDocument(l);
      }
      this.buildState.delete(a.toString());
    }
    const i = Z(e).concat(t).map((a) => a.toString()).toSet();
    this.langiumDocuments.all.filter((a) => !i.has(a.uri.toString()) && this.shouldRelink(a, i)).forEach((a) => {
      this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a), a.state = Math.min(a.state, U.ComputedScopes), a.diagnostics = void 0;
    }), await this.emitUpdate(e, t), await Ae(r);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a) => {
      var o;
      return a.state < U.Linked || !(!((o = this.buildState.get(a.uri.toString())) === null || o === void 0) && o.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, r);
  }
  async emitUpdate(e, t) {
    await Promise.all(this.updateListeners.map((r) => r(e, t)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let t = 0, r = e.length - 1;
    for (; t < r; ) {
      for (; t < e.length && this.hasTextDocument(e[t]); )
        t++;
      for (; r >= 0 && !this.hasTextDocument(e[r]); )
        r--;
      t < r && ([e[t], e[r]] = [e[r], e[t]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var t;
    return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, t) {
    return e.references.some((r) => r.error !== void 0) ? !0 : this.indexManager.isAffected(e, t);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), jn.create(() => {
      const t = this.updateListeners.indexOf(e);
      t >= 0 && this.updateListeners.splice(t, 1);
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, t, r) {
    this.prepareBuild(e, t), await this.runCancelable(e, U.Parsed, r, (s) => this.langiumDocumentFactory.update(s, r)), await this.runCancelable(e, U.IndexedContent, r, (s) => this.indexManager.updateContent(s, r)), await this.runCancelable(e, U.ComputedScopes, r, async (s) => {
      const a = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a.computeLocalScopes(s, r);
    }), await this.runCancelable(e, U.Linked, r, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, r)), await this.runCancelable(e, U.IndexedReferences, r, (s) => this.indexManager.updateReferences(s, r));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, U.Validated, r, (s) => this.validate(s, r));
    for (const s of e) {
      const a = this.buildState.get(s.uri.toString());
      a && (a.completed = !0);
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, t) {
    for (const r of e) {
      const i = r.uri.toString(), s = this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: !1,
        options: t,
        result: s == null ? void 0 : s.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, t, r, i) {
    const s = e.filter((o) => o.state < t);
    for (const o of s)
      await Ae(r), await i(o), o.state = t, await this.notifyDocumentPhase(o, t, r);
    const a = e.filter((o) => o.state === t);
    await this.notifyBuildPhase(a, t, r), this.currentState = t;
  }
  onBuildPhase(e, t) {
    return this.buildPhaseListeners.add(e, t), jn.create(() => {
      this.buildPhaseListeners.delete(e, t);
    });
  }
  onDocumentPhase(e, t) {
    return this.documentPhaseListeners.add(e, t), jn.create(() => {
      this.documentPhaseListeners.delete(e, t);
    });
  }
  waitUntil(e, t, r) {
    let i;
    if (t && "path" in t ? i = t : r = t, r ?? (r = V.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : r.isCancellationRequested ? Promise.reject(ri) : new Promise((s, a) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const c = this.langiumDocuments.getDocument(i);
          s(c == null ? void 0 : c.uri);
        } else
          s(void 0);
      }), l = r.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a(ri);
      });
    });
  }
  async notifyDocumentPhase(e, t, r) {
    const s = this.documentPhaseListeners.get(t).slice();
    for (const a of s)
      try {
        await a(e, r);
      } catch (o) {
        if (!Ei(o))
          throw o;
      }
  }
  async notifyBuildPhase(e, t, r) {
    if (e.length === 0)
      return;
    const s = this.buildPhaseListeners.get(t).slice();
    for (const a of s)
      await Ae(r), await a(e, r);
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, t) {
    var r, i;
    const s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a = this.getBuildOptions(e).validation, o = typeof a == "object" ? a : void 0, l = await s.validateDocument(e, o, t);
    e.diagnostics ? e.diagnostics.push(...l) : e.diagnostics = l;
    const c = this.buildState.get(e.uri.toString());
    if (c) {
      (r = c.result) !== null && r !== void 0 || (c.result = {});
      const u = (i = o == null ? void 0 : o.categories) !== null && i !== void 0 ? i : si.all;
      c.result.validationChecks ? c.result.validationChecks.push(...u) : c.result.validationChecks = [...u];
    }
  }
  getBuildOptions(e) {
    var t, r;
    return (r = (t = this.buildState.get(e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && r !== void 0 ? r : {};
  }
}
class ig {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new Wm(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, t) {
    const r = et(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a) => {
        it.equals(a.targetUri, r) && a.targetPath === t && i.push(a);
      });
    }), Z(i);
  }
  allElements(e, t) {
    let r = Z(this.symbolIndex.keys());
    return t && (r = r.filter((i) => !t || t.has(i))), r.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, t) {
    var r;
    return t ? this.symbolByTypeIndex.get(e, t, () => {
      var s;
      return ((s = this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((o) => this.astReflection.isSubtype(o.type, t));
    }) : (r = this.symbolIndex.get(e)) !== null && r !== void 0 ? r : [];
  }
  remove(e) {
    const t = e.toString();
    this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
  }
  async updateContent(e, t = V.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), s = e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e, t = V.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, t) {
    const r = this.referenceIndex.get(e.uri.toString());
    return r ? r.some((i) => !i.local && t.has(i.targetUri.toString())) : !1;
  }
}
class sg {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new la(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    var t;
    this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0;
  }
  initialized(e) {
    return this.mutex.write((t) => {
      var r;
      return this.initializeWorkspace((r = this.folders) !== null && r !== void 0 ? r : [], t);
    });
  }
  async initializeWorkspace(e, t = V.None) {
    const r = await this.performStartup(e);
    await Ae(t), await this.documentBuilder.build(r, this.initialBuildOptions, t);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const t = this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), r = [], i = (s) => {
      r.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    return await this.loadAdditionalDocuments(e, i), await Promise.all(e.map((s) => [s, this.getRootFolder(s)]).map(async (s) => this.traverseFolder(...s, t, i))), this._ready.resolve(), r;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, t) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return mt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(e, t, r, i) {
    const s = await this.fileSystemProvider.readDirectory(t);
    await Promise.all(s.map(async (a) => {
      if (this.includeEntry(e, a, r)) {
        if (a.isDirectory)
          await this.traverseFolder(e, a.uri, r, i);
        else if (a.isFile) {
          const o = await this.langiumDocuments.getOrCreateDocument(a.uri);
          i(o);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(e, t, r) {
    const i = it.basename(t.uri);
    if (i.startsWith("."))
      return !1;
    if (t.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (t.isFile) {
      const s = it.extname(t.uri);
      return r.includes(s);
    }
    return !1;
  }
}
class ag {
  buildUnexpectedCharactersMessage(e, t, r, i, s) {
    return ss.buildUnexpectedCharactersMessage(e, t, r, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return ss.buildUnableToPopLexerModeMessage(e);
  }
}
const og = { mode: "full" };
class lg {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const t = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(t);
    const r = al(t) ? Object.values(t) : t, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new de(r, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, t = og) {
    var r, i, s;
    const a = this.chevrotainLexer.tokenize(e);
    return {
      tokens: a.tokens,
      errors: a.errors,
      hidden: (r = a.groups.hidden) !== null && r !== void 0 ? r : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (al(e))
      return e;
    const t = nu(e) ? Object.values(e.modes).flat() : e, r = {};
    return t.forEach((i) => r[i.name] = i), r;
  }
}
function cg(n) {
  return Array.isArray(n) && (n.length === 0 || "name" in n[0]);
}
function nu(n) {
  return n && "modes" in n && "defaultMode" in n;
}
function al(n) {
  return !cg(n) && !nu(n);
}
function ug(n, e, t) {
  let r, i;
  typeof n == "string" ? (i = e, r = t) : (i = n.range.start, r = e), i || (i = P.create(0, 0));
  const s = ru(n), a = ca(r), o = hg({
    lines: s,
    position: i,
    options: a
  });
  return Tg({
    index: 0,
    tokens: o,
    position: i
  });
}
function dg(n, e) {
  const t = ca(e), r = ru(n);
  if (r.length === 0)
    return !1;
  const i = r[0], s = r[r.length - 1], a = t.start, o = t.end;
  return !!(a != null && a.exec(i)) && !!(o != null && o.exec(s));
}
function ru(n) {
  let e = "";
  return typeof n == "string" ? e = n : e = n.text, e.split(Ud);
}
const ol = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, fg = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function hg(n) {
  var e, t, r;
  const i = [];
  let s = n.position.line, a = n.position.character;
  for (let o = 0; o < n.lines.length; o++) {
    const l = o === 0, c = o === n.lines.length - 1;
    let u = n.lines[o], d = 0;
    if (l && n.options.start) {
      const f = (e = n.options.start) === null || e === void 0 ? void 0 : e.exec(u);
      f && (d = f.index + f[0].length);
    } else {
      const f = (t = n.options.line) === null || t === void 0 ? void 0 : t.exec(u);
      f && (d = f.index + f[0].length);
    }
    if (c) {
      const f = (r = n.options.end) === null || r === void 0 ? void 0 : r.exec(u);
      f && (u = u.substring(0, f.index));
    }
    if (u = u.substring(0, yg(u)), bs(u, d) >= u.length) {
      if (i.length > 0) {
        const f = P.create(s, a);
        i.push({
          type: "break",
          content: "",
          range: b.create(f, f)
        });
      }
    } else {
      ol.lastIndex = d;
      const f = ol.exec(u);
      if (f) {
        const m = f[0], g = f[1], v = P.create(s, a + d), y = P.create(s, a + d + m.length);
        i.push({
          type: "tag",
          content: g,
          range: b.create(v, y)
        }), d += m.length, d = bs(u, d);
      }
      if (d < u.length) {
        const m = u.substring(d), g = Array.from(m.matchAll(fg));
        i.push(...pg(g, m, s, a + d));
      }
    }
    s++, a = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function pg(n, e, t, r) {
  const i = [];
  if (n.length === 0) {
    const s = P.create(t, r), a = P.create(t, r + e.length);
    i.push({
      type: "text",
      content: e,
      range: b.create(s, a)
    });
  } else {
    let s = 0;
    for (const o of n) {
      const l = o.index, c = e.substring(s, l);
      c.length > 0 && i.push({
        type: "text",
        content: e.substring(s, l),
        range: b.create(P.create(t, s + r), P.create(t, l + r))
      });
      let u = c.length + 1;
      const d = o[1];
      if (i.push({
        type: "inline-tag",
        content: d,
        range: b.create(P.create(t, s + u + r), P.create(t, s + u + d.length + r))
      }), u += d.length, o.length === 4) {
        u += o[2].length;
        const h = o[3];
        i.push({
          type: "text",
          content: h,
          range: b.create(P.create(t, s + u + r), P.create(t, s + u + h.length + r))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: b.create(P.create(t, s + u + r), P.create(t, s + u + r))
        });
      s = l + o[0].length;
    }
    const a = e.substring(s);
    a.length > 0 && i.push({
      type: "text",
      content: a,
      range: b.create(P.create(t, s + r), P.create(t, s + r + a.length))
    });
  }
  return i;
}
const mg = /\S/, gg = /\s*$/;
function bs(n, e) {
  const t = n.substring(e).match(mg);
  return t ? e + t.index : n.length;
}
function yg(n) {
  const e = n.match(gg);
  if (e && typeof e.index == "number")
    return e.index;
}
function Tg(n) {
  var e, t, r, i;
  const s = P.create(n.position.line, n.position.character);
  if (n.tokens.length === 0)
    return new ll([], b.create(s, s));
  const a = [];
  for (; n.index < n.tokens.length; ) {
    const c = Rg(n, a[a.length - 1]);
    c && a.push(c);
  }
  const o = (t = (e = a[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, l = (i = (r = a[a.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null && i !== void 0 ? i : s;
  return new ll(a, b.create(o, l));
}
function Rg(n, e) {
  const t = n.tokens[n.index];
  if (t.type === "tag")
    return su(n, !1);
  if (t.type === "text" || t.type === "inline-tag")
    return iu(n);
  vg(t, e), n.index++;
}
function vg(n, e) {
  if (e) {
    const t = new ou("", n.range);
    "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
  }
}
function iu(n) {
  let e = n.tokens[n.index];
  const t = e;
  let r = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(Ag(n)), r = e, e = n.tokens[n.index];
  return new Ps(i, b.create(t.range.start, r.range.end));
}
function Ag(n) {
  return n.tokens[n.index].type === "inline-tag" ? su(n, !0) : au(n);
}
function su(n, e) {
  const t = n.tokens[n.index++], r = t.content.substring(1), i = n.tokens[n.index];
  if ((i == null ? void 0 : i.type) === "text")
    if (e) {
      const s = au(n);
      return new Vi(r, new Ps([s], s.range), e, b.create(t.range.start, s.range.end));
    } else {
      const s = iu(n);
      return new Vi(r, s, e, b.create(t.range.start, s.range.end));
    }
  else {
    const s = t.range;
    return new Vi(r, new Ps([], s), e, s);
  }
}
function au(n) {
  const e = n.tokens[n.index++];
  return new ou(e.content, e.range);
}
function ca(n) {
  if (!n)
    return ca({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: t, line: r } = n;
  return {
    start: Bi(e, !0),
    end: Bi(t, !1),
    line: Bi(r, !0)
  };
}
function Bi(n, e) {
  if (typeof n == "string" || typeof n == "object") {
    const t = typeof n == "string" ? fi(n) : n.source;
    return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
  } else
    return n;
}
class ll {
  constructor(e, t) {
    this.elements = e, this.range = t;
  }
  getTag(e) {
    return this.getAllTags().find((t) => t.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((t) => t.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const t of this.elements)
      if (e.length === 0)
        e = t.toString();
      else {
        const r = t.toString();
        e += cl(e) + r;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let t = "";
    for (const r of this.elements)
      if (t.length === 0)
        t = r.toMarkdown(e);
      else {
        const i = r.toMarkdown(e);
        t += cl(t) + i;
      }
    return t.trim();
  }
}
class Vi {
  constructor(e, t, r, i) {
    this.name = e, this.content = t, this.inline = r, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const t = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var t, r;
    return (r = (t = e == null ? void 0 : e.renderTag) === null || t === void 0 ? void 0 : t.call(e, this)) !== null && r !== void 0 ? r : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const t = this.content.toMarkdown(e);
    if (this.inline) {
      const s = Eg(this.name, t, e ?? {});
      if (typeof s == "string")
        return s;
    }
    let r = "";
    (e == null ? void 0 : e.tag) === "italic" || (e == null ? void 0 : e.tag) === void 0 ? r = "*" : (e == null ? void 0 : e.tag) === "bold" ? r = "**" : (e == null ? void 0 : e.tag) === "bold-italic" && (r = "***");
    let i = `${r}@${this.name}${r}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
  }
}
function Eg(n, e, t) {
  var r, i;
  if (n === "linkplain" || n === "linkcode" || n === "link") {
    const s = e.indexOf(" ");
    let a = e;
    if (s > 0) {
      const l = bs(e, s);
      a = e.substring(l), e = e.substring(0, s);
    }
    return (n === "linkcode" || n === "link" && t.link === "code") && (a = `\`${a}\``), (i = (r = t.renderLink) === null || r === void 0 ? void 0 : r.call(t, e, a)) !== null && i !== void 0 ? i : kg(e, a);
  }
}
function kg(n, e) {
  try {
    return mt.parse(n, !0), `[${e}](${n})`;
  } catch {
    return n;
  }
}
class Ps {
  constructor(e, t) {
    this.inlines = e, this.range = t;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.inlines.length; t++) {
      const r = this.inlines[t], i = this.inlines[t + 1];
      e += r.toString(), i && i.range.start.line > r.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let t = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const i = this.inlines[r], s = this.inlines[r + 1];
      t += i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (t += `
`);
    }
    return t;
  }
}
class ou {
  constructor(e, t) {
    this.text = e, this.range = t;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}
function cl(n) {
  return n.endsWith(`
`) ? `
` : `

`;
}
class Sg {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const t = this.commentProvider.getComment(e);
    if (t && dg(t))
      return ug(t).toMarkdown({
        renderLink: (i, s) => this.documentationLinkRenderer(e, i, s),
        renderTag: (i) => this.documentationTagRenderer(e, i)
      });
  }
  documentationLinkRenderer(e, t, r) {
    var i;
    const s = (i = this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, t);
    if (s && s.nameSegment) {
      const a = s.nameSegment.range.start.line + 1, o = s.nameSegment.range.start.character + 1, l = s.documentUri.with({ fragment: `L${a},${o}` });
      return `[${r}](${l.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, t) {
  }
  findNameInPrecomputedScopes(e, t) {
    const i = et(e).precomputedScopes;
    if (!i)
      return;
    let s = e;
    do {
      const o = i.get(s).find((l) => l.name === t);
      if (o)
        return o;
      s = s.$container;
    } while (s);
  }
  findNameInGlobalScope(e, t) {
    return this.indexManager.allElements().find((i) => i.name === t);
  }
}
class xg {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var t;
    return Hm(e) ? e.$comment : (t = gd(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
  }
}
class Ig {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, t) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}
class $g {
  constructor() {
    this.previousTokenSource = new oa(), this.writeQueue = [], this.readQueue = [], this.done = !0;
  }
  write(e) {
    this.cancelWrite();
    const t = Lm();
    return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, t, r = V.None) {
    const i = new la(), s = {
      action: t,
      deferred: i,
      cancellationToken: r
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = !1, await Promise.all(e.map(async ({ action: t, deferred: r, cancellationToken: i }) => {
      try {
        const s = await Promise.resolve().then(() => t(i));
        r.resolve(s);
      } catch (s) {
        Ei(s) ? r.resolve(void 0) : r.reject(s);
      }
    })), this.done = !0, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}
class Cg {
  constructor(e) {
    this.grammarElementIdMap = new rl(), this.tokenTypeIdMap = new rl(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((t) => Object.assign(Object.assign({}, t), { message: t.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const i of $t(e))
      t.set(i, {});
    if (e.$cstNode)
      for (const i of Qi(e.$cstNode))
        r.set(i, {});
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  dehydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (r.$cstNode = this.dehydrateCstNode(e.$cstNode, t));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ae(o) ? a.push(this.dehydrateAstNode(o, t)) : Ue(o) ? a.push(this.dehydrateReference(o, t)) : a.push(o);
        } else ae(s) ? r[i] = this.dehydrateAstNode(s, t) : Ue(s) ? r[i] = this.dehydrateReference(s, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  dehydrateReference(e, t) {
    const r = {};
    return r.$refText = e.$refText, e.$refNode && (r.$refNode = t.cstNodes.get(e.$refNode)), r;
  }
  dehydrateCstNode(e, t) {
    const r = t.cstNodes.get(e);
    return wl(e) ? r.fullText = e.fullText : r.grammarSource = this.getGrammarElementId(e.grammarSource), r.hidden = e.hidden, r.astNode = t.astNodes.get(e.astNode), Hn(e) ? r.content = e.content.map((i) => this.dehydrateCstNode(i, t)) : Nl(e) && (r.tokenType = e.tokenType.name, r.offset = e.offset, r.length = e.length, r.startLine = e.range.start.line, r.startColumn = e.range.start.character, r.endLine = e.range.end.line, r.endColumn = e.range.end.character), r;
  }
  hydrate(e) {
    const t = e.value, r = this.createHydrationContext(t);
    return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, r), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(t, r)
    };
  }
  createHydrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const s of $t(e))
      t.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of Qi(e.$cstNode)) {
        let a;
        "fullText" in s ? (a = new Gc(s.fullText), i = a) : "content" in s ? a = new sa() : "tokenType" in s && (a = this.hydrateCstLeafNode(s)), a && (r.set(s, a), a.root = i);
      }
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  hydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode && (r.$cstNode = t.cstNodes.get(e.$cstNode));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ae(o) ? a.push(this.setParent(this.hydrateAstNode(o, t), r)) : Ue(o) ? a.push(this.hydrateReference(o, r, i, t)) : a.push(o);
        } else ae(s) ? r[i] = this.setParent(this.hydrateAstNode(s, t), r) : Ue(s) ? r[i] = this.hydrateReference(s, r, i, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  setParent(e, t) {
    return e.$container = t, e;
  }
  hydrateReference(e, t, r, i) {
    return this.linker.buildReference(t, r, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, t, r = 0) {
    const i = t.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = t.astNodes.get(e.astNode), Hn(i))
      for (const s of e.content) {
        const a = this.hydrateCstNode(s, t, r++);
        i.content.push(a);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const t = this.getTokenType(e.tokenType), r = e.offset, i = e.length, s = e.startLine, a = e.startColumn, o = e.endLine, l = e.endColumn, c = e.hidden;
    return new Is(r, i, {
      start: {
        line: s,
        character: a
      },
      end: {
        line: o,
        character: l
      }
    }, t, c);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const t of $t(this.grammar))
      Td(t) && this.grammarElementIdMap.set(t, e++);
  }
}
function Rt(n) {
  return {
    documentation: {
      CommentProvider: (e) => new xg(e),
      DocumentationProvider: (e) => new Sg(e)
    },
    parser: {
      AsyncParser: (e) => new Ig(e),
      GrammarConfig: (e) => uf(e),
      LangiumParser: (e) => ym(e),
      CompletionParser: (e) => gm(e),
      ValueConverter: () => new qc(),
      TokenBuilder: () => new zc(),
      Lexer: (e) => new lg(e),
      ParserErrorMessageProvider: () => new Vc(),
      LexerErrorMessageProvider: () => new ag()
    },
    workspace: {
      AstNodeLocator: () => new tg(),
      AstNodeDescriptionProvider: (e) => new Zm(e),
      ReferenceDescriptionProvider: (e) => new eg(e)
    },
    references: {
      Linker: (e) => new Mm(e),
      NameProvider: () => new Fm(),
      ScopeProvider: (e) => new Km(e),
      ScopeComputation: (e) => new Um(e),
      References: (e) => new Gm(e)
    },
    serializer: {
      Hydrator: (e) => new Cg(e),
      JsonSerializer: (e) => new zm(e)
    },
    validation: {
      DocumentValidator: (e) => new Xm(e),
      ValidationRegistry: (e) => new Ym(e)
    },
    shared: () => n.shared
  };
}
function vt(n) {
  return {
    ServiceRegistry: (e) => new qm(e),
    workspace: {
      LangiumDocuments: (e) => new Pm(e),
      LangiumDocumentFactory: (e) => new bm(e),
      DocumentBuilder: (e) => new rg(e),
      IndexManager: (e) => new ig(e),
      WorkspaceManager: (e) => new sg(e),
      FileSystemProvider: (e) => n.fileSystemProvider(e),
      WorkspaceLock: () => new $g(),
      ConfigurationProvider: (e) => new ng(e)
    }
  };
}
var ul;
(function(n) {
  n.merge = (e, t) => ai(ai({}, e), t);
})(ul || (ul = {}));
function pe(n, e, t, r, i, s, a, o, l) {
  const c = [n, e, t, r, i, s, a, o, l].reduce(ai, {});
  return lu(c);
}
const Ng = Symbol("isProxy");
function lu(n, e) {
  const t = new Proxy({}, {
    deleteProperty: () => !1,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (r, i) => i === Ng ? !0 : fl(r, i, n, e || t),
    getOwnPropertyDescriptor: (r, i) => (fl(r, i, n, e || t), Object.getOwnPropertyDescriptor(r, i)),
    // used by for..in
    has: (r, i) => i in n,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(n)]
    // used by for..in
  });
  return t;
}
const dl = Symbol();
function fl(n, e, t, r) {
  if (e in n) {
    if (n[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: n[e] });
    if (n[e] === dl)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return n[e];
  } else if (e in t) {
    const i = t[e];
    n[e] = dl;
    try {
      n[e] = typeof i == "function" ? i(r) : lu(i, r);
    } catch (s) {
      throw n[e] = s instanceof Error ? s : void 0, s;
    }
    return n[e];
  } else
    return;
}
function ai(n, e) {
  if (e) {
    for (const [t, r] of Object.entries(e))
      if (r !== void 0) {
        const i = n[t];
        i !== null && r !== null && typeof i == "object" && typeof r == "object" ? n[t] = ai(i, r) : n[t] = r;
      }
  }
  return n;
}
class wg {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}
const At = {
  fileSystemProvider: () => new wg()
}, _g = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: !1,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
}, Lg = {
  AstReflection: () => new Dl()
};
function Og() {
  const n = pe(vt(At), Lg), e = pe(Rt({ shared: n }), _g);
  return n.ServiceRegistry.register(e), e;
}
function nn(n) {
  var e;
  const t = Og(), r = t.serializer.JsonSerializer.deserialize(n);
  return t.shared.workspace.LangiumDocumentFactory.fromModel(r, mt.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), r;
}
var bg = Object.defineProperty, k = (n, e) => bg(n, "name", { value: e, configurable: !0 }), hl = "Statement", wr = "Architecture";
function Pg(n) {
  return De.isInstance(n, wr);
}
k(Pg, "isArchitecture");
var Tr = "Axis", Un = "Branch";
function Mg(n) {
  return De.isInstance(n, Un);
}
k(Mg, "isBranch");
var Rr = "Checkout", vr = "CherryPicking", Bn = "Commit";
function Dg(n) {
  return De.isInstance(n, Bn);
}
k(Dg, "isCommit");
var _r = "Common";
function Fg(n) {
  return De.isInstance(n, _r);
}
k(Fg, "isCommon");
var Wi = "Curve", ji = "Edge", Ki = "Entry", Vn = "GitGraph";
function Gg(n) {
  return De.isInstance(n, Vn);
}
k(Gg, "isGitGraph");
var Hi = "Group", Lr = "Info";
function Ug(n) {
  return De.isInstance(n, Lr);
}
k(Ug, "isInfo");
var zi = "Junction", Wn = "Merge";
function Bg(n) {
  return De.isInstance(n, Wn);
}
k(Bg, "isMerge");
var qi = "Option", Or = "Packet";
function Vg(n) {
  return De.isInstance(n, Or);
}
k(Vg, "isPacket");
var br = "PacketBlock";
function Wg(n) {
  return De.isInstance(n, br);
}
k(Wg, "isPacketBlock");
var Pr = "Pie";
function jg(n) {
  return De.isInstance(n, Pr);
}
k(jg, "isPie");
var Mr = "PieSection";
function Kg(n) {
  return De.isInstance(n, Mr);
}
k(Kg, "isPieSection");
var Yi = "Radar", Xi = "Service", Ar = "Direction", Nt, cu = (Nt = class extends Cl {
  getAllTypes() {
    return [wr, Tr, Un, Rr, vr, Bn, _r, Wi, Ar, ji, Ki, Vn, Hi, Lr, zi, Wn, qi, Or, br, Pr, Mr, Yi, Xi, hl];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case Un:
      case Rr:
      case vr:
      case Bn:
      case Wn:
        return this.isSubtype(hl, t);
      case Ar:
        return this.isSubtype(Vn, t);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Entry:axis":
        return Tr;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case wr:
        return {
          name: wr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Tr:
        return {
          name: Tr,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case Un:
        return {
          name: Un,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case Rr:
        return {
          name: Rr,
          properties: [
            { name: "branch" }
          ]
        };
      case vr:
        return {
          name: vr,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case Bn:
        return {
          name: Bn,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case _r:
        return {
          name: _r,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case Wi:
        return {
          name: Wi,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case ji:
        return {
          name: ji,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: !1 },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: !1 },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: !1 },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case Ki:
        return {
          name: Ki,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case Vn:
        return {
          name: Vn,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Hi:
        return {
          name: Hi,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Lr:
        return {
          name: Lr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case zi:
        return {
          name: zi,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case Wn:
        return {
          name: Wn,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case qi:
        return {
          name: qi,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: !1 }
          ]
        };
      case Or:
        return {
          name: Or,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case br:
        return {
          name: br,
          properties: [
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case Pr:
        return {
          name: Pr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case Mr:
        return {
          name: Mr,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case Yi:
        return {
          name: Yi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Xi:
        return {
          name: Xi,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Ar:
        return {
          name: Ar,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}, k(Nt, "MermaidAstReflection"), Nt), De = new cu(), pl, Hg = /* @__PURE__ */ k(() => pl ?? (pl = nn('{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "InfoGrammar"), ml, zg = /* @__PURE__ */ k(() => ml ?? (ml = nn(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"packet-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), gl, qg = /* @__PURE__ */ k(() => gl ?? (gl = nn('{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"PIE_SECTION_LABEL","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]+\\"/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"PIE_SECTION_VALUE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "PieGrammar"), yl, Yg = /* @__PURE__ */ k(() => yl ?? (yl = nn('{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ID","definition":{"$type":"RegexToken","regex":"/[\\\\w]+/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TEXT_ICON","definition":{"$type":"RegexToken","regex":"/\\\\(\\"[^\\"]+\\"\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "ArchitectureGrammar"), Tl, Xg = /* @__PURE__ */ k(() => Tl ?? (Tl = nn(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+(?=\\\\s)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), Rl, Jg = /* @__PURE__ */ k(() => Rl ?? (Rl = nn(`{"$type":"Grammar","isDeclared":true,"name":"Radar","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@12"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@12"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9\\\\-_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), Qg = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, Zg = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ey = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ty = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ny = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ry = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, rn = {
  AstReflection: /* @__PURE__ */ k(() => new cu(), "AstReflection")
}, iy = {
  Grammar: /* @__PURE__ */ k(() => Hg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => Qg, "LanguageMetaData"),
  parser: {}
}, sy = {
  Grammar: /* @__PURE__ */ k(() => zg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => Zg, "LanguageMetaData"),
  parser: {}
}, ay = {
  Grammar: /* @__PURE__ */ k(() => qg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => ey, "LanguageMetaData"),
  parser: {}
}, oy = {
  Grammar: /* @__PURE__ */ k(() => Yg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => ty, "LanguageMetaData"),
  parser: {}
}, ly = {
  Grammar: /* @__PURE__ */ k(() => Xg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => ny, "LanguageMetaData"),
  parser: {}
}, cy = {
  Grammar: /* @__PURE__ */ k(() => Jg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => ry, "LanguageMetaData"),
  parser: {}
}, uy = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, dy = /accTitle[\t ]*:([^\n\r]*)/, fy = /title([\t ][^\n\r]*|)/, hy = {
  ACC_DESCR: uy,
  ACC_TITLE: dy,
  TITLE: fy
}, wt, ua = (wt = class extends qc {
  runConverter(e, t, r) {
    let i = this.runCommonConverter(e, t, r);
    return i === void 0 && (i = this.runCustomConverter(e, t, r)), i === void 0 ? super.runConverter(e, t, r) : i;
  }
  runCommonConverter(e, t, r) {
    const i = hy[e.name];
    if (i === void 0)
      return;
    const s = i.exec(t);
    if (s !== null) {
      if (s[1] !== void 0)
        return s[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (s[2] !== void 0)
        return s[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, k(wt, "AbstractMermaidValueConverter"), wt), _t, ki = (_t = class extends ua {
  runCustomConverter(e, t, r) {
  }
}, k(_t, "CommonValueConverter"), _t), Lt, Et = (Lt = class extends zc {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, t, r) {
    const i = super.buildKeywordTokens(e, t, r);
    return i.forEach((s) => {
      this.keywords.has(s.name) && s.PATTERN !== void 0 && (s.PATTERN = new RegExp(s.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), i;
  }
}, k(Lt, "AbstractMermaidTokenBuilder"), Lt), Ot;
Ot = class extends Et {
}, k(Ot, "CommonTokenBuilder");
var bt, py = (bt = class extends Et {
  constructor() {
    super(["gitGraph"]);
  }
}, k(bt, "GitGraphTokenBuilder"), bt), uu = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new py(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new ki(), "ValueConverter")
  }
};
function du(n = At) {
  const e = pe(
    vt(n),
    rn
  ), t = pe(
    Rt({ shared: e }),
    ly,
    uu
  );
  return e.ServiceRegistry.register(t), { shared: e, GitGraph: t };
}
k(du, "createGitGraphServices");
var Pt, my = (Pt = class extends Et {
  constructor() {
    super(["info", "showInfo"]);
  }
}, k(Pt, "InfoTokenBuilder"), Pt), fu = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new my(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new ki(), "ValueConverter")
  }
};
function hu(n = At) {
  const e = pe(
    vt(n),
    rn
  ), t = pe(
    Rt({ shared: e }),
    iy,
    fu
  );
  return e.ServiceRegistry.register(t), { shared: e, Info: t };
}
k(hu, "createInfoServices");
var Mt, gy = (Mt = class extends Et {
  constructor() {
    super(["packet-beta"]);
  }
}, k(Mt, "PacketTokenBuilder"), Mt), pu = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new gy(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new ki(), "ValueConverter")
  }
};
function mu(n = At) {
  const e = pe(
    vt(n),
    rn
  ), t = pe(
    Rt({ shared: e }),
    sy,
    pu
  );
  return e.ServiceRegistry.register(t), { shared: e, Packet: t };
}
k(mu, "createPacketServices");
var Dt, yy = (Dt = class extends Et {
  constructor() {
    super(["pie", "showData"]);
  }
}, k(Dt, "PieTokenBuilder"), Dt), Ft, Ty = (Ft = class extends ua {
  runCustomConverter(e, t, r) {
    if (e.name === "PIE_SECTION_LABEL")
      return t.replace(/"/g, "").trim();
  }
}, k(Ft, "PieValueConverter"), Ft), gu = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new yy(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new Ty(), "ValueConverter")
  }
};
function yu(n = At) {
  const e = pe(
    vt(n),
    rn
  ), t = pe(
    Rt({ shared: e }),
    ay,
    gu
  );
  return e.ServiceRegistry.register(t), { shared: e, Pie: t };
}
k(yu, "createPieServices");
var Gt, Ry = (Gt = class extends Et {
  constructor() {
    super(["architecture"]);
  }
}, k(Gt, "ArchitectureTokenBuilder"), Gt), Ut, vy = (Ut = class extends ua {
  runCustomConverter(e, t, r) {
    if (e.name === "ARCH_ICON")
      return t.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return t.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE")
      return t.replace(/[[\]]/g, "").trim();
  }
}, k(Ut, "ArchitectureValueConverter"), Ut), Tu = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new Ry(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new vy(), "ValueConverter")
  }
};
function Ru(n = At) {
  const e = pe(
    vt(n),
    rn
  ), t = pe(
    Rt({ shared: e }),
    oy,
    Tu
  );
  return e.ServiceRegistry.register(t), { shared: e, Architecture: t };
}
k(Ru, "createArchitectureServices");
var Bt, Ay = (Bt = class extends Et {
  constructor() {
    super(["radar-beta"]);
  }
}, k(Bt, "RadarTokenBuilder"), Bt), vu = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new Ay(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new ki(), "ValueConverter")
  }
};
function Au(n = At) {
  const e = pe(
    vt(n),
    rn
  ), t = pe(
    Rt({ shared: e }),
    cy,
    vu
  );
  return e.ServiceRegistry.register(t), { shared: e, Radar: t };
}
k(Au, "createRadarServices");
var Ze = {}, Ey = {
  info: /* @__PURE__ */ k(async () => {
    const { createInfoServices: n } = await Promise.resolve().then(() => xy), e = n().Info.parser.LangiumParser;
    Ze.info = e;
  }, "info"),
  packet: /* @__PURE__ */ k(async () => {
    const { createPacketServices: n } = await Promise.resolve().then(() => Iy), e = n().Packet.parser.LangiumParser;
    Ze.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ k(async () => {
    const { createPieServices: n } = await Promise.resolve().then(() => $y), e = n().Pie.parser.LangiumParser;
    Ze.pie = e;
  }, "pie"),
  architecture: /* @__PURE__ */ k(async () => {
    const { createArchitectureServices: n } = await Promise.resolve().then(() => Cy), e = n().Architecture.parser.LangiumParser;
    Ze.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ k(async () => {
    const { createGitGraphServices: n } = await Promise.resolve().then(() => Ny), e = n().GitGraph.parser.LangiumParser;
    Ze.gitGraph = e;
  }, "gitGraph"),
  radar: /* @__PURE__ */ k(async () => {
    const { createRadarServices: n } = await Promise.resolve().then(() => wy), e = n().Radar.parser.LangiumParser;
    Ze.radar = e;
  }, "radar")
};
async function ky(n, e) {
  const t = Ey[n];
  if (!t)
    throw new Error(`Unknown diagram type: ${n}`);
  Ze[n] || await t();
  const i = Ze[n].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new Sy(i);
  return i.value;
}
k(ky, "parse");
var Vt, Sy = (Vt = class extends Error {
  constructor(e) {
    const t = e.lexerErrors.map((i) => i.message).join(`
`), r = e.parserErrors.map((i) => i.message).join(`
`);
    super(`Parsing failed: ${t} ${r}`), this.result = e;
  }
}, k(Vt, "MermaidParseError"), Vt);
const xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: fu,
  createInfoServices: hu
}, Symbol.toStringTag, { value: "Module" })), Iy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: pu,
  createPacketServices: mu
}, Symbol.toStringTag, { value: "Module" })), $y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: gu,
  createPieServices: yu
}, Symbol.toStringTag, { value: "Module" })), Cy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: Tu,
  createArchitectureServices: Ru
}, Symbol.toStringTag, { value: "Module" })), Ny = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: uu,
  createGitGraphServices: du
}, Symbol.toStringTag, { value: "Module" })), wy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: vu,
  createRadarServices: Au
}, Symbol.toStringTag, { value: "Module" }));
export {
  ky as p
};
