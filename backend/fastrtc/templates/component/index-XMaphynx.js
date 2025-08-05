var xm = Object.defineProperty;
var b1 = (n) => {
  throw TypeError(n);
};
var Tm = (n, e, t) => e in n ? xm(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var je = (n, e, t) => Tm(n, typeof e != "symbol" ? e + "" : e, t), Fm = (n, e, t) => e.has(n) || b1("Cannot " + t);
var w1 = (n, e, t) => e.has(n) ? b1("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var Ai = (n, e, t) => (Fm(n, e, "access private method"), t);
const {
  SvelteComponent: Cm,
  assign: Mm,
  children: zm,
  claim_element: Bm,
  create_slot: Im,
  detach: y1,
  element: Lm,
  get_all_dirty_from_scope: Nm,
  get_slot_changes: Rm,
  get_spread_update: Om,
  init: qm,
  insert_hydration: Pm,
  safe_not_equal: Hm,
  set_dynamic_element_data: k1,
  set_style: It,
  toggle_class: y0,
  transition_in: cd,
  transition_out: fd,
  update_slot_base: Um
} = window.__gradio__svelte__internal;
function Gm(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[22].default
  ), i = Im(
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
    s = Mm(s, l[o]);
  return {
    c() {
      e = Lm(
        /*tag*/
        n[18]
      ), i && i.c(), this.h();
    },
    l(o) {
      e = Bm(
        o,
        /*tag*/
        (n[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var u = zm(e);
      i && i.l(u), u.forEach(y1), this.h();
    },
    h() {
      k1(
        /*tag*/
        n[18]
      )(e, s), y0(
        e,
        "hidden",
        /*visible*/
        n[13] === !1
      ), y0(
        e,
        "padded",
        /*padding*/
        n[9]
      ), y0(
        e,
        "flex",
        /*flex*/
        n[0]
      ), y0(
        e,
        "border_focus",
        /*border_mode*/
        n[8] === "focus"
      ), y0(
        e,
        "border_contrast",
        /*border_mode*/
        n[8] === "contrast"
      ), y0(e, "hide-container", !/*explicit_call*/
      n[11] && !/*container*/
      n[12]), It(
        e,
        "height",
        /*get_dimension*/
        n[19](
          /*height*/
          n[1]
        )
      ), It(
        e,
        "min-height",
        /*get_dimension*/
        n[19](
          /*min_height*/
          n[2]
        )
      ), It(
        e,
        "max-height",
        /*get_dimension*/
        n[19](
          /*max_height*/
          n[3]
        )
      ), It(e, "width", typeof /*width*/
      n[4] == "number" ? `calc(min(${/*width*/
      n[4]}px, 100%))` : (
        /*get_dimension*/
        n[19](
          /*width*/
          n[4]
        )
      )), It(
        e,
        "border-style",
        /*variant*/
        n[7]
      ), It(
        e,
        "overflow",
        /*allow_overflow*/
        n[14] ? (
          /*overflow_behavior*/
          n[15]
        ) : "hidden"
      ), It(
        e,
        "flex-grow",
        /*scale*/
        n[16]
      ), It(e, "min-width", `calc(min(${/*min_width*/
      n[17]}px, 100%))`), It(e, "border-width", "var(--block-border-width)");
    },
    m(o, u) {
      Pm(o, e, u), i && i.m(e, null), r = !0;
    },
    p(o, u) {
      i && i.p && (!r || u & /*$$scope*/
      2097152) && Um(
        i,
        a,
        o,
        /*$$scope*/
        o[21],
        r ? Rm(
          a,
          /*$$scope*/
          o[21],
          u,
          null
        ) : Nm(
          /*$$scope*/
          o[21]
        ),
        null
      ), k1(
        /*tag*/
        o[18]
      )(e, s = Om(l, [
        (!r || u & /*test_id*/
        1024) && { "data-testid": (
          /*test_id*/
          o[10]
        ) },
        (!r || u & /*elem_id*/
        32) && { id: (
          /*elem_id*/
          o[5]
        ) },
        (!r || u & /*elem_classes*/
        64 && t !== (t = "block " + /*elem_classes*/
        o[6].join(" ") + " svelte-1ezsyiy")) && { class: t }
      ])), y0(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), y0(
        e,
        "padded",
        /*padding*/
        o[9]
      ), y0(
        e,
        "flex",
        /*flex*/
        o[0]
      ), y0(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), y0(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), y0(e, "hide-container", !/*explicit_call*/
      o[11] && !/*container*/
      o[12]), u & /*height*/
      2 && It(
        e,
        "height",
        /*get_dimension*/
        o[19](
          /*height*/
          o[1]
        )
      ), u & /*min_height*/
      4 && It(
        e,
        "min-height",
        /*get_dimension*/
        o[19](
          /*min_height*/
          o[2]
        )
      ), u & /*max_height*/
      8 && It(
        e,
        "max-height",
        /*get_dimension*/
        o[19](
          /*max_height*/
          o[3]
        )
      ), u & /*width*/
      16 && It(e, "width", typeof /*width*/
      o[4] == "number" ? `calc(min(${/*width*/
      o[4]}px, 100%))` : (
        /*get_dimension*/
        o[19](
          /*width*/
          o[4]
        )
      )), u & /*variant*/
      128 && It(
        e,
        "border-style",
        /*variant*/
        o[7]
      ), u & /*allow_overflow, overflow_behavior*/
      49152 && It(
        e,
        "overflow",
        /*allow_overflow*/
        o[14] ? (
          /*overflow_behavior*/
          o[15]
        ) : "hidden"
      ), u & /*scale*/
      65536 && It(
        e,
        "flex-grow",
        /*scale*/
        o[16]
      ), u & /*min_width*/
      131072 && It(e, "min-width", `calc(min(${/*min_width*/
      o[17]}px, 100%))`);
    },
    i(o) {
      r || (cd(i, o), r = !0);
    },
    o(o) {
      fd(i, o), r = !1;
    },
    d(o) {
      o && y1(e), i && i.d(o);
    }
  };
}
function Vm(n) {
  let e, t = (
    /*tag*/
    n[18] && Gm(n)
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
      e || (cd(t, r), e = !0);
    },
    o(r) {
      fd(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function jm(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: u = "" } = e, { elem_classes: c = [] } = e, { variant: d = "solid" } = e, { border_mode: f = "base" } = e, { padding: p = !0 } = e, { type: g = "normal" } = e, { test_id: b = void 0 } = e, { explicit_call: A = !1 } = e, { container: w = !0 } = e, { visible: k = !0 } = e, { allow_overflow: y = !0 } = e, { overflow_behavior: D = "auto" } = e, { scale: E = null } = e, { min_width: T = 0 } = e, { flex: F = !1 } = e;
  k || (F = !1);
  let C = g === "fieldset" ? "fieldset" : "div";
  const B = (L) => {
    if (L !== void 0) {
      if (typeof L == "number")
        return L + "px";
      if (typeof L == "string")
        return L;
    }
  };
  return n.$$set = (L) => {
    "height" in L && t(1, i = L.height), "min_height" in L && t(2, l = L.min_height), "max_height" in L && t(3, s = L.max_height), "width" in L && t(4, o = L.width), "elem_id" in L && t(5, u = L.elem_id), "elem_classes" in L && t(6, c = L.elem_classes), "variant" in L && t(7, d = L.variant), "border_mode" in L && t(8, f = L.border_mode), "padding" in L && t(9, p = L.padding), "type" in L && t(20, g = L.type), "test_id" in L && t(10, b = L.test_id), "explicit_call" in L && t(11, A = L.explicit_call), "container" in L && t(12, w = L.container), "visible" in L && t(13, k = L.visible), "allow_overflow" in L && t(14, y = L.allow_overflow), "overflow_behavior" in L && t(15, D = L.overflow_behavior), "scale" in L && t(16, E = L.scale), "min_width" in L && t(17, T = L.min_width), "flex" in L && t(0, F = L.flex), "$$scope" in L && t(21, a = L.$$scope);
  }, [
    F,
    i,
    l,
    s,
    o,
    u,
    c,
    d,
    f,
    p,
    b,
    A,
    w,
    k,
    y,
    D,
    E,
    T,
    C,
    B,
    g,
    a,
    r
  ];
}
class hd extends Cm {
  constructor(e) {
    super(), qm(this, e, jm, Vm, Hm, {
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
const Wm = [
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
], D1 = {
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
Wm.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: D1[e][t],
      secondary: D1[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: Xm,
  append_hydration: Ym,
  attr: P0,
  children: A1,
  claim_svg_element: E1,
  detach: ws,
  init: Zm,
  insert_hydration: Km,
  noop: ys,
  safe_not_equal: Jm,
  svg_element: S1
} = window.__gradio__svelte__internal;
function Qm(n) {
  let e, t;
  return {
    c() {
      e = S1("svg"), t = S1("circle"), this.h();
    },
    l(r) {
      e = E1(r, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var a = A1(e);
      t = E1(a, "circle", { cx: !0, cy: !0, r: !0 }), A1(t).forEach(ws), a.forEach(ws), this.h();
    },
    h() {
      P0(t, "cx", "12"), P0(t, "cy", "12"), P0(t, "r", "10"), P0(e, "xmlns", "http://www.w3.org/2000/svg"), P0(e, "width", "100%"), P0(e, "height", "100%"), P0(e, "viewBox", "0 0 24 24"), P0(e, "stroke-width", "1.5"), P0(e, "stroke-linecap", "round"), P0(e, "stroke-linejoin", "round"), P0(e, "class", "feather feather-circle");
    },
    m(r, a) {
      Km(r, e, a), Ym(e, t);
    },
    p: ys,
    i: ys,
    o: ys,
    d(r) {
      r && ws(e);
    }
  };
}
class Kl extends Xm {
  constructor(e) {
    super(), Zm(this, e, null, Qm, Jm, {});
  }
}
const {
  SvelteComponent: $m,
  append_hydration: ks,
  attr: H0,
  children: Ei,
  claim_svg_element: Si,
  detach: va,
  init: e2,
  insert_hydration: t2,
  noop: Ds,
  safe_not_equal: r2,
  set_style: tr,
  svg_element: xi
} = window.__gradio__svelte__internal;
function n2(n) {
  let e, t, r, a;
  return {
    c() {
      e = xi("svg"), t = xi("g"), r = xi("path"), a = xi("path"), this.h();
    },
    l(i) {
      e = Si(i, "svg", {
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
      var l = Ei(e);
      t = Si(l, "g", { transform: !0 });
      var s = Ei(t);
      r = Si(s, "path", { d: !0, style: !0 }), Ei(r).forEach(va), s.forEach(va), a = Si(l, "path", { d: !0, style: !0 }), Ei(a).forEach(va), l.forEach(va), this.h();
    },
    h() {
      H0(r, "d", "M18,6L6.087,17.913"), tr(r, "fill", "none"), tr(r, "fill-rule", "nonzero"), tr(r, "stroke-width", "2px"), H0(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), H0(a, "d", "M4.364,4.364L19.636,19.636"), tr(a, "fill", "none"), tr(a, "fill-rule", "nonzero"), tr(a, "stroke-width", "2px"), H0(e, "width", "100%"), H0(e, "height", "100%"), H0(e, "viewBox", "0 0 24 24"), H0(e, "version", "1.1"), H0(e, "xmlns", "http://www.w3.org/2000/svg"), H0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), H0(e, "xml:space", "preserve"), H0(e, "stroke", "currentColor"), tr(e, "fill-rule", "evenodd"), tr(e, "clip-rule", "evenodd"), tr(e, "stroke-linecap", "round"), tr(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      t2(i, e, l), ks(e, t), ks(t, r), ks(e, a);
    },
    p: Ds,
    i: Ds,
    o: Ds,
    d(i) {
      i && va(e);
    }
  };
}
class a2 extends $m {
  constructor(e) {
    super(), e2(this, e, null, n2, r2, {});
  }
}
const {
  SvelteComponent: i2,
  append_hydration: l2,
  attr: Gn,
  children: x1,
  claim_svg_element: T1,
  detach: As,
  init: s2,
  insert_hydration: o2,
  noop: Es,
  safe_not_equal: u2,
  svg_element: F1
} = window.__gradio__svelte__internal;
function c2(n) {
  let e, t;
  return {
    c() {
      e = F1("svg"), t = F1("path"), this.h();
    },
    l(r) {
      e = T1(r, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var a = x1(e);
      t = T1(a, "path", { d: !0 }), x1(t).forEach(As), a.forEach(As), this.h();
    },
    h() {
      Gn(t, "d", "M5 8l4 4 4-4z"), Gn(e, "class", "dropdown-arrow svelte-145leq6"), Gn(e, "xmlns", "http://www.w3.org/2000/svg"), Gn(e, "width", "100%"), Gn(e, "height", "100%"), Gn(e, "viewBox", "0 0 18 18");
    },
    m(r, a) {
      o2(r, e, a), l2(e, t);
    },
    p: Es,
    i: Es,
    o: Es,
    d(r) {
      r && As(e);
    }
  };
}
class bu extends i2 {
  constructor(e) {
    super(), s2(this, e, null, c2, u2, {});
  }
}
const {
  SvelteComponent: f2,
  append_hydration: h2,
  attr: Ti,
  children: C1,
  claim_svg_element: M1,
  detach: Ss,
  init: d2,
  insert_hydration: m2,
  noop: xs,
  safe_not_equal: p2,
  svg_element: z1
} = window.__gradio__svelte__internal;
function g2(n) {
  let e, t;
  return {
    c() {
      e = z1("svg"), t = z1("path"), this.h();
    },
    l(r) {
      e = M1(r, "svg", { xmlns: !0, viewBox: !0 });
      var a = C1(e);
      t = M1(a, "path", { fill: !0, d: !0 }), C1(t).forEach(Ss), a.forEach(Ss), this.h();
    },
    h() {
      Ti(t, "fill", "currentColor"), Ti(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ti(e, "xmlns", "http://www.w3.org/2000/svg"), Ti(e, "viewBox", "0 0 24 24");
    },
    m(r, a) {
      m2(r, e, a), h2(e, t);
    },
    p: xs,
    i: xs,
    o: xs,
    d(r) {
      r && Ss(e);
    }
  };
}
class _2 extends f2 {
  constructor(e) {
    super(), d2(this, e, null, g2, p2, {});
  }
}
const {
  SvelteComponent: v2,
  append_hydration: Fi,
  attr: ct,
  children: ba,
  claim_svg_element: wa,
  detach: Vn,
  init: b2,
  insert_hydration: w2,
  noop: Ts,
  safe_not_equal: y2,
  svg_element: ya
} = window.__gradio__svelte__internal;
function k2(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = ya("svg"), t = ya("path"), r = ya("path"), a = ya("line"), i = ya("line"), this.h();
    },
    l(l) {
      e = wa(l, "svg", {
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
      var s = ba(e);
      t = wa(s, "path", { d: !0 }), ba(t).forEach(Vn), r = wa(s, "path", { d: !0 }), ba(r).forEach(Vn), a = wa(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), ba(a).forEach(Vn), i = wa(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), ba(i).forEach(Vn), s.forEach(Vn), this.h();
    },
    h() {
      ct(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ct(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ct(a, "x1", "12"), ct(a, "y1", "19"), ct(a, "x2", "12"), ct(a, "y2", "23"), ct(i, "x1", "8"), ct(i, "y1", "23"), ct(i, "x2", "16"), ct(i, "y2", "23"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "fill", "none"), ct(e, "stroke", "currentColor"), ct(e, "stroke-width", "2"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-mic");
    },
    m(l, s) {
      w2(l, e, s), Fi(e, t), Fi(e, r), Fi(e, a), Fi(e, i);
    },
    p: Ts,
    i: Ts,
    o: Ts,
    d(l) {
      l && Vn(e);
    }
  };
}
class fa extends v2 {
  constructor(e) {
    super(), b2(this, e, null, k2, y2, {});
  }
}
const {
  SvelteComponent: D2,
  append_hydration: Fs,
  attr: Lt,
  children: Ci,
  claim_svg_element: Mi,
  detach: ka,
  init: A2,
  insert_hydration: E2,
  noop: Cs,
  safe_not_equal: S2,
  svg_element: zi
} = window.__gradio__svelte__internal;
function x2(n) {
  let e, t, r, a;
  return {
    c() {
      e = zi("svg"), t = zi("path"), r = zi("circle"), a = zi("circle"), this.h();
    },
    l(i) {
      e = Mi(i, "svg", {
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
      var l = Ci(e);
      t = Mi(l, "path", { d: !0 }), Ci(t).forEach(ka), r = Mi(l, "circle", { cx: !0, cy: !0, r: !0 }), Ci(r).forEach(ka), a = Mi(l, "circle", { cx: !0, cy: !0, r: !0 }), Ci(a).forEach(ka), l.forEach(ka), this.h();
    },
    h() {
      Lt(t, "d", "M9 18V5l12-2v13"), Lt(r, "cx", "6"), Lt(r, "cy", "18"), Lt(r, "r", "3"), Lt(a, "cx", "18"), Lt(a, "cy", "16"), Lt(a, "r", "3"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 24 24"), Lt(e, "fill", "none"), Lt(e, "stroke", "currentColor"), Lt(e, "stroke-width", "1.5"), Lt(e, "stroke-linecap", "round"), Lt(e, "stroke-linejoin", "round"), Lt(e, "class", "feather feather-music");
    },
    m(i, l) {
      E2(i, e, l), Fs(e, t), Fs(e, r), Fs(e, a);
    },
    p: Cs,
    i: Cs,
    o: Cs,
    d(i) {
      i && ka(e);
    }
  };
}
class wu extends D2 {
  constructor(e) {
    super(), A2(this, e, null, x2, S2, {});
  }
}
const {
  SvelteComponent: T2,
  append_hydration: F2,
  attr: Ft,
  children: B1,
  claim_svg_element: I1,
  detach: Ms,
  init: C2,
  insert_hydration: M2,
  noop: L1,
  safe_not_equal: z2,
  svg_element: N1
} = window.__gradio__svelte__internal;
function B2(n) {
  let e, t, r;
  return {
    c() {
      e = N1("svg"), t = N1("rect"), this.h();
    },
    l(a) {
      e = I1(a, "svg", {
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
      var i = B1(e);
      t = I1(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), B1(t).forEach(Ms), i.forEach(Ms), this.h();
    },
    h() {
      Ft(t, "x", "3"), Ft(t, "y", "3"), Ft(t, "width", "18"), Ft(t, "height", "18"), Ft(t, "rx", "2"), Ft(t, "ry", "2"), Ft(e, "xmlns", "http://www.w3.org/2000/svg"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(
        e,
        "fill",
        /*fill*/
        n[0]
      ), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", r = `${/*stroke_width*/
      n[1]}`), Ft(e, "stroke-linecap", "round"), Ft(e, "stroke-linejoin", "round"), Ft(e, "class", "feather feather-square");
    },
    m(a, i) {
      M2(a, e, i), F2(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && Ft(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && r !== (r = `${/*stroke_width*/
      a[1]}`) && Ft(e, "stroke-width", r);
    },
    i: L1,
    o: L1,
    d(a) {
      a && Ms(e);
    }
  };
}
function I2(n, e, t) {
  let { fill: r = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return n.$$set = (i) => {
    "fill" in i && t(0, r = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [r, a];
}
let dd = class extends T2 {
  constructor(e) {
    super(), C2(this, e, I2, B2, z2, { fill: 0, stroke_width: 1 });
  }
};
const {
  SvelteComponent: L2,
  append_hydration: zs,
  attr: Wt,
  children: Bi,
  claim_svg_element: Ii,
  detach: Da,
  init: N2,
  insert_hydration: R2,
  noop: Bs,
  safe_not_equal: O2,
  svg_element: Li
} = window.__gradio__svelte__internal;
function q2(n) {
  let e, t, r, a;
  return {
    c() {
      e = Li("svg"), t = Li("path"), r = Li("polyline"), a = Li("line"), this.h();
    },
    l(i) {
      e = Ii(i, "svg", {
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
      var l = Bi(e);
      t = Ii(l, "path", { d: !0 }), Bi(t).forEach(Da), r = Ii(l, "polyline", { points: !0 }), Bi(r).forEach(Da), a = Ii(l, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Bi(a).forEach(Da), l.forEach(Da), this.h();
    },
    h() {
      Wt(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Wt(r, "points", "17 8 12 3 7 8"), Wt(a, "x1", "12"), Wt(a, "y1", "3"), Wt(a, "x2", "12"), Wt(a, "y2", "15"), Wt(e, "xmlns", "http://www.w3.org/2000/svg"), Wt(e, "width", "90%"), Wt(e, "height", "90%"), Wt(e, "viewBox", "0 0 24 24"), Wt(e, "fill", "none"), Wt(e, "stroke", "currentColor"), Wt(e, "stroke-width", "2"), Wt(e, "stroke-linecap", "round"), Wt(e, "stroke-linejoin", "round"), Wt(e, "class", "feather feather-upload");
    },
    m(i, l) {
      R2(i, e, l), zs(e, t), zs(e, r), zs(e, a);
    },
    p: Bs,
    i: Bs,
    o: Bs,
    d(i) {
      i && Da(e);
    }
  };
}
class P2 extends L2 {
  constructor(e) {
    super(), N2(this, e, null, q2, O2, {});
  }
}
const {
  SvelteComponent: H2,
  append_hydration: R1,
  attr: Nt,
  children: Is,
  claim_svg_element: Ls,
  detach: Ni,
  init: U2,
  insert_hydration: G2,
  noop: Ns,
  safe_not_equal: V2,
  svg_element: Rs
} = window.__gradio__svelte__internal;
function j2(n) {
  let e, t, r;
  return {
    c() {
      e = Rs("svg"), t = Rs("polygon"), r = Rs("rect"), this.h();
    },
    l(a) {
      e = Ls(a, "svg", {
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
      var i = Is(e);
      t = Ls(i, "polygon", { points: !0 }), Is(t).forEach(Ni), r = Ls(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Is(r).forEach(Ni), i.forEach(Ni), this.h();
    },
    h() {
      Nt(t, "points", "23 7 16 12 23 17 23 7"), Nt(r, "x", "1"), Nt(r, "y", "5"), Nt(r, "width", "15"), Nt(r, "height", "14"), Nt(r, "rx", "2"), Nt(r, "ry", "2"), Nt(e, "xmlns", "http://www.w3.org/2000/svg"), Nt(e, "width", "100%"), Nt(e, "height", "100%"), Nt(e, "viewBox", "0 0 24 24"), Nt(e, "fill", "none"), Nt(e, "stroke", "currentColor"), Nt(e, "stroke-width", "1.5"), Nt(e, "stroke-linecap", "round"), Nt(e, "stroke-linejoin", "round"), Nt(e, "class", "feather feather-video");
    },
    m(a, i) {
      G2(a, e, i), R1(e, t), R1(e, r);
    },
    p: Ns,
    i: Ns,
    o: Ns,
    d(a) {
      a && Ni(e);
    }
  };
}
class Ja extends H2 {
  constructor(e) {
    super(), U2(this, e, null, j2, V2, {});
  }
}
const {
  SvelteComponent: W2,
  append_hydration: Aa,
  attr: Ct,
  children: Ea,
  claim_svg_element: Sa,
  claim_text: X2,
  detach: jn,
  init: Y2,
  insert_hydration: Z2,
  noop: Os,
  safe_not_equal: K2,
  svg_element: xa,
  text: J2
} = window.__gradio__svelte__internal;
function Q2(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = xa("svg"), t = xa("title"), r = J2("High volume"), a = xa("path"), i = xa("path"), l = xa("path"), this.h();
    },
    l(s) {
      e = Sa(s, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        stroke: !0,
        xmlns: !0,
        color: !0
      });
      var o = Ea(e);
      t = Sa(o, "title", {});
      var u = Ea(t);
      r = X2(u, "High volume"), u.forEach(jn), a = Sa(o, "path", { d: !0, "stroke-width": !0 }), Ea(a).forEach(jn), i = Sa(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Ea(i).forEach(jn), l = Sa(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Ea(l).forEach(jn), o.forEach(jn), this.h();
    },
    h() {
      Ct(a, "d", "M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z"), Ct(a, "stroke-width", "1.5"), Ct(i, "d", "M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5"), Ct(i, "stroke-width", "1.5"), Ct(i, "stroke-linecap", "round"), Ct(i, "stroke-linejoin", "round"), Ct(l, "d", "M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5"), Ct(l, "stroke-width", "1.5"), Ct(l, "stroke-linecap", "round"), Ct(l, "stroke-linejoin", "round"), Ct(e, "width", "100%"), Ct(e, "height", "100%"), Ct(e, "viewBox", "0 0 24 24"), Ct(e, "stroke-width", "1.5"), Ct(e, "fill", "none"), Ct(e, "stroke", "currentColor"), Ct(e, "xmlns", "http://www.w3.org/2000/svg"), Ct(e, "color", "currentColor");
    },
    m(s, o) {
      Z2(s, e, o), Aa(e, t), Aa(t, r), Aa(e, a), Aa(e, i), Aa(e, l);
    },
    p: Os,
    i: Os,
    o: Os,
    d(s) {
      s && jn(e);
    }
  };
}
class Sl extends W2 {
  constructor(e) {
    super(), Y2(this, e, null, Q2, K2, {});
  }
}
const {
  SvelteComponent: $2,
  append_hydration: Vr,
  attr: _t,
  children: jr,
  claim_svg_element: Wr,
  claim_text: e5,
  detach: kr,
  init: t5,
  insert_hydration: r5,
  noop: qs,
  safe_not_equal: n5,
  svg_element: Xr,
  text: a5
} = window.__gradio__svelte__internal;
function i5(n) {
  let e, t, r, a, i, l, s, o, u;
  return {
    c() {
      e = Xr("svg"), t = Xr("title"), r = a5("Muted volume"), a = Xr("g"), i = Xr("path"), l = Xr("path"), s = Xr("defs"), o = Xr("clipPath"), u = Xr("rect"), this.h();
    },
    l(c) {
      e = Wr(c, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        xmlns: !0,
        stroke: !0,
        color: !0
      });
      var d = jr(e);
      t = Wr(d, "title", {});
      var f = jr(t);
      r = e5(f, "Muted volume"), f.forEach(kr), a = Wr(d, "g", { "clip-path": !0 });
      var p = jr(a);
      i = Wr(p, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), jr(i).forEach(kr), l = Wr(p, "path", { d: !0, "stroke-width": !0 }), jr(l).forEach(kr), p.forEach(kr), s = Wr(d, "defs", {});
      var g = jr(s);
      o = Wr(g, "clipPath", { id: !0 });
      var b = jr(o);
      u = Wr(b, "rect", { width: !0, height: !0, fill: !0 }), jr(u).forEach(kr), b.forEach(kr), g.forEach(kr), d.forEach(kr), this.h();
    },
    h() {
      _t(i, "d", "M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14"), _t(i, "stroke-width", "1.5"), _t(i, "stroke-linecap", "round"), _t(i, "stroke-linejoin", "round"), _t(l, "d", "M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z"), _t(l, "stroke-width", "1.5"), _t(a, "clip-path", "url(#clip0_3173_16686)"), _t(u, "width", "24"), _t(u, "height", "24"), _t(u, "fill", "white"), _t(o, "id", "clip0_3173_16686"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "stroke-width", "1.5"), _t(e, "fill", "none"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "stroke", "currentColor"), _t(e, "color", "currentColor");
    },
    m(c, d) {
      r5(c, e, d), Vr(e, t), Vr(t, r), Vr(e, a), Vr(a, i), Vr(a, l), Vr(e, s), Vr(s, o), Vr(o, u);
    },
    p: qs,
    i: qs,
    o: qs,
    d(c) {
      c && kr(e);
    }
  };
}
class xl extends $2 {
  constructor(e) {
    super(), t5(this, e, null, i5, n5, {});
  }
}
const {
  SvelteComponent: l5,
  append_hydration: O1,
  attr: Mt,
  children: Ps,
  claim_svg_element: Hs,
  detach: Ri,
  init: s5,
  insert_hydration: o5,
  noop: Us,
  safe_not_equal: u5,
  svg_element: Gs
} = window.__gradio__svelte__internal;
function c5(n) {
  let e, t, r;
  return {
    c() {
      e = Gs("svg"), t = Gs("circle"), r = Gs("animateTransform"), this.h();
    },
    l(a) {
      e = Hs(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        class: !0
      });
      var i = Ps(e);
      t = Hs(i, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0
      });
      var l = Ps(t);
      r = Hs(l, "animateTransform", {
        attributeName: !0,
        type: !0,
        from: !0,
        to: !0,
        repeatCount: !0
      }), Ps(r).forEach(Ri), l.forEach(Ri), i.forEach(Ri), this.h();
    },
    h() {
      Mt(r, "attributeName", "transform"), Mt(r, "type", "rotate"), Mt(r, "from", "0 25 25"), Mt(r, "to", "360 25 25"), Mt(r, "repeatCount", "indefinite"), Mt(t, "cx", "25"), Mt(t, "cy", "25"), Mt(t, "r", "20"), Mt(t, "fill", "none"), Mt(t, "stroke-width", "3.0"), Mt(t, "stroke-linecap", "round"), Mt(t, "stroke-dasharray", "94.2477796076938 94.2477796076938"), Mt(t, "stroke-dashoffset", "0"), Mt(e, "xmlns", "http://www.w3.org/2000/svg"), Mt(e, "width", "100%"), Mt(e, "height", "100%"), Mt(e, "viewBox", "0 0 50 50"), Mt(e, "class", "svelte-pb9pol");
    },
    m(a, i) {
      o5(a, e, i), O1(e, t), O1(t, r);
    },
    p: Us,
    i: Us,
    o: Us,
    d(a) {
      a && Ri(e);
    }
  };
}
class yu extends l5 {
  constructor(e) {
    super(), s5(this, e, null, c5, u5, {});
  }
}
class d0 {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new d0(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class B0 {
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
    return new B0(t, d0.range(this, e));
  }
}
class X {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var r = "KaTeX parse error: " + e, a, i, l = t && t.loc;
    if (l && l.start <= l.end) {
      var s = l.lexer.input;
      a = l.start, i = l.end, a === s.length ? r += " at end of input: " : r += " at position " + (a + 1) + ": ";
      var o = s.slice(a, i).replace(/[^]/g, "$&̲"), u;
      a > 15 ? u = "…" + s.slice(a - 15, a) : u = s.slice(0, a);
      var c;
      i + 15 < s.length ? c = s.slice(i, i + 15) + "…" : c = s.slice(i), r += u + o + c;
    }
    var d = new Error(r);
    return d.name = "ParseError", d.__proto__ = X.prototype, d.position = a, a != null && i != null && (d.length = i - a), d.rawMessage = e, d;
  }
}
X.prototype.__proto__ = Error.prototype;
var f5 = function(e, t) {
  return e.indexOf(t) !== -1;
}, h5 = function(e, t) {
  return e === void 0 ? t : e;
}, d5 = /([A-Z])/g, m5 = function(e) {
  return e.replace(d5, "-$1").toLowerCase();
}, p5 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, g5 = /[&><"']/g;
function _5(n) {
  return String(n).replace(g5, (e) => p5[e]);
}
var md = function n(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? n(e.body[0]) : e : e.type === "font" ? n(e.body) : e;
}, v5 = function(e) {
  var t = md(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, b5 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, w5 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ie = {
  contains: f5,
  deflt: h5,
  escape: _5,
  hyphenate: m5,
  getBaseElem: md,
  isCharacterBox: v5,
  protocolFromUrl: w5
}, _l = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (n) => "#" + n
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (n, e) => (e.push(n), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (n) => Math.max(0, n),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (n) => Math.max(0, n),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (n) => Math.max(0, n),
    cli: "-e, --max-expand <n>",
    cliProcessor: (n) => n === "Infinity" ? 1 / 0 : parseInt(n)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function y5(n) {
  if (n.default)
    return n.default;
  var e = n.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class ku {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in _l)
      if (_l.hasOwnProperty(t)) {
        var r = _l[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : y5(r);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, r) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(e, t, r)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new X("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, r) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, t, r);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = ie.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var r = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!r;
  }
}
class Yr {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return ir[k5[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return ir[D5[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return ir[A5[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return ir[E5[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return ir[S5[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return ir[x5[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Du = 0, Tl = 1, la = 2, Cr = 3, Qa = 4, F0 = 5, ha = 6, Jt = 7, ir = [new Yr(Du, 0, !1), new Yr(Tl, 0, !0), new Yr(la, 1, !1), new Yr(Cr, 1, !0), new Yr(Qa, 2, !1), new Yr(F0, 2, !0), new Yr(ha, 3, !1), new Yr(Jt, 3, !0)], k5 = [Qa, F0, Qa, F0, ha, Jt, ha, Jt], D5 = [F0, F0, F0, F0, Jt, Jt, Jt, Jt], A5 = [la, Cr, Qa, F0, ha, Jt, ha, Jt], E5 = [Cr, Cr, F0, F0, Jt, Jt, Jt, Jt], S5 = [Tl, Tl, Cr, Cr, F0, F0, Jt, Jt], x5 = [Du, Tl, la, Cr, la, Cr, la, Cr], se = {
  DISPLAY: ir[Du],
  TEXT: ir[la],
  SCRIPT: ir[Qa],
  SCRIPTSCRIPT: ir[ha]
}, Go = [{
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
function T5(n) {
  for (var e = 0; e < Go.length; e++)
    for (var t = Go[e], r = 0; r < t.blocks.length; r++) {
      var a = t.blocks[r];
      if (n >= a[0] && n <= a[1])
        return t.name;
    }
  return null;
}
var vl = [];
Go.forEach((n) => n.blocks.forEach((e) => vl.push(...e)));
function pd(n) {
  for (var e = 0; e < vl.length; e += 2)
    if (n >= vl[e] && n <= vl[e + 1])
      return !0;
  return !1;
}
var Wn = 80, F5 = function(e, t) {
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
}, C5 = function(e, t) {
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
}, M5 = function(e, t) {
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
}, z5 = function(e, t) {
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
}, B5 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, I5 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, L5 = function(e, t, r) {
  var a = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, N5 = function(e, t, r) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = F5(t, Wn);
      break;
    case "sqrtSize1":
      a = C5(t, Wn);
      break;
    case "sqrtSize2":
      a = M5(t, Wn);
      break;
    case "sqrtSize3":
      a = z5(t, Wn);
      break;
    case "sqrtSize4":
      a = B5(t, Wn);
      break;
    case "sqrtTall":
      a = L5(t, Wn, r);
  }
  return a;
}, R5 = function(e, t) {
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
}, q1 = {
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
}, O5 = function(e, t) {
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
class ii {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return ie.contains(this.classes, e);
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
var sr = {
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
}, Oi = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, P1 = {
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
function q5(n, e) {
  sr[n] = e;
}
function Au(n, e, t) {
  if (!sr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = n.charCodeAt(0), a = sr[e][r];
  if (!a && n[0] in P1 && (r = P1[n[0]].charCodeAt(0), a = sr[e][r]), !a && t === "text" && pd(r) && (a = sr[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Vs = {};
function P5(n) {
  var e;
  if (n >= 5 ? e = 0 : n >= 3 ? e = 1 : e = 2, !Vs[e]) {
    var t = Vs[e] = {
      cssEmPerMu: Oi.quad[e] / 18
    };
    for (var r in Oi)
      Oi.hasOwnProperty(r) && (t[r] = Oi[r][e]);
  }
  return Vs[e];
}
var H5 = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], H1 = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], U1 = function(e, t) {
  return t.size < 2 ? e : H5[e - 1][t.size - 1];
};
class Sr {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || Sr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = H1[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
    return new Sr(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: U1(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: H1[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = U1(Sr.BASESIZE, e);
    return this.size === t && this.textSize === Sr.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== Sr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Sr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = P5(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Sr.BASESIZE = 6;
var Vo = {
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
}, U5 = {
  ex: !0,
  em: !0,
  mu: !0
}, gd = function(e) {
  return typeof e != "string" && (e = e.unit), e in Vo || e in U5 || e === "ex";
}, et = function(e, t) {
  var r;
  if (e.unit in Vo)
    r = Vo[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new X("Invalid unit: '" + e.unit + "'");
    a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, Z = function(e) {
  return +e.toFixed(4) + "em";
}, cn = function(e) {
  return e.filter((t) => t).join(" ");
}, _d = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, vd = function(e) {
  var t = document.createElement(e);
  t.className = cn(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, bd = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + ie.escape(cn(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += ie.hyphenate(a) + ":" + this.style[a] + ";");
  r && (t += ' style="' + ie.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + ie.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class li {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, _d.call(this, e, r, a), this.children = t || [];
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
    return ie.contains(this.classes, e);
  }
  toNode() {
    return vd.call(this, "span");
  }
  toMarkup() {
    return bd.call(this, "span");
  }
}
class Eu {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, _d.call(this, t, a), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ie.contains(this.classes, e);
  }
  toNode() {
    return vd.call(this, "a");
  }
  toMarkup() {
    return bd.call(this, "a");
  }
}
class G5 {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return ie.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + ie.escape(this.src) + '"' + (' alt="' + ie.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += ie.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + ie.escape(t) + '"'), e += "'/>", e;
  }
}
var V5 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class I0 {
  constructor(e, t, r, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var u = T5(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = V5[this.text]);
  }
  hasClass(e) {
    return ie.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = Z(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = cn(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += ie.escape(cn(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += ie.hyphenate(a) + ":" + this.style[a] + ";");
    r && (e = !0, t += ' style="' + ie.escape(r) + '"');
    var i = ie.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class Lr {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ie.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class fn {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", q1[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ie.escape(this.alternate) + '"/>' : '<path d="' + ie.escape(q1[this.pathName]) + '"/>';
  }
}
class jo {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ie.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function G1(n) {
  if (n instanceof I0)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function j5(n) {
  if (n instanceof li)
    return n;
  throw new Error("Expected span<HtmlDomNode> but got " + String(n) + ".");
}
var W5 = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, X5 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Ge = {
  math: {},
  text: {}
};
function h(n, e, t, r, a, i) {
  Ge[n][a] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (Ge[n][r] = Ge[n][a]);
}
var m = "math", U = "text", _ = "main", S = "ams", Ke = "accent-token", Q = "bin", e0 = "close", da = "inner", le = "mathord", mt = "op-token", b0 = "open", Jl = "punct", x = "rel", Ur = "spacing", M = "textord";
h(m, _, x, "≡", "\\equiv", !0);
h(m, _, x, "≺", "\\prec", !0);
h(m, _, x, "≻", "\\succ", !0);
h(m, _, x, "∼", "\\sim", !0);
h(m, _, x, "⊥", "\\perp");
h(m, _, x, "⪯", "\\preceq", !0);
h(m, _, x, "⪰", "\\succeq", !0);
h(m, _, x, "≃", "\\simeq", !0);
h(m, _, x, "∣", "\\mid", !0);
h(m, _, x, "≪", "\\ll", !0);
h(m, _, x, "≫", "\\gg", !0);
h(m, _, x, "≍", "\\asymp", !0);
h(m, _, x, "∥", "\\parallel");
h(m, _, x, "⋈", "\\bowtie", !0);
h(m, _, x, "⌣", "\\smile", !0);
h(m, _, x, "⊑", "\\sqsubseteq", !0);
h(m, _, x, "⊒", "\\sqsupseteq", !0);
h(m, _, x, "≐", "\\doteq", !0);
h(m, _, x, "⌢", "\\frown", !0);
h(m, _, x, "∋", "\\ni", !0);
h(m, _, x, "∝", "\\propto", !0);
h(m, _, x, "⊢", "\\vdash", !0);
h(m, _, x, "⊣", "\\dashv", !0);
h(m, _, x, "∋", "\\owns");
h(m, _, Jl, ".", "\\ldotp");
h(m, _, Jl, "⋅", "\\cdotp");
h(m, _, M, "#", "\\#");
h(U, _, M, "#", "\\#");
h(m, _, M, "&", "\\&");
h(U, _, M, "&", "\\&");
h(m, _, M, "ℵ", "\\aleph", !0);
h(m, _, M, "∀", "\\forall", !0);
h(m, _, M, "ℏ", "\\hbar", !0);
h(m, _, M, "∃", "\\exists", !0);
h(m, _, M, "∇", "\\nabla", !0);
h(m, _, M, "♭", "\\flat", !0);
h(m, _, M, "ℓ", "\\ell", !0);
h(m, _, M, "♮", "\\natural", !0);
h(m, _, M, "♣", "\\clubsuit", !0);
h(m, _, M, "℘", "\\wp", !0);
h(m, _, M, "♯", "\\sharp", !0);
h(m, _, M, "♢", "\\diamondsuit", !0);
h(m, _, M, "ℜ", "\\Re", !0);
h(m, _, M, "♡", "\\heartsuit", !0);
h(m, _, M, "ℑ", "\\Im", !0);
h(m, _, M, "♠", "\\spadesuit", !0);
h(m, _, M, "§", "\\S", !0);
h(U, _, M, "§", "\\S");
h(m, _, M, "¶", "\\P", !0);
h(U, _, M, "¶", "\\P");
h(m, _, M, "†", "\\dag");
h(U, _, M, "†", "\\dag");
h(U, _, M, "†", "\\textdagger");
h(m, _, M, "‡", "\\ddag");
h(U, _, M, "‡", "\\ddag");
h(U, _, M, "‡", "\\textdaggerdbl");
h(m, _, e0, "⎱", "\\rmoustache", !0);
h(m, _, b0, "⎰", "\\lmoustache", !0);
h(m, _, e0, "⟯", "\\rgroup", !0);
h(m, _, b0, "⟮", "\\lgroup", !0);
h(m, _, Q, "∓", "\\mp", !0);
h(m, _, Q, "⊖", "\\ominus", !0);
h(m, _, Q, "⊎", "\\uplus", !0);
h(m, _, Q, "⊓", "\\sqcap", !0);
h(m, _, Q, "∗", "\\ast");
h(m, _, Q, "⊔", "\\sqcup", !0);
h(m, _, Q, "◯", "\\bigcirc", !0);
h(m, _, Q, "∙", "\\bullet", !0);
h(m, _, Q, "‡", "\\ddagger");
h(m, _, Q, "≀", "\\wr", !0);
h(m, _, Q, "⨿", "\\amalg");
h(m, _, Q, "&", "\\And");
h(m, _, x, "⟵", "\\longleftarrow", !0);
h(m, _, x, "⇐", "\\Leftarrow", !0);
h(m, _, x, "⟸", "\\Longleftarrow", !0);
h(m, _, x, "⟶", "\\longrightarrow", !0);
h(m, _, x, "⇒", "\\Rightarrow", !0);
h(m, _, x, "⟹", "\\Longrightarrow", !0);
h(m, _, x, "↔", "\\leftrightarrow", !0);
h(m, _, x, "⟷", "\\longleftrightarrow", !0);
h(m, _, x, "⇔", "\\Leftrightarrow", !0);
h(m, _, x, "⟺", "\\Longleftrightarrow", !0);
h(m, _, x, "↦", "\\mapsto", !0);
h(m, _, x, "⟼", "\\longmapsto", !0);
h(m, _, x, "↗", "\\nearrow", !0);
h(m, _, x, "↩", "\\hookleftarrow", !0);
h(m, _, x, "↪", "\\hookrightarrow", !0);
h(m, _, x, "↘", "\\searrow", !0);
h(m, _, x, "↼", "\\leftharpoonup", !0);
h(m, _, x, "⇀", "\\rightharpoonup", !0);
h(m, _, x, "↙", "\\swarrow", !0);
h(m, _, x, "↽", "\\leftharpoondown", !0);
h(m, _, x, "⇁", "\\rightharpoondown", !0);
h(m, _, x, "↖", "\\nwarrow", !0);
h(m, _, x, "⇌", "\\rightleftharpoons", !0);
h(m, S, x, "≮", "\\nless", !0);
h(m, S, x, "", "\\@nleqslant");
h(m, S, x, "", "\\@nleqq");
h(m, S, x, "⪇", "\\lneq", !0);
h(m, S, x, "≨", "\\lneqq", !0);
h(m, S, x, "", "\\@lvertneqq");
h(m, S, x, "⋦", "\\lnsim", !0);
h(m, S, x, "⪉", "\\lnapprox", !0);
h(m, S, x, "⊀", "\\nprec", !0);
h(m, S, x, "⋠", "\\npreceq", !0);
h(m, S, x, "⋨", "\\precnsim", !0);
h(m, S, x, "⪹", "\\precnapprox", !0);
h(m, S, x, "≁", "\\nsim", !0);
h(m, S, x, "", "\\@nshortmid");
h(m, S, x, "∤", "\\nmid", !0);
h(m, S, x, "⊬", "\\nvdash", !0);
h(m, S, x, "⊭", "\\nvDash", !0);
h(m, S, x, "⋪", "\\ntriangleleft");
h(m, S, x, "⋬", "\\ntrianglelefteq", !0);
h(m, S, x, "⊊", "\\subsetneq", !0);
h(m, S, x, "", "\\@varsubsetneq");
h(m, S, x, "⫋", "\\subsetneqq", !0);
h(m, S, x, "", "\\@varsubsetneqq");
h(m, S, x, "≯", "\\ngtr", !0);
h(m, S, x, "", "\\@ngeqslant");
h(m, S, x, "", "\\@ngeqq");
h(m, S, x, "⪈", "\\gneq", !0);
h(m, S, x, "≩", "\\gneqq", !0);
h(m, S, x, "", "\\@gvertneqq");
h(m, S, x, "⋧", "\\gnsim", !0);
h(m, S, x, "⪊", "\\gnapprox", !0);
h(m, S, x, "⊁", "\\nsucc", !0);
h(m, S, x, "⋡", "\\nsucceq", !0);
h(m, S, x, "⋩", "\\succnsim", !0);
h(m, S, x, "⪺", "\\succnapprox", !0);
h(m, S, x, "≆", "\\ncong", !0);
h(m, S, x, "", "\\@nshortparallel");
h(m, S, x, "∦", "\\nparallel", !0);
h(m, S, x, "⊯", "\\nVDash", !0);
h(m, S, x, "⋫", "\\ntriangleright");
h(m, S, x, "⋭", "\\ntrianglerighteq", !0);
h(m, S, x, "", "\\@nsupseteqq");
h(m, S, x, "⊋", "\\supsetneq", !0);
h(m, S, x, "", "\\@varsupsetneq");
h(m, S, x, "⫌", "\\supsetneqq", !0);
h(m, S, x, "", "\\@varsupsetneqq");
h(m, S, x, "⊮", "\\nVdash", !0);
h(m, S, x, "⪵", "\\precneqq", !0);
h(m, S, x, "⪶", "\\succneqq", !0);
h(m, S, x, "", "\\@nsubseteqq");
h(m, S, Q, "⊴", "\\unlhd");
h(m, S, Q, "⊵", "\\unrhd");
h(m, S, x, "↚", "\\nleftarrow", !0);
h(m, S, x, "↛", "\\nrightarrow", !0);
h(m, S, x, "⇍", "\\nLeftarrow", !0);
h(m, S, x, "⇏", "\\nRightarrow", !0);
h(m, S, x, "↮", "\\nleftrightarrow", !0);
h(m, S, x, "⇎", "\\nLeftrightarrow", !0);
h(m, S, x, "△", "\\vartriangle");
h(m, S, M, "ℏ", "\\hslash");
h(m, S, M, "▽", "\\triangledown");
h(m, S, M, "◊", "\\lozenge");
h(m, S, M, "Ⓢ", "\\circledS");
h(m, S, M, "®", "\\circledR");
h(U, S, M, "®", "\\circledR");
h(m, S, M, "∡", "\\measuredangle", !0);
h(m, S, M, "∄", "\\nexists");
h(m, S, M, "℧", "\\mho");
h(m, S, M, "Ⅎ", "\\Finv", !0);
h(m, S, M, "⅁", "\\Game", !0);
h(m, S, M, "‵", "\\backprime");
h(m, S, M, "▲", "\\blacktriangle");
h(m, S, M, "▼", "\\blacktriangledown");
h(m, S, M, "■", "\\blacksquare");
h(m, S, M, "⧫", "\\blacklozenge");
h(m, S, M, "★", "\\bigstar");
h(m, S, M, "∢", "\\sphericalangle", !0);
h(m, S, M, "∁", "\\complement", !0);
h(m, S, M, "ð", "\\eth", !0);
h(U, _, M, "ð", "ð");
h(m, S, M, "╱", "\\diagup");
h(m, S, M, "╲", "\\diagdown");
h(m, S, M, "□", "\\square");
h(m, S, M, "□", "\\Box");
h(m, S, M, "◊", "\\Diamond");
h(m, S, M, "¥", "\\yen", !0);
h(U, S, M, "¥", "\\yen", !0);
h(m, S, M, "✓", "\\checkmark", !0);
h(U, S, M, "✓", "\\checkmark");
h(m, S, M, "ℶ", "\\beth", !0);
h(m, S, M, "ℸ", "\\daleth", !0);
h(m, S, M, "ℷ", "\\gimel", !0);
h(m, S, M, "ϝ", "\\digamma", !0);
h(m, S, M, "ϰ", "\\varkappa");
h(m, S, b0, "┌", "\\@ulcorner", !0);
h(m, S, e0, "┐", "\\@urcorner", !0);
h(m, S, b0, "└", "\\@llcorner", !0);
h(m, S, e0, "┘", "\\@lrcorner", !0);
h(m, S, x, "≦", "\\leqq", !0);
h(m, S, x, "⩽", "\\leqslant", !0);
h(m, S, x, "⪕", "\\eqslantless", !0);
h(m, S, x, "≲", "\\lesssim", !0);
h(m, S, x, "⪅", "\\lessapprox", !0);
h(m, S, x, "≊", "\\approxeq", !0);
h(m, S, Q, "⋖", "\\lessdot");
h(m, S, x, "⋘", "\\lll", !0);
h(m, S, x, "≶", "\\lessgtr", !0);
h(m, S, x, "⋚", "\\lesseqgtr", !0);
h(m, S, x, "⪋", "\\lesseqqgtr", !0);
h(m, S, x, "≑", "\\doteqdot");
h(m, S, x, "≓", "\\risingdotseq", !0);
h(m, S, x, "≒", "\\fallingdotseq", !0);
h(m, S, x, "∽", "\\backsim", !0);
h(m, S, x, "⋍", "\\backsimeq", !0);
h(m, S, x, "⫅", "\\subseteqq", !0);
h(m, S, x, "⋐", "\\Subset", !0);
h(m, S, x, "⊏", "\\sqsubset", !0);
h(m, S, x, "≼", "\\preccurlyeq", !0);
h(m, S, x, "⋞", "\\curlyeqprec", !0);
h(m, S, x, "≾", "\\precsim", !0);
h(m, S, x, "⪷", "\\precapprox", !0);
h(m, S, x, "⊲", "\\vartriangleleft");
h(m, S, x, "⊴", "\\trianglelefteq");
h(m, S, x, "⊨", "\\vDash", !0);
h(m, S, x, "⊪", "\\Vvdash", !0);
h(m, S, x, "⌣", "\\smallsmile");
h(m, S, x, "⌢", "\\smallfrown");
h(m, S, x, "≏", "\\bumpeq", !0);
h(m, S, x, "≎", "\\Bumpeq", !0);
h(m, S, x, "≧", "\\geqq", !0);
h(m, S, x, "⩾", "\\geqslant", !0);
h(m, S, x, "⪖", "\\eqslantgtr", !0);
h(m, S, x, "≳", "\\gtrsim", !0);
h(m, S, x, "⪆", "\\gtrapprox", !0);
h(m, S, Q, "⋗", "\\gtrdot");
h(m, S, x, "⋙", "\\ggg", !0);
h(m, S, x, "≷", "\\gtrless", !0);
h(m, S, x, "⋛", "\\gtreqless", !0);
h(m, S, x, "⪌", "\\gtreqqless", !0);
h(m, S, x, "≖", "\\eqcirc", !0);
h(m, S, x, "≗", "\\circeq", !0);
h(m, S, x, "≜", "\\triangleq", !0);
h(m, S, x, "∼", "\\thicksim");
h(m, S, x, "≈", "\\thickapprox");
h(m, S, x, "⫆", "\\supseteqq", !0);
h(m, S, x, "⋑", "\\Supset", !0);
h(m, S, x, "⊐", "\\sqsupset", !0);
h(m, S, x, "≽", "\\succcurlyeq", !0);
h(m, S, x, "⋟", "\\curlyeqsucc", !0);
h(m, S, x, "≿", "\\succsim", !0);
h(m, S, x, "⪸", "\\succapprox", !0);
h(m, S, x, "⊳", "\\vartriangleright");
h(m, S, x, "⊵", "\\trianglerighteq");
h(m, S, x, "⊩", "\\Vdash", !0);
h(m, S, x, "∣", "\\shortmid");
h(m, S, x, "∥", "\\shortparallel");
h(m, S, x, "≬", "\\between", !0);
h(m, S, x, "⋔", "\\pitchfork", !0);
h(m, S, x, "∝", "\\varpropto");
h(m, S, x, "◀", "\\blacktriangleleft");
h(m, S, x, "∴", "\\therefore", !0);
h(m, S, x, "∍", "\\backepsilon");
h(m, S, x, "▶", "\\blacktriangleright");
h(m, S, x, "∵", "\\because", !0);
h(m, S, x, "⋘", "\\llless");
h(m, S, x, "⋙", "\\gggtr");
h(m, S, Q, "⊲", "\\lhd");
h(m, S, Q, "⊳", "\\rhd");
h(m, S, x, "≂", "\\eqsim", !0);
h(m, _, x, "⋈", "\\Join");
h(m, S, x, "≑", "\\Doteq", !0);
h(m, S, Q, "∔", "\\dotplus", !0);
h(m, S, Q, "∖", "\\smallsetminus");
h(m, S, Q, "⋒", "\\Cap", !0);
h(m, S, Q, "⋓", "\\Cup", !0);
h(m, S, Q, "⩞", "\\doublebarwedge", !0);
h(m, S, Q, "⊟", "\\boxminus", !0);
h(m, S, Q, "⊞", "\\boxplus", !0);
h(m, S, Q, "⋇", "\\divideontimes", !0);
h(m, S, Q, "⋉", "\\ltimes", !0);
h(m, S, Q, "⋊", "\\rtimes", !0);
h(m, S, Q, "⋋", "\\leftthreetimes", !0);
h(m, S, Q, "⋌", "\\rightthreetimes", !0);
h(m, S, Q, "⋏", "\\curlywedge", !0);
h(m, S, Q, "⋎", "\\curlyvee", !0);
h(m, S, Q, "⊝", "\\circleddash", !0);
h(m, S, Q, "⊛", "\\circledast", !0);
h(m, S, Q, "⋅", "\\centerdot");
h(m, S, Q, "⊺", "\\intercal", !0);
h(m, S, Q, "⋒", "\\doublecap");
h(m, S, Q, "⋓", "\\doublecup");
h(m, S, Q, "⊠", "\\boxtimes", !0);
h(m, S, x, "⇢", "\\dashrightarrow", !0);
h(m, S, x, "⇠", "\\dashleftarrow", !0);
h(m, S, x, "⇇", "\\leftleftarrows", !0);
h(m, S, x, "⇆", "\\leftrightarrows", !0);
h(m, S, x, "⇚", "\\Lleftarrow", !0);
h(m, S, x, "↞", "\\twoheadleftarrow", !0);
h(m, S, x, "↢", "\\leftarrowtail", !0);
h(m, S, x, "↫", "\\looparrowleft", !0);
h(m, S, x, "⇋", "\\leftrightharpoons", !0);
h(m, S, x, "↶", "\\curvearrowleft", !0);
h(m, S, x, "↺", "\\circlearrowleft", !0);
h(m, S, x, "↰", "\\Lsh", !0);
h(m, S, x, "⇈", "\\upuparrows", !0);
h(m, S, x, "↿", "\\upharpoonleft", !0);
h(m, S, x, "⇃", "\\downharpoonleft", !0);
h(m, _, x, "⊶", "\\origof", !0);
h(m, _, x, "⊷", "\\imageof", !0);
h(m, S, x, "⊸", "\\multimap", !0);
h(m, S, x, "↭", "\\leftrightsquigarrow", !0);
h(m, S, x, "⇉", "\\rightrightarrows", !0);
h(m, S, x, "⇄", "\\rightleftarrows", !0);
h(m, S, x, "↠", "\\twoheadrightarrow", !0);
h(m, S, x, "↣", "\\rightarrowtail", !0);
h(m, S, x, "↬", "\\looparrowright", !0);
h(m, S, x, "↷", "\\curvearrowright", !0);
h(m, S, x, "↻", "\\circlearrowright", !0);
h(m, S, x, "↱", "\\Rsh", !0);
h(m, S, x, "⇊", "\\downdownarrows", !0);
h(m, S, x, "↾", "\\upharpoonright", !0);
h(m, S, x, "⇂", "\\downharpoonright", !0);
h(m, S, x, "⇝", "\\rightsquigarrow", !0);
h(m, S, x, "⇝", "\\leadsto");
h(m, S, x, "⇛", "\\Rrightarrow", !0);
h(m, S, x, "↾", "\\restriction");
h(m, _, M, "‘", "`");
h(m, _, M, "$", "\\$");
h(U, _, M, "$", "\\$");
h(U, _, M, "$", "\\textdollar");
h(m, _, M, "%", "\\%");
h(U, _, M, "%", "\\%");
h(m, _, M, "_", "\\_");
h(U, _, M, "_", "\\_");
h(U, _, M, "_", "\\textunderscore");
h(m, _, M, "∠", "\\angle", !0);
h(m, _, M, "∞", "\\infty", !0);
h(m, _, M, "′", "\\prime");
h(m, _, M, "△", "\\triangle");
h(m, _, M, "Γ", "\\Gamma", !0);
h(m, _, M, "Δ", "\\Delta", !0);
h(m, _, M, "Θ", "\\Theta", !0);
h(m, _, M, "Λ", "\\Lambda", !0);
h(m, _, M, "Ξ", "\\Xi", !0);
h(m, _, M, "Π", "\\Pi", !0);
h(m, _, M, "Σ", "\\Sigma", !0);
h(m, _, M, "Υ", "\\Upsilon", !0);
h(m, _, M, "Φ", "\\Phi", !0);
h(m, _, M, "Ψ", "\\Psi", !0);
h(m, _, M, "Ω", "\\Omega", !0);
h(m, _, M, "A", "Α");
h(m, _, M, "B", "Β");
h(m, _, M, "E", "Ε");
h(m, _, M, "Z", "Ζ");
h(m, _, M, "H", "Η");
h(m, _, M, "I", "Ι");
h(m, _, M, "K", "Κ");
h(m, _, M, "M", "Μ");
h(m, _, M, "N", "Ν");
h(m, _, M, "O", "Ο");
h(m, _, M, "P", "Ρ");
h(m, _, M, "T", "Τ");
h(m, _, M, "X", "Χ");
h(m, _, M, "¬", "\\neg", !0);
h(m, _, M, "¬", "\\lnot");
h(m, _, M, "⊤", "\\top");
h(m, _, M, "⊥", "\\bot");
h(m, _, M, "∅", "\\emptyset");
h(m, S, M, "∅", "\\varnothing");
h(m, _, le, "α", "\\alpha", !0);
h(m, _, le, "β", "\\beta", !0);
h(m, _, le, "γ", "\\gamma", !0);
h(m, _, le, "δ", "\\delta", !0);
h(m, _, le, "ϵ", "\\epsilon", !0);
h(m, _, le, "ζ", "\\zeta", !0);
h(m, _, le, "η", "\\eta", !0);
h(m, _, le, "θ", "\\theta", !0);
h(m, _, le, "ι", "\\iota", !0);
h(m, _, le, "κ", "\\kappa", !0);
h(m, _, le, "λ", "\\lambda", !0);
h(m, _, le, "μ", "\\mu", !0);
h(m, _, le, "ν", "\\nu", !0);
h(m, _, le, "ξ", "\\xi", !0);
h(m, _, le, "ο", "\\omicron", !0);
h(m, _, le, "π", "\\pi", !0);
h(m, _, le, "ρ", "\\rho", !0);
h(m, _, le, "σ", "\\sigma", !0);
h(m, _, le, "τ", "\\tau", !0);
h(m, _, le, "υ", "\\upsilon", !0);
h(m, _, le, "ϕ", "\\phi", !0);
h(m, _, le, "χ", "\\chi", !0);
h(m, _, le, "ψ", "\\psi", !0);
h(m, _, le, "ω", "\\omega", !0);
h(m, _, le, "ε", "\\varepsilon", !0);
h(m, _, le, "ϑ", "\\vartheta", !0);
h(m, _, le, "ϖ", "\\varpi", !0);
h(m, _, le, "ϱ", "\\varrho", !0);
h(m, _, le, "ς", "\\varsigma", !0);
h(m, _, le, "φ", "\\varphi", !0);
h(m, _, Q, "∗", "*", !0);
h(m, _, Q, "+", "+");
h(m, _, Q, "−", "-", !0);
h(m, _, Q, "⋅", "\\cdot", !0);
h(m, _, Q, "∘", "\\circ", !0);
h(m, _, Q, "÷", "\\div", !0);
h(m, _, Q, "±", "\\pm", !0);
h(m, _, Q, "×", "\\times", !0);
h(m, _, Q, "∩", "\\cap", !0);
h(m, _, Q, "∪", "\\cup", !0);
h(m, _, Q, "∖", "\\setminus", !0);
h(m, _, Q, "∧", "\\land");
h(m, _, Q, "∨", "\\lor");
h(m, _, Q, "∧", "\\wedge", !0);
h(m, _, Q, "∨", "\\vee", !0);
h(m, _, M, "√", "\\surd");
h(m, _, b0, "⟨", "\\langle", !0);
h(m, _, b0, "∣", "\\lvert");
h(m, _, b0, "∥", "\\lVert");
h(m, _, e0, "?", "?");
h(m, _, e0, "!", "!");
h(m, _, e0, "⟩", "\\rangle", !0);
h(m, _, e0, "∣", "\\rvert");
h(m, _, e0, "∥", "\\rVert");
h(m, _, x, "=", "=");
h(m, _, x, ":", ":");
h(m, _, x, "≈", "\\approx", !0);
h(m, _, x, "≅", "\\cong", !0);
h(m, _, x, "≥", "\\ge");
h(m, _, x, "≥", "\\geq", !0);
h(m, _, x, "←", "\\gets");
h(m, _, x, ">", "\\gt", !0);
h(m, _, x, "∈", "\\in", !0);
h(m, _, x, "", "\\@not");
h(m, _, x, "⊂", "\\subset", !0);
h(m, _, x, "⊃", "\\supset", !0);
h(m, _, x, "⊆", "\\subseteq", !0);
h(m, _, x, "⊇", "\\supseteq", !0);
h(m, S, x, "⊈", "\\nsubseteq", !0);
h(m, S, x, "⊉", "\\nsupseteq", !0);
h(m, _, x, "⊨", "\\models");
h(m, _, x, "←", "\\leftarrow", !0);
h(m, _, x, "≤", "\\le");
h(m, _, x, "≤", "\\leq", !0);
h(m, _, x, "<", "\\lt", !0);
h(m, _, x, "→", "\\rightarrow", !0);
h(m, _, x, "→", "\\to");
h(m, S, x, "≱", "\\ngeq", !0);
h(m, S, x, "≰", "\\nleq", !0);
h(m, _, Ur, " ", "\\ ");
h(m, _, Ur, " ", "\\space");
h(m, _, Ur, " ", "\\nobreakspace");
h(U, _, Ur, " ", "\\ ");
h(U, _, Ur, " ", " ");
h(U, _, Ur, " ", "\\space");
h(U, _, Ur, " ", "\\nobreakspace");
h(m, _, Ur, null, "\\nobreak");
h(m, _, Ur, null, "\\allowbreak");
h(m, _, Jl, ",", ",");
h(m, _, Jl, ";", ";");
h(m, S, Q, "⊼", "\\barwedge", !0);
h(m, S, Q, "⊻", "\\veebar", !0);
h(m, _, Q, "⊙", "\\odot", !0);
h(m, _, Q, "⊕", "\\oplus", !0);
h(m, _, Q, "⊗", "\\otimes", !0);
h(m, _, M, "∂", "\\partial", !0);
h(m, _, Q, "⊘", "\\oslash", !0);
h(m, S, Q, "⊚", "\\circledcirc", !0);
h(m, S, Q, "⊡", "\\boxdot", !0);
h(m, _, Q, "△", "\\bigtriangleup");
h(m, _, Q, "▽", "\\bigtriangledown");
h(m, _, Q, "†", "\\dagger");
h(m, _, Q, "⋄", "\\diamond");
h(m, _, Q, "⋆", "\\star");
h(m, _, Q, "◃", "\\triangleleft");
h(m, _, Q, "▹", "\\triangleright");
h(m, _, b0, "{", "\\{");
h(U, _, M, "{", "\\{");
h(U, _, M, "{", "\\textbraceleft");
h(m, _, e0, "}", "\\}");
h(U, _, M, "}", "\\}");
h(U, _, M, "}", "\\textbraceright");
h(m, _, b0, "{", "\\lbrace");
h(m, _, e0, "}", "\\rbrace");
h(m, _, b0, "[", "\\lbrack", !0);
h(U, _, M, "[", "\\lbrack", !0);
h(m, _, e0, "]", "\\rbrack", !0);
h(U, _, M, "]", "\\rbrack", !0);
h(m, _, b0, "(", "\\lparen", !0);
h(m, _, e0, ")", "\\rparen", !0);
h(U, _, M, "<", "\\textless", !0);
h(U, _, M, ">", "\\textgreater", !0);
h(m, _, b0, "⌊", "\\lfloor", !0);
h(m, _, e0, "⌋", "\\rfloor", !0);
h(m, _, b0, "⌈", "\\lceil", !0);
h(m, _, e0, "⌉", "\\rceil", !0);
h(m, _, M, "\\", "\\backslash");
h(m, _, M, "∣", "|");
h(m, _, M, "∣", "\\vert");
h(U, _, M, "|", "\\textbar", !0);
h(m, _, M, "∥", "\\|");
h(m, _, M, "∥", "\\Vert");
h(U, _, M, "∥", "\\textbardbl");
h(U, _, M, "~", "\\textasciitilde");
h(U, _, M, "\\", "\\textbackslash");
h(U, _, M, "^", "\\textasciicircum");
h(m, _, x, "↑", "\\uparrow", !0);
h(m, _, x, "⇑", "\\Uparrow", !0);
h(m, _, x, "↓", "\\downarrow", !0);
h(m, _, x, "⇓", "\\Downarrow", !0);
h(m, _, x, "↕", "\\updownarrow", !0);
h(m, _, x, "⇕", "\\Updownarrow", !0);
h(m, _, mt, "∐", "\\coprod");
h(m, _, mt, "⋁", "\\bigvee");
h(m, _, mt, "⋀", "\\bigwedge");
h(m, _, mt, "⨄", "\\biguplus");
h(m, _, mt, "⋂", "\\bigcap");
h(m, _, mt, "⋃", "\\bigcup");
h(m, _, mt, "∫", "\\int");
h(m, _, mt, "∫", "\\intop");
h(m, _, mt, "∬", "\\iint");
h(m, _, mt, "∭", "\\iiint");
h(m, _, mt, "∏", "\\prod");
h(m, _, mt, "∑", "\\sum");
h(m, _, mt, "⨂", "\\bigotimes");
h(m, _, mt, "⨁", "\\bigoplus");
h(m, _, mt, "⨀", "\\bigodot");
h(m, _, mt, "∮", "\\oint");
h(m, _, mt, "∯", "\\oiint");
h(m, _, mt, "∰", "\\oiiint");
h(m, _, mt, "⨆", "\\bigsqcup");
h(m, _, mt, "∫", "\\smallint");
h(U, _, da, "…", "\\textellipsis");
h(m, _, da, "…", "\\mathellipsis");
h(U, _, da, "…", "\\ldots", !0);
h(m, _, da, "…", "\\ldots", !0);
h(m, _, da, "⋯", "\\@cdots", !0);
h(m, _, da, "⋱", "\\ddots", !0);
h(m, _, M, "⋮", "\\varvdots");
h(m, _, Ke, "ˊ", "\\acute");
h(m, _, Ke, "ˋ", "\\grave");
h(m, _, Ke, "¨", "\\ddot");
h(m, _, Ke, "~", "\\tilde");
h(m, _, Ke, "ˉ", "\\bar");
h(m, _, Ke, "˘", "\\breve");
h(m, _, Ke, "ˇ", "\\check");
h(m, _, Ke, "^", "\\hat");
h(m, _, Ke, "⃗", "\\vec");
h(m, _, Ke, "˙", "\\dot");
h(m, _, Ke, "˚", "\\mathring");
h(m, _, le, "", "\\@imath");
h(m, _, le, "", "\\@jmath");
h(m, _, M, "ı", "ı");
h(m, _, M, "ȷ", "ȷ");
h(U, _, M, "ı", "\\i", !0);
h(U, _, M, "ȷ", "\\j", !0);
h(U, _, M, "ß", "\\ss", !0);
h(U, _, M, "æ", "\\ae", !0);
h(U, _, M, "œ", "\\oe", !0);
h(U, _, M, "ø", "\\o", !0);
h(U, _, M, "Æ", "\\AE", !0);
h(U, _, M, "Œ", "\\OE", !0);
h(U, _, M, "Ø", "\\O", !0);
h(U, _, Ke, "ˊ", "\\'");
h(U, _, Ke, "ˋ", "\\`");
h(U, _, Ke, "ˆ", "\\^");
h(U, _, Ke, "˜", "\\~");
h(U, _, Ke, "ˉ", "\\=");
h(U, _, Ke, "˘", "\\u");
h(U, _, Ke, "˙", "\\.");
h(U, _, Ke, "¸", "\\c");
h(U, _, Ke, "˚", "\\r");
h(U, _, Ke, "ˇ", "\\v");
h(U, _, Ke, "¨", '\\"');
h(U, _, Ke, "˝", "\\H");
h(U, _, Ke, "◯", "\\textcircled");
var wd = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
h(U, _, M, "–", "--", !0);
h(U, _, M, "–", "\\textendash");
h(U, _, M, "—", "---", !0);
h(U, _, M, "—", "\\textemdash");
h(U, _, M, "‘", "`", !0);
h(U, _, M, "‘", "\\textquoteleft");
h(U, _, M, "’", "'", !0);
h(U, _, M, "’", "\\textquoteright");
h(U, _, M, "“", "``", !0);
h(U, _, M, "“", "\\textquotedblleft");
h(U, _, M, "”", "''", !0);
h(U, _, M, "”", "\\textquotedblright");
h(m, _, M, "°", "\\degree", !0);
h(U, _, M, "°", "\\degree");
h(U, _, M, "°", "\\textdegree", !0);
h(m, _, M, "£", "\\pounds");
h(m, _, M, "£", "\\mathsterling", !0);
h(U, _, M, "£", "\\pounds");
h(U, _, M, "£", "\\textsterling", !0);
h(m, S, M, "✠", "\\maltese");
h(U, S, M, "✠", "\\maltese");
var V1 = '0123456789/@."';
for (var js = 0; js < V1.length; js++) {
  var j1 = V1.charAt(js);
  h(m, _, M, j1, j1);
}
var W1 = '0123456789!@*()-=+";:?/.,';
for (var Ws = 0; Ws < W1.length; Ws++) {
  var X1 = W1.charAt(Ws);
  h(U, _, M, X1, X1);
}
var Fl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Xs = 0; Xs < Fl.length; Xs++) {
  var qi = Fl.charAt(Xs);
  h(m, _, le, qi, qi), h(U, _, M, qi, qi);
}
h(m, S, M, "C", "ℂ");
h(U, S, M, "C", "ℂ");
h(m, S, M, "H", "ℍ");
h(U, S, M, "H", "ℍ");
h(m, S, M, "N", "ℕ");
h(U, S, M, "N", "ℕ");
h(m, S, M, "P", "ℙ");
h(U, S, M, "P", "ℙ");
h(m, S, M, "Q", "ℚ");
h(U, S, M, "Q", "ℚ");
h(m, S, M, "R", "ℝ");
h(U, S, M, "R", "ℝ");
h(m, S, M, "Z", "ℤ");
h(U, S, M, "Z", "ℤ");
h(m, _, le, "h", "ℎ");
h(U, _, le, "h", "ℎ");
var fe = "";
for (var Zt = 0; Zt < Fl.length; Zt++) {
  var at = Fl.charAt(Zt);
  fe = String.fromCharCode(55349, 56320 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56372 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56424 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56580 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56684 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56736 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56788 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56840 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56944 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), Zt < 26 && (fe = String.fromCharCode(55349, 56632 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe), fe = String.fromCharCode(55349, 56476 + Zt), h(m, _, le, at, fe), h(U, _, M, at, fe));
}
fe = "𝕜";
h(m, _, le, "k", fe);
h(U, _, M, "k", fe);
for (var kn = 0; kn < 10; kn++) {
  var Zr = kn.toString();
  fe = String.fromCharCode(55349, 57294 + kn), h(m, _, le, Zr, fe), h(U, _, M, Zr, fe), fe = String.fromCharCode(55349, 57314 + kn), h(m, _, le, Zr, fe), h(U, _, M, Zr, fe), fe = String.fromCharCode(55349, 57324 + kn), h(m, _, le, Zr, fe), h(U, _, M, Zr, fe), fe = String.fromCharCode(55349, 57334 + kn), h(m, _, le, Zr, fe), h(U, _, M, Zr, fe);
}
var Wo = "ÐÞþ";
for (var Ys = 0; Ys < Wo.length; Ys++) {
  var Pi = Wo.charAt(Ys);
  h(m, _, le, Pi, Pi), h(U, _, M, Pi, Pi);
}
var Hi = [
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
], Y1 = [
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
], Y5 = function(e, t) {
  var r = e.charCodeAt(0), a = e.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var s = Math.floor((i - 119808) / 26);
    return [Hi[s][2], Hi[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [Y1[o][2], Y1[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [Hi[0][2], Hi[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new X("Unsupported character: " + e);
  }
}, Ql = function(e, t, r) {
  return Ge[r][e] && Ge[r][e].replace && (e = Ge[r][e].replace), {
    value: e,
    metrics: Au(e, t, r)
  };
}, W0 = function(e, t, r, a, i) {
  var l = Ql(e, t, r), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var u = s.italic;
    (r === "text" || a && a.font === "mathit") && (u = 0), o = new I0(e, s.height, s.depth, u, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), o = new I0(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var c = a.getColor();
    c && (o.style.color = c);
  }
  return o;
}, Z5 = function(e, t, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && Ql(e, "Main-Bold", t).metrics ? W0(e, "Main-Bold", t, r, a.concat(["mathbf"])) : e === "\\" || Ge[t][e].font === "main" ? W0(e, "Main-Regular", t, r, a) : W0(e, "AMS-Regular", t, r, a.concat(["amsrm"]));
}, K5 = function(e, t, r, a, i) {
  return i !== "textord" && Ql(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, J5 = function(e, t, r) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, u = "", c = "";
  if (i.charCodeAt(0) === 55349 && ([u, c] = Y5(i, a)), u.length > 0)
    return W0(i, u, a, t, l.concat(c));
  if (o) {
    var d, f;
    if (o === "boldsymbol") {
      var p = K5(i, a, t, l, r);
      d = p.fontName, f = [p.fontClass];
    } else s ? (d = Dd[o].fontName, f = [o]) : (d = Ui(o, t.fontWeight, t.fontShape), f = [o, t.fontWeight, t.fontShape]);
    if (Ql(i, d, a).metrics)
      return W0(i, d, a, t, l.concat(f));
    if (wd.hasOwnProperty(i) && d.slice(0, 10) === "Typewriter") {
      for (var g = [], b = 0; b < i.length; b++)
        g.push(W0(i[b], d, a, t, l.concat(f)));
      return kd(g);
    }
  }
  if (r === "mathord")
    return W0(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var A = Ge[a][i] && Ge[a][i].font;
    if (A === "ams") {
      var w = Ui("amsrm", t.fontWeight, t.fontShape);
      return W0(i, w, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (A === "main" || !A) {
      var k = Ui("textrm", t.fontWeight, t.fontShape);
      return W0(i, k, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var y = Ui(A, t.fontWeight, t.fontShape);
      return W0(i, y, a, t, l.concat(y, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, Q5 = (n, e) => {
  if (cn(n.classes) !== cn(e.classes) || n.skew !== e.skew || n.maxFontSize !== e.maxFontSize)
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
}, $5 = (n) => {
  for (var e = 0; e < n.length - 1; e++) {
    var t = n[e], r = n[e + 1];
    t instanceof I0 && r instanceof I0 && Q5(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, n.splice(e + 1, 1), e--);
  }
  return n;
}, Su = function(e) {
  for (var t = 0, r = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = a;
}, i0 = function(e, t, r, a) {
  var i = new li(e, t, r, a);
  return Su(i), i;
}, yd = (n, e, t, r) => new li(n, e, t, r), e3 = function(e, t, r) {
  var a = i0([e], [], t);
  return a.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = Z(a.height), a.maxFontSize = 1, a;
}, t3 = function(e, t, r, a) {
  var i = new Eu(e, t, r, a);
  return Su(i), i;
}, kd = function(e) {
  var t = new ii(e);
  return Su(t), t;
}, r3 = function(e, t) {
  return e instanceof ii ? i0([], [e], t) : e;
}, n3 = function(e) {
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
  var u;
  if (e.positionType === "top") {
    for (var c = e.positionData, d = 0; d < e.children.length; d++) {
      var f = e.children[d];
      c -= f.type === "kern" ? f.size : f.elem.height + f.elem.depth;
    }
    u = c;
  } else if (e.positionType === "bottom")
    u = -e.positionData;
  else {
    var p = e.children[0];
    if (p.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      u = -p.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      u = -p.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: u
  };
}, a3 = function(e, t) {
  for (var {
    children: r,
    depth: a
  } = n3(e), i = 0, l = 0; l < r.length; l++) {
    var s = r[l];
    if (s.type === "elem") {
      var o = s.elem;
      i = Math.max(i, o.maxFontSize, o.height);
    }
  }
  i += 2;
  var u = i0(["pstrut"], []);
  u.style.height = Z(i);
  for (var c = [], d = a, f = a, p = a, g = 0; g < r.length; g++) {
    var b = r[g];
    if (b.type === "kern")
      p += b.size;
    else {
      var A = b.elem, w = b.wrapperClasses || [], k = b.wrapperStyle || {}, y = i0(w, [u, A], void 0, k);
      y.style.top = Z(-i - p - A.depth), b.marginLeft && (y.style.marginLeft = b.marginLeft), b.marginRight && (y.style.marginRight = b.marginRight), c.push(y), p += A.height + A.depth;
    }
    d = Math.min(d, p), f = Math.max(f, p);
  }
  var D = i0(["vlist"], c);
  D.style.height = Z(f);
  var E;
  if (d < 0) {
    var T = i0([], []), F = i0(["vlist"], [T]);
    F.style.height = Z(-d);
    var C = i0(["vlist-s"], [new I0("​")]);
    E = [i0(["vlist-r"], [D, C]), i0(["vlist-r"], [F])];
  } else
    E = [i0(["vlist-r"], [D])];
  var B = i0(["vlist-t"], E);
  return E.length === 2 && B.classes.push("vlist-t2"), B.height = f, B.depth = -d, B;
}, i3 = (n, e) => {
  var t = i0(["mspace"], [], e), r = et(n, e);
  return t.style.marginRight = Z(r), t;
}, Ui = function(e, t, r) {
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
}, Dd = {
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
}, Ad = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, l3 = function(e, t) {
  var [r, a, i] = Ad[e], l = new fn(r), s = new Lr([l], {
    width: Z(a),
    height: Z(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Z(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = yd(["overlay"], [s], t);
  return o.height = i, o.style.height = Z(i), o.style.width = Z(a), o;
}, N = {
  fontMap: Dd,
  makeSymbol: W0,
  mathsym: Z5,
  makeSpan: i0,
  makeSvgSpan: yd,
  makeLineSpan: e3,
  makeAnchor: t3,
  makeFragment: kd,
  wrapFragment: r3,
  makeVList: a3,
  makeOrd: J5,
  makeGlue: i3,
  staticSvg: l3,
  svgData: Ad,
  tryCombineChars: $5
}, $e = {
  number: 3,
  unit: "mu"
}, Dn = {
  number: 4,
  unit: "mu"
}, Dr = {
  number: 5,
  unit: "mu"
}, s3 = {
  mord: {
    mop: $e,
    mbin: Dn,
    mrel: Dr,
    minner: $e
  },
  mop: {
    mord: $e,
    mop: $e,
    mrel: Dr,
    minner: $e
  },
  mbin: {
    mord: Dn,
    mop: Dn,
    mopen: Dn,
    minner: Dn
  },
  mrel: {
    mord: Dr,
    mop: Dr,
    mopen: Dr,
    minner: Dr
  },
  mopen: {},
  mclose: {
    mop: $e,
    mbin: Dn,
    mrel: Dr,
    minner: $e
  },
  mpunct: {
    mord: $e,
    mop: $e,
    mrel: Dr,
    mopen: $e,
    mclose: $e,
    mpunct: $e,
    minner: $e
  },
  minner: {
    mord: $e,
    mop: $e,
    mbin: Dn,
    mrel: Dr,
    mopen: $e,
    mpunct: $e,
    minner: $e
  }
}, o3 = {
  mord: {
    mop: $e
  },
  mop: {
    mord: $e,
    mop: $e
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: $e
  },
  mpunct: {},
  minner: {
    mop: $e
  }
}, Ed = {}, Cl = {}, Ml = {};
function J(n) {
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
    Ed[t[o]] = s;
  e && (i && (Cl[e] = i), l && (Ml[e] = l));
}
function Nn(n) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = n;
  J({
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
var zl = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, ot = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Nr = N.makeSpan, u3 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], c3 = ["rightmost", "mrel", "mclose", "mpunct"], f3 = {
  display: se.DISPLAY,
  text: se.TEXT,
  script: se.SCRIPT,
  scriptscript: se.SCRIPTSCRIPT
}, h3 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, yt = function(e, t, r, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var s = Te(e[l], t);
    if (s instanceof ii) {
      var o = s.children;
      i.push(...o);
    } else
      i.push(s);
  }
  if (N.tryCombineChars(i), !r)
    return i;
  var u = t;
  if (e.length === 1) {
    var c = e[0];
    c.type === "sizing" ? u = t.havingSize(c.size) : c.type === "styling" && (u = t.havingStyle(f3[c.style]));
  }
  var d = Nr([a[0] || "leftmost"], [], t), f = Nr([a[1] || "rightmost"], [], t), p = r === "root";
  return Z1(i, (g, b) => {
    var A = b.classes[0], w = g.classes[0];
    A === "mbin" && ie.contains(c3, w) ? b.classes[0] = "mord" : w === "mbin" && ie.contains(u3, A) && (g.classes[0] = "mord");
  }, {
    node: d
  }, f, p), Z1(i, (g, b) => {
    var A = Xo(b), w = Xo(g), k = A && w ? g.hasClass("mtight") ? o3[A][w] : s3[A][w] : null;
    if (k)
      return N.makeGlue(k, u);
  }, {
    node: d
  }, f, p), i;
}, Z1 = function n(e, t, r, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = Sd(s);
    if (o) {
      n(o.children, t, r, null, i);
      continue;
    }
    var u = !s.hasClass("mspace");
    if (u) {
      var c = t(s, r.node);
      c && (r.insertAfter ? r.insertAfter(c) : (e.unshift(c), l++));
    }
    u ? r.node = s : i && s.hasClass("newline") && (r.node = Nr(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((d) => (f) => {
      e.splice(d + 1, 0, f), l++;
    })(l);
  }
  a && e.pop();
}, Sd = function(e) {
  return e instanceof ii || e instanceof Eu || e instanceof li && e.hasClass("enclosing") ? e : null;
}, d3 = function n(e, t) {
  var r = Sd(e);
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
}, Xo = function(e, t) {
  return e ? (t && (e = d3(e, t)), h3[e.classes[0]] || null) : null;
}, $a = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Nr(t.concat(r));
}, Te = function(e, t, r) {
  if (!e)
    return Nr();
  if (Cl[e.type]) {
    var a = Cl[e.type](e, t);
    if (r && t.size !== r.size) {
      a = Nr(t.sizingClasses(r), [a], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new X("Got group of unknown type: '" + e.type + "'");
};
function Gi(n, e) {
  var t = Nr(["base"], n, e), r = Nr(["strut"]);
  return r.style.height = Z(t.height + t.depth), t.depth && (r.style.verticalAlign = Z(-t.depth)), t.children.unshift(r), t;
}
function Yo(n, e) {
  var t = null;
  n.length === 1 && n[0].type === "tag" && (t = n[0].tag, n = n[0].body);
  var r = yt(n, e, "root"), a;
  r.length === 2 && r[1].hasClass("tag") && (a = r.pop());
  for (var i = [], l = [], s = 0; s < r.length; s++)
    if (l.push(r[s]), r[s].hasClass("mbin") || r[s].hasClass("mrel") || r[s].hasClass("allowbreak")) {
      for (var o = !1; s < r.length - 1 && r[s + 1].hasClass("mspace") && !r[s + 1].hasClass("newline"); )
        s++, l.push(r[s]), r[s].hasClass("nobreak") && (o = !0);
      o || (i.push(Gi(l, e)), l = []);
    } else r[s].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(Gi(l, e)), l = []), i.push(r[s]));
  l.length > 0 && i.push(Gi(l, e));
  var u;
  t ? (u = Gi(yt(t, e, !0)), u.classes = ["tag"], i.push(u)) : a && i.push(a);
  var c = Nr(["katex-html"], i);
  if (c.setAttribute("aria-hidden", "true"), u) {
    var d = u.children[0];
    d.style.height = Z(c.height + c.depth), c.depth && (d.style.verticalAlign = Z(-c.depth));
  }
  return c;
}
function xd(n) {
  return new ii(n);
}
class T0 {
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
    this.classes.length > 0 && (e.className = cn(this.classes));
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += ie.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + ie.escape(cn(this.classes)) + '"'), e += ">";
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
class Ua {
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
    return ie.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class m3 {
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
    return e.setAttribute("width", Z(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + Z(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var j = {
  MathNode: T0,
  TextNode: Ua,
  SpaceNode: m3,
  newDocumentFragment: xd
}, L0 = function(e, t, r) {
  return Ge[t][e] && Ge[t][e].replace && e.charCodeAt(0) !== 55349 && !(wd.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = Ge[t][e].replace), new j.TextNode(e);
}, xu = function(e) {
  return e.length === 1 ? e[0] : new j.MathNode("mrow", e);
}, Tu = function(e, t) {
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
  if (ie.contains(["\\imath", "\\jmath"], i))
    return null;
  Ge[a][i] && Ge[a][i].replace && (i = Ge[a][i].replace);
  var l = N.fontMap[r].fontName;
  return Au(i, l, a) ? N.fontMap[r].variant : null;
}, o0 = function(e, t, r) {
  if (e.length === 1) {
    var a = He(e[0], t);
    return r && a instanceof T0 && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = He(e[s], t);
    if (o instanceof T0 && l instanceof T0) {
      if (o.type === "mtext" && l.type === "mtext" && o.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mi" && o.children.length === 1 && l.type === "mn") {
        var u = o.children[0];
        if (u instanceof Ua && u.text === ".") {
          l.children.push(...o.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var c = l.children[0];
        if (c instanceof Ua && c.text === "̸" && (o.type === "mo" || o.type === "mi" || o.type === "mn")) {
          var d = o.children[0];
          d instanceof Ua && d.text.length > 0 && (d.text = d.text.slice(0, 1) + "̸" + d.text.slice(1), i.pop());
        }
      }
    }
    i.push(o), l = o;
  }
  return i;
}, hn = function(e, t, r) {
  return xu(o0(e, t, r));
}, He = function(e, t) {
  if (!e)
    return new j.MathNode("mrow");
  if (Ml[e.type]) {
    var r = Ml[e.type](e, t);
    return r;
  } else
    throw new X("Got group of unknown type: '" + e.type + "'");
};
function K1(n, e, t, r, a) {
  var i = o0(n, t), l;
  i.length === 1 && i[0] instanceof T0 && ie.contains(["mrow", "mtable"], i[0].type) ? l = i[0] : l = new j.MathNode("mrow", i);
  var s = new j.MathNode("annotation", [new j.TextNode(e)]);
  s.setAttribute("encoding", "application/x-tex");
  var o = new j.MathNode("semantics", [l, s]), u = new j.MathNode("math", [o]);
  u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && u.setAttribute("display", "block");
  var c = a ? "katex" : "katex-mathml";
  return N.makeSpan([c], [u]);
}
var Td = function(e) {
  return new Sr({
    style: e.displayMode ? se.DISPLAY : se.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Fd = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = N.makeSpan(r, [e]);
  }
  return e;
}, p3 = function(e, t, r) {
  var a = Td(r), i;
  if (r.output === "mathml")
    return K1(e, t, a, r.displayMode, !0);
  if (r.output === "html") {
    var l = Yo(e, a);
    i = N.makeSpan(["katex"], [l]);
  } else {
    var s = K1(e, t, a, r.displayMode, !1), o = Yo(e, a);
    i = N.makeSpan(["katex"], [s, o]);
  }
  return Fd(i, r);
}, g3 = function(e, t, r) {
  var a = Td(r), i = Yo(e, a), l = N.makeSpan(["katex"], [i]);
  return Fd(l, r);
}, _3 = {
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
}, v3 = function(e) {
  var t = new j.MathNode("mo", [new j.TextNode(_3[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, b3 = {
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
}, w3 = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, y3 = function(e, t) {
  function r() {
    var s = 4e5, o = e.label.slice(1);
    if (ie.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var u = e, c = w3(u.base), d, f, p;
      if (c > 5)
        o === "widehat" || o === "widecheck" ? (d = 420, s = 2364, p = 0.42, f = o + "4") : (d = 312, s = 2340, p = 0.34, f = "tilde4");
      else {
        var g = [1, 1, 2, 2, 3, 3][c];
        o === "widehat" || o === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][g], d = [0, 239, 300, 360, 420][g], p = [0, 0.24, 0.3, 0.3, 0.36, 0.42][g], f = o + g) : (s = [0, 600, 1033, 2339, 2340][g], d = [0, 260, 286, 306, 312][g], p = [0, 0.26, 0.286, 0.3, 0.306, 0.34][g], f = "tilde" + g);
      }
      var b = new fn(f), A = new Lr([b], {
        width: "100%",
        height: Z(p),
        viewBox: "0 0 " + s + " " + d,
        preserveAspectRatio: "none"
      });
      return {
        span: N.makeSvgSpan([], [A], t),
        minWidth: 0,
        height: p
      };
    } else {
      var w = [], k = b3[o], [y, D, E] = k, T = E / 1e3, F = y.length, C, B;
      if (F === 1) {
        var L = k[3];
        C = ["hide-tail"], B = [L];
      } else if (F === 2)
        C = ["halfarrow-left", "halfarrow-right"], B = ["xMinYMin", "xMaxYMin"];
      else if (F === 3)
        C = ["brace-left", "brace-center", "brace-right"], B = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + F + " children.");
      for (var I = 0; I < F; I++) {
        var P = new fn(y[I]), $ = new Lr([P], {
          width: "400em",
          height: Z(T),
          viewBox: "0 0 " + s + " " + E,
          preserveAspectRatio: B[I] + " slice"
        }), O = N.makeSvgSpan([C[I]], [$], t);
        if (F === 1)
          return {
            span: O,
            minWidth: D,
            height: T
          };
        O.style.height = Z(T), w.push(O);
      }
      return {
        span: N.makeSpan(["stretchy"], w, t),
        minWidth: D,
        height: T
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: l
  } = r();
  return a.height = l, a.style.height = Z(l), i > 0 && (a.style.minWidth = Z(i)), a;
}, k3 = function(e, t, r, a, i) {
  var l, s = e.height + e.depth + r + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = N.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var o = i.color && i.getColor();
      o && (l.style.borderColor = o);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new jo({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new jo({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var c = new Lr(u, {
      width: "100%",
      height: Z(s)
    });
    l = N.makeSvgSpan([], [c], i);
  }
  return l.height = s, l.style.height = Z(s), l;
}, Rr = {
  encloseSpan: k3,
  mathMLnode: v3,
  svgSpan: y3
};
function be(n, e) {
  if (!n || n.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function Fu(n) {
  var e = $l(n);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return e;
}
function $l(n) {
  return n && (n.type === "atom" || X5.hasOwnProperty(n.type)) ? n : null;
}
var Cu = (n, e) => {
  var t, r, a;
  n && n.type === "supsub" ? (r = be(n.base, "accent"), t = r.base, n.base = t, a = j5(Te(n, e)), n.base = r) : (r = be(n, "accent"), t = r.base);
  var i = Te(t, e.havingCrampedStyle()), l = r.isShifty && ie.isCharacterBox(t), s = 0;
  if (l) {
    var o = ie.getBaseElem(t), u = Te(o, e.havingCrampedStyle());
    s = G1(u).skew;
  }
  var c = r.label === "\\c", d = c ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), f;
  if (r.isStretchy)
    f = Rr.svgSpan(r, e), f = N.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: f,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + Z(2 * s) + ")",
          marginLeft: Z(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var p, g;
    r.label === "\\vec" ? (p = N.staticSvg("vec", e), g = N.svgData.vec[1]) : (p = N.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), p = G1(p), p.italic = 0, g = p.width, c && (d += p.depth)), f = N.makeSpan(["accent-body"], [p]);
    var b = r.label === "\\textcircled";
    b && (f.classes.push("accent-full"), d = i.height);
    var A = s;
    b || (A -= g / 2), f.style.left = Z(A), r.label === "\\textcircled" && (f.style.top = ".2em"), f = N.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -d
      }, {
        type: "elem",
        elem: f
      }]
    }, e);
  }
  var w = N.makeSpan(["mord", "accent"], [f], e);
  return a ? (a.children[0] = w, a.height = Math.max(w.height, a.height), a.classes[0] = "mord", a) : w;
}, Cd = (n, e) => {
  var t = n.isStretchy ? Rr.mathMLnode(n.label) : new j.MathNode("mo", [L0(n.label, n.mode)]), r = new j.MathNode("mover", [He(n.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, D3 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
J({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var t = zl(e[0]), r = !D3.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Cu,
  mathmlBuilder: Cd
});
J({
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
  htmlBuilder: Cu,
  mathmlBuilder: Cd
});
J({
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
    var t = Te(n.base, e), r = Rr.svgSpan(n, e), a = n.label === "\\utilde" ? 0.12 : 0, i = N.makeVList({
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
    return N.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = Rr.mathMLnode(n.label), r = new j.MathNode("munder", [He(n.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var Vi = (n) => {
  var e = new j.MathNode("mpadded", n ? [n] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
J({
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
    var t = e.style, r = e.havingStyle(t.sup()), a = N.wrapFragment(Te(n.body, r, e), e), i = n.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    n.below && (r = e.havingStyle(t.sub()), l = N.wrapFragment(Te(n.below, r, e), e), l.classes.push(i + "-arrow-pad"));
    var s = Rr.svgSpan(n, e), o = -e.fontMetrics().axisHeight + 0.5 * s.height, u = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
    (a.depth > 0.25 || n.label === "\\xleftequilibrium") && (u -= a.depth);
    var c;
    if (l) {
      var d = -e.fontMetrics().axisHeight + l.height + 0.5 * s.height + 0.111;
      c = N.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
        }, {
          type: "elem",
          elem: s,
          shift: o
        }, {
          type: "elem",
          elem: l,
          shift: d
        }]
      }, e);
    } else
      c = N.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
        }, {
          type: "elem",
          elem: s,
          shift: o
        }]
      }, e);
    return c.children[0].children[0].children[1].classes.push("svg-align"), N.makeSpan(["mrel", "x-arrow"], [c], e);
  },
  mathmlBuilder(n, e) {
    var t = Rr.mathMLnode(n.label);
    t.setAttribute("minsize", n.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (n.body) {
      var a = Vi(He(n.body, e));
      if (n.below) {
        var i = Vi(He(n.below, e));
        r = new j.MathNode("munderover", [t, i, a]);
      } else
        r = new j.MathNode("mover", [t, a]);
    } else if (n.below) {
      var l = Vi(He(n.below, e));
      r = new j.MathNode("munder", [t, l]);
    } else
      r = Vi(), r = new j.MathNode("mover", [t, r]);
    return r;
  }
});
var A3 = N.makeSpan;
function Md(n, e) {
  var t = yt(n.body, e, !0);
  return A3([n.mclass], t, e);
}
function zd(n, e) {
  var t, r = o0(n.body, e);
  return n.mclass === "minner" ? t = new j.MathNode("mpadded", r) : n.mclass === "mord" ? n.isCharacterBox ? (t = r[0], t.type = "mi") : t = new j.MathNode("mi", r) : (n.isCharacterBox ? (t = r[0], t.type = "mo") : t = new j.MathNode("mo", r), n.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : n.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : n.mclass === "mopen" || n.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : n.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
J({
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
      body: ot(a),
      isCharacterBox: ie.isCharacterBox(a)
    };
  },
  htmlBuilder: Md,
  mathmlBuilder: zd
});
var es = (n) => {
  var e = n.type === "ordgroup" && n.body.length ? n.body[0] : n;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
J({
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
      mclass: es(e[0]),
      body: ot(e[1]),
      isCharacterBox: ie.isCharacterBox(e[1])
    };
  }
});
J({
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
    r !== "\\stackrel" ? l = es(a) : l = "mrel";
    var s = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: ot(a)
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
      isCharacterBox: ie.isCharacterBox(o)
    };
  },
  htmlBuilder: Md,
  mathmlBuilder: zd
});
J({
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
      mclass: es(e[0]),
      body: ot(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = yt(n.body, e, !0), r = N.makeSpan([n.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, e) {
    var t = o0(n.body, e), r = new j.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var E3 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, J1 = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Q1 = (n) => n.type === "textord" && n.text === "@", S3 = (n, e) => (n.type === "mathord" || n.type === "atom") && n.text === e;
function x3(n, e, t) {
  var r = E3[n];
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
      var u = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [u], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function T3(n) {
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
      throw new X("Expected \\\\ or \\cr or \\end", n.nextToken);
  }
  for (var r = [], a = [r], i = 0; i < e.length; i++) {
    for (var l = e[i], s = J1(), o = 0; o < l.length; o++)
      if (!Q1(l[o]))
        s.body.push(l[o]);
      else {
        r.push(s), o += 1;
        var u = Fu(l[o]).text, c = new Array(2);
        if (c[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, c[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(u) > -1)) if ("<>AV".indexOf(u) > -1)
          for (var d = 0; d < 2; d++) {
            for (var f = !0, p = o + 1; p < l.length; p++) {
              if (S3(l[p], u)) {
                f = !1, o = p;
                break;
              }
              if (Q1(l[p]))
                throw new X("Missing a " + u + " character to complete a CD arrow.", l[p]);
              c[d].body.push(l[p]);
            }
            if (f)
              throw new X("Missing a " + u + " character to complete a CD arrow.", l[o]);
          }
        else
          throw new X('Expected one of "<>AV=|." after @', l[o]);
        var g = x3(u, c, n), b = {
          type: "styling",
          body: [g],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(b), s = J1();
      }
    i % 2 === 0 ? r.push(s) : r.shift(), r = [], a.push(r);
  }
  n.gullet.endGroup(), n.gullet.endGroup();
  var A = new Array(a[0].length).fill({
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
    cols: A,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
J({
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
    var t = e.havingStyle(e.style.sup()), r = N.wrapFragment(Te(n.label, t, e), e);
    return r.classes.push("cd-label-" + n.side), r.style.bottom = Z(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mrow", [He(n.label, e)]);
    return t = new j.MathNode("mpadded", [t]), t.setAttribute("width", "0"), n.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new j.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
J({
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
    var t = N.wrapFragment(Te(n.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(n, e) {
    return new j.MathNode("mrow", [He(n.fragment, e)]);
  }
});
J({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    for (var {
      parser: t
    } = n, r = be(e[0], "ordgroup"), a = r.body, i = "", l = 0; l < a.length; l++) {
      var s = be(a[l], "textord");
      i += s.text;
    }
    var o = parseInt(i), u;
    if (isNaN(o))
      throw new X("\\@char has non-numeric argument " + i);
    if (o < 0 || o >= 1114111)
      throw new X("\\@char with invalid code point " + i);
    return o <= 65535 ? u = String.fromCharCode(o) : (o -= 65536, u = String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var Bd = (n, e) => {
  var t = yt(n.body, e.withColor(n.color), !1);
  return N.makeFragment(t);
}, Id = (n, e) => {
  var t = o0(n.body, e.withColor(n.color)), r = new j.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", n.color), r;
};
J({
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
    } = n, r = be(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: ot(a)
    };
  },
  htmlBuilder: Bd,
  mathmlBuilder: Id
});
J({
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
    } = n, a = be(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: Bd,
  mathmlBuilder: Id
});
J({
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
      size: a && be(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(n, e) {
    var t = N.makeSpan(["mspace"], [], e);
    return n.newLine && (t.classes.push("newline"), n.size && (t.style.marginTop = Z(et(n.size, e)))), t;
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mspace");
    return n.newLine && (t.setAttribute("linebreak", "newline"), n.size && t.setAttribute("height", Z(et(n.size, e)))), t;
  }
});
var Zo = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Ld = (n) => {
  var e = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new X("Expected a control sequence", n);
  return e;
}, F3 = (n) => {
  var e = n.gullet.popToken();
  return e.text === "=" && (e = n.gullet.popToken(), e.text === " " && (e = n.gullet.popToken())), e;
}, Nd = (n, e, t, r) => {
  var a = n.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !n.gullet.isExpandable(t.text)
  }), n.gullet.macros.set(e, a, r);
};
J({
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
    if (Zo[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = Zo[r.text]), be(e.parseFunction(), "internal");
    throw new X("Invalid token after macro prefix", r);
  }
});
J({
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
      throw new X("Expected a control sequence", r);
    for (var i = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new X('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new X('Argument number "' + r.text + '" out of order');
        i++, s.push([]);
      } else {
        if (r.text === "EOF")
          throw new X("Expected a macro definition");
        s[i].push(r.text);
      }
    var {
      tokens: o
    } = e.gullet.consumeArg();
    return l && o.unshift(l), (t === "\\edef" || t === "\\xdef") && (o = e.gullet.expandTokens(o), o.reverse()), e.gullet.macros.set(a, {
      tokens: o,
      numArgs: i,
      delimiters: s
    }, t === Zo[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
J({
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
    } = n, r = Ld(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = F3(e);
    return Nd(e, r, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
J({
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
    } = n, r = Ld(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Nd(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var Pa = function(e, t, r) {
  var a = Ge.math[e] && Ge.math[e].replace, i = Au(a || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Mu = function(e, t, r, a) {
  var i = r.havingBaseStyle(t), l = N.makeSpan(a.concat(i.sizingClasses(r)), [e], r), s = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, Rd = function(e, t, r) {
  var a = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = Z(i), e.height -= i, e.depth += i;
}, C3 = function(e, t, r, a, i, l) {
  var s = N.makeSymbol(e, "Main-Regular", i, a), o = Mu(s, t, a, l);
  return r && Rd(o, a, t), o;
}, M3 = function(e, t, r, a) {
  return N.makeSymbol(e, "Size" + t + "-Regular", r, a);
}, Od = function(e, t, r, a, i, l) {
  var s = M3(e, t, i, a), o = Mu(N.makeSpan(["delimsizing", "size" + t], [s], a), se.TEXT, a, l);
  return r && Rd(o, a, se.TEXT), o;
}, Zs = function(e, t, r) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = N.makeSpan(["delimsizinginner", a], [N.makeSpan([], [N.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, Ks = function(e, t, r) {
  var a = sr["Size4-Regular"][e.charCodeAt(0)] ? sr["Size4-Regular"][e.charCodeAt(0)][4] : sr["Size1-Regular"][e.charCodeAt(0)][4], i = new fn("inner", R5(e, Math.round(1e3 * t))), l = new Lr([i], {
    width: Z(a),
    height: Z(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Z(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), s = N.makeSvgSpan([], [l], r);
  return s.height = t, s.style.height = Z(t), s.style.width = Z(a), {
    type: "elem",
    elem: s
  };
}, Ko = 8e-3, ji = {
  type: "kern",
  size: -1 * Ko
}, z3 = ["|", "\\lvert", "\\rvert", "\\vert"], B3 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], qd = function(e, t, r, a, i, l) {
  var s, o, u, c, d = "", f = 0;
  s = u = c = e, o = null;
  var p = "Size1-Regular";
  e === "\\uparrow" ? u = c = "⏐" : e === "\\Uparrow" ? u = c = "‖" : e === "\\downarrow" ? s = u = "⏐" : e === "\\Downarrow" ? s = u = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", u = "⏐", c = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", u = "‖", c = "\\Downarrow") : ie.contains(z3, e) ? (u = "∣", d = "vert", f = 333) : ie.contains(B3, e) ? (u = "∥", d = "doublevert", f = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", u = "⎢", c = "⎣", p = "Size4-Regular", d = "lbrack", f = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", u = "⎥", c = "⎦", p = "Size4-Regular", d = "rbrack", f = 667) : e === "\\lfloor" || e === "⌊" ? (u = s = "⎢", c = "⎣", p = "Size4-Regular", d = "lfloor", f = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", u = c = "⎢", p = "Size4-Regular", d = "lceil", f = 667) : e === "\\rfloor" || e === "⌋" ? (u = s = "⎥", c = "⎦", p = "Size4-Regular", d = "rfloor", f = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", u = c = "⎥", p = "Size4-Regular", d = "rceil", f = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", u = "⎜", c = "⎝", p = "Size4-Regular", d = "lparen", f = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", u = "⎟", c = "⎠", p = "Size4-Regular", d = "rparen", f = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", c = "⎩", u = "⎪", p = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", c = "⎭", u = "⎪", p = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", c = "⎩", u = "⎪", p = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", c = "⎭", u = "⎪", p = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", c = "⎭", u = "⎪", p = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", c = "⎩", u = "⎪", p = "Size4-Regular");
  var g = Pa(s, p, i), b = g.height + g.depth, A = Pa(u, p, i), w = A.height + A.depth, k = Pa(c, p, i), y = k.height + k.depth, D = 0, E = 1;
  if (o !== null) {
    var T = Pa(o, p, i);
    D = T.height + T.depth, E = 2;
  }
  var F = b + y + D, C = Math.max(0, Math.ceil((t - F) / (E * w))), B = F + C * E * w, L = a.fontMetrics().axisHeight;
  r && (L *= a.sizeMultiplier);
  var I = B / 2 - L, P = [];
  if (d.length > 0) {
    var $ = B - b - y, O = Math.round(B * 1e3), K = O5(d, Math.round($ * 1e3)), q = new fn(d, K), he = (f / 1e3).toFixed(3) + "em", ee = (O / 1e3).toFixed(3) + "em", _e = new Lr([q], {
      width: he,
      height: ee,
      viewBox: "0 0 " + f + " " + O
    }), de = N.makeSvgSpan([], [_e], a);
    de.height = O / 1e3, de.style.width = he, de.style.height = ee, P.push({
      type: "elem",
      elem: de
    });
  } else {
    if (P.push(Zs(c, p, i)), P.push(ji), o === null) {
      var re = B - b - y + 2 * Ko;
      P.push(Ks(u, re, a));
    } else {
      var oe = (B - b - y - D) / 2 + 2 * Ko;
      P.push(Ks(u, oe, a)), P.push(ji), P.push(Zs(o, p, i)), P.push(ji), P.push(Ks(u, oe, a));
    }
    P.push(ji), P.push(Zs(s, p, i));
  }
  var ve = a.havingBaseStyle(se.TEXT), Be = N.makeVList({
    positionType: "bottom",
    positionData: I,
    children: P
  }, ve);
  return Mu(N.makeSpan(["delimsizing", "mult"], [Be], ve), se.TEXT, a, l);
}, Js = 80, Qs = 0.08, $s = function(e, t, r, a, i) {
  var l = N5(e, a, r), s = new fn(e, l), o = new Lr([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: Z(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return N.makeSvgSpan(["hide-tail"], [o], i);
}, I3 = function(e, t) {
  var r = t.havingBaseSizing(), a = Gd("\\surd", e * r.sizeMultiplier, Ud, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, u = 0, c = 0, d;
  return a.type === "small" ? (c = 1e3 + 1e3 * l + Js, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + Qs) / i, u = (1 + l) / i, s = $s("sqrtMain", o, c, l, t), s.style.minWidth = "0.853em", d = 0.833 / i) : a.type === "large" ? (c = (1e3 + Js) * Ga[a.size], u = (Ga[a.size] + l) / i, o = (Ga[a.size] + l + Qs) / i, s = $s("sqrtSize" + a.size, o, c, l, t), s.style.minWidth = "1.02em", d = 1 / i) : (o = e + l + Qs, u = e + l, c = Math.floor(1e3 * e + l) + Js, s = $s("sqrtTall", o, c, l, t), s.style.minWidth = "0.742em", d = 1.056), s.height = u, s.style.height = Z(o), {
    span: s,
    advanceWidth: d,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Pd = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], L3 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Hd = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Ga = [0, 1.2, 1.8, 2.4, 3], N3 = function(e, t, r, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ie.contains(Pd, e) || ie.contains(Hd, e))
    return Od(e, t, !1, r, a, i);
  if (ie.contains(L3, e))
    return qd(e, Ga[t], !1, r, a, i);
  throw new X("Illegal delimiter: '" + e + "'");
}, R3 = [{
  type: "small",
  style: se.SCRIPTSCRIPT
}, {
  type: "small",
  style: se.SCRIPT
}, {
  type: "small",
  style: se.TEXT
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
}], O3 = [{
  type: "small",
  style: se.SCRIPTSCRIPT
}, {
  type: "small",
  style: se.SCRIPT
}, {
  type: "small",
  style: se.TEXT
}, {
  type: "stack"
}], Ud = [{
  type: "small",
  style: se.SCRIPTSCRIPT
}, {
  type: "small",
  style: se.SCRIPT
}, {
  type: "small",
  style: se.TEXT
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
}], q3 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Gd = function(e, t, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var s = Pa(e, q3(r[l]), "math"), o = s.height + s.depth;
    if (r[l].type === "small") {
      var u = a.havingBaseStyle(r[l].style);
      o *= u.sizeMultiplier;
    }
    if (o > t)
      return r[l];
  }
  return r[r.length - 1];
}, Vd = function(e, t, r, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  ie.contains(Hd, e) ? s = R3 : ie.contains(Pd, e) ? s = Ud : s = O3;
  var o = Gd(e, t, s, a);
  return o.type === "small" ? C3(e, o.style, r, a, i, l) : o.type === "large" ? Od(e, o.size, r, a, i, l) : qd(e, t, r, a, i, l);
}, P3 = function(e, t, r, a, i, l) {
  var s = a.fontMetrics().axisHeight * a.sizeMultiplier, o = 901, u = 5 / a.fontMetrics().ptPerEm, c = Math.max(t - s, r + s), d = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    c / 500 * o,
    2 * c - u
  );
  return Vd(e, d, !0, a, i, l);
}, Mr = {
  sqrtImage: I3,
  sizedDelim: N3,
  sizeToMaxHeight: Ga,
  customSizedDelim: Vd,
  leftRightDelim: P3
}, $1 = {
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
}, H3 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function ts(n, e) {
  var t = $l(n);
  if (t && ie.contains(H3, t.text))
    return t;
  throw t ? new X("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", n) : new X("Invalid delimiter type '" + n.type + "'", n);
}
J({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = ts(e[0], n);
    return {
      type: "delimsizing",
      mode: n.parser.mode,
      size: $1[n.funcName].size,
      mclass: $1[n.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => n.delim === "." ? N.makeSpan([n.mclass]) : Mr.sizedDelim(n.delim, n.size, e, n.mode, [n.mclass]),
  mathmlBuilder: (n) => {
    var e = [];
    n.delim !== "." && e.push(L0(n.delim, n.mode));
    var t = new j.MathNode("mo", e);
    n.mclass === "mopen" || n.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = Z(Mr.sizeToMaxHeight[n.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function ec(n) {
  if (!n.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
J({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = n.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new X("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: n.parser.mode,
      delim: ts(e[0], n).text,
      color: t
      // undefined if not set via \color
    };
  }
});
J({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = ts(e[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = be(r.parseFunction(), "leftright-right");
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
    ec(n);
    for (var t = yt(n.body, e, !0, ["mopen", "mclose"]), r = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (r = Math.max(t[l].height, r), a = Math.max(t[l].depth, a));
    r *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var s;
    if (n.left === "." ? s = $a(e, ["mopen"]) : s = Mr.leftRightDelim(n.left, r, a, e, n.mode, ["mopen"]), t.unshift(s), i)
      for (var o = 1; o < t.length; o++) {
        var u = t[o], c = u.isMiddle;
        c && (t[o] = Mr.leftRightDelim(c.delim, r, a, c.options, n.mode, []));
      }
    var d;
    if (n.right === ".")
      d = $a(e, ["mclose"]);
    else {
      var f = n.rightColor ? e.withColor(n.rightColor) : e;
      d = Mr.leftRightDelim(n.right, r, a, f, n.mode, ["mclose"]);
    }
    return t.push(d), N.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (n, e) => {
    ec(n);
    var t = o0(n.body, e);
    if (n.left !== ".") {
      var r = new j.MathNode("mo", [L0(n.left, n.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (n.right !== ".") {
      var a = new j.MathNode("mo", [L0(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), t.push(a);
    }
    return xu(t);
  }
});
J({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = ts(e[0], n);
    if (!n.parser.leftrightDepth)
      throw new X("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: n.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    if (n.delim === ".")
      t = $a(e, []);
    else {
      t = Mr.sizedDelim(n.delim, 1, e, n.mode, []);
      var r = {
        delim: n.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (n, e) => {
    var t = n.delim === "\\vert" || n.delim === "|" ? L0("|", "text") : L0(n.delim, n.mode), r = new j.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var zu = (n, e) => {
  var t = N.wrapFragment(Te(n.body, e), e), r = n.label.slice(1), a = e.sizeMultiplier, i, l = 0, s = ie.isCharacterBox(n.body);
  if (r === "sout")
    i = N.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var o = et({
      number: 0.6,
      unit: "pt"
    }, e), u = et({
      number: 0.35,
      unit: "ex"
    }, e), c = e.havingBaseSizing();
    a = a / c.sizeMultiplier;
    var d = t.height + t.depth + o + u;
    t.style.paddingLeft = Z(d / 2 + o);
    var f = Math.floor(1e3 * d * a), p = I5(f), g = new Lr([new fn("phase", p)], {
      width: "400em",
      height: Z(f / 1e3),
      viewBox: "0 0 400000 " + f,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = N.makeSvgSpan(["hide-tail"], [g], e), i.style.height = Z(d), l = t.depth + o + u;
  } else {
    /cancel/.test(r) ? s || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var b = 0, A = 0, w = 0;
    /box/.test(r) ? (w = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), b = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : w), A = b) : r === "angl" ? (w = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), b = 4 * w, A = Math.max(0, 0.25 - t.depth)) : (b = s ? 0.2 : 0, A = b), i = Rr.encloseSpan(t, r, b, A, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = Z(w)) : r === "angl" && w !== 0.049 && (i.style.borderTopWidth = Z(w), i.style.borderRightWidth = Z(w)), l = t.depth + A, n.backgroundColor && (i.style.backgroundColor = n.backgroundColor, n.borderColor && (i.style.borderColor = n.borderColor));
  }
  var k;
  if (n.backgroundColor)
    k = N.makeVList({
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
    k = N.makeVList({
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
  return /cancel/.test(r) && (k.height = t.height, k.depth = t.depth), /cancel/.test(r) && !s ? N.makeSpan(["mord", "cancel-lap"], [k], e) : N.makeSpan(["mord"], [k], e);
}, Bu = (n, e) => {
  var t = 0, r = new j.MathNode(n.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [He(n.body, e)]);
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
J({
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
    } = n, i = be(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: zu,
  mathmlBuilder: Bu
});
J({
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
    } = n, i = be(e[0], "color-token").color, l = be(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: zu,
  mathmlBuilder: Bu
});
J({
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
J({
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
  htmlBuilder: zu,
  mathmlBuilder: Bu
});
J({
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
var jd = {};
function vr(n) {
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
    jd[t[o]] = s;
  i && (Cl[e] = i), l && (Ml[e] = l);
}
var Wd = {};
function v(n, e) {
  Wd[n] = e;
}
function tc(n) {
  var e = [];
  n.consumeSpaces();
  var t = n.fetch().text;
  for (t === "\\relax" && (n.consume(), n.consumeSpaces(), t = n.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    n.consume(), e.push(t === "\\hdashline"), n.consumeSpaces(), t = n.fetch().text;
  return e;
}
var rs = (n) => {
  var e = n.parser.settings;
  if (!e.displayMode)
    throw new X("{" + n.envName + "} can be used only in display mode.");
};
function Iu(n) {
  if (n.indexOf("ed") === -1)
    return n.indexOf("*") === -1;
}
function pn(n, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: a,
    cols: i,
    arraystretch: l,
    colSeparationType: s,
    autoTag: o,
    singleRow: u,
    emptySingleRow: c,
    maxNumCols: d,
    leqno: f
  } = e;
  if (n.gullet.beginGroup(), u || n.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var p = n.gullet.expandMacroAsText("\\arraystretch");
    if (p == null)
      l = 1;
    else if (l = parseFloat(p), !l || l < 0)
      throw new X("Invalid \\arraystretch: " + p);
  }
  n.gullet.beginGroup();
  var g = [], b = [g], A = [], w = [], k = o != null ? [] : void 0;
  function y() {
    o && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function D() {
    k && (n.gullet.macros.get("\\df@tag") ? (k.push(n.subparse([new B0("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : k.push(!!o && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (y(), w.push(tc(n)); ; ) {
    var E = n.parseExpression(!1, u ? "\\end" : "\\\\");
    n.gullet.endGroup(), n.gullet.beginGroup(), E = {
      type: "ordgroup",
      mode: n.mode,
      body: E
    }, t && (E = {
      type: "styling",
      mode: n.mode,
      style: t,
      body: [E]
    }), g.push(E);
    var T = n.fetch().text;
    if (T === "&") {
      if (d && g.length === d) {
        if (u || s)
          throw new X("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (T === "\\end") {
      D(), g.length === 1 && E.type === "styling" && E.body[0].body.length === 0 && (b.length > 1 || !c) && b.pop(), w.length < b.length + 1 && w.push([]);
      break;
    } else if (T === "\\\\") {
      n.consume();
      var F = void 0;
      n.gullet.future().text !== " " && (F = n.parseSizeGroup(!0)), A.push(F ? F.value : null), D(), w.push(tc(n)), g = [], b.push(g), y();
    } else
      throw new X("Expected & or \\\\ or \\cr or \\end", n.nextToken);
  }
  return n.gullet.endGroup(), n.gullet.endGroup(), {
    type: "array",
    mode: n.mode,
    addJot: a,
    arraystretch: l,
    body: b,
    cols: i,
    rowGaps: A,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: w,
    colSeparationType: s,
    tags: k,
    leqno: f
  };
}
function Lu(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var br = function(e, t) {
  var r, a, i = e.body.length, l = e.hLinesBeforeRow, s = 0, o = new Array(i), u = [], c = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), d = 1 / t.fontMetrics().ptPerEm, f = 5 * d;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var p = t.havingStyle(se.SCRIPT).sizeMultiplier;
    f = 0.2778 * (p / t.sizeMultiplier);
  }
  var g = e.colSeparationType === "CD" ? et({
    number: 3,
    unit: "ex"
  }, t) : 12 * d, b = 3 * d, A = e.arraystretch * g, w = 0.7 * A, k = 0.3 * A, y = 0;
  function D(pt) {
    for (var Je = 0; Je < pt.length; ++Je)
      Je > 0 && (y += 0.25), u.push({
        pos: y,
        isDashed: pt[Je]
      });
  }
  for (D(l[0]), r = 0; r < e.body.length; ++r) {
    var E = e.body[r], T = w, F = k;
    s < E.length && (s = E.length);
    var C = new Array(E.length);
    for (a = 0; a < E.length; ++a) {
      var B = Te(E[a], t);
      F < B.depth && (F = B.depth), T < B.height && (T = B.height), C[a] = B;
    }
    var L = e.rowGaps[r], I = 0;
    L && (I = et(L, t), I > 0 && (I += k, F < I && (F = I), I = 0)), e.addJot && (F += b), C.height = T, C.depth = F, y += T, C.pos = y, y += F + I, o[r] = C, D(l[r + 1]);
  }
  var P = y / 2 + t.fontMetrics().axisHeight, $ = e.cols || [], O = [], K, q, he = [];
  if (e.tags && e.tags.some((pt) => pt))
    for (r = 0; r < i; ++r) {
      var ee = o[r], _e = ee.pos - P, de = e.tags[r], re = void 0;
      de === !0 ? re = N.makeSpan(["eqn-num"], [], t) : de === !1 ? re = N.makeSpan([], [], t) : re = N.makeSpan([], yt(de, t, !0), t), re.depth = ee.depth, re.height = ee.height, he.push({
        type: "elem",
        elem: re,
        shift: _e
      });
    }
  for (
    a = 0, q = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || q < $.length;
    ++a, ++q
  ) {
    for (var oe = $[q] || {}, ve = !0; oe.type === "separator"; ) {
      if (ve || (K = N.makeSpan(["arraycolsep"], []), K.style.width = Z(t.fontMetrics().doubleRuleSep), O.push(K)), oe.separator === "|" || oe.separator === ":") {
        var Be = oe.separator === "|" ? "solid" : "dashed", W = N.makeSpan(["vertical-separator"], [], t);
        W.style.height = Z(y), W.style.borderRightWidth = Z(c), W.style.borderRightStyle = Be, W.style.margin = "0 " + Z(-c / 2);
        var pe = y - P;
        pe && (W.style.verticalAlign = Z(-pe)), O.push(W);
      } else
        throw new X("Invalid separator type: " + oe.separator);
      q++, oe = $[q] || {}, ve = !1;
    }
    if (!(a >= s)) {
      var Se = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Se = ie.deflt(oe.pregap, f), Se !== 0 && (K = N.makeSpan(["arraycolsep"], []), K.style.width = Z(Se), O.push(K)));
      var Ie = [];
      for (r = 0; r < i; ++r) {
        var V = o[r], ge = V[a];
        if (ge) {
          var Ee = V.pos - P;
          ge.depth = V.depth, ge.height = V.height, Ie.push({
            type: "elem",
            elem: ge,
            shift: Ee
          });
        }
      }
      Ie = N.makeVList({
        positionType: "individualShift",
        children: Ie
      }, t), Ie = N.makeSpan(["col-align-" + (oe.align || "c")], [Ie]), O.push(Ie), (a < s - 1 || e.hskipBeforeAndAfter) && (Se = ie.deflt(oe.postgap, f), Se !== 0 && (K = N.makeSpan(["arraycolsep"], []), K.style.width = Z(Se), O.push(K)));
    }
  }
  if (o = N.makeSpan(["mtable"], O), u.length > 0) {
    for (var Le = N.makeLineSpan("hline", t, c), st = N.makeLineSpan("hdashline", t, c), Pe = [{
      type: "elem",
      elem: o,
      shift: 0
    }]; u.length > 0; ) {
      var Ve = u.pop(), Et = Ve.pos - P;
      Ve.isDashed ? Pe.push({
        type: "elem",
        elem: st,
        shift: Et
      }) : Pe.push({
        type: "elem",
        elem: Le,
        shift: Et
      });
    }
    o = N.makeVList({
      positionType: "individualShift",
      children: Pe
    }, t);
  }
  if (he.length === 0)
    return N.makeSpan(["mord"], [o], t);
  var St = N.makeVList({
    positionType: "individualShift",
    children: he
  }, t);
  return St = N.makeSpan(["tag"], [St], t), N.makeFragment([o, St]);
}, U3 = {
  c: "center ",
  l: "left ",
  r: "right "
}, wr = function(e, t) {
  for (var r = [], a = new j.MathNode("mtd", [], ["mtr-glue"]), i = new j.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], u = 0; u < s.length; u++)
      o.push(new j.MathNode("mtd", [He(s[u], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), r.push(new j.MathNode("mtr", o));
  }
  var c = new j.MathNode("mtable", r), d = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  c.setAttribute("rowspacing", Z(d));
  var f = "", p = "";
  if (e.cols && e.cols.length > 0) {
    var g = e.cols, b = "", A = !1, w = 0, k = g.length;
    g[0].type === "separator" && (f += "top ", w = 1), g[g.length - 1].type === "separator" && (f += "bottom ", k -= 1);
    for (var y = w; y < k; y++)
      g[y].type === "align" ? (p += U3[g[y].align], A && (b += "none "), A = !0) : g[y].type === "separator" && A && (b += g[y].separator === "|" ? "solid " : "dashed ", A = !1);
    c.setAttribute("columnalign", p.trim()), /[sd]/.test(b) && c.setAttribute("columnlines", b.trim());
  }
  if (e.colSeparationType === "align") {
    for (var D = e.cols || [], E = "", T = 1; T < D.length; T++)
      E += T % 2 ? "0em " : "1em ";
    c.setAttribute("columnspacing", E.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? c.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? c.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? c.setAttribute("columnspacing", "0.5em") : c.setAttribute("columnspacing", "1em");
  var F = "", C = e.hLinesBeforeRow;
  f += C[0].length > 0 ? "left " : "", f += C[C.length - 1].length > 0 ? "right " : "";
  for (var B = 1; B < C.length - 1; B++)
    F += C[B].length === 0 ? "none " : C[B][0] ? "dashed " : "solid ";
  return /[sd]/.test(F) && c.setAttribute("rowlines", F.trim()), f !== "" && (c = new j.MathNode("menclose", [c]), c.setAttribute("notation", f.trim())), e.arraystretch && e.arraystretch < 1 && (c = new j.MathNode("mstyle", [c]), c.setAttribute("scriptlevel", "1")), c;
}, Xd = function(e, t) {
  e.envName.indexOf("ed") === -1 && rs(e);
  var r = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = pn(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : Iu(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s, o = 0, u = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var c = "", d = 0; d < t[0].body.length; d++) {
      var f = be(t[0].body[d], "textord");
      c += f.text;
    }
    s = Number(c), o = s * 2;
  }
  var p = !o;
  l.body.forEach(function(w) {
    for (var k = 1; k < w.length; k += 2) {
      var y = be(w[k], "styling"), D = be(y.body[0], "ordgroup");
      D.body.unshift(u);
    }
    if (p)
      o < w.length && (o = w.length);
    else {
      var E = w.length / 2;
      if (s < E)
        throw new X("Too many math in a row: " + ("expected " + s + ", but got " + E), w[0]);
    }
  });
  for (var g = 0; g < o; ++g) {
    var b = "r", A = 0;
    g % 2 === 1 ? b = "l" : g > 0 && p && (A = 1), r[g] = {
      type: "align",
      align: b,
      pregap: A,
      postgap: 0
    };
  }
  return l.colSeparationType = p ? "align" : "alignat", l;
};
vr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = $l(e[0]), r = t ? [e[0]] : be(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Fu(l), o = s.text;
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
      throw new X("Unknown column alignment: " + o, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return pn(n.parser, i, Lu(n.envName));
  },
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
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
          throw new X("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = pn(n.parser, r, Lu(n.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
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
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 0.5
    }, t = pn(n.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = $l(e[0]), r = t ? [e[0]] : be(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Fu(l), o = s.text;
      if ("lc".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      throw new X("Unknown column alignment: " + o, l);
    });
    if (a.length > 1)
      throw new X("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = pn(n.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new X("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
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
    }, t = pn(n.parser, e, Lu(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [t],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Xd,
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    ie.contains(["gather", "gather*"], n.envName) && rs(n);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Iu(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return pn(n.parser, e, "display");
  },
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Xd,
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    rs(n);
    var e = {
      autoTag: Iu(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return pn(n.parser, e, "display");
  },
  htmlBuilder: br,
  mathmlBuilder: wr
});
vr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return rs(n), T3(n.parser);
  },
  htmlBuilder: br,
  mathmlBuilder: wr
});
v("\\nonumber", "\\gdef\\@eqnsw{0}");
v("\\notag", "\\nonumber");
J({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(n, e) {
    throw new X(n.funcName + " valid only within array environment");
  }
});
var rc = jd;
J({
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
      throw new X("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += be(a.body[l], "textord").text;
    if (r === "\\begin") {
      if (!rc.hasOwnProperty(i))
        throw new X("No such environment: " + i, a);
      var s = rc[i], {
        args: o,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", s), c = {
        mode: t.mode,
        envName: i,
        parser: t
      }, d = s.handler(c, o, u);
      t.expect("\\end", !1);
      var f = t.nextToken, p = be(t.parseFunction(), "environment");
      if (p.name !== i)
        throw new X("Mismatch: \\begin{" + i + "} matched by \\end{" + p.name + "}", f);
      return d;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var Yd = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return Te(n.body, r);
}, Zd = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return He(n.body, r);
}, nc = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
J({
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
    } = n, a = zl(e[0]), i = r;
    return i in nc && (i = nc[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: Yd,
  mathmlBuilder: Zd
});
J({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0], a = ie.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: es(r),
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
J({
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
  htmlBuilder: Yd,
  mathmlBuilder: Zd
});
var Kd = (n, e) => {
  var t = e;
  return n === "display" ? t = t.id >= se.SCRIPT.id ? t.text() : se.DISPLAY : n === "text" && t.size === se.DISPLAY.size ? t = se.TEXT : n === "script" ? t = se.SCRIPT : n === "scriptscript" && (t = se.SCRIPTSCRIPT), t;
}, Nu = (n, e) => {
  var t = Kd(n.size, e.style), r = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(r);
  var l = Te(n.numer, i, e);
  if (n.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, o = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < o ? o : l.depth;
  }
  i = e.havingStyle(a);
  var u = Te(n.denom, i, e), c, d, f;
  n.hasBarLine ? (n.barSize ? (d = et(n.barSize, e), c = N.makeLineSpan("frac-line", e, d)) : c = N.makeLineSpan("frac-line", e), d = c.height, f = c.height) : (c = null, d = 0, f = e.fontMetrics().defaultRuleThickness);
  var p, g, b;
  t.size === se.DISPLAY.size || n.size === "display" ? (p = e.fontMetrics().num1, d > 0 ? g = 3 * f : g = 7 * f, b = e.fontMetrics().denom1) : (d > 0 ? (p = e.fontMetrics().num2, g = f) : (p = e.fontMetrics().num3, g = 3 * f), b = e.fontMetrics().denom2);
  var A;
  if (c) {
    var k = e.fontMetrics().axisHeight;
    p - l.depth - (k + 0.5 * d) < g && (p += g - (p - l.depth - (k + 0.5 * d))), k - 0.5 * d - (u.height - b) < g && (b += g - (k - 0.5 * d - (u.height - b)));
    var y = -(k - 0.5 * d);
    A = N.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: b
      }, {
        type: "elem",
        elem: c,
        shift: y
      }, {
        type: "elem",
        elem: l,
        shift: -p
      }]
    }, e);
  } else {
    var w = p - l.depth - (u.height - b);
    w < g && (p += 0.5 * (g - w), b += 0.5 * (g - w)), A = N.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: b
      }, {
        type: "elem",
        elem: l,
        shift: -p
      }]
    }, e);
  }
  i = e.havingStyle(t), A.height *= i.sizeMultiplier / e.sizeMultiplier, A.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var D;
  t.size === se.DISPLAY.size ? D = e.fontMetrics().delim1 : t.size === se.SCRIPTSCRIPT.size ? D = e.havingStyle(se.SCRIPT).fontMetrics().delim2 : D = e.fontMetrics().delim2;
  var E, T;
  return n.leftDelim == null ? E = $a(e, ["mopen"]) : E = Mr.customSizedDelim(n.leftDelim, D, !0, e.havingStyle(t), n.mode, ["mopen"]), n.continued ? T = N.makeSpan([]) : n.rightDelim == null ? T = $a(e, ["mclose"]) : T = Mr.customSizedDelim(n.rightDelim, D, !0, e.havingStyle(t), n.mode, ["mclose"]), N.makeSpan(["mord"].concat(i.sizingClasses(e)), [E, N.makeSpan(["mfrac"], [A]), T], e);
}, Ru = (n, e) => {
  var t = new j.MathNode("mfrac", [He(n.numer, e), He(n.denom, e)]);
  if (!n.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = et(n.barSize, e);
    t.setAttribute("linethickness", Z(r));
  }
  var a = Kd(n.size, e.style);
  if (a.size !== e.style.size) {
    t = new j.MathNode("mstyle", [t]);
    var i = a.size === se.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (n.leftDelim != null || n.rightDelim != null) {
    var l = [];
    if (n.leftDelim != null) {
      var s = new j.MathNode("mo", [new j.TextNode(n.leftDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    if (l.push(t), n.rightDelim != null) {
      var o = new j.MathNode("mo", [new j.TextNode(n.rightDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    return xu(l);
  }
  return t;
};
J({
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
    } = n, a = e[0], i = e[1], l, s = null, o = null, u = "auto";
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
        u = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        u = "text";
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
      size: u,
      barSize: null
    };
  },
  htmlBuilder: Nu,
  mathmlBuilder: Ru
});
J({
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
J({
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
var ac = ["display", "text", "script", "scriptscript"], ic = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
J({
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
    } = n, r = e[4], a = e[5], i = zl(e[0]), l = i.type === "atom" && i.family === "open" ? ic(i.text) : null, s = zl(e[1]), o = s.type === "atom" && s.family === "close" ? ic(s.text) : null, u = be(e[2], "size"), c, d = null;
    u.isBlank ? c = !0 : (d = u.value, c = d.number > 0);
    var f = "auto", p = e[3];
    if (p.type === "ordgroup") {
      if (p.body.length > 0) {
        var g = be(p.body[0], "textord");
        f = ac[Number(g.text)];
      }
    } else
      p = be(p, "textord"), f = ac[Number(p.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: a,
      continued: !1,
      hasBarLine: c,
      barSize: d,
      leftDelim: l,
      rightDelim: o,
      size: f
    };
  },
  htmlBuilder: Nu,
  mathmlBuilder: Ru
});
J({
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
      size: be(e[0], "size").value,
      token: a
    };
  }
});
J({
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
    } = n, a = e[0], i = b5(be(e[1], "infix").size), l = e[2], s = i.number > 0;
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
  htmlBuilder: Nu,
  mathmlBuilder: Ru
});
var Jd = (n, e) => {
  var t = e.style, r, a;
  n.type === "supsub" ? (r = n.sup ? Te(n.sup, e.havingStyle(t.sup()), e) : Te(n.sub, e.havingStyle(t.sub()), e), a = be(n.base, "horizBrace")) : a = be(n, "horizBrace");
  var i = Te(a.base, e.havingBaseStyle(se.DISPLAY)), l = Rr.svgSpan(a, e), s;
  if (a.isOver ? (s = N.makeVList({
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
  }, e), s.children[0].children[0].children[1].classes.push("svg-align")) : (s = N.makeVList({
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
    var o = N.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
    a.isOver ? s = N.makeVList({
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
    }, e) : s = N.makeVList({
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
  return N.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
}, G3 = (n, e) => {
  var t = Rr.mathMLnode(n.label);
  return new j.MathNode(n.isOver ? "mover" : "munder", [He(n.base, e), t]);
};
J({
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
  htmlBuilder: Jd,
  mathmlBuilder: G3
});
J({
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
    } = n, r = e[1], a = be(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: ot(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (n, e) => {
    var t = yt(n.body, e, !1);
    return N.makeAnchor(n.href, [], t, e);
  },
  mathmlBuilder: (n, e) => {
    var t = hn(n.body, e);
    return t instanceof T0 || (t = new T0("mrow", [t])), t.setAttribute("href", n.href), t;
  }
});
J({
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
    } = n, r = be(e[0], "url").url;
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
      body: ot(s)
    };
  }
});
J({
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
      body: ot(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = yt(n.body, e, !1);
    return N.makeFragment(t);
  },
  mathmlBuilder(n, e) {
    return new j.MathNode("mrow", o0(n.body, e));
  }
});
J({
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
    } = n, i = be(e[0], "raw").string, l = e[1];
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
        for (var u = i.split(","), c = 0; c < u.length; c++) {
          var d = u[c].split("=");
          if (d.length !== 2)
            throw new X("Error parsing key-value for \\htmlData");
          o["data-" + d[0].trim()] = d[1].trim();
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
      body: ot(l)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (n, e) => {
    var t = yt(n.body, e, !1), r = ["enclosing"];
    n.attributes.class && r.push(...n.attributes.class.trim().split(/\s+/));
    var a = N.makeSpan(r, t, e);
    for (var i in n.attributes)
      i !== "class" && n.attributes.hasOwnProperty(i) && a.setAttribute(i, n.attributes[i]);
    return a;
  },
  mathmlBuilder: (n, e) => hn(n.body, e)
});
J({
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
      html: ot(e[0]),
      mathml: ot(e[1])
    };
  },
  htmlBuilder: (n, e) => {
    var t = yt(n.html, e, !1);
    return N.makeFragment(t);
  },
  mathmlBuilder: (n, e) => hn(n.mathml, e)
});
var eo = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new X("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!gd(r))
    throw new X("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
J({
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
      for (var o = be(t[0], "raw").string, u = o.split(","), c = 0; c < u.length; c++) {
        var d = u[c].split("=");
        if (d.length === 2) {
          var f = d[1].trim();
          switch (d[0].trim()) {
            case "alt":
              s = f;
              break;
            case "width":
              a = eo(f);
              break;
            case "height":
              i = eo(f);
              break;
            case "totalheight":
              l = eo(f);
              break;
            default:
              throw new X("Invalid key: '" + d[0] + "' in \\includegraphics.");
          }
        }
      }
    var p = be(e[0], "url").url;
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
    var t = et(n.height, e), r = 0;
    n.totalheight.number > 0 && (r = et(n.totalheight, e) - t);
    var a = 0;
    n.width.number > 0 && (a = et(n.width, e));
    var i = {
      height: Z(t + r)
    };
    a > 0 && (i.width = Z(a)), r > 0 && (i.verticalAlign = Z(-r));
    var l = new G5(n.src, n.alt, i);
    return l.height = t, l.depth = r, l;
  },
  mathmlBuilder: (n, e) => {
    var t = new j.MathNode("mglyph", []);
    t.setAttribute("alt", n.alt);
    var r = et(n.height, e), a = 0;
    if (n.totalheight.number > 0 && (a = et(n.totalheight, e) - r, t.setAttribute("valign", Z(-a))), t.setAttribute("height", Z(r + a)), n.width.number > 0) {
      var i = et(n.width, e);
      t.setAttribute("width", Z(i));
    }
    return t.setAttribute("src", n.src), t;
  }
});
J({
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
    } = n, a = be(e[0], "size");
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
    return N.makeGlue(n.dimension, e);
  },
  mathmlBuilder(n, e) {
    var t = et(n.dimension, e);
    return new j.SpaceNode(t);
  }
});
J({
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
    n.alignment === "clap" ? (t = N.makeSpan([], [Te(n.body, e)]), t = N.makeSpan(["inner"], [t], e)) : t = N.makeSpan(["inner"], [Te(n.body, e)]);
    var r = N.makeSpan(["fix"], []), a = N.makeSpan([n.alignment], [t, r], e), i = N.makeSpan(["strut"]);
    return i.style.height = Z(a.height + a.depth), a.depth && (i.style.verticalAlign = Z(-a.depth)), a.children.unshift(i), a = N.makeSpan(["thinbox"], [a], e), N.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new j.MathNode("mpadded", [He(n.body, e)]);
    if (n.alignment !== "rlap") {
      var r = n.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
J({
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
J({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    throw new X("Mismatched " + n.funcName);
  }
});
var lc = (n, e) => {
  switch (e.style.size) {
    case se.DISPLAY.size:
      return n.display;
    case se.TEXT.size:
      return n.text;
    case se.SCRIPT.size:
      return n.script;
    case se.SCRIPTSCRIPT.size:
      return n.scriptscript;
    default:
      return n.text;
  }
};
J({
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
      display: ot(e[0]),
      text: ot(e[1]),
      script: ot(e[2]),
      scriptscript: ot(e[3])
    };
  },
  htmlBuilder: (n, e) => {
    var t = lc(n, e), r = yt(t, e, !1);
    return N.makeFragment(r);
  },
  mathmlBuilder: (n, e) => {
    var t = lc(n, e);
    return hn(t, e);
  }
});
var Qd = (n, e, t, r, a, i, l) => {
  n = N.makeSpan([], [n]);
  var s = t && ie.isCharacterBox(t), o, u;
  if (e) {
    var c = Te(e, r.havingStyle(a.sup()), r);
    u = {
      elem: c,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - c.depth)
    };
  }
  if (t) {
    var d = Te(t, r.havingStyle(a.sub()), r);
    o = {
      elem: d,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - d.height)
    };
  }
  var f;
  if (u && o) {
    var p = r.fontMetrics().bigOpSpacing5 + o.elem.height + o.elem.depth + o.kern + n.depth + l;
    f = N.makeVList({
      positionType: "bottom",
      positionData: p,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: Z(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: Z(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (o) {
    var g = n.height - l;
    f = N.makeVList({
      positionType: "top",
      positionData: g,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: Z(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: n
      }]
    }, r);
  } else if (u) {
    var b = n.depth + l;
    f = N.makeVList({
      positionType: "bottom",
      positionData: b,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: Z(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return n;
  var A = [f];
  if (o && i !== 0 && !s) {
    var w = N.makeSpan(["mspace"], [], r);
    w.style.marginRight = Z(i), A.unshift(w);
  }
  return N.makeSpan(["mop", "op-limits"], A, r);
}, $d = ["\\smallint"], ma = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = be(n.base, "op"), a = !0) : i = be(n, "op");
  var l = e.style, s = !1;
  l.size === se.DISPLAY.size && i.symbol && !ie.contains($d, i.name) && (s = !0);
  var o;
  if (i.symbol) {
    var u = s ? "Size2-Regular" : "Size1-Regular", c = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (c = i.name.slice(1), i.name = c === "oiint" ? "\\iint" : "\\iiint"), o = N.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), c.length > 0) {
      var d = o.italic, f = N.staticSvg(c + "Size" + (s ? "2" : "1"), e);
      o = N.makeVList({
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
      }, e), i.name = "\\" + c, o.classes.unshift("mop"), o.italic = d;
    }
  } else if (i.body) {
    var p = yt(i.body, e, !0);
    p.length === 1 && p[0] instanceof I0 ? (o = p[0], o.classes[0] = "mop") : o = N.makeSpan(["mop"], p, e);
  } else {
    for (var g = [], b = 1; b < i.name.length; b++)
      g.push(N.mathsym(i.name[b], i.mode, e));
    o = N.makeSpan(["mop"], g, e);
  }
  var A = 0, w = 0;
  return (o instanceof I0 || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (A = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, w = o.italic), a ? Qd(o, t, r, e, l, w, A) : (A && (o.style.position = "relative", o.style.top = Z(A)), o);
}, si = (n, e) => {
  var t;
  if (n.symbol)
    t = new T0("mo", [L0(n.name, n.mode)]), ie.contains($d, n.name) && t.setAttribute("largeop", "false");
  else if (n.body)
    t = new T0("mo", o0(n.body, e));
  else {
    t = new T0("mi", [new Ua(n.name.slice(1))]);
    var r = new T0("mo", [L0("⁡", "text")]);
    n.parentIsSupSub ? t = new T0("mrow", [t, r]) : t = xd([t, r]);
  }
  return t;
}, V3 = {
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
J({
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
    return a.length === 1 && (a = V3[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: ma,
  mathmlBuilder: si
});
J({
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
      body: ot(r)
    };
  },
  htmlBuilder: ma,
  mathmlBuilder: si
});
var j3 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
J({
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
  htmlBuilder: ma,
  mathmlBuilder: si
});
J({
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
  htmlBuilder: ma,
  mathmlBuilder: si
});
J({
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
    return r.length === 1 && (r = j3[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: ma,
  mathmlBuilder: si
});
var e4 = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = be(n.base, "operatorname"), a = !0) : i = be(n, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var s = i.body.map((d) => {
      var f = d.text;
      return typeof f == "string" ? {
        type: "textord",
        mode: d.mode,
        text: f
      } : d;
    }), o = yt(s, e.withFont("mathrm"), !0), u = 0; u < o.length; u++) {
      var c = o[u];
      c instanceof I0 && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = N.makeSpan(["mop"], o, e);
  } else
    l = N.makeSpan(["mop"], [], e);
  return a ? Qd(l, t, r, e, e.style, 0, 0) : l;
}, W3 = (n, e) => {
  for (var t = o0(n.body, e.withFont("mathrm")), r = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof j.SpaceNode)) if (i instanceof j.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof j.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
          break;
        }
        default:
          r = !1;
      }
    else
      r = !1;
  }
  if (r) {
    var s = t.map((c) => c.toText()).join("");
    t = [new j.TextNode(s)];
  }
  var o = new j.MathNode("mi", t);
  o.setAttribute("mathvariant", "normal");
  var u = new j.MathNode("mo", [L0("⁡", "text")]);
  return n.parentIsSupSub ? new j.MathNode("mrow", [o, u]) : j.newDocumentFragment([o, u]);
};
J({
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
      body: ot(a),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: e4,
  mathmlBuilder: W3
});
v("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Nn({
  type: "ordgroup",
  htmlBuilder(n, e) {
    return n.semisimple ? N.makeFragment(yt(n.body, e, !1)) : N.makeSpan(["mord"], yt(n.body, e, !0), e);
  },
  mathmlBuilder(n, e) {
    return hn(n.body, e, !0);
  }
});
J({
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
    var t = Te(n.body, e.havingCrampedStyle()), r = N.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = N.makeVList({
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
    return N.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mo", [new j.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new j.MathNode("mover", [He(n.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
J({
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
      body: ot(r)
    };
  },
  htmlBuilder: (n, e) => {
    var t = yt(n.body, e.withPhantom(), !1);
    return N.makeFragment(t);
  },
  mathmlBuilder: (n, e) => {
    var t = o0(n.body, e);
    return new j.MathNode("mphantom", t);
  }
});
J({
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
    var t = N.makeSpan([], [Te(n.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = N.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), N.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (n, e) => {
    var t = o0(ot(n.body), e), r = new j.MathNode("mphantom", t), a = new j.MathNode("mpadded", [r]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
J({
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
    var t = N.makeSpan(["inner"], [Te(n.body, e.withPhantom())]), r = N.makeSpan(["fix"], []);
    return N.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (n, e) => {
    var t = o0(ot(n.body), e), r = new j.MathNode("mphantom", t), a = new j.MathNode("mpadded", [r]);
    return a.setAttribute("width", "0px"), a;
  }
});
J({
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
    } = n, r = be(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: a
    };
  },
  htmlBuilder(n, e) {
    var t = Te(n.body, e), r = et(n.dy, e);
    return N.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mpadded", [He(n.body, e)]), r = n.dy.number + n.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
J({
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
J({
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
    } = n, a = t[0], i = be(e[0], "size"), l = be(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && be(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(n, e) {
    var t = N.makeSpan(["mord", "rule"], [], e), r = et(n.width, e), a = et(n.height, e), i = n.shift ? et(n.shift, e) : 0;
    return t.style.borderRightWidth = Z(r), t.style.borderTopWidth = Z(a), t.style.bottom = Z(i), t.width = r, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(n, e) {
    var t = et(n.width, e), r = et(n.height, e), a = n.shift ? et(n.shift, e) : 0, i = e.color && e.getColor() || "black", l = new j.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", Z(t)), l.setAttribute("height", Z(r));
    var s = new j.MathNode("mpadded", [l]);
    return a >= 0 ? s.setAttribute("height", Z(a)) : (s.setAttribute("height", Z(a)), s.setAttribute("depth", Z(-a))), s.setAttribute("voffset", Z(a)), s;
  }
});
function t4(n, e, t) {
  for (var r = yt(n, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= a, r[i].depth *= a;
  }
  return N.makeFragment(r);
}
var sc = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], X3 = (n, e) => {
  var t = e.havingSize(n.size);
  return t4(n.body, t, e);
};
J({
  type: "sizing",
  names: sc,
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
      size: sc.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: X3,
  mathmlBuilder: (n, e) => {
    var t = e.havingSize(n.size), r = o0(n.body, t), a = new j.MathNode("mstyle", r);
    return a.setAttribute("mathsize", Z(t.sizeMultiplier)), a;
  }
});
J({
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
    } = n, a = !1, i = !1, l = t[0] && be(t[0], "ordgroup");
    if (l)
      for (var s = "", o = 0; o < l.body.length; ++o) {
        var u = l.body[o];
        if (s = u.text, s === "t")
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
    var c = e[0];
    return {
      type: "smash",
      mode: r.mode,
      body: c,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (n, e) => {
    var t = N.makeSpan([], [Te(n.body, e)]);
    if (!n.smashHeight && !n.smashDepth)
      return t;
    if (n.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (n.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = N.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return N.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new j.MathNode("mpadded", [He(n.body, e)]);
    return n.smashHeight && t.setAttribute("height", "0px"), n.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
J({
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
    var t = Te(n.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = N.wrapFragment(t, e);
    var r = e.fontMetrics(), a = r.defaultRuleThickness, i = a;
    e.style.id < se.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, s = t.height + t.depth + l + a, {
      span: o,
      ruleWidth: u,
      advanceWidth: c
    } = Mr.sqrtImage(s, e), d = o.height - u;
    d > t.height + t.depth + l && (l = (l + d - t.height - t.depth) / 2);
    var f = o.height - t.height - l - u;
    t.style.paddingLeft = Z(c);
    var p = N.makeVList({
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
        size: u
      }]
    }, e);
    if (n.index) {
      var g = e.havingStyle(se.SCRIPTSCRIPT), b = Te(n.index, g, e), A = 0.6 * (p.height - p.depth), w = N.makeVList({
        positionType: "shift",
        positionData: -A,
        children: [{
          type: "elem",
          elem: b
        }]
      }, e), k = N.makeSpan(["root"], [w]);
      return N.makeSpan(["mord", "sqrt"], [k, p], e);
    } else
      return N.makeSpan(["mord", "sqrt"], [p], e);
  },
  mathmlBuilder(n, e) {
    var {
      body: t,
      index: r
    } = n;
    return r ? new j.MathNode("mroot", [He(t, e), He(r, e)]) : new j.MathNode("msqrt", [He(t, e)]);
  }
});
var oc = {
  display: se.DISPLAY,
  text: se.TEXT,
  script: se.SCRIPT,
  scriptscript: se.SCRIPTSCRIPT
};
J({
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
    var t = oc[n.style], r = e.havingStyle(t).withFont("");
    return t4(n.body, r, e);
  },
  mathmlBuilder(n, e) {
    var t = oc[n.style], r = e.havingStyle(t), a = o0(n.body, r), i = new j.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[n.style];
    return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
  }
});
var Y3 = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (t.style.size === se.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? ma : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === se.DISPLAY.size || r.limits);
      return i ? e4 : null;
    } else {
      if (r.type === "accent")
        return ie.isCharacterBox(r.base) ? Cu : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? Jd : null;
      } else
        return null;
    }
  else return null;
};
Nn({
  type: "supsub",
  htmlBuilder(n, e) {
    var t = Y3(n, e);
    if (t)
      return t(n, e);
    var {
      base: r,
      sup: a,
      sub: i
    } = n, l = Te(r, e), s, o, u = e.fontMetrics(), c = 0, d = 0, f = r && ie.isCharacterBox(r);
    if (a) {
      var p = e.havingStyle(e.style.sup());
      s = Te(a, p, e), f || (c = l.height - p.fontMetrics().supDrop * p.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var g = e.havingStyle(e.style.sub());
      o = Te(i, g, e), f || (d = l.depth + g.fontMetrics().subDrop * g.sizeMultiplier / e.sizeMultiplier);
    }
    var b;
    e.style === se.DISPLAY ? b = u.sup1 : e.style.cramped ? b = u.sup3 : b = u.sup2;
    var A = e.sizeMultiplier, w = Z(0.5 / u.ptPerEm / A), k = null;
    if (o) {
      var y = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (l instanceof I0 || y) && (k = Z(-l.italic));
    }
    var D;
    if (s && o) {
      c = Math.max(c, b, s.depth + 0.25 * u.xHeight), d = Math.max(d, u.sub2);
      var E = u.defaultRuleThickness, T = 4 * E;
      if (c - s.depth - (o.height - d) < T) {
        d = T - (c - s.depth) + o.height;
        var F = 0.8 * u.xHeight - (c - s.depth);
        F > 0 && (c += F, d -= F);
      }
      var C = [{
        type: "elem",
        elem: o,
        shift: d,
        marginRight: w,
        marginLeft: k
      }, {
        type: "elem",
        elem: s,
        shift: -c,
        marginRight: w
      }];
      D = N.makeVList({
        positionType: "individualShift",
        children: C
      }, e);
    } else if (o) {
      d = Math.max(d, u.sub1, o.height - 0.8 * u.xHeight);
      var B = [{
        type: "elem",
        elem: o,
        marginLeft: k,
        marginRight: w
      }];
      D = N.makeVList({
        positionType: "shift",
        positionData: d,
        children: B
      }, e);
    } else if (s)
      c = Math.max(c, b, s.depth + 0.25 * u.xHeight), D = N.makeVList({
        positionType: "shift",
        positionData: -c,
        children: [{
          type: "elem",
          elem: s,
          marginRight: w
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var L = Xo(l, "right") || "mord";
    return N.makeSpan([L], [l, N.makeSpan(["msupsub"], [D])], e);
  },
  mathmlBuilder(n, e) {
    var t = !1, r, a;
    n.base && n.base.type === "horizBrace" && (a = !!n.sup, a === n.base.isOver && (t = !0, r = n.base.isOver)), n.base && (n.base.type === "op" || n.base.type === "operatorname") && (n.base.parentIsSupSub = !0);
    var i = [He(n.base, e)];
    n.sub && i.push(He(n.sub, e)), n.sup && i.push(He(n.sup, e));
    var l;
    if (t)
      l = r ? "mover" : "munder";
    else if (n.sub)
      if (n.sup) {
        var u = n.base;
        u && u.type === "op" && u.limits && e.style === se.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === se.DISPLAY || u.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var o = n.base;
        o && o.type === "op" && o.limits && (e.style === se.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === se.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var s = n.base;
      s && s.type === "op" && s.limits && (e.style === se.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === se.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new j.MathNode(l, i);
  }
});
Nn({
  type: "atom",
  htmlBuilder(n, e) {
    return N.mathsym(n.text, n.mode, e, ["m" + n.family]);
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mo", [L0(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = Tu(n, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else n.family === "punct" ? t.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var r4 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Nn({
  type: "mathord",
  htmlBuilder(n, e) {
    return N.makeOrd(n, e, "mathord");
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mi", [L0(n.text, n.mode, e)]), r = Tu(n, e) || "italic";
    return r !== r4[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Nn({
  type: "textord",
  htmlBuilder(n, e) {
    return N.makeOrd(n, e, "textord");
  },
  mathmlBuilder(n, e) {
    var t = L0(n.text, n.mode, e), r = Tu(n, e) || "normal", a;
    return n.mode === "text" ? a = new j.MathNode("mtext", [t]) : /[0-9]/.test(n.text) ? a = new j.MathNode("mn", [t]) : n.text === "\\prime" ? a = new j.MathNode("mo", [t]) : a = new j.MathNode("mi", [t]), r !== r4[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var to = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, ro = {
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
Nn({
  type: "spacing",
  htmlBuilder(n, e) {
    if (ro.hasOwnProperty(n.text)) {
      var t = ro[n.text].className || "";
      if (n.mode === "text") {
        var r = N.makeOrd(n, e, "textord");
        return r.classes.push(t), r;
      } else
        return N.makeSpan(["mspace", t], [N.mathsym(n.text, n.mode, e)], e);
    } else {
      if (to.hasOwnProperty(n.text))
        return N.makeSpan(["mspace", to[n.text]], [], e);
      throw new X('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, e) {
    var t;
    if (ro.hasOwnProperty(n.text))
      t = new j.MathNode("mtext", [new j.TextNode(" ")]);
    else {
      if (to.hasOwnProperty(n.text))
        return new j.MathNode("mspace");
      throw new X('Unknown type of space "' + n.text + '"');
    }
    return t;
  }
});
var uc = () => {
  var n = new j.MathNode("mtd", []);
  return n.setAttribute("width", "50%"), n;
};
Nn({
  type: "tag",
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mtable", [new j.MathNode("mtr", [uc(), new j.MathNode("mtd", [hn(n.body, e)]), uc(), new j.MathNode("mtd", [hn(n.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var cc = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, fc = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Z3 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, hc = (n, e) => {
  var t = n.font;
  if (t) {
    if (cc[t])
      return e.withTextFontFamily(cc[t]);
    if (fc[t])
      return e.withTextFontWeight(fc[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Z3[t]);
};
J({
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
      body: ot(a),
      font: r
    };
  },
  htmlBuilder(n, e) {
    var t = hc(n, e), r = yt(n.body, t, !0);
    return N.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(n, e) {
    var t = hc(n, e);
    return hn(n.body, t);
  }
});
J({
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
    var t = Te(n.body, e), r = N.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = N.makeVList({
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
    return N.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mo", [new j.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new j.MathNode("munder", [He(n.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
J({
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
    var t = Te(n.body, e), r = e.fontMetrics().axisHeight, a = 0.5 * (t.height - r - (t.depth + r));
    return N.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    return new j.MathNode("mpadded", [He(n.body, e)], ["vcenter"]);
  }
});
J({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    throw new X("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(n, e) {
    for (var t = dc(n), r = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), r.push(N.makeSymbol(l, "Typewriter-Regular", n.mode, a, ["mord", "texttt"]));
    }
    return N.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), N.tryCombineChars(r), a);
  },
  mathmlBuilder(n, e) {
    var t = new j.TextNode(dc(n)), r = new j.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var dc = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), ln = Ed, n4 = `[ \r
	]`, K3 = "\\\\[a-zA-Z@]+", J3 = "\\\\[^\uD800-\uDFFF]", Q3 = "(" + K3 + ")" + n4 + "*", $3 = `\\\\(
|[ \r	]+
?)[ \r	]*`, Jo = "[̀-ͯ]", e6 = new RegExp(Jo + "+$"), t6 = "(" + n4 + "+)|" + // whitespace
($3 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Jo + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Jo + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Q3) + // \macroName + spaces
("|" + J3 + ")");
class mc {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(t6, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new B0("EOF", new d0(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new X("Unexpected character: '" + e[t] + "'", new B0(e[t], new d0(this, t, t + 1)));
    var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new B0(a, new d0(this, t, this.tokenRegex.lastIndex));
  }
}
class r6 {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new X("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, r) {
    if (r === void 0 && (r = !1), r) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var n6 = Wd;
v("\\noexpand", function(n) {
  var e = n.popToken();
  return n.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
v("\\expandafter", function(n) {
  var e = n.popToken();
  return n.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
v("\\@firstoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
v("\\@secondoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
v("\\@ifnextchar", function(n) {
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
v("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
v("\\TextOrMath", function(n) {
  var e = n.consumeArgs(2);
  return n.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var pc = {
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
v("\\char", function(n) {
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
        throw new X("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = pc[e.text], r == null || r >= t)
      throw new X("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = pc[n.future().text]) != null && a < t; )
      r *= t, r += a, n.popToken();
  }
  return "\\@char{" + r + "}";
});
var Ou = (n, e, t) => {
  var r = n.consumeArg().tokens;
  if (r.length !== 1)
    throw new X("\\newcommand's first argument must be a macro name");
  var a = r[0].text, i = n.isDefined(a);
  if (i && !e)
    throw new X("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new X("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var l = 0;
  if (r = n.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var s = "", o = n.expandNextToken(); o.text !== "]" && o.text !== "EOF"; )
      s += o.text, o = n.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new X("Invalid number of arguments: " + s);
    l = parseInt(s), r = n.consumeArg().tokens;
  }
  return n.macros.set(a, {
    tokens: r,
    numArgs: l
  }), "";
};
v("\\newcommand", (n) => Ou(n, !1, !0));
v("\\renewcommand", (n) => Ou(n, !0, !1));
v("\\providecommand", (n) => Ou(n, !0, !0));
v("\\message", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
v("\\errmessage", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
v("\\show", (n) => {
  var e = n.popToken(), t = e.text;
  return console.log(e, n.macros.get(t), ln[t], Ge.math[t], Ge.text[t]), "";
});
v("\\bgroup", "{");
v("\\egroup", "}");
v("~", "\\nobreakspace");
v("\\lq", "`");
v("\\rq", "'");
v("\\aa", "\\r a");
v("\\AA", "\\r A");
v("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
v("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
v("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
v("ℬ", "\\mathscr{B}");
v("ℰ", "\\mathscr{E}");
v("ℱ", "\\mathscr{F}");
v("ℋ", "\\mathscr{H}");
v("ℐ", "\\mathscr{I}");
v("ℒ", "\\mathscr{L}");
v("ℳ", "\\mathscr{M}");
v("ℛ", "\\mathscr{R}");
v("ℭ", "\\mathfrak{C}");
v("ℌ", "\\mathfrak{H}");
v("ℨ", "\\mathfrak{Z}");
v("\\Bbbk", "\\Bbb{k}");
v("·", "\\cdotp");
v("\\llap", "\\mathllap{\\textrm{#1}}");
v("\\rlap", "\\mathrlap{\\textrm{#1}}");
v("\\clap", "\\mathclap{\\textrm{#1}}");
v("\\mathstrut", "\\vphantom{(}");
v("\\underbar", "\\underline{\\text{#1}}");
v("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
v("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
v("\\ne", "\\neq");
v("≠", "\\neq");
v("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
v("∉", "\\notin");
v("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
v("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
v("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
v("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
v("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
v("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
v("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
v("⟂", "\\perp");
v("‼", "\\mathclose{!\\mkern-0.8mu!}");
v("∌", "\\notni");
v("⌜", "\\ulcorner");
v("⌝", "\\urcorner");
v("⌞", "\\llcorner");
v("⌟", "\\lrcorner");
v("©", "\\copyright");
v("®", "\\textregistered");
v("️", "\\textregistered");
v("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
v("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
v("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
v("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
v("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
v("⋮", "\\vdots");
v("\\varGamma", "\\mathit{\\Gamma}");
v("\\varDelta", "\\mathit{\\Delta}");
v("\\varTheta", "\\mathit{\\Theta}");
v("\\varLambda", "\\mathit{\\Lambda}");
v("\\varXi", "\\mathit{\\Xi}");
v("\\varPi", "\\mathit{\\Pi}");
v("\\varSigma", "\\mathit{\\Sigma}");
v("\\varUpsilon", "\\mathit{\\Upsilon}");
v("\\varPhi", "\\mathit{\\Phi}");
v("\\varPsi", "\\mathit{\\Psi}");
v("\\varOmega", "\\mathit{\\Omega}");
v("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
v("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
v("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
v("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
v("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
v("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var gc = {
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
v("\\dots", function(n) {
  var e = "\\dotso", t = n.expandAfterFuture().text;
  return t in gc ? e = gc[t] : (t.slice(0, 4) === "\\not" || t in Ge.math && ie.contains(["bin", "rel"], Ge.math[t].group)) && (e = "\\dotsb"), e;
});
var qu = {
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
v("\\dotso", function(n) {
  var e = n.future().text;
  return e in qu ? "\\ldots\\," : "\\ldots";
});
v("\\dotsc", function(n) {
  var e = n.future().text;
  return e in qu && e !== "," ? "\\ldots\\," : "\\ldots";
});
v("\\cdots", function(n) {
  var e = n.future().text;
  return e in qu ? "\\@cdots\\," : "\\@cdots";
});
v("\\dotsb", "\\cdots");
v("\\dotsm", "\\cdots");
v("\\dotsi", "\\!\\cdots");
v("\\dotsx", "\\ldots\\,");
v("\\DOTSI", "\\relax");
v("\\DOTSB", "\\relax");
v("\\DOTSX", "\\relax");
v("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
v("\\,", "\\tmspace+{3mu}{.1667em}");
v("\\thinspace", "\\,");
v("\\>", "\\mskip{4mu}");
v("\\:", "\\tmspace+{4mu}{.2222em}");
v("\\medspace", "\\:");
v("\\;", "\\tmspace+{5mu}{.2777em}");
v("\\thickspace", "\\;");
v("\\!", "\\tmspace-{3mu}{.1667em}");
v("\\negthinspace", "\\!");
v("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
v("\\negthickspace", "\\tmspace-{5mu}{.277em}");
v("\\enspace", "\\kern.5em ");
v("\\enskip", "\\hskip.5em\\relax");
v("\\quad", "\\hskip1em\\relax");
v("\\qquad", "\\hskip2em\\relax");
v("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
v("\\tag@paren", "\\tag@literal{({#1})}");
v("\\tag@literal", (n) => {
  if (n.macros.get("\\df@tag"))
    throw new X("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
v("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
v("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
v("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
v("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
v("\\newline", "\\\\\\relax");
v("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var a4 = Z(sr["Main-Regular"][84][1] - 0.7 * sr["Main-Regular"][65][1]);
v("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + a4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
v("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + a4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
v("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
v("\\@hspace", "\\hskip #1\\relax");
v("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
v("\\ordinarycolon", ":");
v("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
v("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
v("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
v("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
v("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
v("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
v("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
v("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
v("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
v("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
v("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
v("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
v("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
v("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
v("∷", "\\dblcolon");
v("∹", "\\eqcolon");
v("≔", "\\coloneqq");
v("≕", "\\eqqcolon");
v("⩴", "\\Coloneqq");
v("\\ratio", "\\vcentcolon");
v("\\coloncolon", "\\dblcolon");
v("\\colonequals", "\\coloneqq");
v("\\coloncolonequals", "\\Coloneqq");
v("\\equalscolon", "\\eqqcolon");
v("\\equalscoloncolon", "\\Eqqcolon");
v("\\colonminus", "\\coloneq");
v("\\coloncolonminus", "\\Coloneq");
v("\\minuscolon", "\\eqcolon");
v("\\minuscoloncolon", "\\Eqcolon");
v("\\coloncolonapprox", "\\Colonapprox");
v("\\coloncolonsim", "\\Colonsim");
v("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
v("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
v("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
v("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
v("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
v("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
v("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
v("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
v("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
v("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
v("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
v("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
v("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
v("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
v("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
v("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
v("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
v("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
v("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
v("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
v("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
v("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
v("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
v("\\imath", "\\html@mathml{\\@imath}{ı}");
v("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
v("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
v("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
v("⟦", "\\llbracket");
v("⟧", "\\rrbracket");
v("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
v("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
v("⦃", "\\lBrace");
v("⦄", "\\rBrace");
v("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
v("⦵", "\\minuso");
v("\\darr", "\\downarrow");
v("\\dArr", "\\Downarrow");
v("\\Darr", "\\Downarrow");
v("\\lang", "\\langle");
v("\\rang", "\\rangle");
v("\\uarr", "\\uparrow");
v("\\uArr", "\\Uparrow");
v("\\Uarr", "\\Uparrow");
v("\\N", "\\mathbb{N}");
v("\\R", "\\mathbb{R}");
v("\\Z", "\\mathbb{Z}");
v("\\alef", "\\aleph");
v("\\alefsym", "\\aleph");
v("\\Alpha", "\\mathrm{A}");
v("\\Beta", "\\mathrm{B}");
v("\\bull", "\\bullet");
v("\\Chi", "\\mathrm{X}");
v("\\clubs", "\\clubsuit");
v("\\cnums", "\\mathbb{C}");
v("\\Complex", "\\mathbb{C}");
v("\\Dagger", "\\ddagger");
v("\\diamonds", "\\diamondsuit");
v("\\empty", "\\emptyset");
v("\\Epsilon", "\\mathrm{E}");
v("\\Eta", "\\mathrm{H}");
v("\\exist", "\\exists");
v("\\harr", "\\leftrightarrow");
v("\\hArr", "\\Leftrightarrow");
v("\\Harr", "\\Leftrightarrow");
v("\\hearts", "\\heartsuit");
v("\\image", "\\Im");
v("\\infin", "\\infty");
v("\\Iota", "\\mathrm{I}");
v("\\isin", "\\in");
v("\\Kappa", "\\mathrm{K}");
v("\\larr", "\\leftarrow");
v("\\lArr", "\\Leftarrow");
v("\\Larr", "\\Leftarrow");
v("\\lrarr", "\\leftrightarrow");
v("\\lrArr", "\\Leftrightarrow");
v("\\Lrarr", "\\Leftrightarrow");
v("\\Mu", "\\mathrm{M}");
v("\\natnums", "\\mathbb{N}");
v("\\Nu", "\\mathrm{N}");
v("\\Omicron", "\\mathrm{O}");
v("\\plusmn", "\\pm");
v("\\rarr", "\\rightarrow");
v("\\rArr", "\\Rightarrow");
v("\\Rarr", "\\Rightarrow");
v("\\real", "\\Re");
v("\\reals", "\\mathbb{R}");
v("\\Reals", "\\mathbb{R}");
v("\\Rho", "\\mathrm{P}");
v("\\sdot", "\\cdot");
v("\\sect", "\\S");
v("\\spades", "\\spadesuit");
v("\\sub", "\\subset");
v("\\sube", "\\subseteq");
v("\\supe", "\\supseteq");
v("\\Tau", "\\mathrm{T}");
v("\\thetasym", "\\vartheta");
v("\\weierp", "\\wp");
v("\\Zeta", "\\mathrm{Z}");
v("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
v("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
v("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
v("\\bra", "\\mathinner{\\langle{#1}|}");
v("\\ket", "\\mathinner{|{#1}\\rangle}");
v("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
v("\\Bra", "\\left\\langle#1\\right|");
v("\\Ket", "\\left|#1\\right\\rangle");
var i4 = (n) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), s = e.macros.get("\\|");
  e.macros.beginGroup();
  var o = (d) => (f) => {
    n && (f.macros.set("|", l), a.length && f.macros.set("\\|", s));
    var p = d;
    if (!d && a.length) {
      var g = f.future();
      g.text === "|" && (f.popToken(), p = !0);
    }
    return {
      tokens: p ? a : r,
      numArgs: 0
    };
  };
  e.macros.set("|", o(!1)), a.length && e.macros.set("\\|", o(!0));
  var u = e.consumeArg().tokens, c = e.expandTokens([
    ...i,
    ...u,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: c.reverse(),
    numArgs: 0
  };
};
v("\\bra@ket", i4(!1));
v("\\bra@set", i4(!0));
v("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
v("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
v("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
v("\\angln", "{\\angl n}");
v("\\blue", "\\textcolor{##6495ed}{#1}");
v("\\orange", "\\textcolor{##ffa500}{#1}");
v("\\pink", "\\textcolor{##ff00af}{#1}");
v("\\red", "\\textcolor{##df0030}{#1}");
v("\\green", "\\textcolor{##28ae7b}{#1}");
v("\\gray", "\\textcolor{gray}{#1}");
v("\\purple", "\\textcolor{##9d38bd}{#1}");
v("\\blueA", "\\textcolor{##ccfaff}{#1}");
v("\\blueB", "\\textcolor{##80f6ff}{#1}");
v("\\blueC", "\\textcolor{##63d9ea}{#1}");
v("\\blueD", "\\textcolor{##11accd}{#1}");
v("\\blueE", "\\textcolor{##0c7f99}{#1}");
v("\\tealA", "\\textcolor{##94fff5}{#1}");
v("\\tealB", "\\textcolor{##26edd5}{#1}");
v("\\tealC", "\\textcolor{##01d1c1}{#1}");
v("\\tealD", "\\textcolor{##01a995}{#1}");
v("\\tealE", "\\textcolor{##208170}{#1}");
v("\\greenA", "\\textcolor{##b6ffb0}{#1}");
v("\\greenB", "\\textcolor{##8af281}{#1}");
v("\\greenC", "\\textcolor{##74cf70}{#1}");
v("\\greenD", "\\textcolor{##1fab54}{#1}");
v("\\greenE", "\\textcolor{##0d923f}{#1}");
v("\\goldA", "\\textcolor{##ffd0a9}{#1}");
v("\\goldB", "\\textcolor{##ffbb71}{#1}");
v("\\goldC", "\\textcolor{##ff9c39}{#1}");
v("\\goldD", "\\textcolor{##e07d10}{#1}");
v("\\goldE", "\\textcolor{##a75a05}{#1}");
v("\\redA", "\\textcolor{##fca9a9}{#1}");
v("\\redB", "\\textcolor{##ff8482}{#1}");
v("\\redC", "\\textcolor{##f9685d}{#1}");
v("\\redD", "\\textcolor{##e84d39}{#1}");
v("\\redE", "\\textcolor{##bc2612}{#1}");
v("\\maroonA", "\\textcolor{##ffbde0}{#1}");
v("\\maroonB", "\\textcolor{##ff92c6}{#1}");
v("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
v("\\maroonD", "\\textcolor{##ca337c}{#1}");
v("\\maroonE", "\\textcolor{##9e034e}{#1}");
v("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
v("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
v("\\purpleC", "\\textcolor{##aa87ff}{#1}");
v("\\purpleD", "\\textcolor{##7854ab}{#1}");
v("\\purpleE", "\\textcolor{##543b78}{#1}");
v("\\mintA", "\\textcolor{##f5f9e8}{#1}");
v("\\mintB", "\\textcolor{##edf2df}{#1}");
v("\\mintC", "\\textcolor{##e0e5cc}{#1}");
v("\\grayA", "\\textcolor{##f6f7f7}{#1}");
v("\\grayB", "\\textcolor{##f0f1f2}{#1}");
v("\\grayC", "\\textcolor{##e3e5e6}{#1}");
v("\\grayD", "\\textcolor{##d6d8da}{#1}");
v("\\grayE", "\\textcolor{##babec2}{#1}");
v("\\grayF", "\\textcolor{##888d93}{#1}");
v("\\grayG", "\\textcolor{##626569}{#1}");
v("\\grayH", "\\textcolor{##3b3e40}{#1}");
v("\\grayI", "\\textcolor{##21242c}{#1}");
v("\\kaBlue", "\\textcolor{##314453}{#1}");
v("\\kaGreen", "\\textcolor{##71B307}{#1}");
var l4 = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class a6 {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new r6(n6, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new mc(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, r, a;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: a,
        end: r
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: t,
        end: r
      } = this.consumeArg());
    return this.pushToken(new B0("EOF", r.loc)), this.pushTokens(a), t.range(r, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], r = e && e.length > 0;
    r || this.consumeSpaces();
    var a = this.future(), i, l = 0, s = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++l;
      else if (i.text === "}") {
        if (--l, l === -1)
          throw new X("Extra }", i);
      } else if (i.text === "EOF")
        throw new X("Unexpected end of input in a macro argument, expected '" + (e && r ? e[s] : "}") + "'", i);
      if (e && r)
        if ((l === 0 || l === 1 && e[s] === "{") && i.text === e[s]) {
          if (++s, s === e.length) {
            t.splice(-s, s);
            break;
          }
        } else
          s = 0;
    } while (l !== 0 || r);
    return a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new X("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], a = 0; a < r.length; a++) {
        var i = this.popToken();
        if (r[a] !== i.text)
          throw new X("Use of the macro doesn't match its definition", i);
      }
    }
    for (var l = [], s = 0; s < e; s++)
      l.push(this.consumeArg(t && t[s + 1]).tokens);
    return l;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new X("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), r = t.text, a = t.noexpand ? null : this._getExpansion(r);
    if (a == null || e && a.unexpandable) {
      if (e && a == null && r[0] === "\\" && !this.isDefined(r))
        throw new X("Undefined control sequence: " + r);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, l = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var s = i.length - 1; s >= 0; --s) {
        var o = i[s];
        if (o.text === "#") {
          if (s === 0)
            throw new X("Incomplete placeholder at end of macro body", o);
          if (o = i[--s], o.text === "#")
            i.splice(s + 1, 1);
          else if (/^[1-9]$/.test(o.text))
            i.splice(s, 2, ...l[+o.text - 1]);
          else
            throw new X("Not a valid argument number", o);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new B0(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], r = this.stack.length;
    for (this.pushTokens(e); this.stack.length > r; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), t.push(a);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((r) => r.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var r = this.lexer.catcodes[e];
      if (r != null && r !== 13)
        return;
    }
    var a = typeof t == "function" ? t(this) : t;
    if (typeof a == "string") {
      var i = 0;
      if (a.indexOf("#") !== -1)
        for (var l = a.replace(/##/g, ""); l.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var s = new mc(a, this.settings), o = [], u = s.lex(); u.text !== "EOF"; )
        o.push(u), u = s.lex();
      o.reverse();
      var c = {
        tokens: o,
        numArgs: i
      };
      return c;
    }
    return a;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || ln.hasOwnProperty(e) || Ge.math.hasOwnProperty(e) || Ge.text.hasOwnProperty(e) || l4.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : ln.hasOwnProperty(e) && !ln[e].primitive;
  }
}
var _c = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Wi = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), no = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, vc = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class ns {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new a6(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new X("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new B0("}")), this.gullet.pushTokens(e);
    var r = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, r;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var r = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (ns.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && ln[a.text] && ln[a.text].infix)
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      r.push(i);
    }
    return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, r, a = 0; a < e.length; a++)
      if (e[a].type === "infix") {
        if (t !== -1)
          throw new X("only one infix operator per group", e[a].token);
        t = a, r = e[a].replaceWith;
      }
    if (t !== -1 && r) {
      var i, l, s = e.slice(0, t), o = e.slice(t + 1);
      s.length === 1 && s[0].type === "ordgroup" ? i = s[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: s
      }, o.length === 1 && o[0].type === "ordgroup" ? l = o[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: o
      };
      var u;
      return r === "\\\\abovefrac" ? u = this.callFunction(r, [i, e[t], l], []) : u = this.callFunction(r, [i, l], []), [u];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), r = t.text;
    this.consume(), this.consumeSpaces();
    var a = this.parseGroup(e);
    if (!a)
      throw new X("Expected group after '" + r + "'", t);
    return a;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], r = 0; r < e.length; r++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[r]
      });
    var a = {
      type: "text",
      mode: this.mode,
      body: t
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [a]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text")
      return t;
    for (var r, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = i.text === "\\limits";
          t.limits = l, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new X("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (r)
          throw new X("Double superscript", i);
        r = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new X("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (r)
          throw new X("Double superscript", i);
        var s = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, o = [s];
        for (this.consume(); this.fetch().text === "'"; )
          o.push(s), this.consume();
        this.fetch().text === "^" && o.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: o
        };
      } else if (Wi[i.text]) {
        var u = _c.test(i.text), c = [];
        for (c.push(new B0(Wi[i.text])), this.consume(); ; ) {
          var d = this.fetch().text;
          if (!Wi[d] || _c.test(d) !== u)
            break;
          c.unshift(new B0(Wi[d])), this.consume();
        }
        var f = this.subparse(c);
        u ? a = {
          type: "ordgroup",
          mode: "math",
          body: f
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: f
        };
      } else
        break;
    }
    return r || a ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: r,
      sub: a
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var r = this.fetch(), a = r.text, i = ln[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new X("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !i.allowedInText)
      throw new X("Can't use function '" + a + "' in text mode", r);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new X("Can't use function '" + a + "' in math mode", r);
    var {
      args: l,
      optArgs: s
    } = this.parseArguments(a, i);
    return this.callFunction(a, l, s, r, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, r, a, i) {
    var l = {
      funcName: e,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, s = ln[e];
    if (s && s.handler)
      return s.handler(l, t, r);
    throw new X("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var r = t.numArgs + t.numOptionalArgs;
    if (r === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var a = [], i = [], l = 0; l < r; l++) {
      var s = t.argTypes && t.argTypes[l], o = l < t.numOptionalArgs;
      (t.primitive && s == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && i[0] == null) && (s = "primitive");
      var u = this.parseGroupOfType("argument to '" + e + "'", s, o);
      if (o)
        i.push(u);
      else if (u != null)
        a.push(u);
      else
        throw new X("Null argument, please report this as a bug");
    }
    return {
      args: a,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, r) {
    switch (t) {
      case "color":
        return this.parseColorGroup(r);
      case "size":
        return this.parseSizeGroup(r);
      case "url":
        return this.parseUrlGroup(r);
      case "math":
      case "text":
        return this.parseArgumentGroup(r, t);
      case "hbox": {
        var a = this.parseArgumentGroup(r, "text");
        return a != null ? {
          type: "styling",
          mode: a.mode,
          body: [a],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", r);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (r)
          throw new X("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new X("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new X("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var r = this.gullet.scanArgument(t);
    if (r == null)
      return null;
    for (var a = "", i; (i = this.fetch()).text !== "EOF"; )
      a += i.text, this.consume();
    return this.consume(), r.text = a, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var r = this.fetch(), a = r, i = "", l; (l = this.fetch()).text !== "EOF" && e.test(i + l.text); )
      a = l, i += a.text, this.consume();
    if (i === "")
      throw new X("Invalid " + t + ": '" + r.text + "'", r);
    return r.range(a, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!r)
      throw new X("Invalid color: '" + t.text + "'", t);
    var a = r[0];
    return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
      type: "color-token",
      mode: this.mode,
      color: a
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, r = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", r = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!a)
      throw new X("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!gd(i))
      throw new X("Invalid unit: '" + i.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: r
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: r
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    var a = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = {
      type: "ordgroup",
      mode: this.mode,
      loc: r.loc,
      body: i
    };
    return t && this.switchMode(a), l;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var r = this.fetch(), a = r.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var l = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var s = this.parseExpression(!1, l), o = this.fetch();
      this.expect(l), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: d0.range(r, o),
        body: s,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !l4.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new X("Undefined control sequence: " + a, r);
      i = this.formatUnsupportedCmd(a), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, r = 0; r < t; ++r) {
      var a = e[r], i = a.text;
      i === "-" && e[r + 1].text === "-" && (r + 1 < t && e[r + 2].text === "-" ? (e.splice(r, 3, {
        type: "textord",
        mode: "text",
        loc: d0.range(a, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: d0.range(a, e[r + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[r + 1].text === i && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: d0.range(a, e[r + 1]),
        text: i + i
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var r = t.slice(5), a = r.charAt(0) === "*";
      if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1))
        throw new X(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: a
      };
    }
    vc.hasOwnProperty(t[0]) && !Ge[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = vc[t[0]] + t.slice(1));
    var i = e6.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (Ge[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Wo.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var s = Ge[this.mode][t].group, o = d0.range(e), u;
      if (W5.hasOwnProperty(s)) {
        var c = s;
        u = {
          type: "atom",
          mode: this.mode,
          family: c,
          loc: o,
          text: t
        };
      } else
        u = {
          type: s,
          mode: this.mode,
          loc: o,
          text: t
        };
      l = u;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (pd(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: d0.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var d = 0; d < i[0].length; d++) {
        var f = i[0][d];
        if (!no[f])
          throw new X("Unknown accent ' " + f + "'", e);
        var p = no[f][this.mode] || no[f].text;
        if (!p)
          throw new X("Accent " + f + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: d0.range(e),
          label: p,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
ns.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Pu = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new ns(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var a = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new X("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: r.subparse([new B0("\\df@tag")])
    }];
  }
  return a;
}, s4 = function(e, t, r) {
  t.textContent = "";
  var a = Hu(e, r).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), s4 = function() {
  throw new X("KaTeX doesn't work in quirks mode.");
});
var i6 = function(e, t) {
  var r = Hu(e, t).toMarkup();
  return r;
}, l6 = function(e, t) {
  var r = new ku(t);
  return Pu(e, r);
}, o4 = function(e, t, r) {
  if (r.throwOnError || !(e instanceof X))
    throw e;
  var a = N.makeSpan(["katex-error"], [new I0(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + r.errorColor), a;
}, Hu = function(e, t) {
  var r = new ku(t);
  try {
    var a = Pu(e, r);
    return p3(a, e, r);
  } catch (i) {
    return o4(i, e, r);
  }
}, s6 = function(e, t) {
  var r = new ku(t);
  try {
    var a = Pu(e, r);
    return g3(a, e, r);
  } catch (i) {
    return o4(i, e, r);
  }
}, Qo = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: s4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: i6,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: X,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: _l,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: l6,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Hu,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: s6,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: q5,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: h,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: J,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: v,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: li,
    Anchor: Eu,
    SymbolNode: I0,
    SvgNode: Lr,
    PathNode: fn,
    LineNode: jo
  }
};
const Iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" }));
var o6 = function(e, t, r) {
  for (var a = r, i = 0, l = e.length; a < t.length; ) {
    var s = t[a];
    if (i <= 0 && t.slice(a, a + l) === e)
      return a;
    s === "\\" ? a++ : s === "{" ? i++ : s === "}" && i--, a++;
  }
  return -1;
}, u6 = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, c6 = /^\\begin{/, f6 = function(e, t) {
  for (var r, a = [], i = new RegExp("(" + t.map((u) => u6(u.left)).join("|") + ")"); r = e.search(i), r !== -1; ) {
    r > 0 && (a.push({
      type: "text",
      data: e.slice(0, r)
    }), e = e.slice(r));
    var l = t.findIndex((u) => e.startsWith(u.left));
    if (r = o6(t[l].right, e, t[l].left.length), r === -1)
      break;
    var s = e.slice(0, r + t[l].right.length), o = c6.test(s) ? s : e.slice(t[l].left.length, r);
    a.push({
      type: "math",
      data: o,
      rawData: s,
      display: t[l].display
    }), e = e.slice(r + t[l].right.length);
  }
  return e !== "" && a.push({
    type: "text",
    data: e
  }), a;
}, h6 = function(e, t) {
  var r = f6(e, t.delimiters);
  if (r.length === 1 && r[0].type === "text")
    return null;
  for (var a = document.createDocumentFragment(), i = 0; i < r.length; i++)
    if (r[i].type === "text")
      a.appendChild(document.createTextNode(r[i].data));
    else {
      var l = document.createElement("span"), s = r[i].data;
      t.displayMode = r[i].display;
      try {
        t.preProcess && (s = t.preProcess(s)), Qo.render(s, l, t);
      } catch (o) {
        if (!(o instanceof Qo.ParseError))
          throw o;
        t.errorCallback("KaTeX auto-render: Failed to parse `" + r[i].data + "` with ", o), a.appendChild(document.createTextNode(r[i].rawData));
        continue;
      }
      a.appendChild(l);
    }
  return a;
}, d6 = function n(e, t) {
  for (var r = 0; r < e.childNodes.length; r++) {
    var a = e.childNodes[r];
    if (a.nodeType === 3) {
      for (var i = a.textContent, l = a.nextSibling, s = 0; l && l.nodeType === Node.TEXT_NODE; )
        i += l.textContent, l = l.nextSibling, s++;
      var o = h6(i, t);
      if (o) {
        for (var u = 0; u < s; u++)
          a.nextSibling.remove();
        r += o.childNodes.length - 1, e.replaceChild(o, a);
      } else
        r += s;
    } else a.nodeType === 1 && function() {
      var c = " " + a.className + " ", d = t.ignoredTags.indexOf(a.nodeName.toLowerCase()) === -1 && t.ignoredClasses.every((f) => c.indexOf(" " + f + " ") === -1);
      d && n(a, t);
    }();
  }
}, m6 = function(e, t) {
  if (!e)
    throw new Error("No element provided to render");
  var r = {};
  for (var a in t)
    t.hasOwnProperty(a) && (r[a] = t[a]);
  r.delimiters = r.delimiters || [
    {
      left: "$$",
      right: "$$",
      display: !0
    },
    {
      left: "\\(",
      right: "\\)",
      display: !1
    },
    // LaTeX uses $…$, but it ruins the display of normal `$` in text:
    // {left: "$", right: "$", display: false},
    // $ must come after $$
    // Render AMS environments even if outside $$…$$ delimiters.
    {
      left: "\\begin{equation}",
      right: "\\end{equation}",
      display: !0
    },
    {
      left: "\\begin{align}",
      right: "\\end{align}",
      display: !0
    },
    {
      left: "\\begin{alignat}",
      right: "\\end{alignat}",
      display: !0
    },
    {
      left: "\\begin{gather}",
      right: "\\end{gather}",
      display: !0
    },
    {
      left: "\\begin{CD}",
      right: "\\end{CD}",
      display: !0
    },
    {
      left: "\\[",
      right: "\\]",
      display: !0
    }
  ], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, d6(e, r);
};
function Uu() {
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
let Rn = Uu();
function u4(n) {
  Rn = n;
}
const c4 = /[&<>"']/, p6 = new RegExp(c4.source, "g"), f4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, g6 = new RegExp(f4.source, "g"), _6 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, bc = (n) => _6[n];
function m0(n, e) {
  if (e) {
    if (c4.test(n))
      return n.replace(p6, bc);
  } else if (f4.test(n))
    return n.replace(g6, bc);
  return n;
}
const v6 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function b6(n) {
  return n.replace(v6, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const w6 = /(^|[^\[])\^/g;
function qe(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(w6, "$1"), t = t.replace(a, l), r;
    },
    getRegex: () => new RegExp(t, e)
  };
  return r;
}
function wc(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Va = { exec: () => null };
function yc(n, e) {
  const t = n.replace(/\|/g, (i, l, s) => {
    let o = !1, u = l;
    for (; --u >= 0 && s[u] === "\\"; )
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
function Xi(n, e, t) {
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
function y6(n, e) {
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
function kc(n, e, t, r) {
  const a = e.href, i = e.title ? m0(e.title) : null, l = n[1].replace(/\\([\[\]])/g, "$1");
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
    text: m0(l)
  };
}
function k6(n, e) {
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
class Bl {
  // set by the lexer
  constructor(e) {
    je(this, "options");
    je(this, "rules");
    // set by the lexer
    je(this, "lexer");
    this.options = e || Rn;
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
        text: this.options.pedantic ? r : Xi(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], a = k6(r, t[3] || "");
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
        const a = Xi(r, "#");
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
      r = Xi(r.replace(/^ *>[ \t]?/gm, ""), `
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
      let s = "", o = "", u = !1;
      for (; e; ) {
        let c = !1;
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e))
          break;
        s = t[0], e = e.substring(s.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (w) => " ".repeat(3 * w.length)), f = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, o = d.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, o = d.slice(p), p += t[1].length);
        let g = !1;
        if (!d && /^ *$/.test(f) && (s += f + `
`, e = e.substring(f.length + 1), c = !0), !c) {
          const w = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), k = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), D = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const E = e.split(`
`, 1)[0];
            if (f = E, this.options.pedantic && (f = f.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(f) || D.test(f) || w.test(f) || k.test(e))
              break;
            if (f.search(/[^ ]/) >= p || !f.trim())
              o += `
` + f.slice(p);
            else {
              if (g || d.search(/[^ ]/) >= 4 || y.test(d) || D.test(d) || k.test(d))
                break;
              o += `
` + f;
            }
            !g && !f.trim() && (g = !0), s += E + `
`, e = e.substring(E.length + 1), d = f.slice(p);
          }
        }
        i.loose || (u ? i.loose = !0 : /\n *\n *$/.test(s) && (u = !0));
        let b = null, A;
        this.options.gfm && (b = /^\[[ xX]\] /.exec(o), b && (A = b[0] !== "[ ] ", o = o.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: s,
          task: !!b,
          checked: A,
          loose: !1,
          text: o,
          tokens: []
        }), i.raw += s;
      }
      i.items[i.items.length - 1].raw = s.trimEnd(), i.items[i.items.length - 1].text = o.trimEnd(), i.raw = i.raw.trimEnd();
      for (let c = 0; c < i.items.length; c++)
        if (this.lexer.state.top = !1, i.items[c].tokens = this.lexer.blockTokens(i.items[c].text, []), !i.loose) {
          const d = i.items[c].tokens.filter((p) => p.type === "space"), f = d.length > 0 && d.some((p) => /\n.*\n/.test(p.raw));
          i.loose = f;
        }
      if (i.loose)
        for (let c = 0; c < i.items.length; c++)
          i.items[c].loose = !0;
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
    const r = yc(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
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
        l.rows.push(yc(s, l.header.length).map((o) => ({
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
        text: m0(t[1])
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
        const l = Xi(r.slice(0, -1), "\\");
        if ((r.length - l.length) % 2 === 0)
          return;
      } else {
        const l = y6(t[2], "()");
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
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(r) ? a = a.slice(1) : a = a.slice(1, -1)), kc(t, {
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
      return kc(r, i, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const l = [...a[0]].length - 1;
      let s, o, u = l, c = 0;
      const d = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + l); (a = d.exec(t)) != null; ) {
        if (s = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !s)
          continue;
        if (o = [...s].length, a[3] || a[4]) {
          u += o;
          continue;
        } else if ((a[5] || a[6]) && l % 3 && !((l + o) % 3)) {
          c += o;
          continue;
        }
        if (u -= o, u > 0)
          continue;
        o = Math.min(o, o + u + c);
        const f = [...a[0]][0].length, p = e.slice(0, l + a.index + f + o);
        if (Math.min(l, o) % 2) {
          const b = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: b,
            tokens: this.lexer.inlineTokens(b)
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
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return a && i && (r = r.substring(1, r.length - 1)), r = m0(r, !0), {
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
      return t[2] === "@" ? (r = m0(t[1]), a = "mailto:" + r) : (r = m0(t[1]), a = r), {
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
        a = m0(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (l !== t[0]);
        a = m0(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
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
      return this.lexer.state.inRawBlock ? r = t[0] : r = m0(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const D6 = /^(?: *(?:\n|$))+/, A6 = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, E6 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, oi = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, S6 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, h4 = /(?:[*+-]|\d{1,9}[.)])/, d4 = qe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, h4).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Gu = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, x6 = /^[^\n]+/, Vu = /(?!\s*\])(?:\\.|[^\[\]\\])+/, T6 = qe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Vu).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), F6 = qe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, h4).getRegex(), as = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ju = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, C6 = qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ju).replace("tag", as).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), m4 = qe(Gu).replace("hr", oi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", as).getRegex(), M6 = qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", m4).getRegex(), Wu = {
  blockquote: M6,
  code: A6,
  def: T6,
  fences: E6,
  heading: S6,
  hr: oi,
  html: C6,
  lheading: d4,
  list: F6,
  newline: D6,
  paragraph: m4,
  table: Va,
  text: x6
}, Dc = qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", oi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", as).getRegex(), z6 = {
  ...Wu,
  table: Dc,
  paragraph: qe(Gu).replace("hr", oi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Dc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", as).getRegex()
}, B6 = {
  ...Wu,
  html: qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ju).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Va,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: qe(Gu).replace("hr", oi).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", d4).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, p4 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, I6 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, g4 = /^( {2,}|\\)\n(?!\s*$)/, L6 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ui = "\\p{P}\\p{S}", N6 = qe(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ui).getRegex(), R6 = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, O6 = qe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ui).getRegex(), q6 = qe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ui).getRegex(), P6 = qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ui).getRegex(), H6 = qe(/\\([punct])/, "gu").replace(/punct/g, ui).getRegex(), U6 = qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), G6 = qe(ju).replace("(?:-->|$)", "-->").getRegex(), V6 = qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", G6).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Il = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, j6 = qe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Il).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), _4 = qe(/^!?\[(label)\]\[(ref)\]/).replace("label", Il).replace("ref", Vu).getRegex(), v4 = qe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vu).getRegex(), W6 = qe("reflink|nolink(?!\\()", "g").replace("reflink", _4).replace("nolink", v4).getRegex(), Xu = {
  _backpedal: Va,
  // only used for GFM url
  anyPunctuation: H6,
  autolink: U6,
  blockSkip: R6,
  br: g4,
  code: I6,
  del: Va,
  emStrongLDelim: O6,
  emStrongRDelimAst: q6,
  emStrongRDelimUnd: P6,
  escape: p4,
  link: j6,
  nolink: v4,
  punctuation: N6,
  reflink: _4,
  reflinkSearch: W6,
  tag: V6,
  text: L6,
  url: Va
}, X6 = {
  ...Xu,
  link: qe(/^!?\[(label)\]\((.*?)\)/).replace("label", Il).getRegex(),
  reflink: qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Il).getRegex()
}, $o = {
  ...Xu,
  escape: qe(p4).replace("])", "~|])").getRegex(),
  url: qe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Y6 = {
  ...$o,
  br: qe(g4).replace("{2,}", "*").getRegex(),
  text: qe($o.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Yi = {
  normal: Wu,
  gfm: z6,
  pedantic: B6
}, Ta = {
  normal: Xu,
  gfm: $o,
  breaks: Y6,
  pedantic: X6
};
class or {
  constructor(e) {
    je(this, "tokens");
    je(this, "options");
    je(this, "state");
    je(this, "tokenizer");
    je(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Rn, this.options.tokenizer = this.options.tokenizer || new Bl(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Yi.normal,
      inline: Ta.normal
    };
    this.options.pedantic ? (t.block = Yi.pedantic, t.inline = Ta.pedantic) : this.options.gfm && (t.block = Yi.gfm, this.options.breaks ? t.inline = Ta.breaks : t.inline = Ta.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Yi,
      inline: Ta
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new or(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new or(t).inlineTokens(e);
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
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (s, o, u) => o + "    ".repeat(u.length));
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
          let u;
          this.options.extensions.startBlock.forEach((c) => {
            u = c.call({ lexer: this }, o), typeof u == "number" && u >= 0 && (s = Math.min(s, u));
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
    let r, a, i, l = e, s, o, u;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          c.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, s.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (o || (u = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (r = c.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
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
        if (r = this.tokenizer.emStrong(e, l, u)) {
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
          let c = 1 / 0;
          const d = e.slice(1);
          let f;
          this.options.extensions.startInline.forEach((p) => {
            f = p.call({ lexer: this }, d), typeof f == "number" && f >= 0 && (c = Math.min(c, f));
          }), c < 1 / 0 && c >= 0 && (i = e.substring(0, c + 1));
        }
        if (r = this.tokenizer.inlineText(i)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (u = r.raw.slice(-1)), o = !0, a = t[t.length - 1], a && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          const c = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else
            throw new Error(c);
        }
      }
    return t;
  }
}
class Ll {
  constructor(e) {
    je(this, "options");
    this.options = e || Rn;
  }
  code(e, t, r) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + m0(a) + '">' + (r ? e : m0(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : m0(e, !0)) + `</code></pre>
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
    const a = wc(e);
    if (a === null)
      return r;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + r + "</a>", i;
  }
  image(e, t, r) {
    const a = wc(e);
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
class Yu {
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
class ur {
  constructor(e) {
    je(this, "options");
    je(this, "renderer");
    je(this, "textRenderer");
    this.options = e || Rn, this.options.renderer = this.options.renderer || new Ll(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Yu();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new ur(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new ur(t).parseInline(e);
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
          r += this.renderer.heading(this.parseInline(l.tokens), l.depth, b6(this.parseInline(l.tokens, this.textRenderer)));
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
          for (let c = 0; c < l.header.length; c++)
            o += this.renderer.tablecell(this.parseInline(l.header[c].tokens), { header: !0, align: l.align[c] });
          s += this.renderer.tablerow(o);
          let u = "";
          for (let c = 0; c < l.rows.length; c++) {
            const d = l.rows[c];
            o = "";
            for (let f = 0; f < d.length; f++)
              o += this.renderer.tablecell(this.parseInline(d[f].tokens), { header: !1, align: l.align[f] });
            u += this.renderer.tablerow(o);
          }
          r += this.renderer.table(s, u);
          continue;
        }
        case "blockquote": {
          const l = i, s = this.parse(l.tokens);
          r += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          const l = i, s = l.ordered, o = l.start, u = l.loose;
          let c = "";
          for (let d = 0; d < l.items.length; d++) {
            const f = l.items[d], p = f.checked, g = f.task;
            let b = "";
            if (f.task) {
              const A = this.renderer.checkbox(!!p);
              u ? f.tokens.length > 0 && f.tokens[0].type === "paragraph" ? (f.tokens[0].text = A + " " + f.tokens[0].text, f.tokens[0].tokens && f.tokens[0].tokens.length > 0 && f.tokens[0].tokens[0].type === "text" && (f.tokens[0].tokens[0].text = A + " " + f.tokens[0].tokens[0].text)) : f.tokens.unshift({
                type: "text",
                text: A + " "
              }) : b += A + " ";
            }
            b += this.parse(f.tokens, u), c += this.renderer.listitem(b, g, !!p);
          }
          r += this.renderer.list(c, s, o);
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
class ja {
  constructor(e) {
    je(this, "options");
    this.options = e || Rn;
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
je(ja, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Ln, eu, w4;
class b4 {
  constructor(...e) {
    w1(this, Ln);
    je(this, "defaults", Uu());
    je(this, "options", this.setOptions);
    je(this, "parse", Ai(this, Ln, eu).call(this, or.lex, ur.parse));
    je(this, "parseInline", Ai(this, Ln, eu).call(this, or.lexInline, ur.parseInline));
    je(this, "Parser", ur);
    je(this, "Renderer", Ll);
    je(this, "TextRenderer", Yu);
    je(this, "Lexer", or);
    je(this, "Tokenizer", Bl);
    je(this, "Hooks", ja);
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
            for (const u of o)
              r = r.concat(this.walkTokens(u.tokens, t));
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
            const u = s[o].flat(1 / 0);
            r = r.concat(this.walkTokens(u, t));
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
        const i = this.defaults.renderer || new Ll(this.defaults);
        for (const l in r.renderer) {
          if (!(l in i))
            throw new Error(`renderer '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.renderer[s], u = i[s];
          i[s] = (...c) => {
            let d = o.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d || "";
          };
        }
        a.renderer = i;
      }
      if (r.tokenizer) {
        const i = this.defaults.tokenizer || new Bl(this.defaults);
        for (const l in r.tokenizer) {
          if (!(l in i))
            throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l))
            continue;
          const s = l, o = r.tokenizer[s], u = i[s];
          i[s] = (...c) => {
            let d = o.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d;
          };
        }
        a.tokenizer = i;
      }
      if (r.hooks) {
        const i = this.defaults.hooks || new ja();
        for (const l in r.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.hooks[s], u = i[s];
          ja.passThroughHooks.has(l) ? i[s] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(i, c)).then((f) => u.call(i, f));
            const d = o.call(i, c);
            return u.call(i, d);
          } : i[s] = (...c) => {
            let d = o.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d;
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
    return or.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return ur.parse(e, t ?? this.defaults);
  }
}
Ln = new WeakSet(), eu = function(e, t) {
  return (r, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = Ai(this, Ln, w4).call(this, !!l.silent, !!l.async);
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
      let u = t(o, l);
      return l.hooks && (u = l.hooks.postprocess(u)), u;
    } catch (o) {
      return s(o);
    }
  };
}, w4 = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + m0(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const Bn = new b4();
function Oe(n, e) {
  return Bn.parse(n, e);
}
Oe.options = Oe.setOptions = function(n) {
  return Bn.setOptions(n), Oe.defaults = Bn.defaults, u4(Oe.defaults), Oe;
};
Oe.getDefaults = Uu;
Oe.defaults = Rn;
Oe.use = function(...n) {
  return Bn.use(...n), Oe.defaults = Bn.defaults, u4(Oe.defaults), Oe;
};
Oe.walkTokens = function(n, e) {
  return Bn.walkTokens(n, e);
};
Oe.parseInline = Bn.parseInline;
Oe.Parser = ur;
Oe.parser = ur.parse;
Oe.Renderer = Ll;
Oe.TextRenderer = Yu;
Oe.Lexer = or;
Oe.lexer = or.lex;
Oe.Tokenizer = Bl;
Oe.Hooks = ja;
Oe.parse = Oe;
Oe.options;
Oe.setOptions;
Oe.use;
Oe.walkTokens;
Oe.parseInline;
ur.parse;
or.lex;
function Z6(n) {
  if (typeof n == "function" && (n = {
    highlight: n
  }), !n || typeof n.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof n.langPrefix != "string" && (n.langPrefix = "language-"), typeof n.emptyLangClass != "string" && (n.emptyLangClass = ""), {
    async: !!n.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = Ac(e.lang);
      if (n.async)
        return Promise.resolve(n.highlight(e.text, t, e.lang || "")).then(Ec(e));
      const r = n.highlight(e.text, t, e.lang || "");
      if (r instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      Ec(e)(r);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, r) {
        typeof e == "object" && (r = e.escaped, t = e.lang, e = e.text);
        const a = Ac(t), i = a ? n.langPrefix + xc(a) : n.emptyLangClass, l = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${l}>${r ? e : xc(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Ac(n) {
  return (n || "").match(/\S*/)[0];
}
function Ec(n) {
  return (e) => {
    typeof e == "string" && e !== n.text && (n.escaped = !0, n.text = e);
  };
}
const y4 = /[&<>"']/, K6 = new RegExp(y4.source, "g"), k4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, J6 = new RegExp(k4.source, "g"), Q6 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Sc = (n) => Q6[n];
function xc(n, e) {
  if (e) {
    if (y4.test(n))
      return n.replace(K6, Sc);
  } else if (k4.test(n))
    return n.replace(J6, Sc);
  return n;
}
const $6 = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, e7 = Object.hasOwnProperty;
class is {
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
    let a = t7(e, t === !0);
    const i = a;
    for (; e7.call(r.occurrences, a); )
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
function t7(n, e) {
  return typeof n != "string" ? "" : (e || (n = n.toLowerCase()), n.replace($6, "").replace(/ /g, "-"));
}
let D4 = new is(), A4 = [];
function r7({ prefix: n = "", globalSlugs: e = !1 } = {}) {
  return {
    headerIds: !1,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(t) {
        return e || n7(), t;
      }
    },
    renderer: {
      heading(t, r, a) {
        a = a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const i = `${n}${D4.slug(a)}`, l = { level: r, text: t, id: i };
        return A4.push(l), `<h${r} id="${i}">${t}</h${r}>
`;
      }
    }
  };
}
function n7() {
  A4 = [], D4 = new is();
}
var Tc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lw(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var E4 = { exports: {} };
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
        encode: function k(y) {
          return y instanceof o ? new o(y.type, k(y.content), y.alias) : Array.isArray(y) ? y.map(k) : y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        type: function(k) {
          return Object.prototype.toString.call(k).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(k) {
          return k.__id || Object.defineProperty(k, "__id", { value: ++i }), k.__id;
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
        clone: function k(y, D) {
          D = D || {};
          var E, T;
          switch (s.util.type(y)) {
            case "Object":
              if (T = s.util.objId(y), D[T])
                return D[T];
              E = /** @type {Record<string, any>} */
              {}, D[T] = E;
              for (var F in y)
                y.hasOwnProperty(F) && (E[F] = k(y[F], D));
              return (
                /** @type {any} */
                E
              );
            case "Array":
              return T = s.util.objId(y), D[T] ? D[T] : (E = [], D[T] = E, /** @type {Array} */
              /** @type {any} */
              y.forEach(function(C, B) {
                E[B] = k(C, D);
              }), /** @type {any} */
              E);
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
        getLanguage: function(k) {
          for (; k; ) {
            var y = a.exec(k.className);
            if (y)
              return y[1].toLowerCase();
            k = k.parentElement;
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
        setLanguage: function(k, y) {
          k.className = k.className.replace(RegExp(a, "gi"), ""), k.classList.add("language-" + y);
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
          } catch (E) {
            var k = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack) || [])[1];
            if (k) {
              var y = document.getElementsByTagName("script");
              for (var D in y)
                if (y[D].src == k)
                  return y[D];
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
        isActive: function(k, y, D) {
          for (var E = "no-" + y; k; ) {
            var T = k.classList;
            if (T.contains(y))
              return !0;
            if (T.contains(E))
              return !1;
            k = k.parentElement;
          }
          return !!D;
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
        extend: function(k, y) {
          var D = s.util.clone(s.languages[k]);
          for (var E in y)
            D[E] = y[E];
          return D;
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
        insertBefore: function(k, y, D, E) {
          E = E || /** @type {any} */
          s.languages;
          var T = E[k], F = {};
          for (var C in T)
            if (T.hasOwnProperty(C)) {
              if (C == y)
                for (var B in D)
                  D.hasOwnProperty(B) && (F[B] = D[B]);
              D.hasOwnProperty(C) || (F[C] = T[C]);
            }
          var L = E[k];
          return E[k] = F, s.languages.DFS(s.languages, function(I, P) {
            P === L && I != k && (this[I] = F);
          }), F;
        },
        // Traverse a language definition with Depth First Search
        DFS: function k(y, D, E, T) {
          T = T || {};
          var F = s.util.objId;
          for (var C in y)
            if (y.hasOwnProperty(C)) {
              D.call(y, C, y[C], E || C);
              var B = y[C], L = s.util.type(B);
              L === "Object" && !T[F(B)] ? (T[F(B)] = !0, k(B, D, null, T)) : L === "Array" && !T[F(B)] && (T[F(B)] = !0, k(B, D, C, T));
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
      highlightAll: function(k, y) {
        s.highlightAllUnder(document, k, y);
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
      highlightAllUnder: function(k, y, D) {
        var E = {
          callback: D,
          container: k,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", E), E.elements = Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)), s.hooks.run("before-all-elements-highlight", E);
        for (var T = 0, F; F = E.elements[T++]; )
          s.highlightElement(F, y === !0, E.callback);
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
      highlightElement: function(k, y, D) {
        var E = s.util.getLanguage(k), T = s.languages[E];
        s.util.setLanguage(k, E);
        var F = k.parentElement;
        F && F.nodeName.toLowerCase() === "pre" && s.util.setLanguage(F, E);
        var C = k.textContent, B = {
          element: k,
          language: E,
          grammar: T,
          code: C
        };
        function L(P) {
          B.highlightedCode = P, s.hooks.run("before-insert", B), B.element.innerHTML = B.highlightedCode, s.hooks.run("after-highlight", B), s.hooks.run("complete", B), D && D.call(B.element);
        }
        if (s.hooks.run("before-sanity-check", B), F = B.element.parentElement, F && F.nodeName.toLowerCase() === "pre" && !F.hasAttribute("tabindex") && F.setAttribute("tabindex", "0"), !B.code) {
          s.hooks.run("complete", B), D && D.call(B.element);
          return;
        }
        if (s.hooks.run("before-highlight", B), !B.grammar) {
          L(s.util.encode(B.code));
          return;
        }
        if (y && r.Worker) {
          var I = new Worker(s.filename);
          I.onmessage = function(P) {
            L(P.data);
          }, I.postMessage(JSON.stringify({
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
      highlight: function(k, y, D) {
        var E = {
          code: k,
          grammar: y,
          language: D
        };
        if (s.hooks.run("before-tokenize", E), !E.grammar)
          throw new Error('The language "' + E.language + '" has no grammar.');
        return E.tokens = s.tokenize(E.code, E.grammar), s.hooks.run("after-tokenize", E), o.stringify(s.util.encode(E.tokens), E.language);
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
      tokenize: function(k, y) {
        var D = y.rest;
        if (D) {
          for (var E in D)
            y[E] = D[E];
          delete y.rest;
        }
        var T = new d();
        return f(T, T.head, k), c(k, T, y, T.head, 0), g(T);
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
        add: function(k, y) {
          var D = s.hooks.all;
          D[k] = D[k] || [], D[k].push(y);
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
        run: function(k, y) {
          var D = s.hooks.all[k];
          if (!(!D || !D.length))
            for (var E = 0, T; T = D[E++]; )
              T(y);
        }
      },
      Token: o
    };
    r.Prism = s;
    function o(k, y, D, E) {
      this.type = k, this.content = y, this.alias = D, this.length = (E || "").length | 0;
    }
    o.stringify = function k(y, D) {
      if (typeof y == "string")
        return y;
      if (Array.isArray(y)) {
        var E = "";
        return y.forEach(function(L) {
          E += k(L, D);
        }), E;
      }
      var T = {
        type: y.type,
        content: k(y.content, D),
        tag: "span",
        classes: ["token", y.type],
        attributes: {},
        language: D
      }, F = y.alias;
      F && (Array.isArray(F) ? Array.prototype.push.apply(T.classes, F) : T.classes.push(F)), s.hooks.run("wrap", T);
      var C = "";
      for (var B in T.attributes)
        C += " " + B + '="' + (T.attributes[B] || "").replace(/"/g, "&quot;") + '"';
      return "<" + T.tag + ' class="' + T.classes.join(" ") + '"' + C + ">" + T.content + "</" + T.tag + ">";
    };
    function u(k, y, D, E) {
      k.lastIndex = y;
      var T = k.exec(D);
      if (T && E && T[1]) {
        var F = T[1].length;
        T.index += F, T[0] = T[0].slice(F);
      }
      return T;
    }
    function c(k, y, D, E, T, F) {
      for (var C in D)
        if (!(!D.hasOwnProperty(C) || !D[C])) {
          var B = D[C];
          B = Array.isArray(B) ? B : [B];
          for (var L = 0; L < B.length; ++L) {
            if (F && F.cause == C + "," + L)
              return;
            var I = B[L], P = I.inside, $ = !!I.lookbehind, O = !!I.greedy, K = I.alias;
            if (O && !I.pattern.global) {
              var q = I.pattern.toString().match(/[imsuy]*$/)[0];
              I.pattern = RegExp(I.pattern.source, q + "g");
            }
            for (var he = I.pattern || I, ee = E.next, _e = T; ee !== y.tail && !(F && _e >= F.reach); _e += ee.value.length, ee = ee.next) {
              var de = ee.value;
              if (y.length > k.length)
                return;
              if (!(de instanceof o)) {
                var re = 1, oe;
                if (O) {
                  if (oe = u(he, _e, k, $), !oe || oe.index >= k.length)
                    break;
                  var pe = oe.index, ve = oe.index + oe[0].length, Be = _e;
                  for (Be += ee.value.length; pe >= Be; )
                    ee = ee.next, Be += ee.value.length;
                  if (Be -= ee.value.length, _e = Be, ee.value instanceof o)
                    continue;
                  for (var W = ee; W !== y.tail && (Be < ve || typeof W.value == "string"); W = W.next)
                    re++, Be += W.value.length;
                  re--, de = k.slice(_e, Be), oe.index -= _e;
                } else if (oe = u(he, 0, de, $), !oe)
                  continue;
                var pe = oe.index, Se = oe[0], Ie = de.slice(0, pe), V = de.slice(pe + Se.length), ge = _e + de.length;
                F && ge > F.reach && (F.reach = ge);
                var Ee = ee.prev;
                Ie && (Ee = f(y, Ee, Ie), _e += Ie.length), p(y, Ee, re);
                var Le = new o(C, P ? s.tokenize(Se, P) : Se, K, Se);
                if (ee = f(y, Ee, Le), V && f(y, ee, V), re > 1) {
                  var st = {
                    cause: C + "," + L,
                    reach: ge
                  };
                  c(k, y, D, ee.prev, _e, st), F && st.reach > F.reach && (F.reach = st.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var k = { value: null, prev: null, next: null }, y = { value: null, prev: k, next: null };
      k.next = y, this.head = k, this.tail = y, this.length = 0;
    }
    function f(k, y, D) {
      var E = y.next, T = { value: D, prev: y, next: E };
      return y.next = T, E.prev = T, k.length++, T;
    }
    function p(k, y, D) {
      for (var E = y.next, T = 0; T < D && E !== k.tail; T++)
        E = E.next;
      y.next = E, E.prev = y, k.length -= T;
    }
    function g(k) {
      for (var y = [], D = k.head.next; D !== k.tail; )
        y.push(D.value), D = D.next;
      return y;
    }
    if (!r.document)
      return r.addEventListener && (s.disableWorkerMessageHandler || r.addEventListener("message", function(k) {
        var y = JSON.parse(k.data), D = y.language, E = y.code, T = y.immediateClose;
        r.postMessage(s.highlight(E, s.languages[D], D)), T && r.close();
      }, !1)), s;
    var b = s.util.currentScript();
    b && (s.filename = b.src, b.hasAttribute("data-manual") && (s.manual = !0));
    function A() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var w = document.readyState;
      w === "loading" || w === "interactive" && b && b.defer ? document.addEventListener("DOMContentLoaded", A) : window.requestAnimationFrame ? window.requestAnimationFrame(A) : window.setTimeout(A, 16);
    }
    return s;
  }(e);
  n.exports && (n.exports = t), typeof Tc < "u" && (Tc.Prism = t), t.languages.markup = {
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
    var r = "Loading…", a = function(b, A) {
      return "✖ Error " + b + " while fetching file: " + A;
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
    }, s = "data-src-status", o = "loading", u = "loaded", c = "failed", d = "pre[data-src]:not([" + s + '="' + u + '"]):not([' + s + '="' + o + '"])';
    function f(b, A, w) {
      var k = new XMLHttpRequest();
      k.open("GET", b, !0), k.onreadystatechange = function() {
        k.readyState == 4 && (k.status < 400 && k.responseText ? A(k.responseText) : k.status >= 400 ? w(a(k.status, k.statusText)) : w(i));
      }, k.send(null);
    }
    function p(b) {
      var A = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b || "");
      if (A) {
        var w = Number(A[1]), k = A[2], y = A[3];
        return k ? y ? [w, Number(y)] : [w, void 0] : [w, w];
      }
    }
    t.hooks.add("before-highlightall", function(b) {
      b.selector += ", " + d;
    }), t.hooks.add("before-sanity-check", function(b) {
      var A = (
        /** @type {HTMLPreElement} */
        b.element
      );
      if (A.matches(d)) {
        b.code = "", A.setAttribute(s, o);
        var w = A.appendChild(document.createElement("CODE"));
        w.textContent = r;
        var k = A.getAttribute("data-src"), y = b.language;
        if (y === "none") {
          var D = (/\.(\w+)$/.exec(k) || [, "none"])[1];
          y = l[D] || D;
        }
        t.util.setLanguage(w, y), t.util.setLanguage(A, y);
        var E = t.plugins.autoloader;
        E && E.loadLanguages(y), f(
          k,
          function(T) {
            A.setAttribute(s, u);
            var F = p(A.getAttribute("data-range"));
            if (F) {
              var C = T.split(/\r\n?|\n/g), B = F[0], L = F[1] == null ? C.length : F[1];
              B < 0 && (B += C.length), B = Math.max(0, Math.min(B - 1, C.length)), L < 0 && (L += C.length), L = Math.max(0, Math.min(L, C.length)), T = C.slice(B, L).join(`
`), A.hasAttribute("data-start") || A.setAttribute("data-start", String(B + 1));
            }
            w.textContent = T, t.highlightElement(w);
          },
          function(T) {
            A.setAttribute(s, c), w.textContent = T;
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
      highlight: function(A) {
        for (var w = (A || document).querySelectorAll(d), k = 0, y; y = w[k++]; )
          t.highlightElement(y);
      }
    };
    var g = !1;
    t.fileHighlight = function() {
      g || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), g = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(E4);
var ao = E4.exports;
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
new is();
const tu = (n) => JSON.parse(JSON.stringify(n)), a7 = (n) => n.nodeType === 1, i7 = (n) => S7.has(n.tagName), l7 = (n) => "action" in n, s7 = (n) => n.tagName === "IFRAME", o7 = (n) => "formAction" in n, u7 = (n) => "protocol" in n, Zi = /* @__PURE__ */ (() => {
  const n = /^(?:\w+script|data):/i;
  return (e) => n.test(e);
})(), c7 = /* @__PURE__ */ (() => {
  const n = /(?:script|data):/i;
  return (e) => n.test(e);
})(), f7 = (n) => {
  const e = {};
  for (let t = 0, r = n.length; t < r; t++) {
    const a = n[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, S4 = (n, e) => {
  let t = n.firstChild;
  for (; t; ) {
    const r = t.nextSibling;
    a7(t) && (e(t, n), t.parentNode && S4(t, e)), t = r;
  }
}, h7 = (n, e) => {
  const t = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = t.nextNode(); ) {
    const a = r.parentNode;
    a && e(r, a);
  }
}, d7 = (n, e) => !!globalThis.document && !!globalThis.document.createNodeIterator ? h7(n, e) : S4(n, e), x4 = [
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
], m7 = [
  "basefont",
  "command",
  "data",
  "iframe",
  "image",
  "plaintext",
  "portal",
  "slot",
  // 'template', //TODO: Not exactly correct to never allow this, too strict
  "textarea",
  "title",
  "xmp"
], p7 = /* @__PURE__ */ new Set([
  ...x4,
  ...m7
]), T4 = [
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
], g7 = [
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "fedropshadow",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
], _7 = /* @__PURE__ */ new Set([
  ...T4,
  ...g7
]), F4 = [
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
], v7 = [
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
], b7 = /* @__PURE__ */ new Set([
  ...F4,
  ...v7
]), w7 = [
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
], y7 = [
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
], k7 = [
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
], K0 = {
  HTML: "http://www.w3.org/1999/xhtml",
  SVG: "http://www.w3.org/2000/svg",
  MATH: "http://www.w3.org/1998/Math/MathML"
}, D7 = {
  [K0.HTML]: p7,
  [K0.SVG]: _7,
  [K0.MATH]: b7
}, A7 = {
  [K0.HTML]: "html",
  [K0.SVG]: "svg",
  [K0.MATH]: "math"
}, E7 = {
  [K0.HTML]: "",
  [K0.SVG]: "svg:",
  [K0.MATH]: "math:"
}, S7 = /* @__PURE__ */ new Set([
  "A",
  "AREA",
  "BUTTON",
  "FORM",
  "IFRAME",
  "INPUT"
]), C4 = {
  allowComments: !0,
  allowCustomElements: !1,
  allowUnknownMarkup: !1,
  allowElements: [
    ...x4,
    ...T4.map((n) => `svg:${n}`),
    ...F4.map((n) => `math:${n}`)
  ],
  allowAttributes: f7([
    Object.fromEntries(w7.map((n) => [n, ["*"]])),
    Object.fromEntries(y7.map((n) => [n, ["svg:*"]])),
    Object.fromEntries(k7.map((n) => [n, ["math:*"]]))
  ])
};
var io = function(n, e, t, r, a) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? n !== e || !a : !e.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? a.call(n, t) : a ? a.value = t : e.set(n, t), t;
}, An = function(n, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? n !== e || !r : !e.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(n) : r ? r.value : e.get(n);
}, $r, bl, wl;
class M4 {
  /* CONSTRUCTOR */
  constructor(e = {}) {
    $r.set(this, void 0), bl.set(this, void 0), wl.set(this, void 0), this.getConfiguration = () => tu(An(this, $r, "f")), this.sanitize = (c) => {
      const d = An(this, bl, "f"), f = An(this, wl, "f");
      return d7(c, (p, g) => {
        const b = p.namespaceURI || K0.HTML, A = g.namespaceURI || K0.HTML, w = D7[b], k = A7[b], y = E7[b], D = p.tagName.toLowerCase(), E = `${y}${D}`, F = `${y}*`;
        if (!w.has(D) || !d.has(E) || b !== A && D !== k)
          g.removeChild(p);
        else {
          const C = p.getAttributeNames(), B = C.length;
          if (B) {
            for (let L = 0; L < B; L++) {
              const I = C[L], P = f[I];
              (!P || !P.has(F) && !P.has(E)) && p.removeAttribute(I);
            }
            if (i7(p))
              if (u7(p)) {
                const L = p.getAttribute("href");
                L && c7(L) && Zi(p.protocol) && p.removeAttribute("href");
              } else l7(p) ? Zi(p.action) && p.removeAttribute("action") : o7(p) ? Zi(p.formAction) && p.removeAttribute("formaction") : s7(p) && (Zi(p.src) && p.removeAttribute("formaction"), p.setAttribute("sandbox", "allow-scripts"));
          }
        }
      }), c;
    }, this.sanitizeFor = (c, d) => {
      throw new Error('"sanitizeFor" is not implemented yet');
    };
    const { allowComments: t, allowCustomElements: r, allowUnknownMarkup: a, blockElements: i, dropElements: l, dropAttributes: s } = e;
    if (t === !1)
      throw new Error('A false "allowComments" is not supported yet');
    if (r)
      throw new Error('A true "allowCustomElements" is not supported yet');
    if (a)
      throw new Error('A true "allowUnknownMarkup" is not supported yet');
    if (i)
      throw new Error('"blockElements" is not supported yet, use "allowElements" instead');
    if (l)
      throw new Error('"dropElements" is not supported yet, use "allowElements" instead');
    if (s)
      throw new Error('"dropAttributes" is not supported yet, use "allowAttributes" instead');
    io(this, $r, tu(C4), "f");
    const { allowElements: o, allowAttributes: u } = e;
    o && (An(this, $r, "f").allowElements = e.allowElements), u && (An(this, $r, "f").allowAttributes = e.allowAttributes), io(this, bl, new Set(An(this, $r, "f").allowElements), "f"), io(this, wl, Object.fromEntries(Object.entries(An(this, $r, "f").allowAttributes || {}).map(([c, d]) => [c, new Set(d)])), "f");
  }
}
$r = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap();
M4.getDefaultConfiguration = () => tu(C4);
const x7 = (n, e) => {
  try {
    return !!n && new URL(n).origin !== new URL(e).origin;
  } catch {
    return !1;
  }
};
function Fc(n, e) {
  const t = new M4(), r = new DOMParser().parseFromString(n, "text/html");
  return z4(r.body, "A", (a) => {
    a instanceof HTMLElement && "target" in a && x7(a.getAttribute("href"), e) && (a.setAttribute("target", "_blank"), a.setAttribute("rel", "noopener noreferrer"));
  }), t.sanitize(r).body.innerHTML;
}
function z4(n, e, t) {
  n && (n.nodeName === e || typeof e == "function") && t(n);
  const r = (n == null ? void 0 : n.childNodes) || [];
  for (let a = 0; a < r.length; a++)
    z4(r[a], e, t);
}
function na(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let r = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + r;
}
function yl() {
}
const T7 = (n) => n, B4 = typeof window < "u";
let Cc = B4 ? () => window.performance.now() : () => Date.now(), I4 = B4 ? (n) => requestAnimationFrame(n) : yl;
const sa = /* @__PURE__ */ new Set();
function L4(n) {
  sa.forEach((e) => {
    e.c(n) || (sa.delete(e), e.f());
  }), sa.size !== 0 && I4(L4);
}
function F7(n) {
  let e;
  return sa.size === 0 && I4(L4), { promise: new Promise((t) => {
    sa.add(e = { c: n, f: t });
  }), abort() {
    sa.delete(e);
  } };
}
function N4(n, { delay: e = 0, duration: t = 400, easing: r = T7 } = {}) {
  const a = +getComputedStyle(n).opacity;
  return { delay: e, duration: t, easing: r, css: (i) => "opacity: " + i * a };
}
const Xn = [];
function C7(n, e = yl) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(l) {
    if (o = l, ((s = n) != s ? o == o : s !== o || s && typeof s == "object" || typeof s == "function") && (n = l, t)) {
      const u = !Xn.length;
      for (const c of r) c[1](), Xn.push(c, n);
      if (u) {
        for (let c = 0; c < Xn.length; c += 2) Xn[c][0](Xn[c + 1]);
        Xn.length = 0;
      }
    }
    var s, o;
  }
  function i(l) {
    a(l(n));
  }
  return { set: a, update: i, subscribe: function(l, s = yl) {
    const o = [l, s];
    return r.add(o), r.size === 1 && (t = e(a, i) || yl), l(n), () => {
      r.delete(o), r.size === 0 && t && (t(), t = null);
    };
  } };
}
function Mc(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function ru(n, e, t, r) {
  if (typeof t == "number" || Mc(t)) {
    const a = r - t, i = (t - e) / (n.dt || 1 / 60), l = (i + (n.opts.stiffness * a - n.opts.damping * i) * n.inv_mass) * n.dt;
    return Math.abs(l) < n.opts.precision && Math.abs(a) < n.opts.precision ? r : (n.settled = !1, Mc(t) ? new Date(t.getTime() + l) : t + l);
  }
  if (Array.isArray(t)) return t.map((a, i) => ru(n, e[i], t[i], r[i]));
  if (typeof t == "object") {
    const a = {};
    for (const i in t) a[i] = ru(n, e[i], t[i], r[i]);
    return a;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function zc(n, e = {}) {
  const t = C7(n), { stiffness: r = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, u = n, c = n, d = 1, f = 0, p = !1;
  function g(A, w = {}) {
    c = A;
    const k = o = {};
    return n == null || w.hard || b.stiffness >= 1 && b.damping >= 1 ? (p = !0, l = Cc(), u = A, t.set(n = c), Promise.resolve()) : (w.soft && (f = 1 / (60 * (w.soft === !0 ? 0.5 : +w.soft)), d = 0), s || (l = Cc(), p = !1, s = F7((y) => {
      if (p) return p = !1, s = null, !1;
      d = Math.min(d + f, 1);
      const D = { inv_mass: d, opts: b, settled: !0, dt: 60 * (y - l) / 1e3 }, E = ru(D, u, n, c);
      return l = y, u = n, t.set(n = E), D.settled && (s = null), !D.settled;
    })), new Promise((y) => {
      s.promise.then(() => {
        k === o && y();
      });
    }));
  }
  const b = { set: g, update: (A, w) => g(A(c, n), w), subscribe: t.subscribe, stiffness: r, damping: a, precision: i };
  return b;
}
const {
  SvelteComponent: M7,
  append_hydration: U0,
  attr: xe,
  children: k0,
  claim_element: z7,
  claim_svg_element: G0,
  component_subscribe: Bc,
  detach: f0,
  element: B7,
  init: I7,
  insert_hydration: L7,
  noop: Ic,
  safe_not_equal: N7,
  set_style: Ki,
  svg_element: V0,
  toggle_class: Lc
} = window.__gradio__svelte__internal, { onMount: R7 } = window.__gradio__svelte__internal;
function O7(n) {
  let e, t, r, a, i, l, s, o, u, c, d, f;
  return {
    c() {
      e = B7("div"), t = V0("svg"), r = V0("g"), a = V0("path"), i = V0("path"), l = V0("path"), s = V0("path"), o = V0("g"), u = V0("path"), c = V0("path"), d = V0("path"), f = V0("path"), this.h();
    },
    l(p) {
      e = z7(p, "DIV", { class: !0 });
      var g = k0(e);
      t = G0(g, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var b = k0(t);
      r = G0(b, "g", { style: !0 });
      var A = k0(r);
      a = G0(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), k0(a).forEach(f0), i = G0(A, "path", { d: !0, fill: !0, class: !0 }), k0(i).forEach(f0), l = G0(A, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), k0(l).forEach(f0), s = G0(A, "path", { d: !0, fill: !0, class: !0 }), k0(s).forEach(f0), A.forEach(f0), o = G0(b, "g", { style: !0 });
      var w = k0(o);
      u = G0(w, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), k0(u).forEach(f0), c = G0(w, "path", { d: !0, fill: !0, class: !0 }), k0(c).forEach(f0), d = G0(w, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), k0(d).forEach(f0), f = G0(w, "path", { d: !0, fill: !0, class: !0 }), k0(f).forEach(f0), w.forEach(f0), b.forEach(f0), g.forEach(f0), this.h();
    },
    h() {
      xe(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), xe(a, "fill", "#FF7C00"), xe(a, "fill-opacity", "0.4"), xe(a, "class", "svelte-43sxxs"), xe(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), xe(i, "fill", "#FF7C00"), xe(i, "class", "svelte-43sxxs"), xe(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), xe(l, "fill", "#FF7C00"), xe(l, "fill-opacity", "0.4"), xe(l, "class", "svelte-43sxxs"), xe(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), xe(s, "fill", "#FF7C00"), xe(s, "class", "svelte-43sxxs"), Ki(r, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), xe(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), xe(u, "fill", "#FF7C00"), xe(u, "fill-opacity", "0.4"), xe(u, "class", "svelte-43sxxs"), xe(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), xe(c, "fill", "#FF7C00"), xe(c, "class", "svelte-43sxxs"), xe(d, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), xe(d, "fill", "#FF7C00"), xe(d, "fill-opacity", "0.4"), xe(d, "class", "svelte-43sxxs"), xe(f, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), xe(f, "fill", "#FF7C00"), xe(f, "class", "svelte-43sxxs"), Ki(o, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), xe(t, "viewBox", "-1200 -1200 3000 3000"), xe(t, "fill", "none"), xe(t, "xmlns", "http://www.w3.org/2000/svg"), xe(t, "class", "svelte-43sxxs"), xe(e, "class", "svelte-43sxxs"), Lc(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(p, g) {
      L7(p, e, g), U0(e, t), U0(t, r), U0(r, a), U0(r, i), U0(r, l), U0(r, s), U0(t, o), U0(o, u), U0(o, c), U0(o, d), U0(o, f);
    },
    p(p, [g]) {
      g & /*$top*/
      2 && Ki(r, "transform", "translate(" + /*$top*/
      p[1][0] + "px, " + /*$top*/
      p[1][1] + "px)"), g & /*$bottom*/
      4 && Ki(o, "transform", "translate(" + /*$bottom*/
      p[2][0] + "px, " + /*$bottom*/
      p[2][1] + "px)"), g & /*margin*/
      1 && Lc(
        e,
        "margin",
        /*margin*/
        p[0]
      );
    },
    i: Ic,
    o: Ic,
    d(p) {
      p && f0(e);
    }
  };
}
function q7(n, e, t) {
  let r, a;
  var i = this && this.__awaiter || function(p, g, b, A) {
    function w(k) {
      return k instanceof b ? k : new b(function(y) {
        y(k);
      });
    }
    return new (b || (b = Promise))(function(k, y) {
      function D(F) {
        try {
          T(A.next(F));
        } catch (C) {
          y(C);
        }
      }
      function E(F) {
        try {
          T(A.throw(F));
        } catch (C) {
          y(C);
        }
      }
      function T(F) {
        F.done ? k(F.value) : w(F.value).then(D, E);
      }
      T((A = A.apply(p, g || [])).next());
    });
  };
  let { margin: l = !0 } = e;
  const s = zc([0, 0]);
  Bc(n, s, (p) => t(1, r = p));
  const o = zc([0, 0]);
  Bc(n, o, (p) => t(2, a = p));
  let u;
  function c() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([s.set([125, 140]), o.set([-125, -140])]), yield Promise.all([s.set([-125, 140]), o.set([125, -140])]), yield Promise.all([s.set([-125, 0]), o.set([125, -0])]), yield Promise.all([s.set([125, 0]), o.set([-125, 0])]);
    });
  }
  function d() {
    return i(this, void 0, void 0, function* () {
      yield c(), u || d();
    });
  }
  function f() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([s.set([125, 0]), o.set([-125, 0])]), d();
    });
  }
  return R7(() => (f(), () => u = !0)), n.$$set = (p) => {
    "margin" in p && t(0, l = p.margin);
  }, [l, r, a, s, o];
}
class P7 extends M7 {
  constructor(e) {
    super(), I7(this, e, q7, O7, N7, { margin: 0 });
  }
}
const {
  SvelteComponent: H7,
  append_hydration: xn,
  attr: Z0,
  binding_callbacks: Nc,
  check_outros: nu,
  children: cr,
  claim_component: R4,
  claim_element: fr,
  claim_space: C0,
  claim_text: tt,
  create_component: O4,
  create_slot: q4,
  destroy_component: P4,
  destroy_each: H4,
  detach: ae,
  element: hr,
  empty: N0,
  ensure_array_like: Nl,
  get_all_dirty_from_scope: U4,
  get_slot_changes: G4,
  group_outros: au,
  init: U7,
  insert_hydration: me,
  mount_component: V4,
  noop: iu,
  safe_not_equal: G7,
  set_data: R0,
  set_style: sn,
  space: M0,
  text: rt,
  toggle_class: A0,
  transition_in: Y0,
  transition_out: dr,
  update_slot_base: j4
} = window.__gradio__svelte__internal, { tick: V7 } = window.__gradio__svelte__internal, { onDestroy: j7 } = window.__gradio__svelte__internal, { createEventDispatcher: W7 } = window.__gradio__svelte__internal, X7 = (n) => ({}), Rc = (n) => ({}), Y7 = (n) => ({}), Oc = (n) => ({});
function qc(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r[43] = t, r;
}
function Pc(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r;
}
function Z7(n) {
  let e, t, r, a, i = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, s, o;
  t = new b8({
    props: {
      Icon: a2,
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
  const u = (
    /*#slots*/
    n[30].error
  ), c = q4(
    u,
    n,
    /*$$scope*/
    n[29],
    Rc
  );
  return {
    c() {
      e = hr("div"), O4(t.$$.fragment), r = M0(), a = hr("span"), l = rt(i), s = M0(), c && c.c(), this.h();
    },
    l(d) {
      e = fr(d, "DIV", { class: !0 });
      var f = cr(e);
      R4(t.$$.fragment, f), f.forEach(ae), r = C0(d), a = fr(d, "SPAN", { class: !0 });
      var p = cr(a);
      l = tt(p, i), p.forEach(ae), s = C0(d), c && c.l(d), this.h();
    },
    h() {
      Z0(e, "class", "clear-status svelte-17v219f"), Z0(a, "class", "error svelte-17v219f");
    },
    m(d, f) {
      me(d, e, f), V4(t, e, null), me(d, r, f), me(d, a, f), xn(a, l), me(d, s, f), c && c.m(d, f), o = !0;
    },
    p(d, f) {
      const p = {};
      f[0] & /*i18n*/
      2 && (p.label = /*i18n*/
      d[1]("common.clear")), t.$set(p), (!o || f[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      d[1]("common.error") + "") && R0(l, i), c && c.p && (!o || f[0] & /*$$scope*/
      536870912) && j4(
        c,
        u,
        d,
        /*$$scope*/
        d[29],
        o ? G4(
          u,
          /*$$scope*/
          d[29],
          f,
          X7
        ) : U4(
          /*$$scope*/
          d[29]
        ),
        Rc
      );
    },
    i(d) {
      o || (Y0(t.$$.fragment, d), Y0(c, d), o = !0);
    },
    o(d) {
      dr(t.$$.fragment, d), dr(c, d), o = !1;
    },
    d(d) {
      d && (ae(e), ae(r), ae(a), ae(s)), P4(t), c && c.d(d);
    }
  };
}
function K7(n) {
  let e, t, r, a, i, l, s, o, u, c = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Hc(n)
  );
  function d(y, D) {
    if (
      /*progress*/
      y[7]
    ) return $7;
    if (
      /*queue_position*/
      y[2] !== null && /*queue_size*/
      y[3] !== void 0 && /*queue_position*/
      y[2] >= 0
    ) return Q7;
    if (
      /*queue_position*/
      y[2] === 0
    ) return J7;
  }
  let f = d(n), p = f && f(n), g = (
    /*timer*/
    n[5] && Vc(n)
  );
  const b = [np, rp], A = [];
  function w(y, D) {
    return (
      /*last_progress_level*/
      y[15] != null ? 0 : (
        /*show_progress*/
        y[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = w(n)) && (l = A[i] = b[i](n));
  let k = !/*timer*/
  n[5] && Jc(n);
  return {
    c() {
      c && c.c(), e = M0(), t = hr("div"), p && p.c(), r = M0(), g && g.c(), a = M0(), l && l.c(), s = M0(), k && k.c(), o = N0(), this.h();
    },
    l(y) {
      c && c.l(y), e = C0(y), t = fr(y, "DIV", { class: !0 });
      var D = cr(t);
      p && p.l(D), r = C0(D), g && g.l(D), D.forEach(ae), a = C0(y), l && l.l(y), s = C0(y), k && k.l(y), o = N0(), this.h();
    },
    h() {
      Z0(t, "class", "progress-text svelte-17v219f"), A0(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), A0(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(y, D) {
      c && c.m(y, D), me(y, e, D), me(y, t, D), p && p.m(t, null), xn(t, r), g && g.m(t, null), me(y, a, D), ~i && A[i].m(y, D), me(y, s, D), k && k.m(y, D), me(y, o, D), u = !0;
    },
    p(y, D) {
      /*variant*/
      y[8] === "default" && /*show_eta_bar*/
      y[18] && /*show_progress*/
      y[6] === "full" ? c ? c.p(y, D) : (c = Hc(y), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), f === (f = d(y)) && p ? p.p(y, D) : (p && p.d(1), p = f && f(y), p && (p.c(), p.m(t, r))), /*timer*/
      y[5] ? g ? g.p(y, D) : (g = Vc(y), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!u || D[0] & /*variant*/
      256) && A0(
        t,
        "meta-text-center",
        /*variant*/
        y[8] === "center"
      ), (!u || D[0] & /*variant*/
      256) && A0(
        t,
        "meta-text",
        /*variant*/
        y[8] === "default"
      );
      let E = i;
      i = w(y), i === E ? ~i && A[i].p(y, D) : (l && (au(), dr(A[E], 1, 1, () => {
        A[E] = null;
      }), nu()), ~i ? (l = A[i], l ? l.p(y, D) : (l = A[i] = b[i](y), l.c()), Y0(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      y[5] ? k && (au(), dr(k, 1, 1, () => {
        k = null;
      }), nu()) : k ? (k.p(y, D), D[0] & /*timer*/
      32 && Y0(k, 1)) : (k = Jc(y), k.c(), Y0(k, 1), k.m(o.parentNode, o));
    },
    i(y) {
      u || (Y0(l), Y0(k), u = !0);
    },
    o(y) {
      dr(l), dr(k), u = !1;
    },
    d(y) {
      y && (ae(e), ae(t), ae(a), ae(s), ae(o)), c && c.d(y), p && p.d(), g && g.d(), ~i && A[i].d(y), k && k.d(y);
    }
  };
}
function Hc(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = hr("div"), this.h();
    },
    l(r) {
      e = fr(r, "DIV", { class: !0 }), cr(e).forEach(ae), this.h();
    },
    h() {
      Z0(e, "class", "eta-bar svelte-17v219f"), sn(e, "transform", t);
    },
    m(r, a) {
      me(r, e, a);
    },
    p(r, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && sn(e, "transform", t);
    },
    d(r) {
      r && ae(e);
    }
  };
}
function J7(n) {
  let e;
  return {
    c() {
      e = rt("processing |");
    },
    l(t) {
      e = tt(t, "processing |");
    },
    m(t, r) {
      me(t, e, r);
    },
    p: iu,
    d(t) {
      t && ae(e);
    }
  };
}
function Q7(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), r, a, i, l;
  return {
    c() {
      e = rt("queue: "), r = rt(t), a = rt("/"), i = rt(
        /*queue_size*/
        n[3]
      ), l = rt(" |");
    },
    l(s) {
      e = tt(s, "queue: "), r = tt(s, t), a = tt(s, "/"), i = tt(
        s,
        /*queue_size*/
        n[3]
      ), l = tt(s, " |");
    },
    m(s, o) {
      me(s, e, o), me(s, r, o), me(s, a, o), me(s, i, o), me(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && R0(r, t), o[0] & /*queue_size*/
      8 && R0(
        i,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (ae(e), ae(r), ae(a), ae(i), ae(l));
    }
  };
}
function $7(n) {
  let e, t = Nl(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Gc(Pc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = N0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = N0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      me(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = Nl(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Pc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Gc(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && ae(e), H4(r, a);
    }
  };
}
function Uc(n) {
  let e, t = (
    /*p*/
    n[41].unit + ""
  ), r, a, i = " ", l;
  function s(c, d) {
    return (
      /*p*/
      c[41].length != null ? tp : ep
    );
  }
  let o = s(n), u = o(n);
  return {
    c() {
      u.c(), e = M0(), r = rt(t), a = rt(" | "), l = rt(i);
    },
    l(c) {
      u.l(c), e = C0(c), r = tt(c, t), a = tt(c, " | "), l = tt(c, i);
    },
    m(c, d) {
      u.m(c, d), me(c, e, d), me(c, r, d), me(c, a, d), me(c, l, d);
    },
    p(c, d) {
      o === (o = s(c)) && u ? u.p(c, d) : (u.d(1), u = o(c), u && (u.c(), u.m(e.parentNode, e))), d[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && R0(r, t);
    },
    d(c) {
      c && (ae(e), ae(r), ae(a), ae(l)), u.d(c);
    }
  };
}
function ep(n) {
  let e = na(
    /*p*/
    n[41].index || 0
  ) + "", t;
  return {
    c() {
      t = rt(e);
    },
    l(r) {
      t = tt(r, e);
    },
    m(r, a) {
      me(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = na(
        /*p*/
        r[41].index || 0
      ) + "") && R0(t, e);
    },
    d(r) {
      r && ae(t);
    }
  };
}
function tp(n) {
  let e = na(
    /*p*/
    n[41].index || 0
  ) + "", t, r, a = na(
    /*p*/
    n[41].length
  ) + "", i;
  return {
    c() {
      t = rt(e), r = rt("/"), i = rt(a);
    },
    l(l) {
      t = tt(l, e), r = tt(l, "/"), i = tt(l, a);
    },
    m(l, s) {
      me(l, t, s), me(l, r, s), me(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = na(
        /*p*/
        l[41].index || 0
      ) + "") && R0(t, e), s[0] & /*progress*/
      128 && a !== (a = na(
        /*p*/
        l[41].length
      ) + "") && R0(i, a);
    },
    d(l) {
      l && (ae(t), ae(r), ae(i));
    }
  };
}
function Gc(n) {
  let e, t = (
    /*p*/
    n[41].index != null && Uc(n)
  );
  return {
    c() {
      t && t.c(), e = N0();
    },
    l(r) {
      t && t.l(r), e = N0();
    },
    m(r, a) {
      t && t.m(r, a), me(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].index != null ? t ? t.p(r, a) : (t = Uc(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && ae(e), t && t.d(r);
    }
  };
}
function Vc(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), r, a;
  return {
    c() {
      e = rt(
        /*formatted_timer*/
        n[20]
      ), r = rt(t), a = rt("s");
    },
    l(i) {
      e = tt(
        i,
        /*formatted_timer*/
        n[20]
      ), r = tt(i, t), a = tt(i, "s");
    },
    m(i, l) {
      me(i, e, l), me(i, r, l), me(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && R0(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && R0(r, t);
    },
    d(i) {
      i && (ae(e), ae(r), ae(a));
    }
  };
}
function rp(n) {
  let e, t;
  return e = new P7({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      O4(e.$$.fragment);
    },
    l(r) {
      R4(e.$$.fragment, r);
    },
    m(r, a) {
      V4(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      r[8] === "default"), e.$set(i);
    },
    i(r) {
      t || (Y0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      dr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      P4(e, r);
    }
  };
}
function np(n) {
  let e, t, r, a, i, l = `${/*last_progress_level*/
  n[15] * 100}%`, s = (
    /*progress*/
    n[7] != null && jc(n)
  );
  return {
    c() {
      e = hr("div"), t = hr("div"), s && s.c(), r = M0(), a = hr("div"), i = hr("div"), this.h();
    },
    l(o) {
      e = fr(o, "DIV", { class: !0 });
      var u = cr(e);
      t = fr(u, "DIV", { class: !0 });
      var c = cr(t);
      s && s.l(c), c.forEach(ae), r = C0(u), a = fr(u, "DIV", { class: !0 });
      var d = cr(a);
      i = fr(d, "DIV", { class: !0 }), cr(i).forEach(ae), d.forEach(ae), u.forEach(ae), this.h();
    },
    h() {
      Z0(t, "class", "progress-level-inner svelte-17v219f"), Z0(i, "class", "progress-bar svelte-17v219f"), sn(i, "width", l), Z0(a, "class", "progress-bar-wrap svelte-17v219f"), Z0(e, "class", "progress-level svelte-17v219f");
    },
    m(o, u) {
      me(o, e, u), xn(e, t), s && s.m(t, null), xn(e, r), xn(e, a), xn(a, i), n[31](i);
    },
    p(o, u) {
      /*progress*/
      o[7] != null ? s ? s.p(o, u) : (s = jc(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && sn(i, "width", l);
    },
    i: iu,
    o: iu,
    d(o) {
      o && ae(e), s && s.d(), n[31](null);
    }
  };
}
function jc(n) {
  let e, t = Nl(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Kc(qc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = N0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = N0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      me(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = Nl(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = qc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Kc(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && ae(e), H4(r, a);
    }
  };
}
function Wc(n) {
  let e, t, r, a, i = (
    /*i*/
    n[43] !== 0 && ap()
  ), l = (
    /*p*/
    n[41].desc != null && Xc(n)
  ), s = (
    /*p*/
    n[41].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null && Yc()
  ), o = (
    /*progress_level*/
    n[14] != null && Zc(n)
  );
  return {
    c() {
      i && i.c(), e = M0(), l && l.c(), t = M0(), s && s.c(), r = M0(), o && o.c(), a = N0();
    },
    l(u) {
      i && i.l(u), e = C0(u), l && l.l(u), t = C0(u), s && s.l(u), r = C0(u), o && o.l(u), a = N0();
    },
    m(u, c) {
      i && i.m(u, c), me(u, e, c), l && l.m(u, c), me(u, t, c), s && s.m(u, c), me(u, r, c), o && o.m(u, c), me(u, a, c);
    },
    p(u, c) {
      /*p*/
      u[41].desc != null ? l ? l.p(u, c) : (l = Xc(u), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      u[41].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[43]
      ] != null ? s || (s = Yc(), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), /*progress_level*/
      u[14] != null ? o ? o.p(u, c) : (o = Zc(u), o.c(), o.m(a.parentNode, a)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && (ae(e), ae(t), ae(r), ae(a)), i && i.d(u), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function ap(n) {
  let e;
  return {
    c() {
      e = rt(" /");
    },
    l(t) {
      e = tt(t, " /");
    },
    m(t, r) {
      me(t, e, r);
    },
    d(t) {
      t && ae(e);
    }
  };
}
function Xc(n) {
  let e = (
    /*p*/
    n[41].desc + ""
  ), t;
  return {
    c() {
      t = rt(e);
    },
    l(r) {
      t = tt(r, e);
    },
    m(r, a) {
      me(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[41].desc + "") && R0(t, e);
    },
    d(r) {
      r && ae(t);
    }
  };
}
function Yc(n) {
  let e;
  return {
    c() {
      e = rt("-");
    },
    l(t) {
      e = tt(t, "-");
    },
    m(t, r) {
      me(t, e, r);
    },
    d(t) {
      t && ae(e);
    }
  };
}
function Zc(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[43]
  ] || 0)).toFixed(1) + "", t, r;
  return {
    c() {
      t = rt(e), r = rt("%");
    },
    l(a) {
      t = tt(a, e), r = tt(a, "%");
    },
    m(a, i) {
      me(a, t, i), me(a, r, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && R0(t, e);
    },
    d(a) {
      a && (ae(t), ae(r));
    }
  };
}
function Kc(n) {
  let e, t = (
    /*p*/
    (n[41].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null) && Wc(n)
  );
  return {
    c() {
      t && t.c(), e = N0();
    },
    l(r) {
      t && t.l(r), e = N0();
    },
    m(r, a) {
      t && t.m(r, a), me(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[43]
      ] != null ? t ? t.p(r, a) : (t = Wc(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && ae(e), t && t.d(r);
    }
  };
}
function Jc(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[30]["additional-loading-text"]
  ), l = q4(
    i,
    n,
    /*$$scope*/
    n[29],
    Oc
  );
  return {
    c() {
      e = hr("p"), t = rt(
        /*loading_text*/
        n[9]
      ), r = M0(), l && l.c(), this.h();
    },
    l(s) {
      e = fr(s, "P", { class: !0 });
      var o = cr(e);
      t = tt(
        o,
        /*loading_text*/
        n[9]
      ), o.forEach(ae), r = C0(s), l && l.l(s), this.h();
    },
    h() {
      Z0(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      me(s, e, o), xn(e, t), me(s, r, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && R0(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && j4(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? G4(
          i,
          /*$$scope*/
          s[29],
          o,
          Y7
        ) : U4(
          /*$$scope*/
          s[29]
        ),
        Oc
      );
    },
    i(s) {
      a || (Y0(l, s), a = !0);
    },
    o(s) {
      dr(l, s), a = !1;
    },
    d(s) {
      s && (ae(e), ae(r)), l && l.d(s);
    }
  };
}
function ip(n) {
  let e, t, r, a, i;
  const l = [K7, Z7], s = [];
  function o(u, c) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = o(n)) && (r = s[t] = l[t](n)), {
    c() {
      e = hr("div"), r && r.c(), this.h();
    },
    l(u) {
      e = fr(u, "DIV", { class: !0 });
      var c = cr(e);
      r && r.l(c), c.forEach(ae), this.h();
    },
    h() {
      Z0(e, "class", a = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-17v219f"), A0(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden" || /*status*/
      n[4] == "streaming"), A0(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), A0(
        e,
        "generating",
        /*status*/
        n[4] === "generating" && /*show_progress*/
        n[6] === "full"
      ), A0(
        e,
        "border",
        /*border*/
        n[12]
      ), sn(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), sn(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, c) {
      me(u, e, c), ~t && s[t].m(e, null), n[33](e), i = !0;
    },
    p(u, c) {
      let d = t;
      t = o(u), t === d ? ~t && s[t].p(u, c) : (r && (au(), dr(s[d], 1, 1, () => {
        s[d] = null;
      }), nu()), ~t ? (r = s[t], r ? r.p(u, c) : (r = s[t] = l[t](u), r.c()), Y0(r, 1), r.m(e, null)) : r = null), (!i || c[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-17v219f")) && Z0(e, "class", a), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && A0(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden" || /*status*/
      u[4] == "streaming"), (!i || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && A0(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && A0(
        e,
        "generating",
        /*status*/
        u[4] === "generating" && /*show_progress*/
        u[6] === "full"
      ), (!i || c[0] & /*variant, show_progress, border*/
      4416) && A0(
        e,
        "border",
        /*border*/
        u[12]
      ), c[0] & /*absolute*/
      1024 && sn(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && sn(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      i || (Y0(r), i = !0);
    },
    o(u) {
      dr(r), i = !1;
    },
    d(u) {
      u && ae(e), ~t && s[t].d(), n[33](null);
    }
  };
}
var lp = function(n, e, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(l) {
      l(i);
    });
  }
  return new (t || (t = Promise))(function(i, l) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (d) {
        l(d);
      }
    }
    function o(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        l(d);
      }
    }
    function u(c) {
      c.done ? i(c.value) : a(c.value).then(s, o);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
let Ji = [], lo = !1;
const sp = typeof window < "u", W4 = sp ? window.requestAnimationFrame : (n) => {
};
function op(n) {
  return lp(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ji.push(e), !lo) lo = !0;
      else return;
      yield V7(), W4(() => {
        let r = [0, 0];
        for (let a = 0; a < Ji.length; a++) {
          const l = Ji[a].getBoundingClientRect();
          (a === 0 || l.top + window.scrollY <= r[0]) && (r[0] = l.top + window.scrollY, r[1] = a);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), lo = !1, Ji = [];
      });
    }
  });
}
function up(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const l = W7();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: u } = e, { queue_size: c } = e, { status: d } = e, { scroll_to_output: f = !1 } = e, { timer: p = !0 } = e, { show_progress: g = "full" } = e, { message: b = null } = e, { progress: A = null } = e, { variant: w = "default" } = e, { loading_text: k = "Loading..." } = e, { absolute: y = !0 } = e, { translucent: D = !1 } = e, { border: E = !1 } = e, { autoscroll: T } = e, F, C = !1, B = 0, L = 0, I = null, P = null, $ = 0, O = null, K, q = null, he = !0;
  const ee = () => {
    t(0, o = t(27, I = t(19, re = null))), t(25, B = performance.now()), t(26, L = 0), C = !0, _e();
  };
  function _e() {
    W4(() => {
      t(26, L = (performance.now() - B) / 1e3), C && _e();
    });
  }
  function de() {
    t(26, L = 0), t(0, o = t(27, I = t(19, re = null))), C && (C = !1);
  }
  j7(() => {
    C && de();
  });
  let re = null;
  function oe(W) {
    Nc[W ? "unshift" : "push"](() => {
      q = W, t(16, q), t(7, A), t(14, O), t(15, K);
    });
  }
  const ve = () => {
    l("clear_status");
  };
  function Be(W) {
    Nc[W ? "unshift" : "push"](() => {
      F = W, t(13, F);
    });
  }
  return n.$$set = (W) => {
    "i18n" in W && t(1, s = W.i18n), "eta" in W && t(0, o = W.eta), "queue_position" in W && t(2, u = W.queue_position), "queue_size" in W && t(3, c = W.queue_size), "status" in W && t(4, d = W.status), "scroll_to_output" in W && t(22, f = W.scroll_to_output), "timer" in W && t(5, p = W.timer), "show_progress" in W && t(6, g = W.show_progress), "message" in W && t(23, b = W.message), "progress" in W && t(7, A = W.progress), "variant" in W && t(8, w = W.variant), "loading_text" in W && t(9, k = W.loading_text), "absolute" in W && t(10, y = W.absolute), "translucent" in W && t(11, D = W.translucent), "border" in W && t(12, E = W.border), "autoscroll" in W && t(24, T = W.autoscroll), "$$scope" in W && t(29, i = W.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = I), o != null && I !== o && (t(28, P = (performance.now() - B) / 1e3 + o), t(19, re = P.toFixed(1)), t(27, I = o))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, $ = P === null || P <= 0 || !L ? null : Math.min(L / P, 1)), n.$$.dirty[0] & /*progress*/
    128 && A != null && t(18, he = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (A != null ? t(14, O = A.map((W) => {
      if (W.index != null && W.length != null)
        return W.index / W.length;
      if (W.progress != null)
        return W.progress;
    })) : t(14, O = null), O ? (t(15, K = O[O.length - 1]), q && (K === 0 ? t(16, q.style.transition = "0", q) : t(16, q.style.transition = "150ms", q))) : t(15, K = void 0)), n.$$.dirty[0] & /*status*/
    16 && (d === "pending" ? ee() : de()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && F && f && (d === "pending" || d === "complete") && op(F, T), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, r = L.toFixed(1));
  }, [
    o,
    s,
    u,
    c,
    d,
    p,
    g,
    A,
    w,
    k,
    y,
    D,
    E,
    F,
    O,
    K,
    q,
    $,
    he,
    re,
    r,
    l,
    f,
    b,
    T,
    B,
    L,
    I,
    P,
    i,
    a,
    oe,
    ve,
    Be
  ];
}
class cp extends H7 {
  constructor(e) {
    super(), U7(
      this,
      e,
      up,
      ip,
      G7,
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
  entries: X4,
  setPrototypeOf: Qc,
  isFrozen: fp,
  getPrototypeOf: hp,
  getOwnPropertyDescriptor: dp
} = Object;
let {
  freeze: Qt,
  seal: O0,
  create: Y4
} = Object, {
  apply: lu,
  construct: su
} = typeof Reflect < "u" && Reflect;
Qt || (Qt = function(e) {
  return e;
});
O0 || (O0 = function(e) {
  return e;
});
lu || (lu = function(e, t, r) {
  return e.apply(t, r);
});
su || (su = function(e, t) {
  return new e(...t);
});
const Qi = $t(Array.prototype.forEach), mp = $t(Array.prototype.lastIndexOf), $c = $t(Array.prototype.pop), Fa = $t(Array.prototype.push), pp = $t(Array.prototype.splice), kl = $t(String.prototype.toLowerCase), so = $t(String.prototype.toString), ef = $t(String.prototype.match), Ca = $t(String.prototype.replace), gp = $t(String.prototype.indexOf), _p = $t(String.prototype.trim), j0 = $t(Object.prototype.hasOwnProperty), Kt = $t(RegExp.prototype.test), Ma = vp(TypeError);
function $t(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return lu(n, e, r);
  };
}
function vp(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return su(n, t);
  };
}
function ye(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kl;
  Qc && Qc(n, null);
  let r = e.length;
  for (; r--; ) {
    let a = e[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (fp(e) || (e[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function bp(n) {
  for (let e = 0; e < n.length; e++)
    j0(n, e) || (n[e] = null);
  return n;
}
function Sn(n) {
  const e = Y4(null);
  for (const [t, r] of X4(n))
    j0(n, t) && (Array.isArray(r) ? e[t] = bp(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = Sn(r) : e[t] = r);
  return e;
}
function za(n, e) {
  for (; n !== null; ) {
    const r = dp(n, e);
    if (r) {
      if (r.get)
        return $t(r.get);
      if (typeof r.value == "function")
        return $t(r.value);
    }
    n = hp(n);
  }
  function t() {
    return null;
  }
  return t;
}
const tf = Qt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), oo = Qt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), uo = Qt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wp = Qt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), co = Qt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), yp = Qt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), rf = Qt(["#text"]), nf = Qt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), fo = Qt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), af = Qt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), $i = Qt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kp = O0(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Dp = O0(/<%[\w\W]*|[\w\W]*%>/gm), Ap = O0(/\$\{[\w\W]*/gm), Ep = O0(/^data-[\-\w.\u00B7-\uFFFF]+$/), Sp = O0(/^aria-[\-\w]+$/), Z4 = O0(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xp = O0(/^(?:\w+script|data):/i), Tp = O0(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), K4 = O0(/^html$/i), Fp = O0(/^[a-z][.\w]*(-[.\w]+)+$/i);
var lf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Sp,
  ATTR_WHITESPACE: Tp,
  CUSTOM_ELEMENT: Fp,
  DATA_ATTR: Ep,
  DOCTYPE_NAME: K4,
  ERB_EXPR: Dp,
  IS_ALLOWED_URI: Z4,
  IS_SCRIPT_OR_DATA: xp,
  MUSTACHE_EXPR: kp,
  TMPLIT_EXPR: Ap
});
const Ba = {
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
}, Cp = function() {
  return typeof window > "u" ? null : window;
}, Mp = function(e, t) {
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
}, sf = function() {
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
function J4() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cp();
  const e = (ne) => J4(ne);
  if (e.version = "3.2.5", e.removed = [], !n || !n.document || n.document.nodeType !== Ba.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const r = t, a = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: l,
    Node: s,
    Element: o,
    NodeFilter: u,
    NamedNodeMap: c = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: f,
    trustedTypes: p
  } = n, g = o.prototype, b = za(g, "cloneNode"), A = za(g, "remove"), w = za(g, "nextSibling"), k = za(g, "childNodes"), y = za(g, "parentNode");
  if (typeof l == "function") {
    const ne = t.createElement("template");
    ne.content && ne.content.ownerDocument && (t = ne.content.ownerDocument);
  }
  let D, E = "";
  const {
    implementation: T,
    createNodeIterator: F,
    createDocumentFragment: C,
    getElementsByTagName: B
  } = t, {
    importNode: L
  } = r;
  let I = sf();
  e.isSupported = typeof X4 == "function" && typeof y == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: P,
    ERB_EXPR: $,
    TMPLIT_EXPR: O,
    DATA_ATTR: K,
    ARIA_ATTR: q,
    IS_SCRIPT_OR_DATA: he,
    ATTR_WHITESPACE: ee,
    CUSTOM_ELEMENT: _e
  } = lf;
  let {
    IS_ALLOWED_URI: de
  } = lf, re = null;
  const oe = ye({}, [...tf, ...oo, ...uo, ...co, ...rf]);
  let ve = null;
  const Be = ye({}, [...nf, ...fo, ...af, ...$i]);
  let W = Object.seal(Y4(null, {
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
  })), pe = null, Se = null, Ie = !0, V = !0, ge = !1, Ee = !0, Le = !1, st = !0, Pe = !1, Ve = !1, Et = !1, St = !1, pt = !1, Je = !1, w0 = !0, Gr = !1;
  const wn = "user-content-";
  let R = !0, G = !1, Fe = {}, H = null;
  const Ce = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let we = null;
  const xt = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let t0 = null;
  const c0 = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Vt = "http://www.w3.org/1998/Math/MathML", Q0 = "http://www.w3.org/2000/svg", gt = "http://www.w3.org/1999/xhtml";
  let r0 = gt, q0 = !1, yn = null;
  const wm = ye({}, [Vt, Q0, gt], so);
  let yi = ye({}, ["mi", "mo", "mn", "ms", "mtext"]), ki = ye({}, ["annotation-xml"]);
  const ym = ye({}, ["title", "style", "font", "a", "script"]);
  let ga = null;
  const km = ["application/xhtml+xml", "text/html"], Dm = "text/html";
  let Tt = null, Un = null;
  const Am = t.createElement("form"), s1 = function(z) {
    return z instanceof RegExp || z instanceof Function;
  }, vs = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Un && Un === z)) {
      if ((!z || typeof z != "object") && (z = {}), z = Sn(z), ga = // eslint-disable-next-line unicorn/prefer-includes
      km.indexOf(z.PARSER_MEDIA_TYPE) === -1 ? Dm : z.PARSER_MEDIA_TYPE, Tt = ga === "application/xhtml+xml" ? so : kl, re = j0(z, "ALLOWED_TAGS") ? ye({}, z.ALLOWED_TAGS, Tt) : oe, ve = j0(z, "ALLOWED_ATTR") ? ye({}, z.ALLOWED_ATTR, Tt) : Be, yn = j0(z, "ALLOWED_NAMESPACES") ? ye({}, z.ALLOWED_NAMESPACES, so) : wm, t0 = j0(z, "ADD_URI_SAFE_ATTR") ? ye(Sn(c0), z.ADD_URI_SAFE_ATTR, Tt) : c0, we = j0(z, "ADD_DATA_URI_TAGS") ? ye(Sn(xt), z.ADD_DATA_URI_TAGS, Tt) : xt, H = j0(z, "FORBID_CONTENTS") ? ye({}, z.FORBID_CONTENTS, Tt) : Ce, pe = j0(z, "FORBID_TAGS") ? ye({}, z.FORBID_TAGS, Tt) : {}, Se = j0(z, "FORBID_ATTR") ? ye({}, z.FORBID_ATTR, Tt) : {}, Fe = j0(z, "USE_PROFILES") ? z.USE_PROFILES : !1, Ie = z.ALLOW_ARIA_ATTR !== !1, V = z.ALLOW_DATA_ATTR !== !1, ge = z.ALLOW_UNKNOWN_PROTOCOLS || !1, Ee = z.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Le = z.SAFE_FOR_TEMPLATES || !1, st = z.SAFE_FOR_XML !== !1, Pe = z.WHOLE_DOCUMENT || !1, St = z.RETURN_DOM || !1, pt = z.RETURN_DOM_FRAGMENT || !1, Je = z.RETURN_TRUSTED_TYPE || !1, Et = z.FORCE_BODY || !1, w0 = z.SANITIZE_DOM !== !1, Gr = z.SANITIZE_NAMED_PROPS || !1, R = z.KEEP_CONTENT !== !1, G = z.IN_PLACE || !1, de = z.ALLOWED_URI_REGEXP || Z4, r0 = z.NAMESPACE || gt, yi = z.MATHML_TEXT_INTEGRATION_POINTS || yi, ki = z.HTML_INTEGRATION_POINTS || ki, W = z.CUSTOM_ELEMENT_HANDLING || {}, z.CUSTOM_ELEMENT_HANDLING && s1(z.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (W.tagNameCheck = z.CUSTOM_ELEMENT_HANDLING.tagNameCheck), z.CUSTOM_ELEMENT_HANDLING && s1(z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (W.attributeNameCheck = z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), z.CUSTOM_ELEMENT_HANDLING && typeof z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Le && (V = !1), pt && (St = !0), Fe && (re = ye({}, rf), ve = [], Fe.html === !0 && (ye(re, tf), ye(ve, nf)), Fe.svg === !0 && (ye(re, oo), ye(ve, fo), ye(ve, $i)), Fe.svgFilters === !0 && (ye(re, uo), ye(ve, fo), ye(ve, $i)), Fe.mathMl === !0 && (ye(re, co), ye(ve, af), ye(ve, $i))), z.ADD_TAGS && (re === oe && (re = Sn(re)), ye(re, z.ADD_TAGS, Tt)), z.ADD_ATTR && (ve === Be && (ve = Sn(ve)), ye(ve, z.ADD_ATTR, Tt)), z.ADD_URI_SAFE_ATTR && ye(t0, z.ADD_URI_SAFE_ATTR, Tt), z.FORBID_CONTENTS && (H === Ce && (H = Sn(H)), ye(H, z.FORBID_CONTENTS, Tt)), R && (re["#text"] = !0), Pe && ye(re, ["html", "head", "body"]), re.table && (ye(re, ["tbody"]), delete pe.tbody), z.TRUSTED_TYPES_POLICY) {
        if (typeof z.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ma('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof z.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ma('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        D = z.TRUSTED_TYPES_POLICY, E = D.createHTML("");
      } else
        D === void 0 && (D = Mp(p, a)), D !== null && typeof E == "string" && (E = D.createHTML(""));
      Qt && Qt(z), Un = z;
    }
  }, o1 = ye({}, [...oo, ...uo, ...wp]), u1 = ye({}, [...co, ...yp]), Em = function(z) {
    let Y = y(z);
    (!Y || !Y.tagName) && (Y = {
      namespaceURI: r0,
      tagName: "template"
    });
    const te = kl(z.tagName), We = kl(Y.tagName);
    return yn[z.namespaceURI] ? z.namespaceURI === Q0 ? Y.namespaceURI === gt ? te === "svg" : Y.namespaceURI === Vt ? te === "svg" && (We === "annotation-xml" || yi[We]) : !!o1[te] : z.namespaceURI === Vt ? Y.namespaceURI === gt ? te === "math" : Y.namespaceURI === Q0 ? te === "math" && ki[We] : !!u1[te] : z.namespaceURI === gt ? Y.namespaceURI === Q0 && !ki[We] || Y.namespaceURI === Vt && !yi[We] ? !1 : !u1[te] && (ym[te] || !o1[te]) : !!(ga === "application/xhtml+xml" && yn[z.namespaceURI]) : !1;
  }, $0 = function(z) {
    Fa(e.removed, {
      element: z
    });
    try {
      y(z).removeChild(z);
    } catch {
      A(z);
    }
  }, Di = function(z, Y) {
    try {
      Fa(e.removed, {
        attribute: Y.getAttributeNode(z),
        from: Y
      });
    } catch {
      Fa(e.removed, {
        attribute: null,
        from: Y
      });
    }
    if (Y.removeAttribute(z), z === "is")
      if (St || pt)
        try {
          $0(Y);
        } catch {
        }
      else
        try {
          Y.setAttribute(z, "");
        } catch {
        }
  }, c1 = function(z) {
    let Y = null, te = null;
    if (Et)
      z = "<remove></remove>" + z;
    else {
      const Bt = ef(z, /^[\r\n\t ]+/);
      te = Bt && Bt[0];
    }
    ga === "application/xhtml+xml" && r0 === gt && (z = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + z + "</body></html>");
    const We = D ? D.createHTML(z) : z;
    if (r0 === gt)
      try {
        Y = new f().parseFromString(We, ga);
      } catch {
      }
    if (!Y || !Y.documentElement) {
      Y = T.createDocument(r0, "template", null);
      try {
        Y.documentElement.innerHTML = q0 ? E : We;
      } catch {
      }
    }
    const jt = Y.body || Y.documentElement;
    return z && te && jt.insertBefore(t.createTextNode(te), jt.childNodes[0] || null), r0 === gt ? B.call(Y, Pe ? "html" : "body")[0] : Pe ? Y.documentElement : jt;
  }, f1 = function(z) {
    return F.call(
      z.ownerDocument || z,
      z,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, bs = function(z) {
    return z instanceof d && (typeof z.nodeName != "string" || typeof z.textContent != "string" || typeof z.removeChild != "function" || !(z.attributes instanceof c) || typeof z.removeAttribute != "function" || typeof z.setAttribute != "function" || typeof z.namespaceURI != "string" || typeof z.insertBefore != "function" || typeof z.hasChildNodes != "function");
  }, h1 = function(z) {
    return typeof s == "function" && z instanceof s;
  };
  function yr(ne, z, Y) {
    Qi(ne, (te) => {
      te.call(e, z, Y, Un);
    });
  }
  const d1 = function(z) {
    let Y = null;
    if (yr(I.beforeSanitizeElements, z, null), bs(z))
      return $0(z), !0;
    const te = Tt(z.nodeName);
    if (yr(I.uponSanitizeElement, z, {
      tagName: te,
      allowedTags: re
    }), z.hasChildNodes() && !h1(z.firstElementChild) && Kt(/<[/\w!]/g, z.innerHTML) && Kt(/<[/\w!]/g, z.textContent) || z.nodeType === Ba.progressingInstruction || st && z.nodeType === Ba.comment && Kt(/<[/\w]/g, z.data))
      return $0(z), !0;
    if (!re[te] || pe[te]) {
      if (!pe[te] && p1(te) && (W.tagNameCheck instanceof RegExp && Kt(W.tagNameCheck, te) || W.tagNameCheck instanceof Function && W.tagNameCheck(te)))
        return !1;
      if (R && !H[te]) {
        const We = y(z) || z.parentNode, jt = k(z) || z.childNodes;
        if (jt && We) {
          const Bt = jt.length;
          for (let n0 = Bt - 1; n0 >= 0; --n0) {
            const er = b(jt[n0], !0);
            er.__removalCount = (z.__removalCount || 0) + 1, We.insertBefore(er, w(z));
          }
        }
      }
      return $0(z), !0;
    }
    return z instanceof o && !Em(z) || (te === "noscript" || te === "noembed" || te === "noframes") && Kt(/<\/no(script|embed|frames)/i, z.innerHTML) ? ($0(z), !0) : (Le && z.nodeType === Ba.text && (Y = z.textContent, Qi([P, $, O], (We) => {
      Y = Ca(Y, We, " ");
    }), z.textContent !== Y && (Fa(e.removed, {
      element: z.cloneNode()
    }), z.textContent = Y)), yr(I.afterSanitizeElements, z, null), !1);
  }, m1 = function(z, Y, te) {
    if (w0 && (Y === "id" || Y === "name") && (te in t || te in Am))
      return !1;
    if (!(V && !Se[Y] && Kt(K, Y))) {
      if (!(Ie && Kt(q, Y))) {
        if (!ve[Y] || Se[Y]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(p1(z) && (W.tagNameCheck instanceof RegExp && Kt(W.tagNameCheck, z) || W.tagNameCheck instanceof Function && W.tagNameCheck(z)) && (W.attributeNameCheck instanceof RegExp && Kt(W.attributeNameCheck, Y) || W.attributeNameCheck instanceof Function && W.attributeNameCheck(Y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            Y === "is" && W.allowCustomizedBuiltInElements && (W.tagNameCheck instanceof RegExp && Kt(W.tagNameCheck, te) || W.tagNameCheck instanceof Function && W.tagNameCheck(te)))
          ) return !1;
        } else if (!t0[Y]) {
          if (!Kt(de, Ca(te, ee, ""))) {
            if (!((Y === "src" || Y === "xlink:href" || Y === "href") && z !== "script" && gp(te, "data:") === 0 && we[z])) {
              if (!(ge && !Kt(he, Ca(te, ee, "")))) {
                if (te)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, p1 = function(z) {
    return z !== "annotation-xml" && ef(z, _e);
  }, g1 = function(z) {
    yr(I.beforeSanitizeAttributes, z, null);
    const {
      attributes: Y
    } = z;
    if (!Y || bs(z))
      return;
    const te = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ve,
      forceKeepAttr: void 0
    };
    let We = Y.length;
    for (; We--; ) {
      const jt = Y[We], {
        name: Bt,
        namespaceURI: n0,
        value: er
      } = jt, _a = Tt(Bt);
      let Yt = Bt === "value" ? er : _p(er);
      if (te.attrName = _a, te.attrValue = Yt, te.keepAttr = !0, te.forceKeepAttr = void 0, yr(I.uponSanitizeAttribute, z, te), Yt = te.attrValue, Gr && (_a === "id" || _a === "name") && (Di(Bt, z), Yt = wn + Yt), st && Kt(/((--!?|])>)|<\/(style|title)/i, Yt)) {
        Di(Bt, z);
        continue;
      }
      if (te.forceKeepAttr || (Di(Bt, z), !te.keepAttr))
        continue;
      if (!Ee && Kt(/\/>/i, Yt)) {
        Di(Bt, z);
        continue;
      }
      Le && Qi([P, $, O], (v1) => {
        Yt = Ca(Yt, v1, " ");
      });
      const _1 = Tt(z.nodeName);
      if (m1(_1, _a, Yt)) {
        if (D && typeof p == "object" && typeof p.getAttributeType == "function" && !n0)
          switch (p.getAttributeType(_1, _a)) {
            case "TrustedHTML": {
              Yt = D.createHTML(Yt);
              break;
            }
            case "TrustedScriptURL": {
              Yt = D.createScriptURL(Yt);
              break;
            }
          }
        try {
          n0 ? z.setAttributeNS(n0, Bt, Yt) : z.setAttribute(Bt, Yt), bs(z) ? $0(z) : $c(e.removed);
        } catch {
        }
      }
    }
    yr(I.afterSanitizeAttributes, z, null);
  }, Sm = function ne(z) {
    let Y = null;
    const te = f1(z);
    for (yr(I.beforeSanitizeShadowDOM, z, null); Y = te.nextNode(); )
      yr(I.uponSanitizeShadowNode, Y, null), d1(Y), g1(Y), Y.content instanceof i && ne(Y.content);
    yr(I.afterSanitizeShadowDOM, z, null);
  };
  return e.sanitize = function(ne) {
    let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = null, te = null, We = null, jt = null;
    if (q0 = !ne, q0 && (ne = "<!-->"), typeof ne != "string" && !h1(ne))
      if (typeof ne.toString == "function") {
        if (ne = ne.toString(), typeof ne != "string")
          throw Ma("dirty is not a string, aborting");
      } else
        throw Ma("toString is not a function");
    if (!e.isSupported)
      return ne;
    if (Ve || vs(z), e.removed = [], typeof ne == "string" && (G = !1), G) {
      if (ne.nodeName) {
        const er = Tt(ne.nodeName);
        if (!re[er] || pe[er])
          throw Ma("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ne instanceof s)
      Y = c1("<!---->"), te = Y.ownerDocument.importNode(ne, !0), te.nodeType === Ba.element && te.nodeName === "BODY" || te.nodeName === "HTML" ? Y = te : Y.appendChild(te);
    else {
      if (!St && !Le && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      ne.indexOf("<") === -1)
        return D && Je ? D.createHTML(ne) : ne;
      if (Y = c1(ne), !Y)
        return St ? null : Je ? E : "";
    }
    Y && Et && $0(Y.firstChild);
    const Bt = f1(G ? ne : Y);
    for (; We = Bt.nextNode(); )
      d1(We), g1(We), We.content instanceof i && Sm(We.content);
    if (G)
      return ne;
    if (St) {
      if (pt)
        for (jt = C.call(Y.ownerDocument); Y.firstChild; )
          jt.appendChild(Y.firstChild);
      else
        jt = Y;
      return (ve.shadowroot || ve.shadowrootmode) && (jt = L.call(r, jt, !0)), jt;
    }
    let n0 = Pe ? Y.outerHTML : Y.innerHTML;
    return Pe && re["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Kt(K4, Y.ownerDocument.doctype.name) && (n0 = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + n0), Le && Qi([P, $, O], (er) => {
      n0 = Ca(n0, er, " ");
    }), D && Je ? D.createHTML(n0) : n0;
  }, e.setConfig = function() {
    let ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vs(ne), Ve = !0;
  }, e.clearConfig = function() {
    Un = null, Ve = !1;
  }, e.isValidAttribute = function(ne, z, Y) {
    Un || vs({});
    const te = Tt(ne), We = Tt(z);
    return m1(te, We, Y);
  }, e.addHook = function(ne, z) {
    typeof z == "function" && Fa(I[ne], z);
  }, e.removeHook = function(ne, z) {
    if (z !== void 0) {
      const Y = mp(I[ne], z);
      return Y === -1 ? void 0 : pp(I[ne], Y, 1)[0];
    }
    return $c(I[ne]);
  }, e.removeHooks = function(ne) {
    I[ne] = [];
  }, e.removeAllHooks = function() {
    I = sf();
  }, e;
}
var Nw = J4();
const {
  SvelteComponent: zp,
  attr: Bp,
  children: Ip,
  claim_element: Lp,
  detach: ou,
  element: Np,
  empty: of,
  init: Rp,
  insert_hydration: Q4,
  noop: uf,
  safe_not_equal: Op,
  set_style: cf
} = window.__gradio__svelte__internal;
function ff(n) {
  let e, t = `${/*time_limit*/
  n[0]}s`;
  return {
    c() {
      e = Np("div"), this.h();
    },
    l(r) {
      e = Lp(r, "DIV", { class: !0 }), Ip(e).forEach(ou), this.h();
    },
    h() {
      Bp(e, "class", "streaming-bar svelte-ga0jj6"), cf(e, "animation-duration", t);
    },
    m(r, a) {
      Q4(r, e, a);
    },
    p(r, a) {
      a & /*time_limit*/
      1 && t !== (t = `${/*time_limit*/
      r[0]}s`) && cf(e, "animation-duration", t);
    },
    d(r) {
      r && ou(e);
    }
  };
}
function qp(n) {
  let e, t = (
    /*time_limit*/
    n[0] && ff(n)
  );
  return {
    c() {
      t && t.c(), e = of();
    },
    l(r) {
      t && t.l(r), e = of();
    },
    m(r, a) {
      t && t.m(r, a), Q4(r, e, a);
    },
    p(r, [a]) {
      /*time_limit*/
      r[0] ? t ? t.p(r, a) : (t = ff(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: uf,
    o: uf,
    d(r) {
      r && ou(e), t && t.d(r);
    }
  };
}
function Pp(n, e, t) {
  let { time_limit: r } = e;
  return n.$$set = (a) => {
    "time_limit" in a && t(0, r = a.time_limit);
  }, [r];
}
class $4 extends zp {
  constructor(e) {
    super(), Rp(this, e, Pp, qp, Op, { time_limit: 0 });
  }
}
const {
  SvelteComponent: Hp,
  append_hydration: ho,
  attr: el,
  children: hf,
  claim_component: Up,
  claim_element: df,
  claim_space: Gp,
  claim_text: Vp,
  create_component: jp,
  destroy_component: Wp,
  detach: mo,
  element: mf,
  init: Xp,
  insert_hydration: Yp,
  mount_component: Zp,
  safe_not_equal: Kp,
  set_data: Jp,
  space: Qp,
  text: $p,
  toggle_class: Kr,
  transition_in: e8,
  transition_out: t8
} = window.__gradio__svelte__internal;
function r8(n) {
  let e, t, r, a, i, l;
  return r = new /*Icon*/
  n[1]({}), {
    c() {
      e = mf("label"), t = mf("span"), jp(r.$$.fragment), a = Qp(), i = $p(
        /*label*/
        n[0]
      ), this.h();
    },
    l(s) {
      e = df(s, "LABEL", {
        for: !0,
        "data-testid": !0,
        class: !0
      });
      var o = hf(e);
      t = df(o, "SPAN", { class: !0 });
      var u = hf(t);
      Up(r.$$.fragment, u), u.forEach(mo), a = Gp(o), i = Vp(
        o,
        /*label*/
        n[0]
      ), o.forEach(mo), this.h();
    },
    h() {
      el(t, "class", "svelte-168uj4v"), el(e, "for", ""), el(e, "data-testid", "block-label"), el(e, "class", "svelte-168uj4v"), Kr(e, "hide", !/*show_label*/
      n[2]), Kr(e, "sr-only", !/*show_label*/
      n[2]), Kr(
        e,
        "float",
        /*float*/
        n[4]
      ), Kr(
        e,
        "hide-label",
        /*disable*/
        n[3]
      );
    },
    m(s, o) {
      Yp(s, e, o), ho(e, t), Zp(r, t, null), ho(e, a), ho(e, i), l = !0;
    },
    p(s, [o]) {
      (!l || o & /*label*/
      1) && Jp(
        i,
        /*label*/
        s[0]
      ), (!l || o & /*show_label*/
      4) && Kr(e, "hide", !/*show_label*/
      s[2]), (!l || o & /*show_label*/
      4) && Kr(e, "sr-only", !/*show_label*/
      s[2]), (!l || o & /*float*/
      16) && Kr(
        e,
        "float",
        /*float*/
        s[4]
      ), (!l || o & /*disable*/
      8) && Kr(
        e,
        "hide-label",
        /*disable*/
        s[3]
      );
    },
    i(s) {
      l || (e8(r.$$.fragment, s), l = !0);
    },
    o(s) {
      t8(r.$$.fragment, s), l = !1;
    },
    d(s) {
      s && mo(e), Wp(r);
    }
  };
}
function n8(n, e, t) {
  let { label: r = null } = e, { Icon: a } = e, { show_label: i = !0 } = e, { disable: l = !1 } = e, { float: s = !0 } = e;
  return n.$$set = (o) => {
    "label" in o && t(0, r = o.label), "Icon" in o && t(1, a = o.Icon), "show_label" in o && t(2, i = o.show_label), "disable" in o && t(3, l = o.disable), "float" in o && t(4, s = o.float);
  }, [r, a, i, l, s];
}
class ls extends Hp {
  constructor(e) {
    super(), Xp(this, e, n8, r8, Kp, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: a8,
  append_hydration: uu,
  attr: Ar,
  bubble: i8,
  check_outros: l8,
  children: cu,
  claim_component: s8,
  claim_element: fu,
  claim_space: o8,
  claim_text: u8,
  construct_svelte_component: pf,
  create_component: gf,
  destroy_component: _f,
  detach: Wa,
  element: hu,
  group_outros: c8,
  init: f8,
  insert_hydration: em,
  listen: h8,
  mount_component: vf,
  safe_not_equal: d8,
  set_data: m8,
  set_style: tl,
  space: p8,
  text: g8,
  toggle_class: a0,
  transition_in: bf,
  transition_out: wf
} = window.__gradio__svelte__internal;
function yf(n) {
  let e, t;
  return {
    c() {
      e = hu("span"), t = g8(
        /*label*/
        n[1]
      ), this.h();
    },
    l(r) {
      e = fu(r, "SPAN", { class: !0 });
      var a = cu(e);
      t = u8(
        a,
        /*label*/
        n[1]
      ), a.forEach(Wa), this.h();
    },
    h() {
      Ar(e, "class", "svelte-vk34kx");
    },
    m(r, a) {
      em(r, e, a), uu(e, t);
    },
    p(r, a) {
      a & /*label*/
      2 && m8(
        t,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && Wa(e);
    }
  };
}
function _8(n) {
  let e, t, r, a, i, l, s, o = (
    /*show_label*/
    n[2] && yf(n)
  );
  var u = (
    /*Icon*/
    n[0]
  );
  function c(d, f) {
    return {};
  }
  return u && (a = pf(u, c())), {
    c() {
      e = hu("button"), o && o.c(), t = p8(), r = hu("div"), a && gf(a.$$.fragment), this.h();
    },
    l(d) {
      e = fu(d, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var f = cu(e);
      o && o.l(f), t = o8(f), r = fu(f, "DIV", { class: !0 });
      var p = cu(r);
      a && s8(a.$$.fragment, p), p.forEach(Wa), f.forEach(Wa), this.h();
    },
    h() {
      Ar(r, "class", "svelte-vk34kx"), a0(
        r,
        "small",
        /*size*/
        n[4] === "small"
      ), a0(
        r,
        "large",
        /*size*/
        n[4] === "large"
      ), a0(
        r,
        "medium",
        /*size*/
        n[4] === "medium"
      ), e.disabled = /*disabled*/
      n[7], Ar(
        e,
        "aria-label",
        /*label*/
        n[1]
      ), Ar(
        e,
        "aria-haspopup",
        /*hasPopup*/
        n[8]
      ), Ar(
        e,
        "title",
        /*label*/
        n[1]
      ), Ar(e, "class", "svelte-vk34kx"), a0(
        e,
        "pending",
        /*pending*/
        n[3]
      ), a0(
        e,
        "padded",
        /*padded*/
        n[5]
      ), a0(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), a0(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), tl(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), tl(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(d, f) {
      em(d, e, f), o && o.m(e, null), uu(e, t), uu(e, r), a && vf(a, r, null), i = !0, l || (s = h8(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), l = !0);
    },
    p(d, [f]) {
      if (/*show_label*/
      d[2] ? o ? o.p(d, f) : (o = yf(d), o.c(), o.m(e, t)) : o && (o.d(1), o = null), f & /*Icon*/
      1 && u !== (u = /*Icon*/
      d[0])) {
        if (a) {
          c8();
          const p = a;
          wf(p.$$.fragment, 1, 0, () => {
            _f(p, 1);
          }), l8();
        }
        u ? (a = pf(u, c()), gf(a.$$.fragment), bf(a.$$.fragment, 1), vf(a, r, null)) : a = null;
      }
      (!i || f & /*size*/
      16) && a0(
        r,
        "small",
        /*size*/
        d[4] === "small"
      ), (!i || f & /*size*/
      16) && a0(
        r,
        "large",
        /*size*/
        d[4] === "large"
      ), (!i || f & /*size*/
      16) && a0(
        r,
        "medium",
        /*size*/
        d[4] === "medium"
      ), (!i || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      d[7]), (!i || f & /*label*/
      2) && Ar(
        e,
        "aria-label",
        /*label*/
        d[1]
      ), (!i || f & /*hasPopup*/
      256) && Ar(
        e,
        "aria-haspopup",
        /*hasPopup*/
        d[8]
      ), (!i || f & /*label*/
      2) && Ar(
        e,
        "title",
        /*label*/
        d[1]
      ), (!i || f & /*pending*/
      8) && a0(
        e,
        "pending",
        /*pending*/
        d[3]
      ), (!i || f & /*padded*/
      32) && a0(
        e,
        "padded",
        /*padded*/
        d[5]
      ), (!i || f & /*highlight*/
      64) && a0(
        e,
        "highlight",
        /*highlight*/
        d[6]
      ), (!i || f & /*transparent*/
      512) && a0(
        e,
        "transparent",
        /*transparent*/
        d[9]
      ), f & /*disabled, _color*/
      2176 && tl(e, "color", !/*disabled*/
      d[7] && /*_color*/
      d[11] ? (
        /*_color*/
        d[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && tl(e, "--bg-color", /*disabled*/
      d[7] ? "auto" : (
        /*background*/
        d[10]
      ));
    },
    i(d) {
      i || (a && bf(a.$$.fragment, d), i = !0);
    },
    o(d) {
      a && wf(a.$$.fragment, d), i = !1;
    },
    d(d) {
      d && Wa(e), o && o.d(), a && _f(a), l = !1, s();
    }
  };
}
function v8(n, e, t) {
  let r, { Icon: a } = e, { label: i = "" } = e, { show_label: l = !1 } = e, { pending: s = !1 } = e, { size: o = "small" } = e, { padded: u = !0 } = e, { highlight: c = !1 } = e, { disabled: d = !1 } = e, { hasPopup: f = !1 } = e, { color: p = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: b = "var(--block-background-fill)" } = e;
  function A(w) {
    i8.call(this, n, w);
  }
  return n.$$set = (w) => {
    "Icon" in w && t(0, a = w.Icon), "label" in w && t(1, i = w.label), "show_label" in w && t(2, l = w.show_label), "pending" in w && t(3, s = w.pending), "size" in w && t(4, o = w.size), "padded" in w && t(5, u = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, d = w.disabled), "hasPopup" in w && t(8, f = w.hasPopup), "color" in w && t(12, p = w.color), "transparent" in w && t(9, g = w.transparent), "background" in w && t(10, b = w.background);
  }, n.$$.update = () => {
    n.$$.dirty & /*highlight, color*/
    4160 && t(11, r = c ? "var(--color-accent)" : p);
  }, [
    a,
    i,
    l,
    s,
    o,
    u,
    c,
    d,
    f,
    g,
    b,
    r,
    p,
    A
  ];
}
class b8 extends a8 {
  constructor(e) {
    super(), f8(this, e, v8, _8, d8, {
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
  SvelteComponent: w8,
  append_hydration: y8,
  attr: po,
  binding_callbacks: k8,
  children: kf,
  claim_element: Df,
  create_slot: D8,
  detach: go,
  element: Af,
  get_all_dirty_from_scope: A8,
  get_slot_changes: E8,
  init: S8,
  insert_hydration: x8,
  safe_not_equal: T8,
  toggle_class: Jr,
  transition_in: F8,
  transition_out: C8,
  update_slot_base: M8
} = window.__gradio__svelte__internal;
function z8(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[5].default
  ), i = D8(
    a,
    n,
    /*$$scope*/
    n[4],
    null
  );
  return {
    c() {
      e = Af("div"), t = Af("div"), i && i.c(), this.h();
    },
    l(l) {
      e = Df(l, "DIV", { class: !0, "aria-label": !0 });
      var s = kf(e);
      t = Df(s, "DIV", { class: !0 });
      var o = kf(t);
      i && i.l(o), o.forEach(go), s.forEach(go), this.h();
    },
    h() {
      po(t, "class", "icon svelte-3w3rth"), po(e, "class", "empty svelte-3w3rth"), po(e, "aria-label", "Empty value"), Jr(
        e,
        "small",
        /*size*/
        n[0] === "small"
      ), Jr(
        e,
        "large",
        /*size*/
        n[0] === "large"
      ), Jr(
        e,
        "unpadded_box",
        /*unpadded_box*/
        n[1]
      ), Jr(
        e,
        "small_parent",
        /*parent_height*/
        n[3]
      );
    },
    m(l, s) {
      x8(l, e, s), y8(e, t), i && i.m(t, null), n[6](e), r = !0;
    },
    p(l, [s]) {
      i && i.p && (!r || s & /*$$scope*/
      16) && M8(
        i,
        a,
        l,
        /*$$scope*/
        l[4],
        r ? E8(
          a,
          /*$$scope*/
          l[4],
          s,
          null
        ) : A8(
          /*$$scope*/
          l[4]
        ),
        null
      ), (!r || s & /*size*/
      1) && Jr(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), (!r || s & /*size*/
      1) && Jr(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), (!r || s & /*unpadded_box*/
      2) && Jr(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!r || s & /*parent_height*/
      8) && Jr(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    i(l) {
      r || (F8(i, l), r = !0);
    },
    o(l) {
      C8(i, l), r = !1;
    },
    d(l) {
      l && go(e), i && i.d(l), n[6](null);
    }
  };
}
function B8(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e, { size: l = "small" } = e, { unpadded_box: s = !1 } = e, o;
  function u(d) {
    var f;
    if (!d) return !1;
    const { height: p } = d.getBoundingClientRect(), { height: g } = ((f = d.parentElement) === null || f === void 0 ? void 0 : f.getBoundingClientRect()) || { height: p };
    return p > g + 2;
  }
  function c(d) {
    k8[d ? "unshift" : "push"](() => {
      o = d, t(2, o);
    });
  }
  return n.$$set = (d) => {
    "size" in d && t(0, l = d.size), "unpadded_box" in d && t(1, s = d.unpadded_box), "$$scope" in d && t(4, i = d.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*el*/
    4 && t(3, r = u(o));
  }, [l, s, o, r, i, a, c];
}
class tm extends w8 {
  constructor(e) {
    super(), S8(this, e, B8, z8, T8, { size: 0, unpadded_box: 1 });
  }
}
const I8 = /^(#\s*)(.+)$/m;
function L8(n) {
  const e = n.trim(), t = e.match(I8);
  if (!t)
    return [!1, e || !1];
  const [r, , a] = t, i = a.trim();
  if (e === r)
    return [i, !1];
  const l = t.index !== void 0 ? t.index + r.length : 0, o = e.substring(l).trim() || !1;
  return [i, o];
}
const {
  SvelteComponent: N8,
  append_hydration: Cn,
  attr: ei,
  check_outros: R8,
  children: ti,
  claim_component: rm,
  claim_element: ri,
  claim_space: ss,
  claim_text: Tn,
  create_component: nm,
  destroy_component: am,
  detach: Xt,
  element: ni,
  empty: Rl,
  group_outros: O8,
  init: q8,
  insert_hydration: J0,
  mount_component: im,
  safe_not_equal: P8,
  set_data: ai,
  space: os,
  text: Fn,
  toggle_class: Ef,
  transition_in: Ol,
  transition_out: ql
} = window.__gradio__svelte__internal;
function H8(n) {
  let e, t;
  return e = new P2({}), {
    c() {
      nm(e.$$.fragment);
    },
    l(r) {
      rm(e.$$.fragment, r);
    },
    m(r, a) {
      im(e, r, a), t = !0;
    },
    i(r) {
      t || (Ol(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ql(e.$$.fragment, r), t = !1;
    },
    d(r) {
      am(e, r);
    }
  };
}
function U8(n) {
  let e, t;
  return e = new _2({}), {
    c() {
      nm(e.$$.fragment);
    },
    l(r) {
      rm(e.$$.fragment, r);
    },
    m(r, a) {
      im(e, r, a), t = !0;
    },
    i(r) {
      t || (Ol(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ql(e.$$.fragment, r), t = !1;
    },
    d(r) {
      am(e, r);
    }
  };
}
function G8(n) {
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
    n[3] !== "short" && Sf(n)
  );
  return {
    c() {
      t = Fn(e), r = os(), i && i.c(), a = Rl();
    },
    l(l) {
      t = Tn(l, e), r = ss(l), i && i.l(l), a = Rl();
    },
    m(l, s) {
      J0(l, t, s), J0(l, r, s), i && i.m(l, s), J0(l, a, s);
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
      ) + "") && ai(t, e), /*mode*/
      l[3] !== "short" ? i ? i.p(l, s) : (i = Sf(l), i.c(), i.m(a.parentNode, a)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && (Xt(t), Xt(r), Xt(a)), i && i.d(l);
    }
  };
}
function V8(n) {
  let e, t, r = (
    /*heading*/
    n[6] && xf(n)
  ), a = (
    /*paragraph*/
    n[5] && Tf(n)
  );
  return {
    c() {
      r && r.c(), e = os(), a && a.c(), t = Rl();
    },
    l(i) {
      r && r.l(i), e = ss(i), a && a.l(i), t = Rl();
    },
    m(i, l) {
      r && r.m(i, l), J0(i, e, l), a && a.m(i, l), J0(i, t, l);
    },
    p(i, l) {
      /*heading*/
      i[6] ? r ? r.p(i, l) : (r = xf(i), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), /*paragraph*/
      i[5] ? a ? a.p(i, l) : (a = Tf(i), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && (Xt(e), Xt(t)), r && r.d(i), a && a.d(i);
    }
  };
}
function Sf(n) {
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
      e = ni("span"), t = Fn("- "), a = Fn(r), i = Fn(" -"), l = os(), o = Fn(s), this.h();
    },
    l(u) {
      e = ri(u, "SPAN", { class: !0 });
      var c = ti(e);
      t = Tn(c, "- "), a = Tn(c, r), i = Tn(c, " -"), c.forEach(Xt), l = ss(u), o = Tn(u, s), this.h();
    },
    h() {
      ei(e, "class", "or svelte-1xg7h5n");
    },
    m(u, c) {
      J0(u, e, c), Cn(e, t), Cn(e, a), Cn(e, i), J0(u, l, c), J0(u, o, c);
    },
    p(u, c) {
      c & /*i18n*/
      2 && r !== (r = /*i18n*/
      u[1]("common.or") + "") && ai(a, r), c & /*message, i18n*/
      6 && s !== (s = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && ai(o, s);
    },
    d(u) {
      u && (Xt(e), Xt(l), Xt(o));
    }
  };
}
function xf(n) {
  let e, t;
  return {
    c() {
      e = ni("h2"), t = Fn(
        /*heading*/
        n[6]
      ), this.h();
    },
    l(r) {
      e = ri(r, "H2", { class: !0 });
      var a = ti(e);
      t = Tn(
        a,
        /*heading*/
        n[6]
      ), a.forEach(Xt), this.h();
    },
    h() {
      ei(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      J0(r, e, a), Cn(e, t);
    },
    p(r, a) {
      a & /*heading*/
      64 && ai(
        t,
        /*heading*/
        r[6]
      );
    },
    d(r) {
      r && Xt(e);
    }
  };
}
function Tf(n) {
  let e, t;
  return {
    c() {
      e = ni("p"), t = Fn(
        /*paragraph*/
        n[5]
      ), this.h();
    },
    l(r) {
      e = ri(r, "P", { class: !0 });
      var a = ti(e);
      t = Tn(
        a,
        /*paragraph*/
        n[5]
      ), a.forEach(Xt), this.h();
    },
    h() {
      ei(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      J0(r, e, a), Cn(e, t);
    },
    p(r, a) {
      a & /*paragraph*/
      32 && ai(
        t,
        /*paragraph*/
        r[5]
      );
    },
    d(r) {
      r && Xt(e);
    }
  };
}
function j8(n) {
  let e, t, r, a, i, l;
  const s = [U8, H8], o = [];
  function u(p, g) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  r = u(n), a = o[r] = s[r](n);
  function c(p, g) {
    return (
      /*heading*/
      p[6] || /*paragraph*/
      p[5] ? V8 : G8
    );
  }
  let d = c(n), f = d(n);
  return {
    c() {
      e = ni("div"), t = ni("span"), a.c(), i = os(), f.c(), this.h();
    },
    l(p) {
      e = ri(p, "DIV", { class: !0 });
      var g = ti(e);
      t = ri(g, "SPAN", { class: !0 });
      var b = ti(t);
      a.l(b), b.forEach(Xt), i = ss(g), f.l(g), g.forEach(Xt), this.h();
    },
    h() {
      ei(t, "class", "icon-wrap svelte-1xg7h5n"), Ef(
        t,
        "hovered",
        /*hovered*/
        n[4]
      ), ei(e, "class", "wrap svelte-1xg7h5n");
    },
    m(p, g) {
      J0(p, e, g), Cn(e, t), o[r].m(t, null), Cn(e, i), f.m(e, null), l = !0;
    },
    p(p, [g]) {
      let b = r;
      r = u(p), r !== b && (O8(), ql(o[b], 1, 1, () => {
        o[b] = null;
      }), R8(), a = o[r], a || (a = o[r] = s[r](p), a.c()), Ol(a, 1), a.m(t, null)), (!l || g & /*hovered*/
      16) && Ef(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), d === (d = c(p)) && f ? f.p(p, g) : (f.d(1), f = d(p), f && (f.c(), f.m(e, null)));
    },
    i(p) {
      l || (Ol(a), l = !0);
    },
    o(p) {
      ql(a), l = !1;
    },
    d(p) {
      p && Xt(e), o[r].d(), f.d();
    }
  };
}
function W8(n, e, t) {
  let r, a, { type: i = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: u = !1 } = e, { placeholder: c = void 0 } = e;
  const d = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return n.$$set = (f) => {
    "type" in f && t(0, i = f.type), "i18n" in f && t(1, l = f.i18n), "message" in f && t(2, s = f.message), "mode" in f && t(3, o = f.mode), "hovered" in f && t(4, u = f.hovered), "placeholder" in f && t(8, c = f.placeholder);
  }, n.$$.update = () => {
    n.$$.dirty & /*placeholder*/
    256 && t(6, [r, a] = c ? L8(c) : [!1, !1], r, (t(5, a), t(8, c)));
  }, [i, l, s, o, u, a, r, d, c];
}
class X8 extends N8 {
  constructor(e) {
    super(), q8(this, e, W8, j8, P8, {
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
  SvelteComponent: Y8,
  append_hydration: rl,
  attr: _o,
  check_outros: Z8,
  children: vo,
  claim_component: K8,
  claim_element: bo,
  claim_space: J8,
  claim_text: Q8,
  construct_svelte_component: Ff,
  create_component: Cf,
  destroy_component: Mf,
  detach: nl,
  element: wo,
  group_outros: $8,
  init: eg,
  insert_hydration: tg,
  listen: rg,
  mount_component: zf,
  safe_not_equal: ng,
  set_data: ag,
  set_style: ig,
  space: lg,
  text: sg,
  transition_in: Bf,
  transition_out: If
} = window.__gradio__svelte__internal, { createEventDispatcher: og } = window.__gradio__svelte__internal;
function ug(n) {
  let e, t, r, a, i, l, s, o, u;
  var c = (
    /*icon*/
    n[0]
  );
  function d(f, p) {
    return {};
  }
  return c && (a = Ff(c, d())), {
    c() {
      e = wo("button"), t = wo("div"), r = wo("span"), a && Cf(a.$$.fragment), i = lg(), l = sg(
        /*text*/
        n[1]
      ), this.h();
    },
    l(f) {
      e = bo(f, "BUTTON", { class: !0 });
      var p = vo(e);
      t = bo(p, "DIV", { class: !0 });
      var g = vo(t);
      r = bo(g, "SPAN", { class: !0 });
      var b = vo(r);
      a && K8(a.$$.fragment, b), b.forEach(nl), i = J8(g), l = Q8(
        g,
        /*text*/
        n[1]
      ), g.forEach(nl), p.forEach(nl), this.h();
    },
    h() {
      _o(r, "class", "icon-wrap svelte-16wj4xa"), _o(t, "class", "wrap svelte-16wj4xa"), _o(e, "class", "svelte-16wj4xa"), ig(e, "height", "100%");
    },
    m(f, p) {
      tg(f, e, p), rl(e, t), rl(t, r), a && zf(a, r, null), rl(t, i), rl(t, l), s = !0, o || (u = rg(
        e,
        "click",
        /*click_handler*/
        n[3]
      ), o = !0);
    },
    p(f, [p]) {
      if (p & /*icon*/
      1 && c !== (c = /*icon*/
      f[0])) {
        if (a) {
          $8();
          const g = a;
          If(g.$$.fragment, 1, 0, () => {
            Mf(g, 1);
          }), Z8();
        }
        c ? (a = Ff(c, d()), Cf(a.$$.fragment), Bf(a.$$.fragment, 1), zf(a, r, null)) : a = null;
      }
      (!s || p & /*text*/
      2) && ag(
        l,
        /*text*/
        f[1]
      );
    },
    i(f) {
      s || (a && Bf(a.$$.fragment, f), s = !0);
    },
    o(f) {
      a && If(a.$$.fragment, f), s = !1;
    },
    d(f) {
      f && nl(e), a && Mf(a), o = !1, u();
    }
  };
}
function cg(n, e, t) {
  let r, { icon: a = Ja } = e;
  const i = og(), l = () => i("click");
  return n.$$set = (s) => {
    "icon" in s && t(0, a = s.icon);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon*/
    1 && t(1, r = a === Ja ? "Click to Access Webcam" : "Click to Access Microphone");
  }, [a, r, i, l];
}
class fg extends Y8 {
  constructor(e) {
    super(), eg(this, e, cg, ug, ng, { icon: 0 });
  }
}
function lm() {
  return navigator.mediaDevices.enumerateDevices();
}
function hg(n, e) {
  e.srcObject = n, e.muted = !0, e.play();
}
async function Lf(n, e, t, r) {
  const a = r || {
    width: { ideal: 1280 },
    height: { ideal: 720 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...a } : a,
    audio: n
  };
  return navigator.mediaDevices.getUserMedia(i).then((l) => (hg(l, e), l));
}
function sm(n, e = "videoinput") {
  return n.filter(
    (r) => r.kind === e
  );
}
function dg(n, e) {
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
async function us(n, e, t, r, a, i = "video", l = () => {
}, s = {}, o = () => {
}, u = () => {
}) {
  e = dg(e, t);
  const c = e.createDataChannel("text");
  return c.onopen = () => {
    console.debug("Data channel is open"), c.send("handshake");
  }, c.onmessage = (d) => {
    console.debug("Received message:", d.data);
    let f;
    try {
      f = JSON.parse(d.data);
    } catch {
      console.debug("Error parsing JSON");
    }
    (d.data === "change" || d.data === "tick" || d.data === "stopword" || (f == null ? void 0 : f.type) === "warning" || (f == null ? void 0 : f.type) === "error" || (f == null ? void 0 : f.type) === "send_input" || (f == null ? void 0 : f.type) === "fetch_output" || (f == null ? void 0 : f.type) === "stopword" || (f == null ? void 0 : f.type) === "end_stream" || (f == null ? void 0 : f.type) === "update_connection") && l(f ?? d.data), o(f ?? d.data);
  }, n ? n.getTracks().forEach(async (d) => {
    console.debug("Track stream callback", d);
    const f = e.addTrack(d, n), g = { ...f.getParameters(), ...s };
    await f.setParameters(g), console.debug("sender params", f.getParameters());
  }) : (console.debug("Creating transceiver!"), e.addTransceiver(i, { direction: "recvonly" })), await pg(e, r, a, u), e;
}
function mg(n, e, t = () => {
}) {
  return new Promise((r, a) => {
    n(e).then((i) => {
      console.debug("data", i), (i == null ? void 0 : i.status) === "failed" && (t(i), console.debug("rejecting"), a("error")), r(i);
    });
  });
}
async function pg(n, e, t, r = () => {
}) {
  return n.onicecandidate = ({ candidate: a }) => {
    a && (console.debug("Sending ICE candidate", a), e({
      candidate: a.toJSON(),
      webrtc_id: t,
      type: "ice-candidate"
    }).catch((i) => console.error("Error sending ICE candidate:", i)));
  }, n.createOffer().then((a) => n.setLocalDescription(a)).then(() => {
    var a = n.localDescription;
    return mg(
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
function l0(n) {
  console.debug("Stopping peer connection"), n.getTransceivers && n.getTransceivers().forEach((e) => {
    e.stop && e.stop();
  }), n.getSenders() && n.getSenders().forEach((e) => {
    console.log("sender", e), e.track && e.track.stop && e.track.stop();
  }), setTimeout(() => {
    n.close();
  }, 500);
}
const {
  SvelteComponent: gg,
  append_hydration: yo,
  attr: on,
  check_outros: om,
  children: oa,
  claim_component: _g,
  claim_element: Mn,
  claim_space: vg,
  construct_svelte_component: Nf,
  create_component: Rf,
  destroy_component: Of,
  destroy_each: bg,
  detach: z0,
  element: zn,
  empty: qf,
  ensure_array_like: Pf,
  group_outros: um,
  init: wg,
  insert_hydration: pa,
  mount_component: Hf,
  noop: Xa,
  safe_not_equal: yg,
  set_style: E0,
  space: kg,
  src_url_equal: Uf,
  toggle_class: Gf,
  transition_in: Pl,
  transition_out: Hl
} = window.__gradio__svelte__internal, { onDestroy: Dg } = window.__gradio__svelte__internal;
function Vf(n, e, t) {
  const r = n.slice();
  return r[17] = e[t], r[19] = t, r;
}
function jf(n) {
  let e, t = Pf(Array(3)), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Wf(Vf(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = qf();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = qf();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      pa(a, e, i);
    },
    p(a, i) {
      if (i & /*pulse_color, maxPulseScale, pulseIntensity*/
      162) {
        t = Pf(Array(3));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Vf(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Wf(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && z0(e), bg(r, a);
    }
  };
}
function Wf(n) {
  let e;
  return {
    c() {
      e = zn("div"), this.h();
    },
    l(t) {
      e = Mn(t, "DIV", { class: !0 }), oa(e).forEach(z0), this.h();
    },
    h() {
      on(e, "class", "pulse-ring svelte-18h18u4"), E0(
        e,
        "background",
        /*pulse_color*/
        n[1]
      ), E0(e, "animation-delay", `${/*i*/
      n[19] * 0.4}s`), E0(
        e,
        "--max-scale",
        /*maxPulseScale*/
        n[7]
      ), E0(e, "opacity", 0.5 * /*pulseIntensity*/
      n[5]);
    },
    m(t, r) {
      pa(t, e, r);
    },
    p(t, r) {
      r & /*pulse_color*/
      2 && E0(
        e,
        "background",
        /*pulse_color*/
        t[1]
      ), r & /*maxPulseScale*/
      128 && E0(
        e,
        "--max-scale",
        /*maxPulseScale*/
        t[7]
      ), r & /*pulseIntensity*/
      32 && E0(e, "opacity", 0.5 * /*pulseIntensity*/
      t[5]);
    },
    d(t) {
      t && z0(e);
    }
  };
}
function Ag(n) {
  let e, t, r;
  var a = (
    /*icon*/
    n[0]
  );
  function i(l, s) {
    return {};
  }
  return a && (t = Nf(a, i())), {
    c() {
      e = zn("div"), t && Rf(t.$$.fragment);
    },
    l(l) {
      e = Mn(l, "DIV", {});
      var s = oa(e);
      t && _g(t.$$.fragment, s), s.forEach(z0);
    },
    m(l, s) {
      pa(l, e, s), t && Hf(t, e, null), r = !0;
    },
    p(l, s) {
      if (s & /*icon*/
      1 && a !== (a = /*icon*/
      l[0])) {
        if (t) {
          um();
          const o = t;
          Hl(o.$$.fragment, 1, 0, () => {
            Of(o, 1);
          }), om();
        }
        a ? (t = Nf(a, i()), Rf(t.$$.fragment), Pl(t.$$.fragment, 1), Hf(t, e, null)) : t = null;
      }
    },
    i(l) {
      r || (t && Pl(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && Hl(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && z0(e), t && Of(t);
    }
  };
}
function Eg(n) {
  let e;
  return {
    c() {
      e = zn("div");
    },
    l(t) {
      e = Mn(t, "DIV", {}), oa(e).forEach(z0);
    },
    m(t, r) {
      pa(t, e, r);
    },
    p: Xa,
    i: Xa,
    o: Xa,
    d(t) {
      t && z0(e);
    }
  };
}
function Sg(n) {
  let e, t;
  return {
    c() {
      e = zn("img"), this.h();
    },
    l(r) {
      e = Mn(r, "IMG", { src: !0, alt: !0, class: !0 }), this.h();
    },
    h() {
      Uf(e.src, t = /*icon*/
      n[0]) || on(e, "src", t), on(e, "alt", "Audio visualization icon"), on(e, "class", "icon-image svelte-18h18u4"), Gf(
        e,
        "full-screen",
        /*full_screen*/
        n[4] || /*full_screen*/
        n[4] === null
      ), E0(e, "border-radius", `${/*icon_radius*/
      n[2]}%`);
    },
    m(r, a) {
      pa(r, e, a);
    },
    p(r, a) {
      a & /*icon*/
      1 && !Uf(e.src, t = /*icon*/
      r[0]) && on(e, "src", t), a & /*full_screen*/
      16 && Gf(
        e,
        "full-screen",
        /*full_screen*/
        r[4] || /*full_screen*/
        r[4] === null
      ), a & /*icon_radius*/
      4 && E0(e, "border-radius", `${/*icon_radius*/
      r[2]}%`);
    },
    i: Xa,
    o: Xa,
    d(r) {
      r && z0(e);
    }
  };
}
function xg(n) {
  let e, t, r, a, i, l, s, o = (
    /*pulseIntensity*/
    n[5] > /*pulse_intensity_threshold*/
    n[3] && jf(n)
  );
  const u = [Sg, Eg, Ag], c = [];
  function d(f, p) {
    return typeof /*icon*/
    f[0] == "string" ? 0 : (
      /*icon*/
      f[0] === void 0 ? 1 : 2
    );
  }
  return i = d(n), l = c[i] = u[i](n), {
    c() {
      e = zn("div"), t = zn("div"), o && o.c(), r = kg(), a = zn("div"), l.c(), this.h();
    },
    l(f) {
      e = Mn(f, "DIV", { class: !0 });
      var p = oa(e);
      t = Mn(p, "DIV", { class: !0 });
      var g = oa(t);
      o && o.l(g), r = vg(g), a = Mn(g, "DIV", { class: !0 });
      var b = oa(a);
      l.l(b), b.forEach(z0), g.forEach(z0), p.forEach(z0), this.h();
    },
    h() {
      on(a, "class", "gradio-webrtc-pulsing-icon svelte-18h18u4"), E0(a, "transform", `scale(${/*pulseScale*/
      n[6]})`), E0(a, "background", "none"), on(t, "class", "gradio-webrtc-pulsing-icon-container svelte-18h18u4"), on(e, "class", "gradio-webrtc-icon-wrapper svelte-18h18u4");
    },
    m(f, p) {
      pa(f, e, p), yo(e, t), o && o.m(t, null), yo(t, r), yo(t, a), c[i].m(a, null), s = !0;
    },
    p(f, [p]) {
      /*pulseIntensity*/
      f[5] > /*pulse_intensity_threshold*/
      f[3] ? o ? o.p(f, p) : (o = jf(f), o.c(), o.m(t, r)) : o && (o.d(1), o = null);
      let g = i;
      i = d(f), i === g ? c[i].p(f, p) : (um(), Hl(c[g], 1, 1, () => {
        c[g] = null;
      }), om(), l = c[i], l ? l.p(f, p) : (l = c[i] = u[i](f), l.c()), Pl(l, 1), l.m(a, null)), p & /*pulseScale*/
      64 && E0(a, "transform", `scale(${/*pulseScale*/
      f[6]})`);
    },
    i(f) {
      s || (Pl(l), s = !0);
    },
    o(f) {
      Hl(l), s = !1;
    },
    d(f) {
      f && z0(e), o && o.d(), c[i].d();
    }
  };
}
function Tg(n, e, t) {
  let r, { stream_state: a = "closed" } = e, { audio_source_callback: i } = e, { icon: l = void 0 } = e, { icon_button_color: s = "var(--color-accent)" } = e, { pulse_color: o = "var(--color-accent)" } = e, { icon_radius: u = 50 } = e, { pulse_intensity_threshold: c = 0 } = e, { full_screen: d = !0 } = e, f, p, g, b, A = 1, w = 0;
  Dg(() => {
    b && cancelAnimationFrame(b), f && f.close();
  });
  function k() {
    f = new (window.AudioContext || window.webkitAudioContext)(), p = f.createAnalyser(), f.createMediaStreamSource(i()).connect(p), p.fftSize = 64, p.smoothingTimeConstant = 0.8, g = new Uint8Array(p.frequencyBinCount), y();
  }
  function y() {
    p.getByteFrequencyData(g);
    const E = Array.from(g).reduce((T, F) => T + F, 0) / g.length / 255;
    t(6, A = 1 + E * 0.15), t(5, w = E), b = requestAnimationFrame(y);
  }
  return n.$$set = (D) => {
    "stream_state" in D && t(8, a = D.stream_state), "audio_source_callback" in D && t(9, i = D.audio_source_callback), "icon" in D && t(0, l = D.icon), "icon_button_color" in D && t(10, s = D.icon_button_color), "pulse_color" in D && t(1, o = D.pulse_color), "icon_radius" in D && t(2, u = D.icon_radius), "pulse_intensity_threshold" in D && t(3, c = D.pulse_intensity_threshold), "full_screen" in D && t(4, d = D.full_screen);
  }, n.$$.update = () => {
    n.$$.dirty & /*stream_state*/
    256 && a === "open" && k(), n.$$.dirty & /*pulseIntensity*/
    32 && t(7, r = 1 + w * 10);
  }, [
    l,
    o,
    u,
    c,
    d,
    w,
    A,
    r,
    a,
    i,
    s
  ];
}
class ci extends gg {
  constructor(e) {
    super(), wg(this, e, Tg, xg, yg, {
      stream_state: 8,
      audio_source_callback: 9,
      icon: 0,
      icon_button_color: 10,
      pulse_color: 1,
      icon_radius: 2,
      pulse_intensity_threshold: 3,
      full_screen: 4
    });
  }
}
const {
  SvelteComponent: Fg,
  action_destroyer: Cg,
  add_render_callback: Mg,
  append_hydration: dt,
  attr: nt,
  binding_callbacks: zg,
  check_outros: Ul,
  children: Ht,
  claim_component: gn,
  claim_element: Ut,
  claim_space: mr,
  claim_text: fi,
  create_component: _n,
  create_in_transition: Bg,
  destroy_component: vn,
  destroy_each: Ig,
  detach: ze,
  element: Gt,
  empty: Gl,
  ensure_array_like: Xf,
  group_outros: Vl,
  init: Lg,
  insert_hydration: s0,
  listen: jl,
  mount_component: bn,
  noop: cm,
  run_all: Ng,
  safe_not_equal: Rg,
  set_data: hi,
  set_input_value: du,
  set_style: Og,
  space: pr,
  stop_propagation: qg,
  text: di,
  toggle_class: Yn,
  transition_in: wt,
  transition_out: qt
} = window.__gradio__svelte__internal, { createEventDispatcher: Pg, onMount: Hg } = window.__gradio__svelte__internal;
function Yf(n, e, t) {
  const r = n.slice();
  return r[45] = e[t], r;
}
function Zf(n) {
  let e, t, r;
  return t = new ci({
    props: {
      stream_state: (
        /*stream_state*/
        n[13]
      ),
      audio_source_callback: (
        /*audio_source_callback*/
        n[20]
      ),
      icon: (
        /*icon*/
        n[0] || fa
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
      e = Gt("div"), _n(t.$$.fragment), this.h();
    },
    l(a) {
      e = Ut(a, "DIV", { class: !0 });
      var i = Ht(e);
      gn(t.$$.fragment, i), i.forEach(ze), this.h();
    },
    h() {
      nt(e, "class", "audio-indicator svelte-1a31haa");
    },
    m(a, i) {
      s0(a, e, i), bn(t, e, null), r = !0;
    },
    p(a, i) {
      const l = {};
      i[0] & /*stream_state*/
      8192 && (l.stream_state = /*stream_state*/
      a[13]), i[0] & /*icon*/
      1 && (l.icon = /*icon*/
      a[0] || fa), i[0] & /*icon_button_color*/
      2 && (l.icon_button_color = /*icon_button_color*/
      a[1]), i[0] & /*pulse_color*/
      8 && (l.pulse_color = /*pulse_color*/
      a[3]), i[0] & /*icon_radius*/
      4 && (l.icon_radius = /*icon_radius*/
      a[2]), t.$set(l);
    },
    i(a) {
      r || (wt(t.$$.fragment, a), r = !0);
    },
    o(a) {
      qt(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && ze(e), vn(t);
    }
  };
}
function Ug(n) {
  let e, t, r, a, i, l, s, o, u, c;
  const d = [Wg, jg, Vg], f = [];
  function p(A, w) {
    return (
      /*stream_state*/
      A[13] === "waiting" ? 0 : (
        /*stream_state*/
        A[13] === "open" ? 1 : 2
      )
    );
  }
  r = p(n), a = f[r] = d[r](n);
  let g = Xg(n), b = (
    /*options_open*/
    n[15] && /*selected_device*/
    n[11] && Kf(n)
  );
  return {
    c() {
      e = Gt("div"), t = Gt("button"), a.c(), i = pr(), g && g.c(), l = pr(), b && b.c(), s = Gl(), this.h();
    },
    l(A) {
      e = Ut(A, "DIV", { class: !0 });
      var w = Ht(e);
      t = Ut(w, "BUTTON", { "aria-label": !0, class: !0 });
      var k = Ht(t);
      a.l(k), k.forEach(ze), i = mr(w), g && g.l(w), w.forEach(ze), l = mr(A), b && b.l(A), s = Gl(), this.h();
    },
    h() {
      nt(t, "aria-label", "start stream"), nt(t, "class", "svelte-1a31haa"), nt(e, "class", "button-wrap svelte-1a31haa");
    },
    m(A, w) {
      s0(A, e, w), dt(e, t), f[r].m(t, null), dt(e, i), g && g.m(e, null), s0(A, l, w), b && b.m(A, w), s0(A, s, w), o = !0, u || (c = jl(
        t,
        "click",
        /*start_webrtc*/
        n[18]
      ), u = !0);
    },
    p(A, w) {
      let k = r;
      r = p(A), r === k ? f[r].p(A, w) : (Vl(), qt(f[k], 1, 1, () => {
        f[k] = null;
      }), Ul(), a = f[r], a ? a.p(A, w) : (a = f[r] = d[r](A), a.c()), wt(a, 1), a.m(t, null)), g.p(A, w), /*options_open*/
      A[15] && /*selected_device*/
      A[11] ? b ? (b.p(A, w), w[0] & /*options_open, selected_device*/
      34816 && wt(b, 1)) : (b = Kf(A), b.c(), wt(b, 1), b.m(s.parentNode, s)) : b && (Vl(), qt(b, 1, 1, () => {
        b = null;
      }), Ul());
    },
    i(A) {
      o || (wt(a), wt(g), wt(b), o = !0);
    },
    o(A) {
      qt(a), qt(g), qt(b), o = !1;
    },
    d(A) {
      A && (ze(e), ze(l), ze(s)), f[r].d(), g && g.d(), b && b.d(A), u = !1, c();
    }
  };
}
function Gg(n) {
  let e, t, r, a;
  return t = new fg({}), t.$on(
    "click",
    /*click_handler*/
    n[34]
  ), {
    c() {
      e = Gt("div"), _n(t.$$.fragment), this.h();
    },
    l(i) {
      e = Ut(i, "DIV", { title: !0, style: !0 });
      var l = Ht(e);
      gn(t.$$.fragment, l), l.forEach(ze), this.h();
    },
    h() {
      nt(e, "title", "grant webcam access"), Og(e, "height", "100%");
    },
    m(i, l) {
      s0(i, e, l), bn(t, e, null), a = !0;
    },
    p: cm,
    i(i) {
      a || (wt(t.$$.fragment, i), i && (r || Mg(() => {
        r = Bg(e, N4, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      qt(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && ze(e), vn(t);
    }
  };
}
function Vg(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].start || /*i18n*/
    n[7]("audio.record")) + ""
  ), l, s;
  return r = new Kl({}), {
    c() {
      e = Gt("div"), t = Gt("div"), _n(r.$$.fragment), a = pr(), l = di(i), this.h();
    },
    l(o) {
      e = Ut(o, "DIV", { class: !0 });
      var u = Ht(e);
      t = Ut(u, "DIV", { class: !0, title: !0 });
      var c = Ht(t);
      gn(r.$$.fragment, c), c.forEach(ze), a = mr(u), l = fi(u, i), u.forEach(ze), this.h();
    },
    h() {
      nt(t, "class", "icon color-primary svelte-1a31haa"), nt(t, "title", "start recording"), nt(e, "class", "icon-with-text svelte-1a31haa");
    },
    m(o, u) {
      s0(o, e, u), dt(e, t), bn(r, t, null), dt(e, a), dt(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      144) && i !== (i = /*button_labels*/
      (o[4].start || /*i18n*/
      o[7]("audio.record")) + "") && hi(l, i);
    },
    i(o) {
      s || (wt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      qt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && ze(e), vn(r);
    }
  };
}
function jg(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].stop || /*i18n*/
    n[7]("audio.stop")) + ""
  ), l, s;
  return r = new dd({}), {
    c() {
      e = Gt("div"), t = Gt("div"), _n(r.$$.fragment), a = pr(), l = di(i), this.h();
    },
    l(o) {
      e = Ut(o, "DIV", { class: !0 });
      var u = Ht(e);
      t = Ut(u, "DIV", { class: !0, title: !0 });
      var c = Ht(t);
      gn(r.$$.fragment, c), c.forEach(ze), a = mr(u), l = fi(u, i), u.forEach(ze), this.h();
    },
    h() {
      nt(t, "class", "icon color-primary svelte-1a31haa"), nt(t, "title", "stop recording"), nt(e, "class", "icon-with-text svelte-1a31haa");
    },
    m(o, u) {
      s0(o, e, u), dt(e, t), bn(r, t, null), dt(e, a), dt(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      144) && i !== (i = /*button_labels*/
      (o[4].stop || /*i18n*/
      o[7]("audio.stop")) + "") && hi(l, i);
    },
    i(o) {
      s || (wt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      qt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && ze(e), vn(r);
    }
  };
}
function Wg(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].waiting || /*i18n*/
    n[7]("audio.waiting")) + ""
  ), l, s;
  return r = new yu({}), {
    c() {
      e = Gt("div"), t = Gt("div"), _n(r.$$.fragment), a = pr(), l = di(i), this.h();
    },
    l(o) {
      e = Ut(o, "DIV", { class: !0 });
      var u = Ht(e);
      t = Ut(u, "DIV", { class: !0, title: !0 });
      var c = Ht(t);
      gn(r.$$.fragment, c), c.forEach(ze), a = mr(u), l = fi(u, i), u.forEach(ze), this.h();
    },
    h() {
      nt(t, "class", "icon color-primary svelte-1a31haa"), nt(t, "title", "spinner"), nt(e, "class", "icon-with-text svelte-1a31haa");
    },
    m(o, u) {
      s0(o, e, u), dt(e, t), bn(r, t, null), dt(e, a), dt(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      144) && i !== (i = /*button_labels*/
      (o[4].waiting || /*i18n*/
      o[7]("audio.waiting")) + "") && hi(l, i);
    },
    i(o) {
      s || (wt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      qt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && ze(e), vn(r);
    }
  };
}
function Xg(n) {
  let e, t, r, a, i;
  return t = new bu({}), {
    c() {
      e = Gt("button"), _n(t.$$.fragment), this.h();
    },
    l(l) {
      e = Ut(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = Ht(e);
      gn(t.$$.fragment, s), s.forEach(ze), this.h();
    },
    h() {
      nt(e, "class", "icon svelte-1a31haa"), nt(e, "aria-label", "select input source");
    },
    m(l, s) {
      s0(l, e, s), bn(t, e, null), r = !0, a || (i = jl(
        e,
        "click",
        /*click_handler_1*/
        n[35]
      ), a = !0);
    },
    p: cm,
    i(l) {
      r || (wt(t.$$.fragment, l), r = !0);
    },
    o(l) {
      qt(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && ze(e), vn(t), a = !1, i();
    }
  };
}
function Kf(n) {
  let e, t, r, a, i, l, s;
  r = new bu({});
  function o(d, f) {
    return (
      /*available_video_devices*/
      d[10].length === 0 ? Zg : Yg
    );
  }
  let u = o(n), c = u(n);
  return {
    c() {
      e = Gt("select"), t = Gt("button"), _n(r.$$.fragment), a = pr(), c.c(), this.h();
    },
    l(d) {
      e = Ut(d, "SELECT", { class: !0, "aria-label": !0 });
      var f = Ht(e);
      t = Ut(f, "BUTTON", { class: !0 });
      var p = Ht(t);
      gn(r.$$.fragment, p), a = mr(p), p.forEach(ze), c.l(f), f.forEach(ze), this.h();
    },
    h() {
      nt(t, "class", "inset-icon svelte-1a31haa"), nt(e, "class", "select-wrap svelte-1a31haa"), nt(e, "aria-label", "select source");
    },
    m(d, f) {
      s0(d, e, f), dt(e, t), bn(r, t, null), dt(t, a), c.m(e, null), i = !0, l || (s = [
        jl(t, "click", qg(
          /*click_handler_2*/
          n[36]
        )),
        Cg(Zu.call(
          null,
          e,
          /*handle_click_outside*/
          n[19]
        )),
        jl(
          e,
          "change",
          /*handle_device_change*/
          n[16]
        )
      ], l = !0);
    },
    p(d, f) {
      u === (u = o(d)) && c ? c.p(d, f) : (c.d(1), c = u(d), c && (c.c(), c.m(e, null)));
    },
    i(d) {
      i || (wt(r.$$.fragment, d), i = !0);
    },
    o(d) {
      qt(r.$$.fragment, d), i = !1;
    },
    d(d) {
      d && ze(e), vn(r), c.d(), l = !1, Ng(s);
    }
  };
}
function Yg(n) {
  let e, t = Xf(
    /*available_video_devices*/
    n[10]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Jf(Yf(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Gl();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Gl();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      s0(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_video_devices, selected_device*/
      3072) {
        t = Xf(
          /*available_video_devices*/
          a[10]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Yf(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Jf(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && ze(e), Ig(r, a);
    }
  };
}
function Zg(n) {
  let e, t = (
    /*i18n*/
    n[7]("common.no_devices") + ""
  ), r;
  return {
    c() {
      e = Gt("option"), r = di(t), this.h();
    },
    l(a) {
      e = Ut(a, "OPTION", { class: !0 });
      var i = Ht(e);
      r = fi(i, t), i.forEach(ze), this.h();
    },
    h() {
      e.__value = "", du(e, e.__value), nt(e, "class", "svelte-1a31haa");
    },
    m(a, i) {
      s0(a, e, i), dt(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      128 && t !== (t = /*i18n*/
      a[7]("common.no_devices") + "") && hi(r, t);
    },
    d(a) {
      a && ze(e);
    }
  };
}
function Jf(n) {
  let e, t = (
    /*device*/
    n[45].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = Gt("option"), r = di(t), a = pr(), this.h();
    },
    l(s) {
      e = Ut(s, "OPTION", { class: !0 });
      var o = Ht(e);
      r = fi(o, t), a = mr(o), o.forEach(ze), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[45].deviceId, du(e, e.__value), e.selected = l = /*selected_device*/
      n[11].deviceId === /*device*/
      n[45].deviceId, nt(e, "class", "svelte-1a31haa");
    },
    m(s, o) {
      s0(s, e, o), dt(e, r), dt(e, a);
    },
    p(s, o) {
      o[0] & /*available_video_devices*/
      1024 && t !== (t = /*device*/
      s[45].label + "") && hi(r, t), o[0] & /*available_video_devices*/
      1024 && i !== (i = /*device*/
      s[45].deviceId) && (e.__value = i, du(e, e.__value)), o[0] & /*selected_device, available_video_devices*/
      3072 && l !== (l = /*selected_device*/
      s[11].deviceId === /*device*/
      s[45].deviceId) && (e.selected = l);
    },
    d(s) {
      s && ze(e);
    }
  };
}
function Kg(n) {
  let e, t, r, a, i, l, s, o, u;
  t = new $4({
    props: { time_limit: (
      /*_time_limit*/
      n[12]
    ) }
  });
  let c = (
    /*stream_state*/
    n[13] === "open" && /*include_audio*/
    n[6] && Zf(n)
  );
  const d = [Gg, Ug], f = [];
  function p(g, b) {
    return !/*webcam_accessed*/
    g[14] && !/*full_screen*/
    g[5] ? 0 : 1;
  }
  return s = p(n), o = f[s] = d[s](n), {
    c() {
      e = Gt("div"), _n(t.$$.fragment), r = pr(), c && c.c(), a = pr(), i = Gt("video"), l = pr(), o.c(), this.h();
    },
    l(g) {
      e = Ut(g, "DIV", { class: !0 });
      var b = Ht(e);
      gn(t.$$.fragment, b), r = mr(b), c && c.l(b), a = mr(b), i = Ut(b, "VIDEO", { class: !0 }), Ht(i).forEach(ze), l = mr(b), o.l(b), b.forEach(ze), this.h();
    },
    h() {
      i.autoplay = !0, i.playsInline = !0, nt(i, "class", "svelte-1a31haa"), Yn(i, "hide", !/*webcam_accessed*/
      n[14]), Yn(
        i,
        "flip",
        /*stream_state*/
        n[13] != "open" || /*stream_state*/
        n[13] === "open" && /*include_audio*/
        n[6]
      ), nt(e, "class", "wrap svelte-1a31haa"), Yn(
        e,
        "full-screen",
        /*full_screen*/
        n[5] || /*full_screen*/
        n[5] === null
      );
    },
    m(g, b) {
      s0(g, e, b), bn(t, e, null), dt(e, r), c && c.m(e, null), dt(e, a), dt(e, i), n[33](i), dt(e, l), f[s].m(e, null), u = !0;
    },
    p(g, b) {
      const A = {};
      b[0] & /*_time_limit*/
      4096 && (A.time_limit = /*_time_limit*/
      g[12]), t.$set(A), /*stream_state*/
      g[13] === "open" && /*include_audio*/
      g[6] ? c ? (c.p(g, b), b[0] & /*stream_state, include_audio*/
      8256 && wt(c, 1)) : (c = Zf(g), c.c(), wt(c, 1), c.m(e, a)) : c && (Vl(), qt(c, 1, 1, () => {
        c = null;
      }), Ul()), (!u || b[0] & /*webcam_accessed*/
      16384) && Yn(i, "hide", !/*webcam_accessed*/
      g[14]), (!u || b[0] & /*stream_state, include_audio*/
      8256) && Yn(
        i,
        "flip",
        /*stream_state*/
        g[13] != "open" || /*stream_state*/
        g[13] === "open" && /*include_audio*/
        g[6]
      );
      let w = s;
      s = p(g), s === w ? f[s].p(g, b) : (Vl(), qt(f[w], 1, 1, () => {
        f[w] = null;
      }), Ul(), o = f[s], o ? o.p(g, b) : (o = f[s] = d[s](g), o.c()), wt(o, 1), o.m(e, null)), (!u || b[0] & /*full_screen*/
      32) && Yn(
        e,
        "full-screen",
        /*full_screen*/
        g[5] || /*full_screen*/
        g[5] === null
      );
    },
    i(g) {
      u || (wt(t.$$.fragment, g), wt(c), wt(o), u = !0);
    },
    o(g) {
      qt(t.$$.fragment, g), qt(c), qt(o), u = !1;
    },
    d(g) {
      g && ze(e), vn(t), c && c.d(), n[33](null), f[s].d();
    }
  };
}
function Zu(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Jg(n, e, t) {
  var r = this && this.__awaiter || function(V, ge, Ee, Le) {
    function st(Pe) {
      return Pe instanceof Ee ? Pe : new Ee(function(Ve) {
        Ve(Pe);
      });
    }
    return new (Ee || (Ee = Promise))(function(Pe, Ve) {
      function Et(Je) {
        try {
          pt(Le.next(Je));
        } catch (w0) {
          Ve(w0);
        }
      }
      function St(Je) {
        try {
          pt(Le.throw(Je));
        } catch (w0) {
          Ve(w0);
        }
      }
      function pt(Je) {
        Je.done ? Pe(Je.value) : st(Je.value).then(Et, St);
      }
      pt((Le = Le.apply(V, ge || [])).next());
    });
  };
  let a, i = [], l = null, s = null, { time_limit: o = null } = e, u = "closed", { on_change_cb: c } = e, { reject_cb: d } = e, { mode: f } = e;
  Math.random().toString(36).substring(2);
  let { rtp_params: p = {} } = e, { icon: g = void 0 } = e, { icon_button_color: b = "var(--color-accent)" } = e, { icon_radius: A = 50 } = e, { pulse_color: w = "var(--color-accent)" } = e, { button_labels: k } = e, { connection_state: y = "unset" } = e, { full_screen: D = !0 } = e;
  const E = (V) => {
    V === "closed" ? (t(12, s = null), t(13, u = "closed")) : V === "waiting" ? t(13, u = "waiting") : t(13, u = "open");
  };
  let { track_constraints: T = null } = e, { rtc_configuration: F } = e, { stream_every: C = 1 } = e, { server: B } = e, { include_audio: L } = e, { i18n: I } = e;
  const P = Pg();
  Hg(() => {
    document.createElement("canvas"), D && O();
  });
  const $ = (V) => r(void 0, void 0, void 0, function* () {
    const Ee = V.target.value;
    yield Lf(L, a, Ee, T).then((Le) => r(void 0, void 0, void 0, function* () {
      q = Le, t(11, l = i.find((st) => st.deviceId === Ee) || null), t(15, oe = !1);
    }));
  });
  function O() {
    return r(this, void 0, void 0, function* () {
      try {
        Lf(L, a, null, T).then((V) => r(this, void 0, void 0, function* () {
          t(14, he = !0), t(10, i = yield lm()), q = V;
        })).then(() => sm(i)).then((V) => {
          t(10, i = V);
          const ge = q.getTracks().map((Ee) => {
            var Le;
            return (Le = Ee.getSettings()) === null || Le === void 0 ? void 0 : Le.deviceId;
          })[0];
          t(11, l = ge && V.find((Ee) => Ee.deviceId === ge) || i[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && P("error", I("image.no_webcam_support"));
      } catch (V) {
        if (V instanceof DOMException && V.name == "NotAllowedError")
          P("error", I("image.allow_webcam_access"));
        else
          throw V;
      }
    });
  }
  let K = (V) => {
    V.type === "end_stream" ? (c(V), t(13, u = "closed"), l0(ee), O()) : (console.debug("calling on_change_cb with msg", V), c(V));
  }, q, he = !1, ee, { webrtc_id: _e } = e;
  function de() {
    return r(this, void 0, void 0, function* () {
      if (u === "closed") {
        P("start_recording"), yield B.turn().then((ge) => {
          if (ge.error) {
            P("error", ge.error);
            return;
          }
          t(21, F = ge), console.info("rtc_configuration", ge);
        }), ee = new RTCPeerConnection(F), ee.addEventListener("connectionstatechange", (ge) => r(this, void 0, void 0, function* () {
          switch (ee.connectionState) {
            case "connected":
              t(13, u = "open"), t(12, s = o), P("tick");
              break;
            case "disconnected":
              t(13, u = "closed"), t(12, s = null), l0(ee), yield O();
              break;
            case "failed":
              t(13, u = "closed"), t(12, s = null), P("error", "Connection failed!"), l0(ee);
              break;
          }
        })), t(13, u = "waiting"), t(22, _e = Math.random().toString(36).substring(2));
        const V = setTimeout(
          () => {
            c({ type: "connection_timeout" });
          },
          1e4
        );
        us(q, ee, f === "send" ? null : a, B.offer, _e, "video", K, p, void 0, d).then((ge) => {
          clearTimeout(V), ee = ge;
        }).catch(() => {
          clearTimeout(V), console.info("catching"), t(13, u = "closed");
        });
      } else
        P("stop_recording"), l0(ee), t(13, u = "closed"), t(12, s = null), yield O();
    });
  }
  function re(V) {
    return r(this, void 0, void 0, function* () {
      V === "open" && he && u === "closed" ? (yield de(), V = "unset") : V === "closed" && he && u === "open" && (yield de(), V = "unset");
    });
  }
  let oe = !1;
  function ve(V) {
    V.preventDefault(), V.stopPropagation(), t(15, oe = !1);
  }
  const Be = () => a.srcObject;
  function W(V) {
    zg[V ? "unshift" : "push"](() => {
      a = V, t(9, a);
    });
  }
  const pe = async () => O(), Se = () => t(15, oe = !0), Ie = () => t(15, oe = !1);
  return n.$$set = (V) => {
    "time_limit" in V && t(23, o = V.time_limit), "on_change_cb" in V && t(24, c = V.on_change_cb), "reject_cb" in V && t(25, d = V.reject_cb), "mode" in V && t(26, f = V.mode), "rtp_params" in V && t(27, p = V.rtp_params), "icon" in V && t(0, g = V.icon), "icon_button_color" in V && t(1, b = V.icon_button_color), "icon_radius" in V && t(2, A = V.icon_radius), "pulse_color" in V && t(3, w = V.pulse_color), "button_labels" in V && t(4, k = V.button_labels), "connection_state" in V && t(28, y = V.connection_state), "full_screen" in V && t(5, D = V.full_screen), "track_constraints" in V && t(30, T = V.track_constraints), "rtc_configuration" in V && t(21, F = V.rtc_configuration), "stream_every" in V && t(31, C = V.stream_every), "server" in V && t(32, B = V.server), "include_audio" in V && t(6, L = V.include_audio), "i18n" in V && t(7, I = V.i18n), "webrtc_id" in V && t(22, _e = V.webrtc_id);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*connection_state*/
    268435456 && re(y);
  }, [
    g,
    b,
    A,
    w,
    k,
    D,
    L,
    I,
    Zu,
    a,
    i,
    l,
    s,
    u,
    he,
    oe,
    $,
    O,
    de,
    ve,
    Be,
    F,
    _e,
    o,
    c,
    d,
    f,
    p,
    y,
    E,
    T,
    C,
    B,
    W,
    pe,
    Se,
    Ie
  ];
}
class Qg extends Fg {
  constructor(e) {
    super(), Lg(
      this,
      e,
      Jg,
      Kg,
      Rg,
      {
        time_limit: 23,
        on_change_cb: 24,
        reject_cb: 25,
        mode: 26,
        rtp_params: 27,
        icon: 0,
        icon_button_color: 1,
        icon_radius: 2,
        pulse_color: 3,
        button_labels: 4,
        connection_state: 28,
        full_screen: 5,
        modify_stream: 29,
        track_constraints: 30,
        rtc_configuration: 21,
        stream_every: 31,
        server: 32,
        include_audio: 6,
        i18n: 7,
        webrtc_id: 22,
        click_outside: 8
      },
      null,
      [-1, -1]
    );
  }
  get modify_stream() {
    return this.$$.ctx[29];
  }
  get click_outside() {
    return Zu;
  }
}
const {
  SvelteComponent: $g,
  add_flush_callback: e9,
  attr: Qf,
  bind: t9,
  binding_callbacks: r9,
  bubble: al,
  children: n9,
  claim_component: $f,
  claim_element: a9,
  claim_space: i9,
  create_component: eh,
  destroy_component: th,
  detach: ko,
  element: l9,
  init: s9,
  insert_hydration: rh,
  mount_component: nh,
  safe_not_equal: o9,
  space: u9,
  transition_in: ah,
  transition_out: ih
} = window.__gradio__svelte__internal, { createEventDispatcher: c9 } = window.__gradio__svelte__internal;
function f9(n) {
  let e, t, r, a, i, l;
  e = new ls({
    props: {
      show_label: (
        /*show_label*/
        n[2] && !/*full_screen*/
        n[19]
      ),
      Icon: Ja,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  function s(u) {
    n[23](u);
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
    ),
    connection_state: (
      /*connection_state*/
      n[18]
    ),
    full_screen: (
      /*full_screen*/
      n[19]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (o.webrtc_id = /*value*/
    n[0]), a = new Qg({ props: o }), r9.push(() => t9(a, "webrtc_id", s)), a.$on(
      "error",
      /*error_handler*/
      n[24]
    ), a.$on(
      "start_recording",
      /*start_recording_handler*/
      n[25]
    ), a.$on(
      "stop_recording",
      /*stop_recording_handler*/
      n[26]
    ), a.$on(
      "tick",
      /*tick_handler*/
      n[27]
    ), {
      c() {
        eh(e.$$.fragment), t = u9(), r = l9("div"), eh(a.$$.fragment), this.h();
      },
      l(u) {
        $f(e.$$.fragment, u), t = i9(u), r = a9(u, "DIV", { "data-testid": !0, class: !0 });
        var c = n9(r);
        $f(a.$$.fragment, c), c.forEach(ko), this.h();
      },
      h() {
        Qf(r, "data-testid", "video"), Qf(r, "class", "video-container svelte-dn5v7y");
      },
      m(u, c) {
        nh(e, u, c), rh(u, t, c), rh(u, r, c), nh(a, r, null), l = !0;
      },
      p(u, [c]) {
        const d = {};
        c & /*show_label, full_screen*/
        524292 && (d.show_label = /*show_label*/
        u[2] && !/*full_screen*/
        u[19]), c & /*label*/
        2 && (d.label = /*label*/
        u[1] || "Video"), e.$set(d);
        const f = {};
        c & /*rtc_configuration*/
        256 && (f.rtc_configuration = /*rtc_configuration*/
        u[8]), c & /*include_audio*/
        8 && (f.include_audio = /*include_audio*/
        u[3]), c & /*time_limit*/
        32 && (f.time_limit = /*time_limit*/
        u[5]), c & /*track_constraints*/
        512 && (f.track_constraints = /*track_constraints*/
        u[9]), c & /*mode*/
        1024 && (f.mode = /*mode*/
        u[10]), c & /*rtp_params*/
        8192 && (f.rtp_params = /*rtp_params*/
        u[13]), c & /*on_change_cb*/
        2048 && (f.on_change_cb = /*on_change_cb*/
        u[11]), c & /*icon*/
        16384 && (f.icon = /*icon*/
        u[14]), c & /*icon_button_color*/
        32768 && (f.icon_button_color = /*icon_button_color*/
        u[15]), c & /*pulse_color*/
        65536 && (f.pulse_color = /*pulse_color*/
        u[16]), c & /*icon_radius*/
        131072 && (f.icon_radius = /*icon_radius*/
        u[17]), c & /*button_labels*/
        64 && (f.button_labels = /*button_labels*/
        u[6]), c & /*i18n*/
        16 && (f.i18n = /*i18n*/
        u[4]), c & /*server*/
        128 && (f.server = /*server*/
        u[7]), c & /*reject_cb*/
        4096 && (f.reject_cb = /*reject_cb*/
        u[12]), c & /*connection_state*/
        262144 && (f.connection_state = /*connection_state*/
        u[18]), c & /*full_screen*/
        524288 && (f.full_screen = /*full_screen*/
        u[19]), !i && c & /*value*/
        1 && (i = !0, f.webrtc_id = /*value*/
        u[0], e9(() => i = !1)), a.$set(f);
      },
      i(u) {
        l || (ah(e.$$.fragment, u), ah(a.$$.fragment, u), l = !0);
      },
      o(u) {
        ih(e.$$.fragment, u), ih(a.$$.fragment, u), l = !1;
      },
      d(u) {
        u && (ko(t), ko(r)), th(e, u), th(a);
      }
    }
  );
}
let h9 = !1;
function d9(n, e, t) {
  let { value: r = null } = e, { label: a = void 0 } = e, { show_label: i = !0 } = e, { include_audio: l } = e, { i18n: s } = e, { active_source: o = "webcam" } = e, { handle_reset_value: u = () => {
  } } = e, { stream_handler: c } = e, { time_limit: d = null } = e, { button_labels: f } = e, { server: p } = e, { rtc_configuration: g } = e, { track_constraints: b = {} } = e, { mode: A } = e, { on_change_cb: w } = e, { reject_cb: k } = e, { rtp_params: y = {} } = e, { icon: D = void 0 } = e, { icon_button_color: E = "var(--color-accent)" } = e, { pulse_color: T = "var(--color-accent)" } = e, { icon_radius: F = 50 } = e, { connection_state: C = "unset" } = e, { full_screen: B = !0 } = e;
  const L = c9();
  function I(q) {
    r = q, t(0, r);
  }
  function P(q) {
    al.call(this, n, q);
  }
  function $(q) {
    al.call(this, n, q);
  }
  function O(q) {
    al.call(this, n, q);
  }
  function K(q) {
    al.call(this, n, q);
  }
  return n.$$set = (q) => {
    "value" in q && t(0, r = q.value), "label" in q && t(1, a = q.label), "show_label" in q && t(2, i = q.show_label), "include_audio" in q && t(3, l = q.include_audio), "i18n" in q && t(4, s = q.i18n), "active_source" in q && t(20, o = q.active_source), "handle_reset_value" in q && t(21, u = q.handle_reset_value), "stream_handler" in q && t(22, c = q.stream_handler), "time_limit" in q && t(5, d = q.time_limit), "button_labels" in q && t(6, f = q.button_labels), "server" in q && t(7, p = q.server), "rtc_configuration" in q && t(8, g = q.rtc_configuration), "track_constraints" in q && t(9, b = q.track_constraints), "mode" in q && t(10, A = q.mode), "on_change_cb" in q && t(11, w = q.on_change_cb), "reject_cb" in q && t(12, k = q.reject_cb), "rtp_params" in q && t(13, y = q.rtp_params), "icon" in q && t(14, D = q.icon), "icon_button_color" in q && t(15, E = q.icon_button_color), "pulse_color" in q && t(16, T = q.pulse_color), "icon_radius" in q && t(17, F = q.icon_radius), "connection_state" in q && t(18, C = q.connection_state), "full_screen" in q && t(19, B = q.full_screen);
  }, L("drag", h9), [
    r,
    a,
    i,
    l,
    s,
    d,
    f,
    p,
    g,
    b,
    A,
    w,
    k,
    y,
    D,
    E,
    T,
    F,
    C,
    B,
    o,
    u,
    c,
    I,
    P,
    $,
    O,
    K
  ];
}
class m9 extends $g {
  constructor(e) {
    super(), s9(this, e, d9, f9, o9, {
      value: 0,
      label: 1,
      show_label: 2,
      include_audio: 3,
      i18n: 4,
      active_source: 20,
      handle_reset_value: 21,
      stream_handler: 22,
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
      icon_radius: 17,
      connection_state: 18,
      full_screen: 19
    });
  }
}
var lh;
(function(n) {
  n.LOAD = "LOAD", n.EXEC = "EXEC", n.WRITE_FILE = "WRITE_FILE", n.READ_FILE = "READ_FILE", n.DELETE_FILE = "DELETE_FILE", n.RENAME = "RENAME", n.CREATE_DIR = "CREATE_DIR", n.LIST_DIR = "LIST_DIR", n.DELETE_DIR = "DELETE_DIR", n.ERROR = "ERROR", n.DOWNLOAD = "DOWNLOAD", n.PROGRESS = "PROGRESS", n.LOG = "LOG", n.MOUNT = "MOUNT", n.UNMOUNT = "UNMOUNT";
})(lh || (lh = {}));
const Rw = (n) => {
  let e = ["B", "KB", "MB", "GB", "PB"], t = 0;
  for (; n > 1024; )
    n /= 1024, t++;
  let r = e[t];
  return n.toFixed(1) + " " + r;
}, Ow = () => !0;
function qw(n, { autoplay: e }) {
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
  SvelteComponent: p9,
  append_hydration: g9,
  attr: Do,
  binding_callbacks: _9,
  children: sh,
  claim_element: oh,
  claim_text: Pw,
  detach: Ya,
  element: uh,
  empty: Wl,
  init: v9,
  insert_hydration: Ku,
  is_function: ch,
  listen: Ao,
  noop: fh,
  run_all: b9,
  safe_not_equal: w9,
  set_data: Hw,
  src_url_equal: hh,
  text: Uw,
  toggle_class: Zn
} = window.__gradio__svelte__internal;
function dh(n) {
  let e;
  function t(i, l) {
    return y9;
  }
  let a = t()(n);
  return {
    c() {
      a.c(), e = Wl();
    },
    l(i) {
      a.l(i), e = Wl();
    },
    m(i, l) {
      a.m(i, l), Ku(i, e, l);
    },
    p(i, l) {
      a.p(i, l);
    },
    d(i) {
      i && Ya(e), a.d(i);
    }
  };
}
function y9(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = uh("div"), t = uh("video"), this.h();
    },
    l(l) {
      e = oh(l, "DIV", { class: !0 });
      var s = sh(e);
      t = oh(s, "VIDEO", { src: !0 }), sh(t).forEach(Ya), s.forEach(Ya), this.h();
    },
    h() {
      var l;
      hh(t.src, r = /*value*/
      (l = n[2]) == null ? void 0 : l.video.url) || Do(t, "src", r), Do(e, "class", "container svelte-1uoo7dd"), Zn(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), Zn(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), Zn(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(l, s) {
      Ku(l, e, s), g9(e, t), n[6](t), a || (i = [
        Ao(
          t,
          "loadeddata",
          /*init*/
          n[4]
        ),
        Ao(t, "mouseover", function() {
          ch(
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
        Ao(t, "mouseout", function() {
          ch(
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
      4 && !hh(t.src, r = /*value*/
      (o = n[2]) == null ? void 0 : o.video.url) && Do(t, "src", r), s & /*type*/
      1 && Zn(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), s & /*type*/
      1 && Zn(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), s & /*selected*/
      2 && Zn(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    d(l) {
      l && Ya(e), n[6](null), a = !1, b9(i);
    }
  };
}
function k9(n) {
  let e, t = (
    /*value*/
    n[2] && dh(n)
  );
  return {
    c() {
      t && t.c(), e = Wl();
    },
    l(r) {
      t && t.l(r), e = Wl();
    },
    m(r, a) {
      t && t.m(r, a), Ku(r, e, a);
    },
    p(r, [a]) {
      /*value*/
      r[2] ? t ? t.p(r, a) : (t = dh(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: fh,
    o: fh,
    d(r) {
      r && Ya(e), t && t.d(r);
    }
  };
}
function D9(n, e, t) {
  var r = this && this.__awaiter || function(d, f, p, g) {
    function b(A) {
      return A instanceof p ? A : new p(function(w) {
        w(A);
      });
    }
    return new (p || (p = Promise))(function(A, w) {
      function k(E) {
        try {
          D(g.next(E));
        } catch (T) {
          w(T);
        }
      }
      function y(E) {
        try {
          D(g.throw(E));
        } catch (T) {
          w(T);
        }
      }
      function D(E) {
        E.done ? A(E.value) : b(E.value).then(k, y);
      }
      D((g = g.apply(d, f || [])).next());
    });
  };
  let { type: a } = e, { selected: i = !1 } = e, { value: l } = e, { loop: s } = e, o;
  function u() {
    return r(this, void 0, void 0, function* () {
      t(3, o.muted = !0, o), t(3, o.playsInline = !0, o), t(3, o.controls = !1, o), o.setAttribute("muted", ""), yield o.play(), o.pause();
    });
  }
  function c(d) {
    _9[d ? "unshift" : "push"](() => {
      o = d, t(3, o);
    });
  }
  return n.$$set = (d) => {
    "type" in d && t(0, a = d.type), "selected" in d && t(1, i = d.selected), "value" in d && t(2, l = d.value), "loop" in d && t(5, s = d.loop);
  }, [a, i, l, o, u, s, c];
}
class Gw extends p9 {
  constructor(e) {
    super(), v9(this, e, D9, k9, w9, { type: 0, selected: 1, value: 2, loop: 5 });
  }
}
const {
  SvelteComponent: A9,
  append_hydration: mh,
  assign: ph,
  attr: Kn,
  binding_callbacks: E9,
  bubble: S9,
  check_outros: x9,
  children: gh,
  claim_component: Ju,
  claim_element: Eo,
  claim_space: _h,
  create_component: Qu,
  destroy_component: $u,
  detach: Ia,
  element: So,
  exclude_internal_props: vh,
  group_outros: T9,
  init: F9,
  insert_hydration: xo,
  listen: rr,
  mount_component: e1,
  run_all: C9,
  safe_not_equal: M9,
  space: bh,
  toggle_class: wh,
  transition_in: aa,
  transition_out: Za
} = window.__gradio__svelte__internal, { createEventDispatcher: z9 } = window.__gradio__svelte__internal;
function yh(n) {
  let e, t;
  return e = new tm({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [B9] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Qu(e.$$.fragment);
    },
    l(r) {
      Ju(e.$$.fragment, r);
    },
    m(r, a) {
      e1(e, r, a), t = !0;
    },
    i(r) {
      t || (aa(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Za(e.$$.fragment, r), t = !1;
    },
    d(r) {
      $u(e, r);
    }
  };
}
function B9(n) {
  let e, t;
  return e = new Ja({}), {
    c() {
      Qu(e.$$.fragment);
    },
    l(r) {
      Ju(e.$$.fragment, r);
    },
    m(r, a) {
      e1(e, r, a), t = !0;
    },
    i(r) {
      t || (aa(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Za(e.$$.fragment, r), t = !1;
    },
    d(r) {
      $u(e, r);
    }
  };
}
function I9(n) {
  let e, t, r, a, i, l, s, o, u, c;
  e = new ls({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Ja,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  let d = (
    /*value*/
    n[0] === "__webrtc_value__" && yh(n)
  );
  return {
    c() {
      Qu(e.$$.fragment), t = bh(), d && d.c(), r = bh(), a = So("div"), i = So("video"), l = So("track"), this.h();
    },
    l(f) {
      Ju(e.$$.fragment, f), t = _h(f), d && d.l(f), r = _h(f), a = Eo(f, "DIV", { class: !0 });
      var p = gh(a);
      i = Eo(p, "VIDEO", {
        "data-testid": !0,
        crossorigin: !0,
        class: !0
      });
      var g = gh(i);
      l = Eo(g, "TRACK", { kind: !0 }), g.forEach(Ia), p.forEach(Ia), this.h();
    },
    h() {
      Kn(l, "kind", "captions"), i.autoplay = !0, Kn(i, "data-testid", s = /*$$props*/
      n[5]["data-testid"]), Kn(i, "crossorigin", "anonymous"), Kn(i, "class", "svelte-1yzqfy6"), wh(
        i,
        "hidden",
        /*value*/
        n[0] === "__webrtc_value__"
      ), Kn(a, "class", "wrap svelte-1yzqfy6");
    },
    m(f, p) {
      e1(e, f, p), xo(f, t, p), d && d.m(f, p), xo(f, r, p), xo(f, a, p), mh(a, i), mh(i, l), n[12](i), o = !0, u || (c = [
        rr(
          i,
          "loadeddata",
          /*dispatch*/
          n[4].bind(null, "loadeddata")
        ),
        rr(
          i,
          "click",
          /*dispatch*/
          n[4].bind(null, "click")
        ),
        rr(
          i,
          "play",
          /*dispatch*/
          n[4].bind(null, "play")
        ),
        rr(
          i,
          "pause",
          /*dispatch*/
          n[4].bind(null, "pause")
        ),
        rr(
          i,
          "ended",
          /*dispatch*/
          n[4].bind(null, "ended")
        ),
        rr(
          i,
          "mouseover",
          /*dispatch*/
          n[4].bind(null, "mouseover")
        ),
        rr(
          i,
          "mouseout",
          /*dispatch*/
          n[4].bind(null, "mouseout")
        ),
        rr(
          i,
          "focus",
          /*dispatch*/
          n[4].bind(null, "focus")
        ),
        rr(
          i,
          "blur",
          /*dispatch*/
          n[4].bind(null, "blur")
        ),
        rr(
          i,
          "load",
          /*load_handler*/
          n[11]
        )
      ], u = !0);
    },
    p(f, [p]) {
      const g = {};
      p & /*show_label*/
      4 && (g.show_label = /*show_label*/
      f[2]), p & /*label*/
      2 && (g.label = /*label*/
      f[1] || "Video"), e.$set(g), /*value*/
      f[0] === "__webrtc_value__" ? d ? p & /*value*/
      1 && aa(d, 1) : (d = yh(f), d.c(), aa(d, 1), d.m(r.parentNode, r)) : d && (T9(), Za(d, 1, 1, () => {
        d = null;
      }), x9()), (!o || p & /*$$props*/
      32 && s !== (s = /*$$props*/
      f[5]["data-testid"])) && Kn(i, "data-testid", s), (!o || p & /*value*/
      1) && wh(
        i,
        "hidden",
        /*value*/
        f[0] === "__webrtc_value__"
      );
    },
    i(f) {
      o || (aa(e.$$.fragment, f), aa(d), o = !0);
    },
    o(f) {
      Za(e.$$.fragment, f), Za(d), o = !1;
    },
    d(f) {
      f && (Ia(t), Ia(r), Ia(a)), $u(e, f), d && d.d(f), n[12](null), u = !1, C9(c);
    }
  };
}
function L9(n, e, t) {
  var r = this && this.__awaiter || function(w, k, y, D) {
    function E(T) {
      return T instanceof y ? T : new y(function(F) {
        F(T);
      });
    }
    return new (y || (y = Promise))(function(T, F) {
      function C(I) {
        try {
          L(D.next(I));
        } catch (P) {
          F(P);
        }
      }
      function B(I) {
        try {
          L(D.throw(I));
        } catch (P) {
          F(P);
        }
      }
      function L(I) {
        I.done ? T(I.value) : E(I.value).then(C, B);
      }
      L((D = D.apply(w, k || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { on_change_cb: o } = e, { server: u } = e, c, d = Math.random().toString(36).substring(2), f;
  const p = z9();
  let g = (w) => {
    w.type === "end_stream" ? (o(w), l0(f)) : (console.debug("calling on_change_cb with msg", w), o(w));
  };
  function b(w) {
    S9.call(this, n, w);
  }
  function A(w) {
    E9[w ? "unshift" : "push"](() => {
      c = w, t(3, c);
    });
  }
  return n.$$set = (w) => {
    t(5, e = ph(ph({}, e), vh(w))), "value" in w && t(0, a = w.value), "label" in w && t(1, i = w.label), "show_label" in w && t(2, l = w.show_label), "rtc_configuration" in w && t(6, s = w.rtc_configuration), "on_change_cb" in w && t(7, o = w.on_change_cb), "server" in w && t(8, u = w.server);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*value, server, _webrtc_id, rtc_configuration, pc, on_change_cb, video_element*/
    1993 && a === "start_webrtc_stream") {
      t(9, d = Math.random().toString(36).substring(2)), u.turn().then((k) => {
        t(6, s = k);
      }).catch((k) => {
        p("error", k);
      }), t(0, a = d), t(10, f = new RTCPeerConnection(s)), f.addEventListener("connectionstatechange", (k) => r(void 0, void 0, void 0, function* () {
        switch (f.connectionState) {
          case "connected":
            p("tick");
            break;
          case "disconnected":
            l0(f);
            break;
          case "failed":
            p("error", "Connection failed!"), l0(f);
            break;
        }
      }));
      const w = setTimeout(
        () => {
          o({ type: "connection_timeout" });
        },
        1e4
      );
      us(null, f, c, u.offer, d, "video", g).then((k) => {
        clearTimeout(w), t(10, f = k);
      }).catch(() => {
        clearTimeout(w), p("error", "Too many concurrent users. Come back later!");
      });
    }
  }, e = vh(e), [
    a,
    i,
    l,
    c,
    p,
    e,
    s,
    o,
    u,
    d,
    f,
    b,
    A
  ];
}
class N9 extends A9 {
  constructor(e) {
    super(), F9(this, e, L9, I9, M9, {
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
  SvelteComponent: R9,
  append_hydration: Qe,
  attr: ue,
  binding_callbacks: O9,
  check_outros: q9,
  children: Ue,
  claim_component: P9,
  claim_element: Xl,
  claim_svg_element: it,
  create_component: H9,
  destroy_component: U9,
  detach: Re,
  element: Yl,
  group_outros: G9,
  init: V9,
  insert_hydration: t1,
  mount_component: j9,
  noop: kh,
  safe_not_equal: W9,
  set_style: Ye,
  svg_element: lt,
  toggle_class: un,
  transition_in: mu,
  transition_out: pu
} = window.__gradio__svelte__internal, { onDestroy: X9 } = window.__gradio__svelte__internal;
function Y9(n) {
  let e, t, r, a, i, l, s, o, u, c, d, f, p, g, b, A, w, k, y, D, E, T, F;
  return {
    c() {
      e = Yl("div"), t = lt("svg"), r = lt("defs"), a = lt("linearGradient"), i = lt("stop"), l = lt("stop"), s = lt("stop"), o = lt("linearGradient"), u = lt("stop"), c = lt("stop"), d = lt("stop"), f = lt("linearGradient"), p = lt("stop"), g = lt("stop"), b = lt("stop"), A = lt("filter"), w = lt("feGaussianBlur"), k = lt("feMerge"), y = lt("feMergeNode"), D = lt("feMergeNode"), E = lt("path"), T = lt("path"), F = lt("path"), this.h();
    },
    l(C) {
      e = Xl(C, "DIV", { class: !0 });
      var B = Ue(e);
      t = it(B, "svg", { class: !0 });
      var L = Ue(t);
      r = it(L, "defs", {});
      var I = Ue(r);
      a = it(I, "linearGradient", {
        id: !0,
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0
      });
      var P = Ue(a);
      i = it(P, "stop", { offset: !0, style: !0 }), Ue(i).forEach(Re), l = it(P, "stop", { offset: !0, style: !0 }), Ue(l).forEach(Re), s = it(P, "stop", { offset: !0, style: !0 }), Ue(s).forEach(Re), P.forEach(Re), o = it(I, "linearGradient", {
        id: !0,
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0
      });
      var $ = Ue(o);
      u = it($, "stop", { offset: !0, style: !0 }), Ue(u).forEach(Re), c = it($, "stop", { offset: !0, style: !0 }), Ue(c).forEach(Re), d = it($, "stop", { offset: !0, style: !0 }), Ue(d).forEach(Re), $.forEach(Re), f = it(I, "linearGradient", {
        id: !0,
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0
      });
      var O = Ue(f);
      p = it(O, "stop", { offset: !0, style: !0 }), Ue(p).forEach(Re), g = it(O, "stop", { offset: !0, style: !0 }), Ue(g).forEach(Re), b = it(O, "stop", { offset: !0, style: !0 }), Ue(b).forEach(Re), O.forEach(Re), A = it(I, "filter", { id: !0 });
      var K = Ue(A);
      w = it(K, "feGaussianBlur", { stdDeviation: !0, result: !0 }), Ue(w).forEach(Re), k = it(K, "feMerge", {});
      var q = Ue(k);
      y = it(q, "feMergeNode", { in: !0 }), Ue(y).forEach(Re), D = it(q, "feMergeNode", { in: !0 }), Ue(D).forEach(Re), q.forEach(Re), K.forEach(Re), I.forEach(Re), E = it(L, "path", {
        class: !0,
        stroke: !0,
        "stroke-width": !0,
        fill: !0,
        filter: !0
      }), Ue(E).forEach(Re), T = it(L, "path", {
        class: !0,
        stroke: !0,
        "stroke-width": !0,
        fill: !0,
        filter: !0
      }), Ue(T).forEach(Re), F = it(L, "path", {
        class: !0,
        stroke: !0,
        "stroke-width": !0,
        fill: !0,
        filter: !0
      }), Ue(F).forEach(Re), L.forEach(Re), B.forEach(Re), this.h();
    },
    h() {
      ue(i, "offset", "0%"), Ye(i, "stop-color", "var(--color-accent)"), Ye(i, "stop-opacity", "0.8"), ue(l, "offset", "50%"), Ye(l, "stop-color", "var(--color-accent)"), Ye(l, "stop-opacity", "0.9"), ue(s, "offset", "100%"), Ye(s, "stop-color", "var(--color-accent)"), Ye(s, "stop-opacity", "0.8"), ue(a, "id", "waveGradient1"), ue(a, "x1", "0%"), ue(a, "y1", "0%"), ue(a, "x2", "100%"), ue(a, "y2", "0%"), ue(u, "offset", "0%"), Ye(u, "stop-color", "var(--color-accent)"), Ye(u, "stop-opacity", "0.6"), ue(c, "offset", "50%"), Ye(c, "stop-color", "var(--color-accent)"), Ye(c, "stop-opacity", "0.7"), ue(d, "offset", "100%"), Ye(d, "stop-color", "var(--color-accent)"), Ye(d, "stop-opacity", "0.6"), ue(o, "id", "waveGradient2"), ue(o, "x1", "0%"), ue(o, "y1", "0%"), ue(o, "x2", "100%"), ue(o, "y2", "0%"), ue(p, "offset", "0%"), Ye(p, "stop-color", "var(--color-accent)"), Ye(p, "stop-opacity", "0.4"), ue(g, "offset", "50%"), Ye(g, "stop-color", "var(--color-accent)"), Ye(g, "stop-opacity", "0.5"), ue(b, "offset", "100%"), Ye(b, "stop-color", "var(--color-accent)"), Ye(b, "stop-opacity", "0.4"), ue(f, "id", "waveGradient3"), ue(f, "x1", "0%"), ue(f, "y1", "0%"), ue(f, "x2", "100%"), ue(f, "y2", "0%"), ue(w, "stdDeviation", "2"), ue(w, "result", "coloredBlur"), ue(y, "in", "coloredBlur"), ue(D, "in", "SourceGraphic"), ue(A, "id", "glow"), ue(E, "class", "wave-path wave-layer-3 svelte-1noudtu"), ue(E, "stroke", "url(#waveGradient3)"), ue(E, "stroke-width", "1.5"), ue(E, "fill", "none"), ue(E, "filter", "url(#glow)"), ue(T, "class", "wave-path wave-layer-2 svelte-1noudtu"), ue(T, "stroke", "url(#waveGradient2)"), ue(T, "stroke-width", "2"), ue(T, "fill", "none"), ue(T, "filter", "url(#glow)"), ue(F, "class", "wave-path wave-layer-1 svelte-1noudtu"), ue(F, "stroke", "url(#waveGradient1)"), ue(F, "stroke-width", "2.5"), ue(F, "fill", "none"), ue(F, "filter", "url(#glow)"), ue(t, "class", "wave-svg svelte-1noudtu"), un(
        t,
        "full-screen",
        /*full_screen*/
        n[7]
      ), ue(e, "class", "wave-container svelte-1noudtu"), un(
        e,
        "full-screen",
        /*full_screen*/
        n[7]
      ), Ye(
        e,
        "width",
        /*containerWidth*/
        n[10]
      );
    },
    m(C, B) {
      t1(C, e, B), Qe(e, t), Qe(t, r), Qe(r, a), Qe(a, i), Qe(a, l), Qe(a, s), Qe(r, o), Qe(o, u), Qe(o, c), Qe(o, d), Qe(r, f), Qe(f, p), Qe(f, g), Qe(f, b), Qe(r, A), Qe(A, w), Qe(A, k), Qe(k, y), Qe(k, D), Qe(t, E), Qe(t, T), Qe(t, F), n[11](e);
    },
    p(C, B) {
      B & /*full_screen*/
      128 && un(
        t,
        "full-screen",
        /*full_screen*/
        C[7]
      ), B & /*full_screen*/
      128 && un(
        e,
        "full-screen",
        /*full_screen*/
        C[7]
      ), B & /*containerWidth*/
      1024 && Ye(
        e,
        "width",
        /*containerWidth*/
        C[10]
      );
    },
    i: kh,
    o: kh,
    d(C) {
      C && Re(e), n[11](null);
    }
  };
}
function Z9(n) {
  let e, t, r, a;
  return r = new ci({
    props: {
      stream_state: (
        /*stream_state*/
        n[0]
      ),
      pulse_color: (
        /*pulse_color*/
        n[4]
      ),
      icon: (
        /*icon*/
        n[2]
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[3]
      ),
      icon_radius: (
        /*icon_radius*/
        n[6]
      ),
      audio_source_callback: (
        /*audio_source_callback*/
        n[1]
      )
    }
  }), {
    c() {
      e = Yl("div"), t = Yl("div"), H9(r.$$.fragment), this.h();
    },
    l(i) {
      e = Xl(i, "DIV", { class: !0 });
      var l = Ue(e);
      t = Xl(l, "DIV", { class: !0 });
      var s = Ue(t);
      P9(r.$$.fragment, s), s.forEach(Re), l.forEach(Re), this.h();
    },
    h() {
      ue(t, "class", "gradio-webrtc-icon svelte-1noudtu"), Ye(t, "transform", `scale(${/*pulseScale*/
      n[8]})`), Ye(
        t,
        "background",
        /*icon_button_color*/
        n[3]
      ), ue(e, "class", "gradio-webrtc-icon-container svelte-1noudtu"), un(
        e,
        "full-screen",
        /*full_screen*/
        n[7]
      );
    },
    m(i, l) {
      t1(i, e, l), Qe(e, t), j9(r, t, null), a = !0;
    },
    p(i, l) {
      const s = {};
      l & /*stream_state*/
      1 && (s.stream_state = /*stream_state*/
      i[0]), l & /*pulse_color*/
      16 && (s.pulse_color = /*pulse_color*/
      i[4]), l & /*icon*/
      4 && (s.icon = /*icon*/
      i[2]), l & /*icon_button_color*/
      8 && (s.icon_button_color = /*icon_button_color*/
      i[3]), l & /*icon_radius*/
      64 && (s.icon_radius = /*icon_radius*/
      i[6]), l & /*audio_source_callback*/
      2 && (s.audio_source_callback = /*audio_source_callback*/
      i[1]), r.$set(s), l & /*pulseScale*/
      256 && Ye(t, "transform", `scale(${/*pulseScale*/
      i[8]})`), l & /*icon_button_color*/
      8 && Ye(
        t,
        "background",
        /*icon_button_color*/
        i[3]
      ), (!a || l & /*full_screen*/
      128) && un(
        e,
        "full-screen",
        /*full_screen*/
        i[7]
      );
    },
    i(i) {
      a || (mu(r.$$.fragment, i), a = !0);
    },
    o(i) {
      pu(r.$$.fragment, i), a = !1;
    },
    d(i) {
      i && Re(e), U9(r);
    }
  };
}
function K9(n) {
  let e, t, r, a;
  const i = [Z9, Y9], l = [];
  function s(o, u) {
    return (
      /*icon*/
      o[2] && !/*pending*/
      o[5] ? 0 : 1
    );
  }
  return t = s(n), r = l[t] = i[t](n), {
    c() {
      e = Yl("div"), r.c(), this.h();
    },
    l(o) {
      e = Xl(o, "DIV", { class: !0 });
      var u = Ue(e);
      r.l(u), u.forEach(Re), this.h();
    },
    h() {
      ue(e, "class", "gradio-webrtc-waveContainer svelte-1noudtu"), un(
        e,
        "full-screen",
        /*full_screen*/
        n[7]
      );
    },
    m(o, u) {
      t1(o, e, u), l[t].m(e, null), a = !0;
    },
    p(o, [u]) {
      let c = t;
      t = s(o), t === c ? l[t].p(o, u) : (G9(), pu(l[c], 1, 1, () => {
        l[c] = null;
      }), q9(), r = l[t], r ? r.p(o, u) : (r = l[t] = i[t](o), r.c()), mu(r, 1), r.m(e, null)), (!a || u & /*full_screen*/
      128) && un(
        e,
        "full-screen",
        /*full_screen*/
        o[7]
      );
    },
    i(o) {
      a || (mu(r), a = !0);
    },
    o(o) {
      pu(r), a = !1;
    },
    d(o) {
      o && Re(e), l[t].d();
    }
  };
}
function J9(n, e, t) {
  let r, a, { stream_state: i = "closed" } = e, { audio_source_callback: l } = e, { icon: s = void 0 } = e, { icon_button_color: o = "var(--color-accent)" } = e, { pulse_color: u = "var(--color-accent)" } = e, { pending: c = !1 } = e, { icon_radius: d = 50 } = e, { full_screen: f = !0 } = e, p, g, b, A, { pulseScale: w = 1 } = e, k, y = [], D = [], E = 0, T;
  X9(() => {
    A && cancelAnimationFrame(A), T && cancelAnimationFrame(T), p && p.close();
  });
  function F() {
    T && cancelAnimationFrame(T), y = new Array(r).fill(0.1), D = new Array(r).fill(0), C();
  }
  function C() {
    E += 0.012;
    for (let O = 0; O < r; O++) {
      const K = 0.15 + Math.sin(E * 0.5 + O * 0.3) * 0.05;
      y[O] = K, D[O] = E * (0.3 + O * 0.05);
    }
    I(), (i === "closed" || i === "waiting") && (T = requestAnimationFrame(C));
  }
  function B() {
    T && cancelAnimationFrame(T), p = new (window.AudioContext || window.webkitAudioContext)(), g = p.createAnalyser(), p.createMediaStreamSource(l()).connect(g), g.fftSize = 128, g.smoothingTimeConstant = 0.85, b = new Uint8Array(g.frequencyBinCount), y = new Array(r).fill(0), D = new Array(r).fill(0), L();
  }
  function L() {
    g.getByteFrequencyData(b), E += 0.016;
    for (let O = 0; O < r; O++) {
      const K = Math.floor(O / r * b.length), q = b[K] / 255 * 0.8 + 0.2;
      y[O] = q, D[O] = E * (0.5 + O * 0.1);
    }
    I(), A = requestAnimationFrame(L);
  }
  function I() {
    if (!k) return;
    k.querySelectorAll(".wave-path").forEach((K, q) => {
      const he = P(q);
      K.setAttribute("d", he);
    });
  }
  function P(O) {
    const K = (k == null ? void 0 : k.clientWidth) || 400, he = (f ? 300 : 64) / 2, ee = 100;
    let _e = `M 0 ${he}`;
    for (let de = 0; de <= ee; de++) {
      const re = de / ee * K, oe = de / ee * Math.PI * 4, ve = 1 + O * 0.3, Be = D[O] || 0, W = f ? 60 : 20;
      let pe = 0;
      for (let ge = 0; ge < Math.min(4, y.length); ge++) {
        const Ee = 1 / (ge + 1);
        pe += (y[ge] || 0) * Ee;
      }
      pe = pe * W * (0.6 + O * 0.1);
      const Se = Math.sin(oe * ve + Be) * pe, Ie = Math.cos(oe * ve * 1.3 + Be * 0.7) * pe * 0.3, V = he + Se + Ie;
      de === 0 ? _e = `M ${re} ${V}` : _e += ` L ${re} ${V}`;
    }
    return _e;
  }
  function $(O) {
    O9[O ? "unshift" : "push"](() => {
      k = O, t(9, k);
    });
  }
  return n.$$set = (O) => {
    "stream_state" in O && t(0, i = O.stream_state), "audio_source_callback" in O && t(1, l = O.audio_source_callback), "icon" in O && t(2, s = O.icon), "icon_button_color" in O && t(3, o = O.icon_button_color), "pulse_color" in O && t(4, u = O.pulse_color), "pending" in O && t(5, c = O.pending), "icon_radius" in O && t(6, d = O.icon_radius), "full_screen" in O && t(7, f = O.full_screen), "pulseScale" in O && t(8, w = O.pulseScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*full_screen, icon*/
    132 && (r = f && !s ? 32 : 16), n.$$.dirty & /*icon*/
    4 && t(10, a = s ? "128px" : "100%"), n.$$.dirty & /*stream_state*/
    1 && i === "open" && B(), n.$$.dirty & /*stream_state*/
    1 && (i === "closed" || i === "waiting") && F();
  }, [
    i,
    l,
    s,
    o,
    u,
    c,
    d,
    f,
    w,
    k,
    a,
    $
  ];
}
class fm extends R9 {
  constructor(e) {
    super(), V9(this, e, J9, K9, W9, {
      stream_state: 0,
      audio_source_callback: 1,
      icon: 2,
      icon_button_color: 3,
      pulse_color: 4,
      pending: 5,
      icon_radius: 6,
      full_screen: 7,
      pulseScale: 8
    });
  }
}
const {
  SvelteComponent: Q9,
  attr: hm,
  binding_callbacks: $9,
  bubble: e_,
  check_outros: Dh,
  children: dm,
  claim_component: cs,
  claim_element: mm,
  claim_space: To,
  create_component: fs,
  destroy_component: hs,
  detach: en,
  element: pm,
  empty: Ah,
  group_outros: Eh,
  init: t_,
  insert_hydration: ra,
  listen: Fo,
  mount_component: ds,
  run_all: r_,
  safe_not_equal: n_,
  space: Co,
  toggle_class: a_,
  transition_in: ar,
  transition_out: tn
} = window.__gradio__svelte__internal, { createEventDispatcher: i_ } = window.__gradio__svelte__internal;
function Sh(n) {
  let e, t, r;
  return t = new fm({
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
      e = pm("div"), fs(t.$$.fragment), this.h();
    },
    l(a) {
      e = mm(a, "DIV", { class: !0 });
      var i = dm(e);
      cs(t.$$.fragment, i), i.forEach(en), this.h();
    },
    h() {
      hm(e, "class", "audio-container svelte-js69uk");
    },
    m(a, i) {
      ra(a, e, i), ds(t, e, null), r = !0;
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
      r || (ar(t.$$.fragment, a), r = !0);
    },
    o(a) {
      tn(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && en(e), hs(t);
    }
  };
}
function xh(n) {
  let e, t;
  return e = new tm({
    props: {
      size: "small",
      $$slots: { default: [l_] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      fs(e.$$.fragment);
    },
    l(r) {
      cs(e.$$.fragment, r);
    },
    m(r, a) {
      ds(e, r, a), t = !0;
    },
    i(r) {
      t || (ar(e.$$.fragment, r), t = !0);
    },
    o(r) {
      tn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      hs(e, r);
    }
  };
}
function l_(n) {
  let e, t;
  return e = new wu({}), {
    c() {
      fs(e.$$.fragment);
    },
    l(r) {
      cs(e.$$.fragment, r);
    },
    m(r, a) {
      ds(e, r, a), t = !0;
    },
    i(r) {
      t || (ar(e.$$.fragment, r), t = !0);
    },
    o(r) {
      tn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      hs(e, r);
    }
  };
}
function s_(n) {
  let e, t, r, a, i, l, s, o, u;
  e = new ls({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: wu,
      float: !1,
      label: (
        /*label*/
        n[1] || /*i18n*/
        n[3]("audio.audio")
      )
    }
  });
  let c = (
    /*value*/
    n[0] !== "__webrtc_value__" && Sh(n)
  ), d = (
    /*value*/
    n[0] === "__webrtc_value__" && xh(n)
  );
  return {
    c() {
      fs(e.$$.fragment), t = Co(), r = pm("audio"), a = Co(), c && c.c(), i = Co(), d && d.c(), l = Ah(), this.h();
    },
    l(f) {
      cs(e.$$.fragment, f), t = To(f), r = mm(f, "AUDIO", { class: !0 }), dm(r).forEach(en), a = To(f), c && c.l(f), i = To(f), d && d.l(f), l = Ah(), this.h();
    },
    h() {
      hm(r, "class", "standard-player svelte-js69uk"), a_(r, "hidden", !0);
    },
    m(f, p) {
      ds(e, f, p), ra(f, t, p), ra(f, r, p), n[15](r), ra(f, a, p), c && c.m(f, p), ra(f, i, p), d && d.m(f, p), ra(f, l, p), s = !0, o || (u = [
        Fo(
          r,
          "load",
          /*load_handler*/
          n[14]
        ),
        Fo(
          r,
          "ended",
          /*ended_handler*/
          n[16]
        ),
        Fo(
          r,
          "play",
          /*play_handler*/
          n[17]
        )
      ], o = !0);
    },
    p(f, [p]) {
      const g = {};
      p & /*show_label*/
      4 && (g.show_label = /*show_label*/
      f[2]), p & /*label, i18n*/
      10 && (g.label = /*label*/
      f[1] || /*i18n*/
      f[3]("audio.audio")), e.$set(g), /*value*/
      f[0] !== "__webrtc_value__" ? c ? (c.p(f, p), p & /*value*/
      1 && ar(c, 1)) : (c = Sh(f), c.c(), ar(c, 1), c.m(i.parentNode, i)) : c && (Eh(), tn(c, 1, 1, () => {
        c = null;
      }), Dh()), /*value*/
      f[0] === "__webrtc_value__" ? d ? p & /*value*/
      1 && ar(d, 1) : (d = xh(f), d.c(), ar(d, 1), d.m(l.parentNode, l)) : d && (Eh(), tn(d, 1, 1, () => {
        d = null;
      }), Dh());
    },
    i(f) {
      s || (ar(e.$$.fragment, f), ar(c), ar(d), s = !0);
    },
    o(f) {
      tn(e.$$.fragment, f), tn(c), tn(d), s = !1;
    },
    d(f) {
      f && (en(t), en(r), en(a), en(i), en(l)), hs(e, f), n[15](null), c && c.d(f), d && d.d(f), o = !1, r_(u);
    }
  };
}
function o_(n, e, t) {
  var r = this && this.__awaiter || function(I, P, $, O) {
    function K(q) {
      return q instanceof $ ? q : new $(function(he) {
        he(q);
      });
    }
    return new ($ || ($ = Promise))(function(q, he) {
      function ee(re) {
        try {
          de(O.next(re));
        } catch (oe) {
          he(oe);
        }
      }
      function _e(re) {
        try {
          de(O.throw(re));
        } catch (oe) {
          he(oe);
        }
      }
      function de(re) {
        re.done ? q(re.value) : K(re.value).then(ee, _e);
      }
      de((O = O.apply(I, P || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { i18n: o } = e, { on_change_cb: u } = e, { icon: c = void 0 } = e, { icon_button_color: d = "var(--color-accent)" } = e, { pulse_color: f = "var(--color-accent)" } = e, { icon_radius: p = 50 } = e, { server: g } = e, b = "closed", A, w, k = Math.random().toString(36).substring(2), y = (I) => {
    I.type === "end_stream" ? (u(I), t(8, b = "closed"), l0(w)) : (console.debug("calling on_change_cb with msg", I), u(I));
  };
  const D = i_();
  function E(I) {
    return r(this, void 0, void 0, function* () {
      if (I === "start_webrtc_stream") {
        t(8, b = "waiting"), k = Math.random().toString(36).substring(2), I = k, w = new RTCPeerConnection(s), w.addEventListener("connectionstatechange", (O) => r(this, void 0, void 0, function* () {
          switch (w.connectionState) {
            case "connected":
              console.info("connected"), t(8, b = "open"), D("tick");
              break;
            case "disconnected":
              console.info("closed"), l0(w);
              break;
            case "failed":
              t(8, b = "closed"), D("error", "Connection failed!"), l0(w);
              break;
          }
        }));
        let P = null;
        const $ = setTimeout(
          () => {
            u({ type: "connection_timeout" });
          },
          1e4
        );
        us(P, w, A, g.offer, k, "audio", y).then((O) => {
          clearTimeout($), w = O;
        }).catch(() => {
          clearTimeout($), console.info("catching"), D("error", "Too many concurrent users. Come back later!");
        });
      }
      return I;
    });
  }
  function T(I) {
    e_.call(this, n, I);
  }
  function F(I) {
    $9[I ? "unshift" : "push"](() => {
      A = I, t(9, A);
    });
  }
  const C = () => D("stop"), B = () => D("play"), L = () => A.srcObject;
  return n.$$set = (I) => {
    "value" in I && t(0, a = I.value), "label" in I && t(1, i = I.label), "show_label" in I && t(2, l = I.show_label), "rtc_configuration" in I && t(11, s = I.rtc_configuration), "i18n" in I && t(3, o = I.i18n), "on_change_cb" in I && t(12, u = I.on_change_cb), "icon" in I && t(4, c = I.icon), "icon_button_color" in I && t(5, d = I.icon_button_color), "pulse_color" in I && t(6, f = I.pulse_color), "icon_radius" in I && t(7, p = I.icon_radius), "server" in I && t(13, g = I.server);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && E(a).then((I) => {
      t(0, a = I);
    });
  }, [
    a,
    i,
    l,
    o,
    c,
    d,
    f,
    p,
    b,
    A,
    D,
    s,
    u,
    g,
    T,
    F,
    C,
    B,
    L
  ];
}
class u_ extends Q9 {
  constructor(e) {
    super(), t_(this, e, o_, s_, n_, {
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
  SvelteComponent: c_,
  append_hydration: La,
  attr: Xe,
  children: Jn,
  claim_svg_element: Qn,
  detach: En,
  init: f_,
  insert_hydration: h_,
  noop: Mo,
  safe_not_equal: d_,
  svg_element: $n
} = window.__gradio__svelte__internal;
function m_(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = $n("svg"), t = $n("path"), r = $n("path"), a = $n("line"), i = $n("line"), l = $n("line"), this.h();
    },
    l(s) {
      e = Qn(s, "svg", {
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
      var o = Jn(e);
      t = Qn(o, "path", { d: !0 }), Jn(t).forEach(En), r = Qn(o, "path", { d: !0 }), Jn(r).forEach(En), a = Qn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Jn(a).forEach(En), i = Qn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Jn(i).forEach(En), l = Qn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Jn(l).forEach(En), o.forEach(En), this.h();
    },
    h() {
      Xe(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Xe(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Xe(a, "x1", "12"), Xe(a, "y1", "19"), Xe(a, "x2", "12"), Xe(a, "y2", "23"), Xe(i, "x1", "8"), Xe(i, "y1", "23"), Xe(i, "x2", "16"), Xe(i, "y2", "23"), Xe(l, "x1", "1"), Xe(l, "y1", "1"), Xe(l, "x2", "23"), Xe(l, "y2", "23"), Xe(e, "xmlns", "http://www.w3.org/2000/svg"), Xe(e, "width", "100%"), Xe(e, "height", "100%"), Xe(e, "viewBox", "0 0 24 24"), Xe(e, "fill", "none"), Xe(e, "stroke", "currentColor"), Xe(e, "stroke-width", "2"), Xe(e, "stroke-linecap", "round"), Xe(e, "stroke-linejoin", "round"), Xe(e, "class", "feather feather-mic");
    },
    m(s, o) {
      h_(s, e, o), La(e, t), La(e, r), La(e, a), La(e, i), La(e, l);
    },
    p: Mo,
    i: Mo,
    o: Mo,
    d(s) {
      s && En(e);
    }
  };
}
class gu extends c_ {
  constructor(e) {
    super(), f_(this, e, null, m_, d_, {});
  }
}
const p_ = '<svg class="md-link-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>', g_ = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" color="currentColor" aria-hidden="true" aria-label="Copy" stroke-width="1.3" width="15" height="15">
  <path fill="currentColor" d="M12.728 4.545v8.182H4.545V4.545zm0 -0.909H4.545a0.909 0.909 0 0 0 -0.909 0.909v8.182a0.909 0.909 0 0 0 0.909 0.909h8.182a0.909 0.909 0 0 0 0.909 -0.909V4.545a0.909 0.909 0 0 0 -0.909 -0.909"/>
  <path fill="currentColor" d="M1.818 8.182H0.909V1.818a0.909 0.909 0 0 1 0.909 -0.909h6.364v0.909H1.818Z"/>
</svg>

`, __ = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" aria-label="Copied" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="m13.813 4.781 -7.438 7.438 -3.188 -3.188"/>
</svg>
`, Th = `<button title="copy" class="copy_code_button">
  <span class="copy-text">${g_}</span>
  <span class="check">${__}</span>
</button>`, gm = /[&<>"']/, v_ = new RegExp(gm.source, "g"), _m = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, b_ = new RegExp(_m.source, "g"), w_ = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Fh = (n) => w_[n] || "";
function zo(n, e) {
  if (e) {
    if (gm.test(n))
      return n.replace(v_, Fh);
  } else if (_m.test(n))
    return n.replace(b_, Fh);
  return n;
}
function y_(n) {
  const e = n.map((t) => ({
    start: new RegExp(t.left.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
    end: new RegExp(t.right.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
  }));
  return {
    name: "latex",
    level: "block",
    start(t) {
      for (const r of e) {
        const a = t.match(r.start);
        if (a)
          return a.index;
      }
      return -1;
    },
    tokenizer(t, r) {
      for (const a of e) {
        const i = new RegExp(
          `${a.start.source}([\\s\\S]+?)${a.end.source}`
        ).exec(t);
        if (i)
          return {
            type: "latex",
            raw: i[0],
            text: i[1].trim()
          };
      }
    },
    renderer(t) {
      return `<div class="latex-block">${t.text}</div>`;
    }
  };
}
function k_() {
  return {
    name: "mermaid",
    level: "block",
    start(n) {
      var e;
      return (e = n.match(/^```mermaid\s*\n/)) == null ? void 0 : e.index;
    },
    tokenizer(n) {
      const e = /^```mermaid\s*\n([\s\S]*?)```\s*(?:\n|$)/.exec(n);
      if (e)
        return {
          type: "mermaid",
          raw: e[0],
          text: e[1].trim()
        };
    },
    renderer(n) {
      return `<div class="mermaid">${n.text}</div>
`;
    }
  };
}
const D_ = {
  code(n, e, t) {
    var a;
    const r = ((a = (e ?? "").match(/\S*/)) == null ? void 0 : a[0]) ?? "";
    return n = n.replace(/\n$/, "") + `
`, !r || r === "mermaid" ? '<div class="code_wrap">' + Th + "<pre><code>" + (t ? n : zo(n, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + Th + '<pre><code class="language-' + zo(r) + '">' + (t ? n : zo(n, !0)) + `</code></pre></div>
`;
  }
}, A_ = new is();
function E_({
  header_links: n,
  line_breaks: e,
  latex_delimiters: t
}) {
  const r = new b4();
  r.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: e
    },
    Z6({
      highlight: (l, s) => {
        var o;
        return (o = ao.languages) != null && o[s] ? ao.highlight(l, ao.languages[s], s) : l;
      }
    }),
    { renderer: D_ }
  ), n && (r.use(r7()), r.use({
    extensions: [
      {
        name: "heading",
        level: "block",
        renderer(l) {
          const s = l.raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, ""), o = "h" + A_.slug(s), u = l.depth, c = this.parser.parseInline(l.tokens);
          return `<h${u} id="${o}"><a class="md-header-anchor" href="#${o}">${p_}</a>${c}</h${u}>
`;
        }
      }
    ]
  }));
  const a = k_(), i = y_(t);
  return r.use({
    extensions: [a, i]
  }), r;
}
const Ch = [
  "!--",
  "!doctype",
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
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
  "data",
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
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
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
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "meta",
  "meter",
  "nav",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], S_ = [
  // Base structural elements
  "g",
  "defs",
  "use",
  "symbol",
  // Shape elements
  "rect",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",
  "path",
  "image",
  // Text elements
  "text",
  "tspan",
  "textPath",
  // Gradient and effects
  "linearGradient",
  "radialGradient",
  "stop",
  "pattern",
  "clipPath",
  "mask",
  "filter",
  // Filter effects
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feGaussianBlur",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTurbulence",
  "feMergeNode",
  "feFuncR",
  "feFuncG",
  "feFuncB",
  "feFuncA",
  "feDistantLight",
  "fePointLight",
  "feSpotLight",
  "feFlood",
  "feTile",
  // Animation elements
  "animate",
  "animateTransform",
  "animateMotion",
  "mpath",
  "set",
  // Interactive and other elements
  "view",
  "cursor",
  "foreignObject",
  "desc",
  "title",
  "metadata",
  "switch"
], x_ = [
  ...Ch,
  ...S_.filter((n) => !Ch.includes(n))
], {
  HtmlTagHydration: T_,
  SvelteComponent: F_,
  attr: C_,
  binding_callbacks: M_,
  children: z_,
  claim_element: B_,
  claim_html_tag: I_,
  detach: Mh,
  element: L_,
  init: N_,
  insert_hydration: R_,
  noop: zh,
  safe_not_equal: O_,
  toggle_class: il
} = window.__gradio__svelte__internal, { afterUpdate: q_, tick: P_ } = window.__gradio__svelte__internal;
function H_(n) {
  let e, t;
  return {
    c() {
      e = L_("span"), t = new T_(!1), this.h();
    },
    l(r) {
      e = B_(r, "SPAN", { class: !0 });
      var a = z_(e);
      t = I_(a, !1), a.forEach(Mh), this.h();
    },
    h() {
      t.a = null, C_(e, "class", "md svelte-1m32c2s"), il(
        e,
        "chatbot",
        /*chatbot*/
        n[0]
      ), il(
        e,
        "prose",
        /*render_markdown*/
        n[1]
      );
    },
    m(r, a) {
      R_(r, e, a), t.m(
        /*html*/
        n[3],
        e
      ), n[12](e);
    },
    p(r, [a]) {
      a & /*html*/
      8 && t.p(
        /*html*/
        r[3]
      ), a & /*chatbot*/
      1 && il(
        e,
        "chatbot",
        /*chatbot*/
        r[0]
      ), a & /*render_markdown*/
      2 && il(
        e,
        "prose",
        /*render_markdown*/
        r[1]
      );
    },
    i: zh,
    o: zh,
    d(r) {
      r && Mh(e), n[12](null);
    }
  };
}
function Bh(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function U_(n, e, t) {
  var r = this && this.__awaiter || function(E, T, F, C) {
    function B(L) {
      return L instanceof F ? L : new F(function(I) {
        I(L);
      });
    }
    return new (F || (F = Promise))(function(L, I) {
      function P(K) {
        try {
          O(C.next(K));
        } catch (q) {
          I(q);
        }
      }
      function $(K) {
        try {
          O(C.throw(K));
        } catch (q) {
          I(q);
        }
      }
      function O(K) {
        K.done ? L(K.value) : B(K.value).then(P, $);
      }
      O((C = C.apply(E, T || [])).next());
    });
  };
  let { chatbot: a = !0 } = e, { message: i } = e, { sanitize_html: l = !0 } = e, { latex_delimiters: s = [] } = e, { render_markdown: o = !0 } = e, { line_breaks: u = !0 } = e, { header_links: c = !1 } = e, { root: d } = e, { allow_tags: f = !1 } = e, { theme_mode: p = "system" } = e, g, b;
  const A = E_({
    header_links: c,
    line_breaks: u,
    latex_delimiters: s || []
  });
  function w(E, T) {
    if (T === !0) {
      const F = /<\/?([a-zA-Z][a-zA-Z0-9-]*)([\s>])/g;
      return E.replace(F, (C, B, L) => x_.includes(B.toLowerCase()) ? C : C.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    }
    if (Array.isArray(T)) {
      const F = T.map((B) => ({
        open: new RegExp(`<(${B})(\\s+[^>]*)?>`, "gi"),
        close: new RegExp(`</(${B})>`, "gi")
      }));
      let C = E;
      return F.forEach((B) => {
        C = C.replace(B.open, (L) => L.replace(/</g, "&lt;").replace(/>/g, "&gt;")), C = C.replace(B.close, (L) => L.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      }), C;
    }
    return E;
  }
  function k(E) {
    let T = E;
    if (o) {
      const F = [];
      s.forEach((C, B) => {
        const L = Bh(C.left), I = Bh(C.right), P = new RegExp(`${L}([\\s\\S]+?)${I}`, "g");
        T = T.replace(P, ($, O) => (F.push($), `%%%LATEX_BLOCK_${F.length - 1}%%%`));
      }), T = A.parse(T), T = T.replace(/%%%LATEX_BLOCK_(\d+)%%%/g, (C, B) => F[parseInt(B, 10)]);
    }
    return f && (T = w(T, f)), l && Fc && (T = Fc(T, d)), T;
  }
  function y(E) {
    return r(this, void 0, void 0, function* () {
      if (s.length > 0 && E && s.some((F) => E.includes(F.left) && E.includes(F.right)) && m6(g, {
        delimiters: s,
        throwOnError: !1
      }), g) {
        const T = g.querySelectorAll(".mermaid");
        if (T.length > 0) {
          yield P_();
          const { default: F } = yield import("./mermaid.core-ClIgmj79.js").then((C) => C.by);
          F.initialize({
            startOnLoad: !1,
            theme: p === "dark" ? "dark" : "default",
            securityLevel: "antiscript"
          }), yield F.run({
            nodes: Array.from(T).map((C) => C)
          });
        }
      }
    });
  }
  q_(() => r(void 0, void 0, void 0, function* () {
    g && document.body.contains(g) ? yield y(i) : console.error("Element is not in the DOM");
  }));
  function D(E) {
    M_[E ? "unshift" : "push"](() => {
      g = E, t(2, g);
    });
  }
  return n.$$set = (E) => {
    "chatbot" in E && t(0, a = E.chatbot), "message" in E && t(4, i = E.message), "sanitize_html" in E && t(5, l = E.sanitize_html), "latex_delimiters" in E && t(6, s = E.latex_delimiters), "render_markdown" in E && t(1, o = E.render_markdown), "line_breaks" in E && t(7, u = E.line_breaks), "header_links" in E && t(8, c = E.header_links), "root" in E && t(9, d = E.root), "allow_tags" in E && t(10, f = E.allow_tags), "theme_mode" in E && t(11, p = E.theme_mode);
  }, n.$$.update = () => {
    n.$$.dirty & /*message*/
    16 && (i && i.trim() ? t(3, b = k(i)) : t(3, b = ""));
  }, [
    a,
    o,
    g,
    b,
    i,
    l,
    s,
    u,
    c,
    d,
    f,
    p,
    D
  ];
}
class G_ extends F_ {
  constructor(e) {
    super(), N_(this, e, U_, H_, O_, {
      chatbot: 0,
      message: 4,
      sanitize_html: 5,
      latex_delimiters: 6,
      render_markdown: 1,
      line_breaks: 7,
      header_links: 8,
      root: 9,
      allow_tags: 10,
      theme_mode: 11
    });
  }
}
const {
  SvelteComponent: V_,
  attr: j_,
  children: W_,
  claim_component: X_,
  claim_element: Y_,
  create_component: Z_,
  destroy_component: K_,
  detach: Ih,
  element: J_,
  init: Q_,
  insert_hydration: $_,
  mount_component: ev,
  safe_not_equal: tv,
  transition_in: rv,
  transition_out: nv
} = window.__gradio__svelte__internal;
function av(n) {
  let e, t, r;
  return t = new G_({
    props: {
      root: (
        /*root*/
        n[1]
      ),
      message: (
        /*info*/
        n[0]
      ),
      sanitize_html: !0
    }
  }), {
    c() {
      e = J_("div"), Z_(t.$$.fragment), this.h();
    },
    l(a) {
      e = Y_(a, "DIV", { class: !0 });
      var i = W_(e);
      X_(t.$$.fragment, i), i.forEach(Ih), this.h();
    },
    h() {
      j_(e, "class", "svelte-17qq50w");
    },
    m(a, i) {
      $_(a, e, i), ev(t, e, null), r = !0;
    },
    p(a, [i]) {
      const l = {};
      i & /*root*/
      2 && (l.root = /*root*/
      a[1]), i & /*info*/
      1 && (l.message = /*info*/
      a[0]), t.$set(l);
    },
    i(a) {
      r || (rv(t.$$.fragment, a), r = !0);
    },
    o(a) {
      nv(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Ih(e), K_(t);
    }
  };
}
function iv(n, e, t) {
  let { info: r } = e, { root: a } = e;
  return n.$$set = (i) => {
    "info" in i && t(0, r = i.info), "root" in i && t(1, a = i.root);
  }, [r, a];
}
class lv extends V_ {
  constructor(e) {
    super(), Q_(this, e, iv, av, tv, { info: 0, root: 1 });
  }
}
const {
  SvelteComponent: sv,
  attr: ll,
  check_outros: ov,
  children: uv,
  claim_component: cv,
  claim_element: fv,
  claim_space: hv,
  create_component: dv,
  create_slot: mv,
  destroy_component: pv,
  detach: sl,
  element: gv,
  empty: Lh,
  get_all_dirty_from_scope: _v,
  get_slot_changes: vv,
  group_outros: bv,
  init: wv,
  insert_hydration: Bo,
  mount_component: yv,
  safe_not_equal: kv,
  space: Dv,
  toggle_class: ea,
  transition_in: Ha,
  transition_out: Dl,
  update_slot_base: Av
} = window.__gradio__svelte__internal;
function Nh(n) {
  let e, t;
  return e = new lv({
    props: {
      root: (
        /*root*/
        n[2]
      ),
      info: (
        /*info*/
        n[1]
      )
    }
  }), {
    c() {
      dv(e.$$.fragment);
    },
    l(r) {
      cv(e.$$.fragment, r);
    },
    m(r, a) {
      yv(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a & /*root*/
      4 && (i.root = /*root*/
      r[2]), a & /*info*/
      2 && (i.info = /*info*/
      r[1]), e.$set(i);
    },
    i(r) {
      t || (Ha(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Dl(e.$$.fragment, r), t = !1;
    },
    d(r) {
      pv(e, r);
    }
  };
}
function Ev(n) {
  let e, t, r, a, i;
  const l = (
    /*#slots*/
    n[5].default
  ), s = mv(
    l,
    n,
    /*$$scope*/
    n[4],
    null
  );
  let o = (
    /*info*/
    n[1] && Nh(n)
  );
  return {
    c() {
      e = gv("span"), s && s.c(), r = Dv(), o && o.c(), a = Lh(), this.h();
    },
    l(u) {
      e = fv(u, "SPAN", {
        "data-testid": !0,
        dir: !0,
        class: !0
      });
      var c = uv(e);
      s && s.l(c), c.forEach(sl), r = hv(u), o && o.l(u), a = Lh(), this.h();
    },
    h() {
      ll(e, "data-testid", "block-info"), ll(e, "dir", t = /*rtl*/
      n[3] ? "rtl" : "ltr"), ll(e, "class", "svelte-zgrq3"), ea(e, "sr-only", !/*show_label*/
      n[0]), ea(e, "hide", !/*show_label*/
      n[0]), ea(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(u, c) {
      Bo(u, e, c), s && s.m(e, null), Bo(u, r, c), o && o.m(u, c), Bo(u, a, c), i = !0;
    },
    p(u, [c]) {
      s && s.p && (!i || c & /*$$scope*/
      16) && Av(
        s,
        l,
        u,
        /*$$scope*/
        u[4],
        i ? vv(
          l,
          /*$$scope*/
          u[4],
          c,
          null
        ) : _v(
          /*$$scope*/
          u[4]
        ),
        null
      ), (!i || c & /*rtl*/
      8 && t !== (t = /*rtl*/
      u[3] ? "rtl" : "ltr")) && ll(e, "dir", t), (!i || c & /*show_label*/
      1) && ea(e, "sr-only", !/*show_label*/
      u[0]), (!i || c & /*show_label*/
      1) && ea(e, "hide", !/*show_label*/
      u[0]), (!i || c & /*info*/
      2) && ea(
        e,
        "has-info",
        /*info*/
        u[1] != null
      ), /*info*/
      u[1] ? o ? (o.p(u, c), c & /*info*/
      2 && Ha(o, 1)) : (o = Nh(u), o.c(), Ha(o, 1), o.m(a.parentNode, a)) : o && (bv(), Dl(o, 1, 1, () => {
        o = null;
      }), ov());
    },
    i(u) {
      i || (Ha(s, u), Ha(o), i = !0);
    },
    o(u) {
      Dl(s, u), Dl(o), i = !1;
    },
    d(u) {
      u && (sl(e), sl(r), sl(a)), s && s.d(u), o && o.d(u);
    }
  };
}
function Sv(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { show_label: i = !0 } = e, { info: l = void 0 } = e, { root: s } = e, { rtl: o = !1 } = e;
  return n.$$set = (u) => {
    "show_label" in u && t(0, i = u.show_label), "info" in u && t(1, l = u.info), "root" in u && t(2, s = u.root), "rtl" in u && t(3, o = u.rtl), "$$scope" in u && t(4, a = u.$$scope);
  }, [i, l, s, o, a, r];
}
class xv extends sv {
  constructor(e) {
    super(), wv(this, e, Sv, Ev, kv, { show_label: 0, info: 1, root: 2, rtl: 3 });
  }
}
const {
  SvelteComponent: Tv,
  append_hydration: Fv,
  attr: D0,
  children: Rh,
  claim_svg_element: Oh,
  detach: Io,
  init: Cv,
  insert_hydration: Mv,
  noop: Lo,
  safe_not_equal: zv,
  svg_element: qh
} = window.__gradio__svelte__internal;
function Bv(n) {
  let e, t;
  return {
    c() {
      e = qh("svg"), t = qh("path"), this.h();
    },
    l(r) {
      e = Oh(r, "svg", {
        width: !0,
        height: !0,
        "stroke-width": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        color: !0
      });
      var a = Rh(e);
      t = Oh(a, "path", {
        d: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Rh(t).forEach(Io), a.forEach(Io), this.h();
    },
    h() {
      D0(t, "d", "M5 13L9 17L19 7"), D0(t, "stroke", "currentColor"), D0(t, "stroke-width", "1.5"), D0(t, "stroke-linecap", "round"), D0(t, "stroke-linejoin", "round"), D0(e, "width", "100%"), D0(e, "height", "100%"), D0(e, "stroke-width", "1.5"), D0(e, "viewBox", "0 0 24 24"), D0(e, "fill", "none"), D0(e, "xmlns", "http://www.w3.org/2000/svg"), D0(e, "color", "currentColor");
    },
    m(r, a) {
      Mv(r, e, a), Fv(e, t);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(r) {
      r && Io(e);
    }
  };
}
class Iv extends Tv {
  constructor(e) {
    super(), Cv(this, e, null, Bv, zv, {});
  }
}
const {
  SvelteComponent: Lv,
  append_hydration: Ph,
  attr: nr,
  children: No,
  claim_svg_element: Ro,
  detach: ol,
  init: Nv,
  insert_hydration: Rv,
  noop: Oo,
  safe_not_equal: Ov,
  svg_element: qo
} = window.__gradio__svelte__internal;
function qv(n) {
  let e, t, r;
  return {
    c() {
      e = qo("svg"), t = qo("path"), r = qo("path"), this.h();
    },
    l(a) {
      e = Ro(a, "svg", {
        xmlns: !0,
        viewBox: !0,
        color: !0,
        "aria-hidden": !0,
        width: !0,
        height: !0
      });
      var i = No(e);
      t = Ro(i, "path", { fill: !0, d: !0 }), No(t).forEach(ol), r = Ro(i, "path", { fill: !0, d: !0 }), No(r).forEach(ol), i.forEach(ol), this.h();
    },
    h() {
      nr(t, "fill", "currentColor"), nr(t, "d", "M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"), nr(r, "fill", "currentColor"), nr(r, "d", "M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"), nr(e, "xmlns", "http://www.w3.org/2000/svg"), nr(e, "viewBox", "0 0 33 33"), nr(e, "color", "currentColor"), nr(e, "aria-hidden", "true"), nr(e, "width", "100%"), nr(e, "height", "100%");
    },
    m(a, i) {
      Rv(a, e, i), Ph(e, t), Ph(e, r);
    },
    p: Oo,
    i: Oo,
    o: Oo,
    d(a) {
      a && ol(e);
    }
  };
}
class Pv extends Lv {
  constructor(e) {
    super(), Nv(this, e, null, qv, Ov, {});
  }
}
const {
  SvelteComponent: Hv,
  append_hydration: ul,
  attr: h0,
  children: Na,
  claim_svg_element: Ra,
  detach: ta,
  init: Uv,
  insert_hydration: Gv,
  noop: Po,
  safe_not_equal: Vv,
  svg_element: Oa
} = window.__gradio__svelte__internal;
function jv(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = Oa("svg"), t = Oa("g"), r = Oa("g"), a = Oa("g"), i = Oa("path"), this.h();
    },
    l(l) {
      e = Ra(l, "svg", {
        viewBox: !0,
        width: !0,
        height: !0,
        fill: !0,
        xmlns: !0
      });
      var s = Na(e);
      t = Ra(s, "g", { id: !0, "stroke-width": !0 }), Na(t).forEach(ta), r = Ra(s, "g", {
        id: !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Na(r).forEach(ta), a = Ra(s, "g", { id: !0 });
      var o = Na(a);
      i = Ra(o, "path", { d: !0, fill: !0 }), Na(i).forEach(ta), o.forEach(ta), s.forEach(ta), this.h();
    },
    h() {
      h0(t, "id", "SVGRepo_bgCarrier"), h0(t, "stroke-width", "0"), h0(r, "id", "SVGRepo_tracerCarrier"), h0(r, "stroke-linecap", "round"), h0(r, "stroke-linejoin", "round"), h0(i, "d", "M19.1168 12.1484C19.474 12.3581 19.9336 12.2384 20.1432 11.8811C20.3528 11.5238 20.2331 11.0643 19.8758 10.8547L19.1168 12.1484ZM6.94331 4.13656L6.55624 4.77902L6.56378 4.78344L6.94331 4.13656ZM5.92408 4.1598L5.50816 3.5357L5.50816 3.5357L5.92408 4.1598ZM5.51031 5.09156L4.76841 5.20151C4.77575 5.25101 4.78802 5.29965 4.80505 5.34671L5.51031 5.09156ZM7.12405 11.7567C7.26496 12.1462 7.69495 12.3477 8.08446 12.2068C8.47397 12.0659 8.67549 11.6359 8.53458 11.2464L7.12405 11.7567ZM19.8758 12.1484C20.2331 11.9388 20.3528 11.4793 20.1432 11.122C19.9336 10.7648 19.474 10.6451 19.1168 10.8547L19.8758 12.1484ZM6.94331 18.8666L6.56375 18.2196L6.55627 18.2241L6.94331 18.8666ZM5.92408 18.8433L5.50815 19.4674H5.50815L5.92408 18.8433ZM5.51031 17.9116L4.80505 17.6564C4.78802 17.7035 4.77575 17.7521 4.76841 17.8016L5.51031 17.9116ZM8.53458 11.7567C8.67549 11.3672 8.47397 10.9372 8.08446 10.7963C7.69495 10.6554 7.26496 10.8569 7.12405 11.2464L8.53458 11.7567ZM19.4963 12.2516C19.9105 12.2516 20.2463 11.9158 20.2463 11.5016C20.2463 11.0873 19.9105 10.7516 19.4963 10.7516V12.2516ZM7.82931 10.7516C7.4151 10.7516 7.07931 11.0873 7.07931 11.5016C7.07931 11.9158 7.4151 12.2516 7.82931 12.2516V10.7516ZM19.8758 10.8547L7.32284 3.48968L6.56378 4.78344L19.1168 12.1484L19.8758 10.8547ZM7.33035 3.49414C6.76609 3.15419 6.05633 3.17038 5.50816 3.5357L6.34 4.78391C6.40506 4.74055 6.4893 4.73863 6.55627 4.77898L7.33035 3.49414ZM5.50816 3.5357C4.95998 3.90102 4.67184 4.54987 4.76841 5.20151L6.25221 4.98161C6.24075 4.90427 6.27494 4.82727 6.34 4.78391L5.50816 3.5357ZM4.80505 5.34671L7.12405 11.7567L8.53458 11.2464L6.21558 4.83641L4.80505 5.34671ZM19.1168 10.8547L6.56378 18.2197L7.32284 19.5134L19.8758 12.1484L19.1168 10.8547ZM6.55627 18.2241C6.4893 18.2645 6.40506 18.2626 6.34 18.2192L5.50815 19.4674C6.05633 19.8327 6.76609 19.8489 7.33035 19.509L6.55627 18.2241ZM6.34 18.2192C6.27494 18.1759 6.24075 18.0988 6.25221 18.0215L4.76841 17.8016C4.67184 18.4532 4.95998 19.1021 5.50815 19.4674L6.34 18.2192ZM6.21558 18.1667L8.53458 11.7567L7.12405 11.2464L4.80505 17.6564L6.21558 18.1667ZM19.4963 10.7516H7.82931V12.2516H19.4963V10.7516Z"), h0(i, "fill", "currentColor"), h0(a, "id", "SVGRepo_iconCarrier"), h0(e, "viewBox", "0 0 22 24"), h0(e, "width", "100%"), h0(e, "height", "100%"), h0(e, "fill", "none"), h0(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, s) {
      Gv(l, e, s), ul(e, t), ul(e, r), ul(e, a), ul(a, i);
    },
    p: Po,
    i: Po,
    o: Po,
    d(l) {
      l && ta(e);
    }
  };
}
class Wv extends Hv {
  constructor(e) {
    super(), Uv(this, e, null, jv, Vv, {});
  }
}
const {
  SvelteComponent: Xv,
  append_hydration: Yv,
  attr: zt,
  children: Hh,
  claim_svg_element: Uh,
  detach: Ho,
  init: Zv,
  insert_hydration: Kv,
  noop: Gh,
  safe_not_equal: Jv,
  svg_element: Vh
} = window.__gradio__svelte__internal;
function Qv(n) {
  let e, t, r;
  return {
    c() {
      e = Vh("svg"), t = Vh("rect"), this.h();
    },
    l(a) {
      e = Uh(a, "svg", {
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
      var i = Hh(e);
      t = Uh(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Hh(t).forEach(Ho), i.forEach(Ho), this.h();
    },
    h() {
      zt(t, "x", "3"), zt(t, "y", "3"), zt(t, "width", "18"), zt(t, "height", "18"), zt(t, "rx", "2"), zt(t, "ry", "2"), zt(e, "xmlns", "http://www.w3.org/2000/svg"), zt(e, "width", "100%"), zt(e, "height", "100%"), zt(e, "viewBox", "0 0 24 24"), zt(
        e,
        "fill",
        /*fill*/
        n[0]
      ), zt(e, "stroke", "currentColor"), zt(e, "stroke-width", r = `${/*stroke_width*/
      n[1]}`), zt(e, "stroke-linecap", "round"), zt(e, "stroke-linejoin", "round"), zt(e, "class", "feather feather-square");
    },
    m(a, i) {
      Kv(a, e, i), Yv(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && zt(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && r !== (r = `${/*stroke_width*/
      a[1]}`) && zt(e, "stroke-width", r);
    },
    i: Gh,
    o: Gh,
    d(a) {
      a && Ho(e);
    }
  };
}
function $v(n, e, t) {
  let { fill: r = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return n.$$set = (i) => {
    "fill" in i && t(0, r = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [r, a];
}
class eb extends Xv {
  constructor(e) {
    super(), Zv(this, e, $v, Qv, Jv, { fill: 0, stroke_width: 1 });
  }
}
const tb = [
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
], jh = {
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
tb.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: jh[e][t],
      secondary: jh[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: rb,
  action_destroyer: nb,
  add_render_callback: ab,
  append_hydration: qa,
  attr: ce,
  binding_callbacks: cl,
  bubble: Qr,
  check_outros: ua,
  children: In,
  claim_component: mi,
  claim_element: gr,
  claim_space: fl,
  claim_text: r1,
  create_component: pi,
  create_in_transition: ib,
  destroy_component: gi,
  detach: ut,
  element: _r,
  empty: Zl,
  group_outros: ca,
  init: lb,
  insert_hydration: u0,
  is_function: sb,
  listen: Ze,
  mount_component: _i,
  noop: dn,
  run_all: ms,
  safe_not_equal: ob,
  set_data: n1,
  set_input_value: mn,
  space: hl,
  text: a1,
  toggle_class: zr,
  transition_in: ft,
  transition_out: Ot
} = window.__gradio__svelte__internal, { beforeUpdate: ub, afterUpdate: cb, createEventDispatcher: fb, tick: Wh } = window.__gradio__svelte__internal;
function Xh(n) {
  let e, t, r, a;
  const i = [db, hb], l = [];
  function s(o, u) {
    return (
      /*copied*/
      o[19] ? 0 : 1
    );
  }
  return e = s(n), t = l[e] = i[e](n), {
    c() {
      t.c(), r = Zl();
    },
    l(o) {
      t.l(o), r = Zl();
    },
    m(o, u) {
      l[e].m(o, u), u0(o, r, u), a = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? l[e].p(o, u) : (ca(), Ot(l[c], 1, 1, () => {
        l[c] = null;
      }), ua(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), ft(t, 1), t.m(r.parentNode, r));
    },
    i(o) {
      a || (ft(t), a = !0);
    },
    o(o) {
      Ot(t), a = !1;
    },
    d(o) {
      o && ut(r), l[e].d(o);
    }
  };
}
function hb(n) {
  let e, t, r, a, i;
  return t = new Pv({}), {
    c() {
      e = _r("button"), pi(t.$$.fragment), this.h();
    },
    l(l) {
      e = gr(l, "BUTTON", {
        class: !0,
        "aria-label": !0,
        "aria-roledescription": !0
      });
      var s = In(e);
      mi(t.$$.fragment, s), s.forEach(ut), this.h();
    },
    h() {
      ce(e, "class", "copy-button svelte-bj4kw9"), ce(e, "aria-label", "Copy"), ce(e, "aria-roledescription", "Copy text");
    },
    m(l, s) {
      u0(l, e, s), _i(t, e, null), r = !0, a || (i = Ze(
        e,
        "click",
        /*handle_copy*/
        n[21]
      ), a = !0);
    },
    p: dn,
    i(l) {
      r || (ft(t.$$.fragment, l), r = !0);
    },
    o(l) {
      Ot(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && ut(e), gi(t), a = !1, i();
    }
  };
}
function db(n) {
  let e, t, r, a;
  return t = new Iv({}), {
    c() {
      e = _r("button"), pi(t.$$.fragment), this.h();
    },
    l(i) {
      e = gr(i, "BUTTON", {
        class: !0,
        "aria-label": !0,
        "aria-roledescription": !0
      });
      var l = In(e);
      mi(t.$$.fragment, l), l.forEach(ut), this.h();
    },
    h() {
      ce(e, "class", "copy-button svelte-bj4kw9"), ce(e, "aria-label", "Copied"), ce(e, "aria-roledescription", "Text copied");
    },
    m(i, l) {
      u0(i, e, l), _i(t, e, null), a = !0;
    },
    p: dn,
    i(i) {
      a || (ft(t.$$.fragment, i), i && (r || ab(() => {
        r = ib(e, N4, { duration: 300 }), r.start();
      })), a = !0);
    },
    o(i) {
      Ot(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && ut(e), gi(t);
    }
  };
}
function mb(n) {
  let e;
  return {
    c() {
      e = a1(
        /*label*/
        n[3]
      );
    },
    l(t) {
      e = r1(
        t,
        /*label*/
        n[3]
      );
    },
    m(t, r) {
      u0(t, e, r);
    },
    p(t, r) {
      r[0] & /*label*/
      8 && n1(
        e,
        /*label*/
        t[3]
      );
    },
    d(t) {
      t && ut(e);
    }
  };
}
function pb(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = _r("textarea"), this.h();
    },
    l(s) {
      e = gr(s, "TEXTAREA", {
        "data-testid": !0,
        class: !0,
        dir: !0,
        placeholder: !0,
        rows: !0,
        maxlength: !0,
        style: !0
      }), In(e).forEach(ut), this.h();
    },
    h() {
      ce(e, "data-testid", "textbox"), ce(e, "class", "scroll-hide svelte-bj4kw9"), ce(e, "dir", t = /*rtl*/
      n[12] ? "rtl" : "ltr"), ce(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), ce(
        e,
        "rows",
        /*lines*/
        n[1]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ce(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ce(e, "style", r = /*text_align*/
      n[14] ? "text-align: " + /*text_align*/
      n[14] : ""), zr(e, "no-label", !/*show_label*/
      n[6] && /*submit_btn*/
      (n[10] || /*stop_btn*/
      n[11]));
    },
    m(s, o) {
      u0(s, e, o), mn(
        e,
        /*value*/
        n[0]
      ), n[46](e), /*autofocus*/
      n[13] && e.focus(), i || (l = [
        nb(a = /*text_area_resize*/
        n[27].call(
          null,
          e,
          /*value*/
          n[0]
        )),
        Ze(
          e,
          "input",
          /*textarea_input_handler*/
          n[45]
        ),
        Ze(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ze(
          e,
          "blur",
          /*blur_handler_3*/
          n[37]
        ),
        Ze(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ze(
          e,
          "focus",
          /*focus_handler_3*/
          n[38]
        ),
        Ze(
          e,
          "scroll",
          /*handle_scroll*/
          n[24]
        )
      ], i = !0);
    },
    p(s, o) {
      o[0] & /*rtl*/
      4096 && t !== (t = /*rtl*/
      s[12] ? "rtl" : "ltr") && ce(e, "dir", t), o[0] & /*placeholder*/
      4 && ce(
        e,
        "placeholder",
        /*placeholder*/
        s[2]
      ), o[0] & /*lines*/
      2 && ce(
        e,
        "rows",
        /*lines*/
        s[1]
      ), o[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      s[5]), o[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      s[13]), o[0] & /*max_length*/
      32768 && ce(
        e,
        "maxlength",
        /*max_length*/
        s[15]
      ), o[0] & /*text_align*/
      16384 && r !== (r = /*text_align*/
      s[14] ? "text-align: " + /*text_align*/
      s[14] : "") && ce(e, "style", r), a && sb(a.update) && o[0] & /*value*/
      1 && a.update.call(
        null,
        /*value*/
        s[0]
      ), o[0] & /*value*/
      1 && mn(
        e,
        /*value*/
        s[0]
      ), o[0] & /*show_label, submit_btn, stop_btn*/
      3136 && zr(e, "no-label", !/*show_label*/
      s[6] && /*submit_btn*/
      (s[10] || /*stop_btn*/
      s[11]));
    },
    d(s) {
      s && ut(e), n[46](null), i = !1, ms(l);
    }
  };
}
function gb(n) {
  let e;
  function t(i, l) {
    if (
      /*type*/
      i[8] === "text"
    ) return bb;
    if (
      /*type*/
      i[8] === "password"
    ) return vb;
    if (
      /*type*/
      i[8] === "email"
    ) return _b;
  }
  let r = t(n), a = r && r(n);
  return {
    c() {
      a && a.c(), e = Zl();
    },
    l(i) {
      a && a.l(i), e = Zl();
    },
    m(i, l) {
      a && a.m(i, l), u0(i, e, l);
    },
    p(i, l) {
      r === (r = t(i)) && a ? a.p(i, l) : (a && a.d(1), a = r && r(i), a && (a.c(), a.m(e.parentNode, e)));
    },
    d(i) {
      i && ut(e), a && a.d(i);
    }
  };
}
function _b(n) {
  let e, t, r;
  return {
    c() {
      e = _r("input"), this.h();
    },
    l(a) {
      e = gr(a, "INPUT", {
        "data-testid": !0,
        type: !0,
        class: !0,
        placeholder: !0,
        maxlength: !0,
        autocomplete: !0
      }), this.h();
    },
    h() {
      ce(e, "data-testid", "textbox"), ce(e, "type", "email"), ce(e, "class", "scroll-hide svelte-bj4kw9"), ce(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ce(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ce(e, "autocomplete", "email");
    },
    m(a, i) {
      u0(a, e, i), mn(
        e,
        /*value*/
        n[0]
      ), n[44](e), /*autofocus*/
      n[13] && e.focus(), t || (r = [
        Ze(
          e,
          "input",
          /*input_input_handler_2*/
          n[43]
        ),
        Ze(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ze(
          e,
          "blur",
          /*blur_handler_2*/
          n[35]
        ),
        Ze(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ze(
          e,
          "focus",
          /*focus_handler_2*/
          n[36]
        )
      ], t = !0);
    },
    p(a, i) {
      i[0] & /*placeholder*/
      4 && ce(
        e,
        "placeholder",
        /*placeholder*/
        a[2]
      ), i[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      a[5]), i[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      a[13]), i[0] & /*max_length*/
      32768 && ce(
        e,
        "maxlength",
        /*max_length*/
        a[15]
      ), i[0] & /*value*/
      1 && e.value !== /*value*/
      a[0] && mn(
        e,
        /*value*/
        a[0]
      );
    },
    d(a) {
      a && ut(e), n[44](null), t = !1, ms(r);
    }
  };
}
function vb(n) {
  let e, t, r;
  return {
    c() {
      e = _r("input"), this.h();
    },
    l(a) {
      e = gr(a, "INPUT", {
        "data-testid": !0,
        type: !0,
        class: !0,
        placeholder: !0,
        maxlength: !0,
        autocomplete: !0
      }), this.h();
    },
    h() {
      ce(e, "data-testid", "password"), ce(e, "type", "password"), ce(e, "class", "scroll-hide svelte-bj4kw9"), ce(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ce(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ce(e, "autocomplete", "");
    },
    m(a, i) {
      u0(a, e, i), mn(
        e,
        /*value*/
        n[0]
      ), n[42](e), /*autofocus*/
      n[13] && e.focus(), t || (r = [
        Ze(
          e,
          "input",
          /*input_input_handler_1*/
          n[41]
        ),
        Ze(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ze(
          e,
          "blur",
          /*blur_handler_1*/
          n[33]
        ),
        Ze(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ze(
          e,
          "focus",
          /*focus_handler_1*/
          n[34]
        )
      ], t = !0);
    },
    p(a, i) {
      i[0] & /*placeholder*/
      4 && ce(
        e,
        "placeholder",
        /*placeholder*/
        a[2]
      ), i[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      a[5]), i[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      a[13]), i[0] & /*max_length*/
      32768 && ce(
        e,
        "maxlength",
        /*max_length*/
        a[15]
      ), i[0] & /*value*/
      1 && e.value !== /*value*/
      a[0] && mn(
        e,
        /*value*/
        a[0]
      );
    },
    d(a) {
      a && ut(e), n[42](null), t = !1, ms(r);
    }
  };
}
function bb(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = _r("input"), this.h();
    },
    l(l) {
      e = gr(l, "INPUT", {
        "data-testid": !0,
        type: !0,
        class: !0,
        dir: !0,
        placeholder: !0,
        maxlength: !0,
        style: !0
      }), this.h();
    },
    h() {
      ce(e, "data-testid", "textbox"), ce(e, "type", "text"), ce(e, "class", "scroll-hide svelte-bj4kw9"), ce(e, "dir", t = /*rtl*/
      n[12] ? "rtl" : "ltr"), ce(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ce(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ce(e, "style", r = /*text_align*/
      n[14] ? "text-align: " + /*text_align*/
      n[14] : "");
    },
    m(l, s) {
      u0(l, e, s), mn(
        e,
        /*value*/
        n[0]
      ), n[40](e), /*autofocus*/
      n[13] && e.focus(), a || (i = [
        Ze(
          e,
          "input",
          /*input_input_handler*/
          n[39]
        ),
        Ze(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ze(
          e,
          "blur",
          /*blur_handler*/
          n[31]
        ),
        Ze(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ze(
          e,
          "focus",
          /*focus_handler*/
          n[32]
        )
      ], a = !0);
    },
    p(l, s) {
      s[0] & /*rtl*/
      4096 && t !== (t = /*rtl*/
      l[12] ? "rtl" : "ltr") && ce(e, "dir", t), s[0] & /*placeholder*/
      4 && ce(
        e,
        "placeholder",
        /*placeholder*/
        l[2]
      ), s[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      l[5]), s[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      l[13]), s[0] & /*max_length*/
      32768 && ce(
        e,
        "maxlength",
        /*max_length*/
        l[15]
      ), s[0] & /*text_align*/
      16384 && r !== (r = /*text_align*/
      l[14] ? "text-align: " + /*text_align*/
      l[14] : "") && ce(e, "style", r), s[0] & /*value*/
      1 && e.value !== /*value*/
      l[0] && mn(
        e,
        /*value*/
        l[0]
      );
    },
    d(l) {
      l && ut(e), n[40](null), a = !1, ms(i);
    }
  };
}
function Yh(n) {
  let e, t, r, a, i, l;
  const s = [yb, wb], o = [];
  function u(c, d) {
    return (
      /*submit_btn*/
      c[10] === !0 ? 0 : 1
    );
  }
  return t = u(n), r = o[t] = s[t](n), {
    c() {
      e = _r("button"), r.c(), this.h();
    },
    l(c) {
      e = gr(c, "BUTTON", { class: !0 });
      var d = In(e);
      r.l(d), d.forEach(ut), this.h();
    },
    h() {
      ce(e, "class", "submit-button svelte-bj4kw9"), zr(
        e,
        "padded-button",
        /*submit_btn*/
        n[10] !== !0
      );
    },
    m(c, d) {
      u0(c, e, d), o[t].m(e, null), a = !0, i || (l = Ze(
        e,
        "click",
        /*handle_submit*/
        n[26]
      ), i = !0);
    },
    p(c, d) {
      let f = t;
      t = u(c), t === f ? o[t].p(c, d) : (ca(), Ot(o[f], 1, 1, () => {
        o[f] = null;
      }), ua(), r = o[t], r ? r.p(c, d) : (r = o[t] = s[t](c), r.c()), ft(r, 1), r.m(e, null)), (!a || d[0] & /*submit_btn*/
      1024) && zr(
        e,
        "padded-button",
        /*submit_btn*/
        c[10] !== !0
      );
    },
    i(c) {
      a || (ft(r), a = !0);
    },
    o(c) {
      Ot(r), a = !1;
    },
    d(c) {
      c && ut(e), o[t].d(), i = !1, l();
    }
  };
}
function wb(n) {
  let e;
  return {
    c() {
      e = a1(
        /*submit_btn*/
        n[10]
      );
    },
    l(t) {
      e = r1(
        t,
        /*submit_btn*/
        n[10]
      );
    },
    m(t, r) {
      u0(t, e, r);
    },
    p(t, r) {
      r[0] & /*submit_btn*/
      1024 && n1(
        e,
        /*submit_btn*/
        t[10]
      );
    },
    i: dn,
    o: dn,
    d(t) {
      t && ut(e);
    }
  };
}
function yb(n) {
  let e, t;
  return e = new Wv({}), {
    c() {
      pi(e.$$.fragment);
    },
    l(r) {
      mi(e.$$.fragment, r);
    },
    m(r, a) {
      _i(e, r, a), t = !0;
    },
    p: dn,
    i(r) {
      t || (ft(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ot(e.$$.fragment, r), t = !1;
    },
    d(r) {
      gi(e, r);
    }
  };
}
function Zh(n) {
  let e, t, r, a, i, l;
  const s = [Db, kb], o = [];
  function u(c, d) {
    return (
      /*stop_btn*/
      c[11] === !0 ? 0 : 1
    );
  }
  return t = u(n), r = o[t] = s[t](n), {
    c() {
      e = _r("button"), r.c(), this.h();
    },
    l(c) {
      e = gr(c, "BUTTON", { class: !0 });
      var d = In(e);
      r.l(d), d.forEach(ut), this.h();
    },
    h() {
      ce(e, "class", "stop-button svelte-bj4kw9"), zr(
        e,
        "padded-button",
        /*stop_btn*/
        n[11] !== !0
      );
    },
    m(c, d) {
      u0(c, e, d), o[t].m(e, null), a = !0, i || (l = Ze(
        e,
        "click",
        /*handle_stop*/
        n[25]
      ), i = !0);
    },
    p(c, d) {
      let f = t;
      t = u(c), t === f ? o[t].p(c, d) : (ca(), Ot(o[f], 1, 1, () => {
        o[f] = null;
      }), ua(), r = o[t], r ? r.p(c, d) : (r = o[t] = s[t](c), r.c()), ft(r, 1), r.m(e, null)), (!a || d[0] & /*stop_btn*/
      2048) && zr(
        e,
        "padded-button",
        /*stop_btn*/
        c[11] !== !0
      );
    },
    i(c) {
      a || (ft(r), a = !0);
    },
    o(c) {
      Ot(r), a = !1;
    },
    d(c) {
      c && ut(e), o[t].d(), i = !1, l();
    }
  };
}
function kb(n) {
  let e;
  return {
    c() {
      e = a1(
        /*stop_btn*/
        n[11]
      );
    },
    l(t) {
      e = r1(
        t,
        /*stop_btn*/
        n[11]
      );
    },
    m(t, r) {
      u0(t, e, r);
    },
    p(t, r) {
      r[0] & /*stop_btn*/
      2048 && n1(
        e,
        /*stop_btn*/
        t[11]
      );
    },
    i: dn,
    o: dn,
    d(t) {
      t && ut(e);
    }
  };
}
function Db(n) {
  let e, t;
  return e = new eb({
    props: { fill: "none", stroke_width: 2.5 }
  }), {
    c() {
      pi(e.$$.fragment);
    },
    l(r) {
      mi(e.$$.fragment, r);
    },
    m(r, a) {
      _i(e, r, a), t = !0;
    },
    p: dn,
    i(r) {
      t || (ft(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ot(e.$$.fragment, r), t = !1;
    },
    d(r) {
      gi(e, r);
    }
  };
}
function Ab(n) {
  let e, t, r, a, i, l, s, o, u = (
    /*show_label*/
    n[6] && /*show_copy_button*/
    n[9] && Xh(n)
  );
  r = new xv({
    props: {
      root: (
        /*root*/
        n[16]
      ),
      show_label: (
        /*show_label*/
        n[6]
      ),
      info: (
        /*info*/
        n[4]
      ),
      $$slots: { default: [mb] },
      $$scope: { ctx: n }
    }
  });
  function c(b, A) {
    return (
      /*lines*/
      b[1] === 1 && /*_max_lines*/
      b[18] === 1 ? gb : pb
    );
  }
  let d = c(n), f = d(n), p = (
    /*submit_btn*/
    n[10] && Yh(n)
  ), g = (
    /*stop_btn*/
    n[11] && Zh(n)
  );
  return {
    c() {
      e = _r("label"), u && u.c(), t = hl(), pi(r.$$.fragment), a = hl(), i = _r("div"), f.c(), l = hl(), p && p.c(), s = hl(), g && g.c(), this.h();
    },
    l(b) {
      e = gr(b, "LABEL", { class: !0 });
      var A = In(e);
      u && u.l(A), t = fl(A), mi(r.$$.fragment, A), a = fl(A), i = gr(A, "DIV", { class: !0 });
      var w = In(i);
      f.l(w), l = fl(w), p && p.l(w), s = fl(w), g && g.l(w), w.forEach(ut), A.forEach(ut), this.h();
    },
    h() {
      ce(i, "class", "input-container svelte-bj4kw9"), ce(e, "class", "svelte-bj4kw9"), zr(
        e,
        "container",
        /*container*/
        n[7]
      ), zr(
        e,
        "show_textbox_border",
        /*show_textbox_border*/
        n[20]
      );
    },
    m(b, A) {
      u0(b, e, A), u && u.m(e, null), qa(e, t), _i(r, e, null), qa(e, a), qa(e, i), f.m(i, null), qa(i, l), p && p.m(i, null), qa(i, s), g && g.m(i, null), o = !0;
    },
    p(b, A) {
      /*show_label*/
      b[6] && /*show_copy_button*/
      b[9] ? u ? (u.p(b, A), A[0] & /*show_label, show_copy_button*/
      576 && ft(u, 1)) : (u = Xh(b), u.c(), ft(u, 1), u.m(e, t)) : u && (ca(), Ot(u, 1, 1, () => {
        u = null;
      }), ua());
      const w = {};
      A[0] & /*root*/
      65536 && (w.root = /*root*/
      b[16]), A[0] & /*show_label*/
      64 && (w.show_label = /*show_label*/
      b[6]), A[0] & /*info*/
      16 && (w.info = /*info*/
      b[4]), A[0] & /*label*/
      8 | A[1] & /*$$scope*/
      67108864 && (w.$$scope = { dirty: A, ctx: b }), r.$set(w), d === (d = c(b)) && f ? f.p(b, A) : (f.d(1), f = d(b), f && (f.c(), f.m(i, l))), /*submit_btn*/
      b[10] ? p ? (p.p(b, A), A[0] & /*submit_btn*/
      1024 && ft(p, 1)) : (p = Yh(b), p.c(), ft(p, 1), p.m(i, s)) : p && (ca(), Ot(p, 1, 1, () => {
        p = null;
      }), ua()), /*stop_btn*/
      b[11] ? g ? (g.p(b, A), A[0] & /*stop_btn*/
      2048 && ft(g, 1)) : (g = Zh(b), g.c(), ft(g, 1), g.m(i, null)) : g && (ca(), Ot(g, 1, 1, () => {
        g = null;
      }), ua()), (!o || A[0] & /*container*/
      128) && zr(
        e,
        "container",
        /*container*/
        b[7]
      );
    },
    i(b) {
      o || (ft(u), ft(r.$$.fragment, b), ft(p), ft(g), o = !0);
    },
    o(b) {
      Ot(u), Ot(r.$$.fragment, b), Ot(p), Ot(g), o = !1;
    },
    d(b) {
      b && ut(e), u && u.d(), gi(r), f.d(), p && p.d(), g && g.d();
    }
  };
}
function Eb(n, e, t) {
  var r = this && this.__awaiter || function(G, Fe, H, Ce) {
    function we(xt) {
      return xt instanceof H ? xt : new H(function(t0) {
        t0(xt);
      });
    }
    return new (H || (H = Promise))(function(xt, t0) {
      function c0(gt) {
        try {
          Q0(Ce.next(gt));
        } catch (r0) {
          t0(r0);
        }
      }
      function Vt(gt) {
        try {
          Q0(Ce.throw(gt));
        } catch (r0) {
          t0(r0);
        }
      }
      function Q0(gt) {
        gt.done ? xt(gt.value) : we(gt.value).then(c0, Vt);
      }
      Q0((Ce = Ce.apply(G, Fe || [])).next());
    });
  };
  let { value: a = "" } = e, { value_is_output: i = !1 } = e, { lines: l = 1 } = e, { placeholder: s = "Type here..." } = e, { label: o } = e, { info: u = void 0 } = e, { disabled: c = !1 } = e, { show_label: d = !0 } = e, { container: f = !0 } = e, { max_lines: p = void 0 } = e, { type: g = "text" } = e, { show_copy_button: b = !1 } = e, { submit_btn: A = null } = e, { stop_btn: w = null } = e, { rtl: k = !1 } = e, { autofocus: y = !1 } = e, { text_align: D = void 0 } = e, { autoscroll: E = !0 } = e, { max_length: T = void 0 } = e, { root: F } = e, C, B = !1, L, I, P = 0, $ = !1, O;
  const K = !A, q = fb();
  ub(() => {
    I = C && C.offsetHeight + C.scrollTop > C.scrollHeight - 100;
  });
  const he = () => {
    I && E && !$ && C.scrollTo(0, C.scrollHeight);
  };
  function ee() {
    q("change", a), i || q("input");
  }
  cb(() => {
    y && C.focus(), I && E && he(), t(28, i = !1);
  });
  function _e() {
    return r(this, void 0, void 0, function* () {
      "clipboard" in navigator && (yield navigator.clipboard.writeText(a), q("copy", { value: a }), de());
    });
  }
  function de() {
    t(19, B = !0), L && clearTimeout(L), L = setTimeout(
      () => {
        t(19, B = !1);
      },
      1e3
    );
  }
  function re(G) {
    const Fe = G.target, H = Fe.value, Ce = [Fe.selectionStart, Fe.selectionEnd];
    q("select", { value: H.substring(...Ce), index: Ce });
  }
  function oe(G) {
    return r(this, void 0, void 0, function* () {
      yield Wh(), (G.key === "Enter" && G.shiftKey && l > 1 || G.key === "Enter" && !G.shiftKey && l === 1 && O >= 1) && (G.preventDefault(), q("submit"));
    });
  }
  function ve(G) {
    const Fe = G.target, H = Fe.scrollTop;
    H < P && ($ = !0), P = H;
    const Ce = Fe.scrollHeight - Fe.clientHeight;
    H >= Ce && ($ = !1);
  }
  function Be() {
    q("stop");
  }
  function W() {
    q("submit");
  }
  function pe(G) {
    return r(this, void 0, void 0, function* () {
      if (yield Wh(), l === O) return;
      const Fe = G.target, H = window.getComputedStyle(Fe), Ce = parseFloat(H.paddingTop), we = parseFloat(H.paddingBottom), xt = parseFloat(H.lineHeight);
      let t0 = O === void 0 ? !1 : Ce + we + xt * O, c0 = Ce + we + l * xt;
      Fe.style.height = "1px";
      let Vt;
      t0 && Fe.scrollHeight > t0 ? Vt = t0 : Fe.scrollHeight < c0 ? Vt = c0 : Vt = Fe.scrollHeight, Fe.style.height = `${Vt}px`;
    });
  }
  function Se(G, Fe) {
    if (l !== O && (G.style.overflowY = "scroll", G.addEventListener("input", pe), !!Fe.trim()))
      return pe({ target: G }), {
        destroy: () => G.removeEventListener("input", pe)
      };
  }
  function Ie(G) {
    Qr.call(this, n, G);
  }
  function V(G) {
    Qr.call(this, n, G);
  }
  function ge(G) {
    Qr.call(this, n, G);
  }
  function Ee(G) {
    Qr.call(this, n, G);
  }
  function Le(G) {
    Qr.call(this, n, G);
  }
  function st(G) {
    Qr.call(this, n, G);
  }
  function Pe(G) {
    Qr.call(this, n, G);
  }
  function Ve(G) {
    Qr.call(this, n, G);
  }
  function Et() {
    a = this.value, t(0, a);
  }
  function St(G) {
    cl[G ? "unshift" : "push"](() => {
      C = G, t(17, C);
    });
  }
  function pt() {
    a = this.value, t(0, a);
  }
  function Je(G) {
    cl[G ? "unshift" : "push"](() => {
      C = G, t(17, C);
    });
  }
  function w0() {
    a = this.value, t(0, a);
  }
  function Gr(G) {
    cl[G ? "unshift" : "push"](() => {
      C = G, t(17, C);
    });
  }
  function wn() {
    a = this.value, t(0, a);
  }
  function R(G) {
    cl[G ? "unshift" : "push"](() => {
      C = G, t(17, C);
    });
  }
  return n.$$set = (G) => {
    "value" in G && t(0, a = G.value), "value_is_output" in G && t(28, i = G.value_is_output), "lines" in G && t(1, l = G.lines), "placeholder" in G && t(2, s = G.placeholder), "label" in G && t(3, o = G.label), "info" in G && t(4, u = G.info), "disabled" in G && t(5, c = G.disabled), "show_label" in G && t(6, d = G.show_label), "container" in G && t(7, f = G.container), "max_lines" in G && t(29, p = G.max_lines), "type" in G && t(8, g = G.type), "show_copy_button" in G && t(9, b = G.show_copy_button), "submit_btn" in G && t(10, A = G.submit_btn), "stop_btn" in G && t(11, w = G.stop_btn), "rtl" in G && t(12, k = G.rtl), "autofocus" in G && t(13, y = G.autofocus), "text_align" in G && t(14, D = G.text_align), "autoscroll" in G && t(30, E = G.autoscroll), "max_length" in G && t(15, T = G.max_length), "root" in G && t(16, F = G.root);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*max_lines, type, lines*/
    536871170 && (p === void 0 ? g === "text" ? t(18, O = Math.max(l, 20)) : t(18, O = 1) : t(18, O = Math.max(p, l))), n.$$.dirty[0] & /*value*/
    1 && a === null && t(0, a = ""), n.$$.dirty[0] & /*value, el, lines, _max_lines*/
    393219 && C && l !== O && pe({ target: C }), n.$$.dirty[0] & /*value*/
    1 && ee();
  }, [
    a,
    l,
    s,
    o,
    u,
    c,
    d,
    f,
    g,
    b,
    A,
    w,
    k,
    y,
    D,
    T,
    F,
    C,
    O,
    B,
    K,
    _e,
    re,
    oe,
    ve,
    Be,
    W,
    Se,
    i,
    p,
    E,
    Ie,
    V,
    ge,
    Ee,
    Le,
    st,
    Pe,
    Ve,
    Et,
    St,
    pt,
    Je,
    w0,
    Gr,
    wn,
    R
  ];
}
class Sb extends rb {
  constructor(e) {
    super(), lb(
      this,
      e,
      Eb,
      Ab,
      ob,
      {
        value: 0,
        value_is_output: 28,
        lines: 1,
        placeholder: 2,
        label: 3,
        info: 4,
        disabled: 5,
        show_label: 6,
        container: 7,
        max_lines: 29,
        type: 8,
        show_copy_button: 9,
        submit_btn: 10,
        stop_btn: 11,
        rtl: 12,
        autofocus: 13,
        text_align: 14,
        autoscroll: 30,
        max_length: 15,
        root: 16
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: xb,
  add_flush_callback: Tb,
  append_hydration: Er,
  attr: vt,
  bind: Fb,
  binding_callbacks: Cb,
  check_outros: Al,
  children: rn,
  claim_component: Or,
  claim_element: nn,
  claim_space: dl,
  create_component: qr,
  destroy_component: Pr,
  detach: X0,
  element: an,
  group_outros: El,
  init: Mb,
  insert_hydration: i1,
  is_function: zb,
  listen: _u,
  mount_component: Hr,
  noop: l1,
  run_all: Bb,
  safe_not_equal: Ib,
  space: ml,
  toggle_class: Ka,
  transition_in: bt,
  transition_out: Rt
} = window.__gradio__svelte__internal;
function Kh(n) {
  let e, t, r, a;
  return t = new yu({}), {
    c() {
      e = an("div"), qr(t.$$.fragment), this.h();
    },
    l(i) {
      e = nn(i, "DIV", { class: !0, style: !0 });
      var l = rn(e);
      Or(t.$$.fragment, l), l.forEach(X0), this.h();
    },
    h() {
      vt(e, "class", "button svelte-1j1z049"), vt(e, "style", r = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`);
    },
    m(i, l) {
      i1(i, e, l), Hr(t, e, null), a = !0;
    },
    p(i, l) {
      (!a || l & /*icon_button_color*/
      64 && r !== (r = `fill: ${/*icon_button_color*/
      i[6]}; stroke: ${/*icon_button_color*/
      i[6]}; color: ${/*icon_button_color*/
      i[6]};`)) && vt(e, "style", r);
    },
    i(i) {
      a || (bt(t.$$.fragment, i), a = !0);
    },
    o(i) {
      Rt(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && X0(e), Pr(t);
    }
  };
}
function Lb(n) {
  let e, t;
  return e = new fa({}), {
    c() {
      qr(e.$$.fragment);
    },
    l(r) {
      Or(e.$$.fragment, r);
    },
    m(r, a) {
      Hr(e, r, a), t = !0;
    },
    p: l1,
    i(r) {
      t || (bt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Rt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pr(e, r);
    }
  };
}
function Nb(n) {
  let e, t;
  return e = new ci({
    props: {
      audio_source_callback: (
        /*input_audio_source_callback*/
        n[3]
      ),
      stream_state: "open",
      icon: (
        /*is_mic_muted*/
        n[12] ? gu : fa
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[6]
      ),
      pulse_color: (
        /*pulse_color*/
        n[7]
      ),
      pulse_intensity_threshold: 0.99
    }
  }), {
    c() {
      qr(e.$$.fragment);
    },
    l(r) {
      Or(e.$$.fragment, r);
    },
    m(r, a) {
      Hr(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a & /*input_audio_source_callback*/
      8 && (i.audio_source_callback = /*input_audio_source_callback*/
      r[3]), a & /*is_mic_muted*/
      4096 && (i.icon = /*is_mic_muted*/
      r[12] ? gu : fa), a & /*icon_button_color*/
      64 && (i.icon_button_color = /*icon_button_color*/
      r[6]), a & /*pulse_color*/
      128 && (i.pulse_color = /*pulse_color*/
      r[7]), e.$set(i);
    },
    i(r) {
      t || (bt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Rt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pr(e, r);
    }
  };
}
function Jh(n) {
  let e, t, r, a, i, l, s, o, u;
  const c = [qb, Ob, Rb], d = [];
  function f(p, g) {
    return (
      /*stream_state*/
      p[8] === "open" ? 0 : (
        /*is_muted*/
        p[11] ? 1 : 2
      )
    );
  }
  return r = f(n), a = d[r] = c[r](n), {
    c() {
      e = an("button"), t = an("div"), a.c(), this.h();
    },
    l(p) {
      e = nn(p, "BUTTON", { class: !0, "aria-label": !0 });
      var g = rn(e);
      t = nn(g, "DIV", { class: !0, style: !0 });
      var b = rn(t);
      a.l(b), b.forEach(X0), g.forEach(X0), this.h();
    },
    h() {
      vt(t, "class", "icon"), vt(t, "style", i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), vt(e, "class", "button svelte-1j1z049"), vt(e, "aria-label", l = /*is_muted*/
      n[11] ? "unmute audio" : "mute audio"), Ka(
        e,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      );
    },
    m(p, g) {
      i1(p, e, g), Er(e, t), d[r].m(t, null), s = !0, o || (u = _u(e, "click", function() {
        zb(
          /*toggleMute*/
          n[4]
        ) && n[4].apply(this, arguments);
      }), o = !0);
    },
    p(p, g) {
      n = p;
      let b = r;
      r = f(n), r === b ? d[r].p(n, g) : (El(), Rt(d[b], 1, 1, () => {
        d[b] = null;
      }), Al(), a = d[r], a ? a.p(n, g) : (a = d[r] = c[r](n), a.c()), bt(a, 1), a.m(t, null)), (!s || g & /*icon_button_color*/
      64 && i !== (i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`)) && vt(t, "style", i), (!s || g & /*is_muted*/
      2048 && l !== (l = /*is_muted*/
      n[11] ? "unmute audio" : "mute audio")) && vt(e, "aria-label", l), (!s || g & /*stream_state*/
      256) && Ka(
        e,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      );
    },
    i(p) {
      s || (bt(a), s = !0);
    },
    o(p) {
      Rt(a), s = !1;
    },
    d(p) {
      p && X0(e), d[r].d(), o = !1, u();
    }
  };
}
function Rb(n) {
  let e, t;
  return e = new Sl({}), {
    c() {
      qr(e.$$.fragment);
    },
    l(r) {
      Or(e.$$.fragment, r);
    },
    m(r, a) {
      Hr(e, r, a), t = !0;
    },
    p: l1,
    i(r) {
      t || (bt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Rt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pr(e, r);
    }
  };
}
function Ob(n) {
  let e, t;
  return e = new xl({}), {
    c() {
      qr(e.$$.fragment);
    },
    l(r) {
      Or(e.$$.fragment, r);
    },
    m(r, a) {
      Hr(e, r, a), t = !0;
    },
    p: l1,
    i(r) {
      t || (bt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Rt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pr(e, r);
    }
  };
}
function qb(n) {
  let e, t;
  return e = new ci({
    props: {
      audio_source_callback: (
        /*audio_source_callback*/
        n[2]
      ),
      stream_state: "open",
      icon: (
        /*is_muted*/
        n[11] ? xl : Sl
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[6]
      ),
      pulse_color: (
        /*pulse_color*/
        n[7]
      ),
      pulse_intensity_threshold: 0.8
    }
  }), {
    c() {
      qr(e.$$.fragment);
    },
    l(r) {
      Or(e.$$.fragment, r);
    },
    m(r, a) {
      Hr(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a & /*audio_source_callback*/
      4 && (i.audio_source_callback = /*audio_source_callback*/
      r[2]), a & /*is_muted*/
      2048 && (i.icon = /*is_muted*/
      r[11] ? xl : Sl), a & /*icon_button_color*/
      64 && (i.icon_button_color = /*icon_button_color*/
      r[6]), a & /*pulse_color*/
      128 && (i.pulse_color = /*pulse_color*/
      r[7]), e.$set(i);
    },
    i(r) {
      t || (bt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Rt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pr(e, r);
    }
  };
}
function Pb(n) {
  let e, t, r, a, i, l, s, o, u, c, d, f, p, g, b, A, w, k, y;
  function D(I) {
    n[17](I);
  }
  let E = {
    label: "",
    show_label: !1,
    root: void 0,
    info: void 0,
    submit_btn: !/*pending*/
    n[10],
    disabled: (
      /*pending*/
      n[10]
    )
  };
  /*value*/
  n[0].textbox !== void 0 && (E.value = /*value*/
  n[0].textbox), t = new Sb({ props: E }), Cb.push(() => Fb(t, "value", D)), t.$on(
    "submit",
    /*submit_handler*/
    n[18]
  );
  let T = (
    /*pending*/
    n[10] && Kh(n)
  );
  const F = [Nb, Lb], C = [];
  function B(I, P) {
    return (
      /*stream_state*/
      I[8] === "open" ? 0 : 1
    );
  }
  o = B(n), u = C[o] = F[o](n);
  let L = (
    /*mode*/
    n[9] === "send-receive" && Jh(n)
  );
  return b = new dd({ props: { fill: "none" } }), {
    c() {
      e = an("div"), qr(t.$$.fragment), a = ml(), T && T.c(), i = ml(), l = an("button"), s = an("div"), u.c(), d = ml(), L && L.c(), f = ml(), p = an("button"), g = an("div"), qr(b.$$.fragment), this.h();
    },
    l(I) {
      e = nn(I, "DIV", { class: !0 });
      var P = rn(e);
      Or(t.$$.fragment, P), a = dl(P), T && T.l(P), i = dl(P), l = nn(P, "BUTTON", { class: !0 });
      var $ = rn(l);
      s = nn($, "DIV", { class: !0, style: !0 });
      var O = rn(s);
      u.l(O), O.forEach(X0), $.forEach(X0), d = dl(P), L && L.l(P), f = dl(P), p = nn(P, "BUTTON", { class: !0, "aria-label": !0 });
      var K = rn(p);
      g = nn(K, "DIV", { class: !0, style: !0 });
      var q = rn(g);
      Or(b.$$.fragment, q), q.forEach(X0), K.forEach(X0), P.forEach(X0), this.h();
    },
    h() {
      vt(s, "class", "icon"), vt(s, "style", c = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), vt(l, "class", "button svelte-1j1z049"), Ka(l, "padded-button", !1), vt(g, "class", "icon"), vt(g, "style", A = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), vt(p, "class", "button svelte-1j1z049"), vt(p, "aria-label", "stop stream"), Ka(
        p,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      ), vt(e, "class", "input-container svelte-1j1z049");
    },
    m(I, P) {
      i1(I, e, P), Hr(t, e, null), Er(e, a), T && T.m(e, null), Er(e, i), Er(e, l), Er(l, s), C[o].m(s, null), Er(e, d), L && L.m(e, null), Er(e, f), Er(e, p), Er(p, g), Hr(b, g, null), w = !0, k || (y = [
        _u(
          l,
          "click",
          /*click_mic_icon*/
          n[13]
        ),
        _u(
          p,
          "click",
          /*click_stop_stream*/
          n[14]
        )
      ], k = !0);
    },
    p(I, P) {
      const $ = {};
      P & /*pending*/
      1024 && ($.submit_btn = !/*pending*/
      I[10]), P & /*pending*/
      1024 && ($.disabled = /*pending*/
      I[10]), !r && P & /*value*/
      1 && (r = !0, $.value = /*value*/
      I[0].textbox, Tb(() => r = !1)), t.$set($), /*pending*/
      I[10] ? T ? (T.p(I, P), P & /*pending*/
      1024 && bt(T, 1)) : (T = Kh(I), T.c(), bt(T, 1), T.m(e, i)) : T && (El(), Rt(T, 1, 1, () => {
        T = null;
      }), Al());
      let O = o;
      o = B(I), o === O ? C[o].p(I, P) : (El(), Rt(C[O], 1, 1, () => {
        C[O] = null;
      }), Al(), u = C[o], u ? u.p(I, P) : (u = C[o] = F[o](I), u.c()), bt(u, 1), u.m(s, null)), (!w || P & /*icon_button_color*/
      64 && c !== (c = `fill: ${/*icon_button_color*/
      I[6]}; stroke: ${/*icon_button_color*/
      I[6]}; color: ${/*icon_button_color*/
      I[6]};`)) && vt(s, "style", c), /*mode*/
      I[9] === "send-receive" ? L ? (L.p(I, P), P & /*mode*/
      512 && bt(L, 1)) : (L = Jh(I), L.c(), bt(L, 1), L.m(e, f)) : L && (El(), Rt(L, 1, 1, () => {
        L = null;
      }), Al()), (!w || P & /*icon_button_color*/
      64 && A !== (A = `fill: ${/*icon_button_color*/
      I[6]}; stroke: ${/*icon_button_color*/
      I[6]}; color: ${/*icon_button_color*/
      I[6]};`)) && vt(g, "style", A), (!w || P & /*stream_state*/
      256) && Ka(
        p,
        "hidden",
        /*stream_state*/
        I[8] === "closed"
      );
    },
    i(I) {
      w || (bt(t.$$.fragment, I), bt(T), bt(u), bt(L), bt(b.$$.fragment, I), w = !0);
    },
    o(I) {
      Rt(t.$$.fragment, I), Rt(T), Rt(u), Rt(L), Rt(b.$$.fragment, I), w = !1;
    },
    d(I) {
      I && X0(e), Pr(t), T && T.d(), C[o].d(), L && L.d(), Pr(b), k = !1, Bb(y);
    }
  };
}
function Hb(n) {
  let e, t;
  return e = new hd({
    props: {
      $$slots: { default: [Pb] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qr(e.$$.fragment);
    },
    l(r) {
      Or(e.$$.fragment, r);
    },
    m(r, a) {
      Hr(e, r, a), t = !0;
    },
    p(r, [a]) {
      const i = {};
      a & /*$$scope, stream_state, icon_button_color, is_muted, toggleMute, audio_source_callback, pulse_color, mode, input_audio_source_callback, is_mic_muted, pending, value, start_stream, on_change_cb*/
      1056767 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (bt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Rt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pr(e, r);
    }
  };
}
function Ub(n, e, t) {
  var r = this && this.__awaiter || function(F, C, B, L) {
    function I(P) {
      return P instanceof B ? P : new B(function($) {
        $(P);
      });
    }
    return new (B || (B = Promise))(function(P, $) {
      function O(he) {
        try {
          q(L.next(he));
        } catch (ee) {
          $(ee);
        }
      }
      function K(he) {
        try {
          q(L.throw(he));
        } catch (ee) {
          $(ee);
        }
      }
      function q(he) {
        he.done ? P(he.value) : I(he.value).then(O, K);
      }
      q((L = L.apply(F, C || [])).next());
    });
  };
  let { value: a = null } = e, { access_mic: i } = e, { start_stream: l } = e, { audio_source_callback: s } = e, { input_audio_source_callback: o } = e, { toggleMuteMicrophone: u } = e, { toggleMute: c } = e, { on_change_cb: d } = e, { icon_button_color: f = "var(--color-accent)" } = e, { pulse_color: p = "var(--color-accent)" } = e, { stream_state: g = "closed" } = e, { mode: b = "send-receive" } = e, { pending: A = !1 } = e, { is_muted: w = !1 } = e, { is_mic_muted: k = !1 } = e;
  function y() {
    g === "open" ? u() : (i(), l());
  }
  function D() {
    return r(this, void 0, void 0, function* () {
      yield l();
    });
  }
  function E(F) {
    n.$$.not_equal(a.textbox, F) && (a.textbox = F, t(0, a));
  }
  const T = async () => {
    if (g === "closed")
      for (await l(); g !== "open"; )
        await new Promise((F) => setTimeout(F, 100));
    d({
      type: "submit",
      data: {
        value: {
          webrtc_id: a.webrtc_id,
          textbox: a.textbox
        },
        is_value_data: !0
      }
    }), console.debug("textbox called submit"), t(0, a.textbox = "", a);
  };
  return n.$$set = (F) => {
    "value" in F && t(0, a = F.value), "access_mic" in F && t(15, i = F.access_mic), "start_stream" in F && t(1, l = F.start_stream), "audio_source_callback" in F && t(2, s = F.audio_source_callback), "input_audio_source_callback" in F && t(3, o = F.input_audio_source_callback), "toggleMuteMicrophone" in F && t(16, u = F.toggleMuteMicrophone), "toggleMute" in F && t(4, c = F.toggleMute), "on_change_cb" in F && t(5, d = F.on_change_cb), "icon_button_color" in F && t(6, f = F.icon_button_color), "pulse_color" in F && t(7, p = F.pulse_color), "stream_state" in F && t(8, g = F.stream_state), "mode" in F && t(9, b = F.mode), "pending" in F && t(10, A = F.pending), "is_muted" in F && t(11, w = F.is_muted), "is_mic_muted" in F && t(12, k = F.is_mic_muted);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && console.log("value", a);
  }, [
    a,
    l,
    s,
    o,
    c,
    d,
    f,
    p,
    g,
    b,
    A,
    w,
    k,
    y,
    D,
    i,
    u,
    E,
    T
  ];
}
class Gb extends xb {
  constructor(e) {
    super(), Mb(this, e, Ub, Hb, Ib, {
      value: 0,
      access_mic: 15,
      start_stream: 1,
      audio_source_callback: 2,
      input_audio_source_callback: 3,
      toggleMuteMicrophone: 16,
      toggleMute: 4,
      on_change_cb: 5,
      icon_button_color: 6,
      pulse_color: 7,
      stream_state: 8,
      mode: 9,
      pending: 10,
      is_muted: 11,
      is_mic_muted: 12
    });
  }
}
const {
  SvelteComponent: Vb,
  action_destroyer: jb,
  add_flush_callback: pl,
  append_hydration: ht,
  attr: ke,
  bind: gl,
  binding_callbacks: ia,
  bubble: Uo,
  check_outros: xr,
  children: kt,
  claim_component: p0,
  claim_element: Dt,
  claim_space: S0,
  claim_text: vi,
  create_component: g0,
  destroy_component: _0,
  destroy_each: Wb,
  detach: De,
  element: At,
  empty: Qh,
  ensure_array_like: $h,
  group_outros: Tr,
  init: Xb,
  insert_hydration: Pt,
  listen: lr,
  mount_component: v0,
  noop: vm,
  run_all: bm,
  safe_not_equal: Yb,
  set_data: bi,
  set_input_value: vu,
  space: x0,
  text: wi,
  toggle_class: Fr,
  transition_in: Ae,
  transition_out: Me
} = window.__gradio__svelte__internal, { createEventDispatcher: Zb } = window.__gradio__svelte__internal, { onMount: Kb } = window.__gradio__svelte__internal;
function ed(n, e, t) {
  const r = n.slice();
  return r[59] = e[t], r;
}
function td(n) {
  let e, t;
  return e = new ls({
    props: {
      show_label: (
        /*show_label*/
        n[3] && !/*full_screen*/
        n[12]
      ),
      Icon: wu,
      float: !1,
      label: (
        /*label*/
        n[2] || /*i18n*/
        n[4]("audio.audio")
      )
    }
  }), {
    c() {
      g0(e.$$.fragment);
    },
    l(r) {
      p0(e.$$.fragment, r);
    },
    m(r, a) {
      v0(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*show_label, full_screen*/
      4104 && (i.show_label = /*show_label*/
      r[3] && !/*full_screen*/
      r[12]), a[0] & /*label, i18n*/
      20 && (i.label = /*label*/
      r[2] || /*i18n*/
      r[4]("audio.audio")), e.$set(i);
    },
    i(r) {
      t || (Ae(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Me(e.$$.fragment, r), t = !1;
    },
    d(r) {
      _0(e, r);
    }
  };
}
function Jb(n) {
  let e, t, r, a, i, l, s, o, u, c, d, f = (
    /*stream_state*/
    n[14] === "open" && /*mode*/
    n[1].includes("send")
  ), p, g, b, A;
  e = new fm({
    props: {
      audio_source_callback: (
        /*audio_source_callback*/
        n[24]
      ),
      stream_state: (
        /*stream_state*/
        n[14]
      ),
      icon: (
        /*icon*/
        n[6]
      ),
      icon_button_color: (
        /*icon_button_color*/
        n[7]
      ),
      pulse_color: (
        /*pulse_color*/
        n[8]
      ),
      pending: (
        /*pending*/
        n[15]
      ),
      icon_radius: (
        /*icon_radius*/
        n[9]
      ),
      full_screen: (
        /*full_screen*/
        n[12]
      )
    }
  }), r = new $4({
    props: { time_limit: (
      /*_time_limit*/
      n[17]
    ) }
  });
  const w = [tw, ew, $b], k = [];
  function y(C, B) {
    return (
      /*stream_state*/
      C[14] === "waiting" ? 0 : (
        /*stream_state*/
        C[14] === "open" ? 1 : 2
      )
    );
  }
  s = y(n), o = k[s] = w[s](n);
  let D = (
    /*stream_state*/
    n[14] === "closed" && rd(n)
  ), E = (
    /*stream_state*/
    n[14] === "open" && /*mode*/
    n[1] === "send-receive" && nd(n)
  ), T = f && ad(n), F = (
    /*options_open*/
    n[16] && /*selected_device*/
    n[20] && id(n)
  );
  return {
    c() {
      g0(e.$$.fragment), t = x0(), g0(r.$$.fragment), a = x0(), i = At("div"), l = At("button"), o.c(), u = x0(), D && D.c(), c = x0(), E && E.c(), d = x0(), T && T.c(), p = x0(), F && F.c(), this.h();
    },
    l(C) {
      p0(e.$$.fragment, C), t = S0(C), p0(r.$$.fragment, C), a = S0(C), i = Dt(C, "DIV", { class: !0 });
      var B = kt(i);
      l = Dt(B, "BUTTON", { "aria-label": !0, class: !0 });
      var L = kt(l);
      o.l(L), L.forEach(De), u = S0(B), D && D.l(B), c = S0(B), E && E.l(B), d = S0(B), T && T.l(B), p = S0(B), F && F.l(B), B.forEach(De), this.h();
    },
    h() {
      ke(l, "aria-label", "start stream"), ke(l, "class", "svelte-16la6ep"), ke(i, "class", "button-wrap svelte-16la6ep"), Fr(
        i,
        "pulse",
        /*stopword_recognized*/
        n[13]
      ), Fr(
        i,
        "full-screen",
        /*full_screen*/
        n[12] || /*full_screen*/
        n[12] === null
      );
    },
    m(C, B) {
      v0(e, C, B), Pt(C, t, B), v0(r, C, B), Pt(C, a, B), Pt(C, i, B), ht(i, l), k[s].m(l, null), n[52](l), ht(i, u), D && D.m(i, null), ht(i, c), E && E.m(i, null), ht(i, d), T && T.m(i, null), ht(i, p), F && F.m(i, null), g = !0, b || (A = lr(
        l,
        "click",
        /*start_stream*/
        n[27]
      ), b = !0);
    },
    p(C, B) {
      const L = {};
      B[0] & /*stream_state*/
      16384 && (L.stream_state = /*stream_state*/
      C[14]), B[0] & /*icon*/
      64 && (L.icon = /*icon*/
      C[6]), B[0] & /*icon_button_color*/
      128 && (L.icon_button_color = /*icon_button_color*/
      C[7]), B[0] & /*pulse_color*/
      256 && (L.pulse_color = /*pulse_color*/
      C[8]), B[0] & /*pending*/
      32768 && (L.pending = /*pending*/
      C[15]), B[0] & /*icon_radius*/
      512 && (L.icon_radius = /*icon_radius*/
      C[9]), B[0] & /*full_screen*/
      4096 && (L.full_screen = /*full_screen*/
      C[12]), e.$set(L);
      const I = {};
      B[0] & /*_time_limit*/
      131072 && (I.time_limit = /*_time_limit*/
      C[17]), r.$set(I);
      let P = s;
      s = y(C), s === P ? k[s].p(C, B) : (Tr(), Me(k[P], 1, 1, () => {
        k[P] = null;
      }), xr(), o = k[s], o ? o.p(C, B) : (o = k[s] = w[s](C), o.c()), Ae(o, 1), o.m(l, null)), /*stream_state*/
      C[14] === "closed" ? D ? (D.p(C, B), B[0] & /*stream_state*/
      16384 && Ae(D, 1)) : (D = rd(C), D.c(), Ae(D, 1), D.m(i, c)) : D && (Tr(), Me(D, 1, 1, () => {
        D = null;
      }), xr()), /*stream_state*/
      C[14] === "open" && /*mode*/
      C[1] === "send-receive" ? E ? (E.p(C, B), B[0] & /*stream_state, mode*/
      16386 && Ae(E, 1)) : (E = nd(C), E.c(), Ae(E, 1), E.m(i, d)) : E && (Tr(), Me(E, 1, 1, () => {
        E = null;
      }), xr()), B[0] & /*stream_state, mode*/
      16386 && (f = /*stream_state*/
      C[14] === "open" && /*mode*/
      C[1].includes("send")), f ? T ? (T.p(C, B), B[0] & /*stream_state, mode*/
      16386 && Ae(T, 1)) : (T = ad(C), T.c(), Ae(T, 1), T.m(i, p)) : T && (Tr(), Me(T, 1, 1, () => {
        T = null;
      }), xr()), /*options_open*/
      C[16] && /*selected_device*/
      C[20] ? F ? F.p(C, B) : (F = id(C), F.c(), F.m(i, null)) : F && (F.d(1), F = null), (!g || B[0] & /*stopword_recognized*/
      8192) && Fr(
        i,
        "pulse",
        /*stopword_recognized*/
        C[13]
      ), (!g || B[0] & /*full_screen*/
      4096) && Fr(
        i,
        "full-screen",
        /*full_screen*/
        C[12] || /*full_screen*/
        C[12] === null
      );
    },
    i(C) {
      g || (Ae(e.$$.fragment, C), Ae(r.$$.fragment, C), Ae(o), Ae(D), Ae(E), Ae(T), g = !0);
    },
    o(C) {
      Me(e.$$.fragment, C), Me(r.$$.fragment, C), Me(o), Me(D), Me(E), Me(T), g = !1;
    },
    d(C) {
      C && (De(t), De(a), De(i)), _0(e, C), _0(r, C), k[s].d(), n[52](null), D && D.d(), E && E.d(), T && T.d(), F && F.d(), b = !1, A();
    }
  };
}
function Qb(n) {
  let e, t, r, a, i, l;
  function s(f) {
    n[48](f);
  }
  function o(f) {
    n[49](f);
  }
  function u(f) {
    n[50](f);
  }
  function c(f) {
    n[51](f);
  }
  let d = {
    start_stream: (
      /*start_stream*/
      n[27]
    ),
    access_mic: (
      /*access_mic*/
      n[26]
    ),
    audio_source_callback: (
      /*audio_source_callback*/
      n[24]
    ),
    input_audio_source_callback: (
      /*input_audio_source_callback*/
      n[32]
    ),
    toggleMuteMicrophone: (
      /*toggleMuteMicrophone*/
      n[31]
    ),
    toggleMute: (
      /*toggleMute*/
      n[30]
    ),
    on_change_cb: (
      /*on_change_cb*/
      n[5]
    ),
    mode: (
      /*mode*/
      n[1]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[7]
    ),
    pulse_color: (
      /*pulse_color*/
      n[8]
    ),
    pending: (
      /*pending*/
      n[15]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (d.value = /*value*/
    n[0]), /*stream_state*/
    n[14] !== void 0 && (d.stream_state = /*stream_state*/
    n[14]), /*is_muted*/
    n[21] !== void 0 && (d.is_muted = /*is_muted*/
    n[21]), /*is_mic_muted*/
    n[22] !== void 0 && (d.is_mic_muted = /*is_mic_muted*/
    n[22]), e = new Gb({ props: d }), ia.push(() => gl(e, "value", s)), ia.push(() => gl(e, "stream_state", o)), ia.push(() => gl(e, "is_muted", u)), ia.push(() => gl(e, "is_mic_muted", c)), {
      c() {
        g0(e.$$.fragment);
      },
      l(f) {
        p0(e.$$.fragment, f);
      },
      m(f, p) {
        v0(e, f, p), l = !0;
      },
      p(f, p) {
        const g = {};
        p[0] & /*on_change_cb*/
        32 && (g.on_change_cb = /*on_change_cb*/
        f[5]), p[0] & /*mode*/
        2 && (g.mode = /*mode*/
        f[1]), p[0] & /*icon_button_color*/
        128 && (g.icon_button_color = /*icon_button_color*/
        f[7]), p[0] & /*pulse_color*/
        256 && (g.pulse_color = /*pulse_color*/
        f[8]), p[0] & /*pending*/
        32768 && (g.pending = /*pending*/
        f[15]), !t && p[0] & /*value*/
        1 && (t = !0, g.value = /*value*/
        f[0], pl(() => t = !1)), !r && p[0] & /*stream_state*/
        16384 && (r = !0, g.stream_state = /*stream_state*/
        f[14], pl(() => r = !1)), !a && p[0] & /*is_muted*/
        2097152 && (a = !0, g.is_muted = /*is_muted*/
        f[21], pl(() => a = !1)), !i && p[0] & /*is_mic_muted*/
        4194304 && (i = !0, g.is_mic_muted = /*is_mic_muted*/
        f[22], pl(() => i = !1)), e.$set(g);
      },
      i(f) {
        l || (Ae(e.$$.fragment, f), l = !0);
      },
      o(f) {
        Me(e.$$.fragment, f), l = !1;
      },
      d(f) {
        _0(e, f);
      }
    }
  );
}
function $b(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[10].start || /*i18n*/
    n[4]("audio.record")) + ""
  ), l, s;
  return r = new Kl({}), {
    c() {
      e = At("div"), t = At("div"), g0(r.$$.fragment), a = x0(), l = wi(i), this.h();
    },
    l(o) {
      e = Dt(o, "DIV", { class: !0 });
      var u = kt(e);
      t = Dt(u, "DIV", { class: !0, title: !0 });
      var c = kt(t);
      p0(r.$$.fragment, c), c.forEach(De), a = S0(u), l = vi(u, i), u.forEach(De), this.h();
    },
    h() {
      ke(t, "class", "icon color-primary svelte-16la6ep"), ke(t, "title", "start recording"), ke(e, "class", "icon-with-text svelte-16la6ep");
    },
    m(o, u) {
      Pt(o, e, u), ht(e, t), v0(r, t, null), ht(e, a), ht(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      1040) && i !== (i = /*button_labels*/
      (o[10].start || /*i18n*/
      o[4]("audio.record")) + "") && bi(l, i);
    },
    i(o) {
      s || (Ae(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Me(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && De(e), _0(r);
    }
  };
}
function ew(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[10].stop || /*i18n*/
    n[4]("audio.stop")) + ""
  ), l, s;
  const o = [nw, rw], u = [];
  function c(d, f) {
    return (
      /*mode*/
      d[1] === "send-receive" ? 0 : 1
    );
  }
  return t = c(n), r = u[t] = o[t](n), {
    c() {
      e = At("div"), r.c(), a = x0(), l = wi(i), this.h();
    },
    l(d) {
      e = Dt(d, "DIV", { class: !0 });
      var f = kt(e);
      r.l(f), a = S0(f), l = vi(f, i), f.forEach(De), this.h();
    },
    h() {
      ke(e, "class", "icon-with-text svelte-16la6ep");
    },
    m(d, f) {
      Pt(d, e, f), u[t].m(e, null), ht(e, a), ht(e, l), s = !0;
    },
    p(d, f) {
      let p = t;
      t = c(d), t === p ? u[t].p(d, f) : (Tr(), Me(u[p], 1, 1, () => {
        u[p] = null;
      }), xr(), r = u[t], r ? r.p(d, f) : (r = u[t] = o[t](d), r.c()), Ae(r, 1), r.m(e, a)), (!s || f[0] & /*button_labels, i18n*/
      1040) && i !== (i = /*button_labels*/
      (d[10].stop || /*i18n*/
      d[4]("audio.stop")) + "") && bi(l, i);
    },
    i(d) {
      s || (Ae(r), s = !0);
    },
    o(d) {
      Me(r), s = !1;
    },
    d(d) {
      d && De(e), u[t].d();
    }
  };
}
function tw(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[10].waiting || "Connecting...") + ""
  ), l, s;
  return r = new yu({}), {
    c() {
      e = At("div"), t = At("div"), g0(r.$$.fragment), a = x0(), l = wi(i), this.h();
    },
    l(o) {
      e = Dt(o, "DIV", { class: !0 });
      var u = kt(e);
      t = Dt(u, "DIV", { class: !0, title: !0 });
      var c = kt(t);
      p0(r.$$.fragment, c), c.forEach(De), a = S0(u), l = vi(u, i), u.forEach(De), this.h();
    },
    h() {
      ke(t, "class", "icon color-primary svelte-16la6ep"), ke(t, "title", "spinner"), ke(e, "class", "icon-with-text svelte-16la6ep");
    },
    m(o, u) {
      Pt(o, e, u), ht(e, t), v0(r, t, null), ht(e, a), ht(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels*/
      1024) && i !== (i = /*button_labels*/
      (o[10].waiting || "Connecting...") + "") && bi(l, i);
    },
    i(o) {
      s || (Ae(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Me(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && De(e), _0(r);
    }
  };
}
function rw(n) {
  let e, t, r;
  return t = new Kl({}), {
    c() {
      e = At("div"), g0(t.$$.fragment), this.h();
    },
    l(a) {
      e = Dt(a, "DIV", { class: !0, title: !0 });
      var i = kt(e);
      p0(t.$$.fragment, i), i.forEach(De), this.h();
    },
    h() {
      ke(e, "class", "icon color-primary svelte-16la6ep"), ke(e, "title", "start recording");
    },
    m(a, i) {
      Pt(a, e, i), v0(t, e, null), r = !0;
    },
    p: vm,
    i(a) {
      r || (Ae(t.$$.fragment, a), r = !0);
    },
    o(a) {
      Me(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && De(e), _0(t);
    }
  };
}
function nw(n) {
  let e, t, r, a;
  return t = new ci({
    props: {
      audio_source_callback: (
        /*input_audio_source_callback*/
        n[32]
      ),
      stream_state: "open",
      icon: Kl,
      icon_button_color: (
        /*icon_button_color*/
        n[7]
      ),
      pulse_color: (
        /*pulse_color*/
        n[8]
      ),
      full_screen: (
        /*full_screen*/
        n[12]
      )
    }
  }), {
    c() {
      e = At("div"), g0(t.$$.fragment), this.h();
    },
    l(i) {
      e = Dt(i, "DIV", { class: !0, title: !0, style: !0 });
      var l = kt(e);
      p0(t.$$.fragment, l), l.forEach(De), this.h();
    },
    h() {
      ke(e, "class", "icon svelte-16la6ep"), ke(e, "title", "stop recording"), ke(e, "style", r = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`);
    },
    m(i, l) {
      Pt(i, e, l), v0(t, e, null), a = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*icon_button_color*/
      128 && (s.icon_button_color = /*icon_button_color*/
      i[7]), l[0] & /*pulse_color*/
      256 && (s.pulse_color = /*pulse_color*/
      i[8]), l[0] & /*full_screen*/
      4096 && (s.full_screen = /*full_screen*/
      i[12]), t.$set(s), (!a || l[0] & /*icon_button_color*/
      128 && r !== (r = `fill: ${/*icon_button_color*/
      i[7]}; stroke: ${/*icon_button_color*/
      i[7]}; color: ${/*icon_button_color*/
      i[7]};`)) && ke(e, "style", r);
    },
    i(i) {
      a || (Ae(t.$$.fragment, i), a = !0);
    },
    o(i) {
      Me(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && De(e), _0(t);
    }
  };
}
function rd(n) {
  let e, t, r, a, i;
  return t = new bu({}), {
    c() {
      e = At("button"), g0(t.$$.fragment), this.h();
    },
    l(l) {
      e = Dt(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = kt(e);
      p0(t.$$.fragment, s), s.forEach(De), this.h();
    },
    h() {
      ke(e, "class", "icon svelte-16la6ep"), ke(e, "aria-label", "select input source");
    },
    m(l, s) {
      Pt(l, e, s), v0(t, e, null), r = !0, a || (i = lr(
        e,
        "click",
        /*click_handler*/
        n[53]
      ), a = !0);
    },
    p: vm,
    i(l) {
      r || (Ae(t.$$.fragment, l), r = !0);
    },
    o(l) {
      Me(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && De(e), _0(t), a = !1, i();
    }
  };
}
function nd(n) {
  let e, t, r, a, i, l, s, o, u;
  const c = [iw, aw], d = [];
  function f(p, g) {
    return (
      /*is_muted*/
      p[21] ? 0 : 1
    );
  }
  return r = f(n), a = d[r] = c[r](n), {
    c() {
      e = At("button"), t = At("div"), a.c(), this.h();
    },
    l(p) {
      e = Dt(p, "BUTTON", { class: !0, "aria-label": !0 });
      var g = kt(e);
      t = Dt(g, "DIV", { class: !0, style: !0 });
      var b = kt(t);
      a.l(b), b.forEach(De), g.forEach(De), this.h();
    },
    h() {
      ke(t, "class", "icon svelte-16la6ep"), ke(t, "style", i = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`), ke(e, "class", "mute-button svelte-16la6ep"), ke(e, "aria-label", l = /*is_muted*/
      n[21] ? "unmute audio" : "mute audio");
    },
    m(p, g) {
      Pt(p, e, g), ht(e, t), d[r].m(t, null), s = !0, o || (u = lr(
        e,
        "click",
        /*toggleMute*/
        n[30]
      ), o = !0);
    },
    p(p, g) {
      let b = r;
      r = f(p), r !== b && (Tr(), Me(d[b], 1, 1, () => {
        d[b] = null;
      }), xr(), a = d[r], a || (a = d[r] = c[r](p), a.c()), Ae(a, 1), a.m(t, null)), (!s || g[0] & /*icon_button_color*/
      128 && i !== (i = `fill: ${/*icon_button_color*/
      p[7]}; stroke: ${/*icon_button_color*/
      p[7]}; color: ${/*icon_button_color*/
      p[7]};`)) && ke(t, "style", i), (!s || g[0] & /*is_muted*/
      2097152 && l !== (l = /*is_muted*/
      p[21] ? "unmute audio" : "mute audio")) && ke(e, "aria-label", l);
    },
    i(p) {
      s || (Ae(a), s = !0);
    },
    o(p) {
      Me(a), s = !1;
    },
    d(p) {
      p && De(e), d[r].d(), o = !1, u();
    }
  };
}
function aw(n) {
  let e, t;
  return e = new Sl({}), {
    c() {
      g0(e.$$.fragment);
    },
    l(r) {
      p0(e.$$.fragment, r);
    },
    m(r, a) {
      v0(e, r, a), t = !0;
    },
    i(r) {
      t || (Ae(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Me(e.$$.fragment, r), t = !1;
    },
    d(r) {
      _0(e, r);
    }
  };
}
function iw(n) {
  let e, t;
  return e = new xl({}), {
    c() {
      g0(e.$$.fragment);
    },
    l(r) {
      p0(e.$$.fragment, r);
    },
    m(r, a) {
      v0(e, r, a), t = !0;
    },
    i(r) {
      t || (Ae(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Me(e.$$.fragment, r), t = !1;
    },
    d(r) {
      _0(e, r);
    }
  };
}
function ad(n) {
  let e, t, r, a, i, l, s, o, u;
  const c = [sw, lw], d = [];
  function f(p, g) {
    return (
      /*is_mic_muted*/
      p[22] ? 0 : 1
    );
  }
  return r = f(n), a = d[r] = c[r](n), {
    c() {
      e = At("button"), t = At("div"), a.c(), this.h();
    },
    l(p) {
      e = Dt(p, "BUTTON", { class: !0, "aria-label": !0 });
      var g = kt(e);
      t = Dt(g, "DIV", { class: !0, style: !0 });
      var b = kt(t);
      a.l(b), b.forEach(De), g.forEach(De), this.h();
    },
    h() {
      ke(t, "class", "icon svelte-16la6ep"), ke(t, "style", i = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`), ke(e, "class", "mute-button svelte-16la6ep"), ke(e, "aria-label", l = /*is_mic_muted*/
      n[22] ? "unmute mic" : "mute mic");
    },
    m(p, g) {
      Pt(p, e, g), ht(e, t), d[r].m(t, null), s = !0, o || (u = lr(
        e,
        "click",
        /*toggleMuteMicrophone*/
        n[31]
      ), o = !0);
    },
    p(p, g) {
      let b = r;
      r = f(p), r !== b && (Tr(), Me(d[b], 1, 1, () => {
        d[b] = null;
      }), xr(), a = d[r], a || (a = d[r] = c[r](p), a.c()), Ae(a, 1), a.m(t, null)), (!s || g[0] & /*icon_button_color*/
      128 && i !== (i = `fill: ${/*icon_button_color*/
      p[7]}; stroke: ${/*icon_button_color*/
      p[7]}; color: ${/*icon_button_color*/
      p[7]};`)) && ke(t, "style", i), (!s || g[0] & /*is_mic_muted*/
      4194304 && l !== (l = /*is_mic_muted*/
      p[22] ? "unmute mic" : "mute mic")) && ke(e, "aria-label", l);
    },
    i(p) {
      s || (Ae(a), s = !0);
    },
    o(p) {
      Me(a), s = !1;
    },
    d(p) {
      p && De(e), d[r].d(), o = !1, u();
    }
  };
}
function lw(n) {
  let e, t;
  return e = new fa({}), {
    c() {
      g0(e.$$.fragment);
    },
    l(r) {
      p0(e.$$.fragment, r);
    },
    m(r, a) {
      v0(e, r, a), t = !0;
    },
    i(r) {
      t || (Ae(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Me(e.$$.fragment, r), t = !1;
    },
    d(r) {
      _0(e, r);
    }
  };
}
function sw(n) {
  let e, t;
  return e = new gu({}), {
    c() {
      g0(e.$$.fragment);
    },
    l(r) {
      p0(e.$$.fragment, r);
    },
    m(r, a) {
      v0(e, r, a), t = !0;
    },
    i(r) {
      t || (Ae(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Me(e.$$.fragment, r), t = !1;
    },
    d(r) {
      _0(e, r);
    }
  };
}
function id(n) {
  let e, t, r;
  function a(s, o) {
    return (
      /*available_audio_devices*/
      s[19].length === 0 ? uw : ow
    );
  }
  let i = a(n), l = i(n);
  return {
    c() {
      e = At("select"), l.c(), this.h();
    },
    l(s) {
      e = Dt(s, "SELECT", { class: !0, "aria-label": !0 });
      var o = kt(e);
      l.l(o), o.forEach(De), this.h();
    },
    h() {
      ke(e, "class", "select-wrap svelte-16la6ep"), ke(e, "aria-label", "select source"), Fr(
        e,
        "full-screen",
        /*full_screen*/
        n[12] || /*full_screen*/
        n[12] === null
      );
    },
    m(s, o) {
      Pt(s, e, o), l.m(e, null), t || (r = [
        jb(fw.call(
          null,
          e,
          /*handle_click_outside*/
          n[28]
        )),
        lr(
          e,
          "change",
          /*handle_device_change*/
          n[29]
        )
      ], t = !0);
    },
    p(s, o) {
      i === (i = a(s)) && l ? l.p(s, o) : (l.d(1), l = i(s), l && (l.c(), l.m(e, null))), o[0] & /*full_screen*/
      4096 && Fr(
        e,
        "full-screen",
        /*full_screen*/
        s[12] || /*full_screen*/
        s[12] === null
      );
    },
    d(s) {
      s && De(e), l.d(), t = !1, bm(r);
    }
  };
}
function ow(n) {
  let e, t = $h(
    /*available_audio_devices*/
    n[19]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = ld(ed(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Qh();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Qh();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      Pt(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_audio_devices, selected_device*/
      1572864) {
        t = $h(
          /*available_audio_devices*/
          a[19]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = ed(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = ld(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && De(e), Wb(r, a);
    }
  };
}
function uw(n) {
  let e, t = (
    /*i18n*/
    n[4]("common.no_devices") + ""
  ), r;
  return {
    c() {
      e = At("option"), r = wi(t), this.h();
    },
    l(a) {
      e = Dt(a, "OPTION", { class: !0 });
      var i = kt(e);
      r = vi(i, t), i.forEach(De), this.h();
    },
    h() {
      e.__value = "", vu(e, e.__value), ke(e, "class", "svelte-16la6ep");
    },
    m(a, i) {
      Pt(a, e, i), ht(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      16 && t !== (t = /*i18n*/
      a[4]("common.no_devices") + "") && bi(r, t);
    },
    d(a) {
      a && De(e);
    }
  };
}
function ld(n) {
  let e, t = (
    /*device*/
    n[59].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = At("option"), r = wi(t), a = x0(), this.h();
    },
    l(s) {
      e = Dt(s, "OPTION", { class: !0 });
      var o = kt(e);
      r = vi(o, t), a = S0(o), o.forEach(De), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[59].deviceId, vu(e, e.__value), e.selected = l = /*selected_device*/
      n[20].deviceId === /*device*/
      n[59].deviceId, ke(e, "class", "svelte-16la6ep");
    },
    m(s, o) {
      Pt(s, e, o), ht(e, r), ht(e, a);
    },
    p(s, o) {
      o[0] & /*available_audio_devices*/
      524288 && t !== (t = /*device*/
      s[59].label + "") && bi(r, t), o[0] & /*available_audio_devices*/
      524288 && i !== (i = /*device*/
      s[59].deviceId) && (e.__value = i, vu(e, e.__value)), o[0] & /*selected_device, available_audio_devices*/
      1572864 && l !== (l = /*selected_device*/
      s[20].deviceId === /*device*/
      s[59].deviceId) && (e.selected = l);
    },
    d(s) {
      s && De(e);
    }
  };
}
function cw(n) {
  let e, t, r, a, i, l, s, o, u, c = (
    /*variant*/
    n[11] !== "textbox" && td(n)
  );
  const d = [Qb, Jb], f = [];
  function p(g, b) {
    return (
      /*variant*/
      g[11] === "textbox" ? 0 : 1
    );
  }
  return i = p(n), l = f[i] = d[i](n), {
    c() {
      c && c.c(), e = x0(), t = At("div"), r = At("audio"), a = x0(), l.c(), this.h();
    },
    l(g) {
      c && c.l(g), e = S0(g), t = Dt(g, "DIV", { class: !0 });
      var b = kt(t);
      r = Dt(b, "AUDIO", { class: !0 }), kt(r).forEach(De), a = S0(b), l.l(b), b.forEach(De), this.h();
    },
    h() {
      ke(r, "class", "standard-player svelte-16la6ep"), Fr(r, "hidden", !0), ke(t, "class", "audio-container svelte-16la6ep"), Fr(
        t,
        "full-screen",
        /*full_screen*/
        n[12] || /*full_screen*/
        n[12] === null
      );
    },
    m(g, b) {
      c && c.m(g, b), Pt(g, e, b), Pt(g, t, b), ht(t, r), n[45](r), ht(t, a), f[i].m(t, null), s = !0, o || (u = [
        lr(
          r,
          "load",
          /*load_handler*/
          n[42]
        ),
        lr(
          r,
          "ended",
          /*ended_handler*/
          n[46]
        ),
        lr(
          r,
          "play",
          /*play_handler*/
          n[47]
        ),
        lr(
          r,
          "start_recording",
          /*start_recording_handler*/
          n[43]
        ),
        lr(
          r,
          "stop_recording",
          /*stop_recording_handler*/
          n[44]
        )
      ], o = !0);
    },
    p(g, b) {
      /*variant*/
      g[11] !== "textbox" ? c ? (c.p(g, b), b[0] & /*variant*/
      2048 && Ae(c, 1)) : (c = td(g), c.c(), Ae(c, 1), c.m(e.parentNode, e)) : c && (Tr(), Me(c, 1, 1, () => {
        c = null;
      }), xr());
      let A = i;
      i = p(g), i === A ? f[i].p(g, b) : (Tr(), Me(f[A], 1, 1, () => {
        f[A] = null;
      }), xr(), l = f[i], l ? l.p(g, b) : (l = f[i] = d[i](g), l.c()), Ae(l, 1), l.m(t, null)), (!s || b[0] & /*full_screen*/
      4096) && Fr(
        t,
        "full-screen",
        /*full_screen*/
        g[12] || /*full_screen*/
        g[12] === null
      );
    },
    i(g) {
      s || (Ae(c), Ae(l), s = !0);
    },
    o(g) {
      Me(c), Me(l), s = !1;
    },
    d(g) {
      g && (De(e), De(t)), c && c.d(g), n[45](null), f[i].d(), o = !1, bm(u);
    }
  };
}
function fw(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function hw(n, e, t) {
  var r = this && this.__awaiter || function(H, Ce, we, xt) {
    function t0(c0) {
      return c0 instanceof we ? c0 : new we(function(Vt) {
        Vt(c0);
      });
    }
    return new (we || (we = Promise))(function(c0, Vt) {
      function Q0(q0) {
        try {
          r0(xt.next(q0));
        } catch (yn) {
          Vt(yn);
        }
      }
      function gt(q0) {
        try {
          r0(xt.throw(q0));
        } catch (yn) {
          Vt(yn);
        }
      }
      function r0(q0) {
        q0.done ? c0(q0.value) : t0(q0.value).then(Q0, gt);
      }
      r0((xt = xt.apply(H, Ce || [])).next());
    });
  };
  let { mode: a } = e, { value: i = null } = e, { label: l = void 0 } = e, { show_label: s = !0 } = e, { rtc_configuration: o = null } = e, { i18n: u } = e, { time_limit: c = null } = e, { track_constraints: d = {} } = e, { rtp_params: f = {} } = e, { on_change_cb: p } = e, { reject_cb: g } = e, { icon: b = void 0 } = e, { icon_button_color: A = "var(--color-accent)" } = e, { pulse_color: w = "var(--color-accent)" } = e, { icon_radius: k = 50 } = e, { button_labels: y } = e, { variant: D = "wave" } = e, { connection_state: E = "unset" } = e, { full_screen: T = !0 } = e, F = !1, C = !1, B;
  Kb(() => {
    (i == null ? void 0 : i.webrtc_id) === "__webrtc_value__" && t(40, B = new Audio("https://huggingface.co/datasets/freddyaboulton/bucket/resolve/main/pop-sounds.mp3")), Se();
  });
  let L = (H) => {
    H === "stopword" ? (t(13, C = !0), setTimeout(
      () => {
        t(13, C = !1);
      },
      3e3
    )) : H.type === "end_stream" ? (t(14, O = "closed"), l0(q), p(H)) : (console.debug("calling on_change_cb with msg", H), p(H));
  }, I = !1, P = null, { server: $ } = e, O = "closed", K, q, he = null, ee, _e, de = null, re = !1, oe = !1, ve = !1, Be;
  const W = () => a === "send" ? ee : K.srcObject, pe = Zb();
  function Se() {
    return r(this, void 0, void 0, function* () {
      try {
        const Ce = de ? Object.assign(
          {
            deviceId: { exact: de.deviceId }
          },
          d
        ) : d;
        ee = yield navigator.mediaDevices.getUserMedia({ audio: Ce });
      } catch (Ce) {
        if (!navigator.mediaDevices) {
          pe("error", u("audio.no_device_support"));
          return;
        }
        if (Ce instanceof DOMException && Ce.name == "NotAllowedError") {
          pe("error", u("audio.allow_recording_access"));
          return;
        }
        throw Ce;
      }
      t(19, _e = sm(yield lm(), "audioinput")), t(41, re = !0);
      const H = ee.getTracks().map((Ce) => {
        var we;
        return (we = Ce.getSettings()) === null || we === void 0 ? void 0 : we.deviceId;
      })[0];
      t(20, de = H && _e.find((Ce) => Ce.deviceId === H) || _e[0]);
    });
  }
  function Ie() {
    return r(this, void 0, void 0, function* () {
      if (O === "open") {
        pe("stop_recording"), l0(q), t(14, O = "closed"), t(17, P = null), yield Se(), yield $.quit_output_stream({ webrtc_id: he });
        return;
      }
      pe("start_recording"), he = Math.random().toString(36).substring(2), t(0, i.webrtc_id = he, i), t(14, O = "waiting"), yield $.turn().then((we) => {
        if (we.error) {
          pe("error", we.error);
          return;
        }
        t(34, o = we), console.info("rtc_configuration", we);
      }), q = new RTCPeerConnection(o), console.info("created"), q.addEventListener("connectionstatechange", (we) => r(this, void 0, void 0, function* () {
        switch (q.connectionState) {
          case "connected":
            console.info("connected"), t(14, O = "open"), t(17, P = c);
            break;
          case "disconnected":
            console.info("closed"), t(14, O = "closed"), t(17, P = null), l0(q);
            break;
          case "failed":
            console.info("failed"), t(14, O = "closed"), t(17, P = null), pe("error", "Connection failed!"), l0(q);
            break;
        }
      })), ee = null;
      try {
        yield Se();
      } catch (we) {
        if (!navigator.mediaDevices) {
          pe("error", u("audio.no_device_support"));
          return;
        }
        if (we instanceof DOMException && we.name == "NotAllowedError") {
          pe("error", u("audio.allow_recording_access"));
          return;
        }
        throw we;
      }
      if (ee == null) return;
      const H = (we) => {
        we.type === "log" && we.data === "pause_detected" ? t(15, F = !0) : we.type === "log" && we.data === "response_starting" && t(
          15,
          F = !1
        );
      }, Ce = setTimeout(
        () => {
          L({ type: "connection_timeout" });
        },
        1e4
      );
      us(ee, q, a === "send" ? null : K, $.offer, he, "audio", L, f, H, g).then((we) => {
        clearTimeout(Ce), q = we;
      }).catch(() => {
        console.info("catching"), clearTimeout(Ce), t(14, O = "closed");
      });
    });
  }
  function V(H) {
    H.preventDefault(), H.stopPropagation(), t(16, I = !1);
  }
  const ge = (H) => r(void 0, void 0, void 0, function* () {
    const we = H.target.value;
    ee = yield navigator.mediaDevices.getUserMedia({
      audio: Object.assign({ deviceId: { exact: we } }, d)
    }), t(20, de = _e.find((xt) => xt.deviceId === we) || null), t(16, I = !1);
  });
  function Ee() {
    K && (t(18, K.muted = !K.muted, K), t(21, oe = K.muted));
  }
  function Le() {
    if (ee && ee.getAudioTracks().length > 0) {
      const H = ee.getAudioTracks()[0];
      H.enabled = !H.enabled, t(22, ve = !H.enabled);
    }
  }
  function st() {
    return ee;
  }
  function Pe(H) {
    Uo.call(this, n, H);
  }
  function Ve(H) {
    Uo.call(this, n, H);
  }
  function Et(H) {
    Uo.call(this, n, H);
  }
  function St(H) {
    ia[H ? "unshift" : "push"](() => {
      K = H, t(18, K);
    });
  }
  const pt = () => pe("stop"), Je = () => pe("play");
  function w0(H) {
    i = H, t(0, i);
  }
  function Gr(H) {
    O = H, t(14, O);
  }
  function wn(H) {
    oe = H, t(21, oe);
  }
  function R(H) {
    ve = H, t(22, ve);
  }
  function G(H) {
    ia[H ? "unshift" : "push"](() => {
      Be = H, t(23, Be);
    });
  }
  const Fe = () => t(16, I = !0);
  return n.$$set = (H) => {
    "mode" in H && t(1, a = H.mode), "value" in H && t(0, i = H.value), "label" in H && t(2, l = H.label), "show_label" in H && t(3, s = H.show_label), "rtc_configuration" in H && t(34, o = H.rtc_configuration), "i18n" in H && t(4, u = H.i18n), "time_limit" in H && t(35, c = H.time_limit), "track_constraints" in H && t(36, d = H.track_constraints), "rtp_params" in H && t(37, f = H.rtp_params), "on_change_cb" in H && t(5, p = H.on_change_cb), "reject_cb" in H && t(38, g = H.reject_cb), "icon" in H && t(6, b = H.icon), "icon_button_color" in H && t(7, A = H.icon_button_color), "pulse_color" in H && t(8, w = H.pulse_color), "icon_radius" in H && t(9, k = H.icon_radius), "button_labels" in H && t(10, y = H.button_labels), "variant" in H && t(11, D = H.variant), "connection_state" in H && t(33, E = H.connection_state), "full_screen" in H && t(12, T = H.full_screen), "server" in H && t(39, $ = H.server);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*stopword_recognized*/
    8192 | n.$$.dirty[1] & /*notification_sound*/
    512 && C && B.play(), n.$$.dirty[0] & /*stream_state*/
    16384 | n.$$.dirty[1] & /*connection_state, mic_accessed*/
    1028 && (E === "open" && re && O === "closed" ? (console.log("opening connection"), Ie(), t(33, E = "unset")) : E === "closed" && re && O === "open" && (console.log("closing connection"), Ie(), t(33, E = "unset")));
  }, [
    i,
    a,
    l,
    s,
    u,
    p,
    b,
    A,
    w,
    k,
    y,
    D,
    T,
    C,
    O,
    F,
    I,
    P,
    K,
    _e,
    de,
    oe,
    ve,
    Be,
    W,
    pe,
    Se,
    Ie,
    V,
    ge,
    Ee,
    Le,
    st,
    E,
    o,
    c,
    d,
    f,
    g,
    $,
    B,
    re,
    Pe,
    Ve,
    Et,
    St,
    pt,
    Je,
    w0,
    Gr,
    wn,
    R,
    G,
    Fe
  ];
}
class dw extends Vb {
  constructor(e) {
    super(), Xb(
      this,
      e,
      hw,
      cw,
      Yb,
      {
        mode: 1,
        value: 0,
        label: 2,
        show_label: 3,
        rtc_configuration: 34,
        i18n: 4,
        time_limit: 35,
        track_constraints: 36,
        rtp_params: 37,
        on_change_cb: 5,
        reject_cb: 38,
        icon: 6,
        icon_button_color: 7,
        pulse_color: 8,
        icon_radius: 9,
        button_labels: 10,
        variant: 11,
        connection_state: 33,
        full_screen: 12,
        server: 39
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: mw,
  add_flush_callback: ps,
  assign: pw,
  bind: gs,
  binding_callbacks: _s,
  check_outros: gw,
  claim_component: On,
  claim_space: _w,
  create_component: qn,
  destroy_component: Pn,
  detach: sd,
  empty: od,
  flush: Ne,
  get_spread_object: vw,
  get_spread_update: bw,
  group_outros: ww,
  init: yw,
  insert_hydration: ud,
  mount_component: Hn,
  safe_not_equal: kw,
  space: Dw,
  transition_in: Br,
  transition_out: Ir
} = window.__gradio__svelte__internal;
function Aw(n) {
  let e, t, r;
  function a(l) {
    n[50](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[27]
    ),
    label: (
      /*label*/
      n[6]
    ),
    show_label: (
      /*show_label*/
      n[7]
    ),
    server: (
      /*server*/
      n[11]
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
      n[28]
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
      n[5]
    ),
    variant: (
      /*variant*/
      n[25]
    ),
    connection_state: (
      /*connection_state*/
      n[0]
    ),
    full_screen: (
      /*full_screen*/
      n[26]
    )
  };
  return (
    /*value*/
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new dw({ props: i }), _s.push(() => gs(e, "value", a)), e.$on(
      "start_recording",
      /*start_recording_handler_1*/
      n[51]
    ), e.$on(
      "stop_recording",
      /*stop_recording_handler_1*/
      n[52]
    ), e.$on(
      "tick",
      /*tick_handler_3*/
      n[53]
    ), e.$on(
      "error",
      /*error_handler_3*/
      n[54]
    ), e.$on(
      "warning",
      /*warning_handler*/
      n[55]
    ), {
      c() {
        qn(e.$$.fragment);
      },
      l(l) {
        On(e.$$.fragment, l);
      },
      m(l, s) {
        Hn(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        64 && (o.label = /*label*/
        l[6]), s[0] & /*show_label*/
        128 && (o.show_label = /*show_label*/
        l[7]), s[0] & /*server*/
        2048 && (o.server = /*server*/
        l[11]), s[0] & /*rtc_configuration*/
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
        32 && (o.button_labels = /*button_labels*/
        l[5]), s[0] & /*variant*/
        33554432 && (o.variant = /*variant*/
        l[25]), s[0] & /*connection_state*/
        1 && (o.connection_state = /*connection_state*/
        l[0]), s[0] & /*full_screen*/
        67108864 && (o.full_screen = /*full_screen*/
        l[26]), !t && s[0] & /*value*/
        2 && (t = !0, o.value = /*value*/
        l[1], ps(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Br(e.$$.fragment, l), r = !0);
      },
      o(l) {
        Ir(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Pn(e, l);
      }
    }
  );
}
function Ew(n) {
  let e, t, r;
  function a(l) {
    n[39](l);
  }
  let i = {
    label: (
      /*label*/
      n[6]
    ),
    show_label: (
      /*show_label*/
      n[7]
    ),
    active_source: "webcam",
    include_audio: (
      /*modality*/
      n[17] === "audio-video"
    ),
    server: (
      /*server*/
      n[11]
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
      n[27]
    ),
    reject_cb: (
      /*reject_cb*/
      n[28]
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
      n[5]
    ),
    connection_state: (
      /*connection_state*/
      n[0]
    ),
    full_screen: (
      /*full_screen*/
      n[26]
    ),
    i18n: (
      /*gradio*/
      n[14].i18n
    ),
    stream_handler: (
      /*func*/
      n[38]
    ),
    $$slots: { default: [Tw] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new m9({ props: i }), _s.push(() => gs(e, "value", a)), e.$on(
      "clear",
      /*clear_handler*/
      n[40]
    ), e.$on(
      "play",
      /*play_handler*/
      n[41]
    ), e.$on(
      "pause",
      /*pause_handler*/
      n[42]
    ), e.$on(
      "upload",
      /*upload_handler*/
      n[43]
    ), e.$on(
      "stop",
      /*stop_handler*/
      n[44]
    ), e.$on(
      "end",
      /*end_handler*/
      n[45]
    ), e.$on(
      "start_recording",
      /*start_recording_handler*/
      n[46]
    ), e.$on(
      "stop_recording",
      /*stop_recording_handler*/
      n[47]
    ), e.$on(
      "tick",
      /*tick_handler_2*/
      n[48]
    ), e.$on(
      "error",
      /*error_handler_2*/
      n[49]
    ), {
      c() {
        qn(e.$$.fragment);
      },
      l(l) {
        On(e.$$.fragment, l);
      },
      m(l, s) {
        Hn(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        64 && (o.label = /*label*/
        l[6]), s[0] & /*show_label*/
        128 && (o.show_label = /*show_label*/
        l[7]), s[0] & /*modality*/
        131072 && (o.include_audio = /*modality*/
        l[17] === "audio-video"), s[0] & /*server*/
        2048 && (o.server = /*server*/
        l[11]), s[0] & /*rtc_configuration*/
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
        32 && (o.button_labels = /*button_labels*/
        l[5]), s[0] & /*connection_state*/
        1 && (o.connection_state = /*connection_state*/
        l[0]), s[0] & /*full_screen*/
        67108864 && (o.full_screen = /*full_screen*/
        l[26]), s[0] & /*gradio*/
        16384 && (o.i18n = /*gradio*/
        l[14].i18n), s[0] & /*gradio*/
        16384 && (o.stream_handler = /*func*/
        l[38]), s[0] & /*gradio*/
        16384 | s[1] & /*$$scope*/
        33554432 && (o.$$scope = { dirty: s, ctx: l }), !t && s[0] & /*value*/
        2 && (t = !0, o.value = /*value*/
        l[1], ps(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Br(e.$$.fragment, l), r = !0);
      },
      o(l) {
        Ir(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Pn(e, l);
      }
    }
  );
}
function Sw(n) {
  let e, t, r;
  function a(l) {
    n[35](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[27]
    ),
    label: (
      /*label*/
      n[6]
    ),
    show_label: (
      /*show_label*/
      n[7]
    ),
    server: (
      /*server*/
      n[11]
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
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new u_({ props: i }), _s.push(() => gs(e, "value", a)), e.$on(
      "tick",
      /*tick_handler_1*/
      n[36]
    ), e.$on(
      "error",
      /*error_handler_1*/
      n[37]
    ), {
      c() {
        qn(e.$$.fragment);
      },
      l(l) {
        On(e.$$.fragment, l);
      },
      m(l, s) {
        Hn(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        64 && (o.label = /*label*/
        l[6]), s[0] & /*show_label*/
        128 && (o.show_label = /*show_label*/
        l[7]), s[0] & /*server*/
        2048 && (o.server = /*server*/
        l[11]), s[0] & /*rtc_configuration*/
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
        2 && (t = !0, o.value = /*value*/
        l[1], ps(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Br(e.$$.fragment, l), r = !0);
      },
      o(l) {
        Ir(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Pn(e, l);
      }
    }
  );
}
function xw(n) {
  let e, t, r;
  function a(l) {
    n[32](l);
  }
  let i = {
    on_change_cb: (
      /*on_change_cb*/
      n[27]
    ),
    label: (
      /*label*/
      n[6]
    ),
    show_label: (
      /*show_label*/
      n[7]
    ),
    server: (
      /*server*/
      n[11]
    ),
    rtc_configuration: (
      /*rtc_configuration*/
      n[15]
    )
  };
  return (
    /*value*/
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new N9({ props: i }), _s.push(() => gs(e, "value", a)), e.$on(
      "tick",
      /*tick_handler*/
      n[33]
    ), e.$on(
      "error",
      /*error_handler*/
      n[34]
    ), {
      c() {
        qn(e.$$.fragment);
      },
      l(l) {
        On(e.$$.fragment, l);
      },
      m(l, s) {
        Hn(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        64 && (o.label = /*label*/
        l[6]), s[0] & /*show_label*/
        128 && (o.show_label = /*show_label*/
        l[7]), s[0] & /*server*/
        2048 && (o.server = /*server*/
        l[11]), s[0] & /*rtc_configuration*/
        32768 && (o.rtc_configuration = /*rtc_configuration*/
        l[15]), !t && s[0] & /*value*/
        2 && (t = !0, o.value = /*value*/
        l[1], ps(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Br(e.$$.fragment, l), r = !0);
      },
      o(l) {
        Ir(e.$$.fragment, l), r = !1;
      },
      d(l) {
        Pn(e, l);
      }
    }
  );
}
function Tw(n) {
  let e, t;
  return e = new X8({
    props: {
      i18n: (
        /*gradio*/
        n[14].i18n
      ),
      type: "video"
    }
  }), {
    c() {
      qn(e.$$.fragment);
    },
    l(r) {
      On(e.$$.fragment, r);
    },
    m(r, a) {
      Hn(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*gradio*/
      16384 && (i.i18n = /*gradio*/
      r[14].i18n), e.$set(i);
    },
    i(r) {
      t || (Br(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ir(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pn(e, r);
    }
  };
}
function Fw(n) {
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
    n[8]
  ];
  let o = {};
  for (let f = 0; f < s.length; f += 1)
    o = pw(o, s[f]);
  e = new cp({ props: o }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[31]
  );
  const u = [xw, Sw, Ew, Aw], c = [];
  function d(f, p) {
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
  return ~(r = d(n)) && (a = c[r] = u[r](n)), {
    c() {
      qn(e.$$.fragment), t = Dw(), a && a.c(), i = od();
    },
    l(f) {
      On(e.$$.fragment, f), t = _w(f), a && a.l(f), i = od();
    },
    m(f, p) {
      Hn(e, f, p), ud(f, t, p), ~r && c[r].m(f, p), ud(f, i, p), l = !0;
    },
    p(f, p) {
      const g = p[0] & /*gradio, loading_status*/
      16640 ? bw(s, [
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
        256 && vw(
          /*loading_status*/
          f[8]
        )
      ]) : {};
      e.$set(g);
      let b = r;
      r = d(f), r === b ? ~r && c[r].p(f, p) : (a && (ww(), Ir(c[b], 1, 1, () => {
        c[b] = null;
      }), gw()), ~r ? (a = c[r], a ? a.p(f, p) : (a = c[r] = u[r](f), a.c()), Br(a, 1), a.m(i.parentNode, i)) : a = null);
    },
    i(f) {
      l || (Br(e.$$.fragment, f), Br(a), l = !0);
    },
    o(f) {
      Ir(e.$$.fragment, f), Ir(a), l = !1;
    },
    d(f) {
      f && (sd(t), sd(i)), Pn(e, f), ~r && c[r].d(f);
    }
  };
}
function Cw(n) {
  let e, t;
  return e = new hd({
    props: {
      visible: (
        /*visible*/
        n[4]
      ),
      variant: "solid",
      border_mode: "base",
      padding: !1,
      elem_id: (
        /*elem_id*/
        n[2]
      ),
      elem_classes: (
        /*elem_classes*/
        n[3]
      ),
      height: (
        /*height*/
        n[9]
      ),
      width: (
        /*width*/
        n[10]
      ),
      container: (
        /*full_screen*/
        !n[26]
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
      $$slots: { default: [Fw] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qn(e.$$.fragment);
    },
    l(r) {
      On(e.$$.fragment, r);
    },
    m(r, a) {
      Hn(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*visible*/
      16 && (i.visible = /*visible*/
      r[4]), a[0] & /*elem_id*/
      4 && (i.elem_id = /*elem_id*/
      r[2]), a[0] & /*elem_classes*/
      8 && (i.elem_classes = /*elem_classes*/
      r[3]), a[0] & /*height*/
      512 && (i.height = /*height*/
      r[9]), a[0] & /*width*/
      1024 && (i.width = /*width*/
      r[10]), a[0] & /*full_screen*/
      67108864 && (i.container = /*full_screen*/
      !r[26]), a[0] & /*scale*/
      4096 && (i.scale = /*scale*/
      r[12]), a[0] & /*min_width*/
      8192 && (i.min_width = /*min_width*/
      r[13]), a[0] & /*label, show_label, server, rtc_configuration, value, gradio, mode, modality, icon, icon_button_color, pulse_color, icon_radius, time_limit, track_constraints, rtp_params, button_labels, connection_state, full_screen, variant, loading_status*/
      134203875 | a[1] & /*$$scope*/
      33554432 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (Br(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ir(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Pn(e, r);
    }
  };
}
function Mw(n, e, t) {
  let { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { visible: i = !0 } = e, { button_labels: l } = e, { label: s } = e, { root: o } = e, { show_label: u } = e, { loading_status: c } = e, { height: d } = e, { width: f } = e, { server: p } = e, { container: g = !1 } = e, { scale: b = null } = e, { min_width: A = void 0 } = e, { gradio: w } = e, { rtc_configuration: k } = e, { time_limit: y = null } = e, { modality: D = "video" } = e, { mode: E = "send-receive" } = e, { rtp_params: T = {} } = e, { track_constraints: F = {} } = e, { icon: C = void 0 } = e, { icon_button_color: B = "var(--color-accent)" } = e, { pulse_color: L = "var(--color-accent)" } = e, { icon_radius: I = 50 } = e, { variant: P = "wave" } = e, { connection_state: $ = "unset" } = e, { full_screen: O = null } = e, { value: K = P === "textbox" || (E === "send-receive" || E == "send") && D === "audio" ? {
    textbox: "",
    webrtc_id: "__webrtc_value__"
  } : "__webrtc_value__" } = e;
  const q = (R) => {
    console.log("on_change_cb in index.svelte", R), (R == null ? void 0 : R.type) === "info" || (R == null ? void 0 : R.type) === "warning" || (R == null ? void 0 : R.type) === "error" ? w.dispatch(
      (R == null ? void 0 : R.type) === "error" ? "error" : "warning",
      (R == null ? void 0 : R.data) || (R == null ? void 0 : R.message)
    ) : (R == null ? void 0 : R.type) === "end_stream" ? w.dispatch("warning", R.data) : (R == null ? void 0 : R.type) === "fetch_output" ? w.dispatch("state_change") : (R == null ? void 0 : R.type) === "send_input" ? w.dispatch("tick") : (R == null ? void 0 : R.type) === "submit" ? (console.log("submit in index.svelte", R.data), w.dispatch("submit", R.data)) : (R == null ? void 0 : R.type) === "connection_timeout" ? w.dispatch("warning", "Taking a while to connect. Are you on a VPN?") : (R == null ? void 0 : R.type) === "update_connection" && (console.log("update_connection in index.svelte", R.data), t(0, $ = R.data)), R.type === "state_change" && w.dispatch(R === "change" ? "state_change" : "tick");
  }, he = (R) => {
    var G, Fe;
    R.status === "failed" && ((G = R.meta) === null || G === void 0 ? void 0 : G.error) === "concurrency_limit_reached" ? w.dispatch("error", "Too many concurrent connections. Please try again later!") : R.status === "failed" && ((Fe = R.meta) === null || Fe === void 0 ? void 0 : Fe.error) === "connection_already_exists" ? w.dispatch("error", "Connection already exists") : w.dispatch("error", "Unexpected server error");
  }, ee = () => w.dispatch("clear_status", c);
  function _e(R) {
    K = R, t(1, K);
  }
  const de = () => w.dispatch("tick"), re = ({ detail: R }) => w.dispatch("error", R);
  function oe(R) {
    K = R, t(1, K);
  }
  const ve = () => w.dispatch("tick"), Be = ({ detail: R }) => w.dispatch("error", R), W = (...R) => w.client.stream(...R);
  function pe(R) {
    K = R, t(1, K);
  }
  const Se = () => w.dispatch("clear"), Ie = () => w.dispatch("play"), V = () => w.dispatch("pause"), ge = () => w.dispatch("upload"), Ee = () => w.dispatch("stop"), Le = () => w.dispatch("end"), st = () => w.dispatch("start_recording"), Pe = () => w.dispatch("stop_recording"), Ve = () => w.dispatch("tick"), Et = ({ detail: R }) => w.dispatch("error", R);
  function St(R) {
    K = R, t(1, K);
  }
  const pt = () => w.dispatch("start_recording"), Je = () => w.dispatch("stop_recording"), w0 = () => w.dispatch("tick"), Gr = ({ detail: R }) => w.dispatch("error", R), wn = ({ detail: R }) => w.dispatch("warning", R);
  return n.$$set = (R) => {
    "elem_id" in R && t(2, r = R.elem_id), "elem_classes" in R && t(3, a = R.elem_classes), "visible" in R && t(4, i = R.visible), "button_labels" in R && t(5, l = R.button_labels), "label" in R && t(6, s = R.label), "root" in R && t(29, o = R.root), "show_label" in R && t(7, u = R.show_label), "loading_status" in R && t(8, c = R.loading_status), "height" in R && t(9, d = R.height), "width" in R && t(10, f = R.width), "server" in R && t(11, p = R.server), "container" in R && t(30, g = R.container), "scale" in R && t(12, b = R.scale), "min_width" in R && t(13, A = R.min_width), "gradio" in R && t(14, w = R.gradio), "rtc_configuration" in R && t(15, k = R.rtc_configuration), "time_limit" in R && t(16, y = R.time_limit), "modality" in R && t(17, D = R.modality), "mode" in R && t(18, E = R.mode), "rtp_params" in R && t(19, T = R.rtp_params), "track_constraints" in R && t(20, F = R.track_constraints), "icon" in R && t(21, C = R.icon), "icon_button_color" in R && t(22, B = R.icon_button_color), "pulse_color" in R && t(23, L = R.pulse_color), "icon_radius" in R && t(24, I = R.icon_radius), "variant" in R && t(25, P = R.variant), "connection_state" in R && t(0, $ = R.connection_state), "full_screen" in R && t(26, O = R.full_screen), "value" in R && t(1, K = R.value);
  }, [
    $,
    K,
    r,
    a,
    i,
    l,
    s,
    u,
    c,
    d,
    f,
    p,
    b,
    A,
    w,
    k,
    y,
    D,
    E,
    T,
    F,
    C,
    B,
    L,
    I,
    P,
    O,
    q,
    he,
    o,
    g,
    ee,
    _e,
    de,
    re,
    oe,
    ve,
    Be,
    W,
    pe,
    Se,
    Ie,
    V,
    ge,
    Ee,
    Le,
    st,
    Pe,
    Ve,
    Et,
    St,
    pt,
    Je,
    w0,
    Gr,
    wn
  ];
}
class Vw extends mw {
  constructor(e) {
    super(), yw(
      this,
      e,
      Mw,
      Cw,
      kw,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        button_labels: 5,
        label: 6,
        root: 29,
        show_label: 7,
        loading_status: 8,
        height: 9,
        width: 10,
        server: 11,
        container: 30,
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
        icon_radius: 24,
        variant: 25,
        connection_state: 0,
        full_screen: 26,
        value: 1
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Ne();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Ne();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Ne();
  }
  get button_labels() {
    return this.$$.ctx[5];
  }
  set button_labels(e) {
    this.$$set({ button_labels: e }), Ne();
  }
  get label() {
    return this.$$.ctx[6];
  }
  set label(e) {
    this.$$set({ label: e }), Ne();
  }
  get root() {
    return this.$$.ctx[29];
  }
  set root(e) {
    this.$$set({ root: e }), Ne();
  }
  get show_label() {
    return this.$$.ctx[7];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Ne();
  }
  get loading_status() {
    return this.$$.ctx[8];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Ne();
  }
  get height() {
    return this.$$.ctx[9];
  }
  set height(e) {
    this.$$set({ height: e }), Ne();
  }
  get width() {
    return this.$$.ctx[10];
  }
  set width(e) {
    this.$$set({ width: e }), Ne();
  }
  get server() {
    return this.$$.ctx[11];
  }
  set server(e) {
    this.$$set({ server: e }), Ne();
  }
  get container() {
    return this.$$.ctx[30];
  }
  set container(e) {
    this.$$set({ container: e }), Ne();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Ne();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Ne();
  }
  get gradio() {
    return this.$$.ctx[14];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Ne();
  }
  get rtc_configuration() {
    return this.$$.ctx[15];
  }
  set rtc_configuration(e) {
    this.$$set({ rtc_configuration: e }), Ne();
  }
  get time_limit() {
    return this.$$.ctx[16];
  }
  set time_limit(e) {
    this.$$set({ time_limit: e }), Ne();
  }
  get modality() {
    return this.$$.ctx[17];
  }
  set modality(e) {
    this.$$set({ modality: e }), Ne();
  }
  get mode() {
    return this.$$.ctx[18];
  }
  set mode(e) {
    this.$$set({ mode: e }), Ne();
  }
  get rtp_params() {
    return this.$$.ctx[19];
  }
  set rtp_params(e) {
    this.$$set({ rtp_params: e }), Ne();
  }
  get track_constraints() {
    return this.$$.ctx[20];
  }
  set track_constraints(e) {
    this.$$set({ track_constraints: e }), Ne();
  }
  get icon() {
    return this.$$.ctx[21];
  }
  set icon(e) {
    this.$$set({ icon: e }), Ne();
  }
  get icon_button_color() {
    return this.$$.ctx[22];
  }
  set icon_button_color(e) {
    this.$$set({ icon_button_color: e }), Ne();
  }
  get pulse_color() {
    return this.$$.ctx[23];
  }
  set pulse_color(e) {
    this.$$set({ pulse_color: e }), Ne();
  }
  get icon_radius() {
    return this.$$.ctx[24];
  }
  set icon_radius(e) {
    this.$$set({ icon_radius: e }), Ne();
  }
  get variant() {
    return this.$$.ctx[25];
  }
  set variant(e) {
    this.$$set({ variant: e }), Ne();
  }
  get connection_state() {
    return this.$$.ctx[0];
  }
  set connection_state(e) {
    this.$$set({ connection_state: e }), Ne();
  }
  get full_screen() {
    return this.$$.ctx[26];
  }
  set full_screen(e) {
    this.$$set({ full_screen: e }), Ne();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(e) {
    this.$$set({ value: e }), Ne();
  }
}
export {
  Gw as E,
  Vw as I,
  m9 as a,
  Rw as b,
  Tc as c,
  Ow as d,
  Lw as g,
  Iw as k,
  qw as l,
  Nw as p
};
