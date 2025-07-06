var Rm = Object.defineProperty;
var S1 = (n) => {
  throw TypeError(n);
};
var Om = (n, e, t) => e in n ? Rm(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var qe = (n, e, t) => Om(n, typeof e != "symbol" ? e + "" : e, t), qm = (n, e, t) => e.has(n) || S1("Cannot " + t);
var x1 = (n, e, t) => e.has(n) ? S1("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var Ai = (n, e, t) => (qm(n, e, "access private method"), t);
const {
  SvelteComponent: Pm,
  assign: Hm,
  children: Um,
  claim_element: Vm,
  create_slot: Gm,
  detach: T1,
  element: jm,
  get_all_dirty_from_scope: Wm,
  get_slot_changes: Xm,
  get_spread_update: Ym,
  init: Zm,
  insert_hydration: Km,
  safe_not_equal: Jm,
  set_dynamic_element_data: C1,
  set_style: Ft,
  toggle_class: g0,
  transition_in: kd,
  transition_out: Dd,
  update_slot_base: Qm
} = window.__gradio__svelte__internal;
function $m(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[22].default
  ), i = Gm(
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
    s = Hm(s, l[o]);
  return {
    c() {
      e = jm(
        /*tag*/
        n[18]
      ), i && i.c(), this.h();
    },
    l(o) {
      e = Vm(
        o,
        /*tag*/
        (n[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var u = Um(e);
      i && i.l(u), u.forEach(T1), this.h();
    },
    h() {
      C1(
        /*tag*/
        n[18]
      )(e, s), g0(
        e,
        "hidden",
        /*visible*/
        n[13] === !1
      ), g0(
        e,
        "padded",
        /*padding*/
        n[9]
      ), g0(
        e,
        "flex",
        /*flex*/
        n[0]
      ), g0(
        e,
        "border_focus",
        /*border_mode*/
        n[8] === "focus"
      ), g0(
        e,
        "border_contrast",
        /*border_mode*/
        n[8] === "contrast"
      ), g0(e, "hide-container", !/*explicit_call*/
      n[11] && !/*container*/
      n[12]), Ft(
        e,
        "height",
        /*get_dimension*/
        n[19](
          /*height*/
          n[1]
        )
      ), Ft(
        e,
        "min-height",
        /*get_dimension*/
        n[19](
          /*min_height*/
          n[2]
        )
      ), Ft(
        e,
        "max-height",
        /*get_dimension*/
        n[19](
          /*max_height*/
          n[3]
        )
      ), Ft(e, "width", typeof /*width*/
      n[4] == "number" ? `calc(min(${/*width*/
      n[4]}px, 100%))` : (
        /*get_dimension*/
        n[19](
          /*width*/
          n[4]
        )
      )), Ft(
        e,
        "border-style",
        /*variant*/
        n[7]
      ), Ft(
        e,
        "overflow",
        /*allow_overflow*/
        n[14] ? (
          /*overflow_behavior*/
          n[15]
        ) : "hidden"
      ), Ft(
        e,
        "flex-grow",
        /*scale*/
        n[16]
      ), Ft(e, "min-width", `calc(min(${/*min_width*/
      n[17]}px, 100%))`), Ft(e, "border-width", "var(--block-border-width)");
    },
    m(o, u) {
      Km(o, e, u), i && i.m(e, null), r = !0;
    },
    p(o, u) {
      i && i.p && (!r || u & /*$$scope*/
      2097152) && Qm(
        i,
        a,
        o,
        /*$$scope*/
        o[21],
        r ? Xm(
          a,
          /*$$scope*/
          o[21],
          u,
          null
        ) : Wm(
          /*$$scope*/
          o[21]
        ),
        null
      ), C1(
        /*tag*/
        o[18]
      )(e, s = Ym(l, [
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
      ])), g0(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), g0(
        e,
        "padded",
        /*padding*/
        o[9]
      ), g0(
        e,
        "flex",
        /*flex*/
        o[0]
      ), g0(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), g0(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), g0(e, "hide-container", !/*explicit_call*/
      o[11] && !/*container*/
      o[12]), u & /*height*/
      2 && Ft(
        e,
        "height",
        /*get_dimension*/
        o[19](
          /*height*/
          o[1]
        )
      ), u & /*min_height*/
      4 && Ft(
        e,
        "min-height",
        /*get_dimension*/
        o[19](
          /*min_height*/
          o[2]
        )
      ), u & /*max_height*/
      8 && Ft(
        e,
        "max-height",
        /*get_dimension*/
        o[19](
          /*max_height*/
          o[3]
        )
      ), u & /*width*/
      16 && Ft(e, "width", typeof /*width*/
      o[4] == "number" ? `calc(min(${/*width*/
      o[4]}px, 100%))` : (
        /*get_dimension*/
        o[19](
          /*width*/
          o[4]
        )
      )), u & /*variant*/
      128 && Ft(
        e,
        "border-style",
        /*variant*/
        o[7]
      ), u & /*allow_overflow, overflow_behavior*/
      49152 && Ft(
        e,
        "overflow",
        /*allow_overflow*/
        o[14] ? (
          /*overflow_behavior*/
          o[15]
        ) : "hidden"
      ), u & /*scale*/
      65536 && Ft(
        e,
        "flex-grow",
        /*scale*/
        o[16]
      ), u & /*min_width*/
      131072 && Ft(e, "min-width", `calc(min(${/*min_width*/
      o[17]}px, 100%))`);
    },
    i(o) {
      r || (kd(i, o), r = !0);
    },
    o(o) {
      Dd(i, o), r = !1;
    },
    d(o) {
      o && T1(e), i && i.d(o);
    }
  };
}
function e2(n) {
  let e, t = (
    /*tag*/
    n[18] && $m(n)
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
      e || (kd(t, r), e = !0);
    },
    o(r) {
      Dd(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function t2(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: u = "" } = e, { elem_classes: c = [] } = e, { variant: d = "solid" } = e, { border_mode: h = "base" } = e, { padding: p = !0 } = e, { type: _ = "normal" } = e, { test_id: b = void 0 } = e, { explicit_call: D = !1 } = e, { container: y = !0 } = e, { visible: k = !0 } = e, { allow_overflow: w = !0 } = e, { overflow_behavior: x = "auto" } = e, { scale: E = null } = e, { min_width: T = 0 } = e, { flex: C = !1 } = e;
  k || (C = !1);
  let F = _ === "fieldset" ? "fieldset" : "div";
  const I = (L) => {
    if (L !== void 0) {
      if (typeof L == "number")
        return L + "px";
      if (typeof L == "string")
        return L;
    }
  };
  return n.$$set = (L) => {
    "height" in L && t(1, i = L.height), "min_height" in L && t(2, l = L.min_height), "max_height" in L && t(3, s = L.max_height), "width" in L && t(4, o = L.width), "elem_id" in L && t(5, u = L.elem_id), "elem_classes" in L && t(6, c = L.elem_classes), "variant" in L && t(7, d = L.variant), "border_mode" in L && t(8, h = L.border_mode), "padding" in L && t(9, p = L.padding), "type" in L && t(20, _ = L.type), "test_id" in L && t(10, b = L.test_id), "explicit_call" in L && t(11, D = L.explicit_call), "container" in L && t(12, y = L.container), "visible" in L && t(13, k = L.visible), "allow_overflow" in L && t(14, w = L.allow_overflow), "overflow_behavior" in L && t(15, x = L.overflow_behavior), "scale" in L && t(16, E = L.scale), "min_width" in L && t(17, T = L.min_width), "flex" in L && t(0, C = L.flex), "$$scope" in L && t(21, a = L.$$scope);
  }, [
    C,
    i,
    l,
    s,
    o,
    u,
    c,
    d,
    h,
    p,
    b,
    D,
    y,
    k,
    w,
    x,
    E,
    T,
    F,
    I,
    _,
    a,
    r
  ];
}
class Ad extends Pm {
  constructor(e) {
    super(), Zm(this, e, t2, e2, Jm, {
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
const r2 = [
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
], F1 = {
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
r2.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: F1[e][t],
      secondary: F1[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: n2,
  append_hydration: a2,
  attr: L0,
  children: M1,
  claim_svg_element: z1,
  detach: ys,
  init: i2,
  insert_hydration: l2,
  noop: ks,
  safe_not_equal: s2,
  svg_element: B1
} = window.__gradio__svelte__internal;
function o2(n) {
  let e, t;
  return {
    c() {
      e = B1("svg"), t = B1("circle"), this.h();
    },
    l(r) {
      e = z1(r, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var a = M1(e);
      t = z1(a, "circle", { cx: !0, cy: !0, r: !0 }), M1(t).forEach(ys), a.forEach(ys), this.h();
    },
    h() {
      L0(t, "cx", "12"), L0(t, "cy", "12"), L0(t, "r", "10"), L0(e, "xmlns", "http://www.w3.org/2000/svg"), L0(e, "width", "100%"), L0(e, "height", "100%"), L0(e, "viewBox", "0 0 24 24"), L0(e, "stroke-width", "1.5"), L0(e, "stroke-linecap", "round"), L0(e, "stroke-linejoin", "round"), L0(e, "class", "feather feather-circle");
    },
    m(r, a) {
      l2(r, e, a), a2(e, t);
    },
    p: ks,
    i: ks,
    o: ks,
    d(r) {
      r && ys(e);
    }
  };
}
class Kl extends n2 {
  constructor(e) {
    super(), i2(this, e, null, o2, s2, {});
  }
}
const {
  SvelteComponent: u2,
  append_hydration: Ds,
  attr: N0,
  children: Ei,
  claim_svg_element: Si,
  detach: _a,
  init: c2,
  insert_hydration: f2,
  noop: As,
  safe_not_equal: h2,
  set_style: K0,
  svg_element: xi
} = window.__gradio__svelte__internal;
function d2(n) {
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
      r = Si(s, "path", { d: !0, style: !0 }), Ei(r).forEach(_a), s.forEach(_a), a = Si(l, "path", { d: !0, style: !0 }), Ei(a).forEach(_a), l.forEach(_a), this.h();
    },
    h() {
      N0(r, "d", "M18,6L6.087,17.913"), K0(r, "fill", "none"), K0(r, "fill-rule", "nonzero"), K0(r, "stroke-width", "2px"), N0(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), N0(a, "d", "M4.364,4.364L19.636,19.636"), K0(a, "fill", "none"), K0(a, "fill-rule", "nonzero"), K0(a, "stroke-width", "2px"), N0(e, "width", "100%"), N0(e, "height", "100%"), N0(e, "viewBox", "0 0 24 24"), N0(e, "version", "1.1"), N0(e, "xmlns", "http://www.w3.org/2000/svg"), N0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), N0(e, "xml:space", "preserve"), N0(e, "stroke", "currentColor"), K0(e, "fill-rule", "evenodd"), K0(e, "clip-rule", "evenodd"), K0(e, "stroke-linecap", "round"), K0(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      f2(i, e, l), Ds(e, t), Ds(t, r), Ds(e, a);
    },
    p: As,
    i: As,
    o: As,
    d(i) {
      i && _a(e);
    }
  };
}
class m2 extends u2 {
  constructor(e) {
    super(), c2(this, e, null, d2, h2, {});
  }
}
const {
  SvelteComponent: p2,
  append_hydration: g2,
  attr: Un,
  children: I1,
  claim_svg_element: L1,
  detach: Es,
  init: _2,
  insert_hydration: v2,
  noop: Ss,
  safe_not_equal: b2,
  svg_element: N1
} = window.__gradio__svelte__internal;
function w2(n) {
  let e, t;
  return {
    c() {
      e = N1("svg"), t = N1("path"), this.h();
    },
    l(r) {
      e = L1(r, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var a = I1(e);
      t = L1(a, "path", { d: !0 }), I1(t).forEach(Es), a.forEach(Es), this.h();
    },
    h() {
      Un(t, "d", "M5 8l4 4 4-4z"), Un(e, "class", "dropdown-arrow svelte-145leq6"), Un(e, "xmlns", "http://www.w3.org/2000/svg"), Un(e, "width", "100%"), Un(e, "height", "100%"), Un(e, "viewBox", "0 0 18 18");
    },
    m(r, a) {
      v2(r, e, a), g2(e, t);
    },
    p: Ss,
    i: Ss,
    o: Ss,
    d(r) {
      r && Es(e);
    }
  };
}
class Jl extends p2 {
  constructor(e) {
    super(), _2(this, e, null, w2, b2, {});
  }
}
const {
  SvelteComponent: y2,
  append_hydration: k2,
  attr: Ti,
  children: R1,
  claim_svg_element: O1,
  detach: xs,
  init: D2,
  insert_hydration: A2,
  noop: Ts,
  safe_not_equal: E2,
  svg_element: q1
} = window.__gradio__svelte__internal;
function S2(n) {
  let e, t;
  return {
    c() {
      e = q1("svg"), t = q1("path"), this.h();
    },
    l(r) {
      e = O1(r, "svg", { xmlns: !0, viewBox: !0 });
      var a = R1(e);
      t = O1(a, "path", { fill: !0, d: !0 }), R1(t).forEach(xs), a.forEach(xs), this.h();
    },
    h() {
      Ti(t, "fill", "currentColor"), Ti(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ti(e, "xmlns", "http://www.w3.org/2000/svg"), Ti(e, "viewBox", "0 0 24 24");
    },
    m(r, a) {
      A2(r, e, a), k2(e, t);
    },
    p: Ts,
    i: Ts,
    o: Ts,
    d(r) {
      r && xs(e);
    }
  };
}
class x2 extends y2 {
  constructor(e) {
    super(), D2(this, e, null, S2, E2, {});
  }
}
const {
  SvelteComponent: T2,
  append_hydration: Ci,
  attr: ut,
  children: va,
  claim_svg_element: ba,
  detach: Vn,
  init: C2,
  insert_hydration: F2,
  noop: Cs,
  safe_not_equal: M2,
  svg_element: wa
} = window.__gradio__svelte__internal;
function z2(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = wa("svg"), t = wa("path"), r = wa("path"), a = wa("line"), i = wa("line"), this.h();
    },
    l(l) {
      e = ba(l, "svg", {
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
      var s = va(e);
      t = ba(s, "path", { d: !0 }), va(t).forEach(Vn), r = ba(s, "path", { d: !0 }), va(r).forEach(Vn), a = ba(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), va(a).forEach(Vn), i = ba(s, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), va(i).forEach(Vn), s.forEach(Vn), this.h();
    },
    h() {
      ut(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ut(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ut(a, "x1", "12"), ut(a, "y1", "19"), ut(a, "x2", "12"), ut(a, "y2", "23"), ut(i, "x1", "8"), ut(i, "y1", "23"), ut(i, "x2", "16"), ut(i, "y2", "23"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "fill", "none"), ut(e, "stroke", "currentColor"), ut(e, "stroke-width", "2"), ut(e, "stroke-linecap", "round"), ut(e, "stroke-linejoin", "round"), ut(e, "class", "feather feather-mic");
    },
    m(l, s) {
      F2(l, e, s), Ci(e, t), Ci(e, r), Ci(e, a), Ci(e, i);
    },
    p: Cs,
    i: Cs,
    o: Cs,
    d(l) {
      l && Vn(e);
    }
  };
}
class Mn extends T2 {
  constructor(e) {
    super(), C2(this, e, null, z2, M2, {});
  }
}
const {
  SvelteComponent: B2,
  append_hydration: Fs,
  attr: Mt,
  children: Fi,
  claim_svg_element: Mi,
  detach: ya,
  init: I2,
  insert_hydration: L2,
  noop: Ms,
  safe_not_equal: N2,
  svg_element: zi
} = window.__gradio__svelte__internal;
function R2(n) {
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
      var l = Fi(e);
      t = Mi(l, "path", { d: !0 }), Fi(t).forEach(ya), r = Mi(l, "circle", { cx: !0, cy: !0, r: !0 }), Fi(r).forEach(ya), a = Mi(l, "circle", { cx: !0, cy: !0, r: !0 }), Fi(a).forEach(ya), l.forEach(ya), this.h();
    },
    h() {
      Mt(t, "d", "M9 18V5l12-2v13"), Mt(r, "cx", "6"), Mt(r, "cy", "18"), Mt(r, "r", "3"), Mt(a, "cx", "18"), Mt(a, "cy", "16"), Mt(a, "r", "3"), Mt(e, "xmlns", "http://www.w3.org/2000/svg"), Mt(e, "width", "100%"), Mt(e, "height", "100%"), Mt(e, "viewBox", "0 0 24 24"), Mt(e, "fill", "none"), Mt(e, "stroke", "currentColor"), Mt(e, "stroke-width", "1.5"), Mt(e, "stroke-linecap", "round"), Mt(e, "stroke-linejoin", "round"), Mt(e, "class", "feather feather-music");
    },
    m(i, l) {
      L2(i, e, l), Fs(e, t), Fs(e, r), Fs(e, a);
    },
    p: Ms,
    i: Ms,
    o: Ms,
    d(i) {
      i && ya(e);
    }
  };
}
class Eu extends B2 {
  constructor(e) {
    super(), I2(this, e, null, R2, N2, {});
  }
}
const {
  SvelteComponent: O2,
  append_hydration: q2,
  attr: Dt,
  children: P1,
  claim_svg_element: H1,
  detach: zs,
  init: P2,
  insert_hydration: H2,
  noop: U1,
  safe_not_equal: U2,
  svg_element: V1
} = window.__gradio__svelte__internal;
function V2(n) {
  let e, t, r;
  return {
    c() {
      e = V1("svg"), t = V1("rect"), this.h();
    },
    l(a) {
      e = H1(a, "svg", {
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
      var i = P1(e);
      t = H1(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), P1(t).forEach(zs), i.forEach(zs), this.h();
    },
    h() {
      Dt(t, "x", "3"), Dt(t, "y", "3"), Dt(t, "width", "18"), Dt(t, "height", "18"), Dt(t, "rx", "2"), Dt(t, "ry", "2"), Dt(e, "xmlns", "http://www.w3.org/2000/svg"), Dt(e, "width", "100%"), Dt(e, "height", "100%"), Dt(e, "viewBox", "0 0 24 24"), Dt(
        e,
        "fill",
        /*fill*/
        n[0]
      ), Dt(e, "stroke", "currentColor"), Dt(e, "stroke-width", r = `${/*stroke_width*/
      n[1]}`), Dt(e, "stroke-linecap", "round"), Dt(e, "stroke-linejoin", "round"), Dt(e, "class", "feather feather-square");
    },
    m(a, i) {
      H2(a, e, i), q2(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && Dt(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && r !== (r = `${/*stroke_width*/
      a[1]}`) && Dt(e, "stroke-width", r);
    },
    i: U1,
    o: U1,
    d(a) {
      a && zs(e);
    }
  };
}
function G2(n, e, t) {
  let { fill: r = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return n.$$set = (i) => {
    "fill" in i && t(0, r = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [r, a];
}
let Ed = class extends O2 {
  constructor(e) {
    super(), P2(this, e, G2, V2, U2, { fill: 0, stroke_width: 1 });
  }
};
const {
  SvelteComponent: j2,
  append_hydration: Bs,
  attr: Pt,
  children: Bi,
  claim_svg_element: Ii,
  detach: ka,
  init: W2,
  insert_hydration: X2,
  noop: Is,
  safe_not_equal: Y2,
  svg_element: Li
} = window.__gradio__svelte__internal;
function Z2(n) {
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
      t = Ii(l, "path", { d: !0 }), Bi(t).forEach(ka), r = Ii(l, "polyline", { points: !0 }), Bi(r).forEach(ka), a = Ii(l, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Bi(a).forEach(ka), l.forEach(ka), this.h();
    },
    h() {
      Pt(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Pt(r, "points", "17 8 12 3 7 8"), Pt(a, "x1", "12"), Pt(a, "y1", "3"), Pt(a, "x2", "12"), Pt(a, "y2", "15"), Pt(e, "xmlns", "http://www.w3.org/2000/svg"), Pt(e, "width", "90%"), Pt(e, "height", "90%"), Pt(e, "viewBox", "0 0 24 24"), Pt(e, "fill", "none"), Pt(e, "stroke", "currentColor"), Pt(e, "stroke-width", "2"), Pt(e, "stroke-linecap", "round"), Pt(e, "stroke-linejoin", "round"), Pt(e, "class", "feather feather-upload");
    },
    m(i, l) {
      X2(i, e, l), Bs(e, t), Bs(e, r), Bs(e, a);
    },
    p: Is,
    i: Is,
    o: Is,
    d(i) {
      i && ka(e);
    }
  };
}
class K2 extends j2 {
  constructor(e) {
    super(), W2(this, e, null, Z2, Y2, {});
  }
}
const {
  SvelteComponent: J2,
  append_hydration: G1,
  attr: zt,
  children: Ls,
  claim_svg_element: Ns,
  detach: Ni,
  init: Q2,
  insert_hydration: $2,
  noop: Rs,
  safe_not_equal: e5,
  svg_element: Os
} = window.__gradio__svelte__internal;
function t5(n) {
  let e, t, r;
  return {
    c() {
      e = Os("svg"), t = Os("polygon"), r = Os("rect"), this.h();
    },
    l(a) {
      e = Ns(a, "svg", {
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
      var i = Ls(e);
      t = Ns(i, "polygon", { points: !0 }), Ls(t).forEach(Ni), r = Ns(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), Ls(r).forEach(Ni), i.forEach(Ni), this.h();
    },
    h() {
      zt(t, "points", "23 7 16 12 23 17 23 7"), zt(r, "x", "1"), zt(r, "y", "5"), zt(r, "width", "15"), zt(r, "height", "14"), zt(r, "rx", "2"), zt(r, "ry", "2"), zt(e, "xmlns", "http://www.w3.org/2000/svg"), zt(e, "width", "100%"), zt(e, "height", "100%"), zt(e, "viewBox", "0 0 24 24"), zt(e, "fill", "none"), zt(e, "stroke", "currentColor"), zt(e, "stroke-width", "1.5"), zt(e, "stroke-linecap", "round"), zt(e, "stroke-linejoin", "round"), zt(e, "class", "feather feather-video");
    },
    m(a, i) {
      $2(a, e, i), G1(e, t), G1(e, r);
    },
    p: Rs,
    i: Rs,
    o: Rs,
    d(a) {
      a && Ni(e);
    }
  };
}
class Su extends J2 {
  constructor(e) {
    super(), Q2(this, e, null, t5, e5, {});
  }
}
const {
  SvelteComponent: r5,
  append_hydration: Da,
  attr: At,
  children: Aa,
  claim_svg_element: Ea,
  claim_text: n5,
  detach: Gn,
  init: a5,
  insert_hydration: i5,
  noop: qs,
  safe_not_equal: l5,
  svg_element: Sa,
  text: s5
} = window.__gradio__svelte__internal;
function o5(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = Sa("svg"), t = Sa("title"), r = s5("High volume"), a = Sa("path"), i = Sa("path"), l = Sa("path"), this.h();
    },
    l(s) {
      e = Ea(s, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        stroke: !0,
        xmlns: !0,
        color: !0
      });
      var o = Aa(e);
      t = Ea(o, "title", {});
      var u = Aa(t);
      r = n5(u, "High volume"), u.forEach(Gn), a = Ea(o, "path", { d: !0, "stroke-width": !0 }), Aa(a).forEach(Gn), i = Ea(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Aa(i).forEach(Gn), l = Ea(o, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Aa(l).forEach(Gn), o.forEach(Gn), this.h();
    },
    h() {
      At(a, "d", "M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z"), At(a, "stroke-width", "1.5"), At(i, "d", "M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5"), At(i, "stroke-width", "1.5"), At(i, "stroke-linecap", "round"), At(i, "stroke-linejoin", "round"), At(l, "d", "M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5"), At(l, "stroke-width", "1.5"), At(l, "stroke-linecap", "round"), At(l, "stroke-linejoin", "round"), At(e, "width", "100%"), At(e, "height", "100%"), At(e, "viewBox", "0 0 24 24"), At(e, "stroke-width", "1.5"), At(e, "fill", "none"), At(e, "stroke", "currentColor"), At(e, "xmlns", "http://www.w3.org/2000/svg"), At(e, "color", "currentColor");
    },
    m(s, o) {
      i5(s, e, o), Da(e, t), Da(t, r), Da(e, a), Da(e, i), Da(e, l);
    },
    p: qs,
    i: qs,
    o: qs,
    d(s) {
      s && Gn(e);
    }
  };
}
class Tl extends r5 {
  constructor(e) {
    super(), a5(this, e, null, o5, l5, {});
  }
}
const {
  SvelteComponent: u5,
  append_hydration: Vr,
  attr: gt,
  children: Gr,
  claim_svg_element: jr,
  claim_text: c5,
  detach: br,
  init: f5,
  insert_hydration: h5,
  noop: Ps,
  safe_not_equal: d5,
  svg_element: Wr,
  text: m5
} = window.__gradio__svelte__internal;
function p5(n) {
  let e, t, r, a, i, l, s, o, u;
  return {
    c() {
      e = Wr("svg"), t = Wr("title"), r = m5("Muted volume"), a = Wr("g"), i = Wr("path"), l = Wr("path"), s = Wr("defs"), o = Wr("clipPath"), u = Wr("rect"), this.h();
    },
    l(c) {
      e = jr(c, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        "stroke-width": !0,
        fill: !0,
        xmlns: !0,
        stroke: !0,
        color: !0
      });
      var d = Gr(e);
      t = jr(d, "title", {});
      var h = Gr(t);
      r = c5(h, "Muted volume"), h.forEach(br), a = jr(d, "g", { "clip-path": !0 });
      var p = Gr(a);
      i = jr(p, "path", {
        d: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Gr(i).forEach(br), l = jr(p, "path", { d: !0, "stroke-width": !0 }), Gr(l).forEach(br), p.forEach(br), s = jr(d, "defs", {});
      var _ = Gr(s);
      o = jr(_, "clipPath", { id: !0 });
      var b = Gr(o);
      u = jr(b, "rect", { width: !0, height: !0, fill: !0 }), Gr(u).forEach(br), b.forEach(br), _.forEach(br), d.forEach(br), this.h();
    },
    h() {
      gt(i, "d", "M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14"), gt(i, "stroke-width", "1.5"), gt(i, "stroke-linecap", "round"), gt(i, "stroke-linejoin", "round"), gt(l, "d", "M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z"), gt(l, "stroke-width", "1.5"), gt(a, "clip-path", "url(#clip0_3173_16686)"), gt(u, "width", "24"), gt(u, "height", "24"), gt(u, "fill", "white"), gt(o, "id", "clip0_3173_16686"), gt(e, "width", "100%"), gt(e, "height", "100%"), gt(e, "viewBox", "0 0 24 24"), gt(e, "stroke-width", "1.5"), gt(e, "fill", "none"), gt(e, "xmlns", "http://www.w3.org/2000/svg"), gt(e, "stroke", "currentColor"), gt(e, "color", "currentColor");
    },
    m(c, d) {
      h5(c, e, d), Vr(e, t), Vr(t, r), Vr(e, a), Vr(a, i), Vr(a, l), Vr(e, s), Vr(s, o), Vr(o, u);
    },
    p: Ps,
    i: Ps,
    o: Ps,
    d(c) {
      c && br(e);
    }
  };
}
class Cl extends u5 {
  constructor(e) {
    super(), f5(this, e, null, p5, d5, {});
  }
}
const {
  SvelteComponent: g5,
  append_hydration: j1,
  attr: Xr,
  children: Hs,
  claim_svg_element: Us,
  detach: Ri,
  init: _5,
  insert_hydration: v5,
  noop: Vs,
  safe_not_equal: b5,
  svg_element: Gs
} = window.__gradio__svelte__internal;
function w5(n) {
  let e, t, r;
  return {
    c() {
      e = Gs("svg"), t = Gs("path"), r = Gs("path"), this.h();
    },
    l(a) {
      e = Us(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var i = Hs(e);
      t = Us(i, "path", { fill: !0, d: !0 }), Hs(t).forEach(Ri), r = Us(i, "path", { fill: !0, d: !0 }), Hs(r).forEach(Ri), i.forEach(Ri), this.h();
    },
    h() {
      Xr(t, "fill", "currentColor"), Xr(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Xr(r, "fill", "currentColor"), Xr(r, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Xr(e, "xmlns", "http://www.w3.org/2000/svg"), Xr(e, "width", "100%"), Xr(e, "height", "100%"), Xr(e, "viewBox", "0 0 24 24");
    },
    m(a, i) {
      v5(a, e, i), j1(e, t), j1(e, r);
    },
    p: Vs,
    i: Vs,
    o: Vs,
    d(a) {
      a && Ri(e);
    }
  };
}
let W1 = class extends g5 {
  constructor(e) {
    super(), _5(this, e, null, w5, b5, {});
  }
};
const {
  SvelteComponent: y5,
  append_hydration: X1,
  attr: Et,
  children: js,
  claim_svg_element: Ws,
  detach: Oi,
  init: k5,
  insert_hydration: D5,
  noop: Xs,
  safe_not_equal: A5,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function E5(n) {
  let e, t, r;
  return {
    c() {
      e = Ys("svg"), t = Ys("circle"), r = Ys("animateTransform"), this.h();
    },
    l(a) {
      e = Ws(a, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        class: !0
      });
      var i = js(e);
      t = Ws(i, "circle", {
        cx: !0,
        cy: !0,
        r: !0,
        fill: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0
      });
      var l = js(t);
      r = Ws(l, "animateTransform", {
        attributeName: !0,
        type: !0,
        from: !0,
        to: !0,
        repeatCount: !0
      }), js(r).forEach(Oi), l.forEach(Oi), i.forEach(Oi), this.h();
    },
    h() {
      Et(r, "attributeName", "transform"), Et(r, "type", "rotate"), Et(r, "from", "0 25 25"), Et(r, "to", "360 25 25"), Et(r, "repeatCount", "indefinite"), Et(t, "cx", "25"), Et(t, "cy", "25"), Et(t, "r", "20"), Et(t, "fill", "none"), Et(t, "stroke-width", "3.0"), Et(t, "stroke-linecap", "round"), Et(t, "stroke-dasharray", "94.2477796076938 94.2477796076938"), Et(t, "stroke-dashoffset", "0"), Et(e, "xmlns", "http://www.w3.org/2000/svg"), Et(e, "width", "100%"), Et(e, "height", "100%"), Et(e, "viewBox", "0 0 50 50"), Et(e, "class", "svelte-pb9pol");
    },
    m(a, i) {
      D5(a, e, i), X1(e, t), X1(t, r);
    },
    p: Xs,
    i: Xs,
    o: Xs,
    d(a) {
      a && Oi(e);
    }
  };
}
class xu extends y5 {
  constructor(e) {
    super(), k5(this, e, null, E5, A5, {});
  }
}
class c0 {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new c0(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class x0 {
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
    return new x0(t, c0.range(this, e));
  }
}
class W {
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
    return d.name = "ParseError", d.__proto__ = W.prototype, d.position = a, a != null && i != null && (d.length = i - a), d.rawMessage = e, d;
  }
}
W.prototype.__proto__ = Error.prototype;
var S5 = function(e, t) {
  return e.indexOf(t) !== -1;
}, x5 = function(e, t) {
  return e === void 0 ? t : e;
}, T5 = /([A-Z])/g, C5 = function(e) {
  return e.replace(T5, "-$1").toLowerCase();
}, F5 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, M5 = /[&><"']/g;
function z5(n) {
  return String(n).replace(M5, (e) => F5[e]);
}
var Sd = function n(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? n(e.body[0]) : e : e.type === "font" ? n(e.body) : e;
}, B5 = function(e) {
  var t = Sd(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, I5 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, L5 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ae = {
  contains: S5,
  deflt: x5,
  escape: z5,
  hyphenate: C5,
  getBaseElem: Sd,
  isCharacterBox: B5,
  protocolFromUrl: L5
}, bl = {
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
function N5(n) {
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
class Tu {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in bl)
      if (bl.hasOwnProperty(t)) {
        var r = bl[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : N5(r);
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
        throw new W("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
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
      var t = ae.protocolFromUrl(e.url);
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
    return er[R5[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return er[O5[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return er[q5[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return er[P5[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return er[H5[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return er[U5[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Cu = 0, Fl = 1, ia = 2, Tr = 3, Ka = 4, D0 = 5, ca = 6, jt = 7, er = [new Yr(Cu, 0, !1), new Yr(Fl, 0, !0), new Yr(ia, 1, !1), new Yr(Tr, 1, !0), new Yr(Ka, 2, !1), new Yr(D0, 2, !0), new Yr(ca, 3, !1), new Yr(jt, 3, !0)], R5 = [Ka, D0, Ka, D0, ca, jt, ca, jt], O5 = [D0, D0, D0, D0, jt, jt, jt, jt], q5 = [ia, Tr, Ka, D0, ca, jt, ca, jt], P5 = [Tr, Tr, D0, D0, jt, jt, jt, jt], H5 = [Fl, Fl, Tr, Tr, D0, D0, jt, jt], U5 = [Cu, Fl, ia, Tr, ia, Tr, ia, Tr], se = {
  DISPLAY: er[Cu],
  TEXT: er[ia],
  SCRIPT: er[Ka],
  SCRIPTSCRIPT: er[ca]
}, Yo = [{
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
function V5(n) {
  for (var e = 0; e < Yo.length; e++)
    for (var t = Yo[e], r = 0; r < t.blocks.length; r++) {
      var a = t.blocks[r];
      if (n >= a[0] && n <= a[1])
        return t.name;
    }
  return null;
}
var wl = [];
Yo.forEach((n) => n.blocks.forEach((e) => wl.push(...e)));
function xd(n) {
  for (var e = 0; e < wl.length; e += 2)
    if (n >= wl[e] && n <= wl[e + 1])
      return !0;
  return !1;
}
var jn = 80, G5 = function(e, t) {
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
}, j5 = function(e, t) {
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
}, W5 = function(e, t) {
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
}, X5 = function(e, t) {
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
}, Y5 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Z5 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, K5 = function(e, t, r) {
  var a = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, J5 = function(e, t, r) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = G5(t, jn);
      break;
    case "sqrtSize1":
      a = j5(t, jn);
      break;
    case "sqrtSize2":
      a = W5(t, jn);
      break;
    case "sqrtSize3":
      a = X5(t, jn);
      break;
    case "sqrtSize4":
      a = Y5(t, jn);
      break;
    case "sqrtTall":
      a = K5(t, jn, r);
  }
  return a;
}, Q5 = function(e, t) {
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
}, Y1 = {
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
}, $5 = function(e, t) {
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
class ai {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return ae.contains(this.classes, e);
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
var nr = {
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
}, qi = {
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
}, Z1 = {
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
function e3(n, e) {
  nr[n] = e;
}
function Fu(n, e, t) {
  if (!nr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = n.charCodeAt(0), a = nr[e][r];
  if (!a && n[0] in Z1 && (r = Z1[n[0]].charCodeAt(0), a = nr[e][r]), !a && t === "text" && xd(r) && (a = nr[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Zs = {};
function t3(n) {
  var e;
  if (n >= 5 ? e = 0 : n >= 3 ? e = 1 : e = 2, !Zs[e]) {
    var t = Zs[e] = {
      cssEmPerMu: qi.quad[e] / 18
    };
    for (var r in qi)
      qi.hasOwnProperty(r) && (t[r] = qi[r][e]);
  }
  return Zs[e];
}
var r3 = [
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
], K1 = [
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
], J1 = function(e, t) {
  return t.size < 2 ? e : r3[e - 1][t.size - 1];
};
class Dr {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || Dr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = K1[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    return new Dr(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: J1(this.textSize, e)
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
      sizeMultiplier: K1[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = J1(Dr.BASESIZE, e);
    return this.size === t && this.textSize === Dr.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== Dr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Dr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = t3(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Dr.BASESIZE = 6;
var Zo = {
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
}, n3 = {
  ex: !0,
  em: !0,
  mu: !0
}, Td = function(e) {
  return typeof e != "string" && (e = e.unit), e in Zo || e in n3 || e === "ex";
}, Ze = function(e, t) {
  var r;
  if (e.unit in Zo)
    r = Zo[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new W("Invalid unit: '" + e.unit + "'");
    a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, Z = function(e) {
  return +e.toFixed(4) + "em";
}, un = function(e) {
  return e.filter((t) => t).join(" ");
}, Cd = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Fd = function(e) {
  var t = document.createElement(e);
  t.className = un(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Md = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + ae.escape(un(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += ae.hyphenate(a) + ":" + this.style[a] + ";");
  r && (t += ' style="' + ae.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + ae.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class ii {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Cd.call(this, e, r, a), this.children = t || [];
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
    return ae.contains(this.classes, e);
  }
  toNode() {
    return Fd.call(this, "span");
  }
  toMarkup() {
    return Md.call(this, "span");
  }
}
class Mu {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Cd.call(this, t, a), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ae.contains(this.classes, e);
  }
  toNode() {
    return Fd.call(this, "a");
  }
  toMarkup() {
    return Md.call(this, "a");
  }
}
class a3 {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return ae.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + ae.escape(this.src) + '"' + (' alt="' + ae.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += ae.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + ae.escape(t) + '"'), e += "'/>", e;
  }
}
var i3 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class T0 {
  constructor(e, t, r, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var u = V5(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = i3[this.text]);
  }
  hasClass(e) {
    return ae.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = Z(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = un(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += ae.escape(un(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += ae.hyphenate(a) + ":" + this.style[a] + ";");
    r && (e = !0, t += ' style="' + ae.escape(r) + '"');
    var i = ae.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class Br {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ae.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class cn {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Y1[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ae.escape(this.alternate) + '"/>' : '<path d="' + ae.escape(Y1[this.pathName]) + '"/>';
  }
}
class Ko {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ae.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Q1(n) {
  if (n instanceof T0)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function l3(n) {
  if (n instanceof ii)
    return n;
  throw new Error("Expected span<HtmlDomNode> but got " + String(n) + ".");
}
var s3 = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, o3 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Re = {
  math: {},
  text: {}
};
function f(n, e, t, r, a, i) {
  Re[n][a] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (Re[n][r] = Re[n][a]);
}
var m = "math", H = "text", g = "main", A = "ams", Ge = "accent-token", Q = "bin", Qt = "close", fa = "inner", le = "mathord", ht = "op-token", m0 = "open", Ql = "punct", S = "rel", Pr = "spacing", M = "textord";
f(m, g, S, "≡", "\\equiv", !0);
f(m, g, S, "≺", "\\prec", !0);
f(m, g, S, "≻", "\\succ", !0);
f(m, g, S, "∼", "\\sim", !0);
f(m, g, S, "⊥", "\\perp");
f(m, g, S, "⪯", "\\preceq", !0);
f(m, g, S, "⪰", "\\succeq", !0);
f(m, g, S, "≃", "\\simeq", !0);
f(m, g, S, "∣", "\\mid", !0);
f(m, g, S, "≪", "\\ll", !0);
f(m, g, S, "≫", "\\gg", !0);
f(m, g, S, "≍", "\\asymp", !0);
f(m, g, S, "∥", "\\parallel");
f(m, g, S, "⋈", "\\bowtie", !0);
f(m, g, S, "⌣", "\\smile", !0);
f(m, g, S, "⊑", "\\sqsubseteq", !0);
f(m, g, S, "⊒", "\\sqsupseteq", !0);
f(m, g, S, "≐", "\\doteq", !0);
f(m, g, S, "⌢", "\\frown", !0);
f(m, g, S, "∋", "\\ni", !0);
f(m, g, S, "∝", "\\propto", !0);
f(m, g, S, "⊢", "\\vdash", !0);
f(m, g, S, "⊣", "\\dashv", !0);
f(m, g, S, "∋", "\\owns");
f(m, g, Ql, ".", "\\ldotp");
f(m, g, Ql, "⋅", "\\cdotp");
f(m, g, M, "#", "\\#");
f(H, g, M, "#", "\\#");
f(m, g, M, "&", "\\&");
f(H, g, M, "&", "\\&");
f(m, g, M, "ℵ", "\\aleph", !0);
f(m, g, M, "∀", "\\forall", !0);
f(m, g, M, "ℏ", "\\hbar", !0);
f(m, g, M, "∃", "\\exists", !0);
f(m, g, M, "∇", "\\nabla", !0);
f(m, g, M, "♭", "\\flat", !0);
f(m, g, M, "ℓ", "\\ell", !0);
f(m, g, M, "♮", "\\natural", !0);
f(m, g, M, "♣", "\\clubsuit", !0);
f(m, g, M, "℘", "\\wp", !0);
f(m, g, M, "♯", "\\sharp", !0);
f(m, g, M, "♢", "\\diamondsuit", !0);
f(m, g, M, "ℜ", "\\Re", !0);
f(m, g, M, "♡", "\\heartsuit", !0);
f(m, g, M, "ℑ", "\\Im", !0);
f(m, g, M, "♠", "\\spadesuit", !0);
f(m, g, M, "§", "\\S", !0);
f(H, g, M, "§", "\\S");
f(m, g, M, "¶", "\\P", !0);
f(H, g, M, "¶", "\\P");
f(m, g, M, "†", "\\dag");
f(H, g, M, "†", "\\dag");
f(H, g, M, "†", "\\textdagger");
f(m, g, M, "‡", "\\ddag");
f(H, g, M, "‡", "\\ddag");
f(H, g, M, "‡", "\\textdaggerdbl");
f(m, g, Qt, "⎱", "\\rmoustache", !0);
f(m, g, m0, "⎰", "\\lmoustache", !0);
f(m, g, Qt, "⟯", "\\rgroup", !0);
f(m, g, m0, "⟮", "\\lgroup", !0);
f(m, g, Q, "∓", "\\mp", !0);
f(m, g, Q, "⊖", "\\ominus", !0);
f(m, g, Q, "⊎", "\\uplus", !0);
f(m, g, Q, "⊓", "\\sqcap", !0);
f(m, g, Q, "∗", "\\ast");
f(m, g, Q, "⊔", "\\sqcup", !0);
f(m, g, Q, "◯", "\\bigcirc", !0);
f(m, g, Q, "∙", "\\bullet", !0);
f(m, g, Q, "‡", "\\ddagger");
f(m, g, Q, "≀", "\\wr", !0);
f(m, g, Q, "⨿", "\\amalg");
f(m, g, Q, "&", "\\And");
f(m, g, S, "⟵", "\\longleftarrow", !0);
f(m, g, S, "⇐", "\\Leftarrow", !0);
f(m, g, S, "⟸", "\\Longleftarrow", !0);
f(m, g, S, "⟶", "\\longrightarrow", !0);
f(m, g, S, "⇒", "\\Rightarrow", !0);
f(m, g, S, "⟹", "\\Longrightarrow", !0);
f(m, g, S, "↔", "\\leftrightarrow", !0);
f(m, g, S, "⟷", "\\longleftrightarrow", !0);
f(m, g, S, "⇔", "\\Leftrightarrow", !0);
f(m, g, S, "⟺", "\\Longleftrightarrow", !0);
f(m, g, S, "↦", "\\mapsto", !0);
f(m, g, S, "⟼", "\\longmapsto", !0);
f(m, g, S, "↗", "\\nearrow", !0);
f(m, g, S, "↩", "\\hookleftarrow", !0);
f(m, g, S, "↪", "\\hookrightarrow", !0);
f(m, g, S, "↘", "\\searrow", !0);
f(m, g, S, "↼", "\\leftharpoonup", !0);
f(m, g, S, "⇀", "\\rightharpoonup", !0);
f(m, g, S, "↙", "\\swarrow", !0);
f(m, g, S, "↽", "\\leftharpoondown", !0);
f(m, g, S, "⇁", "\\rightharpoondown", !0);
f(m, g, S, "↖", "\\nwarrow", !0);
f(m, g, S, "⇌", "\\rightleftharpoons", !0);
f(m, A, S, "≮", "\\nless", !0);
f(m, A, S, "", "\\@nleqslant");
f(m, A, S, "", "\\@nleqq");
f(m, A, S, "⪇", "\\lneq", !0);
f(m, A, S, "≨", "\\lneqq", !0);
f(m, A, S, "", "\\@lvertneqq");
f(m, A, S, "⋦", "\\lnsim", !0);
f(m, A, S, "⪉", "\\lnapprox", !0);
f(m, A, S, "⊀", "\\nprec", !0);
f(m, A, S, "⋠", "\\npreceq", !0);
f(m, A, S, "⋨", "\\precnsim", !0);
f(m, A, S, "⪹", "\\precnapprox", !0);
f(m, A, S, "≁", "\\nsim", !0);
f(m, A, S, "", "\\@nshortmid");
f(m, A, S, "∤", "\\nmid", !0);
f(m, A, S, "⊬", "\\nvdash", !0);
f(m, A, S, "⊭", "\\nvDash", !0);
f(m, A, S, "⋪", "\\ntriangleleft");
f(m, A, S, "⋬", "\\ntrianglelefteq", !0);
f(m, A, S, "⊊", "\\subsetneq", !0);
f(m, A, S, "", "\\@varsubsetneq");
f(m, A, S, "⫋", "\\subsetneqq", !0);
f(m, A, S, "", "\\@varsubsetneqq");
f(m, A, S, "≯", "\\ngtr", !0);
f(m, A, S, "", "\\@ngeqslant");
f(m, A, S, "", "\\@ngeqq");
f(m, A, S, "⪈", "\\gneq", !0);
f(m, A, S, "≩", "\\gneqq", !0);
f(m, A, S, "", "\\@gvertneqq");
f(m, A, S, "⋧", "\\gnsim", !0);
f(m, A, S, "⪊", "\\gnapprox", !0);
f(m, A, S, "⊁", "\\nsucc", !0);
f(m, A, S, "⋡", "\\nsucceq", !0);
f(m, A, S, "⋩", "\\succnsim", !0);
f(m, A, S, "⪺", "\\succnapprox", !0);
f(m, A, S, "≆", "\\ncong", !0);
f(m, A, S, "", "\\@nshortparallel");
f(m, A, S, "∦", "\\nparallel", !0);
f(m, A, S, "⊯", "\\nVDash", !0);
f(m, A, S, "⋫", "\\ntriangleright");
f(m, A, S, "⋭", "\\ntrianglerighteq", !0);
f(m, A, S, "", "\\@nsupseteqq");
f(m, A, S, "⊋", "\\supsetneq", !0);
f(m, A, S, "", "\\@varsupsetneq");
f(m, A, S, "⫌", "\\supsetneqq", !0);
f(m, A, S, "", "\\@varsupsetneqq");
f(m, A, S, "⊮", "\\nVdash", !0);
f(m, A, S, "⪵", "\\precneqq", !0);
f(m, A, S, "⪶", "\\succneqq", !0);
f(m, A, S, "", "\\@nsubseteqq");
f(m, A, Q, "⊴", "\\unlhd");
f(m, A, Q, "⊵", "\\unrhd");
f(m, A, S, "↚", "\\nleftarrow", !0);
f(m, A, S, "↛", "\\nrightarrow", !0);
f(m, A, S, "⇍", "\\nLeftarrow", !0);
f(m, A, S, "⇏", "\\nRightarrow", !0);
f(m, A, S, "↮", "\\nleftrightarrow", !0);
f(m, A, S, "⇎", "\\nLeftrightarrow", !0);
f(m, A, S, "△", "\\vartriangle");
f(m, A, M, "ℏ", "\\hslash");
f(m, A, M, "▽", "\\triangledown");
f(m, A, M, "◊", "\\lozenge");
f(m, A, M, "Ⓢ", "\\circledS");
f(m, A, M, "®", "\\circledR");
f(H, A, M, "®", "\\circledR");
f(m, A, M, "∡", "\\measuredangle", !0);
f(m, A, M, "∄", "\\nexists");
f(m, A, M, "℧", "\\mho");
f(m, A, M, "Ⅎ", "\\Finv", !0);
f(m, A, M, "⅁", "\\Game", !0);
f(m, A, M, "‵", "\\backprime");
f(m, A, M, "▲", "\\blacktriangle");
f(m, A, M, "▼", "\\blacktriangledown");
f(m, A, M, "■", "\\blacksquare");
f(m, A, M, "⧫", "\\blacklozenge");
f(m, A, M, "★", "\\bigstar");
f(m, A, M, "∢", "\\sphericalangle", !0);
f(m, A, M, "∁", "\\complement", !0);
f(m, A, M, "ð", "\\eth", !0);
f(H, g, M, "ð", "ð");
f(m, A, M, "╱", "\\diagup");
f(m, A, M, "╲", "\\diagdown");
f(m, A, M, "□", "\\square");
f(m, A, M, "□", "\\Box");
f(m, A, M, "◊", "\\Diamond");
f(m, A, M, "¥", "\\yen", !0);
f(H, A, M, "¥", "\\yen", !0);
f(m, A, M, "✓", "\\checkmark", !0);
f(H, A, M, "✓", "\\checkmark");
f(m, A, M, "ℶ", "\\beth", !0);
f(m, A, M, "ℸ", "\\daleth", !0);
f(m, A, M, "ℷ", "\\gimel", !0);
f(m, A, M, "ϝ", "\\digamma", !0);
f(m, A, M, "ϰ", "\\varkappa");
f(m, A, m0, "┌", "\\@ulcorner", !0);
f(m, A, Qt, "┐", "\\@urcorner", !0);
f(m, A, m0, "└", "\\@llcorner", !0);
f(m, A, Qt, "┘", "\\@lrcorner", !0);
f(m, A, S, "≦", "\\leqq", !0);
f(m, A, S, "⩽", "\\leqslant", !0);
f(m, A, S, "⪕", "\\eqslantless", !0);
f(m, A, S, "≲", "\\lesssim", !0);
f(m, A, S, "⪅", "\\lessapprox", !0);
f(m, A, S, "≊", "\\approxeq", !0);
f(m, A, Q, "⋖", "\\lessdot");
f(m, A, S, "⋘", "\\lll", !0);
f(m, A, S, "≶", "\\lessgtr", !0);
f(m, A, S, "⋚", "\\lesseqgtr", !0);
f(m, A, S, "⪋", "\\lesseqqgtr", !0);
f(m, A, S, "≑", "\\doteqdot");
f(m, A, S, "≓", "\\risingdotseq", !0);
f(m, A, S, "≒", "\\fallingdotseq", !0);
f(m, A, S, "∽", "\\backsim", !0);
f(m, A, S, "⋍", "\\backsimeq", !0);
f(m, A, S, "⫅", "\\subseteqq", !0);
f(m, A, S, "⋐", "\\Subset", !0);
f(m, A, S, "⊏", "\\sqsubset", !0);
f(m, A, S, "≼", "\\preccurlyeq", !0);
f(m, A, S, "⋞", "\\curlyeqprec", !0);
f(m, A, S, "≾", "\\precsim", !0);
f(m, A, S, "⪷", "\\precapprox", !0);
f(m, A, S, "⊲", "\\vartriangleleft");
f(m, A, S, "⊴", "\\trianglelefteq");
f(m, A, S, "⊨", "\\vDash", !0);
f(m, A, S, "⊪", "\\Vvdash", !0);
f(m, A, S, "⌣", "\\smallsmile");
f(m, A, S, "⌢", "\\smallfrown");
f(m, A, S, "≏", "\\bumpeq", !0);
f(m, A, S, "≎", "\\Bumpeq", !0);
f(m, A, S, "≧", "\\geqq", !0);
f(m, A, S, "⩾", "\\geqslant", !0);
f(m, A, S, "⪖", "\\eqslantgtr", !0);
f(m, A, S, "≳", "\\gtrsim", !0);
f(m, A, S, "⪆", "\\gtrapprox", !0);
f(m, A, Q, "⋗", "\\gtrdot");
f(m, A, S, "⋙", "\\ggg", !0);
f(m, A, S, "≷", "\\gtrless", !0);
f(m, A, S, "⋛", "\\gtreqless", !0);
f(m, A, S, "⪌", "\\gtreqqless", !0);
f(m, A, S, "≖", "\\eqcirc", !0);
f(m, A, S, "≗", "\\circeq", !0);
f(m, A, S, "≜", "\\triangleq", !0);
f(m, A, S, "∼", "\\thicksim");
f(m, A, S, "≈", "\\thickapprox");
f(m, A, S, "⫆", "\\supseteqq", !0);
f(m, A, S, "⋑", "\\Supset", !0);
f(m, A, S, "⊐", "\\sqsupset", !0);
f(m, A, S, "≽", "\\succcurlyeq", !0);
f(m, A, S, "⋟", "\\curlyeqsucc", !0);
f(m, A, S, "≿", "\\succsim", !0);
f(m, A, S, "⪸", "\\succapprox", !0);
f(m, A, S, "⊳", "\\vartriangleright");
f(m, A, S, "⊵", "\\trianglerighteq");
f(m, A, S, "⊩", "\\Vdash", !0);
f(m, A, S, "∣", "\\shortmid");
f(m, A, S, "∥", "\\shortparallel");
f(m, A, S, "≬", "\\between", !0);
f(m, A, S, "⋔", "\\pitchfork", !0);
f(m, A, S, "∝", "\\varpropto");
f(m, A, S, "◀", "\\blacktriangleleft");
f(m, A, S, "∴", "\\therefore", !0);
f(m, A, S, "∍", "\\backepsilon");
f(m, A, S, "▶", "\\blacktriangleright");
f(m, A, S, "∵", "\\because", !0);
f(m, A, S, "⋘", "\\llless");
f(m, A, S, "⋙", "\\gggtr");
f(m, A, Q, "⊲", "\\lhd");
f(m, A, Q, "⊳", "\\rhd");
f(m, A, S, "≂", "\\eqsim", !0);
f(m, g, S, "⋈", "\\Join");
f(m, A, S, "≑", "\\Doteq", !0);
f(m, A, Q, "∔", "\\dotplus", !0);
f(m, A, Q, "∖", "\\smallsetminus");
f(m, A, Q, "⋒", "\\Cap", !0);
f(m, A, Q, "⋓", "\\Cup", !0);
f(m, A, Q, "⩞", "\\doublebarwedge", !0);
f(m, A, Q, "⊟", "\\boxminus", !0);
f(m, A, Q, "⊞", "\\boxplus", !0);
f(m, A, Q, "⋇", "\\divideontimes", !0);
f(m, A, Q, "⋉", "\\ltimes", !0);
f(m, A, Q, "⋊", "\\rtimes", !0);
f(m, A, Q, "⋋", "\\leftthreetimes", !0);
f(m, A, Q, "⋌", "\\rightthreetimes", !0);
f(m, A, Q, "⋏", "\\curlywedge", !0);
f(m, A, Q, "⋎", "\\curlyvee", !0);
f(m, A, Q, "⊝", "\\circleddash", !0);
f(m, A, Q, "⊛", "\\circledast", !0);
f(m, A, Q, "⋅", "\\centerdot");
f(m, A, Q, "⊺", "\\intercal", !0);
f(m, A, Q, "⋒", "\\doublecap");
f(m, A, Q, "⋓", "\\doublecup");
f(m, A, Q, "⊠", "\\boxtimes", !0);
f(m, A, S, "⇢", "\\dashrightarrow", !0);
f(m, A, S, "⇠", "\\dashleftarrow", !0);
f(m, A, S, "⇇", "\\leftleftarrows", !0);
f(m, A, S, "⇆", "\\leftrightarrows", !0);
f(m, A, S, "⇚", "\\Lleftarrow", !0);
f(m, A, S, "↞", "\\twoheadleftarrow", !0);
f(m, A, S, "↢", "\\leftarrowtail", !0);
f(m, A, S, "↫", "\\looparrowleft", !0);
f(m, A, S, "⇋", "\\leftrightharpoons", !0);
f(m, A, S, "↶", "\\curvearrowleft", !0);
f(m, A, S, "↺", "\\circlearrowleft", !0);
f(m, A, S, "↰", "\\Lsh", !0);
f(m, A, S, "⇈", "\\upuparrows", !0);
f(m, A, S, "↿", "\\upharpoonleft", !0);
f(m, A, S, "⇃", "\\downharpoonleft", !0);
f(m, g, S, "⊶", "\\origof", !0);
f(m, g, S, "⊷", "\\imageof", !0);
f(m, A, S, "⊸", "\\multimap", !0);
f(m, A, S, "↭", "\\leftrightsquigarrow", !0);
f(m, A, S, "⇉", "\\rightrightarrows", !0);
f(m, A, S, "⇄", "\\rightleftarrows", !0);
f(m, A, S, "↠", "\\twoheadrightarrow", !0);
f(m, A, S, "↣", "\\rightarrowtail", !0);
f(m, A, S, "↬", "\\looparrowright", !0);
f(m, A, S, "↷", "\\curvearrowright", !0);
f(m, A, S, "↻", "\\circlearrowright", !0);
f(m, A, S, "↱", "\\Rsh", !0);
f(m, A, S, "⇊", "\\downdownarrows", !0);
f(m, A, S, "↾", "\\upharpoonright", !0);
f(m, A, S, "⇂", "\\downharpoonright", !0);
f(m, A, S, "⇝", "\\rightsquigarrow", !0);
f(m, A, S, "⇝", "\\leadsto");
f(m, A, S, "⇛", "\\Rrightarrow", !0);
f(m, A, S, "↾", "\\restriction");
f(m, g, M, "‘", "`");
f(m, g, M, "$", "\\$");
f(H, g, M, "$", "\\$");
f(H, g, M, "$", "\\textdollar");
f(m, g, M, "%", "\\%");
f(H, g, M, "%", "\\%");
f(m, g, M, "_", "\\_");
f(H, g, M, "_", "\\_");
f(H, g, M, "_", "\\textunderscore");
f(m, g, M, "∠", "\\angle", !0);
f(m, g, M, "∞", "\\infty", !0);
f(m, g, M, "′", "\\prime");
f(m, g, M, "△", "\\triangle");
f(m, g, M, "Γ", "\\Gamma", !0);
f(m, g, M, "Δ", "\\Delta", !0);
f(m, g, M, "Θ", "\\Theta", !0);
f(m, g, M, "Λ", "\\Lambda", !0);
f(m, g, M, "Ξ", "\\Xi", !0);
f(m, g, M, "Π", "\\Pi", !0);
f(m, g, M, "Σ", "\\Sigma", !0);
f(m, g, M, "Υ", "\\Upsilon", !0);
f(m, g, M, "Φ", "\\Phi", !0);
f(m, g, M, "Ψ", "\\Psi", !0);
f(m, g, M, "Ω", "\\Omega", !0);
f(m, g, M, "A", "Α");
f(m, g, M, "B", "Β");
f(m, g, M, "E", "Ε");
f(m, g, M, "Z", "Ζ");
f(m, g, M, "H", "Η");
f(m, g, M, "I", "Ι");
f(m, g, M, "K", "Κ");
f(m, g, M, "M", "Μ");
f(m, g, M, "N", "Ν");
f(m, g, M, "O", "Ο");
f(m, g, M, "P", "Ρ");
f(m, g, M, "T", "Τ");
f(m, g, M, "X", "Χ");
f(m, g, M, "¬", "\\neg", !0);
f(m, g, M, "¬", "\\lnot");
f(m, g, M, "⊤", "\\top");
f(m, g, M, "⊥", "\\bot");
f(m, g, M, "∅", "\\emptyset");
f(m, A, M, "∅", "\\varnothing");
f(m, g, le, "α", "\\alpha", !0);
f(m, g, le, "β", "\\beta", !0);
f(m, g, le, "γ", "\\gamma", !0);
f(m, g, le, "δ", "\\delta", !0);
f(m, g, le, "ϵ", "\\epsilon", !0);
f(m, g, le, "ζ", "\\zeta", !0);
f(m, g, le, "η", "\\eta", !0);
f(m, g, le, "θ", "\\theta", !0);
f(m, g, le, "ι", "\\iota", !0);
f(m, g, le, "κ", "\\kappa", !0);
f(m, g, le, "λ", "\\lambda", !0);
f(m, g, le, "μ", "\\mu", !0);
f(m, g, le, "ν", "\\nu", !0);
f(m, g, le, "ξ", "\\xi", !0);
f(m, g, le, "ο", "\\omicron", !0);
f(m, g, le, "π", "\\pi", !0);
f(m, g, le, "ρ", "\\rho", !0);
f(m, g, le, "σ", "\\sigma", !0);
f(m, g, le, "τ", "\\tau", !0);
f(m, g, le, "υ", "\\upsilon", !0);
f(m, g, le, "ϕ", "\\phi", !0);
f(m, g, le, "χ", "\\chi", !0);
f(m, g, le, "ψ", "\\psi", !0);
f(m, g, le, "ω", "\\omega", !0);
f(m, g, le, "ε", "\\varepsilon", !0);
f(m, g, le, "ϑ", "\\vartheta", !0);
f(m, g, le, "ϖ", "\\varpi", !0);
f(m, g, le, "ϱ", "\\varrho", !0);
f(m, g, le, "ς", "\\varsigma", !0);
f(m, g, le, "φ", "\\varphi", !0);
f(m, g, Q, "∗", "*", !0);
f(m, g, Q, "+", "+");
f(m, g, Q, "−", "-", !0);
f(m, g, Q, "⋅", "\\cdot", !0);
f(m, g, Q, "∘", "\\circ", !0);
f(m, g, Q, "÷", "\\div", !0);
f(m, g, Q, "±", "\\pm", !0);
f(m, g, Q, "×", "\\times", !0);
f(m, g, Q, "∩", "\\cap", !0);
f(m, g, Q, "∪", "\\cup", !0);
f(m, g, Q, "∖", "\\setminus", !0);
f(m, g, Q, "∧", "\\land");
f(m, g, Q, "∨", "\\lor");
f(m, g, Q, "∧", "\\wedge", !0);
f(m, g, Q, "∨", "\\vee", !0);
f(m, g, M, "√", "\\surd");
f(m, g, m0, "⟨", "\\langle", !0);
f(m, g, m0, "∣", "\\lvert");
f(m, g, m0, "∥", "\\lVert");
f(m, g, Qt, "?", "?");
f(m, g, Qt, "!", "!");
f(m, g, Qt, "⟩", "\\rangle", !0);
f(m, g, Qt, "∣", "\\rvert");
f(m, g, Qt, "∥", "\\rVert");
f(m, g, S, "=", "=");
f(m, g, S, ":", ":");
f(m, g, S, "≈", "\\approx", !0);
f(m, g, S, "≅", "\\cong", !0);
f(m, g, S, "≥", "\\ge");
f(m, g, S, "≥", "\\geq", !0);
f(m, g, S, "←", "\\gets");
f(m, g, S, ">", "\\gt", !0);
f(m, g, S, "∈", "\\in", !0);
f(m, g, S, "", "\\@not");
f(m, g, S, "⊂", "\\subset", !0);
f(m, g, S, "⊃", "\\supset", !0);
f(m, g, S, "⊆", "\\subseteq", !0);
f(m, g, S, "⊇", "\\supseteq", !0);
f(m, A, S, "⊈", "\\nsubseteq", !0);
f(m, A, S, "⊉", "\\nsupseteq", !0);
f(m, g, S, "⊨", "\\models");
f(m, g, S, "←", "\\leftarrow", !0);
f(m, g, S, "≤", "\\le");
f(m, g, S, "≤", "\\leq", !0);
f(m, g, S, "<", "\\lt", !0);
f(m, g, S, "→", "\\rightarrow", !0);
f(m, g, S, "→", "\\to");
f(m, A, S, "≱", "\\ngeq", !0);
f(m, A, S, "≰", "\\nleq", !0);
f(m, g, Pr, " ", "\\ ");
f(m, g, Pr, " ", "\\space");
f(m, g, Pr, " ", "\\nobreakspace");
f(H, g, Pr, " ", "\\ ");
f(H, g, Pr, " ", " ");
f(H, g, Pr, " ", "\\space");
f(H, g, Pr, " ", "\\nobreakspace");
f(m, g, Pr, null, "\\nobreak");
f(m, g, Pr, null, "\\allowbreak");
f(m, g, Ql, ",", ",");
f(m, g, Ql, ";", ";");
f(m, A, Q, "⊼", "\\barwedge", !0);
f(m, A, Q, "⊻", "\\veebar", !0);
f(m, g, Q, "⊙", "\\odot", !0);
f(m, g, Q, "⊕", "\\oplus", !0);
f(m, g, Q, "⊗", "\\otimes", !0);
f(m, g, M, "∂", "\\partial", !0);
f(m, g, Q, "⊘", "\\oslash", !0);
f(m, A, Q, "⊚", "\\circledcirc", !0);
f(m, A, Q, "⊡", "\\boxdot", !0);
f(m, g, Q, "△", "\\bigtriangleup");
f(m, g, Q, "▽", "\\bigtriangledown");
f(m, g, Q, "†", "\\dagger");
f(m, g, Q, "⋄", "\\diamond");
f(m, g, Q, "⋆", "\\star");
f(m, g, Q, "◃", "\\triangleleft");
f(m, g, Q, "▹", "\\triangleright");
f(m, g, m0, "{", "\\{");
f(H, g, M, "{", "\\{");
f(H, g, M, "{", "\\textbraceleft");
f(m, g, Qt, "}", "\\}");
f(H, g, M, "}", "\\}");
f(H, g, M, "}", "\\textbraceright");
f(m, g, m0, "{", "\\lbrace");
f(m, g, Qt, "}", "\\rbrace");
f(m, g, m0, "[", "\\lbrack", !0);
f(H, g, M, "[", "\\lbrack", !0);
f(m, g, Qt, "]", "\\rbrack", !0);
f(H, g, M, "]", "\\rbrack", !0);
f(m, g, m0, "(", "\\lparen", !0);
f(m, g, Qt, ")", "\\rparen", !0);
f(H, g, M, "<", "\\textless", !0);
f(H, g, M, ">", "\\textgreater", !0);
f(m, g, m0, "⌊", "\\lfloor", !0);
f(m, g, Qt, "⌋", "\\rfloor", !0);
f(m, g, m0, "⌈", "\\lceil", !0);
f(m, g, Qt, "⌉", "\\rceil", !0);
f(m, g, M, "\\", "\\backslash");
f(m, g, M, "∣", "|");
f(m, g, M, "∣", "\\vert");
f(H, g, M, "|", "\\textbar", !0);
f(m, g, M, "∥", "\\|");
f(m, g, M, "∥", "\\Vert");
f(H, g, M, "∥", "\\textbardbl");
f(H, g, M, "~", "\\textasciitilde");
f(H, g, M, "\\", "\\textbackslash");
f(H, g, M, "^", "\\textasciicircum");
f(m, g, S, "↑", "\\uparrow", !0);
f(m, g, S, "⇑", "\\Uparrow", !0);
f(m, g, S, "↓", "\\downarrow", !0);
f(m, g, S, "⇓", "\\Downarrow", !0);
f(m, g, S, "↕", "\\updownarrow", !0);
f(m, g, S, "⇕", "\\Updownarrow", !0);
f(m, g, ht, "∐", "\\coprod");
f(m, g, ht, "⋁", "\\bigvee");
f(m, g, ht, "⋀", "\\bigwedge");
f(m, g, ht, "⨄", "\\biguplus");
f(m, g, ht, "⋂", "\\bigcap");
f(m, g, ht, "⋃", "\\bigcup");
f(m, g, ht, "∫", "\\int");
f(m, g, ht, "∫", "\\intop");
f(m, g, ht, "∬", "\\iint");
f(m, g, ht, "∭", "\\iiint");
f(m, g, ht, "∏", "\\prod");
f(m, g, ht, "∑", "\\sum");
f(m, g, ht, "⨂", "\\bigotimes");
f(m, g, ht, "⨁", "\\bigoplus");
f(m, g, ht, "⨀", "\\bigodot");
f(m, g, ht, "∮", "\\oint");
f(m, g, ht, "∯", "\\oiint");
f(m, g, ht, "∰", "\\oiiint");
f(m, g, ht, "⨆", "\\bigsqcup");
f(m, g, ht, "∫", "\\smallint");
f(H, g, fa, "…", "\\textellipsis");
f(m, g, fa, "…", "\\mathellipsis");
f(H, g, fa, "…", "\\ldots", !0);
f(m, g, fa, "…", "\\ldots", !0);
f(m, g, fa, "⋯", "\\@cdots", !0);
f(m, g, fa, "⋱", "\\ddots", !0);
f(m, g, M, "⋮", "\\varvdots");
f(m, g, Ge, "ˊ", "\\acute");
f(m, g, Ge, "ˋ", "\\grave");
f(m, g, Ge, "¨", "\\ddot");
f(m, g, Ge, "~", "\\tilde");
f(m, g, Ge, "ˉ", "\\bar");
f(m, g, Ge, "˘", "\\breve");
f(m, g, Ge, "ˇ", "\\check");
f(m, g, Ge, "^", "\\hat");
f(m, g, Ge, "⃗", "\\vec");
f(m, g, Ge, "˙", "\\dot");
f(m, g, Ge, "˚", "\\mathring");
f(m, g, le, "", "\\@imath");
f(m, g, le, "", "\\@jmath");
f(m, g, M, "ı", "ı");
f(m, g, M, "ȷ", "ȷ");
f(H, g, M, "ı", "\\i", !0);
f(H, g, M, "ȷ", "\\j", !0);
f(H, g, M, "ß", "\\ss", !0);
f(H, g, M, "æ", "\\ae", !0);
f(H, g, M, "œ", "\\oe", !0);
f(H, g, M, "ø", "\\o", !0);
f(H, g, M, "Æ", "\\AE", !0);
f(H, g, M, "Œ", "\\OE", !0);
f(H, g, M, "Ø", "\\O", !0);
f(H, g, Ge, "ˊ", "\\'");
f(H, g, Ge, "ˋ", "\\`");
f(H, g, Ge, "ˆ", "\\^");
f(H, g, Ge, "˜", "\\~");
f(H, g, Ge, "ˉ", "\\=");
f(H, g, Ge, "˘", "\\u");
f(H, g, Ge, "˙", "\\.");
f(H, g, Ge, "¸", "\\c");
f(H, g, Ge, "˚", "\\r");
f(H, g, Ge, "ˇ", "\\v");
f(H, g, Ge, "¨", '\\"');
f(H, g, Ge, "˝", "\\H");
f(H, g, Ge, "◯", "\\textcircled");
var zd = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
f(H, g, M, "–", "--", !0);
f(H, g, M, "–", "\\textendash");
f(H, g, M, "—", "---", !0);
f(H, g, M, "—", "\\textemdash");
f(H, g, M, "‘", "`", !0);
f(H, g, M, "‘", "\\textquoteleft");
f(H, g, M, "’", "'", !0);
f(H, g, M, "’", "\\textquoteright");
f(H, g, M, "“", "``", !0);
f(H, g, M, "“", "\\textquotedblleft");
f(H, g, M, "”", "''", !0);
f(H, g, M, "”", "\\textquotedblright");
f(m, g, M, "°", "\\degree", !0);
f(H, g, M, "°", "\\degree");
f(H, g, M, "°", "\\textdegree", !0);
f(m, g, M, "£", "\\pounds");
f(m, g, M, "£", "\\mathsterling", !0);
f(H, g, M, "£", "\\pounds");
f(H, g, M, "£", "\\textsterling", !0);
f(m, A, M, "✠", "\\maltese");
f(H, A, M, "✠", "\\maltese");
var $1 = '0123456789/@."';
for (var Ks = 0; Ks < $1.length; Ks++) {
  var ec = $1.charAt(Ks);
  f(m, g, M, ec, ec);
}
var tc = '0123456789!@*()-=+";:?/.,';
for (var Js = 0; Js < tc.length; Js++) {
  var rc = tc.charAt(Js);
  f(H, g, M, rc, rc);
}
var Ml = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Qs = 0; Qs < Ml.length; Qs++) {
  var Pi = Ml.charAt(Qs);
  f(m, g, le, Pi, Pi), f(H, g, M, Pi, Pi);
}
f(m, A, M, "C", "ℂ");
f(H, A, M, "C", "ℂ");
f(m, A, M, "H", "ℍ");
f(H, A, M, "H", "ℍ");
f(m, A, M, "N", "ℕ");
f(H, A, M, "N", "ℕ");
f(m, A, M, "P", "ℙ");
f(H, A, M, "P", "ℙ");
f(m, A, M, "Q", "ℚ");
f(H, A, M, "Q", "ℚ");
f(m, A, M, "R", "ℝ");
f(H, A, M, "R", "ℝ");
f(m, A, M, "Z", "ℤ");
f(H, A, M, "Z", "ℤ");
f(m, g, le, "h", "ℎ");
f(H, g, le, "h", "ℎ");
var ce = "";
for (var Vt = 0; Vt < Ml.length; Vt++) {
  var tt = Ml.charAt(Vt);
  ce = String.fromCharCode(55349, 56320 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56372 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56424 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56580 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56684 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56736 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56788 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56840 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56944 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), Vt < 26 && (ce = String.fromCharCode(55349, 56632 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce), ce = String.fromCharCode(55349, 56476 + Vt), f(m, g, le, tt, ce), f(H, g, M, tt, ce));
}
ce = "𝕜";
f(m, g, le, "k", ce);
f(H, g, M, "k", ce);
for (var wn = 0; wn < 10; wn++) {
  var Zr = wn.toString();
  ce = String.fromCharCode(55349, 57294 + wn), f(m, g, le, Zr, ce), f(H, g, M, Zr, ce), ce = String.fromCharCode(55349, 57314 + wn), f(m, g, le, Zr, ce), f(H, g, M, Zr, ce), ce = String.fromCharCode(55349, 57324 + wn), f(m, g, le, Zr, ce), f(H, g, M, Zr, ce), ce = String.fromCharCode(55349, 57334 + wn), f(m, g, le, Zr, ce), f(H, g, M, Zr, ce);
}
var Jo = "ÐÞþ";
for (var $s = 0; $s < Jo.length; $s++) {
  var Hi = Jo.charAt($s);
  f(m, g, le, Hi, Hi), f(H, g, M, Hi, Hi);
}
var Ui = [
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
], nc = [
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
], u3 = function(e, t) {
  var r = e.charCodeAt(0), a = e.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var s = Math.floor((i - 119808) / 26);
    return [Ui[s][2], Ui[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [nc[o][2], nc[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [Ui[0][2], Ui[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new W("Unsupported character: " + e);
  }
}, $l = function(e, t, r) {
  return Re[r][e] && Re[r][e].replace && (e = Re[r][e].replace), {
    value: e,
    metrics: Fu(e, t, r)
  };
}, H0 = function(e, t, r, a, i) {
  var l = $l(e, t, r), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var u = s.italic;
    (r === "text" || a && a.font === "mathit") && (u = 0), o = new T0(e, s.height, s.depth, u, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), o = new T0(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var c = a.getColor();
    c && (o.style.color = c);
  }
  return o;
}, c3 = function(e, t, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && $l(e, "Main-Bold", t).metrics ? H0(e, "Main-Bold", t, r, a.concat(["mathbf"])) : e === "\\" || Re[t][e].font === "main" ? H0(e, "Main-Regular", t, r, a) : H0(e, "AMS-Regular", t, r, a.concat(["amsrm"]));
}, f3 = function(e, t, r, a, i) {
  return i !== "textord" && $l(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, h3 = function(e, t, r) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, u = "", c = "";
  if (i.charCodeAt(0) === 55349 && ([u, c] = u3(i, a)), u.length > 0)
    return H0(i, u, a, t, l.concat(c));
  if (o) {
    var d, h;
    if (o === "boldsymbol") {
      var p = f3(i, a, t, l, r);
      d = p.fontName, h = [p.fontClass];
    } else s ? (d = Ld[o].fontName, h = [o]) : (d = Vi(o, t.fontWeight, t.fontShape), h = [o, t.fontWeight, t.fontShape]);
    if ($l(i, d, a).metrics)
      return H0(i, d, a, t, l.concat(h));
    if (zd.hasOwnProperty(i) && d.slice(0, 10) === "Typewriter") {
      for (var _ = [], b = 0; b < i.length; b++)
        _.push(H0(i[b], d, a, t, l.concat(h)));
      return Id(_);
    }
  }
  if (r === "mathord")
    return H0(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var D = Re[a][i] && Re[a][i].font;
    if (D === "ams") {
      var y = Vi("amsrm", t.fontWeight, t.fontShape);
      return H0(i, y, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (D === "main" || !D) {
      var k = Vi("textrm", t.fontWeight, t.fontShape);
      return H0(i, k, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var w = Vi(D, t.fontWeight, t.fontShape);
      return H0(i, w, a, t, l.concat(w, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, d3 = (n, e) => {
  if (un(n.classes) !== un(e.classes) || n.skew !== e.skew || n.maxFontSize !== e.maxFontSize)
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
}, m3 = (n) => {
  for (var e = 0; e < n.length - 1; e++) {
    var t = n[e], r = n[e + 1];
    t instanceof T0 && r instanceof T0 && d3(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, n.splice(e + 1, 1), e--);
  }
  return n;
}, zu = function(e) {
  for (var t = 0, r = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = a;
}, t0 = function(e, t, r, a) {
  var i = new ii(e, t, r, a);
  return zu(i), i;
}, Bd = (n, e, t, r) => new ii(n, e, t, r), p3 = function(e, t, r) {
  var a = t0([e], [], t);
  return a.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = Z(a.height), a.maxFontSize = 1, a;
}, g3 = function(e, t, r, a) {
  var i = new Mu(e, t, r, a);
  return zu(i), i;
}, Id = function(e) {
  var t = new ai(e);
  return zu(t), t;
}, _3 = function(e, t) {
  return e instanceof ai ? t0([], [e], t) : e;
}, v3 = function(e) {
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
      var h = e.children[d];
      c -= h.type === "kern" ? h.size : h.elem.height + h.elem.depth;
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
}, b3 = function(e, t) {
  for (var {
    children: r,
    depth: a
  } = v3(e), i = 0, l = 0; l < r.length; l++) {
    var s = r[l];
    if (s.type === "elem") {
      var o = s.elem;
      i = Math.max(i, o.maxFontSize, o.height);
    }
  }
  i += 2;
  var u = t0(["pstrut"], []);
  u.style.height = Z(i);
  for (var c = [], d = a, h = a, p = a, _ = 0; _ < r.length; _++) {
    var b = r[_];
    if (b.type === "kern")
      p += b.size;
    else {
      var D = b.elem, y = b.wrapperClasses || [], k = b.wrapperStyle || {}, w = t0(y, [u, D], void 0, k);
      w.style.top = Z(-i - p - D.depth), b.marginLeft && (w.style.marginLeft = b.marginLeft), b.marginRight && (w.style.marginRight = b.marginRight), c.push(w), p += D.height + D.depth;
    }
    d = Math.min(d, p), h = Math.max(h, p);
  }
  var x = t0(["vlist"], c);
  x.style.height = Z(h);
  var E;
  if (d < 0) {
    var T = t0([], []), C = t0(["vlist"], [T]);
    C.style.height = Z(-d);
    var F = t0(["vlist-s"], [new T0("​")]);
    E = [t0(["vlist-r"], [x, F]), t0(["vlist-r"], [C])];
  } else
    E = [t0(["vlist-r"], [x])];
  var I = t0(["vlist-t"], E);
  return E.length === 2 && I.classes.push("vlist-t2"), I.height = h, I.depth = -d, I;
}, w3 = (n, e) => {
  var t = t0(["mspace"], [], e), r = Ze(n, e);
  return t.style.marginRight = Z(r), t;
}, Vi = function(e, t, r) {
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
}, Ld = {
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
}, Nd = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, y3 = function(e, t) {
  var [r, a, i] = Nd[e], l = new cn(r), s = new Br([l], {
    width: Z(a),
    height: Z(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Z(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = Bd(["overlay"], [s], t);
  return o.height = i, o.style.height = Z(i), o.style.width = Z(a), o;
}, N = {
  fontMap: Ld,
  makeSymbol: H0,
  mathsym: c3,
  makeSpan: t0,
  makeSvgSpan: Bd,
  makeLineSpan: p3,
  makeAnchor: g3,
  makeFragment: Id,
  wrapFragment: _3,
  makeVList: b3,
  makeOrd: h3,
  makeGlue: w3,
  staticSvg: y3,
  svgData: Nd,
  tryCombineChars: m3
}, Ye = {
  number: 3,
  unit: "mu"
}, yn = {
  number: 4,
  unit: "mu"
}, wr = {
  number: 5,
  unit: "mu"
}, k3 = {
  mord: {
    mop: Ye,
    mbin: yn,
    mrel: wr,
    minner: Ye
  },
  mop: {
    mord: Ye,
    mop: Ye,
    mrel: wr,
    minner: Ye
  },
  mbin: {
    mord: yn,
    mop: yn,
    mopen: yn,
    minner: yn
  },
  mrel: {
    mord: wr,
    mop: wr,
    mopen: wr,
    minner: wr
  },
  mopen: {},
  mclose: {
    mop: Ye,
    mbin: yn,
    mrel: wr,
    minner: Ye
  },
  mpunct: {
    mord: Ye,
    mop: Ye,
    mrel: wr,
    mopen: Ye,
    mclose: Ye,
    mpunct: Ye,
    minner: Ye
  },
  minner: {
    mord: Ye,
    mop: Ye,
    mbin: yn,
    mrel: wr,
    mopen: Ye,
    mpunct: Ye,
    minner: Ye
  }
}, D3 = {
  mord: {
    mop: Ye
  },
  mop: {
    mord: Ye,
    mop: Ye
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Ye
  },
  mpunct: {},
  minner: {
    mop: Ye
  }
}, Rd = {}, zl = {}, Bl = {};
function K(n) {
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
    Rd[t[o]] = s;
  e && (i && (zl[e] = i), l && (Bl[e] = l));
}
function Ln(n) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = n;
  K({
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
var Il = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, nt = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Ir = N.makeSpan, A3 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], E3 = ["rightmost", "mrel", "mclose", "mpunct"], S3 = {
  display: se.DISPLAY,
  text: se.TEXT,
  script: se.SCRIPT,
  scriptscript: se.SCRIPTSCRIPT
}, x3 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, wt = function(e, t, r, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var s = Se(e[l], t);
    if (s instanceof ai) {
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
    c.type === "sizing" ? u = t.havingSize(c.size) : c.type === "styling" && (u = t.havingStyle(S3[c.style]));
  }
  var d = Ir([a[0] || "leftmost"], [], t), h = Ir([a[1] || "rightmost"], [], t), p = r === "root";
  return ac(i, (_, b) => {
    var D = b.classes[0], y = _.classes[0];
    D === "mbin" && ae.contains(E3, y) ? b.classes[0] = "mord" : y === "mbin" && ae.contains(A3, D) && (_.classes[0] = "mord");
  }, {
    node: d
  }, h, p), ac(i, (_, b) => {
    var D = Qo(b), y = Qo(_), k = D && y ? _.hasClass("mtight") ? D3[D][y] : k3[D][y] : null;
    if (k)
      return N.makeGlue(k, u);
  }, {
    node: d
  }, h, p), i;
}, ac = function n(e, t, r, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = Od(s);
    if (o) {
      n(o.children, t, r, null, i);
      continue;
    }
    var u = !s.hasClass("mspace");
    if (u) {
      var c = t(s, r.node);
      c && (r.insertAfter ? r.insertAfter(c) : (e.unshift(c), l++));
    }
    u ? r.node = s : i && s.hasClass("newline") && (r.node = Ir(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((d) => (h) => {
      e.splice(d + 1, 0, h), l++;
    })(l);
  }
  a && e.pop();
}, Od = function(e) {
  return e instanceof ai || e instanceof Mu || e instanceof ii && e.hasClass("enclosing") ? e : null;
}, T3 = function n(e, t) {
  var r = Od(e);
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
}, Qo = function(e, t) {
  return e ? (t && (e = T3(e, t)), x3[e.classes[0]] || null) : null;
}, Ja = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Ir(t.concat(r));
}, Se = function(e, t, r) {
  if (!e)
    return Ir();
  if (zl[e.type]) {
    var a = zl[e.type](e, t);
    if (r && t.size !== r.size) {
      a = Ir(t.sizingClasses(r), [a], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new W("Got group of unknown type: '" + e.type + "'");
};
function Gi(n, e) {
  var t = Ir(["base"], n, e), r = Ir(["strut"]);
  return r.style.height = Z(t.height + t.depth), t.depth && (r.style.verticalAlign = Z(-t.depth)), t.children.unshift(r), t;
}
function $o(n, e) {
  var t = null;
  n.length === 1 && n[0].type === "tag" && (t = n[0].tag, n = n[0].body);
  var r = wt(n, e, "root"), a;
  r.length === 2 && r[1].hasClass("tag") && (a = r.pop());
  for (var i = [], l = [], s = 0; s < r.length; s++)
    if (l.push(r[s]), r[s].hasClass("mbin") || r[s].hasClass("mrel") || r[s].hasClass("allowbreak")) {
      for (var o = !1; s < r.length - 1 && r[s + 1].hasClass("mspace") && !r[s + 1].hasClass("newline"); )
        s++, l.push(r[s]), r[s].hasClass("nobreak") && (o = !0);
      o || (i.push(Gi(l, e)), l = []);
    } else r[s].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(Gi(l, e)), l = []), i.push(r[s]));
  l.length > 0 && i.push(Gi(l, e));
  var u;
  t ? (u = Gi(wt(t, e, !0)), u.classes = ["tag"], i.push(u)) : a && i.push(a);
  var c = Ir(["katex-html"], i);
  if (c.setAttribute("aria-hidden", "true"), u) {
    var d = u.children[0];
    d.style.height = Z(c.height + c.depth), c.depth && (d.style.verticalAlign = Z(-c.depth));
  }
  return c;
}
function qd(n) {
  return new ai(n);
}
class k0 {
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
    this.classes.length > 0 && (e.className = un(this.classes));
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += ae.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + ae.escape(un(this.classes)) + '"'), e += ">";
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
class Ha {
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
    return ae.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class C3 {
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
  MathNode: k0,
  TextNode: Ha,
  SpaceNode: C3,
  newDocumentFragment: qd
}, C0 = function(e, t, r) {
  return Re[t][e] && Re[t][e].replace && e.charCodeAt(0) !== 55349 && !(zd.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = Re[t][e].replace), new j.TextNode(e);
}, Bu = function(e) {
  return e.length === 1 ? e[0] : new j.MathNode("mrow", e);
}, Iu = function(e, t) {
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
  if (ae.contains(["\\imath", "\\jmath"], i))
    return null;
  Re[a][i] && Re[a][i].replace && (i = Re[a][i].replace);
  var l = N.fontMap[r].fontName;
  return Fu(i, l, a) ? N.fontMap[r].variant : null;
}, i0 = function(e, t, r) {
  if (e.length === 1) {
    var a = Le(e[0], t);
    return r && a instanceof k0 && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = Le(e[s], t);
    if (o instanceof k0 && l instanceof k0) {
      if (o.type === "mtext" && l.type === "mtext" && o.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mi" && o.children.length === 1 && l.type === "mn") {
        var u = o.children[0];
        if (u instanceof Ha && u.text === ".") {
          l.children.push(...o.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var c = l.children[0];
        if (c instanceof Ha && c.text === "̸" && (o.type === "mo" || o.type === "mi" || o.type === "mn")) {
          var d = o.children[0];
          d instanceof Ha && d.text.length > 0 && (d.text = d.text.slice(0, 1) + "̸" + d.text.slice(1), i.pop());
        }
      }
    }
    i.push(o), l = o;
  }
  return i;
}, fn = function(e, t, r) {
  return Bu(i0(e, t, r));
}, Le = function(e, t) {
  if (!e)
    return new j.MathNode("mrow");
  if (Bl[e.type]) {
    var r = Bl[e.type](e, t);
    return r;
  } else
    throw new W("Got group of unknown type: '" + e.type + "'");
};
function ic(n, e, t, r, a) {
  var i = i0(n, t), l;
  i.length === 1 && i[0] instanceof k0 && ae.contains(["mrow", "mtable"], i[0].type) ? l = i[0] : l = new j.MathNode("mrow", i);
  var s = new j.MathNode("annotation", [new j.TextNode(e)]);
  s.setAttribute("encoding", "application/x-tex");
  var o = new j.MathNode("semantics", [l, s]), u = new j.MathNode("math", [o]);
  u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && u.setAttribute("display", "block");
  var c = a ? "katex" : "katex-mathml";
  return N.makeSpan([c], [u]);
}
var Pd = function(e) {
  return new Dr({
    style: e.displayMode ? se.DISPLAY : se.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Hd = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = N.makeSpan(r, [e]);
  }
  return e;
}, F3 = function(e, t, r) {
  var a = Pd(r), i;
  if (r.output === "mathml")
    return ic(e, t, a, r.displayMode, !0);
  if (r.output === "html") {
    var l = $o(e, a);
    i = N.makeSpan(["katex"], [l]);
  } else {
    var s = ic(e, t, a, r.displayMode, !1), o = $o(e, a);
    i = N.makeSpan(["katex"], [s, o]);
  }
  return Hd(i, r);
}, M3 = function(e, t, r) {
  var a = Pd(r), i = $o(e, a), l = N.makeSpan(["katex"], [i]);
  return Hd(l, r);
}, z3 = {
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
}, B3 = function(e) {
  var t = new j.MathNode("mo", [new j.TextNode(z3[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, I3 = {
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
}, L3 = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, N3 = function(e, t) {
  function r() {
    var s = 4e5, o = e.label.slice(1);
    if (ae.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var u = e, c = L3(u.base), d, h, p;
      if (c > 5)
        o === "widehat" || o === "widecheck" ? (d = 420, s = 2364, p = 0.42, h = o + "4") : (d = 312, s = 2340, p = 0.34, h = "tilde4");
      else {
        var _ = [1, 1, 2, 2, 3, 3][c];
        o === "widehat" || o === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][_], d = [0, 239, 300, 360, 420][_], p = [0, 0.24, 0.3, 0.3, 0.36, 0.42][_], h = o + _) : (s = [0, 600, 1033, 2339, 2340][_], d = [0, 260, 286, 306, 312][_], p = [0, 0.26, 0.286, 0.3, 0.306, 0.34][_], h = "tilde" + _);
      }
      var b = new cn(h), D = new Br([b], {
        width: "100%",
        height: Z(p),
        viewBox: "0 0 " + s + " " + d,
        preserveAspectRatio: "none"
      });
      return {
        span: N.makeSvgSpan([], [D], t),
        minWidth: 0,
        height: p
      };
    } else {
      var y = [], k = I3[o], [w, x, E] = k, T = E / 1e3, C = w.length, F, I;
      if (C === 1) {
        var L = k[3];
        F = ["hide-tail"], I = [L];
      } else if (C === 2)
        F = ["halfarrow-left", "halfarrow-right"], I = ["xMinYMin", "xMaxYMin"];
      else if (C === 3)
        F = ["brace-left", "brace-center", "brace-right"], I = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + C + " children.");
      for (var B = 0; B < C; B++) {
        var q = new cn(w[B]), J = new Br([q], {
          width: "400em",
          height: Z(T),
          viewBox: "0 0 " + s + " " + E,
          preserveAspectRatio: I[B] + " slice"
        }), Y = N.makeSvgSpan([F[B]], [J], t);
        if (C === 1)
          return {
            span: Y,
            minWidth: x,
            height: T
          };
        Y.style.height = Z(T), y.push(Y);
      }
      return {
        span: N.makeSpan(["stretchy"], y, t),
        minWidth: x,
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
}, R3 = function(e, t, r, a, i) {
  var l, s = e.height + e.depth + r + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = N.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var o = i.color && i.getColor();
      o && (l.style.borderColor = o);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new Ko({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new Ko({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var c = new Br(u, {
      width: "100%",
      height: Z(s)
    });
    l = N.makeSvgSpan([], [c], i);
  }
  return l.height = s, l.style.height = Z(s), l;
}, Lr = {
  encloseSpan: R3,
  mathMLnode: B3,
  svgSpan: N3
};
function me(n, e) {
  if (!n || n.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function Lu(n) {
  var e = es(n);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return e;
}
function es(n) {
  return n && (n.type === "atom" || o3.hasOwnProperty(n.type)) ? n : null;
}
var Nu = (n, e) => {
  var t, r, a;
  n && n.type === "supsub" ? (r = me(n.base, "accent"), t = r.base, n.base = t, a = l3(Se(n, e)), n.base = r) : (r = me(n, "accent"), t = r.base);
  var i = Se(t, e.havingCrampedStyle()), l = r.isShifty && ae.isCharacterBox(t), s = 0;
  if (l) {
    var o = ae.getBaseElem(t), u = Se(o, e.havingCrampedStyle());
    s = Q1(u).skew;
  }
  var c = r.label === "\\c", d = c ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), h;
  if (r.isStretchy)
    h = Lr.svgSpan(r, e), h = N.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: h,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + Z(2 * s) + ")",
          marginLeft: Z(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var p, _;
    r.label === "\\vec" ? (p = N.staticSvg("vec", e), _ = N.svgData.vec[1]) : (p = N.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), p = Q1(p), p.italic = 0, _ = p.width, c && (d += p.depth)), h = N.makeSpan(["accent-body"], [p]);
    var b = r.label === "\\textcircled";
    b && (h.classes.push("accent-full"), d = i.height);
    var D = s;
    b || (D -= _ / 2), h.style.left = Z(D), r.label === "\\textcircled" && (h.style.top = ".2em"), h = N.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -d
      }, {
        type: "elem",
        elem: h
      }]
    }, e);
  }
  var y = N.makeSpan(["mord", "accent"], [h], e);
  return a ? (a.children[0] = y, a.height = Math.max(y.height, a.height), a.classes[0] = "mord", a) : y;
}, Ud = (n, e) => {
  var t = n.isStretchy ? Lr.mathMLnode(n.label) : new j.MathNode("mo", [C0(n.label, n.mode)]), r = new j.MathNode("mover", [Le(n.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, O3 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
K({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var t = Il(e[0]), r = !O3.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Nu,
  mathmlBuilder: Ud
});
K({
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
  htmlBuilder: Nu,
  mathmlBuilder: Ud
});
K({
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
    var t = Se(n.base, e), r = Lr.svgSpan(n, e), a = n.label === "\\utilde" ? 0.12 : 0, i = N.makeVList({
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
    var t = Lr.mathMLnode(n.label), r = new j.MathNode("munder", [Le(n.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var ji = (n) => {
  var e = new j.MathNode("mpadded", n ? [n] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
K({
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
    var t = e.style, r = e.havingStyle(t.sup()), a = N.wrapFragment(Se(n.body, r, e), e), i = n.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    n.below && (r = e.havingStyle(t.sub()), l = N.wrapFragment(Se(n.below, r, e), e), l.classes.push(i + "-arrow-pad"));
    var s = Lr.svgSpan(n, e), o = -e.fontMetrics().axisHeight + 0.5 * s.height, u = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
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
    var t = Lr.mathMLnode(n.label);
    t.setAttribute("minsize", n.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (n.body) {
      var a = ji(Le(n.body, e));
      if (n.below) {
        var i = ji(Le(n.below, e));
        r = new j.MathNode("munderover", [t, i, a]);
      } else
        r = new j.MathNode("mover", [t, a]);
    } else if (n.below) {
      var l = ji(Le(n.below, e));
      r = new j.MathNode("munder", [t, l]);
    } else
      r = ji(), r = new j.MathNode("mover", [t, r]);
    return r;
  }
});
var q3 = N.makeSpan;
function Vd(n, e) {
  var t = wt(n.body, e, !0);
  return q3([n.mclass], t, e);
}
function Gd(n, e) {
  var t, r = i0(n.body, e);
  return n.mclass === "minner" ? t = new j.MathNode("mpadded", r) : n.mclass === "mord" ? n.isCharacterBox ? (t = r[0], t.type = "mi") : t = new j.MathNode("mi", r) : (n.isCharacterBox ? (t = r[0], t.type = "mo") : t = new j.MathNode("mo", r), n.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : n.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : n.mclass === "mopen" || n.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : n.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
K({
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
      body: nt(a),
      isCharacterBox: ae.isCharacterBox(a)
    };
  },
  htmlBuilder: Vd,
  mathmlBuilder: Gd
});
var ts = (n) => {
  var e = n.type === "ordgroup" && n.body.length ? n.body[0] : n;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
K({
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
      mclass: ts(e[0]),
      body: nt(e[1]),
      isCharacterBox: ae.isCharacterBox(e[1])
    };
  }
});
K({
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
    r !== "\\stackrel" ? l = ts(a) : l = "mrel";
    var s = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: nt(a)
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
      isCharacterBox: ae.isCharacterBox(o)
    };
  },
  htmlBuilder: Vd,
  mathmlBuilder: Gd
});
K({
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
      mclass: ts(e[0]),
      body: nt(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = wt(n.body, e, !0), r = N.makeSpan([n.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, e) {
    var t = i0(n.body, e), r = new j.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var P3 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, lc = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), sc = (n) => n.type === "textord" && n.text === "@", H3 = (n, e) => (n.type === "mathord" || n.type === "atom") && n.text === e;
function U3(n, e, t) {
  var r = P3[n];
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
function V3(n) {
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
      throw new W("Expected \\\\ or \\cr or \\end", n.nextToken);
  }
  for (var r = [], a = [r], i = 0; i < e.length; i++) {
    for (var l = e[i], s = lc(), o = 0; o < l.length; o++)
      if (!sc(l[o]))
        s.body.push(l[o]);
      else {
        r.push(s), o += 1;
        var u = Lu(l[o]).text, c = new Array(2);
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
            for (var h = !0, p = o + 1; p < l.length; p++) {
              if (H3(l[p], u)) {
                h = !1, o = p;
                break;
              }
              if (sc(l[p]))
                throw new W("Missing a " + u + " character to complete a CD arrow.", l[p]);
              c[d].body.push(l[p]);
            }
            if (h)
              throw new W("Missing a " + u + " character to complete a CD arrow.", l[o]);
          }
        else
          throw new W('Expected one of "<>AV=|." after @', l[o]);
        var _ = U3(u, c, n), b = {
          type: "styling",
          body: [_],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(b), s = lc();
      }
    i % 2 === 0 ? r.push(s) : r.shift(), r = [], a.push(r);
  }
  n.gullet.endGroup(), n.gullet.endGroup();
  var D = new Array(a[0].length).fill({
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
    cols: D,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
K({
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
    var t = e.havingStyle(e.style.sup()), r = N.wrapFragment(Se(n.label, t, e), e);
    return r.classes.push("cd-label-" + n.side), r.style.bottom = Z(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mrow", [Le(n.label, e)]);
    return t = new j.MathNode("mpadded", [t]), t.setAttribute("width", "0"), n.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new j.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
K({
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
    var t = N.wrapFragment(Se(n.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(n, e) {
    return new j.MathNode("mrow", [Le(n.fragment, e)]);
  }
});
K({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    for (var {
      parser: t
    } = n, r = me(e[0], "ordgroup"), a = r.body, i = "", l = 0; l < a.length; l++) {
      var s = me(a[l], "textord");
      i += s.text;
    }
    var o = parseInt(i), u;
    if (isNaN(o))
      throw new W("\\@char has non-numeric argument " + i);
    if (o < 0 || o >= 1114111)
      throw new W("\\@char with invalid code point " + i);
    return o <= 65535 ? u = String.fromCharCode(o) : (o -= 65536, u = String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var jd = (n, e) => {
  var t = wt(n.body, e.withColor(n.color), !1);
  return N.makeFragment(t);
}, Wd = (n, e) => {
  var t = i0(n.body, e.withColor(n.color)), r = new j.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", n.color), r;
};
K({
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
    } = n, r = me(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: nt(a)
    };
  },
  htmlBuilder: jd,
  mathmlBuilder: Wd
});
K({
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
    } = n, a = me(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: jd,
  mathmlBuilder: Wd
});
K({
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
      size: a && me(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(n, e) {
    var t = N.makeSpan(["mspace"], [], e);
    return n.newLine && (t.classes.push("newline"), n.size && (t.style.marginTop = Z(Ze(n.size, e)))), t;
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mspace");
    return n.newLine && (t.setAttribute("linebreak", "newline"), n.size && t.setAttribute("height", Z(Ze(n.size, e)))), t;
  }
});
var eu = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Xd = (n) => {
  var e = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new W("Expected a control sequence", n);
  return e;
}, G3 = (n) => {
  var e = n.gullet.popToken();
  return e.text === "=" && (e = n.gullet.popToken(), e.text === " " && (e = n.gullet.popToken())), e;
}, Yd = (n, e, t, r) => {
  var a = n.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !n.gullet.isExpandable(t.text)
  }), n.gullet.macros.set(e, a, r);
};
K({
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
    if (eu[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = eu[r.text]), me(e.parseFunction(), "internal");
    throw new W("Invalid token after macro prefix", r);
  }
});
K({
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
      throw new W("Expected a control sequence", r);
    for (var i = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new W('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new W('Argument number "' + r.text + '" out of order');
        i++, s.push([]);
      } else {
        if (r.text === "EOF")
          throw new W("Expected a macro definition");
        s[i].push(r.text);
      }
    var {
      tokens: o
    } = e.gullet.consumeArg();
    return l && o.unshift(l), (t === "\\edef" || t === "\\xdef") && (o = e.gullet.expandTokens(o), o.reverse()), e.gullet.macros.set(a, {
      tokens: o,
      numArgs: i,
      delimiters: s
    }, t === eu[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
K({
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
    } = n, r = Xd(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = G3(e);
    return Yd(e, r, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
K({
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
    } = n, r = Xd(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Yd(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var qa = function(e, t, r) {
  var a = Re.math[e] && Re.math[e].replace, i = Fu(a || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Ru = function(e, t, r, a) {
  var i = r.havingBaseStyle(t), l = N.makeSpan(a.concat(i.sizingClasses(r)), [e], r), s = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, Zd = function(e, t, r) {
  var a = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = Z(i), e.height -= i, e.depth += i;
}, j3 = function(e, t, r, a, i, l) {
  var s = N.makeSymbol(e, "Main-Regular", i, a), o = Ru(s, t, a, l);
  return r && Zd(o, a, t), o;
}, W3 = function(e, t, r, a) {
  return N.makeSymbol(e, "Size" + t + "-Regular", r, a);
}, Kd = function(e, t, r, a, i, l) {
  var s = W3(e, t, i, a), o = Ru(N.makeSpan(["delimsizing", "size" + t], [s], a), se.TEXT, a, l);
  return r && Zd(o, a, se.TEXT), o;
}, eo = function(e, t, r) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = N.makeSpan(["delimsizinginner", a], [N.makeSpan([], [N.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, to = function(e, t, r) {
  var a = nr["Size4-Regular"][e.charCodeAt(0)] ? nr["Size4-Regular"][e.charCodeAt(0)][4] : nr["Size1-Regular"][e.charCodeAt(0)][4], i = new cn("inner", Q5(e, Math.round(1e3 * t))), l = new Br([i], {
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
}, tu = 8e-3, Wi = {
  type: "kern",
  size: -1 * tu
}, X3 = ["|", "\\lvert", "\\rvert", "\\vert"], Y3 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Jd = function(e, t, r, a, i, l) {
  var s, o, u, c, d = "", h = 0;
  s = u = c = e, o = null;
  var p = "Size1-Regular";
  e === "\\uparrow" ? u = c = "⏐" : e === "\\Uparrow" ? u = c = "‖" : e === "\\downarrow" ? s = u = "⏐" : e === "\\Downarrow" ? s = u = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", u = "⏐", c = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", u = "‖", c = "\\Downarrow") : ae.contains(X3, e) ? (u = "∣", d = "vert", h = 333) : ae.contains(Y3, e) ? (u = "∥", d = "doublevert", h = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", u = "⎢", c = "⎣", p = "Size4-Regular", d = "lbrack", h = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", u = "⎥", c = "⎦", p = "Size4-Regular", d = "rbrack", h = 667) : e === "\\lfloor" || e === "⌊" ? (u = s = "⎢", c = "⎣", p = "Size4-Regular", d = "lfloor", h = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", u = c = "⎢", p = "Size4-Regular", d = "lceil", h = 667) : e === "\\rfloor" || e === "⌋" ? (u = s = "⎥", c = "⎦", p = "Size4-Regular", d = "rfloor", h = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", u = c = "⎥", p = "Size4-Regular", d = "rceil", h = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", u = "⎜", c = "⎝", p = "Size4-Regular", d = "lparen", h = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", u = "⎟", c = "⎠", p = "Size4-Regular", d = "rparen", h = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", c = "⎩", u = "⎪", p = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", c = "⎭", u = "⎪", p = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", c = "⎩", u = "⎪", p = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", c = "⎭", u = "⎪", p = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", c = "⎭", u = "⎪", p = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", c = "⎩", u = "⎪", p = "Size4-Regular");
  var _ = qa(s, p, i), b = _.height + _.depth, D = qa(u, p, i), y = D.height + D.depth, k = qa(c, p, i), w = k.height + k.depth, x = 0, E = 1;
  if (o !== null) {
    var T = qa(o, p, i);
    x = T.height + T.depth, E = 2;
  }
  var C = b + w + x, F = Math.max(0, Math.ceil((t - C) / (E * y))), I = C + F * E * y, L = a.fontMetrics().axisHeight;
  r && (L *= a.sizeMultiplier);
  var B = I / 2 - L, q = [];
  if (d.length > 0) {
    var J = I - b - w, Y = Math.round(I * 1e3), O = $5(d, Math.round(J * 1e3)), te = new cn(d, O), ie = (h / 1e3).toFixed(3) + "em", oe = (Y / 1e3).toFixed(3) + "em", ye = new Br([te], {
      width: ie,
      height: oe,
      viewBox: "0 0 " + h + " " + Y
    }), we = N.makeSvgSpan([], [ye], a);
    we.height = Y / 1e3, we.style.width = ie, we.style.height = oe, q.push({
      type: "elem",
      elem: we
    });
  } else {
    if (q.push(eo(c, p, i)), q.push(Wi), o === null) {
      var $ = I - b - w + 2 * tu;
      q.push(to(u, $, a));
    } else {
      var fe = (I - b - w - x) / 2 + 2 * tu;
      q.push(to(u, fe, a)), q.push(Wi), q.push(eo(o, p, i)), q.push(Wi), q.push(to(u, fe, a));
    }
    q.push(Wi), q.push(eo(s, p, i));
  }
  var ve = a.havingBaseStyle(se.TEXT), Oe = N.makeVList({
    positionType: "bottom",
    positionData: B,
    children: q
  }, ve);
  return Ru(N.makeSpan(["delimsizing", "mult"], [Oe], ve), se.TEXT, a, l);
}, ro = 80, no = 0.08, ao = function(e, t, r, a, i) {
  var l = J5(e, a, r), s = new cn(e, l), o = new Br([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: Z(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return N.makeSvgSpan(["hide-tail"], [o], i);
}, Z3 = function(e, t) {
  var r = t.havingBaseSizing(), a = t4("\\surd", e * r.sizeMultiplier, e4, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, u = 0, c = 0, d;
  return a.type === "small" ? (c = 1e3 + 1e3 * l + ro, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + no) / i, u = (1 + l) / i, s = ao("sqrtMain", o, c, l, t), s.style.minWidth = "0.853em", d = 0.833 / i) : a.type === "large" ? (c = (1e3 + ro) * Ua[a.size], u = (Ua[a.size] + l) / i, o = (Ua[a.size] + l + no) / i, s = ao("sqrtSize" + a.size, o, c, l, t), s.style.minWidth = "1.02em", d = 1 / i) : (o = e + l + no, u = e + l, c = Math.floor(1e3 * e + l) + ro, s = ao("sqrtTall", o, c, l, t), s.style.minWidth = "0.742em", d = 1.056), s.height = u, s.style.height = Z(o), {
    span: s,
    advanceWidth: d,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Qd = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], K3 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], $d = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Ua = [0, 1.2, 1.8, 2.4, 3], J3 = function(e, t, r, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ae.contains(Qd, e) || ae.contains($d, e))
    return Kd(e, t, !1, r, a, i);
  if (ae.contains(K3, e))
    return Jd(e, Ua[t], !1, r, a, i);
  throw new W("Illegal delimiter: '" + e + "'");
}, Q3 = [{
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
}], $3 = [{
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
}], e4 = [{
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
}], e6 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, t4 = function(e, t, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var s = qa(e, e6(r[l]), "math"), o = s.height + s.depth;
    if (r[l].type === "small") {
      var u = a.havingBaseStyle(r[l].style);
      o *= u.sizeMultiplier;
    }
    if (o > t)
      return r[l];
  }
  return r[r.length - 1];
}, r4 = function(e, t, r, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  ae.contains($d, e) ? s = Q3 : ae.contains(Qd, e) ? s = e4 : s = $3;
  var o = t4(e, t, s, a);
  return o.type === "small" ? j3(e, o.style, r, a, i, l) : o.type === "large" ? Kd(e, o.size, r, a, i, l) : Jd(e, t, r, a, i, l);
}, t6 = function(e, t, r, a, i, l) {
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
  return r4(e, d, !0, a, i, l);
}, Cr = {
  sqrtImage: Z3,
  sizedDelim: J3,
  sizeToMaxHeight: Ua,
  customSizedDelim: r4,
  leftRightDelim: t6
}, oc = {
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
}, r6 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function rs(n, e) {
  var t = es(n);
  if (t && ae.contains(r6, t.text))
    return t;
  throw t ? new W("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", n) : new W("Invalid delimiter type '" + n.type + "'", n);
}
K({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = rs(e[0], n);
    return {
      type: "delimsizing",
      mode: n.parser.mode,
      size: oc[n.funcName].size,
      mclass: oc[n.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => n.delim === "." ? N.makeSpan([n.mclass]) : Cr.sizedDelim(n.delim, n.size, e, n.mode, [n.mclass]),
  mathmlBuilder: (n) => {
    var e = [];
    n.delim !== "." && e.push(C0(n.delim, n.mode));
    var t = new j.MathNode("mo", e);
    n.mclass === "mopen" || n.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = Z(Cr.sizeToMaxHeight[n.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function uc(n) {
  if (!n.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
K({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = n.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new W("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: n.parser.mode,
      delim: rs(e[0], n).text,
      color: t
      // undefined if not set via \color
    };
  }
});
K({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = rs(e[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = me(r.parseFunction(), "leftright-right");
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
    uc(n);
    for (var t = wt(n.body, e, !0, ["mopen", "mclose"]), r = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (r = Math.max(t[l].height, r), a = Math.max(t[l].depth, a));
    r *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var s;
    if (n.left === "." ? s = Ja(e, ["mopen"]) : s = Cr.leftRightDelim(n.left, r, a, e, n.mode, ["mopen"]), t.unshift(s), i)
      for (var o = 1; o < t.length; o++) {
        var u = t[o], c = u.isMiddle;
        c && (t[o] = Cr.leftRightDelim(c.delim, r, a, c.options, n.mode, []));
      }
    var d;
    if (n.right === ".")
      d = Ja(e, ["mclose"]);
    else {
      var h = n.rightColor ? e.withColor(n.rightColor) : e;
      d = Cr.leftRightDelim(n.right, r, a, h, n.mode, ["mclose"]);
    }
    return t.push(d), N.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (n, e) => {
    uc(n);
    var t = i0(n.body, e);
    if (n.left !== ".") {
      var r = new j.MathNode("mo", [C0(n.left, n.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (n.right !== ".") {
      var a = new j.MathNode("mo", [C0(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), t.push(a);
    }
    return Bu(t);
  }
});
K({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = rs(e[0], n);
    if (!n.parser.leftrightDepth)
      throw new W("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: n.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    if (n.delim === ".")
      t = Ja(e, []);
    else {
      t = Cr.sizedDelim(n.delim, 1, e, n.mode, []);
      var r = {
        delim: n.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (n, e) => {
    var t = n.delim === "\\vert" || n.delim === "|" ? C0("|", "text") : C0(n.delim, n.mode), r = new j.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var Ou = (n, e) => {
  var t = N.wrapFragment(Se(n.body, e), e), r = n.label.slice(1), a = e.sizeMultiplier, i, l = 0, s = ae.isCharacterBox(n.body);
  if (r === "sout")
    i = N.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var o = Ze({
      number: 0.6,
      unit: "pt"
    }, e), u = Ze({
      number: 0.35,
      unit: "ex"
    }, e), c = e.havingBaseSizing();
    a = a / c.sizeMultiplier;
    var d = t.height + t.depth + o + u;
    t.style.paddingLeft = Z(d / 2 + o);
    var h = Math.floor(1e3 * d * a), p = Z5(h), _ = new Br([new cn("phase", p)], {
      width: "400em",
      height: Z(h / 1e3),
      viewBox: "0 0 400000 " + h,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = N.makeSvgSpan(["hide-tail"], [_], e), i.style.height = Z(d), l = t.depth + o + u;
  } else {
    /cancel/.test(r) ? s || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var b = 0, D = 0, y = 0;
    /box/.test(r) ? (y = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), b = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : y), D = b) : r === "angl" ? (y = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), b = 4 * y, D = Math.max(0, 0.25 - t.depth)) : (b = s ? 0.2 : 0, D = b), i = Lr.encloseSpan(t, r, b, D, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = Z(y)) : r === "angl" && y !== 0.049 && (i.style.borderTopWidth = Z(y), i.style.borderRightWidth = Z(y)), l = t.depth + D, n.backgroundColor && (i.style.backgroundColor = n.backgroundColor, n.borderColor && (i.style.borderColor = n.borderColor));
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
    var w = /cancel|phase/.test(r) ? ["svg-align"] : [];
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
          wrapperClasses: w
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (k.height = t.height, k.depth = t.depth), /cancel/.test(r) && !s ? N.makeSpan(["mord", "cancel-lap"], [k], e) : N.makeSpan(["mord"], [k], e);
}, qu = (n, e) => {
  var t = 0, r = new j.MathNode(n.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Le(n.body, e)]);
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
K({
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
    } = n, i = me(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Ou,
  mathmlBuilder: qu
});
K({
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
    } = n, i = me(e[0], "color-token").color, l = me(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: Ou,
  mathmlBuilder: qu
});
K({
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
K({
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
  htmlBuilder: Ou,
  mathmlBuilder: qu
});
K({
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
var n4 = {};
function mr(n) {
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
    n4[t[o]] = s;
  i && (zl[e] = i), l && (Bl[e] = l);
}
var a4 = {};
function v(n, e) {
  a4[n] = e;
}
function cc(n) {
  var e = [];
  n.consumeSpaces();
  var t = n.fetch().text;
  for (t === "\\relax" && (n.consume(), n.consumeSpaces(), t = n.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    n.consume(), e.push(t === "\\hdashline"), n.consumeSpaces(), t = n.fetch().text;
  return e;
}
var ns = (n) => {
  var e = n.parser.settings;
  if (!e.displayMode)
    throw new W("{" + n.envName + "} can be used only in display mode.");
};
function Pu(n) {
  if (n.indexOf("ed") === -1)
    return n.indexOf("*") === -1;
}
function mn(n, e, t) {
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
    leqno: h
  } = e;
  if (n.gullet.beginGroup(), u || n.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var p = n.gullet.expandMacroAsText("\\arraystretch");
    if (p == null)
      l = 1;
    else if (l = parseFloat(p), !l || l < 0)
      throw new W("Invalid \\arraystretch: " + p);
  }
  n.gullet.beginGroup();
  var _ = [], b = [_], D = [], y = [], k = o != null ? [] : void 0;
  function w() {
    o && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function x() {
    k && (n.gullet.macros.get("\\df@tag") ? (k.push(n.subparse([new x0("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : k.push(!!o && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (w(), y.push(cc(n)); ; ) {
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
    }), _.push(E);
    var T = n.fetch().text;
    if (T === "&") {
      if (d && _.length === d) {
        if (u || s)
          throw new W("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (T === "\\end") {
      x(), _.length === 1 && E.type === "styling" && E.body[0].body.length === 0 && (b.length > 1 || !c) && b.pop(), y.length < b.length + 1 && y.push([]);
      break;
    } else if (T === "\\\\") {
      n.consume();
      var C = void 0;
      n.gullet.future().text !== " " && (C = n.parseSizeGroup(!0)), D.push(C ? C.value : null), x(), y.push(cc(n)), _ = [], b.push(_), w();
    } else
      throw new W("Expected & or \\\\ or \\cr or \\end", n.nextToken);
  }
  return n.gullet.endGroup(), n.gullet.endGroup(), {
    type: "array",
    mode: n.mode,
    addJot: a,
    arraystretch: l,
    body: b,
    cols: i,
    rowGaps: D,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: y,
    colSeparationType: s,
    tags: k,
    leqno: h
  };
}
function Hu(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var pr = function(e, t) {
  var r, a, i = e.body.length, l = e.hLinesBeforeRow, s = 0, o = new Array(i), u = [], c = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), d = 1 / t.fontMetrics().ptPerEm, h = 5 * d;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var p = t.havingStyle(se.SCRIPT).sizeMultiplier;
    h = 0.2778 * (p / t.sizeMultiplier);
  }
  var _ = e.colSeparationType === "CD" ? Ze({
    number: 3,
    unit: "ex"
  }, t) : 12 * d, b = 3 * d, D = e.arraystretch * _, y = 0.7 * D, k = 0.3 * D, w = 0;
  function x(We) {
    for (var dt = 0; dt < We.length; ++dt)
      dt > 0 && (w += 0.25), u.push({
        pos: w,
        isDashed: We[dt]
      });
  }
  for (x(l[0]), r = 0; r < e.body.length; ++r) {
    var E = e.body[r], T = y, C = k;
    s < E.length && (s = E.length);
    var F = new Array(E.length);
    for (a = 0; a < E.length; ++a) {
      var I = Se(E[a], t);
      C < I.depth && (C = I.depth), T < I.height && (T = I.height), F[a] = I;
    }
    var L = e.rowGaps[r], B = 0;
    L && (B = Ze(L, t), B > 0 && (B += k, C < B && (C = B), B = 0)), e.addJot && (C += b), F.height = T, F.depth = C, w += T, F.pos = w, w += C + B, o[r] = F, x(l[r + 1]);
  }
  var q = w / 2 + t.fontMetrics().axisHeight, J = e.cols || [], Y = [], O, te, ie = [];
  if (e.tags && e.tags.some((We) => We))
    for (r = 0; r < i; ++r) {
      var oe = o[r], ye = oe.pos - q, we = e.tags[r], $ = void 0;
      we === !0 ? $ = N.makeSpan(["eqn-num"], [], t) : we === !1 ? $ = N.makeSpan([], [], t) : $ = N.makeSpan([], wt(we, t, !0), t), $.depth = oe.depth, $.height = oe.height, ie.push({
        type: "elem",
        elem: $,
        shift: ye
      });
    }
  for (
    a = 0, te = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || te < J.length;
    ++a, ++te
  ) {
    for (var fe = J[te] || {}, ve = !0; fe.type === "separator"; ) {
      if (ve || (O = N.makeSpan(["arraycolsep"], []), O.style.width = Z(t.fontMetrics().doubleRuleSep), Y.push(O)), fe.separator === "|" || fe.separator === ":") {
        var Oe = fe.separator === "|" ? "solid" : "dashed", P = N.makeSpan(["vertical-separator"], [], t);
        P.style.height = Z(w), P.style.borderRightWidth = Z(c), P.style.borderRightStyle = Oe, P.style.margin = "0 " + Z(-c / 2);
        var Fe = w - q;
        Fe && (P.style.verticalAlign = Z(-Fe)), Y.push(P);
      } else
        throw new W("Invalid separator type: " + fe.separator);
      te++, fe = J[te] || {}, ve = !1;
    }
    if (!(a >= s)) {
      var Ce = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Ce = ae.deflt(fe.pregap, h), Ce !== 0 && (O = N.makeSpan(["arraycolsep"], []), O.style.width = Z(Ce), Y.push(O)));
      var V = [];
      for (r = 0; r < i; ++r) {
        var Ae = o[r], ke = Ae[a];
        if (ke) {
          var xe = Ae.pos - q;
          ke.depth = Ae.depth, ke.height = Ae.height, V.push({
            type: "elem",
            elem: ke,
            shift: xe
          });
        }
      }
      V = N.makeVList({
        positionType: "individualShift",
        children: V
      }, t), V = N.makeSpan(["col-align-" + (fe.align || "c")], [V]), Y.push(V), (a < s - 1 || e.hskipBeforeAndAfter) && (Ce = ae.deflt(fe.postgap, h), Ce !== 0 && (O = N.makeSpan(["arraycolsep"], []), O.style.width = Z(Ce), Y.push(O)));
    }
  }
  if (o = N.makeSpan(["mtable"], Y), u.length > 0) {
    for (var $e = N.makeLineSpan("hline", t, c), je = N.makeLineSpan("hdashline", t, c), Ne = [{
      type: "elem",
      elem: o,
      shift: 0
    }]; u.length > 0; ) {
      var et = u.pop(), yt = et.pos - q;
      et.isDashed ? Ne.push({
        type: "elem",
        elem: je,
        shift: yt
      }) : Ne.push({
        type: "elem",
        elem: $e,
        shift: yt
      });
    }
    o = N.makeVList({
      positionType: "individualShift",
      children: Ne
    }, t);
  }
  if (ie.length === 0)
    return N.makeSpan(["mord"], [o], t);
  var ot = N.makeVList({
    positionType: "individualShift",
    children: ie
  }, t);
  return ot = N.makeSpan(["tag"], [ot], t), N.makeFragment([o, ot]);
}, n6 = {
  c: "center ",
  l: "left ",
  r: "right "
}, gr = function(e, t) {
  for (var r = [], a = new j.MathNode("mtd", [], ["mtr-glue"]), i = new j.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], u = 0; u < s.length; u++)
      o.push(new j.MathNode("mtd", [Le(s[u], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), r.push(new j.MathNode("mtr", o));
  }
  var c = new j.MathNode("mtable", r), d = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  c.setAttribute("rowspacing", Z(d));
  var h = "", p = "";
  if (e.cols && e.cols.length > 0) {
    var _ = e.cols, b = "", D = !1, y = 0, k = _.length;
    _[0].type === "separator" && (h += "top ", y = 1), _[_.length - 1].type === "separator" && (h += "bottom ", k -= 1);
    for (var w = y; w < k; w++)
      _[w].type === "align" ? (p += n6[_[w].align], D && (b += "none "), D = !0) : _[w].type === "separator" && D && (b += _[w].separator === "|" ? "solid " : "dashed ", D = !1);
    c.setAttribute("columnalign", p.trim()), /[sd]/.test(b) && c.setAttribute("columnlines", b.trim());
  }
  if (e.colSeparationType === "align") {
    for (var x = e.cols || [], E = "", T = 1; T < x.length; T++)
      E += T % 2 ? "0em " : "1em ";
    c.setAttribute("columnspacing", E.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? c.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? c.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? c.setAttribute("columnspacing", "0.5em") : c.setAttribute("columnspacing", "1em");
  var C = "", F = e.hLinesBeforeRow;
  h += F[0].length > 0 ? "left " : "", h += F[F.length - 1].length > 0 ? "right " : "";
  for (var I = 1; I < F.length - 1; I++)
    C += F[I].length === 0 ? "none " : F[I][0] ? "dashed " : "solid ";
  return /[sd]/.test(C) && c.setAttribute("rowlines", C.trim()), h !== "" && (c = new j.MathNode("menclose", [c]), c.setAttribute("notation", h.trim())), e.arraystretch && e.arraystretch < 1 && (c = new j.MathNode("mstyle", [c]), c.setAttribute("scriptlevel", "1")), c;
}, i4 = function(e, t) {
  e.envName.indexOf("ed") === -1 && ns(e);
  var r = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = mn(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : Pu(e.envName),
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
      var h = me(t[0].body[d], "textord");
      c += h.text;
    }
    s = Number(c), o = s * 2;
  }
  var p = !o;
  l.body.forEach(function(y) {
    for (var k = 1; k < y.length; k += 2) {
      var w = me(y[k], "styling"), x = me(w.body[0], "ordgroup");
      x.body.unshift(u);
    }
    if (p)
      o < y.length && (o = y.length);
    else {
      var E = y.length / 2;
      if (s < E)
        throw new W("Too many math in a row: " + ("expected " + s + ", but got " + E), y[0]);
    }
  });
  for (var _ = 0; _ < o; ++_) {
    var b = "r", D = 0;
    _ % 2 === 1 ? b = "l" : _ > 0 && p && (D = 1), r[_] = {
      type: "align",
      align: b,
      pregap: D,
      postgap: 0
    };
  }
  return l.colSeparationType = p ? "align" : "alignat", l;
};
mr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = es(e[0]), r = t ? [e[0]] : me(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Lu(l), o = s.text;
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
      throw new W("Unknown column alignment: " + o, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return mn(n.parser, i, Hu(n.envName));
  },
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
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
          throw new W("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = mn(n.parser, r, Hu(n.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
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
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 0.5
    }, t = mn(n.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = es(e[0]), r = t ? [e[0]] : me(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = Lu(l), o = s.text;
      if ("lc".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      throw new W("Unknown column alignment: " + o, l);
    });
    if (a.length > 1)
      throw new W("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = mn(n.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new W("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
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
    }, t = mn(n.parser, e, Hu(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [t],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: i4,
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    ae.contains(["gather", "gather*"], n.envName) && ns(n);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Pu(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return mn(n.parser, e, "display");
  },
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: i4,
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    ns(n);
    var e = {
      autoTag: Pu(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return mn(n.parser, e, "display");
  },
  htmlBuilder: pr,
  mathmlBuilder: gr
});
mr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return ns(n), V3(n.parser);
  },
  htmlBuilder: pr,
  mathmlBuilder: gr
});
v("\\nonumber", "\\gdef\\@eqnsw{0}");
v("\\notag", "\\nonumber");
K({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(n, e) {
    throw new W(n.funcName + " valid only within array environment");
  }
});
var fc = n4;
K({
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
      throw new W("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += me(a.body[l], "textord").text;
    if (r === "\\begin") {
      if (!fc.hasOwnProperty(i))
        throw new W("No such environment: " + i, a);
      var s = fc[i], {
        args: o,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", s), c = {
        mode: t.mode,
        envName: i,
        parser: t
      }, d = s.handler(c, o, u);
      t.expect("\\end", !1);
      var h = t.nextToken, p = me(t.parseFunction(), "environment");
      if (p.name !== i)
        throw new W("Mismatch: \\begin{" + i + "} matched by \\end{" + p.name + "}", h);
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
var l4 = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return Se(n.body, r);
}, s4 = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return Le(n.body, r);
}, hc = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
K({
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
    } = n, a = Il(e[0]), i = r;
    return i in hc && (i = hc[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: l4,
  mathmlBuilder: s4
});
K({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0], a = ae.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: ts(r),
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
K({
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
  htmlBuilder: l4,
  mathmlBuilder: s4
});
var o4 = (n, e) => {
  var t = e;
  return n === "display" ? t = t.id >= se.SCRIPT.id ? t.text() : se.DISPLAY : n === "text" && t.size === se.DISPLAY.size ? t = se.TEXT : n === "script" ? t = se.SCRIPT : n === "scriptscript" && (t = se.SCRIPTSCRIPT), t;
}, Uu = (n, e) => {
  var t = o4(n.size, e.style), r = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(r);
  var l = Se(n.numer, i, e);
  if (n.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, o = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < o ? o : l.depth;
  }
  i = e.havingStyle(a);
  var u = Se(n.denom, i, e), c, d, h;
  n.hasBarLine ? (n.barSize ? (d = Ze(n.barSize, e), c = N.makeLineSpan("frac-line", e, d)) : c = N.makeLineSpan("frac-line", e), d = c.height, h = c.height) : (c = null, d = 0, h = e.fontMetrics().defaultRuleThickness);
  var p, _, b;
  t.size === se.DISPLAY.size || n.size === "display" ? (p = e.fontMetrics().num1, d > 0 ? _ = 3 * h : _ = 7 * h, b = e.fontMetrics().denom1) : (d > 0 ? (p = e.fontMetrics().num2, _ = h) : (p = e.fontMetrics().num3, _ = 3 * h), b = e.fontMetrics().denom2);
  var D;
  if (c) {
    var k = e.fontMetrics().axisHeight;
    p - l.depth - (k + 0.5 * d) < _ && (p += _ - (p - l.depth - (k + 0.5 * d))), k - 0.5 * d - (u.height - b) < _ && (b += _ - (k - 0.5 * d - (u.height - b)));
    var w = -(k - 0.5 * d);
    D = N.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: b
      }, {
        type: "elem",
        elem: c,
        shift: w
      }, {
        type: "elem",
        elem: l,
        shift: -p
      }]
    }, e);
  } else {
    var y = p - l.depth - (u.height - b);
    y < _ && (p += 0.5 * (_ - y), b += 0.5 * (_ - y)), D = N.makeVList({
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
  i = e.havingStyle(t), D.height *= i.sizeMultiplier / e.sizeMultiplier, D.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var x;
  t.size === se.DISPLAY.size ? x = e.fontMetrics().delim1 : t.size === se.SCRIPTSCRIPT.size ? x = e.havingStyle(se.SCRIPT).fontMetrics().delim2 : x = e.fontMetrics().delim2;
  var E, T;
  return n.leftDelim == null ? E = Ja(e, ["mopen"]) : E = Cr.customSizedDelim(n.leftDelim, x, !0, e.havingStyle(t), n.mode, ["mopen"]), n.continued ? T = N.makeSpan([]) : n.rightDelim == null ? T = Ja(e, ["mclose"]) : T = Cr.customSizedDelim(n.rightDelim, x, !0, e.havingStyle(t), n.mode, ["mclose"]), N.makeSpan(["mord"].concat(i.sizingClasses(e)), [E, N.makeSpan(["mfrac"], [D]), T], e);
}, Vu = (n, e) => {
  var t = new j.MathNode("mfrac", [Le(n.numer, e), Le(n.denom, e)]);
  if (!n.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = Ze(n.barSize, e);
    t.setAttribute("linethickness", Z(r));
  }
  var a = o4(n.size, e.style);
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
    return Bu(l);
  }
  return t;
};
K({
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
  htmlBuilder: Uu,
  mathmlBuilder: Vu
});
K({
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
K({
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
var dc = ["display", "text", "script", "scriptscript"], mc = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
K({
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
    } = n, r = e[4], a = e[5], i = Il(e[0]), l = i.type === "atom" && i.family === "open" ? mc(i.text) : null, s = Il(e[1]), o = s.type === "atom" && s.family === "close" ? mc(s.text) : null, u = me(e[2], "size"), c, d = null;
    u.isBlank ? c = !0 : (d = u.value, c = d.number > 0);
    var h = "auto", p = e[3];
    if (p.type === "ordgroup") {
      if (p.body.length > 0) {
        var _ = me(p.body[0], "textord");
        h = dc[Number(_.text)];
      }
    } else
      p = me(p, "textord"), h = dc[Number(p.text)];
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
      size: h
    };
  },
  htmlBuilder: Uu,
  mathmlBuilder: Vu
});
K({
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
      size: me(e[0], "size").value,
      token: a
    };
  }
});
K({
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
    } = n, a = e[0], i = I5(me(e[1], "infix").size), l = e[2], s = i.number > 0;
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
  htmlBuilder: Uu,
  mathmlBuilder: Vu
});
var u4 = (n, e) => {
  var t = e.style, r, a;
  n.type === "supsub" ? (r = n.sup ? Se(n.sup, e.havingStyle(t.sup()), e) : Se(n.sub, e.havingStyle(t.sub()), e), a = me(n.base, "horizBrace")) : a = me(n, "horizBrace");
  var i = Se(a.base, e.havingBaseStyle(se.DISPLAY)), l = Lr.svgSpan(a, e), s;
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
}, a6 = (n, e) => {
  var t = Lr.mathMLnode(n.label);
  return new j.MathNode(n.isOver ? "mover" : "munder", [Le(n.base, e), t]);
};
K({
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
  htmlBuilder: u4,
  mathmlBuilder: a6
});
K({
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
    } = n, r = e[1], a = me(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: nt(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (n, e) => {
    var t = wt(n.body, e, !1);
    return N.makeAnchor(n.href, [], t, e);
  },
  mathmlBuilder: (n, e) => {
    var t = fn(n.body, e);
    return t instanceof k0 || (t = new k0("mrow", [t])), t.setAttribute("href", n.href), t;
  }
});
K({
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
    } = n, r = me(e[0], "url").url;
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
      body: nt(s)
    };
  }
});
K({
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
      body: nt(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = wt(n.body, e, !1);
    return N.makeFragment(t);
  },
  mathmlBuilder(n, e) {
    return new j.MathNode("mrow", i0(n.body, e));
  }
});
K({
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
    } = n, i = me(e[0], "raw").string, l = e[1];
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
            throw new W("Error parsing key-value for \\htmlData");
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
      body: nt(l)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (n, e) => {
    var t = wt(n.body, e, !1), r = ["enclosing"];
    n.attributes.class && r.push(...n.attributes.class.trim().split(/\s+/));
    var a = N.makeSpan(r, t, e);
    for (var i in n.attributes)
      i !== "class" && n.attributes.hasOwnProperty(i) && a.setAttribute(i, n.attributes[i]);
    return a;
  },
  mathmlBuilder: (n, e) => fn(n.body, e)
});
K({
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
      html: nt(e[0]),
      mathml: nt(e[1])
    };
  },
  htmlBuilder: (n, e) => {
    var t = wt(n.html, e, !1);
    return N.makeFragment(t);
  },
  mathmlBuilder: (n, e) => fn(n.mathml, e)
});
var io = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new W("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!Td(r))
    throw new W("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
K({
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
      for (var o = me(t[0], "raw").string, u = o.split(","), c = 0; c < u.length; c++) {
        var d = u[c].split("=");
        if (d.length === 2) {
          var h = d[1].trim();
          switch (d[0].trim()) {
            case "alt":
              s = h;
              break;
            case "width":
              a = io(h);
              break;
            case "height":
              i = io(h);
              break;
            case "totalheight":
              l = io(h);
              break;
            default:
              throw new W("Invalid key: '" + d[0] + "' in \\includegraphics.");
          }
        }
      }
    var p = me(e[0], "url").url;
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
    var t = Ze(n.height, e), r = 0;
    n.totalheight.number > 0 && (r = Ze(n.totalheight, e) - t);
    var a = 0;
    n.width.number > 0 && (a = Ze(n.width, e));
    var i = {
      height: Z(t + r)
    };
    a > 0 && (i.width = Z(a)), r > 0 && (i.verticalAlign = Z(-r));
    var l = new a3(n.src, n.alt, i);
    return l.height = t, l.depth = r, l;
  },
  mathmlBuilder: (n, e) => {
    var t = new j.MathNode("mglyph", []);
    t.setAttribute("alt", n.alt);
    var r = Ze(n.height, e), a = 0;
    if (n.totalheight.number > 0 && (a = Ze(n.totalheight, e) - r, t.setAttribute("valign", Z(-a))), t.setAttribute("height", Z(r + a)), n.width.number > 0) {
      var i = Ze(n.width, e);
      t.setAttribute("width", Z(i));
    }
    return t.setAttribute("src", n.src), t;
  }
});
K({
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
    } = n, a = me(e[0], "size");
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
    var t = Ze(n.dimension, e);
    return new j.SpaceNode(t);
  }
});
K({
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
    n.alignment === "clap" ? (t = N.makeSpan([], [Se(n.body, e)]), t = N.makeSpan(["inner"], [t], e)) : t = N.makeSpan(["inner"], [Se(n.body, e)]);
    var r = N.makeSpan(["fix"], []), a = N.makeSpan([n.alignment], [t, r], e), i = N.makeSpan(["strut"]);
    return i.style.height = Z(a.height + a.depth), a.depth && (i.style.verticalAlign = Z(-a.depth)), a.children.unshift(i), a = N.makeSpan(["thinbox"], [a], e), N.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new j.MathNode("mpadded", [Le(n.body, e)]);
    if (n.alignment !== "rlap") {
      var r = n.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
K({
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
K({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    throw new W("Mismatched " + n.funcName);
  }
});
var pc = (n, e) => {
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
K({
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
      display: nt(e[0]),
      text: nt(e[1]),
      script: nt(e[2]),
      scriptscript: nt(e[3])
    };
  },
  htmlBuilder: (n, e) => {
    var t = pc(n, e), r = wt(t, e, !1);
    return N.makeFragment(r);
  },
  mathmlBuilder: (n, e) => {
    var t = pc(n, e);
    return fn(t, e);
  }
});
var c4 = (n, e, t, r, a, i, l) => {
  n = N.makeSpan([], [n]);
  var s = t && ae.isCharacterBox(t), o, u;
  if (e) {
    var c = Se(e, r.havingStyle(a.sup()), r);
    u = {
      elem: c,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - c.depth)
    };
  }
  if (t) {
    var d = Se(t, r.havingStyle(a.sub()), r);
    o = {
      elem: d,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - d.height)
    };
  }
  var h;
  if (u && o) {
    var p = r.fontMetrics().bigOpSpacing5 + o.elem.height + o.elem.depth + o.kern + n.depth + l;
    h = N.makeVList({
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
    var _ = n.height - l;
    h = N.makeVList({
      positionType: "top",
      positionData: _,
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
    h = N.makeVList({
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
  var D = [h];
  if (o && i !== 0 && !s) {
    var y = N.makeSpan(["mspace"], [], r);
    y.style.marginRight = Z(i), D.unshift(y);
  }
  return N.makeSpan(["mop", "op-limits"], D, r);
}, f4 = ["\\smallint"], ha = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = me(n.base, "op"), a = !0) : i = me(n, "op");
  var l = e.style, s = !1;
  l.size === se.DISPLAY.size && i.symbol && !ae.contains(f4, i.name) && (s = !0);
  var o;
  if (i.symbol) {
    var u = s ? "Size2-Regular" : "Size1-Regular", c = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (c = i.name.slice(1), i.name = c === "oiint" ? "\\iint" : "\\iiint"), o = N.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), c.length > 0) {
      var d = o.italic, h = N.staticSvg(c + "Size" + (s ? "2" : "1"), e);
      o = N.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: o,
          shift: 0
        }, {
          type: "elem",
          elem: h,
          shift: s ? 0.08 : 0
        }]
      }, e), i.name = "\\" + c, o.classes.unshift("mop"), o.italic = d;
    }
  } else if (i.body) {
    var p = wt(i.body, e, !0);
    p.length === 1 && p[0] instanceof T0 ? (o = p[0], o.classes[0] = "mop") : o = N.makeSpan(["mop"], p, e);
  } else {
    for (var _ = [], b = 1; b < i.name.length; b++)
      _.push(N.mathsym(i.name[b], i.mode, e));
    o = N.makeSpan(["mop"], _, e);
  }
  var D = 0, y = 0;
  return (o instanceof T0 || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (D = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, y = o.italic), a ? c4(o, t, r, e, l, y, D) : (D && (o.style.position = "relative", o.style.top = Z(D)), o);
}, li = (n, e) => {
  var t;
  if (n.symbol)
    t = new k0("mo", [C0(n.name, n.mode)]), ae.contains(f4, n.name) && t.setAttribute("largeop", "false");
  else if (n.body)
    t = new k0("mo", i0(n.body, e));
  else {
    t = new k0("mi", [new Ha(n.name.slice(1))]);
    var r = new k0("mo", [C0("⁡", "text")]);
    n.parentIsSupSub ? t = new k0("mrow", [t, r]) : t = qd([t, r]);
  }
  return t;
}, i6 = {
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
K({
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
    return a.length === 1 && (a = i6[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: ha,
  mathmlBuilder: li
});
K({
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
      body: nt(r)
    };
  },
  htmlBuilder: ha,
  mathmlBuilder: li
});
var l6 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
K({
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
  htmlBuilder: ha,
  mathmlBuilder: li
});
K({
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
  htmlBuilder: ha,
  mathmlBuilder: li
});
K({
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
    return r.length === 1 && (r = l6[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: ha,
  mathmlBuilder: li
});
var h4 = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = me(n.base, "operatorname"), a = !0) : i = me(n, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var s = i.body.map((d) => {
      var h = d.text;
      return typeof h == "string" ? {
        type: "textord",
        mode: d.mode,
        text: h
      } : d;
    }), o = wt(s, e.withFont("mathrm"), !0), u = 0; u < o.length; u++) {
      var c = o[u];
      c instanceof T0 && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = N.makeSpan(["mop"], o, e);
  } else
    l = N.makeSpan(["mop"], [], e);
  return a ? c4(l, t, r, e, e.style, 0, 0) : l;
}, s6 = (n, e) => {
  for (var t = i0(n.body, e.withFont("mathrm")), r = !0, a = 0; a < t.length; a++) {
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
  var u = new j.MathNode("mo", [C0("⁡", "text")]);
  return n.parentIsSupSub ? new j.MathNode("mrow", [o, u]) : j.newDocumentFragment([o, u]);
};
K({
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
      body: nt(a),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: h4,
  mathmlBuilder: s6
});
v("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Ln({
  type: "ordgroup",
  htmlBuilder(n, e) {
    return n.semisimple ? N.makeFragment(wt(n.body, e, !1)) : N.makeSpan(["mord"], wt(n.body, e, !0), e);
  },
  mathmlBuilder(n, e) {
    return fn(n.body, e, !0);
  }
});
K({
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
    var t = Se(n.body, e.havingCrampedStyle()), r = N.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = N.makeVList({
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
    var r = new j.MathNode("mover", [Le(n.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
K({
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
      body: nt(r)
    };
  },
  htmlBuilder: (n, e) => {
    var t = wt(n.body, e.withPhantom(), !1);
    return N.makeFragment(t);
  },
  mathmlBuilder: (n, e) => {
    var t = i0(n.body, e);
    return new j.MathNode("mphantom", t);
  }
});
K({
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
    var t = N.makeSpan([], [Se(n.body, e.withPhantom())]);
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
    var t = i0(nt(n.body), e), r = new j.MathNode("mphantom", t), a = new j.MathNode("mpadded", [r]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
K({
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
    var t = N.makeSpan(["inner"], [Se(n.body, e.withPhantom())]), r = N.makeSpan(["fix"], []);
    return N.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (n, e) => {
    var t = i0(nt(n.body), e), r = new j.MathNode("mphantom", t), a = new j.MathNode("mpadded", [r]);
    return a.setAttribute("width", "0px"), a;
  }
});
K({
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
    } = n, r = me(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: a
    };
  },
  htmlBuilder(n, e) {
    var t = Se(n.body, e), r = Ze(n.dy, e);
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
    var t = new j.MathNode("mpadded", [Le(n.body, e)]), r = n.dy.number + n.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
K({
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
K({
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
    } = n, a = t[0], i = me(e[0], "size"), l = me(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && me(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(n, e) {
    var t = N.makeSpan(["mord", "rule"], [], e), r = Ze(n.width, e), a = Ze(n.height, e), i = n.shift ? Ze(n.shift, e) : 0;
    return t.style.borderRightWidth = Z(r), t.style.borderTopWidth = Z(a), t.style.bottom = Z(i), t.width = r, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(n, e) {
    var t = Ze(n.width, e), r = Ze(n.height, e), a = n.shift ? Ze(n.shift, e) : 0, i = e.color && e.getColor() || "black", l = new j.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", Z(t)), l.setAttribute("height", Z(r));
    var s = new j.MathNode("mpadded", [l]);
    return a >= 0 ? s.setAttribute("height", Z(a)) : (s.setAttribute("height", Z(a)), s.setAttribute("depth", Z(-a))), s.setAttribute("voffset", Z(a)), s;
  }
});
function d4(n, e, t) {
  for (var r = wt(n, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= a, r[i].depth *= a;
  }
  return N.makeFragment(r);
}
var gc = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], o6 = (n, e) => {
  var t = e.havingSize(n.size);
  return d4(n.body, t, e);
};
K({
  type: "sizing",
  names: gc,
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
      size: gc.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: o6,
  mathmlBuilder: (n, e) => {
    var t = e.havingSize(n.size), r = i0(n.body, t), a = new j.MathNode("mstyle", r);
    return a.setAttribute("mathsize", Z(t.sizeMultiplier)), a;
  }
});
K({
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
    } = n, a = !1, i = !1, l = t[0] && me(t[0], "ordgroup");
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
    var t = N.makeSpan([], [Se(n.body, e)]);
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
    var t = new j.MathNode("mpadded", [Le(n.body, e)]);
    return n.smashHeight && t.setAttribute("height", "0px"), n.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
K({
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
    var t = Se(n.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = N.wrapFragment(t, e);
    var r = e.fontMetrics(), a = r.defaultRuleThickness, i = a;
    e.style.id < se.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, s = t.height + t.depth + l + a, {
      span: o,
      ruleWidth: u,
      advanceWidth: c
    } = Cr.sqrtImage(s, e), d = o.height - u;
    d > t.height + t.depth + l && (l = (l + d - t.height - t.depth) / 2);
    var h = o.height - t.height - l - u;
    t.style.paddingLeft = Z(c);
    var p = N.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + h)
      }, {
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: u
      }]
    }, e);
    if (n.index) {
      var _ = e.havingStyle(se.SCRIPTSCRIPT), b = Se(n.index, _, e), D = 0.6 * (p.height - p.depth), y = N.makeVList({
        positionType: "shift",
        positionData: -D,
        children: [{
          type: "elem",
          elem: b
        }]
      }, e), k = N.makeSpan(["root"], [y]);
      return N.makeSpan(["mord", "sqrt"], [k, p], e);
    } else
      return N.makeSpan(["mord", "sqrt"], [p], e);
  },
  mathmlBuilder(n, e) {
    var {
      body: t,
      index: r
    } = n;
    return r ? new j.MathNode("mroot", [Le(t, e), Le(r, e)]) : new j.MathNode("msqrt", [Le(t, e)]);
  }
});
var _c = {
  display: se.DISPLAY,
  text: se.TEXT,
  script: se.SCRIPT,
  scriptscript: se.SCRIPTSCRIPT
};
K({
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
    var t = _c[n.style], r = e.havingStyle(t).withFont("");
    return d4(n.body, r, e);
  },
  mathmlBuilder(n, e) {
    var t = _c[n.style], r = e.havingStyle(t), a = i0(n.body, r), i = new j.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[n.style];
    return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
  }
});
var u6 = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (t.style.size === se.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? ha : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === se.DISPLAY.size || r.limits);
      return i ? h4 : null;
    } else {
      if (r.type === "accent")
        return ae.isCharacterBox(r.base) ? Nu : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? u4 : null;
      } else
        return null;
    }
  else return null;
};
Ln({
  type: "supsub",
  htmlBuilder(n, e) {
    var t = u6(n, e);
    if (t)
      return t(n, e);
    var {
      base: r,
      sup: a,
      sub: i
    } = n, l = Se(r, e), s, o, u = e.fontMetrics(), c = 0, d = 0, h = r && ae.isCharacterBox(r);
    if (a) {
      var p = e.havingStyle(e.style.sup());
      s = Se(a, p, e), h || (c = l.height - p.fontMetrics().supDrop * p.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var _ = e.havingStyle(e.style.sub());
      o = Se(i, _, e), h || (d = l.depth + _.fontMetrics().subDrop * _.sizeMultiplier / e.sizeMultiplier);
    }
    var b;
    e.style === se.DISPLAY ? b = u.sup1 : e.style.cramped ? b = u.sup3 : b = u.sup2;
    var D = e.sizeMultiplier, y = Z(0.5 / u.ptPerEm / D), k = null;
    if (o) {
      var w = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (l instanceof T0 || w) && (k = Z(-l.italic));
    }
    var x;
    if (s && o) {
      c = Math.max(c, b, s.depth + 0.25 * u.xHeight), d = Math.max(d, u.sub2);
      var E = u.defaultRuleThickness, T = 4 * E;
      if (c - s.depth - (o.height - d) < T) {
        d = T - (c - s.depth) + o.height;
        var C = 0.8 * u.xHeight - (c - s.depth);
        C > 0 && (c += C, d -= C);
      }
      var F = [{
        type: "elem",
        elem: o,
        shift: d,
        marginRight: y,
        marginLeft: k
      }, {
        type: "elem",
        elem: s,
        shift: -c,
        marginRight: y
      }];
      x = N.makeVList({
        positionType: "individualShift",
        children: F
      }, e);
    } else if (o) {
      d = Math.max(d, u.sub1, o.height - 0.8 * u.xHeight);
      var I = [{
        type: "elem",
        elem: o,
        marginLeft: k,
        marginRight: y
      }];
      x = N.makeVList({
        positionType: "shift",
        positionData: d,
        children: I
      }, e);
    } else if (s)
      c = Math.max(c, b, s.depth + 0.25 * u.xHeight), x = N.makeVList({
        positionType: "shift",
        positionData: -c,
        children: [{
          type: "elem",
          elem: s,
          marginRight: y
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var L = Qo(l, "right") || "mord";
    return N.makeSpan([L], [l, N.makeSpan(["msupsub"], [x])], e);
  },
  mathmlBuilder(n, e) {
    var t = !1, r, a;
    n.base && n.base.type === "horizBrace" && (a = !!n.sup, a === n.base.isOver && (t = !0, r = n.base.isOver)), n.base && (n.base.type === "op" || n.base.type === "operatorname") && (n.base.parentIsSupSub = !0);
    var i = [Le(n.base, e)];
    n.sub && i.push(Le(n.sub, e)), n.sup && i.push(Le(n.sup, e));
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
Ln({
  type: "atom",
  htmlBuilder(n, e) {
    return N.mathsym(n.text, n.mode, e, ["m" + n.family]);
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mo", [C0(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = Iu(n, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else n.family === "punct" ? t.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var m4 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Ln({
  type: "mathord",
  htmlBuilder(n, e) {
    return N.makeOrd(n, e, "mathord");
  },
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mi", [C0(n.text, n.mode, e)]), r = Iu(n, e) || "italic";
    return r !== m4[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Ln({
  type: "textord",
  htmlBuilder(n, e) {
    return N.makeOrd(n, e, "textord");
  },
  mathmlBuilder(n, e) {
    var t = C0(n.text, n.mode, e), r = Iu(n, e) || "normal", a;
    return n.mode === "text" ? a = new j.MathNode("mtext", [t]) : /[0-9]/.test(n.text) ? a = new j.MathNode("mn", [t]) : n.text === "\\prime" ? a = new j.MathNode("mo", [t]) : a = new j.MathNode("mi", [t]), r !== m4[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var lo = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, so = {
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
Ln({
  type: "spacing",
  htmlBuilder(n, e) {
    if (so.hasOwnProperty(n.text)) {
      var t = so[n.text].className || "";
      if (n.mode === "text") {
        var r = N.makeOrd(n, e, "textord");
        return r.classes.push(t), r;
      } else
        return N.makeSpan(["mspace", t], [N.mathsym(n.text, n.mode, e)], e);
    } else {
      if (lo.hasOwnProperty(n.text))
        return N.makeSpan(["mspace", lo[n.text]], [], e);
      throw new W('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, e) {
    var t;
    if (so.hasOwnProperty(n.text))
      t = new j.MathNode("mtext", [new j.TextNode(" ")]);
    else {
      if (lo.hasOwnProperty(n.text))
        return new j.MathNode("mspace");
      throw new W('Unknown type of space "' + n.text + '"');
    }
    return t;
  }
});
var vc = () => {
  var n = new j.MathNode("mtd", []);
  return n.setAttribute("width", "50%"), n;
};
Ln({
  type: "tag",
  mathmlBuilder(n, e) {
    var t = new j.MathNode("mtable", [new j.MathNode("mtr", [vc(), new j.MathNode("mtd", [fn(n.body, e)]), vc(), new j.MathNode("mtd", [fn(n.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var bc = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, wc = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, c6 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, yc = (n, e) => {
  var t = n.font;
  if (t) {
    if (bc[t])
      return e.withTextFontFamily(bc[t]);
    if (wc[t])
      return e.withTextFontWeight(wc[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(c6[t]);
};
K({
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
      body: nt(a),
      font: r
    };
  },
  htmlBuilder(n, e) {
    var t = yc(n, e), r = wt(n.body, t, !0);
    return N.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(n, e) {
    var t = yc(n, e);
    return fn(n.body, t);
  }
});
K({
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
    var t = Se(n.body, e), r = N.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = N.makeVList({
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
    var r = new j.MathNode("munder", [Le(n.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
K({
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
    var t = Se(n.body, e), r = e.fontMetrics().axisHeight, a = 0.5 * (t.height - r - (t.depth + r));
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
    return new j.MathNode("mpadded", [Le(n.body, e)], ["vcenter"]);
  }
});
K({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    throw new W("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(n, e) {
    for (var t = kc(n), r = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), r.push(N.makeSymbol(l, "Typewriter-Regular", n.mode, a, ["mord", "texttt"]));
    }
    return N.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), N.tryCombineChars(r), a);
  },
  mathmlBuilder(n, e) {
    var t = new j.TextNode(kc(n)), r = new j.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var kc = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), ln = Rd, p4 = `[ \r
	]`, f6 = "\\\\[a-zA-Z@]+", h6 = "\\\\[^\uD800-\uDFFF]", d6 = "(" + f6 + ")" + p4 + "*", m6 = `\\\\(
|[ \r	]+
?)[ \r	]*`, ru = "[̀-ͯ]", p6 = new RegExp(ru + "+$"), g6 = "(" + p4 + "+)|" + // whitespace
(m6 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(ru + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(ru + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + d6) + // \macroName + spaces
("|" + h6 + ")");
class Dc {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(g6, "g"), this.catcodes = {
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
      return new x0("EOF", new c0(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new W("Unexpected character: '" + e[t] + "'", new x0(e[t], new c0(this, t, t + 1)));
    var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new x0(a, new c0(this, t, this.tokenRegex.lastIndex));
  }
}
class _6 {
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
      throw new W("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
var v6 = a4;
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
var Ac = {
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
        throw new W("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = Ac[e.text], r == null || r >= t)
      throw new W("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Ac[n.future().text]) != null && a < t; )
      r *= t, r += a, n.popToken();
  }
  return "\\@char{" + r + "}";
});
var Gu = (n, e, t) => {
  var r = n.consumeArg().tokens;
  if (r.length !== 1)
    throw new W("\\newcommand's first argument must be a macro name");
  var a = r[0].text, i = n.isDefined(a);
  if (i && !e)
    throw new W("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new W("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var l = 0;
  if (r = n.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var s = "", o = n.expandNextToken(); o.text !== "]" && o.text !== "EOF"; )
      s += o.text, o = n.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new W("Invalid number of arguments: " + s);
    l = parseInt(s), r = n.consumeArg().tokens;
  }
  return n.macros.set(a, {
    tokens: r,
    numArgs: l
  }), "";
};
v("\\newcommand", (n) => Gu(n, !1, !0));
v("\\renewcommand", (n) => Gu(n, !0, !1));
v("\\providecommand", (n) => Gu(n, !0, !0));
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
  return console.log(e, n.macros.get(t), ln[t], Re.math[t], Re.text[t]), "";
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
var Ec = {
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
  return t in Ec ? e = Ec[t] : (t.slice(0, 4) === "\\not" || t in Re.math && ae.contains(["bin", "rel"], Re.math[t].group)) && (e = "\\dotsb"), e;
});
var ju = {
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
  return e in ju ? "\\ldots\\," : "\\ldots";
});
v("\\dotsc", function(n) {
  var e = n.future().text;
  return e in ju && e !== "," ? "\\ldots\\," : "\\ldots";
});
v("\\cdots", function(n) {
  var e = n.future().text;
  return e in ju ? "\\@cdots\\," : "\\@cdots";
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
    throw new W("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
v("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
v("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
v("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
v("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
v("\\newline", "\\\\\\relax");
v("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var g4 = Z(nr["Main-Regular"][84][1] - 0.7 * nr["Main-Regular"][65][1]);
v("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + g4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
v("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + g4 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var _4 = (n) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), s = e.macros.get("\\|");
  e.macros.beginGroup();
  var o = (d) => (h) => {
    n && (h.macros.set("|", l), a.length && h.macros.set("\\|", s));
    var p = d;
    if (!d && a.length) {
      var _ = h.future();
      _.text === "|" && (h.popToken(), p = !0);
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
v("\\bra@ket", _4(!1));
v("\\bra@set", _4(!0));
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
var v4 = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class b6 {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new _6(v6, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new Dc(e, this.settings);
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
    return this.pushToken(new x0("EOF", r.loc)), this.pushTokens(a), t.range(r, "");
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
          throw new W("Extra }", i);
      } else if (i.text === "EOF")
        throw new W("Unexpected end of input in a macro argument, expected '" + (e && r ? e[s] : "}") + "'", i);
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
        throw new W("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], a = 0; a < r.length; a++) {
        var i = this.popToken();
        if (r[a] !== i.text)
          throw new W("Use of the macro doesn't match its definition", i);
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
      throw new W("Too many expansions: infinite loop or need to increase maxExpand setting");
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
        throw new W("Undefined control sequence: " + r);
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
            throw new W("Incomplete placeholder at end of macro body", o);
          if (o = i[--s], o.text === "#")
            i.splice(s + 1, 1);
          else if (/^[1-9]$/.test(o.text))
            i.splice(s, 2, ...l[+o.text - 1]);
          else
            throw new W("Not a valid argument number", o);
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
    return this.macros.has(e) ? this.expandTokens([new x0(e)]) : void 0;
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
      for (var s = new Dc(a, this.settings), o = [], u = s.lex(); u.text !== "EOF"; )
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
    return this.macros.has(e) || ln.hasOwnProperty(e) || Re.math.hasOwnProperty(e) || Re.text.hasOwnProperty(e) || v4.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : ln.hasOwnProperty(e) && !ln[e].primitive;
  }
}
var Sc = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Xi = Object.freeze({
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
}), oo = {
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
}, xc = {
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
class as {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new b6(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new W("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
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
    this.consume(), this.gullet.pushToken(new x0("}")), this.gullet.pushTokens(e);
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
      if (as.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && ln[a.text] && ln[a.text].infix)
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
          throw new W("only one infix operator per group", e[a].token);
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
      throw new W("Expected group after '" + r + "'", t);
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
          throw new W("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (r)
          throw new W("Double superscript", i);
        r = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new W("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (r)
          throw new W("Double superscript", i);
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
      } else if (Xi[i.text]) {
        var u = Sc.test(i.text), c = [];
        for (c.push(new x0(Xi[i.text])), this.consume(); ; ) {
          var d = this.fetch().text;
          if (!Xi[d] || Sc.test(d) !== u)
            break;
          c.unshift(new x0(Xi[d])), this.consume();
        }
        var h = this.subparse(c);
        u ? a = {
          type: "ordgroup",
          mode: "math",
          body: h
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: h
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
      throw new W("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !i.allowedInText)
      throw new W("Can't use function '" + a + "' in text mode", r);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new W("Can't use function '" + a + "' in math mode", r);
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
    throw new W("No function handler for " + e);
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
        throw new W("Null argument, please report this as a bug");
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
          throw new W("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new W("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new W("Unknown group type as " + e, this.fetch());
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
      throw new W("Invalid " + t + ": '" + r.text + "'", r);
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
      throw new W("Invalid color: '" + t.text + "'", t);
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
      throw new W("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!Td(i))
      throw new W("Invalid unit: '" + i.unit + "'", t);
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
        loc: c0.range(r, o),
        body: s,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !v4.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new W("Undefined control sequence: " + a, r);
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
        loc: c0.range(a, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: c0.range(a, e[r + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[r + 1].text === i && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: c0.range(a, e[r + 1]),
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
        throw new W(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: a
      };
    }
    xc.hasOwnProperty(t[0]) && !Re[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = xc[t[0]] + t.slice(1));
    var i = p6.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (Re[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Jo.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var s = Re[this.mode][t].group, o = c0.range(e), u;
      if (s3.hasOwnProperty(s)) {
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
      this.settings.strict && (xd(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: c0.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var d = 0; d < i[0].length; d++) {
        var h = i[0][d];
        if (!oo[h])
          throw new W("Unknown accent ' " + h + "'", e);
        var p = oo[h][this.mode] || oo[h].text;
        if (!p)
          throw new W("Accent " + h + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: c0.range(e),
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
as.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Wu = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new as(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var a = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new W("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: r.subparse([new x0("\\df@tag")])
    }];
  }
  return a;
}, b4 = function(e, t, r) {
  t.textContent = "";
  var a = Xu(e, r).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), b4 = function() {
  throw new W("KaTeX doesn't work in quirks mode.");
});
var w6 = function(e, t) {
  var r = Xu(e, t).toMarkup();
  return r;
}, y6 = function(e, t) {
  var r = new Tu(t);
  return Wu(e, r);
}, w4 = function(e, t, r) {
  if (r.throwOnError || !(e instanceof W))
    throw e;
  var a = N.makeSpan(["katex-error"], [new T0(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + r.errorColor), a;
}, Xu = function(e, t) {
  var r = new Tu(t);
  try {
    var a = Wu(e, r);
    return F3(a, e, r);
  } catch (i) {
    return w4(i, e, r);
  }
}, k6 = function(e, t) {
  var r = new Tu(t);
  try {
    var a = Wu(e, r);
    return M3(a, e, r);
  } catch (i) {
    return w4(i, e, r);
  }
}, nu = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: b4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: w6,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: W,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: bl,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: y6,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Xu,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: k6,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: e3,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: f,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: K,
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
    Span: ii,
    Anchor: Mu,
    SymbolNode: T0,
    SvgNode: Br,
    PathNode: cn,
    LineNode: Ko
  }
};
const ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nu
}, Symbol.toStringTag, { value: "Module" }));
var D6 = function(e, t, r) {
  for (var a = r, i = 0, l = e.length; a < t.length; ) {
    var s = t[a];
    if (i <= 0 && t.slice(a, a + l) === e)
      return a;
    s === "\\" ? a++ : s === "{" ? i++ : s === "}" && i--, a++;
  }
  return -1;
}, A6 = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, E6 = /^\\begin{/, S6 = function(e, t) {
  for (var r, a = [], i = new RegExp("(" + t.map((u) => A6(u.left)).join("|") + ")"); r = e.search(i), r !== -1; ) {
    r > 0 && (a.push({
      type: "text",
      data: e.slice(0, r)
    }), e = e.slice(r));
    var l = t.findIndex((u) => e.startsWith(u.left));
    if (r = D6(t[l].right, e, t[l].left.length), r === -1)
      break;
    var s = e.slice(0, r + t[l].right.length), o = E6.test(s) ? s : e.slice(t[l].left.length, r);
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
}, x6 = function(e, t) {
  var r = S6(e, t.delimiters);
  if (r.length === 1 && r[0].type === "text")
    return null;
  for (var a = document.createDocumentFragment(), i = 0; i < r.length; i++)
    if (r[i].type === "text")
      a.appendChild(document.createTextNode(r[i].data));
    else {
      var l = document.createElement("span"), s = r[i].data;
      t.displayMode = r[i].display;
      try {
        t.preProcess && (s = t.preProcess(s)), nu.render(s, l, t);
      } catch (o) {
        if (!(o instanceof nu.ParseError))
          throw o;
        t.errorCallback("KaTeX auto-render: Failed to parse `" + r[i].data + "` with ", o), a.appendChild(document.createTextNode(r[i].rawData));
        continue;
      }
      a.appendChild(l);
    }
  return a;
}, T6 = function n(e, t) {
  for (var r = 0; r < e.childNodes.length; r++) {
    var a = e.childNodes[r];
    if (a.nodeType === 3) {
      for (var i = a.textContent, l = a.nextSibling, s = 0; l && l.nodeType === Node.TEXT_NODE; )
        i += l.textContent, l = l.nextSibling, s++;
      var o = x6(i, t);
      if (o) {
        for (var u = 0; u < s; u++)
          a.nextSibling.remove();
        r += o.childNodes.length - 1, e.replaceChild(o, a);
      } else
        r += s;
    } else a.nodeType === 1 && function() {
      var c = " " + a.className + " ", d = t.ignoredTags.indexOf(a.nodeName.toLowerCase()) === -1 && t.ignoredClasses.every((h) => c.indexOf(" " + h + " ") === -1);
      d && n(a, t);
    }();
  }
}, C6 = function(e, t) {
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
  ], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, T6(e, r);
};
function Yu() {
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
let Nn = Yu();
function y4(n) {
  Nn = n;
}
const k4 = /[&<>"']/, F6 = new RegExp(k4.source, "g"), D4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, M6 = new RegExp(D4.source, "g"), z6 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Tc = (n) => z6[n];
function f0(n, e) {
  if (e) {
    if (k4.test(n))
      return n.replace(F6, Tc);
  } else if (D4.test(n))
    return n.replace(M6, Tc);
  return n;
}
const B6 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function I6(n) {
  return n.replace(B6, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const L6 = /(^|[^\[])\^/g;
function Be(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(L6, "$1"), t = t.replace(a, l), r;
    },
    getRegex: () => new RegExp(t, e)
  };
  return r;
}
function Cc(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Va = { exec: () => null };
function Fc(n, e) {
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
function Yi(n, e, t) {
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
function N6(n, e) {
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
function Mc(n, e, t, r) {
  const a = e.href, i = e.title ? f0(e.title) : null, l = n[1].replace(/\\([\[\]])/g, "$1");
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
    text: f0(l)
  };
}
function R6(n, e) {
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
class Ll {
  // set by the lexer
  constructor(e) {
    qe(this, "options");
    qe(this, "rules");
    // set by the lexer
    qe(this, "lexer");
    this.options = e || Nn;
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
        text: this.options.pedantic ? r : Yi(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], a = R6(r, t[3] || "");
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
        const a = Yi(r, "#");
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
      r = Yi(r.replace(/^ *>[ \t]?/gm, ""), `
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
`, 1)[0].replace(/^\t+/, (y) => " ".repeat(3 * y.length)), h = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, o = d.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, o = d.slice(p), p += t[1].length);
        let _ = !1;
        if (!d && /^ *$/.test(h) && (s += h + `
`, e = e.substring(h.length + 1), c = !0), !c) {
          const y = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), k = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), w = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), x = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const E = e.split(`
`, 1)[0];
            if (h = E, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), w.test(h) || x.test(h) || y.test(h) || k.test(e))
              break;
            if (h.search(/[^ ]/) >= p || !h.trim())
              o += `
` + h.slice(p);
            else {
              if (_ || d.search(/[^ ]/) >= 4 || w.test(d) || x.test(d) || k.test(d))
                break;
              o += `
` + h;
            }
            !_ && !h.trim() && (_ = !0), s += E + `
`, e = e.substring(E.length + 1), d = h.slice(p);
          }
        }
        i.loose || (u ? i.loose = !0 : /\n *\n *$/.test(s) && (u = !0));
        let b = null, D;
        this.options.gfm && (b = /^\[[ xX]\] /.exec(o), b && (D = b[0] !== "[ ] ", o = o.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: s,
          task: !!b,
          checked: D,
          loose: !1,
          text: o,
          tokens: []
        }), i.raw += s;
      }
      i.items[i.items.length - 1].raw = s.trimEnd(), i.items[i.items.length - 1].text = o.trimEnd(), i.raw = i.raw.trimEnd();
      for (let c = 0; c < i.items.length; c++)
        if (this.lexer.state.top = !1, i.items[c].tokens = this.lexer.blockTokens(i.items[c].text, []), !i.loose) {
          const d = i.items[c].tokens.filter((p) => p.type === "space"), h = d.length > 0 && d.some((p) => /\n.*\n/.test(p.raw));
          i.loose = h;
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
    const r = Fc(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
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
        l.rows.push(Fc(s, l.header.length).map((o) => ({
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
        text: f0(t[1])
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
        const l = Yi(r.slice(0, -1), "\\");
        if ((r.length - l.length) % 2 === 0)
          return;
      } else {
        const l = N6(t[2], "()");
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
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(r) ? a = a.slice(1) : a = a.slice(1, -1)), Mc(t, {
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
      return Mc(r, i, r[0], this.lexer);
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
        const h = [...a[0]][0].length, p = e.slice(0, l + a.index + h + o);
        if (Math.min(l, o) % 2) {
          const b = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: b,
            tokens: this.lexer.inlineTokens(b)
          };
        }
        const _ = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: _,
          tokens: this.lexer.inlineTokens(_)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return a && i && (r = r.substring(1, r.length - 1)), r = f0(r, !0), {
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
      return t[2] === "@" ? (r = f0(t[1]), a = "mailto:" + r) : (r = f0(t[1]), a = r), {
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
        a = f0(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (l !== t[0]);
        a = f0(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
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
      return this.lexer.state.inRawBlock ? r = t[0] : r = f0(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const O6 = /^(?: *(?:\n|$))+/, q6 = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, P6 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, si = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, H6 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, A4 = /(?:[*+-]|\d{1,9}[.)])/, E4 = Be(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, A4).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Zu = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, U6 = /^[^\n]+/, Ku = /(?!\s*\])(?:\\.|[^\[\]\\])+/, V6 = Be(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Ku).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), G6 = Be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, A4).getRegex(), is = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ju = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, j6 = Be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Ju).replace("tag", is).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), S4 = Be(Zu).replace("hr", si).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", is).getRegex(), W6 = Be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", S4).getRegex(), Qu = {
  blockquote: W6,
  code: q6,
  def: V6,
  fences: P6,
  heading: H6,
  hr: si,
  html: j6,
  lheading: E4,
  list: G6,
  newline: O6,
  paragraph: S4,
  table: Va,
  text: U6
}, zc = Be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", si).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", is).getRegex(), X6 = {
  ...Qu,
  table: zc,
  paragraph: Be(Zu).replace("hr", si).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", zc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", is).getRegex()
}, Y6 = {
  ...Qu,
  html: Be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ju).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Va,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Be(Zu).replace("hr", si).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", E4).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, x4 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Z6 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, T4 = /^( {2,}|\\)\n(?!\s*$)/, K6 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, oi = "\\p{P}\\p{S}", J6 = Be(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, oi).getRegex(), Q6 = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, $6 = Be(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, oi).getRegex(), e7 = Be("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, oi).getRegex(), t7 = Be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, oi).getRegex(), r7 = Be(/\\([punct])/, "gu").replace(/punct/g, oi).getRegex(), n7 = Be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), a7 = Be(Ju).replace("(?:-->|$)", "-->").getRegex(), i7 = Be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", a7).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Nl = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, l7 = Be(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Nl).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), C4 = Be(/^!?\[(label)\]\[(ref)\]/).replace("label", Nl).replace("ref", Ku).getRegex(), F4 = Be(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ku).getRegex(), s7 = Be("reflink|nolink(?!\\()", "g").replace("reflink", C4).replace("nolink", F4).getRegex(), $u = {
  _backpedal: Va,
  // only used for GFM url
  anyPunctuation: r7,
  autolink: n7,
  blockSkip: Q6,
  br: T4,
  code: Z6,
  del: Va,
  emStrongLDelim: $6,
  emStrongRDelimAst: e7,
  emStrongRDelimUnd: t7,
  escape: x4,
  link: l7,
  nolink: F4,
  punctuation: J6,
  reflink: C4,
  reflinkSearch: s7,
  tag: i7,
  text: K6,
  url: Va
}, o7 = {
  ...$u,
  link: Be(/^!?\[(label)\]\((.*?)\)/).replace("label", Nl).getRegex(),
  reflink: Be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Nl).getRegex()
}, au = {
  ...$u,
  escape: Be(x4).replace("])", "~|])").getRegex(),
  url: Be(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, u7 = {
  ...au,
  br: Be(T4).replace("{2,}", "*").getRegex(),
  text: Be(au.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Zi = {
  normal: Qu,
  gfm: X6,
  pedantic: Y6
}, xa = {
  normal: $u,
  gfm: au,
  breaks: u7,
  pedantic: o7
};
class ar {
  constructor(e) {
    qe(this, "tokens");
    qe(this, "options");
    qe(this, "state");
    qe(this, "tokenizer");
    qe(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Nn, this.options.tokenizer = this.options.tokenizer || new Ll(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Zi.normal,
      inline: xa.normal
    };
    this.options.pedantic ? (t.block = Zi.pedantic, t.inline = xa.pedantic) : this.options.gfm && (t.block = Zi.gfm, this.options.breaks ? t.inline = xa.breaks : t.inline = xa.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Zi,
      inline: xa
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new ar(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new ar(t).inlineTokens(e);
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
          let h;
          this.options.extensions.startInline.forEach((p) => {
            h = p.call({ lexer: this }, d), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
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
class Rl {
  constructor(e) {
    qe(this, "options");
    this.options = e || Nn;
  }
  code(e, t, r) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + f0(a) + '">' + (r ? e : f0(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : f0(e, !0)) + `</code></pre>
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
    const a = Cc(e);
    if (a === null)
      return r;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + r + "</a>", i;
  }
  image(e, t, r) {
    const a = Cc(e);
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
class e1 {
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
class ir {
  constructor(e) {
    qe(this, "options");
    qe(this, "renderer");
    qe(this, "textRenderer");
    this.options = e || Nn, this.options.renderer = this.options.renderer || new Rl(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new e1();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new ir(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new ir(t).parseInline(e);
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
          r += this.renderer.heading(this.parseInline(l.tokens), l.depth, I6(this.parseInline(l.tokens, this.textRenderer)));
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
            for (let h = 0; h < d.length; h++)
              o += this.renderer.tablecell(this.parseInline(d[h].tokens), { header: !1, align: l.align[h] });
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
            const h = l.items[d], p = h.checked, _ = h.task;
            let b = "";
            if (h.task) {
              const D = this.renderer.checkbox(!!p);
              u ? h.tokens.length > 0 && h.tokens[0].type === "paragraph" ? (h.tokens[0].text = D + " " + h.tokens[0].text, h.tokens[0].tokens && h.tokens[0].tokens.length > 0 && h.tokens[0].tokens[0].type === "text" && (h.tokens[0].tokens[0].text = D + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                type: "text",
                text: D + " "
              }) : b += D + " ";
            }
            b += this.parse(h.tokens, u), c += this.renderer.listitem(b, _, !!p);
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
class Ga {
  constructor(e) {
    qe(this, "options");
    this.options = e || Nn;
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
qe(Ga, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var In, iu, z4;
class M4 {
  constructor(...e) {
    x1(this, In);
    qe(this, "defaults", Yu());
    qe(this, "options", this.setOptions);
    qe(this, "parse", Ai(this, In, iu).call(this, ar.lex, ir.parse));
    qe(this, "parseInline", Ai(this, In, iu).call(this, ar.lexInline, ir.parseInline));
    qe(this, "Parser", ir);
    qe(this, "Renderer", Rl);
    qe(this, "TextRenderer", e1);
    qe(this, "Lexer", ar);
    qe(this, "Tokenizer", Ll);
    qe(this, "Hooks", Ga);
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
        const i = this.defaults.renderer || new Rl(this.defaults);
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
        const i = this.defaults.tokenizer || new Ll(this.defaults);
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
        const i = this.defaults.hooks || new Ga();
        for (const l in r.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.hooks[s], u = i[s];
          Ga.passThroughHooks.has(l) ? i[s] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(i, c)).then((h) => u.call(i, h));
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
    return ar.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return ir.parse(e, t ?? this.defaults);
  }
}
In = new WeakSet(), iu = function(e, t) {
  return (r, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = Ai(this, In, z4).call(this, !!l.silent, !!l.async);
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
}, z4 = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + f0(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const zn = new M4();
function ze(n, e) {
  return zn.parse(n, e);
}
ze.options = ze.setOptions = function(n) {
  return zn.setOptions(n), ze.defaults = zn.defaults, y4(ze.defaults), ze;
};
ze.getDefaults = Yu;
ze.defaults = Nn;
ze.use = function(...n) {
  return zn.use(...n), ze.defaults = zn.defaults, y4(ze.defaults), ze;
};
ze.walkTokens = function(n, e) {
  return zn.walkTokens(n, e);
};
ze.parseInline = zn.parseInline;
ze.Parser = ir;
ze.parser = ir.parse;
ze.Renderer = Rl;
ze.TextRenderer = e1;
ze.Lexer = ar;
ze.lexer = ar.lex;
ze.Tokenizer = Ll;
ze.Hooks = Ga;
ze.parse = ze;
ze.options;
ze.setOptions;
ze.use;
ze.walkTokens;
ze.parseInline;
ir.parse;
ar.lex;
function c7(n) {
  if (typeof n == "function" && (n = {
    highlight: n
  }), !n || typeof n.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof n.langPrefix != "string" && (n.langPrefix = "language-"), typeof n.emptyLangClass != "string" && (n.emptyLangClass = ""), {
    async: !!n.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = Bc(e.lang);
      if (n.async)
        return Promise.resolve(n.highlight(e.text, t, e.lang || "")).then(Ic(e));
      const r = n.highlight(e.text, t, e.lang || "");
      if (r instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      Ic(e)(r);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, r) {
        typeof e == "object" && (r = e.escaped, t = e.lang, e = e.text);
        const a = Bc(t), i = a ? n.langPrefix + Nc(a) : n.emptyLangClass, l = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${l}>${r ? e : Nc(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Bc(n) {
  return (n || "").match(/\S*/)[0];
}
function Ic(n) {
  return (e) => {
    typeof e == "string" && e !== n.text && (n.escaped = !0, n.text = e);
  };
}
const B4 = /[&<>"']/, f7 = new RegExp(B4.source, "g"), I4 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, h7 = new RegExp(I4.source, "g"), d7 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Lc = (n) => d7[n];
function Nc(n, e) {
  if (e) {
    if (B4.test(n))
      return n.replace(f7, Lc);
  } else if (I4.test(n))
    return n.replace(h7, Lc);
  return n;
}
const m7 = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, p7 = Object.hasOwnProperty;
class ls {
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
    let a = g7(e, t === !0);
    const i = a;
    for (; p7.call(r.occurrences, a); )
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
function g7(n, e) {
  return typeof n != "string" ? "" : (e || (n = n.toLowerCase()), n.replace(m7, "").replace(/ /g, "-"));
}
let L4 = new ls(), N4 = [];
function _7({ prefix: n = "", globalSlugs: e = !1 } = {}) {
  return {
    headerIds: !1,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(t) {
        return e || v7(), t;
      }
    },
    renderer: {
      heading(t, r, a) {
        a = a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const i = `${n}${L4.slug(a)}`, l = { level: r, text: t, id: i };
        return N4.push(l), `<h${r} id="${i}">${t}</h${r}>
`;
      }
    }
  };
}
function v7() {
  N4 = [], L4 = new ls();
}
var Rc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ny(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var R4 = { exports: {} };
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
        encode: function k(w) {
          return w instanceof o ? new o(w.type, k(w.content), w.alias) : Array.isArray(w) ? w.map(k) : w.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        clone: function k(w, x) {
          x = x || {};
          var E, T;
          switch (s.util.type(w)) {
            case "Object":
              if (T = s.util.objId(w), x[T])
                return x[T];
              E = /** @type {Record<string, any>} */
              {}, x[T] = E;
              for (var C in w)
                w.hasOwnProperty(C) && (E[C] = k(w[C], x));
              return (
                /** @type {any} */
                E
              );
            case "Array":
              return T = s.util.objId(w), x[T] ? x[T] : (E = [], x[T] = E, /** @type {Array} */
              /** @type {any} */
              w.forEach(function(F, I) {
                E[I] = k(F, x);
              }), /** @type {any} */
              E);
            default:
              return w;
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
            var w = a.exec(k.className);
            if (w)
              return w[1].toLowerCase();
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
        setLanguage: function(k, w) {
          k.className = k.className.replace(RegExp(a, "gi"), ""), k.classList.add("language-" + w);
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
              var w = document.getElementsByTagName("script");
              for (var x in w)
                if (w[x].src == k)
                  return w[x];
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
        isActive: function(k, w, x) {
          for (var E = "no-" + w; k; ) {
            var T = k.classList;
            if (T.contains(w))
              return !0;
            if (T.contains(E))
              return !1;
            k = k.parentElement;
          }
          return !!x;
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
        extend: function(k, w) {
          var x = s.util.clone(s.languages[k]);
          for (var E in w)
            x[E] = w[E];
          return x;
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
        insertBefore: function(k, w, x, E) {
          E = E || /** @type {any} */
          s.languages;
          var T = E[k], C = {};
          for (var F in T)
            if (T.hasOwnProperty(F)) {
              if (F == w)
                for (var I in x)
                  x.hasOwnProperty(I) && (C[I] = x[I]);
              x.hasOwnProperty(F) || (C[F] = T[F]);
            }
          var L = E[k];
          return E[k] = C, s.languages.DFS(s.languages, function(B, q) {
            q === L && B != k && (this[B] = C);
          }), C;
        },
        // Traverse a language definition with Depth First Search
        DFS: function k(w, x, E, T) {
          T = T || {};
          var C = s.util.objId;
          for (var F in w)
            if (w.hasOwnProperty(F)) {
              x.call(w, F, w[F], E || F);
              var I = w[F], L = s.util.type(I);
              L === "Object" && !T[C(I)] ? (T[C(I)] = !0, k(I, x, null, T)) : L === "Array" && !T[C(I)] && (T[C(I)] = !0, k(I, x, F, T));
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
      highlightAll: function(k, w) {
        s.highlightAllUnder(document, k, w);
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
      highlightAllUnder: function(k, w, x) {
        var E = {
          callback: x,
          container: k,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", E), E.elements = Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)), s.hooks.run("before-all-elements-highlight", E);
        for (var T = 0, C; C = E.elements[T++]; )
          s.highlightElement(C, w === !0, E.callback);
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
      highlightElement: function(k, w, x) {
        var E = s.util.getLanguage(k), T = s.languages[E];
        s.util.setLanguage(k, E);
        var C = k.parentElement;
        C && C.nodeName.toLowerCase() === "pre" && s.util.setLanguage(C, E);
        var F = k.textContent, I = {
          element: k,
          language: E,
          grammar: T,
          code: F
        };
        function L(q) {
          I.highlightedCode = q, s.hooks.run("before-insert", I), I.element.innerHTML = I.highlightedCode, s.hooks.run("after-highlight", I), s.hooks.run("complete", I), x && x.call(I.element);
        }
        if (s.hooks.run("before-sanity-check", I), C = I.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !I.code) {
          s.hooks.run("complete", I), x && x.call(I.element);
          return;
        }
        if (s.hooks.run("before-highlight", I), !I.grammar) {
          L(s.util.encode(I.code));
          return;
        }
        if (w && r.Worker) {
          var B = new Worker(s.filename);
          B.onmessage = function(q) {
            L(q.data);
          }, B.postMessage(JSON.stringify({
            language: I.language,
            code: I.code,
            immediateClose: !0
          }));
        } else
          L(s.highlight(I.code, I.grammar, I.language));
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
      highlight: function(k, w, x) {
        var E = {
          code: k,
          grammar: w,
          language: x
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
      tokenize: function(k, w) {
        var x = w.rest;
        if (x) {
          for (var E in x)
            w[E] = x[E];
          delete w.rest;
        }
        var T = new d();
        return h(T, T.head, k), c(k, T, w, T.head, 0), _(T);
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
        add: function(k, w) {
          var x = s.hooks.all;
          x[k] = x[k] || [], x[k].push(w);
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
        run: function(k, w) {
          var x = s.hooks.all[k];
          if (!(!x || !x.length))
            for (var E = 0, T; T = x[E++]; )
              T(w);
        }
      },
      Token: o
    };
    r.Prism = s;
    function o(k, w, x, E) {
      this.type = k, this.content = w, this.alias = x, this.length = (E || "").length | 0;
    }
    o.stringify = function k(w, x) {
      if (typeof w == "string")
        return w;
      if (Array.isArray(w)) {
        var E = "";
        return w.forEach(function(L) {
          E += k(L, x);
        }), E;
      }
      var T = {
        type: w.type,
        content: k(w.content, x),
        tag: "span",
        classes: ["token", w.type],
        attributes: {},
        language: x
      }, C = w.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(T.classes, C) : T.classes.push(C)), s.hooks.run("wrap", T);
      var F = "";
      for (var I in T.attributes)
        F += " " + I + '="' + (T.attributes[I] || "").replace(/"/g, "&quot;") + '"';
      return "<" + T.tag + ' class="' + T.classes.join(" ") + '"' + F + ">" + T.content + "</" + T.tag + ">";
    };
    function u(k, w, x, E) {
      k.lastIndex = w;
      var T = k.exec(x);
      if (T && E && T[1]) {
        var C = T[1].length;
        T.index += C, T[0] = T[0].slice(C);
      }
      return T;
    }
    function c(k, w, x, E, T, C) {
      for (var F in x)
        if (!(!x.hasOwnProperty(F) || !x[F])) {
          var I = x[F];
          I = Array.isArray(I) ? I : [I];
          for (var L = 0; L < I.length; ++L) {
            if (C && C.cause == F + "," + L)
              return;
            var B = I[L], q = B.inside, J = !!B.lookbehind, Y = !!B.greedy, O = B.alias;
            if (Y && !B.pattern.global) {
              var te = B.pattern.toString().match(/[imsuy]*$/)[0];
              B.pattern = RegExp(B.pattern.source, te + "g");
            }
            for (var ie = B.pattern || B, oe = E.next, ye = T; oe !== w.tail && !(C && ye >= C.reach); ye += oe.value.length, oe = oe.next) {
              var we = oe.value;
              if (w.length > k.length)
                return;
              if (!(we instanceof o)) {
                var $ = 1, fe;
                if (Y) {
                  if (fe = u(ie, ye, k, J), !fe || fe.index >= k.length)
                    break;
                  var Fe = fe.index, ve = fe.index + fe[0].length, Oe = ye;
                  for (Oe += oe.value.length; Fe >= Oe; )
                    oe = oe.next, Oe += oe.value.length;
                  if (Oe -= oe.value.length, ye = Oe, oe.value instanceof o)
                    continue;
                  for (var P = oe; P !== w.tail && (Oe < ve || typeof P.value == "string"); P = P.next)
                    $++, Oe += P.value.length;
                  $--, we = k.slice(ye, Oe), fe.index -= ye;
                } else if (fe = u(ie, 0, we, J), !fe)
                  continue;
                var Fe = fe.index, Ce = fe[0], V = we.slice(0, Fe), Ae = we.slice(Fe + Ce.length), ke = ye + we.length;
                C && ke > C.reach && (C.reach = ke);
                var xe = oe.prev;
                V && (xe = h(w, xe, V), ye += V.length), p(w, xe, $);
                var $e = new o(F, q ? s.tokenize(Ce, q) : Ce, O, Ce);
                if (oe = h(w, xe, $e), Ae && h(w, oe, Ae), $ > 1) {
                  var je = {
                    cause: F + "," + L,
                    reach: ke
                  };
                  c(k, w, x, oe.prev, ye, je), C && je.reach > C.reach && (C.reach = je.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var k = { value: null, prev: null, next: null }, w = { value: null, prev: k, next: null };
      k.next = w, this.head = k, this.tail = w, this.length = 0;
    }
    function h(k, w, x) {
      var E = w.next, T = { value: x, prev: w, next: E };
      return w.next = T, E.prev = T, k.length++, T;
    }
    function p(k, w, x) {
      for (var E = w.next, T = 0; T < x && E !== k.tail; T++)
        E = E.next;
      w.next = E, E.prev = w, k.length -= T;
    }
    function _(k) {
      for (var w = [], x = k.head.next; x !== k.tail; )
        w.push(x.value), x = x.next;
      return w;
    }
    if (!r.document)
      return r.addEventListener && (s.disableWorkerMessageHandler || r.addEventListener("message", function(k) {
        var w = JSON.parse(k.data), x = w.language, E = w.code, T = w.immediateClose;
        r.postMessage(s.highlight(E, s.languages[x], x)), T && r.close();
      }, !1)), s;
    var b = s.util.currentScript();
    b && (s.filename = b.src, b.hasAttribute("data-manual") && (s.manual = !0));
    function D() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var y = document.readyState;
      y === "loading" || y === "interactive" && b && b.defer ? document.addEventListener("DOMContentLoaded", D) : window.requestAnimationFrame ? window.requestAnimationFrame(D) : window.setTimeout(D, 16);
    }
    return s;
  }(e);
  n.exports && (n.exports = t), typeof Rc < "u" && (Rc.Prism = t), t.languages.markup = {
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
    var r = "Loading…", a = function(b, D) {
      return "✖ Error " + b + " while fetching file: " + D;
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
    function h(b, D, y) {
      var k = new XMLHttpRequest();
      k.open("GET", b, !0), k.onreadystatechange = function() {
        k.readyState == 4 && (k.status < 400 && k.responseText ? D(k.responseText) : k.status >= 400 ? y(a(k.status, k.statusText)) : y(i));
      }, k.send(null);
    }
    function p(b) {
      var D = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b || "");
      if (D) {
        var y = Number(D[1]), k = D[2], w = D[3];
        return k ? w ? [y, Number(w)] : [y, void 0] : [y, y];
      }
    }
    t.hooks.add("before-highlightall", function(b) {
      b.selector += ", " + d;
    }), t.hooks.add("before-sanity-check", function(b) {
      var D = (
        /** @type {HTMLPreElement} */
        b.element
      );
      if (D.matches(d)) {
        b.code = "", D.setAttribute(s, o);
        var y = D.appendChild(document.createElement("CODE"));
        y.textContent = r;
        var k = D.getAttribute("data-src"), w = b.language;
        if (w === "none") {
          var x = (/\.(\w+)$/.exec(k) || [, "none"])[1];
          w = l[x] || x;
        }
        t.util.setLanguage(y, w), t.util.setLanguage(D, w);
        var E = t.plugins.autoloader;
        E && E.loadLanguages(w), h(
          k,
          function(T) {
            D.setAttribute(s, u);
            var C = p(D.getAttribute("data-range"));
            if (C) {
              var F = T.split(/\r\n?|\n/g), I = C[0], L = C[1] == null ? F.length : C[1];
              I < 0 && (I += F.length), I = Math.max(0, Math.min(I - 1, F.length)), L < 0 && (L += F.length), L = Math.max(0, Math.min(L, F.length)), T = F.slice(I, L).join(`
`), D.hasAttribute("data-start") || D.setAttribute("data-start", String(I + 1));
            }
            y.textContent = T, t.highlightElement(y);
          },
          function(T) {
            D.setAttribute(s, c), y.textContent = T;
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
      highlight: function(D) {
        for (var y = (D || document).querySelectorAll(d), k = 0, w; w = y[k++]; )
          t.highlightElement(w);
      }
    };
    var _ = !1;
    t.fileHighlight = function() {
      _ || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), _ = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(R4);
var uo = R4.exports;
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
new ls();
const lu = (n) => JSON.parse(JSON.stringify(n)), b7 = (n) => n.nodeType === 1, w7 = (n) => H7.has(n.tagName), y7 = (n) => "action" in n, k7 = (n) => n.tagName === "IFRAME", D7 = (n) => "formAction" in n, A7 = (n) => "protocol" in n, Ki = /* @__PURE__ */ (() => {
  const n = /^(?:\w+script|data):/i;
  return (e) => n.test(e);
})(), E7 = /* @__PURE__ */ (() => {
  const n = /(?:script|data):/i;
  return (e) => n.test(e);
})(), S7 = (n) => {
  const e = {};
  for (let t = 0, r = n.length; t < r; t++) {
    const a = n[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, O4 = (n, e) => {
  let t = n.firstChild;
  for (; t; ) {
    const r = t.nextSibling;
    b7(t) && (e(t, n), t.parentNode && O4(t, e)), t = r;
  }
}, x7 = (n, e) => {
  const t = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = t.nextNode(); ) {
    const a = r.parentNode;
    a && e(r, a);
  }
}, T7 = (n, e) => !!globalThis.document && !!globalThis.document.createNodeIterator ? x7(n, e) : O4(n, e), q4 = [
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
], C7 = [
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
], F7 = /* @__PURE__ */ new Set([
  ...q4,
  ...C7
]), P4 = [
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
], M7 = [
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
], z7 = /* @__PURE__ */ new Set([
  ...P4,
  ...M7
]), H4 = [
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
], B7 = [
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
], I7 = /* @__PURE__ */ new Set([
  ...H4,
  ...B7
]), L7 = [
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
], N7 = [
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
], R7 = [
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
], W0 = {
  HTML: "http://www.w3.org/1999/xhtml",
  SVG: "http://www.w3.org/2000/svg",
  MATH: "http://www.w3.org/1998/Math/MathML"
}, O7 = {
  [W0.HTML]: F7,
  [W0.SVG]: z7,
  [W0.MATH]: I7
}, q7 = {
  [W0.HTML]: "html",
  [W0.SVG]: "svg",
  [W0.MATH]: "math"
}, P7 = {
  [W0.HTML]: "",
  [W0.SVG]: "svg:",
  [W0.MATH]: "math:"
}, H7 = /* @__PURE__ */ new Set([
  "A",
  "AREA",
  "BUTTON",
  "FORM",
  "IFRAME",
  "INPUT"
]), U4 = {
  allowComments: !0,
  allowCustomElements: !1,
  allowUnknownMarkup: !1,
  allowElements: [
    ...q4,
    ...P4.map((n) => `svg:${n}`),
    ...H4.map((n) => `math:${n}`)
  ],
  allowAttributes: S7([
    Object.fromEntries(L7.map((n) => [n, ["*"]])),
    Object.fromEntries(N7.map((n) => [n, ["svg:*"]])),
    Object.fromEntries(R7.map((n) => [n, ["math:*"]]))
  ])
};
var co = function(n, e, t, r, a) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? n !== e || !a : !e.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? a.call(n, t) : a ? a.value = t : e.set(n, t), t;
}, kn = function(n, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? n !== e || !r : !e.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(n) : r ? r.value : e.get(n);
}, $r, yl, kl;
class V4 {
  /* CONSTRUCTOR */
  constructor(e = {}) {
    $r.set(this, void 0), yl.set(this, void 0), kl.set(this, void 0), this.getConfiguration = () => lu(kn(this, $r, "f")), this.sanitize = (c) => {
      const d = kn(this, yl, "f"), h = kn(this, kl, "f");
      return T7(c, (p, _) => {
        const b = p.namespaceURI || W0.HTML, D = _.namespaceURI || W0.HTML, y = O7[b], k = q7[b], w = P7[b], x = p.tagName.toLowerCase(), E = `${w}${x}`, C = `${w}*`;
        if (!y.has(x) || !d.has(E) || b !== D && x !== k)
          _.removeChild(p);
        else {
          const F = p.getAttributeNames(), I = F.length;
          if (I) {
            for (let L = 0; L < I; L++) {
              const B = F[L], q = h[B];
              (!q || !q.has(C) && !q.has(E)) && p.removeAttribute(B);
            }
            if (w7(p))
              if (A7(p)) {
                const L = p.getAttribute("href");
                L && E7(L) && Ki(p.protocol) && p.removeAttribute("href");
              } else y7(p) ? Ki(p.action) && p.removeAttribute("action") : D7(p) ? Ki(p.formAction) && p.removeAttribute("formaction") : k7(p) && (Ki(p.src) && p.removeAttribute("formaction"), p.setAttribute("sandbox", "allow-scripts"));
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
    co(this, $r, lu(U4), "f");
    const { allowElements: o, allowAttributes: u } = e;
    o && (kn(this, $r, "f").allowElements = e.allowElements), u && (kn(this, $r, "f").allowAttributes = e.allowAttributes), co(this, yl, new Set(kn(this, $r, "f").allowElements), "f"), co(this, kl, Object.fromEntries(Object.entries(kn(this, $r, "f").allowAttributes || {}).map(([c, d]) => [c, new Set(d)])), "f");
  }
}
$r = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap();
V4.getDefaultConfiguration = () => lu(U4);
const U7 = (n, e) => {
  try {
    return !!n && new URL(n).origin !== new URL(e).origin;
  } catch {
    return !1;
  }
};
function Oc(n, e) {
  const t = new V4(), r = new DOMParser().parseFromString(n, "text/html");
  return G4(r.body, "A", (a) => {
    a instanceof HTMLElement && "target" in a && U7(a.getAttribute("href"), e) && (a.setAttribute("target", "_blank"), a.setAttribute("rel", "noopener noreferrer"));
  }), t.sanitize(r).body.innerHTML;
}
function G4(n, e, t) {
  n && (n.nodeName === e || typeof e == "function") && t(n);
  const r = (n == null ? void 0 : n.childNodes) || [];
  for (let a = 0; a < r.length; a++)
    G4(r[a], e, t);
}
function ra(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let r = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + r;
}
function Dl() {
}
const V7 = (n) => n;
function G7(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const j4 = typeof window < "u";
let qc = j4 ? () => window.performance.now() : () => Date.now(), W4 = j4 ? (n) => requestAnimationFrame(n) : Dl;
const la = /* @__PURE__ */ new Set();
function X4(n) {
  la.forEach((e) => {
    e.c(n) || (la.delete(e), e.f());
  }), la.size !== 0 && W4(X4);
}
function j7(n) {
  let e;
  return la.size === 0 && W4(X4), {
    promise: new Promise((t) => {
      la.add(e = { c: n, f: t });
    }),
    abort() {
      la.delete(e);
    }
  };
}
function t1(n, { delay: e = 0, duration: t = 400, easing: r = V7 } = {}) {
  const a = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (i) => `opacity: ${i * a}`
  };
}
const Wn = [];
function W7(n, e = Dl) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(s) {
    if (G7(n, s) && (n = s, t)) {
      const o = !Wn.length;
      for (const u of r)
        u[1](), Wn.push(u, n);
      if (o) {
        for (let u = 0; u < Wn.length; u += 2)
          Wn[u][0](Wn[u + 1]);
        Wn.length = 0;
      }
    }
  }
  function i(s) {
    a(s(n));
  }
  function l(s, o = Dl) {
    const u = [s, o];
    return r.add(u), r.size === 1 && (t = e(a, i) || Dl), s(n), () => {
      r.delete(u), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function Pc(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function su(n, e, t, r) {
  if (typeof t == "number" || Pc(t)) {
    const a = r - t, i = (t - e) / (n.dt || 1 / 60), l = n.opts.stiffness * a, s = n.opts.damping * i, o = (l - s) * n.inv_mass, u = (i + o) * n.dt;
    return Math.abs(u) < n.opts.precision && Math.abs(a) < n.opts.precision ? r : (n.settled = !1, Pc(t) ? new Date(t.getTime() + u) : t + u);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => su(n, e[i], t[i], r[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = su(n, e[i], t[i], r[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Hc(n, e = {}) {
  const t = W7(n), { stiffness: r = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, u = n, c = n, d = 1, h = 0, p = !1;
  function _(D, y = {}) {
    c = D;
    const k = o = {};
    return n == null || y.hard || b.stiffness >= 1 && b.damping >= 1 ? (p = !0, l = qc(), u = D, t.set(n = c), Promise.resolve()) : (y.soft && (h = 1 / ((y.soft === !0 ? 0.5 : +y.soft) * 60), d = 0), s || (l = qc(), p = !1, s = j7((w) => {
      if (p)
        return p = !1, s = null, !1;
      d = Math.min(d + h, 1);
      const x = {
        inv_mass: d,
        opts: b,
        settled: !0,
        dt: (w - l) * 60 / 1e3
      }, E = su(x, u, n, c);
      return l = w, u = n, t.set(n = E), x.settled && (s = null), !x.settled;
    })), new Promise((w) => {
      s.promise.then(() => {
        k === o && w();
      });
    }));
  }
  const b = {
    set: _,
    update: (D, y) => _(D(c, n), y),
    subscribe: t.subscribe,
    stiffness: r,
    damping: a,
    precision: i
  };
  return b;
}
const {
  SvelteComponent: X7,
  append_hydration: R0,
  attr: Ee,
  children: _0,
  claim_element: Y7,
  claim_svg_element: O0,
  component_subscribe: Uc,
  detach: o0,
  element: Z7,
  init: K7,
  insert_hydration: J7,
  noop: Vc,
  safe_not_equal: Q7,
  set_style: Ji,
  svg_element: q0,
  toggle_class: Gc
} = window.__gradio__svelte__internal, { onMount: $7 } = window.__gradio__svelte__internal;
function ep(n) {
  let e, t, r, a, i, l, s, o, u, c, d, h;
  return {
    c() {
      e = Z7("div"), t = q0("svg"), r = q0("g"), a = q0("path"), i = q0("path"), l = q0("path"), s = q0("path"), o = q0("g"), u = q0("path"), c = q0("path"), d = q0("path"), h = q0("path"), this.h();
    },
    l(p) {
      e = Y7(p, "DIV", { class: !0 });
      var _ = _0(e);
      t = O0(_, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var b = _0(t);
      r = O0(b, "g", { style: !0 });
      var D = _0(r);
      a = O0(D, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _0(a).forEach(o0), i = O0(D, "path", { d: !0, fill: !0, class: !0 }), _0(i).forEach(o0), l = O0(D, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _0(l).forEach(o0), s = O0(D, "path", { d: !0, fill: !0, class: !0 }), _0(s).forEach(o0), D.forEach(o0), o = O0(b, "g", { style: !0 });
      var y = _0(o);
      u = O0(y, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _0(u).forEach(o0), c = O0(y, "path", { d: !0, fill: !0, class: !0 }), _0(c).forEach(o0), d = O0(y, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), _0(d).forEach(o0), h = O0(y, "path", { d: !0, fill: !0, class: !0 }), _0(h).forEach(o0), y.forEach(o0), b.forEach(o0), _.forEach(o0), this.h();
    },
    h() {
      Ee(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Ee(a, "fill", "#FF7C00"), Ee(a, "fill-opacity", "0.4"), Ee(a, "class", "svelte-43sxxs"), Ee(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Ee(i, "fill", "#FF7C00"), Ee(i, "class", "svelte-43sxxs"), Ee(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Ee(l, "fill", "#FF7C00"), Ee(l, "fill-opacity", "0.4"), Ee(l, "class", "svelte-43sxxs"), Ee(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Ee(s, "fill", "#FF7C00"), Ee(s, "class", "svelte-43sxxs"), Ji(r, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), Ee(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Ee(u, "fill", "#FF7C00"), Ee(u, "fill-opacity", "0.4"), Ee(u, "class", "svelte-43sxxs"), Ee(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Ee(c, "fill", "#FF7C00"), Ee(c, "class", "svelte-43sxxs"), Ee(d, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Ee(d, "fill", "#FF7C00"), Ee(d, "fill-opacity", "0.4"), Ee(d, "class", "svelte-43sxxs"), Ee(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Ee(h, "fill", "#FF7C00"), Ee(h, "class", "svelte-43sxxs"), Ji(o, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), Ee(t, "viewBox", "-1200 -1200 3000 3000"), Ee(t, "fill", "none"), Ee(t, "xmlns", "http://www.w3.org/2000/svg"), Ee(t, "class", "svelte-43sxxs"), Ee(e, "class", "svelte-43sxxs"), Gc(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(p, _) {
      J7(p, e, _), R0(e, t), R0(t, r), R0(r, a), R0(r, i), R0(r, l), R0(r, s), R0(t, o), R0(o, u), R0(o, c), R0(o, d), R0(o, h);
    },
    p(p, [_]) {
      _ & /*$top*/
      2 && Ji(r, "transform", "translate(" + /*$top*/
      p[1][0] + "px, " + /*$top*/
      p[1][1] + "px)"), _ & /*$bottom*/
      4 && Ji(o, "transform", "translate(" + /*$bottom*/
      p[2][0] + "px, " + /*$bottom*/
      p[2][1] + "px)"), _ & /*margin*/
      1 && Gc(
        e,
        "margin",
        /*margin*/
        p[0]
      );
    },
    i: Vc,
    o: Vc,
    d(p) {
      p && o0(e);
    }
  };
}
function tp(n, e, t) {
  let r, a;
  var i = this && this.__awaiter || function(p, _, b, D) {
    function y(k) {
      return k instanceof b ? k : new b(function(w) {
        w(k);
      });
    }
    return new (b || (b = Promise))(function(k, w) {
      function x(C) {
        try {
          T(D.next(C));
        } catch (F) {
          w(F);
        }
      }
      function E(C) {
        try {
          T(D.throw(C));
        } catch (F) {
          w(F);
        }
      }
      function T(C) {
        C.done ? k(C.value) : y(C.value).then(x, E);
      }
      T((D = D.apply(p, _ || [])).next());
    });
  };
  let { margin: l = !0 } = e;
  const s = Hc([0, 0]);
  Uc(n, s, (p) => t(1, r = p));
  const o = Hc([0, 0]);
  Uc(n, o, (p) => t(2, a = p));
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
  function h() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([s.set([125, 0]), o.set([-125, 0])]), d();
    });
  }
  return $7(() => (h(), () => u = !0)), n.$$set = (p) => {
    "margin" in p && t(0, l = p.margin);
  }, [l, r, a, s, o];
}
class rp extends X7 {
  constructor(e) {
    super(), K7(this, e, tp, ep, Q7, { margin: 0 });
  }
}
const {
  SvelteComponent: np,
  append_hydration: En,
  attr: j0,
  binding_callbacks: jc,
  check_outros: ou,
  children: lr,
  claim_component: Y4,
  claim_element: sr,
  claim_space: A0,
  claim_text: Ke,
  create_component: Z4,
  create_slot: K4,
  destroy_component: J4,
  destroy_each: Q4,
  detach: ne,
  element: or,
  empty: F0,
  ensure_array_like: Ol,
  get_all_dirty_from_scope: $4,
  get_slot_changes: em,
  group_outros: uu,
  init: ap,
  insert_hydration: he,
  mount_component: tm,
  noop: cu,
  safe_not_equal: ip,
  set_data: M0,
  set_style: sn,
  space: E0,
  text: Je,
  toggle_class: b0,
  transition_in: V0,
  transition_out: ur,
  update_slot_base: rm
} = window.__gradio__svelte__internal, { tick: lp } = window.__gradio__svelte__internal, { onDestroy: sp } = window.__gradio__svelte__internal, { createEventDispatcher: op } = window.__gradio__svelte__internal, up = (n) => ({}), Wc = (n) => ({}), cp = (n) => ({}), Xc = (n) => ({});
function Yc(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r[43] = t, r;
}
function Zc(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r;
}
function fp(n) {
  let e, t, r, a, i = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, s, o;
  t = new L8({
    props: {
      Icon: m2,
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
  ), c = K4(
    u,
    n,
    /*$$scope*/
    n[29],
    Wc
  );
  return {
    c() {
      e = or("div"), Z4(t.$$.fragment), r = E0(), a = or("span"), l = Je(i), s = E0(), c && c.c(), this.h();
    },
    l(d) {
      e = sr(d, "DIV", { class: !0 });
      var h = lr(e);
      Y4(t.$$.fragment, h), h.forEach(ne), r = A0(d), a = sr(d, "SPAN", { class: !0 });
      var p = lr(a);
      l = Ke(p, i), p.forEach(ne), s = A0(d), c && c.l(d), this.h();
    },
    h() {
      j0(e, "class", "clear-status svelte-17v219f"), j0(a, "class", "error svelte-17v219f");
    },
    m(d, h) {
      he(d, e, h), tm(t, e, null), he(d, r, h), he(d, a, h), En(a, l), he(d, s, h), c && c.m(d, h), o = !0;
    },
    p(d, h) {
      const p = {};
      h[0] & /*i18n*/
      2 && (p.label = /*i18n*/
      d[1]("common.clear")), t.$set(p), (!o || h[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      d[1]("common.error") + "") && M0(l, i), c && c.p && (!o || h[0] & /*$$scope*/
      536870912) && rm(
        c,
        u,
        d,
        /*$$scope*/
        d[29],
        o ? em(
          u,
          /*$$scope*/
          d[29],
          h,
          up
        ) : $4(
          /*$$scope*/
          d[29]
        ),
        Wc
      );
    },
    i(d) {
      o || (V0(t.$$.fragment, d), V0(c, d), o = !0);
    },
    o(d) {
      ur(t.$$.fragment, d), ur(c, d), o = !1;
    },
    d(d) {
      d && (ne(e), ne(r), ne(a), ne(s)), J4(t), c && c.d(d);
    }
  };
}
function hp(n) {
  let e, t, r, a, i, l, s, o, u, c = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Kc(n)
  );
  function d(w, x) {
    if (
      /*progress*/
      w[7]
    ) return pp;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return mp;
    if (
      /*queue_position*/
      w[2] === 0
    ) return dp;
  }
  let h = d(n), p = h && h(n), _ = (
    /*timer*/
    n[5] && $c(n)
  );
  const b = [bp, vp], D = [];
  function y(w, x) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = y(n)) && (l = D[i] = b[i](n));
  let k = !/*timer*/
  n[5] && sf(n);
  return {
    c() {
      c && c.c(), e = E0(), t = or("div"), p && p.c(), r = E0(), _ && _.c(), a = E0(), l && l.c(), s = E0(), k && k.c(), o = F0(), this.h();
    },
    l(w) {
      c && c.l(w), e = A0(w), t = sr(w, "DIV", { class: !0 });
      var x = lr(t);
      p && p.l(x), r = A0(x), _ && _.l(x), x.forEach(ne), a = A0(w), l && l.l(w), s = A0(w), k && k.l(w), o = F0(), this.h();
    },
    h() {
      j0(t, "class", "progress-text svelte-17v219f"), b0(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), b0(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(w, x) {
      c && c.m(w, x), he(w, e, x), he(w, t, x), p && p.m(t, null), En(t, r), _ && _.m(t, null), he(w, a, x), ~i && D[i].m(w, x), he(w, s, x), k && k.m(w, x), he(w, o, x), u = !0;
    },
    p(w, x) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? c ? c.p(w, x) : (c = Kc(w), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), h === (h = d(w)) && p ? p.p(w, x) : (p && p.d(1), p = h && h(w), p && (p.c(), p.m(t, r))), /*timer*/
      w[5] ? _ ? _.p(w, x) : (_ = $c(w), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), (!u || x[0] & /*variant*/
      256) && b0(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!u || x[0] & /*variant*/
      256) && b0(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let E = i;
      i = y(w), i === E ? ~i && D[i].p(w, x) : (l && (uu(), ur(D[E], 1, 1, () => {
        D[E] = null;
      }), ou()), ~i ? (l = D[i], l ? l.p(w, x) : (l = D[i] = b[i](w), l.c()), V0(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      w[5] ? k && (uu(), ur(k, 1, 1, () => {
        k = null;
      }), ou()) : k ? (k.p(w, x), x[0] & /*timer*/
      32 && V0(k, 1)) : (k = sf(w), k.c(), V0(k, 1), k.m(o.parentNode, o));
    },
    i(w) {
      u || (V0(l), V0(k), u = !0);
    },
    o(w) {
      ur(l), ur(k), u = !1;
    },
    d(w) {
      w && (ne(e), ne(t), ne(a), ne(s), ne(o)), c && c.d(w), p && p.d(), _ && _.d(), ~i && D[i].d(w), k && k.d(w);
    }
  };
}
function Kc(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = or("div"), this.h();
    },
    l(r) {
      e = sr(r, "DIV", { class: !0 }), lr(e).forEach(ne), this.h();
    },
    h() {
      j0(e, "class", "eta-bar svelte-17v219f"), sn(e, "transform", t);
    },
    m(r, a) {
      he(r, e, a);
    },
    p(r, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && sn(e, "transform", t);
    },
    d(r) {
      r && ne(e);
    }
  };
}
function dp(n) {
  let e;
  return {
    c() {
      e = Je("processing |");
    },
    l(t) {
      e = Ke(t, "processing |");
    },
    m(t, r) {
      he(t, e, r);
    },
    p: cu,
    d(t) {
      t && ne(e);
    }
  };
}
function mp(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), r, a, i, l;
  return {
    c() {
      e = Je("queue: "), r = Je(t), a = Je("/"), i = Je(
        /*queue_size*/
        n[3]
      ), l = Je(" |");
    },
    l(s) {
      e = Ke(s, "queue: "), r = Ke(s, t), a = Ke(s, "/"), i = Ke(
        s,
        /*queue_size*/
        n[3]
      ), l = Ke(s, " |");
    },
    m(s, o) {
      he(s, e, o), he(s, r, o), he(s, a, o), he(s, i, o), he(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && M0(r, t), o[0] & /*queue_size*/
      8 && M0(
        i,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (ne(e), ne(r), ne(a), ne(i), ne(l));
    }
  };
}
function pp(n) {
  let e, t = Ol(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Qc(Zc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = F0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = F0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      he(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = Ol(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Zc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Qc(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && ne(e), Q4(r, a);
    }
  };
}
function Jc(n) {
  let e, t = (
    /*p*/
    n[41].unit + ""
  ), r, a, i = " ", l;
  function s(c, d) {
    return (
      /*p*/
      c[41].length != null ? _p : gp
    );
  }
  let o = s(n), u = o(n);
  return {
    c() {
      u.c(), e = E0(), r = Je(t), a = Je(" | "), l = Je(i);
    },
    l(c) {
      u.l(c), e = A0(c), r = Ke(c, t), a = Ke(c, " | "), l = Ke(c, i);
    },
    m(c, d) {
      u.m(c, d), he(c, e, d), he(c, r, d), he(c, a, d), he(c, l, d);
    },
    p(c, d) {
      o === (o = s(c)) && u ? u.p(c, d) : (u.d(1), u = o(c), u && (u.c(), u.m(e.parentNode, e))), d[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && M0(r, t);
    },
    d(c) {
      c && (ne(e), ne(r), ne(a), ne(l)), u.d(c);
    }
  };
}
function gp(n) {
  let e = ra(
    /*p*/
    n[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Je(e);
    },
    l(r) {
      t = Ke(r, e);
    },
    m(r, a) {
      he(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = ra(
        /*p*/
        r[41].index || 0
      ) + "") && M0(t, e);
    },
    d(r) {
      r && ne(t);
    }
  };
}
function _p(n) {
  let e = ra(
    /*p*/
    n[41].index || 0
  ) + "", t, r, a = ra(
    /*p*/
    n[41].length
  ) + "", i;
  return {
    c() {
      t = Je(e), r = Je("/"), i = Je(a);
    },
    l(l) {
      t = Ke(l, e), r = Ke(l, "/"), i = Ke(l, a);
    },
    m(l, s) {
      he(l, t, s), he(l, r, s), he(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = ra(
        /*p*/
        l[41].index || 0
      ) + "") && M0(t, e), s[0] & /*progress*/
      128 && a !== (a = ra(
        /*p*/
        l[41].length
      ) + "") && M0(i, a);
    },
    d(l) {
      l && (ne(t), ne(r), ne(i));
    }
  };
}
function Qc(n) {
  let e, t = (
    /*p*/
    n[41].index != null && Jc(n)
  );
  return {
    c() {
      t && t.c(), e = F0();
    },
    l(r) {
      t && t.l(r), e = F0();
    },
    m(r, a) {
      t && t.m(r, a), he(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].index != null ? t ? t.p(r, a) : (t = Jc(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && ne(e), t && t.d(r);
    }
  };
}
function $c(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), r, a;
  return {
    c() {
      e = Je(
        /*formatted_timer*/
        n[20]
      ), r = Je(t), a = Je("s");
    },
    l(i) {
      e = Ke(
        i,
        /*formatted_timer*/
        n[20]
      ), r = Ke(i, t), a = Ke(i, "s");
    },
    m(i, l) {
      he(i, e, l), he(i, r, l), he(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && M0(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && M0(r, t);
    },
    d(i) {
      i && (ne(e), ne(r), ne(a));
    }
  };
}
function vp(n) {
  let e, t;
  return e = new rp({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Z4(e.$$.fragment);
    },
    l(r) {
      Y4(e.$$.fragment, r);
    },
    m(r, a) {
      tm(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      r[8] === "default"), e.$set(i);
    },
    i(r) {
      t || (V0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ur(e.$$.fragment, r), t = !1;
    },
    d(r) {
      J4(e, r);
    }
  };
}
function bp(n) {
  let e, t, r, a, i, l = `${/*last_progress_level*/
  n[15] * 100}%`, s = (
    /*progress*/
    n[7] != null && ef(n)
  );
  return {
    c() {
      e = or("div"), t = or("div"), s && s.c(), r = E0(), a = or("div"), i = or("div"), this.h();
    },
    l(o) {
      e = sr(o, "DIV", { class: !0 });
      var u = lr(e);
      t = sr(u, "DIV", { class: !0 });
      var c = lr(t);
      s && s.l(c), c.forEach(ne), r = A0(u), a = sr(u, "DIV", { class: !0 });
      var d = lr(a);
      i = sr(d, "DIV", { class: !0 }), lr(i).forEach(ne), d.forEach(ne), u.forEach(ne), this.h();
    },
    h() {
      j0(t, "class", "progress-level-inner svelte-17v219f"), j0(i, "class", "progress-bar svelte-17v219f"), sn(i, "width", l), j0(a, "class", "progress-bar-wrap svelte-17v219f"), j0(e, "class", "progress-level svelte-17v219f");
    },
    m(o, u) {
      he(o, e, u), En(e, t), s && s.m(t, null), En(e, r), En(e, a), En(a, i), n[31](i);
    },
    p(o, u) {
      /*progress*/
      o[7] != null ? s ? s.p(o, u) : (s = ef(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && sn(i, "width", l);
    },
    i: cu,
    o: cu,
    d(o) {
      o && ne(e), s && s.d(), n[31](null);
    }
  };
}
function ef(n) {
  let e, t = Ol(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = lf(Yc(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = F0();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = F0();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      he(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = Ol(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Yc(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = lf(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && ne(e), Q4(r, a);
    }
  };
}
function tf(n) {
  let e, t, r, a, i = (
    /*i*/
    n[43] !== 0 && wp()
  ), l = (
    /*p*/
    n[41].desc != null && rf(n)
  ), s = (
    /*p*/
    n[41].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null && nf()
  ), o = (
    /*progress_level*/
    n[14] != null && af(n)
  );
  return {
    c() {
      i && i.c(), e = E0(), l && l.c(), t = E0(), s && s.c(), r = E0(), o && o.c(), a = F0();
    },
    l(u) {
      i && i.l(u), e = A0(u), l && l.l(u), t = A0(u), s && s.l(u), r = A0(u), o && o.l(u), a = F0();
    },
    m(u, c) {
      i && i.m(u, c), he(u, e, c), l && l.m(u, c), he(u, t, c), s && s.m(u, c), he(u, r, c), o && o.m(u, c), he(u, a, c);
    },
    p(u, c) {
      /*p*/
      u[41].desc != null ? l ? l.p(u, c) : (l = rf(u), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      u[41].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[43]
      ] != null ? s || (s = nf(), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), /*progress_level*/
      u[14] != null ? o ? o.p(u, c) : (o = af(u), o.c(), o.m(a.parentNode, a)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && (ne(e), ne(t), ne(r), ne(a)), i && i.d(u), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function wp(n) {
  let e;
  return {
    c() {
      e = Je(" /");
    },
    l(t) {
      e = Ke(t, " /");
    },
    m(t, r) {
      he(t, e, r);
    },
    d(t) {
      t && ne(e);
    }
  };
}
function rf(n) {
  let e = (
    /*p*/
    n[41].desc + ""
  ), t;
  return {
    c() {
      t = Je(e);
    },
    l(r) {
      t = Ke(r, e);
    },
    m(r, a) {
      he(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[41].desc + "") && M0(t, e);
    },
    d(r) {
      r && ne(t);
    }
  };
}
function nf(n) {
  let e;
  return {
    c() {
      e = Je("-");
    },
    l(t) {
      e = Ke(t, "-");
    },
    m(t, r) {
      he(t, e, r);
    },
    d(t) {
      t && ne(e);
    }
  };
}
function af(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[43]
  ] || 0)).toFixed(1) + "", t, r;
  return {
    c() {
      t = Je(e), r = Je("%");
    },
    l(a) {
      t = Ke(a, e), r = Ke(a, "%");
    },
    m(a, i) {
      he(a, t, i), he(a, r, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && M0(t, e);
    },
    d(a) {
      a && (ne(t), ne(r));
    }
  };
}
function lf(n) {
  let e, t = (
    /*p*/
    (n[41].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null) && tf(n)
  );
  return {
    c() {
      t && t.c(), e = F0();
    },
    l(r) {
      t && t.l(r), e = F0();
    },
    m(r, a) {
      t && t.m(r, a), he(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[43]
      ] != null ? t ? t.p(r, a) : (t = tf(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && ne(e), t && t.d(r);
    }
  };
}
function sf(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[30]["additional-loading-text"]
  ), l = K4(
    i,
    n,
    /*$$scope*/
    n[29],
    Xc
  );
  return {
    c() {
      e = or("p"), t = Je(
        /*loading_text*/
        n[9]
      ), r = E0(), l && l.c(), this.h();
    },
    l(s) {
      e = sr(s, "P", { class: !0 });
      var o = lr(e);
      t = Ke(
        o,
        /*loading_text*/
        n[9]
      ), o.forEach(ne), r = A0(s), l && l.l(s), this.h();
    },
    h() {
      j0(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      he(s, e, o), En(e, t), he(s, r, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && M0(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && rm(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? em(
          i,
          /*$$scope*/
          s[29],
          o,
          cp
        ) : $4(
          /*$$scope*/
          s[29]
        ),
        Xc
      );
    },
    i(s) {
      a || (V0(l, s), a = !0);
    },
    o(s) {
      ur(l, s), a = !1;
    },
    d(s) {
      s && (ne(e), ne(r)), l && l.d(s);
    }
  };
}
function yp(n) {
  let e, t, r, a, i;
  const l = [hp, fp], s = [];
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
      e = or("div"), r && r.c(), this.h();
    },
    l(u) {
      e = sr(u, "DIV", { class: !0 });
      var c = lr(e);
      r && r.l(c), c.forEach(ne), this.h();
    },
    h() {
      j0(e, "class", a = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-17v219f"), b0(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden" || /*status*/
      n[4] == "streaming"), b0(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), b0(
        e,
        "generating",
        /*status*/
        n[4] === "generating" && /*show_progress*/
        n[6] === "full"
      ), b0(
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
      he(u, e, c), ~t && s[t].m(e, null), n[33](e), i = !0;
    },
    p(u, c) {
      let d = t;
      t = o(u), t === d ? ~t && s[t].p(u, c) : (r && (uu(), ur(s[d], 1, 1, () => {
        s[d] = null;
      }), ou()), ~t ? (r = s[t], r ? r.p(u, c) : (r = s[t] = l[t](u), r.c()), V0(r, 1), r.m(e, null)) : r = null), (!i || c[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-17v219f")) && j0(e, "class", a), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && b0(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden" || /*status*/
      u[4] == "streaming"), (!i || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && b0(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!i || c[0] & /*variant, show_progress, status, show_progress*/
      336) && b0(
        e,
        "generating",
        /*status*/
        u[4] === "generating" && /*show_progress*/
        u[6] === "full"
      ), (!i || c[0] & /*variant, show_progress, border*/
      4416) && b0(
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
      i || (V0(r), i = !0);
    },
    o(u) {
      ur(r), i = !1;
    },
    d(u) {
      u && ne(e), ~t && s[t].d(), n[33](null);
    }
  };
}
var kp = function(n, e, t, r) {
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
let Qi = [], fo = !1;
const Dp = typeof window < "u", nm = Dp ? window.requestAnimationFrame : (n) => {
};
function Ap(n) {
  return kp(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Qi.push(e), !fo) fo = !0;
      else return;
      yield lp(), nm(() => {
        let r = [0, 0];
        for (let a = 0; a < Qi.length; a++) {
          const l = Qi[a].getBoundingClientRect();
          (a === 0 || l.top + window.scrollY <= r[0]) && (r[0] = l.top + window.scrollY, r[1] = a);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), fo = !1, Qi = [];
      });
    }
  });
}
function Ep(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const l = op();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: u } = e, { queue_size: c } = e, { status: d } = e, { scroll_to_output: h = !1 } = e, { timer: p = !0 } = e, { show_progress: _ = "full" } = e, { message: b = null } = e, { progress: D = null } = e, { variant: y = "default" } = e, { loading_text: k = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: x = !1 } = e, { border: E = !1 } = e, { autoscroll: T } = e, C, F = !1, I = 0, L = 0, B = null, q = null, J = 0, Y = null, O, te = null, ie = !0;
  const oe = () => {
    t(0, o = t(27, B = t(19, $ = null))), t(25, I = performance.now()), t(26, L = 0), F = !0, ye();
  };
  function ye() {
    nm(() => {
      t(26, L = (performance.now() - I) / 1e3), F && ye();
    });
  }
  function we() {
    t(26, L = 0), t(0, o = t(27, B = t(19, $ = null))), F && (F = !1);
  }
  sp(() => {
    F && we();
  });
  let $ = null;
  function fe(P) {
    jc[P ? "unshift" : "push"](() => {
      te = P, t(16, te), t(7, D), t(14, Y), t(15, O);
    });
  }
  const ve = () => {
    l("clear_status");
  };
  function Oe(P) {
    jc[P ? "unshift" : "push"](() => {
      C = P, t(13, C);
    });
  }
  return n.$$set = (P) => {
    "i18n" in P && t(1, s = P.i18n), "eta" in P && t(0, o = P.eta), "queue_position" in P && t(2, u = P.queue_position), "queue_size" in P && t(3, c = P.queue_size), "status" in P && t(4, d = P.status), "scroll_to_output" in P && t(22, h = P.scroll_to_output), "timer" in P && t(5, p = P.timer), "show_progress" in P && t(6, _ = P.show_progress), "message" in P && t(23, b = P.message), "progress" in P && t(7, D = P.progress), "variant" in P && t(8, y = P.variant), "loading_text" in P && t(9, k = P.loading_text), "absolute" in P && t(10, w = P.absolute), "translucent" in P && t(11, x = P.translucent), "border" in P && t(12, E = P.border), "autoscroll" in P && t(24, T = P.autoscroll), "$$scope" in P && t(29, i = P.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = B), o != null && B !== o && (t(28, q = (performance.now() - I) / 1e3 + o), t(19, $ = q.toFixed(1)), t(27, B = o))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, J = q === null || q <= 0 || !L ? null : Math.min(L / q, 1)), n.$$.dirty[0] & /*progress*/
    128 && D != null && t(18, ie = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (D != null ? t(14, Y = D.map((P) => {
      if (P.index != null && P.length != null)
        return P.index / P.length;
      if (P.progress != null)
        return P.progress;
    })) : t(14, Y = null), Y ? (t(15, O = Y[Y.length - 1]), te && (O === 0 ? t(16, te.style.transition = "0", te) : t(16, te.style.transition = "150ms", te))) : t(15, O = void 0)), n.$$.dirty[0] & /*status*/
    16 && (d === "pending" ? oe() : we()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && C && h && (d === "pending" || d === "complete") && Ap(C, T), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, r = L.toFixed(1));
  }, [
    o,
    s,
    u,
    c,
    d,
    p,
    _,
    D,
    y,
    k,
    w,
    x,
    E,
    C,
    Y,
    O,
    te,
    J,
    ie,
    $,
    r,
    l,
    h,
    b,
    T,
    I,
    L,
    B,
    q,
    i,
    a,
    fe,
    ve,
    Oe
  ];
}
class Sp extends np {
  constructor(e) {
    super(), ap(
      this,
      e,
      Ep,
      yp,
      ip,
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
  entries: am,
  setPrototypeOf: of,
  isFrozen: xp,
  getPrototypeOf: Tp,
  getOwnPropertyDescriptor: Cp
} = Object;
let {
  freeze: Wt,
  seal: z0,
  create: im
} = Object, {
  apply: fu,
  construct: hu
} = typeof Reflect < "u" && Reflect;
Wt || (Wt = function(e) {
  return e;
});
z0 || (z0 = function(e) {
  return e;
});
fu || (fu = function(e, t, r) {
  return e.apply(t, r);
});
hu || (hu = function(e, t) {
  return new e(...t);
});
const $i = Xt(Array.prototype.forEach), Fp = Xt(Array.prototype.lastIndexOf), uf = Xt(Array.prototype.pop), Ta = Xt(Array.prototype.push), Mp = Xt(Array.prototype.splice), Al = Xt(String.prototype.toLowerCase), ho = Xt(String.prototype.toString), cf = Xt(String.prototype.match), Ca = Xt(String.prototype.replace), zp = Xt(String.prototype.indexOf), Bp = Xt(String.prototype.trim), P0 = Xt(Object.prototype.hasOwnProperty), Gt = Xt(RegExp.prototype.test), Fa = Ip(TypeError);
function Xt(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return fu(n, e, r);
  };
}
function Ip(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return hu(n, t);
  };
}
function be(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Al;
  of && of(n, null);
  let r = e.length;
  for (; r--; ) {
    let a = e[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (xp(e) || (e[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function Lp(n) {
  for (let e = 0; e < n.length; e++)
    P0(n, e) || (n[e] = null);
  return n;
}
function An(n) {
  const e = im(null);
  for (const [t, r] of am(n))
    P0(n, t) && (Array.isArray(r) ? e[t] = Lp(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = An(r) : e[t] = r);
  return e;
}
function Ma(n, e) {
  for (; n !== null; ) {
    const r = Cp(n, e);
    if (r) {
      if (r.get)
        return Xt(r.get);
      if (typeof r.value == "function")
        return Xt(r.value);
    }
    n = Tp(n);
  }
  function t() {
    return null;
  }
  return t;
}
const ff = Wt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), mo = Wt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), po = Wt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Np = Wt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), go = Wt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Rp = Wt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), hf = Wt(["#text"]), df = Wt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), _o = Wt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), mf = Wt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), el = Wt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Op = z0(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qp = z0(/<%[\w\W]*|[\w\W]*%>/gm), Pp = z0(/\$\{[\w\W]*/gm), Hp = z0(/^data-[\-\w.\u00B7-\uFFFF]+$/), Up = z0(/^aria-[\-\w]+$/), lm = z0(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vp = z0(/^(?:\w+script|data):/i), Gp = z0(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), sm = z0(/^html$/i), jp = z0(/^[a-z][.\w]*(-[.\w]+)+$/i);
var pf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Up,
  ATTR_WHITESPACE: Gp,
  CUSTOM_ELEMENT: jp,
  DATA_ATTR: Hp,
  DOCTYPE_NAME: sm,
  ERB_EXPR: qp,
  IS_ALLOWED_URI: lm,
  IS_SCRIPT_OR_DATA: Vp,
  MUSTACHE_EXPR: Op,
  TMPLIT_EXPR: Pp
});
const za = {
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
}, Wp = function() {
  return typeof window > "u" ? null : window;
}, Xp = function(e, t) {
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
}, gf = function() {
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
function om() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wp();
  const e = (re) => om(re);
  if (e.version = "3.2.5", e.removed = [], !n || !n.document || n.document.nodeType !== za.document || !n.Element)
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
    DOMParser: h,
    trustedTypes: p
  } = n, _ = o.prototype, b = Ma(_, "cloneNode"), D = Ma(_, "remove"), y = Ma(_, "nextSibling"), k = Ma(_, "childNodes"), w = Ma(_, "parentNode");
  if (typeof l == "function") {
    const re = t.createElement("template");
    re.content && re.content.ownerDocument && (t = re.content.ownerDocument);
  }
  let x, E = "";
  const {
    implementation: T,
    createNodeIterator: C,
    createDocumentFragment: F,
    getElementsByTagName: I
  } = t, {
    importNode: L
  } = r;
  let B = gf();
  e.isSupported = typeof am == "function" && typeof w == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: q,
    ERB_EXPR: J,
    TMPLIT_EXPR: Y,
    DATA_ATTR: O,
    ARIA_ATTR: te,
    IS_SCRIPT_OR_DATA: ie,
    ATTR_WHITESPACE: oe,
    CUSTOM_ELEMENT: ye
  } = pf;
  let {
    IS_ALLOWED_URI: we
  } = pf, $ = null;
  const fe = be({}, [...ff, ...mo, ...po, ...go, ...hf]);
  let ve = null;
  const Oe = be({}, [...df, ..._o, ...mf, ...el]);
  let P = Object.seal(im(null, {
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
  })), Fe = null, Ce = null, V = !0, Ae = !0, ke = !1, xe = !0, $e = !1, je = !0, Ne = !1, et = !1, yt = !1, ot = !1, We = !1, dt = !1, Hr = !0, Ur = !1;
  const R = "user-content-";
  let B0 = !0, U = !1, Ie = {}, Xe = null;
  const G = be({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Pe = null;
  const de = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let mt = null;
  const _r = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", s0 = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml";
  let p0 = pt, bn = !1, I0 = null;
  const ma = be({}, [Tt, s0, pt], ho);
  let yi = be({}, ["mi", "mo", "mn", "ms", "mtext"]), ki = be({}, ["annotation-xml"]);
  const Mm = be({}, ["title", "style", "font", "a", "script"]);
  let pa = null;
  const zm = ["application/xhtml+xml", "text/html"], Bm = "text/html";
  let kt = null, Hn = null;
  const Im = t.createElement("form"), m1 = function(z) {
    return z instanceof RegExp || z instanceof Function;
  }, bs = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Hn && Hn === z)) {
      if ((!z || typeof z != "object") && (z = {}), z = An(z), pa = // eslint-disable-next-line unicorn/prefer-includes
      zm.indexOf(z.PARSER_MEDIA_TYPE) === -1 ? Bm : z.PARSER_MEDIA_TYPE, kt = pa === "application/xhtml+xml" ? ho : Al, $ = P0(z, "ALLOWED_TAGS") ? be({}, z.ALLOWED_TAGS, kt) : fe, ve = P0(z, "ALLOWED_ATTR") ? be({}, z.ALLOWED_ATTR, kt) : Oe, I0 = P0(z, "ALLOWED_NAMESPACES") ? be({}, z.ALLOWED_NAMESPACES, ho) : ma, mt = P0(z, "ADD_URI_SAFE_ATTR") ? be(An(_r), z.ADD_URI_SAFE_ATTR, kt) : _r, Pe = P0(z, "ADD_DATA_URI_TAGS") ? be(An(de), z.ADD_DATA_URI_TAGS, kt) : de, Xe = P0(z, "FORBID_CONTENTS") ? be({}, z.FORBID_CONTENTS, kt) : G, Fe = P0(z, "FORBID_TAGS") ? be({}, z.FORBID_TAGS, kt) : {}, Ce = P0(z, "FORBID_ATTR") ? be({}, z.FORBID_ATTR, kt) : {}, Ie = P0(z, "USE_PROFILES") ? z.USE_PROFILES : !1, V = z.ALLOW_ARIA_ATTR !== !1, Ae = z.ALLOW_DATA_ATTR !== !1, ke = z.ALLOW_UNKNOWN_PROTOCOLS || !1, xe = z.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $e = z.SAFE_FOR_TEMPLATES || !1, je = z.SAFE_FOR_XML !== !1, Ne = z.WHOLE_DOCUMENT || !1, ot = z.RETURN_DOM || !1, We = z.RETURN_DOM_FRAGMENT || !1, dt = z.RETURN_TRUSTED_TYPE || !1, yt = z.FORCE_BODY || !1, Hr = z.SANITIZE_DOM !== !1, Ur = z.SANITIZE_NAMED_PROPS || !1, B0 = z.KEEP_CONTENT !== !1, U = z.IN_PLACE || !1, we = z.ALLOWED_URI_REGEXP || lm, p0 = z.NAMESPACE || pt, yi = z.MATHML_TEXT_INTEGRATION_POINTS || yi, ki = z.HTML_INTEGRATION_POINTS || ki, P = z.CUSTOM_ELEMENT_HANDLING || {}, z.CUSTOM_ELEMENT_HANDLING && m1(z.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = z.CUSTOM_ELEMENT_HANDLING.tagNameCheck), z.CUSTOM_ELEMENT_HANDLING && m1(z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), z.CUSTOM_ELEMENT_HANDLING && typeof z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), $e && (Ae = !1), We && (ot = !0), Ie && ($ = be({}, hf), ve = [], Ie.html === !0 && (be($, ff), be(ve, df)), Ie.svg === !0 && (be($, mo), be(ve, _o), be(ve, el)), Ie.svgFilters === !0 && (be($, po), be(ve, _o), be(ve, el)), Ie.mathMl === !0 && (be($, go), be(ve, mf), be(ve, el))), z.ADD_TAGS && ($ === fe && ($ = An($)), be($, z.ADD_TAGS, kt)), z.ADD_ATTR && (ve === Oe && (ve = An(ve)), be(ve, z.ADD_ATTR, kt)), z.ADD_URI_SAFE_ATTR && be(mt, z.ADD_URI_SAFE_ATTR, kt), z.FORBID_CONTENTS && (Xe === G && (Xe = An(Xe)), be(Xe, z.FORBID_CONTENTS, kt)), B0 && ($["#text"] = !0), Ne && be($, ["html", "head", "body"]), $.table && (be($, ["tbody"]), delete Fe.tbody), z.TRUSTED_TYPES_POLICY) {
        if (typeof z.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Fa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof z.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Fa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = z.TRUSTED_TYPES_POLICY, E = x.createHTML("");
      } else
        x === void 0 && (x = Xp(p, a)), x !== null && typeof E == "string" && (E = x.createHTML(""));
      Wt && Wt(z), Hn = z;
    }
  }, p1 = be({}, [...mo, ...po, ...Np]), g1 = be({}, [...go, ...Rp]), Lm = function(z) {
    let X = w(z);
    (!X || !X.tagName) && (X = {
      namespaceURI: p0,
      tagName: "template"
    });
    const ee = Al(z.tagName), He = Al(X.tagName);
    return I0[z.namespaceURI] ? z.namespaceURI === s0 ? X.namespaceURI === pt ? ee === "svg" : X.namespaceURI === Tt ? ee === "svg" && (He === "annotation-xml" || yi[He]) : !!p1[ee] : z.namespaceURI === Tt ? X.namespaceURI === pt ? ee === "math" : X.namespaceURI === s0 ? ee === "math" && ki[He] : !!g1[ee] : z.namespaceURI === pt ? X.namespaceURI === s0 && !ki[He] || X.namespaceURI === Tt && !yi[He] ? !1 : !g1[ee] && (Mm[ee] || !p1[ee]) : !!(pa === "application/xhtml+xml" && I0[z.namespaceURI]) : !1;
  }, Y0 = function(z) {
    Ta(e.removed, {
      element: z
    });
    try {
      w(z).removeChild(z);
    } catch {
      D(z);
    }
  }, Di = function(z, X) {
    try {
      Ta(e.removed, {
        attribute: X.getAttributeNode(z),
        from: X
      });
    } catch {
      Ta(e.removed, {
        attribute: null,
        from: X
      });
    }
    if (X.removeAttribute(z), z === "is")
      if (ot || We)
        try {
          Y0(X);
        } catch {
        }
      else
        try {
          X.setAttribute(z, "");
        } catch {
        }
  }, _1 = function(z) {
    let X = null, ee = null;
    if (yt)
      z = "<remove></remove>" + z;
    else {
      const Ct = cf(z, /^[\r\n\t ]+/);
      ee = Ct && Ct[0];
    }
    pa === "application/xhtml+xml" && p0 === pt && (z = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + z + "</body></html>");
    const He = x ? x.createHTML(z) : z;
    if (p0 === pt)
      try {
        X = new h().parseFromString(He, pa);
      } catch {
      }
    if (!X || !X.documentElement) {
      X = T.createDocument(p0, "template", null);
      try {
        X.documentElement.innerHTML = bn ? E : He;
      } catch {
      }
    }
    const qt = X.body || X.documentElement;
    return z && ee && qt.insertBefore(t.createTextNode(ee), qt.childNodes[0] || null), p0 === pt ? I.call(X, Ne ? "html" : "body")[0] : Ne ? X.documentElement : qt;
  }, v1 = function(z) {
    return C.call(
      z.ownerDocument || z,
      z,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, ws = function(z) {
    return z instanceof d && (typeof z.nodeName != "string" || typeof z.textContent != "string" || typeof z.removeChild != "function" || !(z.attributes instanceof c) || typeof z.removeAttribute != "function" || typeof z.setAttribute != "function" || typeof z.namespaceURI != "string" || typeof z.insertBefore != "function" || typeof z.hasChildNodes != "function");
  }, b1 = function(z) {
    return typeof s == "function" && z instanceof s;
  };
  function vr(re, z, X) {
    $i(re, (ee) => {
      ee.call(e, z, X, Hn);
    });
  }
  const w1 = function(z) {
    let X = null;
    if (vr(B.beforeSanitizeElements, z, null), ws(z))
      return Y0(z), !0;
    const ee = kt(z.nodeName);
    if (vr(B.uponSanitizeElement, z, {
      tagName: ee,
      allowedTags: $
    }), z.hasChildNodes() && !b1(z.firstElementChild) && Gt(/<[/\w!]/g, z.innerHTML) && Gt(/<[/\w!]/g, z.textContent) || z.nodeType === za.progressingInstruction || je && z.nodeType === za.comment && Gt(/<[/\w]/g, z.data))
      return Y0(z), !0;
    if (!$[ee] || Fe[ee]) {
      if (!Fe[ee] && k1(ee) && (P.tagNameCheck instanceof RegExp && Gt(P.tagNameCheck, ee) || P.tagNameCheck instanceof Function && P.tagNameCheck(ee)))
        return !1;
      if (B0 && !Xe[ee]) {
        const He = w(z) || z.parentNode, qt = k(z) || z.childNodes;
        if (qt && He) {
          const Ct = qt.length;
          for (let $t = Ct - 1; $t >= 0; --$t) {
            const Z0 = b(qt[$t], !0);
            Z0.__removalCount = (z.__removalCount || 0) + 1, He.insertBefore(Z0, y(z));
          }
        }
      }
      return Y0(z), !0;
    }
    return z instanceof o && !Lm(z) || (ee === "noscript" || ee === "noembed" || ee === "noframes") && Gt(/<\/no(script|embed|frames)/i, z.innerHTML) ? (Y0(z), !0) : ($e && z.nodeType === za.text && (X = z.textContent, $i([q, J, Y], (He) => {
      X = Ca(X, He, " ");
    }), z.textContent !== X && (Ta(e.removed, {
      element: z.cloneNode()
    }), z.textContent = X)), vr(B.afterSanitizeElements, z, null), !1);
  }, y1 = function(z, X, ee) {
    if (Hr && (X === "id" || X === "name") && (ee in t || ee in Im))
      return !1;
    if (!(Ae && !Ce[X] && Gt(O, X))) {
      if (!(V && Gt(te, X))) {
        if (!ve[X] || Ce[X]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(k1(z) && (P.tagNameCheck instanceof RegExp && Gt(P.tagNameCheck, z) || P.tagNameCheck instanceof Function && P.tagNameCheck(z)) && (P.attributeNameCheck instanceof RegExp && Gt(P.attributeNameCheck, X) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(X)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            X === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && Gt(P.tagNameCheck, ee) || P.tagNameCheck instanceof Function && P.tagNameCheck(ee)))
          ) return !1;
        } else if (!mt[X]) {
          if (!Gt(we, Ca(ee, oe, ""))) {
            if (!((X === "src" || X === "xlink:href" || X === "href") && z !== "script" && zp(ee, "data:") === 0 && Pe[z])) {
              if (!(ke && !Gt(ie, Ca(ee, oe, "")))) {
                if (ee)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, k1 = function(z) {
    return z !== "annotation-xml" && cf(z, ye);
  }, D1 = function(z) {
    vr(B.beforeSanitizeAttributes, z, null);
    const {
      attributes: X
    } = z;
    if (!X || ws(z))
      return;
    const ee = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ve,
      forceKeepAttr: void 0
    };
    let He = X.length;
    for (; He--; ) {
      const qt = X[He], {
        name: Ct,
        namespaceURI: $t,
        value: Z0
      } = qt, ga = kt(Ct);
      let Ut = Ct === "value" ? Z0 : Bp(Z0);
      if (ee.attrName = ga, ee.attrValue = Ut, ee.keepAttr = !0, ee.forceKeepAttr = void 0, vr(B.uponSanitizeAttribute, z, ee), Ut = ee.attrValue, Ur && (ga === "id" || ga === "name") && (Di(Ct, z), Ut = R + Ut), je && Gt(/((--!?|])>)|<\/(style|title)/i, Ut)) {
        Di(Ct, z);
        continue;
      }
      if (ee.forceKeepAttr || (Di(Ct, z), !ee.keepAttr))
        continue;
      if (!xe && Gt(/\/>/i, Ut)) {
        Di(Ct, z);
        continue;
      }
      $e && $i([q, J, Y], (E1) => {
        Ut = Ca(Ut, E1, " ");
      });
      const A1 = kt(z.nodeName);
      if (y1(A1, ga, Ut)) {
        if (x && typeof p == "object" && typeof p.getAttributeType == "function" && !$t)
          switch (p.getAttributeType(A1, ga)) {
            case "TrustedHTML": {
              Ut = x.createHTML(Ut);
              break;
            }
            case "TrustedScriptURL": {
              Ut = x.createScriptURL(Ut);
              break;
            }
          }
        try {
          $t ? z.setAttributeNS($t, Ct, Ut) : z.setAttribute(Ct, Ut), ws(z) ? Y0(z) : uf(e.removed);
        } catch {
        }
      }
    }
    vr(B.afterSanitizeAttributes, z, null);
  }, Nm = function re(z) {
    let X = null;
    const ee = v1(z);
    for (vr(B.beforeSanitizeShadowDOM, z, null); X = ee.nextNode(); )
      vr(B.uponSanitizeShadowNode, X, null), w1(X), D1(X), X.content instanceof i && re(X.content);
    vr(B.afterSanitizeShadowDOM, z, null);
  };
  return e.sanitize = function(re) {
    let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = null, ee = null, He = null, qt = null;
    if (bn = !re, bn && (re = "<!-->"), typeof re != "string" && !b1(re))
      if (typeof re.toString == "function") {
        if (re = re.toString(), typeof re != "string")
          throw Fa("dirty is not a string, aborting");
      } else
        throw Fa("toString is not a function");
    if (!e.isSupported)
      return re;
    if (et || bs(z), e.removed = [], typeof re == "string" && (U = !1), U) {
      if (re.nodeName) {
        const Z0 = kt(re.nodeName);
        if (!$[Z0] || Fe[Z0])
          throw Fa("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (re instanceof s)
      X = _1("<!---->"), ee = X.ownerDocument.importNode(re, !0), ee.nodeType === za.element && ee.nodeName === "BODY" || ee.nodeName === "HTML" ? X = ee : X.appendChild(ee);
    else {
      if (!ot && !$e && !Ne && // eslint-disable-next-line unicorn/prefer-includes
      re.indexOf("<") === -1)
        return x && dt ? x.createHTML(re) : re;
      if (X = _1(re), !X)
        return ot ? null : dt ? E : "";
    }
    X && yt && Y0(X.firstChild);
    const Ct = v1(U ? re : X);
    for (; He = Ct.nextNode(); )
      w1(He), D1(He), He.content instanceof i && Nm(He.content);
    if (U)
      return re;
    if (ot) {
      if (We)
        for (qt = F.call(X.ownerDocument); X.firstChild; )
          qt.appendChild(X.firstChild);
      else
        qt = X;
      return (ve.shadowroot || ve.shadowrootmode) && (qt = L.call(r, qt, !0)), qt;
    }
    let $t = Ne ? X.outerHTML : X.innerHTML;
    return Ne && $["!doctype"] && X.ownerDocument && X.ownerDocument.doctype && X.ownerDocument.doctype.name && Gt(sm, X.ownerDocument.doctype.name) && ($t = "<!DOCTYPE " + X.ownerDocument.doctype.name + `>
` + $t), $e && $i([q, J, Y], (Z0) => {
      $t = Ca($t, Z0, " ");
    }), x && dt ? x.createHTML($t) : $t;
  }, e.setConfig = function() {
    let re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    bs(re), et = !0;
  }, e.clearConfig = function() {
    Hn = null, et = !1;
  }, e.isValidAttribute = function(re, z, X) {
    Hn || bs({});
    const ee = kt(re), He = kt(z);
    return y1(ee, He, X);
  }, e.addHook = function(re, z) {
    typeof z == "function" && Ta(B[re], z);
  }, e.removeHook = function(re, z) {
    if (z !== void 0) {
      const X = Fp(B[re], z);
      return X === -1 ? void 0 : Mp(B[re], X, 1)[0];
    }
    return uf(B[re]);
  }, e.removeHooks = function(re) {
    B[re] = [];
  }, e.removeAllHooks = function() {
    B = gf();
  }, e;
}
var ay = om();
const {
  SvelteComponent: Yp,
  attr: Zp,
  children: Kp,
  claim_element: Jp,
  detach: du,
  element: Qp,
  empty: _f,
  init: $p,
  insert_hydration: um,
  noop: vf,
  safe_not_equal: e8,
  set_style: bf
} = window.__gradio__svelte__internal;
function wf(n) {
  let e, t = `${/*time_limit*/
  n[0]}s`;
  return {
    c() {
      e = Qp("div"), this.h();
    },
    l(r) {
      e = Jp(r, "DIV", { class: !0 }), Kp(e).forEach(du), this.h();
    },
    h() {
      Zp(e, "class", "streaming-bar svelte-ga0jj6"), bf(e, "animation-duration", t);
    },
    m(r, a) {
      um(r, e, a);
    },
    p(r, a) {
      a & /*time_limit*/
      1 && t !== (t = `${/*time_limit*/
      r[0]}s`) && bf(e, "animation-duration", t);
    },
    d(r) {
      r && du(e);
    }
  };
}
function t8(n) {
  let e, t = (
    /*time_limit*/
    n[0] && wf(n)
  );
  return {
    c() {
      t && t.c(), e = _f();
    },
    l(r) {
      t && t.l(r), e = _f();
    },
    m(r, a) {
      t && t.m(r, a), um(r, e, a);
    },
    p(r, [a]) {
      /*time_limit*/
      r[0] ? t ? t.p(r, a) : (t = wf(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: vf,
    o: vf,
    d(r) {
      r && du(e), t && t.d(r);
    }
  };
}
function r8(n, e, t) {
  let { time_limit: r } = e;
  return n.$$set = (a) => {
    "time_limit" in a && t(0, r = a.time_limit);
  }, [r];
}
class cm extends Yp {
  constructor(e) {
    super(), $p(this, e, r8, t8, e8, { time_limit: 0 });
  }
}
const {
  SvelteComponent: n8,
  append_hydration: vo,
  attr: tl,
  children: yf,
  claim_component: a8,
  claim_element: kf,
  claim_space: i8,
  claim_text: l8,
  create_component: s8,
  destroy_component: o8,
  detach: bo,
  element: Df,
  init: u8,
  insert_hydration: c8,
  mount_component: f8,
  safe_not_equal: h8,
  set_data: d8,
  space: m8,
  text: p8,
  toggle_class: Kr,
  transition_in: g8,
  transition_out: _8
} = window.__gradio__svelte__internal;
function v8(n) {
  let e, t, r, a, i, l;
  return r = new /*Icon*/
  n[1]({}), {
    c() {
      e = Df("label"), t = Df("span"), s8(r.$$.fragment), a = m8(), i = p8(
        /*label*/
        n[0]
      ), this.h();
    },
    l(s) {
      e = kf(s, "LABEL", {
        for: !0,
        "data-testid": !0,
        class: !0
      });
      var o = yf(e);
      t = kf(o, "SPAN", { class: !0 });
      var u = yf(t);
      a8(r.$$.fragment, u), u.forEach(bo), a = i8(o), i = l8(
        o,
        /*label*/
        n[0]
      ), o.forEach(bo), this.h();
    },
    h() {
      tl(t, "class", "svelte-168uj4v"), tl(e, "for", ""), tl(e, "data-testid", "block-label"), tl(e, "class", "svelte-168uj4v"), Kr(e, "hide", !/*show_label*/
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
      c8(s, e, o), vo(e, t), f8(r, t, null), vo(e, a), vo(e, i), l = !0;
    },
    p(s, [o]) {
      (!l || o & /*label*/
      1) && d8(
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
      l || (g8(r.$$.fragment, s), l = !0);
    },
    o(s) {
      _8(r.$$.fragment, s), l = !1;
    },
    d(s) {
      s && bo(e), o8(r);
    }
  };
}
function b8(n, e, t) {
  let { label: r = null } = e, { Icon: a } = e, { show_label: i = !0 } = e, { disable: l = !1 } = e, { float: s = !0 } = e;
  return n.$$set = (o) => {
    "label" in o && t(0, r = o.label), "Icon" in o && t(1, a = o.Icon), "show_label" in o && t(2, i = o.show_label), "disable" in o && t(3, l = o.disable), "float" in o && t(4, s = o.float);
  }, [r, a, i, l, s];
}
class ss extends n8 {
  constructor(e) {
    super(), u8(this, e, b8, v8, h8, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: w8,
  append_hydration: mu,
  attr: yr,
  bubble: y8,
  check_outros: k8,
  children: pu,
  claim_component: D8,
  claim_element: gu,
  claim_space: A8,
  claim_text: E8,
  construct_svelte_component: Af,
  create_component: Ef,
  destroy_component: Sf,
  detach: ja,
  element: _u,
  group_outros: S8,
  init: x8,
  insert_hydration: fm,
  listen: T8,
  mount_component: xf,
  safe_not_equal: C8,
  set_data: F8,
  set_style: rl,
  space: M8,
  text: z8,
  toggle_class: e0,
  transition_in: Tf,
  transition_out: Cf
} = window.__gradio__svelte__internal;
function Ff(n) {
  let e, t;
  return {
    c() {
      e = _u("span"), t = z8(
        /*label*/
        n[1]
      ), this.h();
    },
    l(r) {
      e = gu(r, "SPAN", { class: !0 });
      var a = pu(e);
      t = E8(
        a,
        /*label*/
        n[1]
      ), a.forEach(ja), this.h();
    },
    h() {
      yr(e, "class", "svelte-vk34kx");
    },
    m(r, a) {
      fm(r, e, a), mu(e, t);
    },
    p(r, a) {
      a & /*label*/
      2 && F8(
        t,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && ja(e);
    }
  };
}
function B8(n) {
  let e, t, r, a, i, l, s, o = (
    /*show_label*/
    n[2] && Ff(n)
  );
  var u = (
    /*Icon*/
    n[0]
  );
  function c(d, h) {
    return {};
  }
  return u && (a = Af(u, c())), {
    c() {
      e = _u("button"), o && o.c(), t = M8(), r = _u("div"), a && Ef(a.$$.fragment), this.h();
    },
    l(d) {
      e = gu(d, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var h = pu(e);
      o && o.l(h), t = A8(h), r = gu(h, "DIV", { class: !0 });
      var p = pu(r);
      a && D8(a.$$.fragment, p), p.forEach(ja), h.forEach(ja), this.h();
    },
    h() {
      yr(r, "class", "svelte-vk34kx"), e0(
        r,
        "small",
        /*size*/
        n[4] === "small"
      ), e0(
        r,
        "large",
        /*size*/
        n[4] === "large"
      ), e0(
        r,
        "medium",
        /*size*/
        n[4] === "medium"
      ), e.disabled = /*disabled*/
      n[7], yr(
        e,
        "aria-label",
        /*label*/
        n[1]
      ), yr(
        e,
        "aria-haspopup",
        /*hasPopup*/
        n[8]
      ), yr(
        e,
        "title",
        /*label*/
        n[1]
      ), yr(e, "class", "svelte-vk34kx"), e0(
        e,
        "pending",
        /*pending*/
        n[3]
      ), e0(
        e,
        "padded",
        /*padded*/
        n[5]
      ), e0(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), e0(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), rl(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), rl(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(d, h) {
      fm(d, e, h), o && o.m(e, null), mu(e, t), mu(e, r), a && xf(a, r, null), i = !0, l || (s = T8(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), l = !0);
    },
    p(d, [h]) {
      if (/*show_label*/
      d[2] ? o ? o.p(d, h) : (o = Ff(d), o.c(), o.m(e, t)) : o && (o.d(1), o = null), h & /*Icon*/
      1 && u !== (u = /*Icon*/
      d[0])) {
        if (a) {
          S8();
          const p = a;
          Cf(p.$$.fragment, 1, 0, () => {
            Sf(p, 1);
          }), k8();
        }
        u ? (a = Af(u, c()), Ef(a.$$.fragment), Tf(a.$$.fragment, 1), xf(a, r, null)) : a = null;
      }
      (!i || h & /*size*/
      16) && e0(
        r,
        "small",
        /*size*/
        d[4] === "small"
      ), (!i || h & /*size*/
      16) && e0(
        r,
        "large",
        /*size*/
        d[4] === "large"
      ), (!i || h & /*size*/
      16) && e0(
        r,
        "medium",
        /*size*/
        d[4] === "medium"
      ), (!i || h & /*disabled*/
      128) && (e.disabled = /*disabled*/
      d[7]), (!i || h & /*label*/
      2) && yr(
        e,
        "aria-label",
        /*label*/
        d[1]
      ), (!i || h & /*hasPopup*/
      256) && yr(
        e,
        "aria-haspopup",
        /*hasPopup*/
        d[8]
      ), (!i || h & /*label*/
      2) && yr(
        e,
        "title",
        /*label*/
        d[1]
      ), (!i || h & /*pending*/
      8) && e0(
        e,
        "pending",
        /*pending*/
        d[3]
      ), (!i || h & /*padded*/
      32) && e0(
        e,
        "padded",
        /*padded*/
        d[5]
      ), (!i || h & /*highlight*/
      64) && e0(
        e,
        "highlight",
        /*highlight*/
        d[6]
      ), (!i || h & /*transparent*/
      512) && e0(
        e,
        "transparent",
        /*transparent*/
        d[9]
      ), h & /*disabled, _color*/
      2176 && rl(e, "color", !/*disabled*/
      d[7] && /*_color*/
      d[11] ? (
        /*_color*/
        d[11]
      ) : "var(--block-label-text-color)"), h & /*disabled, background*/
      1152 && rl(e, "--bg-color", /*disabled*/
      d[7] ? "auto" : (
        /*background*/
        d[10]
      ));
    },
    i(d) {
      i || (a && Tf(a.$$.fragment, d), i = !0);
    },
    o(d) {
      a && Cf(a.$$.fragment, d), i = !1;
    },
    d(d) {
      d && ja(e), o && o.d(), a && Sf(a), l = !1, s();
    }
  };
}
function I8(n, e, t) {
  let r, { Icon: a } = e, { label: i = "" } = e, { show_label: l = !1 } = e, { pending: s = !1 } = e, { size: o = "small" } = e, { padded: u = !0 } = e, { highlight: c = !1 } = e, { disabled: d = !1 } = e, { hasPopup: h = !1 } = e, { color: p = "var(--block-label-text-color)" } = e, { transparent: _ = !1 } = e, { background: b = "var(--block-background-fill)" } = e;
  function D(y) {
    y8.call(this, n, y);
  }
  return n.$$set = (y) => {
    "Icon" in y && t(0, a = y.Icon), "label" in y && t(1, i = y.label), "show_label" in y && t(2, l = y.show_label), "pending" in y && t(3, s = y.pending), "size" in y && t(4, o = y.size), "padded" in y && t(5, u = y.padded), "highlight" in y && t(6, c = y.highlight), "disabled" in y && t(7, d = y.disabled), "hasPopup" in y && t(8, h = y.hasPopup), "color" in y && t(12, p = y.color), "transparent" in y && t(9, _ = y.transparent), "background" in y && t(10, b = y.background);
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
    h,
    _,
    b,
    r,
    p,
    D
  ];
}
class L8 extends w8 {
  constructor(e) {
    super(), x8(this, e, I8, B8, C8, {
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
  SvelteComponent: N8,
  append_hydration: R8,
  attr: wo,
  binding_callbacks: O8,
  children: Mf,
  claim_element: zf,
  create_slot: q8,
  detach: yo,
  element: Bf,
  get_all_dirty_from_scope: P8,
  get_slot_changes: H8,
  init: U8,
  insert_hydration: V8,
  safe_not_equal: G8,
  toggle_class: Jr,
  transition_in: j8,
  transition_out: W8,
  update_slot_base: X8
} = window.__gradio__svelte__internal;
function Y8(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[5].default
  ), i = q8(
    a,
    n,
    /*$$scope*/
    n[4],
    null
  );
  return {
    c() {
      e = Bf("div"), t = Bf("div"), i && i.c(), this.h();
    },
    l(l) {
      e = zf(l, "DIV", { class: !0, "aria-label": !0 });
      var s = Mf(e);
      t = zf(s, "DIV", { class: !0 });
      var o = Mf(t);
      i && i.l(o), o.forEach(yo), s.forEach(yo), this.h();
    },
    h() {
      wo(t, "class", "icon svelte-3w3rth"), wo(e, "class", "empty svelte-3w3rth"), wo(e, "aria-label", "Empty value"), Jr(
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
      V8(l, e, s), R8(e, t), i && i.m(t, null), n[6](e), r = !0;
    },
    p(l, [s]) {
      i && i.p && (!r || s & /*$$scope*/
      16) && X8(
        i,
        a,
        l,
        /*$$scope*/
        l[4],
        r ? H8(
          a,
          /*$$scope*/
          l[4],
          s,
          null
        ) : P8(
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
      r || (j8(i, l), r = !0);
    },
    o(l) {
      W8(i, l), r = !1;
    },
    d(l) {
      l && yo(e), i && i.d(l), n[6](null);
    }
  };
}
function Z8(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e, { size: l = "small" } = e, { unpadded_box: s = !1 } = e, o;
  function u(d) {
    var h;
    if (!d) return !1;
    const { height: p } = d.getBoundingClientRect(), { height: _ } = ((h = d.parentElement) === null || h === void 0 ? void 0 : h.getBoundingClientRect()) || { height: p };
    return p > _ + 2;
  }
  function c(d) {
    O8[d ? "unshift" : "push"](() => {
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
class hm extends N8 {
  constructor(e) {
    super(), U8(this, e, Z8, Y8, G8, { size: 0, unpadded_box: 1 });
  }
}
const K8 = /^(#\s*)(.+)$/m;
function J8(n) {
  const e = n.trim(), t = e.match(K8);
  if (!t)
    return [!1, e || !1];
  const [r, , a] = t, i = a.trim();
  if (e === r)
    return [i, !1];
  const l = t.index !== void 0 ? t.index + r.length : 0, o = e.substring(l).trim() || !1;
  return [i, o];
}
const {
  SvelteComponent: Q8,
  append_hydration: Tn,
  attr: Qa,
  check_outros: $8,
  children: $a,
  claim_component: dm,
  claim_element: ei,
  claim_space: os,
  claim_text: Sn,
  create_component: mm,
  destroy_component: pm,
  detach: Ht,
  element: ti,
  empty: ql,
  group_outros: eg,
  init: tg,
  insert_hydration: X0,
  mount_component: gm,
  safe_not_equal: rg,
  set_data: ri,
  space: us,
  text: xn,
  toggle_class: If,
  transition_in: Pl,
  transition_out: Hl
} = window.__gradio__svelte__internal;
function ng(n) {
  let e, t;
  return e = new K2({}), {
    c() {
      mm(e.$$.fragment);
    },
    l(r) {
      dm(e.$$.fragment, r);
    },
    m(r, a) {
      gm(e, r, a), t = !0;
    },
    i(r) {
      t || (Pl(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Hl(e.$$.fragment, r), t = !1;
    },
    d(r) {
      pm(e, r);
    }
  };
}
function ag(n) {
  let e, t;
  return e = new x2({}), {
    c() {
      mm(e.$$.fragment);
    },
    l(r) {
      dm(e.$$.fragment, r);
    },
    m(r, a) {
      gm(e, r, a), t = !0;
    },
    i(r) {
      t || (Pl(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Hl(e.$$.fragment, r), t = !1;
    },
    d(r) {
      pm(e, r);
    }
  };
}
function ig(n) {
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
    n[3] !== "short" && Lf(n)
  );
  return {
    c() {
      t = xn(e), r = us(), i && i.c(), a = ql();
    },
    l(l) {
      t = Sn(l, e), r = os(l), i && i.l(l), a = ql();
    },
    m(l, s) {
      X0(l, t, s), X0(l, r, s), i && i.m(l, s), X0(l, a, s);
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
      ) + "") && ri(t, e), /*mode*/
      l[3] !== "short" ? i ? i.p(l, s) : (i = Lf(l), i.c(), i.m(a.parentNode, a)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && (Ht(t), Ht(r), Ht(a)), i && i.d(l);
    }
  };
}
function lg(n) {
  let e, t, r = (
    /*heading*/
    n[6] && Nf(n)
  ), a = (
    /*paragraph*/
    n[5] && Rf(n)
  );
  return {
    c() {
      r && r.c(), e = us(), a && a.c(), t = ql();
    },
    l(i) {
      r && r.l(i), e = os(i), a && a.l(i), t = ql();
    },
    m(i, l) {
      r && r.m(i, l), X0(i, e, l), a && a.m(i, l), X0(i, t, l);
    },
    p(i, l) {
      /*heading*/
      i[6] ? r ? r.p(i, l) : (r = Nf(i), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), /*paragraph*/
      i[5] ? a ? a.p(i, l) : (a = Rf(i), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && (Ht(e), Ht(t)), r && r.d(i), a && a.d(i);
    }
  };
}
function Lf(n) {
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
      e = ti("span"), t = xn("- "), a = xn(r), i = xn(" -"), l = us(), o = xn(s), this.h();
    },
    l(u) {
      e = ei(u, "SPAN", { class: !0 });
      var c = $a(e);
      t = Sn(c, "- "), a = Sn(c, r), i = Sn(c, " -"), c.forEach(Ht), l = os(u), o = Sn(u, s), this.h();
    },
    h() {
      Qa(e, "class", "or svelte-1xg7h5n");
    },
    m(u, c) {
      X0(u, e, c), Tn(e, t), Tn(e, a), Tn(e, i), X0(u, l, c), X0(u, o, c);
    },
    p(u, c) {
      c & /*i18n*/
      2 && r !== (r = /*i18n*/
      u[1]("common.or") + "") && ri(a, r), c & /*message, i18n*/
      6 && s !== (s = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && ri(o, s);
    },
    d(u) {
      u && (Ht(e), Ht(l), Ht(o));
    }
  };
}
function Nf(n) {
  let e, t;
  return {
    c() {
      e = ti("h2"), t = xn(
        /*heading*/
        n[6]
      ), this.h();
    },
    l(r) {
      e = ei(r, "H2", { class: !0 });
      var a = $a(e);
      t = Sn(
        a,
        /*heading*/
        n[6]
      ), a.forEach(Ht), this.h();
    },
    h() {
      Qa(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      X0(r, e, a), Tn(e, t);
    },
    p(r, a) {
      a & /*heading*/
      64 && ri(
        t,
        /*heading*/
        r[6]
      );
    },
    d(r) {
      r && Ht(e);
    }
  };
}
function Rf(n) {
  let e, t;
  return {
    c() {
      e = ti("p"), t = xn(
        /*paragraph*/
        n[5]
      ), this.h();
    },
    l(r) {
      e = ei(r, "P", { class: !0 });
      var a = $a(e);
      t = Sn(
        a,
        /*paragraph*/
        n[5]
      ), a.forEach(Ht), this.h();
    },
    h() {
      Qa(e, "class", "svelte-1xg7h5n");
    },
    m(r, a) {
      X0(r, e, a), Tn(e, t);
    },
    p(r, a) {
      a & /*paragraph*/
      32 && ri(
        t,
        /*paragraph*/
        r[5]
      );
    },
    d(r) {
      r && Ht(e);
    }
  };
}
function sg(n) {
  let e, t, r, a, i, l;
  const s = [ag, ng], o = [];
  function u(p, _) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  r = u(n), a = o[r] = s[r](n);
  function c(p, _) {
    return (
      /*heading*/
      p[6] || /*paragraph*/
      p[5] ? lg : ig
    );
  }
  let d = c(n), h = d(n);
  return {
    c() {
      e = ti("div"), t = ti("span"), a.c(), i = us(), h.c(), this.h();
    },
    l(p) {
      e = ei(p, "DIV", { class: !0 });
      var _ = $a(e);
      t = ei(_, "SPAN", { class: !0 });
      var b = $a(t);
      a.l(b), b.forEach(Ht), i = os(_), h.l(_), _.forEach(Ht), this.h();
    },
    h() {
      Qa(t, "class", "icon-wrap svelte-1xg7h5n"), If(
        t,
        "hovered",
        /*hovered*/
        n[4]
      ), Qa(e, "class", "wrap svelte-1xg7h5n");
    },
    m(p, _) {
      X0(p, e, _), Tn(e, t), o[r].m(t, null), Tn(e, i), h.m(e, null), l = !0;
    },
    p(p, [_]) {
      let b = r;
      r = u(p), r !== b && (eg(), Hl(o[b], 1, 1, () => {
        o[b] = null;
      }), $8(), a = o[r], a || (a = o[r] = s[r](p), a.c()), Pl(a, 1), a.m(t, null)), (!l || _ & /*hovered*/
      16) && If(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), d === (d = c(p)) && h ? h.p(p, _) : (h.d(1), h = d(p), h && (h.c(), h.m(e, null)));
    },
    i(p) {
      l || (Pl(a), l = !0);
    },
    o(p) {
      Hl(a), l = !1;
    },
    d(p) {
      p && Ht(e), o[r].d(), h.d();
    }
  };
}
function og(n, e, t) {
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
  return n.$$set = (h) => {
    "type" in h && t(0, i = h.type), "i18n" in h && t(1, l = h.i18n), "message" in h && t(2, s = h.message), "mode" in h && t(3, o = h.mode), "hovered" in h && t(4, u = h.hovered), "placeholder" in h && t(8, c = h.placeholder);
  }, n.$$.update = () => {
    n.$$.dirty & /*placeholder*/
    256 && t(6, [r, a] = c ? J8(c) : [!1, !1], r, (t(5, a), t(8, c)));
  }, [i, l, s, o, u, a, r, d, c];
}
class ug extends Q8 {
  constructor(e) {
    super(), tg(this, e, og, sg, rg, {
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
  SvelteComponent: cg,
  append_hydration: nl,
  attr: ko,
  check_outros: fg,
  children: Do,
  claim_component: hg,
  claim_element: Ao,
  claim_space: dg,
  claim_text: mg,
  construct_svelte_component: Of,
  create_component: qf,
  destroy_component: Pf,
  detach: al,
  element: Eo,
  group_outros: pg,
  init: gg,
  insert_hydration: _g,
  listen: vg,
  mount_component: Hf,
  safe_not_equal: bg,
  set_data: wg,
  set_style: yg,
  space: kg,
  text: Dg,
  transition_in: Uf,
  transition_out: Vf
} = window.__gradio__svelte__internal, { createEventDispatcher: Ag } = window.__gradio__svelte__internal;
function Eg(n) {
  let e, t, r, a, i, l, s, o, u;
  var c = (
    /*icon*/
    n[0]
  );
  function d(h, p) {
    return {};
  }
  return c && (a = Of(c, d())), {
    c() {
      e = Eo("button"), t = Eo("div"), r = Eo("span"), a && qf(a.$$.fragment), i = kg(), l = Dg(
        /*text*/
        n[1]
      ), this.h();
    },
    l(h) {
      e = Ao(h, "BUTTON", { class: !0 });
      var p = Do(e);
      t = Ao(p, "DIV", { class: !0 });
      var _ = Do(t);
      r = Ao(_, "SPAN", { class: !0 });
      var b = Do(r);
      a && hg(a.$$.fragment, b), b.forEach(al), i = dg(_), l = mg(
        _,
        /*text*/
        n[1]
      ), _.forEach(al), p.forEach(al), this.h();
    },
    h() {
      ko(r, "class", "icon-wrap svelte-1kt44zd"), ko(t, "class", "wrap svelte-1kt44zd"), ko(e, "class", "svelte-1kt44zd"), yg(e, "height", "100%");
    },
    m(h, p) {
      _g(h, e, p), nl(e, t), nl(t, r), a && Hf(a, r, null), nl(t, i), nl(t, l), s = !0, o || (u = vg(
        e,
        "click",
        /*click_handler*/
        n[3]
      ), o = !0);
    },
    p(h, [p]) {
      if (p & /*icon*/
      1 && c !== (c = /*icon*/
      h[0])) {
        if (a) {
          pg();
          const _ = a;
          Vf(_.$$.fragment, 1, 0, () => {
            Pf(_, 1);
          }), fg();
        }
        c ? (a = Of(c, d()), qf(a.$$.fragment), Uf(a.$$.fragment, 1), Hf(a, r, null)) : a = null;
      }
      (!s || p & /*text*/
      2) && wg(
        l,
        /*text*/
        h[1]
      );
    },
    i(h) {
      s || (a && Uf(a.$$.fragment, h), s = !0);
    },
    o(h) {
      a && Vf(a.$$.fragment, h), s = !1;
    },
    d(h) {
      h && al(e), a && Pf(a), o = !1, u();
    }
  };
}
function Sg(n, e, t) {
  let r, { icon: a = W1 } = e;
  const i = Ag(), l = () => i("click");
  return n.$$set = (s) => {
    "icon" in s && t(0, a = s.icon);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon*/
    1 && t(1, r = a === W1 ? "Click to Access Webcam" : "Click to Access Microphone");
  }, [a, r, i, l];
}
class _m extends cg {
  constructor(e) {
    super(), gg(this, e, Sg, Eg, bg, { icon: 0 });
  }
}
function vm() {
  return navigator.mediaDevices.enumerateDevices();
}
function xg(n, e) {
  e.srcObject = n, e.muted = !0, e.play();
}
async function Gf(n, e, t, r) {
  const a = r || {
    width: { ideal: 500 },
    height: { ideal: 500 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...a } : a,
    audio: n
  };
  return navigator.mediaDevices.getUserMedia(i).then((l) => (xg(l, e), l));
}
function bm(n, e = "videoinput") {
  return n.filter(
    (r) => r.kind === e
  );
}
function Tg(n, e) {
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
async function cs(n, e, t, r, a, i = "video", l = () => {
}, s = {}, o = () => {
}, u = () => {
}) {
  e = Tg(e, t);
  const c = e.createDataChannel("text");
  return c.onopen = () => {
    console.debug("Data channel is open"), c.send("handshake");
  }, c.onmessage = (d) => {
    console.debug("Received message:", d.data);
    let h;
    try {
      h = JSON.parse(d.data);
    } catch {
      console.debug("Error parsing JSON");
    }
    (d.data === "change" || d.data === "tick" || d.data === "stopword" || (h == null ? void 0 : h.type) === "warning" || (h == null ? void 0 : h.type) === "error" || (h == null ? void 0 : h.type) === "send_input" || (h == null ? void 0 : h.type) === "fetch_output" || (h == null ? void 0 : h.type) === "stopword" || (h == null ? void 0 : h.type) === "end_stream" || (h == null ? void 0 : h.type) === "update_connection") && l(h ?? d.data), o(h ?? d.data);
  }, n ? n.getTracks().forEach(async (d) => {
    console.debug("Track stream callback", d);
    const h = e.addTrack(d, n), _ = { ...h.getParameters(), ...s };
    await h.setParameters(_), console.debug("sender params", h.getParameters());
  }) : (console.debug("Creating transceiver!"), e.addTransceiver(i, { direction: "recvonly" })), await Fg(e, r, a, u), e;
}
function Cg(n, e, t = () => {
}) {
  return new Promise((r, a) => {
    n(e).then((i) => {
      console.debug("data", i), (i == null ? void 0 : i.status) === "failed" && (t(i), console.debug("rejecting"), a("error")), r(i);
    });
  });
}
async function Fg(n, e, t, r = () => {
}) {
  return n.onicecandidate = ({ candidate: a }) => {
    a && (console.debug("Sending ICE candidate", a), e({
      candidate: a.toJSON(),
      webrtc_id: t,
      type: "ice-candidate"
    }).catch((i) => console.error("Error sending ICE candidate:", i)));
  }, n.createOffer().then((a) => n.setLocalDescription(a)).then(() => {
    var a = n.localDescription;
    return Cg(
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
function n0(n) {
  console.debug("Stopping peer connection"), n.getTransceivers && n.getTransceivers().forEach((e) => {
    e.stop && e.stop();
  }), n.getSenders() && n.getSenders().forEach((e) => {
    console.log("sender", e), e.track && e.track.stop && e.track.stop();
  }), setTimeout(() => {
    n.close();
  }, 500);
}
const {
  SvelteComponent: Mg,
  append_hydration: So,
  attr: on,
  check_outros: wm,
  children: sa,
  claim_component: zg,
  claim_element: Cn,
  claim_space: Bg,
  construct_svelte_component: jf,
  create_component: Wf,
  destroy_component: Xf,
  destroy_each: Ig,
  detach: S0,
  element: Fn,
  empty: Yf,
  ensure_array_like: Zf,
  group_outros: ym,
  init: Lg,
  insert_hydration: da,
  mount_component: Kf,
  noop: Wa,
  safe_not_equal: Ng,
  set_style: w0,
  space: Rg,
  src_url_equal: Jf,
  transition_in: Ul,
  transition_out: Vl
} = window.__gradio__svelte__internal, { onDestroy: Og } = window.__gradio__svelte__internal;
function Qf(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r[18] = t, r;
}
function $f(n) {
  let e, t = Zf(Array(3)), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = eh(Qf(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Yf();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Yf();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      da(a, e, i);
    },
    p(a, i) {
      if (i & /*pulse_color, maxPulseScale, pulseIntensity*/
      82) {
        t = Zf(Array(3));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Qf(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = eh(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && S0(e), Ig(r, a);
    }
  };
}
function eh(n) {
  let e;
  return {
    c() {
      e = Fn("div"), this.h();
    },
    l(t) {
      e = Cn(t, "DIV", { class: !0 }), sa(e).forEach(S0), this.h();
    },
    h() {
      on(e, "class", "pulse-ring svelte-126lrgf"), w0(
        e,
        "background",
        /*pulse_color*/
        n[1]
      ), w0(e, "animation-delay", `${/*i*/
      n[18] * 0.4}s`), w0(
        e,
        "--max-scale",
        /*maxPulseScale*/
        n[6]
      ), w0(e, "opacity", 0.5 * /*pulseIntensity*/
      n[4]);
    },
    m(t, r) {
      da(t, e, r);
    },
    p(t, r) {
      r & /*pulse_color*/
      2 && w0(
        e,
        "background",
        /*pulse_color*/
        t[1]
      ), r & /*maxPulseScale*/
      64 && w0(
        e,
        "--max-scale",
        /*maxPulseScale*/
        t[6]
      ), r & /*pulseIntensity*/
      16 && w0(e, "opacity", 0.5 * /*pulseIntensity*/
      t[4]);
    },
    d(t) {
      t && S0(e);
    }
  };
}
function qg(n) {
  let e, t, r;
  var a = (
    /*icon*/
    n[0]
  );
  function i(l, s) {
    return {};
  }
  return a && (t = jf(a, i())), {
    c() {
      e = Fn("div"), t && Wf(t.$$.fragment);
    },
    l(l) {
      e = Cn(l, "DIV", {});
      var s = sa(e);
      t && zg(t.$$.fragment, s), s.forEach(S0);
    },
    m(l, s) {
      da(l, e, s), t && Kf(t, e, null), r = !0;
    },
    p(l, s) {
      if (s & /*icon*/
      1 && a !== (a = /*icon*/
      l[0])) {
        if (t) {
          ym();
          const o = t;
          Vl(o.$$.fragment, 1, 0, () => {
            Xf(o, 1);
          }), wm();
        }
        a ? (t = jf(a, i()), Wf(t.$$.fragment), Ul(t.$$.fragment, 1), Kf(t, e, null)) : t = null;
      }
    },
    i(l) {
      r || (t && Ul(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && Vl(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && S0(e), t && Xf(t);
    }
  };
}
function Pg(n) {
  let e;
  return {
    c() {
      e = Fn("div");
    },
    l(t) {
      e = Cn(t, "DIV", {}), sa(e).forEach(S0);
    },
    m(t, r) {
      da(t, e, r);
    },
    p: Wa,
    i: Wa,
    o: Wa,
    d(t) {
      t && S0(e);
    }
  };
}
function Hg(n) {
  let e, t;
  return {
    c() {
      e = Fn("img"), this.h();
    },
    l(r) {
      e = Cn(r, "IMG", { src: !0, alt: !0, class: !0 }), this.h();
    },
    h() {
      Jf(e.src, t = /*icon*/
      n[0]) || on(e, "src", t), on(e, "alt", "Audio visualization icon"), on(e, "class", "icon-image svelte-126lrgf"), w0(e, "border-radius", `${/*icon_radius*/
      n[2]}%`);
    },
    m(r, a) {
      da(r, e, a);
    },
    p(r, a) {
      a & /*icon*/
      1 && !Jf(e.src, t = /*icon*/
      r[0]) && on(e, "src", t), a & /*icon_radius*/
      4 && w0(e, "border-radius", `${/*icon_radius*/
      r[2]}%`);
    },
    i: Wa,
    o: Wa,
    d(r) {
      r && S0(e);
    }
  };
}
function Ug(n) {
  let e, t, r, a, i, l, s, o = (
    /*pulseIntensity*/
    n[4] > /*pulse_intensity_threshold*/
    n[3] && $f(n)
  );
  const u = [Hg, Pg, qg], c = [];
  function d(h, p) {
    return typeof /*icon*/
    h[0] == "string" ? 0 : (
      /*icon*/
      h[0] === void 0 ? 1 : 2
    );
  }
  return i = d(n), l = c[i] = u[i](n), {
    c() {
      e = Fn("div"), t = Fn("div"), o && o.c(), r = Rg(), a = Fn("div"), l.c(), this.h();
    },
    l(h) {
      e = Cn(h, "DIV", { class: !0 });
      var p = sa(e);
      t = Cn(p, "DIV", { class: !0 });
      var _ = sa(t);
      o && o.l(_), r = Bg(_), a = Cn(_, "DIV", { class: !0 });
      var b = sa(a);
      l.l(b), b.forEach(S0), _.forEach(S0), p.forEach(S0), this.h();
    },
    h() {
      on(a, "class", "gradio-webrtc-pulsing-icon svelte-126lrgf"), w0(a, "transform", `scale(${/*pulseScale*/
      n[5]})`), w0(a, "background", "none"), on(t, "class", "gradio-webrtc-pulsing-icon-container svelte-126lrgf"), on(e, "class", "gradio-webrtc-icon-wrapper svelte-126lrgf");
    },
    m(h, p) {
      da(h, e, p), So(e, t), o && o.m(t, null), So(t, r), So(t, a), c[i].m(a, null), s = !0;
    },
    p(h, [p]) {
      /*pulseIntensity*/
      h[4] > /*pulse_intensity_threshold*/
      h[3] ? o ? o.p(h, p) : (o = $f(h), o.c(), o.m(t, r)) : o && (o.d(1), o = null);
      let _ = i;
      i = d(h), i === _ ? c[i].p(h, p) : (ym(), Vl(c[_], 1, 1, () => {
        c[_] = null;
      }), wm(), l = c[i], l ? l.p(h, p) : (l = c[i] = u[i](h), l.c()), Ul(l, 1), l.m(a, null)), p & /*pulseScale*/
      32 && w0(a, "transform", `scale(${/*pulseScale*/
      h[5]})`);
    },
    i(h) {
      s || (Ul(l), s = !0);
    },
    o(h) {
      Vl(l), s = !1;
    },
    d(h) {
      h && S0(e), o && o.d(), c[i].d();
    }
  };
}
function Vg(n, e, t) {
  let r, { stream_state: a = "closed" } = e, { audio_source_callback: i } = e, { icon: l = void 0 } = e, { icon_button_color: s = "var(--color-accent)" } = e, { pulse_color: o = "var(--color-accent)" } = e, { icon_radius: u = 50 } = e, { pulse_intensity_threshold: c = 0 } = e, d, h, p, _, b = 1, D = 0;
  Og(() => {
    _ && cancelAnimationFrame(_), d && d.close();
  });
  function y() {
    d = new (window.AudioContext || window.webkitAudioContext)(), h = d.createAnalyser(), d.createMediaStreamSource(i()).connect(h), h.fftSize = 64, h.smoothingTimeConstant = 0.8, p = new Uint8Array(h.frequencyBinCount), k();
  }
  function k() {
    h.getByteFrequencyData(p);
    const x = Array.from(p).reduce((E, T) => E + T, 0) / p.length / 255;
    t(5, b = 1 + x * 0.15), t(4, D = x), _ = requestAnimationFrame(k);
  }
  return n.$$set = (w) => {
    "stream_state" in w && t(7, a = w.stream_state), "audio_source_callback" in w && t(8, i = w.audio_source_callback), "icon" in w && t(0, l = w.icon), "icon_button_color" in w && t(9, s = w.icon_button_color), "pulse_color" in w && t(1, o = w.pulse_color), "icon_radius" in w && t(2, u = w.icon_radius), "pulse_intensity_threshold" in w && t(3, c = w.pulse_intensity_threshold);
  }, n.$$.update = () => {
    n.$$.dirty & /*stream_state*/
    128 && a === "open" && y(), n.$$.dirty & /*pulseIntensity*/
    16 && t(6, r = 1 + D * 10);
  }, [
    l,
    o,
    u,
    c,
    D,
    b,
    r,
    a,
    i,
    s
  ];
}
class ui extends Mg {
  constructor(e) {
    super(), Lg(this, e, Vg, Ug, Ng, {
      stream_state: 7,
      audio_source_callback: 8,
      icon: 0,
      icon_button_color: 9,
      pulse_color: 1,
      icon_radius: 2,
      pulse_intensity_threshold: 3
    });
  }
}
const {
  SvelteComponent: Gg,
  action_destroyer: jg,
  add_render_callback: Wg,
  append_hydration: ft,
  attr: Qe,
  binding_callbacks: Xg,
  check_outros: Gl,
  children: Nt,
  claim_component: pn,
  claim_element: Rt,
  claim_space: cr,
  claim_text: ci,
  create_component: gn,
  create_in_transition: Yg,
  destroy_component: _n,
  destroy_each: Zg,
  detach: Te,
  element: Ot,
  empty: jl,
  ensure_array_like: th,
  group_outros: Wl,
  init: Kg,
  insert_hydration: a0,
  listen: Xl,
  mount_component: vn,
  noop: km,
  run_all: Jg,
  safe_not_equal: Qg,
  set_data: fi,
  set_input_value: vu,
  set_style: $g,
  space: fr,
  stop_propagation: e9,
  text: hi,
  toggle_class: il,
  transition_in: bt,
  transition_out: Lt
} = window.__gradio__svelte__internal, { createEventDispatcher: t9, onMount: r9 } = window.__gradio__svelte__internal;
function rh(n, e, t) {
  const r = n.slice();
  return r[44] = e[t], r;
}
function nh(n) {
  let e, t, r;
  return t = new ui({
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
        n[0] || Mn
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
      e = Ot("div"), gn(t.$$.fragment), this.h();
    },
    l(a) {
      e = Rt(a, "DIV", { class: !0 });
      var i = Nt(e);
      pn(t.$$.fragment, i), i.forEach(Te), this.h();
    },
    h() {
      Qe(e, "class", "audio-indicator svelte-1y5s2o2");
    },
    m(a, i) {
      a0(a, e, i), vn(t, e, null), r = !0;
    },
    p(a, i) {
      const l = {};
      i[0] & /*stream_state*/
      4096 && (l.stream_state = /*stream_state*/
      a[12]), i[0] & /*icon*/
      1 && (l.icon = /*icon*/
      a[0] || Mn), i[0] & /*icon_button_color*/
      2 && (l.icon_button_color = /*icon_button_color*/
      a[1]), i[0] & /*pulse_color*/
      8 && (l.pulse_color = /*pulse_color*/
      a[3]), i[0] & /*icon_radius*/
      4 && (l.icon_radius = /*icon_radius*/
      a[2]), t.$set(l);
    },
    i(a) {
      r || (bt(t.$$.fragment, a), r = !0);
    },
    o(a) {
      Lt(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Te(e), _n(t);
    }
  };
}
function n9(n) {
  let e, t, r, a, i, l, s, o, u, c;
  const d = [s9, l9, i9], h = [];
  function p(D, y) {
    return (
      /*stream_state*/
      D[12] === "waiting" ? 0 : (
        /*stream_state*/
        D[12] === "open" ? 1 : 2
      )
    );
  }
  r = p(n), a = h[r] = d[r](n);
  let _ = o9(n), b = (
    /*options_open*/
    n[14] && /*selected_device*/
    n[10] && ah(n)
  );
  return {
    c() {
      e = Ot("div"), t = Ot("button"), a.c(), i = fr(), _ && _.c(), l = fr(), b && b.c(), s = jl(), this.h();
    },
    l(D) {
      e = Rt(D, "DIV", { class: !0 });
      var y = Nt(e);
      t = Rt(y, "BUTTON", { "aria-label": !0, class: !0 });
      var k = Nt(t);
      a.l(k), k.forEach(Te), i = cr(y), _ && _.l(y), y.forEach(Te), l = cr(D), b && b.l(D), s = jl(), this.h();
    },
    h() {
      Qe(t, "aria-label", "start stream"), Qe(t, "class", "svelte-1y5s2o2"), Qe(e, "class", "button-wrap svelte-1y5s2o2");
    },
    m(D, y) {
      a0(D, e, y), ft(e, t), h[r].m(t, null), ft(e, i), _ && _.m(e, null), a0(D, l, y), b && b.m(D, y), a0(D, s, y), o = !0, u || (c = Xl(
        t,
        "click",
        /*start_webrtc*/
        n[17]
      ), u = !0);
    },
    p(D, y) {
      let k = r;
      r = p(D), r === k ? h[r].p(D, y) : (Wl(), Lt(h[k], 1, 1, () => {
        h[k] = null;
      }), Gl(), a = h[r], a ? a.p(D, y) : (a = h[r] = d[r](D), a.c()), bt(a, 1), a.m(t, null)), _.p(D, y), /*options_open*/
      D[14] && /*selected_device*/
      D[10] ? b ? (b.p(D, y), y[0] & /*options_open, selected_device*/
      17408 && bt(b, 1)) : (b = ah(D), b.c(), bt(b, 1), b.m(s.parentNode, s)) : b && (Wl(), Lt(b, 1, 1, () => {
        b = null;
      }), Gl());
    },
    i(D) {
      o || (bt(a), bt(_), bt(b), o = !0);
    },
    o(D) {
      Lt(a), Lt(_), Lt(b), o = !1;
    },
    d(D) {
      D && (Te(e), Te(l), Te(s)), h[r].d(), _ && _.d(), b && b.d(D), u = !1, c();
    }
  };
}
function a9(n) {
  let e, t, r, a;
  return t = new _m({}), t.$on(
    "click",
    /*click_handler*/
    n[33]
  ), {
    c() {
      e = Ot("div"), gn(t.$$.fragment), this.h();
    },
    l(i) {
      e = Rt(i, "DIV", { title: !0, style: !0 });
      var l = Nt(e);
      pn(t.$$.fragment, l), l.forEach(Te), this.h();
    },
    h() {
      Qe(e, "title", "grant webcam access"), $g(e, "height", "100%");
    },
    m(i, l) {
      a0(i, e, l), vn(t, e, null), a = !0;
    },
    p: km,
    i(i) {
      a || (bt(t.$$.fragment, i), i && (r || Wg(() => {
        r = Yg(e, t1, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      Lt(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && Te(e), _n(t);
    }
  };
}
function i9(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].start || /*i18n*/
    n[6]("audio.record")) + ""
  ), l, s;
  return r = new Kl({}), {
    c() {
      e = Ot("div"), t = Ot("div"), gn(r.$$.fragment), a = fr(), l = hi(i), this.h();
    },
    l(o) {
      e = Rt(o, "DIV", { class: !0 });
      var u = Nt(e);
      t = Rt(u, "DIV", { class: !0, title: !0 });
      var c = Nt(t);
      pn(r.$$.fragment, c), c.forEach(Te), a = cr(u), l = ci(u, i), u.forEach(Te), this.h();
    },
    h() {
      Qe(t, "class", "icon color-primary svelte-1y5s2o2"), Qe(t, "title", "start recording"), Qe(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, u) {
      a0(o, e, u), ft(e, t), vn(r, t, null), ft(e, a), ft(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].start || /*i18n*/
      o[6]("audio.record")) + "") && fi(l, i);
    },
    i(o) {
      s || (bt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Lt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && Te(e), _n(r);
    }
  };
}
function l9(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].stop || /*i18n*/
    n[6]("audio.stop")) + ""
  ), l, s;
  return r = new Ed({}), {
    c() {
      e = Ot("div"), t = Ot("div"), gn(r.$$.fragment), a = fr(), l = hi(i), this.h();
    },
    l(o) {
      e = Rt(o, "DIV", { class: !0 });
      var u = Nt(e);
      t = Rt(u, "DIV", { class: !0, title: !0 });
      var c = Nt(t);
      pn(r.$$.fragment, c), c.forEach(Te), a = cr(u), l = ci(u, i), u.forEach(Te), this.h();
    },
    h() {
      Qe(t, "class", "icon color-primary svelte-1y5s2o2"), Qe(t, "title", "stop recording"), Qe(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, u) {
      a0(o, e, u), ft(e, t), vn(r, t, null), ft(e, a), ft(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].stop || /*i18n*/
      o[6]("audio.stop")) + "") && fi(l, i);
    },
    i(o) {
      s || (bt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Lt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && Te(e), _n(r);
    }
  };
}
function s9(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[4].waiting || /*i18n*/
    n[6]("audio.waiting")) + ""
  ), l, s;
  return r = new xu({}), {
    c() {
      e = Ot("div"), t = Ot("div"), gn(r.$$.fragment), a = fr(), l = hi(i), this.h();
    },
    l(o) {
      e = Rt(o, "DIV", { class: !0 });
      var u = Nt(e);
      t = Rt(u, "DIV", { class: !0, title: !0 });
      var c = Nt(t);
      pn(r.$$.fragment, c), c.forEach(Te), a = cr(u), l = ci(u, i), u.forEach(Te), this.h();
    },
    h() {
      Qe(t, "class", "icon color-primary svelte-1y5s2o2"), Qe(t, "title", "spinner"), Qe(e, "class", "icon-with-text svelte-1y5s2o2");
    },
    m(o, u) {
      a0(o, e, u), ft(e, t), vn(r, t, null), ft(e, a), ft(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      80) && i !== (i = /*button_labels*/
      (o[4].waiting || /*i18n*/
      o[6]("audio.waiting")) + "") && fi(l, i);
    },
    i(o) {
      s || (bt(r.$$.fragment, o), s = !0);
    },
    o(o) {
      Lt(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && Te(e), _n(r);
    }
  };
}
function o9(n) {
  let e, t, r, a, i;
  return t = new Jl({}), {
    c() {
      e = Ot("button"), gn(t.$$.fragment), this.h();
    },
    l(l) {
      e = Rt(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = Nt(e);
      pn(t.$$.fragment, s), s.forEach(Te), this.h();
    },
    h() {
      Qe(e, "class", "icon svelte-1y5s2o2"), Qe(e, "aria-label", "select input source");
    },
    m(l, s) {
      a0(l, e, s), vn(t, e, null), r = !0, a || (i = Xl(
        e,
        "click",
        /*click_handler_1*/
        n[34]
      ), a = !0);
    },
    p: km,
    i(l) {
      r || (bt(t.$$.fragment, l), r = !0);
    },
    o(l) {
      Lt(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && Te(e), _n(t), a = !1, i();
    }
  };
}
function ah(n) {
  let e, t, r, a, i, l, s;
  r = new Jl({});
  function o(d, h) {
    return (
      /*available_video_devices*/
      d[9].length === 0 ? c9 : u9
    );
  }
  let u = o(n), c = u(n);
  return {
    c() {
      e = Ot("select"), t = Ot("button"), gn(r.$$.fragment), a = fr(), c.c(), this.h();
    },
    l(d) {
      e = Rt(d, "SELECT", { class: !0, "aria-label": !0 });
      var h = Nt(e);
      t = Rt(h, "BUTTON", { class: !0 });
      var p = Nt(t);
      pn(r.$$.fragment, p), a = cr(p), p.forEach(Te), c.l(h), h.forEach(Te), this.h();
    },
    h() {
      Qe(t, "class", "inset-icon svelte-1y5s2o2"), Qe(e, "class", "select-wrap svelte-1y5s2o2"), Qe(e, "aria-label", "select source");
    },
    m(d, h) {
      a0(d, e, h), ft(e, t), vn(r, t, null), ft(t, a), c.m(e, null), i = !0, l || (s = [
        Xl(t, "click", e9(
          /*click_handler_2*/
          n[35]
        )),
        jg(r1.call(
          null,
          e,
          /*handle_click_outside*/
          n[18]
        )),
        Xl(
          e,
          "change",
          /*handle_device_change*/
          n[15]
        )
      ], l = !0);
    },
    p(d, h) {
      u === (u = o(d)) && c ? c.p(d, h) : (c.d(1), c = u(d), c && (c.c(), c.m(e, null)));
    },
    i(d) {
      i || (bt(r.$$.fragment, d), i = !0);
    },
    o(d) {
      Lt(r.$$.fragment, d), i = !1;
    },
    d(d) {
      d && Te(e), _n(r), c.d(), l = !1, Jg(s);
    }
  };
}
function u9(n) {
  let e, t = th(
    /*available_video_devices*/
    n[9]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = ih(rh(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = jl();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = jl();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      a0(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_video_devices, selected_device*/
      1536) {
        t = th(
          /*available_video_devices*/
          a[9]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = rh(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = ih(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && Te(e), Zg(r, a);
    }
  };
}
function c9(n) {
  let e, t = (
    /*i18n*/
    n[6]("common.no_devices") + ""
  ), r;
  return {
    c() {
      e = Ot("option"), r = hi(t), this.h();
    },
    l(a) {
      e = Rt(a, "OPTION", { class: !0 });
      var i = Nt(e);
      r = ci(i, t), i.forEach(Te), this.h();
    },
    h() {
      e.__value = "", vu(e, e.__value), Qe(e, "class", "svelte-1y5s2o2");
    },
    m(a, i) {
      a0(a, e, i), ft(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      64 && t !== (t = /*i18n*/
      a[6]("common.no_devices") + "") && fi(r, t);
    },
    d(a) {
      a && Te(e);
    }
  };
}
function ih(n) {
  let e, t = (
    /*device*/
    n[44].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = Ot("option"), r = hi(t), a = fr(), this.h();
    },
    l(s) {
      e = Rt(s, "OPTION", { class: !0 });
      var o = Nt(e);
      r = ci(o, t), a = cr(o), o.forEach(Te), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[44].deviceId, vu(e, e.__value), e.selected = l = /*selected_device*/
      n[10].deviceId === /*device*/
      n[44].deviceId, Qe(e, "class", "svelte-1y5s2o2");
    },
    m(s, o) {
      a0(s, e, o), ft(e, r), ft(e, a);
    },
    p(s, o) {
      o[0] & /*available_video_devices*/
      512 && t !== (t = /*device*/
      s[44].label + "") && fi(r, t), o[0] & /*available_video_devices*/
      512 && i !== (i = /*device*/
      s[44].deviceId) && (e.__value = i, vu(e, e.__value)), o[0] & /*selected_device, available_video_devices*/
      1536 && l !== (l = /*selected_device*/
      s[10].deviceId === /*device*/
      s[44].deviceId) && (e.selected = l);
    },
    d(s) {
      s && Te(e);
    }
  };
}
function f9(n) {
  let e, t, r, a, i, l, s, o, u;
  t = new cm({
    props: { time_limit: (
      /*_time_limit*/
      n[11]
    ) }
  });
  let c = (
    /*stream_state*/
    n[12] === "open" && /*include_audio*/
    n[5] && nh(n)
  );
  const d = [a9, n9], h = [];
  function p(_, b) {
    return (
      /*webcam_accessed*/
      _[13] ? 1 : 0
    );
  }
  return s = p(n), o = h[s] = d[s](n), {
    c() {
      e = Ot("div"), gn(t.$$.fragment), r = fr(), c && c.c(), a = fr(), i = Ot("video"), l = fr(), o.c(), this.h();
    },
    l(_) {
      e = Rt(_, "DIV", { class: !0 });
      var b = Nt(e);
      pn(t.$$.fragment, b), r = cr(b), c && c.l(b), a = cr(b), i = Rt(b, "VIDEO", { class: !0 }), Nt(i).forEach(Te), l = cr(b), o.l(b), b.forEach(Te), this.h();
    },
    h() {
      i.autoplay = !0, i.playsInline = !0, Qe(i, "class", "svelte-1y5s2o2"), il(i, "hide", !/*webcam_accessed*/
      n[13]), il(
        i,
        "flip",
        /*stream_state*/
        n[12] != "open" || /*stream_state*/
        n[12] === "open" && /*include_audio*/
        n[5]
      ), Qe(e, "class", "wrap svelte-1y5s2o2");
    },
    m(_, b) {
      a0(_, e, b), vn(t, e, null), ft(e, r), c && c.m(e, null), ft(e, a), ft(e, i), n[32](i), ft(e, l), h[s].m(e, null), u = !0;
    },
    p(_, b) {
      const D = {};
      b[0] & /*_time_limit*/
      2048 && (D.time_limit = /*_time_limit*/
      _[11]), t.$set(D), /*stream_state*/
      _[12] === "open" && /*include_audio*/
      _[5] ? c ? (c.p(_, b), b[0] & /*stream_state, include_audio*/
      4128 && bt(c, 1)) : (c = nh(_), c.c(), bt(c, 1), c.m(e, a)) : c && (Wl(), Lt(c, 1, 1, () => {
        c = null;
      }), Gl()), (!u || b[0] & /*webcam_accessed*/
      8192) && il(i, "hide", !/*webcam_accessed*/
      _[13]), (!u || b[0] & /*stream_state, include_audio*/
      4128) && il(
        i,
        "flip",
        /*stream_state*/
        _[12] != "open" || /*stream_state*/
        _[12] === "open" && /*include_audio*/
        _[5]
      );
      let y = s;
      s = p(_), s === y ? h[s].p(_, b) : (Wl(), Lt(h[y], 1, 1, () => {
        h[y] = null;
      }), Gl(), o = h[s], o ? o.p(_, b) : (o = h[s] = d[s](_), o.c()), bt(o, 1), o.m(e, null));
    },
    i(_) {
      u || (bt(t.$$.fragment, _), bt(c), bt(o), u = !0);
    },
    o(_) {
      Lt(t.$$.fragment, _), Lt(c), Lt(o), u = !1;
    },
    d(_) {
      _ && Te(e), _n(t), c && c.d(), n[32](null), h[s].d();
    }
  };
}
function r1(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function h9(n, e, t) {
  var r = this && this.__awaiter || function(V, Ae, ke, xe) {
    function $e(je) {
      return je instanceof ke ? je : new ke(function(Ne) {
        Ne(je);
      });
    }
    return new (ke || (ke = Promise))(function(je, Ne) {
      function et(We) {
        try {
          ot(xe.next(We));
        } catch (dt) {
          Ne(dt);
        }
      }
      function yt(We) {
        try {
          ot(xe.throw(We));
        } catch (dt) {
          Ne(dt);
        }
      }
      function ot(We) {
        We.done ? je(We.value) : $e(We.value).then(et, yt);
      }
      ot((xe = xe.apply(V, Ae || [])).next());
    });
  };
  let a, i = [], l = null, s = null, { time_limit: o = null } = e, u = "closed", { on_change_cb: c } = e, { reject_cb: d } = e, { mode: h } = e;
  Math.random().toString(36).substring(2);
  let { rtp_params: p = {} } = e, { icon: _ = void 0 } = e, { icon_button_color: b = "var(--color-accent)" } = e, { icon_radius: D = 50 } = e, { pulse_color: y = "var(--color-accent)" } = e, { button_labels: k } = e, { connection_state: w = "unset" } = e;
  const x = (V) => {
    V === "closed" ? (t(11, s = null), t(12, u = "closed")) : V === "waiting" ? t(12, u = "waiting") : t(12, u = "open");
  };
  let { track_constraints: E = null } = e, { rtc_configuration: T } = e, { stream_every: C = 1 } = e, { server: F } = e, { include_audio: I } = e, { i18n: L } = e;
  const B = t9();
  r9(() => document.createElement("canvas"));
  const q = (V) => r(void 0, void 0, void 0, function* () {
    const ke = V.target.value;
    yield Gf(I, a, ke, E).then((xe) => r(void 0, void 0, void 0, function* () {
      O = xe, t(10, l = i.find(($e) => $e.deviceId === ke) || null), t(14, $ = !1);
    }));
  });
  function J() {
    return r(this, void 0, void 0, function* () {
      try {
        Gf(I, a, null, E).then((V) => r(this, void 0, void 0, function* () {
          t(13, te = !0), t(9, i = yield vm()), O = V;
        })).then(() => bm(i)).then((V) => {
          t(9, i = V);
          const Ae = O.getTracks().map((ke) => {
            var xe;
            return (xe = ke.getSettings()) === null || xe === void 0 ? void 0 : xe.deviceId;
          })[0];
          t(10, l = Ae && V.find((ke) => ke.deviceId === Ae) || i[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && B("error", L("image.no_webcam_support"));
      } catch (V) {
        if (V instanceof DOMException && V.name == "NotAllowedError")
          B("error", L("image.allow_webcam_access"));
        else
          throw V;
      }
    });
  }
  let Y = (V) => {
    V.type === "end_stream" ? (c(V), t(12, u = "closed"), n0(ie), J()) : (console.debug("calling on_change_cb with msg", V), c(V));
  }, O, te = !1, ie, { webrtc_id: oe } = e;
  function ye() {
    return r(this, void 0, void 0, function* () {
      if (u === "closed") {
        B("start_recording"), yield F.turn().then((Ae) => {
          if (Ae.error) {
            B("error", Ae.error);
            return;
          }
          t(20, T = Ae), console.info("rtc_configuration", Ae);
        }), ie = new RTCPeerConnection(T), ie.addEventListener("connectionstatechange", (Ae) => r(this, void 0, void 0, function* () {
          switch (ie.connectionState) {
            case "connected":
              t(12, u = "open"), t(11, s = o), B("tick");
              break;
            case "disconnected":
              t(12, u = "closed"), t(11, s = null), n0(ie), yield J();
              break;
            case "failed":
              t(12, u = "closed"), t(11, s = null), B("error", "Connection failed!"), n0(ie);
              break;
          }
        })), t(12, u = "waiting"), t(21, oe = Math.random().toString(36).substring(2));
        const V = setTimeout(
          () => {
            c({ type: "connection_timeout" });
          },
          1e4
        );
        cs(O, ie, h === "send" ? null : a, F.offer, oe, "video", Y, p, void 0, d).then((Ae) => {
          clearTimeout(V), ie = Ae;
        }).catch(() => {
          clearTimeout(V), console.info("catching"), t(12, u = "closed");
        });
      } else
        B("stop_recording"), n0(ie), t(12, u = "closed"), t(11, s = null), yield J();
    });
  }
  function we(V) {
    return r(this, void 0, void 0, function* () {
      V === "open" && te && u === "closed" ? (yield ye(), V = "unset") : V === "closed" && te && u === "open" && (yield ye(), V = "unset");
    });
  }
  let $ = !1;
  function fe(V) {
    V.preventDefault(), V.stopPropagation(), t(14, $ = !1);
  }
  const ve = () => a.srcObject;
  function Oe(V) {
    Xg[V ? "unshift" : "push"](() => {
      a = V, t(8, a);
    });
  }
  const P = async () => J(), Fe = () => t(14, $ = !0), Ce = () => t(14, $ = !1);
  return n.$$set = (V) => {
    "time_limit" in V && t(22, o = V.time_limit), "on_change_cb" in V && t(23, c = V.on_change_cb), "reject_cb" in V && t(24, d = V.reject_cb), "mode" in V && t(25, h = V.mode), "rtp_params" in V && t(26, p = V.rtp_params), "icon" in V && t(0, _ = V.icon), "icon_button_color" in V && t(1, b = V.icon_button_color), "icon_radius" in V && t(2, D = V.icon_radius), "pulse_color" in V && t(3, y = V.pulse_color), "button_labels" in V && t(4, k = V.button_labels), "connection_state" in V && t(27, w = V.connection_state), "track_constraints" in V && t(29, E = V.track_constraints), "rtc_configuration" in V && t(20, T = V.rtc_configuration), "stream_every" in V && t(30, C = V.stream_every), "server" in V && t(31, F = V.server), "include_audio" in V && t(5, I = V.include_audio), "i18n" in V && t(6, L = V.i18n), "webrtc_id" in V && t(21, oe = V.webrtc_id);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*connection_state*/
    134217728 && we(w);
  }, [
    _,
    b,
    D,
    y,
    k,
    I,
    L,
    r1,
    a,
    i,
    l,
    s,
    u,
    te,
    $,
    q,
    J,
    ye,
    fe,
    ve,
    T,
    oe,
    o,
    c,
    d,
    h,
    p,
    w,
    x,
    E,
    C,
    F,
    Oe,
    P,
    Fe,
    Ce
  ];
}
class d9 extends Gg {
  constructor(e) {
    super(), Kg(
      this,
      e,
      h9,
      f9,
      Qg,
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
        connection_state: 27,
        modify_stream: 28,
        track_constraints: 29,
        rtc_configuration: 20,
        stream_every: 30,
        server: 31,
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
    return this.$$.ctx[28];
  }
  get click_outside() {
    return r1;
  }
}
const {
  SvelteComponent: m9,
  add_flush_callback: p9,
  attr: lh,
  bind: g9,
  binding_callbacks: _9,
  bubble: ll,
  children: v9,
  claim_component: sh,
  claim_element: b9,
  claim_space: w9,
  create_component: oh,
  destroy_component: uh,
  detach: xo,
  element: y9,
  init: k9,
  insert_hydration: ch,
  mount_component: fh,
  safe_not_equal: D9,
  space: A9,
  transition_in: hh,
  transition_out: dh
} = window.__gradio__svelte__internal, { createEventDispatcher: E9 } = window.__gradio__svelte__internal;
function S9(n) {
  let e, t, r, a, i, l;
  e = new ss({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Su,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  function s(u) {
    n[22](u);
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
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (o.webrtc_id = /*value*/
    n[0]), a = new d9({ props: o }), _9.push(() => g9(a, "webrtc_id", s)), a.$on(
      "error",
      /*error_handler*/
      n[23]
    ), a.$on(
      "start_recording",
      /*start_recording_handler*/
      n[24]
    ), a.$on(
      "stop_recording",
      /*stop_recording_handler*/
      n[25]
    ), a.$on(
      "tick",
      /*tick_handler*/
      n[26]
    ), {
      c() {
        oh(e.$$.fragment), t = A9(), r = y9("div"), oh(a.$$.fragment), this.h();
      },
      l(u) {
        sh(e.$$.fragment, u), t = w9(u), r = b9(u, "DIV", { "data-testid": !0, class: !0 });
        var c = v9(r);
        sh(a.$$.fragment, c), c.forEach(xo), this.h();
      },
      h() {
        lh(r, "data-testid", "video"), lh(r, "class", "video-container svelte-dn5v7y");
      },
      m(u, c) {
        fh(e, u, c), ch(u, t, c), ch(u, r, c), fh(a, r, null), l = !0;
      },
      p(u, [c]) {
        const d = {};
        c & /*show_label*/
        4 && (d.show_label = /*show_label*/
        u[2]), c & /*label*/
        2 && (d.label = /*label*/
        u[1] || "Video"), e.$set(d);
        const h = {};
        c & /*rtc_configuration*/
        256 && (h.rtc_configuration = /*rtc_configuration*/
        u[8]), c & /*include_audio*/
        8 && (h.include_audio = /*include_audio*/
        u[3]), c & /*time_limit*/
        32 && (h.time_limit = /*time_limit*/
        u[5]), c & /*track_constraints*/
        512 && (h.track_constraints = /*track_constraints*/
        u[9]), c & /*mode*/
        1024 && (h.mode = /*mode*/
        u[10]), c & /*rtp_params*/
        8192 && (h.rtp_params = /*rtp_params*/
        u[13]), c & /*on_change_cb*/
        2048 && (h.on_change_cb = /*on_change_cb*/
        u[11]), c & /*icon*/
        16384 && (h.icon = /*icon*/
        u[14]), c & /*icon_button_color*/
        32768 && (h.icon_button_color = /*icon_button_color*/
        u[15]), c & /*pulse_color*/
        65536 && (h.pulse_color = /*pulse_color*/
        u[16]), c & /*icon_radius*/
        131072 && (h.icon_radius = /*icon_radius*/
        u[17]), c & /*button_labels*/
        64 && (h.button_labels = /*button_labels*/
        u[6]), c & /*i18n*/
        16 && (h.i18n = /*i18n*/
        u[4]), c & /*server*/
        128 && (h.server = /*server*/
        u[7]), c & /*reject_cb*/
        4096 && (h.reject_cb = /*reject_cb*/
        u[12]), c & /*connection_state*/
        262144 && (h.connection_state = /*connection_state*/
        u[18]), !i && c & /*value*/
        1 && (i = !0, h.webrtc_id = /*value*/
        u[0], p9(() => i = !1)), a.$set(h);
      },
      i(u) {
        l || (hh(e.$$.fragment, u), hh(a.$$.fragment, u), l = !0);
      },
      o(u) {
        dh(e.$$.fragment, u), dh(a.$$.fragment, u), l = !1;
      },
      d(u) {
        u && (xo(t), xo(r)), uh(e, u), uh(a);
      }
    }
  );
}
let x9 = !1;
function T9(n, e, t) {
  let { value: r = null } = e, { label: a = void 0 } = e, { show_label: i = !0 } = e, { include_audio: l } = e, { i18n: s } = e, { active_source: o = "webcam" } = e, { handle_reset_value: u = () => {
  } } = e, { stream_handler: c } = e, { time_limit: d = null } = e, { button_labels: h } = e, { server: p } = e, { rtc_configuration: _ } = e, { track_constraints: b = {} } = e, { mode: D } = e, { on_change_cb: y } = e, { reject_cb: k } = e, { rtp_params: w = {} } = e, { icon: x = void 0 } = e, { icon_button_color: E = "var(--color-accent)" } = e, { pulse_color: T = "var(--color-accent)" } = e, { icon_radius: C = 50 } = e, { connection_state: F = "unset" } = e;
  const I = E9();
  function L(O) {
    r = O, t(0, r);
  }
  function B(O) {
    ll.call(this, n, O);
  }
  function q(O) {
    ll.call(this, n, O);
  }
  function J(O) {
    ll.call(this, n, O);
  }
  function Y(O) {
    ll.call(this, n, O);
  }
  return n.$$set = (O) => {
    "value" in O && t(0, r = O.value), "label" in O && t(1, a = O.label), "show_label" in O && t(2, i = O.show_label), "include_audio" in O && t(3, l = O.include_audio), "i18n" in O && t(4, s = O.i18n), "active_source" in O && t(19, o = O.active_source), "handle_reset_value" in O && t(20, u = O.handle_reset_value), "stream_handler" in O && t(21, c = O.stream_handler), "time_limit" in O && t(5, d = O.time_limit), "button_labels" in O && t(6, h = O.button_labels), "server" in O && t(7, p = O.server), "rtc_configuration" in O && t(8, _ = O.rtc_configuration), "track_constraints" in O && t(9, b = O.track_constraints), "mode" in O && t(10, D = O.mode), "on_change_cb" in O && t(11, y = O.on_change_cb), "reject_cb" in O && t(12, k = O.reject_cb), "rtp_params" in O && t(13, w = O.rtp_params), "icon" in O && t(14, x = O.icon), "icon_button_color" in O && t(15, E = O.icon_button_color), "pulse_color" in O && t(16, T = O.pulse_color), "icon_radius" in O && t(17, C = O.icon_radius), "connection_state" in O && t(18, F = O.connection_state);
  }, I("drag", x9), [
    r,
    a,
    i,
    l,
    s,
    d,
    h,
    p,
    _,
    b,
    D,
    y,
    k,
    w,
    x,
    E,
    T,
    C,
    F,
    o,
    u,
    c,
    L,
    B,
    q,
    J,
    Y
  ];
}
class C9 extends m9 {
  constructor(e) {
    super(), k9(this, e, T9, S9, D9, {
      value: 0,
      label: 1,
      show_label: 2,
      include_audio: 3,
      i18n: 4,
      active_source: 19,
      handle_reset_value: 20,
      stream_handler: 21,
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
      connection_state: 18
    });
  }
}
var mh;
(function(n) {
  n.LOAD = "LOAD", n.EXEC = "EXEC", n.WRITE_FILE = "WRITE_FILE", n.READ_FILE = "READ_FILE", n.DELETE_FILE = "DELETE_FILE", n.RENAME = "RENAME", n.CREATE_DIR = "CREATE_DIR", n.LIST_DIR = "LIST_DIR", n.DELETE_DIR = "DELETE_DIR", n.ERROR = "ERROR", n.DOWNLOAD = "DOWNLOAD", n.PROGRESS = "PROGRESS", n.LOG = "LOG", n.MOUNT = "MOUNT", n.UNMOUNT = "UNMOUNT";
})(mh || (mh = {}));
const iy = (n) => {
  let e = ["B", "KB", "MB", "GB", "PB"], t = 0;
  for (; n > 1024; )
    n /= 1024, t++;
  let r = e[t];
  return n.toFixed(1) + " " + r;
}, ly = () => !0;
function sy(n, { autoplay: e }) {
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
  SvelteComponent: F9,
  append_hydration: M9,
  attr: To,
  binding_callbacks: z9,
  children: ph,
  claim_element: gh,
  claim_text: oy,
  detach: Xa,
  element: _h,
  empty: Yl,
  init: B9,
  insert_hydration: n1,
  is_function: vh,
  listen: Co,
  noop: bh,
  run_all: I9,
  safe_not_equal: L9,
  set_data: uy,
  src_url_equal: wh,
  text: cy,
  toggle_class: Xn
} = window.__gradio__svelte__internal;
function yh(n) {
  let e;
  function t(i, l) {
    return N9;
  }
  let a = t()(n);
  return {
    c() {
      a.c(), e = Yl();
    },
    l(i) {
      a.l(i), e = Yl();
    },
    m(i, l) {
      a.m(i, l), n1(i, e, l);
    },
    p(i, l) {
      a.p(i, l);
    },
    d(i) {
      i && Xa(e), a.d(i);
    }
  };
}
function N9(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = _h("div"), t = _h("video"), this.h();
    },
    l(l) {
      e = gh(l, "DIV", { class: !0 });
      var s = ph(e);
      t = gh(s, "VIDEO", { src: !0 }), ph(t).forEach(Xa), s.forEach(Xa), this.h();
    },
    h() {
      var l;
      wh(t.src, r = /*value*/
      (l = n[2]) == null ? void 0 : l.video.url) || To(t, "src", r), To(e, "class", "container svelte-1uoo7dd"), Xn(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), Xn(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), Xn(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(l, s) {
      n1(l, e, s), M9(e, t), n[6](t), a || (i = [
        Co(
          t,
          "loadeddata",
          /*init*/
          n[4]
        ),
        Co(t, "mouseover", function() {
          vh(
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
        Co(t, "mouseout", function() {
          vh(
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
      4 && !wh(t.src, r = /*value*/
      (o = n[2]) == null ? void 0 : o.video.url) && To(t, "src", r), s & /*type*/
      1 && Xn(
        e,
        "table",
        /*type*/
        n[0] === "table"
      ), s & /*type*/
      1 && Xn(
        e,
        "gallery",
        /*type*/
        n[0] === "gallery"
      ), s & /*selected*/
      2 && Xn(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    d(l) {
      l && Xa(e), n[6](null), a = !1, I9(i);
    }
  };
}
function R9(n) {
  let e, t = (
    /*value*/
    n[2] && yh(n)
  );
  return {
    c() {
      t && t.c(), e = Yl();
    },
    l(r) {
      t && t.l(r), e = Yl();
    },
    m(r, a) {
      t && t.m(r, a), n1(r, e, a);
    },
    p(r, [a]) {
      /*value*/
      r[2] ? t ? t.p(r, a) : (t = yh(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: bh,
    o: bh,
    d(r) {
      r && Xa(e), t && t.d(r);
    }
  };
}
function O9(n, e, t) {
  var r = this && this.__awaiter || function(d, h, p, _) {
    function b(D) {
      return D instanceof p ? D : new p(function(y) {
        y(D);
      });
    }
    return new (p || (p = Promise))(function(D, y) {
      function k(E) {
        try {
          x(_.next(E));
        } catch (T) {
          y(T);
        }
      }
      function w(E) {
        try {
          x(_.throw(E));
        } catch (T) {
          y(T);
        }
      }
      function x(E) {
        E.done ? D(E.value) : b(E.value).then(k, w);
      }
      x((_ = _.apply(d, h || [])).next());
    });
  };
  let { type: a } = e, { selected: i = !1 } = e, { value: l } = e, { loop: s } = e, o;
  function u() {
    return r(this, void 0, void 0, function* () {
      t(3, o.muted = !0, o), t(3, o.playsInline = !0, o), t(3, o.controls = !1, o), o.setAttribute("muted", ""), yield o.play(), o.pause();
    });
  }
  function c(d) {
    z9[d ? "unshift" : "push"](() => {
      o = d, t(3, o);
    });
  }
  return n.$$set = (d) => {
    "type" in d && t(0, a = d.type), "selected" in d && t(1, i = d.selected), "value" in d && t(2, l = d.value), "loop" in d && t(5, s = d.loop);
  }, [a, i, l, o, u, s, c];
}
class fy extends F9 {
  constructor(e) {
    super(), B9(this, e, O9, R9, L9, { type: 0, selected: 1, value: 2, loop: 5 });
  }
}
const {
  SvelteComponent: q9,
  append_hydration: kh,
  assign: Dh,
  attr: Yn,
  binding_callbacks: P9,
  bubble: H9,
  check_outros: U9,
  children: Ah,
  claim_component: a1,
  claim_element: Fo,
  claim_space: Eh,
  create_component: i1,
  destroy_component: l1,
  detach: Ba,
  element: Mo,
  exclude_internal_props: Sh,
  group_outros: V9,
  init: G9,
  insert_hydration: zo,
  listen: J0,
  mount_component: s1,
  run_all: j9,
  safe_not_equal: W9,
  space: xh,
  toggle_class: Th,
  transition_in: na,
  transition_out: Ya
} = window.__gradio__svelte__internal, { createEventDispatcher: X9 } = window.__gradio__svelte__internal;
function Ch(n) {
  let e, t;
  return e = new hm({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Y9] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      i1(e.$$.fragment);
    },
    l(r) {
      a1(e.$$.fragment, r);
    },
    m(r, a) {
      s1(e, r, a), t = !0;
    },
    i(r) {
      t || (na(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ya(e.$$.fragment, r), t = !1;
    },
    d(r) {
      l1(e, r);
    }
  };
}
function Y9(n) {
  let e, t;
  return e = new Su({}), {
    c() {
      i1(e.$$.fragment);
    },
    l(r) {
      a1(e.$$.fragment, r);
    },
    m(r, a) {
      s1(e, r, a), t = !0;
    },
    i(r) {
      t || (na(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Ya(e.$$.fragment, r), t = !1;
    },
    d(r) {
      l1(e, r);
    }
  };
}
function Z9(n) {
  let e, t, r, a, i, l, s, o, u, c;
  e = new ss({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Su,
      label: (
        /*label*/
        n[1] || "Video"
      )
    }
  });
  let d = (
    /*value*/
    n[0] === "__webrtc_value__" && Ch(n)
  );
  return {
    c() {
      i1(e.$$.fragment), t = xh(), d && d.c(), r = xh(), a = Mo("div"), i = Mo("video"), l = Mo("track"), this.h();
    },
    l(h) {
      a1(e.$$.fragment, h), t = Eh(h), d && d.l(h), r = Eh(h), a = Fo(h, "DIV", { class: !0 });
      var p = Ah(a);
      i = Fo(p, "VIDEO", {
        "data-testid": !0,
        crossorigin: !0,
        class: !0
      });
      var _ = Ah(i);
      l = Fo(_, "TRACK", { kind: !0 }), _.forEach(Ba), p.forEach(Ba), this.h();
    },
    h() {
      Yn(l, "kind", "captions"), i.autoplay = !0, Yn(i, "data-testid", s = /*$$props*/
      n[5]["data-testid"]), Yn(i, "crossorigin", "anonymous"), Yn(i, "class", "svelte-1yzqfy6"), Th(
        i,
        "hidden",
        /*value*/
        n[0] === "__webrtc_value__"
      ), Yn(a, "class", "wrap svelte-1yzqfy6");
    },
    m(h, p) {
      s1(e, h, p), zo(h, t, p), d && d.m(h, p), zo(h, r, p), zo(h, a, p), kh(a, i), kh(i, l), n[12](i), o = !0, u || (c = [
        J0(
          i,
          "loadeddata",
          /*dispatch*/
          n[4].bind(null, "loadeddata")
        ),
        J0(
          i,
          "click",
          /*dispatch*/
          n[4].bind(null, "click")
        ),
        J0(
          i,
          "play",
          /*dispatch*/
          n[4].bind(null, "play")
        ),
        J0(
          i,
          "pause",
          /*dispatch*/
          n[4].bind(null, "pause")
        ),
        J0(
          i,
          "ended",
          /*dispatch*/
          n[4].bind(null, "ended")
        ),
        J0(
          i,
          "mouseover",
          /*dispatch*/
          n[4].bind(null, "mouseover")
        ),
        J0(
          i,
          "mouseout",
          /*dispatch*/
          n[4].bind(null, "mouseout")
        ),
        J0(
          i,
          "focus",
          /*dispatch*/
          n[4].bind(null, "focus")
        ),
        J0(
          i,
          "blur",
          /*dispatch*/
          n[4].bind(null, "blur")
        ),
        J0(
          i,
          "load",
          /*load_handler*/
          n[11]
        )
      ], u = !0);
    },
    p(h, [p]) {
      const _ = {};
      p & /*show_label*/
      4 && (_.show_label = /*show_label*/
      h[2]), p & /*label*/
      2 && (_.label = /*label*/
      h[1] || "Video"), e.$set(_), /*value*/
      h[0] === "__webrtc_value__" ? d ? p & /*value*/
      1 && na(d, 1) : (d = Ch(h), d.c(), na(d, 1), d.m(r.parentNode, r)) : d && (V9(), Ya(d, 1, 1, () => {
        d = null;
      }), U9()), (!o || p & /*$$props*/
      32 && s !== (s = /*$$props*/
      h[5]["data-testid"])) && Yn(i, "data-testid", s), (!o || p & /*value*/
      1) && Th(
        i,
        "hidden",
        /*value*/
        h[0] === "__webrtc_value__"
      );
    },
    i(h) {
      o || (na(e.$$.fragment, h), na(d), o = !0);
    },
    o(h) {
      Ya(e.$$.fragment, h), Ya(d), o = !1;
    },
    d(h) {
      h && (Ba(t), Ba(r), Ba(a)), l1(e, h), d && d.d(h), n[12](null), u = !1, j9(c);
    }
  };
}
function K9(n, e, t) {
  var r = this && this.__awaiter || function(y, k, w, x) {
    function E(T) {
      return T instanceof w ? T : new w(function(C) {
        C(T);
      });
    }
    return new (w || (w = Promise))(function(T, C) {
      function F(B) {
        try {
          L(x.next(B));
        } catch (q) {
          C(q);
        }
      }
      function I(B) {
        try {
          L(x.throw(B));
        } catch (q) {
          C(q);
        }
      }
      function L(B) {
        B.done ? T(B.value) : E(B.value).then(F, I);
      }
      L((x = x.apply(y, k || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { on_change_cb: o } = e, { server: u } = e, c, d = Math.random().toString(36).substring(2), h;
  const p = X9();
  let _ = (y) => {
    y.type === "end_stream" ? (o(y), n0(h)) : (console.debug("calling on_change_cb with msg", y), o(y));
  };
  function b(y) {
    H9.call(this, n, y);
  }
  function D(y) {
    P9[y ? "unshift" : "push"](() => {
      c = y, t(3, c);
    });
  }
  return n.$$set = (y) => {
    t(5, e = Dh(Dh({}, e), Sh(y))), "value" in y && t(0, a = y.value), "label" in y && t(1, i = y.label), "show_label" in y && t(2, l = y.show_label), "rtc_configuration" in y && t(6, s = y.rtc_configuration), "on_change_cb" in y && t(7, o = y.on_change_cb), "server" in y && t(8, u = y.server);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*value, server, _webrtc_id, rtc_configuration, pc, on_change_cb, video_element*/
    1993 && a === "start_webrtc_stream") {
      t(9, d = Math.random().toString(36).substring(2)), u.turn().then((k) => {
        t(6, s = k);
      }).catch((k) => {
        p("error", k);
      }), t(0, a = d), t(10, h = new RTCPeerConnection(s)), h.addEventListener("connectionstatechange", (k) => r(void 0, void 0, void 0, function* () {
        switch (h.connectionState) {
          case "connected":
            p("tick");
            break;
          case "disconnected":
            n0(h);
            break;
          case "failed":
            p("error", "Connection failed!"), n0(h);
            break;
        }
      }));
      const y = setTimeout(
        () => {
          o({ type: "connection_timeout" });
        },
        1e4
      );
      cs(null, h, c, u.offer, d, "video", _).then((k) => {
        clearTimeout(y), t(10, h = k);
      }).catch(() => {
        clearTimeout(y), p("error", "Too many concurrent users. Come back later!");
      });
    }
  }, e = Sh(e), [
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
    h,
    b,
    D
  ];
}
class J9 extends q9 {
  constructor(e) {
    super(), G9(this, e, K9, Z9, W9, {
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
  SvelteComponent: Q9,
  append_hydration: ea,
  attr: Ar,
  check_outros: $9,
  children: Er,
  claim_component: e_,
  claim_element: Sr,
  claim_space: Fh,
  create_component: t_,
  destroy_component: r_,
  destroy_each: n_,
  detach: r0,
  element: xr,
  ensure_array_like: Mh,
  group_outros: a_,
  init: i_,
  insert_hydration: di,
  mount_component: l_,
  noop: ni,
  safe_not_equal: s_,
  set_style: y0,
  space: zh,
  transition_in: bu,
  transition_out: wu
} = window.__gradio__svelte__internal, { onDestroy: o_ } = window.__gradio__svelte__internal;
function Bh(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r;
}
function u_(n) {
  let e, t = Mh(Array(
    /*numBars*/
    n[0]
  )), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Ih(Bh(n, t, a));
  return {
    c() {
      e = xr("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      this.h();
    },
    l(a) {
      e = Sr(a, "DIV", { class: !0 });
      var i = Er(e);
      for (let l = 0; l < r.length; l += 1)
        r[l].l(i);
      i.forEach(r0), this.h();
    },
    h() {
      Ar(e, "class", "gradio-webrtc-boxContainer svelte-1x8be7j"), y0(
        e,
        "width",
        /*containerWidth*/
        n[9]
      );
    },
    m(a, i) {
      di(a, e, i);
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(e, null);
    },
    p(a, i) {
      if (i & /*numBars*/
      1) {
        t = Mh(Array(
          /*numBars*/
          a[0]
        ));
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Bh(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Ih(), r[l].c(), r[l].m(e, null));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
      i & /*containerWidth*/
      512 && y0(
        e,
        "width",
        /*containerWidth*/
        a[9]
      );
    },
    i: ni,
    o: ni,
    d(a) {
      a && r0(e), n_(r, a);
    }
  };
}
function c_(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = xr("div"), t = xr("div"), r = zh(), a = xr("div"), i = zh(), l = xr("div"), this.h();
    },
    l(s) {
      e = Sr(s, "DIV", { class: !0 });
      var o = Er(e);
      t = Sr(o, "DIV", { class: !0 }), Er(t).forEach(r0), r = Fh(o), a = Sr(o, "DIV", { class: !0 }), Er(a).forEach(r0), i = Fh(o), l = Sr(o, "DIV", { class: !0 }), Er(l).forEach(r0), o.forEach(r0), this.h();
    },
    h() {
      Ar(t, "class", "dot svelte-1x8be7j"), y0(
        t,
        "background-color",
        /*pulse_color*/
        n[5]
      ), Ar(a, "class", "dot svelte-1x8be7j"), y0(
        a,
        "background-color",
        /*pulse_color*/
        n[5]
      ), Ar(l, "class", "dot svelte-1x8be7j"), y0(
        l,
        "background-color",
        /*pulse_color*/
        n[5]
      ), Ar(e, "class", "dots svelte-1x8be7j");
    },
    m(s, o) {
      di(s, e, o), ea(e, t), ea(e, r), ea(e, a), ea(e, i), ea(e, l);
    },
    p(s, o) {
      o & /*pulse_color*/
      32 && y0(
        t,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && y0(
        a,
        "background-color",
        /*pulse_color*/
        s[5]
      ), o & /*pulse_color*/
      32 && y0(
        l,
        "background-color",
        /*pulse_color*/
        s[5]
      );
    },
    i: ni,
    o: ni,
    d(s) {
      s && r0(e);
    }
  };
}
function f_(n) {
  let e, t, r, a;
  return r = new ui({
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
      e = xr("div"), t = xr("div"), t_(r.$$.fragment), this.h();
    },
    l(i) {
      e = Sr(i, "DIV", { class: !0 });
      var l = Er(e);
      t = Sr(l, "DIV", { class: !0 });
      var s = Er(t);
      e_(r.$$.fragment, s), s.forEach(r0), l.forEach(r0), this.h();
    },
    h() {
      Ar(t, "class", "gradio-webrtc-icon svelte-1x8be7j"), y0(t, "transform", `scale(${/*pulseScale*/
      n[8]})`), y0(
        t,
        "background",
        /*icon_button_color*/
        n[4]
      ), Ar(e, "class", "gradio-webrtc-icon-container svelte-1x8be7j");
    },
    m(i, l) {
      di(i, e, l), ea(e, t), l_(r, t, null), a = !0;
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
      256 && y0(t, "transform", `scale(${/*pulseScale*/
      i[8]})`), l & /*icon_button_color*/
      16 && y0(
        t,
        "background",
        /*icon_button_color*/
        i[4]
      );
    },
    i(i) {
      a || (bu(r.$$.fragment, i), a = !0);
    },
    o(i) {
      wu(r.$$.fragment, i), a = !1;
    },
    d(i) {
      i && r0(e), r_(r);
    }
  };
}
function Ih(n) {
  let e;
  return {
    c() {
      e = xr("div"), this.h();
    },
    l(t) {
      e = Sr(t, "DIV", { class: !0 }), Er(e).forEach(r0), this.h();
    },
    h() {
      Ar(e, "class", "gradio-webrtc-box svelte-1x8be7j");
    },
    m(t, r) {
      di(t, e, r);
    },
    p: ni,
    d(t) {
      t && r0(e);
    }
  };
}
function h_(n) {
  let e, t, r, a;
  const i = [f_, c_, u_], l = [];
  function s(o, u) {
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
      e = xr("div"), r.c(), this.h();
    },
    l(o) {
      e = Sr(o, "DIV", { class: !0 });
      var u = Er(e);
      r.l(u), u.forEach(r0), this.h();
    },
    h() {
      Ar(e, "class", "gradio-webrtc-waveContainer svelte-1x8be7j");
    },
    m(o, u) {
      di(o, e, u), l[t].m(e, null), a = !0;
    },
    p(o, [u]) {
      let c = t;
      t = s(o), t === c ? l[t].p(o, u) : (a_(), wu(l[c], 1, 1, () => {
        l[c] = null;
      }), $9(), r = l[t], r ? r.p(o, u) : (r = l[t] = i[t](o), r.c()), bu(r, 1), r.m(e, null));
    },
    i(o) {
      a || (bu(r), a = !0);
    },
    o(o) {
      wu(r), a = !1;
    },
    d(o) {
      o && r0(e), l[t].d();
    }
  };
}
function d_(n, e, t) {
  let r, { numBars: a = 16 } = e, { stream_state: i = "closed" } = e, { audio_source_callback: l } = e, { icon: s = void 0 } = e, { icon_button_color: o = "var(--color-accent)" } = e, { pulse_color: u = "var(--color-accent)" } = e, { pending: c = !1 } = e, { icon_radius: d = 50 } = e, h, p, _, b, { pulseScale: D = 1 } = e;
  o_(() => {
    b && cancelAnimationFrame(b), h && h.close();
  });
  function y() {
    h = new (window.AudioContext || window.webkitAudioContext)(), p = h.createAnalyser(), h.createMediaStreamSource(l()).connect(p), p.fftSize = 64, p.smoothingTimeConstant = 0.8, _ = new Uint8Array(p.frequencyBinCount), k();
  }
  function k() {
    p.getByteFrequencyData(_);
    const w = document.querySelectorAll(".gradio-webrtc-waveContainer .gradio-webrtc-box");
    for (let x = 0; x < w.length; x++) {
      const E = _[x] / 255 * 2;
      w[x].style.transform = `scaleY(${Math.max(0.1, E)})`;
    }
    b = requestAnimationFrame(k);
  }
  return n.$$set = (w) => {
    "numBars" in w && t(0, a = w.numBars), "stream_state" in w && t(1, i = w.stream_state), "audio_source_callback" in w && t(2, l = w.audio_source_callback), "icon" in w && t(3, s = w.icon), "icon_button_color" in w && t(4, o = w.icon_button_color), "pulse_color" in w && t(5, u = w.pulse_color), "pending" in w && t(6, c = w.pending), "icon_radius" in w && t(7, d = w.icon_radius), "pulseScale" in w && t(8, D = w.pulseScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon, numBars*/
    9 && t(9, r = s ? "128px" : `calc((var(--boxSize) + var(--gutter)) * ${a})`), n.$$.dirty & /*stream_state*/
    2 && i === "open" && y();
  }, [
    a,
    i,
    l,
    s,
    o,
    u,
    c,
    d,
    D,
    r
  ];
}
class Dm extends Q9 {
  constructor(e) {
    super(), i_(this, e, d_, h_, s_, {
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
  SvelteComponent: m_,
  attr: Am,
  binding_callbacks: p_,
  bubble: g_,
  check_outros: Lh,
  children: Em,
  claim_component: fs,
  claim_element: Sm,
  claim_space: Bo,
  create_component: hs,
  destroy_component: ds,
  detach: en,
  element: xm,
  empty: Nh,
  group_outros: Rh,
  init: __,
  insert_hydration: ta,
  listen: Io,
  mount_component: ms,
  run_all: v_,
  safe_not_equal: b_,
  space: Lo,
  toggle_class: w_,
  transition_in: $0,
  transition_out: tn
} = window.__gradio__svelte__internal, { createEventDispatcher: y_ } = window.__gradio__svelte__internal;
function Oh(n) {
  let e, t, r;
  return t = new Dm({
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
      e = xm("div"), hs(t.$$.fragment), this.h();
    },
    l(a) {
      e = Sm(a, "DIV", { class: !0 });
      var i = Em(e);
      fs(t.$$.fragment, i), i.forEach(en), this.h();
    },
    h() {
      Am(e, "class", "audio-container svelte-js69uk");
    },
    m(a, i) {
      ta(a, e, i), ms(t, e, null), r = !0;
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
      r || ($0(t.$$.fragment, a), r = !0);
    },
    o(a) {
      tn(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && en(e), ds(t);
    }
  };
}
function qh(n) {
  let e, t;
  return e = new hm({
    props: {
      size: "small",
      $$slots: { default: [k_] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      hs(e.$$.fragment);
    },
    l(r) {
      fs(e.$$.fragment, r);
    },
    m(r, a) {
      ms(e, r, a), t = !0;
    },
    i(r) {
      t || ($0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      tn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ds(e, r);
    }
  };
}
function k_(n) {
  let e, t;
  return e = new Eu({}), {
    c() {
      hs(e.$$.fragment);
    },
    l(r) {
      fs(e.$$.fragment, r);
    },
    m(r, a) {
      ms(e, r, a), t = !0;
    },
    i(r) {
      t || ($0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      tn(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ds(e, r);
    }
  };
}
function D_(n) {
  let e, t, r, a, i, l, s, o, u;
  e = new ss({
    props: {
      show_label: (
        /*show_label*/
        n[2]
      ),
      Icon: Eu,
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
    n[0] !== "__webrtc_value__" && Oh(n)
  ), d = (
    /*value*/
    n[0] === "__webrtc_value__" && qh(n)
  );
  return {
    c() {
      hs(e.$$.fragment), t = Lo(), r = xm("audio"), a = Lo(), c && c.c(), i = Lo(), d && d.c(), l = Nh(), this.h();
    },
    l(h) {
      fs(e.$$.fragment, h), t = Bo(h), r = Sm(h, "AUDIO", { class: !0 }), Em(r).forEach(en), a = Bo(h), c && c.l(h), i = Bo(h), d && d.l(h), l = Nh(), this.h();
    },
    h() {
      Am(r, "class", "standard-player svelte-js69uk"), w_(r, "hidden", !0);
    },
    m(h, p) {
      ms(e, h, p), ta(h, t, p), ta(h, r, p), n[15](r), ta(h, a, p), c && c.m(h, p), ta(h, i, p), d && d.m(h, p), ta(h, l, p), s = !0, o || (u = [
        Io(
          r,
          "load",
          /*load_handler*/
          n[14]
        ),
        Io(
          r,
          "ended",
          /*ended_handler*/
          n[16]
        ),
        Io(
          r,
          "play",
          /*play_handler*/
          n[17]
        )
      ], o = !0);
    },
    p(h, [p]) {
      const _ = {};
      p & /*show_label*/
      4 && (_.show_label = /*show_label*/
      h[2]), p & /*label, i18n*/
      10 && (_.label = /*label*/
      h[1] || /*i18n*/
      h[3]("audio.audio")), e.$set(_), /*value*/
      h[0] !== "__webrtc_value__" ? c ? (c.p(h, p), p & /*value*/
      1 && $0(c, 1)) : (c = Oh(h), c.c(), $0(c, 1), c.m(i.parentNode, i)) : c && (Rh(), tn(c, 1, 1, () => {
        c = null;
      }), Lh()), /*value*/
      h[0] === "__webrtc_value__" ? d ? p & /*value*/
      1 && $0(d, 1) : (d = qh(h), d.c(), $0(d, 1), d.m(l.parentNode, l)) : d && (Rh(), tn(d, 1, 1, () => {
        d = null;
      }), Lh());
    },
    i(h) {
      s || ($0(e.$$.fragment, h), $0(c), $0(d), s = !0);
    },
    o(h) {
      tn(e.$$.fragment, h), tn(c), tn(d), s = !1;
    },
    d(h) {
      h && (en(t), en(r), en(a), en(i), en(l)), ds(e, h), n[15](null), c && c.d(h), d && d.d(h), o = !1, v_(u);
    }
  };
}
function A_(n, e, t) {
  var r = this && this.__awaiter || function(B, q, J, Y) {
    function O(te) {
      return te instanceof J ? te : new J(function(ie) {
        ie(te);
      });
    }
    return new (J || (J = Promise))(function(te, ie) {
      function oe($) {
        try {
          we(Y.next($));
        } catch (fe) {
          ie(fe);
        }
      }
      function ye($) {
        try {
          we(Y.throw($));
        } catch (fe) {
          ie(fe);
        }
      }
      function we($) {
        $.done ? te($.value) : O($.value).then(oe, ye);
      }
      we((Y = Y.apply(B, q || [])).next());
    });
  };
  let { value: a = null } = e, { label: i = void 0 } = e, { show_label: l = !0 } = e, { rtc_configuration: s = null } = e, { i18n: o } = e, { on_change_cb: u } = e, { icon: c = void 0 } = e, { icon_button_color: d = "var(--color-accent)" } = e, { pulse_color: h = "var(--color-accent)" } = e, { icon_radius: p = 50 } = e, { server: _ } = e, b = "closed", D, y, k = Math.random().toString(36).substring(2), w = (B) => {
    B.type === "end_stream" ? (u(B), t(8, b = "closed"), n0(y)) : (console.debug("calling on_change_cb with msg", B), u(B));
  };
  const x = y_();
  function E(B) {
    return r(this, void 0, void 0, function* () {
      if (B === "start_webrtc_stream") {
        t(8, b = "waiting"), k = Math.random().toString(36).substring(2), B = k, y = new RTCPeerConnection(s), y.addEventListener("connectionstatechange", (Y) => r(this, void 0, void 0, function* () {
          switch (y.connectionState) {
            case "connected":
              console.info("connected"), t(8, b = "open"), x("tick");
              break;
            case "disconnected":
              console.info("closed"), n0(y);
              break;
            case "failed":
              t(8, b = "closed"), x("error", "Connection failed!"), n0(y);
              break;
          }
        }));
        let q = null;
        const J = setTimeout(
          () => {
            u({ type: "connection_timeout" });
          },
          1e4
        );
        cs(q, y, D, _.offer, k, "audio", w).then((Y) => {
          clearTimeout(J), y = Y;
        }).catch(() => {
          clearTimeout(J), console.info("catching"), x("error", "Too many concurrent users. Come back later!");
        });
      }
      return B;
    });
  }
  function T(B) {
    g_.call(this, n, B);
  }
  function C(B) {
    p_[B ? "unshift" : "push"](() => {
      D = B, t(9, D);
    });
  }
  const F = () => x("stop"), I = () => x("play"), L = () => D.srcObject;
  return n.$$set = (B) => {
    "value" in B && t(0, a = B.value), "label" in B && t(1, i = B.label), "show_label" in B && t(2, l = B.show_label), "rtc_configuration" in B && t(11, s = B.rtc_configuration), "i18n" in B && t(3, o = B.i18n), "on_change_cb" in B && t(12, u = B.on_change_cb), "icon" in B && t(4, c = B.icon), "icon_button_color" in B && t(5, d = B.icon_button_color), "pulse_color" in B && t(6, h = B.pulse_color), "icon_radius" in B && t(7, p = B.icon_radius), "server" in B && t(13, _ = B.server);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && E(a).then((B) => {
      t(0, a = B);
    });
  }, [
    a,
    i,
    l,
    o,
    c,
    d,
    h,
    p,
    b,
    D,
    x,
    s,
    u,
    _,
    T,
    C,
    F,
    I,
    L
  ];
}
class E_ extends m_ {
  constructor(e) {
    super(), __(this, e, A_, D_, b_, {
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
  SvelteComponent: S_,
  append_hydration: Ia,
  attr: Ue,
  children: Zn,
  claim_svg_element: Kn,
  detach: Dn,
  init: x_,
  insert_hydration: T_,
  noop: No,
  safe_not_equal: C_,
  svg_element: Jn
} = window.__gradio__svelte__internal;
function F_(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = Jn("svg"), t = Jn("path"), r = Jn("path"), a = Jn("line"), i = Jn("line"), l = Jn("line"), this.h();
    },
    l(s) {
      e = Kn(s, "svg", {
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
      var o = Zn(e);
      t = Kn(o, "path", { d: !0 }), Zn(t).forEach(Dn), r = Kn(o, "path", { d: !0 }), Zn(r).forEach(Dn), a = Kn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Zn(a).forEach(Dn), i = Kn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Zn(i).forEach(Dn), l = Kn(o, "line", { x1: !0, y1: !0, x2: !0, y2: !0 }), Zn(l).forEach(Dn), o.forEach(Dn), this.h();
    },
    h() {
      Ue(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Ue(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Ue(a, "x1", "12"), Ue(a, "y1", "19"), Ue(a, "x2", "12"), Ue(a, "y2", "23"), Ue(i, "x1", "8"), Ue(i, "y1", "23"), Ue(i, "x2", "16"), Ue(i, "y2", "23"), Ue(l, "x1", "1"), Ue(l, "y1", "1"), Ue(l, "x2", "23"), Ue(l, "y2", "23"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-mic");
    },
    m(s, o) {
      T_(s, e, o), Ia(e, t), Ia(e, r), Ia(e, a), Ia(e, i), Ia(e, l);
    },
    p: No,
    i: No,
    o: No,
    d(s) {
      s && Dn(e);
    }
  };
}
class yu extends S_ {
  constructor(e) {
    super(), x_(this, e, null, F_, C_, {});
  }
}
const M_ = '<svg class="md-link-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>', z_ = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" color="currentColor" aria-hidden="true" aria-label="Copy" stroke-width="1.3" width="15" height="15">
  <path fill="currentColor" d="M12.728 4.545v8.182H4.545V4.545zm0 -0.909H4.545a0.909 0.909 0 0 0 -0.909 0.909v8.182a0.909 0.909 0 0 0 0.909 0.909h8.182a0.909 0.909 0 0 0 0.909 -0.909V4.545a0.909 0.909 0 0 0 -0.909 -0.909"/>
  <path fill="currentColor" d="M1.818 8.182H0.909V1.818a0.909 0.909 0 0 1 0.909 -0.909h6.364v0.909H1.818Z"/>
</svg>

`, B_ = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" aria-label="Copied" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="m13.813 4.781 -7.438 7.438 -3.188 -3.188"/>
</svg>
`, Ph = `<button title="copy" class="copy_code_button">
  <span class="copy-text">${z_}</span>
  <span class="check">${B_}</span>
</button>`, Tm = /[&<>"']/, I_ = new RegExp(Tm.source, "g"), Cm = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, L_ = new RegExp(Cm.source, "g"), N_ = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Hh = (n) => N_[n] || "";
function Ro(n, e) {
  if (e) {
    if (Tm.test(n))
      return n.replace(I_, Hh);
  } else if (Cm.test(n))
    return n.replace(L_, Hh);
  return n;
}
function R_(n) {
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
function O_() {
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
const q_ = {
  code(n, e, t) {
    var a;
    const r = ((a = (e ?? "").match(/\S*/)) == null ? void 0 : a[0]) ?? "";
    return n = n.replace(/\n$/, "") + `
`, !r || r === "mermaid" ? '<div class="code_wrap">' + Ph + "<pre><code>" + (t ? n : Ro(n, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + Ph + '<pre><code class="language-' + Ro(r) + '">' + (t ? n : Ro(n, !0)) + `</code></pre></div>
`;
  }
}, P_ = new ls();
function H_({
  header_links: n,
  line_breaks: e,
  latex_delimiters: t
}) {
  const r = new M4();
  r.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: e
    },
    c7({
      highlight: (l, s) => {
        var o;
        return (o = uo.languages) != null && o[s] ? uo.highlight(l, uo.languages[s], s) : l;
      }
    }),
    { renderer: q_ }
  ), n && (r.use(_7()), r.use({
    extensions: [
      {
        name: "heading",
        level: "block",
        renderer(l) {
          const s = l.raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, ""), o = "h" + P_.slug(s), u = l.depth, c = this.parser.parseInline(l.tokens);
          return `<h${u} id="${o}"><a class="md-header-anchor" href="#${o}">${M_}</a>${c}</h${u}>
`;
        }
      }
    ]
  }));
  const a = O_(), i = R_(t);
  return r.use({
    extensions: [a, i]
  }), r;
}
const Uh = [
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
], U_ = [
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
], V_ = [
  ...Uh,
  ...U_.filter((n) => !Uh.includes(n))
], {
  HtmlTagHydration: G_,
  SvelteComponent: j_,
  attr: W_,
  binding_callbacks: X_,
  children: Y_,
  claim_element: Z_,
  claim_html_tag: K_,
  detach: Vh,
  element: J_,
  init: Q_,
  insert_hydration: $_,
  noop: Gh,
  safe_not_equal: ev,
  toggle_class: sl
} = window.__gradio__svelte__internal, { afterUpdate: tv, tick: rv } = window.__gradio__svelte__internal;
function nv(n) {
  let e, t;
  return {
    c() {
      e = J_("span"), t = new G_(!1), this.h();
    },
    l(r) {
      e = Z_(r, "SPAN", { class: !0 });
      var a = Y_(e);
      t = K_(a, !1), a.forEach(Vh), this.h();
    },
    h() {
      t.a = null, W_(e, "class", "md svelte-1m32c2s"), sl(
        e,
        "chatbot",
        /*chatbot*/
        n[0]
      ), sl(
        e,
        "prose",
        /*render_markdown*/
        n[1]
      );
    },
    m(r, a) {
      $_(r, e, a), t.m(
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
      1 && sl(
        e,
        "chatbot",
        /*chatbot*/
        r[0]
      ), a & /*render_markdown*/
      2 && sl(
        e,
        "prose",
        /*render_markdown*/
        r[1]
      );
    },
    i: Gh,
    o: Gh,
    d(r) {
      r && Vh(e), n[12](null);
    }
  };
}
function jh(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function av(n, e, t) {
  var r = this && this.__awaiter || function(E, T, C, F) {
    function I(L) {
      return L instanceof C ? L : new C(function(B) {
        B(L);
      });
    }
    return new (C || (C = Promise))(function(L, B) {
      function q(O) {
        try {
          Y(F.next(O));
        } catch (te) {
          B(te);
        }
      }
      function J(O) {
        try {
          Y(F.throw(O));
        } catch (te) {
          B(te);
        }
      }
      function Y(O) {
        O.done ? L(O.value) : I(O.value).then(q, J);
      }
      Y((F = F.apply(E, T || [])).next());
    });
  };
  let { chatbot: a = !0 } = e, { message: i } = e, { sanitize_html: l = !0 } = e, { latex_delimiters: s = [] } = e, { render_markdown: o = !0 } = e, { line_breaks: u = !0 } = e, { header_links: c = !1 } = e, { root: d } = e, { allow_tags: h = !1 } = e, { theme_mode: p = "system" } = e, _, b;
  const D = H_({
    header_links: c,
    line_breaks: u,
    latex_delimiters: s || []
  });
  function y(E, T) {
    if (T === !0) {
      const C = /<\/?([a-zA-Z][a-zA-Z0-9-]*)([\s>])/g;
      return E.replace(C, (F, I, L) => V_.includes(I.toLowerCase()) ? F : F.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    }
    if (Array.isArray(T)) {
      const C = T.map((I) => ({
        open: new RegExp(`<(${I})(\\s+[^>]*)?>`, "gi"),
        close: new RegExp(`</(${I})>`, "gi")
      }));
      let F = E;
      return C.forEach((I) => {
        F = F.replace(I.open, (L) => L.replace(/</g, "&lt;").replace(/>/g, "&gt;")), F = F.replace(I.close, (L) => L.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      }), F;
    }
    return E;
  }
  function k(E) {
    let T = E;
    if (o) {
      const C = [];
      s.forEach((F, I) => {
        const L = jh(F.left), B = jh(F.right), q = new RegExp(`${L}([\\s\\S]+?)${B}`, "g");
        T = T.replace(q, (J, Y) => (C.push(J), `%%%LATEX_BLOCK_${C.length - 1}%%%`));
      }), T = D.parse(T), T = T.replace(/%%%LATEX_BLOCK_(\d+)%%%/g, (F, I) => C[parseInt(I, 10)]);
    }
    return h && (T = y(T, h)), l && Oc && (T = Oc(T, d)), T;
  }
  function w(E) {
    return r(this, void 0, void 0, function* () {
      if (s.length > 0 && E && s.some((C) => E.includes(C.left) && E.includes(C.right)) && C6(_, {
        delimiters: s,
        throwOnError: !1
      }), _) {
        const T = _.querySelectorAll(".mermaid");
        if (T.length > 0) {
          yield rv();
          const { default: C } = yield import("./mermaid.core-C363K4_Y.js").then((F) => F.by);
          C.initialize({
            startOnLoad: !1,
            theme: p === "dark" ? "dark" : "default",
            securityLevel: "antiscript"
          }), yield C.run({
            nodes: Array.from(T).map((F) => F)
          });
        }
      }
    });
  }
  tv(() => r(void 0, void 0, void 0, function* () {
    _ && document.body.contains(_) ? yield w(i) : console.error("Element is not in the DOM");
  }));
  function x(E) {
    X_[E ? "unshift" : "push"](() => {
      _ = E, t(2, _);
    });
  }
  return n.$$set = (E) => {
    "chatbot" in E && t(0, a = E.chatbot), "message" in E && t(4, i = E.message), "sanitize_html" in E && t(5, l = E.sanitize_html), "latex_delimiters" in E && t(6, s = E.latex_delimiters), "render_markdown" in E && t(1, o = E.render_markdown), "line_breaks" in E && t(7, u = E.line_breaks), "header_links" in E && t(8, c = E.header_links), "root" in E && t(9, d = E.root), "allow_tags" in E && t(10, h = E.allow_tags), "theme_mode" in E && t(11, p = E.theme_mode);
  }, n.$$.update = () => {
    n.$$.dirty & /*message*/
    16 && (i && i.trim() ? t(3, b = k(i)) : t(3, b = ""));
  }, [
    a,
    o,
    _,
    b,
    i,
    l,
    s,
    u,
    c,
    d,
    h,
    p,
    x
  ];
}
class iv extends j_ {
  constructor(e) {
    super(), Q_(this, e, av, nv, ev, {
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
  SvelteComponent: lv,
  attr: sv,
  children: ov,
  claim_component: uv,
  claim_element: cv,
  create_component: fv,
  destroy_component: hv,
  detach: Wh,
  element: dv,
  init: mv,
  insert_hydration: pv,
  mount_component: gv,
  safe_not_equal: _v,
  transition_in: vv,
  transition_out: bv
} = window.__gradio__svelte__internal;
function wv(n) {
  let e, t, r;
  return t = new iv({
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
      e = dv("div"), fv(t.$$.fragment), this.h();
    },
    l(a) {
      e = cv(a, "DIV", { class: !0 });
      var i = ov(e);
      uv(t.$$.fragment, i), i.forEach(Wh), this.h();
    },
    h() {
      sv(e, "class", "svelte-17qq50w");
    },
    m(a, i) {
      pv(a, e, i), gv(t, e, null), r = !0;
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
      r || (vv(t.$$.fragment, a), r = !0);
    },
    o(a) {
      bv(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Wh(e), hv(t);
    }
  };
}
function yv(n, e, t) {
  let { info: r } = e, { root: a } = e;
  return n.$$set = (i) => {
    "info" in i && t(0, r = i.info), "root" in i && t(1, a = i.root);
  }, [r, a];
}
class kv extends lv {
  constructor(e) {
    super(), mv(this, e, yv, wv, _v, { info: 0, root: 1 });
  }
}
const {
  SvelteComponent: Dv,
  attr: ol,
  check_outros: Av,
  children: Ev,
  claim_component: Sv,
  claim_element: xv,
  claim_space: Tv,
  create_component: Cv,
  create_slot: Fv,
  destroy_component: Mv,
  detach: ul,
  element: zv,
  empty: Xh,
  get_all_dirty_from_scope: Bv,
  get_slot_changes: Iv,
  group_outros: Lv,
  init: Nv,
  insert_hydration: Oo,
  mount_component: Rv,
  safe_not_equal: Ov,
  space: qv,
  toggle_class: Qn,
  transition_in: Pa,
  transition_out: El,
  update_slot_base: Pv
} = window.__gradio__svelte__internal;
function Yh(n) {
  let e, t;
  return e = new kv({
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
      Cv(e.$$.fragment);
    },
    l(r) {
      Sv(e.$$.fragment, r);
    },
    m(r, a) {
      Rv(e, r, a), t = !0;
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
      t || (Pa(e.$$.fragment, r), t = !0);
    },
    o(r) {
      El(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Mv(e, r);
    }
  };
}
function Hv(n) {
  let e, t, r, a, i;
  const l = (
    /*#slots*/
    n[5].default
  ), s = Fv(
    l,
    n,
    /*$$scope*/
    n[4],
    null
  );
  let o = (
    /*info*/
    n[1] && Yh(n)
  );
  return {
    c() {
      e = zv("span"), s && s.c(), r = qv(), o && o.c(), a = Xh(), this.h();
    },
    l(u) {
      e = xv(u, "SPAN", {
        "data-testid": !0,
        dir: !0,
        class: !0
      });
      var c = Ev(e);
      s && s.l(c), c.forEach(ul), r = Tv(u), o && o.l(u), a = Xh(), this.h();
    },
    h() {
      ol(e, "data-testid", "block-info"), ol(e, "dir", t = /*rtl*/
      n[3] ? "rtl" : "ltr"), ol(e, "class", "svelte-zgrq3"), Qn(e, "sr-only", !/*show_label*/
      n[0]), Qn(e, "hide", !/*show_label*/
      n[0]), Qn(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(u, c) {
      Oo(u, e, c), s && s.m(e, null), Oo(u, r, c), o && o.m(u, c), Oo(u, a, c), i = !0;
    },
    p(u, [c]) {
      s && s.p && (!i || c & /*$$scope*/
      16) && Pv(
        s,
        l,
        u,
        /*$$scope*/
        u[4],
        i ? Iv(
          l,
          /*$$scope*/
          u[4],
          c,
          null
        ) : Bv(
          /*$$scope*/
          u[4]
        ),
        null
      ), (!i || c & /*rtl*/
      8 && t !== (t = /*rtl*/
      u[3] ? "rtl" : "ltr")) && ol(e, "dir", t), (!i || c & /*show_label*/
      1) && Qn(e, "sr-only", !/*show_label*/
      u[0]), (!i || c & /*show_label*/
      1) && Qn(e, "hide", !/*show_label*/
      u[0]), (!i || c & /*info*/
      2) && Qn(
        e,
        "has-info",
        /*info*/
        u[1] != null
      ), /*info*/
      u[1] ? o ? (o.p(u, c), c & /*info*/
      2 && Pa(o, 1)) : (o = Yh(u), o.c(), Pa(o, 1), o.m(a.parentNode, a)) : o && (Lv(), El(o, 1, 1, () => {
        o = null;
      }), Av());
    },
    i(u) {
      i || (Pa(s, u), Pa(o), i = !0);
    },
    o(u) {
      El(s, u), El(o), i = !1;
    },
    d(u) {
      u && (ul(e), ul(r), ul(a)), s && s.d(u), o && o.d(u);
    }
  };
}
function Uv(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { show_label: i = !0 } = e, { info: l = void 0 } = e, { root: s } = e, { rtl: o = !1 } = e;
  return n.$$set = (u) => {
    "show_label" in u && t(0, i = u.show_label), "info" in u && t(1, l = u.info), "root" in u && t(2, s = u.root), "rtl" in u && t(3, o = u.rtl), "$$scope" in u && t(4, a = u.$$scope);
  }, [i, l, s, o, a, r];
}
class Vv extends Dv {
  constructor(e) {
    super(), Nv(this, e, Uv, Hv, Ov, { show_label: 0, info: 1, root: 2, rtl: 3 });
  }
}
const {
  SvelteComponent: Gv,
  append_hydration: jv,
  attr: v0,
  children: Zh,
  claim_svg_element: Kh,
  detach: qo,
  init: Wv,
  insert_hydration: Xv,
  noop: Po,
  safe_not_equal: Yv,
  svg_element: Jh
} = window.__gradio__svelte__internal;
function Zv(n) {
  let e, t;
  return {
    c() {
      e = Jh("svg"), t = Jh("path"), this.h();
    },
    l(r) {
      e = Kh(r, "svg", {
        width: !0,
        height: !0,
        "stroke-width": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        color: !0
      });
      var a = Zh(e);
      t = Kh(a, "path", {
        d: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), Zh(t).forEach(qo), a.forEach(qo), this.h();
    },
    h() {
      v0(t, "d", "M5 13L9 17L19 7"), v0(t, "stroke", "currentColor"), v0(t, "stroke-width", "1.5"), v0(t, "stroke-linecap", "round"), v0(t, "stroke-linejoin", "round"), v0(e, "width", "100%"), v0(e, "height", "100%"), v0(e, "stroke-width", "1.5"), v0(e, "viewBox", "0 0 24 24"), v0(e, "fill", "none"), v0(e, "xmlns", "http://www.w3.org/2000/svg"), v0(e, "color", "currentColor");
    },
    m(r, a) {
      Xv(r, e, a), jv(e, t);
    },
    p: Po,
    i: Po,
    o: Po,
    d(r) {
      r && qo(e);
    }
  };
}
class Kv extends Gv {
  constructor(e) {
    super(), Wv(this, e, null, Zv, Yv, {});
  }
}
const {
  SvelteComponent: Jv,
  append_hydration: Qh,
  attr: Q0,
  children: Ho,
  claim_svg_element: Uo,
  detach: cl,
  init: Qv,
  insert_hydration: $v,
  noop: Vo,
  safe_not_equal: eb,
  svg_element: Go
} = window.__gradio__svelte__internal;
function tb(n) {
  let e, t, r;
  return {
    c() {
      e = Go("svg"), t = Go("path"), r = Go("path"), this.h();
    },
    l(a) {
      e = Uo(a, "svg", {
        xmlns: !0,
        viewBox: !0,
        color: !0,
        "aria-hidden": !0,
        width: !0,
        height: !0
      });
      var i = Ho(e);
      t = Uo(i, "path", { fill: !0, d: !0 }), Ho(t).forEach(cl), r = Uo(i, "path", { fill: !0, d: !0 }), Ho(r).forEach(cl), i.forEach(cl), this.h();
    },
    h() {
      Q0(t, "fill", "currentColor"), Q0(t, "d", "M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"), Q0(r, "fill", "currentColor"), Q0(r, "d", "M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"), Q0(e, "xmlns", "http://www.w3.org/2000/svg"), Q0(e, "viewBox", "0 0 33 33"), Q0(e, "color", "currentColor"), Q0(e, "aria-hidden", "true"), Q0(e, "width", "100%"), Q0(e, "height", "100%");
    },
    m(a, i) {
      $v(a, e, i), Qh(e, t), Qh(e, r);
    },
    p: Vo,
    i: Vo,
    o: Vo,
    d(a) {
      a && cl(e);
    }
  };
}
class rb extends Jv {
  constructor(e) {
    super(), Qv(this, e, null, tb, eb, {});
  }
}
const {
  SvelteComponent: nb,
  append_hydration: fl,
  attr: u0,
  children: La,
  claim_svg_element: Na,
  detach: $n,
  init: ab,
  insert_hydration: ib,
  noop: jo,
  safe_not_equal: lb,
  svg_element: Ra
} = window.__gradio__svelte__internal;
function sb(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = Ra("svg"), t = Ra("g"), r = Ra("g"), a = Ra("g"), i = Ra("path"), this.h();
    },
    l(l) {
      e = Na(l, "svg", {
        viewBox: !0,
        width: !0,
        height: !0,
        fill: !0,
        xmlns: !0
      });
      var s = La(e);
      t = Na(s, "g", { id: !0, "stroke-width": !0 }), La(t).forEach($n), r = Na(s, "g", {
        id: !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0
      }), La(r).forEach($n), a = Na(s, "g", { id: !0 });
      var o = La(a);
      i = Na(o, "path", { d: !0, fill: !0 }), La(i).forEach($n), o.forEach($n), s.forEach($n), this.h();
    },
    h() {
      u0(t, "id", "SVGRepo_bgCarrier"), u0(t, "stroke-width", "0"), u0(r, "id", "SVGRepo_tracerCarrier"), u0(r, "stroke-linecap", "round"), u0(r, "stroke-linejoin", "round"), u0(i, "d", "M19.1168 12.1484C19.474 12.3581 19.9336 12.2384 20.1432 11.8811C20.3528 11.5238 20.2331 11.0643 19.8758 10.8547L19.1168 12.1484ZM6.94331 4.13656L6.55624 4.77902L6.56378 4.78344L6.94331 4.13656ZM5.92408 4.1598L5.50816 3.5357L5.50816 3.5357L5.92408 4.1598ZM5.51031 5.09156L4.76841 5.20151C4.77575 5.25101 4.78802 5.29965 4.80505 5.34671L5.51031 5.09156ZM7.12405 11.7567C7.26496 12.1462 7.69495 12.3477 8.08446 12.2068C8.47397 12.0659 8.67549 11.6359 8.53458 11.2464L7.12405 11.7567ZM19.8758 12.1484C20.2331 11.9388 20.3528 11.4793 20.1432 11.122C19.9336 10.7648 19.474 10.6451 19.1168 10.8547L19.8758 12.1484ZM6.94331 18.8666L6.56375 18.2196L6.55627 18.2241L6.94331 18.8666ZM5.92408 18.8433L5.50815 19.4674H5.50815L5.92408 18.8433ZM5.51031 17.9116L4.80505 17.6564C4.78802 17.7035 4.77575 17.7521 4.76841 17.8016L5.51031 17.9116ZM8.53458 11.7567C8.67549 11.3672 8.47397 10.9372 8.08446 10.7963C7.69495 10.6554 7.26496 10.8569 7.12405 11.2464L8.53458 11.7567ZM19.4963 12.2516C19.9105 12.2516 20.2463 11.9158 20.2463 11.5016C20.2463 11.0873 19.9105 10.7516 19.4963 10.7516V12.2516ZM7.82931 10.7516C7.4151 10.7516 7.07931 11.0873 7.07931 11.5016C7.07931 11.9158 7.4151 12.2516 7.82931 12.2516V10.7516ZM19.8758 10.8547L7.32284 3.48968L6.56378 4.78344L19.1168 12.1484L19.8758 10.8547ZM7.33035 3.49414C6.76609 3.15419 6.05633 3.17038 5.50816 3.5357L6.34 4.78391C6.40506 4.74055 6.4893 4.73863 6.55627 4.77898L7.33035 3.49414ZM5.50816 3.5357C4.95998 3.90102 4.67184 4.54987 4.76841 5.20151L6.25221 4.98161C6.24075 4.90427 6.27494 4.82727 6.34 4.78391L5.50816 3.5357ZM4.80505 5.34671L7.12405 11.7567L8.53458 11.2464L6.21558 4.83641L4.80505 5.34671ZM19.1168 10.8547L6.56378 18.2197L7.32284 19.5134L19.8758 12.1484L19.1168 10.8547ZM6.55627 18.2241C6.4893 18.2645 6.40506 18.2626 6.34 18.2192L5.50815 19.4674C6.05633 19.8327 6.76609 19.8489 7.33035 19.509L6.55627 18.2241ZM6.34 18.2192C6.27494 18.1759 6.24075 18.0988 6.25221 18.0215L4.76841 17.8016C4.67184 18.4532 4.95998 19.1021 5.50815 19.4674L6.34 18.2192ZM6.21558 18.1667L8.53458 11.7567L7.12405 11.2464L4.80505 17.6564L6.21558 18.1667ZM19.4963 10.7516H7.82931V12.2516H19.4963V10.7516Z"), u0(i, "fill", "currentColor"), u0(a, "id", "SVGRepo_iconCarrier"), u0(e, "viewBox", "0 0 22 24"), u0(e, "width", "100%"), u0(e, "height", "100%"), u0(e, "fill", "none"), u0(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, s) {
      ib(l, e, s), fl(e, t), fl(e, r), fl(e, a), fl(a, i);
    },
    p: jo,
    i: jo,
    o: jo,
    d(l) {
      l && $n(e);
    }
  };
}
class ob extends nb {
  constructor(e) {
    super(), ab(this, e, null, sb, lb, {});
  }
}
const {
  SvelteComponent: ub,
  append_hydration: cb,
  attr: St,
  children: $h,
  claim_svg_element: ed,
  detach: Wo,
  init: fb,
  insert_hydration: hb,
  noop: td,
  safe_not_equal: db,
  svg_element: rd
} = window.__gradio__svelte__internal;
function mb(n) {
  let e, t, r;
  return {
    c() {
      e = rd("svg"), t = rd("rect"), this.h();
    },
    l(a) {
      e = ed(a, "svg", {
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
      var i = $h(e);
      t = ed(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        ry: !0
      }), $h(t).forEach(Wo), i.forEach(Wo), this.h();
    },
    h() {
      St(t, "x", "3"), St(t, "y", "3"), St(t, "width", "18"), St(t, "height", "18"), St(t, "rx", "2"), St(t, "ry", "2"), St(e, "xmlns", "http://www.w3.org/2000/svg"), St(e, "width", "100%"), St(e, "height", "100%"), St(e, "viewBox", "0 0 24 24"), St(
        e,
        "fill",
        /*fill*/
        n[0]
      ), St(e, "stroke", "currentColor"), St(e, "stroke-width", r = `${/*stroke_width*/
      n[1]}`), St(e, "stroke-linecap", "round"), St(e, "stroke-linejoin", "round"), St(e, "class", "feather feather-square");
    },
    m(a, i) {
      hb(a, e, i), cb(e, t);
    },
    p(a, [i]) {
      i & /*fill*/
      1 && St(
        e,
        "fill",
        /*fill*/
        a[0]
      ), i & /*stroke_width*/
      2 && r !== (r = `${/*stroke_width*/
      a[1]}`) && St(e, "stroke-width", r);
    },
    i: td,
    o: td,
    d(a) {
      a && Wo(e);
    }
  };
}
function pb(n, e, t) {
  let { fill: r = "currentColor" } = e, { stroke_width: a = 1.5 } = e;
  return n.$$set = (i) => {
    "fill" in i && t(0, r = i.fill), "stroke_width" in i && t(1, a = i.stroke_width);
  }, [r, a];
}
class gb extends ub {
  constructor(e) {
    super(), fb(this, e, pb, mb, db, { fill: 0, stroke_width: 1 });
  }
}
const _b = [
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
], nd = {
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
_b.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: nd[e][t],
      secondary: nd[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: vb,
  action_destroyer: bb,
  add_render_callback: wb,
  append_hydration: Oa,
  attr: ue,
  binding_callbacks: hl,
  bubble: Qr,
  check_outros: oa,
  children: Bn,
  claim_component: mi,
  claim_element: hr,
  claim_space: dl,
  claim_text: o1,
  create_component: pi,
  create_in_transition: yb,
  destroy_component: gi,
  detach: at,
  element: dr,
  empty: Zl,
  group_outros: ua,
  init: kb,
  insert_hydration: l0,
  is_function: Db,
  listen: Ve,
  mount_component: _i,
  noop: hn,
  run_all: ps,
  safe_not_equal: Ab,
  set_data: u1,
  set_input_value: dn,
  space: ml,
  text: c1,
  toggle_class: Fr,
  transition_in: ct,
  transition_out: It
} = window.__gradio__svelte__internal, { beforeUpdate: Eb, afterUpdate: Sb, createEventDispatcher: xb, tick: ad } = window.__gradio__svelte__internal;
function id(n) {
  let e, t, r, a;
  const i = [Cb, Tb], l = [];
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
      l[e].m(o, u), l0(o, r, u), a = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? l[e].p(o, u) : (ua(), It(l[c], 1, 1, () => {
        l[c] = null;
      }), oa(), t = l[e], t ? t.p(o, u) : (t = l[e] = i[e](o), t.c()), ct(t, 1), t.m(r.parentNode, r));
    },
    i(o) {
      a || (ct(t), a = !0);
    },
    o(o) {
      It(t), a = !1;
    },
    d(o) {
      o && at(r), l[e].d(o);
    }
  };
}
function Tb(n) {
  let e, t, r, a, i;
  return t = new rb({}), {
    c() {
      e = dr("button"), pi(t.$$.fragment), this.h();
    },
    l(l) {
      e = hr(l, "BUTTON", {
        class: !0,
        "aria-label": !0,
        "aria-roledescription": !0
      });
      var s = Bn(e);
      mi(t.$$.fragment, s), s.forEach(at), this.h();
    },
    h() {
      ue(e, "class", "copy-button svelte-bj4kw9"), ue(e, "aria-label", "Copy"), ue(e, "aria-roledescription", "Copy text");
    },
    m(l, s) {
      l0(l, e, s), _i(t, e, null), r = !0, a || (i = Ve(
        e,
        "click",
        /*handle_copy*/
        n[21]
      ), a = !0);
    },
    p: hn,
    i(l) {
      r || (ct(t.$$.fragment, l), r = !0);
    },
    o(l) {
      It(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && at(e), gi(t), a = !1, i();
    }
  };
}
function Cb(n) {
  let e, t, r, a;
  return t = new Kv({}), {
    c() {
      e = dr("button"), pi(t.$$.fragment), this.h();
    },
    l(i) {
      e = hr(i, "BUTTON", {
        class: !0,
        "aria-label": !0,
        "aria-roledescription": !0
      });
      var l = Bn(e);
      mi(t.$$.fragment, l), l.forEach(at), this.h();
    },
    h() {
      ue(e, "class", "copy-button svelte-bj4kw9"), ue(e, "aria-label", "Copied"), ue(e, "aria-roledescription", "Text copied");
    },
    m(i, l) {
      l0(i, e, l), _i(t, e, null), a = !0;
    },
    p: hn,
    i(i) {
      a || (ct(t.$$.fragment, i), i && (r || wb(() => {
        r = yb(e, t1, { duration: 300 }), r.start();
      })), a = !0);
    },
    o(i) {
      It(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && at(e), gi(t);
    }
  };
}
function Fb(n) {
  let e;
  return {
    c() {
      e = c1(
        /*label*/
        n[3]
      );
    },
    l(t) {
      e = o1(
        t,
        /*label*/
        n[3]
      );
    },
    m(t, r) {
      l0(t, e, r);
    },
    p(t, r) {
      r[0] & /*label*/
      8 && u1(
        e,
        /*label*/
        t[3]
      );
    },
    d(t) {
      t && at(e);
    }
  };
}
function Mb(n) {
  let e, t, r, a, i, l;
  return {
    c() {
      e = dr("textarea"), this.h();
    },
    l(s) {
      e = hr(s, "TEXTAREA", {
        "data-testid": !0,
        class: !0,
        dir: !0,
        placeholder: !0,
        rows: !0,
        maxlength: !0,
        style: !0
      }), Bn(e).forEach(at), this.h();
    },
    h() {
      ue(e, "data-testid", "textbox"), ue(e, "class", "scroll-hide svelte-bj4kw9"), ue(e, "dir", t = /*rtl*/
      n[12] ? "rtl" : "ltr"), ue(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), ue(
        e,
        "rows",
        /*lines*/
        n[1]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ue(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ue(e, "style", r = /*text_align*/
      n[14] ? "text-align: " + /*text_align*/
      n[14] : ""), Fr(e, "no-label", !/*show_label*/
      n[6] && /*submit_btn*/
      (n[10] || /*stop_btn*/
      n[11]));
    },
    m(s, o) {
      l0(s, e, o), dn(
        e,
        /*value*/
        n[0]
      ), n[46](e), /*autofocus*/
      n[13] && e.focus(), i || (l = [
        bb(a = /*text_area_resize*/
        n[27].call(
          null,
          e,
          /*value*/
          n[0]
        )),
        Ve(
          e,
          "input",
          /*textarea_input_handler*/
          n[45]
        ),
        Ve(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ve(
          e,
          "blur",
          /*blur_handler_3*/
          n[37]
        ),
        Ve(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ve(
          e,
          "focus",
          /*focus_handler_3*/
          n[38]
        ),
        Ve(
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
      s[12] ? "rtl" : "ltr") && ue(e, "dir", t), o[0] & /*placeholder*/
      4 && ue(
        e,
        "placeholder",
        /*placeholder*/
        s[2]
      ), o[0] & /*lines*/
      2 && ue(
        e,
        "rows",
        /*lines*/
        s[1]
      ), o[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      s[5]), o[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      s[13]), o[0] & /*max_length*/
      32768 && ue(
        e,
        "maxlength",
        /*max_length*/
        s[15]
      ), o[0] & /*text_align*/
      16384 && r !== (r = /*text_align*/
      s[14] ? "text-align: " + /*text_align*/
      s[14] : "") && ue(e, "style", r), a && Db(a.update) && o[0] & /*value*/
      1 && a.update.call(
        null,
        /*value*/
        s[0]
      ), o[0] & /*value*/
      1 && dn(
        e,
        /*value*/
        s[0]
      ), o[0] & /*show_label, submit_btn, stop_btn*/
      3136 && Fr(e, "no-label", !/*show_label*/
      s[6] && /*submit_btn*/
      (s[10] || /*stop_btn*/
      s[11]));
    },
    d(s) {
      s && at(e), n[46](null), i = !1, ps(l);
    }
  };
}
function zb(n) {
  let e;
  function t(i, l) {
    if (
      /*type*/
      i[8] === "text"
    ) return Lb;
    if (
      /*type*/
      i[8] === "password"
    ) return Ib;
    if (
      /*type*/
      i[8] === "email"
    ) return Bb;
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
      a && a.m(i, l), l0(i, e, l);
    },
    p(i, l) {
      r === (r = t(i)) && a ? a.p(i, l) : (a && a.d(1), a = r && r(i), a && (a.c(), a.m(e.parentNode, e)));
    },
    d(i) {
      i && at(e), a && a.d(i);
    }
  };
}
function Bb(n) {
  let e, t, r;
  return {
    c() {
      e = dr("input"), this.h();
    },
    l(a) {
      e = hr(a, "INPUT", {
        "data-testid": !0,
        type: !0,
        class: !0,
        placeholder: !0,
        maxlength: !0,
        autocomplete: !0
      }), this.h();
    },
    h() {
      ue(e, "data-testid", "textbox"), ue(e, "type", "email"), ue(e, "class", "scroll-hide svelte-bj4kw9"), ue(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ue(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ue(e, "autocomplete", "email");
    },
    m(a, i) {
      l0(a, e, i), dn(
        e,
        /*value*/
        n[0]
      ), n[44](e), /*autofocus*/
      n[13] && e.focus(), t || (r = [
        Ve(
          e,
          "input",
          /*input_input_handler_2*/
          n[43]
        ),
        Ve(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ve(
          e,
          "blur",
          /*blur_handler_2*/
          n[35]
        ),
        Ve(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ve(
          e,
          "focus",
          /*focus_handler_2*/
          n[36]
        )
      ], t = !0);
    },
    p(a, i) {
      i[0] & /*placeholder*/
      4 && ue(
        e,
        "placeholder",
        /*placeholder*/
        a[2]
      ), i[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      a[5]), i[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      a[13]), i[0] & /*max_length*/
      32768 && ue(
        e,
        "maxlength",
        /*max_length*/
        a[15]
      ), i[0] & /*value*/
      1 && e.value !== /*value*/
      a[0] && dn(
        e,
        /*value*/
        a[0]
      );
    },
    d(a) {
      a && at(e), n[44](null), t = !1, ps(r);
    }
  };
}
function Ib(n) {
  let e, t, r;
  return {
    c() {
      e = dr("input"), this.h();
    },
    l(a) {
      e = hr(a, "INPUT", {
        "data-testid": !0,
        type: !0,
        class: !0,
        placeholder: !0,
        maxlength: !0,
        autocomplete: !0
      }), this.h();
    },
    h() {
      ue(e, "data-testid", "password"), ue(e, "type", "password"), ue(e, "class", "scroll-hide svelte-bj4kw9"), ue(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ue(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ue(e, "autocomplete", "");
    },
    m(a, i) {
      l0(a, e, i), dn(
        e,
        /*value*/
        n[0]
      ), n[42](e), /*autofocus*/
      n[13] && e.focus(), t || (r = [
        Ve(
          e,
          "input",
          /*input_input_handler_1*/
          n[41]
        ),
        Ve(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ve(
          e,
          "blur",
          /*blur_handler_1*/
          n[33]
        ),
        Ve(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ve(
          e,
          "focus",
          /*focus_handler_1*/
          n[34]
        )
      ], t = !0);
    },
    p(a, i) {
      i[0] & /*placeholder*/
      4 && ue(
        e,
        "placeholder",
        /*placeholder*/
        a[2]
      ), i[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      a[5]), i[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      a[13]), i[0] & /*max_length*/
      32768 && ue(
        e,
        "maxlength",
        /*max_length*/
        a[15]
      ), i[0] & /*value*/
      1 && e.value !== /*value*/
      a[0] && dn(
        e,
        /*value*/
        a[0]
      );
    },
    d(a) {
      a && at(e), n[42](null), t = !1, ps(r);
    }
  };
}
function Lb(n) {
  let e, t, r, a, i;
  return {
    c() {
      e = dr("input"), this.h();
    },
    l(l) {
      e = hr(l, "INPUT", {
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
      ue(e, "data-testid", "textbox"), ue(e, "type", "text"), ue(e, "class", "scroll-hide svelte-bj4kw9"), ue(e, "dir", t = /*rtl*/
      n[12] ? "rtl" : "ltr"), ue(
        e,
        "placeholder",
        /*placeholder*/
        n[2]
      ), e.disabled = /*disabled*/
      n[5], e.autofocus = /*autofocus*/
      n[13], ue(
        e,
        "maxlength",
        /*max_length*/
        n[15]
      ), ue(e, "style", r = /*text_align*/
      n[14] ? "text-align: " + /*text_align*/
      n[14] : "");
    },
    m(l, s) {
      l0(l, e, s), dn(
        e,
        /*value*/
        n[0]
      ), n[40](e), /*autofocus*/
      n[13] && e.focus(), a || (i = [
        Ve(
          e,
          "input",
          /*input_input_handler*/
          n[39]
        ),
        Ve(
          e,
          "keypress",
          /*handle_keypress*/
          n[23]
        ),
        Ve(
          e,
          "blur",
          /*blur_handler*/
          n[31]
        ),
        Ve(
          e,
          "select",
          /*handle_select*/
          n[22]
        ),
        Ve(
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
      l[12] ? "rtl" : "ltr") && ue(e, "dir", t), s[0] & /*placeholder*/
      4 && ue(
        e,
        "placeholder",
        /*placeholder*/
        l[2]
      ), s[0] & /*disabled*/
      32 && (e.disabled = /*disabled*/
      l[5]), s[0] & /*autofocus*/
      8192 && (e.autofocus = /*autofocus*/
      l[13]), s[0] & /*max_length*/
      32768 && ue(
        e,
        "maxlength",
        /*max_length*/
        l[15]
      ), s[0] & /*text_align*/
      16384 && r !== (r = /*text_align*/
      l[14] ? "text-align: " + /*text_align*/
      l[14] : "") && ue(e, "style", r), s[0] & /*value*/
      1 && e.value !== /*value*/
      l[0] && dn(
        e,
        /*value*/
        l[0]
      );
    },
    d(l) {
      l && at(e), n[40](null), a = !1, ps(i);
    }
  };
}
function ld(n) {
  let e, t, r, a, i, l;
  const s = [Rb, Nb], o = [];
  function u(c, d) {
    return (
      /*submit_btn*/
      c[10] === !0 ? 0 : 1
    );
  }
  return t = u(n), r = o[t] = s[t](n), {
    c() {
      e = dr("button"), r.c(), this.h();
    },
    l(c) {
      e = hr(c, "BUTTON", { class: !0 });
      var d = Bn(e);
      r.l(d), d.forEach(at), this.h();
    },
    h() {
      ue(e, "class", "submit-button svelte-bj4kw9"), Fr(
        e,
        "padded-button",
        /*submit_btn*/
        n[10] !== !0
      );
    },
    m(c, d) {
      l0(c, e, d), o[t].m(e, null), a = !0, i || (l = Ve(
        e,
        "click",
        /*handle_submit*/
        n[26]
      ), i = !0);
    },
    p(c, d) {
      let h = t;
      t = u(c), t === h ? o[t].p(c, d) : (ua(), It(o[h], 1, 1, () => {
        o[h] = null;
      }), oa(), r = o[t], r ? r.p(c, d) : (r = o[t] = s[t](c), r.c()), ct(r, 1), r.m(e, null)), (!a || d[0] & /*submit_btn*/
      1024) && Fr(
        e,
        "padded-button",
        /*submit_btn*/
        c[10] !== !0
      );
    },
    i(c) {
      a || (ct(r), a = !0);
    },
    o(c) {
      It(r), a = !1;
    },
    d(c) {
      c && at(e), o[t].d(), i = !1, l();
    }
  };
}
function Nb(n) {
  let e;
  return {
    c() {
      e = c1(
        /*submit_btn*/
        n[10]
      );
    },
    l(t) {
      e = o1(
        t,
        /*submit_btn*/
        n[10]
      );
    },
    m(t, r) {
      l0(t, e, r);
    },
    p(t, r) {
      r[0] & /*submit_btn*/
      1024 && u1(
        e,
        /*submit_btn*/
        t[10]
      );
    },
    i: hn,
    o: hn,
    d(t) {
      t && at(e);
    }
  };
}
function Rb(n) {
  let e, t;
  return e = new ob({}), {
    c() {
      pi(e.$$.fragment);
    },
    l(r) {
      mi(e.$$.fragment, r);
    },
    m(r, a) {
      _i(e, r, a), t = !0;
    },
    p: hn,
    i(r) {
      t || (ct(e.$$.fragment, r), t = !0);
    },
    o(r) {
      It(e.$$.fragment, r), t = !1;
    },
    d(r) {
      gi(e, r);
    }
  };
}
function sd(n) {
  let e, t, r, a, i, l;
  const s = [qb, Ob], o = [];
  function u(c, d) {
    return (
      /*stop_btn*/
      c[11] === !0 ? 0 : 1
    );
  }
  return t = u(n), r = o[t] = s[t](n), {
    c() {
      e = dr("button"), r.c(), this.h();
    },
    l(c) {
      e = hr(c, "BUTTON", { class: !0 });
      var d = Bn(e);
      r.l(d), d.forEach(at), this.h();
    },
    h() {
      ue(e, "class", "stop-button svelte-bj4kw9"), Fr(
        e,
        "padded-button",
        /*stop_btn*/
        n[11] !== !0
      );
    },
    m(c, d) {
      l0(c, e, d), o[t].m(e, null), a = !0, i || (l = Ve(
        e,
        "click",
        /*handle_stop*/
        n[25]
      ), i = !0);
    },
    p(c, d) {
      let h = t;
      t = u(c), t === h ? o[t].p(c, d) : (ua(), It(o[h], 1, 1, () => {
        o[h] = null;
      }), oa(), r = o[t], r ? r.p(c, d) : (r = o[t] = s[t](c), r.c()), ct(r, 1), r.m(e, null)), (!a || d[0] & /*stop_btn*/
      2048) && Fr(
        e,
        "padded-button",
        /*stop_btn*/
        c[11] !== !0
      );
    },
    i(c) {
      a || (ct(r), a = !0);
    },
    o(c) {
      It(r), a = !1;
    },
    d(c) {
      c && at(e), o[t].d(), i = !1, l();
    }
  };
}
function Ob(n) {
  let e;
  return {
    c() {
      e = c1(
        /*stop_btn*/
        n[11]
      );
    },
    l(t) {
      e = o1(
        t,
        /*stop_btn*/
        n[11]
      );
    },
    m(t, r) {
      l0(t, e, r);
    },
    p(t, r) {
      r[0] & /*stop_btn*/
      2048 && u1(
        e,
        /*stop_btn*/
        t[11]
      );
    },
    i: hn,
    o: hn,
    d(t) {
      t && at(e);
    }
  };
}
function qb(n) {
  let e, t;
  return e = new gb({
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
    p: hn,
    i(r) {
      t || (ct(e.$$.fragment, r), t = !0);
    },
    o(r) {
      It(e.$$.fragment, r), t = !1;
    },
    d(r) {
      gi(e, r);
    }
  };
}
function Pb(n) {
  let e, t, r, a, i, l, s, o, u = (
    /*show_label*/
    n[6] && /*show_copy_button*/
    n[9] && id(n)
  );
  r = new Vv({
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
      $$slots: { default: [Fb] },
      $$scope: { ctx: n }
    }
  });
  function c(b, D) {
    return (
      /*lines*/
      b[1] === 1 && /*_max_lines*/
      b[18] === 1 ? zb : Mb
    );
  }
  let d = c(n), h = d(n), p = (
    /*submit_btn*/
    n[10] && ld(n)
  ), _ = (
    /*stop_btn*/
    n[11] && sd(n)
  );
  return {
    c() {
      e = dr("label"), u && u.c(), t = ml(), pi(r.$$.fragment), a = ml(), i = dr("div"), h.c(), l = ml(), p && p.c(), s = ml(), _ && _.c(), this.h();
    },
    l(b) {
      e = hr(b, "LABEL", { class: !0 });
      var D = Bn(e);
      u && u.l(D), t = dl(D), mi(r.$$.fragment, D), a = dl(D), i = hr(D, "DIV", { class: !0 });
      var y = Bn(i);
      h.l(y), l = dl(y), p && p.l(y), s = dl(y), _ && _.l(y), y.forEach(at), D.forEach(at), this.h();
    },
    h() {
      ue(i, "class", "input-container svelte-bj4kw9"), ue(e, "class", "svelte-bj4kw9"), Fr(
        e,
        "container",
        /*container*/
        n[7]
      ), Fr(
        e,
        "show_textbox_border",
        /*show_textbox_border*/
        n[20]
      );
    },
    m(b, D) {
      l0(b, e, D), u && u.m(e, null), Oa(e, t), _i(r, e, null), Oa(e, a), Oa(e, i), h.m(i, null), Oa(i, l), p && p.m(i, null), Oa(i, s), _ && _.m(i, null), o = !0;
    },
    p(b, D) {
      /*show_label*/
      b[6] && /*show_copy_button*/
      b[9] ? u ? (u.p(b, D), D[0] & /*show_label, show_copy_button*/
      576 && ct(u, 1)) : (u = id(b), u.c(), ct(u, 1), u.m(e, t)) : u && (ua(), It(u, 1, 1, () => {
        u = null;
      }), oa());
      const y = {};
      D[0] & /*root*/
      65536 && (y.root = /*root*/
      b[16]), D[0] & /*show_label*/
      64 && (y.show_label = /*show_label*/
      b[6]), D[0] & /*info*/
      16 && (y.info = /*info*/
      b[4]), D[0] & /*label*/
      8 | D[1] & /*$$scope*/
      67108864 && (y.$$scope = { dirty: D, ctx: b }), r.$set(y), d === (d = c(b)) && h ? h.p(b, D) : (h.d(1), h = d(b), h && (h.c(), h.m(i, l))), /*submit_btn*/
      b[10] ? p ? (p.p(b, D), D[0] & /*submit_btn*/
      1024 && ct(p, 1)) : (p = ld(b), p.c(), ct(p, 1), p.m(i, s)) : p && (ua(), It(p, 1, 1, () => {
        p = null;
      }), oa()), /*stop_btn*/
      b[11] ? _ ? (_.p(b, D), D[0] & /*stop_btn*/
      2048 && ct(_, 1)) : (_ = sd(b), _.c(), ct(_, 1), _.m(i, null)) : _ && (ua(), It(_, 1, 1, () => {
        _ = null;
      }), oa()), (!o || D[0] & /*container*/
      128) && Fr(
        e,
        "container",
        /*container*/
        b[7]
      );
    },
    i(b) {
      o || (ct(u), ct(r.$$.fragment, b), ct(p), ct(_), o = !0);
    },
    o(b) {
      It(u), It(r.$$.fragment, b), It(p), It(_), o = !1;
    },
    d(b) {
      b && at(e), u && u.d(), gi(r), h.d(), p && p.d(), _ && _.d();
    }
  };
}
function Hb(n, e, t) {
  var r = this && this.__awaiter || function(U, Ie, Xe, G) {
    function Pe(de) {
      return de instanceof Xe ? de : new Xe(function(mt) {
        mt(de);
      });
    }
    return new (Xe || (Xe = Promise))(function(de, mt) {
      function _r(pt) {
        try {
          s0(G.next(pt));
        } catch (p0) {
          mt(p0);
        }
      }
      function Tt(pt) {
        try {
          s0(G.throw(pt));
        } catch (p0) {
          mt(p0);
        }
      }
      function s0(pt) {
        pt.done ? de(pt.value) : Pe(pt.value).then(_r, Tt);
      }
      s0((G = G.apply(U, Ie || [])).next());
    });
  };
  let { value: a = "" } = e, { value_is_output: i = !1 } = e, { lines: l = 1 } = e, { placeholder: s = "Type here..." } = e, { label: o } = e, { info: u = void 0 } = e, { disabled: c = !1 } = e, { show_label: d = !0 } = e, { container: h = !0 } = e, { max_lines: p = void 0 } = e, { type: _ = "text" } = e, { show_copy_button: b = !1 } = e, { submit_btn: D = null } = e, { stop_btn: y = null } = e, { rtl: k = !1 } = e, { autofocus: w = !1 } = e, { text_align: x = void 0 } = e, { autoscroll: E = !0 } = e, { max_length: T = void 0 } = e, { root: C } = e, F, I = !1, L, B, q = 0, J = !1, Y;
  const O = !D, te = xb();
  Eb(() => {
    B = F && F.offsetHeight + F.scrollTop > F.scrollHeight - 100;
  });
  const ie = () => {
    B && E && !J && F.scrollTo(0, F.scrollHeight);
  };
  function oe() {
    te("change", a), i || te("input");
  }
  Sb(() => {
    w && F.focus(), B && E && ie(), t(28, i = !1);
  });
  function ye() {
    return r(this, void 0, void 0, function* () {
      "clipboard" in navigator && (yield navigator.clipboard.writeText(a), te("copy", { value: a }), we());
    });
  }
  function we() {
    t(19, I = !0), L && clearTimeout(L), L = setTimeout(
      () => {
        t(19, I = !1);
      },
      1e3
    );
  }
  function $(U) {
    const Ie = U.target, Xe = Ie.value, G = [Ie.selectionStart, Ie.selectionEnd];
    te("select", { value: Xe.substring(...G), index: G });
  }
  function fe(U) {
    return r(this, void 0, void 0, function* () {
      yield ad(), (U.key === "Enter" && U.shiftKey && l > 1 || U.key === "Enter" && !U.shiftKey && l === 1 && Y >= 1) && (U.preventDefault(), te("submit"));
    });
  }
  function ve(U) {
    const Ie = U.target, Xe = Ie.scrollTop;
    Xe < q && (J = !0), q = Xe;
    const G = Ie.scrollHeight - Ie.clientHeight;
    Xe >= G && (J = !1);
  }
  function Oe() {
    te("stop");
  }
  function P() {
    te("submit");
  }
  function Fe(U) {
    return r(this, void 0, void 0, function* () {
      if (yield ad(), l === Y) return;
      const Ie = U.target, Xe = window.getComputedStyle(Ie), G = parseFloat(Xe.paddingTop), Pe = parseFloat(Xe.paddingBottom), de = parseFloat(Xe.lineHeight);
      let mt = Y === void 0 ? !1 : G + Pe + de * Y, _r = G + Pe + l * de;
      Ie.style.height = "1px";
      let Tt;
      mt && Ie.scrollHeight > mt ? Tt = mt : Ie.scrollHeight < _r ? Tt = _r : Tt = Ie.scrollHeight, Ie.style.height = `${Tt}px`;
    });
  }
  function Ce(U, Ie) {
    if (l !== Y && (U.style.overflowY = "scroll", U.addEventListener("input", Fe), !!Ie.trim()))
      return Fe({ target: U }), {
        destroy: () => U.removeEventListener("input", Fe)
      };
  }
  function V(U) {
    Qr.call(this, n, U);
  }
  function Ae(U) {
    Qr.call(this, n, U);
  }
  function ke(U) {
    Qr.call(this, n, U);
  }
  function xe(U) {
    Qr.call(this, n, U);
  }
  function $e(U) {
    Qr.call(this, n, U);
  }
  function je(U) {
    Qr.call(this, n, U);
  }
  function Ne(U) {
    Qr.call(this, n, U);
  }
  function et(U) {
    Qr.call(this, n, U);
  }
  function yt() {
    a = this.value, t(0, a);
  }
  function ot(U) {
    hl[U ? "unshift" : "push"](() => {
      F = U, t(17, F);
    });
  }
  function We() {
    a = this.value, t(0, a);
  }
  function dt(U) {
    hl[U ? "unshift" : "push"](() => {
      F = U, t(17, F);
    });
  }
  function Hr() {
    a = this.value, t(0, a);
  }
  function Ur(U) {
    hl[U ? "unshift" : "push"](() => {
      F = U, t(17, F);
    });
  }
  function R() {
    a = this.value, t(0, a);
  }
  function B0(U) {
    hl[U ? "unshift" : "push"](() => {
      F = U, t(17, F);
    });
  }
  return n.$$set = (U) => {
    "value" in U && t(0, a = U.value), "value_is_output" in U && t(28, i = U.value_is_output), "lines" in U && t(1, l = U.lines), "placeholder" in U && t(2, s = U.placeholder), "label" in U && t(3, o = U.label), "info" in U && t(4, u = U.info), "disabled" in U && t(5, c = U.disabled), "show_label" in U && t(6, d = U.show_label), "container" in U && t(7, h = U.container), "max_lines" in U && t(29, p = U.max_lines), "type" in U && t(8, _ = U.type), "show_copy_button" in U && t(9, b = U.show_copy_button), "submit_btn" in U && t(10, D = U.submit_btn), "stop_btn" in U && t(11, y = U.stop_btn), "rtl" in U && t(12, k = U.rtl), "autofocus" in U && t(13, w = U.autofocus), "text_align" in U && t(14, x = U.text_align), "autoscroll" in U && t(30, E = U.autoscroll), "max_length" in U && t(15, T = U.max_length), "root" in U && t(16, C = U.root);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*max_lines, type, lines*/
    536871170 && (p === void 0 ? _ === "text" ? t(18, Y = Math.max(l, 20)) : t(18, Y = 1) : t(18, Y = Math.max(p, l))), n.$$.dirty[0] & /*value*/
    1 && a === null && t(0, a = ""), n.$$.dirty[0] & /*value, el, lines, _max_lines*/
    393219 && F && l !== Y && Fe({ target: F }), n.$$.dirty[0] & /*value*/
    1 && oe();
  }, [
    a,
    l,
    s,
    o,
    u,
    c,
    d,
    h,
    _,
    b,
    D,
    y,
    k,
    w,
    x,
    T,
    C,
    F,
    Y,
    I,
    O,
    ye,
    $,
    fe,
    ve,
    Oe,
    P,
    Ce,
    i,
    p,
    E,
    V,
    Ae,
    ke,
    xe,
    $e,
    je,
    Ne,
    et,
    yt,
    ot,
    We,
    dt,
    Hr,
    Ur,
    R,
    B0
  ];
}
class Ub extends vb {
  constructor(e) {
    super(), kb(
      this,
      e,
      Hb,
      Pb,
      Ab,
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
  SvelteComponent: Vb,
  add_flush_callback: Gb,
  append_hydration: kr,
  attr: _t,
  bind: jb,
  binding_callbacks: Wb,
  check_outros: Sl,
  children: rn,
  claim_component: Nr,
  claim_element: nn,
  claim_space: pl,
  create_component: Rr,
  destroy_component: Or,
  detach: U0,
  element: an,
  group_outros: xl,
  init: Xb,
  insert_hydration: f1,
  is_function: Yb,
  listen: ku,
  mount_component: qr,
  noop: h1,
  run_all: Zb,
  safe_not_equal: Kb,
  space: gl,
  toggle_class: Za,
  transition_in: vt,
  transition_out: Bt
} = window.__gradio__svelte__internal;
function od(n) {
  let e, t, r, a;
  return t = new xu({}), {
    c() {
      e = an("div"), Rr(t.$$.fragment), this.h();
    },
    l(i) {
      e = nn(i, "DIV", { class: !0, style: !0 });
      var l = rn(e);
      Nr(t.$$.fragment, l), l.forEach(U0), this.h();
    },
    h() {
      _t(e, "class", "button svelte-1j1z049"), _t(e, "style", r = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`);
    },
    m(i, l) {
      f1(i, e, l), qr(t, e, null), a = !0;
    },
    p(i, l) {
      (!a || l & /*icon_button_color*/
      64 && r !== (r = `fill: ${/*icon_button_color*/
      i[6]}; stroke: ${/*icon_button_color*/
      i[6]}; color: ${/*icon_button_color*/
      i[6]};`)) && _t(e, "style", r);
    },
    i(i) {
      a || (vt(t.$$.fragment, i), a = !0);
    },
    o(i) {
      Bt(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && U0(e), Or(t);
    }
  };
}
function Jb(n) {
  let e, t;
  return e = new Mn({}), {
    c() {
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p: h1,
    i(r) {
      t || (vt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Bt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function Qb(n) {
  let e, t;
  return e = new ui({
    props: {
      audio_source_callback: (
        /*input_audio_source_callback*/
        n[3]
      ),
      stream_state: "open",
      icon: (
        /*is_mic_muted*/
        n[12] ? yu : Mn
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
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a & /*input_audio_source_callback*/
      8 && (i.audio_source_callback = /*input_audio_source_callback*/
      r[3]), a & /*is_mic_muted*/
      4096 && (i.icon = /*is_mic_muted*/
      r[12] ? yu : Mn), a & /*icon_button_color*/
      64 && (i.icon_button_color = /*icon_button_color*/
      r[6]), a & /*pulse_color*/
      128 && (i.pulse_color = /*pulse_color*/
      r[7]), e.$set(i);
    },
    i(r) {
      t || (vt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Bt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function ud(n) {
  let e, t, r, a, i, l, s, o, u;
  const c = [tw, ew, $b], d = [];
  function h(p, _) {
    return (
      /*stream_state*/
      p[8] === "open" ? 0 : (
        /*is_muted*/
        p[11] ? 1 : 2
      )
    );
  }
  return r = h(n), a = d[r] = c[r](n), {
    c() {
      e = an("button"), t = an("div"), a.c(), this.h();
    },
    l(p) {
      e = nn(p, "BUTTON", { class: !0, "aria-label": !0 });
      var _ = rn(e);
      t = nn(_, "DIV", { class: !0, style: !0 });
      var b = rn(t);
      a.l(b), b.forEach(U0), _.forEach(U0), this.h();
    },
    h() {
      _t(t, "class", "icon"), _t(t, "style", i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), _t(e, "class", "button svelte-1j1z049"), _t(e, "aria-label", l = /*is_muted*/
      n[11] ? "unmute audio" : "mute audio"), Za(
        e,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      );
    },
    m(p, _) {
      f1(p, e, _), kr(e, t), d[r].m(t, null), s = !0, o || (u = ku(e, "click", function() {
        Yb(
          /*toggleMute*/
          n[4]
        ) && n[4].apply(this, arguments);
      }), o = !0);
    },
    p(p, _) {
      n = p;
      let b = r;
      r = h(n), r === b ? d[r].p(n, _) : (xl(), Bt(d[b], 1, 1, () => {
        d[b] = null;
      }), Sl(), a = d[r], a ? a.p(n, _) : (a = d[r] = c[r](n), a.c()), vt(a, 1), a.m(t, null)), (!s || _ & /*icon_button_color*/
      64 && i !== (i = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`)) && _t(t, "style", i), (!s || _ & /*is_muted*/
      2048 && l !== (l = /*is_muted*/
      n[11] ? "unmute audio" : "mute audio")) && _t(e, "aria-label", l), (!s || _ & /*stream_state*/
      256) && Za(
        e,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      );
    },
    i(p) {
      s || (vt(a), s = !0);
    },
    o(p) {
      Bt(a), s = !1;
    },
    d(p) {
      p && U0(e), d[r].d(), o = !1, u();
    }
  };
}
function $b(n) {
  let e, t;
  return e = new Tl({}), {
    c() {
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p: h1,
    i(r) {
      t || (vt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Bt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function ew(n) {
  let e, t;
  return e = new Cl({}), {
    c() {
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p: h1,
    i(r) {
      t || (vt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Bt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function tw(n) {
  let e, t;
  return e = new ui({
    props: {
      audio_source_callback: (
        /*audio_source_callback*/
        n[2]
      ),
      stream_state: "open",
      icon: (
        /*is_muted*/
        n[11] ? Cl : Tl
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
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a & /*audio_source_callback*/
      4 && (i.audio_source_callback = /*audio_source_callback*/
      r[2]), a & /*is_muted*/
      2048 && (i.icon = /*is_muted*/
      r[11] ? Cl : Tl), a & /*icon_button_color*/
      64 && (i.icon_button_color = /*icon_button_color*/
      r[6]), a & /*pulse_color*/
      128 && (i.pulse_color = /*pulse_color*/
      r[7]), e.$set(i);
    },
    i(r) {
      t || (vt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Bt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function rw(n) {
  let e, t, r, a, i, l, s, o, u, c, d, h, p, _, b, D, y, k, w;
  function x(B) {
    n[17](B);
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
  n[0].textbox), t = new Ub({ props: E }), Wb.push(() => jb(t, "value", x)), t.$on(
    "submit",
    /*submit_handler*/
    n[18]
  );
  let T = (
    /*pending*/
    n[10] && od(n)
  );
  const C = [Qb, Jb], F = [];
  function I(B, q) {
    return (
      /*stream_state*/
      B[8] === "open" ? 0 : 1
    );
  }
  o = I(n), u = F[o] = C[o](n);
  let L = (
    /*mode*/
    n[9] === "send-receive" && ud(n)
  );
  return b = new Ed({ props: { fill: "none" } }), {
    c() {
      e = an("div"), Rr(t.$$.fragment), a = gl(), T && T.c(), i = gl(), l = an("button"), s = an("div"), u.c(), d = gl(), L && L.c(), h = gl(), p = an("button"), _ = an("div"), Rr(b.$$.fragment), this.h();
    },
    l(B) {
      e = nn(B, "DIV", { class: !0 });
      var q = rn(e);
      Nr(t.$$.fragment, q), a = pl(q), T && T.l(q), i = pl(q), l = nn(q, "BUTTON", { class: !0 });
      var J = rn(l);
      s = nn(J, "DIV", { class: !0, style: !0 });
      var Y = rn(s);
      u.l(Y), Y.forEach(U0), J.forEach(U0), d = pl(q), L && L.l(q), h = pl(q), p = nn(q, "BUTTON", { class: !0, "aria-label": !0 });
      var O = rn(p);
      _ = nn(O, "DIV", { class: !0, style: !0 });
      var te = rn(_);
      Nr(b.$$.fragment, te), te.forEach(U0), O.forEach(U0), q.forEach(U0), this.h();
    },
    h() {
      _t(s, "class", "icon"), _t(s, "style", c = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), _t(l, "class", "button svelte-1j1z049"), Za(l, "padded-button", !1), _t(_, "class", "icon"), _t(_, "style", D = `fill: ${/*icon_button_color*/
      n[6]}; stroke: ${/*icon_button_color*/
      n[6]}; color: ${/*icon_button_color*/
      n[6]};`), _t(p, "class", "button svelte-1j1z049"), _t(p, "aria-label", "stop stream"), Za(
        p,
        "hidden",
        /*stream_state*/
        n[8] === "closed"
      ), _t(e, "class", "input-container svelte-1j1z049");
    },
    m(B, q) {
      f1(B, e, q), qr(t, e, null), kr(e, a), T && T.m(e, null), kr(e, i), kr(e, l), kr(l, s), F[o].m(s, null), kr(e, d), L && L.m(e, null), kr(e, h), kr(e, p), kr(p, _), qr(b, _, null), y = !0, k || (w = [
        ku(
          l,
          "click",
          /*click_mic_icon*/
          n[13]
        ),
        ku(
          p,
          "click",
          /*click_stop_stream*/
          n[14]
        )
      ], k = !0);
    },
    p(B, q) {
      const J = {};
      q & /*pending*/
      1024 && (J.submit_btn = !/*pending*/
      B[10]), q & /*pending*/
      1024 && (J.disabled = /*pending*/
      B[10]), !r && q & /*value*/
      1 && (r = !0, J.value = /*value*/
      B[0].textbox, Gb(() => r = !1)), t.$set(J), /*pending*/
      B[10] ? T ? (T.p(B, q), q & /*pending*/
      1024 && vt(T, 1)) : (T = od(B), T.c(), vt(T, 1), T.m(e, i)) : T && (xl(), Bt(T, 1, 1, () => {
        T = null;
      }), Sl());
      let Y = o;
      o = I(B), o === Y ? F[o].p(B, q) : (xl(), Bt(F[Y], 1, 1, () => {
        F[Y] = null;
      }), Sl(), u = F[o], u ? u.p(B, q) : (u = F[o] = C[o](B), u.c()), vt(u, 1), u.m(s, null)), (!y || q & /*icon_button_color*/
      64 && c !== (c = `fill: ${/*icon_button_color*/
      B[6]}; stroke: ${/*icon_button_color*/
      B[6]}; color: ${/*icon_button_color*/
      B[6]};`)) && _t(s, "style", c), /*mode*/
      B[9] === "send-receive" ? L ? (L.p(B, q), q & /*mode*/
      512 && vt(L, 1)) : (L = ud(B), L.c(), vt(L, 1), L.m(e, h)) : L && (xl(), Bt(L, 1, 1, () => {
        L = null;
      }), Sl()), (!y || q & /*icon_button_color*/
      64 && D !== (D = `fill: ${/*icon_button_color*/
      B[6]}; stroke: ${/*icon_button_color*/
      B[6]}; color: ${/*icon_button_color*/
      B[6]};`)) && _t(_, "style", D), (!y || q & /*stream_state*/
      256) && Za(
        p,
        "hidden",
        /*stream_state*/
        B[8] === "closed"
      );
    },
    i(B) {
      y || (vt(t.$$.fragment, B), vt(T), vt(u), vt(L), vt(b.$$.fragment, B), y = !0);
    },
    o(B) {
      Bt(t.$$.fragment, B), Bt(T), Bt(u), Bt(L), Bt(b.$$.fragment, B), y = !1;
    },
    d(B) {
      B && U0(e), Or(t), T && T.d(), F[o].d(), L && L.d(), Or(b), k = !1, Zb(w);
    }
  };
}
function nw(n) {
  let e, t;
  return e = new Ad({
    props: {
      $$slots: { default: [rw] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Rr(e.$$.fragment);
    },
    l(r) {
      Nr(e.$$.fragment, r);
    },
    m(r, a) {
      qr(e, r, a), t = !0;
    },
    p(r, [a]) {
      const i = {};
      a & /*$$scope, stream_state, icon_button_color, is_muted, toggleMute, audio_source_callback, pulse_color, mode, input_audio_source_callback, is_mic_muted, pending, value, start_stream, on_change_cb*/
      1056767 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (vt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Bt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Or(e, r);
    }
  };
}
function aw(n, e, t) {
  var r = this && this.__awaiter || function(C, F, I, L) {
    function B(q) {
      return q instanceof I ? q : new I(function(J) {
        J(q);
      });
    }
    return new (I || (I = Promise))(function(q, J) {
      function Y(ie) {
        try {
          te(L.next(ie));
        } catch (oe) {
          J(oe);
        }
      }
      function O(ie) {
        try {
          te(L.throw(ie));
        } catch (oe) {
          J(oe);
        }
      }
      function te(ie) {
        ie.done ? q(ie.value) : B(ie.value).then(Y, O);
      }
      te((L = L.apply(C, F || [])).next());
    });
  };
  let { value: a = null } = e, { access_mic: i } = e, { start_stream: l } = e, { audio_source_callback: s } = e, { input_audio_source_callback: o } = e, { toggleMuteMicrophone: u } = e, { toggleMute: c } = e, { on_change_cb: d } = e, { icon_button_color: h = "var(--color-accent)" } = e, { pulse_color: p = "var(--color-accent)" } = e, { stream_state: _ = "closed" } = e, { mode: b = "send-receive" } = e, { pending: D = !1 } = e, { is_muted: y = !1 } = e, { is_mic_muted: k = !1 } = e;
  function w() {
    _ === "open" ? u() : (i(), l());
  }
  function x() {
    return r(this, void 0, void 0, function* () {
      yield l();
    });
  }
  function E(C) {
    n.$$.not_equal(a.textbox, C) && (a.textbox = C, t(0, a));
  }
  const T = async () => {
    if (_ === "closed")
      for (await l(); _ !== "open"; )
        await new Promise((C) => setTimeout(C, 100));
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
  return n.$$set = (C) => {
    "value" in C && t(0, a = C.value), "access_mic" in C && t(15, i = C.access_mic), "start_stream" in C && t(1, l = C.start_stream), "audio_source_callback" in C && t(2, s = C.audio_source_callback), "input_audio_source_callback" in C && t(3, o = C.input_audio_source_callback), "toggleMuteMicrophone" in C && t(16, u = C.toggleMuteMicrophone), "toggleMute" in C && t(4, c = C.toggleMute), "on_change_cb" in C && t(5, d = C.on_change_cb), "icon_button_color" in C && t(6, h = C.icon_button_color), "pulse_color" in C && t(7, p = C.pulse_color), "stream_state" in C && t(8, _ = C.stream_state), "mode" in C && t(9, b = C.mode), "pending" in C && t(10, D = C.pending), "is_muted" in C && t(11, y = C.is_muted), "is_mic_muted" in C && t(12, k = C.is_mic_muted);
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
    h,
    p,
    _,
    b,
    D,
    y,
    k,
    w,
    x,
    i,
    u,
    E,
    T
  ];
}
class iw extends Vb {
  constructor(e) {
    super(), Xb(this, e, aw, nw, Kb, {
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
  SvelteComponent: lw,
  action_destroyer: sw,
  add_flush_callback: _l,
  add_render_callback: ow,
  append_hydration: rt,
  attr: _e,
  bind: vl,
  binding_callbacks: aa,
  bubble: Xo,
  check_outros: tr,
  children: it,
  claim_component: Yt,
  claim_element: lt,
  claim_space: h0,
  claim_text: vi,
  create_component: Zt,
  create_in_transition: uw,
  destroy_component: Kt,
  destroy_each: cw,
  detach: ge,
  element: st,
  empty: cd,
  ensure_array_like: fd,
  group_outros: rr,
  init: fw,
  insert_hydration: xt,
  listen: G0,
  mount_component: Jt,
  noop: d1,
  run_all: Fm,
  safe_not_equal: hw,
  set_data: bi,
  set_input_value: Du,
  set_style: dw,
  space: d0,
  stop_propagation: mw,
  text: wi,
  toggle_class: Au,
  transition_in: pe,
  transition_out: De
} = window.__gradio__svelte__internal, { createEventDispatcher: pw } = window.__gradio__svelte__internal, { onMount: gw } = window.__gradio__svelte__internal;
function hd(n, e, t) {
  const r = n.slice();
  return r[60] = e[t], r;
}
function dd(n) {
  let e, t;
  return e = new ss({
    props: {
      show_label: (
        /*show_label*/
        n[3]
      ),
      Icon: Eu,
      float: !1,
      label: (
        /*label*/
        n[2] || /*i18n*/
        n[4]("audio.audio")
      )
    }
  }), {
    c() {
      Zt(e.$$.fragment);
    },
    l(r) {
      Yt(e.$$.fragment, r);
    },
    m(r, a) {
      Jt(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*show_label*/
      8 && (i.show_label = /*show_label*/
      r[3]), a[0] & /*label, i18n*/
      20 && (i.label = /*label*/
      r[2] || /*i18n*/
      r[4]("audio.audio")), e.$set(i);
    },
    i(r) {
      t || (pe(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Kt(e, r);
    }
  };
}
function _w(n) {
  let e, t, r, a, i, l, s, o, u, c, d, h = (
    /*stream_state*/
    n[13] === "open" && /*mode*/
    n[1].includes("send")
  ), p, _, b, D;
  e = new Dm({
    props: {
      audio_source_callback: (
        /*audio_source_callback*/
        n[24]
      ),
      stream_state: (
        /*stream_state*/
        n[13]
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
      )
    }
  }), r = new cm({
    props: { time_limit: (
      /*_time_limit*/
      n[17]
    ) }
  });
  const y = [kw, yw, ww], k = [];
  function w(F, I) {
    return (
      /*stream_state*/
      F[13] === "waiting" ? 0 : (
        /*stream_state*/
        F[13] === "open" ? 1 : 2
      )
    );
  }
  s = w(n), o = k[s] = y[s](n);
  let x = (
    /*stream_state*/
    n[13] === "closed" && md(n)
  ), E = (
    /*stream_state*/
    n[13] === "open" && /*mode*/
    n[1] === "send-receive" && pd(n)
  ), T = h && gd(n), C = (
    /*options_open*/
    n[16] && /*selected_device*/
    n[20] && _d(n)
  );
  return {
    c() {
      Zt(e.$$.fragment), t = d0(), Zt(r.$$.fragment), a = d0(), i = st("div"), l = st("button"), o.c(), u = d0(), x && x.c(), c = d0(), E && E.c(), d = d0(), T && T.c(), p = d0(), C && C.c(), this.h();
    },
    l(F) {
      Yt(e.$$.fragment, F), t = h0(F), Yt(r.$$.fragment, F), a = h0(F), i = lt(F, "DIV", { class: !0 });
      var I = it(i);
      l = lt(I, "BUTTON", { "aria-label": !0, class: !0 });
      var L = it(l);
      o.l(L), L.forEach(ge), u = h0(I), x && x.l(I), c = h0(I), E && E.l(I), d = h0(I), T && T.l(I), p = h0(I), C && C.l(I), I.forEach(ge), this.h();
    },
    h() {
      _e(l, "aria-label", "start stream"), _e(l, "class", "svelte-k2wuss"), _e(i, "class", "button-wrap svelte-k2wuss"), Au(
        i,
        "pulse",
        /*stopword_recognized*/
        n[12]
      );
    },
    m(F, I) {
      Jt(e, F, I), xt(F, t, I), Jt(r, F, I), xt(F, a, I), xt(F, i, I), rt(i, l), k[s].m(l, null), n[52](l), rt(i, u), x && x.m(i, null), rt(i, c), E && E.m(i, null), rt(i, d), T && T.m(i, null), rt(i, p), C && C.m(i, null), _ = !0, b || (D = G0(
        l,
        "click",
        /*start_stream*/
        n[27]
      ), b = !0);
    },
    p(F, I) {
      const L = {};
      I[0] & /*stream_state*/
      8192 && (L.stream_state = /*stream_state*/
      F[13]), I[0] & /*icon*/
      64 && (L.icon = /*icon*/
      F[6]), I[0] & /*icon_button_color*/
      128 && (L.icon_button_color = /*icon_button_color*/
      F[7]), I[0] & /*pulse_color*/
      256 && (L.pulse_color = /*pulse_color*/
      F[8]), I[0] & /*pending*/
      32768 && (L.pending = /*pending*/
      F[15]), I[0] & /*icon_radius*/
      512 && (L.icon_radius = /*icon_radius*/
      F[9]), e.$set(L);
      const B = {};
      I[0] & /*_time_limit*/
      131072 && (B.time_limit = /*_time_limit*/
      F[17]), r.$set(B);
      let q = s;
      s = w(F), s === q ? k[s].p(F, I) : (rr(), De(k[q], 1, 1, () => {
        k[q] = null;
      }), tr(), o = k[s], o ? o.p(F, I) : (o = k[s] = y[s](F), o.c()), pe(o, 1), o.m(l, null)), /*stream_state*/
      F[13] === "closed" ? x ? (x.p(F, I), I[0] & /*stream_state*/
      8192 && pe(x, 1)) : (x = md(F), x.c(), pe(x, 1), x.m(i, c)) : x && (rr(), De(x, 1, 1, () => {
        x = null;
      }), tr()), /*stream_state*/
      F[13] === "open" && /*mode*/
      F[1] === "send-receive" ? E ? (E.p(F, I), I[0] & /*stream_state, mode*/
      8194 && pe(E, 1)) : (E = pd(F), E.c(), pe(E, 1), E.m(i, d)) : E && (rr(), De(E, 1, 1, () => {
        E = null;
      }), tr()), I[0] & /*stream_state, mode*/
      8194 && (h = /*stream_state*/
      F[13] === "open" && /*mode*/
      F[1].includes("send")), h ? T ? (T.p(F, I), I[0] & /*stream_state, mode*/
      8194 && pe(T, 1)) : (T = gd(F), T.c(), pe(T, 1), T.m(i, p)) : T && (rr(), De(T, 1, 1, () => {
        T = null;
      }), tr()), /*options_open*/
      F[16] && /*selected_device*/
      F[20] ? C ? (C.p(F, I), I[0] & /*options_open, selected_device*/
      1114112 && pe(C, 1)) : (C = _d(F), C.c(), pe(C, 1), C.m(i, null)) : C && (rr(), De(C, 1, 1, () => {
        C = null;
      }), tr()), (!_ || I[0] & /*stopword_recognized*/
      4096) && Au(
        i,
        "pulse",
        /*stopword_recognized*/
        F[12]
      );
    },
    i(F) {
      _ || (pe(e.$$.fragment, F), pe(r.$$.fragment, F), pe(o), pe(x), pe(E), pe(T), pe(C), _ = !0);
    },
    o(F) {
      De(e.$$.fragment, F), De(r.$$.fragment, F), De(o), De(x), De(E), De(T), De(C), _ = !1;
    },
    d(F) {
      F && (ge(t), ge(a), ge(i)), Kt(e, F), Kt(r, F), k[s].d(), n[52](null), x && x.d(), E && E.d(), T && T.d(), C && C.d(), b = !1, D();
    }
  };
}
function vw(n) {
  let e, t, r, a;
  return t = new _m({ props: { icon: Mn } }), t.$on(
    "click",
    /*click_handler*/
    n[51]
  ), {
    c() {
      e = st("div"), Zt(t.$$.fragment), this.h();
    },
    l(i) {
      e = lt(i, "DIV", { title: !0, style: !0 });
      var l = it(e);
      Yt(t.$$.fragment, l), l.forEach(ge), this.h();
    },
    h() {
      _e(e, "title", "grant webcam access"), dw(e, "height", "100%");
    },
    m(i, l) {
      xt(i, e, l), Jt(t, e, null), a = !0;
    },
    p: d1,
    i(i) {
      a || (pe(t.$$.fragment, i), i && (r || ow(() => {
        r = uw(e, t1, { delay: 100, duration: 200 }), r.start();
      })), a = !0);
    },
    o(i) {
      De(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && ge(e), Kt(t);
    }
  };
}
function bw(n) {
  let e, t, r, a, i, l;
  function s(h) {
    n[47](h);
  }
  function o(h) {
    n[48](h);
  }
  function u(h) {
    n[49](h);
  }
  function c(h) {
    n[50](h);
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
    n[13] !== void 0 && (d.stream_state = /*stream_state*/
    n[13]), /*is_muted*/
    n[21] !== void 0 && (d.is_muted = /*is_muted*/
    n[21]), /*is_mic_muted*/
    n[22] !== void 0 && (d.is_mic_muted = /*is_mic_muted*/
    n[22]), e = new iw({ props: d }), aa.push(() => vl(e, "value", s)), aa.push(() => vl(e, "stream_state", o)), aa.push(() => vl(e, "is_muted", u)), aa.push(() => vl(e, "is_mic_muted", c)), {
      c() {
        Zt(e.$$.fragment);
      },
      l(h) {
        Yt(e.$$.fragment, h);
      },
      m(h, p) {
        Jt(e, h, p), l = !0;
      },
      p(h, p) {
        const _ = {};
        p[0] & /*on_change_cb*/
        32 && (_.on_change_cb = /*on_change_cb*/
        h[5]), p[0] & /*mode*/
        2 && (_.mode = /*mode*/
        h[1]), p[0] & /*icon_button_color*/
        128 && (_.icon_button_color = /*icon_button_color*/
        h[7]), p[0] & /*pulse_color*/
        256 && (_.pulse_color = /*pulse_color*/
        h[8]), p[0] & /*pending*/
        32768 && (_.pending = /*pending*/
        h[15]), !t && p[0] & /*value*/
        1 && (t = !0, _.value = /*value*/
        h[0], _l(() => t = !1)), !r && p[0] & /*stream_state*/
        8192 && (r = !0, _.stream_state = /*stream_state*/
        h[13], _l(() => r = !1)), !a && p[0] & /*is_muted*/
        2097152 && (a = !0, _.is_muted = /*is_muted*/
        h[21], _l(() => a = !1)), !i && p[0] & /*is_mic_muted*/
        4194304 && (i = !0, _.is_mic_muted = /*is_mic_muted*/
        h[22], _l(() => i = !1)), e.$set(_);
      },
      i(h) {
        l || (pe(e.$$.fragment, h), l = !0);
      },
      o(h) {
        De(e.$$.fragment, h), l = !1;
      },
      d(h) {
        Kt(e, h);
      }
    }
  );
}
function ww(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[10].start || /*i18n*/
    n[4]("audio.record")) + ""
  ), l, s;
  return r = new Kl({}), {
    c() {
      e = st("div"), t = st("div"), Zt(r.$$.fragment), a = d0(), l = wi(i), this.h();
    },
    l(o) {
      e = lt(o, "DIV", { class: !0 });
      var u = it(e);
      t = lt(u, "DIV", { class: !0, title: !0 });
      var c = it(t);
      Yt(r.$$.fragment, c), c.forEach(ge), a = h0(u), l = vi(u, i), u.forEach(ge), this.h();
    },
    h() {
      _e(t, "class", "icon color-primary svelte-k2wuss"), _e(t, "title", "start recording"), _e(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, u) {
      xt(o, e, u), rt(e, t), Jt(r, t, null), rt(e, a), rt(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels, i18n*/
      1040) && i !== (i = /*button_labels*/
      (o[10].start || /*i18n*/
      o[4]("audio.record")) + "") && bi(l, i);
    },
    i(o) {
      s || (pe(r.$$.fragment, o), s = !0);
    },
    o(o) {
      De(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && ge(e), Kt(r);
    }
  };
}
function yw(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[10].stop || /*i18n*/
    n[4]("audio.stop")) + ""
  ), l, s;
  const o = [Aw, Dw], u = [];
  function c(d, h) {
    return (
      /*mode*/
      d[1] === "send-receive" ? 0 : 1
    );
  }
  return t = c(n), r = u[t] = o[t](n), {
    c() {
      e = st("div"), r.c(), a = d0(), l = wi(i), this.h();
    },
    l(d) {
      e = lt(d, "DIV", { class: !0 });
      var h = it(e);
      r.l(h), a = h0(h), l = vi(h, i), h.forEach(ge), this.h();
    },
    h() {
      _e(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(d, h) {
      xt(d, e, h), u[t].m(e, null), rt(e, a), rt(e, l), s = !0;
    },
    p(d, h) {
      let p = t;
      t = c(d), t === p ? u[t].p(d, h) : (rr(), De(u[p], 1, 1, () => {
        u[p] = null;
      }), tr(), r = u[t], r ? r.p(d, h) : (r = u[t] = o[t](d), r.c()), pe(r, 1), r.m(e, a)), (!s || h[0] & /*button_labels, i18n*/
      1040) && i !== (i = /*button_labels*/
      (d[10].stop || /*i18n*/
      d[4]("audio.stop")) + "") && bi(l, i);
    },
    i(d) {
      s || (pe(r), s = !0);
    },
    o(d) {
      De(r), s = !1;
    },
    d(d) {
      d && ge(e), u[t].d();
    }
  };
}
function kw(n) {
  let e, t, r, a, i = (
    /*button_labels*/
    (n[10].waiting || "Connecting...") + ""
  ), l, s;
  return r = new xu({}), {
    c() {
      e = st("div"), t = st("div"), Zt(r.$$.fragment), a = d0(), l = wi(i), this.h();
    },
    l(o) {
      e = lt(o, "DIV", { class: !0 });
      var u = it(e);
      t = lt(u, "DIV", { class: !0, title: !0 });
      var c = it(t);
      Yt(r.$$.fragment, c), c.forEach(ge), a = h0(u), l = vi(u, i), u.forEach(ge), this.h();
    },
    h() {
      _e(t, "class", "icon color-primary svelte-k2wuss"), _e(t, "title", "spinner"), _e(e, "class", "icon-with-text svelte-k2wuss");
    },
    m(o, u) {
      xt(o, e, u), rt(e, t), Jt(r, t, null), rt(e, a), rt(e, l), s = !0;
    },
    p(o, u) {
      (!s || u[0] & /*button_labels*/
      1024) && i !== (i = /*button_labels*/
      (o[10].waiting || "Connecting...") + "") && bi(l, i);
    },
    i(o) {
      s || (pe(r.$$.fragment, o), s = !0);
    },
    o(o) {
      De(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && ge(e), Kt(r);
    }
  };
}
function Dw(n) {
  let e, t, r;
  return t = new Kl({}), {
    c() {
      e = st("div"), Zt(t.$$.fragment), this.h();
    },
    l(a) {
      e = lt(a, "DIV", { class: !0, title: !0 });
      var i = it(e);
      Yt(t.$$.fragment, i), i.forEach(ge), this.h();
    },
    h() {
      _e(e, "class", "icon color-primary svelte-k2wuss"), _e(e, "title", "start recording");
    },
    m(a, i) {
      xt(a, e, i), Jt(t, e, null), r = !0;
    },
    p: d1,
    i(a) {
      r || (pe(t.$$.fragment, a), r = !0);
    },
    o(a) {
      De(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && ge(e), Kt(t);
    }
  };
}
function Aw(n) {
  let e, t, r, a;
  return t = new ui({
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
      )
    }
  }), {
    c() {
      e = st("div"), Zt(t.$$.fragment), this.h();
    },
    l(i) {
      e = lt(i, "DIV", { class: !0, title: !0, style: !0 });
      var l = it(e);
      Yt(t.$$.fragment, l), l.forEach(ge), this.h();
    },
    h() {
      _e(e, "class", "icon svelte-k2wuss"), _e(e, "title", "stop recording"), _e(e, "style", r = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`);
    },
    m(i, l) {
      xt(i, e, l), Jt(t, e, null), a = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*icon_button_color*/
      128 && (s.icon_button_color = /*icon_button_color*/
      i[7]), l[0] & /*pulse_color*/
      256 && (s.pulse_color = /*pulse_color*/
      i[8]), t.$set(s), (!a || l[0] & /*icon_button_color*/
      128 && r !== (r = `fill: ${/*icon_button_color*/
      i[7]}; stroke: ${/*icon_button_color*/
      i[7]}; color: ${/*icon_button_color*/
      i[7]};`)) && _e(e, "style", r);
    },
    i(i) {
      a || (pe(t.$$.fragment, i), a = !0);
    },
    o(i) {
      De(t.$$.fragment, i), a = !1;
    },
    d(i) {
      i && ge(e), Kt(t);
    }
  };
}
function md(n) {
  let e, t, r, a, i;
  return t = new Jl({}), {
    c() {
      e = st("button"), Zt(t.$$.fragment), this.h();
    },
    l(l) {
      e = lt(l, "BUTTON", { class: !0, "aria-label": !0 });
      var s = it(e);
      Yt(t.$$.fragment, s), s.forEach(ge), this.h();
    },
    h() {
      _e(e, "class", "icon svelte-k2wuss"), _e(e, "aria-label", "select input source");
    },
    m(l, s) {
      xt(l, e, s), Jt(t, e, null), r = !0, a || (i = G0(
        e,
        "click",
        /*click_handler_1*/
        n[53]
      ), a = !0);
    },
    p: d1,
    i(l) {
      r || (pe(t.$$.fragment, l), r = !0);
    },
    o(l) {
      De(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && ge(e), Kt(t), a = !1, i();
    }
  };
}
function pd(n) {
  let e, t, r, a, i, l, s, o, u;
  const c = [Sw, Ew], d = [];
  function h(p, _) {
    return (
      /*is_muted*/
      p[21] ? 0 : 1
    );
  }
  return r = h(n), a = d[r] = c[r](n), {
    c() {
      e = st("button"), t = st("div"), a.c(), this.h();
    },
    l(p) {
      e = lt(p, "BUTTON", { class: !0, "aria-label": !0 });
      var _ = it(e);
      t = lt(_, "DIV", { class: !0, style: !0 });
      var b = it(t);
      a.l(b), b.forEach(ge), _.forEach(ge), this.h();
    },
    h() {
      _e(t, "class", "icon svelte-k2wuss"), _e(t, "style", i = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`), _e(e, "class", "mute-button svelte-k2wuss"), _e(e, "aria-label", l = /*is_muted*/
      n[21] ? "unmute audio" : "mute audio");
    },
    m(p, _) {
      xt(p, e, _), rt(e, t), d[r].m(t, null), s = !0, o || (u = G0(
        e,
        "click",
        /*toggleMute*/
        n[30]
      ), o = !0);
    },
    p(p, _) {
      let b = r;
      r = h(p), r !== b && (rr(), De(d[b], 1, 1, () => {
        d[b] = null;
      }), tr(), a = d[r], a || (a = d[r] = c[r](p), a.c()), pe(a, 1), a.m(t, null)), (!s || _[0] & /*icon_button_color*/
      128 && i !== (i = `fill: ${/*icon_button_color*/
      p[7]}; stroke: ${/*icon_button_color*/
      p[7]}; color: ${/*icon_button_color*/
      p[7]};`)) && _e(t, "style", i), (!s || _[0] & /*is_muted*/
      2097152 && l !== (l = /*is_muted*/
      p[21] ? "unmute audio" : "mute audio")) && _e(e, "aria-label", l);
    },
    i(p) {
      s || (pe(a), s = !0);
    },
    o(p) {
      De(a), s = !1;
    },
    d(p) {
      p && ge(e), d[r].d(), o = !1, u();
    }
  };
}
function Ew(n) {
  let e, t;
  return e = new Tl({}), {
    c() {
      Zt(e.$$.fragment);
    },
    l(r) {
      Yt(e.$$.fragment, r);
    },
    m(r, a) {
      Jt(e, r, a), t = !0;
    },
    i(r) {
      t || (pe(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Kt(e, r);
    }
  };
}
function Sw(n) {
  let e, t;
  return e = new Cl({}), {
    c() {
      Zt(e.$$.fragment);
    },
    l(r) {
      Yt(e.$$.fragment, r);
    },
    m(r, a) {
      Jt(e, r, a), t = !0;
    },
    i(r) {
      t || (pe(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Kt(e, r);
    }
  };
}
function gd(n) {
  let e, t, r, a, i, l, s, o, u;
  const c = [Tw, xw], d = [];
  function h(p, _) {
    return (
      /*is_mic_muted*/
      p[22] ? 0 : 1
    );
  }
  return r = h(n), a = d[r] = c[r](n), {
    c() {
      e = st("button"), t = st("div"), a.c(), this.h();
    },
    l(p) {
      e = lt(p, "BUTTON", { class: !0, "aria-label": !0 });
      var _ = it(e);
      t = lt(_, "DIV", { class: !0, style: !0 });
      var b = it(t);
      a.l(b), b.forEach(ge), _.forEach(ge), this.h();
    },
    h() {
      _e(t, "class", "icon svelte-k2wuss"), _e(t, "style", i = `fill: ${/*icon_button_color*/
      n[7]}; stroke: ${/*icon_button_color*/
      n[7]}; color: ${/*icon_button_color*/
      n[7]};`), _e(e, "class", "mute-button svelte-k2wuss"), _e(e, "aria-label", l = /*is_mic_muted*/
      n[22] ? "unmute mic" : "mute mic");
    },
    m(p, _) {
      xt(p, e, _), rt(e, t), d[r].m(t, null), s = !0, o || (u = G0(
        e,
        "click",
        /*toggleMuteMicrophone*/
        n[31]
      ), o = !0);
    },
    p(p, _) {
      let b = r;
      r = h(p), r !== b && (rr(), De(d[b], 1, 1, () => {
        d[b] = null;
      }), tr(), a = d[r], a || (a = d[r] = c[r](p), a.c()), pe(a, 1), a.m(t, null)), (!s || _[0] & /*icon_button_color*/
      128 && i !== (i = `fill: ${/*icon_button_color*/
      p[7]}; stroke: ${/*icon_button_color*/
      p[7]}; color: ${/*icon_button_color*/
      p[7]};`)) && _e(t, "style", i), (!s || _[0] & /*is_mic_muted*/
      4194304 && l !== (l = /*is_mic_muted*/
      p[22] ? "unmute mic" : "mute mic")) && _e(e, "aria-label", l);
    },
    i(p) {
      s || (pe(a), s = !0);
    },
    o(p) {
      De(a), s = !1;
    },
    d(p) {
      p && ge(e), d[r].d(), o = !1, u();
    }
  };
}
function xw(n) {
  let e, t;
  return e = new Mn({}), {
    c() {
      Zt(e.$$.fragment);
    },
    l(r) {
      Yt(e.$$.fragment, r);
    },
    m(r, a) {
      Jt(e, r, a), t = !0;
    },
    i(r) {
      t || (pe(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Kt(e, r);
    }
  };
}
function Tw(n) {
  let e, t;
  return e = new yu({}), {
    c() {
      Zt(e.$$.fragment);
    },
    l(r) {
      Yt(e.$$.fragment, r);
    },
    m(r, a) {
      Jt(e, r, a), t = !0;
    },
    i(r) {
      t || (pe(e.$$.fragment, r), t = !0);
    },
    o(r) {
      De(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Kt(e, r);
    }
  };
}
function _d(n) {
  let e, t, r, a, i, l, s;
  r = new Jl({});
  function o(d, h) {
    return (
      /*available_audio_devices*/
      d[19].length === 0 ? Fw : Cw
    );
  }
  let u = o(n), c = u(n);
  return {
    c() {
      e = st("select"), t = st("button"), Zt(r.$$.fragment), a = d0(), c.c(), this.h();
    },
    l(d) {
      e = lt(d, "SELECT", { class: !0, "aria-label": !0 });
      var h = it(e);
      t = lt(h, "BUTTON", { class: !0 });
      var p = it(t);
      Yt(r.$$.fragment, p), a = h0(p), p.forEach(ge), c.l(h), h.forEach(ge), this.h();
    },
    h() {
      _e(t, "class", "inset-icon svelte-k2wuss"), _e(e, "class", "select-wrap svelte-k2wuss"), _e(e, "aria-label", "select source");
    },
    m(d, h) {
      xt(d, e, h), rt(e, t), Jt(r, t, null), rt(t, a), c.m(e, null), i = !0, l || (s = [
        G0(t, "click", mw(
          /*click_handler_2*/
          n[54]
        )),
        sw(zw.call(
          null,
          e,
          /*handle_click_outside*/
          n[28]
        )),
        G0(
          e,
          "change",
          /*handle_device_change*/
          n[29]
        )
      ], l = !0);
    },
    p(d, h) {
      u === (u = o(d)) && c ? c.p(d, h) : (c.d(1), c = u(d), c && (c.c(), c.m(e, null)));
    },
    i(d) {
      i || (pe(r.$$.fragment, d), i = !0);
    },
    o(d) {
      De(r.$$.fragment, d), i = !1;
    },
    d(d) {
      d && ge(e), Kt(r), c.d(), l = !1, Fm(s);
    }
  };
}
function Cw(n) {
  let e, t = fd(
    /*available_audio_devices*/
    n[19]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = vd(hd(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = cd();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = cd();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      xt(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*available_audio_devices, selected_device*/
      1572864) {
        t = fd(
          /*available_audio_devices*/
          a[19]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = hd(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = vd(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && ge(e), cw(r, a);
    }
  };
}
function Fw(n) {
  let e, t = (
    /*i18n*/
    n[4]("common.no_devices") + ""
  ), r;
  return {
    c() {
      e = st("option"), r = wi(t), this.h();
    },
    l(a) {
      e = lt(a, "OPTION", { class: !0 });
      var i = it(e);
      r = vi(i, t), i.forEach(ge), this.h();
    },
    h() {
      e.__value = "", Du(e, e.__value), _e(e, "class", "svelte-k2wuss");
    },
    m(a, i) {
      xt(a, e, i), rt(e, r);
    },
    p(a, i) {
      i[0] & /*i18n*/
      16 && t !== (t = /*i18n*/
      a[4]("common.no_devices") + "") && bi(r, t);
    },
    d(a) {
      a && ge(e);
    }
  };
}
function vd(n) {
  let e, t = (
    /*device*/
    n[60].label + ""
  ), r, a, i, l;
  return {
    c() {
      e = st("option"), r = wi(t), a = d0(), this.h();
    },
    l(s) {
      e = lt(s, "OPTION", { class: !0 });
      var o = it(e);
      r = vi(o, t), a = h0(o), o.forEach(ge), this.h();
    },
    h() {
      e.__value = i = /*device*/
      n[60].deviceId, Du(e, e.__value), e.selected = l = /*selected_device*/
      n[20].deviceId === /*device*/
      n[60].deviceId, _e(e, "class", "svelte-k2wuss");
    },
    m(s, o) {
      xt(s, e, o), rt(e, r), rt(e, a);
    },
    p(s, o) {
      o[0] & /*available_audio_devices*/
      524288 && t !== (t = /*device*/
      s[60].label + "") && bi(r, t), o[0] & /*available_audio_devices*/
      524288 && i !== (i = /*device*/
      s[60].deviceId) && (e.__value = i, Du(e, e.__value)), o[0] & /*selected_device, available_audio_devices*/
      1572864 && l !== (l = /*selected_device*/
      s[20].deviceId === /*device*/
      s[60].deviceId) && (e.selected = l);
    },
    d(s) {
      s && ge(e);
    }
  };
}
function Mw(n) {
  let e, t, r, a, i, l, s, o, u, c = (
    /*variant*/
    n[11] !== "textbox" && dd(n)
  );
  const d = [bw, vw, _w], h = [];
  function p(_, b) {
    return (
      /*variant*/
      _[11] === "textbox" ? 0 : (
        /*mic_accessed*/
        _[14] ? 2 : 1
      )
    );
  }
  return i = p(n), l = h[i] = d[i](n), {
    c() {
      c && c.c(), e = d0(), t = st("div"), r = st("audio"), a = d0(), l.c(), this.h();
    },
    l(_) {
      c && c.l(_), e = h0(_), t = lt(_, "DIV", { class: !0 });
      var b = it(t);
      r = lt(b, "AUDIO", { class: !0 }), it(r).forEach(ge), a = h0(b), l.l(b), b.forEach(ge), this.h();
    },
    h() {
      _e(r, "class", "standard-player svelte-k2wuss"), Au(r, "hidden", !0), _e(t, "class", "audio-container svelte-k2wuss");
    },
    m(_, b) {
      c && c.m(_, b), xt(_, e, b), xt(_, t, b), rt(t, r), n[44](r), rt(t, a), h[i].m(t, null), s = !0, o || (u = [
        G0(
          r,
          "load",
          /*load_handler*/
          n[41]
        ),
        G0(
          r,
          "ended",
          /*ended_handler*/
          n[45]
        ),
        G0(
          r,
          "play",
          /*play_handler*/
          n[46]
        ),
        G0(
          r,
          "start_recording",
          /*start_recording_handler*/
          n[42]
        ),
        G0(
          r,
          "stop_recording",
          /*stop_recording_handler*/
          n[43]
        )
      ], o = !0);
    },
    p(_, b) {
      /*variant*/
      _[11] !== "textbox" ? c ? (c.p(_, b), b[0] & /*variant*/
      2048 && pe(c, 1)) : (c = dd(_), c.c(), pe(c, 1), c.m(e.parentNode, e)) : c && (rr(), De(c, 1, 1, () => {
        c = null;
      }), tr());
      let D = i;
      i = p(_), i === D ? h[i].p(_, b) : (rr(), De(h[D], 1, 1, () => {
        h[D] = null;
      }), tr(), l = h[i], l ? l.p(_, b) : (l = h[i] = d[i](_), l.c()), pe(l, 1), l.m(t, null));
    },
    i(_) {
      s || (pe(c), pe(l), s = !0);
    },
    o(_) {
      De(c), De(l), s = !1;
    },
    d(_) {
      _ && (ge(e), ge(t)), c && c.d(_), n[44](null), h[i].d(), o = !1, Fm(u);
    }
  };
}
function zw(n, e) {
  const t = (r) => {
    n && !n.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Bw(n, e, t) {
  var r = this && this.__awaiter || function(G, Pe, de, mt) {
    function _r(Tt) {
      return Tt instanceof de ? Tt : new de(function(s0) {
        s0(Tt);
      });
    }
    return new (de || (de = Promise))(function(Tt, s0) {
      function pt(I0) {
        try {
          bn(mt.next(I0));
        } catch (ma) {
          s0(ma);
        }
      }
      function p0(I0) {
        try {
          bn(mt.throw(I0));
        } catch (ma) {
          s0(ma);
        }
      }
      function bn(I0) {
        I0.done ? Tt(I0.value) : _r(I0.value).then(pt, p0);
      }
      bn((mt = mt.apply(G, Pe || [])).next());
    });
  };
  let { mode: a } = e, { value: i = null } = e, { label: l = void 0 } = e, { show_label: s = !0 } = e, { rtc_configuration: o = null } = e, { i18n: u } = e, { time_limit: c = null } = e, { track_constraints: d = {} } = e, { rtp_params: h = {} } = e, { on_change_cb: p } = e, { reject_cb: _ } = e, { icon: b = void 0 } = e, { icon_button_color: D = "var(--color-accent)" } = e, { pulse_color: y = "var(--color-accent)" } = e, { icon_radius: k = 50 } = e, { button_labels: w } = e, { variant: x = "wave" } = e, { connection_state: E = "unset" } = e, T = !1, C = !1, F;
  gw(() => {
    (i == null ? void 0 : i.webrtc_id) === "__webrtc_value__" && t(40, F = new Audio("https://huggingface.co/datasets/freddyaboulton/bucket/resolve/main/pop-sounds.mp3"));
  });
  let I = (G) => {
    G === "stopword" ? (t(12, C = !0), setTimeout(
      () => {
        t(12, C = !1);
      },
      3e3
    )) : G.type === "end_stream" ? (t(13, J = "closed"), n0(O), p(G)) : (console.debug("calling on_change_cb with msg", G), p(G));
  }, L = !1, B = null, { server: q } = e, J = "closed", Y, O, te = null, ie, oe, ye = null, we = !1, $ = !1, fe = !1, ve;
  const Oe = () => a === "send" ? ie : Y.srcObject, P = pw();
  function Fe() {
    return r(this, void 0, void 0, function* () {
      try {
        const Pe = ye ? Object.assign(
          {
            deviceId: { exact: ye.deviceId }
          },
          d
        ) : d;
        ie = yield navigator.mediaDevices.getUserMedia({ audio: Pe });
      } catch (Pe) {
        if (!navigator.mediaDevices) {
          P("error", u("audio.no_device_support"));
          return;
        }
        if (Pe instanceof DOMException && Pe.name == "NotAllowedError") {
          P("error", u("audio.allow_recording_access"));
          return;
        }
        throw Pe;
      }
      t(19, oe = bm(yield vm(), "audioinput")), t(14, we = !0);
      const G = ie.getTracks().map((Pe) => {
        var de;
        return (de = Pe.getSettings()) === null || de === void 0 ? void 0 : de.deviceId;
      })[0];
      t(20, ye = G && oe.find((Pe) => Pe.deviceId === G) || oe[0]);
    });
  }
  function Ce() {
    return r(this, void 0, void 0, function* () {
      if (J === "open") {
        P("stop_recording"), n0(O), t(13, J = "closed"), t(17, B = null), yield Fe(), yield q.quit_output_stream({ webrtc_id: te });
        return;
      }
      P("start_recording"), te = Math.random().toString(36).substring(2), t(0, i.webrtc_id = te, i), t(13, J = "waiting"), yield q.turn().then((de) => {
        if (de.error) {
          P("error", de.error);
          return;
        }
        t(34, o = de), console.info("rtc_configuration", de);
      }), O = new RTCPeerConnection(o), console.info("created"), O.addEventListener("connectionstatechange", (de) => r(this, void 0, void 0, function* () {
        switch (O.connectionState) {
          case "connected":
            console.info("connected"), t(13, J = "open"), t(17, B = c);
            break;
          case "disconnected":
            console.info("closed"), t(13, J = "closed"), t(17, B = null), n0(O);
            break;
          case "failed":
            console.info("failed"), t(13, J = "closed"), t(17, B = null), P("error", "Connection failed!"), n0(O);
            break;
        }
      })), ie = null;
      try {
        yield Fe();
      } catch (de) {
        if (!navigator.mediaDevices) {
          P("error", u("audio.no_device_support"));
          return;
        }
        if (de instanceof DOMException && de.name == "NotAllowedError") {
          P("error", u("audio.allow_recording_access"));
          return;
        }
        throw de;
      }
      if (ie == null) return;
      const G = (de) => {
        de.type === "log" && de.data === "pause_detected" ? t(15, T = !0) : de.type === "log" && de.data === "response_starting" && t(
          15,
          T = !1
        );
      }, Pe = setTimeout(
        () => {
          I({ type: "connection_timeout" });
        },
        1e4
      );
      cs(ie, O, a === "send" ? null : Y, q.offer, te, "audio", I, h, G, _).then((de) => {
        clearTimeout(Pe), O = de;
      }).catch(() => {
        console.info("catching"), clearTimeout(Pe), t(13, J = "closed");
      });
    });
  }
  function V(G) {
    G.preventDefault(), G.stopPropagation(), t(16, L = !1);
  }
  const Ae = (G) => r(void 0, void 0, void 0, function* () {
    const de = G.target.value;
    ie = yield navigator.mediaDevices.getUserMedia({
      audio: Object.assign({ deviceId: { exact: de } }, d)
    }), t(20, ye = oe.find((mt) => mt.deviceId === de) || null), t(16, L = !1);
  });
  function ke() {
    Y && (t(18, Y.muted = !Y.muted, Y), t(21, $ = Y.muted));
  }
  function xe() {
    if (ie && ie.getAudioTracks().length > 0) {
      const G = ie.getAudioTracks()[0];
      G.enabled = !G.enabled, t(22, fe = !G.enabled);
    }
  }
  function $e() {
    return ie;
  }
  function je(G) {
    Xo.call(this, n, G);
  }
  function Ne(G) {
    Xo.call(this, n, G);
  }
  function et(G) {
    Xo.call(this, n, G);
  }
  function yt(G) {
    aa[G ? "unshift" : "push"](() => {
      Y = G, t(18, Y);
    });
  }
  const ot = () => P("stop"), We = () => P("play");
  function dt(G) {
    i = G, t(0, i);
  }
  function Hr(G) {
    J = G, t(13, J);
  }
  function Ur(G) {
    $ = G, t(21, $);
  }
  function R(G) {
    fe = G, t(22, fe);
  }
  const B0 = async () => Fe();
  function U(G) {
    aa[G ? "unshift" : "push"](() => {
      ve = G, t(23, ve);
    });
  }
  const Ie = () => t(16, L = !0), Xe = () => t(16, L = !1);
  return n.$$set = (G) => {
    "mode" in G && t(1, a = G.mode), "value" in G && t(0, i = G.value), "label" in G && t(2, l = G.label), "show_label" in G && t(3, s = G.show_label), "rtc_configuration" in G && t(34, o = G.rtc_configuration), "i18n" in G && t(4, u = G.i18n), "time_limit" in G && t(35, c = G.time_limit), "track_constraints" in G && t(36, d = G.track_constraints), "rtp_params" in G && t(37, h = G.rtp_params), "on_change_cb" in G && t(5, p = G.on_change_cb), "reject_cb" in G && t(38, _ = G.reject_cb), "icon" in G && t(6, b = G.icon), "icon_button_color" in G && t(7, D = G.icon_button_color), "pulse_color" in G && t(8, y = G.pulse_color), "icon_radius" in G && t(9, k = G.icon_radius), "button_labels" in G && t(10, w = G.button_labels), "variant" in G && t(11, x = G.variant), "connection_state" in G && t(33, E = G.connection_state), "server" in G && t(39, q = G.server);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*stopword_recognized*/
    4096 | n.$$.dirty[1] & /*notification_sound*/
    512 && C && F.play(), n.$$.dirty[0] & /*mic_accessed, stream_state*/
    24576 | n.$$.dirty[1] & /*connection_state*/
    4 && (E === "open" && we && J === "closed" ? (console.log("opening connection"), Ce(), t(33, E = "unset")) : E === "closed" && we && J === "open" && (console.log("closing connection"), Ce(), t(33, E = "unset")));
  }, [
    i,
    a,
    l,
    s,
    u,
    p,
    b,
    D,
    y,
    k,
    w,
    x,
    C,
    J,
    we,
    T,
    L,
    B,
    Y,
    oe,
    ye,
    $,
    fe,
    ve,
    Oe,
    P,
    Fe,
    Ce,
    V,
    Ae,
    ke,
    xe,
    $e,
    E,
    o,
    c,
    d,
    h,
    _,
    q,
    F,
    je,
    Ne,
    et,
    yt,
    ot,
    We,
    dt,
    Hr,
    Ur,
    R,
    B0,
    U,
    Ie,
    Xe
  ];
}
class Iw extends lw {
  constructor(e) {
    super(), fw(
      this,
      e,
      Bw,
      Mw,
      hw,
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
        server: 39
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Lw,
  add_flush_callback: gs,
  assign: Nw,
  bind: _s,
  binding_callbacks: vs,
  check_outros: Rw,
  claim_component: Rn,
  claim_space: Ow,
  create_component: On,
  destroy_component: qn,
  detach: bd,
  empty: wd,
  flush: Me,
  get_spread_object: qw,
  get_spread_update: Pw,
  group_outros: Hw,
  init: Uw,
  insert_hydration: yd,
  mount_component: Pn,
  safe_not_equal: Vw,
  space: Gw,
  transition_in: Mr,
  transition_out: zr
} = window.__gradio__svelte__internal;
function jw(n) {
  let e, t, r;
  function a(l) {
    n[49](l);
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
      n[16]
    ),
    time_limit: (
      /*time_limit*/
      n[17]
    ),
    track_constraints: (
      /*track_constraints*/
      n[21]
    ),
    mode: (
      /*mode*/
      n[19]
    ),
    rtp_params: (
      /*rtp_params*/
      n[20]
    ),
    i18n: (
      /*gradio*/
      n[15].i18n
    ),
    icon: (
      /*icon*/
      n[22]
    ),
    reject_cb: (
      /*reject_cb*/
      n[28]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[23]
    ),
    icon_radius: (
      /*icon_radius*/
      n[25]
    ),
    pulse_color: (
      /*pulse_color*/
      n[24]
    ),
    button_labels: (
      /*button_labels*/
      n[5]
    ),
    variant: (
      /*variant*/
      n[26]
    ),
    connection_state: (
      /*connection_state*/
      n[0]
    )
  };
  return (
    /*value*/
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new Iw({ props: i }), vs.push(() => _s(e, "value", a)), e.$on(
      "start_recording",
      /*start_recording_handler_1*/
      n[50]
    ), e.$on(
      "stop_recording",
      /*stop_recording_handler_1*/
      n[51]
    ), e.$on(
      "tick",
      /*tick_handler_3*/
      n[52]
    ), e.$on(
      "error",
      /*error_handler_3*/
      n[53]
    ), e.$on(
      "warning",
      /*warning_handler*/
      n[54]
    ), {
      c() {
        On(e.$$.fragment);
      },
      l(l) {
        Rn(e.$$.fragment, l);
      },
      m(l, s) {
        Pn(e, l, s), r = !0;
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
        65536 && (o.rtc_configuration = /*rtc_configuration*/
        l[16]), s[0] & /*time_limit*/
        131072 && (o.time_limit = /*time_limit*/
        l[17]), s[0] & /*track_constraints*/
        2097152 && (o.track_constraints = /*track_constraints*/
        l[21]), s[0] & /*mode*/
        524288 && (o.mode = /*mode*/
        l[19]), s[0] & /*rtp_params*/
        1048576 && (o.rtp_params = /*rtp_params*/
        l[20]), s[0] & /*gradio*/
        32768 && (o.i18n = /*gradio*/
        l[15].i18n), s[0] & /*icon*/
        4194304 && (o.icon = /*icon*/
        l[22]), s[0] & /*icon_button_color*/
        8388608 && (o.icon_button_color = /*icon_button_color*/
        l[23]), s[0] & /*icon_radius*/
        33554432 && (o.icon_radius = /*icon_radius*/
        l[25]), s[0] & /*pulse_color*/
        16777216 && (o.pulse_color = /*pulse_color*/
        l[24]), s[0] & /*button_labels*/
        32 && (o.button_labels = /*button_labels*/
        l[5]), s[0] & /*variant*/
        67108864 && (o.variant = /*variant*/
        l[26]), s[0] & /*connection_state*/
        1 && (o.connection_state = /*connection_state*/
        l[0]), !t && s[0] & /*value*/
        2 && (t = !0, o.value = /*value*/
        l[1], gs(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        qn(e, l);
      }
    }
  );
}
function Ww(n) {
  let e, t, r;
  function a(l) {
    n[38](l);
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
      n[18] === "audio-video"
    ),
    server: (
      /*server*/
      n[11]
    ),
    rtc_configuration: (
      /*rtc_configuration*/
      n[16]
    ),
    time_limit: (
      /*time_limit*/
      n[17]
    ),
    mode: (
      /*mode*/
      n[19]
    ),
    track_constraints: (
      /*track_constraints*/
      n[21]
    ),
    rtp_params: (
      /*rtp_params*/
      n[20]
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
      n[22]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[23]
    ),
    pulse_color: (
      /*pulse_color*/
      n[24]
    ),
    icon_radius: (
      /*icon_radius*/
      n[25]
    ),
    button_labels: (
      /*button_labels*/
      n[5]
    ),
    connection_state: (
      /*connection_state*/
      n[0]
    ),
    i18n: (
      /*gradio*/
      n[15].i18n
    ),
    stream_handler: (
      /*func*/
      n[37]
    ),
    $$slots: { default: [Zw] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new C9({ props: i }), vs.push(() => _s(e, "value", a)), e.$on(
      "clear",
      /*clear_handler*/
      n[39]
    ), e.$on(
      "play",
      /*play_handler*/
      n[40]
    ), e.$on(
      "pause",
      /*pause_handler*/
      n[41]
    ), e.$on(
      "upload",
      /*upload_handler*/
      n[42]
    ), e.$on(
      "stop",
      /*stop_handler*/
      n[43]
    ), e.$on(
      "end",
      /*end_handler*/
      n[44]
    ), e.$on(
      "start_recording",
      /*start_recording_handler*/
      n[45]
    ), e.$on(
      "stop_recording",
      /*stop_recording_handler*/
      n[46]
    ), e.$on(
      "tick",
      /*tick_handler_2*/
      n[47]
    ), e.$on(
      "error",
      /*error_handler_2*/
      n[48]
    ), {
      c() {
        On(e.$$.fragment);
      },
      l(l) {
        Rn(e.$$.fragment, l);
      },
      m(l, s) {
        Pn(e, l, s), r = !0;
      },
      p(l, s) {
        const o = {};
        s[0] & /*label*/
        64 && (o.label = /*label*/
        l[6]), s[0] & /*show_label*/
        128 && (o.show_label = /*show_label*/
        l[7]), s[0] & /*modality*/
        262144 && (o.include_audio = /*modality*/
        l[18] === "audio-video"), s[0] & /*server*/
        2048 && (o.server = /*server*/
        l[11]), s[0] & /*rtc_configuration*/
        65536 && (o.rtc_configuration = /*rtc_configuration*/
        l[16]), s[0] & /*time_limit*/
        131072 && (o.time_limit = /*time_limit*/
        l[17]), s[0] & /*mode*/
        524288 && (o.mode = /*mode*/
        l[19]), s[0] & /*track_constraints*/
        2097152 && (o.track_constraints = /*track_constraints*/
        l[21]), s[0] & /*rtp_params*/
        1048576 && (o.rtp_params = /*rtp_params*/
        l[20]), s[0] & /*icon*/
        4194304 && (o.icon = /*icon*/
        l[22]), s[0] & /*icon_button_color*/
        8388608 && (o.icon_button_color = /*icon_button_color*/
        l[23]), s[0] & /*pulse_color*/
        16777216 && (o.pulse_color = /*pulse_color*/
        l[24]), s[0] & /*icon_radius*/
        33554432 && (o.icon_radius = /*icon_radius*/
        l[25]), s[0] & /*button_labels*/
        32 && (o.button_labels = /*button_labels*/
        l[5]), s[0] & /*connection_state*/
        1 && (o.connection_state = /*connection_state*/
        l[0]), s[0] & /*gradio*/
        32768 && (o.i18n = /*gradio*/
        l[15].i18n), s[0] & /*gradio*/
        32768 && (o.stream_handler = /*func*/
        l[37]), s[0] & /*gradio*/
        32768 | s[1] & /*$$scope*/
        16777216 && (o.$$scope = { dirty: s, ctx: l }), !t && s[0] & /*value*/
        2 && (t = !0, o.value = /*value*/
        l[1], gs(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        qn(e, l);
      }
    }
  );
}
function Xw(n) {
  let e, t, r;
  function a(l) {
    n[34](l);
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
      n[16]
    ),
    icon: (
      /*icon*/
      n[22]
    ),
    icon_button_color: (
      /*icon_button_color*/
      n[23]
    ),
    pulse_color: (
      /*pulse_color*/
      n[24]
    ),
    icon_radius: (
      /*icon_radius*/
      n[25]
    ),
    i18n: (
      /*gradio*/
      n[15].i18n
    )
  };
  return (
    /*value*/
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new E_({ props: i }), vs.push(() => _s(e, "value", a)), e.$on(
      "tick",
      /*tick_handler_1*/
      n[35]
    ), e.$on(
      "error",
      /*error_handler_1*/
      n[36]
    ), {
      c() {
        On(e.$$.fragment);
      },
      l(l) {
        Rn(e.$$.fragment, l);
      },
      m(l, s) {
        Pn(e, l, s), r = !0;
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
        65536 && (o.rtc_configuration = /*rtc_configuration*/
        l[16]), s[0] & /*icon*/
        4194304 && (o.icon = /*icon*/
        l[22]), s[0] & /*icon_button_color*/
        8388608 && (o.icon_button_color = /*icon_button_color*/
        l[23]), s[0] & /*pulse_color*/
        16777216 && (o.pulse_color = /*pulse_color*/
        l[24]), s[0] & /*icon_radius*/
        33554432 && (o.icon_radius = /*icon_radius*/
        l[25]), s[0] & /*gradio*/
        32768 && (o.i18n = /*gradio*/
        l[15].i18n), !t && s[0] & /*value*/
        2 && (t = !0, o.value = /*value*/
        l[1], gs(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        qn(e, l);
      }
    }
  );
}
function Yw(n) {
  let e, t, r;
  function a(l) {
    n[31](l);
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
      n[16]
    )
  };
  return (
    /*value*/
    n[1] !== void 0 && (i.value = /*value*/
    n[1]), e = new J9({ props: i }), vs.push(() => _s(e, "value", a)), e.$on(
      "tick",
      /*tick_handler*/
      n[32]
    ), e.$on(
      "error",
      /*error_handler*/
      n[33]
    ), {
      c() {
        On(e.$$.fragment);
      },
      l(l) {
        Rn(e.$$.fragment, l);
      },
      m(l, s) {
        Pn(e, l, s), r = !0;
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
        65536 && (o.rtc_configuration = /*rtc_configuration*/
        l[16]), !t && s[0] & /*value*/
        2 && (t = !0, o.value = /*value*/
        l[1], gs(() => t = !1)), e.$set(o);
      },
      i(l) {
        r || (Mr(e.$$.fragment, l), r = !0);
      },
      o(l) {
        zr(e.$$.fragment, l), r = !1;
      },
      d(l) {
        qn(e, l);
      }
    }
  );
}
function Zw(n) {
  let e, t;
  return e = new ug({
    props: {
      i18n: (
        /*gradio*/
        n[15].i18n
      ),
      type: "video"
    }
  }), {
    c() {
      On(e.$$.fragment);
    },
    l(r) {
      Rn(e.$$.fragment, r);
    },
    m(r, a) {
      Pn(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*gradio*/
      32768 && (i.i18n = /*gradio*/
      r[15].i18n), e.$set(i);
    },
    i(r) {
      t || (Mr(e.$$.fragment, r), t = !0);
    },
    o(r) {
      zr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      qn(e, r);
    }
  };
}
function Kw(n) {
  let e, t, r, a, i, l;
  const s = [
    {
      autoscroll: (
        /*gradio*/
        n[15].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      n[15].i18n
    ) },
    /*loading_status*/
    n[8]
  ];
  let o = {};
  for (let h = 0; h < s.length; h += 1)
    o = Nw(o, s[h]);
  e = new Sp({ props: o }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[30]
  );
  const u = [Yw, Xw, Ww, jw], c = [];
  function d(h, p) {
    return (
      /*mode*/
      h[19] == "receive" && /*modality*/
      h[18] === "video" ? 0 : (
        /*mode*/
        h[19] == "receive" && /*modality*/
        h[18] === "audio" ? 1 : (
          /*mode*/
          (h[19] === "send-receive" || /*mode*/
          h[19] == "send") && /*modality*/
          (h[18] === "video" || /*modality*/
          h[18] == "audio-video") ? 2 : (
            /*mode*/
            (h[19] === "send-receive" || /*mode*/
            h[19] === "send") && /*modality*/
            h[18] === "audio" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(r = d(n)) && (a = c[r] = u[r](n)), {
    c() {
      On(e.$$.fragment), t = Gw(), a && a.c(), i = wd();
    },
    l(h) {
      Rn(e.$$.fragment, h), t = Ow(h), a && a.l(h), i = wd();
    },
    m(h, p) {
      Pn(e, h, p), yd(h, t, p), ~r && c[r].m(h, p), yd(h, i, p), l = !0;
    },
    p(h, p) {
      const _ = p[0] & /*gradio, loading_status*/
      33024 ? Pw(s, [
        p[0] & /*gradio*/
        32768 && {
          autoscroll: (
            /*gradio*/
            h[15].autoscroll
          )
        },
        p[0] & /*gradio*/
        32768 && { i18n: (
          /*gradio*/
          h[15].i18n
        ) },
        p[0] & /*loading_status*/
        256 && qw(
          /*loading_status*/
          h[8]
        )
      ]) : {};
      e.$set(_);
      let b = r;
      r = d(h), r === b ? ~r && c[r].p(h, p) : (a && (Hw(), zr(c[b], 1, 1, () => {
        c[b] = null;
      }), Rw()), ~r ? (a = c[r], a ? a.p(h, p) : (a = c[r] = u[r](h), a.c()), Mr(a, 1), a.m(i.parentNode, i)) : a = null);
    },
    i(h) {
      l || (Mr(e.$$.fragment, h), Mr(a), l = !0);
    },
    o(h) {
      zr(e.$$.fragment, h), zr(a), l = !1;
    },
    d(h) {
      h && (bd(t), bd(i)), qn(e, h), ~r && c[r].d(h);
    }
  };
}
function Jw(n) {
  let e, t;
  return e = new Ad({
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
        /*container*/
        n[12]
      ),
      scale: (
        /*scale*/
        n[13]
      ),
      min_width: (
        /*min_width*/
        n[14]
      ),
      allow_overflow: !1,
      $$slots: { default: [Kw] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      On(e.$$.fragment);
    },
    l(r) {
      Rn(e.$$.fragment, r);
    },
    m(r, a) {
      Pn(e, r, a), t = !0;
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
      r[10]), a[0] & /*container*/
      4096 && (i.container = /*container*/
      r[12]), a[0] & /*scale*/
      8192 && (i.scale = /*scale*/
      r[13]), a[0] & /*min_width*/
      16384 && (i.min_width = /*min_width*/
      r[14]), a[0] & /*label, show_label, server, rtc_configuration, value, gradio, mode, modality, icon, icon_button_color, pulse_color, icon_radius, time_limit, track_constraints, rtp_params, button_labels, connection_state, variant, loading_status*/
      134187491 | a[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (Mr(e.$$.fragment, r), t = !0);
    },
    o(r) {
      zr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      qn(e, r);
    }
  };
}
function Qw(n, e, t) {
  let { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { visible: i = !0 } = e, { button_labels: l } = e, { label: s } = e, { root: o } = e, { show_label: u } = e, { loading_status: c } = e, { height: d } = e, { width: h } = e, { server: p } = e, { container: _ = !1 } = e, { scale: b = null } = e, { min_width: D = void 0 } = e, { gradio: y } = e, { rtc_configuration: k } = e, { time_limit: w = null } = e, { modality: x = "video" } = e, { mode: E = "send-receive" } = e, { rtp_params: T = {} } = e, { track_constraints: C = {} } = e, { icon: F = void 0 } = e, { icon_button_color: I = "var(--color-accent)" } = e, { pulse_color: L = "var(--color-accent)" } = e, { icon_radius: B = 50 } = e, { variant: q = "wave" } = e, { connection_state: J = "unset" } = e, { value: Y = q === "textbox" || (E === "send-receive" || E == "send") && x === "audio" ? {
    textbox: "",
    webrtc_id: "__webrtc_value__"
  } : "__webrtc_value__" } = e;
  const O = (R) => {
    console.log("on_change_cb in index.svelte", R), (R == null ? void 0 : R.type) === "info" || (R == null ? void 0 : R.type) === "warning" || (R == null ? void 0 : R.type) === "error" ? y.dispatch(
      (R == null ? void 0 : R.type) === "error" ? "error" : "warning",
      (R == null ? void 0 : R.data) || (R == null ? void 0 : R.message)
    ) : (R == null ? void 0 : R.type) === "end_stream" ? y.dispatch("warning", R.data) : (R == null ? void 0 : R.type) === "fetch_output" ? y.dispatch("state_change") : (R == null ? void 0 : R.type) === "send_input" ? y.dispatch("tick") : (R == null ? void 0 : R.type) === "submit" ? (console.log("submit in index.svelte", R.data), y.dispatch("submit", R.data)) : (R == null ? void 0 : R.type) === "connection_timeout" ? y.dispatch("warning", "Taking a while to connect. Are you on a VPN?") : (R == null ? void 0 : R.type) === "update_connection" && (console.log("update_connection in index.svelte", R.data), t(0, J = R.data)), R.type === "state_change" && y.dispatch(R === "change" ? "state_change" : "tick");
  }, te = (R) => {
    var B0, U;
    R.status === "failed" && ((B0 = R.meta) === null || B0 === void 0 ? void 0 : B0.error) === "concurrency_limit_reached" ? y.dispatch("error", "Too many concurrent connections. Please try again later!") : R.status === "failed" && ((U = R.meta) === null || U === void 0 ? void 0 : U.error) === "connection_already_exists" ? y.dispatch("error", "Connection already exists") : y.dispatch("error", "Unexpected server error");
  }, ie = () => y.dispatch("clear_status", c);
  function oe(R) {
    Y = R, t(1, Y);
  }
  const ye = () => y.dispatch("tick"), we = ({ detail: R }) => y.dispatch("error", R);
  function $(R) {
    Y = R, t(1, Y);
  }
  const fe = () => y.dispatch("tick"), ve = ({ detail: R }) => y.dispatch("error", R), Oe = (...R) => y.client.stream(...R);
  function P(R) {
    Y = R, t(1, Y);
  }
  const Fe = () => y.dispatch("clear"), Ce = () => y.dispatch("play"), V = () => y.dispatch("pause"), Ae = () => y.dispatch("upload"), ke = () => y.dispatch("stop"), xe = () => y.dispatch("end"), $e = () => y.dispatch("start_recording"), je = () => y.dispatch("stop_recording"), Ne = () => y.dispatch("tick"), et = ({ detail: R }) => y.dispatch("error", R);
  function yt(R) {
    Y = R, t(1, Y);
  }
  const ot = () => y.dispatch("start_recording"), We = () => y.dispatch("stop_recording"), dt = () => y.dispatch("tick"), Hr = ({ detail: R }) => y.dispatch("error", R), Ur = ({ detail: R }) => y.dispatch("warning", R);
  return n.$$set = (R) => {
    "elem_id" in R && t(2, r = R.elem_id), "elem_classes" in R && t(3, a = R.elem_classes), "visible" in R && t(4, i = R.visible), "button_labels" in R && t(5, l = R.button_labels), "label" in R && t(6, s = R.label), "root" in R && t(29, o = R.root), "show_label" in R && t(7, u = R.show_label), "loading_status" in R && t(8, c = R.loading_status), "height" in R && t(9, d = R.height), "width" in R && t(10, h = R.width), "server" in R && t(11, p = R.server), "container" in R && t(12, _ = R.container), "scale" in R && t(13, b = R.scale), "min_width" in R && t(14, D = R.min_width), "gradio" in R && t(15, y = R.gradio), "rtc_configuration" in R && t(16, k = R.rtc_configuration), "time_limit" in R && t(17, w = R.time_limit), "modality" in R && t(18, x = R.modality), "mode" in R && t(19, E = R.mode), "rtp_params" in R && t(20, T = R.rtp_params), "track_constraints" in R && t(21, C = R.track_constraints), "icon" in R && t(22, F = R.icon), "icon_button_color" in R && t(23, I = R.icon_button_color), "pulse_color" in R && t(24, L = R.pulse_color), "icon_radius" in R && t(25, B = R.icon_radius), "variant" in R && t(26, q = R.variant), "connection_state" in R && t(0, J = R.connection_state), "value" in R && t(1, Y = R.value);
  }, [
    J,
    Y,
    r,
    a,
    i,
    l,
    s,
    u,
    c,
    d,
    h,
    p,
    _,
    b,
    D,
    y,
    k,
    w,
    x,
    E,
    T,
    C,
    F,
    I,
    L,
    B,
    q,
    O,
    te,
    o,
    ie,
    oe,
    ye,
    we,
    $,
    fe,
    ve,
    Oe,
    P,
    Fe,
    Ce,
    V,
    Ae,
    ke,
    xe,
    $e,
    je,
    Ne,
    et,
    yt,
    ot,
    We,
    dt,
    Hr,
    Ur
  ];
}
class hy extends Lw {
  constructor(e) {
    super(), Uw(
      this,
      e,
      Qw,
      Jw,
      Vw,
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
        container: 12,
        scale: 13,
        min_width: 14,
        gradio: 15,
        rtc_configuration: 16,
        time_limit: 17,
        modality: 18,
        mode: 19,
        rtp_params: 20,
        track_constraints: 21,
        icon: 22,
        icon_button_color: 23,
        pulse_color: 24,
        icon_radius: 25,
        variant: 26,
        connection_state: 0,
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
    this.$$set({ elem_id: e }), Me();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Me();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Me();
  }
  get button_labels() {
    return this.$$.ctx[5];
  }
  set button_labels(e) {
    this.$$set({ button_labels: e }), Me();
  }
  get label() {
    return this.$$.ctx[6];
  }
  set label(e) {
    this.$$set({ label: e }), Me();
  }
  get root() {
    return this.$$.ctx[29];
  }
  set root(e) {
    this.$$set({ root: e }), Me();
  }
  get show_label() {
    return this.$$.ctx[7];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Me();
  }
  get loading_status() {
    return this.$$.ctx[8];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Me();
  }
  get height() {
    return this.$$.ctx[9];
  }
  set height(e) {
    this.$$set({ height: e }), Me();
  }
  get width() {
    return this.$$.ctx[10];
  }
  set width(e) {
    this.$$set({ width: e }), Me();
  }
  get server() {
    return this.$$.ctx[11];
  }
  set server(e) {
    this.$$set({ server: e }), Me();
  }
  get container() {
    return this.$$.ctx[12];
  }
  set container(e) {
    this.$$set({ container: e }), Me();
  }
  get scale() {
    return this.$$.ctx[13];
  }
  set scale(e) {
    this.$$set({ scale: e }), Me();
  }
  get min_width() {
    return this.$$.ctx[14];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Me();
  }
  get gradio() {
    return this.$$.ctx[15];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Me();
  }
  get rtc_configuration() {
    return this.$$.ctx[16];
  }
  set rtc_configuration(e) {
    this.$$set({ rtc_configuration: e }), Me();
  }
  get time_limit() {
    return this.$$.ctx[17];
  }
  set time_limit(e) {
    this.$$set({ time_limit: e }), Me();
  }
  get modality() {
    return this.$$.ctx[18];
  }
  set modality(e) {
    this.$$set({ modality: e }), Me();
  }
  get mode() {
    return this.$$.ctx[19];
  }
  set mode(e) {
    this.$$set({ mode: e }), Me();
  }
  get rtp_params() {
    return this.$$.ctx[20];
  }
  set rtp_params(e) {
    this.$$set({ rtp_params: e }), Me();
  }
  get track_constraints() {
    return this.$$.ctx[21];
  }
  set track_constraints(e) {
    this.$$set({ track_constraints: e }), Me();
  }
  get icon() {
    return this.$$.ctx[22];
  }
  set icon(e) {
    this.$$set({ icon: e }), Me();
  }
  get icon_button_color() {
    return this.$$.ctx[23];
  }
  set icon_button_color(e) {
    this.$$set({ icon_button_color: e }), Me();
  }
  get pulse_color() {
    return this.$$.ctx[24];
  }
  set pulse_color(e) {
    this.$$set({ pulse_color: e }), Me();
  }
  get icon_radius() {
    return this.$$.ctx[25];
  }
  set icon_radius(e) {
    this.$$set({ icon_radius: e }), Me();
  }
  get variant() {
    return this.$$.ctx[26];
  }
  set variant(e) {
    this.$$set({ variant: e }), Me();
  }
  get connection_state() {
    return this.$$.ctx[0];
  }
  set connection_state(e) {
    this.$$set({ connection_state: e }), Me();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(e) {
    this.$$set({ value: e }), Me();
  }
}
export {
  fy as E,
  hy as I,
  C9 as a,
  iy as b,
  Rc as c,
  ly as d,
  ny as g,
  ry as k,
  sy as l,
  ay as p
};
