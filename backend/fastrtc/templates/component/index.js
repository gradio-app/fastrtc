<<<<<<< HEAD
import { E as s, a as t, I as l, l as d, d as o, b as p } from "./index-Jc4KIE7a.js";
export {
  s as BaseExample,
  t as BaseInteractiveVideo,
  l as default,
  d as loaded,
  o as playable,
  p as prettyBytes
=======
var Mh = Object.defineProperty;
var ko = (n) => {
  throw TypeError(n);
};
var Bh = (n, e, t) => e in n ? Mh(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Be = (n, e, t) => Bh(n, typeof e != "symbol" ? e + "" : e, t), zh = (n, e, t) => e.has(n) || ko("Cannot " + t);
var Do = (n, e, t) => e.has(n) ? ko("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var va = (n, e, t) => (zh(n, e, "access private method"), t);
const {
  SvelteComponent: Ih,
  assign: Nh,
  children: Rh,
  claim_element: Lh,
  create_slot: Oh,
  detach: Ao,
  element: qh,
  get_all_dirty_from_scope: Ph,
  get_slot_changes: Hh,
  get_spread_update: Vh,
  init: Uh,
  insert_hydration: Gh,
  safe_not_equal: jh,
  set_dynamic_element_data: Eo,
  set_style: ft,
  toggle_class: Xt,
  transition_in: Lc,
  transition_out: Oc,
  update_slot_base: Wh
} = window.__gradio__svelte__internal;
function Yh(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[22].default
  ), i = Oh(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let l = [
    { "data-testid": (
      /*test_id*/
      n[10]
    ) },
    { id: (
      /*elem_id*/
      n[5]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[6].join(" ") + " svelte-1ezsyiy"
    }
  ], s = {};
  for (let o = 0; o < l.length; o += 1)
    s = Nh(s, l[o]);
  return {
    c() {
      e = qh(
        /*tag*/
        n[18]
      ), i && i.c(), this.h();
    },
    l(o) {
      e = Lh(
        o,
        /*tag*/
        (n[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var c = Rh(e);
      i && i.l(c), c.forEach(Ao), this.h();
    },
    h() {
      Eo(
        /*tag*/
        n[18]
      )(e, s), Xt(
        e,
        "hidden",
        /*visible*/
        n[13] === !1
      ), Xt(
        e,
        "padded",
        /*padding*/
        n[9]
      ), Xt(
        e,
        "flex",
        /*flex*/
        n[0]
      ), Xt(
        e,
        "border_focus",
        /*border_mode*/
        n[8] === "focus"
      ), Xt(
        e,
        "border_contrast",
        /*border_mode*/
        n[8] === "contrast"
      ), Xt(e, "hide-container", !/*explicit_call*/
      n[11] && !/*container*/
      n[12]), ft(
        e,
        "height",
        /*get_dimension*/
        n[19](
          /*height*/
          n[1]
        )
      ), ft(
        e,
        "min-height",
        /*get_dimension*/
        n[19](
          /*min_height*/
          n[2]
        )
      ), ft(
        e,
        "max-height",
        /*get_dimension*/
        n[19](
          /*max_height*/
          n[3]
        )
      ), ft(e, "width", typeof /*width*/
      n[4] == "number" ? `calc(min(${/*width*/
      n[4]}px, 100%))` : (
        /*get_dimension*/
        n[19](
          /*width*/
          n[4]
        )
      )), ft(
        e,
        "border-style",
        /*variant*/
        n[7]
      ), ft(
        e,
        "overflow",
        /*allow_overflow*/
        n[14] ? (
          /*overflow_behavior*/
          n[15]
        ) : "hidden"
      ), ft(
        e,
        "flex-grow",
        /*scale*/
        n[16]
      ), ft(e, "min-width", `calc(min(${/*min_width*/
      n[17]}px, 100%))`), ft(e, "border-width", "var(--block-border-width)");
    },
    m(o, c) {
      Gh(o, e, c), i && i.m(e, null), r = !0;
    },
    p(o, c) {
      i && i.p && (!r || c & /*$$scope*/
      2097152) && Wh(
        i,
        a,
        o,
        /*$$scope*/
        o[21],
        r ? Hh(
          a,
          /*$$scope*/
          o[21],
          c,
          null
        ) : Ph(
          /*$$scope*/
          o[21]
        ),
        null
      ), Eo(
        /*tag*/
        o[18]
      )(e, s = Vh(l, [
        (!r || c & /*test_id*/
        1024) && { "data-testid": (
          /*test_id*/
          o[10]
        ) },
        (!r || c & /*elem_id*/
        32) && { id: (
          /*elem_id*/
          o[5]
        ) },
        (!r || c & /*elem_classes*/
        64 && t !== (t = "block " + /*elem_classes*/
        o[6].join(" ") + " svelte-1ezsyiy")) && { class: t }
      ])), Xt(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), Xt(
        e,
        "padded",
        /*padding*/
        o[9]
      ), Xt(
        e,
        "flex",
        /*flex*/
        o[0]
      ), Xt(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), Xt(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), Xt(e, "hide-container", !/*explicit_call*/
      o[11] && !/*container*/
      o[12]), c & /*height*/
      2 && ft(
        e,
        "height",
        /*get_dimension*/
        o[19](
          /*height*/
          o[1]
        )
      ), c & /*min_height*/
      4 && ft(
        e,
        "min-height",
        /*get_dimension*/
        o[19](
          /*min_height*/
          o[2]
        )
      ), c & /*max_height*/
      8 && ft(
        e,
        "max-height",
        /*get_dimension*/
        o[19](
          /*max_height*/
          o[3]
        )
      ), c & /*width*/
      16 && ft(e, "width", typeof /*width*/
      o[4] == "number" ? `calc(min(${/*width*/
      o[4]}px, 100%))` : (
        /*get_dimension*/
        o[19](
          /*width*/
          o[4]
        )
      )), c & /*variant*/
      128 && ft(
        e,
        "border-style",
        /*variant*/
        o[7]
      ), c & /*allow_overflow, overflow_behavior*/
      49152 && ft(
        e,
        "overflow",
        /*allow_overflow*/
        o[14] ? (
          /*overflow_behavior*/
          o[15]
        ) : "hidden"
      ), c & /*scale*/
      65536 && ft(
        e,
        "flex-grow",
        /*scale*/
        o[16]
      ), c & /*min_width*/
      131072 && ft(e, "min-width", `calc(min(${/*min_width*/
      o[17]}px, 100%))`);
    },
    i(o) {
      r || (Lc(i, o), r = !0);
    },
    o(o) {
      Oc(i, o), r = !1;
    },
    d(o) {
      o && Ao(e), i && i.d(o);
    }
  };
}
function Xh(n) {
  let e, t = (
    /*tag*/
    n[18] && Yh(n)
  );
  return {
    c() {
      t && t.c();
    },
    l(r) {
      t && t.l(r);
    },
    m(r, a) {
      t && t.m(r, a), e = !0;
    },
    p(r, [a]) {
      /*tag*/
      r[18] && t.p(r, a);
    },
    i(r) {
      e || (Lc(t, r), e = !0);
    },
    o(r) {
      Oc(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function Zh(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: c = "" } = e, { elem_classes: h = [] } = e, { variant: m = "solid" } = e, { border_mode: f = "base" } = e, { padding: p = !0 } = e, { type: v = "normal" } = e, { test_id: w = void 0 } = e, { explicit_call: S = !1 } = e, { container: A = !0 } = e, { visible: b = !0 } = e, { allow_overflow: y = !0 } = e, { overflow_behavior: E = "auto" } = e, { scale: C = null } = e, { min_width: T = 0 } = e, { flex: z = !1 } = e;
  b || (z = !1);
  let I = v === "fieldset" ? "fieldset" : "div";
  const B = (L) => {
    if (L !== void 0) {
      if (typeof L == "number")
        return L + "px";
      if (typeof L == "string")
        return L;
    }
  };
  return n.$$set = (L) => {
    "height" in L && t(1, i = L.height), "min_height" in L && t(2, l = L.min_height), "max_height" in L && t(3, s = L.max_height), "width" in L && t(4, o = L.width), "elem_id" in L && t(5, c = L.elem_id), "elem_classes" in L && t(6, h = L.elem_classes), "variant" in L && t(7, m = L.variant), "border_mode" in L && t(8, f = L.border_mode), "padding" in L && t(9, p = L.padding), "type" in L && t(20, v = L.type), "test_id" in L && t(10, w = L.test_id), "explicit_call" in L && t(11, S = L.explicit_call), "container" in L && t(12, A = L.container), "visible" in L && t(13, b = L.visible), "allow_overflow" in L && t(14, y = L.allow_overflow), "overflow_behavior" in L && t(15, E = L.overflow_behavior), "scale" in L && t(16, C = L.scale), "min_width" in L && t(17, T = L.min_width), "flex" in L && t(0, z = L.flex), "$$scope" in L && t(21, a = L.$$scope);
  }, [
    z,
    i,
    l,
    s,
    o,
    c,
    h,
    m,
    f,
    p,
    w,
    S,
    A,
    b,
    y,
    E,
    C,
    T,
    I,
    B,
    v,
    a,
    r
  ];
}
class Kh extends Ih {
  constructor(e) {
    super(), Uh(this, e, Zh, Xh, jh, {
      height: 1,
      min_height: 2,
      max_height: 3,
      width: 4,
      elem_id: 5,
      elem_classes: 6,
      variant: 7,
      border_mode: 8,
      padding: 9,
      type: 20,
      test_id: 10,
      explicit_call: 11,
      container: 12,
      visible: 13,
      allow_overflow: 14,
      overflow_behavior: 15,
      scale: 16,
      min_width: 17,
      flex: 0
    });
  }
}
const Qh = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], So = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Qh.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: So[e][t],
      secondary: So[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: Jh,
  append_hydration: $h,
  attr: l0,
  children: xo,
  claim_svg_element: Fo,
  detach: Yi,
  init: ef,
  insert_hydration: tf,
  noop: Xi,
  safe_not_equal: rf,
  svg_element: Co
} = window.__gradio__svelte__internal;
function nf(n) {
  let e, t;
  return {
    c() {
      e = Co("svg"), t = Co("circle"), this.h();
    },
    l(r) {
      e = Fo(r, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var a = xo(e);
      t = Fo(a, "circle", { cx: !0, cy: !0, r: !0 }), xo(t).forEach(Yi), a.forEach(Yi), this.h();
    },
    h() {
      l0(t, "cx", "12"), l0(t, "cy", "12"), l0(t, "r", "10"), l0(e, "xmlns", "http://www.w3.org/2000/svg"), l0(e, "width", "100%"), l0(e, "height", "100%"), l0(e, "viewBox", "0 0 24 24"), l0(e, "stroke-width", "1.5"), l0(e, "stroke-linecap", "round"), l0(e, "stroke-linejoin", "round"), l0(e, "class", "feather feather-circle");
    },
    m(r, a) {
      tf(r, e, a), $h(e, t);
    },
    p: Xi,
    i: Xi,
    o: Xi,
    d(r) {
      r && Yi(e);
    }
  };
}
class wi extends Jh {
  constructor(e) {
    super(), ef(this, e, null, nf, rf, {});
  }
}
const {
  SvelteComponent: af,
  append_hydration: Zi,
  attr: s0,
  children: ba,
  claim_svg_element: ya,
  detach: yn,
  init: lf,
  insert_hydration: sf,
  noop: Ki,
  safe_not_equal: of,
  set_style: w0,
  svg_element: wa
} = window.__gradio__svelte__internal;
function uf(n) {
  let e, t, r, a;
  return {
    c() {
      e = wa("svg"), t = wa("g"), r = wa("path"), a = wa("path"), this.h();
    },
    l(i) {
      e = ya(i, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        version: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "xml:space": !0,
        stroke: !0,
        style: !0
      });
      var l = ba(e);
      t = ya(l, "g", { transform: !0 });
      var s = ba(t);
      r = ya(s, "path", { d: !0, style: !0 }), ba(r).forEach(yn), s.forEach(yn), a = ya(l, "path", { d: !0, style: !0 }), ba(a).forEach(yn), l.forEach(yn), this.h();
    },
    h() {
      s0(r, "d", "M18,6L6.087,17.913"), w0(r, "fill", "none"), w0(r, "fill-rule", "nonzero"), w0(r, "stroke-width", "2px"), s0(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), s0(a, "d", "M4.364,4.364L19.636,19.636"), w0(a, "fill", "none"), w0(a, "fill-rule", "nonzero"), w0(a, "stroke-width", "2px"), s0(e, "width", "100%"), s0(e, "height", "100%"), s0(e, "viewBox", "0 0 24 24"), s0(e, "version", "1.1"), s0(e, "xmlns", "http://www.w3.org/2000/svg"), s0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), s0(e, "xml:space", "preserve"), s0(e, "stroke", "currentColor"), w0(e, "fill-rule", "evenodd"), w0(e, "clip-rule", "evenodd"), w0(e, "stroke-linecap", "round"), w0(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      sf(i, e, l), Zi(e, t), Zi(t, r), Zi(e, a);
    },
    p: Ki,
    i: Ki,
    o: Ki,
    d(i) {
      i && yn(e);
    }
  };
}
class cf extends af {
  constructor(e) {
    super(), lf(this, e, null, uf, of, {});
  }
}
const {
  SvelteComponent: hf,
  append_hydration: ff,
  attr: Zr,
  children: To,
  claim_svg_element: Mo,
  detach: Qi,
  init: df,
  insert_hydration: mf,
  noop: Ji,
  safe_not_equal: pf,
  svg_element: Bo
} = window.__gradio__svelte__internal;
function gf(n) {
  let e, t;
  return {
    c() {
      e = Bo("svg"), t = Bo("path"), this.h();
    },
    l(r) {
      e = Mo(r, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var a = To(e);
      t = Mo(a, "path", { d: !0 }), To(t).forEach(Qi), a.forEach(Qi), this.h();
    },
    h() {
      Zr(t, "d", "M5 8l4 4 4-4z"), Zr(e, "class", "dropdown-arrow svelte-145leq6"), Zr(e, "xmlns", "http://www.w3.org/2000/svg"), Zr(e, "width", "100%"), Zr(e, "height", "100%"), Zr(e, "viewBox", "0 0 18 18");
    },
    m(r, a) {
      mf(r, e, a), ff(e, t);
    },
    p: Ji,
    i: Ji,
    o: Ji,
    d(r) {
      r && Qi(e);
    }
  };
}
class ki extends hf {
  constructor(e) {
    super(), df(this, e, null, gf, pf, {});
  }
}
const {
  SvelteComponent: _f,
  append_hydration: vf,
  attr: ka,
  children: zo,
  claim_svg_element: Io,
  detach: $i,
  init: bf,
  insert_hydration: yf,
  noop: el,
  safe_not_equal: wf,
  svg_element: No
} = window.__gradio__svelte__internal;
function kf(n) {
  let e, t;
  return {
    c() {
      e = No("svg"), t = No("path"), this.h();
    },
    l(r) {
      e = Io(r, "svg", { xmlns: !0, viewBox: !0 });
      var a = zo(e);
      t = Io(a, "path", { fill: !0, d: !0 }), zo(t).forEach($i), a.forEach($i), this.h();
    },
    h() {
      ka(t, "fill", "currentColor"), ka(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), ka(e, "xmlns", "http://www.w3.org/2000/svg"), ka(e, "viewBox", "0 0 24 24");
    },
    m(r, a) {
      yf(r, e, a), vf(e, t);
    },
    p: el,
    i: el,
    o: el,
    d(r) {
      r && $i(e);
    }
  };
}
class Df extends _f {
  constructor(e) {
    super(), bf(this, e, null, kf, wf, {});
  }
}
const {
  SvelteComponent: Af,
  append_hydration: Da,
  attr: et,
  children: wn,
  claim_svg_element: kn,
  detach: Kr,
  init: Ef,
  insert_hydration: Sf,
  noop: tl,
  safe_not_equal: xf,
  svg_element: Dn
} = window.__gradio__svelte__internal;
function Ff(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = Dn("svg"), t = Dn("path"), r = Dn("path"), a = Dn("line"), i = Dn("line"), this.h();
    },
    l(l) {
      e = kn(l, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var s = wn(e);
      t = kn(s, "path", { d: !0 }), wn(t).forEach(Kr), r = kn(s, "path", { d: !0 }), wn(r).forEach(Kr), a = kn(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), wn(a).forEach(Kr), i = kn(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), wn(i).forEach(Kr), s.forEach(Kr), this.h();
    },
    h() {
      et(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), et(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), et(a, "x1", "12"), et(a, "y1", "19"), et(a, "x2", "12"), et(a, "y2", "23"), et(i, "x1", "8"), et(i, "y1", "23"), et(i, "x2", "16"), et(i, "y2", "23"), et(e, "xmlns", "http://www.w3.org/2000/svg"), et(e, "width", "100%"), et(e, "height", "100%"), et(e, "viewBox", "0 0 24 24"), et(e, "fill", "none"), et(e, "stroke", "currentColor"), et(e, "stroke-width", "2"), et(e, "stroke-linecap", "round"), et(e, "stroke-linejoin", "round"), et(e, "class", "feather feather-mic");
    },
    m(l, s) {
      Sf(l, e, s), Da(e, t), Da(e, r), Da(e, a), Da(e, i);
    },
    p: tl,
    i: tl,
    o: tl,
    d(l) {
      l && Kr(e);
    }
  };
}
class ei extends Af {
  constructor(e) {
    super(), Ef(this, e, null, Ff, xf, {});
  }
}
const {
  SvelteComponent: Cf,
  append_hydration: rl,
  attr: dt,
  children: Aa,
  claim_svg_element: Ea,
  detach: An,
  init: Tf,
  insert_hydration: Mf,
  noop: nl,
  safe_not_equal: Bf,
  svg_element: Sa
} = window.__gradio__svelte__internal;
function zf(n) {
  let e, t, r, a;
  return {
    c() {
      e = Sa("svg"), t = Sa("path"), r = Sa("circle"), a = Sa("circle"), this.h();
    },
    l(i) {
      e = Ea(i, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var l = Aa(e);
      t = Ea(l, "path", { d: !0 }), Aa(t).forEach(An), r = Ea(l, "circle", { cx: !0, cy: !0, r: !0 }), Aa(r).forEach(An), a = Ea(l, "circle", { cx: !0, cy: !0, r: !0 }), Aa(a).forEach(An), l.forEach(An), this.h();
    },
    h() {
      dt(t, "d", "M9 18V5l12-2v13"), dt(r, "cx", "6"), dt(r, "cy", "18"), dt(r, "r", "3"), dt(a, "cx", "18"), dt(a, "cy", "16"), dt(a, "r", "3"), dt(e, "xmlns", "http://www.w3.org/2000/svg"), dt(e, "width", "100%"), dt(e, "height", "100%"), dt(e, "viewBox", "0 0 24 24"), dt(e, "fill", "none"), dt(e, "stroke", "currentColor"), dt(e, "stroke-width", "1.5"), dt(e, "stroke-linecap", "round"), dt(e, "stroke-linejoin", "round"), dt(e, "class", "feather feather-music");
    },
    m(i, l) {
      Mf(i, e, l), rl(e, t), rl(e, r), rl(e, a);
    },
    p: nl,
    i: nl,
    o: nl,
    d(i) {
      i && An(e);
    }
  };
}
class Ss extends Cf {
  constructor(e) {
    super(), Tf(this, e, null, zf, Bf, {});
  }
}
const {
  SvelteComponent: If,
  append_hydration: Nf,
  attr: lt,
  children: Ro,
  claim_svg_element: Lo,
  detach: al,
  init: Rf,
  insert_hydration: Lf,
  noop: Oo,
  safe_not_equal: Of,
  svg_element: qo
} = window.__gradio__svelte__internal;
function qf(n) {
  let e, t, r;
  return {
    c() {
      e = qo("svg"), t = qo("rect"), this.h();
    },
    l(a) {
      e = Lo(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var i = Ro(e);
      t = Lo(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Ro(t).forEach(al), i.forEach(al), this.h();
    },
    h() {
      lt(t, "x", "3"), lt(t, "y", "3"), lt(t, "width", "18"), lt(t, "height", "18"), lt(t, "rx", "2"), lt(t, "ry", "2"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(
        e,
        "fill",
        /*fill*/
        n[0]
      ), lt(e, "stroke", "currentColor"), lt(e, "stroke-width", r = `${/*stroke_width*/
      n[1]}`), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round"), lt(e, "class", "feather feather-square");
    },
    m(a, i) {
      Lf(a, e, i), Nf(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && lt(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && r !== (r = `${/*stroke_width*/
      a[1]}`) && lt(e, "stroke-width", r);
    },
    i: Oo,
    o: Oo,
    d(a) {
      a && al(e);
    }
  };
}
function Pf(n, e, t) {
  let { fill: r = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return n.$$set = (i) => {
    "fill" in i && t(0, r = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [r, a];
}
class Hf extends If {
  constructor(e) {
    super(), Rf(this, e, Pf, qf, Of, { fill: 0, stroke_width: 1 });
  }
}
const {
  SvelteComponent: Vf,
  append_hydration: il,
  attr: wt,
  children: xa,
  claim_svg_element: Fa,
  detach: En,
  init: Uf,
  insert_hydration: Gf,
  noop: ll,
  safe_not_equal: jf,
  svg_element: Ca
} = window.__gradio__svelte__internal;
function Wf(n) {
  let e, t, r, a;
  return {
    c() {
      e = Ca("svg"), t = Ca("path"), r = Ca("polyline"), a = Ca("line"), this.h();
    },
    l(i) {
      e = Fa(i, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var l = xa(e);
      t = Fa(l, "path", { d: !0 }), xa(t).forEach(En), r = Fa(l, "polyline", { points: !0 }), xa(r).forEach(En), a = Fa(l, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), xa(a).forEach(En), l.forEach(En), this.h();
    },
    h() {
      wt(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), wt(r, "points", "17 8 12 3 7 8"), wt(a, "x1", "12"), wt(a, "y1", "3"), wt(a, "x2", "12"), wt(a, "y2", "15"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "width", "90%"), wt(e, "height", "90%"), wt(e, "viewBox", "0 0 24 24"), wt(e, "fill", "none"), wt(e, "stroke", "currentColor"), wt(e, "stroke-width", "2"), wt(e, "stroke-linecap", "round"), wt(e, "stroke-linejoin", "round"), wt(e, "class", "feather feather-upload");
    },
    m(i, l) {
      Gf(i, e, l), il(e, t), il(e, r), il(e, a);
    },
    p: ll,
    i: ll,
    o: ll,
    d(i) {
      i && En(e);
    }
  };
}
class Yf extends Vf {
  constructor(e) {
    super(), Uf(this, e, null, Wf, jf, {});
  }
}
const {
  SvelteComponent: Xf,
  append_hydration: Po,
  attr: mt,
  children: sl,
  claim_svg_element: ol,
  detach: Ta,
  init: Zf,
  insert_hydration: Kf,
  noop: ul,
  safe_not_equal: Qf,
  svg_element: cl
} = window.__gradio__svelte__internal;
function Jf(n) {
  let e, t, r;
  return {
    c() {
      e = cl("svg"), t = cl("polygon"), r = cl("rect"), this.h();
    },
    l(a) {
      e = ol(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var i = sl(e);
      t = ol(i, "polygon", { points: !0 }), sl(t).forEach(Ta), r = ol(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), sl(r).forEach(Ta), i.forEach(Ta), this.h();
    },
    h() {
      mt(t, "points", "23 7 16 12 23 17 23 7"), mt(r, "x", "1"), mt(r, "y", "5"), mt(r, "width", "15"), mt(r, "height", "14"), mt(r, "rx", "2"), mt(r, "ry", "2"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "fill", "none"), mt(e, "stroke", "currentColor"), mt(e, "stroke-width", "1.5"), mt(e, "stroke-linecap", "round"), mt(e, "stroke-linejoin", "round"), mt(e, "class", "feather feather-video");
    },
    m(a, i) {
      Kf(a, e, i), Po(e, t), Po(e, r);
    },
    p: ul,
    i: ul,
    o: ul,
    d(a) {
      a && Ta(e);
    }
  };
}
class xs extends Xf {
  constructor(e) {
    super(), Zf(this, e, null, Jf, Qf, {});
  }
}
const {
  SvelteComponent: $f,
  append_hydration: Sn,
  attr: st,
  children: xn,
  claim_svg_element: Fn,
  claim_text: e2,
  detach: Qr,
  init: t2,
  insert_hydration: r2,
  noop: hl,
  safe_not_equal: n2,
  svg_element: Cn,
  text: a2
} = window.__gradio__svelte__internal;
function i2(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = Cn("svg"), t = Cn("title"), r = a2("High volume"), a = Cn("path"), i = Cn("path"), l = Cn("path"), this.h();
    },
    l(s) {
      e = Fn(s, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        stroke: !0,
        xmlns: !0,
        color: !0
      });
      var o = xn(e);
      t = Fn(o, "title", {});
      var c = xn(t);
      r = e2(c, "High volume"), c.forEach(Qr), a = Fn(o, "path", { d: !0, "stroke-width": !0 }), xn(a).forEach(Qr), i = Fn(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), xn(i).forEach(Qr), l = Fn(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), xn(l).forEach(Qr), o.forEach(Qr), this.h();
    },
    h() {
      st(a, "d", "M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z"), st(a, "stroke-width", "1.5"), st(i, "d", "M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5"), st(i, "stroke-width", "1.5"), st(i, "stroke-linecap", "round"), st(i, "stroke-linejoin", "round"), st(l, "d", "M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5"), st(l, "stroke-width", "1.5"), st(l, "stroke-linecap", "round"), st(l, "stroke-linejoin", "round"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "stroke-width", "1.5"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "color", "currentColor");
    },
    m(s, o) {
      r2(s, e, o), Sn(e, t), Sn(t, r), Sn(e, a), Sn(e, i), Sn(e, l);
    },
    p: hl,
    i: hl,
    o: hl,
    d(s) {
      s && Qr(e);
    }
  };
}
class l2 extends $f {
  constructor(e) {
    super(), t2(this, e, null, i2, n2, {});
  }
}
const {
  SvelteComponent: s2,
  append_hydration: ar,
  attr: nt,
  children: ir,
  claim_svg_element: lr,
  claim_text: o2,
  detach: q0,
  init: u2,
  insert_hydration: c2,
  noop: fl,
  safe_not_equal: h2,
  svg_element: sr,
  text: f2
} = window.__gradio__svelte__internal;
function d2(n) {
  let e, t, r, a, i, l, s, o, c;
  return {
    c() {
      e = sr("svg"), t = sr("title"), r = f2("Muted volume"), a = sr("g"), i = sr("path"), l = sr("path"), s = sr("defs"), o = sr("clipPath"), c = sr("rect"), this.h();
    },
    l(h) {
      e = lr(h, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        xmlns: !0,
        stroke: !0,
        color: !0
      });
      var m = ir(e);
      t = lr(m, "title", {});
      var f = ir(t);
      r = o2(f, "Muted volume"), f.forEach(q0), a = lr(m, "g", { "clip-path": !0 });
      var p = ir(a);
      i = lr(p, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), ir(i).forEach(q0), l = lr(p, "path", { d: !0, "stroke-width": !0 }), ir(l).forEach(q0), p.forEach(q0), s = lr(m, "defs", {});
      var v = ir(s);
      o = lr(v, "clipPath", { id: !0 });
      var w = ir(o);
      c = lr(w, "rect", { width: !0, height: !0, fill: !0 }), ir(c).forEach(q0), w.forEach(q0), v.forEach(q0), m.forEach(q0), this.h();
    },
    h() {
      nt(i, "d", "M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14"), nt(i, "stroke-width", "1.5"), nt(i, "stroke-linecap", "round"), nt(i, "stroke-linejoin", "round"), nt(l, "d", "M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z"), nt(l, "stroke-width", "1.5"), nt(a, "clip-path", "url(#clip0_3173_16686)"), nt(c, "width", "24"), nt(c, "height", "24"), nt(c, "fill", "white"), nt(o, "id", "clip0_3173_16686"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "stroke-width", "1.5"), nt(e, "fill", "none"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "stroke", "currentColor"), nt(e, "color", "currentColor");
    },
    m(h, m) {
      c2(h, e, m), ar(e, t), ar(t, r), ar(e, a), ar(a, i), ar(a, l), ar(e, s), ar(s, o), ar(o, c);
    },
    p: fl,
    i: fl,
    o: fl,
    d(h) {
      h && q0(e);
    }
  };
}
class m2 extends s2 {
  constructor(e) {
    super(), u2(this, e, null, d2, h2, {});
  }
}
const {
  SvelteComponent: p2,
  append_hydration: Ho,
  attr: or,
  children: dl,
  claim_svg_element: ml,
  detach: Ma,
  init: g2,
  insert_hydration: _2,
  noop: pl,
  safe_not_equal: v2,
  svg_element: gl
} = window.__gradio__svelte__internal;
function b2(n) {
  let e, t, r;
  return {
    c() {
      e = gl("svg"), t = gl("path"), r = gl("path"), this.h();
    },
    l(a) {
      e = ml(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var i = dl(e);
      t = ml(i, "path", { fill: !0, d: !0 }), dl(t).forEach(Ma), r = ml(i, "path", { fill: !0, d: !0 }), dl(r).forEach(Ma), i.forEach(Ma), this.h();
    },
    h() {
      or(t, "fill", "currentColor"), or(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), or(r, "fill", "currentColor"), or(r, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), or(e, "xmlns", "http://www.w3.org/2000/svg"), or(e, "width", "100%"), or(e, "height", "100%"), or(e, "viewBox", "0 0 24 24");
    },
    m(a, i) {
      _2(a, e, i), Ho(e, t), Ho(e, r);
    },
    p: pl,
    i: pl,
    o: pl,
    d(a) {
      a && Ma(e);
    }
  };
}
let Vo = class extends p2 {
  constructor(e) {
    super(), g2(this, e, null, b2, v2, {});
  }
};
const {
  SvelteComponent: y2,
  append_hydration: Uo,
  attr: ot,
  children: _l,
  claim_svg_element: vl,
  detach: Ba,
  init: w2,
  insert_hydration: k2,
  noop: bl,
  safe_not_equal: D2,
  svg_element: yl
} = window.__gradio__svelte__internal;
function A2(n) {
  let e, t, r;
  return {
    c() {
      e = yl("svg"), t = yl("circle"), r = yl("animateTransform"), this.h();
    },
    l(a) {
      e = vl(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        class: !0
      });
      var i = _l(e);
      t = vl(i, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0
      });
      var l = _l(t);
      r = vl(l, "animateTransform", {
        attributeName: !0,
        type: !0,
        from: !0,
        to: !0,
        repeatCount: !0
      }), _l(r).forEach(Ba), l.forEach(Ba), i.forEach(Ba), this.h();
    },
    h() {
      ot(r, "attributeName", "transform"), ot(r, "type", "rotate"), ot(r, "from", "0 25 25"), ot(r, "to", "360 25 25"), ot(r, "repeatCount", "indefinite"), ot(t, "cx", "25"), ot(t, "cy", "25"), ot(t, "r", "20"), ot(t, "fill", "none"), ot(t, "stroke-width", "3.0"), ot(t, "stroke-linecap", "round"), ot(t, "stroke-dasharray", "94.2477796076938 94.2477796076938"), ot(t, "stroke-dashoffset", "0"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 50 50"), ot(e, "class", "svelte-pb9pol");
    },
    m(a, i) {
      k2(a, e, i), Uo(e, t), Uo(t, r);
    },
    p: bl,
    i: bl,
    o: bl,
    d(a) {
      a && Ba(e);
    }
  };
}
class qc extends y2 {
  constructor(e) {
    super(), w2(this, e, null, A2, D2, {});
  }
}
class Fs {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, r) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Fs(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Cs {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Cs(t, Fs.range(this, e));
  }
}
class J {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var r = "KaTeX parse error: " + e, a, i, l = t && t.loc;
    if (l && l.start <= l.end) {
      var s = l.lexer.input;
      a = l.start, i = l.end, a === s.length ? r += " at end of input: " : r += " at position " + (a + 1) + ": ";
      var o = s.slice(a, i).replace(/[^]/g, "$&̲"), c;
      a > 15 ? c = "…" + s.slice(a - 15, a) : c = s.slice(0, a);
      var h;
      i + 15 < s.length ? h = s.slice(i, i + 15) + "…" : h = s.slice(i), r += c + o + h;
    }
    var m = new Error(r);
    return m.name = "ParseError", m.__proto__ = J.prototype, m.position = a, a != null && i != null && (m.length = i - a), m.rawMessage = e, m;
  }
}
J.prototype.__proto__ = Error.prototype;
var E2 = function(e, t) {
  return e.indexOf(t) !== -1;
}, S2 = function(e, t) {
  return e === void 0 ? t : e;
}, x2 = /([A-Z])/g, F2 = function(e) {
  return e.replace(x2, "-$1").toLowerCase();
}, C2 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, T2 = /[&><"']/g;
function M2(n) {
  return String(n).replace(T2, (e) => C2[e]);
}
var Pc = function n(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? n(e.body[0]) : e : e.type === "font" ? n(e.body) : e;
}, B2 = function(e) {
  var t = Pc(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, z2 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, I2 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ee = {
  contains: E2,
  deflt: S2,
  escape: M2,
  hyphenate: F2,
  getBaseElem: Pc,
  isCharacterBox: B2,
  protocolFromUrl: I2
};
class ur {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return A0[N2[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return A0[R2[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return A0[L2[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return A0[O2[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return A0[q2[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return A0[P2[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Ts = 0, ti = 1, cn = 2, Z0 = 3, Yn = 4, Jt = 5, dn = 6, St = 7, A0 = [new ur(Ts, 0, !1), new ur(ti, 0, !0), new ur(cn, 1, !1), new ur(Z0, 1, !0), new ur(Yn, 2, !1), new ur(Jt, 2, !0), new ur(dn, 3, !1), new ur(St, 3, !0)], N2 = [Yn, Jt, Yn, Jt, dn, St, dn, St], R2 = [Jt, Jt, Jt, Jt, St, St, St, St], L2 = [cn, Z0, Yn, Jt, dn, St, dn, St], O2 = [Z0, Z0, Jt, Jt, St, St, St, St], q2 = [ti, ti, Z0, Z0, Jt, Jt, St, St], P2 = [Ts, ti, cn, Z0, cn, Z0, cn, Z0], re = {
  DISPLAY: A0[Ts],
  TEXT: A0[cn],
  SCRIPT: A0[Yn],
  SCRIPTSCRIPT: A0[dn]
}, as = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function H2(n) {
  for (var e = 0; e < as.length; e++)
    for (var t = as[e], r = 0; r < t.blocks.length; r++) {
      var a = t.blocks[r];
      if (n >= a[0] && n <= a[1])
        return t.name;
    }
  return null;
}
var Qa = [];
as.forEach((n) => n.blocks.forEach((e) => Qa.push(...e)));
function V2(n) {
  for (var e = 0; e < Qa.length; e += 2)
    if (n >= Qa[e] && n <= Qa[e + 1])
      return !0;
  return !1;
}
var Jr = 80, U2 = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, G2 = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, j2 = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, W2 = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Y2 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, X2 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Z2 = function(e, t, r) {
  var a = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, K2 = function(e, t, r) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = U2(t, Jr);
      break;
    case "sqrtSize1":
      a = G2(t, Jr);
      break;
    case "sqrtSize2":
      a = j2(t, Jr);
      break;
    case "sqrtSize3":
      a = W2(t, Jr);
      break;
    case "sqrtSize4":
      a = Y2(t, Jr);
      break;
    case "sqrtTall":
      a = Z2(t, Jr, r);
  }
  return a;
}, Q2 = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Go = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, J2 = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class ta {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var G0 = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, jo = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function Ms(n, e, t) {
  if (!G0[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = n.charCodeAt(0), a = G0[e][r];
  if (!a && n[0] in jo && (r = jo[n[0]].charCodeAt(0), a = G0[e][r]), !a && t === "text" && V2(r) && (a = G0[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var is = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, $2 = {
  ex: !0,
  em: !0,
  mu: !0
}, ed = function(e) {
  return typeof e != "string" && (e = e.unit), e in is || e in $2 || e === "ex";
}, qe = function(e, t) {
  var r;
  if (e.unit in is)
    r = is[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new J("Invalid unit: '" + e.unit + "'");
    a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, G = function(e) {
  return +e.toFixed(4) + "em";
}, _r = function(e) {
  return e.filter((t) => t).join(" ");
}, Hc = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Vc = function(e) {
  var t = document.createElement(e);
  t.className = _r(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Uc = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + ee.escape(_r(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += ee.hyphenate(a) + ":" + this.style[a] + ";");
  r && (t += ' style="' + ee.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + ee.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class Di {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Hc.call(this, e, r, a), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  toNode() {
    return Vc.call(this, "span");
  }
  toMarkup() {
    return Uc.call(this, "span");
  }
}
class Gc {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Hc.call(this, t, a), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  toNode() {
    return Vc.call(this, "a");
  }
  toMarkup() {
    return Uc.call(this, "a");
  }
}
class td {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + ee.escape(this.src) + '"' + (' alt="' + ee.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += ee.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + ee.escape(t) + '"'), e += "'/>", e;
  }
}
var rd = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class z0 {
  constructor(e, t, r, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var c = H2(this.text.charCodeAt(0));
    c && this.classes.push(c + "_fallback"), /[îïíì]/.test(this.text) && (this.text = rd[this.text]);
  }
  hasClass(e) {
    return ee.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = G(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = _r(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += ee.escape(_r(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += ee.hyphenate(a) + ":" + this.style[a] + ";");
    r && (e = !0, t += ' style="' + ee.escape(r) + '"');
    var i = ee.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class vr {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ee.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class Lr {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Go[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ee.escape(this.alternate) + '"/>' : '<path d="' + ee.escape(Go[this.pathName]) + '"/>';
  }
}
class Wo {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ee.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Yo(n) {
  if (n instanceof z0)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function nd(n) {
  if (n instanceof Di)
    return n;
  throw new Error("Expected span<HtmlDomNode> but got " + String(n) + ".");
}
var ad = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Ke = {
  math: {},
  text: {}
};
function u(n, e, t, r, a, i) {
  Ke[n][a] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (Ke[n][r] = Ke[n][a]);
}
var d = "math", O = "text", g = "main", k = "ams", Re = "accent-token", X = "bin", Ct = "close", pn = "inner", $ = "mathord", rt = "op-token", Wt = "open", Ai = "punct", D = "rel", tr = "spacing", x = "textord";
u(d, g, D, "≡", "\\equiv", !0);
u(d, g, D, "≺", "\\prec", !0);
u(d, g, D, "≻", "\\succ", !0);
u(d, g, D, "∼", "\\sim", !0);
u(d, g, D, "⊥", "\\perp");
u(d, g, D, "⪯", "\\preceq", !0);
u(d, g, D, "⪰", "\\succeq", !0);
u(d, g, D, "≃", "\\simeq", !0);
u(d, g, D, "∣", "\\mid", !0);
u(d, g, D, "≪", "\\ll", !0);
u(d, g, D, "≫", "\\gg", !0);
u(d, g, D, "≍", "\\asymp", !0);
u(d, g, D, "∥", "\\parallel");
u(d, g, D, "⋈", "\\bowtie", !0);
u(d, g, D, "⌣", "\\smile", !0);
u(d, g, D, "⊑", "\\sqsubseteq", !0);
u(d, g, D, "⊒", "\\sqsupseteq", !0);
u(d, g, D, "≐", "\\doteq", !0);
u(d, g, D, "⌢", "\\frown", !0);
u(d, g, D, "∋", "\\ni", !0);
u(d, g, D, "∝", "\\propto", !0);
u(d, g, D, "⊢", "\\vdash", !0);
u(d, g, D, "⊣", "\\dashv", !0);
u(d, g, D, "∋", "\\owns");
u(d, g, Ai, ".", "\\ldotp");
u(d, g, Ai, "⋅", "\\cdotp");
u(d, g, x, "#", "\\#");
u(O, g, x, "#", "\\#");
u(d, g, x, "&", "\\&");
u(O, g, x, "&", "\\&");
u(d, g, x, "ℵ", "\\aleph", !0);
u(d, g, x, "∀", "\\forall", !0);
u(d, g, x, "ℏ", "\\hbar", !0);
u(d, g, x, "∃", "\\exists", !0);
u(d, g, x, "∇", "\\nabla", !0);
u(d, g, x, "♭", "\\flat", !0);
u(d, g, x, "ℓ", "\\ell", !0);
u(d, g, x, "♮", "\\natural", !0);
u(d, g, x, "♣", "\\clubsuit", !0);
u(d, g, x, "℘", "\\wp", !0);
u(d, g, x, "♯", "\\sharp", !0);
u(d, g, x, "♢", "\\diamondsuit", !0);
u(d, g, x, "ℜ", "\\Re", !0);
u(d, g, x, "♡", "\\heartsuit", !0);
u(d, g, x, "ℑ", "\\Im", !0);
u(d, g, x, "♠", "\\spadesuit", !0);
u(d, g, x, "§", "\\S", !0);
u(O, g, x, "§", "\\S");
u(d, g, x, "¶", "\\P", !0);
u(O, g, x, "¶", "\\P");
u(d, g, x, "†", "\\dag");
u(O, g, x, "†", "\\dag");
u(O, g, x, "†", "\\textdagger");
u(d, g, x, "‡", "\\ddag");
u(O, g, x, "‡", "\\ddag");
u(O, g, x, "‡", "\\textdaggerdbl");
u(d, g, Ct, "⎱", "\\rmoustache", !0);
u(d, g, Wt, "⎰", "\\lmoustache", !0);
u(d, g, Ct, "⟯", "\\rgroup", !0);
u(d, g, Wt, "⟮", "\\lgroup", !0);
u(d, g, X, "∓", "\\mp", !0);
u(d, g, X, "⊖", "\\ominus", !0);
u(d, g, X, "⊎", "\\uplus", !0);
u(d, g, X, "⊓", "\\sqcap", !0);
u(d, g, X, "∗", "\\ast");
u(d, g, X, "⊔", "\\sqcup", !0);
u(d, g, X, "◯", "\\bigcirc", !0);
u(d, g, X, "∙", "\\bullet", !0);
u(d, g, X, "‡", "\\ddagger");
u(d, g, X, "≀", "\\wr", !0);
u(d, g, X, "⨿", "\\amalg");
u(d, g, X, "&", "\\And");
u(d, g, D, "⟵", "\\longleftarrow", !0);
u(d, g, D, "⇐", "\\Leftarrow", !0);
u(d, g, D, "⟸", "\\Longleftarrow", !0);
u(d, g, D, "⟶", "\\longrightarrow", !0);
u(d, g, D, "⇒", "\\Rightarrow", !0);
u(d, g, D, "⟹", "\\Longrightarrow", !0);
u(d, g, D, "↔", "\\leftrightarrow", !0);
u(d, g, D, "⟷", "\\longleftrightarrow", !0);
u(d, g, D, "⇔", "\\Leftrightarrow", !0);
u(d, g, D, "⟺", "\\Longleftrightarrow", !0);
u(d, g, D, "↦", "\\mapsto", !0);
u(d, g, D, "⟼", "\\longmapsto", !0);
u(d, g, D, "↗", "\\nearrow", !0);
u(d, g, D, "↩", "\\hookleftarrow", !0);
u(d, g, D, "↪", "\\hookrightarrow", !0);
u(d, g, D, "↘", "\\searrow", !0);
u(d, g, D, "↼", "\\leftharpoonup", !0);
u(d, g, D, "⇀", "\\rightharpoonup", !0);
u(d, g, D, "↙", "\\swarrow", !0);
u(d, g, D, "↽", "\\leftharpoondown", !0);
u(d, g, D, "⇁", "\\rightharpoondown", !0);
u(d, g, D, "↖", "\\nwarrow", !0);
u(d, g, D, "⇌", "\\rightleftharpoons", !0);
u(d, k, D, "≮", "\\nless", !0);
u(d, k, D, "", "\\@nleqslant");
u(d, k, D, "", "\\@nleqq");
u(d, k, D, "⪇", "\\lneq", !0);
u(d, k, D, "≨", "\\lneqq", !0);
u(d, k, D, "", "\\@lvertneqq");
u(d, k, D, "⋦", "\\lnsim", !0);
u(d, k, D, "⪉", "\\lnapprox", !0);
u(d, k, D, "⊀", "\\nprec", !0);
u(d, k, D, "⋠", "\\npreceq", !0);
u(d, k, D, "⋨", "\\precnsim", !0);
u(d, k, D, "⪹", "\\precnapprox", !0);
u(d, k, D, "≁", "\\nsim", !0);
u(d, k, D, "", "\\@nshortmid");
u(d, k, D, "∤", "\\nmid", !0);
u(d, k, D, "⊬", "\\nvdash", !0);
u(d, k, D, "⊭", "\\nvDash", !0);
u(d, k, D, "⋪", "\\ntriangleleft");
u(d, k, D, "⋬", "\\ntrianglelefteq", !0);
u(d, k, D, "⊊", "\\subsetneq", !0);
u(d, k, D, "", "\\@varsubsetneq");
u(d, k, D, "⫋", "\\subsetneqq", !0);
u(d, k, D, "", "\\@varsubsetneqq");
u(d, k, D, "≯", "\\ngtr", !0);
u(d, k, D, "", "\\@ngeqslant");
u(d, k, D, "", "\\@ngeqq");
u(d, k, D, "⪈", "\\gneq", !0);
u(d, k, D, "≩", "\\gneqq", !0);
u(d, k, D, "", "\\@gvertneqq");
u(d, k, D, "⋧", "\\gnsim", !0);
u(d, k, D, "⪊", "\\gnapprox", !0);
u(d, k, D, "⊁", "\\nsucc", !0);
u(d, k, D, "⋡", "\\nsucceq", !0);
u(d, k, D, "⋩", "\\succnsim", !0);
u(d, k, D, "⪺", "\\succnapprox", !0);
u(d, k, D, "≆", "\\ncong", !0);
u(d, k, D, "", "\\@nshortparallel");
u(d, k, D, "∦", "\\nparallel", !0);
u(d, k, D, "⊯", "\\nVDash", !0);
u(d, k, D, "⋫", "\\ntriangleright");
u(d, k, D, "⋭", "\\ntrianglerighteq", !0);
u(d, k, D, "", "\\@nsupseteqq");
u(d, k, D, "⊋", "\\supsetneq", !0);
u(d, k, D, "", "\\@varsupsetneq");
u(d, k, D, "⫌", "\\supsetneqq", !0);
u(d, k, D, "", "\\@varsupsetneqq");
u(d, k, D, "⊮", "\\nVdash", !0);
u(d, k, D, "⪵", "\\precneqq", !0);
u(d, k, D, "⪶", "\\succneqq", !0);
u(d, k, D, "", "\\@nsubseteqq");
u(d, k, X, "⊴", "\\unlhd");
u(d, k, X, "⊵", "\\unrhd");
u(d, k, D, "↚", "\\nleftarrow", !0);
u(d, k, D, "↛", "\\nrightarrow", !0);
u(d, k, D, "⇍", "\\nLeftarrow", !0);
u(d, k, D, "⇏", "\\nRightarrow", !0);
u(d, k, D, "↮", "\\nleftrightarrow", !0);
u(d, k, D, "⇎", "\\nLeftrightarrow", !0);
u(d, k, D, "△", "\\vartriangle");
u(d, k, x, "ℏ", "\\hslash");
u(d, k, x, "▽", "\\triangledown");
u(d, k, x, "◊", "\\lozenge");
u(d, k, x, "Ⓢ", "\\circledS");
u(d, k, x, "®", "\\circledR");
u(O, k, x, "®", "\\circledR");
u(d, k, x, "∡", "\\measuredangle", !0);
u(d, k, x, "∄", "\\nexists");
u(d, k, x, "℧", "\\mho");
u(d, k, x, "Ⅎ", "\\Finv", !0);
u(d, k, x, "⅁", "\\Game", !0);
u(d, k, x, "‵", "\\backprime");
u(d, k, x, "▲", "\\blacktriangle");
u(d, k, x, "▼", "\\blacktriangledown");
u(d, k, x, "■", "\\blacksquare");
u(d, k, x, "⧫", "\\blacklozenge");
u(d, k, x, "★", "\\bigstar");
u(d, k, x, "∢", "\\sphericalangle", !0);
u(d, k, x, "∁", "\\complement", !0);
u(d, k, x, "ð", "\\eth", !0);
u(O, g, x, "ð", "ð");
u(d, k, x, "╱", "\\diagup");
u(d, k, x, "╲", "\\diagdown");
u(d, k, x, "□", "\\square");
u(d, k, x, "□", "\\Box");
u(d, k, x, "◊", "\\Diamond");
u(d, k, x, "¥", "\\yen", !0);
u(O, k, x, "¥", "\\yen", !0);
u(d, k, x, "✓", "\\checkmark", !0);
u(O, k, x, "✓", "\\checkmark");
u(d, k, x, "ℶ", "\\beth", !0);
u(d, k, x, "ℸ", "\\daleth", !0);
u(d, k, x, "ℷ", "\\gimel", !0);
u(d, k, x, "ϝ", "\\digamma", !0);
u(d, k, x, "ϰ", "\\varkappa");
u(d, k, Wt, "┌", "\\@ulcorner", !0);
u(d, k, Ct, "┐", "\\@urcorner", !0);
u(d, k, Wt, "└", "\\@llcorner", !0);
u(d, k, Ct, "┘", "\\@lrcorner", !0);
u(d, k, D, "≦", "\\leqq", !0);
u(d, k, D, "⩽", "\\leqslant", !0);
u(d, k, D, "⪕", "\\eqslantless", !0);
u(d, k, D, "≲", "\\lesssim", !0);
u(d, k, D, "⪅", "\\lessapprox", !0);
u(d, k, D, "≊", "\\approxeq", !0);
u(d, k, X, "⋖", "\\lessdot");
u(d, k, D, "⋘", "\\lll", !0);
u(d, k, D, "≶", "\\lessgtr", !0);
u(d, k, D, "⋚", "\\lesseqgtr", !0);
u(d, k, D, "⪋", "\\lesseqqgtr", !0);
u(d, k, D, "≑", "\\doteqdot");
u(d, k, D, "≓", "\\risingdotseq", !0);
u(d, k, D, "≒", "\\fallingdotseq", !0);
u(d, k, D, "∽", "\\backsim", !0);
u(d, k, D, "⋍", "\\backsimeq", !0);
u(d, k, D, "⫅", "\\subseteqq", !0);
u(d, k, D, "⋐", "\\Subset", !0);
u(d, k, D, "⊏", "\\sqsubset", !0);
u(d, k, D, "≼", "\\preccurlyeq", !0);
u(d, k, D, "⋞", "\\curlyeqprec", !0);
u(d, k, D, "≾", "\\precsim", !0);
u(d, k, D, "⪷", "\\precapprox", !0);
u(d, k, D, "⊲", "\\vartriangleleft");
u(d, k, D, "⊴", "\\trianglelefteq");
u(d, k, D, "⊨", "\\vDash", !0);
u(d, k, D, "⊪", "\\Vvdash", !0);
u(d, k, D, "⌣", "\\smallsmile");
u(d, k, D, "⌢", "\\smallfrown");
u(d, k, D, "≏", "\\bumpeq", !0);
u(d, k, D, "≎", "\\Bumpeq", !0);
u(d, k, D, "≧", "\\geqq", !0);
u(d, k, D, "⩾", "\\geqslant", !0);
u(d, k, D, "⪖", "\\eqslantgtr", !0);
u(d, k, D, "≳", "\\gtrsim", !0);
u(d, k, D, "⪆", "\\gtrapprox", !0);
u(d, k, X, "⋗", "\\gtrdot");
u(d, k, D, "⋙", "\\ggg", !0);
u(d, k, D, "≷", "\\gtrless", !0);
u(d, k, D, "⋛", "\\gtreqless", !0);
u(d, k, D, "⪌", "\\gtreqqless", !0);
u(d, k, D, "≖", "\\eqcirc", !0);
u(d, k, D, "≗", "\\circeq", !0);
u(d, k, D, "≜", "\\triangleq", !0);
u(d, k, D, "∼", "\\thicksim");
u(d, k, D, "≈", "\\thickapprox");
u(d, k, D, "⫆", "\\supseteqq", !0);
u(d, k, D, "⋑", "\\Supset", !0);
u(d, k, D, "⊐", "\\sqsupset", !0);
u(d, k, D, "≽", "\\succcurlyeq", !0);
u(d, k, D, "⋟", "\\curlyeqsucc", !0);
u(d, k, D, "≿", "\\succsim", !0);
u(d, k, D, "⪸", "\\succapprox", !0);
u(d, k, D, "⊳", "\\vartriangleright");
u(d, k, D, "⊵", "\\trianglerighteq");
u(d, k, D, "⊩", "\\Vdash", !0);
u(d, k, D, "∣", "\\shortmid");
u(d, k, D, "∥", "\\shortparallel");
u(d, k, D, "≬", "\\between", !0);
u(d, k, D, "⋔", "\\pitchfork", !0);
u(d, k, D, "∝", "\\varpropto");
u(d, k, D, "◀", "\\blacktriangleleft");
u(d, k, D, "∴", "\\therefore", !0);
u(d, k, D, "∍", "\\backepsilon");
u(d, k, D, "▶", "\\blacktriangleright");
u(d, k, D, "∵", "\\because", !0);
u(d, k, D, "⋘", "\\llless");
u(d, k, D, "⋙", "\\gggtr");
u(d, k, X, "⊲", "\\lhd");
u(d, k, X, "⊳", "\\rhd");
u(d, k, D, "≂", "\\eqsim", !0);
u(d, g, D, "⋈", "\\Join");
u(d, k, D, "≑", "\\Doteq", !0);
u(d, k, X, "∔", "\\dotplus", !0);
u(d, k, X, "∖", "\\smallsetminus");
u(d, k, X, "⋒", "\\Cap", !0);
u(d, k, X, "⋓", "\\Cup", !0);
u(d, k, X, "⩞", "\\doublebarwedge", !0);
u(d, k, X, "⊟", "\\boxminus", !0);
u(d, k, X, "⊞", "\\boxplus", !0);
u(d, k, X, "⋇", "\\divideontimes", !0);
u(d, k, X, "⋉", "\\ltimes", !0);
u(d, k, X, "⋊", "\\rtimes", !0);
u(d, k, X, "⋋", "\\leftthreetimes", !0);
u(d, k, X, "⋌", "\\rightthreetimes", !0);
u(d, k, X, "⋏", "\\curlywedge", !0);
u(d, k, X, "⋎", "\\curlyvee", !0);
u(d, k, X, "⊝", "\\circleddash", !0);
u(d, k, X, "⊛", "\\circledast", !0);
u(d, k, X, "⋅", "\\centerdot");
u(d, k, X, "⊺", "\\intercal", !0);
u(d, k, X, "⋒", "\\doublecap");
u(d, k, X, "⋓", "\\doublecup");
u(d, k, X, "⊠", "\\boxtimes", !0);
u(d, k, D, "⇢", "\\dashrightarrow", !0);
u(d, k, D, "⇠", "\\dashleftarrow", !0);
u(d, k, D, "⇇", "\\leftleftarrows", !0);
u(d, k, D, "⇆", "\\leftrightarrows", !0);
u(d, k, D, "⇚", "\\Lleftarrow", !0);
u(d, k, D, "↞", "\\twoheadleftarrow", !0);
u(d, k, D, "↢", "\\leftarrowtail", !0);
u(d, k, D, "↫", "\\looparrowleft", !0);
u(d, k, D, "⇋", "\\leftrightharpoons", !0);
u(d, k, D, "↶", "\\curvearrowleft", !0);
u(d, k, D, "↺", "\\circlearrowleft", !0);
u(d, k, D, "↰", "\\Lsh", !0);
u(d, k, D, "⇈", "\\upuparrows", !0);
u(d, k, D, "↿", "\\upharpoonleft", !0);
u(d, k, D, "⇃", "\\downharpoonleft", !0);
u(d, g, D, "⊶", "\\origof", !0);
u(d, g, D, "⊷", "\\imageof", !0);
u(d, k, D, "⊸", "\\multimap", !0);
u(d, k, D, "↭", "\\leftrightsquigarrow", !0);
u(d, k, D, "⇉", "\\rightrightarrows", !0);
u(d, k, D, "⇄", "\\rightleftarrows", !0);
u(d, k, D, "↠", "\\twoheadrightarrow", !0);
u(d, k, D, "↣", "\\rightarrowtail", !0);
u(d, k, D, "↬", "\\looparrowright", !0);
u(d, k, D, "↷", "\\curvearrowright", !0);
u(d, k, D, "↻", "\\circlearrowright", !0);
u(d, k, D, "↱", "\\Rsh", !0);
u(d, k, D, "⇊", "\\downdownarrows", !0);
u(d, k, D, "↾", "\\upharpoonright", !0);
u(d, k, D, "⇂", "\\downharpoonright", !0);
u(d, k, D, "⇝", "\\rightsquigarrow", !0);
u(d, k, D, "⇝", "\\leadsto");
u(d, k, D, "⇛", "\\Rrightarrow", !0);
u(d, k, D, "↾", "\\restriction");
u(d, g, x, "‘", "`");
u(d, g, x, "$", "\\$");
u(O, g, x, "$", "\\$");
u(O, g, x, "$", "\\textdollar");
u(d, g, x, "%", "\\%");
u(O, g, x, "%", "\\%");
u(d, g, x, "_", "\\_");
u(O, g, x, "_", "\\_");
u(O, g, x, "_", "\\textunderscore");
u(d, g, x, "∠", "\\angle", !0);
u(d, g, x, "∞", "\\infty", !0);
u(d, g, x, "′", "\\prime");
u(d, g, x, "△", "\\triangle");
u(d, g, x, "Γ", "\\Gamma", !0);
u(d, g, x, "Δ", "\\Delta", !0);
u(d, g, x, "Θ", "\\Theta", !0);
u(d, g, x, "Λ", "\\Lambda", !0);
u(d, g, x, "Ξ", "\\Xi", !0);
u(d, g, x, "Π", "\\Pi", !0);
u(d, g, x, "Σ", "\\Sigma", !0);
u(d, g, x, "Υ", "\\Upsilon", !0);
u(d, g, x, "Φ", "\\Phi", !0);
u(d, g, x, "Ψ", "\\Psi", !0);
u(d, g, x, "Ω", "\\Omega", !0);
u(d, g, x, "A", "Α");
u(d, g, x, "B", "Β");
u(d, g, x, "E", "Ε");
u(d, g, x, "Z", "Ζ");
u(d, g, x, "H", "Η");
u(d, g, x, "I", "Ι");
u(d, g, x, "K", "Κ");
u(d, g, x, "M", "Μ");
u(d, g, x, "N", "Ν");
u(d, g, x, "O", "Ο");
u(d, g, x, "P", "Ρ");
u(d, g, x, "T", "Τ");
u(d, g, x, "X", "Χ");
u(d, g, x, "¬", "\\neg", !0);
u(d, g, x, "¬", "\\lnot");
u(d, g, x, "⊤", "\\top");
u(d, g, x, "⊥", "\\bot");
u(d, g, x, "∅", "\\emptyset");
u(d, k, x, "∅", "\\varnothing");
u(d, g, $, "α", "\\alpha", !0);
u(d, g, $, "β", "\\beta", !0);
u(d, g, $, "γ", "\\gamma", !0);
u(d, g, $, "δ", "\\delta", !0);
u(d, g, $, "ϵ", "\\epsilon", !0);
u(d, g, $, "ζ", "\\zeta", !0);
u(d, g, $, "η", "\\eta", !0);
u(d, g, $, "θ", "\\theta", !0);
u(d, g, $, "ι", "\\iota", !0);
u(d, g, $, "κ", "\\kappa", !0);
u(d, g, $, "λ", "\\lambda", !0);
u(d, g, $, "μ", "\\mu", !0);
u(d, g, $, "ν", "\\nu", !0);
u(d, g, $, "ξ", "\\xi", !0);
u(d, g, $, "ο", "\\omicron", !0);
u(d, g, $, "π", "\\pi", !0);
u(d, g, $, "ρ", "\\rho", !0);
u(d, g, $, "σ", "\\sigma", !0);
u(d, g, $, "τ", "\\tau", !0);
u(d, g, $, "υ", "\\upsilon", !0);
u(d, g, $, "ϕ", "\\phi", !0);
u(d, g, $, "χ", "\\chi", !0);
u(d, g, $, "ψ", "\\psi", !0);
u(d, g, $, "ω", "\\omega", !0);
u(d, g, $, "ε", "\\varepsilon", !0);
u(d, g, $, "ϑ", "\\vartheta", !0);
u(d, g, $, "ϖ", "\\varpi", !0);
u(d, g, $, "ϱ", "\\varrho", !0);
u(d, g, $, "ς", "\\varsigma", !0);
u(d, g, $, "φ", "\\varphi", !0);
u(d, g, X, "∗", "*", !0);
u(d, g, X, "+", "+");
u(d, g, X, "−", "-", !0);
u(d, g, X, "⋅", "\\cdot", !0);
u(d, g, X, "∘", "\\circ", !0);
u(d, g, X, "÷", "\\div", !0);
u(d, g, X, "±", "\\pm", !0);
u(d, g, X, "×", "\\times", !0);
u(d, g, X, "∩", "\\cap", !0);
u(d, g, X, "∪", "\\cup", !0);
u(d, g, X, "∖", "\\setminus", !0);
u(d, g, X, "∧", "\\land");
u(d, g, X, "∨", "\\lor");
u(d, g, X, "∧", "\\wedge", !0);
u(d, g, X, "∨", "\\vee", !0);
u(d, g, x, "√", "\\surd");
u(d, g, Wt, "⟨", "\\langle", !0);
u(d, g, Wt, "∣", "\\lvert");
u(d, g, Wt, "∥", "\\lVert");
u(d, g, Ct, "?", "?");
u(d, g, Ct, "!", "!");
u(d, g, Ct, "⟩", "\\rangle", !0);
u(d, g, Ct, "∣", "\\rvert");
u(d, g, Ct, "∥", "\\rVert");
u(d, g, D, "=", "=");
u(d, g, D, ":", ":");
u(d, g, D, "≈", "\\approx", !0);
u(d, g, D, "≅", "\\cong", !0);
u(d, g, D, "≥", "\\ge");
u(d, g, D, "≥", "\\geq", !0);
u(d, g, D, "←", "\\gets");
u(d, g, D, ">", "\\gt", !0);
u(d, g, D, "∈", "\\in", !0);
u(d, g, D, "", "\\@not");
u(d, g, D, "⊂", "\\subset", !0);
u(d, g, D, "⊃", "\\supset", !0);
u(d, g, D, "⊆", "\\subseteq", !0);
u(d, g, D, "⊇", "\\supseteq", !0);
u(d, k, D, "⊈", "\\nsubseteq", !0);
u(d, k, D, "⊉", "\\nsupseteq", !0);
u(d, g, D, "⊨", "\\models");
u(d, g, D, "←", "\\leftarrow", !0);
u(d, g, D, "≤", "\\le");
u(d, g, D, "≤", "\\leq", !0);
u(d, g, D, "<", "\\lt", !0);
u(d, g, D, "→", "\\rightarrow", !0);
u(d, g, D, "→", "\\to");
u(d, k, D, "≱", "\\ngeq", !0);
u(d, k, D, "≰", "\\nleq", !0);
u(d, g, tr, " ", "\\ ");
u(d, g, tr, " ", "\\space");
u(d, g, tr, " ", "\\nobreakspace");
u(O, g, tr, " ", "\\ ");
u(O, g, tr, " ", " ");
u(O, g, tr, " ", "\\space");
u(O, g, tr, " ", "\\nobreakspace");
u(d, g, tr, null, "\\nobreak");
u(d, g, tr, null, "\\allowbreak");
u(d, g, Ai, ",", ",");
u(d, g, Ai, ";", ";");
u(d, k, X, "⊼", "\\barwedge", !0);
u(d, k, X, "⊻", "\\veebar", !0);
u(d, g, X, "⊙", "\\odot", !0);
u(d, g, X, "⊕", "\\oplus", !0);
u(d, g, X, "⊗", "\\otimes", !0);
u(d, g, x, "∂", "\\partial", !0);
u(d, g, X, "⊘", "\\oslash", !0);
u(d, k, X, "⊚", "\\circledcirc", !0);
u(d, k, X, "⊡", "\\boxdot", !0);
u(d, g, X, "△", "\\bigtriangleup");
u(d, g, X, "▽", "\\bigtriangledown");
u(d, g, X, "†", "\\dagger");
u(d, g, X, "⋄", "\\diamond");
u(d, g, X, "⋆", "\\star");
u(d, g, X, "◃", "\\triangleleft");
u(d, g, X, "▹", "\\triangleright");
u(d, g, Wt, "{", "\\{");
u(O, g, x, "{", "\\{");
u(O, g, x, "{", "\\textbraceleft");
u(d, g, Ct, "}", "\\}");
u(O, g, x, "}", "\\}");
u(O, g, x, "}", "\\textbraceright");
u(d, g, Wt, "{", "\\lbrace");
u(d, g, Ct, "}", "\\rbrace");
u(d, g, Wt, "[", "\\lbrack", !0);
u(O, g, x, "[", "\\lbrack", !0);
u(d, g, Ct, "]", "\\rbrack", !0);
u(O, g, x, "]", "\\rbrack", !0);
u(d, g, Wt, "(", "\\lparen", !0);
u(d, g, Ct, ")", "\\rparen", !0);
u(O, g, x, "<", "\\textless", !0);
u(O, g, x, ">", "\\textgreater", !0);
u(d, g, Wt, "⌊", "\\lfloor", !0);
u(d, g, Ct, "⌋", "\\rfloor", !0);
u(d, g, Wt, "⌈", "\\lceil", !0);
u(d, g, Ct, "⌉", "\\rceil", !0);
u(d, g, x, "\\", "\\backslash");
u(d, g, x, "∣", "|");
u(d, g, x, "∣", "\\vert");
u(O, g, x, "|", "\\textbar", !0);
u(d, g, x, "∥", "\\|");
u(d, g, x, "∥", "\\Vert");
u(O, g, x, "∥", "\\textbardbl");
u(O, g, x, "~", "\\textasciitilde");
u(O, g, x, "\\", "\\textbackslash");
u(O, g, x, "^", "\\textasciicircum");
u(d, g, D, "↑", "\\uparrow", !0);
u(d, g, D, "⇑", "\\Uparrow", !0);
u(d, g, D, "↓", "\\downarrow", !0);
u(d, g, D, "⇓", "\\Downarrow", !0);
u(d, g, D, "↕", "\\updownarrow", !0);
u(d, g, D, "⇕", "\\Updownarrow", !0);
u(d, g, rt, "∐", "\\coprod");
u(d, g, rt, "⋁", "\\bigvee");
u(d, g, rt, "⋀", "\\bigwedge");
u(d, g, rt, "⨄", "\\biguplus");
u(d, g, rt, "⋂", "\\bigcap");
u(d, g, rt, "⋃", "\\bigcup");
u(d, g, rt, "∫", "\\int");
u(d, g, rt, "∫", "\\intop");
u(d, g, rt, "∬", "\\iint");
u(d, g, rt, "∭", "\\iiint");
u(d, g, rt, "∏", "\\prod");
u(d, g, rt, "∑", "\\sum");
u(d, g, rt, "⨂", "\\bigotimes");
u(d, g, rt, "⨁", "\\bigoplus");
u(d, g, rt, "⨀", "\\bigodot");
u(d, g, rt, "∮", "\\oint");
u(d, g, rt, "∯", "\\oiint");
u(d, g, rt, "∰", "\\oiiint");
u(d, g, rt, "⨆", "\\bigsqcup");
u(d, g, rt, "∫", "\\smallint");
u(O, g, pn, "…", "\\textellipsis");
u(d, g, pn, "…", "\\mathellipsis");
u(O, g, pn, "…", "\\ldots", !0);
u(d, g, pn, "…", "\\ldots", !0);
u(d, g, pn, "⋯", "\\@cdots", !0);
u(d, g, pn, "⋱", "\\ddots", !0);
u(d, g, x, "⋮", "\\varvdots");
u(d, g, Re, "ˊ", "\\acute");
u(d, g, Re, "ˋ", "\\grave");
u(d, g, Re, "¨", "\\ddot");
u(d, g, Re, "~", "\\tilde");
u(d, g, Re, "ˉ", "\\bar");
u(d, g, Re, "˘", "\\breve");
u(d, g, Re, "ˇ", "\\check");
u(d, g, Re, "^", "\\hat");
u(d, g, Re, "⃗", "\\vec");
u(d, g, Re, "˙", "\\dot");
u(d, g, Re, "˚", "\\mathring");
u(d, g, $, "", "\\@imath");
u(d, g, $, "", "\\@jmath");
u(d, g, x, "ı", "ı");
u(d, g, x, "ȷ", "ȷ");
u(O, g, x, "ı", "\\i", !0);
u(O, g, x, "ȷ", "\\j", !0);
u(O, g, x, "ß", "\\ss", !0);
u(O, g, x, "æ", "\\ae", !0);
u(O, g, x, "œ", "\\oe", !0);
u(O, g, x, "ø", "\\o", !0);
u(O, g, x, "Æ", "\\AE", !0);
u(O, g, x, "Œ", "\\OE", !0);
u(O, g, x, "Ø", "\\O", !0);
u(O, g, Re, "ˊ", "\\'");
u(O, g, Re, "ˋ", "\\`");
u(O, g, Re, "ˆ", "\\^");
u(O, g, Re, "˜", "\\~");
u(O, g, Re, "ˉ", "\\=");
u(O, g, Re, "˘", "\\u");
u(O, g, Re, "˙", "\\.");
u(O, g, Re, "¸", "\\c");
u(O, g, Re, "˚", "\\r");
u(O, g, Re, "ˇ", "\\v");
u(O, g, Re, "¨", '\\"');
u(O, g, Re, "˝", "\\H");
u(O, g, Re, "◯", "\\textcircled");
var jc = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
u(O, g, x, "–", "--", !0);
u(O, g, x, "–", "\\textendash");
u(O, g, x, "—", "---", !0);
u(O, g, x, "—", "\\textemdash");
u(O, g, x, "‘", "`", !0);
u(O, g, x, "‘", "\\textquoteleft");
u(O, g, x, "’", "'", !0);
u(O, g, x, "’", "\\textquoteright");
u(O, g, x, "“", "``", !0);
u(O, g, x, "“", "\\textquotedblleft");
u(O, g, x, "”", "''", !0);
u(O, g, x, "”", "\\textquotedblright");
u(d, g, x, "°", "\\degree", !0);
u(O, g, x, "°", "\\degree");
u(O, g, x, "°", "\\textdegree", !0);
u(d, g, x, "£", "\\pounds");
u(d, g, x, "£", "\\mathsterling", !0);
u(O, g, x, "£", "\\pounds");
u(O, g, x, "£", "\\textsterling", !0);
u(d, k, x, "✠", "\\maltese");
u(O, k, x, "✠", "\\maltese");
var Xo = '0123456789/@."';
for (var wl = 0; wl < Xo.length; wl++) {
  var Zo = Xo.charAt(wl);
  u(d, g, x, Zo, Zo);
}
var Ko = '0123456789!@*()-=+";:?/.,';
for (var kl = 0; kl < Ko.length; kl++) {
  var Qo = Ko.charAt(kl);
  u(O, g, x, Qo, Qo);
}
var ri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Dl = 0; Dl < ri.length; Dl++) {
  var za = ri.charAt(Dl);
  u(d, g, $, za, za), u(O, g, x, za, za);
}
u(d, k, x, "C", "ℂ");
u(O, k, x, "C", "ℂ");
u(d, k, x, "H", "ℍ");
u(O, k, x, "H", "ℍ");
u(d, k, x, "N", "ℕ");
u(O, k, x, "N", "ℕ");
u(d, k, x, "P", "ℙ");
u(O, k, x, "P", "ℙ");
u(d, k, x, "Q", "ℚ");
u(O, k, x, "Q", "ℚ");
u(d, k, x, "R", "ℝ");
u(O, k, x, "R", "ℝ");
u(d, k, x, "Z", "ℤ");
u(O, k, x, "Z", "ℤ");
u(d, g, $, "h", "ℎ");
u(O, g, $, "h", "ℎ");
var ne = "";
for (var At = 0; At < ri.length; At++) {
  var je = ri.charAt(At);
  ne = String.fromCharCode(55349, 56320 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56372 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56424 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56580 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56684 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56736 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56788 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56840 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56944 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), At < 26 && (ne = String.fromCharCode(55349, 56632 + At), u(d, g, $, je, ne), u(O, g, x, je, ne), ne = String.fromCharCode(55349, 56476 + At), u(d, g, $, je, ne), u(O, g, x, je, ne));
}
ne = "𝕜";
u(d, g, $, "k", ne);
u(O, g, x, "k", ne);
for (var xr = 0; xr < 10; xr++) {
  var cr = xr.toString();
  ne = String.fromCharCode(55349, 57294 + xr), u(d, g, $, cr, ne), u(O, g, x, cr, ne), ne = String.fromCharCode(55349, 57314 + xr), u(d, g, $, cr, ne), u(O, g, x, cr, ne), ne = String.fromCharCode(55349, 57324 + xr), u(d, g, $, cr, ne), u(O, g, x, cr, ne), ne = String.fromCharCode(55349, 57334 + xr), u(d, g, $, cr, ne), u(O, g, x, cr, ne);
}
var Jo = "ÐÞþ";
for (var Al = 0; Al < Jo.length; Al++) {
  var Ia = Jo.charAt(Al);
  u(d, g, $, Ia, Ia), u(O, g, x, Ia, Ia);
}
var Na = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], $o = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], id = function(e, t) {
  var r = e.charCodeAt(0), a = e.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var s = Math.floor((i - 119808) / 26);
    return [Na[s][2], Na[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [$o[o][2], $o[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [Na[0][2], Na[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new J("Unsupported character: " + e);
  }
}, Ei = function(e, t, r) {
  return Ke[r][e] && Ke[r][e].replace && (e = Ke[r][e].replace), {
    value: e,
    metrics: Ms(e, t, r)
  };
}, f0 = function(e, t, r, a, i) {
  var l = Ei(e, t, r), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var c = s.italic;
    (r === "text" || a && a.font === "mathit") && (c = 0), o = new z0(e, s.height, s.depth, c, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), o = new z0(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var h = a.getColor();
    h && (o.style.color = h);
  }
  return o;
}, ld = function(e, t, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && Ei(e, "Main-Bold", t).metrics ? f0(e, "Main-Bold", t, r, a.concat(["mathbf"])) : e === "\\" || Ke[t][e].font === "main" ? f0(e, "Main-Regular", t, r, a) : f0(e, "AMS-Regular", t, r, a.concat(["amsrm"]));
}, sd = function(e, t, r, a, i) {
  return i !== "textord" && Ei(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, od = function(e, t, r) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, c = "", h = "";
  if (i.charCodeAt(0) === 55349 && ([c, h] = id(i, a)), c.length > 0)
    return f0(i, c, a, t, l.concat(h));
  if (o) {
    var m, f;
    if (o === "boldsymbol") {
      var p = sd(i, a, t, l, r);
      m = p.fontName, f = [p.fontClass];
    } else s ? (m = Xc[o].fontName, f = [o]) : (m = Ra(o, t.fontWeight, t.fontShape), f = [o, t.fontWeight, t.fontShape]);
    if (Ei(i, m, a).metrics)
      return f0(i, m, a, t, l.concat(f));
    if (jc.hasOwnProperty(i) && m.slice(0, 10) === "Typewriter") {
      for (var v = [], w = 0; w < i.length; w++)
        v.push(f0(i[w], m, a, t, l.concat(f)));
      return Yc(v);
    }
  }
  if (r === "mathord")
    return f0(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var S = Ke[a][i] && Ke[a][i].font;
    if (S === "ams") {
      var A = Ra("amsrm", t.fontWeight, t.fontShape);
      return f0(i, A, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (S === "main" || !S) {
      var b = Ra("textrm", t.fontWeight, t.fontShape);
      return f0(i, b, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var y = Ra(S, t.fontWeight, t.fontShape);
      return f0(i, y, a, t, l.concat(y, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, ud = (n, e) => {
  if (_r(n.classes) !== _r(e.classes) || n.skew !== e.skew || n.maxFontSize !== e.maxFontSize)
    return !1;
  if (n.classes.length === 1) {
    var t = n.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var r in n.style)
    if (n.style.hasOwnProperty(r) && n.style[r] !== e.style[r])
      return !1;
  for (var a in e.style)
    if (e.style.hasOwnProperty(a) && n.style[a] !== e.style[a])
      return !1;
  return !0;
}, cd = (n) => {
  for (var e = 0; e < n.length - 1; e++) {
    var t = n[e], r = n[e + 1];
    t instanceof z0 && r instanceof z0 && ud(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, n.splice(e + 1, 1), e--);
  }
  return n;
}, Bs = function(e) {
  for (var t = 0, r = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = a;
}, Bt = function(e, t, r, a) {
  var i = new Di(e, t, r, a);
  return Bs(i), i;
}, Wc = (n, e, t, r) => new Di(n, e, t, r), hd = function(e, t, r) {
  var a = Bt([e], [], t);
  return a.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = G(a.height), a.maxFontSize = 1, a;
}, fd = function(e, t, r, a) {
  var i = new Gc(e, t, r, a);
  return Bs(i), i;
}, Yc = function(e) {
  var t = new ta(e);
  return Bs(t), t;
}, dd = function(e, t) {
  return e instanceof ta ? Bt([], [e], t) : e;
}, md = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, r = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, l = 1; l < t.length; l++) {
      var s = -t[l].shift - i - t[l].elem.depth, o = s - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + s, r.push({
        type: "kern",
        size: o
      }), r.push(t[l]);
    }
    return {
      children: r,
      depth: a
    };
  }
  var c;
  if (e.positionType === "top") {
    for (var h = e.positionData, m = 0; m < e.children.length; m++) {
      var f = e.children[m];
      h -= f.type === "kern" ? f.size : f.elem.height + f.elem.depth;
    }
    c = h;
  } else if (e.positionType === "bottom")
    c = -e.positionData;
  else {
    var p = e.children[0];
    if (p.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      c = -p.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      c = -p.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: c
  };
}, pd = function(e, t) {
  for (var {
    children: r,
    depth: a
  } = md(e), i = 0, l = 0; l < r.length; l++) {
    var s = r[l];
    if (s.type === "elem") {
      var o = s.elem;
      i = Math.max(i, o.maxFontSize, o.height);
    }
  }
  i += 2;
  var c = Bt(["pstrut"], []);
  c.style.height = G(i);
  for (var h = [], m = a, f = a, p = a, v = 0; v < r.length; v++) {
    var w = r[v];
    if (w.type === "kern")
      p += w.size;
    else {
      var S = w.elem, A = w.wrapperClasses || [], b = w.wrapperStyle || {}, y = Bt(A, [c, S], void 0, b);
      y.style.top = G(-i - p - S.depth), w.marginLeft && (y.style.marginLeft = w.marginLeft), w.marginRight && (y.style.marginRight = w.marginRight), h.push(y), p += S.height + S.depth;
    }
    m = Math.min(m, p), f = Math.max(f, p);
  }
  var E = Bt(["vlist"], h);
  E.style.height = G(f);
  var C;
  if (m < 0) {
    var T = Bt([], []), z = Bt(["vlist"], [T]);
    z.style.height = G(-m);
    var I = Bt(["vlist-s"], [new z0("​")]);
    C = [Bt(["vlist-r"], [E, I]), Bt(["vlist-r"], [z])];
  } else
    C = [Bt(["vlist-r"], [E])];
  var B = Bt(["vlist-t"], C);
  return C.length === 2 && B.classes.push("vlist-t2"), B.height = f, B.depth = -m, B;
}, gd = (n, e) => {
  var t = Bt(["mspace"], [], e), r = qe(n, e);
  return t.style.marginRight = G(r), t;
}, Ra = function(e, t, r) {
  var a = "";
  switch (e) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = e;
  }
  var i;
  return t === "textbf" && r === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, Xc = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Zc = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, _d = function(e, t) {
  var [r, a, i] = Zc[e], l = new Lr(r), s = new vr([l], {
    width: G(a),
    height: G(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + G(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = Wc(["overlay"], [s], t);
  return o.height = i, o.style.height = G(i), o.style.width = G(a), o;
}, M = {
  fontMap: Xc,
  makeSymbol: f0,
  mathsym: ld,
  makeSpan: Bt,
  makeSvgSpan: Wc,
  makeLineSpan: hd,
  makeAnchor: fd,
  makeFragment: Yc,
  wrapFragment: dd,
  makeVList: pd,
  makeOrd: od,
  makeGlue: gd,
  staticSvg: _d,
  svgData: Zc,
  tryCombineChars: cd
}, Oe = {
  number: 3,
  unit: "mu"
}, Fr = {
  number: 4,
  unit: "mu"
}, P0 = {
  number: 5,
  unit: "mu"
}, vd = {
  mord: {
    mop: Oe,
    mbin: Fr,
    mrel: P0,
    minner: Oe
  },
  mop: {
    mord: Oe,
    mop: Oe,
    mrel: P0,
    minner: Oe
  },
  mbin: {
    mord: Fr,
    mop: Fr,
    mopen: Fr,
    minner: Fr
  },
  mrel: {
    mord: P0,
    mop: P0,
    mopen: P0,
    minner: P0
  },
  mopen: {},
  mclose: {
    mop: Oe,
    mbin: Fr,
    mrel: P0,
    minner: Oe
  },
  mpunct: {
    mord: Oe,
    mop: Oe,
    mrel: P0,
    mopen: Oe,
    mclose: Oe,
    mpunct: Oe,
    minner: Oe
  },
  minner: {
    mord: Oe,
    mop: Oe,
    mbin: Fr,
    mrel: P0,
    mopen: Oe,
    mpunct: Oe,
    minner: Oe
  }
}, bd = {
  mord: {
    mop: Oe
  },
  mop: {
    mord: Oe,
    mop: Oe
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Oe
  },
  mpunct: {},
  minner: {
    mop: Oe
  }
}, Kc = {}, ni = {}, ai = {};
function Y(n) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = n, s = {
    type: e,
    numArgs: r.numArgs,
    argTypes: r.argTypes,
    allowedInArgument: !!r.allowedInArgument,
    allowedInText: !!r.allowedInText,
    allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
    numOptionalArgs: r.numOptionalArgs || 0,
    infix: !!r.infix,
    primitive: !!r.primitive,
    handler: a
  }, o = 0; o < t.length; ++o)
    Kc[t[o]] = s;
  e && (i && (ni[e] = i), l && (ai[e] = l));
}
function Pr(n) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = n;
  Y({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: r
  });
}
var ii = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, Ze = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, mn = M.makeSpan, yd = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], wd = ["rightmost", "mrel", "mclose", "mpunct"], kd = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
}, Dd = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, gt = function(e, t, r, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var s = ye(e[l], t);
    if (s instanceof ta) {
      var o = s.children;
      i.push(...o);
    } else
      i.push(s);
  }
  if (M.tryCombineChars(i), !r)
    return i;
  var c = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? c = t.havingSize(h.size) : h.type === "styling" && (c = t.havingStyle(kd[h.style]));
  }
  var m = mn([a[0] || "leftmost"], [], t), f = mn([a[1] || "rightmost"], [], t), p = r === "root";
  return eu(i, (v, w) => {
    var S = w.classes[0], A = v.classes[0];
    S === "mbin" && ee.contains(wd, A) ? w.classes[0] = "mord" : A === "mbin" && ee.contains(yd, S) && (v.classes[0] = "mord");
  }, {
    node: m
  }, f, p), eu(i, (v, w) => {
    var S = ls(w), A = ls(v), b = S && A ? v.hasClass("mtight") ? bd[S][A] : vd[S][A] : null;
    if (b)
      return M.makeGlue(b, c);
  }, {
    node: m
  }, f, p), i;
}, eu = function n(e, t, r, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = Qc(s);
    if (o) {
      n(o.children, t, r, null, i);
      continue;
    }
    var c = !s.hasClass("mspace");
    if (c) {
      var h = t(s, r.node);
      h && (r.insertAfter ? r.insertAfter(h) : (e.unshift(h), l++));
    }
    c ? r.node = s : i && s.hasClass("newline") && (r.node = mn(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((m) => (f) => {
      e.splice(m + 1, 0, f), l++;
    })(l);
  }
  a && e.pop();
}, Qc = function(e) {
  return e instanceof ta || e instanceof Gc || e instanceof Di && e.hasClass("enclosing") ? e : null;
}, Ad = function n(e, t) {
  var r = Qc(e);
  if (r) {
    var a = r.children;
    if (a.length) {
      if (t === "right")
        return n(a[a.length - 1], "right");
      if (t === "left")
        return n(a[0], "left");
    }
  }
  return e;
}, ls = function(e, t) {
  return e ? (t && (e = Ad(e, t)), Dd[e.classes[0]] || null) : null;
}, Xn = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return mn(t.concat(r));
}, ye = function(e, t, r) {
  if (!e)
    return mn();
  if (ni[e.type]) {
    var a = ni[e.type](e, t);
    if (r && t.size !== r.size) {
      a = mn(t.sizingClasses(r), [a], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new J("Got group of unknown type: '" + e.type + "'");
};
function Jc(n) {
  return new ta(n);
}
class d0 {
  constructor(e, t, r) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = _r(this.classes));
    for (var r = 0; r < this.children.length; r++)
      e.appendChild(this.children[r].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += ee.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + ee.escape(_r(this.classes)) + '"'), e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class qn {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return ee.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Ed {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", G(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + G(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var P = {
  MathNode: d0,
  TextNode: qn,
  SpaceNode: Ed,
  newDocumentFragment: Jc
}, r0 = function(e, t, r) {
  return Ke[t][e] && Ke[t][e].replace && e.charCodeAt(0) !== 55349 && !(jc.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = Ke[t][e].replace), new P.TextNode(e);
}, zs = function(e) {
  return e.length === 1 ? e[0] : new P.MathNode("mrow", e);
}, Is = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var r = t.font;
  if (!r || r === "mathnormal")
    return null;
  var a = e.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var i = e.text;
  if (ee.contains(["\\imath", "\\jmath"], i))
    return null;
  Ke[a][i] && Ke[a][i].replace && (i = Ke[a][i].replace);
  var l = M.fontMap[r].fontName;
  return Ms(i, l, a) ? M.fontMap[r].variant : null;
}, Yt = function(e, t, r) {
  if (e.length === 1) {
    var a = Ce(e[0], t);
    return r && a instanceof d0 && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = Ce(e[s], t);
    if (o instanceof d0 && l instanceof d0) {
      if (o.type === "mtext" && l.type === "mtext" && o.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mi" && o.children.length === 1 && l.type === "mn") {
        var c = o.children[0];
        if (c instanceof qn && c.text === ".") {
          l.children.push(...o.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var h = l.children[0];
        if (h instanceof qn && h.text === "̸" && (o.type === "mo" || o.type === "mi" || o.type === "mn")) {
          var m = o.children[0];
          m instanceof qn && m.text.length > 0 && (m.text = m.text.slice(0, 1) + "̸" + m.text.slice(1), i.pop());
        }
      }
    }
    i.push(o), l = o;
  }
  return i;
}, br = function(e, t, r) {
  return zs(Yt(e, t, r));
}, Ce = function(e, t) {
  if (!e)
    return new P.MathNode("mrow");
  if (ai[e.type]) {
    var r = ai[e.type](e, t);
    return r;
  } else
    throw new J("Got group of unknown type: '" + e.type + "'");
}, Sd = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, xd = function(e) {
  var t = new P.MathNode("mo", [new P.TextNode(Sd[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Fd = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, Cd = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Td = function(e, t) {
  function r() {
    var s = 4e5, o = e.label.slice(1);
    if (ee.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var c = e, h = Cd(c.base), m, f, p;
      if (h > 5)
        o === "widehat" || o === "widecheck" ? (m = 420, s = 2364, p = 0.42, f = o + "4") : (m = 312, s = 2340, p = 0.34, f = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][h];
        o === "widehat" || o === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][v], m = [0, 239, 300, 360, 420][v], p = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], f = o + v) : (s = [0, 600, 1033, 2339, 2340][v], m = [0, 260, 286, 306, 312][v], p = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], f = "tilde" + v);
      }
      var w = new Lr(f), S = new vr([w], {
        width: "100%",
        height: G(p),
        viewBox: "0 0 " + s + " " + m,
        preserveAspectRatio: "none"
      });
      return {
        span: M.makeSvgSpan([], [S], t),
        minWidth: 0,
        height: p
      };
    } else {
      var A = [], b = Fd[o], [y, E, C] = b, T = C / 1e3, z = y.length, I, B;
      if (z === 1) {
        var L = b[3];
        I = ["hide-tail"], B = [L];
      } else if (z === 2)
        I = ["halfarrow-left", "halfarrow-right"], B = ["xMinYMin", "xMaxYMin"];
      else if (z === 3)
        I = ["brace-left", "brace-center", "brace-right"], B = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + z + " children.");
      for (var R = 0; R < z; R++) {
        var W = new Lr(y[R]), oe = new vr([W], {
          width: "400em",
          height: G(T),
          viewBox: "0 0 " + s + " " + C,
          preserveAspectRatio: B[R] + " slice"
        }), q = M.makeSvgSpan([I[R]], [oe], t);
        if (z === 1)
          return {
            span: q,
            minWidth: E,
            height: T
          };
        q.style.height = G(T), A.push(q);
      }
      return {
        span: M.makeSpan(["stretchy"], A, t),
        minWidth: E,
        height: T
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: l
  } = r();
  return a.height = l, a.style.height = G(l), i > 0 && (a.style.minWidth = G(i)), a;
}, Md = function(e, t, r, a, i) {
  var l, s = e.height + e.depth + r + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = M.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var o = i.color && i.getColor();
      o && (l.style.borderColor = o);
    }
  } else {
    var c = [];
    /^[bx]cancel$/.test(t) && c.push(new Wo({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && c.push(new Wo({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new vr(c, {
      width: "100%",
      height: G(s)
    });
    l = M.makeSvgSpan([], [h], i);
  }
  return l.height = s, l.style.height = G(s), l;
}, er = {
  encloseSpan: Md,
  mathMLnode: xd,
  svgSpan: Td
};
function ce(n, e) {
  if (!n || n.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function Ns(n) {
  var e = Si(n);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return e;
}
function Si(n) {
  return n && (n.type === "atom" || ad.hasOwnProperty(n.type)) ? n : null;
}
var Rs = (n, e) => {
  var t, r, a;
  n && n.type === "supsub" ? (r = ce(n.base, "accent"), t = r.base, n.base = t, a = nd(ye(n, e)), n.base = r) : (r = ce(n, "accent"), t = r.base);
  var i = ye(t, e.havingCrampedStyle()), l = r.isShifty && ee.isCharacterBox(t), s = 0;
  if (l) {
    var o = ee.getBaseElem(t), c = ye(o, e.havingCrampedStyle());
    s = Yo(c).skew;
  }
  var h = r.label === "\\c", m = h ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), f;
  if (r.isStretchy)
    f = er.svgSpan(r, e), f = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: f,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + G(2 * s) + ")",
          marginLeft: G(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var p, v;
    r.label === "\\vec" ? (p = M.staticSvg("vec", e), v = M.svgData.vec[1]) : (p = M.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), p = Yo(p), p.italic = 0, v = p.width, h && (m += p.depth)), f = M.makeSpan(["accent-body"], [p]);
    var w = r.label === "\\textcircled";
    w && (f.classes.push("accent-full"), m = i.height);
    var S = s;
    w || (S -= v / 2), f.style.left = G(S), r.label === "\\textcircled" && (f.style.top = ".2em"), f = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -m
      }, {
        type: "elem",
        elem: f
      }]
    }, e);
  }
  var A = M.makeSpan(["mord", "accent"], [f], e);
  return a ? (a.children[0] = A, a.height = Math.max(A.height, a.height), a.classes[0] = "mord", a) : A;
}, $c = (n, e) => {
  var t = n.isStretchy ? er.mathMLnode(n.label) : new P.MathNode("mo", [r0(n.label, n.mode)]), r = new P.MathNode("mover", [Ce(n.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, Bd = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
Y({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var t = ii(e[0]), r = !Bd.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Rs,
  mathmlBuilder: $c
});
Y({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = e[0], r = n.parser.mode;
    return r === "math" && (n.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + n.funcName + " works only in text mode"), r = "text"), {
      type: "accent",
      mode: r,
      label: n.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Rs,
  mathmlBuilder: $c
});
Y({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: r,
      base: a
    };
  },
  htmlBuilder: (n, e) => {
    var t = ye(n.base, e), r = er.svgSpan(n, e), a = n.label === "\\utilde" ? 0.12 : 0, i = M.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = er.mathMLnode(n.label), r = new P.MathNode("munder", [Ce(n.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var La = (n) => {
  var e = new P.MathNode("mpadded", n ? [n] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
Y({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n;
    return {
      type: "xArrow",
      mode: r.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(n, e) {
    var t = e.style, r = e.havingStyle(t.sup()), a = M.wrapFragment(ye(n.body, r, e), e), i = n.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    n.below && (r = e.havingStyle(t.sub()), l = M.wrapFragment(ye(n.below, r, e), e), l.classes.push(i + "-arrow-pad"));
    var s = er.svgSpan(n, e), o = -e.fontMetrics().axisHeight + 0.5 * s.height, c = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
    (a.depth > 0.25 || n.label === "\\xleftequilibrium") && (c -= a.depth);
    var h;
    if (l) {
      var m = -e.fontMetrics().axisHeight + l.height + 0.5 * s.height + 0.111;
      h = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: c
        }, {
          type: "elem",
          elem: s,
          shift: o
        }, {
          type: "elem",
          elem: l,
          shift: m
        }]
      }, e);
    } else
      h = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: c
        }, {
          type: "elem",
          elem: s,
          shift: o
        }]
      }, e);
    return h.children[0].children[0].children[1].classes.push("svg-align"), M.makeSpan(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(n, e) {
    var t = er.mathMLnode(n.label);
    t.setAttribute("minsize", n.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (n.body) {
      var a = La(Ce(n.body, e));
      if (n.below) {
        var i = La(Ce(n.below, e));
        r = new P.MathNode("munderover", [t, i, a]);
      } else
        r = new P.MathNode("mover", [t, a]);
    } else if (n.below) {
      var l = La(Ce(n.below, e));
      r = new P.MathNode("munder", [t, l]);
    } else
      r = La(), r = new P.MathNode("mover", [t, r]);
    return r;
  }
});
var zd = M.makeSpan;
function e4(n, e) {
  var t = gt(n.body, e, !0);
  return zd([n.mclass], t, e);
}
function t4(n, e) {
  var t, r = Yt(n.body, e);
  return n.mclass === "minner" ? t = new P.MathNode("mpadded", r) : n.mclass === "mord" ? n.isCharacterBox ? (t = r[0], t.type = "mi") : t = new P.MathNode("mi", r) : (n.isCharacterBox ? (t = r[0], t.type = "mo") : t = new P.MathNode("mo", r), n.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : n.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : n.mclass === "mopen" || n.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : n.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
Y({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + r.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: Ze(a),
      isCharacterBox: ee.isCharacterBox(a)
    };
  },
  htmlBuilder: e4,
  mathmlBuilder: t4
});
var xi = (n) => {
  var e = n.type === "ordgroup" && n.body.length ? n.body[0] : n;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
Y({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: xi(e[0]),
      body: Ze(e[1]),
      isCharacterBox: ee.isCharacterBox(e[1])
    };
  }
});
Y({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[1], i = e[0], l;
    r !== "\\stackrel" ? l = xi(a) : l = "mrel";
    var s = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: Ze(a)
    }, o = {
      type: "supsub",
      mode: i.mode,
      base: s,
      sup: r === "\\underset" ? null : i,
      sub: r === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [o],
      isCharacterBox: ee.isCharacterBox(o)
    };
  },
  htmlBuilder: e4,
  mathmlBuilder: t4
});
Y({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: xi(e[0]),
      body: Ze(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = gt(n.body, e, !0), r = M.makeSpan([n.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, e) {
    var t = Yt(n.body, e), r = new P.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var Id = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, tu = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), ru = (n) => n.type === "textord" && n.text === "@", Nd = (n, e) => (n.type === "mathord" || n.type === "atom") && n.text === e;
function Rd(n, e, t) {
  var r = Id[n];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(r, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: r,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [i], []), s = t.callFunction("\\\\cdright", [e[1]], []), o = {
        type: "ordgroup",
        mode: "math",
        body: [a, l, s]
      };
      return t.callFunction("\\\\cdparent", [o], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var c = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [c], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Ld(n) {
  var e = [];
  for (n.gullet.beginGroup(), n.gullet.macros.set("\\cr", "\\\\\\relax"), n.gullet.beginGroup(); ; ) {
    e.push(n.parseExpression(!1, "\\\\")), n.gullet.endGroup(), n.gullet.beginGroup();
    var t = n.fetch().text;
    if (t === "&" || t === "\\\\")
      n.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new J("Expected \\\\ or \\cr or \\end", n.nextToken);
  }
  for (var r = [], a = [r], i = 0; i < e.length; i++) {
    for (var l = e[i], s = tu(), o = 0; o < l.length; o++)
      if (!ru(l[o]))
        s.body.push(l[o]);
      else {
        r.push(s), o += 1;
        var c = Ns(l[o]).text, h = new Array(2);
        if (h[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, h[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(c) > -1)) if ("<>AV".indexOf(c) > -1)
          for (var m = 0; m < 2; m++) {
            for (var f = !0, p = o + 1; p < l.length; p++) {
              if (Nd(l[p], c)) {
                f = !1, o = p;
                break;
              }
              if (ru(l[p]))
                throw new J("Missing a " + c + " character to complete a CD arrow.", l[p]);
              h[m].body.push(l[p]);
            }
            if (f)
              throw new J("Missing a " + c + " character to complete a CD arrow.", l[o]);
          }
        else
          throw new J('Expected one of "<>AV=|." after @', l[o]);
        var v = Rd(c, h, n), w = {
          type: "styling",
          body: [v],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(w), s = tu();
      }
    i % 2 === 0 ? r.push(s) : r.shift(), r = [], a.push(r);
  }
  n.gullet.endGroup(), n.gullet.endGroup();
  var S = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: S,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
Y({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: r.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = e.havingStyle(e.style.sup()), r = M.wrapFragment(ye(n.label, t, e), e);
    return r.classes.push("cd-label-" + n.side), r.style.bottom = G(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mrow", [Ce(n.label, e)]);
    return t = new P.MathNode("mpadded", [t]), t.setAttribute("width", "0"), n.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new P.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
Y({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = M.wrapFragment(ye(n.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(n, e) {
    return new P.MathNode("mrow", [Ce(n.fragment, e)]);
  }
});
Y({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    for (var {
      parser: t
    } = n, r = ce(e[0], "ordgroup"), a = r.body, i = "", l = 0; l < a.length; l++) {
      var s = ce(a[l], "textord");
      i += s.text;
    }
    var o = parseInt(i), c;
    if (isNaN(o))
      throw new J("\\@char has non-numeric argument " + i);
    if (o < 0 || o >= 1114111)
      throw new J("\\@char with invalid code point " + i);
    return o <= 65535 ? c = String.fromCharCode(o) : (o -= 65536, c = String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: c
    };
  }
});
var r4 = (n, e) => {
  var t = gt(n.body, e.withColor(n.color), !1);
  return M.makeFragment(t);
}, n4 = (n, e) => {
  var t = Yt(n.body, e.withColor(n.color)), r = new P.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", n.color), r;
};
Y({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = ce(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: Ze(a)
    };
  },
  htmlBuilder: r4,
  mathmlBuilder: n4
});
Y({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(n, e) {
    var {
      parser: t,
      breakOnTokenText: r
    } = n, a = ce(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: r4,
  mathmlBuilder: n4
});
Y({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null, i = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: r.mode,
      newLine: i,
      size: a && ce(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(n, e) {
    var t = M.makeSpan(["mspace"], [], e);
    return n.newLine && (t.classes.push("newline"), n.size && (t.style.marginTop = G(qe(n.size, e)))), t;
  },
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mspace");
    return n.newLine && (t.setAttribute("linebreak", "newline"), n.size && t.setAttribute("height", G(qe(n.size, e)))), t;
  }
});
var ss = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, a4 = (n) => {
  var e = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new J("Expected a control sequence", n);
  return e;
}, Od = (n) => {
  var e = n.gullet.popToken();
  return e.text === "=" && (e = n.gullet.popToken(), e.text === " " && (e = n.gullet.popToken())), e;
}, i4 = (n, e, t, r) => {
  var a = n.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !n.gullet.isExpandable(t.text)
  }), n.gullet.macros.set(e, a, r);
};
Y({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    e.consumeSpaces();
    var r = e.fetch();
    if (ss[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = ss[r.text]), ce(e.parseFunction(), "internal");
    throw new J("Invalid token after macro prefix", r);
  }
});
Y({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = e.gullet.popToken(), a = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new J("Expected a control sequence", r);
    for (var i = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new J('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new J('Argument number "' + r.text + '" out of order');
        i++, s.push([]);
      } else {
        if (r.text === "EOF")
          throw new J("Expected a macro definition");
        s[i].push(r.text);
      }
    var {
      tokens: o
    } = e.gullet.consumeArg();
    return l && o.unshift(l), (t === "\\edef" || t === "\\xdef") && (o = e.gullet.expandTokens(o), o.reverse()), e.gullet.macros.set(a, {
      tokens: o,
      numArgs: i,
      delimiters: s
    }, t === ss[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
Y({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = a4(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = Od(e);
    return i4(e, r, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
Y({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = a4(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return i4(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var On = function(e, t, r) {
  var a = Ke.math[e] && Ke.math[e].replace, i = Ms(a || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Ls = function(e, t, r, a) {
  var i = r.havingBaseStyle(t), l = M.makeSpan(a.concat(i.sizingClasses(r)), [e], r), s = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, l4 = function(e, t, r) {
  var a = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = G(i), e.height -= i, e.depth += i;
}, qd = function(e, t, r, a, i, l) {
  var s = M.makeSymbol(e, "Main-Regular", i, a), o = Ls(s, t, a, l);
  return r && l4(o, a, t), o;
}, Pd = function(e, t, r, a) {
  return M.makeSymbol(e, "Size" + t + "-Regular", r, a);
}, s4 = function(e, t, r, a, i, l) {
  var s = Pd(e, t, i, a), o = Ls(M.makeSpan(["delimsizing", "size" + t], [s], a), re.TEXT, a, l);
  return r && l4(o, a, re.TEXT), o;
}, El = function(e, t, r) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = M.makeSpan(["delimsizinginner", a], [M.makeSpan([], [M.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, Sl = function(e, t, r) {
  var a = G0["Size4-Regular"][e.charCodeAt(0)] ? G0["Size4-Regular"][e.charCodeAt(0)][4] : G0["Size1-Regular"][e.charCodeAt(0)][4], i = new Lr("inner", Q2(e, Math.round(1e3 * t))), l = new vr([i], {
    width: G(a),
    height: G(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + G(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), s = M.makeSvgSpan([], [l], r);
  return s.height = t, s.style.height = G(t), s.style.width = G(a), {
    type: "elem",
    elem: s
  };
}, os = 8e-3, Oa = {
  type: "kern",
  size: -1 * os
}, Hd = ["|", "\\lvert", "\\rvert", "\\vert"], Vd = ["\\|", "\\lVert", "\\rVert", "\\Vert"], o4 = function(e, t, r, a, i, l) {
  var s, o, c, h, m = "", f = 0;
  s = c = h = e, o = null;
  var p = "Size1-Regular";
  e === "\\uparrow" ? c = h = "⏐" : e === "\\Uparrow" ? c = h = "‖" : e === "\\downarrow" ? s = c = "⏐" : e === "\\Downarrow" ? s = c = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", c = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", c = "‖", h = "\\Downarrow") : ee.contains(Hd, e) ? (c = "∣", m = "vert", f = 333) : ee.contains(Vd, e) ? (c = "∥", m = "doublevert", f = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", c = "⎢", h = "⎣", p = "Size4-Regular", m = "lbrack", f = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", c = "⎥", h = "⎦", p = "Size4-Regular", m = "rbrack", f = 667) : e === "\\lfloor" || e === "⌊" ? (c = s = "⎢", h = "⎣", p = "Size4-Regular", m = "lfloor", f = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", c = h = "⎢", p = "Size4-Regular", m = "lceil", f = 667) : e === "\\rfloor" || e === "⌋" ? (c = s = "⎥", h = "⎦", p = "Size4-Regular", m = "rfloor", f = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", c = h = "⎥", p = "Size4-Regular", m = "rceil", f = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", c = "⎜", h = "⎝", p = "Size4-Regular", m = "lparen", f = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", c = "⎟", h = "⎠", p = "Size4-Regular", m = "rparen", f = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", h = "⎩", c = "⎪", p = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", h = "⎭", c = "⎪", p = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", h = "⎩", c = "⎪", p = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", h = "⎭", c = "⎪", p = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", h = "⎭", c = "⎪", p = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", h = "⎩", c = "⎪", p = "Size4-Regular");
  var v = On(s, p, i), w = v.height + v.depth, S = On(c, p, i), A = S.height + S.depth, b = On(h, p, i), y = b.height + b.depth, E = 0, C = 1;
  if (o !== null) {
    var T = On(o, p, i);
    E = T.height + T.depth, C = 2;
  }
  var z = w + y + E, I = Math.max(0, Math.ceil((t - z) / (C * A))), B = z + I * C * A, L = a.fontMetrics().axisHeight;
  r && (L *= a.sizeMultiplier);
  var R = B / 2 - L, W = [];
  if (m.length > 0) {
    var oe = B - w - y, q = Math.round(B * 1e3), ue = J2(m, Math.round(oe * 1e3)), ie = new Lr(m, ue), we = (f / 1e3).toFixed(3) + "em", me = (q / 1e3).toFixed(3) + "em", ke = new vr([ie], {
      width: we,
      height: me,
      viewBox: "0 0 " + f + " " + q
    }), De = M.makeSvgSpan([], [ke], a);
    De.height = q / 1e3, De.style.width = we, De.style.height = me, W.push({
      type: "elem",
      elem: De
    });
  } else {
    if (W.push(El(h, p, i)), W.push(Oa), o === null) {
      var te = B - w - y + 2 * os;
      W.push(Sl(c, te, a));
    } else {
      var ae = (B - w - y - E) / 2 + 2 * os;
      W.push(Sl(c, ae, a)), W.push(Oa), W.push(El(o, p, i)), W.push(Oa), W.push(Sl(c, ae, a));
    }
    W.push(Oa), W.push(El(s, p, i));
  }
  var ge = a.havingBaseStyle(re.TEXT), Le = M.makeVList({
    positionType: "bottom",
    positionData: R,
    children: W
  }, ge);
  return Ls(M.makeSpan(["delimsizing", "mult"], [Le], ge), re.TEXT, a, l);
}, xl = 80, Fl = 0.08, Cl = function(e, t, r, a, i) {
  var l = K2(e, a, r), s = new Lr(e, l), o = new vr([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: G(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return M.makeSvgSpan(["hide-tail"], [o], i);
}, Ud = function(e, t) {
  var r = t.havingBaseSizing(), a = f4("\\surd", e * r.sizeMultiplier, h4, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, c = 0, h = 0, m;
  return a.type === "small" ? (h = 1e3 + 1e3 * l + xl, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + Fl) / i, c = (1 + l) / i, s = Cl("sqrtMain", o, h, l, t), s.style.minWidth = "0.853em", m = 0.833 / i) : a.type === "large" ? (h = (1e3 + xl) * Pn[a.size], c = (Pn[a.size] + l) / i, o = (Pn[a.size] + l + Fl) / i, s = Cl("sqrtSize" + a.size, o, h, l, t), s.style.minWidth = "1.02em", m = 1 / i) : (o = e + l + Fl, c = e + l, h = Math.floor(1e3 * e + l) + xl, s = Cl("sqrtTall", o, h, l, t), s.style.minWidth = "0.742em", m = 1.056), s.height = c, s.style.height = G(o), {
    span: s,
    advanceWidth: m,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, u4 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Gd = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], c4 = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Pn = [0, 1.2, 1.8, 2.4, 3], jd = function(e, t, r, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ee.contains(u4, e) || ee.contains(c4, e))
    return s4(e, t, !1, r, a, i);
  if (ee.contains(Gd, e))
    return o4(e, Pn[t], !1, r, a, i);
  throw new J("Illegal delimiter: '" + e + "'");
}, Wd = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], Yd = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "stack"
}], h4 = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], Xd = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, f4 = function(e, t, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var s = On(e, Xd(r[l]), "math"), o = s.height + s.depth;
    if (r[l].type === "small") {
      var c = a.havingBaseStyle(r[l].style);
      o *= c.sizeMultiplier;
    }
    if (o > t)
      return r[l];
  }
  return r[r.length - 1];
}, d4 = function(e, t, r, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  ee.contains(c4, e) ? s = Wd : ee.contains(u4, e) ? s = h4 : s = Yd;
  var o = f4(e, t, s, a);
  return o.type === "small" ? qd(e, o.style, r, a, i, l) : o.type === "large" ? s4(e, o.size, r, a, i, l) : o4(e, t, r, a, i, l);
}, Zd = function(e, t, r, a, i, l) {
  var s = a.fontMetrics().axisHeight * a.sizeMultiplier, o = 901, c = 5 / a.fontMetrics().ptPerEm, h = Math.max(t - s, r + s), m = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    h / 500 * o,
    2 * h - c
  );
  return d4(e, m, !0, a, i, l);
}, K0 = {
  sqrtImage: Ud,
  sizedDelim: jd,
  sizeToMaxHeight: Pn,
  customSizedDelim: d4,
  leftRightDelim: Zd
}, nu = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, Kd = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Fi(n, e) {
  var t = Si(n);
  if (t && ee.contains(Kd, t.text))
    return t;
  throw t ? new J("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", n) : new J("Invalid delimiter type '" + n.type + "'", n);
}
Y({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = Fi(e[0], n);
    return {
      type: "delimsizing",
      mode: n.parser.mode,
      size: nu[n.funcName].size,
      mclass: nu[n.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => n.delim === "." ? M.makeSpan([n.mclass]) : K0.sizedDelim(n.delim, n.size, e, n.mode, [n.mclass]),
  mathmlBuilder: (n) => {
    var e = [];
    n.delim !== "." && e.push(r0(n.delim, n.mode));
    var t = new P.MathNode("mo", e);
    n.mclass === "mopen" || n.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = G(K0.sizeToMaxHeight[n.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function au(n) {
  if (!n.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
Y({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = n.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new J("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: n.parser.mode,
      delim: Fi(e[0], n).text,
      color: t
      // undefined if not set via \color
    };
  }
});
Y({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = Fi(e[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = ce(r.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: r.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (n, e) => {
    au(n);
    for (var t = gt(n.body, e, !0, ["mopen", "mclose"]), r = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (r = Math.max(t[l].height, r), a = Math.max(t[l].depth, a));
    r *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var s;
    if (n.left === "." ? s = Xn(e, ["mopen"]) : s = K0.leftRightDelim(n.left, r, a, e, n.mode, ["mopen"]), t.unshift(s), i)
      for (var o = 1; o < t.length; o++) {
        var c = t[o], h = c.isMiddle;
        h && (t[o] = K0.leftRightDelim(h.delim, r, a, h.options, n.mode, []));
      }
    var m;
    if (n.right === ".")
      m = Xn(e, ["mclose"]);
    else {
      var f = n.rightColor ? e.withColor(n.rightColor) : e;
      m = K0.leftRightDelim(n.right, r, a, f, n.mode, ["mclose"]);
    }
    return t.push(m), M.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (n, e) => {
    au(n);
    var t = Yt(n.body, e);
    if (n.left !== ".") {
      var r = new P.MathNode("mo", [r0(n.left, n.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (n.right !== ".") {
      var a = new P.MathNode("mo", [r0(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), t.push(a);
    }
    return zs(t);
  }
});
Y({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = Fi(e[0], n);
    if (!n.parser.leftrightDepth)
      throw new J("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: n.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    if (n.delim === ".")
      t = Xn(e, []);
    else {
      t = K0.sizedDelim(n.delim, 1, e, n.mode, []);
      var r = {
        delim: n.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (n, e) => {
    var t = n.delim === "\\vert" || n.delim === "|" ? r0("|", "text") : r0(n.delim, n.mode), r = new P.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var Os = (n, e) => {
  var t = M.wrapFragment(ye(n.body, e), e), r = n.label.slice(1), a = e.sizeMultiplier, i, l = 0, s = ee.isCharacterBox(n.body);
  if (r === "sout")
    i = M.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var o = qe({
      number: 0.6,
      unit: "pt"
    }, e), c = qe({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    a = a / h.sizeMultiplier;
    var m = t.height + t.depth + o + c;
    t.style.paddingLeft = G(m / 2 + o);
    var f = Math.floor(1e3 * m * a), p = X2(f), v = new vr([new Lr("phase", p)], {
      width: "400em",
      height: G(f / 1e3),
      viewBox: "0 0 400000 " + f,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = M.makeSvgSpan(["hide-tail"], [v], e), i.style.height = G(m), l = t.depth + o + c;
  } else {
    /cancel/.test(r) ? s || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var w = 0, S = 0, A = 0;
    /box/.test(r) ? (A = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), w = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : A), S = w) : r === "angl" ? (A = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), w = 4 * A, S = Math.max(0, 0.25 - t.depth)) : (w = s ? 0.2 : 0, S = w), i = er.encloseSpan(t, r, w, S, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = G(A)) : r === "angl" && A !== 0.049 && (i.style.borderTopWidth = G(A), i.style.borderRightWidth = G(A)), l = t.depth + S, n.backgroundColor && (i.style.backgroundColor = n.backgroundColor, n.borderColor && (i.style.borderColor = n.borderColor));
  }
  var b;
  if (n.backgroundColor)
    b = M.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var y = /cancel|phase/.test(r) ? ["svg-align"] : [];
    b = M.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: l,
          wrapperClasses: y
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (b.height = t.height, b.depth = t.depth), /cancel/.test(r) && !s ? M.makeSpan(["mord", "cancel-lap"], [b], e) : M.makeSpan(["mord"], [b], e);
}, qs = (n, e) => {
  var t = 0, r = new P.MathNode(n.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Ce(n.body, e)]);
  switch (n.label) {
    case "\\cancel":
      r.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      r.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      r.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      r.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      r.setAttribute("notation", "box");
      break;
    case "\\angl":
      r.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * t + "pt"), r.setAttribute("height", "+" + 2 * t + "pt"), r.setAttribute("lspace", t + "pt"), r.setAttribute("voffset", t + "pt"), n.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        r.setAttribute("style", "border: " + a + "em solid " + String(n.borderColor));
      }
      break;
    case "\\xcancel":
      r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return n.backgroundColor && r.setAttribute("mathbackground", n.backgroundColor), r;
};
Y({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n, i = ce(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Os,
  mathmlBuilder: qs
});
Y({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n, i = ce(e[0], "color-token").color, l = ce(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: Os,
  mathmlBuilder: qs
});
Y({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
Y({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: r,
      body: a
    };
  },
  htmlBuilder: Os,
  mathmlBuilder: qs
});
Y({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var m4 = {};
function I0(n) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = n, s = {
    type: e,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, o = 0; o < t.length; ++o)
    m4[t[o]] = s;
  i && (ni[e] = i), l && (ai[e] = l);
}
var Qd = {};
function _(n, e) {
  Qd[n] = e;
}
function iu(n) {
  var e = [];
  n.consumeSpaces();
  var t = n.fetch().text;
  for (t === "\\relax" && (n.consume(), n.consumeSpaces(), t = n.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    n.consume(), e.push(t === "\\hdashline"), n.consumeSpaces(), t = n.fetch().text;
  return e;
}
var Ci = (n) => {
  var e = n.parser.settings;
  if (!e.displayMode)
    throw new J("{" + n.envName + "} can be used only in display mode.");
};
function Ps(n) {
  if (n.indexOf("ed") === -1)
    return n.indexOf("*") === -1;
}
function yr(n, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: a,
    cols: i,
    arraystretch: l,
    colSeparationType: s,
    autoTag: o,
    singleRow: c,
    emptySingleRow: h,
    maxNumCols: m,
    leqno: f
  } = e;
  if (n.gullet.beginGroup(), c || n.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var p = n.gullet.expandMacroAsText("\\arraystretch");
    if (p == null)
      l = 1;
    else if (l = parseFloat(p), !l || l < 0)
      throw new J("Invalid \\arraystretch: " + p);
  }
  n.gullet.beginGroup();
  var v = [], w = [v], S = [], A = [], b = o != null ? [] : void 0;
  function y() {
    o && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function E() {
    b && (n.gullet.macros.get("\\df@tag") ? (b.push(n.subparse([new Cs("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : b.push(!!o && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (y(), A.push(iu(n)); ; ) {
    var C = n.parseExpression(!1, c ? "\\end" : "\\\\");
    n.gullet.endGroup(), n.gullet.beginGroup(), C = {
      type: "ordgroup",
      mode: n.mode,
      body: C
    }, t && (C = {
      type: "styling",
      mode: n.mode,
      style: t,
      body: [C]
    }), v.push(C);
    var T = n.fetch().text;
    if (T === "&") {
      if (m && v.length === m) {
        if (c || s)
          throw new J("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (T === "\\end") {
      E(), v.length === 1 && C.type === "styling" && C.body[0].body.length === 0 && (w.length > 1 || !h) && w.pop(), A.length < w.length + 1 && A.push([]);
      break;
    } else if (T === "\\\\") {
      n.consume();
      var z = void 0;
      n.gullet.future().text !== " " && (z = n.parseSizeGroup(!0)), S.push(z ? z.value : null), E(), A.push(iu(n)), v = [], w.push(v), y();
    } else
      throw new J("Expected & or \\\\ or \\cr or \\end", n.nextToken);
  }
  return n.gullet.endGroup(), n.gullet.endGroup(), {
    type: "array",
    mode: n.mode,
    addJot: a,
    arraystretch: l,
    body: w,
    cols: i,
    rowGaps: S,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: A,
    colSeparationType: s,
    tags: b,
    leqno: f
  };
}
function Hs(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var N0 = function(e, t) {
  var r, a, i = e.body.length, l = e.hLinesBeforeRow, s = 0, o = new Array(i), c = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), m = 1 / t.fontMetrics().ptPerEm, f = 5 * m;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var p = t.havingStyle(re.SCRIPT).sizeMultiplier;
    f = 0.2778 * (p / t.sizeMultiplier);
  }
  var v = e.colSeparationType === "CD" ? qe({
    number: 3,
    unit: "ex"
  }, t) : 12 * m, w = 3 * m, S = e.arraystretch * v, A = 0.7 * S, b = 0.3 * S, y = 0;
  function E(N) {
    for (var le = 0; le < N.length; ++le)
      le > 0 && (y += 0.25), c.push({
        pos: y,
        isDashed: N[le]
      });
  }
  for (E(l[0]), r = 0; r < e.body.length; ++r) {
    var C = e.body[r], T = A, z = b;
    s < C.length && (s = C.length);
    var I = new Array(C.length);
    for (a = 0; a < C.length; ++a) {
      var B = ye(C[a], t);
      z < B.depth && (z = B.depth), T < B.height && (T = B.height), I[a] = B;
    }
    var L = e.rowGaps[r], R = 0;
    L && (R = qe(L, t), R > 0 && (R += b, z < R && (z = R), R = 0)), e.addJot && (z += w), I.height = T, I.depth = z, y += T, I.pos = y, y += z + R, o[r] = I, E(l[r + 1]);
  }
  var W = y / 2 + t.fontMetrics().axisHeight, oe = e.cols || [], q = [], ue, ie, we = [];
  if (e.tags && e.tags.some((N) => N))
    for (r = 0; r < i; ++r) {
      var me = o[r], ke = me.pos - W, De = e.tags[r], te = void 0;
      De === !0 ? te = M.makeSpan(["eqn-num"], [], t) : De === !1 ? te = M.makeSpan([], [], t) : te = M.makeSpan([], gt(De, t, !0), t), te.depth = me.depth, te.height = me.height, we.push({
        type: "elem",
        elem: te,
        shift: ke
      });
    }
  for (
    a = 0, ie = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || ie < oe.length;
    ++a, ++ie
  ) {
    for (var ae = oe[ie] || {}, ge = !0; ae.type === "separator"; ) {
      if (ge || (ue = M.makeSpan(["arraycolsep"], []), ue.style.width = G(t.fontMetrics().doubleRuleSep), q.push(ue)), ae.separator === "|" || ae.separator === ":") {
        var Le = ae.separator === "|" ? "solid" : "dashed", H = M.makeSpan(["vertical-separator"], [], t);
        H.style.height = G(y), H.style.borderRightWidth = G(h), H.style.borderRightStyle = Le, H.style.margin = "0 " + G(-h / 2);
        var U = y - W;
        U && (H.style.verticalAlign = G(-U)), q.push(H);
      } else
        throw new J("Invalid separator type: " + ae.separator);
      ie++, ae = oe[ie] || {}, ge = !1;
    }
    if (!(a >= s)) {
      var fe = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (fe = ee.deflt(ae.pregap, f), fe !== 0 && (ue = M.makeSpan(["arraycolsep"], []), ue.style.width = G(fe), q.push(ue)));
      var ve = [];
      for (r = 0; r < i; ++r) {
        var Se = o[r], Me = Se[a];
        if (Me) {
          var ze = Se.pos - W;
          Me.depth = Se.depth, Me.height = Se.height, ve.push({
            type: "elem",
            elem: Me,
            shift: ze
          });
        }
      }
      ve = M.makeVList({
        positionType: "individualShift",
        children: ve
      }, t), ve = M.makeSpan(["col-align-" + (ae.align || "c")], [ve]), q.push(ve), (a < s - 1 || e.hskipBeforeAndAfter) && (fe = ee.deflt(ae.postgap, f), fe !== 0 && (ue = M.makeSpan(["arraycolsep"], []), ue.style.width = G(fe), q.push(ue)));
    }
  }
  if (o = M.makeSpan(["mtable"], q), c.length > 0) {
    for (var Ye = M.makeLineSpan("hline", t, h), ct = M.makeLineSpan("hdashline", t, h), Xe = [{
      type: "elem",
      elem: o,
      shift: 0
    }]; c.length > 0; ) {
      var Ue = c.pop(), Ge = Ue.pos - W;
      Ue.isDashed ? Xe.push({
        type: "elem",
        elem: ct,
        shift: Ge
      }) : Xe.push({
        type: "elem",
        elem: Ye,
        shift: Ge
      });
    }
    o = M.makeVList({
      positionType: "individualShift",
      children: Xe
    }, t);
  }
  if (we.length === 0)
    return M.makeSpan(["mord"], [o], t);
  var j = M.makeVList({
    positionType: "individualShift",
    children: we
  }, t);
  return j = M.makeSpan(["tag"], [j], t), M.makeFragment([o, j]);
}, Jd = {
  c: "center ",
  l: "left ",
  r: "right "
}, R0 = function(e, t) {
  for (var r = [], a = new P.MathNode("mtd", [], ["mtr-glue"]), i = new P.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], c = 0; c < s.length; c++)
      o.push(new P.MathNode("mtd", [Ce(s[c], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), r.push(new P.MathNode("mtr", o));
  }
  var h = new P.MathNode("mtable", r), m = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", G(m));
  var f = "", p = "";
  if (e.cols && e.cols.length > 0) {
    var v = e.cols, w = "", S = !1, A = 0, b = v.length;
    v[0].type === "separator" && (f += "top ", A = 1), v[v.length - 1].type === "separator" && (f += "bottom ", b -= 1);
    for (var y = A; y < b; y++)
      v[y].type === "align" ? (p += Jd[v[y].align], S && (w += "none "), S = !0) : v[y].type === "separator" && S && (w += v[y].separator === "|" ? "solid " : "dashed ", S = !1);
    h.setAttribute("columnalign", p.trim()), /[sd]/.test(w) && h.setAttribute("columnlines", w.trim());
  }
  if (e.colSeparationType === "align") {
    for (var E = e.cols || [], C = "", T = 1; T < E.length; T++)
      C += T % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", C.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var z = "", I = e.hLinesBeforeRow;
  f += I[0].length > 0 ? "left " : "", f += I[I.length - 1].length > 0 ? "right " : "";
  for (var B = 1; B < I.length - 1; B++)
    z += I[B].length === 0 ? "none " : I[B][0] ? "dashed " : "solid ";
  return /[sd]/.test(z) && h.setAttribute("rowlines", z.trim()), f !== "" && (h = new P.MathNode("menclose", [h]), h.setAttribute("notation", f.trim())), e.arraystretch && e.arraystretch < 1 && (h = new P.MathNode("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, p4 = function(e, t) {
  e.envName.indexOf("ed") === -1 && Ci(e);
  var r = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = yr(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : Ps(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s, o = 0, c = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var h = "", m = 0; m < t[0].body.length; m++) {
      var f = ce(t[0].body[m], "textord");
      h += f.text;
    }
    s = Number(h), o = s * 2;
  }
  var p = !o;
  l.body.forEach(function(A) {
    for (var b = 1; b < A.length; b += 2) {
      var y = ce(A[b], "styling"), E = ce(y.body[0], "ordgroup");
      E.body.unshift(c);
    }
    if (p)
      o < A.length && (o = A.length);
    else {
      var C = A.length / 2;
      if (s < C)
        throw new J("Too many math in a row: " + ("expected " + s + ", but got " + C), A[0]);
    }
  });
  for (var v = 0; v < o; ++v) {
    var w = "r", S = 0;
    v % 2 === 1 ? w = "l" : v > 0 && p && (S = 1), r[v] = {
      type: "align",
      align: w,
      pregap: S,
      postgap: 0
    };
  }
  return l.colSeparationType = p ? "align" : "alignat", l;
};
I0({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = Si(e[0]), r = t ? [e[0]] : ce(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Ns(l), o = s.text;
      if ("lcr".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      if (o === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (o === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new J("Unknown column alignment: " + o, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return yr(n.parser, i, Hs(n.envName));
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[n.envName.replace("*", "")], t = "c", r = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (n.envName.charAt(n.envName.length - 1) === "*") {
      var a = n.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, "lcr".indexOf(t) === -1)
          throw new J("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = yr(n.parser, r, Hs(n.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
    return i.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: n.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 0.5
    }, t = yr(n.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = Si(e[0]), r = t ? [e[0]] : ce(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Ns(l), o = s.text;
      if ("lc".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      throw new J("Unknown column alignment: " + o, l);
    });
    if (a.length > 1)
      throw new J("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = yr(n.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new J("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = yr(n.parser, e, Hs(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [t],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: p4,
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    ee.contains(["gather", "gather*"], n.envName) && Ci(n);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Ps(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return yr(n.parser, e, "display");
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: p4,
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    Ci(n);
    var e = {
      autoTag: Ps(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return yr(n.parser, e, "display");
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
I0({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return Ci(n), Ld(n.parser);
  },
  htmlBuilder: N0,
  mathmlBuilder: R0
});
_("\\nonumber", "\\gdef\\@eqnsw{0}");
_("\\notag", "\\nonumber");
Y({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(n, e) {
    throw new J(n.funcName + " valid only within array environment");
  }
});
var lu = m4;
Y({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    if (a.type !== "ordgroup")
      throw new J("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += ce(a.body[l], "textord").text;
    if (r === "\\begin") {
      if (!lu.hasOwnProperty(i))
        throw new J("No such environment: " + i, a);
      var s = lu[i], {
        args: o,
        optArgs: c
      } = t.parseArguments("\\begin{" + i + "}", s), h = {
        mode: t.mode,
        envName: i,
        parser: t
      }, m = s.handler(h, o, c);
      t.expect("\\end", !1);
      var f = t.nextToken, p = ce(t.parseFunction(), "environment");
      if (p.name !== i)
        throw new J("Mismatch: \\begin{" + i + "} matched by \\end{" + p.name + "}", f);
      return m;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var g4 = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return ye(n.body, r);
}, _4 = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return Ce(n.body, r);
}, su = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
Y({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = ii(e[0]), i = r;
    return i in su && (i = su[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: g4,
  mathmlBuilder: _4
});
Y({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0], a = ee.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: xi(r),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: r
      }],
      isCharacterBox: a
    };
  }
});
Y({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r,
      breakOnTokenText: a
    } = n, {
      mode: i
    } = t, l = t.parseExpression(!0, a), s = "math" + r.slice(1);
    return {
      type: "font",
      mode: i,
      font: s,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: g4,
  mathmlBuilder: _4
});
var v4 = (n, e) => {
  var t = e;
  return n === "display" ? t = t.id >= re.SCRIPT.id ? t.text() : re.DISPLAY : n === "text" && t.size === re.DISPLAY.size ? t = re.TEXT : n === "script" ? t = re.SCRIPT : n === "scriptscript" && (t = re.SCRIPTSCRIPT), t;
}, Vs = (n, e) => {
  var t = v4(n.size, e.style), r = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(r);
  var l = ye(n.numer, i, e);
  if (n.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, o = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < o ? o : l.depth;
  }
  i = e.havingStyle(a);
  var c = ye(n.denom, i, e), h, m, f;
  n.hasBarLine ? (n.barSize ? (m = qe(n.barSize, e), h = M.makeLineSpan("frac-line", e, m)) : h = M.makeLineSpan("frac-line", e), m = h.height, f = h.height) : (h = null, m = 0, f = e.fontMetrics().defaultRuleThickness);
  var p, v, w;
  t.size === re.DISPLAY.size || n.size === "display" ? (p = e.fontMetrics().num1, m > 0 ? v = 3 * f : v = 7 * f, w = e.fontMetrics().denom1) : (m > 0 ? (p = e.fontMetrics().num2, v = f) : (p = e.fontMetrics().num3, v = 3 * f), w = e.fontMetrics().denom2);
  var S;
  if (h) {
    var b = e.fontMetrics().axisHeight;
    p - l.depth - (b + 0.5 * m) < v && (p += v - (p - l.depth - (b + 0.5 * m))), b - 0.5 * m - (c.height - w) < v && (w += v - (b - 0.5 * m - (c.height - w)));
    var y = -(b - 0.5 * m);
    S = M.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: c,
        shift: w
      }, {
        type: "elem",
        elem: h,
        shift: y
      }, {
        type: "elem",
        elem: l,
        shift: -p
      }]
    }, e);
  } else {
    var A = p - l.depth - (c.height - w);
    A < v && (p += 0.5 * (v - A), w += 0.5 * (v - A)), S = M.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: c,
        shift: w
      }, {
        type: "elem",
        elem: l,
        shift: -p
      }]
    }, e);
  }
  i = e.havingStyle(t), S.height *= i.sizeMultiplier / e.sizeMultiplier, S.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var E;
  t.size === re.DISPLAY.size ? E = e.fontMetrics().delim1 : t.size === re.SCRIPTSCRIPT.size ? E = e.havingStyle(re.SCRIPT).fontMetrics().delim2 : E = e.fontMetrics().delim2;
  var C, T;
  return n.leftDelim == null ? C = Xn(e, ["mopen"]) : C = K0.customSizedDelim(n.leftDelim, E, !0, e.havingStyle(t), n.mode, ["mopen"]), n.continued ? T = M.makeSpan([]) : n.rightDelim == null ? T = Xn(e, ["mclose"]) : T = K0.customSizedDelim(n.rightDelim, E, !0, e.havingStyle(t), n.mode, ["mclose"]), M.makeSpan(["mord"].concat(i.sizingClasses(e)), [C, M.makeSpan(["mfrac"], [S]), T], e);
}, Us = (n, e) => {
  var t = new P.MathNode("mfrac", [Ce(n.numer, e), Ce(n.denom, e)]);
  if (!n.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = qe(n.barSize, e);
    t.setAttribute("linethickness", G(r));
  }
  var a = v4(n.size, e.style);
  if (a.size !== e.style.size) {
    t = new P.MathNode("mstyle", [t]);
    var i = a.size === re.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (n.leftDelim != null || n.rightDelim != null) {
    var l = [];
    if (n.leftDelim != null) {
      var s = new P.MathNode("mo", [new P.TextNode(n.leftDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    if (l.push(t), n.rightDelim != null) {
      var o = new P.MathNode("mo", [new P.TextNode(n.rightDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    return zs(l);
  }
  return t;
};
Y({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = e[1], l, s = null, o = null, c = "auto";
    switch (r) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, s = "(", o = ")";
        break;
      case "\\\\bracefrac":
        l = !1, s = "\\{", o = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, s = "[", o = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (r) {
      case "\\dfrac":
      case "\\dbinom":
        c = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        c = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: l,
      leftDelim: s,
      rightDelim: o,
      size: c,
      barSize: null
    };
  },
  htmlBuilder: Vs,
  mathmlBuilder: Us
});
Y({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
Y({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t,
      token: r
    } = n, a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: r
    };
  }
});
var ou = ["display", "text", "script", "scriptscript"], uu = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
Y({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = e[4], a = e[5], i = ii(e[0]), l = i.type === "atom" && i.family === "open" ? uu(i.text) : null, s = ii(e[1]), o = s.type === "atom" && s.family === "close" ? uu(s.text) : null, c = ce(e[2], "size"), h, m = null;
    c.isBlank ? h = !0 : (m = c.value, h = m.number > 0);
    var f = "auto", p = e[3];
    if (p.type === "ordgroup") {
      if (p.body.length > 0) {
        var v = ce(p.body[0], "textord");
        f = ou[Number(v.text)];
      }
    } else
      p = ce(p, "textord"), f = ou[Number(p.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: a,
      continued: !1,
      hasBarLine: h,
      barSize: m,
      leftDelim: l,
      rightDelim: o,
      size: f
    };
  },
  htmlBuilder: Vs,
  mathmlBuilder: Us
});
Y({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r,
      token: a
    } = n;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: ce(e[0], "size").value,
      token: a
    };
  }
});
Y({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = z2(ce(e[1], "infix").size), l = e[2], s = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: l,
      continued: !1,
      hasBarLine: s,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: Vs,
  mathmlBuilder: Us
});
var b4 = (n, e) => {
  var t = e.style, r, a;
  n.type === "supsub" ? (r = n.sup ? ye(n.sup, e.havingStyle(t.sup()), e) : ye(n.sub, e.havingStyle(t.sub()), e), a = ce(n.base, "horizBrace")) : a = ce(n, "horizBrace");
  var i = ye(a.base, e.havingBaseStyle(re.DISPLAY)), l = er.svgSpan(a, e), s;
  if (a.isOver ? (s = M.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), s.children[0].children[0].children[1].classes.push("svg-align")) : (s = M.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), s.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var o = M.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
    a.isOver ? s = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: r
      }]
    }, e) : s = M.makeVList({
      positionType: "bottom",
      positionData: o.depth + 0.2 + r.height + r.depth,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: o
      }]
    }, e);
  }
  return M.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
}, $d = (n, e) => {
  var t = er.mathMLnode(n.label);
  return new P.MathNode(n.isOver ? "mover" : "munder", [Ce(n.base, e), t]);
};
Y({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: r,
      isOver: /^\\over/.test(r),
      base: e[0]
    };
  },
  htmlBuilder: b4,
  mathmlBuilder: $d
});
Y({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[1], a = ce(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: Ze(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.body, e, !1);
    return M.makeAnchor(n.href, [], t, e);
  },
  mathmlBuilder: (n, e) => {
    var t = br(n.body, e);
    return t instanceof d0 || (t = new d0("mrow", [t])), t.setAttribute("href", n.href), t;
  }
});
Y({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = ce(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: r
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < r.length; i++) {
      var l = r[i];
      l === "~" && (l = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var s = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: r,
      body: Ze(s)
    };
  }
});
Y({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "hbox",
      mode: t.mode,
      body: Ze(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = gt(n.body, e, !1);
    return M.makeFragment(t);
  },
  mathmlBuilder(n, e) {
    return new P.MathNode("mrow", Yt(n.body, e));
  }
});
Y({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r,
      token: a
    } = n, i = ce(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var s, o = {};
    switch (r) {
      case "\\htmlClass":
        o.class = i, s = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        o.id = i, s = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        o.style = i, s = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var c = i.split(","), h = 0; h < c.length; h++) {
          var m = c[h].split("=");
          if (m.length !== 2)
            throw new J("Error parsing key-value for \\htmlData");
          o["data-" + m[0].trim()] = m[1].trim();
        }
        s = {
          command: "\\htmlData",
          attributes: o
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(s) ? {
      type: "html",
      mode: t.mode,
      attributes: o,
      body: Ze(l)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.body, e, !1), r = ["enclosing"];
    n.attributes.class && r.push(...n.attributes.class.trim().split(/\s+/));
    var a = M.makeSpan(r, t, e);
    for (var i in n.attributes)
      i !== "class" && n.attributes.hasOwnProperty(i) && a.setAttribute(i, n.attributes[i]);
    return a;
  },
  mathmlBuilder: (n, e) => br(n.body, e)
});
Y({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: Ze(e[0]),
      mathml: Ze(e[1])
    };
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.html, e, !1);
    return M.makeFragment(t);
  },
  mathmlBuilder: (n, e) => br(n.mathml, e)
});
var Tl = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new J("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!ed(r))
    throw new J("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
Y({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (n, e, t) => {
    var {
      parser: r
    } = n, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, s = "";
    if (t[0])
      for (var o = ce(t[0], "raw").string, c = o.split(","), h = 0; h < c.length; h++) {
        var m = c[h].split("=");
        if (m.length === 2) {
          var f = m[1].trim();
          switch (m[0].trim()) {
            case "alt":
              s = f;
              break;
            case "width":
              a = Tl(f);
              break;
            case "height":
              i = Tl(f);
              break;
            case "totalheight":
              l = Tl(f);
              break;
            default:
              throw new J("Invalid key: '" + m[0] + "' in \\includegraphics.");
          }
        }
      }
    var p = ce(e[0], "url").url;
    return s === "" && (s = p, s = s.replace(/^.*[\\/]/, ""), s = s.substring(0, s.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: p
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: s,
      width: a,
      height: i,
      totalheight: l,
      src: p
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (n, e) => {
    var t = qe(n.height, e), r = 0;
    n.totalheight.number > 0 && (r = qe(n.totalheight, e) - t);
    var a = 0;
    n.width.number > 0 && (a = qe(n.width, e));
    var i = {
      height: G(t + r)
    };
    a > 0 && (i.width = G(a)), r > 0 && (i.verticalAlign = G(-r));
    var l = new td(n.src, n.alt, i);
    return l.height = t, l.depth = r, l;
  },
  mathmlBuilder: (n, e) => {
    var t = new P.MathNode("mglyph", []);
    t.setAttribute("alt", n.alt);
    var r = qe(n.height, e), a = 0;
    if (n.totalheight.number > 0 && (a = qe(n.totalheight, e) - r, t.setAttribute("valign", G(-a))), t.setAttribute("height", G(r + a)), n.width.number > 0) {
      var i = qe(n.width, e);
      t.setAttribute("width", G(i));
    }
    return t.setAttribute("src", n.src), t;
  }
});
Y({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = ce(e[0], "size");
    if (t.settings.strict) {
      var i = r[1] === "m", l = a.value.unit === "mu";
      i ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(n, e) {
    return M.makeGlue(n.dimension, e);
  },
  mathmlBuilder(n, e) {
    var t = qe(n.dimension, e);
    return new P.SpaceNode(t);
  }
});
Y({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: r.slice(5),
      body: a
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    n.alignment === "clap" ? (t = M.makeSpan([], [ye(n.body, e)]), t = M.makeSpan(["inner"], [t], e)) : t = M.makeSpan(["inner"], [ye(n.body, e)]);
    var r = M.makeSpan(["fix"], []), a = M.makeSpan([n.alignment], [t, r], e), i = M.makeSpan(["strut"]);
    return i.style.height = G(a.height + a.depth), a.depth && (i.style.verticalAlign = G(-a.depth)), a.children.unshift(i), a = M.makeSpan(["thinbox"], [a], e), M.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new P.MathNode("mpadded", [Ce(n.body, e)]);
    if (n.alignment !== "rlap") {
      var r = n.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
Y({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    var {
      funcName: t,
      parser: r
    } = n, a = r.mode;
    r.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", l = r.parseExpression(!1, i);
    return r.expect(i), r.switchMode(a), {
      type: "styling",
      mode: r.mode,
      style: "text",
      body: l
    };
  }
});
Y({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    throw new J("Mismatched " + n.funcName);
  }
});
var cu = (n, e) => {
  switch (e.style.size) {
    case re.DISPLAY.size:
      return n.display;
    case re.TEXT.size:
      return n.text;
    case re.SCRIPT.size:
      return n.script;
    case re.SCRIPTSCRIPT.size:
      return n.scriptscript;
    default:
      return n.text;
  }
};
Y({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: Ze(e[0]),
      text: Ze(e[1]),
      script: Ze(e[2]),
      scriptscript: Ze(e[3])
    };
  },
  htmlBuilder: (n, e) => {
    var t = cu(n, e), r = gt(t, e, !1);
    return M.makeFragment(r);
  },
  mathmlBuilder: (n, e) => {
    var t = cu(n, e);
    return br(t, e);
  }
});
var y4 = (n, e, t, r, a, i, l) => {
  n = M.makeSpan([], [n]);
  var s = t && ee.isCharacterBox(t), o, c;
  if (e) {
    var h = ye(e, r.havingStyle(a.sup()), r);
    c = {
      elem: h,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var m = ye(t, r.havingStyle(a.sub()), r);
    o = {
      elem: m,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - m.height)
    };
  }
  var f;
  if (c && o) {
    var p = r.fontMetrics().bigOpSpacing5 + o.elem.height + o.elem.depth + o.kern + n.depth + l;
    f = M.makeVList({
      positionType: "bottom",
      positionData: p,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: G(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: G(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (o) {
    var v = n.height - l;
    f = M.makeVList({
      positionType: "top",
      positionData: v,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: G(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: n
      }]
    }, r);
  } else if (c) {
    var w = n.depth + l;
    f = M.makeVList({
      positionType: "bottom",
      positionData: w,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: G(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return n;
  var S = [f];
  if (o && i !== 0 && !s) {
    var A = M.makeSpan(["mspace"], [], r);
    A.style.marginRight = G(i), S.unshift(A);
  }
  return M.makeSpan(["mop", "op-limits"], S, r);
}, w4 = ["\\smallint"], gn = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = ce(n.base, "op"), a = !0) : i = ce(n, "op");
  var l = e.style, s = !1;
  l.size === re.DISPLAY.size && i.symbol && !ee.contains(w4, i.name) && (s = !0);
  var o;
  if (i.symbol) {
    var c = s ? "Size2-Regular" : "Size1-Regular", h = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (h = i.name.slice(1), i.name = h === "oiint" ? "\\iint" : "\\iiint"), o = M.makeSymbol(i.name, c, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), h.length > 0) {
      var m = o.italic, f = M.staticSvg(h + "Size" + (s ? "2" : "1"), e);
      o = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: o,
          shift: 0
        }, {
          type: "elem",
          elem: f,
          shift: s ? 0.08 : 0
        }]
      }, e), i.name = "\\" + h, o.classes.unshift("mop"), o.italic = m;
    }
  } else if (i.body) {
    var p = gt(i.body, e, !0);
    p.length === 1 && p[0] instanceof z0 ? (o = p[0], o.classes[0] = "mop") : o = M.makeSpan(["mop"], p, e);
  } else {
    for (var v = [], w = 1; w < i.name.length; w++)
      v.push(M.mathsym(i.name[w], i.mode, e));
    o = M.makeSpan(["mop"], v, e);
  }
  var S = 0, A = 0;
  return (o instanceof z0 || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (S = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, A = o.italic), a ? y4(o, t, r, e, l, A, S) : (S && (o.style.position = "relative", o.style.top = G(S)), o);
}, ra = (n, e) => {
  var t;
  if (n.symbol)
    t = new d0("mo", [r0(n.name, n.mode)]), ee.contains(w4, n.name) && t.setAttribute("largeop", "false");
  else if (n.body)
    t = new d0("mo", Yt(n.body, e));
  else {
    t = new d0("mi", [new qn(n.name.slice(1))]);
    var r = new d0("mo", [r0("⁡", "text")]);
    n.parentIsSupSub ? t = new d0("mrow", [t, r]) : t = Jc([t, r]);
  }
  return t;
}, em = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
Y({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = r;
    return a.length === 1 && (a = em[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: ra
});
Y({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: Ze(r)
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: ra
});
var tm = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
Y({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: ra
});
Y({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: ra
});
Y({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = t;
    return r.length === 1 && (r = tm[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: gn,
  mathmlBuilder: ra
});
var k4 = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = ce(n.base, "operatorname"), a = !0) : i = ce(n, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var s = i.body.map((m) => {
      var f = m.text;
      return typeof f == "string" ? {
        type: "textord",
        mode: m.mode,
        text: f
      } : m;
    }), o = gt(s, e.withFont("mathrm"), !0), c = 0; c < o.length; c++) {
      var h = o[c];
      h instanceof z0 && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = M.makeSpan(["mop"], o, e);
  } else
    l = M.makeSpan(["mop"], [], e);
  return a ? y4(l, t, r, e, e.style, 0, 0) : l;
}, rm = (n, e) => {
  for (var t = Yt(n.body, e.withFont("mathrm")), r = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof P.SpaceNode)) if (i instanceof P.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof P.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
          break;
        }
        default:
          r = !1;
      }
    else
      r = !1;
  }
  if (r) {
    var s = t.map((h) => h.toText()).join("");
    t = [new P.TextNode(s)];
  }
  var o = new P.MathNode("mi", t);
  o.setAttribute("mathvariant", "normal");
  var c = new P.MathNode("mo", [r0("⁡", "text")]);
  return n.parentIsSupSub ? new P.MathNode("mrow", [o, c]) : P.newDocumentFragment([o, c]);
};
Y({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: Ze(a),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: k4,
  mathmlBuilder: rm
});
_("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Pr({
  type: "ordgroup",
  htmlBuilder(n, e) {
    return n.semisimple ? M.makeFragment(gt(n.body, e, !1)) : M.makeSpan(["mord"], gt(n.body, e, !0), e);
  },
  mathmlBuilder(n, e) {
    return br(n.body, e, !0);
  }
});
Y({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder(n, e) {
    var t = ye(n.body, e.havingCrampedStyle()), r = M.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: a
      }]
    }, e);
    return M.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mo", [new P.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new P.MathNode("mover", [Ce(n.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
Y({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: Ze(r)
    };
  },
  htmlBuilder: (n, e) => {
    var t = gt(n.body, e.withPhantom(), !1);
    return M.makeFragment(t);
  },
  mathmlBuilder: (n, e) => {
    var t = Yt(n.body, e);
    return new P.MathNode("mphantom", t);
  }
});
Y({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (n, e) => {
    var t = M.makeSpan([], [ye(n.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), M.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (n, e) => {
    var t = Yt(Ze(n.body), e), r = new P.MathNode("mphantom", t), a = new P.MathNode("mpadded", [r]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
Y({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (n, e) => {
    var t = M.makeSpan(["inner"], [ye(n.body, e.withPhantom())]), r = M.makeSpan(["fix"], []);
    return M.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (n, e) => {
    var t = Yt(Ze(n.body), e), r = new P.MathNode("mphantom", t), a = new P.MathNode("mpadded", [r]);
    return a.setAttribute("width", "0px"), a;
  }
});
Y({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = ce(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: a
    };
  },
  htmlBuilder(n, e) {
    var t = ye(n.body, e), r = qe(n.dy, e);
    return M.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mpadded", [Ce(n.body, e)]), r = n.dy.number + n.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
Y({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n) {
    var {
      parser: e
    } = n;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
Y({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = t[0], i = ce(e[0], "size"), l = ce(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && ce(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(n, e) {
    var t = M.makeSpan(["mord", "rule"], [], e), r = qe(n.width, e), a = qe(n.height, e), i = n.shift ? qe(n.shift, e) : 0;
    return t.style.borderRightWidth = G(r), t.style.borderTopWidth = G(a), t.style.bottom = G(i), t.width = r, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(n, e) {
    var t = qe(n.width, e), r = qe(n.height, e), a = n.shift ? qe(n.shift, e) : 0, i = e.color && e.getColor() || "black", l = new P.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", G(t)), l.setAttribute("height", G(r));
    var s = new P.MathNode("mpadded", [l]);
    return a >= 0 ? s.setAttribute("height", G(a)) : (s.setAttribute("height", G(a)), s.setAttribute("depth", G(-a))), s.setAttribute("voffset", G(a)), s;
  }
});
function D4(n, e, t) {
  for (var r = gt(n, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= a, r[i].depth *= a;
  }
  return M.makeFragment(r);
}
var hu = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], nm = (n, e) => {
  var t = e.havingSize(n.size);
  return D4(n.body, t, e);
};
Y({
  type: "sizing",
  names: hu,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: hu.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: nm,
  mathmlBuilder: (n, e) => {
    var t = e.havingSize(n.size), r = Yt(n.body, t), a = new P.MathNode("mstyle", r);
    return a.setAttribute("mathsize", G(t.sizeMultiplier)), a;
  }
});
Y({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (n, e, t) => {
    var {
      parser: r
    } = n, a = !1, i = !1, l = t[0] && ce(t[0], "ordgroup");
    if (l)
      for (var s = "", o = 0; o < l.body.length; ++o) {
        var c = l.body[o];
        if (s = c.text, s === "t")
          a = !0;
        else if (s === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var h = e[0];
    return {
      type: "smash",
      mode: r.mode,
      body: h,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (n, e) => {
    var t = M.makeSpan([], [ye(n.body, e)]);
    if (!n.smashHeight && !n.smashDepth)
      return t;
    if (n.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (n.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new P.MathNode("mpadded", [Ce(n.body, e)]);
    return n.smashHeight && t.setAttribute("height", "0px"), n.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
Y({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: r.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(n, e) {
    var t = ye(n.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = M.wrapFragment(t, e);
    var r = e.fontMetrics(), a = r.defaultRuleThickness, i = a;
    e.style.id < re.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, s = t.height + t.depth + l + a, {
      span: o,
      ruleWidth: c,
      advanceWidth: h
    } = K0.sqrtImage(s, e), m = o.height - c;
    m > t.height + t.depth + l && (l = (l + m - t.height - t.depth) / 2);
    var f = o.height - t.height - l - c;
    t.style.paddingLeft = G(h);
    var p = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + f)
      }, {
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: c
      }]
    }, e);
    if (n.index) {
      var v = e.havingStyle(re.SCRIPTSCRIPT), w = ye(n.index, v, e), S = 0.6 * (p.height - p.depth), A = M.makeVList({
        positionType: "shift",
        positionData: -S,
        children: [{
          type: "elem",
          elem: w
        }]
      }, e), b = M.makeSpan(["root"], [A]);
      return M.makeSpan(["mord", "sqrt"], [b, p], e);
    } else
      return M.makeSpan(["mord", "sqrt"], [p], e);
  },
  mathmlBuilder(n, e) {
    var {
      body: t,
      index: r
    } = n;
    return r ? new P.MathNode("mroot", [Ce(t, e), Ce(r, e)]) : new P.MathNode("msqrt", [Ce(t, e)]);
  }
});
var fu = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
};
Y({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n, e) {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!0, t), l = r.slice(1, r.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: i
    };
  },
  htmlBuilder(n, e) {
    var t = fu[n.style], r = e.havingStyle(t).withFont("");
    return D4(n.body, r, e);
  },
  mathmlBuilder(n, e) {
    var t = fu[n.style], r = e.havingStyle(t), a = Yt(n.body, r), i = new P.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[n.style];
    return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
  }
});
var am = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (t.style.size === re.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? gn : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === re.DISPLAY.size || r.limits);
      return i ? k4 : null;
    } else {
      if (r.type === "accent")
        return ee.isCharacterBox(r.base) ? Rs : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? b4 : null;
      } else
        return null;
    }
  else return null;
};
Pr({
  type: "supsub",
  htmlBuilder(n, e) {
    var t = am(n, e);
    if (t)
      return t(n, e);
    var {
      base: r,
      sup: a,
      sub: i
    } = n, l = ye(r, e), s, o, c = e.fontMetrics(), h = 0, m = 0, f = r && ee.isCharacterBox(r);
    if (a) {
      var p = e.havingStyle(e.style.sup());
      s = ye(a, p, e), f || (h = l.height - p.fontMetrics().supDrop * p.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var v = e.havingStyle(e.style.sub());
      o = ye(i, v, e), f || (m = l.depth + v.fontMetrics().subDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    var w;
    e.style === re.DISPLAY ? w = c.sup1 : e.style.cramped ? w = c.sup3 : w = c.sup2;
    var S = e.sizeMultiplier, A = G(0.5 / c.ptPerEm / S), b = null;
    if (o) {
      var y = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (l instanceof z0 || y) && (b = G(-l.italic));
    }
    var E;
    if (s && o) {
      h = Math.max(h, w, s.depth + 0.25 * c.xHeight), m = Math.max(m, c.sub2);
      var C = c.defaultRuleThickness, T = 4 * C;
      if (h - s.depth - (o.height - m) < T) {
        m = T - (h - s.depth) + o.height;
        var z = 0.8 * c.xHeight - (h - s.depth);
        z > 0 && (h += z, m -= z);
      }
      var I = [{
        type: "elem",
        elem: o,
        shift: m,
        marginRight: A,
        marginLeft: b
      }, {
        type: "elem",
        elem: s,
        shift: -h,
        marginRight: A
      }];
      E = M.makeVList({
        positionType: "individualShift",
        children: I
      }, e);
    } else if (o) {
      m = Math.max(m, c.sub1, o.height - 0.8 * c.xHeight);
      var B = [{
        type: "elem",
        elem: o,
        marginLeft: b,
        marginRight: A
      }];
      E = M.makeVList({
        positionType: "shift",
        positionData: m,
        children: B
      }, e);
    } else if (s)
      h = Math.max(h, w, s.depth + 0.25 * c.xHeight), E = M.makeVList({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: s,
          marginRight: A
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var L = ls(l, "right") || "mord";
    return M.makeSpan([L], [l, M.makeSpan(["msupsub"], [E])], e);
  },
  mathmlBuilder(n, e) {
    var t = !1, r, a;
    n.base && n.base.type === "horizBrace" && (a = !!n.sup, a === n.base.isOver && (t = !0, r = n.base.isOver)), n.base && (n.base.type === "op" || n.base.type === "operatorname") && (n.base.parentIsSupSub = !0);
    var i = [Ce(n.base, e)];
    n.sub && i.push(Ce(n.sub, e)), n.sup && i.push(Ce(n.sup, e));
    var l;
    if (t)
      l = r ? "mover" : "munder";
    else if (n.sub)
      if (n.sup) {
        var c = n.base;
        c && c.type === "op" && c.limits && e.style === re.DISPLAY || c && c.type === "operatorname" && c.alwaysHandleSupSub && (e.style === re.DISPLAY || c.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var o = n.base;
        o && o.type === "op" && o.limits && (e.style === re.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === re.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var s = n.base;
      s && s.type === "op" && s.limits && (e.style === re.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === re.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new P.MathNode(l, i);
  }
});
Pr({
  type: "atom",
  htmlBuilder(n, e) {
    return M.mathsym(n.text, n.mode, e, ["m" + n.family]);
  },
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mo", [r0(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = Is(n, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else n.family === "punct" ? t.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var A4 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Pr({
  type: "mathord",
  htmlBuilder(n, e) {
    return M.makeOrd(n, e, "mathord");
  },
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mi", [r0(n.text, n.mode, e)]), r = Is(n, e) || "italic";
    return r !== A4[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Pr({
  type: "textord",
  htmlBuilder(n, e) {
    return M.makeOrd(n, e, "textord");
  },
  mathmlBuilder(n, e) {
    var t = r0(n.text, n.mode, e), r = Is(n, e) || "normal", a;
    return n.mode === "text" ? a = new P.MathNode("mtext", [t]) : /[0-9]/.test(n.text) ? a = new P.MathNode("mn", [t]) : n.text === "\\prime" ? a = new P.MathNode("mo", [t]) : a = new P.MathNode("mi", [t]), r !== A4[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var Ml = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Bl = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
Pr({
  type: "spacing",
  htmlBuilder(n, e) {
    if (Bl.hasOwnProperty(n.text)) {
      var t = Bl[n.text].className || "";
      if (n.mode === "text") {
        var r = M.makeOrd(n, e, "textord");
        return r.classes.push(t), r;
      } else
        return M.makeSpan(["mspace", t], [M.mathsym(n.text, n.mode, e)], e);
    } else {
      if (Ml.hasOwnProperty(n.text))
        return M.makeSpan(["mspace", Ml[n.text]], [], e);
      throw new J('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, e) {
    var t;
    if (Bl.hasOwnProperty(n.text))
      t = new P.MathNode("mtext", [new P.TextNode(" ")]);
    else {
      if (Ml.hasOwnProperty(n.text))
        return new P.MathNode("mspace");
      throw new J('Unknown type of space "' + n.text + '"');
    }
    return t;
  }
});
var du = () => {
  var n = new P.MathNode("mtd", []);
  return n.setAttribute("width", "50%"), n;
};
Pr({
  type: "tag",
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mtable", [new P.MathNode("mtr", [du(), new P.MathNode("mtd", [br(n.body, e)]), du(), new P.MathNode("mtd", [br(n.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var mu = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, pu = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, im = {
  "\\textit": "textit",
  "\\textup": "textup"
}, gu = (n, e) => {
  var t = n.font;
  if (t) {
    if (mu[t])
      return e.withTextFontFamily(mu[t]);
    if (pu[t])
      return e.withTextFontWeight(pu[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(im[t]);
};
Y({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: Ze(a),
      font: r
    };
  },
  htmlBuilder(n, e) {
    var t = gu(n, e), r = gt(n.body, t, !0);
    return M.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(n, e) {
    var t = gu(n, e);
    return br(n.body, t);
  }
});
Y({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = ye(n.body, e), r = M.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = M.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new P.MathNode("mo", [new P.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new P.MathNode("munder", [Ce(n.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
Y({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = ye(n.body, e), r = e.fontMetrics().axisHeight, a = 0.5 * (t.height - r - (t.depth + r));
    return M.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    return new P.MathNode("mpadded", [Ce(n.body, e)], ["vcenter"]);
  }
});
Y({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    throw new J("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(n, e) {
    for (var t = _u(n), r = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), r.push(M.makeSymbol(l, "Typewriter-Regular", n.mode, a, ["mord", "texttt"]));
    }
    return M.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), M.tryCombineChars(r), a);
  },
  mathmlBuilder(n, e) {
    var t = new P.TextNode(_u(n)), r = new P.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var _u = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), lm = Kc;
_("\\noexpand", function(n) {
  var e = n.popToken();
  return n.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
_("\\expandafter", function(n) {
  var e = n.popToken();
  return n.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
_("\\@firstoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
_("\\@secondoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
_("\\@ifnextchar", function(n) {
  var e = n.consumeArgs(3);
  n.consumeSpaces();
  var t = n.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
_("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
_("\\TextOrMath", function(n) {
  var e = n.consumeArgs(2);
  return n.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var vu = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
_("\\char", function(n) {
  var e = n.popToken(), t, r = "";
  if (e.text === "'")
    t = 8, e = n.popToken();
  else if (e.text === '"')
    t = 16, e = n.popToken();
  else if (e.text === "`")
    if (e = n.popToken(), e.text[0] === "\\")
      r = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new J("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = vu[e.text], r == null || r >= t)
      throw new J("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = vu[n.future().text]) != null && a < t; )
      r *= t, r += a, n.popToken();
  }
  return "\\@char{" + r + "}";
});
var Gs = (n, e, t) => {
  var r = n.consumeArg().tokens;
  if (r.length !== 1)
    throw new J("\\newcommand's first argument must be a macro name");
  var a = r[0].text, i = n.isDefined(a);
  if (i && !e)
    throw new J("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new J("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var l = 0;
  if (r = n.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var s = "", o = n.expandNextToken(); o.text !== "]" && o.text !== "EOF"; )
      s += o.text, o = n.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new J("Invalid number of arguments: " + s);
    l = parseInt(s), r = n.consumeArg().tokens;
  }
  return n.macros.set(a, {
    tokens: r,
    numArgs: l
  }), "";
};
_("\\newcommand", (n) => Gs(n, !1, !0));
_("\\renewcommand", (n) => Gs(n, !0, !1));
_("\\providecommand", (n) => Gs(n, !0, !0));
_("\\message", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
_("\\errmessage", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
_("\\show", (n) => {
  var e = n.popToken(), t = e.text;
  return console.log(e, n.macros.get(t), lm[t], Ke.math[t], Ke.text[t]), "";
});
_("\\bgroup", "{");
_("\\egroup", "}");
_("~", "\\nobreakspace");
_("\\lq", "`");
_("\\rq", "'");
_("\\aa", "\\r a");
_("\\AA", "\\r A");
_("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
_("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
_("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
_("ℬ", "\\mathscr{B}");
_("ℰ", "\\mathscr{E}");
_("ℱ", "\\mathscr{F}");
_("ℋ", "\\mathscr{H}");
_("ℐ", "\\mathscr{I}");
_("ℒ", "\\mathscr{L}");
_("ℳ", "\\mathscr{M}");
_("ℛ", "\\mathscr{R}");
_("ℭ", "\\mathfrak{C}");
_("ℌ", "\\mathfrak{H}");
_("ℨ", "\\mathfrak{Z}");
_("\\Bbbk", "\\Bbb{k}");
_("·", "\\cdotp");
_("\\llap", "\\mathllap{\\textrm{#1}}");
_("\\rlap", "\\mathrlap{\\textrm{#1}}");
_("\\clap", "\\mathclap{\\textrm{#1}}");
_("\\mathstrut", "\\vphantom{(}");
_("\\underbar", "\\underline{\\text{#1}}");
_("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
_("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
_("\\ne", "\\neq");
_("≠", "\\neq");
_("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
_("∉", "\\notin");
_("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
_("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
_("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
_("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
_("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
_("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
_("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
_("⟂", "\\perp");
_("‼", "\\mathclose{!\\mkern-0.8mu!}");
_("∌", "\\notni");
_("⌜", "\\ulcorner");
_("⌝", "\\urcorner");
_("⌞", "\\llcorner");
_("⌟", "\\lrcorner");
_("©", "\\copyright");
_("®", "\\textregistered");
_("️", "\\textregistered");
_("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
_("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
_("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
_("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
_("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
_("⋮", "\\vdots");
_("\\varGamma", "\\mathit{\\Gamma}");
_("\\varDelta", "\\mathit{\\Delta}");
_("\\varTheta", "\\mathit{\\Theta}");
_("\\varLambda", "\\mathit{\\Lambda}");
_("\\varXi", "\\mathit{\\Xi}");
_("\\varPi", "\\mathit{\\Pi}");
_("\\varSigma", "\\mathit{\\Sigma}");
_("\\varUpsilon", "\\mathit{\\Upsilon}");
_("\\varPhi", "\\mathit{\\Phi}");
_("\\varPsi", "\\mathit{\\Psi}");
_("\\varOmega", "\\mathit{\\Omega}");
_("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
_("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
_("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
_("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
_("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
_("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var bu = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
_("\\dots", function(n) {
  var e = "\\dotso", t = n.expandAfterFuture().text;
  return t in bu ? e = bu[t] : (t.slice(0, 4) === "\\not" || t in Ke.math && ee.contains(["bin", "rel"], Ke.math[t].group)) && (e = "\\dotsb"), e;
});
var js = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
_("\\dotso", function(n) {
  var e = n.future().text;
  return e in js ? "\\ldots\\," : "\\ldots";
});
_("\\dotsc", function(n) {
  var e = n.future().text;
  return e in js && e !== "," ? "\\ldots\\," : "\\ldots";
});
_("\\cdots", function(n) {
  var e = n.future().text;
  return e in js ? "\\@cdots\\," : "\\@cdots";
});
_("\\dotsb", "\\cdots");
_("\\dotsm", "\\cdots");
_("\\dotsi", "\\!\\cdots");
_("\\dotsx", "\\ldots\\,");
_("\\DOTSI", "\\relax");
_("\\DOTSB", "\\relax");
_("\\DOTSX", "\\relax");
_("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
_("\\,", "\\tmspace+{3mu}{.1667em}");
_("\\thinspace", "\\,");
_("\\>", "\\mskip{4mu}");
_("\\:", "\\tmspace+{4mu}{.2222em}");
_("\\medspace", "\\:");
_("\\;", "\\tmspace+{5mu}{.2777em}");
_("\\thickspace", "\\;");
_("\\!", "\\tmspace-{3mu}{.1667em}");
_("\\negthinspace", "\\!");
_("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
_("\\negthickspace", "\\tmspace-{5mu}{.277em}");
_("\\enspace", "\\kern.5em ");
_("\\enskip", "\\hskip.5em\\relax");
_("\\quad", "\\hskip1em\\relax");
_("\\qquad", "\\hskip2em\\relax");
_("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
_("\\tag@paren", "\\tag@literal{({#1})}");
_("\\tag@literal", (n) => {
  if (n.macros.get("\\df@tag"))
    throw new J("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
_("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
_("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
_("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
_("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
_("\\newline", "\\\\\\relax");
_("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var E4 = G(G0["Main-Regular"][84][1] - 0.7 * G0["Main-Regular"][65][1]);
_("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + E4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
_("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + E4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
_("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
_("\\@hspace", "\\hskip #1\\relax");
_("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
_("\\ordinarycolon", ":");
_("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
_("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
_("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
_("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
_("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
_("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
_("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
_("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
_("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
_("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
_("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
_("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
_("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
_("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
_("∷", "\\dblcolon");
_("∹", "\\eqcolon");
_("≔", "\\coloneqq");
_("≕", "\\eqqcolon");
_("⩴", "\\Coloneqq");
_("\\ratio", "\\vcentcolon");
_("\\coloncolon", "\\dblcolon");
_("\\colonequals", "\\coloneqq");
_("\\coloncolonequals", "\\Coloneqq");
_("\\equalscolon", "\\eqqcolon");
_("\\equalscoloncolon", "\\Eqqcolon");
_("\\colonminus", "\\coloneq");
_("\\coloncolonminus", "\\Coloneq");
_("\\minuscolon", "\\eqcolon");
_("\\minuscoloncolon", "\\Eqcolon");
_("\\coloncolonapprox", "\\Colonapprox");
_("\\coloncolonsim", "\\Colonsim");
_("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
_("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
_("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
_("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
_("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
_("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
_("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
_("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
_("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
_("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
_("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
_("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
_("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
_("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
_("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
_("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
_("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
_("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
_("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
_("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
_("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
_("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
_("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
_("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
_("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
_("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
_("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
_("\\imath", "\\html@mathml{\\@imath}{ı}");
_("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
_("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
_("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
_("⟦", "\\llbracket");
_("⟧", "\\rrbracket");
_("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
_("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
_("⦃", "\\lBrace");
_("⦄", "\\rBrace");
_("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
_("⦵", "\\minuso");
_("\\darr", "\\downarrow");
_("\\dArr", "\\Downarrow");
_("\\Darr", "\\Downarrow");
_("\\lang", "\\langle");
_("\\rang", "\\rangle");
_("\\uarr", "\\uparrow");
_("\\uArr", "\\Uparrow");
_("\\Uarr", "\\Uparrow");
_("\\N", "\\mathbb{N}");
_("\\R", "\\mathbb{R}");
_("\\Z", "\\mathbb{Z}");
_("\\alef", "\\aleph");
_("\\alefsym", "\\aleph");
_("\\Alpha", "\\mathrm{A}");
_("\\Beta", "\\mathrm{B}");
_("\\bull", "\\bullet");
_("\\Chi", "\\mathrm{X}");
_("\\clubs", "\\clubsuit");
_("\\cnums", "\\mathbb{C}");
_("\\Complex", "\\mathbb{C}");
_("\\Dagger", "\\ddagger");
_("\\diamonds", "\\diamondsuit");
_("\\empty", "\\emptyset");
_("\\Epsilon", "\\mathrm{E}");
_("\\Eta", "\\mathrm{H}");
_("\\exist", "\\exists");
_("\\harr", "\\leftrightarrow");
_("\\hArr", "\\Leftrightarrow");
_("\\Harr", "\\Leftrightarrow");
_("\\hearts", "\\heartsuit");
_("\\image", "\\Im");
_("\\infin", "\\infty");
_("\\Iota", "\\mathrm{I}");
_("\\isin", "\\in");
_("\\Kappa", "\\mathrm{K}");
_("\\larr", "\\leftarrow");
_("\\lArr", "\\Leftarrow");
_("\\Larr", "\\Leftarrow");
_("\\lrarr", "\\leftrightarrow");
_("\\lrArr", "\\Leftrightarrow");
_("\\Lrarr", "\\Leftrightarrow");
_("\\Mu", "\\mathrm{M}");
_("\\natnums", "\\mathbb{N}");
_("\\Nu", "\\mathrm{N}");
_("\\Omicron", "\\mathrm{O}");
_("\\plusmn", "\\pm");
_("\\rarr", "\\rightarrow");
_("\\rArr", "\\Rightarrow");
_("\\Rarr", "\\Rightarrow");
_("\\real", "\\Re");
_("\\reals", "\\mathbb{R}");
_("\\Reals", "\\mathbb{R}");
_("\\Rho", "\\mathrm{P}");
_("\\sdot", "\\cdot");
_("\\sect", "\\S");
_("\\spades", "\\spadesuit");
_("\\sub", "\\subset");
_("\\sube", "\\subseteq");
_("\\supe", "\\supseteq");
_("\\Tau", "\\mathrm{T}");
_("\\thetasym", "\\vartheta");
_("\\weierp", "\\wp");
_("\\Zeta", "\\mathrm{Z}");
_("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
_("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
_("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
_("\\bra", "\\mathinner{\\langle{#1}|}");
_("\\ket", "\\mathinner{|{#1}\\rangle}");
_("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
_("\\Bra", "\\left\\langle#1\\right|");
_("\\Ket", "\\left|#1\\right\\rangle");
var S4 = (n) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), s = e.macros.get("\\|");
  e.macros.beginGroup();
  var o = (m) => (f) => {
    n && (f.macros.set("|", l), a.length && f.macros.set("\\|", s));
    var p = m;
    if (!m && a.length) {
      var v = f.future();
      v.text === "|" && (f.popToken(), p = !0);
    }
    return {
      tokens: p ? a : r,
      numArgs: 0
    };
  };
  e.macros.set("|", o(!1)), a.length && e.macros.set("\\|", o(!0));
  var c = e.consumeArg().tokens, h = e.expandTokens([
    ...i,
    ...c,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: h.reverse(),
    numArgs: 0
  };
};
_("\\bra@ket", S4(!1));
_("\\bra@set", S4(!0));
_("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
_("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
_("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
_("\\angln", "{\\angl n}");
_("\\blue", "\\textcolor{##6495ed}{#1}");
_("\\orange", "\\textcolor{##ffa500}{#1}");
_("\\pink", "\\textcolor{##ff00af}{#1}");
_("\\red", "\\textcolor{##df0030}{#1}");
_("\\green", "\\textcolor{##28ae7b}{#1}");
_("\\gray", "\\textcolor{gray}{#1}");
_("\\purple", "\\textcolor{##9d38bd}{#1}");
_("\\blueA", "\\textcolor{##ccfaff}{#1}");
_("\\blueB", "\\textcolor{##80f6ff}{#1}");
_("\\blueC", "\\textcolor{##63d9ea}{#1}");
_("\\blueD", "\\textcolor{##11accd}{#1}");
_("\\blueE", "\\textcolor{##0c7f99}{#1}");
_("\\tealA", "\\textcolor{##94fff5}{#1}");
_("\\tealB", "\\textcolor{##26edd5}{#1}");
_("\\tealC", "\\textcolor{##01d1c1}{#1}");
_("\\tealD", "\\textcolor{##01a995}{#1}");
_("\\tealE", "\\textcolor{##208170}{#1}");
_("\\greenA", "\\textcolor{##b6ffb0}{#1}");
_("\\greenB", "\\textcolor{##8af281}{#1}");
_("\\greenC", "\\textcolor{##74cf70}{#1}");
_("\\greenD", "\\textcolor{##1fab54}{#1}");
_("\\greenE", "\\textcolor{##0d923f}{#1}");
_("\\goldA", "\\textcolor{##ffd0a9}{#1}");
_("\\goldB", "\\textcolor{##ffbb71}{#1}");
_("\\goldC", "\\textcolor{##ff9c39}{#1}");
_("\\goldD", "\\textcolor{##e07d10}{#1}");
_("\\goldE", "\\textcolor{##a75a05}{#1}");
_("\\redA", "\\textcolor{##fca9a9}{#1}");
_("\\redB", "\\textcolor{##ff8482}{#1}");
_("\\redC", "\\textcolor{##f9685d}{#1}");
_("\\redD", "\\textcolor{##e84d39}{#1}");
_("\\redE", "\\textcolor{##bc2612}{#1}");
_("\\maroonA", "\\textcolor{##ffbde0}{#1}");
_("\\maroonB", "\\textcolor{##ff92c6}{#1}");
_("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
_("\\maroonD", "\\textcolor{##ca337c}{#1}");
_("\\maroonE", "\\textcolor{##9e034e}{#1}");
_("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
_("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
_("\\purpleC", "\\textcolor{##aa87ff}{#1}");
_("\\purpleD", "\\textcolor{##7854ab}{#1}");
_("\\purpleE", "\\textcolor{##543b78}{#1}");
_("\\mintA", "\\textcolor{##f5f9e8}{#1}");
_("\\mintB", "\\textcolor{##edf2df}{#1}");
_("\\mintC", "\\textcolor{##e0e5cc}{#1}");
_("\\grayA", "\\textcolor{##f6f7f7}{#1}");
_("\\grayB", "\\textcolor{##f0f1f2}{#1}");
_("\\grayC", "\\textcolor{##e3e5e6}{#1}");
_("\\grayD", "\\textcolor{##d6d8da}{#1}");
_("\\grayE", "\\textcolor{##babec2}{#1}");
_("\\grayF", "\\textcolor{##888d93}{#1}");
_("\\grayG", "\\textcolor{##626569}{#1}");
_("\\grayH", "\\textcolor{##3b3e40}{#1}");
_("\\grayI", "\\textcolor{##21242c}{#1}");
_("\\kaBlue", "\\textcolor{##314453}{#1}");
_("\\kaGreen", "\\textcolor{##71B307}{#1}");
typeof document < "u" && document.compatMode !== "CSS1Compat" && typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
function Ws() {
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
let Hr = Ws();
function x4(n) {
  Hr = n;
}
const F4 = /[&<>"']/, sm = new RegExp(F4.source, "g"), C4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, om = new RegExp(C4.source, "g"), um = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, yu = (n) => um[n];
function Vt(n, e) {
  if (e) {
    if (F4.test(n))
      return n.replace(sm, yu);
  } else if (C4.test(n))
    return n.replace(om, yu);
  return n;
}
const cm = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function hm(n) {
  return n.replace(cm, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const fm = /(^|[^\[])\^/g;
function Fe(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(fm, "$1"), t = t.replace(a, l), r;
    },
    getRegex: () => new RegExp(t, e)
  };
  return r;
}
function wu(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Hn = { exec: () => null };
function ku(n, e) {
  const t = n.replace(/\|/g, (i, l, s) => {
    let o = !1, c = l;
    for (; --c >= 0 && s[c] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), r = t.split(/ \|/);
  let a = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; a < r.length; a++)
    r[a] = r[a].trim().replace(/\\\|/g, "|");
  return r;
}
function qa(n, e, t) {
  const r = n.length;
  if (r === 0)
    return "";
  let a = 0;
  for (; a < r; ) {
    const i = n.charAt(r - a - 1);
    if (i === e && !t)
      a++;
    else if (i !== e && t)
      a++;
    else
      break;
  }
  return n.slice(0, r - a);
}
function dm(n, e) {
  if (n.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < n.length; r++)
    if (n[r] === "\\")
      r++;
    else if (n[r] === e[0])
      t++;
    else if (n[r] === e[1] && (t--, t < 0))
      return r;
  return -1;
}
function Du(n, e, t, r) {
  const a = e.href, i = e.title ? Vt(e.title) : null, l = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const s = {
      type: "link",
      raw: t,
      href: a,
      title: i,
      text: l,
      tokens: r.inlineTokens(l)
    };
    return r.state.inLink = !1, s;
  }
  return {
    type: "image",
    raw: t,
    href: a,
    title: i,
    text: Vt(l)
  };
}
function mm(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const r = t[1];
  return e.split(`
`).map((a) => {
    const i = a.match(/^\s+/);
    if (i === null)
      return a;
    const [l] = i;
    return l.length >= r.length ? a.slice(r.length) : a;
  }).join(`
`);
}
class li {
  // set by the lexer
  constructor(e) {
    Be(this, "options");
    Be(this, "rules");
    // set by the lexer
    Be(this, "lexer");
    this.options = e || Hr;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : qa(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], a = mm(r, t[3] || "");
      return {
        type: "code",
        raw: r,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: a
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const a = qa(r, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (r = a.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = qa(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const a = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(r);
      return this.lexer.state.top = a, {
        type: "blockquote",
        raw: t[0],
        tokens: i,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const a = r.length > 1, i = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = a ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = a ? r : "[*+-]");
      const l = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let s = "", o = "", c = !1;
      for (; e; ) {
        let h = !1;
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e))
          break;
        s = t[0], e = e.substring(s.length);
        let m = t[2].split(`
`, 1)[0].replace(/^\t+/, (A) => " ".repeat(3 * A.length)), f = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, o = m.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, o = m.slice(p), p += t[1].length);
        let v = !1;
        if (!m && /^ *$/.test(f) && (s += f + `
`, e = e.substring(f.length + 1), h = !0), !h) {
          const A = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), b = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), E = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const C = e.split(`
`, 1)[0];
            if (f = C, this.options.pedantic && (f = f.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(f) || E.test(f) || A.test(f) || b.test(e))
              break;
            if (f.search(/[^ ]/) >= p || !f.trim())
              o += `
` + f.slice(p);
            else {
              if (v || m.search(/[^ ]/) >= 4 || y.test(m) || E.test(m) || b.test(m))
                break;
              o += `
` + f;
            }
            !v && !f.trim() && (v = !0), s += C + `
`, e = e.substring(C.length + 1), m = f.slice(p);
          }
        }
        i.loose || (c ? i.loose = !0 : /\n *\n *$/.test(s) && (c = !0));
        let w = null, S;
        this.options.gfm && (w = /^\[[ xX]\] /.exec(o), w && (S = w[0] !== "[ ] ", o = o.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: s,
          task: !!w,
          checked: S,
          loose: !1,
          text: o,
          tokens: []
        }), i.raw += s;
      }
      i.items[i.items.length - 1].raw = s.trimEnd(), i.items[i.items.length - 1].text = o.trimEnd(), i.raw = i.raw.trimEnd();
      for (let h = 0; h < i.items.length; h++)
        if (this.lexer.state.top = !1, i.items[h].tokens = this.lexer.blockTokens(i.items[h].text, []), !i.loose) {
          const m = i.items[h].tokens.filter((p) => p.type === "space"), f = m.length > 0 && m.some((p) => /\n.*\n/.test(p.raw));
          i.loose = f;
        }
      if (i.loose)
        for (let h = 0; h < i.items.length; h++)
          i.items[h].loose = !0;
      return i;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), a = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: r,
        raw: t[0],
        href: a,
        title: i
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const r = ku(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], l = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === a.length) {
      for (const s of a)
        /^ *-+: *$/.test(s) ? l.align.push("right") : /^ *:-+: *$/.test(s) ? l.align.push("center") : /^ *:-+ *$/.test(s) ? l.align.push("left") : l.align.push(null);
      for (const s of r)
        l.header.push({
          text: s,
          tokens: this.lexer.inline(s)
        });
      for (const s of i)
        l.rows.push(ku(s, l.header.length).map((o) => ({
          text: o,
          tokens: this.lexer.inline(o)
        })));
      return l;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: Vt(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const l = qa(r.slice(0, -1), "\\");
        if ((r.length - l.length) % 2 === 0)
          return;
      } else {
        const l = dm(t[2], "()");
        if (l > -1) {
          const o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let a = t[2], i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        l && (a = l[1], i = l[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(r) ? a = a.slice(1) : a = a.slice(1, -1)), Du(t, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const a = (r[2] || r[1]).replace(/\s+/g, " "), i = t[a.toLowerCase()];
      if (!i) {
        const l = r[0].charAt(0);
        return {
          type: "text",
          raw: l,
          text: l
        };
      }
      return Du(r, i, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const l = [...a[0]].length - 1;
      let s, o, c = l, h = 0;
      const m = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (m.lastIndex = 0, t = t.slice(-1 * e.length + l); (a = m.exec(t)) != null; ) {
        if (s = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !s)
          continue;
        if (o = [...s].length, a[3] || a[4]) {
          c += o;
          continue;
        } else if ((a[5] || a[6]) && l % 3 && !((l + o) % 3)) {
          h += o;
          continue;
        }
        if (c -= o, c > 0)
          continue;
        o = Math.min(o, o + c + h);
        const f = [...a[0]][0].length, p = e.slice(0, l + a.index + f + o);
        if (Math.min(l, o) % 2) {
          const w = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: w,
            tokens: this.lexer.inlineTokens(w)
          };
        }
        const v = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: v,
          tokens: this.lexer.inlineTokens(v)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return a && i && (r = r.substring(1, r.length - 1)), r = Vt(r, !0), {
        type: "codespan",
        raw: t[0],
        text: r
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, a;
      return t[2] === "@" ? (r = Vt(t[1]), a = "mailto:" + r) : (r = Vt(t[1]), a = r), {
        type: "link",
        raw: t[0],
        text: r,
        href: a,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(e) {
    var r;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let a, i;
      if (t[2] === "@")
        a = Vt(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (l !== t[0]);
        a = Vt(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: a,
        href: i,
        tokens: [
          {
            type: "text",
            raw: a,
            text: a
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let r;
      return this.lexer.state.inRawBlock ? r = t[0] : r = Vt(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const pm = /^(?: *(?:\n|$))+/, gm = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, _m = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, na = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, vm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, T4 = /(?:[*+-]|\d{1,9}[.)])/, M4 = Fe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, T4).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Ys = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, bm = /^[^\n]+/, Xs = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ym = Fe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Xs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), wm = Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, T4).getRegex(), Ti = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Zs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, km = Fe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Zs).replace("tag", Ti).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), B4 = Fe(Ys).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ti).getRegex(), Dm = Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", B4).getRegex(), Ks = {
  blockquote: Dm,
  code: gm,
  def: ym,
  fences: _m,
  heading: vm,
  hr: na,
  html: km,
  lheading: M4,
  list: wm,
  newline: pm,
  paragraph: B4,
  table: Hn,
  text: bm
}, Au = Fe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ti).getRegex(), Am = {
  ...Ks,
  table: Au,
  paragraph: Fe(Ys).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Au).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ti).getRegex()
}, Em = {
  ...Ks,
  html: Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Zs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Hn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Fe(Ys).replace("hr", na).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", M4).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, z4 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Sm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, I4 = /^( {2,}|\\)\n(?!\s*$)/, xm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, aa = "\\p{P}\\p{S}", Fm = Fe(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, aa).getRegex(), Cm = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Tm = Fe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, aa).getRegex(), Mm = Fe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, aa).getRegex(), Bm = Fe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, aa).getRegex(), zm = Fe(/\\([punct])/, "gu").replace(/punct/g, aa).getRegex(), Im = Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Nm = Fe(Zs).replace("(?:-->|$)", "-->").getRegex(), Rm = Fe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Nm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), si = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Lm = Fe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", si).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), N4 = Fe(/^!?\[(label)\]\[(ref)\]/).replace("label", si).replace("ref", Xs).getRegex(), R4 = Fe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Xs).getRegex(), Om = Fe("reflink|nolink(?!\\()", "g").replace("reflink", N4).replace("nolink", R4).getRegex(), Qs = {
  _backpedal: Hn,
  // only used for GFM url
  anyPunctuation: zm,
  autolink: Im,
  blockSkip: Cm,
  br: I4,
  code: Sm,
  del: Hn,
  emStrongLDelim: Tm,
  emStrongRDelimAst: Mm,
  emStrongRDelimUnd: Bm,
  escape: z4,
  link: Lm,
  nolink: R4,
  punctuation: Fm,
  reflink: N4,
  reflinkSearch: Om,
  tag: Rm,
  text: xm,
  url: Hn
}, qm = {
  ...Qs,
  link: Fe(/^!?\[(label)\]\((.*?)\)/).replace("label", si).getRegex(),
  reflink: Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", si).getRegex()
}, us = {
  ...Qs,
  escape: Fe(z4).replace("])", "~|])").getRegex(),
  url: Fe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Pm = {
  ...us,
  br: Fe(I4).replace("{2,}", "*").getRegex(),
  text: Fe(us.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Pa = {
  normal: Ks,
  gfm: Am,
  pedantic: Em
}, Tn = {
  normal: Qs,
  gfm: us,
  breaks: Pm,
  pedantic: qm
};
class E0 {
  constructor(e) {
    Be(this, "tokens");
    Be(this, "options");
    Be(this, "state");
    Be(this, "tokenizer");
    Be(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Hr, this.options.tokenizer = this.options.tokenizer || new li(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Pa.normal,
      inline: Tn.normal
    };
    this.options.pedantic ? (t.block = Pa.pedantic, t.inline = Tn.pedantic) : this.options.gfm && (t.block = Pa.gfm, this.options.breaks ? t.inline = Tn.breaks : t.inline = Tn.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Pa,
      inline: Tn
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new E0(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new E0(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (s, o, c) => o + "    ".repeat(c.length));
    let r, a, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let s = 1 / 0;
          const o = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((h) => {
            c = h.call({ lexer: this }, o), typeof c == "number" && c >= 0 && (s = Math.min(s, c));
          }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(i))) {
          a = t[t.length - 1], l && a.type === "paragraph" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r), l = i.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && a.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r);
          continue;
        }
        if (e) {
          const s = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(s);
            break;
          } else
            throw new Error(s);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let r, a, i, l = e, s, o, c;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          h.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, s.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (o || (c = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((h) => (r = h.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, l, c)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let h = 1 / 0;
          const m = e.slice(1);
          let f;
          this.options.extensions.startInline.forEach((p) => {
            f = p.call({ lexer: this }, m), typeof f == "number" && f >= 0 && (h = Math.min(h, f));
          }), h < 1 / 0 && h >= 0 && (i = e.substring(0, h + 1));
        }
        if (r = this.tokenizer.inlineText(i)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (c = r.raw.slice(-1)), o = !0, a = t[t.length - 1], a && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          const h = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else
            throw new Error(h);
        }
      }
    return t;
  }
}
class oi {
  constructor(e) {
    Be(this, "options");
    this.options = e || Hr;
  }
  code(e, t, r) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + Vt(a) + '">' + (r ? e : Vt(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Vt(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, r) {
    const a = t ? "ol" : "ul", i = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + a + i + `>
` + e + "</" + a + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    const a = wu(e);
    if (a === null)
      return r;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + r + "</a>", i;
  }
  image(e, t, r) {
    const a = wu(e);
    if (a === null)
      return r;
    e = a;
    let i = `<img src="${e}" alt="${r}"`;
    return t && (i += ` title="${t}"`), i += ">", i;
  }
  text(e) {
    return e;
  }
}
class Js {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class S0 {
  constructor(e) {
    Be(this, "options");
    Be(this, "renderer");
    Be(this, "textRenderer");
    this.options = e || Hr, this.options.renderer = this.options.renderer || new oi(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Js();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new S0(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new S0(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let r = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = i, s = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (s !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
          r += s || "";
          continue;
        }
      }
      switch (i.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          const l = i;
          r += this.renderer.heading(this.parseInline(l.tokens), l.depth, hm(this.parseInline(l.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const l = i;
          r += this.renderer.code(l.text, l.lang, !!l.escaped);
          continue;
        }
        case "table": {
          const l = i;
          let s = "", o = "";
          for (let h = 0; h < l.header.length; h++)
            o += this.renderer.tablecell(this.parseInline(l.header[h].tokens), { header: !0, align: l.align[h] });
          s += this.renderer.tablerow(o);
          let c = "";
          for (let h = 0; h < l.rows.length; h++) {
            const m = l.rows[h];
            o = "";
            for (let f = 0; f < m.length; f++)
              o += this.renderer.tablecell(this.parseInline(m[f].tokens), { header: !1, align: l.align[f] });
            c += this.renderer.tablerow(o);
          }
          r += this.renderer.table(s, c);
          continue;
        }
        case "blockquote": {
          const l = i, s = this.parse(l.tokens);
          r += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          const l = i, s = l.ordered, o = l.start, c = l.loose;
          let h = "";
          for (let m = 0; m < l.items.length; m++) {
            const f = l.items[m], p = f.checked, v = f.task;
            let w = "";
            if (f.task) {
              const S = this.renderer.checkbox(!!p);
              c ? f.tokens.length > 0 && f.tokens[0].type === "paragraph" ? (f.tokens[0].text = S + " " + f.tokens[0].text, f.tokens[0].tokens && f.tokens[0].tokens.length > 0 && f.tokens[0].tokens[0].type === "text" && (f.tokens[0].tokens[0].text = S + " " + f.tokens[0].tokens[0].text)) : f.tokens.unshift({
                type: "text",
                text: S + " "
              }) : w += S + " ";
            }
            w += this.parse(f.tokens, c), h += this.renderer.listitem(w, v, !!p);
          }
          r += this.renderer.list(h, s, o);
          continue;
        }
        case "html": {
          const l = i;
          r += this.renderer.html(l.text, l.block);
          continue;
        }
        case "paragraph": {
          const l = i;
          r += this.renderer.paragraph(this.parseInline(l.tokens));
          continue;
        }
        case "text": {
          let l = i, s = l.tokens ? this.parseInline(l.tokens) : l.text;
          for (; a + 1 < e.length && e[a + 1].type === "text"; )
            l = e[++a], s += `
` + (l.tokens ? this.parseInline(l.tokens) : l.text);
          r += t ? this.renderer.paragraph(s) : s;
          continue;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          r += l || "";
          continue;
        }
      }
      switch (i.type) {
        case "escape": {
          const l = i;
          r += t.text(l.text);
          break;
        }
        case "html": {
          const l = i;
          r += t.html(l.text);
          break;
        }
        case "link": {
          const l = i;
          r += t.link(l.href, l.title, this.parseInline(l.tokens, t));
          break;
        }
        case "image": {
          const l = i;
          r += t.image(l.href, l.title, l.text);
          break;
        }
        case "strong": {
          const l = i;
          r += t.strong(this.parseInline(l.tokens, t));
          break;
        }
        case "em": {
          const l = i;
          r += t.em(this.parseInline(l.tokens, t));
          break;
        }
        case "codespan": {
          const l = i;
          r += t.codespan(l.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          const l = i;
          r += t.del(this.parseInline(l.tokens, t));
          break;
        }
        case "text": {
          const l = i;
          r += t.text(l.text);
          break;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return r;
  }
}
class Vn {
  constructor(e) {
    Be(this, "options");
    this.options = e || Hr;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
Be(Vn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var qr, cs, L4;
class Hm {
  constructor(...e) {
    Do(this, qr);
    Be(this, "defaults", Ws());
    Be(this, "options", this.setOptions);
    Be(this, "parse", va(this, qr, cs).call(this, E0.lex, S0.parse));
    Be(this, "parseInline", va(this, qr, cs).call(this, E0.lexInline, S0.parseInline));
    Be(this, "Parser", S0);
    Be(this, "Renderer", oi);
    Be(this, "TextRenderer", Js);
    Be(this, "Lexer", E0);
    Be(this, "Tokenizer", li);
    Be(this, "Hooks", Vn);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var a, i;
    let r = [];
    for (const l of e)
      switch (r = r.concat(t.call(this, l)), l.type) {
        case "table": {
          const s = l;
          for (const o of s.header)
            r = r.concat(this.walkTokens(o.tokens, t));
          for (const o of s.rows)
            for (const c of o)
              r = r.concat(this.walkTokens(c.tokens, t));
          break;
        }
        case "list": {
          const s = l;
          r = r.concat(this.walkTokens(s.items, t));
          break;
        }
        default: {
          const s = l;
          (i = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && i[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
            const c = s[o].flat(1 / 0);
            r = r.concat(this.walkTokens(c, t));
          }) : s.tokens && (r = r.concat(this.walkTokens(s.tokens, t)));
        }
      }
    return r;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      const a = { ...r };
      if (a.async = this.defaults.async || a.async || !1, r.extensions && (r.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const l = t.renderers[i.name];
          l ? t.renderers[i.name] = function(...s) {
            let o = i.renderer.apply(this, s);
            return o === !1 && (o = l.apply(this, s)), o;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const l = t[i.level];
          l ? l.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), a.extensions = t), r.renderer) {
        const i = this.defaults.renderer || new oi(this.defaults);
        for (const l in r.renderer) {
          if (!(l in i))
            throw new Error(`renderer '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.renderer[s], c = i[s];
          i[s] = (...h) => {
            let m = o.apply(i, h);
            return m === !1 && (m = c.apply(i, h)), m || "";
          };
        }
        a.renderer = i;
      }
      if (r.tokenizer) {
        const i = this.defaults.tokenizer || new li(this.defaults);
        for (const l in r.tokenizer) {
          if (!(l in i))
            throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l))
            continue;
          const s = l, o = r.tokenizer[s], c = i[s];
          i[s] = (...h) => {
            let m = o.apply(i, h);
            return m === !1 && (m = c.apply(i, h)), m;
          };
        }
        a.tokenizer = i;
      }
      if (r.hooks) {
        const i = this.defaults.hooks || new Vn();
        for (const l in r.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.hooks[s], c = i[s];
          Vn.passThroughHooks.has(l) ? i[s] = (h) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(i, h)).then((f) => c.call(i, f));
            const m = o.call(i, h);
            return c.call(i, m);
          } : i[s] = (...h) => {
            let m = o.apply(i, h);
            return m === !1 && (m = c.apply(i, h)), m;
          };
        }
        a.hooks = i;
      }
      if (r.walkTokens) {
        const i = this.defaults.walkTokens, l = r.walkTokens;
        a.walkTokens = function(s) {
          let o = [];
          return o.push(l.call(this, s)), i && (o = o.concat(i.call(this, s))), o;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return E0.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return S0.parse(e, t ?? this.defaults);
  }
}
qr = new WeakSet(), cs = function(e, t) {
  return (r, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = va(this, qr, L4).call(this, !!l.silent, !!l.async);
    if (typeof r > "u" || r === null)
      return s(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string")
      return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (l.hooks && (l.hooks.options = l), l.async)
      return Promise.resolve(l.hooks ? l.hooks.preprocess(r) : r).then((o) => e(o, l)).then((o) => l.hooks ? l.hooks.processAllTokens(o) : o).then((o) => l.walkTokens ? Promise.all(this.walkTokens(o, l.walkTokens)).then(() => o) : o).then((o) => t(o, l)).then((o) => l.hooks ? l.hooks.postprocess(o) : o).catch(s);
    try {
      l.hooks && (r = l.hooks.preprocess(r));
      let o = e(r, l);
      l.hooks && (o = l.hooks.processAllTokens(o)), l.walkTokens && this.walkTokens(o, l.walkTokens);
      let c = t(o, l);
      return l.hooks && (c = l.hooks.postprocess(c)), c;
    } catch (o) {
      return s(o);
    }
  };
}, L4 = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + Vt(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const Or = new Hm();
function xe(n, e) {
  return Or.parse(n, e);
}
xe.options = xe.setOptions = function(n) {
  return Or.setOptions(n), xe.defaults = Or.defaults, x4(xe.defaults), xe;
};
xe.getDefaults = Ws;
xe.defaults = Hr;
xe.use = function(...n) {
  return Or.use(...n), xe.defaults = Or.defaults, x4(xe.defaults), xe;
};
xe.walkTokens = function(n, e) {
  return Or.walkTokens(n, e);
};
xe.parseInline = Or.parseInline;
xe.Parser = S0;
xe.parser = S0.parse;
xe.Renderer = oi;
xe.TextRenderer = Js;
xe.Lexer = E0;
xe.lexer = E0.lex;
xe.Tokenizer = li;
xe.Hooks = Vn;
xe.parse = xe;
xe.options;
xe.setOptions;
xe.use;
xe.walkTokens;
xe.parseInline;
S0.parse;
E0.lex;
const Vm = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Um = Object.hasOwnProperty;
class O4 {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(e, t) {
    const r = this;
    let a = Gm(e, t === !0);
    const i = a;
    for (; Um.call(r.occurrences, a); )
      r.occurrences[i]++, a = i + "-" + r.occurrences[i];
    return r.occurrences[a] = 0, a;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function Gm(n, e) {
  return typeof n != "string" ? "" : (e || (n = n.toLowerCase()), n.replace(Vm, "").replace(/ /g, "-"));
}
new O4();
var Eu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jm = { exports: {} };
(function(n) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, l = {}, s = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function b(y) {
          return y instanceof o ? new o(y.type, b(y.content), y.alias) : Array.isArray(y) ? y.map(b) : y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(b) {
          return Object.prototype.toString.call(b).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(b) {
          return b.__id || Object.defineProperty(b, "__id", { value: ++i }), b.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function b(y, E) {
          E = E || {};
          var C, T;
          switch (s.util.type(y)) {
            case "Object":
              if (T = s.util.objId(y), E[T])
                return E[T];
              C = /** @type {Record<string, any>} */
              {}, E[T] = C;
              for (var z in y)
                y.hasOwnProperty(z) && (C[z] = b(y[z], E));
              return (
                /** @type {any} */
                C
              );
            case "Array":
              return T = s.util.objId(y), E[T] ? E[T] : (C = [], E[T] = C, /** @type {Array} */
              /** @type {any} */
              y.forEach(function(I, B) {
                C[B] = b(I, E);
              }), /** @type {any} */
              C);
            default:
              return y;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(b) {
          for (; b; ) {
            var y = a.exec(b.className);
            if (y)
              return y[1].toLowerCase();
            b = b.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(b, y) {
          b.className = b.className.replace(RegExp(a, "gi"), ""), b.classList.add("language-" + y);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (C) {
            var b = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack) || [])[1];
            if (b) {
              var y = document.getElementsByTagName("script");
              for (var E in y)
                if (y[E].src == b)
                  return y[E];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(b, y, E) {
          for (var C = "no-" + y; b; ) {
            var T = b.classList;
            if (T.contains(y))
              return !0;
            if (T.contains(C))
              return !1;
            b = b.parentElement;
          }
          return !!E;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: l,
        plaintext: l,
        text: l,
        txt: l,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(b, y) {
          var E = s.util.clone(s.languages[b]);
          for (var C in y)
            E[C] = y[C];
          return E;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(b, y, E, C) {
          C = C || /** @type {any} */
          s.languages;
          var T = C[b], z = {};
          for (var I in T)
            if (T.hasOwnProperty(I)) {
              if (I == y)
                for (var B in E)
                  E.hasOwnProperty(B) && (z[B] = E[B]);
              E.hasOwnProperty(I) || (z[I] = T[I]);
            }
          var L = C[b];
          return C[b] = z, s.languages.DFS(s.languages, function(R, W) {
            W === L && R != b && (this[R] = z);
          }), z;
        },
        // Traverse a language definition with Depth First Search
        DFS: function b(y, E, C, T) {
          T = T || {};
          var z = s.util.objId;
          for (var I in y)
            if (y.hasOwnProperty(I)) {
              E.call(y, I, y[I], C || I);
              var B = y[I], L = s.util.type(B);
              L === "Object" && !T[z(B)] ? (T[z(B)] = !0, b(B, E, null, T)) : L === "Array" && !T[z(B)] && (T[z(B)] = !0, b(B, E, I, T));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(b, y) {
        s.highlightAllUnder(document, b, y);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(b, y, E) {
        var C = {
          callback: E,
          container: b,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", C), C.elements = Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)), s.hooks.run("before-all-elements-highlight", C);
        for (var T = 0, z; z = C.elements[T++]; )
          s.highlightElement(z, y === !0, C.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(b, y, E) {
        var C = s.util.getLanguage(b), T = s.languages[C];
        s.util.setLanguage(b, C);
        var z = b.parentElement;
        z && z.nodeName.toLowerCase() === "pre" && s.util.setLanguage(z, C);
        var I = b.textContent, B = {
          element: b,
          language: C,
          grammar: T,
          code: I
        };
        function L(W) {
          B.highlightedCode = W, s.hooks.run("before-insert", B), B.element.innerHTML = B.highlightedCode, s.hooks.run("after-highlight", B), s.hooks.run("complete", B), E && E.call(B.element);
        }
        if (s.hooks.run("before-sanity-check", B), z = B.element.parentElement, z && z.nodeName.toLowerCase() === "pre" && !z.hasAttribute("tabindex") && z.setAttribute("tabindex", "0"), !B.code) {
          s.hooks.run("complete", B), E && E.call(B.element);
          return;
        }
        if (s.hooks.run("before-highlight", B), !B.grammar) {
          L(s.util.encode(B.code));
          return;
        }
        if (y && r.Worker) {
          var R = new Worker(s.filename);
          R.onmessage = function(W) {
            L(W.data);
          }, R.postMessage(JSON.stringify({
            language: B.language,
            code: B.code,
            immediateClose: !0
          }));
        } else
          L(s.highlight(B.code, B.grammar, B.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(b, y, E) {
        var C = {
          code: b,
          grammar: y,
          language: E
        };
        if (s.hooks.run("before-tokenize", C), !C.grammar)
          throw new Error('The language "' + C.language + '" has no grammar.');
        return C.tokens = s.tokenize(C.code, C.grammar), s.hooks.run("after-tokenize", C), o.stringify(s.util.encode(C.tokens), C.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(b, y) {
        var E = y.rest;
        if (E) {
          for (var C in E)
            y[C] = E[C];
          delete y.rest;
        }
        var T = new m();
        return f(T, T.head, b), h(b, T, y, T.head, 0), v(T);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(b, y) {
          var E = s.hooks.all;
          E[b] = E[b] || [], E[b].push(y);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(b, y) {
          var E = s.hooks.all[b];
          if (!(!E || !E.length))
            for (var C = 0, T; T = E[C++]; )
              T(y);
        }
      },
      Token: o
    };
    r.Prism = s;
    function o(b, y, E, C) {
      this.type = b, this.content = y, this.alias = E, this.length = (C || "").length | 0;
    }
    o.stringify = function b(y, E) {
      if (typeof y == "string")
        return y;
      if (Array.isArray(y)) {
        var C = "";
        return y.forEach(function(L) {
          C += b(L, E);
        }), C;
      }
      var T = {
        type: y.type,
        content: b(y.content, E),
        tag: "span",
        classes: ["token", y.type],
        attributes: {},
        language: E
      }, z = y.alias;
      z && (Array.isArray(z) ? Array.prototype.push.apply(T.classes, z) : T.classes.push(z)), s.hooks.run("wrap", T);
      var I = "";
      for (var B in T.attributes)
        I += " " + B + '="' + (T.attributes[B] || "").replace(/"/g, "&quot;") + '"';
      return "<" + T.tag + ' class="' + T.classes.join(" ") + '"' + I + ">" + T.content + "</" + T.tag + ">";
    };
    function c(b, y, E, C) {
      b.lastIndex = y;
      var T = b.exec(E);
      if (T && C && T[1]) {
        var z = T[1].length;
        T.index += z, T[0] = T[0].slice(z);
      }
      return T;
    }
    function h(b, y, E, C, T, z) {
      for (var I in E)
        if (!(!E.hasOwnProperty(I) || !E[I])) {
          var B = E[I];
          B = Array.isArray(B) ? B : [B];
          for (var L = 0; L < B.length; ++L) {
            if (z && z.cause == I + "," + L)
              return;
            var R = B[L], W = R.inside, oe = !!R.lookbehind, q = !!R.greedy, ue = R.alias;
            if (q && !R.pattern.global) {
              var ie = R.pattern.toString().match(/[imsuy]*$/)[0];
              R.pattern = RegExp(R.pattern.source, ie + "g");
            }
            for (var we = R.pattern || R, me = C.next, ke = T; me !== y.tail && !(z && ke >= z.reach); ke += me.value.length, me = me.next) {
              var De = me.value;
              if (y.length > b.length)
                return;
              if (!(De instanceof o)) {
                var te = 1, ae;
                if (q) {
                  if (ae = c(we, ke, b, oe), !ae || ae.index >= b.length)
                    break;
                  var U = ae.index, ge = ae.index + ae[0].length, Le = ke;
                  for (Le += me.value.length; U >= Le; )
                    me = me.next, Le += me.value.length;
                  if (Le -= me.value.length, ke = Le, me.value instanceof o)
                    continue;
                  for (var H = me; H !== y.tail && (Le < ge || typeof H.value == "string"); H = H.next)
                    te++, Le += H.value.length;
                  te--, De = b.slice(ke, Le), ae.index -= ke;
                } else if (ae = c(we, 0, De, oe), !ae)
                  continue;
                var U = ae.index, fe = ae[0], ve = De.slice(0, U), Se = De.slice(U + fe.length), Me = ke + De.length;
                z && Me > z.reach && (z.reach = Me);
                var ze = me.prev;
                ve && (ze = f(y, ze, ve), ke += ve.length), p(y, ze, te);
                var Ye = new o(I, W ? s.tokenize(fe, W) : fe, ue, fe);
                if (me = f(y, ze, Ye), Se && f(y, me, Se), te > 1) {
                  var ct = {
                    cause: I + "," + L,
                    reach: Me
                  };
                  h(b, y, E, me.prev, ke, ct), z && ct.reach > z.reach && (z.reach = ct.reach);
                }
              }
            }
          }
        }
    }
    function m() {
      var b = { value: null, prev: null, next: null }, y = { value: null, prev: b, next: null };
      b.next = y, this.head = b, this.tail = y, this.length = 0;
    }
    function f(b, y, E) {
      var C = y.next, T = { value: E, prev: y, next: C };
      return y.next = T, C.prev = T, b.length++, T;
    }
    function p(b, y, E) {
      for (var C = y.next, T = 0; T < E && C !== b.tail; T++)
        C = C.next;
      y.next = C, C.prev = y, b.length -= T;
    }
    function v(b) {
      for (var y = [], E = b.head.next; E !== b.tail; )
        y.push(E.value), E = E.next;
      return y;
    }
    if (!r.document)
      return r.addEventListener && (s.disableWorkerMessageHandler || r.addEventListener("message", function(b) {
        var y = JSON.parse(b.data), E = y.language, C = y.code, T = y.immediateClose;
        r.postMessage(s.highlight(C, s.languages[E], E)), T && r.close();
      }, !1)), s;
    var w = s.util.currentScript();
    w && (s.filename = w.src, w.hasAttribute("data-manual") && (s.manual = !0));
    function S() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var A = document.readyState;
      A === "loading" || A === "interactive" && w && w.defer ? document.addEventListener("DOMContentLoaded", S) : window.requestAnimationFrame ? window.requestAnimationFrame(S) : window.setTimeout(S, 16);
    }
    return s;
  }(e);
  n.exports && (n.exports = t), typeof Eu < "u" && (Eu.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(a, i) {
      var l = {};
      l["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[i]
      }, l.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var s = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: l
        }
      };
      s["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: t.languages[i]
      };
      var o = {};
      o[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: s
      }, t.languages.insertBefore("markup", "cdata", o);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, a) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [a, "language-" + a],
                inside: t.languages[a]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(r) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var i = r.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", a = function(w, S) {
      return "✖ Error " + w + " while fetching file: " + S;
    }, i = "✖ Error: File does not exist or is empty", l = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, s = "data-src-status", o = "loading", c = "loaded", h = "failed", m = "pre[data-src]:not([" + s + '="' + c + '"]):not([' + s + '="' + o + '"])';
    function f(w, S, A) {
      var b = new XMLHttpRequest();
      b.open("GET", w, !0), b.onreadystatechange = function() {
        b.readyState == 4 && (b.status < 400 && b.responseText ? S(b.responseText) : b.status >= 400 ? A(a(b.status, b.statusText)) : A(i));
      }, b.send(null);
    }
    function p(w) {
      var S = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w || "");
      if (S) {
        var A = Number(S[1]), b = S[2], y = S[3];
        return b ? y ? [A, Number(y)] : [A, void 0] : [A, A];
      }
    }
    t.hooks.add("before-highlightall", function(w) {
      w.selector += ", " + m;
    }), t.hooks.add("before-sanity-check", function(w) {
      var S = (
        /** @type {HTMLPreElement} */
        w.element
      );
      if (S.matches(m)) {
        w.code = "", S.setAttribute(s, o);
        var A = S.appendChild(document.createElement("CODE"));
        A.textContent = r;
        var b = S.getAttribute("data-src"), y = w.language;
        if (y === "none") {
          var E = (/\.(\w+)$/.exec(b) || [, "none"])[1];
          y = l[E] || E;
        }
        t.util.setLanguage(A, y), t.util.setLanguage(S, y);
        var C = t.plugins.autoloader;
        C && C.loadLanguages(y), f(
          b,
          function(T) {
            S.setAttribute(s, c);
            var z = p(S.getAttribute("data-range"));
            if (z) {
              var I = T.split(/\r\n?|\n/g), B = z[0], L = z[1] == null ? I.length : z[1];
              B < 0 && (B += I.length), B = Math.max(0, Math.min(B - 1, I.length)), L < 0 && (L += I.length), L = Math.max(0, Math.min(L, I.length)), T = I.slice(B, L).join(`
`), S.hasAttribute("data-start") || S.setAttribute("data-start", String(B + 1));
            }
            A.textContent = T, t.highlightElement(A);
          },
          function(T) {
            S.setAttribute(s, h), A.textContent = T;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(S) {
        for (var A = (S || document).querySelectorAll(m), b = 0, y; y = A[b++]; )
          t.highlightElement(y);
      }
    };
    var v = !1;
    t.fileHighlight = function() {
      v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(jm);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(n) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, t = {
    "equation-command": {
      pattern: e,
      alias: "regex"
    }
  };
  n.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: t,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: t,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, n.languages.tex = n.languages.latex, n.languages.context = n.languages.latex;
})(Prism);
(function(n) {
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, r = {
    bash: t,
    environment: {
      pattern: RegExp("\\$" + e),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + e),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  n.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: t
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: r.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: r.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, t.inside = n.languages.bash;
  for (var a = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], i = r.variable[1].inside, l = 0; l < a.length; l++)
    i[a[l]] = n.languages.bash[a[l]];
  n.languages.sh = n.languages.bash, n.languages.shell = n.languages.bash;
})(Prism);
new O4();
const Wm = (n) => {
  const e = {};
  for (let t = 0, r = n.length; t < r; t++) {
    const a = n[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, Ym = [
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "popup",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "selectmenu",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], Xm = [
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
  /* FILTERS */
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
], Zm = [
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover"
], Km = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], Qm = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], Jm = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
];
[
  ...Ym,
  ...Xm.map((n) => `svg:${n}`),
  ...Zm.map((n) => `math:${n}`)
], Wm([
  Object.fromEntries(Km.map((n) => [n, ["*"]])),
  Object.fromEntries(Qm.map((n) => [n, ["svg:*"]])),
  Object.fromEntries(Jm.map((n) => [n, ["math:*"]]))
]);
function on(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let r = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + r;
}
function Ja() {
}
const $m = (n) => n;
function e5(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const q4 = typeof window < "u";
let Su = q4 ? () => window.performance.now() : () => Date.now(), P4 = q4 ? (n) => requestAnimationFrame(n) : Ja;
const hn = /* @__PURE__ */ new Set();
function H4(n) {
  hn.forEach((e) => {
    e.c(n) || (hn.delete(e), e.f());
  }), hn.size !== 0 && P4(H4);
}
function t5(n) {
  let e;
  return hn.size === 0 && P4(H4), {
    promise: new Promise((t) => {
      hn.add(e = { c: n, f: t });
    }),
    abort() {
      hn.delete(e);
    }
  };
}
function V4(n, { delay: e = 0, duration: t = 400, easing: r = $m } = {}) {
  const a = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (i) => `opacity: ${i * a}`
  };
}
const $r = [];
function r5(n, e = Ja) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(s) {
    if (e5(n, s) && (n = s, t)) {
      const o = !$r.length;
      for (const c of r)
        c[1](), $r.push(c, n);
      if (o) {
        for (let c = 0; c < $r.length; c += 2)
          $r[c][0]($r[c + 1]);
        $r.length = 0;
      }
    }
  }
  function i(s) {
    a(s(n));
  }
  function l(s, o = Ja) {
    const c = [s, o];
    return r.add(c), r.size === 1 && (t = e(a, i) || Ja), s(n), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function xu(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function hs(n, e, t, r) {
  if (typeof t == "number" || xu(t)) {
    const a = r - t, i = (t - e) / (n.dt || 1 / 60), l = n.opts.stiffness * a, s = n.opts.damping * i, o = (l - s) * n.inv_mass, c = (i + o) * n.dt;
    return Math.abs(c) < n.opts.precision && Math.abs(a) < n.opts.precision ? r : (n.settled = !1, xu(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => hs(n, e[i], t[i], r[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = hs(n, e[i], t[i], r[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Fu(n, e = {}) {
  const t = r5(n), { stiffness: r = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, c = n, h = n, m = 1, f = 0, p = !1;
  function v(S, A = {}) {
    h = S;
    const b = o = {};
    return n == null || A.hard || w.stiffness >= 1 && w.damping >= 1 ? (p = !0, l = Su(), c = S, t.set(n = h), Promise.resolve()) : (A.soft && (f = 1 / ((A.soft === !0 ? 0.5 : +A.soft) * 60), m = 0), s || (l = Su(), p = !1, s = t5((y) => {
      if (p)
        return p = !1, s = null, !1;
      m = Math.min(m + f, 1);
      const E = {
        inv_mass: m,
        opts: w,
        settled: !0,
        dt: (y - l) * 60 / 1e3
      }, C = hs(E, c, n, h);
      return l = y, c = n, t.set(n = C), E.settled && (s = null), !E.settled;
    })), new Promise((y) => {
      s.promise.then(() => {
        b === o && y();
      });
    }));
  }
  const w = {
    set: v,
    update: (S, A) => v(S(h, n), A),
    subscribe: t.subscribe,
    stiffness: r,
    damping: a,
    precision: i
  };
  return w;
}
const {
  SvelteComponent: n5,
  append_hydration: o0,
  attr: be,
  children: Zt,
  claim_element: a5,
  claim_svg_element: u0,
  component_subscribe: Cu,
  detach: Ht,
  element: i5,
  init: l5,
  insert_hydration: s5,
  noop: Tu,
  safe_not_equal: o5,
  set_style: Ha,
  svg_element: c0,
  toggle_class: Mu
} = window.__gradio__svelte__internal, { onMount: u5 } = window.__gradio__svelte__internal;
function c5(n) {
  let e, t, r, a, i, l, s, o, c, h, m, f;
  return {
    c() {
      e = i5("div"), t = c0("svg"), r = c0("g"), a = c0("path"), i = c0("path"), l = c0("path"), s = c0("path"), o = c0("g"), c = c0("path"), h = c0("path"), m = c0("path"), f = c0("path"), this.h();
    },
    l(p) {
      e = a5(p, "DIV", { class: !0 });
      var v = Zt(e);
      t = u0(v, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var w = Zt(t);
      r = u0(w, "g", { style: !0 });
      var S = Zt(r);
      a = u0(S, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Zt(a).forEach(Ht), i = u0(S, "path", { d: !0, fill: !0, class: !0 }), Zt(i).forEach(Ht), l = u0(S, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Zt(l).forEach(Ht), s = u0(S, "path", { d: !0, fill: !0, class: !0 }), Zt(s).forEach(Ht), S.forEach(Ht), o = u0(w, "g", { style: !0 });
      var A = Zt(o);
      c = u0(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Zt(c).forEach(Ht), h = u0(A, "path", { d: !0, fill: !0, class: !0 }), Zt(h).forEach(Ht), m = u0(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Zt(m).forEach(Ht), f = u0(A, "path", { d: !0, fill: !0, class: !0 }), Zt(f).forEach(Ht), A.forEach(Ht), w.forEach(Ht), v.forEach(Ht), this.h();
    },
    h() {
      be(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), be(a, "fill", "#FF7C00"), be(a, "fill-opacity", "0.4"), be(a, "class", "svelte-43sxxs"), be(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), be(i, "fill", "#FF7C00"), be(i, "class", "svelte-43sxxs"), be(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), be(l, "fill", "#FF7C00"), be(l, "fill-opacity", "0.4"), be(l, "class", "svelte-43sxxs"), be(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), be(s, "fill", "#FF7C00"), be(s, "class", "svelte-43sxxs"), Ha(r, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), be(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), be(c, "fill", "#FF7C00"), be(c, "fill-opacity", "0.4"), be(c, "class", "svelte-43sxxs"), be(h, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), be(h, "fill", "#FF7C00"), be(h, "class", "svelte-43sxxs"), be(m, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), be(m, "fill", "#FF7C00"), be(m, "fill-opacity", "0.4"), be(m, "class", "svelte-43sxxs"), be(f, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), be(f, "fill", "#FF7C00"), be(f, "class", "svelte-43sxxs"), Ha(o, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), be(t, "viewBox", "-1200 -1200 3000 3000"), be(t, "fill", "none"), be(t, "xmlns", "http://www.w3.org/2000/svg"), be(t, "class", "svelte-43sxxs"), be(e, "class", "svelte-43sxxs"), Mu(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(p, v) {
      s5(p, e, v), o0(e, t), o0(t, r), o0(r, a), o0(r, i), o0(r, l), o0(r, s), o0(t, o), o0(o, c), o0(o, h), o0(o, m), o0(o, f);
    },
    p(p, [v]) {
      v & /*$top*/
      2 && Ha(r, "transform", "translate(" + /*$top*/
      p[1][0] + "px, " + /*$top*/
      p[1][1] + "px)"), v & /*$bottom*/
      4 && Ha(o, "transform", "translate(" + /*$bottom*/
      p[2][0] + "px, " + /*$bottom*/
      p[2][1] + "px)"), v & /*margin*/
      1 && Mu(
        e,
        "margin",
        /*margin*/
        p[0]
      );
    },
    i: Tu,
    o: Tu,
    d(p) {
      p && Ht(e);
    }
  };
}
function h5(n, e, t) {
  let r, a;
  var i = this && this.__awaiter || function(p, v, w, S) {
    function A(b) {
      return b instanceof w ? b : new w(function(y) {
        y(b);
      });
    }
    return new (w || (w = Promise))(function(b, y) {
      function E(z) {
        try {
          T(S.next(z));
        } catch (I) {
          y(I);
        }
      }
      function C(z) {
        try {
          T(S.throw(z));
        } catch (I) {
          y(I);
        }
      }
      function T(z) {
        z.done ? b(z.value) : A(z.value).then(E, C);
      }
      T((S = S.apply(p, v || [])).next());
    });
  };
  let { margin: l = !0 } = e;
  const s = Fu([0, 0]);
  Cu(n, s, (p) => t(1, r = p));
  const o = Fu([0, 0]);
  Cu(n, o, (p) => t(2, a = p));
  let c;
  function h() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([s.set([125, 140]), o.set([-125, -140])]), yield Promise.all([s.set([-125, 140]), o.set([125, -140])]), yield Promise.all([s.set([-125, 0]), o.set([125, -0])]), yield Promise.all([s.set([125, 0]), o.set([-125, 0])]);
    });
  }
  function m() {
    return i(this, void 0, void 0, function* () {
      yield h(), c || m();
    });
  }
  function f() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([s.set([125, 0]), o.set([-125, 0])]), m();
    });
  }
  return u5(() => (f(), () => c = !0)), n.$$set = (p) => {
    "margin" in p && t(0, l = p.margin);
  }, [l, r, a, s, o];
}
class f5 extends n5 {
  constructor(e) {
    super(), l5(this, e, h5, c5, o5, { margin: 0 });
  }
}
const {
  SvelteComponent: d5,
  append_hydration: Mr,
  attr: p0,
  binding_callbacks: Bu,
  check_outros: fs,
  children: x0,
  claim_component: U4,
  claim_element: F0,
  claim_space: $t,
  claim_text: Pe,
  create_component: G4,
  create_slot: j4,
  destroy_component: W4,
  destroy_each: Y4,
  detach: Q,
  element: C0,
  empty: n0,
  ensure_array_like: ui,
  get_all_dirty_from_scope: X4,
  get_slot_changes: Z4,
  group_outros: ds,
  init: m5,
  insert_hydration: se,
  mount_component: K4,
  noop: ms,
  safe_not_equal: p5,
  set_data: a0,
  set_style: pr,
  space: e0,
  text: He,
  toggle_class: Kt,
  transition_in: m0,
  transition_out: T0,
  update_slot_base: Q4
} = window.__gradio__svelte__internal, { tick: g5 } = window.__gradio__svelte__internal, { onDestroy: _5 } = window.__gradio__svelte__internal, { createEventDispatcher: v5 } = window.__gradio__svelte__internal, b5 = (n) => ({}), zu = (n) => ({}), y5 = (n) => ({}), Iu = (n) => ({});
function Nu(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r[43] = t, r;
}
function Ru(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r;
}
function w5(n) {
  let e, t, r, a, i = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, s, o;
  t = new j3({
    props: {
      Icon: cf,
      label: (
        /*i18n*/
        n[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    n[32]
  );
  const c = (
    /*#slots*/
    n[30].error
  ), h = j4(
    c,
    n,
    /*$$scope*/
    n[29],
    zu
  );
  return {
    c() {
      e = C0("div"), G4(t.$$.fragment), r = e0(), a = C0("span"), l = He(i), s = e0(), h && h.c(), this.h();
    },
    l(m) {
      e = F0(m, "DIV", { class: !0 });
      var f = x0(e);
      U4(t.$$.fragment, f), f.forEach(Q), r = $t(m), a = F0(m, "SPAN", { class: !0 });
      var p = x0(a);
      l = Pe(p, i), p.forEach(Q), s = $t(m), h && h.l(m), this.h();
    },
    h() {
      p0(e, "class", "clear-status svelte-17v219f"), p0(a, "class", "error svelte-17v219f");
    },
    m(m, f) {
      se(m, e, f), K4(t, e, null), se(m, r, f), se(m, a, f), Mr(a, l), se(m, s, f), h && h.m(m, f), o = !0;
    },
    p(m, f) {
      const p = {};
      f[0] & /*i18n*/
      2 && (p.label = /*i18n*/
      m[1]("common.clear")), t.$set(p), (!o || f[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      m[1]("common.error") + "") && a0(l, i), h && h.p && (!o || f[0] & /*$$scope*/
      536870912) && Q4(
        h,
        c,
        m,
        /*$$scope*/
        m[29],
        o ? Z4(
          c,
          /*$$scope*/
          m[29],
          f,
          b5
        ) : X4(
          /*$$scope*/
          m[29]
        ),
        zu
      );
    },
    i(m) {
      o || (m0(t.$$.fragment, m), m0(h, m), o = !0);
    },
    o(m) {
      T0(t.$$.fragment, m), T0(h, m), o = !1;
    },
    d(m) {
      m && (Q(e), Q(r), Q(a), Q(s)), W4(t), h && h.d(m);
    }
  };
}
function k5(n) {
  let e, t, r, a, i, l, s, o, c, h = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Lu(n)
  );
  function m(y, E) {
    if (
      /*progress*/
      y[7]
    ) return E5;
    if (
      /*queue_position*/
      y[2] !== null && /*queue_size*/
      y[3] !== void 0 && /*queue_position*/
      y[2] >= 0
    ) return A5;
    if (
      /*queue_position*/
      y[2] === 0
    ) return D5;
  }
  let f = m(n), p = f && f(n), v = (
    /*timer*/
    n[5] && Pu(n)
  );
  const w = [C5, F5], S = [];
  function A(y, E) {
    return (
      /*last_progress_level*/
      y[15] != null ? 0 : (
        /*show_progress*/
        y[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = A(n)) && (l = S[i] = w[i](n));
  let b = !/*timer*/
  n[5] && Yu(n);
  return {
    c() {
      h && h.c(), e = e0(), t = C0("div"), p && p.c(), r = e0(), v && v.c(), a = e0(), l && l.c(), s = e0(), b && b.c(), o = n0(), this.h();
    },
    l(y) {
      h && h.l(y), e = $t(y), t = F0(y, "DIV", { class: !0 });
      var E = x0(t);
      p && p.l(E), r = $t(E), v && v.l(E), E.forEach(Q), a = $t(y), l && l.l(y), s = $t(y), b && b.l(y), o = n0(), this.h();
    },
    h() {
      p0(t, "class", "progress-text svelte-17v219f"), Kt(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), Kt(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(y, E) {
      h && h.m(y, E), se(y, e, E), se(y, t, E), p && p.m(t, null), Mr(t, r), v && v.m(t, null), se(y, a, E), ~i && S[i].m(y, E), se(y, s, E), b && b.m(y, E), se(y, o, E), c = !0;
    },
    p(y, E) {
      /*variant*/
      y[8] === "default" && /*show_eta_bar*/
      y[18] && /*show_progress*/
      y[6] === "full" ? h ? h.p(y, E) : (h = Lu(y), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), f === (f = m(y)) && p ? p.p(y, E) : (p && p.d(1), p = f && f(y), p && (p.c(), p.m(t, r))), /*timer*/
      y[5] ? v ? v.p(y, E) : (v = Pu(y), v.c(), v.m(t, null)) : v && (v.d(1), v = null), (!c || E[0] & /*variant*/
      256) && Kt(
        t,
        "meta-text-center",
        /*variant*/
        y[8] === "center"
      ), (!c || E[0] & /*variant*/
      256) && Kt(
        t,
        "meta-text",
        /*variant*/
        y[8] === "default"
      );
      let C = i;
      i = A(y), i === C ? ~i && S[i].p(y, E) : (l && (ds(), T0(S[C], 1, 1, () => {
        S[C] = null;
      }), fs()), ~i ? (l = S[i], l ? l.p(y, E) : (l = S[i] = w[i](y), l.c()), m0(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      y[5] ? b && (ds(), T0(b, 1, 1, () => {
        b = null;
      }), fs()) : b ? (b.p(y, E), E[0] & /*timer*/
      32 && m0(b, 1)) : (b = Yu(y), b.c(), m0(b, 1), b.m(o.parentNode, o));
    },
    i(y) {
      c || (m0(l), m0(b), c = !0);
    },
    o(y) {
      T0(l), T0(b), c = !1;
    },
    d(y) {
      y && (Q(e), Q(t), Q(a), Q(s), Q(o)), h && h.d(y), p && p.d(), v && v.d(), ~i && S[i].d(y), b && b.d(y);
    }
  };
}
function Lu(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = C0("div"), this.h();
    },
    l(r) {
      e = F0(r, "DIV", { class: !0 }), x0(e).forEach(Q), this.h();
    },
    h() {
      p0(e, "class", "eta-bar svelte-17v219f"), pr(e, "transform", t);
    },
    m(r, a) {
      se(r, e, a);
    },
    p(r, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && pr(e, "transform", t);
    },
    d(r) {
      r && Q(e);
    }
  };
}
function D5(n) {
  let e;
  return {
    c() {
      e = He("processing |");
    },
    l(t) {
      e = Pe(t, "processing |");
    },
    m(t, r) {
      se(t, e, r);
    },
    p: ms,
    d(t) {
      t && Q(e);
    }
  };
}
function A5(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), r, a, i, l;
  return {
    c() {
      e = He("queue: "), r = He(t), a = He("/"), i = He(
        /*queue_size*/
        n[3]
      ), l = He(" |");
    },
    l(s) {
      e = Pe(s, "queue: "), r = Pe(s, t), a = Pe(s, "/"), i = Pe(
        s,
        /*queue_size*/
        n[3]
      ), l = Pe(s, " |");
    },
    m(s, o) {
      se(s, e, o), se(s, r, o), se(s, a, o), se(s, i, o), se(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && a0(r, t), o[0] & /*queue_size*/
      8 && a0(
        i,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (Q(e), Q(r), Q(a), Q(i), Q(l));
    }
  };
}
function E5(n) {
  let e, t = ui(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = qu(Ru(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = n0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = n0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      se(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = ui(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Ru(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = qu(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && Q(e), Y4(r, a);
    }
  };
}
function Ou(n) {
  let e, t = (
    /*p*/
    n[41].unit + ""
  ), r, a, i = " ", l;
  function s(h, m) {
    return (
      /*p*/
      h[41].length != null ? x5 : S5
    );
  }
  let o = s(n), c = o(n);
  return {
    c() {
      c.c(), e = e0(), r = He(t), a = He(" | "), l = He(i);
    },
    l(h) {
      c.l(h), e = $t(h), r = Pe(h, t), a = Pe(h, " | "), l = Pe(h, i);
    },
    m(h, m) {
      c.m(h, m), se(h, e, m), se(h, r, m), se(h, a, m), se(h, l, m);
    },
    p(h, m) {
      o === (o = s(h)) && c ? c.p(h, m) : (c.d(1), c = o(h), c && (c.c(), c.m(e.parentNode, e))), m[0] & /*progress*/
      128 && t !== (t = /*p*/
      h[41].unit + "") && a0(r, t);
    },
    d(h) {
      h && (Q(e), Q(r), Q(a), Q(l)), c.d(h);
    }
  };
}
function S5(n) {
  let e = on(
    /*p*/
    n[41].index || 0
  ) + "", t;
  return {
    c() {
      t = He(e);
    },
    l(r) {
      t = Pe(r, e);
    },
    m(r, a) {
      se(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = on(
        /*p*/
        r[41].index || 0
      ) + "") && a0(t, e);
    },
    d(r) {
      r && Q(t);
    }
  };
}
function x5(n) {
  let e = on(
    /*p*/
    n[41].index || 0
  ) + "", t, r, a = on(
    /*p*/
    n[41].length
  ) + "", i;
  return {
    c() {
      t = He(e), r = He("/"), i = He(a);
    },
    l(l) {
      t = Pe(l, e), r = Pe(l, "/"), i = Pe(l, a);
    },
    m(l, s) {
      se(l, t, s), se(l, r, s), se(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = on(
        /*p*/
        l[41].index || 0
      ) + "") && a0(t, e), s[0] & /*progress*/
      128 && a !== (a = on(
        /*p*/
        l[41].length
      ) + "") && a0(i, a);
    },
    d(l) {
      l && (Q(t), Q(r), Q(i));
    }
  };
}
function qu(n) {
  let e, t = (
    /*p*/
    n[41].index != null && Ou(n)
  );
  return {
    c() {
      t && t.c(), e = n0();
    },
    l(r) {
      t && t.l(r), e = n0();
    },
    m(r, a) {
      t && t.m(r, a), se(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].index != null ? t ? t.p(r, a) : (t = Ou(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && Q(e), t && t.d(r);
    }
  };
}
function Pu(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), r, a;
  return {
    c() {
      e = He(
        /*formatted_timer*/
        n[20]
      ), r = He(t), a = He("s");
    },
    l(i) {
      e = Pe(
        i,
        /*formatted_timer*/
        n[20]
      ), r = Pe(i, t), a = Pe(i, "s");
    },
    m(i, l) {
      se(i, e, l), se(i, r, l), se(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && a0(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && a0(r, t);
    },
    d(i) {
      i && (Q(e), Q(r), Q(a));
    }
  };
}
function F5(n) {
  let e, t;
  return e = new f5({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      G4(e.$$.fragment);
    },
    l(r) {
      U4(e.$$.fragment, r);
    },
    m(r, a) {
      K4(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      r[8] === "default"), e.$set(i);
    },
    i(r) {
      t || (m0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      T0(e.$$.fragment, r), t = !1;
    },
    d(r) {
      W4(e, r);
    }
  };
}
function C5(n) {
  let e, t, r, a, i, l = `${/*last_progress_level*/
  n[15] * 100}%`, s = (
    /*progress*/
    n[7] != null && Hu(n)
  );
  return {
    c() {
      e = C0("div"), t = C0("div"), s && s.c(), r = e0(), a = C0("div"), i = C0("div"), this.h();
    },
    l(o) {
      e = F0(o, "DIV", { class: !0 });
      var c = x0(e);
      t = F0(c, "DIV", { class: !0 });
      var h = x0(t);
      s && s.l(h), h.forEach(Q), r = $t(c), a = F0(c, "DIV", { class: !0 });
      var m = x0(a);
      i = F0(m, "DIV", { class: !0 }), x0(i).forEach(Q), m.forEach(Q), c.forEach(Q), this.h();
    },
    h() {
      p0(t, "class", "progress-level-inner svelte-17v219f"), p0(i, "class", "progress-bar svelte-17v219f"), pr(i, "width", l), p0(a, "class", "progress-bar-wrap svelte-17v219f"), p0(e, "class", "progress-level svelte-17v219f");
    },
    m(o, c) {
      se(o, e, c), Mr(e, t), s && s.m(t, null), Mr(e, r), Mr(e, a), Mr(a, i), n[31](i);
    },
    p(o, c) {
      /*progress*/
      o[7] != null ? s ? s.p(o, c) : (s = Hu(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), c[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && pr(i, "width", l);
    },
    i: ms,
    o: ms,
    d(o) {
      o && Q(e), s && s.d(), n[31](null);
    }
  };
}
function Hu(n) {
  let e, t = ui(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Wu(Nu(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = n0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = n0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      se(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = ui(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Nu(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Wu(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && Q(e), Y4(r, a);
    }
  };
}
function Vu(n) {
  let e, t, r, a, i = (
    /*i*/
    n[43] !== 0 && T5()
  ), l = (
    /*p*/
    n[41].desc != null && Uu(n)
  ), s = (
    /*p*/
    n[41].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null && Gu()
  ), o = (
    /*progress_level*/
    n[14] != null && ju(n)
  );
  return {
    c() {
      i && i.c(), e = e0(), l && l.c(), t = e0(), s && s.c(), r = e0(), o && o.c(), a = n0();
    },
    l(c) {
      i && i.l(c), e = $t(c), l && l.l(c), t = $t(c), s && s.l(c), r = $t(c), o && o.l(c), a = n0();
    },
    m(c, h) {
      i && i.m(c, h), se(c, e, h), l && l.m(c, h), se(c, t, h), s && s.m(c, h), se(c, r, h), o && o.m(c, h), se(c, a, h);
    },
    p(c, h) {
      /*p*/
      c[41].desc != null ? l ? l.p(c, h) : (l = Uu(c), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? s || (s = Gu(), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), /*progress_level*/
      c[14] != null ? o ? o.p(c, h) : (o = ju(c), o.c(), o.m(a.parentNode, a)) : o && (o.d(1), o = null);
    },
    d(c) {
      c && (Q(e), Q(t), Q(r), Q(a)), i && i.d(c), l && l.d(c), s && s.d(c), o && o.d(c);
    }
  };
}
function T5(n) {
  let e;
  return {
    c() {
      e = He(" /");
    },
    l(t) {
      e = Pe(t, " /");
    },
    m(t, r) {
      se(t, e, r);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function Uu(n) {
  let e = (
    /*p*/
    n[41].desc + ""
  ), t;
  return {
    c() {
      t = He(e);
    },
    l(r) {
      t = Pe(r, e);
    },
    m(r, a) {
      se(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[41].desc + "") && a0(t, e);
    },
    d(r) {
      r && Q(t);
    }
  };
}
function Gu(n) {
  let e;
  return {
    c() {
      e = He("-");
    },
    l(t) {
      e = Pe(t, "-");
    },
    m(t, r) {
      se(t, e, r);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function ju(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[43]
  ] || 0)).toFixed(1) + "", t, r;
  return {
    c() {
      t = He(e), r = He("%");
    },
    l(a) {
      t = Pe(a, e), r = Pe(a, "%");
    },
    m(a, i) {
      se(a, t, i), se(a, r, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && a0(t, e);
    },
    d(a) {
      a && (Q(t), Q(r));
    }
  };
}
function Wu(n) {
  let e, t = (
    /*p*/
    (n[41].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null) && Vu(n)
  );
  return {
    c() {
      t && t.c(), e = n0();
    },
    l(r) {
      t && t.l(r), e = n0();
    },
    m(r, a) {
      t && t.m(r, a), se(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[43]
      ] != null ? t ? t.p(r, a) : (t = Vu(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && Q(e), t && t.d(r);
    }
  };
}
function Yu(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[30]["additional-loading-text"]
  ), l = j4(
    i,
    n,
    /*$$scope*/
    n[29],
    Iu
  );
  return {
    c() {
      e = C0("p"), t = He(
        /*loading_text*/
        n[9]
      ), r = e0(), l && l.c(), this.h();
    },
    l(s) {
      e = F0(s, "P", { class: !0 });
      var o = x0(e);
      t = Pe(
        o,
        /*loading_text*/
        n[9]
      ), o.forEach(Q), r = $t(s), l && l.l(s), this.h();
    },
    h() {
      p0(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      se(s, e, o), Mr(e, t), se(s, r, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && a0(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && Q4(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? Z4(
          i,
          /*$$scope*/
          s[29],
          o,
          y5
        ) : X4(
          /*$$scope*/
          s[29]
        ),
        Iu
      );
    },
    i(s) {
      a || (m0(l, s), a = !0);
    },
    o(s) {
      T0(l, s), a = !1;
    },
    d(s) {
      s && (Q(e), Q(r)), l && l.d(s);
    }
  };
}
function M5(n) {
  let e, t, r, a, i;
  const l = [k5, w5], s = [];
  function o(c, h) {
    return (
      /*status*/
      c[4] === "pending" ? 0 : (
        /*status*/
        c[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = o(n)) && (r = s[t] = l[t](n)), {
    c() {
      e = C0("div"), r && r.c(), this.h();
    },
    l(c) {
      e = F0(c, "DIV", { class: !0 });
      var h = x0(e);
      r && r.l(h), h.forEach(Q), this.h();
    },
    h() {
      p0(e, "class", a = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-17v219f"), Kt(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden" || /*status*/
      n[4] == "streaming"), Kt(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), Kt(
        e,
        "generating",
        /*status*/
        n[4] === "generating" && /*show_progress*/
        n[6] === "full"
      ), Kt(
        e,
        "border",
        /*border*/
        n[12]
      ), pr(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), pr(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, h) {
      se(c, e, h), ~t && s[t].m(e, null), n[33](e), i = !0;
    },
    p(c, h) {
      let m = t;
      t = o(c), t === m ? ~t && s[t].p(c, h) : (r && (ds(), T0(s[m], 1, 1, () => {
        s[m] = null;
      }), fs()), ~t ? (r = s[t], r ? r.p(c, h) : (r = s[t] = l[t](c), r.c()), m0(r, 1), r.m(e, null)) : r = null), (!i || h[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-17v219f")) && p0(e, "class", a), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && Kt(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden" || /*status*/
      c[4] == "streaming"), (!i || h[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Kt(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && Kt(
        e,
        "generating",
        /*status*/
        c[4] === "generating" && /*show_progress*/
        c[6] === "full"
      ), (!i || h[0] & /*variant, show_progress, border*/
      4416) && Kt(
        e,
        "border",
        /*border*/
        c[12]
      ), h[0] & /*absolute*/
      1024 && pr(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), h[0] & /*absolute*/
      1024 && pr(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      i || (m0(r), i = !0);
    },
    o(c) {
      T0(r), i = !1;
    },
    d(c) {
      c && Q(e), ~t && s[t].d(), n[33](null);
    }
  };
}
var B5 = function(n, e, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(l) {
      l(i);
    });
  }
  return new (t || (t = Promise))(function(i, l) {
    function s(h) {
      try {
        c(r.next(h));
      } catch (m) {
        l(m);
      }
    }
    function o(h) {
      try {
        c(r.throw(h));
      } catch (m) {
        l(m);
      }
    }
    function c(h) {
      h.done ? i(h.value) : a(h.value).then(s, o);
    }
    c((r = r.apply(n, e || [])).next());
  });
};
let Va = [], zl = !1;
const z5 = typeof window < "u", J4 = z5 ? window.requestAnimationFrame : (n) => {
};
function I5(n) {
  return B5(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Va.push(e), !zl) zl = !0;
      else return;
      yield g5(), J4(() => {
        let r = [0, 0];
        for (let a = 0; a < Va.length; a++) {
          const l = Va[a].getBoundingClientRect();
          (a === 0 || l.top + window.scrollY <= r[0]) && (r[0] = l.top + window.scrollY, r[1] = a);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), zl = !1, Va = [];
      });
    }
  });
}
function N5(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const l = v5();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: c } = e, { queue_size: h } = e, { status: m } = e, { scroll_to_output: f = !1 } = e, { timer: p = !0 } = e, { show_progress: v = "full" } = e, { message: w = null } = e, { progress: S = null } = e, { variant: A = "default" } = e, { loading_text: b = "Loading..." } = e, { absolute: y = !0 } = e, { translucent: E = !1 } = e, { border: C = !1 } = e, { autoscroll: T } = e, z, I = !1, B = 0, L = 0, R = null, W = null, oe = 0, q = null, ue, ie = null, we = !0;
  const me = () => {
    t(0, o = t(27, R = t(19, te = null))), t(25, B = performance.now()), t(26, L = 0), I = !0, ke();
  };
  function ke() {
    J4(() => {
      t(26, L = (performance.now() - B) / 1e3), I && ke();
    });
  }
  function De() {
    t(26, L = 0), t(0, o = t(27, R = t(19, te = null))), I && (I = !1);
  }
  _5(() => {
    I && De();
  });
  let te = null;
  function ae(H) {
    Bu[H ? "unshift" : "push"](() => {
      ie = H, t(16, ie), t(7, S), t(14, q), t(15, ue);
    });
  }
  const ge = () => {
    l("clear_status");
  };
  function Le(H) {
    Bu[H ? "unshift" : "push"](() => {
      z = H, t(13, z);
    });
  }
  return n.$$set = (H) => {
    "i18n" in H && t(1, s = H.i18n), "eta" in H && t(0, o = H.eta), "queue_position" in H && t(2, c = H.queue_position), "queue_size" in H && t(3, h = H.queue_size), "status" in H && t(4, m = H.status), "scroll_to_output" in H && t(22, f = H.scroll_to_output), "timer" in H && t(5, p = H.timer), "show_progress" in H && t(6, v = H.show_progress), "message" in H && t(23, w = H.message), "progress" in H && t(7, S = H.progress), "variant" in H && t(8, A = H.variant), "loading_text" in H && t(9, b = H.loading_text), "absolute" in H && t(10, y = H.absolute), "translucent" in H && t(11, E = H.translucent), "border" in H && t(12, C = H.border), "autoscroll" in H && t(24, T = H.autoscroll), "$$scope" in H && t(29, i = H.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = R), o != null && R !== o && (t(28, W = (performance.now() - B) / 1e3 + o), t(19, te = W.toFixed(1)), t(27, R = o))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, oe = W === null || W <= 0 || !L ? null : Math.min(L / W, 1)), n.$$.dirty[0] & /*progress*/
    128 && S != null && t(18, we = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (S != null ? t(14, q = S.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, q = null), q ? (t(15, ue = q[q.length - 1]), ie && (ue === 0 ? t(16, ie.style.transition = "0", ie) : t(16, ie.style.transition = "150ms", ie))) : t(15, ue = void 0)), n.$$.dirty[0] & /*status*/
    16 && (m === "pending" ? me() : De()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && f && (m === "pending" || m === "complete") && I5(z, T), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, r = L.toFixed(1));
  }, [
    o,
    s,
    c,
    h,
    m,
    p,
    v,
    S,
    A,
    b,
    y,
    E,
    C,
    z,
    q,
    ue,
    ie,
    oe,
    we,
    te,
    r,
    l,
    f,
    w,
    T,
    B,
    L,
    R,
    W,
    i,
    a,
    ae,
    ge,
    Le
  ];
}
class R5 extends d5 {
  constructor(e) {
    super(), m5(
      this,
      e,
      N5,
      M5,
      p5,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: $4,
  setPrototypeOf: Xu,
  isFrozen: L5,
  getPrototypeOf: O5,
  getOwnPropertyDescriptor: q5
} = Object;
let {
  freeze: xt,
  seal: i0,
  create: eh
} = Object, {
  apply: ps,
  construct: gs
} = typeof Reflect < "u" && Reflect;
xt || (xt = function(e) {
  return e;
});
i0 || (i0 = function(e) {
  return e;
});
ps || (ps = function(e, t, r) {
  return e.apply(t, r);
});
gs || (gs = function(e, t) {
  return new e(...t);
});
const Ua = Ft(Array.prototype.forEach), P5 = Ft(Array.prototype.lastIndexOf), Zu = Ft(Array.prototype.pop), Mn = Ft(Array.prototype.push), H5 = Ft(Array.prototype.splice), $a = Ft(String.prototype.toLowerCase), Il = Ft(String.prototype.toString), Ku = Ft(String.prototype.match), Bn = Ft(String.prototype.replace), V5 = Ft(String.prototype.indexOf), U5 = Ft(String.prototype.trim), h0 = Ft(Object.prototype.hasOwnProperty), Et = Ft(RegExp.prototype.test), zn = G5(TypeError);
function Ft(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return ps(n, e, r);
  };
}
function G5(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return gs(n, t);
  };
}
function pe(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $a;
  Xu && Xu(n, null);
  let r = e.length;
  for (; r--; ) {
    let a = e[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (L5(e) || (e[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function j5(n) {
  for (let e = 0; e < n.length; e++)
    h0(n, e) || (n[e] = null);
  return n;
}
function Tr(n) {
  const e = eh(null);
  for (const [t, r] of $4(n))
    h0(n, t) && (Array.isArray(r) ? e[t] = j5(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = Tr(r) : e[t] = r);
  return e;
}
function In(n, e) {
  for (; n !== null; ) {
    const r = q5(n, e);
    if (r) {
      if (r.get)
        return Ft(r.get);
      if (typeof r.value == "function")
        return Ft(r.value);
    }
    n = O5(n);
  }
  function t() {
    return null;
  }
  return t;
}
const Qu = xt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Nl = xt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rl = xt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), W5 = xt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ll = xt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Y5 = xt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ju = xt(["#text"]), $u = xt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ol = xt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), e1 = xt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ga = xt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), X5 = i0(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Z5 = i0(/<%[\w\W]*|[\w\W]*%>/gm), K5 = i0(/\$\{[\w\W]*/gm), Q5 = i0(/^data-[\-\w.\u00B7-\uFFFF]+$/), J5 = i0(/^aria-[\-\w]+$/), th = i0(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), $5 = i0(/^(?:\w+script|data):/i), e3 = i0(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), rh = i0(/^html$/i), t3 = i0(/^[a-z][.\w]*(-[.\w]+)+$/i);
var t1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: J5,
  ATTR_WHITESPACE: e3,
  CUSTOM_ELEMENT: t3,
  DATA_ATTR: Q5,
  DOCTYPE_NAME: rh,
  ERB_EXPR: Z5,
  IS_ALLOWED_URI: th,
  IS_SCRIPT_OR_DATA: $5,
  MUSTACHE_EXPR: X5,
  TMPLIT_EXPR: K5
});
const Nn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, r3 = function() {
  return typeof window > "u" ? null : window;
}, n3 = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (r = t.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, r1 = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function nh() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r3();
  const e = (K) => nh(K);
  if (e.version = "3.2.5", e.removed = [], !n || !n.document || n.document.nodeType !== Nn.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const r = t, a = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: l,
    Node: s,
    Element: o,
    NodeFilter: c,
    NamedNodeMap: h = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: m,
    DOMParser: f,
    trustedTypes: p
  } = n, v = o.prototype, w = In(v, "cloneNode"), S = In(v, "remove"), A = In(v, "nextSibling"), b = In(v, "childNodes"), y = In(v, "parentNode");
  if (typeof l == "function") {
    const K = t.createElement("template");
    K.content && K.content.ownerDocument && (t = K.content.ownerDocument);
  }
  let E, C = "";
  const {
    implementation: T,
    createNodeIterator: z,
    createDocumentFragment: I,
    getElementsByTagName: B
  } = t, {
    importNode: L
  } = r;
  let R = r1();
  e.isSupported = typeof $4 == "function" && typeof y == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: W,
    ERB_EXPR: oe,
    TMPLIT_EXPR: q,
    DATA_ATTR: ue,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: we,
    ATTR_WHITESPACE: me,
    CUSTOM_ELEMENT: ke
  } = t1;
  let {
    IS_ALLOWED_URI: De
  } = t1, te = null;
  const ae = pe({}, [...Qu, ...Nl, ...Rl, ...Ll, ...Ju]);
  let ge = null;
  const Le = pe({}, [...$u, ...Ol, ...e1, ...Ga]);
  let H = Object.seal(eh(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), U = null, fe = null, ve = !0, Se = !0, Me = !1, ze = !0, Ye = !1, ct = !0, Xe = !1, Ue = !1, Ge = !1, j = !1, N = !1, le = !1, Pt = !0, fa = !1;
  const Er = "user-content-";
  let rr = !0, Sr = !1, nr = {}, _0 = null;
  const v0 = pe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Wr = null;
  const so = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Vi = null;
  const oo = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), da = "http://www.w3.org/1998/Math/MathML", ma = "http://www.w3.org/2000/svg", L0 = "http://www.w3.org/1999/xhtml";
  let Yr = L0, Ui = !1, Gi = null;
  const Ah = pe({}, [da, ma, L0], Il);
  let pa = pe({}, ["mi", "mo", "mn", "ms", "mtext"]), ga = pe({}, ["annotation-xml"]);
  const Eh = pe({}, ["title", "style", "font", "a", "script"]);
  let vn = null;
  const Sh = ["application/xhtml+xml", "text/html"], xh = "text/html";
  let it = null, Xr = null;
  const Fh = t.createElement("form"), uo = function(F) {
    return F instanceof RegExp || F instanceof Function;
  }, ji = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xr && Xr === F)) {
      if ((!F || typeof F != "object") && (F = {}), F = Tr(F), vn = // eslint-disable-next-line unicorn/prefer-includes
      Sh.indexOf(F.PARSER_MEDIA_TYPE) === -1 ? xh : F.PARSER_MEDIA_TYPE, it = vn === "application/xhtml+xml" ? Il : $a, te = h0(F, "ALLOWED_TAGS") ? pe({}, F.ALLOWED_TAGS, it) : ae, ge = h0(F, "ALLOWED_ATTR") ? pe({}, F.ALLOWED_ATTR, it) : Le, Gi = h0(F, "ALLOWED_NAMESPACES") ? pe({}, F.ALLOWED_NAMESPACES, Il) : Ah, Vi = h0(F, "ADD_URI_SAFE_ATTR") ? pe(Tr(oo), F.ADD_URI_SAFE_ATTR, it) : oo, Wr = h0(F, "ADD_DATA_URI_TAGS") ? pe(Tr(so), F.ADD_DATA_URI_TAGS, it) : so, _0 = h0(F, "FORBID_CONTENTS") ? pe({}, F.FORBID_CONTENTS, it) : v0, U = h0(F, "FORBID_TAGS") ? pe({}, F.FORBID_TAGS, it) : {}, fe = h0(F, "FORBID_ATTR") ? pe({}, F.FORBID_ATTR, it) : {}, nr = h0(F, "USE_PROFILES") ? F.USE_PROFILES : !1, ve = F.ALLOW_ARIA_ATTR !== !1, Se = F.ALLOW_DATA_ATTR !== !1, Me = F.ALLOW_UNKNOWN_PROTOCOLS || !1, ze = F.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ye = F.SAFE_FOR_TEMPLATES || !1, ct = F.SAFE_FOR_XML !== !1, Xe = F.WHOLE_DOCUMENT || !1, j = F.RETURN_DOM || !1, N = F.RETURN_DOM_FRAGMENT || !1, le = F.RETURN_TRUSTED_TYPE || !1, Ge = F.FORCE_BODY || !1, Pt = F.SANITIZE_DOM !== !1, fa = F.SANITIZE_NAMED_PROPS || !1, rr = F.KEEP_CONTENT !== !1, Sr = F.IN_PLACE || !1, De = F.ALLOWED_URI_REGEXP || th, Yr = F.NAMESPACE || L0, pa = F.MATHML_TEXT_INTEGRATION_POINTS || pa, ga = F.HTML_INTEGRATION_POINTS || ga, H = F.CUSTOM_ELEMENT_HANDLING || {}, F.CUSTOM_ELEMENT_HANDLING && uo(F.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = F.CUSTOM_ELEMENT_HANDLING.tagNameCheck), F.CUSTOM_ELEMENT_HANDLING && uo(F.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = F.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), F.CUSTOM_ELEMENT_HANDLING && typeof F.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = F.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ye && (Se = !1), N && (j = !0), nr && (te = pe({}, Ju), ge = [], nr.html === !0 && (pe(te, Qu), pe(ge, $u)), nr.svg === !0 && (pe(te, Nl), pe(ge, Ol), pe(ge, Ga)), nr.svgFilters === !0 && (pe(te, Rl), pe(ge, Ol), pe(ge, Ga)), nr.mathMl === !0 && (pe(te, Ll), pe(ge, e1), pe(ge, Ga))), F.ADD_TAGS && (te === ae && (te = Tr(te)), pe(te, F.ADD_TAGS, it)), F.ADD_ATTR && (ge === Le && (ge = Tr(ge)), pe(ge, F.ADD_ATTR, it)), F.ADD_URI_SAFE_ATTR && pe(Vi, F.ADD_URI_SAFE_ATTR, it), F.FORBID_CONTENTS && (_0 === v0 && (_0 = Tr(_0)), pe(_0, F.FORBID_CONTENTS, it)), rr && (te["#text"] = !0), Xe && pe(te, ["html", "head", "body"]), te.table && (pe(te, ["tbody"]), delete U.tbody), F.TRUSTED_TYPES_POLICY) {
        if (typeof F.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw zn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof F.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw zn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        E = F.TRUSTED_TYPES_POLICY, C = E.createHTML("");
      } else
        E === void 0 && (E = n3(p, a)), E !== null && typeof C == "string" && (C = E.createHTML(""));
      xt && xt(F), Xr = F;
    }
  }, co = pe({}, [...Nl, ...Rl, ...W5]), ho = pe({}, [...Ll, ...Y5]), Ch = function(F) {
    let V = y(F);
    (!V || !V.tagName) && (V = {
      namespaceURI: Yr,
      tagName: "template"
    });
    const Z = $a(F.tagName), Ie = $a(V.tagName);
    return Gi[F.namespaceURI] ? F.namespaceURI === ma ? V.namespaceURI === L0 ? Z === "svg" : V.namespaceURI === da ? Z === "svg" && (Ie === "annotation-xml" || pa[Ie]) : !!co[Z] : F.namespaceURI === da ? V.namespaceURI === L0 ? Z === "math" : V.namespaceURI === ma ? Z === "math" && ga[Ie] : !!ho[Z] : F.namespaceURI === L0 ? V.namespaceURI === ma && !ga[Ie] || V.namespaceURI === da && !pa[Ie] ? !1 : !ho[Z] && (Eh[Z] || !co[Z]) : !!(vn === "application/xhtml+xml" && Gi[F.namespaceURI]) : !1;
  }, b0 = function(F) {
    Mn(e.removed, {
      element: F
    });
    try {
      y(F).removeChild(F);
    } catch {
      S(F);
    }
  }, _a = function(F, V) {
    try {
      Mn(e.removed, {
        attribute: V.getAttributeNode(F),
        from: V
      });
    } catch {
      Mn(e.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(F), F === "is")
      if (j || N)
        try {
          b0(V);
        } catch {
        }
      else
        try {
          V.setAttribute(F, "");
        } catch {
        }
  }, fo = function(F) {
    let V = null, Z = null;
    if (Ge)
      F = "<remove></remove>" + F;
    else {
      const ht = Ku(F, /^[\r\n\t ]+/);
      Z = ht && ht[0];
    }
    vn === "application/xhtml+xml" && Yr === L0 && (F = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + F + "</body></html>");
    const Ie = E ? E.createHTML(F) : F;
    if (Yr === L0)
      try {
        V = new f().parseFromString(Ie, vn);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = T.createDocument(Yr, "template", null);
      try {
        V.documentElement.innerHTML = Ui ? C : Ie;
      } catch {
      }
    }
    const yt = V.body || V.documentElement;
    return F && Z && yt.insertBefore(t.createTextNode(Z), yt.childNodes[0] || null), Yr === L0 ? B.call(V, Xe ? "html" : "body")[0] : Xe ? V.documentElement : yt;
  }, mo = function(F) {
    return z.call(
      F.ownerDocument || F,
      F,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Wi = function(F) {
    return F instanceof m && (typeof F.nodeName != "string" || typeof F.textContent != "string" || typeof F.removeChild != "function" || !(F.attributes instanceof h) || typeof F.removeAttribute != "function" || typeof F.setAttribute != "function" || typeof F.namespaceURI != "string" || typeof F.insertBefore != "function" || typeof F.hasChildNodes != "function");
  }, po = function(F) {
    return typeof s == "function" && F instanceof s;
  };
  function O0(K, F, V) {
    Ua(K, (Z) => {
      Z.call(e, F, V, Xr);
    });
  }
  const go = function(F) {
    let V = null;
    if (O0(R.beforeSanitizeElements, F, null), Wi(F))
      return b0(F), !0;
    const Z = it(F.nodeName);
    if (O0(R.uponSanitizeElement, F, {
      tagName: Z,
      allowedTags: te
    }), F.hasChildNodes() && !po(F.firstElementChild) && Et(/<[/\w!]/g, F.innerHTML) && Et(/<[/\w!]/g, F.textContent) || F.nodeType === Nn.progressingInstruction || ct && F.nodeType === Nn.comment && Et(/<[/\w]/g, F.data))
      return b0(F), !0;
    if (!te[Z] || U[Z]) {
      if (!U[Z] && vo(Z) && (H.tagNameCheck instanceof RegExp && Et(H.tagNameCheck, Z) || H.tagNameCheck instanceof Function && H.tagNameCheck(Z)))
        return !1;
      if (rr && !_0[Z]) {
        const Ie = y(F) || F.parentNode, yt = b(F) || F.childNodes;
        if (yt && Ie) {
          const ht = yt.length;
          for (let Tt = ht - 1; Tt >= 0; --Tt) {
            const y0 = w(yt[Tt], !0);
            y0.__removalCount = (F.__removalCount || 0) + 1, Ie.insertBefore(y0, A(F));
          }
        }
      }
      return b0(F), !0;
    }
    return F instanceof o && !Ch(F) || (Z === "noscript" || Z === "noembed" || Z === "noframes") && Et(/<\/no(script|embed|frames)/i, F.innerHTML) ? (b0(F), !0) : (Ye && F.nodeType === Nn.text && (V = F.textContent, Ua([W, oe, q], (Ie) => {
      V = Bn(V, Ie, " ");
    }), F.textContent !== V && (Mn(e.removed, {
      element: F.cloneNode()
    }), F.textContent = V)), O0(R.afterSanitizeElements, F, null), !1);
  }, _o = function(F, V, Z) {
    if (Pt && (V === "id" || V === "name") && (Z in t || Z in Fh))
      return !1;
    if (!(Se && !fe[V] && Et(ue, V))) {
      if (!(ve && Et(ie, V))) {
        if (!ge[V] || fe[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vo(F) && (H.tagNameCheck instanceof RegExp && Et(H.tagNameCheck, F) || H.tagNameCheck instanceof Function && H.tagNameCheck(F)) && (H.attributeNameCheck instanceof RegExp && Et(H.attributeNameCheck, V) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(V)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && Et(H.tagNameCheck, Z) || H.tagNameCheck instanceof Function && H.tagNameCheck(Z)))
          ) return !1;
        } else if (!Vi[V]) {
          if (!Et(De, Bn(Z, me, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && F !== "script" && V5(Z, "data:") === 0 && Wr[F])) {
              if (!(Me && !Et(we, Bn(Z, me, "")))) {
                if (Z)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vo = function(F) {
    return F !== "annotation-xml" && Ku(F, ke);
  }, bo = function(F) {
    O0(R.beforeSanitizeAttributes, F, null);
    const {
      attributes: V
    } = F;
    if (!V || Wi(F))
      return;
    const Z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ge,
      forceKeepAttr: void 0
    };
    let Ie = V.length;
    for (; Ie--; ) {
      const yt = V[Ie], {
        name: ht,
        namespaceURI: Tt,
        value: y0
      } = yt, bn = it(ht);
      let Dt = ht === "value" ? y0 : U5(y0);
      if (Z.attrName = bn, Z.attrValue = Dt, Z.keepAttr = !0, Z.forceKeepAttr = void 0, O0(R.uponSanitizeAttribute, F, Z), Dt = Z.attrValue, fa && (bn === "id" || bn === "name") && (_a(ht, F), Dt = Er + Dt), ct && Et(/((--!?|])>)|<\/(style|title)/i, Dt)) {
        _a(ht, F);
        continue;
      }
      if (Z.forceKeepAttr || (_a(ht, F), !Z.keepAttr))
        continue;
      if (!ze && Et(/\/>/i, Dt)) {
        _a(ht, F);
        continue;
      }
      Ye && Ua([W, oe, q], (wo) => {
        Dt = Bn(Dt, wo, " ");
      });
      const yo = it(F.nodeName);
      if (_o(yo, bn, Dt)) {
        if (E && typeof p == "object" && typeof p.getAttributeType == "function" && !Tt)
          switch (p.getAttributeType(yo, bn)) {
            case "TrustedHTML": {
              Dt = E.createHTML(Dt);
              break;
            }
            case "TrustedScriptURL": {
              Dt = E.createScriptURL(Dt);
              break;
            }
          }
        try {
          Tt ? F.setAttributeNS(Tt, ht, Dt) : F.setAttribute(ht, Dt), Wi(F) ? b0(F) : Zu(e.removed);
        } catch {
        }
      }
    }
    O0(R.afterSanitizeAttributes, F, null);
  }, Th = function K(F) {
    let V = null;
    const Z = mo(F);
    for (O0(R.beforeSanitizeShadowDOM, F, null); V = Z.nextNode(); )
      O0(R.uponSanitizeShadowNode, V, null), go(V), bo(V), V.content instanceof i && K(V.content);
    O0(R.afterSanitizeShadowDOM, F, null);
  };
  return e.sanitize = function(K) {
    let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, Z = null, Ie = null, yt = null;
    if (Ui = !K, Ui && (K = "<!-->"), typeof K != "string" && !po(K))
      if (typeof K.toString == "function") {
        if (K = K.toString(), typeof K != "string")
          throw zn("dirty is not a string, aborting");
      } else
        throw zn("toString is not a function");
    if (!e.isSupported)
      return K;
    if (Ue || ji(F), e.removed = [], typeof K == "string" && (Sr = !1), Sr) {
      if (K.nodeName) {
        const y0 = it(K.nodeName);
        if (!te[y0] || U[y0])
          throw zn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (K instanceof s)
      V = fo("<!---->"), Z = V.ownerDocument.importNode(K, !0), Z.nodeType === Nn.element && Z.nodeName === "BODY" || Z.nodeName === "HTML" ? V = Z : V.appendChild(Z);
    else {
      if (!j && !Ye && !Xe && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return E && le ? E.createHTML(K) : K;
      if (V = fo(K), !V)
        return j ? null : le ? C : "";
    }
    V && Ge && b0(V.firstChild);
    const ht = mo(Sr ? K : V);
    for (; Ie = ht.nextNode(); )
      go(Ie), bo(Ie), Ie.content instanceof i && Th(Ie.content);
    if (Sr)
      return K;
    if (j) {
      if (N)
        for (yt = I.call(V.ownerDocument); V.firstChild; )
          yt.appendChild(V.firstChild);
      else
        yt = V;
      return (ge.shadowroot || ge.shadowrootmode) && (yt = L.call(r, yt, !0)), yt;
    }
    let Tt = Xe ? V.outerHTML : V.innerHTML;
    return Xe && te["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && Et(rh, V.ownerDocument.doctype.name) && (Tt = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + Tt), Ye && Ua([W, oe, q], (y0) => {
      Tt = Bn(Tt, y0, " ");
    }), E && le ? E.createHTML(Tt) : Tt;
  }, e.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ji(K), Ue = !0;
  }, e.clearConfig = function() {
    Xr = null, Ue = !1;
  }, e.isValidAttribute = function(K, F, V) {
    Xr || ji({});
    const Z = it(K), Ie = it(F);
    return _o(Z, Ie, V);
  }, e.addHook = function(K, F) {
    typeof F == "function" && Mn(R[K], F);
  }, e.removeHook = function(K, F) {
    if (F !== void 0) {
      const V = P5(R[K], F);
      return V === -1 ? void 0 : H5(R[K], V, 1)[0];
    }
    return Zu(R[K]);
  }, e.removeHooks = function(K) {
    R[K] = [];
  }, e.removeAllHooks = function() {
    R = r1();
  }, e;
}
nh();
const {
  SvelteComponent: a3,
  attr: i3,
  children: l3,
  claim_element: s3,
  detach: _s,
  element: o3,
  empty: n1,
  init: u3,
  insert_hydration: ah,
  noop: a1,
  safe_not_equal: c3,
  set_style: i1
} = window.__gradio__svelte__internal;
function l1(n) {
  let e, t = `${/*time_limit*/
  n[0]}s`;
  return {
    c() {
      e = o3("div"), this.h();
    },
    l(r) {
      e = s3(r, "DIV", { class: !0 }), l3(e).forEach(_s), this.h();
    },
    h() {
      i3(e, "class", "streaming-bar svelte-ga0jj6"), i1(e, "animation-duration", t);
    },
    m(r, a) {
      ah(r, e, a);
    },
    p(r, a) {
      a & /*time_limit*/
      1 && t !== (t = `${/*time_limit*/
      r[0]}s`) && i1(e, "animation-duration", t);
    },
    d(r) {
      r && _s(e);
    }
  };
}
function h3(n) {
  let e, t = (
    /*time_limit*/
    n[0] && l1(n)
  );
  return {
    c() {
      t && t.c(), e = n1();
    },
    l(r) {
      t && t.l(r), e = n1();
    },
    m(r, a) {
      t && t.m(r, a), ah(r, e, a);
    },
    p(r, [a]) {
      /*time_limit*/
      r[0] ? t ? t.p(r, a) : (t = l1(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: a1,
    o: a1,
    d(r) {
      r && _s(e), t && t.d(r);
    }
  };
}
function f3(n, e, t) {
  let { time_limit: r } = e;
  return n.$$set = (a) => {
    "time_limit" in a && t(0, r = a.time_limit);
  }, [r];
}
class ih extends a3 {
  constructor(e) {
    super(), u3(this, e, f3, h3, c3, { time_limit: 0 });
  }
}
const {
  SvelteComponent: d3,
  append_hydration: ql,
  attr: ja,
  children: s1,
  claim_component: m3,
  claim_element: o1,
  claim_space: p3,
  claim_text: g3,
  create_component: _3,
  destroy_component: v3,
  detach: Pl,
  element: u1,
  init: b3,
  insert_hydration: y3,
  mount_component: w3,
  safe_not_equal: k3,
  set_data: D3,
  space: A3,
  text: E3,
  toggle_class: hr,
  transition_in: S3,
  transition_out: x3
} = window.__gradio__svelte__internal;
function F3(n) {
  let e, t, r, a, i, l;
  return r = new /*Icon*/
  n[1]({}), {
    c() {
      e = u1("label"), t = u1("span"), _3(r.$$.fragment), a = A3(), i = E3(
        /*label*/
        n[0]
      ), this.h();
    },
    l(s) {
      e = o1(s, "LABEL", {
        for: !0,
        "data-testid": !0,
        class: !0
      });
      var o = s1(e);
      t = o1(o, "SPAN", { class: !0 });
      var c = s1(t);
      m3(r.$$.fragment, c), c.forEach(Pl), a = p3(o), i = g3(
        o,
        /*label*/
        n[0]
      ), o.forEach(Pl), this.h();
    },
    h() {
      ja(t, "class", "svelte-168uj4v"), ja(e, "for", ""), ja(e, "data-testid", "block-label"), ja(e, "class", "svelte-168uj4v"), hr(e, "hide", !/*show_label*/
      n[2]), hr(e, "sr-only", !/*show_label*/
      n[2]), hr(
        e,
        "float",
        /*float*/
        n[4]
      ), hr(
        e,
        "hide-label",
        /*disable*/
        n[3]
      );
    },
    m(s, o) {
      y3(s, e, o), ql(e, t), w3(r, t, null), ql(e, a), ql(e, i), l = !0;
    },
    p(s, [o]) {
      (!l || o & /*label*/
      1) && D3(
        i,
        /*label*/
        s[0]
      ), (!l || o & /*show_label*/
      4) && hr(e, "hide", !/*show_label*/
      s[2]), (!l || o & /*show_label*/
      4) && hr(e, "sr-only", !/*show_label*/
      s[2]), (!l || o & /*float*/
      16) && hr(
        e,
        "float",
        /*float*/
        s[4]
      ), (!l || o & /*disable*/
      8) && hr(
        e,
        "hide-label",
        /*disable*/
        s[3]
      );
    },
    i(s) {
      l || (S3(r.$$.fragment, s), l = !0);
    },
    o(s) {
      x3(r.$$.fragment, s), l = !1;
    },
    d(s) {
      s && Pl(e), v3(r);
    }
  };
}
function C3(n, e, t) {
  let { label: r = null } = e, { Icon: a } = e, { show_label: i = !0 } = e, { disable: l = !1 } = e, { float: s = !0 } = e;
  return n.$$set = (o) => {
    "label" in o && t(0, r = o.label), "Icon" in o && t(1, a = o.Icon), "show_label" in o && t(2, i = o.show_label), "disable" in o && t(3, l = o.disable), "float" in o && t(4, s = o.float);
  }, [r, a, i, l, s];
}
class Mi extends d3 {
  constructor(e) {
    super(), b3(this, e, C3, F3, k3, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: T3,
  append_hydration: vs,
  attr: H0,
  bubble: M3,
  check_outros: B3,
  children: bs,
  claim_component: z3,
  claim_element: ys,
  claim_space: I3,
  claim_text: N3,
  construct_svelte_component: c1,
  create_component: h1,
  destroy_component: f1,
  detach: Un,
  element: ws,
  group_outros: R3,
  init: L3,
  insert_hydration: lh,
  listen: O3,
  mount_component: d1,
  safe_not_equal: q3,
  set_data: P3,
  set_style: Wa,
  space: H3,
  text: V3,
  toggle_class: Mt,
  transition_in: m1,
  transition_out: p1
} = window.__gradio__svelte__internal;
function g1(n) {
  let e, t;
  return {
    c() {
      e = ws("span"), t = V3(
        /*label*/
        n[1]
      ), this.h();
    },
    l(r) {
      e = ys(r, "SPAN", { class: !0 });
      var a = bs(e);
      t = N3(
        a,
        /*label*/
        n[1]
      ), a.forEach(Un), this.h();
    },
    h() {
      H0(e, "class", "svelte-vk34kx");
    },
    m(r, a) {
      lh(r, e, a), vs(e, t);
    },
    p(r, a) {
      a & /*label*/
      2 && P3(
        t,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && Un(e);
    }
  };
}
function U3(n) {
  let e, t, r, a, i, l, s, o = (
    /*show_label*/
    n[2] && g1(n)
  );
  var c = (
    /*Icon*/
    n[0]
  );
  function h(m, f) {
    return {};
  }
  return c && (a = c1(c, h())), {
    c() {
      e = ws("button"), o && o.c(), t = H3(), r = ws("div"), a && h1(a.$$.fragment), this.h();
    },
    l(m) {
      e = ys(m, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var f = bs(e);
      o && o.l(f), t = I3(f), r = ys(f, "DIV", { class: !0 });
      var p = bs(r);
      a && z3(a.$$.fragment, p), p.forEach(Un), f.forEach(Un), this.h();
    },
    h() {
      H0(r, "class", "svelte-vk34kx"), Mt(
        r,
        "small",
        /*size*/
        n[4] === "small"
      ), Mt(
        r,
        "large",
        /*size*/
        n[4] === "large"
      ), Mt(
        r,
        "medium",
        /*size*/
        n[4] === "medium"
      ), e.disabled = /*disabled*/
      n[7], H0(
        e,
        "aria-label",
        /*label*/
        n[1]
      ), H0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        n[8]
      ), H0(
        e,
        "title",
        /*label*/
        n[1]
      ), H0(e, "class", "svelte-vk34kx"), Mt(
        e,
        "pending",
        /*pending*/
        n[3]
      ), Mt(
        e,
        "padded",
        /*padded*/
        n[5]
      ), Mt(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), Mt(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), Wa(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), Wa(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(m, f) {
      lh(m, e, f), o && o.m(e, null), vs(e, t), vs(e, r), a && d1(a, r, null), i = !0, l || (s = O3(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), l = !0);
    },
    p(m, [f]) {
      if (/*show_label*/
      m[2] ? o ? o.p(m, f) : (o = g1(m), o.c(), o.m(e, t)) : o && (o.d(1), o = null), f & /*Icon*/
      1 && c !== (c = /*Icon*/
      m[0])) {
        if (a) {
          R3();
          const p = a;
          p1(p.$$.fragment, 1, 0, () => {
            f1(p, 1);
          }), B3();
        }
        c ? (a = c1(c, h()), h1(a.$$.fragment), m1(a.$$.fragment, 1), d1(a, r, null)) : a = null;
      }
      (!i || f & /*size*/
      16) && Mt(
        r,
        "small",
        /*size*/
        m[4] === "small"
      ), (!i || f & /*size*/
      16) && Mt(
        r,
        "large",
        /*size*/
        m[4] === "large"
      ), (!i || f & /*size*/
      16) && Mt(
        r,
        "medium",
        /*size*/
        m[4] === "medium"
      ), (!i || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      m[7]), (!i || f & /*label*/
      2) && H0(
        e,
        "aria-label",
        /*label*/
        m[1]
      ), (!i || f & /*hasPopup*/
      256) && H0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        m[8]
      ), (!i || f & /*label*/
      2) && H0(
        e,
        "title",
        /*label*/
        m[1]
      ), (!i || f & /*pending*/
      8) && Mt(
        e,
        "pending",
        /*pending*/
        m[3]
      ), (!i || f & /*padded*/
      32) && Mt(
        e,
        "padded",
        /*padded*/
        m[5]
      ), (!i || f & /*highlight*/
      64) && Mt(
        e,
        "highlight",
        /*highlight*/
        m[6]
      ), (!i || f & /*transparent*/
      512) && Mt(
        e,
        "transparent",
        /*transparent*/
        m[9]
      ), f & /*disabled, _color*/
      2176 && Wa(e, "color", !/*disabled*/
      m[7] && /*_color*/
      m[11] ? (
        /*_color*/
        m[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Wa(e, "--bg-color", /*disabled*/
      m[7] ? "auto" : (
        /*background*/
        m[10]
      ));
    },
    i(m) {
      i || (a && m1(a.$$.fragment, m), i = !0);
    },
    o(m) {
      a && p1(a.$$.fragment, m), i = !1;
    },
    d(m) {
      m && Un(e), o && o.d(), a && f1(a), l = !1, s();
    }
  };
}
function G3(n, e, t) {
  let r, { Icon: a } = e, { label: i = "" } = e, { show_label: l = !1 } = e, { pending: s = !1 } = e, { size: o = "small" } = e, { padded: c = !0 } = e, { highlight: h = !1 } = e, { disabled: m = !1 } = e, { hasPopup: f = !1 } = e, { color: p = "var(--block-label-text-color)" } = e, { transparent: v = !1 } = e, { background: w = "var(--block-background-fill)" } = e;
  function S(A) {
    M3.call(this, n, A);
  }
  return n.$$set = (A) => {
    "Icon" in A && t(0, a = A.Icon), "label" in A && t(1, i = A.label), "show_label" in A && t(2, l = A.show_label), "pending" in A && t(3, s = A.pending), "size" in A && t(4, o = A.size), "padded" in A && t(5, c = A.padded), "highlight" in A && t(6, h = A.highlight), "disabled" in A && t(7, m = A.disabled), "hasPopup" in A && t(8, f = A.hasPopup), "color" in A && t(12, p = A.color), "transparent" in A && t(9, v = A.transparent), "background" in A && t(10, w = A.background);
  }, n.$$.update = () => {
    n.$$.dirty & /*highlight, color*/
    4160 && t(11, r = h ? "var(--color-accent)" : p);
  }, [
    a,
    i,
    l,
    s,
    o,
    c,
    h,
    m,
    f,
    v,
    w,
    r,
    p,
    S
  ];
}
class j3 extends T3 {
  constructor(e) {
    super(), L3(this, e, G3, U3, q3, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: W3,
  append_hydration: Y3,
  attr: Hl,
  binding_callbacks: X3,
  children: _1,
  claim_element: v1,
  create_slot: Z3,
  detach: Vl,
  element: b1,
  get_all_dirty_from_scope: K3,
  get_slot_changes: Q3,
  init: J3,
  insert_hydration: $3,
  safe_not_equal: e6,
  toggle_class: fr,
  transition_in: t6,
  transition_out: r6,
  update_slot_base: n6
} = window.__gradio__svelte__internal;
function a6(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[5].default
  ), i = Z3(
    a,
    n,
    /*$$scope*/
    n[4],
    null
  );
  return {
    c() {
      e = b1("div"), t = b1("div"), i && i.c(), this.h();
    },
    l(l) {
      e = v1(l, "DIV", { class: !0, "aria-label": !0 });
      var s = _1(e);
      t = v1(s, "DIV", { class: !0 });
      var o = _1(t);
      i && i.l(o), o.forEach(Vl), s.forEach(Vl), this.h();
    },
    h() {
      Hl(t, "class", "icon svelte-3w3rth"), Hl(e, "class", "empty svelte-3w3rth"), Hl(e, "aria-label", "Empty value"), fr(
        e,
        "small",
        /*size*/
        n[0] === "small"
      ), fr(
        e,
        "large",
        /*size*/
        n[0] === "large"
      ), fr(
        e,
        "unpadded_box",
        /*unpadded_box*/
        n[1]
      ), fr(
        e,
        "small_parent",
        /*parent_height*/
        n[3]
      );
    },
    m(l, s) {
      $3(l, e, s), Y3(e, t), i && i.m(t, null), n[6](e), r = !0;
    },
    p(l, [s]) {
      i && i.p && (!r || s & /*$$scope*/
      16) && n6(
        i,
        a,
        l,
        /*$$scope*/
        l[4],
        r ? Q3(
          a,
          /*$$scope*/
          l[4],
          s,
          null
        ) : K3(
          /*$$scope*/
          l[4]
        ),
        null
      ), (!r || s & /*size*/
      1) && fr(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), (!r || s & /*size*/
      1) && fr(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), (!r || s & /*unpadded_box*/
      2) && fr(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!r || s & /*parent_height*/
      8) && fr(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    i(l) {
      r || (t6(i, l), r = !0);
    },
    o(l) {
      r6(i, l), r = !1;
    },
    d(l) {
      l && Vl(e), i && i.d(l), n[6](null);
    }
  };
}
function i6(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e, { size: l = "small" } = e, { unpadded_box: s = !1 } = e, o;
  function c(m) {
    var f;
    if (!m) return !1;
    const { height: p } = m.getBoundingClientRect(), { height: v } = ((f = m.parentElement) === null || f === void 0 ? void 0 : f.getBoundingClientRect()) || { height: p };
    return p > v + 2;
  }
  function h(m) {
    X3[m ? "unshift" : "push"](() => {
      o = m, t(2, o);
    });
  }
  return n.$$set = (m) => {
    "size" in m && t(0, l = m.size), "unpadded_box" in m && t(1, s = m.unpadded_box), "$$scope" in m && t(4, i = m.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*el*/
    4 && t(3, r = c(o));
  }, [l, s, o, r, i, a, h];
}
class sh extends W3 {
  constructor(e) {
    super(), J3(this, e, i6, a6, e6, { size: 0, unpadded_box: 1 });
  }
}
const l6 = /^(#\s*)(.+)$/m;
function s6(n) {
  const e = n.trim(), t = e.match(l6);
  if (!t)
    return [!1, e || !1];
  const [r, , a] = t, i = a.trim();
  if (e === r)
    return [i, !1];
  const l = t.index !== void 0 ? t.index + r.length : 0, o = e.substring(l).trim() || !1;
  return [i, o];
}
const {
  SvelteComponent: o6,
  append_hydration: Ir,
  attr: Zn,
  check_outros: u6,
  children: Kn,
  claim_component: oh,
  claim_element: Qn,
  claim_space: Bi,
  claim_text: Br,
  create_component: uh,
  destroy_component: ch,
  detach: kt,
  element: Jn,
  empty: ci,
  group_outros: c6,
  init: h6,
  insert_hydration: g0,
  mount_component: hh,
  safe_not_equal: f6,
  set_data: $n,
  space: zi,
  text: zr,
  toggle_class: y1,
  transition_in: hi,
  transition_out: fi
} = window.__gradio__svelte__internal;
function d6(n) {
  let e, t;
  return e = new Yf({}), {
    c() {
      uh(e.$$.fragment);
    },
    l(r) {
      oh(e.$$.fragment, r);
    },
    m(r, a) {
      hh(e, r, a), t = !0;
    },
    i(r) {
      t || (hi(e.$$.fragment, r), t = !0);
    },
    o(r) {
      fi(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ch(e, r);
    }
  };
}
function m6(n) {
  let e, t;
  return e = new Df({}), {
    c() {
      uh(e.$$.fragment);
    },
    l(r) {
      oh(e.$$.fragment, r);
    },
    m(r, a) {
      hh(e, r, a), t = !0;
    },
    i(r) {
      t || (hi(e.$$.fragment, r), t = !0);
    },
    o(r) {
      fi(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ch(e, r);
    }
  };
}
function p6(n) {
  let e = (
    /*i18n*/
    n[1](
      /*defs*/
      n[7][
        /*type*/
        n[0]
      ] || /*defs*/
      n[7].file
    ) + ""
  ), t, r, a, i = (
    /*mode*/
    n[3] !== "short" && w1(n)
  );
  return {
    c() {
      t = zr(e), r = zi(), i && i.c(), a = ci();
    },
    l(l) {
      t = Br(l, e), r = Bi(l), i && i.l(l), a = ci();
    },
    m(l, s) {
      g0(l, t, s), g0(l, r, s), i && i.m(l, s), g0(l, a, s);
    },
    p(l, s) {
      s & /*i18n, type*/
      3 && e !== (e = /*i18n*/
      l[1](
        /*defs*/
        l[7][
          /*type*/
          l[0]
        ] || /*defs*/
        l[7].file
      ) + "") && $n(t, e), /*mode*/
      l[3] !== "short" ? i ? i.p(l, s) : (i = w1(l), i.c(), i.m(a.parentNode, a)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && (kt(t), kt(r), kt(a)), i && i.d(l);
    }
  };
}
function g6(n) {
  let e, t, r = (
    /*heading*/
    n[6] && k1(n)
  ), a = (
    /*paragraph*/
    n[5] && D1(n)
  );
  return {
    c() {
      r && r.c(), e = zi(), a && a.c(), t = ci();
    },
    l(i) {
      r && r.l(i), e = Bi(i), a && a.l(i), t = ci();
    },
    m(i, l) {
      r && r.m(i, l), g0(i, e, l), a && a.m(i, l), g0(i, t, l);
    },
    p(i, l) {
      /*heading*/
      i[6] ? r ? r.p(i, l) : (r = k1(i), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), /*paragraph*/
      i[5] ? a ? a.p(i, l) : (a = D1(i), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && (kt(e), kt(t)), r && r.d(i), a && a.d(i);
    }
  };
}
function w1(n) {
  let e, t, r = (
    /*i18n*/
    n[1]("common.or") + ""
  ), a, i, l, s = (
    /*message*/
    (n[2] || /*i18n*/
    n[1]("upload_text.click_to_upload")) + ""
  ), o;
  return {
    c() {
      e = Jn("span"), t = zr("- "), a = zr(r), i = zr(" -"), l = zi(), o = zr(s), this.h();
    },
    l(c) {
      e = Qn(c, "SPAN", { class: !0 });
      var h = Kn(e);
      t = Br(h, "- "), a = Br(h, r), i = Br(h, " -"), h.forEach(kt), l = Bi(c), o = Br(c, s), this.h();
    },
    h() {
      Zn(e, "class", "or svelte-1xg7h5n");
    },
    m(c, h) {
      g0(c, e, h), Ir(e, t), Ir(e, a), Ir(e, i), g0(c, l, h), g0(c, o, h);
    },
    p(c, h) {
      h & /*i18n*/
      2 && r !== (r = /*i18n*/
      c[1]("common.or") + "") && $n(a, r), h & /*message, i18n*/
      6 && s !== (s = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && $n(o, s);
    },
    d(c) {
      c && (kt(e), kt(l), kt(o));
    }
  };
}
function k1(n) {
  let e, t;
  return {
    c() {
      e = Jn("h2"), t = zr(
        /*heading*/
        n[6]
      ), this.h();
    },
    l(r) {
      e = Qn(r, "H2", { class: !0 });
      var a = Kn(e);
      t = Br(
        a,
        /*heading*/
        n[6]
      ), a.forEach(kt), this.h();
    },
    h() {
      Zn(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      g0(r, e, a), Ir(e, t);
    },
    p(r, a) {
      a & /*heading*/
      64 && $n(
        t,
        /*heading*/
        r[6]
      );
    },
    d(r) {
      r && kt(e);
    }
  };
}
function D1(n) {
  let e, t;
  return {
    c() {
      e = Jn("p"), t = zr(
        /*paragraph*/
        n[5]
      ), this.h();
    },
    l(r) {
      e = Qn(r, "P", { class: !0 });
      var a = Kn(e);
      t = Br(
        a,
        /*paragraph*/
        n[5]
      ), a.forEach(kt), this.h();
    },
    h() {
      Zn(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      g0(r, e, a), Ir(e, t);
    },
    p(r, a) {
      a & /*paragraph*/
      32 && $n(
        t,
        /*paragraph*/
        r[5]
      );
    },
    d(r) {
      r && kt(e);
    }
  };
}
function _6(n) {
  let e, t, r, a, i, l;
  const s = [m6, d6], o = [];
  function c(p, v) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  r = c(n), a = o[r] = s[r](n);
  function h(p, v) {
    return (
      /*heading*/
      p[6] || /*paragraph*/
      p[5] ? g6 : p6
    );
  }
  let m = h(n), f = m(n);
  return {
    c() {
      e = Jn("div"), t = Jn("span"), a.c(), i = zi(), f.c(), this.h();
    },
    l(p) {
      e = Qn(p, "DIV", { class: !0 });
      var v = Kn(e);
      t = Qn(v, "SPAN", { class: !0 });
      var w = Kn(t);
      a.l(w), w.forEach(kt), i = Bi(v), f.l(v), v.forEach(kt), this.h();
    },
    h() {
      Zn(t, "class", "icon-wrap svelte-1xg7h5n"), y1(
        t,
        "hovered",
        /*hovered*/
        n[4]
      ), Zn(e, "class", "wrap svelte-1xg7h5n");
    },
    m(p, v) {
      g0(p, e, v), Ir(e, t), o[r].m(t, null), Ir(e, i), f.m(e, null), l = !0;
    },
    p(p, [v]) {
      let w = r;
      r = c(p), r !== w && (c6(), fi(o[w], 1, 1, () => {
        o[w] = null;
      }), u6(), a = o[r], a || (a = o[r] = s[r](p), a.c()), hi(a, 1), a.m(t, null)), (!l || v & /*hovered*/
      16) && y1(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), m === (m = h(p)) && f ? f.p(p, v) : (f.d(1), f = m(p), f && (f.c(), f.m(e, null)));
    },
    i(p) {
      l || (hi(a), l = !0);
    },
    o(p) {
      fi(a), l = !1;
    },
    d(p) {
      p && kt(e), o[r].d(), f.d();
    }
  };
}
function v6(n, e, t) {
  let r, a, { type: i = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: c = !1 } = e, { placeholder: h = void 0 } = e;
  const m = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return n.$$set = (f) => {
    "type" in f && t(0, i = f.type), "i18n" in f && t(1, l = f.i18n), "message" in f && t(2, s = f.message), "mode" in f && t(3, o = f.mode), "hovered" in f && t(4, c = f.hovered), "placeholder" in f && t(8, h = f.placeholder);
  }, n.$$.update = () => {
    n.$$.dirty & /*placeholder*/
    256 && t(6, [r, a] = h ? s6(h) : [!1, !1], r, (t(5, a), t(8, h)));
  }, [i, l, s, o, c, a, r, m, h];
}
class b6 extends o6 {
  constructor(e) {
    super(), h6(this, e, v6, _6, f6, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4,
      placeholder: 8
    });
  }
}
const {
  SvelteComponent: y6,
  append_hydration: Ya,
  attr: Ul,
  check_outros: w6,
  children: Gl,
  claim_component: k6,
  claim_element: jl,
  claim_space: D6,
  claim_text: A6,
  construct_svelte_component: A1,
  create_component: E1,
  destroy_component: S1,
  detach: Xa,
  element: Wl,
  group_outros: E6,
  init: S6,
  insert_hydration: x6,
  listen: F6,
  mount_component: x1,
  safe_not_equal: C6,
  set_data: T6,
  set_style: M6,
  space: B6,
  text: z6,
  transition_in: F1,
  transition_out: C1
} = window.__gradio__svelte__internal, { createEventDispatcher: I6 } = window.__gradio__svelte__internal;
function N6(n) {
  let e, t, r, a, i, l, s, o, c;
  var h = (
    /*icon*/
    n[0]
  );
  function m(f, p) {
    return {};
  }
  return h && (a = A1(h, m())), {
    c() {
      e = Wl("button"), t = Wl("div"), r = Wl("span"), a && E1(a.$$.fragment), i = B6(), l = z6(
        /*text*/
        n[1]
      ), this.h();
    },
    l(f) {
      e = jl(f, "BUTTON", { class: !0 });
      var p = Gl(e);
      t = jl(p, "DIV", { class: !0 });
      var v = Gl(t);
      r = jl(v, "SPAN", { class: !0 });
      var w = Gl(r);
      a && k6(a.$$.fragment, w), w.forEach(Xa), i = D6(v), l = A6(
        v,
        /*text*/
        n[1]
      ), v.forEach(Xa), p.forEach(Xa), this.h();
    },
    h() {
      Ul(r, "class", "icon-wrap svelte-1kt44zd"), Ul(t, "class", "wrap svelte-1kt44zd"), Ul(e, "class", "svelte-1kt44zd"), M6(e, "height", "100%");
    },
    m(f, p) {
      x6(f, e, p), Ya(e, t), Ya(t, r), a && x1(a, r, null), Ya(t, i), Ya(t, l), s = !0, o || (c = F6(
        e,
        "click",
        /*click_handler*/
        n[3]
      ), o = !0);
    },
    p(f, [p]) {
      if (p & /*icon*/
      1 && h !== (h = /*icon*/
      f[0])) {
        if (a) {
          E6();
          const v = a;
          C1(v.$$.fragment, 1, 0, () => {
            S1(v, 1);
          }), w6();
        }
        h ? (a = A1(h, m()), E1(a.$$.fragment), F1(a.$$.fragment, 1), x1(a, r, null)) : a = null;
      }
      (!s || p & /*text*/
      2) && T6(
        l,
        /*text*/
        f[1]
      );
    },
    i(f) {
      s || (a && F1(a.$$.fragment, f), s = !0);
    },
    o(f) {
      a && C1(a.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Xa(e), a && S1(a), o = !1, c();
    }
  };
}
function R6(n, e, t) {
  let r, { icon: a = Vo } = e;
  const i = I6(), l = () => i("click");
  return n.$$set = (s) => {
    "icon" in s && t(0, a = s.icon);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon*/
    1 && t(1, r = a === Vo ? "Click to Access Webcam" : "Click to Access Microphone");
  }, [a, r, i, l];
}
class fh extends y6 {
  constructor(e) {
    super(), S6(this, e, R6, N6, C6, { icon: 0 });
  }
}
function dh() {
  return navigator.mediaDevices.enumerateDevices();
}
function L6(n, e) {
  e.srcObject = n, e.muted = !0, e.play();
}
async function T1(n, e, t, r) {
  const a = r || {
    width: { ideal: 500 },
    height: { ideal: 500 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...a } : a,
    audio: n
  };
  return navigator.mediaDevices.getUserMedia(i).then((l) => (L6(l, e), l));
}
function mh(n, e = "videoinput") {
  return n.filter(
    (r) => r.kind === e
  );
}
function O6(n, e) {
  return n.addEventListener(
    "icegatheringstatechange",
    () => {
      console.debug(n.iceGatheringState);
    },
    !1
  ), n.addEventListener(
    "iceconnectionstatechange",
    () => {
      console.debug(n.iceConnectionState);
    },
    !1
  ), n.addEventListener(
    "signalingstatechange",
    () => {
      console.debug(n.signalingState);
    },
    !1
  ), n.addEventListener("track", (t) => {
    console.debug("track event listener"), e && e.srcObject !== t.streams[0] && (console.debug("streams", t.streams), e.srcObject = t.streams[0], console.debug("node.srcOject", e.srcObject), t.track.kind === "audio" && (e.volume = 1, e.muted = !1, e.autoplay = !0, e.play().catch((r) => console.debug("Autoplay failed:", r))));
  }), n;
}
async function Ii(n, e, t, r, a, i = "video", l = () => {
}, s = {}, o = () => {
}, c = () => {
}) {
  e = O6(e, t);
  const h = e.createDataChannel("text");
  return h.onopen = () => {
    console.debug("Data channel is open"), h.send("handshake");
  }, h.onmessage = (m) => {
    console.debug("Received message:", m.data);
    let f;
    try {
      f = JSON.parse(m.data);
    } catch {
      console.debug("Error parsing JSON");
    }
    (m.data === "change" || m.data === "tick" || m.data === "stopword" || (f == null ? void 0 : f.type) === "warning" || (f == null ? void 0 : f.type) === "error" || (f == null ? void 0 : f.type) === "send_input" || (f == null ? void 0 : f.type) === "fetch_output" || (f == null ? void 0 : f.type) === "stopword" || (f == null ? void 0 : f.type) === "end_stream") && l(f ?? m.data), o(f ?? m.data);
  }, n ? n.getTracks().forEach(async (m) => {
    console.debug("Track stream callback", m);
    const f = e.addTrack(m, n), v = { ...f.getParameters(), ...s };
    await f.setParameters(v), console.debug("sender params", f.getParameters());
  }) : (console.debug("Creating transceiver!"), e.addTransceiver(i, { direction: "recvonly" })), await P6(e, r, a, c), e;
}
function q6(n, e, t = () => {
}) {
  return new Promise((r, a) => {
    n(e).then((i) => {
      console.debug("data", i), (i == null ? void 0 : i.status) === "failed" && (t(i), console.debug("rejecting"), a("error")), r(i);
    });
  });
}
async function P6(n, e, t, r = () => {
}) {
  return n.onicecandidate = ({ candidate: a }) => {
    a && (console.debug("Sending ICE candidate", a), e({
      candidate: a.toJSON(),
      webrtc_id: t,
      type: "ice-candidate"
    }).catch((i) => console.error("Error sending ICE candidate:", i)));
  }, n.createOffer().then((a) => n.setLocalDescription(a)).then(() => {
    var a = n.localDescription;
    return q6(
      e,
      {
        sdp: a.sdp,
        type: a.type,
        webrtc_id: t
      },
      r
    );
  }).then((a) => a).then((a) => n.setRemoteDescription(a));
}
function It(n) {
  console.debug("Stopping peer connection"), n.getTransceivers && n.getTransceivers().forEach((e) => {
    e.stop && e.stop();
  }), n.getSenders() && n.getSenders().forEach((e) => {
    console.log("sender", e), e.track && e.track.stop && e.track.stop();
  }), setTimeout(() => {
    n.close();
  }, 500);
}
const {
  SvelteComponent: H6,
  append_hydration: Yl,
  attr: gr,
  check_outros: ph,
  children: fn,
  claim_component: V6,
  claim_element: Nr,
  claim_space: U6,
  construct_svelte_component: M1,
  create_component: B1,
  destroy_component: z1,
  destroy_each: G6,
  detach: t0,
  element: Rr,
  empty: I1,
  ensure_array_like: N1,
  group_outros: gh,
  init: j6,
  insert_hydration: _n,
  mount_component: R1,
  noop: Gn,
  safe_not_equal: W6,
  set_style: Ut,
  space: Y6,
  src_url_equal: L1,
  transition_in: di,
  transition_out: mi
} = window.__gradio__svelte__internal, { onDestroy: X6 } = window.__gradio__svelte__internal;
function O1(n, e, t) {
  const r = n.slice();
  return r[15] = e[t], r[17] = t, r;
}
function q1(n) {
  let e, t = N1(Array(3)), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = P1(O1(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = I1();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = I1();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      _n(a, e, i);
    },
    p(a, i) {
      if (i & /*pulse_color, maxPulseScale, pulseIntensity*/
      84) {
        t = N1(Array(3));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = O1(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = P1(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && t0(e), G6(r, a);
    }
  };
}
function P1(n) {
  let e;
  return {
    c() {
      e = Rr("div"), this.h();
    },
    l(t) {
      e = Nr(t, "DIV", { class: !0 }), fn(e).forEach(t0), this.h();
    },
    h() {
      gr(e, "class", "pulse-ring svelte-126lrgf"), Ut(
        e,
        "background",
        /*pulse_color*/
        n[2]
      ), Ut(e, "animation-delay", `${/*i*/
      n[17] * 0.4}s`), Ut(
        e,
        "--max-scale",
        /*maxPulseScale*/
        n[6]
      ), Ut(e, "opacity", 0.5 * /*pulseIntensity*/
      n[4]);
    },
    m(t, r) {
      _n(t, e, r);
    },
    p(t, r) {
      r & /*pulse_color*/
      4 && Ut(
        e,
        "background",
        /*pulse_color*/
        t[2]
      ), r & /*maxPulseScale*/
      64 && Ut(
        e,
        "--max-scale",
        /*maxPulseScale*/
        t[6]
      ), r & /*pulseIntensity*/
      16 && Ut(e, "opacity", 0.5 * /*pulseIntensity*/
      t[4]);
    },
    d(t) {
      t && t0(e);
    }
  };
}
function Z6(n) {
  let e, t, r;
  var a = (
    /*icon*/
    n[0]
  );
  function i(l, s) {
    return {};
  }
  return a && (t = M1(a, i())), {
    c() {
      e = Rr("div"), t && B1(t.$$.fragment);
    },
    l(l) {
      e = Nr(l, "DIV", {});
      var s = fn(e);
      t && V6(t.$$.fragment, s), s.forEach(t0);
    },
    m(l, s) {
      _n(l, e, s), t && R1(t, e, null), r = !0;
    },
    p(l, s) {
      if (s & /*icon*/
      1 && a !== (a = /*icon*/
      l[0])) {
        if (t) {
          gh();
          const o = t;
          mi(o.$$.fragment, 1, 0, () => {
            z1(o, 1);
          }), ph();
        }
        a ? (t = M1(a, i()), B1(t.$$.fragment), di(t.$$.fragment, 1), R1(t, e, null)) : t = null;
      }
    },
    i(l) {
      r || (t && di(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && mi(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && t0(e), t && z1(t);
    }
  };
}
function K6(n) {
  let e;
  return {
    c() {
      e = Rr("div");
    },
    l(t) {
      e = Nr(t, "DIV", {}), fn(e).forEach(t0);
    },
    m(t, r) {
      _n(t, e, r);
    },
    p: Gn,
    i: Gn,
    o: Gn,
    d(t) {
      t && t0(e);
    }
  };
}
function Q6(n) {
  let e, t;
  return {
    c() {
      e = Rr("img"), this.h();
    },
    l(r) {
      e = Nr(r, "IMG", { src: !0, alt: !0, class: !0 }), this.h();
    },
    h() {
      L1(e.src, t = /*icon*/
      n[0]) || gr(e, "src", t), gr(e, "alt", "Audio visualization icon"), gr(e, "class", "icon-image svelte-126lrgf"), Ut(e, "border-radius", `${/*icon_radius*/
      n[3]}%`);
    },
    m(r, a) {
      _n(r, e, a);
    },
    p(r, a) {
      a & /*icon*/
      1 && !L1(e.src, t = /*icon*/
      r[0]) && gr(e, "src", t), a & /*icon_radius*/
      8 && Ut(e, "border-radius", `${/*icon_radius*/
      r[3]}%`);
    },
    i: Gn,
    o: Gn,
    d(r) {
      r && t0(e);
    }
  };
}
function J6(n) {
  let e, t, r, a, i, l, s, o = (
    /*pulseIntensity*/
    n[4] > 0 && q1(n)
  );
  const c = [Q6, K6, Z6], h = [];
  function m(f, p) {
    return typeof /*icon*/
    f[0] == "string" ? 0 : (
      /*icon*/
      f[0] === void 0 ? 1 : 2
    );
  }
  return i = m(n), l = h[i] = c[i](n), {
    c() {
      e = Rr("div"), t = Rr("div"), o && o.c(), r = Y6(), a = Rr("div"), l.c(), this.h();
    },
    l(f) {
      e = Nr(f, "DIV", { class: !0 });
      var p = fn(e);
      t = Nr(p, "DIV", { class: !0 });
      var v = fn(t);
      o && o.l(v), r = U6(v), a = Nr(v, "DIV", { class: !0 });
      var w = fn(a);
      l.l(w), w.forEach(t0), v.forEach(t0), p.forEach(t0), this.h();
    },
    h() {
      gr(a, "class", "gradio-webrtc-pulsing-icon svelte-126lrgf"), Ut(a, "transform", `scale(${/*pulseScale*/
      n[5]})`), Ut(
        a,
        "background",
        /*icon_button_color*/
        n[1]
      ), gr(t, "class", "gradio-webrtc-pulsing-icon-container svelte-126lrgf"), gr(e, "class", "gradio-webrtc-icon-wrapper svelte-126lrgf");
    },
    m(f, p) {
      _n(f, e, p), Yl(e, t), o && o.m(t, null), Yl(t, r), Yl(t, a), h[i].m(a, null), s = !0;
    },
    p(f, [p]) {
      /*pulseIntensity*/
      f[4] > 0 ? o ? o.p(f, p) : (o = q1(f), o.c(), o.m(t, r)) : o && (o.d(1), o = null);
      let v = i;
      i = m(f), i === v ? h[i].p(f, p) : (gh(), mi(h[v], 1, 1, () => {
        h[v] = null;
      }), ph(), l = h[i], l ? l.p(f, p) : (l = h[i] = c[i](f), l.c()), di(l, 1), l.m(a, null)), p & /*pulseScale*/
      32 && Ut(a, "transform", `scale(${/*pulseScale*/
      f[5]})`), p & /*icon_button_color*/
      2 && Ut(
        a,
        "background",
        /*icon_button_color*/
        f[1]
      );
    },
    i(f) {
      s || (di(l), s = !0);
    },
    o(f) {
      mi(l), s = !1;
    },
    d(f) {
      f && t0(e), o && o.d(), h[i].d();
    }
  };
}
function $6(n, e, t) {
  let r, { stream_state: a = "closed" } = e, { audio_source_callback: i } = e, { icon: l = void 0 } = e, { icon_button_color: s = "var(--color-accent)" } = e, { pulse_color: o = "var(--color-accent)" } = e, { icon_radius: c = 50 } = e, h, m, f, p, v = 1, w = 0;
  X6(() => {
    p && cancelAnimationFrame(p), h && h.close();
  });
  function S() {
    h = new (window.AudioContext || window.webkitAudioContext)(), m = h.createAnalyser(), h.createMediaStreamSource(i()).connect(m), m.fftSize = 64, m.smoothingTimeConstant = 0.8, f = new Uint8Array(m.frequencyBinCount), A();
  }
  function A() {
    m.getByteFrequencyData(f);
    const y = Array.from(f).reduce((E, C) => E + C, 0) / f.length / 255;
    t(5, v = 1 + y * 0.15), t(4, w = y), p = requestAnimationFrame(A);
  }
  return n.$$set = (b) => {
    "stream_state" in b && t(7, a = b.stream_state), "audio_source_callback" in b && t(8, i = b.audio_source_callback), "icon" in b && t(0, l = b.icon), "icon_button_color" in b && t(1, s = b.icon_button_color), "pulse_color" in b && t(2, o = b.pulse_color), "icon_radius" in b && t(3, c = b.icon_radius);
  }, n.$$.update = () => {
    n.$$.dirty & /*stream_state*/
    128 && a === "open" && S(), n.$$.dirty & /*pulseIntensity*/
    16 && t(6, r = 1 + w * 10);
  }, [
    l,
    s,
    o,
    c,
    w,
    v,
    r,
    a,
    i
  ];
}
class $s extends H6 {
  constructor(e) {
    super(), j6(this, e, $6, J6, W6, {
      stream_state: 7,
      audio_source_callback: 8,
      icon: 0,
      icon_button_color: 1,
      pulse_color: 2,
      icon_radius: 3
    });
  }
}
const {
  SvelteComponent: e7,
  action_destroyer: t7,
  add_render_callback: r7,
  append_hydration: tt,
  attr: Ve,
  binding_callbacks: n7,
  check_outros: pi,
  children: _t,
  claim_component: wr,
  claim_element: vt,
  claim_space: M0,
  claim_text: ia,
  create_component: kr,
  create_in_transition: a7,
  destroy_component: Dr,
  destroy_each: i7,
  detach: Ee,
  element: bt,
  empty: gi,
  ensure_array_like: H1,
  group_outros: _i,
  init: l7,
  insert_hydration: Nt,
  listen: vi,
  mount_component: Ar,
  noop: _h,
  run_all: s7,
  safe_not_equal: o7,
  set_data: la,
  set_input_value: ks,
  set_style: u7,
  space: B0,
  stop_propagation: c7,
  text: sa,
  toggle_class: Za,
  transition_in: at,
  transition_out: pt
} = window.__gradio__svelte__internal, { createEventDispatcher: h7, onMount: f7 } = window.__gradio__svelte__internal;
function V1(n, e, t) {
  const r = n.slice();
  return r[42] = e[t], r;
}
function U1(n) {
  let e, t, r;
  return t = new $s({
    props: {
      stream_state: (
        /*stream_state*/
        n[12]
      ),
      audio_source_callback: (
        /*audio_source_callback*/
        n[19]
      ),
      icon: (
        /*icon*/
        n[0] || ei
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[1]
      ),
      pulse_color: (
        /*pulse_color*/
        n[3]
      ),
      icon_radius: (
        /*icon_radius*/
        n[2]
      )
    }
  }), {
    c() {
      e = bt("div"), kr(t.$$.fragment), this.h();
    },
    l(a) {
      e = vt(a, "DIV", { class: !0 });
      var i = _t(e);
      wr(t.$$.fragment, i), i.forEach(Ee), this.h();
    },
    h() {
      Ve(e, "class", "audio-indicator svelte-1y5s2o2");
    },
    m(a, i) {
      Nt(a, e, i), Ar(t, e, null), r = !0;
    },
    p(a, i) {
      const l = {};
      i[0] & /*stream_state*/
      4096 && (l.stream_state = /*stream_state*/
      a[12]), i[0] & /*icon*/
      1 && (l.icon = /*icon*/
      a[0] || ei), i[0] & /*icon_button_color*/
      2 && (l.icon_button_color = /*icon_button_color*/
      a[1]), i[0] & /*pulse_color*/
      8 && (l.pulse_color = /*pulse_color*/
      a[3]), i[0] & /*icon_radius*/
      4 && (l.icon_radius = /*icon_radius*/
      a[2]), t.$set(l);
    },
    i(a) {
      r || (at(t.$$.fragment, a), r = !0);
    },
    o(a) {
      pt(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Ee(e), Dr(t);
    }
  };
}
function d7(n) {
  let e, t, r, a, i, l, s, o, c, h;
  const m = [_7, g7, p7], f = [];
  function p(S, A) {
    return (
      /*stream_state*/
      S[12] === "waiting" ? 0 : (
        /*stream_state*/
        S[12] === "open" ? 1 : 2
      )
    );
  }
  r = p(n), a = f[r] = m[r](n);
  let v = v7(n), w = (
    /*options_open*/
    n[14] && /*selected_device*/
    n[10] && G1(n)
  );
  return {
    c() {
      e = bt("div"), t = bt("button"), a.c(), i = B0(), v && v.c(), l = B0(), w && w.c(), s = gi(), this.h();
    },
    l(S) {
      e = vt(S, "DIV", { class: !0 });
      var A = _t(e);
      t = vt(A, "BUTTON", { "aria-label": !0, class: !0 });
      var b = _t(t);
      a.l(b), b.forEach(Ee), i = M0(A), v && v.l(A), A.forEach(Ee), l = M0(S), w && w.l(S), s = gi(), this.h();
    },
    h() {
      Ve(t, "aria-label", "start stream"), Ve(t, "class", "svelte-1y5s2o2"), Ve(e, "class", "button-wrap svelte-1y5s2o2");
    },
    m(S, A) {
      Nt(S, e, A), tt(e, t), f[r].m(t, null), tt(e, i), v && v.m(e, null), Nt(S, l, A), w && w.m(S, A), Nt(S, s, A), o = !0, c || (h = vi(
        t,
        "click",
        /*start_webrtc*/
        n[17]
      ), c = !0);
    },
    p(S, A) {
      let b = r;
      r = p(S), r === b ? f[r].p(S, A) : (_i(), pt(f[b], 1, 1, () => {
        f[b] = null;
      }), pi(), a = f[r], a ? a.p(S, A) : (a = f[r] = m[r](S), a.c()), at(a, 1), a.m(t, null)), v.p(S, A), /*options_open*/
      S[14] && /*selected_device*/
      S[10] ? w ? (w.p(S, A), A[0] & /*options_open, selected_device*/
      17408 && at(w, 1)) : (w = G1(S), w.c(), at(w, 1), w.m(s.parentNode, s)) : w && (_i(), pt(w, 1, 1, () => {
        w = null;
      }), pi());
    },
    i(S) {
      o || (at(a), at(v), at(w), o = !0);
    },
    o(S) {
      pt(a), pt(v), pt(w), o = !1;
    },
    d(S) {
      S && (Ee(e), Ee(l), Ee(s)), f[r].d(), v && v.d(), w && w.d(S), c = !1, h();
    }
  };
}
function m7(n) {
  let e, t, r, a;
  return t = new fh({}), t.$on(
    "click",
    /*click_handler*/
    n[32]
  ), {
    c() {
      e = bt("div"), kr(t.$$.fragment), this.h();
    },
    l(i) {
      e = vt(i, "DIV", { title: !0, style: !0 });
      var l = _t(e);
      wr(t.$$.fragment, l), l.forEach(Ee), this.h();
    },
    h() {
      Ve(e, "title", "grant webcam access"), u7(e, "height", "100%");
    },
    m(i, l) {
      Nt(i, e, l), Ar(t, e, null), a = !0;
    },
    p: _h,
    i(i) {
      a || (at(t.$$.fragment, i), i && (r || r7(() => {
        r = a7(e, V4, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      pt(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && Ee(e), Dr(t);
    }
  };
}
function p7(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].start || /*i18n*/
    n[6]("audio.record")) + ""
  ), l, s;
  return r = new wi({}), {
    c() {
      e = bt("div"), t = bt("div"), kr(r.$$.fragment), a = B0(), l = sa(i), this.h();
    },
    l(o) {
      e = vt(o, "DIV", { class: !0 });
      var c = _t(e);
      t = vt(c, "DIV", { class: !0, title: !0 });
      var h = _t(t);
      wr(r.$$.fragment, h), h.forEach(Ee), a = M0(c), l = ia(c, i), c.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "icon color-primary svelte-1y5s2o2"), Ve(t, "title", "start recording"), Ve(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, c) {
      Nt(o, e, c), tt(e, t), Ar(r, t, null), tt(e, a), tt(e, l), s = !0;
    },
    p(o, c) {
      (!s || c[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].start || /*i18n*/
      o[6]("audio.record")) + "") && la(l, i);
    },
    i(o) {
      s || (at(r.$$.fragment, o), s = !0);
    },
    o(o) {
      pt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && Ee(e), Dr(r);
    }
  };
}
function g7(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].stop || /*i18n*/
    n[6]("audio.stop")) + ""
  ), l, s;
  return r = new Hf({}), {
    c() {
      e = bt("div"), t = bt("div"), kr(r.$$.fragment), a = B0(), l = sa(i), this.h();
    },
    l(o) {
      e = vt(o, "DIV", { class: !0 });
      var c = _t(e);
      t = vt(c, "DIV", { class: !0, title: !0 });
      var h = _t(t);
      wr(r.$$.fragment, h), h.forEach(Ee), a = M0(c), l = ia(c, i), c.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "icon color-primary svelte-1y5s2o2"), Ve(t, "title", "stop recording"), Ve(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, c) {
      Nt(o, e, c), tt(e, t), Ar(r, t, null), tt(e, a), tt(e, l), s = !0;
    },
    p(o, c) {
      (!s || c[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].stop || /*i18n*/
      o[6]("audio.stop")) + "") && la(l, i);
    },
    i(o) {
      s || (at(r.$$.fragment, o), s = !0);
    },
    o(o) {
      pt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && Ee(e), Dr(r);
    }
  };
}
function _7(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].waiting || /*i18n*/
    n[6]("audio.waiting")) + ""
  ), l, s;
  return r = new qc({}), {
    c() {
      e = bt("div"), t = bt("div"), kr(r.$$.fragment), a = B0(), l = sa(i), this.h();
    },
    l(o) {
      e = vt(o, "DIV", { class: !0 });
      var c = _t(e);
      t = vt(c, "DIV", { class: !0, title: !0 });
      var h = _t(t);
      wr(r.$$.fragment, h), h.forEach(Ee), a = M0(c), l = ia(c, i), c.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "icon color-primary svelte-1y5s2o2"), Ve(t, "title", "spinner"), Ve(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, c) {
      Nt(o, e, c), tt(e, t), Ar(r, t, null), tt(e, a), tt(e, l), s = !0;
    },
    p(o, c) {
      (!s || c[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].waiting || /*i18n*/
      o[6]("audio.waiting")) + "") && la(l, i);
    },
    i(o) {
      s || (at(r.$$.fragment, o), s = !0);
    },
    o(o) {
      pt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && Ee(e), Dr(r);
    }
  };
}
function v7(n) {
  let e, t, r, a, i;
  return t = new ki({}), {
    c() {
      e = bt("button"), kr(t.$$.fragment), this.h();
    },
    l(l) {
      e = vt(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = _t(e);
      wr(t.$$.fragment, s), s.forEach(Ee), this.h();
    },
    h() {
      Ve(e, "class", "icon svelte-1y5s2o2"), Ve(e, "aria-label", "select input source");
    },
    m(l, s) {
      Nt(l, e, s), Ar(t, e, null), r = !0, a || (i = vi(
        e,
        "click",
        /*click_handler_1*/
        n[33]
      ), a = !0);
    },
    p: _h,
    i(l) {
      r || (at(t.$$.fragment, l), r = !0);
    },
    o(l) {
      pt(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && Ee(e), Dr(t), a = !1, i();
    }
  };
}
function G1(n) {
  let e, t, r, a, i, l, s;
  r = new ki({});
  function o(m, f) {
    return (
      /*available_video_devices*/
      m[9].length === 0 ? y7 : b7
    );
  }
  let c = o(n), h = c(n);
  return {
    c() {
      e = bt("select"), t = bt("button"), kr(r.$$.fragment), a = B0(), h.c(), this.h();
    },
    l(m) {
      e = vt(m, "SELECT", { class: !0, "aria-label": !0 });
      var f = _t(e);
      t = vt(f, "BUTTON", { class: !0 });
      var p = _t(t);
      wr(r.$$.fragment, p), a = M0(p), p.forEach(Ee), h.l(f), f.forEach(Ee), this.h();
    },
    h() {
      Ve(t, "class", "inset-icon svelte-1y5s2o2"), Ve(e, "class", "select-wrap svelte-1y5s2o2"), Ve(e, "aria-label", "select source");
    },
    m(m, f) {
      Nt(m, e, f), tt(e, t), Ar(r, t, null), tt(t, a), h.m(e, null), i = !0, l || (s = [
        vi(t, "click", c7(
          /*click_handler_2*/
          n[34]
        )),
        t7(eo.call(
          null,
          e,
          /*handle_click_outside*/
          n[18]
        )),
        vi(
          e,
          "change",
          /*handle_device_change*/
          n[15]
        )
      ], l = !0);
    },
    p(m, f) {
      c === (c = o(m)) && h ? h.p(m, f) : (h.d(1), h = c(m), h && (h.c(), h.m(e, null)));
    },
    i(m) {
      i || (at(r.$$.fragment, m), i = !0);
    },
    o(m) {
      pt(r.$$.fragment, m), i = !1;
    },
    d(m) {
      m && Ee(e), Dr(r), h.d(), l = !1, s7(s);
    }
  };
}
function b7(n) {
  let e, t = H1(
    /*available_video_devices*/
    n[9]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = j1(V1(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = gi();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = gi();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      Nt(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_video_devices, selected_device*/
      1536) {
        t = H1(
          /*available_video_devices*/
          a[9]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = V1(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = j1(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && Ee(e), i7(r, a);
    }
  };
}
function y7(n) {
  let e, t = (
    /*i18n*/
    n[6]("common.no_devices") + ""
  ), r;
  return {
    c() {
      e = bt("option"), r = sa(t), this.h();
    },
    l(a) {
      e = vt(a, "OPTION", { class: !0 });
      var i = _t(e);
      r = ia(i, t), i.forEach(Ee), this.h();
    },
    h() {
      e.__value = "", ks(e, e.__value), Ve(e, "class", "svelte-1y5s2o2");
    },
    m(a, i) {
      Nt(a, e, i), tt(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      64 && t !== (t = /*i18n*/
      a[6]("common.no_devices") + "") && la(r, t);
    },
    d(a) {
      a && Ee(e);
    }
  };
}
function j1(n) {
  let e, t = (
    /*device*/
    n[42].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = bt("option"), r = sa(t), a = B0(), this.h();
    },
    l(s) {
      e = vt(s, "OPTION", { class: !0 });
      var o = _t(e);
      r = ia(o, t), a = M0(o), o.forEach(Ee), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[42].deviceId, ks(e, e.__value), e.selected = l = /*selected_device*/
      n[10].deviceId === /*device*/
      n[42].deviceId, Ve(e, "class", "svelte-1y5s2o2");
    },
    m(s, o) {
      Nt(s, e, o), tt(e, r), tt(e, a);
    },
    p(s, o) {
      o[0] & /*available_video_devices*/
      512 && t !== (t = /*device*/
      s[42].label + "") && la(r, t), o[0] & /*available_video_devices*/
      512 && i !== (i = /*device*/
      s[42].deviceId) && (e.__value = i, ks(e, e.__value)), o[0] & /*selected_device, available_video_devices*/
      1536 && l !== (l = /*selected_device*/
      s[10].deviceId === /*device*/
      s[42].deviceId) && (e.selected = l);
    },
    d(s) {
      s && Ee(e);
    }
  };
}
function w7(n) {
  let e, t, r, a, i, l, s, o, c;
  t = new ih({
    props: { time_limit: (
      /*_time_limit*/
      n[11]
    ) }
  });
  let h = (
    /*stream_state*/
    n[12] === "open" && /*include_audio*/
    n[5] && U1(n)
  );
  const m = [m7, d7], f = [];
  function p(v, w) {
    return (
      /*webcam_accessed*/
      v[13] ? 1 : 0
    );
  }
  return s = p(n), o = f[s] = m[s](n), {
    c() {
      e = bt("div"), kr(t.$$.fragment), r = B0(), h && h.c(), a = B0(), i = bt("video"), l = B0(), o.c(), this.h();
    },
    l(v) {
      e = vt(v, "DIV", { class: !0 });
      var w = _t(e);
      wr(t.$$.fragment, w), r = M0(w), h && h.l(w), a = M0(w), i = vt(w, "VIDEO", { class: !0 }), _t(i).forEach(Ee), l = M0(w), o.l(w), w.forEach(Ee), this.h();
    },
    h() {
      i.autoplay = !0, i.playsInline = !0, Ve(i, "class", "svelte-1y5s2o2"), Za(i, "hide", !/*webcam_accessed*/
      n[13]), Za(
        i,
        "flip",
        /*stream_state*/
        n[12] != "open" || /*stream_state*/
        n[12] === "open" && /*include_audio*/
        n[5]
      ), Ve(e, "class", "wrap svelte-1y5s2o2");
    },
    m(v, w) {
      Nt(v, e, w), Ar(t, e, null), tt(e, r), h && h.m(e, null), tt(e, a), tt(e, i), n[31](i), tt(e, l), f[s].m(e, null), c = !0;
    },
    p(v, w) {
      const S = {};
      w[0] & /*_time_limit*/
      2048 && (S.time_limit = /*_time_limit*/
      v[11]), t.$set(S), /*stream_state*/
      v[12] === "open" && /*include_audio*/
      v[5] ? h ? (h.p(v, w), w[0] & /*stream_state, include_audio*/
      4128 && at(h, 1)) : (h = U1(v), h.c(), at(h, 1), h.m(e, a)) : h && (_i(), pt(h, 1, 1, () => {
        h = null;
      }), pi()), (!c || w[0] & /*webcam_accessed*/
      8192) && Za(i, "hide", !/*webcam_accessed*/
      v[13]), (!c || w[0] & /*stream_state, include_audio*/
      4128) && Za(
        i,
        "flip",
        /*stream_state*/
        v[12] != "open" || /*stream_state*/
        v[12] === "open" && /*include_audio*/
        v[5]
      );
      let A = s;
      s = p(v), s === A ? f[s].p(v, w) : (_i(), pt(f[A], 1, 1, () => {
        f[A] = null;
      }), pi(), o = f[s], o ? o.p(v, w) : (o = f[s] = m[s](v), o.c()), at(o, 1), o.m(e, null));
    },
    i(v) {
      c || (at(t.$$.fragment, v), at(h), at(o), c = !0);
    },
    o(v) {
      pt(t.$$.fragment, v), pt(h), pt(o), c = !1;
    },
    d(v) {
      v && Ee(e), Dr(t), h && h.d(), n[31](null), f[s].d();
    }
  };
}
function eo(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function k7(n, e, t) {
  var r = this && this.__awaiter || function(U, fe, ve, Se) {
    function Me(ze) {
      return ze instanceof ve ? ze : new ve(function(Ye) {
        Ye(ze);
      });
    }
    return new (ve || (ve = Promise))(function(ze, Ye) {
      function ct(Ge) {
        try {
          Ue(Se.next(Ge));
        } catch (j) {
          Ye(j);
        }
      }
      function Xe(Ge) {
        try {
          Ue(Se.throw(Ge));
        } catch (j) {
          Ye(j);
        }
      }
      function Ue(Ge) {
        Ge.done ? ze(Ge.value) : Me(Ge.value).then(ct, Xe);
      }
      Ue((Se = Se.apply(U, fe || [])).next());
    });
  };
  let a, i = [], l = null, s = null, { time_limit: o = null } = e, c = "closed", { on_change_cb: h } = e, { reject_cb: m } = e, { mode: f } = e;
  Math.random().toString(36).substring(2);
  let { rtp_params: p = {} } = e, { icon: v = void 0 } = e, { icon_button_color: w = "var(--color-accent)" } = e, { icon_radius: S = 50 } = e, { pulse_color: A = "var(--color-accent)" } = e, { button_labels: b } = e;
  const y = (U) => {
    U === "closed" ? (t(11, s = null), t(12, c = "closed")) : U === "waiting" ? t(12, c = "waiting") : t(12, c = "open");
  };
  let { track_constraints: E = null } = e, { rtc_configuration: C } = e, { stream_every: T = 1 } = e, { server: z } = e, { include_audio: I } = e, { i18n: B } = e;
  const L = h7();
  f7(() => document.createElement("canvas"));
  const R = (U) => r(void 0, void 0, void 0, function* () {
    const ve = U.target.value;
    yield T1(I, a, ve, E).then((Se) => r(void 0, void 0, void 0, function* () {
      q = Se, t(10, l = i.find((Me) => Me.deviceId === ve) || null), t(14, ke = !1);
    }));
  });
  function W() {
    return r(this, void 0, void 0, function* () {
      try {
        T1(I, a, null, E).then((U) => r(this, void 0, void 0, function* () {
          t(13, ue = !0), t(9, i = yield dh()), q = U;
        })).then(() => mh(i)).then((U) => {
          t(9, i = U);
          const fe = q.getTracks().map((ve) => {
            var Se;
            return (Se = ve.getSettings()) === null || Se === void 0 ? void 0 : Se.deviceId;
          })[0];
          t(10, l = fe && U.find((ve) => ve.deviceId === fe) || i[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && L("error", B("image.no_webcam_support"));
      } catch (U) {
        if (U instanceof DOMException && U.name == "NotAllowedError")
          L("error", B("image.allow_webcam_access"));
        else
          throw U;
      }
    });
  }
  let oe = (U) => {
    U.type === "end_stream" ? (h(U), t(12, c = "closed"), It(ie), W()) : (console.debug("calling on_change_cb with msg", U), h(U));
  }, q, ue = !1, ie, { webrtc_id: we } = e;
  function me() {
    return r(this, void 0, void 0, function* () {
      if (c === "closed") {
        yield z.turn().then((fe) => {
          if (fe.error) {
            L("error", fe.error);
            return;
          }
          t(20, C = fe), console.info("rtc_configuration", fe);
        }), ie = new RTCPeerConnection(C), ie.addEventListener("connectionstatechange", (fe) => r(this, void 0, void 0, function* () {
          switch (ie.connectionState) {
            case "connected":
              t(12, c = "open"), t(11, s = o), L("tick");
              break;
            case "disconnected":
              t(12, c = "closed"), t(11, s = null), It(ie), yield W();
              break;
            case "failed":
              t(12, c = "closed"), t(11, s = null), L("error", "Connection failed!"), It(ie);
              break;
          }
        })), t(12, c = "waiting"), t(21, we = Math.random().toString(36).substring(2));
        const U = setTimeout(
          () => {
            h({ type: "connection_timeout" });
          },
          1e4
        );
        Ii(q, ie, f === "send" ? null : a, z.offer, we, "video", oe, p, void 0, m).then((fe) => {
          clearTimeout(U), ie = fe;
        }).catch(() => {
          clearTimeout(U), console.info("catching"), t(12, c = "closed");
        });
      } else
        It(ie), t(12, c = "closed"), t(11, s = null), yield W();
    });
  }
  let ke = !1;
  function De(U) {
    U.preventDefault(), U.stopPropagation(), t(14, ke = !1);
  }
  const te = () => a.srcObject;
  function ae(U) {
    n7[U ? "unshift" : "push"](() => {
      a = U, t(8, a);
    });
  }
  const ge = async () => W(), Le = () => t(14, ke = !0), H = () => t(14, ke = !1);
  return n.$$set = (U) => {
    "time_limit" in U && t(22, o = U.time_limit), "on_change_cb" in U && t(23, h = U.on_change_cb), "reject_cb" in U && t(24, m = U.reject_cb), "mode" in U && t(25, f = U.mode), "rtp_params" in U && t(26, p = U.rtp_params), "icon" in U && t(0, v = U.icon), "icon_button_color" in U && t(1, w = U.icon_button_color), "icon_radius" in U && t(2, S = U.icon_radius), "pulse_color" in U && t(3, A = U.pulse_color), "button_labels" in U && t(4, b = U.button_labels), "track_constraints" in U && t(28, E = U.track_constraints), "rtc_configuration" in U && t(20, C = U.rtc_configuration), "stream_every" in U && t(29, T = U.stream_every), "server" in U && t(30, z = U.server), "include_audio" in U && t(5, I = U.include_audio), "i18n" in U && t(6, B = U.i18n), "webrtc_id" in U && t(21, we = U.webrtc_id);
  }, [
    v,
    w,
    S,
    A,
    b,
    I,
    B,
    eo,
    a,
    i,
    l,
    s,
    c,
    ue,
    ke,
    R,
    W,
    me,
    De,
    te,
    C,
    we,
    o,
    h,
    m,
    f,
    p,
    y,
    E,
    T,
    z,
    ae,
    ge,
    Le,
    H
  ];
}
class D7 extends e7 {
  constructor(e) {
    super(), l7(
      this,
      e,
      k7,
      w7,
      o7,
      {
        time_limit: 22,
        on_change_cb: 23,
        reject_cb: 24,
        mode: 25,
        rtp_params: 26,
        icon: 0,
        icon_button_color: 1,
        icon_radius: 2,
        pulse_color: 3,
        button_labels: 4,
        modify_stream: 27,
        track_constraints: 28,
        rtc_configuration: 20,
        stream_every: 29,
        server: 30,
        include_audio: 5,
        i18n: 6,
        webrtc_id: 21,
        click_outside: 7
      },
      null,
      [-1, -1]
    );
  }
  get modify_stream() {
    return this.$$.ctx[27];
  }
  get click_outside() {
    return eo;
  }
}
const {
  SvelteComponent: A7,
  add_flush_callback: E7,
  attr: W1,
  bind: S7,
  binding_callbacks: x7,
  bubble: Ka,
  children: F7,
  claim_component: Y1,
  claim_element: C7,
  claim_space: T7,
  create_component: X1,
  destroy_component: Z1,
  detach: Xl,
  element: M7,
  init: B7,
  insert_hydration: K1,
  mount_component: Q1,
  safe_not_equal: z7,
  space: I7,
  transition_in: J1,
  transition_out: $1
} = window.__gradio__svelte__internal, { createEventDispatcher: N7 } = window.__gradio__svelte__internal;
function R7(n) {
  let e, t, r, a, i, l;
  e = new Mi({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: xs,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  function s(c) {
    n[21](c);
  }
  let o = {
    rtc_configuration: (
      /*rtc_configuration*/
      n[8]
    ),
    include_audio: (
      /*include_audio*/
      n[3]
    ),
    time_limit: (
      /*time_limit*/
      n[5]
    ),
    track_constraints: (
      /*track_constraints*/
      n[9]
    ),
    mode: (
      /*mode*/
      n[10]
    ),
    rtp_params: (
      /*rtp_params*/
      n[13]
    ),
    on_change_cb: (
      /*on_change_cb*/
      n[11]
    ),
    icon: (
      /*icon*/
      n[14]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[15]
    ),
    pulse_color: (
      /*pulse_color*/
      n[16]
    ),
    icon_radius: (
      /*icon_radius*/
      n[17]
    ),
    button_labels: (
      /*button_labels*/
      n[6]
    ),
    i18n: (
      /*i18n*/
      n[4]
    ),
    stream_every: 0.5,
    server: (
      /*server*/
      n[7]
    ),
    reject_cb: (
      /*reject_cb*/
      n[12]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (o.webrtc_id = /*value*/
    n[0]), a = new D7({ props: o }), x7.push(() => S7(a, "webrtc_id", s)), a.$on(
      "error",
      /*error_handler*/
      n[22]
    ), a.$on(
      "start_recording",
      /*start_recording_handler*/
      n[23]
    ), a.$on(
      "stop_recording",
      /*stop_recording_handler*/
      n[24]
    ), a.$on(
      "tick",
      /*tick_handler*/
      n[25]
    ), {
      c() {
        X1(e.$$.fragment), t = I7(), r = M7("div"), X1(a.$$.fragment), this.h();
      },
      l(c) {
        Y1(e.$$.fragment, c), t = T7(c), r = C7(c, "DIV", { "data-testid": !0, class: !0 });
        var h = F7(r);
        Y1(a.$$.fragment, h), h.forEach(Xl), this.h();
      },
      h() {
        W1(r, "data-testid", "video"), W1(r, "class", "video-container svelte-dn5v7y");
      },
      m(c, h) {
        Q1(e, c, h), K1(c, t, h), K1(c, r, h), Q1(a, r, null), l = !0;
      },
      p(c, [h]) {
        const m = {};
        h & /*show_label*/
        4 && (m.show_label = /*show_label*/
        c[2]), h & /*label*/
        2 && (m.label = /*label*/
        c[1] || "Video"), e.$set(m);
        const f = {};
        h & /*rtc_configuration*/
        256 && (f.rtc_configuration = /*rtc_configuration*/
        c[8]), h & /*include_audio*/
        8 && (f.include_audio = /*include_audio*/
        c[3]), h & /*time_limit*/
        32 && (f.time_limit = /*time_limit*/
        c[5]), h & /*track_constraints*/
        512 && (f.track_constraints = /*track_constraints*/
        c[9]), h & /*mode*/
        1024 && (f.mode = /*mode*/
        c[10]), h & /*rtp_params*/
        8192 && (f.rtp_params = /*rtp_params*/
        c[13]), h & /*on_change_cb*/
        2048 && (f.on_change_cb = /*on_change_cb*/
        c[11]), h & /*icon*/
        16384 && (f.icon = /*icon*/
        c[14]), h & /*icon_button_color*/
        32768 && (f.icon_button_color = /*icon_button_color*/
        c[15]), h & /*pulse_color*/
        65536 && (f.pulse_color = /*pulse_color*/
        c[16]), h & /*icon_radius*/
        131072 && (f.icon_radius = /*icon_radius*/
        c[17]), h & /*button_labels*/
        64 && (f.button_labels = /*button_labels*/
        c[6]), h & /*i18n*/
        16 && (f.i18n = /*i18n*/
        c[4]), h & /*server*/
        128 && (f.server = /*server*/
        c[7]), h & /*reject_cb*/
        4096 && (f.reject_cb = /*reject_cb*/
        c[12]), !i && h & /*value*/
        1 && (i = !0, f.webrtc_id = /*value*/
        c[0], E7(() => i = !1)), a.$set(f);
      },
      i(c) {
        l || (J1(e.$$.fragment, c), J1(a.$$.fragment, c), l = !0);
      },
      o(c) {
        $1(e.$$.fragment, c), $1(a.$$.fragment, c), l = !1;
      },
      d(c) {
        c && (Xl(t), Xl(r)), Z1(e, c), Z1(a);
      }
    }
  );
}
let L7 = !1;
function O7(n, e, t) {
  let { value: r = null } = e, { label: a = void 0 } = e, { show_label: i = !0 } = e, { include_audio: l } = e, { i18n: s } = e, { active_source: o = "webcam" } = e, { handle_reset_value: c = () => {
  } } = e, { stream_handler: h } = e, { time_limit: m = null } = e, { button_labels: f } = e, { server: p } = e, { rtc_configuration: v } = e, { track_constraints: w = {} } = e, { mode: S } = e, { on_change_cb: A } = e, { reject_cb: b } = e, { rtp_params: y = {} } = e, { icon: E = void 0 } = e, { icon_button_color: C = "var(--color-accent)" } = e, { pulse_color: T = "var(--color-accent)" } = e, { icon_radius: z = 50 } = e;
  const I = N7();
  function B(q) {
    r = q, t(0, r);
  }
  function L(q) {
    Ka.call(this, n, q);
  }
  function R(q) {
    Ka.call(this, n, q);
  }
  function W(q) {
    Ka.call(this, n, q);
  }
  function oe(q) {
    Ka.call(this, n, q);
  }
  return n.$$set = (q) => {
    "value" in q && t(0, r = q.value), "label" in q && t(1, a = q.label), "show_label" in q && t(2, i = q.show_label), "include_audio" in q && t(3, l = q.include_audio), "i18n" in q && t(4, s = q.i18n), "active_source" in q && t(18, o = q.active_source), "handle_reset_value" in q && t(19, c = q.handle_reset_value), "stream_handler" in q && t(20, h = q.stream_handler), "time_limit" in q && t(5, m = q.time_limit), "button_labels" in q && t(6, f = q.button_labels), "server" in q && t(7, p = q.server), "rtc_configuration" in q && t(8, v = q.rtc_configuration), "track_constraints" in q && t(9, w = q.track_constraints), "mode" in q && t(10, S = q.mode), "on_change_cb" in q && t(11, A = q.on_change_cb), "reject_cb" in q && t(12, b = q.reject_cb), "rtp_params" in q && t(13, y = q.rtp_params), "icon" in q && t(14, E = q.icon), "icon_button_color" in q && t(15, C = q.icon_button_color), "pulse_color" in q && t(16, T = q.pulse_color), "icon_radius" in q && t(17, z = q.icon_radius);
  }, I("drag", L7), [
    r,
    a,
    i,
    l,
    s,
    m,
    f,
    p,
    v,
    w,
    S,
    A,
    b,
    y,
    E,
    C,
    T,
    z,
    o,
    c,
    h,
    B,
    L,
    R,
    W,
    oe
  ];
}
class q7 extends A7 {
  constructor(e) {
    super(), B7(this, e, O7, R7, z7, {
      value: 0,
      label: 1,
      show_label: 2,
      include_audio: 3,
      i18n: 4,
      active_source: 18,
      handle_reset_value: 19,
      stream_handler: 20,
      time_limit: 5,
      button_labels: 6,
      server: 7,
      rtc_configuration: 8,
      track_constraints: 9,
      mode: 10,
      on_change_cb: 11,
      reject_cb: 12,
      rtp_params: 13,
      icon: 14,
      icon_button_color: 15,
      pulse_color: 16,
      icon_radius: 17
    });
  }
}
var ec;
(function(n) {
  n.LOAD = "LOAD", n.EXEC = "EXEC", n.WRITE_FILE = "WRITE_FILE", n.READ_FILE = "READ_FILE", n.DELETE_FILE = "DELETE_FILE", n.RENAME = "RENAME", n.CREATE_DIR = "CREATE_DIR", n.LIST_DIR = "LIST_DIR", n.DELETE_DIR = "DELETE_DIR", n.ERROR = "ERROR", n.DOWNLOAD = "DOWNLOAD", n.PROGRESS = "PROGRESS", n.LOG = "LOG", n.MOUNT = "MOUNT", n.UNMOUNT = "UNMOUNT";
})(ec || (ec = {}));
const Op = (n) => {
  let e = ["B", "KB", "MB", "GB", "PB"], t = 0;
  for (; n > 1024; )
    n /= 1024, t++;
  let r = e[t];
  return n.toFixed(1) + " " + r;
}, qp = () => !0;
function Pp(n, { autoplay: e }) {
  async function t() {
    e && await n.play();
  }
  return n.addEventListener("loadeddata", t), {
    destroy() {
      n.removeEventListener("loadeddata", t);
    }
  };
}
const {
  SvelteComponent: P7,
  append_hydration: H7,
  attr: Zl,
  binding_callbacks: V7,
  children: tc,
  claim_element: rc,
  claim_text: Hp,
  detach: jn,
  element: nc,
  empty: bi,
  init: U7,
  insert_hydration: to,
  is_function: ac,
  listen: Kl,
  noop: ic,
  run_all: G7,
  safe_not_equal: j7,
  set_data: Vp,
  src_url_equal: lc,
  text: Up,
  toggle_class: en
} = window.__gradio__svelte__internal;
function sc(n) {
  let e;
  function t(i, l) {
    return W7;
  }
  let a = t()(n);
  return {
    c() {
      a.c(), e = bi();
    },
    l(i) {
      a.l(i), e = bi();
    },
    m(i, l) {
      a.m(i, l), to(i, e, l);
    },
    p(i, l) {
      a.p(i, l);
    },
    d(i) {
      i && jn(e), a.d(i);
    }
  };
}
function W7(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = nc("div"), t = nc("video"), this.h();
    },
    l(l) {
      e = rc(l, "DIV", { class: !0 });
      var s = tc(e);
      t = rc(s, "VIDEO", { src: !0 }), tc(t).forEach(jn), s.forEach(jn), this.h();
    },
    h() {
      var l;
      lc(t.src, r = /*value*/
      (l = n[2]) == null ? void 0 : l.video.url) || Zl(t, "src", r), Zl(e, "class", "container svelte-1uoo7dd"), en(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), en(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), en(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(l, s) {
      to(l, e, s), H7(e, t), n[6](t), a || (i = [
        Kl(
          t,
          "loadeddata",
          /*init*/
          n[4]
        ),
        Kl(t, "mouseover", function() {
          ac(
            /*video*/
            n[3].play.bind(
              /*video*/
              n[3]
            )
          ) && n[3].play.bind(
            /*video*/
            n[3]
          ).apply(this, arguments);
        }),
        Kl(t, "mouseout", function() {
          ac(
            /*video*/
            n[3].pause.bind(
              /*video*/
              n[3]
            )
          ) && n[3].pause.bind(
            /*video*/
            n[3]
          ).apply(this, arguments);
        })
      ], a = !0);
    },
    p(l, s) {
      var o;
      n = l, s & /*value*/
      4 && !lc(t.src, r = /*value*/
      (o = n[2]) == null ? void 0 : o.video.url) && Zl(t, "src", r), s & /*type*/
      1 && en(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), s & /*type*/
      1 && en(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), s & /*selected*/
      2 && en(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    d(l) {
      l && jn(e), n[6](null), a = !1, G7(i);
    }
  };
}
function Y7(n) {
  let e, t = (
    /*value*/
    n[2] && sc(n)
  );
  return {
    c() {
      t && t.c(), e = bi();
    },
    l(r) {
      t && t.l(r), e = bi();
    },
    m(r, a) {
      t && t.m(r, a), to(r, e, a);
    },
    p(r, [a]) {
      /*value*/
      r[2] ? t ? t.p(r, a) : (t = sc(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: ic,
    o: ic,
    d(r) {
      r && jn(e), t && t.d(r);
    }
  };
}
function X7(n, e, t) {
  var r = this && this.__awaiter || function(m, f, p, v) {
    function w(S) {
      return S instanceof p ? S : new p(function(A) {
        A(S);
      });
    }
    return new (p || (p = Promise))(function(S, A) {
      function b(C) {
        try {
          E(v.next(C));
        } catch (T) {
          A(T);
        }
      }
      function y(C) {
        try {
          E(v.throw(C));
        } catch (T) {
          A(T);
        }
      }
      function E(C) {
        C.done ? S(C.value) : w(C.value).then(b, y);
      }
      E((v = v.apply(m, f || [])).next());
    });
  };
  let { type: a } = e, { selected: i = !1 } = e, { value: l } = e, { loop: s } = e, o;
  function c() {
    return r(this, void 0, void 0, function* () {
      t(3, o.muted = !0, o), t(3, o.playsInline = !0, o), t(3, o.controls = !1, o), o.setAttribute("muted", ""), yield o.play(), o.pause();
    });
  }
  function h(m) {
    V7[m ? "unshift" : "push"](() => {
      o = m, t(3, o);
    });
  }
  return n.$$set = (m) => {
    "type" in m && t(0, a = m.type), "selected" in m && t(1, i = m.selected), "value" in m && t(2, l = m.value), "loop" in m && t(5, s = m.loop);
  }, [a, i, l, o, c, s, h];
}
class Gp extends P7 {
  constructor(e) {
    super(), U7(this, e, X7, Y7, j7, { type: 0, selected: 1, value: 2, loop: 5 });
  }
}
const {
  SvelteComponent: Z7,
  append_hydration: oc,
  assign: uc,
  attr: tn,
  binding_callbacks: K7,
  bubble: Q7,
  check_outros: J7,
  children: cc,
  claim_component: ro,
  claim_element: Ql,
  claim_space: hc,
  create_component: no,
  destroy_component: ao,
  detach: Rn,
  element: Jl,
  exclude_internal_props: fc,
  group_outros: $7,
  init: e8,
  insert_hydration: $l,
  listen: k0,
  mount_component: io,
  run_all: t8,
  safe_not_equal: r8,
  space: dc,
  toggle_class: mc,
  transition_in: un,
  transition_out: Wn
} = window.__gradio__svelte__internal, { createEventDispatcher: n8 } = window.__gradio__svelte__internal;
function pc(n) {
  let e, t;
  return e = new sh({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [a8] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      no(e.$$.fragment);
    },
    l(r) {
      ro(e.$$.fragment, r);
    },
    m(r, a) {
      io(e, r, a), t = !0;
    },
    i(r) {
      t || (un(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Wn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ao(e, r);
    }
  };
}
function a8(n) {
  let e, t;
  return e = new xs({}), {
    c() {
      no(e.$$.fragment);
    },
    l(r) {
      ro(e.$$.fragment, r);
    },
    m(r, a) {
      io(e, r, a), t = !0;
    },
    i(r) {
      t || (un(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Wn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ao(e, r);
    }
  };
}
function i8(n) {
  let e, t, r, a, i, l, s, o, c, h;
  e = new Mi({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: xs,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  let m = (
    /*value*/
    n[0] === "__webrtc_value__" && pc(n)
  );
  return {
    c() {
      no(e.$$.fragment), t = dc(), m && m.c(), r = dc(), a = Jl("div"), i = Jl("video"), l = Jl("track"), this.h();
    },
    l(f) {
      ro(e.$$.fragment, f), t = hc(f), m && m.l(f), r = hc(f), a = Ql(f, "DIV", { class: !0 });
      var p = cc(a);
      i = Ql(p, "VIDEO", {
        "data-testid": !0,
        crossorigin: !0,
        class: !0
      });
      var v = cc(i);
      l = Ql(v, "TRACK", { kind: !0 }), v.forEach(Rn), p.forEach(Rn), this.h();
    },
    h() {
      tn(l, "kind", "captions"), i.autoplay = !0, tn(i, "data-testid", s = /*$$props*/
      n[5]["data-testid"]), tn(i, "crossorigin", "anonymous"), tn(i, "class", "svelte-1yzqfy6"), mc(
        i,
        "hidden",
        /*value*/
        n[0] === "__webrtc_value__"
      ), tn(a, "class", "wrap svelte-1yzqfy6");
    },
    m(f, p) {
      io(e, f, p), $l(f, t, p), m && m.m(f, p), $l(f, r, p), $l(f, a, p), oc(a, i), oc(i, l), n[12](i), o = !0, c || (h = [
        k0(
          i,
          "loadeddata",
          /*dispatch*/
          n[4].bind(null, "loadeddata")
        ),
        k0(
          i,
          "click",
          /*dispatch*/
          n[4].bind(null, "click")
        ),
        k0(
          i,
          "play",
          /*dispatch*/
          n[4].bind(null, "play")
        ),
        k0(
          i,
          "pause",
          /*dispatch*/
          n[4].bind(null, "pause")
        ),
        k0(
          i,
          "ended",
          /*dispatch*/
          n[4].bind(null, "ended")
        ),
        k0(
          i,
          "mouseover",
          /*dispatch*/
          n[4].bind(null, "mouseover")
        ),
        k0(
          i,
          "mouseout",
          /*dispatch*/
          n[4].bind(null, "mouseout")
        ),
        k0(
          i,
          "focus",
          /*dispatch*/
          n[4].bind(null, "focus")
        ),
        k0(
          i,
          "blur",
          /*dispatch*/
          n[4].bind(null, "blur")
        ),
        k0(
          i,
          "load",
          /*load_handler*/
          n[11]
        )
      ], c = !0);
    },
    p(f, [p]) {
      const v = {};
      p & /*show_label*/
      4 && (v.show_label = /*show_label*/
      f[2]), p & /*label*/
      2 && (v.label = /*label*/
      f[1] || "Video"), e.$set(v), /*value*/
      f[0] === "__webrtc_value__" ? m ? p & /*value*/
      1 && un(m, 1) : (m = pc(f), m.c(), un(m, 1), m.m(r.parentNode, r)) : m && ($7(), Wn(m, 1, 1, () => {
        m = null;
      }), J7()), (!o || p & /*$$props*/
      32 && s !== (s = /*$$props*/
      f[5]["data-testid"])) && tn(i, "data-testid", s), (!o || p & /*value*/
      1) && mc(
        i,
        "hidden",
        /*value*/
        f[0] === "__webrtc_value__"
      );
    },
    i(f) {
      o || (un(e.$$.fragment, f), un(m), o = !0);
    },
    o(f) {
      Wn(e.$$.fragment, f), Wn(m), o = !1;
    },
    d(f) {
      f && (Rn(t), Rn(r), Rn(a)), ao(e, f), m && m.d(f), n[12](null), c = !1, t8(h);
    }
  };
}
function l8(n, e, t) {
  var r = this && this.__awaiter || function(A, b, y, E) {
    function C(T) {
      return T instanceof y ? T : new y(function(z) {
        z(T);
      });
    }
    return new (y || (y = Promise))(function(T, z) {
      function I(R) {
        try {
          L(E.next(R));
        } catch (W) {
          z(W);
        }
      }
      function B(R) {
        try {
          L(E.throw(R));
        } catch (W) {
          z(W);
        }
      }
      function L(R) {
        R.done ? T(R.value) : C(R.value).then(I, B);
      }
      L((E = E.apply(A, b || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { on_change_cb: o } = e, { server: c } = e, h, m = Math.random().toString(36).substring(2), f;
  const p = n8();
  let v = (A) => {
    A.type === "end_stream" ? (o(A), It(f)) : (console.debug("calling on_change_cb with msg", A), o(A));
  };
  function w(A) {
    Q7.call(this, n, A);
  }
  function S(A) {
    K7[A ? "unshift" : "push"](() => {
      h = A, t(3, h);
    });
  }
  return n.$$set = (A) => {
    t(5, e = uc(uc({}, e), fc(A))), "value" in A && t(0, a = A.value), "label" in A && t(1, i = A.label), "show_label" in A && t(2, l = A.show_label), "rtc_configuration" in A && t(6, s = A.rtc_configuration), "on_change_cb" in A && t(7, o = A.on_change_cb), "server" in A && t(8, c = A.server);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*value, server, _webrtc_id, rtc_configuration, pc, on_change_cb, video_element*/
    1993 && a === "start_webrtc_stream") {
      t(9, m = Math.random().toString(36).substring(2)), c.turn().then((b) => {
        t(6, s = b);
      }).catch((b) => {
        p("error", b);
      }), t(0, a = m), t(10, f = new RTCPeerConnection(s)), f.addEventListener("connectionstatechange", (b) => r(void 0, void 0, void 0, function* () {
        switch (f.connectionState) {
          case "connected":
            p("tick");
            break;
          case "disconnected":
            It(f);
            break;
          case "failed":
            p("error", "Connection failed!"), It(f);
            break;
        }
      }));
      const A = setTimeout(
        () => {
          o({ type: "connection_timeout" });
        },
        1e4
      );
      Ii(null, f, h, c.offer, m, "video", v).then((b) => {
        clearTimeout(A), t(10, f = b);
      }).catch(() => {
        clearTimeout(A), p("error", "Too many concurrent users. Come back later!");
      });
    }
  }, e = fc(e), [
    a,
    i,
    l,
    h,
    p,
    e,
    s,
    o,
    c,
    m,
    f,
    w,
    S
  ];
}
class s8 extends Z7 {
  constructor(e) {
    super(), e8(this, e, l8, i8, r8, {
      value: 0,
      label: 1,
      show_label: 2,
      rtc_configuration: 6,
      on_change_cb: 7,
      server: 8
    });
  }
}
const {
  SvelteComponent: o8,
  append_hydration: ln,
  attr: j0,
  check_outros: u8,
  children: W0,
  claim_component: c8,
  claim_element: Y0,
  claim_space: gc,
  create_component: h8,
  destroy_component: f8,
  destroy_each: d8,
  detach: zt,
  element: X0,
  ensure_array_like: _c,
  group_outros: m8,
  init: p8,
  insert_hydration: oa,
  mount_component: g8,
  noop: ea,
  safe_not_equal: _8,
  set_style: Qt,
  space: vc,
  transition_in: Ds,
  transition_out: As
} = window.__gradio__svelte__internal, { onDestroy: v8 } = window.__gradio__svelte__internal;
function bc(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r;
}
function b8(n) {
  let e, t = _c(Array(
    /*numBars*/
    n[0]
  )), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = yc(bc(n, t, a));
  return {
    c() {
      e = X0("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      this.h();
    },
    l(a) {
      e = Y0(a, "DIV", { class: !0 });
      var i = W0(e);
      for (let l = 0; l < r.length; l += 1)
        r[l].l(i);
      i.forEach(zt), this.h();
    },
    h() {
      j0(e, "class", "gradio-webrtc-boxContainer svelte-1x8be7j"), Qt(
        e,
        "width",
        /*containerWidth*/
        n[9]
      );
    },
    m(a, i) {
      oa(a, e, i);
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(e, null);
    },
    p(a, i) {
      if (i & /*numBars*/
      1) {
        t = _c(Array(
          /*numBars*/
          a[0]
        ));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = bc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = yc(), r[l].c(), r[l].m(e, null));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
      i & /*containerWidth*/
      512 && Qt(
        e,
        "width",
        /*containerWidth*/
        a[9]
      );
    },
    i: ea,
    o: ea,
    d(a) {
      a && zt(e), d8(r, a);
    }
  };
}
function y8(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = X0("div"), t = X0("div"), r = vc(), a = X0("div"), i = vc(), l = X0("div"), this.h();
    },
    l(s) {
      e = Y0(s, "DIV", { class: !0 });
      var o = W0(e);
      t = Y0(o, "DIV", { class: !0 }), W0(t).forEach(zt), r = gc(o), a = Y0(o, "DIV", { class: !0 }), W0(a).forEach(zt), i = gc(o), l = Y0(o, "DIV", { class: !0 }), W0(l).forEach(zt), o.forEach(zt), this.h();
    },
    h() {
      j0(t, "class", "dot svelte-1x8be7j"), Qt(
        t,
        "background-color",
        /*pulse_color*/
        n[5]
      ), j0(a, "class", "dot svelte-1x8be7j"), Qt(
        a,
        "background-color",
        /*pulse_color*/
        n[5]
      ), j0(l, "class", "dot svelte-1x8be7j"), Qt(
        l,
        "background-color",
        /*pulse_color*/
        n[5]
      ), j0(e, "class", "dots svelte-1x8be7j");
    },
    m(s, o) {
      oa(s, e, o), ln(e, t), ln(e, r), ln(e, a), ln(e, i), ln(e, l);
    },
    p(s, o) {
      o & /*pulse_color*/
      32 && Qt(
        t,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && Qt(
        a,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && Qt(
        l,
        "background-color",
        /*pulse_color*/
        s[5]
      );
    },
    i: ea,
    o: ea,
    d(s) {
      s && zt(e);
    }
  };
}
function w8(n) {
  let e, t, r, a;
  return r = new $s({
    props: {
      stream_state: (
        /*stream_state*/
        n[1]
      ),
      pulse_color: (
        /*pulse_color*/
        n[5]
      ),
      icon: (
        /*icon*/
        n[3]
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[4]
      ),
      icon_radius: (
        /*icon_radius*/
        n[7]
      ),
      audio_source_callback: (
        /*audio_source_callback*/
        n[2]
      )
    }
  }), {
    c() {
      e = X0("div"), t = X0("div"), h8(r.$$.fragment), this.h();
    },
    l(i) {
      e = Y0(i, "DIV", { class: !0 });
      var l = W0(e);
      t = Y0(l, "DIV", { class: !0 });
      var s = W0(t);
      c8(r.$$.fragment, s), s.forEach(zt), l.forEach(zt), this.h();
    },
    h() {
      j0(t, "class", "gradio-webrtc-icon svelte-1x8be7j"), Qt(t, "transform", `scale(${/*pulseScale*/
      n[8]})`), Qt(
        t,
        "background",
        /*icon_button_color*/
        n[4]
      ), j0(e, "class", "gradio-webrtc-icon-container svelte-1x8be7j");
    },
    m(i, l) {
      oa(i, e, l), ln(e, t), g8(r, t, null), a = !0;
    },
    p(i, l) {
      const s = {};
      l & /*stream_state*/
      2 && (s.stream_state = /*stream_state*/
      i[1]), l & /*pulse_color*/
      32 && (s.pulse_color = /*pulse_color*/
      i[5]), l & /*icon*/
      8 && (s.icon = /*icon*/
      i[3]), l & /*icon_button_color*/
      16 && (s.icon_button_color = /*icon_button_color*/
      i[4]), l & /*icon_radius*/
      128 && (s.icon_radius = /*icon_radius*/
      i[7]), l & /*audio_source_callback*/
      4 && (s.audio_source_callback = /*audio_source_callback*/
      i[2]), r.$set(s), l & /*pulseScale*/
      256 && Qt(t, "transform", `scale(${/*pulseScale*/
      i[8]})`), l & /*icon_button_color*/
      16 && Qt(
        t,
        "background",
        /*icon_button_color*/
        i[4]
      );
    },
    i(i) {
      a || (Ds(r.$$.fragment, i), a = !0);
    },
    o(i) {
      As(r.$$.fragment, i), a = !1;
    },
    d(i) {
      i && zt(e), f8(r);
    }
  };
}
function yc(n) {
  let e;
  return {
    c() {
      e = X0("div"), this.h();
    },
    l(t) {
      e = Y0(t, "DIV", { class: !0 }), W0(e).forEach(zt), this.h();
    },
    h() {
      j0(e, "class", "gradio-webrtc-box svelte-1x8be7j");
    },
    m(t, r) {
      oa(t, e, r);
    },
    p: ea,
    d(t) {
      t && zt(e);
    }
  };
}
function k8(n) {
  let e, t, r, a;
  const i = [w8, y8, b8], l = [];
  function s(o, c) {
    return (
      /*icon*/
      o[3] && !/*pending*/
      o[6] ? 0 : (
        /*pending*/
        o[6] ? 1 : 2
      )
    );
  }
  return t = s(n), r = l[t] = i[t](n), {
    c() {
      e = X0("div"), r.c(), this.h();
    },
    l(o) {
      e = Y0(o, "DIV", { class: !0 });
      var c = W0(e);
      r.l(c), c.forEach(zt), this.h();
    },
    h() {
      j0(e, "class", "gradio-webrtc-waveContainer svelte-1x8be7j");
    },
    m(o, c) {
      oa(o, e, c), l[t].m(e, null), a = !0;
    },
    p(o, [c]) {
      let h = t;
      t = s(o), t === h ? l[t].p(o, c) : (m8(), As(l[h], 1, 1, () => {
        l[h] = null;
      }), u8(), r = l[t], r ? r.p(o, c) : (r = l[t] = i[t](o), r.c()), Ds(r, 1), r.m(e, null));
    },
    i(o) {
      a || (Ds(r), a = !0);
    },
    o(o) {
      As(r), a = !1;
    },
    d(o) {
      o && zt(e), l[t].d();
    }
  };
}
function D8(n, e, t) {
  let r, { numBars: a = 16 } = e, { stream_state: i = "closed" } = e, { audio_source_callback: l } = e, { icon: s = void 0 } = e, { icon_button_color: o = "var(--color-accent)" } = e, { pulse_color: c = "var(--color-accent)" } = e, { pending: h = !1 } = e, { icon_radius: m = 50 } = e, f, p, v, w, { pulseScale: S = 1 } = e;
  v8(() => {
    w && cancelAnimationFrame(w), f && f.close();
  });
  function A() {
    f = new (window.AudioContext || window.webkitAudioContext)(), p = f.createAnalyser(), f.createMediaStreamSource(l()).connect(p), p.fftSize = 64, p.smoothingTimeConstant = 0.8, v = new Uint8Array(p.frequencyBinCount), b();
  }
  function b() {
    p.getByteFrequencyData(v);
    const y = document.querySelectorAll(".gradio-webrtc-waveContainer .gradio-webrtc-box");
    for (let E = 0; E < y.length; E++) {
      const C = v[E] / 255 * 2;
      y[E].style.transform = `scaleY(${Math.max(0.1, C)})`;
    }
    w = requestAnimationFrame(b);
  }
  return n.$$set = (y) => {
    "numBars" in y && t(0, a = y.numBars), "stream_state" in y && t(1, i = y.stream_state), "audio_source_callback" in y && t(2, l = y.audio_source_callback), "icon" in y && t(3, s = y.icon), "icon_button_color" in y && t(4, o = y.icon_button_color), "pulse_color" in y && t(5, c = y.pulse_color), "pending" in y && t(6, h = y.pending), "icon_radius" in y && t(7, m = y.icon_radius), "pulseScale" in y && t(8, S = y.pulseScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon, numBars*/
    9 && t(9, r = s ? "128px" : `calc((var(--boxSize) + var(--gutter)) * ${a})`), n.$$.dirty & /*stream_state*/
    2 && i === "open" && A();
  }, [
    a,
    i,
    l,
    s,
    o,
    c,
    h,
    m,
    S,
    r
  ];
}
class vh extends o8 {
  constructor(e) {
    super(), p8(this, e, D8, k8, _8, {
      numBars: 0,
      stream_state: 1,
      audio_source_callback: 2,
      icon: 3,
      icon_button_color: 4,
      pulse_color: 5,
      pending: 6,
      icon_radius: 7,
      pulseScale: 8
    });
  }
}
const {
  SvelteComponent: A8,
  attr: bh,
  binding_callbacks: E8,
  bubble: S8,
  check_outros: wc,
  children: yh,
  claim_component: Ni,
  claim_element: wh,
  claim_space: es,
  create_component: Ri,
  destroy_component: Li,
  detach: dr,
  element: kh,
  empty: kc,
  group_outros: Dc,
  init: x8,
  insert_hydration: sn,
  listen: ts,
  mount_component: Oi,
  run_all: F8,
  safe_not_equal: C8,
  space: rs,
  toggle_class: T8,
  transition_in: D0,
  transition_out: mr
} = window.__gradio__svelte__internal, { createEventDispatcher: M8 } = window.__gradio__svelte__internal;
function Ac(n) {
  let e, t, r;
  return t = new vh({
    props: {
      audio_source_callback: (
        /*func*/
        n[18]
      ),
      stream_state: (
        /*stream_state*/
        n[8]
      ),
      icon: (
        /*icon*/
        n[4]
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[5]
      ),
      pulse_color: (
        /*pulse_color*/
        n[6]
      ),
      icon_radius: (
        /*icon_radius*/
        n[7]
      )
    }
  }), {
    c() {
      e = kh("div"), Ri(t.$$.fragment), this.h();
    },
    l(a) {
      e = wh(a, "DIV", { class: !0 });
      var i = yh(e);
      Ni(t.$$.fragment, i), i.forEach(dr), this.h();
    },
    h() {
      bh(e, "class", "audio-container svelte-js69uk");
    },
    m(a, i) {
      sn(a, e, i), Oi(t, e, null), r = !0;
    },
    p(a, i) {
      const l = {};
      i & /*audio_player*/
      512 && (l.audio_source_callback = /*func*/
      a[18]), i & /*stream_state*/
      256 && (l.stream_state = /*stream_state*/
      a[8]), i & /*icon*/
      16 && (l.icon = /*icon*/
      a[4]), i & /*icon_button_color*/
      32 && (l.icon_button_color = /*icon_button_color*/
      a[5]), i & /*pulse_color*/
      64 && (l.pulse_color = /*pulse_color*/
      a[6]), i & /*icon_radius*/
      128 && (l.icon_radius = /*icon_radius*/
      a[7]), t.$set(l);
    },
    i(a) {
      r || (D0(t.$$.fragment, a), r = !0);
    },
    o(a) {
      mr(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && dr(e), Li(t);
    }
  };
}
function Ec(n) {
  let e, t;
  return e = new sh({
    props: {
      size: "small",
      $$slots: { default: [B8] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ri(e.$$.fragment);
    },
    l(r) {
      Ni(e.$$.fragment, r);
    },
    m(r, a) {
      Oi(e, r, a), t = !0;
    },
    i(r) {
      t || (D0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      mr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Li(e, r);
    }
  };
}
function B8(n) {
  let e, t;
  return e = new Ss({}), {
    c() {
      Ri(e.$$.fragment);
    },
    l(r) {
      Ni(e.$$.fragment, r);
    },
    m(r, a) {
      Oi(e, r, a), t = !0;
    },
    i(r) {
      t || (D0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      mr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Li(e, r);
    }
  };
}
function z8(n) {
  let e, t, r, a, i, l, s, o, c;
  e = new Mi({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Ss,
      float: !1,
      label: (
        /*label*/
        n[1] || /*i18n*/
        n[3]("audio.audio")
      )
    }
  });
  let h = (
    /*value*/
    n[0] !== "__webrtc_value__" && Ac(n)
  ), m = (
    /*value*/
    n[0] === "__webrtc_value__" && Ec(n)
  );
  return {
    c() {
      Ri(e.$$.fragment), t = rs(), r = kh("audio"), a = rs(), h && h.c(), i = rs(), m && m.c(), l = kc(), this.h();
    },
    l(f) {
      Ni(e.$$.fragment, f), t = es(f), r = wh(f, "AUDIO", { class: !0 }), yh(r).forEach(dr), a = es(f), h && h.l(f), i = es(f), m && m.l(f), l = kc(), this.h();
    },
    h() {
      bh(r, "class", "standard-player svelte-js69uk"), T8(r, "hidden", !0);
    },
    m(f, p) {
      Oi(e, f, p), sn(f, t, p), sn(f, r, p), n[15](r), sn(f, a, p), h && h.m(f, p), sn(f, i, p), m && m.m(f, p), sn(f, l, p), s = !0, o || (c = [
        ts(
          r,
          "load",
          /*load_handler*/
          n[14]
        ),
        ts(
          r,
          "ended",
          /*ended_handler*/
          n[16]
        ),
        ts(
          r,
          "play",
          /*play_handler*/
          n[17]
        )
      ], o = !0);
    },
    p(f, [p]) {
      const v = {};
      p & /*show_label*/
      4 && (v.show_label = /*show_label*/
      f[2]), p & /*label, i18n*/
      10 && (v.label = /*label*/
      f[1] || /*i18n*/
      f[3]("audio.audio")), e.$set(v), /*value*/
      f[0] !== "__webrtc_value__" ? h ? (h.p(f, p), p & /*value*/
      1 && D0(h, 1)) : (h = Ac(f), h.c(), D0(h, 1), h.m(i.parentNode, i)) : h && (Dc(), mr(h, 1, 1, () => {
        h = null;
      }), wc()), /*value*/
      f[0] === "__webrtc_value__" ? m ? p & /*value*/
      1 && D0(m, 1) : (m = Ec(f), m.c(), D0(m, 1), m.m(l.parentNode, l)) : m && (Dc(), mr(m, 1, 1, () => {
        m = null;
      }), wc());
    },
    i(f) {
      s || (D0(e.$$.fragment, f), D0(h), D0(m), s = !0);
    },
    o(f) {
      mr(e.$$.fragment, f), mr(h), mr(m), s = !1;
    },
    d(f) {
      f && (dr(t), dr(r), dr(a), dr(i), dr(l)), Li(e, f), n[15](null), h && h.d(f), m && m.d(f), o = !1, F8(c);
    }
  };
}
function I8(n, e, t) {
  var r = this && this.__awaiter || function(R, W, oe, q) {
    function ue(ie) {
      return ie instanceof oe ? ie : new oe(function(we) {
        we(ie);
      });
    }
    return new (oe || (oe = Promise))(function(ie, we) {
      function me(te) {
        try {
          De(q.next(te));
        } catch (ae) {
          we(ae);
        }
      }
      function ke(te) {
        try {
          De(q.throw(te));
        } catch (ae) {
          we(ae);
        }
      }
      function De(te) {
        te.done ? ie(te.value) : ue(te.value).then(me, ke);
      }
      De((q = q.apply(R, W || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { i18n: o } = e, { on_change_cb: c } = e, { icon: h = void 0 } = e, { icon_button_color: m = "var(--color-accent)" } = e, { pulse_color: f = "var(--color-accent)" } = e, { icon_radius: p = 50 } = e, { server: v } = e, w = "closed", S, A, b = Math.random().toString(36).substring(2), y = (R) => {
    R.type === "end_stream" ? (c(R), t(8, w = "closed"), It(A)) : (console.debug("calling on_change_cb with msg", R), c(R));
  };
  const E = M8();
  function C(R) {
    return r(this, void 0, void 0, function* () {
      if (R === "start_webrtc_stream") {
        t(8, w = "waiting"), b = Math.random().toString(36).substring(2), R = b, A = new RTCPeerConnection(s), A.addEventListener("connectionstatechange", (q) => r(this, void 0, void 0, function* () {
          switch (A.connectionState) {
            case "connected":
              console.info("connected"), t(8, w = "open"), E("tick");
              break;
            case "disconnected":
              console.info("closed"), It(A);
              break;
            case "failed":
              t(8, w = "closed"), E("error", "Connection failed!"), It(A);
              break;
          }
        }));
        let W = null;
        const oe = setTimeout(
          () => {
            c({ type: "connection_timeout" });
          },
          1e4
        );
        Ii(W, A, S, v.offer, b, "audio", y).then((q) => {
          clearTimeout(oe), A = q;
        }).catch(() => {
          clearTimeout(oe), console.info("catching"), E("error", "Too many concurrent users. Come back later!");
        });
      }
      return R;
    });
  }
  function T(R) {
    S8.call(this, n, R);
  }
  function z(R) {
    E8[R ? "unshift" : "push"](() => {
      S = R, t(9, S);
    });
  }
  const I = () => E("stop"), B = () => E("play"), L = () => S.srcObject;
  return n.$$set = (R) => {
    "value" in R && t(0, a = R.value), "label" in R && t(1, i = R.label), "show_label" in R && t(2, l = R.show_label), "rtc_configuration" in R && t(11, s = R.rtc_configuration), "i18n" in R && t(3, o = R.i18n), "on_change_cb" in R && t(12, c = R.on_change_cb), "icon" in R && t(4, h = R.icon), "icon_button_color" in R && t(5, m = R.icon_button_color), "pulse_color" in R && t(6, f = R.pulse_color), "icon_radius" in R && t(7, p = R.icon_radius), "server" in R && t(13, v = R.server);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && C(a).then((R) => {
      t(0, a = R);
    });
  }, [
    a,
    i,
    l,
    o,
    h,
    m,
    f,
    p,
    w,
    S,
    E,
    s,
    c,
    v,
    T,
    z,
    I,
    B,
    L
  ];
}
class N8 extends A8 {
  constructor(e) {
    super(), x8(this, e, I8, z8, C8, {
      value: 0,
      label: 1,
      show_label: 2,
      rtc_configuration: 11,
      i18n: 3,
      on_change_cb: 12,
      icon: 4,
      icon_button_color: 5,
      pulse_color: 6,
      icon_radius: 7,
      server: 13
    });
  }
}
const {
  SvelteComponent: R8,
  append_hydration: Ln,
  attr: Ne,
  children: rn,
  claim_svg_element: nn,
  detach: Cr,
  init: L8,
  insert_hydration: O8,
  noop: ns,
  safe_not_equal: q8,
  svg_element: an
} = window.__gradio__svelte__internal;
function P8(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = an("svg"), t = an("path"), r = an("path"), a = an("line"), i = an("line"), l = an("line"), this.h();
    },
    l(s) {
      e = nn(s, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var o = rn(e);
      t = nn(o, "path", { d: !0 }), rn(t).forEach(Cr), r = nn(o, "path", { d: !0 }), rn(r).forEach(Cr), a = nn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), rn(a).forEach(Cr), i = nn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), rn(i).forEach(Cr), l = nn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), rn(l).forEach(Cr), o.forEach(Cr), this.h();
    },
    h() {
      Ne(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Ne(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Ne(a, "x1", "12"), Ne(a, "y1", "19"), Ne(a, "x2", "12"), Ne(a, "y2", "23"), Ne(i, "x1", "8"), Ne(i, "y1", "23"), Ne(i, "x2", "16"), Ne(i, "y2", "23"), Ne(l, "x1", "1"), Ne(l, "y1", "1"), Ne(l, "x2", "23"), Ne(l, "y2", "23"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "fill", "none"), Ne(e, "stroke", "currentColor"), Ne(e, "stroke-width", "2"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round"), Ne(e, "class", "feather feather-mic");
    },
    m(s, o) {
      O8(s, e, o), Ln(e, t), Ln(e, r), Ln(e, a), Ln(e, i), Ln(e, l);
    },
    p: ns,
    i: ns,
    o: ns,
    d(s) {
      s && Cr(e);
    }
  };
}
class H8 extends R8 {
  constructor(e) {
    super(), L8(this, e, null, P8, q8, {});
  }
}
const {
  SvelteComponent: V8,
  action_destroyer: U8,
  add_render_callback: G8,
  append_hydration: We,
  attr: de,
  binding_callbacks: j8,
  bubble: W8,
  check_outros: V0,
  children: Qe,
  claim_component: Rt,
  claim_element: Je,
  claim_space: Gt,
  claim_text: ua,
  create_component: Lt,
  create_in_transition: Y8,
  destroy_component: Ot,
  destroy_each: X8,
  detach: he,
  element: $e,
  empty: Sc,
  ensure_array_like: xc,
  group_outros: U0,
  init: Z8,
  insert_hydration: ut,
  listen: Q0,
  mount_component: qt,
  noop: lo,
  run_all: Dh,
  safe_not_equal: K8,
  set_data: ca,
  set_input_value: Es,
  set_style: Q8,
  space: jt,
  stop_propagation: J8,
  text: ha,
  toggle_class: yi,
  transition_in: _e,
  transition_out: Ae
} = window.__gradio__svelte__internal, { createEventDispatcher: $8 } = window.__gradio__svelte__internal, { onMount: ep } = window.__gradio__svelte__internal;
function Fc(n, e, t) {
  const r = n.slice();
  return r[50] = e[t], r;
}
function tp(n) {
  let e, t, r, a, i, l, s, o, c, h, m, f = (
    /*stream_state*/
    n[14] === "open" && /*mode*/
    n[1].includes("send")
  ), p, v, w, S;
  e = new vh({
    props: {
      audio_source_callback: (
        /*audio_source_callback*/
        n[22]
      ),
      stream_state: (
        /*stream_state*/
        n[14]
      ),
      icon: (
        /*icon*/
        n[5]
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[6]
      ),
      pulse_color: (
        /*pulse_color*/
        n[7]
      ),
      pending: (
        /*pending*/
        n[11]
      ),
      icon_radius: (
        /*icon_radius*/
        n[8]
      )
    }
  }), r = new ih({
    props: { time_limit: (
      /*_time_limit*/
      n[13]
    ) }
  });
  const A = [ip, ap, np], b = [];
  function y(I, B) {
    return (
      /*stream_state*/
      I[14] === "waiting" ? 0 : (
        /*stream_state*/
        I[14] === "open" ? 1 : 2
      )
    );
  }
  s = y(n), o = b[s] = A[s](n);
  let E = (
    /*stream_state*/
    n[14] === "closed" && Cc(n)
  ), C = (
    /*stream_state*/
    n[14] === "open" && /*mode*/
    n[1] === "send-receive" && Tc(n)
  ), T = f && Mc(n), z = (
    /*options_open*/
    n[12] && /*selected_device*/
    n[18] && Bc(n)
  );
  return {
    c() {
      Lt(e.$$.fragment), t = jt(), Lt(r.$$.fragment), a = jt(), i = $e("div"), l = $e("button"), o.c(), c = jt(), E && E.c(), h = jt(), C && C.c(), m = jt(), T && T.c(), p = jt(), z && z.c(), this.h();
    },
    l(I) {
      Rt(e.$$.fragment, I), t = Gt(I), Rt(r.$$.fragment, I), a = Gt(I), i = Je(I, "DIV", { class: !0 });
      var B = Qe(i);
      l = Je(B, "BUTTON", { "aria-label": !0, class: !0 });
      var L = Qe(l);
      o.l(L), L.forEach(he), c = Gt(B), E && E.l(B), h = Gt(B), C && C.l(B), m = Gt(B), T && T.l(B), p = Gt(B), z && z.l(B), B.forEach(he), this.h();
    },
    h() {
      de(l, "aria-label", "start stream"), de(l, "class", "svelte-k2wuss"), de(i, "class", "button-wrap svelte-k2wuss"), yi(
        i,
        "pulse",
        /*stopword_recognized*/
        n[10]
      );
    },
    m(I, B) {
      qt(e, I, B), ut(I, t, B), qt(r, I, B), ut(I, a, B), ut(I, i, B), We(i, l), b[s].m(l, null), We(i, c), E && E.m(i, null), We(i, h), C && C.m(i, null), We(i, m), T && T.m(i, null), We(i, p), z && z.m(i, null), v = !0, w || (S = Q0(
        l,
        "click",
        /*start_stream*/
        n[25]
      ), w = !0);
    },
    p(I, B) {
      const L = {};
      B[0] & /*stream_state*/
      16384 && (L.stream_state = /*stream_state*/
      I[14]), B[0] & /*icon*/
      32 && (L.icon = /*icon*/
      I[5]), B[0] & /*icon_button_color*/
      64 && (L.icon_button_color = /*icon_button_color*/
      I[6]), B[0] & /*pulse_color*/
      128 && (L.pulse_color = /*pulse_color*/
      I[7]), B[0] & /*pending*/
      2048 && (L.pending = /*pending*/
      I[11]), B[0] & /*icon_radius*/
      256 && (L.icon_radius = /*icon_radius*/
      I[8]), e.$set(L);
      const R = {};
      B[0] & /*_time_limit*/
      8192 && (R.time_limit = /*_time_limit*/
      I[13]), r.$set(R);
      let W = s;
      s = y(I), s === W ? b[s].p(I, B) : (U0(), Ae(b[W], 1, 1, () => {
        b[W] = null;
      }), V0(), o = b[s], o ? o.p(I, B) : (o = b[s] = A[s](I), o.c()), _e(o, 1), o.m(l, null)), /*stream_state*/
      I[14] === "closed" ? E ? (E.p(I, B), B[0] & /*stream_state*/
      16384 && _e(E, 1)) : (E = Cc(I), E.c(), _e(E, 1), E.m(i, h)) : E && (U0(), Ae(E, 1, 1, () => {
        E = null;
      }), V0()), /*stream_state*/
      I[14] === "open" && /*mode*/
      I[1] === "send-receive" ? C ? (C.p(I, B), B[0] & /*stream_state, mode*/
      16386 && _e(C, 1)) : (C = Tc(I), C.c(), _e(C, 1), C.m(i, m)) : C && (U0(), Ae(C, 1, 1, () => {
        C = null;
      }), V0()), B[0] & /*stream_state, mode*/
      16386 && (f = /*stream_state*/
      I[14] === "open" && /*mode*/
      I[1].includes("send")), f ? T ? (T.p(I, B), B[0] & /*stream_state, mode*/
      16386 && _e(T, 1)) : (T = Mc(I), T.c(), _e(T, 1), T.m(i, p)) : T && (U0(), Ae(T, 1, 1, () => {
        T = null;
      }), V0()), /*options_open*/
      I[12] && /*selected_device*/
      I[18] ? z ? (z.p(I, B), B[0] & /*options_open, selected_device*/
      266240 && _e(z, 1)) : (z = Bc(I), z.c(), _e(z, 1), z.m(i, null)) : z && (U0(), Ae(z, 1, 1, () => {
        z = null;
      }), V0()), (!v || B[0] & /*stopword_recognized*/
      1024) && yi(
        i,
        "pulse",
        /*stopword_recognized*/
        I[10]
      );
    },
    i(I) {
      v || (_e(e.$$.fragment, I), _e(r.$$.fragment, I), _e(o), _e(E), _e(C), _e(T), _e(z), v = !0);
    },
    o(I) {
      Ae(e.$$.fragment, I), Ae(r.$$.fragment, I), Ae(o), Ae(E), Ae(C), Ae(T), Ae(z), v = !1;
    },
    d(I) {
      I && (he(t), he(a), he(i)), Ot(e, I), Ot(r, I), b[s].d(), E && E.d(), C && C.d(), T && T.d(), z && z.d(), w = !1, S();
    }
  };
}
function rp(n) {
  let e, t, r, a;
  return t = new fh({ props: { icon: ei } }), t.$on(
    "click",
    /*click_handler*/
    n[42]
  ), {
    c() {
      e = $e("div"), Lt(t.$$.fragment), this.h();
    },
    l(i) {
      e = Je(i, "DIV", { title: !0, style: !0 });
      var l = Qe(e);
      Rt(t.$$.fragment, l), l.forEach(he), this.h();
    },
    h() {
      de(e, "title", "grant webcam access"), Q8(e, "height", "100%");
    },
    m(i, l) {
      ut(i, e, l), qt(t, e, null), a = !0;
    },
    p: lo,
    i(i) {
      a || (_e(t.$$.fragment, i), i && (r || G8(() => {
        r = Y8(e, V4, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      Ae(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && he(e), Ot(t);
    }
  };
}
function np(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[9].start || /*i18n*/
    n[4]("audio.record")) + ""
  ), l, s;
  return r = new wi({}), {
    c() {
      e = $e("div"), t = $e("div"), Lt(r.$$.fragment), a = jt(), l = ha(i), this.h();
    },
    l(o) {
      e = Je(o, "DIV", { class: !0 });
      var c = Qe(e);
      t = Je(c, "DIV", { class: !0, title: !0 });
      var h = Qe(t);
      Rt(r.$$.fragment, h), h.forEach(he), a = Gt(c), l = ua(c, i), c.forEach(he), this.h();
    },
    h() {
      de(t, "class", "icon color-primary svelte-k2wuss"), de(t, "title", "start recording"), de(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, c) {
      ut(o, e, c), We(e, t), qt(r, t, null), We(e, a), We(e, l), s = !0;
    },
    p(o, c) {
      (!s || c[0] & /*button_labels, i18n*/
      528) && i !== (i = /*button_labels*/
      (o[9].start || /*i18n*/
      o[4]("audio.record")) + "") && ca(l, i);
    },
    i(o) {
      s || (_e(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Ae(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && he(e), Ot(r);
    }
  };
}
function ap(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[9].stop || /*i18n*/
    n[4]("audio.stop")) + ""
  ), l, s;
  const o = [sp, lp], c = [];
  function h(m, f) {
    return (
      /*mode*/
      m[1] === "send-receive" ? 0 : 1
    );
  }
  return t = h(n), r = c[t] = o[t](n), {
    c() {
      e = $e("div"), r.c(), a = jt(), l = ha(i), this.h();
    },
    l(m) {
      e = Je(m, "DIV", { class: !0 });
      var f = Qe(e);
      r.l(f), a = Gt(f), l = ua(f, i), f.forEach(he), this.h();
    },
    h() {
      de(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(m, f) {
      ut(m, e, f), c[t].m(e, null), We(e, a), We(e, l), s = !0;
    },
    p(m, f) {
      let p = t;
      t = h(m), t === p ? c[t].p(m, f) : (U0(), Ae(c[p], 1, 1, () => {
        c[p] = null;
      }), V0(), r = c[t], r ? r.p(m, f) : (r = c[t] = o[t](m), r.c()), _e(r, 1), r.m(e, a)), (!s || f[0] & /*button_labels, i18n*/
      528) && i !== (i = /*button_labels*/
      (m[9].stop || /*i18n*/
      m[4]("audio.stop")) + "") && ca(l, i);
    },
    i(m) {
      s || (_e(r), s = !0);
    },
    o(m) {
      Ae(r), s = !1;
    },
    d(m) {
      m && he(e), c[t].d();
    }
  };
}
function ip(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[9].waiting || "Connecting...") + ""
  ), l, s;
  return r = new qc({}), {
    c() {
      e = $e("div"), t = $e("div"), Lt(r.$$.fragment), a = jt(), l = ha(i), this.h();
    },
    l(o) {
      e = Je(o, "DIV", { class: !0 });
      var c = Qe(e);
      t = Je(c, "DIV", { class: !0, title: !0 });
      var h = Qe(t);
      Rt(r.$$.fragment, h), h.forEach(he), a = Gt(c), l = ua(c, i), c.forEach(he), this.h();
    },
    h() {
      de(t, "class", "icon color-primary svelte-k2wuss"), de(t, "title", "spinner"), de(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, c) {
      ut(o, e, c), We(e, t), qt(r, t, null), We(e, a), We(e, l), s = !0;
    },
    p(o, c) {
      (!s || c[0] & /*button_labels*/
      512) && i !== (i = /*button_labels*/
      (o[9].waiting || "Connecting...") + "") && ca(l, i);
    },
    i(o) {
      s || (_e(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Ae(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && he(e), Ot(r);
    }
  };
}
function lp(n) {
  let e, t, r;
  return t = new wi({}), {
    c() {
      e = $e("div"), Lt(t.$$.fragment), this.h();
    },
    l(a) {
      e = Je(a, "DIV", { class: !0, title: !0 });
      var i = Qe(e);
      Rt(t.$$.fragment, i), i.forEach(he), this.h();
    },
    h() {
      de(e, "class", "icon color-primary svelte-k2wuss"), de(e, "title", "start recording");
    },
    m(a, i) {
      ut(a, e, i), qt(t, e, null), r = !0;
    },
    p: lo,
    i(a) {
      r || (_e(t.$$.fragment, a), r = !0);
    },
    o(a) {
      Ae(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && he(e), Ot(t);
    }
  };
}
function sp(n) {
  let e, t, r, a;
  return t = new $s({
    props: {
      audio_source_callback: (
        /*func*/
        n[43]
      ),
      stream_state: "open",
      icon: wi,
      icon_button_color: (
        /*icon_button_color*/
        n[6]
      ),
      pulse_color: (
        /*pulse_color*/
        n[7]
      )
    }
  }), {
    c() {
      e = $e("div"), Lt(t.$$.fragment), this.h();
    },
    l(i) {
      e = Je(i, "DIV", { class: !0, title: !0, style: !0 });
      var l = Qe(e);
      Rt(t.$$.fragment, l), l.forEach(he), this.h();
    },
    h() {
      de(e, "class", "icon svelte-k2wuss"), de(e, "title", "stop recording"), de(e, "style", r = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`);
    },
    m(i, l) {
      ut(i, e, l), qt(t, e, null), a = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*stream*/
      65536 && (s.audio_source_callback = /*func*/
      i[43]), l[0] & /*icon_button_color*/
      64 && (s.icon_button_color = /*icon_button_color*/
      i[6]), l[0] & /*pulse_color*/
      128 && (s.pulse_color = /*pulse_color*/
      i[7]), t.$set(s), (!a || l[0] & /*icon_button_color*/
      64 && r !== (r = `fill: ${/*icon_button_color*/
      i[6]}; stroke: ${/*icon_button_color*/
      i[6]}; color: ${/*icon_button_color*/
      i[6]};`)) && de(e, "style", r);
    },
    i(i) {
      a || (_e(t.$$.fragment, i), a = !0);
    },
    o(i) {
      Ae(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && he(e), Ot(t);
    }
  };
}
function Cc(n) {
  let e, t, r, a, i;
  return t = new ki({}), {
    c() {
      e = $e("button"), Lt(t.$$.fragment), this.h();
    },
    l(l) {
      e = Je(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = Qe(e);
      Rt(t.$$.fragment, s), s.forEach(he), this.h();
    },
    h() {
      de(e, "class", "icon svelte-k2wuss"), de(e, "aria-label", "select input source");
    },
    m(l, s) {
      ut(l, e, s), qt(t, e, null), r = !0, a || (i = Q0(
        e,
        "click",
        /*click_handler_1*/
        n[44]
      ), a = !0);
    },
    p: lo,
    i(l) {
      r || (_e(t.$$.fragment, l), r = !0);
    },
    o(l) {
      Ae(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && he(e), Ot(t), a = !1, i();
    }
  };
}
function Tc(n) {
  let e, t, r, a, i, l, s, o, c;
  const h = [up, op], m = [];
  function f(p, v) {
    return (
      /*is_muted*/
      p[20] ? 0 : 1
    );
  }
  return r = f(n), a = m[r] = h[r](n), {
    c() {
      e = $e("button"), t = $e("div"), a.c(), this.h();
    },
    l(p) {
      e = Je(p, "BUTTON", { class: !0, "aria-label": !0 });
      var v = Qe(e);
      t = Je(v, "DIV", { class: !0, style: !0 });
      var w = Qe(t);
      a.l(w), w.forEach(he), v.forEach(he), this.h();
    },
    h() {
      de(t, "class", "icon svelte-k2wuss"), de(t, "style", i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), de(e, "class", "mute-button svelte-k2wuss"), de(e, "aria-label", l = /*is_muted*/
      n[20] ? "unmute audio" : "mute audio");
    },
    m(p, v) {
      ut(p, e, v), We(e, t), m[r].m(t, null), s = !0, o || (c = Q0(
        e,
        "click",
        /*toggleMute*/
        n[28]
      ), o = !0);
    },
    p(p, v) {
      let w = r;
      r = f(p), r !== w && (U0(), Ae(m[w], 1, 1, () => {
        m[w] = null;
      }), V0(), a = m[r], a || (a = m[r] = h[r](p), a.c()), _e(a, 1), a.m(t, null)), (!s || v[0] & /*icon_button_color*/
      64 && i !== (i = `fill: ${/*icon_button_color*/
      p[6]}; stroke: ${/*icon_button_color*/
      p[6]}; color: ${/*icon_button_color*/
      p[6]};`)) && de(t, "style", i), (!s || v[0] & /*is_muted*/
      1048576 && l !== (l = /*is_muted*/
      p[20] ? "unmute audio" : "mute audio")) && de(e, "aria-label", l);
    },
    i(p) {
      s || (_e(a), s = !0);
    },
    o(p) {
      Ae(a), s = !1;
    },
    d(p) {
      p && he(e), m[r].d(), o = !1, c();
    }
  };
}
function op(n) {
  let e, t;
  return e = new l2({}), {
    c() {
      Lt(e.$$.fragment);
    },
    l(r) {
      Rt(e.$$.fragment, r);
    },
    m(r, a) {
      qt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ot(e, r);
    }
  };
}
function up(n) {
  let e, t;
  return e = new m2({}), {
    c() {
      Lt(e.$$.fragment);
    },
    l(r) {
      Rt(e.$$.fragment, r);
    },
    m(r, a) {
      qt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ot(e, r);
    }
  };
}
function Mc(n) {
  let e, t, r, a, i, l, s, o, c;
  const h = [hp, cp], m = [];
  function f(p, v) {
    return (
      /*is_mic_muted*/
      p[21] ? 0 : 1
    );
  }
  return r = f(n), a = m[r] = h[r](n), {
    c() {
      e = $e("button"), t = $e("div"), a.c(), this.h();
    },
    l(p) {
      e = Je(p, "BUTTON", { class: !0, "aria-label": !0 });
      var v = Qe(e);
      t = Je(v, "DIV", { class: !0, style: !0 });
      var w = Qe(t);
      a.l(w), w.forEach(he), v.forEach(he), this.h();
    },
    h() {
      de(t, "class", "icon svelte-k2wuss"), de(t, "style", i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), de(e, "class", "mute-button svelte-k2wuss"), de(e, "aria-label", l = /*is_mic_muted*/
      n[21] ? "unmute mic" : "mute mic");
    },
    m(p, v) {
      ut(p, e, v), We(e, t), m[r].m(t, null), s = !0, o || (c = Q0(
        e,
        "click",
        /*toggleMuteMicrophone*/
        n[29]
      ), o = !0);
    },
    p(p, v) {
      let w = r;
      r = f(p), r !== w && (U0(), Ae(m[w], 1, 1, () => {
        m[w] = null;
      }), V0(), a = m[r], a || (a = m[r] = h[r](p), a.c()), _e(a, 1), a.m(t, null)), (!s || v[0] & /*icon_button_color*/
      64 && i !== (i = `fill: ${/*icon_button_color*/
      p[6]}; stroke: ${/*icon_button_color*/
      p[6]}; color: ${/*icon_button_color*/
      p[6]};`)) && de(t, "style", i), (!s || v[0] & /*is_mic_muted*/
      2097152 && l !== (l = /*is_mic_muted*/
      p[21] ? "unmute mic" : "mute mic")) && de(e, "aria-label", l);
    },
    i(p) {
      s || (_e(a), s = !0);
    },
    o(p) {
      Ae(a), s = !1;
    },
    d(p) {
      p && he(e), m[r].d(), o = !1, c();
    }
  };
}
function cp(n) {
  let e, t;
  return e = new ei({}), {
    c() {
      Lt(e.$$.fragment);
    },
    l(r) {
      Rt(e.$$.fragment, r);
    },
    m(r, a) {
      qt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ot(e, r);
    }
  };
}
function hp(n) {
  let e, t;
  return e = new H8({}), {
    c() {
      Lt(e.$$.fragment);
    },
    l(r) {
      Rt(e.$$.fragment, r);
    },
    m(r, a) {
      qt(e, r, a), t = !0;
    },
    i(r) {
      t || (_e(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ae(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ot(e, r);
    }
  };
}
function Bc(n) {
  let e, t, r, a, i, l, s;
  r = new ki({});
  function o(m, f) {
    return (
      /*available_audio_devices*/
      m[17].length === 0 ? dp : fp
    );
  }
  let c = o(n), h = c(n);
  return {
    c() {
      e = $e("select"), t = $e("button"), Lt(r.$$.fragment), a = jt(), h.c(), this.h();
    },
    l(m) {
      e = Je(m, "SELECT", { class: !0, "aria-label": !0 });
      var f = Qe(e);
      t = Je(f, "BUTTON", { class: !0 });
      var p = Qe(t);
      Rt(r.$$.fragment, p), a = Gt(p), p.forEach(he), h.l(f), f.forEach(he), this.h();
    },
    h() {
      de(t, "class", "inset-icon svelte-k2wuss"), de(e, "class", "select-wrap svelte-k2wuss"), de(e, "aria-label", "select source");
    },
    m(m, f) {
      ut(m, e, f), We(e, t), qt(r, t, null), We(t, a), h.m(e, null), i = !0, l || (s = [
        Q0(t, "click", J8(
          /*click_handler_2*/
          n[45]
        )),
        U8(pp.call(
          null,
          e,
          /*handle_click_outside*/
          n[26]
        )),
        Q0(
          e,
          "change",
          /*handle_device_change*/
          n[27]
        )
      ], l = !0);
    },
    p(m, f) {
      c === (c = o(m)) && h ? h.p(m, f) : (h.d(1), h = c(m), h && (h.c(), h.m(e, null)));
    },
    i(m) {
      i || (_e(r.$$.fragment, m), i = !0);
    },
    o(m) {
      Ae(r.$$.fragment, m), i = !1;
    },
    d(m) {
      m && he(e), Ot(r), h.d(), l = !1, Dh(s);
    }
  };
}
function fp(n) {
  let e, t = xc(
    /*available_audio_devices*/
    n[17]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = zc(Fc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Sc();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Sc();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      ut(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_audio_devices, selected_device*/
      393216) {
        t = xc(
          /*available_audio_devices*/
          a[17]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Fc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = zc(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && he(e), X8(r, a);
    }
  };
}
function dp(n) {
  let e, t = (
    /*i18n*/
    n[4]("common.no_devices") + ""
  ), r;
  return {
    c() {
      e = $e("option"), r = ha(t), this.h();
    },
    l(a) {
      e = Je(a, "OPTION", { class: !0 });
      var i = Qe(e);
      r = ua(i, t), i.forEach(he), this.h();
    },
    h() {
      e.__value = "", Es(e, e.__value), de(e, "class", "svelte-k2wuss");
    },
    m(a, i) {
      ut(a, e, i), We(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      16 && t !== (t = /*i18n*/
      a[4]("common.no_devices") + "") && ca(r, t);
    },
    d(a) {
      a && he(e);
    }
  };
}
function zc(n) {
  let e, t = (
    /*device*/
    n[50].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = $e("option"), r = ha(t), a = jt(), this.h();
    },
    l(s) {
      e = Je(s, "OPTION", { class: !0 });
      var o = Qe(e);
      r = ua(o, t), a = Gt(o), o.forEach(he), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[50].deviceId, Es(e, e.__value), e.selected = l = /*selected_device*/
      n[18].deviceId === /*device*/
      n[50].deviceId, de(e, "class", "svelte-k2wuss");
    },
    m(s, o) {
      ut(s, e, o), We(e, r), We(e, a);
    },
    p(s, o) {
      o[0] & /*available_audio_devices*/
      131072 && t !== (t = /*device*/
      s[50].label + "") && ca(r, t), o[0] & /*available_audio_devices*/
      131072 && i !== (i = /*device*/
      s[50].deviceId) && (e.__value = i, Es(e, e.__value)), o[0] & /*selected_device, available_audio_devices*/
      393216 && l !== (l = /*selected_device*/
      s[18].deviceId === /*device*/
      s[50].deviceId) && (e.selected = l);
    },
    d(s) {
      s && he(e);
    }
  };
}
function mp(n) {
  let e, t, r, a, i, l, s, o, c, h;
  e = new Mi({
    props: {
      show_label: (
        /*show_label*/
        n[3]
      ),
      Icon: Ss,
      float: !1,
      label: (
        /*label*/
        n[2] || /*i18n*/
        n[4]("audio.audio")
      )
    }
  });
  const m = [rp, tp], f = [];
  function p(v, w) {
    return (
      /*mic_accessed*/
      v[19] ? 1 : 0
    );
  }
  return l = p(n), s = f[l] = m[l](n), {
    c() {
      Lt(e.$$.fragment), t = jt(), r = $e("div"), a = $e("audio"), i = jt(), s.c(), this.h();
    },
    l(v) {
      Rt(e.$$.fragment, v), t = Gt(v), r = Je(v, "DIV", { class: !0 });
      var w = Qe(r);
      a = Je(w, "AUDIO", { class: !0 }), Qe(a).forEach(he), i = Gt(w), s.l(w), w.forEach(he), this.h();
    },
    h() {
      de(a, "class", "standard-player svelte-k2wuss"), yi(
        a,
        "hidden",
        /*value*/
        n[0] === "__webrtc_value__"
      ), de(r, "class", "audio-container svelte-k2wuss");
    },
    m(v, w) {
      qt(e, v, w), ut(v, t, w), ut(v, r, w), We(r, a), n[39](a), We(r, i), f[l].m(r, null), o = !0, c || (h = [
        Q0(
          a,
          "load",
          /*load_handler*/
          n[38]
        ),
        Q0(
          a,
          "ended",
          /*ended_handler*/
          n[40]
        ),
        Q0(
          a,
          "play",
          /*play_handler*/
          n[41]
        )
      ], c = !0);
    },
    p(v, w) {
      const S = {};
      w[0] & /*show_label*/
      8 && (S.show_label = /*show_label*/
      v[3]), w[0] & /*label, i18n*/
      20 && (S.label = /*label*/
      v[2] || /*i18n*/
      v[4]("audio.audio")), e.$set(S), (!o || w[0] & /*value*/
      1) && yi(
        a,
        "hidden",
        /*value*/
        v[0] === "__webrtc_value__"
      );
      let A = l;
      l = p(v), l === A ? f[l].p(v, w) : (U0(), Ae(f[A], 1, 1, () => {
        f[A] = null;
      }), V0(), s = f[l], s ? s.p(v, w) : (s = f[l] = m[l](v), s.c()), _e(s, 1), s.m(r, null));
    },
    i(v) {
      o || (_e(e.$$.fragment, v), _e(s), o = !0);
    },
    o(v) {
      Ae(e.$$.fragment, v), Ae(s), o = !1;
    },
    d(v) {
      v && (he(t), he(r)), Ot(e, v), n[39](null), f[l].d(), c = !1, Dh(h);
    }
  };
}
function pp(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function gp(n, e, t) {
  var r = this && this.__awaiter || function(j, N, le, Pt) {
    function fa(Er) {
      return Er instanceof le ? Er : new le(function(rr) {
        rr(Er);
      });
    }
    return new (le || (le = Promise))(function(Er, rr) {
      function Sr(v0) {
        try {
          _0(Pt.next(v0));
        } catch (Wr) {
          rr(Wr);
        }
      }
      function nr(v0) {
        try {
          _0(Pt.throw(v0));
        } catch (Wr) {
          rr(Wr);
        }
      }
      function _0(v0) {
        v0.done ? Er(v0.value) : fa(v0.value).then(Sr, nr);
      }
      _0((Pt = Pt.apply(j, N || [])).next());
    });
  };
  let { mode: a } = e, { value: i = null } = e, { label: l = void 0 } = e, { show_label: s = !0 } = e, { rtc_configuration: o = null } = e, { i18n: c } = e, { time_limit: h = null } = e, { track_constraints: m = {} } = e, { rtp_params: f = {} } = e, { on_change_cb: p } = e, { reject_cb: v } = e, { icon: w = void 0 } = e, { icon_button_color: S = "var(--color-accent)" } = e, { pulse_color: A = "var(--color-accent)" } = e, { icon_radius: b = 50 } = e, { button_labels: y } = e, E = !1, C = !1, T;
  ep(() => {
    i === "__webrtc_value__" && t(37, T = new Audio("https://huggingface.co/datasets/freddyaboulton/bucket/resolve/main/pop-sounds.mp3"));
  });
  let z = (j) => {
    j === "stopword" ? (t(10, C = !0), setTimeout(
      () => {
        t(10, C = !1);
      },
      3e3
    )) : j.type === "end_stream" ? (t(14, R = "closed"), It(oe), p(j)) : (console.debug("calling on_change_cb with msg", j), p(j));
  }, I = !1, B = null, { server: L } = e, R = "closed", W, oe, q = null, ue, ie, we = null, me = !1, ke = !1, De = !1;
  const te = () => a === "send" ? ue : W.srcObject, ae = $8();
  function ge() {
    return r(this, void 0, void 0, function* () {
      try {
        const N = we ? Object.assign(
          {
            deviceId: { exact: we.deviceId }
          },
          m
        ) : m, le = yield navigator.mediaDevices.getUserMedia({ audio: N });
        t(16, ue = le);
      } catch (N) {
        if (!navigator.mediaDevices) {
          ae("error", c("audio.no_device_support"));
          return;
        }
        if (N instanceof DOMException && N.name == "NotAllowedError") {
          ae("error", c("audio.allow_recording_access"));
          return;
        }
        throw N;
      }
      t(17, ie = mh(yield dh(), "audioinput")), t(19, me = !0);
      const j = ue.getTracks().map((N) => {
        var le;
        return (le = N.getSettings()) === null || le === void 0 ? void 0 : le.deviceId;
      })[0];
      t(18, we = j && ie.find((N) => N.deviceId === j) || ie[0]);
    });
  }
  function Le() {
    return r(this, void 0, void 0, function* () {
      if (R === "open") {
        It(oe), t(14, R = "closed"), t(13, B = null), yield ge();
        return;
      }
      q = Math.random().toString(36).substring(2), t(0, i = q), t(14, R = "waiting"), yield L.turn().then((le) => {
        if (le.error) {
          ae("error", le.error);
          return;
        }
        t(30, o = le), console.info("rtc_configuration", le);
      }), oe = new RTCPeerConnection(o), console.info("created"), oe.addEventListener("connectionstatechange", (le) => r(this, void 0, void 0, function* () {
        switch (oe.connectionState) {
          case "connected":
            console.info("connected"), t(14, R = "open"), t(13, B = h);
            break;
          case "disconnected":
            console.info("closed"), t(14, R = "closed"), t(13, B = null), It(oe);
            break;
          case "failed":
            console.info("failed"), t(14, R = "closed"), t(13, B = null), ae("error", "Connection failed!"), It(oe);
            break;
        }
      })), t(16, ue = null);
      try {
        yield ge();
      } catch (le) {
        if (!navigator.mediaDevices) {
          ae("error", c("audio.no_device_support"));
          return;
        }
        if (le instanceof DOMException && le.name == "NotAllowedError") {
          ae("error", c("audio.allow_recording_access"));
          return;
        }
        throw le;
      }
      if (ue == null) return;
      const j = (le) => {
        le.type === "log" && le.data === "pause_detected" ? t(11, E = !0) : le.type === "log" && le.data === "response_starting" && t(
          11,
          E = !1
        );
      }, N = setTimeout(
        () => {
          z({ type: "connection_timeout" });
        },
        1e4
      );
      Ii(ue, oe, a === "send" ? null : W, L.offer, q, "audio", z, f, j, v).then((le) => {
        clearTimeout(N), oe = le;
      }).catch(() => {
        console.info("catching"), clearTimeout(N), t(14, R = "closed");
      });
    });
  }
  function H(j) {
    j.preventDefault(), j.stopPropagation(), t(12, I = !1);
  }
  const U = (j) => r(void 0, void 0, void 0, function* () {
    const le = j.target.value;
    t(16, ue = yield navigator.mediaDevices.getUserMedia({
      audio: Object.assign({ deviceId: { exact: le } }, m)
    })), t(18, we = ie.find((Pt) => Pt.deviceId === le) || null), t(12, I = !1);
  });
  function fe() {
    W && (t(15, W.muted = !W.muted, W), t(20, ke = W.muted));
  }
  function ve() {
    if (ue && ue.getAudioTracks().length > 0) {
      const j = ue.getAudioTracks()[0];
      j.enabled = !j.enabled, t(21, De = !j.enabled);
    }
  }
  function Se(j) {
    W8.call(this, n, j);
  }
  function Me(j) {
    j8[j ? "unshift" : "push"](() => {
      W = j, t(15, W);
    });
  }
  const ze = () => ae("stop"), Ye = () => ae("play"), ct = async () => ge(), Xe = () => ue, Ue = () => t(12, I = !0), Ge = () => t(12, I = !1);
  return n.$$set = (j) => {
    "mode" in j && t(1, a = j.mode), "value" in j && t(0, i = j.value), "label" in j && t(2, l = j.label), "show_label" in j && t(3, s = j.show_label), "rtc_configuration" in j && t(30, o = j.rtc_configuration), "i18n" in j && t(4, c = j.i18n), "time_limit" in j && t(31, h = j.time_limit), "track_constraints" in j && t(32, m = j.track_constraints), "rtp_params" in j && t(33, f = j.rtp_params), "on_change_cb" in j && t(34, p = j.on_change_cb), "reject_cb" in j && t(35, v = j.reject_cb), "icon" in j && t(5, w = j.icon), "icon_button_color" in j && t(6, S = j.icon_button_color), "pulse_color" in j && t(7, A = j.pulse_color), "icon_radius" in j && t(8, b = j.icon_radius), "button_labels" in j && t(9, y = j.button_labels), "server" in j && t(36, L = j.server);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*stopword_recognized*/
    1024 | n.$$.dirty[1] & /*notification_sound*/
    64 && C && T.play();
  }, [
    i,
    a,
    l,
    s,
    c,
    w,
    S,
    A,
    b,
    y,
    C,
    E,
    I,
    B,
    R,
    W,
    ue,
    ie,
    we,
    me,
    ke,
    De,
    te,
    ae,
    ge,
    Le,
    H,
    U,
    fe,
    ve,
    o,
    h,
    m,
    f,
    p,
    v,
    L,
    T,
    Se,
    Me,
    ze,
    Ye,
    ct,
    Xe,
    Ue,
    Ge
  ];
}
class _p extends V8 {
  constructor(e) {
    super(), Z8(
      this,
      e,
      gp,
      mp,
      K8,
      {
        mode: 1,
        value: 0,
        label: 2,
        show_label: 3,
        rtc_configuration: 30,
        i18n: 4,
        time_limit: 31,
        track_constraints: 32,
        rtp_params: 33,
        on_change_cb: 34,
        reject_cb: 35,
        icon: 5,
        icon_button_color: 6,
        pulse_color: 7,
        icon_radius: 8,
        button_labels: 9,
        server: 36
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: vp,
  add_flush_callback: qi,
  assign: bp,
  bind: Pi,
  binding_callbacks: Hi,
  check_outros: yp,
  claim_component: Vr,
  claim_space: wp,
  create_component: Ur,
  destroy_component: Gr,
  detach: Ic,
  empty: Nc,
  flush: Te,
  get_spread_object: kp,
  get_spread_update: Dp,
  group_outros: Ap,
  init: Ep,
  insert_hydration: Rc,
  mount_component: jr,
  safe_not_equal: Sp,
  space: xp,
  transition_in: J0,
  transition_out: $0
} = window.__gradio__svelte__internal;
function Fp(n) {
  let e, t, r;
  function a(l) {
    n[47](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[25]
    ),
    label: (
      /*label*/
      n[5]
    ),
    show_label: (
      /*show_label*/
      n[6]
    ),
    server: (
      /*server*/
      n[10]
    ),
    rtc_configuration: (
      /*rtc_configuration*/
      n[15]
    ),
    time_limit: (
      /*time_limit*/
      n[16]
    ),
    track_constraints: (
      /*track_constraints*/
      n[20]
    ),
    mode: (
      /*mode*/
      n[18]
    ),
    rtp_params: (
      /*rtp_params*/
      n[19]
    ),
    i18n: (
      /*gradio*/
      n[14].i18n
    ),
    icon: (
      /*icon*/
      n[21]
    ),
    reject_cb: (
      /*reject_cb*/
      n[26]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[22]
    ),
    icon_radius: (
      /*icon_radius*/
      n[24]
    ),
    pulse_color: (
      /*pulse_color*/
      n[23]
    ),
    button_labels: (
      /*button_labels*/
      n[4]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (i.value = /*value*/
    n[0]), e = new _p({ props: i }), Hi.push(() => Pi(e, "value", a)), e.$on(
      "tick",
      /*tick_handler_3*/
      n[48]
    ), e.$on(
      "error",
      /*error_handler_3*/
      n[49]
    ), e.$on(
      "warning",
      /*warning_handler*/
      n[50]
    ), {
      c() {
        Ur(e.$$.fragment);
      },
      l(l) {
        Vr(e.$$.fragment, l);
      },
      m(l, s) {
        jr(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        32 && (o.label = /*label*/
        l[5]), s[0] & /*show_label*/
        64 && (o.show_label = /*show_label*/
        l[6]), s[0] & /*server*/
        1024 && (o.server = /*server*/
        l[10]), s[0] & /*rtc_configuration*/
        32768 && (o.rtc_configuration = /*rtc_configuration*/
        l[15]), s[0] & /*time_limit*/
        65536 && (o.time_limit = /*time_limit*/
        l[16]), s[0] & /*track_constraints*/
        1048576 && (o.track_constraints = /*track_constraints*/
        l[20]), s[0] & /*mode*/
        262144 && (o.mode = /*mode*/
        l[18]), s[0] & /*rtp_params*/
        524288 && (o.rtp_params = /*rtp_params*/
        l[19]), s[0] & /*gradio*/
        16384 && (o.i18n = /*gradio*/
        l[14].i18n), s[0] & /*icon*/
        2097152 && (o.icon = /*icon*/
        l[21]), s[0] & /*icon_button_color*/
        4194304 && (o.icon_button_color = /*icon_button_color*/
        l[22]), s[0] & /*icon_radius*/
        16777216 && (o.icon_radius = /*icon_radius*/
        l[24]), s[0] & /*pulse_color*/
        8388608 && (o.pulse_color = /*pulse_color*/
        l[23]), s[0] & /*button_labels*/
        16 && (o.button_labels = /*button_labels*/
        l[4]), !t && s[0] & /*value*/
        1 && (t = !0, o.value = /*value*/
        l[0], qi(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (J0(e.$$.fragment, l), r = !0);
      },
      o(l) {
        $0(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Gr(e, l);
      }
    }
  );
}
function Cp(n) {
  let e, t, r;
  function a(l) {
    n[36](l);
  }
  let i = {
    label: (
      /*label*/
      n[5]
    ),
    show_label: (
      /*show_label*/
      n[6]
    ),
    active_source: "webcam",
    include_audio: (
      /*modality*/
      n[17] === "audio-video"
    ),
    server: (
      /*server*/
      n[10]
    ),
    rtc_configuration: (
      /*rtc_configuration*/
      n[15]
    ),
    time_limit: (
      /*time_limit*/
      n[16]
    ),
    mode: (
      /*mode*/
      n[18]
    ),
    track_constraints: (
      /*track_constraints*/
      n[20]
    ),
    rtp_params: (
      /*rtp_params*/
      n[19]
    ),
    on_change_cb: (
      /*on_change_cb*/
      n[25]
    ),
    reject_cb: (
      /*reject_cb*/
      n[26]
    ),
    icon: (
      /*icon*/
      n[21]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[22]
    ),
    pulse_color: (
      /*pulse_color*/
      n[23]
    ),
    icon_radius: (
      /*icon_radius*/
      n[24]
    ),
    button_labels: (
      /*button_labels*/
      n[4]
    ),
    i18n: (
      /*gradio*/
      n[14].i18n
    ),
    stream_handler: (
      /*func*/
      n[35]
    ),
    $$slots: { default: [Bp] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (i.value = /*value*/
    n[0]), e = new q7({ props: i }), Hi.push(() => Pi(e, "value", a)), e.$on(
      "clear",
      /*clear_handler*/
      n[37]
    ), e.$on(
      "play",
      /*play_handler*/
      n[38]
    ), e.$on(
      "pause",
      /*pause_handler*/
      n[39]
    ), e.$on(
      "upload",
      /*upload_handler*/
      n[40]
    ), e.$on(
      "stop",
      /*stop_handler*/
      n[41]
    ), e.$on(
      "end",
      /*end_handler*/
      n[42]
    ), e.$on(
      "start_recording",
      /*start_recording_handler*/
      n[43]
    ), e.$on(
      "stop_recording",
      /*stop_recording_handler*/
      n[44]
    ), e.$on(
      "tick",
      /*tick_handler_2*/
      n[45]
    ), e.$on(
      "error",
      /*error_handler_2*/
      n[46]
    ), {
      c() {
        Ur(e.$$.fragment);
      },
      l(l) {
        Vr(e.$$.fragment, l);
      },
      m(l, s) {
        jr(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        32 && (o.label = /*label*/
        l[5]), s[0] & /*show_label*/
        64 && (o.show_label = /*show_label*/
        l[6]), s[0] & /*modality*/
        131072 && (o.include_audio = /*modality*/
        l[17] === "audio-video"), s[0] & /*server*/
        1024 && (o.server = /*server*/
        l[10]), s[0] & /*rtc_configuration*/
        32768 && (o.rtc_configuration = /*rtc_configuration*/
        l[15]), s[0] & /*time_limit*/
        65536 && (o.time_limit = /*time_limit*/
        l[16]), s[0] & /*mode*/
        262144 && (o.mode = /*mode*/
        l[18]), s[0] & /*track_constraints*/
        1048576 && (o.track_constraints = /*track_constraints*/
        l[20]), s[0] & /*rtp_params*/
        524288 && (o.rtp_params = /*rtp_params*/
        l[19]), s[0] & /*icon*/
        2097152 && (o.icon = /*icon*/
        l[21]), s[0] & /*icon_button_color*/
        4194304 && (o.icon_button_color = /*icon_button_color*/
        l[22]), s[0] & /*pulse_color*/
        8388608 && (o.pulse_color = /*pulse_color*/
        l[23]), s[0] & /*icon_radius*/
        16777216 && (o.icon_radius = /*icon_radius*/
        l[24]), s[0] & /*button_labels*/
        16 && (o.button_labels = /*button_labels*/
        l[4]), s[0] & /*gradio*/
        16384 && (o.i18n = /*gradio*/
        l[14].i18n), s[0] & /*gradio*/
        16384 && (o.stream_handler = /*func*/
        l[35]), s[0] & /*gradio*/
        16384 | s[1] & /*$$scope*/
        1048576 && (o.$$scope = { dirty: s, ctx: l }), !t && s[0] & /*value*/
        1 && (t = !0, o.value = /*value*/
        l[0], qi(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (J0(e.$$.fragment, l), r = !0);
      },
      o(l) {
        $0(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Gr(e, l);
      }
    }
  );
}
function Tp(n) {
  let e, t, r;
  function a(l) {
    n[32](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[25]
    ),
    label: (
      /*label*/
      n[5]
    ),
    show_label: (
      /*show_label*/
      n[6]
    ),
    server: (
      /*server*/
      n[10]
    ),
    rtc_configuration: (
      /*rtc_configuration*/
      n[15]
    ),
    icon: (
      /*icon*/
      n[21]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[22]
    ),
    pulse_color: (
      /*pulse_color*/
      n[23]
    ),
    icon_radius: (
      /*icon_radius*/
      n[24]
    ),
    i18n: (
      /*gradio*/
      n[14].i18n
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (i.value = /*value*/
    n[0]), e = new N8({ props: i }), Hi.push(() => Pi(e, "value", a)), e.$on(
      "tick",
      /*tick_handler_1*/
      n[33]
    ), e.$on(
      "error",
      /*error_handler_1*/
      n[34]
    ), {
      c() {
        Ur(e.$$.fragment);
      },
      l(l) {
        Vr(e.$$.fragment, l);
      },
      m(l, s) {
        jr(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        32 && (o.label = /*label*/
        l[5]), s[0] & /*show_label*/
        64 && (o.show_label = /*show_label*/
        l[6]), s[0] & /*server*/
        1024 && (o.server = /*server*/
        l[10]), s[0] & /*rtc_configuration*/
        32768 && (o.rtc_configuration = /*rtc_configuration*/
        l[15]), s[0] & /*icon*/
        2097152 && (o.icon = /*icon*/
        l[21]), s[0] & /*icon_button_color*/
        4194304 && (o.icon_button_color = /*icon_button_color*/
        l[22]), s[0] & /*pulse_color*/
        8388608 && (o.pulse_color = /*pulse_color*/
        l[23]), s[0] & /*icon_radius*/
        16777216 && (o.icon_radius = /*icon_radius*/
        l[24]), s[0] & /*gradio*/
        16384 && (o.i18n = /*gradio*/
        l[14].i18n), !t && s[0] & /*value*/
        1 && (t = !0, o.value = /*value*/
        l[0], qi(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (J0(e.$$.fragment, l), r = !0);
      },
      o(l) {
        $0(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Gr(e, l);
      }
    }
  );
}
function Mp(n) {
  let e, t, r;
  function a(l) {
    n[29](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[25]
    ),
    label: (
      /*label*/
      n[5]
    ),
    show_label: (
      /*show_label*/
      n[6]
    ),
    server: (
      /*server*/
      n[10]
    ),
    rtc_configuration: (
      /*rtc_configuration*/
      n[15]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (i.value = /*value*/
    n[0]), e = new s8({ props: i }), Hi.push(() => Pi(e, "value", a)), e.$on(
      "tick",
      /*tick_handler*/
      n[30]
    ), e.$on(
      "error",
      /*error_handler*/
      n[31]
    ), {
      c() {
        Ur(e.$$.fragment);
      },
      l(l) {
        Vr(e.$$.fragment, l);
      },
      m(l, s) {
        jr(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        32 && (o.label = /*label*/
        l[5]), s[0] & /*show_label*/
        64 && (o.show_label = /*show_label*/
        l[6]), s[0] & /*server*/
        1024 && (o.server = /*server*/
        l[10]), s[0] & /*rtc_configuration*/
        32768 && (o.rtc_configuration = /*rtc_configuration*/
        l[15]), !t && s[0] & /*value*/
        1 && (t = !0, o.value = /*value*/
        l[0], qi(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (J0(e.$$.fragment, l), r = !0);
      },
      o(l) {
        $0(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Gr(e, l);
      }
    }
  );
}
function Bp(n) {
  let e, t;
  return e = new b6({
    props: {
      i18n: (
        /*gradio*/
        n[14].i18n
      ),
      type: "video"
    }
  }), {
    c() {
      Ur(e.$$.fragment);
    },
    l(r) {
      Vr(e.$$.fragment, r);
    },
    m(r, a) {
      jr(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*gradio*/
      16384 && (i.i18n = /*gradio*/
      r[14].i18n), e.$set(i);
    },
    i(r) {
      t || (J0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      $0(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Gr(e, r);
    }
  };
}
function zp(n) {
  let e, t, r, a, i, l;
  const s = [
    {
      autoscroll: (
        /*gradio*/
        n[14].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      n[14].i18n
    ) },
    /*loading_status*/
    n[7]
  ];
  let o = {};
  for (let f = 0; f < s.length; f += 1)
    o = bp(o, s[f]);
  e = new R5({ props: o }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[28]
  );
  const c = [Mp, Tp, Cp, Fp], h = [];
  function m(f, p) {
    return (
      /*mode*/
      f[18] == "receive" && /*modality*/
      f[17] === "video" ? 0 : (
        /*mode*/
        f[18] == "receive" && /*modality*/
        f[17] === "audio" ? 1 : (
          /*mode*/
          (f[18] === "send-receive" || /*mode*/
          f[18] == "send") && /*modality*/
          (f[17] === "video" || /*modality*/
          f[17] == "audio-video") ? 2 : (
            /*mode*/
            (f[18] === "send-receive" || /*mode*/
            f[18] === "send") && /*modality*/
            f[17] === "audio" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(r = m(n)) && (a = h[r] = c[r](n)), {
    c() {
      Ur(e.$$.fragment), t = xp(), a && a.c(), i = Nc();
    },
    l(f) {
      Vr(e.$$.fragment, f), t = wp(f), a && a.l(f), i = Nc();
    },
    m(f, p) {
      jr(e, f, p), Rc(f, t, p), ~r && h[r].m(f, p), Rc(f, i, p), l = !0;
    },
    p(f, p) {
      const v = p[0] & /*gradio, loading_status*/
      16512 ? Dp(s, [
        p[0] & /*gradio*/
        16384 && {
          autoscroll: (
            /*gradio*/
            f[14].autoscroll
          )
        },
        p[0] & /*gradio*/
        16384 && { i18n: (
          /*gradio*/
          f[14].i18n
        ) },
        p[0] & /*loading_status*/
        128 && kp(
          /*loading_status*/
          f[7]
        )
      ]) : {};
      e.$set(v);
      let w = r;
      r = m(f), r === w ? ~r && h[r].p(f, p) : (a && (Ap(), $0(h[w], 1, 1, () => {
        h[w] = null;
      }), yp()), ~r ? (a = h[r], a ? a.p(f, p) : (a = h[r] = c[r](f), a.c()), J0(a, 1), a.m(i.parentNode, i)) : a = null);
    },
    i(f) {
      l || (J0(e.$$.fragment, f), J0(a), l = !0);
    },
    o(f) {
      $0(e.$$.fragment, f), $0(a), l = !1;
    },
    d(f) {
      f && (Ic(t), Ic(i)), Gr(e, f), ~r && h[r].d(f);
    }
  };
}
function Ip(n) {
  let e, t;
  return e = new Kh({
    props: {
      visible: (
        /*visible*/
        n[3]
      ),
      variant: "solid",
      border_mode: "base",
      padding: !1,
      elem_id: (
        /*elem_id*/
        n[1]
      ),
      elem_classes: (
        /*elem_classes*/
        n[2]
      ),
      height: (
        /*height*/
        n[8]
      ),
      width: (
        /*width*/
        n[9]
      ),
      container: (
        /*container*/
        n[11]
      ),
      scale: (
        /*scale*/
        n[12]
      ),
      min_width: (
        /*min_width*/
        n[13]
      ),
      allow_overflow: !1,
      $$slots: { default: [zp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ur(e.$$.fragment);
    },
    l(r) {
      Vr(e.$$.fragment, r);
    },
    m(r, a) {
      jr(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*visible*/
      8 && (i.visible = /*visible*/
      r[3]), a[0] & /*elem_id*/
      2 && (i.elem_id = /*elem_id*/
      r[1]), a[0] & /*elem_classes*/
      4 && (i.elem_classes = /*elem_classes*/
      r[2]), a[0] & /*height*/
      256 && (i.height = /*height*/
      r[8]), a[0] & /*width*/
      512 && (i.width = /*width*/
      r[9]), a[0] & /*container*/
      2048 && (i.container = /*container*/
      r[11]), a[0] & /*scale*/
      4096 && (i.scale = /*scale*/
      r[12]), a[0] & /*min_width*/
      8192 && (i.min_width = /*min_width*/
      r[13]), a[0] & /*label, show_label, server, rtc_configuration, value, gradio, mode, modality, icon, icon_button_color, pulse_color, icon_radius, time_limit, track_constraints, rtp_params, button_labels, loading_status*/
      33539313 | a[1] & /*$$scope*/
      1048576 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (J0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      $0(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Gr(e, r);
    }
  };
}
function Np(n, e, t) {
  let { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { visible: i = !0 } = e, { value: l = "__webrtc_value__" } = e, { button_labels: s } = e, { label: o } = e, { root: c } = e, { show_label: h } = e, { loading_status: m } = e, { height: f } = e, { width: p } = e, { server: v } = e, { container: w = !1 } = e, { scale: S = null } = e, { min_width: A = void 0 } = e, { gradio: b } = e, { rtc_configuration: y } = e, { time_limit: E = null } = e, { modality: C = "video" } = e, { mode: T = "send-receive" } = e, { rtp_params: z = {} } = e, { track_constraints: I = {} } = e, { icon: B = void 0 } = e, { icon_button_color: L = "var(--color-accent)" } = e, { pulse_color: R = "var(--color-accent)" } = e, { icon_radius: W = 50 } = e;
  const oe = (N) => {
    (N == null ? void 0 : N.type) === "info" || (N == null ? void 0 : N.type) === "warning" || (N == null ? void 0 : N.type) === "error" ? b.dispatch(
      (N == null ? void 0 : N.type) === "error" ? "error" : "warning",
      (N == null ? void 0 : N.data) || (N == null ? void 0 : N.message)
    ) : (N == null ? void 0 : N.type) === "end_stream" ? b.dispatch("warning", N.data) : (N == null ? void 0 : N.type) === "fetch_output" ? b.dispatch("state_change") : (N == null ? void 0 : N.type) === "send_input" ? b.dispatch("tick") : (N == null ? void 0 : N.type) === "connection_timeout" && b.dispatch("warning", "Taking a while to connect. Are you on a VPN?"), N.type === "state_change" && b.dispatch(N === "change" ? "state_change" : "tick");
  }, q = (N) => {
    var le, Pt;
    N.status === "failed" && ((le = N.meta) === null || le === void 0 ? void 0 : le.error) === "concurrency_limit_reached" ? b.dispatch("error", "Too many concurrent connections. Please try again later!") : N.status === "failed" && ((Pt = N.meta) === null || Pt === void 0 ? void 0 : Pt.error) === "connection_already_exists" ? b.dispatch("error", "Connection already exists") : b.dispatch("error", "Unexpected server error");
  }, ue = () => b.dispatch("clear_status", m);
  function ie(N) {
    l = N, t(0, l);
  }
  const we = () => b.dispatch("tick"), me = ({ detail: N }) => b.dispatch("error", N);
  function ke(N) {
    l = N, t(0, l);
  }
  const De = () => b.dispatch("tick"), te = ({ detail: N }) => b.dispatch("error", N), ae = (...N) => b.client.stream(...N);
  function ge(N) {
    l = N, t(0, l);
  }
  const Le = () => b.dispatch("clear"), H = () => b.dispatch("play"), U = () => b.dispatch("pause"), fe = () => b.dispatch("upload"), ve = () => b.dispatch("stop"), Se = () => b.dispatch("end"), Me = () => b.dispatch("start_recording"), ze = () => b.dispatch("stop_recording"), Ye = () => b.dispatch("tick"), ct = ({ detail: N }) => b.dispatch("error", N);
  function Xe(N) {
    l = N, t(0, l);
  }
  const Ue = () => b.dispatch("tick"), Ge = ({ detail: N }) => b.dispatch("error", N), j = ({ detail: N }) => b.dispatch("warning", N);
  return n.$$set = (N) => {
    "elem_id" in N && t(1, r = N.elem_id), "elem_classes" in N && t(2, a = N.elem_classes), "visible" in N && t(3, i = N.visible), "value" in N && t(0, l = N.value), "button_labels" in N && t(4, s = N.button_labels), "label" in N && t(5, o = N.label), "root" in N && t(27, c = N.root), "show_label" in N && t(6, h = N.show_label), "loading_status" in N && t(7, m = N.loading_status), "height" in N && t(8, f = N.height), "width" in N && t(9, p = N.width), "server" in N && t(10, v = N.server), "container" in N && t(11, w = N.container), "scale" in N && t(12, S = N.scale), "min_width" in N && t(13, A = N.min_width), "gradio" in N && t(14, b = N.gradio), "rtc_configuration" in N && t(15, y = N.rtc_configuration), "time_limit" in N && t(16, E = N.time_limit), "modality" in N && t(17, C = N.modality), "mode" in N && t(18, T = N.mode), "rtp_params" in N && t(19, z = N.rtp_params), "track_constraints" in N && t(20, I = N.track_constraints), "icon" in N && t(21, B = N.icon), "icon_button_color" in N && t(22, L = N.icon_button_color), "pulse_color" in N && t(23, R = N.pulse_color), "icon_radius" in N && t(24, W = N.icon_radius);
  }, [
    l,
    r,
    a,
    i,
    s,
    o,
    h,
    m,
    f,
    p,
    v,
    w,
    S,
    A,
    b,
    y,
    E,
    C,
    T,
    z,
    I,
    B,
    L,
    R,
    W,
    oe,
    q,
    c,
    ue,
    ie,
    we,
    me,
    ke,
    De,
    te,
    ae,
    ge,
    Le,
    H,
    U,
    fe,
    ve,
    Se,
    Me,
    ze,
    Ye,
    ct,
    Xe,
    Ue,
    Ge,
    j
  ];
}
class jp extends vp {
  constructor(e) {
    super(), Ep(
      this,
      e,
      Np,
      Ip,
      Sp,
      {
        elem_id: 1,
        elem_classes: 2,
        visible: 3,
        value: 0,
        button_labels: 4,
        label: 5,
        root: 27,
        show_label: 6,
        loading_status: 7,
        height: 8,
        width: 9,
        server: 10,
        container: 11,
        scale: 12,
        min_width: 13,
        gradio: 14,
        rtc_configuration: 15,
        time_limit: 16,
        modality: 17,
        mode: 18,
        rtp_params: 19,
        track_constraints: 20,
        icon: 21,
        icon_button_color: 22,
        pulse_color: 23,
        icon_radius: 24
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Te();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Te();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(e) {
    this.$$set({ visible: e }), Te();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Te();
  }
  get button_labels() {
    return this.$$.ctx[4];
  }
  set button_labels(e) {
    this.$$set({ button_labels: e }), Te();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Te();
  }
  get root() {
    return this.$$.ctx[27];
  }
  set root(e) {
    this.$$set({ root: e }), Te();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Te();
  }
  get loading_status() {
    return this.$$.ctx[7];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Te();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Te();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Te();
  }
  get server() {
    return this.$$.ctx[10];
  }
  set server(e) {
    this.$$set({ server: e }), Te();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Te();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Te();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Te();
  }
  get gradio() {
    return this.$$.ctx[14];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Te();
  }
  get rtc_configuration() {
    return this.$$.ctx[15];
  }
  set rtc_configuration(e) {
    this.$$set({ rtc_configuration: e }), Te();
  }
  get time_limit() {
    return this.$$.ctx[16];
  }
  set time_limit(e) {
    this.$$set({ time_limit: e }), Te();
  }
  get modality() {
    return this.$$.ctx[17];
  }
  set modality(e) {
    this.$$set({ modality: e }), Te();
  }
  get mode() {
    return this.$$.ctx[18];
  }
  set mode(e) {
    this.$$set({ mode: e }), Te();
  }
  get rtp_params() {
    return this.$$.ctx[19];
  }
  set rtp_params(e) {
    this.$$set({ rtp_params: e }), Te();
  }
  get track_constraints() {
    return this.$$.ctx[20];
  }
  set track_constraints(e) {
    this.$$set({ track_constraints: e }), Te();
  }
  get icon() {
    return this.$$.ctx[21];
  }
  set icon(e) {
    this.$$set({ icon: e }), Te();
  }
  get icon_button_color() {
    return this.$$.ctx[22];
  }
  set icon_button_color(e) {
    this.$$set({ icon_button_color: e }), Te();
  }
  get pulse_color() {
    return this.$$.ctx[23];
  }
  set pulse_color(e) {
    this.$$set({ pulse_color: e }), Te();
  }
  get icon_radius() {
    return this.$$.ctx[24];
  }
  set icon_radius(e) {
    this.$$set({ icon_radius: e }), Te();
  }
}
export {
  Gp as BaseExample,
  q7 as BaseInteractiveVideo,
  jp as default,
  Pp as loaded,
  qp as playable,
  Op as prettyBytes
>>>>>>> main
};
